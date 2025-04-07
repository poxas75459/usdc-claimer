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
    "2Tg9UkJUFwZJ4qNukuXJGLaDrRhFMMXabG1QFCEjWL64y8kkZSdrczDmqjt1nYj3EvgyENzsT2cRnoW7d9quzJke"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n2nUkZAo9e9vgW7JPeHFYuBZdCHvGQU596n7Y6YxWLqDaAW2QFTKqHQRbknYrKVSBsCbVBkNY8DZMsaScoWUzMM",
  "key1": "5oaJfLDcsrqVKjbnj1mru8Ww9Fvudoc13Pkvt8dix7PFLwHoA1hvxuDPfjuWhi8aUitzyKhvX4mKJcJyBAgQQ2uH",
  "key2": "3e21Cbi2W839tXdMKgs3HWKkLaPQrYsCALeGRWoMyf4DfjSqmsAVT24pTKavb3Ds2EGCZUKLa88SgqTCWMubXPsU",
  "key3": "55WoRmWBChzET2Vz6eoQ6EwqKwhgWScnN2Gvvtu32yKmh3vk5NgpkdyjrxufAHb7xrkTDxXwtqvU8TyDdh5RFdgB",
  "key4": "7T97n52Sep7mwQiZqrJGYEHoScHRFLsm1oiP6GVzrEbvrBDkjnshuuymX3CjtKHXgWEYoWqwrtyw3RXkx4mczNW",
  "key5": "5UcsBzWKJXjDSRDinLRhHYP7xiTEARjh7KHesFfru69nyhnXK5vAJ67FEjQkZaCZbjCrJYg4dTbq8RFsqXiTTSPK",
  "key6": "3Jsy7e3F9WX7ydEeLsPjRaEg6gGuKYyHpDgMksSoMM7kBLqWEKTrMr3W3RFtSF24HYR8ULRgmpXNpi84E7X5NJqZ",
  "key7": "AfFaqB5mVR5agujdKa8gN2uMEuGXBzYbfZNcAEGdY4SGc5mDNxyoXqvowafR15Wh7WjiHp7eq2iZtb5hvxCjLog",
  "key8": "3ZuZrwFARfxzVfekebA5BrzCh4qannqjvvgj7ysuUAbVrPXnmTzzaRmL7FjnHK5tfpmSNEE9uAtFYkHD7MzcDbiz",
  "key9": "3GdPASSHcd68txQEod5P4xMoh4zj3auMFHarx6AEb7Sdg6uL1zcDMcB3p2GeU2EMoRGEoC1tjifPKaznYL1NWBPs",
  "key10": "4AV5t6RYHPXDbu1pKjSkam2LDHiTvrUS9tm3yiPdL5WBLvVsdicN899F6oH4YyoCWRxnsRjjVquWvf4sbcr1hKne",
  "key11": "5Mpv13PSe79YGDx4BRQwY9cnb2e5oqyA4Abitrvzy3BoF99L9Ag1s5aaUzZqmh91bEvEbekVFBFdBTEnzGWk33KY",
  "key12": "2yjB2LdEBdp2uMP6a5qsWV4H3egWGSPFXyEVvao4mCTEJtfMMaezToas6i95m2Kau5bVhjdMghnqELY7AXwg22VD",
  "key13": "4qcFBhLvKQp5ci91bphKdfwjeHoNJ7LecdigG8RpvZaxW9UDks41wVUe5prbeWquDGVyCez8788ApNvaAy4GEuiR",
  "key14": "4hwqTPCfPf9tXd2CiNvo6BhTCPPg2Qfq7QSQyXLqmWmyHTVgdMEnuybjXSxsdEVf523fBzL6kVbkWg75ynmoywj",
  "key15": "2g8bRNYomsHoFjghdYLRHfid73XjzWxqpDLr4t2gQW9WBBuRruHDt7tsjZE1GfYoEe7o4Rvy7NM4iD8HXtTjfyek",
  "key16": "5rFE5QN2Dwxw9DjcpBUqqCtjJafNdF3ZDxgsSiANKo6fWb95Ud8woqq8FbK6XvvKX5Xkzyp4uwB4jRhbNWT92aK2",
  "key17": "3yZVh4cJthUibok58UBEET8Z5wXW3d5zcUfgcM1W3PBy6ec59nK8t5BAJMNDwAh4F5hzzup8kWvGa2oriW1Tyfsy",
  "key18": "36RVA9oqiLkFy7s3EJJbu2zDpU6oi6ads4WKpvubz69oMckyLmyzne29qa4tRxLFdjBCNfMPWTwnNXiC4idfcwmi",
  "key19": "mdTY7nRhu2wLRbpbgoRVPPxxjp1oxrrJpnxvr9inDtkCmf4fcXiQtHVyU5a5RbtAgwkdfp4uhikME1Fj7h2B7M2",
  "key20": "3odpywrqyxUj5ZsMCuEttnPwyjMpjEQ5meDPdRXvKeURpT6nRTYLUCKHbCZyjJfcyqq8ec2Ao6eEBkDWbYWATa1Q",
  "key21": "5FDBAiqqAPe9HToobJjx6FB6V4vk5QwCGdYzYHmgSeDRhs2tMrXWWMKA39sLiK5caY9LnfYisXeA9ikqNEFcsove",
  "key22": "2nbF2Eg46jt8cTcsJQSVxvVNgosaHfoUHDuPPv54rVUrMaWDmJngButk4gNwzMuruZsLVqZEU3X6KyXzRhrBPL8H",
  "key23": "4Fc4iBrE6xHfAPsxcV8WS2FZgzoiEuzBKRQ245MpLg77Cj1fXdN4ziMixf2qyS8q7pV7QLzrDrwQeT1DBkkD9toA",
  "key24": "2kVDeKMrVzQfCs4wxzTbuYvtk8LDbDuF5KRtpXFmfqcAToRXohkT9XCCgkqwcfPoNzEEe4zABpJRB2h9QvoCPnKc",
  "key25": "dFLTqYkbfiipvcwXt5NQfExGd7mDsdSnWRQb7GzkwN93fVnDUZJQM8i9VWLvx7cFpG4HPvABpuPvp8k5oCpL3KF",
  "key26": "4xiHN4ZiVagr6unUxLg5GmyoAkqpyXXmcUbdeTvf4bQLGFXC1q1W2aaahq4nywcjGczEHX76jLY4foeidEZZWjRu",
  "key27": "3LKkoD5EMUR6Pv95w6h59mNvcmvshmxoJVjskMgavKb1ecZ9soi22hvDLzbWHEXivTX4C7wAA1i5D2t1dLvCcnqR",
  "key28": "4k6sAjRxX4hE2SHXtf1s9NG1EkZVR6a1C73BxTzg6C3EB89bF9XMx66S9rZj6fqzQ3Ty5WGKa5wyPLgYvB7bgxh2",
  "key29": "3Yq2EkrPDNSkLXfc2hcqeaEhERuR42QM5wuiVpfcPQkD9gMMu1DzLBcBmj9wMtq5Vc7yLzGSTHXcgLAfZ2ECDDVt",
  "key30": "5rZjaESMxPK72fkBr9453FXCmoJmGf8tYQcMjUGmVKNNoz51fxC2Y646Egbr9TMaqDmS416yiJNoh6382CGm4Szk",
  "key31": "35ATrCzVSJotQWU5hZNGgB4YdQPgTSfmsN51WgQbiiR6jFZHZ2zGZzyPed8cCAQHGMzaiHjtv1GesufEfUqMB8EY",
  "key32": "xskyoTqugX8V1NMtvDxnKNyzroX9WVQpax8yQzHb4dQ2kX5BdjjRhEceCFBCa9FkCkSsuEP4WzSSSmFyoasCyX5",
  "key33": "4CC3ZwbMKiPrVKqzMmndnSuLqwdHEQTkBR2npLtLyELuB6asvKNP8F4LdmAPxpDjpw1iw8imX2zmV64QGNQE2aX8",
  "key34": "2DieBo4JQEu3egWDQEmfqFF3VL7RfN2RRcDUcLJTWdWRJjYMkAr5dy7qumKxNULNec4BD4HYWrXHpBWBdAUPm1YR",
  "key35": "3WqPSu1LYzZrEQHcDNvFGfNg4VvyqD7rLa2FcfqkKUb1qEWvu7ZhMqXAK55TtvDMgnDobLhvnhpGayNu6TxLkEc2",
  "key36": "pD5qwVm2t91zjMUyBNUKMs4DUJvuXHKDjVHej2rPuTuX5NLKBPAFKBEPsQCN8Wu8oLbx2VjEWnxrDrRSGtkhhiA",
  "key37": "3WBTEdrjCgYYTPoydhBZdXpoLN1noSiML7dM1ej8xigUKEVzQQNEvvnxXmZPN8sn981QsPVKwpMJXFkuEmGDD9Cj",
  "key38": "25y5BoHvb47iNFVsCPyepffAQp2jFWzwV5y5ecHtcqg6iv44Biv5njEXhj3qp8Vqj7YuJRdVhhtQ2FtEwyK3PE7J",
  "key39": "2VFWX71JziNnHcUviTk5g6hV7cequPsuW2wAoj2BQA3QXk33u84UFVsRAbZXNyXrCJJPWfkb7mtNXi21GKZmmzWZ",
  "key40": "58RyJ7eyxDrpyyY17EgkDJkQLfwZqJSmZAjsHLqwL2TBWWAi6XkuwRCc6UBmaesX6aTy7JzUf9mJyUfmkdHzyT1R"
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
