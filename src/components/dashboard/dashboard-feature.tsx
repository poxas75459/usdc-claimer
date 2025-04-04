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
    "XSdCvzbnWYYVWRD4ywxYnamikxEdSAZagytxydbV9KRkEeRvsHMVb5oLW454oxUhG7L3CZv1EtDbQvDDuzeJuMF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ABpjG5HdtXgfELg32ucKhWMG5XHCs4BWnrR6Kw8d11hrSd1G3tFZAKhVNmzkixViVSneTaPjm3BiMMD8jH8YEk9",
  "key1": "QYrMFfxkq2LJPoC5rPiHyn3f6kKsxwGBJFF4H6WCjdkNmXzxTM26mvBLhsn5D422XhVg15ckw9GDvq1vTFsHXTL",
  "key2": "wEGQtw6DrbENMckvhmDzNQWqXAfvZ9fdCxcNgiH4scamHYfVBPgciNiWMFfHBBo7JtXkGzzQPy3y6xJvscgdwwX",
  "key3": "66WtDq7uGGe96h5vxTFEvr4wCg1T9Gs3uyCMNArZos8a1eutdQGXNw75DKkURrQoMptYooVSVasAdSsyocgeGNYA",
  "key4": "4w1eavHVKzpHi8QAEovDC3JFnh3CuLFWQusjt8D6C4AUgzLMoWKrJqnbGPUmksPX7pG7pphLBCGMoB9P7txaGeni",
  "key5": "5o1UV6bAVsiLGC1dyEVbpeRJXgozrejQa7s7Qnd6y9MDFsGxvaCBd2GtZRMbe38jEDLqbqsNsAavFCDFnFEmpMJ4",
  "key6": "3ETth9UcVTpwRkpmxXdArZFXdu8wmFpKHJW9T2D9BAH4qHLNw2LvMTQd29KDrZGTBjCnLTgD5Ksg7tsVu2myv3x8",
  "key7": "5HfNYwqdkoeXfYsZVedyCZFiMHzbow4DyER73CZE8M6K7HqctxPTSQUPdrJ3CtKg8qyLKpQkM279FLXxurMeBJWx",
  "key8": "4Q7Y8xYxHSsk76XyaWgGHCuFUrfrBsabn1ys6ftVVqksSVLB4C3opfBsQe9ggzxCnk9HfRHz6aFFX31eUTmCHWoE",
  "key9": "8CxGjtvPi3fpT5J1N6djK1YyiZDzXBXnsYEdZCzndpxUR6TtHJLFvUSCteFZRzneeEuyEW7AJUscmZuyxh7gjLF",
  "key10": "64WGxqoUT8v5yWfAkRqPEgkG8dXbD64Dqrsz9XFN3MjoGiKNiPN23RDXEA8Wp8Cst8BgVUNoPWPu6Bu3kiqsNw9j",
  "key11": "5XDXdUY6nKHQQsjrgmn1owMBmHbmWHMUU6Qac3R4jEyePoGSLGCuSy74aqVk13ThhPZvM8vSW9QvNKhAqg6mQLLs",
  "key12": "2bjAtBb864AmMqFfBzsHtvtR2Tpbthj9wxff96koLENpc6r7Rr8QjCLoKuB4g6JkZNvhmQeBYVd1PyfMYZc4sjRU",
  "key13": "46tdXZ39V9QriQ2YZbiqWeG65MdFZZFCYV93eJpjZBAj2hYTRnySgBHy4U7xbqwgDWQtxLX84FydFqdoqkngp3bN",
  "key14": "65i5p27TyroikTufoRQBQFKVoNY17xE9X7vbfevwiM3gi3S8T6arWmnFQCJAR7DHHLDLZnEUuyzsmAQkhEFZ8Xwf",
  "key15": "5Mrt7ufDzD7GujdvTpmL9ahxtRBS5gNbrUs8zGHYeXvRG4LiR5YA6Po7DyUuV4z8QU2oJiTjcxwbjMJLnq6hEoNg",
  "key16": "3R3mCyRVkEcYdLrpPbXfq1DyLpMrEAT8WrHJ2c7UBGpCRra72hjvvWBtPP4MKLjB28hvfyVjuvhshb9qoxzNBLwm",
  "key17": "5vFUhdngz22UfRwjV5HZrCTtehecuDoPAamkHjYMkW3WBZdgmhiqcKVUXyRL7BJga9UmBTckXPqEqnqK7AEjyjmx",
  "key18": "3TcN21ukwgA6p1tXNeDNdZPi9eEAnisgSKju43tVNgi6NKhSm8jvuRi4YMg5Ft8xpLsa2ogJh5MZw4sBATzmHNnT",
  "key19": "Pk7Ww4Ebmi3bM2ryThf5f7toyXbHbh18E17UhMRavGW1aMdLtREd23Aj38wWQAsdX6Co27yExqskXrshHVzGeuw",
  "key20": "4LTeSAVvRZeNNGpiNrPpUZFvbWHgQm5MjHz4yApyphFsqTwokRq5acuRCDAmHcrpA7rKC6ZcweDTzGj3PRwv9QmP",
  "key21": "3mTN2nDWymbZspfkt5WHtR7bcHioB7MnVXEHrV3RfSab9tsZTMoKN71kCM9PrAi2nX32D4X1DGiRvrWG2hasY5d2",
  "key22": "fEwYcmwyRQ7PYvh9dFhWosvJ5rQuVFxBfutZPNqGEp3KZXXvKrQ9gt3kVJWEjWfk1ktMnPLWU4dSsVVTXXfrwtF",
  "key23": "rKQFc14wnVMfPRJs88hKcvw1zWoon1cJ5NQXpK7bVkcWmTUQR7oJCKakq6Smx84txwFuKBazx4oAKrntzmtRXSq",
  "key24": "4EaoxUPwTKH36VRxH2EwRH1ftLFyj2SGF1e1Cevhnt1MvP3P4h7j5qMU2tDXF59MkAC5aesheACFvKRvpuYYppcv",
  "key25": "5K4iUJkSVJkZYcpGszbs9n5rvvLdGpzGJigNustBoHgq95PwAo9FmUU4ExEuMpyEW3cEeLA7MsqeXjFmnq3oFoPF",
  "key26": "3LsB7sY6EWK8a43BvdrWKpMr8MfFWJh2xsbw7VEdNrJae5bkPENiEVnj3QVkgWpmnrMsLW1wtW2T4SWF8kBRVeNG"
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
