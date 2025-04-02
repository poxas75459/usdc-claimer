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
    "2bJyE3CRkYPTLcDkGFgf2nS7UFb68fGarPKHDzPT78zZscjFdK23CnXg3ZNNz4CXDciTpfuQagSn8HqAfExDsC5A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rKE1TiXYz7Jx4yDq5rwB3HdoNqKq41hdKsj2M1xVSYb75MJsW6yUrjDgYBGaj8R1iWKVKGi7xtMmF7E2cW6uwqB",
  "key1": "Rm7wLij9vTvVswyrSZXf7hWTCjkTy3qr4H8BLKnQQjH3DxEPDynPyhqL4km2QuDvJsSyRvYc7FRSYLTcv2gUHpZ",
  "key2": "5WYVao4bESZBXt581pdF6bE5abZjRBosK5P5SjjsFyRxaUpLAuVwg4pJVFM4EovPweCDFCZFrh8cHkSxCtSeffgg",
  "key3": "2KWMmg7vVZ7z2h2gku2EbVw9VmkjDH5JnLGiiQRJq4BeK3ryBW2eqWA4ym9gLoc8185Exxz4tRjH36qHk9ysfKuG",
  "key4": "5t3Xmne35y9Xi6QZNTckuh3zkNE3rfvtbmkmXkVd7J6nf1yTPUAxNPfQCPfB8icGpvnAa6GGAgEEEjovYqrdjch8",
  "key5": "2MJk9mf3GdTgPwQqGvGS3UhXK5AZDXEGrcyAMew8YYy16SBx5p2eRaQj9D7QwFmTt3WcZUweBCupusFfR9UNMJ84",
  "key6": "5mK4P3FsmgUat1wvFbdcT35cRWyTgF2tv7Sv5x9r6Hghfa9GZS8DgfmbqJnMm8poLq7BgTW9P5Mebw25rdVHYNeQ",
  "key7": "T67mwd2UwqaEKXSVjGKZ7bFX5s9ysPSEtv8hhTRE9WvziJFDYgB2NCCc3pU8p2rHtZTajpbC8CWfD9W3pz4eC1L",
  "key8": "2968MDHKMcUi9WYAvKgSznrgDGsKbAcSnUwLamzU5vShNic4jAwWD4m953PKR9TMajLBL4iUjHCRdwLLfN8hbyKa",
  "key9": "35ugRihUYykAQe34dFMz29BcscNUstXrGsjU1pef5Nd5smoDY54ebjhv6umuLY3VVfCSaSTZu3uNd38mhp5zVquu",
  "key10": "2nZrvYJhHBo6Ac9omeQJ239gWy9ErZoa43EkkaG2n34Pf7731UX5jq3GCuh4zkkeKfeyDLtgtK4YKZ9vni1nUkme",
  "key11": "mtGKon78o869iFTEYyFo9QH7Sg1CjZYwLEEBsJUMAUACXUtAfYNDUUnTPA9Eb6T5FZgytTUz57SiUNbHARarW7U",
  "key12": "5gLGniDRTctie5YwbQHHzk7vAx7KoEPi6yk2CqdcnRzGi2Gdy6XHsSp9m8JFAzjVDmhoqdXtBHE8MFoatjHDzEQL",
  "key13": "35UjxRg8BDSPYWbwLLxYxAFN842cWsd1QdVqPzFDSBYFFCBbzqxCu6K2na9AYo4QFewpcgkuLy2nCUoNCWX5ofMD",
  "key14": "4JXULeuZ5D6TSHSAM898G5Ft1iRV1Ty2hXw6FPsUEQEb98DV8xLkCsLcffxACpv9XK643P1D2axq4DzDPs1DLvkU",
  "key15": "5gorRfsCPHbnuHi496zXvLFPmGazd3awHcyYi89DmyeyWfWpQNRpZTMXn8uKXmbj4v3YtxiSHR6PpE9Cw4im36T9",
  "key16": "2jkugDY119ksGkxDrE199GLi92bbJ1KAyADeXZJ6ZHnh316f7MjwQg3rh1S7xPzRGCgHwY9w5KQFSA3z8NKEY9oX",
  "key17": "5gt2RRTYRvTrRgFQHJfBDk8i3d8YNgs2tKvcqHYc7pbrgEX78rD24JMU98m3Sz1eDnh2ZsqiQfRLsDiMDUYTaRKz",
  "key18": "3rVZkY117dTeZBdm5Wa1DEyMAtZRJvzc8Rio2qEFWJYKwe9C9oJdqV7n9Y6pxXMp1i2kGEqHsmmak2wwMByGnK42",
  "key19": "2z7UzsYAFc2h8JF2AmQeWAzMv1mWhf3p5MxdHJRiZaFYFSqgNBTrcDcWewz7oz8gW1GzUkTfK69xwLMfQsoC7LmZ",
  "key20": "2dZ1N9quZUuKKEfvDDRjRKJizdXAkrbENztND14vt1XV1fCr3n9qAW6b8r7H3EYMUcBvhnwNY5YnMLn36AQsCdLz",
  "key21": "2kF4Ca9VrLtKug3LzKfK64a2ES9q4jKp1NPs6UGWfcwpRW2D6Rx4P3vFX4gZDAsqUqZkFHk7fa4aWAyEuYEUdbcC",
  "key22": "tEwnPTPm8DP9gvRTAzCYJatb8WM2ZnKBDCFThUELVgMxc5jsdj42voA3TMFVKPYXhbtMLz7N5a4WRmmdg5SRzQe",
  "key23": "2tWwKxUWz2ymx3Wj1GmJG5T1z5PkeziDDSUvjnXVhypLVXyFNDCfkVSnyfdBmm3RUqUDqoctBVqaxiQTq9L7HBoG",
  "key24": "3gE4zTsKtRW8jBDN9xiyQ3qsgQRa7iTEQVqpvizDVC21TnXeo2MaoMc8THZXeSjHnz66h3f6r52RdvMkbkQGk41D",
  "key25": "4bj8jkpxjVVjwPwYeehW6e6SJhsBMiJjLwCJ2UNnWnvSnsr4avGhrs8a1opZNf89BhJzgmdNizSq3uYxDF5og5o9"
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
