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
    "3USWNDPZf1q1jxaWerWUXPo4bY2kPrHSHrp2YrpL2vrEGtYApeMcJ7wx84YXpuXq2SotTHM9EW4w1nf8tx6eZKTt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56UpGMH7RhEazCnjCL5qBdNcCeSDidAWwTWXg5Lk34T2RzS1eX5pbYTXhHizQ43tjUA266GzuGckZQertp9KzNuF",
  "key1": "pvkTx34mJX3N2wjhBGVZ2ErxAMb5yGGS2mcHktbjj1YqzVahwgD84FTxSkfVGydSVVb6WH9fYDeeb3JLxxR1hTf",
  "key2": "35fJcayiui2M97s5VEqGTrgQNvsuq7oWFsJo6kwbK1L7LMwv9ZMHTqGrztQBZDt7wWVZTiNHrZmKZH54t8FV5YQa",
  "key3": "5nE5qdkEZYijYa9N82YYpKJ2DtiwAnRR6V37bjVXwpDNNZntPGr15tYpwNxv88FSRsNo6YDaVZjaBg8r9jmEsFpx",
  "key4": "B2SudhMjihVVUWNCPav4F5mQmFNY9DcNYq6A42Z5wDqDaRxJYkd2VWwnAy8vthKGLhy2XkjKQfyw4pdPmv4fYSX",
  "key5": "5iahP5usvzQ1pC4SasF3Q1atqNFj1E9kmMBcpqA6KzRP3gZwvpvya8hwXhvCVKiMbkQYWjimP4UNTMLuiSeb5UmB",
  "key6": "3dGXaMr4USPosgtbLYpx7h8sZAo8fdm6aZrwmRoK8JpXgmvDinozkewoBv3GKYfUis3q4u6aNC9BnQaU4FEP2RLL",
  "key7": "5eLEAwyDnt4dFP57nqqZ5SXms5rUw146kjzouQG83iYPeAucdezbrFWNBxpm4Fnjgtn8xUF5MuZpocrYhc2NfeLn",
  "key8": "3R45YKERwdn4DP389fofJyMzJDmG7XZwcpuqXjmbp1cApQDGYgXr82G5vQTCnTPCHZTmjBGX8yDwJk9Xn4NsvL5Z",
  "key9": "4atDfh7bDLr1g7jR1VM4rfZi4kNMRsnw157vaTZXZMENv4DW81nvunQSyvazCaq9jPToTJLXLPpQpFviyte8Sxyp",
  "key10": "9Koaz1EZUb4iLCnGbBKEHhTUic9vuCc4vAHcrm3k3LwdmHWLi44JMzncR8S3j69yNJMpyKb2reLHV3ycU9kGGmP",
  "key11": "2vhqCV4JFVrhy2Q9LoAbvypFTaXJRWRut92rNMbSRVVP2PuvWmiHYAs2Vin4BgyvMeLMztHpJFTtu1Bkt8zzB6Kg",
  "key12": "5HRcm3waQLhLfGTEwVHuHgU7XYt1345nyEdxPwSgmiGop3UTFLzvAGWdDJda9SnG8t6Fi79ATth2DW7SbQEBLmso",
  "key13": "5uptBRuAuLT3Mw6LC5fCeqmmCQjiujEaWSSjzHVGtFUKUciZ2tw9cvGqHFqQ4NxBdMyJBv8mvqd8P2DFPcZjGgPg",
  "key14": "KVKCpkyXsG67n9wGYAGWahfKrjPHeTxq4cs2FeC5Bumhu4dNsRvmFS93Mogyah7r38wxu8j2n1zEMFCnvCFEheC",
  "key15": "5wDB6s8c5LgrKcGFWKE6vdUbFzJupK5Rqzt1WQtKTUWttbTpLnBQvWMqfJHS4eo82E8p9rUeTuHjKZgFiUAhH9nz",
  "key16": "3AGurgTQWd9QW7TpdureHc4ozJMdfjLW4LBHmNdY8fLAESvbHXeLJm6ekhnhzKAaWjC1spcBinwZJYonSn7gqAjL",
  "key17": "44somYvosabcWm5rz6W2K8mAdSqUrJWf4kEMeBQ3Aj8S7zkY5SwvV6bThptcDnLLdWk1R6X9sd9dZeBAFXfdd2ef",
  "key18": "5aMoFjmo4r4pkMeuHXtVnx365bQMWbLUzkrZrH1DEoh1rzKKqQtzDC4wiwBMHVrYCT9aWw1kKwXWMv8DxphAyY8P",
  "key19": "9ZweAXVXXHiJHYaNea3szFjrPeeHPyUV9PPm69ceqYNYobLuzhXokpyj7zF22D5tn8WAQBFBVuWSLuN5H366BqT",
  "key20": "3XpBaLqb6tcQEVFatpyhfj7v2S4pdJaHyPh2A1VdpiGviDv9uuqhxJJCYcVnGSEkTW3b5k6FkERe5uCbwLPswPwZ",
  "key21": "3K8cRHFVMVVaTsSmRgjeoui96PqSCkwTJn3edQ3HgZxYVRwBsgRQ6yaHvaTmEw2ri2qubPf6RsozAVYsuCkZgeVR",
  "key22": "4ve21McKqxR2XcjwkyMgu63YJXZAsFmWe5AEK43U52oRpLEu8UuJivTfKN9BfirwdhyHAhF278DugyRbD4jqwE1G",
  "key23": "2TpTWPUPYBt19BGtW4Rj1ULWAsokVV48a1kqFnorK9pxwrYbjDz9Tg4dNwaRncosmistpj4iKaeesWj9ap8G36S1",
  "key24": "4LjJciUZqsSZw2DPapPtNeSqw64x89qb7JdpKCkuzU8MzKhAhtXBM1rpKeF5KYr6pNGnsYsAQcstvcEKvZc7WvYq",
  "key25": "3DCJNbWX1NtLLQb6snZ8UcFEDuBvS7Wtfj6N1epZHo1UpCP61Ysxjva7ejpVhBRdqkEtDqwdtTAdAd8SunRQcMBR",
  "key26": "pNNTSjXENEbxs4TPBKgQLtEvzSVjNqCnpTfiBVgz47ZidBLo3yxZwM6cDsfZUjfq1C3qFfxHoMcEUUJrLpecCyy",
  "key27": "2KE9WU71KDv4iJBrdjoWqqth2yu8DgfjbRid2vU7rXaj5mjHajfp3B3xsxQDN94djEQ6VwEbX6rNDs4Qf5S5MPV5",
  "key28": "4QS7onszNDE1SvZS4DzMTsot5FC8MzgbBjpdVHx7mpUGLfwvy2pKjsfd4iFpvvZ9ndxZ7Kys87kH8GFtHvf9xmH7",
  "key29": "3NAHu8VGutvpTsTwzh14aYecUqCqtmcp7tpb1RbVPcKtgUn4VP8Zh26WhiYJqaWYeTopfUYGiFshsVRAeD74D4G",
  "key30": "5sc6zuZXGLefakA71xs9d4jHzWjykaebc5soowqTn7qziiM2SejD6wfvVJpFYn9RPB3yEfG1JC91BQ6n4AfpU6Ce",
  "key31": "5axENjVvxhNAbWcbd7zNJ1rL6NiqyT2Dti3UXeZcW1njGvgKUcJibpUrLocgexD3Rs2jVmCnwth4MuzqS1b55BqU",
  "key32": "wzLaSzQmvYgsgpYtME53oXGqkYm7BBT3cST2K6a6Q9w6hfLjMgbiMF3ekQZnF8CiVK7XMSWpi9uQ3LYfYGT3Rou",
  "key33": "39rUYFqNtEcbe27A7XGJBkBCrc4XHw7mL63gCtkCtTXimhvoidR9faTT2BvGPBoHuUCcQUNGeEivtUhivQFrpPJS",
  "key34": "66fqAhJzHiJow4DDfHvMRDYCG4VFeuhkndV4F3ECZZRsbbpw3rd2f4WaqB5GaiuHSRD7i9YidusxRUgRXXTfKqe3",
  "key35": "5jogRYNi9FyTHf6QFipaiDknWRbCnLEtRWNkgSH1trMiqd4oh4DJDC3sTnbj2GQsk23N82petJvKiNQqFk3Q74V8",
  "key36": "2remnaPopJ7TBqCJmpcRH2Mec5esAeqDTTtefsKnnwtp1EmZ8dEhDd8xCq8WzNQYgiNPxs6mpBdksFmWUvdAJ7HA",
  "key37": "Wxo1GF4Xzthbx9y8YJYK5gfKGHP4UGtfAUD23ETMtgd3FSVxvq1UMSPDgoJNdhWuVJoPGLTw3nyNN6rxdEFEg4i",
  "key38": "5vxZbsEX9kJJoDXL2eFKQ2xpKPvCJhhTZ3m5kV5M2tCWT57XhiVJ5YeiXZYXKPnc8HKowNpukLbGdSVbPaQ4SSFT",
  "key39": "uYzYwCZoUD3cpuLVtxSDv9qk9huv33CAr6u66GEB62Y5bLpDvgqzBpeMBe9bJbaaveFBkgaikWQgho2KSywE2nC",
  "key40": "2qyi71oSHD2rm83Ddf6MJAyuoKdVVRTaBbeDYJLF3AVkBTMCn5jsC4apVmnA92MWNFWeNoHvqDiRUjVrYZteuUF2"
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
