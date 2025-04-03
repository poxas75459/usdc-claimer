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
    "5CVb3bhgqEu3guq3hqfytSKtVDD29hB9TAj1XEuyGwbBPDSphBY1rXtHMFMBKmQz1dEXbZRg2EQqhWUHd5Ua5QxQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tFA1oXBnyRsNHgoq3X3Y67tMFHs8VmUKD191MGom5xMRjYj8DZqt3RPh7BudGyBjsggZ3xeQwDURBqnXijLzvcr",
  "key1": "4nqNns6J7kTGNLm4UWQV1W6FYXd5zA7zxSimPZQPtZmF3gC5m3qvgB6cKsroNaZmKfC89c2ZcxRKmGwZ5sJnAVbh",
  "key2": "39iVhuStYxTRjTRdy973XZUM1gwEkZ6HAg1nNq5ACXUxTPTx6ZjDAnTkZZTd4md547nNQvqGzvV8oeEmhQbzPCzE",
  "key3": "4TBsmVu34DoYbrpUNBYWNh4R8aJXcQYSmvVqsfRXBGAcS6gkwByiWk4dk6Tzvrf6itfodZ83JWrcqWMMagipaeMH",
  "key4": "5nptU7MSycwPNG1uZTC8BnQLTaJUcXxWGL1QEyyntTSEKfD4ZKFQoGVkm7ftF1UXgeZ2JX7Yj739RSyZC3sSwMbw",
  "key5": "5Twmfi5PE35P3TGer4jdpE3QUgmZw6YNmebzYmEBdGcSzStYmVX3jz5YdX4vka6G84VwFxZxacWHrA2ndb7pJBtA",
  "key6": "Y6pzubHieBoUnp48nM1U4cz5yvSrzJC5Aiehj2PNaxnfdYVjhxj1WBKAdayBVyN7e7FjSf87GbnVzzBU9VGz2Fg",
  "key7": "2w4mMFE6g3HA23nAcSLCP73jGbZtvHQHCXD2A5NePsuEXiS2up8eX6eXvtqbk3HkGF24m4DWLdYDHFjex9NhEoRP",
  "key8": "sFXT7GJfozUKNcAZExXWwg1WL26Tw6Xq2cGeXDLV1CdRP65gch48iKJjfVoxCQmEktdDayFHY3GtLcc3zKDTAeY",
  "key9": "5ppRKAReVh4x1RvprqkXzXwWZNkaq5KNBJJRNz3prFYAvh2yNL23Z2Tjx5AWvRnRxhz6VqsYyJAAKQviZjNJgT46",
  "key10": "43W1HMbxthe4dCXka6UPggqHHEgRffGh24HYyZckMsrji9NP2iMLmAZ8C9VxacxrAro9yptXWwnRGr6U5bZUmGyn",
  "key11": "4gs5gCV1YNtB3xAeAxbWxUvg53yeMGtg8M3Phs2e2SWSTPqnwbXCK1mCpPLKMfSGuoZ6X94xCcnhbQb1At46BqWW",
  "key12": "35YRCiK9jELGGpE8Zm3ocBQjPvqXgKs2TzefXEi28BsnyCX3FopTiHGHLABYizTjqWKhR2cTvXR36gWhJyNefJaA",
  "key13": "rgwMG1J6HZqLvf5qsZRuwZ5K4CC2YWKPr1TjkZnf2Fh7KoBCTttZHmA4MVT5bgB81LD7vq2WryNFSjt1yoRQqZi",
  "key14": "4m6xUyyBfV1D3Gj9s8yh7yW1DzowZ6Tsifkq9pbFSL3BMGextkwQ8yJ8GwX7N4AJeMAeoMfHmFghXCfvCcbAPFmR",
  "key15": "5ZVDjbTm9TiJAAnBSgF36VKMfVY7vKAkg1VyP7gjuxwNbdjox8Zox8dDeHdsfCLBRV8aZZnsr1vEGM55cFSU7c9S",
  "key16": "KL9YkXCDR1BzJLGLrKPxNnWRLunNgD8QQ8WRvQH5Hrr42Z7Y1aAkK8nnGMqobNVdZUL53UodUFXTJXLxJKqm2zi",
  "key17": "4uGfuXNTL8QKcNUvZDbDog5ZHSWXzwP8qi29EwhzVxa8oBv16ow2Kq4ERN6Zs6YZGwziRwmsaLwrY7Z6FrUJLfnc",
  "key18": "vQixtiURarC6x16KCwY5mBVNFY1PLLJDpA7cNvXrc5vZ7rz8hdjU9p89DVoBGfYPSDbK5XpZode51iieDgBWcPC",
  "key19": "4kWxSih4avzgAKCbptiRYMpyYMb2ZPtonsFtye1TKhy2s88DEbnLXtCgHmMM6H69RMgdaVPGdfXf1gAuKNP3TZBS",
  "key20": "Uk3Fnz3mPF3vRAoGJQx7soFY4muCCYwtakh2ftzLYsWBHwme995jRq1wqjbyuEs6Jc7xetgq6XPeN679UoAvcBw",
  "key21": "2nHqez7bNXR3PGLGwuyVhkoBqrFZ8ppdohHUrU5rXr7Ea4wzkv79rZD7aA7R6Bk8VJpNcvkaCGs3DFz4NCgfZhAe",
  "key22": "2EAdYZS4NMNmLBjFwfH8Y3zyKc8ntUPoia5K9W6MUdPJkAhCHs85J6EeuCNkUSe2Mqw7B9iP5PmRRDAg3RPgEnro",
  "key23": "aa7G5iFYxnDkFGBgBAePS5Gjabso9qQWtz7qdrwchPq7aXyLqGnAp7G2tLgfz2G6uRMaiBFMxRCgR3chbCixCzf",
  "key24": "3GDx5Ktjw7t4T4E8ZbhCGMxEgw5Cmae1gzBkwaUKsgubFPELomeWPjzG6mCPB6Hx3qEzbwECddGt7BRA5FdnEWvh",
  "key25": "35peDur2dTYvaphAa8ZaoiU68MCrkLeytnXh4m4Lg6uF4hXV9LCUahyrgd4hDYzjf3w8r5DoSpiiytBFpW6hTTzG",
  "key26": "3ZCY8zHFVzC8qmoDBsvQBQoeLLDv4M3JScy4Que7WFUnaBUAqQA8b1qYxnWcL8CeRkwQasi8cBP8RoFhfpwrYV7a",
  "key27": "4nnJ1VVwf5saczhSkCfScuKxgPt4UeG1p6koic8W8jAckE8FibR1wZrvqVtVQEJyyVciLvB1pEES4VWotX3oAoBn",
  "key28": "3YQFsrGSKg8z4FvvEzaB7zXTM4kEJhLonpKwNfnqjuya7sPiK9RvLmFx4YNK43NXZnoNFQLvSuqJZTBTEn91EgTN",
  "key29": "BtYzhTbTeabUg4CVRzNtZpWEni6TA9HzYr4rBLfjdjndWHTzDeLG1tg4a2ym2nj2N5YJ4rnoZnkF4scHWzYxx63",
  "key30": "5VXi57iDL4vthqUdf9oYWu1SXGG3K5rXDHwcqvFCRNSV1rKwMQyEqHBFGJC6cPxCeF2p9WwDVsxSgZxMaF4XahDa",
  "key31": "243v5987GVbUk6CnbguUpud1Uu1uELk3nGoEwCW5GujZ7irwBX6Bn2KoP7HbyLLh4DVk1phjhnXizf9awZnoWq5T",
  "key32": "4vUu9RU7zkmuxiepA7Ff2uwnfUVRvDS9k9qtL7v1uTNCXKJMamUBZHpjYYDGfqkkAuddfHzrQzGo9skkR8x5LSYr",
  "key33": "2udXg17oDHyhn7UoQnvLPB5z7K5tvyb7p2M9CcnvNUXh3xXhMZgx3bC1engSb8u82WpRDaYXmdhZSS4MMxFALNfC",
  "key34": "5ZrhrC9wfAFPgmqMPxt7a4k9FZLcpEx8fv9pWvpfLM6KckZhi1DiUGKknDq5tGsGz3UcH2bztWXAFdqrJU7ZUfpN",
  "key35": "3wntcaVjBfh7qwzZdC8oTeNRuCwBnHJt2we3GfjXvCdtfgp6axr5ha7DjKeTgX4vudPybSkbtNNkKVJvccBeYRPT",
  "key36": "2bXbYofSpKvpwvKv9HL9qsLtYjLnqzWRNME7kEFn99SwaSmaAVohadvHp838xd1YWPPUFuvkqtnkWskDmD4keWm3",
  "key37": "23gjTdAiXWNCWuCiqSJ75zoXSrky7XAdTqo1jd8QNzEVk657Py6j3Gci9AxTioGWFdfr8zEEvwmHdHaMUncFvzXa",
  "key38": "64DuLo461qmthGcGGV9zdwwYzJzKLYGuCvyuVxBoQnZdLYm2fZHrPM1AeDAgFFndh3dAsmen3PnwUSHo3dWCXVzQ"
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
