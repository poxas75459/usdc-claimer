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
    "2waRHTiJ8ZppLuXiSKhmjCvBY4LNbUmgwdFWTufteKv84MLPRfh3z2uhi9VfusWNo98XXgkzXXyoTbtd1TJrTmMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AjNKMBLmGz68SFWdzWg5PzNxvao4GXoD5WWCeYiMVKkbHt7oqbW9SfG13s6gzjYNsxBM6mT5ufS7QmsH4itadSr",
  "key1": "5pg6j3yE3e8TyFX7sf3YJ3bz6SVhdgh7Bef9jJLkX5Aq3QKTNHCactFQssSszetY5pLSZgnsEPv7abtbtgK1vcec",
  "key2": "59E5uaDXaciwstn4Kho6qAQJYQ7WRPv4yrHVMxfdYVBy9DTwntse8Bejo3LzoVryyKgMZjxuEm62HVdErdJXdXXz",
  "key3": "3HmR6xyEjDcCG8vfYyom67S9ohESWA5SHqGd97WV34yKpf6zAemSizDLfmt9CwFsVMQZbSCpk7RcmPRBV9Qv5rid",
  "key4": "4x1czQ8m6knMvccNTXqbmrGWkAXEjU5mrRDJBaXFXxNrMEDdZbywar33ejoZ1n7fYMUpSW88n42GYBgvyoF5T5WC",
  "key5": "4zvnNbYuVNzExGHg36who4WATntMn8ZenVQveoXXFVTAi8Kg5ZwZohJbfyxh9cihsrrhtXrdxSaUaVhXwSGPFbyQ",
  "key6": "48d7Tk28sTw6FAj9FUcWsWLViXyXH6Mrj5VncXAaaBf9JhYNw8YLJcY9v3bzdwgQuNWFKyiiXsW29bis2wdPn16d",
  "key7": "3yomZE2ViZ1rNrj7tavQzgD5vV5xDjXFFD6Pda7GGXhzXLZuPwRqSP6f6jQWTvFHWLiiwTSXyGhrMEEXLaFv8PBT",
  "key8": "XkNVPwFw5jLTv6AWDuRAJGSVaf9We14wzT6FjpBh8TYMLoKDdsR8kzkvzEUnQzwjwyRs9pUgVmJuExDaizD3kxn",
  "key9": "Ry6qyZVGNZibTRA5oGUUSjrktKgFXD2FZHqBYThhLkkmCXfBBsXTM4pzf2KVqc2HGZMd8BLb2xynUUa2xs5v1mr",
  "key10": "4SbyGosRssxPx2BwMKqupucXZNYYkQkCC1XUAJ2SYUZ9awQ9m6ShYTRFLFscygKgKmm5UvBuTYy2p5GUaweUQcZg",
  "key11": "4CAzf3gzXPkpiTDURmUtvZYjy2aRkFViWwWdz2nx3gG62kSmESCCNj9ETe9bAKyAE6e51vJ6sNJdMkd7SYg3DHEK",
  "key12": "4QZnhJRvUcKyT2QLNLcioVnk71xDniYtD1aNNpTi5z6eomADo98cMmgDhQiowjmiozeXzNNmPai5j85AqnKvFXMy",
  "key13": "2jiHnVh1DPduYCCFU2prWG6ZzsH9xY2rvRY615DYVye25KoEym4dRo3rthAWpywy52ducCr729Z5HdwAcnevLfQY",
  "key14": "BsH6wQwPWKYmsbzCgsA4iiMDF5dctgV5PK8jJXFJcxaN2pUBHzPSMaiQWFXEPhtja3xxNVoSwrRGsLJnnA3PwtJ",
  "key15": "67KWT85cJd5XB96sdCG8abpemggqBYHvjwVvTCCcKw22C5yBprtCH9ztrDMAqfT1V7pKLM8jFEp86toPnr1VgEta",
  "key16": "3ad1Q8xsWgCFPHzEtnbWT8gtvdQt4wH43XUPpLYz8ZDH9UzQCUc9bjtHEQLzs42b2WG53RJmMD8y1dXN1ejpaCSh",
  "key17": "PXUMX7ajVFd2SAYGibVZoyWpQrhqVbVcAR7JYSXtRd6HWN8Pq7vwxvP8gV9ec5gB4z6FyuyCjQoff1d5qGdLzAn",
  "key18": "5TnWGD384qcf3wW6ptiqonoYTyohWuiwrJbXd5DBQjwpc9GchoowW8U5oejHyBVWoKR1yFN1J2CUy7FTGUbKnCFW",
  "key19": "3fVCTq17VKuf8CkbaL7kaBZkrtNyhviLtPMX4Y86NfRYAQzsLNo1LwMUbJHq21sx5yz4dBmyKodT1RG7KZYAfDCb",
  "key20": "4L5Gwc4zuZMn8H7691ZUEfZzHL7Wukn6hBsp3ory2xQhL4GsQQcNN39eG6MiqXnBnTW9HgE1AnX55oYi3YC21DyW",
  "key21": "5mWtLwsqXoUpq8us6De3bh5viK8fL4jHsah3VSMvPGENDYcY8ZiWRMgE3sB9FGXrU4JXsQjUFDwLriKjqqTwCEtg",
  "key22": "6sDq8jtah1JcM7qoEhrLEKxNtgknRhSS4VEDZb9vqnN8LWJJ1C7Mvt2Ypoysacd4LvUEU7hSmVYfaiPfGsi3FVy",
  "key23": "C6p6rkNHqXnNovjGFinBww4k6GXsAbKCCE6qYzkMfdjLo2hERyT2Hh73cZKxKfkE7dgcpWDGd1mCse7ZXgvPbMw",
  "key24": "49a2zfBxuugeCuzCyrRogb2Gp7Z9LHAUC21qddqkUWS319T5SvSym5hVXKkcoNT9bxDjjeRjDfvvL2Axn6wwNHbA",
  "key25": "3vbisLzQSnRLFY7isMqwaPktnyGkK5n1m3dzkFCKBY3QwkP8YYMVLFTURqqdfhdrbAmArgNMvEquhJTLTzP8fEHg",
  "key26": "YvmE48ua3JrQgV7oVhi4vBkkTQadJAzwMM5rD5XvAu3cSXQhJAivHbaF6JedASJYRcvbNPpT7Ap9vynZmoAuNji",
  "key27": "65KP6VhZYzGsmZr3JRJk2qY5avqneNMQTSqQVnbyZx9XeRM4sCg5Y6TdsFsa4J8jCCB2fLHPm7RwyfmWcU6VoL8q",
  "key28": "v6QueHfKMwEJ5wQwMEagTiLSVnb1FTpK1ignNgV8LLC9rww8MChxR5ybUgHyVtwPcFRLjTVp4TfUohqwCus4ZKw",
  "key29": "3ir9xZRnNhD5Q61pBsAfcGJdzGrC6eVp9WG6SARTSRPg2TQBLbnndV2MyPWLs2F5EnD4ZjZfJiPN6drrGLsaCU3N",
  "key30": "NGNwomje46JXM5NLrGRqCJzdJYEgSWQzkccVWnNPQJfUBKrk3nJAX6wc3xnDEajc896N6BUhqJhojJhms4NK3xQ",
  "key31": "66eTChxs3kcwDYCuLMDCHGvFYVjy4SL4tvgao8vCYySexnmwt6qwMF4WRJAPanzehi7GNvAai7Nn7z8YnpeKoZj7",
  "key32": "3uz6Lfjnu7rJCVAB97ZveRg6zhWU9JgcF9quEGGXgQTfiBhjC4ucQp3jmEtSPxntW2Jh9YEmuHUvbjZvxc6VmXds",
  "key33": "3UQJ5oN64T4ZEHZGEnCZFYxqHxUwFyXXy5ZKBvWt9L3DqDSwe9Pk2VAC2nFAsorpmxiKAYYwpg673AqsiRDREUf4",
  "key34": "5B8fdAw22z6quHh7PSNoUZHJERimSWJBiSmikwCGbPf7jR3gZY4Wf7rm889dxsXGeVnJopkrvR6yJKeUDabEKkL5",
  "key35": "3XXCKGf8STVEm9qGv7UFUm3EBkUE8ymxU6CFkomvFsSkRfwJfobK9KddjSjipPYo3b2ihxipEfyLETS7EQFod8rd",
  "key36": "49GRHCjhoRyAsVY4vaLd5mybqWPMBPV97cExtmWWEgYjpvwydojfPZkBdpETnidDAjN1FV88FeGZUBcm8L3ncBso",
  "key37": "3gGVSYH5tmLzDEEEQwGkqZAtr8WPgM9zfv2TZJLLWNNuz9xzdzZYTDy7uK79Yft5Ad7kCwRhnaEW3RBVYjgTSAcU",
  "key38": "41fVG4K1ZMbuTq5rXntMXxZqmjUGfVmzgbHBsyL5ct1tJikb39NmNoUPBcXTzSeQDS2j67kg56DxZm51Qzoc8s7c",
  "key39": "3FFrNp6WVriF3Qrw9RbVtTXRrMAktge6azgDTHGfo2spCDrWSE1CU7xteoPE2uA32Zu5f9THDjHg456RJ9mWqwQR",
  "key40": "2pdBggn1pvSc6Hy2in9yeJubWTYnjjGu6StYuquntb7RGdFNHX86wn6NfkFA5hKrNfbvJ4mBHS32bZEGKSQpUYg2",
  "key41": "1DjnREKp7s9n7WYiu4gtFRKfnJVg9AUJ6bh6wSxptt6pHc7pYEPyLwCw31iW6BvDM5T5iwdMBKgegNkxkBweZ6s",
  "key42": "Pw83HQtDorrmN7jZKkSez6mTwwpayw4u8UdxhvFrg1DMFqTdKKrifiR3vsCyokdNxamc3bM8EwZjGsL7jwrdCvm",
  "key43": "5gPcJPmHKF9PkLEU2fx85QrQC5H3sYn3iryvCD6uR3Sb4oW7qaw5wraqtthsnkDSFvrEx1gkmQ1163vHJfnFicFN",
  "key44": "2VmEWUcENXawAryRRpGPxPE4sLoDTezopbcqG7nvurhAKYJsJxBFrxXRrxgWxkHej7wqqkJfMbTfu9QnYTsksXn5"
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
