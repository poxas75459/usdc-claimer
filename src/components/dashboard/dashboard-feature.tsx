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
    "4yJadQMWruvKtiszzjCCKoBu9gx1XGzsf4TJtNAWecFWqQE6vdtkzi6zdzT9CXhwxg27VxDAkCFbqNBxCnLJEVry"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ThTn1iDqZkdAwbTvowEoHn4WKGXWUr5EKhbpVfd7exSVy5VspAoXPBvibttH9mu59JjGdQ1r8VrDBubnu4aoyL7",
  "key1": "5R12vQW7zKCWD7rxApUomq8zNBaXsmLS8wsW2h9gG5EBhKqrPh7s4ypA4siLg7Uo4CuKtMt3pEEvb9rVgv3YPDPN",
  "key2": "2hbZeLMLCB78mT9rDXxPZr86LaU5JFAdQNZeozg8m8emP14r1wtaPmQ8kdzkpB2BCRoJwsi7pm4CzDnbc6ccN9rg",
  "key3": "4u185pmhQFYCpSDUNekrCrwwFJXSQwxJgrEu2vZLqC7Sh5pToru6FewU6eeG3vqhdHbAN232CXVuWWok9ozuqCsw",
  "key4": "NzMspTjiw2H3rz54UQ23EKSStrNTG9VrrkZva68JaxKsgTmd88QsRoEPS6mkvtnBcYbADxX1gmzLzTLBsgJe3uo",
  "key5": "3UycGE4p8y1SUu58sbZpYjrzAxgfyXwWkNmXb25Emspcb5JQGv8eJp2kdRRSucDF85URQ4tKaTCjwMxcKSNUzAbH",
  "key6": "Uoejp9SKhQd4sYoKDTt47WfPeuppi3DsMcQfPpCrc2WJMbZSww7bFAgxhJYC1wpzipLrBTTvqUN3mDDwMpcAsCy",
  "key7": "3kHbCwWhTNN6UELqkx7KsRk6qVZf9Pu1iw2W3WuuX1eMCzNwoiUPNT5axon5jySAFHUQy5rcmMrG4CZYiTJM3LHR",
  "key8": "4F3YJbg5Jwp28sbgGjQTpDZafy6uNtjS8p1bk82azYyR2q88cZaUzjygMy3uv5vwsGjmfURqxdxiFpcmaR7FTw1e",
  "key9": "546fkxKsnevjiWab4wQ9JTM5CEX5N2vCPcixEXKUGvnA6XEjq2pZJRXpmTkbPNJ53CGVE9fDxyaDfjd72gwMMUrK",
  "key10": "hLPgerY8eQghWVsA9cZmGiXLiJDvVvFMbYww6vh6FkFhaMtFmZ7uhQc7oDmyxP4hAnLWAZD4DCVjLaAajR7ns31",
  "key11": "4qnVgNjMgTWSHCV1UbcN2NVp72H8nhnAownbJXmaNytoMXjLRudHJy2JJgmFGXNmNsFDnLeLXNbkhvMNqF2J8fYZ",
  "key12": "3HaDXEbkFSzH1hfsGjn3n9HGGuMbJ1v36Bq4nvrU1UwCDW2Kk2hceRSdZGoeCpynJu4HhrDcpDfhSK7fS4nfqJ4p",
  "key13": "4gDvVfEpzpVZCcTUwEHpxPmWtckbCzBDXVRP2X8byHfaCB4dDdAsvS5wyxmUqXyAhwGV59neuSxXyTxPvKwRCu9J",
  "key14": "2fFgsKjf31RuXtB8T71YfYZ3Asc9ixrPCm4kJPcJ3gf2XkDHTnVRXQJ7T4Gv8euxKmDhBiMQUkYKn5MBnuyYcdzu",
  "key15": "5QR7j1uhSxuMuRJwf1AYExDGcqMoUx9dMX5HErXQJfp4ZnmE9MLtZ1BEgwpFLhJSs8H2vikc9kzNb7tnYfaEtbEf",
  "key16": "22q9wV93ixTfT9kRUA3e2HnqhrtY5scHDizckAQTrWCucMGqappu1kfKbGnL1yPh5uAwfkiFp17yk6vZwkwFXKTp",
  "key17": "2iUfxD5dthrMQAfuNsUKxpnbMB6SDKNME6PpbXth9oQ6KNeNqASKZKoevnhWCmxgig3s3xLWNBfTVUQJwe8Fr6hh",
  "key18": "5bvpN21pa5PCaYwQJCyaKUfm9sfpSZgvXB26zJ9nWthaCYw6oAQNnmR2mmFMWJdtSAy7LuMJGx3PXg5a1zbn4uMy",
  "key19": "3nJ8Y3xmwawm4nYsLMNPr1LiPHwuT4T9i872Psx3qjV5pUCxukGqRLNwJmwT93KhJpcav6iYye45tqouZwTH1pSS",
  "key20": "3d5kD48aUMwGJdmozE6f7SHZAFGK1MAtjGjAdn8q5VWfyLk4VAe9DbPRg8oZ66jMuPVoxUmGAkE14fGovgrByye",
  "key21": "i8AbVWJtgp4zZcV7HqexLrRruT9Wxy2dqTZMusqUjhKgDRbJ7BdEispdLVpz5Y3GRyD8mjudLvmj7y5XNTzPTkN",
  "key22": "4CL6dmok8azDwAdrgBosLmTwcZimQAF25dP5SuGL6hy4XUppzAkUEYNqzqxKcSrFUemnCmq9QtJg8iyU2WckmvX4",
  "key23": "mzTdRR3srwvzFmefDAEyZ1iqCXQ7DgxYHWLzn2Su12ZN8xAsrKxeR8uT1gTf8LhJAz3uuN23n8kBDV1jtN4mwuK",
  "key24": "2mtUr4we69uiK4ttSyGZhXReGdnN8NPTwjk53xk5SHyau3NEXsPUwdAGorG7Jb7MmRaCXj2m3R4SKHFMtWdanDsU",
  "key25": "1Y7gbwDbR6qfANBpZm287v8tpLE7Hvorto6cTGXTQP93PwTdA9zAjj1hUheeWXHJNLwmVtuPggM1NPv6a8R8TB6",
  "key26": "zbW7xVzVMUBToMNDKHKtE9z8ZvDNQM1uFZZjZTdQwibPx9L5zz5zN8WQZphXVRxUyjKmjgYteMedhRsnX6F9HZP",
  "key27": "63Q2ufK5ov5DmkteJPF6Zv3J9WYjwEqs2k1edbiBtNLifYHHq1xDEcuHN1CoURzWVUyTkviUX3i2TZqRUcEzt9ah",
  "key28": "3N88w6aErn8mnkYBZREUG2KYAHU6b7t1rp9TWucj1GGQrVMYvxJiEg7cofqz9cL87GveZJkH4aoNgQP6yE7BJy24"
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
