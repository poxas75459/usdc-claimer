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
    "4sqhDKp37jizTxXTNdrjYNyUXGqdQpQXhdayB3sa9imNGByi6eeQfUjxFhLUhJ4kXDTTNuXJyGwUQbf5cpqx6rKn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DXLgSAqaR2UT9GNzFsMAvLBjfVc99xZ8rDCdwzxjwmkRaeSrQJDAHGTDbXQrCYgz9ZnyD75kdPU6FboojKQJEZ9",
  "key1": "3RGTcoc3NMaijgE8P3qcMv2otqdCzLaUMHZCaaQJhWwYdPMqzaaTpEGfCnFtCHgLawDdMW2gg8kuAUjVBQ6f5oxp",
  "key2": "PUA6aWSaAQp7Lk4mVJCue34BpWPdeLkdbNeWfrGvkLVvbDSPcVpPuYYzufgeApnUrvu8NFq3m9YoSpfgjr6xe79",
  "key3": "4srVBhxhPdjGXta9soB94i35rja7WJCxKyDGJpA1vyEHq4iQz4zBiZe4GAGgipMXPTc77xq9BvWyknxTt9JhWiBY",
  "key4": "5bQMMMaFGJH4G8VwuitYVFfodXBwbFxCdU4FiBWniFtYn56EvvhgpG41coX7tfr3gdLzsAZ756XX217vksU29Nj6",
  "key5": "4iZQh3DAan2zEvatJFM2FG1XkY7zmQgnsKo8DVs9W55PmikG8jNwoSRcaUBigUqoUjM6gnoQGFpoQU18jWA3odmF",
  "key6": "meSzYfNShewXjNujXTzAUdQZMG5q5ADsGnMGWv7tqpXHcDdCiy6VUjxbnV9ARBGBVWLH2hEnWWQgYLG8zzEJ5ii",
  "key7": "2a4Lr8gjmhEEAvKbv37iak7vsAhapSrLxenu8o9mi5dfeNeytDTyWd5Ddrn2iyvkyNRivgiiCdYiHVdu1tzQBNmM",
  "key8": "25o52Jy7CpXTEeng2PhYdREcqjd4o7KnMCSQhSPGkEcJtPxKsNArwMbhpJ2FguvdGBxXBiZSgFA5V9bJS8LPne2f",
  "key9": "5bF32q8LgzRk2xR2Dzv9VLRv5fNtyNmzGuBpwLNX7vRJBueER7wYCRooBZWAH1kdUWFqtuEBgB3tHXKduqT3qutv",
  "key10": "gfYXb6KJg8CYzP2B6kQy9KnXFDYD8HkfuX24a7oSRwosVAegTaBamwoGqz2LzotrJYKL1P5EyzxqoB9CZ2QGrjt",
  "key11": "2EbwcXdp4PhGpRJxt2eNZzMZTJcaXKYphiVmv9bGCT1RcfPH4hHhQkuRdF1rrK6dKrjZKfDvMEKUZmSqdXA7XUGb",
  "key12": "5LCUqW7HoGNYJSehtKLSpHjQrqrSpBvDeT2LaBzHNzyC5YnfNxHMXnsWsgZVXMfH1HGoDh6kfPZM8pf9K7SQWRTA",
  "key13": "4hpfjZuRGX7DNbrZUQUDL4tpah1mTsKmBzzK4LxRYR8iv3tLfs1fvDZXjsGMEYTrN9b9u2WASarfeLFzdXw2kRfr",
  "key14": "2UFyax6M5LKDoDH4N7i2no24KUmmrSX4sdb7G3EUDAcsP7gAMU9KxZmFiEfLdV2z9ENhAiNhBWWnxQUZoP1Qa81u",
  "key15": "5keCPnnUwxJm1nsi2h7kE3kJ5awpswKgcwYqiCCckyNH8K7sxtUVXQzc2wJwjLhSszQR3ae8hvWbmbbvief6yxpc",
  "key16": "AENzZSrUxmVXSTW4qm5dUxwgtGkjz4V1n1ojUJj34U82GBjwHE47ZcbFV1Ayk99uZvSfeEaB13jDsMXVTjSQZS5",
  "key17": "5SxQBNPAC7ZNcXQNR27XXQmfQXLGm2ugFmvuouVGfVuaBkA1UJFMacu8XPooEFwTr2qWcFXBQV7yFsVMK1A33zXM",
  "key18": "3aFcuwekXAveVayJUU3GyvT1SQs28QjTxYk2bG28grGVtHDKv5bMgeGBknYwvCqRbH7SmnRF1DpREGfhAnoFbvya",
  "key19": "dKA6nmprC2jgUdGizMNVQkdKbc158ou8rjU487nMmXg6EfC9UzQAhPgBfhPdvHKbepsAgBvEu6Xm7HsJukbZSjS",
  "key20": "259bdbJ2LYJdXg5uzsHYoQDpQeKxzFzF5Mgm1GP5VLKzqGDa1JE78yyMkjunkGu1Zx5u9DJY8WQg34wWry53LcAK",
  "key21": "4oo386DYSuyXZ2mPasoPXuspgkPK367Uw3WfCLEUXJaqYKDUF9jhxyFtjtB2kgXNbCjo3keGCL4qJrX5cs26BupW",
  "key22": "yvxiPZNGVCY9jRgpbdHzBqPwfUB9s7rUyYU38eXnK3uRAwrLDwfgqrZ8G3Bha9obbNupaDa7t2s1dAUcFT3ADox",
  "key23": "4GQPQffK7bqFc4wZZQAFKRjvnhUHhaoW4gHvMs5eb8JkbKEyrhxPxgtWrwGzGkEdr964pqa4czDB3RfuiSH2cTfm",
  "key24": "4RgZXUVMXkbTRjvH176ateMjWikCWfQYkas82iwgfWLHRD4jzmGyV2R3AqT8i7HVMSZ5PiVJieJqwxWip8UBqjzb",
  "key25": "4BSQuY2om69ZRyniCoq7swXBRW9EhrgA314X5c9W2WM894br79jEe7QexJEf7GNiTX5eSE9ofEyn2mkgaGJUWhBm",
  "key26": "3fFSv8gc65ERGnk7rR9EidJsnqZfQ9p31Jk5mRGoXbdp7TU6wZBxckUAuNtAzuBwJ2fAskYQAawc6DkefFQZLDBo",
  "key27": "4P3Zzc9RsYFMu6f49qnnDmERSWshn63dR2dnNADWpgGLhJxmEbTx1xvaT78A95gHYyKoX5hpoeVZ9cxxz4Zk7E93",
  "key28": "gb47C3pvxP8aGzJPCbstY9t8nqWa5cHvCEPjxbMHEh2Pk3AGjqEiM9eLrgXqPUkGD1pbfskTsoonDBHTpz3ebd4",
  "key29": "2wHCPtdtAEgVmLXQQZG6qpkBTmXNRPUDehYRA28nuBMYyhs5H4vmjhFpQNRnBpBfALBLKAkKLt8XHnwvYXUHB2WQ",
  "key30": "2HKjprR3RcKt36CSpGvZa13ykwCvBBz4NfDC943K4kFjh958q2Vo6eQnRW1DXZbUXYhQ773vRf1M1YDs8sTifJNh",
  "key31": "2hA1XconXH9GsLFeDGYgrJKvcLNFo3MXUs3HnwZeyNMEtFGh6vfirU2dBcPYwyq8yuGw9MEsFoLkNp1bSMhv47QT",
  "key32": "4vB8Hfc9mJdceJqFXwUAhwb4f2TvhnAL2yvY5izZndc2Y1VzdVm4fRNXvn3XwkuDsMeXGKPKxGSb4VNJ58oS7ZBE",
  "key33": "3sH7pgw8ghfiA2nd89hDWmGp5ndq8cSbsXssix6mDUwR2mbXcmwjBvy6WnZPEANXKKpk3EysSE6SdmoxpNm69dZM",
  "key34": "hQJumEReKLoKrWTfbPpfZei2P5wbikVMPetXJmih6PFm6kbrsME9JNP3QThKEvc97K8PHZAES8TqaBYR6AnhVLp",
  "key35": "3miVGAnRrD9kXZ4pZWeM1MREUiJwzswMXSAzPhEDNpEXL8TCnPVF8J89tSCbWx3zvXK8QJawCY8RNZ4PZ4kU4nsR",
  "key36": "4NiYdAcEJtAect67BNAmEKXHoBFMsr42h9RYpJoaDyT23eHtwMYW7JETXZUpxiz1RXCApQVspyMmmo7GJRqTs83v",
  "key37": "3fFDsRLcY7xqzQnRV7iKjxNbxvaVE1DHa4KsavUC17gPdabuzQJWdyrbXueupHpjeWTurGkJe9NcLVnh42dXawjS",
  "key38": "3MzGRzQFYrAMxd9J6wD3riqBPHsHPgFJJRsseXDBoywt64GaPX4khupFGCp8xeGEDrjNYe9S5MBN1pvodxF81NBv",
  "key39": "5sbjEUd3pB1Ufe7PTQWLhGXFLdhGkdemjpSmg8HXQDQdFaVjFiLfUDwMBMTzDDnpASN8yQm4q34jYCMspknsgSCr",
  "key40": "28mxvM3a4HcFWooEZbwm4xrxJanoGVVmbAvLmBD84jDjsNGfJdb1z8FyTWyPTKyki81B7HLkwjDzEJssz984hYuh",
  "key41": "3EcNUwFD5H1L7uTBQZgtxRNPHQwG3SCNE2wEWQ1GRwaWPmgfYkZCAP3nUnaKQN4bDz8psL5SLd5S3tKiMi1kAPjb",
  "key42": "4SWTUMkhLDZdbUGMSWSz34JmHmuZX2Nh3Dmo9bfM2beT4DJ1VtV1AmmUFHysEY9j2gDRmShLaXQiLjGLaczgc3XY",
  "key43": "2CdLnfiyiFM4JRzvVFAHZg26vBHyCKYwvXAfnr5toJWRdJTLFzykdG3ndX6iBeBvdgG59QDzpeGLk73YjEzWPvGq",
  "key44": "5fdvgQk71RP5HF1gR2eQg5QTY4fu5ToJHDRtad2C9nhUmzSAwQCxT4JQu2bPW9xqJU8vVdp9Urdxrk1uKdFwUCy1",
  "key45": "3r7EPZRk2v5sWZJ52pUbPovzvTwB1kgEbWUZmeGTJ8serq9Wswc873oYMs6LU9vYU1ZLooxDR4WWNTUFtYF7WmQy"
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
