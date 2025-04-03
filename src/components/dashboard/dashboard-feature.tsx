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
    "4sS11CB8CZcpWLMv998dkWFXQBeqXUKEcWaJ2vCNU9TwVnWTjaoxxtsdcQUMfTtw6zLuspgmk5w6tvT8xV4Hyb1p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rB3E4Z7xkwA11wPanTDvkwooRMacr7p6PZkdHjd3GxquN89yT9gtvGgJ6u4UBfiQCMXnCyqfanSYByhq6nGrBjo",
  "key1": "4CUogX2WUC6MvzB5xYo9uFoz1rdyeT1Xj1G1vmSNcXs1u44jQpDU8vAy5J2ifj1UtyWjP2mFytR6vi23jukUbHm",
  "key2": "5knL1foqPTpS64CCdjL4qpHnkehiAccaexWMTELCZf2YGZn1eWwU8yWGZGAGovSfPgCxC5jUsHc1JM2RbnaUgHQG",
  "key3": "4BufebTPE6rDEjJR9EVFrgxtnzyjzoZtsycBbR565hvozj7tbg4cRwwwFgcmaxHCoyvAmSgGZmSSQhkhNWyhNWZU",
  "key4": "3astWZ7VbAvyAKXYjCJFdb51Z9bWLT7FqDk9ZM5qGYiANJmhS8HWeCybzC4ugwD18BBUw4tmyEWKGXQBkK4dKPeL",
  "key5": "rZ9BqAc57PEfXPfvApy66h2nWAwY1WkwbYnkk1H6FRZpywVsLrCdHAvpJdo1XbYd2ke33EFSTZJ69MkLvDhm7LR",
  "key6": "4WS9RBQyT5MgC854v5Pqo2GLv4f83AVwKBCd9yE5Hyp6xSyS2q1PuYrjXmnwpuy4YCy8H68e9Sp9YbSyTsHuNqC3",
  "key7": "4wXMAUqZzUGCbtDiJZPYESnuQZE7Dhs9TJUco2AQvEd3VricDMzgdwVHM8zy5E4tXrXkih24UFi5Nfvt3NfUxt9Q",
  "key8": "65Zg5woFie3sX7Q7tTfYDVKN9xjJMEGFtg3FvGryb15Sxz6Fj1S9RmNu8sy85bmpEASuU4dKmB6VCCJEyUS89ezQ",
  "key9": "25U8pK3TpiTJDTJuJB6rsTM5nDQjWBb7HuncZSC3pU61MvoSRyj9Fy4zeSuHxpGpBTMEwBqXNWTFLdAF8QPTv1pv",
  "key10": "4PfTWzBo9TkTEYAKrVk6EWg3UEUWosEa8H1Gowhsq1j7AwkdsqpkQfzGETANJoWmqmvaeaAqjg28su4BHi1JiwAK",
  "key11": "5ANKwELMcALvLoCP44h9DDyjNWbYCzZynrLJZsYfhBAg99YQbNLCZfk4dnvjAMrYWnU34BvyNjpXuffnrDRbZGJB",
  "key12": "3SEbDXqXk8mPe5MEmRaAd3TwkcVAfT6hDZZbG6Y9i8x6j6U55dzh7AD6Ny2ntSBynTpu6YoNjXqvwnu25uMGxnaL",
  "key13": "2qEYsKrMtsmTCgkp67uYH5UWJZhnciNqAQLUzCXjpZpvgA8L4fe7WBvjm3DHLcQzwJim1Hg6oNbt8MzkPv1zp8jP",
  "key14": "5MDJMYgUw7Cj6No66B9dC969QbUx3xCYqZrTnocT5fPVd1uNYm26ybcvehL2WUYESCF8CYRYtUo928n9dBn95KEq",
  "key15": "5Z7ucpNSv65CLo6abdQvqMyfM9E2EvrnMCb2sEyzudFjrG2Yu6W5DShUzrt3HePJ45wiyKdaZtcS2XqFLYEYEVad",
  "key16": "4TXD4ZFmLKDb2JYhU5F3itxGmHpweUK47RiB74jxwhHnwrwxRiWcmD9MpyRGST2R4nG5X4tcAMzDSsJ3Lp9x28g7",
  "key17": "31s7t8Jt7kUJjEyZPuWdyJgLRpnDMqdPNmpogHcVsVhiUZYyKfbJaSEEEobnnehUonEjD9XABq7uDHUa22WrDF4j",
  "key18": "i47MnQUDyuq2vaNfyxv91yAi8wNgZ1GkDG9LVJPoVaRPXhinZBnN8qNpnUu4C33szRd92nqqDMigWnyBx737bcg",
  "key19": "2Hp7jpiure6fWJujenFafUpYLGc3NhK5b3AC11qbQBDUjf5f55knGhcfGaide8ZR7wktzFUWvr42Phw4k8PbKkP5",
  "key20": "dXc8d7JHYqJooDc1cTKx7zJNRKj52sAR8BJUQrJQuVaacBsDYMbLv3Fw6Z2fi9CtEvMSVkppp9iiRV6SdUfVarB",
  "key21": "4xu95VGwUpJkaA1J9r75CuZ4jXuo3Zam9RREXn7av6WwMVo4xRy8AzQJnNZLxqb83nWyw8SHz3koqQ3eckfz6C85",
  "key22": "3WF8dPJBLyMA9VFhyszxwxrPUVivFno6C8svvCZ47y9XnfskTYLCSN8bwvkC8BYhgEQFuJfJ2r96jmqCNznc8cnG",
  "key23": "49ScdHiegMnAB57AE2EuEAN8y8rvaYEL5cGV15XL5yzDu6Yb7hKyDcA4xVWPPUG7MDRnvv21kBSeFK3zn9py5cD",
  "key24": "qzvyMaHVGcY8NkZdL9AtbXDVHUqKe2CmkCS5Wa3coKhUyT6ZyEf5ZWYXquH5sMbq6Ab6nLecpNgLmodQJVAAjyR",
  "key25": "36iPuyAVmomzD6kCHTvneJ5vWGFcgEpnUDk1rzdbkxsMPbfgGdXFD9CxdNFxYyLjYbkPePCMrCbYL67BGyH9Cgkf",
  "key26": "6wBY57vbg11z47BTVbiwRLGFHsKGKKAB7EETa8ngqy4CmxJF7Nc8LmsLUDKWzG4fgemg1mVSQAXSc6wzJ6fUosx",
  "key27": "4X5BXFaHD9vGftyYwWoJkj1FDL3FQCrwRLQKymBEVbZvN8bsc9xuZdo1Lz3dESyU5ssaH6evGCZ4K12TjTLYA86n",
  "key28": "2NVBVR7SNU1PPpgjsLj75nkk81vPfSURD38cVUcADk19esp3GYvozxfdABFfiDq28mV7r8aRUgaR2SH5Z5j97VaG",
  "key29": "2WyV79Su6Gfd8BepYTkMqpW33xEkJhqNUkRAEWGKceH6YYsybKihUxKQ6PZ9h7jbGFNc4VoTPfW2cXAKRaAsXUyj",
  "key30": "2zyY4Tz1eSnWJq67wEb3dXQ7PYFGQvjq1xKxbUshWk8W5Fe9Tz7DCNCiMPWC9PEfkEmunBBmtyKSW5eGPeqNLaCN",
  "key31": "4arXnbbJJdF4BgdQGHcc4y5Kn6KTcVZPmZFKhGLZiJJS2u35mYhdUKgBvtKucGrJesXpneeS7qsD218KSxNAvBSv",
  "key32": "iNXCum1fVUrCjXE8L71Ek5L85TZPze5J66sJrJUnEcQy1wET8CCbhWwgKDC62MR4pKZE9DU9MpyMQhoWNP2uW2F",
  "key33": "3j9KqNLcguokddjDNZGHu757b4Gwhdiz5jBgUE9ZqshmA3TzSJRnomLWF3dNM5cSSX7wt1noXuMgWqTsxsz85mDC",
  "key34": "4LxgtFSYcd7u42jAL5Vw3MQTaoV1okfz3zqQMX7jqLLCYgm92rnVKHF21koWrwupf1n7CuNVuFqBN8YGe9nrPJxH",
  "key35": "3wvwLeJwbVM4L1MHH8KhNFK3tDApQ94rJt8b1mHayZmhWVko4VXmqaF7D5NxzuRLpNzfoXCx1GXbTRrp2BEGCAc5",
  "key36": "5JWJAqKdKqmQgoervRiuHkMzqNWxJsDj6eSC6ufiJmJkd5GqMhdXTxaWsyQ8gVMWYFvR9wmqK2gro4eX8TPYwY87",
  "key37": "KW5YF9yxHLns5Jkvs4iXb9M9W2t9knu9JJGWWjBmR6V3rCQfXZSw3XeEMBQXzkkwQpMUbPWH7tsLqL9yKdxv8A8",
  "key38": "3ty2Z2btSx3zcmb3ZLiZozeAPyx9ST7bJFYcoLJj9hKAaiXgPCXGMpCoka6yF4xgiF44D5L5UkPCXH1psKTPSsvx",
  "key39": "d85Zpwg8VxQgBgAJ5dxY7edfF1J69myGR8YDCkzLiiyhXMcM7KRi4ntCsSyhU2sLXhtzXVJpLXkRNo3uK4LT5wy",
  "key40": "De4RajzzbAM5FZpLrStCChZkgGaLsuCA4qCfx7mEKUv3S45vAqZQrEum4F98eHugLtGNLQfPVYafhiUV4h4BEwo",
  "key41": "3NbArCUzZoFKL7KUaAnY66agScWXmH2PKyUpRkjymzXyP3Tdrk9EwdpuSsXQeeqcg6VDtzfq6drxJkiNk41j8UEa",
  "key42": "2uCRvbGPJkJq22tzpyENHbcnrGayzyg6WbdLANNLGwt8thLsEjUpvBfcMj9qDM4bjgDUKQsonrjdyx4qFyGonyEL",
  "key43": "tvAp7LjSKobDF7EkNnHVAzwY5B7jPRrHBRMimbobqQKFFfGEcvC1Y4Q9naxKspuiPFATvzmaqnQYUxCgVDMh1Ra",
  "key44": "4mPByyAAAS6rJxxSaLVijy8yvn4gwZ8k3bo4poDD8YnA6S7JdQXCfrcSL7Du1prHjohCRvAp31xcUeScCNm5dKPc",
  "key45": "5Qr9QVac94m8e2SSXWzH5dfYtVFkNRRbZcLQScF76ftgsAxxrRdDVECssRyfSemC4BEV3uQmGTcaBHB7MF4eNhPT"
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
