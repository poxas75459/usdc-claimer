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
    "5ddSFc7xxsLmfvjQ7HQez52GWGyWfqXfkfXwManqEVUSoWostcrgojKEg9BRfnJLUPZJVokzjRqRTfo3N39MxgUq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27NVfkpTQyHV2tYXdZHzGHeV4MtLGVnzDBviv7PNw2YG8NkcyWDufycm5tzDcgRLLppQjMFHGySzLsMzW7qtH9HE",
  "key1": "HsHceN7Epaw9uKzuwSiw6KivLqCbWc1UDdrn96ump62S6Fqck5cGKPj8ckGaB4R6T7H4WidKhRGTUn5pgkjPE8e",
  "key2": "3hrafYF7rgrmq8NnrNNzebWs7eXSUVfZ9VUuU7pLTi74TAMAzJdheZvXnAWRho998N3x4uoUDbRP3LWqVZRJzaK2",
  "key3": "p7XjohpBizQZYDq2qw4A2xqn4J8yXcb6pGZ5WBs29cSKkWAAjkENXLKmSdpwbusMvQmN5xpoUVh3NLW2BrvPsHz",
  "key4": "2vMZ6Ga68HKZwnZH239WDFNkTH1Hc3J9Q3Dkho4FeZQ3R7r5Cj2Sw9owgi95f1VTUKzpafhsYPrTyQcmw2AidhXj",
  "key5": "4x5vm9HuxfuLQ5rBYiigkGkVk4hZUhz2YKQ5KNcPQAVyZcFus4QGHaXJyGywTEMWBq3jqdNAUeJGqHpj2RJZDatR",
  "key6": "4WSvLA6qnjmyReQ4zx5uZWAM6q6FN5Gpm8V89Ls3GhZfTW2dVH82LsGehB4myMCkpaUv2qgMM8LGh1rh4VZEM2G9",
  "key7": "kqCiAYfCc4xzS75WYnu3ApmVgFXRH8ZH4NtJuhJ8AaGLfsobPzgaXJ58BvrKgAkMe2sorU3kHmoZ3Bjwty4x6Y8",
  "key8": "5cumknU8sxDnc9gJkhEeWUc9mNqM1jUABEdBsWnm5TA6Kki8yAmVttJAwGXdjbpnjxH2SJpVa9kY6MLBfrFM7sRf",
  "key9": "5TTotiBbuKqynYgS9P3vAGNFEUefhXwFUiMYMxVTBbqYpvwMBByiHptf2shLaV65FUwpED6YE5HC5Fzx9pngK1d6",
  "key10": "2ZgGZd99PoSe7KxaE2z1ia13413YnsBCuBFaBF3MZxkQo3HY4vhyMzWw3nSfKeCSFKLvEgiyi1wYr8RkMgjabWUH",
  "key11": "5Lifhy5BJNkk34qDMKgN7742vmKi86eS6GnBAmwFj876fTBsHY3eVAJy2midCvsXujP1n8LoYqD6r34gj73Mi1cR",
  "key12": "ThdLBiCzs2HTCG9RAiMuxPoPDMkWWh1UNHrBiWjaDCdCYTorGwjJUeYUdV7GSwsRDcYhgxgjYdwbfXCvaDMBDpJ",
  "key13": "W86whqFCG8t2TEmvaWqNJybsWSStagaBZoDrLhEPp9nWe5Zx9esnWzPd6mocGfmnNehaPNTWy7XfiEQQ7ZCuQ5U",
  "key14": "5umQ8hK94xKzKpaukSCQ7nwTAwDsJmQpZAR4fbxEjApx5LtMLZVRHSxMr1U9mgz6N4XAJyY2F7jw5Gt2SRP35EL7",
  "key15": "5sZyGzajJU81nw8q1Xm2DJ5zUcHGYcpKtdDDWBzUZ6jZLjZcdYhevFJPSCdgYwpzymMbsAxkRHxFHVzzozMqbtrG",
  "key16": "42rSt2r1RtBi4c9p1sL59zhaE7cbbLD2yzGKnsVatwb8iYC825ZfdBB7xR5LSbXyY5wxJXWbjqFEbS6aLf5VbAvN",
  "key17": "5j8BbrhRkw6Keioe8tMDVegoQrJEs5e15ha2xWUKt3qe1ZLHMaEEHtjUkzxU1hTGjtUGhy658nvj4mFDN9dfbsMV",
  "key18": "3bz9yEmuxS7D4ZaohamwfrTjiCwpBf6VzJ3kFsbrC8Q7XPs6ecHi65c485MnKkeHrradzsVKuRHdPxqqAfREXeYS",
  "key19": "4Yzf982ZTfVHmbwrCsk4UZFvv4Xx1EPPCRitqXYM7ZYyLJSyCfpai1ZxEkSFPhxn79VuPterc39SRY2rXiVUJHsk",
  "key20": "2LDE99FZFkRbeRvB16zRuFvtf26PgK1rMq1fn3rNbg1fu2dCbrA5gtivN88uHiADsWTPJLXb7uVaNNCYzgMdvj5e",
  "key21": "5NRVqMUoxgb7s79CDfXeTaEyNHgpr4S26xhVW6eZJx6rFAoETFDnZ97uHUxi5uqCki2kwWq6mzaa4CZChAJPJCmC",
  "key22": "5msK7o4Xz94SsrL2qv8ecBqtd3YXir2mCxau5ikwu3fKD5ru1byZ84Phm43APfN2FuQsJMS3EHshXMMNe3U3Mk2o",
  "key23": "3EmEM9mJmbuaeSZsaLk9yMEX52Jxw8iKxtb4sKpecXFBSbMoM7gE32ZyvEBhJahXsrPK9qsyZCcjyD195gyCZFun",
  "key24": "eYjPCWBajKchq53kLjsAvwtgaXyeJ3a3L952nwU7ny4SuQ1wfmwEgcXviTHveZuX96gKQx1UDRQPmkH847gedsd",
  "key25": "32bgAZaychAThQZummAzazkJooyU7HA4hCQENqsyu3eAMG5tVFKGwk26taHewqrNUF5eGx9TdGhm4UwNQ5uExZdK",
  "key26": "4UcjpeHUoargPXZedS7HeZ5SH6yUStmErtZLjmv4hx2QQYupRP9EZnq6MUSkqVoAheeA2LmFinvmbxxcGoJwGFEk",
  "key27": "3PHy7YM9rgbT4UAaXFdv84YWTFZaBiduhRhPgsK2GvDzEnfb8GYUeCxQkMAWkhyZiJinjfQn6KFwHH975yjfmCSf"
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
