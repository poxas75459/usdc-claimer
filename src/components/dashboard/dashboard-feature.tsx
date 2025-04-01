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
    "5Hu8oNoEUDyrcsRg6gECr7B31pixt7Lw39s3BrkM7pJdiepQE3C9q2DjNHkfLiFNRpYwM1wHtQ91zLctMGjgK2Nb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fLgA2ZMkghQJDoxSkfemJa8sfFUrKCGv2e1UWiMNMWgmRvu6eH9N9HE4ohBPVdButwWR1SPELxjg9UQnkqpyJLC",
  "key1": "4Ti8xCq9NKh9KnLPdecS6U21zRGy2pcCiNcqDvGz9gFpkRp3F8K6YjzJiJuC4edCunh2R2Zy85u6FSCHVy2kkJZ3",
  "key2": "3Uw1F6RMz1GBTkw86qEatm3Uph3GqK7UoyWH99Pcx8KYc8Fa9AaFEqopyzCLPXYc4YngUjL6w8EGQvLrQ8Un3xyC",
  "key3": "2Tdh8GGp58TfXVBJCozVRydKhJaYkecNSDHDUAWSuU9fmWsN4Gv6JHXjPEbaSSvn4KfN1jJ6t88NvHYnSNCn9veX",
  "key4": "THh8eDtgg8vkczHSPdyEE8GNrnRqgyWLg1x7SQFCQB7bme4BmCo7wjNGzPWi2KmmidAYpabZC9Ad8qmyYoKoPyY",
  "key5": "4hEGbqFssA7FrduUuHf364QuxqwQtULZXwQ5VEMojTUxqBEVaFN3P2jdaX6Seae7ss3aXU5cDYByR71e83CxBhY6",
  "key6": "2ME4t1cHYQDsZgUFXa3rCgaefhCa7qGU7N4pZuvbp6tmBWoysKFnpdAZG7mA7sRXtURRGwiSkBCgM3SUCx4BtJHZ",
  "key7": "2yBXj9pLiJeHochw16C3sAWdkZPBexdsWrHyorobcSG6XACVGxzb9JXej2utaxC43ghEUrQz9Te6M7aKXWJEVKEp",
  "key8": "4DfqhsAAqDMTmxXy6YFrURhPDf23kjKv1E5Kkt5rGrG3sPCoJBMdzeuFnHGiniQkZpV63og5PQyxNLdCdyQm5P1a",
  "key9": "3Qbq5jeArFNMAwyPBsCMyGYWwDvkwW1VSVna2g1HJtXTBjr13CanwreKds5x3vYPxwHbxtMpfgBKoGuNAfxYRrEz",
  "key10": "REf9kzYNcVg6vtFexe7nugmoaiSzdpNAhs9hy6jLJXwUibJv9SAuPt2osjUBSfMwy1svSBj8AmFyxG2H6CS6icD",
  "key11": "MxUsp2UZ8xXjRuVuSeywJgQUeN9Mu8zdNTDe67F5r5nUbRHwamDtTSVo7zb7HVEano6WRiGV6eK1isQQpNrw2yD",
  "key12": "cn9JPiNZefyiDDtnedxfZTVddndx7rGsbF9P6sSvQ95Q7ZWwTyCs9dayzqn6NdRUk6LPLxgPHfW7qBXyndxU4kj",
  "key13": "2YLYWFAxZ9PsBb46wWaLmLp95Mhy9D5Acb6fSvpCK6ifKkukWAhKV8pENnkSvxBSfesNBgA9fjCbZN8fZvVeu1h2",
  "key14": "KL5dyACkxU82w5sNW2vfLbqrhHHvx8mccNMc8kcSQ962dkHK2wetY4sLFxYHNuS3DxFqewP7who2CifW5a7JmvR",
  "key15": "3G3uoJjUzHgdhLivypMhn2rBMpnXbctiaeQM8bNisTVc7xAarj1QUPdq9ppM6aNMXc4AffdaM4Nxg9sNvHFZhaqp",
  "key16": "3N4Pq4gYVbm587iVamnHRA12EagPDfbUth7YfS6p7bjrBLKsbHBotEgLfyj2So4iphYAyhbg8L24AsbLdvoU1w5P",
  "key17": "5AaMM7KUgajifEUy3v19gZF4VTJc1Q5gviShFNDid9fqEpUXjto3FJxn9FeSNZ68PYS1kTkDnDMVV1Fe1GfizyR7",
  "key18": "jPkkmEcXtJTPwFxCovryjnAVD3tXhw9JHnvncKVWYK9rj98No9NnniNgqwfQdaj83QPkNtYXodv2vhQYBMjdQf6",
  "key19": "44mKXFfVJCNQXKt2fV8KvFSRFwFxk86fvRCydkPmAfm3YqQf4JEyr5nj4jt31iNDruBn2YrHdMUynVqvMvvoW1iC",
  "key20": "3LpDAgzqkTAMPzo9Aocsyf1CLexubKT5HA4Sd9yKNv6iMhi6BX9YANQ4jHhYLRXQ2GGPn4qrdRsJEQb9nqxPn2ws",
  "key21": "snzrYSPm828J3ZM6PEQooG7D7yikafTkT2SaiMsuhx9yzEmkoDER7n2u1Y2rZs8z5ZFxm4mvsAdpe7RNgzUGJvZ",
  "key22": "2PJGpEzv4i9qmUYnmc194HuC8AGdrsdZ4fsvWDrn4BjuY9bMBXNwZaFLbUdPtAF92tK3qBMWyYKSu6MTxg7uEonX",
  "key23": "5aeRUdGXkzHmYesQM6uU7tGS9hF3kCdb4PMDgstxVPeYQmft9YDnpN9bYerMtGovnb3p1xXeF3Xcps4gTdsVJFXA",
  "key24": "257R3CdPvQHpKctSQndWEu5ktYpqMNv9pMyasZfmuXiSYGfVA9vYBYYLtgXkwiJPVvN52SZDvAVQWPaiadB4WE1r",
  "key25": "2yNo1KL3KX76CjKJeh2aQTUQG9hPb1hWYgVAGGGcVzVAHt77Fzp6u3RDn6BTUProL1t8B73ktSw7cdnmjxAocXrV",
  "key26": "5NJpRh7kCKZSXVeNWGw1BxgBBDrrTBA51yGLggGdgm5v7hLRMAvQeTy74ChEDmZEMVz8V2uMfHg3ooX9wcs94Ao3",
  "key27": "4fKdp7iPEhAGLPMzyq13mbo8fPR24Fy69L5xMnVs1WCn18TQwQiCTGvAKHCQN1gh4toQLu3fTQHhEYT9kkySFdLv",
  "key28": "2jFq6P3uTY1m8pvnUXcbcTCC6RpkRA9srPxzHiiLm1fbZkghGiq6V74e1Yb9Vbw8knPWtgbh8FpsaD77cjkasYbi",
  "key29": "h4qCEieSge53C2qzd1Tho33312SQe1QLrPcrWEYTWcqScNyKSSpvkeKT9a4uSS2FQCeemQPpzeYdmDp4dQfM5qz",
  "key30": "4jzNGJ3AVbCUApof6TzYBvp9mdsteDXG1L6inHhUYjQJrEbQ3bvwLfZLHdMEMeTTBjRRxBGnfRGNbmYpUVCk3ZqS",
  "key31": "5w6hmCvgNdPm6PPyhNtT2kParAJGLVsDNeET3aR78zVQew7dwpzs8ujuuuEfeAZfmM5R1KnF6yk8QwtcKZXcSiA9",
  "key32": "2TY8M4GdrgNdjUjzWmg3xCNXzjmCDmasDDUM3KBNgFZr9QBtXwd4hPGS9pPvoDXyvno44r7voFuSZQ5UTBRaD8XD",
  "key33": "4FkjB97qAoPwsiP1AHLGWSYnQ41MjVnvZFv9pmaimf8NrPcLTtV3eSCys8jrA56MFjrUtBcetxcbdX3LSRGsKQ6C",
  "key34": "5GgM2Yib75DrZfGY3AAnCgKYGSBzdRMfojshCTHcu43TGk6LVEq4qdZoCpGb4vqZLw98uAeRT2JMWTvb8c1EA62A",
  "key35": "i2EqNKPRRj4Z5qJndT72vxACR6YdWMSbjoMh1HdWcB1cTHhDq7q2Cp4nDY9EZsHTy7bT3gArRLuvADyfsH8ioAy",
  "key36": "5kDe8dSrgp9NAU9k7RCFY1M11u7m2hvitmiPVAWNiXE2v2Vym2jxmdaxEc96d6Yj3SKvZJmmE9ogBF2jaQbjh7SV",
  "key37": "AuTfgFbaYH8zQP1r11v6Jt9FqpckxiPkSgKJVrW7XPgXCdkwjBF9awMfqiSrxdxjMwo8nHQDs1qzvUpmz1zjttg",
  "key38": "3V6LxKMMSgymAKgdaMr4xYi3kKk6eeNp5LCzBihAbs28QWYUUeXereS8ZDhdq38sDjsUoDuTfgaHPzpxkcNrYhTF"
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
