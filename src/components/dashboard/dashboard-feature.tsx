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
    "2MjJUd5hGZzyuBhbZ5gAs8e3kNMfNEGyXanGwzTEc78qNhhAWAydwEEp3ccjrKbyzwEd5wwEUpBzNbbqnHDQ6uGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b6msyyFr4876FbsjdhQdhBw7pmdGV4Fty6oriWvqdDU19fcGCZopX1hZRyvaA1sq2NGvpYxqe4LvJLPCghCwRHk",
  "key1": "4dzBo1LNmfuuehQEjUA8cNFhLXprpQC9gptDVnhEBqcrxrcFad9AJquWkrB6KNJLJspT9icKZTs15NdJUyzd5V8N",
  "key2": "2rTVsmRbheAtULNPjLuDPLXrmqHoDps7ohR5MeReYvBiVEc5QpN2dCAt3RPVChEG1qmrPJvDfsCBXeq3GDAxT1s",
  "key3": "2nr474WqyGPYpqewFPuhBNANhMFXJUqTfysGW9HGvpPxjKEcE2DnXZZmvyr3xjvR3YVN6FPfmnynoGtyXsigbxfK",
  "key4": "5Qw6UuPiHksDfKSeZnkq5gtN1h1bwXMdqc24F8AQzezTDyC1WKvU5UQAaTtEUTVJbkELh2x32ecsZ5EjRQSb1aro",
  "key5": "zgHfpVE8NBocXRPu1JaYvTbQEyej1psznXWVMM5FyvSXAwNp8Hhcnwdf6pMMbrSEFzwLWxdqpZ7v4KggudnmuWx",
  "key6": "5qCuZJwH98S6ae3SW1aTMsfqrmdQwe5XHyV7fdFqZxU7aMfndbxDsLZKpn7uAgWXzTvJSyJhj8rXHYGnQYCrxf7U",
  "key7": "36oxQVdgNLtuVmnGxezvVjG7Lcpd4idFdz9ucco1YGM2ZVy54A234o5BcYpkRTiM5rLTb7aDTfqXTizNtMzumCwt",
  "key8": "3HgXhcKPbUezrnZ1TCFj88vEW73FNbGdWPKrZdvjTh75RvCtVL9DsW9ap1B9xWXn1YkLVVJ65XxTstQHYrrQRznP",
  "key9": "2NkdtqjWxeceh51WkqTV4TtsgpcHbEqRnCFid18myV4abcf4MEKRv5zNPHCwoeGzUzNVgeC9X9cf4YwQyBbS9vfc",
  "key10": "3bevgovqMjwe587wVTMhvE3HuK3SdtUVgrvLHgJEUKkRLJSwB9mM8fh1JfNS8279JK2QoTURJLnuABK8K3F6UG9e",
  "key11": "33tgwGHoJH46Kaj4Qc2z35xGNAA23aSu1PDNSRvfSmGice64hjNh2DbfQ7RnZKwxwYAEWrJWknXQrhwRsUYPNCKA",
  "key12": "2FQKmNoe6DRLh9QjUxPnMrVpSzGPZLj7sFi1558XhB4AFEXQ5wL5uuPBEi33HuEonhm443nESi162XKQZV7xhqtP",
  "key13": "TD2HDy5tKBEQ22miiUukxfP46jRVxSuQRYwboNUNitac3Rc34XAkHZQsQRr8C9xLX6qfLJaWQrFPhp6NM2gEBPH",
  "key14": "3vAsBh3fvniZAwXGh2DCS4H2k9pJU7pugZM1pcasY3tJBUYadaBJY1ZWatYNLfLgyDpiYiZiG4jrzGjnN6LAGFus",
  "key15": "4MwJLmi1dkFkPx74Jc7QcSDYX6grXqbVckL3GRYbjr5huApcJnxwoqs4nPDXNDHTasTSFBH9Sfd3tPUqHcRLxk99",
  "key16": "3WgkQBaAJuhML22J5fC9LVjxK9UeTFijYdDT2VY8b37nuK4MfTerZRnxSZtDVPxuRXMt7n2z3TjCkfHCjVyGPLab",
  "key17": "5BhN8tX8pZZdKYr3LrK4nxgbgHBHRdNkuxM9V1bmqXGdV8b5WLzG4rj2KFhh97Gse6Hapw2DjwQ3rCZdyos7ajfV",
  "key18": "5q5Lv4nZGV8J2kWxJwsrHGJiDwHteniPsxMyZbqazrkFqCvhkETfXwdvJnc1kMjjxAiM991FeZoXNGogJVmBVNi3",
  "key19": "5gyhW8JcBosLFLmgYQt5QWtmDuQtQdtMULksceoTiSNSu6MN4AVGB81wmVRcC767bZQD5NyMMJTgf1DFkAX8VX26",
  "key20": "u3JYJ4LgcmTt1h5qseshHbqjBC3WHkHtPw9UYXj81rjBwudqer7yiYmiSr9GmZdftvzfWXi8ZbWcH8SrCyYzpNm",
  "key21": "Rw9gvyxRRHbN9u8QU4ohhmuMafWAwU4d9m1gMuepXFQVDsSXz82PNG9vzadUFyb6rHjK2QFky1rsic99as7r9oC",
  "key22": "3eiyLHP5TdnarRniJf1gHmtsnqigAbzxB25zmadW2PQanFLDzXuDutyBixSYdLY8xRko74jGSdhsAjDTLCJwratA",
  "key23": "2JnvXX8mT7aknr4pttg8mWMPVDxXXkrbHhc2nWFSfRKG7nStgY1FhRWtZq1nuksmkfoUNAopauWLNEs7BagNef3j",
  "key24": "65HUmCujWZmheMvMNy2MP4KtkXiAo54vCxSwMTTeBTg3bQdCLFNW8Yi4TYQamrzxzkLz2gXHC4741yQo6PPnf72",
  "key25": "4W82MvBvb9jxsuu7tcc5rn6Kq5eqnJcR5FuxSwSSitMAviMrEovRYaKhXxujFs39J2uPbNbmsAzAiaqyvowLoP43",
  "key26": "5TCwPQ7g2qbAcwFvfdJWqmQuET878FFpyNjv9EjUQ29HY619LMAm9zmEAbaddj4qktXxHfbpNxKQTCCUhgwRkLLy",
  "key27": "tZ4AtyFVL6s3sLa593ZqeqrLbeutGSVhvmb54114VJSHqt77NoHUvWRDR96dcSTkyyUyxkYVusKvE6CJYeWRp82",
  "key28": "23zbUX6aCp21aZxDZUTahbm2DTxMQfQ4o7NhMHZXrwW9VhDe9rwdiYLvGFBGdRsfKgDuZqd7Na9yw9VLzBWvv3uc",
  "key29": "5r2ahJh9ias6a9bz6gMq3vTzynkeqX57fSujrdX4bEEJ2UQ6XLZDK2QXgzErC6x4kBJ7Z2G8k4hjsB6xrtjNJm5G",
  "key30": "3X7cDNnWSR6hNtrf3wiYxmXypBBeaceBjZVAMX9DpNxktDNMapaXGRkV1jcdDx9NbUtmT1hgqrC6YUdGaD5ss9uJ",
  "key31": "2pawJqmMfJppNkWGjG5vxi7j1jQjcdfVnXMkwmVdWS9omAx7Hu6V59PWthZHWQMBG4UEQrPphb5JAVh2ovM6nPif",
  "key32": "3pFDJA4dCkwyYHSHBCC49MZTqjzqK9ZMLtgE1S961WJvndGsZKDBug4jiP99ndfQn11huvutpcsWvxP2VkRj85M5",
  "key33": "3n4cmdQrCr46QS19ZX7ukKUriD2Zqar6AQgwNH8uXufn2A4oyAiNT2z8svFRjaSq5Rs8Nkpvtcxk2rTHyEYNuAXN",
  "key34": "3zch7R8ieThkXS1RQy2aLWoGb1xJos77vtcndKwYCHAZinkf84VDJFQbGVvGWq7aqp4LxFbHpjtsmy4uXA1AHfdc",
  "key35": "3WdMMQG6MjMiGUTuL6Eg56yYGRALLWPLXCWrfpbbdAZPJebewGCvT7ACnAYxh2FZot3Ssojx4BSgmP6Q7JNGN4ip",
  "key36": "4RyVbiBCUShgFLkJw63FqJea1JXegNgEgqPAPA3eK6mtSVajF4wq1aiGZpjfhZFFFcSCytYPfgeRBRTYuP5bjwX2",
  "key37": "3fYxxbBNnD5kRine1tqFYKmSXn9MepDqED51z8B3qC48GD2icyGwuAE8QbjY91qdefJfDK8WnoeHY2Bb8arDoR2K",
  "key38": "4C9pwux9rdgkxSrVvjPv1dVkG2dVoW7GoyDadsKrGGsUpY3ovDrmirXuD3f5cdsy9GQtvDywpKKGeP7Y8Si1xkHp",
  "key39": "5aANgqKCFgqpc1WQbB8fLppGFu79kbCdeBtav4RTB1tUhwdYhVeXYKk8Y2U1nzMd9MBoPSD6HYFYjbfAuinre5R1",
  "key40": "3Rz4dbHLxJw2RvtG7SKTeqdp2t6nErEHJsJA5pRGR3Nj7Rburng8X6ptYVNVKAqfu5WvE4A8SLjGPurCop2vP6zb",
  "key41": "5nWnnC9q5WW1Uo4teUTA5PYNCRMvUYHaoXFMAPJk4YQrFcwoyZNCgFLpnq8EpEyZxyayEbmkxay99KgSHJNyUX1R",
  "key42": "jLEVQTsr7C3huc5rJe4WrBognopcvYASLaPHUzAEw8vFQtYYaKbzmNiqabcTSZaSFSWBpLwss8vEguHiqwCmxBL",
  "key43": "3StdykGXUbGJyfyyWTxBgkm35ee1iTTksFaPpayvoHkjS6jZMKiND2AV8y6sfmnCpQZqXjWmgVi5V9W8mVUYhG9g",
  "key44": "2ukR7AuJFeWsitQtuiDbtmGS8m5cpBXqqZERie6qmG1bjgvRa5REyBbsU1jnEF9b1oFnSGv43k8wD6JCLsSjqXm9",
  "key45": "46sutHcMm3WRYqc7cXkUgpXQkVeJUR9LHWDFu4bUkZeU21LM6JLkLq1Dc2qkea2tB8nL2NBjxgYGVydACwoevewo",
  "key46": "39KW8c3HBJsN4zxNUpUrGnMm4Z4S45KexEbSoS982D8rqno9dzvdCkSCRGUww7WURnprJK1Jqh1kBYWRZtUQZ9Np",
  "key47": "2gGnc5JDvmzdH9miLFNWeEJj7cPuBPze7xkD8GNTQGPKL7W5QFLAJyx542133bQG1yDX1EeVdmY6QqQBLtWFA4Gg"
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
