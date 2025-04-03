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
    "2RxufMRBnnYFh2YSqYkdoYRXsUXkUjYwDwN5u59TPBH8PaAx5n98suyKhhULCPsubMqUtmsM9EkupvS41Dh5pq7W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "549tk5ifAg4suhVUrcgTESHqnDjyLwbsq6mjX4RXgxtARGNmxpAfNQqDQr8Ge1tYFf2N37DjCEPVeQNtaBGXhcrJ",
  "key1": "3BxTCyqVDXwvZSsDxwnTpCCy44ZAgHNTqqm2yaHvRjoCRRuf47D2Mv6fQTnCQadXyxsBE3fhxAt4N8Ykh71j7YnK",
  "key2": "67gETdDikomJkiTaimBDgaQuuAsQa7PqoYnnD9vhX8Wym4zuDoBUSqrDaMwTRczvTn25aFYVzr9v8egFyZM6fGkk",
  "key3": "5bKBcLorAj4vcEN5LHyU8jMwERzQQsdwG97h9kNQmKh9zzoqqL47SX3siWDxYGYKjKY2EZqG6Z6BsVVSvjS7ddFT",
  "key4": "yxKqNychfuqpqmYduC3cbrWeCUYbqEBHgNygUVXX5Lc5j1HaKgBRk74cH7gG9GJ9oyhYuRWkiQecm2BKmFMAfks",
  "key5": "23aYHBX1QSdUCQJM5yaKTjj1G8X1emyGzfrhnJvRwkV8Rc29zKdru5XZmdaQcNY5yhaLYX2z98bztfE5QMDT8Pac",
  "key6": "4jxSi7Ud2R18jiN4HnuVsuxM2wxaGTYPSvappckkfxB88gvszLwmHTZSvRDFqASySRFBkuDSqXYcxSmUgvAUbMfJ",
  "key7": "AtCSrhDhH3i2xz4gJMNs3VyuGCTJL2JvyoFNd1pe6mjiX7bjN4wYN9woT3PJ8L1g9mveH7g8JSQfZvrkWVNM4zh",
  "key8": "5kdVsFZTr4GjptqVpdbuJQrj78gkAVtYrRFScWU9AkAtFEEVDuZoYXvYWT5TePEpUuqNoioXXpzBaa5RxyJtyTwj",
  "key9": "4MiGYApNsaZQ756m2Ys9fBce9GrNPgYG9WQgniNET8NP1ikk8qxweUkXhuemdBFWcjtmtAtEDUtBkvRoqxk6iy1Z",
  "key10": "2nScAv4ti5pe5JzW6FELHKV22eiAQgUFHpH8zHmThPBzz4Uxz1149sWQQgpHYZ2rE2iJvUY8iYj7mCsWGA4jRrTq",
  "key11": "2y9UFpZZDCCZds3DsxeMJKif82B68UYuZKPf5NJpDPi2tCVoXwnjb2wot6JAM66mu3HNiNwDJVisP9pn7WwFKNrv",
  "key12": "5Y9rZiZ7omZVLECAnyAvX4D4s25AoUhMEp8yxR62MKhmu43o9b4eZvrbDivD3HR56nsVnETuGqfTyed8SqmtHz58",
  "key13": "2Fbr4eBUxBPEtFXC6Zayg8aECtBcE3bsEWtwTmUpL5r1KaBjVJFDgRkphRPqiZd1qrggbwejTUBFf6E4WqmQafgN",
  "key14": "5zsx6ECC9QNTtc4hffswGAFYGcGLtSajHUV3qCCQrfaFkVDRSB9cs8bQ33dXYH5GLLeSYS9oNjP61UXPuCUYJSXF",
  "key15": "AD3wE6Guf6jcjvbiHd3AAMUMTQQDAik5tm6DeYDTMcmNdWA5VWeg8zVmreNYPcc9hoGPTgMqJiF2XrWgCZtxF1Z",
  "key16": "3ghQgDKNN8tsDTHQ4GXuicyfXm9NLeLtgppAwHcUHm3g3Apw9upFuBRC9uYbw4qRW4UvYmLXa2d9PKcxhpwWDT84",
  "key17": "4bTS5n9QZCZibZabv3gVa2r8MEHWDeoRhq1i15p7SwVqvHmwX44atK7SAJgcBLizLaN8KwtTTG8iJnzxhJRUAKQo",
  "key18": "2eKaohykxrTHrLLZspuYrkvL47y6AYwXYXmfGCnEKumUwSiSLjpr9MhWron6BDTjMsk1MwW536cjnmAZw1KHdbxv",
  "key19": "539Pt6xf1rrcrJqHu25VdLujvgtEvE1UDbY4xkGWhcApHfmCruDkyCLNb4BMPXCpWeBHsshSH9N8gHNmV6xg21oN",
  "key20": "49pruLGJ9PELKfrUXB3rcJTeiTcAq56FK1ZKxnP73FaDAh2k9gAW1p1L8BpsSjkp3xtXMdrcbiHN5P9QxnAJwHah",
  "key21": "aPVw7uWsaPfJnsZeduQCwyXsrbAR8WDZuSYMu3YNt8sP6DtoZ96q7ePwzwMnVY44cb8Qk4oVcNhy2X5en8ZRuPz",
  "key22": "31B4hR7SR9wLcxciSs53wT8TzYaoquERtJHi8rMQkPmE3KWLQTCGwWWSiBWb2TBbRLKiAFdZHvRVerQSdNAqBPrR",
  "key23": "4UPihYP219W2eCSdNhTPf6WKrYyk8MrjAdGpG5KQ8YJBoSTkb6kzFHoq9fQ7z5E6qqjhREjkALoxuCdhSwQQdviY",
  "key24": "3qDhZNENa2CKKm5bUDSWribZWpkuyLeYZNSWRhQHasHbEpjM7SVt9DnZJBRh1tmxa5XFXVAVyXknUE7GUNc6Yk2b",
  "key25": "5fFnPqsDkZsBkQToMNqRACjB6HB1ip3GScQhnXY7hq45Ji1UMp9k6GTuSnr4QCsNNC8K6UiBmaChUpdkzsQzWNAS",
  "key26": "3eHkwQYJPbuHNAYB8TTws61K8DqkrWRnaQSVkwQow29yDVumgp8RQcRiBQSQsn1ugayNsWxAYmwxfV1nREPRAHAf",
  "key27": "uYkuTzZZMt7Jyrb4BveYJAogddqMzzGbisn2Sqviq1SnfqyyhX5gi4bso7UL2FPwsMeu9ou5RiPu1fdyrMJwHSB",
  "key28": "4KR3ng3TzpNQKrirKGHra5GSkqCnTiuSDYc4HFVMZhriaymGY6niypgJi8yQ8MwDpQHjHS4ppJ8LhvoNweKjNJr1",
  "key29": "fcpUWnR4ZdB93d3BxdzXu2sQ5q6zrdoewTqNQcRMZkLJ66kSwNbJ7qgKTWw8Pa6McyNi6cWyNcBTzZKhCAMYAUz",
  "key30": "fWdqVHdCZKwAL2PxVgg9eRvpHZb9FxHKbK4Dr3aXoTK8qRSKncPTFTN4YCYj24w2sUwdYSXuzckkZ4sMEwtWTR3",
  "key31": "4sKwRKTnmszDPdE4SNVcGE9UmWDApVsXeo7KTsFfnAtX2s5k1UXqRSEYSKYTTWEJEzgHAqQwcGKoScSBaueGp6NB",
  "key32": "22Adc1oQZPjb67C1pj2TV1WtCyQ27pXV87U3Sb3ruNbGLwmXQ79QjoZhSTEKtG8NrZRsSFwMinbuJVxWXsmLvyh8"
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
