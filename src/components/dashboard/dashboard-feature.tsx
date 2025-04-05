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
    "4NSWWC2eMHCNUz15jJk2unFH968XMAji7ijxg5JbNXZE9BTmwhwbWxszzm59H6RiMrdssXaLkavDaK974NvgCBdW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BoKwVao81eC2y2mdECXGMWF7rybAtPpC5DnXcd6H8G7CGh5eMz6R4YuDhwPa4dt48nGg5w5XzQvGHskrfM8xDbz",
  "key1": "MKQ4ZtD7u4JrrKBTMPNda7JVHxHsuL1tYZurF2pssovkKVm5N8XsT1mox4gU76W1G2xGojFiRWgtU4UyFK2aHWX",
  "key2": "5NyiQnw5G6hDDGgA2YvV9S8mzJe5ETNzEAxuruerYjEL2P9TLX9CqHobPcvKiiHCgx2aMDj1vPoomFz34cu266Dk",
  "key3": "jFshZk923uo1bPtvvzSELQLEARvpL1DbzRu4tJzbnt8abBfyJbvkB3NhjVtPCoMzx88LnxcPBRifT2ifgDVEZwu",
  "key4": "3eseZhCL6JeRFH4e6fya7JHQPkKSZWT3NtGtXwgrSnuXNKFyeAS5LN7PBRpnKXcqitf4GqvyucVv9vsF1pJTPNYP",
  "key5": "5XHNR8yvxCnhen5cMLLDFVuuCAYYz75UMpzTpntTpoKqgJKjHmSZZd5j9ZLBkouM3Ehyo1ZoXaY8QqwfUgMWiMXy",
  "key6": "2Wvhcj6j9QxNLEsm1o1DVe9VfpvFEDzR86pDt6W4YnzU3Eut81XwrWe8QPSxNLwSdmHjz6ZBU1jidkKyeVhEZHG4",
  "key7": "463sWATEzboxvNL5mccDjW2zoYkXMxvciCbjwEr5few2iTi839CuDNbinotk9zfYqfkRev9yzDEcptohXSqijdrc",
  "key8": "2cBjR8isnCMrizCZ2nQS1PhoE932e7yQxEevVr738ReSN74cSNUdrnLos1LKfL5TUE6ScDjZwsU2L26pgMZTYSxW",
  "key9": "2f3bMV2LavhMy14M6yiN23UUnkxVRZSuBwUvL9MMEpAKc4UtzxQMWDANULw3XuSXSm9s9RitcCwziNDkc46xczAJ",
  "key10": "LL4fEzZcuiUSXW53T5wFZRaRLaKobYHSwG6LNKpL13esyzHFiefJKLGKNeHnoF8Ja23YveGtfuR9zTvBWNxnDVB",
  "key11": "WS2HnHmRBfqVQeWvUPkr1CwucKXzUsxT4jeZh31zeuXEU3Lo88YzN8gDbZK8g7Nua2CqWqx6FKwF4w6FjFro1oX",
  "key12": "uMmnFw2ye9cAxuhapWYWHNGVNTT92LygEJQvUDRjKAPqfahDRP8uDVgGLotTPfSgmcdPapxiKLriBdrwqYupnaj",
  "key13": "374R1pZW2t1DPGHKAo7UXrv3Aq7fwhrbbvtDJTz39ZdMp1RyZMsmToa9scA3SW89kVLUMr8KggZ9DuC8ZwFDe9yK",
  "key14": "2rKGLmFHwQbCMASNAwptNcATXLfZcypGpetRbi28B5Nw4nokqcamrcPzp94QQsAXVnf7DDCW4dfpQmcoRsQkqBGv",
  "key15": "2ZVs6XPLPKMSw46VaHD35nw6ieJuZxUzCtLq1mfJoUbPRe5xqcoKwYeLxbNxZpA2VHmyry6Bdn2XkuTycU61y8ny",
  "key16": "jTBBpSQoBFEcN3RH9Up14XfQ1y1A36T46R5ubYzyHFJdDRbZv5Dt57X6JD7nUAcK1RsKMESU36wcPBBKd9Vpk58",
  "key17": "25fjCFhm6T2V8jMB8foJGqZxEVP7EQrBpZUsgkmHDuAoQ1RKqMydoDwXEp9m3ueQoHt9thCbhoawVgDQXcomC2hR",
  "key18": "3TwhkfpedqhDzVW21UoqzpuN47xU6BEHGNE9cr9jxs8D4WKJS82kDS57WHfmHTHxMe1qHbJR7PENNA2MXTeU8HrS",
  "key19": "oVCd4txWA6oJ2paB7df79uSxuk91KstxeNBKYuKRdp428mjNdNGD3yhuUn6ebAGqcjccXFthWw5UNEByh9a36Rz",
  "key20": "6616wqxex4RFYtkuuZu87PiuyN28m7BwkpJrudVrNvLgWVB9LoyizDjqb6bzTtsFM1BwXgugnvL3pHQMgPUxYN4a",
  "key21": "3KnaZMqzCz7so4xvguki9w842UUA1wGxZosB1UcuXtoD6TmwL4HRG5kPuG5Rx9Ey7FnhiFaTUzZXMD5iX3eiXGu",
  "key22": "2fLbFovhXncQdAd49pLuVRZ6N6t1Gt9qPNHzFzcChGiaCQN3ASeiVEtamMWb8AoAzTCvPF4oFACazYjogdsvE91u",
  "key23": "3YbVNFjaEX7MpQJV4MwqFBw5GWAXpedi7yeUccHgqS7wHma6ACxCMNm1SRmvP5NXPEMnECVqfjcA5bFLxUVAApKf",
  "key24": "3CgqPYyGSQSVwoNoPx4aqVLwJZcjaJZ9LWXx7HzkYKenbB6xoxRcjAE7QASNr1DeJub8jPfYxUBjtW2kHeoAiGiW",
  "key25": "3UKCK8PXtoRmeeNo6XzrLowcjQ9oGkVcVpHfMbLefDEke365TUW7B3afKxE2caMPcSem9Xofd3QcGRKt1nGfeYe2",
  "key26": "387rWhkEG1nKCYTvHzPxGV1gwSuLqGeZndJsBp7MdFhU41pWWUjeK7eP6p4vkQFgMUsxWBA75ZSfuJYmhkd64Gkm",
  "key27": "Le6iYfNG55ZmUHCrvUo4P9tw72DXBk26HMLrAeRKGDDPeqPKiwyTZmthdziSwY3KjtpCbbWx7GPXB3vqLVSJ7ye",
  "key28": "4tNdXmKZd94gg5xAMK4MDA9KrYiexiRxva3VQSRJYWDncW2uN8ntyoSifyZTvcTrrGUAobb7j3NWuPnJ2PMhLPSY",
  "key29": "y1Bkg2ZtJhvF2yHUF8VVny7L71Y6pc4sqrg8G48kHbB2HfZDHWchV37pFQr8MHXQ3uDxvm4ABa95epiygxH4FCj",
  "key30": "2sfp3hMv7ssDJrxFjvAWMmkRPLMMNRKkC9tqQHNGB4jeRHXi4SBqVvMa4kDaD2Cb1nciJJBCPtJY2tSz1w24bkh",
  "key31": "1yAsJWUCzRh39Svop7uz4Ayt4znnB69mLB2XMSC39zuS6pKRb28v8sjAsKoB4zNNGieYA5eFtHqJyoEbMwcG2E3",
  "key32": "P6FmxCxPvsb3Kj8QwTQtDtSZh4TZfrEXQsevUUF1fAbUpSS4HAkhV2kt7i5e8PgJpaYCD82A16tFV11KpBcZCET",
  "key33": "471REu2DDZi2udgcopT7pWDDzuomq7Z4f7zfHxA6YTJetuwdgF5bLovXgbcVAaDZZ1oQYpHZp7y7SJzgjA2N7TE3",
  "key34": "5HbhgcSpCycikuUdhMCPLbjtmLZc4CKTF4f4abmCB4Z59eA5mAJeYcJwh1Me7vKqsBHuAcLPDUPiyjnXkt3b7mnM",
  "key35": "2ZZrD8wstTSee7M8GDPc43DVFZfqC2CnUcMu8cD53yPmoLhw5yjPssVPj1V8WWsZDzbevr5PtUfoaQHXtZe83TNj"
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
