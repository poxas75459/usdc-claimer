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
    "4oqPeBoZktsMS6WtemrcoSfLf6fdq2P5196FfFjBKGjwd8GUuiSoJJjcyQNhrY7zF5zA2ueZj6RGmH7zxpvLgD1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QSDJDZY2KmBLfafiF1U8jDH7qpxd7fDRyz9NE4UVcCHS3yEu8dsc9Av2GJF9jUGCmkL8Me7gu1oNzhdMk2JKA6v",
  "key1": "5yozpyUmqM4try5gcGxPHUPdXRN4xGpZsc88H1bLq2ohmgTrWN19TGr6CzdkNFU6oQBpKEo32d44wobMSwAX6k3E",
  "key2": "NwUMou3V7YaES6ocXgRKRk35oZ2uH4JX89tpTWViUTdfUC1x48HhMLMBXFNu1SLPupioYeQUGSks59iWaAKZ7oJ",
  "key3": "4iev7b1xNZXnpQSDDtVtg1CMAtqFwq7LJsZHBRYUVpqCkzRvr94qT929ZCDfaPPzhjxf3ECbzboJHbS9G5jxWH2F",
  "key4": "3BwijPYeRMDaL6eWQ2XmdPGvK8zZco2Bk7gXW7kJkhuorna4bbJRYVdpotSMPTkpQJ3GTHz6DYjBPMsnDgiAW7am",
  "key5": "gtBXoKUs5bpJnjCzTWsFBbPniBedKN6MVgZ779sJEuvshatoXL6GWWs3kiUXBTCk14VxdFu6K1knebBrppoUbxj",
  "key6": "2NjwGX1rtm1jubUcvZuzFhbRLZo54L2AK1RczTE6x2HiVcg2dLAPULgsTahnFz7b7znaUDFvZDwkg79F5fdJGhpA",
  "key7": "2sNr4czYgpNcjEBu9bcvVnk3sRsVcNte8LA5t9SofiAKj3YkTe16FiAbvA8CxZdtK44N4oD5Mh9jxndnM47Cxa4i",
  "key8": "4j3jJndW9pkbzg12Stz4R3btiRfmbuxWiVBFmPAPBdVWv572NtZs74UDhsbXtYB9xgXopm15XKSzUH1WdKq6ezTb",
  "key9": "4cDKx582NpmEfE9BpzmQLM1Lvzo15Gj8WhcecyqrSKoJLju8cJyj2qU3CE52GLqxKeLUuBQPY8nPuycSqnDrEGzP",
  "key10": "4UmLs7rCHh4SEnNbrSFVtWPJNWSGudgMPcDsWuy9aDigc6fv8bFWCE3Y1BiMDctLUVUsQsTMkSkRTbx2aTv6Lknd",
  "key11": "3A35EW6R66GJYwrM3HgiJJjq7jJnWqABsky4vPUaBzCq76otNJptzYtMqbTQcybau2Aizjy8wLHoKZfmCVTn8vJ6",
  "key12": "2gfWGwBtdyzx9gcLwH3XLHWaN5UbxctrmS28NjisYdiFEPdjBsHV1eRBkahEMNFUv8tLyt5U4ncbExtdBw2MCqzo",
  "key13": "s5LPbjdJaf2HyAoX5FcQ3vUzByccJnr4ZZNXt11oTqhoL9FZa6WK7FNX76ADZRRRfe3sJ8NKQAHy1RAyJZPJwdD",
  "key14": "JszuTJooHxv3PfNWAXqzNfWf4vsYZha72SHwqdmafJiELzLToP2fNPssAFWMm4VcGF1hUy1DpnhPBnks7mzTsgU",
  "key15": "42qJWmmH4LCJMqcqFMzL2Hvd5q72eW1LyUmBCb5RQrmRR1YZQ7C7VZMxVAaKoA7uceGnh2frEBumzKJpXjQSQiB",
  "key16": "Duswof8J1YDkbKfzss9tBJREEHyqEjGK8zD4HwLuHpr7asy5PojucufXGyEKM9ZYGGwwFcsr8NGfMbm17r3LPic",
  "key17": "3FZf5GW5dgiD9eb5srvgjZZGARVbTT3Yc3T7FFAz8NngafWTkDUe6sS9PDZqd6jfYV5DjeaSi6Exr8pzSk2TQwFj",
  "key18": "2SJmEvZPTyKwVLhTT1hoPxiJ6Nnct7ouoWdhtRDBu8DFo5wuuG8AEUd8rhCseEUqc42oLghn9eeQAQGECMCPhePF",
  "key19": "2odmbmi6q6ErQ59mhEiMWYcceGonZehCqTaFs9Y7C4unEPW2JciowCp5phFj1H5YU24vr4EoZ5igRjaQCq3PhwQ3",
  "key20": "5t86jHgr1goAh9Bu6ftp1TLX6dkMwNUobvUe42HPddv2W2bzgStyVjfZA8SQymJi6WwT3G7Jfo2vDdbmqoLsgXN7",
  "key21": "63rnTQTuvp17TeNRHWbRcY5pnED4f2AcwUeqp56z1dowzeHWqB86pjaX2NxoFSj1QE43uHx8CaLMzL2JBfYQr48Z",
  "key22": "uzhXeMLpVbtt5Yh8sxKyHuM1S5nNH46nsLKmCC7aqQCkYzrUofPtoFHig4Rttk8EzbABEmSsU2sYDvtgcZtkv6C",
  "key23": "5num6HcBTttf2sPzChCnScTHJuTGbDN1hWg7z26cvP1ViJz3Vp47wP7BaMN4RyKDoiZj3jWad85t6t6aRdk2AAty",
  "key24": "5MjqCNwZ7dHJXrBMuaoLduniNsqYWs1zyFWXfbu5pPfNpYD8ZrmFeUPwHX3TewRekkBakHCDKm8STZEudjoDEMnA",
  "key25": "tCrLrNw4xeB9zXBVmXJDiGEYmDV6NTHs2jWJn2weCwRA13LmHx4n6H7zh7EujaiN6tfV5JsjsaYhpKAqqUHxcJp",
  "key26": "bEqspaejZ5XQzqV4sbq51nt6NjtfVpDjFtw4LiNpgFnck2A6pENuZR6Rxmwz7pjSpmnjXQC4paevycytBeZxidU",
  "key27": "49ZqbauNgiDvPpT9pUznNKhEyFxWEKyHNRPJ3G8fkakFsGhJPoQM54VVJqz7Ng9Y9Yz7dXqfTvdKVFH4MpAGFAm6",
  "key28": "iqNi2VcQcCRUqfSi8j1sQnLd28VixSrN9rfmQs8PgE2i95zizJ1nNX5heb2VFC76nnc675Rc8LyBuPN21jB7p7F",
  "key29": "356LH4MaJs5xQ5oj4SF4A3ENq7aRJYB5axw13rFZzYgQ33rxWLdivt8Abhe5NsVPPCoZCAUf6VtR5Xy25m2c3PGY",
  "key30": "2EAkcT7nYJMuHtRDWbGkdqa2L5GiLa9cXctUtWntwVzCotTUWc35EbjzLbf6kVFNERecxQGtaKVNx4K2hH3s7M8R",
  "key31": "2u65899Eh19cWZcn6sDfLTvf7BPuX6boP3Wh32gaVZGfCEL8LSBzcyeCYpJbd4kk4jSL6Y4Epzko9UqWM7uQ8j9u",
  "key32": "5MHKmnqP4FDpZzQBs1QAd111goyvxMtv9j6es3V9kCKinX2XqtbG7g3Kgjc2hJtF9My4eyiTmimptmoDuFRPhMUY",
  "key33": "3DxzZtiGPmExUqWc7GxNHz9UTGh1kJkmf8cRTVNKopZhZddDPTQBYLWdPGtEFup2E5wLyPZhNAeS3gqcE6UcyC5E",
  "key34": "XwWktcpNMqd9jdJvfwkfCu5iYScDAJu38eEB9zP3Qq9rTABcxpe3xQXgdz7ZSWb1b89Deqb6JAQmwCiJaycPzAE",
  "key35": "2E6PdAtCSDm1U1YCvpE9S3c7Te6dDypPpbcVhZoD7bdDXoLoBiaE4PqwTKiRoWj8snH427pfcYmoMZ1WztB8ybVf",
  "key36": "EQcrZ4mGButHqK5S7F6mmXxWv8TtzTTRgw6eZhuXtmVzU21mFzZvke9pLHfJ5BpK8pfdgTbY8pNHzb1WoCNEQGm"
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
