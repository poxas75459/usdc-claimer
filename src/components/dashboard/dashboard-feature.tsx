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
    "21SGzyEGxp7JVynAop8ocBWcThmYp4Z3pQchgKaKEpgrf1tL6jAj7wfV6YcknPxdwVvcYA1hr6zs5ibxgK8VXxL4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wx7o9B1XwfVkynSh8spJZ9KFM7xUbAsRQnj9qSasP5WpsM2PvHV13VW9LY1UXYBp3cwPxoyHCiYaphDEG69iNMc",
  "key1": "2JyN5SrqLKGBKFs9BQyJgSYZnguHVMFc1SxCwN4FpZKJBkXQH3fzsHoB7fTMyQ3JcKrHtp2wzKgyZ7PfTyoscDz2",
  "key2": "5aiQjqSRW5S7qF1KjdBJUBrzbPcZc2H8fHLMhHUbszfPvz2mKr5FRUEzT7h8ocVNGNbJWY849WvAyu3sy6vy17F7",
  "key3": "kKLPW4wLDy6AW3KyBdDAAXCVigdubuw8f2dDpDKydy3hRVCNTco9vjyb6p6EfyCnNnz3w7tRFHXCmMZWUAjad6z",
  "key4": "KNRPpnFww5U3EyNybPwCiSLkFmAZCcqvk4GwnY2heqsK4fRsg3dLHGZ7wXuH6WK7CD42XB5vQ79qxSoPLDpQ7dY",
  "key5": "NpoQxPb4fLYbYhq8GxDEY3Bvx7AQBT1X3xrgdHF24Ustbm2cDU1SAFtScx7VPEThK4yRh9BLS7mdSCbj2zCWShv",
  "key6": "5SQaM5FySD3zDfmEXEmfiSvNPQ3HPeT2peBD4nBRQmu3bms2kQRTUht7YF53q9i4UmoBHpo74n8V7fogruJ34Kfj",
  "key7": "5n2t4wQFrqVaWFpDNKdHBeGvZxS67561hMA5pUP2ieXydK2TcaoWPma81qN3LMjE5CwiuTwrSQuJ64zYmU8o7v9n",
  "key8": "5ZWT3s45auqzWs2aNyA1Hsv4b1EYNVqQ9KDWQp4kJ9navNSBUsybCZ4dUF65L6bRZFLf118njf6nTxm6UbG3owuK",
  "key9": "5VoBp8GBw7jxW2K7oLWdJsMZxT4GvB5VykdxReLbhKbrT41ci9xK7cbB8P1WfQpiep5bsRmNhAqgX3paSSNDXLAw",
  "key10": "3ozzMixcyKjs3Jbwsm28pgoUwhwGcegtSEg3cXjyuZTTMrAxPgm4D6skiwPPWxLFa8B4BLGZ8dyz8i1uN31SZnqe",
  "key11": "uTqfTSVVbQJXYKt3xTyHK6Bko4Era7nQJDjxk9vBVzPesZHgfTqBYzKnjYcVAyMajHujLaAws5rmwZa93yaEjgV",
  "key12": "4MLHAwKFKcM5LzMdXwmEc8ENBohUBbmksbypoSnb7dzdBD8hwDgH8jn63Xw6Apno4nQmhNURovANjUDX7E8RpTMG",
  "key13": "5n7vSwJRY5TvsPZBY6ntLqYUZhrTo7ymi6c7CNBe5KU2Y7xoQZWpKmKDnEzupm7MFWTTnPqbwgu5ZsMKD3esQhkP",
  "key14": "YnKGkKpGyKD6MkzAa2fPawVmF6tj8LyPcJaEnpbrkWV1QKPKFGCMgzstraUsxqpGaHX9iGL3tjdHD5uKLNwScgi",
  "key15": "2MeS795t6aYWQN8iERAaNaxGb1LVhznVVVFqF2VabNQUiz5hi391pmt1c1u2j1SqeiVntbvt1HEVbtTEGu3VyhtW",
  "key16": "5fSbFDKMb29RuBrT4wjJPk2KUAaFx1dhNhvN9p1W7EGm3ForsgeLzRzqmf7RxFNHx59PuCskoxk96NvQHFuyP8Ym",
  "key17": "4wkgJJD9eXdkk7RuFc8ERfxfckSy95C8jAqvKyyeAyQgBnEnjsgpwSHRG6kmyGZk9Zx7kXyC4cec6kDSVfmKqc4v",
  "key18": "4ksxh1G3Uq3shnoszfSKdoT18xJxJFeyCW7LoipLaCHj1r16cNzPqZa2zQjq31sSYxDkXbXbyuf9mHZgrv7iygRN",
  "key19": "v7RgHLhcq78esGrR7R3WdnxujXvGgqx2vKV3BqokeFNP78XzUBq24dLK2xhvCj5zgjbrDUMiHBjGPm5r2G9b6En",
  "key20": "4vdWT7rWzAD87QceqNisRbxQ3nowmBKJocf4M64aajs6QVVhZ6qpeBCsXM3ntWgSFLCFVUbrZKAgfQPPDvhsvX7v",
  "key21": "5GYHaueXDYBbodFeA11dAqB7ZoZDS5Tejmke41nMVhDSXDxE8mNVbK4eLz6kZH7EtHJStwYET8Ny36TmHoFVxTM3",
  "key22": "4mXx5mGGdhH6T1rHZ9ZDSDF8ALLGU1sjMeSvmkG59hfL7K9pqb97ijgEEukKELsWGssGyb8cvR8C5qbHNFqMs6WF",
  "key23": "2T2m5yHpYWvKiRvSMwBNTs92GgaKbomMGaHiq29JcHTUY5V9RRew5pJuAsy98LwFL6DRJya3ZzgcxjyjEapo4GGA",
  "key24": "4JCDWub3bgNdFFc1jS1s2R8VLZEtWfgFGX6aKA5C2bif62E1j2sihfciB4bmhDGF3YGbHmN2tdtaEhSE5CzJcujh",
  "key25": "3YYrFEsUEqPq49sKuW2z4DFN4tt1gkB1UQVXaFv6ePikCpsiMuXSR6eMqRAqnwn6MyQvCWRzd2mRrBmoprfYewfp",
  "key26": "wJ5SN1gwCQUduc6eUdte5DuUqSkKYU8KscLPQMW3nBpEJUAtG7geNZHgZoAV67j2jbfBBDSSiz5sC2ZLAMSrn7E",
  "key27": "5JeaNpkdDhfKD5dqG47gwQF8rh9yKJiYXCM6SnA3BPvL6niPBFKkscWpSN3uF1xPnsPzJPEzndMcyPDMxKo8yDh2",
  "key28": "26YMsaK6FCigerCFS27rtpUaf7YjSJ5WRFof1y9crJUWnrwMNfdSuSo5bAaxED4NYDgLi9HgbW25GMK3SNwiob8K",
  "key29": "3nivPkZTwAekvuSJstY8t9LS39SA8r3zbSW8KE6nowPkyfYiKrumYZKAPg3keLfHxKapc2T8YVMCKo6QdXQaLhsv",
  "key30": "2Meoa8ZRRTTsmzEsrJga8ecLu66736NY82ArjQWHXmjnN6E7EjHWkwU66zfKBXDV3DRGSZyCH87faN2htLUES5ra",
  "key31": "56LbucF4skf8CSv7Hd2zV6BiRqtz9dQQxhAMPnsXey3C1KWu8cvogixFGheZUW46FjjJeTvJpiBUY5ws2QRAfvTU",
  "key32": "2QSYRkoH7zTEw1y1eFxVtEFdk5jRk6CWRbHd6kjQPfLRMnQsT7mLejfrJD2a4depCegUwFmKRrStHyDKzoN57EW3",
  "key33": "4EMvMWJP7b4VMhPAvaNAJ1S3iQwNnUPyC3hefAz2ju8cPv1hsDvWHftD56ebAqnhrZouNTs3GC7eTNRpDmWN9AEZ",
  "key34": "5v3UzbGP1i9URvhe25i1NZhWTrNMZ6MBEEEf6yyvxxEZiXQe8xV6xyagSAbakE9o9wBYHYsvAuoPscVSX7Y3X3nQ",
  "key35": "2BvCg842Eu1z66ANtWi3kajUnqNg8VtmhsSJZNVMvRrr17YnH6eESnjK4sucudQ94oXhqLBDE6s9jLQXeq92Z5t4",
  "key36": "4jaMQi8kFcK3N5oAbKaMLF5yXogGuvQfwfcoS67FEZxKD1zzMWH6zUJ4TBGoAXrgKjPKqncqjrXbGVjkrS8G6RS5",
  "key37": "5UZuGyoBEWoKvmFcZbGJXKtfXhPB5NY9Axv9YCdVFihXXwPDDnEBCoU4WFdsVPidSxXYqKUBxZ2HbVR94PA3mmeX",
  "key38": "2jjEuv3Q9wxvUHgykfLk8UY246dEreNGoxuaG9959FDuhE5BcctPEax9vpm3vo6HmzF7jc73uidW5eg3DPFpKLFd",
  "key39": "3HuGXEBdHUdxXcHvSxU3PbZEUv7SLzw9xYyHvSSXN15cKndtydb1G3DboEFoEJNNwjUDR3oYC2eSsBxP5YyMfQaR",
  "key40": "3K55CERJA1LeAtrodyPWE9AjCeQa6GYKcMJ2dtcRQd7N8LibxaV3ZHFZGkSyhPDPAFs6KKtqghGb2YamZtsLCwUX",
  "key41": "5x7BMM3iLVVVce95VZwtEsi2HwmskVccV7FCk2QW9rZnRxMd2pe9BZ2GUwY7xJWtwrHzwwtb9Mi32JZpSoAodK4X"
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
