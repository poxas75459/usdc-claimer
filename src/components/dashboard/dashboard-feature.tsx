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
    "3TQpHhooas5ngrosvGPV9gQN6GWi7TnhT9L8Z2VXZW8jG1bxR1wEa7KhBUE79oqgtMLBmaBwhyDpajD8NZ3E7TKF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G839uhuNdSpejG8xQ7hyj1h5SyjZW1tUKLSZZccbK4FNykXoprJsDeBD1mJvzzwGiEUCFt1HbXCZY4R6qoWCR2A",
  "key1": "hXGcnv2nKbSPTWL7Yai9V77NJVp9WLtAPhcsVrRS96mdCaBAdLke9dzG6pJxziK58K47YWGjHzj8N6dyQkE19jY",
  "key2": "5mdMvuEdVkVP5cJGMsrP5PErhuxGuixgD7NhtiLvYxFq8UH29Q1avQf5cAh2K91FVcaR8Gb7UYKRdQ8i6zkm8Lga",
  "key3": "HshvxsicVsdyirvucSxUFzybnwdc5N4BMthCyfyTdE5nCSHAsqvh9JWBWW189ydiG863y8CwZbNdJ76ZaWHMVtz",
  "key4": "DtKMxYHrTnbqbmR7Mz5GZTDYuDGyGxSZ5aLpviDQativVqPd1foep6dnLPKe8EHJWPYhUumDQ5usazjnRpP67nY",
  "key5": "4Ta3WKSGj7tpm27GhGgKDLJDNwBBsRMJu46C4ukWLpDiB2n7yaEX2Qo5285C72DgxtWwaQ28mmhSvuyKrBsnoDWz",
  "key6": "GJS1i5Q4d7MuZh1EUQ5mL9mecoSUEmFzXLqRE1j8YP8cPgo6xHpabZJNjS8FGYzNHjFifBW1rri5KFYCLqV4v2L",
  "key7": "2c8thTwXRWS5xpb4CCM9V5KxWBs5Rtcf9hxTMGVFjcdnFTQQNU8zfrAtm7fBjrwroZaDbKFCnua2RSxjAoqmho98",
  "key8": "661q8CUJ67eFYpQcM6hcv5caGEameTnJLfeGK2DbQbSyvDBQjA9PyBUnFwAGtWaT3VCXZkmKSBM1pMF6LLPU9uLz",
  "key9": "66iFybirRrt7jReCXXMCE7Sd8C2hJNVvnw3hehwCVciYba9QTVNfvM6kzNvRB4cchMgvB7hvujJEBPLdagbqZX1Y",
  "key10": "6796kW5XQn1LQojh6er1rujQ1yEJHmbNgJiszExVcupz5epFQHLUgJhzssZop2ZkEbgtU3heWvXHUC1nD57cq77y",
  "key11": "5r5xepfBWLyrmNEt2KDiQeUnA6SBHHCs7GBNXog9zbmX22aPHfQS1MWBohV8x698mBZDthX3MZoq9yPZ43fy9H6d",
  "key12": "2qwDDEYJRHYrDYkBqhAZzu2jvmVdRVJMhT9SGMfaDs618xfiM2xfLYjg9LzGDybPfYDkGjRBLHaAXLgx2u8SsSm4",
  "key13": "5YHBmzAs9oKEgy3RNRYqVNk3DP4hUt8N7fJScqbwo7fhYbk4WsZbZfx2EZULtTaVmQETj2R9YYEuLcxQK8CTKyig",
  "key14": "3bAh3ABp87rfc5tYRMpwrKcSvYb2U9TY4YkumhgEH39eBGMUrKQ7ZMgofR1LYSdNyFLqkcqtyKJz2yBtMUMP8D2T",
  "key15": "4fURJvNkiaxDyo6vNmZJTkq2Ennoo7mNJqMB62qEXXJYorasevpYjTtrW9bgXqz15n9JjnpXtobVrnvp1RWA5EPw",
  "key16": "3gfX3R81wEx2daCuyDvFxZgHeRCS6Z95sw11P9iBdnBK1sHv9x1FU2nbgs77M93betsherhJKy1Kazr1b3znzhDg",
  "key17": "ochTTdFHCxK7rsfA2BPEeKYNhofQ31cAEzXa6KNFx8dTNCENxXtyyegFzNCNbaMQDvcSqnpbTKdm46aRBaNVGvh",
  "key18": "4qKJt6AdYe98EU1HS7ezhjayXeErVBafLFoBBMWXcTLnBgggNQFeXT9qJtxkH4H3yzBsHF3uu1GUzwzvNWNuu6Ha",
  "key19": "3Jp92fJVkF5ZEgBdjZCFWsGgTedttU8zDpY7L6arLVcX5QkSvva72H9qzFEtp3xCzEqMKpoSW9oYnvdtMZjXvoyD",
  "key20": "4uC1eQoD7rQ9eHNLhubgGMJVALfJNUNtp5v6APM4X88dnuwkajm5wBRiA6xVRfMAaYbeGVgpHwtMtnyVKBTkhnnr",
  "key21": "5iHbGgjy2fLBh3sVY7Cqazbf5kSpZUsGPUsNiHcPWstTGyzQujBtBAGdFJsWVVrkNANhSNBuo5891pNuPxSLrZdH",
  "key22": "517eaqxqVVS8bY7RjNzmc8Mib6mJmLvCRrFEjHwdwHgyWwXZQqnGeWsVDDfeMN98QdjBvQaMtLk5Kf1QCGksm4qy",
  "key23": "3mmWgdGhpPZD9yR1vwax5aRoMqAsJi2m8DmBZnp6N7pk36rk6jSB9TR82hejxm8HTidBurrsvTchMhaEfi569Pxy",
  "key24": "4vdNf43x7Ehw5seEYhDFFknaq1zN7CrskdDD8yL2XcbZ4ejpynFLxdTj4M4XVqazx5Sg6sn1fQsoqtojDDvSzs6",
  "key25": "nJmtNvcU68dcjznGb7exEs5pNPAVY62JHSBfY77p3FiWDUKA4M6HevqMoh2eehgwXgBNz5kCynCrij2qhQDk3Kp",
  "key26": "26ghZn4b2yrnkEtGNTw32xJuRGY7ujYALeQCYeMzCwUnEMPfsaV7H8T1ipBjTaDuHisCqJdNb6BPKwcWePvA8Mmy",
  "key27": "2j6eeAGLSm8b4dRjWfYN4otgxfWsrBNotpqxDC5N2MxE2iXrG6iVFG1hTCNkyC2b9KWM76kWPsyGTJNsPRdaZkwq",
  "key28": "4B7ASkxXiFYrdZc99j8JMDBqHungHtgfT4PJqdPLFDBTgzfDmdTjQRWSJqrutDV9J7Ez8EmDPUAoHiQVHFN7fA6e",
  "key29": "2xAKTs6XCVrYU3iimLY8HQ6dhbnwjZ1x3ZnrmpLLFRVPcM32THu8CjGwYd1dxvCf1Y3yUgvKx9QU2MBELq8h4PgY",
  "key30": "2YbsMK84U2TvvVK7j8rts5N4hDzJNbEtKGGPZRzEcUNCwHU2MFu3FtGh2GFtGhUuJ5zZpYJKstXf8HuUma4qRuQZ",
  "key31": "53m4EgTsFewALrXT9ZyY6mvQ9Z7Mc5hKm5jq6Gjad7qR4zF3twCXL9LKBxuBUMBtZbh54ibSJfKFugqZLFzXdXHE",
  "key32": "5siPY5BypvmJCbrtjnd3gCH3Tz5JnjgzfkTwxE6fuoVFLcgk3JjsuCrGCTNpxC7TC4XAc6qNVoUza1eR4DwzoqSW",
  "key33": "E5rsXQ2egUUysjJrGK5sDB9qwQJwqNEqZRDXBEKGCMy8zYeSpAiWt63gQESG4pF1C9iStwN2t6ncNuTXNH2Psyo",
  "key34": "5y6khZWWR1us3NmcYKKJukDkVUFZ2UN36tuPmpJXjL9doV5KXUL9hVhXDhAENrC4c3swzLhxdEXxpkFo7cU8uUfE",
  "key35": "h4m8re1H1vu6ryftARVggFjYH6hvW6jS28p9J5V7wNBvRzmr7NTUZKMEp9uNw1yA8mr9XrwyjkqeWnLkiXSnWtz",
  "key36": "2HfG4QFCZ9sHmGMEsXspeG3KmH5Yjzpr5j9tfM8ca2yk56ZC6R3GnAEXagmeB3LGhqAH2A1ZPJ2nXbaodQFqCQdU",
  "key37": "2joYGvngX8tYbzVCFkbcrJc9STYfWdvRNWU4MNPbqZ7Fcn7GPVgB32TmnP34y3Toumy9Y9aTDdNUfzK8FNYj1wUV",
  "key38": "2cwrUS3bN9MYzmUJZrDcG676RZS9GpEJyf3y3n3wZmJHavL3yoXCz1MPwMNrGuzd68HsxjMvd2aoKF11ZyVkhoJR"
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
