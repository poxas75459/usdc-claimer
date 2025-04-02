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
    "5grdcUQo8FFG5hDtMFF4cDuYkFYeSweYx6hznvyjdDujQ1dBYop7j5jHvGPmSjeL16MiHAzKJQmrmpC9tr3TTTAX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21JnC2LM1HH4yFzyZmUWUL8BVbnk5Cp4FsTp9X4zyWWQqb1VMdzp2zWS6xtrVMFVw4Vhrop8E5bjnqcZ2BZcEvW5",
  "key1": "vUpttspWqgNLySqLyQUWYPAwmRfVjxu8EJHRPQkaCmvZPrhbBm1fbNYNDVAFuHFJKHLcy7T7nFw3dY8bAYunvqF",
  "key2": "2NWzGUYnEAY6s7XUnRc5G4a3hMpxda85aexLz1bAfDqiqG1Ac9fUPgKvv93x7K9sh1ozuys7dC8LiZioLeaV114g",
  "key3": "3yNtUmyE8t4ga3bzvcN1qM39GUWckMpVLUAMQ6qJzyQWPUZfxZ8guCepYUMT2UJKuowWqtbS7zEjfbsRade6Qc1p",
  "key4": "4XPtVhkP3U4aXFycgdRCBFSz84WQGAurHsb5HEdxxLcZxtYmRizJm7CjBZfZk3vsyJPFQJpN4jE1ztMnmGa9nNYL",
  "key5": "5vRUpQYXkjU4FvmNMGNV8r3LsovcwCL7MY53SEFc4urngz46FK72VfVaWohKrbuacEENiB69cmbhETaAAXacpXqx",
  "key6": "3392aZKeP3kS574kVx8FALTaiW26iWuJKNJWTimo5vMcdpJ6LTmoo2zSTYbjzP6L5bPeBsC9VE2MZduNw2cJdGUy",
  "key7": "Tcm6Yezdv2xztfzPRfqJVoxcfu7FEeirZqJqjKTcxJwaim8ipx1tvFTec8FsvvkpV8kqCFG9ZfJgvpWAFnwUm6S",
  "key8": "5J1TUy9ymWxY1KRnvB46twUpncnVuLFxe3ZuGeiT6wAjrDJDEsTcGZzZC4WjuTotiWinWczzirYJbdYJEN1ihef4",
  "key9": "CerEPaQp1EY2gbYPuJqyTh1v6bVNrbT5uszz3RjhcRwh4nxEdyqsCAyB9215qhkrtLgTQotb2WMpjoomFEX6k47",
  "key10": "4JWfYVoEha4GPgUzwxJY2jnYeYWLwEE8BVHwEMkvLEY6ojWNdpYicqNZFs7GS5Xw9BmDgYY7rDS2fTrPZFdFW9bJ",
  "key11": "9JUoKPQu2SGb8gH7epg5pfzErVyuTRD1Whmg1coMQJAMoyZqdAU61vmaB3b2U8tBKnqh4bUqdfswGmGWMEczpzK",
  "key12": "44VzjZj8h4ZoLDt6YuDFp6KK2VywBBi38m6cksc1ANY5iELeViuTVxcKzmnUtKFuxRZKJEnfeE2xkcWdNAzPjHb1",
  "key13": "32i8ZttRyQXuXUiwsbTdW6nMo8QNj9SHLKn9QmQ5PdoLggM66BHczWaxEFUQedBdAMDpAjTU17ohZvdzjWRLvF7z",
  "key14": "4WM1Fg5dHSP9hj3kSwJnQkFtbW2APEdCm9o3kWMd69VrgUc8WezTsACfy78XugL41Q5jdUoJGKJicTs4iNTtaPRJ",
  "key15": "3dd26XPUDVioTwGmgLQ46gPABopbZ4SAJLe9Y3xfJYJPkGdxbKqKyWjmVLYrm7AAMW3vUPp1FstnNhoVHD1ihuhk",
  "key16": "4DqQab3qRDtF1SjptVo52Hiu1fNJZfrun1t7ys7ZnYuLrBWEYKHirm7zEXXpgwd99oDKVtQhnhGDVzvEt1xxFZ7a",
  "key17": "4Vzudbn3CAnHijpTznwTXngYYLSTC1HQkG6YNhC4jm196y9yhC68PTBY8vPbp3BWGvxiBwo9XYjXNi1ZyPCiMk3F",
  "key18": "5xokvrk9or6MqntEmXqg9gXjGjkD1fGeWHuscy8JhJsEoAx6vM6B9bDM6ud6qN36KG2kFDTHSiBdXRWETWXGmQfe",
  "key19": "3n8y1QomfJWmTBgay1aRQj9ZXNm1nWB7NNdfzg7HBySas5RYeF2begJTuxff5V5VYdSr6sCaK37yKBvyQ1EHPAct",
  "key20": "4YZ61E4UhXQrJwcPUWFDUEhfziUtrM97ffTErn538tSbie4Cb2vVwueNjonCHYLfqhn5iUe1juhgyZR4ZHZckM4h",
  "key21": "2ASaYLysHPv7FV3YoRfBSn15vVwiTDoAYN78yiXVbgnMi7pvgoNt7caLht4PuqdDg8AiWh2ozVLkgXWjmdVujg8E",
  "key22": "3ZEe8iup9Ut4hrKMEx33u8AYyRRy2BDoJyDEW3fo8yL2U2bNchpMZb6YSEn4T9gveoX8HmfTJ6LjZWre3zTzE5mH",
  "key23": "5XXx34tfhwEJGRt9BVBWnRzNYzPYRL2ANmgpBPSB5rcGJLUVmPFgw7xrGRuWxs9KRLVJWrHoA8cjykqMqKSeaPfN",
  "key24": "4CFiYXdcQGrPgGvsctZi6P4FsbwewnpHx6FKoastfw9JJyhX8kU2ry54v3nV2rAEqGbBCYv14mQKZAzuBrYQ7fk3",
  "key25": "4pfzseCumckB5YfuK9GddtkrQ1qA6QrQQjYJFh8Pn3KZwreviycwuMQk7HzZGcxw97BoMZJj1yJANf2BdQpFUziU",
  "key26": "5b5GFnEi836odxXR9XwiuhX4kCr63wmjCca6dW72qiqfwWAtCRKRoiL5P21mQ9kWGRxchZ9zW7kvkUJWekUyGQWk",
  "key27": "4CimNaHa7mbBvakb9qjmoBqBoKztXHxbLGCPjTxBHFkw2QLnp13a5WQuiPdpJvqdGEUyAr1zLfhWA9FW95UBuFSE",
  "key28": "4y5o2Zwe4ge779HU9s8qhjk2GwJPhNtxPFDbuHVCHjUPhNTfZ2ghQAVjVZd6tvgQdpRGBvEF9Y8FnTD4wPPY2GAf",
  "key29": "ZY7zv7c5bk6Bvv8P8892RoZYZG2meCk6jLHfhXFLgyWgwaXhpXo4PzvFaUuMR4F5owu6jEXmw2sXAnJRPFgyzH1",
  "key30": "4nuBt4tA6xosXDfMK7B4npYGx3fTYfkZZzDKNHZdPrDm5jGDt94fRFihunjWoF5WxPJ325L3CfVAfsKBa57rgfvL",
  "key31": "21aB3CsD9nggoLvdEp89ZNrqAD5vPbYiQoMYR7uh9DpWC8Pd3jaZMhhtjGVYrfFKn6T7bvDDP6EATcFSZnLdSMPR",
  "key32": "39kAeKuST2i1x7hyFjbtdKPi8PAuAXrLq56Mdx2uphavfA8yKtXod7spK2zCtSL1r3HNTZyXmPFo66fCG8KWYn4X",
  "key33": "b6B4Na4WqgXER9edh2BqmhvzCYm5yHZjfLweYKCBUZ5pJYazuCZcgRnqeN4JfGED2qGgh9NvD2Sh6iXNANXsc34",
  "key34": "215cakKGZer2WxkZHauwH9F6nbdVZfDmSZ9Vin65b7uygp49jNPjHUi4TPXSnyKGp294Bbwr8JEMWTsFx3ijXm6w",
  "key35": "W2h6GKxm2N6GowbLEDRQQgLnFnT6EBkoULsBFGvHVAwHRrMS2JpSMwJXGWNowToZyo8sQQuuShWvBQfbh8ntMUg",
  "key36": "Ge7X1dNqihb5XUAFgR97c9nSskydXfAtwsKU2LP29Nyqw3KFwpffJkZGazrqkLaBYaddWYgGeDJC15FceTwGtQp",
  "key37": "2bUdXDTnnzE4pbP2DYH26MrnGQ8CSV4VVpRSy4L39oLVFZUzoiDzqHkxb4VSNSHdpzKECUSbhqPAUfRu4id1DTkR",
  "key38": "5qmccB1WysJHmkMfBmWZf17yP1REtWdJGFt1XNkqfrPas8LdNsvhVaTgKRTQSx8sADtChmh7nuZcQPxG5Saj2ZJ1",
  "key39": "3UMGZ11UhkQRfd1A51dze8G4vxSd5HWq5T5eC2LabRwLa2gW4S3b4VqyGoeXzCtMpxzb6BguvpNDJxHLiMVuV2kg",
  "key40": "33Mj7iPwdn12rWSdA14znzSR7ka4E2v4wVSUrem2wMRZivsMAPFtw8Krik38JAkxKL5cQpkzDTzLkRsVinXdzpyq",
  "key41": "3WBeyzvy64sK1gDLEnPYum4rpoe6QLDTmAeS74NCpoR7qBbWgrXd8w1JAgzKfdctDqJ17bdhBNhD3VHeHFycMoj9",
  "key42": "5qxP7T76bv8sVoJuUdKoz6yHP6Bi1Kxn5Kr93p6DTmVJ4nRHp89oQrVeaXjpmSX3AAZSC4rTYex1cxE1pTCTA6ae",
  "key43": "3mDq2yjE7XuCv6Qv5iUyHeHJZ2BMgzRZjd8bS9WBRg3pgViy7Xr6GaB9LCCPEmCC645LR1p568sE7xXopCQkL5UR",
  "key44": "3EYA5pzRFBU1tCV6yD5PjfUaPcuJngghPeQ8gBViJ2YzyuishTL8ToqthqTNXRHdpqghiTC8oLrcZaoY4kdnFrmS",
  "key45": "3i7LrnxJ33fQWYth4fjSKEvGKQ9cwdHgVENLZHpP8Yt2exZs4uGpkaLoCWnfigb75PuYkpqfsEExTCDUNawjapkL"
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
