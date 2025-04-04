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
    "3tmNWTBSCqsUnJ1ZTh5fgTkXPnbbH8hjuJit8Qy8mKgP86pHbcUsvPMq8AkWnwvC4trnk8GEYJcfPmJTqJdWbBgQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M91Chqqx7Jt8ysoDKnhMWz5XMchEfiCSZcsJn222MotZ9WKSEw55xescuYtAtUNBopwmG35e4anvaMz3qHHGRNS",
  "key1": "SYieEdkWJ1uPTvM3K8zpJzkqR6nn9GShLCahtrpSudietbfMSPGTn9hq8RdatMzzdBA9X2ogfzPp3FxYF25UC2M",
  "key2": "4kcByzCD6pCVheJrapeCzoGw2yHZRNvef41d9B52sjzRQDvyi7jTX8sR2QRaKj9QU8V1ehpzLSzPmoNMn9bbYQDw",
  "key3": "2Jc19pXC7riSoeGEKu9Kj7Qtxq5BHjrF7Boi6KPMcpLAC9nptqFbRcJbrRKdyHjEfdN7W36pmpRXTfm89Z7Hq4eR",
  "key4": "nqnPjUABpe4ce9meMiWzDgwNs7WNJPAweL1wXm1bpa9sVgqqgQ3R3MQKZgFovKSstqJqaGt1JGG4ZaSmEVs3o5S",
  "key5": "27MwE6sH8CNZhvqnow6a8BDbSVVjJv1TTxSfb55QTCuqbEWe7dery7NyVFs3C2mmqXnHdBvpMH2U4mCFxpevFhHg",
  "key6": "5pXUbPHqKCBgzowwkPWSzx44k9HSMwuVPFZJtPmHo4fSaud8TQweDLYdjin9dKhzQogDgj9o7NY3k9mnsAzgRJUT",
  "key7": "4GfrnBEdRucPSupxHfjM4YAdps91UtdSdoVZx6ZAu1hH4uSWyn6mPL1wwfHWWy8MmtYUuJYRBjzSijgPq7G2yDgQ",
  "key8": "2Pqd1JiFh6QxuvJ4FeH1ctpj3eUvcooZchoodbGcm8gpRekyXft9iSogstMwLppD4TPaY1q29bEnewv7ZnioDtJj",
  "key9": "28nVNuNu6wnGhRfJizULTC5mQUxowMvJcWAxkkd6LuuKH2QPHzrVc8bCQL6nfMCHhQcXhiYD4kDXS8hm4kCE3y4g",
  "key10": "DeVRuxBYghcCjkZpedmFsFXAZCwut213kctaGW7aVe2MRk66QzgpVcL8ZbgckeNkv4vngMEyEtsEJZiE7zSbVyu",
  "key11": "5h6W2J38FSCjf4NV3PnMgxRnHYwEPDqBB7WQ7Jj4e4NR9Ae1m61jyLpuS8j2ETnZGF5NzhucN7sx3XiXTS6TTwv9",
  "key12": "gAsbiTR5yuqpjp5ajMKGnRoVYEpDNxBSfRUKuD5kicjrztotVZmDmhE5oLUCq4s7cgU67aEbJr7QQx7FHJ9hnqq",
  "key13": "2D1C4juMmZTL9QFgKEEYR5PvwLH8FGFynbvycCXb1hyAmfD4c83tsFyEJJZSMu1VmnKqJxjzfCkuTNdpb2uzvDcG",
  "key14": "31q8DU3hkiVPEXQtfgxTP17YxM9UdK8RNKzNZMFRgCbc3bGFDARvn82fy3xFcqPTY5SUrBu6YKuNVodpHB7AdTrh",
  "key15": "ogaYKm8X7p9CvyUyof9v1YDbLwYLf6JNYyWgXu5L7KnjrY3ejWtvpH7i9tn24uPZvgtUsHaCK3KZmx8fkbnPFAV",
  "key16": "xLxkQwUZJkgaa4zqPmryQQnitPKNDSyysyF5r7WPc3RKWBaBSozdt8VTxsQLwhkZfwEyfV83jTPVC11sbH6g3eu",
  "key17": "2JwiLX3NvMCNTcuuzQYZgvdzQ74gbbXvAiDMh4zWHJcvt5k2fzkGuxqAFwEcXAPmPNsxsJYtzUuS5r2Mh3PgzZ7e",
  "key18": "37XnaDs9r1C452nhfj4GPWjEeQaAUtQd1WdyxeTrjVYj5Km1PzagjEo5aXL9SL51zq3Jin1gr2WKhuR5weaKs1jm",
  "key19": "5CaPpzkjqgwVYpvUADhBM5nnngEm71zZsQ9VudvukiLqMFyV4ykAHke7APBNLqKpRK3gGZmgnJYwKNXRJ26Hik1Z",
  "key20": "2aiQxp83Q2uvZ3Qew4qiLuxwToGWvGSQHrGXQVpVYNHzPsEa371FeyFt33LdVb3J4wEa7QHNf1AfohPLqhHsnCaf",
  "key21": "4dELLQJzrEKUrXLZ1fUgnsFPbhskf1sYw6DG7CWyA7gosmEpNfpVPEzXbvkddVPqtJ2pA5rGPzHc4mJ6hZAKdjPa",
  "key22": "37ZohBEZbjWwTFMXKfjKgHMPb27UZzDqLUj2RbaJAWFmDJrr6fxwTUHUwSUFAxLqycCa6CrofGaWiXSKpbehkZ7R",
  "key23": "2xUmMzoka1ZNdYVec3bNxmLCcmHXvAxybyNgHdDih7SkvrfS7LdkKgtQk1RfvrfM39SjK1bhn5P7ztfQPXCxnSzP",
  "key24": "c79KonX938De5mXT6Z4A6517LwTMznt8rzYxAMwCHcDuaSH9u6NNuzM5N1kgwubUV8LMgqPYczzkKmiMtRRAtsw",
  "key25": "3NKUvjLytPDZwdQgc65YsDRpbVqKEhYV7mvNxxeEn2qqAsDDTqorCrCwkaBHAFMg7uG5wcPreSHmqMfp71e8TGVr",
  "key26": "uSzehrQmfWUKnToViuXHLTpweyvzpXTy27E7k4bEM9jsjFYho48Jkjrg7DfdrP158pP7252f3dfFKfTBvJhihVe",
  "key27": "3eoGVfw7fqd4zJ2SWp99GCv4SsrdZwMM8bKtm99JNyFeB6BABMeGtayaChboobBozDNJUCX7wbuzCBwfMBrAB1ky",
  "key28": "dYstH4Aox2RuTcbKASbHhxcsERLwnxrAkmiSyZpTHfyvcuXS6521wwXtRhHsvC49KaF48Vh8EDRMJBqF4235Z6q",
  "key29": "GdzG3j159wGUdjRD6aLnRWcxEepvZ1QwssdjDyG3xB8ub8cT8umAb3GFGHJgA7pCETaq59SKqU1zQuPGk5cRpt4",
  "key30": "38HNcFuHA9FNDVXuLdjsyZzTJ84Uv6Zz1FcQgekbweYVECFav4gAToyvnAxYQiHGipM8upY8NuHDpkKD8QjDa2CG",
  "key31": "3jRoGRdg4m366ySidpBWSoj7LPTyA37MYw7QwMcRUSYae7eravZ9U71dDeLrQNm6fZgGRhXrUyt4M3PRkZkcZg5y",
  "key32": "193X3ipcipH7H1gUhbHWcEuuAMtypE8SbaR3PHKkimv3Fmd3borKCicXvqDdZSKCD7vk4LKbqaEfWWUieZrEj9s",
  "key33": "2tEKfdjaXq4yFGTDhFPsuDAFmgV4jWYNJFFn4f62P9sfWrpujsS3SADBkbT12JGbAh6BXNjRTtMsndGcvNgPqovq",
  "key34": "jXBZJmcbR8aiiaYG4pJffrcAAvkYXWx1RZJUtfSxH6qsvntXitHQcVWENLLT8FSdYB8dqizybcHbba5Me6iFLt8",
  "key35": "qF2iaeJcfSs7KRu7yGu42K7bCZw8LQ6NZNEFuhwcv7j3ySAsqzdG9DqHgX6ML7N8XUG242oddAEFeZAsZQsTUCQ",
  "key36": "hMyuMaWJ5B8Gb6KVgq66N5XMGmwGZ9uMr2dneUaEtHu9QMq8gn2MKwhyXMcpEjg5pYczrUcvZx3Kr1e5ZT75tKe",
  "key37": "86565Eh7mZH2Pr9TVsBXV7C8Fft2FSfeRQnNj66gbRLQkJ9ekmfFeji28kP3MHWEXYtsmTna5VcQhthcJcnxvA5",
  "key38": "46CH2g3xGYqtSCFaKRYrQmqDXWjhkCrJgdUraA1xVZYbiR2Gr71oD8dTk8nD9BkqQbvUmmCM1c6m8SiFZ5mZRYU8",
  "key39": "4EN1FXDeepK965YqDTrxxxX7R9PLfgqWtQP4jQMpvFxxR5W3yHt11QjTFdcz2KRZLM9bW6q7ssQ6tULUgkFcvqqB",
  "key40": "4UZxzu5imjXD2kLrQFvSTfeX915bkbQ6pMsGJ4eU8YGAKCMWZxNqy2F9hyPHYEQGqDf563kFbMLoBuUKMMrkmRkg",
  "key41": "49fJHG8LzjuW1DWD2bF93avsUSAbu9GNBGmVTzj1t8ZrmZLiP5raa9SSkc5JWBWghe7BsF5G7DtZkNeLAXvXk8fK",
  "key42": "4WKq6oQBozeXGB1njpYpdDEdqP4B11M4GVc2TR1Rg2zHkc5iTCiwzc51F9Y38TfpQcb34wXAkMupLSNtnqvqwbPj",
  "key43": "4QQKRP4SFtXQp48oGL7q8qapovQAEupTzg2HEq3JD972yQQr47UxrYH9up7NbWKjEpmhkNgr2aqEVvNQUJQMgCta",
  "key44": "CyfkGX6wNMXEeyGPTqoGK2FMhKDJCYgRPHMLGXu8Cs13GfGBU1frRfmF7jJWiPre2JKCvsfCWLwigLH3bSWBMfC"
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
