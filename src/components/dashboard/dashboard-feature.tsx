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
    "5AZpMQXwdHggfJfUf1XF7LpDNgANta7C2bsqJtNv8QUvbqNnVFjqWKjcskYgxETTVQFF9HzcCAiSydCZjCc94qCu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h8mKvKYWvEt97wPiFso7xnkjNyTiWc4qeEx2k9tnXBYAKac72pRTWosdFigwpPqWMJ6ZqnpKSYzcYjTr6WXjbBc",
  "key1": "2B3y3EbyHHXntUueCBVwnbsG6LcsoeVL6fVMZWExd5xM1fRJ4fJhfHmt1kbJKag1dsEhPyTeUjCj5N27HhdwxkTs",
  "key2": "5gj1Ujbsa8htBEfvJVUFGHaC2JQpb27jK9iCdTsdARmGUkhS2LsuDEqLm8BLZTWhs89CA2xHk7eP6EpZJLcecbNR",
  "key3": "sRw5deETtwBgagSFQSEYJe3xMoRAWS1L8E7mKLF7CjoHNTWLSh73RC57BUNzrtN6dyXm7XAQYnmYqbjF28q1uXB",
  "key4": "5h2PiYnd87yrTGQEC8ACZZQ8zwNhjpCkhnsCd3vy4cGZMRsJTKZbdjF9Gqbqw2SQbjQ6eFPJLU1EDvWsNSMaZoko",
  "key5": "bwXoMMSu474ZUZhrLtMze3d4FXbnrv3fZ1VSHQQobos4d71km7RjYXBL3dqqqGgT9HryvCHRNnfG6HxJpfQZXA5",
  "key6": "5JFFHjW8oieELwmt5ivPdxPSXsX9cazVBmNHcmp8xidQr3yFnRcyWhzG23AGWkVjarvWcyLb3Nk89GdaGN9y4yZX",
  "key7": "3eWysTtJdV6HatJut5G6AGtbWmJMppnXEbnihHEKP9P9hE5ikuvhq7rXWFSVWqSG3gyustq44SeGdGY1zNsYdeck",
  "key8": "5VBXXxyb8o3ojNFT7ESwaLMkR5bdKC26wZuA852cLMiMJ9g7nQq6fqydQ52GziopM2P4u6T4FtdifF93cFdNsViw",
  "key9": "4AzFY7N2BbHu8tVc6Fs61ZRpXfCPDBbY4us2MuLofaVBAXNV2dBmDhjedEfaAUzHW9kKGm1v4tb8rNM8drnqkrLs",
  "key10": "4xfytoZ9Tt8VzPdFaC2MzD5SF2A1hpDmdJFzWYV8MnKCjhjgLJGiSsUk1EFAHqsYn9EKyKpNPHiyx4h9EsSMdrYC",
  "key11": "25X3oj4UKsf8BdvketKgefFdhWiXtLRkmdG1jFYGSw2TfPxSC9Jqi1wU4ER2vvRxr8qDhrymRF5KsG8giY4wmqJ6",
  "key12": "3gag9YFMMHBFgg4rSEGYawj2tV4ryFwTANSZZAHPtzcxNb6FSCJsQ4nE8FPAKaGmh8E7PGKjfkGB1VSPDQqKjVzu",
  "key13": "3dKH7dLfjJPipNgDt3RLRFCDY9mEzmRz6tYyMToaRuQwzhWpD8ym3RXMSxHrohkx3nBvzYvs3DgdcKU6KcjhrWvw",
  "key14": "5JqZumhFMduPNdMyvgdDKTuGDwsEXMVsAkkYiK1L6SaTf3hVkTh3dTkwB2VN93yWZyCBjjek5CCpKV78gfvMGoa8",
  "key15": "4qCk7Jr2nVq4ZY4igxbkD2aN5DPf6FdjNnN4j6ucy7DPGX2q5n9EpWpNJJA34BSYXmPoRW2BbtZfYJU1vBq7mqZq",
  "key16": "4BLS3uBHHZug5zg7vezngSDniUWYfayys95cKdU4guVc6QyW5q7RitVLExXNZs5htGp2fjN5ALr8zcTMhFf5ua3U",
  "key17": "xSNT1YMMXRX6nSAMwYSPJbq37yKBwN5KG5SDtTfgxMhccUVvE4mggMCTbboHwq9pSVksVRbPWdb4dpqHL5FvHCz",
  "key18": "2nqTWmNd2JSrP9aiwRtEzox3NaiZWtQJEFLjGzMEThKvHpx6q1xXpr7cKNVfpkXP6bYWNevhAovBeWXp6gTt2oNa",
  "key19": "3pPq28GtwPRxgK5auT7AmAnFrBRbYEKMozbgM1uk7zGtAFTnPYSwuHad7oPuAFdpBQP8j2WoGQBt9d2hy9zjUiDE",
  "key20": "51mMaL1RhSnCpxSA5vPqDe8GN7EFuzaXH1mooTbMBidjvBarTYk7yXDrwvVFJazVZz3ZWQ587D4FFNXX8rrxnFik",
  "key21": "3RzWJJoDM4XXcQtV7ZsyvdWSTEPbTosudrPuDn7bhEpRUZGtH1T8ibJUZxrJoFFrH67AiWaR54oQ7aiZTq23KfZw",
  "key22": "hCUZDVQ9bgHvGJgP1pPq15AjmUve1P6d25T6LN1VAMbNaHwMuFsYAzEG2NW2vKg6qYrCNMhDBHH2tbo9ZHGXUTv",
  "key23": "3RefaFo4KZ2G8b7RQshNuSxeADBPTaaFxG89KeYxqsVm1ZJcrXef11TrCuS2BQRtbAVXnirx7bBUiocVKiDhsd9r",
  "key24": "2pN693JCuMViW2UvHJnaVW77a7S8EDm2vjnjsfVKAJMxssnJPm1DnznyX18oR1LN18QnazHcPLA1y1iL2TWrXGfv",
  "key25": "2MYUHRyU9y9mvUxjH6Ucbb3ws4BEeUW8ksPVgu2ebNrCXw3F43F7HLVNB2LnwLJr4n4nWX3AGc9byWi4duqRdCQt",
  "key26": "5Ymh9GJkkVWZKVGSYSDFkzBU7t8T6Zn9MByRGPRkBRUHKZL47yATL9wJcCkPadDsbWejyCkx48ZMVrgZ7ipELGt8",
  "key27": "7nQ4ayVB1QUayfNYL5hApAFv6HPTQXFLoSsDJM8ZBz6KuGFDv3e5GoTvbu4EF1nv7FdCiwdgRpnAEb2NRUJdsMG",
  "key28": "Sk1puEQZ6iSfHm1LobEkU7fRVon1HU5VMUTPJwG6VLvwM7M1BhYFxYyYKVsH9ekPc9B6BUrEPpqTr1kTW6Wy2Lg",
  "key29": "5PbnQvVf6YzpkSCQKskDUYGwjhqb43BuWTnoy26sabdV83H4zDdjWvhQ3DB8HoQgZGH69upHG37StkJC4PNY2mA3",
  "key30": "3qQAMaHePZTPxq75RvDLcC2XHhdhK9395McFwi1ay3jCuh5XbLG1hGpRN1nZzjS5cg5wfrq912gDCBn3M9E7B8nT",
  "key31": "4ixAYxPo4dibwXqPsZWGguvskehhNa8WYWMnrZu3es7xptF8DbLJpccEuT1UzQfFBN4p4kPkcz63xdz8Psm44mWi",
  "key32": "4v3289ED25SghMohEXg48cWLFiaq29K5iq1KwmxL96kP68FKyxdgDmtDKfoaVwJTprzVc4fjBs925qRxV4Z7N1CR"
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
