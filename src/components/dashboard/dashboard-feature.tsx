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
    "mDE3qF2dGuguPkXUKvt3BfYs65wopiYxWkzWGQ58r2GdCe9QthoLGMesYrmPLunVLgd2dv3Gpw5NDkgUHy8eZP5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p6VR8FSvUWDiePmCLrCxt6LkhcaVUJee6ZZJY13JmnEq3qmoMmw95kmMR3owBLLmPnF2UPvg3MQYwW9DgUJbxVE",
  "key1": "5EvV5vR5XGh18xf1uFoZPaysbq4K6578D9GNzJ238cPjHjreb3fpuipuEKcpgaVf2GcAZ54KWpL36m7ikBJ7e9eS",
  "key2": "3E9FvtQk23tXMmUWUaj8hM5U8GxsFY1NdP6AxvHFUQFpqPRgUbVkBTEmvSXCuPfDcjEwNKycU9rEtoV88qSvMCeJ",
  "key3": "2Ee5Y1LHTQNRpESC2FGvohf21WbRAGTciCK7kuwskTxnmKYfottsrGGy6kMTJftr1MJxQVSaxZL1EeLrD9HRoyrU",
  "key4": "28dkQGMwjYMHYzEC5fRwY2QNygFgNdQAHEiPdzXMvJeBRA1KQr2A9xcmMhBdaSMoTK1EQsyanAXTaakkCDpeyzGP",
  "key5": "354p9UJo3keajJJkEcRKyafe8Ef4tQVj53fXXwL4oYoxhMWV8gYQAaMQjgeLzrdsKhvWsLTYHQcFGq56kxNxbHoQ",
  "key6": "3E7KD52GkxSHHZKjdP3YuHyHbcmTAKoGdFCt6eEJL3QEh5QDQ2FuCcNU3VSqefrwEVANVienQmZuBzs2eqyUMAPz",
  "key7": "3WxbtSEPTTnZkx6rtzi5qV8ZocnRfgRJSBndjCRfZNHbJhfEouTEtuKNb7UMoPHt6e53v73rQMepxrXCiSVJDB3A",
  "key8": "5S2nuHU5WA9fnjCXHgBMBdPn2VQPEeuAuDt3GDe19gUNPBie7mK1uXZCeua3zrqnfTkE1YydWRt9VY5RXjfef8qP",
  "key9": "g3S3FPAKhGvX8QwvyKm42UMSGhAQpP8KT2nFC91TweKsxPcbR9wVNkLVw6yJ6pvF9C9Ft1EAGbUyXZWq4JkwAhQ",
  "key10": "a4ZCTk84HNG5Ba7naBXhMhrQvQAZq8n7H8wjpjjGjEWzxxws3kKrQBZKjFN4shVUVehXRkLoE6di8TLKrCvmpHK",
  "key11": "4hgUBNmmXLprMid9kqyCbwa6HVq8XE6fnDbQYvvdTLE6FYxaCjS44uDtC2wd6Bs6S8e4LgD1isNrGjoD3UvJbvDz",
  "key12": "WecUtsaw9NRHko5SkQCWGnz3YPmvQWLtDWUGrtcAaVWeWwzRxsMJKVP1MRSoX4ydGMtG5eBhegjuq17PCuQL8GH",
  "key13": "4aqKeV3hJDT79F6efppEYuXmqVJNn25wwnhBYScxCHkd2aTxKXAckoQwczc7ETp9du2kYBagRcqr6fBQe37hyJPE",
  "key14": "gyLUUuYcyabQmi31CToxqq1kd1j2jnuTciCnVYa2rimbbz7Pd3jAjnGojRutEgC9WQiREDMdRxZDK9mQCVyHNnE",
  "key15": "3NXQxdw29UCVPJxBW63mDMh6TMEsbRW2o4pao6Lcp7zfmigzMjnPnccgTQ6j7Rz8jiRTrWMdiTKhgKpNRHjeLYvS",
  "key16": "5FsA5jt5JjELTuwV1s4zNjgVra8gqnku9PaVkfUAokQxRDsoQf7fW7t3ceoD39FVk7kThv5DsnHYLpm4ZQ9vicAK",
  "key17": "4ByBayVJjsmpgHatVx4xB4coHHSddK3QcwnaFAgjRX9tHqHbwW7ogMcexKRR3H13GCe9Mtt4xVqAijezgbzWKUhE",
  "key18": "MzViee1EzDB7jPFqZSsZCvxY4KgT1LX7BXyPCYTh8VSx654yhscDYvwqxru3QYFQTjft1DWzgX82E2ebkezYzJ4",
  "key19": "3UYwUeTCWyqRWgW2LC1fkFXj9jxiffnPWoDRgtwxGstWetYcvpqimh1T6UZQYxBSM7GicPGYbEe1QT1fQJmMtqzH",
  "key20": "3SGU13ZFT9wtaiuLDYqE7UHjFkbNSHwhC4wPjKL8wNKZZzajTDjKzLUvtNMc6vK7zwuGsESxuanRGfpc8Nvepa8g",
  "key21": "4xHvUu9aAHmay8DSqtcj9PQvrTqR3jVM4YTdiizRTRerPHaYkEjG82TqmKeqF7ARoxSfeLVjCA3mRnunSPpW9CKY",
  "key22": "4iGB1nnMkNwzZKpakJRhkeeWtju3XrSexRmJcGEv5sevWM2UonowT2zWH8UbH7XbXZfMqKBx5ZrrMRZSygfxQu4t",
  "key23": "4p7YRB6XrXj3zYCkPvo9YkxrjHQViggaFQUtdquqSUKjWvdvQeRhrbggy1eLJ2NPiQ7yMPsstw13vSWMnMAYvGb8",
  "key24": "45BnRqcsbN27F1VscjLZcZNknjq236tnBnSczDRNkLJRXyt8JLWxMCVMuCocmDHVzfc5XhaXcB2phUP8Htm4hDzU",
  "key25": "2Uw4hvpfNWect3hYLUGky4ck9BKZyKbg2aRu8z6KLAMN5kwvdoxqAHERcs1Czc4Em81XvENsyAFZBWtR85FS1ebv",
  "key26": "5raaSHwsFFZrDTExewiRKiXfE2iRtCW7sDcS8uYTwYgdgdW6CqBw62kTFbJQqrqLh7hyP7Ckxwich4aTsg9qgWWk",
  "key27": "HnUb2bdCi6e9io5GfdnijNCibbFx1etUAFL7GhfTAv7Lyn5kLuo9nFvoeLHdupZzwJvW5AheYXvqgHtNnjfACBd",
  "key28": "57nPYwkBvsShz83oABBAH7jMMvRu9qEEi7PNxZCZbW1F2mEHe8oHphJbQycPD1tfUQdiBMWwce6rQr2y9ZVGeCvS",
  "key29": "3PycpEQVxDnpYxQN8Bvg3QtMcMkBi7ixcrWMbRRJE6pwZvw6Dydhz2cSQN65hD51yJx3JfB3cvokMViTk5ZMwpQF",
  "key30": "5W1Zegqfkpw5nTG5s1kUy1noZbXiMzGfdKDSH3wrrVShzKz983phc5LJovMDtNPmhr9cJxEc8Bwu6uHe4J1AR1vm",
  "key31": "3MsNmf7132YHRdfJaEvytRFptfTt4vBAe2hFtmwdWM15UZyHdC2CQobQQEHKAveDQbw28TE5LTimCyCSPhbtGEoV",
  "key32": "3Hj2x3zvQJZj7k1pFVCrp1PUR57VSvXfRGisR6ntCgwBewD7R6j5E1B61sR9tEktu3USFwvhELeTsPh7f3keaYfH",
  "key33": "4caAksqvSTHodUdqkZ9NL69NzMTesa23AjiwBg76E7qBiaMTY9pZavoenbSq98SokziNH6uCJv8RHgwDTZhhwWFU",
  "key34": "buiihTbfgi9FwRwH7VEtrGbDCHdEwmCvJocV1pYK8StMMRy1rb2Um4GncBwDcg9SJc4mJcctk3iAk8szJowTA4v",
  "key35": "2ZJg6EAi477K1cKjhLpQdaJmgyhcsAy4zYMPuuay19weHvtPrbT2yfcYS3wkco3czpHkYr2X1Lx8oAakC2tgfqKH",
  "key36": "5HoYutnye6hJhwC4EZNxLhoqStzEFYpsGkovdu7kjR3h7wdwvi8c7WBVKFHLjng7V2JGLBnnFwkdarfQSrNJ7XpF",
  "key37": "5ZWskcZSQzPRX3qqvEfGoe6bjem2Z3Fud1Wt7KaZvjmGxgmPEfY12oddRZFXKfPJgsbKcyNpxkUowex5yXi8qK5g",
  "key38": "2wtSDvooFgYqinz7kSSMnGsnoGEPQKZjZjgyxUF7BxxE7Yf6PK1cEJXiHTrHXyApvqFvKfMbnCQk8DMpRcZYtjtb",
  "key39": "2SQdCPJRxjzrYsi7q6qkSoquD6cq7CB9SyGM4C2Ys8jpqGe2PUJFSc6dCBJqVWsFiEsodv9vEsPE2HbDyV8FTPfm",
  "key40": "4S4pYzwyfGTvCzjCGLacXWKngnViuvpG3T9TeK3qkPFR16kepbUMQWJup3gYp1HtiyQTTcAKap1D6mESKeBAPEn6",
  "key41": "2KC2bwjG8dACDv1RFQm7zYJzBeXQC1icFhCtgXYYPtVjVY3SomTCwXkz6i3breNkep7wHQsdfwFqeEK4Bz5JQD3S",
  "key42": "546K2wnsGFngiogogvzEUz8hEwYirTom2ffA3yxFRJtN9h9xfMwtYgQjxgRwRAsXgA3iew3Ztc7f46896Fx7P6Fb",
  "key43": "5acioHdk8gQTUjmQNuWj3By6PtCgEuqCYhJ3ksPxM4wF1veTCvHhny9wJuCgQYADT6oU7XxidTZf7dcwVAqq1WXQ",
  "key44": "yh9ii4fUGBFy4UieakMPR4kt75JfLzNj57LraRGdGDobAFt22XmBc7za5LxaAmSKwko8HsyuBwmr4KMp4SwLKdF",
  "key45": "5SyVytZ6dX5nBxnMzQtdrft9DD8Vh2tqy9EXex77QsgsJhxm4HvsTdjBGZKcUcCxQekr2o7ApdnaYTiBpCDJr4xC",
  "key46": "2LpNG6b636K2MDSfGh3mFEchMunxtp3rtzCwkdBzHGpQHZDS4qDKyYH7H1NNsNpqVUCKzMEdrxBZZtq4eTSmGvMy",
  "key47": "4Ms63zzXVuRGDmz6jCPih6vsvxGUXN2scrEsBwtHHrp5CYJ5XHg9upTgYyqrBCgw33ufuzYXWko8NNnDzumyEr4Y"
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
