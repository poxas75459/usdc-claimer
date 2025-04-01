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
    "HUVBQA37VzdBPz2CCxgVBkYy1p5LaT24EticTEFrNGzkC9odEjXwUDVmf42S1xgMmgLGgAMX58G83ULxSLFaFrS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Dwjz7Cv7vJSmAV2u4My77HtWWkWoVRbTNLRjufudfuWbdukzw8voua8KDmBfbZ8UHUJyxUhaCtLj9E9YiN2QvzY",
  "key1": "62kVbNsUKs7UrVNgv9uWwChzBDT7aMxGP6uR8NQF7RjgVpuZ5cJTTg16m4F8JtRRi2BRgh8S1XDfoqCN43Bdz8cd",
  "key2": "2iESFoEuXKy2qoPknWGvUbtJ6Nc7trtVMqpEckmMC8G4sT735LHwhaiaVXYKantUxWDqgpFRZpFqjtU547fWVXFi",
  "key3": "zzUMHUCasyPniKxhup5xVinjPpWNTyeYaDLZqAJ2mpmw8MxWrtQagqquEjB5dUgp73VHbmdFMTfugov2WX7nXdW",
  "key4": "4HNxWTRwWWq6WKiiiPo9fC7s8ghmoEiqLT941cRyBezHRtPxjjqHp3cJKSzhj5XSCPgxzDgsAae3xpwrEuKdtvL9",
  "key5": "2NR8oJMeS4eLA3SXf3rJ8bSVKUSWp3ioEDvQmU4H3N2WSc3yizjaGMYxYW3bCwEoDiEePpjjUbC5vUfJ1J8FfH7d",
  "key6": "4S6YrBuSuzXA728jzhdvXQ6VyEjUqL3ZuSLhRtxQgDS2JdNhhK9uaPb6KgqZn6hw8M8T7k7Yzo6AAGzJpR12fHEa",
  "key7": "2TZMvA4DKJhBp4NiYHMk3qmFPJg3JPjiEPjiDBCCCfKtbGPkF9FgrZgGem9QxDQTBDWtTMob1HKc81D89TVGAbBg",
  "key8": "StXXNkYSCzySJ6zukKTdM7y24m3bFikE75rqXKZG6vwh8B29bui8d7ukdbBd9ztzsgWjeDCEnt9KsbRjaUF4hZg",
  "key9": "492JyqJegG6JioEzoPP6UUU3z5p9i5hoY1nd9jzfTNEiyxi92Znz8WqxPwHbPY4qC1REifYmCGMwG8ZkjmdaojFS",
  "key10": "63FG3rSE5VqenzsWSCTxo8TWq2SBL5go9MhjRbhfV1FeaCxNqnpTnYvxeqsj51XYQptHrLm5KkXBznidSFoiT5gH",
  "key11": "4QLMSLbtzo1NhmC3r8SSEUwAzrEXkxSeUPsJwQnhXS4zaBCgcwwDb46WpK9suMzs3z6j6kDNwPVSsCxXKPyGXBGR",
  "key12": "4GNAJ6gzRsPLJCSB2Fq6HVNHsWJbrT83h8yfcLgg5wg6L5quLvQ4mgHTi8cg1bWKg9fCQUuHLVf3EMCfVbcazsWy",
  "key13": "kpQmciaVeEA7sR7QFdPuamPavy4R2QyDwZhTgo6JUH43kGvNGjCxWsjsbuty5ACYVa4nwioVidbS2qu9e9ayQst",
  "key14": "mdXfFQAB8jbCyy7xo3etjmcx1FuJKEUsT5MVLwDUBreAqmv4oFCkRmFJZNhBFqPxgHHKJkKYEThy7apTnmL5ZPL",
  "key15": "22LNeMCt5eHFFZDJeu7JbVeM6S77WZyQtiV5ZqYeUNKVAgc9756BneusfpWNt4pDnqGz3MrDp13XpKZNL7rzrTkx",
  "key16": "31kJ1XrVB1mSUERBnc5vCrBsnqUGP8FaFntY2wvBVro72wsxE15obCQPB6AXCpqN86zAZqeCcesKgQtwKSWNtky8",
  "key17": "3ZFRtdJfT7n3LcRGL71KCtjji2n1fdNHXir77JEcHD4S5PkfwtJeYxazAsaCoQo9koTF8YpufrLc8VgBsChYc9T9",
  "key18": "4ECswu899Yxtx2NQtBshkPWWAvdRMfouFdehogJHEmMWRqpVq9qNvg7dtSBnVjGDKPtWr14j2yVVJF9agKF6SMGg",
  "key19": "5WDjy2rBScq1tiSfyfQPFpvXFYUGK7GyTc9mNjf11M5ovKBUZsjnsdf64iWNQE7gbZmvuLo6WPQt1EAwjeF25gqw",
  "key20": "rSHmC1hPC7p19ybLuwvH7tmPutqZiTMNLN33dhpwLjBryDZ1k5fdWVo2bzBXqT7G4qR8pNSThiMBUMmFG9xkVnm",
  "key21": "4cfGEyKyMZmnAesJ9yzRkxZv6Lqx3aXYemjvZ2k4ELTbn7ubD3XZpM9RmWw9BbReEw83pn5P9fvFpVCFCyAnH958",
  "key22": "5hX7MHTze2nL7W5Fuw71797RjZPagcJr4TdnV5LuR2xSri1p9dW7LTMWoRvbtDHF977cWND5nbR1p3WpeiMWgL1e",
  "key23": "42Zu9G7NuvyKxVL4tPoZ5Enj6ho7YcxwsuHP9ECebND8xS5L52z3sUDgdwSJXCHFuh5SfnfWADR31nqoP4HLja6u",
  "key24": "5Sqw4gDGMGgfhu7NfTbaGh7e2EEDtRom2ffHgjiL7FrxZgE9zuVgwV8WPn64q1CfYehrZ52XmwWfSpvtKY8WZCqV",
  "key25": "4t6u2dgVUnL8JbbP5pTbriGyyH3KB5ZeGPfGFFW1nneihAsD2Tkeq8LSBbDTXRgQgxXxjduz86EoGD8HNAcDQwuw",
  "key26": "gcpnyzDfJrCKbJRCp5WWSq9attgjnWmFsqTrY3dJKGcCcMRHd883PQ2WN7wvAUwrEw193RoFjLiERn2AMHGyUwc"
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
