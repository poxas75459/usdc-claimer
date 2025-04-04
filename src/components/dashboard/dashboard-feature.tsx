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
    "2tpj9gUjmeZ6z9E27yk2264HEsVorZjXZeHJc4FWUhrLePozSM33UsT3tY6U51PKsD6ta4PiPusqwk3V2noCs8k1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HzbVT2VE3VcQZpbBFA1BuXUVFtfzGeZHj24TTM6qjr24cZ4NnydQXhjYGCRTo6UhyWNpuEeGaUYN2a5ghwoWgfj",
  "key1": "3oNPpd5aKQt4qnJAkUmb7vPGhcCcLBb4t2Znbr4UgLB93YTqkvYQnsUdPMfXiGC32LHjs973jcYZjD7cxxqV5tLi",
  "key2": "5MenFwTnHmqji54SfKgGipBvy9nDMKVLuZK8eiBmSYVnB21PP8bzv15AruTVAYYEApxzZXscqgHxuRUNwywRGc2d",
  "key3": "43px4oNYDbqkTPxnWMPQ5JNQGeVMFupWBrng9uHD5kF2fBoRsSjw8ejnR91isRgKfUFRpJ2T7zK8A8F4uPUV8b13",
  "key4": "3UCjJeHqfhdGAwoM6CLEjj6972t178ziweFBxBc5Rfns7BBbXdnfAjHrBRY6tjs2wmy1JwTcBryr22KH9nV4dxAA",
  "key5": "2buLGesKbG5eQoXES16UfqKvMWQVtZp1axk7FQLgPBR8DXebBBhsNWMWzokN2HaavyDu2qqFnPZtQPuHf8eLdu3h",
  "key6": "5X32sdDjzKRs1tyoAfnKifgE43BfGUyTi1xN967MYQKDwECi4qzGSL6yagz8hDk3ysBazMf7KsNzhuBHqAs4EFcU",
  "key7": "5xxKbMNLiEgGdE6MkiUWgxqCECN2nReHFzxfA7B3guY23qebWfL2QbrePBL2K1K6xYX4ASaAcLYMhwopH71HwFRD",
  "key8": "5e9FGjohwSFoHtJ4epMTK2Nxe9TcYKrFKTnJ5VLgbjDG3DkTtXsSvXoq85jtMZqGWtBDrwDELzYGYSgso71g26Ty",
  "key9": "34TCU1qHHqLoUBjdipA6dSxouSTyYsAKXhSxqm3iT3ZSmzQvJBrkSteB87EQbgjvCPwfhyruWtKbzVD46XqbMBUs",
  "key10": "4J4hWAJph5BxZUgxZukttPF3frwngVZDfqHk7G93hKF5yawAEitrRtjFFYKXiyjYtfFbKQesnTSpSjNG6FaUhV52",
  "key11": "63sCCV9hPJvgKXzEtwvetioxKzAUrRT8J4Gw9FaTQe9EphybLzHCu5rtyrMksN3U1D3uJMdS8uJ5y2CZgWYzSEy4",
  "key12": "yMP8tge396pR7MqwwWw3KNmSW6TDrJkCNCN6sw7Wu81EngAo4EUNEGk1ELviXDSuCi6Y2vYHJ7QYurNbg7hxcWU",
  "key13": "4w1TSEQMAPSFAZNSzein5Bma4FjXxBtZoaB6pAWecf8m72X7YenBGs2wJJqrFkiTqX48JjWUqmmkuzchBWvAGRwX",
  "key14": "Dj86khMNSVXwA6rpiMMUghwtBjBKL4fgbtvLLjY8oyUuGxWug54hRLZGEeEBxe14xfNNk78CE6XvnCHyb4gekGg",
  "key15": "5BVQgqiziDaH8wh1gjuzYhpbkdMWXUgk4pDcj86Rd5sr39avMGCxt7jW71BJasPPPy1g15sWrKShLD9qrsS3WTFV",
  "key16": "42FZsWMnt2ynAj2UF3fWmRZy5QmvxkbQGaVoZL2zRt29gTskeX68yuXjNdcasenoyYSP9Abuo811Z51bxtQ3xkeB",
  "key17": "52HffcnRYZhDeyXEY8uFn8KcVyfZ94SSvBW7PEzGVTSUjnQk4JrTD4pbmuih6q9rhr4HahcoU5Eb5DaWKk7u36nz",
  "key18": "4VcNcKMXMWKxiDUQKK6zpXP69VptDHQ94BghD8gGKXFZPE9735EXd9qLtQq5U73PeeVMEeg6VEjGPpfaQoYbohTu",
  "key19": "3BPYPQqiohBVhEePyaCr6zFCumfotHQzz1pp4NoccAwfmLsGR1XHNCAXij5jo6GXYsq6yapqDZrbucofdH6Jhisk",
  "key20": "3XywUa6rigGuRQKY9QYjnby8UKUPrFug2dXJ5r7qwgka2nYYdH1r4ZqG7vFbF7ENiEHGzmJq8CYJyiMd3gMWeKkL",
  "key21": "2NvYfJku79o4iSwQZpNAJ1E77uRZAh4PBVFKVrRCuFdJUC6tE7ECVBsCxQhC1vQxx6MjhSq7k9wpVpbpnBp3nkHe",
  "key22": "3sW9Hn6RJ37qPjUnzzZrw2uKN6WeSoAXgrnkhJB7uf947x1QQ4Bwm1ZbwxJNjmz6rtouYEcYh6chDezYVEZaLyPS",
  "key23": "66oRySQEpRKM9n4uSurWVPU6MEFhN3rCm3cx3UgdUqHTGhnUa7skGDC4pSVSXQPzKgCQXX3uYUNsFsrxkkjqgCmr",
  "key24": "2JwHVUt3dgEWkjriS7ocWJ37prYgYhwdfuajZqhw6qFfrRzH2zm47ELeu6z1GSzGkF3xso2UCfXz6jFNxkmXkoHm",
  "key25": "2cvq2KeKt5adWh42pdyVfbAK5eanfnpPVrTmDiDtG44Vh1dkoqJWp3HpFKrMfYbS3Lu7hFdKmpusA3kF7E7DLXRN",
  "key26": "254rgCMMc1GtrYn8nF5yPbUNaKJbtuzcjiQea1qvd8MxJ5DmFDVdp68LjMscgf1idvHnZE5qs2bLm9GYC9wzGvAy",
  "key27": "33ckeB9urJ1qwsVZ4VRUkK5BEonXvbV6AUeYdJgKRSuTKejJjFhcgKnJgS8wkXQxeiLQFJuBMD9fDeK8RXWQKJ6Q",
  "key28": "4swASGhaJqwHGTNpYbWvHyLtLcjTq6hip8BZyKDEXzcXqVHx24kAFkCL6GbZ8xwsMquxeRfNojmDan9mWT4V41Z4",
  "key29": "GBh4JoHaFNC12hCXGkujMYVtUjXAsCrbwtwPskcL1Q5CSun6dBhh6pYW5bnw2738oGDZ1dgh8XydR7jrM5tv2az",
  "key30": "m988PjfZG5Zm7gEhYCh9j9msing8DfBp8sMG3Rk8CduoQM3Y5b3r7aAFcCgLUicKojKpXXhyyBN7SzyxXbUT2Tk"
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
