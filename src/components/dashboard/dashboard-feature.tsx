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
    "cMcHTjowhLfB78JaYE75v1G4r3eDvtbXgq7rQohBKsSGcdeX5bZwYdytGXytZpPSXDoBeEpBR7PzKAdi6XAdhim"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BYm9Y69VTeyEPxD169pca1qX8PX9v6VnffbWTmemXLEDTUUVZpqbHkt35eS3USrJ9PA4NvDikuQw77NhidHEkDU",
  "key1": "4qr3v8Xt2deiFXRtN4fBid4sLyZG5s1nsHim1mYmEdEgAH43XAUKzVzjK6SjEHsmosSikbBAixzUrWTKuquLbcZa",
  "key2": "56J41UDnza9CXTGwnLKScdzfwZrb36oV7ujy35km96EZNsdvCfuq2srGkGFmAQPs8MHfvtHNpvNeomZj2V22dLLZ",
  "key3": "4pKuVpMqoxzgDwHL1fnT7Srj1iY4sV3ruzFxaDaNAFFf1FKsQPNz7Pdz4rjiXsDeH855rH47nW1v7c2unxNv2vnM",
  "key4": "4g9LWPwtneT7gqnFuBCp7PRdQGcfSa5XjVKKzpB4SXFn3yKK847QNSnoP3142if2tej1dT3mo5QVhK1DXXhZLMYL",
  "key5": "3eGo9pgGqquA7Nqfd6yHWfmCLiL1zwkTstxAVqzNNP7heGZURLZy2tKq4UYqetqakMqARSkFRfHBdj8EzGMdQeat",
  "key6": "55RvwSpPTDDDfLjrPYDLeegCcA358GFZL5dd825AqaWqFmTHahV81U8d4HAjKfrwJbTuvq4K69RCxNPWarJgqYwn",
  "key7": "uAB4199vZQ4nmYzg5V5AF2GXi55YMKHNn8LhQmJmpfk7qonFy3bjG4L9TQc4BJFgJDBV43EpqyneXHmbF5m8oe1",
  "key8": "UB2u1wEut1oFGW7o1T3rau13Eb9H5L3kLTrbSSZHdTqQM8fZaEcx4om64ChiVQXd5oVRiWgcbc3m62vC6CopFmY",
  "key9": "KBcqQfXzJZV3xa2jExzXyyXsj4x4ypgHK9puiFjzGR3smRUzwjnKbDUcCytUqi6KSqPyK2xLcHNMd1xpbJkHgoE",
  "key10": "qiJgj3M2zzUjMjDN56MgoSYvJdQE4Q9ZT3mbyVGMMxepn7R1v3gTTxz1KMSVACyr7BWU9afBv1KsuYGfdhEyYwx",
  "key11": "2aPia3XKTJM4P2thXPrSc5bdjxKKXqUNmhLVf7VRsPTfmNDC5BGmxXSV8dJh5W1qfCpPARJ1pxVMrx1sVyLRtXJV",
  "key12": "4f1L15bje1hR3mKsm7jctms6ipKez7NA33dJtzXpJ3v6o2weafs4VTWJG9MyRNs857Gv1yMZpjW6cVQf5dN76DgR",
  "key13": "656J1SHnMPSUduqLfmZNQe6QWM1Ld5GYBEKyVdLGdxvPrm4EMTQguvERBWhgnCRRyX3aT9w3m1wgRyPFF94ibM9c",
  "key14": "2euazXnLSXiXE71aiHcdi9Yg2K7GYbZRwAAkjRFJSuak8LgxRZN5GWCpV9wangaBpLSFt71H8fpRTTsVPPgKUiZn",
  "key15": "5jEpzsFHaeBA4MnoT5m13M71jGH8vJkjPJZfbpk3Qp8QYUBaum3ufFSgPHXKE6Eym7xSLwgiNbkUaTktXLRsb6jb",
  "key16": "32gfrfg1NXnr8DdzSDEAusCdkNRzYfjo1SWA2q67qfyWNqQjXvGELLv9m42th6YsEKoiT6R8r9gvpnM514PSAtML",
  "key17": "2gMqANpuFw6gV3vnikzkBfzFdkLCMNAryroHpUcZEvv74ZCo7qhRaWd2fXL7srptqVpS8gRGuauohhq52LPT4ehE",
  "key18": "472qTqA9uzv5beVzCNGEFLYmFntfvA6Cz4LEmQdd6qgaYv1NW2gZ13TWCJrFJM6M4V9bLorsZKrEfSu7sXgqctGP",
  "key19": "5bUMsKgVmzxJirVpgG1ueJV9w22vT9boKVxWguQ6N9GXx1ZvyzmpxSRYgwM5mgLXqTnbRXvvXSA8w72Ai1Seyqvv",
  "key20": "2pTziuuSNZj95KUW9tMZwBB3EPRRyc7vtgg1obSJGT1z9Aovpzf5TAD6WF7LrY4AivZ2ZQtYHmmDuAPtaeqkS9T1",
  "key21": "2FuaWiPsRbijoVUwn2ydKiNYRCTTkEUEiYWirYfGbQ1LH51zD9MJmm9Kq14iMYHCC4CBzpBHYb8X5QrG3HzV7b5e",
  "key22": "2LG5wpS1Sz2MWq9fd3obTEUgRTj5kJtiCPKKLr6kAJbPpDBHFLLKRcYNhryG5poU6X2sEpjJmm39viUse3E5HQzd",
  "key23": "36JAtXcUxd4U6GbgFhvrJnZjrN6FeLTf2nacgyyu5CiB9AgurHiQ1G9k9fgZqBMhqPcSjpnXuBhem5NBt24w24gB",
  "key24": "3FzTJBbL4ZfogQDruBg357oiWu9eDhdY1riCU7kmxBW1f9ysatvs56a67Bo7i5ihbeyZHYZ7XJMkYtPV7hMBfEL8",
  "key25": "5fAFmLsBwv6F94Sz54saSohGUdK5qgkbiEdRqynybZxyzPyYc1jEVdj2EVHBFmZNVhzouPATSXRVS3EvSSK8qJmM",
  "key26": "3zniicqNAHYao2HpGeYbXLQDSTaLoMzB3AG6aev3c78cMtotpY9YMPmMpRE8eE5qgRvQcS39gVpuh14Tn8qKkuBt",
  "key27": "5wCf4TYgjQzsYnR3rojvMSoA5hEsehbgDxYfQZutagGLvGQoLL9cHJF6mXcUQdp9KQAznA9rS7oi267yc4UA3oeh",
  "key28": "5ah8cYKU1jPbLWWke4o7mYJ5hDDPW2FEdRdYBjqQEo6phYFYDAU88NjofU4zDQf7VKfF4RQuKEHG8y2P953y2jdH",
  "key29": "5rQkhRFNQy9CMKrzDjGMUk8gCVMpM7mDxZehj6FbLaiLpwbEyugn6p3PNJSBMVwTcXSaHX3zwLy67mYpT8DWADNE",
  "key30": "5JpQSbcrYyrVkQsz7bkdUApqpKn7yTAnT9EFX2dax4AZNnsUHebrTpDvVCuw3Bi7hVUrhCKmtx5Daz977kP38bao",
  "key31": "2Gsrr9PErYPN6JoQjRcRTq2LFUUZkk154JQ1ZVz1u5m5W9YW1VJy19HMRkJ9cLcEsoij73tWEsdk5vMVbYe1ZXjA",
  "key32": "3XaWEwb2SVtjoGbnSwE9Rq75y7DfhxSz6ooQVhXSA9ZcaYGSSfHQ26Cfxs6WT7g5rLPAFU1HRoqDq3RGNphSSPgn",
  "key33": "2UR4wQBEXx4MWGsH1tV8toHkHVCgfHS8Gb92TX3RSEyNM1Uff5dve9sXGf8avNM7vwwaCyY9X51qqioKcqbHwCpe",
  "key34": "5JMywMP4ZkzEQM5keQW9qtGMDt9kXzF3EZb46hKNhBhpJCdMrHySasMwBoyrQ1SxCppNJBvQuBVA5njAYPmWqgUs",
  "key35": "3ESjALo9V5JM3m1Yf2LMURdQXX1csEe3XUSfGbeLFgVmXmZxWCtC3TYxbkvct8rC54vUKYgQHii2C2mViNauZifY",
  "key36": "5KvgFrH11jc7mkHfAG2UvQUHZ31DV5mUcWekArxmj1RxjGSZjTG7vH5xhTQTEJnj77YBPWNnb4wVR8cEDszVmBu9",
  "key37": "47cT3Gpxue1kNDL5rJotF7uPzmTstJ32pfbYrWANAq1wR8qbHtR15xMvSKeNQ6sAiD94shHnHyBLwjMS4Lk2wGZP",
  "key38": "4vrbBpm87PyqbBSXdyfkEC5TN8RUcB1ko14E4kzc5SwKjDxiafvGEVwF3k35gWPc5bHZprKz87tRcg4pNDGDLUvw",
  "key39": "4ayK79TkBTYpi4DH9TpzRwpZ2H742sg2baWibhfzFWN83JvHxd1GrTP8Q8HSeUFdaGZAxuWg64ryhfGPj4z8zvWT",
  "key40": "3FKQPh5Hmn27wZUrMYBRkf1gEpCFHXwEv5cs8B69m44GoAK2uh5qYbtRVDnJJ11wee7QFjS6LQ7zkAQuQLFTZCGv",
  "key41": "2Q7z5399s8xAwaaH4PdosBJ5MWeboGQGEcYMCtMVJhaC9LQCFenUxk39Kjhmh8ctWYshAqFY4EMEJkDpgXhceNTN",
  "key42": "5b9jkpsJ2gzkmr7fvdsKvrDCpJzvRQrmmxUKQhhGfow4ijnDNZtZeCqBjCQ12wyoYWpapem9hczJq1fsujNyf2A9",
  "key43": "4eauxSqskSwHvLTyXMCkf49ywLhU6vm8ezENagvY3FLbxKwWQKQ68vAgkEczf5KUAqanqm9bpAJWtAiyacFrbJ5h"
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
