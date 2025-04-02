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
    "Rn1Mh4HQYWb7Re6CyeAHKGkm2Gd4NcYVAGMmFXvvEN3aaoe7q19j3XoeCycVqqeDaKtnthfR3JXmMaBnycGH8eU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AJtQozucVR2g5GqYptggHHC11rmyCYg6pNmqrYT8ViUba8yL2XBMhPah4UxYDLad2LaWe46NTb8faSmK8QXDKyN",
  "key1": "TR2m13C5aqbrpLo2Pmtmq64B27Yr3t2yVRizsnZf7C9MN2JBLjWpNmJRe5r1TSBuPaFEXcD6X21DLJQYMsTBXsh",
  "key2": "M8oRgp2wGD8RFcETkgynwnnfWX2gHzWFgyJK3uPzoCrU1sebLTsS24FVjefGV3qhABD9UzPVbnLqFm8y985txGY",
  "key3": "4PaTut6sZhcZy1dr8JwVKTHo2Z21NGbQJBb1xazyriJgRXr22fYY3Y7ZDdVxah9XWhmqtiXZxpYjLHVrhFsGga67",
  "key4": "4y1e78KmAuNUMkne5T2NhWqMaGRtBrtDqzbmR2Xn7XhC49az6MriwU2EP7boGcap3mEmYpeEzdVr19zohNiCdYU2",
  "key5": "5nWXD312aGgAgDgkPFVy2oQYtPDnkYULoqx4d1wkPkfSPyHa4vmoRvCQeUecMYT9nWQKAw2WTNMAXQc5N2R9Lu9B",
  "key6": "3nesmJnySWfxV9GCoUMcY9bUc4rBjsSkmRaa2Vw7w49gq61Hozeuo7icp3TqxX4JdFxh5EfM4fwAFzUFXL7fvhNQ",
  "key7": "3zYNcg2bqUYtGrSYH3eWeMLd7cR8UYj9QZqzvSDiDaTmK3rWktmRViCKHVRZwQykNkkfka75gVzTQKTzF29VaCRc",
  "key8": "5ucCaBYmE53vyzJGELLTU83UVQaqdE2jeNAKr76JM4vHe1J6gvXNpngVuiewu1NT1jHQ1ksM1tG2zmGTSG72vFyN",
  "key9": "3LSL9BR37tiQAjk99jKjw1cVLgxy9t4oy3niMJQNAihCocUZovGgr48GRkA2Etxjbp4Nd7r8hkDzW9zfRgFxxZ6k",
  "key10": "2GMQLJqJi21RDbVJNsWnonrAfFozScsRTMsMaioVDVXBPBM7XsdvQJGwZxaxYne5NnByJktZLNNKABxsPqafNjJm",
  "key11": "4bYDJ7u4jHqBYYDSey6JnJ5hMsiumuEXiXz2jiGBDDWB3Wfm9GA3ALEQKcpqTycFXtPVD9htLf4G5XTcXBMSZxQg",
  "key12": "3j9d4KQM92mwVqMsqeLHReeV7dwC3dN8YYX24Rf4mjGcuNpFB5fARKZ7bcjypRDyi4yfTVNcQUa7b1srSeHK3yuM",
  "key13": "4aNKivAMcVKY6ExVUFWtejLQDn2ZGZtn26TPTm85E4ZQeWtwkdEQw97kQEF2vk7JvSi45pWYrZ4c8Sd9GeixFipa",
  "key14": "2bKrThWRpDokc2E8CiptGXWZNfXeFNZ9jqt3PdXMNZ6yEc6G6CScMLq5bWTdupv3T8UuoWSCACMFtbPFsyBTACfj",
  "key15": "5suivFPYBh5WE66Rh9NSvj6FKTCN2dxoAvBSWfG5p3rmDCHdJZJ8tumCvnfGnrRtztPBx3CCrctf2g8wqwwQJ2cz",
  "key16": "2A3UMH8YTLqmZy7fvpqW35xwzuubhsWgfnFdWhidqNhr2i1gCKvaGhRRp12wBNxFpSHWYDcYfQwGgDg6GnFZBXg1",
  "key17": "55mUxzhRPcvDBX7VxcGxXLGN8vCgyw41PSRq9dBBqiF1xteEMxX2iN798qTfhZNk6y5vW9tMkKu8rEbN2KpRAuTq",
  "key18": "i9yfebkvmitbXiJCoCosFpqGA97rxcrjMnmCd6T8rkdCRzJ1zZuJCWC9e5FrASrWFEJ5kb8mcjHYbbhDQJLLu8e",
  "key19": "5qofk8Xy6nkH6HcHrBdWcB4i7gpe4FHemTXZVydrMDSxGKZSZvaJUByLpnVuVpctkTiuQRh4hyp3uiUYbAozr2eP",
  "key20": "4tDGPW7rncPoxftmvwpiozn83sUiXgNvd2vV6Wx2CWc4Jqrs2hyLkzCr3iNnLhKQmQwwEY5bWMkF39yMF3fNWDWD",
  "key21": "42zXo2voo2CgBewj3EHtXXtyaBJKpG3D5iB3twPkoCcpLmSyK1FTnddnRjq9ErAEpWsc3sR17UQPr4QAqxxVgzH5",
  "key22": "29G39tNBzwm49ACCFnMHastmwEgJTwMeUMCsR6r6JvvAELaSseRhfeBtvquMaTA6Uv7R8kDYkZnTnko7hdDECcYU",
  "key23": "rc8j92sCZYJcQHvgkHTFLPH6peEAzs8zfZmwAq77zdtKarMpLn5bsGRc9K5caovWckmM3jccrXg96WCiVGafKWb",
  "key24": "4HgF8U1adsrKaiKHdhr2EstBCozimkraP56bZzu1ppvzCF9oLUpcyA8D4WHJRN7RvEPPY1TytjDEPGupLCfpo8Sh",
  "key25": "r6qG5rzBLsmk7JAhzSSA226cWuvTRRWNvFvuxP1WViVo1PBRnURrK1oxZg9Yjec7mPXhQLMswryJJbFzPsrfssU",
  "key26": "2PSpb97TK4KF3eo1jNjqsh47eTubNNzziQHd9YG4PrdBaNZPS3xBp49U3AQwuJSfAVj5JBuj1DSjg2VWDbWiPo3",
  "key27": "ZWUU5Dw63Pg365ejTqu3EiigJHMT2dwjcKx7rC1PWenbA4GB6rSSctEoLY68wLH6aNgRCwQqxaZKLz4ioFowmB4",
  "key28": "3ZweQwce369SWn4HCi6BuvEmpoLZjBASRntycdrBvC8cmgfuKE9W3zCRRB9HFLZgo3rfMSeDXEX3FuqD1oawqGCb",
  "key29": "d4vZN3iDWm5f3fVqFz8XTupxB22nrBUT8rbDTHPdDvZT3MQKhBabmRzpUipDPrKSjYt3EdhVY1fesUxRBTUhVNQ",
  "key30": "2quczKVgDzW2ga2Mz2xsmbGvy8H5D6hubi4E4nLdMc78jAAuwLUpCmdZswFVYCedx6YT6ovBSzbkvkt8y7TTKCd",
  "key31": "xnm8Js7dSUTce6HUuUuVAhokA7q1u3U2zKKFDi7ixxWCgtjzQJbkEDk8iGXQCPbHoVx75LPJ8m5XqYH8YapTxbz",
  "key32": "rgAL8gakwSibufMEcJLMGraCbGVeWg7rkJBFVshiWs96tTVqNCz2e16P8331sKj3SFHtf1V8qmi4TMEefwASLnP",
  "key33": "4H8T42WkWKAygqEcSd6nGuZqt64hfSWpuo2vRBbjbSQVAiUpu97Lj26MWuPicbVni3vphEd2TNQDfsV8BN6346Ca",
  "key34": "tT7BWuaJK1vNUNmr2JEZvBLP3wmDfoVERAvwUiJDSEukCR8XoJvCBuffMvjNtEhbrTzg327QbsoxqWp6uUaAvgu",
  "key35": "39DPtC5Sx1vP4eMrxZjgvDP7nLrXrcHWPi29H1mzA7z6h6TgpS5DMK1QCoHBAkz1dMfMvR38rYzqdAkxP9Jc362P",
  "key36": "61kSkLz5vF75topadqvzK7bj2YGwhF1aFTEr1dPFZBo5fjMWE3uB17aur5wENc8d39rHzhwhM7eitNCNfhYqKSVB",
  "key37": "2UP6zMb2v6LH7nBL89bvMmqWcfWVY5dDTKMMRB84iciSxVwVsK9aPM3Sb7y3vg9hSqoKwBV4i3xoPDtTrscz7G5x",
  "key38": "2CUofA1zgMwTA2riaQwLh9HDjFjRgdZgMrbGTy64PWd4cwfVvYYYmtBYevy5HsN7K1ps8m9F7HjSUfGCoG83tUKC",
  "key39": "58m7vYihprEjGTyYCEz5jvXWHBo1mVSB179wDSCdXRMQNgAruQrs6FeAhKcgW6tQLMxiyT9MkWT7LWsU7w5YCHWK",
  "key40": "2yzC5db2cuAfKTtVkmtAK3sgSJ9Rxpcm5jBhvcS7khs6CfKSrQf3K6H6HcfsMr31bma1HAc85mUggGtAgNjJAEe3",
  "key41": "4HfdeeXpxZpGHX6QeXbMwS598uNtAzsZtXnUS4dY6eStfNLtr6EVa4sE71oV44YGPYEYAmjcyrZa6KXb3zi1D7Vb",
  "key42": "2RDwqrKqh6uKtVGVPAsa7cZqJz3XW8tCYSxwbNDAkimmp8JW5tqNBXymVkQJraqG6bB57DsebGEQK3jbG7UYNL4Q",
  "key43": "35jFofnFyj1rNfaoG3nssyJXKuoRiA7ajBxS515gv3uqrnUKP7BTvuBXmiTTc5FTZoXRsg1boWYx1v2bH1nQYoEh",
  "key44": "2N3sRZAfGwzFq14zxWDTz3n7VsgEuTktvogTuYSGc29TCFbAbqZzVdsBHNsB13hfUqj6hG2oQJLdDjb1o56Ek22K",
  "key45": "3kG1EhHdUSBVQMxXFA4fdbu5kUrrEQRc9oUevGQqGwgw1K4XzimdXr5nZexk1TsfU2jmQ3vDR9txET2ZjnX6wVtC",
  "key46": "2F1NqF7XwvtRDbidPtcQMGBSvbEzRSxLQCYxHf5HmSASffLnQzNR4j6oQZDMdKS7Rk5ia8EW1CGqGU2FE4u1bwDz",
  "key47": "5nTCMPR7eDDdhsPUr75EisfHCNYP2EFvQE14k5V8mcvY6oKB2M8CbgBFPDW5nepijBpVgPKWoDjqysr7atGMZVce",
  "key48": "3i1T7yBXC4RKgPuz272R8Ut4qxMbGup5acTizTxYecub3PSz1h2FJUvwrfNPEpQvR2bksBNVt6vpaVzUvUZzkx3U"
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
