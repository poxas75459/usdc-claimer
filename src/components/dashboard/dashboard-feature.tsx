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
    "w1BTymAjbz1tKgQBzCDaZ94pNtNsetRd42F5njfCpRbsVjteaWBSECFMQx4A4hWwqjDCz3DSQp57748EHV9kY7A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Tgm2jHytaTjiLs8B1WujAVV4KUd1vfpZmfvzpjFkDs1AXTeUv8QWCceSota3anrvgZh4zhzAsEo9b87U4ZoeuvH",
  "key1": "2THG7EL9zc5A6tbHkNDTkKvXtaBNVApF12qtysmA2RfHH5VARWw1JnUBpAFLzdDKtkbx3fYnCZ6eeBZ3MzCgu4h",
  "key2": "3dp1Dcw4mPGs8s1V346mCRF6cwNQvFFBaaUX2tSJxkoor915DJaJE5PhmaAUd1LTGZyQr3HtSvE2MiptH8gY79L7",
  "key3": "Wy3cThQWwGEUoYovrZTKxzhzjPJ9CaHbiWA2gZGpA8g47awAhfqwbBLEQ4ca2LhhfwXCZ9z54a1AaCnkRqKiwZU",
  "key4": "4UqZUnVjmNEhR9nKusiHvkqFrz988DVeqh2fgnSrNqzb4m9XkFza1p3mYUWCuUQ6cj1oaBY7aZEKjCLV7rhji19J",
  "key5": "358pAWugNScRxdS7LCt9VwRTeyETRqRdyiRJkG1EQSCnX77xkkerCBxBKJZgLEaSikQA1771yUTNr1P7vTiEFaNS",
  "key6": "4P8pEWnYhXnTjXqvKW2deVDV5gD7Mp6JJk5kegZ1TB2RgEBGb9nSNwfT9C484QwAMNKT77ZoczdJYRxbk7KYuHka",
  "key7": "2VLG9LorbEn42t51jEU9WxtWgc9PZvDQsbPPsPw6kcYyinH9P6fLsU6JrEivhHxm44RQowwmtLXheuFPtxVMSofX",
  "key8": "65gJcixnUVpWbhqM4HAvWCmxMcyXF7AmPj16n5y1kPsuXiU72womySHmvxU3Htuiiu3jckto3wuREzg8Uk4UdJjk",
  "key9": "5VpRjkygcZ8BQbLN2pQ4LNSruN8j3Z98MDKqpFL6jHW1wBGaZztZDhGv93PtSdS6BsdxM5w7x8SZsKpdaD53gvXy",
  "key10": "2hEDw7zoYNNcE5cPpeWM5xwADaNJTv49x51GRETN8fnnHY5j9W3MxVw8cvshXLqq8Y4P5eY9AVM1DYV9nNFLzLWY",
  "key11": "LbY8XTZV3574bY35gquKYdT9BHvoohU6MqxU8iJV4Uev1PrftFNQXRhYqtpAH4UjhTKKVkDK52R8TzKUfJeSL77",
  "key12": "4TVw2JYinygqdNNUaJfJKzUJmqEuWDKQcHCegEQD9WcxxHWRbLko3v1Np44T44rfb7a17PgZJX8aNnL9a4er5icd",
  "key13": "8fGpU6ymjAjDa8j8HKvY1J4469E3KoVkERAbrkD4tA3pfgGiVjyrp9bDNJEfqdrLDGJXsFW4aSyV16r2aSYw3CN",
  "key14": "35fLCDCVyv813s1f1qTMjtNKCW5nJCEkqqhPija39aLkrxXuYP7nNggi93tvfqsByHbDSkHim6kpRgc98BqLboMY",
  "key15": "51WC86zLJrL7JYW4RXLVZhvRHdYsg836WZquceVvW61EQHBHybVP2A69tgekZqu6j7uupzBxd2vj18BrttmpWNUL",
  "key16": "Rd1LuZU4ggLqZy2PPz8Zf6B2pankzcMmzjveAdJjYQaTRyjZm3dYD5Y7wpBhrQyst4VujYSZd8mdhKgiot8arAs",
  "key17": "Giydp7D8xhKVEzHxUJTWDxCe6RyoERfxEDqqgF5S6BC4wygbgM9GmoPdUWqRuv3Krq97vt85ASoitXf4ZdUindF",
  "key18": "34WkmVM9o5A74YopSeDyDT7rvMattSpviQdF6pED4NmUFySzJrEpFeEQHo21UyfCqNHNn9oRCrMQ2Kbu46J5PEQo",
  "key19": "3Y7EfzV6cxWVHvFaDPnUxFT6A98CngeQ69KALkK5XBjWGjE4HMfvRYkAPJzebVj9jHep1kd938xW65Hb3cZdkekc",
  "key20": "VkNNdhHKyP9b614x7hc3c3Vu3rFcnKudScC8ZCH6JjSCdQ9xQD7qVqkBmg8Ao7NBYpyG8msgcjPGoSZyunGNgmZ",
  "key21": "5JapTSzpr4kF2f1LpXbGCPfHHFwW1cWnoqN34SYboxorkckVgiaVUybEz258hw3RZw5bawEKwhyHoBppmPifedrK",
  "key22": "t7z77zwapMwusmQi78WpfchinxXvNorBwAWPBD4F8uDSmLA3Et4Fs81JfwCrvU5ob37cMCkUU6WMFLBS5s4tz6P",
  "key23": "3UmPq5JedJPyjyVqAXpu6SuDMMDjLPrjZD7upEcMBEsUHsqWP2JL2CwRK3p44fc5GvmTUnDJNW9Ki5xachrBCm79",
  "key24": "5u3P5ETNdyE7n12ecYmMnY5oA3fx53ckn4wPn83MYvBjyAFvmnCkhaU8S6dpF7RWVvDMRzKqZxgurSjqeFEZ3JCS",
  "key25": "4hH83MnfsQDSvpP5wRgGW3vyRWB9JiwuCBn9V9yG3yWEtLg7jqq1LoaA7RWWDz7hHfGvuwuVCZD619rng61zynij",
  "key26": "2oAmhgjoRMLDryG1rp39JvYfm6agSjRS5CDYoDGRL3rz3DMMARBTtvyCxAStsayTfc32KX8eptUrsZKfCPctQ5Ba",
  "key27": "59Rf7cFVytUexpju5ki6bmnQAq953NCaVS22UQhNCkQQoipP9CqFSkhRXcveXgweHaxfdHLv1nvfYDgH3sbYheit",
  "key28": "g74a54Fx3jU2NdNGRFkf8UvWycFypt7uGB3X4kzMRNhPPsLg83j5dzSVk6TCeuH7aZfUXRQCoo3ZhX6acgUCUo4",
  "key29": "2TcNbmxnGmJrmU12uKQwXaqYkwDXmgL8VA5EH5mSNUbHTZtWwHzCcSDwCdBdc4bud6mYQvaesTvqPpSZSJw6F5AE",
  "key30": "P8seTeP6dXPiKC5VNQNRSXfbdwvNGykHr39GWpWmm7BsojZcwzxJkZKL2Nf5qLkzrKZgqTa4i7WW6tzhSWyM6mm",
  "key31": "4pv11oyBLgo2j5rGyq8Avd9uFaamrPfPQSwLEqhGakb4JoYYs3GjPqbZLZf6qU7ZtkB4AS2ZJAuAmakZW6JKgy4E",
  "key32": "q7qvjPCjoXWXQvKuU7Vr9K2W26midpC8rfbBDhziF8GXEoDMWTJqs2a2PfaMSSVDknwUks4BtyKdz8ytEL3CAFq",
  "key33": "3vdfKHDu7aqc7zJibGLN4DHGQ1z5WpFXasvhZ1znorUwdVa7PLsht9zFXxLkG6XrnqDtCdRudLXf9XZUqX8s9B18",
  "key34": "5TrEQ72pMYrJ7xNEqJKoqa2DGBzyBoawVgZUhyATjCaeTNthez7fSMzcAikeZ8nkYt8F4NgQm6n66UqqDPcqmTZB",
  "key35": "3pM2qpVwahXHFWaBKt9dF3G55Fo4JDXmVaa3sHRhPaqFux7FXzjQ1Jy8mVG9W3PLbQaqVCt8yF42DAnQoYHKws5z",
  "key36": "4iT5NcMKiB55DD79EPXJJ5DvLJk7twQibJfx4sUtim8AtrVrEJDjL6hJZitHaQACrrYQ6sRji1PxP383WVS4kUCx",
  "key37": "4Tf2gjZ7TPrPyzptuzsCwnziFiBPxqkRA1Jp8CSjLmFWR352EodviXLYYonDwJyPPrMbDBFf9xx74LLnB8yBk4Ct",
  "key38": "5ovFaUU4TQy6B6jqGuGyXhftSswMULU54dy9aznAMacMpEtygRLtPotHxkxvbwkCeuRXe5f388W7fSx5PUQaszg5",
  "key39": "3W5xx6dpcZEURh1HdWTX1z1Tfj4zErARjQGqzZR8tR9n3gMqJfN9TgrupTEdSW4gwEXJ2k3Am6H5v1RsgCCe9ryG",
  "key40": "3hKxqnQ4UFkMA7WCMuX6N1pCaGvTpDiqbWZuQKmXqSnKdZSQmEv8bKBXRj5VAwnwkgcuJ8AVZfFtqSsvNZ5yA3MY",
  "key41": "3MYFy9mCGircxHSDAHwNjnaYf2JWXimcWmWyep8v8G1HvEn395YE577mxY5xUESDRQT3q8XhuC8zX2KQzPH7wsWZ",
  "key42": "3UmzcAPhEGhZEyexmFUfodZoY9CPF6w7KU6isZ78NYvk7ZPQLWkR2xMyGicbzMmD11k7juYPf9BNGGbRBveX1CFh",
  "key43": "AdkKdDX9TQe8mxYgByySknEB1UENFWQxdP6U4aGpr7R8CDHBCHrbKwfBfbMSW1YWDyNteZ1sfJSiU9bX6Vw2dML",
  "key44": "5xEiv5ko5xq9bw1ruHtqmd2KDriXh69kryHEbfTr4wDMHKJzEKakF2uonUG8djGDmz1uGws2XL5N6z3CgLneX5iv",
  "key45": "2oj8VA7dBtfSGaBuBT66S2RBUut8mGWXhTWAvzAczQW78tAWdD6upgXvdy58rSaiaHYGMiYfK6BWru9N6qpkVUoC",
  "key46": "2ViGxTUgJ5BAa2qJWrCWhe5YQzPjUgRQhwNZC8YfgrdapbYiPrrX6rZtBPQXWY18VBQqCGcpdmdCeyCTtjP5sgKe",
  "key47": "4fNTwMkJM6troav2bKdMrRu3Aoxi2jPbxnb6g7upDDDcVobveCYCVqGfuLAnhAYJHzsUtZEuekkg7ibGDqj48nN",
  "key48": "2Lx7Pp8CuR1zJDVs7hSzsCyvrAP9bs6unQAtVzLJDHSJxW5Z9MyYfW1J4KigBq2KfN7N7MUuwY1nAxAauou3u7cp",
  "key49": "3MUVCeCx6gsukebZ16aSwQhxXVkkQt6mA2w5Vd3DpJjBpoJuGZ9DS4p7KAjAdTqUfKzz1D8KsUiTUFqFnCcHi1K"
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
