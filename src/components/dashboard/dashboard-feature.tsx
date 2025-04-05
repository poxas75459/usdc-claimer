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
    "3qchykgPpqzwVFgXrMtYHZUaZJKw9piNDyK7ZtyW2rQFXusC6dUDWsu8HkpuFzL6d7gJJMSLpg4p4BYMHE1foVu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CwNTpApYB2KzsCaUzAxhipr7XYvX3Z6H9fsB3sSjRdJ72kKNcSTvvLNDBBuXXoPHXhoudxtADsRkvfsWTzaMd74",
  "key1": "3avAtTmpe3EGdrc1kufjpiLe6V1HvRp8nZbyKJ4SG5dShgkwshyTP4g1ugMTjemtDVfmnCxMSM49hF54KhLo4cV4",
  "key2": "2fwTccoRKWDFHCYtiXmen3oEjQGevmCCGLwq51PAGJ4Zarye3rvTVchFvJnBSpLnmwE2yNEdVBu9QGepPN7xxm2B",
  "key3": "3pQLyQb57GCJRL9DxjrwzoU441SmhtYTcf715ecuTHubyX6VrT9FGqaagj9R592J4XdbXVM4oTbEfhjV5ATRaDGg",
  "key4": "62GYnsdNZJjthVz7zx5abxZ7GmjhTZyJbU61XKPXVfCrQ5njowwne5zMnQy5Q5fxiXDKRZQWtCvftguTEEjcHQPG",
  "key5": "2bN5j3S5wNRiy1dWwcgCFPrdvSYLELG5Z15tZkNnubKnfpQpS2bW3tboP1843yjWc4hia1iaRerpD99rdDWxuZbE",
  "key6": "4dHPp7xdRkrCWstSiST6KBMVtmHfL1oxwG2bgCN21iNJY3VApuMNQ8YbUKe7cgLdRPRMAXRJqt5x2e6LswikZfWq",
  "key7": "5EWvJm2PwXjHUEQ6AsqRqg4BLgePcjKWjL69dYcsxqnuG2qPKw4893XBGWP4TNPruSENbSYfXPtvJgDdVHy9iRCR",
  "key8": "64FStdq8TaGfuRcuFHKdNWxWS18Eym7YeFYnxhoYiLqqop9ix1wnxX2HHkeRFSmmiwskXjmgymdYv9twqiKnyi73",
  "key9": "4RjXi5jb8UNBhaG6xRmDBfUNk6r5nthzaCzvqLaZtcBHVZg7Q7JKMLatQeAg4ymTaNCkDxGgtVWZDc3g4uDx8rKk",
  "key10": "iWz7vx5RLdFBgAo379YTbxDFFKMAxLoajSmKLVgXsGBPw2Y47yvMp1rhSeGwVS7LgH5y4i6Pj8NXE1hZ2e3aEm6",
  "key11": "4Bq1pHYq5aJijrHZX86nNaRhnyTQcNf3uKtmrxv3d9ryyPDiQYiataWxEA6WbqhHKXv6JyribWDaYzVLh7prtzhY",
  "key12": "42CY6trqqx8G1UBdsiQkqHEEWGn21zeX1A8RprbGFWJGdU47ezLdFJT4kBJNxWMSjr3JioQthTkKoK8ND8y3bkXr",
  "key13": "WKrTicX9HSUqce2v8W3DqGjRB6KMeBDo24r5LuN51nXihHVyTTu8pPY3ukKwSAbgG7yiQGJcQCcLKRr89J8t2d3",
  "key14": "5HRunAHdhc7sKENkTHwXPidbzjcx1mEUKBs2yXVYXqAaFwifSm39jHgmen4Kz234XcryppjBJVzskbXaNavX8wEr",
  "key15": "5swzCe8BNmp41N1GnEM2dQKwbrr6wdFbibq1skG1CBisoGBL9DmVZdZf4Bvp5snCcPKtMww5EvNNeDTDHMFL2V8D",
  "key16": "TYP1ory7uHKpuoV8yyoN4dXTFivy7Uv7fgVLBT15xHgzP2WPgYqvAv6ctRmVoPyqrAdcYHSkHCR2zarnxYULSMn",
  "key17": "2ixWqGpjJLDS6Wvbdv7FpSN6FseiPFAHHSDW6vks5VgJBcs7FZsCczxyNN57A9s4h7qRkuKXF4H8T889kT4c4MDf",
  "key18": "GxxBZAJo5FW4tfYQcDhu3QZ38nReQqVaxEVDtZnH4951uFWF3By6HAypbg21mr4vtqX5ucc7h1fecry5d9CAEYm",
  "key19": "373zkR2iCdr1Y8FZGqPq9ZXPbo9auzSfkG2yTwBKpjYcBeiqaGmaCMS5nMxHv73YH6RKyNEGJEFCf6NuCsWezZ2H",
  "key20": "WGPQzRA85iBf2tfCuNo6h9mDyMWP92Yhb4ytmDvxVBDUxpKoD3iGMea16insbw4j27CwYQFwJ5XWVqQgQmaucYn",
  "key21": "cMVaJEPRVezqbRKz5W6rbPxiCpTLzvvbeq5MBLRHmCbEFZ1VTv4ByfSByyhbkYuYCsEFZ2NL3q5iNFwifFpnwMA",
  "key22": "LpzcgMvsVo7gJCZcrr5bThcynftnYRmkrFCA2nFuUS16T6xGGsDAJ8pE4gE5DDwwNEjjL1UkL1FzpxtFZpgjbd1",
  "key23": "2vUWuJHXyJ7naBQ9Yc6F5XZxyjW79UG2wsXsw4tTVbzWhPi9iukLFn9zc7tyzaGTuZpdrpipRNw7QYoh8teHSLkT",
  "key24": "m4wL3d6imbdHjWWWY6ftfKi5gndSHtzxjJnDWeTBhw1Ve7H7Znr55PmCx9yWLJRgKW2z9iReSCp9q9CZMfT5CJB",
  "key25": "2uB6XhRCgjUbR8u4yZaiNfM2kxGkz2DasoujZpcQv9Rskqmzm4o8DqU6XDbsqCAsWqThKZYCQ34uxgVRfpAbyQiA",
  "key26": "5SR81RZTYje5zPeBJPNF6iDntGs2AGMcgknbMX3PYfL1GE9Xjyt5fnwpMVRF64X6Er1KXpFPenP95iHbiCXAAG73",
  "key27": "3sj4vZj25JCDPNfvSCUCWipJS3bqhLGBZjopy4E4W14WJZGFiSkvoaCpQXhLp4WXLBSj3LwEh1jG2qZTfCzzUzbF",
  "key28": "3VsKCXKkkLqAiErr1FJtC8XokFWbQJd1TRiZVaZkVTEGAjo2acaZVUvmVvaDPbJZL72XGwtsXmBmPVQUWkDuaEZ5",
  "key29": "3KM5v3y1Je5UF4s4gKeKmsjqh6djPE63TArooZk91NAUXyp4VS5UAfh7dDi4qC1ALqKDPQE1KJFJTsHGBMsdiQg5",
  "key30": "4nntXKtRGrwTxdQSg36djmDhmkeE2cr2kPXqtoHJxrcbkNnn4eKs5ZvhspYSo1KigqpZdhKbh9yNWBFPmvRHyNX7",
  "key31": "4D5XdR6hsPR8GcZSxrGroWUytVjaZPGrweHrKQ4czVJfvwHaKbe2M6JKyLNoqSLTiJyiLKk2A8fGohM3c3SGyjV2",
  "key32": "2HnvoqHtuCWnJGkgCUFo4qchQ1Hm4VE9J6mw8QW5F2MwZm3ZZ8X22kMr4FT7gwmZiyUmd5an7jBXSy7KqxKTnic6",
  "key33": "4Jirhzu5Tr3pvJj6YE5eh1xB2KFBwc7CMSCAGvsvKgj3K5DFsHPBCTYgVZQzaaKseu4uioaDWQ462MmQ7TQptenN",
  "key34": "34vDqxhgMvinKrPq1EsvCpZRKJ4vSFmyKo3oqKNsjxswvBw1vPs5M6T6gk3jzV4vFagzhb8ajtmmj1LqZAomXocW",
  "key35": "3wvf36CBt69LrQrk71wUA4gGyeFDXBxiMc8XphRurQx4mBLjgCd7FBJzyamRqhnw3ErDurojvmmNVJnSkWjnKZhz"
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
