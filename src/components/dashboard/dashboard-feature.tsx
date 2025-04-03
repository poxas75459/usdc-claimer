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
    "4fcFZ1X5Hm9VTouwRJEnzDyhHmAv3T9fK9PJxwDfZsZ19Hn4xwN6EsrC9p5prCCYLqoLcBDzzP9kUeFSk4eGruaA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VkAeXF8oEsaotV5jGNvmARRy3SVAcRCP79cUnXTFZzoBevf7HjiR8hvJoVaf15UKWXvg6s1pheszRF5yCjiJwuP",
  "key1": "4WhB6MUTty8bDc5PADksXSSFHezbgXgwTswxp4ugJwfh4r3m3ZcXBv99zussEtNGtokRgNgHytueqGgTST46qTy6",
  "key2": "5B3EY6Vziiun5NzMvsTMmxz3RmiixaAwbUmQc1muNRRtohEBbV8cmnXiNSRX4BgWcUnVb5onFDSxSfQknz7iv1gx",
  "key3": "2TnkVpzFMrnxuwdAmqRDswXJR49VxJ1eoxLnXWvBA4gDg2xCJWAmcbqzqzXReEr97AhmaVwsfzQ8kyjo51vYCGq5",
  "key4": "2yoR7WXmbRtmodFvxaCEVLMcURfXVoPw3ZrcR3QqJWgVdRGyW5zk7DEgnPy3QEFSWhei6kjVVuKCcDA9fddhqFS5",
  "key5": "5KSn997QRBRrnAtn4fkZRUth7SxXhaLodhrZXJyYqRMMFdJqKt24kL8JzwKLynCQZ3yHSiUwPTc87zoLEMZKNZnK",
  "key6": "21ekUNWKM46rozW7mk1wXxCVyCQayJRhuMctMEZEFQTGVov2Us3Q5xRys6bDcg9YWEBTF3MqkY58pNXiGk2QywPd",
  "key7": "5iNBZ71Mff9QxR6G1mZ7JcUP7Cq7HbhpULQ7DQaUQ1WzLMRJvKG5vCaMAsb362RUCpXgysn1s6sSmX9UxQ9hPB4C",
  "key8": "64xDRtES17pM4vocXqn8HQzrHA5rkEAjTySenAqQWgzQY4Vv51qNw38vzMTr2DDrm5KdqQgJoFJhcQMieBw6dVoD",
  "key9": "2Yumbp1hkppxvuoJJVn49UNSTAhdW61hSb7XM9dPPA7HMgfRcuQfBgyv4jd6iLBM2sRGnZxi5ExvxqV8Gk1pHk7i",
  "key10": "3FPCoGvscRWZ3U8Wv6YP9nHwqRa358kQY7GvLQ5NXpypwfqEjVgTqYVxRT15vbQzEcatJ8Urz86JXhDgSgExMtyd",
  "key11": "RmeQ2MFZRpTnPcvTup7DdPVxsrSVPEqyMYwR9AS8UCP8udcPNhDWHWRKiqwUZEbALLGVjFPhPdutpJG9mHGQZH5",
  "key12": "wWweyKe37roZjykrrfatXoNyYoMz3QoLuwdNuKM7fJH3MwnvF6pFjqYBq87tu8ZZt2RA9b2C2ZSi9s8KZJ8HzJz",
  "key13": "3jgP3z5YtE5DS3XRaj3o78iBYMPQAT2gFaZUiLxJj5pwjRYj3MpwccJ3VrfwPsoPZZ72ee5Eppaz1J8Wb9AGm1m7",
  "key14": "5taEPZBfkNZtrZwyTYerPPwTcpaSNmNHjRExrtfiwdXRQcefgZpWwdXfxyzbjKWX5gZbQm9UGGrYKF25hErmZAfD",
  "key15": "2EDBdhzrcfcnSWoz815f2TpNx43BAFUanomtNcDudUqm6fRDb8kBLjLfc6TxWgC2LfSMYcQBQ45jqR9ccnTy7DDL",
  "key16": "55z25XAjmXYdMR7QSQekeiYdqTd864oSZKyVRs6aNKfgryunkZzKPgTWBrtguu4A77Y6AyZkmjuuVGqyYiB5uY7",
  "key17": "3k91oHQkySRiDpD1XZ1kkYmcwzjvJRG9AFsSUqXG2Qgju7H57wvHzi98Mf5MbUAwrqcpNFcy4ReqLmch3rBLVSW2",
  "key18": "36PqEvPX4oshWzBUdBQ2wSVdKSPQ9SZoHaAqdsAz72L77obaWJfiGB3s2Qqody5VJpKrf4WBPRkGyjgLDJZEBtWm",
  "key19": "2ETEAZzB73LH5QQ9hQyV3XfAMaxFWMF77ssyHjsKgcvjRAysgMyuPvYZpfWUxy7mcjdegtrN4NAfgz2Bw2pcKGSJ",
  "key20": "2npo4ALBxEwSUdgQfsBmo2HAYDD3A6uaSwBALXjAYm46VSniNdQnP42YkqRKt3PzYfkRsH3BFMT73DeiJ2GpvPFq",
  "key21": "4GsATFpUU3GVocG62Kp8KLPuukzvs9S5Mkx2RfriAora1nQwb5K3f6q2x8ddDrvjovQHhYRRQASCJs258quh5KwY",
  "key22": "2aCMVbXhwthVsHwFUJpvSCqfah7YnKCwssGVs4wDmobcembgfAUhjonMWHR2d6v7NeanM1mUyphmES1apwHHxDv",
  "key23": "qvxDX95WNgdHj1MAGy1SirTnrg7cUqGZeuqLtFqhbypawtnBFZqi6iXh19mR45VnEBrJkfXZhH1zccq6LsgoWjv",
  "key24": "3FGvUeND8uzyRoNhF986x8xXf43FzYU2bgT3fT9PmobN78EWsVPzpCWeUd23kcaKzNStJsbQJ1MDa73gkSa4dq3G",
  "key25": "3igyeh1aEKgmiLS1XMXaLKmsvY9XAxD6SznGeZStC78cCbuSxjzN9KgpN9vRq1fX9WbX3ip25SmszFDLHPj9vTex",
  "key26": "DYnwxqJfRHbJZ2xWHXNpMx9ucW3KonDSZuJZ8LZGbdFeuLqsioM5i2aS9cyat91qBM593qbx8MqHWUaEyb8LJje",
  "key27": "5mx1tvB2BNpPU99qCKewTbE77ta7prhohHpXn8NwSyBfoQzZFK52kDMKtdMXU2AvMqDcobbuVYq78adnpRybfSa2",
  "key28": "LpXyAZdD75DPhLAhBHU3NRhVHkEzeNrJFD98v7zLmqitfzbCVaeNCT8GicRMizeedEECEvjpm3VdmVC492NPqLF",
  "key29": "3T7dFSjU1XYee8fKDUnhrnzwRa4u7QfdvSpFc7iUS2Ez2Mn4ZkdTRA6wr8ZT9bZh57w6ytyHqUALmEZ6RL5NZs3a",
  "key30": "2prHa4gUY2kD6AaxxusL3TzqSJL5Fq7wboLmSUrPWyvBFbZELyg9zGipqLrwy5p5CYPNczEWsYHEqGxALA57eYBM",
  "key31": "5UqTRJVcMnDGmjQLGKk8xA4vJbKQWrJJBpjqa9afy5NLYkob5aLLRJYgvEmdqdHGiHw5iDavxdTJ92LByKHNWseY",
  "key32": "Ae5CDeeZebNmZa6WJbqS8d4P4C8jJMnxRpaSx2VekGPJaH9gBhSLqGt1EEyRauHdL9jUNHGojhPvWdk2zk748Eu"
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
