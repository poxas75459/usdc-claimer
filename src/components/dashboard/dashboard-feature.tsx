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
    "37han3Lf47NJjP4GPdFRkL4boXTWviiF8YE78VTb7FTPMXhzA9tA6qmci8f4RKfFHMMEa9ZCynsBUAaNsv2m4eSL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XHnY7q7D3HJDFLp8YtCszeLjUcFRUzSK5ePCbHh1PPju5FraJ2dBmzJmHrHR9SEKZkVoFp56tX612h7pLo25cQj",
  "key1": "2ZM7TJrnK9KygorsZPPsxgNoumB91bwCzcXpzLiKAEU6ACS1sdtKiP2Xv1eqg4zsH7dQEaEzsiaEmyN24u2S1KSe",
  "key2": "3JNSA5rLRifn6jhxLDL4dbuCrb35DVSnFvr9eWqYG4wsu2VR8e1x9NAbhMZ79fkY7rTrRY3zN21TDPZDUWjX1M1h",
  "key3": "hGQb4chbtTWYcGBTfcSDEwtsfMM3NWmNhxZroXHx2keLMLAWcA3YX58Ud8gNFNfEaHi8BHuqkmTqV6cjSsm2mog",
  "key4": "2osMgJ2yPjz3dXCSC4iSfPYHz666FyL3UUoVF1MecNT3aV9oDbduyc7ybooxffojXWHScTBkPPbFNReDzovXoR7n",
  "key5": "4KM8AYLTT2F85yb6We2wUhQjZ4eun9sqRUt98w9RH51nzjdDMjUm6pPJsGHNfc5kmSHH6BqVN4wvfcgY3dfPo3Do",
  "key6": "A5isSbUUtLiR6nsXF5c3e4A1j1Vcg5Ncafz5UCD4D6jr3pjqhCWrRSiYqwzYTPRzFu94Cvhio77n7JR9RgT1mub",
  "key7": "5KfR1VxuRcxw32UgJNFG6UUhgENoP4aMu55oPtZCyzfVfQdkxGMSXBE6N71nqduLjE52nhqjwLNnZWxcTjMnrmFb",
  "key8": "5SoAR9K7R8F8MTiEphD8pySmBhNRLqncnSs9KDa1K2cLvXF7ZdYPW7SHMv8aFK8h5NXtJHvH76rqfGnyXUELNzRH",
  "key9": "vh18RrTZEPAZoX16tsa6ufAvehuxgs6sMhV6XPjFj9SZnyCtV9AxSgzkyJVugkUCCNDqFQ8Pk8BHZtxEgFczxZF",
  "key10": "4Qk7pwgVSkeQFDR39kYa2d1TGo58RjPm9tfeUpKFexxDppdEU4JH6CycxSHZG41urrwsuCHQdR4tvapyE1HKY7yY",
  "key11": "33smm9UVtxFAAafbpaXPmp12MWdtsdHMD1Da4hr9PrKUrWfShQ6FxFWefZWmwMJjHGKz9WLe75FQq1RyeC4F1oRA",
  "key12": "3FsvJgjLbJ5yiB88Ar6pZ3aMABrgDUViS37RyeUbkgp3d1UBYkmvHce8MeDBYhDPSsTLcDoR2EMtjuggMRgbanGD",
  "key13": "5JxgNmNxUW7PDdAzEux8YHryvyM5t324L37qt6wpdpAb7oUq2QTYRETUPrqgiU6FFzX4rkgkQb8B5AM56ywFn5oZ",
  "key14": "5VUdJN8aWixxHLPnMgfR9Rzss3kk38K6nVudR6wPnDZPNpjWCjmuNCy4Vrva9pjQ5AavSXrs5VLfWzFD6CKnqpXN",
  "key15": "5gDeT2X4BSTd3PN5Nt94UQrBypTDygw8RMUGMW1eXhD47hN1B3y6sUrM8BudxVJcDd1je1Jh9KMhGtEWcw72wNeU",
  "key16": "58C4zXWUx8SMTYkiW4JPyFcLQv4NWJdB3aHecFDfBsFtE3LLMq9vv7FoytJAd7mhHgnPedQN9jywmS6ATcbdGSjs",
  "key17": "565MH9t4a4oFZrtWNdoGjVzNGBjybWmhiGWeYpd5FpYZ6nVEJ4V4rsKPewawtfz3T14Ds15WQtFdR1ry5LMuhmwt",
  "key18": "43ZkV4Zwd4WQUhMfEUpC7hg1BiAYLpZuRFotct4fL7hXprWHkgonMVfhaBPQMFVANDqCvkCUVJpSsvBKRpXiNHnG",
  "key19": "2ae8TyZY5kA2CaAxWNonyYDdhZrXmfqvaTGAnL8TBBCcW4eCMGwFN5z1Ex4ZTWjoKSdo986q5Dcb4Uzus7JpZRS",
  "key20": "2qC9VhvTfRsFgpsmYsnD3xHKE7Cz1bzKjY5z3uqrU3ZW49vAyKuqPrWM7U3f3zLchdkKQVeCeuZJAvxzEjPiVeqe",
  "key21": "83GHAuUX5ggb3CMaJ7C8sD2FCuX5saoxsdGtCtwiixbQtAaSrsyZderv4pBDKhkKHm7otSaaUsz2y2JUCmdJA2g",
  "key22": "4hddGccMqYfCgsng7s9BfCCoBKVYGYnoYeyBHn6f4RNxcrkUpesmzH1w3ue36z7MgfwdJVCempibiAcYVmZ66crd",
  "key23": "3vGdgRwJJreDf1Ce2qR9BHPt4gZrc2p4MtAyetbTxR7ipczCyBmwDziFW35M8JeeTzx8JxQdVvRjsk4DQujhAMGy",
  "key24": "8EXTvnWqpy6PzCCtxBEiP7F2x5yNeP4jrHWjsNFuzgQSzmmh2vxNGAB2GmiZGy1Vs73n177yaoUUngqGELA7Kg2",
  "key25": "4jhLuwib9UEVBskir7TxxTtUF8wNoob8ENXDHhxtuxFG95CLdQkVLMBLzqkewDGvhhMqxSAFM77sG6h2RuXp1vt",
  "key26": "5mZQatgJENPfXMShkxcPf7vAgJzoq5v8nnynQcyz58vy19GrBBd8T92WwiJPtwDntmhTVjJRp6cZPbKufvsmggFd",
  "key27": "4ZEgXEQj1PHZegH8uCK1kDmeStU3y6Xj5DBUzUqKNbknY34SfaUS8Z3dpXYtGwZXwSxGR5FV8pTUcWEMuWofGDZv",
  "key28": "5USYRNozgoWe4dAfV7rZ2fGLr6XD6KhbKGMweH2D1x66GbuXNPoseiqAA4TB9DdzS4P7Der5jMw6uMydYG7ykFJS",
  "key29": "2Kv6e4hdFTV4tCNqaqdgwN7UARWHnYVNt1dZ3Lb1CmbAE6A1y5ybz7TQMHT6GDDULdpWJxneU29rSVnN3WkPWaxA",
  "key30": "67rcAGwKXjv15hgpoKnidXTokqMiD861kofkg7j2yAhL6Q8Vo28LLJ9XQx5EVE6QoDfknFr7PU8YV7cc5pG8ahN9",
  "key31": "4MV8r8WcaiD6YFvMzoG8TFoqwrH7HBK4kC9QHBjk4ndRiSLZwdhYz9uAbwbJXKnFijYz5ge1abHGppKHXztDRKzR",
  "key32": "RDa5F1Afv9PAwqUheCApdrjL1uRuYw5kYnkTxN7cQEz5M48nNEKgQxXkwgCNYGbHzPGfgBwqULmDTynSRHbzYJf",
  "key33": "47h4m8FFmPhmW7C9JULWJaw5dL63MrxabfEBxj1LjmghTvCbLDqH2w2nX9sW8HZ2c6DwChsPbv11TtSPDyJaNJ7P",
  "key34": "36x44vvfK4x1FRvnKNUcTUX2Uht94Z5TxnFpztiVjsmeRLwra3hVT5B9NuKSVKnY825S2Mq6iKFJwkfrAS9veAGN",
  "key35": "4dtkRMLq96mJaqydmMtaCDz3Lm1TLrkUXgeKbiJz7s3pdfKZX191ACrLjaBeECdJvUsXMuKW77HsHhj1Ui7gBwbR",
  "key36": "2mUShApj4Vx4Bgfb1n7RR7BqMaKZTTQWbRNZPKJCTsCQrVyrtfK1jaJT9RqRMYnVa2Uta4akyY4bE8bSz1FYPcuX",
  "key37": "5pJCa1BtEuzUKE1hnicMC3h5LoNfS8b1ZCLdDdLJnSebkdFtKJx2JnxkDzeYj6wepKUWEMrk4b9VasogGhR1a1X2",
  "key38": "5ZHycUhrz1QC485bHvo7h36haqDZ3DuwKQsJ7tjPY7pFibZHdemFVC9pq4nQureyWFrWGLA6VvuJMixsuFDk4hQH",
  "key39": "MEG3N8vDJ5cvNEc33b1FGPWsLyqUCaJW11rvvrhHAaQyQCKvHjwVxrF7XxSzZ1eYUXpgsBKJ4ZmLMM1iiyS4r38",
  "key40": "5NWWy8WDqCqEKcyBBvYRfY19hjfT7aAoQfSNrF1vctpNVtfunhTwkC9zGXRnDU8AALVFXw2P6BPUpPDCEh2GwtsY",
  "key41": "3RK31r16RrfLV5Z9dZUKY8KTsLftJvHU964LFd2SNTckLoNdspna19Zme9p1xhBmsjT6yAC7m2GkLaTLobum8K6",
  "key42": "8PUTPCkwsTV42c5qGR4o23kHfkN8vag9MhNK6xA9fPk4ESgr5XrdAoUh7zV2Pmg7HWBpxJH78132mCYg5Zsfvbu",
  "key43": "2zKpPjBJsR9vB3GBVkCs6wFBKbx7S3km84qhjZAX2Bq5WLwLinXVADtnzYv8tz7LapSG7DiEYAhH3oy1dsCysf8w",
  "key44": "UGNvWAVBwWtRJmiAH4WQ7nwx6zUgJCyYx2o7c7nd6NSiWgv2yiUU4WYPXvDcto8SDx9Fh7eHpvGzSSgnPz7yagk",
  "key45": "5wDhm377zGapHzj8bmp3vgmkEp65q1QCC2G8w4Mz7D9cA3oGxeTfecujYVGQJrYMPP9JTtcu4tPFGhaersXD4pK",
  "key46": "3AJDiyzGuayJKpLyutc1jSoEj47ZX26pUQkGDv734RHNMyu2mdiyZQRcn3vtzJMaNweX5Eem5haxLXKqni2z1kge"
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
