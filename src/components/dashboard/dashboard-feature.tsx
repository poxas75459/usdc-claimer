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
    "54E24DmLh9tdJzB2pHwDxNvmUsEx5V17C7WhBTpSN4iZ6f65234zLi9NpMqrpdUpqKFar1Bb8qeuh2UfEAuNknpy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jTA9H59VV131RACdrrKVVXcMmRJf9iwxeTErPMuiHCf4svxjcgF9Th9T1jqghWokFMHhCbkaoVFtvkwtHYkSUqC",
  "key1": "2k7M1wDqLVuqBGeXfJUiXmDq8uBG7PUx1Lya5D1frgwhZdqDBrNx1Cz9p6fC2fYmwqKZnSz9yrJGVMVd6gLh9zDJ",
  "key2": "4hswn77NvtUvmuVk1snDenDXHtbRZav3iCGVaY6czbf5nCwzju84x4gUCKkeRfTf7esF3ZdtHPHATj7qYuwvXfPq",
  "key3": "2KfGAXWjM2CbJo2a2R1T6fcuFjM7XfNWBmw8aYrMBXoAxAroCDwHkbrXrLytFypDtEh4fBuW2o8ryT4EJu3qfETT",
  "key4": "VF8cseJT444LNXHzg8yug6qm2rA5gNsyWDLuqrUp7VFaffaf2dKs2K2MmwSKjmEKjKjpuoxvGw7tyT36Rgoxkke",
  "key5": "3mS5vAB2ZRzHMr7wwcJf6pQr4yDoBqUC3YCornrY5yoZ68VdW1X2gTza784cqaHTi3EVYLW6HYTCmgaomeGJpQQX",
  "key6": "3Nes9vy8Z897fDaRgFeyCBhiXSyyac1J6oh3ApPM9fyLh9NcaiPPtPNkf9ypsWTUJh6AnqgYAX5hjYgjWoQYrWbd",
  "key7": "5foD2quukqot4HLmBeMGKjcKJSQE3tmX6EUQKBDj8JvP28WuxxXvm9jHBnQmhxjL9iFomMbpTjbJJDGMmyA1GC5V",
  "key8": "DNxBT8EaEkZB4syp9raDQ44paFQhy5hyKdkwBd9ZkFsj4Vguorn4Pduo2cYD9CdfQFe78EbYtFVpmpJWiQRZcYk",
  "key9": "CcY2YN2tEf9AGYrxNCoSZ1MhLGqCdD1W8gg7FpeCNhzn2DEbkECPkF2pYoA1wKNVhMPCuaEwHebmr51QVSe3Gip",
  "key10": "2f9zusT38fpyNh9xSLW7E5JGyFjd1QKWFkuquRDEeazashsxHVP6m7HgXqc6rWfmqf5WDruGU4JZBx4jiX6WuhUf",
  "key11": "4E4ZHLwYTxknJ4ezHx7KwFWHdDUjgQGeCzNKBpycAedLgxe5StHyp9Pgg3AdrZ6t8XdT2SqHwbjxxPbKV1rQEo95",
  "key12": "3enih9HwHFeMr4xn6GxAT5vSzze9mk4b5JVKYr6873QYLTWF4FY3bybtsZq5ARQ4rE4KHRCEQAKteqoS5KAMjGx5",
  "key13": "3o2YsbEjdVzhTuxF2XMUBVBuyCQN1HbTMK2ACm7s2s92GRtUvDSuhLe7CMbeUTSPpP9ihTnKCVSj5S1iDTppH65p",
  "key14": "2DfPwYSYTTfWqknUeTU32oQAYkqNmA2KdA2WU5NA8GEmsybxkqm66dTCmwmvRADNJGRQkakZ6psKDnjVzUzRMVAo",
  "key15": "5WBge8vW8gfXtRoqPzfgYYGgxz7ZCbAaw2d9zdu78yvz4oeCkmKV9dMn3vQkbQ4NToDsCdvB7iMWjft3yy53misr",
  "key16": "65RUWbDi2BhqkDjug71RcFy6NGdfJSE7M9hocbsjNEcuLRTsZe8hqDqEnZL7goh6ekJQr9dFBFHHHH1ZBp9KQ45E",
  "key17": "T6fepPzHxpJtGD4JVa3y81NSxpdGjuAeXTd7uci4jSAiCviSFFWh292cC7wjFo8wDne6kyNke76TnrqBae9nwZ9",
  "key18": "Qjc94GnxHfTQMcgrhoPVeFYDYo5WtBWrota9dUbMpnRX2AQdVpuzJvMfHyCcPy74RdS2yxpmjMiNUww8HedZTho",
  "key19": "3wkQmbM6zp7sSW4xADSQxtdZB1g6rANvEoaK4vpfG2KK1in9MVNZfAdg5hWT7zxfrBXnECNdBT7eqbJpcjbJYZdE",
  "key20": "34zAgFxhCrh1wn4tfU5NzrseYuyx5J9nU7xHVhpK9xb3RHB9m6cvVtVhMMifH3ShCWJ6TwiJed8tyVjY5XCRkM7x",
  "key21": "Pek5PtjoWr5edokUa74PSQjPJLt6w7LUVGcTMPLSC7p7LAJdBZ6udCpCYDHrRo6bVKWejGo8t6Z34aFdWpMtLNc",
  "key22": "5ovpBzUMwh36rbmkTH6AYDZEh7vBt1Dn93tJuAy4Ws5se6ARBgWhb3uBikMq5jGF8HyRzJfNPjvGYrcwG81KPMym",
  "key23": "FVnM1WCvc9yUgyz9sFZgNZLi8tPfTg5HLwS3FLZQgzm2AvFEu68ZWSD5ebbTnfSC4ytTj2UtkojWURgXvG9EFKs",
  "key24": "dPrQ5w8XNRWVmyvFddnsz2CdM2fQ1V6gXyfwej4LN2Qn4noyEF8tB7mGGTqkJHKSEK7HpWcMJQyqGzVsB9M5NQ4",
  "key25": "4mjW25Gb5ekKjLqEEKFf9Dn2DTEYmonDnMyXiz9Bt6mf3b2Xs7ekuaMNmLoqBMDkJhDPAcQh7ryhfJeUTCemSrYL",
  "key26": "2Pi7pjKSCJUgSe3sdwCLytmXwEDioCAJnArFZ6nsgPzC9rR8qyY9uNqK9Fw8SyfmHPNnJ1SiDEDP8XkEmFZLeUJZ",
  "key27": "5qq4HmUBknSwQ51FcBLHZr4ycU3mxUhLbQp4jTjpBtj3PsdeKLBnXKAv2GiUTaSpZ4PGo9uPQCVN2pf9NF9oAL9K",
  "key28": "2aAhgNPZ2jGJ41Yu31utHXeAH8Mbd8kJRo4QEW24Zy6qVuFKMz7BNw22dGgPHL2tKToFM8tfk4G7j4Fd2qPkGbNf",
  "key29": "3Hwwz3xxPFMNpUWDR5G5iQDwoQ9x7qBh4FQY2aV1qqMiWNGSTZ7FLJPgfGk1ZqvRJwvk34toHeoCVsz3UbT3zbS1",
  "key30": "5Fow8vCqXDigZSLGjaBPQLhuLB651gL7kgLz6LKKbZfAFQ3jfiDsjPHZAHb74K3S6UJyGSss86FLVQWxrvgNVwHa",
  "key31": "2MLtKPQUxdw6Pe6yZwDJtXxmRdydbVU77wZMtQ36Dfw6GsWCrzNVLPcEA3EafQUk8U8ZN3X5yRTYT2vrs4ivCwyu"
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
