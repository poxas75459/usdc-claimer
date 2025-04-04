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
    "3L3KTNF7ULC5TKh85zyUoCujmdiVGosntCoAX9re7DQRhV4rHR7zDXHbV7o9XcA7LePkb8oD2pyYyLpe9PSdr4Dc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M2SdAhT8Njr6kS2ZDA9dbt4DV1A645qU4TN1mZBaGagq1u9gkzBsdeW1Kmnuyic1etNtbnQgaTufVvw4wxaNojY",
  "key1": "5LEW4sFQgkLXMnndE5wLUKpnthxVRZtdakPKhQThBnt5f1kEZzE5hK3h4cGa2VY7hEksaRqALJjcuoMfDDqtnbfc",
  "key2": "4QdLuUQuYfDTWDaaSP5956mGSmHFYyYgki2dcd7QHjnd5fir9ydqMBnE1SHE2iF2s3FipjNV29sVS7zLMNJkutkp",
  "key3": "4Dd5c4fh3j6sRwriuJJtXmbjZUdBwpZNvuCrD1GhVGWotWEiMQTiXDq7X587TaJTq1Rs14fU277A3msciWfAM5W1",
  "key4": "4FVgiBkRHPRfwK3i6ggga7xBJbBh6qSnqwTbKmkFZktXDjY5BZp72k6vzCCkiEnQdVPN95DE74F6tg9bxhCCsnnm",
  "key5": "27cb1oXY7q54v5JVmEmrwez8VpGg3TJ93aK1uwcfHA5n6M1RWY8hrsHJBib1iDSwzLSXDKcsJKtwTR9jhxnmiCS8",
  "key6": "2Vgu4CTpUdNMRP8aJJ7dCaTLcVwPEqYfNSJ8ubMfdq29N68jFewKZ7XhxWRBVLWSdEqUrs2HQnGwp1JU3z4E1A1m",
  "key7": "2rfiU92Y8UKrgvHMdPTR3xPtJxPCgcdBLWiMWj7B8YiicBuz1RYxjZx3DdDundxUSyJ7VttZCqG9T4b3CPeWhmzS",
  "key8": "67Dj2gwfVYEwwFdH8wnm1JfRYpoGSSzkUtQY5BCFvzC3BRLtxeTfBEiXieUu4QN2HaSjCq1ExUefME6s7TeQvkLy",
  "key9": "5yDSc1TVRmPtwcsWwHJdoWmMr3Ste3QD8b4sEu5R4ju7PYwyKZComEMT9kbva98pdByFzbv1Tp8yURkmWLCuvAS3",
  "key10": "2YgQmp3RUnaV2XqzvwX8msCZqSJm5JDrgFGhbT9TmAKxTfuKr3epUJTs2gYZSGUChtfRzbqoVqL7bCsekZf71pV1",
  "key11": "2mvgGBBQwQhqpd73ErLQaE3UMCg7bnWnZLLuusooBU3mCxaApJZfrT7GDRnhMcnPzHfN4MxXXhYuzJBU7kZVUmtc",
  "key12": "5eE3UckRpJsCnHyrmAVqHFHAby9rtiB4HnUUCRzwXPn1hmSRh7uTxpWoxiNSs7bart1bKzDn6KMAFZLxf2pGmaPY",
  "key13": "tei9vPBGhdMDTiPYYDgJ5bBc8Ydz2adfEznEpC73Pxx8b2RVRyu3Vr9M76NnMRFqi2Zs3y5pHWrjAnCpdn4Mdgb",
  "key14": "3N5CtigimvboE4ghsjyReTZntHHPBX1EG1vQKtZGN2iJGFr8uFPys7zYkoWusLzk2MYDM2y97DJDWctznm7HFpHq",
  "key15": "66VPP2T9PydccZ34S5DSQRfi5zUeLp7ziKC69x3Gjwt8ADtdVgret2kvehryH7RioenZt4ShUtBNSkJ1gKMgEu5J",
  "key16": "3TQyFgDs8w9gUZYeoNQ4bxW7NQo7EVCjBa19gzKbmcc7ZrdKDt1sVGYRWxJYGnWtmvMTgdeBNxvLVGPeaJQHd5L9",
  "key17": "39DbE8fKfpEQu9nHFGykZXgfYLQtnDo1VzWkvdJ61qmyUA6UpMY8JUsndCfih2WMLt8pEwHNziXLmWgTE7s3V2Dc",
  "key18": "5EyKYasNUnFgTFQ2j5Q4McLm7NGPBeHSRJSYkighVVs9ntrPVPJSJK1XPN6Hf2BhVm4qwKR8obK7ELfnK37gPHXC",
  "key19": "58dJFigAyXubwXuAV5if5b7usSr5XxFxT1sgD9hWA1R1eC9GCK3Vvh9gZuCEGaTSrxnMfQWo4bRekm3aMGB7C1dP",
  "key20": "3oYxZ7MughgPgpEZzVLgtyFHLdtJLin7BxiA4tRqyCtUxhwZV2KRrhaM4WkVbaCkHuZtkjREA2TrXChhi1GhGspf",
  "key21": "5aUnZSiU7YU4XWrnfoBwtuEX2WwYTc7Rci3mxXW3REzyy9kyY2sRqtX4tM7A6ebbGBNCJroduvt4RZsGFhVx9Hmv",
  "key22": "3EJpDkrTtygXmQx6ESEXTTGuS2TcJy9bEhLQoneQmRG5MmLgfVj4wSqWiwyqsJ6Kn7jiRrjL7anxr2ygAKyYZBpb",
  "key23": "3tRftwWGandzHxyeV1WHUBE7aDo2P41izKxdzjnmWb58JBD23vujEhcHUkFNPvtiysqQF8obF9h4DNLqYLPA1n4u",
  "key24": "3YWL83DhRjGoeLxCgfxjvJVG9PNKjnnbqFEeZ7NijnPJCyG8NYuQ1Vcn1mTVrWJNmNtb2EZf6LviFf3xEuPKNv2H",
  "key25": "6151AZiHHb5Hjzx4xTtqMEe7MMz7y8KfRugexKevMZoqk5iKDq7jycK9yAPr43bos5KwexNofJ1vfcLWdZjZHyYk",
  "key26": "56hHN1zjX1UY6um5Pfgc6awdsVsppvWLyyPB8RxfnosqPmkxKB7oZbZQNnH815YHCstgMJH5LcjNh4Xmg2ryLodM",
  "key27": "3feGLj3VGdHziyyzSDueEaEUU4H1nM5hvAwMpnGVynFG8F35je3vRnLpjmqLduRjkXXKs1WuozY984PaN2kWVpLH",
  "key28": "5xaJbReSe1ucyFiBSgx5BTfkT1Tj21NdQVMRrWcSuKv3BSdEJNy1X9Qh17zK3e2EqzNA4mu8R3RscwFdm7HoN1t3",
  "key29": "V1cbSzeqFCqbUwuyM56CZ4EJ7YwqSfh2NCbQhiHpZunh421fA88XC4QqMQUYrE6sJ9CEhKZg12JPzRMvny5FS3F",
  "key30": "4AVkK4hG1mBoXzwMePgDzkx386NqYdyujmm55a2aVKu6iN2qXPaJVSjLzgCWD35hVAqVB46g6J7DA9wey9ES3dEP",
  "key31": "2J3ExHCuabTAVF5WpmHZycJMNcHK7YBtu7RR4vSRsYoabU2xao1fJ1p8WxThYPY1cFdtb62r8jZxU7HwGzw47JyE"
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
