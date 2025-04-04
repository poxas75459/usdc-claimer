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
    "3nw8Cv3Z7Ra3NbGU2rm4EqFk5m8U3pkpZL5eWrBfbo2YUVmMTQoqr6yvB7WmyBzapPimdZigg1R8yvxBd7FLthn2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jLaixpdubbzZTiQ4E8Wr6iDDvvqWQabBznCbq4hJbK2thuyJbjWd8es9uXQFRgLRxLx5uKCsufgWVW35TXvw16v",
  "key1": "4xsQUYLvTnb9gvZ3vUoFbyu4hBDBUZfPBvcjSpqQpnrD3UcDKfYQG7Y5u6TP5upoui7na8U9G4xj1Dbr5dXmzpH5",
  "key2": "3jTcaNB5W61hMtcU4XqUGJRdEtvKpqtzdJEHZ9vK1qFw8E7N8FwPAY9rhTDDdemUkLFhQ43CyNbJ5G7SEbjEQ5AK",
  "key3": "2yfYhvprJTXCe7BXxkEZ8Jcxfjp8gtBBMMRWKnpFBgPrBC5ZVKn4NWzagjMt75tyYEZ5HLMGeCZ9AzeMiGV1TKCX",
  "key4": "3demUre7LBWQGjvUGNM5kHTxE841LsacdrgoGDDjUaBLU1fjAxBj24LiLpxXGCqDo2mGAC8pqsqFrqWuh4JiLBHd",
  "key5": "4Xehmj6mM7WK6FR9jPyyALfEvfcsCNBDGYoMbYUcZtADMtHqVk7re8iYhUMfEx7Z7kpXczyFs6x5y2RMnUuNcHzn",
  "key6": "2p8ac8ia2A3bMtsPfsPBhMNEvftpXd67Gr4c3TXdWX6eNf5TjJsDJ2ud53aSCxhQbD9Xsc6tJEHoKaEaryLtBHZh",
  "key7": "5itSNetbkjje5ZNLvn6nYtSHvWdyS3398Ko8zN98wdyKHbwrEMkifdmnaGzCBxXpL7FVdCG5XnXSNcLwP32U7EZp",
  "key8": "2dUk3HLfmi8bawnRf1C7HQza8HXDg1MEhmwcWkJZPQ29EcpAky5CGqSDMCufcCaGBdVAvp7a12b9wHX4aZiyHS88",
  "key9": "4Zpw5pRAuDU19Fg8sXYw4iXRZTG4j4YcJoSPdBuNDRhTxjbzo83iAPaANX4RNkiA2DAhxvhBiWNkwsDj6pRJiuNV",
  "key10": "387gMx8nScgdTVymCdhQmR727oXdzsQPZx65k2KcoHt7ehHR7VcB2eCJtNzAcKgpmKeswmpHt369HU9xQdJgAro4",
  "key11": "ZSok6pBevNvCMHFkTq7TZSfJAmhS7gqouatVtdq8Kw9Ve55BNdkcU9EJ5HuKWABKgzDiqtkyzhGh6whs6N3JeRC",
  "key12": "42t7qDCibcf6tiXbbMg8KinLFU47zThU6ogCVtEn7S1h8h4ad9cA6tRp52538dUfQTExAcQVPDkDwaxFmr7pbYv9",
  "key13": "43KWfqQkn4tJFfDEe3ACnjos9ST1yDkxZeBpDRLuGXuNkqKL1KzmxwdnrNoDQJa84pzNptkXRDHev4oVYohCFrst",
  "key14": "DMwBb8bBUYfGo2nh7T6tQSs41Jz6qAXLcMnraodQzdhF5rkZvvcHuqXeNbYe2n4jBoEiLQzGVuYxhs9TiCe1XDp",
  "key15": "23hrxrCJpfGLmJ4UaqwLHP1iGuk5y8ncnGzJMdEbycpzNWFH3G4S5M5DiphKmCgktjpNxNyBN986buQqjsg8DZMQ",
  "key16": "5bT4cEMKXXsnnPuah6kPt1HpLPitftx5rWugndg9sfvTaoAgMMcZCvCpzrR1jZRHmQe9bAhrGMFiXexnjLwMi19D",
  "key17": "584pzhGHWxgiJSvyRWMACtb6Qftgu91aeNVk1tW9CuFGsesqbStQcqq6CXN2m7Am8WVJ7shs5yCr8oAxvbxTrDSr",
  "key18": "TjtqAp3kLvwzNnojxitRF4cbYMYzEqz3sfVcv1N4AmEvWSW8uuKBCAKbbJ3r4Pzy88vhfQBFeB4Hq4JqK5R6Dmt",
  "key19": "3LQoRC2ZHGiufHz58gt3c6bbnwhYae1QPy7JssvayxL6HSrBBfUu6VRSHhjASa71oQgBZpUiR6ts4rjDxjXWSNry",
  "key20": "3zyJC195yM9Sta3j13uB388a5BCFGss9BZqZPwjf1Qz1kqK4U19kyJBcx7GmbZc6evyzWtoHY5R4YoMuoFJLKZDW",
  "key21": "3SYgayqWkdGYPHNu1SZeJRLX4gtAREHceAqvXQQTSstjh3dU28vevLL5Jd62Z3vtzW2gNxbJ1XzLeydj55eT9ohD",
  "key22": "euhckxNqVW3NtDV1qSJaVkqKBnsikPz6WBWTgrHnSTMoVAX2MHwMmqpuf6mBLL7Rxp9YgejWppQ3ioNBanRZFWh",
  "key23": "668yJj446GWVJbw81SWik3Lu2WQP4sUXLtzGQV6vWuyAvKtCQyq4zLg1eXLF3i8k5QYTEQLuFZ16xT1Hzc1izMGf",
  "key24": "5gu9oWHqm2TDo4GwF8PUALJv4ThKT7r54Y3deTVq8qtL8XEe5Vu6LGL64WN7BqVH3JEznsRE8pKDXywxoXmcLU9i",
  "key25": "5PekxhAyhX2McHhcXJBpdqTXCR7UdhyDy46Vjcpj5UaB6eEmPc3cejvfhi5ksSqKtSTRzpHKGUV6E7jVQY4kYYbR",
  "key26": "5nKYMgqSVkYF6oZKT2gbivDETJp2RQdTaXB98vqJoEwUs9WgGLcqxj2rafYUS9erzhH8d8ywzNCkYNCaSfhRsx3V",
  "key27": "xhYm3eWAGDjbRJ9os8GxE2D4zBu5Mha6RwnSRNhiFAFKHrHT7aWFii9dfrVhK3uMrd6BVoWu2kkxuXC4tpkUvVY",
  "key28": "37TMzBpHe97Bk9qXBcJQrWtxvCPLZ8hLcGmiJp7i2WEbeceU91dUfQVA1SGZLefWB3xoxj9iZY5ztaNqpey6fW7Z",
  "key29": "3gs66h1Kttiwgmiikes5foQaDJmjxGFa92SzJ7z3FjghqsWbMJMTbmhT6T6BBKRfdQBwBcCCHQXNv3ChNREdviNs",
  "key30": "38xusUUw3uBuaAy7FbthCZT9zNSjz2VEKDc1feUaYKiK2cr5MpUxhjsTnAN7huQHxfkguU3AzsbisnKuegifShMg"
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
