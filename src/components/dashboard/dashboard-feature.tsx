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
    "GUsAx35zZyGPpWH6zUzcLLvBZUo2d1RLY8zGpCKbsucL1eaB1ZkczXPrCppUR7BwMfGu8oJKo5BsDKwv9X4Fpk1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28dVyw1Km3ijX9E9tmGhZwRWy3GXWPnPSZZDjJh7QfSwMb4bbT46mmQtFUTKsus56mTyzvY4CgfQecSZdW12cVwx",
  "key1": "636382u1FTQbAuFekJ8hqnzMBQ1d5VybT3Y4x5xsAEMjgTxwNLmChZMMUUk9XKeBvvXxUcBDt2qZtiYLeAZARvpM",
  "key2": "3JJzsvNq5pV9fV7UdPLEc1SMQXZrzGHpJcMHt5Adwg86KB64594LqFkhrCgoC24vp1XTJGGwXKZaJywKnS2ktge",
  "key3": "2z8k7Ae9W1kYdtimP88DAqNssxhkZgemQmBSJ3QbZ2QqPyUKvDUeq8yxJQWKJj8PZA8UhDN93QBThaLGgAJWhhw3",
  "key4": "2uPfC2eVTUGZzXXbHcRGJ1vLrq22JpdFKuwfko2MYHNd3AVZL4sSq2vws4yw3XGvzHWg34kovANWEseH5JsVnuEZ",
  "key5": "26fJEra26ukdVxzfoJZegBe4gCAWCY7NypgRgVaeb68mnhwWB4RZDcf4Yo2bZtn4WNhyhbHjUSCp6JpLUtMn2RCX",
  "key6": "3X5rbRsEG9vWnAerpvm53wTBBMEon9jtrere15wwwYZ7iX4D1xXJe3USfRfoxZDzhvPridvYDZyiPAD6UeeuqvYY",
  "key7": "51YZ2UbWr8MWExFPs565vkDKuggY23hfwNtkVbx7E6Qv8fg8afsvEMd6pvDpvL68pzkK1CasfYGVeBsyZ2hwGmLf",
  "key8": "MrQf1wc1AQ2aQwJYCh1mUgJ4LbDgedaKyfeHGA5kKQMJf3FEyXQUUcZgeLDFTzUEFsSQHsTyU2v8AnW2rzVtEHS",
  "key9": "3kzgpRALmgbTzWkyxXPf5MruuXrtfxWxJwHoFK945EALHCEBFkCJKyP94gYU8cyL45Uq7JMaGKDt4fzNWCHVpjW9",
  "key10": "weJv9sHVLrd1TGWc8KKeFEgFTRXk4dPdGkgqu8myZgfjmiE4Lf6vzsVTEKPUxeaigfFAD9iarBHcLJmZGD5KZBg",
  "key11": "36dW7Hv56S9GJXgYoaZXEbFKmG6FqFChAm9Miv8eUjoHH4ayegoDxyHcnpdNZ1oZwmXrUstrpqsR2WJFrDnpvYDa",
  "key12": "3KRz7RBQFFm9Yfg23Mu1yDgXY3xZr2xbiZScLqzzrK5BpT288WraopgTuxx8aoVK8GPyUgtEJJw4PmDFgF9GWtSm",
  "key13": "4CT65rTqVbrQKydkVhSSDQP7WMBtd8oQTDy6h1eQ8y7AgSLKu3AcRXEr6zZ9oixKX46HgFSLYJDuQVnauAqxQUY7",
  "key14": "3HSJsY5XdLB3eBpSxgSbr3dQrZ8BGvyGUWAzVTHn51xSHbDz6emFQqbJXhUvGKMsXbdwmdefPv9fBoAGRHdEZSfX",
  "key15": "4SiotZbqmWFhYK6EFdCFuE37VqsjG2kNUGU5VuZVXZNG7pGuPd1dHcxL3KoKHf1EMJcdsru7HLHS2t2HLvbKG7Gq",
  "key16": "5geg7eDXGRAdyjpcDEVp6sNQHrp3ANjRBDwQZZeNr7zeKr51m3vvZKpfGFNkw3L2BPDh8xwU7WwPvFjjQGTrpK8a",
  "key17": "4aHrbxQaEv5A9fHRg7tFRe5jy8KfeBjb5aa819HjQHCt9G8HkUWGWPc3as1MkiLYmVe6knMxjz1LufMAnkxd4G8",
  "key18": "4gEyqmXG4vdAt9WS1YRCMoxVrSMmk9oz1sZ9kb79q5wxBGRRHgzsEQhVFxgfMCoN2PjPAn2oCkAKNfU4i2G3QSi9",
  "key19": "4YbTFXU2va5pW4TtovRSkDQsQU9JBxYFnHScayFsNqmyuqPRU5ubaph3PV7t1LLYaMNSSYJkcQj8ydqbi5RMF44s",
  "key20": "4bYe2HF5wqKr6uQj1HyzpTZEUuUNV3nULTgQvf35pZFV9MtuCq6Hdgs3c1YCaPcL4GLgZYzaXQCcXNSzkCortfEo",
  "key21": "4JzpF9UqKmGBi42agavVreLsKS7XRdAAtGy3PiLeEhT1fq9kCE9uXn7gwwFygCg2qMmaBBZQjRDnqRecbNmgwgAg",
  "key22": "4g8w6cSEBvvGmzJ6TnB9bYSAZXift3dvoojZMzrZiM1wresvMdCdKhfWhqjdrkgrDK8vAJq7B1yGX9oz537vsbrD",
  "key23": "5igazqCMhAPHK5JbthSq6ECcTXCrVE7KPLfQeXt5t9LzPGKuTBBJHrbAtxEdAia79koHW1voP4GxwmMHpz5NkPwE",
  "key24": "3nUHriLN3N7cNXNecp8VDDLK9Hku3PdFfsA639icLYpUJY8jqzdnR2VJ5xGyBvrVDHTQm1sy4RVY7xYKahYp9iNv",
  "key25": "5fhqttdpehFAPUMfAhaoZGfwS6UwmeeCgTytyjUz3JaiSV6Q3VX1PHfo6uVyeqADi8Es376m2zLaHe23Uyq8v5t6",
  "key26": "5VpkZWGqtkJ33Ngm6Q3zepNk3XzvjPvdeQJm2St8FBMgTbyqUjMpDPYrmbfcWGVLJLVes4b6KF47tt6t8agE7D54",
  "key27": "4Zi59rF7ijXqseE8YiP8PkiKyvuH2cHZFLzi99k8YAxbYU8Uzhkgfsfd7rsyDxEuwkiQzxd6vZKRPqtpwH7MDwzc",
  "key28": "2nvzi8DjXugWxoMCaGWhH2sxLs9osEPbgHQbsEuTEVBzYAvsnWj9raHeD53cwvc2V7ML9vu3PVi93obyMFst5UnN",
  "key29": "4EXKqHENK2J2WJHtPFJC2Zy3Pds5nqugpo17un3L5mzCTDXEbWNJtWp2aiimTSc5MXhEQ3ALZ5DQTTpqRkLut1LE",
  "key30": "5jWmAwSAHp1mqr43zzA7gAo68MzLQmmNHkbj9UCqcBjvPk3ptnFfDjiyr3BbRvpammKM8Z39HiucWMtcxh5179Ck",
  "key31": "5KY15hjdiDcwTuuBZBfAeWhcwdRYu7fvatT2umSnz6QBB16xzJsSeb88ozw2BkHD1Zu7MTEAfP1n5jP1YXGqRbTt",
  "key32": "3o1cZU6j45Hk1g8hDRugDbfpLCNQjTZfFBbLHqDshgUG2Wjik2b4VXqyvanaCT3JHYt65vfXqoFsCsVX6GfhMM6U",
  "key33": "33WQsS3adjVBcn8wCkPpv84HAnYZyh6bkQaza8XRQMkXWovPNmiNFuJft8WzDuM7Qa8iuDQJEYUFPBjZB6Z2y8c6",
  "key34": "254mFgn1krLt3Wjhfse22PTTHFPBddFrqGg6rf93oue4iqdFzoZY6cpCoxAAzmxmW2UaEsE4vkdCpefx2qGmGaex",
  "key35": "5HQpKCN3Bj3zMsmoPLRhwzUudYUdqScjPTzprHB3wPokEwSgnnLbSyf2nLj4rpmBBSsf9aaJDcEM78EsJHvNAVex",
  "key36": "4LJrFV91C8vNP2pMam6SWgSZtE6svfK1Fayd3X1DXkE3c4vSseVnmhfCBxFUoBwDckNtMF8paBgtxAbiDbNTqcxj",
  "key37": "53GYPumouDudLkXbRArSRRkyADYVK6hB9iz2NJ6aH2GFGVtENtYdzfe3WCMaCAJcgkGrUrKArzYFnk7CJ7XruyH9",
  "key38": "242uHKpHCMg1RYUs996b1aiyy9LeqnvcSibsn5oQVDA6u5Ko1KsPHhAmnmVfh1YQAB5549X3aJVX3auNQ1yge5JL",
  "key39": "4kF1c8L9BE5xo33hJDxk6MpNSc6AhXaoPiK6hAGGEFBZQamohKPmkg55z5KRe67C8JpR3z7AsMk3AeLVj6KSLvd",
  "key40": "2w7EFd1oUin7aYjyZJcyNyhSpwYrpyFBGJnnUD5trXwwponB35FhnhgLyfnCFob2D1GpxVjP36BuUR9a6gyCzs57",
  "key41": "4wA5X26X4d7ErntzH8bWk1owM4Yohc9EW23nt9yqwKFyVRTEFFMMQYtwQbZFr8N9pvMcUosFHhBdtXiQs7yKmdpW",
  "key42": "65zABEqmfz5Jeje25x7ZFdYLeYfurZwJ78hFRPKchaWLHUpRZPAugwsKZ6WfCQAjhJvqgaMiEW5HVGu8B26dq57K",
  "key43": "2JM6upkUuRW9pvzqh9eyHS1cXQFje3Q29xdBws7dBg2WSfxs6Bg4CqxQpfzJqwoLbyjyfDrakzq9P9xkUq3bAesM",
  "key44": "2qWB8YNYpheKfpU9bL4pG4WzpqdE4o2T5sm7U1Gm85RgQioMEyXkn34ciZTx5QK6rxgxHoGGVrUTPUzH19JJSciy",
  "key45": "Z9XZgakGAsZQhy7rqTh5ZgyLFJdUPeid99mXayF5y6rEy42mMFeohYwrbHEpNAhCVeb65iGWGjNqarkNoErFYMc",
  "key46": "5gfNoHrj6zi7S4Z71gz51DPTZGM36MgnaoBsezXKwLPz5fp7S95h48enjuLncQ3sxKDFPzMzpyK6N87aaTBxWuaH"
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
