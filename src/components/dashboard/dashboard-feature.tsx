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
    "3smVAYme3QisW4Qs48WaEpXAapfuPNjZfCBn4umgASNjfjmCBsY6w6LH4DVWf7ueuF1CDn7oAgUgHQnJk9EdKrUV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P2JQnjeeGdQYhLt7UAxUUX9JVgDH7MDYMhh2aBgnDpLNt2xueQHP7bkMbPeuJLXhMnZwn4jqvBrThMBmRDCehU3",
  "key1": "eiYNrs9yXB25NXs5Xc1rmF8qHj63isqGzoFZa57mMEN7YgyM3Q8ZAEXyvHeUgHpmYCa8ZYse9RGw3WmmGqBHUHL",
  "key2": "4KGTgyDr36fwPXwQRK1BJvKDy4V3ReGLw9jDmJCP1Z1bz3vj4UxsZnQeEKvwQySXQzFJd1oNfhApyAmCuiV39Vu9",
  "key3": "Q5KmQBykar2x2wyacXYxgB5kAAKPbHCfot2Cm7iity9Rku6vgg6qnFHoNS4xzpkUafDG8Z7cmuZwNrkrjGh2Sko",
  "key4": "WA3CyQW5pE14MV5rTge1EYpo3FiFa7DVoRjJfP3pjhuGB6QMB11b6pyfcS16xAPvvrG3tV4VWEYCdisnpkdxuMo",
  "key5": "5t8oNXY2mW98YpTs3zswZfYmcwuXRmEf44ZHvK1Kj9DaYKfDhM4spoRLFoidm5hS43J4YTEsUwcLz27oQuaWwhvg",
  "key6": "2GMsqB7AvkBdck6dYMRiiXPPzFuAmypAzFZAbMUZkV3nnXyxiLatahsPj42aukrHvJryy3pumue8LbZnPuVVzB1g",
  "key7": "4sFuJbkCr38iWDuRBdCfKh3KVJeiH4z3yd8FT52XwVjAC2ENiaRPajMs53a4PLidTzcCaM6sNd2sZshk8Zku7BZm",
  "key8": "4RTaouMyq4h1JQZzsAhWZkfwEJY9epSEU9n1j7cE6seRV57D95kvebTBBhLRHR6M7zTPFJtFm7XQWjTsQZoCZKGx",
  "key9": "2L5xUaSK3oY2gpUSkJmkuN7q5eURtwxXmxyv8JW34abzws8QpvZ2FHsT3BPNTBZxEPnZfkyHX3ZDDYmotdLdpVKp",
  "key10": "61iL4p4DcUCHVMYQS34rnxJ9utopkn8TvXKL4g6XKbzwCx2DjturgwhQxSUKFMCS4YdQqiZg5om6ohy1gdWZaY1H",
  "key11": "dBwkd6K74RrMQnDXEKXgB9PGtiGyowhqedc6TKzuuqbD5VAixQv5tZHUNX3x4Jm1ZeYCBsvY98twVTPUg9ipUrs",
  "key12": "65MSFfr2JrNxgF1LLFxM7TyRV9QrqGikedjPUSXd9d5gHVJncVcyC1iwnBb6w1XCGYjDnR39oKevLdstLnhwUjBS",
  "key13": "jwP31pi9HPVroC319sLmPiUoncRAcQXygUQZo23QxGJ6hGSEcYyyvNywM7Xo5RvKFtPhL57BFfV26Wg5GfDJbmC",
  "key14": "4hceH2JaoK5dxggjBnKtw9SagH3p3bpdUekLYY5XDWySa6RX1MVA2oyZZyMySEV2NLrSkTA8XKZeZGEf7rxUHyt3",
  "key15": "4Z4q68jxtgU8aHvt61xiiGgqfTFMmMXnoemS2PUZVWyoQDNpA7nQkUAaUQTUj7epSjL65WhvBVeGRo4BymQdSv8V",
  "key16": "3piK1vAjdc3ESWhtAEuAVTkXr2wVkrKRetuiDDkLLwqCAZrngvLR7913wnXikC6z9vKfGPeyyG4EuSVFvsKcscyr",
  "key17": "4L9UPRs3pRA4c6qL7QsFEPdKjiSZwUAotNRxeRtik763PLdq6jzUzLL8x35d9eqRp7UbkcLUwRPpA3y5xrCmH2nJ",
  "key18": "5ynvRhfwxSKyB7HWS1aQmppGuC7niUdcWrTLweCHdT2rFZa2EM7n6L71JBUAESVr2fLRytFRB3pxRQJbEJ3FVJE5",
  "key19": "4eGrvR8kBT8bC77Th5Mx8Nt7RrttPshDMGQVF5NEHyJdKT4nPW6nu39udkVetKdMAFxuhsPyizUWB3GhgDST5nqJ",
  "key20": "2NzqxS7KU9d7E1snbxsDiXRvDa3xsVzWcnNR89Jnzt6Q32GhHnPB61GLTKogKwMrkhf6QPB6SfCrUp85PxAtkfk2",
  "key21": "maBPgGzjQJFhKVeBJ9s3MhebkyqYMZHejUwW2sswcso8QV9n5PwaQBhXsHp6iXRJZNkdyPE6PWG2ksp587sXTN1",
  "key22": "57nMWX7ysLHmoVnjsHKkAmRwz2FAcY736mr9EeyDY9ZFrnPEKzUzpnfbWMXaDzsSxZQq9j3KbpFgVmPxP5r9L19b",
  "key23": "4kTJGmKPMXy8QrnjiXS5HzAGKjYbz7nLKYQW5U7c5zMqTPEFoMiQPwnTHUW121159oFXGbGJcfAEqQKGfLQG3GwT",
  "key24": "3KskCj2x4J1BYXhQKPoWGVsp5iRCR6HixbNCKrRpLfk3DwQosCcBVRddtFsNYnyGAwVm3fYdGskG46Go6wnJ7mzL",
  "key25": "4nCvm2Jvsnkf7CPwST8tXsqGePxCwhchiHv6YehHpAYbaDzXE2Xvz47TH3Fjfvez7uViqzBmGP5qhrNoPh2rrkw6",
  "key26": "7L17nDx2vWWVnfnCrgJ7P6Nq15ADSs1tnn3RdDQTsaayJeuHQEiwgLQEPktov2b1BDLnYma7mk8Y5yYPeYhzDak",
  "key27": "4DpUFM2ZDMD8AczV3hrYSm9CoZ1c6buegVCzG4s3P1HPdPLp4p53kgeud1CveRSpA9VC8ivGk7TnjbgNp9dZNWnX",
  "key28": "4PMK2Pe3iRXW84CQh5GcwQ1gVxJe3MfaYmnPaAzD2P6tXKgyrMyXWacHmS8anMqtNcuS7bCG9oW65n4MHWG9rtoY",
  "key29": "4w2B1oaZJaprR8BfnPzocBMrHqzPcQNNwv5jdCAVsAiyv4WnvLjeNkMVSTRZfWe9tJoFHFa1ZE8jPwcC4qLiPcW",
  "key30": "5Wuxb4sA8PK7C6it2PpiMcFamA5DQF2HdQoQ25brPdaV9xWEoSnRsHXdZZZETz2ruwkiZtFCuutCvQ7Ty6WCH1iB",
  "key31": "5QsijKCy7ffCcuQsQyqq4kaLUite9eTxCSyjkNwaeXpc4b1E2BSQrwzVdjfRFLWPD8RN9rWrPDsUWssaX4EoFraT",
  "key32": "4cn6B2ghiB1pjtRVh7fW6FGTZ2ataCyGDyoiddDoJumUTwmbxEmpp7x7SKKwVBXLL6xaWsrXWTzoCcTvtzLGT8Pm",
  "key33": "5nFTw675SBnCAqErsX5M3FZd2ZgtwctPLrwyA2cVJUtFjJMzhBZwdN95phM37zkSiG4PmNs4iJAQjxMh2CJJNCnk",
  "key34": "XpQj2FXyX1uau9favNLzNECPZBfa72dVWGiVSYdrc49URmvPbUxDC9L5PrU7W1DJZ4wb86jHBKVzrkJJkrkpwiJ",
  "key35": "5tvKFhxR6aScacs7k5j9QSscit7LxvLiMuemFAieAndhhkk67nJ4nnCeoecLkAA8G2UDMMmZBhpDUFX7QAAwEoRd",
  "key36": "3uLjP5yDjr6yom9z5dQp8DFPVE4yoQRE7MkxD4HSRJQt7qcgis1DRTb5PNhbw2gaVrCbZH3SX8swg95scZpHyio3",
  "key37": "64StGteKPPHNoFkJFtmWLnrVoAxWh1DNKUMaSpypEqzJTbK27zcKABabBEZzAH55DqH1hbZh7gMYXZyzq8hbaUvb",
  "key38": "DAyzxjXVmxMMUw3KRFVHd6mv3h4f3iJDmu3hXqQyLCdPZzehCYwDFjrPWcEhVjzVB93CDpZHgMgL31V4MW2s8RY",
  "key39": "3pjR1CWKwHiZq83DwCFJhDofBSbDNzgkYdRdp4kgyMpABeuWVZRjPwuRBFZGzWU3M3YUjqJCqnVh6koChVt96QXA",
  "key40": "2wSHH3RdXbFyqHJ8q9zPwx2dYXzZ4A9XNdf8qU1WAUoNVFvayNijURYaJ5YKKywFco3J1TR9xzjz6mr5GjDXF9L6",
  "key41": "yiEfvMZ5KrPXKMDa1Z8uq6LocMyMRuHKgPGYp3wAuUHBaExebZ6Yx4Mqst17NZdakk1tg8qthMgmdZmMo7Xt1yy",
  "key42": "Zas2P1JUpuACFyZkp8nid67Hu8Cuw2NEG3QMMG6uLJLnkMf2vQJ8Qj3V9RrwERyhZj2d1GWw5CE6WPtKFh148K1",
  "key43": "wpo8HLwhG7Wuu4p92oXKbWUmCgjmibqFrmy75rX6wAZTBhxmxp6bgmZ4uPxSBAweVTo6a2btX7L3kxVUuL1ZmKj",
  "key44": "Ee7X1XwrNhJ99TqVGd2K6UPHvXX6oQ1q7L9tbaQTKZmztEzp3oAwyXeeyhcg9V3CieWJc3jt2RPtdnzPFHAY1cz",
  "key45": "5p73ZfUtkRabP6SK27vhNDqsAS9aEHN6R8A37HgTSTJABjWycPrpH7PXJQNtMEWra1rm3X18SyKJink3PaeDbXXV",
  "key46": "5G6tw63qwmCBNy5ycX9hfKcofDkzUgGYBxHdFQwFprCPvSSfmMg18CiLNWUemccD8mEgoRXpLVncdj76DwAwcyxT"
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
