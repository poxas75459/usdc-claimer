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
    "GQnkaRCheCUrfBeNandJPzcxQACbEETYDmwoHsFv5vpi2VA64S3jNBNYmzeDkApwAwZSx48qhSaaKS8asYeA1Xq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uGDggJUZgurFABuXh5eG8BA1BtUAcuuCrmS92qLwE3PA5CX1ZXrySE2SW12Fun8zkFHzwMUvmCdfmFt59pn3dBA",
  "key1": "4bUq8uXTvaqDjVHD5ZE21Dxq4haFFj36QNuD1pcx7RVhg2esHb5QLcTRREsQd4Fz1uQJmPxj8qSRKrmMgDDc7Nhs",
  "key2": "5t9vLCcPKSqXYA9V3iwfZensxfrGdz3Sm9xRseiPbuRx9Mxb8ayNpo7Q3x41jbTh4D51JgasVuEd8aJK6geypv2Q",
  "key3": "5uac7SDyVGxP2drsJEGd7dadatRoHn4RsxnsQEcRPjd2tXjo2LXhM2y2Lk5keviPP1aw7uA6YwYFVcNAKrYTnRfY",
  "key4": "2geiJHL89Jjis8Low24dvQ4BXW9j6ZhJiHTpMuaBJGKkFi3jtY1K81bEmxR8RTcCpQVsjm9aDPWKsTrHv7WxjcAG",
  "key5": "4U3YF4SD8ncYd8gw8oUPm1MC8RQ3MFrFUhn7gXrSNCVEfttrvXKx7Y36hc76S7NoV3n4RBY52yGG9wzX22rM1gca",
  "key6": "5bBU54ai32bx75vcZmoe7h3ZiZSPcX7YVqtkDTvXDmBbocXSdR9DJjC8ftft6RnsM4ZuWna23fUaZsyEbnTc1esM",
  "key7": "4ranRMifDqjtgSLNazZb5tiEp3PDh5W3Ak84y8qseqgyUqaTmow4muBxsZdK16ZDfKKUtTgf8E5ujb65rMNqTsdQ",
  "key8": "559jmdKkd22Phov4S4h2em1Jjwh2YjB4VfEtiLF2PtznybuCHCdDhxzGWPzVqEXJGVyLWecBGWDaNVNB46iREcyA",
  "key9": "4t7sfM4bQLFbTPhsSnJsiQq86GDC4APKdF4tnFQD8JP8ZRXDGbnxarWrevgSFkuESWc6jnc5G5WTpVRGR1L6tg6u",
  "key10": "2q576nNS3SSVUqrXWSdnBCdEaLqWJdYExseYhnNpC2bXmrvfNVCoyosTdPSPD6sk2Mq2jv4GGHZoVbrkW9d5f9kM",
  "key11": "4vxd5WC2nKhex1Nr1P1J2sxNURWZ6N96YEVVj3n43Gu7VEbcRHU6UkfXSaMuHRRK4p3KAdUTuo7ki2RmkwT3uNg8",
  "key12": "3HaD5veam48gHC2yKFBVpw41p2wzpSYSf2KUnkU5UknSoE6i6g7WZzm5tw2kfcKseSvtG3koY3ShGpVzHiEAMc1m",
  "key13": "3JYJQFEYsKHVyb9XvNx3uM2KEJcAThz5etmoD6G8cMSffsjpyDLURgeRgHPNaraZGY42YUBoqRL4i4NwTZaNUo5J",
  "key14": "4XUJfJ7UrYVS6PcmfMhNAM6rzxouT4u4ZZx5SXnsnnMMhMp7MTf4n3dYCq6M2dDo2Yu4PZ69VS33igDTyCmWV1tU",
  "key15": "3EJPucPyNwChj1hsgXAsgayPy8chWGuW7DN5p79CdjLyiTDN8T1BYHY19gffcriEqpJ2FUvQTskY1WyUhrDSjhXq",
  "key16": "2EzmxeBt178LK2twDGdBmVztg3vUD18kSkBP435gJW1RM9GUgnRknLvVt1mHzc8wJW3RM9SV98avdHnXENTV4m8K",
  "key17": "M1BFkDep8xkeZVXf3bTXJpUWs6iWoFrY4vGdVUbNYhBCajz53dpJYvDRASHWbqxooH2a1JWyWwdXwqEXg9A5RcZ",
  "key18": "DgxGW9GdLeG478vuwQBZnZY2G4duUa3Gwk9n6AHi7h9rkbvnRpiR1X6nMjETccQ6YP2QzPVRsjdBapR7eGppTjw",
  "key19": "5e6p9FKesYzTzCoTCnGs7AfgytagHh9kTegD8zou6J6iAA5UKsj78dgv3sJ8BwC8p2VE9j2n9wJ2VUQZ5ekWMXqH",
  "key20": "36PNb2UxpfTWkQiUphidebWXXc5xps9Vbz78NwsUSHUK6ashTQqY6kQszejWd6VVQpwgjPXtsarFZX3JmvTx8CBY",
  "key21": "4NDS3uRzJL3Yzg64afeYFDGmWBbSPEw2dw1svztdmY8SU2WVtiPJB41sLFzVyY2KyCqAJp4Vraj2YZLkxSc94VZY",
  "key22": "2jU8ZxQHqyb2Q5svRjmuH7oHu2Xvc1DZPKR9Vo6vPfcyjTFZ3x9iMjq77nyVWtPr6uXtcKvwKgodGATsGucw6KgK",
  "key23": "4g63ZHaqfcpE4JcZjcm95Qon86e9cTTX5EYhrVxrXPGZXdyRAgcaqxsbktgXdT19NZvVzRfVVVwVGd9fpZc8evgd",
  "key24": "3B7jD85fdS8JgH8WVpBjo2m3XA1iw33r79PUSQL1J7A3im3r9SfKH2EnnGdtJMFyhKy9zUGQU5FkFGzwc2qCkSqK",
  "key25": "4pURbTbnVmySQqQUtNDK8ApPDkYFQHwKF6Y3h3k1WTpYWHaSq8UCw6jUF6yiEH2C2ahEtCUDZnKdU8y7ZgKPGMga",
  "key26": "5RHXNKbooPAxLtnhKQ928ybCPAyU8Hf82rQYuEcXYRAv2TtcnL3ULSzszkqf6Ko1CAzebjQomBodTNEKQpdV5XEt",
  "key27": "RgPTffR4qSNUGceF4CzxScpcTpV6L8ibVmNku5wNoDriReT89CSGjZWHpXZqzkHB9N9dfp82mk9YXXVmR1vrX6b",
  "key28": "2fA4vL3kcwtcu1KTRabb9QsMgyFZu7C2xJB24pTsRHnXH78VU1PeztHBgYqUGq8K6LtozSs2n5Zm4gHQfLQbLqM9",
  "key29": "byXxQzQdYpc9M32hDHirntrRnqe3vVVCg7xKMLBcEVa2aBcSWhiWs3N9f38yEoPkp28xQswbtMj4KbeBoxJjCaz",
  "key30": "5dgX7uk3yvH12W6PLTTbJG9vA1it9WGVApynsbM2PLcsXoJJSPYrdNutreg5vfMDC91jJ2EcGZxv1rMGAormAUyn",
  "key31": "2kjwZ9EW6jmXN6ZgrUeS6vET2KYXdBVJKejRdVf1PWNmaAaruNnQxdKsKZyPBddWTRWGs5Fxhj2EjFJGkgHC4Tag",
  "key32": "5ACSJ7Wn1pmn6kxLqnTxVsvhrhryxNxs7NMdvPpKyv3dDJnTv3uVsgNKQrFS2MHFuPgGzPLqsWqXcG7aLKNsRVEV"
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
