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
    "3Kz64zkV1sNN3LkgpACHAypByRx6FDsEAjr1gEYECifb5XFSXN65ziuzLCgnvR8mxDthmTYsuHLNThBi5waJhoMi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c7mf4wnTkQ9tZQVagYuTCKY7Ng8i7hnm6huK1aWQNu2NLCpf5Er2PnTu4mTP6ovoXXKyzAo6RM5C5gDx6qXi1Bo",
  "key1": "5q2yqqw31TMTiDMop95Gj59sKV4F63QB5heKK6AN6BWLVb8SwCsFgaz3XLNneNuZyzPHaAoJSTDvbTjGGYn3t6dg",
  "key2": "3fuvUWyyuijmJh46RqXP38XNHBwEcsr2xrSB9c1cSkYywa77iKpRLQqbqk2gXfPwS4rRfzpCFVZsiW1xEmLAw7FQ",
  "key3": "2bKCEYYCRxhA6GAEwCG3kbrkiQXYSb27uqh3dS4PoYnoTVgZDhBncqRTaxjprYKGx9AMnjhFmEvhYtRa3FziMYGo",
  "key4": "23pjqCfswhBSjodcJnPb8oTsKQcCV5Pau6xYmggjjb1G3zGC8RYFYdsare7EpKSXpWNJw7A9UREsojtuYaUfy5Dd",
  "key5": "5HXoY9WC1xwNYedTKhbHSerJfibRpAocvP96BzhmKm6BWMfzNvXsWK75MeZbPpyyXi1ToKnExtSS4wTjUDcUyb3G",
  "key6": "3XRx6YBWmD1M4xWADNCxkjTtwuuHHMAVTPydYdZA42zWkLNmm4C58bpgAAUTQDrhRtPa6dAcuuKRkS6DY1qeC625",
  "key7": "3CBGxRgjwqEi1hSUi6Y2jSUgpfk9CpbiHjsyeZ125kX9MgKDXjnMX7JaLkj5EuQckMBjRXwwMqH1FctScDTukmsL",
  "key8": "THcLj9Lti559XXqCzNsNNpTgMhACRFJcTqAQ8ArMmDmujbQ8F8WrtxyBRdfurxmftPfnt3yZqywnbGTKGejfk3W",
  "key9": "4QHNMnRgepD9poMZK4sBU1oi9ytPZJka1AiqAcwo8mSp62LvtBgt5fXJQAxgt5xWBK4isjdeLTuHon3PeE9q6mub",
  "key10": "UPyeNA3MYf7zhtE1oUEnMiKEttfWtmdNGyP4fNDKS16gbVKWHWMGwgnM7mKkc2XHQjHhthM77uU4XWu8pgUnvZT",
  "key11": "3PhCTtf81Jc4kzmwepipubRmtmFdJFACyXuYfvwBDT8WJCFFDWRCdyHMVp59LDHQxQNMZBFpFBctxhdAnmVEQGqL",
  "key12": "5TrCFtnYWFMh3rRRPBEA2sdKuwDhLH8EkZQLWKKzPkxqSQCk6ow2ARyYFZgoaqKx9E4x2au5h1SfAPAwmm6GPWtC",
  "key13": "5tQb4uCm6Bi3v6ULAqFMcSKpTe4pESie9Bc7FQLmu16vmeY3ahx5EwjVvBJ71XJwogM7u3KXNMf27ntFfGTFiasf",
  "key14": "4mHYnk1uzV4Um5kn1ff7QCcA3aQDKMSt4gGczHpBA8gUyY1XfyUXUvGy6M7XJDbhBW9vKZ4kbK8CV73tSwcR2UAE",
  "key15": "mAYQT8e64gbEoqDDWKMJgeCtN1Ger674gKXjxggVb7EP9rvRNQtPhm9dui9tUDLuKNNbbnojCai1RNVQC8oSZ1b",
  "key16": "3fJbjvpGAeTReUw9DtJvDgZL4BrnZg833EDm2PZYCAdoFz16VAarL7XHq3oggeMh74Wor4xkKS1N16DakqYj9xrj",
  "key17": "3QQvA6tz69y2uNZz4Ty629acithiGcog5YUrZxju3mDyP5o42CEFQsLHMWQXrUEozZSAPNUH25wsehBmdJTVAGa5",
  "key18": "2bXbaFWdcQBSFFqxz6Sqi17YwgxB9vYBsM238YTEFuNh3CQpj84S69cqqPtsAb1RAmpBboHvxsfahG2NXbgj73MZ",
  "key19": "4bLW6ZLbMyGNVb6imc1wuAjZncdt3DqgzQaqQQ273HTKicmjvbABntids8UKb7wXwBVmawh4teHSUgfbP1texbzi",
  "key20": "4tC9L5CvHQ1y67myPCwFcrdwi89fTgrVpUFHqmZ2RKyUSTWb7sPaESsdXjFdGB8MgawgpFm5NugJsikBdm2ZNRSv",
  "key21": "3CXr4q7xzgeAvzJPzD4NLiCh2RvWYSnKiqFiHwLiaWXPacRnFHJGrkoYfToXK7ziTtP1RmE73gpe5zUzzNLjVtrn",
  "key22": "1iosNoXi9rVWoxBbn1a4xWFqDjwAEeNQuQadEAt2PwYCRcqzp8jnkEicgSvfW9x9Ra4AUMwHctkYUTZPQMCQK1u",
  "key23": "UrVUBXSAq22k6MuXR89DpFEnbyJngSQvNe4bKsKYopibRm8H6QYoGxUHWuC4e24zGWakqVqJA9RCi1e9MAQ51Pk",
  "key24": "3Y7o7fi5QQLM4P8crRicJc2qhJtpWQsw5YwTYKe4AdKkJmdcvDxPgwFpQLb1jpP47kc8LPtAJ65YKSumSSX7TDZa",
  "key25": "QeRieJxgRCTpTeUya5yy19GSWEUTWqyYXU4gBxmg8SKpVCT1T5H8hetHnVuKNgGRjBmQXPBCrErHXQfeZjUEUkw",
  "key26": "P6KgNH78ZsT1pSirJ5dEPdwwWmMomjZJKNagBpVojn43t9kA6WjejM2MzySNzZpeawSZoCKxDVCkL5qDAbsGWoj",
  "key27": "4kaBJioTZEYDQKtfPDdSFriYP1co9gsua4aKFFgk6hD3aBdzKhErZGGR2uH7UERUT2NC5vaubPG7FDcj1nGcJY7R",
  "key28": "38qVB4jFi42M6zRBARQBNYEDNguphSTgUcqRq6Uirey1eiRzMKPPsgWMd87CX52PsRGkH76B5iTX87a3912y5WaD",
  "key29": "5tmgjujWfj4KcstmfBFxPXizdTzj4TfpkCnXZUEKef3jaiuHEFAMbHqJdiEqrK4gwNWzE4rwPJz8ugUEmgNeV9c2",
  "key30": "xD1Lj5xYgdaKMQwJUhoPEymebmFq5mFzsKXtcRk12rM5iD56Nu7LRbt6vtWLdNbMpLrTYjv5wpa2Mykc71fKrUh",
  "key31": "42Diwb6CeTwNQLyNvXtFfemZhGqoE2SMjuPZHSBECaWi2QA1gAE7M37Y5iDxUXcvKX3SxFrhK5odMrDNUAcRDV3M",
  "key32": "3imewg1yX9RdY3du7qg3WRikXvfQB91UJtBrNhpydyduUD7Fsejx9cArDM8zF9YanQZfiPHW4w3ngYFp8rkof7Rs",
  "key33": "5oVDnFN2MaxXs9uLkkZB3q6jqQrz3nhxM16uBDDPzP8qUfhJ61t4foLxTFBoybYAVrY11bxaB8khndVHhzQu49vp",
  "key34": "4GcA8sVXmzBNdbguv55MrUMxEdWJpKcaTCZmmZpJMBphPw73T5RB3cLd89gBiBjQuwivebfSU5witPBNEx8D1iro",
  "key35": "3Jx4e2Sc59cdxypmRjn7KjsmZ8CbX4XHx6k3sUU16Bx8Xc8BUMpZJk4x9LdcZRCTTz1v7hmwdJU6a5GTH9M3jT69",
  "key36": "tSbLJ6fRJpFraKhopXqJnzMTGUGX9SbEGJUJYZ8i5CKT1pzZ73YrBZyB1nznwuL7xYgteRkdg6WovrJLrHrpPhS",
  "key37": "3B5QcqUdYskHpfcWa2Bnqk8SaP7BpgBbqzN68ADpNgwC6cMp3tKvCZ1LUaEgCcHG9jFQVM9gPrbA4e1jiQJN5WMd",
  "key38": "2Uh5qAsjVqmNjDkYhXdvCTcqCBCYfPhNKR6SBjvPMhaiWgJyX3ZgX36m1UjEQy2vuy5Xi5vjv79i1mVN7iWd9m4X",
  "key39": "hXZLGY9Kbvc2MyeSKktC2gBzs7T2WgQfP7FiBwijbFRB1ycpYArsX4sob8yoDqVbvHfCon7e4LJJu1j3Hbxu5qB",
  "key40": "2GvAdASZbg499VDQKkMLECmNBRdRNKBuwu1nkFbSdiQtzK9Vxw53iydBUjbo4oKRXaVysJuxpRiJ77GmdaVj2zyf",
  "key41": "2yGAvaxoDKBCABLmaT4FdwTnSFsTwTGrmXHinBUt3e2dBothzy5wf9BFCkvc85VhQSsPau5Sopu4p4PnuWV3QrLD",
  "key42": "5Pi6c9R3VjjqaB8bp6z8H4KYcDixpoyKLXwZ2Gj3Yrjrp9dsHHQNkLHFJG28NUwWbRWYKJ4N5qnV5d4FpshgtUVz",
  "key43": "4z8U41gWEphV48FYEPjsBKSbuKuGcZjuGJk6nEbtdXrcVFySFDLoAxuCqXiUbphdbEXzH8QyT3SqJhir6wdd1DSw",
  "key44": "23h2DNaXc747PRBoJ4mB4ynrZ6SwmXtqnaUhjfF14iP8F8x2tf9vcLpwnxyfqqYo8u9mzh6SWFTNdR9Z59MypQZ4",
  "key45": "3pCzeTqxcGhG63cz9tNpp1cQAJCg8RNjSvJQa3vn4NafBYNVr7cmhMbhQvDJypr5KrBWic1cRcPEJF4UUf3xi15k",
  "key46": "46mp3BsfNiwtKifpBEh1qiR4wHF7yp1j4H1umRuSX6vRJeAnTkmUpjwRxUVaY6NxAmkfxb2DE9b2E49DNmhzo6Wo",
  "key47": "3opiQrma9ia52ZdXN92ebyZKEpRhxqX1J93UQtjQdeQmNsZg3HKouvgjNj4WZE2khFN1LAmb3pwnNv2DnUHKVhQd",
  "key48": "RDdF1V9cWTiSUVPYLfriXPX4n6rBopxxSoyaV8nnvZfdSxzKxyNMmpRjAf1tEmb56P2t9Skx1mYUuzoth3v342U",
  "key49": "65aqsxF4QyZXpogZ8dm9wqnYUBQGT7aprdzTPH4sP6nQbifUnyDTzAENgPBnosxY7sX2hiemdDpNCA1X2iauYcxL"
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
