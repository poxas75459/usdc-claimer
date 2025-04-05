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
    "438AXaXzRwLFmFf1X3gF9buXk7oBqoANUcXeHURGr7dQdduPPPV2LSWLAppAS5H3hN71wo8w24QcDpjLZzkj33TP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CnbubUhZTxDQEFrmfgbPJuG6JrtPmhykN4ESvNux9tkbJPHLBrn5yBuEMswfeh34wZmAX9v6rXTf5J5W2SeLS5P",
  "key1": "5oLBd86oN9aKHEbNDY2iJdqLy24KB3qoF4RMsk7gokw5MaBuPiKeWyLparpWryRJGeHuk9YiXM7BB1uwuk5nki86",
  "key2": "2zsnuuXtpiZbj4h9RHZJLu3tKD8SpLrq6SiDz8WwxfVFNo23tR2BwyWxrVbz6SwLNvC8TRoBAUxSbFHCqDvUJ8i1",
  "key3": "65Dt9EGRyqG8apWrebXFX8JVuM8YZJqAMySpoYoKxeG3nMcD39DCY4jtDWdSXA8eBwou2qJHdar43GY2oTiZzK29",
  "key4": "4U5rtuNCS4faEqWtFe9fHh4sn1xWRDBEMTFdgnkUX6QtYpiT7TJK2AvNU6uukAYk5RpDfUDwMLDnGbogpmnLAGmv",
  "key5": "eZKfNVcWdmGjh3U1MShjKRv8TYrCD1LxnjmbBmWkJGXGEwvNWMcf47hFhjAmkhppeN6aHoE9hRZuCiBad7b1JYs",
  "key6": "2oYaWCS5mPCoB9CmnzjmWG661iLLsmejZGbLbufdFD48FXMgmHErLbVwRakGNg4iHMkRMupBfVGMD9TEyXXxCcgm",
  "key7": "4ttGYYut3K7z3zKSQY83bvH3UaFrnC2VNyTjH8ZNci32nccKf1jQwq96gD3LMefyvmsExkDMaS1HbZQZ25x7Svbx",
  "key8": "44SYr82C45HFoNLHR3fRJfAAjZkCWPYcGnHTtpeMNNvM7ooKjLPxyEjgUhmngb8ntPMYK3eMPhxHd1yLk2oTJfcT",
  "key9": "5JR6jqfdwyUHkfT7Kmfr4otac5Rc5a31HYtAstjjQBJ42F2zgWuEVyA7fj5m5DmNB39hRxhwgb4D9vV12SurRx1g",
  "key10": "3UcV37bb3qAwDGPRvgbJTPD8Ba5c5wrkmucyddRvCB91jsnt3Wt7BurAKHSCovnrBBXtigMds7dQCDJXBKhy5rNr",
  "key11": "NZwrYZDiavqAGnjvWNbYFRpG6Te1o8YMM416PZg3cEjZ7HZ4xwKUXY2FipCTH1T14rnVPeASiE3F9H4yzUcwUnh",
  "key12": "3iBce2SBS4QpEhgqQnR6YZ9oJykHsJXB6YK7tKUYcSWw8mvdKxyTju3n7yWevsbMjCvh7gqFKja1H88S5HwFgHTP",
  "key13": "3YrqQDgJAjMHH2ufz1ZSSsGn5Hr5bATK9aFN6aowdXM1zXMsL89hCba2L1YfxrSMyFvLonYmDgJr4LeSKUjmKNAF",
  "key14": "4swrDuTz9BXJUke7NAB7uGd8ttd9xLD4QPEc915z6gZSdvz2qPfBqbE7rSSSY3Gzp8o3GsFpy4W8BHm6wwxD3zGz",
  "key15": "4tXt9YnxVFPqmhuhoN82upgZnvqm3U9qJ4x3j8zgUmsJaShXFiS8MJXkg1RzAUZqZrt6M1UmU7QbY1oWq6mKburk",
  "key16": "4CDtJTF8jEkwWkUSWpXXgcWqPd8mAyymMBqfMcQ9SWcpbHBcoLCAGQWphyMRCbzdmSpAVJYx3jHfuDjZ7v7oom55",
  "key17": "5JJrPg4r6nhDp6vue8wsvkYPgXQJMpYWDtPrP2c87wAvKm7o8YsLTWuhM9hwMjNwe4rB5XRnQTF7Xs6FkULtLsr8",
  "key18": "2sfNVZUEYjEkuCVieeG6qa1yAgTLMS94HG8oiWgsUPy8qEya2ySKnfLRWHKAqhx7UbeosSzV9RbbrcdyZuF4dwx2",
  "key19": "32LTnYgUnB9H9LdxiA274A4iGFxPEJ9wgjyjrxyQNpDNRDkdrfPTT4TdXuqrgmXbJq9pyVZFqqJchNnhrzMNSpZH",
  "key20": "3iitT1RopQD1Ei71KdxUJQj3ezoCy9wLdnmPBwtFXyrt1w84xGqJTFNssvxY5TkgEX6UfXK6SkrHsHUo3yogMH5f",
  "key21": "A2WNQi11JgKoR7FvhG8bf8Xdak1UzGoryZeidoYFmkgzGdrdLqBrtk6dcewVFkQundg9Pt2dhRDQbFHXqNytChe",
  "key22": "2FBiatsiQEfj7Nwsp9JqEKkeGrZj3jp4QwujWVG2rXZNR5h9PEkK7166UUAuA6S66cssvE5YBgkziwbmDBbow7E7",
  "key23": "5DBBgkCzsZmHBFtyP4QRXgDGDSDG3uTyfej6WccyUzgohL73jh4aaFFmdb28zFCCt1KdMwKoMbAJy9Xu1bhhtXyn",
  "key24": "2wU5wZZSdHU1NAY9wkWSNHxnkwn15cEpKMRbUg7xQ1KkDZMmuDTYAFWnXSYiicf2nawHeKgD9TwaFHozfNBK78wi",
  "key25": "5xxGyC27aShAgsncafy6URUFL5VrVAiLZgh45V8dhmuZry5Y5Rcc9juTiRwiYRdE7nkpFrWHpBzXzLQfGd56TT35",
  "key26": "4vq9i8Yh8fnfgnPMx4K5DYTH345fWCegC6XgizXGczJU7TZ1JXsPoF3PTjUXjhWjE387HoPWvweST8rPpyAkZBXW",
  "key27": "3hK953dVRkVqRFpX2TxEuAm5TpfstRYWcT8L8khH4aVpkeszfYdJUZqifESHB5CXuLoaHwwwnb3H12CMRUBBNVCw",
  "key28": "NuJ5s38dXKTsycEXiwsxT8ZYPi4snhKmTbQtZM89hZMDaTyZ4udn7aoxmBtqxWiLLGtx8uvBPxFmAvyagiDp4Mc",
  "key29": "3KGwGpbuHuyQRT2gLXX2omGy532UHjPRfN6cWXRsaYwFDbLkVZFfFK8DSFY8spQnS6oGEhwNnat1rV7ot1wDMhc4",
  "key30": "3wz9soCYYvCPmksGd2djWGeizZySfDTB1p7hYhagJsChYC18GrN1vatGvcsWwyvq9nFTYZB1UBd99LrA5webUDEi",
  "key31": "5iXKsS1pVWXKqkXJn28r21abMjB2Nrm67Hn3tDychVhjj7rf1jrmKV5sMXskYH5JcpiRd1Udyp9XAubA4TiqAxYY",
  "key32": "4X3fMGRbXDFafM3JeER34qqmUNZ2JGh95WEUsZ8f6UMFHGU6WqPFX8N7beLf9GTmEUfwGqvVF52hSJjA9vzAEk4",
  "key33": "4esupaVC85arZEcSof4UN2Q9HAUimKcTKLCnN5cJZTxS81PzjihUK518vZnt83McCzDM2z7pJWjJX6W69fv3XtBG",
  "key34": "2FTqJeYnoiCZiJFMGqtJkvLQhvE12eVTc8WAR5SQyKLfDSg5i6WZHUV6MaoF95gmVvJp6LiifsEKjfacLf5rR8uz",
  "key35": "ZLbj7LVSuLxUH4KjKe3L5yXP1GFX9FCEFdMzUSriWfLnsFbDKwjuDxzVF72sP32LJZSSU4TsYH8b5hDdFyr1QG9",
  "key36": "2Hs5o9JYQWVEQTPwbni1e7JLJGMmZtVwjMbRoWB5xrhVohydETSM56jmo92MuEQKCCi5jT648aM1ydXdoByb2UTy",
  "key37": "5gTp3RdyQzkqwsczEquarHS2QAdJxY1Ex3iNvrMU6n8CcaKafvzCTZKevBpFrzfg9sdtxXb9hyrawsPLoUydstGP",
  "key38": "5Bmd93HvtYqywHe481Jjv79R1ghSdLPfZXPH2gGqDJsjMuU5bzwRjetoJFsV9hJJdQpx7Hf52GrHGZegsDYsCsYC"
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
