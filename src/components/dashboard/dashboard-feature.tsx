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
    "3ehotcGRm2p96n2qoQhxc4ALLfKrjRvrDaX83RMYFMAxMs5kUcYobe31JGp7kAiN2Z2hKzy4UBeeJmLrAx5DjPQU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EZwj9eEzAAtX26oZ3EeUc9MdKwMVLcyamXj2hQLy1x3aMGUAy7jG8maom9T2nX56gByxR62omTSMyz5BGPCKczk",
  "key1": "5MkBz7Py8g9e9Ugh91fJJXM83BtgfgafHXmVQtYUQ8WCNLAWqTVTgewaSNxcoge5xfbmDSRkKmrJ5E1GuY5E4ej4",
  "key2": "2NYX9CPA45WCBi37mQYeHz4h6K85gBNZeraoqD3CoTjGeT3wGGvpMcYW2MGTPQZorp8a5Hw4PVHQ4iVQMjnDHByu",
  "key3": "67eS8BFz4sKj5zz7SaY7tGetf3548b5iYfmwnMhQfFXHjHuUkxaoZkX8pQTg6ZW8Wk5wjpwDLsQAhpQnHXwW71Rf",
  "key4": "3Eofot9ZMBt2b72qfEZHzWBiWA2KyqK7FQ7jUqJFitYPS3hhPKmW4h4dSH8KDeEGf6Ftk1b1gEidZoXdeJsqZDxp",
  "key5": "2n8BqPfVCTvFRmbYgGH3qLhBArw5bEp3dDvXmsyi3mfHAGa3ASvCSf7nVHqZVaLi4ETuN4DxJ4K85XLLw36UswV5",
  "key6": "2dzgogwJmWeiMyWEys96hD5jjPMDbPecAshrYc8zCTMnVUqLxkU4cczc1rXetxiu7y2ZE2UF8YsBdiqF5rw1PRqD",
  "key7": "5NX9tVyfRBqeZTbcANmawdm3UvDNFQ6nFq4LDnhi5XXwAqxHu8UjiMGwg99eAe5NavUxkWfLdie2mAgxS82FPeKS",
  "key8": "3UuvLXC2ZwrZ4XVMCuBUqLNdxT745wrc3VSBE7gwhArYhbb8yinwiFV8p6anALri1RMzGAaKAvChwZHeirVcsCh5",
  "key9": "29HfqPcDDkZSTkA9jVGnkUz3QNWGfHb49RHbQkd5t4bAm12FQeYJhZoDdZaLhqExdNtZJzNZwusAq8et3b9TeJWq",
  "key10": "5Yc4RNsNgSzqDRSXfTYnTRrXrS9Lkz81Bn6ZxkRwpys4CAxvhcA3roohyURhidmdqbT5h5roCQE1eERbh7EAHMNi",
  "key11": "F4djXTGrafUhjxU6ndwQkNzo4igYvnCV5g34ivaYdEPX49VwrjaXkdNpHZEaj92EDb4wnYt1mfbRySZrPREgEL6",
  "key12": "4cS7B9CMxooU1eP7CLTpi1911VA9cVoCyDcrx7fM7fAEksH4WXqBv51wuoTBzt29NDBnyXDhRjFPzLxte2Zpcqmo",
  "key13": "fjsD2V9PQWDDxrP6hqBttZQKSLUMaCHnDb5GTXgXYcjYcSD2zNLPQexEEjthd6tTpQcgpigojCVtD8d3e7CECTi",
  "key14": "5KqZDbuG7RJfcNAMWUC9n52LnkjqA1YTi6xhVdzVtdUXZTSLdnxcWbM5MoqoUUixMVz3KKgrwzTpCDAEHEo5kScj",
  "key15": "4Hq7XJbCX4evYNip3mY7ua4TXrrfKonpXUGshyw3TTCAzQjt6ttKw4GLFGz4CkShUWVHkHLaxEBEhGh9tbbR43sP",
  "key16": "4MzVsVPTykvXpsKuTQx6Etw8XRe96mXL5LBZFT85GnYg8bDRCXUGbecqvtNGBoeWcWaYHq27sPMmT1HKJScu1Fe9",
  "key17": "2dww52v431LdSejYMXxjFTZuUPKSPFj1cUtwrka2aNGZMUsYd8mDZDAHDENQrfQgLsLL7Z1goM8NjqtHAopLBh8b",
  "key18": "3rCbBk9kQWquefcUDZNJpprUkf3AzCW1AweVKk5zv4ioczZaJ8yiLnKrAae5e6b8XAvuu6ex24N5Ht8NGta9CVAv",
  "key19": "4hsXHrtiRrZSTgEhnmz8Me9sG3jyZ7qWkKHuFZ9d7tPzfB3o3yscEdgq77AbBtGAbKPmNHwvtfa9QjhfwkpwaZr",
  "key20": "2hKz3FXA9PjjzM433FWFnXRpFhxX2MLoNAYnwgsvm7nGhdSzb3wLURWVZpXWBLeurMspnQJzKu3QZTpDU8PKFGuM",
  "key21": "5QtuTEycqvbMuGctpJdazeVgBhSUdGmyEWXMd8JJAV3hUpNYUoUwox8N6EESLK6sU8uuXgJWurFZK4G9bWDAoegi",
  "key22": "58JjGMy6LcTcyFDs5pzmjLnnFJzCsLKd85NTeHBHE7aPjGhtYcRRpezsBy6LuFzruzZ3WeZTBTeuu8qKKAnR4sKQ",
  "key23": "2ZR6a3dfnKzFNh5JHeFUHS3JbjJx6bhVX4PiXFktZNmaNkYXmCfpPs1BR7pHfkdxSqdNJo8tLHN26mgqzseHGnEd",
  "key24": "4e26MTemQinduNKDGV77a7f3KqsSUtWecR6yjnkBzzBSbrkHdyzghbHeYrpvH7L2p5NFNQffkbLGReKciyNzD15",
  "key25": "28gZTzcDaEdp1z3vNnnQ9ff8McLYcZUdxNMrdKoqKH13BiQ3YZwCraxckFUz5vJ7FgXD4ue8nFfeJ2hXFy3dL6pa",
  "key26": "59m8zXv2te2V7KMuRi7f3VnRUe8j4EPmnhJ8h9Wtrqvnyardtnuyi59BZaHaDj1bMSR2s6oiUYh3ShmQajn827mA",
  "key27": "AzZfcEPrBJyaT4DgmUc1MbRKjwX168Q8XhyST1NXJYvihih35pWNrRJjCSH711eVhW8XVaxXsWTpxEfBXiEksCa",
  "key28": "FYTYKhL8YQymrpXif2MemqqB9XPQyjkPhNDwGy5dxdfaFKpUMfvztNMCTZuNcQgjtR2Yu5Z5Ctr1fhes5isnBA8",
  "key29": "5giQWVrLJ7tz4bkk2Co2vAH7HXYxwHPX85VjTpsrXA7KBmDMZRLbS8NddERxVE1E593wAjqnxvtcMCtFHVLyTgEi",
  "key30": "36yxYPfojQ8rzo6VKyznV9RUg8UCmsCDpXTUr4XjtqN389Ko1MVVK6HfFUWqZzaNUDicRspwQ8TiEdU4auLaAWqf",
  "key31": "3FXecBmopV1ooSEw95Z1ePcqWDyodYtqjELRu6KVmRLfJfz2uzvKvEPvYq7oMPmqTKzvkBPoAXdem8Nk1VWD4Khm",
  "key32": "2K9F5eX7qrAwMBT9mz84GWtK5meUCLxLZT9s8TwYLK6E95t9qFWoBsrfsDF2i6m94PPknH3eUM2zQqsYgc2ovLDe",
  "key33": "5KREcjRyuWxFzqgJDz5paVBWXmMJTsk1tSDtyNndLmfSNd8gTCXVD9B3FZAmwNypbqnAiBxbnCjk9PvYRgmkEyk3",
  "key34": "5WYCAXV8QzL5Lri6uZak4J2si4rA8fkdVriPANgtLPDZuKhdbxWAG1TG3yuqCKLLMuaGb72etc9ewtXeT1H15xh5",
  "key35": "5oh7cJBicrx3sGGsjcTKz5vTKHa54Bf9c61jQtQqiVfk3YBpSLtvwYo3rUHXLwYxd4SKyt3uhQViocyXk4axQFog",
  "key36": "2HZ53yQokbCYtJZUpXc3PfGVhPMhWK1yKXX5ywH9JZGB4t8GybWxSAmcatd7kpFmRDJJ7xeFkXgreUBdKx2nDtz9",
  "key37": "5kL3LZTpvqPWhFmxc3rZpZLkwmuXrdCpYfDqxg5KxhjRPz25JZQQ6a4Y4f8ngtTDiSErygKAnEu8UoAGTF43W24n",
  "key38": "5KsCAj1YqUgM8uy5aksGL8Lc4geUUgaTYgXMr6GqU1MivycrjzzBNJCVS1U8xY2hYLyD2MFyH1QKJYyfVDhUSsuj",
  "key39": "5vakdiMfVa1N1MWXgpWWmnwxREZ818qhd5kmzhzXjhDhuWCt4oY9eyz7mXjC3XQa5FbSdpD7P28R3hvMuLH64bSZ",
  "key40": "2rJ8ezrbNwv11oC8YfDFvU2fLAhqqFN1m53SjThuwa27WZqn5f1UV6a1WNRB6hDQtCL7MvzgrMZbgT71Te3UMZxu",
  "key41": "2sfvCougDJSyFtoi5p2bwJaxfhSTUAV4hPD9G843WXyXSVyNATeDw619Jozm6mWtNsNJ3aTYei5Lw8vK1DxppAaS",
  "key42": "53q9Zm7uMomgBnTiYAXi3SaNDYMS6GMedDWr7BY5QY8JEFSp81nKBub3hTTfdXJcTEg2vvd5i28CyaQkMaa4LwRj",
  "key43": "2FvdT59GAjKFt9KC9JErkLtKzxj4A9LVwRQRnFQuKa7ChVQMfJqxnnJcQQoVoXxQKP89StbsKHs1GAbzpv2Jdxxh"
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
