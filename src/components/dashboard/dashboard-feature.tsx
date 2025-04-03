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
    "5JHJez5Fgk7pmricoZyChigwBiiXdifsUVeSRnowh61mdvRUW8LqBdnuz2SVuiom9hjHNUbUSrNjDbtqky5on59p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HmNFsDSDvgZfWVShSGsGUv8BoKx5Wo6RfoEzEKan7J71j1D9DckXuHvfFFsLNxLdb5ih74EURT7eUvT1x68zScC",
  "key1": "3uAAHfoEjFrhPTqvMHg8zxoJ98qszTGCoiKiYsagR1Jb72aXapiU8TqeTkWYnYkW2EddbQE8f2FoWuFY4irAcGow",
  "key2": "3uVVrz3jxphxHtDSbxXC2AUb81wq7EVaRwtwvn521qitDZYe3vNkz7G1Ausos1iwZoxiVGpqedawwJrkbafKXrgo",
  "key3": "5gXSjs93CH4c1btnLFhQHtarPcbSaYfB4fTvVBTnhSepNZL97as6FrSu5mDNzFHDcpWqLbNt8Xd6BUuzoV4mUebx",
  "key4": "2fpAFgTrEsUDfo34yS3DPb5os1nqpWB2WNqeWkuzRdBtTkJVxGxagjREzQP6ZpvqHMzRfzDTHM2exr6tUhnX3RBU",
  "key5": "2oLZxQgjFK11DnQSPdMLRHKysi4Je76Q5sju33UswjP5sjnxSM1t2cN8VtLfkJ31b5PTrEbdQehmbp6wZvCz7nRi",
  "key6": "2hB6Q7GoysNWfHNeQzWJnfSpJiAhbk7Fx7NWAMmgULkkdDmYD4q36JmjTGmitX1Td6tD2AXwnFARdY3vcwMJRMAE",
  "key7": "4YrtBNq4Pr2eAWm7gZGAUkS1rPiQEH4uzH7FXF9j6fGzg7xDV6MmtXR1K7JJ4Rzif6ykyt7p5nKRZSh9b9N3bMh8",
  "key8": "62BqaxAeYJJpEfCwiAsHvEetxtsKpH76BmHsziqwwnMmE6MgkSVadaXaTWF64cbUzw1g1RFjGRJ1pmkNGKtNU8Li",
  "key9": "TEBLd4f2ZTQxpd45ZHLXkE6BA7yXQCREwkNXWdAspLkLniLpyAnEtXagHEaKoPnkqPqxL7LXZwBqfkFZCSWraMx",
  "key10": "4PW1DqCtVRcHtWqpZrhj1u9Lsd1u8hQy2apJAKA2sae2oY4rwqbunFcecoh5h9bHtj5KyZ8RRzZtunqr58yhpTb7",
  "key11": "55D5kFnnpzKq5pqonAva63K87k8EkrCRtkKW7iRogsXQagyPWjULwR2UnEMnrWzr4oac1NfWuCVji8G5FZ8fG5GQ",
  "key12": "2pb2G7WCuMocxQ7QvyU7VsMPc3oQBQ38t5MVwKrgqxEVR1V9y8737ZcSvKWFzz1J333ea6utatLe6gi5hUrZZBAy",
  "key13": "5iXVX49zzMtutoyiyGzMrwt9xmJZYicHJAQ7wRvneBdV8u5dpDcobeg9fCupj649bcSkyttyhTnmke8aG9aee9Lg",
  "key14": "feioPRajXuU8PxGm7zuon9vQXDGYUPVzvnSdMpCF57yBX8JZmtD3a8Jvo5fkrR9mKS2KFFwD2Ci6764wooWhd3S",
  "key15": "42BP38GV4s4NTnbZjsBK527ik9qmt5DYTAXoktdgpi8MBCvDjshzVe1MrkLACZu564jt8eyzhaBkApsXYbkHvmnq",
  "key16": "sTaQghkr84TYpcavAmNGcdfr4GB14gBEcpFimRhq1hqDo6vSzzbPZ1swa7H8Eb9JS274Yh3JHPqQzshHoZQm29F",
  "key17": "pCsa3HzopAD5eC1GHm6A1mBpLh9Z1xJK7d5uWTYRVXm3Zc2MQMH8tPemE4r1f8Rn9EDLPxoGL1aDm9ckkXtjKFF",
  "key18": "3YGw12csMipU6hfDwCRikadkzqmCVSDBATiZoBVWTjCp9z6ptvCMWKhC7RqBQRx7yRZNkjE55eijSyn533mmuYK1",
  "key19": "2x9v5wHUHaYvECNQco1eLFfnj3pMrNxmXJmqWtCcB7XiorTqKKWabYoqECBP7r4yyUV6fGX5R6HHKKdB67gsFB8S",
  "key20": "39ZK2TpR7QJKiyLkbtzK5EApvRU3oJNTj9G6kkSX93Akp6jsuA6k6yUQsXSuteSZsFvuo9TNEqUQHgaNSwfqvNM7",
  "key21": "52VLSkXj34Y54Dk9obMUKxevhMg72XPE22c6ZYBatGHU3bREafwysUXFKHYVqnCvRyuJShAgpUDxBVdATa3z1kDj",
  "key22": "3jZ8Ycvov5aTJebfa4Gcasmy6w75HPvwNQppHBLm5sbrxJLzNyepRwMaBxnWA9EoXpC7P2s6xTUoAsyQ3JAs8PS1",
  "key23": "36ypQp3a4E8wkH2Js3Ta9E34hTAGeHEkvc1wwJPoyY2RRYmiZvVvEE7RffrDRRfkWXb5Rb2wCMsEBJapWXyiQN6f",
  "key24": "5TPoyF3nT8ezbTyJNhyciAbZx6s2D9eoWUWST2WtBko1tzhi76DBgDhEJuwUgT6mDUwB1LRUv7TvNnipvWKjYT5u",
  "key25": "LUDvVHFvTHCtfqfGXw9DdHXggVu3mdxcSwLHb8uh3446EwQUyJDZcz8CovyYwatyCyupL9YMJJry38KC7BsGbGk",
  "key26": "2woF5g5Hrj9mXDF8g3tJmdyWUL3eaN1U7zbGurXGs8MRrk5P3E3w21Usu6tusuA7ykpsuD3Mrsg26BTy4taEnCDJ",
  "key27": "ucTDYQB9dUi5D1d26AZSiVTAn1sHRncTkxHVXPkVoj5a5yvnNRFHERZiuZqpPugB7GfkvFg6FALtXwcka9ZRZyu",
  "key28": "2kNvHNereaRuUwCd8t5srdm3virB9Vq4ycMcqWvWZbTroZ1RrSMowPC616XbXrqSXk1pkjqQ7ZG6oE6P7ZfFaruG",
  "key29": "amfwtVCwPyuufkefcXz4pwtD5FPtCqFVQT9amEMTuf8G96pY2GfKwkNhbbjLyLTgJ8QtAaW1pBbsUviDrXJPHZy",
  "key30": "4yRe1bvK8gkVyKjoWicg6RmkrMEtGSh7iXWHTnfa73scDTtdrqwaCCcFfKBfm65dQV8ci76uSZwGRJBmgSfV2Y5W",
  "key31": "5pdyEohtbtqCn2K7755PaSFuj44iLeRnpbLCepBjwXhEnb1E4FsvZ2bauP4pizq7UtQdbVCPqTemnWjFFpcQMrAo",
  "key32": "3hv1ySAdrNiaWSAe4EXUTH3ZgsMLwW3E3cKnLk4qNaYPh1zW8qT1jMgg5Qo7tJdKZXcSD6BixBNT5cagYyTXY7hr",
  "key33": "k3Bdy6umRtrFzSPV2dZgfPB3NndxnVmkc41yGAa9gsjY55raYz8NLsJe6FU3hjVy3ajQGtdLUrotCQRdoTWSfyR",
  "key34": "2BTWGNjF3JjgebNRPwmqFPb78ghwUoeATm4DG1yyatVquDDt6XgZ8DTRDASpARfV2ar9HKqpMrqe6aFxqj4JqRyC",
  "key35": "zPhwr1qKdghfr1Sx2BmptfEG3U6QkZKcRtC3bwTiyPFewSqX9d1afxyp73oJHyi1imaPur4QCgSFtGnjrtdh398",
  "key36": "58znUzDh8LcxYsXChRrZzapXL4qp4nkxduQwgzMS5JS8J5obvTZhPDATEMSmsEE9ZAdndos5i3mCjPD27NXZJVf4",
  "key37": "4YkSrK1xyG9mfHGS5oxcck5QJBH2t4AvJqGLdg1vEUD9Ft5HtVev2Hn1izFzVXxcyWBkXGgJgG87bagTuVXKSFZK",
  "key38": "5WLTZGMFcuj73z5ajwqcjAgnQ6jNGLW3MD45fLSbHXA8xdBaHQAiJUtJ2FjnEFDU4eUdPjbzeKbwcmQzLXVCZ7JF",
  "key39": "Kf65vEKMUTCqw8GGnispM7tZiXRBDLEgEx2scs3QTxeKTQFRiiKeadBxPqB3gzkdsHLTT5jQ4WP2Dnp2iQ9pXY1",
  "key40": "55cEEmLSTHJnJdDhAjwxCzkUBjBzCaYAUEoa58fU99PeMwAEYHQkFJbcbahBs3h7LPT41gdhb3GXBhtbMiPvC7KH",
  "key41": "98ejRBK2CCeEBow3EcdmwsATdsoU8GjQGzgUoM6RpTMbKuJvLiTKWP7oiEnSaxQ8uqmL778x2HYANGTKwo3p1S7",
  "key42": "2B7YjWkLNcUacyTZq8mdfwH5eH2yf8JF2xTXrQ115pdtPba8bg5gaQGU1hKTytMcM3TDywz4NGfEWLxDwjNuRXvv",
  "key43": "5DW9irtATiDDr7xoWvJKrrf6VvMMZyEgtTzXtqcKc54cQCFyWPZPGPvamupVwXf8xN7muwsfUqhteTrf5hp9e5sd",
  "key44": "4sihWZipWPcVz9URpRwFDM9qbxbtEhuCyB9Dod4QoNg7eeh7bJFTY53xyejvw5ahNcXCGcsNAHwikq29K9n54vjz",
  "key45": "2oyzk2PyuHEK9XgpyFtkVmyExVNeXBhaFmZ2sAuXt4jxBiDqfV8MS1iQzHRdkHS3DKFCZRjb8WNUPgVWyubHTrrF",
  "key46": "2C8ERMV4ZYXAmWhc6oNmV3rZpix5g7sjcjwiL8BeWKqiyEvnruBk83HkYGHPMJdJgu8Vorge69VoEUo8NwCc9yXc",
  "key47": "6Z9Ueh3WxDdKo1iucuMduHd4aKruo12K767nmBhF9c17P9s7AVQnwG1XcgDVJTpTwifVXTbqiCMf48bWGPEVd59",
  "key48": "5RSwtxFe7TgtTZwV7ANC3J1o1it4Y4GeCK3DCs9ijT9nWpTZcZKREHwb3nAPAHyNznsuz5dUEz8vQDZPuvenw3Eh"
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
