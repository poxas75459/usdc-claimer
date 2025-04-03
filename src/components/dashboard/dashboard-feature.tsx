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
    "2SfM9WorDXfD7JiywhppmumDPcGNSemHnwfUpvpkoGqg7nzYfK2AG3vBUPJ1XoujBcASQVgLWQTQpqzuEcKczDR5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pn9wzeFGcfV9mrLURXqydbrmQP4cbp7f7NRVdYcXQrwCRM286LADSWNj1wW14YnidA7gPuR2sJGNZG3EkpcU2Rf",
  "key1": "hTEBEsPY3Fj38CSMg669aK6N1HpBhUQJJv8eTZ2rE5Exo6RJkLwHKpSF7LX9dvSWRj837ZWUhGHGN3jDnZxiLpV",
  "key2": "3KJzwYkBwbN7cJqUV2PHhTdxmknaaPwaPaziuC7iE2FhDJvoosSeaL3CMkVMw9RcsJsVyYPVWLmqUDZmpbaQpAiQ",
  "key3": "43yre5J2AQW6BsKpQVzopWm75p9UkENMRnuiHrA9CoEAWLPMDEM7gZyMNj8TV6WH5CRT3ta7YLN3trxJFAtwEG1j",
  "key4": "4doWiJKkfiC9jth9Ekmzq6w2iHBDbMSNBZjwGcei1N8QqCfQs9i5Bo5djJfmVTEmGAbmqeiSX5xSTFwHC9yZbyJT",
  "key5": "4VUzK8NWh2twkkW8Kk6SSCtERv7s3uFjCAFtB4VX7N3TbmjpAREtF7by8GhQBAX6qZqCEZ9YQD2wzaQ2C1iLCCgv",
  "key6": "5nhoMt5G5uYKCjnRBBAoJmubsp6gnXCwcWHPDiPNYuLgQV7D1DgTevUamk3gyP9rBzMJNFxrRbmHJjvnjZDcGEwT",
  "key7": "3BScRwxBsPLvQ4pJ5bKRrk5FAa6WWB6imv1qht7Y9jHZd6Do7Twbh4iLuW66f6w9dKWj5F33ke5ai3eQCtuAVEam",
  "key8": "5JdcRBWzZiGdpxQVJo6N4CH89BFanrBoo9q9L9npbdAfmNRq5hrxYKYE1vsbfdtc3QLqxFG2bqwfbzj7iSkdofDQ",
  "key9": "3RVVbEVjTTNw1R4L5jwjLYeEiDQKPMrnAG2Dxv8BdKdW19oVCXD3uWrBJ4PFi37NjNnUimwvh4NNt4iZLeRyRdZr",
  "key10": "3cYw6zLMpGy4yC9ZWURKB15eufwA9TS3fqjKV8PYHG4VtudhceU3TP3DpPPPQWZ1MsH4cLPyf1tuVnyX6znmeohe",
  "key11": "3Z6rVpdE4Kwykexp2Kb4Wx8qLVjxGkyDwyGm6SbnPoBBk7DVBhKVs3zL2RomhLoZMFx26VApRPdFrR2E3ECuPZKj",
  "key12": "2eqMYUgPebB2aTUhaweXATY2HHsis4sYhcEp1bJiS2Z8jwwDpyniJ1yHXQ42di7Lr9mNzSBVD9mwFbjWUwAX8sxi",
  "key13": "5Hy4Z9tnmAMmjJ9DJxmEHft2C5QtpDaju3VumCbwxJMzsxb9y9S1T2odFXKzAtDGm91KkejGbhEmZX2FDp3zQ7fW",
  "key14": "5wxxqDEitzbn3fiXzroF8moFTRNaZscZyWxtYzZcMHibWSiDtqcpGgSRDYy9MevNa53n1VD8jfrfRkQgX1vpm1jw",
  "key15": "paFvByEfpsc7EnepD2T2KNahkytxeQHJRQQeu7bdCSgH2gjwDCKP2F2SSL3P7d8PXq9K8zzGe2GrT65CpzmGWa6",
  "key16": "4FP8sjP8LAcp9CGG4Q4Po6iymLh7ZtLxFoWtmV6x2svFY4GTgrPJKvXqG5F17Tr4rWgt6W4nprda5om6gXUVRPhJ",
  "key17": "4S5GVJLrsCAkhSbwXvKCZkBrTjuJeXzPXYqG1MowGiKhUSf2RGx1Jwm27rK8SRMEkDgEV8D5cgEUSC1BWpwpcVmG",
  "key18": "3yLEuGDJ4nMQnt1sCp74bwCqpm1tW8P439amYzP8uBUTw7xgDLaXtymoLY9DKb7tk8RgbjQcfJkSMZM3S3G14JVC",
  "key19": "2QXXhJxJYiyYsAQveJkeb6x4TiuhBPsvfnE6csttY7oGdSmGKMztMhftu5u48SGpdEg7fvAsRVVEmwRTfxChEWjv",
  "key20": "2a7dR1sETthcJ25zbhuYD2De5zC7UVLGxs6KtiaFXedVZDaqoDwL8gwLfhyTQhEfuvQkAaGiRvZ5Go2cB787hyuV",
  "key21": "2Bz21fpu8B3r8WQwvEMzSxW3feDpeQnDjRcrcrX7LZhS2Pf8DTGkSXyNQo5qDW5wMrL2ibhAy6d8JvsZvpebkewY",
  "key22": "285nB2phfRYBLvPbae1GU2eMtb665gvUwKXimFyACepQfySPUcDBcaqnuZdbRXiw4yZfz6ViHA1RWNN2XmH49a3w",
  "key23": "3G3XT5MtRLEj5ETP8DhArrKwGkHox3dDwoyveoUDKCRcdVcGB2Vs4MrurVQ5toEkr15Zwhm6MfLQjVCZHhkRYFyM",
  "key24": "9bKNPn9oTkLKpBLoPDeEx4dfv5nUfcQqz1QmsRNMa8ijN2NjBxhimzKHJRn96quGdB7xCEdCHVQRpajvBWx2pnj",
  "key25": "3iZycgzXgbYFtY2L7CfQqEdVSbUV55qDb92aBsYQtJcTJMaXDe1ptNxNsY5UHMaWoMCzMqGDUr6ZtFgbYG4rcaPm",
  "key26": "4S6v1vGfp3kLh1pvsNSM7kyXaJBLPU9B5ADKnLNU8VmF2JKemwt4DoJyFGMnph7mDyJsG2GTiybGCuGgotmfWCqe",
  "key27": "2tdiFL2zAmAHLHEAPP9TJy97ji1DoFnFRywmXoiEkrX37kD4vXAmeKrcRRgbxi7n3jjwtAHkAHo48zx3nrEmuhoZ",
  "key28": "5NYeG9LYrZeWF2AXRg6XiPmsMTZt3DwJFYUX4N7K7Uj55Xwnjxk8hF5SVePtjeDD7vLcLUE9u3LkEjzuziERzxMP",
  "key29": "3yNcq9cusTT6xMRNdg1KCivRb7kkVCXY9Z3bQfHJQ5sYS9h6wr96fzEKdCtySvz14Q5cbZsuRpVKKCMqwhKjxDcM",
  "key30": "3cMs2EAnhr6RFKfvn1e3X1zB9HyBsWugWuadSdSRAzUPrFZE7gsXnyuCvKekcst3sMMTaHgttPRffyL9frfcwVc8",
  "key31": "3qCN7B4yPPcFeoLprXdNx1jNrB6DoyqYxDv3RnjdGqTjTHQB52QcyVR7QGzTu9DNcfrWkqN9XRceBwHAUTufNR7s",
  "key32": "RxrEvhtqCMaNrGYTyidGuC7Cp8z6t6aGFGvJNBH2TYmYJRbycCZXWKtPwgRtdYt6KhdMc99hPUpAANdcjY9oi2G",
  "key33": "EwxEiXYRk7CnG7BTFzYFqpT8BNG4mUw7FTYd5qiUbRpTtL2HZmzKbWiTRZouSh4PdQAu3513oFoCzRTfVeVPMD8",
  "key34": "5RbWN77D2yS2DRynPzsTVuBvQmMvjDjocgVd86x771vmWsfxSvyZJSPF3z6jHSKZfu1ihAZyjAnTXf28ptKXNZ2X",
  "key35": "5mxm5f4mRoYhxSN4fVQqwXcCSqSfi1242uq2NntYnuH3zfxsheYuV8bsLZkMU9HGwiqnmPNG1E8bP8BhKZxSozem",
  "key36": "3kcpknNnExmpzLR54QjZMKiuxrotBnYZuHiidT7KiVpiTSD2Y8jceJy9HQYZW5uEYYtraed3wyiPVQKQwcSmZz8M",
  "key37": "2fA44XWQQAhExQzm5q62dN5ZhuGkCY7eh2cBCppy1ZWiAGCfXM4kfz6L1pq6UURpLUbVi67PuqAzABYrDSAf8S7j",
  "key38": "YoHs2Sz5M2QSDzRHE6SEd1BFpazVnnyThXn9c6BQwucrjDSpTgLNeS3VKBUJH2cj9uSFKeVY2755NVeEjxeHnGq",
  "key39": "3pocjCd1ZN5vRDBypgbuJ3ErKD44AcfKJZ1fdLmSRRjU9RoWXHaeAy3P78LzVVqWq2wEfpzgt4aausLd3L2Dnjb4",
  "key40": "3sfYxZpeU2jqKJfR2NpaCumBnzP5NqSBoiwoqPeGhSMwZwZnCvtSPjfh3nt7xUAuynUsath47TDxcUKqkRhs8Zc5",
  "key41": "PKtNDux1ve4eF8XkmMquS5fTS98hjrqFnaX5PnBrnPSy9spZZbcgDmA32EoLyXyeZL7URjyz25hVc7ZYwX73prb",
  "key42": "4RdxJVSyT2iakRvoTPwB9xx6nKCzmK1sW19N7GAPPUqqD556qP2LDMq9am4FCM82xq8h2Xj3RQAzskHScRGEq4d5",
  "key43": "3zWDDVEJntAjWnXvWXvKYjRhkvQQDAYtfE5HHMshNURb9uLJRJNWMnSthxsZDTVwhQ93CkUYWQFEJcrCw9aYg3mQ",
  "key44": "3Fr4GeUgXkJbJVNiow7wSWNuzQgWahHW9eJZisqXNvZ1LLdUgC5MVpmnxtwYtTwCAXvRs7w7jN7it7By9YSHe23H"
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
