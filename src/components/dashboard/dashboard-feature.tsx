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
    "3wQWLHC1STFLwcEE1q1HTUbPrd3cbKC9ALU2D76L3ik1tkE1gTCbCX1b3rn9c5PFC9VkEJ4tacFiBJeZggv8XpYA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EqQXvCx7h2kZxVQ4LPgfPdhGwzZMtYcV5eZYJTnBqgFQDQkVyJVJx9zxpCk8nEQcU55Wk3QFTTQq4er7jP6mkGB",
  "key1": "52xW5c9nQNDCsiw3fHeS6HC5gQ98Fsc4V9urh2sPDcvTnMxEusEfTmVFxjCCtsQy2thHXVJmwtsQVumkcLJPapL6",
  "key2": "3c4J91pRHSeks9ADupTfJ3MHr8P6BFyt6efbJbudJnxVvDtxGAPPupmqmFDqdzJy5yT8RbERy3eQXnscEJoT1jtf",
  "key3": "wyjCqEHfL2ognpc6w1dPoVLgFXb8XhWKnUfPL3Ar4onTvM94U6JmGHVKKCc5hkxfXdsshTQk157k2KY3J2rMcGk",
  "key4": "5hUu2oSBWvmhrS5cHnqEthuJphPpKeVBykBr3RZvuG3wUQo1YkJetzkQatLy8DZkV82xaxMKz4tmgtGkvAak3niP",
  "key5": "5JTEEmTUdxo3SEZ4ueEDd8P1A5RSpSUeDCZoA2r49aRFqDNCqmEU3FjtWYFKay5GST5uDEADnooYX9Y9gBn4ZdtN",
  "key6": "51Dpn9bWoLjJ3vWYCLj22YEaAbBjNZZfj1oyZeNgQuYvJGYa8V3YGbcPgLhKJU1bVs6Lqj9eLKq5oHyWsZem7cWQ",
  "key7": "366ZiHk7hM7dotYPjc75dqg7kkofDKDe9mtEnWHLKynU6uHigs1xWbyBDoN5ZcsquFVn4CkRYqfRgrWGMs7qPtkw",
  "key8": "5FuQeBMfbWJbJLMSzqNUhzGiyYXEQPkULVvpSqhUEe2ikM1n5ge6HRo9d56ac2AQcr2jXUPLkiHP8S2AyW9Jx5HM",
  "key9": "2E7fMUWNShWkLdfkeNz1oEnFmdpQEDGde3RHqbAC2icSh2G8m6e1TYjLgnSvMbthA5585TWUxRXLkabTfBeL2ysW",
  "key10": "4Xue44wEM6GiEjHZej64yraWUqnbyasCo4c5uxjjNueLwZL8ErCu6PunKAv41sQQQwwHvFz5GYqZtazt4RdBHase",
  "key11": "EQcun44N9TquzmuUusZEmL3LRJL4G4T7M7pReFi3di4NjyiLNZ7xFNkj62wUfDsxizR9UzHrPmvbdw16rtPbsro",
  "key12": "5aCuXVJorPc8pTLGqJdDSGNknoFhu5QF2BN4XbpF8ZVgwKwdhLuWrCKpLaMoF9FxDqBrK9LpB6TYviGASXuf8Zik",
  "key13": "2xUftNebbzcoUGKpYZW3Rbz9aSeist7h1ycNvTijhLk6BQafp32YChGCx2noaHt6C242rkykSccYTbJy9am49fq7",
  "key14": "5WXGDoUER6f6hF1ZYvAp8GbHvRWTFXid3N2Y5VpXhK2GXvhAYHucjsgR1XD2Ed9LVakiVi1JK6ZQbA8J5UwGrXyo",
  "key15": "LsRRgqY7kzpf9LGcWCGW39DmQsFn9tdCdLGWrRk1Tx89bA7bph7vBuMBHo2ToedzTpETFmobYKZmJqstzwPt6jQ",
  "key16": "63sNybg27mMQ1xevFohgqAhubn6GzFxzvhVVPKuwBE4rdZeK3DQ1G4yiG59CQbU8EybLEXTfPxdSjCMws1A3Htbk",
  "key17": "2eggLciusJJvd2Zd5SS63Si2F1eQoTruvpj383xFLjQWMBJQchz2CpQ5yVACSeL1suavhaLi19dehWZigXW47P4B",
  "key18": "4ZuP42vtm8vinWpuc5rLLEZUu2NTy3bqoj54gWjLmKGgU5VSY1MHGGJb5CqtbeZFsfkiYaCLhsP7an7mqHzGG1fj",
  "key19": "4LDg34TVLW4L656SHCCH3Juh4a1tVSz5kvJR6Dhf3YGSiexUqChhsmkwjg3v8DcPhidtJF4qbVZ2mo89eqRwu7U3",
  "key20": "rtk9EkW5dQ698tyQU7G4MAajdSWBmd5vBZfn9fqo7qN1phN3P56onXpPe629L19xVXLgwyMsZugabJLcuHgdLci",
  "key21": "agpDVksrQHsqa1oHHswmiUVB7aVqcnb3kuWeGMWBqPhMCGDXEuJs6tVXrTrDfmL3534D3VM4Vn3fUndouiGZXft",
  "key22": "vcJWaoRf1yTwbjWN2EfNdwHkXZC7q9WZFupETYD2SpmMBRMf94YyXKcZQAR5mUS754mrn4DmpsqApSaDPQ85umY",
  "key23": "3oVacaVPbc25jSpi5BFXQahgbujEpcEqi7S2Gqzb7FEsG48BmKb4Tq5wWWu2zsWyWLW1MTJ8ZXHnAVzDHRYUjSod",
  "key24": "48CuZTmT2WUJhdrFBHud35TWDQNGx1fGrJokbyETL1Tjyzf7NwvrviADyoCXLqmRntLWSsSrjkQgnqHAo6TBk5W",
  "key25": "7JNHbV6JnqyKZKi6juhivnDM1UtjojidgVWByhJQhcxgWZRcqBtY5bQbKiHtZN2xBunRM16aDAWQxW6aF2s5Nqi",
  "key26": "5g4q3chd2s9uM3sB1h424KR4ngQbPFA92kh555arFUboyZxCMEJy7vPKCBD8u3Ji5x7P6P1rRJFEitGe77TPi4Ek",
  "key27": "3kwSea73BYVc5fd7mzJ2Lxfb4vdeTnWw6a8iFF8fRi2JjfTuDvqvgbUHzhcdNzWL9SiVDvCNgFhaPLvmCVb21Rs5",
  "key28": "4PVduvGhMnBMoeinMEktLBYXuaxUKh1mfETaKqVsCC3MrFjSa9dx4UJBWWR7g5DT5655SboKEbVEagGvKZdZwFcm",
  "key29": "5iNibHAcx51yPngW911RGTqPQ8hqt5E522igbpxXk5qfqnqZReXRhNV2w1hyoQcY1cDM8EzrJr7EXiQmWwUPbjPW",
  "key30": "5grSRq3fSWCfzWAGo2TCAYyhXgrLRxNFR5VmEHfYD6BVUPS7QSRoczodp557rmc66TTAhrZN6KKKm11jqk9ooyQD",
  "key31": "4Q1eHuJVtMWtMMvBU9a9bbJechsyH6CK1nrFGBVpcdgpDY64rMWaKWH9NnkoajGxhpvBXehRYdDzSJv4BFMnXHZc",
  "key32": "qvmhEyLCqmdWBMizkFnRDWq5JPDXRkA4egxv8bAbeCnUwQHwn1r4NzEVVb2shaQPKvqB3fAFP8ucyHYH61WD772",
  "key33": "3QmL8YiJEEfb16hFGZD8PYEWwPrx94TS9At8jKK5wiweQN68J6CEboWDeiBn1K68ABxjKe2LBP17SwHuz2bTaLke",
  "key34": "28gwTPeropmcHrxMkNEQDYeucaQspUU5vFLZANyiELj1vTeu67rDMhdfxF9wZmb44mnWzsTdoJepXcewRowZtfFA",
  "key35": "3pxwFWCvBtSxtzdWvXWvyiuJePycTak69gqkuuRfdE9nH8tvjP8YVst62hLEZmfHUWobVyjVsfHzLm5uZGneBB38",
  "key36": "5Tb64KNS8pVTWr4adgJCxNFSVtw5gkaC1u5dFpmyhwkzbwao9UuoPX5aKBceVKWeTgDqJbzrLM7yckz1WEDQkxgB",
  "key37": "2C5uWHh7LaQmGH53h7mLobFgQiGDoERLqK5NKU6FhEQLhGn2mSaxQy9381RvfSz5axW1Fz8yZoZrpzSJbNxnBkhM",
  "key38": "5DqtktzEXTZptHaXokswuS2nF3uN5CUvB8crWgsii7qA7opETUV5Abz2wUkTPPFHymYUWipVzqhvPLpyxDdCGoiP",
  "key39": "hpZT3GTBmfnbP7XaWCiEtADMxLHksSPagb87gb8zfhNocd38QvK7SmXKkj262is23nDjM3avaQQsLyxEoNei53A",
  "key40": "61iug9MfPMVz5ux4KivQ5qUDbxawwC6YfTy8hy6F2LPWfq5sixT9GhyP9if1a5dkMcbxNyCbaBAcXFbYP7CeLLjW",
  "key41": "2BPFtErnZdrsqS5iq8zyGK8qeAzXSGNRhTJeacSN1fPDaP5tXReSfzmuZ2acRYuMkE8GmFnsLLi1Tv1cHnZrKVWk",
  "key42": "2szkspgxNbeVQnzmGbSQkeXBoZGs2rJttQyWWHa9w1jJKrSMvJsCyKXyKymuXsqPD5MxY4qj6p54FdfccV3eL1JG"
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
