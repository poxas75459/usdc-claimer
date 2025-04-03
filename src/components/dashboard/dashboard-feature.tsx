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
    "QmVjomrkjBHwsP6RNFt9buVVchcWtVFeRCobE4g413TnDrmpzbQHrXovgDnwuMbfDSPPJW4e4Eha1SKb14y3cbt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E4CCusNgwWdVcSr9ERu1w95sFVzocHsG7SUMS1EXrpPD3XtEef8xkGFmz9yfxMRPHbE1UU2pNrs6HZg44dCpXc7",
  "key1": "55FXdyvnxq51LAttzyUP2TPR1ppgR1ixJutAExcWtNHw7HYcFTX6kGo4Gt8FMWajbSFHAmkS2kLcKaGeuP59QQoM",
  "key2": "n5AjMKXuA4n7hCsw4z41iPGFbxcdDabmAcuipdr3FA8Q31N2J5AmAwMuPF6nMhBtofqCzWKA6zaP5KXiN9Nj6CV",
  "key3": "XGwgXpksNs36cSNTZ52fVsxwrNuYq67RJT3zByUwCLzBB1gRWGWijrxdf62vKgw5nQo4ieyoqU44JXEjNs68sBj",
  "key4": "XHtPQqFRXCpCzPAP8azJCrHDrA8ZAxs4G9T94prNSNwNiMUoLUGEknnoBwLQmjp76Re16okKVavjNYET26woiwV",
  "key5": "3YeyGUtWfqnFwB3xaVHt4W51h3dTcB3cqHMMZj3X5ANNDMkLQdFFZKaCURSABSemqY4twAWigENTN9tyGrjASV9A",
  "key6": "5xYggNBoHHiW4zwukcvYAcmwyqNo37VvDyAmMMe9FeQ9RAzbYcvpCMWFohU9gg5UkeJ2iBFaxX6anhXxFjahXaVv",
  "key7": "61MXrHbD3cFM1MGRPrus8QgMoSPkAtb6zvo3PycwqfQnY3SAbvUeMszUMFqrGhwuDfeDto7xGT7jTnDJDKFVCtG5",
  "key8": "4koxSpAUzSj5MQhpJPVC7Myd6ZUiKfCYzBoEno1uQfk4d2RiQ3urWWBvEDQuWfgF7hPnhurHqxHx3cwRVuuVEf8R",
  "key9": "4K6HiKmorSxZNCRaxpkL1wPzSKw68BSq9EWZkcjitoThYYysnqQL53CRyQ61SUtCvT9HDdzQFMAXcWmihGY2Loyy",
  "key10": "5oDx8FrB4LiaQeWpoUhB1h6QS3D2F84USQ4ETEvCLzMQJJrSVXP3KkZMov4CMC3KBuMzzD1Umb17DPMDfPYxcmYW",
  "key11": "3iHziDjLrb5Tj1YfRJxWJ7TTiwhYUMpHttwwSir2hj8WDvxiUcmdr3cVGrUbuATXrchsvnomVqYHEowmhQqk6gJG",
  "key12": "5cjBQMEbgghfLTScE7wzcWJvzGQNvsvHxHuWxq14KrQbidJYCBTBsaeR9ZfQE3qjGNGwfJ6nHnyjyKiDS2yPjzSz",
  "key13": "5uUdwn1rd8o5iRjjkTqQ6JfUC326XYAgUSLMu42KtnvesCo5CQDGvmuTpNdA1Nr7iFAK8inbtKyrGiKQmJsKE4KT",
  "key14": "28TYUCBEY4cAfFuMtobJRwP9YxfgdL6kpTBX8MfwzstHXHa2YrhrMWxCPoso71LCAM8ZaQak1VVuEso8C7hwMPvj",
  "key15": "5p2E2vZ92nPKyZpgoqc3MAbckTdZK1mUaoHG5e9tmZ4qZdwtgtdEkEbBPqN3ZmCViq6VMEXPJZauXxZbV5wTFhTi",
  "key16": "2PaqWi6dj4MwTqGukwTSSRvYsYeCTXTYs26XisNm9jJpr4vahFVvANNCEcQCyBenvN4fwBt7FZqSNCXHjd7qRfzZ",
  "key17": "3rtkysRv7nuuZvmtnWpiKaRmrW2P9v2fub8iJAPiNEor5RHXtnBKTRBdsEAaUCTbcR9Zd6jzTqpnjmXMSf7ziMKW",
  "key18": "2ycrhTSuT1tTPM3yT1ZwabYCew4ATLwKKFTPjq31TPHc8MoTtWGfPQdvLoLKsqU7yZ5pxyksKkn42Z7ykjytMCvZ",
  "key19": "F9bR6Baahr7P1zanHWTdKvTaiB7ozCyF9zq7iiULf7BZxvv1RM4GAnrKoGC2nqYVWN2vGuPjegy86cXEK2XPwBB",
  "key20": "jZC21Kt294Dey7rHqvJ7p9p2NB6fG2HaS6dmigac2NPX1K1yysNV7iWXatSiHVC6DzCHM67c4SnonL6LhoVy7b3",
  "key21": "61BWhoBYZkWfGqPPCMyTjFp3Zh6uGZb1765qwSnX3i5NpHhvYgbePJnDZXcDa5zqsZ2D9fvHzvY28aWMb2sYP3Px",
  "key22": "3AtwqVHbS5j3CU8k8XA8R4gpLFhfZrUmE5waRWsgHrNtNZD2fjcjYroVeSfYDBsMyRmo2S7VHusNksbejLp4pDsv",
  "key23": "iGd8vhByid13GBDsfsY4x6dCcGVuQKcTJN92Ssb2Wzks6XRANCWo1Arg1KG2U2YPbM9qLkge6z2f7Nxwx3y52Ut",
  "key24": "4VwsaH1FfWZsQJTT2G7Wjz9VmUc773ELRnCJgv9eHuKgkuPwRHs45qVLPoStnHj8ekX9kJkhMxL5RApuUFrwjKya",
  "key25": "5afjM8646D8EKciujnN2zknVt8gybYFKFXBDWAVY2FgDfBmypYFf7zBRRz1JgFX49spwXJ6KSkn5QbSc2Gt9Ry8c",
  "key26": "66SrHjXdWdfmpjrpvVQcTTrWXqQsRKMuwRJRFykkCzX5Tk4ekKnD5ZQvSgj5RsbrxbEYFps7JkeaEXBCR9KKWFbV",
  "key27": "3sBtYnstTQASvzeHkvnCUCCDqrhL8f2JMtT2AjquLTpVAg2Xc65GDZGCfCBDydWewPKKDbSVHVEonK1GbrLWiMMN",
  "key28": "2gk5sxUM3cgf7N1e2PeMfccvzgiPZsFqdgMuc7s3GRaC8CQJgW17anDSPYpEsE4NpmvpSTL67M9P28h5taELwYLc",
  "key29": "2iZf9GiPicpbWNJ22vLmbSsYn5Fk6JJ3JpfkbstCAy93EahwCSPFsSwmXTdqeRAyFAxGPnPSXTod9XhmP8TBHagx",
  "key30": "3fp9rLS2fwKmC3D7aoHpTANivytvTbrCdPorFxr8bVagjFxJyJ5PZBupJVBek5gfoaF64LzqdGX6JFimPeZSDo2N",
  "key31": "2GpchV3SWDdveRXoQAQ2Bhw6Cv93wDaiG6bMxy4RV9Muhx5irdixuq8WRvniPfwDASXa4cGFDyfgQk1L12AVcwVJ"
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
