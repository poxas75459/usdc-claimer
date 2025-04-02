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
    "4JHSjWdMtNT7mBsXwfaftFoqzu8WVhkAUCPUEHqrzX3xhr626ewRuyF1yydYLfpKTdcRrYaR8G6os46oD31uTHRD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GxQ5hRanDrBJCAhC5QbsUGHXfGkQNsvUyPE5qkMbdeALwCL2wzXBRzPLKkUVwoHvC5eJgKa5Dck46QU3Fsf9GsH",
  "key1": "37dyzQ7zmAwhShhm6QsfUzUUo4tWSQpUVH1D9nhbibN7Fs4BW9ABM8QJq7zRS2KdgyGmh5iyLSQr6gMJYnUtAm3i",
  "key2": "w9pyKarMi9Y5tpp1WAfj1aSVzW2t88xEcaZvuQmYMLHzvxbGKdBU2Y4xBByCCSzVgwHogHAzWjEmPj3mpnH5Bhj",
  "key3": "3W5Jb8SiCMiMbu25aTuaVV4LeSDoA9sJPdWRDqGrbAUc3ySbxwc3BAuVRBoGFPsVp2ZAwAiAAxhfQaxUSYg9Njse",
  "key4": "3VJFKrp8hKppa5PUxueZ2Z2Xg3jDtMMCJMUX7LENoMVCH9P9FZ4Wx8bjas1MmqXdV3SY5fzqLBucTYgQaH8TrkH4",
  "key5": "8AcMfy8TnNMCZGmuEhQMJzPxqCNiefmG9k3iGAXe3xqT4bEUYHQBw1uZoLkPTA67zkK5KSs3eSpQ6YY7ZMkmTDe",
  "key6": "5AD8CZLuobfLxvKr3QGkjk2iowr1KKC2dFuE1F282XA3mGTTTaCbJLnbZ5r7QhUEx1ckeniyrdB24nCmvEPvEaKq",
  "key7": "2Bk6LyhG2fP7PSeDjJZyqSB83xsu37oveKErAE2ZihjCVHaJSXcGruXppRcUiKsd9XZd9zeQaCmV8pumQPWbgopR",
  "key8": "81EH8fTeFjfmnEBPQRh4WFQjQoscSgyC1ccacru8rkMsxKbwD6AUVf8dKceHDFmgEkFXMTzGKH2jyZV9tLTZEbT",
  "key9": "3ZkhzRrhGZCeLK3j7we2A1ZRSHErni4NuGk5MGWJRsygyH2utqtPa5woXJJDqtW9DuyjxZgJbAxPzzqJiHq7eerF",
  "key10": "2KcTpBWq66v5D7qbLb3Rp3J8mobKibfTboKsZQnbf9ekwRT2eaKAjS7oK7ntuXycNBvw3VXA8kiDmpY6y4izan6T",
  "key11": "4sjvxQy2nAd6mJ95ZCjRUpP5w4msMYxmLBjQMsgnGqeZx5xVWYNXomUBCdR9gvbkGa1cuZep3QwJKtcF9fnvRfck",
  "key12": "4JJfNSFGJVK5hM32FFpJvBn4N56WqSkvcUAL7caBwYWL3R8PwhUcAmA7KMsrKr97fNWdrD3YTrrNttDxjnRpxSAc",
  "key13": "5Yqcapk9yMaHS9qgfyTrYtb1EfRKudzQ6bY3Vp92cAFDbi9A9EJhm8vkyKLVyffghm7qh52iChBRdDFsgkLwsNwe",
  "key14": "2QuAkwXSLVxbe9kwSE2gm1nASzrzQiPNzknaYqFjvjJDx5osJzDu1QAcCfEVGPEhBCXoe4TboL6U2ZB2hC4kvTcV",
  "key15": "QvGt8KFCGYMsWiQA9VEZNDEhtmRPxBfGjYB5huPzoMTQCp4Aj5EfB9ZVGTbHgGiPvwX3eB81e1jzSTdJ42wwZNT",
  "key16": "5Nx22S5ANgWYTkEwVDwKbksE2PXvLmU14fHGiSmVE1iwuCeGAkFdbUEKn2ZgiPBHheapUQFWP7AMeVxMgevqQBKC",
  "key17": "cgZcsFBE9vERMmHXrvfFaxPTyMAacW4TiZnMHQyar2JZJ4UDfnTjxy4DU5W5DozgsfXSS2kU2Vhr7ki1j31nCWH",
  "key18": "67YWkkEdcUAQFjq5myCF2GMNce1eN3bbFFSruGyVZ3PSUjQGoFPwpfoBzCNkCVGQd4D4htXvV5ztVgRmzHyLU4mz",
  "key19": "3v1cRPPsR8uZQFAhzLSLqGeFzEPPRWrHJrW4LyAYtzXN5PJ15CjTMf5mLz4pLZ97KP58j9JooUd2XMMrXacPjost",
  "key20": "2JexpWjAZnaKx3zSs2BAJQDs9J6QZJ15GccBEdJw5RK7FtPBf7MhVKrBGME3k4kU5fwMgDDfHJmowiJVaUmSb4GE",
  "key21": "4QNpHr3UVZsuX9TChe7cKEZWwrQY1ScMgeFwZSxHArz41Dfi3sPw3nUKdCB98poXDD2iB8uLAQT6G8wpPPrjGYMa",
  "key22": "5G7JyPHvFdhZBR221qwPnaCjZ5gMkzcuKYrNAU3p5bizS93qZGH1PjBmv4AZEZpTGVHvBMr2VXvL5LvmAUGMFak4",
  "key23": "uj7X4myStR9CHhSTvxc1KrnrZjZjAQg5MCgweRGeivPEykVhF1tR8AqaabBRV97dDnhc6Ls7s7QzKNbN8rn97FT",
  "key24": "3kdeLxbw6CiyjxQ8CrfVAo9Ap5RK2Kv7ao5B9VWTJBxa2xpmg3k2n7Gby2bKnxuBkueFTESaA3SaKiWr8g4rj4ks",
  "key25": "3ykpudWjoq6bt2raG2oejuLLRjxVTc6NAaNFyzeS8pfmDKECjiTQqeiS7sZRLyzZsU5oytqQbXBFevpDoSdifVRy",
  "key26": "vwo2BcQsUAndmjU777amCZWVnFPGZCVezKC3QUR9xPkL87osRU4yqCDMDYU6Jg2X92dNMtt4kW6RdfBMf6KU7t1",
  "key27": "4CarvSf1Ku8hsXNhbqiZC2a1bn61fHNHEgtiYjQuyhwe1o6yrSTznVCmGHEATavRMB3a561fQtbr9Dx9M5sxPLrJ",
  "key28": "VABGiPC21TSBGUaNoGii1KYMS1rFrG9fGKAoKf7k5BUZ8YKpwLhYJbqe7uvxqENtmE6MD5w9YMWMduBsqYh8euP",
  "key29": "5HQARV2JW1T3mxZ3bj4c6FzrvnTuFhGrkLHf2iH1uWJaGkz8q3k1HYDsFFo56rLiug1hHfUCWFZhrJtnk3JRa9sJ",
  "key30": "2VPexq7orPa7Phvs3dXiW3Y7h4jLDEXaAxL7T9ZtHCCNtQNp7zATTacmpGgze4f17uzwgLHmjxLsARAuiebnM87d",
  "key31": "1MqsQTmfuzt7KMzYvr7my5JjCrBL9mceRGHZ7aKGaiMrqWcGNdTnvtWUMHuVPWfkasdvw2UbmhNyCCTt7GYqgtM",
  "key32": "Me2RoqyWLdgyWNfmZdx7XnwUxj5yX6j8YCmA1VRtNaVDzHzCmjb3kMV5PCniqyUs2EdfQo988fBRHd3pEuzpeCC",
  "key33": "3DyR2bKpWCfdhNtca5EZ2LahnLDRVL62vbTfYHMS4PAe6S4RtKJpmaMUXmWhPD7BC2GxwoiUTCYyKit2w6RqREut",
  "key34": "4T1rfWvC7kPhX1USb4UdWHM5Zit7wWr3nbLjhq9XSThdM6uWpEYhmfH88dnt65L8WAWMyrxw4SVrCvU4bwwEGggL",
  "key35": "NFVQVZuiMybRiqR6ED4RBXtg3Pp43EpPThf8pcr1qD5ZmZ1X9WJ1Wgdyn51fNSU3jfVxzw63HsRv9EH94FA2Poj"
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
