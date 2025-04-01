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
    "5vqDMftxm7xRZ1ebHV5UKwQKMBqg7xqi8NXGZ4QsMhnhvR6UBB34Gn8a16tVt5FkgD1PmMyoV2qjkNJtJigzpTPB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "caeqLYWcmSrqxskNAqmteYwENuAFhsnYrWDgx7kWPsSiVJzimd8BUsxiAeovRdnDpHSWkLd8inPTRmM31xZLKsA",
  "key1": "2rhqBBgCmU2oYhtCxBNxHCQWCbfMre8iVFsFteAkvArKWAEfxkGTXPqJv4h9JetHmFYCra75TvLpMBTUYGBVaLdn",
  "key2": "3byjxVUCQgWU8GNnuX5D5sgdkbNdyRJpwRs4irnaLZgzmS7HLWyVKPGb49UFqekKmyqN4Bg5cuAMaCt3LhCVYcaU",
  "key3": "3nyeVrXVmvkr4MaJhDTrAbxAFb9QXhP7L8gEvLGsNj9i91Rm1AQR7YnBFQcVZCPohCx38N1XjwjAAjvNy174A6wR",
  "key4": "2MpdL487VJCSHLeAkB48ASsym88herpAqVVrtom2sgJKq8unMLbUyqsC9qwtLDjdjCCdkoiEcVH4gDDHrXG1ZRx",
  "key5": "kG4iBV9jtf2fd4QodJ1AVvn7ejdaL2M9yA4GfsPrXjWn1Y18XzuFsgNQLfnxD8PxFLDWfQ9a4519EVyTsKBYTrr",
  "key6": "4bmBhMRThPkPbarHDGpEMy9o7eEoutsJJKHAU5Auf27t44fJMZomQydEtHJDkFLNFUqNvhC4b1EjmL9Dq3vJuu5i",
  "key7": "5xvwhtWEwstrX3xH9Ft5KApkSYuiLrrkWmnGy2i7eCQdQx3TpLzh8TRt4bmikowo45FsFt8a2pUkHKP9DDdg1Zp4",
  "key8": "3YnYxNV9pCkWYxtNtnpMVvkaehxrRsrVobKVj4tPYXaB8BUqurfynQAeRHFP52vP1GPnXYCETS3PEivAfUtSdegK",
  "key9": "3ak8WzFYa5CkjtV31Hs7xpJhHA7G1963CFE34gjxZj9DanGQ8dzrFaKvogjaQLZPu1XouDbP9EZEAbfrXQEpxLw8",
  "key10": "2LCtPifjfXahX37Khr8LQVE6SGveCeimktCpWtMUKXmQFsCwyKN9ykc3xx4WqbL2pchMPpa128banHnsQVktPyD3",
  "key11": "3rbxXRArk9vvmUHP68qfiTYWccT2spdcBqjM5XM7YtN6MqdApXVSp9hht1yFc4Pu8QqrMKBLyYBfwhxP4DfpaoCT",
  "key12": "2eqgDthx1WUff3DJeLMaeo5vhPJgv8DersdeeVzfjhQpTj6rg12P2nSVkDVtLPpYMHLQCyhKad8i3AFBf6LZ6rUb",
  "key13": "2mY8K2kG7kgisPQBtErKB8Qpi3BijNVfpDcBjdas3goVFfrcvEttWhkw9YaXMhmQisauxcLsr3icgxVGDiz9wuSg",
  "key14": "2CtjfgXKyEQQd5zfjTizaDB4SezwJbxtuznDAT9WB39M66fP1CQ6RuyV8sALv7FL8ifv2p8LqXRFk3rCKBFiWSoU",
  "key15": "2kRBAnTzp5w8VNPz3tsXxWMLFRr6rkTtezh94BnNj4D6ysR7yUgXcYjysN68d9opsq3A5dJQM13Us51HjCyvDm4t",
  "key16": "5eeAaJxvkrvr68KxsaWL2pofkeSAq2wuSkvzofucF2GsjtwH6W8S1wfSAXanagCWaamU2XGdGPDSKhd9bQUZvVT6",
  "key17": "mh2mQYDahE9Cv5AurSx2BSXNr4P8HQ9m54gFy1k6w1p3TyMPdHvdfvDhdAfXMnkPyduP5paQi6kRB3YJyu8ZSPD",
  "key18": "3b5z1JD5DQ6jhnJNLRRXBwgVpF2daGn5wxRFRL23H5mdfMnLr68e3yV9H3uuwTosTpDBCUM1sA9hYWg4KiHEG9MJ",
  "key19": "4HNsExtJRubVe4MHnnYNHLUyfe4vEroRuUV5tykMStGKLAMBZcDt8WdCg9uWrnmucw32Fh6pZ7oF3Sk54G5n6jHd",
  "key20": "4pHQ7ffJ9dmKLxQDUP83fbE6HGdUNPKVPtuDLDQzRB9VXuTQfyWh5vvVWm5LxBBxRz3o9CmVt2ssuYdPTC4ocLvX",
  "key21": "kdfMAcgQfdAL5hJghQN9QCKoPgggS4RfehgrDijr1HVXzv3VXjzvNtb5cWb3AQt3S8fYmUxZbawNN1WvzV7hAXP",
  "key22": "4QypVSBokXGq2nBgScmCbiryTh5Z5qMko4bztuZ94fx2Vyb1KQQFvyoQEGJxHyRRrmzED9RUppmWZdAh7T1CyPVn",
  "key23": "2zHAHA7bvYxHaQeUwUWiRAe1FwrWdynJ4shxGhU82SY8CXy2hPJg7BLkjtMHSG7WdiMNq6GdA9MDg2WEGFekPzzD",
  "key24": "1ndjkdRZa6fwLVHnwqdXQgTjKHJmENqGXWP4ZW2XEbmX9XyhNgiwFPSnLtvhhpqFS4CosJ2gSrPt8R6V3e4ekdX",
  "key25": "2gZH23iqX8YDDsF6HdJMAHEzMpDfPTBSissvQLnzoeE42hZayiAR1tXJfEAyBvRea8TXc4PrVZEBkqVi4UWQhqWA",
  "key26": "4siwpZ5ySRAJKrEjS7NoTABciXXtfFwToEEU5G2EJF1yv7BMKPB2Ncqg7KU9jPL3JpSEgzxCP39YmiUh4zaEvcLB"
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
