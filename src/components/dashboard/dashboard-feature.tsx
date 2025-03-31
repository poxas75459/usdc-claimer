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
    "3hQhWrqDBtP6Zj2zx9gVYkEtdqoWAgymQMy3c7PvgNQ4xoi7BATMQir4C1qgPj6HQCeEFPrKuBy4R8w76RUyfKJk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y7pfyfPwdYTHexPu94cbFJUUHQK2s9gZKLtbpS8MpXbk4ecYVfpGi9rEBSsuTS2Lqufw4QLZrMkTmSfdKaU1qot",
  "key1": "x9nQxKU2Ncy8e4CzKWDoAWxdUCChzMXFQWnivbfbgbVvLteD3Ya3k8G8THpoLRWk1QMNh423GAoM5J56iL91JSG",
  "key2": "9fj5TkerCFtoJvMtMLpWXdP7AkH73TCeQvmsd6HEP9J6P1quQfJvbMpnds4rt5vptBasU3EDbBhNS91CZy39jmW",
  "key3": "cYxoffTBF7KuzNki7GGWAo9TFPA2GRWyKCbBVkb2WJtdCF5FoAqcbuRPS3zivwj33vUcyoUMDzf3hgSJjz4GeK8",
  "key4": "4ybvoQJQVjAS5gCmtq1y1ztSPfkjM2bNKVbHBGPPfAHu3TFC9TReabMSdRXgkZJK6w3vHD5eC8NBY59q88XNRYRo",
  "key5": "bKJhhbqPB4Hz5te4ZTtAneQatrMLwYkdQW9wbA2okYB76JLvPHB3Jasc7LqUMF73dXB2yMYLcQ8msnMxiFKvdzV",
  "key6": "4k5kzpjc7r9ub7AJtKzqB3nr5BvKBE7rEHDbc6JpgGhZfiwDpzd7L4rWC97hj1xXYYYvgG8d9C3oqJb6ZWRmsg4E",
  "key7": "5PqQQe2k2bJLjppP514AsQ4VT7tY8JsV3aSEAWqJkq984CcPcq92k6ffaNE3NhtVReEpiwTMCV2EgsBKTyZGQNKH",
  "key8": "dTzSvazD6qSSgn6Pc9eCRz9qoAr924yk5W9nQRhxYN6Vj3c61a23U7nrrm5s91zvn7baf9mXxcktcwQj8YfCBKP",
  "key9": "4w4gtEaUYhMfMkD4UGLp9QCr7ExjBHCbzAS9vDakCUdiizdsoCAhsUpt2C5vauN4t8Dm6rWUvasiZJyk4xSFfMoc",
  "key10": "3d4q7odv3m7ozpcGJRKMfKWoSjhQ3TRReCDowh9zGdiWVayj5aXLLxLdKKfvnJ49r6y3gb7ZZds8q7HCtdJceAtR",
  "key11": "251crgzPJ2rNoEQF592mmD128LQXmfxSPkYAtBBCCdrvv2tW5ysb3aKw5vk8JbD7fnHw3XNoZCc4tKK6Q2AAd9Pe",
  "key12": "3nCXFEJK6W3rULuSRKTRjkf3RGzNNjn33G4JmwZBnSMpvHcwoqRMP65vPmXmEshUaL95KdEYeQKMRaWtHyAT8zf8",
  "key13": "5MQxfFsYdvmBEbxc6v4YhVfvXnEViH6mx7AyUdWh3qsqk8gCy47GbYWWmMtbkfssZX2dUUSYcUF9nYqEJkv1oxR8",
  "key14": "2PgmPKfLz6rcpV7twvmXaJjRNe5TweUBR7UQBoVHh4Hbf3mpiXaqmqMcsHZqvc4SQsyatJxoNrbwc6Ejaw1nYQQo",
  "key15": "5VX13X4esK8zZjAFJfyPosKkeSBcy8XjQ5h9pUywZmjnVfNgFBhVbrreRf6DTyPTw6iR9GPNmamUkSbt2J2pdggg",
  "key16": "2A7pNPJcGAkVUNLe86y7ojYJV7DiRJF12Tnf3jQNdkWyybQrBtYLcKqmvnky9pfNusA5XDBoHdxRAiMH2GsfTFGf",
  "key17": "26DT2gaLZrheWfAn634VBoPkDaBHCAGmVzqH9WWGxzzVG1MTY7Jy7BtTWi7KUqDqWi5h83bPhBtCyF3mK3Kmz5FN",
  "key18": "2Cwp7NbRuVHtGYfSAfQFuBrMcZw4foVs3rWjXk1kbu35ZDtaEqF8GtasepoSQwmdQYDou19EmGhAwLDzu4NYQVks",
  "key19": "7VdXQqbzdUCcLyb5nKtGKgLRHWTE43upHaEkHn6KWweiHMtR85MnRsek2RfLRRxp1nDzjTFKNCm48eh1VmCU3ee",
  "key20": "4Wv2BiiytyLF3asyR3knky8ksq28qDHEshcuyKGAJJ3w4ZcJhvRHYe7gVfo63h6yzHY8o7K2mRcgEy9DxM7YEyEE",
  "key21": "2WWUUskUdPVuAD9Y6Pf1YY3tZBW394ZCupJMsood9WAWbTqEp9ehcVpdnbGTvWVBzubm89dTLpSamtgdM2ZuiFEz",
  "key22": "4jU1Aa9c14U28wNxQTZb14t86eXtLDUR17MLwmnHCyxMzwxXYg4mNvqGVgt3fHa8h6VQYoGkQjeWbAEvEv41z7Dm",
  "key23": "2g7GEgzKpJwrRxZGYELGAnD82PFxKTfU5LysTeqUNwycr2MpLjRKsgzJ6Q6BGnyav3LnHXdjwBWfH6s5K8asN6xU",
  "key24": "4VTNjSZUFRGf95zhZn5NKkpAs6Xkf8YyRnJEefBJ25a5uwusycS25dQiubPXR626CAcFPP6gGBfC4d6BsjMR78g6",
  "key25": "3dwBV1ws3RvLPyMh8EWVpbNeC9oLQDJRn9hWJihbErsuzTj4fHcFnznkwVmNWXzbo1xcwspddmfwuXkR5pkqMo2Z",
  "key26": "uJ4n1GRPHcKoLtJmXBMaLiGMCaUMYin98yeWAY3vpVnkPMQnpi5Tb4rxFzuspRM8vMP1ZEKNZKKJeoWsP1LUSyW",
  "key27": "2JU6jaf5faAySN1oEVpQUnUGGbk4HAWLfJuFaJCggrcTNPPmoJYPR5M9fc9vBUScEuD6tX8bnuQ36Rs2tpWNws1b",
  "key28": "5pqdykQrX3QPXwAm6AncSMEqQPB4cVsjrEhg5RYBEidAfYXU9DC2RCDCHZ1S1ersuUttivgasov37i3iVWWsYM8A",
  "key29": "3ExUiWyWt6ooKcbZeCZ9b81xJQHX4CPtaAS3osK6JZNkSpydHgtJJxxbVqwYv1QurRvvCqjta2k552f1ufuTyc8u",
  "key30": "2tsNbPq4g54s6ZzC1X1Q4gZgEufxecLjtWmFixapYfdLTJ45B6wjWDomzSMmKgSzyhy8Cra1yWVAzhQ9svoG2yHU",
  "key31": "2LCfP78XApeFFPFJ5PsKYQKsqtgv6DXFZVrY7Y73ccztW1srhdhxkVS6wNVPR1XpnHH94d559ETN9qdP2QbJ4YUT",
  "key32": "5UoTJSMvTvSMAtRpsftBkgKpAeSQGbdU7UgvKjUNk5SkBRJWE467Ped3h8HMuqQ84VFW7bPxCgRRGfVFE9tRazgd",
  "key33": "5EA1aJiTc5f37P3y7dxZWjFSp59knwzcvE9N3sDc2J5bHWWpt6sffh3y8btiMhhBrkz45FqyDFgJqkwD9QTCMGQt",
  "key34": "3GMfVEMHxLP3xB64mxQUVYa4Cr5AafNvfcDAgA1N4tSGqeEvaPS2kz6oM4hY1VjdpELHszC9bz4cA1ttQN2r7uAb",
  "key35": "5dAubWkC4g2CuoKJMprwVfa7hewVfiN3cQye3bHH3oGDDTNvZv1ncxKK68KHeYKkqqQgnACmAzp8caa4C9GNAJm",
  "key36": "5AhQm8UeBZ51NVEo8qDAouMWtm9x7VmfGTq1rkq4dEsfgkdhKLTPZyidFh1xqEtVwFmi2acGWY1zGav8AmFCeQNv",
  "key37": "2k3fV5VC2zwaZVpoQxy5eWJP3e2J5PMhmavqZ6guaFfXxBGBL3iA759BXnCeipBRsrUgpCrZ3462BY5RkufwLdsa",
  "key38": "4fGZtzRHFTVju3mDzZFxtrLjT9am3jHiZmKxneTh75oDJfL2wqSXEYLyfysPbzVNk5tMPcNtsZuCmPH1kvaTvw9U",
  "key39": "3rXDVGD3b5A7YpowjRGW2So8DBMdcNuqv2ciqsHqEphKzX4Jc9CfCNC6453ZmZw6nXoAVZtSxUNb9w1shyU6JXTh",
  "key40": "25XRWX2fmDWqhGCEFdbeL9gcSbnAGDn6XatiwMfWFQFop1Ucw2cZgkfzXnqwiyKSoMiP2uFa4R28vYDfFHe1Q5oF",
  "key41": "2orf5tJEGxYWNZ49YPzLbU2Dqy54LpVArGMop1r5EdQEGwfeU7B5kfULFYPzLw5ijv29waFh4A6aEVuQuFusNDyA",
  "key42": "41fHYdp5uLCssHYmZfhTZ5g8GdExAURun6zBaYiWCXfnteemSBKcYCQBEheozz8Bot3fMJXAgmRNqeUkXCTLsi3Q",
  "key43": "341dgtQ493XxBU88C2SXMCczGtLpJSeq34ses5GWXJUvkoXQ7hTsn1har37fP7YruG8RpES2uBryHuzLYDN87Epv",
  "key44": "2wxBPq2Sz4WtxhcMsPN2VTgCJPD8x536u4326MA5wFux1Edg1YhQEC3iFaJYEEiCnbtyyZz6ZNQXe9H34N4vpueY",
  "key45": "gaL8k9mo48thmxpXbxru7tvnMt76S2ceKkgvRR16AyuMNc8dNSGUd2hGCpnBQwMEetw8PxJqos29betnPZ5uFhq",
  "key46": "2T9Q7p2nnACzCD2YXpi2nTHNtYswQs4B7WBi5GzLcfZ4AnxXWvpcfC4fa9dzUfE7yJqEgVCDkVhZomh6rbpceT3s"
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
