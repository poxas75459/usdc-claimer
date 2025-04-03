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
    "5XUmCjUSBsenJCmHi8wF7m2jf8wRssoX7yHr9LHXX5mFRMC2Tixa56qwvwwBPDXJbRMfBefdceLJtMJdGTjG4kMN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dbPTLarhcm4e8FUT3JxDF3xWXexe3chmsXvGYiESBFGHS7FgR4yGXXeNxD9ZEdaNRbJie9S1rrFrSAkcqisHHSA",
  "key1": "26da1c98fwUeVw5vPx6ExkNVVsVUhKdLqBfovqCidFMjL8SdxqgZTkb8G9j1z8WZnwSqnCcaCQ5SDCTG59y57r1F",
  "key2": "KNzWaJ6MtiEQjArfAtQUxUKMdcKsjhonUBujzaLqB2axmdhsfZ52SqGoPWdiWQfAfbXHAKkBpCn3fut8mGDNd8U",
  "key3": "4NPQHSv3FRctmpaRrjzVQMG4CEbVboN1jGg7wN6p1EKozd4gnvHpWssrzJkeBBJH5VeY5DkpHCA53GCyPRbC5Q35",
  "key4": "24P8YK8zx5EZMJFw3u6EGhxNwq5EUgXvp14iZMtTTzpLSB3akQR9LPB7XrVRQpgRf1F8aQM8zi7zdYQLiKVhfyRF",
  "key5": "41ZZE6oqk1SgPbw8UyAkh11A2uppCAmWC4QNtBcx5xcRM6c63FHjWQU9tFcYvpBbxcxrk6g3Vaf8eVAX4StKUydg",
  "key6": "gsXX7uPLSzDbKM4K5pMP7Efo2ayP8FdqafS6bjBMgnuZ1CSnNbzoG9uEvJDX9wh8xAwvztHFGPQEzzhUfrJGsCE",
  "key7": "31P3RpLXVtPta8XihkvwRUTBW96s6hvyyBA6YpASc36cUapLd4byF9sN33njEqbniZ5yRkwHo1P45XswcoPdMqJm",
  "key8": "4cKKioPkH1VJYkX3BZbPx2THx9ytc6h1MzYscw8XyLJjK5a5y1DYnZ37eQuzDMJjwxqCE88v4EkvZjXU9xhcPaH8",
  "key9": "2Fb7DLUmGkYB24EkB3v7evaCPeiGRRhJToZPRpqXiAcPBkSUVpExRqs5mSa1ye6FZZTJbjiEU6AyVTWinnzhztji",
  "key10": "5cbSVZSxNoCjJ5rvqMWDppiaboMCYYBdivSc8JwZ1eeA8QeNwN3KEb12ZbKj3NfJHR8fqFKoeExtuumWv6cDyS7w",
  "key11": "5qMsmpn4mTwDAkw7sTivzPYczVbm3MehjK1wi8NG6BC2tUg8uahSgicWu5TRRoihMyXBdfE2NP42r2ruYhJdvbgU",
  "key12": "2Gm5zJXTUxwtowHevyj1pRFxYsfACY4UJjLK6zXRrjAqWUvpYiLpYfspSyopqKUEGh8PEsUJKvjRqaNqcddihW7r",
  "key13": "3CcKxHAYxkZUwmu2T4AaGR82iHEh7iwSkEt7LqBsuqZLwZieNNEaWUCBrzik81yV4tkxsFLWDzmZQRtSEe8hpCQy",
  "key14": "2Wwadqkpj1c1tr5qR3UAD2bVU3oBK4uvH3Yioitszr7xnZSFTVq5tePR5J88Hyg1nBqpLyxF2xL1Hnzxtr55JDJx",
  "key15": "5zcqqs9UMqCmBdZZc3LwUWzYe1ruaQL89LgxWGa4EStDgM3CigrhVvNdZiEKL8ujL6qs1G62WHae7TrTDLYMnDQY",
  "key16": "iadcGJ8J1jB3xqCF7WL4aMqQNs1dsYoj12Wqo5jTkNXoqwVo8uHs7wWbg9FZFLkv8DBpgWjYrxPhz9zXnc62pxL",
  "key17": "3HqKYnbK7fEfNb9XKXca38Yw3eHP37ssCwdjKCbuWRdEKGfcCfDkUKMDTTW1m4WtVugxMqBcD8zA571wK8yT9Ni6",
  "key18": "52emxHwvZzTKSkFxMomHxFfxAhhpjYQ5UaMQKst9QtwsXvdbNbpeQyZJqDeonhw2ZtA9JmChHy5TtrUVnwnzbCxJ",
  "key19": "45HrUbBStr8zEc6g6Bu11Mx25okLyeuD6idpHuKi1JfZMSqeoWXYS2z24CMS37c7sV41Zdq78YRZdMjeXkio6sxZ",
  "key20": "2zWg9znrQcHRY475G86edoaBpR7foWzTsTjGs2yhGvxKqJ3CZHhXoSnqE8BUUKqDFR5SxNu5fTJsUnFFQYnmtc82",
  "key21": "2e7DukfEopYPcfKHvdWrUnxN6QHwBV1m29WzpP9kqjY35udp7Jzvsrr2tFrrCYv6S5ADYBJrNweWVi89jvCPaqxa",
  "key22": "4BPXx36CPsHT6qd8jfSmT4HxCrnyHiJf3zBMwL8U1ZobBescjXYcWSgN2D9tEerxtejhoJpHW1eWCPSAq6X5pUiV",
  "key23": "4cwtv8UdBXtTR4cF3YHWmcDoj6QRFTtBmui4tNL1cUKefJAMMoSUfADHUvhMp9BrBm7UyspPBpM98eNgtV5KQiuk",
  "key24": "4gN53bnoVNxCAw2aia42MoBHS53TugFoRQe356QCem5eZgmaNDzHm3MkqUySco1USvaiMfrcbjQaBiEQA1vNVK14",
  "key25": "5We9ZnkR41rC6EqJr7LoSsmjszT3HtaznHDKsXKTmwR7BV98ReiRXjg6nmhcJoEfPX9FR1WJLURY7gZ5Kbbvz9aX",
  "key26": "5GkcSThyZ4QfnbJ5315EbEprRDEGR7mWYXt7ToAV2nkFkSSpB518q2Ed7a9pLF1LB6TJZELWucyuBittP6faVZLc",
  "key27": "3mU3WT1t5gzX8yQY135tqYgud9EzKxGdqLz19vfPycRbHagawJcWDuTJQDVwzKjPBhSKYJcnpKhTf8WiLzGHT7R4",
  "key28": "3mm4jngwGzpQKpEd5NYm4TWzPMz1sQUPppAdUfgVbWVaYgphN4KJdCaDU9EZq8Jbk39KDMr3JW65f4VfUo4cEgMG",
  "key29": "3mYEMNibTBZQkmCEyzabrPpp8cD9KKwnbpwKTA29G44ygahR2av11Wf3UkYQ7u4xuzLjZH9rynie1oCx94Zn912a",
  "key30": "5P9S4T4b48pt7zmNM8gxk4kweVTPRo1EYeCCnLBuARAhAUuqPuiMMP49V22czitwBbAFUTQBLQV6nQbGDeYc31Jq",
  "key31": "2AWj4rpdBoo6iqa6JZnkVxnUTdg8j8a9gdWLp2vrz9eqK2psfzCkcn2xWWvqbjqTGaDHGDmwSKmV6vzZ1V3mYcrv",
  "key32": "4Ydw7H9qv72kg7fTuVTshputB6U1fQXQNZEnD1mFJUFkmX2hfS489QuvKzSd7YZAJvH8h9pPBLpJL3YP1onVwQqR",
  "key33": "4xZ8dvKh9S5ttMGVvCrhgRuV4at42heGCukepUprMmZiwnheSBjsBhhgi9AkxGrF8FxYP3LVhncWVXEss6bpziDp",
  "key34": "3ULhRm2hn1ByGSK9ddJmfLoJejQq42teMnioypwYMfftcDJWENy7dMPSEJouyfGXTkht4sXCCqHFhZVAJo6nr3vp",
  "key35": "3BHqyT2nSx2EPsRDxZQdKPb6UgBee2EPFgdHufqmXX7Ez6m38m6RwjFiRqvpSzeuRep4KppzVjKGSnVMpqGKSKik",
  "key36": "5dm1V2jr2MjvQmBQT16HLTpKHPWzzr8o2xszgrFj4YTid5wmp59pWsTSeCrRCLCumFujEXdUyUXSyF8fZM6pFJFv",
  "key37": "4tJg4Y35Ku2hGWoFyrGiWr76X2CuGNboRxmkUkxcLmYbEc85PnP8s3Az845RFRwT6SsH9G1NCCY2iRQfwy9xjGpG",
  "key38": "xMYyuytztxxA7Yv8JWcS1h3WsLBmuboyRFmiKRkEePYMfnAdMAL8gKm3cUqGyRdmYqKanDFyuurvE5f7gugFTZG",
  "key39": "2E8KziT7krCVPrRmZETrGxKPzhDnrWxQMyotkboPHZZ1q7nVTvyxLEovemvyiTGvEiP8E2wr4bEeD2Bc4ir1HNaf",
  "key40": "2jfERNY3Hf6MMQ4ZboN2JmJmzguRyTQttd7VFnU6J7unzAU3LqYgpRB1WqbWosMNwW1aGxUJVZanj6AAbshR9LUp",
  "key41": "36d4BHjSWeMGVM5pF7ef1FxQ3sPqs7qS7qbPL9ALzm2ZqdrUHrBgHgfVC5Eg9iFKPv1yAqprFTrkLU1ACodoc2hw",
  "key42": "2ACGoQNvHyoq6hhV7GgtBdfbkZTh7y9d1sq9WSxmj3eXMGZawBP77GapdZv4EkUFxVe6PAjRC3YfLawfMhceH7Gv"
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
