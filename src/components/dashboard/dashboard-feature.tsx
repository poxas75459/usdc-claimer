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
    "5Nvm2KaJRraJYACAqGwwc8Y1WzuXQHJxzZT6w9ewuD5taYE32jxws5kvUR4236nj8djXb7usdGhPnfxRErRNmUnu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iQQG6q7tkgUBE2GftfHfEp3y68cCb26NFz9btDpXZiq8kGK9RJNuTRhhgmqGtNKCJnSzdAkj9eoVRiMvphufvir",
  "key1": "3BKd89KW9yKHsvQQC8NyJpAgvfF871YzZn3ZPP9waE35FykrXuBZDDch2jCtLooceYh7Yxsuz4Y2hz7QL5JGRCaE",
  "key2": "HGmhkAxy1LwF8dtCpyba7WfkDZD7jBrxVWJ3YjcLzeuNPCoSgpYAUsBE8Mt6nR7a2JbFzfaMo1bR74nacQiBBXx",
  "key3": "66qtg6LNZPVrQZNUqLorQb9Rq96obVG1wQPGCZ4tKwBYVmSuhwBU4dC7NVQUrEsuVdE47zYEjEwnWP51as3Wr6Ks",
  "key4": "4SX747ftzMnfarFU5jefmjGXfoL7y6qoVD7uyWxpQMNaCte7FydznCMZF54yf6n7pZvNkNvSBcsfFsGPG5LzwBjE",
  "key5": "3H5CD3j3GkKLkRmWXqQdjcD8oMnjoUvFPfvkefsRdEknnA49NZ2KoU6MFwxZRwuDRoAeTxwM5NEMwVqA9bKzJ5Ur",
  "key6": "5kPNcqyPJUYZWX2sBjhR7xP6Knq3vVNUdRrYt2LSyQuXrPJZnnAwXBsX1cmD7WxKUZpm9wbFMbnB66MHv9iWUjQJ",
  "key7": "roG5p6tNMrJxUCQStEgkTBjxZpYFUmkv4aMgHiGp5cPHBzPa2cbN1tRwTSmwXfHXRBB5vu6YgRLBaBwUPPDxNvq",
  "key8": "DNrjgLaPSCZKa1SvL5EVt9383dCCP7rsEFg9y43DMbsJLhup6hFhxybq2cKL71qgRDZmrg7zwccDj97dk56pWor",
  "key9": "3sFTTg9u2XpS82Px27kb5azY6F5kFQf1CdsuBxEdj6yZyEKybVEQTrpuwv21Yb3pceFH4xX84UUme5ZCmtDG8UwB",
  "key10": "zM2v7fZ5wywqykrcLCm7pcpiZBkuHkSemh2zFFUE81KL7qhu3eP4LBkAbetnbqo8ThjoV1qw52F69NqTimzwYZf",
  "key11": "4zESGUYWxkLy8Zk8PCbZZ7qM7XQbjCbaCCejjQDrfzU3MDqrzpdQun9eEwBUBTEBmPhXjjP7SA1bQNnseotx7t5c",
  "key12": "43tyE9vBqiQgUwSUAzXC8WLhVG7Eo1dRbLe5swvYfq3KadQdS1BrvseuACzCtiKam4CR3uf91i8znjMTSaedZmCP",
  "key13": "9qfJy2Q2i3ATTCyeweLZxxqRqsCVKkFvzMGn7FvUfYYAA1gMrhdK4aVHrVpbzrxpSb7R9TqvDSCCjhRqNMuUYE3",
  "key14": "5o7eKwyGHBNozqFE7rXEfqwy3YeyGrnHErqRqTNBi6Sr3r2C4y9FbX5HhNgeoY3Ts6nTwe1PMGm3uRoGEeGmKk5a",
  "key15": "3vFiCcUW6EVJZcQq4ZAat91zkkqvy7qgN6aPuM7WRrNEJyb4qrHVcfdiPaTTHgiYP5UaUUGT56ug2kHf8m4pSpPu",
  "key16": "5TSaxm8YRF7yXtruWWgHQPhz8j4WaM7PZjH29E5xFMsa79c2fqeRD63VpJE4tmZctPU7ieEc7et7gC1BGXGryqyh",
  "key17": "5wxuRimdHgEiztXkoYwwmDXvRmUYf7prDjtcLXpfbjWffox1qfqySqDS4BAU9VUkFtWEwSAZtCoTDvYrPLHK4kbL",
  "key18": "rrEx6ScezQ9x8BTqtmfz6A4jTv3PcDna47D6p78oBVcJXeEYCo6ZBgDku8V9VzChcDqKDxsje3tWs5hiXpQi3zp",
  "key19": "5Kx7tQbBPw29YEm2MW44vHfMCEJBt1znJXbqj1RHcq49uqi33UKy9XjkLDRh1fp6ja8dA81nNz9f9wGia93c6eTm",
  "key20": "45XkV44havJcbCKU3y5JTPvT5sx3R5FeFiytdTNsFNTeFZ3rqM1dNgqT2ww1sDX2X3gRJ4osirdN9zGa1mDCaQHt",
  "key21": "EN1spni2shhDj3H1tnuZwDpMmyN3ayG1FR9RswbNBmnNpeXTwtGxszM5iskvQYu2vAbfWeXX38mkpSiBLYcS3bM",
  "key22": "3U9WkEoXS94poWMmY9EmwiZEzQVEJ1fAuAW3dutWZTne5FzdGSu4WLXuqFbAHRo8sUR2Uojg2rJENUqpiEWxMfTJ",
  "key23": "4nSqD2GifdXuhmcT8QE2EgswvmJGEZ5Tx5dirrRRUnjNjgHtpyLmSvUZbvNmn7jovBZmWf7gahkdUL6AsTLkJbJU",
  "key24": "39PPT1Vy6q2gYVJcdgY2nfgdq6DXKhNHJPCkQSByFMYMRHk7A4LNsZfuks3gjibm8MBfqnAs5dWhLBikn5Xcdrh2",
  "key25": "eh55bX7zaKMCgHkHUpvo48TPcWnCL3WnTTD4jcmzXbqLH9AHrvfFCrfMsL3uLsWmsHJTX3LKrc88kj9dGvVdsce",
  "key26": "4ge8y8vjBRGpNRdG2VC6EF29V6ussHEwxZEEV6Daet9gif3gNTMuT2Vq794cE1uPCoegb5s933zJhtVZ6VSwhiJ2",
  "key27": "2wEuxDhga1xQSU2NrT2VBYrt6vyTfiK7YevijnMAvFfqfz4KxcGgWETAccpUBBKvkfdbiAiwmgbc65tLYXiHVCvA",
  "key28": "BQUBsgGi1REPNrZF9nGHAhDw9dTGGD2pRYQ1boyyn3Vk6QENcQFnTzGyMbb9gzTHaPpV8KfwWcfWyUcwPdsWbK9",
  "key29": "4PBCE2ZuZCZNFKyUzkGW3Q45EG1HDCbJeA1z14uvkjgTDSiuKEr1AqPrhKBK17NTSEza3zyH4EGrRT2uiZkjxBxU"
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
