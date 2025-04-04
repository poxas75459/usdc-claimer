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
    "43gjUY2kmPWSfGKZozdM7ijodzurRoQf3iGStfPaTEbwJYxs7J5hM8Fyr6aUCuqJfgY8E5LmrTDPEkx9TCXYoMBw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PX5RESCTZiDPp6c2JKJ27t2EFVSdezUVYGfyFzN7Ky1id7hp3yUxKkLkeGGx6dWmxVoUBm92X5XRv4amgPG2xf5",
  "key1": "4C2j3VWqPkMMuovgqsf4ijvPbQRfFD6cuFuNkBgGdhiAzrT4zTYF6Chb2QbVeeBM9Tz5N7pbzGoG3ECJVXNcGypu",
  "key2": "3YE1y2izwjVih2ogueUReKZKwdFkMWsQzSrgQcejdrgugmw5Divx4uQizBAFE4QXDgjEjubcMEU212g88rKaykjZ",
  "key3": "2UTTvaKyTFRmh3D99fGfTN4YV4CtVsMbanYXE4Etei9dyddXszVzZi7vW9QBWwqCZov2BfWTHodNpz41QDjt7HwS",
  "key4": "4xPNEvHnkzay98SruXS5k8abBBkmu9XiFPs5dhQjpsAwd1F2fZdabRu52RX47F8KfQeVidMZJzxwHeJtFRf3hMys",
  "key5": "3QWuUtTyADJJMe4i4WPzff2fXg2eRJUu2tp3b5MEeKgETW8EYmNL9nJdDVGz6f2Scmuy7nrVokJ9PNAUXLt4NdWZ",
  "key6": "55V8AKnLjANH7jQSKfRpQWQS11WzcahQwhEhZentNJUwiHeJX3i2Q89CL6mjKhRiCm5vcWFptoqAWAa5cyeLDrMd",
  "key7": "3e9cvyo7m8EoTCenV8QNSnym2ovFx9GzAYRiw5Dec2AGgQatWpHJGgWpetyRD1sFSVssWs3wHJVTKYTRTMYF34EN",
  "key8": "2esSbWb1JkACxeE2YdmPPctFLwBELLxaB6ypiupLWRQfoTUgU7xuznQp4EHF1S5BW9dxcxB4BrwAdP3mSh7fFJHT",
  "key9": "2pve1qLhp515cP1PQoNp5o7E1cCZubUS1VX3cfjBma7Z7ahuk4tnBRukm8UC2XAGP2eX3RjgXwawgDyeKyywSvGY",
  "key10": "2RgYJSwXmn1rXDJ3yu76bKyTSpBWe9J1QP5rK1nk4Rm9RWEn9uSdJaxKLETGxmqXTzK8SCnTqMQD3dME6X5HQXZo",
  "key11": "3uxxkb7RxQ2cn7oskugFBwjY1iEhbR1YqwaAukFFHua4DTJm6oA31tmj7unUZnvdeoGCizwPL9oktT7fTh66Wi2w",
  "key12": "youKn7pKPUg1MXoRaHZHhK6LPb3AqLfuGGy9XdPa4ZjBLwDMB8LWA1qMrFsPdutLujjQd9mD2uxSrRT75tYS5v8",
  "key13": "4ra8M8suAf9jTyccU5F1mFdc2jxazhhcxBYZFVQshiWvXEFZVSDjiYw4mkDnCkpQW1UqHj2a95afq3Z58iNx5Vxv",
  "key14": "3PNL1W2Fqn2dFYmKDWJrzf1yhYYiTRGqZdfi287s9mwgWM4BMvV8JXsswQifYK3xktQDTceDFNvKDtTeWtNLU9gK",
  "key15": "4jgBtox6kztQ69vuKsXiAK8NLnDvZdpJcmwKFZJK33Napo7etn5vyuoK7FUrgHv89gXux6QJQhQqfawZ7cvuaSkk",
  "key16": "2WhEiNGyD1BrS38dhuZSu78eH7hYdwrGUNvgd2kmeSHvd1fodYjhPVvfNor5iU2Mrj5cq5txh3XpvhmZgzXDr4NB",
  "key17": "4EmCijDQrdhiuYWPUB9ww1iovCQQUXbP56nhUiuEPyb7PteqifUXWqnsykXzrLu3EgDeMHAC6CYFTo92PREgcnjb",
  "key18": "2eZN7EGsE3XKdCDRvKSi2gUkjDLifBoiGT4nvaWJ4Q94BA1unT6aVcY7gEdJ5TBuMDuXv3YjGBrRjf7NXgPxSskn",
  "key19": "3y57rYUFcc9FyTMb8zM1YVXpucoC7mTLjur6kHBabGSUaZwJrjYNnkQsDdPwozQKja52sQrCjLHyRUUso4smw27w",
  "key20": "4h6f9TuMdhezBpokeKh6EVCVbYVK6sfuskKctZzKgT94Ex1WbwE51EA83WTMv2E61SPPFhC52Xscu61SeRb5DwU2",
  "key21": "3U4F1JMK1EnA5tZKYDsyZpDuuJs5ufHSbsJH6eKbqsQyarAVBndM1mEvme2JmygfT69grxNvfgHVZVpL7bT1iB1",
  "key22": "5jw8akkDZDHQVMFUqDL3tEPfPFRYVoE6wRXF8D8UE4dfi6kXzhq5nco4kRM6LFm4yBXNWTNNreCjkFeZkDiBfsp1",
  "key23": "3NJqSmBv2pxEXf3nBVVMFFfGNdQuHhP81APYHv1b2R7CZpyVBccReERkruWJaqcoxPEsJAAP2bHjdxQUf6DoSMbq",
  "key24": "WFxC4qdMkjRK5F4ZpeSW4Le1BWaZh9mzfH5EVC1UE1EgfnYHoGtvwuF2z2xXXWPPzHgkxSvWwcERVAzyznACiMM",
  "key25": "3eNzUdntmaaCBjXTT5ZyvXeVUReGhFNvpEhyuyXZVBDTGXrJrmSMkDhvqDREznNoMfNtFh5tpNBZPowD5TqjQtf6",
  "key26": "4b52ZUVKb9tdWWuZY8GTMk95SpkwJjGS9jXfdamKTMoJQsthe8kKB8U5WQXo9wBiAtt1WLa3kw9ri76ZRhqoYKXj",
  "key27": "2PPvHHFrTY6wDZqxruYqcdn9JDRW2ZDeE5b5tkGn22tZzkZCkrJ3CgYa7MpJufGoEMc2L2r1TJ2sASmxYuxynkx",
  "key28": "47xVAfFfUbv43DnMmKN5Hx2fGAhHS3jZe1xQWyTfJap61GmEJ5YaM9XeRAvR7e88EoQzYmCKkLJVYC1hUoVJrvnU",
  "key29": "5UpwUCSQNd4aw1RsRZ1RVn2A8yzoscxM4bPGLwZ3xA85hTYHanxvVme3WcgM9cy7iGMPVtAicTm1zajMYGo9LLXV",
  "key30": "24A1KHsNH3BNPF2ZiZwJMi6E3nQzYT7ZpvZc3763SXUiozxX14pveqYi59yeHCzKYCNLcckYJcQFFNQV7AB8RFTd",
  "key31": "4yN72c1SUF49qDKksJc8tXCSizicjrscwQzApxAtBSTRTEMfVyS1p9ujtUmtoAZc322Vko1P3mtGwEP5AsTfAqt6",
  "key32": "mJmHMpg3SDScNT3hMruCTrHPVxkCQ6TB5i7i4YVni3PjnsDkw8ip23VPyx2ykSQE4vuuyFDCpa5ZQJQuv9hRp3U",
  "key33": "5vLxS9oYKM562TwNLzacVm4XPJdRrkehsqp2AXi1s5hRxMPJApmAfmP4ntXyonCiQTh2oDu4JhqhQhUJFRaU3ZuW",
  "key34": "4cCBhYiuj9Kksd3TFwizs9FHrCfbMFUmGAmFTU7DHu6WckFd2jLQkkhHFHK2XomfYixwWbwWQaKkcmd4kEMss8T1",
  "key35": "5Cmk3mZvkDoTbsNzFN8dthKW9VBWAdiGVTnYK4yE5z2Tvc64i7KCXWTYMZqAfmnwXCsxvA58NsbLaiMsW8bpxwhC",
  "key36": "65vZwgsTduoLrLtbxxodtW2u1a5ntjMvVfgoG7xt7Cvzqb6yhfeU6US89M5zv3Xh96GEsyowMZLTZAt3CA5S65uT",
  "key37": "2N3uJKPK5KgmGhHv3dZfqdyN5h8aswkH51WzAvzy4WujJgaJ3osAmCg61xGj6shQguzgzca6cUjeKp7iJennVPyZ"
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
