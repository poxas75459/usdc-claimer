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
    "3kMEMAQwaqUtt8S8uSCfbkHWtAFHTju7eBpkXha8j5XTzJ6TpTWeua3mMAogS3iCN53ecAX3n6Rmn3nQvrWUDyRj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "225MDPz9E6zwkustLapkytbaUywTttfhisjFvTWWTNfCNtHANnkFqMgGkezRTgNSMZ3T4CgA3zHCewA2kEE9BvNP",
  "key1": "3nH7omrqeo4A5TV9Tq7j4r1vTeWwNiuA31HR1iF6EnrQL5mWEu6BxV8aiqKgnwfReFfXCQqBnog1fQCkZ1T5K96b",
  "key2": "2jHvDNouqupEFWyXTJQHiMvkt3GZNrnh1e8UV3U36o6PrT7ySQz8XnyjgwcST1fLhCczcBRstnDJX4WyG5y822zt",
  "key3": "33BBLqZCkyowvWmkAFjAq4FQnJGq35DU3gqurrau5cfnWrFM3WcJdgFK8QgS1kjH6H8ogWFWaHZLrz8NF5fG38YH",
  "key4": "43Rt82iZu8QuMLXaDnSy2mSqyEkzJAGEWnHbLvM517N7mh7opexQq8J9yeGGigmCMSYS8XLhYxqgb94X2RT7Tmzz",
  "key5": "63ZCJ9z6JvazixeL8GZwh4HaHZuoT8oTzh8f2ngqKK5ToqhLzrGYpfyAg65hJpxSTHfmFY9861nqWj149MCzjdU8",
  "key6": "msvKsUDSqwDHiGZvbgR1QKNzjcs4G6QFBkqDCwMuuYhH3svC4PSKzDKGrx1YrpfEsrwUr4iLWzdoDCEqg22Fhsc",
  "key7": "2LZkZxqbsacHTEKwoF2dKeF69Snxv8SZijZHfJkanVM5QnMRtiKvqrRYfzWjRQLLYgS2R7APZRWxkECK3jT6vExf",
  "key8": "Yp4MQKHyD5BUD9r5EXPJzC2PETtxq8fiY9DzQjMszcxoH1i5LRkSFnXBg1ymZdK4EgQ2PiS63zsUJL4s3XDPSzp",
  "key9": "3tHMKLBsntA9TJ6UMuY9RNiSip4nYxHRvQGfbyaxQEQDzK7oFpu6RoDHVKQuFLDuU7vTKzYZ2nYx3iEPZFNFrrBQ",
  "key10": "2WiUqMH8nbjHKqNmRgKFXJiUHfsmvi5VKLawAE2a7rdjyWKjVFpvtBwsy9qDoJkH5HsdwMAc3FPsg6y3GT76gCDB",
  "key11": "2psx2uavrJP29ugvs6HTw9zsFmVLY1o8XoHbrSnhDeCyy7UMvt2caJLZqnnTesd4nE7aoaBGY57N2JGTDSckpaPK",
  "key12": "4rjhuP4afPkQN4u53bsTkY9EFaDaRJNZzR42cvnMtqsVcpjWrr9nPd8STjnu1DeBs8cDe2n87PNfTMLj1zYtLaUG",
  "key13": "aD5JSmLyih556DA5RKtehY2mR6hZH7Dw8uHaFRc2qnXW78rscf3cEN1wPAYjwJTehQaGrgQv5C7hvkHyFun3EAt",
  "key14": "5rNiekkFbYxTkW2Br8dBNQCqM1aJSEvuAWbBFwd4QrZa2xPNAgSTX4bktFrhwxSGQK28Aj4Ttpvz3AfBN7H7Vy8J",
  "key15": "478gpRZJHqkb4dXkGAbtgRXeWEtQBEDginPCGC3i3efUopJnpJwBHWDSghwe9w4A9uhSkFyzBKRToLVwPf8rsrgz",
  "key16": "5X6tCM4n7xKy7tkKLN36kF16vgLQRpnjnmNsqaj3ooMkTs9dbmHdvcP5btRaewDShz9vm64G5ett4MJxsizFuUpT",
  "key17": "3PcYMDsaSwGT3LLMfJD7y9KwVtenERWfygEiChShMg88fwA8y9PoVhagRJbx9mb1SLvHMmbitvKr3JNvyHZfyX2o",
  "key18": "tqbrjLtefEtet1Av3LgczSt2oecib2aaz1WFJrWV8NrVcdmMAoYjLuSHd6Z5qGzktw67RGtveAYq3wVnkGRtCX8",
  "key19": "2wwKyUMhN3hnqJSsMqeyZjWYkzkCeCz1F7RkDFG9y347XGcHeNcrqKva9tqPahg4NpN7gZTeFugkQVvBqWQMYYqh",
  "key20": "44Gz2gvH86MyhyJ9qYx32PUNnHtYEgH4b9V4DTdLLaTn4xEaq1dWf94EBUDJAMhBLYLRygX63EHcWXevMosybHyU",
  "key21": "5d7rbUwbBsv2Vcj7DEuA3SgBva6sSYcCrqoWjCwKvaXyCGsrzL81aQRW15E55jDjZx4W3noSuRoaUXo8ndUksLGF",
  "key22": "5pnRdnM9awNa9kDVhjbQNJ6eyjVsM9xyXqqosYkKwzojY3TKaqrsKGYV2vPRDrzEVy4pHediF9a5qFYHRMV3qxqG",
  "key23": "3P7yiqLnU6Ud2vnDDFEvMW5dEof8AMqxtHUzhgXkwRwD755tWBfCeKUHsZvPRHVE14M8cs8g57NDZnogG34VxR6m",
  "key24": "23rcad9qMrwedigUd7GJrJVck9Fk1eqNcy1foNmz3L4XHnPt9LEURFHzkciRVZsgis6gNX5aunaopPmpXNxVJVrr",
  "key25": "4whe2N2PgvZPFbq4idZYKPvGDCSgk5iXj73xbwGmuPAVYT8v7YJjVWbWGATHvTTxKUDZRJktX6Kc8EstrF7ApKSb",
  "key26": "3rauhiav5x3XxawrDHgtY5j21VXDCdaDNQ31UwnbNedT29KenHnsogBKVJMYA92dYWS2628MycQ6gTKx9o6bzVS9",
  "key27": "V94fHnYXNRbfp9UjmgiySWAsMhWWCZapFLLyPWgkACLQhCFFhArW8arPMezGEPeVJDXznC9CrWf1jqbyyK1WFfc",
  "key28": "4zSVfLv4sZyCrWFzuPNfuPj9P7ZuzJvtqtVFXr1gySv9eS3nogFGXFPMYtzJzcuVeV7D44VPTvnwVBoEFuuKEufr",
  "key29": "2JDg9YSuMNytXWpWz8EgBJt5m3A6oVVZwarUh3ngw8SCnDD3WKtHoEzf3e2hZ9MFqyKfEhGaBfHmiKQ8zvRZxbaQ"
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
