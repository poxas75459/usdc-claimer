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
    "36Q9RGWmwTzzhSsKTbKBqafqyNoVD1S2ixkRjdWCFBDKKkr3WjXprJ7fzyNUNPTmQWmN7VgussJK8ADtKHWUw92Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EkUcHPTVg9PNHeVDmHzoiywupaZd9vNjYqrK5jN7KderiREYXnEZea8LT1kCdwCRLW4LbcCiPEapTb13dssyPUm",
  "key1": "4sMkY8S3cQaW2h32QLy1zcvxCREhCiBkX3bLHSbcPRNFUMPYRhPsmHsD8nnCAExiUbScnt4iPWYVLuzxDujWR51X",
  "key2": "rZCagWXApnj7zjekScLJqTghjcWnbEEuujcZaxk6G4nSSeF6MoeVWpqSKJACZvUin8CcKGTTp7Lax8oQCM8Dpkj",
  "key3": "5zM2GLCbjfXzzmmhuoxZTgcCTP4ZmVVZbKqhtsVo4Q4ueYHFfEMWPbqiVbcJ2prSUKB2ep36ide7uG9SfVFcqZtL",
  "key4": "5SDp9RzercFpbUJbiKDPb9BDaqsY56mkZNgvJFpYDFJcvaBxdcV2h6M4GXLRbR79xovxj7nzGjmGt2HBJ1weE9nA",
  "key5": "2cLXqpweK1fegtPyRheKwG3yXYmMThEHo4BtTEZZAJwfc9e8XepYCwfndkqJoeMg1HTMigdyJQ9ohs1tptp9sroy",
  "key6": "3KD29SpDd1MQpnQCVD9Vkv2VLjCy9FCKQ6yPkHS5jwUJJW1weVg2KeWsHU4s5v2H11APoZKoACnEFfBxH59WUrQH",
  "key7": "3mvYdpcSTVdoeJUwq86VsNgYdpShJdN5gtrNT7jPqxKVGHEd8TP2xFwnhsL1b8xp1GpL7uCERzWJCekSa1RAX6WW",
  "key8": "4SxkfRkFUjBKRSDp7pTKQxSBDHD7Rmjb6NXjDZbhzxwkdaRXpKFLwKnAJfrNY8A96HjuotgUByfh4zP2bAN4iseg",
  "key9": "4FWy6PaGtXBBqHYzP5UqfzbtoUVAP28gAouWMeuPDoxZ4XDMpUq1FfUdnr2ShPAqQrkhH3rzkbBHnb36TfHNsbgy",
  "key10": "5AYP6QSTbEaFbRB7VTrynWS5UtxKwNZc5A9VNQ8pfoUqLFSb8WtMvDzUHU5UX4bxw8bh434nQzSfrgarDe5TwZvN",
  "key11": "5Rv6FLjVgeT8ZwaJaSHAjJCbmjMmKdRk3Tg5HHLsNrwnB3zA9owoSZnZQG5eyWzzLpxhjVSFRUcJd7SsAdREXmJy",
  "key12": "vGQ59ev5qFnN9fms8c7ivn2gyeiBEWYf2rW5FRUC7jhhUR4JVPU5VZ2TkXYz4yZWLWuYQUxLbqCWiwQg3q5AgFD",
  "key13": "5a9M8RDqWJCKwo8vz7qpgc88U6YEUYRXFo96yGGjEy3zJsTEfUu6oVYMbwYvExyzgVSg7xc1kuV4nrxTXKevHuLm",
  "key14": "2apT6DeinRoMaBH7ATs6Zuc3eTJC2PBSBqxkV8PMTQeqLPa76Sof4oBXQoy5qvMAfu9mydkZBPD3LJSafvPrNmt4",
  "key15": "3edtyHBgi7eVGyN6KUfRLAH9uB6khwNb8pXkMHhGFRfVSYCTAsdtaPaooBkFsmW3pbRDEK77Abho2VuDkoXSbziz",
  "key16": "XLfPYTLztCTxAy5qC59dz6ciXZmcktHUNVt6VTxSVxG23Sh3rmRWGQqdSY1uRV2FggkJ5s1qrECvHPA2nxmpbzd",
  "key17": "2VsiQWJrrDaUzMLjVi8R2bgxRbaVzp22sxLaoBX7w6wjRGh4EeS8gPcCqdtZeBZnYS1YxireCB7vcdM45XpfyJ3F",
  "key18": "tZP1huJmkV3G6rQZNvQxdnybUjZ2AZjrVKtvG2LZSD1FeTzZkN8EQ3PuJ2EhBGYjw73mqpnWyC7MnKKwbUpsL2k",
  "key19": "JTXx4boKfMhkijSd9xwfRiGpzoFiWynNXDL6mJ2JEG9JmQodh37qggfm6hrtCRtMmWnfFJcPHjcDiXQDJ5z11Vr",
  "key20": "4M1Nz37UQpEJUVweyA2kq6pVx5281oS7yyDTLoba3Vy6pWTGW5mV9y67UPTzC3a76PzoSKM9e95afuD4BhRdXBYu",
  "key21": "2uhbx6WGnEFRN3y3MeXmbKrZ9dn8p7ww4f5CcaHKK9XT1jzPiRLDYhHhiAHtPPccSVvzEDcxqVPgy3GcLZ3wtpjC",
  "key22": "W9J7wr9b6L4NkmrvMkWwxZSSRetY8jsFj5vj7CAjuzXebkNTWpZJ77ZLpSrY8VAKSAfU93vL9Fprvea9yW1vDxY",
  "key23": "2UoCWkK5Wc9noXpEtXaC1ER2Xq25uB9t78B7FUSwHYiUF3HaY2B7rRfZZpr1r81VCkWmugub4yW41a9HYus6yQ6n",
  "key24": "4jG75mqDhi7PeHH4mDyYMLGMw2RGU4VLRc8gjuPbAj3teTKCfkJvnjg6QN3NoxW43TmsxMx97vxQ5EK4FWbqVzPf",
  "key25": "5SQ8bSDqbFxmyJtPaUbnp63VWRj3qzhEtM75qmTVCB2sekrMvQffW5FQ7vVLC7su4rGaBsYuVdYe3AthVNd7PXvY",
  "key26": "5qPKAZX4gbtsQUS81C4Y4TJWYuZPB3F8JtzkPXgkE3mvPYe8v7dYbQgpDMfaiBCMuxYpbaPKj2SrTzu3XHoMk653",
  "key27": "5cC1jwPNjZE9Xpk1dY2xjVD4aAwacNo6WFTALwrK7nZnBtHuqGyggv5mJeazj5aoY8z1rUuavVnMxBkCZ8EovdeW",
  "key28": "w5NoStLNfM4sSTNmjSfc2aZNjCq53raUMF5yVDmTSikrHFLHdsqFXvkowsqg6C2P5oWe9c2dpGVaKRqw22YwNtH",
  "key29": "5Lxd8zTjDi61vtVwufFtfQj2idLfDqy7JmrPqQHfL9G7T6JKkzV8EmeVx1a8Cs5pWYuLSaXEPfvzZSHVQLmxkYZ8",
  "key30": "Zn5w1qAgTFwsgdqgqKRMqLNvEtwRh7YwULUxBRxVEvBbfFdV8d5K3vRwMy521yjNmR4WeFbgR2ejkrfUxpLTWJv",
  "key31": "4PbLCBRaTAtgUFEaP6JsxBfP3iZLka2rA8vBkawGHnhZo7Sx9PTeubmjzPXTkbBMdyyCh4FV7AAhRfm9bygdj4GS",
  "key32": "2xrwQnER2g6fTNMq77zWYqavG2m8WkPTbJU7BwoXwcW41zCrMyaGdgwcJckZ2vJJEQezMBcLjf9kJrZtLVMnNNGQ",
  "key33": "27vmmHftA5WPuVnWsQgEwYcHbAuatc9PNQah3ZhzaDNwdrXen6s7CFSo8LVvUQMTz1ZANKsrVV7FE9CH5opvCrAv",
  "key34": "5fC2KzvXvSjPSJrctBeQTKrt1yf5gRCW7A9dKvJKvSxpo7v8E4pCgPAXBhwxAQNYC69rRKPur9jzUmHNBiSBwjsa",
  "key35": "5xnVt2nzEPGqUwhvMMDHqbFScEMn5jRMH9FpnTM6zggZGH8s4h4YRRyENiTut2K5GAf2w8JTUj6mCc9vS4jwW7BM",
  "key36": "2smjBKLuLuhEMbaewqrg8kHLAnyFi18DrcLoFQuPpXDyiD1Av16ModJahLYVEyag9gJnGSN7xz8pcisCJQAKYzPe",
  "key37": "3JN75aTLo7gykCxSMYYXV13aR9yGSZJmPrwR6KbNvZQMBqGLJUsoFXaqwedoJjPaNry1DYH7XZHQEcRFtMkxdLxg",
  "key38": "3ww8VcVZVfZVZuitU1rhNYozxbhgdbfA3YB9pVDV3r5k3vUMSWF9sLjYncf5JcTfHqL3MjEyBn5VW2VucUzJssAJ",
  "key39": "24d6ABvPpTwfvgHA5GNozXStkzLE5uNGC9WH4bKvBQhnScnPxGcqnCsxFzbWaFYc8SBbccx633AvWwdAC5xiTEfj",
  "key40": "45Qttv6pH3ajAvHZGhQTsGFdLgjCsxJz2YeJjTP3mDLmM6hSmBJPKzTG84cwxh9ZuoXmxMzJeRzruNncCxrMn71E",
  "key41": "5RhZdjfEtjCmM9bCjrwCMGT4k91JHWCHvrLJ7RswXs34XYQ5UgrCrxjfd2aLBHfaYUZGzVzrG8LTv7FfT19WLgPi"
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
