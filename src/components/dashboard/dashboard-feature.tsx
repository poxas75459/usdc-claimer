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
    "2LxTSJf9XTvkc6EgxcLKjjH6mmNYC9VsEeMaeoy4eYwCwM1yHZ6kinQRX82oUQkUkdAAHyPjVszugBm9i8PgDoRp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ngikQYhgHdZRmqx3Bzear3YeyvnVSdYnbouyE2ckAXLTrgqmN7Cy8uVFjv62N3QkAea99gezHsDexoiNexMSCBm",
  "key1": "62Jp9n3rS9sxMbatVp2YQraFHXoWXk8q197LY72gQnPZTNF7Md7UgtpLDEPq5zm2vuPT1Z5jpXXag2ZhQgdYjmcu",
  "key2": "74Kn5q4uWhR4wgBpT7GkYWPHNjDaaAtxVaWYeTNBKi9pUCBBGm1QFjkToYmakomBzTimsJFkskeRGJFGhEHcbSZ",
  "key3": "4vkGxn9PQoQSDUQxbni77owFvMPW8TiNcwdSoqHsGscAvpCs198BcZpNsEkEgczhu44niV3BTgTkeDbUhvP1wPef",
  "key4": "DhqG8DCSryxij6EHS1E3MvUXM1y5tPxY8u8LK9nMp6oZjiqmFhv8wPAueKPAb8bGRk3ptwcgSVKTjUx2w1TU2ih",
  "key5": "pBHSLnbZQkRsvp7xkkKq8ti33gJzDa1jhxy4UDmQrinUetSKSK4SJc2Wg4T9wfSKSy2TjNK5kdn8AwJ2D6e8uuH",
  "key6": "2mbzBhuCyzHrcc2GtMvhN6PQwhsB9ddvzm7THngnLdkoJiEBEhTtQQ4Y7ynnBCjHC2QMeiZadKtAq12KZTHbzXvV",
  "key7": "2EeQHQZCqQoJURA5dg7L7Y2xjJ9Vi3HHjGFruTAwRczNoVWRusr1tfWsZZcSNpQiJctzW5ZZTjFuKY1h7Py2VHSF",
  "key8": "2AHBaj8PQVGpEfweNMVXQnfGzTvH26PosCo6nAJGVhA9YTSFmmSA728UDvHRU44Ef2gbbyHAdL3CzTTzhEUMnxF7",
  "key9": "4rCvruTrjrNRom8BXFZbAW3uy9r8zZhFzNYJwn28gjhTZLfeZJFVYAv1Nue6ZyfBmy9gHk6MHbCJrwEidKsGJfq6",
  "key10": "5zTQ1cW43D7hu3jqSDqVoiVDoWjkEniRYr9oqjNRbALrQ4ACPN8vuLFdDB7jLuhKoBuSwJqdGUyG1pqKfz8jx5vd",
  "key11": "2HYrGEybsGs3PtNxRWu2t8sr2agdmtj4e1zFC4j1ah3N16BxrJ5wL3MxifCfPUtAAGWYjQNHcRNVbfeee3ea7y38",
  "key12": "3HmnDcAbvZLwfRsiVxU7YCRFXkBzx4YoRahBb2VE6hHz48kU2YeJ2MPzFEZUxSPXxL4MytQgEpk6H541qprqxrAD",
  "key13": "4a1sK3zs95KHpRUbE4xUTJPSz2r3hUurUjQTfXwMEmR3bFYVhbUP6kuhS4RVAVJw11gDFPEB6CSFb2sEcC7Kr7eH",
  "key14": "Hkga4tSC41Lno2gQF4JeFHym5NERS8mhdJGNgrAcL2PkXfvUWYFjrwRWLHMzZvh9JUMZSGgmSbdKojgGZJ6vJU8",
  "key15": "2QL5K81yFdsv1n5dGzTBpsA2HLxdBKUT3E87ZGWvJmF7AkqLCXGHbhzgvpYByBc7sZjSPbWyvoGssE2gTBh5n946",
  "key16": "2YTcSUDMP8SUGegV5MTKVKniM4VyLEXwBDSnei8cQkNkS4DkAyqy4Zhd1HmkJBnqyG6rPKMDGAEnZcCGVxoK6sex",
  "key17": "22DdbAcgwsWeVPpU2Ktu1akMpfq8vt4y9QXd1LvsvDwCnQK9ABcfiM2XTeRBRpt3GDzZ3NLkv3oKA72cu5LWSdAg",
  "key18": "EuNNTaHMQKvYRYMXgWiBkmY5gZXviqUxBT4B87aXdFsBd8wg3W4Ubig4PZ7GAHihbdgRkCbUrU3Y8fQqWCL8KJL",
  "key19": "4Znz3kDMoeopsrqXQVCQaAjwWccM9hCqMsj6UGy3u7M1GAPSYq6FPVcnxd6WSMnw7LabbGcNTxtSwrvgXRw2ZQkY",
  "key20": "4wK9CKPCzpcnMTTadSTqZkEKqXjfCzWxtRguJpBUjx6enhG3GJpghMESkZnz9uot5KNrXHRSvvmwb2jzCHoKqgFQ",
  "key21": "qQrVXsdwgaGPaMryyH4PtvSLT2uNtdy6KRcD8Dry6H84sf4hcazLRsnsgCucotTUqWEgxe8PzRvnxDRPUN8BsXD",
  "key22": "u5TvJgmHMLeaCGUhyN8PfTNwsVyU3NYGd1hXMRYDsQF63f7Pn5r54doZRSRRaTyhsaJuLfLwZsjRLuNdeKAyz9y",
  "key23": "3juAY6pSVNdsRuVrfUgQfMJGUkAw3nGcEQPdoFtUYapTcHAGEpxcMvrcq2oq94i8WFMi6xWrCmabt31mPvQcTWS8",
  "key24": "5yqFhUjym7nCQykh3mpXd2YzjGdVe9kFHpiRRg7jbBjikt2z6yNkuy1h8HZMJ8g98AuAPGBGM1MEMZCh2h6NQYmw",
  "key25": "3adHQQLp26pACorbXodAmbbQwrsoa9RJookYwJFu6fwYCjjRuatubYmEVhXo6Jfi1q2CuKytg6ezWUqoWTzoAF6i",
  "key26": "4vzVw6VJQuKgqtzhfvGxwwsNi7c1vV6CwsNWY9GJwAQ3SVoUAzxWu55unCNWauKZLpt2wSxAMyHRWSE9ehvy8EhS",
  "key27": "3jZU7JqvgYSD85Hxzhrvri6sh3Dix8Lmmyv6G9EeCxdDdUuck48WDJEiuokDyx23ZW3gH3XB5DxzhXGi2Bh2qgn5",
  "key28": "3wMZUJuQZFovj7QxosVHNbtM4etNhtq3dsPEPdgA8uL8ctC5z4AymFAkr7v4kwgftfNUS58Lu1rhmsaYPjGVmwbg",
  "key29": "52dtTVrXLfJQ1cmHoELSjrZENHhPC4Vb8jANrpJm4HoBcd9Z9sZJxeZfUK8fR2KPMhvQsE8N1KE6ckqWy3cVKDYi",
  "key30": "3tZTPJ3TFVNfoSA57wL14u84nKPjbSrNFvumyxz3L7rDLvCRm9R71hGtTHYeEjPo8NPFRXVh133gKB8fHQu7aFqb",
  "key31": "3FMuwSZymvnx6WrHMaUeup7zUrcgR8yDMoAkAnRTGdk3DzyHjuCZdsSQi245pJvWrKAKX8GZxaWrdmHhZeUvsipP",
  "key32": "4n4S3Lr4La7xtYh1sAuqWs4KDjG1x6EzjkR8Ns1C8wvFQwDJzmuF5DZnYL7jbRPRGZ4dPyzEt4uRhvoZ7914auho",
  "key33": "2DmGWCU2RzMpwUVVToych4fBfr4BSAbeyQCcECRhzq8GyQFSfKYk9NZMqYEDVVhkLeKThHWYEzfPLLjJ8VDyGZES",
  "key34": "3dKSngJpQs2KfPdCZYHbVsyFkRHCxnih53fHrZu6wJbRKN6gVLaMtPU6Wm75eskdzvnDdaCi4WTQGG9vMkGx6R56",
  "key35": "2gMU8JEqTDfFKG61mS8nGPG8HHR6HcvXtyBrz222wPWVbawhVhmQygCR1YmPAcFxBF676TZsi1CXN5kmcPFUXkY7",
  "key36": "a5uADHU3PvKJDWseDYXTuDN8ygegfrXeAyS6NJb83dysEwLNf29ycZZ3NrB9qTWGX6FhvNqXFGZCGywnbXsC3Kr",
  "key37": "D7is1EFQpsAcuWFpMdjLhCXpfCxCu61QMd6npr7QsDbgLvmW4g1XDAUg4byfCycGo6zTWvSPrcaZYbe53kicq8x",
  "key38": "5XQ32AapUCbx7bcXT7rxvFEfu62BcuRDWtL1uh28qFBN6bwRbYEcdMJyaDVrtWogKZ6c8stLXLe7stAZEAavPHbk",
  "key39": "3Z5a6GgtL3FKhtvYz75nTafHmRKGzhBwXcPCxBi3CNKLw4syc6qetMLByCfhZfdrpMZwzLHf7TNQSF7UQ6Lke3rU",
  "key40": "3T8zKbREexy3Xc5hAGUvrLL5nGJ38ygsM544rZ7kqqxnrowPi7Ya9RHV4zybMcLsWdTmvVnCc4pmUJYJhoQgEWv5",
  "key41": "2SM1XLghKKspXt3L1Swuyh2Cuqx3dQVQJkm3Qqt9BiHt3CKxoXyivRDJt46pjYLWFzpTHZT5u42mcrCCNBdZar7N",
  "key42": "uFKyQquyztwSKDG9i8nH2WrHSFvKV4hWhuoKqijZapk7nHi7gFJjiPWbxYts8JXEgJP85zrqSCXEJcvj8T8Jbf4",
  "key43": "4pHD7z7oLUM9im7mMrtsccGJA58FJ6CT5fhZ8krKpoysoq5nBYQRbJSKLkiAKqocqDns4JpfN2jEEBmmeEXCM2Av",
  "key44": "dZNcdB7vQVA4CAQEZYXWCHUxkx7WJjhhmCTGStyqUc7aBNUeR32fBubiqDcXzeA1PrpZsnfq4XEuioYKvcVMvBy"
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
