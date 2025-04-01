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
    "4KXT5ZXxH5UnP4eAphoKWoQmPPu8r84sawppes36WuntKoNJuXy6W87sXkUrSnNxacShMo5QymT8zuc5Ume3jFkG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MqkHASQR5k4GL3nAUrrhhUZRgWooPanE3EmzRRefdLXspDbmgZGuArzY1wVQEEMUMWWiDtGmg1Ggf1DdorJwY74",
  "key1": "2UgqKPbFup1k3bAYEsXdGHGnxu4C1p6Vf6AD4gkXtYxnjz8DPbeKEZYcoWxtfBJB3zzoZDVjXpJWVx8qCoLSEZrX",
  "key2": "3LkpRMypN7PmKzVrdGMhDQUp6r551HM6HFahuaW5uCZnHA1kWT9vr5LJHvB4nJ1dsrzj32fKSyXLYJebnzXsVXoY",
  "key3": "p7N4tBtUAUuHcrcNWAhLFNSJM88XzL5H6AYMEdP7FmsPtDDDzXnJ1SnfxFd21EYYTqRE7SUmArYbfFzpqoTwtdx",
  "key4": "21VBRcRMiKo6cYvFpZXNzHwgYVhX5qnrdyAYC2ALX6aAPKaEKhfwtTWjqKb5N46Yg35RA7PFvMWfGmCPnLgNhLTa",
  "key5": "5Wh6ND2TBnLjYthbf9YPtUM3egn8rZJdBt2k3vWLH4in6BXEDY57UwERpE6oE2MhnKmPTtSQ6XU6fwKFeUTHBCy9",
  "key6": "3jyyqLiL2GBuz4AtwvKSbBRPAnphvAC7E8hsArjVSVypdZeh9JfVTtyFFNkJg46hjqAxVcErYLwpfwuSfKMr5ggD",
  "key7": "bMoHpJoebjyYhT4xB3BMVWbcCwBDp4Y1n2HNmRd7faYFDPK5VzHYH79Tx5HRiLyG6fAy8UZuKvpy4nVsBnzbk7E",
  "key8": "2VUMbyBgWjhdDFGgPTDMati7ofkQfFss7ZyhUAS6guGpPebhCj5EsgQBtEwXbKSx7pA4CimoCCEVDf1kn32KRGRb",
  "key9": "49GiKSPhD1T7sQ27aEMyDUgmHmf4pUt9pQYRXcVqecwgbB838AfAQExHkTT1B8rXiP8Y9pTitFUD6TA52BSfAFkW",
  "key10": "4bpa4ZR7fPJvFUYo1ZxyLLT61Qic8HaxUAMhkV2JpFMCzDReNcrcsBRwvxzdeifdjDBymk5vQCJeXQcsCGgz4FWe",
  "key11": "5dAmsDUeKq2W4vWK1zPBk8GaoKkSW1nzf1F2297875Y8sVLQQRfhrEkhfiGRp4gaRPPv4Ly35t1qc2j3Dz4ituXe",
  "key12": "45bDcovjEGTzmdEFvnyZ6e8ky212SM2EbdGXNs8bG92KkDr26RJeJ5hnoiKiWAaS9irRARzYcvMzN4niLExxNsAM",
  "key13": "4ctCpTozmTWB2NAJBQGnsXnHts2g7gZHbgjAEkpHmwHUPJ4LYe6SqMaLmFuVaUJjor3EX1ZP7UPQF6RfhcYxaHAF",
  "key14": "5uBXKaTb9LaqFTMt85SNytEhvUj9e1fQjxiKM8uy7sDoc2k83ZwjZ6FtSQUfNMJ3pBSWjSRvfNdVf5oQQrg6fG2G",
  "key15": "crmnXMpNRjdT41sGXRLqugrPB9eQWjZPJLvyyxWZCi1tbPyTkPzf9f8ffQt7Z3TaPVwASxD4LhmHSfc65nUVsDW",
  "key16": "5M6bpDaAgWBfbiUC8n1C7hVXgnoSpoCemhb2uNxfxHrtrBcDV2XiAKDYHo9QeuUd2zGAufCsnxtrVy9EkfTTMnCh",
  "key17": "4jaEcvGqv7ws8U6JGL5n8E32ReVCBVjQQuF4p4FvbdJ7pRS8nsWwwz7h5bG6GGEfQRBg66PG2BMLSbRviRF9xJsi",
  "key18": "nvZQbqDuheWuHmwYs3uQXjSa3svia8kAEQgDj3jHJHtxWQWRvneadZFq4Ca5pL8yc5HmLVaxM2BgM8NtxBno5ez",
  "key19": "51Qtxw7W4KVd9Ffu8gogiUibeHsP15gAqT3ehKxniPJJt4jVNPSMd4oLgRQJnCMEQCymQ9c3SryRXe8xhHofJ2Zz",
  "key20": "3woDf3qHzb8GV1obu3eJfooNcrcQJ1dUaCM95AwLfMALcRyaADXPdTEWCWUJuGnEgTwcmcWc7osw8GqYPAwCh9Te",
  "key21": "47trddbuhSTxpFEuZQ16HbkRijx1x7JEfndqHrURgwPAARNPcLnBjbRm1ABY8Y788GqnvnMuvoFc33HP4qgV1Wd3",
  "key22": "HjW4KdpXZ8jsx6jFCRqDPWXzdChiiors8EEuKuskaohZv8XsQbFsYUwKMLgAFNKS6tya6LKxzdSu23xiEduafAP",
  "key23": "9UYB5SpzX5fKBTbZfdd9SsizU2k2u3ACwAkRAM6yRJsE5y42QUxqGCM7Zzqt6M4wYPy846dSjhyPZ1Tnv5GzpDk",
  "key24": "5kPoAzYnQSR3pq616fDjXcYq1a2hMRbsMbLNSwH8xVDkSKJYTDkwe7mpu4PSQ92sifypboJom33VMCWnjyAEr6Zm",
  "key25": "2FG3F8RhX5PNffkuB6UGnWpsUqRXjJu5e7SC5Noshme64EyQcLY2uGZNpvNf63PddgXuYbpMEP4GSCQRYuUDM76i",
  "key26": "5DyTQQGMgftRsCtAUz8NTEDHRQp355a37FuSAEjcfp3db2g2KXZqkU4Diam3VJZFzMtG94KE3tJBW1V4pacrmgEK",
  "key27": "4hyDtrQUNiUWtdWYsLxktgZRokSaAAwjRL83P8DiECvajK3FeKp4W6AQhWMKGE3zGuPagPnB7CAmbND2iVjKdrcN",
  "key28": "4NNkxAYtRJjfiMkr9C6S3sdKPD5pXV3LnA9Y8jvzpUvQEAonH67jnSmxSGHpqAmoj1SqXHW8yyJsWxhVzJxjLWxh",
  "key29": "PdEe5NyMc1EvPiSJXu2a1EJiQnLdwuQwHrHgbPZ9bsCsXh4XsZDfbSvcCprNwoJXtg1C1eWdD4cRafg41dNfHwu",
  "key30": "57NFEGwoj3ujja6PLckfGb76xLgawqpNCz7r4JaoNgNARYafHRvFcXhU23RCr2bH3aQYSYmNhNRbtPAYwCFLK7pm",
  "key31": "dqVHakifUCWne4iBgfJaM9mdieGAgycr4vE3H1txK6MWCDxn2XJyfEF5qbmPhnx9hcp2hpE4aQ3Hii7iVYwDoYg",
  "key32": "v4Uo72YkpXLeMqy2VM2riJGTdcTgr1tZNT8KstuVCU96ZGEna2n2R42uH3D3qfD8kKhBckKr6Pe6jxAVPcCbnvv",
  "key33": "2xgdZNJNwXPt1mA6ZMmB1xT7UgrqJpmnk1SqcFYk3bAuPpTe6Lt9Fns4x73n2ZFQDmR6yqdL7fowvELw9h9pYi6b",
  "key34": "4Zi7LrG15jjPfBFF2A4tQPWxrUDRp7CipdWUuJ5nKdY5GeUqP6ivW3WFzh9hiiivfcNbmwX379uqJtiSov8Aprn",
  "key35": "21rLVoUSdYKoWjfk1Z2yg2xp6jzTjuXcWsE6xeQNBTkYZ4a15PFwySsaTyh1s5JFHfCBQVfDehzQU84JLq1Boevu",
  "key36": "D5AAnaEj1wn9u1h1oSHYDuxK7erVZM63JdEH3MmCUybjUpTpUNF5VHiur2QoRavHgKVRxedQVnKtVoxnCqdPfyt",
  "key37": "XkPjhs77Wcy3V6Tw2p3baAyrq58Z641mPW3MnaaJZVNx2YHBMDqfogL8m5RtrGKaYAoWMVwaf9AvVRH63S6M7iW",
  "key38": "4Hh6gBSRcwfCvnreoLsUMDhUuuSSDRVaLwrUZBgCAvNeQd7zGtxxBM7qVw3WBfxw2BvCxqJybC5LJS8RD6HDRUJ1"
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
