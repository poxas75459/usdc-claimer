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
    "2tmKvVfv7d7VfBaHTYAEpq7ovgvvbBQ5B9SvkjWdkwSWmAQH7Bv9JGvSoM1vpJoRKXCFrq1NmHGMmUZKbZFJbSaX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33zN8tqkFs5qdhHLHig3GZ33w1PtiJcAramBeW5GBgc8L6HnmEPpTbLPnsqspYYvo97bFbCBi2MgPeKMuwFkGXop",
  "key1": "2VhUw9KZrrfSg6z55gVNTLMF1oMyeGnWprEdHNiqWPKq8F5EfGcC5KFAEVhS5svKRTmCezTzfqKjRHUz41MhfG5M",
  "key2": "2Qem3vnMzegriBXB1GSr2We4j4jWepkDEEZEqBt92qc9SFiMAzUcvtoMP5Mzh2Q46kVDb3Gbc1xH5pcdbs4hGkCH",
  "key3": "3iY9WjwstFUBqEocFwujShLFXGAgReJaPoqJNxHTkCU4twoxohwfHCy9Dgx1NUcWfLGnWfkLUyMKFR5TfqZozHEg",
  "key4": "54PwicQ6Mov5hyUTvoegJzmJk3RabopVnnYKWRni152S4cdT6L9xvYFH9pTr3kmUymfF7VSxTn7QGjci5EcDEqu3",
  "key5": "G7HMWZAszz6w2b2hixMt5JikKmahSK9MAXtyCBwrCeHtN55KNEeNHm39DG7uwM2BirrJNFjcSiNKLurz5fTMBvb",
  "key6": "2KK1omGkovTFeTMcg1NarohzPw2pmLHAwr2tpwfqMUTWsDJq6M5Jz1ycKcMENm6kVPapEJNb78ZQsXvpS2SFd6Wv",
  "key7": "tDnQ5Pg67t9NwGRPFhnFHwSJEcfjwCpKBb2fJRM63NENKnwUHRAGJdJfpw4Cbi5S25hLGi854MREoBcLwFv9o12",
  "key8": "5xW9WHuyLvwUftpoAAdzYiJVdk6zHqBpnMG5ttDuiTQi95Xftcxc9i5ZqoNasEWR1NrLw4CRX8zczVEBH4dUje8Z",
  "key9": "5BmBg7rAVS6KQJfGEgcoJxvjnUe9DFGeKsbTS7QDJUSoYiZweJShLw2HeiBSZfbB6gwQMATgxrbjVGSC8gzB6dZF",
  "key10": "rfb1d9fPaASJMa8z5FJzGSxt7sdW81ciK2Qy7vSnLJj1zg39azjCu4H19MuUjoaMTH8qsqdMdJfR1AYyWj9SXhA",
  "key11": "4r1QHRWenRAtQ8FK1eBwouEnps6H9riwYgJLCB1nmWvnwbaHJhfgVibtzHr8ZGAtxAa2kc9rzNaK3KXABWBiWec3",
  "key12": "3gRrgNxhjzs44EgiGbFVEEQmbvxzMN8JHwJq1v4Xzmu2EZhESq1WYVasp7e7VjhgyJMzuuCUDRozBmFagDa8ahuZ",
  "key13": "5sKLT7CxEFDx3n5jt7L5juKoEkJ9TySVCzVViX8y8dt8hzXTWC2bRQqWdgGSnj8epcAqKHg8wRxgFvW49psWoyUd",
  "key14": "S5SHMQMsTTmGNztmCgnJbdmxggdVbFzYPUg7BcMKBupEoKznfLaCyTUCJbuDTPaEcqNPD1JaQ79g5zhUTuenKBo",
  "key15": "5XxBveygrcQbNZ6tM5rDBe4LZG7AQxsD7jYjF73PimbvzEA8Mf7cyps7W6hhSHhgSGq8uf4QnPen3TBB6fo5fWGN",
  "key16": "6513kSrJpRfPvtnZSFRwr4TQyqp5dTFxhREeFoaWceeD1qj3bomCNhXmmk3JxP52eJ1iKUvDZXM1dV38WhhxddFx",
  "key17": "jQxX2rjto1eGMue12NHbdWXsCCUZM5jsJtqPCfnKWUjRSVTGAa5NvdTiuS4mJ6fGpRnxKJFRnQhBw9dbmkw588q",
  "key18": "2SXAZYGYBSSTskWZ8zfcXJcMU2TH7TCeWN1RnUhTfhFBKVRnGTfQiFyXpEEKQDAcTL1XQnibFYhL2WueYyn4DXxh",
  "key19": "3XpFMWvPhCEDJNT4NT6uaCY2fJWUArxj9FezzcpLAX9PHhLLwQ73WVMnWS4iKebDeXUZ9WWqbhHTLwdgKT4fYzig",
  "key20": "2t7YgSkch7qtZYZNwRUHWcRctLxuQWBk9StUCB3b5zHsRwQ2bk8FQ9vtvJd1CQ7CtWsLZZnRUHZzGDY9YVy7LKxq",
  "key21": "URx2gVcx74UxtFFE2fXSLLVdfJPgFx6T6TXdDZXSEkwrcCCzgwuF8xVinNKERcjcYFGkGpDwSVQxU6Nw9ZYaR9m",
  "key22": "jms1HuCZH84vPaBCjdGCPY9vHjXjx6qzDgSW3u6Uu9CZptveARZwW6RaeP64wjwBAUEiPGmeDDvSimuCjnXYfFt",
  "key23": "6HihkWtFBPzCkGbUAt9Egh8oNptbCBoqxNAX43n88EvSUjJocZPgsRcM66G589rXFo1w2brradSYJQBadYr81xh",
  "key24": "2EoLDz2kg2sDSYofYJrkjdLmyu4G2t6CKtrPcXRuUXMhLy14LGtPGPE1EqdYr6Jks1YhYdv6z1XmmPHrMoeRAMMN",
  "key25": "RyTFJr38UvQAmtdctEHNwyFzqZ1xgsusy8xtAogsGDC64F7oiN8LApNuXoNXQUQdRXzbu5CC5rndFZFELk68wHT",
  "key26": "nSPyeXarKEG26cs1AWzQeUEhci2f1xQxDQ7NzmqjEsdra8e5vFaCUFP8gdbAVUv7oMsb5a1PB5xmmautqvCfBdR",
  "key27": "3Mfu4oNkacTsyEyuEGPH5EXoY81HSou1YR9ZnizQUbYhPjDu7Fi4NFArGnxNHbEbLC97Ek8A174bTmBx41FEamtx",
  "key28": "2uEcyBVE67VKDASnvdLZK5gDqWmtJpNmSDwsups3mFcTgK64TZS7C6V2PQ94CwR169MHeEKzeFCxf5Y4XBHARKqY",
  "key29": "2Gq36miShcttLmvMNe4aSLxmpHNtasJe9vN2gFBmsB5RtgzcUQYpN1NYQoVyN5phX2XZhC6io3y6kS4DsPn2qHU9",
  "key30": "2Yqria8gggqhw7jMXnWd3GMRxf8fjAUaqv8ZrwYBqn4Yogha8LD1TWS8sGMccbvC7kL1eUS3W9GDgVo5vmEYYL2r",
  "key31": "wrpT8wemUJasmysX9oggfMb5V9QPbHVf2N6EwjHA5h6zs6jSKVCceKUvWBdcE3AkNr39C8K9KVFuyYRHJNFr2Cj",
  "key32": "4jSFYGsKYEXxCenFWn5pDNvoVEUnB3cpSnWtr2NwDinKYNbxCJwMXGyNFSXPowW5r3bgVsLuBFK6mdSteyhzyu6B",
  "key33": "Q1MFKewzf7joNpNj1dRdtzy8tJw4RfTGyxBE4pE69mjoAcn7By2vbUChnTfaSZyG7GqAKf6pLwi6R5g6kz4g6KU",
  "key34": "3cRF2iw4TXyTjKd7DGMkUDQx2H7akVy9yypzTBcA8xvpKrEQfAEHYbmJuPUgM1aeguEedcDp95Z6EMBGQ3Wc431",
  "key35": "2tDXB8qXZnQRtfPGHfTN3DqGNu5un8cQJhK4rQ16JvoU5bK1hR74ryhC6itGcstDbCmX7JmzEYMTXdeRhas6t3v5",
  "key36": "2aVTdwht4Hmj8VWEbV8Xav6N9L1ahVmEgjBTFpLCCcCgGowqb2EHTURwZq5cHiWM5VWSDnucy7rd77K8z8pNKkiL",
  "key37": "23QntVCiNuosmtzrp9Tu7vZwXFmtikkXNPK2G6FumbkpJNpWWppSUfv7CRx3xEgzueY3GMQiaFGgZ2sJwXe6a9RV",
  "key38": "uYBLxbHKxEq5ocR8f34BKs2aTmM1DdrcCM5LdcPdbtSyJcGyZFixVKpocyM1dUFgcBxpBPCxN3pFZxXgyp6Yj9Y",
  "key39": "4m7P8AaWb85qMrpbBaSbJrnhtybuc7XCARcDTV1P9Lrmd994nFUwmbunj9vKAfngE3fqrgp8vbWH6aN6N8CkA6vv",
  "key40": "62BmoY6g7hDCv1FMuDhL6Ucfd48Xq8YHPm9g1qG8AKTMKA1o9umcs8XA6XYu2vFqoh2vbQA4Rijp5Y8Piqm22J1K",
  "key41": "3UqeWGJFbUhRdgCncfaXD2xHLVAj9sMuP6DYVZRJsysFUNNpG2koJuS55EbMHrpFpndWSkNK7wahDphKdyZiZekL",
  "key42": "MrSuxM932GK6zuHa5jWmRHBFXFuNxnFjQF71m3Cj4v6bqwAZ1WJMSQ6E2C7XudXtC1r4X7mk6wsV7rkyTuUYxQD",
  "key43": "5tQJcTQcABTUQu1FFrgg28ibwYnJR5WmfdhSQptgWteVHuFV6n9aQHWuXFXHmrBx8cd8jHtSkPzcebX5JuwKB9xr",
  "key44": "4kKfrEqXtypfvRTDwhxzv5FbQoukzzaQrFEry8ZBc1GeNmqwG89XrCvRgh28ZUSV6qBHJduto4DjWJomTpEMPTz6",
  "key45": "5zGCvSWB3HT8BsSt2eZ8HtLP4b6mu8QjyHi3tH9zUZQQyquTK1DCFAvEbeKqe1yVw1u8s57QSHvwa6K7tpCNUfDL"
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
