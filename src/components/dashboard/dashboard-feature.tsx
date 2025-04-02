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
    "5oAo7bYTfLFryQHC23UQFBZXErByuuLZC7d4M1z8DCYZdiTK84diHNW2ewxDgSeweZ8YAGBWdQTPad8zcKjGW2Ut"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kA2cFu19FdUaNDUFt7oHrRCuRYM381v3Mv9vcvUj1Vdc38hgTBEUNkMxXpFmZUDzwpCSdBbWfYNwaRuhhG6QYmn",
  "key1": "hCcVuvin75ysWB3tsU8zeMMEKSziG2iYGFxFGKFwiZSqLUEHAfXYNaKeB1y9aCZGRsRDrSLyPvr2H1YdsX9gBzV",
  "key2": "3gnmCDghpTGmJcUDadkPN1eyE2t9AYAgMc6RuyUXfzApqQR1Jb3fXs3DvqHFtNozJGYVs9iRYCMVXtqAjn1sSJ9C",
  "key3": "3wVAnv5StV2i2giUUoHXny26jbyFFZBrgkJXX3Dr6Ec7YWysjhqb1fiFcfp9Qn3KbFM7dQESqMFtdztbKgNKomhJ",
  "key4": "4jhoziHv7Vby5CcpqM3Abq9Wgcey6cJ3FZorF5wCpt7Qrf9RpJmJnDaAVgRSt1XSxuzYo8GxZqo95F8kZdHQTT7V",
  "key5": "2VnDdmRgz1gpb3DKbodoFDrRUqUieeW9HPEJXUnLj6ennSQpqSuEhGJz4Um7JsSTzNU62wLNkdBTag7UTyEpFapb",
  "key6": "3sKwMRyPYpNmUxSxR32cKj2BhijRt36LznK9bCAGtVYfBuoNWij5jsPKM3pjgCgUubKskzM65xVDgMq739npJPve",
  "key7": "3RizCt9ttjhLirz7FRBu2N2Uspx9GKHGbcAnhU3goS4bXwHDxfzC96yWLPQN3L6siufgATQpexL2k9MaPvE4hDPc",
  "key8": "3sD3bLQDdD3tfNPoebXrZc13VGv6PEpWV695hwaxVhCYRCR1fYr6QAGnKHa8Ps1ZJ2FqZewKtKeprFSC7BjEXZPP",
  "key9": "2wkGo7VVPpnAHUjbaf2RmxpPgSbLHdBX51nqCj1pyv9YmxbDNDqMNU8csS2wsvDJRqiot1nMmrXxmnshbvBJZbgV",
  "key10": "4UubZ7uDhThp6rSkompH8Krr1ZA4nEyEekjuJeoxKdPhnRTyn17rtGrytqcs5NbUSJRQBcymcbXkA7v7z4v7upFP",
  "key11": "4fFqmMhHBGfeVSFrWMPKGhjs3g8MWBh4JahEE1wsXQZp4aXCYnvd7ewt9tgNXFRQ4BTCUzT5d3Z5a2TfvP7wFj5i",
  "key12": "4oHNJZMY7Phiyp1mrpDPDWUHMWP35miBvckAT622FNDwabgrA88T9Yopk3fEgiUYUuytYAEtXCuEGCB2PyomMaFq",
  "key13": "9fqQVq44ZvhdULMhYEsU9wP11EKqy4tojH5gZnBRv5S67UEkzf4o5TBsPWt7FbdwhrkURXrnWHqUFq6pNL4tD5D",
  "key14": "62kVsWPzx3jiyAYmxBCeZDPMinE67v6V4iCqEqyausLHzF5zqJuCDAQx59Ca3FYnPCUKvg45kewnoknP1NkHUHC9",
  "key15": "66zdTiQGaxujV7PNX5SpYZ57TWXREk13joggacDgBvbuPLTNNYD8ohkBUkL9qgfRYvga2VycnP3A4QYNWH2xUsgY",
  "key16": "2VVKzA48vv3Bq3TVbJxJLv7ADuXVRWk7zq7etPyqsZ4QiMXCgooB1nS9ktqwtZDBYceACDhrh6cDAhLffzhuHdWN",
  "key17": "3fzDJikeKpGFbNADywij4zpeXj4ptEzigPzXJYKwDiJeuSkq1jSWyXrky7KAQSopercR5mE8RcGeNspBKRHJhpDc",
  "key18": "Srw27ofeXGQqCkADoc6WpxjieRwLdwT3fMwzndV4FRQ7Pw4qpsCfyFGoPA83Q4fZkceq4nGo32Yikfv2aLgnwLn",
  "key19": "5EHCFT3Vdj8tbEcuPYTeMJYMRDJgkXDuzDoCgWqSSinCL348EgZyncbCf2k7BQkkXRVnoJvptCPMmuComdkh63tA",
  "key20": "3US1bG2hbiFj54uVJJZtPetB3bLahb9B3gxu981mC3cvtHAg7pzDP4AdsdpjCC7KcrqBrrDNG1wdjUiMuCdHrGwW",
  "key21": "mkzzyFAsRDxFEpHVxShwGsV2jSHZ9Ta2JhWUTgteFvSXT2BtfaWwsKmECMrDkiiTviUp3MGShShidT6A1EYKHcP",
  "key22": "5BuXpnWsaKZjiR8pbtuZUigmN9E8xtPKy7KVXsY2ndyDf8LPePpDPFGpHK191er7BALP1FFHcpU8BhhRdNi1gCMy",
  "key23": "2U36rGGCjYXRUUX9xqE1SWxsvaBYk8zyAmfyhLaUA67P2DCrq3yzfdNHri1bnCsBgHn1rruxB79TgDu2G7xyg5B4",
  "key24": "2MyepKJAHoimGpzhZniH7KPKWU4Y6UpEwxKVLeBTmPfrpDJQsua5ghtGLMzuYiTfpyR3c4UvJ2qw1g5pvH236X9o",
  "key25": "qHV96L8a9oFLJvH9DWyq3DTaoZWiefWgAbAF6RExh7dyrDDsVhpaEZKHdBiq7RP2J9gMwfN8KT25pecrLrPxknm",
  "key26": "qqmm9heJCifDpq9uQj5aP8hGA5iaJ1omo7EJLe6wPBziq8V6Jn3bAvBceLU2QYYM2BCXg1C6MZ8SyrmqdSngCK9",
  "key27": "UYB8bwnP8t8Vigw8sj2Df1L7cxr8AZA1Zj8cepnkkW2mAKiky4mC3znFbHCgYsyMQcLtCVPisXbhzuQLdGgFN7w",
  "key28": "3j7ZCcu1ZFEgDAcc4eBBNUi66tFP9q79ASpyHBrXrkyDsrybeKixmVB7KF2NpK7yWPJtk79zYyFaYnBLEMU3N79X",
  "key29": "3t2Aunrgdp9ZDCky9tdmc68R6ypKe1RJ7SuXJsgt4jANtKxRccjxcRRgfqdYqbKAS9hdsR3KfEo8X8uUi8gdGfTh",
  "key30": "oiyBwkNgBVbNUHiTDqyb8avVieLcR9qd96Kz1BLLSn94PCyvp7yX3atVeEyGBAZiMZ3TwGDsLWGSWXx1bQx6vgJ",
  "key31": "7AMbhDukpiZg8WQBwqYAd44aAxRn4nCMZ5nHER9zojUwmKaeLeW6vewg1wMQ73Jxu4WGHB7v71TXjTza1WDsPLz",
  "key32": "5yDMXZcSUnEyfMuTj5b5Ro61j6qwwkhBgiQEjPTxv7QTCj7TyYukSguQ4ouHSLR2wx6yQWrtvr7K8DD848Mvbep7",
  "key33": "4L99mMfTHfCTHdwQEJ14kTFDvFqV3F41b9sG7Hufvb9ehb5yRBta3DTWbkbKosTxWjQMZQNRw2VLcmYK1EKuZ3d7",
  "key34": "4uRKNLq7zaFnTQvzGd5Ntp2HsmBpBjsWYfmb8w8CfMYovfv5WeZhStny78KW916VrkHS2QUvBPiFYKUNmLRqukYw",
  "key35": "pnwCECBYkNVY9zMPhe7e9957JvnGroMvwHd4FV39vcoSZfMdrPCXujS7VprUUY1MM3NomUnZPohhW2ZQ6bUCtGK",
  "key36": "2jo7JDL7UPtMrGFUQmwur39RUE9cMBnqG81yBzEH1GE9gPSrNPueCqxn4PrsUG1cwVp9XftsWf5sB6Qi96TiGqbT",
  "key37": "47JJaV2NQ5wVFAU35VmJmCxQ1mW27Mu81znDrGjz3hhKN2tStchNGkkCVELgQzumxRpDCPuFNdCTKhnNSth9Fywj",
  "key38": "2SXwwxwLnCUrB77uMVwpnQFyEQGBRA6ctR7XFHYfXrUjxhobyb9Pe81ao57y6NJE4xGwSRmUV7RZKw8H5Gygg3wi",
  "key39": "5bbU5B9qJJxcCjCx3e8ZbdqEroeiH2XRmCHs5aN2Vymt4FUfYujzUtqdoKbS89KTLo6CwQebG1FsUoqgmJoLCR4o",
  "key40": "R5p3bYkphGYmZRwsho3W97UnvvNBd3ukN4zrFPaFK1fRmd74bWQcspQrWbVYrQqkejZdMEddwCPLXinzr5L5Vb5",
  "key41": "2R6HVcJT4kKBq2PXb2dFLWohQvfkNE7iCF5y2Jx4iG4Gac3vjd4HyakdBcPijZV8ZYTpH3ie4HrrWa6qXK5d5Wh2",
  "key42": "41wJpWwSFwPyHVaQf76myg4FrWmpNo3JbdzaejcB2w3H1USCjnGTBXSFcPf5fQ74RQkR5tbW3vjXYQkYmbDRji4i",
  "key43": "5A8ng8zb3dvxVvUeAL1mafrCL8UCzza48stpCmfKGBABaPVgiVjMX5psoWMpYt6CeJV1WoSe1ZxwiemWKcAmNUrj",
  "key44": "5W1BPSHp48D1T74LtSn3cfJfMEVVfA7ti7DrRUVQPourQa3ztvjBNhJ3osXumMFG5FA3TM2ayeC1oYfNDYVQ6PKd",
  "key45": "2wxn6CWGSpXGT7Tt6WHk92kK53sJaHepzseYJX85tcAvB6LW5GGswhFKxi2F9ZoWy5uDW4goJXHCm7Me7K27JwtH",
  "key46": "62Sv7bJAqYF5SdCAjtEjjefEuGF3DQkwEvZrbRfbJKqNoT5CkYYxDomyh3vMVQgZoLST11iYZkQAKE6ZacfycvQW",
  "key47": "3PPMJY7R6EpZZtS1AU3o1YCrhkpURYzWf4m75jPrP3YdcBncoEdq5PuCB3FwmSfGJDQDpmdqcNQoHZ2swxHdMN9Q",
  "key48": "2EjEWB1rF3GU24nJv1djZASdR3WCDDbiu5n3PU33Tj883vMaGYCHvtDnBWLYd3NAtP7dfsWDbu8FffpQmhx3oPpT"
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
