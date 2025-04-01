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
    "QqKbFfD3veHBHU1FB3XBiU3ZCmhbtEDonfNYRaJX14ryrvCZNrUC9GM98UC1q9oFFAjg9EjfBjdALN16rnPuYer"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mDj68zPoQpMQo1tbuaSFkXWfeFXEY1g7Jew8a33RbqmHhYPDCTBBoDopyHXhRpuwuJXr518Liv9ZgvP7PPET5sW",
  "key1": "5PDMNqmawX4KaHk6gC1pYmVc3DvdBd9UnfM4oUbYqBzef9mFiBnr62Nqzs5yqwy339jB6Uqynr5tkyJk2moHxp1c",
  "key2": "35cthzvuCr9d1BTsdPmEbthg1xwf4Fyd1M255EkBcg7c5fedvQce2zWrWBPv5ZxQ4ntcN5xAJHJ2G7DqRYbHZ8UY",
  "key3": "2KxBFwL1yCaMWUrU3j9vEaUL9RZBYRbnYPQSN7N2QTBvvrvJPArMcdJdDqje3dBNe3ZJ33PubpBzFzddTdnh6Tc2",
  "key4": "jJnajhuEkFf2ErbF31C3cqR9kUHVXm5mZ1dTiKBXzW7wtK7pPpUiroxh9wNgGEHELiPyLGdxuxso2wMNTVSvKdS",
  "key5": "2YcprGuzSXp3d7UZ4X6BxVt4JnVxgEmynJiKKFM2ENx9K97KzwDVb6kM411rKG3CfZkVbUvrNUNe82qeKN2Qe21",
  "key6": "VCZ4Z2AYscW1Sp59xu3Rbctk6gUqfUZBeV6Ts7Z4NZjeG3XZsb9iUQ4arxTBHS8JdYCWu4KYocvwykrz7WtAmdQ",
  "key7": "3sVyaEPcc8Uaejq5yxNPgcK5xQ4jQAN6gFxDdzr7GQqgvWzbmaPojZc1XYiPDNu8FZbfzKLC5RaJswn1VntCwvgE",
  "key8": "3iAyqXLXKaVrLj5DZ1wz6wir1PnnGYM4keR2oGakZgt8G5r9n8SLHhNuU9aUdnMyoURBYdFUbeomRTaYPKaGUzJi",
  "key9": "282aR1yVNrF8AUAbBBdLFu2S7snKdRu84HkS5N3qLzh88ZP28Pg4XnPYgYxt7GaQ9Xsj7DhzTdXRdAz7tjAMU2HL",
  "key10": "3EmcjUQiXG7bn8d8qScX2w12rYWSSznx54Fcp4DhvfvrUNEuVPnQkkz4FTBtdXkA911cZApbRXzUXwMsvockp8fs",
  "key11": "2KTSUYGdqdsLd7gjAu5UGwp1zS3CWuw96vjD1ZWUgBc7Mtjh5FHAiudNyMC2DcKuTRTARXwET6YdK2P81W9uZfM8",
  "key12": "5FhF3a1mcLyUnqbPX63JTZGhezdRa9MGgVMtRwX6Uvw3CShkyxFAGfHGQZiTmTEZcDSX7SDgtARX9DNDhG2TMhUk",
  "key13": "ia14LEePXJ9Tt1WawNBvdw2aYhEyvkYhADHgBzXgZXfTJ1xGbtBUaiFkxC56HBg2YsMmD1BLCAfzTGLdZEH2vAJ",
  "key14": "4McnoYZCZaXLR9PAeTQ6FwbnYpTuqbvrmpCJTLVQStUB8zJv4CtGAK8ytJsirSwSZGMw7Dcz55pv7jkGZKsof5bR",
  "key15": "414w4Fk1v61eY8CXSik8HVVnsefWGHvarVJYFmbpJjyL484gYZTmekfyDC1SWQUXv8UkbZj4aQXG6tUvVPsxAHV5",
  "key16": "SKmVihawrtMGPTDTvBK57mBFReCKdzSn68dBCf6CCnjQShibQwBsX5Y59Ax99RQMXuQEfrHLoJZTjXWY462PXR7",
  "key17": "627hXXzc66ns5FrefrPAVHsL6sDhfHMTLMgeuzXdEV2pDD6j7vzMdGtn7sxX1nZcyLJtMKJbdjo5AuEEXZKS4fyT",
  "key18": "4EhjkLboaMqZ8r6HN5zqrtDLVFTi9qKZj8GewGaeCt1zpcoJwnR1XRpv5ra2S9QaaZDTMdkLNnEXoGQc5aXaq1SC",
  "key19": "5YM9etCqGpYfw1wV9MvwHues4FyWaruPkjgT62H3iGKLBGnPm6LCTpu79R3jmAcP7DhchprHz7xcozGFNcjs2BM4",
  "key20": "27EKzmkDDYVw3iyCt86z9Mh3TffgyshvzCKBzzQRpei23PQ6vYMf81dmb5eWhBdNNSn44wi1UcjPqn9s7FQyo5Bs",
  "key21": "3LeeorR3w6G7SYSCfaA5M1BEfr5TmpcUsSLWqca2wkL2z71a8z1SqSWfvn3kDJYG9fJmpxQVjPjzq7CfKEBvzmJc",
  "key22": "4FPYS94WEAPPmoQc3iJV5Pr7uLTBwxxkLSxCMUUhcvfnyUW6Nn7XdrKU7RwTb8u1mPC1AkPS7n52FMCEwDmKmyri",
  "key23": "LECP9Dwq68LgnTvSigJoFzaFbBuV2qm8c5inVXFi8JbevQwBxcjkwHTQ1QKyVxvZ9eiZDcgcVPJs2FiV67rnLrA",
  "key24": "3WXroMxXJxP8hvELdrsvsoqtDgCrK8MsBcUbCpZyoxGb6sed53x6W7CdfJCSsrwuhNz674572eiyJqHPUgAk7CHD",
  "key25": "2JwvmHVsHYEboeEJjVDXcVsHypVzNj9Cbd1SDyxkGeTe3KhK2RRjwPqwS6CVCGp5UqZ9G1fFRMBAnW2YdsWzAn8s",
  "key26": "W2frmcvLkjjrWNbQGfyFmDoGko2cNF8iXvY55tkBnvWSfNj8QgPNRhTo27JW3vXU12qqVxQwG4qAj1s39CjiTq1",
  "key27": "5pT3yummoaf82gW8XozPWeoW57c5wgYWcw9Nb8BmU9HAzz9tNoKaJsmb8T3f4STkbpXT1BWjtZKJvMJJtWj48A1M",
  "key28": "2Hhms6tQPFVkCP2daYHpR15LFGmoKvdZ4Q4z4LnVvq87n3x7B5DpsFoESZJ9rhagntJSb8idNNnVyGYZiUBJJHCZ",
  "key29": "4tXo32LiUhEwvK74ZMLYtJPiKKZ23euHoq659pmixBU2bQktzmjSc8WWJ9WD5V7i8oosXyNzQgnGzQLW2ek44HqS",
  "key30": "4GDTy9L1cB7TWUEiVbF6DLJUurZLUtehkcZDXDG8SLpiJFFmrCNa3dzA3rmDNzzaAX4PxkLEAv9HEjhDmj8hkP4X",
  "key31": "2rsx4vp2hAgMUbM9i8aDXtCvuyFBeCAaSj3eTZKQZYKSxaq9Zfhdw1hAikQwfFd578VnfjVWeEhGHDXmaXKRmWsE",
  "key32": "3RTKHCuXoKTS7cVyqZA9kpa74oisgUnwozzjTAYxiK5T6TdPFU2EeqrzoD3wK5Hq7MvpP4oQWpA6dqGYTuQ5bZZ",
  "key33": "314i2r2ha2vckVZkrRyXUqqGE2LLTgkNfVsdc38fRw3kMDb7uM1fronvwbM6qmynhrGzbauUcsVywmexdrGk9GrD",
  "key34": "369EN5y4XQWfACaNUAdU25Z1HhQiPbzn5XgHrbjLbs2KM3fQEouC38XfWUpc93hVnhKnUiYpFG9134CJfQUXAn9A"
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
