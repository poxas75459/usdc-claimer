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
    "2C698JFK7sJZZzBaBuhLzvQu6BTRdKHqDq5NmDAzyZ2QhCNYBAos3tHQW2e7yBaCeiRtKp8sehp4BwTGtD7Ciovp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hVkAcVhJgk62qUtyciMPvaBN4bKE5ncwrUEvuAUXLDDiSpruCokK6JPKyY9mpicusyU96TaPGCmWdMGEfqBw43U",
  "key1": "5jmyYKhXZFWeyvq5LtQPbPQ7284ZsDDX9wqDR9khhEb7dp9DHwCqjdRc8LaWbHnEVELKpwcrRbHwRvukuExfMJ3b",
  "key2": "2qbYnW1Ue2djuJr7DmtyREUUpvXAVBT8XTmNNQqKsjdc8F1qGNabwxz3nzXU6xdQyWW9EKsJrgviVLt6ntaVPKx3",
  "key3": "Bsgfccdd5WZwuWqp2JyWq7LqyBo3fUWen1ukPssmdvLEXrivrGDmFRLrR72WCg6F1qhALwJES85nxaV1jdT8Dnh",
  "key4": "4PTvRjofuw1PqEwiBNUTfco4T989VRZ2gxy82ZRKGm6G2aWApwtECJdDp735em2ZMYwMTZxUXey8CmSQ6rsUm8Eu",
  "key5": "4bQrEdt2Dz5mdnsb8ZXhurEWM5BNXjgSC9e9hjVJUzgVmYvkD4qzdFMJy5GPjZDSmBnYgewDuSMShW4gSh4mK9tH",
  "key6": "2WNyNxCsAVf43GrSvaDFD1udQ6AtmU486VbK8Dq1BZzmsGBTPfWDqgmyDKgoarbGpFN5B9iFDoW5VgpXJbHo99zr",
  "key7": "5yqfYddzjkeCbuD5rjWiSWNB3mmqbJUf1TYwhFmoV9y6GPTWbpDuTyDghpTcfWPJwW8YyeGtEWJSRcYEzpcWJu4s",
  "key8": "5SnrpZ3U8sF8oTuELFhoPNzF8DiE9FipG9m8wQ6ZHpTo8SDDnHGZBdMS2YVE8MZhxpiK3Bod2AZz85gTPqj3iyoF",
  "key9": "2RxRc2VR4buUefZxXs8SEwZUBqBcHYveBz6q423Wew3A6x6UNJbZXJwA2BVvDtEuuSzbxrMYLM7SLgHGCZTcBEdv",
  "key10": "MJxnuDFSRBm24L7HKYaqhcKijD3V276RVUpEqUDgqbCYDmbZXigfH9kzNuDsstgXd1a6XhHfQ6XtTPCEcrJt9fM",
  "key11": "4r62yzEmaNuKU7D3h3yn9maq6RHqGL9yrcroYFnA8oMoMYYn4bL7yhizzoPQZzQraBfAz5FCSP8HbTrBtsZedqAh",
  "key12": "5S5piDgF65TxFJgyTT7cWbHrrr9LN5SLTS4QYTUSA2F4k1bFw3TDDB7sdLJmxCKwivqKrkYkxxrUtV3eKEaUQpgk",
  "key13": "5yDyrGizvQN9ajLrFXkBJExqUo8hNiJBJeueptFbwNjUN97h3ohpTn7SvPEux8a6RF5kVpAK8boFURQUHTTFYdHm",
  "key14": "2ncQikY5LU9d7mqPZGKGKrPgp46cX6cZRBHgU57dujPxUxj1RWUWf9g4MLVdKXj1dpNrN93d94jHE1fSPAGyUGCF",
  "key15": "2nNtnaV25bcGBUXRoFws9bYVTz3NJNncZ7QPETYViLsxY5PJW8nnrLGfvzpRPbgiUYZq4atDFqoPEHUVjjLotTYo",
  "key16": "2LYyBry6n9ycXfKATtLbX9KKooX7rdS7TDQPvUbzV1evoaG9pLUSGyHYjRxQQuqJ7b8oAjnvDADZTw7jtPrpuecS",
  "key17": "3yZDQFaeREiUxZMsnkW12qV6SPW8kuTzeUUSgvrpwUm3Dngb7LF3i4teyhiJeFAfBGXTpGqJW9bfJXjHHHqmA9AN",
  "key18": "yevy5pZjv1nxTwg4XqbLYLoV2ND8rmu5nGrL8PnWT6niMZ6NLkSa7X4zqRaLTHXHRgXVLaoTu5ENMy4GABP87cD",
  "key19": "2FqV6BtyHj3MZs4EPLfENkJn5yc62xkb19DKrcE4L37eYvx6twqj1rL6fiyPZZUQVWU9vXzYFPwuezVw69B2uCNy",
  "key20": "57CsMTBdoQGissm4VUejGahKMLJ13ry19jz8aCgzvJftyJ7zcwLoGYmKTnt1gUi5qjguzWVEEVuLbLDpwrXet5Zd",
  "key21": "3pZoAndNoF1UhUtySm2JEPxn66VFBFLEtaGEJNckDirh9VBstjusSSDxH7NiGrA23pQrTmMboqFnxyMQZBX65EWW",
  "key22": "CJXtSUNNA8KJP9WiRct5rJNRvhwSmiqZ3HDsKEjvTMivz8ZdY36FF5iys5gZLuJoiQUEbyqs9gc3q2T49UZMymg",
  "key23": "3DoKiiJ5a2mgWawveyAfPWbPm5kyc6abex4coMwZejBomtF4G4gdiadWgY97hEFt81n97dxCX1gkKdKjMi3vL3fr",
  "key24": "3i4gsVqWhfERxqDt5vaok3ktahoaKQSkfSQJA1MefCKgG6Tf1yUPQtS7o3P3EW1T1hHasWXPMXZxjKpkNcQbz7b9",
  "key25": "44NLWvyio9dTwCjCo3wLEeyL8iZbEXhZKWmV1LTQQhLEpKNYLuJbZYiqDtzh5x8hvDVCJQrPoXD3WFTs6XouJeMS",
  "key26": "2obW6Nak2EMkaHQmeQdndxUPnijwJP2xxx6K2FMmNxfbQpAg9FqDUcySe2RawikY7Sprk8183s2mQ19ejoF3x6Td",
  "key27": "4uc2jFCndrvxmJcvW3GFJLeXivAMGKewJY1udQfqjfhzmDrRHBqHgGGzBAVsg2PD8infWGqyMLLhyVk8QV64xrWT",
  "key28": "49bfyzpNmgXwJYM38ucnGYSaPxgQ8HwnPPu291sFgxvwePcZhbjBSoFs8iYbiNswh3oWJkxwoBoYvxQUV1aoK1kj",
  "key29": "4vkRzDWXfQ2aur4gmAuiF9dD3uhCTrVCpSBATsqbhAVNJVKZqw7KZ6vGjY8dYWh7cRtC2iTj8jCyhYJAozxMvZKo",
  "key30": "5HiYF9xxnbSG9hsoozAumadhJdEiA8ELsErn7aWY1jhGWZaJwqkj2GqedYduQPF3VFSmjRgX9TBSjG3e6gKDsU8C",
  "key31": "5P77HZnzvRtACmKzdS5TMvZrsyUiJx1RPDSGxSNGsfVMjyxpdH87aUPwyUwQiKxbxb3UN1AgpEPp6QR142E3QhuR",
  "key32": "mb843rWDkV6GpHVDxuxtKdv5kPEktnNyL3vNLRpGBghzUhtUAUG1BnZNzvaxjW88uSABuSHDaXGb4mq65ANzQFd",
  "key33": "5syENAdKYBMV1X3nzH2MxkC9MSrrERTL4oPFda7pU1qUnnPv1tPq13KUWTQicFMuKyp4fbDChBTAhpezu93xbU1L",
  "key34": "4WzGZ52MJpe7zCGQpVFMtQ2o4bojipRgo5gGXvJRTv4ZGvpcmaYVcAQ8ArBii8xLmSTuPjKfor2fLtJbehFzWsGs",
  "key35": "3JSXaUBQM7muBmz7pc45EiTHJ2HNW9MYPu2zayN2juCQ19GWLzk7Tdru4oYCabEG2byfhYjEQqu7GPF28YaPjgJh",
  "key36": "21DfHb3GxxPL5npMjRGoDSKpmn3o5RdFjMa1Qqk1Quf6u1ZPeC5ZHxxr47dLanc4vQiwN2JGcPTEA8DKp4tbwMqX",
  "key37": "5ZXBVrgCcP25hwMdi6CwRfrmt6U1p4Xh1GEjF9frrGJKZ5Xj4K4XXq4iFpUMSg11RjWjFdPdU2y9L3MEgRWFRUFL",
  "key38": "5DgFBgM4Mr66nWyZ6LTwKLekCQJEGAiLYyc3PFRQa7XBaXrugpzBuPP7To5hDL6KhsbWafGHXVJNka3PcTBQ3emB",
  "key39": "2qfwnTD8wPN3XphjofMZY2D9cHMxnutgmYKEM6VCV7uaRmRoCysn2utUkUQeFvqeu6HdJC8T1ZTdAGJy6rfmJr7z",
  "key40": "2FZQtTJaJ4sJdsY5XSss4Y8CbRfgyZWe2nAtmCitdYELpFS1z8sYhqNPFQ8izaypMdm8ozcr6s9MErzg1jaGHT8q",
  "key41": "4Qa1FGPUbKkA2Kngiab8ku88YgiZvMHfVXQtGe9TteqqM9aM3bjkkafvcpx1SN4cwA3Lu3uA9mjydzQsmSLXubKi",
  "key42": "2SuJkVbxHvrJ6RcSVSBXUrUiQ7S8fu4uMrtUfmdxp2VP8xPSDTgNot6XH3G2XoX9Ai5nt9ay9LQkEE3EHBaNR8du",
  "key43": "PnPMR8FCfTacLG9tN9L2YtEiSySvYhoh8zKMhFDehT6zsxCe9WN4eh5ZTvLbktCEMuhZrQxzNwg2tWBe8y2szjk"
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
