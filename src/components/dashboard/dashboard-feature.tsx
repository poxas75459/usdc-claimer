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
    "4KK6WzVAExCskrpJANFKfDuRu1sTQZf6BepcMHagtrn31dU3bzC6YLoeRJM4c3fdiTWXnFzkdHZyn4afGD3UNfTT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51qdk1hNaGWbPgimxhqqQqDq2RtHUFsbSriZRuvcjta1YdZEDgfHytgWpVg6Ux8XqSA2BkbDpCynM8EZrWDrc44R",
  "key1": "3c516ib6Y7CaH6KNWX2MiifnADrhXC4D6446WBjnQAniFcE5ERp4Q3BLznmGhA6bfUH34HRiMU7acKNmP5wUP1qt",
  "key2": "3exZ9TGja6aBbYyBKT92eEuWrP8xvYu5mxh2pqpmfVGpSPf5oqCcYjr9J35SRMcwgz54ci4zi7nEMkiGLbcZ2on7",
  "key3": "4mMkgLUx9qfwr4cDAz3RKcMnHmkRNFQuS7L3xU4Wzztph4zfjm4UVQtzRdN5bZESPS5Lr7gKgYLyskZ66pyTo9ug",
  "key4": "5qdqqpLpL6mCBPqwXAMemb24n6ozKQ6MPcx8WsuR4XJmSiqZmGXRP3E2xvcr4Jeo5r5Yv11dJnMZ6cmzxxU9wKze",
  "key5": "55N29wW8K6JjMfHsM4vG62V4AzrrijLbCygjpQQCN9RfENJp4E8gRQWnpLTJ48MdGSaPgi2LHicpWjqzbArzqae2",
  "key6": "5LN1pGyD5axvqc539pBSVAuLyeDXQHEaCrg53n6VuynJMP3Nc6VEm8qXeoUCrfYSyLAFG6esnZhSDJ9phC3cCjEw",
  "key7": "38hz6tkrGqLsJk5tQmpQi7du11RHhb2gqDFYVBq9b5t7PNF7GA7Je1NJ18qQzAz921wS4BAZu4LHrfbHPLQdzCuh",
  "key8": "5QoWpn8rccUakYEEJpRPEeBqfPUXiAUdJydJmCWWEAeefC44uy3oypQuDW7vumS7zphYJ6VqAyc2UeEFgRqa2CbF",
  "key9": "3jeE4igLiACUENpgdV6NtDdDm7ywEeJLHB2RydWt3hoKMqgZQXyy6U1NHTUPyix2bpzzUEr89da57J8ZrcVhwHrt",
  "key10": "L6u3h5Y4bfEtmMNEU6X5tmNNjdxuMduaoeFVw2n7D1ieyuB2QtzsPXhsvqrSnd1A6StpN4NFTXMkwEyQHqfhxrC",
  "key11": "35f8CcGgUxTdz1vM2oaa5J6fbFt1uavVbrwqTyRME9s11HSREhVFZFCrvXXQSa5VthbBbRV8aBWFbaCCQ3QQqVw4",
  "key12": "DgXWmk31vdx1ggsS9ur4LsKBCWwDfR5zw8xUrn3twmPNcrjGGiQRRu3DYLyfs8XaAGB9ERTpzWMbDkAWU1KeFfj",
  "key13": "3saBNuhHFfgvcCkecWhppPQnB9jotfUVAAucGGiBgXFYcRwgrRyxRzx3WHtSPbdWRfnZYeQ5Voqqxyk6d94WJCYG",
  "key14": "3hbSZWBCubzdTeWKHGrHwmPvPVJw9TWuoFubkJw3UABrCGHiAgeKoacRdTbEn53ASgL8TQsj7EmPUoJW9z7RMYC4",
  "key15": "SGxha33nw3TfZVkth1KaGiWGg9nHvBCw5SRmftLStLA42peenMRkuw2b2MuoGxXjM1aq7cwQ2YK2zJH1LARJwjc",
  "key16": "5e9XsSCVkkZhDV2X9HHpWu2DFMWXQw6Fm9odAoLpceT24YLqtiKvEjXAn4CAraG1RmvBZcUT3mV1ayRRd79kFRUu",
  "key17": "63eXrTKgaw83mWhiJ1Hx4ZxzPV3DSaTUAFKSwMhNEWi4uJpxtrZpxuZeAFhDH4hNpfQHUbDfKgrsXjwYpCvJvkg3",
  "key18": "Wmt5zUsHb6GSyUvYzUgqPFDYEPiiHxycvqy9opnuzuNDL7ofTJYmD9sXYybbDLs9PWfZwcpiQ6Zu6zQXGzknoAD",
  "key19": "2D1R7uZXx7AGrRrh4zCnZq9Quh5YTinsyfk6jVHPL8iiYfXfcEui57yiAUAPbqvT6SLDWbGRM6uebdJU8ygsviGD",
  "key20": "nHXuATDQcCtrNkZqJKRtwHT3x1q3N9h3vvfUD4qt5oS7ffe2YTHRjgNcR1H8P4FG8E6sJNqcTY7vKCxNokGoA5o",
  "key21": "3rP8KuJC2LcYbjwQ2r5BgwsqsJ3vFTFYFfPUHt56hkjkRH3NjjGoD3WJYMXWEvfFWkUETgpL3TEWk7nB1uZ91BV1",
  "key22": "5AeoQrecGoRDqQebdsGuXYkpN2wCaYhonbAiCYWKNcMFCDoPDu3kk69FhxFhoee5ufT6B1GFqnhThym7GfcYMoQk",
  "key23": "Jf411BU4H4wjp6mHmtX1rGJ6f5tMCXvTD7JGM3zHPSL1KjE6HwhXSgRhMdxqLRydQLtua33dSo1Hfvq5jX8yqnF",
  "key24": "41W7yxKG32DkvbsXNiU95KuQpTZfMScnPeUvGtixEfyy1mBNk2Kf9FUgBsbHWeNySALUdaGJRbHZADHq2H7WMBmw",
  "key25": "396oxKotd6y9n1MVvAkAg5MyVkjjkzio72idVj41g3LUYaFZRLf92tYXnr3xsfSAo9mAfxdhKRWZAg7mf5UPKgzg",
  "key26": "2y4p7xGDdAWzQcY3Z1rwaSqVr8akxkAc3Ayhwdw8HqrvSdY3chD2iz4933Pu9HeN2boMX8btdWRjUoNB7HiFAcKd",
  "key27": "4QdfqVihKtvTSN2oxQH7T1F65JjCy35UUUAeMz13X5Vgri8i38t6amx2UH7w8GwYqK52rpWu3sghKupiWELjGaXN",
  "key28": "2swDqKrUyS7NYWCH11iGCs1sYow9t6YEpK12WXbzcaWYFwPjAZAxKKKqS1vx9arvs5DuAk71HNfNjbpo2EUNbAMi",
  "key29": "4nkdhkbxZZurC5yJPFiemiTzMTZJgfSDMoqZD6TpaTbY776WabAF1PWbMCsWbcFLKffJN8Mp9ttKgXcEU1AghH7y",
  "key30": "2zSTEbQ3rvq5nVvS2RHBZeYPwYHJ8WSKMktRnBcKv94fSXLemV5PPJDPSnsDf1BFoCHJw9zgSqhM7Jkyfw3T4xT",
  "key31": "2EHXFbmnrjEm8g6xLu9PbCDDWRt1T5oQtKwefJ4Jkiaysskfkngtqi9NLfGzMih3pgkjCPrayUHc8fUGwLtFVRvQ",
  "key32": "5719f5TLbnGngUeckeSYYuj8KxRnJKVFw6PborBdb2FsuoMg3sxdsfCEfdwzjjyM7KTaNu4ZkKQsvRvLvRsQrcMC",
  "key33": "5424WyQR1q1TjhJ2MBr5dPAdCgxUNwfCryhqdxqYTJfz4uEyuXenf5eHetWqzNFaaZgzthTA9C86y6iB6bWuqa83",
  "key34": "3hU7tYdc6p3QXrRQfBK4NXSzq4jRSSCLQGhU7cdfVcSwPt7DxaB1nRoGPxQgiwkENkNXv2sXJS2d7wPQVWJKuTVr",
  "key35": "PGLi2w1bo4rhjeRxUs8qLBVXUzc2eTXyWXoyMVCCFNFkU4ZN6C8wpQSFqqDN87b1sDG6n9yxWaTsdyHk9fPbbqJ",
  "key36": "4MLzxD4HZ62bHg7G1xKEJxMAKxfftPZcWGSnzu2TeqzomybuXyY3gu662eo1Qhy2LzdafWRSLc2RJucjL9uZZmLM",
  "key37": "33ZcK4xbhSYepQZy1PuKz3Rz9J2j65nEGXS7VgfgEuN8JMVV1bqkSJpUvAfoTxnBKbFfDf2m5z9xVM3HHuYiGAfF",
  "key38": "bZDZ9e2dE1Rpufbs9S38xo6nSrMfmfh2KZDEBWzGuEsyG8z2bXvZ1t8GXt18gPyz35Mfosun8sp9y8Z9i2FfPBx",
  "key39": "3UqtLs5BEvwPioHM4JsSutYYM47B8kDGknnVdxZ4uRtjVJReDNrUSY1kWeNh6qS7uhRCb587vpqHeMHpcVRd2NsP",
  "key40": "mcrpECBQJLnvRve9NiP2KrjgRDJzbdmBceUxn9dnGjo6XuTkifosE7FdJXUVfa7eKeGWuyLW912CuTkooXBFXhz",
  "key41": "4tRVPih7rLKvZ8bGEocCEMTugVBsR1pLQpLg3YT5shcZj59nKdBBThnTmqXUohpMepmwBQdnVELJxmop1MLySEke",
  "key42": "2PQ5ydWYkrjWwco9dGDp9qYvtxo8c4KopE22Z2arYFdWGEkU3Pyjn2K2i64odWjviBGdW4c4Z8Ln5XBMnUqrLrvD"
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
