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
    "3QaJ8KVnjHUPCr5RsfDMrhy7u9tqA3zvfx8C3JPfE645NajPrkJvxQ85rQs1uksePdnAWgP9z93QussiPSXDZX8w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GuxyzXkuTzBPUnbQc8Czq9ZbtDFgytTKJ34ZHeFbefzV5s91jmGVi31XP71dDcwz5dxY79pREw52bPkbNMwqNf3",
  "key1": "2DknbYFugCsHBVUkzU297rctwUiQU8F84ntQ3ZJHtKfEZFF19Thz8FdXGkZwErGYpz7uB1D6HSUjvFbotnBhghCq",
  "key2": "5Gu1eqTCyHpaXc6cYR72XWths3Qu3C9xhHuecQWTjZyQr2N8gLg5GR8hNextBoCR4utq9NkrQvu93uWxf4d2fy6a",
  "key3": "5o41gTYtVJrPkrioNjENyzW5SSuqGLkLCAxn8JFSDV4v8YihWWwZmEmNJo6RmwVYRTaaNMvzT4Jc4hhV2TfYuut9",
  "key4": "5tzQWuChgiCBnfbPX1PjKLo4Vfmzkd2drpxSsSHgFjMYSLDzZNWA4BbiuQH6iMa7AHKAFjWrTbvqf4n18V6XrEJL",
  "key5": "5eJNMKP4tP1LWquiGKyJdcKkuWwdh9V4YxNi3Ud7vaoqaazTz88QCNZoryDFVdbXVj7LkKfU1Xmawfa5pf63Dyk5",
  "key6": "3RPV7sfPcdXuHrj48ZUJWdmFrwXuHiHpKUy3wqB3M2e95egm11oz71RZs6yEDRRXxfbA5rhwPbwSnE8xhTdCAqJS",
  "key7": "5YxSLjHY7Pn7rWsVcZom7c5Mou3so9r2N2DzNQbG4Me3xJjpF2iCoCYtqAhL3ZSmwXmgvsFkxr5VNd6YrzKG222b",
  "key8": "8zJBoy7UL9qf8ajpztEzUx7UMBL1h68e4SbMwMYXAWGzZuzfqzo88suJgq353Tx8wJHJPapTmxzxRRGc5sDim8E",
  "key9": "4KXWma5E4vMRx7jEQzThzkMXaBwHJyg5crio77fxxt32ijTRaJDSkeM4dD7FFJvZ1Yn4BMJuBJJ5KG783tSGJdtr",
  "key10": "3YGLJfSRHf6vYY5znG2bHaigN9quTN4yqqobcEjTdCjTL7eVBSyjiB334dhSXDT5Ymaikw3VLJbTMG8KC6j55rkU",
  "key11": "48TbZcBeyst15Y1tmVoc5AM9wHepMMEw5bJGtEHmApqrs4RWsE3spjVMoTe53yvjvoXd1AJrL6hauPgxGjmyVsYy",
  "key12": "4Tckig9AZmU3zBykXivewuZWJNtMrTrM1pkjmxWApimieWhasxXPG1USQ4uc2xndZBd3ED88SV8XP6toirnfwvNs",
  "key13": "2Vjj4iZpk1BNCoamHQxMmUXGDQsTR83GjcsVj3DKs4yG7QgANpyjTMvqLZHQcFgWVmNr4YBha12HsdH9Vy5RGSTG",
  "key14": "27EtstaPi9fV6tbtKn9MG1RdzrPUucs6dvf3628RVJzpX2NrwrMrqKQ3Jtv8Fx83CWQKndQWZh4YMN1dUAV8DjWq",
  "key15": "64cfKvacjLxbYLPWPoJ7EEQ2RvMsJxP3mfT29dJEhGBUabNSuizV1K4YEDCAx26Q9ohexGoaWtX4v6YuLum56shp",
  "key16": "3nQjqT4gQX5Yi6KZXD7QtBugdKEWQu3hwh8tPkjWsXzaLN6SNZN5LezA5RugSvcRk4RPcDPUUKxxEdFxgB57iehR",
  "key17": "3XRGispFRZBx8cBgPMq9p7kP31YbyVHRqhtVT4pY33QzZRFRtabS2JeNqE54LPkL7qTPiHuRaoTgKBkUwdZrN6DV",
  "key18": "3QSCgNSHhH7vJ1nhn1b7dYZUEgigMXiRCmbvpmb5CUaST8QymNsaZA49YhYJryRM2qo4yJhP1BkULPvvU9uDHX9D",
  "key19": "3CEpMhxeFgjuFGmTZ9BR8mcB6zyD6E3BC3Upziq5T6wgpPD8zdN8fH9D2s6pEHhjfmTLbMERKAP1Z4sPVyEBHiL1",
  "key20": "9jgeg7c8oEmnQ78dsb82tVj2PRXmL9LvwgLjwwQXeN18Btpsn8AaEPEzHHdX67onuhKK8r5orURqoSDsrriB31P",
  "key21": "4z5YTvkJ7XR4uEQdiC2UFpwQBBj1B8bywFuidPiqdwnqXuYDFUsVZze3HJZjvegEUDmsJzX8qovhMhECgrgfYE6t",
  "key22": "3vq5ikD8wXGQAj9qdUjcB8BLhspvpqY5DCA5GTx57f1vDqbqAyARRUEQhj8XLtx4WkMvR1TK4b7rdq5bsQFxm19Q",
  "key23": "351Q32aaYD913CnCp5cYQShiQYjaHLFhws6o1R7ckNQv7k6rCdnbqCb5jk2iAtYL5pw9A4V7eeMdsfkZnV53Wsfu",
  "key24": "62SFSFibFTGrEmKqNeoRtsUpfKp7MeZgM7SPNaEaRpdS3hcHATDnf3jyu7aYQqW9dtkzkbmtwuwxmYL2n47oU6gm",
  "key25": "4azZTxnRxCkDKmKyzRqRX8Ck4aZwNohN7ymYtQ6YKMWycnpp4suivEKt265HoCJrT3spPmkX3ike4Rx11pvjgEKd",
  "key26": "5G9YKX3PM7B5h2E3Ahx68Cinx26CjLLfobModi4vxDhWHEMFCDHPw25eCpZfuGSvZCxWwA4nnUpqVg1g67VovMBY",
  "key27": "42bap3L3EqLtRPmaWaRjMau3KRzYwexZ18EYZ984v4rGaNkcpkfAujK87wReQECdqpQmJ25eacgw9a6nagcfqY5U",
  "key28": "3xJ5d6qo8esBVrXH75brbMhaZhdwvnsJfwgexfQ8Qi5tS5XyeMjf31B1awFgV3WH5G9XL3UnVpGgBeH4m7JCgf3p",
  "key29": "5iC88qHYznuxERnsbf4hAsWC2zuLQrxGPi5zgVY9KN8RVCbJexDtDuz5c48mmv8NoEQzHe3QrC5GCqqp3avXeopk",
  "key30": "2ZjfB7vvgetFUjewj2Vi7PafdhahR3HDF4uiyETCYfXYuyNoPycVjWZ5urKGJT6YAkqy5i74QeE2tvDRpr2KhHMr",
  "key31": "4aDZdFTGxMce1x9CPxSnVqM7UPboxMByTfzNpRYKFfX8iCLFopqNiC9Vwk8NoZrGXwY9JFrN4E1qaMBEjGV5A8j7"
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
