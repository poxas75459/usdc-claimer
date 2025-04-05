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
    "2mgDt3rzjnJq3bHQM7nAGUtHgX3FbmhRTVRcNPLd5cyaafjcfU7skftyAFG425KkbEU46FjMF2XESpYLGieoJyo8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4atvZR97GxbAQ7BYDRtATxGKg2RrEc5JT5HLWtVT9fY7T5V8zA5GhqhD3wZWJt3EYrLzLn9pGRq2DjbS3VGgy3As",
  "key1": "4rnka3Sfk8VXeAqAhFJJDT3g2y4DL24QT3aSNge3HbaLEk35Kj4budGWRtrSY2SQCq1CdwBhkhwtrPBc7zt7PJXZ",
  "key2": "3tajun7cQvhEuNmU6vwYMkEgwfddopXxaKP83V4XdKuXBiHnyM35Z2aq2PQVxSySVYidh9aef9XTifNCrkUS6HQG",
  "key3": "TvuTyZKjR9zuaLZZCNfCievLrpNKpCWtuEjHthWigeYtVR7mMms8ymxGPJgK4cgPC95WvwtL3jZyur52aQVuHU9",
  "key4": "5SLC3oHh5ecrRBCA5KNiEYTnKSwErXtxmJfpvw2bVwZhFm79exf6crWRrE3NodnQUZXfcLCe5WbLjQQtwR8B9W1Z",
  "key5": "4Xrt1iXKPJB4FVdZagYBsnsQnELUGWiJpEXFqyLx196yhb37Ej8Kc6Dv2c6yorB4pAarfgnmyehN9463js3kMyJy",
  "key6": "4ANt3knzb1SFnqXoD1yhgMXFJG8ydarp7XCjEqt38Pq1sHatUA5qgLkXkPpjiDmjVaDYEpP2xDnWG5AsGdH75Yv8",
  "key7": "5ETcTLcxCoeoC4hKubB5zJ5DxUB2zMpQYbtaJtGHCeWHKUoSL1pTwUftYXJEryGhtBg2jJbVzqh2zsLeEGQrx15g",
  "key8": "4PF7g6N2JjKCFGfP55Fay1dyxkPA5uLjd3HpK9V6XQSqikEck8WTRiqeeuxpN6gtgqyocbQhvAUrqbp2of2ULJEY",
  "key9": "2WmkEk9rxWTQr9ASUinqjeaYryAsVWPoLYWP5H1837spPmsU1uL2LPHSCtrDPo2KfYHBF2KipsdXcQJAACTZdkFE",
  "key10": "3ZMJ5ZEPQSooVn2ZCA5XHvqPhMy567o8vb2QJtAU7fNm2Fq28sdTdDEbTgiUyDjLWAXiL4nT5RRFD5gXNz97m6Bc",
  "key11": "3UWj74vWnDTfRF2kwc6UxdewFB3ZUmCZtzDg5azv2Hy69soKBpBZFJyC8G95ZVVza4C5evC4Du3M7vd84HVZi21w",
  "key12": "5Fyn3u1fbD3LxLw9XkVokyqmSET7FfoNJTMLDVUZRdsSoCrHJrWRCeDFoDuU37E194DJgYDBp3HsY62Yie8wAww4",
  "key13": "X3s1wHymHaRY9MmLFCEPjHKYwk2RFPtYc6QgYRGfah1tBFwx3N4XYtbPWksCGopS6D8SYJeFixYQbWJkyGH3WCs",
  "key14": "2J7D5nhieP8MewiiWyZhLqnf3HjaLCEgfbVQLVnc2bpPLQkYYZfj8cJH93yf6e6kZmzQCwbnzhi4pqhJRXSsZkzX",
  "key15": "3ZF8fNYpcRxqrbexv1wg9MCJb8LjeDn3gSPUNQrBSh4Xqv5SS63YrGJuUncgTDSvyxRMJiWtFHAyzM6gbBCjrtjo",
  "key16": "BjFc19Tb3u2Zpir1D3n6PbZi5qrmLK5tW4fMV4xecwas6bAa633g7MduiWk2HJFzYBmrgnFbds79NbzyqZhkqJU",
  "key17": "4io9x3mRGcqZ1TmyVQ6KFWH1uXEidZfzV8km5wXZ9sgTCoz5yVEGmBEbhjYfq9eeN3eiBqNEPArUc6tSXkLg6Cbu",
  "key18": "33XP61q2rjVmospT8z2Fbiiw9p3edTEPiGjyPiGLiq2ZskLLGccTrsvGdLoAhfMCgwfnBKskHQa2hjd1HyWFVmkG",
  "key19": "5ABk8Jri9FGctXhX9aMffwSZx93KWs1DSNyCPWqjajScBuybuMumrBYKHeKQD4RR5BrA4LuJ64GXcACGDR6fTxam",
  "key20": "zMa3pLf4z3AsShDEz4ZoU3EUqiCtrve77taiExg575oJQXo1WSXuEbkh4aErk9g6AytxtE1PbNVGK9TzefpLU1r",
  "key21": "y6sdhhm4sTWXhZyqRVsnrUxBBZPQWn6QNPYp5jFwgdqTLkpx2ByxJPJ3ejqx5pGJfjohBXKraHd7sLkQhG52Au1",
  "key22": "2nGMyorTGfQxuePtdWZzjLHS7MGzVsV3fgTKAkk6LBxejFkpny8HJnLG33TtG4Zac2uU4kSGbvrhiD8hyPvmBxYk",
  "key23": "22f1qwNcgCxJCtTbK3W1h8W38UZSZzMBDfcjLfWPtMSz2Gf9oJAjmCTtNUQnvSTAPj4mx9NDXwxsH8vvER1fbbux",
  "key24": "5AEd9vQFXiAobwEqpEAHXCpgBLDppHZM5MMqz4D4yW8TnN7shnQZzCeqPj8DLBaykgUe7ZjwhMZ1vMcoxfv6sX7m",
  "key25": "Sq41EPo6kN4GngnL5eCeLiEP4bXNQt24WfdkzR1nfu38TGxSDVguc2k1F5jeWhsSspLLQ6RRedkawEyhMZdmhjn",
  "key26": "2q7iRTxWP5NZRLHADFtFD8y9xMdWcLp7eT2NY3K2WWax3BiXZNtsWoqZX8g8DAW8zELuMBRfsuqSa1RxUNjopthX",
  "key27": "22WaAkefn9rhDiGczLq1DBt9zK9jivFH8fm48HVhsbtMWL9Epjvsai4msqAnYo2ENqefZmvZwA8zSQtoMKKS1vut",
  "key28": "2b7hR7w6XTsVGA7mKNmZ7UYrXhGBoe8A318yeqAcaLJnriCSE2aoQQ2gL3pcmHYe4UphzLCvwRJShSn79d7VmAab",
  "key29": "5unupEjQ1BXoj9LUJb3F7EhVWgKFFnG8oF1AAuCN88zNifhkVNwmyDqP4GLsPb4CGZ6GyGJUYqX9vyRhCVRCQiJA",
  "key30": "5EUAo7NWmWQEhHKXqXta8wzrWJg2C9rW2yMYnibWbaediZCgFmYgpRPp7joSJN6unTJcW6rKUdaA9asExBfw2sM1",
  "key31": "WRAbAKDULmxA2F76L8iL5zKkHNHacchZxnuTg9LBR2xc1ngdSi45uzN1b64rXP3yaCimqhzsZmbDMf8MZzD8FeU",
  "key32": "dXbg2E4RHQKrtPLNQyHpxti53KcuEoVr8hjY175hvefC9D24XvWXmA9RzVdka8VFcmwvadTEvmQJQJuSu43YQyM",
  "key33": "4czLqjS4w7V7C8xvFjfCUZun8TniFjezrfBqbMu5ckXryBFeiYSxdj59od8xF6rwxhSoj7QbK7sc5oUPruXhzcBm",
  "key34": "4f4Vze6Ew3WYhhxW2AKHR2zFhSrmKvMLyF5edPvr3C5FD83SRi6TdaCTMFPDLCj7nwES3uWjiifxPhzStqzf8s3Z",
  "key35": "52HVVUWn5j7gRYqx8RF3QMj8ctgSyyMdfkWMjxc7Dbn7ZEfzMAVCEuRK2Sv1FU2NoZqoR4W4aDC6gDT87KEZ6kyY",
  "key36": "4bujG1UKmxp66PLRMESWgPh1xC8LWuqkPBCwioPHmuffcANF8NGVYZN5wpr5XqHQW5BekoaFGw4gXWzitKLAVUWs",
  "key37": "3ghZC22B2PBedJ572oTkdwcKX3Etynk3AQSe3D8Aij1DkFYph24wre82hBeLgZwWKUmVygQzFQ6TwqRGX5SdiNT8",
  "key38": "2zWUtng6TKtUGfKwD4GMajRkbAQTHe76MDw5iwdiQuoXwRWFyQpYStywa7T3HG7VG8nkeNL6PLSU7D3DSi6v7yxi",
  "key39": "3qCqC3zuvuWwVkokZE4VHfuWBcSF9yYrEf7DyMgUmhTR5gRQbboPcpmVYwtahYvUXFUKyJVSjxfNrvbLRHfNbsFK",
  "key40": "4WCwnF9ZqPLJXE1R8oZxJNFMJ3zrdrjVsttTWZy4xfk7Tso92m91Gwsawh3twKPpmTzZoAWpvvjgUuASpM2aDobi",
  "key41": "rjSAzUopirPEvmQhTmjE2QmidS9HBqQGDqx74ZGh5GMsTxHwzYc3biYzZJXCeGZEw4tTia9hJTegEjhpptmmzh4",
  "key42": "2FdxToS9MLHmM79cqXqbAPXGoG6EsVtn9ufh3YSstEHUf2eB6jtsoc6nxta12AHGnTyNhuTnTen71DFpgKJ181rS",
  "key43": "5iPsKtjE53V4DduKtENULGck5anxDYNVHjd9mCsx9r3k5x9ShRzhhcMc8XCEo3gLTF6yuqdCMUbbVBZxhV9BNEtP"
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
