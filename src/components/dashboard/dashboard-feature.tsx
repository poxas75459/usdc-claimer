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
    "2g5EzVNCJjRebRmgiQnhx52wdzKSrhdqMLaMih7erohRDsXowMqrwiRVfYEnE8UngoBXR9LtLoeP8kBSPnWM5YMm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YR9pk3yBSLoX4T3Q8LTL9Fdoob8vcvwoLSDrZKtKfZSNBZEfSQAQGQsW2qkgFxjpL28KDPzRwxQp1YfNtWhZ2Xk",
  "key1": "TwuNJnf1rtjqh6iwRx1iksoP46hQy6ZhqAV4HYJZ9tEAfTZAA2KMmaTHW49QZobdghga9x8LF61toCYisVL4MAG",
  "key2": "54qbFe69ecbeSEDe4HEjCCSoqW3cZpxLvWQGgTCxvomAnaJstJs98SM5sopxenYPzmP39ChnykKuMqPSPziSGAjC",
  "key3": "246Ba9MdVakPpDDnD1apgRUehamfw4YmfCweiFEyVHe8LS3tLnFod1fgrKKygyZuYetN6nmnFxyGtBwy29iSkSf5",
  "key4": "3Cq4C6Vo6LWbPHE3bu77VkPykwP39BhuHZAj2j4SR7LZiCK7BzcZRWSrEZJ9nhxEdy1ohp7zFzbkyk3ghuYXAKRx",
  "key5": "3SpARW5AL7h8JSAGqZsaCghvVongDVhcq6voWrZwaKCo8t9T1he58s2PJLCAFA4Zk5hiifZUGkhfDmkic4AL7Peo",
  "key6": "5VQm48grYox2B5Zzmu4t3HcmSrSQqLJDHhzjCtLuVgyYiy1rFy4wZMbBDaScLYuHgyj9wscgvUa97qHAr2QBPdVh",
  "key7": "n5W9anxYqYqyqKSzia45HcD8nQ8EMcebbqRpRpXVDKHo33UWtegTC1jaNfbYvYRAUvXHSEUgEa8EhBseATCgTih",
  "key8": "3JLp6jihJuVvH5Lj6agu6SPoBviq3Gox23oiZZ2SFbQx6ptij9s6jBYmq2hXHQ2RNectYmdPvfc2pKkPPB4Hriep",
  "key9": "4K51oFpd46n3z3nRGsWuaegYUp5XdxcYZWwBBWNSfhSdw49Yj78LdCDu7UG7iBhxrFr33yFcc7jvSF5TKf3G7QLZ",
  "key10": "5FqjuV37fr9JhRNsi4w3iMcybsU35puQuLQB5W1AamDBnN2bsjzggEoeNedn3UqYMxfMeZFn1itBzfCWJq8jio6V",
  "key11": "3ZXQSJhT3X9AZdLiscmuoj6JmvCTCWozDS8aGfsC5vMEJeYA6hKJeZywS6QRRTKP8XZUuSQq7yCwnBaQZmGsp5ow",
  "key12": "5nDhdVHkLHpD4mFd5dxN4PdHVNTPv6tB7WjQh3DBL2zoiGkX4rH58ezr8t6CR4GbzH9qBMyj3ZaeZnUgGJ6t4dyb",
  "key13": "39MmpSsEkMBvMW2BtFTNP6jjMvNpdPxcuHXVtcPrY6tZE7RQPor2KVRKMUKysZP4EMKDrvYfNRgj1fTg7fsCUujZ",
  "key14": "4xKSqVcgB4cQJP5TKGLLo3xwKQCGdRiatrgUYKrTDS86b4UYSYWRAG4haGzRbUuNEoamr24mtpBeHkZFDZpCHgTs",
  "key15": "3dWvPZuiUNEXUDNGJJD2p1TdA7NJeKoPMszRYsFEDjE8MGwGczb1Hd6rd68tY5kQZ843HtUKyFzTooYjAS683Vvc",
  "key16": "4HzUszaoRbDT8RxiWrxwQ31fMA8ZxzkYW4had3ctCfgzYZosUrxBm7S7kw1ewgxGHWQxARaqSWSUFJPKfyGkNDB4",
  "key17": "2rMSznPGgKspTeoheUQxkkQp24hNepwPCFCHdCbAX1PFoLE42nMMDF4fRgqPSzFjhLK8nDStvGufcNgcu6FdaMTU",
  "key18": "3av6k19M7QyexFpEeQNf5HD81PqSNMBRS8Q1sDtyymC9rS7hPotecZs94umFHaPvezt1QDX2Qi5fzExHwsbvjYtE",
  "key19": "5TRrbGgKyiV3Lu7R8HdMPb2huAAzx4FRUgPoMFH81AWdr3H6zat6veitBBqfs5cQ4HcTj37E4ESFfjb6yAy4HYmM",
  "key20": "31QN2Kp2YUkm2tGCJb6HSYuqXfWFRJGoNe8U8hPd9hz2v14w3PVhm8Aj9yxYauAJ8RC7jDGT3sn3ahuPxX2Q84Ph",
  "key21": "2wBRFqtFHCDoYD664hq4H3xH4vdaeZww1Hs927PEjk9SQbirQjv7KkPgoUsxNyp1XLGwMaN8osvoFGXw3nK7jM9k",
  "key22": "xpF85hbFtxw6oqKXTpfxEcSaoQyJN9gQV3Eidt7kjP5WAHzdJf1FfDerSLeM44XMJ9pMJUgVRUfcMi8xNQGeVFq",
  "key23": "5wndcRr491cGURuD4R5j2jWy161P1YnnBiQS86TC1y2sEtdpFF5aJ3THio13rENKpHH6n5SKkj2y1PgWS1j4xVDp",
  "key24": "NY3cwMYCYpRjkmthUjShamcUgXRabkjDah1LKsiTifa2jAnZhB7f6GsvWXKAFE1Ac2acayXS2xX3mWQVcdsYbZT",
  "key25": "2YdRQ9Vx8cWdx8DkEsbiCRNjqjkNsVGj7sZy8dS96U5u7k5cRwXqLb7ASVDpXbVTSpAaed3bqJotxjgeFM2ioB1a",
  "key26": "5WLUGweQpGjLCv9se8gnSy91kbstzwXAjykHKYoEMZQWuV4sDmsNehoCkLNb87MzjjAhKoRwCznutHkkDh8i98tT",
  "key27": "2JzBMyCZVpeMAgLW5kn82V4GvTbZxcKPZPBbRtrazzQU4SdRCrXwSDvGtwBuEQfsNza1HANxFuzPDn65pbAbbqCT",
  "key28": "4AAXHffgb62p6MM68Z9bBbXxPaCmLRWTqy342KPEjywgKguwoZh8v1fFbSWdQ25Cdhhk1KAKHxVJLScbRHXXXnDo",
  "key29": "5Dv8egKqV3F3uztfaomgcHZCYsaxq5VsGGHGckv4BKiPRaCisLf5aBiRCxe5QNRiL8rkUDtNPfiPaBFJH3uuy14c",
  "key30": "4cPsKpypUJ4ys1FjQUnregRG4ZpNDVkruPDnPbwaSZGi7PevS3tHXPySSdSThhfpxPojQmd8asuL8x319swZU15W",
  "key31": "5ZUApp3AXpEDJi8EDrQUnSQWoWAHizYqmmiG7vWRtWd6Lcr52439B3rWwQzrHkgaFtdegVYtw7LeN8XrNoy3WrcR",
  "key32": "2abLnVJ3eb4CLnQrDELMEUtgvP7ogo9PHvspZRzfSeEeXNsExT2cDM9xLy7yT7pYKo7VM2KZimas95tQcTPhCV2Z",
  "key33": "x3AnjuvpP5usDcvmoKuVnU9xD7F65D7sw7JWNjiFXtpzzikgpe1R1xUH3APaTHZVczTekUF1E9mnvsyfN24bKqe",
  "key34": "4FKzgLS1iQwC5ddhY7FLsoSdzAA3o3dPGcR4zSGev4Sesh57AuK1ggLE92UhB4b3aDpifyjCPPmnWHpEosHdQhDc",
  "key35": "4iVFLLPyfZzFPM8e23iGH6hJjfbeB7chp7tHxfXkjLCURkoJj3R92tsEsfD6NYrjG5QGucNJW28ZEL6DYbc1weoG",
  "key36": "2AXPW8RwwBGyARYGbvHt8SFwEffdxGUhYpnFWqWYnsffjenakAjAQTnbVBg3Mqed6iHMUZWKQmaNvKM93Yhcytrd",
  "key37": "3S5iLF69y3QfA3jQFhD22Fmq94RxeTDHnUsa331q6yis1oHmgYKQoBNvPtq3iVV2e3oAFEsAi96pDShDfZ8DtH5R",
  "key38": "2wxAh1jEFpk5jHs9ycQbah3BW8UWyYzdre1Tarr7528d8mWhvTe1wcD6bLhmUyw6wThihosNwJ66Cwfk9CLHA5hG",
  "key39": "21KhY8fTfK8wyAQpxzoP2ZedVbTCJjHDMoFXGk9KdyM7jwZixFqwXMu2Sa1hpPXQpEX9tT7yV25bbPKJmVC5b4yi",
  "key40": "CnSqFjuuB4T1RxaaakkNTcT7vSrRw9JBjYzxkb9kfxPwqvqui6wY8ewgh7i4EENJ6ndhmEu2jYL6zSvD1USawdP",
  "key41": "9JAwiLqAd41evvoYCy2wwQxwEqHWqcLVxTo4SivkUkKHCbyniVDAY5ALdKMnEJKKUrrUjm4fb5xXoCGB7cAZpxC",
  "key42": "3QjxCk42qThRQBvDJyak7zazCEQYJtGNzVnrf8KonNuFTxSsHCNKqLdhXLtVid63izxseKZ9qzdULeQhiuCSH8UF",
  "key43": "36GDuyB7rFg2Jo6RaUXMyXqLD5PNjaCuRWBLBQSZS8uj9W3jGbNKU1gMQkbVPP91RGJA67P8yPH9FeP8CqwfD5Lp",
  "key44": "3YCrG1RchFYUPhZEnZ2HKJsU9doBDHu7nkkHHb2EStwVGYRRfCd1eT3DCR5FkJ2D1zhvjeQKXy6jLpmGchh25VXs",
  "key45": "qujqdBRDTMt6WCZSQBfg1w6vARLce8VewdN97gt3aPK3S7YJShhieeybBJDg3Sea8iFirw8znQVZ13uaLVXsGjK"
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
