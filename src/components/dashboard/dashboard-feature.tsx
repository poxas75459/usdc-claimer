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
    "2h5v7sCZucHaM7uTFHEfHdbDcpVtfmgsMnGWpVqeK1FW37jReJW4s4vCpWjqwLDDALa6KWUxX584XhwdQVa9vVbg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fK3hjzK4XBTTa9cwNVmUPbJaaicaSYNDQ2gobQaWwTu22xd993uEvPRW3Tq7PZJfKNs3jPoAihj3saDWyvWFkR4",
  "key1": "5LRgDoPR4bx9sRekTBs9Y62TbPv9Ysxs5joTeVBQv38wmoSMpeRhAkoMzpsT6ZRieAaqRF54kpTYip3U3Xx5n8WJ",
  "key2": "2gRaxamsJqB59FHFP86aXg4JwD96fPM5Lmxvw5fZEzTTYc6tRf4dMTBoi2ecxEYU7HAQHRtx3ea8mZKLDv54i29u",
  "key3": "MerweeEBKvQgXShAkccbforYTFSzJNiYMVskvTb12NGMr4hG4KeWMCswqxreNc2pNqhoeTMb3jJQCj76tjNk5pN",
  "key4": "5EsPUtK5BWsWTYKyLprysKX9jTH1UPCYAwGxidsDokbxTzH8UeQr8BSZibAMXr5mxFTNMRtCa4QM4MhabjP136HQ",
  "key5": "4D8W3yWgtvcaMhEWz3mXVGwwshzzZU5HsYw1vDTxjWJ8ogdsbdGTzZb8y5pYAjBuFx1FBiHnUEviejwBrpt6btr9",
  "key6": "5jPWWTKQhGxGLADpFYAkZ2PRXNRRsJxVquWxoFa8f5zCryRYA1cMw1VG1bEYuyU14SqLyufL1SPrN2HEyYoBfp4M",
  "key7": "4dX4B2hPQcxnBySzYDE7ucxyo32zyhSgnTdejGJZj7YFvqon2LzDBP7NX2Tuwy8RQUeTrrW5BWFUcTLN4pN6mzUc",
  "key8": "5UDJ2DRZefxeqpFUsqjYh9tnxQpVSFTDVyh4mCNcCjrCpfcSvk3SqfTyZZyS3qreTFNsoCs8EuBWxCQE4rhyGLCj",
  "key9": "5Ch73tyVDU5Xxzyjxko6GDbXfyhcdsvnvji4UCnzFfzQ2hraZ2hdwKa29u47aZ2CnT5hSWXuxbnjhSLbJme8sstW",
  "key10": "1r6sRuKjcxd14nLge2vFoTQ6jPHdP7AtZfuRdh14DNX5BTqx3H5js1hwoBFdhZHcRiVwNTt1E4P5xxoooR3CYSH",
  "key11": "4Tfy9LRjBX31E1Ht3YQqPTRBSeS5PEGpM6HcbJEAVLDAb9DRyDd3UuyrqMpbRCACvQMHYyBdoxANTYEVtyQShwiY",
  "key12": "3MHt3WYq3hSnSpCDraFtdCM3og1gCYUtoB4fnTnGxrNBERphJsNt3LqQFGETKaqQmxBFUyu9rtkb46ryvTdG1exa",
  "key13": "36KUQJeaahnNRgJd9rNmXr9SenMXhZqpnGg7EwRzgzZci5rB3xLyZcErnUouJpttzNYwshySpiK3sPUdHbrb7qSx",
  "key14": "5WTp6sJe6fcPaoprPDnCbejA4iTK62GNECvCKZxXuze31exmzFBWt15ebagDjMGfwLMq5DYmbe9v53ydQucSiewC",
  "key15": "LSFvTtv7NM7s24mtQ9ZkUyP7xuWPcKWVNNYx9d4wWUWP8tnhTaTH4GsCcLD2khcJecgZj6CUvBf4KAUFPxUNrTZ",
  "key16": "47MfXFPyGLBrZABG99HJX5kHJyVZM8yhqBLsfXX1VvAAGNyRTMn79KTH4u8Hz4ButWPV1aepYBN1i7EQ96WXAdoV",
  "key17": "5hRguWqD6xG7UyAY4gzJxWD6Tku5ZPCMocqbUZNCxL2sdYsDTfBDj5gh4mwzXHfkfzNNVJtxNLXXojB9wXE46QBu",
  "key18": "43T33Eph5nMpcFUZZe38vj8sL7urUqsT4UAvL3aH7fzFQsEE1hGVNpDFvL9EMUcXXvwwPprYiBvEThxz52aAqbwr",
  "key19": "56SfHrN3rFfyEDFrvkEVhHaTNxJJKB3Jy8AFnsGjjFJfW2fnoLiPLKSYiPzgHFZavJhxjPjEzcuBtneRJ3kwYND3",
  "key20": "5AF6qtPCFAJGj9CQJWa9eptApKAvCsExGEW2uJY2RKynj6gM4q9JuuFTTTgLEoVpbRZyp4KRWMDW9TqPBsa4uCKo",
  "key21": "TvW1oJX3dgmejj2cNhKshPJ8qx7PV9ZBWz7U4q6ywooSEYoKA4g5n4oixw2fh86zz4Mu8JpyucEJtZKvKVq19wc",
  "key22": "3SpyPh72wgvRzMXURmzMZypjvaHdE3qDvDGCx8wgbKUnumFmwsddbGLzaEAKQDaPoFkMp9KPHN9AUZVa8Qph7ysW",
  "key23": "BZQLm6xLFuLuvJgVoQF4yc9FZLT9j7mECLyHm1Y3VMDef8RuAzELGD32ZUPYeq1pJdrNSezLDFRVVpgrbwC2TYU",
  "key24": "5dVRrWK1sos5caCFejckemWLsV96UMDrW8UYVAFvFbMJpMxiWSWVx91ukpiZTbDMYhHZfuWSiiHH5tVr7XuTc64h",
  "key25": "DutqcqWk4WbtH5Xae4GPkRyK8YCahquhYYHxc3hNN9eej6wfsQiF2EUFaJ73MduEq848uBrCSXUh1t9J7b1UmJn",
  "key26": "4FKoLsuqtrXPSM3QPuoGcfNe9QKUYXz3LVqZ8KB95cww59f32tkSqTQ7v1j2t4PrMBpFzd8ouaq3PBJrAV5b1uny",
  "key27": "ocn97LEJAY6i27Vc6WSZyULjA9HAyEdVLYx878KBdJTS1NZvvW3VB1MFZh8A4WB1Jo5YCgvYMp8wyneiHHaanV4",
  "key28": "4y71eus8JnoFQSWazGspG1u9WaGBXK1sW31nbKD8QrHLWkVqSPdwgxY8Bv7pt45CnDSKBKQderu1Aw4wwn9m1QUU",
  "key29": "5snwiJDMcYqAZ76Mim3Tpvh8qoaYP7yRW4b82KPEZj7snGqKykARW6fjhtyrrzbRC6QSAZ5iKUxL5i9EB4xs19c9",
  "key30": "xnVXHsqhcVgTFGvW7Aj3vGzvf8MSQbuNTi1gWMGmPtwF94zto1sN7Rf4pc1foWSj32p8iWCuZhdosMN3RbTxVeB",
  "key31": "2f714FQQtBWdUBdDGQcQkiwv9KzraXTn8CbV9mWDUVG8wtUcsWQvuXL6jwvk1UUDq4YJD5MhdSwUuiktb3ML8JZF",
  "key32": "2GVJ7y9eTSpgGVGQvkQEucqNMcGz6gXSDN5SsnsskxSFX5Hs6SToXHejhrv89sgHgBgTrNUvVx7R2H4td8AVWpu1",
  "key33": "2DUcdECUcsFKmFnXgymjNYjdatQYcK5JSzGhB1mEeN54ZxUueYe1MrpchFq4jt2LGS2NjTMQkcC1nbKdGehaVv5V",
  "key34": "5niXfyKdWPkupLujrAn21DPTEQZTpG6DuUCGnxBB1WtdJSnWZCgqgYJj4D6dR2m2MNJ78jwyQ1Qd2PHDYPn43ngW",
  "key35": "2MCFWmDHFJFiwHJDFuTrzD7hMH9L2tC8w7FjAvjS6eWyWojgiM8tdmATfrHDcnRwULJrAGuv2oJZFEzZB7kd71FR",
  "key36": "4mePsRuFtfjQcyqFemxfsVkMdBYi37Fd6QffvWFHBi1RYGF9cigqCZxaRgoeyqF9XzkLo9kDm5mVhAooY99HHnAP",
  "key37": "3hQzmvYMMgjcugRvHeidKetsMtQ6iKd7TmBTcxVWWrQQrM4SFCnuqYfGvQEm3MiFxhGZEEA27iK7LXT2kr2jooCK",
  "key38": "4N3cFbwmG6MVigg6SZ1rLNk2jEznissJtJUpuBVZ9ry9DgJswzueHg2sD47fne1eijHKVEjKY5SMn29MXkZHwnfS",
  "key39": "66443YbtoQYD84c89Rrw3t6As98xCUeMs1iBKojmcwiTCxfu6J14P9t6g2jLFsqHjHgCu5ReVxwPc78z3noD23rn",
  "key40": "3F1pe1v7cDtJY2Yyh42mQvASfBJfLUq2j7naGsiqSUwuc4aPNj7jixHAR9bjnHuhEtW4LJ5tLfUqnKDJjkt9hs4p",
  "key41": "2ToFL2YjCVE9DF24fa8wznvSMt2gjvotc1eoUdDwmgL9Wk8Uex6Q9nd6vqEmndwfRfvZUSevLrq2cSBC8ghdafiq",
  "key42": "2trJ8ujgLvYQtggtob8RvQkLu4WQ1MBcRqXL6eZvRixRVTf3XckTaXL8g1zvAvn1sATu3Nf36xpzrEXBUnh6UxrN",
  "key43": "46jVw8dUUbegi6kgLWe12ib4NvVH3QMWwG2P4Fds9TNbESsDyVb26wZUZeqhZ52pf6zd7Z6zS6MTe5uvqasMLRMh",
  "key44": "2Ri9twy32ESfGQFQN41PT9qGqT56NkfEQYrQMSQUGsW6d48urupX6YKDihdkKNAt9Zgy6KG5bPkYXm4FgDKz8XL2",
  "key45": "3ZLwfdwcgcEe3KipXpVPFzMDfCMB2Z1v7AAhi76krMQPmXZkJpsn6Z3JutEbpjzvdRGZqjVZVY4dHPpoTh1M4ESx",
  "key46": "U92poZBZfqvm1t1sA5iuXKoh9HpQjjj8jJs9iFo341rSpyhsa1y2FfFoGL4SRk1EWnP9S4Fpk76w54QV3ExZu8S"
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
