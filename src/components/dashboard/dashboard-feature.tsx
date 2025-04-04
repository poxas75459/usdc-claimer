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
    "G9BUNWyZChbFjLMj5G3ajFE7TzhA6Q5mcCRS6u1DS894qcizeAzK6GidT7bt5Tf7StDjfUnAyLcuC4rndgCHjv4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ByfvCqFhkv7d8udFZPo6bJxcPmjPbLUXRXKxQwtBnBwcsw5rLddBT7932p9WZEZHSchp2WohxXFiG2M1K8yw4NZ",
  "key1": "2Q3cS6Ty6oa5eas9jQu2DLJcoEcxxXebLgQqVGWFsm5dkj7PkJXEpRGiELv1s3yEcoBA7VRmedpnEto2rRTNBLap",
  "key2": "5vn57nSM7C1yYJBLL7DSARXAZY1uNF3C8seWFTaN5ocLeKKUz3M3FWiLJaAsZbuVLY3gkcuSz54dHwFhd1KQgJNQ",
  "key3": "3XdzaqN9PbRcKynQVunChhNysujv6d3FLQcuMTMXAJ1pPmryXSXWDx4Ytnu6c3rq4BkDH7jXhvAWmQPASZ34JUVn",
  "key4": "ppNewReLaVHNjhBn4pdWkP4aKEb4cztLnkYvXifkJQ1QBCPqE94ay5L4R2pkqUWUEafWXXoyJJWVuYhmHYdPCim",
  "key5": "5r7P37YSvCp3stzD1xjif63isNHNVpD2PmSAbqmjx92SobQobvGtjtUDZtvneCmwhUkHeUjSYiHVzXcQreZ8PRV9",
  "key6": "4He4pNYUz9N4JscmYbCYZic24bmL4VmT4HWqvS6BzdsBimf6sKEZfyqPMn29Ls5srprD1XqXwUdJ6xWhA4xQQP78",
  "key7": "4nDM2NSqsempPvQQ1iT8CgtU847TwgKJWEDQgVAkL9QUYfKJmdfpgeB1GEGjJywgVMDsqNzV74TwLTw7Kjyyb3Ze",
  "key8": "S7fNczfxBo8krcoLxiFrmep6bj14XjgjE3Br6P5kREAMoAqF9FLqSCBtuJ8bzLZ2GEqAZhHYWXbmGJjX48EXQBi",
  "key9": "4ZkiysbdAF2vZYgTUsCUq3BrprURxWoATByuJo7mgXCVjisdgMpKe1mcdXc4dHHseLpeTgMpjs5a4eVsXkVeH4aD",
  "key10": "ZHkFMeQyfntNA3Nt3TrLMRvTWdmh2fLfc4KHSp2MqrWgkPkAJy5sqAMrHVLwtxd57rBNdcYSjdN2Fy3mQx3PuwW",
  "key11": "4AiGzaBeXfQyG9QpoSVMSZEcs1oErHNRhDi6XrC49G5DqG9U4hu5mUrYUuU29J2UuRNMcpF2qbFDPLKZrikVinSW",
  "key12": "ZF9vp69LgUFVNNjkJjXduxJXwET3zrnYZSwxQawiwWYiZFTgg9cWkDiD6cR14JHNyYedbCUFYQSAeH8fwg3iDvq",
  "key13": "4V4WJxAzSufAECJn9L75dCZuEv93CWBfyyHRPiUBTBSd8WXtUzKFCUBMfgcZNRA4mBsABSH46FkCVWdn8uWPGRv7",
  "key14": "X76zRKuDqCPX6PEZ7yny4ynFdM6kFrAgfHCvc7jscK14ex6sNCAS1LV1LoYccwu1fWugx55MTDnNSCW2DU4tFLn",
  "key15": "428kMcTmm48TmrWUJ1wZK23i2GjZWCA6fKpYpAYz5cby4WD2xSga5wGXcJzWwRbx1Gf9bWM8n7bMDgr8afw3xtC5",
  "key16": "NVUh8Z8csrr8bueY318mnZiGAQsrntttajJABCw9otayqnKrkCFfZqbY7h7Kib52Ym6GxvWpkgoSR25Ph6hiHJs",
  "key17": "5fggpZ8v6cFmtykLf5xZY9snf6AKMXM5fz7xU9jJAju5ZEqQYC29vdNc8LjhoMSmFnaCpMDYfaddNjH852PzDLqt",
  "key18": "2sQNdJkTfVQ36XRFXSHvs4VTTZD1vBGxWq6NCnttLMvcTYa3kesBRG6az1vFe3WVJitrruu8ZY4v8CFfvnqtguJo",
  "key19": "3YUjkmNj47R5Nyxm4EKfUXhmPyK3tyf1iVeJFiKo8nBcciFpAhY5uvzfsjuULHFs4gDNqebpRy5M2Qj8j9hyeweo",
  "key20": "ej4hqYfSzr9G9jeDxcE2KKSBZkm6q6cVWa2CUuaykH8knBB96VSe67LwKj9k472b9vmMm1B6cPoCwSqH2k4Q37b",
  "key21": "3MoC5oWMtK1frCfvvawco6y8FGvstVZirWMpFLawfLN2TT59u85EHG67RCbPqYhPj8ru8dTtKZSfWaEydA2R7sYs",
  "key22": "4xCdpXDmhiJ4SH9GFRR7cSoXydAVVkMmqj5JtNK55m84e59pdpQTbVtrxsG5xXtFsrHPCg4BxcxHDutFbemh8xoK",
  "key23": "3ptbHDgzxLHqLmV9ZG6TscoV4cxbKX2TdR5wzJeyz5LyeT3tza48bwT4BfCKqDnY4C27y3j4Qqd6LrLYBBv5hy7d",
  "key24": "79K6R7qpiYP3svWXin4F2br71aDtYcRnCepr2gECTfxErJzpRXjsj2LgfQS5XPHcAzes6tBoMMNvcs2AvxYnZfq"
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
