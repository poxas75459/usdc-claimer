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
    "3sA3uvZW9BtUQkmWNnjYmP4TP2uJomK8tKTvGCrEwkCv1AVhCWWxFq7sCqAzAhNPf9xdKu4NajdTH9QFNng2N7hh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C5drKHQSs3c6bjZUhbVwnHDLjEfBx9oyGcb8cbQ88VZ1xVf3DJ7Eeyyjc3gxfjumh8GFpGp4MRfyBzBLuxDFJHa",
  "key1": "WkjT1rSpYjMBqqix2mzuWJjAAnVjp4FT3JyZPYhTJUkdtFQBi715iCfnxZXMFD29dnzM5ANkNFY818RvuYbkSKM",
  "key2": "PF9BQCGBx8rMhs26NfZXgy6Bc3GioKkr7ZKLbYjewAmu2UvuGwATja6pcRumQxNJ7Dt2nRjW8HQ5VKn3FNjJzvt",
  "key3": "3QrgW54w99EY8sCaLWzkg5Njq7PFN5y3ZBxhd5MZiBYbopNMn41ebga4F57mvpkhF12BYJT2Y25LgVXrxzs8mfj7",
  "key4": "2YYNKo3Mioc28EN9BgwXfBCEkWeRAuC5kMjVM8awDXGazyNvpg5F7UQjoC1hNQnfr7Ah3BeRNqUVooex4eyVreiC",
  "key5": "2cTvbNFDZ9muRHk3wQAH6He4GdJUTi8FmAogkEvQfpNUU66CgD1M4xyMFaqsbBEmubydPqzMx2H7UJ2knx8vYGSg",
  "key6": "aZ3m5YK19pvJCzcep2Ly3jm5VWy3oYjHLjmyakpF8syya1uxtVHhPRAZZYt99UptctMbvBNzpJ4Eya9A6uSNYcE",
  "key7": "2jHyN8rBKScH7oLWuKgcUJzaL1r4kAxmRQovbYkpppuamQ7jb74mz1w9D8a2Enyz3EH99uAKRm7Qkg1fd8fAjKVv",
  "key8": "2ENYnW78tyx5ULcDrkig57VejmxjvUdiWrDUvNdaFGhTWZcMVrnGYqyDHRC9yu1d7ZjMZ7B2c5aj55RAvVbeHWRD",
  "key9": "NnXNMthN3uFfTiWGvSwBr6DcKTyzaqxqfAnhBsCjAiGzSuXeAoTThH7AtLXs5HKfxhyKWTdEuZp98bZ3xMMEuMM",
  "key10": "2wb3YuBFY6R8eidme97GcZ1UhP4gNxxZj2zr3ap7beCx7LQ6cgUcWVJRYYc5DUsffTggiwk26p8AjLcZ4MGtPbwY",
  "key11": "4wyQB9p7ndK36d4HyDiwbc8Np9Y6wmUuf9k9UJALNWGU1yyFwfDjQ4QVGp83jgHh72WywaaPZTh7PVh6irMeJjzo",
  "key12": "5XqFM9SJHkNs9CtPmXWGHpQyGDDy3eXxWsKqnym6rA1pS2PL3R5cZXgtXLDRQzFHaPPnbpwRqrejrPQpxAFmoB55",
  "key13": "2xzF2dUJ9f6MKqdXEgu91boursaAHXyEgkTZtmxFhEJSFxP8yp2UAKk8Y8CcoaHzbMtyBui2NGHbba2bPGtuNeL5",
  "key14": "3y2L8Gdg3XyDKbVejSufuSXvHUCWPcGvAtEzDkSoLdh7vb7miYKFKDUr4pNEfzG5ysozEseatm7XvrA2CbH8SU1L",
  "key15": "Cu6H3hdfgJdyyDaWBTfPM6Z3SPzkz3Kzuiqm7wa6YTW97CfEoH27trHE26jsmV1iSwaTavQd7C5XiaAZviLaKkT",
  "key16": "5ZaZyzkpR2LUDCS95LNaq8mfsAhY9uTw9UmMWKANTUNmWQFym81AXsjegXo9fYeg6vDoRWMrhXe7VNV8FEHRgNp7",
  "key17": "5AnDntaft9ygDmXWFMpU5TC2f3X1oULVKNcZGwyYtiAGxoceku4b3irAtTfEhx7muodFhmPKwFNc88ajVUQnWy8G",
  "key18": "61TujDPYNcd9uH3vip35F4dM9LieTU9hWhoGRp3kRpuY7L7kcTmJj8zaY7w8jvg6kPfexynSPBeoqfTtaajuURte",
  "key19": "2tCQQ1QsehChBZ5qdwBUS6njfjCNnUjzcQFxJcppUfH2vxH1td8SJbYuH942pxTTFP9s4FN5dRcETFZcyz5yQ6ni",
  "key20": "9VEyEWjexfssy4EbqGh6uywTpoeyhWLHD464mX7qezHFJFZNahGXKGtAqBwoFcZ16AFsRZH1fBqUtiVB5gst4sm",
  "key21": "5J9TxrXDFMyty4rCGqFSdSGGthUyuirYvX6mvfweKad84GefoQkv4G6Ek3fYgpx7yJYmA6B6FboDRSpfFksWcKVT",
  "key22": "51sadTBgvyxkMk4QZUDUKNq8E1H2izDAtGGNqsAyd3bQhm4G2CtQwT8tsyQQT564wxmJ8hfeZgDmuWDe9NSZ7Keb",
  "key23": "4tnpVzMh3WrVCuqjSoXC2vStciZuSVYt9GZLSEqtDjVG3daitBq89Rp5swBR9ahwHQjTeybCRNizbv93jtb1VVhP",
  "key24": "JRdH8gbuiM7PzFQydZwNSdgKsgGMizo7HyPt6qzatLWJMWuuyYMKWNpzwL7ZhpiDKbYTbtFzMjqU6HfS5X3LktB",
  "key25": "4CfSimzBfURhwkyvVDXAwp6yzQJj8pCmP3LE9vbXrWwfB3XByAu3hexgrRYFcqT9q5mFp7UBE9G93KoFAPAspnvQ",
  "key26": "5HLBXLa7R7J4XTEhWqUBiCar1YSfSHhFVkrptKyBccPCw7FevYvtTpMi4epXqaYMiCFLW8xpazLvjzFskTu1BA7h",
  "key27": "5AcUviHD24vcqHyZ3nAfjAotiJsxBeGZxJJ9S2BNLsFXE6gnfAc1uBEtArAP39cnD5dUxwcV46yTzhExvev1rRdP",
  "key28": "2UetqvsCkNyQzGfrW9xSyUNK8cWKU377Ah825zgUig8AfHPvvVnd57xFKntdFo8KatH7mEdgdBQTKK98pNHfkGFy",
  "key29": "4KUCw8cDKuApBGjwZxA2DPM2bPDuGaa1rD3m81XjPgVNu8X5Wo5xGdaTHxbyWKyrvFSRMq8TVifAvUzjnZAvC7Tw",
  "key30": "LUGXEpawLzvKmyJKzoG89FfihLK5sHFUa2bV4ymjP8cqZoKeAp63xUDNpsDRAEXFVgoqjh4uwENGtKy5bqRQz13",
  "key31": "3HvcfQcBMaMqPGHwnMxUBHEVMaJqRY9xbTKCJkuGYCS6vqBdJap4aVugS8VQG69TSJwbE2y67CshBJKm74oWAYWk",
  "key32": "PaYXfPfeCao2Rdvm5LpSjBdwxZpHTs5rez9N6vMfwkvFK1h4TUm4rM4cRF3dZFDbxjcqBwJUFBbj4dgTF4kLEkH",
  "key33": "Aj3Gic7qcq1UbYRG9u4bHnMe8ni58fVNLxX1dyVkNZga5GFn78kvdBMMq6YrwCS8fDjwPbjoaAnLKKCjcpfjeqs",
  "key34": "337W9t2Cr1uAEVaevMFjB8tvXN784kekgnoPaeTfwaZvBTbAXXmBMgM3sM2LY8wfNqZipwMzcrYSxLRR7BnsbVF5",
  "key35": "trL4Kywff2EGXk6nZYrnVDUM2q2Bq9jNYVxN6yQ6DhgCHDGQMSrGCZvmvL4aXSTvtiaqNdjDWtts2pXa1RNKhPG",
  "key36": "5c3ifEMZBc7588VT1FuAbj9THXfZqaGLzBXxkeYV1nic28TDXprqQazjirCzidKMQG8Cs6rXoVvNCkMDsJX26Zaa",
  "key37": "556zNtxuj3jCsVCrzvE2P6aRKspjX8tuUSrVMXhSyXKB2y49wW8vQJPzx3hAdFqBfe812xFPnj4VdH3yC3uEqWZX",
  "key38": "Tsx7SKfUDgr2uhfz3hADBpV4j5oK8AVbzX18M79YKA55yZAcypYPwLtPjP5QFkpnk8venEx3BswxmGA7ke3F1y5",
  "key39": "5gNhxFrdoz2esTjvKWaKPYPEfPG1n6M9Nq4cykRg8UDYWcgmXqzrzo1gWSC6H1nJEqaMKHb6FsZiFMohG9xX6SfX",
  "key40": "2KaeX6B8XGkYJnXsziQR4bvdqhsog2Jm7UeuErVs3xTd4HMbLsFay4JLfHVB49QQfJk9GTW4RLJHbsH3RvWMQfuA",
  "key41": "fEVFEbHniA7PPtvSBNfgSvPE2hi9GPHQh1T5QT6iqNzDcHVLYVcRZ2US3YxxcHzA41j8oYEP3V9Wc5s8yDhfxsR",
  "key42": "255Bmmff1MZXEeRp6vS3Njf8x7iymeHnc8xL4uAmdD9YGqTxkNeJVj7a5PALprMKSmEDSdXcDBAfcr1JcpGPt6tV",
  "key43": "h4XDaQG9m9FuP6xSTryiugxKvURjDVr7V7STLa3XXt1Q7tiB8cAv3V6Jay37da7KaNbm4NKE3yxGiKn8eXcDMWG",
  "key44": "Eh9HAp9atWoFYW4EgagJz78QqxAhx3Dbdgc4vkjFdZE72JtfHHb5snsvfqXA382Dkq1yp9H4LGa43c1HfaBAdUF",
  "key45": "2o2PfAmvwbCa2qWNLEWZktFyJJZUmResp9XmXpGuVxb1FSNyNSTuF2N9vG4MeF8aHVtx6T3b2J3oBifWYYm6CafA",
  "key46": "5pzL1U7DjcUGEC6xWGzAek5xRm8vKAMZedaiPfj4oK9yErDTUabDyieThujHZSWGDkrWGf1H2fBqBwb4T769Yd1Y",
  "key47": "5zEGUWaEzZAEnTKsMHTJyJ495Mz8MtqUhRRYgwrPgaVMErscNBWRHEKYuedXjBdhLjRsLNzZixXNv6sVLJeBmfTa",
  "key48": "eDws3JK9szCNGjWTkwTQu7Ge22RpRsuZy8AP2R2gBouZQiiRGLcpgMCXPhySvmoxfb4DzqGAnmhfNLTuSkWK2cw"
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
