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
    "2k6Li2gJosTNinKcwbsRSRGBuTMFkUjH5V1C5T15vRCWuXLwTeogkFfHdB1yZE2SHUSRfbog4nCu1NkAFzejsHb7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31RfdtepvSbUKNXfYxDscFvHUPgRh6NXpo5hMa4LcZTLTkVh3WyGyLxoqaq78grTRBUyarhJg5aodXCmPTxJkrP8",
  "key1": "2SSdPurZdGwisPfNDpRYMVGUjZ7L42YpNXaTHB2CtXcWKuZp17pG4DFDTJGXEbJXf3HhBfNjXM8Kn3FvnabSKdcZ",
  "key2": "4VWfEbX7vyBqtxeT7ygbYAgPfCtqtsxL6tH21wH5EYPYS1PnZk3gLQpJ563QKmZ491ERSr6grHDZ24JPnVDxQKPj",
  "key3": "T52GJ3F29gz48v2JfdBFRa84KwuUpLcRsWAv77WcjkK7ykfKFaUtCDgsmKtYAVunBcLznafJMpEB2zPKGA8GDHK",
  "key4": "2B2ZrRv4FYZ9QiQLvrSWYHGXjB6xFA6HcMFPDgAQ7CwcBJxBTYHHGkGTTni4K3TLVtc2Cu6BvVpz36X8U6pHk6oi",
  "key5": "77arEqARmxPEgHR8WgJUmWSyVicHHyzdXu3fybAAoUa7Aobf2E4EFHp99Nec6sstn6UyUdHZX1rwrLuEZN4zb4g",
  "key6": "5BcifVEhehg2buzyLza3npga6sbfkXBYX3mqCUM98AcFvx2S27BVaJ9Fi9iLfUi98aghHGR3XDiS93KSSfCbR6XG",
  "key7": "3mGvWMz7nSf6TxZVsnKAuRfGhctBGXBEHskWTn37mNz73BPyi5Lhbkp51PZoccUC1bxgCE9EFnhtbEG8cFBNHCie",
  "key8": "5hL311NsuUcwfgknkvcMucuaeKfG2cwYijgcWq9JGB1FiARLLoGj17JeJ7sj3678YRZfUtguCor97GKfGuEeVcQw",
  "key9": "3sBkAzsfzGG7EmU5st2wo6CxfmQxFhr3nFurh2jgXzxDucdf7KKWGzVjnTxTHJ61NRLF69HmbUwAnZ4Ne24E7sRo",
  "key10": "4uUX1bPN234ZLCcpvcnQEHb2o6UuTnkPUTcGX9BcbaoaBNLWYPnqFYSBZGdadZE6VJn9g9vuMMVWGjK1VKutiKHL",
  "key11": "63jbm5GZCLsgbY1aghbHpuspaQvYrCWawdiNSzXCruH2R1CtC7iMu6NUHduA5BvtDob6RZwfJVeAMf8roK5RUh3v",
  "key12": "2Qa5hzV2T481ZMmtEheua9adkVZ6uQhYMCYYHntpJRMvDhqV5KtWUTzyPLrEjjYCDDvpQYEhd27c5zRUtMBScHoh",
  "key13": "5feG4E36UVKTucwJXBvVr5EkFzwgBs134mXHK9rJEhm1rQurGBraDdANMWS2Y5icc1jMPUaFCBY1tG7MMjeMeBKc",
  "key14": "49uFYKHekoRWCyL4SxJHQT89gMkDQdYykt3M9XhxDrAb3Sq3Nzjn4yP79wTVg7cjhuYfxo6moALALWH6tJtY4CAx",
  "key15": "EQ9ViMW6sxhUKbdoRt5sThhCQisrUJ2Zb7JRLvZRgeQsn2ft1bSP5KV8SwvNHZhBjfMXUSiahoCzUSv4WpGumpp",
  "key16": "2Nd6fetWfqLSvyBy4fWDfhV5MZ9LNAL1pDs97uG6fbFhyfootWmJujsoPV7hrZ6LaKV5puB73Tf87xGsVBDXcYaV",
  "key17": "4y3Tu1nVfAZNPXbQ75yDf8JqCz3UVuQFrsZPxsArokCVvyMxQmTooFHvxwphMgAjo7G6s2rme1E6Ex6ceQbXF28L",
  "key18": "EksiUEstfgJiTpi7g2RKx2BVtnkWLbZdRjQzwG7B4w8f9LQDQcVYGEct5fpHtr8R8vREtFuPvbBc8bJ6my3Zopw",
  "key19": "4SKNhBnqH8LghmZz39Lr8w4vbyLXsfGdxsPN8MXnZtEXNQUqAFpn3QFjYAyECfHnDfTfrbugm1X4NTK1MdCzH47u",
  "key20": "65DVmFs1KSX7kD7M92TTWVvsV7K9T8Cdaki9U1sK8H8ztd59tZHmBYzVvJHkutBTsKcpQ9tGuyA7ZRSTd3nL47iG",
  "key21": "3KJXP7V33HQR59FDj2YLdCjq3DYWKK2g9Y534teVgexkmzLy1Jubd3byoYsFk9wXiS54DyWXMChUmtebhBGBwE1Z",
  "key22": "iCvwWTBtAG7yN4gDewnBJkYT1erHqiNgxFVCvawbKknpfvUpKSUTD6yZLL2bwegmEXJGCCjsfuhqwAxsv7jvgQD",
  "key23": "3seDE4qkHBGkkjjzALR6YmwmLasTp338n65RjpPj2StUNkps1N8qBspc8YKfJj2fPNhbiSsE5mTaVUeZWUAvFHTf",
  "key24": "5oS5UHE4M4qiBqBNQvLPDxFWu5DhVRauZ8Tq4nord32e7Jfo1qfCvtd7ZB7tdmDnaiM58iHVt9uDSs8CDssTVE73",
  "key25": "2cwcysqGGD9yZuc2hEFXskLKQ3ufkNLA5gqZwpAASgL7vHfG4348eHNyWsmX5dCzj5oqCzYYZBceqrY7y67cyJTc",
  "key26": "5CNpqWvMhZG27DpeEunvAGmR9P9soCND4bWjhhFWJLC6K7PRCycibC24hZQM1kFViTjWrpiAN85wJqmBaapmCH9j",
  "key27": "4SsNBXwXi8xfZ5R1mcJTRd3nb9mFrzskPZMhGxSsg5MF8syMrbPwE9FEzY534jJ4tb89NfSRFXKTUfSUtKQqwjTj",
  "key28": "2WuvmycafkNTKoANHJBguNRPA4ewQQY3oEU643VVMScC4SLF74azYnuNvR1nSNB3Q2Ja1bmWy9p8NuxEGRGjPQHg",
  "key29": "2BVHmZMYfX98iuLsGxnpYTAwopVosRSVud5nKVuU723gWy4ngRZXReWTz1vUjmrM3V8Dqj5J92HZNXL4ikMvqpDZ",
  "key30": "Fto9eVHq6t9QDXk49eeRGitRBqgRJYP3NGxupXYA7FAszqq2Vok5VyhcbhU69dGpPqU19WaYi2K6Cv6kdLCLoyb",
  "key31": "4ZF6Ww6icPm7pKUTbmSm2seZcmkXAdGfoqBzMAK67hhnMeiWCdyD6kpVT4tTxW5JQqq9vuFFrmgV3ASPi7o1XoFH",
  "key32": "4Bea6baaTvW5buwhZ3WyeG89EdPirvroqhyuHy5BtkfJYv2dR4ec1R3R4vCv97KzLzNVPAi9FtYMLa2kQ87Sq2Rm",
  "key33": "5C3b7SGXrDD7fgCrvoRuFY3eFUrq6Q3mdNQFSkvzvAc1tJ63vC7HHbxFLy2s6eRujt7i4wUywwjvezCXrU7tKEfn",
  "key34": "3XSknyBteD6oeFo91ZZFXXA1vq91D8SrVy2bYPbRvTb8B1qUZ1qZEX48dPsqrMHecjcA9rXAorP7guDnJ5o3yF3",
  "key35": "3PkHWeqNnprCkTq5KTsjyP1JUvKshSM6Viv4r3hExzUJHd9VyQpa4ojkmGxQyDbpyQcLe2CVzDyaaQNUuSLiwHET",
  "key36": "5u3v1CyhFJ9SoStLjL6b5ufLsWyUewbzAHejrvj6SkogBYMScjTEr4gzpsWJg3WkKzcJDBX6YanwdVxJgffN4gfH",
  "key37": "33R2rp6nj911oo8GfUaDkTS96uhP8dFgpzuxbJSxD4in3iAZ8xB7SDesHR8Aewd9Por7sn4d8AtwFZNfunaGYtiQ",
  "key38": "3FstUc2TsPbXXfyk6Cs4kTJbYt5B45opWzMvfzqTLsac9NzjzPX9i9efwbpSzbsbogUrvWvicxEgV9htRKMqbb1B",
  "key39": "3NSFGz1mwuiyPFq8q7mSmvQGgpKqYrgCVDrHEk9TY1GLGKocg15yvkbSD4CWC73QxuGMtuLm7nsZh7adhkQDnwqS",
  "key40": "5SPCpafqjinpn1TMKnh89vCD5MZ94uLU6DJA6jKL4cGvtgcbSYKXKLzaEp7HfE9vvgif2YKeagEyVjzFECeFNQRm",
  "key41": "2YzCKcmmKZFMQGYgaEqgG4vyVNmhBoZvSKYa445AUy1Gn97rdEgGHijfYvHpguPrTxBE7Xm1oQjiTVeMBJow98oq",
  "key42": "XBtgY6kVRyjLvK3GFJpzqop9mZhWy5rTLCHbvJqhFuP3FKyAczdfELGT7j5N1GzQt6Qdzpp7QWQ1w4pumDNeuG9",
  "key43": "6e1TSR7yxPDG5GK9kG95NstsUHAgnhoBSm5qyJfs8TtDGfpeha3VgNVARaGe3h4nx5VEjMTFgXTeX35i9b6dEqn",
  "key44": "5pjiiKK8pYgKa6wkhRCrB7gdPPcNkEWz8q3MWyhB77d4SzbQSrsSiSh2vEHMxU4fUDFtSLpg4ksYkwPLfeECsrBZ",
  "key45": "56oCJp8rG4pj8sHuhoLWep7TEGtvDSh4tndCN8Q1R8BrnRTProu3RFPTCxENUYiyiSAUxgEG3FhbqTUAc6edW4Ja",
  "key46": "4sckGHcccZHtnDPS9x6Q5PECJdfQ9yi4BMefp4aZQ1uFFNBCZhv7z3hJYPUAoMk2jch77QzvB1fqaHgY9D7MnPXu",
  "key47": "3HprHceBUJhTZpSZu8Wwn47UbJJochfoj8puzmvH71NW6PBK1pNbiSR9P7ms6XXRr1aF3x7DQaCQjdXuaXJEor5H"
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
