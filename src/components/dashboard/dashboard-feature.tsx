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
    "3PFuQCHVAqwXcBJAdF18qh83DCivvydHVyKSP3N148Eyv29jeqv7exTzjyiK62qccWofJMHjFrZt8KNuQX9KDeRa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qeLMi8659ox2DbJM5dijxZKfoqbqXb8ZDauaVbNgFFen6RDPtVKJG5RF8cUCd41YgKVB57aHLecxhqUR66DbN69",
  "key1": "4dR9oQcdZtK6Sw7gzA1y4tyWZYf7CXfAwxNGPEvaeVkiT6mGeEi2DDkGXJjq7mE8e84ayuRC8nmnDRykrc2Uaf2C",
  "key2": "2kZJr7B4i1hrMCDN7My1xbg2XMc6McEyrzccqkyzPsFHikrZUEN6tQx4JpFEkMukuasZ37gD58QVNwoKprc3umnH",
  "key3": "5icqTmqxufUjEA7Nbj6GRCTyGUuKDYkDe9CMf4jk8DkTUvAcZ4a3x8i1wiRDiTja7SUnPrM41tM7KSvUt9AWM34r",
  "key4": "3NN2SkAKzhXp8N2TK77iQqek1wJMD1xD1NJ36KkpsA8t5fcoRmHEYcckkJJN84Hp1T8gpUd9wSNwU6DZhBHxFqNy",
  "key5": "oXW3xMNJnTqKZEDzZeJvy8SZs4j2581Pq4yEVXsKKoWhEQmo5aUuVyctcBeQK3bZPx88gJ8Hesokg74kzGRTCwv",
  "key6": "Jag87TeoJQsssG4axHieDG8J1tww48m2v5U33T7sgzwmKCHssnMtrMjoNcoP3X97nQZLddGJ8LToY7TCn8UYXS5",
  "key7": "5fF2C9BtH8Ea3J8GMzn6ZjiERwma1bS7gru34vUgnTvWKWh8T9GrTBRWrWRwFy3sBtUksYSSmktaRmShfPHvvGpf",
  "key8": "3rnLhTCFvgRP7fuUMUWpKaXx4JE64Jf9CvCJ75egT2XX2Jzht7ydMWA4WmBrGAQgfna6P6cETK8w4ZHNCdeypz5H",
  "key9": "5VZkqXa1ZVXn7LYjVrkMkaNn2XydcqyvA7qVPSwwpZfUhQ9QCAf98KppcMhBoEANTYPRbgmwt4e8oCVzRzzzoiSw",
  "key10": "4FAEBuohSC5NTpYdEDQQEdaDpKw7jzU6jtjTEAE9pfhKJzacxBi4wkeu6ZJi7bF5nFW3tNLd2nhuij9buM3S2WDE",
  "key11": "44bS93UmeHF9yWTEiz44jdUmEYeryJEcCdDvJiBQaRyeEQ3PtzhRKFmEuv861Cy55MQzd5tkajufYxwM6uds7K36",
  "key12": "64MU6LPD2EFDbunLGs8V6QNd8GL35B8o2hKRwkrZ4t2KD4J2iLgyKnjQQxrPutnA8wQFocSTHpkeU8pDe5Fnbgnq",
  "key13": "571qmrfakWw2HxQHXrVYjmXpr7e2kKEqEo4PKub9D2voHHcZh98PqHwAPXYviyrfWYbos44FtmMSEHCxATrWy93e",
  "key14": "5urqxvQFfFMxyWyBe2Rpp3er8eFEvewaYb8Vm79JuEyeCqcqByDSzg5idxEcFxHwGCwwVa31ajUVubpHPsFxfN7n",
  "key15": "49hdXUuCD29o3PfaqDz5wg7EZhTMaU4Hxfzyato4piBCrHXWusj8Z2DEEPAKYNtDs7HZ7hgMiNWbfDJLsSp63bx8",
  "key16": "5LX1BA3JCbbfUB87WSmcGnAi9vBrmEtViG2MNVcQaXminS5Lyt9XFE9Xv4RsG6k2xNV3ysFQKniVuCs8cvEZCMFQ",
  "key17": "3sehEn6udpt2ZEfEdJQUw3RZ7tiQE6ea47YNnQh8wdyuH47c4UHaoWtxhoK2CtteUjhb7XtueujiSjgMiTb7roWe",
  "key18": "3u4eU52xQg5FLc2mhptK7wpDP551tBrLZzg913JiH5NiiJotzUdKZwttnjecAut6uEiTyNKaqa8LVMCbkpJiZCYd",
  "key19": "4zd9mKJ4veY4iRxRtEYm6EzyJRuRk4n8gKs9VXFBqBk5esHmDbqw11AwNhr9aFXRKckPXESkNq5odSW6oQmBrWrW",
  "key20": "2zT7ZG5W7Lg9Bcfy5WqVXELawGhiMnXNLstiThjLri59sMRNdw3MGtoTc33oTSRMEM9tcxi2zWyiJ4Qmd5Jcpw6X",
  "key21": "4ZZNotZURnifrxjx4KfDWhBND7U7nTUispxrXA7ywNwr9ZEmfveJV4sJrAmMM1s2MeaD3JVknQgoZX7oSeKjtzEV",
  "key22": "WveGhi6Vvd3bTZ34oBoGGU2FU8RvNWMmHZhrqVtPv1VyCx5L3bWP57qi36hnBZRcs3qYAA39K5YcjzxUK2xqe5X",
  "key23": "3WPGFKWQ6mrRvouvhbxjqc8QkhnXWhna78BWUNDypkMcvKtyBEJxXAP2q6GirNakEB9k4ZJQKXV9LS6bMh5ukvpx",
  "key24": "GDWPV1fCKCGUVnS3dw9P4EJuXnFEDzWYvuzVz8tUd4J3o6Gx6dHjRjkVwtX46WEZ4uNJ9TK6GqMwB8fK2KAV5eq",
  "key25": "4Bof6wuUDDYSY8VUupx7XXBamZeZwXAXzQujUVnUMMWn7seumaWK51HXunKsnVWyLs54zM289bVLpyr4FFmj5rJJ",
  "key26": "5qBx5K5MnfcVqVJohdKXYFZ6FqELQJtipA1SvjSH5qKfMTeN6keTL84Wrh4QEQCCxhvWK5rePKhJVpm61HvYc7PX",
  "key27": "4uppuA5Phy3iAVdrSpCAMB11P4WFNE2YtEoH7aj52tc8dECTigM2C3vm7m6h4SNSNro2oU4TJ6XB564Mq1jZkxwS",
  "key28": "3oBeWqWuvbhD6x1koRAoZfBzj6MzYeZuBJxQLur8MsYafzb2dqKbpwjbj5B4T2n2VBrBaaY8tqHAmb9WtkqqaBc2",
  "key29": "5UaYpMAdoucRXHsjh9BhMuYHzo4dhwJkCUVYKo9uL9vpBkWphCd6n7X6hG7rQkY497KRdfwJ3W1rTRZSP8CoKJYG",
  "key30": "3YVCwa398b3UtBfWKUtSGkjdoyWLvV6SNudsL9GxuNtdYUd4dMKf25csymxx7Zf229HxjacFbFZHVUxAjtxEJZr2",
  "key31": "49NuDfjc5YhUFwyMb8eHbPe5wfUwqT1kJJUo8oUtd4P8KWndeGiyw2GYH2sdgNJ1WsfKXzDssBhWmj95zpB7K8Ls",
  "key32": "A7i5iYt4hovgUEgX95HUReaDXcpSuPbjP3yDu76qgNNBrkuWaVA9rt5C5tpDafjR3gLAaou8dXMADbSKTqiMWSg",
  "key33": "53KRv5AWbNtniyXhtz9V6yY8KMpmw7QQzyrB9a79WN8uEezf83zPVbfHxbBy2xGj8hmAoQxXJbMucpZQ1GnmG2TR",
  "key34": "3BWgmzieyxnaJA5F8vMGgCjnhzfE2z1vojyH4cqsqNkpoB7Xqb2Dxz3aaDCioiwEFdTFpakN59gZ1sH1Qoh5ds1y",
  "key35": "oQhYX3oceuVgghUEhET3P2gJBKKVW4UmEXdpX75bYJnS4GRQ5j5bEqFEg5SxNFmoo6BoDHDTGWfxkh3F31cVTkj",
  "key36": "3V7Yf6tZLMenLq2nFBYcjg18CnAxQ5vxJmmE9nf1DvbauHDvWRwNjiEWmVh96VRfqd56bNuuAo7Qmwqq7VeaB2fx",
  "key37": "znnKDyMpQh78PHhdXL4rmPWvKJmjXQXEZgfaxSETEsqKYHi8G2SwJU1rStuWsScWQeBZotJUhjsp4N1igGhthSm",
  "key38": "48Yo8nDYRgwE5gXBmvwWksnh19Ay2CdEZv1mne7kd34z9nwwEi7uahUz6c2e4Ks1sMh9XqyZ4ck3Un3kWFL5iVoj",
  "key39": "4F1vo8iU1KgKvCprsEbhQTBvVH9cQ5ZvURQdhh4CxJtnexZ45WTwbEYKbdiuat2f3MWXLDQQ9vQaN2uZ5T8qtZVj"
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
