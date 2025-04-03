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
    "4vo7QwvfXSBhSZhpguZ9LH8cdQREnLWWd8zw5kHwCHm7M7pW8PVpBe6uAeJk6F5HWY32CuSG6J88wukSETwj5KJJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2do23z6JqVq6FDNXvJZJoaEan5DymeBBYkGW4ZaQDyMisRagrUbdnh2tMFGCrxbiUKfNXLSrrEcGaoh4gUALdgxU",
  "key1": "4JcNwdsRCyt2p88nbtJtVQJ33YSHUYeSDUoLQEjq1nm1GwhZm5Dx5Luv3UggBKRVddfvxXTDmHo7LFFoGgreNkyv",
  "key2": "67gfq25YjmfNb7KUNKDJ8GYEMeZaPBikV4e9y4LGfoMFe17ay9v22DqPyweCQrCDb4Ww3jtVzNoUBccAuZBumhjY",
  "key3": "3aFSo92WSxvTCzjie9SQEckwb6DgUzM3wmYgZX4V1Ku22YRsHHsdxBn44aCwJD7UgmY3PdD7GZJCwU6UaaQgMZxX",
  "key4": "545hSr4fmaHKWGuPd8ys5wBPXi45BvCtLHeZav619dSegdyjjTijWvDoC911L9SjXNPRUHh4uUFrE3f6G1v3LdAN",
  "key5": "5qpSeY2j4yUT51PM7WBBDKtGR8NJRyQbxFN4bPg6TMEHpsZqJvFd76L9ZWtSq1ie4RLy5T6Tu6STU9MMSbxrqKGs",
  "key6": "2MKdzyyBkQ4swvz5vpWkYrJwjvmT4JjxZfckyCB4CQq9Bhr6pdL8UHSYZSWKfCzoJFkywGR7an3PMMvxEMD1qdkM",
  "key7": "5H9zdEqXBjcwy41s5iWj5WZNuELZomnXgap982pFR2vaaSp6Yrat8pxwxgYHE8pNCbewJZtf4y4AXaEykTuokSZS",
  "key8": "EYD7Gj1kXy25RBpd9YiQdNNpjakkV6pt1xo3VoMmNGJMsmo8bdQhxD2aTYGbuq5xj5RDwZicSxk6zPhr8pzHnVr",
  "key9": "4oAjEBWuk2DNNcwAVE2FhUYCvGUFJuMQ9hrvbSuPjeKZHCWc4jpa3gSwjr6jpr7fB4wTTczrYfwpqnZYEgqEY7en",
  "key10": "4LtsFJYMeYpHwTLXjRb1yiDJWX8zWnNuVQoCLaJ8gf9eH8EYtr26QP3GaeUCiq39iVxkiavuyyArM5ZVPUKWc6Bg",
  "key11": "33zZCEc8r47Gde5u5WqNpJvzJh13keSjUgDbsSePiK7PzEhY8ntUEQH3z8srzdaKZu9Rct7vCHUCbJYaT76wfiL7",
  "key12": "46Wcda15RbLs3At4H663W9eZYpKcZ9ja4N1vLov4DDhb6tfkQ6Kd5phLLnm9cHoJ8Xg4DVP5oGHZaYh9CChCwy6b",
  "key13": "PdejZ1642qm3Dzht1u9eTJNrxU7SYFgBc7PfN3yuJjpwCauJPZ3QzzdyVbpU7hViyKMkawF4d3iEMbyRnzgwXaB",
  "key14": "MHkcdP7F6EeS8NrUSYsVvoosBxxikQzJT6aVNoJQ3aXGAAWwgrX9fDYYkCeiRF5ooZ3G8Gdx15Dt2YwzkMaTDN7",
  "key15": "4jqAoXVMVnydUd1Cz19ey5FNZVsf5bigbzKjNyJkgrjVpc4qnkuHZqXjbxMhfcdXnT68JfzU7URtap44rLBRPiix",
  "key16": "L8mZevMmjVic8gocqaEzYZuhFKrXAP9F6GX4poYRqrZUpNoaWNRFyfGEm1syRLBsv8ECn27arjgyraFMJDKZEPT",
  "key17": "3n5r3X85a1pfuhfMvca4dsyjn4c2j21LVGU5ciVA6tEnYvSnWUuEVit8bZ9MC6W7p7eCPePHr3ymxdZpbaduaPkd",
  "key18": "2R88tWhmMRZppAjgzHabW2wPWx5j2XiHvTYdg95kGs5vrWVzAFHqbgH2HnLqP91u2v2UDGRHVEjJCKssbqY8NV6n",
  "key19": "4vr72Q3VCWL9eztS5ANVTMUbzpcLq8Wcp41hNz14VbJkfRDZbRCrLc8aGHPyrRyP8iYvPvan3g7C4uKzr83S52YH",
  "key20": "4c1uL7XYVg3iqX25RGfDtsc9mifWRHWMDi3E9QN8rySyJ4aUdTubNRixbY5HVXUU4gi2hgoWYTUr83s7TzXeajCf",
  "key21": "3qVAiXxNbGfejGRDmNVJf4yZhXSiPnbXxacVDrJN6mmCuM57aRhgWJjf8dc3JN31KY1Hg5JrfTwSK161NwAA96kH",
  "key22": "38C2BxFwKnVFRqUQBajSg6UUfj7HVhoYVfHvYeZaCk1fuMytpHNW37T6NLB9GuQX9GXxReQ9TPMJvitbtAceawW7",
  "key23": "3Qx2wvW9H1zaKoactPZcPDM9jvxEKcbWQ8TZiX4tzGWDrfNXwhfLWZPmQ1uEmB1qn8ax1rCrV4vo9Mt4x2zr7nmm",
  "key24": "2BcfiipSFkjjQ34GXpvHSEA4uMVEU3aVUGxNpFLN9YYBWqQHa7zmaFoKes2S6eWXsk6sjVizVahynhPpXD7YErsk",
  "key25": "41xBQjnDDtXUkPLesGbJMGAzyAfkP88bSLc2YEbCQsM4Wx68wJNw8CXT8s6D9vGp3qNURZy14xMX7kVuScN736XB",
  "key26": "2jgdeTvDCApHNPoLu7cXvqynCWCCyb9uTfAUVwSvppvaSjB3mLCH3tj8WHWkTmhSaAGFuXUYp1VGFf42G3NurGDN",
  "key27": "4oMfCdGcpFzVXXbS1mkUzjD8q2BZGkbvoBqT3e9v5XKev5fDjwwje9EJC1GfsAnBqDwbBcsQDyWHbaRDtrd4C1dS",
  "key28": "4EBUBve5Ms3tpjd5q8dEiyGskzAKb2WAwvDrhYqt34fbGsjzHLfvQrFhZNDSGuLZnRXGGAVYskPspVfXMxVqmvJM",
  "key29": "5mEJzw1CuQXyTw4wYvx5oEt81G9artfWADCsGzcRbmBUm18ux7AXqD8rhz9kCRyMoYApgu6cPVZjS55N7JVaeNqd",
  "key30": "34QJeExhZ6nWXHRxH6fk69nT7osoUpTupxgBASrwFqxMmuvS5uvjZ3bXXusE8UuLMx61aZ2eY8NZYWEkVd7vWGAg",
  "key31": "3bp7CL6FkSnDRTZE61gYSdfiChEb6bTarUgmzGqqfEjNjYjFEvDXH1FP9N6VShs5xDHTXdp7zbVJcrSm8k2P6hQT",
  "key32": "2RMtynLByoUNTPPJKygrvFA7a9yLQbnbfJLvsd1pHf4FLjQyDxxAcTpqQhwm6EH5crUDkhWzHSKneWupXLUU5jbX",
  "key33": "5B9HzXBff324EZi51w1eBPxfHYAtJiuZ6jUxfn8TJwBvzoy7BB7Ztoi3mj1S921TejLwRAcCEfWVzPjwse5rSoyr",
  "key34": "gM2Kdio48Jd9HehmaZnsuGsgCF3ikPQj7GviF5gusVuwK2kSvwFT7Bk5EWFPe6Yx5FAZ5B5PhsUpT7Qc4uVbnwm",
  "key35": "5RXKgM3ypKHVus1YWPu4zFS6DTYK434fYaYUKgS4nL3aXuuMJdkaQWatzgd5hSbzjfJjE33TbaeASZmU8j64Zcxc",
  "key36": "YUsBEnJM4VKUeUHJCcyZ6jg1HYVAaSKyovfzgmuXoB7o9no84LLdW8BNRshG5RwbRyHXWEDznB2WMyrXRnZpYbV",
  "key37": "63SHB9a9Eq4v7zPieQka9x3V5MYqBRBF5iUQqggXLTFbnBhKbgM8Nwyo7jbFaVzwvKofPwijPsJpYuGcV1LVaeTe",
  "key38": "34VN7FwGkX5qsqLD1Foa9jo4Hp6uQZdTGyZHV3VeJFfuFuqg7gy3mRZfWrPeVRNf8UtDzXWM1Bos92Fw8HtmF4jw",
  "key39": "4ogLjDT8iEwKSWr4kHBvPcnYRxTQScDsjhhGYaQC4jjkdgGbJ6tpuaNcTk6fKk8mYgYXjAkARwZg2iiRaaB8jdug",
  "key40": "4EHdBkoojrz8Z8m7TSbZpVHBfLMFKQNKKWWUTm24mV7YBLNWSig6jqeGGhTusWacbRgJwh1ZNoDYAFgUbUpBRtnX",
  "key41": "3UhCoYj81X2dSM95QPXhfkyNvDfhx4CBBJw68348f431neFkBQnruyXuaYLYoy4zEdkJ467RFKiDNCvwwWZTQnrG",
  "key42": "2c1h3NHnXowdjabKzYBFK6fiEVfp4JgU44VDULn1R83bHByM1GM73t2gNn8HMrkQ2j3jS2hv9sLgYktH8CFrp8zf"
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
