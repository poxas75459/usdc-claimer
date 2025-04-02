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
    "2NnykMBeUg9LBF24zVbTMvTLiA5Ax4S999jkvSujNe99DHJpWmFC1jXrXRT8PEqYoyvCqePV7fPvQirKNAf722Rh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "irHqtAjQ3LjK5R78wwZBsExNpRcpdMKyn75CR3UYyJgpyrEBRAYGS8cmotjMvcnfE8doK4K9bCakTN4YBptrPkP",
  "key1": "5iDtdw5i5VAnRbg8AyrbHQohRtjWuPMT8vDdx7iCfL3XERgpjnsiGNZTVJrVZHA43xxV6BLEanudzEaCDBp5L1cu",
  "key2": "LE3C19kTxwGVzPYp4wzx22ShcxcUyUsaNtnDHoG94h6cofedVPohTzhRuh7Ce5F3oue3Mt1bWZYvoPu1Epf59JC",
  "key3": "2Ady28i9xrnQCo2ybkFU1NjWU2M7CgxYEqBH9U9cokkvUre41vkg9D3ZnhFPBEsP5LZcpzgwupe6p7k2gA9c3NAU",
  "key4": "5Gr5oVcw3N5EDZALYvPa8WWKhDqN4TV6tUBM9ccDEMW6enDqaV7qgonjoJKp2XXorXSHiozbU7bz8QLpQrWDE2ws",
  "key5": "vLizBwjgx94aCxvhuyRnsnepTsmWczHcian7kTrCmUq8ihpqKNVaUmpGSUE4uDmVBHTxHLdJWLTjGdWxQDbcXW3",
  "key6": "66dx6nLZhTyu1aPEXzzkeaNCKn5ok8icLb9rpXrELesBvijWRz4n5Kc8cCrxuKQozmu5fkJZmzRs89LVrz3MXKW3",
  "key7": "56jC43GoHJviyoJVaba3z7RVX5Wtep2zU21C9dM7T8YaE5vd7VKBHqq3NNy2yw7hmspKLUJoZqKeg4tJ73PGFmjA",
  "key8": "9Z2pEuoC8hzQBU7EPZLCSZnP2RzaF43SjTBHgJia22Cr42U3atAXyabCGMvxniKjdcVBX7SfvUM6C5cbJ9CpdWu",
  "key9": "4gKMHYy3bFVP3ZEiTgEDpw11im1rKeitwmVJt4PzkEn219qZVkmm8u5j4zRUc6kxHc5X7WTVYUaR8JmMUz741aTw",
  "key10": "2VxZbwSEosdc14Rysztrxs67WrF9GU9ZQeNJz6qTM1a8LyED7NFDYYquqaFP7zSn5K8GrAHjX1Y6nZQjWxy3J45F",
  "key11": "3ZhVggfq8GPTWaYdH3VowpwGcgXBWm3DTqiuqFv3fJ9zqdA4abYgFk3gdDYf3wDtDoHKHp71z7RVXmaQdAwYXL31",
  "key12": "3GPV9bmwfRTBg9rtprfx3pWBD4482LSsW46ApboniCXnYMKNi2z5gwFX89T4xW4q974H6KU8QXtfgy2F8Bo9RWRe",
  "key13": "4BD9JaWhH3ioEzdWaZhe8xykow53gRt6tNvj38sYrKbAT1KXY37y3jm92CTbs3suYdkH7stskKruHTRFuE4JB28m",
  "key14": "4zTLw3P5ftP23yggV9BfSA61EU8AxNHqATPbqFX8EKVyvkwoJPvbpkhYAYK2jZiGG6wrG8Ggbq35PZk52eHnqBuM",
  "key15": "4GVM57rC7bYcrphgM2KEn7H5xXHFxHYZWbVA2Kxvo5tHoiUFU9mzQVifRir93uvLyqyiUvw7TnEXU7NAkx4vWkrX",
  "key16": "4rQJKaQjdVK4rtj4aQXHdsQECBAXyZZAA5NkpWCUJX1vUDU6xe7W82XimCh3CuaCvkGKrJkKFXYZG3mZAkoWgAXD",
  "key17": "396BNjbNUGMAG91Qa1DhpxnZ8NLAh2qN45zWMBpeiHiZnpinNory3K6Rr4SyExDonp7Jdd7TQQLqo5sCih2dVDNq",
  "key18": "4r9iAAYTyRdx65W5yX3HLYcynSDuqJF1r6RdmhYvn4jBkbrodzTED1weZEWrGz84VBZVuKUrJfWJ7xiC19maZ1MA",
  "key19": "2ZqA6aPQ1AWQF8WKmwqnndx45conZEWo9v7RrRtKdYzS76QhVmevjniVztPVvFLZaT2zi3ECaKba1AagTDFPyw61",
  "key20": "5UCWYjoYkYxYR7yVdHQNZGxgSkqJ4gggALZ2E2VUDQm7uG96CBnDhr3xjdQxyFxXesF65j68FcEk4WUT46E9wBvL",
  "key21": "4yJu7ZDJwUwUmVSznG1CPHw4xwHEiKVgT4ZtVd3iYYgUWwFWtFcqwYmNaAQDu4h3fgj8r5Vp47bPjq9pGfNtqdRa",
  "key22": "5pKFpMHeVNtxn88ijxY37kN52g1BBJWnBgCdCXiyqrtCvUFxPzek9VQFsRF3aRMPFVBvRR2HifQWf9JmAETy1Q9H",
  "key23": "2E6WeNe3Q6aQXzdoutjGRPc8UjB1DWMUtzNC8bqjLowyFbqeWvnfp3sptVoxbBeDdBdQH4BqCTHT25HbTAtktPnE",
  "key24": "3arBgscqpxpaGd7EgAqZQ4BB1h8EhADGH4jnX1TrJZoeyzx5D698dGoMuYe413iAykK2V5BvQEpi9ZRsJE8Gt8tN",
  "key25": "4C8W7meexrdySHsBJMSNdF3wkeUaBm9zrWpCCd7uFJiNtvHdLYm6NF5au6A1iJEo2mcGawtLmW4s1zBcYzsAKTgD",
  "key26": "4UArB2ZzvTfPo9VWdbg5hTw6KzbGJgPiFSCKqw5NExHk1gmwvoLjj6QNp9BD6HuJGSMEy9BuR8DGBR4HHuFWCNyP",
  "key27": "5oyS3d81HBQDeSHQrjmeS9RMJpHkfFKatvVnVEXSQkJmX7teedgc7AzAJ8aDw8HWto4TX39gK8GCRdxSWTc22xss",
  "key28": "BCxC4FCkSFCR3czsHKSBTLo6b6WYoru3qJBK7QVyizoGncebGAJ5fWPd9UdymHWbPmkZKdWm12aYXDQbQxCDxe2",
  "key29": "46geUBUzGL6BByp7kmirp3fz3WJUPBjGJ5Dx5tYa4hn7ctLVUP8oQBL2HmTNzHvQwsGasDMqodUY89AmMFcnjKrT",
  "key30": "4FMWXswTLK7rFgbUZe7reugr2mLXm5ma1A5ihbkGhP1foxDL96YPLqdJ7ARfu5JmY8t9YwLC4dnhzr4QUP7w7VEy",
  "key31": "gcU7DBz6frAdhV8k4SsRuMEs3rdktQ6zhiyqKfzeHvapnbb7tUnDxC7XsYzndpy38YZHeFVdVJcfR9JmioXbtsH",
  "key32": "5aRnipzwYmto6MnWqUhkxdTeDwk3VH41NMcWYCqkSXFcf1MpbnVWbog86zgpaeHRtVq2x8kQE2c1zAz1BpSenTo4",
  "key33": "5tdmDLSvT62npJoBBBY3ej7RMMAmB3YBZxYGYGFS3jhEue89bEuJGoJGnMok99qZDTwMH1xX1qoKhPQoqwSEgqKY",
  "key34": "66ySXi3PrE3mS6miFo8azAAhcXDZN8Rd1upzAvEBxA5Lf4KrPLJkJQraC9zvfjESrd1HJtWDdZRTjv7uxtwd1U4F",
  "key35": "28xvGdyMpYVAVQWsMcNf28s9NgzuNsu3j3asgZ91EUUSTMBbyJ7GZZfJacuKFaKCaqZqcCujiwUBvfDNKjfayuUA"
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
