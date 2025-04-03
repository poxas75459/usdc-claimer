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
    "xTnfKzUpXDptR4rTqY5CLKoX9bFxdx1EH8moduGbozmUK5FjLanhKB9b6LcMQ5u4jfFLNE7sYCKmENbpm2LjXkX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4exmd2hM22MNJkCTzdZ7MHeDeTYkeK1RpASCmnmbA3S3JYMX6LwMGZrqUAReNuv5NZWcdnkBvU3jZzPB4Tsd177K",
  "key1": "2knBnWfcPbB92NzFpdMmtRBjRmRWvKBhGUom3xubm7KP1kZxBrZazzRe2rFahEdQ1q51VogdSLnxhk8buEzkXPuU",
  "key2": "31eZeDWj39wzwKxtQJQpQKkP5nUBuDDRDSEsFYBGLHvxYH1HXaUazxZ97Qw5ZL52CeVjkGEu2dwbDUcP6QC7BSKP",
  "key3": "4MdsCUfciyAgg8fbY9gJD6wZ2jFBk9uxqPYVVxGExcmBoncQAAC29J9CbddKo6nBYN8LexgmKsyK8GFaAWLmhTob",
  "key4": "3hmDevtLCsek41gfGNqT6LsMDvwqyfXrEwsmbN8ZuyodaKwbiRXBPN3WguU6gpxwENyJovqxEfzE9XjjqXJH2JyE",
  "key5": "5TRQxoBUUj7Rt8YRSB5Bwy5bLkpBXqpYX4YVCFYfKYbu65UCZqbqkLHomGkFpsGx2EBQuSFCr5SEPnzt8hC4RS3c",
  "key6": "F4Ey1tHwN1TJoE4uuCkYFHZmtNGKZBVMdhufB1qPChwUQYYBwYDBXuTECHxQAiBpp3fM2wfyruM4WRrfb3TESAQ",
  "key7": "33HCpfzMcWqx9M3ukFoZikww1sU4zkuCRuz98Cw1pVvRZBTeHUWMZg2dNQQmR4icY8bwfKinYdGrq3XPDhqsqNpa",
  "key8": "4QLifv8sSGNrngVSmZpXQQEZZjx3ZwrKr757nAxM55kKGADt7Yxsbezrn65JiGb9DedLq3Hi1uV8zUckNcM3jLt7",
  "key9": "tNUjsiAKxTBXudwBysY3NLTpjhhLsg3ZLS5VZEU65icpKhiVyyzGB8QVKr5CvY8Le2zhhd67hkctsUhYPryKfy1",
  "key10": "5hiom62aHZJPmXo5B49KeV55cVddV3FdiSJeCdVQCr4FfZ9zxMmvxSPcJ7bQurZuobyVSyMiGbe1PFwqJGvppDq4",
  "key11": "f2Q2EyvgTLSFtoSkZxYTCrVNWLoxtXEZhg4sAcJnMTxgwLLxvGr6YpRBkjrGAEYNxyYMGQrugpnijRL8WXqa9ve",
  "key12": "qxUrkgs2jpKeWWBsVPAdxAeNig4D9dfcdwTWcKQ9F87fejnaqpoRqW6nFiEyS8EFUm1Ytovq45a9PK2t5DKpR3W",
  "key13": "3C6kPnZCCLhHvctcTxMoNG2f7EuW4VF15LVpufrbMsGPkgnh4UhwBjFzAy2as6bseNJg52rm4Pi3A84b6AVVNbNm",
  "key14": "3LQUtV1VDkbEHjqBTzQcyrq4muokeMrE81uxyjp8BeMgRqewF1xddPZmChaDznz83gQB1L6VmU4GWUXq7gm1vQUQ",
  "key15": "1rWfYdWkV1TdovvAcUWrioxCtfuL8WcFyXrjdUUweqbMhJD7SUwfgdCNbLJE2u9M5agQrEjtTEoojhzQFPMmoDW",
  "key16": "2rnPyT2DFJZsriCrzSrV42rKRs4sS6BY9Cp6RmxTqBR9PeSn6MdCkUJ7n6uoXiXfNMcptVfG6mu8u5scJ3mEEws4",
  "key17": "5wLTL6ChH6H2DC9dqenW7Gz2tnnG8b8gx8yHzgNNd6wByMZnAQYqijrVDoZ8vwnH2JUxbQNDuACavBcvBWgqrFJw",
  "key18": "2ZrrVhUa42HebqMoNX99Gv87juCHi1znDEDiuKzWngdUXQaEAMEga7dyCr3B8Q8RFDHksy7zyyn2cwUF45MeoqSv",
  "key19": "4TiLbyNV4f42A1WZgyNrEzoSKyLjHjd4VmPQKvFK9dmRdxRryMRhvoeNPFww7NcNgRcYUEQdox5h3BKhWpGSx7Mk",
  "key20": "4a9UJaz3uyFGiWBdscj54RTrVvvps4Eo7Fh3efewZ1KYhixaaEyUE7GcJH3drBRVAYpRjqNA7vmgn8h9DrPe5qGJ",
  "key21": "3Ukt16Rfr18WxbNV6x3ddSKoKazgLGCeVPDQuhqbUasEPBfhZWKNaK7yfZBZhgW2JBja2DhZt1DxV5nnAY32sfAW",
  "key22": "RqBQYH9gR8UTfWWNXceQ5n12cqRYGbRCRDp9Vt5Rv5xktT36eB86CWT7JwHezsRsF8pwr46dGvegJ1752yNcNAz",
  "key23": "4PqiHd3EAxuLFFwjZnzPWH8ZCJvzn4WzEcZaQ3mGzSZkM7KKPUtRZf6Tn7YtVDHdpQ5xvcHnWTTQ9Ua6cjA88fnH",
  "key24": "4zzQYDwgapeeYn5Vv3YPTvfvVeRVcN8mFVHtB27HdGrD6uZt7BdnJ7fdd1HEVpL7pjDBC5tGdKTCtf9gBynkFnYk",
  "key25": "3jt5BBb95N3E4exsEy5ZQ2PAsNaFmJ3848xtwUQyFosQNxm3WA8ABUEwkXVZBARpDY7AJaxdkymcDHKYqvg9MVGd",
  "key26": "5Kh85YH1ToWjv6CnTuCNZxNQDXSb7W7GrcYDqVvoLaTJy2zdcSt9yBJk5ekCiNo2Et7fZmWH8WhGTzevdjhS1H2",
  "key27": "61PU7tkGSQjmeRYFQhmj6JF54f3V1cmZcVeNSX1731DpJWuyHEkYaow3JnmFCmANNRJZaTECdfY61XUiHncsuYms",
  "key28": "VftaiG456LmfbZ6818uDGVjANESeYCfkcXS2g5KoxwKbcVcFVFyC54EVuadM6DUecKVR74GBomFssX63r6jBCp1",
  "key29": "2b5yoEUb6ZKMfGmdA57p9DGHXr62xrp1uqqUJsCo3TwXJo9BdG2F1RSuaZ1ZCRiy8JonwvZ9eDKt5oDESp7igyTm",
  "key30": "4esGJYzq65HDes4SS3BZ1yzszhKuH3tHdjAb3VhVnwpgtaJgHNRJExZSabP3u12utDEJamrgPzvXLNpxpemtkEiR",
  "key31": "41QrEZ5uMhefENLugsrCvx1rdBix1saLPA1MvgdNFszA28KXZqSW8d2uS64cQE4zwBSc22YqMWmv4DhooHRpnU3G",
  "key32": "26ciXs2XkKWPhs9mrfE4wpTzWS7ysX2Rv9w4qhdx2hzj4v4KRZsMVxog4pQyY1s3Zuq16y1VzWCw9iL7gDaTx7P3",
  "key33": "5Lbg3Ratk7p9WV7XGwVmjbj7siKbqwsdTnSZCmrVZrakfedwj2uixnzmXLnRptcMs6cjinVxqEWzgbWMrUjQjh9y"
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
