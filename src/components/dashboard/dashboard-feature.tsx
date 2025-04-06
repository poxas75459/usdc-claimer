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
    "2JUNbw3x3PvHXjtHjL8Dfq3RaHQXTPBHz6NxrVJbJ7ApkgXuTwYGfDvHVkkJ6vfjnpDbpGxYfvNjkq3sU65j5Zxk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CnzeHsgjUpnvs8AtpPmKuCP4okNYWtXwFoxaKCnRea8s6MTbYAJ4ywx4RNwuND7tyCuGaRDuLLbVN49JRgc8zxH",
  "key1": "2aP3EHTvpEcwWnVwNAkrbuMCbsimphGQcEhpXxdsQKeffNUCkegZsUHRaMwWqj3U1tQemSYBqja37rVcwhgMjShj",
  "key2": "UyPxohqocdEwWUhzYCnwCTr7g7g7uFtk9DunNGfwr8Y6Jn9Pu5KDPwG4Yz7yZdCqL9RQyNMDySJnJo8HgM9ZddB",
  "key3": "366UeHhWiW3ZWqjFfAjBnAW4Xv1oWw8F2EKAvVkeBmAbmKjSddJ4RpyDRg4UY3GcJsMiAiHbuUrPR3irH4S6deVU",
  "key4": "63GKPrnLm35ueg8TdGGsnFAGr8yeLnVJVWfLepo3tUPC1oAtN6eXtDS1krM2cBxoPEwxW6KKHoCRCx5L7wRv6DB",
  "key5": "xHsZExoT2tJsXTguA1jpWgafpqcJk1r53gPHieB42pJnodvuw4R6Yq4g86mEdzTaPoLXKq5jw1nvXzUR9iG3v24",
  "key6": "2NjFPjxPCqCNw2kEnWEsuRAsg6YVHJ63tEx4kGz3wzDKEZujkW3XndabkG8EartCUx7iCnV99nqPrzxwsQBbT3eN",
  "key7": "3Hd9CbjJEGoYQVjb5nvgGcaqave3UB1ZryzFFLrkbMXuHdpcFD8dsEpFBb4YVwGKXP9rx1J19zM1DipYk84scuXn",
  "key8": "3yhXCVChNrrZEGcgFGoxi8FHjBNoHmLpen77PCguXE2gkuXLqQkPCrW3ZnXUQvwdPupE5bcpC3XkYzVgPSc7Cof5",
  "key9": "5Q7pPPDU2XqYn9WAuyCjqNV4sMG597QNPHPouZCrexEMGp1rWYzGkVP65b9NGNL6GTr4Kw4hmRinXyHfzRpYmKGp",
  "key10": "FLLJ3hFqSiGjfrffzF17RDz4WPiJKxyDQ6THLDrrdvqJQbAi2AJPCm4mkqwKNgfD3SGk1MAT9kEVP4ZkV5eRvUM",
  "key11": "3At4Gt25oDXYMky8pu8NHwBSibjSochKESdKN4Hg3vvrmaFaYm1a3jLRG4Wq8aFrBkjkXqNnuHo35PwKBFxoDC72",
  "key12": "2ZhxM3hSXXkVdsSyMgoSiQ4RFGV5eAqNS2kiCePVg2cquSYcwyfFXd9TVGaxjYMnxMHLeCZktWmDxpkHqVhwgHo6",
  "key13": "4foKWKAmLgMZ5fE5LLDbDuv318QEaBJnm2pQkHy52wKkLCUMqRY9jvHLE1wVCu63z4iDR71XgJCNCvY32qxLZcgH",
  "key14": "vNVv4adYxZZ4VXgP5oYodJo67ECjAEMqbb3zh79KuWgiqyHYYBgHHJ8qXhyehQgdRoiQxndKE5gZgJf43z2Fxbt",
  "key15": "4SjoFPrVYGxXTHyotNBtFk5vDKzGNCjz27YkhfvttmszcsKfzTtbZJdUrrEhDtFntFPna8b2u3zCn6BAPhbyXGku",
  "key16": "4uExYwatDJr1Fhy9RhGDy65nBw63Fj7Tcke7RW6SQ2yTUvKhmDjbKTAEYDCCReGpmS5eUikZJNcjgEgkrH86eG1f",
  "key17": "2i3q8kEoB7oS4zbGfTFu8ZUwnSw1KRpi4mVC4G4h5g3LCCWsAYtFmhT8gT9KbKRxGimnBU4HMUmmUbCmsKNb2ERZ",
  "key18": "558d8V3K6q4V2pf2hQtmqhirac7W42qDF5gwiqXper439S8wtxobBsRMfoswQFHNhpQVAWrK1vUopzB8jyBa7XCA",
  "key19": "3jmZuMixWdz37hsMBMEgVAkcDPKgUokrvnoYyhvrwrQFNuvvPqGLR33BXQaAK44WjJyxuofGh2FXU1q23kueC6HB",
  "key20": "4pt7HXTwVNma1vfFPgjKLbwMmhTVvhGgvFSxPH73eUUEG5ESdDQwFFtMrnbdVAdHFFjNCDApzQq4fCSZDeUjP4Dr",
  "key21": "5g5p7qwy6K16q7qH3Z4c9hkxSVtWgE4Eqz5sctRmM7r98j8c7Ce5KoZmLAwEu7NnAiuGY4kBu7x7V2sdno5mgNTk",
  "key22": "3npgxnRezu3NErK3hpJ9wdGc63vfw7xEPHE9WtatykzScVC7W7P8BKjK6R75rVeveYyWicuwnTKoZacxJp97Fjku",
  "key23": "62RiMgHnvCxwQ9yGCy6iaDJGHpaKcN9to8iP2Why5EzAqpY3FVMLuos7z88suZWJgueoHZNHcZ85jb43qn4d89L8",
  "key24": "2XeZDfuepwLgpiFTeYQBpGfSv87UJuC21a4xRtMm1EDhPr4wR6nv6A1yRtXvA34pLsXBYrmWjKo93bENURuzWp3c",
  "key25": "3AAQZqJbhc876ew2nZ1cS8NzDQNWDRrZa7DMGQz27H3JmQhprhFTHSZddrebDo4rsw4isFX9EzxGarNKsMTjVY1k",
  "key26": "2esnrPCfe5ZujLQnHLkr8RNoNRbB1R6P3zqVmAXZJckxvCjhsTPujmQQZa8YGb8cmev22Z3LFUtfXGw765WLYr4a",
  "key27": "dHf2SWqFoWbjMdhVXUhoVWLqjGLTQ2srmEgrDZRvFEWQtAdPLnMxwddsk4PRriPE3X8HepfjaS84yGC7mgkKnFH",
  "key28": "378kKeL4MmA7tkVF3jnKQRvV4SoWEcnRmwstHzCXYwJ6ZVBhPqSCe6hkqVgaabkcetEdi8v6bsE5LhqXaM5cRb8Z",
  "key29": "32LWSHbktzbkadHawvq2N421pGBp2WrGxMn3T2MfcCca4Z1P14CBLuVEtDyfy5jbALBrWtSjhbDfj3chAcygxo1J",
  "key30": "4zjRwzki9HHXAt1YvYRHSfkSFn2arD3Utgp18pFG3mD69yXEVf44JBD36vqfZhBr2MndYtMxKZHQHrwCFFGUhvzQ",
  "key31": "3uep1g4odBvrmWBfxsxBSyYfhGzxnKhyjeWCQY3oYVg7J1SUWpscZpviPJvUZkndoifnJeD8nLbfgXBaX4zHqwT3",
  "key32": "5UQzopBGQiAj96kstR266dDDU5xhrrcpgktH4CVhgneuiUiGrv6TC9cpr5MufPUSic9Tc8ZvvmCjkjYrC8a2dsmi",
  "key33": "2ZBn3hUbQjrd1a6bohBBReNLWRGdTL5xiRkJNsY8QjERwFF38Wk1CqFsC5VL7UResNgBogfVK5dsozArZuR1weJJ",
  "key34": "2M8jjRRUTUrm1Q8RaaA7WutC1yCtn1M8qQey59R1aBvuqsVLwWphmTEhwKSjxReGdUJs93CuDozb8Bn9ASfQB38f",
  "key35": "5Yt1zoiiDw5f1i2eQ5bGPGCTjcQX1cYWPwm39NtbgiNCNGxQTJwVEY6KNaLzt9XKVZx3NEaTPqyK55AwchTDpFpu",
  "key36": "65gv1u1oRJe9J6d2r1KitUF1E56UsfD2DgEvjZ8kSjWx38SM3Cef8dZoetLgPdEuTRnRLvgK2fiZxbDA1YKpbndD",
  "key37": "5GzN15yXwkt8norVYoJPf8rLx9C7z2C3TG4zZU9w3bVJ4PKSvB8C7ZtEhfm5dma8YpnfEfeDFMqcCeyAjpusj87a",
  "key38": "2sHdYfzrqgz34VfZsaSLXXVKnNfEixdRLhU9CrmDmPoD2YZ19Wckx7kqwzJ4HS8LKNRvSRTc23msMXf74FvKiHpy",
  "key39": "4F3kwNinE5dvBkggY5NFRu9AgH2vqgMFyQnWWt7mTxJzjVAcUNd9dpefz7vkmV3PjDKX6VyGLRzLWCzjCmVAmsGf",
  "key40": "3tajLGEmhywnydbYJW1ConAdgSbciKGSk7wydhs7d4M1Nio4AuG1RSkuG8muKU6aAqPDh6MsnHc5odfDbnq3HCG1",
  "key41": "4uSb5eYreupDYnanUh9zL6zFCwA6S8Ep6obKsTVdWuwjiRUFZKWiw8nAMQRSHSX5rWASVfHqSicvnyoF6xW5z3Er",
  "key42": "5hKtvwgAHJNAU44Vs34VzXKu5171kiXUiU1KWYqWSbYj3rb1R2Hax6QZ8U849uWZWwADCbsxDAsFATKS28VD8NBA",
  "key43": "4q69yhyUEdgih88wzbvLhp9AvBXuV764gWfb1rEFnASorRBhiLQorzHGMghzmVPKePCnxnySLKoT58A7djMaaF1E",
  "key44": "2tFCyFxYDYaPRmtBVkAwwjhnJTEhzYqwTjJegMPZkszpgkmM6EKWAdwUU6qgagWSt1onzf5C9bwmyPtdiUgPznNk",
  "key45": "56z9P12dGSA7tCTMYWLhdYEVxxL9TZgFjWucj91WZUiAuWSZ1MyLCC89PvHVv1u258LpCbbrCx8u4MQdijVdKaPr",
  "key46": "2FxkgaTDgPEXRjURn71W65dJ74tiT9KU2bzczDbGCFW3ezHjV8UM3G7oeLskJxQJnWjANPZa8vkVT3h59ovE1vax"
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
