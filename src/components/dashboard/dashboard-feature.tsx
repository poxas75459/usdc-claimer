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
    "53fnVjAyvTcJ59Fih2mM7YJKA6YKhCyCeEZvWGUh6n1ctpU9CLhcmL5RGDmUsd9uKYTGS3szTt1yttBen1vyCMLP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Eo3KQttGcMUCqWtSS1fy9cRo4f8UQ9pLmoDn2EpjSgQpsuEifuC64KAuVEfSuGUqTYxNPxEF6jjpCmuwuUZn3Q6",
  "key1": "3YrfPGQFwetac138JfFttotBaZFrEScAnpTY6kB41WKMLuF7iE428uSZ2SZaxqtPhTFVcnUPtrAQ5EJ7TgxTRMLk",
  "key2": "3UCZ4XpEGkbMeYiqZvqa7E89fwg86fARc6P3tvBubrWiu6sJY5k2Y6sZaMRRzrBDJm24qwHUciQpXQhPiw9X2xd5",
  "key3": "4gwienV9ccdEJoqgDfo3RTJUHwjaWFwKVYgBUYdSrVadz8jEYqHvNLp2fCtQS9nDNxJkmxV5r9BzD8ih2wwjJVMY",
  "key4": "2pJ1ZRwQMkrMSH2uiiUhEPZgNdUB3nNMZTjKV6rFkNnNZbFEfSkKVqV27t5qVuEWm4KriZrkQQW6iwxM1GDrvnQF",
  "key5": "45MyGaefxnwmV2ZATc3zSVZsUNUyB8QUtFMnDJr6n8N9AzcctxCGxsbwU4PkPG5FRAWrRhrL7D2fpwB7gTAJeB1W",
  "key6": "5eeCBBKEsXEuxbSAagMuKCyHHBP7fEaxYx4zs1GRtW1NgiwRcAk4f6SSA1KfDgx9s4WV9q8oN6UuJz7U8ywS5YJ9",
  "key7": "3DDTExxkNEoRJZhPRqNK3gwioChUCGVGwq85Z2JBkKrMH5xcVhHSu2jcaTdxaHzJoNzM2GbTS34Rjvo3FwhkQg2x",
  "key8": "2HVhSi9tWQ4uEdU6izJ6hFZdZFB3V3xvwHuCaiRgaxzaPz7JaHS7doDgn9KdHz22eFRNUCJQQ1W4wFHYeaEMx2Wz",
  "key9": "2XsYd2zyj5Wt76oat7wv4aSAvP2GojKBUPPxNbD17ifmnCNakEoG3c6RD6WNwT5217XpfwRXvGGXC8H9QeCEt2f5",
  "key10": "62VU5ymRJJVWyediP41vK8DSNoY8kX2AP4XRB15bwiv5qySSMqAL2JPDEooxGRbAHzSEbeiHU7GZ3S96kJVErxJ1",
  "key11": "4gMPr5e58XXo6jzDKyPWVDQEUzjVmrwnTKYQFXFp1ezhZx8CtcjSgTE5hyWgjGybevLmq57BmPCLk7Rv74r4NLZV",
  "key12": "4dnWtDBpN7Kj3YLafQA1fAyUwUpisioVDUgYRbjzJxggAYAXPZg12sENHB8KtVyYT3t1uNLobojcypg87DvG17ta",
  "key13": "6636p9RJmgyqdGhzwmYgBytZ4saK7ccAF563n937oKdRdpaZhR87JcQBrJLHQgAUfiaMqgfvtLRHQbm5nowPuqRd",
  "key14": "2se1GLpQoe191Gy2XL1tEfXiZuhd6fpX94BKppSJSbV4Y9SHv6BXNTAFAzsGWPrGE6GiBAdGc1ZzWwem4E8aNqam",
  "key15": "2p9i6nxPmDHq87jiFiDnATcGhi6NBh6WZR4K5Y5kJGoiMpkM2gEAjrdLTJjm1HbedSsBN3XkynKj67v8G4bx7seC",
  "key16": "5NFyz1n2ZkNyGWWSAJNd69L6rxgRDJvsaR4CKcMG5qdkopG7YULpzr17AvoEhpiWY6FWHrbWXDqzYbdBPCcb5xjG",
  "key17": "344QkXPBQpHVMsNgWJpiyZeP585DPsp6KmhHYuKciQHtYjVeQmebgqkpbPwhPcun2rRnFPZCzU7tqVFCJfuS9ixs",
  "key18": "2yntQdbi9LwRbsBzrH4NxL1phRSCSr2qoZCQR5c89jPEDT8xMEbhybsT2fNVLYcmrTq7E2zVkPBaSJK9RWJPhekF",
  "key19": "5B13NH4XNpvHG6zpnkDBW5SzB7WfNqFSpLyiMFLxCPib6bQ7QxVVdihYn25rWS58cTKC4X2qQekzq4SJkFRFkzdq",
  "key20": "3qqg8kXpns2synUefDtDk1cjcuPNFP6LfdyQfs6JQcee7bg5fMSwGVE9FniMSyEKFG8uRy6fonBwqyUQxNgxSVB6",
  "key21": "57VC8ENc8jPRWFeVtBwiWq4pj4oqJEPPpgC1X3KfpK8RCWBAQp3moKZoGZbALRM4WRFBrDo7qchEM1ucdXceMc8R",
  "key22": "5wMza37WYEeXbuQbghRw86isczoM7x8TsEpM7yz975xjPbMPGxquqjbxR8RBm7t3opMApjCNFpHLbdPqgp2DedYD",
  "key23": "5cXxBDGoYKhLeF5sdeJUQGGm9S86Sx2EPgDzgWK63bHkkRJiTwY1YNGrx8MeWnXmeSupYtkZBZU2eZg4xTqLBy8p",
  "key24": "5dfJ5LrsPYKepaKzfqcE8pGHXjB8KGmFe6xNyP6FEmZiBm43kSohMNM93GdPW2fZDvtx5QrBLBYjGFbZfQUVjtRd"
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
