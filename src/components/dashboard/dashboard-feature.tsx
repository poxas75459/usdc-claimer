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
    "bLPDXKbPXZfkmK3s6EkXS1MmXWdci6CyXpy1GB5dy4emcBy1ydbAG8zuccjW5Aqy2XopXGr9nFidyGf8zWG7u6F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HbDBqzYprThtsAbqszR4YAYuSh4QrCDg3Y5MDQ3TPn26edpi3bBBSd474BDiTheXRasmgMA2RYhnLsTxKuoctTF",
  "key1": "3UVsSazqw9VPV5Jy3VgkfBoa2zNfsCdEDgBmD9DwdRGAMuKNzBMVYGgLH7waunZxfjSLyKzZjrhns6N9X36YszWR",
  "key2": "37SJhTfRTEV5tSK3vDvzk8rkuYdQS8DnfCx8gc4hy43eV1s3NUAY6jg8yrsxiSnq3Zeo5nKQAakTyhjv82iSYVDd",
  "key3": "5JKPGSBWYQKicGXq3Wuo3e2q3KgkoyxbXGA2eMnWjxuCAXUpayD6rJ6L1dSb7ujTqvAGeCdA253zy92hkmm9iPP9",
  "key4": "4ZX7LXVYbshmnYtmZyosCrMCWihggLeNhgPC8iD1sergjqMa57uhea8oLHJcwbK4dVm1ANw9ubrpC1ptS71g4ZGe",
  "key5": "2UghxyPL28DRatJTUaham7xuKVEP7bErMKnnd4ZBf9vYZB42zC8S3TTC9Bcqt1uitBPYPedtj42bjM7JdEiAYAFq",
  "key6": "2YZ7iAXc1tfQbKLq4HobEpyWLsZL1TSfGpnBJVjuaDpQumAzcGKtSMM6SiwaQD5TmGH6nyy8ch6td6hy49RVLY7H",
  "key7": "4J4m9Q1CDJ8uFubxWzU7qT9sQZMX2febnDDix4mfAKEJ58ZsG29vXoiHBH7KjV89h7JXR31EFYfhfuPjfiSBWi7i",
  "key8": "2GWK4tWq44DoBTBwwXzN3XceTbkpG4NeJ1ixm7pLk8jhYbUjETUSPMxZ3VAUoyZCqsQ9hc4SNAx49JCJYsAhm7dq",
  "key9": "2JGnG6PPsyPEVdNGyEfG5WdYUpKDW57kbnEZGGFHEZrmgEW8SvVgG4EkBpy7aU1mKpRy4QVZNgFyxZv8eZ638cjq",
  "key10": "2d6Bn2BZPbdq9UW6Ywkoo776wRCC3YbAssGoU3dW6rgC7mNKrhgzcDTiv1afEbnjm5wYzdXxUvJVJZ4bVnVr17L4",
  "key11": "2gh8CcE77G82JS31dJ4hFLDiaNUMcif11yMNoDFSSNVyVVxii2rQWy1TBXXNjGSwyAbuXERGrhAnm88v64xC7LX6",
  "key12": "nJJm24sTRD9XwE5n94MifFHrsW4nEspp1m2d8HwmodyLZCvNQG7cjeJBdVrehCdnL3rkDHzb2X7AdefiHCfix4g",
  "key13": "3D2sUUK49BKxC15E3DQzeeMKG6rpfpXS93CfsjCETrLFaP64xQFQp2yTwFEFAaenkoZspVB1bxDPtRoDTfueDT3m",
  "key14": "N58VBKxBDF6WUsaoGzztXEVhQTzzw49ZpBbKT2QYL1FjjtqSuZi4TRh5NzEHQ9yMMQvGoP22UduYN2fhKzryd9k",
  "key15": "3eEsttRF7xx8Uu7uHfYB6rSdgK8Rf499D33BteCwMbq2wNLFWdMahovyiFethRP5tZFJAhXqBtobbjWa8Gyuej9D",
  "key16": "2B4Tq8hd1MZ6ijrCvwwk2q6qsx29xcosL9sRtibKPftjxYVgfYGrfrKV1Q4rCVNTpbW5g2LgZtzpsNvj29PkA6g6",
  "key17": "WbAFYbaAmg3zRuwYRDa4uTxJypwv1CYaLzVr8kaJfia71cB5NqByx1QMVPxw4kqHae7ybEFot9CXpLTnr7Vr4Wb",
  "key18": "3iwcqvE7bjjNrVFse2qavtJeRzBE8YKvJDpsKC8LQprxpaCxPBbkYV27gLENffVMaZGCnAPCDGHyDLKGx9qXff7S",
  "key19": "44G6KMbVMwnYvBgVvAHm2xnMk1BHzJxsDf3MLS8zPN7EDjze2DoPEBHpWt2XYypKryCMvDHkPV9sv9LzDDNcBVZ4",
  "key20": "bTuBSyjPsxpjGhaZdAwZorGUZu1F59r6MFwriVyWbcofdkcNimnsMmiby33cUTDXUXTH6CR6Un2j4j4aw2kHfyf",
  "key21": "4LKwNKVEmkq7LwcdEWKwJqugacaSyxkSAytgcuxBFAtjqMUSa2CxLFMqjxSjVmq3VDXk39PxfsWptpPfBkU6QWpD",
  "key22": "3BKuNSJgd6voZ12NeKLWZ9ZPmDvDt3jJwAMLNTYU5v12TEoWmJMYokkVqVDote7xtkaguY5ToRZa3jMFU4st3Bi3",
  "key23": "4PH1kZK997pnJ6NubCLfPiHuTKkHzenHiFLUKkf1szpR28EZmvwnJFAt31xfERzUY84xtMRwaJUGYMAQtnzjSsYj",
  "key24": "5sB3479xrRkFUCLFzfEWbv4WbLhs6cWgQVGBrwZGB7wym6hgSe98ZpykEHK7urxpbF9YkXYgQT715wFxfNK8ZMQy",
  "key25": "35Jz4km8qyV4HHCK29ETuxU4CK1YBo9uzyDgLikURwTMkNHsjrJZzHCYejXFUoXLRUosQQ18g3qogDNbK4Xp8QXa",
  "key26": "284sVS4vYpFbxdShWgxPGyp3Usbf3M6NgR7SBmC27AeLxigXKQzPg4Sevgdcu9f4vjUNcvbpS3Yq9GrtTSzxdZvV",
  "key27": "2mxxvU3ghr74h2jQPSTWbarXVZQpbWumjKNbgXT8m72EwnTPwxwDMbsSWNrwHhQZyXs8HUc4V68cEN6UsQrZ5PWR",
  "key28": "4X8K2b8qoUN24bscELZDAYhvh5U3qviZpQfDtde6agE8Le4S8utM42jxkmdu3dJQHx4cQ9hG8GT4ikD725BM5n4B",
  "key29": "3ZjEAkawPWEL1GrL9Z8Cdi8vbtnsG41YNGYV3JSYBa69FHJSBmCEpn7NfTJbLtGBxkvTYUV8x6ANX1YzHgXsHLMM",
  "key30": "2Ka64DZ3PHSomZHvqFwzsBpbN3cr27bYhfYRBzn8BwypS59undkrs7LU249zX7vtSpzvLnxQCE1gbbnGcXRwfTu8",
  "key31": "5Z5xKu53ZXjZR4cXaMrbiq3sguuHaJupKHEoo6L3iWbrHezPRDKS5SkatGCvR9JK2CDJhqC5ZtFonUYPGukQ2x9S",
  "key32": "4ZV2ZKxEva9nUnyks6qc9JQZahRtEX6hkmcrSZ8aD1wx5VfwpDj2xJt1k8mXCmHvvFF8kXs3DEY3TNhZwCjJ67a",
  "key33": "2Bo9v2HfDNHxZTfjWrmY61F8aPxPfzujp52qST17FBTtk7HrbbAsTXGz3vpBev6Fs4jV2ua1EM7z8kqJCFkBtPty",
  "key34": "iUkZT7dLGugb3ZwqBRgwN8TpMgBHZoKvnixGCHvZbUXV3ydxPwsLbYxXvaC5DiyDhTC3ULZHeCR5jhM6gfWsbdU",
  "key35": "5PZf1rGXfYcZw9Xao19AutiirbNgWLV9PrBxT49C71N1t1thcrXfTRyGDUfbmuQ6LtfYE1N342JRUjgUn2GPBsur",
  "key36": "zReZ8GXRaaGkw2MYSAfuaaGoWajjj8GDgSoGryNZBEx3rhsoEosXGYgjx2aiiJV7rUSM8QjhfKbPdLCKXdmxRQv",
  "key37": "3AwY8BZWozdA9tcQ1joWYpDdV7Qiua2Wge4mtYY5dJita7yT54zZxK4U3ium5Hc5CEGFAYtYW8VNfaqPf4RmzS35",
  "key38": "4Zdc3p3n3Z5Tt5L8tWPUfve1p5FrkypP1s7WzWrgsPYSejdg2HCX41FhEWc4TsvyvCMGL4H4LtPqRVAdQBuDGc9H",
  "key39": "3NnjtZPSC5VcXYagS9aoSoVM5jqQDHE2uZZ8BNwgQFU4JEgXmHDTWzh4nZqi1AiUe56D2sZzBKn9nz4kY7q1Z2xz",
  "key40": "xAff32L9w7Ye8fVauhMFhWunJsPmLf14TbyPFbddJdZJovy43CwvGS11NqndHN7N6axWABBDZ9cERbdfoeuQbix",
  "key41": "29R9RVgpuwsU4PtFKh1VQ85pgHzSyNJrWvq3rSMdux3geWz8PEYYgWPSdPJFYjZxAorx8681aA7ZXgX1LEY83ojz"
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
