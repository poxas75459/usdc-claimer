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
    "5k4oPzUv1MdHpKnDQ5j6YUCSvwPJZYXm6XVzfCy3HpE32zYHptn3qa9YSNGVEy8TvZwGBoe739FJkk9jK2CfkutX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nYSGoGVmuQjy3VVm4ZFYCv5MQzBiSJiJmtg3hHVg77gFWLNgiGAK7NSXWRCM28zGDArphPSowguteSBMQ16DKgu",
  "key1": "2K5TKQA7Jr2rNo52vMaS8LKisMoifLGYDmzyhkfyder9pmFUv3yVeTCH6FeRi4PxDuaHaz95ejjs9LNdMtRKE7XR",
  "key2": "3vSTqnfcTunfucHZJXeVh6FXbefpXU8cfcrGmjxkFQ6VemWtnBdPyQqotwrEd7bsJuAPQgtQHzGn1jsdsw6vPLiR",
  "key3": "4S8wCp5bm9f7QhnDiEVMWCyuduqrgqixmiXPV4mDz1vi8nSBU9Wwm2qzRPwxWqfoKK3jwA3ccMcMtGAcfFRXJi6d",
  "key4": "4cZx1BreaTyRm7Gr8qULNnbKPgpNg7NXa6rExBWDZ6m1eCggQ4HJc5xV4r3fzFDAaQLwAooiKBUprAXTmuJT7Zfb",
  "key5": "5dR8Mq8cudSxYmhQxKqzdGNoQUQwQuHFaqqCcwb3fUj9b75F6zGhCYBhTBc1aXcXyudWWhQxmSr9iU4ASY5PPcj3",
  "key6": "LuX8fCtFTCicVZKD2fbm6pAV9n5UvyaHdNHvo4ZjUvqCzjo2LXmKwBELGjkX4c3tq4DdCjbA5Cc5ddpBhTGFQ2D",
  "key7": "5sMBAut3ph6RGv8TexUXxzm9JfV4JDyMp5S3SLKtEyHiCFucFD765a29V67upPwU8mMoiiXfset8v3HByeGaHyHM",
  "key8": "3yo1UrnHqdkbNTdM67PmDAR9eNyGd2L9rreZRxzcuSfG4YxVvD76dtZTNWEKNRw7uXQn55a8hgYLyNxaw3APZFY9",
  "key9": "4QygBWPVrayqWexQ4TJq2dFNMWXKY2p6fBG83EKYh91LRejsgeQ6Z64gohroA4m5ALyq8dvehUbe3FPQUD7532fd",
  "key10": "4CdcTzqirFNZ8PVu9RnTgTFwYSAKibtbXF4SKsm9uUxDy2Ef9q7J1SFbGMchu22GJpCAphboo5pwvMv56KSbw6kV",
  "key11": "4EZ88qUUjTfmCZkiDoeqprHe5J5GmZcdgfogP4sMwGHPoUX7B9mUmZRwC8R5Et655V2WYDu3b2fMuppynsrGB1Ev",
  "key12": "GgDcwEp4yM69LqphXZSXnFa9MXhm2wnceCu1Z7WTDc1D74mremC3CxmRAeCXqVXDgcWG6APkhYxZpkR9vXXrUm4",
  "key13": "2KCv4Ymw3Pe9SVEygnUx46Hvcp1kFWsbvYrQ6szLYRmNyKX7PSwwPERtzpUkiu1oT5fAreyMGYmjMfq6VhEQBAXh",
  "key14": "twEk9VGcxEo6D9oYLbDEbMQ237L7vLYLg9Jwk3kBHqGt8igBie9VhLb3JZBwjWy67GJnNrJiZkZyTuaimqYH1oE",
  "key15": "36Mo87pCt7Dzm6n8n2vCo5trFmbzh5y442ZwbD8MdPi3pf7JFyoqQfX314xvkmRzSAMNpAAYy5L8JM7dHeXCUMC3",
  "key16": "5GmtTXoLYnYPmM8md8SDc2z7NngZzYNrpgW5FYUgLq8q9J17QWy5pWiEYREQukqoVUujkmCtfsBX8LJGKCHNHanU",
  "key17": "YmkS3ZFgYa5EisydaTjZkyeQT8cGETyPi9WYtU724Qi97p5iUdfEr4obyr9gXxFn9vjfTb438ZzWyDypQTLJ5hG",
  "key18": "5A6xrKVzTCUuGLyJnchRomXocEo5fCX8YJRmwGjQpHeBHEDwrFzouok6SAaJibPvVfaNVVqSLLdySscytKasencX",
  "key19": "2633n9sQ5xaAdQrdTWmVGXMhKAyn3uqBFcVKiBZvk3NrkhLrWyAd6SrTHxb2fYtzc18XW3YowfriC7eMnq5VAZB2",
  "key20": "5YdrQ2wn7eZLc8A9W5u5AVm8KjbykuQazLhgVXj7jzB5qLLmY8pYjDwULtabR548Qzne4eNczyPR5osABYp4jwKt",
  "key21": "2GKowWzNKWa2uuXoGHqbrJdC8dx5yPN4ZR4WQtoZ9PbkqmrcW5iVixMySvzABnhHrS3zYH2jiCooMVNbaBifdbrE",
  "key22": "39RGHKnkYq8i3buCDMzsTtiUXiaSzs5X8qhYhjiARvA5eaiP6uMCK5oPnfnG9bvKNSLrTqbrKGACUVsY838LnmoP",
  "key23": "3HithoitztvasnMrppKhE6ecDqgQqZQjpPwhjfJhV6vVwdvhCzon2iNQQk6s4qCe7jdiZarZmkeQ3vMzz33GbJNL",
  "key24": "2wE96s4GRGJcm9RkPEdnRewsRUkQg3w3nbqJuDPRDEt9EyfrQS39acbk4BnMN4ePaeyhotNpe6sXdRkRGsrvBrdP",
  "key25": "3Vb8xbnuE13vJA1NmJsgYvcSCVr1u4ebzezVZgbJiNLxyZuFQodScVZdo69Qq4WGLF9S51iGHbmRUSxCFyFvH2FL",
  "key26": "4ZWt7w7ShMpbuZKRE74RFDNcWoiSNZMb9tCtjzn9BG4GEJhB98H1Y1JaM5Mc8Fe3unbSy2AgZdHsF4HjqWodh7T4",
  "key27": "2DBkXmCKkPEtmPJEw3hRgPzEFnDABm6YrSe9fCaLZGszVsNdH6sgyN18LHvgtt73mu36BH2DU1KdNvV9rk3d3EWS",
  "key28": "5hN8BWwFbuXwbSJaSp6wE9A441BS5QBxcaeJ9nN1JtWBP8sS2bTbA13RJwzvMhUd5z6a2zuysRT8hmxw1TaQMVbp",
  "key29": "4p4iqoxr9qF86WSf5erYhbxDincjdWx3GM3zbRAp3zWmSf4iBX3BQPs1Ko61HY9iiJtKEc58Ns9KHAzwXKSmG71X",
  "key30": "5KSHkT2MniFLSEuX4Z5LpZGnEo1vgRN15rUeYreyRyM116mXk2YsHBa97ngcBzMLrTLheuEYCKLZUCn1dmVW8Vjh"
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
