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
    "4TwnwDyMEyVBeC21GoPyAaAPzoTnP9iehWxz9xdbAjFd4TTPdrfApJMC4sT24rvqAkivEz1ztqvdzBx3qnqcrrbK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sziFUoBj2DAaksMSdXfrvoycnSt3Rnz9hsZHuegyoCrvpVyRPnYX39htrLsLVAtp7V2gyboemkTzYBCHCVyKrgo",
  "key1": "521rVUGSB5NftUj2PskLriXb71sp2SCYURxaroNPVvBu3c81YB8BeHSSzL77zZa7TC6WmhPezVYzzE8cfhukG8vL",
  "key2": "3A5rywxKyEvQ4JMDUAJTATP7ostWayC8Np2H2VwLaV7sPrBNKXs9w7ucbrtbEhQZS751UaAXEcAigTDjLntpSGc9",
  "key3": "3oQzmDBz4vH2AphqsvDs1LxU5EE47fABo8YUUH59PGghczLjaZddFvzU4mSGmJ3Unm5CF9HN6Hs4h6oBw99g4vay",
  "key4": "3RUTRUWMSRS8etaS2SWQsGPep5jxzgVNjr2uLh1G9TfvQoT71MDemN1ZQLrZXbpz2gHq6zSZMkca2TaMPpFPRYkY",
  "key5": "5wG28Rc2LvMxhdGzDnYAvV1zmU4t2VmzrCeDACfmitHKZ5TVh1tZARrWsxdsWFmB4Z43WvTCnUoQkkHB6uvw1WDX",
  "key6": "2QMgH3pUncXsNyrmifBJDDMepLhjnF4xN3zqXRFP2gKCgcfu2oUoynFYonNLx339zk6fEnmGQ7wstvPySTkB6ynm",
  "key7": "5cwNFtZm7hrm1HsSAK5k3PKgaSEPQ6X6AY37ZDRHCLZZT5P4MZRYiHMbHauogBZ83uxMnDaKiB2aQNtRZQJGbRPW",
  "key8": "6BKfWPLVQUsL4CHXVQD5bZKv5Ukh8KD7U5mG2wjFxFLM472bXKWWGrMGSqgY6oN6qiY4WK1XPuHGY5bDDXFMD35",
  "key9": "2MebnTyTgjt37CmJehvGHbKuY2d6yYbMCzfQFFmqHSyRknEbvkSKhCijWw4honJN16PFhY7RcRzH3yx9RvDoMYTu",
  "key10": "2uhMjW8dAUxrgWAPWAHvDKGrXfAcxnMNpVWNkTpSXvFnTKeReuaMABhz4mQrmMNYzvqPgiNsyvyNjwS7sXiCjyKs",
  "key11": "67bAtz4CDwPR6bo1UY5sJQ1yCNqhqD4iNq7cH7zvgCRhZG1PA9PYP5cuwbVwqo6hHswiem2K2ddnJ5Cs8mRxHgJv",
  "key12": "5ywGG8gJw4W1pggRuCXgnaffvGAc5z6QhYCA9DK1znHcvkQgzLNjd1kpqY6sho8n2PBJokeUCJ5JFRS5L8MZmkHk",
  "key13": "5GwFZCSzq4zmDWAJi51LP8v9n4bhYLBePyfuxysVssRpA8QuAvN5uYoUt2zFZ7PDLucMn7ztoUkNF33HqQgPFbgq",
  "key14": "3jmv8JQTJzawaY11fFJVnhaeKWakzdRdfzVVmQzkFZszGrgcsXLnunucLD6eLdQKs5uPFMP1u1SnWVLQpYHMvL4J",
  "key15": "2PGsPV9gBQ693qUppy1uYsKdHVWZfDL1cT28nk72fv3KZ8c7d6oa1cFGdxUW1s6D9bTQUBdDZjJcFxhrLPC8uSeT",
  "key16": "2AzLKRGLBGCtRCDP1wrjs8fLsncM1yZ4AQnyZF38a5xAY7WGvru8dR3CTNdjYBoHPEkDE2GZzsHxkB6Q6uXWD6tX",
  "key17": "3q7AkM3YzNzMQmhw9gszG1DfZbdCxeEQwAFsKM3phmAaXMTatshqzY2AT3KcDAjGem9548VnJmHTM6LDWJjUn6hE",
  "key18": "5JJhGNXPb94xHXaYBKSDnqprosW2A7hYPB94P7PGoUc7PRk8zEF5E3NJBw3uKyHxkU4rPazFgTG6GzLQdCX3wmSd",
  "key19": "V9L3p1njtdR85pXUiGanyMRbwAGynEMm124hD6ucx6w1EKV9BCULMJvSViY61yAuWLndJvhgDeH9NHEnN72Z2x1",
  "key20": "4YW67i1iomewuK9UyCx9h8EZWkvKQtr8sFSJRGQmX5WVzXcg7Mi8jLbftwfNjyQt2XRvhbUx5HkzFDn3fpdZ6U3V",
  "key21": "4QRZCLQPg6VY1DqWQ4F2dgCc94Z7MQhihoUGgpRnr3yQAZwiDvdZFAiasZ1EvraXfRpQ8hsiwiFJq4c4kEfixppP",
  "key22": "4EGvJxZ526zH4YU8h3xtCxL22t9TZrWQZTyzTcA33dcUWubCwzcb5dcWLZUraEyvD4FhqQy2gvvSkBZY32Prezr7",
  "key23": "5HPCGZRbZdF8cMYRrc2egycC8wqwGopPoNk1bVnm6k3EwRviKsSW2k3PJrM2dTcacF3F2NKfg3CpEGP8YJxNPYgV",
  "key24": "4rVAKwqzAjtgCkuW6wxb1Uw2D8s7Fv6biTStTVKLYP2X7xfpinRRS2px5xEeBFTbBnjeSL8pEqRrmMKBWp8YH7aX",
  "key25": "2VqPqzp2Fz4A1AXsK4CF4GwmUKMoz9KPXsNewpa5P32gJiXr4NFwNiJhRKZV5PXoiNjLHMynp2fZtkFCCAUMqtjJ",
  "key26": "3dtpdUcieUYuE5PQ6nE8xSYsp3m8t5ixH7tXysMG79yx6CHzcqoLeDwdXDbUGY1TqtWsS35erVXoLJA8uCUKs1uS",
  "key27": "4si854Yv8AfeXzQPYXkQpTbm9pbpcYZELKAdK8YFPvQzzoLf99cGY6PLgVwjNp6ENfwVb6URSJMvBsewYrWviQ3h",
  "key28": "3dkHiGSiq17drkhCnctysEEuL2NwatEpzYdLtNbBLWqETfKPUN6L8Wd3p217BukApseYkiUWQAnkYMv6HydxrZRi",
  "key29": "4MyCNpuHNu7iszN1DZktwTA8N6z9158dJTYdLHD8usorub9yKc8iiozraqnHL6XiCQjJPguVcjVXCDKdnpx24fv9",
  "key30": "3hpyHSQDrrspaRHr3tdkVkrnYJHMSxpyfiX38mVSv2NuZDcnXwF16jvqcKbzXXo4iNp7nEvz2DNkTzPrW9Yv55Ut",
  "key31": "6AdRgKFxUkrNotStz5Bov2rPRw1m6CkfyoJUyADvwk1JmiANYgWgwpZ4cimPcmWuQgbHTmadYV23cYUp7XC6xSe",
  "key32": "4fG8GWrcyr26Nu4fuJXA3XwskJLUnUg2QvwwdQ1AzSM2dhVRdr5VvQe9Z4yhMwxCQRxTv1YdamgBdsYqrMppXk58"
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
