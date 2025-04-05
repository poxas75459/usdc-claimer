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
    "3LQpCSmJH3SuV6vADNNvim6UB8HiLU1YeFG1fhdF2oTcX6UJUyUXKcuc3YxoW24GZ9jacK4AAfpytbvn91msCSa8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oCZp42qJxj4YD42BW9e7zri1Tgv6TQVRoKC8M9vG23QDY1DBiPD3X2wHMDCFmyDAvo9d2Ss3vVpgdpincS7MUs4",
  "key1": "49j5MHxLL9QAAWCVRkM84eS9fZTcoYX35EHt5iRNqFsU2WEBUgKHJZ9yePKt8Zh6cp1jgsnvcF7HTGwsNNvRnWu5",
  "key2": "3TRPDSCj5eYmvvooZce7DnCqJpzFLa5sodwJjncxyqwJSYQxrAX5iBehuyVJwGyH8kYJx73eukH7q8mHrVMfGycS",
  "key3": "4d2qahQ6GDyLCHqt2PaAa89NvUKCtpobY28zn7jDBAM2y96BoRjAWEr28ZnPMFmWcyTdYYV2s5ftRNVrDMQZYARu",
  "key4": "4Nd3eYx6FgNuJ4ApcCsPrCExeoBLrgtGmneDqWL8c85TQc9nkv3ytP3ofBJJ4t5B3SNTeJAkRHRSvdtHhoBiYg7M",
  "key5": "2QigfcyP2dKNYXHpfd53rfM8etanAEK6Y4tdjuF3V4qLjY1cNoPcTbrk4EJTM78PB2Lmxvam7ZsdRCfpyp1kRiuy",
  "key6": "CWqdtGecgysKxsMWFxHocCG8DbF98dcWG1v1U5J4zrbxRzXoG1iMezYHHdm6RVWJfvJV6BCKTYh7u7AGZ3MSFXi",
  "key7": "5LjTzuHwQDr5X985MFv6D4RyTtvCJwK6gAXdPXfAHhAye3CvNYMjbae6EYEF5roeVNzmgckpzJZvdR7zzQf4Wftm",
  "key8": "27VkLbpJQpbY9eQ7SExhkDVcUQWnytPcu7ZduVVo4dbhx2sZPPDGwKD4femTTugCZ9vTwiX3cKpFAFWDn8jta5Zu",
  "key9": "3Y669Z1rtZTeACsmsbdNYEy5anwsojx6ZiYQBzE1ND15YZqwv6WTxiBRJCNq79QP5QixR4uxKESeFZ1TkotTdSeg",
  "key10": "2aVP7VqkDGduaHiu3SbMLy1gzegPeEQTUjkbdJnBR8w638C5zXaovHkBnP4ftqJNAYLJL8fwvXxCqCu4EVDFFNzL",
  "key11": "32mNtz2VPa8CYBF46YRmgXMFR51YpaWDodPSKeJ4jVq9WbKdLXCfYxnp6Nb6XKyeQ69dtHSGt5S7fhDe39pqiv5N",
  "key12": "4cE5kpRBG4cSFzPEzxQT98r8xmaML3ZaBHdH2Q74w4CE8WGSiy8KJvGMEQFyJ4aiPL3s24tCXZS7SL1in4zfB1hf",
  "key13": "3ykVwuq5pJ2oSg4AX6aD6SUpt1SY3XFe8jjraGwkhVhDztbLLqbmxn7qMubxHwzfhDjkZJqaDwJKXokeDgSGkfiF",
  "key14": "4gFBP26ukPDK9u7eMWcFpkuVSrbt6bJb53qCBxJihA8xBRKnN9cM17iZBfVJJzb5mSCzL13DUHL6dPexthiK6sPA",
  "key15": "3kEGTtmVr4LAm77VXC4AWztF8qJEqXc1ZyuGHm7SsSVFKSVj2nZCnSVP5ZXJopd9d8ETCJG153Hh7bZYunoDEQ6w",
  "key16": "4PKcpUqGeSzLgCaaUT7d5D77EHxZxyuTHfhxU7vT7Pz8Y5tr8BAZAKCWuwwxku5QEZQuWBML4xiCf6uAaWj8UCBN",
  "key17": "5tqqqSY2feQ6UGkK8Fg2wiNMeXA9j55XKf3AA24UrLjK9Lc3ipYBHWd1sh6U7Wv7uRDJHx2G3m9bTejAPS9hpvK4",
  "key18": "4ycXSrYxmZt7yPNLkQUGeAVkgYqpr8c2nwo8DyN8hHEo2gStw17ATH4tmr9F6KJFAnvwR4nyuUu4X7jt4Zw2DaY2",
  "key19": "4MgQ62Q9uh6mYeLCXn8uMh1UwQniV3GiAfVhSXMjWzDabQ2R9rHj5JRAmuMj6C3f6G3JP5woDTUKP1PVqvLwqtJw",
  "key20": "CW9XAC66LytEm4iribFE6ZPPSNyRrbnmwfH4mTzQHeKr2cfyv8dDbJSXUx2jQHcFXXDFmYQzJPcy3xCH3QXMNBx",
  "key21": "5mCfuxDYM2LsFtzrG82CqwjMo7X68i6gRbQxyB6jjgxmGVZcTiMpGkaonMrUKy4AGasGuRcjDARQgAQq34SiMDBd",
  "key22": "2CfdRDPd4LfeCWLKNtJQfFMs3dVJeyeMamCo7hp4u7gTj2f5E4DobCtLcR5UMLozGU7GbafKoJEgWN4TEadoTYDV",
  "key23": "4CkhAVgoD1KusNU8uLjLTxfPxWAKSbUwaZMMJbXHwJgyD9RFcjk5EvxfBxxexyy5hvA8Li3Bkyyn5bPeLfTkcXrt",
  "key24": "5FSEz5CfyFiekwqjKi2oAAM7vgTyCXsJAegQvc7dhj3rxBDLLPXUx8r7i7xddAr6kyvBsCigoGNStVZ8xqRYY6PZ",
  "key25": "2pLWVsXEz95MSvuMQikL1XVMD2cy38GyFsHdG5MnBRu9LRs6NYGow3Y8pAVqN1yPud6tyR3C5jvNxHgSfvttnFQ3",
  "key26": "2hQni4FDvAdN7LhiGvtPCLtoJBd9qBp86YJ8qgpE6ZS1QbrhdKqGtsZMW922RUcG6EFt9GNz6EpbuHcYa813pZF5",
  "key27": "4N5cQVq37ZZAP8XWXndGjWb9oy3RzSvMXWrAMH1jGFNupPmR7RgiLf21wQQZ1jmpDn1wUb55KmbNiSDn7bXGoj9U",
  "key28": "65C72ySP9sVp41ppjg17iEnTvQhF6neppB6zSXji99Aj3wcK82nzLf6PeXWJThnvQQ7NmTNXfdJPaWHjE5W8Rjf2",
  "key29": "2ykN2UUREpCk25Np1Zw3Fp4fCnTFtgYKnW1bHQkh8ivngo4LoXrFQbSnmW3BUnoyCTsiVH4uGR3fFrguXp9PHYMy",
  "key30": "5qj7EZBPLVcz6vYnRkaWjkX63tmVfuJa9DqFErUKFAtShJfChCHasVPG9rYX5cexzU8nyqMg4e2B1qsjASo6VrXT",
  "key31": "5rUZeAakbJdCVuze5VHWiY7Ct9NrLh3gTL3cHPWQex5GC4MRvnYy3dSf3YgU7T4Cp3rm2NjMW7dvy2cW5XnLZ1Nc",
  "key32": "5kvLt2rQ31enjpBacv5X3iRN5Xg1sF6hNYdZ13cWy3pZZ8LXDmGQDeEMr1tp53eGyZ3DgPX5n8Ehhsg3RpKQHRuz",
  "key33": "2riVXGzbbEb9zExWEa9ZpYEWR3THiSkDXsfcuJmceXQEpaiSsSkoZmb12PK71ZzxJdeP3PP3J8nMmYiQZ9WnnbKC",
  "key34": "3L1Uh1JQCHH6g6nKigUNE93EfmDVdQaAsD7RQYY95qzU1kSutgm6nA1fWzAU8a4ae84Gt3XnMMgkdgXKPNKrsKs4",
  "key35": "5piAtTupxUKmNqk7mCNvygheJ1Y2kYo31Lqek1t1abRVQC7HyAfPWHZeTeCHdJWGbQCyPCrpuTwh9ywBYJrQYGgn",
  "key36": "5hT6yZW1Vh4U5UtnYY1xtaAWvVyDjeGWMkDyyfknZomcWVX9ZanQJHXpo9qjmaLGk8V4nmVtgknu1Bsk3SqBvRSH",
  "key37": "2b49oFbFf6fR3FQimboP1mfrKKZdB5TJXxGPzAYtZrdgmtKrWg6USgZv3jjL9wYivg8uWsmfzLFHfmkYyrvLWcjc",
  "key38": "5q9YRxcbKwXxWHtNh1bjDcbQZjGgNsKRVNYRENYAgAR4wLWMwx97mHKyxUR2gMNtzwxhyffybsMj8ZQ8DQhpnUeV",
  "key39": "4tzfHKuAmBP1rDrTYxHbZR1igMPMwR3Bmdnjm5LY4gihUxmuHqiy5U8J9bSB9TuHHEx1mfMZRQijZWF8z5DdWsed",
  "key40": "5oGBY9n3cBcv1QcBTkKHtPBxX1dnv2zvS3FARToWLCLPFDetFje2WCQoS55D7ZyUsEhPQWsr67wV3f6La1cLfATc",
  "key41": "3ZW13smU2x66VbuwNtxR1d9cJyuQUVAbnvYkQM2J7Wa4VHVK1YdGJmWz1R6JpbCMtUkZxt9jG1VcmH3c6ZTGqp1P",
  "key42": "3r2BULctzGtKWaepP4FH3ndSbGp1sg65hkg3Zkg7gPP6TZC8QnDvVreKXkov2UE96EVtbSGLVpLNW5p2VwWDybt9",
  "key43": "EaqQXfXqiZkpvpPbyvJNRuPuXKdwixboDCZGzjVEpQLsdhsxfozrmDmkxhHGVyUaZZhDEZSs61n2GyBpbaHATF8",
  "key44": "3PpG6R6uQ6smc7EnMqM4LUHnGq7E79EwkzV434ryjyoU1XZVzj4G6Ui1KztVftz2aZ2xd6MFPz5mixwBxZhD1Yrt",
  "key45": "2U2FVg1bFQC5VRSTPkiTNUZLfo9sG6h57QijMKpDzeKZ1qmw2Y3WbrUsLfi7F2MbSpuRo71SWisSAMiidYbxQzdj",
  "key46": "2gvSsW5QcJuEW3Zsewp1zvwsobfw7T8NB1oARTo1tmet3hnM6ZdWtQpVDeBsDtXinicpJxaV294QWA8J5WLt6PoK",
  "key47": "3c1WwiTa93fi6YCBnXhfFYtmBonEqrnSa9crH5AV6zNMxP65wg8P2SBco4icxDFpPVXnNDKKSNPTySNcVLrzj8aA",
  "key48": "3fXhrnxe7rFWBNBA1VkQUh6SChp23PD19LxtCyAGbwFByhQru1z5iVPZRKdoJReJJkGMxkdbHh7U6nEJdm2DMHv4"
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
