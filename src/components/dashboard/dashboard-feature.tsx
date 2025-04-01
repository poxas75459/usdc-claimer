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
    "4jZncCAem8sNxGAzXM4XTjBZHqph6LfiZNTTK52wYb75nvYnHoZz46Lb2YJdocSeUB9rLBL7gyAUw61hSJsjTBP9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2krVA6dxMg3CEaLDExoVRXEb2iWCD2MsuwVRdbCx1CNB89N1dgrdRBeBx57DtaR5ywV4NA4uie8fWj4LKmXSWvVS",
  "key1": "YDFX7QBru1H6dhvfBxSa21JCK3WLE2BkfuQ3vziEahg4Vnf75m14e8o2NE4hScNVAwpTg4XsAXWBPsg1MeLLFHa",
  "key2": "3KC9PbxLP76XVNPAMqFVaZDT5uv9pGx4P1eXb8GgTDKM73PPnWwjkn7bZ8w3N99SxSvWDftNR1bRz6ptxU6GPZLr",
  "key3": "45urtWtkC5f8HuxfnHmoAnnRCpvoarDzCWM9tX2AcQzciU865vixCKjvkEj65fAr2CqmZVyNBGaRsKi42PVcytaF",
  "key4": "4ptnPf5RjCLpW53NbCYcACjoiozFEAttwHmz47P57gXw5dSyVTmdauct3hLvqU48arsc3uuT9GuKRah3VX2SGNfJ",
  "key5": "Sywv4fQjwuLSR9hMWWB3X7ySfhDuN1jM3dEd1CXuNEqpA8PPjHo8aUDxMhLH9PGCKBPBmpCvr7UoSr2k5ub1FVK",
  "key6": "5672sgksSiEWbQLKt8GDsjwmB6x1RV2C6ZFXGP5ug9JJdYY7HhfSmpSgvqinPmXnex2DMndULNPoG9hEsvUXFmyM",
  "key7": "5C33QQwZ8akAK6RCeMCBmw223U1UFmun4fEuXzCcG9UuSGvTQ7qMscHNhPWpN8PjqwuNvwQZSYohERqLwRKTCWQh",
  "key8": "4QundrjVdcEikVanSyE7u94rFcdgFmfN4YT9jBD8esuamBf9hyT2tKeuJGBaYf8nVx5ri98bk9mM6TWr6z5qftoA",
  "key9": "4d3aFxiisWfCCyVKyuFAnBaMqK2CD4Se1xCyqyAj8UjsfxRDj3T9AASVGDBoxPjcQSnscmLgp4chcjcVETUqPsM4",
  "key10": "2sN1mgpWq34pXtvQYScZ9WxRBwSR2D17wjtwaUfodnkGHRaTyZrRssSyBWY7MDKnieqT9HoZu7r7r7cj4bJwD8SV",
  "key11": "5N49yqnTYknyv4esUWfoSxytUwas5Uts8nPjgFzHvKDxLfwfYjoi971sBC7mUsYVpBN3njo7NpW2ZnS8QQBd8xjj",
  "key12": "344LrNmmf1aRrzarMo1goD1amzPaQmcLsdkiPYMiyjexYTovr72Zp3wZwZTTn5wD2QmkqbbDSv8tvhFLaG1JMruu",
  "key13": "5xzYDoZHwCvEWMhtMjXM9LpaqS71xSRhutFJbXxqbrEZctAJP7Fbd9qPkQGS1nZ9XPfDC4pCoZaPPaQJJqB3FVz4",
  "key14": "2YLrYXwF3Rxp26ihHaVzDCTm6Ph2xKY5JhWY38bXNq5dTNpr5dXWrDeaoqhMULcrjCPrqGf1RuyMBoVjwvMkAQW7",
  "key15": "5nE2cZLywrFT9qd1mfX5ZPsVWqavTF5M7ycEGBRCjRUnt5x6cXrYEVJg1W3GRVaG6xDnsudGkuv2ggtLshnz2BP",
  "key16": "3qn1KDHTvfV5zn6zujL34XLusMdUKD93VYtqqGxw9PCoGy66wVqbPEfumgkL5fEgEjrZkaxqceFPT5avnARuadPu",
  "key17": "53ZoievgzT1k5LpNM3vrREoNX2QnNawMwfnhYBzjcTvgBUaqWUBJ2UeMi5GxQURF2LoPU85j2afNzQruzPSUMBMJ",
  "key18": "6512xiLTSqgi2MtFf3QCJuSamtRmN8VxVMGmeFXxci88GqdNBWvf6fqEzteKNzC5oHFdWzacM6B93WyvoGjxZufE",
  "key19": "4SfRZssoBh22uHNeTtTQZood6mDcR8qN1MugUtGBEs8oFKWJiSgMEowKBPgHasCSLD1zzoevMiV23M853PpRWcsb",
  "key20": "3cUpPvWUyZFyXPqx7ZZ7KCjkXYn7eDMPxjS4sxK5YNRN9Y6fkTdmXj7M8RmDD1Dwih6TovkCBnKKxy9Png76k2j8",
  "key21": "poRMTSMU74z8CuNMutwPwCcP64HDCyMrYzcHkJhipB39hr9G9CNGLYexDRwUiSYuDUaY7sokjjgnk7LACQa2cEv",
  "key22": "4h2oKJ1qvw84C2VAMuTGxVsoNBQzVTiRm9JnLgmsmoVg5Tep4FKfmv1giHnzmaRGv5pXW3CgqnxaGjvQBfo5UEXB",
  "key23": "3EhbspYT2g9ov6JNEA1fmFrykPLT7jUPBy3z3SKf3kvEsZ5T5p2YhDt6DLEiXYXQQxmPC4d5qu9sWANQo4ENei4Y",
  "key24": "5UCqnokJAWJabYrn26TUBwkiSjAJQYBQx8RSr7TMnt94mGrF2dvxXnu7UUpVGTNTDLG5HTey1U75CT9R9HeXsqz5",
  "key25": "46gAcANobPcWNojbWUSacrRz6DVqkscECnbobnteRWqnLrwdYGu5E9UETQyRXSitQw9PRMzicco4Md4g2DkFtrud",
  "key26": "5Rt7nJoTBF9UPs1B59GBuKjT4MPrXrJU2XuNasfqCXia8qEsFXz2jpkau3XrM9PRKgH6GEtw3tPEudKVNNPjgaEj",
  "key27": "29qE8B3J1Fya8XnZRwkQMdGh9jtV5DgENrS2fMPXip1nGbijnu9XkdMvNfhFrpSzXkUnpDs52hYu9rhxczfLxVgg",
  "key28": "2s87giQ8BsthwdKBqoy4kpdZiH5typjrz5pbLyAE3L3EmHUh6it2LHRzFAXt1817rX9Lo8Uidzb3D3jowCLEcZAL",
  "key29": "Aa7iCacyssc4tQYHTtaWUCxzhnSi4sAFLz8EK1n3Vu7TZe1zBFeVECToCbWsGY7M7h63ySeFhzieDGqY9s5SXkL",
  "key30": "57eDT4eo4viofApC7WpfFbBfpFCCEZFh5vess1k2dNJQw2KXRYud7DmEMp3kgTS31oqdKbP741SwgVs5gzU4JASH",
  "key31": "432Cc5sDiU6kD1rCkh2KP3p21nCp829E674mFJUwYobfLFhdwDxDeNB9xrniCBPvnYmcUisdiTxSuvAjx9MvZSBx",
  "key32": "FkBYibnoF3WfmLMgBaureB4wQ1vveFkFDCe92CoFGFTumA8K2oqpKZN4VdZURtNECcTLi8wXpzzgm4V1GknQ45B",
  "key33": "vdjuSMjtv7YgjA6XeJYqsGTFJX1geFNqknnHxbEwmhNqGhjqmbrAhBxGVxvxSydXnhoLn6FG9FMCVGwHh8e8qju",
  "key34": "57hhnaSDtUZ9RqEsHrm3uiFq812e6L8zYjLxyKfHJWFSZLjSGb2Z9XGGgFYy2i3GLywbZVUAYAGgCykY3jkBoU2k",
  "key35": "oijnmAoSXGc3AcW8MgBJsu9QNLiE27pDBVmSKD7Po8V8QPi6MJztxzE7LKkAhnm1x4ctyDWceDPRR1UMrSgnVaM",
  "key36": "22ocJWeDnSbvj7L3uG5ENQ3hwWoRmJ85MWtiU89qMnFYzK9XNt87P6vAN6q8LTasU4rLtcHpgyTxFtMB53t28LUN",
  "key37": "XBEcyLbg9S118sWpSkJzZHiADxGYRpSLQyLZz5chXpCokzAgYDgtaf7veJgM78GnwbJyNiMic2mhY2yQHi49HSV",
  "key38": "y6aiB2XkSM7JnxtvwNeKYDSgpnpQ63Q5EcyfYXgQyRWLE6YjxhhGLWRDUPxaFzxLscWmS1WjiZbHCX4U76RSLPv",
  "key39": "3YtRdRiv8yTDb6NgFpmPgxuL1EuFe9CwqK7W4iNwQUyHtTapbXXrYANLjtvtQVcHTr4HWUSHmPLLxAk5JcszzhbR",
  "key40": "3chSKzD2qpLsGEJ5QNpNVptp1uqKFZpVM8p4Zs4fmB3Bet5YGpYZUvminJh4AThdqwtbsnrZWSsAoca75ti3zvcd",
  "key41": "5WPzbP4ztLmL7CLu6rACuzzQBE5rrSCHViECAE784ZmznNXur16D4isWkbvdzQ6PRoLFN9eRTMDUmWs49YPXbC3d",
  "key42": "4BtifQimnXYcnfaRUnpEPS39mqLxikjZKDQRvscpkVFjwRXzpNUGKHsxjNUsbAKzBbdjEAzv7iXbpiJgtNxgjtFA"
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
