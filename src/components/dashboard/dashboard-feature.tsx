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
    "54HTzfFz43hmsDFMxRJFZxUMJUwGa1xkNz4YU6yPXQGKQdv2UGJsKcvDyivwNGf19LNhmxMyxrQgKG9WNmEpRh5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZbYLQgZDRfvUdZ7m5sKkksygijfww64xPEATXQVexPDrsKVcSMMFEtMFK4VarMsRfKo3Y94BUuQrT4LVJ8iKW3X",
  "key1": "67W6KMaD7EkLF5qWZimsfuwwyEZeb7m5a5fyYCBCNfMW5WtRebkvmoFhEbjLr6TvYCJHSFpWfNRzAZXu2CLhXp2K",
  "key2": "4rxnGBD1sGxJiT2QfNNiCUR1FsumKKiSvPPi3VeWdXoJGNwKMjzNje1NYSXEBiK9hcmew9KGhL1rnV3nCU5JgAFu",
  "key3": "2Tzqc8Dexzf8gN7GsHkwteBGXTPMT4C3z4VK64mrTvmhpCeGrRfLjL4ZADvNbpYqbUj3SjwtbmgcWCjCFY9v6tFW",
  "key4": "3AqR9g76y8tnrta3ZtTwxuEaj1JJqEej4KHjn91dMTWqv7z8uxrZCkwgMkXRgNFjHkxDa3pcfnswDazUNazZLvCp",
  "key5": "d6xybd7ASD9Fo2W7T8hcS8TwGrqw1DHN7fVex81UJrnHiZTJofMg6xcqaLDaqBTm7u7cNbiVay6Ufc7eVpt3FBp",
  "key6": "mrkARD3TktDeRwFNbeNSAQqEzYxTA5R5pfzBB55Rwq5vQFkXQPU8aaRSmJxA7nF23mfYxBhLX64TJmQv38PtB53",
  "key7": "2d1m7n4tEXBjaBFC4U8ud7hhRNgqoeRtYuEtK99Eug9JuEmbz3P81bSRy6nvyfxi2pVk14t5h7KoQej7FxAeEGW5",
  "key8": "2G5HMjCMizF2F4XA5GMDCeSxuuVqAnLifpPwegKbgKtKGTMAmigHy7RF3Mgpmpm1GqUNxb1V8VPrF1xFehNvnoDX",
  "key9": "4jV1CiNiH5ezLaQjH94Y96NnMH2c5Tn1zxxrMBcv2y9f9DK9TDnjP6eBiXdrVDD2oLkmLwLbwoqEQh14wXRi6LRE",
  "key10": "4nHYXcU8E6sxz2NCw2Zq2BhfnpgDYaLWfVGPY6dScTY86sCh5FAzTQHPZdJKTwWnooDrLGVPrkvpEffRwA9rAAHL",
  "key11": "4ByXu6apQ2V2EuvYKXBRqbWhgtgaNFQ1ku2aHr6fDF5SPfbge2ZV41untB8TPSydtqDeHwWWnALBFUF34iWsBwPd",
  "key12": "3VLyWxQ8jhweB6DxE32pyYat8EKBGK5Vpq6z2V42nKR8QvzkMYK4f2dy4AG2qek6ajwFZFaWFxjRvoX7A2DLmNGk",
  "key13": "3Uqug7sRpZZ52C9baaeujtkeeqU4FejQUHBT1ZPg5yRP7KraNvNZtmVicSd5K9LEBJx3pWtwRsCD9D9wv7JsfZPK",
  "key14": "3Kbdiyo9hLs4Co31fWHmQPMB9ecdFjRqZAPhnWtWXAYp7YMC6C8JcJEDfXeYybNQxgyEXo59cBo6tgnjqvtYfbu7",
  "key15": "5qkQaDjjnrhgtcPsm1e6ZDUSTdiBB8zQbMTAh58oExRaghJofmfqHKxDw5d2wHzeKYH6r5ARxSyVWhVd1SNYXii7",
  "key16": "3PjSenmeNf2ZXimkWkhdRfAAtg3CoY6a5mjBmrdMiKnLtZniU7DVvDZRVkqKv9htHqbm2gTwx8ezhzYTxaTfWCzp",
  "key17": "5BTPCEm3jaWbmS49dabXL3yoazHYiP4cdt23Fdb3tp6vmBBmYgrGgm8iQQ94gzwuPJdxJ7kfT1wvZGb2iUmXc6nn",
  "key18": "4VEpBK1LxXnieJEMLhVygnzks7eeZ8E7cjnpoPxqf7VVXUuHLja2A5f6eigv6RcKDoornbJfay3xS49bDjF4qEx",
  "key19": "4LsJAxFpC92EBzNx9psPeFkoPeqceLtfCp6Biws98M9CARKJoCT9NQvMyB4mM1BNqgQQSYiGJTRwqPJe8EtBb6sd",
  "key20": "2SkbsLf7pHqopK5x3ANNSCe8KF9TNwAi7UMNKJHRPrwLKFWBuhENRRha8BkL9KqC2M4cCjqm4qxLBiELyQq7ipe2",
  "key21": "5E61vv88VhWK71MaS67CQsP61qugvgqvYgrdtAfCcfqfmchkWUrMFN96Y38e4me3idCJfkBZQbjeQeUnn9rspYjQ",
  "key22": "2BySoAZo1HZ89YDDeUqzsS2ovASXyKzHmkz97detfcfcqLX7uGziGq9KWcEaoo2gdkJRXnPz2qXjZYtwGXUoPSDz",
  "key23": "5Cba7gLyQhrMAkTBYNqzfy8s98JdAtaVS26WCmLSumT47Z4j1BJkShfAtJuhfqTrkrashQ41Qt1PfLuBVyoeZwPH",
  "key24": "5BCQYmkk8pDpWJME7CoaJ7ofzTXxgc5et76VeZzdsBzTFPVmroymBQMYvChrqYzqpyUoK25N36SWckFkbyaYGkaV",
  "key25": "3F6F4sjd1zceXgna8GRd5vn1DmBSGAvpJBuTeYVxpssU5ip7vGinHAKB1qbQE1dhdrVAugk5yVpcBqVqYaXhba2u",
  "key26": "24UQYRbEL85uH7QxPU5EczT1mpaSvR5Vss8EXidMwkYH4jGJukKGWZUXDj2ab5FGrGzkC4fXKiEnJVutxnQaePbF",
  "key27": "3hp6T54PWouAHyFN4jUSZ3pJTEz3Afy2539q4vs92k7yVd69oJpKnL5Wu9A4qbnV9kx7Yj5eFCSrZvkNknQiF9sW",
  "key28": "2jEDbT9gsoLJBrXJeTmm2DRFhRwhUZsJZvfw88ntCGzLFL1Bh2adKSTzXgM3FCfjQAuYWKh8wmtLVwkhPRACVHeX",
  "key29": "5x2N3kcmdFxgSA6ruZ1zjrj5w2kP3C5X9LVSCFMvdbAaCA4p3uEfEirhXYfrUh4LJybsp6Zu3SuGmBCxd6o2Ujbj",
  "key30": "3kGpifLdZod1nro7YmTCMkM14ppRhAEzZFZPJB3wwv6Lw4F2sJ5AVG4vR6kkan427gGsj5HqvrGf6vKbVvYZ5FUC",
  "key31": "3nuNHPudJjNbnSCgE86QJ1kiJ94t7SPuFgnFdSRJAm57BWZd8ZVhHhCJAcZowvnFY3cU1N8hiDcnvkz82iSz4Bg8",
  "key32": "65pRcoUNYaSMbbfKGftUGUgCXSEtuUbLDR1VRZcpm5oJ1VrEDpJTiN2Y9DwYiE7XWMpEZr8zUJVreWJqWodwtGLS",
  "key33": "3axnNxVe9fFHXXEgfdx9ThJqXZ2yeZh6Pg3JjMnCD129TFgh1aa22F5fNmzv1zZaVzmEkZMo2Lr5EE3GwYpS6VE5",
  "key34": "2EKCqDDRN2x63iXjjTCPpQP8VxjLhdmYjDqFoxmzkMkxWbowsMBDj3PfCQnGpmCeYTVD3RgdNCyHvdW8u1yyma7r",
  "key35": "2rUybvA49x7KbYHnayGES6nGkczNAeLYzPBn1LXDd5Bw8jvjAwN3yiwHWwHvt9U8hJHj6So3waHKF3EuATzuDJS4",
  "key36": "4gNA3y5o11JXBnWYHY1Th16qpJdxeLjEVFyNAiSCMLUyaRTMU5if65eGV1wB1NZEArmDZFLb9dkjTGk1K9tLH2RK",
  "key37": "3a4NojfCQmhj4mjt4QAExArDCZfncuMfdjYxCcu4DJApjMULFLE2P5D9o1RySmQusQs4k6hoCv4VrvPjj5mF7PWg",
  "key38": "PYmswHeUQQD65SRneaMfoxnmNg44rC2dwhTekLX677N56huWsH5vbtbupg2S2k7ZS8rd2MiECKGSTb9dSrQa9nw",
  "key39": "5FuSXpJbcrvjBKKYZDRBDbh7rJqcsVWou52A8zbSAhPQXUhVi4fEJhqsiJRLSLGZ3KYkvEagxYNRDunK1qtGTMSY",
  "key40": "FUmrrafLr3pswND2TX5qUvTD4vArC38kK7ZfFpatmn4PejjXZ3PAcmENpVsvUhkKobonyiJ2HCy5re34qK8FNGb",
  "key41": "5ZrrGybo9Km7Q4xtav5uxdVrjBqYo6z96woZhYaSXzyrpUPYKn9qfGpJHKtcU2ceF7nSyoemFR7hcR2oBWDQZVM5",
  "key42": "3yVg9fS219NakP2i2YRhGreiUr1wWF3mcjnBFc95nRmiDoozZSs8gpEskYpKqPe6ugwakfWejRZM4L3zVXLWr3Wh",
  "key43": "56cErz1ZoG4RwJHnbkEwyBUjb5Ry4DvaianSvwRtjaWE8H9totsx4CMXtB97X5NhympGCSwMkGKTGxFu6LrdZDKi",
  "key44": "4ncoLjpxuvJ3eQQxeLd45gn3CuwoXN5k8f6JNJwddFd3wV3moWxAzRmnFMSvrodTY9BV2irU8XFgTsbJUBHJVw9V",
  "key45": "3YdumvmdAaHVpctwAy9ffrxStssaYU4TkqWGGXWiez42pMjcXApc73nBokosykRn7MNWGRx9T7Upkbshy5qrg1qK",
  "key46": "5ebZvn5NaRcXPAwaEBMytqbxKu8fAp7QXcagHFowerEvaDQcvZDSbUdzms3yNYxKuZSj4wwhhPHSbVgWA31j1ytq",
  "key47": "3FDSZtgwzLXnVBKwrDHu5BH7c5rrq9bio8jGtcn2bt5US1b8drvpuCxVza1UkoTgtAkCjwKdE32NpouAhUFyHxVo",
  "key48": "2mzYMTcid4kWAruQBh4LWw7bYxsVVaRUVrtrQRdy5ZB736ziCXAtyN7QDWBpCv3uFyQ3YGTDkrSXesaguAzQCfhw"
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
