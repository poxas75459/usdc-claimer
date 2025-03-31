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
    "2GcXx5nVg5StJvhRdvWT22tgKx3813C4K1qfsHMag2qMx65N2JKwkvv1EG4YwF5BkYpx5cakwWzSSGg92Lj5XLMh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R8voZgKaisgYpJAwzRcEGUGWDkns7bajwdJqcpws7k3UoQLNZUk7nJmWC4gYM8AcFnqzhNZMLQKcKsdvrue7ncq",
  "key1": "2js2GdKuD6WUQhn2PLE3qnjDB1famXHWTEbm8jARRxvdjwZobDoNecpdLtRY6ibycFKXwvZwQ37mFQ77NFnS1vQo",
  "key2": "3hWvBCJMLbvXU8sbX7SLznMVsvDTubXUS5hnnByoUQ6TJWVLuchzdm9fDg3UHg9eGy8wx2BHXQXTepERwX4hBYhC",
  "key3": "4SLehZBahp6PdkyoRBu8ETvKWvfq265nnAhT9sfn7MgV5pFRFFRoLyMQXmefHTwZsRrQksEw9RKxKFa1jpr7xkxJ",
  "key4": "4GhF2bEwxi1k2Umq7Gmpy1D1h5NPHHqaWXCvSRCXtcUZXj2rBi2H9m1xnwDcxVBSqw79vKJvVfmfbKcPvXPD4hk8",
  "key5": "42PmpGCPPNqZLpTdumPGgpRPkSE5FYPpvepxTAbUBRYixGwwqiAseWHjy33VzNSF9bUoN1vppcGwroCnw4XBggK5",
  "key6": "3eph6n1MVMusPuu5wZu2Rz8Mo1gmh3yzfhyDhjJDLv5KYF4h1NVnAGRN6ER3gRFBbo4kBJSeNvFszE59ZhTus7xJ",
  "key7": "U9jdDUuNNtLDXwHHVBtDLjGMQdmGzw1fktTMj3BYsue8z6dgzxLYHRZxdPYCfVHoU4KjQ2ozBF4yZ4XDKbHVhSU",
  "key8": "3AkyRHSvHqPtDLfnkyEemPEtDqMBHSiWcVGm74HYdvREuGQKUoo48rbPY1JCEzdRrKA3ptPsoxyoiopkUKT57LwF",
  "key9": "czYbM96ybWMKuPjYGPTpo8LVDnu8hjDdCg4nyMnsMWUMadN6gHD5vyUBdi6xbeMRYJU24nE1ovszKkuMzmKk2ty",
  "key10": "3QwpznyKP8wtwC42AroJCQ5PZpLQNsGEk5sTD1XuZpN7ufuN6RddBf4Hizmmw2HxZ13gH1w3DKzW2ettv9nFN2Mz",
  "key11": "5mPs81CV4RAJkdWZt2hmnGY8ZvtshZ6bi5MNB2X4N4MTNZy9daNDwxBma7FUVt9xfgyrmYYQTwTPA8jgCjnkuk8Q",
  "key12": "5FbcFigrQQnaPqzR7Sb2HUozgMc8wYajzX3MP3fLHYazprPBgzVri8zAXDgLAZc7VMrHZwd4vccypVpbtFeM5LHv",
  "key13": "5yhR5ZNMvBe2BwgPjPXBSYa6iY6qprQcmKePtvev2R6gwx9fSFECRszrBzaKiRtrdNQRfFKPgqs9xXgBC4bSDv4M",
  "key14": "3dRpe4ZszZMZQ8nhnEsmSVuNDJ8cYWwr7KizGnYjLgcsLbVsYgeFbLg4KYjq53poEge5rUzxn9tJAjcM4fvJWc8Y",
  "key15": "hLfHtBuxQNpzfkWUrg47rg5tGa3BQUtMuqTfpUpfaauB93yJJvjfBAeMsLVqavUaTko2h8SFVfcFbSigYuTG4iV",
  "key16": "jnN4Wv2xf1HdHnNWjeAymSWCDFmf47xDELCSV38guwet5GY4t7vBksy8gxKPd1VGvLpheyKCLWdeBRDF3FFSQFN",
  "key17": "2WYsmCcMDCA4o4VPuJ96oPRbtE4ZmYskRiDi2yLXKyknYK6T1kS3vzGWJX3pNiuMAXpbTCKs8zbaixZKjyW6NE3b",
  "key18": "61m7EeQRWqy58b7c9JcgnvJjGdvdGNtxszhgWukb8v2kBhkkv1hDFCDhrkg3KUDFDg8p6f3hJsucn12SjUkCSQ2j",
  "key19": "4eRzcCu1iBMe9o2pTTXcKczuWiE4An49rXzLQxkvrvcQF4n8J5ehNTucJehY7fiNer32vGQvDNWJqKEGsaC6dHu4",
  "key20": "2u8oJ6b19kqBdAjicwtWxLHJqkNCWg7HBVjBHHUAnDQ5iquGi6a2sXtXCfogs3vLAKen8hB2kxSMiEpJ1Am8Ec3U",
  "key21": "6y2ibYZzb6K7xmRckibUDWhk8FhacdcSizXTF3tFr1ubQrYqswLR5xiCmhfSrLYYcDbgBr847fm9W6av9JW1phU",
  "key22": "rsL4NKmWMQ9dGSX5wyw67kB65DgU7YjUjDeR4PtYsbB1tkCE9k3vVTokmvu2ii7maRD3RZpFTghFH3uD2A1txJu",
  "key23": "2E8VQZhBNTwRS6EaMop9YwHGrSo1KKccpvezFjg3pCyJjfUHhRHKzRkxKRjVTTFNb7GfTBU11Ensa6seVTsSgWDk",
  "key24": "CeBtMLp3rQftvEXjkaQxznguMmBLjiSp4Yu2yzUSC3i2ZAA35ANAUcvFNPiMAMzqYXJ6fShdmwUN3sHrnLta1H8",
  "key25": "4ohbuK9c4qFuYmU24omkquUWuKCXj2xgjWsBuUG6ykE6qduRQJUs5Hu83HCSwf6xXP4JSUfKtZmLzLZ22QT4tJE6",
  "key26": "5UPQxPdsfQhubYDEG134HL3h5FMEzxJPBo7VQ6HudzBd97UXGfi9rxkXeUrTbyxX5fheCWEmuSGamhVnAAhSX693",
  "key27": "4ggN24awsLdbX56fGG3E5eoNHmtoEbAQ9P4YyZgAwr8LhBjAqHgPUMDbPg8kKP8FX6bnTEDVoR7uwbwtPTh35Pz7",
  "key28": "2RzJ4sYESovstUhXjBWdTrBj5BucVVKtwFoFEN4P6HyyRpoAMnnu8g2WetSjZpokufTTUZQ5vALd2vJwZRXpcwNd",
  "key29": "2wMTF688EsGJsSTK6hFHBjuRrvZR5PGV8XgVJbxBRrgREUmhQRtTNmekexeGYo1m8CNpT6bgmBb9kdqxq3UQJgt3",
  "key30": "4WPdKxowxdJvNuLkAQ724sC97RmbJiMDUDiBRZuGRtUJAWKeCRrpRVKsLjhvEwgPWbssXdzhZhs5YNtAiapNdiyh",
  "key31": "2NTgRBS5jGoXExdBJv3XVd7gffMGGkgnqthByGPaJ2YcjHLwHE9QhcyZyrUg3FjsgCKGDeCPqToFzhNj8t2bx2mw",
  "key32": "ME5ECafTgTZQnLPFtgv5TgpBavUTsKnfrkWMGvkk1yp24eCVqXDnCXDPKHcQ2FKKfwvR965tPCPXotKwWUPnDnV",
  "key33": "5R5RwPsvp3jt7wmJV9ezyw3qyECaoBpSZBWQ8zKd5kyPjE7XNPE6jg6FXCRVtbVaMgWTPJtRUL3decqGDGshoNVG",
  "key34": "4G8mSey9aQnxhApqN1JnNs8Jv3UBNwCSP1SmCuKQvjGyyTS8Mdc4WLwFrucbAwpqhXE39WvKorXr6ECNr76VA3uF",
  "key35": "PzPX6gVmJARxL1QLjHnupmVMcSNH2UL9qQifBpdspUvu1SAVYYs1PLFytRqGXpsDG5Hz8gGUJ57PF6NcF7No9o8",
  "key36": "2Cai2rWViL5wLngQfg7eNpFTBPPw6fnbMnM6U4AtGQ2wHneFJmDmoWU8zWnMsYuytmRcrz4gGf3KF7wDZMdtwenz",
  "key37": "3Vb2kHHXBSvN1a9iZ65us8pbmRJsSzPnN2Wm8huVznuiv9P9xcY4hRHgvkzLvp6mcHRz8MJ8hg6t5Sa1hkRkRotX",
  "key38": "3NLtinEhBPKgjTygwk66BcR929piG1hjuJFkMEfh18w3YRZ2vt6uCCbg4utXKHiGezRrYUXvP2MBHHY6f9JryDJQ",
  "key39": "5w7thCkxUgbMSsCzutLkYWbJPwCjZCntTan7bgByJqdZ7ArrEyB47jku4NpVSJmiD7rYdBPpd2mGsWHYiPm7JX8q",
  "key40": "2osDnThswux2u51FACRjZwBaLraZMVkeie5FTUyMCsmAcG77DuPtkWV6pb2kcGufwuc97FsDvhZuuQdXt92SuVPR",
  "key41": "5RcW48JYuKwbvg9sgjh8cUncVkYmbDbk5vbRJLP26HTE2QUnoeRnd1BbVaN4QuWsPb4wJUWUPirwFBTroYefKCPV"
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
