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
    "Vxa5uiqXo1BmKXg35FywbJkWCUCGYjZcX2AXemsSYvwt988zYxhjM84ddWutUwrupPgcw8jb9Xb7x7N2UdXcA7k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gURCPmKWAJdVdvp2fAYtt7eZpDyy2aJnimQEtSG4kpZFicLn6tu6iVx8Uk3uaumNerm2uNTkn42RTsT9FBDHKfL",
  "key1": "2ZtLDPg74kJVbdmVcHLvLcU4HAiDLfDfVETsb9ZKrAf5BNYDa4twsrmHybLF5ZR4hYv4chQp7wcocvYQwEKPrVuv",
  "key2": "21ypNQsuKRuT1QBeibYayPKeRBuivTkjKknrj9Jd5fG8H2SoAcrd2pj4EhWSAFt4rq1eDhxDrjExzxZvC7bnm5q9",
  "key3": "2SvknmKTnsWN8xdRHGtNFoXxfCTDGfvi1TM6DJsSFELyn6eYvv1B9JEck6MPAW8EJBxuHw66ZbqR7PGzuUMQF9j1",
  "key4": "3yjvej9xMXm7JNtWtPdjznP9Q6FSnZuh8jVAUHLUXkj9uVJJhjcC9PF7zJCtG7FYCQ5DKQ536q2XF9odzzVwjZqV",
  "key5": "mtzT4pbEMKFPdDR7xXqbdEhGH7rjoiHwnG63HZ4EGN34BbcJM3S7D1meEu7L1TZ7SoT44ezJ4mEzCUZyu6x8ieW",
  "key6": "4MiD8QxRLASr8NkPUsj9Z9m6Pa8aoMKEXCutmr1d1zKS2ibjCoVvnhd5PjnS3ucVCtH2oD6t9YHuxrGeXgooyYpw",
  "key7": "4ktfMvcbbirNFDtazuNAZwpoYyCtXcSsFHV597dwiAPBdG4LnpQcuPS6tyrWxohzfAmTom89K9t4PEzNfXFRG34x",
  "key8": "5XA2UYanBF9JPoohqXQNtgrDffz6XagP9gDEc8Pzz8iR1KPoYEJpSxtWBJNCZWNJbAuc9Nu5neu4hpdMXRK7pzZb",
  "key9": "Kwis77cEQHmVrjQLkLCxVBj6aybPbJ7Afqd68usBFwmxExMuWSGxsqfrfYLvWRdaTfmEsWwQzZA7bVJSkcqYUqx",
  "key10": "5QFc4vWzpmFUipSTFbspqC5TSmbWWamcKN7qvAEukDK6bPaX1P8CqYwo6ChQn47vaWDwAq8BSNVraDooNdNnndnv",
  "key11": "5qwnjJHEK2EafiaL46syEoD2KNS7rdMkkyd9Vbb3QRws3KSYo4Y7zgKfA8eJFmAaq7kf8FLMLY5JYdHvH8UmC9ua",
  "key12": "2oatAFcfAiVxBVSxmvuTqK6JygJkugiaHNdxJeF7dLqcaDVod83hhd5jtkSy5atUBRnimHvSZpXXm5tgiWwZ3jCx",
  "key13": "JrXvkEs6fWzuZ93A5VQUK1tATGRFVgKcAHLCgAbpVAog6cKV45DQBfq2sDG1vcMJEbFwm3jFZjL86u14AAWTLRR",
  "key14": "tSkLavoU4hpqNSXLjgBnwm71jh5UXLS61pwF8PTopE78i4LaFqy8owNGGiCEn3dQ6RsEsf1ELazB2waetRSHtXP",
  "key15": "B1uKkwU7BuPSFuwWHRtypB7MEivYh7287eKt4wjN5Ez1DutYPDYgwp9nnQG2tho8n2JQmKo91tKqhH86nckEqVW",
  "key16": "TeoSvuGjAvYLWat8fPGYgrkvp91eovGWLvedcmSrGNQYFPHgMZW4HDnVcSX8bWsvBCG321VEst83RbMrTFXcYoU",
  "key17": "32gA87BzUXuBcqfX8eH8E4KPcR3dzGK1eo9GRq6TB44XTUKXK26oRPDRV6b8gVpcT6zcELcLphdkqPAvpriFf12h",
  "key18": "5nP5KhqbxHwrWFSsBucFyiZzrBwRngKZBw1fAXHw4G66E8jv1eZAJydjDUKhLEM1LCLcJxprHsqDKLxixbMYGWPs",
  "key19": "3ver7aYxoqjXsr8JSzzTSJRK4BFZP3JcrY1mu7acEaxqSs2AtAgWHLLEjyP1kHzKisnsvZyVaspyBTGEfPoHZFXq",
  "key20": "3nVXx1fFY5A3YSMmA7fTf6jMi9RzmjzaXCqM5mJVQt5XXNbAbg3e9QgkKfq962XQVgQf8754c9GknQtN23oEVsAD",
  "key21": "3CiY1r3oHESHD4RCap6UfrQbd4YWUEzbPeTB2jnk9dejBGSGPuifHkzLhKvpzAKSdpdNA9rcGBxv8eyuPMDjhepd",
  "key22": "35qfHwDJUUdD9E2swCz7gHBZiS6svtdB6kHNVNL6fUuDEAZ39G2w8N44uZs3h8RNNTYA1H4sfPis548mFvE1KBQW",
  "key23": "3h51ENWP3v6JfBqV8uWDFgpv39V22GBXJ3fbZi4VF2MQLYUJBzFfg9P7P7pZkvgE9r7XYifMcmTe6fK6xaSnK9C",
  "key24": "39AUzCvuatUBQFmGoqqrjbnRgMYFHbwmKvqy6JBkmisntRGojuuyJ6JGGtkgvSsi4wCdew6yymGdr6dvR6fYDf43",
  "key25": "442zdr88RrwKaAA1235AY6ci2J2vAc6z3kfNmA39h8eP53yo9ZRYHCRkhHJBakzgWgTPWy6HzbNtDHPDXeXMPJC3",
  "key26": "1LyqebdNST8UZD8BeQac9f6Ejgr3s46rFNuvHRzX52nAej1Pkyqr1aV79sBFSDUDxyRtn4LkG5RP2VNixRywbhq",
  "key27": "kSM6pjCH2xt56m2qonsFBJZgbsatuETVXeCJvb9k7NqNpnfW2AwYM8pxbbzNwBM62tgcPjF3m2JCVTZTdyA4eo7",
  "key28": "44eLUsznoi2wKYqNpsTdZDVhv5HvXeUjJ1Vw2TUnW4xt9YzYXgb4HymUiDeQXJqxvbkoLiXqnzQ3TdpihcqxWL7q",
  "key29": "cP34VwdJ44gcyYd6TeCLM2qZyiZrx8avei55hJ4D4C8tkM8C9yhPrcQfaDB8omgRyJoJgaooBqjiXrJeAHNh5a5",
  "key30": "5AsNG15qVQ8DYRbpZMLgrwX2qVYLJ3w3JUB5fLfMcxCh6i6qneTx28vYS4KHwfvV9V4AyiqQPb9THtja6ASNFRFR",
  "key31": "VvKNNa8hWN9LadVoYJUg7MqCKgukLBSRuHXRF1AaRLMKa1pHiE9N6YNiDZtGgs5WYhQWM1fsawLHFnix5j8Pfme",
  "key32": "5AHq8mbNMHbCgmJq3ChHqZa5v8CzZ4vVxvcFdvGgT1Gb2DrBVXQQXsQd9Qg936d8qLGMfjwMdm3QHY5eqZRCPeAv",
  "key33": "2yvWjiZPwZfYfdsXPoQNtxGpdGXkDz35pKcSUfzpss8DPgWAMGi6QHRgDfJ7DnoieVXwFbdcNuaUozTZSaoHjkkZ",
  "key34": "3yzZthUnshhFKzq8P9QA1FByonNEF1DL7BVeegY4CKUsLfPy5P7FwPbCTUFCALaJk5XyyCHHGK6aTgcRaRMhdavn",
  "key35": "1zgsfLNGdAnNF2ujpUPoo5ssmwkcQSykdeUHDfFYboR1ReGXGWsTaArM7PaDYrmxRJ31aEHMnXdJqPR7y8LSZDb",
  "key36": "5pskBiQ7KKrvSiSDkfzJSZ3NJyx7Abxk5ZuWHHsNebaP5vLkUFEBEHx7woqVTB5ZA1pP9ATogJohtpysxGCrUoeP",
  "key37": "67Hr1417UZXQ9wnADKQUVF9eo4un3x953piwXKE94pu5xYNf9o5ywh3sw3ny6MvxV3tzKyRHSq9KT3S6ctHF6Cno",
  "key38": "XquUHEDJqK7aPKiMXDKHQnsw4unZSMtj8k4ejDcS6D51Rb8wSscg1uC2uWAvE2v9pfGPMTyoVcK7x4kMnx51tS9",
  "key39": "4eM3mFLdKDSTdrMxMXUbbnrKN1rvJa6UpXUPPrLSKDeYedSX5jnE3FBJjeMQ24JbK49wr9d7Wp7bioH1UvcboeRZ",
  "key40": "44hS81GbAdzTcvD4y25Z4wBVCrvLBhKDhFo1zynv8MqZUyhnYeExCYNQEDYrT8fJBxGke1YtLMdtXuAEKv5KFJaE",
  "key41": "2YkW1ebuoqr8fdQrCNvu9BkY4JoXvZjE4s4bwCcKc3ZiitTLNMA6cD4T7JoVDBtHnE6pQ762UMgNLk9sxe5sYZUT"
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
