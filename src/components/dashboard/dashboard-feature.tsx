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
    "62DSZQ87QabmyTG445DBQ2NnecgfymRnAaPfWPcNZxZsdUysmXKhJhMv35bJC4f1LLdHGeGMZGX3tXJWQ9DHnjoC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m24PXxFMJM2TVCapjMj4XCjWqVD7ecvhKYfiJSyFG6NjVo7mfHA16NZcCkD7bNtTNDmnH1Jkzvut5q2VbgjeJ1v",
  "key1": "3z3WxyJ7U1M8n7mg8b8he59AT6o3LwXcYHT6piEWwG5Q9Z5QSztt5ynXpwMukHXmJNrPaa66SLV2UtUb8FC9r2Zp",
  "key2": "4UvfXzDHx2CUF4pgaTZzPDddKKG6A7VatPaU4duvR1EktpymcmdkZ6eKKw1TeF8NX1K4zcVAMuAftAYNNhGeM9Mn",
  "key3": "43kPfUthZcKcrVtcvnB3fTRMZgLvCLk3nP3GkmfY13b4KQvXDLsCHUqR2mFwS9DWDbGZbHaGQZaXekP3MVkHwqTN",
  "key4": "43pY737eMv7GN2LKHk7oNRzKvsCuQwmz1k5Stkfm48qVbTux6RTqttfRJaqZSoX1jE9acLpQRFN4EdLcrgiU4xDz",
  "key5": "2FWpRCjW7wfxF8c8S12fUwz8CvA3NERU5qcuUbKebZQexLHUoxSpgRfxDtKoGC8dVfiaLijetn21aUXp3HtqaTVF",
  "key6": "eLcSXNMKMViM9N8huDdy3X8uB65q2BigbSfuK6HUdg2ruCTJkB3LxtT76Q8z2fYDGTms5s6Kc6wypUiSo4VsbAj",
  "key7": "3RPM5AMKwQxon3veHMeCgGykJwmyp5nrNDuJfR3Pyd6zpyJWwyvDLVdfWsrqQ1soZqGWowiMpqFmAwZWZd1eBXup",
  "key8": "31GE6FB6A6sXFuuqjv7rg49GpwGqck2oSjwNGkvqYG18zSQo8u4YEoztbfEkV5R6poAfKtY84bM8y7gdnhzNM9Pu",
  "key9": "3tndQbthYowE92DxHBGEhtcePM2vqpWGZQ8rwP58cYq6DPtmRqcNx8hyL3Wzj2gwAbZHZGgNQYJocvnGXwDzS4vh",
  "key10": "nkWwwYwkqnu2BNLXAX3K82mMdD7Kn3mVbWXreh8rb8Bqk4XL7DocDV1tQEPPGJeCNvyaPWDDXAAXV1Axh3QyefE",
  "key11": "4mBYXdF8N3C1PwqoKXZqjkNqDzUVetY1ZDiE2Mg2ueF5Ai7kXWG921G3YPueXHwxbZCb57TxzsNuAMP2PT6sJ1j6",
  "key12": "2yYfCB3NvXDzU6yAtX5acFG8juwuDs3SLtbm487fikUcHuLbKSFJsKFa6ZYbpnxyexTqsZ1fZ3bLaPRbTGcJ9wma",
  "key13": "4vRRM7KcBoBbD8U7KVaLfbXp3wq7bc6xYzWsU1fRM3kyjTkVvQz3WRcL7SHNJxtcFjHxnY4NW8TYBi3ba6MbE3aM",
  "key14": "QP7FZKApwe8YgEmBsgjkahjQd13pMEVUQmdCjkEymHpjiB5mHRqyYsNRL1KNRCJtvrhwzkvsEhgUWwyqUSfgRfP",
  "key15": "4iR8QBta4YRCE69TsTCGnqcxaNrvHcMQbWhotTCuoheoaQUxeSP23FeQ4LC393r8sdfb5eznpraUKQfYHvUQmwnS",
  "key16": "4yfxf2QmhxbRZm1whMaVHTMdbNa1UmeMFVn9Xh1Yv22osYjN7dKFwizZ2zJW22GRXNBwjW8Mn6zUdxXTehJdQog8",
  "key17": "5ug2xyGBZkeFPPS9h9Ypox3VUNWxKQf9gHazqzNQEt9ULvpdfh3QthyFQJQiyufp3DQ5kyyjJnPB3zZEKsNpUaus",
  "key18": "5Mc777VfH1kjnLfrbELyTX8wPihd5ZLuw5aLLTpaoACro7y6rWcGVh92tWpj6p6o7nv9A1EhN3MZK1NHY2DVCf7b",
  "key19": "JfoA7fS6X3UDCEXMqUsjJH9sneJxb4RtqijneFukNGojRspZ1WcSuUSeJttybwsGBGwxrNBc4kgJ2TgEjcVVY7t",
  "key20": "5ujp2KinqC9e2j39vaamEQaD1hd6TTEj417B87UEoq1iycv7Uaawa8sjyDbHTQRpCaMNngYWQGKiAtJZxXFxFxrS",
  "key21": "38sJUrx2B6z4EP45cYLGv1mgqyaAwguW7Woz8Mk4zs4Nfzky2fjMnrNgbr7CwSxwFxpoxmo9sE6n1aGQ5dAoKKBp",
  "key22": "4jdUKykQjQzHLFxt8fcMAeZE8XgqdAzriNxqbSVw4yLRg21V15Fr5uzcUjNput5DuGWrgzx6Y5jwnZKC6yRSFycf",
  "key23": "33bZTaKFGe5aT85nLFKqRY6cojbwD7WCnimgrLh2VF4yAC1XdwSvbP6n3HkJK4DwSTNtjGGYBUwGiBfQjFZ1ZijM",
  "key24": "3YEzj7XD4wEXdvtLHxvszxY8WMbrMrbYJ5JxMsU3px5TYc7Q91eaE8dqKHSCFy2LLWaVFD2ykbGw4YPFPetNd3QZ",
  "key25": "fmwXPBTW7wPfuaGyqqp9SLMVRsVSvDn4BqvfYgKG86R6G1eXzEU6FcpxFmpgWp6aHzWyNtaqrdgB1GF1nXSDRPn",
  "key26": "UzUtM52kQrRd4hH9GFtqmCPQQ6mVb9wya6cx5uG28mCmnc2rxTGwnoTLcMDetnVhBaZnTcqNeyoMFJK213KtKaQ",
  "key27": "3kptaWN9ppvMPmADk7peC6AS2ESr81t8uRvXFwihnTb3CUKVdafQphRobf1NjZRuU18w26SBsoFb8g9kAvwjnXNa",
  "key28": "NDhhznosXnantgGcEwu7tt2JA5y4VEnSnVRV5kRUFh9gjqw9wnpXCr2dKGm4YpkESPj2HcpEzKbfMw4X34WFgF7",
  "key29": "61DRm59AjDReRFfo4hzjk9bgkTYqQBM4CdTBW8z15TpWGkYv5rHvcdTtLjoPLhmzvmGgQRQxxkL8JMkrmrn2oVyY",
  "key30": "3r7ER1J6QArkFMnCHpGZhuZTuD7fznA5rhHaNvkkasLSE88HG3g3wuP1u7KYLiSAduSuwkrnTzYt3ERYXuF1S8NY",
  "key31": "FzBa3n4za3Kw2eoqBivjGH18dVGSsuzL4AcKEVousTBtrp9jN9ypEJBHbyp4gMzQej6TyUkkgEjV2U1B6DCs93z",
  "key32": "4ezDr1j6r5CwZvKshdwr3FowLvQG7UAZjctqft6Qa9MPHHY1Zta676LwQvcNsUiz2kYYJj62XM3YBAsGfxFxcFh7",
  "key33": "2qCEPdoRjZKydNBbwmPkj9o37vsWDEAeffXxeJn5h23eRHgqbyNHwoeDTUW6xcqvJ7ZMbaacy1hyoXTXWUWez8xG",
  "key34": "5wEpRqXTLNaK5QVpZUtuimSdTXewKvStXvFvHDVNL7knsBkRwwuEsCCrCnSfeMTiGMYEnqpBTg8arAw8doveZQMG",
  "key35": "2XTveicbxHVTLe3jRXdUjwVJYJSeFFDuAmW5V5BSc2FWkY23wYHzo5TpNR99KM5Kjxf6k3786SupBm3D2foyvBfj",
  "key36": "5FKz6P2L4mSpNa3jXR7dpuCZEoFQJrAmtJWxpmXxgvzhCsyJrtMNktPVqBVz86vvhLaRGVyxMSKw4GwVFm6XC8JG",
  "key37": "JzRQQtAR9ms6sCTXpWzJeGRkwgQLnrPt7LijCyA2pu9QpE3doijHfcAZvp2ezdsMzimYB7gcxruCQGCsjBKjm3h",
  "key38": "wjYgrMrsVjMqPJ4bydrEyLGdzLPwoGFMLnACeStbVinQCK2prfZ8XTYH3mYLzK7nVDhoPQLfrJ37odctMJeq13q",
  "key39": "3jr3PBahFLQjg22XwoyFiP2i49N1VDV3oPyJk537ZHPEe6PMuCwxxaK5g6HupyKfJ2AokeHMUbMc36PdgHh7gzA3",
  "key40": "5jTekAXDdQ6mmFB1mS8BXDNQwWoe7seSVtAGACa2YXKRbAJeJhoW5Mp6wziWsT8fHPRReKxHS1vDA9CEV6B2A39C",
  "key41": "3ZQuLJhcmXhp4S32XMGtrkeWvqFu19fBmnp5xZK3bbLeFAojsu2ntHy8Nnm4oWisFD9bhR6QvT9RjiqMbDJidF3h",
  "key42": "4cb3S4RMi9PnMUBu965jkpXDrP2Dgy5vZKwMngDAZBvhy2qLo2watczQoSUG6p3zFeXD8dV3px8Trvwm16jHvR24",
  "key43": "2QyLcYoEkWzwYf7svHiPKKiemYXxkUbzfXPEyxeZEY9TBhnMJGJ8rv33EETseQ3H1idPNN3c38TQiuhzquhpDQ9Q",
  "key44": "2KZkPrKNVhWTaoNaWKPMWx9drGAxYJVQ2ufk7xMvcKsDVH4hhSCk6CUEEU2ACA8c5tzyMFTXQkdSobVMsUuADPYZ",
  "key45": "51EW3w3MLmzP53PH5BX3LYB1zMcpcVYzZykNb8oAH2qoDZGoekWTaHxFXmTvmc2q51WErxqs191dY3HU2TE2q2p4",
  "key46": "2kWxtsH74wN717ZhDPVKVHzqFxKLBKVkQrhvPVDTLrHoBVCsXNTRFyiQhooGJ49gYQrkeeKHj5vrww8uNxrEXaUi"
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
