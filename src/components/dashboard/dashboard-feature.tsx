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
    "4H6CTEre9M6gSTawYvzBvNwHkfA7Wfn4PkrJ1wF3SAFCPh8MHznHrz8vQijXReEAQ5WD6yLUTDRLN6HX68Xvo5JT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wiQxgKEwuxRTeaCxgXWy91d5UXpbfBVHjmfL7jriuQq2jAPWxh9Kohiv63AzjNFaY5FKCxf2MLfv7JAA7CVmvEa",
  "key1": "3sz9pX9zuAcLQ91f2p3h6T9jcKFoanVuskhnSUWhPpGtRDrSqm2mL8Yg96WPXKAuC2Y5MUrbFs2dZTbFWPuvJZYx",
  "key2": "2urWoNPYNigF8YoW1tTJHc5KH5Zti6murYZsd3M6xZSaUjbAAnf3gBoy4jbA5fyxaWjCfmGyZfCGkCae9EDB75jf",
  "key3": "3MYpGEgS4jM7yEsrFSCVDM1UfsrJ3kprhFVgJnfU9B1jiN6xkDZYi8ifGf6dEaGSRTBy698dgbRweTy6wGQJmS4k",
  "key4": "5ATNWRcTqSgfyR6SvCurF9EvnmtNk4ty9CT7ePam5VHXGqrafSAeFWqkH8K2gLizQgqTkmQA4twFGoJbtmLxKseb",
  "key5": "5ZvtArJ1ANB17fR9TnPhDRLotxUccxTRxNhHPPb37v5GWAVDZkaYsvTqYA67q7FGgB5VJLNWNJpgCXRoTWEYBn3V",
  "key6": "4avK3A2s7oLCvRC3BHZx3tP4RHGf2V5EwSAZ5uvtM8izfoWGNpzLaNoueRNtsKzwnC3T1KLtuAunCzbWMibi7fWA",
  "key7": "3YMsbtcHfnadAzCtDDB5E3GKLvFLYnTw8pAjFUtcxDhcn6B5gb1uZbeomaDRqE2NKRbEMxpkPzkZxCSfnHgxecVH",
  "key8": "hvSPHEuq85Th8NF4DtGTgYdL7LSXb7ELQ7ULghZuz53wq5vRGFGgsMpUixV5cvX2egQaqhpSGGGdkMDcUcBogiy",
  "key9": "36K1s4AkeXz3YjwGoXYDj6xuki6Ch5RtNwWU6ZYx3dCd17ijhxPF7Y2XXDdG5821obURtVVDHA3eTvVtZYL1C1zq",
  "key10": "JfJCVPuzqQoReQBh7sra2iT2cnUYLyHVq1rzkNNYMXBjFqJdoWdH9NacZEP6aMCjWHgArTFFnjjYZFUhzmB83TP",
  "key11": "4EhxcBFkwiYjHpCcCRvKi9GxPXjFGdCeqq2AevAienVD6QMgjPdDPjv1r1RcsF8vhU7jFBCWTXAzLxuBZCZ5wH2",
  "key12": "4c17iCAqm57q2VhPBgEkwvmLYYcyrwBaazSoYLeBiFUEqLaqtaComHUFv1hzWnpzGy4MWFKrWCBPsx8u69FErU9G",
  "key13": "4kghUfDXEGFV6j25ZXPJpunzkfU97s5VNfYQ2HYzfmRBzqACLPwURN8oATVUCseTRarinAHT4dyer2iU7yUWqYHi",
  "key14": "2M4HBdNspsTCkSzXx9TRkNdgeNzZbsQVFfqVRg72FeUJ1iEwNKLc6ZUwn3xWihW5WRxZwAG25Y1qHBeNnuY35j4Z",
  "key15": "5wNrUqdSGVGFrD5zX3Sst9mFG3F2UfGitnYrtHJCHhpyD29DnxeWjbeCUsC7qksub3J7us4m3DaFygdQwgjXrRME",
  "key16": "XtyTz71zeX7YctW8MNP16mGHjFuB1UcxpdRJxCPGvXzDefRx98kfNWKjmoFTaaoZhh8xb4Rdov3ASKWNBE691M4",
  "key17": "2phzcGdVPqAaskM95eSEEdGXamYY1JTYsgXNfhxLmFxqWbRLNuq1YxzGy7SZKhVSFtzY4ugQgWohcghBw7aobi6M",
  "key18": "4Hk9RPNsgkiqn3ZWU6Pc3RMmViGLgkLuf9KjumSXHzvek2GvpAazEgWAKG1sxUEFHJTuRKimL2KBQsW52Coq62Pq",
  "key19": "3wy8aJJW6B1DjSTPVYS7tgnVjVqpW4erhShPLFXPXqR8pvMBuNxyyx5HNHxnBoJodUPbwNeuNqRVhNJCWCUmJJB9",
  "key20": "62LaUpx2taviKxLREvDuKNTcp5WuMxtTZUdTmMwM4ihQKFDyZVw6fg4zUE7xY1CZagCt8jyoqTShJTM6oci4eXAn",
  "key21": "3F9Qk4T2SSi71Y4P9bjxvjrUMZbPmGdicawLhUB52CERV58CTS912w9HMbaVNfwefwWBH6NawbEZZGnYNSqscUSF",
  "key22": "2awiCR5qac5Sxa2erBH7WAmZ44n6GtQ78Ro88oCHAD8C3PuS6Cu2FGC9M8wW8gWC2JtM8NzeK2PzLvHEc7QAtc6X",
  "key23": "46qbpMcWchMpA3ARnP5m6ddfJ2x6QZdXT8Q9mMjLBHXKWX5iUpwWkU4wsUBHaegKeBVo2tGBzXE1gvRNkTsEJtfS",
  "key24": "2ktvUk31FcvN4axPUyAxZQ8bQA2sBKTvyLZvaiwRHTUmynaQxrpZfq6N6rjpeTJd87EmgchxENEUekK1idCBcqfn",
  "key25": "2STK4p8KosUA9EKEpruBhHhR1WUCeKwSvBwxCKnMojhYxqiLqffQuKykFn3FwVckPYZbPh1kjd6CG6LDFydbo9oz",
  "key26": "5qziHv8EVssjopuFQaT8Z8VSj1B6RM53H4vev6gevdb9HRouN2P9V3RX7ULEy31wxCYj3mfRuFoBr3kH9USx4TEZ",
  "key27": "2ofbSyoTwhAjKGucRvvLbzaWaDmk8Z12LAcm2aGMzTsTR6wuoF26hxdqqGBdnptCW8o6ygxeoBtNpjTHt4yRuiF4",
  "key28": "53EGvzQ7tVApdGxKAg9bAEdcTfH68AuZ1W5tQFQs7rWTiF8g6kTnwNXmZZmVvh1q7hMrvPpiEuabLWzKwzx5rgjM",
  "key29": "4XBYPmwrLvLng7yFFWKPyYhD7oqjA8wa4DTLNBuamHcJVyWgbwReT681zo1xpv8Di6dJd5Yp8PjGeG6KuCBQVQmx",
  "key30": "ZPTnFSQnWzUJBZzM5xH39x35XBw22zuJQamasmtDUtcV3rWEtQannVFZ2vBmUW5pCdnv3EkncrRumhgNqpLKS86",
  "key31": "knPLHpzgtGtaRHnZLg4fUWggifHGNLhNBA8zyyDwgdv9n25c4u1VkpyEJjjxuHThtbztYYZyJtp51tPdAgKMyeE",
  "key32": "4ofEtoamD1zPD3pj6abjZZaJ8ASNfonnsx5HZSkt9RdNUDTKehkHMeFDEcFEBqLEkQNqPWy4bUBeejdD9RgUWjm7",
  "key33": "4VG4B8CDnL7oUGFPcuPSydNCHqD7YrJsJnH7mD1AMZP8oC7QuVj4GEP1jzBnBzJQJyABX3AMDVNC7cCNS9AXoDLk",
  "key34": "4V4GsNAN9oL9ciJMzZ6LyHDHfCs8wNuMHCfRMkNs8RAjydmHVKSxBcPzSUcSsPoofhHyqQoexHA4oYgKGtLctNtE",
  "key35": "2VoReZzTwrXnMj4HyrTe2HSReZG3YK4GPpJCuwTSXxU4d3hgDYBkikbAPLYEgA7n44wykik7Humfwv3hqqpLJRgG",
  "key36": "6MwjZGxcvhxyR322Yvm2Cf2PY9g1SAVrHmSaq5eUtP9Y1DzYDSPFwAcx4ujwwcfHkUvd9JAa3PW6yKZFXk57Epa",
  "key37": "G2mAqN5J3yGZ5msu1pQAyr75RPVQcPsapzMdEoNnBqeg6mP6vtpo9qcpmYPhaLp62CySbZ1sU6tezJGhLBZBM9u",
  "key38": "62f7PBCYEWgkq7hdB7Pxo85dpmH2DWogVyAfa57Z43NATMGLEYsE55fCnQVcbCB2rXx53sdR1oXLXQqPjbs8eioN",
  "key39": "4eDUysC3dHNYZCWmeNcW765fNovRmhyq4T8fywRJDeMDrjLULp9pBnXQDC76XrHxeLg8gTScvXLvGEsFSgDYwiL9",
  "key40": "2UBLVpcx5gbdbQR5YZ6Y4JHzuzjkS1ju3j6pytUZhLdY2daXQBYHyjjkzD3c2Qr65pGC9XHisFyp35tffZnTwNoU",
  "key41": "kwGMfSMVbE3bAnx6QTFrnfymFCyzn8CL24Dfk2k48gXwJNUZxQtHrGVfszi9a9Lj2dHv9cN6VjGy3tckXtyhjE4",
  "key42": "5FPcE3zzJjQFP6XzykzWp7aVu5QLBcz7L4UXqgkjSTjHcjEmt3nCkTTpxqqCDfw5Ktc5D4vAXxbascVQKJb3wC8u",
  "key43": "5DDWfsmDJ6W1Sd2yvDkA2wYH1tK8k7SHwus23Vzxy9LXJ5WUeUMnbsWc9Y3PyS56G8MKqioTWApHYvVXT5E5HB2D",
  "key44": "16oZ1m6VarjuThgdQ6KkBAfQqgDmtbCGGkssEULkRx6RxPbNkvptcu4zPjrzoa7d7afQrs28hKNYHgXDAfTWcBm",
  "key45": "24nfHJMW3QzWE76VuHrneAvfW4Suj57LhqwxmAqKRwAm3Lc4LpuzngMoStRc9Q4GimXB2GUnD1bGbbKHFW14pUP8"
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
