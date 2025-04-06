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
    "ZG9fbbN4oquwS1Jm15daHBkuL9gR7u3dABXV1Zs65TYPfZy8PdMmYuuesZTuHMyu1dZMjnNTFwkauZspjw6vXe6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41ncmSEwR3zBrkJdxvMoj4oThXxmn2xtPJwucKQKvF4egDWSnMF3mMzAyHaxqBTF6d1qgB1QqCLdPJkqcYLff21B",
  "key1": "2jg8y69V3dEuNZ56TVZiPeDNuFjzWFuWUhtDVNDpxUNtFXvi9UtiBTdz9sKAUASaV6BLWHPAJvebYeU5gRgS4KHf",
  "key2": "3kkbpJc46a7WY8avPk24XbrFakEricZ56b77vLbWMcvDSiR6wbpbqD5YRvt9e2zibe8nm3PQy7UWnh4To89pmUS7",
  "key3": "2ENCCjGUZKKCsAbdLGDTcfHepVyc2cQ4Um47HezKC3t4dEeDD1urTcooNpXv3QzfJKDijpzdobuqjbWxHSjeZ8TX",
  "key4": "4Nk5uzW3Gfkfxb3trwG6AKaU7aP21swxHsTqYvF8tvenzHd8vdksLh5cSW5qYwrzZ4ESUkGr87Qg7tKyGbtfears",
  "key5": "3KA7zQMK3VxQS3K4KHxfgsgoTQjnwvhynLkADCFdxHqzAEAA3MFjKLAj4V3tK2vi6WM15VBDAjEvqV35Wdg282ko",
  "key6": "4ebDQLmoawf45p8xUzgUiGeYBw2K2TQvi9QDwKjoCc7iPnqBFTFR7Q4JiJHmoZFJBeFGEVxtiycS1fUFAjZ1TLxA",
  "key7": "2wH5GEys5jTmmqAbUBrwNLhwugZ2rzYhpskgPhvszPwpNymUddxpHpwJhQQALZu1AnY55VWtukhAULWcZ4x78ASY",
  "key8": "RMKMvGUFekKnsXBESrwhzf3Jb6hVz2cNHQ4rtgNvFuboZCUappLCiNmY8XgBufqg7TADGL27WLFZyfQL3k4woaN",
  "key9": "HuYUwtUXFvkqYWV5sHa2RromgycPJoxRjuZgGgDYk3wu7xKazsmHa4UaH8JNbUXcQ9A3Kj6ZQzA7jxVNGns1DQv",
  "key10": "3A5gtP9M6mJCQfE82GfvKZrL69GyLe876M7Jg1wsC7HWiGckkyKwAHJFUcGuBYRrnSu2vN25ZxbDovJ7qDD8wu5e",
  "key11": "aTYnMALowLtWXwz4KwteMK7R1wiqe9kPt68dW82ETrJ16AXMBpjR9Rq2YXJ4fYCSXLPhGPZuLxkvdKfKrP6JvXf",
  "key12": "2g2qbgvjhMxynpY4zHcapYYFB7Q6mLwqKaxs2uyZmD9AnVUzUep3YWnnyQjyFVzyKWtDV4iGFhG8efpj43gb5RXW",
  "key13": "2jkhFhGKX61o7VA9hf3JRvBrueZLsUwTDXqfAfwtMAqqUWYhntBReMHYR3yTQWNBZV16cEFk3DxU66qHGAgCRjXT",
  "key14": "4EEULoqa1566bC2Fc3C5vBt9Niu2CXDBzAXW1wprihnMARdWoMN1TfyLPZYW1ifp6XfaVkNJaGtt7vX1TL5DcUVu",
  "key15": "3o3n2oiyJB1ErYHXB48U8H62fPGqH6a7gRMnNo8nQrKFrzk7cih8PtCCDarqpGhzMg2R1oYCFyQwfm8Lj22At1Lf",
  "key16": "47HgPQTdwBromSbg2bYdTvGJapL8KgcBusJjeYZuwxk8spv1Sbr4sWvJPNBzDd4Vjj1Pu2xfz9jMGjk3hMMnFq1Q",
  "key17": "4sBoBKr9Xou2BSzXaHfVDhEQ4cZEJJGvBH1FZfL1YkdGKdG6BmrzBwkLZ6NuJjDBAqVNcTvgvwsjC8fvMFZWUDWK",
  "key18": "3NFneXLgDRWzNmS56VCtcRycr8B8deg2WNvQqofoDy7qRGxsFm1hAKhT328RHfvkurLDAjTutA2WZrwzq3Anzokd",
  "key19": "5VsXQE2LLJSsiyrAwn4ttwie4dLaaJhEao3TKk9BVN8r3oAa6PuoKZZT3AZs1MyExc66A3Sgs376HCptgPQUHkA2",
  "key20": "4bBR7uMGXgbgwDQ6LKK3Zu74LtbQGpPWZMeZYm3L4rrxwAVr9ge4E1FXbt45LVDCMwKjgCvvT7YWHBwCBMfRivvw",
  "key21": "vGrexDLDkqBbrDCA3GGV8Wh1mp3edz1SXksQXmSG5Z2vkV3uwJPV5PtYMZqKSb16aspyStdZeHGNmAyQoBLmnHg",
  "key22": "3gVjNqx3X9pjb4X5ZtY8KZvNsRW6oyZamk45LxT2mSxb2CxJZeE5g4kNAc9nXbg6PejriJpK481Hg3dxxNRasckR",
  "key23": "3Ea6XpbqKCS9xp7JnL84y26oC1APFcsLGbytroP4d8D3EjC8FHQd2VhWCzo72cRTgFqKvrKCH1oDZNjjpein5zZy",
  "key24": "4mLGmzrDPm418PoPkA731ttKT6tFW3nmUzWQTT46rSwfhWhDnd3WnvDWoED8RGN1WshUQ64VUfLSZqHo3NwYXGDu",
  "key25": "2Psfh8mAMUiSMs57sVnQpKvQS2kEoVF2vk4PYCPCqbZPJ7RDXeXhS1HZQEVi8sYW13bXSeKdqFbjpwTmmJ35Qhyw",
  "key26": "58VCaq6r4oUPmudqhTCDHHS3LawsV3LvXPNFinr1GfupEEyxpDbKJq2RP78LF7STJdTvSfoAzdtTitYUY4NhHNFP",
  "key27": "3CyNGWJdgunqmxbqRJ2puPjisPUGMXGCAGGaX3yvvuY8K4393NLtL4JPxgWeoYRunstaKBW8d6rt9HgB7EFozwC5",
  "key28": "3mR8CBCfPWKt6nLXmpb7ymZrHMLNmL7QupC86PDcGe9QCTpr7EGEBzpnCMrAADef8XyeoLsNMwJxu9YNZMieD7T8",
  "key29": "4fc9gWfX2RYDmPjTtFxY618rjfXNHs2KP8byGKoHnNCN8zpX56kKFDFguVL221e3AxM1nGsG6h5bG2D1GWGfQ5Pk",
  "key30": "2KA5dzstCjjVkMsAgezCbfLHKYakyYboSXTAUKcfeBrEYggPfwLN5AtoeMf17xd1esLWYtNbChoNS943mNwrfTmk",
  "key31": "2qZD49nXH32MyyhGkQx5w7LS31ZZp1uoZrJ9woCFVNPEXJ9vHkJcbPXZbRGemAFBZCJRJmBZMa2SKiTddXKzTq8x",
  "key32": "3JRjqRu7J8sPruAN1g4Q2FfdgBuUgW68HaBEX91122YgHFFEHXQicSL3AeQjQSXVMDWXSA6RVrsDSjUYWXsKNE9q",
  "key33": "386pd939hyPnpUDTngPqY2H33AFBtJbBoDZsb3YjTm3W8z4THr45ayFEZiB3TEpCwkNNPstCWmA4RR7mmrSzDP3T",
  "key34": "2kcKf6FpsayR4xF89Tm885BoVX8fiu8DR1MB1vtj6w2tTTurzMNU7XVq2BSuzGFfDE5wKJv26XwpUJfLWMGYM9gM",
  "key35": "Gt6nrA61PQA8ssPoCK6xUMguta33qZEJ871KraRLcBSaWbarbtzzqmFDLvwQteFLUGULwwZk17CGh2SovqxRdxp",
  "key36": "2PM9TJ1ib2FTXJHhE1mUoY68ECdAA3RmHRYX7gtRRN6CXimmXH75AaqqNBYyighDA6ppuLMKDUkVvCGVaKJ7ztX4",
  "key37": "HtnEvYzxg7LE5x3RcKnfdNFC8LSxQPGanCBdpV6GWdyFnGZyhMZ1CK4jXEF7yraGtMWbagPRaHiUtG4yk9wUTXA",
  "key38": "5W67bMHBgnG6jV5ckrkZyckhBbRbx6HQZHp2WBEm1g7Ysia5uef5A7YLGj23VTPamxELDvfCUaGHGQ51ZZsr3wZW",
  "key39": "5cvfqcnw2TksxF53qv9on58hn57fWeKAKHMwjNHshrm4R32m61S7jUzaiHCFF1bub2y3d1YkYb5Hm4b2cDfLvt97",
  "key40": "4fuPso6C2ZjeyR2F9R7ehC4RErvSSLErnQ8jajDbtaFNWSRLGss3EAt7bGReCmq8sfJC45YbV6oXiZEYJMpfdjph",
  "key41": "2itHgE5ig8MDFHuhFUqZRYJLNQyebBKf6RKprHn2qovTRFyYD3m9Qfj9bowprudHH8ASjdpVAP8dRfiCp4tSFcXb",
  "key42": "3uSN1RazwR7S5NtA9zSHk2xFfKoSWFv6Zxc96EL9vyJ32GPEQaUkoeQanJfEc5NRvfTytkqZv2pacEmEeLea57kZ",
  "key43": "4FwZB6X8yyAejnUPrejgsiEoSara35KK6vBYa1CbJtpZAmxUJhySYtX3c6GhV15nWeb91qFnyR2F2sDfpJ5jt4A6"
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
