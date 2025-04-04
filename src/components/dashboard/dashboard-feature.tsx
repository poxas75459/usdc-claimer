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
    "5NzkXHiLGveWKNHMsDCMUxsGcaaUmEVEwYBp7UPSEgoiQtqW7qx5d1hMKNHFNt4CVhrkgrJN9WtMAL1CtFbrNpf3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HLCisvtmG7CquVhc1WHBn5uYyFxmKFwV5WnNdV3rN8WcRPYb8KfpVEa6E6HaoCikk8zKTk8u1sKwXQBmLgwaMv2",
  "key1": "49wyTbwjxw7fPvNhTEdKZ9UVVqJnKQnLWNkNRgoeqp4B6SFXkinbXmXTKE1p1KiRKNqEU49EcKAMJk8ypdw5TYox",
  "key2": "3QFiXsdHVFqbJB8e9wrZ9vbvCeZtVbhTuap6ZPq3EaDUwKMHWC2FahSJC35Gz8ibExT1Hwmv1ZYQ8xCiz5EepRx3",
  "key3": "4ieWuwJ9kTbQrHwqh4XgV53aSBLjGQJZaaWdHz6UM8W2oMqp8JJBWWhBJK7pAoPnd31RFv3KnTjv8zXFkNYAqGtH",
  "key4": "2VJbVc23DChVV3tBkW15gz5Y4hGQxJ7i3NuAy3bhVYk8TFswMVrC2efBmYYM54FU5fwkLhzFXb4Bs6e4xNEUL3Y3",
  "key5": "4etyyrxGVbWxmeyGZWduBLPsLbgNY45JDs9tGu64squ92eJDhDecqWrdRBkKxWAmu3S5oVu52AccKogovNZAjerP",
  "key6": "GRKFM5qWSFXNL6bAQ4b1MAri6Wsfc9BRiQALe6pVUxZYB1BRECPXDtGxRXWqG4S89my1xAbLobrtndkzmUXppnN",
  "key7": "3QHKgvFULGJ1cB3dx1HgmhpPARkt3bcnauDSEWc4Tn9Humm1e9xSatqU8xjxCWtHwfTA3edXwvqTXENh45cHp5oq",
  "key8": "3UkmhfnAFeH7HDYmpKpPyorvXGAemrwDa4QuN1rqtkVgCWvYP4h9BvtuFJLAn7tzUUHqoTCwZeihxdkWpQQDBBxc",
  "key9": "czq8WeA4oTQaunGjtoeVHAhSidtPQ14WzszGjDF9ACjzcJLbnUjTEpTdvEdtanjgsvV5jHxcBtMzxrbpMd5XoKi",
  "key10": "2CeJga3Y59DNW5AifaXYFyVe3YSnaRzzmtWHaG1PtjD4WA7hyNYWkNXGjxauHZBWJJiPdDNUKivJfqhUVqcuyznb",
  "key11": "2BuGcwGQrJtj9wwxM2LEMRAPaosfzeQ7isGdz65U9rWanbnUzErKZAoYpRm7f79iZ9m6fhaMqSyrEqNRRRdsc5Wh",
  "key12": "4BYKPMVX8dM75PBv5tpQ6EVP17ekqoghEjf1zd77mVMydq3bZHEdvecpRUSN5N8zAaKuYzQ5bNog3mXXsDPfSaf2",
  "key13": "5afKAfX9ixrvzphk7Y5aYKdCMPqqTc62ww3RYS5ey8pJAvi8En4JFhrN8uw2j5RqAPBS8ftKD2qPjoXxqH9cjTR7",
  "key14": "5KmCkLuEG9bz7WCwhKgfUoyEQkRF4KdgE5DfZEuXimn3DzEBwR5kHpgihnNqWXPDp8wUMD97cGnBejUF14E36X6y",
  "key15": "ZqqkXdGmk14gBbmEhjCPrW219Rbe92jyuzbse5YpTVBZzF8V8vCdC873xL4usDT6sW1T7wXMdrEw5u6Cvanw2Wa",
  "key16": "8xd9Y1vTb2uahArQyfipMAKfX4LAtEvZEKoAfZT8tfUhteE27mn9WQ9uxSWfyMzieCKY9t8LUKu4zS8FQaDHrBm",
  "key17": "4WmLo6W18rajWNvvo3pSYMoscrbZqCG6Nr1LbxZnYrAJiJsjLUhy6TMFYSbX8Nn6PfWzTWKduQpfetXjdq8gz1U8",
  "key18": "ar68EBJptR6jpbmchuJXzKPMnVNhdG3dc5SF1xX58YvF8meuqkphwhwrL21SpFi25TXFc8d4UhLgAfUVcPyubvW",
  "key19": "34WtLox3w7a6Wad98Q4zcAh3QPiRLqccRDLnyujYYbH7RyK6D4k8gFH7jZHB6sTXniqHViED2nLP2zYru9jsjeJ4",
  "key20": "2MtLrmfKLWq4cPRVqpVfFLM18QwyeyEBDb6L6ap1ge5uHJLxqDUQ7WYNoiaXFrpBWEtHqXwZ4Pk8HjZN2fQ7tU4Y",
  "key21": "4vyf2VWG6Zfmz3Tsryy3MKUg3fDnEuNgGfmPJCcrCfzYorePGFASJkr2CVo3piVo74NqAYcQPAagsJwWMn8art6V",
  "key22": "3Xv9XYRL4t2mRKdaLRJy2ikBLqPm7SkeGb8RrQC6Vx9o2pz9vT8BVL3gyN9WYNLBi3xz5adPwapRTvfh7KeqWw4D",
  "key23": "5NkYS5JwoNfkhuhfmdhihHj5pBXVzMJKuySthCdcKdvAWB8Dt57ps2qUMv4ZxKGSy99P48rMkigSRcPpb6jSsVJ5",
  "key24": "1sRVYeSJU6rFTYMo7qkqN4jDBEV7Q8bcD19GRPfgrFkHxK6vD5VyEfJMjiwDV6BrruD8mKBtFX7JzkYtQi5ViXV",
  "key25": "3uafwkGMp8zdPqNxJuR6hJEnkehYazsbC7xYgVpG3mfL3RMrvQ8sb5gNjQ79QFpryUas1RpAgTPCNwf41NghsxN3",
  "key26": "2YGp4sLrkRZ3RFYjpnwYL8LdFKAgFWCVxUKcw1B3s5uDiaeCxJdM6NbU2y3Dfcee9Qhy4pKy36wcexk1JtvoLwbT",
  "key27": "2jY24yK4PcTGWZzwjV3a3dk2CXVoYdyvB9zJi9ed1fiCGr9u6LLrRwp4VpNQNCp9hChE8Pz5X6ECgWp5VCr4G6Ms",
  "key28": "2ZxshYfww1B5jDFfAaxVADt33f6QcFT6p8arwYtAoVdsDrZRowYmzFKs2CDmTYYngT898icMY7Wudk1BPKdwW8QY",
  "key29": "3vajbJYCWxRyQC5qzuGXCGXbkrK9rfGBcbQwgA7yMjUyhUkwaT1WiFHHgzqcHih1rHnKtWXKUj6guE4sWJMNDtEm",
  "key30": "kT7piqsecbJE19T8RQn3v6wSJANPxBSUApgwSjEQthPjseHWjgzH6uEAs3CYNHL5KNAcxD68TJA2KL918cCQnxu",
  "key31": "5uGeNEsVHgd2DkzXFEejF2KrfrPdzT23vJMqGxrhCmhcCJrdjW4nVPHRt1QzBM5Vn4SAU9QCDZnqwQAiAsk5EDz9",
  "key32": "5QsgmSWoBSz6AtqfkcW3KwYpoSz4UkUqpN3trPoLMrY3EnBDseqQxNDD8Ui2MkhHWnzy8rqwhRM8kW59VBr3HUKB",
  "key33": "2QjykhuG6YDTryaS1YUP9RAofULe35VaXZLtRtPa3VL4yUC9evVGfhfMrzhp5J7bYfThfUEGqCPqDQHzh4mKo3ZJ",
  "key34": "24gFHBNPmkS6suSTJcFVDBobAJZLJXjBkmjeXciAsEsNxzbJhQJkubGcqVbDkjFbiZyp743g7jxBpw9eZ4mdJnTy",
  "key35": "FNDjTudAY62AaKJpu1xXncMSSZkjNzExTP2TjmgCBPqdzYNnkmZevhTMuDdbaHg3n3LmHvRqDZKqZLhjEY58YhK"
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
