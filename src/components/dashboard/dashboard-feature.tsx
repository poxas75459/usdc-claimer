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
    "5FQ7wDVb5F9hUcoQVrPbBruyP2PXJ7p52zFpvioga1aT9bNVgdB8ToaLkn37FDsKF4ep29vApSaft63cUhYoo8FV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3weMyQ4A3PuxdsKEbhFGnDjHPMno87iMJ3KPV5heZjMB4DR9M1dqnbsrxMaRgkpJ2T6p7SGjTDaqUv5PgSyqDwb5",
  "key1": "54ypxeYEogW1RRuszP6EGQzYW98tu8tnmgrDofa6b3UUppCbKuFAcBq2H5UQqc7Ztk58JhqZztpTgDV6n4pYa1kn",
  "key2": "QcXf2iRAznQHg8JayLwGU2859fkRvMQLa4nwbf7oiTe7BZMzTuFUmbdWSuifEGBqyrXNmMQdTe8xY8H82odL71B",
  "key3": "2bLJLbs5xQVx8Tgo55VQwnJoGjJPJs1ZsUhKtvXSSgXe2JUXcPcdQtAmCzSdyTun33Mdnq5ZGS1jfxm7YdC9BAMp",
  "key4": "59mz82bQBkYAYhgdVUQ75icDm9DAJeFXBnwqzmjr4aXysxpnQseBzXugG1EyEZJiwSKUQWMVfV9XVwNaUkAEqEvh",
  "key5": "3oQok5td5YmwXhzkikNnYCJFEABQAbzgEVSZSwPczsTMVnM2U4ZCPpr5MP8eYAy7KWEy3CEGFPFgrfutCa41hrVf",
  "key6": "3hjPvhWqkYHeQwPLjF1NJ1McCSvYMNhBQXFEfjf1Y9EZNYai556z5diCbkShzF69kjNorbqhixuX8gZwPWzzSs3y",
  "key7": "3hHsTxoVDFwGMan6LwsuMw6URz22YKYo94ACnUxhJpr3ZL8MeZP5GP9jKDVuNk3CJqn49x3qfmsq2fU6MXfsSAQe",
  "key8": "2Joys5vC1yRsaBpj3w7jtPjfx6NMJHNuviy2kyX7uN5nooXLbGeuwza9vAsf8on3vNUcEatC3FjKW3EpoehMKs1H",
  "key9": "42bXg7yaAn3ekRJDxxpDQeZepFQAuWo5mT69nj7ihS54d5AaYpTqrgxkkepZYr3WtjKvqGvXXzBruMLQcbrUp4pE",
  "key10": "51jV5TvoXYGeePRSodBY4PJyHcdYupyxcP1Cf3XnKeCPeBbPnZvSwnb8YtitbQXffxgZxq9tgqngz8NQswN9WddQ",
  "key11": "kwQmSHZMBXJTpdqszD1jDWH4QQxgJbwAJJZ882h3BH9Va8Awo72eEfHSNhmS8v9oPcm5hpYQMenWfrHHLZPMyR8",
  "key12": "2VPejCDcF7A4yn4vZchCqGgZkPvHeS5U4CJuyEr866fjZvM6CofLRCdPT26AgDr66RhPL1YtZ8c1Y7n9fecdTcf9",
  "key13": "61KqjwJCzjALtCnSe1JwedU5LUAoSaAvcMPb6TaG2EmHZeUU6bZrhvhGDL8WhS4kpn7aT723v4pMNFaTGs4v7pRW",
  "key14": "2xBi883tj3YPcd2oqpSDZJLDsPZ6oErTAkfXbJnjejtv1pGxhdvMvX6A1id3PNXsaf5p35LQzAQ1LrKKKYsRVYSo",
  "key15": "51JrfM4MMuv97yJk4yBLScAf9PeK2S2afbdzskb4iYXEY5Ey6u9VMduVGfVMLXrqPJ3V4H6SSAYpGs8S6ihtawJe",
  "key16": "1yYfzkHX3MXrEJhgKGJBVp89FRH2yjwMyr5tznB86NET57bkgckGBN4YRpYt7xiK23eZFDrwmVb8Mtmo6Jy5Z5h",
  "key17": "234sDBVrQpKhBPquQnwV1PpP46zeAqCSfpDqYBTh2hc35z1FYFF81RimXE3Lc6ZV7ccn95PRvR7Dr5C6iCs6ZBgn",
  "key18": "3NMEjRscCoNcq5VbodFuQ2c8CKDgbx7XP4t73yLj3pVs4oikyRXk6yw11PkJQhHKVesLuGgCPWPT2ESvow8P225n",
  "key19": "2knCrTerJzm6Zn4imzJVfpnk2AnyhwoSiHSrN8bS7XMJT7jb4kp2RjbFQTrLYCwNUu2bwc2J3Kzz7XLTUQ4z9TbD",
  "key20": "5jBboq7gQqwbPdZnSMcHSMNJv116BPPK159n5u7uTzgDuzVB4CBJioyKErgV1g6KcL7XAbTdbiQaQdtzBeHv4TfR",
  "key21": "2cxr2yJoBHdpc8dNLiksg2ocuuk98ZgCHREgApEUi44Q33ELzt4vtWSnCbEWuLq3K4vRdAhMJmE98sEnXSoGAWY3",
  "key22": "2ATgYbFP6iFdENG2DA214bfcuGb6wz8CHtEmdgCW7ZWc2oQtbhPZ3yz8MNauZV5itNi6yJvMCYhNZivVcFcHxNQr",
  "key23": "23xStHkQdpMXnLS8EUcTKegee6ApiLd2gB7yKkVhnAh7Ms4PPEZDWQGZPnEfpJMkXUBaJBPcqSFJHm4xMuJcUzek",
  "key24": "5JAR1cksvggaQHMeVHSDaRMR86XjPZsg7vvvkY595BBrKwsfEojSmTGNzJgvuXYLppwyY2P55yUwhbCi6EWxbf6f",
  "key25": "38Q5u2rKqgJhDpD6gFAvXYq81UAVdfyPyRH3G9scQjpeqZPPoZRUNPaFrLtKincfmKP5VUSnKYD22VdR9oPr3PU9",
  "key26": "63c5mNLCzvXbpgcG8tBMKBL69XUJVf32qf2m65Ymf73rGMSnmjw3RAFFwY8dfBoH8NLxn8tKVMhA7Auj9CSysGbn",
  "key27": "41Jpz4XtoExH7yx1RH8H6i6dbXAvnko7B6BdSj7HSQzieuJQJZZiEcwWzA8xEZpvGuF1xKYxm3iNf4HdV66F2TUx",
  "key28": "3pq7zMVZs3ZJ6MJj29nphj3rfb75u5cd1mYzZeuzziiTuUjbBQWLHtxams4XMo2eG1MSj3TNXCT3d9cZFJQdkjHa",
  "key29": "4GkJtLmde26SrDkgpFweg2BctcG3t2YWphaTy73fS5TJoqmEHYUv64M7CCbuDFzwwpVJuEJNLstkjSjdfe6cVRHC",
  "key30": "5mvUCs3bMUZtNUAg9BfbdYfAb7AfYaYPWtnYbmbbBziW8Wp8TWVeALgNJM1Ekyh66srv9CR8bHsfMVZ48Qn5o6T1",
  "key31": "2FAULGEWHzGP442P65fBqhPgZ25Yd77HYXGS7UTiN1MGZo8EtQYEaQyFmCCZoWhYNJBei6ApfCH4yK3Z43bPhuNn",
  "key32": "4SGSVB7kHwuCNEr4vuY7RvyWftUVdWxhuLNMun2NAt4GmrXCoW4vurhNZPhfrwpvUWHwZZhDGAx7BPCKeJKGggX",
  "key33": "x6rt7jbkKhGziyRsSXAddcSCLa9M8s3ETrsQvPp5Egn5AbuKFrUiQHTTADa3sCYgmtRX4rFKQpfRGZY2URUxFWm",
  "key34": "3QUNPxgnJtNbcM4wiFJ7kEvGJgvWtPctDCXGNjY81bY2dgqftqpuLEfDn1akuRhze6FNxZtLFH38ycP15iu8gvBS",
  "key35": "Ysv3ZZK1sxLk8bpeAVAzqs2bp7NjWdnYMwHT2GMoPz4y3G5aT4QRM4j4RpASbXrRsPWdbnFFihxmFFyb1rsMk2H",
  "key36": "67Z7L1bqNcyvxqMxsbnrKi6WxDiEUmiMHbaeh3oTA5EiQZYSfCFp1MTe3URzWRo6BgjT8Yzuj7hy33CjJMBpPGe",
  "key37": "5vpVf3K3CgjoJgtGNU3eEVm21bcmGbfbmUDcRbRtdqzM5RAyvzPp6dnm7JpKkiAQeLFwsvQG2MncG6NzziaivmqD",
  "key38": "Lk1XYuzyWmTEJYwW48B84nuf3hiSQNjZEU8wQmREu8QSG5yXAyaf6uy7sZ9PJA3op1FBWzRUQQwnbGvrBnmmV3L",
  "key39": "RxBzHJtf9srVVXTre6x9tmYBYGkwX4h89iej5crAxpMunfR8cpCLkaww3iUtd9KusQjfE4MyfNWVU3irVBYVUgN",
  "key40": "4UDr7uUyMitFCqGgDsjgFdDmiBF8o6DkFkmSX1w1tpg2Y8DGjZfSAd53F3hHs8qv8vBDaPxMKW1jnykZS9rrqGqg"
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
