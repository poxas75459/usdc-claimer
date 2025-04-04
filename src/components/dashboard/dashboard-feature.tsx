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
    "5Az8smpMmiGwR41jgYbTnHGTzZFRUWw43DMtgsvYKTA7BwEa5opx6SZLPH68NN472nKpQV3XMtivZjzoCzkWER44"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FwVWd1cQdi8zakBhKqAHbbs8RcktAcX27DSKYcRUVJS5bLvYqBpHdcPyEDMsbaSeULwJnGKaqBrcw8sUjBsxopm",
  "key1": "Yw5nETtcKUJUk2WeL42UbXCpPFmxzmyJMEk8gdWfiUBVGwfaPUHgXeyxmuJyua6RBDJVSd5hemAhgXELdMFzyPi",
  "key2": "5bhhp7293Ac8oD7cw6sEpZ2fT1aKthmvCGwfaeNoaJUounrq1y5nkQJo4d5ih8KZnsbgj1tWz9xQUnPfueWwDgDL",
  "key3": "7orPAq4BKMVZymMCWp39zCreFUSPQiysSEs1Yf6QPnBJ6FEnajTcmimgYNDZ5FmHfnapqcGWcVz9Utv8E5yMuQt",
  "key4": "JyHVenz7NzpkPpf5pcHwrGaYbEyWswpcxKmdzRaZqsxSvjwSAr8TX7KLTRxbH2FtzeXH1a6zZNVFTVJzdtH2Sin",
  "key5": "3XL2w69DiFNfbg2tW8YgNLKZNnk9C1sp5yekJ2QE2uPun6VdobDaFMsArQciguR4KZHEAXpj5LVaGpv774xgrzyB",
  "key6": "4Una2rP9W6RMQanvWJNtXMFHwzXDarovJcHm3eLpMAGfXrtbRcByHZpsfxt7moQ5eUeQsT3aL3SzBoR5Gm7KsJVm",
  "key7": "TUUZJdmosSjkJEgRb4wywrKgjPZQg4AatDoxGLVEr1nDQAcb99dBrjvy2pkaFK99LM4kGBeJgEz3ySM2duDNTxR",
  "key8": "4Sc5pK8VbJo3bjj8Pmrw6ba1HxFU627tNAypuoS4Wf1XR7ADZZLAgtLYZvM1t45ysaY459kRRYeNpkqWWUbeNov9",
  "key9": "3SnZjnFLN4vXV2s8rtLCdnpFCE3QfuACHNcf2UZtTTxgSoVuz6TeX3JnLUsNqD69GPEidRKm6Kz9tggN5pXsEqmL",
  "key10": "2RocbMEjFqJJF21u72E7mMXxPBom4bEr75tx7JC79Ua2rFabsaU4ysWPGsyBecz1QWKnRGwi6p9y43e3WHZcUqnK",
  "key11": "5DXSHv3Wc3CBhBAdkFAYA4NygkvJSf3EF9BMrm3vfhDfmRA3swRkPRaDBzJ41KhwFo6xXBMsNFeHCarPf1R1LS2L",
  "key12": "389pJbLtmtUdtzTA8nWjDd53VnKAzYMQtu9VwTtaKdb5aQnJ5KQnoyy9JNZHjwQNgGkGuE9jwdBHAWqyoXBBv1Ys",
  "key13": "wpDj97oJ9rkQhM5dJPnpu97t3ZVhCpZottmKtTcVAQ2xecTeKTm6B8D14RcEbNPEGWDPK9QJ9rhyjGhbzNu5EM1",
  "key14": "5J8R79V55xh2Xo3p5E9iqCuJsaLGYUXKQcw4tZJBoCprRsua5eNM8estVJYAxDQHURkXkmd89PcRjGYmr6c34E5U",
  "key15": "2urKJAzmF2XAEk3xUA2JA3rKkxqNYUWw4aJNDfkjv7USTCGgsvAdYp7M1ZETXYGFEWrcrqHMmWifYwh4syqiPv52",
  "key16": "31vr49Mp33MB6ALMRLJjntsL2D83XwR9RxhsCw9jUQVSfFYRRVrGsHCZ98WzP8Nihv2gNXX99TGbFz3o7nsoLEan",
  "key17": "4V73n4UNvChaSZ22rSmbv6E5xHe69k9JJN9rYK4CuJXw5c2qKmjcVWGvghgpSCGrtAqbT8ztza73hVRN6D1b7SKA",
  "key18": "3dqzxjhobzGK8Gz4BCVYDbogxCfVFUCvHLmNTrkYRDiQdXheC6rr2oTpsumDPSiAT5goFsRkKWdWbGtUdA3a2ULa",
  "key19": "2SCrvAH2sz3auEjMKSx6JhDFsHynJN4LFV5ij1XT13rU1bdEQMGZqPVnWJG6DcC3gZB9rGSewZVVP4JP6cHH5cUk",
  "key20": "Z4MKnhsW6uVP29wyx9wRntnJ15DbbmbPnDLMgxKvi7N9C4cVsgiHBAiVfcNRNUApRGeVxrn3ie8thVEkKLTtybB",
  "key21": "3FYekS53hPdTWbmUgE6ABvaDWyvMBrCYPE4vsxhnUFRNyVrngU6XX1wAdd73qc95gL3fVYP9ZD8rFnJ5vTsC5AiS",
  "key22": "2CebQd8LTrcB36wAUouq3cstXKkbdvWarciGYkC6VmXy7wWjP9TWhxfYDAb86ue9JYt5zvfHXegVzc1mGMzVavMG",
  "key23": "3bxcQKgNE6cFY9N7MJFuaAfxsi9ioLvzRiNUmARdggvKg4wFoVLnVPxLs49EjYgffjgwZm8K4zkGTu16oqw3L2io",
  "key24": "2gg5zNKMHSYXQBsMK3DCkSAALPaUiYwe3ku2pjzvLw2dF23n2zWW6rD32bVrYTFjUc9Hhp1aS8HjbtZ2qVBQtjGc",
  "key25": "3wu2x8YkLLRLj8umFjgD9hTpHYyQMnWLEqkjjHdao4m1f8ZKaiitPU7U66hTKbaJnan6Q3v8fw3WAt2Z9KFcNBcD",
  "key26": "9qbZU9hfyMm1AUFEVPtwtn6sC3P2jsHH4gNAbSyjdLBD41FTbHPcJpkjoA4CD6jUgNPn59Wre2JXY8KQqp13WTg",
  "key27": "4S98uwYgpx8KoDfYXFzvY9xu7FL1TpjpTsCYzo7eF1tSCzEqxApn3rZuHZPwkPBtsVB11yv3uD6aozFunee8aZAV",
  "key28": "34g9z1EojNHNdcUNRvKWvVrKY8NSJXL3j2RN4gV4FgmTSgbQvR3BM2qLzjxvoY7Bp47HLTZ3YVoy7YdCtUC1hWqN",
  "key29": "5TAzpEVQDW3Gi4RmiV1iyXRUMy7BtFz4gU7UCchPNyL27cahsbgLfSpwNSLdvcwgwwoppqm2U3cb5X5jxUH5HtGY",
  "key30": "3wnV77yJfXtRAQAirPK9re9FDCs9KZTFCSicB6PkTDzAYdi8c7JCLyBgDE7TNjsoPopcB6YyxuFZ1DBF1omJ8G7K",
  "key31": "22gyyHnrkVtkDw9k5NZPPFc37CD2Ku4qqg28cgeXmifFbD5gy9oBGSHXtb1MUf9hfkwJ8tERwbCswhmydwooatvb",
  "key32": "4uBD7utnEMEjxTjbLzdwQugvqoKubhP6uEQiwePNNUjKUcSK2EukwdW8o1s3FbegMxDiDdK9UEe3y6Q2tosTCP8x",
  "key33": "2nS2D3iu9xYeyEu42zP8aarzmK6Tv7c173ZdeXp3p1QbDcVEo75v7o7jT4EzFuh5dkVBV9s1Lw4L9B6kZ5dzEJ3Z",
  "key34": "2BUkmUtNBEJfH3Jq7tiVUJ1XLysujMP5ibH3iGzzj1wJCu6qYzAf2BvNq6NZcAAvh38cPheL1yQEFMpR6Wkiif5e",
  "key35": "3XzsAFS2i46zZW72MWbX4K1RnbcHwcar69rxZ9wA5i3ayMU9ScoBNZFU5eduAX7Vt1UauAuHGzvZTrx985rCKooZ",
  "key36": "E8yhTn5LHuL4umV44MsgrHiMHd8adKC5E6B9qyYRBcJMhjk7UutGs37cxyRmmHAuH8ebhgtswLDzMhWwvqWuV5t",
  "key37": "EYGyKNMbUo85qkCeqcdw6QWEKWNMNCxPNLaUtRW2R8qv3z7LFaj3HpgHL2HeQLXavrG6yadXgqDkX5pogFSuJ7X"
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
