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
    "5h3FVCvV1Wkj9nMtRfPk5S8wtBurjueCYhRqyNfRMDFv6WqPDEGaADjjwAkHC9vVrS7t8wAretgvijGBGwBpN8vj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5anvM21g7yhhS7JoJD2wP65gLGrwQHv2xrGZrbW4m7CeAzoLQxJaStKeBSAV5BDHkgqd6hDYGbgjHywU2DTcnoUL",
  "key1": "5oDwDhRpnjPwN1nVUaVRqKuyxZgtvK2XJAbhzypG137WRNghpF1AczcEY9vpG8meEBsqyiBo3fywr1mvSYGBT5Ya",
  "key2": "3WAdArjpD5tUQ192UWDBKw1Bjc2tsBNbkHTypmiW5HpWZTRfn2zZ5o9F5Fo6ZZRijWHKX1UW1oh8fbjKj8unhh7X",
  "key3": "5Z52pt2X3WB9kAjoVc8siM9cYQmov71ceJsw9WwDSkUPNqnJXrXZXzddpbDytvEo3ZkWmytycGx5S2GnA4FRqCg6",
  "key4": "31mKQB115vuhzPZZ81ZYGdjdBqYPtHKaFWiLh5tmufqoQp8vViZqH1Bv1rdommXEqbidooxKZgYYSYuUNTDH3zxp",
  "key5": "CpdH7dgYuuq9fhpKMRkNxUfd8udEUmvFNPkBATvWsZLU8WbfyQS7SbC32aZpoySFnxHdXb4L8wgLK43zuW6doYH",
  "key6": "4B9FGjkVooCqEATwSCQ6i8fjTGCoPoy7c7DTyJHMHEqD5Jt2V1Wb1wMMgZPmV7RrWhquwqARihJUmxazCJBSzP4R",
  "key7": "4V5G4Kwopc6nkmJfVr6Q7hZ4twi8N6fN8P9JKhk6xTYG1bovSqqn68DRcojyrLhXBKNrgkHi4Sm1R4eZwYWbEAwr",
  "key8": "5vAsTsH9Gu5byqK1EgfHZHxKeGobmnGvQzFVhquQu7Vo5ppcFsve3axSsLVKwrJga5VF1317SPoc49MoMRfYQFaL",
  "key9": "29NKZquAKXwxN52ZTZyEMBpcSDoHTxFHKqB4FY5QG4q9RYhkodw2B1nUVz4SfL7iXUcvGDBgpZuy18aVx7DdjqxF",
  "key10": "G5hQiXJK3s7ExFwX62vpTTdsoMoxYEywMtU8ku25QCb1chet1jJNpd77pTSu9G8D2e866FVrdTCnZcWGYz3WGRg",
  "key11": "3SnmLG7P7ouMBJuBN9HP2xmDLqS8UUNrcTFb5b6oGLVfXBjDxem6n7MkPuhrsMqBJg4erFV2uAtfRm8q6vDz5j4e",
  "key12": "CTSZAVSqxXPcRCquAiQa4Lr18Xec2Vy6v29MQ67cNSjBUP1b6zWzca7eFq3NiVaj1XwvSRntXaz5aJjnQA2HbAj",
  "key13": "33jt8mSgapp5wr8RtMyPaZQP8ipunryxmiHdS77BzEmqgvqya8M3W1y7ZSMgCqQmVfpMJQe5u12uqEddKzRUgtwU",
  "key14": "mRFQhVpFM9y3Nrh4QTEniGz5etYgGZzEaVNPqRj7iWmudXnE75LVfg2P2d4qri5evagABWtqseFQ1vGbVgeXVTx",
  "key15": "4e4ftTPLn5asVeoxP91dg73BLfR4qH4bbBhRiNSLJVtvkWQsL5tSLLm5xKte7eqZsfVmAgwwnUmTymPwT2mLPV8T",
  "key16": "5pWiDKBxu3mHQCJtwcwd9J7LXM4q9j5iyBwheAwiQMRyatEHMJedQxwqQjgHdUikAmpPPsQirfmX59Dg8xqz2ryD",
  "key17": "5JbqNjjw23XQUnjEYWEY8UZQN9ePRucApPKdm8JKdgXTHQXwnemuakGmkaxLdjL7pYdQHYdMgasPvmir8SpY11zW",
  "key18": "32iFHFvNztKkfimHkJfpjXrpqGRP8bftrNYSR2rDQBnMEQE8BG7Uu3V9UjPfASg12akj4bgQutvc1CTwk4Nn98jQ",
  "key19": "43NpjUuh9tQkmGtxLRQC9toVkErZWAHkQgYvvsHHDcec4ArXP917toEffwESo8PxsrL7PmoKPwFCECS5gBiYpswC",
  "key20": "51KwwdgN7x2YBEf8yHV6PqxoZUYrVzoXDskRKGCsXdtPNwasfo4HvBt4XpqN8EAEMYVU6nUUjaznRJs8QaEKYivG",
  "key21": "2TixkwQkfmkirA1JPXY3ixg211MnbfuMkZXrH5XsWjTPCMn1ncQJgBfGwe4H5bFESJ9eW3sSoswnHznY3FPybFZy",
  "key22": "21vaDbGaVKf516fW66MeynRydqbMdeQ59ZT9S2D4osRUJh5JnwtJLvyeLkpq5Xt9xzQpt6M5YGZswwvK161tv1k6",
  "key23": "4zChBSTFj79QMzjoCEtF24Nr33dYcedCdZKjkH7ovo1w39ffSsr2dXb3fb3DbCt6HRcRJhLqHEkQerW1dddraSaw",
  "key24": "51TE7bGfKJ8QZm72gDv2pNq6FjEpSxxbrfKAx6M1e9HpiFWJoFTRguNRhCH5U5aoMyYM8DsPdMnDzMHTcrPcNT12",
  "key25": "2QAJyS1dEmeDvnNphu6GkwrSeyF6ueHG4cHbuGoQUjkcibNvAdZPCXmW4GFyTEPGSabW7LX3cDsnJ5X4DvQz42FD",
  "key26": "4EPe2wE2AyQeveGsF2wzR2MkPXQ8anwTq3qLGnEwj9FG9KbJQe5Dd3tyF4S85QGP8VEHBs9Rk9TH5Q3humSyUnFP",
  "key27": "2MTcqiEtiKVJWqtEmXMe79LNVD2UKur37e5kPgq1DQAbKZq2FnX7LxDkaqvVkWjUuhHE6jfMirtEk4piMwT3KXcM",
  "key28": "4CpCeoP471Dtu2rQvuvZDTf7uKBZfKvDuQkREzaTcxACwfKJ3WhMW9yLbF5vPwPfLMtdXHJNPQaXrxYgm6ZTA83P",
  "key29": "5NNTm2EHwhfWKTrwZeCcvtAJEqvYCvuVSA3tBaGiRhSRGqFM2ryqF6hRshtUged3b16aZVwSoBhSfNKuMvoxQWt3",
  "key30": "5kX23qhV18zw13En9nykjN8JEqH4oZetcKtZzAREE9YWW39zQCUcpCqnsGGgEtfQu3qG7EnPFZQLovdx38PWysm1",
  "key31": "2UHkUFxCWcW9Lh1r9KqTZCuELKTF8MbxMZQCesgBHXUQvHdvrux5Q5Wf5iDF64EKcKbmcUpBWQ4idVtevqVNL2UL",
  "key32": "3i6gtRVk8Xz95z2LjUgqmKNuycf2N8TqaS1E33otPDdi3uQce7rL2GJR4zDLtzEoWMg6z5HxqB7QwR7DR5N7Lstv",
  "key33": "2M3csdtm9reWnX4jG1S512TbKb4CbyhjvZRfj2SVZDXnFZ54gfmvK6LgcKuiCVVrMwVwpw8zFHTZHDitvtasDAU5",
  "key34": "3KmujaDVHGzMzE5PEx5bMdAKsjiVY6xoM3Kry6FJZ5nkYcpFJwXqrNEwwwVpjP5WJHQ1GgSdGcTbrzaCpLvq4fAK",
  "key35": "4JaJRKKvribCB1DtFMp7KgVNrUNJgJ2MtKUvUhdnoXiz9sWpbZ3nwNygjHLkrZq3z8pRbyGArKebMwvtuecm36R3",
  "key36": "52eHzKbWrCvJxYWDZByRSa1CmLKvXaZB2Wu9zpkDzZefwzDopSdmqSyofSjdZtz598sESD3oo3u2RWos7XMt9cFE",
  "key37": "44R3dRChLoyqcgQcw3fanCPrTMHRcahSFdnuR2fxr95wyqAvVXJix58F37CXdmbBfvWtmFuH61QzWF73QKSbsKVX"
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
