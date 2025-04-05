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
    "63YzQJLhH6jNa9UUSzFi5qY1K7fD8iXkR7sG8BrkAAkzAcLW8cJftvpYfMDVsUSSmiWUX2ZAmjas4B67gdEeEPUs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uwoCfnWEZtP1LTzXh4ADisToJ8fNDqSQJjUoiNg7QT3y56UE37MCoCtX8GZgQeBcon2WExsV48w94LtdcC7UDWM",
  "key1": "XtL1YYVAbnjJCykNuEeKkboxJes3p2xgqQusY7sHjt4Ldy6QpESrtPqkpV9b8ecqChtfaM4sjGrqLfSso7V2Df6",
  "key2": "3Ss6nYkvF7RuPBmy1virnkWMJDa4tx52VPQQgjiTfWG3ChUkntbXVE4erduqgRnLTzzVxfoDsinHSvtRLzJYBWm4",
  "key3": "28PKRT5wRfxHCT9kqJYeC7p43Zmabt6434eepBHd2JMpeEfK17RLDuQzXk4mgjoetcSmweYYKiw5Z3yEtCi4trqe",
  "key4": "25aknKUKs3EGEHb5Mkmu1KwBLf6GatNrbRsTPayLxTuPe2TbNnwJs9JTvZCXQETPrd5vWaSuqdQpZX2WiYm4iU5k",
  "key5": "3mrVg7MrC23KDXige6qzopPcsfkzUPLjPnEncwy7J2QtnLz4uureNb9vBSHMMAMq5SznaM1Xm5zrxC74XPZ1jz1b",
  "key6": "5MWxjkyhY2L7KbViAYaiHGtAv2GtZ27XuZBhFK7tZQ1GXaLC2pgh2Muhvx6nAfdgtdqqTvqSNVHeA95DP8ojLbHZ",
  "key7": "563M5kE1U9R368x24fQFYyMHUcZtjL7oJyyQDKEhedfqPPBXjotPod3zVrSggUso9hoeDBLL5Lkk8sJ37NDyzwzn",
  "key8": "4aKvYA8Zpa2RAxaxu62Vh8eVN8LbhDQ9L8MrPDN2R1kpaSFk6Lytrzq1taaNaJcTTtczpN1iyRRxcZ8N6M7ErEf7",
  "key9": "hhca6wzssAt9S2TcHvok8aZSQC5SYrGZhrCQh5BY22iMwSKjvS1syGVV8YrYCxxs1k4h3uMQHVkEzd8XJ54gDiJ",
  "key10": "U6XEycyd4nDbtHBSTJux8JRyHUGuSButRWVMhGQFfon3BfGhLfWuF24wYF8UB2UacYwuJ4BWmy5QtUsMEpVBqhq",
  "key11": "21YALEyFcLTkQua91W6sUzh1bpcBzgGiDWuJwGYRjaoA1bKF5qTRHfmdTSvxPykaR8FL8PYhTdFfKUT2J1wG9wZ4",
  "key12": "4hCavhY7MEf4UhLLmpuh92djeHqLeuB3mihCQJr4fAbFJsAXpK9EGFaM5AiMRfsqcnqbRTFsZW2VgajTdFkpWYAU",
  "key13": "3WZjDUgivRTqMqhuTRDh6SAG3XUm9eDaPC4ZRFpZbZEzQgqqVhJ5sQKWxpBYYorVgSDb1XQ6eDZxHJkFwniBB2uL",
  "key14": "5ZJa3R2QZGeFG3gajYtpri26mZV3Vz3qgDPP38srZL6i8Lz3sh3ztkh9QPUUmxqdD82qHzBR5H9yYqcHZajvVWBK",
  "key15": "2CJf9ksPo2k5sakYSWz69d627mYR4S8XSj995iRbGhGtdDbFYhN1Wh11nAKw6AVF8MEtkaTyWXaEvPJ31UfpdyRr",
  "key16": "2g3DsKXfB1vPjybfBLyjTBy5BmhFMGzP9gEGcShZ1gc1xEu3AWMCZYLetNhwDZh9PUo8La8BUFTYqxmsNSM2p5Zd",
  "key17": "4vQU4PCrFBgMHUhogQMK5XcgQoAGVeqbDVaMoaoyYEyyx6dd32wU3e5M3cydGCoU3EYY9qjzKdWS726mgeys9DB1",
  "key18": "2p5JoYBWRzokvzesSiYGsccrfxxoFsQN7YJWk7ekPCPgKJu3RqSDDPdqUcmZU6KdZ7xfprKe86ZeSaECEru4dFeU",
  "key19": "5A1K1qFGYZzSb5isVAsikBhsQoSVp6HJrTNykwCGF6fAgrtGdpQmzZu49Cqjw3UsS3UXXNZDmpwQEJgWdbpJ1X5L",
  "key20": "4VEM3qtmcdipYBUnu4oi4J1pKN5Mzsfoea6Swq7RNDtiNwTSe76n3PznqYT8EGpkxARTaZV5G9cwzELdZ3dqWJZq",
  "key21": "3qfupEwRsWPETm8KBJUDTQD7vQYLDp64cTNU1H5wuEopsVHNRNXy8yK1SyfBQnw2SjFA5ERmSWT1X6nPSHNn1LCL",
  "key22": "4RvxXZrj2peX73xkRXJwN8fXpTC9dn47YxxZ5tVvDfg17UxVKw31QLSgckXU9uuw2eT4dHMhvUSn6YmsUbktxANg",
  "key23": "59kAcsZVhMYFthWCFcqPcycy6rForveqBPcDri33Bz2rfehJVEg7Un2ibmuE3AKPxubTpAW1PPdajVsnf4GRrxos",
  "key24": "3mT1gW6jx6JPDhRy4K3TjVCm7TaM2QkANVHE2Mvs523ezi2Zgp23ypWorihdiomzjfwdMjUbbs3qn7Vh7fGVuwkf",
  "key25": "2avvsLz1VqhJKVehs4afuCp2k2E4YvxoAXtg71JWZUBmFWzRYo5jYBYbN4opyYSfoiS4d6AwuhiDd2e8X9LjX3sF",
  "key26": "56nFQY6AWA3HvAnr6SUfZY7BVcLobCB65aMmEGSXpxhvCA9BitRjJEiVdFT5e4AfXVZXitfs3Dy93iKD8CRFLT6G",
  "key27": "mkocDYiKHT5VXLhY4URCdQc5WvkzjsZeUKjmcBrcEjuPetKi6M6u4LEVConWYHrEMuE21JGKhEWUp1PQvdQDyL5",
  "key28": "3LjQhvQRZDwyBC6ej2KZoVeBxu4oz8saMG6RVuEdLgCKapBmFgYQjuZc1gybh7TKFVe7uviD7uSSCMd8o33pgN78",
  "key29": "L31Mza5u1RhZJvyuhRtdRDeNiS6oisEW6WRenPBtQnQAarMJSUR9gGTPj1PYEKth8DPq1w1xufQFkpoLmmKLcer",
  "key30": "bKg52VjTAUX7n9Y6zXBk1uknKRjFmSeFGwf8p9aAeaUxQmCnfbQL5a63ATjpddXSW7tPP2jnefBwqueNkp83aSA",
  "key31": "55MRecaWNA6iecLAaRTu1KQJEkjG55STWBKm5TWqpPPgTEkA5ByVWGx8iiEQmzrqe1Gg9bUQF5YH2he1YWtKpR34",
  "key32": "4GbtMEanr4RzQpSETpsshhKTmrpuDbiTqJizpnAZ4m9GSffijttJwCP4GsptnjCsHhByVLYXa1XXEdX5NuJ5VsvV",
  "key33": "285jq7aFaCiwbSa2GUJ4ErRHU6o3VcbT5WP2C7zUiU3VpJSPY59pERp1zzwrZPFUdeCHwhUUEQSSiGx4VCzhB5Hd",
  "key34": "5ZXfSsgRCDXAZhRXDpCBHL6PU8MSHHNhj9PnMmN3Z7htH1KAhVwxxYqWjFaEh87MgZDZijsKC6jHi2RSwbr98gNM",
  "key35": "3gfUfqGo45sbextQdCXbbkgKGgKpM2AC6Csz9hQuvjQGJWGMKuh37BUisGcTNyGiUrgnjwdHFRN4hZUaFVWbezX8",
  "key36": "5VEwS8iYHrJZfo76xz8pNtyopUp4Wxss1SEicCjGh6TAvhJzDz4MkYuAPYQKWWhQzzrYXcashxi7V33JV4oHpQga",
  "key37": "hhFm86Yq7G9nrRqJbfHXZv6ZF19cntkUkgMb8q8t57CgbMuXL3B29jDqrc3BrTmW8G5WVGArBoDeXZteDAuWq6Y",
  "key38": "3s1YrTQKuBfUW3m9FgZHgnxjabNx4NGKVYM2Rn1eACG1LcXsTWGY9aUoPLbHytjVNSscsAzDHcBJm2qVteqX1Fep",
  "key39": "3VeVNhHc6XWKxVEAYQM3HP9AQmzEv71U9jJBg5AvHH7WDsAKNYQgYhJPjBpY2Hwb1Nckyrsaxy4ZwTwW2zEGzPma",
  "key40": "5Tz9X6Z4di3PbjtA1d2FDLra7QJ7qPUSVhJg7THK5DNg2djKRYQm4TSREdvRdtFNupYzBu7fxkzxXseiDmYrR4nB",
  "key41": "5gnQrnHPNp9ZqyeGWbWehfS3KG5hYQHbe79GiXZM4M7FMuvtJr8FkhYztcXdpYeVPgfqNEwPZtfzcZBdx72jjHme"
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
