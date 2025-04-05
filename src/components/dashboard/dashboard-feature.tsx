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
    "2V9jg5Mz8Hnw54Bt4yJiJtgETvxttosFrJDzszbAf29JjrEJxxvbPgp8bKzwjCaLiLg8Y8b7UEY5LNVmvpwc4mw7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rKrBPHtnoqE1M24Jt2iG9uZxNcNLfrHhAwTMbqquNWQLwLSNLMwtZUGX9XLCttjnrWqeKD6HfXVv1rancaS4bDt",
  "key1": "3xkuNveAuXrNgcHHqGsnKFxzcvyjjFBYNEW85nCPzKdRhwJRDmfKivj7v33QspGDcd5jUZVkbN8ZVQXvwbCxpRzQ",
  "key2": "128dJWcKSeD1j1i8cEzkar4mcfDXCLXdiuqFGfsT14wxJKeZkgVZ3bq3gcLJfyjFBmzo72ipEFrNPttM7Rut6BBp",
  "key3": "3iSpLdqAyGtLW1qUVcPAGhRS8HAw4mdtfi21rrUfdn4D81tFZvNb8NNBhTzLxHYhGfgudznNMczSJAf3segfX8dx",
  "key4": "4VvjvcRKTHfphFst4VDweCU6K12JLnzkZWz2sEySFyqXCX94aGSpmSiKhL6zTvUGT8ehvJVmm12TB3KMjsR17edy",
  "key5": "FcQ4H7HBdyrrmxKgKgbeTBaLrJzP75nnERTqZXn2Wg8Z6rr8BXPA7XaHZdW9yAMdiUxNUBobVe6adTNwSRq7NWm",
  "key6": "4YnyaieFrAcNTNkePumvgHPBP26wB3myXtUuBDjnEMFfkrYJWoAVomZVnC2df2ihEtqBNXhvZYqRhFirHmomShHX",
  "key7": "3WP7L4HtaTDFeMX2ypHP66oN7fF1xw7CPgkyPG9Ly4Sh3Pkwzu6hzqiUY5HicM3LimpcK6zWM6vfaqwAgED7aZ2f",
  "key8": "W6CfDtEWXkWTusWRMr6LSegXxs7gVQrwnuXgLStZD8hSe9Lh2F68SLK7hKNVwYbLCFivrgoW6vHRsqtxkYBrkLT",
  "key9": "E8HDx8Kt3chZoiLnM32q8vyDKY1uZQaPaKQHKjupAtoc78k7wp8tqtfvAqqpy5rumWTaRVHmLPexoxXqsFB58x2",
  "key10": "54dADnEL3fWh8c91Pkcr8FhbJ5wLNXNo7fzRsxaq37x5hYkqfE9GrN2TyG1Grbm1pRa1S5zmb7oQmz7JsYSySKRo",
  "key11": "3KXbq74KfG61aBnzCr3g9pQ1FQy6pgsmP53C56dD2ZYSMUD3wfqhdSCueCBNn22BVKPgHjtVDeMzrTFnx41NiU6E",
  "key12": "3o42Z4YMchxjpbdaBdsUjAFY9CJcgiRLBBeH1LKAcjuxEtDiWtorCRQiWmRiJdF9G44v9BD2x6B56WS3M6S5evc",
  "key13": "pUGT1jbtnooasPphyzBdNEX9DM1gPYfCFoWxJvFnmQSj6PWTAy4hnjsFEvPrRUS1T3DDLu9C8edTE9mTqnxCvJV",
  "key14": "3PcML9UG89TtB3c3tU1zTmobc9Kp36GnSfufB19kwxssH7D6mQvcb59r5qCNrYfTvWS1vPkptktuPD45ctp4qQYy",
  "key15": "2rAuwBam5jdx3EMfJ9uviVi9RVJ2zudugy8FPysk3vBr7pxdLvGLP4uEqNweyVxmNzgk7VdVy9VttxNiJJYrfdMy",
  "key16": "4zRmkTHnLuCBp4jVwuX6PrpGxFKmb9SuYKn2i7W66nCvrDiU6ks2cCFEixmQitzJNL2WkRt1wJfAA8CXkeaCYEpu",
  "key17": "5zofrkxJBEKPhLuyEZ75ZQeWAjhT5Z42hwt6zbcv7jGgwqXELhpcZvJ3h5a2LipucG5iv1vNMGdHBCuwe3pH5XSP",
  "key18": "5SnGCxiEpZV5xGjrLDdUmwcTM9metGGjLPCeDc8kbtvknFMM6XY7CkKvHpy5PxkQ46T6oUb3QFCk8inAxinbcX1p",
  "key19": "27K6rxqBMRdVvojgUG6CgrXy31njFfKFMjAn6iYuRnCKkLFKs2x5qXUSZD13NBwhNRrcCdN1S1yD4eTW2Y4C3xQ9",
  "key20": "2B5fde8fdKJdHVA4wkm1jAKHsAMB7Ymqtd2uUW7sFmThg6tXvrxogD4sL6SVVWgvi63DSqoq2LveKJiGUwxt6v5L",
  "key21": "4rgncTtaBuyesednt8gBbTRYTFRkbvwCNPMHPjc2mPGd7E4KWdzgZBEH1S5QtfsTpyzrWz1rNpbya65uUpM5bTRE",
  "key22": "3VJW7anKdVa4FhE4iZibKiksFJSKBoReRk5R6BKMEYBrenyMXRVesP2Q8Qz1JceYM2kgkoKNTdBERqdbYVZsUq9f",
  "key23": "4sfgb5NDo4sAuSu2BiFuftRWLg9Khstnha9zmBFACytHVxwBDRrByv2zBi5fXiXTB8Bu9DWDixHkUE43uGA7NA6N",
  "key24": "4qFLEuwNNWK1YF1zR6iaeiVWtLeLZY4D36MwNm7Ctfuh7Um6WZoext2CCZveLDJvhAywVhmWRf7UcGQn7b8msqXL",
  "key25": "5QGW9xJiqNNmxoXGy8qSDocTfzbRmR8D95nnW9eT5DtZPBtxnKoyd1uQLeqCUX3TkLuqDop61UcUbHu39SrH2kVN",
  "key26": "2GHe9CqBck9tKjXL5T7opFRbpSwPjSxcfLEgKTv68kRjvnadHiNBHT6pSyhbMwXyK9MRSDZNFPGcG6WAw39Acif1",
  "key27": "fU1HcAwBva8JKbCi7BX8c3Uf3TG9MKdudKi8JwwFZxNsDchugoWqbWH6UaFQUXCfyKq4AaJZ3PmgFLANVgbYZXb",
  "key28": "MUWNjmAgyp2xeXrSwBJvZSRqC5hx41EDiTzzk23xcCWwvoioXJb38n9AFmSbTXcNWhW3RaZ9VxBJnfmCQViLKGj",
  "key29": "5hCZ3wJhFsCaAPtX2mSizJcpCxkTZhnJP8D1V2TEBstGzfcytM1bnd7JQPxszCRUpPejwyTS5oTGisrPhW5SvMZP",
  "key30": "4ZubUkdqkRgjXrQ8eSCMXs1kouq16JXaXXMngFRtHsSaY7JGaUPYLr2q8AcZFV7aLCyEHrZcwA2uKxybpxeZEmLL",
  "key31": "YcRDt42XaJZi4vgy9PaopV6acSmsfbiupc81LYDkavRucdzFpygeoCbiDFgQNan3ZiMgoUXfXPA6xwZ5YUgHbxF"
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
