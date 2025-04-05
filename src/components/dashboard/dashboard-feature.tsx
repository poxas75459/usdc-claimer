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
    "22ihyKk39hARphusTm76h7rMFrfvUMZPgUqJRASMwsvTk9RabgdAy5QHzv1yHqWoFhR2Ywy2rFAFJK6f3qb8Lf1o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rYyKYrugqvMEVxBZUnhGVHo9ypBGhGC1YTVrhteYNRNUcNZ3e1QomtNmEDc6CwEUPPgseTU855tU5NA36ktKZre",
  "key1": "4CJaeHaA8DwNNphqdjNQ13eXQi93tK3FNW57xzhr6ZvxsAFC8yq92DW8T2Ka9rvcrD75sjVQs44aNVAR4giduvC7",
  "key2": "ZDU8uDEs94AeyW454VBMcWsZnqPGLY1bKvA73Eokq9vx7uSRRq3Qvf4PDMHThWAJ5FZgEEmiQq5QpKyeHptWyLN",
  "key3": "TRm6WPN4YxpY6LU9LQdrMvRwFqDoLc82Sy6cARQSCZREUGSkfE19yhWXPLFfGaA7mtzMrduvTfPCrQP3opkNFpF",
  "key4": "3VuqBwkVzjzWkJ928pyMKjdqsByGs8N4bSKcycPR6goVEMjDvUA8VTZTDjkaQMiMT8KdHrxSb92tHVtJxaVf3sPY",
  "key5": "4MJab8GybwdgfnEB7KFkJ1kUcysk67BfUEhvhLLG5TkTV4GszAiM61JiWvuunAVAaaR6aqW6NTPGA7zUTRqSS9Zp",
  "key6": "3E8Hw3M2GbdkBDGHXeNaYHy59gY6zfMysFr2rYnA33aktULGZjz3HSkbkLeUSFLdV6NqpaPNr7M2SowAfzeaPWN7",
  "key7": "5GaLCmSebdX4XXW6wLgTD7jpiZyhu1v9WtUQ8CWEH7KiZW8dHhzBt1CuKTck6Zzz8GRJTufKz8SFW7YZx77Lf9oy",
  "key8": "5RxVpvdfBS2BRRkyvkUsnvamJzZP2pgmL6UdxXE4E3LMtqCTkVTbYF2AsxAddgh27rjWrdjZ92KqVRuZPmLqsRRa",
  "key9": "5ufjDD3qYpRcC7PqVSPsJ8KQv6GRFEfebriGwoAivqeg4AqxQrFPTvs4PJHdx7ttKLm72EuhTWyfwahFcy9rpxp3",
  "key10": "upKr1VERE5Uf66ctF9nA3jyzUio3a6C49nrc1EDNJVL7UeGqYQxqRjZ8axLcN48DLbhF6vT9xmUgK1citwt6YhZ",
  "key11": "3gWWQcpkuYjhtZy48x4c1XLy2kr2dkXpLsYqxwKwxitepGgyqSe1t6z4FYLS1vqNQ7iSiMzR6FSTgPtF8s4C3irQ",
  "key12": "58KBADEkS9Zw6eUMHcW2gXBkWQLESyUNBX6BcYaifscbhKLDghcUokf9N3bSkjZ7BzsTPx9tS3idhMT2rXLUQgmj",
  "key13": "4nzRhK8Gmx5nAHzYshft8mMAgHzx8jvk39u7V29cS666RexPQzeQ6L5ePadKszedYZcbVDNbvySf6gNAucixJ1B2",
  "key14": "5fKcEwi9LyKXcPKkPcM8z8SomkL3unsmLmjf6TrmMPcvCRWK6zLjhrKtSVRmSFP9t8z5iYMJeAygghLoVyD2tLcL",
  "key15": "5GzRVEUNPF2VmkecaxkiuGMnR77dMwwtZZVwqzjEQvQLi5bTE1PrH6TXhgKs83inuKAN5dkgwVpqCFkvUUvbXM7x",
  "key16": "44vUKBcxj8KU3DowsvDMEuq46QeEx4LYiC41WD4JA9Ds5JYcrdqH1WmKZi9aBuDvCdWEiY8XU83AWcPPbe3BxENa",
  "key17": "4WY9v18LUBsRYbY6bDXdAggWhEKHgbe9ti3sSLPbac5RJ9CoCzJqUgpyVvJEfagZQDGE28pWfqish9z2v5jqUGwc",
  "key18": "5THzfnaM8ZQ9EKLE9ZGreRgyoJsrXTSkWQKroKUJtFPfaSvKrR8zsu62hLXbGxVBBgjZ89wUex6ACsyu47zBZF1q",
  "key19": "3qV2fb6o8kJiJ5JigSUK3FFBvPRxPUQ8yRWBBwoXGS4ufcWu9C35SaMLJYChLcKbeJ8exPLXFVmMSbbS1zvw5T1A",
  "key20": "5RfwNEWXmQzdScpcyQtki7FfY1g4dsiHxpg764RdcRfCyn8dQqGMv1NmPqCAHoeJT2RLDTJfp8XhExvXwq29BReq",
  "key21": "57omx5R6G9nHTiMNvJbYv4aHuLuAzjJzbZnK1gjCMskPc67W18V6Ls8koY5thoELyYbeSh1anEp8s2t5cKx8e2Dk",
  "key22": "3XX4yH7yrxUK1sRan2YRMYxXwiTwjM4pT7QB1jEGzSHSufPtuiAD9rvQHiAjzcBWJV2N3Ph3GXrLFSoi6VGhgC5N",
  "key23": "eHhHa1nUm3qL4UAjV2YkBTXU9Hy6KWsiqEhk36WZVmJxFPRXDx2wKAbM2Usn8N366sf1kiCXPWtLCdyrgPbbPC6",
  "key24": "4F72Hudtwa5TLQ3Z7vXp4JQnGQdiC4gwgfEnGt7iaGMgbCS3fp65kH6U7kyHuNAfJHzthqw7zbDSSz3hJJqsxaYp",
  "key25": "4YzRNxoUZWmbSnQGCNrAMHYpWLiTbYbpoSZ2HraYQeSeNQZT5LP7yG3XFdkEetuqQSVDc1Aov6gffw6unCT9oRfF",
  "key26": "3Gnw3uhkMRcDCpzCjmLy33JXw1SgtwcESbdjDXygCLXf94N2th6iRDoU8db5bbHgQcxhMtfZywnvNFuzv846YLz9",
  "key27": "2WdDBj43DwPSZGcQkzNFseBR732afV6umNnENWiX9j6e47bngUG1e7mzA24Mw8QHsiNDTomWAvxkkYNpsXaywVep",
  "key28": "2DH4XKq3SC6byn1hmYxMQE9vRDcoeoQu7w3rztbbdJG9knZfUDpYUmKTqazUH78cGBXYKP6pahgJ2xwEUmjRpSEs",
  "key29": "3MDfNZzBG7vP6GnFQKDk7coLGqKvJWmdaoxZMvBL4v3XXvSMRHUD4CThR9Lf2cuKbzbj2mdrMQfgFre1i9Hz2oyh"
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
