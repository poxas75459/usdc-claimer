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
    "4PbatmT2BRaGRHZ8mD96rWb1Qwd2d9SMZxdQBTBBDzqM5JcdMPSifKV7NthqdgsM7BhQrMQxvq4qJTXcwpGNaqTZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27bB7nJvkcCWZoBS8ymngeCqptYxw8Lv3APu95C5g4VPTKuq54ocx8vhZdk3C3B1u2YhdiFwhrhaPByuh4aGTpQc",
  "key1": "4Zf9fzkVh6cG9iKBcNr8EAp5g8mefc9PFCT8dsVd6JAsGpooxdDvaSaN8TdMrHDdaSGHuZv9PA9f9N1B3SdcX2QE",
  "key2": "3W96bgRbsuUPpBLkmdGd9uiWQpMP84cuacGYqh4UsmMsPKsfvSdSmQzQG7SDaG1Jx7XnHwBViaa9C85fAYY4wps5",
  "key3": "5q344JzuCUnAJZeB91VsZkSbXFkrXbTWBBPwnF59xaYTCkWC2tHRCzwjFFuvMYDpx7hTUjTdn2Sy9wACjSXb4EkZ",
  "key4": "5TcDTdVy4pP8xQbdVJHzYx1i6NdNJ2WTwr8dbQXnJZvQqyQpNwnxuuYhE2N8Us655HhmGWB6KCQs5hVDcnjPj47A",
  "key5": "H9sSmFH8GjmEuST5gcthnUKGriQEvpeRKYR97nJBEhEBWAjzHyR4rbfqDGrjh2eeDXDGvnyec8s5L8SrBSbtgCo",
  "key6": "2RcaZwAmF7MiZsQ18yA8xyyCsZP8kyNugwghufsM5iuuU8SEbR2PvMhsS1Ebh6mVcktsEES9SrJuGx1Nkox8uwFi",
  "key7": "2X8Ub8Sk425dqvYZb1rnuf626r5DwpJZtnq1rkPVMjKX6136sKhzpBjwuuVwe77fMaSVazSQVe9V8FHTsKRMnQRk",
  "key8": "5QqwsmVV29fJfDNNPpNxs1myJUGs5hf1AWMvX9CKnqEBAGHMjrgwAQeYX51vxNC6FYzSmzHkxK4xLFW6DRHqqU5U",
  "key9": "4W9qx3GBvSMFgzF2Nr6ZzWo2oHFxkWyAWFbQjASZhb7xsSKFhnHKbm612e9XoSiewKsn4Uy5jJc7fho5uEhJBK3N",
  "key10": "3vrS9o2DB7APLNKmcUzkE3TZE4y2xfAgnNoDtXhg4H4qFAK5GwjCgiHiWiRtsorLwUtkb9LjB1zkRxEBPmhTLkN7",
  "key11": "5jTPDqFxYx6gc9J6U8T2gTJwnAEXJkHd8DRpGjZz7RAeJ39ZYfSJct2HmHREzZSnX3WPW8j8nsSdN2sQj9LfYmwh",
  "key12": "5JdHV7DSa3QDU9NK9c4pwYH5R77ZEgDE9SqHrE3Yziwwev3iV8UneQVfsannYU2JkmwFAgBVrYpz4DY7ovMkP5NQ",
  "key13": "44MNALMcYe2QxReWfMBDMon4uBGgyZmT68JqzD9cT74CJyrwVBU2F6kNYgdxzwVfA7otNSUYfS456tmeNxTe7hXV",
  "key14": "3iDbGohikFXdMcMsMUattgC8XvswKWtpMSCu8csFtEViAP7t5fFkHiA7mGEeawWE5BfMzHmCyq4gLTvwXVbHm65T",
  "key15": "3HcwdRAY8f3KaB28tz79m2X8RDWNAcaBfr6JbLUSrmiNj37SZcE9gAh8VHfTWwNACw1JN8RBdn8NZGnSKD7jvXVr",
  "key16": "5R8DKs5KxKeK1TnsG6HsgRa1VGy1gV3Q3KxRZo42CqE8bZrXRNYUVfimXLyw6mkG6bseE1aZFSvRHD5yyy94e4A9",
  "key17": "yMSD3eHfdeZCzJz6ouADu9vZW6hQaehZ1iKunjecXbPumpfbYmtwHLcaCbyeKVeL7dNgg23RRmRBieMfWK3H8w8",
  "key18": "ZF7AiNS775V6QMCo4y768WzRSkYS7yzx9h2Ba91abnZ3ejXiARkLnu68MvDQUaoyRDHLr1Q3Ara73sX3WUgLNaS",
  "key19": "3G8368sChgmXDdkEMnm9i4AnqJ3XVacdkj1yhkWjHe5KH61uhoAzfGr3ztLiEKAvbpGm3AzhtAHrS9EtuBKPrp7h",
  "key20": "42cLeJC1DUkqtAA6ihE7JhtygaUrHz9XNbBTSsMoLMhFstrSWMhHUYsvR2TfQ1idsk9fGHcRpj5f65b88tcfF9R6",
  "key21": "2wXCUhHz7M9EpRiwPS2bAh8VBvAsztEe4zi684Q9NuVu6VJSGBHh8469kF4JLhj9mTBRuzcoytvvQ6u22uWzax8L",
  "key22": "33yzFpcBywwZ1g57nQx4C5kbzgGygMwe3YqgCf6LaCUidt3H9hWz8upotCYiF7UDuzwniPVgLr4nezmTqeuyJ9u8",
  "key23": "2BdqYgaZjGH5pAREnWr1JmgZeWpsGTvUQ4JK9yLZh6GNUuyqAcny6CrF9rbitU9WM2bkjA3sLdwHtigqLg36YV7t",
  "key24": "514Rh3QrLosbMZrra2NuNFuTLEGbQhTQXvANG78PMrBBYp56AZ4NN8s7aYvcfQwmPKPY8Q77KwG9f37SBEA5k3K6",
  "key25": "6hKivNMwhLPXNY9e8Emj8kQodc21g9GVubXNMzNvac7tY7DXy9QUUNDZvNE8d6yjfnNBHwdzAy8nJvSgPugetwT",
  "key26": "4yXd4vovUAc6QRpsj5waa9etqahbPfMZ2STVw3ZFGbeZpNVoLcBGvVvmgybd4ghHrjPcsp49Kgc4PaK9sCy2acTa",
  "key27": "3KHFLqQTqSyAscX1Nea6WKHSSacjAQQo9mG3J7RVh5YUcnif3K9CsDPzW2osVpCwHzfbyx4K2koie6sb2Bh26cQS",
  "key28": "4dQtHRTLe5Y2td7yh2xhmJkaS3hWz9SQk5EJ3KejNUf4bfjwGLpKTjVWrZwFRB9b3WnYAfb7PyfWxTerxyhvvRQm",
  "key29": "2eqaf4CGDKp7wai7RtNuFPmmReUV8A99LRnNW8KybPbShAriTV8NzzDf5jCcZPYYp73tXKrntxxTJMCmW7dVKkwp",
  "key30": "47N8Ff1a6ZypnXbaGRYZL4bzfJQCsMa2pAzqyd6Nrt9GYVaM1LiVDLs5Xzfx6yebGcn7xUVmjfJ9bSn5K4jMcuiZ",
  "key31": "eR3qSZjDgBLoneGBVvgJNnrdKcJteGkZef1zvEjpYWJQ1SBDudSFoX8NxCJxkMecK8Zub2dnuG4WdnDqrnoCxaz",
  "key32": "v2aj8UzuHj1yp8d6ToCFh7UYHtV4WxCkssG72ZDzeYAet2YcUbd7SGtcB8j2qsaooKawUMBF3udVbPTRugd4LM5",
  "key33": "2Z3yMVT6hbQviqiswLYaWYn2s23BQNLEDAXH1P3sWgaqSK477iG3Axhr1kKDF5WUBecUpoL8fdyjmUepfUSGLUAF",
  "key34": "4SSxk99WE7ho21UF4iUNWJd4SUTmzKCrbzJQDizfaC1AcH5UURBrvGyCevErzcWoku6EGtx2dH6stYeDdjkFNtaC",
  "key35": "56eBs4usfxDM3SLrzsu1oMT63WffkNqtjtei4tFa49Fk3w1KKxBU6qwKb57o61pgjBqnmoL2YNzvQymFQRSMBh6M",
  "key36": "5LMUrM9iwieZaZDhZPY1uaPAGnRBia9Wj18ZqVk6JfRz2jH2aS2sxgB5QDpUej2fkV6HpNxbPchRKv7xD9UYqxrg",
  "key37": "51AxkBcdgK1o2t6jZkFUMJtKc72CEdxM8jk38rFBRQEa8Tk2WrfzeG2HhPnJa6S4YVzHZJv5Z4rA5m1jnR2fh551"
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
