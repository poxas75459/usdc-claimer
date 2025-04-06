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
    "146fF6GuXiMxnEvnHBzGsd6XkavwchE8qB9hZ184rKGwxdZUTS2NyfGZWLVVBJAjfRg1q1nf4BSf7UBpgss9Lys"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MrLLc5FBLwVx2AKzehLcRgcuNd9WdLmjYviigXAa5uFL6vvmKKXDv9DVZcRfJbj1aR5rKrsn9iuvCyLB9XrqvQS",
  "key1": "63kGueZWhUkyrmbpBm8J6qeYdMnMh6WCg2UgJSy7J2hQz9SAeYEZes1zLpDSNVTTWG26bwzhRSWoArryzKTbfnML",
  "key2": "2w25uYP6ZChboY15hrDyHE7o7c9gnns7ahkoMs619qCGmhYi5BNMhjo8X5aTEMz1SwRcoGRWhsbkVnJCua5iiDvn",
  "key3": "3giqGcBiHEJrCDFrKaFmpvZMy5fgfQVv9C8LVVCjcQaB2zGXUXvRF93prNXaDDEVYN8g61BFteap7YrfxxCQbYAp",
  "key4": "4SZVM3aDkqd67bXJUHjLhgNFcQfvtU5RNAXsEyNm8v4ffXjPTgpRrqZfqnGHFzgaLityiNi5shJWtTyZGmBfqXbx",
  "key5": "22GbLFRQFoxggCvmcwVENfEWRV1ks8xy3TKWksdbEZaHDSJLmKBWtJGbUev4PQJ6uvART6avrPfDLzSLYKL6BAc5",
  "key6": "53pFVGUrZqJpHhjkCNxBc38SjdsM5sT5nYUT75eSGTN3A3SUZJN4WCvxh8q2DNyosGHTDLCYZq4fdTX9QuVHayiB",
  "key7": "XYf1ALeH1i6pG5HTEGA94Cp9wzVUSbEGc741M16XB66Wx7gME9VXVvkFfLxiELNoAkP3LkuPK3NgiVYLHbsRvYR",
  "key8": "XtZiamNEr5rvrEq4hmM5KiCm8pETGzvB6CzZYwGCd9QLGi48UxDqM3fR6aExHUrT8RPdLPGm8sAuQi1Go7oP4Ym",
  "key9": "4Yev3waEVm2SGv2FDaPxUGr7U6PQYEVWUoMB98WSMnvpuZwm3jM3GBjvAzofZxdE3X8seXzu2EfMMvWptecSHtPq",
  "key10": "D3vzigHNjadrdK2G6FwAPAhmkiBYDsCwJ1V4GTWrYszGMB58c7mBr5EXgivK4fgtpp6tX2vKnKw7V2NbYpuM2au",
  "key11": "39iJebyegp9bVFHjnW96Cf8ewozgHGxrpfKWFmKbfbNGYw6zKKmsjypGdjrHhbsG7cxNXNwwV7EBvNFfUEDQCkmq",
  "key12": "7XeeYniKjGnZCTHyXGbe6tKwAvMe44LCExKJurfqvCy6EnQyyobRSuuraN4EfiVzgAmYX8ySLP5Xgvvk55PGWhy",
  "key13": "3DUmfyNY8xgUfBdpM94MWHrM6dCbXvBx7jQUuppFou6J5PriQCxtEJFFeMkPSp39iYEqpRoeVDWLo7zh81wyvk7K",
  "key14": "4XNfxNyYz2wueCLU2ebh5XzqHh8wtatgkM2T4jdXqL2vHQVNwuMLK6it6ktSTBZxjaPQB922ViYQbvNRRBtC9mbs",
  "key15": "2uDFSiJDWTbp7xV4rRWnZz2YjSUortKwW4Sq4bPkBjjt39sqEZ4gXGDoFSgbSSXsXPgisG5SkkUBpUhY1wAR6Xzg",
  "key16": "2VYzxH6N7WX8eG6TcKE7czfdzp8vGAS1BGsfMnH1BsSndERCKntDctxSbjru5dNCrctZbVjK1KAqevuEhqXt11b6",
  "key17": "4cxVa8RX4XCfRzdyuedp6xP5kAmMTpAec1swQ5fQDH6zAwJF6WTfyEw5b5d8RGqiFnRH1Rtv1xk7RRdA1HCpwAUT",
  "key18": "4ziaSpDbibSb6QVDpGaUCuy3eLCgXppCaaq6REApVMk7kVq9P1nDpSTH7z72ewR5cMDSDNSpTqxkR9yjXSPZ8Q5Z",
  "key19": "3WJPaGWYxuWUUbWmhPYxVWxNVML5eQ2cnXV1eBchYQQ6a9zduPnZEkJEnfMzRwHAAh5UaP8t16d72bLbJrf83bqu",
  "key20": "5HP9EFwnTa6y2sPRHStvUjWArwZhM8nakphbf2ADZ9UmGeutAraeYke4hMronAkzuzbG6vP1uHbxecrnfUw4dbuy",
  "key21": "1gP7vgaK13MqaK6Z4TsqPK3YF3qoViXqipLJoMCt7SzSzP8bXZ7QP4BmWSSch1oRCYkqxugKtcnyQtShFhEgNJa",
  "key22": "2R15wRud6uvRbDN1Nk7ofoSfb6q7JXo8irZSqJGYRSv4nYoFkjyS2CD4L9swsyv3i2y1qLrs8EAiVnr3Nx8RGNbo",
  "key23": "PxfQaBNZXxu5kC8ReawissRPiJjQetqYfhAKUvgQEqU9CaJiwaK2rp7sgzd7WujUpC2eSUZiBtZW5Ea3mQjyY5M",
  "key24": "5tmC8gTswANSbtS7MiyoKMvv2F7VnWgHVRBjow85V82rvD8Awj91xBS49kK7wrmg2cBge6TPzapMptrpMiV51Nh6",
  "key25": "4va35rnKSSuZVtETGQ8i2dTCm1MVSK8vvRwDzG7VdRD1Nomh8FEJzhjqV8aW5GZmfEUjPCaxBrsajQLoL7zjcUTA",
  "key26": "5Dwmk25X6PesFVKXALdW8H6f7o9k2J5tKM8FWCUk2ke5DkEThPdf1JH956Vzk1DR5tbjSpDfBJCRUSR1u9T5gt4Q",
  "key27": "ezviKA2Sb6AxrJvi6yi47R8mKV2USU9GVSHdcRxuVHUhZnnk9dyePZtbixETZfUmZFA3YPF64HPkPLcfD6FJyyC",
  "key28": "3UcKYGaGAMo1RtnriigiQSbtBqWjJQ5Jw9u5dqS2JMyfvL4MjnFbU3HrjhBdfjxddydaWb3SDmiHGkwP6KVJVQsG",
  "key29": "2iiiTREDuaRzviBo29qKrjmrJomJLrY3HiFUZAwGmN8gSe4USC3NYAuNqSZVqam4X3uYVTrxZqFNTPQqPuBHhW5",
  "key30": "5jYUQUmg7nkDB87a6iCKthyzwd4VZx9X8xpKTZ7swFcYM8RWJvXN4Drw35M1tonABEdhquB77w2dVd91kzcsP6gY",
  "key31": "5KaNxBW2XM8VY3k6GTU15qxmwL8ULEvdkcaBJL7UDqbbiFvrCbeMryJt6xhekKyV3GP4chhpRxagJdBHWBJ5awV7",
  "key32": "47UsGDjgkr45m76VNcF6vFYNjmLKAy4o4E1aPSN8Un2p66irvUpPJmTPjfyXjaegBC2SDsLgWYE2PU2FUA71wWVr",
  "key33": "4GRWreeBJCwmicpkU6rMGkhbtUMTxAPhebke9gohAiXB5p5uDnvjSont96NzYGzxx1fz8c887tzUbb8cx6jR3hrY",
  "key34": "64W4285aMxrVKoKwmE9RUE8XcuyDK6qwKMTGYJnKEHdjzZaqmYLWEmYHr8iQMAVgz4ZKQ6UgM3NUQLMDo3EEy2tB",
  "key35": "5QtgoVBr4rXDdoDdnPTVCLUVBn2eP46pXWHs6BkrwT8jvMbRiZKhPgDvLnyXe9qcQFwefeL7WtiAW7ATWdBda5mn",
  "key36": "2uHfjNL8sGB3fvCXs6ADe2ja6CWyTn4Vpxjs1ec8B9u7GdvfdfzX2dsxrBMoL2cM7VFhD2t8hrP3NrFfBwVrz1Au",
  "key37": "Qn14VWiM9NhFCQa7pxnHfeSjCq3JfF7SA2bEv2f4P8hmBzpe4LohXGQ3Xbwwsn7wuf6NWv9sR5ZF62BxEcGBNVX",
  "key38": "2ZbCL7LJu6MwimEY9eLALW5YacxsgAX7YMEBddsiLshYdG98tvPSwjsWZAMigqkqATo4tqLrMZQmWXQVo8dAK1vA",
  "key39": "4P2vwkb5axDrPTtcuVRDeLdoi1ZqQnswTjrGE9HVvc4NVGWcxL5KXVYMzsqcuWL375XBCdk1vyeHnfCzuoD9uKKw",
  "key40": "3kSM7f9sEzwiCmUDq6YY8DeqtQje7LyvqBPb3yL9Vs83coKYJw11rQNNBhCjvqdjMrc8gDuGxHYWJgDAsAFoHkhv",
  "key41": "5tAgkA5FSdVb5AvBAo7XPxArDDBCzQWtF3h3swEAxPYWJaTdiAjBuVtNsMZaiodLeZAhbAh92tz4u6gJJXhkvn7o",
  "key42": "4RBW1S7pmukjD57hUvwXXBEAV4bpXCZnNJgDoiFNqx84jPLR77mD4nnhXwqrJmU7pwoy41GjbVSqEhmb5D5BP37n"
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
