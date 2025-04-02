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
    "piNrHZSisx4zN5Fw4zpsfYWfKq3g6o4qKLNKzokEUrSsp8hQqvpfFWU8C9oVVYUJioaViMMib88Sd9cKAYuPP1M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Hw4yWpxtTJXyFv4Amw5z1ZQoUm6g3bDeWqntbqb8sspSaLcR9VDYvexMYE46QdtsocW6quBXSWzVQRoFyHKTQM",
  "key1": "2dKP44GCnySwNB2ke9w8H3whPhyEMy1TKSkhYmaGxz7VteW2hAhU8E6tPeV3WjFsXuYQi44xYZatn5byMLPpz9xU",
  "key2": "3V5x8wRFeVycexUVbtLBuUE4otsQytJRQxHStb6QZr2MqYLFWyWp6CczBMHXg3oiBQkxzYGrj6tofEssvGHeSDZ",
  "key3": "Ga4sDW4X1JppHWZNku8PucY9YAMY3z7jWKbUQNECniZ8zKyfSFvob7u5oeX33BWKA77vgK2tv9eEejvUEM41N8m",
  "key4": "4jUGgGi9T5wsoTV24TK8D24gpfizE3n5kQ8n1osouVEtbZLJT53UGz8NKfxBnC7kWJxwWbV669S4ffB3WPdQa35m",
  "key5": "eYqiGe9xvnTd2GWtrGtEfMdmFKGPtbEe1X81jknwo1bviuMS2KjrJM2BbHHYLyKGFTT6uQj134cuFC1SeHk7dnq",
  "key6": "Y1fjTVYbkj9L72SwneJbpCCiypFsHvwRg7enVXcczjf7Jm9L4vQX9cD4GNAw5mJySeH9qKunpibK4Xz5ccArV7B",
  "key7": "43vNQ4sXt8kGsWwRPhBAMjGGpAVxfGfJ2VX26skoAasiqRtTtMfLDpxEExQkMMJC4P3cWjMTg9cKEsryjJagAJN2",
  "key8": "CGyAxcV5sYFhRYLSsrjd4HCiyYg9VYMpnsm58cQkghvBwsAumsoMUmLnDBfcfiWG7iuBzPsorB6cqSqToJkmaEG",
  "key9": "4e2cJfb1xo3hztrjUJFsFTuFhqhgqm92EBALDi6MRhrbDr4k6ZkQ758EbUaCEW7XBWX5nYjPGEV2Vz1Kn1r8Gj3U",
  "key10": "5bRTnQq5Zy7wyCPXYFgvYYaNQiKTJeFpUc5jV8Cvdzu1wPMCpRNvnJtEvGuAu29ZZabDEdNajRRfHfVmJgQJLoEj",
  "key11": "37bt44vrY23WoGpyDLMHtEMnbDq5X86RWCHsHFiWL2A492nJXF4CWYmcZ8EQvJdauXqvAC2mrakN6yge9y24dQNu",
  "key12": "4h5pmuvraF61znBhRK4JuJ6TnUBa9MpV6dfB6X4BVGA1GN7pDWcSvUWprEUAa775qZWnPCNKRiQBWqVsdzrXRKbA",
  "key13": "32CGb6u1UcwXMrebHUeFFuUvHefsg8ihWkZBXXgqiJHYZZW9uCLfRqgeCwFbbVwvHkrtS2bxxbpsxbbJVB3VM4Do",
  "key14": "3BqFkMyL1gWwfL147YQnhXRxxXPJNuGJM1dU7r85PoPqaKgQVCgBUH44KC38kmNeQzyd3KcJuxttnn3yBFnhkKH1",
  "key15": "2KAc4ywL6xRYmMqK4TuekuqJhCkJ3hvFSez4HjjepwuYQBSwBxKBJUEDJsky3fgS6vWK84Wr5Msgs9rQJN1Pj628",
  "key16": "5VtAykQx5eEyw9FmgQaz88UNTcYDNe4ccLsHqWMotMX8Way7TS1o9ViKPFuswgmuCb4Cyd8D4PVa8dALJqgn6xXX",
  "key17": "3quZP7cZevehxzkgKBPBuaysX4waiStRxPPMjYD2VEYNm4RYtfC8FUygaPHHhPQLpSH8zgzmSEqs3q3WwQ8WsCtn",
  "key18": "2a46JnWWKmFYn1ckV9J92r1U2De1E4UhA5F7ThrMjfDFBc3KjGWTKyqqok2SPP7qn3oHM7DqbT2daDTh2KWMEiDB",
  "key19": "4HU5Fcdksv5QNqbFgSnEzun7kzBbT8LtC1dHA92ToZhvcwS7xoUTG6rLzowmwSEhDoESGJQUyaUDvUKK9Zy6FhLN",
  "key20": "5DT89huUemr3gSTpW9mc4JS9GJ8aLAdmDpaFNXVFBqU9tLisF3kqyE5XVfMKLyyadHebX241CVPQi5nd1C2TQjgF",
  "key21": "55kR3gcLj597CxzMwHQdmW86zpWEtnqBHJRT2QN1hzfB3u2oNMJPMUXq2mLt6oUmjxnTRZS3JYzk3QPbHHoCVHFp",
  "key22": "3t8EyRDFWcNnY5bQLrzgNAJrkRvWofRaFA9DoSqR7WkCNSoHQ1ERrstaz33oo8Wmc1nZq9QH1VqqN1nAvn8urpcg",
  "key23": "5d279JH7pc66NfXtg9BKxqtVXBXox1LEAjqXw5aN3a31yBzBNB5knPZm4VKSpC7ejvbo3CaAZ4fFEwtcF6TJjPC9",
  "key24": "3aQEjffLPeVBqSXjhuzdfohEzJbVuUNZFszPyuZ9k6M9eVXaayb67VuJ9xmhHrzMAxEQGK4MgbJVTpR6W33jSGzB",
  "key25": "LWsyxgCpxosShDfoXzUXjAteAUFgtfVa9sTbtnp2dACDFGFgK46tni7Gjd7d9mhnsuNDmQBqTtWr617864pxuna",
  "key26": "5UzPU7xYt5K9sAx99N81xiQdyTtpJaC6ayqR8cYqn8APHKasZ3BzN6BMSYDa61MkKigStpt4saUZwpzGAX98u5HQ",
  "key27": "ucZrrt29YVPR6gucf2tNPFEjNTMzMiqSTG9C3FKtHjGAuXTQmqYxVhpkKjW9xLGM4xFwQ3pTaePcAzC3mqoMu8m",
  "key28": "5eDXP3ATWhWzVSdHEMGcSdmzCaYQkE8tYR1oncrsPiAgaQeCiwRXk7y3rgKJJ5FxAGDjgDZKkFVAJv3UdZCMj8kT",
  "key29": "3r35eDsLWhMiRs1m4t4w8aYJwDNAU4thyJ72akHfPaobJfnQSsVbSD6wp4T9YGRL1K8Nb6sEq2j1wvj47a7oNmiE",
  "key30": "3n9FoM2Bn53dxP4Lr3Dnq6DUH4eG2DCrRCpDXUTGS5nqS76uASxbM5B3UiPivVbKRwJcBkXFWrZKB9tzRjWTgw8L",
  "key31": "5Z3tGsDhF9nrdN8uaL1XCN9yfDCepsWiJ5gtVRVftUPmAjgnYPP9cafFzJbe3rgmayNg3z4dKsdEEua88jZ1WCWH",
  "key32": "4v2S7oh7ybLyGBgLp5zFqmB4hPACpDns2omyL13JjxxqMC3Cuw2RouZFJucTAAFMwJTbHfLPX9S2m8JbtJ5wk54j",
  "key33": "YEXjXHiZAH5mZfpq8NnFaVr83zqGJ2RHky9V9hcWBWBKoFKbxN1yBbbQF58UgDP5tLmXJecvcysDF1rBUuuKwD7",
  "key34": "4PFMBRShZkLJi5PpBNaZbEJw9vz4se2qAoQcEzrzvWdvqrukr7AGNSuPP7GFJvce53Fqbg3NazA1in6cnbAyzpXe",
  "key35": "etLVUnUGJbCzvst9is6J554tHeUVdusPB9bb6ZE7EXvLbHdCfjeHLLXVXBGeD2Jo5GxpABFRBmVxWhKVcqpxaVa",
  "key36": "3APpiMyJrXEGMduMwEmJamFkqoVQrpdV211iHrFvtXPBpLV8k7a6yp6Ds9RMEP5oQkoQudn3TRrJUYJ6qodVx1eu",
  "key37": "5K5fudg7ZtUWWcyoGaYNfd2UXx6p1rAhHucZ2krA4oGeqcoRRsafnxwkzriPNJWPfchjuAQuktYrUEJXyRrnnKcx",
  "key38": "hqYF9uxuzkhicDNg24Tnvso4LcEAvxv4u2uREkHEwrRk4PVZCcrqrKRhMHdrZjN4AUTNpJzZBbfWc8oTPmZPEJX",
  "key39": "dJfdEH9Nf64yKfj99wDXecZPo5WQSgM2ESLLb37L78YmZMbHWMEA6i3UWcJHrPqdrVyFG94oQCqWpn6cRKgvi5N",
  "key40": "5yoTFHzvrTZoUbxhBXRkUYH5TDjkTDtxfykL7MBjdUh6YT7KxYDUxwvP7TXc7nBWwxAH2mKsWWeax5YGoPi5b71F",
  "key41": "4zdH4y9BR8kurB7U7SUZnHEQQz9yuSiyMuKUz1LQ971z4doRAyZWV4WcHFNu6WEgctrkPYzAByDAdLpmXmTEYUY7",
  "key42": "kypbLgY74hou9eCvd74AMJNDbATDmGbbo6YoiLLLCLjJXtUF6UVUBnWysScNe8RFF5QKbPrsk72VuoF7HYtGdmz",
  "key43": "2YR9tge369mcEK6mHJUxB93gwSs5zjgDfHSSXdheZa9kh5KXm6oAMTn9bYSghuGNkV8Cbgkceq8kT6Wdz141BzmW",
  "key44": "4jpPHr29APUPSYs3hM55nwkvHk3LZnrwrBZNFr7cVBGjJ5cE5ZWf6ZJtpA7jzWumwGe9X14WNXzJPx8c6RtTPUuy",
  "key45": "2kiBEr9GsEkysPsM8PqWBhZjdbLnsGSrhgjkN2caFth7ucph2basCxUogDTEmqJpGXPWEwRKphMEfjpcEgecjTkH",
  "key46": "2BQcdXynBcDPWk1CyiCGTxcZ4eiDLip7wFXYziVHsxHCRE16xUEbaKiGPv1h6sLzV84sVv1tVVvTdBko487Z78DT",
  "key47": "z5TyFD2bK6y5GBnDxY6bwe26638bCCymgf176LXbDN4f5HACEDwjYGz1ehRse8qXPvECtXw1wDnsRayS1q6SDfD"
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
