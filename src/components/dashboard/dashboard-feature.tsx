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
    "4gdW7yVxqLPVf9AP1jceEHqKyW2fkvDjsGW5PYN12DbDYmCiKsLv7MeA3uUJvtBr5NRoag6rjCpJ5tTMVwX6iBXK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aF1EkYKCvhHk1VQoK2unM7yYHM4cH8QQoMJVpUNFcfWxd6oRjQFUEMN8eCLyqAvYDkc7nwNPuLjLiEUjYpSmvfC",
  "key1": "4xW65wrBK3K6kP8YX5XBHRsgutnVbhhsWiPJ2YzmLvgByYzPHt2Zvf9YGGbw7xmH7SMBseKCvZPjKzc3fbdPNA4Q",
  "key2": "3XXoPXRuofNQp2y1AGxeA6kyBNDSZa55kwLnrNMjCCjT9BjCnVRWHJQ3SRezoBy5M8spBNtw6pXZ1xEz94a36YY6",
  "key3": "2aVXGxhnL5UMWN3MHdFoA6nTuHn3eyRZAguaQCbSwa5SMwoR7w98bu6wMJx4riXrUrAm5TDuNU7Dqc43CCX83Dv7",
  "key4": "66dHwNNCz2T7Nqx5X3d5H2kXbRtKqahJcUEq27aQmEYZ6E4xHEao7W6NWR6mjt3nJYyJk36ZJWbgBpgjYh1EzSnw",
  "key5": "T8pa6xb5GrZ7PnLV8BTGz7XSojGJwgZtAK1LTtAn9cz4i456MapGExLp6P4dceXSLB5mx5T7yYNDrnpsvpa2Sg3",
  "key6": "25mMjiywBYbwipwaDBvHXP6vixavGQeieXUPczf4ZAYxBFtynAvZPsc1Cp1GfT8nwpiz4oUvCAP4XCUGEwNgx8oM",
  "key7": "4Sh2X1AybyiSJTbTxVrNxCxPnxX6NpAbzjErP18xtcRAVFfPmZw2y84fdgB3p5YnH3Hvr5zJFHsn7WepeAnrjfTT",
  "key8": "23Nnbmuvv56N5bcC7WNEKqgvLoGBbm4DSzwwUTn467jhjrKeCdyB7nZTfE9qiLzrN66pWoNS3496nCsXnpfcZ8SV",
  "key9": "44aHrKAv9yXcN8WJSrUoiwnxdsEm9tUhyGHEtDkDB41n74Q8Vd5YUGSzcPFxrTDvLoQFJzfh36c4LejuSE4GLb43",
  "key10": "2XU5hng8ycuhw4ErvCNW1XmSRW1Bk6XFeF8Af21pmKWNZdKmFUMZfyNybrZAowG41ZtpLPFWfVoCg2r4adJ8D2iL",
  "key11": "4cyXPtcCxF9uUzvdz88mE4EgkeKWDnvFDiUfQiWzQmo6nKstL3NL7MLHmd8jeDM4xbrToCMSDmdhVvH5skm7zkZ8",
  "key12": "5rpzb3vXzE1V4hfw23MWAD6wrGVhiQP2QAWKYS7RU6Y6AsZ3NpCmd4JSRRd45NHrcDBHteJ7GMp5oSvmsn4PqY22",
  "key13": "5Voz3SSexgkAYYqQV4eCMTXxCTdKnkxkCZS56Fe1e4fUU4QYS6picYRNWKt8NJ9KfHMZKHg97JPzTQCVMPNKV5Jh",
  "key14": "2YXMXpsSLxhnuFoVETzt26z67uCrLesW7MK8yG1EdCPzJTpZdGrex58EQCzPoxjG7E3fH883ABvwjhSbGgEkhqon",
  "key15": "2bcdWnytSrfPMwDcoM51MHdHhQ1bYBczU5cU3KyRBLhkwYbKJkcAVSiBka8qCyXXunPQmzhf8pMJ1XntQX6KpFm5",
  "key16": "2ZnE9rWECK8rrvZ3DAzWqDqn3VsHi5ekVhkDqV82PvCc3VWhWYRkQePrtvusjGarNfP6SenZsHpAfDzrGZxVT3RZ",
  "key17": "211hpSs8yQD9bEvdTQ6xFdFCcwo8JYads2PgyvkVFVrYA1LqLChPyF1SvhW8oEpLjdrpXGdw9Ynzn8kx87KznZiV",
  "key18": "taoSwSzbYM5hyfhCPyxPBwzK6AMiK4FZ6GsR22HnL1GinQS8TfSCVeSe9CNHD6fvF6Xj8pdiF55NvZJAhB2dgzL",
  "key19": "4Q7B1piQ4ViNPpoqh2RPGb7ycQ9rswq4HDEWrRCqVXPvheHaLg5Gv5teghYd9CSjN2j1fLSfA81mhKMXN7TTXx4y",
  "key20": "3voiEv1EquetCDFE6xVmD5VtGbW65L9QEZVdE226n7RciUNgdGYJg8u8EgQFr68sr6BSMtP2Ws4yxu4e93pkHhhR",
  "key21": "5tqQ19cbUBKWZFRZcwKzH8zXThCwAovf8qDu4Mjdra3TG1xvy6MgdVKyNihWfVPVCFsxJVMb1cZ6JaaAs6iZivaZ",
  "key22": "64WF2aKHTjX176zGBgb9RQSso3HE1etS2Gin5EfDTvD8BR3AdywKwGtYnZjryy1pjfPiuhJhTuCp8yR7hH7QKDdD",
  "key23": "2xmdePUnTNT67iTRdL25jmsHsRpvYkix2trgCT5Prv41hsLHZkqJvh41ezesiMqrQreo7jEgt9ozjBRNkrfihRip",
  "key24": "4q8EC9Fs3fLpSszvF7RGUuDmfyxdcVNtWBFKRhMVAbvq817NmiDZod1n5SRgT4HxM1UJnwkdV71ZaUQWe5PAJY35",
  "key25": "2zhBWPvSencmZF63RtadQB16Jc4w3ptoUqHATs8v61u2zGhjFgBB9xmDAM8UYerCazw1mJfHFnf6NmXT3GhYvoQW",
  "key26": "54x51CGd7RND1iJKqgxMWuPUccUtXJgyv35y6rDNYaPgRMFvpWYCVTdCsar9cbFau1R5ze6NWZvKum7SUgNxhV1W",
  "key27": "5F9cjeaXxjeznFjXRFCSKkagUa4ZrMexaDmEd2zLy1Gr7Y5YH2bGxc73UU7i3woBqkViXh2mPU1GapQKTY9mhWtd",
  "key28": "4ywA8CYvX8sz6a4yBSSWGbJ4qkPVG72NrH91pouiF22eM6P1wvBkR9b919YXVjxGxnfuWUpyAJPewtVvmRNu5XoB",
  "key29": "3jQ4K66o6jWUfEMhVF66mbw99mjpz4VXu9ZH6W3trq91iJAixGzEeFCZdwuJzjRcpnZfkvhnTy6uQj99891niDe4",
  "key30": "RvdCL9jdYrtXaoYC8VSyh8ShazR4mhtDC1aR3PN9z3cPUH6ztrePFTv4XoKCaEG1QNU4G9zkhe1oP3JgMCdabM5"
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
