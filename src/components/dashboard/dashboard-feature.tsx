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
    "3QsR91WPTiUGq4MP3LJYzzmANRsR7yhNmsx66zaXoJFHZVaTVa92JDf4NV1TjTJoZ3uxmWF89AEdGL6fqwijf3j5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FkWj9Ke7pUB2wdv58wR1abNJwhMPrWFmftokJSTqJcSDDGSNQTNZajj9N1wTCnnBNChV1c4rnk4d1LeTv9NR7pA",
  "key1": "362uRJHghjj3umbXRgkrzhzQZeSN9MwTtA3XrLb3jo5SCBoSQPtLqgCjPabQ8B1v8bPaPvLZFCgMVpozVzY7jQwg",
  "key2": "sEpgs3PvvtxArzSqaGrbzTP7GNtvmh8J1bppDguPdMSjCcQyP3RFBENMoT3RWP5tbkqBcAXEzPHeQsJ7feu5N2a",
  "key3": "3fWSFfFjP9xxfuy2vtt9fSSWLcx1M1vf9PDoNHU6HFQNnfvTEDkAGZEAevSnyax22T3GsYxaNXP8M4ZPhDt3AZWk",
  "key4": "4abCDb4C5njjQgAxKcpbzWkjBSyTBFAX44At49YnjgnWiLU7bbGtGoVSDQhqDkSmYrPzDZoWfTtpKNbs1zoWTdwy",
  "key5": "ZNhzWSPPNtaM4tuUDFqJsnyYrHsUGmTrQBj7sr2ywDhD3bgSgyn2HZq4pMMknGoNiwnUYZRHHNY63zvnCTVPSkt",
  "key6": "5cCw6ELNE4qFtYEND18Rdvr2UaMU1ZaBmC38Nyo288SJN6egdUYdTXeqYzuyG5X56J3n3YZSVJMqxmn6AP62Mmiq",
  "key7": "4ekJYJjBu4yC7937be42CKmJQ8iQ9SnHXk5PXdDac2rXqt3XTe8rnt1EKsoenZuCqeLidBiHCXJ9PPPaQPXZV2iD",
  "key8": "2SQruzaBoBVVaVyKwVpZHrdaV9eRXwuo5mbyjqypqhx7oDK7uteuydokxUd2BteNTj3mQb1sTjxPySLefX9cWLpB",
  "key9": "2hmcXsLLvPK3guKTbVnNd5ePPtpeaaYv3dL1pZqKX2iYF8bZ8mca2h3cRZWfdsr5rbiPkMofg7ipf4g9J696xKCR",
  "key10": "q5RcfZscVAdcnsY1K24xyZxkykftkcygWGWmRghaLf6YSsFjxMBrWzepLDksFHLDpv1MH2QdnjxCjm2nUikFchA",
  "key11": "2dKeEVzR5qPHFFFr5aLFaLmENqjLA9J1fjX79A9W8skEoa5HzRARQ8gKYdoJgNSxYefSbCJy56qavncMkG4QJsfn",
  "key12": "yW4Ugs3G3aH2j9tz7a8VMQB6vQt3Mx5oFr7Ye7WtbFxsRC5NQXQSetPMjcs5xpZfKKez9KNcWqhmov6ueq2xTCc",
  "key13": "4X7KBgXzVkip7ZYxR4s2fHpGwjBaX1RC7rvua2soiq4nqkc7zHC6ML3kDyKWsNfyCbRvu6DBduhHFupJsFDKJ7pG",
  "key14": "3jyLqqw6kox5JumLpYTUKanHZXiZNkAGbmZ6L2pWC6rbcnobVfyZVJ5zzLvcsWuDL7uH94bNS1pKGXgPysF1PSGm",
  "key15": "3P4BjM7Go2uWPQRq71G6xRiPDMo3oUW5kzftCwXX9kofNwbfVGr5XBCXdCnYuZ4gvCH6zpQPextepB31jY7YGNik",
  "key16": "3XqJD3YYUTdbrU1TqVkxT3aRU3VDizypZAWmXajAGT2LLckrL7yRHLuFZ4uw3vRqAVypp4FnE6jFP7mEbpfVyj2J",
  "key17": "3yeqG11sxFjcRGXVaSrYczvkm3MZ6kzLrpnkKKkmn66cxMRs1R3upMAuoUKGVxVEBGn2SAokjW4pPcvdAbkdgRLW",
  "key18": "5NQqfDNnuKg93my7ELSqofzCpcCxmUwkNXaBDvetRGqLaMQb1e2hwZVLU5x3EyAmKsSh4gB55MeMeyX9EnG4zAFd",
  "key19": "6S8N3EKuHDCJWUxd8XcMRa8g1sKWfcFZ9wueUJ4ipm1JAzB8ghwgZeEnxkwwWyceYk6NXv3iaDFFjctZu8emsZQ",
  "key20": "DsXuLzFqpQt1dF2UZ65AbQvXLmu2VmtPDkHBDVxK4mXDCrxBtmYZRdNtkvDjpoLdGAnCYQuD8PYVDNefmStgDRd",
  "key21": "3g4HU7UyekYdNtttRBuqkJbnuvqkavNAwnDW2UxgqN5cSFiFZpHecXk1EtXFeGZrPJ1Abmysfc1bxefwR1ozP8TL",
  "key22": "4aKDMP3ZTRL7JTDw6xRpnMiadRdieFY8VNr6BeU9AxRGFQppHPDMwPxCXXN7t435nBraRKAViTK2kLmQKeTeJeVF",
  "key23": "2uUXZbywQidJT7zTjdJg82auQFyBJZuWmNos1SMaiZbWUHz5H5ToXa1YExrdMt9VXJVbxhpLBiWcHz1yA6ncPQAa",
  "key24": "34fucZFcJLozwZb1aJnzn424Msv9FLZ4LCb1M2sKSooQxhmLEi4yEz7hwDrovwEPyEqE5yERYsEuY9psfhQQeuzC",
  "key25": "3cexvunywzw9r6j1qJLEW8W5WqY1kj98HhKPNANr9iowxbaAaLhGMsjLY4qsSQoPn6o43SVqW7XPhsgBjpyYTnKN",
  "key26": "5Cu4cCoAc3Qd9jEL2esYkbw8qeLzKFUTg3R3frg8FG4aUvSejMWqfHzm6Qtm5wSrF2sAAwFTnsRi7JujTE9cYnYo",
  "key27": "5661VdKHAeP5Dtk3pkQD3FstFbDxUEbLukgPVGkvABFoQgqQNPcBRwiQkktesa7cLVbUGVhnCi55Ktr8YWS2CYj3",
  "key28": "4cRdFAntMNfXB8gx8fqDUq6dfupjVPUeBDnr9Zq4m8gbqha1w354dyVkwWU51uSL97i9EG2a5jQxwtDkAXCfmBPd",
  "key29": "5LCaqhktVyW6Y1rvDr64w1BbXz6gwYYkEdCzJNeUzpp4zDuNA6Z84a8NWYE5o6pfv3qvHYo6ziJe9q1heqd11aLm",
  "key30": "52NskHaztsd3TS6nMzBFamuxvosmnN8Cm1WaDm9MTk7zCqacWv9oafxpG91HLAqFQ2q8mpSTQancqAs8dgdDvumv",
  "key31": "24bDiEX9yYNzPa3s1vV6bi8LkQYLjzrzMjuqoM3pdycv7VDJyL8PFXwQaxKmBHAmpyXkXzKPRYVJV8gpdqmk8HRa",
  "key32": "4i2VHAz1N7L3xqd5nb6AoEMkJAtRrTTL2fbx3z7EFScpJnTYLXkE1RbUFnTi3drpScNbLtR4fYe4jrhFkBnoLSmK",
  "key33": "3FgyjtNJMAECM2z4fSMCrDziQkSsye2dZdRCcQAt8b5JsWjQGXo6T6HxSTMXWiV67DtuDH1uSe57CRs6y9zDWzgZ",
  "key34": "hLkV9t7jeeXqMoeQdL6skBZaEJYiGZ5tKzrjVJ3AnxUKKudES5vC5HrTsV383itQmJmQ9zPBLspw33bxvxbEabF",
  "key35": "55Uu1fe33VX6UuZ9RzKiHBNmBLAE9mbYmVdZRJjn7YHSgZtb6mJhpE194tRkrq1qRdpmwwS2CEvR1Jwa1HQGMr6F",
  "key36": "4JjjN1zNUUtHL51eeSyzRoc3KMWMFMnSvsApxg2VNm25aZtYKwEKcu1kry4aJQMR7Vix4Rq2u2q5dVeu7S1RfQvD",
  "key37": "52AAm1UtHnV17jCXX8ECqJywhspcinQeBfjKunTTT7uXaQJ3s2VnWuVerVciyLsjLZbtu16DX1s4uQqojCCNLC1n",
  "key38": "7cRKzH7h7iznt5XNaRfUgqjdxitEhdbwcmiidJqrnJRBBVXUv85X3JafvFViJsdfERACyVa6W7rAv922j17F3pE"
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
