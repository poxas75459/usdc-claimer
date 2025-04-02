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
    "tTbCnf42hzqSdYHki8zo7uzzq3yVWgdtXk4c1quaxCXxGW5ZHf7BzDeU2GcRhN67Pq9uEHKC8RULxWHZ5VMmAFW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d98BggHjhx2iMiEVTLKxr9FDktGq2JeWar4FUGt4xZ55UvkJadEahFmPyuyM4ou5PWZjgT5BqE8AQMwSNreEyuX",
  "key1": "3rMtV77yyLz7z38gDvSaqGizUHPyc8m4ZpvgEqY36b2AZvrg3oHy94g8ZL2PS6REZ5tW3AFysRkwuxcsqBT8qgs9",
  "key2": "5jjyWaxyUo7cQirYBwJ42vH7TMgGasgWYFiciw7DixrAiNgjpeY17Qp6hniWcpbmSYBDPwGdc2hB9pqNGSpEKYJ",
  "key3": "4TZzjKkAuqDyGFmRY5SvbgUmcFJdFyYCLu72kQG7XZ7ZssjPeQAcfHhyv84pD3Mmkh1yYixjJ8oSpgyeXh3rzitm",
  "key4": "ctuaD7LU2BAvpcpF92mfEXrnRPrHx4PfUBcKrUUzXUBasTReVDNjNLNvJBdF4HMog6H6qFjpAGPEy77zPKYYn9F",
  "key5": "4K46EQ37xKZbtC4ZSTD4Rm1dT2DTHonc8UL3eM696uPm82TQW6Vk6AhmgYFxTXJjgSMiytc5vYt8T8HsZ2o7a2sL",
  "key6": "41ERdi1BKkqkBnhUP6rQnePkhvYArvrud3YCPaTdu2A1TWnBrm8Ka1yDMFXfsCjiUsVbktPMxvosfwb2eBkqpTma",
  "key7": "3t7ETzGDJsR7bToixz7mVvYeDHjjpzZXBfQmGhmCjgwqyUAXAicprbW3mJeJEzWfWJ1hjeBhSkrYQFxLUoJfyx2c",
  "key8": "563MGUtdmhLUhA1didkanBNbo6DmXkz5VajadYHV26PbuR7uiQHeaEi9paUsgHTNWiqGoCNjWmqzJy6Aiqfg4ZMo",
  "key9": "4cScY1ms14n6Pa7Dh9amZLwvzqsBgtnkU8iALnB35mCYyfMkPQWx4XLLs38Fj9XVVt358PtRmjNpjcwi3oT1nCLt",
  "key10": "4mba85vHcL9a8eewtFci5FnUfoGdpnisLz5h46x16DmR6CG7B77Sixie5izjiax3AsVT9A7iv9M2nwwA8Cno3UW3",
  "key11": "3ewNtnrH9tdiEdYS9EovYHNjtfgZqMzQKiUzmVZzwX761MfbS7ZYrHZVf3KvwsM8caq2zSYbFzw6A53pimXvpy69",
  "key12": "37MFTUSAswcTYgGTFWQRvDqL3oFoxKWHGh5Scsi7NdPxRHPpXrCJCnG1udCgbvu9n9oFVDhnfmUyXRaEF9FXWuGn",
  "key13": "4Hdqg4yT2V3CatbUrs354248DumJBQv4s7GcjF5vEkjnq3PWVvnRZSWTL19EmpQM4zDgbbfJTn6tZunuZq4W1dtC",
  "key14": "2xdBjZYtRBBSAm6exyBe6852M97LHpvxx6FS7QYCCUPKbBQ8u7Cs8JvA1gx6xDJ7rgTgXnKZKoSAv5ozCF16KSH9",
  "key15": "tQrQ9rNzNLDeuuQ3pyFux28A4R4o6wAHgcYiBHy5no4GqoJjGmHYrBZPcjrrDzmLCdGQGueVSqXm14abvJ5AtnW",
  "key16": "4MmXKqtxUnTnXyeqocsuJCf9Ts7AfAAy8FYiPwgL9SWWigYBmVnVAtyf5JJ3zYQo3NfoVaneLjBV8LoJU73vVMPR",
  "key17": "ndgBbBQcWqhnN1JvJ4yHogHoPJ2HMSxnJ3PWbqyGPkbK3AB9sjeF1zmZWvoyBzC5s71Qq139nT3WTEaXUgDJN9t",
  "key18": "2XEtEZK5gcFHKJrR3fSyQs4ahx3fDZW61JMPNQ9TQ62PM8cpyLmtEoN3q2uAYhCZSb81wSi5C7oJdLQSnCjUK6Qa",
  "key19": "2C3ja5Wm6mrSdGXXRfVuaaMD6ZuHhBr9jXCvmfqmeTfd1kpg1TknFnURaVTucmMpsyGtHiMo7EpzE12bjHEQa8yG",
  "key20": "5XnJEKpaaJ9oaX5r2Y8avjq7KQdGGevFhcTeGeNfqAZaSKZnsjbGU1wx4SmNQXho9ieryoHUbCyN42ahDLAQSJUk",
  "key21": "2cWBrood3MKkv4FYSRXqakUJn3wUf4Vkzqd821wnbafLnnVDFNf6zj7VhTUzRVp84RTjbfgoX7YSbrCtDrrd85fy",
  "key22": "nGD7MoqfDWKw8wYCLNgLiaRBkctCBiaFieh4HpghuSoHY7vrfMKfSh6QwSa6j9Y4dR2A1FnssF3bmcby6xMdpwS",
  "key23": "2qoarcwNbwRrQWcQxpig73W6iai1gT4LzRukPavUdmdz4T9ByBSiqwUWGbMHuFS1AkdYFYE75fww3QApfLKnnXt9",
  "key24": "3DPo1jBixre5afSCmQuwH9vYmg1sS689gBEG2YLHm5ikc2S16oRjmjGBmMeXhWZoepAJtrXAH2jGkeajY4yFMZMj",
  "key25": "32Vzxpr4JGGNRyvU9AsgHinGVtEPkJwvzV5ZUZ3ntZFgUoQnK6d9ddP2J2tsnPnphajCxxJLN14TRophXmo63Sxo",
  "key26": "2JKZtSsVfzGUcYZEKbSmZhLHVUuU3izuYwSYTzErdFQBqXbSAGddhCTrqeyAWtGTCGgZdy4b7f7dHiVxw2We3Krf",
  "key27": "2vSHdnrcBUjU3CAgPyNdhaQ8GWLR46zJswXvmEip7UpQUBvSUSHCuQYWzmuyQocMXyB6Jv8Txhj1KENXE352J4QP",
  "key28": "2X4EoJ8HBbbMnaDSrNtZC1B6g6V8wUFcNzQfv6ybxpeZrtdHtGQMQRV9chd9FUN5kt4CvjLGPESBBRgrTJJ1eZtN",
  "key29": "bsSCZBPjfyzYwKCxonU8YvamqUqkDNxPgfs9phHxGnkVhkpPUChF11vVYLmTr5HKwbFiMR4AMX4cc8FW7e2JiGL",
  "key30": "i8txMyWye5j3GNKNWCJhtbRQdqm293pDMeDwZy7oY4BPDwVWR6TRgM51fdUDczhXaUhFBVSYL8bmTy3rjD5qrXU",
  "key31": "5LbNjia1zDpEnaD3BvcX2NdGCXhvoNHsnB6kEgP6eR2QcFgi6CL8zpA5tfUYosB59ZmK67grBpLW4fp641HKWtLc",
  "key32": "59ocMMnfjeyAMtPE5iKRWeT1Ern37HucieYaktxk9dMe6HNyXojHk69JQFdq5rWxpxZ1g9XpWsdYcivD9kW1vm9V",
  "key33": "4Z5BBJgCxXZbZZyLZxQyiBMVQccGURd4fkLTacHGcYE82M52DwtV54wo8HeC5Xhe3UxQavkHJ4X2aFi6aZN7xVhS",
  "key34": "5KSNrNaRoAme1nN8prJyVp4Eknk9NKad8bTMSJNt4H8Rt3FxZyMqxX1BE89H2dmzRmWkWsNWWStufBcDsR3STrCJ",
  "key35": "4Pv9PvXZZZ8BpTevCBpKBZNAyGjNBn6QBTX9kDQsGhwgrVRfWxajoQKPbYTqw6GxCBcGSKtCAzQ3rUnQ9F5YJWkL",
  "key36": "5yh24uGewPVL7C76PpmTdWVwqdApjVcGJUAaXXUrzbzaDy1TeiLScqqrHvKPZcytcMaTLntVpJZFqAsTpU2XzpLa",
  "key37": "oh5c4XXW73h7evPk2jWwztYdwNEot9FWRh62iAwjkPYf6cxM5MZDPvbU88yjSZwCdFUUJrYCMJFabfCQT6sU9tX",
  "key38": "55grmvKU9jTTkCskqpRsXGNPfbzAHLpy3Tzr1keaf42Z4XNewthqSagiWUmftcj8ZTPN1EW1x87pogwDwXc998PK",
  "key39": "2Urfj3s1J1yxnxwsZUfJgdHvN9nSSV3HApXpEabgL69k1QaQZhkMW4S7ke4dCUYHxE1hbxfg6mDZtEcAaLQC4xuy",
  "key40": "3sR65hpUvM6DYHcRPvihmPTBcwSkM52TVFmR54nbELEPWFsZzE1EyRPvLBySQTFvsNAhqHgdfG3GeUVuGcQ2NfEX",
  "key41": "4yNPfZfHAWUktFCZ12EdF5CxCqBaNMQArHqpj6qV4mWhJnibtuQkwsUv6EJfABpuNPhP2jBkLDrAfU4q86NRcdmm",
  "key42": "4U474nfs17RQq5aJ7YftSBZtxNKjJk5JaLqe2uFfHXm3MMbXTAGvR5RWGAygrymfJKwddpyMxqprYVupsCNjEoko"
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
