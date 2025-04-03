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
    "2CCwaQTPFYK5wf8TGqqnt5wUWtgohzk1LoVjNujpPUELg8ZKWNdq8BkTyaEZxvFctdPwi8pWZTnfdfWQnV9yNPMn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "318Qy6HpXFrXGx5tBctgYX4axuiESCfVpMGgjRQZGYn8oZpLhwuFDX8bLFA1hHkQfTZJW4D4BgRkNecfhLm6zrma",
  "key1": "LmsSUqvN3vypkCx2ksbMvXPmoRUosQGDNv4BvBynf5b1ECbEMLrAUzggA3L3gDwKmJ9Y2Tmpnzmh2fQuNMMEaKK",
  "key2": "2qnyDGPokRporyXucAT3njHra2zfMhEjJF2NMGpxP8groM5hg24avSENwCgpC3rB1aCWX6Xep51kZdNFqjBSb87a",
  "key3": "5rhwVja7xXhsXgkSwiGWg4KX7tiEJYxpXV5gdTrj9ykyiU4L8wnYppB5RvhWPe4KhaQkcVaMKB11BVmDJqgm3Z3R",
  "key4": "nHLnwdDed5chAyA9FGgTufkghpEC3FXR8LX2vRx3SrKfVJsk5bgBjSrjK3dQgcwdnFdN6revfUKFSY7Q7DCV7bi",
  "key5": "XAickajbE3ojbjaqLZsuyMi9fFtfPiA7bZGKuS6mi4XCp8aLCz2mgDaS1yQQwxp4ti2qWLrBbprVt3vRQzPuF7E",
  "key6": "3reJJpDjGNDc595Gx6gMHkzA4ymcTmqGwEUj72Y2SGMBvPwqd1ggYmi7WJ9jJSZDP9Q8V5NCmo8nbzRRAzFDmWCy",
  "key7": "3u6T7jaHPaQfHtb1gtW5eg8aHQXNUUDy27DdZywKxjHniRLo2aTmqUPJumPrBP4wbneV4K7WHiSGHXZmEmq5LPU5",
  "key8": "4FNr3zF1jiuRidrfC9qEvoSKoVsEZMVMoA1VtfapvwqJEWS5V19hmvMyG6ez5Pcjn86kK1ChZAPeFQqtshg6GXq2",
  "key9": "2XkQPRiMQr6oV6YDfvc1AFWtqHMER6Q7hT7DD2cPeYi3tFoQihuhLD2FbKSXLN3D3Uz4xCfVQawHZs6jwiHZF9mp",
  "key10": "3EagzraWRtKkkpUHPKYvm8MMme8SwnBmUD48EBxPwZuuMLESjjBicGEkQ7sbTgXSktMPsAAPkWVBdLahv9uC6f6z",
  "key11": "67De2aAGwZcpqF2yvDao4vjWDLD2qWisLvgAfu1c9bdPc8mkrmAPdK8Mz3pBp9U7q8X9p1owDgEZnVCDa3wQH5Kv",
  "key12": "5L91256sZR4REkyD2fHKm9RAptks4xJCrTHBWUsA3jJLBdaArYRZJ1TtcqpSKX9kxk2RQtJJEyCEKzoHPTRnwQKi",
  "key13": "46u1uurg5NDL5yhVk5NL2TVnnDYz6BhKxdbJtSrtkxjwAd5LCzjoypr3DpxSbruNr78jt5QLR7hiTAHX33UJu3GH",
  "key14": "3cWP85Zfye1o2bsMVyGDCkKpJ4URAVjvDmjeP85RtLcVoqxyG2YqCn5N8oEwCjnnqezQ89ttsxR9weYGcz5puYxw",
  "key15": "3GEKYvC8PUSL6FAy8EFDvBCFtkw2F5wr48KiumBW2xJER6JzucsndW3BmC4tMHiPJSKxUPTM4i8MEJtr1ZfA7h5E",
  "key16": "8xkcQKUCzFBMqXGWJmHYUjuLmknFmFP4GE4jmcAnTmTgBq73H1JMwbW3vFJUkHBvP6wzENcfSrdf6Dt3V8Z47pn",
  "key17": "2Z5Tw19AMamtxcAAhvYNpyFcoB458Lyuxkf1jUgBYxjDhiXnZpwKhkNNh1XKtrct4y6E7SrddbbfXVXfEoA8XAS1",
  "key18": "3GD98XukZLzZCwRkBP2VwmXeQiPsWq4CY9shr6QnNWx7QS1SReyKiWbThbZx5kKMSRLFLfC2cmUQYQTJudkJzupm",
  "key19": "5vdtVrACRS5BGYVkzXCVmwKcDqxQY6yZX5sbk1mNkknbLm7TkaqmVmrYLw7W67WW6zetLnj4EpHYBrZbkZCcLvMf",
  "key20": "TsVRp2hjXr74NPFeSqqezYLfjMq6uNKHzzPUKGs2JwK1CFs6zsZiVChN9BaxFxsjmQzmzqqLqwv91b5jrtxSSkc",
  "key21": "2EsPiso9g58mos8H6fkauapMKJf1HvT5FMz6MweH4cXZP6ZzLPgJq5dsWAjEqejYXtzBqLq6vAo6CNcoLDBzDLgN",
  "key22": "48muPq3xBG45XbaTMtbaPnLuckCzRJM7AKMeLxuARa6EmekoyqqCEzQ9VZdg8Syz1t1Eebj6bEsUF7tAKeafDt2f",
  "key23": "49rxdNxVku1M6oQGmxPWJ8oNUkxQvGkaNyuoFjZQogaZjnRQqLJGLMFuY8Jb41FBnP6TdYhyfUc5mPY1dM8LgYMf",
  "key24": "64MnSwQTB4DurYu4advAG4JFABjUGwrjtta35hHZWynKXFgRuaf8LFaMfWbUNZ21sWJQLujFFsBFffHfkbMTBcpu",
  "key25": "m6As1Y1ssWRCGHy4UoyXV7949DkvG6swDFSSXRZb4wmw9VEe5JDj2DdNUgSUiP1zLnFS3cd3th3QAmp7aZiVWwT",
  "key26": "2SuyeDaCEjVEMfx7zQtVzYeqxdmyhTRdL6SMsF26MWpbjLf56BpihPQjpeep9J9xh5EWVhiQ1DMGfETAqzW3LGdA",
  "key27": "4HL3CJmVc3384VKH6i5FxPpAt3y1i8QMAuUkVSYVsaBchcxw1doFSj1GShmkgLJ3zzjzJTmiyyDttkk8QVoxQeAF",
  "key28": "2UwQJMqbxKnpuPCbcfhuJBJHesAGHxJb1UYwpx9jNvYbuCpidbhDrB6WVeeE4JtUXSbYgWffm449LCBDCKQEQJnB",
  "key29": "552PMAVh4Mi2VADv751YHQj5YzqsT2TifEtzdhhXZ8LzCDF5tJSMA6F5ELp4t3yDjMiL6fmAzFoVztxQyyGBj1a8",
  "key30": "4pqqxhEFLAxvJVBDDzHxZcsxaWM3teoj51NiXy7qHu3iNXXtYBuZqBCPjWKnRbTjfE4nVHzEs1pb7hzfk5Jyhzh8"
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
