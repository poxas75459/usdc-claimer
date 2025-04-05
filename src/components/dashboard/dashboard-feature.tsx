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
    "yj5kcHcx5BewqSMoWGQsgLZjD89MjGSKx81YtvramPFx3dLdsvpekVRHSFU85Tc7YNHeSaxq5zv7Ym7c4bPEJg4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RgwcyTdnBnzFPS6DxLGxHCwMCCDXPdChdn4oCwerZaLr5j2MMCbjYejCd2yv4qbTXB5CDLiGFDkcmvy82aCQ6h7",
  "key1": "2VBnf18mB5tsUwzHuRbQYG3wZgxNyBw59kzKPhDt9i4KYWq2zGzzXhNyjuUVbiieGAAon3dochLztKWJRZksG37g",
  "key2": "XokhyG4feeVZkCmejGVmiFXXKW19G7t7zz7G3UdcQgmNah2vWwNizZK519UsyUZbvkLM4pdS8hN3PL5FcKBSkkt",
  "key3": "5czVR9i8U1148gKuLdHSih3ZUdPxiSWEMKcpP4XJvJguMobRjLwE16QQ2NASxen4drZXvgdDpLZBiYy8fS3z1XXo",
  "key4": "3KMv5Wh1XpLFGYLYLD8y7t6faRHS6HEdyccLFGJiHjv7F8j2dFD3F8Pdw72W5myJGGy6XUpCXfhT2DKnHTAcVJg8",
  "key5": "wyjMVaFoDVCSpacyumUgcx8uvMaQe4dEdNJr1RbszygDJfLuhjxfCodvh71HfqoNezqzRVN5xzFcbWMUAnfTUBp",
  "key6": "yTWMAY8TMymL9wkgFrR8F35Y22ySvStcbuBPrvrVgrNvME19Ljh6aDyB22nm1cxZAmFcuFtqVeupXAgFW5bXmcz",
  "key7": "2xcBKBHNHN2PooNKwsbjgkKS7an2jedbp3NpUu541ETWkTcTaQ911EFSZm4hDA4a5o6JP5Efuy35r8au4u8iM7EE",
  "key8": "52qpoRcgTv7sQ9H1FJrxGtYfetUUv3WL1WdsaQQAv968YBAxtHAfa9ZnQKecAY1P6UTEjTNdHdTdLJViSd26zvd",
  "key9": "5bCaehNgTieMbMrh4CFxMbxE9Zv2iZ9bbFw8qqtmtyye61MxxrNucASRLbWLFu5poYAK6kHVHSqaEfoFUQYnrGFe",
  "key10": "2JGjdz1kXjhxX9Bwr15ksr3YJAzj2oXjGCc1ei8P3QYVunQWPuEwyyJBkghZpkRmreQ9mQaPtw9nzMCFfgXzm8cr",
  "key11": "4UCW82XCM9fbrGUbryyu75GxVa3n2rmT7mWeecVddDZan53GU8XG9o8CmECE4HJhVJSux3Xt6ZJ5X575fAGnxiEj",
  "key12": "c1N3d1kd151mbe8scBV9oPwwBa7zDUgj4ymT17sBmfk1hE4x7AwoHLMMTTsYuVCVK1jjKnHPHmsmwn1C4myEfXf",
  "key13": "2nDycj5RURvYNeH2UPD6Zxf8FovhjtLLHbi7he698LinW7YaeShng2rzgsCqjsgZYeMS2LdHu75JJAJ3RDgfAmQR",
  "key14": "4M3kLmqD8dYz9eZYcRe2CnbrDcJdjjarZr5esYUWKWh7Mhp3Be4qRBw3JsDCZp5Ub813e6S8ca3ytdXNbM9EctQi",
  "key15": "5Q7UG9rsyMGhyfMERhCG6rTSCoqtKXj6XmoRQVE2MDzFqdvMEmdzyFTH4WN3pM76yzTV3s5fha5iitYvqwnkQDEf",
  "key16": "44c8UyTGwnGNRRcanUzHuMsWgHAXQHtby2LeWZDUPMp6fDURBpdm8nLNcNp1sfkhP21Tov33Sbn3r6WAuVkQ9msJ",
  "key17": "4Rguv7tUMEvRobQ5KbRt8JzAhgtFCRuZxmwUq6TFiqV7s38c7mFaVMzcLweshRgYDEjeGN1om7sQM4tMLUQ4SHUr",
  "key18": "5cLigvmhdcjr6PmZvJxtoAZJKZ9gV3s7DY9oibfjeKKbdui6as3DTSQuQXHzxVrViVr6hiNc5DfCgDNNNzUPGZTA",
  "key19": "2GyYkJS6zL9bYsegwRDzF4QyevF6FJfF8pfXmxH7aNyTfDK323VTD1skYqxgaBVkEA18M3EK9CwUevvu8zNpVJQT",
  "key20": "27gjWUxKinpmjoLFyj4Zx4wybqFVzqWsnX4eXVUqa8RUvXazGQd3Dj5saGBpuPXjTYbZ6jcfQJc1uAh9pr7CYsep",
  "key21": "2RUnv8qxB9DjuJGrqjr6eNvboTtRFHUMUrKL3GXgcvpkfDoAsuLuN2DrEAgaKz357m2rpQjD3Hdh5tWZX5qZpMRU",
  "key22": "AfB2xe4AaiwKpMR9W6sNSQ27D2zrBphE6nE8na3WNfcbV1hvP5jUnYb4WeGWasXmiZBMU3Q3i4fdrGFi2ZEAWde",
  "key23": "UNTf42AfKjjwjYkkhPDUAvZXf32UNoRBpGeGz48dYUHKgtE3ZpivRkfYbb2MYSKiEBSFPenowBXmxyCsMCY7iyc",
  "key24": "3fw7vZy9Rvz2vAb6uPigod38Qfg2xcmmWWnMpw5v4GqFQnbyCufKycE782cLkTsDnjBYatCkoQTsb7dbE6Q1h53Y",
  "key25": "5r4ND3UChpHyv2rFkQdQXgBqL6DkZ6wNbnhf9PgoacsdxrWyV2RZoX6SYZYY6xnaxntWeh7ZsbMmTq5r1UdZmQzD",
  "key26": "3D1ENrHVSKfuyr2AuDbjQUn549DpN4bvdDsCSfYjDwSjruECHQi3zFQJ66tCMUgQddCkRTRGuAc17VGGWxNZKKJL",
  "key27": "fAaPqGFCM1iHMJazXUF2eHn95ivv2r2nAND87x4NBePBJduQC3Nz57vpGaDTXfaNWydqc8xuDZ78HBGDF834aCF",
  "key28": "3d3BkTEXpjQTgWNcKqcWpbrbn7tFzJkzDGxVVZncXkMkX3c2hB4ZrxgjYcrZcmgVQSPM3PADQxqAGhz11zprnerx",
  "key29": "2KMo7m9Kk7DLJ8oHWory6u9Jpbzh2Ro5EAvYifV1h522tztgmMFAPGdkQLrRnTx295w1YbGMLpaWStRHn4BUfZGU",
  "key30": "4dzojNd4k8P42ZtRALakNJq6SY9srzUjD4eiG6ZneSpQfcSiqbHYVbdPcM6a4ngd883zQQ6vaCs76RfMRKUP4SLL",
  "key31": "2A8nPJQd1z5hARJMfj517jzWvELqtuhXLB7ipguowq3ggTHzAL7DFAwpxz6wHhFmsCPivJq3LnuoPyGVoN3vcEcX",
  "key32": "5JjNBNMURkdw1aEkjwyWjfj416qHCzwdbCjkEfvwXREfj9XPxXjic81zfWSWdbMQSnhRh7mob6xboTyhgt2jMh2c",
  "key33": "482JgbQUcQTDUfDGAYYzJBTE8yUucyj5srfwA74VRq6KTcDjVKpwmRA2bcuCLFn141KPSzUWVGLncAWFTNaxr1to",
  "key34": "5YsvRDxymtkmEuUiU42H8UPqCeB3D3y9kZtEDVY9FbTwBM9zJem8MbtKFv384cf1coN89zicrGGPAvHkbnDxtFh1",
  "key35": "2JxLbM81JvktuiyUL1tjqNRw5TSpm5HQHLNuuUkwx6Z1JUUuwcJD8GjmWtm8dkH7fG4q7wmajFK5ahsoGrUFuBWA",
  "key36": "1jAhSuJ73GSYu1zwzyVYQZV11HqRCxtvenkfkjf1V8dbhHN6ReZyU8y8P6j8ZjpPDRwhbyRxDV7DvYXGsNrichF",
  "key37": "2Srh4LbEmm291hR2KvKB8mNvNhs9jjnUME2po7u9EF5BK4ApTR29MwFQHupskeq8gnTLnXnL7C8XEhgzBhhZvnec",
  "key38": "2ePfgaWCPgyav7h4cJFFyCWLoacRs5Gf4tqZUucsfKVkGoA4u9HG1c6BdiVaiMLV18R8yY1JnCKhWJqZkaTxTb5E",
  "key39": "zMDH4imJayz7XR8R1Pie2jddidfZjvMdUfNcSniohrgj2DXDaHAwiyF1T4mFmQ9udQ1NJaKWqSSLWQCom1nH4WR",
  "key40": "2Zy28d1Ujz155jNKbwdbKfZkQZDrTsCfwHdRpS6sLQW7yVouMA496AnpUcWahpffBiUiYu5jNckBgQ1hsVryyfDR",
  "key41": "4QcY9iNmg2hADmvwnF5dR8sLfnDWn2BC2j6QUCbpGSX6eAb8XaAqxmwR4hvgg45c36ZYceoAzQ7MfHFcb1RjfvmA",
  "key42": "3iNXKWLXC9jVh5A74CpdLE5Eho8gr5dQWy25gQWSXqkGDKqzNdDNd3gTQE8WqpN2UGfyfKAZhm5XUHe4gTy9K64o",
  "key43": "4aR1Q77GpsRv1NDfs5GmrAF6fJgnHfBdmPErmrNiJW32woATqsBkUfJPDGe7Z95RbDM6t3VZXRJ3qkGPdKBA8iU4",
  "key44": "49cMmSfVTRjzzWZv1U5G1ruXEq1jkAdnttcN2gHmyxkCmeiFqbBBtdwFLsPR7zq1ATVWTfcBWqVgHZiDsEG18Fch"
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
