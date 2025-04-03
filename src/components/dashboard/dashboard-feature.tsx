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
    "35bTtXva4B4XDGysNW9gKTj3Z37aAaQWJh6YQWCB6zA1RAuiX93wQ3L5DMceZjn4ELAwizmMW3bKt8rPJNn21Egt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jfpBKMpUNHcwGbtWs9h63VbFPV3c3QRvsKNScBWHQo5H5YhUvoessAkCNYYMLfV98WXWRu8fDahs3CwGaHm498v",
  "key1": "45KBwxNupkuhszKbEmRWf3mGfrm1Qt8YkmosYhS8Rzi4zh5LwU3rN58XdKZJSxbnBXLD3XFwBP79kBZXgtngC1P5",
  "key2": "38MmfE8pLo6y3a7Bfp8MMDYgkzmtL7PmNUmpUv6abDxKAkqot5TPB27oDcPPQgLCm1Evq6ur3hgUmts7PrMGX8GS",
  "key3": "5PMwkgqSY4CqjU7Hs9aKyt5mh8cZ7XHEVUJswecDRLYMbNe6xhHsrkHLSWQLdeFf8SPkvVdp3soFXc462rxV7RZm",
  "key4": "4w8P3hm5qFt93CJip4QTqg8pEnGvx1FLAM9Hz88jj8bBJNjeiHePG7pm4ybH6BhdziTYityr64PTd7FgMaf13LpH",
  "key5": "5UaQaVB1wXZmp2ncWTLQG5TFxWSm2egnbBNG5DUWCNJ9S47HPHhARAj4UR918NkjWuuDHt21RNbzj9vC65EMT8Bf",
  "key6": "2YNqRVQQSXNUhPm79N3oRvdedxkCLVJeT3Mz5vcoA7JLWEGXp9GvGEukj4wRcbNqxUwsNxtPjGKciq5v2afYAFmM",
  "key7": "7i4JASQn769rdHyPhkFaqxtw6QKjT6yr3EsJupDsdwyQQ5o6UEt9hGq9oEmUc3kUrpyCPfeATedhspCMivZVmXd",
  "key8": "5WbNV43us58dvP1i2EuoCrJ4HicyUpiHF9eS5vjBhwtCu8dkpzDxBe4QpABxCTEXq3hMkbir7fitb8s9yQqifdzE",
  "key9": "2uSRgzRLxTi31ScbmnKrs2syrRFY4K5huZAcZnRCyDRp6VSHQxcJBA9QtCQ55nrLfvEft1shacLviwjBSrdfHmDQ",
  "key10": "5UE31cQ8HpbQtnMJCjjwpBxGxRrX2oRzcTiN5yN2UTHTDHrCEkbVBL3RGfqa9LUeVhTZdkd9PjSqLojsy3vsKqBL",
  "key11": "JGvBakRbHmHAsv9xPSBUquS7xoqvzNm4QMoTb86oW9QsE2J66uqc53uMTKAqrwfAasQE4Fmrh8F7nzJfmRPG9og",
  "key12": "3RkUfsj6wmJBKsm8FbkjvJVnqABiZSgVPyfU3qkMFU8K21aBzXC6Qa3adhYHUYygNRw34pVe9EtiMHH7U2TFx6iy",
  "key13": "424QYsXpkzFNeMD6uMTdfCsj2BJ2zeqFbqu3RSA9owUhabic9x3d6gQxkXo9kLB1NsKshsPpXNzrVg5QGkXHXLy7",
  "key14": "4DAHXHvVLueeMpN3nEhmZYhRivtgzuC17Prw8H2tWQkkPy4YKykzCLUQhg9DguBtnnQeNDuL5iHccP8H2BFPvmyr",
  "key15": "52Mb5Zg2GzVvLk643AgQV5E49Q9y7DESTmJFGrzjwtZBHFuXfaDcpVuPyTz7i7CegYzpXSE29RRmfAniQ15r25Fk",
  "key16": "2SY7FD1EJcHYPuLG5WQ2ivxU1LNLxEjdiEsStQgj4F738q9VB6C63e5xpkseNajNoaYV4URdfVrnBRADn1jWwzJ6",
  "key17": "2D1BNSMAm5m2Gtwwx1pvJLKCxEwMPfqH348881s5MikUCNGAehVPE7PPgN3J5CUc4zmAaXBHN5U7p3e4vxrtXrnA",
  "key18": "4UYan8tXTQtxSSZTMQu4gBP6tfMsX14zqhcnrpjXmUmJDtYbXYcBpiFWs3owhdKZRtg9tJGq8PCjM7zPp8z1cRix",
  "key19": "2Wj6X8KCVRZC4awNaM3cY4SV3c7KNVovScYjk4rdjGMoQyp3GV8f2Rq9QyXmXeBP9iMkfU55YhDuxxvix6B2fPCB",
  "key20": "2RgFVD1BxiaG68NdL1t1zGAfoNzM4chW4jZcVdugJ7ogzVcKX34rmcQNQBVcnZUA7JTSG5SMMM7cqh9DxpfmjLMd",
  "key21": "3ZW2B4BEH1zDyHAbDxGtKEtQdgwQj4QW7AD1G86j6hPhaxiYB47ntoHJKb5kyPLGgwfQQcZSmoHh3kcreY4tVWEB",
  "key22": "3pbWEWV5HwfAqxbdmdfhuTsK7gRvwMF4cKSPHwEVpy1zjZUNSKzqYCu4LotoR7hBkfwXovL5cevJCnKxrVyd5Xw9",
  "key23": "2GZgqvh8PZa1jSghSy8QyPEPkNPuT1SNetBUGtetVuLTZa4YrR9P5WgEiUYbGpC5xYtQEAbuNgiTn5Z5U47ra5UL",
  "key24": "65aEu7uVq4gPVaqHkBKCFMZio9CCbqy4XUKNT99S1kSMsRxjxAhcfjdkKecPhE1YRmWJjy1LomMi6HDt9puBG48U",
  "key25": "d7jW7TRJPJCXcDXytoukqjkngvtNNwKuGzm8cHqmXbf5WFgDCuBf9F7nfpjCcwQ9MxeKdMao2xH7J75eVvJdvwU",
  "key26": "2q82PNho24hMg6fhcSLiHnzkensgAJrzGzghbFMSnBxWRKS3GZsBTybpPajEraJ2W6wwJisFJURkYgvGfEnBxKnB",
  "key27": "jEsMAahP9xSCQS1sAL1DqBE7U3Ddi6XPko3odM4RGRo29Cs5T4ANbQhdzk4GmkzX2QfaeVPyPPnevtGoqLkWN4b",
  "key28": "5JN9bzPdvjTnqkDszx62TckshHzjnbqdASUWAwSK7uX2DxGiqSi3benrXZRgNpqwNZAEFv41sUs97pXCV9srzvH3",
  "key29": "vfuryeJsnx2h1bmKWy1tTNUZjpHw8xp2dmKL9Lqh639Aws2zBX6KTKxuxL4gT56nHpWGGvwQyHexgAYvYfbAvSy",
  "key30": "JrzYuoivBenSSHz6m1JexiCMuPZM4RgG3dpb1LakJaFocPXiuefG2JoCib7K1ThoDYKby3Utn79WPc4dw4TNTYQ",
  "key31": "2cerWj4HbjbWughXnTYHtUbA16DMESgDD7D4jXqqDXJbaZd1K8DQX67ezjRUoNASxuSFFmUUsKhSSPTr1LFtQgTw",
  "key32": "3YDJXxYFA7hDL2jHRysED6hC1gUZPjhNC9husF1KPmxZmBTEJ4kBorBb1fiSR1EjRBzLZGzKDejLF4tspb2A9X1f",
  "key33": "5nKherneud5hoApkTHoM965bSEiB14Qe2VqrBhz3kWDKNaFkRxM5WifQs2uSZtcfRTDhtpCo3uegM83LYc3DZW17",
  "key34": "wHzK2ycPciXoG4ze5GBjmGPqropg5WqrKbjtPFVC23AMVDfYs2xFRWw9ohwPeiAexMpHmNefHsro5GMfaGryAj2",
  "key35": "5qojnLpzSZ2Xy42UNSsPZWTRcWJwBLyuYyMUn3kPoij16aEbsrzQ4XvZMZjFdoYfa9kwexNtvfHVpJy1R3UBNeEb",
  "key36": "PiT5hkQfYLiC5Z95QE61PidTMbJ51BV9ndbABGr3rnB8yzdtEpkT4x8bwZBfsNWn3qqb2BukTuC2ixM7cvbFzDu",
  "key37": "5MWb4mgaQG8vsGwU6tFM2fsq4yz8QWgcBk7NRrj9svpDxRby5LBrnd9EUhYco7ENEjUz82bJsWdW9rmyWugq4AaY",
  "key38": "3SM2Wxd4UU1ajKSQ9rzuiwFEm9qawQCGqANe2eHcwktZvbtdLVJDB9AJvrRBUTeZAM2LnXnearLqkCzRjTVBrvY5",
  "key39": "2H3rfqyVBizpCjGnRLTiPYmVBubLfaPUw56rzfr4DvgxhD1smCrjicNs9J7A6HNeLchAyqN8EaTVxSzgon2E7u3",
  "key40": "2BDZx6jQe52zeFtQhc6T9fDwTSYEFqPmZmhpxooih15RwGT2HPTiALjXo2VsGuwLGiUqKcDsyL5cmZBbWw2JeCKW",
  "key41": "5RVsu66iPf7SBW4oyZsgW4XQhTM6JaNdfaRGZGbVcfmT5TBh2cHLPsCkxMxe71YquMjtPCTx4eQiXmUcVTgEwZhL",
  "key42": "65vuH2Lc9onra99qDP4wkeZwYEAZNm45ZFcD2dgFhiZdL4maieAHyP151tjM1LfTjBdCE3bKesEXhjQWXNxFzpmY",
  "key43": "2LQbPjbuWpudK5Ahk4pXa9jM45oBhYmmP2E9p8iF9oMzKhQViUgi5LYJW9YuYFfYqG1SAR4djLE6MGFwvScoMXC2",
  "key44": "nnnqLEn6VeQJSmaBRSuEfBPx8hbLUobifmkD1DEKkjeS9EW4p58jxcEtRyZa3e7jaAQNNzd2bgMpjbHX6Rq1fsR",
  "key45": "4tBDobtAvquyC95HrYGdztXPvHCWkoWiUPWRe1M2cUGiSiAWGTsR4hSSKxxuyXwyg1DKHWKmenwM8gJX11HLS2wm"
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
