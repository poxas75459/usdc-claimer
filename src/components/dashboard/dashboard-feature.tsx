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
    "4t7Dd1DEd9YgHAyJGV61WbA7ntoKH12NLSA7iugsM9HRELHm12z8W7FGpXWRwmZM4HtEheYLJjaMkP4nmNDerht5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38BJVD6ncbxmFBdqaNucwt6JX6VgjP6QXzdk4tMabMDEZFAn73oWJp2rSpapicMTEudyRdfPg9oeowpSqWcByg6F",
  "key1": "2y4Zaq6jY16dAM8nhMmpL694RB7YW1ixFise1btaEkXrczGjz9aZKmrb5Dsw5PL9TUjxvgdh9tvd7EfGq2jqFtP2",
  "key2": "kY2494EPWfZoHSTLsERFfiEGiVYw9T9JjUYnGqDH755F8FQDw2Qtn3mYCc8z4oXbkqHXaLdSMkzkQ3jZcns1t72",
  "key3": "4WPCQwQyxSxRX2bGSfPc7K95hffLSVrikBzdFGrop7J54WA9MfGUAV8NHpF5fDWGSwLJeF69zRgLrm6nWrxmoho8",
  "key4": "4yLWsSLjn8Kf6fHMNw8jjz4cM8pwWLKuMGNmHhN7fLmgFGEf5Fc4RsGqQMpdSAJkxMHuCgqzqe1QMXuEd5rpe3fz",
  "key5": "3XKsrH6ygsAkAUEkt7kApDr6LXyE49jW71uanscLfzQfHwfg83kvui76ttgXXn3iBQBkmk7d8qVLkB9WGkFxqgWG",
  "key6": "2qLGhq5XGbkNJJCwNKFJ6jUZgABNdzZA9WJjjXRcyo8RASvb8taMwuovxxxMBaHXK2mL62LJTEMCGZk6ex2Dh86u",
  "key7": "2mvHoL4ypRhNAB9M7Hszbd9Ahxp3aVei6vDxvFfYsTWxTtBge3c5sev9R4GeU6pPeammFPCj3a8KvPQeiW5c783b",
  "key8": "sU4osfeGwE4CzoKL4vjD9aGxMhQ1bF895sjFxKeCWQcgmE8E1WpL8n1YMadxwMTivyQXNcRCmu21PyZ5vw2KeEu",
  "key9": "53aZz89fWRXYJ9wiwXLm9EoSq8W2WPBUjMj2m4eaZNZe2qmcraLUmmR2s2kWKw2ZJPUdmKdwmsgNzgMBkRbG54Fy",
  "key10": "C84uoit7H4Y4DHseaCKMxoAJZqPV5XnhoMHuWy6eWn9hPu9aCdnjtkMYCU36Xne1BwXh76zhpamLTH7fWiotWiy",
  "key11": "62oUQK6GdSrwoX7NjhAQsRCp9GBJRapw5inFJFTYGKPU5HBHoqMPJVgXUDqof8KWeiPnEt3YWKD6DV4NeuhZwjUK",
  "key12": "2AGH1n2w9w8mA2kBmQvn6PKhRBPmU4Ux9G9xFySvMhn39LQRxXch59P8a5936JCw27myEXxJutExYyy3fuv1oyQc",
  "key13": "4RF8jAdMNESTHKQqCjz8ssyBo9mrnK6vjC3NSqjJDuZ8bWMCyzeoxwT8s83Ud8PFF7P2zLNuBLye2bALymodeCgV",
  "key14": "CZm8DqWWy9GhWB2Ua6ns6Gf17m16izvZQq4HqQQwmMkAUTsCrSaMVKEXdKGmzg5swLxEYkBCXu4CM9ZNi1YQK8a",
  "key15": "2GEvSup5XsBXvA6Tvn8vWcinZ1rRmdMKo4W8G1vsptXVxbWMikMShG5TRMhcNDTksNcWpKXCN71jXQ6XNFgugpMP",
  "key16": "2snUpDjwzYfRBSpbmBTZTp2A5qqpohzrVtEUZMguNPFyGRfnT5jmzuD2QpLRXovQYpTf3jHmMJX4475BavHrQqHH",
  "key17": "o1qbEu9s93nYSDNdhLFkynyG1PQAouhRkjM8qbWc6fxwVq2gDp7UxoJ2ypfu9M66onCTsNH6oMMTQjKSC3GQ1a9",
  "key18": "5ykskyTBDTZ3SkgAZajAL8E56SKmiXqFqgFe17xK8gbQbxgxdPTbUcw69urvQGcgFkptC9DS5nCVoJqdW6BFgFky",
  "key19": "2XMQPceTtnyyKiP4w2cgjh7W3qVuFDELjFiQHRiouYEYFNpabx5ZJGjGxfjako4U7P8mBEyoATevXYbvrtY6X7wB",
  "key20": "2t11zBiYik8PrpoPZ42rgwwti73tVSzomeYWLg3sCjST4P35o3hhe9M354fwD6NmRmVdAbvQfjU774USUhFn3zWc",
  "key21": "3cjWEz9QohFfwXfrKQFwu2inQwafZtQpuWg8dY5eygUELB1gURWTosGHpsPngdpmmXXa76WKHtQzKFbmyuxskK3Q",
  "key22": "4b63bb4ADCjc1Ni2Beq7A1J1uFTpSDv5xrrzRADUXQD2AqjL3xByqWMovBLJkZC9uxuLwLnuMitcK4HszqmtJDzN",
  "key23": "3FEehTQzUJjKtMBpAGJfJxbB9nywRM56fDThEtMsyTMqm2Ti6aUUJKzxAA3hc2Xz2Xtq5abHZxroeF2SfR3kULUE",
  "key24": "4To3K5WJrbAUpyQ2jP5EH8NHwQJEVfHfcVZZgVkhfSApVenRc1zbnhji7rj3bQRPNigyJvN5jETgG1bYQeUpbG27",
  "key25": "3Yj9GdQu3sWqV9BoAnCeSooiXi3RqyRyPfgxs5EeVpvcnkozBewUxQU6tvfcmAjkYdQjtWkYGoBerV8oDXo6PY1s",
  "key26": "3aLApM4gTsAtjf8um339ZFJgvELvAXkYseG2AtZ8iPrwsTzzXhSuf18jAVqkh3Qy9tTKKy3NRCRtXYZX2ppmyW7j",
  "key27": "45vnKohUUkQ2TYWF8oDAESsvYUkGKdBPX74FcCNPGevzYgA3VRcuSFBBeh439kpcxPb48B1DgHMjmjXqARn8JfJL",
  "key28": "cWLiGWZD9Zx178uvfvbMqdKcptitbQPYVJN8BQE75q28vtqr4CDhKLZgXV5sFUBAtHBn6qZsWzjxaUVomtJQA1i",
  "key29": "3aW1c9iBNFpYAnD4T66Rds44PzFEhV8QnmbvGXkcMNHmR5tGp1zpPH8KRexi5t1Rmy6pXckD7yBNLZF2YjYVG2f8",
  "key30": "LgrPp84XTzsLtcP4AoeaBwm2g5E6cSMCMhG4SWnhCJ8dN2VMxxrDB69oYbLjUiZUDxU9FKcuZ7A4kojP3afWKJo",
  "key31": "VHsdAoPdNxxeTab75w9S7BWgr6XLpbxhx8jkPx4eJQtvmnz6MZxMMf95RQ2P3cAhAwfkXiWefXrGjwtrZv7bDAp",
  "key32": "5evQgykANY7RrhXye4KgLWiEY8rnzKtTHs9CvCzLmHXUGzQYavD3pATKmbj8c6hzP1i2rhJGGF8Yz3kqUo7QnJZe",
  "key33": "3uuKCZdzWvnajBctE2phT5d9MZuAFqubRf5tsnGkVgVkimpZcq7Y1zcZ7n9BP8UZFAHQQf6zgaTudmvSTLLmuSgT",
  "key34": "V789Q9mxZoUKxPi4sJnjKYKd3sxYfas3g29jhstqjBaUiQAME73LiPth8EgTv84Yfcdka838e6GbwWCT4B5PCPR",
  "key35": "4pHC8NcEnukqC5qkGAdyUeRpAFnsMiqNcb3TjycR2P7jNbGmnpWzF7kH3kBg6faNfQS1V9V3j5zdEWP7ubmnMN1K",
  "key36": "uvq31ZaiTR3gYRCZi6ArfJqnKEwcw5hcT8fLCUv8fSpwHAFzXZdA83Q8mDpUSwBz2fL2H2Ny94Xj5uJ62AiATAW",
  "key37": "52UYwsPZCMJkidmX8j8PyTPUTNPKiJ5J4fpE7Xk8PstEXZi3jShAhKipQTkxRAAhCdEA7sWKNyYyxPBsuDQETDf2",
  "key38": "3rAAfBvE9XkJJsib5igqqbx6PBaQGrUqJACAznKkGkxNQNxDKjX9Jg9pNCAYaeuRo7aZHNGgLC3imywavvkptDNr",
  "key39": "4R3WAKcQAxcnmhCKfMMQnX3PuHAbLHEmnm1mda7dgf1KHc6JTT3G7zaX5BPwBgDvpatK2F8SJVakxivGbkhfmgAR",
  "key40": "4rQqS5Lk7rZKJqQppK4YPPfMtz5WmPt1X43gKHLsjJezdFWAyTrK9o22Uu3Boi7DcASnqzrZ3aEFUomjB7Cnf2G1",
  "key41": "2sE5YtpgSrLvY6tYFCXuShn78HDSi7ncGxGLGgSpfcnDztNqLDEjMScc87MQhEEtES2j4VkLVBf73SQXHiocXp69",
  "key42": "YkJRRfGBhdqmTwjCtvSAjUbz6e1HUxTuwKPU9d3pmCGFeubXVSV7cKNokaTQpju4HHSGD3oWLJ8PsGe5qF4TtDP",
  "key43": "5xAbQS4gkGijJ2bFPFRmekyL6UmrJDdwjicqyZ7YS15aEF8n1oDkJnc4LLZ4ENjmmBojPrkwsN7h6ybyTJqQZcei",
  "key44": "4BLUQBJvtaHQarMYUabHBrPH9SK9XTpY1tmGZLcrdApMZZLRmLBAE4CRSpnHJYdATkU8vpeV5mcaUR3WnDKgLB24",
  "key45": "47nfwRK9MzTLh4M8QKsky1pvYXWY85ZnvjB4uC9oCdiqHroTrsSo6X3Y1oAPQNwxXWwmzWXWd6Te8DFPJ7UFWxDU",
  "key46": "3SZPT5j3WTKuu66NS8ypLCukh66yzX15mQdMWF9Jxzvq8bgTXkUCfBevwT84X3t659JkAGJGCk7W36LjiDe2voA8",
  "key47": "4T2SP4GqxRLDkYf9ePYaaE7LpHUfRr1qWVuZfjXhjzufRFkM5hVgUiMU2bwNjdhBXRBxhUhFdhS4xCsqDs97vSS6",
  "key48": "4CVBJmu3iiMCP89VoA7byNw4y5oA9CYdmBAYDpuu62SifrCzVtxBvfTebfQGGrCbrKf6JsvRcW6QpK9VAprWjH3n",
  "key49": "5yXHtb8YgBiYBohr9qQwws16XAvRkcNBgxsb4hEEbLmfUHbNetRdK8rCc5sXH5TS7o3T4TL7CASBU8jew79MPUx9"
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
