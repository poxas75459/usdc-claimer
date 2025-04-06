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
    "4KqboQVPtBjLK38URTk3ujsAzX5ifXdGhaBwBqjt1QczdvjE5unmJfEzS32jsjRQN4f3J5uA8muXZd5ac1CXUaED"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YPVa61Mw6wzxjCYcqnZCZR2PSce2ETybt5jZKmvm9TeiC526hMYxn7j5f5tNBz7wu2PGUJ9L3CZQQHPDiY7vN3B",
  "key1": "595kc31ZP1sQpwaABFAWQ3UrHXy4dmKirx5LGjphu2MTxX5Wq9injdTpVbCntnZSFxPF9n3yU4TagiNLYtDwDXLG",
  "key2": "ZxeDbo2VozBgujcYNqxFsUabFA538MoEcc1sAH86EZXMYnjgLHMvVKxfFkPTVADt9fVcrKjd1BYjSPCNFBcpvPM",
  "key3": "39yqNtkjCCBfncNhR9npvfH9ecAAn3oNh1GHWce24PLUeMyMNpL2ej6YbTD2jmDgBoxACmUSvj8hmXRsch6A4cvV",
  "key4": "3CWBANwbTTvikmvvxAkSRP6R87GJreL8ukXQj7hFSS4VhLg9TZmU6u7f3L5KH6vVKAYrpCGoH3AeK397VEYVBJpB",
  "key5": "fLCAGxnNXfD23fwYSrVTyjL9kzqvQ2FfXBeticqtsA2aFDx7xYoQDEMtjW8VkRzCbLVjVLUpCq8kZGL4hfw7JyN",
  "key6": "FsoXvXppQVQT7ee2e7YG5fSbk1GmMPzpA7tPXTaDJhP8dVo3U8ZzXiJkHrPfBGHeTv2s3XtTiJMer7BnMMcg7Ph",
  "key7": "4F1boKUdu6GKYa8V167JCWTRaFqgvA5HQyMsemcFVq72gJEovBTGK5UeMjbVR4hBJCSiWgqxMSGeKGbDfYJUeYoL",
  "key8": "5x8x7DzPJPMwUqBnFUEiBAQdXnCwnwV9JcJJn5z8GJF35CcqBfLwy2bM1hfRmQgiMMUisrKJL4A7fc3CB2W1mn8E",
  "key9": "mtJJTYHq7GjyXagEKuFCTTVhikwEX9J7ue2Qk2P7mwuDgiH2RS2WbR6mmY4KbzMNRGHaxvJsGsphSZRYb9u2bpr",
  "key10": "2NqvKmQqRsGa351xQ7do4E3evXJT8nqP4ojDZzEhQCPHgaxE19o6138QG76GPZnpzLXpCmyKbiKHb4DTDhNKQDm4",
  "key11": "33CzqC4eoqU84FtspuGHp2JRK26wrp17LeJBPytVZqbuCiLzS77wChZMqNGyv8fErwcfUkT1S4uvZ9xr19NnRmff",
  "key12": "2VTShzDW4P352R44XPXsLtWNAzveQKFB76Y8bzgHf2rTQHCcFLQn925uDNTrj7SpuPT9zgDFhKawLdm3WHjrmYyF",
  "key13": "2xUxb4hyuDpkDqurDJ9votcsCF74VUnXVa3rKuBconJHuCdm836xzcTP9MeHFgt9fKUN9C4TUCPvxQPCGa9bZgoX",
  "key14": "4wJ4z5c6MFk8qAJi7MRjjLYyKKWkGhxLuwXSPSikFrc8R6zz6k9z1AA7pW5G2oCwfmspyWezV1R5wZQRMPYAkg8q",
  "key15": "4EEggRCEmXg8niBB3DGWZ8tomP4Z1m38fVhHCVQ5fbTnxRo8wZXToHMemjc38WzPFWdvKEFS2ifauaca29B4dakh",
  "key16": "zJwAAHQQXsS1mD9roxPo5tw5p4nMzwG5JArGpcpfExQVncEy28QAjjXhYopePfXpppp9biN8ddjGW2mZPdo1auY",
  "key17": "wqNRFR5jJvrF5NVWfwrY7e2fJK3kzYd8HE5qFVsM5iKNvjifcvQHzr3V3w6rWUy2sR8Y9EK2tsrQWB1UGeR8Sau",
  "key18": "6PttebC7CzM6ZbsQhvHJkQoyDeipLfvG134C2abyBmAtLm9zz7FCRFQ1UBsxDvqYv2Mmj1pF7oAavuhFsvPFwgV",
  "key19": "3uV1G886kQf6DP2VXjWXuz6ntYCeL4XihJoRKKjxnjtvQqvdumyZ91oFnZKj9WtPmpmEBXQbwyHV341tin1s491u",
  "key20": "haeeaFeSsC5fLKtFCnX7pwQxAL5DMyAv243odqDYS2uivh1VzCYmjb6eXHojFCKyttJoozXtkmJDkYQoZJ69mNE",
  "key21": "2RgJh4R6jNsDgkNEBRBRMetbuGMPHrpUCFSHbNyhaHxKE6QmbZT6UPyeCvriJ2hbR5oPgegAgVrHZ1xNye66b2em",
  "key22": "2gARpnrTvadJb2nAdAVMJXQmY7BYDjHhCYs5ouPfR2SskgJiuJFNuSNQSo9ZSmCXgscivAmTE1pUDjKDejHYx9Nb",
  "key23": "tBqJNCrDiTL35rfkEer5XU6478gKA4WNiUzqMJLR9ti8dRC9XyKktgFXpZ1DM55eZTZ6TYb9XSLrKercn5Y1Z2m",
  "key24": "4Xa7TfRESPsodZnS5agye9spAzk9DJu4BaKPFaJTm5QsKP4uZPf46j2JRby7sKcoUf9wkXjaeNbNvDtnsmWLbUTf",
  "key25": "3TztxpFK2uP8vmGPbUyFQxwKH9gUTdAdBU5EWAPnFiKz8CBx6td82uBUrzjq99pPkDE14bxBihZt3ujGP1b14QHe",
  "key26": "L2LLM3egtSMQ3zfeUbREHDKJJFXo5UauBgGxbBY22NZMLFm2CceYkoRHGzPcAqVdu1qAxfCFn9mqqM7q2CndZ2v",
  "key27": "3r6odc2UNtVzdrLyJVncQdZW7RXk2WMxLMqSX8vRs7i1ZAgjHmW7YCNr6ifZQAXmZTi6HyV4khZ7Cgh7yqqWWSgT",
  "key28": "2MRLqmy9cQGodsYxGfQDvR9CRtQpAVTnVC1iWTwiaUWcHJv9TuQU1aSJR7w3c8uDrbrmBr4yPF7o2JA2zoug858G",
  "key29": "4n6zx4z6fmAp2X7HmKCjXpUtyS4XWTjtXnwRM2TVJu97KT4pyCzAqFuRNreGHPpoJib4UoY1NBfnS5G83Jr5XAyX",
  "key30": "ZFGB1YTsLAwc7oXTqq3V1JBHYuSuAfwjAZF8FYVQvDB2MP2mSHDtQuEtTGDXy6gkAva66szxLtejUshGqmCcu45",
  "key31": "54KQoQP1DT194vzKGu7L3r8D6HD4PLYFLa4z7cR24k5Ufv3NbmSdk3ces6s8Yhc9JgZr2t5tzBZ4Px1eiBrU3TkT",
  "key32": "4wJt4Pfgm8aSQ4xuAji7DhBXrpurXVEvBVhoefAEqJkUqmBxjYVgxBYSxHw8pnib7DD4sXYvCXx8b7j3FBerALbQ",
  "key33": "ys5jrMbTFgAS5gy9tMqKFYBitu8S7AdpCRLdZiEZfjudyZFMQHQstR3dckQe7jikCHvA5PTZjTmzhW4AT34nmur",
  "key34": "bnVUNFkkfqZZFFxaUyjowQPEwePevt8pB3U8VEQKuoAjXE8gybsFsnuxcxCjabG625rssLiXtEEf6XZ9AUdBymq",
  "key35": "5fVARUk2qAGpjoXwxSnTffLMYyop5sxqqTFvv2GZm4K2YDdPp7UDYYhk3rCYE6oknwGkMEasind5r9m8gkDDMim4",
  "key36": "5d6ZQcFQ3iCSJ9aKV3jEnxzbS25H9GYniK3TCBKWA19xAW3e9qxK7HkSceK2yQUx3yMya6ZY1Xgza9ahyYBtyMj2",
  "key37": "56HLiJubxUQSfbdo25wF2oTqfAhjLcNEKeMpCe7eT1Jr8m2XWjh91RXeSgUwLiowS1d1yNmyunzrje36AbVbk3vE",
  "key38": "2SYTs1vCfuAPfyUWdZ6xYHFMyDeGzJSZKYujjtYPawZk9A8gbaVjVpAEm6GQP5NUTb4CXdbmVJ4cQ6v587ddDnsR",
  "key39": "5xVgpCYNushoUq8Gnrjapftt7anUyvz4oPiTvQxDC89LkKYXht1XDTscguZM8g6VNiZt1GGq9hpT3HAZGMQB6GWK",
  "key40": "DAmgJNRv2nCUXcDUzVGtKB3MisCtfzgNsa5YrHsh31wqWbgLd2LtQpegCiisLXM7cyRNNBUkA9CqXA1CxEXYjME",
  "key41": "4SUWXPnLGcXXz5PBfWeo8uBZ4CDtczDgD1h2ttg9nD1hMnkcutkbvyi5mncX1CKZsK3Ek9mFeYEzV6QBt53bGXEt",
  "key42": "5pjJzzuMhfGcb7ErE3EQAS3geLg8oypWJbxifkwAuabY7QD4Be8Vk8rMhYMdUudsUadX39CXhdXz5C3NzA5RDmEo",
  "key43": "5yfEQVXdSQuCdDx5hsorpUVj4YhRAA8QJgKdYpeMkABYhpD7LKfJpgNx71HCojWaoF8NGcvRAWhuwZCbWuETo1Tg",
  "key44": "5pmjcn9idM4T2eoijjxf3x7z7jQYsFTYXSiratrrd14vX9VQkq1qfY3nrL1dfWHMbJKtrnbcg7JzxtgiPXrwErHJ",
  "key45": "AjyHf7vVP8Kf77cgLXYsirqyT21kA9mTcMrDKadBrZGdRr2k2V5bNVPLsmcdAfiuctWDfRxAEgC3p5f9eCHz3jt",
  "key46": "uKjnkwSz5tEvEkETdwA6LuGgTLr1pDA721vLsUReB6MV6Q8vgYASca89tYmVRrcvCgcRn7FdVvbEwgFh7brygdx",
  "key47": "63UFsKGFeFUyfN2z24RfTWDMeTugXGYUBtd9WZBGov9un8r3DeGtKfew5bADt9Jr3u5CzJ2SKUyY8U677GCTYRqt",
  "key48": "3C82iXgrt2P3rnaX5LEo2vMg9yrYr2SXmevvtDqHYq8ufeWo8hgerBybyTczF1DRBQYhYYLoB8aLuazPQUK2YZrn"
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
