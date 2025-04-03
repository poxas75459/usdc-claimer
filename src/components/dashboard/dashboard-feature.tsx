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
    "9x4PFE42kHPNGoNgxFjXEak33znPRAPiPVAiW9rQRRJ69TvYbsK5VZvLZY4b64gDhyN2MkofuPgK7163NjiK8Yb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fnfjvc2YW3dP16dQVvdSkd7VCN9SdAGiwALPo3NpvHtJfWHKoS8uLVPsvLB9ZqfHkRiNojD4FHGupMwG1VouVts",
  "key1": "33BDZemT4PD3Koam3qQbyR5fFSnqSNnPBCd1EqqXJsxC8xXLqzd6wnMdUDo7MZqWBZeqG52eREu8kYYHEycN3ccv",
  "key2": "3aZFxbbXJ1U5VyBNjcuwbUNjJJysYQ433ke3d6V3gb84KkVbYYbCVvpmNuvWzD2WBj9An9fffDbW1xJhNqBYdaRa",
  "key3": "4UQyF8CU7iq6WBmCU23zycy9beiXYgZdTbXdJBJ8Crcc6eRZmxpRDoJMpMbGZT6nxEzEy6cMJ5mAMbFiGagLYjpQ",
  "key4": "ayGDEjSRZN523ktMX5VU74MJi4HJ2UTnLUMpiaf9LJe2GoL2kegXDZPRry2SkvtkcEJBkznW1r4Xy7Tbc9TniLk",
  "key5": "3ZQeaDKpafMxaxex6FvQmB77ytW1rNLgS98zjs2c9nSyUJQi3QeLyS4h5xR7QmZdLx2mrRCZnE2JgL9C1azMUmWc",
  "key6": "5wnhAuLqRfgkUn3qwBQyctP9L4nrTzkfCUuHMVPzfbw1zAM8HWQyT5f8uepnWUMcijnZtVpp5UXVXK3EZuBZaBq1",
  "key7": "3AJ4vZppttTr2rnVJjUmErgYJEs41y88m3DWSnzUMEkW9Qyx42RDVLAF6fbVkGhi2XPadPaowouTgVLdYqjGmLxX",
  "key8": "2RVYk56wDAXb3omtfUAGABNayb3Yd1eDhEgePmLQXqEfiJqJ6kMk1MD11tPxV6WMwvNxXVpsLdBFzuAucxxSbgfc",
  "key9": "4JdqRMhNuo1oyaisbJj3UjCB3E6oaXt4niZtcKRvGhDZ7UqDGghUWNxFFT3ST6gH46v297UNva7AsvJmsVmSn1Fa",
  "key10": "Fdxvf9vzKiALDP3oRJ2yBWSdJ2CZXPkdZfws1tJdpd1iLL1iuymJ2gXMjopke3pUBfFAGo8NAchiGjp6xXmrPqL",
  "key11": "483K7pF7HNyHciuQ1PW6s2kU5f837afCLkESKoAJ2FAgpoviGAGem4wjzPqDi7fLr6hxaF7LEqMQJdgGeSHw4Q5c",
  "key12": "5YvfhjcqmUaFCY1eZBbsp6h5BbnRmjxzJpUPcEjK7gRiaWp91msPHUD1Z5yRK5pk4govo5HFu8zjDx5rL9nWP2ER",
  "key13": "5euPCzJG4wCSSDErqqnEpcZQ1Cto5U5GHW4PQvfKDAqeHdmVbwBNLrZQhEnQhvL2pCPvV952X8HQBzs73vAoEKRN",
  "key14": "5FznwuZPxpuATNoXHsNGSFvYJPxiFHJhBEV1dCtMtTeJ3FtNd7mY4WQWhH8XqHPnZqgwNHGk6dWVJdqJD4uFKDpA",
  "key15": "61NsV5Bf6hLZCXk1ckDSPgZN7jmk4RvXqWJxCXTCLd2YudLtgNGUk7T7r7TgEJbgv4jnEDz6C4xaFxL5cxovn9GP",
  "key16": "4XxQ5Zjeou1i496UUFXXzus2N4EPxfabfDZZzESRtMFmAgWK2Zmf9Zvu9Rz3rFsQx3TUU2BtfeZnpLCqYD4k7NwR",
  "key17": "548nAczupxYqYFUbAmjjSHV2pKj3QdFr7p4gxBKm12CoNTydNJtrEvqvBwe2GrSSaosxyBQtTeV5AGZKHd76Q5Tr",
  "key18": "4zA5qQBTn31mwHMsy38evh1iJUKKdJbHeTXDV44UCb4E7a9VKExJxFXeGMtn6neArNAwqU5xnT5z1DujLixwMtqo",
  "key19": "27tcU74G8B8n5Gd3d4tAybeo4GDFkJZ9K6KuhYpxQALy1M2vnq7f5S32ne36YH7RBww8sdyfdtZL58K5WVfuMsDK",
  "key20": "2uhRbFPqQ22LEahJfaSY4NDgzvxk6PyDqMnsfKPfXEThArq3KCXSPWTTepDCaCM1eCJ7dPbXiUvDwzVRDuyUSskL",
  "key21": "2coh23cdRyrgtdwqKUuaofoArzccBYpamoNktp9zLo6Sz1ZjJ3i5CDVm3xXjcyQAkPB6Vw1DgQN7LixjYXM6pcJb",
  "key22": "5n4vktqttBP6o8d3br87vRGDWLoTUwkWkHiYP3W8cbTYFUx9g1LdAx5Y8tT6bCcAHKbnLucj8QC4mvx7YYgBT4WC",
  "key23": "UN8ZvJZt7so8cx1kv6Dd12sB7KBVvCgmF8sNaEmKhQ2ZgBmF42T5Q2Wd3JMwqGCWMipBrXPxNru7aPgFQX3Sw3H",
  "key24": "2S5ckWSLk1CK9iZWW84xpyhLQnoYMaFrNu9DwiWaRgzJWpDSAPQYskVg8cijdE9Ks56gBCL8ZFG9Ms22RWnch38x",
  "key25": "3C8YDzNaxCCkRPs4p5z6DQTnWzrqbMPMp7TyMgYEXDTCGB2t4DrawUo8HToQJaD7htEyCbaaGjPe86submpBHBaT",
  "key26": "4D7v51EjXN7BbCTZyiqeTwWYfgX4Q7hdNUoFiRLRZz8sP1uAkJtANN18oxos7RU5LQLSmF476n19q5n6qX43Y3ey",
  "key27": "qniDzK2VVWTWR7d6oHxbgfYZdx2imTjsgP6AtdwhqSBzMeb5HNq1GqJyw6BAb3cUxaqwwR7ak2u9mB87EoJExEn",
  "key28": "nC6YUd1maG2Y5oHUXFZg4RfkXmNmMqHr4L7F6HB6nhd3K5PSYQXauZDoY9EzRMFKRttXwVQKWuiWRX3PbjRRn2M",
  "key29": "4ihwdtjANQ2U5WZ1i6v7vAUHmu4UnLDE7uz6gq16tKtPKe6VCGtYuYKE9dGLNopUv5qdWxWbYV58CwtNg18odG2n",
  "key30": "3WgX2HiYtuMc7ENXNWJzxYBdsYWJDD7JLfm6dLNpYaUGAU1Le43L3rUhQJhoN5fsduh7prpLnBauAZwbohkEDpo",
  "key31": "22RQZSu8A3Uf7UGYtvsE9bGBSWEVXSsALyejXV7v6a6QVPpqKPrxWdqJb1BrENQjFmV532je37DnnPkwM8dD7LTK",
  "key32": "37CBA3RC8B5MvpZwmdV6cNtjDbf5m8VZ3udgpFMQSW4a8bR4oibrhn8reK8o5jn6j1xFAyacAPAynkxD65G8bRGL",
  "key33": "2QXWr3hJPbwFERmsoMU1pCGqFFowqqppqfWjZhQVt79H1tTPFBJnojBaEMnELXLVQKr1krT8dJ9i2STBwGyew5Ff",
  "key34": "sGVH5prWjHCBaPgcLjaCB1pYieT8ZadrUCG2QXZxLR6v81jTy6JcKQZbk2gdNxZL8PdSmGnKAyQXixUN5iBBSeF",
  "key35": "2UYNnFo7BcWGBwwxnRdrqjouRaHfaetBg9kVzHoFxVtmd3MdLbFLwEHH2asi9VdXV7TpaWmz5gzv1TMpfK9w5mex",
  "key36": "2M7YCVEfjxDuj9JsWHjF8jyFrQoJChTR5SCMrhGaSMACJiXpj5prbuWdPRvwxMiJVeFk32wF2yUUWduJEAzHY447",
  "key37": "23dzTnZKAJgy9eCxK5AGJ8aqcRpxQMH8HBeaq3ErUDajVqdewJERsamQ2CHrzndenJh6Yc9uwZ9EbndoKhf3TB21",
  "key38": "6412hgvYntvAg2CUpPmGwLK39wBtuminrXSdE2hRSBSJmGVpTUZErZsgcVBPxXrViNKtLsetpUVcbyBEgm9qo5zw",
  "key39": "4nZgiNKsBLAQPgRu1FD3LVqWX7RqotLfr88GmCvchLR1go9dkpc7iKUePMHEk95PvdDy7jjTn6gfjF6k4QE7WLPK",
  "key40": "5CGNVquChTrrLe7jfL2SddVtpKsYjuauucgngUitSQkWsAYLXcoGyLfKSdxq3Agh1ngq8JPhuNCiXTMd1UNdrVHk",
  "key41": "4gy2iYXpBVeZh5fnn1oJMx7tnySLPS8Q1Nt2AXLvx3Vq6XxoKacBjBR5vvVbUTd3NJNMnrqx5DhR3axN8xsqEHY1",
  "key42": "2Q5E1eV4n5B9iodM14k5wVnVokpMi5RAKLEvgVxZabagJRYAv4xX6WocGnZQFEubB7aNJWoWFCB8LmpS8FYoWQny",
  "key43": "3E5AxSWuPhfwmfNfk31zAxA7SSn9rCQfNwUi7uQQ7bEMJon1jWA68pcxCFeApkHzv6kqxJ7reCeQVbeTFUvAV2nX",
  "key44": "39LMJXRiptmaTVkJ6fq2N1gPk32vg3zpgssYb6ncLQQ8Q8JdtdgG8gST6A15j1Sp64XXG8QdJymf7tjWj1Fgvqyo",
  "key45": "5H7Fpv1CSH5PG19b4LLbPWaDXWrzhV1UneyzBoEJDpAcwSoYzVsRzjZV88ZeSNCw4KEZ3DQyti8srp1VSzmmhP8W",
  "key46": "5M4qXWoU5wDsBKeLKJtdoDYQ4wTLmGKAfHguDB7nqMCL8Pm8fQBKcuTK66XnNVBMfYnxwCbsGdCyXioV4HfPS5k5",
  "key47": "4LdTuFfzi1aoJBDDoxhiXXUp5kNqLPauwmxy3Ye4VVLiYpiap3XNBMYW7HhCosxAhj55niwXgZ9FJaaZtTy39Geo",
  "key48": "3RMiUMLQawEU6swppBSYtKSb7aDbm5sb9f7Jhv8m6XCmzJzCbkX52itZhcCkLqVdZCnhDdnZGMifkbP7BJWa8qD9"
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
