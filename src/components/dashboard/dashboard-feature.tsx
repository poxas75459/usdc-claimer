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
    "58YTJainynNk49Ue9cJS4WPmimpM2vwPw3au5HHrXszTkUdaXxzDxJuDfzgUKC2a6aPn6teyeoqvUetqsLSfSwZm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sUmDfGq3cyAmGACD4AHiSKErgtVSa4LjUbLXjexugNLLsW8NCPmKy3yT68ebjghZKQjnGtmyD5ZrfVTpdGezkSA",
  "key1": "3akSjP7geH8cTcj7PLrVk9rH4gUwYqiZnqqNJke2CGX6VYGA2WYQiUBzddFL3ztNK8Z1F4mpJsme2e9ZzTMNd1sL",
  "key2": "362ideCNwazYswLjfeVbejHoy1vyKnzyXpRedDvdBmDWd3C6fGaHZZCBksm9cm3Yv1eBJ3MbJV3t9KFDtCd4k1YD",
  "key3": "5SDCX338ewPVEpUR7DG1fEuNBYkKY4GmU3tNaU895zey22DdFPX673kKyeN7sKPGWL2WZNJza8Zpbad1a62RppMB",
  "key4": "3dQiNKDTiCCv8axVMEUXESbL2HPzTMDU4UFZvk3tAwu6KzdA5ZexWVmwjS6QsG723i7taXzZLt1ckekVM1n18U7P",
  "key5": "4TtX5ZT7g1z9v81BsMdRhtsi6HsJi9aMzQme75Dq8DQTu6TPYx5bP4VtxTvjxma1h6rEXcJ9mrTdy6mBCgpXFxSe",
  "key6": "4MsSKxwv96kocyL4aFnBwaPavEUtuB4XM9sgtBi8SNU6d3dgKADuf2rLns98cSfjFhqzrnvgnhThhUF2ATL9JNqx",
  "key7": "5xsL5soL2aoe8gB8AWwAGGfmnNtz5jitad92P5t4S6zP1UJDKbTVnBfnK2mrMLcTiZYS9b9NZGPGAbsCiaVzskoB",
  "key8": "2C811WdDMxxu2LSswxniEcFZiU4AzhEUeV86D6cpq26vdyEQmFuH8bMTwUuqRU2RAb7jbeJqoaNoYByRESVzE81b",
  "key9": "2pwd734ZDQrkmyfq4EJqbJxgmXatEDZh6JoSiwj8X4q6qxPeeRFGmvMFYn8hZuhf4Eg1DE52ZDb3FtzzfdcvPj4c",
  "key10": "5He4L2LW1q7ufBpkVCzB5jFAPzMDtEhaw6gUUFJCu1ru3hxF2dzSnVEAT7GziFsbyrfUpB9vW1wQEzhkzojbPuGV",
  "key11": "XUoQuauwR85jnTEa8paqtJPyo2Q2W35Jp6yZNHVQxAGazNPPBTdfxGSocVQrbrMrM2Nj4KNUmcrPamGynTMwLJJ",
  "key12": "4ESrMmrDDfDU7j3PiY6pizwmKqzdLKckDXoyoQbPjtPARvVAgXBcpqyS9ifWC8uy2SqNhLfbpSkcCyEDUe4W6nBM",
  "key13": "42EoQQKePpWiJkmVCz2D1y6cTvUP4pTTdgNmVTonqKtmBJcVbmvEbhMFkZhU9Jvtx4xFSbVGhiFnxm7KbmBa3gJR",
  "key14": "5343dQBoyw5jRxmDYnFJEZMfhZopLwHywGqoGDom3LJ9AyXW6CZFNP7jWw9EQmcjwDETg7V8ZWbmBrGCmBAb99mm",
  "key15": "tdQjMdLgiv1Q8RvPg5RRX7FA79rYoCdrdjpsv4LtAKcwCtifdCG9YNWW8sYSnjN5U9Ht28HQwuHwEB3t9jauFrh",
  "key16": "3t4v1BFjVCfQ81pboXEk192zwfjzjuDCowSskAPvzqHwMTurT8BpxcQEU6ADp1ESCr7a9MJgrf1V3ArCbhhCwdTa",
  "key17": "rJcHVE8W5vGj5nUdt8FfWzsD8qdX2vYVCrtYKMWLVyRxg5us7vKtx6eHjuqwrWiLVUFYzVo9xHn922kW2vH7Akz",
  "key18": "5yxhJArHcuhYYfTeZ1se9u1VXtMq5rKHdoFX8EyqGzPCHmq8J6aJbqWpZj82TuLMPt6bdCDU8jCoboXgobkuz28E",
  "key19": "LAYe2LdVqkjkC2xyx9guHYPjkfgvv8Q1RcV6fheWfCbrsBHx87mhaRbTb1J4grdc6LoGc6oGeGTtQGwog3BwN8Q",
  "key20": "2k6vsRfekTfwkjg7i8Cusft7dhnvwXMFexpT29uN48Gxxop2bPQ9deqvbXELQMo97nBFWLkEicL5DQxGGYZQBBHG",
  "key21": "bH9338Z93shCp8D4ZptkiFyXzgviVymzM69z1BuT7ZqB7cD8zNFBaLM5UxGVcxd73fqQjDnL1j6Y3QJv8zwbxbF",
  "key22": "2bcjcViZ2kjKcnrWzQcDVPEA6MCxWumeXWU8NoYhBv42x5bjhxZDZgkeXBKx3KnEQfZiv2pKf1EN1CKz2FE2948c",
  "key23": "3yRxX2ZdXRfhK8tmovp5SBe8CpucY6YrthocvknSFTtgUjdDSCUsHtuHhCgw1EPRJfmGghaTQnbnFoxSTMmxbA7Y",
  "key24": "5UpoBTmLJq61tQPa7n32rtRjMAcoE9iefCNavnDTKkpvqr6iaGPj26PhCS28QjNThB9hNSHHk3cKRdYyYMYm2BZ",
  "key25": "YEDvQJBCFfzF25YtYZXe5sMVw8WDr1BhPXUJnsxCMDcrGDMPj5R91kmMMtscEG1bpAAPoiaHedVWva6QVzBrnVM",
  "key26": "SKFBQcN7cXSjujiKJhEc85iC9JhiowD2yF7WjHykB36ENKNin8iHBP8XkqprpqPwa7jcuys4aCjUfRAViubMuGi",
  "key27": "kfHYsWqDdYxn7KSwcEmipN1Pf7zvDkqFgXNUUvGdVVgdBpSGJyYK39GNvjf3db13UtK2ZugxCYELLzq1UhwtPrc",
  "key28": "57nRzwddF77JBZXpKwaeqADxJFLHS98bfcDGcr2UAD3LNxqZftwNMBmJAsjaTn65AcauumooZ9Q9ZGNfqrcV63Fj",
  "key29": "3qDoBTCyCtGjayxVX5F7sUAeKvGYiuGxzkxTEBVJ9nnTFprDp8TYPnzpThNjrVCer2NZZLCK1LUudoLFg2Xk885s"
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
