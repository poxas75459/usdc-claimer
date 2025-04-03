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
    "3BZk7KUMcqzm8U75KanpSFutCXZfa9btkDPrghzPF9QdpiJUx9SPKNssyzmmD6rYHHR9PQefAoWzgkvKq5fbEJna"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n48NAHF2HML5pW97ZFBzrv1Csdfgc2oLia26sf9rWRiBBxkWJTJHVeZ8UjA6xQJa9mbRExxyXoQzDyh6nq1crnJ",
  "key1": "2bwtZ2euhXipeGzrrYtwkFbofU21LZe11rZZfwuJGiRpw6QweuMJApe6FPjXbW7h9FY2DRduwyAL833mwQnsRfkH",
  "key2": "2f2R58brpqQXvBqQ7hVx5eWANHHGqSYrCWLZvPb2D4MvaLkQkAnoFwLx1RretC8gcdFEE9AeB9iwEbRU1KtKDdzQ",
  "key3": "5oJQ9nb2LVhzG2WYT7sL3TuLtrMTDEW5ShZ2EYVGDKPmWm17K5SwupRTbqwoLrEz5VWaM7und41x1ztpF85zGXms",
  "key4": "2mDysumXcXyv4BQ5Vt3r7jG4UFyUrEzHozN9KtLER4oU4uqtZ2BbuXXgTzGvgxGFTcdr1Pmj2MH2KsS6fQTf847h",
  "key5": "2EcKgcUm9FeJP72jqgJW4xZZL2zyBPN8HuitamDgaeHmjWhydWb8qfvwT52VwyRhkDrej4TdH52LQwMrZu6cjsTy",
  "key6": "3HhcoVg7Pcz7HPn9sZ4Tw7FUdgaeDMgQhBNYkGauT65K2HUeNgx83D2uR7W5heZVCjKLKqVdUaixCfzXjC4i9WT5",
  "key7": "4vP5KoLfs5YJLe6pTjaDhf1cxsbsGBb1gjC87qKr9MrNPfKF9WyLnv7sWymnhj48WG44hF3VvLB7sz37v66yrmCC",
  "key8": "2fpuWQTuTUQPiBUFywMqZGEFnhQb3xEzpb33aksNnn2n2eYf5TsfofGYkp244ZnaA21x7CVhYnBgcRkUYExHKjAF",
  "key9": "4mRsRKFZcZgHMAdJpZrfJuuUYPXDQmMrmtpXnGf4RuAaYuuaps3YCvgWxfUWQyU74cyJjnW1WZQq8QyZiMAMBeND",
  "key10": "Hu2QmCxoBLYtU5VygGXUYus22pEV7VDyy6SA8qttnVCLZibSz7c3yx6WBZZPXXFuKAXnqzRVHqG9HtVz7zYUZ4H",
  "key11": "4PEwGYivFvkpER98vAkEwFs7xQivAU9vchHofs64aJumCgeNdB64DmyYUq7k4db185HQiqAypCmzbSkvHR5fruS7",
  "key12": "qGbGya89ru54WxeB8EQWqdWTxNhyg96KdVMBfvCzJv1YFo4cuqbLHtvzobJuWVHoAJa2H19KCNcsN37QwivUuPB",
  "key13": "64M69H7S2YMkZaCZAEV1LkSn9NjMyd5F5UThGk29t5iWzLP7Sfr67eSfF2qr1jcUqZ7Qip3QgSfor3JCHQzAh1no",
  "key14": "2xDcadefquGgCp7ELAaeD4VG7o7ZfSuTp1MmHASw2HqKBvcw7q6rzer6fPZtBeBWGiPLroSDMxe3GturFzaA7hb",
  "key15": "62ztmV3SSGe4ceCAKUcQUyAzEkscR1sWzeVFDKKRzD3CX96qczyqDGvdMTzQXnj4bCmuRUSNhJ77R1MZc9sckZpV",
  "key16": "29oJ1YqdW2rshLhU8zEwvXsLegAp34uDrG8iUHaGUVJZ4KAbSimMhkn6xsTy9eZZvLqpa7s14FU83Msdw2UFfHhN",
  "key17": "56iFxcv53NQa4kYJW2no9Etg68sN8qeaavcGFxAuHaoHjDHzQSB8f3PBKEbKbzRYZQxHsMkwu3TugF6MXDZdkXSV",
  "key18": "3fSwSjLDbhyAiuYTpqwXidFwmB6omvLaA3N9vRfs2tYoLJ2Z3QQrxUPetAS9Gynja4hPGLyFzECGxMnRUtYUb9LC",
  "key19": "2V6Mq17mhETKvpKPQcRoc2ibcSToLGKcqKLumENChq7BSHpjKgevdjWsva36kdcFnJnxvs6XkswDpdwbD3i77Tkc",
  "key20": "4m4SFSD1y2DThiTnWQPGfgVMcfVJJRyQ9qVCaRJCVjUvV5WdK4Zrbxmt3aycUZTbEaTQGmUcDAcXdKx6oCGh8Btr",
  "key21": "5PCFSwsiJDo2968N2Hp4bgtEkHhs4s24yvj1V2hwjRnniYWigP8i5a4xGL2rVyTDegzECFodK17RvTZzYbYdL1Pw",
  "key22": "32JLgFCvRJ4Zvqdg7cSCi5h6jSi6vsQVzWSkpZVsPdSTGioVdD9FqoKpHyJgP8ZbK8Qt6KpkVEE6vFUpRU9AZ7YC",
  "key23": "4NLejyCckJfBGs8grFq29JLhHiFroEtfYVF7Sf7AB3Sk3WTAzDnRDfLC4JuV5c9L9r4x8ZNGaVyLFqdKfpzGx75C",
  "key24": "5s4dbzsLAM1JpygCJNfXp5QcyyAV7xrQuJgdjhrvgFab4LZRpxg3mo3u8upteYt2cYYMAqx7x1uZvUDrSheYEqjR",
  "key25": "Japn3fRxKvkCq7FCteMcdGHcp8PkM7yZWzJc3CKXk1SXciqKjo21mSW8QmNawCQy8ZAB6Rk6WK3BE4xhQWGprWA",
  "key26": "J8gTPYnvwkAVvargDpBvqfHGviCZ9ST19oVwo5ZrKk5Vn4VAUjKhzDSMKLJ5BfZnFsULLoe3nupmM4y8V1qAY1R",
  "key27": "4nrugAzc2Pkfkr11rudgc4s9hMEvBVK9b5ZveChMDWta2D84FE9r5P418FqhZU7uUYGhCDrcpA9ycfnj41xk2S9J",
  "key28": "3hVUCorvTknqEvkayyNT3UTjonkpMYn9LCjf3cRF6puQbUD7ZPweBiX8ehYmJ8Mq21MJbseGMtSeGLS6RaY8vX1b",
  "key29": "QCGZNRxdN3ESKAL9Lvt3BxmL1j4SN1timG9L7AoGB2maFU9aGCh6S6UAg38LJPVyCNMnZvAxiixH8nDqmSAzoVs",
  "key30": "4iKr2MKdoaNagLWUBwGLqyTvS8Uf8MsdDjyhR61kArLPwCdC3CMsb6gZtqY46P7GdqvVK2wSHo6eDRXu6bAZ4Gdm",
  "key31": "2Gcrp5HV2KAaK4KD6kxmiayyKcEQUDyknF63FW7B7RYaoFyQkiVhNLaDfY8tvJ6FRw6QnSrrZ77jA5bPrBce8am7",
  "key32": "7rGWj5iSUw8tVjr9avmTYdt5zr2ahXkVXxV1mKzGi3DCwUkop8StELiRNqx5xbUhoevDA3qGanorxLNfEJVpwz2",
  "key33": "3Dgygos7LMbMEQUYTXhy8bmz1VMkCMMMUBnjGXTp1dv8wZfia5V3QEZ85UqA6E6VqRUK1akw3gvSEjJAMhnqBsjW",
  "key34": "3wCKvTUfy2rCFzPNcunRZ1TnhdGx9HvKR5dZx56mfT2rYMEVarXWYrouFaSwmfLAQACEBM2iq7NY2xrHNmEZkSF5",
  "key35": "2FwrGFu7SbTBKzXsndZQEG7ed9janPsFR7YU1kx5xcrnGAEP9oFJ9Jd6rifRuecYz12j2HNrsWs5uYhwg7r45uFa",
  "key36": "2EMnsS1EU99AgtguVHQSJisjc6gjpJbyaWcGJrjXDa5RmUV8cZzw9eLLYk6xB9fKx5VrmSYffafR9SNdWPDzyC1x",
  "key37": "3g3wDNiAfAU9waybtVzqG55n14aNPCyppuwGJ7o7vNV8Sy4vq52Zbh6oDYo8f1PDxuuANic7fPf97B6cVKWk7L9M",
  "key38": "3zCsmjJh2RYRFbMbFDDSAjYXSzFGKfCUGN9ffuPBXkxPpXX5K3C9P6LsjJ9stT8oQNgt8aNRb8A5SYs3GvDk59yT",
  "key39": "2kqnKxCaZoqGC6nxwFzwSCG72esoYk1nGwE26qVKq63E5MZiscpomrVtN5bWk43vW5goaEMUdwsSmuUZmKTUakSM",
  "key40": "37BELGfmZ7hv8A2Acu8V3S15pAzPJ8YWrDCy14o9YXpYfmS2bKVCgU1hhxqiWNfaBkviJgte3r3qeJLf2UnUjeYr",
  "key41": "2yLpGmH3cvayfxSC14WWmUuhDm49FBXKZ3YzzuzWju2Pp1LfiMsRGkMiNxeU7MwADyeidJuZ3u45E7Hpzz3ikKR1",
  "key42": "4d1hxfwM7zC5TmG1TA1PXsDyG6dV6HbpxgLVy5D492BS1MsPi7JsG26pGrQqNnHNynLfBi9ihqKhBbUSEy1cK5Cx",
  "key43": "3cxRVSXk8qJ2eZrqEfuWwhWibv7G5Kd5qHcbHBGHBVEXc6TuwivQbvqkWr5vPnVBKgpqRcePuLciZePdW8c9VekN",
  "key44": "23F8SZpTBjpFCbgRw5JCXsnmLTej9N6Mvftqy9dBbEW9if2KxpKjHTDnp3pHoDydHfrGiJ9hqf46CAm6RGQmCAuc"
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
