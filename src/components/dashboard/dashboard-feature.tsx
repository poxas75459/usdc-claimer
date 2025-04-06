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
    "3yDzh1SMEHTU2ryeaPQ9wdjGZuJDGXq9aREa1M6VE3xUia5ENY2RabSU5NSFZrxHvtE2W8Ck16xZPuz7PirxD2VF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dZcy1yv1VK1u4Hfwt7JTR9grjsrN3Zcg4WyLDJGFzPnJk959iP5CNE6GV1uWXXpQqg1b8ffqD1r5Kp6YjkSZe4k",
  "key1": "5THPXGcYDutudYqVrEZxpH4gLMmkfbrP1wBrXDTKwNtR5kXrYBdsJ4qsdxnbZpbSPD3BnkMb5y6SinhBLd3fGHJr",
  "key2": "22NnmCQMdaHZU1QbWeHAHfcAj3s467unydBrbGpRd8qmcEWX5s96mLJvjJL39BkrfBmhyzKDgzxEThiHnHrDwa6b",
  "key3": "roXk99MadiQ7GotJteNjyH3S4W9Qw8VCUTLQ7FbNg1q4n7R3eJ12avZamWs8VpzqEKJymZQfbFPod6WvuVq9ogC",
  "key4": "35mEK2gcJEpNhafiqKdi26RmAZUQJ94SzZ8iMm96rnp2A2gCqr3UoUQWRdBNxgi7goBPLjMPWUUsujZ3WQqG4wJx",
  "key5": "2KQwJAbJSbbbbMqWwqeB5t68iQ7bP8JNNf9vDPvqRtXfXSpGTVfuVe9FGzH6VhuZBhRzNPUagrupRJqWhALrkBmG",
  "key6": "4RpSPgB4HFEDkf2rPpDLCJk8y4bKWJu4pKpfk8EKLEjPd9j6FHdXpmK8TB6BahfPY9KTvZExBKkT7u6xPNXrpF91",
  "key7": "5nSjvqMpjcXTde4M2RD1iwj7pgLz5FSixwXNXVWeGqCmSALehh6wKFku6pxKbeKGmAiXKfUfomrL2V6Evucnyt7",
  "key8": "3GnXJw4tUwc9cgjeUhZnEYgYV3mBF4dPqW68YiBQgutLgACurimEuFCjaYe8Sq9MyM5yJCLJvpqzGdqtfAxTJf6V",
  "key9": "2xvQcbQfNvvcUjKQZrZxCGMfbXn7Kc76qoTDMKbW2JBeMf3BsGDGd6jfuCLwo8AR5UJxcyGpxgTgafkgdcyqd5b6",
  "key10": "36MoZSdKPNDdf7ygnoUZSNzHh196nzqCL1DgNbk9KGu1GhNdeYaa2eB58zaXt25sSx6nnGkmqiFckNNatR6rwRAt",
  "key11": "3isSPm4BiHMhNB32qgBx1o7ayvtGMcQLoy92RuZGwRCSVtcptCnnqjK1FoU6b8zG2nX9KWF3Q4ew7mvboXZcp9BL",
  "key12": "32ttAYK7fZZi4Hj2CkAfnvXm8gAFx6ZrR2xRA47kvxz86yejNsbRCXWpwEKA7mSJtVMLoMomEdUJ28HD3bLkpgRL",
  "key13": "3Tup8Sk1gRjqR3QszZiN2LTsDX8ko5zt9G7gFDKN466JrRHVnawVH9E1HiencGYsChsoKubqGEK7NikzqA3tajLx",
  "key14": "52Mir7YrTmz8NjhjXmUQR8TXxUwYejuZ2FpHr1h2WqftwLnG4scvSoYYVE36ZRD37Uthnj7DWQ41TpG6ngsYmB4m",
  "key15": "5pEchoaRuXC7Y6zJ7X21bJu76ZXtCbYAUQZHAMPQv7wrxG6df2ApasDevonPe3Qp81YrrUn7Z9MF3GshPKaQV2mY",
  "key16": "2ox2TkbQWb7fpk5bo5YYwHJLMY9dkTp8bNKvNMHsWG1DRGNChSvwRkWFvrTCGoaez8dpf7HxCBiCLmEEAGkxFKZr",
  "key17": "2UEEKwrwVeaadC6JrdBqamKUhCzwhiqBxKWQEGX4A4nT3Gjv8XSQ55K4AeeVohMutDTLUPg15TkhB6tiJK7qtKs1",
  "key18": "4ns4HCBaE1weKa7pHBTQk1EZmonqNUTbcwUGDSdyg9KdpP3sXhpDjb82p52YfCRvvbSVtPb9g1TLogWsNsoEXVr7",
  "key19": "3Fkwvro4awmPVXeueVcZXYPaHPswSNYDTsb2hB4TiL4gYn1JAuQfAJFt9fZBvPQQyRNCRxV8H11CdYuJbaQWji5R",
  "key20": "G2TBLmJrF2RxnY1jPCuwCYC2p7BvscCVnd5qGMa7ETWapzskVE4QrkNh7ZjFcDfyxyuUQiEmaYXcJVi45P24d47",
  "key21": "yPgEjAFi3dkRzPe1P6LNHtsAUJg7W37UxXLJkWWSkfTVPvW3CmhT55SowZ3ok8gVccnAjiBGXKrYFh5vSkAbXYG",
  "key22": "5yNxj63a4kiR3ku5uUnpXEXeck7hKmxuZKNQWxPhbGvpmxhuL7dPJMzMHCWaN9yR8BLqzuMy8bTmtPTXVjJY5yWN",
  "key23": "5uQ6x43vVao9X6WU1dr4N2H33FSmZr4a1QxvpWjdGJLKZ7SDmzsRWC7cPMsjHNtM77FD3jY7Vg1Z7P9avifT9Vgs",
  "key24": "3VBmdVLaW4233dn4YCtLazjZWW971LEUN9R4YVjnVLqCxLYgKu5Wk8G26yRPLu243hLBTJt5ArbDqUSigmbYnYHK",
  "key25": "2aW2CeYPogtVPcEGHgbrPumgX7KKxrprQQXrrBHUwSRGnpPGJPZQUPdDmRX8qJKMCYZ9FW2MfQu4sHuPnTdaVJpt",
  "key26": "517DTRdqiogQSCeoJwQ1ceXooMr4gxv1K4nwaRkZx8Y54eDqvCgc7xqeHj399BzAsciNxSMwgtZVZzGTfm5unh2o",
  "key27": "4txkAueizaNw6m6d8cwgSUPFdp8gamjBZuAWRks5ne1Rjd8fS5ALENx8sn3fKcHLBbMGzXqdbcBU7EJvicsheTa9",
  "key28": "2rnj1vW8Gfw8o4qSbZW6yJL1zH4Gxk9VNNC5thsvkymfXFpk9GGfE57XZxKmtGtm2wzufoG5RsYGUPQ3Th9wbzAo",
  "key29": "GRAop57dmCegUwM6famck6sJ79cbvB3epNUnaJcmNGcS7XiRWgaVzyfca4aFeFddfh9EDyTzk3QsVRphBYxn7Cg",
  "key30": "4WqdDFzRqUiND2NetJeft9TNqo5NcooAGFts9QaDtkS3vKVF1T9TdarSjjp6XwNA1vCTbaFpGiN5Vas3g3qS94rJ",
  "key31": "2N9suGHTzFnupbU9DhSE9mfhMDbbNnhz6aDiynoSEdxmyZZNN88njoL2KWtr7iK3CEKdbQRbZmoyJ6mmWnXCbbBc",
  "key32": "4bYyaxPCEHMYwkYk4fEiUhXPxAGMtxkjqjExHGmZz4Mfa5NWWKBfb8ttEDwSDvuZinqXMkPandnECXsyyEgGwedW",
  "key33": "3piU5MT9Pb3BXreRGQpZ4yRc7ffAh4mu89pv5UF4yDkkNMDFnYSJSRfFNzPq4LudDMCpTEeiLZabR2dn5J8mBpT",
  "key34": "4BF824FxA5M7zAep2mWFfu24g6t4zq6F6T6xxScGXLs71aCFatWHuGLXtdezX6FSZ3ALDyJm9o8Htyowa1TgneyH",
  "key35": "5EVgV6dafZMNCipLmfYL8j26ChBj7qyBuPWg6MQauGJD8GdxBPa6QdzLkm2L441bAmgCUNAhQFHSJLWAV8Ynotx8",
  "key36": "2hozktErgF5TtpdXCLup8aZTeacVUsYm8NRod57hmGXrWM3zDMyN5XP4wv18dA6Ao4LfUxfnQ5W5iJMqYEHYiSTX",
  "key37": "325ZwkekuwscMQAUXJRJvZxm4YCBU8Zi7hrR7bpMk8iZGgAYLQjDjHrL2anXgf9zNZGqBKNXe38h2ebb9VndntiF",
  "key38": "4tsrd7ALXKVjhmhTJiba4qeGac7E2SVwAf16FVEo39LH51jWJFfMsNSPeqGTbXerR7bnsWhY9FptQ2KQip1GRry4",
  "key39": "4UoaUB3zoKMyXKZ3XDHcZ9kj4JM4Y5J41gxg1MiWsiJBgbBeMnmiuqSfCyUKvmzM6xx2riCbyP8tz4WNwKdRtSni",
  "key40": "25qSzcHQufCGujfbsppGGoc7fqyWdTbfz3TR9qcKQhAVDnKVkpYZx4dgfBV7XuxyVo2ctnAMD72GLyfr5oQT5DDT"
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
