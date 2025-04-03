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
    "3Bgf3VA3d1JRLRd3eneaZoKa7YZrR5DPyGDrUajpWkY3i7cUQxtozFrHySrvZ3hjeuibJg3tXDybpjh7PJ9AGuDV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZMYZjK78JtvXWGb4AqBTqBCFM4EVpUgTWoF5zKerZi2X9gUGjcAvVxWKeX8tBvexqxTjtn7vPbd1kqr5u4uGrZi",
  "key1": "5os1Rihk3BzfmYZp6M4QapzHBCmt8AwXGSeXapdSgMirHPr4KXw5nV1xmtZkPaoCJQt1BMCXdBAqKDJppkjLgSQL",
  "key2": "2pRrGVYye6hEUyEsNkQwuJeMGEmguXU9HB9HYdtxK3jypfyWxD4hukKRiBKU6BgMZGkrnrhauXa1v15t5GWtWLoo",
  "key3": "3X2jnX6yNUXVxEFsaM8XF8TX2dBuyG9oReJyLv9wjxLnzyAxRRuP7miRKGdDf2kwef28YN9VBXUS2fchHYmgnuW5",
  "key4": "49YZbFm5W9e3HBkCY7SvGwXp9chF9hieB2MyghnJEJGs79rLYHJPQGgneN8X746uavoomMS491ZohW5MpusqVw9e",
  "key5": "tfRKZGiURDejNiTLWrBXuKTGHF8ihMxVCM1CA7E7qpgsWb8JqLw8GBjTSbB6MJVG27BKPKoLfZtAkt56frUKWFg",
  "key6": "2FUK4c9n72W5a8m9P9R2tkuKRZgyZpPcWojDYcNDQmr9UfszybTe3fRRfTbtyWagK8iGU9JuQbPKKoYEtz3wrveA",
  "key7": "2e7Xj4WPDjZp96SipEGocS8qAMemkLUP61GNcZ3xgKikd2EvqmBxQftqg2XtG4es3r9jXumfy7FCzsEGCsXa414A",
  "key8": "2Tg1yiediao5w9mUJE8o2bWuD9bC9rMuneCu3ZjoQ59mkQbR7nA1xekHRHsmL78c65khNG944vMbJ9AxihbuwimU",
  "key9": "zjtmRvucnYXJjV8WheBLsvSPiutSSyq7xD9yukbNzHaD58c5p8dspXpoFp3sJg2LY5dhHVdX6cnjgN4px7ZeCnH",
  "key10": "3ahv1oUdH1gwxhVnsLST2q3YEXKJLeSkZYoCWKGKqwigdw5FevUpd1E1MeYpVxwfQsDzfh8U1Z9fiM2DqPqfPFeX",
  "key11": "eut82sBNuCiuAbhakW6fpAGXZbBvqgjaJ3VuioXCKF23V37rHhnwwbZWvfvmis8UTbn2WoGS1LAKT9DfXsYMoYh",
  "key12": "48jdQdExLsdtMozFjWdKTscpTmGpWFmaof2z3ap7PV8Cs2b94qAEtqk8SAcae5wbz7EGwBCjZU8bPGxyg8iZuv6R",
  "key13": "2ycSgdkZSZv6ra1Sij1V2mZATF1zbsbimR7dryrYq1fD9tBDLX2mvbhncziQRnVHRffnp52Q9X1mTenAFtwDQC4L",
  "key14": "54bHb2tq7xBhtUk5VkC8JorRA23HHW3HcR68qLe4by6TEP1SLrnxzcczhTRbq9gzwVCPF9XucS8oPgKYhwV64sf8",
  "key15": "2Xs5XQg55Lcy82CyPJTszkVT5m5DqK1tzRJphSZaGaeBEzh3v9y4kbqbfYUceYCsi1T2gDMSPFvnGugbbQeBycgt",
  "key16": "8gKKr7g3mHGu146HJsD4TuRppLwGTvGfz7DPByiWzQUU1RqxdijEPeQjj6uCE7v8JuxWRL2TyNTMRQF7rfUVpeW",
  "key17": "2mx3dK8HA1X22SyRgtc12ZuhviqGTN7k28tcajTTdvZXs8zD3GeJez2qrfMx1JV5bs8yYmQY9QnyzR9S4g73QmkE",
  "key18": "2db93XT59wXLPBkApGA1mhrSHSJqqQv5hXux53owWD8hwrihE888aJ4MF5UPtV6TUurox3HsB5p3gTDkNHXP67dm",
  "key19": "2z9YdTNRfa2TkwefNDMCrHbumQiTXjCu6pk6emiZ4P3JDNAFgcZBbUqdrDqeQTL7Ct9RmwHjGq7tiRvyS2fa3cCn",
  "key20": "4ZP5ptxTX1FBQD6mzHX3GGZQtAMR3ZVTkmdCBZ4RaxzwiM4fZ33d9Yo9C5eMP1Q6gVFDFx4KgkH1KtKSmZLfT9ZE",
  "key21": "3PdeNKSXm4iAhG7nsheRKpJDKRBh8SQWJQZJHqGS25faSLnavZakkPuBRsXQAwJMuxzogL53H7okuovnE8Av9w1G",
  "key22": "28rfMTQowJd99M17Y3Pe5MEE89eudyTuR7VvM8MozMeUsXNuSG3B4U2h6iEtvxK7S8d7cmyKM8eja8J4XhhoV6UH",
  "key23": "ejxyacYRD5FSP4wCfyY7sSciJEZP6fub3brwHwhWEogiu7c9SQkAx2ApRLCJRub7NEoz49FfCNNQRbeaokQFMDH",
  "key24": "4b6fSzNVJ2seyorsPcLLc4cQnfJa4KD5BJwVxP42KvK6qXqSJhgFMMt16qpNdeDngS3R8ADrDvQmwHoxcJ4ZH44k",
  "key25": "66A2nyZMkLPVXHhUMY1T568AgEWwvAK2hKgZpPfuEcf6MBrPxktnh4CmAE1V8T3JCaLzDyNh89LQTcyY8uvW5zjk",
  "key26": "5vxHYCaxqHLpJksVxQ68KMPse4j9ebSsLm1yH3Xqa3gn1hikZS8aszdWLmNTN2nLBNUEfqYq5qLsZ9QtgxzKZazR",
  "key27": "5fruV2jk9ctnAbFyqhodTi1AAr4tvoDsn3q2Tnnccdvrk29UvryYkBKoNt2gWNpGLuAzDkBwaajMDRKJ4DzsHcBu",
  "key28": "BMwYw1gZLxbHCsnFEDR98UqykYRmHxnqQt6nqMMD1ZGZE2zN5n4XUS48rU7T9zqeBUkkgSBvJ2ZTDqQDsxYv95e",
  "key29": "4ZgXkagYGRgucuZYzqBu579QsaNukVgKWDzFozvUvTMXxpV7oXQVf7iMS2Kjbp4kiGKjEHpQKwRPPz7SERKC5Nj1",
  "key30": "2k5hBF1pNfZWDsRRHn8qrVSvCFfuCm2RFU57fMd1FALC7Sqvc852zkaDAbViwB2R4f925dLSQGw3GmcaKrZRguxw",
  "key31": "46a8HGKcSPmJn3VAPxR3HL4d7FoqJKsXgd9CtNfdB4ko5GK2nqLpjhneejYRRE4x2nA6VsYHXj1eKFHVnmvJ5YHa",
  "key32": "4yaPKCrK2pHkJTEs4nG8n3MhSnnvj8yZ7xpKGQnqxXi8oJZwXRVJ45PJA3pzarhQo5Rf67upVs29pDqU8vwDqyVb",
  "key33": "44sxV8d18pSkrY3HFeT7JSTwuzJs8fG9PC71KgqAih67f96nMT1xMezf9xXQjoQrr3d8rJ2C1ZF1Tm82jkMKXjV",
  "key34": "4Y7chk66ATiX4jEdU6mri8RZtKMeNP9B18oz1KeaNRJBcsJFn2xfMsdQQziDg1JpKM8KNtvzBWAt8fyDxFaetUDA",
  "key35": "2tduusS3VgquxrC2PF5HRvNEJt94XZ6gTCiSNTmUBTezCkit2C3trHbNdkbR8Wpb3ZMkwtH3Us3q352XK1Z74xEX",
  "key36": "3SqMrpvTKKLkj5wXR65UoXdFjRfyzxWUsqms61ejLpEemxUUWNV15YRyoR9N52enhj5gvoHDTaFkMZWc4ALum2yp",
  "key37": "4cJqtNDNbg7YWCtmkfMooNL1WAPdD77c6WbvRcFGZaeV2tzF1MUaiSgA9bVT7TFRKyzJXMhY86DPPbxYoJSMr57A",
  "key38": "3ubjmkeTYGXFvpjy6to5zBnVPKpT9ecub2mM7jYPKJLcVZbn4xhMx6mFYXBXCPyU4H1jJES5DvDdwQtsVyLMzjnb",
  "key39": "3o2UHaCCeQ4iNS1p9qFNmeBetKrMo3acLXa8vQpD5EeivvZA7Q6CxZtsvywf9AmeEkxUCmbVihnFYSMR2RM7Fy8x",
  "key40": "2jfiSmpxE72dpq4EVsky2d579onqz6q9eXkn7xaak9wcPkav899AYwBhrJkLTSrNmn8DVyNJrNKJeBbLo621f3UD"
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
