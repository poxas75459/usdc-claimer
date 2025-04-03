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
    "4hCjZni3xYo1cTgynns7ib89e3BtSUGJgcAvKUBViTHx1AQptFpDygHj31LpXJ23hwEjRYTPtda15hNw3cxL5Wyg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NtvEo7FCdUZ2WSEh3o74MbnBVjwUfYWdeZu9nLAJbPEB98BgN2HS7XdBtN6GqAt2E7eGzujUKD5pfCjHg8KkyfY",
  "key1": "P9uAbCteoXKkkmrrAEycqQ7UXkCVYg8RXxcKesz8m7XSMpxb7He62agzSJuZX7Ee4HVdwJ4UyvXwdxvK1GWz3aU",
  "key2": "4fdiHUX16mzggqn5W4MtFCnVyTQqPS69R43jRyAbMRkG6rgsExAj6Fbd9FbnTiFePqPzCP2bvwDvmvmTEXQB8QYJ",
  "key3": "GxjuC28p1bHfSFpx86vQpQJVPrJH54bhCPbmXKHFzoLgDm6UPqPJUAmAJvdxfqvrjao3LE1QKS4u2j2mvPdfyAw",
  "key4": "5ooH1qp89oZGttHGLFXx88eGb63vMtkQEHsbomJFqyrXjUsBRYuGiYL1LYRuHSBfJDMf5pRQAM4dYR3cPHbMwDSw",
  "key5": "v29vb2BaZsFz8D6QHFdHQooRZjtVMHcHGxGSzYYtkXvopDKHQQiv4m6d7xuMb14DbnvqnYYF97g9VRENgikokDv",
  "key6": "32rpVN2jBs5V3BcZd1YRMT7QxPbj8BPuqVUbTxuf8hqoQMg2PFzmGQAtTdS22nRWomQa83sXfa9LqrdLAvq6GKcn",
  "key7": "5NMFwcx73JFjj2JoDVCceDJnigKu9MnZ3j8nDbmUJrgehHbNWyMzpyA6dFnQDFEcVAYuZDBcHpBiyX5GzEG1yK2P",
  "key8": "1wpCLF5DMtUUvYVfKsh2eReoULtXgn68Z4B3ftnfLw6rH9VTgEKcqEf3NLsrUbRSYk8VPeMutYduPuHu2cXV2Gq",
  "key9": "64n9PMm1yyxgroUyEsjeb2Auw3PZ43xw26KxKWYoWrX4wZmC2UK4QQpQNUWvbFEgyRdL9NqtfZnKgeXkBJR5rur6",
  "key10": "37FgeCjueDCrhm1P7cBQ3K375iJYTqvWqXeKvgX8G3JHj7Aa2DdCdEAhBjvuEFajaKJcTp3qbaDXNqCzrxJ1Xcye",
  "key11": "Vb3krWiaTcQ8DDyHrSEGbVd7SFW4KwKDMKG2bNcvPvpHrrYsSVGk75p8DXfKJZRfdxhrKJPq24nhV3L3Xe3SkCJ",
  "key12": "ZZuUqsFTR6ey3xGNLdt7ZeXWqUqkhbrBL7qAasD2fhB5gcnZSqUZdKdK9bKZrHiYb4xLYdNMXrpJuVYek41cFmy",
  "key13": "3uzoqsD9aoQwT3sVFe4UxBfBsciCrPuBBgzgc98qxXfBzH5GLWtQwJKZhu7GqFBdkEGAPW7ArEPJ6hBFLhAX1HC7",
  "key14": "5nkd62PfaZYbdWV1xv38PJAC2CR1QQNTUUekpaQjthng4NPdsvvtLp2MAzrxnvUJNK5npNKYxwfVdiWiwUNtjnF6",
  "key15": "3UtDxvJfSm1n5EcVWwr57uLVE18jixWed1QqHV8qimBo9eMVw8cYd697nUgFrDwArgb8ckHaegP6N6tPqnXyS7fL",
  "key16": "4JoQisBPPHtBQZiZgrFB76TQ1MyCAygcEKAxmQN98iE4pDch98buptdLc2tk5Q1rYi7GmUJc3NbLSxb8vEk5fRdm",
  "key17": "4m251JUf6vyvvDX9k4CdbDR6CH5kG58NpfTEQtj8ftHkm5TseDQ8Te8tWFBuYV7fFt8NL4asQEaz666o1EpcpB8C",
  "key18": "3T4zLbRdLjQjQRU3nZoMAKSyCjJpB2oid8FvzP5Zri89GXQapu7gTuvkE9Gzbc7Q4DuuX5BtCs5xTuJjnYE8ySut",
  "key19": "2i2Wy7p7X4YxrXjGSSSTRdxXj8SRyvPieQxEw3upLWEEdi64Frjuvo5CcunQQsW4JGoYsqPZqRU3mNJzWLbPkxvM",
  "key20": "4nwf3mgZwaVzC9KZQExU25YJ6dJ9xJYXghGUfyzTLkYhyzLdEpwohL7w3rkDfPPNq2WXxNv8ePNBLGvuxzXqpDeC",
  "key21": "4xsUqxcndiKi6LWBfjiCYiN86VeQoKyN89jJS8otG8wTLeSkP8tvBr7UQSx3PCSj1VGhNDsbgojdNQYeptBQ6ag3",
  "key22": "3B4eSVn8yGdqd8b2gYccHgDHTq2kMMa69WfcLBn6zGZ3z6aPuWERBne1ewyRnLavhi6EJwdGsh4UR6pWqJimmJgd",
  "key23": "s4gGLvtNZdXodYrmanDKhbw9m8sVo49RQtDtgJ8Tu5ukoxXibr8SCsKB8KPUbXzr7UZjHqnnC6J5QRDeoGMTujn",
  "key24": "DML3nA39JtAfDobDffTfMerVuGRmUnGZxafaQzXxYZRas6Qv8oLbuVmqJ4x1GrvzNGAnWqCd8zEMqunBwXDCL5o",
  "key25": "53FED1UGTEdYvMhnq9yrBBNeB1Ldxvz7pwoqC33nRUA86jDoV5FGo1rhBx13v23Yp8uFT9xKtw37N2yHWuLY3GBU",
  "key26": "3z1yJzwekrza9m4xzRGARD855uzrCLFzo9uft2dkN1diReyRqwt5cG7gJqZ73YbQ9tdGGk2J3ELP2Noqse3vX9aY",
  "key27": "2LVQWW6wSonyq9bKoC7xVNAQmvqoLiu1PELSJz6SCDAHvJHd8sbQZWXjhHcHvDsZWbwH2rMKgZw9H9zcPxwEZmST",
  "key28": "EEyvzBJ5u5eTZDVbAgHtPqkKD8AfKEXMttD47oCH8cpLY97rMNmEcSzkzF5SFVALHi79fYQMkm6YHbh9jk5kk5R"
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
