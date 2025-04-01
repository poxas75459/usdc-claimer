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
    "5cwmP2VRN68aJAGmc3zArEWGHty7SikfTNZQGVpbfjRPfWgViLsxfW13Y3xSkzbyxJvUeTp37FvBWfRCKmkrNsK5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yLyCCGPJDLs9KNkMJQ8GGWSJV38Py8qQwf6SexaNpRYDTBAsEYFzKE1uuQyNGoKLcGm2kLdFcRvUi2NsCrgkTBZ",
  "key1": "5xC1i3quZT94ATfSYZxwfoQKafu1Dko9H6zRbo4TkC7HMjWgh82mNE4jsMxqgLRKs7MMWQ6VP5JgWZjK1jxEGy1y",
  "key2": "2WDdUDv3HEgKQiVDaotbYapYCULWoNoGwaT9ioHZc6FqQAyEK7KxgQHkcUGL42qkHdAk8iqBe74Bm8qVe2DRhPkn",
  "key3": "2t86fttXQmwprWkFSdjBak9Q8tdBXcWF6THxR4dD71z3ARPm87oRUeojWM7vHhErLY5F8uQViABgLmYNR6w3Yf7Q",
  "key4": "5NgNxNxfmCy9iowEaAuY3NMr6cXUNZ4wHWsB2ZTo6jdm3yeHdCu9MqmnP2dQkXrLL57xzUw2EF6Bpx1v7wXqcr71",
  "key5": "3XkFs8LSzdNvdwBQ8XJSTJ7kMmjJt78RgnDmc12KRhwX9cAA4G8u2vBPpEMHgYGqHoWdcb63umSRbVz4UrGj8Qe1",
  "key6": "t5Z9cqmfJTKYwh15GZvGLkSDjtr2NEnHrionA81LZtHr4oYeTwpR7G1Djirajs7Dk64SpFFj7hb9Qn69pG12uTB",
  "key7": "5uV4FdKgMTuq2Dscsg1R3Z8A1aW2cWx3WBkarveeECwZhZcs9Jw31s2qMUmu8pC7dCrKDWEYikDZViTY8YyVLG54",
  "key8": "hh1QfMrgYpbGWvdYhqkvfoHTU26r6bAMMLigQB1cG7ivZjfJexehpt8YPQ2bkLhR6XCGNs3uPnoEGSubnd9mGuh",
  "key9": "4fpWjDALQxVxR5B9L3bBfw3Xet9uDhHQABK4mRZWJaSGiDq9tFfrbPDPhxtw6A1dJDuBPistfhMxJeyepdoSWsoS",
  "key10": "2p47u83VVGcwCEEtUxrMftLvFBWDeYYZPb6g7QiyFYSCmdPvVuHfCHv7fAbUEVdo6qMmmxuG2nFmZ1Ej6g3Q57QW",
  "key11": "5zQNfLDxzxhxTWA8WUDXCuTJXQ51Nz5AScVUDQfvHwXaRvi4pAfQAtFdtwFCX6EiKZwNkRXwhWjmtwyuBy4oFvMa",
  "key12": "fAC2rte1EPBoXyS9o4szLzUcWkCUpi13SMEJNF1yuCJi74ZmmowbFpFFyPdGNFJiCW3BrzyRTBAsCaWPuSBCCf8",
  "key13": "4hwUjN1oBFEfXuNFvm8hBg4EkW6C1mNhXadrGF5PEw2AjyVyH65XnaGXYu6vzVu8Zt5uVPzERFjfAwrE26zxcTzB",
  "key14": "3qP6sJ3y2MALAKn3iTbhAY6YrK4267xi6MzpyYpgvR43YEf2HYUArkkTBGPH3R6TjpkArVBVgqfn2tGnQ4yawsxw",
  "key15": "4gz8aDDfojDt7d3rx2trYV6P6oFrpC9XvojxSVpoRKWSm859q1HjXnZLYcjXn7pM2Fp8s52ErArBeWzxfu7Lcenb",
  "key16": "31U8PGKxerWv18r4n4y9DcPba4v4WgqdRzUxZjXJx61fSaXumm7Swos3f5UJELrFbVrAZQqyD6QJEQLmPibX1MUb",
  "key17": "5HoHqQwELKLNXKmsG1JnmxCyDsQY1auAY21YgF8mcaUaCvDSZyUYT79Exwg7z2AhE97FYpGts3iNFr6djQvDTcwG",
  "key18": "rctjegpr2joyjYWHCysN7qnKumZ8rCipWM6qjModk8tEpNQbkaTNiceSeWy8roKiuzySZMRuRNnooXzoHYUUQMU",
  "key19": "4kMPSAaC3Y8vzYtMnHuANhULnrcJ43VNjTmACQMBWQcL5ytStmUjU17AN9L3qEHyT6nB1w5BnjmjCdWXoJifWxUX",
  "key20": "4zbYB2FuC4eAcJzKHQjcZbLRdj6wsXzBM9qkf25FQDSUaHFtpo3UaZDMjHs5cb3SBL9y8e9rJK7tx6b98ZRFte98",
  "key21": "FyMsdkcgcU8JMkaEkXRSQdtGrkMYaU2BPXmcRetgWhHkCe7BNdqvfyfgBqsUzJNuSrbKygvqudsx71hv8gjqXH9",
  "key22": "3VF2CRUaZLQGRHx1QizegKBJ39AGEHx9ZSrSAjFmyc9EZ5gN1FkJrb7xmb6mmq32Tr3fwT3MxPekWfXpP87UYDC8",
  "key23": "4kCA6ugUbzss8P7XxTjfYsEXTkhvKcRUaK8R27dEdcyxbsZmLSytAitnFtEe4PmGukaNVJ4LEK18kLxqTWXeBE7M",
  "key24": "4KuvvEjwhEWN2sPdmB9gvgoV9F3aBaa5f2udzTAYRRDjHhDH9orvW4NmqM1X7dcRY6Z2hrnmnWznXJCppvtFAWZZ",
  "key25": "4rwTQeWnwgBfQhzQZZ4GehjPK5NBPpVMjEmC5tzgGQnR2FGxC6s8tWsMzWVeXMzNcemjuW3pwVkgWkg16aBdCCEf",
  "key26": "2uf42DGQsNmL8r15vcW5rxSiELythYMyCGPuFFxPvA1XoCYmBEet4nVy2eZYeP7atexydRgWu7D9Rq5RMiESmAo8",
  "key27": "4s1Jfi8kpRYbnm3rbyCjQE83xY4rM5AXHjbfGfJXBxWsVVqTyG6T3o4df2H5Lu41aWi7iim5V6xvESR4gL53feTU",
  "key28": "LcaNrqAWxKPHdzjPvyXpPwPQ3W3nvSRt6VGtNf7XqNzzPSgQg5b2itHTpGaPs94T4Zipk6FwyhZUGoA4YSvNwx9",
  "key29": "4imVYj6gNj5nnHk35oeSsNvMFXRKa6nUgC3mXuAqrafX5HiDAi4pMCBVRXWGoHggUavJnKSgLjkYY27eAe3YKZn7",
  "key30": "xfm2wHeKkkjVy2yVfvpNnkLeMvqvWPtLvidRV4AQeuCqf97mYgu8mhUAkvzmRFJN3eArzQMXzibutNMgV68jPag",
  "key31": "5wNgZmZYWrgi1YJbyTtP5bJxvCWCRYcix2xpNZLmhp6BikXhaSXqErtwZNpeYhujASphjGJStMRJch9i249hXJ3r",
  "key32": "27EkSALQ89Hb4sUQXKpUCpGkZJKKCcVgvAjrm6gbPYtqAMbHf8psJo7RcayCddUtCRq7qgSeqw36Me223gWJ12Cs"
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
