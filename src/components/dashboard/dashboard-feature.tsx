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
    "4wTrWzZaGisTVDSRwjeGFExxRYCsyTqvvadqdCR1rasYBShysNYQktDzeUszZZnmV1hHtUyx82X84FJatXBEEqiY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XsBKic77ffPpy4PQUz8MfFeYdhHHUadg2bZewxUDgDwRtRQvguUrCf15MgvAVQyZuQJKYKLnvz35rxp8HFnejSW",
  "key1": "L9ieRrDXoQ3W5mwVoKR8RH1TTrqGvNfj5QMyeZu113HQhDovmrNiyMpvd4e5iBwPiRCDiSSQ7EAoMKYHb3on5BX",
  "key2": "29KPq3k4AVKcxw29ppf3gihJmqt2z44rHh7uzDc9oCTQ4fqiRowptvk5J5VEyZRQcfsWLYGnkFYK7Er7nBaFPgXz",
  "key3": "2GyvR1CPUDJubU5gAHWCRnRP62SMKTycBKnEHVJvfQQmzvPLStwfASuHW2fPPmTdxSYME4ScJr3dazhYzqEX2Tim",
  "key4": "GhvDvgkwGjyym9BLTYuD8CDG68mrGaGq6Ccdt4KtzpQ1fXcJUEugRjx4eJT3LFB9h4Hq8sNsj4fWcMLvFAzTVFt",
  "key5": "4XbtBbFT8Wc3XaptPaWPpE2idY6xNwWTxsMDip1ZFtZ67B2pLPB8y8oMjgFBoCuLgNcmp86D4kDJ16fTgUuFNinu",
  "key6": "kgBoQBpvgtFr8ZA2kwEGQoceehTcr1A19S6JT4fGpahd9XpprFuraXCXrwuZNB1mcjKwbHbJCqHTbboNkBCDWnA",
  "key7": "4zK9oTMXeZFFQHPEQCBdZPQFx1WJh32s7cWJFyW233xnj54MGKziEDgZYFM2sdbFUvhxKnw1uu1e54PYv1W4uBLN",
  "key8": "cNZaWkqTW4dt6k24cVGNiRoS647vDXGXtkt6B5hQs3acEnXz3D2kYXoZXNxay8F9jUEt95u3G52WhHApqq1hKZS",
  "key9": "3XTxM5T58u46vpoaudzXarQC5omaVj9VqCFPYUhJWEzH2vRpdXUGggSyEM1xfczkpTZyRo6sRLVdPiPZtVWSGa6y",
  "key10": "3ngsXAZReDF4HNRYVqdPjjykSeAyZ9C141i2JRD95RTnBQL7wHMfAn2WP5vfzVaz9YmD4x5Z2hZMxvqKup6CaosN",
  "key11": "5Gvs9dxtciLQEv8kX1WuE7HbxAdgmo8p94FQgAkseUPskL19WsFbtfhVTvEFWExG7QS8iN56FRegWTKUuXX3GM8P",
  "key12": "5eShDqCpix8kRryYjXEPVuQrpE255tT8barAwu4rwzLxKmrHzbDmjMBhSpWYkV8LBiKWNWLeqnBL5Fag1nKh8oLg",
  "key13": "57Eo7BcmUrKLffhTKYonfji5fCF1JevBKVMaut4aJKHJzXCQW6c36vhW1YxBgszMS9gNaaYzCeXqLhkaVwXPf5o3",
  "key14": "2wbgTvqrZqiMyAANrX7DytREXAhUDFQfBNMuaDdz67DGQbyb5sHjwEjwmrF38k1ZRcu6wLWC2esDx1PiP3qkmD36",
  "key15": "5sELJzFuYbTWRgBMsbrXi2aLUBtNRi1q15beqp88TUNoSoHtEhepVaKrQsGCJSbY1J7frbxaADjenMuRWVHjvoD5",
  "key16": "5kvC43CQaayR2UWycqfhwqHYVnzL8rdfUDaYtQh4wfLmRsJADhVWbBacLEMbesLjiG6WXpFL9F1KZSPjnjYhLXC4",
  "key17": "5XSPLfUFwEH4YTVtGGMcNdxn8dGL8HdBEzEtbyTpwaMv1XuNNaDD3Fx9q4wvWZCDJBnZbMGAERSZbGpTEGbBHpxN",
  "key18": "4qqv1YL5e7acBaPSi47kudx1ZtwFiVVGMaLL2uKyLAfWcYvr9nsoSWSosY5wmiktT1MyBVLidgYQ9bgYBkRi2ZP6",
  "key19": "43aBAm7Qivtirasix3jENLUfjrrgYArJ3Ne4ccATXjdrFA9GGVBg8MhaaRYnAD3fcqajXCVzVrPe5x7NYUDtj87U",
  "key20": "YZdA978fzZMzh1pu86CA2oyugJdrDjPFqHPYG9cDb4wY9qtTKogABdpZA2aU8N7xDArJmvAC6pE2g5HJPiCJ8HD",
  "key21": "SfnBsaU8SoJQiqxH7KT8YB8xVMxSA7u9ikAqhwHPCQMmzkguFY1kgXtRdfKB5CQsnR4Y4iE2yp2WwWcLdX1FpKF",
  "key22": "4zyLt1DM3JXrVJTHT1T3fnpcsrqQ73NYjGP48NphC3DFgihxuc8wNPSeB3cvFw9Lkfw5spBRe33j14giV49hXL13",
  "key23": "KGTfDjNc6RsgTEEGkaRKaZvSzq5HsPBKt3nohQHvHbL8255TQpGnDxXtYqCFgiZhjfY9dpuiqvextLpy1fUvgEF",
  "key24": "38j7QNpnE2Sxtbs5PGyoeKsuQmAWoNHJwqsJcRw2MVmw943TgmrwmxJTM4roha9jEcxGQzh4y4qQSYihTw6unYju",
  "key25": "4vrYMKU8XqbWdCYEm7CpLrbWi9LEhcr31qmdsWByY7HSXLVBLhzJqWrhwTAQuSYMMurDDRV32RVvKpLALZyKJBPr",
  "key26": "4dbcMpfvEAR6LFkmQasTgqUtK7JHVFs1G1niQdcEdDca72pNKE4iZ5PJnfakAZYxK3SsKpq44ssU3gb8Dhe7poM",
  "key27": "qEAEjAcvw8FCTm2sgcY8GbgXYTSXmW6CB49Av7kAfHpfZP2xaDmKMYQwLNT7vSc9ASB9J8TsMtzXpx9zj5cU1ZG",
  "key28": "23baSD5sv9obZQVfTYVC3ZyCYRX5GYhUXGN5EPwD6jMf9SVWN1sJz29nSqP3zMf9etkDXyoLKY6Q6SDiREb4qvar",
  "key29": "2X1fAfmtofJX82wc7dK12PnLRTudgG7FV8SZEjEMzpUbFgby4QpCeUj8Au2phzsS3AKRhtgBqZBi1i9xGPgyzKDj",
  "key30": "4TxovwUsumFVadXGBBtTLgRs9BoqKAUTADqbGnLCyQPgzWUC1iSYQeL41PUWSDnMTT5a4VrZRtt5RbeFEsC8yTq7",
  "key31": "3kp1G65yiYan35GMkftaBUQtsRDzKNDMvJ9ZZMyAWqMLspAb5bi5sZCiEj1m6pPgdvrtdgdgsjom3E1qTZfmuL1Q",
  "key32": "2MWa2SxfziV9bGY96mZiJXfjZrpu7wfgJaTQpwq9JB8jeKEeZM1zPy4hYu57ms9wAcGptg13JWM8MLzjxzVLoB5u",
  "key33": "5zXvyHbrgcBcHJf7QRyJLt7sGS3u38iNG73j8cmLoNTF6BKPjjbgKdMHLsv1JD7cs8xujCWqycZeRkvyPSCegt9i",
  "key34": "3dNZy3p4cu95dgVwVVqk1b1jSyFdrTZ9a1QPvzy914v9J7tCxvpmYfRVNbAWSmaqxnSQhZMLaKnUEzaLVFS8qsCb",
  "key35": "42v1wm82C3JDZB3fxjZSebHLBF4axfXxawoqjB3X1EnbeqRQm3VuYAwVYqoAPEGQ6yFkSFtezpRR6dvPE9rNf9U2"
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
