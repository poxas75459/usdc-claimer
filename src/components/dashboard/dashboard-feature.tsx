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
    "5eTjJSr3U38RdqsiYLMcmwB49iv5JtJmxTbYdnycxZNnjAgQY3gX9M3g7dEwLzQ1KmdMNhv8QJoWyMpwgFpVvGsZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22ABu1XLdJGHENdjH4ucRL9ANunL1PnTimURUfK9JsS8aUZAR7HLXt36KT3zXiq1sCMvbk6y2JHiSj3LZHRSHUHi",
  "key1": "28XEMcQ6jechadn7JLQH5wV6heVjeH5ARhVMN3pTA1wmddqieT4pvi8STbMwwHbQJFgHuoudT8vBj4nkkHxr6zC6",
  "key2": "42kyEZNPpPZnJ2Mop6D4YLq3VfARQrYFJvEqs6aeXxqEvLbwmCtBxTpJ6zSTBH5mGwbMSq3SvyN5mbmxaJ4W7o6G",
  "key3": "59aP6cGV9MahxJ6GX4TBX8GHsbq96HHe8W1tPKr735C8gYvASAxBAXCWVnzSUNHuoaQVKUsnc1NGJUAQB3bp6t6J",
  "key4": "acCkNEyeDqESANETnX1aRVwGVFxZQ2nrH7F2kz71f8Kjba62yHTfMWb6BiF8c3Cb1mxEaQo1dyjWdNDUiKHdZ4k",
  "key5": "5eT1QnnQ776vHLjg5jeiwUye5FEnAZgMymegnxeuHaukGcueSBV3ZzgqvnwmXHYhWRXEQ34zHXowdkbjSe5qJY5A",
  "key6": "2f7kqNF1oTkh8ZNAcRScNfUQEfmNy1WjWyLKbsM2DSpLQC3aWfw9hHnSTYBiuSZZdkw4FH1eMSTPn4rZ8ZWWU46",
  "key7": "4CGsKnnEmjf9JCqUHbGtfY7A5Xind9oRtygnMrbGjg4NJyJDCMizUGV3hVZmkUTx3QRDYLn1XGzKAixyVS6ECdxD",
  "key8": "2K4t6vgUPdugFCLrsLSDxQfuQwqLBPWZnBo3taFzo3pVfjm2quqWqxhZFRAyfjT8i6Kxt8iTKkXTcmXVo193ndwY",
  "key9": "4UqACYk8Nk5nUtPwge6Szf1NSjmuDA5GuYDG1S318BJpbdH4w7s1tHmUMUzWQjyiAUvASDfdTrHYMDRMa7rRfZLR",
  "key10": "bDD7s9zkKyuFTVBerYLNJFpH7aWuADfpBMrtWYebX3gAe8SyBMxrj8YczMY4eGM2FuKR6Q7a3p11qWhEqQ1dDpg",
  "key11": "2EQfFFaeed7RNUgzA9sd21ZhR5Zzu5Xn3cPoypwEQRL5Fk95qzPW3Nki3uzASp8D3wciETobVtKE7oa8fmvCgGEf",
  "key12": "67hqUk4rP5cnkkE3sH2RVrTjPf8oyYPZgEkxksmiwnuxmgYCyLu5WCUseWy9VMKxoVBBE8umPhwd3GzD4TrCHf4N",
  "key13": "FYdzug5L2kero3EqobQbuDD2sfM4vsQqL9x9PDn4vTNhaSMqRRf1CqQYqeYx1CzBhJkrj2tfDadwKWLLJy5dAjY",
  "key14": "633fPPfsTGimeRnFnhimYMpeHEXTk9LjiCBddok8PhCzzDEzXiVfp3Lz5QvHw1icj4ZiDuKsG9LJXD1yi6YXjJXT",
  "key15": "2ypT9vadPNKZwaAQKg4hJJPxoDA2fUHvK41PmcKWJftc59XWAWCNktGLyfjRdLHoV2feJYmXUSns93vL8kkjHGup",
  "key16": "4tX5K1zGr1Ncas3QLd895y4moSHMz1pNravWVNtUCzugMX2XFCqvv3xa1isfTowpa2WSfTz4q9gw1pn7gMFQnyUv",
  "key17": "57pZk4Ymg3RWFQA2SePhkEi29htj3kroDvCu7ZRCxRsrDZQB7BZRYS1hzxvoaiDwzrpMJqngqqezWQGfLiQ1atsJ",
  "key18": "5LhLopBrNrufKLBkvwVpxQCu4NKHLataprPQq6LRgcRShsv7RTbwB3EZWMi953WW3567TPDLpN3hkEKgDMEHMeFB",
  "key19": "3fso3iMte4koMBpM2nTsdxW6sA9Ao5bbrMGwr9mHhCop9XA3XpnXF5pqzjtWmiMpdhApoXgZv3XGrxsAgZCwycdR",
  "key20": "3ffJg6rLsE5dL7ub5isPNcxGNpnZixyEPDfkSVzTEjFhLJhAvqCjbE61cpGRfaoNBJeCFcB3BTdtQAUN8Kkfg55t",
  "key21": "44zCFJa68VcQC9kdBxEPnD6caLmTodiYDMib1gejX2gdC1rfEgykpdtKkGsZexwwJeCw5jvSyNBiPY2Hbh545qS2",
  "key22": "zSb636EmVM3GDqgUoAMLyHBv8szVh7snaz2g9e14y6fc3NtdGCSVnycnwsRZeUc1GnotjELAP2CgVMzrLyVJhFU",
  "key23": "ST31bPyo1hXr3YRYJm1zsfyW5iRg2drbUxWLM5VtQqKLE4fuRfoVgQukxTkKCoAkYR88Hs2vG9gi27SxrvpKC2n",
  "key24": "3pUUDSePSqhumc3qXTdgsNezohWmEbozqQ8Diiucara6aaxtbtbFXmXeWY8P34TBJYYQd8xtAsf6NUtAaFMffioz",
  "key25": "ssKtu9wTYtXbhq1GFe4U58ZZJD2vfsZVTFacvnyzxvpiaBQP26UJfuLgz9fGM7uFxndivcNXftebrCxbwPKfugj",
  "key26": "4LmPRo5zJn56m7WKVuh3TP67iR7azTmSwtTeFkZCD5okx1ENHUaKNjJo2tcddWaNhs2qdVhY7Vp3t6K4JwGqreKd",
  "key27": "vifHQStLsvE7ipZDcEGkidPqhdD5EbCawLSYuBHCbi2sSfJdns9xnWNozuCMj9nHkEBR2okkzzo4n1sJrWEF1gt",
  "key28": "2ZxRTVRkhzVbkUgDLxP6cvCvHCSxMkRL2Z5zTvo9rVx3Lgx6pkFs9qmeTHsGC6L3vNksaQp4ADeq9d1ZUeguqCdx",
  "key29": "58hjSBrCQK7qeoJNJhAAPgfnG71WeQMjAohy5Z32dP1i9fnZvwftC1VJALAqF6QYLQ5URZKrU4tddPYZ6kcbwnhc",
  "key30": "2eYfb4Ji9ziq7YXMcyXkqsXXNJPPdahghXpvvQAyPg3K3ixtWTYLMLtnviXdQ3uwQsJjHURQ9szqW9QUiG827wgj",
  "key31": "3hxWG95hx1QUPZrZpRnrBC8jge9pSqmBz5TEpkg8bdrcR49hkn7txMGivhKNFjPvWiBgR9p1LvRhUNiSKARa7f2s",
  "key32": "5Mk3zMrh6tJSXMguai4cbgRncmoMuQU3nkAFSGv3yoUMbjguBcpde1wsz5N1t1ScX5EXA52p8D6Z8dYeSJHRQUyM",
  "key33": "2pzUWMEiDD9VsmqKmDdgxHZBDU89kdWU7PankbzV8o1RDRw3MA8SYNFcuiSMdqBxNdsu771FdXyMJiLeoivKRCn9",
  "key34": "2LGffhvWBDpzoPKCGoz919DTydFHH9cbXjHwqpJ355a2N9SdUDz4FHnubUNJkZciKiPTR8QQrFerSnMhDn72fdxJ",
  "key35": "3P8eFtnDCUnpTtZQQNm3NmBmUJsrKhe2kbknfY7oFndhw2gjXTRrGZzSd8sYT77pek1kuQm8fvGiGqBCt2U4WnSb",
  "key36": "4JN3YfjiKcP71SYZRo12bKNYkEuEKC34KZHezSjpg1N17baE4G3LrgG8PkeMGaFW8vv39baz5m2dFyCgYSeZjGY2",
  "key37": "2FYUSmnkZuYW7f5MfNZ1AnXMxwaneUMM3U1hMnQdbWmj3C5VjzYT5rHuC8R6xFAg8XmhL4tFTMmHepfdy5Yk3HUe",
  "key38": "2vV9pCnck5odBxVTzYe4HYMrTe4hcgtNeHJGPqbcv78ydYQnwhU5xAAbHwmerfofLR2NnunoknmAPY2yDwbxJzGk",
  "key39": "2nB5RW2yHBkgVYcNcypRh23jzMJH7UMTheWTC43RgEKpVstrniCKDHAozptB89ngY6ZiCwnjqX7uv58cqgvJQ3a5",
  "key40": "KTxCXKzamG36SiNpX1qiwtT4UjugQctKjPv8xeTrKWTgKpKdF654tq2WRUDZ3qov9t1CVkZf9RCvrVqp9BqXNK9",
  "key41": "4YsDRd5GPYGYJqDdx5rPruYg7jjpLuVoncf1eGQGr5X8ufTsWdZDcVFdovfzUmPf82arzF7JzDpEbmfku4WWeGnK",
  "key42": "58ByxiYMMKrchef8SmkTZzfunAb3BmSfSqRkDDAG4XVxh2MMvisQEsxj9DJd9YY97eDfYGtQtyNKXpYNks2eocbX",
  "key43": "4JGakEhqXToPFoutoHSy8far98Wz24Lo2Yq1Kh2tKd2xbp2SsWJmY4QEMdwXGryEZ9dbYQDLSAyxPCCyxnketTR2",
  "key44": "3BFSghAgV9EkPHt5JvwYG48H6JGwKJ5jn2aGiC1iN6hxpJm3Y3ymSP2auCk3YPEXMe7TeyJoHHFEhuiDRRAMy157",
  "key45": "2wiZJqWKi3QRVTtGxou5gdKPMSm8kP8s4rrMm52F9vKtV3mjZrTXcJfZv8JVoj4MFLhyvdCJ49iXyiF4dDJ5WTYb",
  "key46": "2Kjhb75MvTxZ7dM9iw6GXdWPxRQt6nH57PgNLi9gjiirmSJRtSZudRUddiNQG8rEtBjJ6zM8FJaRHvEJPmU9d4x2",
  "key47": "4xxzvB4xogMyZCcC6TPp2WqtqqLUiWrfdAfCiA3J7g4dxF2BsnxUSmNsuQP731vxtGjS7tt6vxSyD1W14jB6UckZ",
  "key48": "2FC8zaz4xjarJpPtPwRbNAeAteDPxaoY6GNT3wDfD2Ne8Fsr9WiJGimveXKJC8GyL5whjqFwWTDk88qR8H9N6adq"
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
