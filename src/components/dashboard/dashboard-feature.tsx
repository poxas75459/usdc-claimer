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
    "461gtXtJNFckA64mMJRsDxPjbHTVrtB1HnrTgTCyvyCLKCKuaLD2pmnR1gYLCTRpzmNk7L32rpZVdBH4iuQhDpVY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wfhxFURTEL5io1HP6hvfM56LqaojazEiX4tL7YfxxcGnRGmYHLArdo8bMSH4VztNac1kLbeJviSL1T2MmQMTTJ2",
  "key1": "3kJ8gVmZTQXsHJTmEtQ8xyB1BWhABM2v4jT1F4pdsjfGW3BxAK6ECjRbnAf8bWS2eXy8b676wE3Yn9Zk5AFn6GhS",
  "key2": "62SGCbsgqPRTpbv2GGsHUrfFBvirWXWPwehhkLCmNE43rfiDjmSgKFe8Hx34owUe6V8hSpvuJFSXCW6cVfYGkVqW",
  "key3": "4RUzoPE3XtdVN8yegLNG29zcdxnEj5n7MQ9Bwmbc57TopYZXMfYpQrRyabXndpfm7XkxYPLDmAmAyJgoNm5os181",
  "key4": "2d69ZhLutfHNQck9yu6pANjvUHFTfSn2KUytKn2h5BGCneWhkZDqVyUnr3GGjZGYpfagAcgjQLNKnh1C2mV2BsUw",
  "key5": "2msTALUTqZsCnbYLBHTvn9DH9q3oMoSx41TpL22f2mYjYbHRsEXo3bsympjMVjwKaTh9LzJRK2MfstaaCR2N4YoN",
  "key6": "26PGWB1KMjL4L2nkTWBkR2HcamJeFEdftJVPw1p1TfjvwBV5m9LW46oTjEPkJBJYpz2SN9Syg28EcgWhE5DZrTQb",
  "key7": "nKFNRBMuhv16e6uR8CwmBpRnYTp4ZoqSRQgx2w6FFE62FdQHHgY38MPTvA8hkmoDwok2StqwrJGJaqCTHx3AAuk",
  "key8": "4iJZftYiWAnnJ89aG7wn8ubrpS27bR42WtvJvUx6edJWK7rwfmMAnH7hrAcAA7KyjihcazartUARxN4h8sihcb4i",
  "key9": "3g1z1FsdGGhj1jDHtJG2YHmo5vZZoYqB9D7FP3nXk89SBWShpuBnEp6pC5Js1TYeTiPesu89nwMfGgiazbzstEZW",
  "key10": "3TZEmsjj7yBT6poYVzFq9LGzzPswAU9KvXG1gMupXLS5P3myQLD7muZAoDCUH1CxVz71D4BtyaFkLGbAZDWMLafz",
  "key11": "Kug44qVdkA7fckorSd2pYrjcVfJAJrv62QVBj2uZUDpXywaD4Wgczhj5XxeXRnvmmN9w8u4idfUTWpMq6nxfM86",
  "key12": "2B7NjzgGUC7daFcTnNDG6EmkbwGgq24dzBdLnt3NGxVKAECLzLzJ5UjYxm5MYXjhyeJhENwjkpWnz53EqzPtcaCE",
  "key13": "3sWC9Nge4Y6RjTnUmocwjxTjyG16m54NVfv1SHRZNdbTwSU5k1bbMcDMjNQEXBbUGWrHtPZC894NDAEFMWERkSTH",
  "key14": "4TSqzRMxaPQrmqtyySb65CTRwNpwrsBSckcVwgKXKE5TSctdBXE79gtB9CvhKZvzdMmosvA7H412JFDSWrkWW4CU",
  "key15": "3Du632xWBezZJ7FNW9hU2QmjuLViZDbavGwJi1H4fHKRezeh4wi3tvnfdbTpE1kMzmSkBAbjT1Q7FZK4wL98kX25",
  "key16": "25hCipAAqwRtgmQposHuE17shJ9MuU8gLkEa9Kcz22jQA6jUEYEbBW9ZTv2qpGhgTWwomgcuqJWNyJ1FqZhn2wRc",
  "key17": "2ko4rUHohCDcscxpkQ1ciroTYxjqkUUJVPtiSj3cn4ZAy8XLhyMntJRgUCYYPDfS9Pmgs1UC2KbDqudHxKtji2kG",
  "key18": "36owiXY4j4AEFVLYQ58RXEKhi5V1PDbqZrco7c5jzHDqW7zm2KsoY53JSEJju7NixEwek5rw15ywYQjTWavTGXWk",
  "key19": "3zacZW6GcGoHoyqXhh49cvHYmDWqbRzYonr5pkY1nuMpLCSrszrkoC4CJr1ZCtGQp85gJ2A9iJrccm1JLbo9CKYg",
  "key20": "2wnbfsYiMDHjio2PKAn2H2TQUNTP6BWBUbpquiE8J8spqpfJs543LcDKtRB2pg2DSCkbvejhDKgnuDv1FjimobwD",
  "key21": "5WMBCgqqD8aSgbT181TVzYbQ974N2wFgptkWuwe7VDbuBhfCQCmuwETizfhnCV59Ax3zDxXUEma3a74EDPCTu85q",
  "key22": "5HTGmxuqNyqGq1FPob6RVkZm7HMvJsXKEvpcWikWXR5SmWZ4VXSniyoUx6FiVWmrntsZzw9pG2vwUDVehU3VM8Au",
  "key23": "2DcwZSjDfasFBt815DdMo3pKdZnQ6yerpEB8n7imrfvrkT1csohXV8sqMe3WeVE6ffnqcfaDiP15kCGdfKGFXqyg",
  "key24": "4UNmbPQCcorEBHoqFLqfa9FjprBMmRtZPEm3XahofbLudXixQitqtUBcprMCrWQHxrzpU2xVreYio7gEMfmRcoJX",
  "key25": "mSGiXxvsbHwaKZUS7WVqRmK1Ei55d9R2eBU6zKzFFDcuhJeYgQd9Ek6GrdCzo4KNq2D867P1T5RoeEYSFXY1JDe",
  "key26": "5AsrWsFq17Zh8e3BTqGHvdx9mYzvLtKii5cpkxMwrTQSWhiU77A2rRUdL9185HSTbEgvgg1DiqcGxzs6vNib5Ccz",
  "key27": "qVpU7Q1iCuHP2AhQ9Lc5FXx4ziYhAsHBv287G32GrbTRRzdNn3o4ACAYiSCET7FjUAeesuuqf6hAQG1uuZoakRx",
  "key28": "TMChKFfPkr7Rhuc5aiKBCpRvLta2EZVrLnb5HRHtn1EeMe1SYqqSFKJyR1LVGP5C7SzrVD6aYoj2k9x6cdaJEsc",
  "key29": "4rgS5TydPUgcCbMPny68s8fPxb1nEACZ1eWWbqWNWrytn2gYJtroHEQQFWocQ8UhiFjMmhTaHKEB6tMjVGhb1gxT",
  "key30": "5m1S5oLo1aPtFdwmgBuMGn5bQL1armsBNJVCaWwx9eUUZfpsMTN1nSf7TvN23escspFezvQLW8gzzXMhDJEJneWT",
  "key31": "5vjoagEXWwyEWQLwtGJ8FqzCHMkmC8a72LbVYpJpfKcjoXdb6YRWLTtwMj4EoKJM7FkniriRJMQjDKyXcFdwWLNA",
  "key32": "4mmNR8Z9LnxNWZRAUQhhZRQ9eV9eMpGCmEaNqdDfx2cjg4jFLXxL2jLa8sjsVH8ikGqrc5qeiw4yFKz2UD1fcfyb",
  "key33": "577Rg7vsHCCKvagqtH8GPMfX8kUQkTLtmp1PDg5tzEb2262ePsMXLtK77pnPnpkQEFf1RsQ458LB6EGsdrEYZSnr",
  "key34": "RoBbW7QdcXtJPPcQVDWMrcbkQgLQYqSUuXzXw8Uhqakvz4HHpcxGhY5U6aGTfe7FF6yHmJTyxJdq8dCXNSLjFEa",
  "key35": "3JoAr3uvTcw1nXeRNdhc37KdTJzCwkTAiFCxFxkffPH4C3AuJWkvjYNkyDMxRa8fhq1HpjCoxAfbrCdrXhSwwFuQ",
  "key36": "54ThoqnREc1bBBAvHRwjGdab2nQmmgKX1b5HDYpQejQC2S4GtZhPVMmoPrrwccRnqdazTSBXtcGt3bMsJNuiq7j9",
  "key37": "2jeWwZ6HWLF7mv1BQb1wWTywtDvY8Gvx6UeFkAbMhuRPyG1fZfeGTpnSEEJhcPrQ4Jk9kRue1w4zLn9X16xBxPqe",
  "key38": "676MUAkKahdXZeXGtenJ3sUKrxooW5o4xU6RA421W6e1KnU56xt8QsxYWo6eej5LMQViWYnko8bsTiDxwAEdtJ1W",
  "key39": "4qqqZb53oG2dHtcrqF4b1wMFr6XZzAqGjxxnnjTswkv9WU6S7EiLGNRccejUDdQMjC2FP7g9bVUgWXPqWS4beV6d",
  "key40": "QVV9sYwvp3u8uaDkAKP7TzdY4hyf1Dt9WsdLACRCgZu1NEXNMuvqYvTVFYM2K2bdszkmu5UP1oiDBfm1DZVXXj9",
  "key41": "4K2T9VguBJh2iGHoGFgd1hnembJgMxiuvgfwAs95CjjpBcHedV7uwUjKnhPysC3eMy8c2zzDe1XuAc3zqBaK7zSP",
  "key42": "2zbLTUCKuEaJvNSyf9VfbVeUEDDDCUPPA38DCTM4LgizVQv2e3oQWvEWC5BE3fdyo27X7aNx4DTETHHLc2Eui9nR",
  "key43": "DAmYgiT5sZciKNCCuPC2sfBNSrcRCDPASR2TnhqJUSZaycM7swERj5TYHsZBao7GPrE9Eit4zhTerbpmSj5aekc",
  "key44": "3sQ8s94CPmdj1e2GxB9jKM2ikZKwxNYVCTXpSPNm5sFPvazkjCFwZm8GngKnNHZfQwvNhA1UX7RGect2c3uvfHet",
  "key45": "4ahnCuWVmw38UzFt1vneihGBEyQdJFHRDiWFG4BqDsTZqDnPoXj58auTw2b7Sq7tppvnJCyLhKBszYNqUeBZffoe",
  "key46": "5Y2dEnLRG2zsNst2BFyLjZ2jFRoQnncbaU6iG4Zwd1ktx7xDWzVCF2n3s6QY4msEtJBCkXRQhjLu4yofG3miiwpM"
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
