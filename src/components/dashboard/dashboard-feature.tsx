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
    "2MbGExexXwiD2KgumX6wST32zGvhUUVgLDaGHDtc6i3Qaug7fTA45JvZGdwg48Vkm3LE4dhezysq1Aft12qnX1ns"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BsXpB97Fr3CdsgdDWnZCox8x2mZVDBf8eDgWuEeoPHaUHK7j6sWMv5tcxFJgCRezB9nyZcazjPpo85BHQR28URv",
  "key1": "3D9A2NatYz3opu5nC8YnQ6THQA4fUtRrmBiH666VPWDU8XFrtfUJuLGrUEqD2ZyogtuCv8ZnWNt4gXBKnVaM8rGj",
  "key2": "4qimpTv3runxwTuspa6wFgzoqweKdRABTjFxZS9McHgqQFRze4qsSDPGemW1SKvm9cJWAqEwqD48DxgCjE5MnkhE",
  "key3": "4BPK298qH4BfGB1XLUQ87eFqaZh6zsX8veV9zxLQWps1Xwmy5fkupEgsmVCkqg6ZjnnspZaHhqybfwf7sFDyTNjJ",
  "key4": "4oGCTQjKdwWKvgA3mQ7hQw4guyt88DjBDXiYKat6w1misxYLUkFBNTBebwSXXJiuzkzk1pcD5bTWf9rdR1BYgczL",
  "key5": "5NTttk2QrifcMZMkC9X7RnCJeozgPKZke68XAmB2oRotnocQJ2obXCZQ4qzY2aUu2vPSYofm3c8PFynfNWFtXFcX",
  "key6": "4Cj8M64Q9w6QcLpzZjCtS3EwRKreZ4mPHukwXwBX4iDSQuptKyt8FNrnR2CD2S9QHcbCotVhEBLyjUHw6uNTT9Lx",
  "key7": "5qWeb19S9aNP4zQgJpXho4iK6ueQjEyevLHzDid5Lc7wZMQeyhV5h3pjTLacLWHZUAgvZam7MSGn344Jtkq9VbVX",
  "key8": "uXLiBnk6rcRHx7rj4uBXQssj9gFVWrx6Bo1PGQNV5wJjWuEDvoKMqD2J8BFJu6htH55ZM3QccUKqL2uemTGej5N",
  "key9": "5hVeKvQ5hsysFPJNYtyKg5FFuZfvnfdxpEqYponALBc9xaKWs3VfgMgHw1Zfc59NHi3n22AGJU8h9Dkfz8nMeG9E",
  "key10": "2vhtjq9jzt7vSsLZ4QDwkGVUmF6SqiFJwyzG6HA14TxSAUWTxhZL8PASZRt7NmfYPhX83TYhxHFsieZqpm7t6qc7",
  "key11": "63S2yvTsrF9JBK6RdBKVJdL1ozkTjymbmhSFEXwKk3bz7Z6E9oonyowfoFxzdXBjVVHdLJ7HhpDpdxHX4LX6SPC5",
  "key12": "4qBsbxRk7ncTSzV7B3e4Ub2RQXge68yRKLhfQv6zr5ZyL6pX6MACqoLbRzDK66LPGN8FjAhxNyCkoXVUKq1MH1rE",
  "key13": "4KN3PUuELfiSXWP3hm4xzT6TEUdzwRnhoWnuhCJCWy7yt5Zy4p2QSL4UtoG3So5MhBMc7gDvjbNpHbZjSKM1Qvkv",
  "key14": "5U1n8dAxGkdXpt4bXrvZmVzesGNG545j7FWcwd5cCWcgXtqcNduUeFT3fseYBdT2VBd6eigkeRS4DruQ46z6GW4a",
  "key15": "4bkPMUaY91q1hbHGtGBjvG8sAs7eutuB9P8hqu63CdXAeKaZYtD1J9kEuxEReYv2oBwbWbd3vTMACqAmWqUTKjCw",
  "key16": "5M1YrZJUw3XZ8ig1yEsUBYa5koD8YkNWcVDvBQEogZc7Ej3JnUdogsJrarKjVww6ZxLLbaqx5Nkt5DqXuzQYVUvw",
  "key17": "JekGSoqN8Ymcz2FBED5BrvY5apwKof1G8L5BHLUABSmswLMsaH9ZtMUf2uk51Dya9ZK6wtpeYwMmLrssWTSsjnH",
  "key18": "4Hx2jgvsWACwnnEYA7BX9prgJBdB8xNTLcyhSyevkJ5zUf6YPrZrxiZAVm4ZsR9LYWhMnWg6nW6Rv13tPhcwHRw9",
  "key19": "623fXcVC7iVQDtnuxoREcVM9L3BihYRbuGUCU3U9svA3BdvbWrFFqXzSJY8drVHqNLFCBU62oPNGjs5YggDu96qy",
  "key20": "7t56gvbUVSkgPLFGqkpJpkmnVHCr3FbPPp9MPaedm7k7MBvM2E9NZFZawofvQVJfd1jYopR5Bom7e68yVLgnVrE",
  "key21": "2sCUECpwbjDfMSNUXqpUPtU8q3Edpe3FV3Jj7fAVi5NEW2GFsvVUM9d2SLP4Kq1moxkqacRLY2xdk7S9PDA8fjaR",
  "key22": "5P9LAZiqaKMXuDsYwHW3MbaVqA32KJB8SNZaGUUenUUhrpZX92YJyaT9ciy2PEStovMsvS4RNWeXobRy1LnL6VbN",
  "key23": "5zHafTnQtvfx7DNmZWxzyALDBqF9abcw7sJMcuo1wgVHpw9wDNo23fFfEJF5S2wuVNCHEnHnfSeQJo6aiRHGEqm9",
  "key24": "2s4zbzNjuf5bhz8KQVRnP5binzSFrP2nyRtJPyV5gBAJESCfTK9knKmA7DrQeQZbczVDEkNyCK5tvcAprUxa7oao",
  "key25": "4Sn45x3WTprNH8TdrJGwQnn5V1dMkJe81VgxANaAHCXqxGsCU9TFahb68PbNMgBQNHVpiHtXSpnJpqPERMxYUpxW",
  "key26": "4ssUxi9SS7sweQYaC9D5Nto44iMacEL8GHFLdc1bkqTpf965nSBpm7tWQWngHgZCdopbhADiY5PhSWvN3PfgMMVu",
  "key27": "4kCNnvXYeAZq7MkvtjMJwSjsP92eD5otJuC1GVMPZ43evFWSwr5qfZ24LJ865wfgiafeEX4jckwQqMKP7aTruWZo",
  "key28": "wwShqHagQjyHrAUXqD7PZL3ik5b3NiBjWfoQhagdFBznpzhR3gJyQJnNVPRRupLnAi4h4vY4wHCsQQX4pzVjCQJ",
  "key29": "5P6Wqfzdc1HoZ72GJy99Yj7gZYfGRH7SvtC9aiZvUGdYdv358FgfxQDZBo6Vr6V3zZq8C89UsVQd6s8zQYUGB5r9",
  "key30": "23nfyzXbLZXFommQtxb8WK2mqPaUAxJ2RzTzhorN8shnfEp7pHyT9VbBKzxTLRDBbc8DeqXzjvNvB1BvrEE7FDsM",
  "key31": "3SPe84vZoie37z2cS3qNXbFXWBedchNQPLcLDwWUfdBu1JTjL1fWCYGGaSyAyMLfVc33FJpJ784LiVc16NLfYfAz",
  "key32": "3SU1336m7ymK1kFyFPpgDCYo2vv5cE9gVTaC66yhfWcdPUWJ3hPc9LpVxjAwQpAN1LTvBcQ2RYoR7gyMoQDxasLY",
  "key33": "4RDpbGeTEQNaeUYbnJAGeMA9aN58SPqhR49EjUkA83H4T7CNAwd4pfiaQBz5ukx4dsJmgdaVAGfytfxTCpeXzexp",
  "key34": "2WKmwKMN6NZMtjf1KVvqw7dxxF2sYeHDzSC8hdVBf1ZonxNHQJey7zxshkopvPid4qkVhXYWEfznRnfVXTso7beQ",
  "key35": "2puFHfLuVHuNonvnD13Rts26vqZE6V1AVxMgHu1GMig8Bh8eHoyohsCpzzAaZUgTEaF7QXcZsGPqc94EZ4TmYPeV",
  "key36": "125WKdhA8C836wySEjM9YZuoAErppzxEBfpeDVQRmWFxaiADR5yyGNE8noR24hUm46wxCWBTgWYg2LffJa4j623g",
  "key37": "5AhBmk8BcchbGyYFDUnEnRTecmTYaf2EbtsaBpHwmbofmXqeD8xKo6MQBWb3Gn3oLYZhwhqVMH4ds4Ghrw2fYAsf",
  "key38": "x4q16X4EPtbxLWBoAq3G9cwSeGt8YKL7SRmBu8hUqrrKJZZHR1VQVrnuHHg4fTaaqGur745kywFUWxTbXABjBMw",
  "key39": "gr4RLx5vPyXHrKNcEY6HJv5yUo6AwKMJaPDWM2qDVR4gqhhbcWJSa44NAtAR8u81T8ywsEVL1Ytin8eC1LdCakn",
  "key40": "GNaGHz6tmriUy4dWp5HuwAd6yYV2LNcH94wijowfZqfaS6UA9g7XEnjq7gfEj853mNEK5fMrPEGwifknZiBDQxF",
  "key41": "aePfWe7kTUN5Dz7xJhA7mtTY2DYJGKpvrCuVuX4Pnf52TwKdMPzBhbmvtiY6tUGhPC55a1tfqgWFHTfG3qpDR5e",
  "key42": "52G2B31bnvRhbFNYhHR1Pp3wrg3rz5RonuXzxuryDJz1BVKKTqqXQCh4DYpxkKQmtvyGoC5RDVBGgwzkz1Z4EEP6",
  "key43": "4NQtQWKZLB8UoDnH8RpsnuMK4HiG28SwDVUJrjFZGobG6gAa8ar8j29Er2ewNJsNXp5DRrz37FD8W2SrnVagDigx",
  "key44": "5kpJkxEn2pUhMuUK74vY11atdUhNJmXj4pjdh9fMik1c1aUPEU6uYdR4CjAXYy6nHaFpcFbfjrrSANND5ECB6iR8",
  "key45": "2hbXJCE783HuJt88DFoHtoqVe7xsjxu4PHzt4T72nzNbiA1mRhCv5o5qJ2rt6azsjcjHQnzML5CgoJyet9FhUCmS",
  "key46": "4QoJ2Bk4TfCBze2g53khukDc7AZrU6mUbbFL9XAv6ioc7zTMUcqyjvbdwnukAS4R6RtDxUFhTZHd7mqek396Dsp8",
  "key47": "45jsAqvYKhLjn1JHo1bTthtSCB8HGEXmnPSBvSQQLqzK97UBNNfRfmw5NvHfKKnoNA3WFD7qvQkcEHR4brQuuuAy",
  "key48": "4MZKHs47oYQYvu4tDXrNXrMeHqukd3RwJoj8t7HUn8w4CZrGaUGTVRyGGNU1WMe9FzQQbkxD9z95dEsYtkiH48VK"
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
