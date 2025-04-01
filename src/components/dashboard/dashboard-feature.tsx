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
    "2Mz7hf3M87vuMZGSjBHxeMwAmYMBfM9T9y2ipiNrQcQFoEKMJZqh31WxKocFtKkmDY5b3JLpK9VMcFTpFo2Caecf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YETN4nzLMYffuABn48uRyZhE7FF5sq8sN65EJPtafGTDdzdnWYgZBBChsbwsfr3uwhTr2wgtBYxn2Tb8Q7i5X5m",
  "key1": "ADKZbZTh12RAdb3SeCBkdaM8skCTaBcA2AYR1pkDFB6WoWJWAM94j2eYaAHK7z4jHpYaxDtJcgHBSMrG8zkDaUW",
  "key2": "n3djFRCCt7s4HDxvKDkg23jKTVAR3Tvj8UW9Q7WfY9iiUPCdCPH4YWxx2Fszxo2HyWhrEQNsh2Gmuk9rxtvKkQY",
  "key3": "5KcTxFUbCZaC2X4tP5X3mwLLWmoxgUDacojj1L6yMPmZrcthu7geGuSHYL1bkws9Mg55kzeHzz4oohwFBktoGBRs",
  "key4": "2GuMY6BnpUPQhDBtcmdm62qTeEhhnonjDy3fjeUVoQwgBWFAeeT9G9TbZCtX6fxZZxqPSaAZQT5RVR8x3AuTi8XV",
  "key5": "5ooVapsntR1caD9L9YXAYXE55AfQurDnUyhvXH28eDyqcHzXTHTzYi22LYFDRCvtoqQi4hBrqAKDoRyssY5M61PX",
  "key6": "QV75XVyC2d7vP4HFvbFbSC8VA5J2htTWSXmeo6VwhTJJY9p2fSET1oe468KjVbi8EWajnHMBiNvtjSRwShyeMnK",
  "key7": "2Ab8iNasbxVqrEbgUBtastnsuSWfuNzQYHQqYCXE9giKsEQtXFdGFCxVjXPLKXEBdJhKbCRWT9r3B82eWuN3zYsR",
  "key8": "482k6wzdah8hXic5dBhkLgA1smyW3sDajtNjEkxY4f3SkafV3NtFSRF7S23NNCa9Yj67AST3VHpWipjjVyQSAPna",
  "key9": "5EeNfs4trcpFkoKXLjmaVooXnFVkqvPcJhYQEGg7tvEQBSBvR2M1HD5CGGj5t88NvRmBmo3kwpZMSJpRPeVuLkwC",
  "key10": "5jaGowGBdc4DRt48bvpgjDrKXxmWaSg7eyXKsMY1PLGL8FvbhwjUTEu8zbG6rFGjSsDpf9JW3HpoUqeyju75Jdbf",
  "key11": "4ueUUQDC4jjaJK5qAETfBsveBNXdeYpsrG8zBFaLk7sX9zMGtmGdkThQPoJBWvhQL1oBEjvY8rjEz32Wv3dPPbMw",
  "key12": "Dq8Ni6gYxjeX5S6JRBWTY15TGXt5LRRCrpLMY7PrjE6nKDA48Mi9X4mcuTFtsn3jHeqx4fHBdTz21X4kK15pFtH",
  "key13": "2pP9GEPz7cXPioHb6LCnnRcnkQScbA73c7phBcDUzVfCgJ56yHpWmK5ZYND48vJeiUg54gmSsnki5nrQnRxTMnm",
  "key14": "3P9Lwiq6yuxn69uBHoNMyWBZMZYHUYqMdBfquzMrdHLVAM1HVN6NeXwXRkheEsq2gWSZBA71NsQJXtjPbHcPsMho",
  "key15": "4t64y7zZeiPnKKg1zCg22SjTZCHvC4h2azKjKFNib2UcVppfFjaavC592ZiXLdLy9ZASnWVixzPYDEbWoj67QNuK",
  "key16": "2T1RxJYk4Gcs7QMvMB9ANAbqipAVS1fNkKsDizPHYhCvLk2A9tru8gfvJSBokuRvSuEprvPnfQSTZip55yH2k7fV",
  "key17": "5sejAQ4hhb72gPaUhCvMe8nc5XnUsowHuZsoUyxwzLvWry11yahzgvm8TY6cK2UicTAnXburMEbL6S7z7jwDXsP",
  "key18": "4w3qdzWLZDxrbZfk3gfE62qVu79YyWYv1EAit6Lhphs2JoTZF91pPV6qDNmmzgDRHDQXitbWXdcXDxLJsqd7Ae22",
  "key19": "PrMM7bqfxjoXYxJgp82t3BXmb5FsHuVgDgeDVsUDVy673fPRQmV4tekSoUFjsxTkEM2nUGNdrcMUFGCqK7uutKg",
  "key20": "4kL9zWi6PMnYRua7Ppw93kWWQddXKqWUApHTLTHttS572BTg9kLipq7ZngFeKZEbUgs91urrpzGNbZYRy32eUabn",
  "key21": "2op6iKRHo6epWFwy8vZCrMZHHhzgSRf3KPPzZF2L3YYBXVJD71YT71ws8zPov8ATYqhjtp1zsDQHUx5F3J6T8U8R",
  "key22": "4Bt5bEWRdcPnRdSmEQURNcWoNKifajjxn9U3oALfQJbVjgdz2CmX1TEobJG4mRjm5uKHk4WpMkvUaKL4KnNg3ckD",
  "key23": "3z45VCGPTzPgZzKhWyYqkdm4h1SqU6PqkHZ5gM1EZiUWJUnML4HNq8CWmgxAGFxu1QVv21rtZ6N2ZDLzrynaxu6C",
  "key24": "3uYoqh1ShoSX8eDZmRFRWkHndA92j5KMUtZgo1JgRrjznsWUdWkdC3BgE6x9ZoLzKJcKXu6t8jCsXNNLF1MjzqJw",
  "key25": "5RLqBBX8EDJRQyZQtS1nScWuwkUfzkphMjDwnohPhBNG9RWerSNxt5Z66zCEgrgUCs18Qo9dQHftw2jw7Xh3xcuY",
  "key26": "4ER9PwQDvyuFEcx5hMSoSwmEk9a8m8FSatuxQbdskQ2BE8yttjLGfiEhcQdpkWSG2z3ahY2bWfc81iToCQpYXcds",
  "key27": "4XjHMxhHRtwJ5Dzgt8fbSVZLsyzvYj9FjeVqHt4MB8GZmy56LMvHjEjXbPzkGUqdWvsDZrCwNL3jUw83tvCoytDj",
  "key28": "2j6E5qgHDA7SyAN5uHj1DX8BYystDtNdoqfsH2hhqpocmUpjfRV6G8G4yLg8n9s7mPMNWWwqbXcAeBKhPednQCtQ",
  "key29": "617Hf5mrhFWuEnKnu3KERhq3T6YWK2easUWZ3jc7kSnk9HhZoSwFzgu9v42uE11Cy2xt4Vjkm2tVxsp817ojgtwF",
  "key30": "4hSnaAxZvoJSv9J844C8xq53fkZMywUVPSRwABYom4zKf4n8Afc9KMwbSeXnkvbpmavjyKK7MzfowPe98MpyVpQi",
  "key31": "3x9pFtsYnjcT7Y6Yn8T6tB4UYfk9vcrgBLZRDrTutc7qvknBCeEpdBkgNsBoQcCu3vkps4tWRjXuL3vNLrtrehZM",
  "key32": "3mppjrBxT3974cTxCWghErBu2mkc7uw37u2bC8uZEKhSz4sa9kqihocbLstxSUkGY58HnHWckSehbnzhgRrzGWts",
  "key33": "5RJ1E3dHytU58orP3Fe58tCf9CwtbqLACoWTBzhnPH3ccCbyCVjw5Y7eEYTPf9UiS22xAcaLQAdjULDYXAtWrBTx",
  "key34": "KLviXmHE8xgno2QG5rf6oNNB6sTyNQ1QaXzwhzy58f1VW56TemjLBdhGZefrnnoVaWDgeWiykcctXoNtPcwzfQm",
  "key35": "2YQhcdxSdhXC8xrdB7c4VBqEkHhZHW74JBRpVnqCJei2yJ9Rdx8hqYmdAqv7YrEJ3FWg6rKLKzv9HSqpJV3yL1QZ",
  "key36": "63yjqzjm1Rkb3V3tJRyxpLbuMPQzquThbrnQTF4NwAcuvkuM1qTArce1qpQNHvyp1zaUM654Lrbtf1fiQGKJ8F87",
  "key37": "4LjvMv6mcwAw895ws4AayCrdrx5BQgj5H8sS5ZrQXN8jAagL9o2BoNPSF2PV1847P9wQDomxp13Lq4sy9yEasHdp",
  "key38": "2tb5VtJzR8waUEwcrf71BKP1QqBXyANVgzjRxm9EEgaivdAJSiCmwsbLbZ8WC3tfNMwBuxqYRA9tfnL5vfxRNpqi",
  "key39": "2FS2m8RFLoWPFSbYC1vrT4eSokFhq6h1nBGpQZiWx2VjAWvHNpbh1bdDzw1SHjzBFtZ7CPAw9JDf7YcLuou4L3Vu",
  "key40": "BsGRMXAz43JTb6yz6wooa1DCu3yGdyUNvuvpxQ5yYqs657vXt2rGpdn4HjQZVuUCnZmPZRkhYD3fbmbWBbK2EbS",
  "key41": "MxtLgykvLB1YGCJc3MF3ZgF95nLppWbFtunqZN8ywxjXPWM8GsTjXmGBdmi5F1aopoaJAEvFUV1UJkWcatiw6s6"
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
