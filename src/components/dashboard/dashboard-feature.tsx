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
    "4vV6QcAQPQ7MQdTcskD8BaFKVjFwAsUCzf96KwU1LmbmYvAA5w2H2MHVUNA5LQDzuzSWzVxcN1n44BrepzM7HCp5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9S55HQjw9ocwvZcT7wPCLKgfAS5cCWLkw1CT5DQ6PcVLFkBtnU1J7XSdAxBcJmr5eckZLQy137PPzMzuB8tEn7E",
  "key1": "4pXZm6UcExpvvHhArZjTKTW2tE1Q39tf2tTXavRVdA3r3u8n3PfEspNMjP2VKeUrXv6xDpwUS9mdUpvg5UvXGq86",
  "key2": "5A1vXCAqQNqNA3ddKZwRQRNBXrFkETnZZEkwR5iY5MdxXS6TwjXDK1Dw4poBDuAFizHmizqxcibqjNzyQYMJq6uD",
  "key3": "5Dt1kijw5x8QtJzjUZFevYmXSArJdQbjj4aVtT7reCzoEm3E43u8HLCc7sJ5ZJxMebY3AYSopnv8eNCi4y561wXm",
  "key4": "3dFU5k77Dd8rsDsdEovuFx95aNoAn5j2UMpk2N2UcfqwVyY5Vu3ghNGjmsoSUUiNTwsgD1fe8rm3Dcue1PC2mTHq",
  "key5": "WxWjzVSQCpKSwmUzJb1PnspFbPGfsh8udBgsYf2jKnKZjjEJcsHrRHoo6h97aHwdqTjmhGm6Wi8kVNmV9yhdaZP",
  "key6": "NVmDUTeM557fcNkw8qyn4J2XNgrTnYjQZX4SwBmNvNhhEzvmR1MtVaT3gURYby3k7wiE9fGS5h6DMuPP3FB3pzV",
  "key7": "amnWLBfDryLLiXtFEDj5dX7zdoEx9xy1hbZr89XZVogWXdxhotNNBzAGJyrNjiMM4BmYqzQFAQgwxxa1S1DEr9X",
  "key8": "54gFJeJ3cDbmnvzB6zrntemZc6nWWDpWhzu8DA3nFDChVHUBuZmQk171duKmu5hTyHv6DfckihU7iPApK4SZEHUG",
  "key9": "FyG8aLsYx5pL6Spb7TUvF3yfXpHRFbTUVqeYvLED99H7sWLcErBrnGbnwTCRNt1W5LMjrRh4KpRtKg7ckviyJyy",
  "key10": "65DPHpWHCPC6cZGjA5D8DnpU34ehmavt45mBJTsPKwitqsj4aPncEdRCJbgN5pFS9WD6NA3EDDyYjp4BGgtHAqLz",
  "key11": "67aZQEwqZ9X8kiFAi58tvVbNzMn6CGtgL3LGA2bpETz61A2W6w4x73hYJStEm9W5YcoWNZuGVwY9F4PMtV9jznF9",
  "key12": "5wwYovUFpuWi4iPhYRtnEYn2svKX6wioCTYmCZoFRGMEMU6XXMzpD32D9NvL4ZBbTxXnDFr6xiL8y7Bzd6GC3EvV",
  "key13": "theFtg8GzQNQRRhZDv3M6nFSeM7AS9Q67vPHUXndE9cJj59to6vFrzQAMohy1NUWNDd2H158J4Y4WDdbWVHFNrP",
  "key14": "4KvRiejijvk3RBsGD6XcbkivBmR4iULyeCsy8P1t7yNjN1eDmdEWjeAZ3Zt9eJNsEgJ447FYCpaHCFfN8Wo9SPj1",
  "key15": "d3TuTvm6kgZL8r2toufeNmHiwzwTggPREo2Ermmvh8ktpeeBi6dgaiTB8nJWXn5euD6UCQPuJifP38YhShsTFZu",
  "key16": "5QXUKSotq9b7EHjFLUxfS5WRpE15JmwJSnsM8sqpfCd7X9YckG1PT6zQHzbi2CCXXtqfws19nw7zpxYPbU6Q2FPt",
  "key17": "4ShUFH9ax7tG2ANAWN7HpgY2tPHZ31ent3hvJLJt54eDNccyvv9bA1KDq2RpP8suyNoNNGNEZ4MQvaSZXSVFFrHH",
  "key18": "65wuLcqK5qqnqE9b5TvG6CokjXTrxbudghuiPdyuZkd7f3VeErjEbYnHzjvPcE5zrHcNP6Bewf7FSwi6e3Ec1vu",
  "key19": "4dRfmQJkottXZQFJx8mB9F7igVdp8fxhgseKcMUPeukpwNYNwecztUQkpoyeNAj9dtL7HKAH5RPQ7t2ThErVyFC6",
  "key20": "5818ET75TpJqsMtGREY3SAjzNGR69KHCvC2uZvdkWcVBkxxgVj4n4SQpALuqwVmQiihVvx3rfhL617vR9fT896FX",
  "key21": "4WiBy2pxtv312dbwhF9N1H64RSp7kYSqVUFBNsaF8RbozJsys5GfxrU1bLNnpJHnmoJyjusPEpS9LUMnw7UH3DPG",
  "key22": "FL7VUicDMQ9CKGXY5ZQAZpdxJdK2rqABKtjxKFMTsYfXuVbqMevWpo93Aerzdk2SNTinBmMYJBEVpND2zNW19Aw",
  "key23": "5W2MG4Q13Yr1ZdUVb2W39BjtHXC7HFo3gnwCmzkUDwJQr5kwiTUcoHY8psaSu3bMSoYBYBS897n6yN8p15s7ocuJ",
  "key24": "KFLGVo73HzTFBoyWs15YMZp58zKW4yixaBHcw52CX9pQtDhARDMiZrmiaMpuK6XsaryP362RyF4wPt7X8MSKQAF",
  "key25": "E49snHefzz4owdGX4CHnazfYHHr9ryCoAWFtSXZ7jsCjh7R4xssztDG5KyPe21nmfADRzwYywnJSarqfaUXitBy",
  "key26": "4KTNM9X2X4XVkYx9TBKeXJKxnEntpg9TgRsx42AzUajR7wq42MnDWDdvppfcCz5egMYcoBJNssmXvxHnGepDcGk2",
  "key27": "4VNaDKcLgZaubMbZxyEV2MqCiMpXVF9Gz8qYBKYQLg26tFhff5K8oAFG9eEgyJPCmrkyXZbjAsSUJ79yuWFCEcA7",
  "key28": "5vHNnQMxkKiogsuip3pGwDUQGWVix1o5HiDcPeNXxk3zpCEm2uYBCHCYWkG6fZRerwEKEnuLe2NpUBQpR574y9NG",
  "key29": "4RXYBagQa4xP3wc27cY369DhpRRHc6kffdzZw427ByzCPU1M4wcmyM4TtdiNkMGUTgUGCWKZeR9nKZFXegAXwV12",
  "key30": "62HiLXkFjv9S3r5DMZvbVQE7qj2KX9iNRetb9ivFTS72fHUUvbHdVna8dffZzrx6HmpJTtVyt1sRzA7KvrQsgdD6",
  "key31": "2BRt5KPC92rd9CKUuDymJWQQUeeVHkdL98aCedmvzNkYSAL7cEX7p4myxFLEnWZ1fNZfq8f5CKQqALbVp2RAPTMQ",
  "key32": "TAdKepitoXQRjPH8soLskLX2i1BeGh8gd8d5h7Lz8KYott1WKsdQ9skNwYC1Nk4EzASczuDXzZ6ZtgE1vLkx5pr",
  "key33": "39WdJDCzaSVDVsxTTTphNLor7TfoM6oNPgJ4bhEgWPLZ2mreW3RUKxbTqMHf4iPVBqNpj73XQz2vyvr2DyiPXYib",
  "key34": "5Q5yoQDCTwvdrMUeaaTtHGKpSdjFR14jHqA5obDLkPP1sHd3k1jAPixbAZAWuMN1zVjfuwAsxBdMrmox3L7koQYB"
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
