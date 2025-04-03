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
    "4j4nZn9M7kN61vuPNy6ufUBP8TwH3Wa2hqoPGj7BzRMdavasxnznbYut8QDcscwm4WcbteoSrVeC8HG1MRmSKUUw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39b7pvzzmszRxXL2wUQ6fjgrthNBSUgK2L33zyP9nuNa8BaVv8GTsJCFerGQfGvY32nGKtA8LwXRXxNV8pVcBSiZ",
  "key1": "5PBs7STDVp4DpS9sR5u5B3kvi7HU7SyUaqgPp8HTe3UXyJekTrxF8J1dTrUwhUpAJCfcYDTJEjrC625hk1fWiwRL",
  "key2": "5jqGt5fiEzeEWU1GeAQ78YTWCmpBV8vcJGjkQfybw381qiesshUi7yv12SFqFifwPM68W1cb3TX4QtYLkeRE19gX",
  "key3": "ib3JbRoW3CBBTFY5YwN5ELPq7AkP1ywXtnCmTPBraQtE9gX6qn56PFao13ziyLJx7yGPWf3WsFfEXRhd5QnnWpv",
  "key4": "5x1LRKgEtToKbcSyi2ZtP89RzFuYuNREjFZnxnvdZw3Pjuqe9Vr1B3oxkSFSDTe58JeXJThx6H2EuacwkyKwWti2",
  "key5": "5JLGBGWveB7sxpdn6anyFKtcGSr1DUkEm84dkuUXyG7PekAVWoBirFFZfm8X6C3H5BQoBGHGZHF1TpKeguzVU1vX",
  "key6": "2PswvAdxoTnv1EjPZhKoYnKDJZtTZVoQT7pwKccqj4Hn93FUMEYnU5UG41Z8Q2wGsgpprqPcAMdZqjWhKHc2vU94",
  "key7": "4egnMPo4pvDvhLRZ2TjCV13fHJU2z5v511EjKmbb1VMY3gsvwPPHAj8GJtNcW7gVc3pQrkAWtQcUoCfbKWLkVTyz",
  "key8": "5g5Y3oZ37ow4vEW1k72EawqLM4Kx6VK9wRj9Piy4JzbYMbpTgbs9xq3yfQVnHddLPAoJBTr4fxCtFaMrFDfzXPdn",
  "key9": "5v7esjSgFR1xj1wx6QbMrRU2BzuQ7a3HLuEJnGBAQJXfFwbtG8T6og8DiKuvdhfonDk8yd6nNY4BBKHo7CP3RZoh",
  "key10": "2EkAEShbmfwr1J6i2Tq9AYmdUQqNcR5mzLKrYn24j2Xqqk3SPoKjXY7B8FZtwAKc2R2M4pGEcv3Skvu7KXLh12Qt",
  "key11": "25hDmuv9wHKjN2WK7WwSfxqQJFFxdzYrn73KnTJUpFgGNpF2W35rebMMK3JL8XvvNXnGj1HTHHrrNWr87ofvRZaN",
  "key12": "8yFhkemgdkkFZoTmv9A4CBa5N3NSwCmdHPC2Pty5p8NJPaTxJqQoNiWVXRcF2YJxunS9xoCZGmDRg7p8XdDtE5A",
  "key13": "5abbUCJmn7pccm3aWmVjLD42mVb7DcoRRZZruVSWR2kEV4ymkh6komTReHSjH4kY575G2uMtw4C5V81FYBZahV8S",
  "key14": "4ooVG8tZtrhQzgdc4RThkkaxmAvqjHztZnbtRkVggdL69UgT8tC7CfCmSyLwE4DuiygMhtTCQv1F6W31GqAaMixS",
  "key15": "3rnKKNoGy1Lo7fEhY6dHnq3r1hMqgma9T6Ec1i9wH9C8BcHcxVBNjMwPsGkCd42bwkVXttjDFrxvPq5MpnceqcCh",
  "key16": "4ipzrDxsNimV1RQPwWEkvMkzb2xeZNR7UgNBi7hoicVNmweCa5435a9SeLmgVzNgrkAjyeUo89AbpeJPG1mN6e7R",
  "key17": "4UsPzszvwAtnEjAQX752oE2qaiFDj1Pux6Gx7WCqpC57FRhitG9BgzSYRkWrXHyW535Aj7iCpbnnHMAvgty1tjyU",
  "key18": "5eJiAgCxqczrTJGpizwD5SuaFCdsTzbyrdcWrg62uiw1Ry1etR8WtVx54UBMotWkLeieuDCGfzS5ZPzCGSpoZ2qo",
  "key19": "2AJmkUscUfkFF67GdBEzxubxknrgACUvGHPaEdx1KwszKwNRke1c7mSLPYueeypy7QS3nrw5TJQdZVZ7FphCaZmC",
  "key20": "67cfZ1azcaXg1Q3J2bnBSucRwcr3QS8Q7EVbyhgxDchEYSL2xw2KwK9XGz54bfTFGgEZ8RTPF3jFDxm5DpNtHXNZ",
  "key21": "2KbFH7DZYesStEt3Z2dmo8g1tDVBWKSi3vpS6ScAwRQKwwz8VWLJswEPHKazTMsYnsqGiD4vNwx157b5LZ4rYTuB",
  "key22": "5oMdQhQuU6nirW4HyBPu1ZhXL2zT1ZriosuALcBXnnPr7ciBHwtZAuxoaFKnSMkjXRk6kXDBkccWSy6k6uyo3sYT",
  "key23": "MLd4qLNDN7SPPXeBjaAL4B1j9bAA9W9n8GAzAyEpjF215HyC8FFfp2zbShKNwvU1aQrc3s7kqymhRUyf5Dv5PPw",
  "key24": "4b5tqaYsLhjixvDiTQZ1PopfVJDsPeUcZ4F7NNcShvPwmPofJ8KhXoHzQ3oHLZWoxQHtWFKdfh191Aq3fDPCUYUw",
  "key25": "4CF2HtRh3YhEeB6kd2erxjJYxhvctSzrD3CvMXFP4i2XYgh3oBhWYjvVHoG7j1J6C1Nk7vAEfhBU3uVSuY1ie5P7",
  "key26": "3xJEf2B6BsixiaRkn4DaPXhQAU2hnUC65VJ5eZyMun4T37HXQwuiSfPCN1YKXqVBfhrnUNCjXzfwMTMMCoPTKcJD",
  "key27": "3thY5f5QdN7kFfpNRQzoBo8MfZCxdvqbSJddJFTxnQeSTKeBCdpQnE4YGgsPhLp817PBbYf8BAr9BeEREWwtxnHg",
  "key28": "4aErDskhEcX2TV4ZuD6vnYgo99Lr9ydBLYpYYYuPLmCXn2gKh5QsbSpFADspDL9tM3gNxm5wiNF6cEZv7miiSMy9",
  "key29": "qphKGxFQ9V3VocVVBrWAgVPidVMTnR1iyXh4YwKwDwQuuawNhpPoXMqa2XzHXtpDQiFnmTVriX6dhHTa174pP1j",
  "key30": "5SiqbEtQBfyh8AxXN3bFj4uR1gq4fDGH2sgVZm9pzdRaeyHwraJaA1SdkMgdYYogemqQunQiePz7w1tMCP3HpynX",
  "key31": "3Nc8ANbzto1W4sV6qkqiU1jRMGrduzbzYyhqqUAg3AboL4PfA8xxJy2vcBDYjJY3rdomrJFEiubPexP4ecE5AeBo",
  "key32": "1CiYNJtXM8xQnzPPW9yQWRGhfdSTNFWSweojPUrQmXjzQtvLkMQcgdeZ4cqD7QJjnVht1RmDp5rXUhNXvRVYurb",
  "key33": "23P3TRYmyF1CZqLheBmAf3EB2e1dR3PMXmnHHzXN1oQJ8AcfWayVAHvh5cX8u1xAV9AUu8b2DSZFLZezK8GMfznn",
  "key34": "51ctgKkVU3q3dWEGx6Pxi9NkeqTpymXTvwmuSnfuxhQPeKSHaKq1vi9iQoAhfWB7v8fgThVorjd23nSNRCQwjWxk",
  "key35": "3sTomhRJwZ6EMnpkSHdFZ317aS9qy19cvDshfXE78iU3sXmuzwWxA3VXx9pX2zkt3N8coGHs8ZYm5FnD3YeGjdpZ",
  "key36": "4ZzyUTXw4H3e8hiJcie9pu3VSAjdztP3DGjwjjESUuNv29R8L8qf3uX1BGMnsfgFPYh76v68eNPhxnLJQamoaNke",
  "key37": "38eGBAvSoquBsigNH96UZNwnvkex8TbBKb9VKtAs2b3AToCjopVP4cydDqDxjL4DofqHFmzzVqQaMYqcjb9tPw6j",
  "key38": "62k11NkiJCoWxFAsJjK2dJq8nvJr9Uz9pjqwQsGqvjoUDYihapzPF9hkHeArBQDa4Z5FR3suicjz6PG1GJBXHEsE",
  "key39": "2cqMFczZ6NQ2zzueerW9vvt6cKJHfjszb473nR1Ur8ya9qwpTsM7TZ9X3UabuboPfmb1FwpnLDvebDNEW74xA1mS",
  "key40": "2HDgU8CexvzZwybWkG7iByg6TbqHqrRa45VmoahMJ6MgK4ibDR4G5TKfeR6HAt3PvKuq7QnarugmXf6vRWDkwTMC",
  "key41": "46k2kuvwJFNn3QK4GwQjtaC5dxpHo855uPUakXfabCbjqYuTURibEfnZUkUhUPqC4V7TScAxi3tssdhxAufTJ8YT",
  "key42": "6439iZABFg4fZB3BTuRzy1pWKvit2NAhFQoLzZiL1MQAYAgLftV8VEe7Rt7sk7a9LSWpmEyik485iBq5cJRdfh97",
  "key43": "5mZkgcA2WDZmQKP1y3VxtFVDZV3jbzZmraup4md1tLRkdZt7qFseQYzLz3VMh2QQsJQRVTj1Bp91pA97t7skXuoi",
  "key44": "3gGC79ptCdoNu8PUEiksHyurPtYnwrycMLa9A35LhmxLSpgNiioYtN4kha8eRPMS3mvuo1DPbGt2Hk6FAEwhUTLe",
  "key45": "4cDpBJpNVusWUhsdAr9QkPwUMiL4Tvzy7DRB9uCWUALS5F5eDaAPUzsq8Cz7ShA6oxm5SrhqzrCJZs9GytJf5qTE",
  "key46": "UwzK83S7gcTedNUT5vy52wotq4LeeaeQydRbR15MMc4NmGh8NXrtFshy85GyAcQGWByCCRx41Z9m7QjjCA1oLc8"
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
