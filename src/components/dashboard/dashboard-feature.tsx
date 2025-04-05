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
    "94GDmGSsWg6EMGKS5q8X2bmQ9LkboJWkdBYgBdNQvVpi5XJ22m2f7xiE5RfoRuTTW4SKDxxbThJFc7itm9VxYvc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ftKfqsqrTxKQ49YcXeJ2XHsSBxtd7WStVJJycqoNrxagw5JxRbWX1uJ7SsDYDLNfSWK7ggjcnnRUzdErA6NnTWf",
  "key1": "2npZz5G3rwnq5FGLxPAGuUHrK5uEugKqrJxEj3BZkQW7gdGD9jWFN9Qc5gsgNRYJt8CqU43CpirZb2VFf6iyRWRT",
  "key2": "3NZSKrhuu2fdkpYQLCCbqWcdmgoUUTusUS4owx58Sb2kUbkE179jLpBHyyjnZ8ecmJBKcHXPhhoSyeE91FWr2BLr",
  "key3": "mTRmoebPtPVD1R4X7tR3mxqDDJs7uPKTKpkyLFQGryK3fiq32ZiAZomgCR29Z4CKNk5JD11SKrDnaN6FBRWfVhS",
  "key4": "nrkPhpMPf1XMhtinYrjuoqPAEA1MzKyDgmi6b6nkoCTMA2WpRuXXpiStbEtUrUFVQXGY2eSVTUNQz5zUhe965cf",
  "key5": "5AYEHZhBAnE5E8wMXtFAAybMKAgJeyQjHAnFHC3CMJr7EmxmCc8w4AcFgrHhJUvWqv7nWMcbRj9pHNJXXzVR6YRt",
  "key6": "3qGvYPVemD2DQ6S7Zv3uLZHHXUfzj6CNDKjQACauhWPbpfjfUK48V8aL1Fh9sp3rTULheiXGeWphfx51eWk7BdAi",
  "key7": "2oWgX7ZW2nKHAWmxKjki8vTQ9rtKXXyUSmcojdG8ceb4ARL59gU9xW3qN2Hhd3Ze2UV5aE3XmG6pDSDYSM9JkW9F",
  "key8": "5TWeaMd4vNoZeMP5KXHR23E9x6x8wfFuz54kzmWA9wAR3tAiiqkrUHtoX1Z9bxZ6kp9NaQDyCLz81w7jzWjmpx4r",
  "key9": "5DpHXThE4WGjActSC7PoFezCq1Cg5cwU1ykySUVr8owNfQaWHLeqkmg8htM7tFV77b55w5jETnD4rQpmxBJ1tp99",
  "key10": "4nkzRYVTZtCvBdonu9vbD31NHw5SzCcg2jT1D3PQ2U5WXWYawLcvb8XENDiqZrNP18km3MmmysepySWbwuAm44ax",
  "key11": "2JQgRwvA5q5bNxVSm5RiP78ZrcfDxC2aZNEpCy1keThAi3fhZXtEnfVNpo7m6TevHc3iedgssf4Wewf5L6LQFbtu",
  "key12": "juXYz9Vx6GDqP2Bg4ArRRcPs4nDAR84SRZFxd8Vpsc6HdQuSnpqfvcq7QGMroNg85T86fD8BkxV3E4tdQurUqYw",
  "key13": "3W48CB8TwPL58awt7uAS5FLgEMPBcf8Qff2VSbSiiiL2jidMFuYjMn2iHcJH8murPBMNTH12FGYFAoViGVfgpRDr",
  "key14": "FSQmbMFLy5xux1fkCNX9AVedJm6b5RMRU6Ca68Ren7nUkDdAuQzJXuSypGTuFawSx84AYVYQZCoPFb3cjQDQ8dU",
  "key15": "44CGjFXmpuwTgPaCbrZaDAgqWa8yeizEUymtsLY6zEa9rYP4yY3f4jJSLiL9uVeNnEJ37vUm19tNTkcSNozRCHn8",
  "key16": "yE19mXGPZrDDR4hUu8ahTBHwFrbGEmTfeVYYZn64TTkUmo1d2PNXAGcJ6AT68PBMYmW3t3zmgWqXFjckc9bUkWG",
  "key17": "3ZtjpAVVJ2w6YBg1enL2xugQPzojq5v6b7bPemdCBEmuuhjA1w8en1rLJjDBmoDpp1PfzLxWxgD5tqbYBRqh2Wdr",
  "key18": "EdUyVtxRHjjd1x27XyQ5jSg7sxu7qDCDDEuocjsTMAnFCAuLf4ybNw4zjs8jP1Y8VYB67ehmDJn2iL4HErvGBG3",
  "key19": "3SViBtWT5AqBMxLybNAL2oHhwiYphxdxKZ62kMrwM9yoZvwav7vLVVb7Xb7gqcgJp6pArpskQMkhzmk5VFpdkgmC",
  "key20": "4JbNyDuwosBCU5DFCLQo2bhnpEQiUP99kzJSmLgP5UZ1XYpdoobWWCYKt5r7Vixnechw9viGydyXRMv7o6F5969n",
  "key21": "3hPGp1CpGpE7Qk1wxLvqvhWbjn4udmL8hBJH7WAa8WYx5Sxf5EpWAfctUNXFVtotERipqrLvWayzKTk7dQYyHCqW",
  "key22": "2wQBiErChwWLrwxqEo43qPJKc8cnZiMpkUdtBxvVzrT7q4S8nNtqe57rPNPgNXpn8YzovKhUEji3oV4GXth4VgP5",
  "key23": "64yaBMuMX4XSiu4baxqpQjKk2mqd4EQakiZ5YB4QTqssu4ihqKgLBCwQa1H8b8XHPi41aXuQseXK8BpcZgA6omSb",
  "key24": "5WVg6fRRRCzu5ovghhGEJpL81YF4y7f9muv5ZQ96VojcXUyd2Y7LWsngmgMZG6vhej86pia1dhvibygg6SJctuVo"
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
