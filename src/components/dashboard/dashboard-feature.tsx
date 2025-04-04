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
    "2kLRFstwqqLZ1LzKEq58trp55c2pJrfm3VKZ6QDSWDtPGCkRt7G6dQgdMqd1QGXPEZvt1eUiS9vaPoEK6snXgXfH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RaJh2F4GengbJuLY5Ragg45G3pbcbc1qRC2L6N1z92ZoudU7FNM2ZR5PNnWpxJbfbSipeQ8DnPqET5kp8K9KkmL",
  "key1": "45fW76Jx3jjs5FbiJ81AcAZ91szbH3bxNxSsNiYnCRBr8gzcHHmsNfC27hSsQy7MdFGC8ifVsgCofGzDGaAxp9c7",
  "key2": "EzSWcxV5atot6hRNFakWrEmf3zD8eYEVwms6xiKdDNRXC7Up4EwKn3otfLpdEUHWGMhM3u1G62kpxFNwwc2jkbY",
  "key3": "4PpQcdJwTMqXj9CWqmriYJ2yS85ePLHZFJBT4hMPbj2zhT5GWUVR88h2TeAyt6uHoWpc9GmXxikeJRepx89CLw4v",
  "key4": "56EnienSdoVeeDpfrrbU68UDgMTkwCPhsZ54UGdwN4SjKfV4X1JyPKbayLjw6PgvQc2Rbf9dXZH6R8jwEj37yi9W",
  "key5": "3ewXjeN8roz3MG8TrEtGTVmQPPvsPb9MiG9QPyWTkwAzWSRMyg8fUDBDaJhtEgSguXQPH1Lsr5oXXdPsFVuY1YTW",
  "key6": "AxjLgawVT99n2hWj72kWeBhj2rpkmxecxom9khakxGwU2NbnGkFH3v5ZinMmVVKVmHRVqNxAAqxusCKfFNs9U9g",
  "key7": "62vkmXj6wsyRFx4uLSEfh4xfhT5Ggrj8Gkn5XfgzbHfyD323PmzfpQDcJaopKtfAkf2XrxCbrFzbSMKDh77Z823B",
  "key8": "3mZ8rceGHNA6T4iFR4W6mMsRW7XSCDru6bPWQxuZ4jwBaeQ2fTyLPHgwpqP8kThS7UqKwc3rBLxfzE5N2VoCjPAP",
  "key9": "21uwSdmTN65JURA5e7GvYp3xkVPry7kXi7HX1gg4cuLoiPZWfGqK6UdFqmdfhbADQGGebt7WLK3GspHWhoQibuVV",
  "key10": "4WypGTBpiSV7dbhRTosFzXWFEveAR5P9NQnouGM93231mdpsJcSrcJYfeN86gUPyVDVK7S7nGxBGnyYuV8McmYgn",
  "key11": "3La8tpmaSiptvHaxSXxRzUAUssqVPGYmWB8Kx1dj79pJnFxdYeXLWSFuJ9egRTZ2hLKi3zkUxmLzk3Fcax5RbDpi",
  "key12": "3SS2reip6jGe9dFRgFBirXxznD2WK2HTjY5s1iEEeKa9Vn7pnc2hmYpmg2pDZM52pL9zqVkEQhcepNv8bVAyxFad",
  "key13": "26dXQk3cMGpqPBeEYAi3BZAkDfk3nnij2zoU5gSXMySBUXTqykfqut219migocnp3A8amNXjT6CW3kQWhRbzvk3p",
  "key14": "4t6EirboqQWPBU87CdU79a13ZoJsCphV2yU6MPKzGKa9ZCYhiwTSXuwDem4E7TgKRB8TPWkPfKx2iqmE1Qb9yQ55",
  "key15": "muZr6F1rkU9Xz5hPTchZPqMRTa7DSdABCCpQR3xZHQxAAvNZBPRvNr5g5ATqFJq72oSy1wKUF9ajj2jP3dSFy3q",
  "key16": "2aXkbdDRBN5Qpbjn3mewSo55cP5RpVNy4gWaGqZU8qx2rz9CxAViXnvg7S91st1pJBiPzsszGQW18JAcSKYg9kzY",
  "key17": "2jLMXYtrsCDi6XwptCJSy6TDUCbqKd7c9nahaNvEHwwLT5oEgTXJxdBPSwjEe12YZDbZdsPiBPrxCpxSdKxjWDE",
  "key18": "4p5oJd3AnBEysftr3vi6HjYCfgmbabwtJ63ZuPqygMRxoVvZTZEHd6JniC6CUJGJHdVhoP2vqDcTmBgqSJ2NSxS8",
  "key19": "3f5eZj4NeXX76SDWt9QWm3Yr7te6RjyybTV9a3F9TKd9kpyL3fTnN1ngSToFmUReL7ACMHMp38t52HyhyetCnRpS",
  "key20": "5KabU2eJsxwyNPxQCtcW6xcHWKaHnUFD2qCxmm2B2c6yYjXEYGsvK3p4pGqZH8RxXaVfjmFv1XaBSrc8GsHYQkWB",
  "key21": "3bShDXDPJrzBxKZxgaq1iuwYD5Wg9k9UGu3bAWkJsEmKpTnSu23vfrgevP3P5YanBFN88Xegu73RYnTRiQoD87WH",
  "key22": "3CB9y7QnS3ZnaaC5uKAdHN2zDTEyQdctU3j92u1sD9U9tvoj6HPVaMnyeV2UzrgefMkEunMrF3xQ3JUugrdW97fv",
  "key23": "4HM11rotM1mP9YQ3cEeJNBsTcMQRdTu8JNyvJnwdTMMzdYekHzeVzhbRENv7aQYw3XEJo1qAGG3AWstbRP9PrK2k",
  "key24": "2M4K83ub3pZKTu25X91VsHHjQQnY6c2qJKQ9f72PM7LtC8zbqeBSPTmBynAfNtSw7LAQmwX58d9TzPtSPGY2habN",
  "key25": "46XeUUM3HzZSNkk9rhevczBk4v1eQ8RCEtU9LLGneDKShU4gPGPHYSiKTNu7rtKz4eMpnvrkGGBjGcSLYet8w9ac",
  "key26": "38KFiz98bNPh96pzbNzYMJFxoTjx4iqDZFCkjGQvxjXxv9c5U2XTLwVLzcnNXXXvQESYq9ByhSn1a7reG1Qsm3Dr",
  "key27": "58jCKJWMFQbeJw9ei8zxSHjjvEoshYzMMhzQdcvSxEybkzJo4446m9jh39SvMtbWs7SsBHTUaisgPgRCfAvnVVHJ",
  "key28": "4TJnHGQYaFdsFj5ezvsnbGuBtfQAczRzV57yAFYbvp1FGeGhzfr5GTrMdFBHYB371Umq72QpxBnRQuEH9L8V3U2x",
  "key29": "2zPJfZUu68wuqmuS4Mvr3H5VumTHfJ9mCY3wCSDDS5JPcgw41FN4n6xaMQAn893uASwGG9GHqAfvukLdH8vPU6ja",
  "key30": "3rPUDPjbjMKKnNsuenuxpkKqYHM44p3rXSiGgEEDugupaq52fWUL7SSJj5kVkWtEdxDDxiuq5RPkAkHREsvYoBpW",
  "key31": "2xhorWtUWLbC2E15WRiqB8CPkhBAhcnf5jEcjNXNZM6QCJQ9FNabgQooPpTbqz1M1AWDKmKSCufdgK8KjYi63Nf",
  "key32": "45duS1pabBwPE2VyG6EBUcd9nwsuYLFDVJWqXDUQuFLxd8xZaRu3as999YtUSgmvRZfZ5Bk2TZx5iLvFtVG7ZtbC",
  "key33": "3PJTthvnLwSaXpyBMnLNrXLfg9FmybzvHfUh8wHKZdg6icvY9iNHUUxbx5BHk6GBa8vzF2HnestVCagqyYxjbVJT",
  "key34": "3CqdqHRHXt2FCRibQRke1hK7X2fN1eiGZVSSJB3NKqXoLtkzB6Vg2HYi5gusp8WQnVMnA1GxyNmhdRCusHTu7Euj",
  "key35": "QjVNdCWDSACLb1LdkvN6sqY1V5MYxzvC8sDzgBJ3rgtWVX2Zu8P6LhDSmTmQdVTTaevqtfd8bjL72sVY5nG9xEo",
  "key36": "2QcCWhNRdtDsuDzTRPfYP9gDmSScdXh5v8nxDxZJiPdmCcUDtP4e9uPRj67S25cESLFMTcB1QH2id2bTLS1h1rSV"
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
