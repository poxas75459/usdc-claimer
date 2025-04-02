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
    "3JTJgaCMooLBAGBMPcrkXjxwU7niu3yDz6xyXbLor3aqhcypqBRazWc4XDaRQ1nMJjQeWnQRz32syMB7BmgUyJo6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dqYk149ZDTnYjPiBczP1a64TwedEtejZGr2SwTBiqeJsHVtKyNEx3NnpGH1tAtjAedwa39XpsZxnJkWwghz3MVs",
  "key1": "3USw1EyZEhFsHbDyU68qYsiXgEvUcssgq7J5Yoc1CxDiVaikDjoWGE4BpKGBbeh5egrH89CB7ftVZCU83eDZpSL2",
  "key2": "hiFUoUpMPNa5Q6NpgC1AAR1StbKY7d73UksmpKfie5kjB7Rs4kbKEWXT4UUPLYrFBDWWEwN7aAHAWBK16FcQ6zc",
  "key3": "3rVHMC7aeZNTsXpiWcADAvj1Fq4wwE5jxgPZk11GEax6gxo1HirxYcMigokGwWEfsqFqN3aZcQARXcjHgbWMYFSd",
  "key4": "5dq9cEUbC6gBD98u2ZjWkj7d9FTcgZQ6J1G61QfWoK8EXqW9SWCrbH6iaBd6E2HrpovwAiBXSKdEFyh1gHwfCm1w",
  "key5": "mE3kTJFNUkLMLCp6uofnBxcN43fEfRoVs5UBZyqZuAKc94sVU1qG86cHSdkPg9QiMKDUNqev3ABvpBLehS2mzGy",
  "key6": "4EmNDQQaQ1tns5fahMmbSn3t9ZQ2HgzbYD2y4wYVZebpWGMSyEZv5xkedsvTuZ5jHHsm5B2cUnVkyXNJAZxJyt1y",
  "key7": "4queiTB3SoAu6wpWDK2MS3zDFPSakFciDapNsp5xyMwY33aGUTp8y7fVg2P1ifv3qQnuJXUQFZ1x8v3Cge7PhVSS",
  "key8": "5w1JGhjzeXF59JSpm82PKoucgWiBXYymcC7HDa3DSYE5AkSdCApyrG46TzfKJHW29Gt9MKGfZngQKTWfj9MWc2zn",
  "key9": "5e3wcK85XGzCytynVngf6tE6pdvnUfMBNiB3qxQLswaqu4Faz8DBmSLLYgrf1J98LoAfnEQerLiuZYRbVkaMSMrY",
  "key10": "5JsWe2i7PKYygNx2uu63FMHixDZ9Vd2jBxJJ6gskMCkQuKBbRdWV5F5dXmrWXRhGUf4a6fXkB375tZWq7vvPd64b",
  "key11": "2w4irG2dWoN3ht29AJbuNsbLp914hgxc11id9XbtagSjvqpfBi3YcpEraMYxuvgGFdWfxVETcMsvXzLXbtCH2Gnh",
  "key12": "3EeAtM7GoJNaKYUqwHxXAySMwRdo7pHT78U2cGDSQCCPQiW42hWoFXn2gLVeDKtiPUX64Ku3Nesi4QWJrLKCPVm8",
  "key13": "2SX9ZR538GGT7pqzvQfuohyWLwwPJEot39xngqYn7SJHHf6XwpJFNDMGCBCtQSMdza71ah9dT426rYSQDRvSbbU",
  "key14": "2i1weHr6YACsSnKeRxRtKvBgUrK3iNGxXzNDM6xQMer45ivvRrwM6Jr2SVbNXptm4Lq16NBuW5S8ppEqj7bBWDP9",
  "key15": "4TtLLEmH4JEVGjF6kkYC4yS9vWjQphHPAnbtGTxeDwgeCbnbF72QyeeJg7RCyyZsLwFK2z2yUx2rd53JhKGFgeqM",
  "key16": "28VuqfPe5eyBLC4jG26DrAVxSoBRyifPLwV7XT3Na3kQBUNnPhZNthGACqcvMyEpZENvRpLzx6PZ17B3JsFncTD5",
  "key17": "5ehG8Eqj4skypvGoNcaaYqHEFNu1PJnQgP11Z9rn6td2WVk4ApaBGxhQy3rDfhyJ6QYhfiqHrZdH2N7eMnRS6no1",
  "key18": "4ZeToxy8hTow1EydZmXXiyY8WQC86aszX6Qc9wgDyHmXnTeKTf8ifRUgXJeZwRRLDsQXLGCBptqYDoNygHnTohqi",
  "key19": "63GsoJwjDMCHSR8mfNNRzuLL9koUskcFHVB66VSSozmVQ7h8PLzSF1wzn8aeU4xKRmGLhZiuTXNaTjjhJY7GjDxL",
  "key20": "57bpQKSpWf8bcF6FY5hqXJhzmrWN1c4ckPxWxVKeo4U1sPEnUtJJ8AUuxB3RzocfZbYwgRLikjp6UYEK2b3LQcGW",
  "key21": "XGaULGAHDv2bK7cL98gWTTYc6zX4NZRCDx2t7LiLqsBmN4DCHFNpw6v91ebfGh6F7sdkbFFhS1LBaeAx6tHLqzG",
  "key22": "4b8Bqpkb39nZrrT4msvGdUMMCYdkX9HkpZTNK69wyPEhwUJQj2ntPmmuTjX6WZyv2DN47cNC5gQCwkVG3PkNCE7K",
  "key23": "3rsEExF9q3mDnqztUQJqFPMmt3vpTsaz6sMq6eNs9mGcFjqpS5ntVW2E6ahFqoti8ropcbsruCbqxUVgMAdHMwA3",
  "key24": "5Vwtj5D1PDXdFt3G1pPvsWjA1JCWN2grKoDxScXFdZ9xjX3kGvHScHwvtQfgSxPCnVuZ4szr6YpwWBZwkSRoDiVF",
  "key25": "2R1V5U9XmJBH3RZtnBEyNFR6pNjv3FsuhyL9iHXbGNSJdXaVdH9J9pXbQe8j4yLUoQ8Z14H8d4vvvN3u172dD2Ba",
  "key26": "5cRs8eEkZFGTxFXyBUYoVapdjn7Yn3REEyW93KtS5Rs3whxHvfF2nLACwU1xZ1aP6e8XvLoqotJoE4BRcuge32yz",
  "key27": "3qe2WWU2kA6h8LYc2kJEP8Ndx1rQ1stGQxNVdcVL5oid2u91uaitkHceFfHn7AHeN1anFB5pBj9uU6jhQsrKXSd8",
  "key28": "3JSk8JiVSSnh9tWziuJ6SyXmzWTb5iq2jZaMU2bofxPpg7QTsQsX3mgycyXnb8c5SBtGyFpxXM5uTbQZzCYMAAG7",
  "key29": "3qtmzje6vBe8Qukup2qefrWmDUig6o5DHo6cMEeAS9CrbiJNqPEGymB6SPiojn65b7TELAQr8WVtLxuheqMXgSVR",
  "key30": "3WGyRcum4ByygijzU8vJgo1qwtfZaXsjRD5NicB6Lkiwd1xgEomThZycRgPWs3sHQT267A6T1dJTJMiiUaqrM7X4",
  "key31": "2k8KyE27uN6oz1XaE9nizmfgMYzfg2UL8RDC9UWKpG17BEwbqoMxPXRnwuEJDeTnz92HgiJJqFJoRb3Xvv2krcmh",
  "key32": "3uzW1SKQJPKVwAoPqcukM4ekhff1Gsuyqu6bHMoXjJrz1pE16HeWtvKMmrGWjN6GGgH47aTV9VeoRdpMXZr8BA52",
  "key33": "4XCvNQr9oCkVTPUy786CawJvam2BY6c7cM1NBNfR8Hi3Ha7xUciTDZ8qrfeYUXC34pMnyGdUY9F7fPxmXNrL1CTD",
  "key34": "2cdWgidTcVABkpC9pFQD9uiFcBW8MmYuxWUz14pGoHg42LsutFPhWHXwou8BLewZmTmvd2SNxzbJdFbvUjuAthZ6",
  "key35": "25g74CLNR1FQ3Ym6mPASDK2iyjsrN1NWUfX1aqtvGReNMuqehxG3628Aj7vHxsFGmy3yuPq9vKNy3n4bpRsL8Dzj",
  "key36": "3DwJTmBZBKTWKCikeZBwkZG69dZabqHHCua29mkMvq953JJfuGUjrPcqmHWJAGNUoArykHhiZatqX4pBBCC25fVE",
  "key37": "nAGKLzUQPxnKW4BvuK5N3szH7vJWgQMWSRqjs7RFyd7y5WThshV3RBFtsNdmjfun5WPkAFziMpqKnZ7KFdfrhYT",
  "key38": "RbSkWVa9dPRx1WhB5dUQ1szSisSMHQzrFpTXTEZf5VhWE9PYYmRxPnKvu3mUE3vV3ofQ2i2Yty2DXHzRVTsdSWe",
  "key39": "4bBLRbfevW28CkDG4uVf7gKDKS4WwCZQs8uAzfjFNouTjrVddNrsQ7rtNfKfEcafMKh834kiNavCK7bKs29c7BX5",
  "key40": "2v47uqMb8Q3SG3iNNBTrA2Bxctt8tyRV1Li2bvP3vXH3H7Am63ftN2zEtyrtRqZn9wUUhrG3LVNkXMSfq731Yh37",
  "key41": "5obKvjj3DSncCq91F3oQuXkMYYrKyKdys1nzfn9vK4azibuQgRhPaQEpqjykK8xeVvsp7RRpAD4ExVKJ9epqHYB3",
  "key42": "5XaVjGsV37QKH4AujsjYcFfcaoR6yXoLF9av6neTj5kyCsp1y7169fyTZ4bezQQ7XtQZgeCKDLpg2SiDhmMePDFu",
  "key43": "58EQuHVj8TE7AiTmywNW8FeBBef3jUF8QdQ9znyVUeddyXWyqSK23fC53BSi5aQL6LyDQmdu9z2fkwNe9GLxPihV",
  "key44": "2CWDTPPMyTVHPtMqszTR7CaytcnnL2gbfHrv2hJu5PH3PDbw2UD2pEFnFGGqmprPE4GKv75ypZCDkQVXCBkZV6h8",
  "key45": "2Mn5DVbfjeuCfWs5xk7dHQHYya9pKHpuqgvgogyfNUmm5o7nP1c2LULiKKEFjyqmuzBDVfjwDP2Yv69yr4MnfJfQ",
  "key46": "2Ckq54Kig3mH4EPL8EVPxftLTGZQgcFePD2LpmQbXTVaMHn3HLrDhXfZ6AFeXuDSzvFTrXsvcMq7SfrqkrsiNSmY"
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
