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
    "5kHGjwhm7tVpdHKhMsQix7JvyFc8RiJCycg1emDyVURU3qND5YEyr4wAfuX4mP5NzzAtv13GPS6i2bTzxcee8M5a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GAo4xH95WbpNs1u4gkdQ5tSTL3ZGbs6Zd6PLB7skeVdtZSga7oyxmEK2nPiLPLuo89sriudxBgQ7fibSTwLVrcB",
  "key1": "2HUXV1k5qehtBH5cRz8E7aG23RMGwkn6LL7jppGBw9sEhGK74jJFBH5ahhFmjavPA8mB1B3DwwxhspYBefn7xX5G",
  "key2": "JMt4bb6qn4tZ8dJqSHHGfF4tPG5zXDdvxNsdvqvsPoGHFJBMQacP4Getr4zbEDTPCLSE5JLkJbss8rjzeXpDqmS",
  "key3": "2L775zPy1WAjKpUwREDHXb2BVom8tevohEQDttJebWMYdeVSaAvGZ6BZ2zRDY4jchL7EaF1F1mZhYsMBbFHyyrL5",
  "key4": "4bj91qecPV6ghK5cHvsRWpeMrJ49Kwno8cagt4HiufuAVZewVKFQJaFRFs1XECET72z32ZBddd9TJ1c1VbueyvXF",
  "key5": "52ZJGrA6PVrUojk9tQhXqSjsVbApoMHqKWfJYXKSsLZmccy6uRHdoGVMxam5tcg3DkQnXAYxGJJS8ExkbssyyLQB",
  "key6": "24KiCu18sRFPjaqcex2bzRg8d3c9Wz26QXipzDNjcw4nAHDzcx5sCTxxgKEWa3jfxoGP4DtanvF6TFffck8q8RT8",
  "key7": "5yTDWJsfZAf4bZxzMmfQ5ndL8CSVLdnMWht479gMyKZiQvG7xHT1aHzPeRmPER9MFX8ZZHsp6RCeQEtaNnANTVjX",
  "key8": "4GCXgVY5g8dwZ1cVkDMt1MTUbSSh937SiPxbUyenAiDbb6kQ5TGePzkSmGteoX7ySMNauRXtEn9pcQcFHSUQDswE",
  "key9": "5nCxPvStKrK42Kec9kS5yEKD4weFJYWDaG3nRXgJLcEsKuFgarqiDaitYLotaS2GMfie1UxDke5K5MzCFQh3L7Nm",
  "key10": "3SGwneunJppatpohjFKuk5nsYGnJciTnDoGjDTreJ3heG5frgUuWXQM8q95aqWYeZrsjjgXEGwTCbFs9veA7oiGw",
  "key11": "4LtrwqhsBNQ6hJqpxvVAcXp9Uo2ZD68dEnvicmdoz8HvUf3i1C1xhRupyS9RTZGes5nDPaZH5k3HtGonmnBNVGtd",
  "key12": "5qig5PxRvYbhynz3xu7U3VgbfvopXMKeVsKAA6Lzn6HKXkm6sm6TArTuJsXKBbujYrByhTJU4Gck7akSxEYMJeGD",
  "key13": "5xfsQ3uHoTV4CKWmghZfaZg24YF9zA9zJDvcMCmFi3U8Q6LwD3DypWemKHGue1K2UDe2828cXZ8TqNWznZPvKTPq",
  "key14": "5FeWmgMF8WSTGqyKJVDZf9aB4AjqD5QDuM3VgriEyZotismtVnfSP2hkYneTNGVYHKijDo9Ett1ovVGb8yWQytVq",
  "key15": "nEtJnRW33H2zg4zZ8ju3vQQRXV7qj6HHSQZHX22jbV9nbxSpMSG7MNyWd8PrhyWv9UGzVKfmYm3KMooTBN1o3Sh",
  "key16": "2zpjm4rCgTe2CYowjEaDytYsoNaHedkXcrSnpFX4egcHU8niGtTgp9nNKuVwdvAesCyRApDTMWUNnZuqQtzZpphp",
  "key17": "5VJe5KGcZk2fvwjSPNF9mCDxyKDx2R4smu4R5C5787qLoM8qGQaeuKkUmE5fwfFmV8Vyf16svnRLLgkL2HB1CSEp",
  "key18": "55otnwLzC54rDJCtxp4qXyKK2Lyq9HL6uCdsHXHqs2R1idB29P1AJz8BCmDE4ZeXSKkQcEQFEo4zrnqgB2f8nVLq",
  "key19": "4Bipm1zrfE8xgPrr7sDqxA7qVGs86ZQ4nknYAT2EyyurSNGkAAiR7RxT3kh7YVzk7pNBsehueLsLevKd5kvtR4b2",
  "key20": "2pbMcHLp9R4zzff1KisNCJLjo2qn8NhsSzverRdrzHLApnqeGemFjuLGCgY2d3xvuffKMCubwxLzAFWoMc6EUmKd",
  "key21": "4KDGr7c3q8vDU94uTjetXXghJyhuQzJbwVzp93Xb2S9ctzGuRVvwgbgUGBNhWVyopCeGXENr6vGA5DBEjWV2waNe",
  "key22": "WmftpYBq5us9n9jqvty7L2UKH6TAK5mc5QEKzjYqyHNzBcCECm6V4zsQSdbXPJabUWaK8Man5hm1XmxHQVvXELU",
  "key23": "5iEfjhRR5Z2CHEwXHdyxaCTeX2oPeWamjX9E45rz7M1iQqDCVnUvTwqymJxbge7eEQD2qdZ5uwta12EBMmDhVVPE",
  "key24": "2ZbJ1fBRyQx68wTv5DLqmdacFkSdrPCZTWCwZca3EA1kBEzof3Gt8VRPFUomDvUzHsycfStqk2agjoLkTnSf6Hsr",
  "key25": "4ZbULNqTuF2URKaveoCScNG9bx62gXHiX8bG6jme2MfjsqYptAifYyff3dFkoLTtkaDBZ6TgAtyDPWP7eKaU8aN8",
  "key26": "4tz53vnct7fDRMJF8AiFqq6HWyt6JY5QoKb7DNDjs6TdPAZmDkVUaGtUKrnQd7uZgvT1EXLhj8BnYRT1pGsv3f4X",
  "key27": "2MdgnAWsipukpzAyrjPZasAXBP5qJNGT2gsb3PEXeacbkmFvLeHby2EZ1oPhdsnSgzPdmFkL6yS2eJKSVLgNfMCx",
  "key28": "4r2mc8pSEGYh2Gs1Uf5nfpGCV7ic17HjRwiMo6h59LCbaRaVMPWxrUffjM4Q63bSpM6JuJVzHkZdcrvRG1vmqNYS",
  "key29": "2tgDmruTPwkDmhahg2H51J58G7TiWN6caozinainxBrCdwaa4m25GiWxXDRvcPc5PSBxGdfAKtAjdNgoF9qvBfiR",
  "key30": "36Q71c4WQy6fp4CCtYupKeoT2AjLHGSn32DTb4n9uv93MTHrQbJk62UgYUoRyVJBMSaZVEMMLDryTEkWJhPL7jjq",
  "key31": "tgyoECLxGQ5Dxmtgeu7xcG7psotrNPPgdqFKe4ejKcRRtcgVGH14w98CngjxW5c1KNeqk7yot3jUhEe6zLYJkNp",
  "key32": "2ZHsu2xUo5mvcmPAWPZNEBsba8rV7SBXYtp6ZRX8cSnKiHg6EvPeUeuC4wLTwkVidx4o4FgH2rvqfKZEdLomneST",
  "key33": "d9r6UDojKJGaXB5yednSTkruZhqjK7CofQZvVfq2jwV54WAPyipAdgmz982A5mTSWuj5p8Ej5rhLZGSXC5ibA2j",
  "key34": "5ZBpYPRPyRAHub6F8NMbqnXGQqcuq5uD76z6NN5wZ7ZsVLJKgh5Yz9nFt6MHmNHsQcYp3RhVNTB6MXo2nFZrWKhk",
  "key35": "3b8DoSBh53iZjB7HiJe1ijpp9jbxrQYpw72pQBbQZwtB4D3ioZruneEkeeuuXmCxu9eT9Zyq4BYtwvDip56c1s7Z",
  "key36": "6qAB1kdVpQCeDFfKwV5PACjx19SLN1zaprdJimtbNwaxJsbXpK26Wfb9ToDcBkSAAV72bcPBsrAfRVXgDaZTiVV",
  "key37": "5zVdV4PdyA8FXwumfPveVKE6LNRYQk4zHqctLWACMFUtCwi1x6wRRY9879GaxaYfvs1q6jd3JgYPL3mYZJ1cxQCw",
  "key38": "3kpTXfD5csWpSrRiwXQ2XfFXS5fgQfNUQnKrh2P8xDk61Epq2CeQGcqRNDxvLwLJHJBPPHipNPC6FMj7qJ3ddUSV",
  "key39": "4ZFjrTcfqipAeWewjqjS6igwKtU3FTnVZb1Su3FTKsT2xupnkjzUMGEF2bGkUdQtEyUWZgrSruvXS42nscSaRfg2",
  "key40": "5L2HoN6QUGRgzAgfiSmF44aQfCACFSPiuhw5WsovKpLeDgoH4tDWjjJtCxjcrPo9WAtRfJ73a5jsMZWSYBXBwDFy",
  "key41": "4MQwr9uyqNTzt2zftaiPuNfeTPj75aGJeg8bcVBTpos4Eko7eoaJhL1MfES3b6pHUPiZ8DNGgJf57VwskYEokUTk"
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
