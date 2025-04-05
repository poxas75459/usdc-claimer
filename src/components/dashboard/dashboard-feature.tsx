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
    "5EqRL7ihi5Rz2GLqxSySgSjJ7fTozTHVzvpN9MrrnpxFCikFzhVNBxgDzMMLMqQ1fNcGfiAoV85jqpJ114XyDHAE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YTFqge8ucJPv1ympzfDfgSi2HHPZYop4zu7nhrSEQdqVkfd7womKkna2Zz5yvwCGQ2K4uRy6ngYjW7RujFmJ8ZS",
  "key1": "3hRzYHBUNH1JawxkxpVJsRMBgcp9u27j5p4aVdji75eNhfKC9ZY5XUj34N5CNskp4eUe3F8qSU4i7d6yi9GD6MTt",
  "key2": "3TZv9QFikSKZL7s25JskRM7TCmhYZfchdMPJU9CaxMfqAbcUErF4FL8bxQc4h9PRfe7f7Dpu9FWgXtf6QKZroDDw",
  "key3": "2Ynb22A4JJRmmUhxprcvR3FapWB4X5AR3aR452PZsRFtaWfWYqEjnQaVSbnenAxfwQE6DrqCiybBqrmGPKPdL4HR",
  "key4": "v5uVzuDnRURqL4UjUCeZTiNwPqCpHDGiNE8w2on7zJJFXxRd6wTTV2ZspgTit7JUAUPc6Lfe3zyuwRZ4zXqvuTH",
  "key5": "5DvHFH7MgopF3Y1LXoFnqgm7V8knhxgEnyL4Rebprgk1AEULG9cC6N16P11hoHK7dVTc1fSDpXxCD2w8BiM7fk8M",
  "key6": "4MHitU46o72nYyeskDkbgUs4tdWPkh1L2Zerj6SgdaT2o2QfVGConv7NeqgZvQDXrgJtuUcuRoeFFAsq4NoLxD3y",
  "key7": "5RGvwraH8KEp5to6E7YJXow4CCysi1qNhzosmQwJVpmDUToDaccJ5jdPSw4PQVXD9H9EdDREHTofwCQbgNQmWLkc",
  "key8": "jzjxPQ7awyGhB4prsBwVdEkSEzTUPwPZFX65CxifYSr9vYfkKXUWzZYAo9auqwmzZhCLbXrWiXybKJMTJPLqv44",
  "key9": "5cSe1Y5ED3XQpB7pe3BvSQsVU6iDhnPuNiv2i6D3bhwHA91kbLV9m6Ee2KFVETEo1nDerHLSs6vXty9SK5Kzo6m5",
  "key10": "2TUdZHugdoJQtw3xNh2LkTzkLA462vMwnG9aWdJuSTjpXuqRbjr4nXNGJCcXFi2XBtY9zJ7Jcwm1e7KDqqJMnoRp",
  "key11": "4gTYTMW3rEwmWWmz3m2Y7rDyH282NDqVrkyoPfdTfaADkaiZ8oSUvvdPw5EnCEkYbUKo4NKMuKFGtGUpo2dCktim",
  "key12": "5nhyNNGN64KX97FX49vKRfrMc6soyWuKxQj2DrECyMRRUn7jfFY8YBhoXZXW2Niztdi9GtzDahAW7Wzva41jt6Bt",
  "key13": "5w3n6CPMXed62M6xggVdgZ2ncdbdZ3tvFuARWKrK4Tn3ZcMdNL1itaHFsyKobWQLVkFPLWNRtWkWsbBtkbbQG12p",
  "key14": "d3HxMHqTXvGs6jcXaXBkw7xTbKqVs3MrWwoPEgvXDApAHEFXFjLmhwacZowNC2EnHB4zf79ermSSkckTrScCQKL",
  "key15": "4KDJ9WhcWa1y2E88psVVAhXrSVtzJAm4FEUKvX3qnQtxM8NHFrP2v6SM4p98cNKcLSWz5qgLStHMTdHRSgSZwrch",
  "key16": "28y3ewXvBW5DorDZF7yLb6iPB5senp46kmwtvAWYamJHAnn35PJ3aZyZUoTRdC6vmJT6r7SEudFjJRdgfc9Kdhxm",
  "key17": "54K3E6PdCaVV5xDw6ZYxbdH1XYY6rMmD56qgB6zkWNWgVc1G3AvzxF45sXrFDR3i2qwXc1JcQLRLRbWmAS4pEw8r",
  "key18": "dzTGsW3HuBPJ3FhZqroesChH3jCmwRu1hyFPYoFSW7yxqjP53e3nC6r3YDSaa5WTkbUHCg5te3cppvRSEGfyvuM",
  "key19": "5vBmyDznivhSuL6VX2h5oLG3QpsAtMH3p2FsRQiXpyUkZHWToYmHECrwWxRk6H5Pw6pVsTGS8qAyRPfnPncPFS3K",
  "key20": "2ZhHBFTbSgWHbzdwxdHoFKw6bJ3D1tUHFJY146a7hkydWq1y9JZgoTALXR4YT1wfyQengE22YhfkfitA2B87vUKa",
  "key21": "2HoiPYUXa4xueuycerXR2RECyPZokJBpWhLyszovgnXNTbKTjQy9atsDQKvmX7sWHkhDzfQ9P8Ve7foiVyCbjWQD",
  "key22": "yvQL63JDYbKSgTmE22gN94yksSsfy27Ku3zfhyqrMcvBptww24yFjn2ND8w9vKTvj1KWESQzWiVcJkdHXtV5px3",
  "key23": "4SKgGDf1zmJbrpQST9wfVjjFfF4j1YoJJftwKWFw8cyqahgT5yY6spz5MCcpotgnJQLnurc6N8e2bCvH43TKkgWK",
  "key24": "4YifARphhVnpqQDDYXS37qXoVFe2GJnPzhBksjnsH2C7nuBP1tf3oDLgJui9kd7PkvRw1qKhXZYbjGtS1mnEYzpH",
  "key25": "5kzRjkHaL3Qo1ph2eysXYTBVkJUZxnTmktX9KEjz5F2FNGqLAVKeG3t7TKeigPZcH9svWoK1zfjF1h2HcLCYmRaY",
  "key26": "AQDPt7wA5AnDKoYscBTmi9aKaU9qSgFi8QcPXv9ZXSvPvU9Fk77XyeMxQthqPevPSqUzFiB3vT3K4SjxsAzNW7e",
  "key27": "giQqeQhHZQtoiPjkCLW6C6NiKeG4DYLuSMQRsDuauy5HcX9xAD2CHNSh6DyHW7zQSqedEaNqwZHyKpzTTAK19AR",
  "key28": "551WcTZpoheqR2zkgEA3Vi1tTE9BZjoqZAEvS2inrZiDjSmLhrcXc7cNeqH9Z6sPrRHZqjEdYsN4VdjJ6VfFfFRP",
  "key29": "48xKppL8uv9xSeTTAzDLZ1APQBe2Mb1bPnr4qSu6iJ564orxCr8f9WQspBPZ48WiYUNvSzE2whyyB7eA8EehX3Fd",
  "key30": "3D1QGCJJad8BJtREJmXxPbYeL7Kqnpg1nPPjHtc1rxtzaTvtJy3YgeFrTEyeZXekm1rqDEFA424GcW5ydt64ZhGi",
  "key31": "51qAtwrw1WrpDhsvk3BHF8348ESLdJEqXgoQ7xsf23WqZXWeVbXVE6RuwzP6ENLEc1spo3ShdJtx2mJVgBWZCocK",
  "key32": "3u5xUVysATf7afq19NcfnVyDAiT8JZvqYjwDDa2hxL7ZDyDQHMs13H8HQdGw2rg5BQSNif9PYmnEH2WddEDnjWnx",
  "key33": "3k5vCZtacE9ZhuFjNddKeNm4T8bZpTd8WhhhWUUxjWPwwoZxxSdvB3YRjEWurqPCy8j68JVqWHwNcEhufRhqJp9u",
  "key34": "4AmsoSWfzvtV3yGeXmdQ2nk1qD181tDCyLyFg2sQ5hpNKhUXvYdDAn8wPkBkVV6hXayDghD4xzCYsdeEs4owqJwT",
  "key35": "44NfzGyJuRDR7bm1VEVjag7Zbsq4mASCAVMy3vCPuToF8bqRBjwcY8ffgENsgjEievSJWmqxEPP46WJZihcvQShU"
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
