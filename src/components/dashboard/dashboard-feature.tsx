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
    "4kcc19jsutPYFosdJvf3EeaPeUJgdEP3vXFXk2CwR5VvV32eqd4frjTjd6M8mus81KyifdotfhP2oHvwnsEQsiRc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CZbr34jjTUEHdDYc1keJ6NdCaHuAyoznctHr6dzMr2dfWSD12T5NM7Q7e6RW3z1jktobSdozeeJYKynaNxNAUWv",
  "key1": "5eNSU44JRthsB4WUtQc6R4pe7S8pLwCY2gdKSZYMZdu6gzWCWDgP7ZADnCN45BWASJDPQX2zbc6ZAcUm4yGf6MS3",
  "key2": "RYB2hSTjAgdXmKkxtQFbv5Fiiz3pTFfVzgXQoJxubcn4vbc4KoMt4UoieS4T3z84R9sP2UViPMwctRKhf4mNvp5",
  "key3": "5zdUuamJXAqMAaxPQm2PkTbQyEvnhnt7CXVWowPwTbDpkLe4xu2FBLnZZZfsvPA3Ykq2r4ys8bJzVy38qY78Kgxk",
  "key4": "57e89jBRWkK7YcGaCowsAVhxL5zwi2ChaaYTrn45bpcGoggeZXfppZfwvQLqVzyTe2bM2aFDXsGqTnMRFmGNXqXT",
  "key5": "44UU3jGQ3boAguKRZZ8ojoEbNAxAkLubVkos8t3ND8vwYXmtGk88VuuMmPdLVuYUiaoNNZVcc4GgvY3PRnEgEWzp",
  "key6": "4xGXcxaUBjBRXmgAprjuqdo2ANAhuDd7av7w1YKKSwGkvSa8pNhXrQuWu6KX63GGFeBbincsLm4M4woYwSFHyLYp",
  "key7": "4qABAS98hJYvp1gQTdfLMPhWz2oPLe7cJN7rzcHhMLGjvzbCYg6ybkC35aD13MH5FoWj5VekSRPmPsDmmmyakQhB",
  "key8": "3WV9GHC5qdUMGSdqx5ydppd6k4e8EhqQXoFr7zQjUDaNhmb2RAZtKZFQ7YTXeRNgBDybspFx9hvTbE8tTMqaRgtb",
  "key9": "27uRGqaN8B9DyqSsFyQcvjGFSyT4Bx9GnRbnf8t21AgrH9WV58GUPF7iBZvE4NUefSmctQPZzrKL6GNKBH8wodd7",
  "key10": "4rrging113fhrzP4mxATPRoCERUia6PQfhpPyUQHPZAfcBkSx3ZoCsg1dcsoChsPAvyKVWMN6YiGM4YEvfp51HTi",
  "key11": "TmrMTJnejz5UmVNTSkspnH2uuT461yNCVUoymWzPLvHuJjYuuii7vbzG6jL1NjHzgxZsaBFRAaJv3SEcighNWJ8",
  "key12": "3UJsrP9ZkE1KvBEGz18xymJch5daK7MQVDnRro34aiy1W5BEZmHYydwxArLNgQtWJBhiW6Q2vhfjtxNcp42JbMEK",
  "key13": "3WEtmix9vp6B7iL3rqEqCtD94hqmj81KYTRQvmzTyTprHacwrdbGPXPVstCTk2VKa8bJjdiwmErNboXTxpsRt4qD",
  "key14": "4tHPVCqGFXdDYZnj2qZhpCepNPtw5xRchE6MPHJVfANhCki4P3kSijTzo3gNerQZoYB2229RQmxDFo1aqQQCyhg3",
  "key15": "2cfnwx4MEBx3pdB1ua2K93vFvD8emPbcGxboP8GypHQ6T3eJZ91jWS4g9YAcpcxaEpgE1942xaEoVG6ZbGB1MJUy",
  "key16": "3Bqf3VKLHp1gBSwuqJVNrV5yczSnzryWS3NZjQw9E1aUkUmnN7owpxNPYb7pKBhqbzjjc7fc7epNxrS6gAnrx9xt",
  "key17": "XsaU5PyuqXFftpfwU1a82HNKx7oaM9jQynEiaB61qfxRgEPuHcscYSxLv8SFatkYbxBjd6YsFt5RsgJJm3rbia3",
  "key18": "4NCTLaZuCfvgY9KikxBjfLQ4MCeLRMQ5tC5g1CZRZLHysrM7sfaXHN2DYMFUCFabjfFv4GuPBADTmNmDurteMXnr",
  "key19": "3C4jQu6dygQZZkf4t8aMjBSmpwfijuPrGaKdtvigWbqW2oTZdR79biVxWDbcMLb7HgCKfLQeGJQKB2xbFF7A4UpE",
  "key20": "mCMnvKS1YnnrwU4Yur6ZNr6sN5wsCUBqw7JsqBfo29QVGaGCYXFhuf5CRP5tQScRHk3kp4aU4Spt9Qet4bSd5rc",
  "key21": "32iPK9uZqMAHxP2uNeiW7GMS1MuXvYs6GvscB5nvsvAMd6fCkEK7WsZW5AYmpYSs97jMTnxXYfJnikB2DSiCzo1d",
  "key22": "Q2tZD4TfPcNcSZV4Fa3GTDHj7XN2dpvVQ2Mtgf1hicjfAnYpm2wHK46ALPM9cYzz3iwJ4nYS96j3s2doMoXZ4Jd",
  "key23": "4FDeuhJkwUxFqimR6QJNxE3WiRTs5fbt7Ccis3Z5CMyk6mzFeDw38QpdjBASGntMCd61RTx5BMnEVJ7FKF2wKx64",
  "key24": "2X9yC2o6CgZJJhDWje3y7RMkZnLmST3cKn8skyyPyxHWXtyNq266qJYrgaSQDHJBKkTUsuFGV8gSpc5Tc4ACZW62",
  "key25": "61otWRY1xTJppZjKCuznxfwxxDu64xxfGgJZogosewRAxRVwyWrX4QhQjr83CGX4RXf5jEiuvjiew19nfbUSpjwr",
  "key26": "4cJbAqrb12b9jreUNBTgVHi1LtYek74x6zcBHKU8hoSkXU6EwCzHAvCd9fsvvq5ADDxcdVnpoGeqfdvVAEUL1VDH",
  "key27": "2MiLAaF1SC5ejxgnUuAupPHTJr32mHLrB1L9wi16QB5QsN2gVNgS1b4bYT2Na1iGMYPHp4HAGvYJsgJiXkYSUCt8",
  "key28": "4KtamH3KSS2XwPKXx3BHSYzSCvgTD1S2n2nfXVGPZc4LdCLGHRM4fT5QazXJYecr5zXCsVLJv9nwB8ksuW1E2a8o",
  "key29": "45Rw5byhNVzT5832XPfQJNy9ZhBY2YjKsq99KwLxFSF5mzitrNynmNUrdoSggwFgF9xf51UQCRfpYXgt1nyVbpvk",
  "key30": "4yKvuF5MagvttYNEySFA65A3VyuVJR5njFhLGoh2QU2xgfvukJnnmX8qqfXPYD4X2VDzS5gfJ3DA6DKRNBarJfT2",
  "key31": "3XtHsGaryKrq6TEwLD5s39kM8pdey9H8952kYmNDHguNXQe46R1gNuytTTb19vdpsJFRcxXLP38CS6k3LqGCEb1j",
  "key32": "3xh1YsdmjJdef2xF5nLAhxy7aFAbQ1XPkXEL8wQZCAngt6ZbpPwXdaybKEiEXK8szAVxdw2J1dp6Y4V9XVSzDoMi",
  "key33": "676TRNq8msRaKBbEEYXt7WRViA9evCFGs6MZEiryePi7vZEbyJwNMSkZQpqf9JgNHVdYKjT8AimsHUhFjWQn7p1z"
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
