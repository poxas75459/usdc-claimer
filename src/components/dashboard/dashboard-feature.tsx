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
    "2Vx8ZhZUTJp5Kr1uma3u7Yx1k1oGJyTmjW4tsBtcrRFgFKBhSSX4Qj5fThkTxGATwoXcTtksGE5aG2GLpnEqjnvr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H6tviPWvA7Ah3qZ3PhX3f8rBaNZobLKsM12asLyPU9YPeiKDAzMUqnsVLznHxwdNPVsf17KFyEPDbL5XssvzDRp",
  "key1": "3cuBMMNuAomuZmvwPhGYq7LfzKHkq1spDcRbkhGuukBhfFmWzwYrqPsydwpSr5UvQ2efzubjQfzgMsdbc5Y1Ya77",
  "key2": "5dSNDJiEHUjbdUDZ24s1S4Cm5rS7JGKYBQuSbHSB7jfnYH9UEroq4pZxsPHuoYSMKbnYQXRiS3F4BoQzVzVivRCC",
  "key3": "z6Q2DxEMqPawbriVyu7Q3cqHaicba2fTXYUFD4z4DAnQ56ZUCrXmT1RJVTuKHun1xnrxtpqYKcJGBwLAVFgvsXt",
  "key4": "5MSP8QLup9vkRKHfWxBnf4ej4Cf7jmdJMsMLTRBP9WybnLyJMXuC6DGnDQLauJxUGPqLXQgCcVuzerJzq7kKVMHA",
  "key5": "YfVepU32CW3JWGQjhvGxuseXcGZqJSEDYepncUo415xk16gFMe4BWoVLz4ANU71wTE6caS7ckQotsH82TmGLmYg",
  "key6": "5NsFaRWHKN5okWLEp6VEmQZRHrcpmSyasDNaMsJ9jJGhu6SWjCHXwVxxxVquJAQnX1ZrCh8giZAnZKnpNB2vHBSP",
  "key7": "3mY2aAbJCjJrkYzqr7s2zZGFWScuggmG14PcfU7Zj1XzT1R5y6WWwReckFq2A1jPUpmwikZXqNEN5N5bMZJqyj6b",
  "key8": "34EfMqsLb8GYjn323HnTbDgFSaS15iCu43Ave8RyJb8zM7WK8Zci1fgsMdwTirk4H5abt5DY9tmkAp6GqDNPZEk9",
  "key9": "Po2x9PFKUKuvXZR4YcR5z44LN84PHMdq9NYX9JroLKXMjJS4BWVaLELZfepGAknQA8acVwmu6SgGvzKgUbpptFe",
  "key10": "3h8HHSPST1dapm6EWqfHtnZyTGddUJHZNLaiP87TMa8DZgGZt8bXHzR1qRubNtSrj1y4SKjMxyzhLuhpJCqR9Kfw",
  "key11": "22hVznXjaPd5cYBVs3yM39yKaXb3T3xAgDae7HvDE6kNPZsPQ6Cszj8NHjbzCWDUfQEFUoFRJdcvr18xhY1kdWAS",
  "key12": "2h6uLUyZLhCbKHDkJ8W19eV373apEipotBAcqbzNk9VynZrnQ9hWWqzyw5t2emiTrvg3jqXSM42TadNqZzXRDcqQ",
  "key13": "33c1VDE5iNmVGm3wZPqbqTWpdLBJU4SyLz5cWVamq3UncEAen2js9Dprhcgth5NjjgjWCWZ3gW3dPqeofkWjpqqF",
  "key14": "5pMT5k7GPPHbP9A3CqXY4yPvbbwrK7epJy4xVg9EZc2iqvePFgPynLyLvDA8RfqeWxVoR9Wdpq6omFpWWnNy2Vhy",
  "key15": "DVijiMzei8oGP4FPa2wWNgLeuRrGp99GTdNiKhyo8JxwCg1XtWe6f6SP9rehQJceth1uERyu7EbaAvoPWhRrY1w",
  "key16": "4vXttCT5q6Ys3iFiBcZ36A8myjVrmXBMDPmnhHCTuS5haz3UVoZWq9aLpWzDCsqBZKPP2nNBoTJhYz18BEc9QpRz",
  "key17": "2iryixH1957hstkv9UKxCGrArBGxn5SG1eVwEh2Ah2qL2HBQQspwPRaydLQwBottjqX9qrUfkN4PLp4nrgy4DDzm",
  "key18": "4Yq9nCBoqB55qFTimtutWgWKbHWugvHViBvEYKZhxZc3fYsQogCV4LxQvGjSA4KJGCBwL8chxsqfoCw9GyLKfBJH",
  "key19": "2baJAS3ToWAt9n5XUVmeCUUdGKiMgsS9wzPdUBpi21wJ68VDqft4WyaKQCCtoKBj5N8hNTKDUXB86hCSXQGajWyD",
  "key20": "2rBZP4T5LScVcWXJjBT3pzpZhJzYyT8mFkWThapdyKopmhexuDPEo77Rfgoun1cCBm2egAJjEFY5voB5rxBsLMU8",
  "key21": "V99LVz7L8Uhza3tookYcEPHziMNo6aUqnmdWQjq39LTVFbSCb2CkabXJPZ3D7SQC5BeL8eLCxp2YAtSnFfSYsVr",
  "key22": "34FobBtjW887ePaYX6nhu57wYupCw1oDCGgNmJKcReAHdLUm8dLT5EMNWffaLJ3C74c342DembFkpJp2T6xLDcTM",
  "key23": "JbFhEdR6qCfmwp2UwzmnJR7WLYgbiNedZNMh4r5G8b7tUEzxQczorhQVumbT9RP5nVtj5fhQBV2D4JoctzPMBsq",
  "key24": "2JHafxeG5SejR6KYjTsWYX5wB3BLgJMVky28a5vKQUSofxU5NVMAwj3ghjF7qJXcii5RcEEM6nEZhZdEgTot2giX",
  "key25": "qQP8mSLqZqUzCo3r54N6o6b3hdPLhsviLubsZyYMNTH15K7Wfm8c36pWcKvGj33eiNgSJxUUiaHM7xS4MWwZajg",
  "key26": "5xQFQCGerRPVgzUAzQ2Wp8Z4XmFhhNjD9Yoi3qYERujQCVS3f4zhgKLkr1UEaZBfhQvqLxYRvUSDC7bzrmcKbY8M",
  "key27": "2DERLo49K5MNf9h1fQB5Mgpk2HVL6MRJtd2J8JBpVwzQXzrrK8o7nfWW8dCQou2PnzsYXkJ27JB8CsQPPprYD9XA",
  "key28": "4v2oCrzoz1269uRwaFJaBoAtDukJMq5UViYGsUzizz5Jr5dw4VvEuQB33wr2G1TUcBwU5b6ka2Vsttd2pzfJRQq6",
  "key29": "mGtzZMz7DdzKP5dP4LfnshykDTWDRZS4rHQZTQzH1dS6ESYPqFvZUHyRbg1L8J9WCQPuKpLGnazKq5RxcHs9NUr",
  "key30": "5x6eqvmf5LVp2MjFyvE3knqGcSbZPVtEYrp2jtjA9uSDzYmqRdjEQhEZWomseLfnzbuRS43H4SZUpYX9MNqSPVaQ",
  "key31": "2nKFduraWVF7zaquhKf2dEfeKcqp8YpfZG82QsjJ2rZfHcGRJHeHT6MH8P7RiWj5QDERzRY2cf3TPeab2utZ7Jma",
  "key32": "4QsA9JVbLSPMNwEwWtpuTT24z9ERDkMyGhuKvWUWWTw2Vei9dmvzoXHJ1NorYtcywGg8L5dcE6E2mE7drk4uas1Z",
  "key33": "5DLCTV1AQ8vtWmr8q1n1Mmvh6r8vw3GAdqVtmmxa3bDmnuTjyWXHvvCfF8BoHrTd6AWu6ch3UobKHAi346KQJHyj",
  "key34": "53aY2zREuy6biCDY6umLKvpspFCppqC4fUSoogMByY72xd4CZwu6AfdytggYKv4VZ1bwwy4QTwqGcEENLZweJt9G",
  "key35": "5BgcSMnvUBwWSJGPdPGH52v4haKvP4A2Yvmhm2btPdyDqi2r2Uv3dvbPkHTnGsfqenaWbtatTY5irqrVHSK12eE2",
  "key36": "4vKuTK2CCT3VRPD7HRrJYV6uZMWWbigVFtbYtBgYUe67rvspXVP7W6M1FuDN3A79rxUr7HNbD6ni7tt7SStaViMP",
  "key37": "3Cc4uLAxYc7RDenvmzrJpJsh1baca37a361JyVXdJBgoQ3PAWBQDHhxsxEGkkjHgb8Q1vouD9ec8x1D8nuK1sX8p",
  "key38": "4tPyGaDNLtscrPA2WTdgF5d5HmsJUKJvpdE2ca4Tx4NevEiPB79ExXaSF96dp9oSoN5PWGKcnFBc5Ubr1fneauMS",
  "key39": "57TzL7abmQ4cEaqZjDLwPhhSr3BXYnKHmdSMApHzv5yASsjm2xsyTzPfhtpYjU9o3U7723Gc7qdcZLAuSnDAXFPS",
  "key40": "61S85HjJgBKAjtZzh5fRHrPTZnGKU8Wd7mp8kx4CvJDZCXd455LjfpT3EDMMyK6Yktd8b4ZhqqtuCfcTCd6EMYAz",
  "key41": "2wy2z5pGddwbJRpuaMuquGbdoKHXFvQGiC9PiJg1nKgz6wKxdWL9e223bE9bm9WQM33HetPHuyFPevxonboeBYvM",
  "key42": "watoVeydm135DWyWRFdB1cowTr4xPt2RtQLJh72KxQJmbRYfKhNiYbURjzpPubfV43RgEtNt9trVRBZm98FRunZ",
  "key43": "2g14e4vUgkZfNgbHHnzxBFa8zqqNFEC9JS6fDs5SynBMxwHF7ucLPi35dTekN88FycuH12y2qhT7R8WaCTijh6Bg",
  "key44": "2RBLShU4MkcyG4W7QLCvdFwvKNgZ8wniaEGgJ9g1td9iEeX2kxrpgG9yRsZhEaWGS6cVu6ab7oaaHXe4azBDkGkT",
  "key45": "3rNHEpyYE1EAeSHiyCFzvwWDNrehjdBzTx83JGmLVW3BAhCrXskyMxBVtsrXpCKw3orWVLPorSoZRTHhHSMwdRTD",
  "key46": "2oAy2itfrKkwoKr1rySsahSwRhqyKnhLrMQ6nHyvnU19KqozLCCcLo3f89vj2UCfmLj6Ndkjnc9ZyPWpMadaEiJe",
  "key47": "2VKhVjC99yxoadCobhVyop633EvzSa4mkGnBdQw1BKRTx4Ddxs5TSfBniUcyNYRSnCPe7WcLpcoQnaKFqjfwo5Hk"
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
