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
    "3rmDvUpB9PjdW8RprgczLZX4LuupXXi68etp19DDyt3UtAWV1dgDipcEeThfs7ZdWSzSmtxUeZNCPZrHZhZuW4yh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DVmSr1xHfcZ9ECeyrGwGPjd2uUK5Vsh2QW5ywy5LPwgfV2kD7ZMYgH26hMRzdWzBmxj4QMoHg7W8a7cz2K1sQs8",
  "key1": "oUAX6uHvjohVJVAySZmu8UCyMExcqDvpAHkRsissv6kaAzAtuuD1MvohzPPN2CquxwPYsYnKJRqkXWLywwFZcr7",
  "key2": "5Nu9YCUJSoJBqTLXNxqykHPL9C4DtN1MM7KheZ4CQKm3vGuXZPf9pAUXGju8HE9mkC3zDEPDnwpRB6h7bae2Mqv9",
  "key3": "2DvLVMtMC8bMt9oAg6NdsqFogmGbU65Y6XAsUTBLqm1txZQLm9s3eYPV7iTYNNnFhaYdZREHDXHN8s6V9dAPMYFX",
  "key4": "7QMizTiKeEMJydvzEpBusZF97rSGhSF8H59GvXuH4PEhBr6YtMnR7WQaKqtKLuqsggvKvNG4SuJi6UbxjFZBdfj",
  "key5": "zRDkCAWgmus4aR7HCg8CRBqzgGzXHVXBbey9JmKyAeXQTCk5ZqNqqMZAEevvqyyxoi2UyBP7q3rrLfWPshFJYGG",
  "key6": "2C6DkhhWhrYhThKrRwAcKMr1SwJwMnPvhEmxhfXnR1mAYN4mRL1KuQm3soHaip3s8iiCByTtN1dtZaxbSeEmebaZ",
  "key7": "2E2S9L5gV8xYuydw7tPJ2xXqUTFGacEoCV6Dt8Kq37yJYE3evKshmJaWGDf2GMXMD9eFfw9vMBo9bcVEQXkgnQ5J",
  "key8": "3nkSBxryhqDEVvw3JU3HwcVX4HnFM4HgDWUPYCEQtG726tbhJYrxBvEJS3BV4F3YVF2e1CxC2uLKcPtPAvVdp95U",
  "key9": "4Pd1ixjAo9FiuSd8GFTK9ZUPC1gtWSQhnWVCewbC2SrCJ6FzApMbMNj5zzPNP7BSZtT4Erm1RdD1speu3B4R3Qet",
  "key10": "7CBnWu9eLkXRWMVutij8DXHumNCGsqwDxYUaQg4fPZ6cS44zaSEguyPYqmK9eCWAPX1cJqy88r79NZCrgUWWRdm",
  "key11": "2GWtADud5Vp4TzKyT9KUHR2nxKgK3XfZs5qmdFCPo3AwoGESY9VuAL2nepYaodMdrvXrNV5r2nxZWB5BR8dfWKgB",
  "key12": "5P4tyztiPKk6k9XVB8Ypxu8w397qFhx8NJzZhYqqK2Gz2vugAPLDv3zxc9e8Ru4aDwt5r9LdMeviemSuRN7q1g36",
  "key13": "k8XBSAQ3gsJQev8uyeTY4EeCJq7N8Mdk77NcNghpfkvfWVXKxz5tSis2fZzNKthAoFxBmCycn1UWxTAAhjnt1PQ",
  "key14": "3158nrrpbMqwqmHJ8Tq6vCw9TiQq9YHEBsRT8cMBaLQg9YqEdeGwdP2iJr8W3LpyCMibjrMikAsMGSTEkzd8rWXt",
  "key15": "2tAjCFZXTY9fgx5ysvxtxptX7h7W5oKqeT9zqNEhbTzUhvyJfbcqzTVrrDrDwLkdivux7QYGKX4Si5VrDLwAkW3o",
  "key16": "dB4vP4Mk1Mt8PUs1TpCgeDkQNQXJX36RLV5bGY4GbJEoasvgnzj5PaMwonTJ72TknCvNz9eMXwUSS3ZtaXELZ8P",
  "key17": "eSP8ddf4YXeoTAnzNCu3XTuHSbs9eCyTzvzufnCyeYmERYJJyVCQR7FS3gqKD2orcSpokVh132xoZeVQzSYcZeR",
  "key18": "3WyYRGTUMULdDfM54H32VBJ5EKrjeUS6sLnxo6cuhtyj2kFQvykhA3GBhgvGTPB2YgHsPcXyUz71ZcCqYiPyp49v",
  "key19": "2cE6kSPgWfMJB9L7K7RYCHs47aW6zC61SVphqnfvD7zxHJsy5RvkZuRMCLu9agYgGT33G9LHPgyCdMogC3Tg8SFj",
  "key20": "VppQjqFszDUQmtU8uxzmiLxUKjTwvoP42KZtmvYWDiH8SwdFBfj41RdULReJ7MSYyKsprJaPPobWy5s8Uom7Yvm",
  "key21": "4EAqfvALiaWDfVo83AKdXEum5gCf9uFnnfk76W8qD6zAsYvQYuWzyatAsF71cnq14H18npso9F8BMgEeCVT4TSRu",
  "key22": "3RAzZKr1pUfoZQLK3NTM8ebW8wXMyhfPYWP1X2GHDwreRLNe3tr2MBESfQrEh1bmLWJdWnebtYh3D7ibezHG2xAV",
  "key23": "4e8Vpu7Z3EqoaacSsVwcCR2KZVqMLqgaF9YWy5SzfUxEWe3m7buMcZPFmD6EQNFDtyVykeNv3VSoXH7jk8cpm44r",
  "key24": "3QBo5eWWpQwbuSyws5T7cXvoYhkLLQWVAE5KPtN5SB7JykubgDtGCHDWaMQPsSEWFB54XdfBy84kEFM2L6Nw8BGo",
  "key25": "vL6QXDbJZR3HRRH2D95ibbXaDFqzHQAhB7c49ZqEeBVHTuZKeFgNgA2u33yrTeykQJUayUczEJfHFkww183tR7J",
  "key26": "5S9yuDqK8PxjZV2gKCcbs76qMnpkZFH8guDW5eTmpTJyr8Hc3ShEEirXZn9TB7AqamFvsfbRhTCVddQC5Qz1qvuL",
  "key27": "b2hQvXNjkPazDtuHBeAn6h9AWoiXUwZxVhkcT1F2kMarSTL7PYFdDLUgYarmdv2vMgyth6jMZL8h7w4V8caJCCk",
  "key28": "4LyuVD1FPPo4d9ME4FT2cSeHBdWQsvV7xbZRZTaGc5N593eTzPpkYbiAWQMZkJJHty976F3XtdN82vqoEYQmutvP",
  "key29": "59DF14QJqYp4mzNEZpwT2sFpG89jCHtkjz5G2JEh39JzwFxxLeWWdkzGGCJvsoSqXcqZ56kkLrb8HQTwkTZTT2KS"
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
