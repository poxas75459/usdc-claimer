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
    "RYR4Uww65ju3mfEpZyBDQXm2dVeyxa5uoFxyu777WnkmHmQYGxf51TVc484ELDv9JJQmEAoGHNRkLyCS1WsDopB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65jLXh71WNziGbhsZuLECpRpWeaDJE9kqfDHgcLHJWSdawHuxrP8DNaskD8WAkXMfDLjNhMGEmQEwCoQCbVSbpa6",
  "key1": "5V9mdUDe1TjpEGfkqbJ5iqhKqjXABqWpcskT7VnvdyMv6tb83dUDjtfCu5W922caparxT3ZE2GgrhQxmMQa3ZHnn",
  "key2": "3f81kE4VNiKu9NE9QjfGKP1rm64LFzK2qzxMYDT7KSLGRxiQb6ekidNzpVSMa58k66yMXnadPapJNRDXe91dMv2d",
  "key3": "24MihErL7ABpSxsWACtDYj3q98LsDHju6vDuPiMbDXdHrouywhVmF9MSrcZEzTCmwSo8E5a1CVwHtozHGJ9yUkZi",
  "key4": "4TB71jUyvt9m1Gchx5RBdj4SqgrSuf4CDQJoJPA37m6r5GHHnxrAHpFv3kuoySsuvBPP3KYSGBHjGHirE1XwqgS3",
  "key5": "BkKWWYYvnF1iUwWhkXMTAdfC43B53knGNGinYYj7HnHHiLU1JkAiHEuEqLJzeLs1SBgxkxV98yvfLU6V3GxRn9G",
  "key6": "61xzMygeXMuVMXJQx1c4BdXYji8AT6AAjXzgjqof4CRcxvWK9NM3rrEZKjgwxcmYtsAZ9EmdGQ3AD6PEdyJWAwBV",
  "key7": "39FBARGH9CWu3PXMwFQLKUg5Sk56zK1HrcQzs829tFU94uzvYLcHxbicots2B9XCwLepEhEKoduNANfyXJ2wYe5y",
  "key8": "46uFJnuo4krwHAXC7ALP9r1YRRgCfoXgtkBoarmVsKJVz4cgjd1xs3ELtHFND2g454svpnZkVig56UYtZpVk1ySC",
  "key9": "3kVb5moFDeLRbYRXAMQY7s9ej3246Rns6Z1yHp9B2cMHb6ihahbJ7kPfFGqsLSfYfjpjcCLXEStE3NMKVdyahqW5",
  "key10": "3hBb29Kx6EHB5L9kUsHRHBMqB6HgMX7junNtaBpbev2MLgAtfPTEKdK91ywod7urmpq7WELGmyJLfsLEPHDfhiH9",
  "key11": "3EHxRKBhoh99awFKppJAg3vnxgaoiN8wNDwQPP2BwEvDEjx6z719PT5rTfwf9gxmvN6zqJ6Dp6Fw7BVCDuhcRxKi",
  "key12": "3xH5giQPokXtShA42fRzKt9uuz9gM4ZtJSBaqf4Eh9P9TXCg99Cy9b4NVhKhfSUeYTW32CdBhMELd8UeXQf7vf17",
  "key13": "3aUFNtZDxkXUZQRLokevCNEUQHTRxVHvcsmoVJeLkMdiAh44sGdXgZPaoCxspZx7nJTn83nFB2F3HjJyqBBnReqy",
  "key14": "4vfPDJ925xDXCTGM7sPDHhK6kAoXpsgAk2WtDSYGe5J49qMsGLKacQFHhHJxeHxer1EkvwxfQfcJUFutdNdktPAD",
  "key15": "BiPjzRU1oKi44mPoA7NprzUvkBe8pBxVxPdPXmytYTQ7qQNa4QFtZc4EMR2Xdx2vzcDkMg2pPfeX9XLncAsgrVt",
  "key16": "3LuftVarH2XXdkGwqWMnUSKdJxAXMgugxJiQrP9eEskPfEwuemnfBnZHP2YM86aa3c72uFACjE4PKAqZiPWyvWSA",
  "key17": "4RzCJGeCC1bjtZKVFP3Pt1Cxth5xen2EuR1X5KXdNTh9ukGyiQQYKuCDYDm5UQ51zS5g1yytKmU4WHMu6qQcccMy",
  "key18": "5tWectRwFheSExLhrcNfufLLpdzNkr2mLBATV73iLh4JHaivCGFmBtEJ77ocGeAUWanuH6hxnnkqWGAFDRRty2mb",
  "key19": "2Q5SJLDPgzGB676MpH4NrS4HQQrGsxAarGREBiATRti5RkUDUc2H3od2i3mV6977U65UjYW2NCA4eG18AMruUMy2",
  "key20": "xZ6upBPGBrc3FRG74Svf4ZVtS6rZbJvQKKGjjttvPCiXiVdZXfDwLyKan1SeEdbQMEu7LyiHhLxtC4PC3pjU3FQ",
  "key21": "619m9C4zj8a4SVro2zgXoYxG1w9qn8cSi5Sac5LnWPQPN1Wo9zRz1qbzNhMzC1b4mG1ktjnPZq2G7rxvMYYoUSk5",
  "key22": "67YK76r9zCkiBQx3p6eHm8erPsNqBhoVFtbeyXs8Sd1c1Q23b5eiGU4iJFKMEVpvnEhVstP6VBcucYuUpas5wjYX",
  "key23": "2bKnJ6AFecgk4VkihzBdX2hSZu6YMFZ9UYFWUAPe9ad6yevWMLgYwjprcaR2RV8sepWGYy9pFqx9BhVTkd5zx1yd",
  "key24": "5YY7PFXfSZ8NRgDbkXgWcW26uXat3wixCQp1VzBJbTxBpXi3wg3d2NUsBfHPgeaLdf1WfAJG1yaQsMc5pLN5toZs",
  "key25": "3ebrfg6CX3TpCCWoVqiqdQnXNR3fd15on74qaQeiBWirZS6yumtQ9X9dvHfu84Grm3JHa3C9wiXS5JrutdLyro8j",
  "key26": "3qKGozS11reFw8kqGrQ4CqV298DyPjkczggqjm3EJPqj82U5qvSBP14P36KDyePqaEZLeRcaDAnq8gvSqmAxAguk"
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
