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
    "2yneTuCay3uFFMrkqzWHmYpAjWcALZBC1s6Tt9ajV9bXgiz3TXhNYuYcgWbUx9DMcofnF4qoo2EdPpatpsi62hSS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xFjF8E4R6yCKajTutKwEpEUdETkJvvLNd6isdt6ed2jFto99PyoNWHrhwfFs3S3A4NGcQ5tHXR7bZH4XP73qVCs",
  "key1": "5rwXyXbYjVjUg8Jpy1qPT1ngMqv6HB8jEyxSRuiSEhmf1LKvqp6vaddQ35yhXaJozxK9RWUWLhQLQTRy7ggvK3uv",
  "key2": "3Xm57ysGkdZnfd3P7q7vbQbr7nqVbgqm8rexZZFukXtYfm23rqME8Nbi4YqZXmuPFHFN4EwhWHkuUDQpPzMdWzqQ",
  "key3": "47P9wEJK3V5y6RN1iw1FSe89uVwDQEkFoAdXmnHQhSpWad3XPBLuBLzXocudRA5CgFyDVjtk5WJDbs24xzaZHrDc",
  "key4": "CPQtoie7GSNEjDSJZjrC2Mg9QxxTn1WPSQfJkm3xqhdyw3nnmdv8FZWxiTnV9ZAmZ61n3nziMnQRpUJWyut4o4J",
  "key5": "2WgZ6Mvc7iV3ysYNSxVAckJw1GLbxiC3cbHAnpUYWK9sCUEHhFJW1Xn4VVyip5QpDPBu3xfH4iBXJsMBLRoB3r1a",
  "key6": "3ZcWBiswsJpo8R29LaMh2sJkgwZaY8hpUBHGihDGnFxicFQpTvS1X6YHNQDzmGBoU6cdwRHWg7NB8MQHGN2GDtsB",
  "key7": "5ggSe9XwdqGaAKXjhPqxt8Mneh6Fx5oUhNBiKkxiJKKkD8FvfTvuZRViUi7kk8j4sTNNAx29naqiqLVZwCGV8GCz",
  "key8": "2kXe5yrrHYHLzN4a3aWHPJ6fqgG6eKkh6wGbpbMtPtGH8XzdpzVZnaWJUuNtaW3BbDGtVvtYK7WeNLQXapa4UJzv",
  "key9": "wY7UMQShuSm9govXPdHtUJaB8chudDTdbo5L82y79tgXUUGRnbQYFcNoFZZiZ45S4kc8vEbQe3fVvkoShfenBQR",
  "key10": "62oE9An7XkzD1JGbYu6XpeP6oW2eEbVc3UcosJPb7RNVFesSqgEhHChzbT56PJMpirM5s9zuoVQxd4JFGGseUYWv",
  "key11": "CWyToQaEMEXBWQ5e3PRynTnLgYBcBvkQnL4vdAubgmMEAe2uuvweC8NT4RX3n51D1fQYK6XrNjP2NTAxRjegavq",
  "key12": "5TTJLTh3s11ZbHgrcg6ZJFKC4TmrnHx3yQPwRkDfoZrAsQ1oaBSb5Xwy9Vsxf3Nu3r3gepvsyNKkixNo61kQWtwA",
  "key13": "5QKJ558DZpZPoj2cw2mFBxcfxt6usxBp7DZTyq2CEbbcTTD1k37VJVnyrfjcRg4EZBgZ89UzJXH3hcxwCpw2Bocq",
  "key14": "KSV8YxJkTAyTFfjwWcc4vWdAycwYJs4kVxAeNKDXChF6FQENkyBk4T1HL5N6hCsegDsoABYcVwaGViUSFfP8bDo",
  "key15": "2jApGxZTDmi3F1fFW5vnya8BLbvfck8Y73jnXKpKCXeQbe9jBUyYKio9tyBVhVJnwN5jrTt5wSNbiJVQcjWVNvra",
  "key16": "f7NQx3MPh538UQtcWJK1TSoe8scNCaTCVnNQJKF1va1gRcjnnXmQWceANMwsM8W5FzoGEhiRZDvosC8rkYLhKvC",
  "key17": "2h2m4fhUGSnC5sHjTsnNuayCysq7xEP9urK8wBTs7uH4u1kyUBdqHGaWhmMfk9ZNvHuDCzpTVLpTLAUU7gmH6KHZ",
  "key18": "TJC3GRSyrdk1pBc2xhUDXnxvf2iPz5RZk3b7wRpVoZ5WyoUhMXwypxL1hB6GPkLNA8UVAUyZYussDxm3Dre3LSD",
  "key19": "498MUWU5m9naeGjg5UJYqLaV9tXHrvp3iQPvkDVP8rm6emsiXRk261TYfBiouHuVF5ExfnDr9REAGKdZohS1v2tQ",
  "key20": "22CmAM4mCin1u2wGBZE5mo4Eb7oyjvorEs7DHYAN6nZY2nkNtG9pr6QAPuMsJJmpL12Ww51DpwZKE6FamPdqLrzr",
  "key21": "49E7JDvPB13FunkKzL1pWWkPygHT7WStHWUoHkF4XKi6ySsU4bp7dBDgKDuor1PdVAwdLFFPenzjicrDhQeiBuF3",
  "key22": "56BvAKwMKKrmUiMssnhgRzRmUCnumNuEMRYvafQtMsV1eX4bnkdK4TnczgWYRJPRfw1iXQQdLhKMQeVV4zyU57vA",
  "key23": "2b8h3haVkV89kRRtFAbL4Uyd5SxaZZimShGs51Ci5ZJABVvcxQjuHpZd22RMyUMPGyJvAgZ2vA2AzDUXqYd5UFzK",
  "key24": "5x9fnYBe6PPJ28ZYDJcEr2Si5mLcqQQ2E2D5ke3SQCM4vauUWbPFSLQhdANcXp3gwjiv9DFSTn2aSqH4qhTH7Mp1",
  "key25": "31zSNT7b8N7YdrRSQivCz3jjB7Bs1pyZZSzD4X8BZxDx1Te34kjNihz7xzH5kNqPEpg2b6QBhSegvdH8XZSd7sLt",
  "key26": "2ApgNvQ9s4inzPeSa88duQFT3HUAZS96MHTcBEbEvRqhhBzKRcpUstfc93L6ZjdMLCtvDQWd6Ag3pNvfgCm9h2bA",
  "key27": "5P4SKCubAhZHZgs8FTMS1P86n5nztZBANQrXEZxy4t88SSVkBx4uAuFQeWCQ6QJRynvyzZ1rR7a6BQ6CzuBovMje",
  "key28": "5MRq4qMx1C2z5MuhkenMTPFeoigUfczWZcfS1Q8Fye8CRyiJDtNnQg4spRQMcVx7sHQQwM3x9GngCqvTpQYdQxT",
  "key29": "5WBrF1JGxxGC37ShgvG4kHqeNkvuKjuY3i4TpZ6o1fkgNgQ8uaynFVpDvPSnsGDADsA7qp3KjdzwG4GroWw1Sjmd",
  "key30": "4G3QXBsEeZMb5tqeAVMNCghV3qxmn3ZY4PscEdvKF2NYREuywTzcJwHnZybDcJBqEtGakPzdusJF1EvK2gyS6RsR",
  "key31": "67WPGjmBWwzeKNbN57NMGd4pcu8yeE84oRuLu5xpgNZCoUKM1dPKP47A6ScaXAgFu5dtogt84ExnC1VwdT1kpvxY",
  "key32": "2S4uwN9DUBiXrYJBBD6dz5eyfu6taGe2CmTdXzPtCDn7vYPuAyyJZ3qZzR6nNZQFsd3WRZo7Ee1tHkSvzeyAfpPQ",
  "key33": "5fS5D61JjvaknkEK3UevSu1fWPp75vjBDN42XSFYLyQ9vC75aoaKieHF36H5wBZzo7Ru1adPqWmM1sH2mrZyvKNN",
  "key34": "1AGB9AZao5G7sN5fRUDXE2jyUZFXLRGyHU5No5LVYAYeEt3L8UXrig7hPG7paUds4M86MSKsXf8PxCy47BBsDXn"
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
