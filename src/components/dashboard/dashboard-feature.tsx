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
    "5DAHZUoXm57yAixaHVoLaVWppMyh6qtkgLvFE39WMU7KREtasAdKtY8wWfeWp8KemwcEYJFvFqNcHGAKpMuH6NLN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U7ZodTCfYz6wntLSPC7aefF7U1aAV6JrH4hqn3vorBY7Az9LzbgKPDfxXhqYVVmDegH4jvJZGrrM2jx512xP8KJ",
  "key1": "SvsLUKVQriMVXuicgwRNNhuVpAQtXmassYEfZurYubZwxKndsSpWzandiUGh8dQJtGJL4yrQ5UmA97i8BwgtXjA",
  "key2": "53MkmQvncFWVVRRwYPypTAjgP8dgDyRoUkxxJoZ4Ej3PLJYHTvAAhuwmgyFPAJV9HMaVH3fzp4q8qgMFBDbt9t3V",
  "key3": "4BC5gkTkoBLHtiW9UwqVvTAwrqqa1mPLhgJdDH5oAYLhqvRQPqrsop4VoA9hJfmUgmR1Q2Qv2X3m8UtiS7jK8tf",
  "key4": "5CSyiyqP72FNe4hzjfGN2jC1pDnPPZuGSCXPvB5cRRJmSuzugvcTYkPFiTGw4XeMcXV3UVdSqTVBgGxUvsHuaDdd",
  "key5": "3EdaknuA33FUnpa3iGdihT6FEmMapSs1kXe3dpAMGHLbNZeazi1wtx8rkHf7CkvAaansaYtrjxnVAHcP8WcVAtJC",
  "key6": "4TJ69LUFuVikyJoXnKfwmudYzkXY3g6Xaf79Ayp5DcHKToPnn1Fd4HcvyUGSxNVxrLApyQzn8yEZ8dtAm6shunGz",
  "key7": "2mW15Fr49n3TGBsfu6wLdurcBtCtCPH35SYVVsWGv4kRmyS6FaEoZME2hGZGt8wtT5vM1rUac6yD2fmFKWuCBMYC",
  "key8": "3Gbf1xLntkB6RFACvwY6NHcpLi1R7DLEiqzeug9pFbNvZkCStMh5j65Bf2k36XWhrVRKfF5XLDuUnRcvrbeYTsKx",
  "key9": "5ETeBBNkkn6a1iZX1R2v4w9w2s7KTLK7URfFE3vDMJWX2JsipCaUGRG2o9tFQfwrh5d83EAKatTTKnPcVdpj8EY",
  "key10": "4qtgZcMuHSVUDK1LyYZbmDEgQSmruqwMkuWRaGamet73mPmHgSMNtZVmebJuC8bDsWhkH715hNfQKaruTHNDkPao",
  "key11": "3MxKorPjGBbARKyRyBQ8CEX14gk4twbjehnQVbx7ZXBUg6Cug6WhKvzjM2i6z8mRV8kDuBJUkwREmRLWZfyKfjRf",
  "key12": "5aKDTbAmVC7aC9sC7VJdCwBLofVntPDykwPizWygModC7y5EZpfUaA3zoq7LXXTUEPmsEseGpQL2yuoBnRrA5yXD",
  "key13": "tpgJnpAfLFHGeRmEMwG79d6gXMCHXz1nqJxozZr8GWKqyen6BAQPrtb9YpkegU6a1mX7NbZWVPRfyNWusNfQhZ9",
  "key14": "4NeLQ1QPLDg1TgZPZ6EZYzV4xjQsYb28NWgSpJw2jgGYramA3ZyQ8DGpZMxKNTvt3aDbWBDh4ypp2HK79po6HVYF",
  "key15": "5w334FCQLxaqhz8UxouNT8EKsS2dMCvhgxEYPLxojBkZMy5tgZREnw3HGXDJ2Foh8Dri9nkvnZfkZPnKaaP7pN6W",
  "key16": "28y7AVuUq3tSBKd8xM7qJhdezDmgC4isZPKxmTobMUsS8bHSffBb8CewFbqLVz7S3knCn35A8a3gybJmDcwXGDXE",
  "key17": "67Fqhv6nW8Tm6dxbhoAuZPTZaGkP1vcRhLdBQauQ4rSHzFWc81AapLut3gMhEoPGiMUgbPLsmUPFqHhp79hEbtku",
  "key18": "59HdFspwDdDEAYQ9yRH1wGsDN59oZswTLioTDc83K6Jn1VnERQoCBSKRVWUQ4y1Neh8hckXZRskA1jMfrortvT85",
  "key19": "Zfwnx3X8Pbjr8TNCyat8ZGhvS5DwT7tq6n4igRimvdmaJEyYDdSeKvG4np6k5ufGAaiVZiwNoyzkknwA5iKA3hx",
  "key20": "5y1LquKMGoodoSCf6dCE4yQNtfpKX4HcGrz2RiRSZu7pJcriKGje5YCYzSsxJWndpQ45VVbZqDRpVucKe6aSo3DB",
  "key21": "vbcQhW1GvKgYH9i31V5w671oakJ2PhoLEdQLjPwrbU3Mus49QzcXvhFQsg9Ug4waRtXyiEVXx9tFC4iT8YCFy9j",
  "key22": "CusWn4fovnNys8tPewC54jRXJu1EnSJjnvGX8ytL8UKW1KAHdjaoWuV48fnMrNGN6fogWQThEgsUD6z33hckB51",
  "key23": "3F5cbXhQ38VcexkhfxrsUxjMhtC9pDBDrc7tx9Jb6aLTkcTjhZ95j4nqmQYYhKfss7AHGEzJiWVGYyLxSKqnQHq3",
  "key24": "36TTT8ZMLpy9eR84KThSj6kfBN4e22sYqRd4g6PpgyTkzLzj6yQR7cf8xbX6HRUwJT8D9isqjBsqQ5u5J7riXrX",
  "key25": "28g1SUmQzd6pFzAdXDGHcjjsK1sZoA9BucQjigLjMXxVwWkmYdLsuVR9mK6ceBmVqdSBdvWoBfeCPbXQJf7ivRhH",
  "key26": "2oxHb8w95yifmzdFqmb2zyftGZNRcZUww54dKj1vQXjbEqJRHQqutEZgqMm9R9cwZVx8uAVKLHD6A6ziidBwKm7b",
  "key27": "3JDyuawt5Kg9wahqUqQZZm2ut2JLdS4u5A3hS8S49htKWAyahCQdaHQusynJSEiDL8KXPrxQ3vyNuEgqHEWCjxnD",
  "key28": "2voTiFxscEAW4AmGRG58ZWQtF1STa114qsqsNn2X7z1f5aVvkonAz1mDLAAeAh24AKCJWcw1zmedVFXJfVfaqMQA",
  "key29": "3bouzo9TrVaGfAbHFnPB1UqhDq4RhdLM7VGayqbWU1vMzba89P4MYMs2NtmbFFd1CJbE4prXKc8XRQxKjwrzt9cY",
  "key30": "38Wv6WsthJe9RTUDmVLJGE6ZEuN8rfyjbAHLF3xJAExSFhrYWoG1RbvvWNvW8DzKi713sV9iXEiCQmWJuSWiccRn",
  "key31": "5jFC7Z7pyvxmP91iqUUozvE8WSS7fJaU3BqrJWe652DJY8Srp1iohfyoHDp81VZEsCpjuH1wyZ49KURd4rUq3Ngg",
  "key32": "NgAdHAC1kAbNG3eKw8C8vfh4oDMBGCqtVijyrywA36bawfYM4pPXim6HTD81Sv7yeAVWAfcaG4kxAX5dC3rEP4x",
  "key33": "56hXJiwBPhHt8pHmqzjcTXzL2wXQq9r9snonATfTB9YibwkXXN66VjfSrGBLTw39PXBsQFALBLFm96QFbRBZtUUD",
  "key34": "5tXiR34NbRd1WzvyTmLric4RPMcs52L2Zv2aKL59RV4ELNmMjr6EjBUVtfx6zH4gRZkpCu9UzbQLYenMPcmjiZBG",
  "key35": "5RxoLiwbenKrhrNWxedCHbkn5wLjAc9S5EF2DLTKH7mAHpLhECKeWF1m347hk4CAiuXieKG3dCReMt9D6aGkVZHB",
  "key36": "3F9DEexEDrheM1arcDCuPokWvMS4oaqT6inHCcQxCHUFXYhJENUae9pqJ7wTuzaKYK6JZfwtNm9TXnrRdRwcg8Bi",
  "key37": "2oqfEk53X4AQCX4X86JnGv3HAuewDpyL7kAqX5yQjafNkJzKDVr7QVEti5hL591N6nNNymrbyrrPexdFDiPCJcfj",
  "key38": "9brEdVXcmu9Dq9QqCekQHyVkk6yiZKBU7qyiWjFAkokVKRVsctZwtCnL8qWVgWi2mztz36KKHJXQcZiwKohL4yK",
  "key39": "5TspctgNcaeSChWXHM89f2zz5t9QiU7SvgDi8pc1od6JwkQ2M5PvJQwpvECAQrGC2raAKgW249nCUaBuaiYwsPp3",
  "key40": "RVTff6LMXhVssPiEf3ZqGtK7H4zQWozvJa1yMuB1MSHipzXEYrXGtHjJukjXoXikWKGhti1hEf2NnLQQTe5Q1EH",
  "key41": "52zRBvbS6RGzz1iCmVaPMJ9yLxj4TDQ4v9YSMg61puj1v9xttzaQoExY2a1HPsUuy7RSa38bgVMiGeQpqebNbRxE",
  "key42": "5wYY1GUPJtNq3i9VoP3qaTcuxf16kj8m2kNNNU3AP7wuSBm1jaToCWafxBgvDBsYZgdV6FYtsxRCxdvJ7TqeFrHZ",
  "key43": "dQWWCS4oyCNk5Ep7fRoMo1KwFKSFborcePdqeJXGhXsSuJNsp5sAwpLtqRiBY9CQbig5Lg4csTXYLJrqXeCtgkd",
  "key44": "24xEEDY4GqVGdg8U7bM912kV8BXKHz31YFWDKRSfKg2mvJYggz1d2stFvmMbLA6Fg8DM1i2tbFiHsKZFbnKDcXz8",
  "key45": "4XzW568fADgkvbpeAa6LcSe3mgcgE9yTH1KrZedLrmEUbR5i261bNbPUTkifXkPCHRd7XoV2Xj7bsJeBKUWy3Ncs",
  "key46": "4YWktrgtRAuX8eEp97qZJRXLAxVtyJjnmmFYyd31WzaDtwNWiQVZXRvEwoHERAfH97eyAxwwAmxDSvHPV4SQA6PW",
  "key47": "4ge5jBT7LcQ8TVd5G4Lk4q1yPrDSqJtNTHiCHhsRNZwwJ5TbTVYKbEcbLV3Jv92y5rWaSLu1sKzKAT4qRw26V3gj",
  "key48": "2doU46iwZsZRCuLhSzH8caMtPojqBbjLAoEdzdz6jbi1uFohA3UKGLxTvdMtbuNKr8tr6QRojR4JqRLp9gjpcXfU"
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
