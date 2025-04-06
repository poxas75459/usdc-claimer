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
    "4HkqTrMXknB74jFRcG55FiYak2Ka6aVb46dj2fcBuUN6HscJ5NeBBzv3aoVupEUBxRkFHB2Zdq7cXZeTNJdy1mZS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ktLC9VEbBfJHC72SrZ2aQETskhyWB9Y6jmx5kbegyUe7KJwDUUzCTpLvemVH9MzbaVD3zpx9DMpnDV9rFKS7GKP",
  "key1": "4vqBcARiaQ7LPJP2JXhdvvcev7TjtZZvzpSchgp5qGGS4dz4WTcMwNHMs6Hf5cqG2rCu7tbBRe6UiytbwyjF41K3",
  "key2": "22v3u8ZUkLe7aFhq3ZCEfzsvaccBuYGmcpLiu8WPxcJvLeZriPJx3WgYSb9wTavrpybTzMDDwE5cZbFGbfTwFWqv",
  "key3": "3afxyqfKQjE7Q8Vp93uxhnwZdLvzNbCRSaetcwZMdXW7iFFDz4pQERpK4im7ZQ8Zy16PpZQfY1PLyihrunWSn6i7",
  "key4": "49FhKnF63j1HSJKWHEUMchxC7DxxbUpY8JChqZvAHeaU2arXipRtLKbDaoPUoAcwEGhT4oKkDHLYyF8thqMBC618",
  "key5": "Syke3P7McUyKHWCHLM4yTbpFu7sSfgSdgywCYuFZRbu2jwBrfkCrXTUuVL6bQcpqf73bs2KnEy4Kh3Eok79YCtm",
  "key6": "4SmxQqsM5qvAvR1f91k5HN8XD4PhNE3bkTMpA5b9CcPDLxhg8Y5tD7uL9dqwsMogAihN3ZhZn929fmi8vT15CTF1",
  "key7": "2dUHYgt57USH1tiQgA3uc2t9ptdQ2jiWYEpQEnfdZw6jxdK2sDLwmvYZ4FjU4qZnDdRCUnnX9VHELMJ9dRsCcJ5q",
  "key8": "5CzWn27eYW9DZs4KQLip7EkLNeFdCpeyVPL4ojfbwy2QzmqsB9ttmrvLqo9mrdxniEVz3jQyeXQNV2pcNvUKb5hU",
  "key9": "ArxPNQ7ayVpQCWBxVWMWzvYEpDSFNDLuiz7E9SQb3QmP775CEbPUc6LBExnEfHD3sJ2MgiSF62eFH5jephDHMSQ",
  "key10": "2eJEfES9FD1M6tSfubCYGezSsnTSyzfRVs2J8BboXBH8qGeCuvJHycTxV8ZfR7kfwWg3GcN6tHJDb9dEqrtnZ67U",
  "key11": "3EB7J3seBAorF7k14voUvPKPKhvxBGK8SAvD8hzzxJKAkRFGcosbD5E8EbP7pS5FaPNTGM8AJaTG7UBcsMhidQG",
  "key12": "4Ua8jVfSAUJqRXthWvtARAvJyx2Vo1skpBFccX3Fp9f1Fwsy6NM7g3LweztETQEKvaNxJYgZcfecsToFkx3CPThB",
  "key13": "52UduY7VrBWk7yJsMjVP4TbUnuaKdkLyGsdAPvu9KHFfA6HsC7NdPoY8owt9EWRgyr4cuMcPCecz4McgDxtE85kd",
  "key14": "3qfJZotQpsN1DvoBxiWNBRFUhG1CfkWd7pAH5SzznajUe78JBahhrYA2wGcWTtZB15rgV7uXnSiPZhAXcaz9nKSc",
  "key15": "39gZP8aUJbqH4aqwUR3qZQ2dHzM7Dy7URtZRxmHjoj4At2gSYNsaJiEKiqKWR1c3FBp1Lx9atEpm3iDqcNtLH27C",
  "key16": "5WdierWnBjq8Q6a6s8mTfSphhjxXKW3BBCLa3jv5yA6uwogx2D83DwQDNFHq9jKyW2DwNDRu6SiN3h7d9fz7EvEv",
  "key17": "5L8J1vyopizyqobksjjYeFETwhapVHDLrpZPCfkSGLA7RXN31CZS614wPUo9ZsvAqfCeBX82YVhAwmgWkAUKxzHY",
  "key18": "5WNUXLsLp4GuE8izhdNSTTEMR1Lt1znpTydZRN3w9uYDUWicTrqoZy3oEEFoVbCzwE8ePBHXF6ZvhmA4xNckfdC1",
  "key19": "4rtZe37GsNxiFfCKYx2Ydcc4zry4hpPq8ZAAqj47iJN1YeZp14kp85oLeyP5jV3ZCf9G75QsqpRPViaYDBCfDHES",
  "key20": "5JGQ3E5rgpTHYUuVnzWEsXGKk4StMRwo9ftA724ce2uJy9Gz2E73QWDc5opsSf9S8SrqSLuXwVYcsp8ZZ6vJJUVS",
  "key21": "3WdBiUHzcgegvSFgT8V6DDeFswBhyTwP6PqhsUtAtpvkbk2RsaLfJN4yanCRAXUMVGyF1GDYtUSGXEbvBRzSLvxJ",
  "key22": "5tabybnK6ZUA6wHn3J4zwT7vMCct9yMkGPijvoqkki4yL7pEaHNCkLGiCqxd2G7s9VwfyoRzHQfXCwNYB7Q4MuU3",
  "key23": "5N7mRvCPUZiH5jsvsVj3baRXjWU71o8qUz7rPvsg3bbWvdCbTcK8zy3fhuxUjPQuNUeuNzGfM4b8jPmU4Df8YcCm",
  "key24": "aor9ZB44Qv66Njvb7PPQR9DQxsGdugj7pc8VgpgrRDYQVWpQpjCdCdmqQm3Xo5vJtpDDkc3zUKZR8NZYZp4qQ2f",
  "key25": "4GpB9XSrQD4wAnp8dkd8dNvrw5gZW7zSz3wLCG2T2yzk3a6C49QKm6nbVjt9ojTW1S5wTaKuTCDirbGzUZCEJbm9",
  "key26": "3UwqMYr1LrVc71D7XAdvnY6DWzSDiVowMu4dTt4gcJkHbRSJQknyf2PoYBvx3BLVCNmjEj6geS8RRLRVVCXE2M5Z",
  "key27": "5XvKmqfEsTRB186PoayQFLzC61an2t5uH1LTmwPSmC4F3LuS55eFP4bBr6TS4zTYiswWW5V4WhELioXVTDRdSyEG",
  "key28": "36YDQPisyFMcAjVo7i3u76HPEW1uxh3RFyrxVVsVeDADTtLukK29zjuRPszenProoRVpwXHAegi33YriFfsfxpsw",
  "key29": "5y1yHrbjzbZgACMQKKjNxFBoV5uhq3DhoS4UhBFo7ArKPFDmJdpSZCwGsmT5nh9XKWQZ3wY3iKUpj1J9RXgWgxCX",
  "key30": "3SPfZap554HZp2KW3TZw3nnMU37ybaDVWS5U9MbWgwzmxpUNT69T4p6mFt37EzzUJPoDKfhRQZazcSVvRXy3dPxh",
  "key31": "2bDigdXjNB2ACaiCcaDfQqGURkWwbaEzvemSaowW9jPGmnjJFtrdAU1FE3y61sac2kFSj8tZYYp9BYSAL2cgvof4",
  "key32": "4B8jC35FrkK9rBhtv5KCARvNxHfYgUD2DUK83nckCkSBEFaQcm7LN8yavuWww4PKxhvDtuvfX3hsWm9Jd6aAJooY"
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
