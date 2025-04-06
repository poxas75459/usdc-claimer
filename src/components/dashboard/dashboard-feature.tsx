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
    "3EjKmTg44qXUD1DbRwefhfu59nQc97wcjBSuaBi9MfpWik2pNL5LKswW696SKYC8AMmfttzbvWt4p8fAUhikNXKz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TBBJFrzxQCjZY9NvkD8CswcWQUjTCb7MVRPZNkyUHhsqYHMq8c8geQpdi5UvErAihP6DyXp7hAXUT3xXnLZZBGU",
  "key1": "2CTjAWKom7Kma5cN8LYxD36DGnrn81WF3jhXTYnthmcL1XS1VD8VJdSuPJrAnoWkyDQ3KSEANaeHUT2QrV7YQv3F",
  "key2": "3D8WhViocAjxzzkyb2iEYiyzN38QxWk99C5vH85n3SBViCRTLbLTw8BThGKYweSDsEGRY5z26mpskgFoG4AX4fmq",
  "key3": "2aSuy6hty1sQzTU5hU67YrxJeB2ZjKqCESDaiWFReYPp7WWB9JwAYMFuMaQQDwGaTgF2Tftro2pXdfY1MkpTTuNh",
  "key4": "35Mtn4rZhtfY5xqRjMTgjoSZ7CceFskffXbz7EHKfPSxw9ixTbtMLQYYZcC8dhpbvQ1Rt2mRcsfuY1De8E673fcs",
  "key5": "3tyJ8E7gN54RLumbKrgWvJjrrN9n6DqyiiDppz2JTgdMokPbKRzMuKujVPbj6QhnRwh1ggmLsxXiBoPDizzeg3Sy",
  "key6": "DzzonUNq3ds6B6HS7frchHBBS7GPT8FfgQ1F3pzxBsKVLZHmRbCL8yKKDaa2ngHptYn2eHBa7F1fmqdagPgPoqi",
  "key7": "594NitYoYUdRozF793iZCZ5vyseSB2goTFkkmPN5q7k7GWSvCYWAR9GAVpYMeCq64KAq9BFVeJfap4B9zPJLuGM8",
  "key8": "46oiomt54TERb9DNSL17QsBsHeZPRwDd5VWHNjfbHZPqJSpXThq3K415VADk6ynJZQsfjf4pK7eRBUJ1oDQZJyjt",
  "key9": "3XbpowSCDE3xQ2exUNrxqP7aRxq5BZ4nagbpncjUoSXD7kAWCuycy5vFXEDCfPRsFD8PZQPcEwQcsZaV3HLJc5mx",
  "key10": "sTA6zq1TwCxuMTpRxU5c7GU3d2LSHqdt3zyuDRsazu32m9wuvLBW7K36PQanfRas9YHeU39BZrVbxNFiCLMeQUY",
  "key11": "E3qA4HcxYeLVn14zLLpsU5bFqRNxkUGcPSbJfK4noT3Yc667MSQKqyCRRQNjmtKb4X7S3rwPmpTFHCt1Vfp5pjH",
  "key12": "4gjXZST5yzPMtFdmioxfMGgj3rfiJN3HLy5S4Aq8QW38tbUsGyU7bpXAimiBrWyfaVw2edmbg8yYP6qQ9yitmfWV",
  "key13": "2xTp4rJSCFmHDwAP8xC2M5QN24G2y8XLXXKy1Z6HywmS5CVn7a3nWHbmhAsamXntmDtvuP7Rv4cKjSx1y5hiznHB",
  "key14": "57bejJmimnGn9SMA59MFjsHTGJwUhf7hfk1SgnNpt6sRGZzGnF84WMxqWKiYtRrXycrUocAeM5kvWEqJ44X8hdEF",
  "key15": "2zUnmUndVgFbseaaBam5Su35PFp9eMZkDLNZTK5isCd4s8o3TFEkEkFgo2d3VKD7J1UTpbBgvrzTRQoiUJ6RRy49",
  "key16": "55HzGX6LqbV9Yqv9AoCNqQ8WiMhvqZK8PY3emzNKEwpB123Xx4rpnHJs5tobiUdXKtaqkqbA9oGhAAmjsS6eYgGm",
  "key17": "2jT8VAVYvu3UxXMAftYmpDU1UrRzHmedKN7Uo92sMheAAfFu4nDZxkmyVNN6SK1d2wBFjoRHkEZqagnyUoUVxK8A",
  "key18": "4RutkauxvJcWX8LuhdC6XNFeGyJDjYqpMz8APrB87aRSzRekGsuHaDEPzWHic3YLu1xtbQA4BdPxYybwcg2Ewfzc",
  "key19": "xTcaSPoC6kLo1CoNKVmoyzhAJi21bt4nGnJLXdALBkNsu9GpVRr7EHkuF13RDf9bjGJtGM3UQJtjSKhFuUZFf5S",
  "key20": "DnZM5AKsKtEP3yDtWfspGteYyCi5smfsXxPgUR9ibbmKtoXAHbj2Hx9FNLLi1zwnppzzS6rTFdr8FJCke8YpeyW",
  "key21": "x3dPqpVpBdXRFzZbpFk6KTQKyD8dPxoYYna65Gt8J2YjxCVyvVJUNW143mAc4Pxc8yUkmZBw8RSVm5aw46VAw89",
  "key22": "2on94RgeACvgpFvEphMMzPXT86M33VqKKPSAQR3jbrTD6pZVCRn3wWV3Wk2WPSpSo2YjrpwCmq4Bq2xY3JsBSJ3e",
  "key23": "1W3ZQfJjHvEFxsbkgL6rnkeazAXNmrmrjtK4CUArnWGYWkGWsJyiuCgz8ebNz3M4o1icyLX1xAXmVa6bgu6vNzR",
  "key24": "5BQ7PaMCExANPYhsfUxk12wViwQLkGZHoBPoUdLxqsrF1ZyTkmMwdv9eT4JGNPFXcSQX3hooVd44GcExKLU3zpxs",
  "key25": "4RHhr6MMwRP1PXzLZPWNPZ52aUq9gv9ZKHugpchth8znXMhdrN8eGCcwNq7fzxXgJCmp83gQYRHejXHpLTnpA2m5",
  "key26": "3fVvZJeCvSyzCuwMrUrZAxxA1x6FfD5Tnh1uSyxDRrCFp51ULUG5jQaXjaedaxp5RC3yDQMbC4enevAYpPbyCyLC",
  "key27": "5ekoEXRVBy9qum5bovYduVqJKqt33AbiuYjrQGhd6B36TmJTE2vnyWWBxCSiSQ98Dway721mykSHT1iW1LDYmPzG",
  "key28": "2YapD3cYzYDgaHz1r3RVGsQi5kTLY33vTmEZrnfmpwFRhfv5txtvGgcQ6uKMoNMu2sQ3iK6Li5KoiSshoVdacEvn",
  "key29": "yBtt6J6gBvj38xcqoSaeUZYL4h7UzRp7TPw3zDfSbEbDuYkq6vRsopnD1goHuxEs5iKRCSsNSWyKxupb7eCiQLV",
  "key30": "2cDWEozX8FQgG9XQeXyyWX7gySGTmrr275GB1BbtCKgqwj8bVC5QYecGoTXcjCgdNSMdWxPXbi4Sdyp5XTqcKdaE"
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
