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
    "36Jf6iYqBnh8ekQErZqTzoJAU7qW3bYyJTrzB6RaoZd2kEkRAY2FQFkdQbm5cDNior2vwgE7yEJtwmeESZkkURy6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2raoMcEytbXduZTZPDSUvdb4dgekWSrtSdQQp2s873QsXkpqMPHbURQijEiXPhAfuisw7ARh4HYMRFPp5X1QCKo1",
  "key1": "4qbd2QMgKireBbCZ5JYWBuSiLjP1h3vRZ69iWJz31mVjrQ6rCQHa4TsxxGGDWg7STD9LGhbK3M411dELpSKLHWhw",
  "key2": "36US8EPTxSaqrYFca6uDAC1qoeKWhjKEyidDepxiW785jkW7QH95S6Nf7w1aJHoP2EHVssvvedUsadeuZ4NTEJeV",
  "key3": "2k3QZUpbdwqfdjsWYLsFX1cUEbEusaHUb2krBXVeDi1A1kW5m3uDvXFsH2t9v29HFcjzH789yu1bho9Bhwuutren",
  "key4": "24xfJRmGC6RWZfAhGgp186DpkbMP8SLB2VcQtph1cwn7CNgouun1NDmHT7JpPFDkuPjw4YtjBpA2kupkbAU6k8Ad",
  "key5": "4Upuw7BWvbuoBGzr1BmzDNiVBY4AbZimwyA4z2DcNA4kogj7wWCDCmazWvMmuKpbfSqWsUCwDrRzi7pGh3BgX6cw",
  "key6": "63tE9wvz5iZK1eqvx7L4XGrSPmwTfEX4wfTYTDDFDpbkUu4VDYrHRMUUaXDBHq25QrCJJBkobm1VNL2QTxHCm3Vn",
  "key7": "3rsESLiohzQDwR49VW36FswXniBuadYRAdjtSSzJgcMT839aLFcsNgaiRFxJt8ue4HVHZkvBFqcb43BawkVTqLT8",
  "key8": "xXFxFWZ15pbvqLRh4zXJhwdjvfRqsBLEM99ax4AxbyZTg2QMMNEZyvouJd5SJZi3fnXQJLZETjoPFJp61Ycvg9m",
  "key9": "2EmqyYWrHwey7rpWbrKjjkwL6GK5XEfUWJQRH5N4R5CpFQAH9yANFBcNEU2C37wWWyfsGD7EhWrjNQUsWny17Y3f",
  "key10": "2Ymn7cz7omwZNHPZ7ExNVT6qh1oCQEb3tfCEdLkGBQK542LXzrBT1GKqzUjEovbjausded9NzypQD8wRUjR9sCmj",
  "key11": "RtSdrTFAxt3bLosJNpgWEkykpqJUfMmvZJkgPNG3mRCMepAwMycBV9EbHk24ZUFg5METQELB24KhSMS84F2VzZ2",
  "key12": "3Rc49W5q2VaG7eebx34Cwfu1ePeBoP8EZweK3xMw2nEgkCxRnZFtRfmFxH3RjLfhR43UhHni5ht391bTJ6zs29C7",
  "key13": "2AzSnxo9jw78W2DQTcAMSe8mC6FySZcw1VoyJUYkcsHjGtGhQSHNVjpJCk3TP4k1T53nc6zqJJwBxkeLB56tFMnu",
  "key14": "4EHE74uDqSmZ7AhzHZ8H9JaMFkDzSaSzDBy8vrs7SocfgJoXuNdhVX6RJyxU6ThxinbLdKVhLQaoXqP9xPf5MD6o",
  "key15": "EK4uZm3qxHpTr9QPBZ7SeU7UZCWvhCAoYSAyhLrKjNW4Q4RgpTzwAen425JXcPjgEiwbxLD5f1goHWWQpNLpnLm",
  "key16": "2t5Fm9nqHjyC5mbxrus9keid2xW83FDX2vCYxWPp5HFwDwjfU48vhKZxVbfwwn1Z43CcuaxXHx85UoyGfHQXJWK1",
  "key17": "5m7HJFLvfj2CeA93XLDrtPcNBxncuxmUrHEN2s1rYw3xPgf6dtvd7Cd78bA9YLyCzxLtT1BX3BEzpS5Lk2YGajPL",
  "key18": "5fjMqdu2e2GkKoYBvMKWvqTzn7yVmKJqNMUT5hqsfesx5Dxoirf4TtxSHUvjyvSP2dX5jzHV4AMnwT5MEtEasmGX",
  "key19": "64kbu9tZttDxj2m2PPedKntGRocUbxjdkgMpa3R3iuqmfJX9ejnegJseUJRoU5Q4FZiLT8vnkdXQ3cwe3gRY6q82",
  "key20": "2FS8djAuyT8K2XgonTwRgsA4ZiSxxyz8XQ7LkshMs3PoH7U7gfZeKBeb1BfUxe6DiXhjwNPu1yXvM6CS34Y18KAJ",
  "key21": "64orkd8kJPfv1E1NX7HvMgx5kahsjJnujThxcURuKAUbpkEuQUNoVPmhpqySFbog8BHMPzNCuQ6F9MaSR7EVaEFb",
  "key22": "5dYskaComVGxMFvmujYJoKKR8w7pGt2Rkw3tfxo4wUA4gguZzu3QGL29JFeoqRcHN7DwSp7EeoH8zTEqScEP5CxX",
  "key23": "3kRZMDyAto2q898NYCFAgG8GNyJwrAqBAPb6CvqjgF9ybDaSbA7E5mjckiqHbE3KQopygw8iJ3L2TyLbsquRGyzE",
  "key24": "3hZ4JUQJUrDhqRJqAm76fBhHCvr139fxeeyhqFEqpkoRRrxszp2JY11GJEkPvvDAzxXv8gqfztW2qHCTjm9wUkq1",
  "key25": "r69VC7YRe8HW5TZvwSgcgKsW323xFT5HubWzTkR9KHDEjcqEQizWqthj5jsTZuYNb92FQi97kDxBMDTtaxTp2vf",
  "key26": "3PmJ1AJ9wBNKcU3ZZgaYRqLf5UqtyMacPTYy5eiikm3hp6c8gpvmmdPFWEewAoYTmrx1KLkSSXG53TigaHqFAc1B",
  "key27": "582Trovzc1HyikebKxR38QzdpSAfM8sBgLkFA4V5RZd259dbUoKXjecWA2oUE6b4FnZnoJcFfUWmH5vaNXCzpcGr",
  "key28": "5uurRBu4XnZSqCZ25C2CTHvz1SETfrRgyU23aYkgcMANnNh8fTdFCnLyC7BWKjbr2BFdNwjzfrgNif32V8pZfPnC",
  "key29": "4CtBpZyHUtbvLNb4Kvm6dLu8iB7XRZHaQ1cWTBntPgpTVR9V8ZAgoYM61dXCxA6WHi55v8YhLcocV2ZxqMtic6qD",
  "key30": "38ty2ZBRvuh7XbCdwfchq9AL9fJu51ULF9ogjxejttoCEC1E4KMnAEjzqJP9RC5A82adiXiqjcVhSrE6FRU2u14A",
  "key31": "61qoqNaZ7LKP73tsFSQuqocPu5WfHTsnPsddVwDWZTu7rdS4jFwxedqRh3Ny7spgrbTsdHU15LQvVt1gMZgcAbJr",
  "key32": "3SMsBnq89QEiK4F8m37kiSktbMuReJJDpcKUqh61jrWFuJbfmtQq2LsfhY8upc95KCoTRBUiKAfdKEZkfDYuGHNP",
  "key33": "5Cj2QiaGkGH32QYF61PsBzys2HWidBqfBWpZCm9VCUJaiPBDDsaoH5kyzWJL1rav6FhGfZd7Ssj3TsgRyaxWxXby",
  "key34": "4tHiJrU8bDVy5QEKpCFGYWDhoWRxYyZijCbrXjm1RTa5dMprbquopfRqbkvPe48sxeJif6XKCkizs2NoaBSmVe42",
  "key35": "4YBJYo134buPAQ1YkUQEWT8D4aBxsGaJoRxGYa9RqTwgQikA1JdEMo2N7LjEnm592XfJ3nHipxwxDVEeUTQeVD5",
  "key36": "4jqNAGMP6VR9WafMwLPx5LwMFUm2HnW1fujxShqh2vf7uQqtqSGHw8iFo1tnifrYtjGiCkZvYqKEJViR4Mz9afpa",
  "key37": "55TiDq6AM11wJn5Nzsfiu7ThiYkEQDGxrpcfmComq4bkAEBpoVXtfWC5PUkpDzABbGAVYrdKW4crYvimwVZfbiJt",
  "key38": "p69SUCUxDxVkwHG3GfMW4v7WCrz2FZvp12eZYWFyF4QgNsRjpFrXFt1o2ZMNTvhcPsHDrYuCdtQeLKG1gDk9sza",
  "key39": "XuQVVE75FmBeztB72LJ5jthifRWMiXtPYRCz8TRhSiN3ewgy3JYHXth8ZPa4ot2ypgrfYPJXV8FQEjFr2XAgR5m",
  "key40": "LTVFgN8YfMeErDHh7i3V7PyqHHZCw3EgFa3Ddvz3f7TNfV6aqAVjeLygeqEyKDK2UF8vhFUvLaZCBHZ9PF3kppM",
  "key41": "4PXnW5n9Hed2XGpZvBV9HmsEfHiPgV4wtjL8EJaBWBRQwxmtX8xcdSmBYpMzaAzqk3K7g1PWyvLjZYJUZHQKdX6e",
  "key42": "Xr2pmasfEWFDETYwreEfCvy5w45Svfqw11CuycMcxZJdtGpfVJG5GzpLyAbxk7pVRPbTJNz7xY2Jzem4W5vS4Wy",
  "key43": "4MdXWFTuRvWjbALgRzVpB3Cs21kxcfAtuTG3nRCXP1tLSGLQ2d6PuJdSAzkkZqziqyBMmqVKKmsrL9JUj64xV2zF",
  "key44": "3axwNckFzvurs17enwVdFmw7KMgFDuY5uicWfaXqvGY6RxtvUS2qyMY7rqDY5JdcuAZDGXVBRwx5xoR3YxWv1kPY",
  "key45": "429AQxEHUv4topR2agffqZhx416gqAmd9EXGjjZQTBB7RziikZXqP3oUadWNihkW7qGmTdU8C58DaeuvdmEhn7h1",
  "key46": "5HY3AsPdKmZszko7t1XDH3t2dpkLP5io92JxpfLPhvgUwu486J7Vhe7kg4GyFy2ynEYRxBoWQQPMVt8M8qqw4PNU",
  "key47": "4WVADRTcqWYWFQq9KuChHjQtanVgeUN5xhVEW13mvV78xA9s9zYmZmtYWfAXkSUUpCUgLDGXApvJfRUHhDw8Rn7o",
  "key48": "UdtAYTb4XFgUrwovw46hggUxwEaaQyv8JC1F5ooCVo1igFHfspkNoSYLHuqfLCSnxcVpnP7kR2yJTFrKi63hwhu",
  "key49": "VLWn3JCTtK3ffnxJb75x2ZpmadZtQbigQ1tFYuHtpDsAYxQZkR7BhD8aso33NBKsTQ1A4AyATmTiRTypKVjShBA"
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
