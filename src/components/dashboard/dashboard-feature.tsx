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
    "2tzhEGR21v5F29vqhGAfvn1Km2eBxLpj8guaHi5E2xYQ3vCcxr49dHybZ7aY5HvvDAWv4tkM9BbugJPYwmLtUMFk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35WCaSAMkTyG3wQPR4EMdnNWnziiSp2TiSRWYgRM7XGSTfC9n7HGsgBagPYaQWJie2BEg92hYcfHMX86Xw82c3aE",
  "key1": "4cUnArvTYkYYAhU8f8GzcapAr7fNbyhDdpLB93ccbUtPyXsDguhqUEvt2UE3gV6BHPd6Ct6VazSnM1zQsmfBqRvp",
  "key2": "5M9rSyBWTBHzu3WkYAtb1McAYLBzuXRDG1GvFFJEZca52aStQMkLDU7J7UE3tjUj3qFnUY5bWUD8Qjb4URoF8DtF",
  "key3": "5VJKTaRVYysHhsqw1VQRDJRQgfyGqPEBvNEfw85nDfhkaAMVoczJTjHc8x8PViL5pstpWTLQTHfvM9aSoHkNU75Q",
  "key4": "4PNz727ecaFMKqK39eMQrqMf2oYR1h4yLL874rFZ2C7wHuFaAmiq2bHntpn3b9DsLWPVxGf96BXZuEqpcn6gZ9Ev",
  "key5": "5zYgRCwsW7pBTk6X1vvUM7kWGRGr88J57cFtCvqsHmYN5CTMUqUmWH5s5hq2idLWZT2WPcm66QQYSje2UqTvcsYE",
  "key6": "3dWaHbMT3o7RNadBXA7j5HeYTVhCjQaJR6uY2VjHWTCj3NS5BWVfRRPKDY37gN2YwNnCzpz4bx3QLM9spq77VDTH",
  "key7": "oyA7km6jKFCrFbAAYNdBkF8cToFDRPSyw2rjCAt18Yg7K6wWvj12XAEzemfJpeGdz2oRJCwvmEgcc4cXFPKpL9b",
  "key8": "37zxLpBybajycogMpAPKek5DuLmSGuXwBbxFLQcddGDzJxhpaohwhMeyDrbRHSFJ8sUMLo9wKjdia2cM8JJ978uQ",
  "key9": "3a5qibtAyXJDWi6Jp4bvar8QvFGyhmL82SnwdGdXKoTqkc9tKAoRqcwyk65FwpsoRVK4hdCwTD1QAbaKDDzhYiFm",
  "key10": "3kaaDpTTnWwnf5qDFtxQS79sj9PgHEU2CPtHGQfwu4WUe6ZKj6crvoLREmUhJPQ6f5zJJc4nA4WuChsMWXZEVT3m",
  "key11": "2GN5GKKdxiKGR1pCffzFR4PrQ7948Q9wBEXAsAhXc99bivc7HsDeCzmayD8AGj54qw8T6z76aJeG3eiAHB1phq3J",
  "key12": "39FNMziJN17HgbPwJDaKyedeqCEyTrQDHVy3fbse4HZxm8LmVf3GovWf3BnfpNJQUJdfUEBzpiV3BHpDHaWk5cBP",
  "key13": "58bTQzVD2ZUhZbmTQf5Y8XuHFhFEiudPoSoVTJgKjmZQrjmVQEhoMR6otCAevKmqDi9UNdPW2xMJCPN1o67tFtsu",
  "key14": "5Ho9c4RnCNY1RDBcKSjYqsZ6zg8PUseg1B2ZhVu9GacRkMmitUGK1Vxku95QK1HFp4vj6VvYEGqx2MY3BqAE1nF9",
  "key15": "J8BsUwmkFGm2hQACFAFhDiEHEt7aQf2oTbUG5Uu7h9uyDL1eXv2wRuoh1Euwy97qSyn9xN22Bg75zXa4qLqGHj6",
  "key16": "3tEpYU2TnmGqqLWig34KCbzQcmYt8fTxCtE85erfCwAzjEPFmyS8PVcqW4buAwKAoKTFoKrrAsZN2BCjURSGkcFK",
  "key17": "4tKyFeT6Ey1NdgqDexw395Ef4AzqkgHaGUeLB7X3u4XRz2PmDFLucwHoacrk8xQzy37jFVRmh4t533Tt7VH4nVdF",
  "key18": "3T67NWod1QjsyZWHkrbPsnA6WVDi6SgLSZ75ZCUUoQFZeJwZWT5b6ZjcwUVAYx6FRLMiiutTCt6jwZmFPGvLpdcA",
  "key19": "BLDxYQDK4n3XuVnY3E26eACVLn66hweV5uVuQRg3F4MYjnmByKaRkoZL5etLKqULjvsiDSDs1azsJ7wtgLrdBB7",
  "key20": "3ikP5fsEfLraQk4jfdHrZVGRBNTGFwBMSpifQCo5yevEzKc2bjet6xgQamP4qg4UqHDUuwwW2eXpsrfWdvmxg89B",
  "key21": "5q6Vs5nYyeS1MmeHBj8Bgw19DSBVke923LqRbNeze7hPLD6WnGv4D73m6doeTLvMnRAfefF3dye2yh1RnucC1pY5",
  "key22": "rK82fE7x7eA9eBoXrNxUTy8baDaorkACxFNtsYpPqJLSEC9H5dbJ1kDmyukYqCBAo9foGDBQ3wwwPCU4vvkGjkt",
  "key23": "5Y2sSEnz9UUxVob4BpwbjDFmJBzdQU3UJvGSp1tEjxZWyBNqcRxE7BMjdNBaofRsQCY5oMRFnMyMNxjWDyKKfL8t",
  "key24": "29d7CpBawaU2QYYSb1KaRREEzgtwGmyxzSEqyRFq1eRtMSbS2WaNupQM2yV8fEy9xggc3qTqBH7gYdQRQqChNerj",
  "key25": "35XrDNM4ChBfdjNEmLutP5WC4FZ32CLBkbVKjmTo1yseUKE14o8MX3woucWg82xRULbovLZDHqLAd13LMcurUrr9",
  "key26": "5Lpp7P28bdZqsBfBTjA1HHs8WDXgrLiCQ3oYLrgvhSEmtoLEFAN7geb9nsx8NQnn3CpuuPXovzyUHRFrpyC9c61p",
  "key27": "3FZ7EKQxSYSj9REsGmk4AdMD86oib7esv7a2BtiC72CrkiRoFv9WPXuUGPfbdrvK46ecf6fUrBc98UKLM6b2iHkD",
  "key28": "5V7JdDBDShFcYYUeJjpEdjf1EncSgFmAE74C2Bmu5d8MeeYQYqzdHZgEpzpT5swzALkxuXrxuDPw73TtZLDavpAj",
  "key29": "2Zq4QyRFiJF2n11UNb2c4rV6DXrV7s3Fa3R2D4NdaeNcCAUtFPz8CMvjMnx9zxxph94CeZFRMGnTcwf1GbGJrcfh",
  "key30": "hge934fpZagt1BZtW4nY4H1Z5Cqk96NjQLeD13sCNNgtfQaoxdhEXdCvmxcnApijDAC5RLC1YSj1GrvzhHwVFRY",
  "key31": "2CUmExJqt1oQCApaxPJGqDJY2pWY22kY1P9zQ2E9YySQaaiW3P5wPRQd5s5gauNABeAzztf5GRHKgC7zZcmV7Efi",
  "key32": "2avAeJGQfyi45gLdqom2g7XhzSgpmMMV2B5zY1JDga3VRK5KSjYP6g9Ugpqbet2nUHdEjQKkmimi3REwzGWSwjN4",
  "key33": "2wVF38CjUAZHrn2t7taQRujLGNfjrFjBoSurLXQNnMZEEd5D93m3618cpJCUs8wUs6qdN74nAiGvzwVkTGGdaXuL",
  "key34": "qnKhSj6idqqEkEuSMx4eQgVYGP5ArZ4tNn9ZRfT4FPFwcXZ4vn191BWfXMHFn3erUdQ9Hqok2XkE4Vd669ry9CT",
  "key35": "5vhrajGv3cCKc9nqjwM5EnkKZhrswtXbkkgMjM7EZfeqjCfg2YSHrSQ98m1W5VopRwUBVkHGTZ7YX1jQ5WFHyDEM",
  "key36": "1n6dhCmSRQFbeYi42rW2pQMG6nzszhvbCtPs1uYhJK4VGEAm9uVjgLMewsw3QnCfDER8BY4dBHgfx48Y4c3Z8Bp",
  "key37": "3wYQPexBqEfumSgUDoyYa6635ZTykqpavAfsUZwCVur29E5eY7HRJTNHBi3nvf17ugfXpf288y4jL5WkftFc5vCS",
  "key38": "5YCW7XmXWDWVcjGfGJCYthbQYa8JU7FZ4YDXHevq9e2GMZgpTzCq9uu6rEea8ExNmYx6GfQiJ4gWvoUvk7nFKwps",
  "key39": "5nJNbQES88c5dKrFcMy5VGBD9NjYD4dKPvMyE6G2ZhVwEHdv2PorCmW4pPepSCorPXKe1DeChWt3nSAW7bNfdaqq",
  "key40": "5CERtF2GYBqP8p7nLxhtMYTbJy8CLXmrBM5HB9DyPSkfLMPKkJHFjMYRUw46BKc6pvcjfStHowfFG8mhejLeaaJC",
  "key41": "5rxnStM3UYbBtaEiFYGYBpPTuJtfRY1GVJkk3aASKYvRdszNq2d4FSTBnwqYbzmLSFskGLrGqr45RtsgWCnbDu41",
  "key42": "3WnMkutnPQF1pep17uHPkrAP2kmE2iWkTknCqBWNSBr59CQWA3NsNTZerA5VTSVepsJfWvEz4wGCB7Vi9p9GYz2Z",
  "key43": "2GXi58KUtucJu36ouTt6KiSq8Gisq1nMLKr1AL5HdvvjbBiscESWBSTkiT9wq8rhFiCfW5r3xFXzkSX6Mz7pRHuY",
  "key44": "2eXAr7nT11FynERiBSPPX5Ls6Vxcy9hRKeQsX9yEGrK7Aus1ryAiL69MxPjBQyQeWdT4J6GzAgh6qt6Kr6KBeJnT",
  "key45": "3eXJkvMRPfEWK442WaL2BHmQWyEV9876Ccf2ZyJEsA8oT8oEQesLjEqkpDux86YMeP55bDXqbMh9LAxU4998xtSb",
  "key46": "66tTzxXtMvvChvfZhZKkXCC4GEzZZdcE4uXF9HYnBxvLGWwFfozF7sfv1XtqL6imLazKsNKnMxbXiaKSdHaFv8Ea",
  "key47": "4Xs5tM5mc169EvfC5CJdvqRHMhdKnkecoiex61nZuCqZtZFSz8PBaB2yod8DTQtCSGuBgCAumB2TBNvtAdggeQXb",
  "key48": "3oupz8LeMDF2Jm5umrJuw1Reh3Wi3TS4WJZP1E9zbF1JUo9MrYeJZryvsxZi4H5udWcw1zXQaQTrHUxuLdZqaLtg"
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
