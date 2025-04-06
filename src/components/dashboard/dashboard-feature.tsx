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
    "2Yufup9fsnVRNFFSCJNAk1wfsz8BmdCmDrWS2SGJJKC9DYvjhLnSNVXPYZTfS8yrSnjjnCimZW3JssPEM1dY6cg3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U3WaW5k3xhGPKLtSbHeQ4ivcqCoDh7eQeAGKx23nyxdGm6VV5HzZpzZWD6WoHGabzfLHpbEe9bYKM1MahNeVX8a",
  "key1": "1R5XVvF87TctJa24H5vVDnZyZ2teqXQWiUakqZPbLWj9jCqh9yuqBTGZuth5MJPcqQhPCAkQKaXFdCguHtJuhP6",
  "key2": "52psDa9QPLxdJoJjfHNmZx7SyFYY5LxQmGinCYZc53vnY6fvdeKcKLk6VfvR7HuTMocriJztqPxJtb84KbPd46uC",
  "key3": "2eoV1DQfgFPLxyRDFDqbdzsbEmB5pDtaLMQJsBBN987sP4VNts9ZbNr9w7xhPaCyZAd4UECt6BYpGBpXyJjRB54y",
  "key4": "5oPSeaoGSy7svMUeZAcetMVzJ4dtpEgva6PSPwjX4mMwVxkL9KJTG8bc3qY5SB8Xr8h7rFftGE3F1z5GnBWiFAmD",
  "key5": "2rWjRhqtMcd14zW3W9dTnB5p634BayTgGECr7rEXThbm8uBmZmSe2epseuPScjp4NkSXCKvgfshYXS4rLWGpDVAM",
  "key6": "5AZh7DfN3QyvWdW9vBpWS3u3WB8bcf8JUdTnrcjnXodMSmwQEDddrcPRMXgTFRwkMWiCnk81zUYFpR3BUWuVZqWG",
  "key7": "4QGqPFPkdgjTxWbPMMDuxxge3HLthWUHmN3QFUHW3YH42TKSLWM8y7ptXF7X4ApjcgvyPW6ekBS9MpBCj7GNuiZq",
  "key8": "4mTpmT1qcmFUjWt7AFUxnAQakQ7qLqqVEfbxd7skHFdRvc44coPmN4ULrG2Bmhx47qePcMsJ34b4UoHP7vXzAvKx",
  "key9": "4icpz8ZqCCsJJa8eCm4KxqWAfyqqw9iyn6n3mGkTm8PWLDoNGQu7ab6dtVnuHcWcu8sEKLbcY9fS56WNZB1DmvAK",
  "key10": "2UjpbSVHWAh7yxxxziHT4Mji19rJ4tQ4HNXFmHPGCGQ18DQKi5BotgX827CfSBTtdFuMoc91f4fg3UAeeu6P9uYF",
  "key11": "2MehbGbQKYaqBfe5S1PYa1ycN2d8RdKWX6YjkUiCtb7tBuZRCX23UQ1VAD5Qsegi5szDrXqhkHZ2rGDiwzk9Ht5o",
  "key12": "61aeZKQASmpiQHnEjfiEBWewFe9X3rcsZdFQvGLLUj8KNhQGQPTVN3CXPr88rY6CNAmxtTC4pmfu6A2rWWDBGAwT",
  "key13": "3XpavST9htCbHryjAZUjTcZ46a1JDYNoYQdpBZs3UM4VRhK7jdhN9YDPsfco8P53kaHiynpCjXQZ3Lu4ju9F9GqN",
  "key14": "3nEXjkhMphTYiPLkgyz392VjkpbeJcqNtdaHbUCxJaDwRrLidHFYriHjSdw8ZJZ6NQn8z3deD99xMA4RZaFzcVE7",
  "key15": "3dcBVbx8xHouTnRmfK9915XSbmCHxY1HpMyKZfnCATriSFzUSGZsRCnMya5k7HS4Bn3X7XuA9HTN3cYrA5YtxLfY",
  "key16": "562ghx8DgVuWkLfu92KdAta4UjowjtnHL1m1Cc4mHEZv52LLZDbbjEuemRA3TAveDTiEwThNmvSpN83JpeDuRexY",
  "key17": "DrWamwLH34ST14gZhKL8vayFMDcUDiufmpJMmwEmWKnN6d4CxYjJu73W8jued4jDbFRvg4vfvrhMXCpWS6XdxBp",
  "key18": "57LU2XxvbXL88vTJAN9jDxAnogUUF7HYwNnhyPXcg2RsgnHg7wXf2bTgTpRHqvMj9ai76Jv4fRbVUVjYATe8vyhZ",
  "key19": "2ZxRt78PaUADPgr4BvNHuKuUk2dL6ZdN3XZhWitCCGy3HexiaKpRwb2iKicYZDx6FK6EBFByZfGGvtGj5qVvMGqK",
  "key20": "233Vzi81pEcUTbXDw7ksSLUtutJjxL1XyDvbfZj8DPVFtRWrtsCXVtQaUDswg3d6df5miiM8oAtJaxktZANd8t5B",
  "key21": "pYtV1XGqfMhrPUd5c1eF7ZgqNZbFkEki6a7pxZi3XAvQAyULgcaNUo4pjEdRySfj71P13pMDLHM2TcKd4Pe3jHX",
  "key22": "2aosHykuoVZahevaRMjfhip99SffAGP6aWwG3teJWx1RqVMRjfa2ZHAsGd9bDyA1Djs1vxRVPNa2wXg6butdpJRT",
  "key23": "2m8bmwASDhaVaV1csC1DNqthJrRuQ85SXsx1qtTq5SpxAHpqnVox7Qvyig5SLyx2TRhoQy39GfhEp5Rf5eApv9VH",
  "key24": "5NQE62QS85wtXPBbVjh9J5FRNrWcmhX6XCrJFnXHUQwgc65EX7Sco6yN5fNWNyXrsV3GBVT7fLRvxMeZZVbo1mNm",
  "key25": "61eXRtTG2X9Z6hAZjSRWwZoaR4zQ3Trx1rU3Z4xAQfw9XgwvWBNB9K6oCcFsFk4awoFxmEPy6Dnp2Hz9dEedrcDe",
  "key26": "62z1kGmbPGsx3gM75USDkEN6SrMRHZ9t2ij9b9MUYdp1TZMcRrpvqTGVj8tqzR7nApB63nZhiAs35iyRWjZqx1sK",
  "key27": "2dgn3AYiEUnqoYBzdjnGsLMNU2pvPRnNwbsBDbBEqkrmrHMiPUrvXGNw9nRq8wdA7EfU1DXBSwXx7HzEu4sfQtfv",
  "key28": "6vcw8M7psEGqhFMRpW4QgFD2fmXj7GQcQpG9TQYcJxzWfi5ytFt3XJwgz4spApj16Z27hAwQEcTDpTUEfcMKU8a",
  "key29": "3g844KZN1YJtmWEE1WbX4VtyKKFiRdGPFy4jt8ZkQws7uJVYBrKEZdjXQvgbhY8yZptQJybuLWWEuwUcz4bHtNXt",
  "key30": "25i54tcrTixnCuwUhizn7oqTyzUgwwF4Rb81ztrsURdRMQGZPBnQya4kZriGmCsG5TDEKzQU5dzHH3bcLBwxpQCU",
  "key31": "2frjWBTbxtnMgLjuYLWSt2sHpP1e7qrNSQENh8GRSRVsXQxjkr1nBhf2Hm3ro2GsCwdYtUfXNsaca1aQtPAtfRhm"
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
