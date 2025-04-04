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
    "5Ko7998ZUrNRBE2tyx5YYqUMbxFyduQnArUXfg5FWBsZwLhCcsmT94YBD3s5DEJ7dgaRtuVSZWZ13EWEvZ3DXy6Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g8EMcYfio8sQ119LXyWGqTJzciNiGLSPLSrkYQfQ29MzNAuCNzDeNE44DnWXqTyhtqKVH3V83BR4JWzZCgs3eS5",
  "key1": "4zhHeAwo9cmJretiE9i12LPrVASr5wTsgCp87rM8u8uLK6hUK5zqRysPP2WCQDfjFxHLcXMmmQ9XNf7ZMKzYYqqs",
  "key2": "5CHQZnDYYMhLX91FDSqaLjX8Y4E2Z9ZHLZXm4fGoZP1PsvCqWpjParR9ytgDjcXi29ryJjuSbkDSYAiiCwNzp1Jf",
  "key3": "5TkgjNr7ecjjmuHPeL6Awe82opoT6rsLSQRQYSymjen4MyqNvgGcbcatpYRTgQn8wtp1FspD4biVfoSjqqPK4CBR",
  "key4": "2oNqqhWNx51BKRxkuY5HaKWh7MPGcMYaDMMqAsZ27PRCxAYxa2AkTciW99Y5kvNaiUxpRkrwB64S8Mbv9xcYCzaN",
  "key5": "62FXGw3G7BwkMj9Mrvtk4fMDvxpzUAb9AsTwHLXDEDQqzvgiWbRtTG3WLxCiUaXEkWWWGhBd6vPKJBWheeYeVUDx",
  "key6": "23qm5tPSmKw3Qt5NsAMmc8AMvhg1RT41sjYB6MLUjdTaUKWuUkNoZpGZXcQJVRwLhxvUnqDw5jdiixKc6uHUZsQm",
  "key7": "3seLdGocCD7vbAmNeNoEn2H3xK6x7BmGkxFjHpYZYDKcDMzWu8YfvJWw1D1XCRun2Xm2sqwwdp7eY16pVtvKLMgD",
  "key8": "MzW47EHDXFio5VCZ87EmAbcAYYfnuFePZj59hdSBwz3qN4X696j2f7g4CY6137fykeSvU8cVZJauUTyy3KVTWvy",
  "key9": "638r3EU7zhZfFy7evgY9j6nAUx3AAZyHBHTGkDMvXeQYYdGZh9R3C2ts5jJGKn2QHuRBDBXRrDbuaDWJyVHgb9AJ",
  "key10": "238HZqDE14GdZ16wvwfnNDs9aYMerNWac58Nb2ifeobQLkDpHMazMvQ8Vq6pyL9S7pTWnnCM7es77CCnVLL7pF1Z",
  "key11": "45n1ZhBHrp7wR53usceeyUFKzJWmDKWCvTcd6sxKKoF46d1QqVDJrspmmXGLwqUDavo9Da4r7SRkaayXtL8KKGAZ",
  "key12": "5rKn7auAcwWCuNoGkKGQPTbhM3fN2m9eiaEenSAxmy5B1PbL9iUX1RPKNMKKvr3aSo4gv84tiYuRM21E3VasDX1E",
  "key13": "bRn33mzsb1s7N115Tm1zNksjtoZyETDx9foRf3HEtcvhSGAy6uD2J8ufpCtM1y5cK6dipkLR1cHSSc7rKxggwKb",
  "key14": "QRhPL93gELtQUpcuRRLQamsQNTowp2CYdvmY1YnS6PXo4swruADJkNiN1MAnF9bDP6tZxCaFo6N9uAZz86JKrJB",
  "key15": "yF7sTiUzoebdDG6UD6redN3a3UZQDzSmLWCK8JWBsyMPy3HHH4Ajj4cUhcViwZKTHaEysvETw6LMQYqy9uLjzjt",
  "key16": "xKnCicg2FaLSwNRbGsC9Fqy2WPp6L2mDbGZJLfcUPR6QCgdvgrfKfs22kiUMkD1mBiNqeeTEaS5unnV7VhE7Dho",
  "key17": "3rVyGiTM9KYMXNegFFkYCw7QJUYJDmWTVDSKc7FFx1oYN2watgsd26GWUU6RvSfCDJVJ65GseC1SD54C6cMWC23g",
  "key18": "2aRsqzS3UeeQbuh2eWuBrAdU3sob74BZzpNuVYzdt7t6shfunWsVWrFT8zj8h8U7mage7Fo29h3Qr3dY9cRE2Kbt",
  "key19": "5KxGVC2EhTqUj1Rhs3isJMsu6Es3YzMkvdnwp4kFkhupvFbQ5K54ehkzetp8PrTwR7FqLLiZT3pSCjqM9sUDwokn",
  "key20": "TW1wxfUMMA3uJ3Xvd1hUuiSVgYQH4jgo2dvLcrcoNqJhDTU59mDw73NLL51ek39nh69rTzDP8JE5PZa3H2vreSt",
  "key21": "3PiAgc3sKqLTMc6fGXL3E3rGkdyn2Lgi4iEogkdsiHU6iuDjNLfM5pkZ3Z3o3yz7LH6YQc3YXbEajs8MqDbn8cLa",
  "key22": "2gQcHLq9rbxDnYD3S5un4JVXkTv2P3UyajgctwrZ38qc9FNb6bVwubLoBHvHfUuKPTZYj5fw7hfmrZDShE6YADSU",
  "key23": "3sDFKeguc9CZ6TucNLRsuo4SByNyutVyS5Pcb5uWmd4HtK8xNZtzcsoJUUh6Rh3P4ykPp9vzDTPHQxutMxB9wvXo",
  "key24": "35vsmy6VvZgkbq3pHtu3yqqyudnN9KAaNWiFHuddaf6NpuzzEW6FstTKMhM5JQF93nhavg8vRgRwHeJaCtJE1Jiv",
  "key25": "5X1wmmt1XiTu5HygPFpx1ipkresx6hdEZr8Koa8vB1eZ94iMD1zgzFED7HeNNwHrHNx8ZQa5bti6XqfB1mg3n337",
  "key26": "29rW2amtE6nnedr8q7ptDpp2mNT4rWc4NG1nY5BRuCCrUPwrP3tP8kvGKLkSjxh7h27QMJLtKrTgVTDaEP6LVX3k",
  "key27": "2zzjoVgEfthBmX5JR48yoUcxbLYDq8pZSPxH8jWRJUSUMHYxvtsvZninCBVBKPZhNkSWpXx3nsSFweAojY7H3Kzt",
  "key28": "8fPkVCce2zC61vHXyQ12ysRxMGaKiN1YvXbsnJaC5Mz8Kq29rK49mE6jZhrBVT6fz5p1Vg891TKoBe16cpXdg6D",
  "key29": "4asGD3h92pXb9wmzbivD44bmV4g4ZS2CM7LSyJyyhVuowmFKCgkeAB1PjqkHnXDVbeGnCZrfLbZQ9LTU2Pq8BYok",
  "key30": "3QoEAFaZ1oyfqNLnDhZPswnmUhWNyBYNagkm1B7zNtyYE6McGbxsfiDBPo5GrFYMzLhMErjQRDNxYsc5BAnADUSq",
  "key31": "42zNH7zHGWPn2JH8JbobQQQoj5GCLwibzBuYVfeSCZsYUFqE3tBx8StcsGDPChp1u2GqEh5nENwerxjA8tnXNREb",
  "key32": "5hpaRbW34jrG36MAB1dymL8MUFZKqnd9mxyyWkfjPNYnQMVvzCamd8K5fuHKEQpnk7ipjsvn281Uzm8quEfUcZAD",
  "key33": "2HA9EsuNSUpyniKCA15Hmw8jsHX7469KYZ5gB9LxsHieF7L81bdMGeH9NyJE6oftMSso5yhmMiCmEnZZvdHYaw5p",
  "key34": "4wJH8TyXXN7b3hjUMzGa6CyJ5Qe7Zy7nFKFJwWKQmjkQBw5NWBJjiXpNNMipcJUiAJsmXoLR96tMXW7oxMGXSLxq",
  "key35": "324rQmk72KRisCAc1k1tBzzKUYtDFYhfvwz1kw2Af5kx5J4EHzFEiFPdNqM3axcjUkdtuKs9aMt5pcfZ8tVN1mak",
  "key36": "2Jn4GCyeTFmjRjnCfFjCnxE94tsu1U2rnJFoWvVki6mDDZpfDeoqWS5R3xH5BFWiUQMcxEPrgsZrCA7RmqWCxWZP",
  "key37": "2vpGRpGCE3vWg4LChpN28WjQ7AT9DTCKZb2vQere1HhueEzuAn74vx8K1MRFCDGD6pAEVVtLjsMYUjTPCcwnufz2",
  "key38": "5kwfqHvxfkTWcEq1UYvFxsq4fqb36muvVe6t6DguK9aGjBs9ijZn8LHUcrVEMyCz9sfthNvRb42uqMbC2f1cKiBm",
  "key39": "2FMaXnHYN6euKxrus69iX4eeezWQYqdT7PW88h6v41akxejPSUgmTXFAWiJ7PMAtTYhEkN8q6aj1CHCrkj4sibhY",
  "key40": "63a4LHb1akg4NAEvJmZsBEakwthKEtTP6UqyWFsAbxszAbTsASpKxX3DGpbawF9bZDNZDM1tuWCJHpcDfZusDWNT",
  "key41": "46L56RZawfdPnw2LBy3EGaU73HMuJzya1da8pzPQdzMxQJfnJxg9P4JuATxRmf4a7piXe7ZLwqzbQsz2iLYo7UTU",
  "key42": "4Cas4Nwg49rviVPMCsk3V9xSmY1umhgFQwLPLpwgWjqjZk5i2pAXuuXBJWENZqbLYUpzCEqCjJLMdoNhz1g78ftJ",
  "key43": "3TZrHEJWYJ149JbmEL3DeBzkKbfdyMXUkzhzJqFqDDC5rrFiix7RRmpcbsUVLwjwkhnoSes5VczrGiSHcVi9nRSM",
  "key44": "56fAwpgLtdt5auKRdsNHTqqZuj6esVBRbrahVaHShdihBVVah7bCTkXNqxQfUMoCQzCbsJTV2gh4yBxc6sFwPErN",
  "key45": "2KD2T4wN6HcjohgRXAqMMb3G1VQMDmvyo7pMJHtySeyA4kUYqMvZ3uf7EdUtkg5nWunkhupQVUUTVkyHZHahmkxf",
  "key46": "2HvFahCfQyqiEFs8LKA69mBTGWgPNQEkURmhu4SZTKtbMfUb3LNYiehbp2S4CT4UbgyDTjdYMWNrjA22GNt4a43e",
  "key47": "3Rbc9Kn8qJXt1WPQrtucAR15a6MrK5ddbA4TVAVaPfw2mRGuRRAXc7pJACxi4mzNVX3CbUdzJSgygmEYsRBBAYep",
  "key48": "maU5jAx9qwV8Hi2de35yo8iArSif4HnECee5AfGxWrbCxrtbfYNWVHsA1ngywdGLhcT8PguqQp9da6WFHyArrjj"
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
