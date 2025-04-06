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
    "3JD6e499ZWNpCrgijReAmioi8UUAJniuELgG59rqq1QzeL2Ea9pzkZJFC7N8vW3SjXRYa3pgiqYH2mL38eigYujU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oKEUgfQttM6gnuRZTKfXpPJFYTYMJM33VfYz9MzuZih6w4RXvDszLsKESfteouoKedUr7oAnHkNyWZZs2tNBNLv",
  "key1": "2Gt3oB214WsnGvzErFXPmwayT3sfi8q2g6zKEuvLnbnUof4fjZ9x78pF77rNWqcmiuzJd6RSbycRfPqAtzCZcR2F",
  "key2": "62czRstvMkFjNpHZXi6oX5xnwTWDWfQUNoZg2osqKK1HQuu8jB8B6eDopSHWfBupvwV2Hb9jRUuzF8CLv5MheD93",
  "key3": "reoPbK55LWK2tfDzGcMV9LJ3tmeRp3tJJVS7R96RYRk8WteYdjEYjpeQdyQbZ6EPU1eyWwQBNnFqKYsdaThxcac",
  "key4": "5TUR2JVGHDn8GxpHXiD67dyCL8S4AK7rewLcTAoAm94XmzanwDPUMx9Rza8YFu6ekPnK7pJ3NcpQFH6xCX9fe1Ek",
  "key5": "5Z1e5HmQPTviL7WwSjsg9DkS42Fn6qGqNTJizQJG35Kn8D1tG3cRRtLzxc2SARk5g53aRMxBzS7DsPvRLeS9nNtB",
  "key6": "2aTBxPB4hqFMttKmTJuwrcfDvPy2ezQFb1XQMHUAeYk57a3HT7vHemK1ytSyTBm8nzABKdtDGXp8zBg9uaDzb4Nz",
  "key7": "bxppfY5Cmim5GA1JtTdQXAoVwuKQT1bgn2KAywe1GVUdKoy4USusnCWahAuKX9sWfPgM9X2EH3XJ6FBpkHPUoPD",
  "key8": "4E7frvjCRaihSzbTMXCC1sMPLfPvYeTTKiCvHn7jCtBP3JFPCk3ZoTsUGQq9tFC5Gir8iDVJv8SSVu1TfcNFMQjs",
  "key9": "4mUMwLcfz7MTwQMqJV8ZFqpskrdkJ1Ngqpzpxfv4Y48hyL6i69PQVUYJSFjXxRshQpDbVTssd83UCETsKiEyukDL",
  "key10": "4Wvv26LrBpZVKxjFWLnnK7F9h4f5GnPfEayciQsS1YyfST6Nyf4XuurrxdhunkU5CtRscZbkntW83jwDQ8bSwsua",
  "key11": "5CWkS4bFLvywrFCcewSY7E1n4nkuqapYJWZYAV5kyNvsD8DJRSiSM9FWSJ24PDuFR7pQ6EBoa5VQD8uiTpaCudF2",
  "key12": "6Lwi2PwQdtKNcn6SSexi3tKZEWZPJ8nm5jXTQF8npNAAFkkgGkmDxXFthnDYZxQywZ4D6Kc3nZ4ZvsNLCdaSRXQ",
  "key13": "3cunP1onF36PUhZkqZLDHnwD8q62pNjcskDS3UL8gNDSFWyKiC3zSNHTF67TYpokhq8MaV6nS4CHX9VDZxTPvbaV",
  "key14": "zve1YiLkSFDzdhx6v9h1AKmzmyojwVpyYctRt6U1cMCnQZGPWoCHnYAUg5q8dvaoAwoZoCWpkn8gCmaYzpw64QS",
  "key15": "578MqrFZwdAVthkTPpyaJe5L9iuxNrrBADsVMUXBdf7moJQheRsJntHULjQRAnGFRL6C4Rugvef3GeyAKqjE9e2h",
  "key16": "2yGxQKppmdKj3n4DHKp49tJ8fe1akWBGSgChitNdmNzaFJZxMBFfV52rouPfPwH7beWxiyxF9d6ibcppnUoNVpNg",
  "key17": "4mkrbm9EtboQBW6yi3QdUJgAbk88dh33okmEfKEyCHcBLB7Nxp5n6ZXL6NdyNuERpkQTDBjkKEWHSd5vSU5dq9Ru",
  "key18": "4awAEPvhuRXM6zSYfoD6giFpNhL3M5dA8PngEMpKe2tQAYaiXVVMaa9eEYuVyYcsNPew9Ch4m8fNfmssL9dQ6bW1",
  "key19": "2C2rrMWRpiBsMe7XwWbUrjQREdCmGDSx3QgA9wWxnK66kaxyNdJ3yMEzZHDVq8bTYjupqoCKsWcpYZqg42opGqkn",
  "key20": "3y3Z1mLXdXnb1AGauQ8UzDDALkSHAmgAdqdT7v6MPaMs4J4wsoech3eHZ1wiwCz5p87StNvTV9DnL73z65BRMyrg",
  "key21": "GhAFDTMhVyxdt3Z7iR5DVhaFUqursJudEqVLRsnAiPb3fteFzFxzvfraVzHqKbjsb8eegqnkGYm67RKY6nwhZ8V",
  "key22": "5ZsEbe1xT1xGhWdcxKJDSRsvbMQdmBWucJhEWRSNeYCjzPi1XEENy6rTTvQ2JvqkahRWFijamumoXpYP8Pw3s5q",
  "key23": "2q3vHQQ8iDedXf3XuGa5k1ytRP1cV9jES4YwwkbWZtLPfdVT4NEQjUXE3eWWqebmdVJY27mSqH1siKxW4XjpPb5y",
  "key24": "3r8aht2pnZpkCBRQmtdTNxpvLn6RoUjf9g6bcWU91tcEM2Beww2ezs7j52uvmRDK12iBxYM7cRZVuMA77B5mw9ad",
  "key25": "3fnZTnCvMiwU8SdRH59UZ9niL8rFvNPGPnRj448fPod254k9Rqf4gL6Way9SKskdWWRPA475pWHmFb7sVkwGrJWj",
  "key26": "3Aj379jKWcPDP3iXm1HY3zHeDeZ12pfNaPfho1poshf4JTbH2x4NZPtJHG5R878tY6wbey59ppYu4whHBVR9pZ6c",
  "key27": "2wAXBBgE9fEFfgcjLpqJebx4wquerwBxkbkiWE2z7TB8HPog6WsPatGuekGnLxJFZP7kG1GWTzLq4DaQpKeEBqrg",
  "key28": "4oH37v9cArfsSgTNAnmccbnze8ZtjhrXo7dKTUYre7XQ9bng7guRQKbAcdiMrUfJuAjjDS2chJsE2vdR4ChdHQzm",
  "key29": "ajdTS79kGzgDoSXrYchFgC1QEFXo95pcDhbn7Vvj7VPFuWTfYQYRRPozAAXTxVXZk7j6ebEdH2LJ1hDv1ZxHEww",
  "key30": "5kJZGjkkbb5yktrayf3Mt9kD6Jd76Q3B7rwhPC9SiXATB9VyL33iXRJGetgTy9E5tZKivdNZmrQk16znV4ShFv1w",
  "key31": "48yJXZ3TRewWLPZzazr6vefJsCHwpqVGUX2tUxzh8q5AakBckrq8ePGoswmx1ECYBCQaSGdFDc8BYcUL68xJY1XJ",
  "key32": "2txkxsuE4uXc1WjHrMsTwNqCwEXjbReTREXBcyvTwoNYx3pM6W5Cqu1A5HRHiR7PjNy25Du3TpA6ZFhZ3vTjJSX5",
  "key33": "6647qv8DExDRxqdY3B1dpAsxShT2ZVFdEvirxxunsrLtWzKZgyJ4FFaGhiJefZt1YMu479XJJ3a3unYzzcEet6Bx"
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
