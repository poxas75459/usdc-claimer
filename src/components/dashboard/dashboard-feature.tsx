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
    "3DL71MCVokXK5fJS6gkcJq4cHtf1b3oUQFpQAPtM8x6F56n8N6pgvuEVHWcMX88rUwzXYj2ahV6E4ENZCqPTW6Ru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CWG9JVJpz3T1oSgaz8P93BomKCopP73qH9tyyjqfmQjf8Ve3DKtoGBs1KZyVdjefnQfQc2YkqX1dNuRAoXsXpyo",
  "key1": "4JJFRFscmTx8wQP8s6G7xjFRc6bLkRrcLNWE8SX3PNFc54HZNtnPkz4RY8wNcKxbcVAm6HDzGxx6bNvGYhnV5Cdt",
  "key2": "26jVWkhUkoXEWtsxHhMaMrBC3T38oxv3ZsqJdTQexj5aDiBjDHhtEev3P7i58a4oEkLStdeqqkA4kXdbi5EVJ8wK",
  "key3": "3N8dotX5aikDeqGj4pnYKtp1Tfty3RLH1Le9cNK8Jec7S75spkrLdD7ciuvoUqJ7bGaa4Cqy3s47zF3donTadbvB",
  "key4": "muWwo2xfNnBB37LJsgnmTBBvTMaCgp83QwiQWEw7Ekuidp6ETMhB2A56EVAB3tt9NDU8StsnhZs6tt4Ju8nBAx2",
  "key5": "5pPvgce1Eu4iaAZ7KzocYpkFBtLaU2L6FTKWieykCW2RnX7Tk17GL1Mf9XKWRt9njEuxnZWYUurijf917DwSgHeF",
  "key6": "2ajHzdeaSDvA3NzJtrXHhgCzhVEwyXB3EZA3CP7L18HAvqkazzPmRVphcfGG7iJ8kZBXVbKG4DHjq4EUiqiEjCab",
  "key7": "2BjmvCVyckTwVSek1qXkiDH45sqwxG9J3tYH3AhqZbPbG55NM4zdmwDb192swrxK2Y5HEumwZxF41u1QK5Qp69S2",
  "key8": "3e6YoexnZuUuU1AYsvJhTUtVTDQaaN6ckJegZ2EViY23bTc8As5noLj5hSYqd9CkjuPEPdX7UA65147s4eci9YGm",
  "key9": "59ZdRJYEfTB8w3AphQarQEJWeb1MZ917ivTpDLDnhJru2ELuq1V5jCA6MFq9rdNVFWq6jYxYRsNCRi4GGU6wtrAd",
  "key10": "2ksFseTHKukNZLqpJQGa9Mu1WGVJfNNxBeporoMpYQAjedvnycWjd32VX9MVWKgFSJZVo4wjeX1ebAz4SFL5rrYQ",
  "key11": "5Y7ruR9RWq6BCKsd1ib4GbKX6Vof9K1cRQX4puntpbXPnacdtKgwwzWd1RYXRLJLXPCaAQjeV4WTBeyhNrAB29uZ",
  "key12": "4DCmRbZqs4vacdNvyrujRi5ss6RCTXin8zrVp24GQhi4eygF4vmqdX1SwfQpSRTRYEdCzpgn6EzTQ6SQCNKRGzc1",
  "key13": "iu7DTc8irfNQuSXQJbhVgNWBD1EGpw6Ke3k7rZLZMeGQV9hsnhFovjntpE2C4KG9myp656iCFRNLKdRtDAhWEa1",
  "key14": "4o8rUzKwFoRPCQx29D2sHojZTq59KmPYYttdwHh2LyvhLapuatpT8ESFUmJXrgLGRMVtT4CpD4SrmGitTqyGSH8J",
  "key15": "3fjRXn1h5eps7GrzPR9uyF27qDtERKbDBNnUKozsKMgG2ScEqgY7phZcgsgAGcsPnPmaBTUDkxV5zY1EYWt9yqvf",
  "key16": "5Qn86iv8NTwu2krsLso5WxSayT1t5qjYTi4VASWTY3tv9Mn4FpXibb35uBnitZhUy8U6YccfFDr414bosd8Gvcy4",
  "key17": "3wqRXQQ7QkmkPB9UmbWCDANi83U2z524TVKcbgs3hoCTwVHqLWgpqZiurBNRq7fL4ffPFvtexghQP6B9pFEatNHC",
  "key18": "ZHjmeccWcYLtraNRwr2fErjLL4MuJU1bnjBDTSPmKDipzLzGFZ62Rhh9GjHzocMWdm8uyWXd5knTss3UqThkU1y",
  "key19": "3DWMburQVUY65DwevGAjv7zw5ZtVXH6ohntJ9XPeoCrKg1JFbQ6bRNV8sCGNhq1U3uR9AmisSCAhz5hsVpnHzaPM",
  "key20": "2LuB8jV1sW3XeA7wzjf9NGqLvvghKSvoT6JfxewoEWdYpZY7Ez8HUPHJoXFRQ4qnfxEksN2Bdc71rBV12iYb9q4p",
  "key21": "3VBYuiin7H8UXzSvJJNKZeSnzZ2jEhLJCrjZk2qffXj8KD1WVHbmtxaJGREbe83cZHm9wFZP6XCByp2fSPxfXWK2",
  "key22": "3MCH6UNyWB84nptqSadMWjyJFYjwdx27WTwTs3TQXSM9AiT2528FZYdFoA45bEsQuJAJUBbL2L9LgERMf7x89f95",
  "key23": "4fPSfW3tpJ82S5hKM7kpNtk8NSFwRqmsJEKYMaXKHkJYnKv6jUz5vcaGnSMQ21RgAnFtnzosQEYYp9ghQvVxiFEc",
  "key24": "xXdxcQCZUxGj4kSjxffVcrVkDa5XCM4jiU3Q9Xp8Z6kq78rDyHYkaPS6EPfwhiKn9jrZGvWSpX6QAcQvAaBBmxT",
  "key25": "jR1o8KdpGkqvDeaz2ut7oxUHZTMorK7Ws5VJFvySQ8c4XvdBJhBjezWzf7VJt1KgKiPwTsLNXJeRUNuaRgcvAqU",
  "key26": "65oNvLPRY323Ncvqguskrv5y2xic2WSFYhE67FV4UQnPemp2QJf6kqWiT28TPaMNwxKKYDc74bkqnAkJvxX37gPw",
  "key27": "4R2N1HmKopNSQ8sox3yoxq9FAfX5PtV8QJCu9pDg72iEvKCMfoRAYSiFaWzsjmdT3qpqmmMrt4qCC6V4JUQYZ1By",
  "key28": "5z8DxTVPrMsv1VSmgZxQi97deYDtbZvgJJndUbWWtL6JW83nTduG2QtJszhX73391XPJ3BTcREUdZAdyNj5yZgrJ",
  "key29": "QCFMCptN63FMeHiBCi1kc427X843FUUrsQoeNqJjKG1nF7zV3w13th9odPtWuKzA4ikR3UT5a4acpAhGLbsZ8yh",
  "key30": "47zFr3zbd4SvtRAPX1whq3jf3NzQ36QBa3zRHN8L8NhftKzJcVsnKMxizFKNeqpaUZqqU4YAHULV9Em7c58bRHec",
  "key31": "2DrBB4AsUMSjdaeY8By2e2qYNdvuCYTemJpMGMkyaepoXMgcd1mot8soapzBcj8283N5ms4zfXMWqiD2yEthonLf",
  "key32": "dgWcCCMqSZvTpDCoLvBykmtyDZZx378veZdcoXPoQETqRrvLXHgDnswBC4aArGJxruwdVXoaHBpZPQEMxVGpnq7",
  "key33": "25eeJPYfRyxsfvRcoLdWJxK7zSkn2EEy3JvQQ62NhxMXEYPeKZtooj2LBg3V7tYq6cmyxkfFFxY4o11Xg1tKcCKU",
  "key34": "4qsaNRMedhzpqvmY2MLYUh5aGysSjPsV3wRZRcFoomE8kt5JonKxqGf8s2CBHLHo5wC1QovW9dJw1X5N52uX9H5e",
  "key35": "5ejtfY9FJXDkzHc2uqJFTJMdq1G836xNwWbnLEpZT6tXZef2etRuBkxavmJwaXUic239tdp5xvTXG5BMVfTNt1aR",
  "key36": "3hmCWBZAyJfrKD8jXwy28PtPhpTj1FTiqyB3Lp68CRLAbt92WWTVD1W8q5pTGCf2twVjb534iRqUTUdJdJAMuDiv",
  "key37": "2nafGSDhYuMKJc3diHmrxqktEJ826hPCyznQ2zg5FiQWTLvqujqgaoEnzbCtreWTq9FZK8C7y8qWv2ESY7TBNd1r",
  "key38": "2zfeW32tUGrUHkCuphei8P7cH1xVNh2NA6qgTkYQpzdSf31kqZiYC2bHzSQm7wkaBwCFN8aWmaexqfswMewx5yzM",
  "key39": "2NiTttJbyfB8M79s4hmJR5Z3HCmsnRaxjn28u9hdeQQ8qzL9pJeQHEwVmfgDF5ggFwMmhDyq71cyMGknjtjWAiEz",
  "key40": "K6rcXh6NnZ3AApc1ZrPcYWGaXZJDcZVuskXZs6z3yEKFnW3YAuWyQPk4CNAR75b8D7Pwg3pERT8f9rR699Leq7n",
  "key41": "2o6EeoiPGB6orgTuGiJiM6JCVrdiLFcx3udxC2XYp1wb3zeVVNbrsyL4g5sB5DEdHZWQfbLgrLvH4QkMpeYCjcPw",
  "key42": "3ZPDPynhFCQi4HHF2i9955Wz6qqVVBA5VxSurw4X4EDxhr5jdH7sxdiZgKVVwNpaBMghhaYzwbiuMAmkWXprEQyo",
  "key43": "2zRN3EoDoWga5wkiVJ7eYkuJT3StxKR1tcgxwxEo8BqKSeH6jzPUmbfcKTxmc1QSJjRjT3YMiMFHARtSHj6A4xgB",
  "key44": "37YSgYHc3tCJSxvBD4FXSbqUvNpwZHx7qcgv1X1ffLVcPeyasYm93KndSe17GWFcXh8XSsxH8ugnSbrWDTWvJXdK",
  "key45": "2QNDjbu2RpXrVt9hMELBZv5xDmn5U7f2CmbznLfzUent1rvjzxH2SkAbC8219BDdFg14VBdwZTdxey48Yvf6Awu6",
  "key46": "4LW12WE5wvkFBF5H5ufXqhVUZke6pKSAJWytELzmAjFZr1eLTjnwGgw82CSCzFZ9TSvNZj2APPiK4PcNkPFsgbS3",
  "key47": "DuFuwSZaBtzVd4g95fjZ9x6reEyxX1Ssh16V6cyuAUkJ3hYTnZmYUuJcCggm52wQmkJdQuSd3mFABi4vsvz8juc"
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
