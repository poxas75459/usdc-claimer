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
    "5uYWVSRFVyBqzoeeK6okVJxGdW3rFHaANbM9FeHrHvx8qbyRuWvznMEhToW1TerfBxLomLbaAfTr6PTkkYZyiBQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wFduVR4mGmBCExsDgQzSEyE7TRYb4fDYh6tDXYRtdehCaARRjYTgaJCa1dZpLWTJrqT84gomiu9zQKMNJn6WLHL",
  "key1": "2Vubk4AVZPiKDMgr2PfGLP3ohM5RjECJ6Nk53mxiSD3PUNFzchFPQGdbiU8zrQyaXqwpdsEKqUo5BkksH3EKwXnj",
  "key2": "4nW65kvba2CJyw92hhDay186bPqXnUKLR4nF7X57gEKPDquGNvhyn4w7SNhPLxtXLThS81sMHJEyRSxxxybgeLZ9",
  "key3": "4rMzcHoQHWmbpPVTj5dULBA914sFQkxq3rMwu3iGXD6DXpS4GrZDzyyggPVha85Ms3gH9gJ7ouhBu4nBZRtjHF4w",
  "key4": "4MGhTJoL2rp6kwZGgCyXQKMELXYJyxtekiFjfHXRXRyKkqCAG88of9ob676grBuZ1RNseXRjUULT4bKXbpWtzn7E",
  "key5": "a8oaik8iVKaa46upz5w3KzCDj892Wh9RVstvv4ZLt7YzHasiwQ8o9RdXJUxkom42Aw4KNVEHh1JvCHL26jmtmja",
  "key6": "47Cd11dDSZodzmJYekzoKFrvUGHzEKyHrYxU8uRSLFYzzFym7shiWn1KenU66pdKw42d9FcYgqLRGqE4ZQT8ZrSu",
  "key7": "4oZKPMA6zVZE69882WoKCh6yJKF3tzGJkHRx9dCziPCNHh4VA3VWVHaXnug7s9oKEiWig7kXL1NwkRNY4XD7faUc",
  "key8": "53Zk9wZMWUFzCAPuNXUSrgZ1AfhhcJfP1EtxjFeEwg8B1ypb2V8GPcTtoh1LPCarXQrdufQUKySXzjnG8ZchzCAP",
  "key9": "4QkNR8CgBTZyZEXtpDYheqWmi4Tdq8sZrecD5yXM7VD3c7sdPmHu2J2pQgSopsQ6ZbPKpED1FPL3je3C1LXnuwxy",
  "key10": "4wfa1GWb2wcGABeSg17q6DrERKVCdWCQKzRNB8ao4JTMADSXhHJXwoo6u3jMQMdJ3eaJGd7J1sGEfnJ8DCiFE2FV",
  "key11": "5wa92GW2yEGZZ2bLqJv4BkH1Y4y3ihiTYJojqY2MpuAkZT6vcJrkMZt3esNMfQeBpBvPeziZDZYxHkNPYfFyKcdm",
  "key12": "4eRqFkMT5VeS2FFdSzi1sqbH2tnkyJ8o6zdNtmTgKyAZay8UM7qcrum1Jfeb84hqGtCSwvjhh8w1duz1kGRuMmEv",
  "key13": "564PfJX75KhtXvZ67pAbrfLvjEcvniY4sMQuo1aEqmku9Edq18mPKJFCFR841LuPuv7qKn9JYRYMygKYCASX8vsN",
  "key14": "4wE4jPBWvuLwhvdJV2TjLpy7ipPEQ2Q4mbToporQVbcHbh6XTXo5kyRyADpmnthf1WSPKuDikd4cdrfCon6rBqB5",
  "key15": "58AraFsFEkLH8tYbmxg6jqz6FRMdrsARxFsqS19FpS7Wpm9aNygWAcKjwCfF6oBbbyvEgrigH96zBjh8eWERqAXX",
  "key16": "4Qv5EDsE9Vb3sk5cwj2vzwytkx9E8JDaFeLyAa6qbaYEtzfyKD65DRSeXLZBkBUY4nBvEzSuAA8yXUvokK8deeUm",
  "key17": "5keVCf4ufp5VZATV7kVzNiJsPoH4BwgSPvtLcv66Mmexan7htutM1XDHNfkckG4DczsosaL1f7F4rpuxMFt9yzuG",
  "key18": "337ToZzPxAvsbALGAuuBfsGEYgCg8TRimdnrZC6SF9Ys4wmJdHL1H3dQpTDUioLMdqsRXeJFo9c82rnFuLxNCHwH",
  "key19": "2bUE91yFgeD4C7T6t4biADUUB4JwvW5pfUrYThbw86WPzh47tnRY4KrWxUtvZ3BLKrtveoJ7RtBMw25x8nmS2iyd",
  "key20": "4noz37UVjqWFkXcsuX9CFcQRbqSJ6StB1STB86nLupw5dePHayG5UYp61vZxRKbVdy3M4zpfjD9cqYVQYB7h8txf",
  "key21": "AAXytPn9uJ6ygWh2YrD34hCMZxL732bvmmnbt1kcZFJrYaxh7mtBF8PS8zCpw79k5b6UqbZD733pmfDJAXwJiVo",
  "key22": "49TwiEhd4w3PaE5mfUvJCSvju66JQKroAtBMghyurbriBmmq8WU996oKYF5FaaEdLJxf4G7QkBoe1HncpjmjLeYv",
  "key23": "4FvXueMMcKqtLuwTgUDsHf9LM4jeLUSuST15HaoEyVUtsGovLzCMaQ67JgsR7ZkY9N8FS43LmT8X5C2XwUzrvXE",
  "key24": "5CgYXBuVXgRrdccxqG3XkRMUQ8GVHbtwg6UmzXYGK7RoRHPHJZbahFUKfcdRQUTuwVHRpt7xPGWQTfkorpMudQ9c",
  "key25": "4JmujMf7x9Yq3YXD7gC3oFtK7gHpGc1sKkpRAfvqTd3fJoAWas46ERAFJf3YPeioJjH2H3R13X9LmZHkAUKBkd5R",
  "key26": "4BFqP1QBeS49iBkupJCbdyuWKzVFNfFQQjfSmkAD228YtLXuc7yAPiJhJTddT7Z3QZrDNCK99LVUQEDYoAFteiPi",
  "key27": "46bCS1yexJYH13eFrUWZRD8pG1WiY7VseVWZsDffAVmtZjBfR22SxpPhLMtAkEfDz6MZSf4XqVEz8a9D6K9WQQQi",
  "key28": "KFDzm2biV6iN6KdSGkm73DDbdZC7esYGTT8MPLJRzhEd8zvEnhk8XGnnmbmhYZFi3jtD6ge4XRGgpkobdE8mFHR",
  "key29": "4shFpNHwbJhhUh2As7B93a8WWMtXSTyzjPJvAgkxNKPMc8bjGG4UnsdNuvuoVZAEzFDMjcBwwzLBXMFTT6T5npUC",
  "key30": "UMDiedRFLTAsdbDJdvr9S2k7mriMMmwNFcpWBnSYm6Sjg3JX6PnJkpYDG1bjDPF7X9M1PbVRqRtmi7M3EpnY5uG",
  "key31": "pT6fwphd9GrAX2nqqPyTUsokJuJMmZ7rZyvTChbdKiz8GgnXpnVRMvuugutga9GoBSTbCGvo87dAJbPEjfKCWb2",
  "key32": "wPh4f4e7ARDjrfdQnsYWKAH6khoVtrQTgw4NwSW4zm8nm4CYGDb3wizG9LCCYvmsTcLS8vsiBVh4MbaDG7CMuHq",
  "key33": "4j9ugVbHssjr5wchEaUbwAhzUWv1dotzwWYcbtgdwpbeuhDCEo2KExKMuqEqBqFzT5rZTkJnu75VxMBqRTiuteZr",
  "key34": "2mMR9xX1c39ja2GJ9fwv9JWEJrLKpnDerupi8Djq6vXFqdvNs8EpH4ak3NTYxKqDnpfj3Ht1jRr9uVYF3tpCbwXT",
  "key35": "2Mg2Ws2C3Ux7cSoJYJxW9bDobaamF5eUZMDrRcM8yhrBxWfn8UqJoGjQuaojgb51s8bkz8q4Umx64k7Sie7q3o4Y",
  "key36": "4AfajwpDiK8CRF5U1sdDiXX6pXtziPW4QdteaFGqQcCwwStrjwGZspLBgEgDj7FTbQa6J1xo6BGqD5byuCVDxxRp",
  "key37": "2BgUfhBoK14Vb3D4sg8LGaqLcmrHA6YYdMGy12tuyumLyJrJWZtvpJ4yCNXp8VhMjVrNr2i7ajuPyimit9CBGKcF",
  "key38": "2H2pzbcNNaduaerWxag7MbMHjTn1Dg5JpMD931JA7XzUuine8niv4rxXbgGcgdks2RP76jpvT3T31rqouD2W2uhj",
  "key39": "r7nTVia1Cw5gzPK15n5zzVs2wgh3yh2ecsDZEKVB4hcriSNa19Eq7gZxJhvFViBV6cBMmrBWjgbotNQTCauB74Z",
  "key40": "3318nw8QQYjc38GrQsEMvV1ARTsPfdy7pkX8wepuCUB1pYYMCcshPbViuGrn7bpmuqnpb4FRdZqy3uYASwuXoYQC",
  "key41": "51uvw4bKJaiJ3oESuFvqSvAWHcyW11Fp7GSfKZV8xwbjBrUKszM2TZhuX8VjqFHrgdnsFF2MtyPx4oR35gdKUmQ",
  "key42": "5YU2w2M6TxC5hHYuRdRPHQMGXvaz4eN44o1E8Xzc3DNLgVgj1amjti8iiLDrrUbA8aVuP9MeFznPYhmTNHVT4s1S",
  "key43": "45YQWtUD1Y5QWrS2T5tJscJLBW5mMKZAmCF3yCaPfMLRq4iaZwf71CSKcEbKELDWkmvreGYWaGm6y3c5wwcXDzby",
  "key44": "2ExkgFujKaxU4reVRC19JgmogUaqqnM48UbzVa8YWX7AeMMt1kAeNag9bgqJF916PKn7KyMYmEbQg4jbvgpneCx5",
  "key45": "2191HarcE7h3U4iJ4UbgA4GEZpfvNMVUZs4639YjNgt1iagssyyYn7TevBHEr6DwibooBUqjeo65WfE65Ca2GrxJ"
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
