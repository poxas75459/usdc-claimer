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
    "4XwCcHR6GXFh5MFb46GfuSRaU29RVh2Nt5yGUGMqWwjWyKVm1YgDAQCkAU4YbBFLQM7brLfixmB868ncNbqn5sz6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BXGj4uKTAbANVKkFv5qpYsXUfnYRoEhtS7ygWnhVkv7RqxRFasFUALetMbNrAyS1L2SGhzuZDji9ZNgg72ru89o",
  "key1": "5XQ4Aomhh1qT9K2ziX3M3cVY397Pq13FfkpJaLkxNQQXWrJY4bHmHCFRWADhYaxugXtcXojS5Q97fi3Hgk3tn8Ce",
  "key2": "4hr7RBPHykLX4jvau8cE9CsTfq6oizveBwjPyqbACWuNoZaW5hr9yKTbwnNYiw2ktAEY8jgaNJyShQfbrpMycWLd",
  "key3": "2cNeV12vkKdUcdzW7UpM1Bg6Hsi49UA48qepUVjvUrbRf1Zd8DuMzZRHN8QQrD9moFbBy2YY6mypUZvNRwSFYyeV",
  "key4": "2UZPjkZmUp9UQn78cL49HLa1ffDerF3YbXDwEfCgAkVtLqYsqD4dPQoksnDgsPUQ119nMLS8Ez5J9Nt7rVW4BkQo",
  "key5": "3A6BVtMNQf9AGkz6KsTVLhn8rX1E8Ntm4wq9eiGhqaRjUaaPf1Nn9WKemw9dkKfruWC5xLZtCkL7QucCNgbPjtdG",
  "key6": "TRBFb3jVkj7PWz9SNsdrcELYUnrPxQa3DTT9hwRuKQeWxcect6KMUZVtTgef59tv4RFyNF2QLEfnqki9ST8RqDw",
  "key7": "53pCnaZT5FbUmxk7jQPUrF6iWVP1bQ2iFweSSBHnSagZrDxJQ5zbfdnBLejgoxYAtpKdQQ4BJzpjhQuBrWYqsoHE",
  "key8": "3FwSzCbpi9TLPpySFxHbsJ3XCAmywvmVYUsokgyygavrYxfGKsTJudgQ36dZw691NB1QtWFxrFnMaBVEr1aVueGj",
  "key9": "WMTkYvijWPPdxyoUV7iTwXN5K1uedW2SCqFZskNwR4QToAB4yuGRgG5QsFTMb4mrpkydT9s4btBzbkTNCBra8Tu",
  "key10": "4ioeVp5fZVoEVPyYBAunVMNUcSXQBr6WBqWzLG8nvcTffNifdGVuW6iMn7HCcLHVpyEFXXLvJ2g4rbUtREZm6xHs",
  "key11": "3ca61ZsAManjvQctqqwM5kM9671Dk4t6EtZeUkKabXMF47Vnb1o1bDeUR5bpwkXgT1KWnmBFp51MfTioqRaodGNm",
  "key12": "3vjaRcmjsvfE11nGFcby9oixf8G9CbKJfsg6AVsYgoqe44nJuDXSUd8VmuJuWvpa2A3J4im9G3kMpZE7xmqdRo2y",
  "key13": "57dA8Snuh5GUrJcYeUQQJNacqjDjgXUw1FK1ps8E8UCbvGskJu6pTZiHaF87cYKBv8BLW2uj6zfwbrgdkYcJeJ1D",
  "key14": "2SYL4TMgwxPWjDpuHJfked81ittTpRTjCyEzJSvmZYELfghCubp4Wf82a4sVLirWd6MLYmheYYGhMhhhDC6U6eiM",
  "key15": "2KQvX5Gt8hkqMXnyF6j8R3636QXt324f7DsBo2jUrHdtPP4f51JpWD7Q8wbnw9hA8dWkDZCCzvAS7Au4aJQLwheR",
  "key16": "2ZUdoQuNFeacTg3oDSPbDpoZoq1hpg36ihWia5bTdgZ15WnMJpXwT8D7cPbwYKZfHdU2UAFhvhY8MWkcaGKfSp6j",
  "key17": "5nAm58oSZJmfphuzWvHyEZ6gQXWupWkCLnTqRTGF5quzNt69dd5wuPWgwPW1146xwTMAgby8Z3ZfZ97TLHZad9pd",
  "key18": "5ST1DncXRKt4FDrUr5iKdiFfTM8HudQZwNiskpTsgjcS9F9PmNLLDFUDDJLvcefh9gxnckxWTh2ncJXzbTKKLRkc",
  "key19": "2dUfRB9uHJJAxZfYo47rXea5X3yYXuiUs8vyhaoZZMkk8VU6wgzHnixDYhtmstLs1Wp1ycq3gJCAwtexQp8PfC8M",
  "key20": "2wak5YF6yxAHhoE8WUJCshKNZNtpy3rwVNDVfagJDu2jis4QMhq2qnaLM2Z6UT6wLmyjJTkH1RL8qkkgjgnJD74i",
  "key21": "3zrgLPPYuFztw11n27qxpJ35BinYCiYXuQ2Gxsm7nUExu8MDJV3yoQa1LuNjTABNobLRhnxa2aR9N2YuoQpBc9Fq",
  "key22": "5XRPShWBqvcU9bK5T9LFPQtod5v3MwSKudwRb8TheEAXUyMPSHHVj48MGYmecwJRg8m92iairqu9Snp8FV6vvtwB",
  "key23": "21rxXpXFmdkRFWLJA2RkPVyd4PzdAmzKYYEX7WrTLCBX5GsLscFpwnVSgX5EC8VR9yyzvP5QbkWnHh9WfHiyo44D",
  "key24": "5TQQZGVLnA58ikU3aoAe3fpSinGsDmMUwgX2GhNo38ipHXnirSx2CQ4xzu8o6gx5GESUFEvrFL9j4dKyGg9EvCjH",
  "key25": "gMZ4m3eHLfNYCHPwDeAH9JvubMDo5y4ktwtXZgNQiRxgH1YqWEgaRTpaoBSsBXx1HGYsuuXVwiiLyo6Lu5XFni3"
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
