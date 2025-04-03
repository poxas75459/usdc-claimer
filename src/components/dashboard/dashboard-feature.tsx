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
    "4EBor3N59cKScy4FnZPT7QaiWFjrxCnb19uA5moASB3GxX4FKugk81Ko3ZbGzbSfuomkygjv5RKmVajSgwH6zdnS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cLabjhd17rX8cpZ21TvfCHK8XeV7aCSxfereoEWt6uXs7rEnKFKfhdzXdkKNKyPp2XYUYUCFX3jYAtUpzw8WvKe",
  "key1": "37jM45XxfmJsdDs8HcgeJ6qBCeRWSZ5VgshDtwST5uiWN7w68dYLkX374wBwhWbEmRb9nfebVfuUnGo3itF3Vbh6",
  "key2": "4C3y415qUnFs1VwZc8rWbGiaxzR5rnStt4FkV1MvUR6DYKvqAgKPfJygKoasPbrZPUjdowRt7BqZdJDAkagG8iBt",
  "key3": "32dBmVmgJN1Jc9i2gsMr3PAkNSnD7jSH4422RSL2YHXrL7nuxWznQGZ7PVzmPtE8ART6ZTHghrk5hNBQxVdXr44R",
  "key4": "59nZsr1tkspg9tyrNGWNS1xruD5TfZfgoP9a5bqTGkpQpY2N5VEqUuRhhvn7iTQvmsFZyu7kTyrE6QJ7NViEZHj4",
  "key5": "1yf6szEGcBvH9kWxvWSS5zDVVTHE59BwbGQxsvGRxRcLrxNCA42ZQeEQZH7Qgon38hhqAFrdxGTEV9aGHdBSGb1",
  "key6": "CE3x23SmNcucwpzntiZ8xFg6rbfZk97LjEreYdeehpYFTQ1Dik7LwREoPoaCp7eZgQbAEPDYkCfjKLUpCVFq6TE",
  "key7": "HL4jqn9YCzHStGVFdeyPKAEuLS3Mt5D9docS3aY1ayyZfEM84a5w4dsgCraQXKrmgzJ1zjMzDCgZ3bgDXP3t1FY",
  "key8": "5KMH3Axm44c9QhW6vQireX5huVMMf9xhcW5yKkXvxHnmsvRuemLUCCxpmQt59v893HTstnt5TpmtS879sBoZz8V3",
  "key9": "53ZjdT2E1UxzeVsi2noi7dvXLxVAyYTo1VrKhvP5vt1xk6mYWjG1wFaQZC9Jko9ye2n2QyJxRTX86he8gJmUDjb1",
  "key10": "dborZ2QMrkH5gF4Ks6YaZQVPLJF6S3x7mS4miaKmWudr25aqnLyZcpEFzdxFYKwZ3jN8HH3cG5d123X6AdQMNTN",
  "key11": "3r2g6dGHMRW6m4ju9HqvMifRoeRsMKmGLm5JBKgKECT4RFndBvy5Ly6wF2W7Bs4A8g4YGhi8LLPKZDZHxJs5YjN7",
  "key12": "2gNhSLQhyRwykkAQd1Ng8y5EPKTFu1DmydPrBC6764sCAka3sT2kpBZgnJQS7tKkWguiLVB115NXzvbH5MMktxNU",
  "key13": "4khHSSK2aJPbWWpny5R4LepB1UU4a7jgwVui7cfoXHe8ahx6NDwt2oWPstX39xqJ9zjxRcNKzb4dBcDZYU6EGRQB",
  "key14": "2RJS5bxDXNifDMyohfx7s71Y36bXz2Agx7c3pw4duBpr51rHyqsogrZvAth8VSG6YNBL1uhKtmTESZLDesS9hx4T",
  "key15": "4Kf5d3nRyVN3bVBd21hB3Y2FtGzUPbm46rinh4ufNbMMHetmMT4YoDguQoP7y5E2hV6nJ12PiaAczn4FVvugiq3b",
  "key16": "3hrcZkEbP1LTpCDAb8BrPduPJdVz1xa39M5ruQUBkXG4TZ2f5vwpQrv33pjmi5H8E82VceRrRb1xX5kMvgQmJT5",
  "key17": "27LuudqeNK9ppv5n13oxBHtmZ1u1LAzp6AJwcTVE33CWhzKr9KyCxcccSMkemS2eicov92jZ4X3QETBdzzRcfEhs",
  "key18": "438nuEmVeVhHZKRganQnj29ynPZqNGsdazq7riY1C9yB4rJs1yAC7yuwzrUysxwUPge3FjQfNcTu7xE4PK5e3XHS",
  "key19": "3YedHaKcDXNHJyPbhyMKwdLCqVuX1VxBhSFB1XjHJeTTMuvF4dM1HJuWNfGS2airpuCc3Fjh9sSuLZZiHKiSd7YQ",
  "key20": "3py2z2ZuPNmHN8iiZT4JVE4D8CjrBA2grgaofhw35BgkFg7J7xamDhvt9t85edLMN86FYPKuNbJiK4Psv2u7zzbd",
  "key21": "5KhN1jcUb5mdfsKbZfQpbXe8E4Hh5K18vhfAdUe3emsZ9MY5yK1xr44UeCEsQ9R543vDzQmcGijHNQv9hPNNT3yb",
  "key22": "46PCWDhgmh7RQMCdvVPE7ZUF1jYpNP8NHFYhb8tLonwchVSHJgFFM3ZuXcX1g73axxxFM1VQtGSzZ85VBqGjNfpp",
  "key23": "4jqbnsbfKge3GTcYqdnL2dKVVuVx3ZMbREx8vWzGCBWbC3tZ5YfoqbSAVLhrwcDmHmmGgLvWec1bRokCR3c7HevD",
  "key24": "2kHPN8hXJp7xBUmXamEEuffekw4ZePcjNZcd7iNie6GQLWH3mLrUPzFKv7P6JiJeBLX33yaiMJqqnhYKTLBvRd9b",
  "key25": "4Cs3yPhnbDGe4WeZ33EExdnUqRPPf8JBmhgQhTe3UB5qY4AmdAXcjZXJDsjR3uZ3QMkotRySYUfmCrHXcJgNiYQp",
  "key26": "MKrLrme4hCFzW7rgn8zwT5viofqhPigTy77cvaRodWYwfo1BHtEEdLLFSkJwpPEKkHNm3JWGNZR64vucZ9F6cDy",
  "key27": "3B6Dmb6wMTtDCS7rd7zow4X1PFUf9m3pE7Ztj3nAjtickSzL4qMMEo64tBbXancyddUke5Q4yvNWZP9PrmcFJqZ2",
  "key28": "5t32dpvwAMDjefovNJa72n2XD4jtB1i5aGgV27VrdqLcURLBzdaMgdTefqmWirgjcEtX6sLSTk3VEJjrVXoVdzP1",
  "key29": "35akAfgaUVWQ8gBrTNfBC5Df3LB4tVJ3MxL8oaXEMVyF86bkdGVtyDqh38cVTRCff9JTnNfm5bP8hrSmvFbpqGAA",
  "key30": "jxGfgNteThvuAbThBbABbJP4kfCMbb5mC3qQiHYe44SLoWVLj9L88BKz8rmwDAaYF7vfZTXLQSyS9tUHKyQ4mVt"
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
