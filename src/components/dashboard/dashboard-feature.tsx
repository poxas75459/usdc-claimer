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
    "67kLjEx2td6mLJeszW4SYKRkxZjaGPirohY4QQS862AydjW2VzJLfsQMNQc2rKCE6b2ArwrLXqXVzxnse968Ddzz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PoF5LPKiLD6ydeK1qfwF5ogjQt3tcD3WXj3jcC7uK7pWuCWuXsZB53tfjdTnYZw5fb9M5djQ7GMswmvvpaGHPy4",
  "key1": "4mMcN28CKUKjvYCPhGWAytXJ56PGETAnpWYwEmVVAd7qTjdpGXfsxAg8d2uUzSMtjGP9PegpaMxumJqu97VExrug",
  "key2": "3fgZXyDKC6HZwZecAJs5py1N7nNZZxseXTyDceoAFgA6jxc9RLSH73Xj4Ax6Pq8Qxy2e62kMgWN2CsJVTjNt8Ksz",
  "key3": "5Vgwcz6CsmSgT79UghJVZ1HtUcPfBE9FXXBejoAetLErKtbkyVVNNnKngpMkUSRs46ZAH42FgLvunXMzBktJ3upU",
  "key4": "4BkDRzKSoripnnxC9LDwsNDojssV2hnLKqEp1jq14fCdRhLRzZGjeRQy8R8t9NvFWC7A4REBKEoXFc4v45K93jSS",
  "key5": "3N5oMRQ693Lkh2pVN827t3svgyUVFZYHeWpaQm7cBsvP5zyfCygM52d2GXzzULJQwdeXpfQeSMVuB732LAMYDZGj",
  "key6": "5edLcrUeHqpWMHNo6Z8HRQe6UMeh4og6fKHg85FjkPyp1ngwBdsxeBSvDB4WDpPU3oSjgE5ZvSmPggkwAM2tBk8t",
  "key7": "45oWnLiteS23iKrsRzXD17uTHq9knNSrTqDWqAY5fqgGVuRctCrCMH82zwKq1ohL9DkNbdLDQoych5f25wXhNfvb",
  "key8": "271Acs7282GDLUpHHsSxb348fAmEm8NwrkGzbArcxvGR16xhTgfuY17sCSLq8QdYczrfLsFreH4mMaxPbFXQ5un1",
  "key9": "5iHSX5BWfrVUnZcmDoorcZc4jkyFGP1GYyFbUzo37VTEB1XfUJP7cioApWxp8LyD49FvRP22QQQWcGY5CbtXNwS7",
  "key10": "5H9wBWcwEpcdBhhS2KsvxA4etmYDCY7Ub8LvLsMkPq91PMLpEmCKbjz7Rqso8vAm2ffhDNt4N8JoTctTVpSLdXk",
  "key11": "TDcbxE15UtGx8xa5WZE8Fi3gnzNoziz9BUxFCUdwVoZcNt4jU9PF7nVfN3mdZ9ovJYr7XPLegFyg8LaduXXi9T1",
  "key12": "CRVSQnyMqciUGr17dA3EtkMKL91BEtMpzb7qyxVuvvmhnbpyRgdYB6tuVo3DCg8upwcxKycJS84MxmrihKXYGet",
  "key13": "3iALoLgB9B1BArEgPfStpS47s2JPrvszbhx9U9ceiRov36MLZuEvUXjdFjEJ2yTDpp2gL2LZK71oAXSYcHRKfQ8u",
  "key14": "M4xhb68B6CrbdLmr3TdForxhLEP1hFDJ1pDEQSpef6PyocqKb5SCPvuHkPXbosEAkMSX23QiB7E4x71PhUHXMPU",
  "key15": "5RDen1GVLJVTfiWFSHagRnHbUqmhL6EAWz6HL2mg1Uv8b9NfApWRg8RHQrWXNrjpZPVxDgLcg2BgRzkv48Z9KHji",
  "key16": "419JJSRFfzcuYqNGjmkUj4FsAsMiLPejMqAbDRMJFrV9oJrVWVDjidNW64LBpws2Ps1Q8kfuW87aYKbiy4RmJCo7",
  "key17": "2de1J2hPdAwqzv74xSj1f6wyRhkNETB3rEEunjGNEq8VbrGHLkr9bMxN48fEXU3GnjjuXxPQEK1xkkFaDV93ypTX",
  "key18": "52us8QtvDqVrme6hBfw3TdWiUnJruGNS3VjUbSEMsW2bpeNkWS7FGj1XmRa4N61XRy6xeKoqA9kdR3jJaVq5w35A",
  "key19": "39hRFrQ9zZSLqpDcdq1t5kTgsbYPaoHv8VJ5GCX2J2x7YVhwWtmNgd1Fg9hquwq6SwsBA24uxS36xKcDQjWnY1AJ",
  "key20": "5kPVxS64PHL4dGiy2SQhm8qZjtXr4KecYmiv1Ca9uLuZGUmsDR9kbidqbNSr9v3snLF5rN7c9g61SdXZAiaNd6yc",
  "key21": "fXrvjak8Wc4At5MhpfyJ15qu9yrPEzpA37rnyiLbuuSYKw6ajdvewa93SFhwn5VJQsJo21y88c4JEjGF9CaeFww",
  "key22": "38LhSkvmRPZYs3wGCqBrvzW541ovy3s19uRSnZswqH4nQxebMZ9twGDUZoYeF2xqaN8vRafXLPsEYhco3TDUpeCd",
  "key23": "4uoY92QfBj8xk5PS48sYseM6YdUj8wRVgKBNVKDLsXCgvQQrZovUAYKq8PeetBTkhhfJqqZx58bdkADBdG1UNpZ8",
  "key24": "429EWeRCeTcpbNRHRkNxBEoXB7Cb8FJtkpXP448BngiKhUdN1LddoUDohqyt5AffNH26MCwrPnV15bLdMP25Nf1g",
  "key25": "53ohNxh8qUn53kxNEYPjPrnZUwzZSrpTteUtA67tDL7hbhgSWxoKAjNYnwjFDVYVBoLf7QGWS8DorwYMjtn9p3cF",
  "key26": "4hxQat5K4Vbbr6iPBDKVv4mcQpmk3HDX7nm3FGSxY8XTXX748WYr7NpHuB4aRw7h5fuzGyJVx5A6PE3JtBVAx7ES",
  "key27": "2U2HSj69J5XRgQUu3wGHsdvQBxSSE62M2CT1vGmnd8bmw9N4eccUHwwbMy4DVgEAAm8o1uQU96of8GvsDJX8ibkh",
  "key28": "G52uW8dBrw43ZzPH4qgbiLiLB3WxpkKxzDc7CSBh9x6wZjWiADSSqqP2GJkd8JZMN3NmTdW2SKPB7btqkWeeW4L",
  "key29": "A8eZiLPiVmguKqPNuG4qR5UUDJTHTjbDWjkFScyMW66JWcUtriyZkwtyrLbaEwpFRYzXF3LTHCR1WR8kUfkyqdu",
  "key30": "258hxuR9phnD4qSqTh1BN5AESgtUMqokPLv6jxzc9DQahiK9pMj624QLmALWE3BUxhVKdmKGB7SVFHJgmSzWh1nu",
  "key31": "2Feg6L7Bi9tcxvFNP6zRZ24Zc1gahrzehLQ1WKPKXbHMAopxxuWceoUcyLCCrCPQtKM1h1m4VsznPEgFuh25WPSV",
  "key32": "5LnHZec2oofNx8NUYonRA5f5gcjK8Na5r29pzNARe8rHgV9PimWfLjpRKhZFukcfEMU4UJWCj6AqBgVt1H7RhJZo",
  "key33": "39QxNNsLHzZJ2yeDXqy7rQrmjNYVe1h4CWMJBZvXeeRQJsGzHT8h2f3udfgNZAojxQwD3FfdfNQfFChZ4hDY26fu",
  "key34": "V2NxsyqVWB4EieWjTn4bKSFkm9aEmtgTkSXYiYXRamSbWMg6XCE8WcUNwpmqyT57WDSqEn1fhPMepRVGU4RXq1d",
  "key35": "FPvbzV3FsHWf5WeM2omwFiT8p5nZQGP9jFkQF599uwN5apJ3rzeXzTiXouTQTo5yTznuZ75KwK2bFCwuhf5N28K",
  "key36": "5e2z8veXBTYCcH5nn9UnTB2aaSUBBACAMgVzZy9yb3goeSfNUQ928WnBnKXrj5nx8MsdWKe3hFrLbMD3yk2xyzQi",
  "key37": "3TYWjiTzQf9qS1rjgNDW3aQsadKirW4BAUgkFUCQAJF5VJakgp1dmWnbFvWdA5vGtTHMGctgfHfTYMLeW3CpMufj",
  "key38": "NDYpsT6yF3xXET2tA8yPtvd9XevjvmVxhY2h2idH5rfWnBBhKtK3fhPZXJ4f4E1FynqtVJ28YcbbEDX3pVaH3Jm",
  "key39": "3mJJ2beGDeJTa4dL8UmFE1GzRavXQr365dZee6AscGp393HmF4A4mXx3EtGetbRky2UPH9bxkjMh5Rtk8PPawu3L",
  "key40": "2o5fTJWCYVaVaaqvx4UqEuizhA53cQ6cpn3JqU46Ph22T9AJa2iuqH1Fi43VKTfAozSE3BLmkeqo978znxP1rthA",
  "key41": "5g3CAp7XbNVcVgBB4bcCf4LV19jW72PUcsq7UfDA8oRJPGVUK8CrRwavqqwio6Z88pS1tGD5asCySC7EQ7tvJg4u"
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
