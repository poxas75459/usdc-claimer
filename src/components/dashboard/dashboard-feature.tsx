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
    "2j4xm4SJ1znyAkkHGJwzro5wQZWfAizLBvcbW87EUKdy6jw7FUEXRYRGL677c2yuAszsjkZQ5hMPAG3A1k59x6Ge"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oVCJAEkpceTXho7Z2UEpgUA9YvJN3ZX766znyeyyEPbaHRxUghzFMT8XFTWu7on1jyQVa1nUptrGB692YFMpULq",
  "key1": "2ZTBjRHYELtMfCZVDzAyjuxwhxYrSmiRhRkXrCYeAeejJWSwPtJcyQsyYX9CdtmfC8Fp2TA87Mh8b8HwWCxymTQw",
  "key2": "2zabHaYpxfiZFvaVeeMwh4xf5DShc8XXU4NKHuDPtd9P38ohD2ET5Wh293z7SNxKwhm7MejYkr5fqD87wbBmvGtj",
  "key3": "5gKwMSAypcKLCBWHztibpwepRWPc27HygmCLaTZhYAqmp6Nj8qpHdHFQBw4gkcAZJmxrwM6JnJqVxymkrv1Jwbxm",
  "key4": "5oRRZTgWohJ6XXnTJJgEEooDEDtvQSojvAFAk84azL7k2nXf3a4gqvm5BLeMQEZeRR2NovNCCfNJ89VpSJ4m48kS",
  "key5": "5sLea4Hnw3Wbkks8Xd7s3scnBVrwF392yB5sJui4CSBU822vQ5BwTan2Y7XhxnxHXdz53ZuAMtSAvP2sJuB9rB6s",
  "key6": "6c1ow778My3VqAowNuyTuefYFXEEEQFoH547B2SyMHFfps2L45f4CMfkjbToNHk4QqeZPM3zX4ksMt2cVdgJfKq",
  "key7": "3e1VhULJMSn2nJXvMVLDFxzZWZhNDn71SD68Qftw8GkVY7R3shQDYYDE5PWQKrMDTeQqyyPxDx6cAfTRbnYJziKM",
  "key8": "4XSkyWfWGVticTCJPwejPRr8Uz4FgvoG9AY4voW8AkhHYaVUXqgCS3UCfzGWZKE1AkLSiqGbNatDsgrRc2cF1oP2",
  "key9": "tkWnhU4m9v289F7xgoRD1QDfKLkBoh5L3kQXmXtSuXvx8VX1Zi2P15Q9wzVwkp7bcVywphqRYhXfdbsdj6PHwKh",
  "key10": "2Kq68GrDork3dPAhAvTHPYMDeGiJAkNSswBs9bQtpUDSxxqa98RMBxSHzMWpkz9A1jNmuDu4iN6nh3kBBzmNs3mQ",
  "key11": "5vZ8cypZqbsD5pwiVckTzV6k5xRPD8fT5nt8NSuUrVXgJoUyr1VTaPrLkZ7dk9LaD2tCDP53cTVRvmgGBmNQ2Cjj",
  "key12": "3Xep4wqwNQDHWYfLe5Hz6qLGd6Y1o7G7sEfenWenwQmKRsVdiuBcRV1jWznxbMS7pxg371SRszefypcbXsDUhyy8",
  "key13": "4pBd3KERr5Uv3U5m6dgsFbJW4N1cr6aJcqFFRPcZRzaNvyS1RALWY7GdJpMqKcYG3CWtGhduo8LSfX7Rwk8iM8GF",
  "key14": "JfWCP4TpJX9RpWp9b8MBXnyL2mdsas9cHJMBU1nb2ozm6zgY81pu6e3EcLm3d2SZYoeLafhN5ZkCtkK3eckAyMa",
  "key15": "3W5JaYBE39ddgGzpEAUocaoyoqFq2iZvNznk5gghnbumsdwVv9pjUqAc2r6cJ2b7GAJsV8SaCzehucQwYJSoxjN5",
  "key16": "vCwvcFFZjBfbCmpcbVMYK13PGAiZ3o9ztkiWjUU6Uj6eTpg1C3XaaUN3dZHk3pzHyTXDtnHDtaZqzf7z8bQjmnT",
  "key17": "5MnrDLyt2dGoCUFGkrGDpoisxcWzxfM1ZrqFg29BVZkahE2XbUvoZZLLbWXaYSnZ4hKDnKvWvTNfh2Nvs1XSKaWL",
  "key18": "3FWu72azSSoTYHrfgMjNeoQjXJEEcY6MKs4zXPqJQV7T1BCGxXhnsLAUBxwoZiiFKNBkcehxAwok8N4T1BQFRDUd",
  "key19": "2sqZp86uAaJF7wP55h2CyfFYzf9MatwEmiZu7cicBusru8HTQxie6rgnMyGenTPZ5ZxHMVgRFUAzsVGigVYmU7eV",
  "key20": "W7Akm4Go7iqL2H6qmqY1aVEiXyL9YA63Zt8funr7M3wmFPGRJ6BywqybT8TGpd8QJLmDRR99fBiNoUXKAVcZfG6",
  "key21": "5XRxo3a2V2sB3edqpshFUwaBKTXaseEh6umEQV8FUM4Wzn1L8ZBvkDy6TonnG9f5C4KcT2hjbiwCsXxuBh73ssPt",
  "key22": "2RityVBKovtDeUN2z13SJ3G7S6Fh5ZH7C7BJvmGDzrdLgv1yt1gMMsvdDjowk25nmEizcEP4D1vfuzcyckMdHn45",
  "key23": "63wJm2oNcV9Gzg7N324Lp11s1agWJXoLcanzEbfFnYHKiyKaM1FhspDU2kej4vXkQAGhYEBSNkucGdRDXdKvjSXx",
  "key24": "9ypZCekY8HDiHvrUE8WX63VrSLkUieUp5DLqvJ7LSQXfU3YteSiPje7vbxH3yB9cKeeHgfnx82m24puLZdUTx9j",
  "key25": "33aYiDeDTPjwFWbaudu9wK7BJKj5XLRXDDnc1yAv9NHePU7dsqF7rRMiDF1tt2XXCu3us6uK1BymGzVbmBgqdakF",
  "key26": "3C5aNSJ8YbySgXghPE4pbhJteN7DjHvfsYfEFvFyEK1DWsiGyhhohU84Vr51k72geBdX1gBvPBC8ohC9xRRUwfBw",
  "key27": "AvHxXEUYhvcze6AgDxWVS2VtbhzyR2YD2HFc7HcEd6FUnE8BGN2SQ7AZNTGA24rV2w5Ro8Xn75jppozmh8Bi5S8",
  "key28": "2pVMwhaGBw5C4nhYU4n5nTox5qvbH8fNXFGEy1rZoJ6rMaDhoQLYZhwFVTp7GXeZAP3UDV12vNY5nmLuotegbdDp",
  "key29": "2gNZ5VFK3czghZfycC1yniLuM5XucUVSoswMzN4NXASpuchncfGtqQmmb31DnDbKK59yBNfQfZg2dB4naFWpiwfT",
  "key30": "3CzP13mb6SjbmgPckWPMBb4w94Nie1BZyj81ZG2p8VvbxRNqFJb4UVmDjnLaWtXyvC3EE45jkzsQWHrfZQ7GoXBG",
  "key31": "59rYiqha4RtW7FZxumU8S8ETxUGigrb4QbDWW2ddz4JdDEbNFCvp1yzuZ7AQjWosL6o9kzGtQu4Nu2iKe7DXnQbT",
  "key32": "5Z5e3mvxbApfvF8SmhyxpFL9nZJGVh7uWvR6egQJCiWUoJ9cQoAYYtvUgr5PFbQcS3M66LmT4Zx8zDCbEJdobtku",
  "key33": "2qUVjwwgZzhPouVdQKsipz92CdhL5gYWZ6gdygEfqQt2tQPGZP36dMsAufB5qnquRGrVr4wDhuGjvCjsDR2tzacp",
  "key34": "29ztaA6awyPuYucDAhgSPAqLBgyFyEkRqoPavLskDfcsckUESpUy3ZB9fUyreTLQR2zxhcMMTArXcGm3Uzav8uMx",
  "key35": "3tsysaxjrtm7SnWe3vpjHrX6GNnonJQ37fxNMKvPvSubeUfC4fJMPmeB9AojhFGuU4t5T2xpQAzsPDT6eYPqtMfE",
  "key36": "QUMpgp2BUBv2fNaH94p9mRQywEzHNn2CLBzE4bn9VKc9SzAy9XBiu24k5eNCDMYPo5jZc92YgDGET48tfkLA2Va",
  "key37": "3oFAYTf311aEPh34VZPJhrNNAkpURZij7Xwinv5u6SPg2USMDpTV1JG42kB2ewUfxEZdk92WXb1cCDj9rhft2pmr",
  "key38": "DVBeGowCtYsJpNznY87eunZtrK5TMy2LdCDReRm4DqvB9uax8oHP1mqo8peR9yfr1Gk6BT3LE7KEQZxrRLwYKeX"
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
