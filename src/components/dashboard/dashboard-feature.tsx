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
    "4VFxRsMvg4tYqQsyARt3B2FAEhmYhhzawhhJ3gqjsbSmNkKKCRFGWvVxKVscjcsNEQYMzWq2dQveufti8tS8yxW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43ic3EdPSBfGqMpjmedr1mbPm9cpv95bPC1SGgxytooXusYzHAjaPNNQN8stoZBnsM6CquJFFcxWSDm1DxtYwqah",
  "key1": "hVzVRVJft3mFKca5HuQwqPSVLZ9R1mtGKBxqNGgdemcALtjjX7LFFvvHJnDnCTChMDELdMhs7y1qoDLEkwDUe8q",
  "key2": "393CKwAWVx3Fa6WSuWBQqvVab3EesAnaFpisepmTBNb4HCUNLhBSC3DrkDxdfhnGkCJmmi4jCvfoQvyKNcYEBF44",
  "key3": "2bLia3KbdkPu4L8W4EsWc1bdpTXVGa7pTC6qBP3VGPxBNpjgwxHAh8yaAShJ6GtRMUeqVqVZqtkUCmeuWJNayzdM",
  "key4": "4WXh6ATixwrQ2KNA8Vgi7i7tsUkQCjnn35o1F2VLKawSRxS4jiwHTLmuYjNmg3eB6VzYrPwqN1nf5PBqUJWP8Riv",
  "key5": "3woiXtTpWiatLG5k2HJKYPeTQHs6NiatyogmTc5nqPQq5S1FVPdBNduq7ZtJ4snLoyo6NDbAksKSofxcWuyjvute",
  "key6": "43vgsu3s44LAwdsmWKcUXVs1fqeexUrTa91rKJGyh9HQq4Bp3yhWwCQARDhc9AiUAUg6ThA8X79ga53NjkXmseN1",
  "key7": "TjJtUR1KeeSejxA8z3YsRZoDq8srxPemQNZBRCbypPeAjunEUtq695gSVxXCssNnxhw8Vw3U9UvTjZNTNBXeFxL",
  "key8": "62rRajvHugeyworvLgpLcfoUp7nP3zGt2iYaT2J5NWYLLeZAjLTsi87tnc9EHe7vzUd4iK4zECi9M9cdFYUtGpVq",
  "key9": "2QsVGDqoRECgyVCHtSqvxiGcZJoBihjQ6xtx4TKQu6HbcDFF3BTLipeggL53igmHJuEEoWgpVp34sTyh8VbBbJ9n",
  "key10": "NUEDfnb8ujiU55zzMmQ7Gy1JEG1HUVEPsfytreyVvmg3XUJQZ5rSUEdorxToMSPLdSepJb64nmzbdb2muDYxDB8",
  "key11": "4rjEyWqr21RVUkrsCCe6TzEXKd57gN1ZqHLcVzj4PQyi62ZXXsdYzUdoh8a8r7dittJaYL9oKSbMxHBXHPU2iVRr",
  "key12": "5L4ZcnJfiNK3ga3e1cMxGaoApxKHT7VYgsGJMp1Aux5RsghjXw8b52zD4XqgFr1EFcwDm9pKWkfLGpDxvQQxbZLd",
  "key13": "4no71y2mjLRWTHZGdAbtFEed2V3i7YBXmeY72JK1NyawT6yMJaxNBTDtwER6dUgXpGuMC9JKBvtgWoxRU2cMBPZS",
  "key14": "2M1Vf7Dw9xt72Pv5KvL7p3rfMLyzNA1Av5pPfUcUkQoZYFM1ejuxKsiaPKEtzgEfPZcX5nutsTmZfuyE86bChDij",
  "key15": "5QZ9kHJpwFz7dK5PSPpEomukiJEFT9NYmLVHe5p6z8FedqfvaUR9WbyLMPpgbfmYbbe3qZ3gnBT6RhRVhgo4Aid3",
  "key16": "5zbhsP1ZVHct8VGRhtLsi7TVwAxgZvvWC5wRk6ZWi8USYzJQkdHA6kF4k8iB2uSokJd4aBVoM3jDPchFTR58QFky",
  "key17": "3vfdpn7QWaZAML8ZhEzij8eza4Knx6irzUVAoiDrov67UKQN2KrDfz1y9z4JxF9BaRqHJrLsQs4qgk1vws3Z8ccG",
  "key18": "4tYmKszeDZe8on16nFentwqUce3yBMK2GH3m4PokgZD4STe9ag2CY2fRdRySYdK5sib3LtwEYz6YFxYioPt98WVJ",
  "key19": "2ED9f2i2S5zCPbwd7iNStVYzMNm2FCFQyiAeZjpGX649G9wqYUEAWsybtT3ydftQ5TYjdqSnw5ydDg9srMQQLcsk",
  "key20": "4RdkBLsLtZSGsdNQ4RFyJKLuobZjZPFQJjVHcurAqiGDuB1VkNhiAq9Ldz7Vx2xptD9SG384z1teUjNU5t3YQoRZ",
  "key21": "4spogQoEnGrN1aC5PCicCWqCar5v5Htn8WjwvddQ7sMX4LnFHMFVXbkVbQeWstZrV1cCyr42hdRsWhvGEkfxcvay",
  "key22": "3WFooorLe3mNguoquhVSdrjmnKegd96KF5uxAeV6aZtX4Ua1pAaQJ2MdEUqvEDqH52NpzcjovdGG4j83uYiggAkj",
  "key23": "2ZUJHy6enXWpazAwyxrfZZLPxff6EVcB6XWyjdmT5t8wBe5F5drjhSUBraucXitnwAX3RLS2w6NpALrn7MKbgERd",
  "key24": "3yCd9bfLxBPR1xWHQT7ni461HL7A1TuRM93DE8rLZ3TmhKwdGtkx8bk24Sh543DZW1o6Xq1mWPsRsEMEwVZvCELH",
  "key25": "65F6pQR5KLLV8DUPQPHAQ4zo5eDSPea1pYbfqcRPHquQyHpxfSb3mFYShfCWryz3dpmU21azYHPmUzTZk1mYLpC5",
  "key26": "2NPC9wpKBPEAy4UEAqnkZaVygJdfLd4G5teV9ZxAarp45e4A3abWHr5q5EaMfLAPjccKvi9vJbeL5bhSFJs6CXVk",
  "key27": "2TFMDV1K5w9kRRK47FcHavVwDoLU8PACuPLEcnbKFBYwhXAHu1Khx3g4DDUZevgUEAWAv1UCxDg7dvrytdMaFYDM",
  "key28": "4iFGy2VYdQCd2FbnJi95egPA65q317jTX8zSnkM6rYbeukZ4vB28EVJLDvhWzvV61BMQckUnxkbLLJSzyQ7RSgYS",
  "key29": "7eUURzHzaW2uTogPkwZovWaMn4ofvuEdQL1uBdLHMFwtqQpG44Dh4rYfWoHZRHkBceqNGeyq2Eiix2hgjQJCvH9",
  "key30": "2cwp4pKbTJNcYHxGg8xmA4CFNr8ufrBe1wbto27W2ioE1k2z5aK9JhCKpfqKyrFQ7iPstc69nd4E1VVRF1uGEcxP",
  "key31": "5hApguRBQqnYHaGhVeXaxxUgPWURhoCJE7cbByFyyj7c1vsbTxuA2opp8rfk3LEtNEZQXNQx6GAnEV9yoAZc9SZw",
  "key32": "5h4gHMmn1paR5sMrZcS9pN846FdWfwzcs1nHWN3v8h4Ug7RuLva9WLk8bBTgM6pYuZwhiJ4o2mDdnYSKo8KuuK4t",
  "key33": "341Z6rBh5i96NxndBFiFSbJKirWsrpCy41akwk2818bwZ4UC5PyGY55eY6BWfARdEhsdwd1zyGaTjnejDh5XXG9X",
  "key34": "5883BN1Y8BQxMEUXdp7W9BdTFJBkRR4XNrVQ97QoLTpmtJUYakBPUwk8f4VTshLkMAT57AY9CoTnwcxY1uca4c62",
  "key35": "2AVvhn76QMXycskb9dYjVb9abBWqVuig8wS6JE3MS5DGUSog2RYFfjQPtexoB17z42LHz7Mt7UbYYmVHgw7yiWvX",
  "key36": "3NGoR96htNuKMWdPrK8E6CgsoYvduA4gEkrHaZcBPEtTq8dCGVWVXPvj8hnVLTy8A2j4BLjPHMTtmLpcTFQyuz4e",
  "key37": "5oLqZGKymYVGaU6wpJGQAyqB5bfQjBLyFGpymYWkpsmoMnpW4Br6P4byLaNURJ9xH9NaPC7UsbcBCbogf5NXey6C",
  "key38": "3bhCrq6MwPuczqywsXhk2LbuUR4dKfi5YaxzwN9mR5tDT2WBMJwyaxow96gpx4TEjjVNmCg5eM44H5zAVC58ptwo",
  "key39": "ZRWVp2fiYrY7hoeqcdBhbFRpGnfqCkRWhxEwrKYneoG5eQvCBYEsPCtfEM6YZ4sFakEeNyznxLA6Z8u1zNKFsBj"
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
