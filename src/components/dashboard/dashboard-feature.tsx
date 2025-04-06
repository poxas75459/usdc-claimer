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
    "5CgzmAMAtoTHMkNQFyVkFvFohqqWQkibrwHdW5XmNTPVZhUWji95925q6yicQdCmWxX88EYyCKsSDNQehfxGoxYG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35ezktuE3awKbctk24qQ113W3CoC3Rs7EaYUydaYsGmnVWgZR4GLAFHgiQUf8dXgci1chbehKAQ8gZnysqYCRJVz",
  "key1": "2sZdKrvaRrZLS9iwafNGx8fxoMkqHL2P8MMbjPEYqwD15EbpZYNoYbp9Ptx5bi4fDqFDgutydtuTPFEE5iY52H2J",
  "key2": "2jVivdBUrJSFnTcNEs7GYDN1Jh5wrHXQsRQHJtnBC3LzsmCFXh8Fs7dsuzvPpie7J5cCUhtK7wEmzxF9XnkySF3f",
  "key3": "4u77ofBANBCbeNTBLHuuUVZPofraAs5eoxwuvCuJ5i9PrBdbYymgUDCPyQEbhkTD9SUhRGW8FwSvqYyeVSVyHBJV",
  "key4": "5x5guYLtZarJF195adE4F1kE58vXCJ6JBV97xkVUxckq1q9sqAFtSHvQAWAifAY2ix7ntUdSx5GK6osZkTsLbzFU",
  "key5": "56iEEXDZAQbj2HedZiSCS5mxH7Xhi4awogbqkSwUpXC8r6nxTkjheH9uXVzH7sLrVEYLtmP7pKgEDNFqcgMjugHd",
  "key6": "4ugYkNmnRw36FDX33VV5aQVm8SmmtABDv6wdkknSHpoV1hhtLMUurQYeDgN323KXj8V1m1XezP8sU4rAnkofbdJf",
  "key7": "4oufDoKX3nVGsTGHDXnkP1izFEsgJytWrDMqsKUp84sBFDUqfL9mTEwPZSySkej3fmudheViSM3tzWCG2hVekeUv",
  "key8": "3qXsFRZvZSFAWBgLyctNqz9dztstJN14ieJjmjyQs7sXA9vy9c9ZtTQmpvCkcV31gphVotCbBzdKd5zFkSG9G6LH",
  "key9": "3FYPVBzUWyuwBCAPDGf7d6ninSsnTiLxWf7HXf65UJDTb8DvTGwxVG6czKhNZccjmuC924eJyufjp9s46U45CKjd",
  "key10": "3qhinMGspQDjCzQjHq99GvFbSiRMEK1GWmjpW9LMzZZcKumuf96kWx6ei2jE6te4iSdZK1oUgy2yS4jrX9NT9wcv",
  "key11": "4Ks87992BoHw1BSuw2QXwyJq6NU6vJAGwLBrmCLNRMQqBwh5AetRoX9GxGbW7eQ59wczjKQrBwDA7jNhQNmQJdft",
  "key12": "4rL5HMW1yqDbDK1Mh2Vn4k72aFp7WHSXVbzRLvsWwMUDuRYwhGQpwAHr5zyvnEJqab5hMDv3QaG6aCbmgyeTRjTC",
  "key13": "5edzMYwnNg6TN7fcFHeezCTZGgaVqKjZnXZ1ZjPLwKmVi7xsmS1FEUxkG4sQQuH4kykMLoa6T6Xx4wfwft4dMg3r",
  "key14": "jbB6s8EJtvXWHJ2uNH7yXrSCGLhevpmUGHFYHp3GbnhyX1jBNFV5TfHQJnRNWJpXQyFbH14mnREidz2tiDwByNi",
  "key15": "5qGoVBFfzG9xd3VhHEtpVJdKfa2U5My3iAPimLKk7F1LcZTHUFgxqgVNEyx3QYab6ptR1HTMSg63bgj7m3aF1qX7",
  "key16": "29wBWYBHPWmQDsqQu5H2ppLEfnvDAB3wLk6w2HfyHRhVtREa8JhNbYzuAdVHfbMPkW8p61ep1xnpjbirLFVt2UGG",
  "key17": "2J6vUU4c5sv6SC2nMJq2tKEziwNPN3jKWkEU9LQC35ifsSr8LKWzds31YvBusLQSHHMnSZjCfGUjUkX499EyXvgr",
  "key18": "GzKzfT7sMV6FLcq5NC3ezBHXNGX3CCYn1fweVJN1WYMswXw2ZTyZ1q9cK7Y1HnCtKqC4sBFNuw4RtsDgVZzGYRq",
  "key19": "33r3VSDXUn9d7mJbF96yMCS53GkEJ3x9h897hYvsPdtc2v9zXQWvPQsWk9wVDmLqJP8h1wWTW4aX6DGWuHiCU1i4",
  "key20": "5wvSvYS1rhDZgzKgMNtn3SG87W5eCN9hMdDqqA7JrkQfhPmSenswtBcCShaUehYxDGPpd5C6uRTQXj4ijeYMRdwz",
  "key21": "ELRCZegcDVnMNFAcH2DnBoNFwkWm2dHh93zoXLdNdUJyCMzizYDgx9AW3XVyA1v9pG919xqiwSuPcpdnRdkHbmm",
  "key22": "i7Vj6dFVd9gkiRB8T2G11ZA9CGsNCEwLURHeAypfW7ogN8TFyzYqKR3dF7teoUYU6HBX4Nymfxu8UFEzWw6cn6Q",
  "key23": "3eDx6rjndTB7QN3FHUZ5j1oasMqiugqYj54moUE1FNZAz5cUpP3AegWuytdSkkx9WRtPxzCMK3PRNvv3YmrHvJff",
  "key24": "aGWL8HbScFo8audot2bL8cGafLVDna9xz2AZWoiJ7vx7Sp3z3sqGfTmsg7NVhWgpQWde5tPuhrETeVLtxtpKt4T",
  "key25": "5vYTBvyXF38t5SRpYr5LposPGn9JAW8FreYmoZ3X2UJTTjMbLXU7L7T3nsuB6PteE2B4MS5gwN6LEh5At3kmZnmR",
  "key26": "5jAc7fPuJnwZZhdkdusvHhSB8Gdh6EetiPBG4GPLGCmpiQtBvsSwrJChd6fo4JCp1aBLJgE5DAkmMZmXDqcP5ET2",
  "key27": "3yCcaQW5ktw8xoKcp5R3sHiHRS4QKku7aT5V3uJcizmB2EL9BVYKSnFYo6imwqsCSJbHK75B89pDfLspK64NP1uq"
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
