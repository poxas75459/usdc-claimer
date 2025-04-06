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
    "45bK1GQW7tFMzHdTKZXZiHahoxbksSfXdRwmX5rrbmHqMQzNdpmpY1tcWyUDEbXWhUE45ooHe6BpMmVfFZxLqicZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XHFTHLa5bEmQVtxV2C6p9h34ECvWfhd1AoZMqaAsZnwXykNVZVpE5UBfBm3gDEbxdBhgfrHJJxZ34GaGkNNRXqN",
  "key1": "iajuTwfTEFouNByUdNQuESXPz68DXaPfCSoxpT1Evzwxirkbd5T2ZujJJYckrRFUzzyqfKVk3MYfYnEqUEfDVmC",
  "key2": "3wPMr4ey7SVSyyMHFDS35bhTRLzBvCnEWcuSpwAvz5NhHcsf2XNMh3s6kwrS6FN41yok2Jtrt9yhgmEmRo538PuQ",
  "key3": "uLje5n7DC13x9pqNTCtFZWMVkuRXekxVoL4x7HSyhmHwy54T5B4Ffpvo34eTtCqBrivRusm2MQMRpfyJcBcvz5T",
  "key4": "3Vfp2Un8yo9BvbdRmuxNh9qwibubgp2FCpYzXmff6SdJovRFiPma8uNfVVnEEwvSHd5udUJC2VpxcMWepEqXSRZb",
  "key5": "1NS1PBJb9VDdRp7eBGi23xihY1fF6qmWTYs2QgNYpTCLyEZQBfMbtaWXnt7DKX1zosHTa7GvBNrmToDH1FHuApA",
  "key6": "4sGK3BNRLh6J9bRtd7RnYsGTAh1e67QoB9tvzs8SGjPyEiyWnWSpb8Rmgx64aVQiMr7NqSAmjws9bDVgLwQKKRTw",
  "key7": "5wGecNQYVco3V5Hr6CKJFpQfEwaDt9qoSGzJoyD7JwBQQmwSSYMM8eswVDQanAjbi6SVWeXQcgstbyMeKA6p1JY6",
  "key8": "5rKyf2BEGun4pXRR2Tr9cNaatxeQEYuR91BH2TPkbvWjBgArR8sWqY6wCHFzf5R7YCD9FARdw8VD4qW6KvduxxdG",
  "key9": "2PecidnKFoZxZU7WMUUKr5W43rF8rY2wiwLZjNA559abkah2PeqxkkUtsX3Am7MtnyrLtjp9dVPLLKsJLPZFS2uz",
  "key10": "4JhXKFJqrrfc9M4BLyHQxKBj2x7549vWYNKdruizvvxUGDYUbut95tJDuvfUmM4pq3jczAdh8JGhimFRM9g8CcCv",
  "key11": "3iCBPqrAaZroEFHnmtzAJaRrojdfrF4JUA6Hm5mivX3nGt6fRCg6iwQtKaKxYcPAsm992ZzJWZfTwQMsA3JjjUw1",
  "key12": "4mKCsGvegEuEkLNRkcG5aAn6874eQaMWsocsayhFBAwqcqvoYdh7wfmuwxnuuWe8t2WfejB5aAR7B3gDEEWLTq9E",
  "key13": "4F4Q7dBcps4Kfei8yAo2kt5itNd82HzxJiRJJATPKJkDSfvJYhVxuPBmN9yzjUdksvMgMoux3MvuLa5paFFtRs6C",
  "key14": "2DC6CD6Mco1kaCETnQzcfsNvBZYjGUX29CSF1cd3c35Apy12dKWbBxaCufwDWLdC7BddJ1evSD2VLB7PJrCfzUHR",
  "key15": "455gix1DBRLzfgQyFLj4cujbf5iP9aZzQCUnZCf7rnpj2dm3P6rzT8NbrmPyARHGnxr3hZq8gXojBF788kYAhm1F",
  "key16": "3bN69M2ZakLktBpATgJitg9iUjixsJ2YPuEp8na6tNrCooUoYqQezrp2hQfW67BpiF3ZRKfkbnRg3Rmf9WbJyCnk",
  "key17": "3ciXEb5QHoQJvW8mAxQMXK7rF9ADfKBGUFZ4rkBMQVvfosRdcoPZ2zGQuSMGh1W7UCoZZTcSfYbdn2HRZ2MDwWXp",
  "key18": "ahB6TVyCBT2eFmfsUJyn467aTkRsRA8Wt1MNEEa8Mh5xECazLswY4k1woxww3v6n6he4G9d1fkr5v1xYEULLPxL",
  "key19": "3zmMJ9V6UhrANCGKoZUTthhjjF4HbCF7DLcwgJQagxax4qr91GCu3veJWW2btEokNkLygxCPvWSn6vj3RAWs3TLh",
  "key20": "3UJctTox8svXrg5Ks3rKfWPZQTb8Bvh7LGTNgQZJWjJPv9YPU19xUnuUcsdtnnyD8gV5YQ3ysZSqQAvkBzhqcJ6V",
  "key21": "4YjggzZKdspVQsbzTEdiLrHEtyhYRtnrxaFXbSPmQVoHLGAKVV9YtyoszzKmagDATsiTfYn5D1TnRrzDTyksVF62",
  "key22": "2W79yTJnNWn5Fy4fCy9tD8SR9XjinfEyahD6jj63FBvc14FPg4yLRWTHywjZqgcEAs5sbVjeN5nt3dZ51ALU7edk",
  "key23": "2w8aHyHCMgj2R3KXqqUtnc56XToUN6Ze3gF4M822VVB9esBSVPU5KR2CT8a14qD9kyL8C82wWzbfZsJWbYtZVArp",
  "key24": "2iJrpLjwB4yrJZggPZw4FwtmAW8Vaca16Uk4NpvEW4gGyTkKkkp8Hihf3L3yvxR2bCCRsmj4eyaPveBaXaJvXroS",
  "key25": "4iuT36BxGRrtgf8egcMELiDvKzYf2JBLAvMRKt52UevF9nttnJ4Ed3msfdHzn6dWSeGGvG4vnBPqjugihAG1fepN",
  "key26": "omavgHBvod9teFfK1VGiKUx3LUiCtqmg9B1hgWq6R7k3GyEeRBXohynTrcFtBHHgbCHYGNzv4dLDg4rKPQS4L62",
  "key27": "37Npc6UCGLRZbGRGcNaFfH4zQ8X41xJfMH8kgZMYhTUuoEZ1x1o93RaNJfCyYcdehwVxouVS1Sz5XGC4YRq2Z76a",
  "key28": "2XeTBqgJScPiNEZZtx86XqLfrv8BH8z6aSgL6VJkg7qzLjsBWxXbHo6zTm1jCFPhMNqwgHLJJaM2zraAkPKFkmdP",
  "key29": "4CJvpG11Z7shTbys1AiZrBAev8o222YozBrBATmvV5mse5Zbpfh5Wmxg1ugEwHEiwdG11xHaE3tzT1S9h25xFDdi",
  "key30": "5Jz1EUFCc2qq3GqR3EV3nnxx1CDC1W7yhZtjXwge7TGDEBSEpd16P7N65QrjHtb7ZeyxGP78rfy9mUFDExnzsodu",
  "key31": "4qXpN423bAzTnDVAoTjyVkxD2fvjwt5iiPNzDD2qQTgGMwe5bJi7SKYCuUn4cw83H18tGt4aAwEhjgXhhJZyd9BT",
  "key32": "3LB8heDjKvwAWv9uizkX63P9HUXYyjXXNLR6oUcgZSxQMD6AkGkH8rtfGwZTnGjKwcJATctaqrQpLrzemxzxwYN4",
  "key33": "45cZyRVfFMixihy3JXskqiwUiQJEt29nCoXx6j4GzYnRofnvijMH56DoxgVtih42Z5ZZJqPmghZ51cTfzAYsQ94P",
  "key34": "3iwJUHETmix7VZ2xd9dGrwK12a77Dto592Ln4iL2ZDdcCfvWRDXQaSgxUWLrYatM9bepsAXGYMBMvzKRcdCjmTnD",
  "key35": "5EXkbkXfbcSWRdSdFayvxMULphWNNfCQb4cKgxgzj73fiPurcxvdintTcbbF1VovnoyzSE7s9CsRQFoKoiPjuLzp",
  "key36": "5w8cLxxWM484rsMUTyQSQin3DjK7sjGn1Y4N4AAZEbiXpCT8NQvM1BHr8jvAG4wZohjEaY7Y2E5cBKeezJNKXxDh",
  "key37": "KAzQzDwt4tei2ijgYSj2UhF52atgrRV7yobdDqHENQwcMdXeLg5qM8C8j7YNW4E58emGTZxvLCwUYjRiMZTM9Ty",
  "key38": "3ceM6ZMKLVTxA9D4CR3JU6qJQ7MRhHaA5gcACPWeXmUAa1PWhJkfDg5nzYGvARZuzxDhd3KmjiXkNfqm2SP4NrxK",
  "key39": "ysp2ikwBKX3yqj4C6rxqvZZBY5LRkh8piEoDvwcnza6EdsvSzXDxpPqnG8Rzqvs4efu4MWKVD285X52qdmoxbGi",
  "key40": "5h9ct9s6HJKuvtuL4vDRUvBNv1Q9CiyMf3YudPGWjGwQeMgYLDKKGY5U4jhmRYQgeS2wjn2sX9cMiFgxeqhsCnv9",
  "key41": "32suBoh7BAZwa9U4es2LRoeXgTc65gKk7iuDeRpupR2h9z33prdqJffVWnCbLgFVP9tNzPBJLDSgaHnip1Tj9jTd",
  "key42": "5MgPAsgTLeHDynMwb1P6vHvL2zdK9DR3NaVpfZXB4PAqG3QPbiEbagTNRhytUvGTnNbHAgHBaK3Hgr9au59cYTXv",
  "key43": "5fvGQoYDRVyi45D6HedVvS59G4XZBkLLmBXSYHZBTXzN3SV6TcdaahDvwzBWLY9qrjSBNWkLXA3e49h9od1c7prs",
  "key44": "2oy8a47aHswbhtgzp64fYuvXZayfn2KWd4NvK6z9GeFb3EA28Wta27YkPx4V3dLGmd7nmgiNybLvGwf5Udccttsk",
  "key45": "2zemXg4LMB9yerF5YtdipeAvQaSUcAdm5Myycgmm16aug9SqMWWgaHjQtwitoqLsSLLdr3JJ7re7DQDFn9iJLeL9",
  "key46": "SUPMjvi4H5pqecFqNrYJa4habpSecigPkUeBwyjNiSXrC82BpMnAAbttHkEs82Qnks6AV5Q94dD5XoC8b5HSqju",
  "key47": "3Rci2x2kHUfdNpAdfsvJDFF1JFeM7FjwmoS8PpnG1XGpgRBzD1c1ktjzKFMyZdxz1pH6AMptj4go6BwbHEiEA5fo",
  "key48": "5YZvcVFU2bQWg5H5jJ5KpPfNHiFhpuzu5o2PXbgtDSTvnBebV4HqGY1pjDrGKqKsLcneZS1ums7tAMzhj58hCWyE"
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
