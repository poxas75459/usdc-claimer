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
    "oVU78YJGk1jK5Uouuf433CKAN3UcupiXPMazuuaYi6e5xLbsD8hMNFiGjbZfG3NHVTQrYzJmaDm4kAEJnGza8sJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FyWnBQAMhczweY4J29wBpjDXovfSDmgawhS2hD3Af8qAsii7KC5pmGy61qDNd7QnM2F6JfBx4BduAWB8yfNQX2B",
  "key1": "4ZxULKrmELgK4rQ9Fm9Ez5sSvUnNHrGRp3x5K6RboTszJpEgWvCek8Gu8AiQ5Tn4MXrmwcWbzbeW1kSbPuw5Npbd",
  "key2": "3248Yi7EdtX7znGbmfS2Zbhum8b6ogeoWCmqfwXwsWZ8eokkHV8hN4psrp5Z19Pd2ySHQpDcqi2QEupS7X1iyVjo",
  "key3": "5KT3WZtmYbReTVPJVHppSXVmAmCf2HD7RLK5aCncbx1xfAiA7Ga3LC2rRbdts4G9sh4eQJvErUcLXsYdzfExb6LD",
  "key4": "5NC8h66Z9LqSP9Jfyti8G4FjSHyVZ5N44WeDeveG4cxCL9GfsNeeADVvXhMDeGGtyPv1MaX71LftB1rLkFHwx6Ew",
  "key5": "3u4KC6wEN2BpxU459v971QSLd8DAVssY3zRiUk9fbMFiZuAdWUuQw1LrqpJKDtFxDuTjhugVjU7731PTkCzw8pJ8",
  "key6": "Gjc2Si1prXXKDxHabiL5TfFcZcjJ4DfL73vCWhT2PsfWafm9UYSLWYaKodP53C2rYZ3WtmEhBXLd6dZvjqAzo19",
  "key7": "VdG1ttXMRfMK9fitBoHbyNGwe8rKizinqxPeFoAhZrn8QNFGh7D7NXE7UcNpZxZxwSRNi1oi7B1bibpc44ozZ5x",
  "key8": "4HXoXGrKMRqcywSjFQZKyCw8G7se5wPLRLpBcgSR4XsYUErMMzr3N9mAgz1Ukj48rJbHfoNJkExRvjRPYmpgteSg",
  "key9": "2pHEwWzHgLjHZMLEjQvusSetWyARPQoqxgXc1PdsCh6cQXoGKyknGrYMvD4BP7QDHwHAAPthbRmB3Fra9rJHBdtF",
  "key10": "4rw7MXks91qd9upXKmKrXeMiGzhB2YKHTJw6sEGqjvWqPU2GZF6JHV7LDY6TECtDyAQdhEJ1YDYEWCH7XAMimn3j",
  "key11": "421tiMyUYV2rU35wHm7gWcWfiXmzeJc3mSCmsJCocP5xmLSS1i9XAyL1VA9yndZZF43FNZKgcqTbR1Dz6VFyBkLw",
  "key12": "5XvP4JiJozvthbxYDkBsrRxcdF1953iz4toeAetDmPmXBakXqnPWx1VyfpC5DZnGQopKEvGZjCqAYEVnNNW1sdbM",
  "key13": "duRtcbpK3kSzBfm4jKefVLhJ7WsWBweZUEcoJywaMGEvzzcbcjk9wWW2gh3eV5PqGTe12YMDpPmJDtuUHJbiV6k",
  "key14": "5mFR7msq7AdMiD53aVjkwXappcQQP8emnSvSvk2GHMHyYF3ZgjX2ZjrrWe5CR5TTCExvFci2PKTs4EqHbrK9PytD",
  "key15": "5F2TKGXiVoEgo2Wb2t78RxaqMzfTvfXrcHtRL6KBPteKSJpA2nVYsNANtxefpHp39KjfYkDQVPF5vwDe6HVMyhAx",
  "key16": "5Xcf1CwuALtkWqNmc36en2wHBQD1ktQvoaxYZqW4g35TRzaypdMGix4sxTfb8whFwRwAx5ThDJBJx2kcgVg8jqoh",
  "key17": "PMTJFqLhVn2yj9ytHD4AkWDpwan8TxFpurCKaDFKjaundZ6BTepFZqXgEqBDNawjbMNnFX8G5nfKvqHKsPJ2zLd",
  "key18": "4zPGzGCPvyBvcUexAmkcWaAsEjRjPaSyMqZqgj15K4HM1vezCNu6RkmJe7cW8ZakkDSwFUJTxAM14HmfUKMbFV2b",
  "key19": "2SmG9LyiVGB3hpoNRZ5GqbMFG9qQU2t2v98fTVBexVhMAAbgwPH6aV1oEoo5PhMTp4TjBAzXxC9PMmy5p8WQFxMt",
  "key20": "dPqSXYVo8EPKZz8teC2jVsjWQKoPExPzTHx2E2cm9bhgaNhEmUh6DqssaNZMFLDGvcmZsczM7harkBJXw1LReDR",
  "key21": "2XmGTxf54SqcDYnTTfcZCfHvLGnbVT6v2Wm3WBziEnbvd36csFVfAv2tvgZpuiwD6wiFvGKm4SreJgXuMiN1JBvo",
  "key22": "3yDDLigamzz55AThb7mFnmjcRmEgbHWPYzBWN4FnzuUAhikTtqwbN8XapQNpUj6aDpXDVzULQxbTbUMpnirDa3sY",
  "key23": "2j2R3UqTMcE9UHU6LowAhFWnscCTVSWfoWe9H6eFWn3j5EDJ721jkfQ4EoM26Z9BsWwFptUT9tCfY6X4yX7Mg4zg",
  "key24": "26G7WvrduESzCcXMtVxXkpVmjf9DFZ5Virr55cpphu3KoKLsTtA6pdrEEKhRiqnVxXyBKetuLxwDZ3Te93P9WVyy",
  "key25": "5ZhCNUwfXuKfqm6wywbeUrumRzkAZCXUBms5SGXKHgCksgFez6UvpqEHyYvhTjCV9CGp2fWP1t65mS46yrjMCSRU",
  "key26": "5UpxELT4Smcddhcaejw5g8mghSHPsn3wFpDisYFhCiJFsGkFHQ8EhCbFMLYKrCfy1rP7NbjtDWvYJVAT5fMLTcTN"
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
