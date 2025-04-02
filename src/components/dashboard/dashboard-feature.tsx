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
    "2TNKW2bhLUhnbKapzUhZ7kLY9iAczZqYtbmAqe3EdJB3t3ETFAMTNyJsGRx6GUJnCge81m9gCLASVx3Hp81dms2F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yTQvr8iErQSmAQMxGCKmrBPHyhJaCRFYXexNa6wx2vwRWaurBgnEPiySZ5TfEoPG9g8afN9kJ6CVEVZ8Ue3tG8U",
  "key1": "4G2pQEEbdnTxwjgXPvWchJ2BPLZBPBpPKUExR4zCqDseXfbv69uCyhFjATriuRuVeej1JBVShdiwktRuLkEFJZYX",
  "key2": "3ZPA6yXLwtvuiDAWo8hSyZLBwg3XNtRuELynigGZJCHEQXz6zEYzexjKC5C7XezhSnJT5vxozhWuoQB8kR8Lhsku",
  "key3": "2uGkwyYReRuwvwuvpfPoQVZepoY3AR2tA19tFZpUXRWz7btbZmrVa8PLyfEg8Mep7cqPGtpDSP4FBY8P39RMQ1Ut",
  "key4": "3XCfNqNWBiW81esTxXjWqQL3BpVmDWxL5tS2ZwPRMcSVGDjfm6Jb5Exb9LRtw8HKrYJjDrjyb9ysuUGxN6E5giYz",
  "key5": "5jKZ5GGUSodVJfpnpt4z1Q2jXqqdceqDtNPb54HV7jT1mxVfNS5bCNMaqzbLxgGPmB6xN14piBMMPyXsRZcgnjPj",
  "key6": "2Ac4ymqVYhzzb6UxmEZ8Nm3QQwfn1ibJukE6bicytTJYk1pkcw2ZZFsqFgo6HuZj8sZu1ZDaNoGYGZdLPbYx9RrE",
  "key7": "z9nZi1Domq4ggN6QtpQXJYM43NXYiZXpDfvhtJejXde5zebWqtbWsuBebzEht6Dd38a6BZcptaPUwYBH4VAVYf6",
  "key8": "57auEZjGZm79YGhxy27bHozzKDA6DHPpZw38mp4wK4EMsnxcetb7ibqVpuQ6ZZ8Vxj6HoQ5FWsCcvezgS1Hci9VL",
  "key9": "5Z4JeRZCn6fSEUu2bUYe891GWnZ2y4cf3hwZuWmExRUiCVCSaKgbYaGvxtWofBrXi7iCj9ssT91txu6wMFrf1Wwh",
  "key10": "ZegecD5XXZzqKkCjMHHsgTJQFVGmYEszYrb6BGtVYjprFYztq9nvjp9D8MJjYqeG4chY8Hh9FvCvkuQuX9rovWo",
  "key11": "5tDLbkmje8KcNHUnvDgTTZNytjBaqPUdvfifPk7tCTDmvEZq1QiT9yPXnfqKFzbHjP8dc4xzkdFEsGrmfmoWF4Qz",
  "key12": "2hDTmKXfj6U3ybbf5k9tvdNtyUSSt391637DBq77NssabjTrPsMPhiGF5ZCH8nVNdJpbBmTvynxFq1zNnmGFLmQv",
  "key13": "qZqbbQf4wcCNCUmxkS1KPuswAZmuP8CeMPJoatHPZ4krf6eNqXd7sAcqAFTFMfGUE8T5EccWg2SAvbDEZ6fUtJH",
  "key14": "3ifX2GPiYyxJBVoGrZEV9BpoXxqs9q2w5ukkJX69rHMDS8QNpyZCQB3E8z1se53zfVuEDA1gnix6FY7n4eHr73R3",
  "key15": "4bt5gYh2a1QX2y5xBb7wag9aRLF2rnVUkcL9QxA6g7Xc3aHQecSv2vqvPPzDu3nWaWZF6eragXRrShwn4z3hhayK",
  "key16": "2kdhLAMjKm3PkR8mAxfwQqaPdD8TjaTF9Zz8UjV9fzfC9C3FqdPnZrr1wvSWFtyuvjXVs8qZRtF7vDzHQCFvzUFv",
  "key17": "4EgVC4xirkFBuqPwLzaPVtz53Ayde8UgKbpg2tyGUbfiT2MQwDAAPA5me1uHvwz8ugXsJmRqXDV9a8LHjHyWhDBo",
  "key18": "5y8kSYSgZTtmVh82dMDGjNqdsHEeZ9rkgWhdJAdZvhJ2DmfL55oUdMKfK15qzSFYFyPG9CzDP5BwzkoWdkfo98PJ",
  "key19": "3ci75YVnDurkGadUxLsdDSWXTuFowzZtuxXmRok4cb9XXMwCk1RLnmDvZHoRQ1aGmY2RoABGLViDjpS6UMdKLcu6",
  "key20": "5CFGHjVGbPUmkaAbLHjSysgEZ5GUbyNTd4LYqskLb3qxAk11hDSE62RR6QDwfDCrkRtTqBfFXMn1Yvcfbp2UVBtf",
  "key21": "26iFxG42pEfZZkt5tMDfY7hUjwueLdoF1JtURwVoj3RQkG7EvhVar5TJG9dNQiartniNBx278ehqLE5fn2n5Nu54",
  "key22": "5uB74Rv9rVWbk35yeobCJyfLPntv8CpsZbUQM5pA8uVxswPDghM64qFaaWyQowWjTHe72C6A8mugYmLmwoSUAE5T",
  "key23": "pazEfsKi7PrXfcsLdikZxAFnBvRBj5Wm1QzNodTrUtKQWLZgQ8gAL7RaGghB9YaC6nqaJZQU4TPD72NxH7raSDb",
  "key24": "5GkxMUDv2w3VgBfe7JAEgduVUeqaR58g5vir4HbqfKAJSrk1PtnadL79W6wWZJxUr5fhF9wnJGgq2taGWzUuSZcN",
  "key25": "3VCiegFx3aAcnXPeHuEQTTc6YtNkrhoUGvYb9tFGgKMCCHGaGpiEHXhnJtGsXJhsT5vFTTKKkXi4CK8Sv9iHGMft",
  "key26": "52JNCzdjkfqFAG3etWdZCCzZnh2CpJ1LvRfgRm6Hdip1pXumhfsz3RS1fDeSvdx13yghd6LgVgF3Qg8jPM8f75Nd",
  "key27": "3y3icb4Wo6Vi4acVs1SmvmRVHU3LBFix1smctK4XH2Q4Z5XCttDUAoXuNHy4QVfQ2r1Gu7yTmW8rmju4dcCZZqp2",
  "key28": "5AH7vfWG5EtMyyrTEv9kwGLny29vcDGvgdXcwerV4sornaWszuM6rjkUaNVvGLwfWHAuNC1sRBZUquNrCb5daYHi",
  "key29": "37pWtfbPBYCfZgRjzMzmRZpHZqaAHy8EA79fBakWhpjxDPT7uEFV26hG4VjsMD7nc1LLA3TCaWmsEFWyFYrdbch5",
  "key30": "4JCSyRPAFfsB1GokujDVLWNzyCd7Y2EH14h6Ee2E9t7Qx3iBeYsLBSV1QQyB1HPTg9A7yw9RCcNW7e6Nu8WouPQa",
  "key31": "4eYcit6nRAuadNmQQ2zs91rYm1UMG8Z7NtnXcczWfRBhtLLVAtvghB8CufZCK8pGkHSWtb3m373Wn63uNamyVx5u",
  "key32": "MeN4jQbrDoR1Cf7NFzi4xDAsWRiMosenhYwhe1NV2gFWSXNSZkyws9T6xwbgqcWvYvQVfD62XRNe9CJGQwsKFzz",
  "key33": "3nCdFPgDZPaPeUjtMisKy1UDimbpmniDPZcLX4yuCm1JxgRkkWBLw68nJdCigGCxQren2YdD6UXr87eHPukz4Yfz",
  "key34": "3GfrLadLPAnZym7Ty1ormzum2XtmeUWJUwT8nx9AkEXfgTXYYtAQjWhdEGZTqJNXJLo8TzbEsozEdgT4QpRAup7J",
  "key35": "r4gLVsQRz64c4eqimpiWdSqwRTo256cCqTFzAVUsC7VPVmhh1CWH1QiScg1neVGXRFRMVnYmXY6XAhC7RbuksVu",
  "key36": "8fbUcsZbJL9QaFt2fd4hACzDgbXZn2FzVmw6gthkzoR56ZXhy67oz9F5YWtas4FLvAeqZHrmx7HGSRmKUAqWePC",
  "key37": "T17ZivoayNwYufFDF18mW6kqGuDDiWnj28to4DQdDUu6SVyr6CoMYTkzYmSe2ArpGUELfX9ji5aZpbBRQz2CgoG",
  "key38": "39EYhC4TLXbwhzQmKgQ5Q65Mp3WoYu12STouaGy2XDGaDCQH3vE2Ld99JX8f3ApAFsEvGwmbLM2vF7Q459QsNspU",
  "key39": "4jNEA4StXvLXTwCNxKdDFoUvU955s6tkFmy2QnuxZ9VHeq33rFF5ZgVJM8E2M7KdRe1TrBRePso5tuk2d6oimfNh",
  "key40": "4HtLVhB7hhmj21Y2jrwAsqXXD1huK6bSkZMm99ubSudebNiEita8n5HWe5PLbeDtdQ6Q1DxzJtZhwdqicre4j9As",
  "key41": "4cCQN85KNhc1FV7bRTmwWVDuiZWYUx3StXKUfv1ukGUJ7JqwnhUMuz5732xPnNRVm96xxzHC73TsBWPyvSFPiwSK",
  "key42": "4xqY6rkgCiKKWzGQN9wfPeeuRY2ZjWiLkKMTxhxA9W4fo5twgamY3RUp8qS1taHA2o4zfC6VZmTQ8Jo9yuBjuvpv",
  "key43": "4E6rKaFueH1e716Nw2YRWJ65A2ga5NJkbLLvxLtiw3injCm4sX1GbPqm4b5DKGXUL5Gazy5utp8s6VtqGPZe1Zip",
  "key44": "5TaA9AmxSkrBPGCE3htUJWFr9Cia81f4oWYxaArmHC69i91UkEyJxrYNt6QCVY5yjH2NdpSBCmshch7rUHbvGKxD",
  "key45": "2voPr5sKkZ8gmK5NhU6uqUiJHdv1dnCgVy3yGGcodJQZX836wYErRNk7vib2i5BN5a7mRRSCRVh7DbFMvKzoRrBA",
  "key46": "32KcJmYs1TquA3L5WZGnoeyaFL41ctzz1REptqxdTjzPy34FMnGK21DGguxuw7jDXX4JgqkbSFSj5aheu9iEqeiZ",
  "key47": "4o7hzbQ2wjQqT1QRz7JF5cepyA35wFYu7oY5F5WbPyEp56aJmhUDCrTeRZbJTRQvYmnhfoBbvWpttu2JYymMv4yd"
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
