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
    "4tbT1rjX9d6aLDyP95HyRsf5u9Tges2LrBA2pyKFXuFDxfhie1MwifJRCZ9zRGwAhUarYKoGJDcJtTG58b6K6aB7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qmkVKrmFhFVTokfVNLtrRCELa2iJekMEDXnE6wdwLysaqVrythYLVFSpBzYYi3p2XbhYABuCgpNQt9YxMwQVMMU",
  "key1": "2k1XeDM8kDWCBxprr9eSy2RywV2JhKup9HQZBHiHXThy2viJrwdN4h16nzmTUDnyXfy5P7ofedFpq5qsViV6MtXk",
  "key2": "3nCNMvyybrFexQ9oVAGGDTGf8rcqQL9ijX16pvvqni2drqbfCihFLJCYDwXk2YSoWXUqowgitfdMMAtxg7rukP5t",
  "key3": "4qxrMKvsQXfcjKGzmVJtXWBGXAr6rAHsF5HjW1FC8Lzb3SD7YDei7piHz3uevnSFsPB6ZWcj2JFLqZ2ZjHtrsHFZ",
  "key4": "41ZUBws9fF2UhqAbnAE5nKnZ3akQVmENdsffrWdNojdUccCRq2AVYwK9wJwt9UrPqs1W29577CcsKNao3Luszh7S",
  "key5": "2pVjjtDB6j96EDDtJnGsKZNYMbJhxEZW7Svjp8nddgHmaXTfDBcaFmkggmZ3ze2qTu9LodCgSwyRoLq8KLzzChkb",
  "key6": "2tAkN9Ju6rCj7N1a9cx3e53kM3ntGWyDz8swAZWjsvoAuM4T4CLxEcc3aGKzwbRgXx72THyynv1P5GsG9RR4tVeL",
  "key7": "5CGMB1C12crg2bhjzXP8er3GqgqHxV9zFsM3gVKQFSuatizV1ax5DLppr21uDpF4pZYhvRX649Z3nKbbFPiW8ws9",
  "key8": "3K7NjJ1ciZa9SsPTJiCe99Mh33ALSVChfvCaHRgeaceWRYZRZJNXRHf5c8yKcffNs5HnC3t16w1sHmBqAf1wkeia",
  "key9": "5rX4VdYo9puKyAW12CDSjxBbEvfrSSZ5xXcjZ6gTJgjvh7vYk9K6Ni5HGYq7L49XG5Dyys6BPXZE7EuMF6tyi3B5",
  "key10": "2v78LX8KVHuynQ7J9FrA9zji6DpSi6YS2D6NoDHDxAEkN1Ds26wtSt2SoaQ7xuC6VeTeYmhXgj4KiLFCCncQeQwW",
  "key11": "1wZ6qmzJ4ApYJEVLpshcnaPXDd7CSCRLK3RziDvoGZMjHhZHDfKyzwMZePPcsKrdqo4ByRDHE2orrhbnjy1xcSs",
  "key12": "3Er4LVf4EDDZEzCGmcWjCFXHzcBNfXcsqnLXLGRwMh8rm1RrZ8kMPBiU4YEmsX5YotKnq1LzRFibfWvkD36eDwn3",
  "key13": "3EcxfEGRfvDRDP5FjdD2SPMPinodLET1pFVyL13sL46SmkqQi36B23wEuBRHxYTAAu8JCyRY4NEMmgxSW7YRFGog",
  "key14": "4wjuyjixXqCp3k96YCGFywe4ucsaH5WtX8ViRWpyMG3kK3FoGTMVXkRwysQ1AtW5CQtSaAjhXGa6EGWXsVWBya62",
  "key15": "33EKH93KnpnoEFEPhzYu4oMijkz5KkHQL8kJmA9cGVjkBTiCv9aPmLVfw6bCmcDX751srECczfTZcYcy1aJM4Aes",
  "key16": "31gH4BSuhwP8EqzXo1hSiabcWoHPCxuxg8ktqjHn8mjVivyWPaK7cAKTWvDM93pi23WYCPjR3t6MUvS7Tm5NGEJC",
  "key17": "3TAupcnLMy5Ss3AZXb6WFAAoxMttzdV7p72Tvkx8izfkhcTUpyJ6ty2J1HJ2ss3GvAXeRq99WFYaQz7kkcXtVZtg",
  "key18": "3qNokAENYSxxTrMVHtEZiSAXaFrfaAtgToBEpTPFhMJUTrcTHhPz8PyrFAvdBjzSvXZTD67CBFzeEDh5cbowDm17",
  "key19": "3jKQuxhGcLnGnTSyZM9cVbEcV3LcKmwpntqwu3uxfMePB7soWpjH4dtX4rx6xLk1osU5twZeXqS3W6MN9ZUGeoMK",
  "key20": "62TBckD7GMSmtSsZWPUUpyLyRtXNPMNjTToDRRESqh3VaGE4Ym4xonEGChg9jTjfMbGGQTZMirHWDebDt9xRVgos",
  "key21": "4txeRopk2se6MC9UDP3PnNxYuHGmMzZyfsmZnJq36dvEQcMAz39cAY4Q7ezPJn1Aw5XQ192bYXwL2PJtDNJE4KSo",
  "key22": "2cbBbviuzpci975TFkVWBAA6cVzGhpFa74QwzZJsUDfyGbLighyBW8Ku2aJhfgHSZaygmtheG1wzQfY2CcdKvWaq",
  "key23": "2L4zmJ16L7ma9smCM7reZGdhBG8i9F9K6JZKMWhmHuGbJB2hyn85eWNN9JA7K4rwE8r23unrhpDmPwPeVYZupXkW",
  "key24": "FmjDkoKq9G9Nc2UUsYapyV3ti7zsKjNW9EbjYonAJwRikQMD1Pfe5dv95NVYn6nMRREgzut9YrFx5UdTGQJ3cqq",
  "key25": "GpX4SFt8rtg7jkSHDtrahMyEFUd6MKuaqhiWiFWXjJr5QZqqeUu3gZqHgShxRZgJkYPVV6AUuueEbpHvi1p3zAD",
  "key26": "53tLumwKKBcwrw96SSs8H7sTKCkT2TC6TZQeZ8wwvtGHxv9xNDsTkXrktHb91WneJoeAvp2wo7p8DnR3VAHZBvZt",
  "key27": "29wishgwSRzoRLsYfZCVwYQxnPS3dieUVNjgNTJ12yHAgNSHMUWUYLS1WPnyQcXyvC7LxmMTC7DsbDwAqTHLMHcb",
  "key28": "QTB8BCN6msMQaZGUvq3HpB2seArPfAZotp5jL8LS5N9bDp7RvJHe1VRaDz7pzkXBe9dtyxPEbu8BME2f3474BjM",
  "key29": "PGHxy9ie34EHBsrmpRQ1iLJ64tuv8RKBtYMsrQWYXYzjrimPisEohbBachi6Wis1uWCGbcxjk5kCL4vryaKVFoQ",
  "key30": "4r4uTUYeH9aovkjJFULjeibqdi2KRAorRDiDPzZMEGXFZy81VKJF7qAP8xyZ5XWrSRSR1njWT4SGyCt7XahhLmmG",
  "key31": "5Zb2mFkCoLVHFLR3gW1L9bv6MfWZgBfH25ACVbd2ewj3TdeVYpFvbSPEKPLZLgb98KpWUcbffH19hZkVFCv9Th1n",
  "key32": "3jpZArDNfqhddVC9o2WcWAHw1By43ALvo7RFPyqYAEC14AGv3x4v7xCCqcrinoRuMR9zMABES6uSN6QD26dze5zh",
  "key33": "aTHzLpsY2SpCadoSrKfbAQMbokEd7yngbxE27qrYm1WBoayEfNPio7pSM4uXAgRMpWc2KsidCwZC13w3xn3Ndqb",
  "key34": "4vQx62tLiGY6wwxWmCrtfn5PyWSo5cLZMM9fYq1eyFiiCjTnDWvXpPboE9WAydLJ1CXeKHBKPhMXCknWNMPnaxbY",
  "key35": "4A1NR5UAQ6v2GhstB4Cf8APqoM6vkAhut3PoyP4wu4KMGxHag2yXUncWJcMZAd14yQjTrU8exe2m7vt9FeYnSEfJ"
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
