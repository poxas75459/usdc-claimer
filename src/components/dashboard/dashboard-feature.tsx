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
    "5StU6cZty82gYCRDZ17oxfogPm6aw5LCeSbAk7nB2g55KwoWpQD6pptpY416WteY1kFmFn3vdUpUQDoF4t7cyyEU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X87JpNQTMe1KVmjZz1gMhUUavHtzebYwHq2mdB7hQpJjV7ah9iuRW1YoPECa3Ngu9XrQv16y3cP64eSDeZxn2RG",
  "key1": "26AzqHQyyd7yi85KR7Aso58xtBWjBUWKkvqte4gMEvWvbsp7cdnh9XfdZzVJQLSKYJPZ5BDUdczH8gP4zmUWCd6T",
  "key2": "48btvsn2JBAAzP4Pcwp29mcysNHgWEx5tdZAMq3c6qyYt8EmL643Z762jDJi3KVL6hycB7mrPbgwjGhskxdTD8tG",
  "key3": "5RMafMp3STpaXz4u17Dn1Wy8xdJvqHRYsqR3LdsJL5gEH358VH4ooUbT1rchgvz6UizEgVNs7HDRxmSbAxdBu3UQ",
  "key4": "3skPr9zH9PF6Yci5akziKMCCPoGi4XCo2LwaP78cQLVr7x4sZrGa8AYF4gQqxMsJZ6TwV9WVCtTTJUzBRErVN1PB",
  "key5": "4pXQZM5jqHEGXWdLnuTWkbzJr8bntaQhYpEXcaJ4gTr2DTNE2jX6bM1TLZRygEzFsBnC54xqpKc551VH5NVWSSym",
  "key6": "27ad6QYMTsJh3GrpMF6GFh553UCBCGdWZyLTZnrpqpYGhwXF8aSY8g1wyNPvHpm8hM7rQPVh314YgB2gfuzNVAu1",
  "key7": "2iwpCQiMQThGfdck1LazWNe9GhHSVqbuZfFdzyZZVPPQEmEf6ZS26kNgrKqJYAkHUN3uqphSd5LBP2nseqDLNhrC",
  "key8": "5CjSVpye7Ex8UR6QiaxA4TWr43uX9A9dq9r64vJSpSxLiX5Q1jC2cmrJros7NYy1FgmagNZEFfEfDo7UXnz9N1Sr",
  "key9": "4QEQNsKUrTT2fBTfivRHHtJPAt1DsNyJewrc7XEDQQaASFcTMX1t92fWST5LR3a4yfeRux8MBUPTYgv3NSWddgAM",
  "key10": "2zcjiDLXdX9n6e1SE9hbCTr7X2qroEbV12YRjTYrRKCDT3v4RVZTXce25cvQMsP24aFQSHLoj1g9CvBppNH5zRhd",
  "key11": "4btjfb1r76cEWUd2fdMELh22aL4mBenqCvnJThMCN7AKm22B8CGBJGmxUSsLWbC4LNZqibrdqJGQ1GE6QEDLWbzz",
  "key12": "cVu63xZ46kDZaZcHWjhxxVzBdxiZBWBjTvvLrdFS8JXHki7uU3WLKvG1JVXrHoNBUKwA5GakDe3q3yixgSrnEQS",
  "key13": "4Uy85qkVM9Pbt8EfLq6jspn39MQbcyc2ag1JvoAK4MmyxpmWTDqvXNk8U2C7xmRVGYMWLCQWBv5XkVNgBcMmXY32",
  "key14": "2EgJ4rzDQDwsbHesCns6qMYHeZtZMmvQLJTBkf36QA9jr1K5fAT3zxEKmXZegpNdW2suAVapHrcqrgAdzYU5QcL7",
  "key15": "5fTPLHphp9jhSevuCMo9vrtcARchaiw1eVWVWmoyYnNAffCo5jZsrafmnbkHjNenRm2CWBDvovfKHw7yoiCNs5JV",
  "key16": "p6s2mfyuFmoebc11AgNStnNqj1tebwaRDy3w7KkACbRUSg5mrAm7wnV3DMDVa9vCCWfLbzguxqsbGawdBLZd57T",
  "key17": "3Y7smBaXmAR7mE7knGP39AYSuEgy4CEM3YMF5WyeQUjdqXKbgftGvtTVo5Kwiy1wqSjSBevB4eDPHk7aX4htGmLA",
  "key18": "3Dg3E7ExLCYxF1kD6K8YfZn5rUxufw7duVcnUrSBBjrKW8xSAqfLBMb5dynqouK1BapsAXyXFMzzvWkJP1MRsB6Q",
  "key19": "5AUyhsEi9z8WKmnaG7XojFoBd6STpQ64RgbxCMKhH8sv6JsRV2Rv72upEMyRx7RSjUR4Faq2zzRNzBgUZkvQoAK8",
  "key20": "5ibVzbyucDooDTgNiFHrJfH84Wa6BmZuTAiN5Uve7ujqjmqmhPL7TZLbcuMfsvRJEnhCt5AL221fuLAGor76RBnw",
  "key21": "VpEckLZj7KB8sYtkAgukYuTNKLxJe5uogqjCfgRVTZRE1pZrCP3nMJTYqxD1C1BteKS4wT7YtoJ64k9dvWJzh8Q",
  "key22": "5hr2GayTBgFb79KcgDwVyNB795ehkYxfrQB5B1GyXH3Tqm5H8S6SCV8wqsZAr1S5LiFwiQFmDt1J1TEA3eoh46XJ",
  "key23": "5RR5NSdUnS3srJL5kGHCMkuKngtgo6vRHwq38hwPNQ55RpQ7jW588MPVoe3hhPRh3GawCJRDQh3tSrGFqgv7tp1J",
  "key24": "5XpPBgcBFM2rvbycAB9vbnbpaX7UnzFTcbkRhYpX7pET17EocGwFzKTNfw3baR6T3jsc9QN68CW5vu64piDUXgN2",
  "key25": "KKahFSs9ZzyCVGjjUgtuBS56CbK7drLZUo3UFXkrQvV8ZXaL6bnFnwxxR1r9Uhx7mc6Z8yHPrqiWyG71g5HtiwQ",
  "key26": "mqeNTLrisp1ssJ37BnfAzT3PFVKfgtSvoe1VpoXUTaG3mckAHKQjVyCAGCUqkRtL8eEYCekvT1vo8prDA8BoSz7",
  "key27": "PfNLrccytstKhdvmKTvxdpyeMb8oPdbL1uSwBq3H9Va9R8pUDVQ77edJ9gr1w2G6qM4uiRnUbpaeDFsLXRDcCHK",
  "key28": "2uJgPwC2z4amdDRA1ofkUdLeYnx9M9TeZg11f8bCmtdy4JnxkUsz3832SkwRjxEYbEFAR43mbuxBu7kL9R9tcCVZ",
  "key29": "4pd2dLUK76xxZqZ2RK3P9UE4PfrY8tR231WFKhgD6nGtL3RKCiFcqUVvcy4JFTgzEgKD464RZZ6BzKcmrpbiiezW",
  "key30": "2o2UJSFt9S15kyf7rxvhPfSdC3m9zjJP6kT9pJuYwQuSeSVSYmpQkFPgYh3zUphix8BjWiP5pW6btEpn5L5dCsET",
  "key31": "4pt8PyDeH5D9g4boaRSJgX1pmT3J7bbtBTxnb1pNPNXv9K9XdeBLz3vCRq5HBXXKs1MBoaKfaTymkmU5tQb5fp1o",
  "key32": "258NfuYKZx8UtnaeZ58MJbAt8ZV41CUKC8LVaoHUjTb53571VRECBvDwUXMdotEk9YEbQFxerLvDKjqueNXinyrx",
  "key33": "58q1DkvmTwb9PxSoPrPFBjBfBabW5fuCCnD7e1vXPXWnSjTDsHA4WyGXKgW2GEuW3wAh9zS8bUzwnNMS6o33BNqr",
  "key34": "2BktFAMmRqMeRAmCZzEMvW6scR1Tr59XfeP7WANEDnqfids19y6Y4TEvhWhn8vH82RTEqZ6VcTx257dwbFQhYhC1",
  "key35": "4KwH1toQ8noBCmS4tbHVh7yHjazeQgvFviWYbBuc7Riit23WpyWvSooHmUS7yWJVKwWvRK5B63fwCyasJMk3LfsA",
  "key36": "2kWuuRHGJZbUi1UBMV1GXYH4LYJExxZwh6TJ9g89fzLV2eaczEGZzA8p3m4Buj91hD8WxvYgcfEuyhbjkpHGMk6a",
  "key37": "2HtkkrakjkrPYVKR1Vyx2P25vT1WpJgnAWrwvZyJm9bcuoQkzQWg5oi8iep8275LEJi7YLe9oLn8YQgCpamRSwVR",
  "key38": "34Bm4tJ4XaUSFnCYzJwWEEjuBpTY569pAKQHdTDxQs3crRrghieCCEs7B1h7VdZQkX7Rp3nPbfigmq3qvuxVSEqc",
  "key39": "2Rf6u2Mbq5mt2wgC1QkoJuicU3ApQAaGp96g15vrHUgpMd5aSeNBV69CRFbwHAXgY3Gf1giSczUEJUKeU53erBLk",
  "key40": "2tis1KJ1pcMuMj1DpVT87D3BTBEjj91JSJG9MNa1du6JqEs5atFHW7kBhPUgCqKG5R9wBng7xrQrPvTAg1gjGLkX",
  "key41": "4butHeXpnPjPh6NvMoq5iedM9Z6j5B3XZWYDktec5uKRUmEm4BBdfVcxBQuE8qcp8zQHSzDRqAEw4cxZVLmmR4xZ",
  "key42": "3ZVuT4mvh4LD7DGMJoCbYbDcpcAMxi1dv2ro8APBzrNB2EysvUqTxxjfDAr1HxJU49h3wuJs2EDg9e7nRhVQU2FD",
  "key43": "2K37kUz9Tb2SVGzeBWTjuR2gFqupLCxGGy9nbFbhfMD94AruMKijdKCMkUfY5uuAgv1Bp2QfX8QRa6qxHAQNhJnG"
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
