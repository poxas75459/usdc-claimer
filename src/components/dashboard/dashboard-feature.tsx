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
    "3EFpsZcXNHAkMpLM5iVBrYjCAXXQsiVWTSWtvEXYg7F6kq2wyBbgiHuPXgCW7mrv1cCigAmewPYsRefmW3QAnTco"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KPyqZuitimrFMoyoRdaR1po2ciEWarfdEX5Y3sp9rUUKfvfheoe7s7hcCFCAbeU5T1PeSDd7kTSuBY8La4zHaT6",
  "key1": "2A5gQQn7zY31ivWzPvp9US7gjNWx8EwxJv6bzJ1CjKtXbcGh3k8Xw1gXzVVTsKbx935dRL4yNDNo8236tmgCVJeK",
  "key2": "BsJecEJmbhyf9Q5jnTnz4sKWhDJQsWLv3zq9UTTLXDhMgKV5dpgWvvgntoskbn1EydQrLEWztiEd1BbRNxvsmv9",
  "key3": "uVdvD2wYgjfXNwpqvvV2oQQURsQLB6TcmKvXpUABaJErteatFaKWySrdGPp586B5zaGwaDacTStUqjrvs1rRFaB",
  "key4": "3MJWJ4wnz7FGs7yw5uRYL1bG1BrY4UEp2PTVPWz7PTm6mR9ZeuM7X55CEC3U6CVrBiLQ3WZhErNBhR7bYs5FiWtJ",
  "key5": "FtkFoRaxtXrbvcQeT4CXqLghb9GwE1PSpT91diodtUeqKiU5oUo2W9vZGNM7AshhQ6cPrjyi35yj8f7WUuw596u",
  "key6": "nGDCvXiwZRGLFXbJTYbypwMf5BrSgc87PaL3Fu4Z6Fhq8fyc6HYVBvpcMWJsH4s3UxmGM5dVxveVRYzGbBzwMWn",
  "key7": "2Z4mVZpoaKwaVqfRcUG6ofkhh32AERPCZ3S2J1GzKPsqVM9iLGD5XQYrX2SQWf88Fhw6DpekamB1Hu93vF2fncgv",
  "key8": "5hhwnYnejTVBWUFUwVfpYd6W3X7URBPgH3kFRCbPpWiqptU9cuYuRKaFaNZt7phAuLnpTgV6rnDsCvGVQQM3Kd3V",
  "key9": "63JUaujWWrdbqhNTYF7Q9UW3wVnTukThaMu14mJA7wK2SxKS9pvjwAREtWnomkvKZn4XgR4EUic4mddjhsscZsm1",
  "key10": "4pQjwFCxAeMKmVgRUc2EJiDoHVF9swHYpyu7HVSRVN6VynBZsycvVjVrTAo8Cv4ba3QNxFUj138bAL9Cd4Lq5agu",
  "key11": "5U5wgXp5jPCszUNKwkSmtMgZjwfuBsByXNCqtr3pSE26FBnd4Ruj4L3AkNgybi93VuhtbVV1ZpC9XAhNLSvTbEyx",
  "key12": "3aKRgsgC3xckc2ukqvW2kuZa1TKXfCwHxPLFLK5B1S4RcRpW3RJGpgVtFY94Jkmd7o9CkNxeZGx24t3vJakUTSzw",
  "key13": "4W2MmpgA9LDQpGGYgmHrn7MaC7rtSBuwjYDMDfy5JTDa56Xnor23F5xcSoa65a8NexV6B8gQenveA1MiaQtyqNo9",
  "key14": "2yhfWWWqAidaJHGi4BXucZBgaVMdy4pXH7HA3EHG6Z7MXTSeYwX1qyYhBDo4EEVfTwBd9bPUrDfQFjqPggVrnsQd",
  "key15": "5zKf2xwGopdWytvP9mo9McNC4xSxYCKByihhNRxJQxwezruzvx8uAkruqc6kYRKjSzEz1ZHGdhqCsieP1BS9xZv7",
  "key16": "4BENF3QNxo72hqVZvBYCiTrJM38CbyBVtvZzzGa75vMrm1YyrMkM143sbRz1jFpWFEXKBzD2WkemFJvM7yie76nK",
  "key17": "4LHP6dziWou8BuGR55GEAg5r57qTppgAvHPagkRrjfhd363HaNKEtXZTzrFPAG7uMs18h9MWtQC4aMhwri4CwECQ",
  "key18": "3ZGJD58nbzTYFeK3wX327BHAJdNqLGVaPHN4JNeUe8M2mpdwRP2wNpUK6C9tq64p1oJpuCJZcge6VZbpWcqecFSU",
  "key19": "5DVx9X8Wv7uNcYJ5ySpEb1KpS7pbharY3AMqUWwvS1cibp5qjiRmhyf6iCRcMEqz4S9QvJ2ThouP2Lk8h1KYzeHS",
  "key20": "5Zzf4aTGZERhQTgYX8p5EU1HG1R9ZgQDzoenoW3KXCYkQ8vbdvswgUBUaymZfR3PrcLLL4mjysg13qbohXLdU3PU",
  "key21": "3xd6cUnWjPAKTn9n367e8CPZerQLSiERyeUH6HEPFrijVtFozYZbkNzK8P49U78aPhm3C717wDh4oSp7s7QAhMJt",
  "key22": "Lxbpc5r6TmMgYc38htkHzLZ4FHiXE5yDoSf8fy2VqrXZvoYhbsrYPEFhDQthjVe9UoHhxiy2QcqVreBW5VTPiag",
  "key23": "5GK9JERxfvrMTvM7zxJNNCDyYJw8c7utHNSrDMXpSFb3QXo2zHMVPTwzm6KR9ztA5k31n3WDr76DRu2vdbgzGBSK",
  "key24": "4pBSo3dFoZAmaBpEX2cpAszFpVQY1i83MVErjqVbmy68iGiu2hTwn4mebukqG4gVZcrZrZsGGzrQCrfQd2PBQnUM",
  "key25": "2EG9enemGVpvxcEZ4DFqE3dyKZ9mvg2wuUzk79jhvv1LWdQSUNotEvoKvxGCxgPtTQie19HXRxNQjuReKLcHi6Ju",
  "key26": "4D9g3czGCd5cpYXw7rRcGGh5jG7o8jnyKrUyGET2oqq9MqM6sv1MdqcKDrXFR9McKaYD9fcdjFhQWUU9mexanXwZ",
  "key27": "4VckR9GfxVS3uqkdbQsMUB8kMrZXsBPp76TUMWaEhqojmZUoYx5maM3aZnasLiZRG9NfiaEzJZvZcrRRAtbDyStC",
  "key28": "5ujQDt6PNfQHEdDn3NS32f9im8vTPxS81hAhJnxEM7ems7U65kV4R1aG8GqxwckSKfPSzYL5j5pJd5AFaWXC6xAT",
  "key29": "WqHUUvLASanznSZFBUHf9pjuQVmJETPwBdHXSzQqtACRsHr6Rx8KrFJJkJe1Gpq8Xb2HN1gSK7KwUn4aNA5fd5h",
  "key30": "2PmLEqyUYu2iTd3RFL67mrAmPVFmd6yqgBAMyYfAB33Xwiq1ep6QyeGRTY5yQ9UTedb61CH62hyzknBdcHi784TR",
  "key31": "49EpeVHAoGLQtK25iqEddPfvxBkqiQG7XfG4xyBMujSyk3Z2eyWWFXNGCRRzAVYgmHXL2pCAp8rXTKTVTkD78Jba",
  "key32": "z2owc8uvSxs5ogg3Z7Fh7dFUKkrB5Ge7xKTwUEY5kSKEhREdGrZbW9d7H5oMeAULnGZoGLGHNmxtGMK6NJwxSea",
  "key33": "5ZpZ5vrMnsYH2KG3VxXneitMM4vaYBU9qzQjB8yJKerSLc4otfkdeTYCWeUQwV282vnKanBKTrbHRF9rrpHfhUZQ",
  "key34": "e9KG5cVHis22wNRxGZW6zuiUXjgZyRhLj6ZcxCgY95JLeUA1nUCyxN71JshCMZ5U6dQwATdssV7Bay2Q11cHu6E",
  "key35": "bdg9RDDjAbrJ5jrmtM4SxAiVRkPJXrM2eDWTiUo1osk9nvbMEqhaPkFwL8RbkNAZaQ2KYocWiUGVAEna8eyhW44",
  "key36": "4DED6keKhFHkSESRR4wnYhNUnG17w5JqLPGesx97gf5AWBh4dzsMosyCpKwSER8ASe5bTwaw28WUucmNK8Zdht7E"
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
