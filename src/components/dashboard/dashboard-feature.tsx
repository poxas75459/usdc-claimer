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
    "5JhaeDpM1weBeF2nmbHW2YGt4z9TGPXi3CWudFPnRGsjDnoiTxS7To7oC9dLWL1FY8yrodMRCEW5sB5Sk2rn56Zx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kNzYB62QTDFdQtaQVWHu96DkgBVQczn45N8zwZhMmScVGXMJjZDzUGrGDLBpLNzn5KLvr2NqYLMUgrVYM2jCejc",
  "key1": "3kNjoK6XG4n7xqCiJ2sAx4tqtG4fnUX4Q8cMkctpm291TUKQBqStkf2vGJmcS3pjZy6wNiBDTEU49R8dECEfrdYs",
  "key2": "2Sjmq9im4S43csefX4qaUBUWAkDkUsGw3qy8jNsCDWkfX1BrUaCRaDuaePn8MKCCXAwAdoTd6Li4eWswHFtr7KYJ",
  "key3": "2qkXT9DSMw7f6PnxiT7saArg9m9a7hDpfEvWjfcSDfzT6RSh2j2p9PyUXAB39o3APXA9WeVwQUteiyQYFuGkf2Nq",
  "key4": "59y742kq9dhhn1mJox5G3SPZ53wQRpTLZcVqFBwiJbEWpuyJ3riq1BiMhtwnGN86nTdGxYNYt8CkoYmAHQ9GPL6E",
  "key5": "51B1iRggeYh5RGSehoXqYkYLUxJ75FYWZk17nozZubEV7NRY4pVqFy7csdrnH92Vfq2bPyS4nX1XsrhCD9UzNtS7",
  "key6": "4zULZ7kGU1DpgGDauzrVm9ZMjcC5JECykBZoGvAvip5j7G8ApXXn5DUdipNXs7LEJ7SfKsQzUA6NDVwRcS8ic5AJ",
  "key7": "3P5azQUEbgdiBpqyhwK4q9jndnSifhbXGuoCmVu16AhrGfBZvcdK9JKXFZPxmPGkWDv7QfdfFx4xmVLxcPBYpJ6W",
  "key8": "4mUXejHRDzUvwnBbpSvUwReWJ46VJpkxGtXguQfjWH68kXpi9sstcaCZEthKXJb3Ycsi6dF6o6bqZj9vk5dkAAYT",
  "key9": "Wn3sdpmTSRdbbxzfADNMHF4Ns9o9QnbkETKQPz74tv9dQVzgCqHLszkpgR6xkjwZUNTNJ644YsTQtiV7oRn3Usv",
  "key10": "2m2ZARDjKssXfDhSfDqUYD2ZCymuKkfiuwsxCkCJXWKNzxkko86iLsvAmoHCWUT4Mtwsrqr2EtTLmWnLzmNi9tUr",
  "key11": "62FjwpLAJxVwjGTwhyQzvya3DSGVWmoMf2PSSvuwGwojCM9GgpQijRXziLdQSY4pKZcfpCH2dzpFH5CKPrhwU6vT",
  "key12": "2Cgq2S6kkxuTNQQW1rkTWKbfC35RVNs6C3VUJCKim4e43yzihYcGQFcXy1zRTM9FiL19wmmmR6no7oUG5QRZgCeY",
  "key13": "5wkzxxST5sfrhBW9jJE7ghhxUMW4fKt1R4S4rFL49xB4XpJrdekbaBAeS1SYmN9GZ4JBUck52eP5vx7SiXhYdFg9",
  "key14": "YY734JmpskmeQqqr9zaPNdKkYP6h5RXEw9yKnCi7cnw4xua4Gk6WKV2fZzoqT4QavVw3ZaxZw1HbaG8zr68u3ps",
  "key15": "3CEHK94AibCr6MutmeWxJQKynRpNmSuQSnFCu8uM5HYsmVWwykf9Jejaut7zukZN1ak1DN16Js6ugzJEMXokCXtp",
  "key16": "5SGwbj1ezLuR7ZXhV8iTqNYLFRVgcWqcm5WBnomYfGQDQU43cLuoiah4aQv2sHx1e2HhBL3amuVCdkwcHmrToau3",
  "key17": "5q2KdFPJJq6epjEAmUxweoYEREA5mJUdgJjXdMJHoEvmcFUtMKsa4wZcZv3vgCDGhWAvcHwMVMFJ12XyCpbnMqXx",
  "key18": "65D4cVEM9SaJKKxiHwZvKbzZBvEC1mQw4d2sK4fXnxBNM7r7zRZkuWCk22f23igsu9mGczaETPVqcunKkERXv1VD",
  "key19": "3MnQYkvAbVnUu1k4WE41GqmaM8TRUARz7bgZXJkxijGdf7DtTnfbwCphRb3YMkWZxbg5zMt1j9nd9WUBvJZVwijX",
  "key20": "5RNxSha1hXE7dijQc6egWn8xn8mMHDLB1awaabbK115bDTehNG9XJm9oXnyX12QJXNZFDyBt5YYYcMgkVYKeYFoy",
  "key21": "5Jf3mQjJ7G9TzwwaQSGZaEQqARSysM6k3BfRUdZ7ZYTR5NVthZeqJdj5NjUDm2zk8dmSvfsC3tA5WGx1uDdc4eQv",
  "key22": "2VsGvdJN3EpBLbCgUf69vrbMXuoysh9YR7zCTiToGMj95gMfoV164PnddWXp2jhsjLWYz3p6fcu55BqMcp59BQ1C",
  "key23": "4oTcAR1Zpo5Q9WxPrAh4pNKtxxueyLKqZbXPRmpErGEU6BL5aih4hZkXy3566sVWyNkvgCmG3tzfKJVhFpN9LvCp",
  "key24": "38nW5mHQDe8zwFzf9zWEAjimmfD7FBukoiys6dTPzHzdygjmVvZkPtNgeXHtzGeQkbpagZCo457pWZhg87m66PM4",
  "key25": "hatnDwcusEdUveyZtuVhBJMt17fH9QpwMkPdUEZFyNcDLZsZBQMdp91TsjuYcyxcaJKNABkCXFPhtBx1FGtGRdr",
  "key26": "5JhP74DLGGYRo3ZdgtjB9qR7LvN9SXujE4S5K8ToXbDEwHANGLrqpYvnPFroQaeaEpgVGVQ5vnophTfaG7JwrZEN",
  "key27": "5MBezWVnbRc3UHDBJPg1nrQ89NwvgfKj8hi2vsiaPxeoXayxP7abdCEZFYjTTU6ntugA8UA5rckaEjqVGdG2wVfv",
  "key28": "2fBHSEQXsUUGTANxpavKKZny2hDkJzk2wpqZCxwg3fEShM4RwUQwsviDaQgbUMruMZyM8ZKAh1VHLwNpg2XGA7Ss",
  "key29": "4MXVv5XWZa3h49XjCiCmidniMLR6F7bFCGfCxAc66wZzL9Kg8FTE49FYfvwQkdjp61h6SGjtDpHksMd3vE1E3iF4",
  "key30": "YAvb328JHjEAZDUhbz8hxmhRmQHT2yDRwgeWDVEMFKGADUfRWvFmzLfBXEwsCGeV2nr3UATTQkEtX7vgH5bbdaA",
  "key31": "2zdVxXXg5b6R5kBLcduxo8deQsvrnyRWUtaMB64XpkAjRodYEEonVxduDCVWxYLucJHqARwtQMdgs2eQBRbyXkyx",
  "key32": "5y6nnG6AFnwvmWYbhFrPLdePMdL2bppkCfVENeF6YBRxQArkP2iuFcBYHDWM3j1VesxiwmkGrC1MgNokDwehUpwi",
  "key33": "23smVixQdXDMxcAW2KiXGMVYUKzuHxaw4QcAq76cw6bzEmS1eLFh3FWMJyPedCS3fHZwT3Vujc2Vc4CjbDEFLSkJ",
  "key34": "3CQPEvRXrL2PSGCwjzFCR7gnTDtBcaxkJ17zURbdzD6oHsAnmAzfKPBfwaxvM61RsE3qHbtpLJRVTGk5A8BZrXPN",
  "key35": "4CVt5WuYKYrjynC3o3GuWj8PSEaeNyNprsXQ7wUkQ6oAYqVjcUDgwwwFFcErSNgfSJNFjFb4b1TiVEC4Qqz7kEj5",
  "key36": "4MDN6e7q6uamGZLMCzM1Fjy2HGViWSVkN2h1QdULnpdYQUZLmg66Hrp5Q6ip8jw9Bb1M4RqqiE9WiDKY8hKX5eiS",
  "key37": "45pPFBqpvvuDmMYmJJDvkSHgiYK8v4XZULwucEkasJWaZm9UGzTHDXXFgpuJEfgqqJajxhfB63aQYYeqwXt1Dcgm",
  "key38": "4LEFhiSAzSwwFGbS4ZxNWEQRu1v5J7FJzFTNwsk89oVKhTpeQUXmEuyPiAzmvqiyJHa9iaSQYjsFcP7xFe3s9w5v",
  "key39": "5BSnMwkP5kZd5n7SarFezvLrTv87AdYQJtnyprv4CoTJRp3Na3qQFwskmzoVeCn27VGE3RVhqq88Kh3DtgnwCc7W",
  "key40": "42Qj6pkbiyMAk1Zynx6aAyebUfCwjQz8NKwPvzHQ7aAg6JhjikzookuiyFq2EPEJtXFcD8y36DG2TV3CGijKVo8o",
  "key41": "2FeZ6FkodMjvkHNdaXv8oAVwM8GHVATvSTzAQPRL4BD1rnmCwFFmMFnD5uDAvKXw8izW8hgzqrfxwLmW3Uy4kq8B",
  "key42": "5gfh8kqPbuxXDdjaNjbuaPqKvg64ToLh5LKzY4VVTacfU8vHgKZPPYVzFgF66DrkxP4pMipTAuUqprWqW3HZTPDS",
  "key43": "4zAUxtaAZw1zCHhuiXJNV2qGkQu9dAiGh9r8snfEHBg37ggQvbRizmNG84ydXeKCH4aofi2y4kRjG351oLiznueM",
  "key44": "4XwqR3TJCrNFDz5WMCo7QgVPWEia2Na2JWJz54hjz2WScP6KuHNoMqZz8731A11Gevn1q9offGMNU3yyk3Aw9yT6",
  "key45": "33jiFYT8FQa1tV4MLiYFeiavsiqXFLqG4xBTjd3Smmk6HMcRRMRkm5FDrdceN92GDye3WdMHZ5WWckF6VMQf7Thz",
  "key46": "53qBaFhkZhRV8arNEgC4sHjy49Kbp6UMSbVXPRDmHR5WbRaYXTci41MzY8ftvJSWDqUh1tjDwbCnXqiSrmxUwyz",
  "key47": "5c2kNS9J1iYvwmNCQTxVXgYJSvC6XDibta3T5uV3MojAEtp2uLKAkoTe1GggpH6NzwnCQxr75pJyCmzzEW3VX8Bg",
  "key48": "Kir48rGpm37PwTX1cAw4ZXfb3vyV9UXD7kLZTZZLH7u2LxBYkiBNLbAPArSLSDaLnNRFXDEtwGrhyiWRHmankWm",
  "key49": "5mB1cdSahFSA8aqWy165cEzo5kBUZGxT3E6FKPs1ikqNav51WZuHQoE5Vc1xtvfiShdPfsMhka894y8HWEEtnx1C"
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
