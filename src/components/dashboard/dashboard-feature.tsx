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
    "2na9NjJJ6UjGfvLXG388sMVFrNfGCfWT2Pts6rQS9KZqHvXXLoTk1CG9i6XDvdRW4ff4eemmhqz2Ck8U1qTwjqdg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DcYeiDFo2nEzTWGQrsuaGh1zzgyEyGhqX7KFHwYMhBemhexjG6ZD1KkaiCHCDx8fQjqsY2WEvknp2YRZDmoAxz4",
  "key1": "QkmqrUaiPHqhs3S5LR1MYdrQMFAM5VLTNasaMjut9M1W5N3T7FP9UmS64aqPK1WAitWhDCtLXtH682Z7AEqmrfx",
  "key2": "44rwZpVSi37y3TRnPJHeNCcspJDiLt9ccANJJtEkKUzeeXXA2fZ3oyupHJgDgaToZPLbS4pkAq55FCanon4jPdKy",
  "key3": "3yHEmsXEWMYdbXiBSCJmy1PHu7JWC7vQRS7YQiz2hZobJVvDcUxJBcw6grEDYMgKT1wawBnLnY4jAvuV9m7CaTiv",
  "key4": "bqSpSLbxXqZcLGmsyegJjbQEnHsEvuTKQpn7EXWNY5CFPh6Bgn2AxFHsQdbssmMTEhY4ZP8sPJg8dgfUpwsCyqJ",
  "key5": "8gcx5yWhHDkrHAWbRApZmotH6eJMv5PqpM7uz2wSo8A8XVfCC9gJPd88M27MfgrYNFdSTRMZTjEYyLicor9KjjV",
  "key6": "4vXS2AwaA4qQ1sbP4ruPhkoKmJbLA6tv6wnH5d6gQbLV84yWU4i2m5y3tQ4j9N9D4LeyYxNAZfCqUMrostawi7Va",
  "key7": "3EnVoCWyxX9mbhVegJ1v9bUdjHT1AzwmnyrHSCk4seczCEwhEdA4iUFPwPcwAaEnexg927oDimAEr53i5Fz5uD5u",
  "key8": "3d43MKBSQ4tDbVBxSG7qJGaHcVqgEGskxa4DwyLPvdEnAopE5fx5ANvvu8guq8f8hhtSNrTiuBAxETDtxAmuDaK7",
  "key9": "37QQBqs4gpLT4FbDB8vdH7UuuNdiiwvd9yRQoLzk3Q74HUQhYWv6NjGHbHUaSLSVWN64uwyn2HajsgbpEwcUgrPR",
  "key10": "5YZptx5o1NT5RzTS4ieCzo9rQAhgyU6nGavMTZwUhrNcfaG8JxJoRYB24uuG5uEZDTTKLjMY2NGPoyPGqi3yPcXw",
  "key11": "3ey6AewZCNMqx1AJ5b1rSuUxZdKjwNQNAjTaio96uRhE6ih3AZXUbRMrRs6mnhC93dke6oVdfTEqBTFdh5NCT5Ug",
  "key12": "5bQZnQCySuaFjMCixayyEXy4T3cMjhPFkzxgAiE8B8c3gixh5nWDvveYMmVEBYviKTm2wRTyJYsnh4S93RDEo2xq",
  "key13": "5unkPM28r9DUKnui1yPacA3fLj7kwjHg1QSuSEd7ycAqp24NrqwKQapkxdXGbmvQzUGYBiwYzYPhyMGDhQhpTLkv",
  "key14": "2ANAwsuswD24j834zG5cKRvo4vxXSFTAEEGcRDnFKyDQzA8cmnphD1UWRFjvRQr7kEyWFQdND2hXzGeb4CVi8P4q",
  "key15": "sGqt5wukkNZmKtSU7vCmNZ4Bj2ukPgfirQFknZybdDdo1Z4nP7SKmdeyeNptneSWxjyV43MvPzrcffFda8e1n34",
  "key16": "d5LyA8hQ9RWNLfVnDCY5tfJmNhJG78uVSz24NXnFSmaGntmJf6A3yhCZm1f66Roq4wtL8Cbn9hGrBmbqXCnnw3p",
  "key17": "3XsCJr1YNUe5yH3BtuZoTmPnsDzR41yt1d1z4MitFhqokPHXrQohygXRWXDBcSuqNkacTAqymWgxLcuoTKA4HqsY",
  "key18": "37v4aBeKWD6U9pAQPoargDn8UYfHWtQxVZrXE3TmraUqFELoooTPunoVnnbNogXgeEYuiu345EHXBxDAa3m1PSiP",
  "key19": "64GRTzEkM9EADcRXR86J5m8QbXmvXt9xJuaUJ1zNLiktdLCiCs5W1zvEoBG7zUguHsgpukBrgrPNSKYbYXVrveCw",
  "key20": "ebjTF87D6nkcEdEG1aqv8caBQ5wdjtBo9B76UnbmdZSRDTAhQLNv8HB6qiypbUenDUetophMp4CkuBhWdsWZfBx",
  "key21": "2YYYYidjxMhYGdSbqL1k1ehv2duBxNFRJHf1mR83KPxjSUWHhFdf25QJGXHXbUbwx9xK6ELDygJJbK8JNTk1Wnaf",
  "key22": "3EHoupEeYzZPCJVbybHRMCPvnyEE6wqQHRLfz2UW5E6sQADepMpwxF4ZDhMiFrZ6p1ZhA1yMP3ZmnzNuPAYLRnDY",
  "key23": "2eNqQ1vLxaiP1mgHoZ8UEtACpN3nxco8ed9N71wu7na4XKwkq7wiPynoHiogQpTKmNTskPB9KTroA7ahNmYkgWKx",
  "key24": "oazapeoK1apH2PREUaKvELXyhZ2upSS3sC4miSLjw6Uwh4ThiySwAy7ZqyoAydRokmm1bVQ75zmpwFuMGxXLtz2",
  "key25": "324mgB5q1VLERcaq6uhDudJw1bpPWtsTsGNr4pHREGLJCaPmENKfeUEh6CAdAZcQyvC1JBP1sw8kVTPV4LivsaeR",
  "key26": "56YzTpTbTqpCAkje63h22iw9A8yrujbp1TbA1ZLQgKinrWiG3ZqEVWDuJApbbjPTbvn13RL7WgbwtT7NZGy4MyNi",
  "key27": "4nBQh7dB84cDSaNPTLXjGiSXSTLirFdDL5RKvnHm7JtjCvvHeyLjnVEb8fWSEpEuMPmMGrhHAAbbHUMdakDFzZAa",
  "key28": "4KWGo2CTd858ue64QXRSDzmYHgmCS3HS3zntC3xDFyHXtVcdcfWBquCyHKtUVdXoe9v3DdAofxKSGweE99HBoDar",
  "key29": "K8V1B3FZSr2XTDTfwJwDyVwbkyxmNZTcao7TiMADxgNLn2EP7wMgozVUKNnFbjSeTkV7tL9XoiMgGyUTVZAPieK",
  "key30": "3yteVEXHuSS7TUSiRBYgW7fYZQRmbv4h38peQLQGKwvBjr4f52oFzYFggfTJ4LZf265Pt1iEK7UYZFQF4aXyennY",
  "key31": "5CEtkk1zzWzPoQ2387ZUJbziSjrVrJGUifTz2QgEDgowZgDNDZpSgPEtPqh5bp1NGuBr5SwZkxStyNuhv4RBEgcj",
  "key32": "4CNGZmLDreMaGKZb7HWbZiqHxtGmDsFAwsbf8vPdQWPkrMqa9mMsukbMVd7NZ7uNLkpnUe9oQibmfRgYYmQVc4W3",
  "key33": "5Yn7b4SwiFk8sXQi7fqe1GZmqxwXGHaRzomCLkLmAqAFCMu1HHWrQMC3B9qTXf6rCBS5zUXNchjHwWePLeAULEq",
  "key34": "4XXnpMV8rs6Y88Qz9NYnLLKgWnRwV2z7Zu963ebWKsysyJ2kbXMenAxrDfpRVPm24zWwew4nAfq9ZoVtyaW7naSn",
  "key35": "3r2M8rnAQwxSRuJda4ndZaWyivNxYvumbxzv2wfHpf6noni1NjjjZRuDu2VmSDdC4USYeRjqwPhxqvLdzkhFjAUV",
  "key36": "3vM8TGYeE2Q5RKpUR7Mfa5PSwxTWTUh2ShxevEnbQ4PNuB949DkMgor3x64HCFQr2ZmAsPkcEbKzstJrYEaYM8x5",
  "key37": "263tdtPoadoAwo52tzc7eMMCiyCWcPsXmZy42EreJxJGAc7LKeFRJhh15782gRNhEjYdJ2Y4zCEwW7A1jQRDGzjb"
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
