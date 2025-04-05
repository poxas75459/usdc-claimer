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
    "BJUxpBjqu65hmnGszWEmbNTfji7hMA6GjMbbp8DwcJ1AHvF6iar1JD2wPcUhDSSb5F1eh6SE39HHzGZEcKnD3vV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HhwJXywZkmdg9kxn3DCpVAU7Edbis6pp1thSdN92Aieq2nSQMdLYRkCck2fbMpsKsT1NMt4hCsPAzA2b17xVeim",
  "key1": "3KkuxH5pqPWSavgQAvrRhKE3DRCeisaFiCsWAVJv2TaYGYDXbWvfBoWXXPkS3iQcTWz2UBg17NtF6LN3itahaRek",
  "key2": "mP4Eq67rZxXwxUzsWVBCzR2yLPxNNp5o4Y6rwVu1ZJXvnAQ9K9n4DTwz87ayiDFxaZgUaiFKbbbfMoAdYw6zV9x",
  "key3": "4GDWmTRbbjWdzJJsdhbKSiS4aUU92U7sLbv81bRA6av2T3kG6Wu1XhJx4dTd81v49hhBx4WD1xSV8TVCzHWQYDjf",
  "key4": "5LmoBRFT3UBVTRoWzpbCecowKqydPz58c7cP46n1nAKrgp9AnP7qpnWn4c2T3z8NARMtvPRq5C9sHyofK9mzFadR",
  "key5": "3dUYcr3XY5R8dSeyxe3YqYZsBzQPtJH9EAzPmgvwBU9CFqNyzCLoZBte4eoSJkaaKxCgJDbQpsaHgUFJo72dV7pd",
  "key6": "3GSyyCcct7kEzDXUarrYbGG6JRtmQntaTbRX2xjFiKL73MRRVoFQ3EYa9fz16v1aHm5vgS16voSHz1CMCHVs46Ns",
  "key7": "rFJt7jf91HfuMbCaG8c5VaFuVDwVeuArjYrt9Mzq8mKhzBpgZwhefVZtUPbZ6MYKZF4x33Da4JEmkHgoXnsnRrQ",
  "key8": "5qaNoBR7f9qak2y89kRKpgRrfpDftJLCvGUE4UHj64kJzSs64D5Yxb8kaBp8fD1ufGj3ESKJ7TWi9ebvfWfmJAp9",
  "key9": "4zBMH7rA8WW2vRMMPTFj7STT8GdvMkHZxpjYD4NdfvgkncKgUKDBib6YChk6tBxeJNaMJGMnyF1wqvaUoH8h6Qvt",
  "key10": "gTknXKAUbCWsJhdB15mG19jTrwWwXiqsa79zMSiUUnnGc7crsETPoHCYRyQFFy8ZYXN3oLjnucK4a4TVs964FSW",
  "key11": "2HohzCcFCGq99yLZugTZpgjKXwqGZMa3zpYf6yPLKDaXkjDsSk8BBk9M272ZG8EKVnSjZUuigwwAxmmbh8fnczA7",
  "key12": "3cDdL227co9qmAeEup9w4sChCFnfx7uSQ4rUhKf19bSzBQUJqrD34q61PyuPcnrijAKcPsM6mVr4cPqRHtTfqMMw",
  "key13": "GT8yHCfva5DxsFNJCbTt6QQH273vB1a1skFcRY6Pdv24GGvmLUxUJKAb9uXLksmkKk8po8AmyJQdftikqWG8WN5",
  "key14": "5T57hSozo3zmT23YcKpCgK9Wy63zKrAn3q9DKZtFcXnLVPFtj2NxC2eRoJgF6xdq3B83o1GtLtgDJ2RpARxCGt3r",
  "key15": "4hcwDxWkgQf6G9BnFU69Yxyd8SUu7aDzDmzqR5nDjWHk64m3Z6zC8e6TXXB6GiE4RgTfiMrhcgyii4txBAT9mCWw",
  "key16": "3cbHyzpDLnHz9YGgxD6Wp3MJjQPtyCh35k9NokR3Uc7duEk65r7SZdzWjnzEueD3VyAqEq37RMcZ3GdiS4pmrDhP",
  "key17": "4wgX9QZjFaTeLXdW1T4KuWbiXuGrimaEthNtDEPRERZEZJZbDDGyaFDgd6AkUEYQQUPqp6MZWkwcHi5armHceSKC",
  "key18": "2KQBSrhuCk2BWgKRKEDBaraAEcJNkoSqrAPnoNxHSHvGQtAUjyvpLn8PLR2n7eBWA1RgP8ao2yPDv1esaAGoR3Ff",
  "key19": "2RtAxwojARSppTdavp7Uf6CB9YfdsDt1qHiBqDZmcwVJ9t1pti5MViZALmcHhAJD6Qfw4JqSxFj43ZfycESgavQ3",
  "key20": "3Vq7ezHbssMFiprJuurRVP8gJE4FLoRWAYmQhZBgpT9NdRBFEXcxB1EiJFwx7dGfVFY7hcKtn1Yvwb8NuSzSmqAD",
  "key21": "4ngHLbRn6bmHTdGnhN9EuLXB4sHQdXB4yLxaJYXaJkuFSQjv7XiexDFf6ojYuiKgTzbYPJ2DqkXnXA8apysHsWgx",
  "key22": "64SbVtEa6rBytiTVVJmkcECK29tUByBREzE6E3j2BqqPW5qGt5RAc291h9rarGyHPX8PkU32P6XhtDVQV2CoPu3h",
  "key23": "2zmcSe4sjeFn2f8n3CuYAiJx7FNCGpp7mtBxtFToVr7BFakfzjGx2cHSPgBEY6w3zPCyHniduCQ6MscXqFN3pwBk",
  "key24": "2vfZ2SSQu8RxVDgum9qR1f1nGbstSMrgZ1W9aauUpnpLaovGkU1yuJpHcXgWhHHAhzfac9dEA4r3QCbB6cmL6zwB",
  "key25": "iS3CKcvaTrkSetko5TFM1PH856qnoVXyDdZNGkDGJBwtjtVyxsWj2XwuNYHkYMu2iuEc7D4GWpDgMEfBpJ8AGyu",
  "key26": "2U3cvwoDe496vtDsxomDAoL1p3546HpeXiXjyCaf6ZcNKeMH1sic4qXdzcT94ukHPHfT5ESGRGbPVC8ZCYHvWuDN",
  "key27": "7qCwUN6AzBy5ARyDvQt8U9ariPg2gFoDgBcwqUsjpBiegEPE6RYrkWfvDXnApV7AYLt4XGSBEbypy3AZRPVoyZj",
  "key28": "5XYeyiT872uMVHewtsH4WdDpUznUxDvRj2K9PkQwf3cKHDY8PHr4qm7QUi583FEARNRkbEX2j6RiZm6EmaxZeW1R",
  "key29": "4Wb47eb3Ap4CxYDyWtCViyjYtTdVmqJdAYmDnC6G4AZqFrz5FXHDCKttCrJxFuFqoo2QNhHt5SinbTF21XquTGZ",
  "key30": "5uKhLzWmcaL9j9JWcaZGmJkCZbh8Fk6maWJiz8Ki3wtJ56rEjqoFL25vPQRvSGZxH511z4eVUyzBoEsoxe6PoPMS"
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
