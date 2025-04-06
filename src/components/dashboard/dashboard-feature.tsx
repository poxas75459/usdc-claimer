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
    "5jT8ZJNYAsnuwpDfjetM1M4SJM9Po8Njo9N1NghtLu1Pv9fDbsXirjnvoNNYqFdDRC7LSs4FvLvegWpj5o4btKnE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KosDkS2vvN2VRtCmDFenkpZtAdCqXsQKqVpf1UUMravuJBHA8BRxiCGXKRvu9511AXrWEMWkXMwNPg9toxCHSae",
  "key1": "3AEVvEZykg1CBsUshR4gi9jjaCE2CeT7dC7LXH9mtY6qZAaLFohjZEeNxoNqP9vCBTdVTbFepFKdexKNQECBgoUV",
  "key2": "3gYUk4nh6SBMzfCLGoKvYwLJnSei7esMLBnqnv85fpeKAWzbcHgBjEVGPVm7cxgcUqQcXxjFpcMjRBLVcuaXyXYx",
  "key3": "5LcxMEFDjAde4mw9JTRDLL36EC78fku3fwaiyU8zuGqxExEfsjeJ3twkynKV3M1wnAx59WhaK6K7ZxBRTPT9ienM",
  "key4": "DAuNpjKFzi47QqjryqYMkUpMRz3Su9AuA5pCUkhgdTiVE3VEb1SL1mYNhmdZKBM23dGr9cayS5K1ZQUWDy9X9kJ",
  "key5": "ys65mRdfnKW2bsWteZhDbGcZ6zpx8Erm1FRy7MWGW187t5KvsNqUSksgq683x2cHq4BW8m1Xbn9PecTBfji5k62",
  "key6": "5XkMKrbJRUxRptUS37PoKmg75t8psEaza8Ykufu3W3C7it95nKzGPNBcwum4mC2HCFM9i9iWpBYNkJtV8Bm3v5CP",
  "key7": "3vPzdbfcpZb625pBYMxhkcixJ2sMBDx5T4GXm3ATdpgCvJC2FsWo73pjRH5ihuYMdRTihs1Qo9XtgLn4tQWdNJSd",
  "key8": "3JFKzHUj7CrtJTfmeNdYpHtHFLieX3mKRzeg4Wd7Nf3VQkzG4hyioJtacMFA4CqY7rUeXcxwZvpqzniWfazKn2Vn",
  "key9": "3Wwr8DKK6tYgWQFKTugJAEpWW7r8YpbNUMz8wJUyJpdGi5jkgKmudr6fNx7kXjT2Yj6NSZowkjBqKrG5AunXHRFa",
  "key10": "X4NaDCMwPs7tPz59Ft4i4gtQ8RkEUwyv2brft5s33kGxv6QRwbk52akBtAEMCieb5ASvxouXNDEzbHWtTK2DAk8",
  "key11": "5WrMdqesn57Ju2J3EsGEND2MfN3xPYoeTvj5YUkvn7ikZtrjvQXrTU2X8G4gxcfTc21EAaUcCUpwFxknDYUKSQKw",
  "key12": "3Qf9z6zNn5WRvArzYJ5hza3T6VXkPsBH6Qc1942AbhajPSeDnorxstHrAN6ALxfmufGYEVmHpffECv4E5UPDgzGE",
  "key13": "5X8nr5XfvcGun2YQAYS4ztMrr1eJw44nkokgTEeApoe9qupCZnwXG4UkTWGTawXKktirY1Nuss9Xp55QN3KpP48X",
  "key14": "5PnXFL9rhwwmNqCJmCGhzb9cKfygK52t2g47eQ53y6waM12FTzDF5wQtEMVGrKqV2K3kZx6gmazC1ao7GVJ7xeoM",
  "key15": "QKQWc8PDFZGWDSb3FiMmD85npZmyZbntY6CKtX2g7ebegQ2FZvWVfRLfEXdKeCYZJhmmvxaVkNbBKZJAKPf5T8n",
  "key16": "5GK4Y9y6BPJtAfr61ePqiU2Zzri42w6SEXor2NQey7U1vKBMfQr6wQ4kKCpWuKVCY1PM8YKmf7NXeuU8uED91evj",
  "key17": "3Dr6QAwmh7L416waCNBgavKT47ZgA4V3ggxEqtvRrtPCHE79f5qZ2FfBBs4zUaHwhkN7LJr4VySi5N4GRBkYKARu",
  "key18": "5FAWDFaVaaMjmc6FutDwnpxG5sUa84nF1qwXwcydBsKqwdZjpyhZ8X4kM2xoQYEPQyJV9A9ZyUVhVLS7niGqkVke",
  "key19": "draqSwR9RaSqtRQmDGMX47ELb4gM7TpYe66cTZ3RpvrJZPV553M8PVCQJtnxxbjohachDcVVm5W29A69FqMu3RG",
  "key20": "5C38bkp6vrHRQVDj6Ly4iSriC9PKw4zxGjCy3PEKJpj9GFBMXdgrKqYGsRgABJrXx6FutA9wKHNDGWcCkwriGbuL",
  "key21": "3uLa5jiubV9cvrKrb7eDSFhqixVgac62oyLX32xZKqTgEiqoy2dPGSVvCvWqpDMi2DNjSfr9yJD5G5G2XJEGMV2s",
  "key22": "4QHFHMhQvmJXwj6hxD3q6GVniDY64yJpKnswkmYZ8NVpRyZabu1QogF8NXP3woGoFAjt4Fd14mawbhkzzQsE3hMi",
  "key23": "35Q8itsz9GWTxyNwT6sZzsek9hzySoN3vTqKEsUitEsVqcos9gPSR2KZNkGjWvCXXxj36gQyVXfxtCwcvypJGmDd",
  "key24": "3AtjktznMDnCijnHsaJjAKHjRwYTbk6hbRC1Xvrk9NQivLHzDCDJahaqUA3dArMpKsjWxQRKgzzqQspG97UHqQqT",
  "key25": "4hCgDFtBZtYJsCGemUEoCNtAqQQ1aC85Bv13JgiFvJpQDwvxEV5Rfd55FttFGxq5k1Xf9Le3vLhvhEbiqWDChZKZ",
  "key26": "5M6mvmutgUoczRv7QGxBAYASkyT3dWvMoHkhyM7CC84TgWvXaWadSQ24Fss35mhPrQp4VuUFCAQrTe82AcXMrPtj"
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
