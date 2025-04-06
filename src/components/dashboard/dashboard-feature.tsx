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
    "3JQMKWQG8EbaPbeL5t6ASptDdLVCFehLYoLceCddfE8Kdh9TuGmEyZ9LmvzLHbk1M5n1yYb46e2tV7UUadp9d65u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nXmENQEBeT6FR5xe9UJC3hLpo6fh5zdWKtKs5A2JWTaw35UFBtSKx19d1CjDSHEfb3uxiFToLUoSdLQnHmrFhNW",
  "key1": "3jM59WDXZ8wWEgWZ8NVqZPoAhQkXY1pQ7RdR5r4J5nj5TTTeasd29YZX4ojPztKjsJoPvjdLWXeWywStphYQLg2F",
  "key2": "3yEST9fy52q4qVtFoBwA9Xh6wnYBpZSqRZtZ8e1JuWTPWgeNWrYVXwPoVpgFkU1uwvNbC5zKmn5JdxF1p4PBRstf",
  "key3": "4gP8quUgcnhyA8B43jEG1Ys1KskKBdgAd3JBCM3PxxxLQ33yhbyGE14zZ7vxKA32Xjjk9YKtkxXbMaq2amqu6wWZ",
  "key4": "2rprdSr1zfQTBKxTowL7Dj7KV1tTKfW9fLjVYBubQxgCsiUSBKP61hqRvwWkCS3exLNZgpFpmH5uqgsFvp5kQo91",
  "key5": "sRr9VqAbZmEAZrReuUPiABkvjhjo9W2HrZkK8R4k3zBQtiVcMeY1rucZdASNmuC7oXfnMd9rcZQd2vyH8aWhpaC",
  "key6": "4DeachbbJ4gJNfPTgZJXDuZ9GaS69sY6vs8UVPeyVAFmQknSgfmSemmWL7SLzyHis5KSPeiTsBNEVVQwR3ejFfd",
  "key7": "aHUwf9X5Jm8PEuu66NcA2fV76wLZde8XX14NhRvDsb95n3jaXV52J5LVW2zjfhMajk2Vc2GGDi1xdkUBVQoX1gE",
  "key8": "vLDjRzXasbJKZFsbpaHonv7ysZRNbvVpWjcUWhFUhPFEncnu5WkJxV3CB8z1kRraysFJNvVRVtcct29DMX3YcJE",
  "key9": "3h3oMq56NvXfZ5JjYkL3UvfKKd4T8ZxAFwZ7fUgLhMWGHU33meXqfVYd4c91ZaJPkGxvHrRGiTa9EBJwsDBuDUE7",
  "key10": "2T7iMeZJux3bvgFQ6GKDieKG1ZWPHFWd5whboHyxMKPnixWpULTkDwH82TipRPcGVQygkz1fhzGLtx44RrqRFuQK",
  "key11": "2Hgi2wcuqDfEEhgbF6kqqaawmUBM9zE3SdoNQYZWzc1zD9ThmRHwDKrmipjW9psrSpMMib7s8p4zdWAFwNebgSwu",
  "key12": "4hVARsBUEHLQAZyoMABzorWaAKEjhJwqCENzJHyHq7ruP7gFucHntaBfRkxJwVen7zPgLAnxYA3AqttJac5i5qSR",
  "key13": "5E2ikwciSKZk2uwEByaNZsGfSxNxbv1UnzgonTm8XJ6EPMvhnaQ7iZvL5fWD2SrGRzaBju3KgzHYdYLYTJv5QSTG",
  "key14": "3skYWhxyrbrJSjQmUFMcxdKXEK35Y8MAKUcHNSm9Cn7qFWiKSb9cCxWBaFY8w38RLPuzHZ8ysyqMeDXzaYppsqYL",
  "key15": "5QyCdhfHKarYTtFhNGei4Pxxgxogp7y4JVHVTAKZdP3mxnGXf4sa4A2oTmnA5H7DuoCTVz3XRXAYefyPfcnk5gCi",
  "key16": "2chnYBXsZT57Uzm4x5pRS1nBASzAMALKNm8erkLJSAUb55X4PFFTbCxA11SFq3vvg1AxwBfERYV8CPos6VwW8vkt",
  "key17": "Tofnv4YTTvEgRDy5yRhJBEBaAq9qAXzaMR8vZiGmAqUsgL8oPaMp58iSNFjCqzoLhUHFrRgzhwmQDaw2iSMNTR5",
  "key18": "43vywTSAZTqAkzA3MsY3kc4ER3FDrAWWQohmHrwo66Z7eh2aE3AYDmm2egLS3ZT91w53XGtaosCTNQaHwyEV5raX",
  "key19": "Zzcwx3HqMFPKQavvX9fApWwsBX8tUVsXernwkyhHg4yPAFa7zme6DePbSUvETxrx9yvNhEzQNdzupdC6VJGVLf7",
  "key20": "4tGzQBpi4XNwSg69mbjt1A4twjK57Z8XoXmpHmv1wXDn2NQ3Akcpc5Dkeu8DL99kc7qvpT6a3q2EUznG9Pc4FCTR",
  "key21": "4pyP7NbPq53ZG3Rz1SuuQZ9LZkqxbKRofrNYWr5cpbGWckm7w3v5HDEQqWdasuk2SRQS2sDKEhXL3aZZ5aTG4EFx",
  "key22": "4riVqSzjrZnwmCLUiEdoATvUAyQg6x6DzC7He2YP12RfJxEP61jbNe2kPrbKK7ooA8sZQiqXhQQAYzNd2mrFD8nS",
  "key23": "5h3e8QJsCecQw96Y95xS8rcHYvgwRu4eCk3tdBrPiwLrfDk3eyzujQaiFVaAeGfSMrpFpr8mvnUuSQ1v4zvN26TH",
  "key24": "3wKdp2QCkynBEE5qgcBKKthorx6suLLayErgpPM7J2Runzn3KgDfJYwhUPyUuQHtK12KoU5PwTFpBjxQWkt7xeWq",
  "key25": "5uzRomuM8mtku5cQbzR9YGr58C18bjf2fwtgxe1kGSLi5QrcfeSK4BDBjVPVVDMHMaYmXhDAX8ZAeZDuU2FAYoxj",
  "key26": "4y5hy3tPBHaCnz4Mo61W6EQxQkDbbBDeyEVTXSxtFeoXntWd5tagXNaH7K1b3ecYhK31eAuQezmhHuKUcqdEu8Ho",
  "key27": "4MbNuTYYP3pGuXJGsTiDZQnAS5rdXHJVL4MhY1CKt63NVsvZPZW3puz444Hy1QrJ36LtvhZgW2DNx6sr6LjhTtQx",
  "key28": "4FeG4aWGqWcZuSshEH7qDBcqRdH3EbJ2onQAhqhRAbT4rbUMt2e4cC2sLASXY3o7f2sHzU5XPZmNYwAzX8Tbyzay",
  "key29": "tEBbMTMJivNUbHZtBbrWZeA5aFoJDV3EqybawunmMCc3NJRLSWUVMeX6Ub5YAJAX7j9usyBkNKq2We2oqhRRUEw",
  "key30": "3bmYp2T3wW29VsY1jhgpVUSkkTFDqRqUs1CiXkuUTfSrJnJwhvRngTpYamZr5CfKh66xfySPYYqbYnkvkUpLpW3b",
  "key31": "5Zkuzsj1baJ51Hutc1GjbUccEA35EthkWBpuYWxxpn1AyJz5SaKUUbSTNHwD9WmuHS6vpBzZHYATbgAUu1zRryxF",
  "key32": "64fim63bc2r1kZwc1QFrqLjHzGwrT2qKAkDNq8YfGqFuFWjYve74thWf3meh3auLKgjVc7c9SKQ8qFtn5YAjYPmn",
  "key33": "5kW27pwnPXZbLziAaRkDsGTfa7yXB1bK8vFURnF8x5gq59LGh2iP4xf7pQfpeKiJVQmXFcu2gnR32aFMchu23Rai",
  "key34": "4XZUaH2S7qKNyzsVzwtbnmUe14koPdYxULe572ARtqnh9ZQhHHEmzSH9RvsKWRVvQzVkf2KaLpZsuarxy4M8TYWu",
  "key35": "3XQnhrzr99d3XDrdLNa4NhgS3a1HmoSb91iVAoe8WLmopKv956eQR9rxU5KM2zVL5tTxXkn4s3becYfmP3KvjFx1",
  "key36": "3sKSeRDcRWBq6XiwWZoszQ3xpeVtSBeYwybFcA5rRAt2Zz8pcZrXLeCf8cGQEW2PHMLR13NybML46MfahtjkuYqD"
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
