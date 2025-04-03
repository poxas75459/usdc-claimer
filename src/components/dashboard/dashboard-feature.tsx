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
    "8VfEuszymPkgojFtSANR2s4wHzQ9UMw8qnH6ju5easWF1b4Aik4bcE2G2XDDw2xdWZBi74WHfckaNPoxj1m3Bfh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wPPZQa66mcyspHyoFYNktz5qHp16Dni4QkHM23siNMgsbggdwa73Ss8bNWFs7DxqTHa98bS2yBSktGd7P5vXn7Z",
  "key1": "2mSqfKfS2m59beUqTATA6vdBLSXz8XK6ErBLnLFqrMyCRfmwC29Yy89AgdMn285AXskueqFXhAqdJD6KV4gBskDu",
  "key2": "5YZQUwnANbwpwKuYuS7uCmUkngRS7K9sK4fjBkvdqSCDcHjDUYtP63Tn2AVALfDtGZhJiShQpRoF4AzeGnmgw5sf",
  "key3": "2oQLLFTZoToQroy7n3G4VL8m1WgHn4C2aRKvR5trFipwHiAL6KteMBrrfDNrWckfwH8Ej4mBPComG1cSuxH9KzDo",
  "key4": "EadS1KpqdbvfkvSHwPpPiha33qhxxtD9k6EXYZJcsxqkjL9yXrvuQX2je7gc6oJ7phWDCtYPNbBrTC1of7amxVy",
  "key5": "KBdXuRbaBhFYASUK1pe21FwPn7YyDdJonxg7KvMERQdC7ep6CSAajE6kJJY7yzH5Kmnb1ky6vSFwwtHdx4Pa2MV",
  "key6": "5rSB9BX7o2xfPcNAizFAiuWQprQmP6ajiULzFcaj3YjDgsvo1pnD3zL9e5DwNLwpWoSQjnrFBpWHCxpj7NUF6U7C",
  "key7": "VYsfdycrD3wGisBYjmMtMMVX2GrjuotEKqxZH42ZVEU1AtLwHnfVSQD63h3HvGJg5DKQSLaXEZMGDuWBCNuPsVX",
  "key8": "jTYXo2y2GCNHnX7BjfoVB43xfqriGBVeJT9ETgU8fYJXmgkHNWRVaSK8LvNs26EHaPQcvhGEDJRW844A1zVnSWA",
  "key9": "3WiWJqqzFq7UkGmKnGwh6oboJds4UAxTqdBdQiTNwwHyi7bqq4rxw5YgqXKqMtYFDxTpZvWhXr8Nd8pqfm1SvPSU",
  "key10": "62Q9oqp9QK94X7bX654kKNzNNd7yacDMLLQwBXfM9WSpzYKJMSZmk9kFV6g1jdfktdzaY8BoPukWksTuDhWoai7V",
  "key11": "J8AxBfyYDYdHmjg5rZURgrwRwL8zn9ZwEp9DUNWVNXxmoJNbViaMvtfnmcCjoApzSGTByJmXjMW6sBEFqCEx4ms",
  "key12": "4YMrZ2ozhdPEMt7sq5vPCLMzFvXAgYs6SYydbv6X43vi1aUJaNKc7cVtPDderhqKz8wGkLbZue1B12PhQHoerxDX",
  "key13": "5VRBSgQdnhET1EqFAhokLPkGoRhXzqBMQ2r4pDcsbUZURvLXjvRV39oFpbjNYHsMYny2Fmgki2A4a6e5TwCBrDLX",
  "key14": "591CkKb6vnDP758YVEoENFq8gziBKrhitWyKnafjG5Qv2FCCAScFFsb6PKikuMxpHLGfnoqLyFeQ4Ltq4ja5ar1n",
  "key15": "2o27FCEpiDLwMGJz72t3KUeLD9w7T9Er5NZnbEWnhaZ2Ac7JV4C82edr5aciJFZ8HPcqRzmBiWbWJjnp9rjnM1jp",
  "key16": "4373dBE2cCYTsdNoKmWU2Ym2MREceYAhfTvWoLfrK1Q62g4zu2SgiTqMWYpaj6S8M3ZZqweoHdsRW2YXtopct8Zi",
  "key17": "BKH4ZhDdxq213xSFv5YyyuStmK9QmHPX4Xi4A6FmtofDBGerUtTYXo2StuMZLViWfrDZsK5CbJPmFLinFvxFSPk",
  "key18": "5sU3ygEFKYpbcMZqWjKqxmJyA5bGPx7s3Vzgja3wKrSR2u9adKV9TSubcfX5XeWeJG5URQSKAE3pi7uqnms51nt1",
  "key19": "4xtTzophuVdKuhR3E1rNqKwtfzf88f5VCukNkZvjTqgM29tz3Trmsou49FmjysgaYrmTdhR59ChSf2sENXEERJwr",
  "key20": "4ENCxvZu88mk2vKSr2ZzE6MUdWbpvc1QtkJPpxwqZ7SrKyJUCeBuJH2xH7kfEHUA4gA7WAQ843Jrwj7bRMsd6wXA",
  "key21": "4AqtzpdS23hFhgSquKDKQDvBhEq6ycbmUsBMyoCQ8CSLCp71Ws4wArVkYFf4wENgP2bkhuPJk5dpp3f1doNJdhiJ",
  "key22": "3NBPXvisQfafb5ZnU8xpPtvHTvXgc5NLUWBaB3Go4PMM7GrE4nbiCgtnab3Qpnx828CUGDjuFvJj3r59ufqbc1X2",
  "key23": "5owGuCz2cE8QyUP4ryXmF3fBqAwHi4JphCjez817Vvw72CoctxJu89iU7Xa2xXF6VWrthgHmd5oHkp2bj7nH3CyK",
  "key24": "TqYecwfmgJ4MLjfKTczKAkk4Mr5P1c5PjE2uVDZFtQfLHysVGredWBVSQPDKNzrGnp6BUScMQbRv526zwcc8GyH",
  "key25": "4YHVMS6H4CyEKyNtQFgdCg1JtdEZGd2b5JyLCzXAj9dNioHozQiSLVRuUUuuee5N1ud4zLAXFrF8bCycSwKkirPe",
  "key26": "2qgwB8uHMCHPfeUmFZXvZxbQU9ZmNQEA6m2jhgyXHSAK8V4KBqQUTEMZ44VSgoX94RMVkNsGmyGgtGFHryvrswEE",
  "key27": "yBTUU5MJmPw8nXTiXSSFmApUzbpd285M8ZLJ54LKorWtFyLy5b25TqbZTgKaTHQEaqUqJZK7kY1FVEhEW1HKokt",
  "key28": "5UTAn3etS75PQoW8KckUjtiYfdysBhcfsQkgHrtzv2cEqiQ89hptfSDTtCPyg1ovzpjxfnwx6H6motTjnAHueWkK",
  "key29": "5vkU4HN6D8LZtjnJzqjCvqHgqS5kKiw9TFnLAw7GMtU6krocDf82YJyVJK9smYzAMCYCbXyigTBHAEwysonYthUC",
  "key30": "255FTMvRKmV3nERQ7esXgaR5S8CtFyv4tMMaYbAuux7f87kPWhgUGSZbRNBVBw9rq4PV5zokhcuMd85MQMEtX8e9",
  "key31": "2WBBT3mdmfFZD39rMhkqr3cLN6h1HCGgoh4nbopNVoLKChsd48CEgWc4YQCrMZn78TWirPxzosKefTAEPpwcXRAA",
  "key32": "5tA8TVKvjexy7cvmyKknHGnWs6yg9FP9gzjnHnbXSmb9fyVNxQpBP3gBeRXEozBjHHuCA7Skt5Bmo9Fwes2pwqJE",
  "key33": "3AFEX65sYuzRGmFZjgd3PVGHm269s7vAXKfUT9G4RkZwdcKzYuJVBZai5XxyZdbLXeSgDQHAbu7iC65JWZ2ojBnH",
  "key34": "5HZrzmsieDNavTeohPbLn4hSk4w9CvJZzkncXLgqWaZ38u9wGHG3PVAPeQzHLqCSvucvYUSDo6A8tdEENsLZVQo2",
  "key35": "V81MY9ohCKfVzaMwVyvkYfqz2EGzKAwwNeX7sWzUZCj7kqqhC1q77pWmNMwNje9uDRD7XZFNi1Ad666KS5XedSd",
  "key36": "3D8ieP7oVXT9chGEycc11wCnR434qz7k7Lu7iqifw2oA9FYEHRkmwhv6T2JKbuSBLWYM89eCUX7YUH9oKnEXLMh3",
  "key37": "6ZK5YBoDY7giW1qzYjzVFr1Lv31u4JpyAR9TTf5o9sBXKuDZoxkjtaBobPouaKfHX2LRCDRKh9VSkBt4NDQ573R"
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
