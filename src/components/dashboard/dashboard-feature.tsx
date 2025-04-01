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
    "2EqdwoGjTwgD3e5oQJpDX6BH2XV1VTzRomyoFaM27L3am91WgpTyAfHoxmymner2DxAwz4RE8DA6Zb1f3CSXdyAs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LZBisrt7VmavBjEVwZ75peEfJ2UgtLo9qnr98outbwL2bqvvA5994UudyrQWiyAUzm3stBoaPGHEa8QpZaJcDAv",
  "key1": "2UgGZktGdKyDL3RfXvhJTLckMBmV588MQPV49moWwy2NLh2QXxM5WRCCXGg5PP1LX4iPrPunorWJ9gr2yEUgnb5z",
  "key2": "4XnwbKipdg4QNVW5EVgPX2kwj9oHxh6Kq5n4Uan2RhVpKyusZtfdGV23b7zTpAEU126V5LS5UgFPCyBK9aF3d1Wg",
  "key3": "29LhFaWGtpRFXbSmQ6DVAJosWiKwzvZ4WuS9vsNd8qNdq1ueR5ASJBr4GZKP2UHE5Ni28s8Vi9KmAaN9QZSJNNDV",
  "key4": "3jiUb4k4AMqco9idsE9U3Tq9koXvT2JDB7p4zLQu89ePn2VRvopZL4sfMjuJbZD6ovCiU6rSAbhLxPv9HJ3EXgBG",
  "key5": "KNcovmxYsWUwYyy2a7WXSZvi2cvwnrRZmgbKb7mTgUyQVoSvwhLKK81m8juFzLKkCDQi3VTd54h6zA97eNLjQeJ",
  "key6": "CXED4b3G1y4zj6EvD9E95PpuqzcQGyUuwZY5HYYoPf7E3dNQWTc7AqxF6T4CvihmZUYZ7gDkZS6hqZZoKAQMFfC",
  "key7": "5FgF5ypz7WoZkvLFRTN5veBtoaeVYuh2Hg8ZKt6JehHm3XsR5SesvMMhVsJyY79HTC5fAskBAbxrNvQWhjBbdruf",
  "key8": "53f19PZR5CgjUYSfxHuXCoh6fn6GGLmFb8AhLag5ywPB83WiXyQA65AyaPeNBg3M8QT516xeZ7CmvRJTxEmyD1Zn",
  "key9": "2Gqp6cqUBVfCs4s3mFMbtabP5E3NVcpBjyAKtQ1rjNwdiUSWL1x2cuT5q7BKHyKx4FcLABLv2aute5RR4Ke6KCKz",
  "key10": "3HanF1rssjbH8M6i2ogw2hma61AvvghyVkUrU5vw1Fu2U99ayHfzEx3s5NMpj9S8A6sLgAByMem1KNm3SgpgJ4Na",
  "key11": "53xfFs3DAKNJoZ4ag2pNF12wyeBcL9XeLywkuS7fEboDZ9PSdJK5zDNCt4PR4d7W3XU67o2STxwwMbnSXc5fC3S8",
  "key12": "52RGGuMQMgnFah3qYZWK3zrEWKYpyDGpPdsiFZmi6SbmUZ3yjP43RKHGWEiptu7jjhW9Qmruy2rd57bVvErEUcwJ",
  "key13": "4n7Ed1QRE2Ps5GEDTcn31HF6YgZXUtTNaFxveJVwvJVUtdsxLU49U5YWexQm4rC6dk8wr5NNjy5itWJgVB8KTNAq",
  "key14": "64esSBbKhSxqSQEk3HeJxoUvev2AQ93AgF4vxC9w6Ykspx24A3fkvdawq3Q5xTdFjuR2qoQ27N2ftGwM6C3HpTmq",
  "key15": "4RknvCjtm1vs5HPFZ16MWhDAs9kdjX5Zy4SvL3L9K1mXJghc4Ukd4yfvAtVpGmX7TcoSr4aWgwPSzq2XT2egsJc3",
  "key16": "4Z59bXjUfxFSZrzNRuJ33Jjvi8gytk8GHPWRiGVENnTH2Tc4JuyMyADpU2kNHKHkAHWuKiPqxy4kLLgPJ3iG6CEr",
  "key17": "3cFS56n7mnaajmShiCJ3Afy4gmGQrYYESU2Qgu2EVvn4i4r5zmNq5U68E8Pup43zEWkp8H4GpkDeReyPDqkUNkGb",
  "key18": "4wME9kfpx9vVBe1PQGGDGKFEHzDyMAgrQTighZXZ8d5rQXMnskDtt7aNMrmEhUHzQAMA8meCMhbVPvbDZBkzSG4q",
  "key19": "3X3Wa7F7ky5GDMirE4GiYLqRNc8oUyfhzuXVuRKDjgZQAEsVXpSXqRn37B9GYCLzqbBg2AsW4udhJtNnxLbZ99AM",
  "key20": "5HJs3ecoumZ5Ccu31i4r6husuUM7f69MQg9fg4BcpweMNLEm38wMKtWUFWzYjp3dgqU44ZGeQ7CpitoKXxVdEQsk",
  "key21": "2d1DK849utVKSXiL4Rbnjivy8CzxeDr86scuwUt6MnrtcRmonppgvcQm3v8i8ncmWPxBExazyDz2brGwAxieM8ii",
  "key22": "5Ga2N3WLHkLw9CzCwJeqi7wCRsuuL5cm12ZeEVhYEC3iWShk1kpdR7wZY6fMG8CjGwywr19DpTCavt6X7F8bERRd",
  "key23": "27BxgRKXgjzzYTMpvAGXtf864vqh4VqyHrnKugByX12Wdr2Edist9tLtiFiS2Y8fwycWQDkdYfc8Aex3RrLNvnAJ",
  "key24": "66q6gdWZpeWs3yqx72iBRUhHdRZusBjqqXeKi2PiWHmTksW9n5jSzkfP28J8u9v5hSkMLuSncQPqEUmVVm9vKcG6",
  "key25": "2HstrJUnq5g7RvbRo2tReFDXRfWWBoU9W7duBrHbNGgMuqXN3fxYQbLYMjusse2Mf4pe6tf4xhZdQuJukhM7Mjc6",
  "key26": "3Ka5jCu5dxaB9swUJyUaomtZ9s712AbJBvLHy8LJC622vBZimWoB4XuXN1hAFiP81YFVpgtNBetWfrJcGqSrb1jD",
  "key27": "5wYdggeJ3WqfNYeShysPsNgbDBCA9N9BbRdnv5rSZC5cyReHfmiT1hzUJEqA4cZUW9ZPAy8ZiryHiVcg6D9chfVt",
  "key28": "3p3CSjXQr5FYkS1hM2p5xjATT5NFww7LDpfH3CcrUjZM6skg8SpyiZeCY6mCrnibzdqPvKzdYFXPQMQmxUtpJc5F",
  "key29": "2xgbrDKwZXAzig5kLENhu4G9i9hKUs3uncHg5XXzKYGcQLrSr7QQki4DU3mKBQt2hXa4FWn4QGzj85Gf1iSFeYKK"
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
