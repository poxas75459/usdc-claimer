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
    "5ZRJsjtZrvat9q7PwW8dnLHwxfpjRntEkrzDqgdC232obSYwZhZpFkBUrfe986mnS2gWMT9ZpE6YvvGmfcjeTse7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vvQ9MAYZDmF9nbowGx3ZcFpXN46Q2uhNt6RZkFbn6YUrRW9AqumCVsSBfRBqkjZJtnXPw1CcanZyZ2XuPSHgrTr",
  "key1": "5NKgNy7aSxJh3Lf2duacxQsHJHVHNNYHEZ1Wcg7TntsA9pRrUarDyrSJ4hpBb2oq6Ura61np7WNdupZJTmu7BjG4",
  "key2": "4Ty2uiyaGHZYxQMuvcCTWKHZfgvtdUKwsFeTTZ555Ks3LWJTDHrLCsevbGtVvc5HKsEpQ2yABgkHHzoMhY25Bzv5",
  "key3": "3sixgjV4hTyRsFGczsfS3XPKhWe6vwCF6pTbtn4q7jhTUgJVPHrnA6j7hZi7P7GRLST2JCfjHYVVdv5ZhcVkD881",
  "key4": "4FzT3768pkuKLqdn81vk8cdNxfMAckfZToLD8ZrZtmMCQHVZP5NUE9BfnjXqrk5KcFz1mqNWWL7uijnLdEcVSUHq",
  "key5": "2Ra3dMdoXfXmgQJCF5KQHwA9i4vKW5AhjkDG8YniYPLBZ8ELnygNvcLAduA7jREjtJkDtNXxgMaC7vFN9qvfMsZa",
  "key6": "5p5aUDoqVtLCTkMCuSECxoZzNWSea1d8LaGT4JNafFpZyGdsx6FYSkzwrWUxKW4ve1FKhEZarm34CEywupoLeKLS",
  "key7": "2QfA3fFUwem9FZ8NCfjNegzCRb9mSpN9mDyipebrbVvG4GXatLShVGu9F9BSYLiU8f4wxjjVVVCsDad6gsgoaZRK",
  "key8": "5AGqpYwsj1icTnSHkqHGJA7FReepJdjSmSXu44dM4DH5PFuAAKuQdofEzzT1UmGVteeG285Q9WY7T8DCHTVNvMFZ",
  "key9": "3asxPKycLWyAmpDoKd6djgJBXTDaJq7hM79f7TSuVQxg75Zu5UFxyt1kWscDFVdBc4JniYCX6fEmggW5npvJF1ke",
  "key10": "2ZPeAya58rdSpUeJ25qsETAEbUtk32jmgNX1RTev8Puacn2yn1wiqKmTeEXxifg7PqLb6DRUigHg4qFghGXJny9a",
  "key11": "HMc4MxtSo8vYb4mv3agu2aT4rPP1GwrYrmfGcFTjTbd4iBjZ2QD9tPHw7wts6XfC8PNNmRkfGkhzszKQ4nB5bjJ",
  "key12": "47sYGYjrgeCMf7ZjTqSiF7iV1wTLxV7ckTr5WzHTrXWQyWZegk9NEWmc6wkrRQYU43zQSdFQEpscH3X9K4RxDVUs",
  "key13": "sqnfsXkybb3Ywv9W9UQnKpLjty7A8pJXMHBHseB3mm5HUqTkaUft1YyPow1LRj89U2LX2twPGVbBcg44UeZNPcy",
  "key14": "26LRGnfqpBrS8mnw3oC9YBKbA4KY6eXoV37NXLCP7WZTCp7BrYSRH8HodRYjf29zAjTcZvLfWS6ewM2iEDG5LeDv",
  "key15": "6nPynwNEF87a1o3CaUm6k8WWqzcjDfYkpGepjLbQ7dV9jHRLw7TfW4XoKBzHtmWcTiyqHTMPegDnXeCtQ1KSk9B",
  "key16": "24wVPpdcFNagTbvS9LWeK69fxd8HkJ3CHm56gXfFLFmQozYtUfPYADFeaKPcSqdPLYhemsUDptVKSNERgjbqRB1m",
  "key17": "64Rf1sSMk8oBpZUBmVfHa2yDK6Jpk1jb89KFy2FxL4jvmYrfKfyzcrwpVTEDx8nnKosL3fTTvEVe5ALJEZTrksJe",
  "key18": "TaEUi5PHXBUeLVc9ZhT24LcJsExGzqg3oSqwRR1xT1RFPJp5DpcUYCDSaWdjhenZTGcw63hR9HR9F8QNP4ggNNz",
  "key19": "shhCs5HBXmeXBrV4db4oFYRZq6MWzaeaFmP5BHp6qsym7YEaz3HYDufHh5pEZodgsgRXNsnukSzQsuBDuV67MRV",
  "key20": "3cqreJxXGuSfpvNjp7P9mKfdqAZQAhxeGzmCLgegRGg8t7UHFVPjCHw72jYs15Hdn4RChngadd1Dcs2evW8F2Lji",
  "key21": "2sz8cKMiaLGSkVyEwWZaCdTQw7ocLYFSmfMTs2ucfm6atmLC2gdqbfXvLr1haeSCasBbzp4m4hp4x4SKuK3a4hXr",
  "key22": "2xduXj566u858DerTUga4LbmgMPsgfvadUJWczRgCPbeYfsV1kCa4MdHnVxXYKpGiKDs3eDjPZ6FRC6eEjNbSLRF",
  "key23": "4QevL9e5484rihnKHyfgmcLxMWWdfGXvXf5PwV7vxiQKEk43FWm5RKFbbCKZoZmRuxjd659QPo877zr5PNTEC4vz",
  "key24": "BH41yVYtSzZ49X2CuYWFFFDj4G3CHv7YCdXsrQmxPh8gZatjM8q54eUEDcuzxaXuMbaqmSsBY21D9X7gpAsQR55",
  "key25": "5oN366bGnCHS7Nf9EhDFF4kAynwqc5XWznVv2fTx63fhjCvCLuxYGg4PZVzFUT7gBrjsjJdGPuNWSQxXRj4bfMo3",
  "key26": "iKLSFqEKZQ2QkwVNBgrn5eDRh4suym1t4j1cipGDY8pEqDfReFeAw1CBybUPsrLZfjhBHsXCoifgVa8vVohuo6z",
  "key27": "4nXkcvcwvNgfEdfhisuBWcU8SPkjkNgN2PyY5tG5tfVxmyAzJnofgT3UHmB31VHxaxQEjwYMfJj8RxbFMXb4iE2h",
  "key28": "mRkR5ShYSBq3w5s2sZL3J8s8ZmXs6KD8cioEEPpnYgjdfG84n88yqNWfEWiJeUwjBShpQEfFio6ZTpL8ttbz61T",
  "key29": "4puyYMPUbcitmThnf2Qd6hQHAfJtdyqtiguGeLvSs15GYxMSnV4Rk37qZqwxBYKSxFsbdcM1XM2LfAwHPoQvu291",
  "key30": "3KtvNwWxa64rZoKbdpqmndaZJ7q5YNR9Vfc5SEgiAMoYTNQwWXBHmcaCSXGVkCmBEp2STS9b4qhvHQSBaiuxhdrq",
  "key31": "23qs9rN33AAF17M5e2A4xChV6WuRepBP4MTpRd6a1oHDkH1tfCq8Mts9DDZWqKAA6znniYJoB2CkNER1HraMezgW",
  "key32": "5PPVhZ7uuoVhWF3L3m2jzuKDig3cz64b2uSe7j6xGjNyx9jhUHbXvexpfLFAjfev3XCYuR4FLMPW99hyxA5Sgb23",
  "key33": "4yC2MyjJjUmHGFq3PC3MCH9TV6MiYp38VyoR5JMqakgwMAr3gUTKaEXFBYC5UtAJcw7AcbkLD5c5zzrLkFqFHZdJ",
  "key34": "5XMX5XuKuBhkisFuy9uSFoWjneQoXaJSDpSSYv9XQq9XtmDG6y2SpEB6svmE2fphW7KAD3RZs81UgsAsCDvWvDhv",
  "key35": "Kjxh3FXaU48YKqJu3aXSvW89YzmKzNigEoZ9hMapV5cXkgBwCY7jVfw3jeZ13NFWnTc56LVq8NEQMkb9w3TpvcE",
  "key36": "2rXSnsiFVmWKMNr3Awpm7p6sgkK51T7LrE3UvMWj5SVQoFL4phRUqPvBiDc7kdeXxDKjM4phg7x4wQ1cbZUEP7fp",
  "key37": "46gLps1Vnns1hsRdmYa7BTdQEXsRQAYouUrfc6SctG14wsAxHRBby43jSdTj4KyxxGW1kV2GbH11EtBoGkQ2tm6D",
  "key38": "3vPgwvJAQsjPvb6Ht4wtC2xNHW28T4JvCh9aEAKr8Mw4tC9RjwzUjnoci5NsM6AmbCLvk34FY9AY4nAasnwijQXT",
  "key39": "aj8keQwJdqHd1oNrWi3Y7C1h7e25ZdYSvMtTF6mSPJGYqvoFz8xbjscnsvtdJwRGVDrpmgaebHjXGDr28YzVZEi",
  "key40": "5uMsBryHHQeYsiZQE9m571Fj8DusjXnUkmABD71VdjksFXFDvGdFE7jMePN2drFDNC3v3dfgiuiNYAGxNmrUQV41",
  "key41": "3JPdirW7y6Y74zNAhaNTW8bMAhUJMFQgaRhcSPQpt8Yo2vcZMPha98feyRywfDB2DNxSwXSvTmpQzQkrvugpM562"
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
