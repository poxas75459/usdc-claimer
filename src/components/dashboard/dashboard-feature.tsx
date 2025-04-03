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
    "2RyAm64b9HZpYsjGNPitT6KFEBxFkAUWp8ViYjmxXQXivM5Wc6b6Ngx21szbdDDZ2GGcueatJxitNGWtypX6HqiP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zDjYMuFKj325uJ1iUyhKUVDasvuNt3n5zCdzkCvrn53Gbmda21p9hsPySGZpq2K3716agq91FufbhiLhLj5wVVx",
  "key1": "3ZKDQd2MXYk5AKUF3aLmZHGdkcDCwZHRNXnDi1Xv8Xge3eq12u6xRYHcFjt1BJcHoMu211CYr9XDv2e2h5vfNPbJ",
  "key2": "2zLRdRMhtqXW521L3fnoc5yD4NPtU5uFL19oBJPUmZXJ8rSQSUVdcVX71WLtYewAV3WoP9FubFBaJYwEY3xKD88Z",
  "key3": "C7DUxW7rXLfweUZkHxx75MEDLpzzSxChtXh7xAAPGDEogHtQsCiv6o9Mh6mg9YTcfD61xwNCxjVFRvZwemnB4Yz",
  "key4": "2Jeb4zoXvribufonyiReH8FQGCCwJqV2hDoFPhPEye5Th1PuWYxWb4u9KN3mWaEwBRff5cDNG4kRKnsWxAJjF6qJ",
  "key5": "oZVwPfqdjSpBNCQoaz6pPoHTY4kksxMeRey7FvwEhZVxMuS4UYszuVARX71jvE7j3KQPjA7poVA2Mfbctvekwu6",
  "key6": "5RNoGp6xhRpzSXAsixx8tN7VD7jcbq31x9zpnJ14ovK5ey2xh3G9eiibo38n2WsNir4koQLgx23E5SvJSicG9n4g",
  "key7": "enZERBhChgJaH8Dif8Nn9aZY7RBUg2rwuUHkFNVHSiZ7gd8RvRBaLRxAPjLbBG34LaapYAYuCFe7GURijuaH1bQ",
  "key8": "2QGizwei1dnAzDWeKvMrmHpbUvH1XXnAaEKZPqPTVxv9pPTwbXHUP5ctiSZuLVkJqw8y6sEyyx7snDvxEHUg14BV",
  "key9": "3V1o2x3nLSCdfFUNeFSUcEmkRYTZTAJnWL1wy8GgCeXmdpzxkNpJPLDmnMFdpv5AxDttgnM4M9hKD6gq61CcsvNp",
  "key10": "5xe52ePBEQ8VmMVUMAVLzWP4rBt9sV2ZsCUnHf75tgtJqzkM9pPDeDcoUWXNNKEcd67BhKFeBNdnYiUUfEwfUE1s",
  "key11": "21mBwZSWCJXD26wfD5zjep9HrTrWDJM1YZTyqH5Ag53f7DYw5wt1xwep64aUecWfwu8t2yLgK1e7Ge5GiJ9Hcatb",
  "key12": "41L9Wb1D3ZNGrQwuXuR6D6gcqaDaU6HLSDCdwdek8HDGcu4GKqju8MtxjEtS81wRwQgJECyCXnpPqrCjjqbHkz7a",
  "key13": "2ZBbyJmpNnmFkX6qCHRrycevGCxYeKRec9GjzNVPdCCfRpYxz5D9CKqS3SbDCJjY5MyBJ4V1r8jrBkWxwKqXpFRo",
  "key14": "4Pzuj1qKDbtRpFpHND5yXWdZPFYmvibTVG4yTWNWX5jEbzaD4GnEzZL1oANFbDB1SJSX1MqZtx5A1ZuSefq9Z5oM",
  "key15": "52GPqLcFJAr9C3c4AD1X7UEX6fLqxLKgP6z9fr4KQ38RGftF3TryNVavjjhFRva8eKq2sd13Jjer5RKkkvFcPk51",
  "key16": "5vgBGjcHxnDcG7fgwKEFNshPASUkqkA7FAgi1TjjpnBk6gGBX4oMGbs8MpGANj8VWciAJyQhF1NS6itqB1EeJwiM",
  "key17": "3kf5GKVEZi6uxTcDmaX2ayGozGLKarnSqfJuMA5ezkt13W2hnRXYEp33MZSMdrLrPkJzdA8S2DBVBGzLQ3WGUKWC",
  "key18": "5EZHGe4tgGHsnsoYUULj5VtZHGbBT7AF35gQyLm4Ltt9tqnJZXyCsCDM8xsKcS1zxhptcpAxQVWVqZbQukRZYBBs",
  "key19": "4ueUHmizoRXY3b4B5i9eV6uaT4wDEF4J33TT99BbtiuVfmg1fRj4ghsPCSGdFQEUBRu8sU55NwtQHwHUtEevVY56",
  "key20": "atduamAL4NXNJSTPwhkn6nfs3Ud3bhMWoyoib7azWc8GFBXtp7cRQXdXaQMJ9FPgNBGujocGXGGAfywBmvwCNCd",
  "key21": "5HkKDYYqHAiomkZnABJ1iDr6qzwrC2aibuvwsyTfKXTE7ghwVTRKDMwjqK15WEfiF3gzrJ2KaJAwQX7mAtC1813j",
  "key22": "ESzHoybsyKJbiSu2VFTySYAPQnFpHnaqZeFzh85z7MNgojEpBf8V68ichxbbipZPZUESJSFyifcbaQq9UcQgHfW",
  "key23": "5zntCbcLrfbj5o1FLfq2JvKFUaSvEa3SVzviYsFGGN9ZXTq1BRHG5WfyTYLEwq7zo6am9oXh9z5JH8NCZJYPPjR8",
  "key24": "53hR4yd2qhHsWrrmAk4mSLRdveASURmy1n7qTJH59ShJgFCjwykFNgY7w5AjhbfrmnHd8XNimRt2ZVdnZnWWLxNJ",
  "key25": "3Ed6g3nriKSELWSTNi3dXtfwzuH3gE4WmEDFDgFLpAeF6fArJz5DPgNXpZihQPFVcFQmyTeroohkqLoEJA2QePBi"
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
