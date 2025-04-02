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
    "2W3yNpFoB6mpyrjtLHcYBnvr6Zuq4aMMpQLK6N4f2EqnWJBV4noYxfa2hPkESs8nKpkv2j8NHwDd9Zd1SVK9K6np"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yK6yNpjYwFBEEPZ2mUwmuDoucot1s22E5nYWA5Uhgo1mtE7aqaYCHuwH6UBxw8kwLC3jyDfkZe3ZbXqrcKurH13",
  "key1": "3WyTPKABXdqxocjCGmjuesdnN3sv9Jqi1vhKaTMwZ18z35G1Jr3vwQcQtUTwNwxuPX7ZTUEU11nZChJe6kKnJfMt",
  "key2": "3g4urqbNMvx21b8FDPyGgwYzoL6cc5yxc5pFpa3XH1BbP6PCbF1tzZV6kABJ8UYhCzEtyooqV82RhgHQ4wUouiTu",
  "key3": "4QV7CSDRAbT3r318vGkECA7cQ6oRMNJLkksejwNmw1K1SVVGJaYVg4fvFWVHdLGjBogAwZz4FRwT34xR3SToAcNU",
  "key4": "4Gkk5B5qpsVB91ddf4MgVbUrvhv6S44AuTa2oQthwzUoXqnBYDqr34F3P8D6Juv6UGGQ3xK9hE64Bo2ncAcoVQp1",
  "key5": "3k8ZCENoLXLxi3vKNMXDb7QTPC2BJEGngrCie3PXGD3oXuKWdWZoswjm12AgJKkXFfyTr1NTrzWt63Yt5bTbyp95",
  "key6": "MgungaQHF9d6r3nP79ivn3Vg8iDy9vDjrriAqnnnQojrv1LDBC86f6HE4Hqc5QMct2qJA7MoYBuQNQWJiGrbSaN",
  "key7": "4nkdH92fwsK2EYBN5wQWdYB1ws4KNvX2eQ1UbWzXAa4mrsfunZi2kHAmNUVGPpWtVXfLfkUTZ5hjSxdyreKumb9s",
  "key8": "5XUPymXcdzfpPE7EHEpNLNpwPvdTJDahjypVjfoBXPF9a1WkFnMTktGryUMszxCvYKq48Aor4KAMbLMFm5Nyqu3Q",
  "key9": "npkSaL991z2WgtaggQq27vmnEXPLFV5PUkrFFK2Qgt5QxriZZjo2sc7cqb9yE41cFF9aFbdMgfBPUWJ6JGdUuXa",
  "key10": "5Z7euWvJxK3cCKpZAbdVVaAKu5DgC9niaapgPvArubqmH3CL8guQ9D5kdjSEb4faHKDzeZEVbZ7BvZDPFUPCJvz8",
  "key11": "2DwGDmvwyGbmmxtU7cYiFRMJnfn2Y4XMeZ4d9EjPP6CAtuiXzrr4sQDJtmGXcpRCoDSp1QpXwqkfrPJA9F71p5bn",
  "key12": "63y1AoYG1KV1rkd1ywPvPU3WVBbHHYifhaibXRmJmWdd6dadBS41m3w2gSyAAvsHJz24MoUy6sdkEFW67Ko27DCy",
  "key13": "5qVrBCKmNjs7u8j3TWVFdQcHjoCm8Wk1nVJGm6kFwaSo4eUsutwMa1SoamB1aHAf58vKCNNetYUAD6AjuKrZmaAW",
  "key14": "3WichEzLrKNNgvpZdp5ZnReSUdQPqZSkvUAUeLDneXiy45cPzpeRsWJdW48Xa8MuYqU2cHQSfK2mRcYcxuvkArwq",
  "key15": "NQWByq35hRUvfCeYn3imLoE5VXGzuXXF3rVG5DKXuJKWWc6H1ydZCnvSZA4hzyPkDbMsPS26LRD6SinK96GToHK",
  "key16": "tqPTxjVBHWV4ppRMywCu5admbLyjgYMm8rK4K8crcXdEnxaYsTTrM8fmW2Bri9giyt881wKArcpKfVJYavPhcq3",
  "key17": "3DpA5JHhZmQW8gnJoGiPZK1mS8WEnRzQiPDMmQV335tQ6fkJ1ennbBetaYV6VzFFRJ2rrcZ5gfSgWmrAGLE1nNKF",
  "key18": "4fvxUdrig3Egb7A7grEnQEPhYLvVHzkNnGMFmM6KpvdGeE6Pu9g3x8n8diZQDfDLnzp5rrk9ZkzUHRg6kPtohpc5",
  "key19": "5WHmCLoLkJ4jhY3NrVNRm6yV9zw4CDipavPu5YYXvwxDzk7EAFv7HXKFT5DEJe7bmKsMhyn1ym8yGPhhCWG2F2Y7",
  "key20": "QJoo66jBZjrZ7RfdFFEQEDPCwcXZeRtwhjJGXx2LCRX1kMtGr1XxJFPCvT6JcT5RERwgvMyYSSBXfRN2QcHzX1v",
  "key21": "265LWEZNgBnP9Y6JkdTiajD5PinFd5w3wpF953q5dLK8QjmZJHpBLKjLu1Y2TKkDP5qiTGNyodBX433iFuDxR7Ey",
  "key22": "5BXLvgUHUye3dnz1evGo5pf9hwC3avxs7CzEqbM6LKQDwVVgR1VnHAGMM6sds94zs5WT2uj1xoSnbnnacTRqXCL3",
  "key23": "3AziRdxWaFYE4Ba3GnUCapTNPV6QBK25BQ6xfs4u8nBpaAkLgvfApnuEVvDeRVWPPnsKapsoen738Qcit67Hhy8b",
  "key24": "wGD2qV1VGzmZYemHqErTmcD7FqCeFYMw7LNqNzqmtwDBZzaRuihGaHEhZNFnge3VkMq3x1eP9v8tkrXNYMZLRwn"
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
