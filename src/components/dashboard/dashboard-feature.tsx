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
    "4nKW6R3s8H9kUbQJNMTziEJJibPnNactjtLS7abotEeQZcWyyfLsk6gm4oDt4RCRpZnmLf5dctyEJJzdjbw1FVLA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hUbXx6GBfrzyV99a34weKXHCjXUHkfqnUe9rHTCNPxdffkEHJfqtQNEjrYztA65y4Nc5tJ9SyDmWnYx9ox38N4H",
  "key1": "2BnCKjJKNyXq3eGNK5HuJuXEexNQUfS8qW182xLZugPpydV6Jy5SgFYdBWFbJ3NqhqgdATVyWzC7Z4xVCrCogoBF",
  "key2": "2p8HZ4B6ZNLYFuJak6PDfnxv8ea39SJqLNEyGTbtgPEGiveVS1yFRv9CfuinVEyBpwZVhPWvkbM3xh1iConuejyB",
  "key3": "3iNpsWDvJJV1g1dtPmRuwG2B7v7rFtvkKkKrwHTT2z4fFj2BBcnn9GRvyaWQ7mi5ghymGP9a58EhJjp46gXpJ8YL",
  "key4": "5TARbfQDwgrTzCYWAdevTQKRe245S14xTSoeoxSTcPvWqP1nEr9JsvZ3qjHpHRSRf72mVMjXXaaFsFxf8wUUFQ2X",
  "key5": "dhHEYfbVEn7ZXByy2KWwQert2AMfruCcJuvAqdLyD4qLXHPRewPFiDJZ6HVLZdiwvZyTJKsn4Xx4bsVK8QEWwgc",
  "key6": "fvdEBUoJRD4ifMLuqPC9nU9Z2hFoaxiLwYvYKPi47K4Y7DDp6GMJwefunv9DjQVmxpY1EAHCn3aqzBUwom68Do7",
  "key7": "5t7nNbdvrQZcSdWjiqzRekSbMYhQhaUJdzW737qiqQpKUM7PZbJNJfVs9DJTLnbS1TkfRnDZs77HY6jRpQY6HfrY",
  "key8": "2LwR7dt63YiBFPzYxK36yRVWj9188DYGyeNB5kJoo6xFGNcN4FUsBZsbzxqvv9hxxKRBnx96fEE1kR7WdUbcnnXE",
  "key9": "4y7iCw9guquYGXBywo6MhmxjgPxDYAX1iQBrYGVNpzox36sip5vzBmQV9QFoaUwYyB3nmwNcsW4R6Q8vtPphLbLm",
  "key10": "5oMHgcQscSPx4AXpMsZMFhAptYftBbsPWwFXqQYQcjo9u8brL91zncnZeULrFirK45b5gwsNzwNQ8vA6Xuq87jzt",
  "key11": "2p7L7KhJZT3EPJpbirsRUUZQs66nkr39VgfomhmTpi154vMjQEnhtAS3NMjPtjW5H9zngbCr64sa5Mg6q1pWHoDP",
  "key12": "ZUy5e8VxXrHZWVvZb1xwGQxzujhJ11hrW2dJs5mi1G8UXWCABJqf9DN35tygrfhSARE5UvR3Yg8R2XkKX2CF49n",
  "key13": "5rSJ98SBnA48LkmxJ9nNVGBWrXJYEbD5GYvEuUKPoQ2F6UDQMUk4ZGwbZh3iUGzsQGsCnUN7rWAyJopyu4Vo8r2S",
  "key14": "37pcX36FG3XtnUbQDZC9F6Y9sXi1kzV2uxhZ72LC12xMDNcYYQ1bofhKSeUw9Lj851QKkWEghM1hQ6ttG7MT35mx",
  "key15": "2nCZ78RPZeU5RtBL333dz94ukKMfKb8VuG1g5UrSwAidagxEKdRhiDihcR4FW9MCzutzdqjsiRfVWZPtR14TyRXk",
  "key16": "4GfvyyQakcxWhrAC2dHTiHdYUAv9FVXU6QGfRL6QmzmR8xibyZhDQSJx1V3oYeQ7cmcRucExUqB35mdQXiDkRMCY",
  "key17": "59mMB5ujgUYcbry59LZM2gfR1ZC4Ydd5cyVyLfRTPmjtB9vkaiv8UU7koWNFWSTLhkdrwjNtewEzzfeBU1kP5WYN",
  "key18": "4JG1B4EeNySotbSipuwUHhEf7ATSCKpQPGEH5sW2zZdAB66DZyroDoNcJgpUfrgan7Bii9PbkwRGCAFNfkAs8C96",
  "key19": "2JuqVnvEhLP3iPmCVgNzPNZXu9BYNSLwba83cuXCWegfMvZ86hL8xNvAgL9MhvXsx4TVDE3JLNKYniZBFS5WkmMx",
  "key20": "31Zqmyqr3st7fFD1q8sGbHz3a2AbEQPRRB45UDPoYAE4tXa3a5fcD3EgLtuAxGor1YPLKwzitDGrrFnPSoUkduyJ",
  "key21": "5J9D6UuU9h1JhfisvrqLKKtsjncCLiShRZMiwBWAcCmzv5t7xAjWWkup7oEMSinjayJfZkMY218xZUFr2Q1gVebJ",
  "key22": "4LU7nTXbZsnAXZwk9roTUFErDbwzghdPFVxALqu8KZChQBZSESj2GrY965WVwJHwvBwKDdp8w8HQH2w5zQjd8KRB",
  "key23": "5d5amhEYjTLJoV5zYV5pheoQEWn7BiMM1vQR8viGDS2yxPzkRZ2yjWcU5yLJJhosbi5sjzYjd9m7F8Uav8pc3zfP",
  "key24": "4fRqbfJ1pXx7L1uG8wKxFx6TrhfidvWofjtFAxXYn3e35o7Eoyeiv7gc6f2XamtFu6kihZArJ3eaw4vy9cxpSTzj",
  "key25": "oBpXDAHZeC4aPvMKjzJ8pyRhMMpVT1wfbaiV1mK16WnTs42nWixt3xxgGArYAntKZPA7x9UNXee8fSDEZmN2Pmi",
  "key26": "5dQWvdbfHEKSFB3LFbRAxDY9nkoUNeH5JC1w2YMkVCYhUjhTg7UbbEckRLy5HydtdAnorvHicU7SoKYQqGBAp1NN"
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
