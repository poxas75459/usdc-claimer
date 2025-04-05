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
    "4GHkZjffKHcxEy2yxUjxZzyjMfrXCtBfXJ6zocFew7tBZXahXv5HwHPi6qBDQ24tjXjG5ooHBks2igAK9Lh24ekj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37xEtC6wmTT2CcBviXKjyYLQYaJHNjoADQd8zFU2yks7J6SaMpBWH7LU88zGCjUFJGnRStJfGkqeFFtithrQUBgk",
  "key1": "2EsHoBaenKkP4gj9RpePVKvrTV9hAosW6bBWEisy4T24BSojVMSdD8n6N1vhtTRBLX4f6e5xh4TA2HaF3H5AuW2W",
  "key2": "3rF7MGtD7bFchSB7AA2BTA2KjY5KD5mVME4twyYCunvVuNSd9oc9z6yC4QX9DQff3xBExRQEKZ7ikQNr3FJVW7UH",
  "key3": "23TvaW4zRAYKGx5T1WgPGfzoSVSeXvyJbyr8vC4rH5Zs37sFJvc3BL9zNsyuBnRrUWmhHTeXgHJnFsVTis2iN6wX",
  "key4": "21uWmBnqKJesX1ioHAjdexsXe1xo6rvZATLZ3qUwS8w7wHLCxokMiecoTCoeVpFRSeEZHkr2RoWM81JYj1BbEGSU",
  "key5": "2JRgtBmuQYxsHnR9TnyrfB98kYyVjbw4Z7dpEXA88BxJkRuWRjjjFNef83ct4aegXqGkkwJSVotNuHGHZ5WN4bPp",
  "key6": "5aWtWosSUHjF9dDjTYha7tnpx4SvTkzGWtgH8Qigf1F1G5fPhHTEVqC31mugF3A2VL7FTHJn8VUjkhL4cY2yu3wz",
  "key7": "2XRK6TpMx6MyeqEfVvaQUh3Y2N3g5cqaXSsTLZQWgRA19PYDiBoaHgX3Ho65nfqoFLv8WoNuRosmw9eNoARyKEKf",
  "key8": "UVP6AFfNPKafbZFSwRS6Q2isPXZPpBJ4rxwMxc85SF1PhJx5oXuuut7jmUqmrwRyoJCAmbzVWLFhoQU91B9jh27",
  "key9": "2WL3XKPyiBFbbvEPkA3pUFdF7watYw2K58b8JT9A3Ly6dKeyGhnrJgRvqXv7TLuj9qpCAKkYSNPAUQ4YHjuaqNkj",
  "key10": "2mmpPt1jHdtzwM7tNxAoz4Cs3w7mwaj1v5PTjUAVdA5RpeGKaX76ZZrEmXQ2qMiQH51yYY8abGvyVXg4t45R6egV",
  "key11": "27grDfGx8F1QkbkUeAjmP5XKta7nwUNEU85s8Z6S1iz3WZuAYxhPqovme4eAY5ZYwhcKxMfmVsG3pexpY8m81xCt",
  "key12": "3tZyzv8ZuqQAHBfcD7N43BeJkQ6EThdwZdiQMbm59qaDY4fbos4HC94u23AP6X7B9PgY5GuHrSrDtQR9sUsWsAwP",
  "key13": "5HF34LhYxjKsSPPeZqN9WXFFMdHxjzkPakFwEBXVCthdwyLW6fLYb5GBCfkhJRTkgBqrv3wytbhcpciqbVGKoq97",
  "key14": "5eDnHrNTBjqoV41AeRnAvByjZHo2kZR6Yk4tWwcqnGRcoYSHRD6VBNvx8nAj516PN9x2hNizZS7nsouBvoiA8B5V",
  "key15": "5WtDJhiePh2raupuZS9EcUe7AfA2Apn3qPzHAVuyGC7P88Ybf52hfi5nmc2B7pT9jjoavYbttekQTY9fNi79ENa5",
  "key16": "2ioMT8AzygtrqZUgSDB1JEsJP6fXwFmuv7EXQDvqhMtJucRXwKn1tjpWhQv1mLmixcLR4zZNswbym2NmpYCqY3fz",
  "key17": "5KY6RocYMvdSTtTuCdfijWRi4T34qwujufk4BHofWsVeB1HMDrWwfyVV2vM3uKBTV2ssfmH6ftj16rTPmab9446C",
  "key18": "2XNsjDRFZ3FyKJi5erdQ2q3B62UkTBDqTaz6sSxVKt5yqvZCak4aWtS6yQyvUYEpZp1bBfeZuQdzHCimBtgBXeMa",
  "key19": "3BEJNoaFJqY6oSwArUufcxWtqqKG3Qsf9Gayp6pzQa22cntQvNHLUwHspuLVukC324Hy3VUT3ZMTMCwfdowhW2sb",
  "key20": "58RfYHa1gS6BaFbZc3KnueLVrXpp4QpjY8bwQwcHrSxmyWg3HaynPcnGs9foJaYgb8rjBJehiEycEkryXVd5vw4n",
  "key21": "2XbjNFxoLC1P8zj41Lgr5KoxH8KprgwZqJpmf87k5awPDy81fpBmj1ZMtdMKos8i69XpcVuK7aNoXf4SRB4tvjEp",
  "key22": "4gRWjxnNJc9om6Ebaz5sD3Toxx1vH7EmB53pT8eVUFMGHw5zA5MSqqVBfAN9oBXrYRMqSF1HLM71oqktuuHidn7J",
  "key23": "2J74ZiteigUgtGP4JZYMkb7juW3b2u4M4A4tLuTeUQki67vwvDc8MaFBkQXkHhfntPFPfZmc4b63kmRRy5fZts5R",
  "key24": "V9WLP6zgP8PWNqr2SodzJcNfnMZc5A91kXjPtd8jqZi6z4e2VTBaqLEdJoyL5EVzyYQB4uaAyQfhyewuZSTzTom",
  "key25": "41rpcbn1ZCSRRrpygfS9TwwJiviA8QxSakUbmEDtkxG4HxnUoC1eyLhfdUS5oNNaMzaYvXyXGzJt1t6JyGiHvsLm",
  "key26": "5iFqV9HJ24zGj5oKD87CBv5j7cUUETuhAKT5opVaSD9u3rWZ7R5FNuGZr9qhDfT1aTGdUc8DX7JxL7Yy6XGAZpC7",
  "key27": "24Np5zJxRJFby4LaJJSgGAw4BV2AU54Xf7a6EdvjvrwLgWf8DzV5fhpCMfPcMTx7bsnHaGCmYwJSouB863qgKU4c",
  "key28": "5P4TWCzfBZomLo8npmXHCnQaYMQtEUsb5r2uTKM94HSx9QSoJAk2BBEUnxmsubdCUEAkkczEJaG3giADHwRfHizu",
  "key29": "4eE4BVxq2gGeoF18KMSSSrSE3ffzJb2dNCMRm8WB7sojansYYTjLHDLXrcHLNmogSVy2xqQca8L3a6Fe5ofCDHpK",
  "key30": "4wa1hao9VciCcdbweSk218cGiXHNAGHE418eNHjiwBxeFAedP3yRL9NyzkRfKoP3sAbrVjiRroGVX3DPiYC34zxu",
  "key31": "2ny3N2D6MED2x47yVGmMGESG478csZ5n4HeWzs9XZHYT8UYNHEdzbuoQkk9sAiPxmdZY72YqkbnroQ4S73mBuCx8",
  "key32": "5MhdAjebujoF8sJFozkhibnTuekcYjXs2zq7AVKG3wzmsyTfwKZuhDomTYqD74xNZwsitnWsRSn9zi1Gffcpkq4X",
  "key33": "4UMh3h5QL3ZUCztn4xZDbnRoe4cMheXcnZ3jEcSYtHUvZRY5vdCnjJVs1xph85XKaPpHi8YrmwbZxBeUeuMTQGJk",
  "key34": "58U5WubxVkF4ZSqjRLUcPS2CnM8Be3MF1Pf1KGSQAz1M2qZfRCYPj5GRVQdDPVgaqEVnoTSdcTmR7DYj6YKEW5B6",
  "key35": "2BiZdLryYgeZmMsJzAhcv6Y5BxYtUy7tySne79hsetQkCpxuUYsvC95EYwy6HS9sg8ip8H13n7PUHuBc7oW5FwKC",
  "key36": "3tmj4VZDAvizoYhgJiYAi9jAqtkYDgs3s9EMoeXaCNxLVGPnr8jc83ZKGArTjjBLzXQ3wEezoFLsT1dzg9SNGuKD",
  "key37": "2wPLf4Ldhd6uvwa6CYTn6frH8YqjG76w23nNZ7jpsVBAJKospmeeREJePqRFEPku5ihZ9EgV7fboYSymdfpXdRvj"
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
