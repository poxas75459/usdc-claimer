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
    "5drz1qzFikwEvP4AotTD4GKko9D2SzhkfRdj6VpWcjtGrWgNLKYwgE4sK52yZ5XDpZNxqWMCXHFTQT8Ri41DZD8Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27ic8p65tYA7Ak8QJKkWBUuVKVtDH4KVYbTL7qwDY97ddkTsczGqv673iHJ9TCdVYWgYALapp7kDvAKUhsnH19X7",
  "key1": "5hf7AbVN4Jbv9b4uUZTsKKpMGoHXrBUyzKmti6vTF5KHvQGuAB48tWiKnacjFuNTRrkAMnfRpPCcfj7xYdyPy4dH",
  "key2": "2ws7qymrQ5g3HoM4Ku7K4xbgMUkNkKYSd6tgi3kafWrnkcwYAnawhqFJS2sEUqwUJsJwvgc7CHR6BGC9kyt43NSM",
  "key3": "DqsWg1vcH7zgtFtHU1B6yhBnQ4BCJnnt1QTRcArCxFNA8nf9q4aTzPkh3jzu7nVVGNJDnFhSizzE1gB5RjRBgfu",
  "key4": "3EczoUYZ2dqRQ9BZbu1bpGtJvW7WL6QcsR1duFnAWFu1gjXhNjAApczNyJJqoaSo79XR1SHD9n8Ra5XGQJcs2rPi",
  "key5": "4Fr2iSuX5gFak39h5orXZBv78ZzDrGLTEKDQLe5ftaxEyQTaHZRxn1DDF5926jS2Yix3H9rfWrtYVrokcmzMWKU2",
  "key6": "43Rv1UhUucR9SBAD9q3UXK7gm1jgzhc6vKrKK1bGSwWWMRqTvh22ArpQEidTN6crREKzdaMrpfbH5ASYwKJij3ga",
  "key7": "xuuLFYaEDei6wEBnEJAu3WG99kqgs3VyoybEJUZHe95JfH32yfqW6dm5fHHhJfhqDmtnHiQqWYCrEqybi9teLDq",
  "key8": "4F3jvEDZrAD7Fhyou3xx63jZpFsmSUTGQ1MBCUS7QrjpvoTc5M4v7QnRdp1WQCwraG2trnWX9xKN3G5Vkao9Nm7Y",
  "key9": "4VnQgVf4wyYidAfb449dMhiarvfidQ9zXZ88e2Y8cSpSt4Zk8MayycMqe2pKV32q5ZdaqwnkoWXL87YSTvsRBD7y",
  "key10": "57v6uCmQb4PCs8JzFRsUsQ6gL8dQtyw16bRbyD7YUAreAmj36ZQayAVHoMd2hU48HDsbbTKdyQ8pcfSWDoVYfK6x",
  "key11": "4gbxUrsyZaCsDGaDMAajghCBGFaM8e6CG3aGpwkhEsvpGN913dDBR1uT4hQv15iibYfb1oARmyfVKwA7djFBYJZy",
  "key12": "4UZhB5E2GG8cxmgRZt1whxiWMUpLLPc8bMZcpdCEioy8f2JQmo8T65iFunojDEjaRwWQvks8qgSq5SXLtC7sfhUp",
  "key13": "2GAagL49G83Jpr2wvYYUGY7nuRxupHVe5UF7gva7X9SkVZj2UVqjW29mHrtczfAmg3qAVHXtNaEvS582RB6MTPEX",
  "key14": "jyUh5NSYDcWSYuzmA7Fn2uF9NUyHnE9TMk3AjBLQoA7b5Mn6EZrMv3a6QHTSDUjw962iLSDsPW1k4P6RQwUf2Xj",
  "key15": "2nnZ724dRWtaTFQjW4JCooAHtUwBk5o81BEZgtmaHjWdiRNmd3px4jxPwQPguSKvkZVnn5T8ZWyyCBsx9ZPaS9CZ",
  "key16": "sALYJgvFksRZo89y7JN977misfyJHWvmH8WYdx4ZnVjyxoRYGZ874UuupEoM9DWSGozZp7mY6M3fXwsLrf1Gyco",
  "key17": "4qTzdh8haFqdb2BrLYUx3gLuRvuuoD21CTPBQaMVqWRpYVonurZYkF8Xhz18JNAshq223BCgyc4j71EejLKuoFPv",
  "key18": "VFH1cpmdZS1fcN9ra8yVD6WWT5eH6VaF9V42Q15ZksijsPGdU8jE6zAMSkxyFbLbD4DSh78N9kvL7Wo4NpGJHYn",
  "key19": "SeuxgMQh7gEprB4shUNxvyzHfkGKr4GLuaFgn85FjjbCN7r7yECnkBEz9MqMhiPCwkhLWNHAqfvp5NsiwAhzYWf",
  "key20": "4XcGAdJ2mkwpk1U2pcn4bSXLFgdafwg3LfKCkRNYfiPUufZccd446vxbxy8tpJ9eUZMf644ieTdwSfRDX5gFw3WS",
  "key21": "2HKR2qS2Da417ZFsLjpcbcnM9uB4qG3zqjWVxydcGNK4uRVi5NWQgLG4UoF8mFReh6ucj4WgBtJZXMZ8StRs1hp5",
  "key22": "3cdLcNNpXGRTs5756NxC8ZM4nHPxv2M8YWj3Kwk2vdHJciNQC1rs31PbzuwV62mkvMpz5oom1ioBPxKgvyiHzBu6",
  "key23": "2fJbPsJfafTGaZRFcWHTeLeRAWc149eUjWYMYSVDUanYMrouF8NKv9rVKY4UX9hQmqsMhygLgg5pW2mEj1hA3xzm",
  "key24": "35PSBjJ2vwG8NupF84LMfGJj3As84pG3qZxnQzHivFjy4A7KLNdht8fGpXwxjaEtPCjmkm9mpHXb4LbE3EPQgF5K",
  "key25": "3xagH2SafhWKimoK8shcuKWCWKTGFhfCLRcEADcQsFwLBjegW21J8a78SehQFrcd7ebWsCxBj88UWsJzWAZNJQSR"
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
