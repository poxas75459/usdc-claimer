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
    "2uFzMCUuc4cc6VfTEwJmd1UC1EXdLneybcL8tdrib54XLkYkg21Wsqh6MK1Mq3zyjFardcct13rKr5gy1sJzEENq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UUtnLZZb4FumVv72dnMW4A4h3uP2sUJvrFuCajEw1aduFxJcT9ZCfCFLjukNqPdHb4xWucZGDMtJuU7JFhrckw5",
  "key1": "4LB7CLPGviEx5TwUtnSzRwtN6rb7jqDWkp8fP87uctAfyjGNYBxLtZZBBFxGERQL864f6Y3GB3oBk925pTUSRokJ",
  "key2": "2PAc9jeFdjUMGZyy1VgC2DJuEw1jjgQ3ec9XbU2ewrCcDtuoXuYbTRDUEPuCzzc1XW9FQ8jtUZvyZk9ns7f8hMoG",
  "key3": "52tgLQrvnmox37KrVKb3YTrAHWipajifJg6g6irRcXiro7qb8EQor2RU98iLxuAHcdyV8vZaDWYD65eoAc7VWt98",
  "key4": "BheSpmepVxKTEX6dANoNZtsXkKeSP1fr4KUkJ84ohZsr79cMNuGeYZb5fDwKYNHkF7k4dFN6cJvBCngQsXZ8jrX",
  "key5": "2EZqHeogJugP12smtYtdC5SHg6mkE12Q9rrLpknzJaK3JYDd1Gh2hNmGNkqAoTN668V2tEkBwQr3cowpKy4T5FZd",
  "key6": "5QkAiMkVMprPXiejhjutns9HFkWgRxE9U9wArVHCEiLDBDUACBSSpmuWr8C3cjPzHzbbuqrSYaK1eB1heQSKg5KH",
  "key7": "5mAsQLhGDEnzqxfDHzaLqg8PjcVKV8kAoZVMKUCpT4Yp7PLMHVAUdG6JxtiR3qda4VnnmxgT4yfEySN88cNiWh1r",
  "key8": "4ovWisKP62ePkXjGhrQ2GXX9ED3RNAtSwZYyE5UJKTwDghjWkhovQnaM3jtaJgSmFd9g7zqMJuuDDNnYiHbg5ihS",
  "key9": "vuXnx7weBRAxpghgoLyDaZFshRJGXZesUF1A7WR33W3ZBajZe6ghnoVZR6fzPSC7ScTS9fLvefJpeCae4JCp86s",
  "key10": "2NLapLnjudBgHXYgKf2MFiPX2n56dtoGSkmrqQjXbVZUasNMCviHPHBTPcs3V6dzSY76dppnKZHtits8KGV5LZ1i",
  "key11": "U59sHiXYEnynecWNLeYWWczv18rbRL3qcnSfn8MzM8Bj7Sp5Fd9uzEFPmreRXtH1yGiBRdwJr5HvpSt8aAwiAJK",
  "key12": "2iaSzmjRx6EnmkxCD64dNYphieTLifGuDa9CuXoY779K9wMtEra4kmog4t4CDZYXGwmEuDwHweZVrCHHbik5nCEz",
  "key13": "s9SUJxLHKBs1HiXVFnAK9YZvtm9z96gZ2kDnBRj4rmXqvTZnYL2StAwhaH6WTTLmgQqSEc6BCG8nVLpSJ8m4Qjz",
  "key14": "cyQsjfjnVsut6KwrU6HhMTpynU53xbMxh1k2wxJbFjrEM1svoNjAFibwyJExczKxsisK2oN676bjBCr4qPAsQCp",
  "key15": "3cEH5X9fhQ9je5MCdfichvyTFVKMwXiF6CHJb7N5iTH6m69LSQLn3rhQtdmzm6PkDbECEPcjg9vYyJwhou6ZCANs",
  "key16": "2pJtfD5eDFxtJYv9H8CrNTuVgZZE92PyV3tyWV4h1Nh3a73NP2BCqfuDBrxsBRM7vhbPSHj4ZCZc1tdMJzuei5zs",
  "key17": "62xXeZxiSRUckftfFXVW3UFnGaN583AR2ndaeeawR6QbcFJNmudK1GEYrJmX37oqyjm8oQdrdkPhbPXyo4iY9mDo",
  "key18": "5WSZEsgrKE6RX4uhQkg5T1e5Hosdqa411ta8sJqSJmQHo7KqZd89CeeKoburW3fKxWa29KoYUx428CkcvP8Kcdmt",
  "key19": "8WqdW8A9CTnnw7gGNnQtGpXnwJ6vYFiBUF3anZ1sRK297ijifkYqu3EPqrhfLGxLJUvkHTGf5rKQ75Tg3giWje8",
  "key20": "21G5A9dA4N1sewMixdkmnDGXPVQpvMseHxWEnoxVqPrTB2kj1f5Qyi2hA8kpeqQv8S3qXM131Tay2jVjEh9MJGsC",
  "key21": "1hajxFX2c69ZsnKehhydALfxLjSJ7yM8J2HgyTnXqfQ7NdRvwnvwyti3hS5y9q4v1ZHktVVcXoDHM7Q3PYWvgJC",
  "key22": "4zptXVMSJ9KJyaqkj7JBBGechuj6Xms8TABoLLny3ruxVAeCwXXEQnpFUfaRcjBCJJdayw8W554qHHgZDHnLsp7H",
  "key23": "3fQqUoWQajxSj4FCKEvw1QTiND2E7mfcafwiNHRjDLCBvuAPcjxfKyGoismKovFaqAH5cmve7CSLHLyC84zdxtXk",
  "key24": "4rMp2qwwSNe4SgZDYMbNvF7zPrXhfzHaSVoMvmC9jNj5x6wKeqS7SU1Beh8oK9Q7SeLqamusXd9fDpYRDpgjrTBc",
  "key25": "2uZQQFqac5vHEFmgwTnDFSkCPGkHXNSLMjwkwWXiCqKsKZtRVCMvxZeg7sYPHBbpXKxXfSC4t3iHTV327oYWzNV7",
  "key26": "2QjS2ewK9Q7sr2K6Tw7HbQFdynyh1wnQ55Vebv99ybbPMEewuznYf88oKXF1vtSUzUk73f9Auu28hEctnPMv121U",
  "key27": "2Zcv6hAz93Zzt2FvcG8YsRagE8zrj5f7hiu59KijftF2Vko1vozLeWJD63jLJ5wbKMXTBsXJU6Lon51mRpV6tadY",
  "key28": "ft3K3LFeTcFXk5AsiiV1biufNfC5bzJwmCyapZLTBPafvKN6DeQzGHdTBs75cTcxCcRTX3EtDiZTDBVjgp5efZG",
  "key29": "3vhuM7heg6zUXSVAnWfcbkvoVay9TXQkRGPoTPzg1fWBS9wCcqCWu87MkJvmrEVcg9C81kBknR7uGFKCGLoBmR5j",
  "key30": "3cazXGN9vecvDN9gymvpLQji3UpJPrmc4PWoWkkYXuipfPVe8q98J1FoXF26EWrDhm5vnB7NH4utUUy2Uz7Bkinn",
  "key31": "3Sn18FN2zTZQRUr8kUxUouFfrzY2Wi9RwBjJy9otHVRir8fAy4fejVauGbB5CgHYHpr4v31KRVLFpngmQ2ioqmnM",
  "key32": "4CtKfdthzGZQTgFhhFd4bsuAJVCwcbkYhzxJLPrerGhixtQpdSaU9c42YAJTkdPcJLavSydv92NQzFxGdGH9sJwW",
  "key33": "4q25eV2q8rPpvM3BipjRE3Tbrm5Bh53zQkZdodcCYVfrrKbPTLd18SknnrnPsWrwj6B3pQQHnWffCmxXk6zLU69Q",
  "key34": "khasXmar5NnJTDdMyPg36EXuJ7YJpvDLbw5rfZQ9tcxSdyPSViug1zqR4ADVtP4BFA2NwQVAy3muVAwKxhmUxHZ",
  "key35": "4zioPgSRt1suRTHwuVTrjpDBdQw87Gwmcn1STmwzzbs3o141W5wgY6ZCnCRd3sZ2zyEYuNn5kgr7SdST5HE4m72P",
  "key36": "5htJwKnWfKbS1TkHXE6J3mqGW58o6R2mgpvKC5XhyjyXJtXy6BPyowmtPfXqKFwvw9hKadBJsMTh9atYPqBgczXo",
  "key37": "29iUHM4pYddrqSKoBrdKevAp5KBWfteKFmTqhuX3ekYLdz64P6qutqHaLr87hFnCHrd9ZekmgHqKjSRMkVmbpPo7",
  "key38": "3ckRiR4qZh9awfzW5fh643wZMcAZWDH2KWaa7VZYTNCb67JwTbQKQmdnNPxW5AEEK8fNHNYnbsYJUJcRTACq92X9",
  "key39": "2uJmFRt656fiMctMKfeeHKJS68y8GSoPuPAk78HLDX5L4qEthnNzdsY9MFNyA43bDjq8jXbcmP3RVcgqbeaBfZAV",
  "key40": "2UL8KdWFHn4QVQWN9gUiw5tNtWTRBEqAzj34k2hLnomGGon78KXzNLyLFCL43Ps3b3C6XufVRAiTvyuTvuLxNwPa",
  "key41": "5Dn9TRgLTiajdfNszdvLVm4zBDHQjFEto2UiXTJENtwb7mCWzGkK5CHdjed5DuQpZGb3bmYbX7FBR9qkUJmFRB5",
  "key42": "2u3rJpL5RHSwc1PNETiLfmuZM447Vd2TirAAQZ6SR3NqrEihDrqghtMMmfBM7UMUhvFsPUSWUX8MTssuoCMTcUKW",
  "key43": "4doaFHkpCGQri5r1nMv3pqgjCk4BnANXr6XgqJ9TYLkZhYkEpgsTPb6QtqX93JHiBUjUrjq3QKYg6bRHnQnheg6P"
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
