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
    "4JMnt9NkXiX2djS1ggKqwFSRge25RFF8KnbxDFpKZa2Df7wBNPU5sc8Xc3c4n7uV1ii73Yri3cozfNhX88ht42eF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1ZSiE4fnurwanoeB1GHCyTxY5jQKajJWADoF3RwHUckERUy68AheXLqoKmK5rSduQxnA7QG3epSLEhoxBECPHu8",
  "key1": "5a2oRKVjTrGsDeRSnqzWQkjRck1NmDJdHqiG97ronsMw4cNXL1PSJQaq66rDNrnH65Gj7EKkjxdUJSEq6UPSb7JC",
  "key2": "2cttnXVLBmC1iD8yUyZfBuny76QeLU5BWLWhqA7BXgR4P93winKxra83uHYSf4YhUG9oMFWjvU7qD9oZDWaDh6Lx",
  "key3": "eSh64GdYQLy5gbBw53mBpAZWsu7GczPg4Uc8XebF1StWcnftHKm6JkpeBRExaPrMuVmu84pnUvo3ubb1ChwwKLF",
  "key4": "5QbKwTp7RX86w6EoRQQgeCPoKzreJ8v3ZjQKyaUQNZhysrKWygVroWJaHzxV9jBekYDBSSfAJWEcLZprqZvYqnMe",
  "key5": "19vdsj12fsJEgDNDwRmxmbxLSQAN8mxAWPsydcwKuxckD1QY9A9GD954af1YDnGtvdoTVhakdDVokyTQddWFupg",
  "key6": "3u5eo3qEgD1aGeuq1wfD7irhFGzwh86MCUgwgTnNX4BZmyq88uf36ysaGjH4HQDsbFzj4oCnfQSmdwWYwGjafeRy",
  "key7": "2Czxw7NdEqEkVYoP2bJDkgwGydmkzv36iZFQ1h58bA9EwhtZficW9L5hP2W83emC1gr1B6XPj8kWStYwFcHFYfe3",
  "key8": "3mNEpdW6YszAwq8MHxDkRBHSVUe9zvhnWfnyceNENg1iPsbwbTLZATt6qisq384DvkVtSshkRLdtYa1G5Deku3pE",
  "key9": "5BquWirvL8yjBuHb22NqCiBirDe7FyMZVWw51yukrFmeXkgPcJo9PG9NCLJLbDt2Aq3DyJwyoJqYDLcvJ4rLYHxU",
  "key10": "2TppKEp6TLqYkpG7NKVmwm3yJc8nJhk77fxUJoWNnEBtSHzwWsJZwJF7NPawEa3PSeZuPBQDTQQDg7EeudaXT45h",
  "key11": "4qCNGzrJ7mkjTcyjJE6N4NBTBteQ33yjjWjVNUvPHDbNHtSead1vnjdPrDBc6MiECziaNBTc79jkYFLjghTmkpmZ",
  "key12": "57KPWdk9GZXgjrE3E1R4rp8pMrjnVimFzpBTD92hV81RmVhTifM6vy9xMeDFEWVFasMCehZopwepEBqkfkSem9Xm",
  "key13": "gxwzuU7Ddqxqtv396JVQT9KKxHtDt5N8dY2DWRPHj3VFjsMsZG8YtqG5TJASMZix38xf79fZ7rfUKF4CVkUN7Jk",
  "key14": "5AQ6tuXnq4hVsBcNXZ8thhZpQ1sByzQvpnXRuxtyRef5zEK7D6W51EDEYBwmmxPUTm6FhpF3Pk5nqtFiVRsUDaLq",
  "key15": "4h11XFPFpMoL23ebPNnVrdX57C9yMrte2fYbZqY9FBQ6g5RUMdniiyQEcyuhCBMinqmYJex9QoEvtMr76EiEXMnx",
  "key16": "66EZkq57amP7pvaf6rzDNfFFuGaNArWR3KeiCLG5e1u9JJcTgxBnq4UcfMMdwEMFRGdVT7BpXeqRCAR79sXRXzpV",
  "key17": "3hCKSzbwm2iLThXLh3Wxgr5ccnNowvi7L8YfZSZzqzb2QFwxS8UuhFd8zggukaq1nA4FzqkJCZATVPy39ukjdgRH",
  "key18": "3Vh17opo63VF2jy85xrZWQHu62axDyM6iFGwTab4U4NUf53HYaVpzAQsH1Wn8b4ddDTj4iyZfGxna4xNm5c9PJRt",
  "key19": "435SY6tLzjBAvnE7HsboGhFpdbcKMz4RtuSFMmwnsCUonFsSvZnU18ZWE8LMz2uYip8GoQA4vNWz5MadutRyUBjn",
  "key20": "3Hvq6tqtVPAg4Fh9vJEtFTtvWpdKgr9CbnF9nHEa7Zdyt5ExEKToJR74vQrZV2gA2qjpLgMB4ookmL1FeYFpjied",
  "key21": "5cWiF4UfEA5XQtwnUCwqgjDNYhUPVHDV4nGkuFqyxBQgTSGGBNJKBQW1XZGGFWmMQWdzNT686xEst1gYLxQsnMPu",
  "key22": "3hho3fLE664YUqGGRiccpew4mjLkwo2V3vSJbWzxTT2qDcDcJ476nXQgGnrSYskFGetTmmYj4HJTLapSLPSeyaPs",
  "key23": "2fx5F6cnDinibiFwY7LJC2m95qX91pW24c2hCicsCCZV3Cu6wqULzW5gZQoDsfGAG9LFh3RTNFcMW7HAw4kNhUh8",
  "key24": "5pVPVen4Gm2udQSpsJVNfaZvLPprgenn9rTpmceD9EAXrYroG4UEq3nYZEXbx4WLUsBU3StC3Mv6eJwYGzzhXycQ",
  "key25": "36Lit2sCyvwV9SmAEyFV3Uay3SjV3gCx7qPfsigPRpwMsm6M2tVPWqcUY47STYJphLqMcza8ikckgNzK8DNdaQhd",
  "key26": "5B7ujzTL8KJNrxqxJ5vFeQfC8XvY7Dt8YQ2b7pGh5zWpFECaNyJwzDj3gLDRHbxms9759BNHFHiTfxF3PxRsQxir",
  "key27": "44ZhVsCDgp5grbW9hhWJM1zKG9MXR4s9CbK9QtTgBzDWNuXosLVcj4KbdLFDTygujGv7DMLQjphuPosd4LaUxaWP",
  "key28": "5ivjC27YUonmhEbvi4oDsS8ujmiE1zMtVnECmsjEWhncMfQxXoSwUu7eavFdi3hYjDN7CNDgMaHYZXRddkHBwSbi",
  "key29": "3kYAnKVVeLUhkh2aVik56wKcFNhBVw9C93ABJSCsDaVEDzr2tZvpaHsytAFhnNHVudm5SL11M24RxgUiMkjvwdnP",
  "key30": "59VP9nVLDqwvqGA5u3VEiyNK5UvorncyFwkwt5zcsWZ7TU9CzLQdE9pVnHvLen3rDuweUBaVCcB8wVtBdzcw6fqX",
  "key31": "2bNqB1tnsMo8bLhyXPVHkk5fP9AUHgheXcL92kW68FBcy2pgAuszRSdDMZ6ibtMPSLxzjL7ZsnXy2JysySAm5MzW",
  "key32": "2TnBqUjgiihhbyEMWBAVjTRdxGoWg9vLXgKvL44FyEDanTo19fb3YSgKhUdF7DjMLgoZrKKNJH9komW7adgdasoz",
  "key33": "wo2MUApRv57ywzTCZiF1Ui2b1mvP8mx2YPrGKwhfh1M3fZ9RGhGpSnRzwEraQ46MQ3P7K1WsremBfa8jUhfDExN",
  "key34": "hiknQgasuEajWzAtrrH3xVZTSkAkk9XpNu3r4f7qPiW14qXhfyij9bzGgb8KjyzcXunNjz8UoT2CNUFczjv2R6E",
  "key35": "2sBhnUKbZ2z2mAhpkSg9KZ2CceWyyNkiNQ2n79kudJUp7pSbcLgqJZzELXZXtQ18HaxaLgxzgTQGaC3aBmrh6SZy",
  "key36": "2C5rpAY3HTVapSxCYrgn3cJwbbihjWc6cCoaNuAKYqGob396v2FNG4LhApy5LhYCpRH1ESYeKzjFMPp9mSfjjvMA",
  "key37": "oSDAp4NgTF8PQJ6FvJEhkZjGUaDvBB1E4B7n5V4WoRo6Ttfo9PySSdivAzDXyYP4gWjyY7yrSUC4m9AC5z9TPZm",
  "key38": "4PWsscPPmhj294epfpaYeu1fAL4aPtWCw9JS5dC7CqiaBw1Cqgb1S5G9okoV8o6e2VahcjM79N3sVPovtJkuJZZu"
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
