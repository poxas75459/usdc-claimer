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
    "3jyCUQZezzz1ifTffxzSEoDkCt5xiPQzTvjj7Q1KcdVv6T26Ys3TM97cGm58XUUyj9bAD5TMJ5FH3c9uBBo889ja"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v5vTR5X1WhqRT8ZEYUGYoWAjwdfVqkP3MZBzhRKJit6mkkZojLStUruqQjTgfKtdd3kZrbW2Yeuu4u1BMwToh9h",
  "key1": "aD62QZ3Kbzi1AA9NT2XDKXcxBNQ19PHZYujh5ntfHjU8fgG1NDXCbCd46DFyXVZqx467SSM8JTyNM9GZuVpNzZa",
  "key2": "5DYzGLaXXXFw7GRACT1xofjD9EGT7LZ1RTLPMWMDC3Q6tRVa3FsoMC4Q2xfKiv7PEiyq5XPqrXGc2qjkMHL4P5Yt",
  "key3": "5ZBsHZfkKaNsj2vgGPhPhtgdB4fNGQmS24HGe8qK4Fp9fomHgxqJWkX1wCoZTozdigS6TDwsSn53G3YzJd8fhwmB",
  "key4": "5RoBdK6WUM9JvesRHa2D7ygTGHnfjWUsU2gMZ5CNcZwxwxWe8QqfVjidn3kL2tgTDdzu454KxjLGtzb6m4Zk7M6K",
  "key5": "CB3B5Au1VFoMFfawKVN4Vk6Scg7rs2Mv7DBeWa9c9eAmHiFxD2XHpVvKHaR8GmQpmiRL84Fzd1Ex5M9uNRqa6Q8",
  "key6": "32odskQ4wHXqKm9SHqwCYnzFXW48RW57yP8wbfAgKksf4oLE1CtafG2RGvRfz7y8hLd9hVv5UNdPJWeuLH3NEbDo",
  "key7": "5SfZsttpz6xzesGPE5WfzsV9HZAYd6KRWjAKkWnCNb5aFL1Nh8Uxi77oZBhxnb6VyUhgzkiAiKCg1XRuBqD8wpkn",
  "key8": "5Su3W9DNCkxS1GJ9NJzgEeKLsSjKJonqsF6UxxsEKugSX1Xpf1oxv75CKEzpiXaYSaveNi9ySNMa1fjd5iVJeure",
  "key9": "4nDuwHUSinQWFop8dN4QaVUHJHFtZcxdAZGTDSecdfnmHFKsUcjTMfdBwA3U73QoeHqGqYeqnrHRRAiCLVWgjFRb",
  "key10": "3nerZQF7d2gekHaYBhz5zBrmTvtZdhKQDNcJsuHxsiKTK3aDbeA1e5sbACDWWHiQ36jmDoptH4ahKYywZyUH2qu6",
  "key11": "64EWB4MJ6EYnHmLFyaxQ1HwXaQjbhq14HHTHdefScQdukiTBpXcTnQNRyeo2aWKHA1KtXxzSXxDrynLkW1oNGbPT",
  "key12": "2TrtvZksR58NUGSNPTk3gpjLiqmUoFRFw3F4yacbUjCrbiR8gwSoEAk771Knp1MG4j9gYJyD5rUxiqQqh1QWwkj1",
  "key13": "Ytx1tsr2NPMRUvjzYpVrt9hMTp8vgud5H2ARkGm219iCG1VD2a2GfKhM5ka7nXBGPePrurhis82W2FCkK6euJbq",
  "key14": "bU43NvnGrSdACrBK5uVt5zWjxYTEBBX1yT3Br4qvcskS51TjPa9wpSjATJo1kLwMYsecwFd1rscELw7uhPziBpX",
  "key15": "59Yv2B1DAuUciS3MnQc78JjUXMvALA8T9US7xtk1gdNp48ebA1q84PTqQuN3pENLPsDhvHHMiTFBbuR75nSWE4V4",
  "key16": "5AUU3Gi5MDjuFJFTXgR6RLv6xjTLPgqftJkuC6bzhcCEgQpxMey1t8N6QEnMrkYM3ppzrVZdkwtBSX1DMQdatD7r",
  "key17": "4d6ujGSHrdDAVRYGU2WFYUamNajb3BtzPFm9JkteYhwjVxtzxwSMESM4vBv8Nb6WW1VdKTGZ66Y2aMuvQaiCcDfu",
  "key18": "4CYUChSivfp53Moek9opKe4SdBCHgSZLHj8jWiQ2LLZbWjuezEfgLvdnPyVpGA1yjsPExGjfw1Q55JFwGNE5msDz",
  "key19": "4PZbsgYtb38xJtz3EvF2iAXUkJwnRdmsf6FzEqQVV9WVQ344EWKfad99BtsEEehQmsC1qPW9H9CZg71m3H67wobz",
  "key20": "4Ez72cX4BstF4Jh3HfZCo2vsPqNyHgtfQVee5ntGLtikeioNbBpqHSiAetkh4u6q7Piy8n1shh7GL1RzSxR3SCKN",
  "key21": "Z4Gv9RrReQVtXYCeiuki1y6kvwnm85E4eD3DhFGJVri97wmqvFBeA7uvrY74NusiwnvNL2Qo97roVrFb7Qcvt56",
  "key22": "2tXRRhijhsvhB2huCHx9zWDhwGFyoEJESVujNo6GfVm22AMwiMythiUUwYQ5DgmyzMmt9xRnLFvEFytwMonsYf7B",
  "key23": "2CLxUGMtetWnqz8JLo8yd1vXu1mnMSWVikbi4uz99fXCFmhFWfS4dDXftDMueURGn3aREbwtpML1EEgmQCm7uyTv",
  "key24": "5Dunv1SZgAFRVotHPPCBe9tHYeh2qHfX8VnEW6ofv7fwsPbkEHqHoGi9uw1NKZDqWWf4acVuFy6KeNJTat3tvzhy",
  "key25": "3SY5PAgVAJ4avVho7U2tEznFnNmoWC8hd3ryZtnD6ZEM2pC8qt4ZBVePBb7bwn9eSjA2BUnf1aBvFZo8mYRLmf5H",
  "key26": "43WNDsStFzztrZ9ibhztKLy5zGuvsFKT3T8rUd3ouEf98d633M9FAq3S4rfv9aMwPEzD1Fb5BY6kXHjiQ633nFib",
  "key27": "4pKxhuLhBcVRNkc2pKJeE3ju4aA6ixKLPmX7sEoY4cWN79UgoJmM4Mq6pEChLcWqzRZ2RVqnoNBEAsUSkVaYRifK"
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
