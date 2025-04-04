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
    "5jaZVcxAZnM5KXAF4qi1fHD2pLPhwWXm1GhfK97NJQgQZg3ojUGSWj76eKz7g3iitCpmyDkLzzPpnmUXYUH2FY35"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2njrZrq6MEC7FZ4P5TNtAbqNBaTZZGdWcPA2QBsiCRfMWaSddByFjvz7KkYyx8EmKcABeCq6FCryfoHEBbEWdVwK",
  "key1": "437AfdrFtRP7ypwbSAv3JrpqGWiW7z57pMCPPj1UuhYQ9KBpJAGiGVf7cHSsJAXGGyzBRTQ2LDpeD83HPzryrXV1",
  "key2": "5JvMGTzVSLYs9jkk5reLWTABvQQAFja734PtdhWFzHNGe9BSDKrrVPazf1cVPKwfSkXny5sY4Lhd43jwkeAS2MGK",
  "key3": "5SkrHe3oh8vmqcEATahVcxpu4R6y8ZHRFYbLziHxE6qeXzN3EsB4NFXwbG2PTMYL8f5nZTRdXyEriDRB3ttRM2To",
  "key4": "5G9HzcTegVjVHkhsqEYrdyMhk7UvVEtJ81ue5XCTs2PWRSfLNRLTcas4DaGvAfnQVcSjVcebkjQQyCDzezNmX2ww",
  "key5": "33YaNjYT3ef7rs51SUE1JrbBq2KYZUav5RLsi2hmkoJSb4DE6SeUPdWSqPkCZFn7esXJZq67gUv2jtJzE9681Xo4",
  "key6": "QSkU94peTnyQcszick3bdX7BoeUF3kMeFbpFDsWgnDoYLmRyyieFMA1vi7VH7zDmv3JY1n2VRazxjZHtwxZeoNK",
  "key7": "3hp5yfuMV76Dm6rTAHKG1KhkKAHD9L1H1f7Rp3UjMAKR27JH3DwKzBiWJYFPbHSkyqN21YehgXmhS6k6uqbnKP7s",
  "key8": "59B7kBZ9oUCJye3FTnBbAFyKyjezTfsUXX6VkgQiWFDxpb1CtzMFCaG59NRP2a8wwYYbxVbAHmqypMNPQgZ3Eww2",
  "key9": "57eZk1dSLVLe9vD4Je9KpyFdsxoARERyzPfiMGY9ZeMWGYg4EzEJFjYCm8QaVqtSYXax6uZBrDSJdsThZSgqEeym",
  "key10": "w1nCYfsn3Z7VLueKSJkMfa7e3xkuGaJWNhpCHvwVtYaaicCZjPTz2DT99DeQgEcWPtj8nsbjZtjmXkxtWPbNxKd",
  "key11": "2dSANvJu2u3LSTfuH5JdaBg5v4LtsJu6fdWip6EFfAbCJsb6GfQ9uasKgTAZMEt7tx6aksvZhEmR9yyWSyAhf7eH",
  "key12": "2DQLEwZF6rNgS7GtUxA2PMBgM9hNNLJKXgQpCyDzFMFzwPqQAxjaBY7kdK7GT1iDWqLwBA2hCvWozNDe7xtJcNSz",
  "key13": "5R6XQHepziUQR7rG4bw5oYkepA1XziXDRJW5j2dTXqMLzPExaqD56WwGSf61ez95iEYebeyi6zBajiiJAmqokwh3",
  "key14": "5D7FDhcx8a9AgeAafLUYqzKGfc1UMhCc3PcZKUxJ77Gdn6shrpRsbw5NskSWtqDswDgg4x6iVPPbmR9d7cD8t79w",
  "key15": "3eFmHfuPaMQRsNsRbW1a3RnDCzeXiqC9rMnXMYHRCrQt7Zq5hwhGp9vBNEEjakLPWPrs3AC9oDbHoFQrkQnuVcnH",
  "key16": "48doiNyCBraiLuXvr2kVXYii4kfQ9nXyfD4RPzo3U3ZknH2KigeBPVSPDXnouiEu7XzgNWUMu6MkEgjNJrooa6MB",
  "key17": "3gQxYVFeKeZi43vfJLHoZehCPrZrBD5TCaBe7De646AyDHXjRknLF3NzKitUbGJUFAm24bqH4jYQWYnSitT5crfy",
  "key18": "3dziwsMFVJHTCj63GBGR7thjMovqjBP2mUYH8dypoxvN5ULGimPqAzC6YddzYMLWuud3XnRhPpAyFKsYkNuLyuCk",
  "key19": "5usbtat8H51SFpvjftPnjq3WiFoNnPo5bCMdkeMSHQZFBK8KPS3fUJ53JQUW5buNdeFkmVEeqc4F4fNcEf5r5iVh",
  "key20": "2TycZvjDwvhLC6GGnuK9HZwwFiKxvBjUBfGxhfxUtuti3omSjogUJX8uhVvJFhUzwthG2pEQX6K2xyVpPmH5MYnF",
  "key21": "YN7gxaMfcqMQ6ydau5QGgTzAb3E1XNyZLK27fQMSSK9PUbTNpRiKp5ik6x3RhrDSGSwX8ssa3FNQ3r5TjV8dNhn",
  "key22": "38ZBn2pnDJXGsqWgG27q4wzJbH7b45N5WyaSeoyEzfK3WpogiTMqK5wxEFEGnDy6cQXZNhX9HqU4KxJoSuDSFfit",
  "key23": "4PitQMGpj6EdUta5Q9Xobz6j97tug7M6eAsHaoxTFqNZz8GMDjL3h8Fkx3EbuXN7qsJ2q4vi5ezwo7URoHoPdibp",
  "key24": "2VjDnf8udpRdZaKYR7ycxYccp8CfJnbdJxm81rwe6rF8riTHpKAiWva3SExk7QzzxWHjaUchpdFQPC8YvsHuJcuo",
  "key25": "33bBXgS2th22mBv4xtrQBvND1fs6EvT4FbVy9f7hV7bKsor3gVbMhRv6umP23nwH1fJuvZ8SjsDpWDMAnPUcRKcx",
  "key26": "5ijxdHiQuFuU8PnnabqJk4A9YzHm5zhoawKx5PfjnfSGgzK3WP5M1nTJJLQk4nbTvYUdYkXko8TrM3S8QFvotTJ9",
  "key27": "6MRZkYPrbkSsFpXFLFijxXnYaGXSDM9U1FMha891CWmvFYPFS86VRAq1Af6xnpcVV47VoUbcUDPZtF3jjeF5YZG",
  "key28": "42spJwzih3W7JHvGVf9f24cMWS5qxQNKneXa92gkTw8rwg8Yz1vJ5UhvYBytsbcnVERRoWqQ9S5EWbUCWDGH5eDT",
  "key29": "2qZZFoRNjnzThYz2etPrfrhiywYCZ7x7SHsuCcSsmNVcsVQhb6ffuVYMrEWtpMucV1bdw8ikLeWUcytJCooc5gU5",
  "key30": "htfxhRhNYHQiUwXrGK1Yk9Tx1AoWyx56t9uBfW6KyfA9Z8UbdWAozhiQYt2eUxDFaUmDSc6wVsvtiPUqTeT9Pon",
  "key31": "3zTbFjceAXmFgY5uZnZouSfyRUJ8MS1ProABsf9TUbZukPxFDxYB9YqPtp7X6tjRFAhJ2uKHX29iGKcwQnmeEFdR"
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
