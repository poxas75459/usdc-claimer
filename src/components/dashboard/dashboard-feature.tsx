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
    "5qe2jvSni5qzaa1XSSbEZUp7caj5GY44jTDgAiPeSECowTBWUwzytSLWRVQSvyHebktFdFjUKHeKtAJk5QuBeadb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eqpBcfsYTZ4UPHvJNABX4JPUXZDwz2hudJNBc1y4qMeHzXnNdPbyVGRxp1x6sUSa4PQd5fTpkvf4N4rg9WoYFfS",
  "key1": "5PvFp5sYwGHRvUugRHezp2imkFHxNsiurd8gMCPQGnbaMwSPgeaFKzyqHHgevGCYQ6dAxfMgw9xe2tQTaJbY7if",
  "key2": "5JLpSyHF9QoM5RttRinXXhhCncUcpdd9FU7to51vFkzeBfewro8sbLHPvmUbGUjnhWyipTmCJm5XYdKGyvEifTjB",
  "key3": "34JpaXQ7NNSaPFYo6uitVBBK7kuwMC9DsiLB3Z71g5SxA2StfaoSqB5zsCv1NEv6MQWAvvDze5tWu4qM2HEnSW2",
  "key4": "2cksh6xjVn7F7nBsaD6V8LYW4eqgVRYrsAiEHCvNzApjVtAFb1bj8XqmBtkLU75TcDkiTSfjSy8tsjpdXhs6MtKL",
  "key5": "2L3vzjM69FXygq5C7nhsnrig38iK4kT5XHKT8WnhFm2Hza6guxFRp4ngHfV249qScLV2G8pbEkoojgZTC1CAFEuz",
  "key6": "3YKDsPgKbqYS2uZoQcTGmVb97vMUqJTkKNpLVhsUzC2jnZC2ay2UaEH9u3CyvMvnGDYrERD79XxHGGhpBu5iGsq5",
  "key7": "5j12HXPkGw68CRVxSbthgmeeUrgMdr4W4mq6AVjYgUe5aJChUcqLyq7B95z4dxvKY2pR7vTcNCM8gx6bdphZ6CVs",
  "key8": "2oGA5hrqzyouEevGy2rTeLQL5XSz57HF6Vz1hTqRUM6Wj9JwrNSNtF1Hiqi4HRVsoFcWdy1ZEUGp7yk5iEAL4sFt",
  "key9": "3aBDf99kk5PUCiUfvKArWPADYLsBwYRSumL8qVGLxJF6B1jrSDmPus3EDyjRLUUhpzBqDwGPVD5fdMBQydR5uf4z",
  "key10": "5fFb7cR3TSvjMRU7VHq9efiBPywkvL19Y4Rm9bJsRSbWHctuso7DnaPWsa6LmHZqHrAzUuwyqqRsU6g2nxtJZcom",
  "key11": "2u7tiFww5fB3ommJqquUKATwjLDgt2oCXiHtBXVurCwkwcWaXCpue3r7zz6spqfy2QXD9d4uKFqVDcJyBm9JXMZF",
  "key12": "3Mjizz5xefcE7ZZ1TUk9Nbk4cjPw9BH23Dspg31WbvpYxyB9YUeFV5P3L1TcvUhJugNLgUeDy454J9JtUu4tBcux",
  "key13": "5yDzjGJPuefrkbxV7p9WmuARR67jLSjDCmgNs4AdCfkprfiaP8DbCy8PPfHuYe3G24cboMTXsV1qGvsTv5sVrGfu",
  "key14": "4W8KGJi7hiS2vUFHJrv8JJtHbAWS2EZSanTLdA5RweypBhq3UAVYpE3jWsuSZL6UutSgRcgyR7sct5oZGrwUrZHc",
  "key15": "51TCcHRuvtFcn8ct1bGGPtN6ZTRqGuKXEbfFp8uubUBAdhX6Ad5dam7ABmi9dV7uPs4bi5k7XidjSCV8HcSUQ7j4",
  "key16": "3A6yV6VBqrBv8FSfjSCUzkjRZLc2NtbB59Uak1Zw7fMZ5cWqJKw1CbHZ3txRmbMz9NjAmyXGv9oaPNRZrHGdBucs",
  "key17": "3YPbCvJHTFT7yTA2fKBJvXVrkZjnRiBkyYBjxBKCFfM1qLQ7C5EX6ySoPb5PVaF21qGc8K63urv77AUgmBGBc569",
  "key18": "2jEvG93QojJhFjfX5kCzdcWfSGfscf4svfF4fjtcezxVmg4mqx55v54dBrFiSoWYXWVCtngAEEvnWAH4pjHGzE73",
  "key19": "5uPx6vz27rVxLZ8onJXL6LG2TDpPfwvbS4fhF18gNfoT8A52RF2sxbN4xJtJgpouqCfTL6ZZAvg7irVeBtCyHEJg",
  "key20": "4v8WwCdXbdwJiJbrz4sbr8qtLTrFghn7kGQ84bptLVnWTqMDU2Eugd1mQ4gVo2kcNesx7if3xWENUjyHSEtvArJW",
  "key21": "3GXrMHGoZydnbTzTJmnSSgif9xuAFFNCuaEbncF9CU4AvwM57uGx4AYTf8ksAafUMgawwGVR7bB6GSmvviaWiHLv",
  "key22": "4xMjiVk6rWa74WY6bYMc9P7vwCprURvSug36rtwF7gerW1S7EHsy2rZ9B7d2A6nuBVz9j4811GKqXH6Qy82jiNpq",
  "key23": "3jr2zhrAPD1YfpoWv52xNCYDYGBwfQtDDwcWXBr2wXAFEcWKAyMF3CdXWXFXMGVsyeS4kqwSN6AQ3zN49M7ArsCw",
  "key24": "5yAoqGqARrX3eXi7B6R7RSpskApyY2VEmKuQUr48duHaDjwoprPvKJwUoZdvHFtqcpmh3iE6Zx4WYk1NJZ3Afp6D"
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
