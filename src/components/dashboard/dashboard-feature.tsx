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
    "qdbSrw1BzQj1RdNdLuw8y5K6Jtnam9b6VZbheYpXxMCu7rjgzDG2wHue4sZfjCH6iAoBj29ZUJfEK1tFsfvfxU2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vvDmBSSFQc1KCXnGgf8prHCpjEU1FxFKMoNWs3TRwcfqVvtBF2LXYCGDBV4dhwgmdH9t4MgVfSfFXpAvwmknhqZ",
  "key1": "4RV9RdmMZq7JkcuW3dx8WMRgAsSgXGo1LgEi3zEvRJB6wtJ77DB7VX35gCPYpqzniYyuvYC7syAcCFzFXgt2fxB3",
  "key2": "aZPhLie2zg86SwmMMBAEymSixssV9GhXmeeTiqhH7xARGPMFQfecpEMKWa69F2WEc9FF5WMnJTRrv8v4n9BY6xa",
  "key3": "2MCVA1t5rWH5Mjh36vtEgEAwvwnVUVShH871qzTg8yBkDnNJWYWaR361BdsmRv1yiageASJm5GBEPBAQcMBiwcqz",
  "key4": "aFXhjZLzpGNDN31hkswgsfby5cB6MHnYf4gxXFLZe35NbFSLp8KRfpvr1gQoFZmAXVeK4JX5wLNgxo47pdxoFDo",
  "key5": "4e6Y712tiby88VkDcopQeAVfk1NWt3h1gVDADz9jFYXbYcZtGhkTTqmFvPk5PHEXmeooTG4k1QG9W22MUaDeojah",
  "key6": "26xbqsvaXAdNG41bvqVZMEVziWuD5LCEBDafGRimK9vYFdfJrA6S6zbLgcQWLXY7UU2EkjkhxAEtekB1nk79PvN8",
  "key7": "B3fNmcxEXibfR4YrX99Ds2iv6c6maex7fswp1yGzaidt89LKwwhNh9weKqEaJxN89LUdiBxPpzGMzHpRX6tERUr",
  "key8": "2x3kmRTA3fVMt8nFgimgTAxiBKDBNLwfDgX9eFqPEgYCkxFK88XJZpmqAh7hDVYgWQa38u39vJidN4utRz4c3dGB",
  "key9": "3jtDFz3gKNpgSpsGYzXAB8cqxktsjE5PojY8RsrNoFC29XcA2MtkRaCqK11ig1ZCbyHjpAAPD9vjgupQjv7xGTi7",
  "key10": "43usqb53jcJF8xg7cGBvJnT6yPE2LKYqaY5iwc469YTE9TxXbZNEgyMBqp4LqJBRsKAUnzKgovCufQZ7jDDe3xke",
  "key11": "2MTZ3vsba124kqiE2m7h1qMijBhsqvaYXCxTSncebEF8FmgJbiuBMbNSLcEag7uP5Xfn9KdohGEsYjeiyBiecYAh",
  "key12": "52vhkunLQ5Ykh6r5BTaF9Eb6e5xh7zLDaUMR9uqGyTpUZwnG8v9DCnzKNxZFxFd4RUq28h3n3DEMcHd89xqF2PKZ",
  "key13": "Uo9zHxuLMdDUZ6oygWsPQ46yPbsbfZdPrAkzmsHLNbjGPmuDTL3WrPqtWsweVkV2ReGzf3fERgavKoCy29UyALo",
  "key14": "25zFnp9oVXxGsQ885F8qjgg2oG8Xk7EijFTTJptYvRpLCDWtuMuoJ8P5qpmoiVniocs5BHvkffwXFXDLEJZPGNKV",
  "key15": "41dvG8qsmjUPhaTVEZdfiVCz3f9JrhFgBD5ekX26LPQ7VgZdVoCUWPV22DYs8A4c5ToAxLSrLynYrBUcTSDmDT1X",
  "key16": "66YeTmAzt2mc8oZEURCekXqWwJ4BHKBgin5JFzYwDVp7QPeXrBQLAX8pi21ktHnXaeBMNr86H5mfu5crTSGwkHrN",
  "key17": "5D6EN9Qvj7sMeN6ij1Nuq9ZPaFKyX7NE4vfDqpk3FB8mWEgXduTLi7j4k7Wn188C1UbxbpWhWQwznSbYcNMFrhBn",
  "key18": "36X2nZbvDLhGWiu8GaXsyz1JckMhnu1ZmPCLQW4jDPdNfkwmGfjPPuPqLDLGNZP8U6K3Hv2WExoxsxfU7sLBUjiG",
  "key19": "iVWaxH9Uz16X6QV72qewLhULWYs3h2gdznJpuEEQbA9DpHoxx4eHXMqCJGXFhWPZ1YnwFz3P1bx2jqg8oxxwmNL",
  "key20": "4FZaNH13xsF4jU3ht3jamkH3WBaGsFmxveyiauTGUTSc3jS4HTbRsaEVzprUPaJx4akEMSn6pPRafhTEJMuAT931",
  "key21": "59qp15GgLMZiMb5V2nNnqJct4RVM8yFSqaoYDo2ZvBZB2QNckWb7ray6kd9j4ShV6o1T5UqPvuWs6j4hMLY1fGHS",
  "key22": "2jKYUV5AKFn9xqrai8FdSSDxVVDEYQLWWGDE6gAwahVAoHYmQVTtyHxQX75qeeCR3q97N69atwgdepKLazu47a9R",
  "key23": "5AFzKysw5P1Mx9hPDB1Q9DKamDjthxzEsAy1WekiS73PNGsGcn5YzPFGnUqMQ4FsVGgwQSZnDu1Jmn3uox6opDDr",
  "key24": "2bUQ7q9Tf2biaPwNEhjtXKtLvWSCFmqfzoW9mgx55QgBNdY1NND1WLm3JX8p2r6akDK2AQgCM3BZHghtfyrX7f76",
  "key25": "2Tzu7c3nDB8gyYXxJ4aRqG3t5Sihkni8cZPjZSL7vk8rqRKSSvfpzBrSHeDwjohRFVThH9fvuyUt9pb2Gi2Yjgft",
  "key26": "Fe7hpgBcYeN9cuE3tHQnJ1jKmQ1GjwJ89HWUYKGiCfDdQHjqgCcGRexWAh5nysUhNwYaioJMP2SAFzKqsfingJ4",
  "key27": "3BoDpYAKx6RuKKhsCfUB8fgfEvmoTTvBXaRpsjvxq6QpnUzmgjhD44RZTWzCb4VdtckHHiZ5GLLzGUwdqdhX377d",
  "key28": "29jQSfjeD2heWCLCcnnVB8XDaJ3edTtDA3GpCfmYaA5WyE1qkg8LEtzb4115iQkJpGyapZv1ifYXa1RA1ZSWL9Ke",
  "key29": "4HKe9uWa2Vsx4vv8oBDj7NkAFUNcKJMVCjk3rmbCLrnQjpvgjUejjz8tog63QJc7vq6B7kq7ifZeC8hD1RFgx8LM",
  "key30": "5tLf4CZjVAsdLitZ3zh3CJxn3PTwAJvgzuWBFmaBCVSaq5aHuk9wVhvB5ypzLDX9L7JcbxjFHGmqBX6EUMJjrLrY",
  "key31": "51DTzegd2gybCUams2e7m19Fg2v3teEJEutfRELXbvKQf8qb9QNip651A5bt87Fm7wbzxTP2R8kCu3uEh7jEinHN",
  "key32": "2447p5DUonbWiDU3eUQ4jQDtN95bT7WFAtzN4MDNcyLkeWWfKZxtTeEFpFoAAXYBvTQbrWw7HqYxAdjnZ5TVsm53",
  "key33": "5vFPowfdFFzocAV8zFiidHSg1TaGkiUXZsgD1WrvfaaWRs5oicvjnyE9wpM8F6xJCPhcBQH27Hkc2SC7i6RYWhHf",
  "key34": "57PnjH95b14ButVqEqizkXfM943JKvHe8tddMzf9KRUmn2me5WSd75BovBSZbHh34MRtEGQVzZuRt3CSJiMkiPKf",
  "key35": "5aFunJqhGTDGZyLPa5aM2fx8i3BjMLV7A51tNGnGTcqG2RhKMF9KSVQEKimZaBJqK6NhZqWFwZDofUbJvYpZ63mg",
  "key36": "ZvmtCDzYCY97tWk5yeHppPZG2LhnVLQ3QysRoHRAEHSE2Thuezux2s9wKi2i4auseGeLFpFA1shUZFepf72pGYt",
  "key37": "4fNbrRiPAV1jbZS6xUa2VxASXLDDBQznXWrABP2pD2PN3B5SiFs4VhJ75UuoGq7VMTUQsBJp7cS9bxVQpHxJHZiH",
  "key38": "31oFHHRBjJoYm2eETPT6jo9Whr2f2M3EZNfpxbdb2S2qNZmdUJaU7MYBTYMukdNmVRPtzAQ76zKTLAfWqTxW9Ybb",
  "key39": "3zC9n3rJ5z1nWKKacuFF7vcMY96LSYTGeuYioVHgsQ2XZpqS7JoPVYMZir96VzJu4xaoWi14dHuQSmNkeTcS7QGg",
  "key40": "42dNtAivx3b4dAHMH6pj8RkZZyK5HZFChrT2MdNhnuwMtcAQP68pDCDb6yE48ULG1FffYDrh2mEACQP791jusALJ",
  "key41": "5FHYCA5nc717Ya3znHWNFsk43ve2hx7aiRs4xVokPTguTjB674qyK2VyU9QsmBMxg1zt3rKGQuCTzzE2bDSuEVuh",
  "key42": "2sWTUwmRcUerWja8EbCRbkh1iFQ832o4aHT81eknrapMVvm4CPnHaVqxJi5hpcaMrYRu4e5wwuiAWgE5BeEmwSU9",
  "key43": "64vWNrweKoFrAAeDf7S6gZz4fdw1om4cu5ux2tJW2zvvcZvDt3eiDYPW6pA4cdL563qf681SdoH2mEiGxUHtvT14",
  "key44": "3i3AWFTzTBEpdPSzH7dVmpNeD7PvMH4aGyejTA1cTFojs4Ynow2pHav2RgzmU1N9afRdosDzq8i1vLGUczUCqP7q"
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
