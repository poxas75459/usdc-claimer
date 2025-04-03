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
    "4GKW9tQQxmoD1Gp1RB8LLzPidtunJno3RGHPHVgE6m65EmLsDxDCzLWQUy9qT5dfJ8wqTYE5NyKJhHhmZPvZguCf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eTZXMjpMToBhmp1kp9vshRbAXiGfwtK4A3EnFrCKWphskqaqQnSe2gxEhdny8PbdcuA3s1AH9j25NwxrSU1YPkR",
  "key1": "634vNCs2C52Fhe9wCx35DqdtHmRVa7pXyR6QV6oxWpcHFDzLB8KxtFWDh7vne1ua7SFwrEdafH7CRd4wD4Agz6gX",
  "key2": "3a1LrqWaE5ivnCnAXsWyWuF1tLrRw3sEAAb5vv1PNknuDPdR69Kydi5C7E8jLc1yMHBc1AXxFTPgW4ULZmCxTopT",
  "key3": "3VjAYh6D1cSdyRhBKs1K6h4rHS1Q3hB5PwnL1JQ6auXk2BS1YRzMEKaxmzjd7NZNgk93ecwAA157aeyhBuBzXv5c",
  "key4": "2f5Lyq6DeuWiRE9k1VDcMh9NxsXg9hKEUiZ5FgKXgTwQZg7d7miXRgGoMYPK3AQj2d7mdXfhn4tLPRrhNBz7RjkA",
  "key5": "1XDAvGYaZ4djmPEDkeAEH2ohy6dh4FHP5akK9W8C79mBrqL1sk6p25wdWWnLxq87scgbZNtz5jSq4ryZRvqvufu",
  "key6": "5qhmMVo52VwtLAUC6VNGERcLw7XmXeyrJYkq5pD8hPosrrN6sQ4tERL2q4uAJ3T5mrzXbKkrwAP6s6E1WG6SZvU",
  "key7": "2zpi2t59uuBnAfMgQL5yRsGHVzMyPTEK7cwWnTQ2MRYy66zTcrgNGfM3rYj5A4ZS1iWhjLjHSCCwx7VTzHAGPRrw",
  "key8": "58UaakifdE7fGRBDosLAnoUAnj4KA69qHoL5fmzqvKMoTvt3m67fCmVCxG2DuVgVFx8BpfHQLKHqoCCTsZ9qQTfG",
  "key9": "4c8x4QbfdUvc6UEaU62V88LoYYT9hEkcuvjRhmWFdzuRrYMHe8JQpCVfiHpX3un18wnwbNDnP5sDsWHxP4VLkd5Y",
  "key10": "6441x1FyW1BSWrGM4rkuURz8P2ZSBc5DupRYiiFG1fd9C7Ub7p6nusBxKpXKNsgVHpU9n4qv7cJLEpGDNbUnedUM",
  "key11": "3YNWmr7B2y6jxoEHv7z8mVxXmqZed8ZQP783i4cTcrpwSZgoQzNEEB6cgfgGXyMpqXrgPc3M4whBoNwoXrzwgXB7",
  "key12": "4FVZBUQbXhNA74CT2dZT4vGVG3RkSdsyEmJzeWCUi5K3Z4ayNvJkMGASo7Lis1PKprBUw9EhcNbZ9YViANBtvJvt",
  "key13": "ipFir9qK4ve2TezUU1RwZNgzFNcPZFocee4xGD38jUvK2c4Naj66qfBKFJYPbXCTHNycAaUT7MvuxzuMDMnJPZh",
  "key14": "JSipRJNyPVXWbBCYDJyGaYCSdxugcMn7t2xA45rtyUweeXTBWwsqHgSjVGjECTcrauNi8gQWNTXFt5fEJJYqzby",
  "key15": "5cWHmCWJ5A8MojgaVXZx5SrRyBAt31ym57oa9w3VZf4XhXsVAg89iGa88swFZnGakcJ8ryYEeMmCLJ5JWPpCvWKg",
  "key16": "4jQT3Nk7Mxum32S6eELZTMyEfB46dFrpVcNk9sBUjXzM351EK4KbfH3NuKyeFB7AQLUCv3hurUUYXnYPiNmFuxxz",
  "key17": "3EwCtT4cSyKr1aB9HMuSFmLovVg2tTsmrYq5jMXJxhGnbmxGWcVL2eVV8wamvENJgPzo8pf5iLqnFwLSvXFWQTa5",
  "key18": "YKGhwfAkpU9K6UW1QcypNqYwpcX8XkjRsp2iq3AjKtYtPeEjpKZ2SkLVGPjN8gwLz1jaouiE2LewPQGRtfv42es",
  "key19": "2HHNvFVzVjd8hiSLheskREh88hpXGqaSZ4J4qoBq7i5uQeqDb28TAGHgTHDDAsZ31yERhyxHHH6UfjRSai7czjap",
  "key20": "4p1BeENdjodJ8DHJDQ1pKgWshB3UQwYrWQ7xTYLoMxq8vwU2szW5qGZPobFbtdzh1hVZxdZVaEe5d3axfMAMJUeD",
  "key21": "5KagVpq26f2TqW27TCsPt7qba3neMLiH4VxGKV1d6mGRe3Q6fvLLixVGJk89Uc11d7EKPEt1AvUrbDSG76XZ1sUw",
  "key22": "Ee5Emdua7SW46EJ4iJXLp7oTMXS5k5P1zm8uyCAKCtWhqVtSUB7NsUZf23pHLVdXtEoey4F6hr8gZvKdSnwdt7K",
  "key23": "2AWrZMaLc6WRXsfX5MakdyfCYJeUM4SmdoZJvHQQdKcadfAJMSfFGfToiuJ3b6AJzp7uDaQinuDButQ3Y6pDijVt",
  "key24": "4AqkAcAjLkLvoXkSNq3CEqi1i93zjdmsWU9LRTm6sFuM2mrVzy4BKH7yMiXYN5FDvKZ5JgS9tjbbkm3rArGx7ijs",
  "key25": "i1dbXabUbqkMs7JVMByC6W9pXh9RgJvQVGaSB9s5MK3CnGppFLU5pLqv2FstZXFsnHm7xgGyae31YKBnKV26P6k",
  "key26": "39PbdZgTrNpT7dTEG3vhqynErVLHQ4Qd7pGm3Xkj1FrwiM1hpWhcEvt4ShiLLExiDGF97ReDNtaZT1DcqJtbZ14y",
  "key27": "5jFx5y7xuiu3sTbEQKZd5LRdE4zxzjdoTrgeCJsD9uEVbBn6fEXrM73HMtiDA1mYhsYppqMiJWKbcEXYnUmpssy2",
  "key28": "qpXWRBpNXoVGE156u5yAh6ATTcKAv4HqSK6j2FmtK6TkTRbRZK4j5k6pvuwTA1HdeAooSGq41dCQMbVTVCU4o4x",
  "key29": "QwRU7yhM4iiQ5TkyiCoqjbxXYGRBRgzEzPhvmRkhTM2d55MfnfATxMtTGrWiJmqiMiShuti4qTjqj9oLvMxWtqx",
  "key30": "3Y7QAUSFiSvGrjujuqqXYELnyNhAXDmLuQvaaMc7dbsR1JEfgteabLSLmQjcARHjAsHg53YV9dibJcmcaS11TYVF",
  "key31": "3UkxiNXxL5i7zjWcFishqqAknJJ1fDrLWGsbsTYiszSzzqSwxHxL1C6a6X1BfRXcmMUvQNvyQz6rQp8z79x6vGsh",
  "key32": "foWvLn63xzTMZcBbU8EGwqcu9GrmCeeECjNt1XQPecKsU8oREQt1RUFmTEZryUDbYFDSsrHmL7Jfukz1XpskFta",
  "key33": "4NgTVLanPPAZBVZrCgG4uDkLZSRhBXmvCbynS7jjtWWrJJ424eNjmCnJhMR8ezi7Xz89uuDSyFamauQU8a8aK9WH",
  "key34": "2xPj4H1Hhh8AEFLk6zY6ZpbLYPHTWkDsZiESgsBaeUSwJHERXTa8Gkdrk5DceP2ub1BqMDcji2PBbaGDJhbdQXPr"
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
