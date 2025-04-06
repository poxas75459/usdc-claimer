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
    "41W9pub9jCotugTjV1xJQs6sYA5MvavStwAHNEgpRNQGh9cwWpeYwbw283Y5ShwtkeLUVXNb6zJZd5Vxnind7e8p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZocwHGpd8osXcFsQmd7jDys2znNMKMqsmmtaVPFEbacG7dKFugPLxP7u1W1C5dMxyycHA8dVtNyyJ3zPiyRuux8",
  "key1": "2ciRC1aTHgUcgcgddBJ2rf89ovWbkkCMcuFm7ZoiGiyEvHnu3tKmAykfZC1Sv7zsvvri7KQ3eB6QuqPPRvw16Bih",
  "key2": "fPLxQKwhaXQBo6Qs1Hpir3Wj2JAy9o7hHwKssdqNaheTR8AbUB8PmCGdnmVH1xAcMbzDKrgZEjYsXJ1QTtkKDkg",
  "key3": "3RLC6bdi9bJo4Yk13iwxyd9kJ6keJomCJGaYt2vk3fGUiWAksZ1WGmLxzCDycPHK863fgbFNxCRZtL5QhjE8jyDF",
  "key4": "2v6zVmwbsgLXvCWd2eccps6XznNNi5YJWEkigZd1ydLsrMREYdCuwPGYa426rgPk7VmFmuKXyoCjGY74AxRM9vR",
  "key5": "5xygXmKq2mUXgfT5o9drBLY5jfPtHhj4GREGUVTXoSSzpdFsvHP5UyX21hjLVR6hs1UzFzLT8VCTUcf43yvhMc1J",
  "key6": "3n9kKSsnYxPDgQzdP1NpiSsPPeX4TcausNqtAkiF3bPU8wNqSYTQ1njhdNvEKpT95puf7juKj6WWMSr8rgjGkWbC",
  "key7": "5nCG1gTVAn2ZpZL3ogTYkFrRrWTKhudkMnJRxPSNSjy45kp9SUgSiHRd1kC212voC1rESieUBxMfQC6qgB8ZpDHT",
  "key8": "4hJKGMgwgAKzK6XPS4NU7jg2YJraaa45T7CGogaV2gpTkBTLUzZMkTpyiri1KrjZNC8E6Q5Bx2BHpbvCNiqmm7rG",
  "key9": "21K8FoP4LKnQ6EBoERVxti6gQYLvQL7GLrUZFFusUQbxWA7ntxmYoqQds1Qy2hAHBA4y8fhr1fg85VEaie8e5YVm",
  "key10": "4Ptd6HXKGH3SpUvBSoJbqQTkxCJC9VnERa2dyYumZxRWCqVnkpEU5UdTP2XLN5x7GDW34dZuAvo1gvqsWBbHqWH",
  "key11": "41hG92mzkuMSMA78NLgDJndhEz5aSuqdS3NRPaajEThTWg8B6rf3h2k8thY1iD18nRydXL2U89ZPLCrekx2pkhiD",
  "key12": "LkHLqkSLJurJTGmCyftVrhQzTTdyhLk8paCGA9wZMRRXEFaWvDzrZZNG6KpPhbJWBTJHwFdx1CGbX4qpjXB1NjA",
  "key13": "2cPSK8FqtoRK3HbhBCfPN949W6hpDWeERiw6sxoyw5MLekUczWbg2ar2mamH8tH4YERayrr2bAWxHvbiiYa6cx6W",
  "key14": "4ZpAUpxyPwNUb6YLVx5BLYjK2C7yo1u8SRPzmBajHq6mcLeEAknN3e4fDMn7f9roK4m1r7AF1fKtFUQMd6azZXQk",
  "key15": "64GrpGXbVT4d1HBRoU7371i8mdhgthH5qmrPkCJRRTMEfgwgU4N6pLJ4TLyY3ZthpeFXfQq9yUg2M6NCoJxdqw2e",
  "key16": "4NvSikacnDPt8ZWcxrcyu2GkaJ5oTKy5ZWZ39nsDrDBFELUjPen7Duh2bdNgNRqpHxZMJ8cbsHnyvncCwSr1fzC1",
  "key17": "2CC3Qfp1wNrqVkYqKMSVc7M3H5q2fNyzaac9kmKFsatk871fbKaHoL7byYEnGdvzkJMmyfyYj2Pw3CoCJVem6JQC",
  "key18": "2MThwXnLtMnXdiytgzF9xyKEdFBT2yotvwB7dKn8d4dBDLQmvhTF3LkjyDUMVkmm36VzXeJgcxB7oRrFo1fojwbU",
  "key19": "3fJmKS7q1p7SArVMqgz2BbHUy2UTbvF7Lgi5ErgeMvaLHfjVANoSVNwdWy9cfEnhadh1Kxrk573APCKEaqEQVRC",
  "key20": "26Gj49RLfW1wmrd3H8KjtmXTvyBKkZVrUJ5unhhRnHgZsnhJexERw9obLARXGcKJzYpPgRjZ9qEu1X4ZdbHBtpwD",
  "key21": "2adwAxu4jGgveDDhhAwX6tDrXX25pgqFeW9wmt9VrfVLJpbKihu9ZhXH4hbpiHM4qQFDEHLKLTFwwu3cxE5VQfDu",
  "key22": "44snrwJE21eAwz1m9VpdXsLjiwqeYPauqy9RSzGhXW6s9Sy3JCRWGXzmuSEp3pPKbdLKYA1JBmFsu2LhfM9s1EzC",
  "key23": "4f1puK6cS8FkgtFUTQ5d2YUszA1SwdVxPEHLX6Ar9oq5qxys1Jq13uP5zL53PHuGvXUPXiEqnBWVhgaF5NVe7wMw",
  "key24": "ZzZukEkFtE2XxXgEkQnghRscGsZnybUaQ36L5aZBkJL79svNWKQkjAhP5Kqc9FKiDn3T7F2va9T5hzb6BwM9JLK",
  "key25": "K8hgf8wZFYLpKHAoiFeQnNvJg7KS6gzdkyq93ygDcwVt3H5yKAuuYFKGNpWEXM8h9uyJcb2AVzRyPqp33Wh9Diz",
  "key26": "25gB2FgAhiiboRd3GjSMKK7kxYWhDdtRHfkMzjHEJ1c93vfSRQUFpQGJqJCXZ6BZztsA6Z4WmpeEWeQvULrnyGbB",
  "key27": "25KqBuuYn5ixn6hkG7EYF5xTmEn9pM7Qg7LTWwQT3cpiFvrHF9mnVaFSqmQ7nN5cMXuw8xLsHzjBS7NCHtKnDox1",
  "key28": "5RpnkLU4vZaQWuQ5HMtNHuaUmoUzX9QhvjfZ4CaACQWF7Cvc6aUzYfhcKxWmBbj9NHYZS2mxa7VRHjpNtJcGnRS9",
  "key29": "4PbmWjRDjDa4f1GULG5UTtEp3GcipjK8uYfs8YQ6TXnkf4YeZDXP299K6b4du7agjQGzLQnxMKYcuGRaJYVKKfpA",
  "key30": "4qWEJV3RyAipWRzG36dL8EfBTrMMzev9qEqiMPmRJ9cMqjgz9Cg7HFxomKffNpAN4cYUgv3C85faRBKF3jbF4ECZ",
  "key31": "2X2yDNqB288aMSX1MuH41MnNQYYCC3WT1Rgn8gsEbyuDexMbGWEGin5zMjFgdQtjKGU5rHrQC7tCpktjeuBR2VqH",
  "key32": "3q56goasrz9Fsnq5ZNUyxUxruSN5NJxSbqYTEMc2jCoSCBtM2kqPNDyNAss4K42DAJ1FRfrntmdLFnveBZrk5dD5",
  "key33": "4PwcFSJKWSZkZjR2UWvh52h6ggq7H7x9aiwDwdx1XPScJvwiSreSCpk8s73ALcc26jWGM2d5JUGBes27kF2dPwdU",
  "key34": "5yTyndJ4qHvVKftbvrymcmVSdKh4bTSznhdXHbHptesU3rTzYf6yJo71MkwZzmGNSVPFbns4rCKirPDJ6fZSAFh4",
  "key35": "33nJbvZf1HEhxzDR6mmmrfssN96iRYdxxAfV4Z67TCwZxUuC2XViCZJzCmJsi4iDyLLZktTiE7Gwb81ZJ1XmkVrW",
  "key36": "2QYBcsrxipK1VpBQPku1rKNKHEyBt2h397YHHXTCtaifoZ2ZmbojfRKUSkWnmAxpguhhgga3Bdxz428r2u7RTHMu",
  "key37": "4pzpiBv8EWmpXCjMoMzrMj3ygv1GDnHDZnDrSKD5Uv1MmAJg7LFBhyVrRK5C6eqEkjgYUcZhxcq2C4exY2herbo9",
  "key38": "2ZJ5yfN9qGejetTDnYaDnUEtXB7UiqTFSceQPLQPGSjaeqkehoD6A2ge3TuGcVbdjgX8EFhpytwsfwNwEXntswXm",
  "key39": "57cw5qfDwaA2nH6SQjt92bXUqxgZPU7aq1utvZgEDxdkBKdYUxEMbnpFFkdyrpiCL4ANro6fU8wkNF6EkfRa4wdx",
  "key40": "4ihWMfCqWKjStLqGWsDRBNWzaiRz28KcujrDUXP789uBAnsJ7njjnLE4sNfEJmGHba9iePZF1g5b7ZJ2H2PM2WHK",
  "key41": "3UpEpwJADS8uvp57HVtbuogqnnC2M33qqryzPwzavqQbCa2C4bx7y7T54EHH4WGhpif1zp1QFE2i2cKXy8PGtePR",
  "key42": "5aD7iQff35z98fx5gpSwVSrjceEQbGq9TWKEzwbpRCJzQGgkhBKz4wgJP34rAGGG1pByMircoJLRELkAUGcPsm46",
  "key43": "qWKyShbjdXgNAwUV2Jkxi43xRR6JsqHLx3HS6pDA8tw6DMB6opjWXks7AkzfrGNwjnS2LngeK3X4Mx6wwZG8b2m",
  "key44": "5DGGXmsZX8QrKJ1iQ1nVe9ZybNfEdNRNMMH8tx8VFPho7wrPiBzy5NeaReyShZ9YtC2arTtX2bgZFZT3uT48mSh3",
  "key45": "5WnMdceRZVtvUGUKxnSkFyfMx8C3tceFtbMYJBaMXhGgk6mmb32zwCcsLTyGyxqdrHGrgpuYzsWAYoYuZks3r4Se",
  "key46": "5LyKkqXsq9ABtw88q92YzYyULfeNSrFeePTmLQ7LkjmzMEtxCoeBwZWJamuouy4MqRrnGFzMgDnuRVPgvTqjq2yA"
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
