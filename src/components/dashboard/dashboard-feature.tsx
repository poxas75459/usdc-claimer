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
    "3CgcCtvdT4tQRkqKHvhJhpcnkAvAYLttZjJUQ2WWJmjxsDxy7AwkTxAemcVg6LdR7dsUkBVc8AFM8dC989S6T3QT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29LzCeeq56PXr8gAauAUpD8XsHWMgfsYbjt1wQ885FJX1KenrF718PNgb7WrZjRQab3RmVgcsa6LWf2BsKhPxnkp",
  "key1": "23VF9BG8RsWvRHjNgqgwoPERcuj5pxc4hmZEAqiWg6EpbHGDscRT1RbaMXGGnAuGfC2c37jqghefRfhmrC7ttNhz",
  "key2": "4yoYWaNrJErdHLAswv4FiYjVAXzF6tnPT3vq83vUHv1p8Tq2wSHUXzvYAzwotHmiaBkYuUoHD6iFCW7X1joqujVZ",
  "key3": "2DFfp18wFBRwRjPQ666gopbQqSG5TvUtqLv1RR5sZaGmS1TW71KMhJT8jXw7GRHLMtTzVaHk3Ss23Xwn6VJMLMTJ",
  "key4": "5bNjtVwZeswHbssePY5ifCnAG8aBcSpcRjMjU6svKx3wcsKXfwPxBoroTx7mFMxBax8TeAssbNPBnSJAj9hHLN3K",
  "key5": "4bw9HY4GE76crDudrnn9Eiq8bikfseyuECQUJCKTrqMw2qJeh5G3dW8eL3uxppQxxogHhAherSRfaQaMA2WkDXmJ",
  "key6": "5jbxjKFQarrwYC7kKthkGTp2Pc4DZq7ydRvDEcJshK2vrP5yLKjDhGrXjA1Kkkvj4bbum35JjYx7GQfZMVJu8Y3g",
  "key7": "3t72Dmc9hquNSv9s7AwwDLrN5qW2TRNsahrSjG8aRTNHiwnqxGjq6WZEdpWSKnJeBJK8n4grvXdyzbeJpEhrSGjk",
  "key8": "2Y8mGqyJpNgHZVpnUC99pLq23hZpCERqB5ENKLpCc8M31rZMHWPR3xx7kz748FKt9Xk9aynFTzkKTxrv3UuVCLVm",
  "key9": "5skx1cksdP8dSvdWDkA2jdnoDvLPhPHn6VoHiLQAtXP6Yfz7EUCrnHiDprnBuWwtny2dYEN63Sg7MMdxWzKJYZua",
  "key10": "4Pqx6xuyN3cZh4pVPohphYNj3qcLavCKrpVMuAJ5XrkBeXSmZcxXh5geKB2kcv8dSDNx5AWTDLjR6kTXv266wocX",
  "key11": "3DnAi9Yk4V71j5Sc353YPe94UYTLrot5HBqNt6tekcshaiiABniTVezT8JKiY8VuEvYepV7UNX85q5PtTVfZfFWp",
  "key12": "5SDwJPqxSA7GjA7sftmP38G5DYKtLUnZmH81sT6X3ZWGbZDtjmw5GgA4gVskX8ergmVWjWDfvndokdm1Tt19SUUq",
  "key13": "5VMANPGgMLmLwWqAv1iBdMnuoNZbPHnPAq9xGTJS5V4g9B3eUWLsTWup4SsETwd4kWKYYHpNe6n4qJqTk4N7KFS8",
  "key14": "3oRB9L87V5HD3cqHLm36ap4bqo8M2Jke5D6dHTDZfTSyBwbmPsgWBuwU6KegisLirLUnhmBJruVfyoRFLeozLcig",
  "key15": "5D3PKogxWDmGvvcyCEykR4u38Hgj2G6KSvQM8AxbruqHWNhiHN85ea3mEP2gxJp9bNNBJ2E4a9Wf48MR3xbbus6t",
  "key16": "5JgbekWaoqycKgC9gu6ALQZAiqjo5S4Z22xJPGZ12CVRiFYPp2LijE5TEpni7ESoSTcmRfA7ohRZnq7QiVA9zVoR",
  "key17": "4nScpxuZ18AwmW7Q8hUbCZFEZDh6WQKZ53VnxYvygGawDj9vVQWooSkYTsTtNM9iDLQXw7qpwtWbszopApKhdXWR",
  "key18": "3omBzHMjYsnwhTEom2r4XzGrgx8zzfd9u67NjkcrCr87VWsK1EBEWKh4h4MSS2rSqkrjWPATMNdcL4SAmLsVcLKW",
  "key19": "3454wSwGUP5PMbvdvAhE4oGgCMACWXNHrJvrkPcDikx1yqxyueuMim4YiEhD7XEmh1QnPWv9fmnWZkhj5PGCLakJ",
  "key20": "XvVxjJznhruj2edswhah5j2bJzEU6g2TkmyqTDhmpTNdMtzHezfDG7EURayUNx3mhvdevG15qnehjKsorLUJLNG",
  "key21": "2aeXK8f9zoSfAtDRB29Kn55RBKFFyfQ4o78tnUyWZ7qa5iW65SDn4AUyK9t6whNH49GdHQ9WXcxsFg4xyQMntx4y",
  "key22": "3Qwygqza9rNmKRpQjZmRand9J7fn2bQRKUqfVWSVQajoeLbvTjT6RSTnzQ7G9Pa6zz4GtApMzezuezQbopY6vJrK",
  "key23": "BuQJL4v9yVd35eU5u1j487ywrkxMuJtS1rXF2LxK9jh4b1GKhnPEfp11ZXBE7BSdhtTD7a2d4Ghqz37EcLaJdLg",
  "key24": "5iFa6jLqzHUCYV9z4QUeozFjEWnamu4GTpZi1bV69eVm5ooAt9pSW6cWeCaPpidqE8emNGciXYgkvacsJdnmys4g"
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
