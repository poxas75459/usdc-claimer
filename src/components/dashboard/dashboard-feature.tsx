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
    "tY44reBA2xNk72BJJ1uqbiPaDw562jLC3AbPCZEKhLgZ3HYiRkSGr2DVV8jF8DDoimyrhEVDCnJKq57f4shwY4t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PYS5C32V3AWAghuhF1PLU7wSQZaQANCsxUSBbueK8yHcq5wLSktbpWyEkbGnsmXUMuMbmjYLH6CjqNaSNRXVQgv",
  "key1": "qsjYN7LCpTgBfdTXGMuH1rz9iX4grdUuyzaY6SuZT6y7drqTjQmV7fdthKMCcd3erX8A33Ci8ZEiMx27VkSsDGj",
  "key2": "5icXXeS6UDPJ6EVi65AWJmsLSELPvMPmgeUbnwxVBDu3DNtC5mJmXpzsansXwijytFpZUGuJgihjSrLZHrqBVFXg",
  "key3": "4Ub1DBVG3NsigfSYhtqV488yxGi98WRBbSMvUcKBZB3q9x4qYUcQhoCan15xrEgAhBZd5oorNA4dcUtVg5gCKVu4",
  "key4": "3o91bZ717UKD97KU1XYTc39xDTuEgJx7CKCmUztg9ELwYBfW4xcqjqX2wTH53haufkfVAN8Q955vFHVAgodWSts8",
  "key5": "5KpedBVTbxYT5NKyWfuuAzLvPHmUduS3oQzyj8CjE2mNmUWj4vYkQZmQkYqavFCmPSUfdC8WAVznKfFPwGAgnFEa",
  "key6": "3vBiuzLzENJVUeT6sr5RaTAHXBrVeoXD7pn5PNSGmrFmNddRPdWr83U8reML8B5GWMPBXkzZhSvFcB5ReuMeidE6",
  "key7": "41aHYxgtrdfeoiREJJB8HZmckM4Cz7chuds4NHirGGw1TyYwHu7n4HGH4PbnsnXiuk1JL5uKPGd1EA46p7fseJHX",
  "key8": "3xGu2GRMWavq2YhNLaEVrziN7nPvsGnFeoYYHSMYrmu8sXPaxnQcp65qxDihNE7W9NAWG3kYbvadHt383oEiWkuk",
  "key9": "Y3iVcZm3TGLp1Gqoqz48Rvh34vqKR4oqX3CP34mgWwbuoShkugjMsCJ1iULos2UmRrypc7RE6i737KWukG5Wu5M",
  "key10": "37NtNyR3zu4ZhbQ1omGqEn1WjMwrgBM9Xahz3H5P7qZFQjevb5bTQrRbBjnWZ76tBxKwudtbHwgHcNK4R97yQ6FK",
  "key11": "2wBnWwym6P5HrTQd7dfJLSjNhnJA1uzuDCxdhUwB1zKDKh9r5Wc8CNQtwKJd2QidASJvhmDnHHVcEZiMHkHc9jtb",
  "key12": "5JhpwdS4aoAioeSbuV7aUVeaspFG8LbvPmbTzVjAVjbNDSbi5UVNkudDXq1XN4i1FMUM7xtTgqRmMcgSdAVvagjo",
  "key13": "28Q3UcgJMVGwkB8UMEoDEsG1VkMw7G69avNCtAxChQPUVdn8fb2WptueStnryYwqDwNKcwFPyherNCfY3vzrzxd2",
  "key14": "66YqpNA84w3JfyeBiS3UizNFBsSVTxiQ8tfmdSj6nhxm1j2Cp4ZZtc7vjD6fxXgVgohvBRtFrnNBF1pLz3xD1Yrb",
  "key15": "3KcqVJCBcXAacjXbLax8ZT3wu7ijyKNhXhkTesbTnzCTwLvkkepZrKJKRwAQ4gHfHjzQKedJWQ9qUEpptttzC5W",
  "key16": "5xrnXLUCec8sgPRmrSkEHjvZYkUgSvSZ5uk76n2Bf7gfiNz61KBRZRieFB9CLFdJ786Go8vy7GTSwrwTveAufXJY",
  "key17": "2eN5HbBr3ho4o3xGKGnesWB7kQRBaBJxScbHpxd1bZji5Qgnt6SiBESfkcjgKX6BhnXk9HwNkWBXBmmjvD6sYGaB",
  "key18": "24zAUsrMXMvRPBC9GK7hgmYMYNV9L5apBLMmUmLPdvFsHCrP3vHqcVEKDbsdCp6GUhYKvTxeHFwnoJSn6punc1Fz",
  "key19": "4jinZAxDwWf4v645rBzNoEGWSKRFbwcjibVasPAVCJu4GqnmQBMVZSH4nAfbrk2aYnCLVkCPLKFojGfwPTSvwTke",
  "key20": "2osxgAvvz2gJuY1saYRXazZDe1TchfKobBFTz6SGLDsWSBRZoRL484FKyFMBkLTXvQjSHdKt9VkBDr9YmW4fngbf",
  "key21": "2KV2Bez8Ux6QQAPAUnp2jrNAES7acvBbyEWUpyJtxNC7YfL2wGoCUk14P8Y5qkzhaZegreRaoZjp7TxWffdJHDct",
  "key22": "4GEmNrSs194WX3qz7pnW4M9hMAFNx6evtWwX81zKnwTTEu7rTHLdFzE3EpKYDNQ6GNG9uT8do2tjFqdYWzbXL65a",
  "key23": "5BtqhbmyMDPBcSBeR7wrX1opBqMuWcsdent3g4wn6rk6NtHRFqcgnQcyMbKJ1tTiUiYpA8v1J93wDKg4TKCHrB9E",
  "key24": "24s3UjuPTnSHv6rX6aSLcbrsP2C2Kf7BTk8x9rwCZBdGS4Ft3MbTkYRV4fPGrVU4xDn1sVcniUTvtinSEmWiifD5",
  "key25": "5PrxD5jCQ6i3xyx2q5GEUZTr6ysE9S24eNmvkctpSGKEHPTCMVWWoTTqZT18i4MMVX9j5EbCobEjExXCfi4sbtUL",
  "key26": "5UtRbh38nkEVGZz5XhwogWMSycPYqTSTWzgCk5qFFwzFS8Pp1JiZ72sBTjmiC6aSnuCiKnHcqKjVys5pb3NQ4Wdp",
  "key27": "2hYcdWXswKqyzbK5eNL8pdHhosiTxP3orkF8crEzopG6VTxgZQyhUv3Lpfx8iiz36KVk3gjsCfLRom8nqesSxt7y",
  "key28": "SqDfvq79YNJBFM5QVr6r5PvuDtHXxYwLanE9A33Aq3J9d84g25eo2nr1SU9oEoJxCuTYWncFtqDvyHSNFNhuwAA",
  "key29": "4mdNv6xCTnKge4NCTyTAaF9AALQsPAkkcAnePnMAKaUvY7DFsPKjabob8zgXAoeJwZSJDMPdgAQWK1KzXLinGSj7",
  "key30": "583NbNzmHBiBdhSNUzXbotx6KeXXEGfjx6t3RG7RPFfosGdMxRdb1HNzVHJbYwGNaqsq3B2ucX82tr6FPmWR1SBb",
  "key31": "2HXnX4yUSz2HAsBeGRFZbkSpAcGekrot1KUKNAQ9TUoJkpvD7z1khEZweE4guWJWBUg3EhhgBazXYe5WXouvtyA3",
  "key32": "3vurUR5r9fySdAwGgxdxwpfSiPukx47s42XfpA5R7eME9Yr5wGkEUP5tvR2v54H99zvDJqyS7c2jEXXnnxpg9H9E",
  "key33": "251NLNjS1iRbGtvd8jkquaTK2X7sFSmjK59ap1X2X3Gc8egg7JMwp18dz1mHV5ppEdZqUu9JHAarxcEiB9vonCrq",
  "key34": "2gAhoS5FMTYcweRN67DAG5sUDrW1FZwre2P2KJ2AALNbk69H6MKmwa85junoBPTcwT7KivxzNxUGsE2EQHH3Chtw",
  "key35": "2AxZexWwqjzUhXM77Un9ZhkgrTtke4KcLdm6ikHySRcCWEcd7PT5tEGjESyoFaCcGwtNVYLhTU6LcFLsKXgtTRmR",
  "key36": "34RSfiUsTyRvR6bED7GdEfxC85MhSW8gFdkSWHPa42gq3LkjQtwzE2Rzez7rkBsZNnoaQRQ2AwJ5K3ShzQJZvVmp",
  "key37": "5w2XpDAwXMhW6bZpyYQQ6htNJJvpTm23WXW7sWLtHLusmxRELC12EWc9VmnR8MJ2ahip1JX2EeE4yUnvj4hhdGem",
  "key38": "Qe3eTtnmYpwPvLUxspQ27C1ANdengfkkQrrospxG3XdeM44UPeh723GYi2ffdWcRBP4sioGg8FyqUhzCfbUdwju",
  "key39": "3jEkEtwnAa486NnrzNQ9gonGRLfwXgaXSczYMcsVTn5fpujrFjzoia4QyWwhaNfiJMGrgKw7en3JL8EaSNyiuChx"
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
