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
    "3J695WhxpyaD2bLZkggmQbxzfQRvAKebkoTqX5Z4vyLLgG2Sa8ajVorBLzdYXxtHGuE4zzYvGpbfQmzYCCt5kNQf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FbvtbQrWTghMtpX5fTjYoxcePmMXw4uyyNbwTD5uctvBJUdoDW54k6WpYCnXRk49UDhdAzpxsEDmu1sp2kG81Fo",
  "key1": "2o5Xmw5TH2zfrZ5ttkGkK5kzoxqwoEr87UD4ovUPh5TEHrarUgFVdEGZ3o3w2euSB9gdF5eQ7nUzh1Q6HEEnKQzx",
  "key2": "5HvvzvZfF1kJcxYoeJ5kCUhKXPE8JoHtVjKvMroWugenCf3nqCRGdmBryX3Cn2fdHBB1Li2NvupizQY9jtheVwxj",
  "key3": "46VYxoN8XCZHJ4bn1d2sh51nCULUeREmPoL6t3KzgyeNuFiFtgNurqwqa77hd34GbbJCBjLPGV4jud48hbQ9gcXd",
  "key4": "5xeYdS4KC5xK1tsoApT7KCgZxRGewvjwBzgY5oqNa93QU58bMXrFiQPMcEunm7HFyvso9aHxHVxom6WKTBfYS8v6",
  "key5": "4TbR7uXLkFc7KfWzABFBL8MssTA3odVUe9XcufR1DJLddPi8pZNJtN411Lr2m9tgtFSoUC1ezLxPe6PdSXwsgNPg",
  "key6": "UepTiJ8fTzUNTAYxmvKuStoS5dESwk7zgZuoH7ivvmWLGHoqiJ1FmfTXYSTCnoHUthuWB41mi4JzYzVwzcdD8Pv",
  "key7": "2mwwUk6TuhYmxRdVZVEET53NxCCkzS9qfoJt6BFPw4hWqhXMfQEvQNjXU2TRhxFeMhLf1Nd8HpA95AvFBBJbvysw",
  "key8": "4GRh9N4b6pKEukJQkP1pkgMa7WErCVV4GtRojFEPXwZ4xUks3m1vPGLUTyLT4T9Sda2Y9KKsVNZVPWxAXx5tGn2M",
  "key9": "28FGsLp4yY9nbNpU2Gq9sBUGHup3Hn6cUkfpQaQLBob4RHFvC2saUFTAVQJYRC5FZwV7vELDTsmBmGueekbPMyqS",
  "key10": "4XLSupobdyHWe6tCjkwKNzqGYjjqn9acbbA7F4mgWdPK8w8LMbyYVyhWajGyr8v6iFtXpLrrmRDtDUcwvAWLVqAA",
  "key11": "RPF9ffGTdtPsnNq2rEfm3dsyHX5bpt1N47VrmR7kjzngxtQhXeCUACxx7rm2FWB3PYTxU9Uvg6Q2s1KaX3mvD5B",
  "key12": "3noqunDGSY3JXGv7qDiAJK6KXECEZXt8cBFVsdMThWhzE5DqPq6D7gLsGGCL6kt2iYcP9RA1NWB8WdRBY5mxkFbC",
  "key13": "eK9Lv1mwgPUydg6Tksf9wjwNaC6JLHyMktXEoqJ2sNXQHWwQ8MS7VUr4psBnCsEnhnEdHh9SHfxPriLRrHm6hL5",
  "key14": "5q8FdN4WoqqXrj8vWxZzFGSjCRHVa8T1kPY79XMVy5oNx6apj5u8b4jnDet8bau8wh9aW9Le8GrJWF2i4QQoiASn",
  "key15": "4sPVifDBUdCBzDu49WEnskWdZJWcqgVUpDuFQSxo722bBJbdJ3XR7AMuY7MSVwcfjTBbjHUc7odqV8q1bo5cdiwg",
  "key16": "27LRujUgVDdoDie3NVw4taieEP1nfm7etQUkLMH1YQHaieiaG4spsmCPwfSHK3PV98C8UqWCn5FuonWoHPjktvRL",
  "key17": "bCSKLsWqq94o6qPq84fuGGfy8SxXpLFVmp95KY8ywhgCu1wdLx5657PeEjB8m2z6wVy82TYTjA7C6M6wHUiCHdb",
  "key18": "mjLJbHkMp3s48fQpMQv4yatmrVra2axJAQThgpcRH8cQ6jVjAqxX6kd2VXFncTXFLms1UaxVeiTaiwmt2ZThzJt",
  "key19": "21x3uPt58kbw9vwPPaz8uMUoTsAk8KFfbsde6e3wLbXbfNbQdetNThNKY8EBDMxFdHw4f6nzkM94Fb3AMmAKfoZM",
  "key20": "5ZZ6VzXv5WKCQyq7MtxwtbAug6NwyF1ZGkk75o5G85XtwadYnTQ3goYGFpbxoKRr4XBnqhcwp7ZLWbpVNw9k1ecA",
  "key21": "2U5rbrJ6Xfj3dETNjmgfkJ2HtdUbqKspbMv1Vxa8XEq1iTFofjNY6kJR3qswXkQAqfiacvYKnVsJekccM7gNPwDP",
  "key22": "63KT2AzYiUBRLXuCmMUWLDbZ9uu31ct16S87m6WzAAZYbsEaaSw5D2iQPTB3H6vuWNMqJctZbSiwAYB2M5FjrDNv",
  "key23": "28dPDEuVFMpsAoKxcNdy1jywH22oFNMsPk2EUAyVDX7Un43P2qksDpfUHJKUBZHfbtbq2uznocsAeHsCPBx6rsr4",
  "key24": "2rNeUmTun3wq2qhSK2pQN5FntbQPEWB4RKxjeapXoAHxKKJb8HqdYWRjZve9CXcEbVWjNjRCG4hZtU4LadPBvMaT",
  "key25": "4bKEB3xxnGXn3z9q1mawEPpDzqp5RejKN16mUz1Yda5uLmxeqzLSqa8F5pdUnKWhnpyyq4spfHkEevdvBWkTdLyE",
  "key26": "67caEexn6TAkai1Y45mXRULJRkzPinA1kWFA1wvf4cGhBczp4aQgGJsGeBq8J6qkqcfgM94Ry1C7Zd6V5EJp4Uoc",
  "key27": "2GaKY6E6PiUaW1S2ET9JvACYrcXZeYZQjxLkUQXRd655MjKV6DJ9S77exRzT3pH4g1VVrSaXsvF9Ra29AG4gZqyk",
  "key28": "4wQemTUJhMH25my3vw6zEJhS3MVZRqQ9BL5rWc2LiWvDFpex5AH13UeH4jMAYFGCMdhLpJdZbwGGxiMRVC1yjqVc"
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
