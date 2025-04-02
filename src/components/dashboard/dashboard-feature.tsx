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
    "4nv4eCQQ412T4L4Ra491dJ7MkfJJofPovJ4fyrsUNL23Aua4STV9J4WDsNQKnvcGvCiEQ2sy3fG2KzTxwzhV1aCG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T1tfoh35gzybg3NvmV76HRxRPEvESWgMGkdWy8svVWG9frj34U8zttaT2eez7QtFS2DY45kP9W7Y1kPT2nQeBXE",
  "key1": "4X6WN56ZLQ1HZmhCUfmYjiW6uHcX67fCwzsDxpfV8kMHExViiLtPZ5881Maea7MVEeayT5kmEGc4mAPCq3M6Yjbd",
  "key2": "5ko7fGoix4jjx8CUjp4aA2co9P87dFtqpNbstqEcPUvqwTkTpAMVziQeQbnHwo6gAx2dvPXtMwAxd6tv9gkyfub2",
  "key3": "3JpNCoaD25qGMYqYYHZ1uXPQuD3szWSkKQywMJsYhDEMMuRthVsrKhNBNktQWGYyonqvzJVxr8ksU5LDPoyiVsjC",
  "key4": "33JE3ZqgQpQvXVCDD3KV5KkSL6RhjHXw9hpt7hk36rpLLZhkEYL1qzP3Qqs1xCWxS2VLXGq7QfhWevCURuDqbRGN",
  "key5": "4aRD6ZEndronGrifhF468PvDjkhtbgFzbEfWrziVkAeimZjJz55uJvkjT6zG1oDw8b8rfuCxTLFeqkCMRzGKTd9R",
  "key6": "5jPgGze5qjMPPGFgN54Nn2b5cy7448wGtoTvkQEGXnsNrfo4dAnuD4S58oprVGiNqYyTX1SDqmMEX4CBXtrMzpDT",
  "key7": "4WGuhM8DoXoa5wsEkTP5vPFfU9YsV736jGwxoNdSzAyaUEwg6QEyNUgY2TmTFxFXTKkcqUh22QJiBMCgrZsWxJpY",
  "key8": "4N62cBLzKX1giG4fL7wbR2csLLqyAenjxh5FU4Wy5c7MEvfLJsZdvNGmCKH4wUCFC1aXHdSdoxEmdcCGNU7HuKru",
  "key9": "5iX6X7uCUPMo62bKGdgiomdZj2PpdsNE7TBGdK9hbNiF3n1wsrHY48rRdzWd4mmAEBzHN1vNmiUKpGtDvUh1pSXw",
  "key10": "3RVG6AfhSciuvSsEokmAFx2DFMLm54CR5wj6TajUWnBdnBifqpfA9jD2GAKYQRyJhsJ9c5s3hAdHg9pKF9uVAa78",
  "key11": "3JzX1UHMCCbdcUExFKTma4oxsYAE1GjREcR5FreVa59g3VVgpcsbHtFcesuD2k8xBgHpUY4x15oZ2EX6WRmvJoHt",
  "key12": "5usMYuCqmvL1vAjGLg1cDMeB1uzvDcA5VxDYM7JRoNgt9EX2b9DdYCy6McRF3uzQet5KoD5S97BpUQmaPxbpMcSq",
  "key13": "3E47deg48LiuYyNWCL7RjGfjhy1L2m2VPSxtaUtjvbfzfhC9mnWdHHp9FDtzXqoLsBKyzN3TfPECSAPtqXkifhDe",
  "key14": "MTgzW1NVSFsSP1eHo8dLd44jU2ANAazxtTmQ26guq8YdaXYWbuM3svHea388sydTTAMv439T3XCvQmmFo5Cd9hT",
  "key15": "3rvnGoPFSsMDwrYP1GdGEztqNdsZHsNgpizjY7rxB9rPJREZnW6FNvYWPqDBqFjMttVMgq8TAPiPrekFCrEduLkd",
  "key16": "45kaWd8tm6v8JdXepWDYZUSiU1Dg2xjd7U7DAfKLKni1xeUsq8GVVckCQwFJbVKnzJm9GbiMWu5CJ2Axcg91sZVD",
  "key17": "knxNYxmWgVgPE5iPXUMpyY7vP1zU7oLuXvyZq27Fsx8DehmFSHWqu1WjYMYgEHjHCRCTBKC1aBcqH86hXDhQzZZ",
  "key18": "3doUrY4ehmSaaWCfcQ5tF9WVZWpGEc2uY7a8YXKzgacBzEqAujGYBkU4kaDrN253qyhXZh8gYAhwhDmbCdgRZVmm",
  "key19": "2c43ffdKy3y5o8T5zzAqpWJKBnaVgtKTMu1GPBVy9kF4qPweG7NuJcizAEq1DchzLMkm29F3cBKAYyQ4mhgDrpjg",
  "key20": "5fHnMXTNBCgnpEezv4yBcVXkm8qEWgaqbmQ3JZX7vRfeWkmkvvivq1BFGir61mnHhK1bqX9EKEC4dx6pjmLns8me",
  "key21": "64z2RsGCoGNpfzFAds1rdiLq2fq5zD2A2SBPwmHbvefZwN7vRRQa8JXqNnnLUpR9wQszqpj6ti6PJyGyza3XioJv",
  "key22": "2afT1q93jfb8m2W2cARCNCRd6QE7ANW3oWKzss47toVpaWYBmL9hX1tddvUVdKMy3Y4e315xYRnRZ6HPUmFgEWqd",
  "key23": "3VNRbBKZwUbXMuN3KKxxqSvtWrTvoGzqqWKer9GHQvxi9dVU3x4CTCpKQ5oxPAzZPqGSxPvE97gjE19SzKX7BZ7w",
  "key24": "3gXthPC22stsAZTBZFHC94qU5mYX1db7XFrAGRjK9LCLFUsw2Dswp3yNqprr4bNk7fQ8DKxZUsvFRuKCoRVCaWv2",
  "key25": "t6aPCVEdk2arTeFe6SZuMu2Hr5ZbWGiijJ4Pkdb82r6hoGobQmCpvVrb18ig6PTLqJCDMEqyMTQHptuwnbKaf5k",
  "key26": "4ZobXp9SgTFPPrUYCABJ4pAgfrzkvR72if2MDVuKEWUMmDXdJP5tWEb7b6deNHUUYGqfCQpD6w2LcssB7u2Uex8z",
  "key27": "3zM3GsPNew28sXaPQ9vKc7ffCw5FzWwXPhpUyodBGruGvpiJHcAmJAZCGvwXpgbTZsegWp8UawpzdS9rtWJNyaES",
  "key28": "41vHaQT9Khe4rjyQ3zztP6nEJAUWGiLLJeyFQzqLMyYMVQkv1bDE8b89gXmY6nhnFJx2hWcvpbsLB98pjeXz9M2t"
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
