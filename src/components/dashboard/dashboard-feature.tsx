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
    "tubA3hLK3qiZhB2vRxSYRrR98PbWhfqm83WDUMxbWpEccpMz53GGmN6oAnNjocMgKcuLMEgW9LgM8Zdk5yjKLi1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZVVhK1evvHVunn2xPpEKnnKNMsoKpDegf5cwaCQ73TM4YG1q8jNcQJDPCJyccahtGYUcK4MV2AmQGPs57xHk6z2",
  "key1": "2gGeA5zqGT1wia5DpU331h9fTXscjSx8fLuH5KXVFPiMqsbEgjo1qtGgkbj39ReadtXZnSHnuLJD4AaBG1ARsxeb",
  "key2": "4gGVBAZt828AxTxP2vwRxaj52GTE8NDqKkntDQd99YBB6hMjnerWTnWmy9k25CxQRUAxaRQVgT342HJFTBAxigS2",
  "key3": "4M6Sbc9C7ShAmyBGBzhNgNDytPDByvLgTp2Hfpxp4PQqZwBFWziN1RXXCRGiP26LHkNCeAiEbdav6ygig3bSSqKW",
  "key4": "5HvG8SgAEGBGyLiaWGGTdUgdWBB5kxkhDmju1ijhynoMGbH57rKccP2YVuSyFkt5WPgwfoDWAbEDFhsTGyAZr8tf",
  "key5": "TecjR6oKBuDDLfCV4XqVqm6RvHKVSbFYcjTn36LzGcdaz9kuhQ5VBDieFpdhbaxmtZY7WTBJ4BBp2N2A52BeR8B",
  "key6": "4J9nqpWqSxXjq3fgkE2MEAEXSvAyD6LieCbNA4oCMFqmdt9N2GPStenjhNkbQccPGq33kfP4yc4TjYHTg2JgxiJx",
  "key7": "2SgSTq1EfLcK5w2jB2ahpo9v17qH4V1dyTvpUwsyAb9wAFaHrrQWaWz4r593SjCaLLHNvaGbf5sgfEBQu4jsbUoS",
  "key8": "5VwoeJQ9Gon9iygQ1WiusKLpVS2CdzzpqAgePDAYi6vWe58tY2y3mvUgPbCLoBvdK3PwtSnsppBWeijpzCfojmjZ",
  "key9": "3fkT2jVRhbBpP3phvRCFYjYtUoxamKKpRaEUdq99DYK3MbcN51Pr2MpDNPRLcDrbDzbaxFe3ejLFiVytoWfacv3S",
  "key10": "226tP7ub3yTmFwm2Ag6XVeWnstrq2EuymXnr93c2hW6wyRWWK7HWPRsZQXdtqpms4WgY8HXSNEA9ZvM6rP7DuPHW",
  "key11": "2PPN1nqVBBhSayumb87agkUp5XWMLK4piNtdy5pPqYeVuhk79vMzkzxLLzmUatLMwBKERG1nJDT31EwwiLvrspAy",
  "key12": "5Jetc9tCAmiA4jENMVRjGaKwPzTB98QKv9RHS3rJgygSs8hcyzs5M7JWTnwKBgVJ7CHuaTUTTLH7xZV2to4EJQ2t",
  "key13": "3DMf37feYT8bsxRCGi7n4UujGkfVEuGDpx6fihDGaAVDKwgF4jDYqg8ucJsk6gbSGVgwntXTZqdAvegJhDEyhRrj",
  "key14": "3vmYJvTQYHgRSRTgCdBBrppBaU6a5fnXrJgVuzpMemntRC2GFcgTWZR1vumTRb8XME8cohjdKWDRwMqXAX4dkKFy",
  "key15": "2y5pKoUb8uJhXbQn7e7dhm1EduKHvLcP8wnZLCcZfW69RFQ5qockBGkgx3SoUspww2aBJMo7SSCUjSTZm7k3njMy",
  "key16": "5V5wynJE4pjAxe8bHF5j16HTWDJ4PhacK8PVVVQCsBSjva13F1Vwtec8Q67AuRcqST82r2k5CbJmKgrFjQVVK81j",
  "key17": "2ec5cf6VRFiXYgq8WT4sY7JDgWkZjPUoLQXvJYAyacgdfn4USRLiQfM57w5qSRsLez97x9UeLndKbTWQdCxYS5jE",
  "key18": "27Q5XUwL3wrqHgEhVwu5QrAvoDDoDBY6BCk7xtEVK9HmL571Xz5GUm7D42qGodK2FUJJKo9g8wEF8b1jBUcv8Mbw",
  "key19": "33ZMN6T6KG1YVVrWLYe8ZZzgtV4Psxeq78YhHZ3uz3xru1ncsYtLpGtDuqVfa9Kw2cn7uvrh6NXTPtpoivPgy6AD",
  "key20": "3LfUJiZt2Ykaje5bLEuAM6JjWRZwvoLzgCTQuL8qSsRuEGHmFtxLVTFgDT2Sy55q2rmC1NXyw9Txiq7c3nDvS8xz",
  "key21": "pRKrX4eRTzCowbcHi89Sm8RfB798BsTGYQsQAZ8kX8CVMQVte3Q4NvnZr1N5fENrX66Bi4WTbAezR5M9LFv4HMv",
  "key22": "4uj5s2w3eNFyuCp9CY2UiLqtYXGP5GxBnzoAn2dJjj2drjKPipGAP29iC8KfATo9JWstTM4Nv3B6ceQQwMonV28u",
  "key23": "2KvRSUFwXWeFZnqTDG8U3JS2EmsxdBzyguzoFVZANnWbuWePoYTAcPZ8bcsZkSduobD2JKqSjzkpViGWMRd4mdfy",
  "key24": "2tgbb5D8Mtn8VZmKkiSmL1VCb8sqMyNvpiRvq9xC1Rv4fWvEokxTqgRm4GK57WrmpHxbeoiLpTE9Fgj7bTvnmgcz",
  "key25": "2YP976VbvRXc9sRJdViJZJG7PNg6YKCThhfuJm3s7LqUAmMnoG8sKFqdnyLPsq99FoRWaoBg33YDtWmDmz9PeAcn",
  "key26": "4SX3Cco1SfnLEyKSFcmAuNUdKGA8SEqSg1kbzqvS1LZg8zn3bm4uoyyMBYkm5WmjoUFb8PvFbgQQxsnEaf6yWVoz",
  "key27": "51t6oJtC1dQh44hYj8hPMTx3VRW4defFheisNcrJQkoKXzXsLraBWaZv7TrV94qAK3gStunjb1ubxGSMdcBhZWpR",
  "key28": "31mYS6vv6F1zis4cvpyPN6A2BWUJeHSqhJaVLANDd24o1KuxAWdJzTRW3aU2dYk6VEsLx6hUevrfBGWJZQFLvoxz",
  "key29": "zTC5RCDxvWMuqaMtD9d99wFWPLCDsZes6fL6om5HTD5owoM8ZCd6pdDL8T2wG92aUMutu7vCj1SyZjfMaag3tGC",
  "key30": "4TRPb8rdFCbT8dVVrRiAXHun6pxBF3mRStTjnD7muxbYiB9xHerHubhCL73n7vkfW3sUQk7FoxVYRwZ1trgg1uQb",
  "key31": "2aktZdKqGYSZntcH2ZG4G56jTv5YK2PUkbyAnvphTiMZoVjrCf4Ap9zbNkUWq6f2k4YuZ24HHt4ayGAjCdoEEfPW",
  "key32": "5LajyAkRwffC7Kzz8KpfEwokf826P8sm7ftbHLKn9URneFjB3oEMyxJUp3u7Rr2toETD6eGY7icjjpj9DwFywqKX",
  "key33": "4Zxknn25KjJYz8vbs1ue39Gfq9qUrwKmPRQpsBdBtRLFN7wuaLuCQPotRJgPLcXtzkNoDLWfRy7Bcup9eKNnDw4y",
  "key34": "3vLc3pWUH8dybmJ2yF8QCa3AFodXb5TnrVeVBCE6xTLmhefdTtXVQj3TxyPThqqgxzA4XdoQFYpRDsRJ8pDkFBCe",
  "key35": "25G5m2PjF4sGq9Q1ueCP4SHKjh9bFTNgm7F2p1uYG2Ymq7YbKFJfk494FAp1CzddaEb7aAbzBpSx4ihYDw1cvtB4",
  "key36": "2UnVD2AKcW487ktKLiDruHu6fviq2qn8y9vfAvY35xTSwMf2pLWf5NtraJYdUjdp1W2PaDSmgetpQXHmrjmG3jjL",
  "key37": "4EmcfHtHfp5L8Ck52iPTe8S1ahatGyvzZdkjoNW9xTLsnxD6w67VhwC6PpKX9X9x1uGfS8JLGkxnWc94ATfeGqij",
  "key38": "4CoeDZBmHkwVUJQmGnfkrbUL2VxbpvC1WByJFwTVk4RxbTzf5PZhTuVvTwTDobkVmqKZWGjg3De7ZQ3ktv6fQJHQ",
  "key39": "A3xELrN5yzd4wfRcZ8YwPC4j3PLoawktZM8Cnqn5Jqf9NSjzLESnzfVrG3epTSYDp46dyq1PHdGZL9krf7ahmSy",
  "key40": "8F7rqpRza6sQUYcihC3r7m2m7gym1DmjzYDmnWEepCbEsNshWiRjKMY5hwwf4P2D7pTGMkKdZ18NP24tgrw1sS8",
  "key41": "4syo7DrM1m4ixRZ2t9WyTvKJiJcdkSHFAYcwqVKCYprDAkEJVJKRyWS7jXZbhwK9kxfmA8ctUCGKmVksFK9L8ETs",
  "key42": "3s2ZRhUAKecs6riYvpUwESr21BiXixGdbWcUhnrJdXrQ352nf378oevBM4kx1yv71K2YTokMevnGFPNmaYsZCspY",
  "key43": "yCUjKYsfKC4dVD7j6LyvAuQRfG29VRgDoHTofbkyUWJ9WcfJvSXHj9dUbTPJ1QVX8s2Go6LsNMQCa579fwPbEeV",
  "key44": "3Sed7GRTWVCtWvxxcE3zVVWGHan2cvnJxTgZcJqPnKetydoU8iaCkgRW8JeLdMezKpVwHvxB3vQfEizEPZR5SZ6o",
  "key45": "38rbyXsUcjkUAL8TKJZiMiPqLifdwT7Vf3ekov4LFpL4dUpe9Nk1BYsFmT132eTsVuMpkSzs9EnPMQXJBvyhFfvs",
  "key46": "5EzBxfjuXjcGXL9E7RLEF5beSbrTjisscefwYTGXhs3kMxGxr8GczkVWoTByMwASRzVcnpSVWcuEFgBSZd56rRNC",
  "key47": "58mb1goVjgN2pd3wrGYx4dnG93yaQowkCDFD3fFMxHQKTtCg2EiZmuydMLnZFJqNtqYNgVxtshPsDPwcUdBErNxW"
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
