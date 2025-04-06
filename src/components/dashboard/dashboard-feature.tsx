/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3ueRYMfBBuj6E6CK7CceTtiAnN9EGBxmZHsJzzYHPDYc88H1mffkLfMbbAjv95VLF4z2Nc2b6oRerKWy3ttiQWq6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EoBSNvj44dkrfcQiSHQC9oAjKxYVFFfDepxHe32z3AswkWURchaVpw8bAHqfV2c2Cqc26eoCAEKRqEN5XMSWc38",
  "key1": "3diQar15FoxNUkeWnzgGX668WJUfjtFoN8YNsCXJqSP1QJdb2y8cfkVX8MVPQawmj1zVmAUvwCDJeVzZ4BmSpJK3",
  "key2": "tFhcqpvEMWYjMGS69Jm3C8euQiZTA7yr4VMB35GAXnWn91abvhCkNx5N39WekGLJteSe7JnLmsGPessCvWooyVE",
  "key3": "2xoXVp7tB2225dqwJpMi72vMqWBjAyjYMhuzdnGdKyiQy4NhiH6CpH2Xp5FigPDTGAWDgQgAuBYUPjR4exurZPd",
  "key4": "7svvCVWJaGaBUrZVTpmd1neVTD6fNL1tCnKrDxYAvAW5R9VPAJhrTECT2HtPdvYiJR3Y8mmJ2QK5QehJgHR3uiK",
  "key5": "2gr4cY32gjzuviqHEjVproNtBcoe9uaK552Jtd9BbRF8vrT4mH7zS1vXPSk9T7juKQR5uTokQ5mfjAs6r2GaRbMf",
  "key6": "KuNJ5HyMjgCXrSzLCGqA4ZgcUphTRwP9vZfuW9EYgTQBeBSukDPS2nxdjZ1GJZkUrE9bYCyTXp8FcQdrSj9Ydij",
  "key7": "2fJhX4E8HAQZym1DrSqNfPiWqtwEM7wcNmeWuXeVQrEXBDJijhXV8SidYM6cSgwS8qcgd7EDhLdk3MrX6XDy6jcx",
  "key8": "2gjKrJ65gi9mVdLAdNFVWAzVijN52xLsbXhGNDik2pnDyrokrMFT2hY7LDNcE33Ev9QyhNwYwRZDuTt3cuTRGAL4",
  "key9": "4DuMMGMGzzNBy5MVD67fDQpATBFce4U5Ari4k1msGNSdrWVFc4XzvwncvaE3PvRBt3kCF1fxhaDV4UJvWj9WPYTe",
  "key10": "4jSXyMU45Q8GEYJXv9wUaeMDEVKD6G3m8bjYwgThM9XYJVPzyy61j3gdjGj24FSP1qTqeT4crhVbRppoecYoE7LB",
  "key11": "2UKxw4D7jHYzX9Zdh7YobHwKz4YNW8821J2UzYEkrVoRW3zXrMhK5qkoSi9iSUZry4ZNeRW5F8Vhon5df6C82joM",
  "key12": "5B2qLxPo9kzE5bKMpdRU6jdPMKabVECKFd4o23GGvUU3LiwbSi9vdnYja4EWTQKwcWhdhHn2qePE6MwfSzogRocs",
  "key13": "25S4oniUG9tMmsHr2oiY2VTYMa5PCc3es8fn4V3Xrg8Mx1Sz9E9gz4zikzdnW5191vbCsvMR9FzHNtSdqEZG58F6",
  "key14": "5p82BmpatLoYyVhJmrSraXzNxTGc1KGxpWCSQVm7hrMPqrGaA7f2nGPfLCTXDxdas7KUm2ZVCLhEMvwzDmyDpdmd",
  "key15": "3ZNN5MY5aLzeswqyUpkUmghE6jQESdjtLYWZ7yqMfnA9RwACAf8HgjSkpCy9V2vfpTDfvtXdtqJQpJY2WiZGuMrL",
  "key16": "2fXKXQigrWb7U7634yN4YWmth4QMEV9L6V9tcZgXPWsNUgCgJbR69XwzXnmwQVzH8LkHBxsbL3aw48otZB6PqwK",
  "key17": "42m8t8DDx9QPJu3q6VC4dU3s3qEMeLSLYfV6vpgKLA2ZHafgE7i4FNVLywPoXJwhWHX7HtLURyYoQjsWiKjnZ74d",
  "key18": "5fqsdYB8Am5XSZpaKsSvQc3ceGwarZQNnvyxpCghUhZyk732VPzc2knVKoRNUiE9t3Brx5VnVqUkPMhMnTsh5ynR",
  "key19": "2A3EkCmyX913bfMNiipTEKAEbkUMsZW1skjKhaZ6qK4SrJYPVeAtw5zoaP5NdxDS75ztr3gn6UHLFwfLhxf29ce1",
  "key20": "4NSmpft7gNAhHv3PgrY2BEJgGaxPYSzFrUtu9fBA517ouuHWCcVMFQ8SJgzBVaLfmWYDgcfaibfzcRD1GCTTZ4DT",
  "key21": "3ksXYfTGxzzNRiucVagrtcQoZyX61RYdQWkYBM1SE7VAj7AxokAWJMxWdAVg9NognAqPhGZ2M7phhdsGMcq2WNHR",
  "key22": "5dmVK3NXXYs1GRmM1Znv3m5S5CEByR53DE15JLFaacyDthf578Ng6HXkadyueVrPG9nNauUbECMTpVFbs1xfoitz",
  "key23": "4m1GUQQtqnYpmMAWHW2kQTSv887wX6T9JDVsY145QeM3dqpXzzV7VbBmnWJVwYHCwCT7pPHmGEU9Ry2og7S7tZUS",
  "key24": "LDRsK8hoQTNznog6q3CXy6Z46q4pA979ndN4wco8by15cvFNScHqkpxmvhpWinyCChLyKfSR4BfnXo7tKKGvRKa",
  "key25": "3oo2hFy2vSavn74ADhbt459wQ6MDNDR5sKyGxxVYgtiAMwFnuhXBTgcmSJ8UUE92MA2HFkiqs79KJXeUk5TSxnPq",
  "key26": "5vGJstY48ynC7UnivYFBBVFQWq8RxuJ5Mvec1nBLZFBimQxXTYXTuWDm2G5vTMzUN645PwVxXHBkyZZPHbcXWfE7",
  "key27": "5kcBHWAefcMgJ9guMjUspZSXEBYFnJtKipqFMj6GqhQ5oT2DMUBgPe8VPMrHriWTN3GrGR8oy3e6Tggyb8THkws4"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
