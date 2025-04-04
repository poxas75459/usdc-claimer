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
    "2dq3c8qofgf2e7hfnSB2x38XzJtiwoVQU2wYdsgPxhZCA4eciM6YgjbP2srdHgLceAyNzmdAoVfMMqucigkHG5hU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yUJRrJBDxiUhnwNwznWsZXRGqCedb3w3FLnrNxGg9jXN3yzoeBKtUMdNjQr4Fv7hnDUhQR5YqREtg89Hgf1q8pr",
  "key1": "2LdBMCzxCAYEkSihJjqgTMqxam3EEzZx3cunWR2sWBnBPAJ9mZwaG7yurFdsRU8cY8faRujTnshzW7HxdNiLQQSY",
  "key2": "3KWA8c1VhCj47AEyPdMh5P1kaVa3SZPSq1uf7MMaguXJRuNjHSmEyPB5P4eBNpaqJeWFZnrRVU2cxPnkbEEdcw2o",
  "key3": "2HsWQGESVdFPKECwTkPYL4FYkKhGg9vyRpvs2XJRidYBsDtVYt9ELnrYd8LaTjqwFVqntuyrwjUcNBd8ucpDG6rE",
  "key4": "4gSwrPXau7DS33usufKXaJVJC84xv11ugmccLkvnoBiUY5rfEBogpdWVQ24LMgXKAy74wSL1frEdWyMXF8Wswx69",
  "key5": "2PWvWjkxDozzRCDd5kyR3ynyFG8KteNdJ4mx3a2kMbJNgQzbJnjfP8jBiPRWjMeTqXHDCXmEyuHpDp8fi7HcX2kP",
  "key6": "29vBQkPppvN7KE1ZAQDqCVoxGiw5DUR4rhV7TqyJutqZZy9r18K7GxXwMwuyUm2UvXJ5T58b9wVmfE2xD96MSiUh",
  "key7": "BEWPXzKfaUGrXYgVzHgqPfWCWtgVK92JCS3MG1ZuT7KAFxSjrmvwevwnY73Su9A7FWZMRiAhCKmAQCJAzRAoVwe",
  "key8": "38wkUjgqcBDCh81hxyt4G3xkLvng3zVYYEBXWSFZCFEzAJXkxt8xtsc8rszYef4uw8tvohYAbhwvVm6e9VtAhtUD",
  "key9": "4bT5cMrgGuUb8VnpgbnRg8kDNaKymCWXnDuczsZpogxEBHbpDi4QT2y5JzPYYHMwQVxTotLf7NaejD3jy4yzWwTE",
  "key10": "4iWhEP5yoWWz1MT3ZCrhozT24tymEf1fcBgsUiJHBVTCHekdFg3ZSnstpW1GMC4nvtdL6ygwct91JnEBdDCytoHW",
  "key11": "Na4nGksLWu88SBiDTfxfs1UbGm2xHtxUdMU5Tfz8hfAYwnJNHmaQjwxYU4PRg2dzSxtR5HLV4mSCqMPuPiMaH6V",
  "key12": "3J1eZRs4hSx6yhMoHHUVbiJPSuXt86tBeVUfZDuTG6KK1JMmpwWoHeST7GJem2x4ZryDiGYYGnbXNj7eL3cZXQKU",
  "key13": "BTL6X9RZLi9gHpjNvf8uQ2zcqM5KTf2jSDiazz59tn89VGPuN8Jo28nNPMoPVG6pgZR2P1jJ6zz3vPhZgPXhKod",
  "key14": "2AjeyjtJKKT2nytSwHyA8q8HnEwuoTmoQCA4jVr7h9NN9sniaSg8DKwFukkATrohsLMDJ2Xq9tRgdPZKRHY31uvk",
  "key15": "53NyM3o9oHE7dN1DCnv62gJwSwqq7SBZx4RHt1sDmHvmx4MNuvqReRPX2gpMyzt5muSJKpiv6NnwnnWdE7GeqmCB",
  "key16": "4Jfc9sU3XpAZLT3ia84CL8E5G5VtCCCGq5NshSitF6koF5sNWnKZQAjYsxs5a2L9yn7dhhtewBqA5V5UTgdgSqyB",
  "key17": "4j1kPA1cGVeTSdECShJwghAEurRr1obSpSGb9VweQAXW93dRRMKkmaQnP9YKSNYZT5JBR512a1Dpx7DgXhXY6z1c",
  "key18": "4JKh65RocUeHKmGpKkw7XdKvzTnVwxXWZuMrsWGyuXWeoSubR8L1YvHofrVwkwU7ytn4Rru4WniYR2W4XTAQWKDD",
  "key19": "7zXgD4csbzh24WZKzt2Ut2om5D1kqGMwqEmGKrfa8bibwKG6zJ42VQyW995rnjE9Z7ZigHUeCMJTmMzJ6Lg3EHT",
  "key20": "1bzCQfC8qoVbhr27g1aBdoCZa2wkSUh8CdiSmW7npsjo11hDHFCGqtzrfTyYWPVPgeuXGofGYnguaCn78utjCCT",
  "key21": "4mbckLDyupsiCEQVraDrkLK44pzR6ceSKWq85yFe3qTDfsrkTe6os7y2zquEe3Uph1Xtx47con3fG32mdkmCYVXw",
  "key22": "49FatWYvgPrJ3bQ4hY7cDsiL2mjhSvdX4oN9jnKjTHEZYm7Z92GuMrKLXiM5tabuJedDdocbodvZDLut434NJmmD",
  "key23": "5pULvTBH4eJwqLg3tRCK1xQ4uekpkwXkvjKK3nm3QAKUv6FU9K9mexayEdVnDMRs7Ew6fc74mGNWcJqqDjsantfv",
  "key24": "27VPCMqGfDFHMjFVjoCLoWymfQ3X9RoxtfRfm5ZKSn68FZG5KNU8CJ1b2AaCvjmxgYXLsQpgC7m9R1u2NBrGmyWE",
  "key25": "3ETxRaMpMtw5LY6rFD68kMhLiXrQVUBzsTUiHEcXiSZP6GMDTBYuuXDeaLSXdq5X7gRHBpccpZhTv9ZbUhcgrbyZ",
  "key26": "4aQywF2rNQBFDxZiJsvTveJRDBS7jDsZWSB5GbWJjFQZ88obYBg9Uyfwy2k2YcSKRx8K5eaJXF3QsAWHayBU7ZQC",
  "key27": "22cv7H8WrbicFxKP6s5Qmh4kPHMKb5C77XKEdX7gAFKLuJ5VoLn8M6YPz73n3dqCYAUAmSeyXy1oHLFaHW8DrgpJ",
  "key28": "31KMn4JeWtoe1JhxU8gGofccjMSYnasFPuceFkds3ppvmz1ycvuwW7fhGNXBcjGUWTrJU4zfftvDG2adnS32DkQh",
  "key29": "5PLbZJnegB68c3NBz9vC385ikLyZwXRKtnwRSz1iEMHWsm6eJ1czwf8C3Adz7MX2mN1LAxJdzeRfoXhD2Wku4NYt",
  "key30": "jKmFiVVLobTh4bQ9rR5LQaKi2vZmfQAkxa7Pu7ToTudjnwnSJbxecMb6AH4wHmkKwLJsZgWewtvJjQBJtiD3cgf",
  "key31": "3jonxQikHrDFuyrvz1hGjTwcHK5uhoaeDUc7A41B9oVSywmDy7iiupp9zTgXAr1s5ajToQwzCeCPAoN1MB71nwX4",
  "key32": "2YZpshABr1QR5yzTougUTqBFqEBzypXvgZiCSvPV2rtMaPgmquus5imfZmN6C3vQAs4Zqk5Qy4JS72p7HgZTndNZ"
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
