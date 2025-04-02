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
    "3V5kjKrzjQeNePSQPGWPaZVAMfSYLjr9GUcMdtYypyft4EhGqbGTrEBGzGPSeyHsm2PgGJWrScq7k6nK7tPoha7b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LJ4skWpZYmHGhB2RiPnmZRVsTndTCTFsdsukp44Jo32Wi1XjuY1Tn98NodjuWUSkL3x3kNn6m4AjYCPVU8oJnTz",
  "key1": "zLverBMJ1G5U2AwJ1f7w2EeCdnCcT1LrwJ61vP9cimTtBvdGjGAZ6RKzvk8CWKRH3Gdg95keisBPFSwWsxscc8H",
  "key2": "2jLnL23aWYswtxDdhVwGobFfUxGumsmu96LyUensnQSogVkagWySFyHxd2fgKAbYg41zzH5b2KuZNKkMkAoqF6Pb",
  "key3": "PdMB6ofAgmMvQCaAcXtHHSxMZD3VoqqL6LHkPgrrc3CvRtkw7WK7AMuHyGBaL4fy9AYKUequBmSWz7DAYu1WzZK",
  "key4": "oDyKbinZEekqn4mQW71K2Nj5nQZaEr1AHyX3bz5Ke9j4N2Kuv6RjPxt3soR5Br7PrMun5T5dkq7LyyoZ37Dq3fi",
  "key5": "27PUuQ869QaYwBhdNZKJHhptPKbgLSNMA5BSGSR4LihPUwr1Gz4f2wsqrQAXvaHJoK1oeARo7PFHgtJ5g5Pt5E5A",
  "key6": "4yHFRBfRizN39rdouifeyxMoXxHiyKHFLtc7KtTkb2D3hKoQG92eSSVCTcG6qRHSTbLiDzvR1mNTUf5rastwgs32",
  "key7": "4vbkvp4AycfmMdUXNnQHmp9iujus38HS9zbrAVbG3f1j21LCxZUNjaaidSFyf4BDfyJbXYiEwh6h6EWd1UhBQFGE",
  "key8": "4Q5GMUX97eH3ENuNtcy56FZTejMPQ89Mno6LBjbHepzBC8nZczAWZsJdzszWs7k9mboNeqxYfCTkrK3m7rWbWdJe",
  "key9": "55bWFrQP1bxhyswmXe9vsPwQoUCVwMUarEKVKoG7H665pDCqMrunbAsFMsXLG6MDwnTir7zqfuSgdCQfGLzjq4RT",
  "key10": "2PodPhWN3hVzgsYMzNHRxfZcejwXMzqTviCNr6u51EDbNxieFcq9XPXQpk1GEz5JWBN8rS98idJeLF2UBUWt6R9Y",
  "key11": "2nj3PmacZBAXe1CL1oxPkUYbEPkUMwi37k3oRiVCGf7vY2ztJE2nHKEhaz8iehguubuXTFUhtcE2cPz9XH219vwX",
  "key12": "EgnWjtTJFHqbwvLNogVzXKbLdNpfNhJWTYowFusJfrdaEinobvCbvTBHSGobHqdMkBRXWDwgHrogbt46nEEnj8z",
  "key13": "3PPKkuXWUjCrc1o55XC7gmCWBTLxbSmwyd8pvp51n1gLoXAPuQWHnLHWcfw7ujWh8f3NWBZtzZpig6fTjumxz5yD",
  "key14": "4WRGiyVYZ1qjN49BdfrQEgPL7kNssznfZx3XdATMsM5sZWkk2PrEpf43KuovBS8W91wFeMamw8ws8zD1FsVjbyJa",
  "key15": "3xkUWFPk91ozXr7xJvXNq3efodTPRWVL8h7wm162sajg3gQifNRrMaPfJeaLgBtSfdVWFZf3GSnAto3ZSw7RJxRC",
  "key16": "nhNNRDLjwppAWpygKMepuHmDsKwqCPsUhGNmZcuD2Eb7gVzeh9J2WUHRrBjMvur9vN4keBLRZgthdHT8u8YqWxW",
  "key17": "4eNssBxtse6TaXGAtPyxTk2YZ2gx8PZALcL9FGKb8Xh2L6GkNw8J7um62vRackGXCLjcg87eVFDzUjsXJByQVVA3",
  "key18": "2JBKUUKb9nYY6XRWodfJUrjvk6nameDtHMXv49pYBX3X2tohjuPGyhbNcHmur3tW4G2raxJbz4aj8DhdKD7W8nn3",
  "key19": "2zVVu5nbvZdLu2PNv56WpDAVVjDNxJPSZaer34sM8Q9GQzYLHcMc1qjUbUfaJ6Gr6RVuzGjU3GA4d8uv6xoyUjQu",
  "key20": "3Axk7Qo6GRbfhu5NdLf2WjPnrGwUXpsj4TgiwKVUE4dVz81F8xC6csASG8A3yRRrcASQpiWj4ApQmzgusdjczFdL",
  "key21": "5rvJbD7dihjPC47kweLdRMvGivEbXD8cCXH75nTSGMHhNSgUSS4j2LMMsCyVpUS7RLYBUhQxt7iNFSsLABq9wAZL",
  "key22": "2QcvSvesNjKVifTuZgF21fb4ht2vEEA1zCrSCM9GLCChS6iJBKgXbN1n6exkugcDtjB2yYjBCmazzVWP9JSU3Gdd",
  "key23": "2MmVSXcUv9tFYxHpYwTuHbg5kRF3eCwmxyoGSEWB4gVtatPPZu2BqLwYYoon9BR2DkxSwadnqK1UFLrQ2rhbo8zK",
  "key24": "4WUDhBDh5nAw8N9sH91nQjSTSnf5MEJ9ADiypFrgtZ2EvXNtNBAbUZMZHoJ2g3LhLfTnerUG3FT4rYL77qYsNzA8",
  "key25": "2BWn7L8HFyQpThL9Di5vAMoBsaY7zF9hM5rhRjKpLm8yZP1HZBwsucbwNRdENU9v7SktbuhZB1BZ8KzcD5C3i6kx",
  "key26": "4oDtYBwq6rms97iLquRqWd3F55LobgssXjEN9suVtYKrWrWNttf2duhSxjGwzX69YqbZjYRCGNLLD5ABVdYKREJh",
  "key27": "3CpuSH9bGviKS9YEsj2N9uVkCxEukT9vihYhMyvsMwhqyRuWBE5LtEQkrt2dweZfqwLCvKLTy3AtASpsfSEYBs9m",
  "key28": "3tuB8YBGjZhiy4R2rLKGx3ohkSbnn29j1nnB35koaA3CXJ9vvY3rLGAETLt7XYRAsXBcz1ySAfZhAEBgsu7gM6Y8"
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
