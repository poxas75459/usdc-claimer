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
    "4MVDbVCpB26LohtJssUHmfptBcsRPpzRrfhCdwZgxuYe1ert76zSVSLehgtwdASpxXKD38U1YHQmPhnQM9nW2qAM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53KxejQnYhzm5ek9JtAPAgu7AWyXkSFQqtpXYTWBUHNHUqeEgKSwrgqarg22PSEj4eCFYa2VTGX1BAaVtFCH1XkW",
  "key1": "5Jt1J9p2nuqzk6vha4CQV2moQfymi34RwF2eDyFNomRD4BvxKcJecXcmfhGAFJyZ1QzHs7qf1LdA5LtzqvBL4UUk",
  "key2": "5pS7RsKieFmg3sBWZp6uVGkxDBXdRVLx11nnQmGegRFTrFDten67Uve4CijtkwmBSekDPxrme3aegdW2dENx52cF",
  "key3": "5q8Ds4sKQHBHBcKXrmeGXuqv5rirPxxoUBEpnP59VXHKa6M41t4U9SN7pzXPwAbjXmEaYGfhDRhKBxSoKEPgqZ1L",
  "key4": "5mTWDftshhaHG2DA77gVDX9AeAqFDtyxDFbPeJ17NjoZ7sRAJ2zbA5tEX9JgfdoVZvmqy9Kc9c4R1N44RYWjtfzA",
  "key5": "SAvGByhnQFvVgEHzeE2uM6t8NDNMeGhBrH37K5kdyuK7shfoGGrrYXsNxyUN2UCwBbZ6TUx1c72zAeEUYLBTfmR",
  "key6": "iKrymtQS2X2JpZUFLfrkU9Pm9mLEi4HpYCDxg9izfcEbCQUNiFiLCeFKdVEApngfuUDagrESpHdtR1fiXv7cip9",
  "key7": "38QiRqKpQK2iKTof9tgo6jaN5oGjTj4jJovKeDBoBbjeocUK6ZRssoQQK2E1pYL8ysJu9BxfYbE1gEYrndnZGUGG",
  "key8": "2sbk9McLxoz1zvhJts4XH6X6a3BDDWf7XPLu9U4opzAM11Nsj63MaCpQ39LKA7xoFZ6q8iSurPvFSzY7hGvhtwQC",
  "key9": "2bDiDCPuDnnShAe4UhEJLq2EqXBwdi2XguNLyxaxaRF2rne63qA3AKfCKn1yEyLFgkkNRVSnyYMaBJ8ot77iMxdj",
  "key10": "4umAjJEVbAAUU6QukLGvNSsrqGTfs1WNYTLq41xAQwYLqWfzgg3WaE8FUrpdpFX8bnGp3ycFiFCZoYNkFmSB1dk3",
  "key11": "3aB237wkVmS2Fv1aRi6DhZnN8hGk4rs8ZqR24gnx1vvcN3B7ErY3ecDGni6PCaWU2bj3rEFKZTv4ogTJMiG2HTju",
  "key12": "5uzXnyWU6LEbnLG8MPUQrspSB3rPrmRDw8eAnPZ8wzV5bMU7PxnDKaMKEEBzGjp6Z9zThg8uNVpXcsu3s2NTAeLE",
  "key13": "2unjnZaG3KUPjo4HZqutDvZJHiCB82T8kpRMdNRMRpurAWi6LLhJmQBgEe5F8NPzVcjtXTDz1Me1tWs1MmZMQbFz",
  "key14": "37kyMp9zrb9ZHuUaUAykVhAV9RfHju5hbDQ4FVbqmV1XjcKs2xPvyhZZgJ4UzazE2uxavEAu8BjQT6f33XxsHNz3",
  "key15": "jRDoNeBcNXhXi4zhm9Q56VTRRUy9BFhuXsvSJt1vvo7NBjDHrfxrAtFZpJEdeVg6qJquAdDXcAREje99ct2NWbV",
  "key16": "3KUCUsVYzXEKNaZd4i5C5ksYfqXLz8EKFFcPRyAFEuMTJLxHcj5bCssimBGu6vc937HM89bQxAHBavBU2i2MMrp",
  "key17": "5v292WyXgLMaKL7Mo8w1oFq6NLnbdmxbXr1N3od9WfLqafLT2QADgxKUqwobjbDUzSPwbpyQEpzttJ1rRPLHGhyb",
  "key18": "4KheDZK3DqroPFbxcnkzHuSGhqzy3GydaKNXJo4ogTtUeXKKMA56Y1NZdYAxLQpB8W9g6wKURajuacRVZM3KeKd1",
  "key19": "2JVmSHfjQqqS8Tr9qh43h4EHFuBPNUHhAJTnEFeedBXfZUe6okGzfurr4g5auMRJkPmkgoe56fLNLkm5mse6CacU",
  "key20": "31UVVCuWUWF96uurpkrDkSrGocwGSuFKuUsVhEoQm4KNZ781R3EsthcrNLx9dP73FHj3hoM2SA2DJrEHLUHUw9Ce",
  "key21": "4xMqzSE2XnFGpRbCddMnvh6SkXv4DX63uJDmUMaQJfLcVT9o63QwEAigx2WSCo68ZuyTvVfqNwpS86CWQbqRJpMf",
  "key22": "5xCiVgFjuFNxiGCz71nJBCmHbvg98SLyCXxiop8iZKscv58np3R3rCEUAPxfY1MFqGCNbmMBsuM3LR134JQWLLc3",
  "key23": "sWDJ4ngrrnAcr1xMTHg1eG2UJzsLbjhtsPST9i3ZsgYU6gMLvjnTBhvz954Ujz3ye5CMSMPvK3ucMVUQWdzSe3R",
  "key24": "3vgV5MgGNpy2vc8M2jboUZ2GHSzp1ADzHG3uLY6NoZPKBvU5NcD6nbLyvsDZRk4C58noZwP5ngSHz2Br5GprFtxJ",
  "key25": "4Hmdga5iHU7XyeC3PgskkwJ1FvX2iyM1XfQmbUwRb42uZ7kUm6kr3ghyjom9jNq2LUNntpQWuFyuT8yD6oNpQitP"
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
