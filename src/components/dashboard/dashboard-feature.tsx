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
    "3sXHCVYyqMHZL1o49z9ELYEQmiq4pWFV3TAzetpYJMwDFBYcPEeybsqhkiWeyk8m4RM5G29APXLmM8tKM3qc6CYj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TcituSZo8LMZdzhNkhanwAkqa2tiHMVSFrzPz6HTyKzVsyoFr9XqTCAAcaAADp1UE4d6dzvVXgFQ4G9KLENz4Ku",
  "key1": "3hgLnShy2Sey4HrMnoirj1uXSBrAC27CwZeYufCWqYfeZZgEdgVQ4VetukwL75PWUUVFAQNv6zzrz8MNi1TqZ2f7",
  "key2": "25HKG4sj7Jf3B5LSyjdySfNACVzN7JKcH1c8JrM1n4EgFUv6fKL3K4RGxHkoPCXaz2EZRzi7v3nbQiPjjmHWD9AN",
  "key3": "5irQYm1APD9FSsfLLDFL25uychntsbyGSyrbzxttmnNioTMN8wPCb7GWd5PbxpuexnqRyAv5KbsHARmd8SSh95YJ",
  "key4": "3sEN2duSfzrcN22nUHWBCdi4hAzCWewfoMJvxnjbFfSya5eLmU4rsX6ieAvJbbVFrtAyWoFNL4eCCA28Zk3AkGGX",
  "key5": "kuM8Cjw6N7XUvAiYFiyiPMGcritHquYELhsfGgKYmVk6zqGDDwXqqCffnLCNue3dGy1w3hwNiGkGuXimdiRwKUj",
  "key6": "49etNQ99nscSuPdJ6dmmVaM6nPDn41dFaZw3hzmYundABmsdaWFN6FFomQVT8yrLXaDwsb4ru47PT3u3byvxbGZq",
  "key7": "63iqBpkmJC2YUqSXvR8hsRAqYVMFQAeToRecHSW7eiu4q6L9tDWtoMUkYAayKo5teK8HjU2SHTK5zAqSAdsVNT8w",
  "key8": "3ueffru57EJ68fpemjA1YGpsaWZpyqSR6PDEkCGyCSR4zGwhcxVHXWwUvwEgYDXqaXYPvHXcffY34wCUkmn8oqKK",
  "key9": "32azu4wEjWibdFx6VokgDwkV6U9J7gooiXf6TqDU6XWHUf6WBEYQaXZtzbTqK3mHdUboCw3mXzEE5gdhr5CPB7A4",
  "key10": "4n3xkqA5XCJu59A7cN1voUE3UjnZETYZ5YJvBVM6rCqwbQ9PT5XyxnJyAZkdXQoA7sB2icatxrFQ2kZoutURx42x",
  "key11": "4cz8891vkeoiJhSK2Fj6K4Fz3btAyeuGeFRk6jPCuBD3uzmJ75i82t3GKC6bqpAgQrJQRALgUxaBRwMDTLNTj8ny",
  "key12": "3zorH7QFaj8qJcnqWPTQXiFGm5omgZzDR7S67pthzwVD6Vr62JZeVkLo3yGhfzpgRxFh3Mvw65BXG5698mMp8dJ3",
  "key13": "aKi2PJez95184YQeYWfercYKGTNdSUC1fWhCYXecHeoovbZx6ZHNeYDZ4rJG4Ua1MqChsfZzCWV2aXTMDYV4GbG",
  "key14": "3Eet8Htgjr4zPdSPiQ8xgrNJsRVqsZtQPeq8WJg46s3J7rNsiYJrKRtKkSzBZa3F23Xcw4wWEi2viNKcREo2M49q",
  "key15": "3FuwsAYAabG7kk5idUSF2xtijPc3o7ohzRBdXdLS5kWuA7wfkMYHBaheMs4YK8FcXyMLfy8oxGjgMQHjB7UcBsGX",
  "key16": "3NNgwC3Ee3jSJNJc3C2w6gg6nCNujd1sowkcWebipjp8ZaxU3oSFZWSjhHnUqNGseWGw9cXohnYXCQziVxps7HiL",
  "key17": "3NEa76ivkCxr6asJZDq7FfiP3R4H7ji1sWMLeEpfqqvvyiMH6dMFgKyq93xt1FqKKdG25Us3C3QEuyAabCHnpcFy",
  "key18": "2qT5HvYrLzoafy1Jmm26ZwjPWdZys4uajS9bsqB4LX2oQ6vtPNyiL345eKVEbE9Ls2pmk4UuRi7gvsd6KXMLTFwv",
  "key19": "39kDt55rqGXMJgVvprpQRE34chk2PGYpAKMBWHvhstJcdbDbQHYUVZyJB67YKmZEq7ZBKho8Z17y8SAGiw2buYc9",
  "key20": "3qkrQpah7vUSSh6YB44ZN6vgGCAJx2uE2b68QBNuGiaNosfk6if5WKP4xkCKSbuYkuThHoFgfQUE56ewCVg9jJpj",
  "key21": "2zrBMC72invNouaHd1gB84GYq6Pz4gKMYLgV6ZBgwCymdNR3hPBNemr3ubNx7kyXZWTFZwXbuLH7FGKWvzCmDbBw",
  "key22": "fxAT3wjychDgfMddRMsWe8k2D2uqsTfBww82Tfn3fDZS34nz5x1RoGjy3xGJ3QijdTaBQBG79SW3GWXX6z7VUwM",
  "key23": "2qrq2VryjsgTZhJa4VSZtW8ZBiYRGQS9Cwsn65qbWFivM3xVeztnCWp8sSKmYEVFLwg1hMRyJbHf7QuyH9RHGG71",
  "key24": "qvCaiTxe4RjhhVtwZcPSjYYeNCDiR91XNtei93hyTTAB8XmiQcBWpZ58z9FUptMDb84KGDNqTtApmYGa1G3ZQTP",
  "key25": "2BfvcSJFFPKcNMwXt2Npzn3LkDkbcwwUxNA1xTXcrinPYb3XJoM8dsU2Tr6cE1CQUeZoNMqZoRnxkMo74LYbmjAw",
  "key26": "54XPKsBRHsGsbDDBpBCTchDDCvcABNiKiDMN9A4bKnsjRyPXiNsKtk54UHLRDLQUyvWx88R7risnJkcfQ11xunKy",
  "key27": "4g3KZqsRsYjC23gBkUeCtNGywmnbZtAwk7dvR5SNSmRZ6JTdUu3hmz5CEJxU4iQHnz8C7vTpM5g638fRXydbXzd5",
  "key28": "qbFviiRiEdocKgw6wuwGEnE3Ysica7YvaKHysVeGdUZpQE5V7oijJoSu9E7nVyPJqYdowFq1gzDwbpAydZftcsK",
  "key29": "4fvoxVMngufZghaUuqQ2mB85kFkCK7LW8UyYWCSJjGJErJQwGEfuY2WWDXNJRqyKmXehURP38wVaexpwfJnFB9eZ",
  "key30": "58aGqniT4wZCR6LGkAVkaAJguvyrZLH81JZif76v61fEv8CgbNku6JCCGPL7yvzuHn8kng1pqsPDDr2f1AE8YiGE",
  "key31": "2nXxEELFKvJBpDxsaUtTyWUNWzLuespASRHwFHUhmeUTrjKaUuuT4p3NxwXrdbxSodvLhUCvwYbvkZh9PpWj1hhW"
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
