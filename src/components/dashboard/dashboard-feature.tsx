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
    "4puXQJurtVmmUotoddWBggkn81UyTxiri4w3W2CzxBdcu95khpTaEhK9efrWe2RxCGnLngo8QwGKBhQtYxWcPMcL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f5BY9cN9b4qcmfbeqy4ckVS6aSZ3UHLFyNZpqpCUMAUUUxgMXbDiqJqVeQmAagx5bYPxSLnvoitctRhKC5G6DJx",
  "key1": "4tQ7enyAjTbu47XkPbqJXsdCgMVcdAhYUrzexP7vboPgSbKAkDvuBmQnvTCsBEwMEbxVMHF7aGxppPWJmCWsnsT6",
  "key2": "25UB4qWLafoairSW6qzg5yLFrHGj83xhq656zkuoSRs5MiRCVH6mqKGqh9K2sLwgRPkRcB9GSxJqogm9EpiuVGFR",
  "key3": "5BZYjwubEZLz1tqBKhPoFAWEJWe5GsaGn1xJiqsnbhiHWwkMXS4r1BGaxNBNB7HUiG6WSgUCNfddfPHdeQ1JG5S8",
  "key4": "4JqcymqRae5Ca2uxdfqcGMStPSH4hz3eSw2V4cLYigibav5m7taQw3HrVk2UR8DKRnPXqEc7SKLPwQQPUAcBx1sv",
  "key5": "sStS9y62jUihrTjPJBykpw9mJRiheEZYigUXQ5ncS1g4jQ1JmUw9po9bpW6M59TWJrCSW64omfJ11znrQe7Px3Y",
  "key6": "r9nZWwbGn1jEfxUBPWE5C996n5zYF6zLUFtibVjwLWPAXMieJpVNEHD5yCXPnZUAjyubVfP2mUCu7CmTjP1kDGP",
  "key7": "5De4DadFLBtcVgwkKzQeoAKRhK3XErR1rixoSWDkfZnFZjGwBXMHhxCGmxzWpT9J6cPgLL2D3uCQgBEDLzsLSUyS",
  "key8": "45re98dSeN3qcN4FWMXphcGqXWLiuDwAPJzpxYQr5qHrjUgksy6GBC5T9WtPaAQJACaCsp6pcakJrWff5ieoxc6z",
  "key9": "2o6TZAJCpr5ahbmFdofVCbPkTrHV7GQK4j8T7LEk6YrY1t53qUMXrfsn1i8ZhLFtX8kyatkkWhiCk7qYDShMacNF",
  "key10": "5dehySSSeDQEAsymz7TeCGsi2k6rDzQoA6vBgBpe5dkbiB8T4H9vomHJi78o3B7ZzymBqg899jCdk5JhPnu7BnCX",
  "key11": "5TiheHZThdCzJmMeVR1KPKPbR598s85VokbZwzsQkbzNcjsp1ZsX9ZPTk388nVXBYToCugt1PSFTAuTEKDpkK7WG",
  "key12": "51fEmpb9Ub7hZEoQHG6ptps3JjeJF1wNMfz4LUzXG8vD39ZE2jWk35ydQMay52jken2Nu2R8hNPgeWiiyZEznwFe",
  "key13": "pjSW8gdJoi8t8MqN5aycLAMKTDpnpp3tESepxtvfoAsLsM4gG92VDHAgu3UVMonoKHuz8n7iATrCCBffVLCheTm",
  "key14": "uaL2mq3QLsDkkbRTTKFKSkpignHTozaA66pceD6vbFQr5sH1PDdqCMjqaw2SqvuYayhWTf5uBkcyn2KkEzX32e5",
  "key15": "2qqRsKpFaALGQNc4EuLT8eNAbSQEVX7a7hng6eK38gtLxTDAtVGLXSFEs2dJzMwv68aUeL2vvJzB9VFP2e8M8dRn",
  "key16": "5zCjzpri7w5KZSJBfcbFV93rLUJoG29pttze3azbRPJwGdUzFJXJMuscN7XUyMkVEbNMffrZwn5d6w4bDCNXQLmJ",
  "key17": "5JJYG1YHh686MagJUGKFDEA61yGx8NxiAWtjGUnJsMBbnrrjeqpFY2LDCNkp5Zs4BKxwgwBZXBPUCZYksczU1ZH5",
  "key18": "thw9tHiso8mQuKHeKBXpkMjGBHuWW6kzYr7Z3eSRGnysXPWDbquAcArtx7xJorekbjafAxo2KdUTC3y1BL1HSmE",
  "key19": "2tRM55jZ2NM2dRvUwCRZ9KpxVYmkGWoWBFqU9JsRBWzkZEJex7aWEG98ap8191b2bBMbXuEXC4GvMt5Qdn7Rx13m",
  "key20": "2JtbXya22XagQAx6jUUeTdRUiPFhsfDH5B1R33w9KqVBKHad2CRwu5Bac6N3ToRHc75PQcatyCraRY6wsCcvmjMa",
  "key21": "4VCMaHukrE1phVijMhAkvCZeywtsaBcWm6WWTRP4y5YAcWZr4BKJNo26gzg4gUCXQe2NaGbv7sMgEYoA6EyGk8n",
  "key22": "3o9Bi18Lwz64iFzEee7axgr27DZHJgMGdj6K6bXqpKScuSuPxJBDQhy8zM6NJdGhhxotpqThYiYY9brojUtQbvYd",
  "key23": "r9fTJ4Afedbd3wqikbTivLddtpai2392zkx4WjDPjJBDX5TVfV13PWFY6yNWK15qo5CM9fvhFSbYhe27pWURnp1",
  "key24": "66ynoV63nVacgnTUJ25o883rsqCEcmuaJHCYsv5RyiVya7gbtn3JqnxLhyRhWqsLA8Dpvpzys8dYZ91wZXUqXnX6",
  "key25": "4tK5ey6iaVqXh7vfvqTHnaNxgaLKbcYLWwjfjX45eG2XbNQhc2yhbnhvKiAX1akc8dZCcartCaZxzaqecfbnMWS",
  "key26": "2Uy2Yvsv5iuHtGsZzBrvot1XC6K2VUouUD55dqSK7AkBBjVagU7hyBoDMu5uffuJxQa3a36PRqECYbdnGCVx5WSD",
  "key27": "opE6NW5mSuSA2xWuZ8nt2vxjxQ2CK14ohMDPkSqAhc7CJbXPyVEVWgRAqZM6i2Efb6kk3ZKFmJdda2tgLB8PnqZ",
  "key28": "488DH5RNtUcpFSvmLx7uocDwBSr94MMM5RSZEsKYZWKfHF9A8EbKuhyoosNSo5VCQ33JmKaks5Jh5wK8JJjQgdJh",
  "key29": "3VyNxwqerQ4NBfdqyb5D2aRhtE2S4pn1MLKp2MUR3FWCYMtBfQMsrKpKXi7eypWeGY44pVc5Hr4HiUjsSZ3Cxgxi",
  "key30": "5rhbSntPZuS3Mhw1u53bqsY73tE9n3BBbKxAQx6dj55ufTbDQKaCabucPc2b945NF6UgQqo78cDvQqVPNnKiNUj8",
  "key31": "2YBaUe9quVTmSr6JzjaguJbuVDvsoowU6xJw4Z3JvWicqo5HJ9p1Yhu8gvZjVPQXgLG3CfXPBDGW4tw8FtGk6LKp",
  "key32": "oqiQZiqYS6sPbtMAuPFXwiC4UKn1YUuvdBzMKNLKzVfkj2fETnF1vBV5ZfTtsFK3b3Xv3QZmcsDk6TYWvP1YwUt",
  "key33": "5anvuUmrBzcTiiAMJFDhwpSCsu295M4VsAu3EHqNzyU84F57dYY8EA2Tq3wqaFqMtSGxBhf5ahyxqDxTQ7uPpm1c",
  "key34": "3nrMvruM14o65mYobrvSkfbZ2wDNaJxYkqkHaGP8S3C2w4f6NoreJxdr5QqmeF6DvpQJxspHyGgK3GXE21eJNtvE",
  "key35": "aqjGSgSNrBmmJBCz8px5uFgZUoyuC26hhpoYikg9Jf5Fw26Gnd9vearZEM9QAMPi9bubEmNR1usb1qtK7w8dRx9",
  "key36": "3kxtNBiNhEi9qajFM2MCpG5noCkpqzcbcWz6h3Gd4C11zAcPC8dmnjskhCdPn7K1Sa2ie3NuTtP6vBJpG1vPzJR8",
  "key37": "7Bp4TtNmGBNaekYTfqeWWGGRMpJsHqVy1HnyqPuUuzixCJxjvjvmorqps7i3J2L9RptHef5wjWL2sXVfWXaJbZM",
  "key38": "kGt56KKDhpP9BqUf4VzPNSyBVKCtJZy9snF5LJGSJGD42UzMtg2rm1YaaVUvUYU9nsn1QiK7PTFLsBAczLyVtro",
  "key39": "zk8uHNNCg8zyKdpnh4qDNnYSNSAMhqxvLNTGY6qeb9GfEupxk1a3SxDipZXxEUoxwPfTjTpwEvjKVZQPtwujqc4"
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
