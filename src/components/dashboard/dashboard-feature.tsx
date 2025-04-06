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
    "5ZpVVLYUHUSDF4xryETqeKQDCGetgav3WxwaKVqEJjx36mnUtsS5U1VKCvcQDmmYzMySDz6Vd257pYwWvqB6KcFk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ivQiA1ZPPvugTTifWHG2NisC4ZwUddTAVrpJBp2azuFuJo64JBUUSbQnhcSjaYC6XN3YDsu2yogspddrjuKXnmb",
  "key1": "4wcZEMqqkfLVEoGCPbDuY9GUyrz9FUMz1nJz78chCXnTJTZcmTENmco5pVsjGgJu8qNZ6XphzhWPotHA1nBZGLAW",
  "key2": "5nT9s2TcUdcmXHfZwohD6zXh6qZzevdUdbu8kKLn2QXihXFZgETBAJrKEBd8KGqBm3ypgz5SXsbsg1zGkFoCpqJh",
  "key3": "3JhuAxazSyBfv1vt2XpabyhTMsLMAREgS53H4jf9TX7UfCtb1A9Tgh75HC7KsWTXbodRfgwBM44PrScsZy67xjo8",
  "key4": "a8x1hecpTYxgrHqFvoYcTgxFnzfgHxMsd9ZVd5NY8sygTFgJBzM7VK3KARiQA1pXF8xethzvh1LpPUeQfT3KB3N",
  "key5": "2bo5etciBkZs4t7Yrd8QtaEvjFsjjA4utMcDoEVuYrLHxxEVLxJU4mPuAMciyZ7nK7YXkNoj28ejvE7DDSYxUPHx",
  "key6": "37b4CtJtSyhrsxtm4iWFYk7nMGgh11K3d7okfjDeZq31uuB8CQniyPdjueSwbYrdPuujvkfzXXSZEoHmwZiU7rUm",
  "key7": "59u9fGVcMeowSC6jBtmv4ERCnw9iPqMJfNXxx4bvfgMtrACWmhCmU23qt9b5utwKzh9fgxvfF4VDKceZVe18vkqL",
  "key8": "4yNaPBZYh5axphD12fME6Zi52vPXtAZVp1eFx6f7fa9yLA2AH7AJrKvCg8CvhR9nWi7LapzNzTuXNkcZfCcqvgZS",
  "key9": "Wy96nK8mzRJnQaJMcW6Uh5Bw42ySHaCF5NtEPZ3KVKwWHhK1dgDbv1BcVAGL2xChpJFjbWZNV7h4BavofNapZiU",
  "key10": "4joW1m8Qt4RJJV9os3g2S2tbNpzdiwCFg1hjJx5t9TU2vy4YiGBARzXoQg2NuFvbWCGknncZinA9ui2D31SqekXN",
  "key11": "2zHYdf4qLarTMYaFLngEch9xfcBCFcmnG39haGFUmaDL5F9xgYUYxzbGoCvXwUnuCpkbFyPjEsd5VRbUL4iwhTPR",
  "key12": "5xcpeD22QNtCMPoh1E6RuYbvb4dQ5m1epfM5ZeNLLFYMt4Rad3mnfjzX7PDeN8sVmuDiXGhm8N4XrhWaMAADvJCp",
  "key13": "2QmkTWC8KgtvPTEfU5HDevP3Kr4xUYXc84TqysNUC397Z9SwuvywBCrr1A2FQek642uHSS7ehRvssfqwSXrivC5d",
  "key14": "NP2TLCbvCscPHgRXuibbpyJTXdaVsDYCFYFUoUUCd2yydfe6BZ4BH3uZWdLY5LnfVHy81nLxEn6Wy69YjHoemMX",
  "key15": "2Vr34E3WS7CngMUic4agn8Aw72zCbwFAHtAWs7R982reA4CywtFHRGJQWjcKjat7HVD7wxZ4cKhMb2HUJLWzoazo",
  "key16": "2DqL2EKzzGjvJ6PdxK8FPJrU8eqVMhWqBeMXWvDk4jfWR2qZ6ZDjdteid2biTDYSDd9SMgVbs1sSMS8htPV5ZQq1",
  "key17": "5qWozNRcxiNzRdHcRe2CMPeVZFLr9UaBVaT836R3CByTzycY3YCHPknztwWNhMpKXzDP8rJHYjRLdRB9e5LrUpWZ",
  "key18": "2MJZHFrkL2hhYwKBbMvQ35G5FXAdwFAEes6vLeFpgeWXVv32LXXMWeSKQhYmLfG5sBdXzZRrD1UnQbPxwtU9o1RH",
  "key19": "5HUbFZcxo8CUEQwyYPcTWZUwSoeuuCJkytPWTqwZpk15TEUa1sg2XZ2WpWzWC4saf4KvJ12fHEfSQsKQpfxFmjWA",
  "key20": "4SoC2zgTtEmYBicLjAPCWsDxPh83GcbpyNfa8EYRm8aMh4M74dGdhFyoQkxPFj6WbaJkHScpJAsRgrJXN4dvmmM6",
  "key21": "vMPsDvNd13amEaj3Z5gjkZ39Ufjzo9kLwBoDyzRaDANT2WbqchHKrc56HXRygVBXQLTFgXewaeK6BGmakFTHMJo",
  "key22": "2swNZUFgnRUCnM7kwo7SqqknkygZNE5oJdvX7hQyfn5zYYFy5HndEqmnNMRyuba7DXTf42muBm3r6c3EgMeW6e3A",
  "key23": "3ropPHgDZw1C47yV5gruKqkJq7Mw6tfxbsgeQ5fVDgVK1tibDtgeggFBm7D7chS6inkfiDKfmbgukDE2CecNYNog",
  "key24": "5kmoYkFAqNWAZt1tMJeRKA3FF6SfkBjQpng1j9LYfWeuLybwfgeXWx4tXSDfjbzLniMRXzdGyaj4pNxpGYWxrTGm",
  "key25": "5i2V5qNxEuAWrTNLtkpSpKWprUCdQgZaXTApKyKv7FFCS9PZVoBV5EKSYpPK3VoDMqE355miGK2DX97fL44wy1Z1",
  "key26": "2pHnt3NjR5X4PVySBucPQV9HtqnGkXiPFGqtCjxoboZ92AZEzrLKoAgxG5otVE4HcZQwPdZpDiCKhmRkP1itCwR",
  "key27": "4GWphVbkfXmLJV1uLiJz5xXC2u7Rk2WLgeMauq9cMnc8WSa1K3HnfUxv8XhXBjK2YUViPnp5ypKgzBC8UmEUWbaB",
  "key28": "5DMi9YUt9AGj8Z895cFbL3giAohiTmzcVHPmvyvzURV2a2bawf58Uep48ZCpnkqvKEfxavoyXb2SdrCqeHsD5wKW",
  "key29": "4Eu6XzGNhDzhepEVCyHapeSZNKnjXgjTUkk6yURQ3GNeow7Qz2QiBSqHgw2mLoacyQ2zvLb31hqLjRuYVB4w33Mq"
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
