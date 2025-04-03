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
    "66Rn887wjCebGfMM7qR3V7fbkf2JL3bDnGGQm5MwYeVWVkhyZkDWwDZReHZ4vyRXQ7h4XHckzc3nmdhGfDv6LDgC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gd3zS6M47ee5ZUDxFmwxGxoP3JY1Kxcutw9rbCxFFufLifqHvA7pFmf2VM969WLeKHbpCMt9VEr2eBQ2y8PeMWc",
  "key1": "5EpBEwTEDt65MF1a1zEyLqGLb8h32ATbUJE7qNyBnduZW9siGa4GuJ2wD3WD9JPmYrdJiboc4oZ4J6Z4SEeyP7UB",
  "key2": "3eTbbRKz2MgxKzdQQ1WRkYKgWV8dtoAdfueKSpwbMmg67hGmU8eLYJSjKXZwhg3GJRMfKvXsf9QXns4FvdtUNHJv",
  "key3": "3ReTtPWRYiBSxZZwwNxNFbuBQq1feug8zLyvpZNsbmBomHsEvoE2mWiXfysZPnQvUK8yqC7mGdxJTQcDUysq7NCP",
  "key4": "4WRTHyNQ5K95SmidNXd4Qecsrh9SJf9S8oP5VAkau5Sa5kfjep58eFm7GWXobD34jB9sRWbqLghPb9eAuxtKzJgp",
  "key5": "2ZsXRwnnhsnGK29QnPahUnH7J4tXhhDdM6v2C1DocvoGPfSiWNtFpro5ocPxnw5Sjz8Dvdc2S98n9iDLE5DwpNWc",
  "key6": "2MzaL1LULf24xXBSUDtxUZaFCVFbSpaNBwgvswGkW18gNQaNm8bA9Fb6mivg7aDKvJju2SMn97P5KfNpZwqsgMob",
  "key7": "61Vgm4CmPxLhSxjTQjzA4NkJm94JwsgDCbZtyrficR4REEDFW9QDfashM5ZM3nLQMLVXSuAaqbukp8hWiUTdnYsg",
  "key8": "Ru1uaZskk4iqmrje7dFVNnr6mwMLS3h3GPSSYPEmPBuyFdYYYksQqkXPauAeWbMY6Zgy6sRR7SFzqHJTHGWoke4",
  "key9": "2KseMUPXTNbczS53iHdnZPbE2MzKtzCttMYHWJ7qX73azV1nunh295acFeZWbmE9pXJCCpEcHvdQVSjqiBHfcHXo",
  "key10": "5fp8AbkdmnhMTjmzNy6xJNLB6GNt3wS4MSnwV4jJwnjyeqQ911VikQYwXR6MoAEwtNt7xeVYb9rjeZVbMikgHSSc",
  "key11": "1b6jAh3MVSP2whF19gzTuw3EArpoWDYwQwv2yjWsrBTnemQxtvpriumdyb9Lvw2fcgfPbBczBDMU8dDGLbq1ZTL",
  "key12": "2gr4zPTKZfDnfRLwiF7GeyoMAifsTNQEB1MkF6CM5T1jbo9U6Agmzb9Cp95Ehw5TcXGxa8MJSYAySJVozQ6Syqah",
  "key13": "3FhTtqUm2L6cKsqRRPX47hW574HG4ExTn5zKBDWpgif968HNfUbLo6ABvLDEeMfzqxZFFEVRbHdnjsVLCcQBmCu6",
  "key14": "3sojSTULgpq7tyWsBEqCjCjwqYyHMv1HkxhAogaiGDP2cBP7VaJbUJjd2Xyw8Txut9T8mibCAzQuaaatL5EDWXg8",
  "key15": "35Xjq3LNfk6wsYvJBjxn29vZUmGLpvSiWaLJ145WUC3gqXCHLPPesh5p5XxLp8StatV3eF5JVc8jFwBv4E9iFyah",
  "key16": "WS9kQmLPSY71U7t12CVUrPL6gYZDabdAtqKmDfMZTJBgMuRB6Xza6Eg22RU7uktihkofZMuTdGQ69GG5AjK16N1",
  "key17": "4jTDJWquvHbqNEeMaYb1rNzsTpL3MQGsAVNVt8ALfMzjWMHMAfDANxaUfFDr4wUUdxfMQEwizC2ShC7vrLqPUmYV",
  "key18": "66dqdXFDKyWNprWgbJxWfYTuMy36tSLGNWeA5KvU6Vmzv2zgLn55Ztsna6YgoxGaeNdy8FqCiGVpuZsT9CeLSSAS",
  "key19": "Z2CbqcjCh3xqa9MfsPThkxrNEcTpb2ftrJs7LVgykJ2qyxAqzzjLRHS8TupLvx1YpVynTKDmXVXUykjRDG6YSZs",
  "key20": "5EXNVx8oebtzapR9hoYCZuFMwpmTHhYABemUWQcr2Akz8UTx2EX6vTLS7ZhdBR4NH9gt8xfKeyJQnLrmiuiX8KCq",
  "key21": "5aARU6qt5X2qxqJ2hZjT6t6jQ3xMYQxuYdiNJcvyU3jmoNbnkVz83hjdC2ZzYhY8rYGtT8csz1uoWFAcQ3PCQrBb",
  "key22": "37TpgYzU53udPaz1ENEGB2wx3vZpw9uxWSBKR8NGH7JPXNhgVAJGJr26cWPq5dTu45QabaMYiLE2TsVSDkyWcMut",
  "key23": "2K8F68D2WDq7vH562WZgAn2SGU8mwBvJ8Vn5WDBaYcXVFdbqz8gzwxKxSc8idFiDqc57GXqD6Q1sY7vgMdxycAKx",
  "key24": "Xt4PvF46Jn4rzSr6hVrDqs88trhN9R4ReAdLXQz9ZBwGLZd1Gp8fwCQyhgycoVSqLZerepwijuSVngZZHKamUUT",
  "key25": "28UBp7LvMiYpwaw9saYoJKjUkmKwhVjjWxLeVz23KchTvAaeMt6e9s8ECm7gxAov2AVgFKbgNRJQR5hiNhTztUA6",
  "key26": "5GRG1ff8SFBnehAmxGevTq4LJwWhcqvY8V7jkba2rvP1xWwybxvdQk9w2kkhHyZwuTqk4FKXT3rvutBaucse3Pbi",
  "key27": "48vq3zA2hqP46xWqECgyoos4MdpZTQ1pBCu8ww8Z7RnTP8KaDqmVu2rk2ADS2w2bT4SQwXEJ8Nj4o8AHKPQCUpp4",
  "key28": "5ux9dvkG3Vo5eUFg8z2ccNgZPnSVKjZxUsN6avt1ypEqwh84AsravZeEWbdvhbi68RNmncer8V1UGDP2qX7peXkX",
  "key29": "SgGiZM9x93Z9dzdcbEwacoXzV1wFZZTeBSPbcriXDT7wzqJ56AYgrt4to5y5ZCoS2mh5DHosZw1NVzZF2URBaWT",
  "key30": "4jAuLUjvym7FZXmd1ufdxHWzrcAnqB4t4NULkJfX1vKicHbsQcy7rNuAC4Wcoo6EwvnVUBtjoCmhHFMJWXqBF9tL",
  "key31": "PujVYJSoUQMFQJnX2euaesrAni6Gyoa3Vp99uYLH8dpCtKrtXETjhnjAFCGhNQZtzAcnGp5Y3P6v2upTVU67mmt",
  "key32": "2fyXsGWroSeH82c4jxGMyAb6dGVU7ybj74JzzmXhCgwxUoQ5V8jVxVThQ5QnkMfuX4mXT1w1aJthLbe1kepqGvBa",
  "key33": "2JUz3HfGfFY3Y3sCy21Q9ZFndmRqajQktVs2wH3wefPC6bza2wgAKFYyQmggbyoswUv3sqA5ipJp7SNhy4VEVnyW",
  "key34": "2YWb5uNUFU16S7fqS22mjLXnke6s7JR6MMjCZtV5qzUqvmofqhY5mzMask5aZtP4KkDZGLgDHvzXq53UkAQ9gzXh",
  "key35": "5tWfgakei3d7ufSfCi6ZYMZ8JPyzan2QTxUowPuHJYVS2YakP59rzHGKLce6atofeZWqzbdoGYVKGJ5VgTpg7ZYz",
  "key36": "ur8kSuXXMMbx86Eio5bwBXxPm2J71F9RZrMWXYUdpe1SQrzhqqQvp1MxGgJ8Afa1yWn7aNhbDRQJiwkXReZbxpN",
  "key37": "55EWrS6xxSChyL9fqEZaBPwesMVA6VCY657i8D4BHagTCQw8Zrt9fCYQLa2RRzmP7AroB38m4mo2QLsUnqvePvNc",
  "key38": "4fKUY2pWMnADJLxhdHsSxXB1PSJHMy1ukNRw4LXQYftqJBFiujN4FeHQhD6vwHEHMvQLugeKh6HEpgV2iH8W8U7L",
  "key39": "43akQmvTncu7XDJKLYZMFxcqxAN1YuocUMJ5hijrHJxe8uSWAF4YrSnNzqgrLuyZBSG7nN47CdEse66iG3jKcbi",
  "key40": "54vPgaBTUqJfM7mpodR1wwEaF1NRh98x3USZFjjacbrxE3QfscUH31TBc2vEAUuMTBKuxfTeXWXYdU9GrCqp1Zc5",
  "key41": "4PmjprjnZFYX4ArZLGYHuUwMNFQTJTqqi36PHy1cu3CR6LM1tQTBtpeQc2r11aNddKfQUpyQCzuHnP7fgRKYkonU",
  "key42": "2cqnyBdW8CLVr4sjZNLExVDXvTwpY6teuurjCL6X7uVR2bh9iU62tJkpHriaMXi89nWUHtpnR9CKhjfySFyFcwx"
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
