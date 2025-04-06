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
    "5wxsSvp23GW7nzqeRrnHbeC9gZam6cM978wjiYmD9mK4JkwQvDQVoqmaw8GR4tTFpaCHgCZ88mC7rGDzXEmMM4gH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eK2S6fiRZDH9mk5nYcza3PfdyCrQtsBgX4SSMCyBDjULSFQvFAX1bAnQCNBuZJ8MvQ6wyP8knX5TiJ7C8iEfh4X",
  "key1": "2E3SDEQssQRBaukewzcAaMtwpdBZz9PAJtyS2mqCQXhbWpqVNNLa9HGej3TdFJx8Sai9w3x5CEJxQWXrpya2jrto",
  "key2": "2N9dDAHymEwSJpbPL5qYRrNyUeAFFWDYbtx93Au6NQYL1GkghTkVFHzBH1ihM1fB1o6YcRG1HHE2YHVnQpfn7riF",
  "key3": "3XjrvUAFUHY7QNTE8byG1WRMEBaSMANFrFLkH3AjjZk2tkrVPMgpVAhmHwtXmX8AgrzfX26Vac2yH5EcMBHcemrF",
  "key4": "65gjxPqZ5NCmbNGPJ3pVwCAAhwauJaCCZaA6rvVnz8iy4n6TvB2QtAwJUZzzvyqX83zbJopBXfSJTPBZ8LWwjANF",
  "key5": "b4UBCAd7uURpmJFhJgpZHzrR54CwaGcdFSMnMfS3PAFLynDwpuEjpYW3ReinDLvhQTcn5mLw5KmT7P4rrWsfEBx",
  "key6": "5knyzsR3i58eX389sHTo864vB8swj2RAZUvG9V3KyWUNBqcZhuk1RcQSS6Y2QKH5H7gL3GkD5XvqKKt6uwEU713c",
  "key7": "xdPYu224cotabWDoZWKCRwLt6gof6yPyDRB7qZWNDPvJYVnUkLt4bKwSXc1mkScNbV6KGEM6DdaQrrmwt7ivUBJ",
  "key8": "5LZ6wTJy7L1tcohnLX43XUfmC47fdLLPUd5C3SeUeepL3XgdNAjh1VtbyjHXzQQRR64Eem3EGpbwAtv2NEzVf6Jo",
  "key9": "46uwX1KVhHyUXZfBwdkW8fZoNn8oWHwUGze9cZNK43vwxXosrT3mUweV9Fv3gwXxKj9js7uTQZVZ8tv3PxquuMwF",
  "key10": "4Sr7V5khBqcAcvXuwnnKWHJheXgCn9BaYtUarbfwi3yxPZzPA86cc2JuzsXoCGbJgMTjss3XZ8VF7BJffxaCJ7Xt",
  "key11": "5EpiouMvTBy6Xiu6P8Kgc9rhtwkqgwq7DT5r1sCtANThfMrFAX2ENEctVj6JnqA1UedwML6sng34Su3L1rCZyHqx",
  "key12": "5MeLoyrEcbC9ZW2Ch6WMsrGSX5qFThbT3VoG7SqXHVPsH9qcPRvudjPU4vAQAnHdRoC1LiyB9XDGYZNhy8nj3cFa",
  "key13": "3T1Fc8NtWcp6WqnMDucUrNRnMX7jCzNALF3LuVm9Hcq2tcJz2cPNFVmHkNADa9CaFCFkdJJk5EVJwLUxG9YQ5f9e",
  "key14": "5MRT1KYQH7r5uEZUAMLVwHDobHnv5yZSLiNnMoYxy8Uu5C92uEB6jGVtj4vqJB9nyehzpFBiNfyfweYtg4Mq7DQG",
  "key15": "3By3ZGv2a8oZN1vZiP99wP5HRtyGoMkoAV48yxz645qQ7exXfAQkfHgHkifL4hjTdFXbptYjHoch6ooqWzwwmxu9",
  "key16": "Vz6vuCxpnYqt4rHmZ3uv6ZWJv4UVMBxsS5LaD1SyNH8QKnB6jD5UhBLrhb9ZmrsFkLjvJh5B4LLs2MXDNMYhQuT",
  "key17": "3XPFJkoU12SrjKm9WiMe9JfZEdD9vzRDuMmPAKhGXRvruxhKnDPgWXNKzXtsVxMJoHz5wthKMBFau9MWeTeC2qZY",
  "key18": "KeMdn1inAXutJJniqBr8JuhgcoPHKvZW5HBiAt2YPWxac54xaJc8Xa5VEHTEiZeuKyciDmM4eBB225SE6anvkt9",
  "key19": "2U2KEnFhR5xft8qyvhe6xxw34WGgiJ26wRiHXPf5LQWqtMqh61JM5j5ozDzZHjmv49iqAtsQCTSeZbSbCJHg8LBq",
  "key20": "62NByqSERcsFUsP6u9xRT1USa1VHK28FazyBjycjdmVpRgiuYWcs2jEu9EUuB7hvCgbKKbiddmZtogvM5G12Xd4F",
  "key21": "6142a9rU4oYVd64Xj1VSwsSP4ibLqV34X4A8jZNkD4g6KYF2oUiL7jeVjxvKp3YtEdn6wKHqVe79wUZpyL2wJJRt",
  "key22": "3yTstyBHm43Puy1wRCicz8K1pCpmgnoNmqwfn2gft6LLoL5UDaUV1CUTSjpFXCnShA83MYTLnt9XxantRJSRpatN",
  "key23": "3bVCmfutCkcvqxkBwNaCoessXAGDBAAQwqtPRrW3HPz3Q2zhoFkiZELU5vfsxvysW5213sKBBVb8JzZe37dW3cuW",
  "key24": "4zAM1vc9AV9i7Y6HXSfMjk2mc1bGrCmJpNnKaUSbovREonLBJ5uccxfprj2AfNNC8kzYT6mFxkJsP6YbQ8nd8NRE",
  "key25": "3cdMDJfLLEuYXujSmRn4wowo9TG2ny6nyT3m2DKkSpr6RecRpJuwqUH7GiuzW5kC66UNNwKedK7FckKpAC6vGQ3y",
  "key26": "JRva3vxDqr8CWvJvouw6G2TTAVM98A6nKurJaTtH9v9hjASAZYGd2DQ9Xt2Yb2qjFLJzXshzkwfQD1xwyxzGAeR",
  "key27": "mazMi5Q2BXJE9NCPTMF6Jnomn9s9DUzirjXPWUCvpPRkZVjT8fav38SXvJvYQWSqDVtva6ZJA5eDYw5EGeykKib",
  "key28": "33Az2kH5ENLGekktCGYAQ94wPxer9b9ek53HPe8HgD7bhfHbq3kaUte5nb3dZXBsWgXXUQ5Eb4GBDD31jBByupue",
  "key29": "5RqdX56Vxu3Rog4gwsLYmcnrXFjWpzPCMhzM7Lzuq2aHxT4RFQxDQ3M7QSGJVLCZtsM7MAfPLifL8yBYD73gdmGf",
  "key30": "4fXHJGyBbFCBdtHe91Xt32eqs87KdunmNzpXxNdzuqrmF9tTNXQdcSPWQu8JUTNGiMAW9NRVgn2oSUcsdeSYm8G5",
  "key31": "5bwK7VJtivbiotPeQRhep9VWqVERMdPp1a2nSJq46yLRD6UMjKxYMxTzwMyPjXceMEsJJvLFS5KuSjjphRNBseam",
  "key32": "3Z7fMo27DA7ibGQdwCpm3n6768zDpFeeju3zW83kas77PG6bQBZtnSbAWQPKUm2tgb5vz6MgymHKuNRj6ZcoUb5N",
  "key33": "2Y6U6eYY5RjXdekDdHSXBote2LwgNxZHKRwT81vtqFJyP4cuCjtmneGDPnGnZkSKFooff3Mc93R9oWvpaLLfaWo6",
  "key34": "T341K9EwnBUu611YmTxNMLERf71yYH6h7TaLaTV1hTmYfjfTPBMjM7Hupv9HyTbBKH1ncDhQWba11dobjReT9Y9",
  "key35": "gRKDZzzwhJ1M9kb7dttm2UWrPhFRCvvTyNHC6uNs7UKfo6jVGtQfsNsA6KH8cqFsYc2zEmJt3pH5puMfcq68Zmp",
  "key36": "3V8L6gPBcYkwqCHSXXHSfzUL7EzWQ1hNBvvMWTXTpw3xo8mRBDMzkvzfhe6BufHcS5NbAMELSnfp1N4jLpQAAnzF",
  "key37": "52ftt29GCuDDcrbgkAq88T9hg72nwHLz4matEVcutCka93zCJQEqpjDokRN7vJpWDviDNK2CvQRw19Y8HUjwLjNM",
  "key38": "5kTRD4BeiQS4mBLNzPZqCqocDz2Gtgk3suhixD9eAAFMshDscN6HrAyDXvVxpisuTRxYWteZgFste4XyVUNCe8bY",
  "key39": "2TRGVDJEDQKahHfYiNCG6VHphLJnwwjoXwUSNDR9hdALP7BjyGZCvCEd2o18tZKAhgzgqnbmiPsnHJd85FZari5b",
  "key40": "3kPJbJvQhwppybDMJLxjeHzGxyUiD3nPx52vnkMaSqFwVbpXGVLUWDePUYsZzNSuCWMdFk2qmpMsytW22D5uyDbP",
  "key41": "3GgaEbR7DyVKshxXfZ6rDVtUZAeHwd2Dqrh2NLsqe1uLE3mJsTn9Z51UDcEmnYQswMu6EEPRXyDsWwhBDuXoTXc9",
  "key42": "3rJKe2FREzEtFhMYVj5zX6SdBLWN2ygTZWMhZdW3xTw7Mu61bV9WTZHAmWPTnpyPREh6Zc8GCjqU6ZJckC2iKfnz",
  "key43": "5mjeJmYCdzMQPth3PN5x9ZfQde1KkZuSLoDY6xZXb7PrYzLUqv6e4au3x53MPHwhzdQ2G4JjAqywBHdvdCDvgd4H",
  "key44": "41g1Kxw8mnQZUtr8kvGXm3vXGqJqQQ1BsFUP8TtCstkgHDz3bUXG1LL7oDTa4zMh4dWZZkv1zZLkYhWSW2pwy4zg",
  "key45": "2EnVEJsh4rSTLKXzH7CuVrG4MxmjRCDVKrRh5Wr8TdP8yjVyvnSB18NyyfipHun6osABD1TdvH6Py1o2UyXTXzvM",
  "key46": "5Gizvd9G29C1mLyiGGY4LQCnFK1HNPguBog3ciP7jNzqayjVatgAJYNqpoSk6QRHDpH1wPN1wp6Jgdu3DuZ9x3PX",
  "key47": "5qU2H4583bNAJf8h2PDDhGp4xvK4VzqozMzeX9wL5uCfX4TjWKv7ADKQmpQjsZuWHTKoeFtz9V3nqFxfdcfntT44",
  "key48": "9r3HTv76JuKx7sXkmt4ErvW278LavkW7E2gHP7gau2MLUVvtt5b2o2S3eVmipfKGYajuyU2i3ho54WZ6V5ctpyW"
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
