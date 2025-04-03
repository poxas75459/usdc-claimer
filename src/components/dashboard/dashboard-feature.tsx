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
    "22AmF5P3aqtfDjZxnmTWW6ME1XDbts5HLNgMkPDB6BE1weZ6ztkvEwYRKCY8ibX2zB9z29T9JwoZb8XBasLwvdHS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SEdfcSQxKfTjv7kDRQoV6zmQUyS28GKEwWkMc1gnW2xkJSyTECiYmUM5xbWrEiX3J3r1BKjegpMBsM4x1atBSXf",
  "key1": "2xZPaibpg77hbC9JZ69yw95UJbLXp3PkWmkc64ssSvYeXYANapHZsbmXRwCG5LprA7F5Mr5LYGWUQyhEEmLK78At",
  "key2": "3gZEhkA2A26mX74PvQVF1RN2VNkR5jS8UxCibiDBrGsmHwsyRHpzN8dko5b3nqb4iuRGEJvFBYHwK4wdPhcj2Mwq",
  "key3": "yWGh6gt33YmmSVBksrd2xaUaR9zK35jCqCerRmvnHtSt3ozgRsYY8D8tmwJskiFe6mKWBJmL3J9gW1eHh8oapj4",
  "key4": "5gW1facaxqXScLZUFHhVSf62o4PwfG3iRhoDRuJ8G5zH7iinhSN8Ep6GDD9F3LbkrLehhHaMbWSsw9RVNxMPuZox",
  "key5": "3T2MJWghQnEMTxexfAudTVZ5KZ4j2WCvKLnDydKGhVKJWSK9EyCzhbRifENnkxHk8Smi33qQvixSQoSnijKGd3cP",
  "key6": "3oTAFZfCQet9NLfL6QwaTCPVfS6qg6uHJdA7a7sqiWa5hQDuUftMqoKKTmZhL1ZrY2GZeuL2JLSbMbGqJSvbZeSv",
  "key7": "4PwYMZx6Y5himAkepnfo64BfDh7nEMc1nYRDZZCR72qABuXztniKcthe5RLazXqbPccrRYthodGsxntybyUB6WWz",
  "key8": "21Gp3QLiagwcf8eWRMBJ7nX58o3vxXsR2TKjG7T7PAhicP3g1jd4Yf9RDnVpmcfGWYeTw3CcEFk6KJ5qZP72ub45",
  "key9": "2Ede87tSxX5evH1BrKCmNktUXprbGRz3y9ysFTqCv6Z7Aaxmf5qPaxA3qhjLy8DsEHkB3yHDLL9SCgtDhH8D8Kt7",
  "key10": "4AWeDPyXnLTAqnD39sVTvfucWLH9E7yvLTrcjSd8LYHSUyxFwjVs9hM2fZvWjV7Lq6DzxntHUSDK1dJvKZ63ff4o",
  "key11": "4ZfmxRHkPeH42cYeq2TpupmZiWgsukUEWiw29mfXUC4yoSzk3QY3S16LT42PYxxCb6n9F9cU7DJYWawwWRv25RiU",
  "key12": "4PKVM2CSz878Evngz68agkBE4rZFqbioGx8yU8TUmpwyHZGNwWEVif2H9ccBzeJjpHjWT89PUZ7yWuFMjmi9Yr5c",
  "key13": "4MNFYQmiRjjTX817vCEARRKvqXJBPV5P7PTpt1Hs1qAXXKsmyihfuE4VS2qdUnvirw3F6H2amh2b1maxHEcyv9uy",
  "key14": "B2ho9KfcoLwWbVACHrHTTTMXMsJgMzDVrhc55HiTBbhFroCbM1ovDPsepF7Bijyimk75MNZX5VhcfJuZw9Qfdb9",
  "key15": "5dUSjmTZvF3wCopKTc8LtP8iqHmGp9aFYKW1XcLbA4fAAvfQ1z4qGi521mkQkdoZqeuTqguANBRk4VX2NPGr4hhy",
  "key16": "2o2uKhkcxUGi1PGm9bZtADTioCdf9CYPVcs113pdm2BGTQriyhL32BNrrQVuKoboBuqCNzKpkXp5hrHFAzDdhJin",
  "key17": "3G31av4Nr9fnEEVJeNuLJKj9p9Wtc5LANV5aHrECQ4yn1BCAAz1xi5AE41CVMhtyonBC2gsM1W2nSA72HUZx7u9v",
  "key18": "3qyf8PuRSmR6yPskCs9N1W6gjJb4JzvqPNtwu78aFD8sJVGj8KcTLFh7f5d9nT4cYjgfJ41D3CMUBewL8iuUWuHU",
  "key19": "3Q1ta13f8EDXJ6sDvmBErEGzKk72MkKMcoH4toMssfmwVtnV8SyaZcYZWfFsrMeGihPsukxXpzucN8CccecnD1it",
  "key20": "TNidzap3FPdsRr7Jw1H3G9epfLYGK1zmJJwv7bfNXwuQrytsN4i7hL7wa8acRc91jpysAjmBHaoCd6HDCKZfNd7",
  "key21": "5VnW38kir4nGkzRZiUeCsMFyKCYSkR8H6uppjnUcpvdqhckPMAMwQepuBvwBxtZK5ExMqui5me7DJhBzarXjqdCJ",
  "key22": "dJXjvmW9k2vvwWn7DRpixQDzFTJwTQLRHEQxYjinfPLKWH3a1sjuET6jWbArxS4RZE2U5gGz8gWKEo2iiqNTt5t",
  "key23": "3sJcYK2JxHL1Urftx7xRttpMgKcgxpaVsMUyqEK6UBfMvccaEMSKvup2bpJTg1rkUP2riU3S8tXGFvuLZvLKALQW",
  "key24": "46ZGbPfaJFG8UEUPNnU5ym9fxykDTF2t7bXASWJghWx6qjahLFskBiF11vdm6Y7TqYGrUMaNeMNBq5WVUsLNULxv",
  "key25": "5CyafDk92nUDoUWWW7fnqVQFuN2xJrRoZHDfyDdepiaK6tpwEXEC17v1MLB6sY9vWRojvR2yjzrGYpsLkr2phs6",
  "key26": "27MWX4BmynM9MfpzXbRftjTSiMp66jP557i9tnAwXaT7Y4UhCiJCaVb772TTU392mZaJzmJULPPbKkXVe23iNhPr",
  "key27": "65ewxnrhZGjTNff4aEos2vydRCJcoy6cYjAz6fzFp4fi8J1cFdX7hnXEtdh4LCYSnTchdTybYVBxrKKmKVoeeDv3",
  "key28": "4kekv2u1wd9iQBREH2KkFrJGPVAvRav2kyRjHaq3L8A31eobiEHfMLbkVwEMvJp7fqMZT24rfyhbJMkNBrTemU6m",
  "key29": "3J8KWg9N1LeV5UkPYcoUsnsaFNcQBde2wcwJZNjxP29AjH69w2ymEyk5CmJ2cTruMup6MRoyjUaMuoCtx4iXQ3VA",
  "key30": "3q5rVFeVqtTtCT3UpaJrcN3crpum4AehuUHBUefBhiM1wVr65D9igp2cJyvVLVW5tJgQ7QvRSt3VXNPJizbJvrci",
  "key31": "2dMx4RhMNq5VTg7zjcnku2YhyLVEcgia6u7BkZkq3hSjfcP1LeWcE7syrpykkxtBDbWqTyiTsNjLnxsc7rNDk14D",
  "key32": "9Xc6H1JTp84DfDqdkGxErxBjrpaqSNssW34EUXYG9eXBkMsY4PHYSgsuBNAinndGJHPAbm1LfCLUagNJ6phVtZC",
  "key33": "4aiQS3T879YDfH4SCGahbfeM3JjRz8q7kwC4gqjnM9VsNfQeS5c6rNdm7kjQsayHKpKyh37DtMWFLKyoAkQFZj9m",
  "key34": "2CX5aXzpruMoUFmJUvyKhnq4S7EGY1T5jQt8Zz5zAHYLVt2eUyhFp9EcQRHpXA3EcRsVzPJy3uCNdscSFN95VjGn",
  "key35": "24t2NqRDCh3XnPsiHHAwRsLkQo4oQge1iMcW61xUDodqVri6rBqjWZXjKsFWmBn7daA9Rkvu6VF5kNU81bArFn9W",
  "key36": "2GgLxVRnnphZUpyYZ5ER2b5A97KigzvBYbjnDoZj5NydS6hyN2D7X28qeBewCYeoLnB34oFde3t6E5m4BG7DgxY5",
  "key37": "4myz44SL9psQme6JWwgybkkUDFAiZdAHkZaWFeLtD1gDvEcTUxHivgBXxyZwiUeCLc9mXGrGgW2pqPxi79BZnxe9",
  "key38": "2cnZfP8tMsyiqgAwFmdEuk2n2Z2deaZiUcyokNM12qhdx7X2nWS6NmvdkAeFH5JwZxyVj6L9yqMJrbeFvkzBKwxf",
  "key39": "5WS1Gi2yEru8EYCenc8fMVJ5PYJ38pQu3YKNfqDShMr6WjLLee2Q3MX55JumPzhkeaLXHaoWhpEGmczuL535PWKU",
  "key40": "5EoYiGL51MxC2NoM5DrN1xepje3hdWipzMXmZpaXZ9vqnbwRkF4zbTrwAdJYA415A2kWXzLyXoXPUPJq9ZVdq2QX",
  "key41": "4sPf63ymaJNyfY4xqAoh3aJ3ravEGBJ9dFP3TsJHCak88hhZpeQxJYpZEXefrLqDkismCXNWEEuD9uB9PMu2RdJg",
  "key42": "JPRznjTRcE2s2v6RgkyA5sBJPfRoXjc9bdd9BPynZfGjHVTTmKjZazD6N1yex6D9wEBhHUZRLBCbbq8Rr3Jtpvp",
  "key43": "ETm1siMtxhxf6ep6rx5ey4UkfPVjZ3CgCDtc6ANx8E7uPgNADFVK731psxrhCG5wgGr37d5TCxaacFkuhg2YD3j",
  "key44": "5835YgnagaqxXogorXiii4xd2xAtpPGXCYXnLBUWdgPaJmfUwFNxuycjLVYZTqaBNqUDHCCKXzv9Y8YvNtLciV5f",
  "key45": "46qTbaysgnPet665BaoFfshXMx3kt8uTufwVpLyhSP7hTNm2XrtMBj4pehmm6g79KT94HvP8pz3ySATDJZxMWpzq",
  "key46": "2ngSGrfN7DSRdS9SRF3RX8Z55qHW2qopPVF1Nf4a9fHk5zWz5g9jV4nZjVtGWhS8jVRANc7wzu5h9eDfVFCw9ram",
  "key47": "BvDQBTjAV2huie8cEmxo5NTSAC7um77eiVzNRJwms8hwDF6bzDDNRRQAqyAqG2rYfNdDU1Vayfn8pQfyirw1HcW",
  "key48": "5ALRKrJf3kstLE6ebUKctsv2jRLDeSzpMkAC3dg54TjzcSPdvvYggJcodbsYgn1C8uG1LraHRU4w3WdvT3NsbL6M"
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
