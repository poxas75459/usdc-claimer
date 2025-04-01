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
    "VvLSm3qvTQoDJfMg5wdEUygbnEfVweWmwkn2FitLNzPbNsb7NtHeST6JJhXyZ9C1T5AKn4dRxs8CwqXb6DCVYFv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oPC4gE172dnYtLDWhPxMRiWHKMqRLdWrtbvDGFFst7V5F8E6JCYasMFGW1m8N9Mz4VQCstxs7EaUCcFwNkGiMcn",
  "key1": "5a8s9wegzqJa3G6gxFyHGnQLzEAYtXQPhBHHBSvP61vKVW1i2ShuUMJ7JLHePBjG8Lmd48YxyyAZs86ooJWzib5s",
  "key2": "4TpTiTgt9wXeY6zNybocmtSjZGfEXo4cCAFp9y2qUFL5XraMk3gWPDb3LwKdzqqsgXMiJidmPYKSbXNmG7efqekE",
  "key3": "2HRGAjUonjyrbAf8WF3Xv5zGPbUJ43mi63pTSFNrzg5JSMWTviuzrSwyMWEuru1qqTTCHLkkTdm7T2LrcvjEPud",
  "key4": "62cL2pmHpbUGU6XM264EShCEAYqvthp7T7FjL27FoYFDEZcpftkND3DJxxE5Z3AJwhL9FAoMtZwuNSWCRQGX4eR3",
  "key5": "3FkjP9aNvtTeamw47iVqnZx9BPzzhngRRGBfQX6VaYyH8coqqXhG8TsYACvZNKPACwBtzv8HeksJ3D3X1FU8XJz4",
  "key6": "dTxgjfU4HjyhEtm4bFVz2sGoKW8kcCGkRrf2ibTNJMUw8fwxRFy5LzAKmeKYHpr6TAFzQCvENtd9Lu7e6HwJp6K",
  "key7": "SLst1rhRpvkR1mRNNEAeMWSE9zZiU812NgHhdd9Co6wc8N6rTa9uG69iUsrntLGxNAah2s95yhYX4ZkfVpRsKnk",
  "key8": "2TyhXqrAzDGY8hRWPensCdHvscKU9UcVCLC5Ud5FBjdiSEsFxL5JcDR6oVxixKPLbJf3YHYNBPg5JcFx5G8j25eY",
  "key9": "4gX1UAAMWWhywVvDRTR2piTejTooGQsT3pcSxsM8EDdDASGXa3b63ugesHFvP1ZcznJZBx6s3RaBBPTozq9vu161",
  "key10": "YahroLswXcRmU68FJTsqzvqP3thGGQnJMxbynffocXT4M2uZGSDsxVJnXqitg3UF3ABrxAdTQf5XqW2Xq8n3XrS",
  "key11": "2pxfgZPEBwHJqpTmAqCmU44SbztgGAFZaeCm5YYUsPed2uNgr8x7Dvvr6mmtKNdvhpFjskLWj3f75Qg9s8GGTRjA",
  "key12": "5TimewU1uhFLSCRWocf9BbYMzgAKVkj8Pnm5VRZqvr8vXYzJU87WKTZFYJh6nqB4kWXGGvczqsHMvN23HjG8MbJz",
  "key13": "3wUMFwWYPsZY7zL5JpdvW7g8DAnpyss7dNzWNPwy35VaRrd745G21RtqEbaeVqBXqri5GUoQqHvrQuNURc45xxsW",
  "key14": "cmznL1pJZ9trb1dKVF6z2fCau2AtTx44GhcP5v2KKArWfzSnBJYBaWxFFCWbBdyzbyB5erv4VFDanpZX9poQ13w",
  "key15": "4kdur1Kr2esKrs43XJx7LmEg3qA4M4armasfStb8egKF7JdyBjvt3c8YWxYXE3hS2nREwbFHCUyiGUY1m1d5KG5n",
  "key16": "3NYS42LQyRPZUY3X5fmd1TG9qvpHczcau6NpeY1merMCiDPtmukatLv4q9QzstGs1H8UqKgDmfmUfiNkGHByygpF",
  "key17": "3cBWHmfATK7iBSiFbn5esWH4Nsjs9ViHmtvhspBWgdQ3sCn3EpTSMouQYbzbHWee5XYvK5QjevhoxSN6ZZeAiBrA",
  "key18": "38aLEgVDcZiwxG66wDexNGaHmUJPRj1KHB6zTgT4f8n5uYCt47jWgywyJ3CAgbuvC4wLiaFmNsJRuRQp8ohrvtNx",
  "key19": "2KLVBGDDzQTuVjU9e4n6RBBqyeY12q2jPVANMDX8MXjLswxHuGegrEt16BUTxZ9eYpkY2vJmkVoKvZENXWU47EWc",
  "key20": "4UJ9R64WU1g2FHshVAR6XFRbKCdjachWYpSQRCy7dv7srSbAwfzRsCq9FXFduprGQJhodtW39t6P3LkSKP85ddJE",
  "key21": "4r5gF8s25oXAnboZU3nga28kKMUYUY8KuLPtstzwRjn19Rd3vT62CgSuxR4CTfSrnBUWqvPjajZBy6YhJgq1yRrD",
  "key22": "6qwW3EyaWPgBqszmuSRDwSWD66uMW8dj6BzMw2kAc5wUGs2VVrJK11Xp5Xy7HYNEZijN94Xc7bTjfFi4xCUtXrE",
  "key23": "53seTzGtNgZowUKauFXvX5ePrY2bBAtZEDXUKMacxQDEPKAiwA7rYmTGMYNpsc7LVWXmXDjsuJCfdcFm6kirPabD",
  "key24": "4KEXgNR7fvKzL2V2o1EvgxzmKatHJs631F6MGifv7L2K3YsjzjsYVU2r6hAKi4oPgdm5CsYiyXtGS8BqzHdWJdpH",
  "key25": "4gKUH1ndaduUGHFFixm6P7zdXAC1Fpevud46SQ894wynUtSpiVwCmBXgefQHRuFHpBydwp8KXWBAnGs7XooyRq1U",
  "key26": "3VcWx2XjAKLA9QG92CeJT7CV4sKdQx41vSddaqWui6RSfEh6AA3p9bUNpkMQzcv2nvhnGu6zBPJWgt3Uh7QLwtGr",
  "key27": "5J5j2xJHST8rEqBD5iKWLiwJjEKfoDWFt6r6KtnEb9FPnr7K8gx91PcuTRnusbPdmoY4VKAMnswi124JLvpUouzm",
  "key28": "fzPyYPzSirHPUGFuUtjgZNC7Ym5uXiGrj9aLHFZNpmnN6iWHck8dbjphJ74F3FghttEvZrH3ZVRBz1w2bYfZRvt",
  "key29": "4vH721iz46NsvEy6oKpB6W2ZcaWGBR1Vqxx6uccSFAKFWt6rvdGFYd4ojbUxu5ZvyruJ5VDRq7nHAfKXVhwQPHc8",
  "key30": "2q3Qcf45GmNB9pwz6JXHba6c3zMuiRdFR3nvLGgWTRVZp9CSepPBV2xWqaWyyqRrveLpx8EK3ptxZRVkDdRqcpzG",
  "key31": "P93Ud5w8koDMc9SMCB15pRzUSSZ93JC38uiBCax41EMsWRJRbtXDoQ8ngvToq3yX9jdS89bB47psfwLrK5qPEEt"
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
