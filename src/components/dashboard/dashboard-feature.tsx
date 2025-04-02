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
    "3k1Ej2U2CAMaMMmiVcU2MUTGsHogsY4qPGJBP1fg3WbaF6ycsuo79XMXWMah17TNuFnkdjbz4fCSmfE4VDeYQ8ys"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cmUGCxyX1MGiSReedNSSFLQtLjLTv32qU2EyN4uYYRbcSTNY9EtukF2BPY5iwFSZCixM8hGaaJ3ntFx1WXG1WBU",
  "key1": "5rd6Y3NtpnzcGj98kbQYYq6j6ZLnfb2uzTwNqaCE1usdYLgdkBs2tW3x3f9G9oUx3Q9T9nPwf2gwHsXj66QLwhzM",
  "key2": "2aksvHmbW3J3zUn24F8qQxSMhchajwzJp7VG3Hpfzq3fbTbvpccTQojTxfYhjbzbUwNBpjar6CTZ6N1B4b1v8hiw",
  "key3": "3JZcJgeLJBKLEc6bxqi12AsmYg27yv1BSgkeQZLQBAvc89bZLuQvcL9TiX9CjfZHi4ff3GqKMUuBtWZBrevTRW7C",
  "key4": "5vW1g9rDb52jNBMytNtMZH4KwsWbSrRW5aLCgAQsJdosR2z1HN3jQnqjiQ1UQB2uUf8WQcaf9z77MC2f9sAEQcSf",
  "key5": "5jQ9fScsW2h52WJskkRwHJkQY563NZZZdpERhfBLSmz6NPsRGRwHbWSxorzcg8yxM8AtiGVtqCsegEv9bNWCePwC",
  "key6": "3f1VTp8vHi8jV4y6tNhuDYske9nrtTP9LYr7ScySftYTkA4FNbs9351x8XEVwUwpWb43c5UBRYmr3rViHAURVwkS",
  "key7": "4S6aayxVQaArmZqgihjqax25LfwhaqLBiit9ihovMgUdkG1WTzw9jVhJrx3mzDHqm5frPoLuh6gkFwZhbsJqTdmr",
  "key8": "3UEPLWVpJqCBw42sgZZPyU6FM4CV5E7UYFtgEs1pVzoYWaMSXXCKwzW9eV98CYFBUdMAHUCKBVbTk41e6xJBHnLF",
  "key9": "64HTbuvTbojE89ub3EUx1CQQFDi3SFns6MavWrhqgcGDnNb33e6q55x7VXtsqoPF3LvaeoVkcdT5qf2uZu5vkW8P",
  "key10": "37zV4xsDiPLoTtwfMUfV8JpfQgauZzcXaB9tSyQRdh6jEHckUVrZ2RBKKqL9nD6hFA3US1xmEtAAbeuVS2kExReV",
  "key11": "4LaGbLjhPPdT8baswSPvnMsVnccQ1fGip9EtRTaszM9XdfAEoKwDZjZk5qFWj9VrY4s8ZhGCdfMA1foHhxu1stoF",
  "key12": "4tY3kaQQpfJrQY9yRyTixvy1ar2h6gFztYFFP8fYq2kPmrvftJFbgpBQG7YXEMPUTZc11oK62YENb4zZRCH8AtW9",
  "key13": "4vwbRRS2fQHpxsZ7sa9gijNmcNUbUJBzpHVNFHNDK3x7k8xMfSvmcfHFXGcuLh7u6j6hxki84daHH8tYPVUfDUQt",
  "key14": "DgJEaRGHCtSj6tdsaH7jmhhBS6tRW2dpNT82PD7Teg6FVVRMi9XMrsyqJmTjZrnix991skRv9296SxhFRJj8VAp",
  "key15": "5H99v4mZLPhH4XR3UVbroT3H24o6eY1ACDU3Ths8o6X2nZCEqpFVAdTu2nuBuBgG2P54n3bk4cHPdfZAMCYJnG1e",
  "key16": "5FSwuUMkdK6XXq9ExixcMy3VZocKtQwvRbmT9YWYfQFwukMBN5y6nTiRYNxmk2GaDp4mPPtAunLWwGMt3MJgc2uv",
  "key17": "2mqyJgU72rFc3JdczwT1koRSx1XJVRERNDkUcqHrrKZmbrMYNWM4u9qBj6FShtFzNHqEkmUA4TUyprMixGh2GFFc",
  "key18": "4xyCHoNX5gDeXVY3PTakvn7jshHb8AhT1Vp7FCCpyvDx5KascZNkhtWanGXqQX6VyBRFqhCtbBstGQCnjZaDbuof",
  "key19": "5CyKsHkrnWpadUjh9b1BHwJgf6TwE66L4k71bt24vbWT5v7FKmpbKTWbvE4AmFHxirYqAEMFhgKfGCGCnXRUSyAf",
  "key20": "4RgADuYU4ds7fbAHiYp5Pvtbk3Wdbms3P5cCdx5WcEYGtG4VU54i24WPPEjLfWRSmCaDbCABqqpVHrfsFDgy8mLK",
  "key21": "3KTdP7bbBzqz4XPQp97126hba6pdZknieoUpfLC4fxBHKWVi4XQUZxbuYGiZK16scZCcbKPUg7YWKKWupUZigGb1",
  "key22": "3mHh4AcGaSzuNK3bPoE4MadZuuV2tpuitqSqvgH7LbVF52Mdfzd27EgmQUdAe7jvghFT8FU3xCpHRh73XHdk51Qp",
  "key23": "2q2JP95Zo1m7rcT5ToSCpfvdt9hu81As5ZBDwb22NutUbHJ8koNzXBySHCEJrHtxMc6acEScNqkuWQnN7vSFuWVp",
  "key24": "4XD9oaB5G9ME9tob2Vcgw4K98fapxWX17i5dG8ShLfFGRKmzZWuxg6PynRf24hVCotRWmpgr5LsV7HkbMP9gdP8V",
  "key25": "2yQt4RtFnmsdNnXmqgjt89dw8WbTW4TSTauzPxvUMkKLCqMuWDx3asxJwnNk992hKEMHZp4uQzjnpd272MrGQWr2",
  "key26": "2AgCeVfwcbk7qZP5sBuGmx5x8QBZrv91AaEjz6khDZFPCQNhVgC9d6oQjMgJ7tYpj8o9UzygMog8NY2SCndsxaAC",
  "key27": "Bg15wvNFe3wZvgRGtyVM2Rqnr2AUuuyrfuWcb3YJ8kp9cBEnaJBFDmAq3SdGhbPQSHH3B2MzicE2HgmPrEHyRVa",
  "key28": "5UCz1bYddpHXHfbLA6v2ad1gbUuKeq1zERcWkPQxCt4bKkzFDNqrDCtMnXUJFDbQLw1jeGFEFe8wGfL5AE5FvqmJ",
  "key29": "nrPiaWqmrZEv5aisduZwbntxccjgD6J7TjwYrZAzrTchFJtaEco4vWdBYzoPY1nv31Liaot4Z9qX8fzHCwmZZay",
  "key30": "c1qGVN9qJaBhF4farWjsCVaJ3f6e3YgeFeB5JEaXgQnKz3uPpH1bqtwzbJyxD3uYHbWN7d5Y2RZQHWjNguoHruE",
  "key31": "8ponUha9piJ14jgZobRHtLDeiQPvR1AbiXVBjviWVrpx5WtSW1KSzAtdP3Nn1nA2CnE4BHgXgrwWTgVg7FajpiU",
  "key32": "2o9Y82cztCwpEqUnwCEySKtFxPXQi2sL8QJXxp267UUquSaGxqWourYVq4udniUNEpTMd4BZGtNab6HETp8FqbWH",
  "key33": "4TU3NGXFGZJXnxX9wXHScJe6inaeKdHywRvhd1CRaSaVts7otZe6DGfQzMyfc5RC1rzUc9kSGdq55RVDyNww1avP",
  "key34": "4C4KjFtJnWcZTcJ24Lpfr7ipeKqfHA1LmnFL2HJ2ESzajK7J5wCHjR3UahDkFDNgx1LbDGJ4VXtznW3J15SorxD",
  "key35": "2xLVzctJzj6b5fFeSp7L1G1wTrSHsitshKLsgcWo8CDAGyadVgaKopi5TP4csRhpFU9GGXXihJtkSzcJ3pXdq7sr",
  "key36": "2CchpNJKuurAVYC6WAmPjKu5tnczwFhucpcB3BWxwC2P5GManiypYEkP9NaPeQBwHodjyr25KcEWjtjMCjYGSxQz",
  "key37": "2HfN3B94ktMhPzKmRh3osttabftPWhzfts9A9je67Tuq7BE45tMHytQq6Sf9n2ZVwqjJf54N5KYEkdkGLkMPbHPE",
  "key38": "3145XFUCqWN2us1X5giQiGyAjfU4WnEeGA9SjvVZR96WNWqFjtfAreM8VwJ8A984WZZhHimDe4xxx1qfkZvP8fwV",
  "key39": "J5nz8T5qBbAQLD7ZQ82GXrxC3XDkL1WhPXqUYmPYXXrsHFhoKGjqmP8Pvpr8vaPhPAUaPfhiYQCHgxf7MEANdGm",
  "key40": "5qS6oLAaGyoaJnPuKTdkKt7fAArimyXrFqr7drJaWf8nPPd5JCe1PsmEGZKoUvUHZ3ysH4zq23to4Q4i3Eu4zDHF"
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
