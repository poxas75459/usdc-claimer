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
    "4SJrz4fTEAo3GdS5siZFiAkpZASLxNy2dgNn2MXAMpameEtvDoQqs6u6UMCfudryBpnLYtQDtdJz9Ev2asYhJMXZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CX5SzJNWMgQQLLYzGHL8JtSGwwvAniejSeVqBgY3vuuFXfAaUxV7MBt5DCyFTzoKPyJmaCouvXpHr5gqkKhFzb4",
  "key1": "4Zy99b5jxfc47AkTswhAvkVevBjDd47Rg8LMqyrpgvNfYNrkvH3Pym7tExuymx1fj52PFJ3JAbY54esQwyUpfQAu",
  "key2": "62uSC6aSjL8qp9isMk2W4yvv7WH6dWffT4bDyM4EDVakBjM8WcrT7yEYbpJFPtHXU1vB8EtT5VwcSJCZxSMHjbR9",
  "key3": "53P6bMCVRGYzqNfD9iw7Wfp2jhJjtRGTxzhFZGAQ7oPoNE62XRPLU6sv7xfbVRT73sBogsT4KhnShqu6iFShRPi8",
  "key4": "49Xp38sNbCiKuCdoWDopHEjoxfTUELMbYCeoev23PxGFUnpvV2p5DnD997FQKKY1gnTpYeRx111tNv3e1vw6LkHt",
  "key5": "4EtqUwotUKY5kSMNVkFYe3omGo8Ewdqp8TvRhd1ceptrWHL1x8XvFekfUcUhVS7v7V2Q7KuXLCU8esQphW9jSRpH",
  "key6": "388wXFAGaWBNmzQGfCEc2yfAdzGXwQUciGV9VNhithFdrNUpkAuNUM33R4fzJgMW13JdSs5rzqZDdpYMHfeYVVC5",
  "key7": "2tyTatKkRrBz3VvZbzSWcNEkjQzbWEmKP7HfWiSwAwkYrQdiKVuKvVQ99QBi72RtW5rBNC9MkjzqHjBYeqMJLuDy",
  "key8": "4cDjjm1vqsNRG1tWog45G1kvSZSdXYM6VwMVzEDpgmcYpFiLdYL6b2aVG9gR55YYSXqhXSU8Ha3593WrhUJ39oXc",
  "key9": "4r4yro3ki7hZMXnCz2FZYKc5DsC3Z2JBDpsqh3675gohLSYL8xuLZ8t8ky8jDNoLWAB5hGJePNqCjpqm62U5XA1E",
  "key10": "4iw6UsfwDhQhd9wSPndtYZehqp834kq34UxcB7MbSQJX6CW9jVhA4PFQ76Lky48CwWPRhD7C2DB1EcSkuHiiwATV",
  "key11": "4XZtDh6BD4p2WaDmwJhm4By42hJKfQ68wiAqCsyvARAU7HN7hP5sagbJm2TQKC8qifSYhomozc4vSsLDZgHEwxjB",
  "key12": "5215z7FBoBSLNvufoyBoe7grNLFsCgHj6Ntzn5NZegXXpprAMgfDP8YNYwAiCEC1dSHvEkW3era6W9pUgnj6Ujoy",
  "key13": "2tJA3CzZeYxvubYgyHz945CfE91TABFeAkp7JmXJy9iuqMZQJgmfELXQ4erGEwbDEQNtHJAcmrZLpm9bjrDdmf8L",
  "key14": "47gFhrzo4yYKoSSyxAMiC78VJYot1iCGPSFppNFSSqwvG6pdXn6oBpU3quvP6TAp5UBgKFbgLRgkrgmdrBi4XCyY",
  "key15": "5tC228x9bGb3RUsoCt2DTZZDYoS9iFWVPyLBfyHVKsGi93cYNteEYnyB6GFqkUaqNx478oCb8mYybqxELhU6cUGw",
  "key16": "4ieGBWYYtJ1pkPAsQ7yfwkUhYRVFYgMdiGPD99ETBTfL9zuq3ieSgeSy3VSogDA5REMU3Qi27P1a91wHjyg7yxQz",
  "key17": "4RZzc4vBjVy1vuGzfTdHs9crR31JGTSxLWEg9PZDvjfakNmZosvUE3p8a4WheY7NGkZpgZRjcZbPxqm5KeJpeR3A",
  "key18": "4GgcHKg11651NCgEMqQqkLQxevozpGQPfJ1HRwF5dT28KKv1QLBxv64svpxUxLZYDLTHxcxnnpQskLZJ7kvsoVan",
  "key19": "2KTcNEWixYWrDTKNeEgym7GFgEqveQ3pR2w9TGTvoiSRRBMTfpwYkCriijvU7jfsbBUJSPmPwd1xvpAtmY2DpKRq",
  "key20": "5uZ2X3cyzLSSjiYxmdqoxNjB9P1zXxwnRfNvqLgpSFgJbaaJgx61Db5FJxpqGrwKzDsxc1fJxEakT6Vv8QKm5hGc",
  "key21": "4ei6zmwSzMudkT79pkZPwLiX3L8QVG4Y3uGmmwe7Mysi2xEj46Gp6jKFzkmQnksRG2BpHU4HNwJDn1zDnEoHCJCj",
  "key22": "53H8PtQvgvC8xbf6jH1vTLkK88zNBaGM2nGeXdiajDKuiiFnLsfmGMhfT9CKbtq6uMHbxkndJ7Jov5G6wXFFJ2rr",
  "key23": "2LyfuzNRG4g4H91HAmdaswMcEMVUxJ82SjJZbZRdv7tYmgKex9Gfrcxqf72ttqZydLmMkMKMbu7XCB3A2qgu1VWS",
  "key24": "5efd53rwsQc1UNoraCRuo5HC38prgSVdwMdaShTRvW6DQ7gWyeUJ2X4DSrTnjrkxAWt8n8NSsqB2eQgfjiLgs3Cx",
  "key25": "4gixBSaye3gP1bonmNdsZfJQpGr6FRLUwMxiT1NNfxuxvJdDokc2UFcUGPR21Yzz2L93XfbtT1H9XHzmQPHyu17S",
  "key26": "46xmmoihdCFR8QFWKEQ6aYkBVba3T8wRegG8qQdAUxae9bukmi9CLgMmVn3omTzSA32hrHxaKT8htijULjw9TaRy",
  "key27": "EbSJqeP8sZeDzfMXGECQafpoqS2pfyS2s1sADCghutgZ5fv1xM5yqywoEBuBM8mGmB7vtQyVbLVXSeQ4Q8M8kLQ",
  "key28": "3ECQacpxPDvm5nao3R8EBAy66PeZst8rrzTizXth3SbnGWMV4xuywAqptyig323q5peV4nqY1Zy2Z91YErxAYvya",
  "key29": "4F3Td4r1YbGLVCTY5CRaDwj7PaiWUwBCEmHcLvDnffC74QBHyvVVu8mns2J2Lm9scuThnNpYuUZntFPimxfaBsHg",
  "key30": "2MGKkj9ieYVUgU3HAaBKzxc1DTaGTTcSeYPWtbtSSWCXyi3AGmMMsvVM54b2N8kUnLAM4mvH5vV6woexmfswKpB7",
  "key31": "5VC3QaaHqL3at6q33966xeajaBJpP7ugRjVaTttNRxV6gTdW8aN6n6ZgEmLr36v1TiCD6Qmc3afdeb7uSq4kofEu"
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
