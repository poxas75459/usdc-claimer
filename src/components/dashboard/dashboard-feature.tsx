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
    "49dgxN86EKKBooKYjqqr6xYkNYGt5uv5wryHsTmHakepjxJBfaasqqxkNDjLbjuTtvJoQYYdCNrFC3HZFz3AJcSZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RoWHm8zQNW5jdAPnC7AdxjJqxjhMeiF8NS7TMRM8f2Kx6xHjYptLQVU3hiatzrTaTEffudRCXttZ28E75J4f4A9",
  "key1": "vymCZPM3YfhhSBQG5vNikDfUMpLhKFbj2FtmEZSCfNrygAf9AGmgttCoXYnxoDkWj4Bx4QRVxJcZxXxXco6hX9s",
  "key2": "2FUppwKgaFPi2KMoGKN6Hk4E52yuSfVi23kjyR5hVJDJdXYLTszQoqrnDzwarL5XPFH4L1q13GhMrXnMMFyJw9Tg",
  "key3": "3MNxvEEMDVK9notbWMURJdWRKmewY8utTkdmZhEPkvWLCpwnGY1frFhTriyT3u52p17CijXstRooECmHhBQvdPa1",
  "key4": "67QLn7eiPrRtjkvFbC3fBQnHgzn4zfudAMSHSznU3MFLYhguXM1a4VjUTcMnoPdGRfi5sb6hN4CKaWvjQWcpxLxZ",
  "key5": "4w15r2vKz8CqgU6b8Q42VA4Rs6M3D3wCQcYWdTu3fdtPKRoh5xBUUdRCrhpoe64bVweS1icqeSzk8zuBKx6eUVgh",
  "key6": "znt6a77Ch7aYTqC7QHv2X6N7qEDny5bGiE6FiamWdNAEd9x6JgezmrQJmqJmMhRXSyw8CFYYBLLPYHECCYpQ8qh",
  "key7": "3oCJ2MSqLf2TRTWHEsJTqdP6WHV31gRZQ7ewJuhGbe36MDdZvk6Wvz9Qgq34yYA7fRTdbNCWde2HExmnDFSp39da",
  "key8": "5dDkwkURccK7NxAnVxZusBdxx3ZoNvjj1Nt23XLWd9m3Ed2r3XrpyNwPP9ubP8EpgnxdVgiDfsqbbD25SYefKsS7",
  "key9": "2PNp2KzBBLQY1y8y1CRBwTpGhQgkPezLmgB9PDha2k9MH2CcWewA5jZn257ikP7u1KgVXo3J2Hk2ea3sxo9AezFv",
  "key10": "7NTjs9ANV8cu1eTcaXEvSv7aJimakjdyBCNkQ97zopKNw3ze5CiX9ZJ6FG3Y1rcf3ZqHB8FsCb6Hi6bdYEdBbD6",
  "key11": "3o7CqYH6KxrFzpZhDufp3RwvjWDNSG242HbrhTsKThXBPkTinF17BGZUUM2GMTEFZWyJq3SvbFZbQAtdEnHWbbYL",
  "key12": "48iM2ysStbDQCLid6ohmpySv4xBAhdrmJ4i8QgPw6ky2DdyvpWw7VHWTfXYBbZavfTYuxrhb8GASj7HqxxUsE6sq",
  "key13": "5ZB8tqT4xEJWnZGLtCQQq6Eca2JNqSTaonaq6Rg7S91FcFArq2Na3JoJSdURbyNUjzLUPZaAXytu1Q5Uc8gnuGL",
  "key14": "uWLaqEtp3C8Z7wnNFF7uP8RHUtH8TUqf3DjAq7vSuVp545GiQNKRMCDrsnEsSrfzswXqnVe6a1vvJjkcuzFAJrG",
  "key15": "23YCCaiq4Y9gMQ2Ew1wgSLaSPwRcqfENJrxfw6Utbg8btvvK42B2fpVZUErarvs8VcokrycY1GyoLnLuoS5HUmYD",
  "key16": "4wG5aVWsSqpwMP4ens6WP4XZxMv1nJHH1h3tXVFd5yr9FBDZXUoqRiymC7n2vtykQwyobFyLMCPzgg2XwnzCQBc2",
  "key17": "586vkfBi9zJKi7Z3FHtPncnewRVFSbUi5DPVZcCoZwfsQxXM6ynyEbE9SL32m9tWs4kgnEd1xpCiTNogcDCxsFX4",
  "key18": "5sPNnwyWzwWCaJy54mdJZM2d7mJpKmvuMTufnij2jz74R9fwAar3yJXvbB6mWxfSdYHz3frzkreHCWkZg2WPUbDZ",
  "key19": "3kTSmAMDCDZ4WvqTS6rdyD3X3MTrPFbguWtrjrTtN3YgWD2qua2rBDAfVWL8GsbGeJvr5wa8zwN1qponcjj2wM6u",
  "key20": "2yDiHFFUiYEBn7ZMu7ETebNk1whJuERWfhVeDrKecWgF53NQFk54VxdFaWZ74fYVRemozPx8RwARm7oRMmkKoXps",
  "key21": "32WywjbujWy5x4aQz3ssTD1QLacRenqBgAvSVXz2FJ3X2oEeHT6jnEH1pkgGPTbZCm1scbgjCdhxvh6ZeV7x98W8",
  "key22": "5w8omJkouD79Nww8TVo3bjTj6GktHKz7ro4891aBirTNLWNvmZxYZbuwG7Wfe76RKrziwzKEUV9xmqfpcMACeYWt",
  "key23": "38XZjZM92Wwb9JTHdW9qTgers9ipYJTJ4bF4cRYgsry7X6DaDWyDNaJ6pwidyS6vgCWMKGdueZ91xsw8RfsTEQYw",
  "key24": "3VYuXCp6MKTBNLUMoo9CaT5jkbDTmtxkARQksMdiwmPPi2sGUAszLp9Bw1XN6eJAYbzDhw22WxVVuGcjoxqpZB5L",
  "key25": "4W7u8KF5d3y5XiX3nnexHj1h5Afi3AtPaPNMxaQbs4g3HWXnmuE9z8yReASgUSAUuMxD8GZM2zewcY71ALbSbMeb",
  "key26": "3vMMRKFkug2mE7VDxAzzqSn8zAT1BVJMTXVPMEFewo3p5CWorBMJASHQMxv9YptUuoHUDNBsZKA8kAjZoX9wPHNx",
  "key27": "46uDJiUSHNT6Mm9UwELUB6AhJwnB8bQrfvWEQYnLexCdnivZ5vJC5ciNPfH44rMrRQ5N2Hhbj38ydjWSw6u5dW4J",
  "key28": "39f6v8PL87QSHPLDEH25YFKi5Sx9LDroMBMVkydAgV311WT1PWfezshe98kuBZUeFJ5BPtLGobEGkhndBRUzYYfZ",
  "key29": "Vq1nqfnhYrhFZ2hQQoS5YUYViqR346Mzyp9kaCbYJv77Qebw1JLQEjKQRggWPqwTzZ1Czk4jJsBVSwWe3Z53NUd",
  "key30": "2H6UFy9M2VJ95pHtwRqdiqgpBBzTZZUHL1KGt3AyXKSAZ7woipwf9kabV9kmHXijxnFz5NvbMdjY2e4CFLzindsF",
  "key31": "4ktMEYvLq6hSZzCvLVvTV59BLhQEKCeVJkDFfvyJoAqwXUxeKtBzLoeidEgWm2anywfUaxgmWNudnC3MUPBQUufU",
  "key32": "WagVdxjLQuCdVWaRhx5ETN1HZEgPUdqRSwVvcSWv4iNoLT49n9TVjLisySPPK1nwnbL5mXX74N4oGkoGM9M7dQF",
  "key33": "ZnFfuxejwCvpx59b9nYKkkoPkaUqbVKyxUY5qa2Yzq1wL7fkfgheoXRjUBRiUA2upSuca88Xi5Bwz1gJWY2qktG",
  "key34": "5M3aEUcdqrAb9KAAK5R8dbkfcku3kMT5imkUfTYiwkcWT4StQD6FMAHdB2tx8sNKqKBbesKcZGEvvvdz2cze6f8e",
  "key35": "2ez3W3g2vfpG4ArQcddLp9LYe7GbmJhzorsPgEBkuZQ6PimAhC6T6xoT9d4Yjqu3BV4U2jfLSbVkwzUREMd6wPxx",
  "key36": "2xQCXVZEC6TkcXBnajRNU5YLPZ7HuybnP2zmARnZhCG3LSp34NGoUHAP4cJhdHAQrn4ur8igMonxqHZSvYnWhq5i",
  "key37": "2Yoyvq9nJYeNt7DgSkpxgw8rEC9KyUtPCNKfgxMQr7Q51eXvC9h7kieTWKx2xmgZLSvYuioHqfdbWp2B4qjHECSx",
  "key38": "4gTw3eLiUBuAzht8n9pscToghZjKoprATwv5cN9UeUx5BZccoTSTy3FBSCxc2zDLQR56FnbyXVjVW89iN9LFDW8Q",
  "key39": "3MzHtvHrVA4CkBg1DjyFAgi57iJNt3FtBSrdPY2A7FqiEkBqAU1gBgFMmD5jxquus68kqaAxXXiv1g9MumxaWmY7",
  "key40": "6Hc9oibDWZZCFETn5mJyC4jBcbqg5g4iwmdJvq654GsZ9QFTdcNB5Uwxn3YAKeVLm6pUAWDBi3uRumrqneqrkU2",
  "key41": "2LSCMqSoCxEVTZ5y6o41wEFpe8NxknKxfzHmKQh15xHgdizpstruug2Q637NV7BsWBLQvH4PfNLsuwsrFgSMcJwP"
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
