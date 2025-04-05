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
    "5NMUg3srgetE8WLmRHgcYA7KjrgACZSNGwqJaapD7qdhNZQBaTPx2o36RddwtTME9rWg5HnFpC9LPzp9CkjNCk1D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tkM5NkHtgJUEbcARvRkHCaVnFYeCDv7aiUVr3cejjXBkW2xcGP521BHzSwssyWopthGM7iRZXqtXBD14vujFRfA",
  "key1": "33HLJLncVAkMUf9aBEQEN3teRnrsNPhbMtzQp8DupKubNxTXQUYtbcGpTkcSkte9yKeJVFZbk8BFupQj9tuhVt2N",
  "key2": "LEVQEDoFD9NYor9YhUBqSRCRw5urt1ZYXaKHQaAngXUE8QXH29vYV4khr1h4TWuEw7nEycGbwFTXEpDRzu72C3q",
  "key3": "5riSPinmvQmQq8LTfmH8pnvSjNujKnGWujTuJ7KLZWoXsXKB6oE6hWwK2Q7Bo9nU2iKP3zDrq86dErzEKjd5NzHh",
  "key4": "3n2ZTHPG2yL9dtcq16m5S3JPfK7PDwKfkyido5ruym5MNaxodEntXyZZwM6Yqy4B2aAJJEwiPAjSCwGdsxPDW7PF",
  "key5": "DYn3zQKr2KD1LQ9ntqihXPgDgPzFVYR2fc7QWok13JE3uS9okcRFiaGx7sCzUcz6QakzcM6BeCpgDU3VJuSM19P",
  "key6": "QjhHRduw6seCxFisL1TSuymAtWcVjaPBW44p7t5bJNZf8Vc2pHZ7GpwcAgipbbwgGxvFsMsMt2mGqnHEdTbtpy3",
  "key7": "5GfMLuMr2aDb7QYk5uU8FcnCnJRKsoggN9vuPDu4RtNf1rGPJ4mBctSvkSJ6wHxusmq3dpVo9UPqSBFCkBgbyJY3",
  "key8": "2ZbD8VLyf8s9nWzo84DzGzJinMxdooyCMNyZrcML4EmSiWFdpVsBACTUAvLmY2ccJGopgTetgoBY8fTjfGMHpqJ5",
  "key9": "47yAphNHGWWX48Wv2Tf8L6ZxARDftgwEE7CxWe6eULLrmogSziKUmPsmKf7TQQMVh3Jpqapext5EtTJiTta2Er25",
  "key10": "4aaGe6gFsDneL4Qe5xSrecmmXzrbYrcCzSG695gx8J69LEYmosUMzh8xcqgSBurbC9kV9LPLt8dC6u1z47SuuVuF",
  "key11": "5QpxBSewqgnjhugRsmaWpEPiXcKNyMKhfonWq4NE6pex3TaRwychV243F3CEyLi8xy99nnFiD1C8azfPq9FwHXBJ",
  "key12": "5PfUPG3ahirV3eeDZttPvZvnPFA6MVEjV8NVu73JxoyrAGeccYikHTa2JG1TmfYAmQoH1xMA7PevrqkfGQQXtYSw",
  "key13": "2KRBxZjcukvyzJW25pF8T5uEa83mKvUfGQHorAeDcDrMx86NGbhr2czgdUDSLha9vyWhkodaGbuURVsAQELkt35D",
  "key14": "3s4BR3qwFz32t6mTysTfqKYyNca1Pb45tfmKqTs4W3WDoQCnmW79PKfus1ksAgAhwbqMsCUdnE4avASg5vYtPNCX",
  "key15": "3hcCoMMvD8QUud1nPFA1FFWKHRGyNgQosU3pb5QUNhyqXdTcLdcAeyoWPDEgbz72B8roMzwwbaZxkQfMNWEsRNhX",
  "key16": "5oG9ze8KxphC5nMkq9dqbWmk5tngDCdkHBCVThMmrc5MN5vhzneibWRidNFFB3r4vs9gpWULYxFUKJu2b5mGH5P9",
  "key17": "5xivN46KbjgdF7spC6GQ3MzS2PKGDkeSmSExX1SxtA3zdCvtA6fBbNa5LhRLW9UxggZKzNGj4SdhT1TnETtKAHvs",
  "key18": "2PUpnnoKMqRQAopLXfaHo67wnp9g4u3gRoxzGT26wqdEC7pfdh2sz2PioUmZFNHxgxLAXPJEHm2T2Hsv5sFbeXZE",
  "key19": "2jWe8fF2uA3USAc2yt65NPncQQr6w8V8HhcKpVcPAhDpirFh2gaKby6YSNu9aT93soeyTzy7Td2XYbGri72R8XQQ",
  "key20": "63LYZqDFd4gPVb9LJb3f4CHgUfmh2NrHwjeGu6snWg7UZJV2vsA12bj5HAZASt48GoUZc5i8LpAxx3YKrTgesVrd",
  "key21": "2eUwyDBnhCqbskHeChn4HCjFQL9jPkSE5WURy6uQ4hWtDdRbNqh8ir4yyfB4WoCge7x7RsXBuste1vBRd23miBou",
  "key22": "rNSpTQdr3dDsm8dShZViQ5EZkacXCvQyjcN1hbu1uUtp56svsCPxEPpvmUzTEnCrJY7L2URNy2m96M1rTzsxf4Z",
  "key23": "4QmU3tJXyc8peqCynD9mXYQerg5aJJVazmM7Dj7zSqRioyZcz2ihJ3Z6XwBBdPfG6XvwfPpgPsmmzcB8LUweTMwu",
  "key24": "5b6FHr7Wg1NTGfSJxU4PubdmQQTuWmypFMWtKa8r8ZEF3DrEP6gV25LWgKB6ojjgJVDfV4TsfAA2CjdHMwVMDQy5",
  "key25": "3qECprYPfcoRo9nMAyxpS8rmnFsge61mn9mVXa9S4vBrVSLJhWwxbfLW6P9AELu5Qvt1DyNNN5G9Jz93rT9hArB7",
  "key26": "2dJyphU1eyh69xukk4eSL4HDK3NkMmCKk5MpwNAKBsGsMQAvrSL8n9NQf8Qy7jZvqbywfmxrR7fwnevxFMnj1q63",
  "key27": "2fTuaSfVB53rJgb1nYKP8nz6FbVY6XJMsM3uiB2fgy8GiU2tFjeFkQpcGmMpSgtQP5pj5N79rATMtqY8mjEVDJyA",
  "key28": "4LUpk5nbZuBdcdf5rgXg5weLDVi6TydvjGnq8UxCG4jTprKtqmBRzXT5FsiMNeoXWcWazJctQKMoWoFx5CvwG1DS",
  "key29": "3XmNfh8krmnuW4aeb813w51hKthjCSMEDc4sFumDfvspBz61VAPgUQwMofEEVAXXTnFoXThm1V6Fjqer7ijM9suA",
  "key30": "c1fSnpRUU9x1GKNKbkWSYJAmjkoh9v6CQ588khEwp7JQSH3v7SZ23usRv2FWFgNCtEFk1yNY2TMzpWsbyxB8umi",
  "key31": "e1Hp9uEqr1Xak8s1B9wyBrht6vVuMtx7ci9p3ZPCtKHrSH7bndWzh6hscenqfydvWC6LCm4d3Z67taYz9MEzApc",
  "key32": "5MS6bVYgnH4wDAg6i9E5VRc9XiPAC4fG8iLBcfofAqTxZByzPFThmUT7zBcozRrSBRdt8yxEUWRHZQaU5TZV2RPs",
  "key33": "3xDpVh2mC1o21wL2pV158SfsEJ2S57gU34bnNJpFcSYPnnpEiHFxKQ2AehWW81kFRAtyB6rnenPkU21uscK5XP3Q",
  "key34": "kFaZ6T2duSw9RjCxHWBhP2xWAwJsf7wvVMJdnGozoZcpPNBfRWjTqgigbvPjrBZVBRG9oH7vDEK7VKnQHq8LKNg",
  "key35": "5DZUWi5TSHfENAdCsRSWzuUcwyEhHA44AFvVsqiks1RWCsMCz7HGjXYV2K2AXySkFmNVxCcSiCJQgAKzfmr4fej4",
  "key36": "4JRJpaG7SgSfnkHEjAGa52dd6YNotUcS4nEG4GfSKj8q1o1eft4kjS5wH41qLiUoptDhywS18W5CDPmu35edgk9f",
  "key37": "64PJ58ftsP2U2nDPFmVYabPdjApUfs9FaY2dUhE5mMk5Acr34xAug16RFheMGnWhtq4dVQZfyfreyx8VdLatDZno",
  "key38": "4qPGYH2LaN7Ddy2s1J77BrgwDLfLPiXHgD932tSzThyn4QvSqMvSwY4KJNngiRskrbtW9AhakrbzUeZwmZiUHkDh",
  "key39": "4PsnzPqTwbbHCTNw43wGquXCTFFEuz7KPwshe5TQhWi41EKiamWP98ZVekTaRzZywAkDGbb6TVCvfZ77J1gM9MDJ",
  "key40": "3Px9CCYZPL6z4tTfr6XBaC1et3Z4G2QZpeMWGP7Q62aMae7CMb7vCdfbmeZ1xEeQE693ZKKtRhHEWnVZ4GrMWr4p",
  "key41": "XdFTUrH1M3z9ctdbuAJq5i9L9feGonvFgNRpU8n4qroQKCEesaJh6NBi8KoAyPUH7c5D8Koo52SWx7nSPvS6XzJ",
  "key42": "4ay2jaVXiX2vDPnu6t8w66ZJd4beQJoiFDnLX4KfS2R7cfzajbz5z7KB9EgWAvuV2u24pzpaCTe8j5ZFouDoVQeY",
  "key43": "2KbrU7NwWNe7pMQt3uLwBpXswqGcqyFyzbktQsMq4nocoPkvwnbZD33LwY5Srrg1NPsA5Wb6wPPCpfLtA9Y3HEXz",
  "key44": "38CGwfPPi8LqjRrmk6K2LbjdfE638Wt3UqXVVo6XbECSVVwQhcD86SvBX6vJ9sJaH3HEy3MZqwCtHvUC3LSEWked",
  "key45": "3TdH3YrYtWtrgkGjwER9BXGnKsG2GwRhvhvYtPaZfonGcsj2LGAU7rZoyyJ2vfuEHe5JYPgsNmSGJA4SNnsaaznM",
  "key46": "2J35WjaHSjH3CrTNtxkd7nJ3SgD1wvkS4BajD9Z79pQ2kVzQhW1iG3vbmNqdc7D34s5ac3aQD9CYcYHrZeAkpsUk",
  "key47": "4RnMSWkZMrsUN8FpZkgQogpczBtnNrizgYoYGnmdKKAckhx4Qqq5nvVSgg4jD1GMrcGGTtJ7gK1GYRCY9YKDpuMQ",
  "key48": "45siU5hZBR5KzzWnwDrHQaWYcjxUhkYpQJGtuoKjCGHsAwz21BgAddNxap8fUUbH8xhQPH61cEcr6naxm5uxQZip"
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
