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
    "Eb32VAnbG2X4q5LnkcV7mdGyma7KdaqCtH2Ls8CLxi9Mc2qidxYZe4xRL5B8mmiUTXjLmopVRTpvEU1KdfGMA2P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pANnKfYCR1vcxExVePrGeMgodEVKS4WkYebe6dNgwC8sDt1ciB8xji2zZenjuDiBoXpe3eY2mFPdL3w8uC2eU6E",
  "key1": "xrUVnc6H47YppczfJo6EWYFbnxXfGDM2TNG6zVnMJjt1jLD3srKciiSmiCynqHYa1rQjLCmjA9fbtjfkXvn9ZTr",
  "key2": "u9GpphXBJvX6G8DGiw69CckMtrFiM9AEMLV5QR3RGUMuoKEMcymTMJyGV8QCgrEtCv2zhBJKcajdxVv1zAGVwxx",
  "key3": "2tWpyrm8vM9tKhi5aT17DMMPKJoJBTbYCPYL43a5JgDrX8qsY4nSM9UqZZb9AtizCYk9TYJ1LCNsGkH1R9ouEaJL",
  "key4": "2METvoTVzdQmf63Npm384CyptQQfKKuWLXMK3pdwASYiujJruxt9f8oxdNqZcHUSizHeXgsZMA9Qw6XA9vZAd9FP",
  "key5": "4FEJ7N6baqR83ohx9ybf16D5LHKjSNDQ316cjcdfnZH9dcgtWyWG23PrTNK7gRqFYbWYt9ZuVkH12BDtX72fUZqT",
  "key6": "24htqsEeKhHD3sxBHGUqt9SQJKLJQguQHWYr8H1Wi4rsbVG5pxMCVRdmvA9rUnWBcZMaRcs813GxBJmhdQ55Z8eX",
  "key7": "hMh7bB82L9kc7FQNLAxdvGMLR8c3twfhsLsLBrVcFz8A4A8SnG7TzhWotywwRYFohqqsLN3aeQ42FEgikgpSa3s",
  "key8": "qXDpKirXumNMkNhX44fjCpRz9cbky2KL5bgTUeMSEz5tJMcmJTBsxL7yZL4P9ueT76AcbKgCaqWervFsCTeQB29",
  "key9": "5B4N3cHjrVKzN3gAaFkYXaEkBqnA6azNkx3qvsAayL2X6GMVUdm4wn6ayXnYYaxkhEUmg1H5huWqjMr8Cfzn1kqS",
  "key10": "36Hj78FhBPVtHY5HcREVseAmn4RVAVRnVPtY6Fe9eSUkG3B3uidVv8NYHgGRWCJ85d2T5r9d8NZxDz9qhXb8kUkD",
  "key11": "5jmRwvqfxwzLxzeBeMUSQkzXmm9VvmzkbGdTFWMawKM1bXKy7zbseYBbZEkmb9FeWBMdpnZZuJgkfLberFVREauP",
  "key12": "ENw8GyYuWVVQGe8jeMNE75YJrU5fWWuT7Fn99NbpbLJWDtyKVY16QaMvaMpbZqwoMeHF19BHEBD439BXMDffDnU",
  "key13": "5zC9FS9a4SAC8vv4Wet1L8xxMgty9eGJzRfp6yAreebN5fZ9fxy488WAQQdhpQCCqgwZzLar5ZU3FkVdivEME1sD",
  "key14": "2Lt7jTmSpe6yjFC1otqJpisKJ7gJxMgrMGaB3nf1QEqV62rJcQt8Y1W3mb4btyn4T1zUzwNKpNCspxgRX7KJNwTM",
  "key15": "M8aKej6bBaggPHAqwcoPBafdTtfwZYAnwXrTuq7cK5kTP3dH3SwpuyF4bmjPRZjqqkbmmjzpdgm3E8xiQ1WnEaz",
  "key16": "1AU5sdrHQGF9EZ2VVpPWZdiDstkG1UEmyJe2nyyHFVviipmYaaGRSbbnrmBkof3fnp7UHohELURi56vLcqzZKEx",
  "key17": "4tgF4VwYhHBEXEH2uyDUepu3CKm5M3spdkzVk27aL2iyHf5nhcboe9fcGv4wNocWNYjuserhJ5DzVjKi9bYeXZH9",
  "key18": "48CvFVbQaNf6XLHiDTZr3fA121gdcUgM1L4hCyYzA9zho4q7z9aSB76daNGUgJP4dvwMXFGt2QkkCdgwnByrEF7M",
  "key19": "TW1LoD4R5ss3V5HcmxRFqamQubaHPp4qgBGXh6xu16wXSgJAiMvjzroB9izXt4YLgjpTUEb1xeaRFiVTzioYKiV",
  "key20": "327ahVbqSd8XBZbyyXqjAzBQPthRq7igaYEiE1m2mNe3Jav3unkaUhd1UPBK4AW8NAuuH3dpGY7oMYFqJyyyW8JB",
  "key21": "4T65p1o8MRWNTfysDx8BSPWgTtsU2xnAnTcRDtkSetbt9BiyWDwnHJPpLqPyvPXGLpWW3V8MyCsEF4DGkq9zoJqL",
  "key22": "4KMfUXgUZTLqXxziKgndZoEcpiKBjpx7WpjEgsXPuNdjiQjvadGAgy21uZFhB9bibqK7GNvTGRK8W3nbhYuSJcBc",
  "key23": "4UDHcM9DLNEFgn7aLGNgb9E3WU9YBPS3cAbiMicuPg4gEzS9dGgXmT66wBXvYq4D7NbwVcp3GGDESDrm8QV1EEq4",
  "key24": "3FQFfJXrxKZyrkTrJD6BWkUbUVwKS4ekSoj6wDkMhcwzZA1eB6SNoJYR1bYY83JrJZdsXLr256estdxHnkD4Kbuo",
  "key25": "5dhvVWsdJRLehtDAfvwkAAkEX5wynSZuz2SbysRiwv3XgsArhb1p9h7dXg9MknTcKX4dYeFMq8x2ue72Z93EeFQe",
  "key26": "4RHrzPre57CS58HpEhbrKUmfpC9r658KZL8Vw1Y98eDKQo4PKWDjBgLznqPffGBpqJTgGVKXyKrnSH25KtLjHbDa",
  "key27": "25E9ZjEb4hRLcwzEsEeuYNBor5suZN9gCdjFmTdPC9VvwiLtLBPYZhzryxFsaSjTmKTfCzDe4oFo5o9xoGBAQR1d"
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
