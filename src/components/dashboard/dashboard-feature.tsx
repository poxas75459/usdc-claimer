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
    "5KeqhFt1VpYWVh6VskfwjAiHidU7Y6gQQRC2hsbjguStqGTiCLU1cKYH9af3UHmvqdnagJvt4EJZDKMSzPunUo2D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qvdCpghBPCZsQCq4QtKpsPoEpucyqVi9y32217evN3r5zaebi85JwAxunNkxxPERZ4mRTxbRFr5CEerkHLsiE9J",
  "key1": "phfjSEEPpwWrgMLzfnKE2yFuRtPYDCU6oUagaUT99ihD6AsaTdXxQ1KPSA7yAHNxLWYAtYG5U9UVFfMMWtYnPZT",
  "key2": "4G2AcmD3YYRnztGVP5PotEkz8fZsRsxJgTmZM6EpNvWMzNeYHdgVtQfDkUv2rpwNR2Q5UqrJQ9AizEgJoyYe2Wyf",
  "key3": "2z2TRJybLHgR9azP7duihLkWaYm9nK6DuQEEgs5eTJc7vUZVQE5Ssqt6JTj98RiUc76rbr4D9iinoAbroQ2b6J2z",
  "key4": "4TmAbofbQzJZRGgsXn6AfEf9me6CtCK84YyqDdKu5rRnnxMe9UGjFZCi21QBkR9saXnM3ACZ54TCbsiSpVXyzTT6",
  "key5": "2MSQXvrzvTRC7VrrG1b4VPBtcJn6veEQHFgAfPqmeyaQM2mUGky9kRc6kDZd1dMeoSk9w1gDgY4HVeYQN28E41Xf",
  "key6": "5JRJBJfzyGKmrAfPZepvtgexmJFfnLPxVajycRpsnHRVZJG4tdPMJAAkCXPYLuXWQjwRsyFMUbo2yVMKQ2HWja1k",
  "key7": "4QjkmJSvA5NHsgnoz5TtZZmGTbsAWWgeGmsFm8TJT3g6jZva3YYoK7aPPYQoW1SwwgmLsXCsonAaEfEK4MUjjs7w",
  "key8": "4kbiqLxnuFaFiu6WqXzy2ak2wznyvR8Ew9KJBSMNR4D4RSzCKnGTXroB1fRQ7YnV8wk21u4iEts9uxWjFVctfi2g",
  "key9": "2XiNVjAmZpUvM7osPKGNDmNVjcQVdjEumbrbxi8EdNkbHDtSgvvQ8DHwZ4QXKBWTvppthdiS9NVwiceteb2WcKHg",
  "key10": "zgSXrNZqzk64wdMUAMns8FnZFHG5D1zBo8ykdKimynG3sa2zxxd95kadHJNC3vwsSV63o3FRfBTmkr6HRbCwvGv",
  "key11": "4RojBg7HuYfJVmpcXzVJQmU2NjfF1PLNoQdtG6aMAFTm3hkG6n2CLqvbfj2Aqnx6hAECHmUuPkKALVhsxufF11mM",
  "key12": "3eXKjWnhKddegCnSRjroAcJYbLoZFJnifxsT2mDUdbx8qAD2ZAsV5PquHLkJZAQcNMJnuKdNC7iaT2aMihcYmT2J",
  "key13": "ULaFGFmg2mAJQeJon4UqXYjmCkDy8zDznXHZMxoERe3oVXKyuniXWqPT9uia7nM4LuVXWPMcq5eM651pD45vHfG",
  "key14": "2eKUrV4vfetUd1DjAAhNdoYQXuAbcpTWBVzrQPTZCPNnXo6GMxe7imFLHY6VvUzQvQdd5ScdKwmoFRXMCHQN9Brn",
  "key15": "4Thjw7hkKtrpf6biNPxRSjeSGPsWU9TUEU6TXt5yRh36onLxytoWZPmemYeuVd9JmZ1DuCD343EwTGk5qwEkMrmK",
  "key16": "48sFER8wsgvNZoMwPujLtyr9sPxFgtgxuLiSt2xwshv7jvMH35dBDGwudac6HrqMyDNP14Nw6vHfsin8AsNksLMG",
  "key17": "sHBSqg1qAJyYJJCuYQqCk5zyGs5BF78PqiMYo3B7oMNaEBMFGo3qCFeQ62ipMyyy9DDdbp9AJY9sr4RcgBLc5zd",
  "key18": "373wWCdnfDNAjmvx6fFkEh1CPfc3gx5rfyb8HDQqEzzXUDyPnUpp9Qmxna2XHRByjeacFisncyhpcSGYDJES4vQJ",
  "key19": "4YDTq6zr2j51BuzAYvRM8GyKkYSwL5ze6pU7Mf6CZuhQigrV3weh9dUVv8MhApKKzzH7ooni6VrBWB55sBsP13SG",
  "key20": "4p7b5uqcLY6VeokqxE4BYpNEsJEBkMbWatWhbrt5ELSovGJP7e37bjxex2rtwYKgjDvZNGdKhrdD84YbeYVraQzF",
  "key21": "3zk3qCB4AQTp9dMufH6z8qT3MWEJX99g1DjZ69heg86K11NZLRjE7RNkAx5iH1zpaebtwZ7hkarTUFzYUPdCp2Vu",
  "key22": "3WkWy8iiSgLji2T4EEKkc69HGJo7dh9UUcRngU8MDqCuSnq4QayCJbJcYYuCveqfTpuCoLSb1pHNC4riFpodrfMw",
  "key23": "5HC5h1WSmKL8CQSuoL4pfQ3bzLwfNf4FGj3uXb9TBVhXKBemKuf9gjWfeHnhwavQqBAwTZU34DLj7WiUwJxGKMdi",
  "key24": "48gMhVqLSG8rp3ZySFJDj3tD5bnVtn6QmyGtZSwdfg3MZuHXbDD1ceZsLYmYHnk9864pHoCTBqk2ARefTLVU3328",
  "key25": "2o9w5QvzhbPChZVZ5VsWjLiLSbKb172c5TLNeo7yDTmiywgENGQxF9GWKsB36UtxtgnUDB6Dqrsuq6N9jgZ7zfBy",
  "key26": "5mCgvSjFSo8pwFrDXtiWFVrPMTyKFRpyADWtZb9xJ2xDESBgVGBay2RgTwZZbkzeEnWwsuvw2eoK5qgg8ALsAd5x",
  "key27": "47fnPAvrhL3zHGcNp35wTfagvSAm5hvE37m3EHKxijLVb3GM1StcjhQH4cayB1QwgnRm431qGqZRvndTjkqGtcKJ",
  "key28": "sQs1j5atzVAjwV8gpupUrHBDiJp46Go6bDu54bS8AMKDpHLgNZajACgzbr4jEyp1y1TZLpwW5khTjB4Zfrb1p9v",
  "key29": "5hpm68A4v7kKwhPjG5QhHZ2aHf4Es2FCZs9G7mQz7eVTcMdvfjiVgBWXb3U4bKx7JhAN2QYRxof4tJo2oNphqn98",
  "key30": "3Czg5VeNNuGuT5X4V8NTEVRD9QXoP4DBNaJLPVVqGPrq8XheTZnBfVxkLqLKkHY7hYMxJvMF8of5HqcCZPTzSQcM",
  "key31": "bMQtabfzMPFoZMHjrCvrqbnZEKA4YgW8FNs85tnhidXXpEquT2GP6RfagnY8B1fcaQWZ5dFQP4EQoMFsbDGhih6",
  "key32": "5WxbMHTSjagvRKwqTzm5zua4FqsN4An2GqLDaHJSBRicP3tbYumJQu4VqFbac3K6xHZmxCAV9a1zSYADitCg3Vui"
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
