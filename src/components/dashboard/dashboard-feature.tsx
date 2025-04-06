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
    "b2pQzU49ZbW5auPsopGeNUjzvUvzGU5L7BE7KguvV4eyxPy1QXzsvUwjj5pur7rsUwwPXEHVdvUdzhj3hTXr9t9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GXyqTLpeaDbYucLEc6NiXHD6oBvHYqiP6U1p6Skd4Vp26TdrkRvG6YmcL3mRN8L8EcctUqdgeDsrRgjm5tFRk9P",
  "key1": "5ma96RJqbbARTyRi2cU4TXgJXq5HfCaxmHkfyh2UqduukJVM15qgsSYjap3sQRZ1xmERrhWh9f1UsXQnYrTT7VJo",
  "key2": "4fwS8YEHhpXHyeSuRtN9j4Q3zVbyRZSirm2hcJfp712Ao7ayjNegnpcx6Up3VbUUMdffkJkVThxfiNLyGPyAbPUB",
  "key3": "KVHUc9NoagBNgHDiUFczYn68Nhvs7ZQZQ8GxMabzA8w2Zfghi4nNpU8YuSznsQdJr1nYMeVJ1VPecBuVAp6jtke",
  "key4": "67m5qPBUeBk3ukc584F6VEMLkib6npRNLgtakNngngod7u1JiLvqxWMjPtpTWZtNbgkPvgsoW7gfSppqSC5R1rR6",
  "key5": "2yxTbvsVmQRm1Jra9NtdyYxkF8jyRksHMqLMvYnMRe188fvdnKN1SaSJSRzPq4VczWLpNAAcfTpAtLmxcZFYMrc3",
  "key6": "JYN76tDxqYycKw2sQvSGCu6dspuw7eyA1gRtByAX4A7EWpJYHrkuTWoKhGDRF16e5fAZEwUSGw9pKdqLsVSWqur",
  "key7": "3WkGnb4kARB4M9i8EFVMjFARwLuL8oGzNecQCB6UxgLHY32uNy63Kb599Ko3Ktf9epFbVcXgkVw2AMDqPR6xeeYS",
  "key8": "4cySBJVwmpERfxc5qj7QCvERjup7oi2kDkt2azy2Zug2biZtWgWLewzf95DxbjsgJkQKi4VhfpDiyrF8AtsnJnQi",
  "key9": "UhMSpQnLRAvr2bdGWygFEVHzL5XGpvkGWF3aGJmhQWC1x6kBHiUJqoXBnwjfKuKPPxzU3jv2NVv6YFuqXcvpMxd",
  "key10": "5ZEyqfVVqNfJhoCQUGz6tgb3HTDj9yQLxpwig1i5PX8WJW7D5Qb9bmzFG9TKyN1JWSr5xnFaivAtxUNSXRkrCZDw",
  "key11": "wpDmgXmWtrTrhsX4C8L297QY6bQoVsi5HoSPSuTeQ13a1CWS8huc3hEBBwKVi7GyC9uq7XBPbG5u7byhTCng1GN",
  "key12": "2QLtxBBaTh7jWfxDgYc1q8AbzBZZf1A1H4ZS9imsB8kq5pLMRSJfy2zW21wMFgfzMWxvSJvBzoroiskWYEpEZLiq",
  "key13": "3MTQWxVvQr6tXcthNV5H4KLNFaTuQk1CNDmu2JxMdKA7L96NMdSjjZGRNxc1yMw9Jafbne2wDL6hHrZXmzYktsW6",
  "key14": "3jwVLZ2bF3nn4rdBk6u68xF51t13orpm5CsfpiQzaH3cAVBTyky5UbBvm2Y761vMrasmM6rMQUZC3dtV5pynYGRQ",
  "key15": "42fuyqkAvxubjt6F3nydKyVjgYyJ5qPgufGA4ecAy3ZBmQaBCja7DR44T8GeERFdaFi6herYi8fsToCiGR3rbvex",
  "key16": "4JsWcVKnEuoBpE9BYp8W9NmP81q4Xfe9Rke2wc3dtpqsCJ9XJwCAYwtWvVPhbv6AZmLEW5woCEEhNrZ84k5VBCB",
  "key17": "2cowHp1rhJwcH8EwkXk8Vuj4Y9BfM6aVNm5NAJvnTSq3hSMJThRVJtPVEUQ89Qk1Qg2LDHkGEBFv5aiuNAjMDUQJ",
  "key18": "2RLhNfPLiqtBk9aPaJ9Zvb4Z7RrmRzVpJ623FxYCbs7QNv6BE7zU8SDUmYH7eMGuDJUHMWk15jNFDbhKtdF3yuVe",
  "key19": "4HaVkStAYXamFv3BfqKGwY4dE7qWNZj7MeqdFNV6koAz434WsDgaN4eNd6Z4P3K3QBtJ2F4Yb89mC3gEAwDFyzup",
  "key20": "4QvSxNsnFjpdfeAxhHBijScEPxrmpNa8LZ6D8Ap2h4KHM5xxLh8ks4PcGs6z4hhwdcnoSoSaPLC6EC22XrwQSWSX",
  "key21": "3VWvC2YpiwGfi1Tuqkbz6iXLTaeiV5uPBp4A4M7GvwnyZ7H91e7bLpWkzVbirfpDYXMi3Zq1mtBhaRQFP6Z1zN4H",
  "key22": "2dgxtXm149u6na3c4W372gvrr1hEVmT1qssBW7WomJPi5tu5japy5XqAdpJSLw5SFAqiiJTS7jBwDcpV316wBh8W",
  "key23": "2Q86aNbbYqfnJPTBqf4zjEJHySr9GBQyeyP8frEQZBY1u1K2Qv1HUVaxV4rWdPaKTyNSkMP584bJh3xBHrBjtqZ5",
  "key24": "4rq7kLHutUaVvGMcEYPQgc8kPv4K6Sdj3axMUTX2XgV8vuLvhSpFng4ucah68YMZGeSUGnwkwjjrdNdE87kwbyZ4",
  "key25": "2r6vppyLs4Z64iYW8nfmDm44qVata2A9vRAeFv4RpQhNiVEK1YXhZQsR9JBnrLRueRx2Ua5BdJH6iVp9mN3eZPrD",
  "key26": "5ce5TeMzLaNB6ezvcPC9ySzcM3GMW2NdsEn3nhE2jzcC1sHGUJ7854hXUYGULe6DM6YBJ4dbyi9KswbGAnef4PYJ",
  "key27": "5XiGMsKsFMhYcvpUjASAfVEsSGBPpWjeudMar54SqLzBw9j3JiSbdbR4gyZ5zgLogMAdPq5j8UpNVjPj9Ycu6b2X",
  "key28": "3CWyUcsHFNMzsiosgVDR1XpjYg4K1nP3EhisQEnJHTebQWFfmkiBP2V23Cw7e8BHyFg3EsmfLrJef2RxLqC2DJHP",
  "key29": "33kv5Bt5GAc4XXajGbe4b3DETNxFyYSjtzmbQPTzDXZqqFke6mTSmnMz7tFmM1cNZAVeAAuQwkKU8V3jEbZ2QBw4"
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
