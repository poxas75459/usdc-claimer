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
    "4PjmFY6YgVKuJJWZ1dzMWjPLZbZokvnyAnwZJm1HVxKUSCJtY574BjzEQJwhL4QPXComoLkXeXq7hCkyvQSYVHbY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "399i7BZB4rrBmBhDvYxVzWoBVcxPBZcHKXEfnd9pH53kEUDDynA2bmYrrobsY5wGJ1Wm8PPqh71fErKw8vbScLZ",
  "key1": "94bhngf4qVEnqn7YUUVpYtfmWy8n3rabHASMnMtnzfeLFyspdZSfMYU2uBb7FTH2DFJghR29e1vrw7f9CAUCUkY",
  "key2": "5YCcW2jY7RKrnjxqCahSVQBfan4zQGcpDXZdpoaKU2Yw7MDDUqUzpcAGVS5H76zFDYomHmS3KS99toP9CNKjXagc",
  "key3": "5R3TwhRoAgEWGkN84jiuTvwY7PLgQDTR1Zsm81ZGtZoPh5He8CPv9Fo9BkfBz3WuRJhS2XLmMRV5HPBo9F1UKZEg",
  "key4": "4jBKVUcWjX4UzNeNPg9ZFV4txYSWBdwBQgHLc48pZ9Pe9QkyFzrvbs8bBfGvjeUPqc2XnvHbN9daNPnDFStzSf5K",
  "key5": "2t76Xdczg6XRW8h4KvmjjyPrhwXcotx9MmHfYLXiH6AvfneVU2tqCJDqL8vGjtaqDpe7xJN9fRktXfJAiG3e7MLC",
  "key6": "4mQLrZoYzpc6hAnpygJ1Z82uBE9yv5ZTMP2LS996yMRdmbf7Qx6XuiHq77XJqPpxkAD6wBn2hVd6L8FHmAHXxDmf",
  "key7": "2UWMCfWK2LxcCrscGi5i5cejwUjHNjHj8Hbdh7Ypw7jXFwMPueiVPybnEAFkfHT9kxw73BUfUzqGUwE9RHSbn53y",
  "key8": "5jSidrLxbsfsjBHEfKeEihQii57vqnHE6Kt1YUGuwpk98AADvPe7UNoCn3k953Ku8BH4qhmqK5DeTQuwgdey77RC",
  "key9": "5YnVPapKQeEVens2k2FJJrftp5yEfRjZceCrUma5yYth5PNbkBzhews8eKCY51QBEdKcuS7R6J11TCKrQV7yGNvp",
  "key10": "2ptpJHttd2EaM6UR6VAAVoCpffmjv773Gniyvhshwbfutxtu5qX9X9tr737WuU4ngxgER5hxDzw64TKZiGGUtjBN",
  "key11": "5fL5jiNmYm7VyJwBFTo1dZF2eLmVmmUDebBdmJmQn9fHHJgJ9ExJngwgSTNiuvxkskzHSU1ofNVS6juiStDM8mbo",
  "key12": "5u45tXjUxesES7BHDV4ACrHs3o4vTW8t7g41hFL475bjSQJaR4UGWwtti1XjQJxvQ2Byd3mJDcLgDoLZcta46yJ7",
  "key13": "5ztCFpiLCahxFUja8rucZFPgDMTwjfJKmbPdVXrbdk4oaG8WPLHSEmXLP4bS5GqNsgCKBQSVpcZkkRAyAGt5c7ae",
  "key14": "2vXNvVUqb8hBsYsWsqNAgTJ6rmsyXEvHCe6DgFHmFAjvUDB2n9Bt4fizQ4Lw7oT3Ls3FFwj7VAADQDEJ6E5kCstx",
  "key15": "4JADTTiFcQZwHg5RBu14iYr1bnJBDmq3uHRkUf85JePVNb8Ln1z6uxwKghNYqwxMqqntDkXyGGaVV6Y51wnBwR2D",
  "key16": "8cmPs2FkrmY55UGdnH5DjNnXT1aTinmtptFQxg3gQWMmqVfY1f2wBLiVRXMY8RBCQM4AHsYgTVP252aVcBhbnjZ",
  "key17": "AhipHW6ucJX4qohz2UVpk453PK9hRz3ahcRhSTTsw32SdnPKx7Gqg481tC42inaRoHRYMTX55c3snFiDYaaTxyx",
  "key18": "2D4unQo6yhM6PhfLNcYYqrBgiZqz5MgncknB2tsypd7hzeSXqNFc3UFb5GeYSuLcpFhcCPdQx7RAY2qfHj7q5NXs",
  "key19": "Givo6NVRTYLMrzTH9BtWmUfuy6gMPYM3oCx821ANvHbqDpRZpYA7eRYg3wADb2u3ueyD6wHdA5BQLrATrxAUHBd",
  "key20": "5s8LKcVZ8CX2nRJNk7UMX63banwztBLYwbsZMqx6njDbkHkpGh5NV7UGjwgv81g1ppu2jvZEPprNW1JUnSqbtvoR",
  "key21": "5CgnbqpxipPMZyV7Ldi6aSxobwPiYyQL2QJcNwAk6AzTk5HR5NaoyQ64tEQZpjVJhHLKwVHe4Tt8M84WLENtRQ7V",
  "key22": "3x1ug5khvUiwnjngVedX9qaBNRNDmKBaergJM1h223kz2wVjUVkfJop6V23z95Pku1qQiR7yi8kBAJQLFkPuFqaH",
  "key23": "3AgLad3zNuCemLCo2cPxDSTsFhGrLea2dKQ5CuTnRnJ6FKoPMzYntZPaMpEFrrsMaUCqmuhAAhq9FJHbJvgPD5DY",
  "key24": "27a78qv2yE26JoCATCZX5WNu25sPaC3Z34HRoKTNKJxkCsV4zkrbuUMLY15vAz2dTiceb9saHXnRz8vm8bHkK6h8"
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
