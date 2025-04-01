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
    "aVpTmcrRdCCEyaMcBCDo7THBG6CL7LnbmRQEiDWkRBWBejvE6HnoNXYLSx3eet2mmbUWH7ByFEBazy9GixqWq9F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27YnAbKYu1gEE2nHRJZTSMxertwxjtgNdKA3WCHwedDedFFyG1KdfjmTtv7VcLvfRcvv7zQKY6YirHkW9QfGRovf",
  "key1": "5Bg4WiPPMqoMy6ha8F8b2aynVMTSYLyJjbkAMBXJLzxmYrcmpAxMP2U7Q7ZBoSDQTAWox5PJ1HgoVAYZ5eHBDjQz",
  "key2": "3qCwskxCuDyF7Q1J1hDK1sEEH2LmxstvGyH4ErcbPu1RZKQ6HPAiPt7nctgFUX5Vu3ASMfMdqL1Wg9Mp38E79Ueo",
  "key3": "4hTEHryW23pNQyZpUNhAg3ArHJpEMQwWxUSprPEHNSHAnQfrs7uU5DE92RNDhvvSkmYWHavNLLv4twquJXFKqgKP",
  "key4": "5jN8UPVVRCe8cZAeZeeN2XZP8yFdd88sf7mwPBhRLW8jmdtNQ6RALim2yytFUKD3fBt5ezMDML6nMfd1erThwH4x",
  "key5": "2jqSAmCGdCUN88qK6dG5SuabRdQDeBDxjWi1BFbMrCULW5YXhGCGjEh3PKcBZ5MfMKgyv5NNCSwLA7na4qJ7scsq",
  "key6": "2zdxbyPkgBKFZnuyMQ7UDxahQe7troDUtZ6fq46qHCyTACSiJYfNomyWpMTCJKUyPvXzBdzgRdn3Nt67qEdN8rQB",
  "key7": "5f6WZNkPK3f24KtSJxja7wDvAirvj94yzFhZHV91jCvA6pCD8Bp43NYsr6TJ64BVrXjqCY56baXBg3yCmp7V3CG6",
  "key8": "8QBWp2RGQi2LncCC3jeMmKYHQURqoozWMNUpveCjSfFLesugm1HRDm5bCzhyDCryptGEPqMGSrovCfrYEJnw2iR",
  "key9": "Jvo5qbzqourLMnHReWNBk9bEiLH44U6P4YCCSsNrw8jsiVHVxYqPt4JEGNysNpgrxjVXZPsNVPGUpL9gXMkTpba",
  "key10": "3RAfY6joE44Z9a9vW2TY2tkTF7dGXGEfAANwBb2XyE6yM6mtqoBjvL8eBupwBRdat2SFnr13iseTNaeNmquagQRs",
  "key11": "5yPxxx1xURFQ8eHiiauEeczu6BRgjnuuif8BtRSwqPcx79oj3HW3hnkGV9m9jdonm7bcjmkmRJb94dJyjLKdZ8KY",
  "key12": "rZtBJGYHfW8YwDD5dW93YLyVefQL1yTtaNa7yApiC5CZNQK2pdPSp4Rc8kD5tUcfr5xmGy9HDB8DThH9wnfRFUe",
  "key13": "Uc3CfV4E2Uvs8fhJi7sJyqD8Hw58xxziiGJKAmVD6soDh6hD4zaHcqSZXTqNukVKqVLL522cimWk3p8PWUw1eyz",
  "key14": "4izSeEx7rZySHMLYA9w2uxibzucaxrFHASHGLMja6RJMxw3cPBPgDLs4DpbKZv6HCiJyp6KMWrp73XWgUpsLFAiC",
  "key15": "32hz4VTUriTi6X4Jhd8wH9qsVxGHZFkLRbM6MLQxGXGAc68A75oixEysq5zZpJXK9CD8Mm19thE7NeCTsjaieZfY",
  "key16": "5Re7EtcxVGgGyX9oTzTqffq6vKLrC1GUrgcj29oy5oYat56xSd9DVCgWNjEqp97jhH62ENvq7q39HcS97cCvuigr",
  "key17": "2YzCJh8TW6SwhgJmj5Fzh7nPgnYyQjpicU8ntT1htBET6RP8QpYcWN8Wk4A6G6zuZKoHxJxziQcSKrrpRaxceSVx",
  "key18": "N81R75NUotPPtNa23QWQS6eatsmNGCidEJ6XgGiTdWxPwZSEv4aMqEriE6rkFmqoJEaYJGzs2VhSSuL92vKWwCm",
  "key19": "ub9QSUfx9yAU1tMgNfTszr2SbKnXE9uP98WrxNEapxjYJRtdu6imwJfQDjAFN64576QyB2PsqRWVQmQd4EsoNGw",
  "key20": "5USR16j2znPV9uBtJ3txZFhvMiKrdG5nHNCDWsaW8sMio94577dUHy1LSdVYjhjHjfn5pDvXqUB8Y9ZfwbAFhYBL",
  "key21": "5MLaMtjsBVzhHrgm58UaF5fJahno5RSS7dSQ8KWkva12prTVMg7gwD8PFtbaTyTttpfuenW9kRmpEgkhYiv1eZQH",
  "key22": "3dMKg6VskLEbxaU1br5vnWoQ3XU17Vsv7nNAu4eWpcuKEKbkZUEoVUGmop9SoHf7CT4XFA6ENrMZ262cH9pMjxWS",
  "key23": "2KfccSpZieqMHZmxT6DeFqfWbLxxx7feFY2pvBRj2AgjGX2nwHbjodiCehhfC6VeFhBSWFNhbqSPVACzubtakedN",
  "key24": "4JPCVEH9jKns28NanKNDjYAak9sppW93U5G6gSe3ekxEg7qbVL57UGhn7GzXFFvpjQfhwFTWHZ11v2wbowiBfwYZ",
  "key25": "5R1sZbNnRw7sbfUqwmQyh3GahN4zq3y4G9PrPSd2b45aZTyvibCXuKJzbFagp8wN7e4kQvjTBiQR9b4wEjhziHGk",
  "key26": "5V1X4zaLfj17sEwAHeXCQa86vrbk2wMm6yLyJySqufRshHhKJ3qVg27D86YmCef1YrkWmPxmgJmJagYAxphRRaZW",
  "key27": "3SsGFVYYLCVVbpGeUv3bwQtjNeJtJNTg7qhZ62TsBj8kHZ6aJcC5z56BZQDtbt8wckABu4UCwUduwnMaXofAGD9N",
  "key28": "5CCrGbMBJizEwJmrmXWuKLvpVVrdeYM316KbSw2ShMBue7MsuDAKG5k6TYBGCXrDZpGcJm5xjSFyYNxqKQHdXMr9"
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
