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
    "5jLn6k6DB6tHpcs7ayDt78C4duLRhcEpkgWeyTzAoqRHZvH8ZPiGjqpwoJJX9oVvFmwzy99e6Uy5Hx4Z9cqj19xV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xPFqjSr1ahsGGgSk3txAMEfTwMr2JwT5j1jTKxgkJcLiaZdPCGqnp3SJk7bCaiyRmkPBxTvTmQsbHqnojzCAnW9",
  "key1": "5H2QgkxhXvFKt9utKP7dw76F2EJF9BCKHZu5tdm893cLAsdWJo8XD5drS1WvzbiZYsvi2kdYJkiphkNvkYNUw5Zs",
  "key2": "5RzgZqPAcDtF7cSjtwF9g97SDQCRwuQZ6JeSTsM4RVKSH4nmM5mxZ1ewCWH2v9LtEWJsAHfSNyZaGuuaaHSvc7hf",
  "key3": "468wPY44tLzMSBh2kAoWMuLUskjB2EhrTZwSZieTfFP6t1s87Yxq6MCK9gRHYXYcmuXzUZqLfHJHqKqnSm9uszkr",
  "key4": "2cjxJN8GSweq1JCoWA1ppdyV5gqvErPc8o8fkBG589rvR4oGHxAGG3xjCdrMojEFK8ySFtk8jmJs2ib7aLRHwkDq",
  "key5": "4ujDKxHHXGWcWkjfa2QeX1V2gcyXSjSYRRmqcR5UeRRCpfN5oatGrhenrWnqdGLHN8jhnF5JFLNRBSnsTp7ar1r7",
  "key6": "5Vc4SKF3W1yFUW2ENV9k92JVXh1PyaMuzx9gL1QjYeT3ceKKFBPn5zkKPXpkPV48Ksp1ehVdxjssqebFWBLVKbmU",
  "key7": "5cEAKpvCtPcq4ZSmKNFsxKNiBC1XbyTdcN8q7bDeGA21AR5ceRkrnsFcc6g17Bb61dnhaPhbkjjhuGj4UgAH4QsQ",
  "key8": "5EDcTP15Ga4W1pUKPCWob2RuwMxVX18jEpGaUtWu2NiBsqJJXysgpyL8pFMRFFR3eecbWFWc7Ytszy6i5u3so5Ny",
  "key9": "679PcNQXe34PMcmZpECUK8QoZt5n4cNvjK6tXJo7uM9RpQmr6CghSFpQVpSkZaz3PJhBrprMfNUipeF3QBdUSHtx",
  "key10": "3XcXnkpD51QkefMobR3PoYYVrdBn9kFhHDVKfmjH7NYu5UZqrQfgqoXQrs2Arc87vMvA2oCHXnBjuj7ECoLiukcR",
  "key11": "3EifmX2jUAkMvZBjXXmuNnJtGAhu9HSngWxXUFGfLcN5Wb3bFMGkY3kFfVRfpU5zim8Hb3VmPH4oz79Zf65H21wZ",
  "key12": "5JKVnNiBtbXgeP3kRpRYMGMDsh5RDx118ttGYoxBEZK4d8DFcWpHVqAQq5NzEDe2GtW8TH4JqPu59wMjFrj7nP2h",
  "key13": "3TaxgtCDjgXjxapYJGDCtUpT3KVqTCt3uYYszBAUVFaPwJxHWJp4pG9e4A8zQyB6cf9bj5Z8SAwSrip3SGUCLJJY",
  "key14": "3Y81aeLqdHhfDCLpCg4unhiN6PE6PDM2JNF6gzU2Hw4b2jRPgckXizF2GgBfKdYL8Q9RGPj2W6R6Qsn42nyaSzY",
  "key15": "4CcMGpM6A1SmjBMXbE75QGsL35e787s5JAGDP62iJadZJzhS17cP7MRohQp18oKqPqbvdUZChccYrr8b9Kaww1wz",
  "key16": "6Cc1Qs2pNZEnNfm1vMtFCU7Z6xZwCuJKYSapkBdyHXDF7LBskzDApozQtYrcLgCyXzBbSHbwehoBZNQQwxGkdm5",
  "key17": "4zy2bo2UpvvigDwdyUVx7Aa7UysQjtoes7QKGKDHFfme5Z7gkRMgjWwjjDR8fQcSFGmasHcxJk4HBPuhqL5yAR7J",
  "key18": "mpa71ZFMqzs1H4kmRZF7o5yeBRi4FuGc4jakiN3H2p2fd3CB5YvsesmnwnyKWopzVpsmFrJeEf8nLXnfLMo3Rb8",
  "key19": "3P5DStKrDL2Le3VSogBw73FSrcZpcw2Gasg2TeBDVD36F7uYem4148JiJ1vagzbyDbKG8vUSBrD546VbSe1z5EtF",
  "key20": "LyoUwoumM1XiHNVZjZC9XnTxdHfmMy5A9AMdAXqqHjPMrnZotNqDgsc5hgwc9KD4VUyXMzy1NZwP8RwyWQhFpTb",
  "key21": "4s7VDqda6URHCASfZz5wHRCp5Ms8xZxB9xgc9YJ9KFhUHQLb7Z5BCC3bPEUAZn3kx326BMEiTEeKoMmFXcL9AqbB",
  "key22": "41kR6neeK7mBGqLnEpfZyviZeiaENxpiD4txk3QuV42QgqdeMJNUNxafBZzjQ1CZVj7gpLR3PBPaZZHakMeX88gH",
  "key23": "5a3NnCqiAUQmH7zPisLK8uPqyDBhXxsUHBvQncUkFN49jUMfyCDkeqXnefbVLbZwnAvvy8SQ89Skw4zHcFnQqVRb",
  "key24": "3V4ats585VcaTuNFCJfmBtzZTskB46fQLDp36zdb6Z8JniL8BNTokGiF6JKeAQf4fZ4TDVXgPhuFHjZ9TEMuVcGM",
  "key25": "5asHt2yPASySKfAC3KR2DGz2c48SW7VxEsLSo9bjTEmawKktFxcDAD9KUFGJnc2cv7seqioFWwT22Z1gY9oRoVY3",
  "key26": "2HCibvEDSyqGcxfkDnAoTvNyo9wf7taELjqKxpHYhe96BrvabiMc6Bp645QEkJLRBkR3AsTMSd2eJSyjfbQDhrcr",
  "key27": "9mtJAgJqyhhJzDc9iCfEgKoCpGiZ2YcyqgVo34Nzpb8D7GqVoCTyVmomq2n8tyGb9fqKqMZnmvNMz6J1fxqVmHd",
  "key28": "4VUb9aqHqEwCzy38XwSCBRUNgWBWN1pGbL635r7SFYqjDgQUAdRykScVLm4D5Tn2gu3NAAe6qrXgVhGByZqyswGz",
  "key29": "3MpgoytcrGtUUzaHrhgAaStUExyorUnFFJkAV7cu2rXRKdjZmkv2Tp3bJv96C1EWW2nzTMqy2zFA9Az3dZR6yD7h",
  "key30": "5X6SJoe4efQhbhMy61faGrhJuDpzSZV1UdnSKu25HrkwG9ZaytmGDVampCv7zLBWixQZWTyNkiGifdkKfzzGPwC4",
  "key31": "TttGeTC4SZCSfXU7qipTV6Kssz3mSFUndM74YuUhtLhmYuDrn9rXXz9tLMRCSD2xH58j3Cjs1P4wozM93UFgN9R",
  "key32": "2sx8ewmF5DhBUKm5ThnHUAHcKCpmKcGruomSxwhNoZh6NpeLUxuK6Y8c3nni5vFoYKFaD8VcLQ6oprB5dMf7DgcC",
  "key33": "5VKEyqoCfCoh1YXKQwwKFXdT2czRs9c95t8ht5wg34qLSLRhKEjhegUCZu82GQ3TaCiLRnhDsd7YtMn3qAWDNkJR",
  "key34": "2FE15hNrgzraR2T7hgczhnEzq1WGRyrgDQnBfktNWH2gahVMQDZp9NBfDUv5BrfybM1VjNLA2WyBhNNQ9B9VKfWM",
  "key35": "bszrDZoJw8iW7Sqaq3asKzm9zmq52t6zN77WaQxne4e7PTCY6onCNDYd7xAx2Gcnt4dESXkkR9xhPg3Q4ipvFp4",
  "key36": "4DLEVj5JZNSfQJdkDM52AuPDAiBMWwXFjYMr9iKvDgNf3QDrkXsirKzMccbtmaAe1ESD27V7oQBRKr3KvbX32TzD",
  "key37": "4S1xFfs6CPiksM5gc6kcSvuAyi7ESGmaSdNSTh36xzMdjMq4S8gzDYi2syvuJhVoNyedcSYQ84vRBxXrbQU7riZj",
  "key38": "5JvXGtxuZQnHHGfeYWNhTg9thtEFeELuQAiLH4ej9oYVxn8eh41un8nhbkzTiRoWfgNyACtjAdauWa1P65qKMSKd",
  "key39": "gsYwJiZyErGnW8Y2kxnLdatcGKstmoh7uzbMRpB59zmt2JyRGr2cXD8Vx7y2iWJhvQ2gxaVCAvMpi2EzuUWsqfK",
  "key40": "29h4gEVDDoKh1uFG4KKbciQ7de5maFad69B5JNHXT1vLki5NpNLjjbfJXKJdKjHKaDhwo3ZN92LS2vs2k4RVoi3Z",
  "key41": "2zKPRyUqATY4LNsbWFvHTWyyQqx3y8RfYvB6TyVdoxAumoofq1NcD8NhkS1Q1k5UEqg9c6HqPLAmPvezjTi8jNsL",
  "key42": "KzbgKoNiknZW1rC18riNyxB7eZEvN7KNEQzueKNQpiBn7hMke1QfAGdPcNG8mZGoiRXbT7mWXspnh1ani3Zgsgy",
  "key43": "5HXgfkPK7w1uds3dEeXopsUHNdef3QeTU3kR7DiMADxk8sv44Veo42e12s6m9Y9WUjrXs8ZiJJvw3rCeiiJdbFdn"
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
