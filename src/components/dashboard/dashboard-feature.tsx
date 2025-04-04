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
    "5sJ12PztaW8P14UPi3MvQJQQckPCxBgnCxdyx3psZXPkoMmXr1SK57J71fiJ3cBsXT2CGvoK38mL3GjpVHpohSpE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TtukRAYpMDTUeRBayRBSHzByf5Aor6uuuAW6J33YhMkuTQ48P5qoiKknLaRarSXPSVfrdvpcyyPUCBD8xGg98mR",
  "key1": "4zVGV2q4j9Sk1pdGgd5gKmYRo2HKah3BeKhcBkCQ9TePLaqGVYq53wZZjVcBWvKMuA2KoSvREiSFmik1dPfcmcJm",
  "key2": "4d4foLUKfF1GjKA978Lj6d1kGBSAu1bY25GV3euoKBJyJhfpDJVYpjQgTDCTZk32QFjTPSQrCzNtpVzamSK9raYq",
  "key3": "QmP7pnmef1K9gTu1ZzdcNtBHUCyzYs4dkb5rKP8geKszmoH5FaeiFMRGD1z1wg7NPABJS93fQKtfzQbpWwJ6Zy9",
  "key4": "5RY1gcmRwp7TuT3QriHc7AyeHN3hyVnbSAYooMs7UQaPXnVZMnDUNetuWBJc1Rq1qMoHb4ZYDfwiH1zwtn5EuFjn",
  "key5": "3n7XKKU3xrmqJhkD5KfNMTv93PJvwh2yxtZRARFLheLSsKYhCJa3V19AM4QwiM3mw6hdW1oQN8M8mcZuo7ZscWet",
  "key6": "3BS1AMYWjSyYJSxRJVNr9C8NLdqHd9VQqKMicmD1tk745auUSm58auADts1WjfVAw5ktDv629PX2QCqFzeAc3qTP",
  "key7": "5riM7Pj4iGWvVgA3TX1Smzcg8nH9LU3eMtpbfkU78GkYyt6iyrwHbZJMrJkGgQLRxnTj8R2DpxRkWy1DBYgsNXra",
  "key8": "5VYPDWVZspofmBEBoqm5jTPDfEAEhLZJj11GD7Qms7zH9rbrJ3ir3zesz8P3AnN8ifHysWkqpNBgAP1NqSFaGP79",
  "key9": "4jytaaXh1X1HZseFJY23V5A463uQ3Jyq9qur2fAxn3h7ryTF4XncegPJxQonkPemUbgqEAbhNoaRXXjn1r7Avpek",
  "key10": "2wokHsJYryrwGSGMwGcBoddfmVE8bk4GHwGrHRaEVgD5Cf7J2mm6JspDqQQk8d3uWR6kehSMk7BpAQBPK1FtfgY",
  "key11": "3sXa64zeKbuCznhg1XPAWdj6rjdxK8RSaHnf393UVAShy8VrEjjHLsTcPpQTniNcnMPP9N2Dijo31jpruNvVMJHR",
  "key12": "3yn9uULX9atPRqcDJ9zy21rsWuChiiP5DtLHSypNsprkxitXcoHttYVxb1dWToQ2knotELDRxLusDXoHLG6n9oHN",
  "key13": "5TQs4BGZSoufGuCiMSpGHZdqjaUUC9cgKjTXfbxyyPa9XBuxMQ19GT1sVSvQXiK9QN2crkumwtYzPa4ds9zmJutH",
  "key14": "3Ah57FbVuvA22Xasmpcp3JhpnD1iP2UcgKTvbNxfB4mgr8jpmnf2Px912skp28LAGmiBAj97T5NFa3vT7Wjckfqm",
  "key15": "3B8spsV1KL7G8UHcNX3azeXpuX5VCRacSeNnwQ9NfcDcteA19tn1oWVP9r1F5n8ZK4WnjVzR7gWPAtsR99LpLN2H",
  "key16": "3rqwaSYke4mk12thj4PGDUKHWMSRWm7BaryoCPtBCV4dPw2e96n3Sa3Nkn4QHM9yrs1mM4J1AjQPKcu5RPzctDz1",
  "key17": "3DWyU5dSX3Jcvob6xGeRQV65qervYheuTCGQ5QiTbDpKNvHDD4RMmnT8M3dYk1J5HrNzt2D5xiKutLF5neRrubMK",
  "key18": "5Z337Ki5kH1h4BRrqvxCQuN3rKA24U1fVg4rEycZWTKA6zBrioxhQzoRZh7PANtW3s2r6U5kabgDD2hTCEi93RnU",
  "key19": "5R7wk1cYeYcwofGfU3qngxNnrN3KJYmepejEm511RWbLHywEMKfjmBPdBT1s9nXmtEgJDk5dirZitmYzKVD2fV1d",
  "key20": "3Yaa65xQXN5ULqYw5Gc2us2o2foAVKNiqkrY8j3jdk6hCPGp2Y774dXVmGES6GG6ciniNpRHgETZsezvdo7euPA2",
  "key21": "3Cx9Guuiwn3ScS1XCQTeyuX7tRounHaYk7b35zM7Kf63zUJvSkeGijinyqkSUa8tXc6pHxYRhiN2KMpqFdgMzPv",
  "key22": "4RFMkEBj7HcR4Ta4ncZpTCqyWKSprtzkTiDufEebN5A1gnTRsNvq6rWuSGQvkn6S95E64jrYc8BKvE7pu9E6tX9Z",
  "key23": "YsAzyV9hGDWH6u6RgqRw7sREh5LZ42LneCAUEVPtDFbJagYkKVHtMiXZd8QVzPVypsRtSJLu3LWXzWM6ddUaihJ",
  "key24": "5fibhKGaMr7fnqfhH1AV5iUpYRL4PL7iVXn2dK1pBx5ZYGCYRxJ3dKRH9nMUTSte2Q7LTgRit3U5QMbw1hLZho9v",
  "key25": "XfAa2gtChZHsR8dZae5YhBinvCUUx5xBf71zz1Fa1p4Rv5B1jpm7uhhDQpxDjzLNHAnuhQfbCva5uKtYkLSMYZC",
  "key26": "2HfSkBPP4WJisqBiXv8mmXgvSuDkyVBNCBLR417qYuVHAs3nYB3F8qmKeZjBJBFJdxNikFtBpw1MriWqLkYFkJA",
  "key27": "3aaJgaQJebBKh3R1BkvH6R3TUrprosqdo1jCV2zw2WAyrCkx4ctg3rtuErrnRA6ZQissXY45sdh8yCUB4gLTC3XV",
  "key28": "xH6uuXBc69uhWwJCj4oakpZL3Mt8cXByK8UFS4CaB7u5djN39vCLnH1NTsBp72fLkFHH7XyonQiTwyLDp6VyQKm",
  "key29": "5Zo1p23p7DvqqYSrGu5ms5iqcMW5DRJ5HZJyV8NMSQpadFPQLUV4Kat3SExjq9QRQgrHdyeMBChNSn6P1dyQ7a3H",
  "key30": "52VdgCaGcqjnPobyFNU3ECbpUyHkPPrdGR37Rsuo9aHN3HXqphzXBKLC4Puxs6v6pD8kjySbrNpVpNFSMtk8JMZx"
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
