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
    "3PFbpESpKfKKcrUz4ZDkd7EF6xT5qruabFRWGFwmgD6VmbNFdfUcDbt4oqKQVB4kgjxhLUYZuxfgEYVt2wbAyhEh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mthS3LAZo7wipPqazEbqZTdkcyX9mpkwuNVsDAT6TwtYHWrQ1uSAqjCF5G9BAAmVUNiirYzwdsM1fZXC5zs3Kgr",
  "key1": "2L2rBjhgcVKcJNdLNLAA29ELaobHHwHhkrztzC6vyAsU3E8ksrgcLvQR1u8m8Vd1q59yuCHidVLbZuVjgjRycnPQ",
  "key2": "3vyCjrvUQoJc4reJSAjbPEor4MExQR7GLeb3QWG8LcmUTHospiCHvVGUZr89ujUxxB5nvftyeLFSFS3G3piEUjXv",
  "key3": "3Fut1N7mpwh9JHs8jEEQgivEAdFCdph227ptySYP5maW7MUkdWQynTcdZr2kYQrptLcE45PHhbRhAiV21gs2GQ3t",
  "key4": "63CKcboHjpuFzQZH9aPCBnmHTuyUGkrxauJMyhfT4ZMp8yr5YQcDja4nhGmYipZkGGwXfhFtXoUrxDzNpxBAeUr7",
  "key5": "4ivoJ6smJXtg8bnATYdGuUwHMRECGfixmPZEydDh98Lq5VEMhXRzSK9Giz63S811xpdhxj9vkceCvP9QyQHpDg6E",
  "key6": "4cEoTmamtWNuJLZ5KHsqrgwSxG6SSp9AwNJStAdRGHBeG5ppaMBRGckU9rvMRYnSznhSgjvkkVQb92EULyPsF4JC",
  "key7": "3uiD7MHmQu1BRkK6QMLDZ9QwJMbouZro16SqcYpZ3gV9HBuYgn2MenoaZh4bHEYESAsrHykUubNrNR4RiEbM878p",
  "key8": "YVUgmbUiSff4pQsdtC4s7woAYAUWEMNjhFbRaadyVfh34kYr7STE9nhAvGkthUgRjkLbHiNhNMrqqsRaN6Avj1G",
  "key9": "oQyGTD4F1MurTDB65Y23GMhUm47nzKp5Hc8phrYZRw16DupqiirP5vwHeJgsLdFNuDMiTTtL7dMTYn32i3WGnG4",
  "key10": "4aNCDeVg1JAsEFsgQ5jkeoXcrN9o818FgrtfitSzkJT3QZDfESTHcU5fhp2R7P3anCGDCA5BmPmNC11J5jbfoa46",
  "key11": "NeBVXDAb5xEEQEfAxdhEvWTpUBvy2KZYaCR6LjNgXM7eGeZhDs3fBb3KvpVV3TB7Pzs826h4itMYLnKZz88QbRv",
  "key12": "2FgJkgtKzyL8EaZUYmCdhf1eQt9EzqYfHoZk8ht61oBExH4oCMSYpC4WfeXu9G4yKSNSkm2YQtxB4H9yxGid4ezy",
  "key13": "43vfbVqJsKMXaKz1qhbAXqfwMyYEPJJkWRQ1aBVw7Ha5fnUp1Ue89tT2cjCS7u7DG9KZpyx1pgHnPjB8qQxV2fXk",
  "key14": "4QBpEzKSK14vkYnwpQCLqmDFg96dDbLzXWZyZFz3LWL2GF3aua1uRsezgJgzKY1H71shBf4ALXN2pimmuGhKpcF8",
  "key15": "2vjTz1AoJ7rZhkGXWvjhgRG6MwBrVZ74VquMgnzv45fsS28cuPZ5XQpgkmQoeBvAAx6h36PdWfDg57C1FEyxhgEr",
  "key16": "4ZspqadM1UXUihR9SDSSqyaD1v62bckx7R59WAxBJyBL21rcgHVwBNefNhfydqypCa7fFEskcdhExQmEqLdq872v",
  "key17": "27kYVhKAh3SNhQys42nuAjomfL2YKwRx1LjDoQFjEr7d3QGb3dHx8zpSXqtNHs8MHVENSnHjTGx3WBi7Rzf2A1w5",
  "key18": "4eTBsFMDsXAVD71N2F3zTaZPpNUKYGgJC5awKTvj3VJBFoyCht1cpGtqak8qBCwZppyT6oHG2PN9Ff6QLSYjdA7Q",
  "key19": "2aLiUL5Gp9w6UVgr988FVFUJ7cgy2C43WtzhLtkjxDnhBFHFpwu39nvQ6twDdD64mRXM9dE6Xx7gGYFNk4kAJLJv",
  "key20": "4uUCd9LUKZX931SGakduskCXL4EMFZg6Ti7QJYdm7gV2Trse4pNfyYSSvEe9GgegVRPm4VaUsGr57FfJaHodu8bh",
  "key21": "J63gkB76x2PT9VmXUvEwYMAwf5X3GJ3ejxw9oXVnSGq6YzwpLtaxokkKGdyR2sGirKMeGwZfppLjsy3cY6zGysd",
  "key22": "5A9B2wnCpEvKP9j8U3o3aZLPon4o6n89VYntsvzqvAhUuq4cbhTQgHSbpsYuwwjFH7C1GfcmkJukUsZrPQfXLjSS",
  "key23": "4JHDoinEGWpCs84owFW9UzeUpKBcWhVigJGwEmDzSKT9CFy8gSvQNQeb2GJpsRpbQXoemMA4s6GNwhNkD9PNhfMm",
  "key24": "4QbuA1C6mBPbJiobpyuZcWgN17dGyNPrg8ebmtpdgfKExJHGe3Wsd2gRv6ZPjZTpkuCPEDjdkx1dFv2ecfwExegx",
  "key25": "54gZXweYbfZ1PYwqeJofPTiLiW4j4moc7A5AkkefYpck6sJKnnBMxWPhwC952SZnz8JgRTbkdU6ySHvRTuTqP7QD",
  "key26": "3oT5nbY6HV578aFgePfcpq16Y33Jd114td1FwfiDajnriCFW2UzHGGrjw8cwBood3DumZsB5P6BAVQezxcThayh3",
  "key27": "VqAxcXMrRJezMp2oamji5tGV847gjD2huPdmgNDQJd1EqpKMREZDY2mUjtdE5QPXNBucL4xzoLQ1o2CvGXcrr57",
  "key28": "4QqAMy5yT3z2dz6Hbi8ig87aw4T3TmdfBdCSsw2uW5JCMox96Si5sNNfYyXNRfv8hScP3M9qSS4pjUMoLTsNaY5S",
  "key29": "5K6soKtCj8Bg2rpJanJ3JumFk4oZuac5YSBDerHmMfTNkn9S4UsbjALLUNteVhc6UsRryfLcrGencsMZ7CAZ2oeY",
  "key30": "3UhE1mKxz9pW6PhdM3DZm3C4pb4V1FKukxhSrcJa46DP5Y4EEwJJyRDw2xJvVCcMqmgabE1hJbB2akCydcjk889g",
  "key31": "27sZUiCjjbt5hi5snzFvSotXLApqTYV77A7KuJzxEAaCuQ18X28Re1EMXsGdzCtY9UbamX6aSrFNHLXdHsRQ2xFV",
  "key32": "56aGPFjEf6dkY78iLA7a8FuHnHrBavr59z8jyJD1w6tWMpc4WGApVfaRDWuMi7s3ZUYJdduymhHEEG9wNSerieJ8",
  "key33": "5WGnWzLvwjUefiCN6PrcgKCi7cXNEGRe8C8WH5ngum31qx4fxpuwvuvtPHp22P2BFgFFUPv1Z5gvmc7r2iRTJ7iU",
  "key34": "F8ahpWDmYMHd4g4uhj1wtzUdH4RLig1dfh3jmaMBMtMtoDhgoLn41Py4tL7qTm4R6L1GqdG4TRjkLbhoZeCexZ5",
  "key35": "3zUNmuJo7KYWbgBBvfHW3HAYXdct8htBrEdrF5Qqzs8afGpCHqSf52ruh3K47CvGXvhbpst5CUHHhuQErFF6AkhT",
  "key36": "4Cyfin49eJTxbRS5gLYK3ccYYCd9fws79rR9WFqmf4Wef1fqNNagxxPpnbT3Cn2SBS2ce7uTMq9PddhfrvaSf4Fv",
  "key37": "3369SDTpYRmajbzMBQGu6vddgrNzzryhbQFPdEPQcbfcCmvHP3gcE8fF2GAdeZV4vzcVw6ABMxCMUhEd98uSKTVa",
  "key38": "5MwM3qrge5vgAKEaZUxYTZ6ruSFZacNCBh6zhp9jDdDeJc9MSRqVkZkbZEvACtYVJLkHNWChJjt4wbxefFS6BM6M",
  "key39": "4537A97JGGsZLUcBWoFR858tSFJSZ5gDnPJXkiL2HYw5KPPs73zZQowUDyYNajEyiPj2mEjZnMzQaUut3jR3oqcs",
  "key40": "3jpS5cpQSLrcN5uKD2fq2k5dNJ92dNdRrdAbe9SMtYp6dc9Tb7QXgpLR1eRrTFUT7z1hkuBbJpkWAp4u9358Bs5H",
  "key41": "4RVoasVY4oyTTt1eSH7rmkfGoND22Mpw85qhHYiKyqBXTAnE4fr4CNf574v5C86X2uGJQzUDNoeyF5ADj9pDXLxq",
  "key42": "ry7mxcp88KXtptC2jxHj5sPTKqdjcrg65uQNRBfXwUcijy7yP1xUNmnitVs6nyF5R4h1fCqDHbpuwsDeZxmMQXo",
  "key43": "2sekDEUjpsppt7igutjf5WFZSThGR5bJJQnd4dmtCrxyGK6YAVUA6Z6F1idK2NBN1PwEnxV9P8J2jbwKuUbMkxWr",
  "key44": "4H1P1Hjqn1VYmUs59rJhh3vwKYkakxSPkdMEwSawnTzvMUu6mFfW148LDP7KP5qvKa8JprQJY23AhgiFm4V2itci"
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
