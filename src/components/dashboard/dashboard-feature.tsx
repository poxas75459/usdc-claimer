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
    "3djz97woj1SSnTNeBFQuKxffnQjNmiS63CFYgvHVnZwXcuLjGbUeuFBEz6HvtJH6TdFUetQ5abMNkJ6aXdJz5d6w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ci9QtM2AA69qHJSSQWNTV6d4TMqRPSheAGVW1HMojMGRuLGHqg5bJc1iwTnaquGrVw2iwMZmBfCdCZZg8PPMKpw",
  "key1": "2BGqX8yXi2JZB5HhxkogXVqT8oTSPioxMQU7qvJRA7VonuLDtyfQTYk62GY1Z2gt5GDVN7XFmPhcT4CSG6H5sRnN",
  "key2": "3NWJtwyjW16x9Kny6FDRWpck4RkSkW7fBCnUA38kpDfqZCURDM7ATaXDj9HZVL2sBpwXSnb9dAug3xyZiCFxzQWH",
  "key3": "59Zqqv38jjbV9Sefppv5XXsVtkFVN4LjpGojV5kvqfhdSixPK46F6NLZf6FPSGkwdz5aBWJsUSHYSEGAnWr4JQEP",
  "key4": "4Z1afjdWGBC1fm7smjgtUjpZicoVZVTgSZfi1BXyXv99Y7FmvChb3pjHi8ZuwvufSqWWgN6UMUi6ycah36FFuJu9",
  "key5": "2oaNhAGYLwcFHT1kgjGt4DKqfBumhXTt3J3UyVqAnci2Ad2LcDiGst7kBD4wxL9TC7Q1xCpGcVrTMPskqPeRdUZP",
  "key6": "2FwwYRQdbWcSoxTFASMEd2Pm7yzRtZuDfnV8uy8zfLBaiAp1gXc8NXee3XXoMuEjaciE9C9RuAkqHZarUi9NfrvJ",
  "key7": "3mg6pmiivbteUPdqoSF2d5ei6WDh5Mo8ZeCs3gPSwA8xYwLEdEcY6iKDKH4ZK8xGE3HknnV5KPfguB9aiEi3P64L",
  "key8": "2LcraXkEJMWcxRzkUJUBw47YQJAAeza8FMuXiRVbxqSF29jN7eV29XxaNNsuDKFwPK2XLGLD8XCKHL9y8DE1mJp5",
  "key9": "5D1uVYBULHENZ1NjMKTdumHCm9xsdr3KNMb95Cqr6JoLiCE24Zk7jhkLWcsEQeGY3GCioL9gxNue9LRFLsuQuihu",
  "key10": "RN2Bp7gVfmssRhZkrWat7Tsk7qCL16Zr9B5tuf1X9AF34cTbSqtLgGowp4LD6ZDNfP8mMRZpRX6hT5WHkxMm6bA",
  "key11": "9JyeFmSRT1WhoV61qk6PpXjNbNgqRfak8qPNKzmCtmRQMeMoCtyU7moRkEwDsjgN3NsNQEUpAQkWYGduJkR47R7",
  "key12": "562qH3iYNfYceYpQn9pdR6F6uW34sCMQtoXSc6Am4xmCKp3AH6GCeENnz8qxNoNTi2ti8ye33MDWTkqJHkh19hcP",
  "key13": "5Bk2XVqGJPoeMsm77Nx65wr3gu1xzwkCzU9CQ9Z8naZYke6ocaHZ2tBw7QQQzr67EDrUfqP4BgCXdZw81dWgWNhc",
  "key14": "2isKQHKCZQaieGfjnGKDhCg8oFeUq1dtxasatMTEKXEBcyThQCWBmCoibJqWimuRF8eetRSTeEaXhoqamzot7njD",
  "key15": "2GyJhjngUQxArW6HgmnrpFapfLhCgixf4t84cFFw4W5pMVnmSDbkaR5J5vvdd8YFzdFtfdfjqf1zwcaG9QYPP1oV",
  "key16": "4z53bN4SNrLsfDUGbnsd1FW34WFiP1qfujkyJLbwKJJDnA3QH4hKmd4Wx91jjoMTLW1G8qGfpDqxgGiB8cW8cS2m",
  "key17": "3tEg7ioKnbQcAuMuepAaPCjanDArGchbwruruocnE7o3kbvJ15qJuWd8mk69TJkXipYuRMEfZBPGsf2o6qerKgy8",
  "key18": "H4QqNBTxLKp8Lxs1tNidxiKAMaU5yYSdG551M2mpSZXbVuzJFW151obFprb52wehCBALjtffAYyWdV7Rytungu2",
  "key19": "5iDSytktntvMgooUZ1n4wqjbXUrUEXLYHMaRNPoXWb2QwirZHFoM7BCCkcjev4YyCuSPytEwvPmBupmuuNeq1aix",
  "key20": "4QWq35QGqDxuzUqsZvAPYPbY9YhSZq1SJtS8JgZB79zPZ8mhJ4D7tadxZRS2d1b4HZDdPTyG2M9ssdvwLBLgdiX8",
  "key21": "9AheutEnnAZaZBqs9Zgg78m6GNpSKJDgyfx7sGGCu8FUhha5694HD7eKt7isPJTS6jnzEGMcZBHYvCZniftpbTV",
  "key22": "2RTZMT3PMami2ai82ebkZoAVvn532Ltb5AJH3BnN1CCD5YZmaPCHQ9N6Z2w9XfZssTmGFW5yWLauoZCHmD45dMSL",
  "key23": "ndXJabv8Mozzkf4LsrNQHk43Dvqv33kGLAUQ2Jcj8rCM1nDuCUe7LyhyjGuAHLaHppXnZJCMxgnnHBQuu8aMtXs",
  "key24": "5UWuPXPxSkY7kcDt3f7jk1QGTkRN9KDV92EdyJAcx55Aw1F9jAi2oqqVhoff6bFFfd7DSXHXoi9w3dcEkVT42vd",
  "key25": "4mWVkPvf8obrqaHsYThV8pTxYuK7LKRQsR1ZYNcwcqe42vYMoNhU9539Ud38JbcLySk3yVhhCFju7wuAGL2RQHaJ",
  "key26": "5uHiQyMXZ3nTVenj7yz8hB6bgj63r5TDRo28a3hXi8fVZJgTsVJ4fPEgWWu6LB5DbwAPuwfdUcDbVJ2HpxtbRZGT",
  "key27": "3J6BJLor4ywxFVP9AkRqp2EHetBxhpwbMXCNtckv1ZWFcBeFAgDiejZfY3zqUyBgkLojnocQkPznfW1hW4h7wLrS",
  "key28": "Lvhof3YV5ygrtyP8hYDrRphL4HbbCaLnu72533Kf4LABHqgV8CQhbW4h251gUeExvyWDXUjaFJUqM54tnTDRcqK",
  "key29": "AX4pFdKRbAhPen3qxbFf3EzyTnjmm6t71aPsJr19yKv7vfeeTCSgWs5GYE7RSwwHu2t4m1TbLddByThLrU6wd4F",
  "key30": "64BPxK9xrdnRLhRJ3UYBC4SKDKmRrQcboGHdU1BLXK1JGMrGDzEzJys18orLyyG2zWQdaGnfRGTEaN3MqfK7bjC4",
  "key31": "2oGxje3g2aCuGWDoBijmB3VnekPhdat34aWzZXm31eHbfV4JxakCDGBz8pEytipZDFPHQPdzJjenn1Yd7Y224QSB",
  "key32": "2TSdwQhgsLUHaNQuHfgytnECkeEaW7vrNuHoXbugLSfM4ADPdfPu85iVGsJypQmH6FPq5gotcL957B2Rt6ZZLWp8",
  "key33": "5qswK1GfK3tbNpeye8qTWxzjsnMBHLX8ZbtCqn1bFUmuMrds2goJiFf7RT7pc51SdDCt8hex4S7niEPdQpx452fQ",
  "key34": "3mGK8tM4JjqRtw6gab6HPxj4eVga8Q2SY9hKZk88d1KWiSp8AcWL32fbDQX1t2KygajYfqRYhavRn8kye36gcoHX",
  "key35": "2CmvA7zKX7Dwwauta2m5MYdCSH8vDmaQRB3ABVHT4zgWK6tqitP7A1bQ7ntZQrQMmbgsytFgMKg2BydiYA86x6yP",
  "key36": "2DYfcQhMMA7FYPFkviCU5szaMmWcjnKgfWZSDxNsvLicUucAgVio61BYYB9fS5MfTbR1tQH3xBCdhpTLrac9xkFx",
  "key37": "hD6fM9JT5sDSeG9WQ5RenZ7bdQCuaNiHD5cPyULkrb7x3pGERmd7CR4W5KnkJuKMPwmuf65TcPwEgLNmF8LWFnC",
  "key38": "5EHYzFiv4ETdkvQEVo41F6njSSAcWSoSnQfgRF9YStnFwMFEAHfgiJYu4zXRiVY2J5xQZJ5R2KiGHnunCxJV69Gy",
  "key39": "5WJiz2TLuskXpDk77L5UqA1Vpb1xyjp7bJ23KHBnric2NjkxQGG4MGckVAqZ8fV1jgkuQqwyUk95U8zpgDCvKcGv",
  "key40": "3p26wNL4Hs1x4VcGTe3FW4Rrhj6YEcFpQH7MkDquGsMxxt7UtW4ANQt9tkp7rmk2cwhhFFthk9MehmU49Zy8SUQR",
  "key41": "2zE1NrbDP2SKupFqNYBhrhUC8rg8sTLERHK8bziaqSCZ4Mvah4moPM1D2e7b5KopUH4TFaAzbLGPu7uTfjBknX42",
  "key42": "5FdcNHwZRVdy82w8LodL3CBFq27wqauVKfDWz9WmRLPJqqmokY6E3X8i92ahTGk23J78ot99YdbiZbostnqbmggb",
  "key43": "CYng5oAuhsCiHSpk8G2ySrhPkTfZPZMuecwvbFcFgXGzPs7zJ1g7AtMqWdmZUQdXg3jxkGoP43hDvApELYGUGgr",
  "key44": "5UuANKchctJezmhM6hGcbrp6oNDnjG8uLDUjBEwqsqFAxAJsR4yiVRyQ5hLbVf5ibhbtdJJADzZdQu23qryKd13V",
  "key45": "5VWnFRQ8NBCiWTFdquWedrwaC7pQTwjALhDVm7ALP31QnptKaKRSUsA9yroXuqFb2fcE4A7kYRZPjhPQVEPPy1Lu",
  "key46": "3jjMGn2gyK7WSUQXKSgWQgmoeMqHtwKjPJzSG2jUsGJZ7n6mLyFGvDs4DRni3PQu6hFGZgxtpe1hSjaRZ47Kf617",
  "key47": "32ahrfDfekBKzeL3odJR2rM7phTABtqxp21Ei7DzZi7rLZLyE7nPckGdx9MmF3ZYGQnUyYrsj55ph8VRUYy9nQHM",
  "key48": "3MAXHQcE6iTqeyyP5NWVinpWqHfZnQFLPfWJwBgTJpGVCWyHuXrn57smFuADnwHnTQryuNyuVSWcvVDvhaVKBZ5D"
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
