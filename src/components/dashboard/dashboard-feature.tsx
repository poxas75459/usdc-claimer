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
    "3jJV8FuWWGKyu3561vAiykgzzGChEEoJEh1ei7gYQBukc87h6c2yscC1abi6GNu69RpfzqF3cB84CjnFtynj7yV8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jDMcHd2y5cmQ2xW6UcHugYCgTRmeWdevSHhruZA6fAPsYqtwwMfFAtzXCxXHpsZEuUVi9JqgBGGt4aakqww5pyA",
  "key1": "3TRbMibbLGV2ZtbYvVMnL9JEWZ9iEjMrMn2CozNBxCGam4rPxYq7iqaJAaRzv8N9w2sMKUCU6zVrHDvS2YEU8oU4",
  "key2": "646pKtzxS2nnun6FAoCgRZbePNmd1oK6n3LVfAyawYDJ4zcMtYiCMiQM9PFKA33fL157MzZpJhNACfcowaFk2j3o",
  "key3": "5vzheXiLuyrtaacwmTaskzUrH2KieSmMZrurbVf7m9HgwT1xcD4s1fp1YNbw2W42SuRqHvqPaAeHfy7NAgtiE7tr",
  "key4": "2g1g7y9oJrfcZBzwT2C2hr3HoMwfivX8XJ9LR5NYTqCYDztiwXiYW8f8weiXmBmLxHQNHdL4FjTpBExND36uKCUr",
  "key5": "aA9zAX5yuGWDcAknxUBFPruUdP2AhDSJqLQFYDxVXYdr5tGFn7GB2Eud9U4LKFY7UKCVxHYmRGYfzHaycKpz3tL",
  "key6": "4nTPesWTLiywJb2BXrU4Mm72SZ5Nvy4oXShNhW7gGYCN1VTmHUoG3TAekuASRoefjLsqzAMuChB6anPqMfSpQX5X",
  "key7": "2WDQDoJXRrskUKYBHgK26HA6DbkV3uLakZHbxiDe9HGSLubmgVNA1hAtK7NekbCQzJQrxJhAs1F4WqmMr9v5atLu",
  "key8": "2hkRxFJNPitDDojT8VGZHhbqhYGpEppryB3YjFLQd1rcMzDNZ8YxpmEWC3Xfy439ZJ1d59RqsCiashj2SqtLAoh1",
  "key9": "2AtWwK3qkCHHSHGEWtGAqvJp9WKvKcRzdWZ3pJEeKW4iGzUyDL2cCZh3PQBbJfrdbgVdKYxGFDBXKZgwjMHZoTce",
  "key10": "3aYyuooHaLGJyro4qb7CFM6HBDrqYHhRgCExp6pz6rPtoV5iWHQ4gEC6J7jzawh5oG3xUaSpK8MHUg1DWRMivgju",
  "key11": "5jQK2CdT5G3gGKZgYLNcSeWwtnrYGNknKCVEaeC17EXqpVmRG7NuRvRda6EBURCCNHkNcyRuUp4RHVXADJYxGGS2",
  "key12": "5SwT2t2PT7yxvJnBRxPifyoRYXe5BNzp2Jj5JhXE3dRkWok1UajKBb3hBaDpjQDRA3QnCqyckE9poiVGPCojg6Bp",
  "key13": "4Dxw5tVsckVwDPgbBHMwH4STcNmWHXfhaHzrpcL1UbkCNaQNCQse1MWGkscpc5yAPtFgs6oEx6NCn4wRHr4iDH48",
  "key14": "2FAQbyeYDctHQgr3Dx4A43awyfNcy76b3BX6r4zJFsHhvZK5TktnbjXcetaY87odMzYUu5YtRbteiHhKG3Bgnosx",
  "key15": "2NcWP3vc9mZyHNbprTR95hSGEbAd9ooNCLsQKCcDEwUduioXhcbZx2c2eTJNYQNZRSMwuCeiDzSkASMyvcbo6c6C",
  "key16": "564iJVSii2eWddzU6Eiim7LAjr61ppb7xukifq9rC1k3h9eLCtLyD5jkqUwp6TFcwZCMHpNdqK3MmnPFMkmHazYs",
  "key17": "41nkB8hKNEoyU9vSpeXLkemq5p3nwAn6RZ22TCAiDP63M6PZEKsxnN1ahjjdfs5ssWg3uRhgZ3THLFaYo8EQrYDG",
  "key18": "fu6VwGCeZs5vFQhH5ZEoz3vp2DyPfRBWdN24D3FCuiV2kbKCX3r64rSbsuFsw69vWYrBt58FWx8KQcgEpC9QzSG",
  "key19": "4QmAeeVsb8fj76cD785zt4V7WZYhtoVuHShhpat65oG1qXqcwU1eixHqcs2zSP4gLhVFB3WEkp4symEqyjzfxyrk",
  "key20": "2RzAUf9z64ZkYShBfVxKL7ChEty58cm8dusibJ9SCm24KHuqsWx6N9h6CbbEohDLkmkViCNeH9GcGJiAQuzKW7X9",
  "key21": "53xkGFAmpaLbmQFqkEsvMiW7seD3GfUo5hWqpGbVpjPDCPhJoF6kWazrdppFwvkfw1qKikq5TKyeggkRotLKW45Y",
  "key22": "3C3h8PEBnSYPKG91e2sE1ceJnFLLc8ZoKtrfDkMSJf4zFU4uKowgq19g1MC3CxuNoJFJQjsYrqSCzfVSoAxSxJcN",
  "key23": "2NjvfWQqDKaZtyRmEAJz2wfqmQVzqXueqbWDusPj74fEb2mWVLK9zU2e4pXwpnhEe8Nut6Zuy4vjFxEdzLDDaXpJ",
  "key24": "2ne2JqmLMNDDXCYCHmLRRUichUia4fHkXNwZBgf59ey35Gz16tLSb7NEteGm38JfNTqSnjGC8QXs4YuxENvips7K",
  "key25": "27EG3Ws46kP6cJgpAQEkhq1VauS1GF4WUDpYArP7RWeoVads8pUfMfpPjAzErdFNkLYB5z96ENCR7VEpJJW5HytG",
  "key26": "4SiKAFbhszFj393DPanXUMRvxjKpGWSaCAZi5mPFQbeiZxHfWgAPiWcrew9BFQRCuNBykMfqC7qjQbykRnx4zytg",
  "key27": "Uq7xevJRN6YWu5D9334smLhw4TXNLk2zd9B4v1x9sztA8aBhLeNP58ccPNzTZAG5n76bZLxc2cwTD7R9rVucBBv",
  "key28": "5JZKT4ykfQ5XbafKNp8XNtUK6Sf5UevZu8XMuXe85zyTx24BRFYzFXS36Q47RHVVcL7sGJD6P5PprWkYRd1ip1SW",
  "key29": "5zzmWWCiDpjpDT17q1xZVVTuobQFQEBKQW77H1HomNYnSfjhvEEpPfe9gB3sRRLmEi7RihdyQDeHKKNB117Gi6wz",
  "key30": "3uwyYxmjq1WPAAJh1upqvUS4jTSUQX2wjXrEYpP1qEqyVd9M8KMiSURmYAENKijxaFn6Nj8BqrtpGfLM27y7ZosY",
  "key31": "5xYah2kF8zjDfHEXKh7nMz1pMjgS5niSoayd6jU5scoRpFZM1WYFw4wKZmRnopAxExMmx86R5rhcWTr5Zc2C8ewn",
  "key32": "3viBrVP1UqtqbHGWmXo16KaCPwmbXJjfTBUrZx7Yj4yUv2mG98dfH2mcW5DMh8GFAeKnNXqscogZyMygeRpppCMn"
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
