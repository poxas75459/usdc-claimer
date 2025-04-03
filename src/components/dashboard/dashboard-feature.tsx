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
    "5p2z7m1VwsGsax8kafABVPm5d7DPxtnQ8TyH1jXL38jXCNnP3XHmuoutGTS2h2DVjg8dHBn8faViRedwwjWha65i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NN2uPKDYrK7o8sTG7basBJwFabbg38CCmg9QSAp9v4ywXKnmrE71toFPheZkVKHdanpR1zXeC7rVxRNyKzsU9g7",
  "key1": "3YjRBEvwBHX3HRV3bAJjXH17Xgxr3RKoR15cLAB8WBzaqinH2Xc7xpiRLobwxTtYxgF6xJdNy6CVZLDmWDayQcm3",
  "key2": "4KDA3ifUt8SsVLoqvVYPjrgW16jiLHeGMk76NaCiRW19M4ngCrqKmg6TpHP7pW5Q5eMZ3mcVTiELdDP7PjSspxyK",
  "key3": "41wWwEstkWqeFwaFjRzXD1YRjWuA7PvqDB5RT8f8YWAvgDTwTPLoasxRR9mMCtQWk9NJnkiuDM5rmFsFC4LrNgGF",
  "key4": "43uJaecZqkAqpWRX96PJYE2pjaYgiVGoJgkVixkiiBq2hnXsmPNxjV1AX6aNQxFvvfoshcMDxs9465mPCt1p6Gog",
  "key5": "t175PqB32SAtiuSYwupFxDiH3c5nfJYpu58mf5QTG3wxqEn8QQV8PFQQ5TpunwmVT74qksGrt2wo2pzKpoc22px",
  "key6": "TAz5ziZ2FgEvoRj5oMKViQCffCNJ2e7tyiaLqWoXEej8eZTL3ncBjGaf2hnbLURejMZDvNsPD539dA3LJQ3XKNG",
  "key7": "3dNZePDQ2oJxx67CJs7RpPZZH73SjCkTQSEHbuCU3x4SV7WRXSwc1C5BFfzjtn7Jr5qSvHLXTgtygE8Ay2c3BYNt",
  "key8": "34vrJhpX35XMfw3vTRd4K43BoAwnzCsCM1fPcrbkgJmSEmKAqwN2Sn7efCPum6edq8MnoV5VqNU6DLLGvfyZhMPp",
  "key9": "33RQxFnxVcEKwAhsauaFgSygiKxSSnEcsPSSDky7wKdVwWr1DWZFq9a5Y6GFF8GAST4W35qDQQW5q8edYXQ7F9nn",
  "key10": "4HXeL6HcHFkFrwEfurL4YBeVDq7Re2ySAkRiStjrYZbRL7o2aTZ3f6mGyNgt4133VDe3oV34ihqCmcomsf2PWmYG",
  "key11": "4h2hP4ZwwPfDuxtC7YFuwJqdacrJabotjBrsyZiPPUVjtzKRV7ZgdPtASmwFQiJfff85ogJsSrihCByNzUXWSmtq",
  "key12": "gRxdtkUDTtSLJMDbLzjzztJykmvXp4nXwp14KmhixFLEKEwvqzP8uWzZS2SPuZqufKDZGnmbmNYpvK8Tqy8iCF7",
  "key13": "5BpF6mA3ERvh28283YTw67EAKFv6yvPJMdoNLEVRDMedE1HjLo9jK8xMYDjbLSHL3Yz2yFPa3E9oYWttSpbnzxpT",
  "key14": "5AwpNBR49ZAnfVdXUJ1yxCDn5HsTqvuYtQyU6yrs7zKP1KLv7KGwi5fsHg61editVAHD2Zn4evqVrTngWRPxyxKM",
  "key15": "2zwjpgZv6sjh8zQHz2KfC4KrbCnc6Ana1Yk1xBPcFRgogzk8kfQsPsihqeymBGg8o7eXVwQRXZpzcpRn2zN2Jr97",
  "key16": "5AhrSPfTr3U92D1qUcuMHYJajjk1hsWrw2jgcXWbqpdgou3P5Rxn3EaeqiabHW9i5SfWkmv25oLcu9N3A7staiER",
  "key17": "4GxBb1iwEABrYoZaEYpX8pmPzmew6GvVKFHmoHrkinC1bvAxHfpJBXaSApzraiGV2QX3rmtGZ2UThLyuJJBrYmzG",
  "key18": "P9PC7fw3tTV5KwRU5xRv9LNiecazNmjWYPs4KdbTUTyabEiM6bCqXGaa82oa1BovFVgJpzqthwqbwinr859NGeG",
  "key19": "DNxtGtoURWaxAmVi6XCszXaHBJ4BapYfB7AdC1vmgeykLyihkcbpGqYLbV4Gi5Lc4aTgemZBZtwmqJXpaaQxDCE",
  "key20": "4ZqCg2GgxZDuH49rdVzx9dZEp8PEfaneVLrzswyTBDHJ1vWbGxha2tjPNMSG4X4YW1TQycAN9Ae1iFfrcuno7gi5",
  "key21": "8YyuMU9qvriFwaYiD1jBeDRymBWsCCt3fm734zrn23zFxdD5MxMphChh872MLpqYn7sDnAP4wcagk1tmLjQNhUQ",
  "key22": "2M968VQ2S5r15mWZunigKe7LFPD9cRzbLEWUEg6PVXaSBT8N8XeKRaN6Hn5K4KeiL3jpMN2F2BAprTeQhZKaaVqc",
  "key23": "5xSmNazFXFv8Fo2LWf9gNF9PvexYsKUwNRRMvwd246VEZiJTNDqwBRn38ZDCxFjNWpDSsM7SRwKMfskQM5YTZ6DW",
  "key24": "3p2EScMLQXEn6DGo7XPEQQ5qtrzuvYaJR1e5ufWv7bqvcECHeiyox1kZPnAEqxZUDf8emdCd48BkraqkZygUSKxb",
  "key25": "3qyLGrneK13kGwQcQdvsvBNXzqYozswjhEGgNY4v2iy8X9SXGLPvYXF2GWy1tFiWXvFg7oL8apQ2aiUHntTkBD29",
  "key26": "jh4x6i2Qy7EKjVDawaG7ffutgxBqCXddEkmxuuiKjRo98b26pK1xBFAy2t5mb32APTxyP6EMXJANXyC5o4S3Z1a",
  "key27": "58gxV8yJRZEd2peQMyZC7jUJmMvJzhLwmJHoBYWjoZ3rWr8Z7roYqfyixZPQ7Pgfasnpra7F4YxwpsaauvNcYqdt",
  "key28": "3scp6yQjm5jX9mjBkvD5yaRLwNKsEAQrE154yyUT8gDxFYbLpWzUPA7jXTCtrNDDVGiXeMJveeZGMwUDJxY6AQ4b",
  "key29": "4yBWXw2KmPB6j1XnnD9Atdz9wfCiyxigS4YQQXZJJjhU2SottZ5cMkAC8T9s3FPzP9q7iNS1EFDmB2ds4r4sy34u",
  "key30": "MtfoH5SqptQgcUQHHUrTUM6Yiv6Y9appcqR2tCQuLeQM6Msn5Kc5RMjto1urRKHvxk4QGhHH1ADTuUHKem6W86z",
  "key31": "2opMhuSr4fqZrQqvWkvysYbKeaX8CnLrE1aDUscBPXcx5cyUYbk9ELEUGoBrbS9xSo4GRRgWD3tUqX6py44n25hg",
  "key32": "5nDeKrx5ugXuthAhcxsK1iVrzxLz6SX7cmny3qWFbjDKtoT7BpXNEWycLJwh31AhNhcddEKkHDuim9pTQA8nKdDd",
  "key33": "m5C1EGWafxM1iXzZkLdT3vBDkBG1ABr2jNKtjcLWBXmVBc5XVsk2smxssFTHHogg3bzyyAPh5j2tEXmWa1qXuP6",
  "key34": "5mXPSKZ6VN9Jm1u5NKkDwSL6YaFK1VWvEeX3T4Xam9L1Sbxs6Jw4XJNAiPre6oStK8R5gonNUnNn1Cz93joMdS6P",
  "key35": "23uhfrkej9xsGcZWAFSRkwfamV2xmRSbPkGcYwZBa1F25NhTZLqAJaTai6BFjDhfukNqBRXFjZrKvFvzvSKacTjo",
  "key36": "3m5n8sqirYPNbzSDezZB5H8ETqsEr8aJuZHtR1wSCjcefPuTAXwfbEyYWD5nhxpwUB4UKVxyHfTTBZ9YHxADErDH",
  "key37": "3RHDHghHa7AYMXrjhfyvdUdSTAicqvMn4Sf8BwzbBd37TBmLNkiGiSdWTPwm2T3Mnt195r1e8sJJAxtfFS64Hkh6",
  "key38": "5admPFwhSMGYbktUBYMHquq2SnbwCpC1GChFRtdGGURf4biafTPtNGsTAWzWSs3EFrKmJBiT4Dt3RHX4xKTBB9tw",
  "key39": "LszSBuQEYYpehLzYt78jKpwWgC1Lg21fQFvaCvYnV5XndNaABEaNpS3zdKT6qvQH3mcjmAwVaUU2Sey2i8oooK5",
  "key40": "2VoZFcJ2iuvw97cBtFNHzz5oeBXDRJSS9RshFmnp8rjNounEiuJYJi7CbASH4CEdCktLnyCfNtfDTnxaSSxRsBhG"
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
