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
    "21S4r73dEtmMMfvMtATn1BKpacDJ3g4sQaJBxo9dUwdCVkwWWmcFRm6NUaNfFCnLY9fTxEtyBf24bMFWo5GpnmVS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kodCaaUrDtLzRRjRej1kW3wLt6bhffwj35EvSa9CXxWovjeEJheRfgcFHHpc3sasxXW9eLm25EK7nKUp55fKVLS",
  "key1": "5kL1hbEx5bHVmN3aAi2JKVRFVXjT4ExyTBnpUc7WEvucUBvZmShCHnYrUXe5CyUYw9jy4SUVCAShJWAX63dNZiZF",
  "key2": "2BQ3JP1oXJBHy4EJpNmcxg98qzQfN1iE4GDJ85KpX4BMZZXoG8XrvkXvYCypsSTALWxC8skb89ZN36mxtLtxudsN",
  "key3": "25MzAYL1EKMzcfn3QZZTcTcgvZpr46mtVHhdqWyA4RDcDHifNGTqxDefmXNWayr7VS76v2rmPBg1e5dXF973xUXy",
  "key4": "5fSWzH9ZMY7yaLYGLXG9MDs8DYizEe4sfyHBqybgj9ojJNoJxpBUXwmec9ePXPGXSMFRM2iuKALhkNDKTPBBDLQ5",
  "key5": "2kH1tbpkCvv42t8fnyuTp4Q7kZb5NGaKWmfvjdVwbFG5QXT1GL9YcK1nEUdPRAqBc5W6ctA9GbgUnimfZspkj6Vw",
  "key6": "5pNT3fCg5u7Sca7M2wMgVJAYwJDJwrU37SmgTx5f3Lbanm8N9B7v9yMZdWxoQx4K79oWbz715nGrtbTQPm5nh62K",
  "key7": "396i5Q6fMEVWxQX6jkXiaVuW7udVKd39PrLFfq3xT3jN8ugwPTevBNAnVocP1EWKzGDxAYEvb2PK18j9eE4SZUfe",
  "key8": "2yjnKq4x3KVyLLLqyYGktSVwAveM9o9extNmeySTVrBaUbEcWFuDYFDjA8o8xWsXVVwqTmrqs1s3CuncQ3gRfLKq",
  "key9": "2Ekwa91QGZbzpPm9bDcqzTxaaft6SieJa23d1ca95tPhiXLeprwqohsL1DLEMotBvNuR8x8se5EshT5d4uFHCAku",
  "key10": "3CfEYyNRyh2XjreTXMGRPJhFczErQZSa2Ej4zkTVdbvxBPFC7YjhVACah2C4pybyZ2MV1rfsg1bhqWAdpgLnp26j",
  "key11": "WftcepKPcZs8nyn4GDQJgTUwu8eFN5KUdbM2bxnRNoYJHLzsm9P7kTtBbtgHnC1QKjorVxYSNkS78bLprH8kdna",
  "key12": "2KR6ZhCMD7GmSnDNM7yTaMStwMdEBcxyCr42CvtoYkPTVP6EgZu6zXNdVh6twthYiqBxLk6zxaCQxds2RkfsNrhy",
  "key13": "27tdeU6ScztbfiS1HzGBT7vSZPh2fvsKpDoq8SMYx6UmjVKnsooXwjPbFob45bauNQziWKHf4bHM7ZxK4LK2cpBB",
  "key14": "2juzxdnVaHWFxAcxJPQxzzhrYe9hQpZwiUBxUcig4br5foA5UQpZMnu6v1hpLM1fazEoZMnfjAFvRa4SHwf23WF8",
  "key15": "2Qvi9sZE23WT9wnnyFQXWJh4Sh3qTokPwM8Ne1rNiRYg2sHuTXjMTSdE6v8HNTA7rd2hMmAD4HgLN6tsm5etJWrc",
  "key16": "46mxTLkKgDwSxk2oE7Nvp4bNXGZ4PtvLYFgKzNEnsFD1ejrPERTMhxH94BLCyJvyH7WmVKw1nTGf1T8B3gfp9i8k",
  "key17": "KQXAGM4Pt3fA7JzcYpoyDDs68wWMDMszT49b9fivKCURfQEwaKqusLfpYKb3d2g1nHvbMiBXk5SNxMebgyb6Xxf",
  "key18": "3UehR9tnwe7in6X43pogefTjzezypEtWGBTWSRF6jsiJxQ5dK8RxRvfSBdoQcH7juTDHd7x6V4hZYtVmn5tBiyfd",
  "key19": "5FT7NiyzKsfE6UXjGKmB3hxCuFeCKMvVmrvKNt52yRqW5DaRCZrxbwetYTfLx5CydRcb1ru3pDjVzSGSpr2KQDWS",
  "key20": "3jChmZDdQGJMJGc5mHfbWR81FV21WsZovsteNh46ogZykeTqnwk2QGKs4iikSXMAMXJQMc2jPFvE8gAaL84NEt4d",
  "key21": "2bZBQfbbD5a9Vu2bLdvBmBHtYzeLMCuKvF3KPKEcKakvarsbsnzMcmDrxU44XqQg6E9RsUNRahom9FBMwPjNJhsm",
  "key22": "4JZVrAdsVWYNRhX1m1dXSmrove9ZMQVBt2QPMPeiiXKuhcCdU5GLYGC712cm6hffjtF51L1w8HneKKKF14FgX7nt",
  "key23": "pe6gNGmbXTCeXovDjYZDdptao95YK9Hka987eKTjHrR7dmpduZ9vBBc3TxVvp2onqUSnV7z4ddtsj5SJKDNbwrY",
  "key24": "3yyGAVpn1BUUnpcvBiNxtUF6NA4Hj7PvpiYESDycVQPS2Zy7HhXEYHnSkdcn3C1beaoA8mgeR9pKCc8yR5e8ogkf",
  "key25": "5Rt1rS658cnvoQS9QPdpK1T9g8az6NCDSn8YpFRNyBtvXZMbzrrZZGdxTRhfwewFWzSdnzxUqNj6uNh8NmmCqg8H",
  "key26": "2U7B3aXg9XCRvTxpj4t6xinyxCewT6HzrmmEhN9cCPBsZi2UnK6VaSLqCvz9nEac157e4jd8H6Fz6u1xxxn97jJ9",
  "key27": "4ExAvYtVdqQRyxswaLLYPbp358ARfvEdH3kd1P93S4Bmkcc86jZukPymrWdtHGaGYpSMHSmaJ5CEAxMknsrAqbi",
  "key28": "23BjLhyd5BfC82CSVFKxDyjxpctfcRCWHZY4HwygefgS3ufJmHpdyLjJxhPFormuJKj7CmZTKcsxnAJNpBVmLo8D",
  "key29": "mkE2Hx2UjwpN6nxHJgGwtK17VY3Z2kZrCFDPGpZdokV8fdmawwbendhr9K2DUejHWFdAhpG3MXhJNhGjcXCEueu",
  "key30": "2E5Xt61tP9vbmto9C2sVPidXnVywaDBKcUA1D5TkFLtwcuumAnRi3x3HAq9fA47MSMm9kPrNYgixyiVu9hb2DrQR",
  "key31": "5saCGsRzEKxVkopVW6r2N6M9aJqpMNLxEBGKgkbJK7gvs1aMoecFaRLtBuPuqav6HSUwTWfHMguVAoEj8jXYqmYY"
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
