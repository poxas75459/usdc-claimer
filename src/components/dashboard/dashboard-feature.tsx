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
    "2uGsLdmwoQWuLfY7932qCSd1C5561F5SZLrYBaK5dor5NRcWpKMLGRkRbmrLiuV9o9ridbCw7EktbyiwtS3YYtGA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "88xMfUVcwaxd9z8zQX6caEPUGqHZGQyjieDzgGjwG4vz4k6fsEmnzygF7Veh7EW8aZTkMmPpYGWERXitJcju5qM",
  "key1": "5kofPRudgbnTBuB1h8bzFMWWftdMnTWL4khFm3TqWUbaAXh9cX85pLY2LeughECrPzVwRjp8MLKSxh97yYDX7qFV",
  "key2": "3c72xBeqzLcmvjCJ5C8VWNMhPX8LGnxWRrHUtni9DpM5jUPFrhchFL2dPo1nSh9j3ZaVPr4aK3t4eEhVFxQFkQA6",
  "key3": "3TVxm73U85iCmy6yE6EDpqmBEaNg8Kw8LZobTTrBGAjBSbQr23GG2SMAFgWyzbDZqjwLFDD4AAuDcurosra5QYRN",
  "key4": "3ZctXHRznkumKoCFbDNqc1ZooDPF1mceycWuFvfedCzbJWZE4zTnzPSwGpT3FMQVDUNPHDLs6xU4hWQkM9w4Q8vy",
  "key5": "2yhLYFRtUeQm2aK3rfT9bmY8hwpqXimv34Ci4JZukfpkuncF41MDyYf72rgc8bzGVGczW9b39fhfFhfEwqDzcCFk",
  "key6": "3gRMzm9wC9kKLwMNLqWwxw5jM7QvSoqVbgAjaZkfGDXR5fCvD54gwrZy86rj2Cm7h8QxZVvBxfiTbgBqqauo8LC3",
  "key7": "mrieQpUaU6gXvx2H2s8V1rkd8K1uJzAAALQdWfkKWsoFCqFuFXRhqBZ1n61dWanPDJXz1o6HgPRyyviCLdMiJqT",
  "key8": "3GQ33D5jSBsuTLdMvjvSTbmmYSuPiKDi39NLuv7dw7Cn5XQkxsEkBQmq596kbsfBTuJX2WqhawUt7dZMNLnoLRwx",
  "key9": "qcE9eYgEyDLcoDXQTJxLsquAQGKfmkvwbiBn2zRMxavEcMW6rP4rcVYFf7t8EAg7m54m6sVCghiSqW1dnJ6LmKP",
  "key10": "5ZwA8vVZQfgATUSnXFraBWy2vmdimULeXzDeCQTcewV33cVvEj6fkZrF5xwt6Mvz4gDZyfkvYuJQgexMzwHVhRDe",
  "key11": "Qb18YMYhPvgh3CzMYW1vDgh5tg66VsEaAJos3oy8ugDBmLKmXrY4ke4qSdMWW9FTaqYJsPvokKKe9Kw5N1x2ySG",
  "key12": "5PVoMX6md9hHiNxafS7SQU8fmQVehgYCmqVzj6XuFpKT19VG3XpSfqVXsxuvyLiDk6ke9rypTJQ4D7sfabTARrr4",
  "key13": "5JQrjCQMUHotymVsuBw61THgjC4S3vqQLM9BS44B4UM1Bfwx7uQjFqZyi1dEFMEiJFB6eRvbzSdDb14q7jobVz4W",
  "key14": "rDimULBa4DauTjeziW6myXq67G3HN8rEyUgwDNAibJUQmwMfGY7UstkuT7y9GMqFZaMbfZg48Y1USihugFjWXof",
  "key15": "4Zhy2w54VPk9gpWGbQk6W9jmiEhTqKqVHkNAHVCvP9Zr4km5qwTJ1rSdzkp6kvh81gKZvtAMSo8Wiq5ctc2rnbGK",
  "key16": "5CVZ64MhToUAFx4H9bZgNfNwCqa3tdYETfoyFZxaGg2CmJdnVx7Wuq5B1BzfeZPo8y7Fv4rN3pWQGRFwAD6vevWb",
  "key17": "5ZHECxzYjXf9vwLeekGk3ySk8oJtimgA57BxLL6cJAXiS3uxqW3BLjs6RV9R2PWmFAzFazcCcUTPjcgXuTyX5sMa",
  "key18": "4yF52rYd6EnuzzUonDTSnm8J2K1T7VvstQ4pANyWTRSg1rhfDeUN7Gn9isECLJTCeUYdyih14CqKGC8RJ9S7P2QL",
  "key19": "X8qhHjU1Ff7VfRjZ1MDmtF4TfJGf4ikFBCrrS2MiQptmdPkmC2TmRZwoRqBjBJEBhXzHmu28v9XFx2WDsd5ujcR",
  "key20": "37L7nwDiZ8WsvYrGP5GdG9ZL7GGTLLcqjWy1rqbCYDJ9a3keijSCBrZvtCu1w97tx86FzUuuWiXhc6s6myVAHNEa",
  "key21": "2fXcXKFAtAGUWoA6xLb592oArwBBMVNGSVL2gaygAwciSMxvj2nJ3vvtsrZCD1aVvUMwJbj9t9WqANiJ9hEGfUkM",
  "key22": "5XQmKEHey5fzCZ7TziL9abbzL6PvAqvkjbMmQJ4LmzA5NAr6dUzjMq7HLZiTuBmT2MzTVGvdoV8WxvUiBmVPuN2M",
  "key23": "3JPomidMdNwfEgddBSo2imdoX94SfHgqtY9q4ZWe1tGrra79aMYnAySSAuLcRdeDRx9AavQrWqBdQUVr9Go5FV6D",
  "key24": "2TnEfn3gEUn4GzHfQDMqVPhBKdByxuTJTYue4ciXcw9pmP3sxZj34k5ZrdXofi85hrchbYK1osLfVMnDSrQYHPNL",
  "key25": "7QqS76KXN2wzjfQ3wXhWU8Bbv2Wkh51KGvHhoNuez1HrxCNSXfsFo25MKJb129z4e4PPS4HLxHgS1kgJvDVLrBV",
  "key26": "3SBt21TYeQSNVUehJzibqwew5aZdaz29xAZvHzuzpv4NJk1UomF4XpegqruiKkrEZ7oJmCG2hdYBSwqxP36G3uz7",
  "key27": "4gcoMJGxn6scfeAgc3RvUT9M1J5AH1SBHrR3cK3esSg5WnUUCrnAUae3Xdkcukrh9eqAMpFAmr6exsvveUmgfZT1",
  "key28": "4RKeFhPA3eJjVeca2Emap7Zexb9y1m15xhFyiXMytMgSTPFjGyTCZnpXyLT3qhB3WR7h2th4W1EV8ZMmUQ8h73Yc",
  "key29": "551si9R9LHvG1L6QvxYZ6MkK8eWUpJnGQvnwWGEDsjyx6FwpJy67zLTMEdBs2sVjp7zKFaDYPwre8RhccAGac144",
  "key30": "mUkgZWiwhtgNuhc7na8XCex3YStLCEFis3Z6Zjy8u9xHVVT2AkYDsPBMJ2rxq99WbqsWbZm9i9QkHa27FKcFVZ5",
  "key31": "52My85wcH2t8uHSwEP1MRoggf4qABqUR3n9HetgbP3Rr5q14dMkdJaWwMhYz4sBaKaum7UW5k8aB1ikNLryAnCu9",
  "key32": "5AJ2FtYu3wd8fdRfNhVa8w5RYg3PB77b64GmhqkNGuXB2RyUnuRH4g3xuTR5ejgcK5A7rNJa8RxHgTJDmHPeYq4N",
  "key33": "2C7KXXvx87EKdnn6qc3AUFAM2tKN2W7RrJLyCbhS4AcWfkexCz283HQW5bnhp9yrTimQ9VRmRqdarqNnyzB6GFnJ",
  "key34": "hdrMyMzog2utdgRoyjeQte19SgnhUDWBjG8pwfU7YcQHy1hh9z7d8JvCcJgyfDTfiwWt5SLrtqzRYQTCDnhrpKJ",
  "key35": "3F4ayrBXfYuF1X9QoaZ2UgFZfAj1hzvRsW2KWTLz6ChPzKrbyZ82GDQRtKmqRLoxnKD84NpSU4WEYxh6R3qY4NCg",
  "key36": "4zkZHsgJfFcdj2iF2S2kEmzE3L69tKqqy2GpMKTtzjSSo4SNfdEaguDQyNfiXS3bHp8YLhrV7oDESUjWosHYiZoP",
  "key37": "3Xz2Z7UPKpN9ZCARaRnnR3KvCjTgAfDZkNNDBSrfiwcK3JHmBejra2ASTF79R93VwYsocxf921wzRktqEnCwnEHQ",
  "key38": "sTtCzCsm4FtcMhRbRNJr27yAo8dVGxY8TKqhSkLndGjXoJWYaz7fFSsaaAv8mQX1JM8M2Rs45aBLmwXWVE7Tisk",
  "key39": "52yTbUteWvAUKWmpqLEVGoBMWKuSmo9tW3afBF7n76LshqK3ZtzWFHx4St3BUqKuHr3zjs2HENMaem7nBNCHi1MX",
  "key40": "4tUsEapgRwyjDYygV2Lxcr9WhbtJRY8x3WjYpdpH2WRCVhesRyetAcTA8zWJWnHgQKFE1rKsfwkDNTQp4jh1BYrx",
  "key41": "2m6A34ZkxVV4MSy63YfcTJF3eBUortgGD1ugztS6FtbphjgEm5ezE7TRyJAXSevmUzMCPrDHFA8dW2H8knaajk6m",
  "key42": "4Sr4krjg4kiXSULS2Q8Zx8Mq4JTGJiRhuYSRBt3wCADLwDkCDZPNXbmN7rsoGmPfkWwRRhD4ZFWZvJcERfmE6nv4",
  "key43": "2zMrns4wnbcNpudvX3dYaw9ePfHwVHcTLum4su9H472bJN7d38SNx2YoKMTTFGHHsjDvt4GdUyjEHFE13upiJkgU",
  "key44": "5dUmgsCtVXyfAXxa1vxUSBc7CDphUHm4TFBuZenqNxDomAmh9B1YMXFFdZXdVqRKhXWdz7ceMvgpqKGoRC9jjmrw",
  "key45": "4pPTbEN28oVfAqgdq4rdSMUmYmTjbwFUM82xwR9sAL2XYz6yddaafgUhNv4jxrraUng6gAYznLH9sRQAn76MW4kq",
  "key46": "5Ksb8CEqVMFJbyJE6vG1y4bubsULnTFtsinLerXKdH94qmj2ACFeZHwC6g4yQx85WygCKkxxGkr2nvbuJ2uTuL8B",
  "key47": "5Q3UUoKyxmGNYobKsbicd1y1n4zfnc7kEFCprXvX3bE7Es6LqE8TqpfHPboNk1dzp5cZig11yQabX7AcUsrfhreL",
  "key48": "2TBTBRWtewEvLRApfutJipoMxyQWBZoom73xxdP6WU29zxutG3ZBcQGKToHotEYcSv1PbDkqWoa11SPH7VbLBJVP",
  "key49": "5WCoeXqt3GVQo1o9GUp1NsuGNvvmgSSRwRnqHXKYtR7NMePoQqAtuehPir77EAg4jmcs6g1CHTLCQa66ngYxQfVi"
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
