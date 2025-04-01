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
    "5mUhuV69eoFXF7MinT85Y5dqxpwnJmFXqwZVJJiFGZxbHdxucTzPtJoYJKvwFDGqAPwEzmdjdqeTLkKuerY9kahh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62DZgSyQWnECDQeGHC1PJXuhDuvPaWnaUXU4RjD9kNE3KhjDDFs1Z1dJ8N12ucgSgzz4aasebV1XznQ1W2aoR5QS",
  "key1": "42VA4dt3vdxEvGmiEooLoQquG3giddCQDPLFcreoLWB8vmoQ6LZFty79VpKiytLRUqFj6ev2PcYZBy3adL2vNC3U",
  "key2": "4RWG6KpbDB3KL1rqceXbVkJBvJKpMoH6wqT6Qsu36StiQEEoCBST1eYCdA4eKbYnc2ngnQuTqtViLmVqtjeVQdvz",
  "key3": "D2cxqhAByXyogUteYzJvBLvi4XeTM9RbaTzH6SzXn4K7A2vpmYSK6fpcnd1GwVc3JWMZNy8t5kjUXL74ivBCxy9",
  "key4": "mn5mmWPy1E2vSmZtCsC6ej7u5xSQ3BbjQ6R2SGNbdwyNesc94zKsexDUdLzjdc4KtZZ61fbGsLhT72LrLSyMUx4",
  "key5": "5cFkj6XL9YxV5S43aXWZu7os8TL2boSgXgXV8mWNN4gwCSbbdBCJLz7apRR624UucH4pZVSe9YiiWrNozdr42LZu",
  "key6": "54K95AUYsQxNVJqF3KU6rNrj5oS4K9Uz91UURqrQiKPcCgBqFwro1gXUcrMmVQZeyFFaRokttinJEB4wMTRfshG",
  "key7": "3KYmA9jWWNxWLFA1unPzzVunFmmS6H2wsdf4fKzB4VHdM23ELpMECCJJb112TkY9183SoPiHhBq2d4HUi5Yf1v85",
  "key8": "5Jbq5MXH527kAYRyzqycCC4n1C3xPzMbzfqqA3FN3QRAdvX6SCfmPHRsJsh76dGj15qotnSJAJSd5FTxoHiTi9xi",
  "key9": "34HkmZjsBJBEDmBUvfsMx5v8ZNFJWQEbeJ3zZtQQt9zWHggny8HWro5PBvNa7cku512wPFVYB8g85xUc5YQMwvS3",
  "key10": "fXXHzqfWWHTWpWXMUSPm1nTFsEAtQtXytPbD4VmvMngZ9RJMDD9x4gREhzFcY9anKabyUgP54546HCmHzHqnJLg",
  "key11": "2FSGfYPRNqTacLD1jrX92Gm8caH5Cfd9cDTynwyyCEqDKD2FMbcSUqZcjCk16mPTDiPa8EayUekLSRD9XkUTnP8c",
  "key12": "3fjQd2zsMV6ZpGqoQmxDrw9dyis7fnGZqdp9uec56yrZUk4Wn2cWR289EXcEstWsXgzf8S1enbZpsZHG5yqz1LWv",
  "key13": "4UCu5JAGzVJYnUKZaU4CrbjR5rA6kjz5h8ni6hAhXiARBT13ADuNkc7vQRnyHhZ7jJCj8AXzsWou6XDNXRRDj93t",
  "key14": "48tnqBat9wZR11N3jnfZXVD61Ahzhq2xFgP8wKzp19Yh7KmzWpXNnJNCPnWwgW7oNeeF7DChm7agtnxMYLjASDy6",
  "key15": "5As8nEmSnbkqypME715CoK2McVJ37xEq5j9GpC3YWqwLXaWHeu7fCkAN4nHKZiEYJGavqEVzEa8jUFJAU51UJAUG",
  "key16": "3WJWWBU3aMCB6P87uKkrw8YXsap5h2ydM7w7jGbwAY9hjXvmtCnAWz1mqxe3fYLyCXT22dvGkiFcii7ZG3VvwUef",
  "key17": "2CcF5P3p8P34CU4kDh33yAWwZMvg469t1rX7VkvQtwDSCqarNjc57HxrV1Wnb28EvAKuBJZJsBwrhq99XSrPK2uV",
  "key18": "5yGA2iRSr2UoJUnqsZfphtdigY3GLFFyufD4E7vUWBgkEdZKXCgWFXvp5ucTz92kFifCzrBGrwNUyFGar94qEQLa",
  "key19": "4611EkCY45NmRmhSH4Zu1SPksxHG5FTqmA2MN3PXrdfEHdJcpuaV53cyzyot4Jz8wWH5K6PN9o9KG7UWxkQDhXeX",
  "key20": "49CJWDdh5j9bqx2S5bKwRhTKiv418gqBrGty7Whc9fuhH4ra5PX8XJLpveyMcMWmcyLvFeeKGMQNbpBCGzGQokxB",
  "key21": "DmLPVAFBbtFWr3YfthLAXwLuy9tXhZZZJmbeoKpzX1PnR8GXUPUVEyU1XdxeHjZvytkYfPhJNitNnh7poZzPgYi",
  "key22": "48WJckZUthqhkztEK311MypduEoG5qdisayhYJKFeHjHfcaTKhdL45xZRz9qmYGn6WcnuzDxRLCWDWEKudhup1Dn",
  "key23": "5u68xapmuMrmS66eBdSYDdKKpuU21z6JTcB6ea3w764aDXHdKrUeE68GQXS8JvvUWfSQioTTUW9HJtus6g2ZaHRX",
  "key24": "4j6LQATZD4GmpDXmShBa62R4HkMaheqEJahDTnTjvUbHWBusQYDDynBApdNWtbyHEKhijaxHMjHJxQqKCUzQjzQQ",
  "key25": "2JmPoJcuLkkYqLNXXpAkoWGyT4M9SnsGMEJERbjGcoBQnETgmc5iYToYjrA1X2ka2myFE6p5FNDz6iKQqXmNKuYz"
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
