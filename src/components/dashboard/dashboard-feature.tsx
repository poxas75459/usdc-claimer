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
    "33EvqWrKo6Ri2HCkE8RNc1MZpkq3PY8Ysja2D5244y4PMxtDkRLurra88ykYeYDTJ5yB849GicaMJ67KiQkmckYB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hUjtsoiTBhTJLidRi4msjwuPF11EoL4Dy4DR7bspQTSBCQvFXqQMNBtqv6tndgYfkWd8rxT3vsCYHSmX4wLTPAQ",
  "key1": "47umKHpP7bTSfcfhuWQBUUq31hngKLPqXViakoaPsNmnyJErK36vb3D199dnxd15qYFzgUMsqMasTFetaRDmuGsn",
  "key2": "3jM8LLJvCgKiK47NojMyEjbHGP97sFoTDPMh1afbwcPJ2kGiAqsaiyAF7uqKH8ScSCMwFCJgRv5Sawpyx6UTyCjc",
  "key3": "enu2BYoRUnPR6B54Rhv5vNbfzj3pZLZYuvHic2fSaysDJfvDhskeS4Lcrq6hiWLy3v6RhDnZHrmhtgyWwXr1ext",
  "key4": "3N9wg4nJNTQUViVgA3qwwych6JvUUeEeVEoWqCzkaBSJLu246DKFTyS19FnDhiPJQ1EuALkMefM6qNuK4KQy57UK",
  "key5": "2UpBdfMi86MthLWTbmRFqPfQmU8YXoSHw9aaprP1SLtZwjWV4as3997EnPX3rSKxLRrvg9BzUAFZFhFnj7ntYdtW",
  "key6": "fgz7AvvGkt36HcF4odndfSVBvQRn9hLkqFocuLVrjESmnhhXumh1TXbY6xAn88TNEejqZ2widKBak1V5bvvSRUT",
  "key7": "2bp72CpXVDLJpv33DRgxYcUWmHYEwKi3cvQoA9DRjK5dgUQE6c1QbDBCA6mWwkkcAFqn4p8PtmdAidDzJ3fs4Bii",
  "key8": "3nyYFFhAX4vLrdTWpv5nCrXRpJix5wmvrbFCksCYZWvTBx7g26n9WBiPwRCiJuPUpQ3gMyUHV6n3fs8jCN8ZmiYT",
  "key9": "3byWhWYFAfCSAiadV8oEQHEuB26cRp6m7EThu9NoQJaLoNLGWdSWjwgGv6ARUkAikyzWxnVa7v6cGL8Fyd8Rw5B9",
  "key10": "3X3JNEwT7qk5QxSFbCYNxMYxxLTGgAfa5ZT8nY8HMhssWwCdNQr5U5d6JspQHV3ZS9szyvfnEBXotFwov77zVAq1",
  "key11": "2Guoy1vLa3Fv6prqcUY9N74BUiM4GLgk6zXpJTwsRXe4Q3Wfy8zPR4ZPSyMmhzPWqEJAKJjuf8aZrTEyVDDsJKLp",
  "key12": "5cE4QLbwpQ1vzz7ZQVQvudPzwqqyWLskRYWou5xKHcwoiPirLKtW4tCt6rmgcYvgQEytSDijZEZQJNn49bAvmGRh",
  "key13": "61Ajzp5MZ8TzzMrGfsHb8P7FKLiJujeTGvpXdxVie5Nijamwn36mdkJcWUCG9CwfBwHtQtYbRmvfWEbfuk3phaaw",
  "key14": "2536aug2uERF5YmA7mwmWMdRHvA8tmn5ZeaWxMh7E3wKhdZ626qye7j5QRyoSD4YkvdXedEHk2V6KHLByPYWadSv",
  "key15": "25jR5wiFQWSHNoYGMT7DP5hP7uBK65BbceD9ukLCLwWcam2NSPzeS7aPUSfinVpPS1RnbwGnBUd9jGzJH4dE8ZcK",
  "key16": "1MFJmdfjHnMUR2SRiFESje3ymTQXSy3TPTaFyFKRFvuvGsDn3ABkuRxJjrxwAqrnbqQUmnoimELoCbZJB9KXQ8E",
  "key17": "2RLbpHXJp4v87NggBLGusggqax4RtezwWtFxPVZ3CtaZWPnRQcryv3WFZZT5is67oTA1iRb8i8k37qGYXsHARBaz",
  "key18": "5WvBobXMB3pPPUh34GPHUW4r9Vf2Ds2BVCuhGoGPdWrFpziYYYdYpryaCWkrndUxPMjeBBs7hdAQbZKwsvkgHZ7H",
  "key19": "6Z1b3DeCpAUimegJfcRUTo4Gqcvgmb1hCxjiAPHQZFvghY8bnDBYN9guuXXRxwLho5e3PP2QaBDRnqx7dYxdGg4",
  "key20": "Q2AgNVrMAimoV8BiboG2gTzDsSJr6HaaS91xPsRaGvEoEoSCQnsFxW4xVBgmk7BWdLbGyJAgU8sVHpfWZy6B3Mw",
  "key21": "4q6L1SKBiJX5DXv5oPNmFB2TbGJiJYWgu5QBg8vLLsYoc8jgKq9qUrEN2VXLRB49owmKumxYGaz2xiEPTmznoNA1",
  "key22": "2qpA2fSjdpdikT2WCdSR8LRXF6gnfREBxEd6qfB2NKR4vDwc4zZRnbFsy68cLxnumjGN7vepdDj5dYXD6UzMvC4x",
  "key23": "27RvzZ6mVd5295krJaVcZujh6SGLpFEGPvF5qQ6pCof1MpCPGuMgv5WLk1ELzz6SKcVhcm7eqb8Mf8A7WCbuxS7J",
  "key24": "334D7UTkwWnGGpN2u7Cd34kBZ76d75yehcLEb8iYZzvTrWvmcbxspQSFKydfSRR6WeaLSSY52qoARF76Q5nkHG3Q",
  "key25": "3bCPhJta6EFeN5dNdnxPJgZsANysPZ4sCbT9ovFRBU3AXV3XsoPrgPKiCCpkjDeLkEyja4SRyd3dLrPj672Dwwcm",
  "key26": "4xcC44fAgvhgDkqs7pgcYvDyb5kqyv6mecvwnJGLvYgCHaUUVAfmF5mGo1no41hfWE7sP1K1ohZmqdUwj27Koa59",
  "key27": "2GXi7jFL7BUENfryaEZM3QKeqp2PAMnbeFtXnDy9gfTjKfiNKK7z6es9zpbSGPrNpFLiHthRuVZU7JdUF4KsiCdT",
  "key28": "2rBdr4tXZ4wZMpcDckTJg8kLRNpxQuKNXEqZwsr6kikyWNc6fAVRtWRNbZ76Q1X7trKGp9PWQejhmmaGGXCbajef",
  "key29": "bTsow6XxnbyDjNh6z23V3XGvND7rHr1dwz8XFaKTACxpbRFNFB8xLLn3BrSBu5yQXKGD29hUtbM2hCASnnS1ioL",
  "key30": "3YadGePLrMa8y8k1sRqudLT6gQqMwPekxp2KiFGC1Fuo1GiFCfwUWVRKiJLHR7yh2SpjNPaE3tYtkT7dBisQZRdt",
  "key31": "3Cv3DzFpND9bwqt5dHMJ96qZ2yn17szU76esSMHK6xjgjq9T9syhsTyGaghFfanMWRm3ooAMXt48ReLekgTumUa6",
  "key32": "2RYgYKmSEamw2uUnWjLLyeQqvcCAtnSXrDV1V5gf3uAKoF5srpBDCQcrnyuxoqNyctaQgBNvaj6JoRrmQm7z3tJw",
  "key33": "bx1oSHfPWKivGYu7aGLf5Nry9jEJPMvYXkuFAUBT3W72ymRihVjmngE1ynoBdMYxqN5vJx2PkByqTttyaBKTEbX",
  "key34": "4czENazKsbhN2Fj6RgkSNoZeybukt6X42hVxTUib3DgJg4E8JsWFcUkEKmYtxCpxdQq9qjCHraJVfMoa77dVaLdu",
  "key35": "5js1LzbhMo6t2PwGSKA4wtwAaFfsH95ZMf75vGeUFZnMWLmXfzaNtJLpratfEJr7KUbBBLreWjqy1Jwme9XdFNGk",
  "key36": "2RSVEiZJMkGnrhVaeGuBGi1jw9jjoMNRGFpDhe5YqxZUTr2tEYMopKNibuoRAbTN1CQ7BDEbEYf79PM5TnW1qquj",
  "key37": "2GrvpbQNWgjJTGMzXRYomLxJniC4eXKqYXibbmLgo3yDak5Tz6zomumRR9zF68onQd4hM8SWHnumXXVpraF4R91V"
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
