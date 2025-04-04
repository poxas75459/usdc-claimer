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
    "4FkAiVJJQbQywEviuax5rYdDNG56Cs4MQMGQE98J6dHde3qvrY4GSE63jhuPXtEsJ3Cy8zNP6FqZktvEkSYzEHx8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "445B6azxVQwbNUkroV2bwpGCHbFPfvrBhqZ4nkicieK221hthn5yGHEc9XuBw1P2sCVEKeFmwd9NvpXyzvUGnWFY",
  "key1": "3J7BAsWrM1c34soSEqCuXh6MGhjR6LZRv1jzdANYswkYNiAHktWZdRkzLtRQWvELNGkBTaB7zgFReJzy4tyerutv",
  "key2": "58XDZev3sEpf9t4gVCdyhBRvK8yyXTg4UUCvsoVX8b1F1uTFvb24AU16aaLocKDbFLXcf2Q28PQ9avb3gq7BNdSw",
  "key3": "57SqExf94p6JEdKjNLv6hk2z6mEQAguYhLY6rBXumDonCSLxVMc1kh5jepZjpGkvJrfvqnUTaa5wa6KqdsNaJnUw",
  "key4": "mGGw8f4YQPnwdJgQGUgX9UyL6pSSHJtFUmWw5LHV7fbPz8CYBA93ftND2GBu9fcSqYnxyd52mQ8zAcQVLhVuGXn",
  "key5": "2txtKPiyxK9T6Xz8yUYqW9z2qse3av6KY8QLT4DLSw28r43huzgD58kAnMH6J9AKjEjk5xixEm6eMQMRAQGdWzCE",
  "key6": "3EtJtADt9PRaV9rMjfqvh7QCPHyHsuSDGjdJiy6dCTno8TELZ42M7ET657nhUf222DFHaCUfNsRCrje7dKEfviZK",
  "key7": "DPUSQMS5K8gvH1BuiiQEH3zCALo6R43hvLFqpQU4yqCvZhrW8XfEJEZ6UJu2e3hJy4BL6j2Kb2uzF9L9bxmsmqa",
  "key8": "5zMr8xxuRnuu4feLcjpGQu9KRNoLs71Tj9reG2gMiH7npziStm1jSiynLe2DbBtb1KCXJAhUEYHgS4NiNnfUVQcS",
  "key9": "hqpun7AC8TPjYGJB7BG1S8wP54fxDFR26dLJNK8Px3XKqJVwiFuD1dSDS4XXXv4CYWc6SDbweaCFa3Y2sDHHPRv",
  "key10": "KAkga4EDvtGiXgdJbd2vR5HpLEXgcEoLcRCKett2SdssqMuwR7HkfghLYdAD8BdjXhQ1mFZmv7Y9zN8Q8TEsBem",
  "key11": "4U7dnwFCsrYag8p3Ws8euWFUSkhntuCuYJ15pYyGCgieTYHA3kK7GfHmYueDmsxDfmCSURU6ckbKo1gSE6SgULYa",
  "key12": "3k16sToDijXcd4i5dR2ggP7qJbBdVnzpiVvUxxznFtxTEvNJEbV9gQ9kv2jTJxS1wLaTnMNLCLWuzukotwiy1u7g",
  "key13": "4896kaeQGodHMibxopciQR3qb73Cs6hKr2oEtRVe4E4LHdhH5zvL99RiMVKLHnYcpfUeKfsfkRr98H5qJaLQq9DP",
  "key14": "4nKJS4KLaQuWLcpbG154gdjXk5jZKFoyW1QRVx4UncCFuvDQ6owtba1zEQPiz3crzFa5k6Kr6WBn59aSuJktCZQj",
  "key15": "5y4WXGoXKjYKL2RDgmFuNYAP9fQW7a6MC1ZcgCrFi7J3zqe8MxyUEdeu7Q9MJzc7STifruyX9uccmcmmsUHiagGD",
  "key16": "4L556Zm8WYVAW2sq78YP6Kb2EdVPhVebkcZBWwpQqELeXMpg8UT4kbByrKnBxzBPckxiDRh77kQWSfUwKjgeD1mn",
  "key17": "pz1hpZd2Gt8H33bpA7NovJ7eUFPET2ecp8zkZmvxjYFuHma4gxWBdT8ZyXCZBd5npmuHPDEd8pszbosvXY7eS9x",
  "key18": "5G66vdfXMHDmYGb7bN1WfhmM1L78GfwMWo6nQWTuh8rWeaeV5WJS1q9CTGMetXKycXqkzjZqLxM6jJsFinmSTedC",
  "key19": "26DF4YSxtEoZfmMV6KRvHt7HAgMnjMFsZpJ4S1hC1S3kRosUmSjNYKmRC6FMA6DGkixT4sXaPt9a7fAZjfSR5kVU",
  "key20": "dwoqK4FLTtD5agmvzmzVm4turisesgdkSwf4mTu6qHHGFMAMKHo73L4sau21Wzq38BWfyqy9ptArEAfgcUrAv7d",
  "key21": "qdsHq9CZMzRpY3AGstrZA6iXvWaGQxzvE1F32cwp5ZboFXW57jAnoNLTQduzD5XDmqWsmjBr4ysm8KyRcaHvZCk",
  "key22": "yky6eoiDAfyvWpTd36G4jU1z5bQ2pHbbe7YCPwa5U1SRPWJtaeKsvCzmffCK8Ee9Jpu6NKNjFa1K7URvjfmm4sQ",
  "key23": "3oDGpAqLKhfQFsAqBWnmss2nX4RAPePYzPKamXXDRSBsyRsnKjq4nHdxAU5rm3nTohvrRfv1MsR3PPjLMDfKYqSJ",
  "key24": "3egY9nip5TbBJ3RGg7MZ9HFFgkm3B4XdmsLKhoL4bNixkCGqG5eJTouyoJhBAxn9ekpMaYm39dXjRY53Fh9fcmvw",
  "key25": "4DwTumfuxjfk1Xd1qAGGkTaMsBoiCLvP6fCgneRXm7MbRpUr3NSvA1Ubde3qPmwQh5xi1m71UcUXbhaGVBCCD1h5"
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
