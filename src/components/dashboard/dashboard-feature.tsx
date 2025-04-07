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
    "44HAx4hjHj4ZexU2ApSj4DHp9uYq4ToNUfiZVv7e7VY5KzR1d7hKabq6nSuYALyrSP6mdfe3AXzavvMTSM6DeG9C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NPH5XrAdoVHtBUm7JAEhEoCMKzAdS9Fkca1UNf2dznwqYm2U7wG1ekZ9G4nEjQT6eiMKG6kqvuW66we5B5u83up",
  "key1": "7rvj93jiLnBxLU6nugY5AS7919nKHZZetXY4U977GNjgq3wTPztynE7ZMo6feTDN4D9A9QeqtErEyrWKt65quuk",
  "key2": "42L9ztypAwdMwitcpTTLmyqSh1zLatK3uQMV9rVNP442bFSPLMpX8wfvA4G5KtBuELzVh4EZuqrXRSaExiwMgMag",
  "key3": "62ZsRnvmJCA3UXAMc7636rhD1UPhN1Q373aZDfjxDxYzErGRsjndsK5B8svC81aSKoNAzQQ7DAzNtQb8HhwJQ5Au",
  "key4": "4jXEW8aCQSjkYHzVtgkrM8Xx6s2cfUL8dsLBFeRQEaoLYbc1AQEekmck3563WgyB5xu955KE8GmTuQPveJZst8BQ",
  "key5": "jjABU8uhcA8yKEMPzjW7AnvfdTWKmxex5iDsWDCDXP7aqTwkZBiRPaAPy8ViEjdMjtfBoUo2xqHp6TTg1RzfppV",
  "key6": "4B4rzWHR9vtQLohQgtkuHsoToiye9Pxzg29VFQwa39NvN8rk8jFMpzNk1cRabnmpDJgAiiRvW8HjELkXgWM9Zazx",
  "key7": "iPpoU1ZqqJRUt6wcBxAJW72HeLQUwrNVYh9i9YhYkp4EpFnTSzs3c4AyVqmFbsTQ7ef94Xy5RsmQYQus925xNZZ",
  "key8": "48orxGATTwNPdk6ZZQNq1GbfX3WxvY3Eq7D8uYYCGFZvuGksQSHuqjheYhciyFze4zTBpbd7MS2juLhaTQ125sm1",
  "key9": "2Hc6pDusdiHBLrL7RfKVdFS56ahrnwmxF1jqi4c65bn4ZKCkTfA8XkcYmaGVNxmnhPJajDdpj3Tnk477HS5wqRQ8",
  "key10": "576Ruxh52GDQ9zHYFt84s2QaNWDDwECGBUV9ypPg4NqyNLJ1hkEgb1rKhqLeuGfPEnBzYwSDkABHSDSdmkq41HRr",
  "key11": "3Qg1YoR8nAWRFeJKAzT4v1JhB2pEhT5CwNjmJwwK5gvGYh5BHq2TJr4WRyaUqm5TBYCPGhm1zQk3RHZCqUXh3s5M",
  "key12": "3LT7fNJF7S1s69dBRJkw5mq9fztJvNBYmP7G8FZf4ZiA5Grp4doazg5anCXbxT5hVPysZQFjWaicjbQHQFZ81ULd",
  "key13": "FFK88AqooBibLrwUw8GbKr3r38x3F4EiTCWZcqoXR3nJ6g2Dc4tGCg2rbkm4xzQiGatKq5QvaKzwAxExNVqmF2m",
  "key14": "CVPhb4g4CeFWvcCHf5GboxvWZkiKEY4qwkaJ7Yk6tS55R6p9eYd6yv9XTLUFP8Zf4CbxRieeUAxVbRJDCB5nMMb",
  "key15": "2sw4sW9WuJhcsWa8eBxnqhwaG2B9KkbBNC8oqVxBv6CNMdUXbyuUrm4cncTEpFkvMkexJqjFpfPjDU7hxCPvevvb",
  "key16": "62DS43mvAp82yjKe3kFntoHWnKwz4yXxaqWQot2F8kzvSBWCJLnHqBBkYje6Mx3czwDj8wbVUTgUHjJWFTDVXqyr",
  "key17": "5P6yfQBV71bio7crbiJq9bau2UJWkYuasgC2opKK9NWWcs3RYDsUpFyvn6zkQzmxdZof1yL5VUnH5snALgDzZqMe",
  "key18": "5B2NAEixPbpdHHqrz7Y6irmeQAJdrdqoe9HJ5bxbf3B6hzLmd5g6qfWxkeZn6vTqWKj4pQWoGVeaDzsBMFYvt8Ao",
  "key19": "4Nrihpk1W4YF2h3B5MagShofjZZ6d2LYA1Y2JVQyjJGvmnVLnuoW2zgRCcZan5aTPou1yGkm79yNEV6vdKLECfHv",
  "key20": "3rZ297ZvmwobV8s65BdNChSNdQEKVWqjMX6ZALV7asLbwqX5ufw4GKo3AsCwCkFHbr6Ns7hgGXz5ahWKa8wx23LN",
  "key21": "apopjNKEAtaEcxyMFBXHjKp1tHdWNGoMz3kio36YFh6hvSLPehCXpk95ETQjbp2qH9HTmPEZiG3Q9dDudFX1CoD",
  "key22": "3M7otJY6J7ZHw5Ug2BQuNAC4KUQyvvZuq5WYywqW61AFa4JRviNnqAHuFCQbmPrCynhTqNWTumSW4EV1PDcD3NwS",
  "key23": "4RL31kLc5YfG6ThByggK8xwGVMVw3hZtxf3WfuggeiGWzwYZnWPGdTL17foNRrnULxacAxFJc5dCy9dRS3ch62gP",
  "key24": "34JbrKZDUkv2oG26MaXDVccRS3S27jZVFH9gbPMgB4rpwzzXW3uXWXY1zBR3G81YV8pgwbszTgqgU1Cz1ijU38CD",
  "key25": "664M8rUCAixJhTKTgYrbKv6qPxLFdB3yoZVWn2zGuf974iBApMf6u51t2e6qoYcLpY4ji7yfsaHvVnApcyvLZgAX",
  "key26": "5uyCeAwmNAStLnJUPFX8PfC1XrrkrwbjUAJhK4ypgsQTUsxGsCEm8GAhfpP4HroW3HBTgBytTydb3otks1hSPQt6",
  "key27": "623aqTTaaoxamYBhRkfctahE7WFkNCGiYP2J6ha1te45EcsXRZ2ciKVdJvBQ5eCd2isEcqGcQ8iKgAkezWoJ65eH",
  "key28": "4icwgwZTMkYzCqLz2aaZxJBUoovJGFj1d5cjMLPiS37s4zJVPqTRADKqJX1jZaPL5P55eq98MWrE9eZAegfwxUPt",
  "key29": "3FTTGKnUTgpms1DtWD65LEDADy3ZQxnRruJsgXyqqofCYGhXzGFWJ7GrwVC5sHbsuYDSVRbi11dhnJVhc1oYYRp"
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
