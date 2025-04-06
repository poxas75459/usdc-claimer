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
    "PvVEm18BMR8GCd7KAFLQxfMuqGVULR3KawJqrXcvNCZUqYzfBtn9r9j6vDzCqsttcUyTUamrNDftvbWczyaShW6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LV4Lf4NGu6F7wVFKW1eZt1rDBwBPk7EMMmB98cjhDXvroqXRjztVGhb5sojSPQrysRBkofagjtBb7KQrzKQoBWF",
  "key1": "2TUt5rJSy3JDAbmWvoKBbmSF4hembfwTZKuC1oWh1tc8gjVs1wYUk8BDLRoVBk3m6cubWHjDh2P3Eq2w59Jj3bqy",
  "key2": "3kW8WhPUfuWkhmC1td9rVHvan8yKQuDXvWnCk7ngyCDisb2wMEQgY4iX55qFrmVu6CKjU1nhSrfJoMdTk1CDsfkP",
  "key3": "3ZxCqeRspZ8GuZX2pB8F3HSERDGnGtRf9yh1bEtTWo6xEodacCugA96uXgNDS4NhSvDPNHCuhkdPxnCN9DMkEshR",
  "key4": "2493rWV9R3P798qFSZw8pbrBJvsBLugMrhdtK37D3UuejNNe6itrcxdENMfTV7sRKc5kpec45Qw9dfWqRhydCYgY",
  "key5": "23kFsrw1UBhWsPAoRh1D6TJ7ktmTeGdsRHZUpPtUJuPzt1Udyvm2g1K9rBmABmSu6tAVxy2R4f6A6gUGHfWMEgJc",
  "key6": "4vGxRZVkeyMwZ7vW3Hwp2v5Y75TabLkDcXSvshbRjGSZXJYYy3MiypbAYaqMsn8CkkCXpQxDoGDTBehuKATqhcd8",
  "key7": "2jebo3ZryLJs5xM4d8z3uzY7j4iZDbUu8bEkKLMa3snRjETKSnAGu1KitY6EUmfxnRsQgQVA5iG2pZDy4eAKZa1n",
  "key8": "oYRwws1gEYV27bGGSYV1C5x5h6QLeLX153xn15XKstyq4pwpo4tZqAtT2NtWBeNs1Qqjm5oi3jh4cq98xE4yMdF",
  "key9": "4xmohdCfShD2PEiQZyCKEi3rsbyaDdVn3g64XB9r6dNCa8GQnYEeQMNUY1eck6LjmgjqmJ69pLhdJoqFDsRMW87j",
  "key10": "5hiMPHTFB6N9SUNAKsEtUFY1cp3TcR8kp4Lzr9XPraBifxUHiSYHYxjjC7y766YvwYfdKRs3JGqdmdqypkFKrMJs",
  "key11": "GxJBkZ6iEqiAXGWAmfF59CHWzKhvRuX3J3BJEsPormWMA7VrFFpPbUT4uKGPE24Nzw8GGo82RUAGrUSXQRxURBG",
  "key12": "AHyHHRYvxDH2JUJjJA4Swg4EhjXvoYo8hJqiT11eFgW6AwvJbGaBkKtehQpq9WbLMmQRe2Gxcpmco7x5h7Ky7Y7",
  "key13": "4PCqrn1iiXXVMViasFwKQ9xXP1GS7faefTiTXXgfWU43a8Y6BFzcPFAkug3moEGYyxnyZPZTGXDfsBgVZyBfQrvu",
  "key14": "2G3hTurHLYDNAWhrUX4BrNnyVogEKhdQ1N62FryYw9WXrPLrxMbZysrt2WUkVrn4XvSJAFK4doqgmAtpdFY7Emxs",
  "key15": "xNdDafgn2c8rb44NRuZnYiycTRH8azgWrpwV7jaZS3AVMbqshfRJYg7b1D2aqTKkVHzRSJ26MvGMcDJybsji7Ep",
  "key16": "2K3Q9ta7fNpG14bDrPAUn1LUThTYaFW4X83xCb2U5KCMbDTzYM84J3S7N5xaC4VhtBKoLqtwr87cNZsBhscKuzUF",
  "key17": "5p8BoWVk2Kds5CG2Ssrsv2QVs28jX4qdaU4sW9SNP4VZSV54Dn1UfLFtM1WVBRdbLXYqxVsakVDSnBKPzCChjF8D",
  "key18": "4JHtqp1QW4LDzFRRVEdqz67uzTamMfHLAeG19tW3nnM9pxZrZDyXpXaa2pVw4w8n143ACP2f8S4b7n6PSUtGqbv2",
  "key19": "4HmWkTuHLV4GvZzQpK3D83to1xw7nPVsReCKDGNAqyrY4wSVfwxa8dC5XsX2hsMGK7fyuPreSc4Hwya2BUD9caxB",
  "key20": "2SHm9dXm2BqLmFMk57yLHUvH43BmSLo75sHZPdrky1pSj8JJMBS81RtrhthaHhD9Huhgyq6YzsbKr5SzbGXPPAez",
  "key21": "5W94b7YnXL1TxmCEbrh69RYjADZ3sbVJrFJGzHQUD52h2zMMwAKRf8rSWveveRPB2Kbjg6DvRZ3bJygbCpsgFgLi",
  "key22": "2AqUZ9KREgi6s3ZdN4Sg4ZxUGeaj3jJRZAMvfevSVsXdtUTYbRX992Nf7mqZZVAnKz5nk3a9h3QpUy32btjyshra",
  "key23": "4iaTiLePNMjNGDrkpNpYCcyxnSVyYfHcNSpHrNRPmpCE84NckDuGc8SNjkQXdCt8pQjocw4s3Rhntnkreahgyk2G",
  "key24": "5khC3N81Tid6BCjPPtK7cyiJ3tgo4ep3e862Ake59E7EhzUp56rDUZcSajiJADBcmtERyMat58fHhCg2dBUzSaN7",
  "key25": "4MrFNPCBcytz9sk8XKYnHVMEb7iBKZq5cwq2Z7GcM1HE4cm33NtEWzBpBKBzb1nFmoTXfxwXvRQzsrFu2yvhiNrg",
  "key26": "3eH8Wqv66kHrV2BZpeqyL1HiP51ne2BoqFYP4QTBbtJyoUoA9T2LToD6E51RUe2C8y6pDrLSMBd2pmRA7xqFrNfs",
  "key27": "hUoS4S6nGtRGyGytn6NwojrpscUF1BLBxe6sDdxpMgcNTpT4CXD9RWzbZFSRNyniQmpvTRSYgm5SjrWtSmkEGhL",
  "key28": "9S9ovz6vL8p8yVPJ299Y62T7XuPPEmcWsuEdha1qrzAMusGs3Yuf29UtzabnyFLRfNeLYFEY2q6stbC84R5WsUH",
  "key29": "2oGjcXj2tNECsVVUpBjoRGAPcDKZ2hsChcEWRurMVZr88RZZ8AXB5FcrmaxsgyTALXFJZPada4PZmUAhKgbNtwyG",
  "key30": "4wC5gyPXdeAwQZRAbKviSYK46WTBQ5AwzoXnzRK848G99WqBXsTLpC6HegDnEaHWoYpQoD7Lt4QqyUkWxuHTgyBN",
  "key31": "5fBghycJwAjbKRh4yFZBtwB88VvoFDcgwMmJAj11V4ca66fFij98Xro4s6zrYagmoNqXWvXTBsSNbUAuKm1EwC6x",
  "key32": "2KytsrKPjBzJeJRu7obwb4PoTM2hYe2RqaMXrgua5vc3CeA14rfYMF5xziC4RAgQeQ7RkWhytGbrFntYcR8bBbGp",
  "key33": "zeUMHPiok33gYm6SX136FpiXdtPTxszGU1iWQx1TqQqbdm5UMDTFXi389D1rtJQ4TBbHorZFjVLNRqRCbGBirDh",
  "key34": "xagva94hggDAu3WjUtRnnFN58Co8mUeijHMZuw94RwHrXtvZKQQiAztYea1LXQ8tyYMPz5sCrzuPzPjpsDnGH9J",
  "key35": "4jxiPLeGqYJ7gMRMmvfJDgdpQgp5vdkmxg3zpnvPR4fFw3TjahQSRULKYQTsWMijj7dN76MFfqVB9epPLVdbYkmN",
  "key36": "3NC8ZiRkhGqGJVZxk4XxcGcauaFrZb2CmXbryg3gCJ3N23qWR8am1bfx3YuqFU6g9cB2A7oLkLrrAd5cjjFUzmR5",
  "key37": "2FeRti1R1k8npYbazFHv1UmBrWwKmJwT7wmH53piAdSD3uo3Qs5obzRhEvu8f899FCjkZAoEkd6f8dNfguM1i5T3",
  "key38": "4pGHW5db9fANQ1KgXNQaoqs4TkfgB6LkR84tFWhVSsV6zUGAX5ueuZnwH3EmUn6xe3wg3BDAexhAvwy73uNNZ5WV",
  "key39": "5myTmjnd7Lk2wf4nRNhjpt7b2xsnNFk1WAKbXZm9xfjxMe8b48WzQ6NL4Yf2TNwt74WJefp84gbKufvydq6ifYRj",
  "key40": "f6mb1sjZEfzxoFdqodjHgwes3BqSaJTWAdm32nReT1r3rRQB3HzBBWkK5DBngdCJkPVk4GbCYDzxvyDHeXCZYB5",
  "key41": "6692RtfDai4r2PTjrnMXGKDG9YZNkq6vFbVoV9gdtrchmr1rC9RR6AfRGvKi7CTUToM1Hys4XjNpfuYqMm8wMf7d",
  "key42": "4LFhFoioa9WPLimAurUspLVD7W1BBnJnncLsHRJWa4zPPAZ5xpmh46QFhjV6Uadha5UZ4svAsjU5La2TdJ21KGHK",
  "key43": "4GRGENgercaCV8SSScbujA9Fi6YqXkf1gruKw8wVU6oUiBkq6vWKNKkWRALVaxEdmMqo6xpD4kVeL3eAUporZQBX",
  "key44": "K9HMBnfyVy36qe2cq5vtVWFFwwkr2WomHUKa9bUuhBx9u8XkzVGFWURwPmkYRfeQ3KDibJhrfgCBddiUfxVtF6E",
  "key45": "31j2EDWBPvUwUDDmoAex5r875XuMXDSEGhWbkhJWBq4zxX4PEo9stHNSc6a7RFh1Ryyu6YFP3jSwi1A3bB82ZWQP",
  "key46": "4kwnRRJQqNHKNjvhn4Jb7EdXZTBg6agPrGKKXLP6G78FxE58r8hPzwridfBATBDARWavKeeJ9ba3AtxfgtsCy8ks",
  "key47": "VBcvQP5AGpNa4UxvZNFQcmDLH6pSoZy7E2RZX4L7mJtyTDNiG9pLv4GcDjPhcYgcKpX2mk8MmTgV8aaocvUsrkW",
  "key48": "3aaXsAw6zLu2YrYtkXUts1ZrfEiaV3eSTqh8YY3xrsgmqBQ2R6tP6zPsiXjRuRKNxsxaXWF5MTrtaP2rBgWNvaVV",
  "key49": "3jnYESWQH3Qpp9t57fYdbHN4G3481teih4BrwRP1FAis9ekTUjw7CctXhd6KXp3LFKmJm5kjJuFKLCjXRRTw5MTf"
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
