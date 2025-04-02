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
    "4W6gkfYmryLiuuL4ZxE9fxpkPMn8qxDLXj5cUecQVGKGwzAsN8FhQNvrC3CmhUCxTmgPwZFdK7VcGcErA7GRvGBK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ymdjqcVKZGaBAiRjNhrwJB3cfAef1fwsVbJmzBC9fjgTQjh4tXdoLaJC82Gbj31tSYVGVsrzQ68VY1JtTJ4k3Wa",
  "key1": "2UYPhWmeKgqMdS1xJmZirZGX4KAu23wLVrWum5Rm8Nhineunm6LfvJbQmmBH7sw9rPJGuCABprLAcv3xXGLVopvg",
  "key2": "2xpPX4GX5Bqid4a3K9zyqdVikUmEvtiyHoC849UBPzyHCy3ovwmmo2dGS3JsXAiiLwqWEffTwLXDaS7G9UeuYTJD",
  "key3": "2zj5BKgCB7Nqo8pE8hkAAEdjUM8S3zUvHFWeaJ3wppcc6hCjxRydZjQ54w3qpaB2UMmh7aAzR8GVziKF2HABbjWy",
  "key4": "77hEzqF7yQDhkFdn6KuLwZFNQFkAVavjappkBad1DgCaxa6HyKmEP6Kq4wxULc2CLN82wDEdrG7efmy4yvQhAhq",
  "key5": "3ncpTB96bkHJWWvjHdCSyMgK1iPEYLQ46LyWATHN2QTx7RmEJenMSacCNmJbK7ZdVYhykA5qbxtCRniDojzs4arW",
  "key6": "5Rk72gcnghewxheZQaukU8vzrWDSVXAki3NrxwfUgpQwuk5YKwCsuPhuBkZKSJTBzjwx2fWmDE2t6FDZ7ZvD2gux",
  "key7": "38JEnrotVySwr2x7jeAznJFXciPREtbtWhoH6h2tm3QyzSSxR4YHRixcJwUKisBvsxuW1V9To91bw1vhQJ9AJa6M",
  "key8": "5J2FMVM1zLFseeEBX7SZ7Uxsg5qfXtg3v6SVRpBhJJjgnyTGpX4RV7CQeZpJuxzi6WEpM1fkpWxpoiL2ejbPsBW7",
  "key9": "4MzgEDpz3ANwXQfAiWZtFTDYvQBjMji3BpSPRCSkLZLkQd7PbogVxFPmLFfCSnVLEJmSksTiRwQkqN4RtTNTNKZ5",
  "key10": "5TgEV5kkposif36cY4ZRUnfHmXVBj9JDbGw5H6zVCW65xdRPPeeX85ttZfEdLiiqL6dpnC1oMTBwKh1xaCu3mr8Y",
  "key11": "4fdUXwYfvCbk37kAVTabvSENmAQGtPn26cHGBEoBkZ6DLCtSBhw3jcR16kTHjCmysT19Bg9emHNmyJayjrCeZztG",
  "key12": "2WZJBk6Wao1T1V6odBYKWQAWZK31sin4WGQWuBbwz8F46LocNw5Y231gwfYedopeEiy3unXqDxp2gdfJPVHoGohp",
  "key13": "4KgEXm7qeB4kkXSvFCdYjGn1w1JAhAQ7wD4fExTzV6qoBptshPy1syfbusS66H4mhYipePHFwU9mdG6rNd58XARM",
  "key14": "4LKUTta5n7eByJeQe4Q1i5kFhhqqzo5c56yQfvp36ntGTefqt3C7wPK2W8P7ufGpQMAxKkatb9czCVYeQDQFSwmP",
  "key15": "xakZ11jBx5rdqsFKBGTsv7rtyJb6TPhDSs2g1LGN99fDLP8qU89LTPxPd1ejBsLktJ2tfkwHbnArro6szkTH6N2",
  "key16": "4GR8Lj4dMFeEScYf4LYuMbGgzGU4qR8o8nkARJqDRyFXr5VMk5LtpfqqBhraXsS6g2L2bmV67EufLzVLx77dLY9f",
  "key17": "y4umjsm6td9cBKTH7iJ3KeMnQC8vWNRnTcYXiSXdHiYztFJ3A6mPvFhvUXuHcUqpmfLdpmQLjb5sQ4c3eCu39zR",
  "key18": "3fntWRfoq6g65JAzQNESU1SXTDCq2eTdUBhMonvufmh6Ms2NnHJe9emK8YyeiZ9MxdzAb1bTKjnVNGYVLkNxbd2k",
  "key19": "mmtAHekaWYCNqL8gH32nfzWXZZucmmMVueqVjievpQe7Ubh5Dnve8Y3y7p1tNPaVr7uRaVnCitxGWJZDnoZGC6h",
  "key20": "654Zc7SSTw5VBm33TDFEkqPnByU9H3YwwsaCZ4bZSKoouyQYELPrGmQ7oMScNi7echLKKiKRfjd8AY2QeqdArrAT",
  "key21": "23BAHAUFwGjJ2FKZhmNgqLrNdcDEMWFTRXQhSUZQRnUpT7y4DqeALZMNxZgzgi2ENskBZEYFuseqwp49cJvxX9cM",
  "key22": "PfmHZjzQFRmZUBxMtJ83PJb1PNM8xcxxTQBkWSb7URPMWdTgavH8spQVkdLTe7Fia5TDBwqwozuHQf7Xe36CbGS",
  "key23": "zMg4qMtsoAeBbPGPkX7Qqm7npmysXkbeDeERiMB4UNFgL7SwozJ7J4vk22GvzLzPRogkWJuRJf7gYAPVa9w2e7b",
  "key24": "eyWomVWHY2aQtqGxSwrp6Z8rJPAnqFP88ZfpWZFkdooYUb5GiAAzAvWbSTq2yZ6MDWZpoRK9PHB9rzkm43BCUBN",
  "key25": "ZCSov4KfteDnfUhjbNH9WaxrqsEkmBGVgpbPhFKf4oJYrWia15UpAnCYYQdD1HhrkRoemChKiBJVHtKnGWDpbnS",
  "key26": "3C76SeKKPjJLUd9GwdCJeyCKYA6uSg6xjhDwWwSQUYAZLPYHnQrgNqmUQh96jV2v9KgDLcNb8x35X3LSqUuphzAx",
  "key27": "3cdJGMYThSn7mtdq6DTFZTGn9W9FJNC3FmHwD1J4WL6yjpbwZxosx7LrEfVDdvRXyywNsWXH95VnsrGaVzhWToww",
  "key28": "2EmHzdPQ8m9ZGnHcohzAA9Peao9a5yLbLjcKxL4PyXcfQ5rVgygcBq8hvwyUeZFtsz2CKN5M1PzP5Tdx8yjdDynb",
  "key29": "xphrrYGeJUUEwo9fu354r23iRxoLkEWYdqwRmjgFxGh4SnY2urvKUW2Hj9642MbEt4TZ3aSu83cmPhfVwjDSrvt",
  "key30": "2B9YaWpSqUGREvEhfoh1zhQcngdiBvgZ8QSLMQNv2SPkZebCYidodmGB21XxW1PXrgq8UoVxMuQfM5cFmcyJuNWu",
  "key31": "4CkGK8n5qetkmwXGQdoTGbPWmwKVgKZuhg4Jv2gJkuNvxSJBU7Am92odRi4zer83Cwf7NQR9j3rckSbu5JEscgGC",
  "key32": "SKaTKFNSjBSDnyb9X3n18QeWN2yDa5XiV2EQ8PwX5njTaTVGLkS9xBthLnHAZFScpGxqydJtEEe2X8Jb6nxDav4",
  "key33": "Rc5rodszdNNnELsHcpBLakqrSh8VySc2JCMvxEKXEsEdfrAQ1tZVbKX2NzSNeza2VU6j5uu2Sjduzijko18sDms",
  "key34": "5en4rdc7HkdUMmtVC2hegqrBNvH9WVUjexC5uz6SA4PKLdqpi2KNv2XN4cPxU8mBvrUKNf8cjeyKhnpY2ajHZwaN",
  "key35": "55kgsX8DHSnAav3KQvi3bGWkf55ns9j8jRceCEbTtwoY7v4mUeEh8R1PdoMUtcu2WML3NPBTHdji44ua5LFDzZGg",
  "key36": "kcbiFgwC5aXPj8Hd7Kso9znhKqye3DsyWNsK5uiYxitq8tqjvkYwDuozMobPwXjbcyScge4LiSKUQSVG416yknZ",
  "key37": "2BWm4eg62RJMaEr8QjXuwSiUi3aMYGN4NiNXJuwkcKsJtZNT1e7GgV2kjDonFkyYKK52Es66mYTJuLcoJvAyfJnx",
  "key38": "5372c4C39WwiMhTofscqosayDGZ9FDwPhjrfcsLWKZf6MVUXU25gC1BWwVxw4JnpJZ8jVL3fA1qGHttDo6QAcE9G",
  "key39": "4UQuEHPu8XhG3xod2tiXAsy5amHZwWRKy1s2YPiHLvGry3G7k5Cnag9DgMnjLpwbTqmTprVDGdrK1Jp2iEJWuzUL",
  "key40": "4DdL9wXTYRDVLyqGoyCv8KWZVxYXHvARHoqm1DYQKNCtcjVzhVZCwDKVdDwH4moN2Hnz35A7gnkq9DXgfoHqMj7k",
  "key41": "4KMazrop2jb1AAFZip8eh4EpnKx7WCzoxyYNkm5apo5LB4KFFWJcH5QNkRLXGNiKBTZExp2rJCdpqhVKqtu4pJQC"
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
