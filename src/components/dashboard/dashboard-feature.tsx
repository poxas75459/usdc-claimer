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
    "4FbfExvV2ofanSgJ17Fzs2HFsHqeuMLCxaR7yvxhoxEQWPVK2ByDvAhhaCxyo6QBcAbq5y6k3EPvVLCMinyWoW6N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A8BpXAhkKiXGYAvvGrZiK71ioYTQneXu9m4XTXgT5LBBU6VQFBLLqnRwXPJKX4nyu5uCQhbd4dBYysPkDEZtbEr",
  "key1": "4ABM9EEAQYjJjfcVmeG55pTSFHtPcnSiMy57A2Xa8zYgqrndAB8mJvs94rVCpxFXbS3BiLBCHzLocEkJ8DGJKCqs",
  "key2": "3EFGTcdbMAgLR7dr27TxMRBRVcu8JFueGaYKWjE47oRv1nr6ssGTccreH4UUSXVE4xFJj6vJ9jUkMu2aUEqm5sJs",
  "key3": "2UZ1ScZB5mGHVmpf2Mxa8Y6G9SK6ujtEiD3qgweTXftxLkgacm6rg1oAWcsgx3yW585sKufPDch7kWrn92KQ9bTD",
  "key4": "5UPrgz4BVFqJoUkG5arWUwnFBzR9rLiZqFkxcCQ7MJVhGaaARkSDAC31PYqre8vBMnGzE55L8L1ufD7amNJZLaBZ",
  "key5": "CNNykCghbGNfNaX6go1gyaN5B6nsE9mvDuAfifjwoGNSYrqHUMuPkDLVAKZGHK61NUaJRz7NJrH88t5v3N9hCRJ",
  "key6": "ehyx3ZnKRDudqQuDqdtgkyhebzZxqsXpAcawVCbdUGeU6Evvw4aRTyjX2jfcxRTiwKyXoUEX5v9STBf9RMEqp1L",
  "key7": "55qKgmUNnGAVnJWwS6bVHLqdPRXT9J5rtZSCrsVaJdPVTeeWL6Qbr4qpvf1WE3Udvoib1NCBM6Ztr5ypLngTHD4y",
  "key8": "5pBMCmmrh4WN1C2md58zkH7DB8EEeUPnDPRhWJ8wHvnhmsU2kBFNCxkuc5fAgDhnGhyuny3vHQzYnXXHTWiSTNSs",
  "key9": "5UGxynW6H5Snm2J6x4ozwydrSLWTS4Ci4p2PJhZ3f72TkMpyq3NAo25YWR2sYAySycwUw5h99gF7XrMekZatofKH",
  "key10": "4txvgx5rGet3GfXfjkJJNLZti3wofA2XbcLYtoFZ4EJZ14qiRHK3jbEoipZCwTd3L4rz4PArR97Lhh9xrUcXcaYc",
  "key11": "AhbWfZaebrYMuyKAr1cHg2Y4LLDEvY4WLdBddyaK7LVuu6jbWs1fHTWCNxVzagrQZ9sd5wksHsJQeNXaejyZap8",
  "key12": "32zVXERbxxkDzpBf5GtYT4J7YEqd8AqDyTrMpi9pt6SiUo5PFGnfnYya9zJuqz3rRnkqZMRt7R7MgPF8tT7wb4MQ",
  "key13": "397uviqYx42bFjN4Qy52cNww9sM9KqXhaE8kCUocE9tfCg18g4tigPdL4tZCJ8PRymxyu7oHSR6bPzbgezUmv2Bc",
  "key14": "3tceLBLDqBKjjpkoEosd2qMqx2W1FQAy64Yxe82fZx78S2oDLsiHABauZuGMTNm7gtvFSng96e79EheErXgxcPF3",
  "key15": "4qezPMrqiZtkPnQA5CrWkkKMKNFgg4AJrbasNiN5zVoH5hbgkcb1Ym6uTdZTkYuyXSt9cVh3Ms7ezopiEjR5eTcg",
  "key16": "22gA24EFHGVgFbUXyhqtZDFYAKMV8j1Pt3NtxnuqU81nof7iRn91wKN3DNmvtymix2MMfk1ptJs715Eouxc7tzRy",
  "key17": "2L71raqLajuBDQ4Z8GGiPMPFkfpawHQ1XuhmfbKhT2nUQek1SdJB9MdPEPJ5azpJPz5SmUf2fFHaYT2Q14vQLx2Y",
  "key18": "f3QXz5TdaKs1w6TK3fnkdYnVt2K9Mgs4FM8DXgMakUfPnvXVeCxZgkuKyBLvGZedVQbowgAqP5cE6V2rujzMxyZ",
  "key19": "3cGNRm2fpAU65tqaz57zJr935eVvyLEkBu1rdBYpe16AsPj6QoYGFG9ijaBnJg4Kr2fRRNEE8n8BzLnfEsAwakhq",
  "key20": "3LXxGdvQiPLZSe7pfxvn56RCvHYWPYZ25gFaM8zkp5qpQKwX7Me5C3UkZMEDLW7mV43PW9nxTtcb2ouJNhMmX2Kk",
  "key21": "511djT6nCo2US4hxxnvFRnNr4FjVnXUBG5mZShtyVaws7AdE6AbY6dCs5YPKhAadVrVtnMBgLuNZMH8YW3HWLaV7",
  "key22": "66f3qNiboFTpEXNiVup5CjLrpNWJJwHfvHskU82WRoQpdx3AyBJJM5kAHndzk3mtZhg4Xbk2AgUGiEHkvUMiGtuH",
  "key23": "3oJxsMeVR12FQSSBpwJfDepuosJ1wumpZdym8BDAYrGKrTJANRrhup59NDEJ8iJZFkZgdFbbTiPvqweSAcnr9gzq",
  "key24": "3Pt6d1MTyBzkBz6jwLDqc9PFatCsgqFwV71vRAw8q5dpTra7pwyekrbWyAuJ6sjpdu9ENdwEEvGGkQvFW9DYbPyU",
  "key25": "66cs2M5HrWC1JsT5EthvDmCB2MPKvxB2tdmRHQfHfBGduhnrt2dh3sjbVvTz2Wft83iBCLUUavKdVAzBBXtZJAu",
  "key26": "2x3Uu3C8Yvzp26Lkx9VspHedNwkPYiRpqQswKYQ89g4HxqfDudoe7dgyM1D9qoNPR8jF16Q2ZDKDEFsGbbviyhGe",
  "key27": "3kXhsQVMegfGniCxGAqNLcJuHKvUnCyDjAGYKKdcitgPxdXaGExg6ufBAwNVcvbaCeEhFZTjJ4F9s1nu32xdjQKB",
  "key28": "SptUDKqjeBue7uJGh1gJRja3Y3R1FtVXffhzbxjpEMCGVPZBJGsihuxsmxfYodHVcgT4fcW114CTSaceYYXQ1sF",
  "key29": "3wmP4wpgGuHwVFuk6yQWTgbKyQssFH8TqBmxNW3w9QHasaecCbf99hdjwVdYEGbMpD6YH1MueUSrGcVQ8DaXu4Yu",
  "key30": "25o3bJ1U98L6UVGrLbv2krpq7riXNsL7xhSvXGNNXZuk3BD8rs3oEgZKSexVutB93cgvp1oKpqBZM63RSTXQBRE7",
  "key31": "3HVqwUFYouYYPiGJJJMPxsF3yGuFWnrhMqcNNm6x2DCjm4jJYeqYscbWwcJ3XVciwoGS3CG8aMZeVnW3A8HX4mXe",
  "key32": "5a6LRQ8S6hFoVcSZWwZNM56KbWfjkEtN5dfStcgt6dchEYTtWYTyUPUpFZr4a5gGNCbE1q3fHPFFhNwiYd4QWNzx",
  "key33": "43MLH7pzFaFRw4BHfPA2HhaLWGghAaKwBCwjfWxXhTTpmv4chnmcq79QZPWHqT1EqmcNBw6ixagDE6b3EndGEyuw",
  "key34": "4noKuoYeS6DEirKfnv5PPkknS9EiYoauYPfkSHBDkqpBo4BjyvhjtpHtC1PN5U6CX4aqqLziQHKMZy4kGtf1KkP4",
  "key35": "4y32JHUprGgazZAYr8hGsfBczQDWpXkk65VtBhumghUcJmz8sPjA6jWKr6xBTZKHVui6fsiDq2xQYve1zP3WmuNG",
  "key36": "25u2VhawHRB8fVadzn181EE8GhxuauTaHFrgf21usiFkbFXjBpanx9nc8JF6xgbMiueoFopr5XvqT3hBtM5amLyJ",
  "key37": "qXikWxg239vVUR1fXXKpQjfMY7CU1t2bLhwjYHbgv5sJvrAExckrre6rsGux9zNw8gHg5W59RJJ4UKshR6AUQaK",
  "key38": "3XqEimvfNe1dywbtJrheQeVuF9qZoGLkeB8sRrwPWXwY6VEckuo5A15mvwVofLUeZeagc85wZFBLnAK3KEZ4rWsE",
  "key39": "21XD4YGVMRA6en6RZXNrM77AZa9uigeEUYwrvHdqJstah3mG7o6Uo9fFtjDorb6QgMQ1XoYqe7w4iRnhucmzzbci",
  "key40": "4jeBfudfhG1GbXVmikmf6gaGHNGjTq4g9b2R3cGYdFdQUdfiK7xD4cUMh5Zio3dT2vRR2moPR7Zxu3xGdfjv1sbf",
  "key41": "5ueJrydStHrrh5v2f7ddtMkMZraMvMjC43AWCT5CGEqo6WqCQp57RfmCpCezU41qdGfek4A3NYjC5cA8UGSZMpkG",
  "key42": "S7Nr91JFkYr3wr6Pu13c25KVy8NiA4CPyCvfF3GipsCSKBqYAuZqj7UtZrAGoW8XKHREsx9vt6TzvewZga777XQ",
  "key43": "vUGRJpCrruyWvDxwJugeEecrbrhHc9UNXfYzan6p2o9kbZTLjcNwgdvHumb321KDaefts8z4s4hp1b81mZ6TmvL",
  "key44": "2DWhWqTeGF1iscs4QjotJmGYfJmENEqTWXoEYnNr1mckVKN6si9hTsbXzsKfQj51sE6S51SiE79CsHDYgZNemM3M"
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
