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
    "KU8gmjmd7eB4kzCxsfRjuip5oMgAsMtQGUs8f6CbNiGHTZSNzPyYPBvAYJ51u9qiN3QWF5CRPfzbkPHKdSkWEc8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66dJnJm6q7JCRA6NtAtwbPm16e7V6xLVEMapVNftcmCU8qqyx4GtaX2UyZxDN3HQzvqrPfJJKxeQGYzafwe9amPT",
  "key1": "5jC7hbR4GKbj1ssSbJSdzZKxXdaNV6KK2rK5WNdztEna1K2KXtgzaSUcGeG5M3EdLbPdtsikqdshC6UdV6Eke8P2",
  "key2": "4pmk3b41VVwjU8tap7XS2NBmEvBN2zPosqNCMeNB1mAW5DzH6Q6heZr2aieqVtP1xpNaspY97kQst1oddbZmzSto",
  "key3": "3RXhAGDDWx6R8998nzMjtJBPWjPg1c4Ku2Qs1T475nzHti1vALQ5vY8jNfDqbpteQqZ3zTfxXiiS4gqz4uUSYS9W",
  "key4": "4ME4DP9QdDRbG9Jjm8fbrzB7qCrUBu9Zrp4xc2vA5aqGbnVAsJKXWX2vh5BCdsjdEJyBK6ZZQKJK3i1LPMkNmE2n",
  "key5": "k7YxiZrfSqv2unbSzQNXgasUY216WUmvVetNmTZcdPktQzsLW4Ea1FzA8RuzYV21wpg6FCJiZbtXsm4CHotPfCY",
  "key6": "2PEGFtXFZGK4amsHAiopPKB2AGdSSt4T6xVB9KdJc62qCarJo7UqB1zLV4fsh96TcsCEMMEsqmct7pCCQxq8UTH8",
  "key7": "2HZNmy6y2G8pYbtGctrMfrdkfXpM82pdHZUkR2sziZnvnijp4GPpon5aCjJoEANYZdRT7rTzV3UhdDxFnBrRrUzk",
  "key8": "4TVTErfoovaSrtzwsptfGAMFj4nqCtpVT7L1pnszMaGgp3ZHgntQPs9JC1CRfRsQYmYnsoWUQR92fFPVrm6GyrBf",
  "key9": "sjB4GRKhi81xFJULHjYixfeExZxVwHoRPtLcVShbnhviP2tLC2NTf1AUNfjppKZa4bLtCCzZ89Wcw587J84deF3",
  "key10": "5dg7kSnDLrJb7txSXgvtBgYeYjYrCadebziefSj83NqE9xXSVsEnZywxaJxFE2yLSmygmva39VYdqqLvSjTnUJjb",
  "key11": "51G5fe6HgtwuGioZwiufEFLqs75AY1C9BKGNxFJ6ZbEBv5yQSTWsrRoZC2QQByHVfsTFavjyK2zhzcC23CqWh6MQ",
  "key12": "21xEkrEUYGWzH5ewTL6Xwx4YESs6N8wnhuAioaYobqdUnAtsLxwAHGjV6VHN7R8QGZv26hNFf5rzzDig1GDetgLt",
  "key13": "zLchDxSGyHj7cXgFAbtdeuFDRpp4Ebzd9mfZSCDT4QfoCQvgQgBjdWc2gNDjhtijpfR6oYF2yEfdVMR5qyZ7jz2",
  "key14": "3Mj3xwoVJVqHCsPr3Y5U19eHHCXzdmcp4tikZuVuFoHx4mkueVgpMZ8dw8241MDm7F782gK8kaAEjQbHEzBVAkVF",
  "key15": "2j47UyRLgyVBugCV6f5uaoY7Asz5dJFbPHYtrVvUpMX9pEw6iLsRxUnHiaVxzvittfLByA3qkdvsK2VQSpwruruk",
  "key16": "383A1pFFb3RTkAGoFJQUa4ihg12KDGSPRqRaVS4ZBKrsT4PAPe9KUHQRe34doXV56RF347M8MzT45hyBG9UuPySQ",
  "key17": "iyYjCMY7ndLVi3vd9teSiv5CXffQTZGqkQsa2q2M6SGT2txBiw9Zw4mjKrSBQ9gPr3nF5DyErsdtNfVvZw9U3zU",
  "key18": "5oPe3xfBDVqTDwjDX7ns8SHgfwG8xKzCCB2kX1WNkf2LAj6oJHLrUQAZ4Vx7a4btG2jGL9rPbUadRXqc95VYuzMF",
  "key19": "45sx2fkhJ1vdjuYQAapxKWtRKuUuvJ2uHmLuAJ89czfFPEou77jt2T6cQb4U4fJMBiq4G65oWUjTm5GVsA9BPtcG",
  "key20": "f1bHyGfBaSp2TT7xgkhKQXAQzijwvyHRz91P6BYkrb57xbscpE3FPNqM3nLGakAU3wc53gMW3B7brNQN1gSVayu",
  "key21": "bEDRWRtyQydLQmSvbqKCFBYov3bpM33NkQzwaqCM2Ezb5gFmzRwMZEwr3nxwF3ujTCCkPMYY3MFdZv5GwTD5fRU",
  "key22": "2AsuNhuHLt6NXQha4wiv7bncC1DmsEEZQz7aJJLAuUXUxrJgFooFY797RbQn93bvuEMZJhjBE9zD52Pk6cc7b6N4",
  "key23": "5XXdQCVYsgiBeeRK7aeJKbjkgpQgHAdtHkWEz27MCAohUgou4DYg13VhQNPRcgb3ht32zMHu5my1Q2qTToiAhNXJ",
  "key24": "jnmQHHKfjqnssKSTvhkacxTH7zqM2Hdzv9ktFStM7mg5nhLHVAiW5M5QYca5whzCmW7bsQyBhgDWED3jj1si97G",
  "key25": "4AACGRe7CFYVE749YKstHvUaHmgDPgJ7eNsR2kFYXsifnc7L1wVJNTSjyikceqxXzbg44T3Rc7ZB8EyjT35rBb1r",
  "key26": "2JZSV3jX4zfBjSjuhajTmUmdf2UATsbCrPUMeR6aF2rtMXd3aiAV1fbgfA2DTo9nyRDA47sdVT4PXScKdQr5LwKA",
  "key27": "5m1uHdZCsXkTJViXVW4H2E8VP692BgtJaSuDKaKdcmCaV2dEzKmZkRnknvJywmJUcV9M3ETbR2TN9r7Cur5LWcwh",
  "key28": "5nm1sWiwZqA95e7h8RvwVPznFz7ReaKo6iisDy4zUwEG83pVnMJdtfXtUQpmtHX6wCpUJYzcsiU9K93npK45F5g",
  "key29": "5pLwefGEegXEFNbJ5pGhdNPvr7kcrP9AD9FoAdbBrwosmQcWL4QgxSrNUx1tP55cXCPRDVrNzZYHWCB4iFciq51c",
  "key30": "4ufG6KZ53UU8N2iywhGfJv9zwqYB1AiZ9VcjBvcafay9WNwTbAku9LVEgmpqDSB9yrgRpZEqBKZXC1SzVJoyfr4p",
  "key31": "3MK4rqn1PFc2Z4mueAs4sbmPPTAo6qnRFqAEP3Kj31troYix8EffiPqLH91qJb1MFSjxXhW8fB58vCyFFyf39Qqb",
  "key32": "5H9CQxh94zde71m5CkBc51nhweUqBEjrP3swqUNGATrNHQDptiwCET7bWmKwt7cY8taztMfyvYtvYXkNyQcCJ7Lr",
  "key33": "25eBZWCdVBGQMXPoJDXDc643DZd9x5kYfA2nGhvhweWAT2b76rzvrp6oR31FZS4Lf7Qo4bNj3xwUX9KZvnyWHEfV",
  "key34": "32MR827hcaePG8H6fTf9MVh5EkFkt17ZoK6pokkWJGGT8WnLHKMm9zW3t33Q7XNhuJLZaRxfTizuVkZx4N9GPYiv",
  "key35": "byup7ok8MWLtRkzH8uDWpkow9J827f5aLgPaVaf8yCpeBjr9YLevKdL9rknrmLGUH6LQ5zatBdqgCZiAxPhzMf1",
  "key36": "2GPeL88oGmBEMUwj8qbEXD9SSXgoDrwEUsuRtz5x3Bhd1XJjMWkHKeZ93ozjBN2mPRzPMtgkyJYdegZNJD2Jbrt1",
  "key37": "4uiKCc2KNEfKNz11CuKEB39cHeDfTzscnCqhLMQLah53UZ6B3drmH6fvPNxPKYaZBjQSt5VUbvqWpARHJeEmrsYf",
  "key38": "4U7nqw78M36ygaCJyuqQZHtRCXwifGR9TN4aXA4TBwvtj7oUVq7FasaC9V2hH26d4uhibN9dY2p5BhWBDK55gyLC",
  "key39": "5abaiA9VX2wdM9iKUB7YFYwFCgY57Gcep7WgbjS6biUoBYCoKuAXNDMQK6NQrM8zGcwV3bHTuaKmGJ6UycKcUzq1",
  "key40": "3zWM7xkqbw2LF6mpuL7MbGyPdaFBKg5Nkfy4k6sUXVpGKTes3UAVkG2JdCvttFY6WmqcRjoe3Z1vNNdqyrZ2s8Zp",
  "key41": "35FKVqZ98X2ygTDGK4TmeppzHe4XLye5dmmDScjLjMbXB9sgbXNZPPbnLTYSFsWt2m92s1Uen8DmxP2Su3Mns7oh",
  "key42": "5m8U3daqD61VcMhHRg7pMj8P8JcirsfE2pzTTfE3VLS541mLGpFGaEohvB1QMRaZHgNTGxqcHGM92mwricT6pr1t",
  "key43": "Kg2HTYvopCx7gQMvyoXyDWp2iGM389TocbpgKR79wmi5RNLx3gDcuFKnnHr6XFADvDaFrwAt35se5EdqWuWPdwW",
  "key44": "3Qp2Djda18Tagocg2hgqXRvDSZQf6gsRwnmiyho98YxbZmdPtY4JDMMFiv5ts2pVF9j29GLMAFWe2mvkMWcg6yv9",
  "key45": "5UprpEbcwkE1Fi9E8CE9R973tTRbnWLYgKtmvSKz7LhUUzd9airwAYbNkL5kReErxLCP9QAJQ32VXyJtN5DngiYm",
  "key46": "3YnZxjm9Ckwuc4JULSqwwCNWbfmY5SkhqWXY7n5JqNbK6bYY9mBjn5FKmxhnLxbwDCbYMEqwxXj8dGfeTPfAjtGq",
  "key47": "4HJfpCCw2cuvXXvm95PMiNFWdBPmCS1pG6r99SQbAW8g86JnB5nBjChRwuKCeWuGNTnZHDduPUpaRHUnhaHJnTmS",
  "key48": "5Y5vScFfC29gLqLLmh27MMTqKQrtfXEwcu1qkfcpQa8UusxqAe1fDVz76LA1qsesDwahvCZimuB7zhNoxZzhhkLb"
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
