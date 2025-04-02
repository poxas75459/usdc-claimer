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
    "3ADzGfpCBeTLP7o2uNpK8Q8XdNshU2DyxVCRJ6UhARZZ3xVuPEeTw3phnWaw1KgCg4iEkUN4FtNDDneTfdpH8gk4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GbfypZHm3CECsFHcaaAqFtqWnDJSayDiuWo2ThJsEKeugdUk9C7Kmkz4gRcAGg6PMkLE5dyd7mkV3u7DbcGC1Q",
  "key1": "nFWZaDgn8Nk4Y6LdRGsg4saeAJzoGS5LqjDPNhEJrcrrarorg9tMQk7HLQecgWhvMcqJE2FJHmdQmEjmthWsPvS",
  "key2": "2qfeR7gXetW6EQ1YU1ey4djnE6MuABnkYbMEQXuzEHBPyUDxctW1MReD1pvAmXb8aMqD89z7X5pS7iv8WN57k1kJ",
  "key3": "5LqiFvf4a19udCPa7U2YJxtrRnFaX2Y3nDhpaqrn3xGrTwHA2zdH5dGjvSgL2mw3XARD92X98iibsuQXTNev5icR",
  "key4": "gcrSv1H9gYwdFsqy3ZrqjxY8oqQN8SkYYVMa3NfMbcS2tY84z1oXbGb4vSqfMCcrF6LLBZQQj8HuLFndAoHZBJv",
  "key5": "2zhowaXmGaJbvtFPWpDi3WwhA4YqQVdEWHrnqg2zUDBLgzsW2j1AyQ3yixM29n64jc8n5eJcBrTWU2ha8AQnf45s",
  "key6": "3QWbUmeLr5ykmBKJk3MN4ct3wfKj8r2sydwwVUNBvMRqcQpfWvG7Po1xRriWXuDwUAKNvJHHo1VFo86e1dCC1Uh7",
  "key7": "TQn3eTB9iNKqYgGTLEXgRownnALgm4eKjcGg5UYD7ZLu27PfDqaeLayiQ7XMZuLT6KJn9oGAvX2C8SxvHKN1L4J",
  "key8": "2F6oYb4FiDyszaiDnF8ZYtFJQcaN627yYFxspfP4ii7Kgbwbo44FUFLbLRfJ4nJE2vBWcMuJ7DBbEQhVhPsMGZYe",
  "key9": "2FFo1NdmHsd7XXwSzjaVYRnBSErfSqGdkfkDX8TiZmsRD9sYrNrTpLXPhSeadcBnYDjBPKKW3RG9aQ8y4Sk2S8wL",
  "key10": "Yhcog1fNpaqZp8Q664fuAUAe9KWKMrAJiERBDkCitkJKA8bv2pmsFb891EtX2JGC8Gka9V9pGa8sBN8mCGukGQ7",
  "key11": "5JCpG8g99UiMQqXZktcKfVWcmJgaPNEYBAa1FzAhDa3gcgFuxW94hNmq9ojH5ycGL5EbBzEGwUxxsNYUfvBoupBW",
  "key12": "5GCzCVgNax5rAGVkbuboNi9FmmKXXC4ajzFgsQaV7cgwsyC7mT97rEgcD2ehX9S9fzdDQQvjmS9w14BmKp11Tfop",
  "key13": "384b4BpLdGxhnJJ76jpxGwWWKCv9WVjABvgn4Qy61qFn8itXTGzhusUsMtf9UNniLy4M5MMDfXVGTYxhZJhHR481",
  "key14": "2FERidCE2Mas9K5vymTjUgZhCb91W9AUM67qdGr1LAqaVdo468bbMkDVaMp3iZZhkpTvVY64PeZamKo38doHqZRc",
  "key15": "2jn5x1ZFafhYfvSJVYhr9Vrm5fGhq4MJVZmMQFKVSnwzveviuMWWAyn6hgxKNWF5TWqm8ubiiUYmZuBxWVTZ2TH3",
  "key16": "5iRdWfhyYJCvbUcedqNzmRoz8ZMxdxNaUqhejAp4pNtEkKQ9LLMtU1aojaPbxrVP1vJGbQYj3MScffT6ybySsZLA",
  "key17": "4TbEZtWNowyLsJRNkCVQZEKbZiqisHHjLFDCkxcNXoeVHUPv6nJ5kYyRuQxBYutKvHwuijsecJEr6L1DdgGaAQoW",
  "key18": "3hmqoAF6GfoX1wySmgRQAypWjo5LgyJ5P118WHB48gcyZdUWND8DYo5iQ6DtdbnppZQJbYKMKbsbs3EfvQ4MW8z7",
  "key19": "3w444REdo9V9fJBH7jmMxkqH9e6XdJQPpSHVYGKSJEqBakDD1L39f9MeAwcytZmR21GCAnnF6oUfP2nwPk46dSg1",
  "key20": "5p2KXqpwJy1AybG8GMP5wUBkQ4N53J4owLABJWGwU78Dw9dXN2Fihzm3oo79Tfuf8v67AbDRwvzPc5oHm7enPzYX",
  "key21": "22FcHw2bQQUXAW1sPFkLoNLBmN5pxykmryLveLETG3anBsocnbjtYUSULW28BPVNwpD8ufQMBxC3raTdQCMbnY7P",
  "key22": "rKH7TkZoZ3w3jmuyHG5223nwV1y256SLsn8LrTo7TsWhF9h31zTqSF9skCdyW1vMF9WARLUC6JaaXmLN4e1wEwR",
  "key23": "21ZcKAXPDwdWQLnqxjY35KUC3tR1BwHeZeKAXP25XNizUj7PQq1TwWgAuBFaYqRA9kVwLiCscwrZg1YBL46dxHYU",
  "key24": "617MCXEmHUNUTUGkkJUadevrwN5SRd7PvQMMsakCA4XvALxcfLodWAwxhj1pJj3HFFRu1bb644fsBpoC6sGT3oKD",
  "key25": "4UcKw8pWSVx24PHZWtRB1Njien9jQ6h4dPDaVaRCgx9XTzsFQTX8QKfLw9yNZr73S3kVoGP1hKUVTpkS37ncbRnq",
  "key26": "8wuYAu2BfVHgaWGUxwHWtUbwz3GnJWhjbBRTYcq83UP5hsE8icju33cFaGTeaVTpPdMH6xUCr6YDHAY4XZSrES6",
  "key27": "7nhKjmzEQRGEZkPLwwkpQF4sBSTK8rH9ePEsKzS5vUgDvRPzNoAdewkeWmX4dM54eRtvzJ92LaNADkmGuDeFdBq",
  "key28": "42nW8ddjPkEFvCZjc4M4beyJGfJmx6RAmdTtf3btbUG9wkEJJ5CAxYAzJyBtUm2X6Eqk4WqaezN1CkjwqMTrLYCh",
  "key29": "2Z69Qo1VskL9WHpvNWTuvJqaco423VVKmyZYYFdLZKgPR5RPBTh4bTCoE8kGkHy2Xo6Xs1ieWzBrDKL1weaFaTmw",
  "key30": "gHH77QNHweCE2X6ymg2vQobvNNQM5kVvcenrHis9o9xPejH7JYJXAXkc6BcJcWdUqe2dj4y2WYsjUKVNVtiPNXa",
  "key31": "5dCVuEMmqGEuhMs735N2BxTrEMq1kHbvEdJJPHXigHZv2URBGfeSa4aNJqgfThgKKMMHWd7PCJLze1G3C4Mk4Qbc",
  "key32": "5PqhXzDxcS2Gnr548xyVrZcSTsiU1mvWRDyfGM7zcoK11Ws9CpXMqWn1t8Jv5MAr9d5P3WzRREdryESD5bECTJdT",
  "key33": "61suw1yS79hLironECiZbTADQ6ByVVNZwCRvsrvLeM5EPf3PycSkhnZKToWtYgkrmUHzVRQoz4fFL4KB1ocFszEq",
  "key34": "2vq4NzHdRfsNgv29CvVicGTKAyLHnrSbN2RokBFNBoDMXgN3cuTZTrTFK9iKRAq8iEws2j6SJZ25C7gRBWnE4Mvv",
  "key35": "4dvhWAQWxSnEXQdJ7XZkFsiNr2skLkP9mBRfJuVc9MtyvaKho6x3Ek8RWewhmdrbYRhgExmb3nNiVPa1gbr8Wa8C",
  "key36": "62BWbTfkns7inAUfeGF6sYP99vXtadWvXfx6cR6CddHj3VmWT249wttYcW8fAf2KwZ6GybXNh2kUBxd25HXPWTB9",
  "key37": "43NXC3i8APa9BwnQhvt7xr8Axpxs2pNGSWXXo4xuym5H8EedjfrkzsyZaN3GF69s7CKYorhaKVPSkTs15VazvwDV",
  "key38": "gAQTHpMqP3uguf9eAHGdFyvwAW3mjHCJaKZNtHh5RqovZetjuRp7qQbQ1Mrm7FDAJp8LfNN3g6GPoUVj73279he",
  "key39": "5PzXJh2qJZryY39PQKnffg5KnGKsxkX7e41Xm2H3pXbPpWizZTzwW4c5MZwLsdUYYaWy7i2v2MJ9iynnS4XSxQs7"
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
