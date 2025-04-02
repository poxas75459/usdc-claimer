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
    "2dRqQtdaevnPT9Rs6711EoWRYG6NrBbYv8cLtCywNWBWFVnxfFu1B4wk3s4L5hM6LUASTGiD7qgXMjqv1JqnUufk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XYNdhcaG9PCtDiurTvozbyqeiijfR8YqurHvVnVHi9CNB3wM4kc4s9oK555GGkzzbqXvoQQHQ8tXz9uMToAbTZi",
  "key1": "5EaKurpQisjfsXjHvYGjtzRzdTcS4eFyMqca5PFbhZdaRPnguRpv8dQxUYgjpjWcu1DFFxbgrAxpUtEzumL9qBco",
  "key2": "25Xa27hmhSgnbBhiPQBxvytMwDHv9qmyxbSH1qCTZTByDZEcYocmHWuxCRLfa6i4xt4JtdyHUtdfXW3ubjUCvzx9",
  "key3": "4DcCdvvoLYqK9mnLSoSzQvw5yeAvpYDTMam5Y9KHZDDTzKTE7fdomqoxVRXtxjfmWEorzn5zXfH7r8HV6QWUUH72",
  "key4": "NJWmr7uecw8ngvJVw7tYrXye35qvMoqUCagfMV9MzuW2fXbd2oK1GppQWVD2Vucqyve8Vm8dBSK9AnjuAnF7axq",
  "key5": "2iTEvT3Xxw3q788VCe9L5kDN41E6kPAVjNUtgQQTHc1uFHeqDem2STSzPJc17ni1opxGWyDt3ft2RY128kWTxKXM",
  "key6": "2rJKvLXdYeUBx3Gpg1BUBHT96gT5tEeVRQuvwFx1NdQhYWtKEQWUrMVTuYN7ytSwzde6LxgEtaS6nbZbSBxnqCiR",
  "key7": "44Hwv5xioKUjLDuQYH47sT4EYfdipzpHDMGBHSfmpQd19e4B6op19qoftgScjo7cAzPZDFSe8nvi9Mz9QXxX6cxT",
  "key8": "5BedccidmndjgAzgcVzdsEXoB5wLatQzQ2poSuVv87K1tP4vT8YSk1n7Tpr1SZrwFp6ojiFUqzoCiZ5BzVXLWxxf",
  "key9": "45qpAA5277TqjgfiRsfEk3inoMgBYZG1MVPSwEDcUSie5FLHH35Gv2EsGRcmHpoQgtTma8HsbRuYFRoeZYxAcL2h",
  "key10": "5rdF5vx3iSAicHLW8uaVFfRaiWQYtbw1DwRwxSvNEh3LnNgfVuWrfjMTwwSAGGhQgyjB1zFQwpJg2tjyfmpGbgfU",
  "key11": "53a4U85hNuHQWugruafoP9gRZFGWYnVobqqBtC9vr1MipprviuvPav3D2jM8UcMaajhWb6cEZjdhmBaiJLLNkBBj",
  "key12": "XUiuq5pdzcAHszxDdQwH9RswvBakVcdgBTFySCtNWE1VbMqPCBrZwA5kD73hxQo8A5GfLeMuBvbPnMJY7bQCePx",
  "key13": "ynynJtg1DsQNmQg4tqEM8JicntGVDuPDkFzQ1y8UN52c4awP8z6duY6Wj6iGLSp4CzLu1SKdKxGHznqFpKFRpTc",
  "key14": "2ARbuqeuKQ8bRhhEfmKPaTarqd6bDkC8JCvNExMgWHQ48nDamd9tGMCrtFWgQhmcsrFhGPU2ufQeKJmULDvZ6QVk",
  "key15": "2trb8qvxx8L3H3YNri1pHwzhJx634fc29dLsmv1joRPgWKUgojdA8VZjNUHEJDetjV1r2BDkGCWSh2Y3xMaXi8nT",
  "key16": "4BcYUqpEziuxSpooyz6PjspMwCfyBmmu9fXL8w5AqHsQf47HH4dGsFiGAXWi5Xa1vknj7MyMGgSnr9rqwTueJpsg",
  "key17": "LbGcJPFMnVUfBgmKmRjRvVCWzCZzj6nm9qkN7DuybqDBia1vY6iY9e8LvTEVuGj8N1JS4MomzVgUB1wp7gV9S8F",
  "key18": "2XCFumJo2SHswcCdfXQ1Q72xdfg2y48PMXwq1ndk3aCyRt6z3deFUpKKHEzb5x9gAhhKUgZN2N1i8wz1D9mAjQF1",
  "key19": "5RKLmuTfL8ZAXcVJNDMVNBNPXuiQHX22W54Wzxk1DFnBdUvv3tWMZhwwS9Po3HkHjaL6dPfSWfoDWGFBECppXQ7U",
  "key20": "55S8MrDf4DPFtoYvXvZ2tQmuGHKjKuhct197mHGZHszvKSi7dVmsrPGddqPi5nmHkKPbbZobzR51Xxiefh42C3X",
  "key21": "4qCggAWKThyFKEb27k5qkT1UGGNkPSUvuK92fbrcp19PZHhbQXsmbjUvPddXSy8BpVqUXFgC9VbQgckmDDdKiZaK",
  "key22": "e2K5TAu8ZLuCaisMBe5Pxt5Te5HXNnwQFAFZEDsVuqc5UK1SBubub15wf2fYyQMqZRB7BQF64KkBYXaWYUWgVRm",
  "key23": "4rjGSnVFXMi1MoWCJnStWB5j9s8MPQFKC1bjUDB14Nut2nXTA9dm1hESEpjJWLXborKsA9wMncfvdZAYFzH96Y4G",
  "key24": "2fuUCsLpcttv7gepVChU92tNiBagUc3sqTbWkw2R66AJmqcVwMAYKxgAjq3aZ6yS2oPhu9AGbYLjgViW9sgehgxA",
  "key25": "373WS9AuQ2WGyp7etG5uvzDUCksCagY5Ews8rW2QJgXkk9ZnrqJ2hGhC67VBsoNf2NHBsxR18845tJUYY8eQccDd",
  "key26": "LT6NeNCxnpFZrEfubXmgZY1o9mMeARfdZ3B9JszDrKBuXVT35A5TybY74Fpm36jrBwJKVqaULXyveaRgX9vDkf8",
  "key27": "4ZMEo8nCZZBov4FHkbQdHJsenaKndmvN4tt1hg1jbMd1GS5bhxdKoDYa1nE4qPme1iDPsPMdHpi3FoqeWJEqcyYL",
  "key28": "4hF3aAntGoLA5tfNHdKYrwmwHTHC6aaX5SoCbeX8cQZ5Esn5UsB2Wwh5wrcg1vYmnnaDix9hyQg69KC3YCp6bmbA",
  "key29": "4aW8hMWPbhEXtLkoB38Ggw3zRuxXAS42JjtEY4wZ1UDmxgGK5LqenMWsvGdcLjPrcPyy2hjcLRDz3PE9VomFTwrf"
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
