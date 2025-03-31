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
    "5eaFiSZc7QvaufuLWpN3opMJUVw9jqh1YXoHkqWtDVouEZ3VuMioAxZrmMMF88UULPVhe8UkUHJynrPqUD8ZTj7a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "618W4oFQCkrg1rhgZ6BZUnNBa6mJ6FJQMYpNFMWeabfsmHueDJMznaea7Yv7Psb89nFRnaBnyEzobDkPudFAMMZt",
  "key1": "5DDoskjrikG5jix3Fa653cdDGe4LjhST5RavReYhecmdzgLczgpjsEHBDQc4wXp6q9a9GmyXAr46bcUk2EohyKrU",
  "key2": "NhedYHV1SfbunsGBFcq1uAu6YsZiaBTrjHmZWoH3k7SajM1U1FCj6m8Vx1A99QCscsDHV6D8ex7HGHpHeQppawJ",
  "key3": "R36HfnMx9L5XLc1Cjgf5c8J26REseCLtbZ1CpwcqYPWubNVxVVFxRWVbyZHoBVaXiJsq4zo9kBZ3R2BG4GC8fFQ",
  "key4": "jJimcvvhSaHyzPAoomqYMPFq9WexyxBfuWmskHipuAGmyB3g7ffNw4wEqrEgeYfQWRFMVFqkk1Ji6MdKMywXyCn",
  "key5": "3t8VnzDzSs2ZenjLCXuYw5yfXhkBx7j2EPtfi1YS9mise1aPPDtWKFd5ytttaagpTKzUZ7khfRbp5KLwqeZe4vKs",
  "key6": "4te5fgp5Ket83y3jLdEQw1CiWpu7rnRe5A8BVufCGp7fHxxoDfZQGC6PeSsDbEDQcCCNTNNnHjULfqgu5R6D5UBC",
  "key7": "5g8SUQMYymo8kRASz7S95dBXXGGFoWWKmwTCsA8BrzBw17qZGzffJgj4xextnyRQCQYVPu35uoN2nSYqM5AUs8iq",
  "key8": "3YeRN6QVQFnYyvSCXFwL2LU9jd2fYh2bR3WLHouqjHh67VeWAgWoJaR9v5foZ6B2VhEnMwHnsqaDaxP75GTYM5o7",
  "key9": "2ux5nnmqHrfaoPXgs1hkJ28DyGwE28bo61hHV7kzWRid6YgvFuZCQGNzepbfwMbpBW7TjyLX6YQuCADaC43MGxma",
  "key10": "4cZ1vK86H3JfHKpuzkNdQWuJRrKxMQhrQKnnsGX1RWrfV8DFBKFkbgNvgSU5ccaMcfvQSgQWtKEctbmxrHPKKNPq",
  "key11": "3SscZmdbZogHqr5gJHo4Has8RgJfjjg5BTUjD2rbbY9V6FbjSyUNCM3mGyzPHY6dpKtN4b8ggmm6FSNzxYgzDkoK",
  "key12": "41ozLjpzG7Kweq4LvZMQ33uBhoLrjNavFGkr8MLMm5stRc6m4Nwry3CbKgh6YJ6ktnht5YnrqoHGBuurgHv4mwa9",
  "key13": "3mSbPstDw2AWDa9mrtHHTQkB7bgzJuohiDxbPmmWvdm9sRvG7GWHp31kDyqFBcQrN9V1gByTcqAGpu26gn4MQpkB",
  "key14": "2nJ4fVVoNBqvjyE2ZM9zhjSFPeQLJfSTvjHogxqhHzsKHw2BCPYFMSXLX7USYPzVBPScvnRf3o1drZGyPQCqKpyF",
  "key15": "NKbnZgqHjeALoqHXsKn3dtUaBZCrEY9ECkszvoT8Ai6fvPMzqRPxDT4W3XC8nmqXgRCwWtPhrTCZFFbRPmrevJV",
  "key16": "xaRaFimaSXceVf6vDSD2q5MMxacgVWjksNW9wzM6gsNz4Qd6bWW1ZGoKncgeCug8xarJeGoPF4jgufbpSVTHpFn",
  "key17": "2e7yr4URgFy3PcYbPiX93ftN9xX3giwvijJmRyZUN5u4vpwhs8UauK5Yy6AyxtLngzXpuL5Rs6ReGq4JVxazTZ8w",
  "key18": "3gd8mBhqm38N2a2nSybKSL1nZDT2fAHvVPvf4qmQAd8u3xrRYX59hXzWUMbMM13XZ1HgyZtDrgx6RZKEeH5Bmafr",
  "key19": "3DBnNzT2aGeRBYZq7vksv1s6zYS3ND2iQnpKMsnwMf5Sn7nndemduMXHLduM98pw631667SoZWPYXtzQsoALuTVm",
  "key20": "nQRiapoQnx2WqTDZcz86fdgzeAF61chNYm3PWciXKD11kpjgjqaVbfxprz3oY5XUU6eoCyTCQZtrZsfKA6x88aV",
  "key21": "p5zd3pdmbWsxLCfwABSe6Lv6PnmxtwPDPKW9dFUBct7Xi2vWNVfWMCEctLsJLhQmk8qLLxm1xNw1ei7CTLfPqXW",
  "key22": "5sMmr75YV53P84pzWPBehTEBSH7r3RLBWHusTdTNuPdmmuyJgqb8xayAH1sPx8ZDqAU4uzWdt9iXQ5gJwbn6rprx",
  "key23": "uwQWwjFCAwVMsBUxpsYJKcTo15j3tJvnAz25aXD5fG33bQVC3GkQWuJC32uAXQX7H9CCbTdJnd3mENjKicT1Axr",
  "key24": "3MVdMPuPQ5cF5aVAceck2sfiYNiup52KGtd533L6QCWacxrPbYpn5PaTtyYDEsUwtwaoixycDPqT2Rw1fGKAgd29",
  "key25": "3f6qZx1zvRiEtvBomCGspgeZjDWre72V59sFGaBNjURiKQCZRV1BrggojnvNohUB4hWYKQ3JXehDaJBbG9iyz3tg",
  "key26": "2jRVcaLJL9A8H7ayJhjtK3tdVU5kRWk3YC2iTbpzpWnrx2SgET4DtQoKUyk5NiFVEZrmUvUdgjSUowW9hH1xuZhf",
  "key27": "4QmZ1YVkbj9VPkxtvsBWkXBr2VVshXKaqwJCdbjdsTvksJShLWH8XTu65dcB8oH1B65zmy2Y4B7riTmTtFY8BeDr",
  "key28": "tkvhjNPcW8HhaapMnxwCE6sZUTdznAjzRhMGrg6PBrByt4ERVHTsB2iQCKpXsjK7z715dcp4ZgU6doUuw4JB35y",
  "key29": "2Uh2L7CaFBLEWZHq1mGBAYuD1eWYRGG5LLxwBSA6Ex6yctVAr9g1vLE5xEsCPj525frhqUDoWv6GcuovYn6L4ixQ",
  "key30": "4sgFVW1kTkUe6RsjgJr1RHa7x6tZVRCx96SAKmc3tc7N736QXuqYGQkjTB8BkT76JwAyxjvuehoC8rULcKZQF15Q"
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
