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
    "5ms6mtJX3L6jeMjMvReDdCFL8dQ6kSp7VhTcigrjpKNuAkAGvVQi5yDpDCHzo1prXxrj5CB2SqXHnNwESLrmLg95"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BnYBFf9Ac5xaH4LgZx8Hp2KYMuwjCaJVitc8smASBJQ1Jnn8E4pxdszap6zmcgwmxiDTsm3PQMt3DRcFT4YPWDf",
  "key1": "39j6HF8oLX9nM6nHna1jxLqzXSckjRh4MXMEJgnEQPWwFZbAoRbbNXXguwPc4JD1FgsYmbG6L4JjFfxkVWcyC5Jb",
  "key2": "2KXz6spcwjQ8AjRo2cJFYVNvAY3zTkZ7xDCn7bDAm66AyLBAPq4gzcntPLKCFCKry8QLaQ2bQVgDrz9p8QdvRifN",
  "key3": "5UkZ39FFB4PxZHvYQM8816MHAUHqcwzwg3KZzLfTq3QSFP13MqmwY2PDm76w93aiXfFuwj1dH88eRJ7XMQxfQEwu",
  "key4": "5L2VbtwtUuUUPVE5JueFqgmupWEaCfSkRwEK3WU6A8iMfGrq5RsbsmJqCPanTGytGU6zdMyxxGGpD1moPFxnA4js",
  "key5": "5mq9g35tZ3g92wQMSC7r2p6dHskVh2LbkSKnLJqbg8zmbfezP4jD12jMKLsDcNwvyPdjCtUqvB7Mr5hp8tEP5h4g",
  "key6": "4V5nm72djhpesRJk7PbXQNgZneHY7WyF1GvgcnagWPJTBgpTDgAGv6ZRsVVKKjzXy5BYcW2urYo13Jm645sNFCfq",
  "key7": "4DPUe8a9bS2eHcJKkts8HoPk2UWyvnBpH4PbpKoPpZNDFLHfunexv2qL6PWpeLZ75FkzD4zCocbfH9Jv5iYficuK",
  "key8": "5DNvFGCxQgC3UZk9A2QXZdGR2LgLkV58wjdw2rs4L9JhvQjzGspsKJadEzTZJUBabUpXMrinUWVkcLwXahcohbwh",
  "key9": "2qa9QuRXmPmo6K5bVu2aqZwVxnEgktSCRCiKwYexyGFGANQQ8gDBLeTQa8i6Y42joVRvvmB86FbkWP89Vt2SJ68W",
  "key10": "4dYyAFmD1CNjV8NxmE7nnj8jCvszJKZCYMuuqnN3Ju6aZ8eSmvk2HctZ98wG9Re9a1n722uoH4oi2TPo7K4kmPMw",
  "key11": "4cohkBV9bYqE4W4kHeMNTPkdfVzRtG8FXcMj1QC7c63wxSt7g9JbZRShGz8PA9EmGR1CosVa5w92YmQkNZJcJqmb",
  "key12": "5mPXAwb1AKgGjg8FfK1UUEL5t4eD6VM7TV6ZxMY9YbXPFCY4dygToD8nvNMXHNWV318KbQW9B5QRu8T78CC1H7C3",
  "key13": "3yzoeG2u9o6kEAJwfwDBZtVhEbgzwZuNQ37143jQefnJmiApN99Fhd3ka3Xw4X5n2ZvbUaNCFbhwD8t6sBBXgw71",
  "key14": "4uGkmSMbq4NWGyEkZk7Efs4SS2etU9znukEQSWrfPBP8Vfv3pVvENG3zwnGejbnWsAF2j2y8weZ9TFLrBFoRDBMD",
  "key15": "3L67rgLKoFEHn3qvZFZ76dVMs5TeG1LH1iZmsSTdTMCTVvkwFoJF9QbSg77A4cb49ZRT6y4UYZC5iUQTFmK8gxUs",
  "key16": "9ZfNtE7dBXNLkzGpzEx6gXx6tWXy3KJCqQwXZriP1WuuHMqQ1EHUE7Z2KxFVggxkWc3HNGakPmw4Rc56DrMv7Pz",
  "key17": "2osaRLBsu3ZyKMM7Cwyizw4t8VxsNfHWxAE4cuSe2MKybpU1beKEkbZYEiyQHf4hsKe8hbiB4zYi6My3EMonrKq",
  "key18": "3jv42NUXygJ2f5ZrttYNEDWitS38BGogwhbLVnC8AdoxXJ4F1MkNgWYk3Lc6GQxKhNA1UjaDuHGcrcoMnZbbyDyf",
  "key19": "3mdU16sSJEF1oDhbRM123PuA86BkAuYzBNdQTXLK5MmJhqRZ6ks2fjw914FH8mT6fUDN8LzfkoStoGi17AnU9yU1",
  "key20": "4K2nptSg1ZjPzNteY5pshgCsEBoZbscqJ6AYzidHLGBfvdWQMkVvdPsnkjbFG5Aoq87okzbuzDhh9LpDYt4dNhK9",
  "key21": "677tsZDqbMS5LcsQGNKMbMwmvafc855SnQhTd7eT2YyEMJy23WkGmW41dULNpifoiW9CQjMSUmS1cG9EyWG4b84",
  "key22": "35ByHhiJKbLtSuwnm3nPPYYXF9dmCvZmHN3H1DP8LvLUQ2wux6RZqGCoSM7w9isQiUXGhSvjv5D8T9rz5eW9NPPk",
  "key23": "GbS8g8n6ZLNMvNkPV1Z39SuyhZ3d9EGmEFnt9oM325EXhCvYcayuz2L5ANhHrXXxU1uQdRpkX2WwiVaeReBUgta",
  "key24": "4E68zMukHMSuNVmDQN5enBVfqLRuA1MV1kCZNwywAaEh4rUqEf9Ki1PPcarrbB6Nfh29qPf1zJ28t4GfMp4mQAC3",
  "key25": "4KFTFrTA329SsGsAkgbebJ1sBDeMTKhjyJiPSds88TrBhzu8ZpvVtffaGCbEfG9p6qdSwVs1qDq3dtfPBgtTMs3D",
  "key26": "39yqn2xYLCeHeqhKQ5e1JEBWhEkFHPrpMYoKe3XnUBJPyF94aaLENYrD44mtsEhts9Bnr3Nw6fNxjbr3hYsTK2Jy",
  "key27": "2wRSfrfoDnDKLqEFo7BTK24ERjoJ3hsfoUYpvEBMoDv6khwBkcuov5fjnwZMG9Sz8AHQMhUvmyLYNgW4pn9qomVX",
  "key28": "QtBrHDg9fnd2T4UMvYhaFQMNH1ztJWFCTzGsTyxTQrrz2tPk5qGH8xhxCGMa71sgJwBFpGC3A1LHMNYXnyb9Yoq",
  "key29": "57D4L4fW3SVzpathJGpXjyqQsRYnk5z5A6Ejbos4WPDdCAbJ8CpbUr5TBk6BLLGdw7zDZDAsoi5d3ym6aGKkHX6P",
  "key30": "5Xke5bdwMAQ6vJy1gPhpp5hT6sbCwwYnH3m4TArTJ1Ms23fXw6qu6m8CnxUMFdZPxLYkKhUiRndDa8PpjEW54FPv",
  "key31": "4q2xa2ovn4RA97D5w5QSC6LGwoY8QbhrjcFWp5ykKegd94K9smNrpCQyLqaqFS7w15Smh6RsjYwLdDjXkSiTzT2m",
  "key32": "qDhkXF7C3DvYMrpFjZuDhAK1x6CnLbZAvyMnrPboTvf6EeTgLPvKJrNQyfDaY1qE5ywd2sg1RiLdbHjB6w1FK4t",
  "key33": "5XMRAQtq5h7Cumugp5dGbqRMX2coHTG97vy8emot7UQoV4jZ6iGK9qgV3CJFw8rRBRsDcTN8wrtLu2Fz4Bihs5nL",
  "key34": "5kVEB6QXWXTzMCu3T3bCXChhpr17tPSBYBB7LSxXXfTEAeoPN9EDEzHqKYJp7bTAB8CttHW7cEtH9TLWwZxYwJNu"
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
