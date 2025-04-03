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
    "3vST3AUU2wqTR4bsADa5RVdn4EdDjedqPLppQK5rWN4Sp6Lzz5K9TL2rFtGZDyYfzF2ftGYsdNs33GTugXH4cfZb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xGResuHRqybBu5Z2FJH3qj3ER3hEx4C4BWh59orBtB35F1e8DWRLV2qQgyt7wngiNfdSqP6oxDLb5v6tvcVvK9P",
  "key1": "5VRvcUm2sFkuh4ms2eKPNAfxDdZMGDgVivH22idfuhCF84C5A9sHBj6u6AuKn3GmbCcoN7HKTX75fPUFFDdcXzdT",
  "key2": "5SzmshHpKG6wVSeHq7Bhf7XdKGsu8G1Wmo4iG1wGoJQzGDbct7WSTmHG3LRyuaN1iZMexaeE4PHebEdKLAKPViqx",
  "key3": "3GTczHt6cpidxFZNyGJWg9wxyfpVSzffMy1Ge7brzEdEC4DuJPLiYxdMeWv3rfuLSuK8g9vf9fNezru1GyaASaj2",
  "key4": "62a34Q8AGNNFLqEoGxmg4X7cqZ8exkk7wDybXq734xg2Fje3mAffv1iZHvg6s79RUTnJxHSYwNLvYsHrf45mPtGV",
  "key5": "KqQJiLt2EmYBK2GJgELkEbNVWn54XvN4GuSCgKYCM1gfa58TzUh4vhVoKsSNqKx4kL1FtpUKj9Bj1MQxyeUtmXY",
  "key6": "mnnwHXJfrezguSr8qJQw3RiH8JFSMqbTrGBAwMwrxgwNxYvFtW2Fdkww2oZrnb9MbMqXnfc3iDEjfpa2Mph3ybH",
  "key7": "2ysqXMpWMFaog9btPxKWNN71aj2gvKSbBxa1bhubU2diFznePPv14NpB9CXuLBRWNzvf3y9ejRMmsMruv1maf8HY",
  "key8": "4wxCGVYw19vvzEwvpYHCra923buX4pTgNQsYwa4isovD9g1B99KZjJhDrEDwgLSQjRGYcCw9zpzRWSZjnQeBhsJQ",
  "key9": "3uTAv2f6vXuipeg6pMeYqKfcb5CTUweCcBUsixvMbtcaxDqRhbLdeWUSx1nb8FEufYbg6LFuT9f58FyToDLPz9XX",
  "key10": "46jj1qcoe86u7VVDWrmhp55fu82QtTi5g3McLZU8JQmudQEPSWP5Ld1GRpEWRi67YfSiwFMnDg6hVFJp7ms35CHC",
  "key11": "5c8vnSCRTpTQQHe4wegNJ2WrnmZbcCPFw2Z6jUdvtY6EYidLsQbLTydFz543ohGzuywMi4zWWch4ExM6HiY6i7wA",
  "key12": "2vUDzTDPxHXRY3tHinYUiBFg4D34Uecj1JR2NPb3bauiZLi8N8WimMdTm99NX38V47okPusfisBRmxwq1nmJK2sw",
  "key13": "41ZMBjp2thHPX6Umj16mpwTzmUQnXPmXFUS8dB4CyZDG1rCWzoqEmZ2ZrXfYEESjG9SpwHjUrRbTD27Rji6PxXTS",
  "key14": "3pPMMNbSNQsDqCm7VgT4PF94tGhjuVDoS4JYuxc7DTP4NVHiHAgrEYizYiAzKk5jU7KtTBYFGFrFnrkXe5JhBm6c",
  "key15": "1matSHAioMbEZbwUZS279KLkLC6jcT17yf5mbiBERvmp7WQXecEcQ3d944Eoxm12LrLcJcbu3jN138CkXNefA9J",
  "key16": "2m1SjbM9gBKBVFvxxZBgiDX1Gcp8Zt9KGKPsfKA5vBQrPqQnVuvr37bMgki7tDbdAqrhQUH25KFjNeS34LMjrjZZ",
  "key17": "3T4q8Ki81aGvVqTJpR52mpCdww6VVDrT5UwwGjPqmfvQH4tj2FeqmSUbA5ptodNH5keMfJMQYVAPihTNodXddWpJ",
  "key18": "5iQrRr4zM7qZbqZ79aYqqpaKXPwM7jDgFDmYYG3RH1vwCnyQnZsmnoNHnT4UpHp29QbpNnfTy3b4frUk8ohQiFXq",
  "key19": "37nCZcrtg7JK4Lpk6MdJNkiz4SCuHKhxXwitdfigkXESb34A81tiDGruvHQWnF6MQ1PTCPaSYD3EmsYjtBp5nT6a",
  "key20": "2QhorLZHxg5f4pBujqPdERuBHtFAgwkPAaKDTj3DRzVHcuhFsE9FcRo5NiuQdMgM6vUV8Dpvpocsk61kYDAWG7Tr",
  "key21": "3FPEmRZRwa8MeWyCaC6mSqHZR9WN953B97sFw3nNF1qwhBdn2LiUtsNNqCms2m5d6RtB3dQzxVSMH1XayH58vuRw",
  "key22": "2JrTqSnQweMGNNnngusPvCU7X53gLJCZumrECnLdPgjjtTXdAjhhj6KgUgHQDN3NjDsLjjTLJYCDH6yn3LETxJvD",
  "key23": "4K6s6VHZTcNksyCA2PadXJXA97BoftpEWjSqNSBiTNnegf8pPU4MBjCNstkb5raxAcspg3RU8HRnPERHjysP3CXb",
  "key24": "5YLUbHpz3MmYPZV3XPPnzFXyquhwpHdnwoRLJ4s7MbHrvM1iyQfxrxrB8eUQYnf4hnWe2YZLStptQj4nqExCY2kM",
  "key25": "pJh2c248obcoZV3kegSh1WthwFcbh6j8MpD28xq4TkEQgRcjmRPvhesmQEyNVd4gYHEizhjdFCSD9LdZbedEkTo",
  "key26": "3BmVdznCqsRr3GqmhdhskRptPjdyHmdTDjmVBT2ASKw842ZJrAihch2Dnnx5dh2k8Fj1yX1qgUhuB3YiziYoijXU",
  "key27": "3SvmwWGipNryjMc9jNV3CF3VNsQX55pzQqXRAJgjkw28FHYfAwQJnqBQcWFaRAs45Zh7KtA7fmmCMYmBz8cgvmkf",
  "key28": "2bEHt1tY4nYibuSJxjHHFatUqqhw1A8Efn5jMb7AYkR7bFZv3EPRBC7nnqvGyrLTt6R99FBg9HyoHLgriqApDkp7",
  "key29": "2WvsXzbJN4ksHunrwQ5eHivaEVvjhBmnYMytZhn9pqhKnjgJ5q4xDgGwenkxAn6TcVw462TJfmp23PQFDLKF6NbF",
  "key30": "2uyajmL43QXMpXx3cWGMbgyJn7cBoUCV99phrq4ejK7BPZezNdXsxLaifJihyrviC2CGsEZPyt7KFrVvtjW8MCGE",
  "key31": "5VKVY9EjKEf9QPT6wE6oj2VSh3EhiYB1NTwEj8LHM2LvCiXqQGjSyZ3ei5gGaaEeHQPSghP6dhZiQwRF7GfjLemg",
  "key32": "27JfCaJN1524mRJCiHxtR5DEiwcYRXrGNSdwDYvN2WSWajbpW83zZiSvRLYJnTY2LWmGEU4JjuCEkSLab1ffyX1D",
  "key33": "3feMy69f2YWt5t1cNbGLDs9B9QAbQgAeoMuZdUbRXbni2ts4yorrZRqdzvj5iM7WvR12A5B7RMwK4X2YqGw2QLhg",
  "key34": "5DRhbn62xeLmAzLCcnxpzJpHbWzQMvxhiGdK97i2cWjWQBCxzbjWmUxczCaZA7bT3vfatjijwFLre1srfv8G76Tw",
  "key35": "4Zkw4QjWMEKfckFw9eDmoKsHqEc8573MKWD5di67nsLycHgpacGjXftSV1emuSjSEce6CPmkMQj5BPi3riNmYLDY"
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
