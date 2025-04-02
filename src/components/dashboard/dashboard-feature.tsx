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
    "24yMCo4wqLjcN3PWmDVxvNaDAvNQtf3WYWHDG2ERV29ZM2gUpQRBqTnCS9kAdxdFcTdDHY37fa7wpGuUo2NnTPrq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z57n7gQbLDab2ftnjgvJB4jDQwLmS3ZLNkh9FbGQY5U3t9UZFWi9LexrvUnnSxKPysiyyLsX6M4RbiXQNR8pGgK",
  "key1": "2qMsUqVAQC8BkvEyEssGnRZy1xtVZGJ7yoyAmUc7jFZig6UrjWeavLs6tDnLmF496PyV3iMrzWwpqeimMkfv4nwS",
  "key2": "52KA5Rc2NZj52BEXqxCnbL2mPsCRwXoT41f4BQWJtEHm4oitE8oDEgJ3s4pzGZ57TKh58AXUsCeCRHg44C82To61",
  "key3": "4CJXZYz2vppotyC5uWZCw2AYGbFN3SxnAjU6YG74XjsPxjyTEuh6wECP3hp7VgL2x2J3uFjAxJvMbmRdAXUx6WLh",
  "key4": "4ku6H2nH9pA5qDEDXkFS7w8EqCXypPBhtBxyVkcP5jnGv3KgxqZE2jzzR4FXVSCSnooB39RjWy8h746bogSAuWxt",
  "key5": "5jvBFf4SKQCuCR3MiCmTbnFTZfgdRbW2eHTHquPa5wVkYGDJTRDWrw3LviinaR3UUgwsZkjJJC8jA4pCd18fVkve",
  "key6": "4a3jaMHLuNHAvN6wBNBL8QuvBvXDypuJVfZXwxT6CDgSzB3xhkwMPBWx1EKY1zJae1K66gMFtwFyx1aEY5a9tdBX",
  "key7": "2xt37KDNgNpVtu8KGVsj4LfKfbeiahNeaiBLtUUw6C7VMK8hyZ5sjKB3yrapnySoSEARWh6JnveCwTkjTmqbxPwR",
  "key8": "4MTDbPDqziMkv2ZtsPLFbceDyhs1M8gFs1WWe4d8A7z9HEA2bBD79x5xdYYiPJjjzjuCYFNd9ok5AXyCYgDXNyKM",
  "key9": "5jsaaB1q6Uf95igXcfP6UwuzAj29uiCagi74WSJ9W69NhYTYa91wgyWXNqds9m94PseVE3S2jaUXz9BAymNVurkM",
  "key10": "2fnzQsBLeens1NAyD3UxU5gMWqxhvWmU3PaqvbnVLUah4wF1XBFyTsSpiEDzjcg8p3DdwsMxum5nB5LUFbM9guqA",
  "key11": "5ngNWpnfDH6ZwfDiJvJmeNJQ6WXqFCbzq2Lpu3nYuZGQc9X3josK4zqPqdswPgpGgUWz2APL9MS8b242ytgYv6C1",
  "key12": "3w7WdJQsD3kGRDcrQ7sEV55BKvroWQEbxRM7nKS4ccxnmjU6UxgMqUTxiiA9SUXXKJaJ4zpmbqaTr997egq7CLjj",
  "key13": "5yhhVktgyBnXf2botBc8FGE1QDMUW8tmAe68LqYUk31upKiZxAdiBqZPc4A1GkeqsZ81vHTJKS31wt1osAabX3y1",
  "key14": "2QMNjd2iSJXwu4cM3fxUWhY8seiXEMvHGcGmoMyDWm98nuRzrQzqJXJSXgTrfqjhYpdAFiVSkhfo86Mv5X27N9T8",
  "key15": "54ppX35QqsJ8SWjt4SRrKgyY67njfBKFrShKsTBFJJaSzRALsKFECWJCTVi2BiRTvDJPbxdUtDVLYrBy7reqQ57j",
  "key16": "3xPceWwLyGpkevPxcf3Ms6gYjrBajtVqh1BteHwZEq56Ge9nB1QSFiFoA9cwHRGcF53ncMM1aAibDKuWpHp18LrU",
  "key17": "5AVLMgiGocG9bocJzjKZWDGmkCmjY4dXgyAVfNuFnB85KKMkaWxUsZogKkofqej68KEKPVz6CioQ44v5gm1Hjaaj",
  "key18": "5uJDiyTpD7EJQ3R7LEFsfckaw1W5A9A1wEDBgUkgiZ8G3uqMcLubdd51qQmi3oHfUhwF3QSuDWRpAk8nBRaCDr36",
  "key19": "T9cCjAAqnCvwBu8Ygv5tU5z3PeRm4up7E4wZRARV63aRdNbq3sqxkquG2yvaWM25DCU6oSRpWe1MLcXi4ci15Nz",
  "key20": "3UzLaD5M9nFCRQ62TXBq37UGdLbbuiAehdT5YCZRQcrLPgxL5b8Qrme3STxmKArgbr3E7E3KCq94RGpEy6VmXRU3",
  "key21": "2iRTAmWsivSgPUeRxKErgCu8frELCJGsfyinKUaVaoiCHfBWXCCTGHzuM83ShEfxnkcap2LCSRwxDhHEmix9Cjjy",
  "key22": "2iyS9tL9YhLXPBqVEV6FpXpjyF2RGoiR9VEFR4DbcomEfCU57ongQ1EXBJgmPpzQC8ck6vRjFNiRgVwGWPu3HhAq",
  "key23": "aSCkV9mCJ51HT1K1bniNDYETMk1GR3Ny5qM94Ak3EfhKf8TvMPMkUwu71GegwHg1vJVj5JKKYLkgXcEs9LXipVs",
  "key24": "3Zh72HJKhqFNf2aHmE11Y4kuJF6w8JxYeuG37B7n6k12W66m94vFUGZNzqKua16rSsETm3A6k345SDEEJm9CsYCs",
  "key25": "5EYFJGuweHfXRkxWKJezSErp7Z2faf1HdcLzdjQKcxHyShN61vAJ6iGr3cJcLo8FUpWqshS5H1efD9Z6UHYmT3qH",
  "key26": "gspLH5HTvtj15PmGhUymv3ZFQJBYZFWznKpxdQtNJe3h5D3RNnGGiioNr6ALB6ivH9ZTYV4EZXt3sgYer9zuDaj",
  "key27": "34Lf33kbccEp4bpQhSsesgnBzynT6MExbLYU8Y6ZgXVwkYdMEeaT4VXrFBTmE2p2EZoA91cYsDSj13oba9QNYvpK",
  "key28": "axHqkaKhPX726g6rBburYHF51bmc26YUncA9Sfnc8qzftq32XtT9Qh14c2Qv8EtmBDo7RQnVVvQvvicnoX3ZeeU",
  "key29": "4pWYFwBZrFzaEmFC64zAdL6bcQBi7sC9qChVaxYiN3VQvx8U2RdrGHKWYaAFNfqjNpF7tcta2Wq8ZEreCh3FFtqc",
  "key30": "29fcj5TveWrsg8HmPK6TNpyjwtLSHQjDA2W28WzPckv9Uz8JV7Q5bzjcoYGGER2577DQmqbw8e7xK7ebeh7f446k",
  "key31": "4yr7mhYevDfD4jiAK1tZPEvnZn8givwHxPonoevTntfcCapjNAg5ZDoDJiQWR4nv8HMeZLorZ1RSD8UNhFXGSQa5",
  "key32": "5md6tR6QKqtGopPda8R4omWspTyisypAhFqyVhVcUjWXNft66Bs8KQcdZZQ7TG9fmyfSEHWkAVS7zK3nU73NR1kX",
  "key33": "4M5cVZgAgt9qzbSbvdKrh6kV76DvVic1Nb4SZJ2o1AGF42rLdSkAHcd4x9vetRrgmQYSejh48HyKETLXuKe7Fhxp"
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
