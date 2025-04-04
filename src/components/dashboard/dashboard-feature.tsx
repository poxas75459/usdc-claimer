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
    "4VTgSnSkk829F414rV7wYrjRCMSN4whBA2JdWjirPVkAacxN4BDzyCCaZTxAgn1KySKCbtNLU6GgCtu3VZuuPhYP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "464SpAkUbwRPzLc8fQQMTqFBVepqVSHHxJ3eAgbkWUUcdtat9TsampzxuvCYQusGiMadkhnG3fEQABzPiupicEWs",
  "key1": "4sRLAHqdQT7dbKbNCuM7tmzDBQMhGEbEPTDpPVhGq2j4es9KkYVn9V8LfputU8fWr7f8mZ8vTEy36FtXegvWgYf8",
  "key2": "4QXommptLqAzj1PWoNsvhBm1TwK15CEzdK64rsRdje9RwpbG6AF9VeX1cgAHQxjxJB49VRV6Z3ZebREsJtEkvLfy",
  "key3": "2uaLWJLe6rAwz2JjUDpLu8LdANGEPRfk2auejdqJe2XTKacCDm2zsHX6w4fEkJxo8DgFxivqXgP2wV9JkFe2dN93",
  "key4": "S95UFLfQXPMEj6M8h4b5XHEBBejSVATjkSa9PSPLXEMFdr2bX8gCw6S5WiaWdBkctiHQgxnMVCocCUV8wsgxPZf",
  "key5": "2uHsewed9wusGB27ykXtxqxKUvGw8cjGtDiqy662SowsYAW8wJKsLuE1oBWcUVUgLAoRn4RQFWc9piNQwyBKHKV",
  "key6": "2vSEqAZxLc5rsZukUDeDLHqCSLz4YPbEn2bN6K2XgJJALcNKM46u4JWmLjxdbZGAXKKE2j9CTpWEbKUMhzw6FxgZ",
  "key7": "34cF2TobBJF8oo2V8PPPBcHczjGK3cRXVWARj8cSYcBAXZZJMzcrSWmPbmZQqoKJGRrwS92FVqSVj3U3bRkvNwPR",
  "key8": "2yKjecZDiED17uLBvQ5vUjTuJVc9SiAWNqyQgWs6yKNwp58za8cHB4K55GNyAE3wucMArznyit96kR5Jp4fUsKmt",
  "key9": "3SjTKmfve5cYK9uPeh2d4fdgYRP8nKR8sJVw4uofrr3oWkgDExUZKh8wy7C3CCRuCysGEjgv4oXMpHeZfcLozV61",
  "key10": "Vg4KnKTzs9buRrLLYurdR6kX8gXkiXWqCFaX1jBdd5wLVhoPHWAzGsudrRLbQEsCd3j4SeCSeBc3ix6kLYhXAUn",
  "key11": "Q8xU8yuYYFBei8L8bWTrKuyUCVknyx1fH895AGvsvzWg61DahMVw2J2utXVCxbnbPRB4SpQmEEtnQZVAWrJ6A2K",
  "key12": "zvyN9HzLgR3BafaeQwtshWJgnQBR7njgYRm7tm2hsfSZ36tinzAsdBAwzBCLKWyvTC2LezQ91pER52gjEY5aPzw",
  "key13": "3eTTJ9w8x4m6vwwDzDPhT8EnVdMzYusoW61y9zt7fE2o5GmpynR9ttt3iPpAEPcst14nb17DxmPsQmKHT4N5EaU4",
  "key14": "5M1tpMv9e2uiyyfMiNgdGnUFiJpQr2xG5RLoqhaPy65CtevAG6Fc2wyrCTgQDFNnKPCoanb5XUsKqtXDRHqEyB1b",
  "key15": "5icdtbrECKgud3z4nLjeTFoBG2jXam7dDSqzuPoU7Vxxbd1RPeBB1gkrbYBGQKnTJyH7xriji3tjeoMuFkQR8p2o",
  "key16": "2v3gh81zCcGWG21cSTTYgaCb8zNJiLjrkoDC425GfoAjmQupSgpA1C5Kdy2e7t3tTd38w2uACi9rAz5p9Vx4vGAA",
  "key17": "2j7dvR2X2yohtVu8yz25m9VWMfjYosvK8uwvk33J7mziEuR3CurdCLw5HwbKXEEu6CLJSZgEJZDTS1HSm8ipZKia",
  "key18": "3YSY6Nwvng9s6uLurGaSbRbcZvhw8i2MukfWzPgWL1Dp281q7FXdLihHNJdTaFufrLyTo3W1Rqdx4JiPyk2HSRo",
  "key19": "2CVm6UZPHb3ES8RkDHq9pTiZaR7zLiEwuCKF3nTMEUqDANB3yr1waD4L5CDvNsckSJq4r31icTPgUf9FhcKr985R",
  "key20": "5EDrDFG4t71fL9A3c7qrXMSATo7nTojHwdBapA6PtX8XhHo2k8AyGQtFx7cDZByvGPiFTRhiJ4sajwG7Yq2CpsfN",
  "key21": "UGr9jJwSwnnxGHDJpnK3T9e1VytUGbbh3o5ExMdBYDJnx6g73tvdpDF2fKTQvG21r9yikexHwHctHrux8H5dJ94",
  "key22": "4mBcwWNqs5C6hrnphq6G2sF1y5J67rdSMk1dC5usjCe3Z9NX1UGP8hHzEpLJu9CCMuhLCkKTGhRKjTAVxrjfiw4k",
  "key23": "3KetGp1UtjSkjxLPb5wR5bbgUvKwvetxhdFnqyy6M6WCForbmpkf7sKyvH8dQmmfDD9gqhCaCUqDUtCqpnxPnjVW",
  "key24": "27MRUpYmcT5mehqbNT736i34xeBMkUq525tLLcp5CPrBQUDXr7DLrKbsBcRbQKQQERzxr2d9tXtoFWhUKrT884Bb",
  "key25": "2ohSH8Bo23fiXpshMpRwuPTYnNf5nCBYhkHDnDgnjfMAA5dfHUvfqjK3TXCG2ALDNrExiw89yhHjLSAu6FPVJE3Q",
  "key26": "g1Vbzw14rkNTVPgrbSk944cvJjdXp6TKTPKZKw73wPASx5gQLrgTgZ49919zSr3HtRb4VRtHbEkeN6cJ4ELgd1T",
  "key27": "D92pwYKjNyWTexeVVEAvZXbpDgHxC1nzGSpSdGkDWsY1NCQwK1AqDW7yJqzekTD8oFrLkcyDaMXsrhbHwic6nEs",
  "key28": "2H3CtqYxg38zmk4rwxinE2dCohpTskzS57K5CLvKc6BmWhc5693zv9oUQ7iGguviuwj5kE2jBcNuSS1w1YN4hbUb",
  "key29": "4z47wapWkJeubNRd2PdYtuudAJqFZsZLq8kJfXU8DF4a9AszxiURB4Aej9ntvqPxBLTHfEM7GXe6MW63QG3vvCJD",
  "key30": "2UngrqhPkxdjhVJPgGC1vZUVECf46VsZDRKR1kADS4VeqKHp2MoDQFtKWXL1Z1DF9i24j8p5ScVGjcdJc78h5Fme",
  "key31": "2GaH6zmunkgpRTPTSqDVKYPoZuvc45tKKq6rEzEvs6qeGpTfxRL6sApABmtrtFyHPtAML6sQsRifg2WkMbT3xACB",
  "key32": "3XdcDKncrJaxyjzkssTyhvLi4tja7y1v9Jxh2eLGTiXPUgZnoqwDktUTkVGNHRSAGwog7BTnTJRxAhaCS5mS3ZYh",
  "key33": "c3z9bF3zHEBUmRhd3xzTnyutaQ1WFQaQVMghQ6yorHuNpmz38esCJWQvxPgg2CZqiPUsAiDF9zBZNw9iKwdgrz7",
  "key34": "24GefknNo4mhovWUPn1XFgKAZwBzk1FnjuzfBDqSMc7B57aHZK9p5QgG6GS7cfqKw7G7fNmkaELcf8nGrPYbbmXt",
  "key35": "2EJNpbpuQKUtMQgeytDG7jn7GFjAr11QYGMtmLxCyzHMW9FYWC3AfLwzPKJjscv8fwubm7LSFoEmvvhj7Vq7yWhF",
  "key36": "hKMqMZ3mfefFto19XeeEwzfDhbGjQb1Svzuoie3FxErqV8XjMVSSSPKY3gWeTPSP741E15ztXPEWg8xmiMZUkSc",
  "key37": "3t2mf9Jgh3qengN4vAmq1UUTaNeXS7VuWCaFeWTbz35KhK5r8iijdaLMSp4uUCyPK48o6F9d7xT4zjc8rSk5RuPi",
  "key38": "3hhukkXofXkzjvbhutGjvRUMscFqwDyR5DHpyef9CoZnr4p3pBdPXV97i1FxmA7Krwnh9MK3uJv1L8e93GzVTyBH",
  "key39": "3Xisfd3VZgr3zdZrdmAz1DuNxcvKcRqAJjfPgPzWjiByvXKevp1hmRsC7waueiu26U2cGu1x7qiVjvGvrJLgfiBD",
  "key40": "2XcketvWY2buxqgzCD5LjNUVjar6bHMpUhNQtt5HsupjHQeFhZL3DKApAVyzX4CiwwYBYyCAUXpeXMFJ1HsVuPFi",
  "key41": "3NqXMAj9hTGQpyUtSrsGknfDTvHhrtwojsjiZe3CNBJC6X5awh35o7sVsy2hRJxNSfTR5Mw14xhge9VbtZ8NLuHC",
  "key42": "5t2hakUPe7vna3VYU45kTBBCpYhwULmPjPtJba1eeoy2gFiL3y5eqM9khgYCEngVQeMWQHjcXg3zJGuysiA5fSSS",
  "key43": "DZDRUzcSLsii219J9qDpPBPn2HqhNpyNytnxL7MoZ4EEAyYWEtNmFDT3to8Lu7n4q6XYxB7GW4N7bivXaqHYgjL",
  "key44": "5uVbKoXkSZ5GujLjxDhMzLzjwHfFDbFJpcndnhZDX9PNDXny57X1zU6aKQW5TySNm8timJ847Hx6gyFMHLqZ9vkx",
  "key45": "5yFDtQPNoTs7chUBkuwgzoah8kecXpDSB7EtE9nr66Mh7C4bZRiisvzarrwrpkyVRh2D1oNSRLDFiddAnsEQVmon",
  "key46": "3qnYg3CEZs8R8Kc1V2yiNuKmHEYvZyZ6JJDTyFyZyvSjGCDVUNTiTAdusgacsKuecUfKTMEHWbVDnKs7n3QUPunq"
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
