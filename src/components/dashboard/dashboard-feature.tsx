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
    "A5LhCnbff55Fj3nGBtHj1NNzdaGfY82Bff5yfEcajy7E8CYyakeUVMk3kvp48ZaDwvncTRmuf1Y9SnKZuLJ7vLC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kLHytzszmMjxLzNwjWAD3up84eQciY6jwK79fEDgiXsLVm9Mh8T3yQEBb4XREdPVcCYWHPnKDaLZk6ZGAVerfew",
  "key1": "5Gan1bNju5vUT2me3Q4nJG8YxFchF4Ck5iPX7XxC24QaaL6KCMHir42aH8NToZeHk6pM9iXNY3UvWfsTQwV8g1S2",
  "key2": "35vWPUAHb2qXrwjHkCh2b7wmZHd21AFyPXZUb25HZhQqeUu9GHSt1GAz7dScgGmGZfe2cU29pNwbBXDv3KgSdDy4",
  "key3": "2RwDamcLmY4cRFmXDMxJtZgktQeXfoM9HUN6Qgsue8mo5MmyUpUDFHkDJbDctEFHuJ5aHYVBghpfgzK388XWLp4E",
  "key4": "mmxdkvL495W6FitfKFvqb4GCDdNp7bRV6JMzWHNeJw9c8dbdLbejCxaVAhDftY6F7EByvL4yu5NFLxtH3fe4EC2",
  "key5": "4deH7UTzf27t7EV2ALzRTn4vjA6rDEmAoPcse2rCn3ptxQp6CLNhsLHnDpMtDtRwnmQi6kBVkLrC9QxkjW9MCDdX",
  "key6": "4EXbC3mQTNAdjXKA1neqfq4o3LxuGxbrDJgXeK1XmWrQeYtQg7h8t3YewaM9uKcsDvajEoydjXEVqVDNdaGgzmPL",
  "key7": "4pgWtsMd71CuNzr32cB3Va8CRpbXRjjcXkDaxQjDH7d3Ax3EnvSkG2B2JGAmY9hgD9XYKFePq1v1Kqt17oqLzCgs",
  "key8": "3tkjwKbqKY7GeWWhyCPVob5SEA6i597dzbzuP4zsB5wjbXzqZ1hzZmAFswEfJoEQDaUBuzN2aReDFq1R3dS1qDmL",
  "key9": "4yyn1cKzUtqNPAvF3euQHPbWJZ1qCnoRrQaQuZL2fok5yuRNEq9aViXpzHpnURtvJm1Fp6gJfCdu8M6fFXXNGMv8",
  "key10": "oFrZoadaHEq48cT6DyziAEx6nfej8nPtcU4zq7ZE4k8FHPuYemiiQuwxBHwdYy5mpqb2c7i5RVNwv8fSqUh42t9",
  "key11": "5JMULQ3HeLwfzhaiDLBSP9MTsewJrhvnwH5dLvFaZqkKxnuB19KeyLRU9kf35h6hMWdCJTzFHnxrPzbLCReYqdGp",
  "key12": "25ZzTi2wmoXcWmCV1YrdjpgC6oNERfNRN7iQhhaSvK6KoVvsBRxam6ScFb1KY4tby4Dn5XUNB3SaDK1Br1NgXmnR",
  "key13": "3k2YJ443a2iBZnAqnuLhPAntwx4MPmEhmLZ1ZMVcARz87sZdr4AxkdSyqSUAixW6W4H5kUK9DGCTnaWVhfGJhi1F",
  "key14": "4eHeKsb9mVWebN9mh71z5q66mugVoL1wk1DDpuzR6gPGWRAGY7dBgRckyPb9g1TcYE4AoiSTqkVbvg6cdZaDSfY5",
  "key15": "ncW8tNbkJDz9ZpM9HDTwRvpqumtLuCVwuot2c1m5tmvcYGJA1aEf5ZuFWoKZ5oPDvpLpRH45qEv1Cq6Qw6oPvvD",
  "key16": "EZzrhNAL319kPTSfx5BM2kxANSevA21oN7eMX58qNRGA66C9CGFRv8MmDGgSMRMGoqx8xdjh5kW69nu93Ma1xQU",
  "key17": "4x3c9j6L4zqs1AH5GwBaYkRn6eetgfyhEADRtLS9Tt2pip8BWGBiviyGbcSyc8wkiCYLjxV5TzSEZ5QjXmhjJQvY",
  "key18": "244aZe3fyTDLyTWZmy9ksgDdyJuCsHeRsYwJqSiFyqs5qi44AWRUhDBKboC9nBsUphYZ5tHPWFQdtsxAjnM6fKdP",
  "key19": "2vWUZvmfgkELPrLRjyh5iLqwC2iN2Eo69YoNo1xRAsm2qahXtMV3Gdb6LRFqSDVUMqAD6bKc1YCMkMh7RNEQtdYv",
  "key20": "xofFY646tYY5VTN9QbB4dxpp8qts85A4mQjDoEczpVzW8hbNUjos3LktHtGBboNgFVUiSWb5KJJVfvdNMnYL4hS",
  "key21": "3b5XKur8ibeAfyMetVcdgXCHUmXwGFT5fRVZjdnyvg1dksppzJzofbPCQ3e5Xb5tEb8BYB6psKpwUzgZ3Kmnu5ea",
  "key22": "2kQPYbCySSR88QTDKJfYTm4e785jvA2LVuj8VdUsEiRe2BWiYNhn2xi1JvuaScCMXygwrtiWetaYu2LbHYPvXpVw",
  "key23": "DrAXLWZxpLdszhcRmg57Y3T3GwfzefheCwVVs6u7YnJeFFexQX8f3fSKntK2AkkdkPzp5wRRyrpw5vKxc3A5S35",
  "key24": "39AnuraUdvpxvkJz79Pz7E3LshiqRhykBZJyG8Xx4UmUAVtCSgAApqfZoQEsNsj92B9bACKfnkfVjFUofRmsbJ98",
  "key25": "4pz6RDZtCGUkwftDyx9mhfCnBhmJXfxFdiuXfU1ixWFeUgsLoPsHiRny6gvSpu1ZXQWU9ek92rfvYEAYB9TkApLr",
  "key26": "2RjPQRZmrPkgHA1JRYxM9feaVjuUsfRrnTVAvrTvXtXHVqDEXa4aAAXx2f3qcWcMFwAzLcSpXvYwiCFkNLhHXXtb",
  "key27": "4qMY8qgDY8ncosQeY1QxeLcBiQ49sbd2RtX5FpuPMsaPasavkKHdY57ih9e3sRGuzEreMRvhEVoErPqwN2aTE8h4",
  "key28": "pMPJXw4tPxrHyDDHM9Hbqh5WFWAYeLPtJupShMhFgPpnKLePKCGUn7Zsfvwcgmy7VS5RB6K1pNn3qS8jwA5qs6f",
  "key29": "o9H3MbncBRNzVDFXBBq9JugvRq8p5Ksx63DZhdons1yp9gPsRApaKHCHrKFVG7kJKiPAyZVJ2fehcodZ3FJtQTi",
  "key30": "5ag9WXCbh8sfXMTFmiMcvqGjSBPq43ACqF2LqazXe3MKBZKXc2AAZ6Q9b7EKswkt7Lb6duSM3xkQCiPjGjw3aHdM",
  "key31": "61WgbuFFajW5aiWvSdbs4BSwMrx6VboANmS4EVKijemEpgaMs1u5QETAWCs9aSCeN6WguEGmBogvutxPLyaSAAfy",
  "key32": "Lf8tv5DS2Cm4UwfYiW5Tivx8ZXGgNGF44Ra499yYaDmyVHSv3bQBae7ACNeH9gkZL3u686KFvYMEgUPwWZyTgoe",
  "key33": "xCjYDYz85NLEXcjzg1TYAMVsc29uVyoTL47cN5Bw2rWvYqYJ2JCr5BaCWt9bLxT6DnC92mrvoEW9aaBYdpMMywR",
  "key34": "2kg3uvvSpmavjrjrQhmTymnHDowc1X8uK2jWfjsdfFD8N2r1RTB4F5gsmsPzRy5VyDABgoDugD5hMmodgvpNvH8E",
  "key35": "4MMEm6XyQKRhBQhQ1pyGDB6wDUe1VuwV54P4rqrizHbRU947e6RDv5y3HjX9N2pKSJPZWMeWe22RQ7FEgCuzhmNn",
  "key36": "4r6TFyJiEdibcQ1gkaor8vWMK8BR2aPtxxE2325kAtLEtCEx2A8N8toX9fUBQzR7fsh8MVMwReWzdP4dHsgNL4yr",
  "key37": "zRrVLU4bcQbeneuPx39e916UcGRzLY5tM4XqAMTozkYHdDUAdkX4nKVjiAwQ5mQu2wsLBp6fLcL5DzDTEuUBsD7",
  "key38": "5qYzXKxYeuEbKytcdfnU9fwWtehiDFSVGnFtZjdRjgErZGBrkoS3ktyUkf7aYvSTHDoJSjzM8va1ZKV1bEo6mJWT",
  "key39": "2Zbk7663eaX9FfKnFja3L1j5zNRZN295hiYiy6v3jKzx88fsT9J5UtSMRtnE52uC4UhSJQNjkzVX923WJEeAvTE4"
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
