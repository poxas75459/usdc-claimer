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
    "2CP3BFPh2FKzmM4LRb5ATgrG8fu9HwE3pGdaYTgcPdAQdcriB14HrmhddejQGVqoc3ZhQ2edprrfSGckK7x4HGFd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LEmKznjMkoMkvLUXDEcfHRTcoa58ww46VitAi1S8mFyoNfYubZVj8JyLwW1RTdWuFcsZQy8RCT4rF2PECh9ewic",
  "key1": "4axudJMDomWvomMhoiaigv3ZmfzKqG3r4tFqwLzyXZyMLZ77yNp2FyG7AiqNRCZeqYAJaJk3y4JMiXTEb3CMoS4s",
  "key2": "QW4YNXtw8dckyGQjbFVHUz2YRCvQw5HwZcoPq9LTHtmh4WwedybHtDwmoZAP1eu8axpz9duAgUqz4gouSFhKJtS",
  "key3": "3tW8tVsqznniw7SZ3Fn5sKv6i1GuSxda32JyYdpYeecbHBv2KKtiei8Y4BCWWiXRKu1gjdNUBV16dXWADAwauF9r",
  "key4": "5oXq3x5u6zep1FBQ6Xdbs68RUPm3txyJf9D15BzeBaEBPr5AwpebqoE4pT5q9VYki23H1BB3nJhQ9v2N5nBBt6Bm",
  "key5": "4omvCagWU2uZHnV787EM4iHvXNtX8nM3evuCh6gRap3oqPe6zFCmUUnZMsasRueVYo6MGgaTibaVeHuL1KEcFdap",
  "key6": "5HbfEXSsYzVbtZiWNEnjoS6fBdhvTvzNBBxDjs4VEA4foXFmx56WoQenmjj4voSzPddDzBYJ3PfFwYTpFcvEnwmW",
  "key7": "532d2tURedmugL9UqtKduv5x6C15mF2XGHS6WhZJBDmffB58rxFiGrc1iRGKNWqGehj3EN9XahZdLwu45n9GrmLV",
  "key8": "2Hgqo484EvkePcAzEgrLuEYKah7ih8tto3pkyZws8P41dZLtPgAW53djZPjenDud2H7Nkpfhg7xNDGzqd34NywxM",
  "key9": "45TvUKMyW8fJY37JJj4PanxEx6Z7Y31S3iMK7H772qGyKdv85mpMhHeEouqvUjx2SknxnaLxsMHb2iXvwP1oMU9o",
  "key10": "5P31qsUhVHaWSo9Bb4APRpAqkaVVpG2A3gVfnoabPdz9t7P8feS35ZnCvkg1wUDEmN6CHZAutApCX4kgT8TLcmST",
  "key11": "3scYW2tTsuxvHFhsfbrX7texVkAw14mDr5mwYz4nT16DDdGywFD4iYy6j5wyHB5Bpz3Qt81tjouQwtthGCDyffTw",
  "key12": "vmdhXVugXwbuzUPAdgwgLYzn5iykF5uY18ZbD5n64ZTi1y7rm21zAG9Gmz6jewK6JVRAYoqrPLp2CVnJ72nFjnP",
  "key13": "3sKH2yGSysARaZbERVvm8AAGkqtM8SP2FNpta3JJzhpVYrJNfzpSPLMPwfQ3NVHokVETnKHqwe3hEFmgip98DL1f",
  "key14": "2jFaue3K7gp5sxJtZfwErdc6NHCJL3HqHMLcceYzCN3WfeCEhFbznu5scroGz9oYgAbJwZVvUFsa5hr4coEJVnng",
  "key15": "CYpSew1rzri2T7Bx1sMc7nkSWKiRyvDmHdwoPBpij6BFnsn6upYxAa5bPdtChGztdK3EYc2DFJGj8N1hz7gU2d7",
  "key16": "3HzjVzT4iANTZ7XpMdnqjFfvzYy3BvYTjzAe649awCXu7ueXB4WKpctuq7Q4PcQrb69ZGc5hDESRuo3H1hNpymKz",
  "key17": "41gMKhXJoqvJiHGq2q6sVRphvzGkxsNwKgvUdz6qrDfsV4g3yYqPxxtpXgePfWtWSNpJhZdamakkqyFKegNd5md6",
  "key18": "3aAcLKHiv1j519DoBr1CDCRfD158joDMXwfbGHp1axi5xEe8sE6pySficXfe4BLya98YQvdJ5WZ83MehXsS1EorU",
  "key19": "rw9GhXhCo8ALYcFa4fRxTNEpLVnsioHXt1NCs2yPTGRCbJUvkzvKhXbb27mXhxMB49kHHLjdqdakFG9wNxZAM5G",
  "key20": "4sy6RGUXsW2W4RiwKNQNM4kjFDZLgD69bCxUz7eMsdaNRZgDngN9Ppryu1kmeaYt8Lspb3pDbnbVtsdeTWheLPkT",
  "key21": "3EibDgW3vCFe6TAxS5Rrn1bDo2sdXuYM7P6dP5katP1DPWUfq9FFL5yYTFLuVN1asp7qrvVDHmroeXZMtKLgKpbW",
  "key22": "ZQ1sMic8mzvZEYTpf3LyyGEUBoUohwoe8z1sPpPL3k29qbZMVVRSzYh1MM4zRjKaMLGAjXwLptmJ4KdeBKXL2od",
  "key23": "2MRLKjbdCFcMyASaEDRc4W1UVtZzEX4tjK6TH7xMkCHeYj6gxa4SJrTxBX5AC63Fi4abgRT4YC1zjPCdLXk27m3b",
  "key24": "3We7h44iqbjVQT54ZAhfzU9oXftPHcsSTAus1WgGk5fZ7j8TmoMgVGWALYh1yz1c6Cbtn4e44AZqMGJuMMP6T9SY",
  "key25": "2XaUcncQ9bTKaZSBgbXcf2qm5h452WrUWAWiqsbLtAjTJuKA6xC92qVirVvUYMLmpPNi1R8j8MjYYAgUsnQukSvs",
  "key26": "YXF5GkGYdjjwYiD8uXqnbiX3fNMh14LEMydSHtgsWcW5ufUP2tRrjDTqn21fpQCZ6Z3gQUzGugVyhgHgoAMYLCA",
  "key27": "4evu2xXmwwNag5oVVRWZX1LvqDapMupG9279Z7JEm6ita4RGawhUzao8SR6CivHHyvWt8r4ycHGycfETH7267Rd3",
  "key28": "3e1ctiacPJ4pj42i7MU5SfLDtT6m61UUTwFKRhqu25ktCX5UraPUcReqGYiTZX9oFoeopcxHhFd2GA8yotf8krjV",
  "key29": "5zMY3BERAqFcj5SLksrCvVDoVvXWGLNDcMCXq1g2T926GKWGuTWVFmGBN23MLppxg88HipogxoTmQa47jCiponyr",
  "key30": "VNrUX6uxAvhfG5nD7KSGx4mjmtaAWn6RHWL1sznwgCSYxFKukoBWnWxS7kPzqBRfhyk1HP9mrC85VLyMztVkcnH",
  "key31": "g1W3ge9rYVcttEyg1xELgMKa6PBBU6kuUiGCVWCT6Vo7MtgfJwQAbm4X8RmRFmCZEoYiCNAs6hEcu3FCfP64J8S",
  "key32": "3rn3HcPrJ4Vpg5DKL38Nhx4DHs4u2zR9tF6CUx4otoZwd2SkAyRm893fQzPfSPRZ8YE1A8JsaDwYUawzYd19FrN3",
  "key33": "3aiGsN9T4CdLG5uphSQLSxsm4QX67WJUYEjmBhvikFVvkfec8gvfNFpfdGjidsQX9DTcghmh1qYEb9cZNcVY3Lcz",
  "key34": "2S9K9diFC1Z4FodjaVBNhc6PVStmtB4sx567bbnHUXhRWFqJ6aTm37jMkcWk47B2u1BTaaSQ29ofKWrh4hR421Ls",
  "key35": "4CDEWisvQvVe2itfb5h1UzMsFTnB63wMSZRpxofFhB1KT1ucL7pNk1PjLrwQ6CSdobFWKwdiSdEHHShqSfryoxfd",
  "key36": "5t6ChraZWW6nWNQ6z46dsukhVqwZnRVhAmxFbSJvzCzVikhef9Fvgb9jqMkVcX7akRkUUN6c8WVC96E8zFae8EAF",
  "key37": "5wNGd4MKkkWDurSqXVUKpBzPxLsr9hVR32tSgfDwhgsBGHmuDdgp2CY1MrptUtW8oCQHWMfzXr4xaeqVGwbvjuVw",
  "key38": "2px6Va94VuXp7mJsafLAYSpfUCcb1bybZZiRVvQMXL1CGkpaW8Um4Csa5YPHbzC5zFqkYDM4o7DDiiBW6ni4hB57",
  "key39": "ey277ybzbp8aCxJnr42bUwHXWSZ7hXRBtMyXr37WwF5w8n1aLgSCmchstdLz2fjXeTYVdVxgf9D8vi9p96PYDNs",
  "key40": "3iy1uEZov3iVUhgf6qTj3Nmdpyx7Atbo49rT6zm2gRPr8GrcBjYhQNTvRGKpQyuH4i6tQTf4vuL4cpD9YYByKu8B",
  "key41": "5rZgNGP5oQJxwPom1aMfN97i1k47wfLmxhYVVaA6jucJVpopTJv9oLfHMdcmSBh2R8SFJrmc6ZpCwjr93Gyw5V4a",
  "key42": "2Y8VxovESLuWwarmap25RSZxiDcXbpdi1E9TFHbKqwucasv2duV1bDDpfBxNw5RvvDMwHNzun3ibMndRrFU7LFro",
  "key43": "4qb1iP4ASsNLUzL9LBoJhuBmhasnVUWwssyRqZuJNpV9PnM9AFSdxG5o7K5xnig6SDXWW6DCKtPsK2FhhNwvPRfG",
  "key44": "28KEuuVuGzSC5wF2kve6sq8QjpuUjauXZ5LE1p7b9wV3XPKTuGUMixkVhYSWFNnE3vY7oK4nD7cKQrwSejDm4VGE",
  "key45": "47U71PcKD7YXqpKRbSZ3FLzKq8g1VeaT2UqEHEvS3m1ijDZS9cWXr9neKhSiPCxJjjeCBhErjau9LsP8YRY1SHmP"
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
