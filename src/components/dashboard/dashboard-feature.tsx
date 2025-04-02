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
    "QxRMoYEBrTXwvAPNLtxfC2kxDygw5UrbsM9dkLN9FTz94U6qhaXugdr1sBz7DSvJGHCJpXusep84txXPwFSPzKc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ege6R3bMggubLmu66gkVUp8r3QDetktmcKhBk4MYtzSj69rMEEv6iCeat81QMw3y2ZFXtEDRXX1UVsvYHbNQv2g",
  "key1": "2suxHGToG5afXbtbmCgATrdbDNkcf4A9wxnipxg9j7he7Xs8Hxasi6tJQmcQqghykPWnwbZAUBEMq1v7VFmqbjcx",
  "key2": "RfiH81Ar74UUhAnacFgfbcLH6kRDwQHBwKe2uMbfhRy3tpoVKtuaqmP6Dp26Xwroy9DcffRBENmsjjjz9ar9Cy3",
  "key3": "4j7B7vjP7TaUbJDWPqqXEoE8bhmPn7E5APTDBB8db7Ukm7U8X23nmgnF7AchtnjsceDbdyghkB7DRHDwkCpb4k6Z",
  "key4": "4QL2mnybkJFdg9CuwL2ftWjrc3KV93CUaPZ7yEkngADSqLWbdPswRtK6Jr8KTMYARVBGTbxuFLcxVS1xxy7LZFhG",
  "key5": "3aY9s3qokLh5PvsueyahQhAZsKt18XbLtuhVZMMc2UkoTqA9224g4htUfTHgMnmrURuPKHaun28HDVdfv5Dq75th",
  "key6": "5DkLqkXq39ktVS8TuciTtB9R2rzffi2e3ACVmWv89QFmMYRqdQRpCUtjE2UvGXLHt7FpiqfxLCdTyCioLHsEu76k",
  "key7": "4sDAr3q6y2w3ZKF89CmJBfT25LbPZ82Fzz4qAF8mzb3tSfxhJ8uoJUCZtw9DEa7T2FiKB5uvXCVCmMFmACSePGCM",
  "key8": "5tt8ZTb57MvBGsidNNXv9nJJyceH9f9FA3PU7tuQoCahq4X435uAhhNEGW1YW3gBUaGKAika9bU7EmQsGfJM48ZY",
  "key9": "5y3dpYiB3Wxz8VZbJcQTPDQyxLjzPau3j2GjuLQAby3p9H3yK5AMouT79xXKaJyAenxuXuhZeck9TtZUrcvfcWwJ",
  "key10": "4qxnh7fwzr8JKvk9oa3FP5gnZYTSWX9GioA65BC4dPGGbG58oDnCaEgTqn5dxXx4kHj3JvYYfLXLYgC7MDp57k4Q",
  "key11": "23dn93FKMLRSyEABZYG1c6XYetS3jVaV3pvQeZsSs5YHUcfevHjHZPaCSFjmcZ9xwaWBRLDpE7fitr4WHLkVAakw",
  "key12": "5ipaueQYDLxp79apxgcood1nbxTfJBa2tDq9FsEPYeYSWunoxSZC4fP1vJBV1haWBsqCnGD9KPXmg853fj4hhfAQ",
  "key13": "GJvwTMRUaaBGDGX8P4D3guMkq3tdzG2zwMaWdZ2tFDks1vATSjb6RUXScsujwK7NxebfnLvNgucowxgndeZ6H4c",
  "key14": "3GFW1zWy4bBcCRhKh4JA2bSr4QKAumYWqsrHWPHUud3AxCGDo1uwXpNAMmKET2rWEixNDPBT1nXePZvBDJEJBvaZ",
  "key15": "4jb9uQ56rikq1F5SSRvVRp86XZy4uNvhNATjbFE55ma14WDd9hMsHrdZ4Tq4xksYVJSkyfmz5Xz9CHVSQgjqeqy1",
  "key16": "4YsBsNz6H2n2sCdCe9tW6XqGHzm7ZYdL9EFTbiokJvdF71X6PrDhNkeZN9Pkfd7sbEGQVhow3kDL4LEooaC7Jeca",
  "key17": "2UsccddAefjgguAwhFszo4Y114hsNygsDE22ZEfHMW2ZKjX9CfdZ8XKgbnkQ9Lev5GPgHbe7V4epu2kie9ppadAY",
  "key18": "UXqkRDRjqVqS66Cc6bBJWfMHccKfdjS1zCJZXsjmQy1w7g9faYZzjCUjDatp6pLFLZtdgGDyioZW21V6xnCBKag",
  "key19": "3dZZuL1CDhQtbcqyJ8w51HWcTnDQy7H2roxQUjXFcNQJjGo14RWDjwert3Br6VUxUN1hJ9PrVDV6hLUux61VKAbP",
  "key20": "4GqYMSEnjRjPEffhaXMq3MBGqkxoCpwM1xQSDM6zJSjGDkYCDt3XA7gSjv6NWoGc6W5KvnamcWbCaCC1zebG8QHw",
  "key21": "5HDNAnWdrDSX5B79PVuGEkJGQsiFiwvMnPYvGgBbB7rdrVZQ2qQe1ujgzUiJJHFy6uAoPToLuxcnKwQzAqWsUmV6",
  "key22": "5Kuz8ZVPaN7mCVFxepTjCobpDZwirqmRhYsSFYVwJDoA2oh3Ea9pgRkZy1b2qZ62Z1A1R4hvmW5t8o6cvKgiyoY2",
  "key23": "SiizCWC6q7UZaHon8aRKoVpL4r75eNEDBmSqvtYzictL9JyqXPUQrRPiPwpLUkxnFUTPr2eZJ9oKMjwGLXFobPB",
  "key24": "27w6kam9JanS3uN5n2gSyuJ5ZdDby2E73km2hFRezSaCFqse2xDgFNNX3sVGY7c3XEVkMtiuvvER9vuUVJ92piki",
  "key25": "2vXvrizpaNFugnsZBq2e5yMuqEvPq7zhgV3Sn3RVjm8vy489GuJJz5MS8hJWFa5yG8vHjYnndHhVH16GQHUTy2V8",
  "key26": "3sZr3T6wsDZW3jHFkzMrwwBZefiLEMUtoEmpnGPa35vECXaKCZ5QdubwqmifZckdYnNhqvANs4qx7NyrfAJhgeF4",
  "key27": "3n5dWF3K8DNqHkoKDd4EAa3tdjs7YWNtNayjaoj6RaWXH1CvdvuZmgPLXsYtW7a3Q58Ao4okZPTkEY9AR1YATMEu",
  "key28": "4NqFbELohWCmHWjZsj9yVGoGeAigBuvaftakxKeSGYpXSxDyzAUUHHeBrff57pf1sWoHnqBwiwyACsaVBEB7xHYR",
  "key29": "2jxHEMfN7PL4gAw7Q8tZXMSWMKa5yqtRoGyjsZRbZhVWvoAT6k68HmBwTn4snsXBvgokRLkbnSPtgKPee5FUMW85",
  "key30": "4meVvDReoyocZpmuVUsr2U9of52ZEmpwvHUMGXWZJoRD6DAA23B2sV4WcZHDCG8KAZPg8dHJi8zgEVCsxsZs87qa",
  "key31": "EnUa2vmCBekbnRrNLbbjaGxAbz5XHE9Ki3wKBK7f1nHp1nE3VTZj6UA9axXqgYk5fCYA3Z3sUVvENsnkEyzx6qs",
  "key32": "4eesYdewZvbdzWxNNqVxc9kNdaAkRvB4tttRwnRLbvupKSAkAuDruJCb2NVwQv2oEM4LBccuWDgiJAC6treJR7kU",
  "key33": "5JLWWHKF7ci6RS6y48nBaByHXnbv29Hj1gYTMED5qfAPytmGExjKjWnGWDqnBcvNjKYDKLa37nhhFg95zrj7vPyG",
  "key34": "5RJW2TKEf88QQ7sUyAk23SMLfxtg7krS84xxefidsu4uXnNhgVZyVESvAkvuwJrmDYCSqTsP9x6QAVUhCuYrLkWf",
  "key35": "CPpa9q4QePojrno2VZmcyWm6ZcWg2TytBxonnZj73NepAvBVJrQuTh8ts2ULo8YeTriaAZ6viNKPtNFhYfUNXHa",
  "key36": "5ibo9LkckdY4zxhZTrdqU83ceXSGGHpf1jvUwbWfopF4VcTACgxgxqBuB9hK9NPY6cysa5Htv6vBTT69mo1Heq58",
  "key37": "iSApuxVkChwFzHaL8PNZASzFuXLgJgfEcCX9mnSDxxfKX3dFra3ddvTE6asLdPgVTz7G1e2XEAJx2hph7jQzAK9",
  "key38": "5vNo1hhsxs4YRwKQrBNT3V9gAL7prZHQcR4EBKgtnYDvGWGmhkKpMDEbjFo3N2WSxrFL6gimvKSwngTf3ERhcvTq",
  "key39": "64t5eYQJ4fZCeqSXstaHoTFUTgofoUTP8nKkjppXEiG5npRcGT84g5kbmJ68TKD2CApqgjp1knsp1XNerqHC3a9w",
  "key40": "49oz8xdq6zpBL6M3gPDBUnicj6kH5PacA8nhKk2Hmc5BZVJA4LBfnghXzUVAKas8mDurCJGPeDZPxeZ4ubRLBog4",
  "key41": "256MHfEbzv2H7JF76PsgPE6FjFTvCy68D9aF27Rv1ahqjUPyHenCUYpiYXsksQgzfL4bq1rwGn8kd8Pn7GBm7Ci7",
  "key42": "2VxWVrFtdWHeu3HvEYqftuhLq2nk43obHUR4vnz1wWJjRG5K7vub9NAPaT4VqgfS3NEUeURF7z73u45y8YxThLeo",
  "key43": "3Qp9YKeEgL313jetFEXXeJxLTxxiEgcrTHr3oXomPzJnMeoBwY63cK58aarWbszxerVbGgxkR18EdEbvPnsm37si",
  "key44": "2ztu1Q65LB9tpUp2B8kaQP9X6Tnr5yPg2GKzuiu26R3pPryJ1ZwP6neMV4UvADDBSVQLcWZf5EjbzBA7KKiaCkH9",
  "key45": "5oPZMfMWMBNpw77r3Tqs4zoj8yC1mS2U1saEHeMM7XrNvNpy3zgJvgdaNgtxNMGL45xTkMwyJbGoyim7vQswuw7Q",
  "key46": "399gKM8Hrupif2GE5LiUBAZ93ZBAKcTX8EBuC7wmmRccHDaBTznA9NV96PxRLWv4Xq4TWAXw2jfFHTbbyQDJaCzt",
  "key47": "2o6HWjErQyUztnAEpdDZKxVx5AHmY8LhLdMueFwaoRkYKuA4fCek55mkv2kXLimNSbY5Z8MExe6GbeiqB4LpYqdg",
  "key48": "C54mTtjrh9hJNfetMQaqRmCdYrK3xiqnk59qvwsXPrMkshfUxqLmKU3Y5KEsVg5vFcfCtVDDFK2knQpPGe6mMd1",
  "key49": "hHBx19Unc4q5wjafZmeHNmS6FP4Qd5Ghni3tDHBxmwJcPeXyAetgPyqEgRUj2Sa7NJTNZSbP7oRu72MV7k5JWpp"
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
