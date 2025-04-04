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
    "34NXfSACFt1XWCGgPvo2kDBKKF3hD25rhj3ygaU9J5RVmcDtdLFbYEjCdtfgTsL8nifPPSeZ7rRCjXp6TrVwsJEA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QwsxHyhXp1D2agcJRfoQv4rvmDntVxSwSUEXG2MnCqKfAZ9AddvPLcp18QRR2RmJMoCQnmzFKArJy4D3DULEA2L",
  "key1": "5hZC2aNwEx5cTsB3mmS4uUvKK98bzVpQti45WdfdevTXceNqaRvwJySpSKSHZx2u7amuG6R9kXeJMqsPbv7vjBMW",
  "key2": "4bc42d5THcK3RjqJJZJ4sQF24n52EJqXXdEHB2QhyNyi35yr7bSsvMyGAZZvi69kp22Vb9FTmXruais7LJ9tiyKe",
  "key3": "27jjGXBokFBe54VnnB7kmTKcgCnwjosEeXKEeoEiBr6TK5LCT6od9radKXMiyG8NThsw5AZ9yrHSkLaXYE5YmvGB",
  "key4": "4Q2WVPs7Ev492av4tiicAV6r2wztTd8dNktQ771yBeQ4at8pvBXopPZwz27Pe6sx4D3mKqs8YsuopHTVfwRKxXvb",
  "key5": "c2xnVubsuXeMzNYSherhB5kdAdZpUAov9qa1ghi9RQPeVqiu6VsEe6HCN73kxHtXUTJCvvUotVVbh9xsgTj38N9",
  "key6": "5Rah58M1wL9SVNFvWw1cMNXxkqQEGEm5vPihvgXptUcRL5jMx4gbhutGpcumP3BxShVTKfUbYDuw5GL711sbxg1x",
  "key7": "5GiNdrZVPi49ePvgZ8KAh8fzidzfH7L83JC2vGFoPogwtGSxXQfPcam5W8SkkgQNrMDo1ZrmDXc7gcDemmnkVqtQ",
  "key8": "21z2YVhLNjfYenmbg9nWfFwPyC1jfaw6osKGJ9C85Bcpi9QmFqask9VRK9edvKPDvdn5G2T4U4M4BaWi1ZMsUjaH",
  "key9": "4MFHyvJMqgjSKGGVNa18HUE41dSn9qCDwKAttsSguLtYFFXC66FCD4ANj3qbT3nvowvf9FEYmEL7vuJby8TSXddu",
  "key10": "4LVkrUEvf5M8p6Dm4cCE6UgXxPAXh5AyZ8EtUfQziQQy8ZbE4UJbBy6wLzDs1Y9XDCAoqN7SMkiiHyRgGnf5TKUX",
  "key11": "55s5DqJ5JAjYPXbjCKgokc6qzyTjoqYVLhZPKLc2WAFmGEJcdZhq63i7UhSQSUzRQ3MN9ndQKu9YyKv4aRG5wBaL",
  "key12": "vUV24AMtdTXjTaBjqj9nyifUoGjNAvYfJBqoogZbkoJ3YwCLNptbQH1JCujG82h8FyZguMG9En67UKrzcFqcmF2",
  "key13": "4BXbt8scskDRNBhZ6i6Q9xVX7EA7FA7WRmhuqQhBMFDXsP9rgY9kzrGBKEr75BSFfGsnyr12wcpcF1zsUnkohJRk",
  "key14": "4ERUPeXNaX74CLuxcch5LYT7sgJa3TqedYe4sAay6ZsoUGJzprnvpyS7UTz3H2YAG3M5TdkGRRRpEtHRa9sizepa",
  "key15": "64eSLTib5YLzJADovzNq7fSkrnUVVXgFRoywgU6TWv5MViKjcZNsTW53pSKWTTbFNPWtxdAi2ZEiVBaSk7PZVUYa",
  "key16": "3z3DbEUxKeNzkvcbSr5QyDkkm843Upiz7cew5tPm7NVUWxW5mC9Z3vkzS7Mvkz76NuFhqNRGwUQv1tzQzc5eovM2",
  "key17": "5yafxekNtJjVwLZwAfJjKmrWVEB6JsmW2vm8d7Nw9AmLjv758Dj5fB75i1LawZSzPszDi7p6fH78gdtJ8in9vGVR",
  "key18": "2gVLbNNwGnut7ZKbfJVq8viTHcv4dcVryUXTKRf3sfHLL1KBfB1ZvKP4m5HK3bhHTJwYmj52Cp2KRSwdsmUauaup",
  "key19": "41po48yjp7goyURekb24Yq4ffrbXPjqBBHC97oF5f4GmcKCWRmkk9putuDwVLfoLCnMBd9JUMBNqvgaYTRK4PEFn",
  "key20": "9HAtbsXp42n3af1RpVKdnvDbFJ99rGhzp3URNY1CG1nxicGk5Ai8urLBRdNgJEP7WZM3xuYSgNckUGu16pyJwmK",
  "key21": "67Wh92ModcJbQ4JQNexuXNaPz6ZB35qcBSf8vTQVKQuWTeNF8fbTah6TUgZL2t9mqAe3DoSjCXkZWw82rvUVpc6c",
  "key22": "4t87pBqe2Y2BtJjkNXmF8t4eQEfLJ3zt8CmBXmKLbzkEJhVQS7mdAX6FxqGQDDm7t2f9g2qkdzeXuySpve8HnL5f",
  "key23": "3c8z9oWAP668tXta3PPYNcwLSLuAeURTGvwtLnZpnzMfwN8d66yKVG3WoVkfP5WpTsj78Fng26qDvLeGdecNhh5v",
  "key24": "2fQhPXPNiZuhvDvYFpEQPBuG6CgxocbJJfMntQVk7eSTFiGm7rPNrSfzm2fMWD1an5TpEHaSChzhJmPxEXgJwWZp",
  "key25": "47yBRk3KXC6eHfRvJFkYKrF5EdVLUBbBeQuTs9fCoMEpKLgqxkqr794ggr23Y8zLUdXGCqPnEYM4t6WQFuB6xoGi",
  "key26": "2X1QUQ2Pe79P8Jjs33HHmcjhckCsEPgtXyLaDoTgyqr3EtbUCypuHbZ5TDdtYGdqRE9WqBeKzf6UZTZxtyR3rgCM",
  "key27": "4WXVs8xmCESn2pj9xsB4b1aPcS3Huc1jc3u17Hq5nd1W63DJRMM5c2LYM74DmyTcEut26gFgLyWxksz2adTZCXK8",
  "key28": "ednBH289Ad91nN9J6c1LMiafAP1kHQKvXxae8gvDtJqPdZGcMZAxkzNb1MK4it2PSbv94Vs6BqR1vfoHA9YbWcb",
  "key29": "3hsejE9UBaWWRMgxJntGHBcNPSx7zbuHtuxzwXogjNde1CzYvUGXYtJyczgZdA5TvMptJB8U7f7aom5dwUrkVM3Q",
  "key30": "3RAYYzLV7WTzMzWDRrpCdrCURJLYQvwX7iq4JyNugtRuUb5C2vumWMDCR4ZVBZYUaG8fVS2t9DK3eZMhJ2ajiCRh",
  "key31": "61YGuLPc5tGFktD9SGgaYBQpYM5eYGAxPuCinvxxhye55JGVgNVFnr945G3j48xoNoKKsSxe6RNcdDGhwodzppvq",
  "key32": "8UbszZukehT8KQAfYr2oDtDtB55ecGekxLfgrbfuFdx8jBkgMEbYRSU9KY6oYLK39HCabAfNfrZ7Q9f8pPCJQRR",
  "key33": "QoSHZaqjEmybFn3f5i1atwzM5472W9w95GVhNEmfyzT3rKtHkMXb42zUUAjUDWVxs3h9uTgYfyYC8S2Qd7TTRmT",
  "key34": "4GwrG6SvNJU1RCbcCjUQ5Um8koL8ND716RRyvNy73qZb2dTnA2e3PoAHhqbLzzh12SP46koos6E8NACCrQucTFDy",
  "key35": "4QVmXyGUAMHenztwLkJSf8qPDBmcwNp8uCWVeNaPM9fsN4KJwS72skLurqcHQJgZMYGsrHgQHT56HkT2eANV7i7t",
  "key36": "4uUA4K1w6c2Waez5tSHmF7mCWGk9QZdpSHTczZgcSDVmsmi41SvpfGJYQK2XmfQufKWTnEByrkUYaSRVW8zyMx8U",
  "key37": "2U4roEvmMBj1txrQqyxhRD4xDVBixbm7e2pAsRKP5RLt5UWCrtTnZCnmLRWLhVZUZ6YASzVBZ1WEyq3STVrmxpS7",
  "key38": "aC9xwcfgYSEy5jHQubAer6ubrdnWit1cUNwJseApDLLnwNUVyTmEKQwvoiSzEoMstJLQGy5btkJjJc6V2v2TyGg",
  "key39": "4GRyFLZBZMXqQdHcMr48pveDHQaF38HdhUoxeXCafgXb4x71Wrq7M4DgfNUdUpsnTHfZDVEBYDmzLKgLNDCfTuL5",
  "key40": "4Yv7toynaFsmqVoWkDmoymZey9Ns4hWpCUTNdrP9DJVdvZUyfXcQ8VqR7H6i8un3KGsuiW4fda888jEkQ9BfMSRo",
  "key41": "4ZNnfPgJDEj1VVTLbrW9BLMMN4PGXiWNHdPUwsQVUhHdf8kFgc1XcfZUzsrqKtiwhPBVZkHtmd9SQSdwHcZUR2nf"
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
