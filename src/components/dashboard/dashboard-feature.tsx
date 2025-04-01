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
    "Ai4WfafCQrabBEhLsZ1K7g3PyTHxHxMDrg5GktHa2u9u3VQn1odomvZmn8cH8LCZ6eYEGnzDnsmKM4fjg8uQSa3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vjgGigNGFnv2xTnzDZcnZauAvxWpXYEqWU5oACBCyisGKebxfVNYiBqLWqUUp74CeJYQnHvFs7jopwNDQtCiy3a",
  "key1": "2NmdM9PpKvPdgJpPKDJAFHRGXavycKyfYhAZqYmZaTAjQwYCigzpqjAuXMGUTGR3WWTBdZdZ3dYdpLxHguqSAFEu",
  "key2": "4fVNE8b1gFnvf1gdq4Z5R2GTjmeRVuLSHjX1eFW9o455jSPsJnZK8om2AkAUgu4uN1GCh7oqBqdDCn4mnp5syqs1",
  "key3": "2Hy58w9pDqatvsNSxqmo3b837gpCWQV8wnmEYrYwacn24Ezebv3rqQ1mzqsHFj2brNvrBfSEMWP1Hh7h3mcaQ2Z1",
  "key4": "56UeSfCZRfFZbMwRyQXziyMUDTouz7czGuMuKvtrUYRqb9GGkhLM5DJUq3rTUkt56426gEhamHu8ZS6qrYPVN4t6",
  "key5": "3G9eZGbURtUvdnBEtv6BDetDhs95ksb78oi1brrXHZjFMNHCQ6tzZKSj72tcJymPi3YtDyd1TkprKU2TzwHtd7aw",
  "key6": "2Zfbfw3M8MWdUBpmxtaWwvTMCKNsY6KiFuD7csZYP3QxMa4fDDQFBweEiqdXt7ooPjfoxktKzdfF2doYXEoVDBX",
  "key7": "5isGiTmTNjHouFku6XknhBw9LZRyQ5URCQwXEQrKm6PEq8m2gArqyn4k1bMM9n9MBJGSiDzGkGCFwsduhmX2JoBu",
  "key8": "CTvgcxbTDj2NZtULK1bdEKAAR2ABoGiEnCKuYSUZ6oitGQC83GchJgDmektqirTqbtvSteFSwJyQsmKwZ5mSF31",
  "key9": "2ECkchjt5bJ4KwGBu1sdZwi6dtpnjeM7raode5VHmDDiVajCsmJxy9xWso7tdHjcYrUBL86SScvr96KvwLPc3Sn",
  "key10": "2f1u3kSC5YfyWNHwVhbm1NXrXCDQJtYnApsKb1szLMkJfhBiTb6cowdjLrAu9kANRvHVQSyZLA9gWbgzzB1CYDhT",
  "key11": "3p15pA42qL1z28xkrAkDeYPrNZeHXtvRUbVesAVjG2vHTv22CcHn1XQjqNsAV7cuTqHmzV3riEH3zExuHEHUBzxX",
  "key12": "5D3zPVsJRnh2ThJNFvaKi753u4fK95V9871pQNtzwqL8bP8dQvjTzirvwWXzczdYXJHgZWvSAGByUFmUecjYSkSJ",
  "key13": "4nwMvGC5hNkLFmLXBhFGmQZga3uQPb1XcT5wHxxpTxhfzzuXNESZfGQbu6shGwn7szgQTRKf7cymEgxDz5ot8DZg",
  "key14": "Rssoi8pohyh3LKtAjA4SrrA2YGBuvEg66D4i38inyu3MZQjWwaqu6xgWgwYf9WfkFWB1dtW7tZpq8P1dzJ7dT7i",
  "key15": "38BKoMVsZA7oTjAdowLCHFQaPXSjqgvAtyruje4J3jRREhoFNxYzAXeN91J1EmU3nKDvDwpExHjMayhYXqKE8YiG",
  "key16": "4SYdJU7nWRSKJRjDBLUeAKvDg6EZJZZQzRpaCekvqGyYSiQbdiKj4hGmCxbwqYqnNBphzosnHFdjiS9aRL96kUWe",
  "key17": "5i5LZLTH9uHJqTMq6jZ8i8HNkH3WSWqa4aWru1L1znd6MxsUHCCGAshYpuyZMUtCm4R49FH62dZyeUQ5usFdBRYE",
  "key18": "3iPtWRsyUtvsuyJW4YCi58zpEDHwpLmRSBAGBmKx9dXv7PiKjGBTi5xs1t1MFuSZWTUHvT5hFXq1ruCSixRED7HJ",
  "key19": "3tnBKaCLb5qMnaia3jxfthswzs9jpXiVAfJaLNcQjCd4CbchASHscRYgD1mPzdkWWThiEFRhAh3g4uQ9jFMfJAW5",
  "key20": "2bxQd1QotHxpgw6oJ7hpFri5uhZNZdG6NGXKa2FbZcKwHpuhLDvv3UZ6y3EJ7ckVc2JmZrMSb9HmLdNoP9QhV5vM",
  "key21": "2hBAT3FCKUzHp8MSwBzq9wCvQ6QX97dS1xK2KuDYZd9cGLAcE61Whutz8JHczx8pcFXGV3n4hZTRD8Npmo2evTJm",
  "key22": "33ehtHEpjtBqZsrjgyqvK1g4H5NJ2bFqcFnihYBzrQCTRF7RdzwF2coYvz1EH7uufUR5M6izuoT4aQKmQBKWM3sn",
  "key23": "5e8kXb8tfuavTa32uFTZjCy1cbCy9p8omC8dL94PPCNJ2CUaovzWnU4KqJfYJxHDtWDApyuc5UUvGqvNe4ouN6L9",
  "key24": "2YBgFHaVGAMHfNfehHHjPmpV8U31LKjEjAhwHmj7zcHXt7p1zQmhQYn2fct8cBkPTPnbsZRGjbVXWaSxkr1boBWY",
  "key25": "2Qe2gTGg4vfAVDXhUDdXL93TLh8rL9vq4izLNNsZLGSZ8FY22YGaqETMpufZE5XJsSE6D5zgrWxbCJX9bHRCi9VV",
  "key26": "4E54htF6m9oFNVuhCFbLLwoipPnQtTFidm1xuZKWoZh8W8qakwwdgXrfXpBYqpcPYQuM6Zpif9rBfgZkP3naerSG",
  "key27": "21VnBQ81HAZFpFfhSjkQdU6UNWqhWopCEX7U4dGNjnkT1o6d3zz5CU5noNg4JYWcazYbh2JejLa4oJiCQkWCV5uH",
  "key28": "h5wNyV3cP9S65uSDV5RMATBfFn6t7ftQKkwyMSNAVNE2Bisw7pc2pgeLgbsmnyBuUkZ3imJ95r1ZCDjTfewXLDK",
  "key29": "57pJm5PDoSdyKocnbC5wBFwkP8jrSbCKc1kdNqNY6XyX2pikrmcBuUVtrYowDhtHbHcAhKLKHH11ExcsnkBk6KRg",
  "key30": "4yByuJCbz88GfyLA5CPEEvu9Wtro5bM6ZjfKDqM2oJvyqFjbt8XG2oNBuaNzrKUTJLVVh2EvhvM7V5t3uW1MctGk",
  "key31": "3sMwuJL16uRHj961vQmtmXez7i8gsngsjeT8n5PJsctJeDNqPx4wL7hV5y7U1Wgerwqrdb9MajdryK4SCo6sado2",
  "key32": "56nDT2Nb9439YocadJtyw6Lei5cmCpHKcCfNQTynWPPSX4decfZM2FrEEtahiYurvZjtZeEihzSN1EbyNs7ngkRa",
  "key33": "2nEiq8wxnhRj3kCvnCZWafSfKgX8wF6Mo2SQrcLfcgocKpB5oZvLHr4uT4yVWboWuBUkrGGEkRBPUn4YtPQcdSkv",
  "key34": "EW5ggfNooMLpRzTuDW8Tpa32juXyqPfvpKXJzyb6wm5UQHsQP96bXxts6B6HKWWpou4ezzWEtbbACtfaxLtaBgc",
  "key35": "4wvMo48RD6Ch4JXUS7wdY3mvsT9TrFVvKEnVRfDJHPWkg3DYtvNR31zAFAzCnyCRw4CGqNAEc9LTNWV1p1VCroRE",
  "key36": "3qd1NcwHk3evCTz9QcpsZFUvtG25gJACiNSdVFQdujD2wATujxdbMMDGLBnAeEQX9aaZJ8kd8vTfaQgi8WBjKZGZ",
  "key37": "3axZpe6zDAEEEutkcadruNSWes5RgvREtLqCSZ7C5f1oLCqxzgd7WAYgsrzUzB1VH7udaXirVPjrYN18WwkopaLw",
  "key38": "2wkhuP8pXHjxJ4U56KLxK8X4coi4XE7RWSAHFWa5UQQUXEnrWf9h3hSHgmAKETAymiGGKAnPwbLaA6Bg1AzVrX3e",
  "key39": "3AyZxczkgKr788fpReyyL3tMXtuMKmCbhi5R52u9JQCergGpq79bn848BoZJ2h1r1afBm1vsC8ekLPvKuDzNWkqY",
  "key40": "hQRq6PApPQSBYQuZFpfr8z2zhkEsAzygACXkmXXNLwrnRUDJ3r43cJzpTCZFLvmcGqpZW3APVqgTaa5eDozARhA",
  "key41": "yW8Xd4jWU8w2eMWSokicGCoe19jR3zza5xqnJvtd589MskGcJySRKPYNN9XAJd8KRDucQD5iLSonvGD9GSDvPrx",
  "key42": "PvVWfa6ZjNaPGpUjP9eAwGrMnLRbgYKiNwQhWt5fFzWtk3gjS3trcXxNY9E1TXvfRCGCvVW8qKMxSKdZpBzjz8m",
  "key43": "3xq5t379wQNSeB82LrtpuxCZicu3kwaCscdmt1zkWfokuVD3bDzTfT4m7BJWWZD9eNxdBiaQ7412s9waJ54GqReb",
  "key44": "VEGdW1YVQspDaoVQj2voNJr8umxEU4WVecQ8zstZ37Xy5BuxXmWWMWqciYPy6ZhdEpdvK4aRX91EAXUpJP6jVyH",
  "key45": "4Gnrh3JUdgGGQuhh5tCL2SdW5npaJQDNmqzo4LPu3gRQ8rg17YE2dvvD5az7WEkCQNoi26duMFRsPNUqrr89T5Fq",
  "key46": "HK1jwU6LhNjk8rNLVCGsYLtt5xMopr7fhBVa8s8JypYb58NTX1uZH3oU4gpzdChFnNsE4FgBNBHbjwumfwbuERY"
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
