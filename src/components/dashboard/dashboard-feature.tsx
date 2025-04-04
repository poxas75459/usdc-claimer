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
    "55shA7tBmNSivUVdefEZCVaEreXc8xZKenXapK64eGXdp1Srbsn7qQthypYuSGKFmvFFY6UTsh35zxdTuen8NEf4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o8a1y8KSB6ES57SBdSmzkRG7sRibgCHDCd2eBgDYpNaeRpb7VhfSVVvTLt84w2eDaV7JUiMZKeg1ivm85THuG7A",
  "key1": "2xNhuHBv7VZG5TUKr2sQi772j7LeqDHNKJP8VhfGBrBA4KtLF95c1dF48SzmyEmM6gwertzjy87w6PWFhc5pgmSB",
  "key2": "3CqDRkqLaJtyQKK3MNPnAGU2eF8RK7rGTg3enL3JtebKg3H7uwtNij5u9KKC4VLBsWGwyzvZRPH6DcWajTz8o7M5",
  "key3": "24Wh1jSv8aowCXeyEWytCzyyqSRLEdS59QYhcYXBPCSkEL4RAFBE2g75MaiC1VHk9aYC4YQMnCA42SPjq4P6HRWH",
  "key4": "24NJgtmgSugq4UZBoENmWKXtPC9nVbqHgRjg7iNE6QesYf2LaE9mbpc1XiCLbvesiywsDVVbovceqjvnso1oVBKE",
  "key5": "3UyxLGdjKAo3zryXaSACuWRA4FdKzGcHnatAicF8KgXHjgHyoowikeSn1X9PZaADfjuxFfPyAeyNSpLy788zd356",
  "key6": "3GStXTDvSzK14oUFoiCHd4raeMM3jMfZEjVP7e2BUwWAeYuSLTwyYVeCKngyGSj2AsMQ5bnFAWR8LVnQrEgbrush",
  "key7": "5bHncRuGHYKUkYAFQkBviDUTUafYvTTM4yVPvSdp5gaf3TRf1aXxx3t87jGU7KcAXn9q5ua2sUVpQRSnMymtfKdb",
  "key8": "5VhXZiSh7RwrEaVRPPdNAz1w2FBZ9Se3PpoGu4izSQUuAXMVwcHZ1Uza1Q9hAqVbscni3gs9kcJ5A1qfB48VZqie",
  "key9": "5bdav6rLqVg6i9CrRXaovUtqrGbqaC9yVCLz2ntk6XuMSw54yXK1tHgJZf1vSuq5BBuvwPynTNodaanQRvhYs3sp",
  "key10": "3TVBv2WkinAn6JaQw7xu9dV5gpTdGLzCikgsHAXqDruXr7YZZSUxicKx78G4zd6aAwjhtBYLp5J1MsDVqCRS4fPW",
  "key11": "5sH6KEPMAp67oX6Hvp226bcd9K4EDGYBHWKQBzZHjF4FjvGQzwLHF8YfTT2GHxi9dpzPRAZGv9GwfXyRYWmSQPny",
  "key12": "5SLUAuo6CfqBKDNsoWtd7H2ZFVBoLGYjFNYTWeUPm1L92wBZkrQgEmZto9JWjpsd4G2cL5Geon7opaykj33oCMu4",
  "key13": "2uMtPTf4DAFdR6WRxDmehExDD2fwgZufEu96QLDQfuxnHFtiJu6cTiMWiBjiUwiCK3qoMGxURkq1WfbSSMPqevxR",
  "key14": "2eNT3taZBC5MJEoumcjM7MBQgDJiN5CQ3HKXVvnQEz87yKKweNFwnffnv8XPRWD3wwqke1KKy3RhzN5qwF5DwSzD",
  "key15": "4zSowYbnm4vzPwdAAiFideaTbqrBNujGNpr7Tb4sozZE9vwo69uzTu7X9QE29Tmtd71Fbk7yqHbnwceHSqpU76Ac",
  "key16": "WNx2D1vkyCe7VAz85y7Y2TNgSqWPPbXRy2BrbeEbmM4Dmbz17i724TKAhaCRnqWqEowex6FtZPhjVvLGd7a6v1h",
  "key17": "558RsPd1bPS6vYmgkvdikZfBQnUr2thBoFVrMmFBE6Zndt9MKz1BPxAq2y2uBEUrvXgCJaTzpxSZivohjQwCWEnT",
  "key18": "3x188cauDHzuoMbuABvXYs7AQi3xyj9dqVo1UCoFD4Td2xBoiNS6udqHA1pLm2NAabJbKkJXVVGPtQruE3eyt4x",
  "key19": "EgQ2siNungRR9mCpH4wYLVtmnBpyp9kwXvBXk8Qv7to8aAmQNTk1zCjSeiPPgm75EW1doWXm8FtedCu3aKpPocA",
  "key20": "54eSW6iUCwkcWm3xYdSSc5rGT765tLKVzzuRSSbQtE7LtYFtphCr2eSQ2PGhZAAAYBotfX7hz5dqVets9MBC3GME",
  "key21": "3dnwT1ynje6c5ac6TgKpJGbeCBzzhDXagCYoWdsfoT3C4pdsv31ZrRqN44LqBr2DsJ6TEpThxZrHZX6cXywFFbg7",
  "key22": "2LHqsNQR8KbWMgm5aoNzg2c59JM2VA3psnhLrmsWjCPoNJnaUEFpP8b57pMZn7UcXHw2wguExaN2iVpho7bzqKn4",
  "key23": "3YWVzqmechZynLCcm6L5Co6qACr9tvRRciyVmP4grNrH45Yu41X23KSGWBhGYDV9nqH6Echg9KekHbKNssfUAhGX",
  "key24": "4mPzwSjoEQpyLKYtDZm7WYGsqhrhgvS43U5Lx1wNHeNrvxfat4NFGa65Egg36EHsmujnzPY73SoVWa1pGNQAPUMy",
  "key25": "33kZtHL5QqEuaS1vUmZGVDTzxFfuze6bK6qZ5e4ddH2h74oxu9wZFf32PQFcu9ajB1sbMwXQxUt8tsW99zJ4ghRU",
  "key26": "4gzXGdrfQpY9WseWmiqH4pw9CRHJvYzp6veTtdgpVbzcU3XMbm3UMNZo9oWGdC3BL1hBLM3CnvxFKZcJy9wzsBqu",
  "key27": "3NQP1Z7VqrVJRysgNNQcpKzqg4WMpK6RNb2Ls8vs7A2tdeR8EUCe4EdyE1fV2EjTx6oaH2voZEZt2ecB9nCkpzXx",
  "key28": "2sCDtnnbgq2WyiYUXYwMeN3vxo1zWM7hWv77eunUC7E4wtNRUPjYqRc6cMpRnoCkzMVtyQT8u7kHSHJKGCAML6Ty",
  "key29": "5aqS5ygYpVMeskBSiSQfSWmtZaEHFn1Xp9wzxkZcQYc8MJrfE69bb7HFHU9eTCMghdf4ygmUZzteBtMckcLv34Ly",
  "key30": "59Zsr7cteVt7RuqV8C2JHHQ9BWK6ttsx8SFzRk7zEQWz6FpTJPy9qsMMVCtHAskDVzw3e9K6YjyrrwwZd2SCNZTC",
  "key31": "3WC3pHBNR3RGn3QfSovyWbCW4jJxkxcVWFrJ8a9oYCMnMbZtvMegUVJcqqhCFpFfXDsJj788EWuF1WhNpgSvFTd8",
  "key32": "439oFJ8mUa87BF294xnsWjhgX1v8yEnGrBeGpTmLk7NsjXtRfVHpM55W6dxBSmWJSda4uStjMu1jjrcTHrL77pfW",
  "key33": "5FKJAM26oPDUiZ6wiVKch2PnXkq5D1F7gX7EBTyJiDaW58ck7fahcyYxUYjcUgb5AmfZreasijoN2xCw9pjx9994",
  "key34": "2XBUx52cAXuga9ABCQCr7qrhRWTe1ZjdnL2eLtmELQjrfD3rGZ7DZD3azFaCNm7qoDjHbn6UUNKvEN4PqVV8b1MH",
  "key35": "TXaduMQsiPP6G2zm4JSM2NMckcGcjPMX6ZjZmZ7KuFD17BixFyfgmMAi6zWc6dhBCKJTVc3MMwRKpbP2ctEEpNK",
  "key36": "4jzD15C63fe8LriseopBCs96xJ2C3UYX41o6W2sfGxfBykhNka4HKzUEQAq3fjPawHUdN1aLCmFStES3SmuRMk6F",
  "key37": "2SZ1zCBKpVXquNXTmAZtyUjCFWP57XrWdfwtESVjqsoj7b4WXXP59FV7Jic9bnHvGtmRTfi4vu362Zhjk8Wp8Vme",
  "key38": "2T4BjU1duzeGtYxYe8mDpWj19tDhwx2vWpGcHYVMcdvfaNAbPAXcS35PvTGdEdKedV4nS9cQRqLYQxiLh7mXu2om",
  "key39": "LyVmuLMwxUK1zL1dv5PQBu8gyFpJon1fRKPY85p5Jb17icRQR9RVXtC2YL2fN1BX9vRLz7DAgyBVAvDgseH3g5R",
  "key40": "3Bkqs7WzNXo9eEkuMZMcfehj9pFxkxAYJYUX9Ja65PoXEwVegtxQ29c2Xfm7Ze4s51Qr4ky2cZQdd4LuGf1DMdmT",
  "key41": "3uA75qoYz8YVybRBHrxCHzHRHduAEbSGGP9nBUvMSJvBFpX6DAXnT47UDev5eVZfXGwAaq8Ei8NU4ffE1Lf3JvUo",
  "key42": "3BrxYCBE7TZXBMFXEgXsHeRrR31Ygbk1XDm5U2uiJJEyjrwZ4CbEfVRHmGDUVrDGvgYT4v1uH6car5H672FSVqBD",
  "key43": "5JTTJWxjnLiknNtF1U8YMCkJwHoqcYhEzWaza74ixBJbkbFp8B25LRoznqHe4hvv9etbNwGj5SFj7ns6YzrC2ET1",
  "key44": "4TtMLgiyg8Weo3SiNLcFB81yBEr8nbkpJtus9oRMaxWCoL5Tac89iok1beprjg8HYwyCVpCFnDyCi1LatmQnsnmb",
  "key45": "reVktB1NbEmBUvSY4nLF3VATCjh7XQocTMJc2j7MdL1VpViTsCscFs8Zwh46T4uux9VdE3FpFHMY832ju4rL8en",
  "key46": "5PLis7p1Vjzo8SUdDBZ4HohCjbA5ShtrXzpef7WigrgKdbT7TSFYSTR1Zy476YhtamYgsRTBz5DmFdYizX8uSkz5"
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
