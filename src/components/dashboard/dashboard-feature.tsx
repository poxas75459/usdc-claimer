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
    "56uZ3ToqCtBiAxqnrAKCDCkpFqMRRmNXvmmJLhY3uJaYogSZbSrfMQzY3ZJmfU4wSwccFBQkP9TRWvqjSVGaScPh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nt8qky8ssehP4Jxyd2fkghSmSqw1122vWFbJdehHmDdk376ML9T3FywqUrk1zdik1mv2mQGzhTUEJVgtcHKk5qc",
  "key1": "3zPduDHN1wPDVCVAupLznjesPsBJmzmkozhNAeyceAiy4eH8Z4GzenDuZTJf8u19nyFW9ii6BXuHQpRVjy7fx97M",
  "key2": "3zzDejpzZWq3UzXBeYYkMxvhdyJAHo1xoc3d7HDCDAf31kExAPv9Ja5cqh3LojsR2jwF8pmbnnZ1mhCjJGqAooXE",
  "key3": "3ZrpgkoZpUEgwZTBeXvPZi4zDtgC8rUB5Ku3mda5V6yZYWKzXhsyKFCLT84tUxahn5zqc8aFVTbnQVNikS9ALjde",
  "key4": "3jUAeSxDMgGwDSUe6XHUxzTpAEuYkb2yxhGWP74He8zcWXLbaMMQcwpoqf2gzED3iQpDnRqEywpewsLYfFmewgNi",
  "key5": "4zugHX5gu8jRAww6p2LQMsYPfpX4SHpdNVx72DDZxxNCTBfZZvjSSCp52jQgMNqQbmuLCuUJF95qGtfACvRY4fih",
  "key6": "2Bw5UB1hASyg3sszVxBi7r2xNvegooD7xvqnFEgGPfVmUh3cgWtRA9GRdBsUZqYfvqtUU5RCWzUuc5iFNPuoLj57",
  "key7": "5bx2qPURg8v6d4hMiBPFo3G9AsDgFPHJvoZmg6uY2PGJxeLuD22FnVaHtrjRKN5YSczrcT5EGZhRe6ewXEEEuheQ",
  "key8": "2fJssLQJYq37JpRDRn6bxFqitkpqpMifTxqoWG6pvcXcvgsfY4LQH2Pv9QqaQhp7WopNW5GK9ZBfRubimm9qdno6",
  "key9": "395HAYenq1DuQmYbzCSWnhbU5Di7htpLZVxCMCePNXbHdeNqRb1MgEiCBsCxsPtSjvLfw4ZusotX9YvgBh1oxZgy",
  "key10": "3DPrQh16LFEr9zWvSmLVWq8FMCmfNxWUgFNbWG7gVWo9GjRVVG8iAFxnoNH4dChMkhtYAz4bSpj8JVHtmkusLrqV",
  "key11": "4D1AQivMSDSpTCt5RKHRDARrKX146oqxQUf29cT5mNRRR4Kc1dSMQ3Bspd7YN9wuCeAjScmKfLa9BHep8MNSaqpz",
  "key12": "4gKUo1nszyCzU2fz9UHozStSybzWakmabSAHLzwvkLVkBuBjmCEBqnReP593RMyMKWUq36Bh6UQwd8x5WABhM5tx",
  "key13": "5jN1uEjjnjPAtawdyzwjBVYLi4DeuQevp92E6TCTuEB5gFP4pbJUUXsz4P7tbrMa5SC5RxCNvtWZKWDzgceP158A",
  "key14": "3ZUQUAKEAzCzm9yWJEVVuQCsXj6sT2RXHEKLEoY631pAP8x2qNgDPSLiPkgCyA6wTZUVjnWHPEpkXMmAacepE8aX",
  "key15": "5oBKPknnM9RBgx766kB7phGcHxeywtt5p5dxxYhMzgmqA8PPNkspKKseG8Da8KG9Q9b1aegmxktrf3x4zzYpeaNS",
  "key16": "wMNsCj9uVi1EyPgQMmVVSExHxMSk8nJaS6DPiznUnigMJB9turQcYy8aJJoby8fZchYLRVmZBSACQZxAZKXjwS8",
  "key17": "XTPCuD6H8GakGPxjtKircbNchoLDGhSTTwPLyGEKK8cGmgk1JyByWLhNd4UyyApwQn44sWq5hDGsUmzNdhCPPLM",
  "key18": "3zTjZWiU5epsQ9S6PZv6WUFQ1jYfcsw2j3e7qpFbgPvYPwdZtnangNZYbv1Tj63bxwsvihpBfHVBcwYka9jA21Ly",
  "key19": "4kCQvSnQAh8oh2Frfu3NfgfpdipfzmxnEPjscwU6Rkxs9DhFQFA8J7EzZXURUYdHsprTzNnJGsMSUbLqggRjhyh5",
  "key20": "5R24nzphn2kwkWMgi1DBgyoboRMmH6YJ64j3926qqm8eydmAfjhLfFFCLdMHxnADKWouMzDYtsi5MsjoYroUq1za",
  "key21": "3EBi568dzM1UgFLQy6GsS7CG9NHnbaRcC3hcGDQaJTYZGsYizSLdzKFNGDGGAj4c5YRXdYhncEJi1RjPH1dcfau2",
  "key22": "3VFGi6GM4vsJqyqjbFbmqjbziw1fbuSaYwAQYX1fh74u3ZQf59d2E33GbQgex3CG4YGB4X1tPQrjgsi7vAdzYsuo",
  "key23": "2GaV7WZK4P19f3Vu8Rya29Da2jutxifrsmsbVry7qYPoYBqgREz55a1H8QM55E9rQHMxqW7vbAJwJKrJvW5B99a5",
  "key24": "hWwy7az6kULxFfuiJW73CKsT2YEHMaiRnXihDTgWJAjFuHE4oBwnJQoQLt2gcTbRNF3opNt3UL36GhL9wpbXmfR",
  "key25": "4R1opWMNBunz9hkZxdeLrnaqdfMyKYKpnHFpKoT9aKpERS4Y8FpHEZRSaLLaBKa5Q35SQACTEJD1DBS5J6nSb6pD",
  "key26": "4vYDYvbtWik2zbwjKcpAZJgyfGnaVxZLh1cbWWmzaBtPU67nM6sbMDAPvXwyokj2XoJJFTbM9Qm1cdW8z17BsMaX",
  "key27": "5RPq1nv6qGdDEiVrruLZsFyeEwfEzBbU9HB3WGF4T3CEfVfvph5vyN4py4W4Tin4CiK8CSoCctGU1L2FL2gZxAgy",
  "key28": "3FLszTvZXs71bHAcshquWzRf5nJmAAU8dgkEvHm3Qxb3Y5HVNUqmiErGD8LLCvAJFnm2fDERcxPh4i48T7bjzPS2",
  "key29": "2nyZ9vyNyeEwGDNnUpNJvomAKAsQXfT3BhjK5xUXsyUNbiJ8CY2HFKDCKiWMcdAZiEWsgetodDxFdwMgBzWjzsK5",
  "key30": "2AvkghTCr2d2FtFWW6wJeBZk8xspCe4FJuazzVhbrSPzPnsxzT5jnKeitscjeTTxrypiZobk9rsQndAun1fefAk9",
  "key31": "3FAqzVFkTmfKhJPXbMFqyxYuPPQsAB586rKr97Disv2JXhDDGBzJg5zTeB9bGHnmSjtkWuPzAA4kDiv6ENEFLwDy"
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
