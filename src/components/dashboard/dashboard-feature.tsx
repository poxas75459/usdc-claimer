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
    "4u36hKjPYBhmzcBSYtjbLM8xtgsLiUUVXQ6JcCxi13psYRUhjCkA3Av2KeA2GuQBpeFg8A4vpXVrzrYmkvCWW1K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kFAM2o8qFFmA1UUsxeGWb9VXhN2D1pmxUwpgZvctBsMGWf7DfaYY3yfWye24SfKLcejvMDB3C4FjypoLxb3B9Kx",
  "key1": "2q3aeZKWQVQJTUZ8JLi3AwRSuisvZMxEvirHGFQByfdi4DM8qP7rTtm8uoSyyr8gFbP3gBbu27YKKB7V6zUMFuDW",
  "key2": "3gDfLpTpQtJkFcrjn4HpcG8nVL7DBuCg1EUTvUjG9JAG3bJ2Ppbx45QejXwpSB6NMtCtJzoSCGrQhN7RHqDsXwkX",
  "key3": "44qwGEqQTEJAjCQCbtdQXspn5Rr43RJWsaJo3vyaDnfs2dzaw7SzkqecDWHYEFy6TqF8tiMXCs6fpNSz2Uz7Tmbz",
  "key4": "63spaAh6SY6x5dPepTgnjD4TA8qEwkzKip8RWd6Jsj5ExET9VfoXzM3wfDqzyt4a6TFEF7Pkf4XCvCUCfu8mQ8s1",
  "key5": "67C7gkgCcS8Z2UWBEbs5kQwYhLYJyyS3DeMjxuucPvMZqwkkBc7kWAVXSSnXgTLNERetHj4XWzVEQdCH9iJbdUS",
  "key6": "nJBJAHdi7L8YRNLPZtTX4qsGzB1RX4EXKGt3gjr5A8nzNLnWJyg8q4xPkbJgcwJih15mNc2i4Fo4R6iQCJc5SAj",
  "key7": "2D77EgXSbDTnMPEFgAZPjPJCv8VFhEfdxFKHD2ixZMrE9KLpvfAFR3J21WVXA5yYGDGbrcChZWyouXfnVbYWXHHk",
  "key8": "4vhmLgd8LMu6qjgJzaYNntKqCvPU6eW5Mz2sGVJtT8HmnadRkVXpkhDKw98kqXGh855KmnearHLscRKo87N6znw9",
  "key9": "4EoxQ97nfyYfrH2NuGpz5N1yusqZS9B4zBye244agjKjJWLAFJcgaKkiv7wMpGD1aLZVG6ZftzpFCtdhqzhZWh94",
  "key10": "4sXreS6PVLHRoAL2vBecMEnBQKBsGPdg3nJBpN8PwnFwGq8k91QxzW6Z9n7Z1Epzst8BR3kFSbqTer1MAwj7HARg",
  "key11": "2znPRyJkpWjn3UprubjzoYpKqgTcmMft97CX8roneDjSdcqi9zTXNzGyDcYj3vLMRwnhAzHNiYmqCLRKAcVa8Cw5",
  "key12": "64MHPnw4sw3GPVLKRoHVQnP8RxjNDjwxc2RYCWFHxjHedcEcAXSQMsEtsDSgTeRjDNP3DLB5b7dF36CErzHSchRo",
  "key13": "3abeKe1c1WWeFdHJqpSLKn6H7FxtfgXFng77My6uzKCft4rFMhdLqeqCkLbVtyUq86NSaG96UQcUx4Sxr7WFC2xp",
  "key14": "4bQmtWKxKx6gvcQGJXrWH8CzjrzfKSgJN1eqjX73MGzH475W82hFwoZZdnHeAci6eii4d8qMVpamZiBpJNR5Wope",
  "key15": "2HjE2ds8nrPkHoGa69YRwVy9jtqxc83PwFhCSshzarD8MM457giufng5QRmGMAybvHQU34xFTA4pZb1t2dzHTbSM",
  "key16": "9T5DNWdmqf3S6nht51gydK7yZmodHvVBsQc6u5PrNWBfyQ1WwFygJG1qHpbRLUZ4hvZ4DGrv2o5vU8KGbMPeg5E",
  "key17": "4hb4cMZeXzmKpabTei6dcwNFyQsW4gMCYEAsvCJXPDJC3KGnYvr5DiAx26qBWCkGqBmG7xaxLeepdTfAWKvz3JiA",
  "key18": "3QQA2qoVyc9kwPsVy11cHnqSNJHBLqheqDB2P3jeSNjEBKgYdDu7XabRdCY1qP85oxvPXf8rgW3VbQLNhYGrFKCH",
  "key19": "65p6dQ93STBwDdm3yLH1ZSNWtQJpD9EB93zZsXTHfyQzqKsiwRLTwtZ48WZYjJsPax6rma9i3rUqCRnnXNncsHKY",
  "key20": "4rkmQBwS9i9W4e3s8QCykG55BLXzEGpTrRAmT3okufvcUGYaW7ZaWsf14bopzH5Wxd8hwvvjM4F59Yz4ovWnNumL",
  "key21": "2Q6GS3qWhfWUJMQCg6Ntqc7hqRA9PeXRj9nTzPS96fYn8NAKA78cSL9x77QiPpqZNHxQt4V5kwm5mokiWaKAjr1U",
  "key22": "53Vmak9vo5TNwak6aRkGHUDZTy8dAVs3A7nhqfp6dURbTExNKfNzEcuGr4nrSC3XbQMJFb4FvJGkvsBewJ9irLz9",
  "key23": "5FU8Sdg8FQJMyPK78wQCBPh5CAT8TrNUiCytpNr8m4ZRsMo866k7ixKJ6d1ASR2ppGrb7pY39HXUsQMpsgxzhgwQ",
  "key24": "5gt7ZiahGZ4gqkSM2NkRreS45Um1pBV3vWpUrknDFtU9655VQ7BYfPzB1YDjCrqVv1ddEhmhNn2nMabY2TgmUQ55",
  "key25": "2HTwuSNVS8AjRE6ESKXN7zmpZfuu62sgpzQtqp6JkRRjcon25bAem43ccwZF3EG3U2Z6bVyB1G2CeyNHX88X4KB9",
  "key26": "5mhVVksebp1ReQLRgLsP8iSLve7oR2kNi4WjZnzpw4zJMuebP5n6PLhyFchDxSrMQLj38okP4iTrg9t4d7n6HRXe",
  "key27": "3nWQrmfcs4zSyUhc2dWn5h1zoUfSgtgoAt2xXoAeNpYUNKR6z2Z12eoK7RtCFUSwkdK2ktWRMwFHrehFBzH3PPQU",
  "key28": "59mTfLLy98daA3x7L124JDXy2NDmGjFGrcVUJNseu7oijKfuSSqwiR1MHfWJ7a31YhiZMzcFoYe66gRZkYwcb6GU",
  "key29": "3FizCsZ1XgrFiZqbay3RNbMZUCwEHw5MDjDMwxt4bMutYNYyPu4JBQaMNLMzvEDzDYJi57A7Ft5zKGy6DsSgdXuk",
  "key30": "498WuuBWJfXwUzBZ8Zv3kaM25nn3jBMTgRc45hQmSiQ2JvjG6P7KPm23RncjDw12ZYRbx1KCER4N99mWfsTsag9c",
  "key31": "2jWPoGNQ2WYCqbdp65AXTtZBUrLpxKQp7vCJcAubR75SqC9mkXuKyAzb76WCVupm5YfLN3E1Aypscx64p1tPRVDH",
  "key32": "3zEsaqA9DUBbjzcUP8KJSiFUaMGALg6vWMmWavRi47kVWiE8HFS9E7TGjUuJULoZUXrGrkgUe4GuYDzgXnoyFbr1",
  "key33": "38xThoYj9gS5BBrnyxgWBTbgiadw8Z38Y5NCxPQsf58KrL9Q5cSACeyXLf4dobbcAJ3W72TYXiEn4wZ5Huz2zNDq",
  "key34": "RW4BHebJDw4954wg3qmNegZR7k7mRtk2ZFbP9jdj3cXwW1YP5ZAMYysqCAecZbsNaKyBQAYgeSp1amsNfSnY7X6",
  "key35": "pSUfnxr94dXG4xs78kaqtxLCPwWgY1upZuazsPSR66oHx3Jg3xpsfTqXr4mxysryWRmBvYinupV6GcyzNWhsZvL",
  "key36": "2JMHcEid3SvSh9NrY84LeRyBfboCyHm6iyGdA5Q8gm5gYYu3d6jHDb9C64uwTSGxiCm631HzStNQh3SsV5YdXR14",
  "key37": "3e4edphUrjwpV4aCAF5QLW5KevUQxyAGLAD8yZtWEBrwo5wMgMUBUbVCs5k8tb4HFh5zLkYMj2cgy9MZp5bpvX4X",
  "key38": "5YiA5xnpB3CKq2SJ7XVmgPpoUuRJ21m2d5dAZhrS54JesPu4C3mzRK4Snn8CBiEk9K95YxBwWYUyzU3EsTqRVuHh",
  "key39": "LqHeEfgYXPcVGr7AwD1xPb2jzy1YGTPwtqygt6dREFwdgztywjeTbGMf3CFsiaRftf5PxXk8HDaKs3JCDURbEBY",
  "key40": "3etdkybanVs5jTAZgKj8mnY7pBkW7axN6qGUfqPVdyPigEamAou9bMWzaimchXrxZXd2MUNTboguPezLY1AsFao2",
  "key41": "3XtWGDDwPuuuvuJRV9Hgyq8Hfb7AAhx8v8YmP46AunJMTY7vjTSG1VWUiyfpcqULQT6oZ7Bm8xYPz73dZLRtE2fZ",
  "key42": "4hdJpv78mAaWj67ySV89HHNXMMswiXYFCYobmxj39nHE7rTi2M1wXRK8kXDTsxzrCg6DPtftBWDBW7paZ88UrT5C",
  "key43": "2gkJTpHXq3srQEjPwoHZrAW3LrtVRrosBbtjQPAi3zw4ReuzLqQcBCG3bwZ9MXZ3JRxanF6PHkZJiximHSydPyAt"
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
