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
    "2gDwmbHq38YXNyiKFJU4rtRidEHSE6gcBNirEvU9BGBiXhCipspWEdditvvJJ5sdTkDXkmB7uPDir1SerGoGaGSP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j7gqy4wgkDgbiuGyGZpe4dayzpZ7nnQxkG57o6XmkS3rVBUrzR4cVnUa1ntkGmLUH4aWXMPq32eMMkrBSM5WnSt",
  "key1": "2ZixuwDCyojc8GbG2YstwNvGqJJ8Ro8KymzW7xPwK7tqtQft6CFNsFQCeLDvCmZjoVChxX4wAYtvL3fU72kyFJkR",
  "key2": "5aXmgu9FZhmdx7waMuAsA4Q2pPvk68zAC6cVMVHDkKg2VCcdMTBne8mxWKwXJQTjK8LGiQwTVHvJCw6ueJnLmzBD",
  "key3": "4ihAQm9DVk1mDv5nnNyjChVRQxAA8caG61QPeDsUZaQD9Q24JgVvnPcaqSFyMmrdLJ3NSTk86ffqUi9Vi5atBzNg",
  "key4": "2DAntyYjSgKSayh8pZHA2uHDgJsjWfBmfLtHMARnhe36qKtEQwK9o9YuaneuEnEcRdtBEdHe8PQCiSRUJGmaqDjV",
  "key5": "2koKswns3mrf246ip3yuKAHBkmZFhtTqeAGm8xq6GhNxzLgbkFQfa4maEv7J7vRnf2VS5XqPURygDUkxdujy59yK",
  "key6": "2nTA87b2C8YJc8QmVutdKUn2PXkQ1MBcdhoK4jboq8SbTSfdhB7nCcJPGMSexYv8wqCVchNpAq1dJGCGhDDUeffj",
  "key7": "54s74raSxRTtXqve9rcrzyH18VgSAXGJ1BNbjTwe17W9P7GVhriaNDMRA4utUcj6Zg2L1uUp3puK5VZvzPCwY114",
  "key8": "43ah9cBY6JfXHE2QfSpn6GpZVCV4vPAjf6MoL1e8nMaMfh96LVNN9yCy3m2HweEcG8ScMAyxNDwse63x3uwR9JSa",
  "key9": "4JbxPqyZ1Y6yZMMWtECBCbEDePpnkyFqHUaJvUEWMjCswLAwm7kAnAhCGXnavVbF97AQjLAtKkkyYMhK33Akzxss",
  "key10": "2tSNzgA2dKXLxidfhi4gG44RT7GRSpWExFkSXMuCKMGyHZDE6YCXQKJ7c1a1J3NxYH12tiQyRj92hZy64AtazCih",
  "key11": "4WsooGxc29nx3kzgP9bFxtgDYM7dJnZVnrfePbLWActbNWMAC3DeveX1KpCcLNpL2SYSLsxcaKLQLW5AQNuUuTxf",
  "key12": "8Xik2bKburZrX1dYpHckmYnNCbaTpS5oa8FtkNdU991wKhxNZiUSUQLcpbpQytpcMdypKJvqyAmuZ2h1Ck3R3VK",
  "key13": "TwdC4Zh4zkeqVtahWNLMKjTGSx5Qv2Xo21TfdCZviDUi1irymtZx78mLq1tJ8ab28BDxGQgYrLzAK1RAaPEEc25",
  "key14": "1oHRQshUiSX251pn2JGQUztZwA6t6VUSKcbvr8ExcqxYZ2MxXfQD9v3hBm8psnoPh7t7XfzRMwstkQcpRJHvbzU",
  "key15": "4TL763fMQXEWwUWJtmS7WfTnStcstH6umLtT6q7kBMN5YUdADaAjMbx6LpxKTETCqtTSun3zMd2XqW4Keatmu1C",
  "key16": "5K66GhrdSHy5BVWTnNWw4CmKNNDqqrCqLVjDJP93tfJPbMm6u8HXJTAvHp8Gz5ZV45ZZqZEoXzzY2MDLcAPzexDU",
  "key17": "37s6w92CqmkxhZJpFeNZCy6Uff6dpRhLHGmY9jX4pVmU3J8q8FWtANHNjLgJBskeH9uoG6pHMMW48BmfmFcgNxPm",
  "key18": "42TvN587EUxWWYKKu9jSgek8KyZFwKz29RNoAbqhsfxLYBmitdJTXsciKV8G2GqF8xTBBPwMUHEMsxo7nE3nDQAK",
  "key19": "3f9UovDkZcbofqgv1DqaMhmHvzwhD6csK2A8GUDz3oCPNwekVetyXAT6iShr78mFQxzDfjZGxe86SY6GSppU2cys",
  "key20": "4ERjbSyoPZvmUi5Pc9MQHH6YNewNnR6kQHKSxJv66r3c8VD7qkEkuPa8VvdzDE9RfB3G2mGUvdgZJSscEevK1yA5",
  "key21": "2JLkHyZeJE5PKyytYEX899mt1M5JAJ7XgydoSg4bNkKFWDiRbsgAgGuwcAdh7NW9o2tAhMZbQUPtXDsMEekxDkCy",
  "key22": "vqYJJAGrP84bAbFDXUy6e9atBWttmmfvQ4fi9iaHQioGY4mPPTmPEo8Zqpp5a4e3bhbMwCe9ucRDC42TAnA2gvq",
  "key23": "4UKiwzBaRFDh2CfB8vH8Lu5a8NrNowTeVcKhnU18f3aHwx5AVLrRuBQ8pyu4XLhwqRGhGVrdKwELSUSp1mzHwYiM",
  "key24": "3EZNCow1UpsreSX5eizWA7KonZoh6XQcgfbLfFuKJVn21QFoZhhMj77nyBrPFQz5B2zGvZeL1aUirH8Cx1haHvnd",
  "key25": "5YPJPFsxiyQtiKni3FZM1YqeWdfJacJmzsKKBQg3iPy3htxXLsH57hwgGPXTAKSmbAEXciFqTTCwYEuvxyBoVRkH",
  "key26": "53ciQmDFevZRpGHeofq9JbQPwj7McXxH129SHE8vM8Sbe3a8TbVVfy6e7pM5At8WBg9cH5oYxrndaCB8bVbjtNu3",
  "key27": "4L5VwVCrwYHUK5iWjiKpC83LyejeyPuo2ZqYWHpyhinLAQrgC6xBpYZGj43qL16eHbZjm75bsaaUgJR5N1ojPjfX",
  "key28": "487sY7hgEHD8mVyt5R8KSGaxFeoqZ67BHJed7hYVgXMF7YbvY1Zf7EqYAtRk2NiCbsd7PTFrBws9WU2iw9amXMt6",
  "key29": "2vT66MoqeihuAJeA5LMYLEtcmg2QtEK2umh1vuAGUzm4qSCL1wyA6818vfLefVQUVLnQfYH1HsX1WchnTEKdRNB",
  "key30": "5XzMnF5ZXjqbBcg2YqYixm7XMpiXbCceHdXdUDt39nfw7GFNY9TcjGzSVopku6SGndGTdrdDjJ43vJm3o3YVKhPm",
  "key31": "4iuvbtpRnoKSrEhxxDmpA9s4bG7TPvMDmJVVR6SCbgATVPieSeR6QCost7YQBW5auYjchJeR2SfAjFzBPzDgP7KD",
  "key32": "JW7CieHjtfQpZ3h1V7urovhzZnXiSMk35uQNZHtjcjiKFJdq1h2EPXpfPLNNe4nz6jksu4LsPVcr98hi2DA6aPp",
  "key33": "2GyecNsSkuK5VDfEwMqC8KEibJR5faDNDUp3JATrbDHWntjgczYHjBAWLDXRSDKJ3uwd7mdGbUJkm76iiGws4qGu",
  "key34": "51bEnNQuptBvCgdBZX3krVLsKomLAfhLCMi5sDsBUxfPUdav66MFXrV5VvcSCwcFuN9qJyTQv54oPNLFz57bGDX3",
  "key35": "3iLCVVfriGkFF36X4fHL5gJS5XTeranNPV8VaKf1CrPvWrCyF1Uw6ezGwseJuuhCZrUmMfEfTVt3Vw39d9wGSyxb",
  "key36": "3pQBPvkdEBmHfcf7ajs9xSFsnezorDr4ScNWPmztazjP5yKtuPySzzqz9mV17qnivXbzYSZDBPgnu4ebxKoz1Gmx",
  "key37": "39pWmeXAyZpKeKX1zGqHqie6xM7cAoM5UhSEp1M4pfNBMMctJpxeovWHPddmaW2sU5uDWW1BUrZyhQYjiYX2hho4",
  "key38": "3e4PsFieSpPeyc1UaGCXAfE41nvub8eAg7LQd7SVsVKj8W4FpkL1XTytriVsVvPLv5pLMmgT2KEvPscv1pNZLeMR",
  "key39": "2NVfUVxNx6fHfDsqjYsnArJsYShWyW5xqTdnj8gSqnMHsBS86bs5c2X3Kz4eMYssdFN77EK7aHMZ6PKNkEGLvMhA",
  "key40": "2q6ifGmMBxzyCHiRFhKsBkvRgYakdqmKsZJSBgbVCUbZhUogpj3EUDYuoJyMTNqVUjSCkyhrByzky1ViG9j73jvQ",
  "key41": "4xQ1e337osNAk4pGLE2269M2dRZTJ7c39otVDLHbhyV1fx1qQoXaKtW4UTK1Xz6yprXMP15Pjcu9iQxvUSDMW6Mq",
  "key42": "2WhQpWvvbdwh46nqZ7s9R4wjfj81EsptxmmbUn3AgAdHRiaTpz5BwC6z91u6VDvTuompWMGwwpuw6hxwXcR9pxoZ",
  "key43": "4xk4ZENJtSVaxJmJi2htnQxVGMrCDUhjaSP4rPx4sid2Z6WbCtLNvLbsKES5zjDt1vHXiLJ21Sw1cY711W2R2wZ7",
  "key44": "4DE4ZjYS3rQckrNhkWMrEaXMi6Hno7Z8QQgRjgz1GCaJdvZMsugMhPB9ZbxJV1S1gDwvnNRiQQC7c6qjezk2sjFX",
  "key45": "snMmJAbm2ZxeLGWKE7QDCq8o693R6jPH4FjXyaTSwUHHt3iSrciyEbWyKhj7ew4zp3DS775obi5xzEMg9yEa93u",
  "key46": "3JsNJE83tsuYjsTLZFmi2CBm7jwCRMdHNctHKm4rgVNvnjwPEqms7UK2XodWNmeRfQZceCC6hPEJz99mydfzn9U4",
  "key47": "67NQGNMfrpF2NQfsJ8PwZB16emaEUDyXaqSAxh4auN5aSBTXN7nUkBztHRdqA7CKzW2WmtGQePH5WyDxRb64fnpa",
  "key48": "5Q21Ntgo8UbQcg7gQPU1REcaNemJnjwHyuGrP95ycTob21nZEBSFs39CFufyMMYupVPCYPS13nKcKqqSfBH6wteb"
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
