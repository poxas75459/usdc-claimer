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
    "2wJQHCaSp95GeJGs3PQUvi9d7QawABBLZAt8FuGu4g4LyuxpQmGAaQsa5oEB9CJTDiRNH1jSVFGa4uAMHrZrhYL4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47Cnh5Lo97Du83LcFerWBKDnVjkaJUgVBJcPAv7XPs7UzjPKwXbjbqEb3gRzQYHVoDLdjRj5Y8MmVjyaWzP86kho",
  "key1": "4RKedCqna18TxcsdyqPC1SXucofqTy9VgqHQkD8V7wPqgvtLp7TgNgiNZhN8tmZ2e1xNgNAkJ8FaS2sT1JETjaJ3",
  "key2": "4xEkyPRFqwizQ5563UWV2f2RtymWNUDjFqjcjWHTyUHxyLKPEZr3nc5wFBtA7CT79SDnk6Lcqnpbyfjp83oyNfoF",
  "key3": "MeatG12qraSMp1mjxKNGDy9ksNZGCX6zfeSRsrvcQ4PfoAT4RdwDzAFbu2WiRdp5v245ZfWbcxkTRxKRjvMQn5J",
  "key4": "iYtoJkVdUQ6jjqfNfYju5EKfZZmu1jqq4fdp5UuywocysW5RDpyn2nx93mepC4TbamneC5tx2CkgneLLH84QsWo",
  "key5": "wVjK1tTZyLN4mPLejpsA26FpSQnpzSWgJoDZEXzYyS6G5xZr7DP3PJKzMuxB87pjnPR3WkXiUYQ5yzzcbdejYDG",
  "key6": "2uxFMCeejTLRXtyUnm7bLjYCX6EwQX37MpuWhAuhiJSrkM9bp7we3t1tPiwhTQBUJLYXnt3CnaHTQLepYcb1ojd6",
  "key7": "5ATWwL1eyRH9TtJ3UfrjzC2oqGKdTUygnXiiQ1BYinE5RxY78Rmt3487gjhW6NsCsiyLsLcjjNLuuLY2uaMVwxzx",
  "key8": "5jMp5PYxRe73Stt5KnfcoG7dFSNaBAL8wUtE9MRiuAxUW5DWFmNL3wizg6fN6377uFtX7jPoTjFXNyAbXqfMRBfe",
  "key9": "2M96jaZx62K1xF7kdLDbWrmKScHCMRBdnQfp1GYXswczGsHgm3FWPzbYARYXuXx7XLaeLrUZxoDzmWGVFQin8VLf",
  "key10": "45ZmPCQoGxTuPWumja8N9uw7Z5bKgcvZk4Nfsp6dwD1f3QppW6WPNiR3kZxG7UaMcMRZWshDVHPNbpaKVpUdsuH",
  "key11": "63tCa1sHTVz2CVmapf2dx2pb5KqPi8d82uUcgbV8knYoHJvSBNrptt2UWQSwqhh4AV5wxjEfEHUQ3uLcKqsYK9EJ",
  "key12": "5PHyxccKXC1w8eonbEkovuxaL5FUyvuDEgf5pe1N1QHrMJmAgbqmvUAeMi74b8oGk5duRKQvhERebYquwWytnroD",
  "key13": "2xNhnJtreUjFtk2W5ZciGNr8sGJdVwzjd7WqhzzbTKhRePSDSm8zxdLiAoiyk8uzGcjmqzsmdypj4J2HWrs9QhAF",
  "key14": "t3y2Jmbt1JpQBW33TMxNENScfaF3EWz5dZ7HRNEi7EBmxPbwBqEzyWP8u2xpgTbWwvQak1CYTwhiGxv8h4ry9B1",
  "key15": "39NY7Eq5Q6fp6TsVCuCK5XF3ThGToX8nhTdLB7D7hc9uauJTAxdumTATRHNB1Kq4uvogr9mshwRoxqxY4Gg5GB93",
  "key16": "4bm2rveXNEdCZRdLitdj33gT7517ASo78nuLb5fBZb6pgMy6h3T11aKLqurDkojAaPVKA86usR1JnJJELdA9VyA1",
  "key17": "2QuhsLRgRV61PvWNYKEeuMF79U97R7kzhapNyAtcNspzD5w8oj1Gi7GzhsWtysNuDYydfRwYRYCL4sU424eS82cn",
  "key18": "67iGQByEq5qN7JpxJrX1HPVXG3nRqNXyEzWzyXj531c6ciyikHda8jw3fe41jnPdft2Es71j3pEiWmAQeX4dvU3t",
  "key19": "37ZAgdLDSTerH9WSTkrhoLtnrXHDYzdT9jL32FN1jnysTvF762cDY1HA9GZMDLHzMmFLiXbSnMYZWPyvpabxGNbR",
  "key20": "PJSapicDXyqty7XNh4oDHYBWWeG6MNR68VrsHPrjzsFWqBZUTHmDxQL3fggpHTDnyrDWfUnvpu4VYowB2wsfUFF",
  "key21": "45CcSs4WV6Fao9xyqZ9xkAzConfazCwcNt5iSe4gLY1nkaSaQkxuADAWdK6UY3uN3skTz64v2ptsCjhYkPGyaT2z",
  "key22": "BspqMMPsVwUnnJjFhk17Jhn8JC8de7PtpUQLEcFTL6yUiy45MakN4SqJszfgKcztzt7yW9C4pF59Px26dWjHMK8",
  "key23": "3zQ6cW123RAGEPewRBtTEMgYKzj5EciVKy5Huos4Nq1sbEWntghFz6N8PAhgLkD5wv7YpPkocnAm8YQFvwEFjbrj",
  "key24": "3KEByuu6ZShA3bmv42BMBqmUPMYmV6ruKvNALQKkB2UXQvMA5cSrRVvETgZjcA8gJoBn8YTLFgybHDSyr6wS6oeY",
  "key25": "5761GD1xhpWRpmL9LdFC6iHLoWoCWDWRvCWtp4TAYbYBDKWMCab7W3JFCWc2Y8rWE976Kws89GrRdK6GM3izoLuX",
  "key26": "Z3iCQt2rpQxpSoctENwAhwKvrWvP92bxn5K1PccH2vdgioc9ptJX9WTCL8bxCiV7oVHA81rVqxmYLUBMrPxT6T2",
  "key27": "2J6JNyUzeA6rnamhAC46UrWR9KL6naLdJmm2vNnGMDXp1zamK6i8ukrhoDVmn3m3NXv2H6N2iGAVLqaBkVNXG6mR",
  "key28": "2hi1ALNFysNUphM6i7WPfDqXDyYe4PS3xkrq6DemJ5fYQuS3L26zuEEPwcmjdGT2BFzhfY9gCjedWVYoPMy2dA3t",
  "key29": "PbSCGuKVhpTWHB3YFq48AFH2bXxxZyqp7aCA7Wh9Sd4jc4ySf79GekCmts4DVw8PvQ6ebzRzinBux3uuJZ9C8Q3",
  "key30": "3FZjW7WiNGBzxp6cq1fnJAbagb7oyJ9bTVhC1jPJg9orkbV52F88Xg8nFfzUYGpiVtTDKWzo4ibtb4Ki5Zk9AbdJ",
  "key31": "2emqic6C3nJGvDiMtF2HyJPadx3yTFQwCiW75GLC6Ts7tWZaebzpYgtLy89GQtwmxLVkh6ZXrAkivWq3GCskFidS",
  "key32": "LuE6UrDwanJ8JEhDeJPbbp5LRnXFVjSNbQMaSpEC1wygvBCxpvBN2QYifW5zcJEuFCS2eBbPSiNp2zt3iaCp6k6",
  "key33": "3krc3HmppLgE8G6ukNmvmVPz6bRTFDCK5qUPTNFkBtUevLKm89cAGjEhh9mRTsQ9C1TV7Pe5F7Wiw5djqWCpyoWy",
  "key34": "2qmkwxYce6ovpBGB58csLgg4omzE89zpXhRBXkUBRHKUDA3uxWDNFdJwuHkZf9wmmGNPTCemfiDRniqgoqmdmepv",
  "key35": "5nzmtTSXD3qCa3Y1zHXz3aaBqABkDYCEuWAgenn2DFAEQvKKs5VHNPaknFkLF8SLVMFFNzmNoUcR1vz7Qhm3iqtF",
  "key36": "rDLjMNeuJhNKV3EThj6ehBC62iasT6CNZhD4FEiU3cpNfFsX8QNZMVtBnVTqoxE8MQpsHFDhSMCfxF3Fxd7HjTP",
  "key37": "2dZJSSXU6Rt5L95cuMStXz9YEdrVWArByHz2FM4xSTCt2Ew9aT25U7LmiJo288G5amrQBzr9fkZiXtGQ9JeeoE93",
  "key38": "4TZUGWbA2ENJrosSswVtpQyt7c6C7UDSYKsNkezfALFKxqnhp8jgWq9oARLjYf6ihYhYzgSopVsxuYnwBgx9Ypns",
  "key39": "2KfBYbYA6MeTcVYEJRnzwnXGDHGA7FpzpvjCMnpUm95YBaGSskLDF1EAFgP3WpeLidBECrzYPdep7ADaos5ojXXR"
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
