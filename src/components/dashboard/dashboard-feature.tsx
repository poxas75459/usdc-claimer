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
    "YGXgN3ADnSa55F7YsDwaimmmSAXg3VjTMK4NKpXLQuzkHQPwx3xj34vNQAKhekqvYTYipeVSnB2Xoa8558GHEnB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26MvLfu8CmoVVVJmNp6ZcNzjzHayE5HsA7YfcxeQuTBwUZAzKzXusHy44qLuA6j3858oDcriZZ2dH1Du2irJehRR",
  "key1": "2NWyMbn4iugtdwgC9HDvxCQ739dWCJRrUBSdaTVwMHAG11VxSTveMeywwA8TJEDhZrFK5YEKcBN19qNubrRV8Jab",
  "key2": "3cXFCAisad4ZAP3t99WsHrXncppZnCpiU5gEe8XZdHEc1BvyjUbLxWmGtcbDvwizTeEe4DfUDvWnRZmm9JmT9F7x",
  "key3": "5tYKtxn2GSoAqLBhoU5YN7T4DD6EDKDzbPFUp9Svm8yonLkSjPJeGkcep6D7cDQFDkAswErxQizSWATFUJKreLoV",
  "key4": "WsEjaeQsCgvAZ2tQ9MZRw1Q8kVLAAFkpKzM43UmBmESRwP5BGiM1nnhmgNieuhnY1Ng4ywmUb22Eu7E8PXJAyAF",
  "key5": "4229bjMiQ6fm6EmBUf4gigHQmsCmxFVJiaJj9zghmKm3PcYZEDFwsu1B1Xjeoxn7bxvt7kmNGXsgQZXi4XJgTgRy",
  "key6": "4j65fHZtEsNMXjCmseP5a1DkTwVVn5WWFcMGg3WPy5wQ9XYdHK6oUVYS3bR6fbKN5UN24NvAejN2VgqrjVwDuK5h",
  "key7": "5ZsY1HKmapW8DN3RGCucYBNmnWVGrFc5zadYMNVYfc2Ki9rcQwY4pwvxCtCq8JDDq4UXFBvBGvArtvpp84qLKpNU",
  "key8": "3yfxtLy3WrfV3hqeuvQVUHtCYdAaqmkvAZiaHafUAdv5MzsdwsC3eQjKE856tEpcSnRozDuyAaWNN59bufa1iA7A",
  "key9": "4mx4ZM6AxyTH67bryGdoNffZK1XFVLpCkaSLhaepPgABC1AYfhDGp7Ru4ocY39SfiTeQFu3KB76zbgtxtyXys6wo",
  "key10": "gdrF1kJSESeccvsQdbQy6wUGGwByJNP2PH2aGyvm8ZpZELdMrAEZjTgjsaXU9zeLrEtH51KnUTMMqdcHcEyTDDW",
  "key11": "4WF3SFMSnDVn7BsS2gy5fDkRsMMmshQNCEAxPUzzppVcuKKs87DuwyA1M5U7j9WhVDapjyMWC1BZ1eyANMsCKjMY",
  "key12": "57LXErPC2UJjvQjtAdT5eBTUC8ogwrYEhnB3CR2J2cQfUDdRKRDd2nPvMkfiUbMvN3wsAZ2micvg9CMtaEvPphAd",
  "key13": "2fmdLrTysiTHeaqzmx4HcpGP8fD7i3Lf5d3kY2v3o7yicrsFX94oZgDxmRwF9wnPUCETLAJMqYV5wV8hC7jefXzK",
  "key14": "JUCYqNYtnWPSeHToDJs9C34NCzZghmcWoKTV88BgKBxreyr48DQjHf932Rc5bxXxKgMQQVYcxuuLaLtixZXp2Av",
  "key15": "7Q1R5uRZJzd6BVd8qzJ8fWKnCrh1RAAGyNCmmhSdijNYF7dMUR15S74mrNXpTvg5LS17MEXFoeKr5KuqZY1hvZn",
  "key16": "36XDd3xouEyx2R8DkTqJegpCwhjZKUvp8xZAwsJDn2Fp8XMmzvJSU5mAksAWxAVfDmgG8V3kBs4xUMzBdyBHmdmk",
  "key17": "41sWXgBNbziLrxjxSc8bEHq5nZejutQHtb8hsi3PBb1pChKynzZc5e8dzrmcDdAG3hou5Nvnhh44PYyLjGg6RVGJ",
  "key18": "4bfXQVwTQSuMA8HinCptjHYuB4ypgmHXwK35JzCy2c1ZASKBFwP2yRdqJBDqBx1qTk2rAVrSDJXhsBTvBbofLXjK",
  "key19": "2WzcJH5z1RY2p2ok4wQVhCoVA3ggQ9jyae6YxTcZqYQLtYgNnFiSUTcZZPcr4e3msASjc7JjPupKSwLHj7EtY61H",
  "key20": "5n9RPmQ2dqx2GzkHzYTCLbVtv4hsMXYdGVhb4fomphGQ6zbPPTkSBH8PLgJtzKpUGR81NUVFrRf6nPgX9FXUWfVK",
  "key21": "4TeyruaEugHiwWzmRJnG29npu3CLAgXFE6oQ7QuZwKoNtPnr8YqaHU7xLXMZvyMsWJvxAizqwSJBTpRTFu7NZkzB",
  "key22": "3mqaSjeNamTZjUkiFoDyMmib6AKMJwzyg8WejzJwzYtNPuT5CCWaX1R7TWLbu6keRN5QZcEwadvUoifBSbEhUwMA",
  "key23": "UL7qRt68VRFwW9akrzpqtXEMRCXh3reYYuoLDGnnt1UwLfQynBZfgTL1XamR4N7t58spbdsqcVP8ZrgDViaW7kF",
  "key24": "2EPsZZ846k7hzFmf1vnx9cY5Y8zNkzEotSxqetC3H4LTE97zQDmXnsBzfx4NbnoYcdwrXhPxWqe65hSRrFXvBHF5",
  "key25": "2ssV2HU2FvkfUtx1wQEq8jUq1a1yqQPdZpUrBBV4aWtbzKwrA8nDv8poj97Em1EMM8w667h4pQvj9B32BG4uRFNG",
  "key26": "4LDsx4Ak6BRSrsyyhgPQKze5K2rxhK5JfyUgttRCbNHLqLHxfp7GUQuHKZqQy1zAzr4wdPPw4QwnVsJkPyw6vxnd",
  "key27": "2X1chv8BPkZPQXsaeJySYaWJZbvWaBJv1ibjYcKs1BGAcG1ZNmpG4niQ1oKL2zJXbCzFxUrAnXV6J1TPxLohrY5X"
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
