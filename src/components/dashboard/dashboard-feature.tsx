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
    "4qVwY6tYw9nfH7S5SNKvw4ahjfhbB71JfenXARTt8wCcshomJNWgcK1MXCEgruCi4A4vQBf66BL5dJN1W3RmYnP5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67AooyAKAJC58R5H2bbvzgnHHh9QU74p3Q9Ksb2MZyCcZj7ixq5WS8ER28HorWiJ8YYVQb2QASJohFKvkhzF7sUh",
  "key1": "53tyrbQAMjHqhbbVEHrT2ykXhFHb4QQPRsrghvzj4fJ6Utc5dotnNNzkHS6cHHV7x1uN7in3AhhieGCt6yA3FxbG",
  "key2": "2zPQmYxVsydxahBqdc5kuQc81GLWv4C55m5QcMTRsLwW1AzLUtNf7jLpS85AqVMTHmAVEH4AUEYVtUP5ZiBvxSXk",
  "key3": "4nkZtY8JkoBfDpu9WZkBoGEURpkmRCSzn4FXKALkjQtS2baV1D1cEkq1RFsvbicAyzeCpr2BnFvJH9ADMfvcVF97",
  "key4": "2PjMU81zpBDRJUE65Y95FRdui9AJxszyq3dTYdf9fJ3owQKohCvdpQKu7e9fV2iXzTtLS83KnGrnTvQBkLQYnEpK",
  "key5": "5maH3ZoJJL8yJHW3LRvPtySrfiWss8nFAq8so1PYx2nT3XU5KNzohTNLgtJF7NKuVYaUTceAJ9tjYZ4TXt5kysL8",
  "key6": "235VACwwpHusWLoJR1aQ8x87ALDKeb6i1Fw4nTXHg4i14DqSs4L7tAvu1WjvQ7HBu8gVYDcYWo3wwwGrE2AkydGX",
  "key7": "SbGE7wNG4rhLEJuC2Zb5tito8LcBij8AfRS9AMqmSsdXAtqKw3j1KMR8phUxnifjQt3VvN5tNMxY971sNT41SKV",
  "key8": "4wbgqyg9pEAd9mDdWUjCHNLhLMEjX5fp8k9ecV8XyqnMryan7YZ8Kqw5w8iEnrqwt3upfbx9yjTeZS7A4mGifs9d",
  "key9": "4RA6wBAMrNZyEtSkZhheuTWuB4KfBjDvzC1HfFYNP6uGSbb3nrnqcUu8KXfEJZ7JXew6i35LnebsSbxRD6aVneqR",
  "key10": "327KJ9uCPCRwDDohomKzz1NQGCnUe7qk6Q4DPLsvRzdUmWL1ZGCRqRX2BnyMHhZkxzvRAKFo7GDjwd3a19gL4PyP",
  "key11": "4rNPatiMNZgaDSCgMtNvVDLuX1JFm4aAv1WJsNuaCu1o26jyipGbB3y9kfYDggVZmFchgqnQNbnaNWCQ2n3S412T",
  "key12": "4D8Bg7MzrvVcL3SCTjU8S6s1ZSfb1H1ntK846DXxo8Yww9PeBJ3nEeji1CfDxXyqGfuoUHKUfbzAz21oG8tQ6rcS",
  "key13": "5SGMCmbNodwz8Ck8rZ5dFcX6yHpcp214TixAC4ztocCdLfKeUfu7mXuEndtXonCLd9fLmZqdV5omaJJtmpKCwnjQ",
  "key14": "2HmG1UbX8SnVSXNWMR5qPQwv2yZZwGhodZ4HbszUfNy9kEmro62ZMsDQsFFrs46MPzLNEDtZZb5eAyZXgyxqPEte",
  "key15": "gQjvojLFqXNRduo3s1KbrUSjxgho4H5gaGR3kfkDj5jrboYH1NomBfxociesBomAYhgU7bwrZT6qP9ksspMbay2",
  "key16": "2GqojJuM2rPZu4Ditxt5J6bi1EcETm9kcdpA6CSoQNzqYyfQ1AVZLXdieai6ZqGNaHgkizTiUvWH4td2rWhbbYv7",
  "key17": "54qGmRZgs9DJ4hQTgUNX9Y8Y1WboSeBpnwsSEeFPiV4AAzwF9yK32M66W7h5AFQVTdrhH2bxbTshX1fRdMdG14Ks",
  "key18": "3Q7tCLH5Gs3LN5QTyT5o3oc7vUKDpPSNY9qGdS2wx1ozhAfX44yQ2mwWU7H3X9a1ktRKoHggZsiYXhFgpL8BodXf",
  "key19": "2DWWYBcXBrEXgsY1UcSXnpnPvnYpSJmpgNwKL72oqVgiZyKSUa7K1oMdRP2K29DnP7yWYVm3TjDGqpoJRDGiUW4R",
  "key20": "wb9KPpPVnfXghD1RuBzwbDUX7HqUUZj22RjF7raJGRnGFmEYbuHb2BymEK7LQNMbqkub4Fb26iJxmKYaJbw4v4c",
  "key21": "5K2ZNievY2DPxRH2b4b8FY4H484nzDr2ESnyHyd8BT6R6LckCtvmTRAQp6Xz7AymupPXUEsS7mewmpeKMvXwzZTs",
  "key22": "4x6geE5oNZ8wjw8iMYoNHiJK6ERK1ZyyEXuWPqak1DUY8CHHGAtBQTkTMJNWLQxEgeC16qsK2e1nFsH2VsNYheXy",
  "key23": "2xSSfibA9SBR2ZqRTGq6hKmWtwHYSvj6amhy7Tb3BJnBtWnberZcoM8whJ4sKWUb6aL7w8vpdC1AymEgcRZisQxT",
  "key24": "45r66CssELyNPJqk2Du8aREZGPE7akdfNHRLbEotjPpP9kEA8GqVx7sbDSyXyGNdynYGXGt4ontc866PeZzKAKdx",
  "key25": "2A6jQcS8KJDEh39d8hBFrhd4WpS2M4jK7zpQZZCAtJ95epL2EF7zYHFDPZpAE1iabt5tkMo8feu21fiiFv41PRt6",
  "key26": "5ExDddsga3HAo4gAi8PKmRo82EjY4rrWrxYc4A7cuLbYjcQJHFe318oNwTnqrapiifAabiPJgvkVS69GnJqR2r1t",
  "key27": "56k8eauygi3vuLmNXJykJRUyvXyFMCt1NwZAbRxvD2HbYTYBPEGuBeLPzCDcbF8jbMdtjyDxu2V6UaXJj51oaKY7",
  "key28": "64CaZr2jDPWHD9zB81b74Gamda9MF5s4aC1Q7D4BKB6Vt6GC8uSQK8U89GN7j6CzLJ7wrJakz4mhweRRttodxCXi",
  "key29": "5wVjMWD5TUjuUfuYsS3Rt52CZHE62LSAgG3VMdYokifGpYDncTkZ2YtPSSzUVLTkeeTJnbBVjdmhXcbE7mUD3yfD",
  "key30": "4z9Va5vqaLEVypUZykRAC2iYgwMdXhwrmhm4p3sdESRBwLY2ESKwxYey5bvjAyhUKUcw68Bwmbeetnwh8byp7NcQ",
  "key31": "3kzN4EMQuzcmQJz6u3q4mjetjJdJdnbSakMk1cixQiau7GRCi7xpVG6ASz7JbYP9EcbCVaVPWbmQprRnZbEhm61x",
  "key32": "4JTgmkaF8t46aihx3FLRBZF4orgwMj6CBJr1wzqcvb6ue1aMpVxmq1Ca3g9hggi6CYReF8QmMg9Nb4q9mRaC8HHv",
  "key33": "2uMjnatzoFFvvEAaWFxeLEkPU7uSBC7L7AwqPm7NGNhHuXi2cjR2EKnMiUnAKGESWqdAcQ6H1HfeozjQGmxUyy5Y",
  "key34": "5p8S5WFVujUizcDbarEdwt43FJyiE3GZ5T4rSW9gCEY5VteP4rYKLSVTYQnJbM9y11sRFLLxfgXdx2mtJ1HVP4kn",
  "key35": "2WCmXkKU6RM8zpn64zWiGzqVpbjZicGfcC3TYpKqibtf8QySM9uiRoz2qYLPFrDjRjvRFEAkH9tqQTtt2rsSHHqj",
  "key36": "5sFGGvxqLvUMsZRjqVVzB22Xqcfkvadp3X2wsnQSZaep9b1TmPMNvfyaxFC2QhJXHhqeDhY5hywkViZ5uKexdacR",
  "key37": "AWWsRws1iu5kg5EYiWrDVaEKgqogaoABXZQpPhi6PEppqkxEVt6bufbAt9X1Ei3hh2kz7SvHZ3mLQdSVoCQ87Ew",
  "key38": "3jpebt4ogqiSfCWc93wtabEYBwwBM4rngssKWwXCvg5kHczrHfxjZaqQCLxKxzmTiQicFKzsJZYy9BTiX5Datp6c",
  "key39": "2ah9PXGpyvyAAGJ8q1LfvAm46WCd9tHDSJtArZQXxjfBJbyz8qaxkJ8WMQxuuB937q4moR9g3jRKuvqbqUbi2vxx",
  "key40": "tiW9vT7XSL41sSgoNPySis7sqkSUmgsHXCiveRw2eSkwvn2qTCdMZpT9AqkcvxNTWR85JnUaW2dNM1hRosT2wd2",
  "key41": "2sAxHn8nLTYpUpPdbTFoNd2DwvD6ViJc1UdMRS46CRFNHNsP6Q4rSJea648i2HmYpuZwksWzMcMyDVqvYJ6gUiCH",
  "key42": "34BrynYrF91L3QmYckikY2AnVG3VAx8aQUdy74cnLZyrrVrSanzStydcWkn96K26HFNBzJYjoTEgUVR9HsqsZ1rw",
  "key43": "5gkAigtyBkkHbXLXTTHEeo3cbmokgq76FezvVZ26hLUXNCT41AKb4bNJ4Jr7oxXbwgjdDhcDTdpfQYqAmzd3uDW2"
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
