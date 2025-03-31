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
    "4jJ1itm9UAUWtbHkKEKaqP8nqyo2DiY8SRCT5FvDzXqnWKZTMH9d37efuEo42d2LrTcyS5UyV9auGKYKTF5EhuaC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z1NuFGppcAxH7um8BB3AE6n1js6PLpJYr7pE4h4UScYiLNSMCZQCEfQfKpoFxTa1bhumxdJctyRYMrXwRKknTkC",
  "key1": "5aGG6JRfJEWVZeFqF5bMYuNttPucbRT6xadjETYwH5S2TDt5Cfou1KjzpVGZUku9wi5QBibv6zTP3gXsxptshqkt",
  "key2": "3sHjoRsy6fvo934aUWvEXUBRpF344FAyMdiKJD3b199DNT8u9epAeMrsZJQhWbHee854vmwBhpFMbW5WzBsWUT8N",
  "key3": "5WJJ176SYWTQhZ6myrec6poaWWbXkA6MVyrraJwZu2KqKubNKRipHo6GAT4xK6WkrkSiVhUXDwTVLADLKF7pTxeF",
  "key4": "EKG9BzmXh3p4qPykH8qHmLCxWCNtTgEExRPhTzGxFcFAh4xwugRGJkbVpfAvR9T2NvNdooQN9gBnMghBjBaCecn",
  "key5": "4MEJ3gPLuuwnQz8ZL9uRr7QtAuaJ9hLWrwwt4zWFjVCBQr8tepDbS3NPWRx5fcpk5NCRfqgTxCpRNwJ2ZLwgqNfS",
  "key6": "2r2i2s3XCjpp7oEZSPcNbbMK8Vq1CiVpGieFFAp52ArmsSSa1yiGPivx4auutAxD4PnvcCmXFJiRQ88Z6evhH7Vk",
  "key7": "4b5wfAGeC5zvRhDRwniGZ3sr82BNo9K2CjPtb48ppb1ns1BCPSYzGkXGsVhJCzAQXMzieBdgqHF3j1oghtsRVB5G",
  "key8": "2Dv48zsfzpqDd7PRhrjD4S9FDoMQF3g1VKBZ8hsE4U1E8Vg7YCiun9UtSb5t3qWpNppgH4cAbD3E2Ng4NzMBZKTa",
  "key9": "T4ne4FzfjAyswcXZx9LjmyXbyGpUS7rBhwFQyibjrxde4p5MXAGWSqD6tYKtUKe3Mk8AJiBxPpXNhECrrTtTTmp",
  "key10": "5bQ89KTPM8F5Gu5v9Cvq3F5hSBtXDjB6QsoxoHGi9CVpASTA9QuQjLuWW8mWPc2jLaA9j9AowS3CxHJC5EDVB5De",
  "key11": "5HT1JuXotVA5Jcmix74aPyfU4jR521g99csj8fT5AWHFbuDZmj5jWJEVzNnCKCYHKyundox33d285DK2E3PUtn3o",
  "key12": "3q6GcTCP4gQ69tSpzogMP1wvf88ZCRPA2a1RWFQPQ5XiuJ1DafVFvmhrN8jV4MSpbEy4TU45JekUgbgoduxvZ2Hk",
  "key13": "5poY7RMA4XDxvdBZrLTH7rJH3EFpoai4hHxvmiUa1Wxo5kPgS8Xq98k74W9CnbR1W4mToTwovTNteBVx1nPZ4AKU",
  "key14": "5ihn9TL6MiQuNytfMeRT9MVw6Ytt3psGeioEBzABryX1FJ1DwW6BAYGVvhwniUM7hFJvYU25PqtSXbhwdbeCx6QA",
  "key15": "578zJpfG4wJaNFWQJSuLZAoBpsAZHLpgciaEJNEgMvz6ukuVGSMqc7CQfeA8MdYa6qyFSuGashWaLqwTfWQ3fwMY",
  "key16": "4UjF7EDgueyvgzFuZQFTfYSt5uKNDs9YHp6gkych2XZaStXG4cJbNXcu6xRetBjM5NJmaRnGhFCn8cMTjVE693nA",
  "key17": "3P56MiLRJwcCuG599871phWyxVhgUVC2pM4ZK3bQcs6Kpj2ZgPBjcjazDETGuYkV8jVWbrUP2b7Jgkv4wBBbi9Hu",
  "key18": "3aXFnj7KsQQKgaa31ygypjKUSv1krQA5tH5UpTxVJsk5mHWS22GK3WpNEfim5Wa7whp8zHvpf5aXNC7772Jn6Nfa",
  "key19": "6DKCNAd98dWM658HXHdNS21WVkYCkw4VSp8JYVxvVvJnC8Nz2PZzjA7yEysoGxH4cuFW9mWXUFxqE14t6Yv63Pu",
  "key20": "5Bdz3y6AXT27ZRWXdENxj73YdmZpf3wSH4c33GVkfCA4vh4SAkcxVYmKAEbHdcmiZpjtSuYkGD1394usu4EGnepA",
  "key21": "45LpbQzvX2oohPyN2ZuYpPohbbnQc2ZYJPaBBUyWpwvPupSbvbqsVTArPmRsb6WvNKahQMNscmHue5yTChAf14qY",
  "key22": "3FqVDjm2xmXCaQXxsrRi8huhGvBBC3YjmSi8Xd6dYrJ55sTdW9wpoNMsB31syH5yyrfuE7mUrFRmGo3rJUdWoeo1",
  "key23": "3SL2iCJ23VBEUDaPXtuaMU2Y46LuH3RzrG4SPpEcqLLutn8rWVBJYGckSoDVtyTmbgtgRsdiRx7Kkav4k8tNV5Vx",
  "key24": "3TVWRDUfuEGP6z2SJe5tuXRTijXTpgxVrNv43PeCzoBiKLXGsJKieYZG4czh6RnHbPfYeF8cwhWfLi1GGzfivEk5",
  "key25": "5wT97QVJWSPp2fEMgNny6GkiPGpqD7FYwEyaukU9ztnCf5T2sCJvSruc6dm7HXknJkuGwD94t68Yxzep6qkK9j5c",
  "key26": "2MEyzTM5JoctwBnJgge2L9NML9hGM9R8nkRxwyr7a7J9benRwHF17TDZcWoyvH8ejPWLgMTWP7WhagrCLfMpvMrs",
  "key27": "53d4NoxvJ57idoSiPGf5SDL2DgRu9RMyttJ1UJ5CP9s3Fu5XYL3fcs4b95Wm9TWbAvoPg5j1QYhuU6c2bJLhMFov",
  "key28": "5eaBnGriMX9x6UaDkE816cMzdH6hiZXnJKedYJubTwPm7dBHjMjqTVSabC7oCrQi9KdjzVkPEVzh45zX6H5xqGpy"
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
