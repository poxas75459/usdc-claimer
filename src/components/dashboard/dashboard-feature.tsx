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
    "j6efvTaxgqEUfk3Zeti7QYQydiwTpjG5rVBotBuCgpaMc41EcoxCVVCWBgy8VV6XNWZphc5ECYfAUGU5jBzkfTh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qExFtEwWTFfDKxcjh888WKt8DEwSDjci88FW3yN7mjUK1gX9ebJt3owfJF87WcRnoFf71kygCVJd82eESAtxqiQ",
  "key1": "2aia7B4uS17VRNfV17HQnKsMVY6W7n3Q89MDPhrQN81wSkiJnnMCNZH7T4e3zyAH734apFrFwV2CcgzbQqmHw6p3",
  "key2": "4SMDB3btYGJcryjfjntXK7jc4vAo5ChNuWbidB5HtMPGgcBTXufDhDxSw2G4orgqQ435fSAQjetaRv3eAEgg5qeW",
  "key3": "67EE2dXwcn8RrTUm6AsPWMYeHQMRrpTwmJ8VmGyxSFGDx9iavnxf5cmwesBeu1eUMJLi3bBdi6yG9nbJ3xrp79ns",
  "key4": "4BECx8SgMS42o4ZGLj5Qnwq3iGAvBhb3fbpFMgM4kCv75UGeFKwgau1g5d3yBtYPeP2zoof6gqi8tdBEVrsUmEAV",
  "key5": "2iJs9ZtA3w2u6mcjJuBBRYSshRDpUiqKX67HEiQ1xPfMYGetzeuPQh5gR8bcrYvbrCuo5WFimYTD2syYWaTxYamG",
  "key6": "4EsEcXuuUHAi4gnMfWAKshxgUbQtnx4UwyM6M2e3PN9azfCZMVacegjwtTpRkDh2hYGqrZgrZgmQBzNqdc6vbShf",
  "key7": "2A7XVntxa8SgCvNf6L1e9NRecDg6iVqo7S3mBHdaVGMgro28AubhnVsGWKejFH7UfEgkvtnhjJ2CQCRN2wYf6Sgg",
  "key8": "rzytW7GeeTp4NdRHjCdEM89aiQZkExJLYgiw5E5GYd4nyDUbZJq84DysF1PruMGj1h8eLKNdw4hs5MurEq4ea9e",
  "key9": "2Q5TzRUq27xkGa8q7HqwqpKjoxPX1mRVPMqDEr9WvXksWFGdU6WPkGnHpBWhBVWSabt3Vevqg52gAXRNLuGqqK6G",
  "key10": "55P7KyY1SrSYE1gLfSjQBPSfwHgBXXN5w61HdFs2xRE1qZj3GkEbmeDVpGzQAjH6pK6P5pEm7iTEgF71wc3BrsWc",
  "key11": "4YrhU4gExa3aWeQZuLLwV5fswT8qGXAjTxuqWpVuPNeVGKxxB9roKps41oSbwwcXCB4XrSvPwhZPzzfLg2oH5237",
  "key12": "4w3xUpudtca1QdHvmyFLGMFnRehnvVLn3PX5GnFHEwAfuzcQ1QSus3EGqPKPwDW7sTttBc5To5voPMMYRLo7ch3z",
  "key13": "tegfzZbXkH3hWqY6Yojd4QUdzLWQBB1WsY6az6MxSkJM6ZNfgyUrvoxejweV4Eei3ytUGzLtjAGtJykDJU1ncJE",
  "key14": "452P19iuYvnXDtQWw2py86Y9GHdmQnrTyj67Er5EQieBESi8UhM8h2XWcCtyRNUjHyymRZTJPePugcuC5zeynqbu",
  "key15": "3PhANrrBpz2NPzTTadwqoNb7dzA4SXmUx4fmNkZ1bGJoBWzVx2ZdRCFMTgQp2oBe4LhaqBvDsbHtPr8j4xrS9ENe",
  "key16": "2aTnLrhGZBBMS2YwEfYKn79VvEHY7s3iE39DnfUUC5coN5DzxLCsdNyV4JJKWNqNLV2XAca7koWX9FD1KyqFX6JW",
  "key17": "2Qdui6M7xU6eaYvKztEYbtDLSMLkxyqD9sm8NmYNnTx4XhK2B4tUpEFNAXYjCDfEmFnFErjz3yhkaRXrieemJNQQ",
  "key18": "3HQ7k1HQEp1RvXZHd86CKSBdQYULcEyVE4UAStYMAabk7Not7VWC2pzDnDTfnWuT8jCmLt8A7iYRWNsncJftVs6d",
  "key19": "3YXfnpmQWg2TVogjtiQGJhMBE6xW7dHBqswjk9pPfE75mtqRCjWW3dJnb7wpwQWMdJxMXvYhi1c5mPD7feQFBqUr",
  "key20": "64KWb4XD65T3VjjuzELRETVYgVfuXfdrDCvJ2UFteBhfZeia3BKUuCSALEVJipXp3xLyuXUZJVvLAPt5oo1wRF2u",
  "key21": "2w1PDNye7cUn3Vpww1yF4vabGXyDPXEdHjsL9pwqMfLyorFnDWHGs2FVoydGD28ZsFqccYaigUTtSxdPs8aN8V5Z",
  "key22": "67EAnt7VD1y5ZEoo5RbzC3nXySjp469p5pVH5vPkVjN1gK99eZ9QZ6JUzSN1sWdgHvqUpSyT2LyDY7w3b6itJft5",
  "key23": "5dpxf4if9DUda6Jcs6YdmBhtHB4tn7U149B9fpdGDhXFex7NbYLmDHUQXDg83LhVhdVm3RzS69R4BG2PsVHqsxVU",
  "key24": "526pjmiXvgXwM2ikA1mcs9D8pBAtNUN5p3cfsM6mhMXy2UGR4ZQ2kRFyruHLGJe1kbPg2T1wa5w7ahBbYPe4xi3C",
  "key25": "4jNhCm38v97bRfDGJPK5CjEZ3hbbQ575p48vNDFrUEYfYsQB9M7ZGUJ5SxQq9E6ZQCNL5Zjf3JYHXv6zD2pHJjYZ",
  "key26": "3X5ZxXAYTFdTmiv6rHgKHPbFSCWE1fRWnBqKiMawYZmA8bbdFm71cWTQEAp6y44nZ4a3fRrnoB8Ba6WGs4WkxrYU",
  "key27": "2BY8L5UznXyiPehrheTQqndqc5pskP455Da16QsKne94PEmXasoe2rwv5QPuyjvX3ZNRSAZ4ENmqsMpp5seNFttj",
  "key28": "v3ow49zkTvsjjVToU861mNXPmAfsrCSwmcEhB2RpK7uKvoG25zvREZFiGKFBgBTKFH5uURZQC6yzRP4b69JFoh2",
  "key29": "3HtqyjCfSeEXJiUNxZVD7cJDjwoGiN676cTpzSBUnEftVRNoDwHbLT5SJC5fFFFupFiD2HwRi6M8wwicPcv3y28f"
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
