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
    "23R7D9R8Z5FnSdjRL1KDx5MovYiw3XdQqTJWohuspZ9Ec5vGGGjaunxrU5R8DVARv2byXHmD6HuWF5UPJH523rRw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54XVq9UjxDmJgiyA9T2V1KmkTYpoQDSVwo6SCN3cRDJietwQadatMzzm4Q2cUKDxJ5a9EHBoyEQcAvNpV9qSiGZt",
  "key1": "2LaZNECSNJfHQwyVdVjkyTU73AoJZ69Rt693X5r2eAAeqyExBsmKuNPK24zwLip7hWe9kPEm8gxu4CaUYStvwSWF",
  "key2": "26sL76cLKzDLwpCbgyX15vHZGnWEBpatWSQKYsciQwyvS51voPb1zePr1Sutn6RdWnQVvoRLqJbjBduvqVPJENgE",
  "key3": "3dDcZfcRNWz4iKuWvsobFGQAnPKWVPkgn1U3kkKNw2GXW9mqRFddMXfk8WD9rwYdV6BnFxGuyaBUeWyNCsrxmRc",
  "key4": "4GXf65cEQLB6xJGFKREFo7zQM8MPmQDTiAQEghkDsMu1tmhrQUdS7PxTnkukdAoTPBpS7Gnjm9N96Rh6VsDbaRUt",
  "key5": "5BNgoHUUnEDev1nZkBNoP8c8FYvSKH3nYgyz2tt1aHBEQqnmDH12KhV5LMiJacc6x6Yk1XMGA7H4HVjx1gQaCa1u",
  "key6": "n2LXaShdgRZ7XfRPjKnrYoLgHt36qFXRKgPQZTnvr6DnuECKzHFvv5APUR6yux3eBJeJsdKnvqYpEJBntRk5Kpy",
  "key7": "2UGJHNMxnA4Qdjqk6jgwNMZqwcEUiNjV8YJMeHC8JCBNwj7UZr47SKmrjvcRhJzppGh4TH143KG7v1xcYcE37E6P",
  "key8": "5xaCY3rWkL22JfVHuXvG3NsfWVJqCqZ6eq2vqzPw59CNaR6ZukHBTUiGisNmgQ1Uv5DpqiaCM1kL6ohoX9TJx72w",
  "key9": "4oo9uF3SMenDRrtHTpg1bat6sesTzYWvDSHPpn2rQPphgmriAbSHHbPEmhy1ZbDsagT86jVCuxiYscPaLBvXXA8r",
  "key10": "64ckQJbZNwdxxzVYGbtBbyBZm7qvufnNwPenaRhpaHrPTJdQnPC8K17iGLiefvuieEXMJm1fibqbSmyxJ9gPpLtr",
  "key11": "4kybdBAERE6D83pbin9WGrxbEf7iahQ3i5Qi2QCkL9ztTcy5DjCn1W3jtUVPAzapqoYw9BncR5j4KBnGxo31SXvR",
  "key12": "5vG4kux2S9paiXm1augs95UQavS8LFEjnJq5kndbeGueLhksG8T2HBoGqBWbFPTkL5F1hdb4K4c6MzuDPdadGJ5J",
  "key13": "2sJKrbYJmmQyZzDL8NbTxaT8Tb1v41BS7Mw81jHymDhEzpeuoLxdAuxesuJE5Lc78x1aeqkonqFYNEgusT1JKhdP",
  "key14": "38HxcziLYyPPMRB2oARZFQzF98kFuVRt4m9TMuCgjwXG27ttQthsMPTqSt8X5Lm37eJZr1umsEgd4syVAPwuaqYG",
  "key15": "3TMwBbWmTXmRrBCFw39f8udsu2t84MyRpjTxt1W2yRZ1dRJfdhvNe3EaANnEydsBGBxngh5YeGSHJJgrkNSVyrNL",
  "key16": "eqxUj9Agkg9fpQikxZGMwui8TREJ6md5QDeLeodt2iH6hh1jG64DfS4DsndZdomnGr1XpCCZaoNcQ41tGvMdoYT",
  "key17": "3MApjmB4ML9Yd6Z6FKSUYxxgjXZEdzVqj95W4vFQB6xCEFwS6ZvUREb81ctxQEysR6n4p8CYzLweAbZpnYYXukuJ",
  "key18": "4Mv1vngLyNzjHMrxqk2nwPv3mD7LzpuqSwanGUjQiYcJToeoF14QsUywZM5w2ZesVseFEqGhBmdsCZYW3dJatDX7",
  "key19": "3y8fVH89pc1xVz4pRSYWe75j84ChSvZzcUHyToDNq3onfL8yrBSbfvoyUgkKTii5mMuhTejuctFd4txozrAfArBc",
  "key20": "4H1sfHWgbPE5qvFLTE3ZuEvcPX9aSZAJaEbzW1A1HFahn3EroUqPvuSHxF4qPyWye8d9RtBmhU9h2BETJCSJKZjV",
  "key21": "2bCUZsWCfB1vTtZ6UprcEiDzsRTXaiLiufrZunGzn5ezNj8vLnMqpSC7TEbkJf7dv6EYyCmLVfj3SUm9pXiHVrfy",
  "key22": "4uoe9UMWQgMtkK2kJjwx2pGMP32qpaTxK7G6nFHY7iLP4m6YRy7CcDVSihAckhWKFYbSFswkhReMMx1bkoDjpE9a",
  "key23": "5QdVgzS4hdZtqJaRx48M4gJDKH49jFTGRNjGnWJjHMQPPyYP6xx9qU2ZGNhbkq4AAmFXjoqjqBi3uycnm99x9v1s",
  "key24": "4bsiVDn6ubmL1KRFj3vdBNSJVv4XcjtFzCBKjg59ad6nH2zyF8X82TRxDLJXEijZtu3UQPL6NSarXZdCezKehL5C",
  "key25": "ofX4G3hxy9j1JfezY6DX4m8qfH5W8wcQsrGVb5saCSrc2d2smcMpmRiHP79Ngwd3vdwkhJZyE5G1GpFNZZg2kNe"
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
