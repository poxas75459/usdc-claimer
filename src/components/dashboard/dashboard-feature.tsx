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
    "38syNQJ19Tik7YhgupdBCPQTQCWkoHWWAATnrBYA9F3k17Q8dgBbXwU3fwjJ8georCRx7smwBCGe8NB7LG85XP3X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b9XTEUjMWHvqgGof1gcGYeehcw8ggfYk18ya2cAL2HsupJh4jLWJYXv1hqkanbZJDVn7d3cCJumybQoASWLoQPZ",
  "key1": "5Q92XvCw6KjL7z2vPer4ehxCRENCWUVbvK8gxgm45r8GEZ3wQ9EEuTciGAiVi4P5aWeBNAdj8L7fSfbdxbedpGMp",
  "key2": "55Jb2iukovchFbt3L5Q63Sqkpch2wXJLTqNp4zx3EH5EPiDPtbMJfGvNST1RuuQGNL1YtyniYuT7MECKPNzrueka",
  "key3": "5hfga4Y5LHoBTpqQ3trfWS6mbf825DVYpP6BanK3TUshzV43YRyVbmtWpfQBEgiNH1qTn8wR6EvZzxn9ZvPqdd5y",
  "key4": "3SrccGPdXwqgMH6mNgax2ZZjhfL2QB6DcPx2mkw8hpEWuNnWVQGWwGAfC8RocCGwx2ky6CobhhwwDKCSEi2z6Zgf",
  "key5": "5Ys1arffKrk9dU3uQCiUvYgLwQcSdDdvz8quh2s4CpiHD6cZKNJEv6wcSwz8ZLE6W5XDhFH7K4eNrk6TfLrb3mgn",
  "key6": "czgEg2H4UknSTTZohgoZUFJ7b1a2KDFiaUmS5WEysqL5gdjmcfR89u5GJtBrkoBtpgaPiK7aUrUTXPw6PLG5Chy",
  "key7": "32YKdfzANR95aSiswa1WRNLbVhhyPsFic9S9vyF6jNJdDjxMHxoajAPUX8XQbkJ6YQNBDne4aUrhFw9Xd4MNNneS",
  "key8": "4G2mA998x9k3dkdy1LgZDtB4Ndb2yV8AMSFeRBfXHD1LLVsedRy7jBtUaUVBCDYFihQ63smagW5KQWdAAe4q2aS",
  "key9": "U1LGjGG9Z3hbeNWZW5eCh8cmeJnvFeiGc3K2FufSuHchr27E8UCwBSMzad4NKJ16JtWfyMffM229kQzZiFF2WfX",
  "key10": "4uz3fEKiHCmN8kQgV7GepTzuAvU7UvxhBk3HuPnhwGH7mcN1E4VmNHZLUDy8f5ukE9qVqL1zSaXCWtLVGTYYv1Cc",
  "key11": "2vyuJk522fvvnV67bbcQzYoPkKtNYmSu5Qk96G54ECk4fAHq5nSMmfJyLu7Qj74oa9J6aw7TjwtAdHNafLzgv8qf",
  "key12": "2nTH6WHa2PATB3kfwE5J6X5CyodDcozMq5UYWiDuPLFYMK8nKWfzhm2pvm56nLG6S8jHkzGivt5r5j3c1DZT3Eg5",
  "key13": "4FNAX5xUp1fgWnthnTLvw24ZqzL3aR3aHE2EyaEinKeWnc74SwVmhjSWUzv49tV3qvKMshB82rqqu4gqTzQ1kmJp",
  "key14": "p58cqdkQv4eQMZEnw2m13qXp4pzopVQcWzDfvAWs3FXy9r6sHf1JSVLhyGPmh7e8ZvmxhZQkKX7gowyjKaiL3Mp",
  "key15": "3pYNRB3oaK417p96daLK8pxxZH1gFa49AFeemb9bfVQmNtDPe9Qbhve8FdRB4zqi2frpJRVReGWwHrHDDgmZf9rX",
  "key16": "4d4CLkq1WCnhLZ8pCQCmsuC4M9kX3WKV5oNyuusnAoACmJgEixNK9JkmXNeK2fRG5B5QYuPhqwrWRpee4hT7SUNg",
  "key17": "45u9duRPV2DgKbz1RACKApHTcyHeZC935aV75Rz9eN3XPfdLbs1YcFXPkRimRraKkAupQpXwn584zM89rZR5BRDs",
  "key18": "s4snU7t2TzS1jULd6qUW6bQzAb41S8oq8FFpLTHzHswXfyR9qt8EAjUPUBhnGQFJFS9fbt4Sr4UYboLZefxLKhs",
  "key19": "2fCkvyi3rbhrTCeS3NKqvdCg5qSj6muyNHxb99Kxkpxr1mLiCnLGNvM2k5xjebqEn6GsePfsmHMaSnNAYa84Zpz3",
  "key20": "gwaPXnLJ5MQhjoaWP8pysAf2EH3Q4qZVPFH2fYGwzyCUmmVQjJPdonHH3N8rJJH7kHrQ88gV54chwFrBNzxNGBE",
  "key21": "2usfQxRzq684jWcVgH9UQ36HyfiNJbSAhYS9keNHpHem87NiEBLpnG17VCJgC1wjsDLtgEdZM2uK8hDjGGuYgp5k",
  "key22": "5eUmq1xUR9gu2gNayDuSfdMdH5cuiUpiRg3UEf7FbgjGq84j2TmSbekjT5tNqdBV5rPP2Yi5tVgCkvV7zDRP8MZw",
  "key23": "5RSS7X4GMmACJh1TT5enTHwYdySbggKYxzqHGjJiYw3PhKDPoUm2PN8aP8uXYLdGqDC4e5yJkP6KSzWTpfBqghL5",
  "key24": "5V3s1EPQAdvBtjMTBtwgMfNbKiA5jvUMzYqgkqUvr14iewk1u4jX5KG7YwoU6SEWvotQNSSP6XPFbXrc7ZQ89RMW",
  "key25": "2RKJKSTsBR8KfABRMKZ37SgwaPbLkohAJsrkBjLLgLtB1Qu1Rm4xn8S8pNXC8AF3fE32t3ZvdNKo4Ti1PfKzWuSc",
  "key26": "2HM6vPhVGejgnns9eU5CFwmtK6Sv3pS451oJT7CMEzAwbjaE5dBLZhNo8QV6JpFqxsis6D7ztq2ES82vEhkt6qVh",
  "key27": "3pzsxP7XnDjMFMswPwQVrXAfSmuVDNhYdASqaHafSUbdM6kfrzwhEWtdNX6hHLpgHAHWjFxhiXwqVLnJZ6YVzsoy",
  "key28": "3AaquqouEv1W6cNHgcDD4NhghvzgfWr4gC6eLSsnuTMxr4xmimfh1ejidf48E6JrvoBGCvhnBnMpFiM2HwQqGC5d",
  "key29": "598vmoJKxoAJVnaLvQwbFmpBfQhi8hotk1fxKwn3jQ5vTPJBaY9NnJFTEPzGBa1iXrMZauwjuwmdRETZhx2sPgRn",
  "key30": "5LPGkkVkhyNqJoLA1JQQ2bjSJpMQjxus2cxW3UjQEvNXozbdBpDePDacSAoHzUtpsvnkP7FsYB3U1P9mj871PqHY",
  "key31": "3Xs897wXeBiyhY8EGaMsr2Hwd6MJChQqtjBmhtjfYLEoFuKideGjC5iou1T26ttiWHtZyEMthNKrxmaUzX5ePRYZ",
  "key32": "48f6G1LD5aYf8Q1HEXG1NpvhqEexFoE3yj6bLSqjPS9P5sUSZhm6Ni3t9N6wDMyonPg6vyNGp9EvmssiesmvZK6R",
  "key33": "2gngG6w3kGBrQDrNNrSZGkunkjhcgagpFzraG61dsjFQxBqypM2VuHZ1rVvJDyzLhW7XMiLHhcfqWNjqTvkrfLMT",
  "key34": "2XSmEghfgJXgma9K6FQvGCzqGVRsAmtye1s4mmYkxEqNC9dRvNfKEePPBKhZ5zZAB6RDCXPjsvgUC7MsdZ1T1gZc",
  "key35": "5AQJ9DhTzMkSKidqfwXfWbYwFkYzCMwur66uPiiZUApy4yDCAYJebAiN1UuwGqvwx9hTWJiBFpX7Atv5CxvNuoxZ",
  "key36": "3SF88Xa5Tkyk1m2mNLS8Lb6unALkLzXswbpGEpJZtwkwAtQK2ftkkgiRmBoxHjv2uWnP9bBG6hNewg4NiSqrVej9"
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
