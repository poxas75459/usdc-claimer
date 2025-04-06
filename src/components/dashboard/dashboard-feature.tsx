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
    "EgGG5DJoi2sz1EN8ayfksavEQvy8JJtoDtCKQvYSHduhJk1CGX25wcFAQqKtbS3jWkZFJP29t7gwzGr5awoZDWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jNBGAkmLKncNmYEEHMDov5gcvDnrwvWLx1Zbs326iVRQrq3RPGDRhkpcvYjYJxDdRUYw47yfh4MS6VEKvr49kGs",
  "key1": "2R6bX3D8fL6Sd8mo95tvfkHmajbLYAY5Y9H6Xvfk1a5Qa78cjL2vPdEboKSY7s6DDMfvdfdNF3SJLptPnJtMmod",
  "key2": "5zubVcLXWuq42tpwSuEuKBoawyHUEAREj9futow2Q6pCQwsGqqHAje8UvdV5NTn5GhDuJfGskyW12ara5WLNaQSK",
  "key3": "53YCmaXSswaoVivv1GxmXCX3sgcUCHZoYYtbw5bRLN9fBFpbdGQ5dXbwtrSmTunYJjDvAsEwHxJoY2L3dGLWLHn6",
  "key4": "3FEwMB32RW9qh9KtMAFNXGn89GzVdXMxPALXNCNsTJjarqzWu6M9S5bk1Yd5a3DrMgV73G7Xkv9rkvVYv2LLXjzf",
  "key5": "3SZLELtSJdK1uLGUKFUs3ErHBNFqR4Ej9KCFJeS7rJek6NRM5BRtncvfMohXBpv4qnwEp9VLxsh3SxMHVabYoS2g",
  "key6": "2SBn7BMYfW1ZobeGaGNND3J7Dy4kS5WmFfCWjMYSpmsbu2sBadLC1hV1AGiJe6toXJ9cKG2hufGXT5uwFuAQoRib",
  "key7": "5CJ3ou4xV1Yzf57BZi7fE2QgmF6ohmuyzFhhJYkAzLraksgtZ6ATQPFRDrbR7t7rvr1bstkdUDWWVCyh4UAMpmRu",
  "key8": "neJbibCTQxAEezki7Ning2HMmvueqo9eV9U4v4RgYJ4JLcsSWJj38qYwLQebTP6NjFmVcMP4RoNNuwCNExCSa7y",
  "key9": "2aPg28FYqiAEZgv3CnZGHYMJx34yaWPDXP9awmFRwK6nfqARV5T3fbweEsN567cwudv27Fjxd52JPqzUozFMddDM",
  "key10": "4PtoXVnfJCZHdqWnHn33BhpyUNWi8nKcRcqdtyNasZVivbPQoiftXu6nRwtUGqkXZHRPPf16DiWoqctgA9ns9mvf",
  "key11": "2XAdn9xrk7kTaGHte56LheFPrnSYENYCbY6nNQGBEFzRcqGAJYAbYZQhfmSGLrMumRVrKMZttzkKtikS3WiLdSeJ",
  "key12": "5jQ64PuCj4Jkbvi7qHS42bZCSWBu17UBSMuWeaBCrNfr7VoJzq4d9EuZBGPV5xDFnezK7G6nNtqy3PhN4jpY9vRX",
  "key13": "4VSBw4FQYK5iNZDD9MVD2SnhNbrWPBYQ1aobhMF91BzDx2uvt872E1bHybbUAEsVMU4yuFPJdUv4pUiuofrMBTDQ",
  "key14": "35yHPjbdZPpSYrriN8ffbueTTAvaXGhiDo6SMRL4K4dbCcroF59a2q9ufRj23uG71ArygQrYCk6TrojXASPC7mRt",
  "key15": "Bfietx9CbCQGQ9fEZvAXm4NDST1MTmLUkS95FwWCAWnQoRdvnGqSBk2Ha9aLVFBVA5E2ZAP3r6oGuMryweWLCN4",
  "key16": "52zq1Wu1pH5H7qfebGnTa8HfnV2fiNPvUMDKPZu1FY94KuuPXAp7u7hh6NXs6A3WFHhi8S724cnEDVccXwQcQd3K",
  "key17": "4NaoARTXnSXTAg1CjGJCYA2Hkt9bbXRdBY5igEvDrdJ2beAkPgYCGQVg73S7PEhZr4QHVwQiEqLqbtGxruumVWUh",
  "key18": "GnjofaxgqJg3ftb5KCGcZXp3mQpnyf3RUCiPUwubwR5gPaFQwWAqGNVa12P3h7Du5rR7HQJZFEvi3MdABTrTxcT",
  "key19": "2HsUhJL6pqmXrHwJRncCjD9MXMCKVNEqxt5kzMgSFyPm4CHhZH7FVNgbKLota8KM8ndwS9uMZLk1CEvTpYNuMYDt",
  "key20": "5aKcCgYDPdfXCVwtE95JwpzSbqEh8QABDxBTaUR54qsk4aSbfDuqWGVPyMqPdYV3827T6UBDfeKnfyApxxY3wTmd",
  "key21": "5kB2aAUn7uNZXkTho93KSPnSi791YFrg1KeN96ozb6mqjXdnpRmUS98Ctw7WJUdZt8S86pdfSETPcvkhbNosMSLG",
  "key22": "3tNXAzpfXjNVPB5mG1nnzizvrkSHXCfa43PgdnaACTsdb6TiqSkcX7RhjM7aEHnTGpJirXqx2H3qdSsDdywT9S1Q",
  "key23": "rkg7wgYRJSuy7DBXB2ETdvx1kg5u6tWYJmsnT8BVuh6oaR2D4ku1uT2yZYng7dZXBnxh5S7BFcdA6tLKKtB8Rv5",
  "key24": "Pb9tYzhcE2Dsv2bCGYhchiEABAUQ7PgS6iHvejHBPmnHqTK2oaDs1roYVCUAPkcs1ZgbhGTCSiZC4adcAnRxdUN",
  "key25": "4MxtMQe5vtntWb9yJUZFhvfR4hTtoB6BjYCvFnTPUSAHtEJQyoLobq1grWGeu5pARYdHHcqNFgXGAfyjUCWELBL2",
  "key26": "4AKfzuDGUXueGh66i1NXaXdMnDQViFSyaj2c2feDzteZ7qsVZzyfihZgaBQzYUztqETfuy2C8uUDrg9DKsEWSw9m",
  "key27": "5ZD3vLpXzYQDfTRGvejuRXpAwmNdWuuJHzyLnbfo4VVE2SQC94k9imj7mh5BTJrSShfj4F5xGQiGzAsRcmynbnHM",
  "key28": "3EcSu7pTv7autvnHra9LgFLZSMaJSgwcLLDYnjV7MsGZTUCFif628ozKCjorozdqDWmanZREoc9LDwUuvwUfYNdA",
  "key29": "5E3MTeWCUGGAg3HsQqQHvsVFVEH55jW6i7VUNCNFcuXmY1Bj7gBnSHuBYazwQnF7GVos4CLrVE3xt77g4yRLxnRh",
  "key30": "9sYQocQez6Lx7FFQkiPMckwnwZJb3ywLZV6JYZLYsAfEri4UuWK9cgTNnEgKRQmySr44kvgtWLvJ9wbHHYrZHsC",
  "key31": "47ecCnKCd3qhdH8xzMr9NLiG7F2CBLR8jqqS4iTiuv4SBAiMf6V1YFwEywcXgQjD3mvTrVSYojMMmqiRHNUVg7xh",
  "key32": "5D3Gc1BEwk6zoKSWaKJaof3EbfzUmgkPVQiVmrwLeCs7gXppFsJvFWFXra8j2vVFGCRx2iT4QmJreQThThxe5u2R",
  "key33": "3C1hRuBHJqM73YA3W9XtyTfqoqNiCB65eZyWt4GV5XbyYLScdxh39hV8ipUzTBywgYpP7zF9vdByvYoRuYXGpN63",
  "key34": "4TdK2nfFVEbEYaSuuAT3EzkSY1L2AmKRSgc7R4ntBJUTo8vecxQq22rfQHCnfiuV1GJq3As4su5cFAHCykKQD8EL",
  "key35": "6AacPNzrkgWiwf5iV88wjnxDSozo7yGNzkjqt9HxcwLkNbCgxRCwdtK6JqBZoMcSnxfnuj9griLYZ1DNYeqF26d",
  "key36": "3CsdaD3Za24yT5EqNh21aKFeAxAkgToHTqXwP7B8GfmuyJQxrR6n82SzP2nHoVKc2h4xwi1zhMGx4XhWirFY7no9",
  "key37": "2wq9fTEXZ9bE8wRprp7xStAwuBfjteKcGKWKrvHTLoqXHQi62j4PSGGjNBLDEVsXqwDPbypkZkBSnJ9wPFVBWzj",
  "key38": "3HuJT1s7ijrxBrbcobjePuAysNHEBTCQUKcX9nDYF5za5TMg6NJAsxputympZCq3GttiwozSVqFEABbrdMph5V76",
  "key39": "4zNiVWcVHrJGkGAv4B2csForjdpfxXKU1dvA9QUnn97LZJU6K7RELmTPEafNGSBqbaZjpcafXDXwhSTPWm42HXpZ",
  "key40": "2AgUs1hrUiKFXj4FMvfai4XcgfcYmVMvdSAvf6HtubKKeG4mnaEWwCbGDCvqtQSpYRoNDsYiFbzAdVD55kfrxg5N",
  "key41": "5vPWjyaVjJeb8rf7j4kv6RNrEC9LYcu7q2abJB6553v2jfPd5QnBFocc6itNnwPxbbXAxxU4PbMm9mqLTHB37biv",
  "key42": "4PssUT4cSe6WinDypFp3ngjgJ3jnmHvLfgSrcep6dMrPWiAnG7uWjiDfZTgHnehdo4KZfsTaYAokFqPJFEVKbcth",
  "key43": "F2CuJpSB2JpHM6nFy6ZJdUdQQsyD7H4nmt7esBjene9P3ZUDrHUfhSUX8JaYW2eyQhcJvwTsqpeTs6Yj73Zwvdi",
  "key44": "2a3TWGTUG4Qd2dY3CyYV7Ev2L48j89HDLDPGSq1gbM2RM5Zuc1ZA9ywoyxgvFeE33kRZt3kTCwD48EGURN8jxjDW",
  "key45": "w3yy7P7AZmzTDeFtt3fVdVVv43fSn2bQkM6YFvVmyw3Q8sNAgyk9KurFbthx8oXeYv3gSkWKZ7yoHCBmof13MLv",
  "key46": "BJjzKHeJwfbg4bDcVNLvpfbkrBsWinK7aJbzTxLY2R6jJqWCv1Myz3ru3NkD6jVBdAdVt1Wb9nLNFazS4rsPY4P",
  "key47": "2W3GmrTnZsLWvzLHHUtBE5bemx7pYemQxhJDmf9YgN3rm6UwQqWQCAKKiDPAasctCTtjPdY6rK9Sj7aMEk9Gcc3b"
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
