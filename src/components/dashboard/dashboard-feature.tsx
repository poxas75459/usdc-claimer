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
    "4m9PxFVpG5kaQpN7C5p3FxZ7vnuu2pTh3ASkdm9utLUPKVWyXdUcM9oGF8jAkhgdBYvSKbNCZsNDveFQJ78i5KTn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H9dsQsqPbWXWxFGXdzS55BRYm2PFRDxruRGdRxJEcDPj8br2xZUPWKVGUjnDBN7N5vLZwe1xaEich4aJWFMDfoZ",
  "key1": "41cuSsnPUAzR35TYpo5aCYwSYHHvaCw8DfKPBoufSoAMxw5JSsGecgrDeXBUWCe9yHMGajBkiDeJEoSLRqAyypoR",
  "key2": "4vwdrnPf3N1b4ZRMgnS9MtjDh6jyzeYQfsM5KLtZ9Nops9aouKpCcYxMmddM1xGVPQF7VSiC8DgonFc7UNBTyh3n",
  "key3": "v162BSXoDxohCo2v5TbkaJ7kmUPqXp5ez3VV5A3wPjVuP6TcBScRB3tn8WJngNae31gvDURNrhMaDM5ATwo8LpG",
  "key4": "5wksDK9qPrK5C9cW3xBaAs4TEp19WoZTjr5MoP8gMz1vNMteQY7H41Zr31nX7hiVfvGiUpQR6WbQHFERS1gH5VKx",
  "key5": "NS85DjuW7wSUX4vgdCJpg4fWNueUkRJk6dQeTbsSNLbtPACeuzwsR76dtoybPWrz2TDj7uR9G3Vv9SNoLmadJ9Z",
  "key6": "3vQYm6RZkaZe6QwYeCkf7FSKusPJXRggqeYddMeFrXWrLd44jX5hNbQfUjZkMMJ5PQBputKLtUsWRmYZEQWoJven",
  "key7": "3Z24Ukua8X6pw67W35NdhRR3my3ap85UgJ9CJ3KXFoKGCTwLau8EYRXBf1GWragHw2WEkaytQhwYu8M6gdMCoCP3",
  "key8": "2u36AWByDLqExm2MXyKqZAkJteBToBrSaRcC9zqZdqHQou8oBjosdnxeYLBT2fKL7rzYFmUAZv3y2RdSf9X6NLAX",
  "key9": "2bCGbPJjr8M9fTrfGocJBJxVU36qSWmc629dVxdUreKGj4PUFFeMSqwkKod7HrNA6ur4YRCQD4EJLyHpeL8uAgF7",
  "key10": "61rgEakb5zwfjVNYDPFhKBJn1K6t2s43P7Cd2XuD7b38z76FvhsdVyDCid5k1sB4M1VJnm4sPWk6Y3pAKY2yyMzH",
  "key11": "46re2gRELgvB7QgjDvyuVrG2duHNpCB1SUukc2NZw32xSpa5PUScTcDsNqpWWuqkyHcDYcKuAvBBEPNYV9VdLozA",
  "key12": "4oXkGs7UCNaxXgGKLNiXD1KxHuxjfPn1MQSZmUMrNnPQQTmgufUoQLsa5Mn9gUUj4AKizWndNaSqeDBdfpLu92FB",
  "key13": "5i4iEC8EfLa7PNQUk9SVx9fXW7UkwUT5S53YTvRJKxC1xLFpAhQ95byFJz2t37putF6QMSMS4QDC8U2UHMdXsU58",
  "key14": "4HxZbXTihrVPjgfw3GvgHEChAEGStcsjPBhHxYXPrQjYNDgvM32DwYrJx5m9h19sAtBPCeepkqCkCbfXfn9dGeUC",
  "key15": "4MzUonwNdRhAEmWQvXRn2B1vjKbLbjisf9ucZQfxSPtpkfAUxRbTPgD8f6Nm6WgfpWtR9k72J8QrmhULstznP2BH",
  "key16": "4YmmK6ZXDuhi5V5v5oJyoc1oiGvX86FgL6gkFhkdtyeP5S4bQBpeGqCd55VLdudXPEbVPuhk4mMtncsrPxjXWq5s",
  "key17": "5svpHtFUuLYuW6sc2pSzSUEYddg6noBuEDgi1xA21SKvBUBig34YX5Nk19e6YUUkVtUHKPqQBLygCHXq1y2WYCiC",
  "key18": "4GJt8hHUucY8zhRBMgWJbpy7D9VTZ3C5hN4cNgjcB5cXJSKgvSsBmcnPgJgdjHSm5Ao1xHzKzz4tcDFjFXGryLj6",
  "key19": "5DMWMimtfDJYLG5kFCsj36AhPFn4dRJ4Ny5eYhbzMJUjgH1K2op1k4ojxwv4BJistGJJs59dgcT6rSCjiKh5w46t",
  "key20": "pqoFZGzfjAssjsM27ZwgCxrDdj3eUpt75iqbBw3qp8ZXTN1qej7cR4w42Ww2QNDEcXdjfxFqtLcDJXm3s2ma8mq",
  "key21": "3JBJQ6oXZamzQE1xXjbU8QKHLZtMPnHfpHbSPyUkTtUepuUPCKAmFVFUgANgA94XGEkU5HrUo57JSt3WxkUSpkCg",
  "key22": "4VQgFgpH1f6mSY4qwgJYriwgUzzJhuSfGedi6MG3ZpqG4EYfNe5Tg8gZ5vWDUEwDyeCyxhpkeTRNwXX9FCxRkGhj",
  "key23": "4dWVdrN3Y4aTcuTvn6ddWjSDRFU18Z3Xbh6jQW5K9vBgbAePTRbq9QwYZmw5pFdXE5aJgyqoGafCAMKUxNUz2ynH",
  "key24": "4V4NeF6NRJDcGsiTDTCFbkYHxZKuCQSkb4EQnhv344xaoDnNoawfsdCV7uWQVCaBzJee2fniEYiBt1APaPPLExav",
  "key25": "5AA9RP9qUnh5mAXASrEWhLs2Ppvam5QX5ar6BTWVrMEbXzFQg97mmiv6edqqwxgzGYidhUAi9CPRNDFS8WR6GByE",
  "key26": "3Y443efCL2Fi4xcmxQ99XyUKs4Ws1WLASrgq4NHdA5HqH9Z9vbRpq7eXkTRwXFS6ur23aDCdbrTpAjXhzvuLpY42",
  "key27": "2K7CsZSBfhR5vxUXVJkR6SRwv31eFgPqQ6HNG2pREaz5wKzP74SZEpofJ9uvzf8ZtSaV7CLnjt97dphkjNJ8WvUK",
  "key28": "59jztQopBw3A9hvWpFjieUhRhVoJQgerZTzXLvuUkHs9MZUwH8K79rVZhbEn57Sm5XViAU6go8CDaZzem8on9svE",
  "key29": "51GEs8cGQkqp1M1xgNVfWvg7pQCXB9suMnAP9xVFBGu4sgDJJFwESjm31gLBNmxHE9mQAWqh32e11cevYyriTiMf",
  "key30": "5MwfPHyqULZBwGCCXDLwa8KMLNb2XqF7TDAf6MyudNnn81XYZh9VtrCcFQhKxGXktqhkYEzSLbvEyXjBrMnNx1xF",
  "key31": "2fA28vhcGYg6zWD4nqhFSwW51SeB8oFUPyB7Tu1e59EALGtV4htH4U1wbjSKTZY5JXYBHGu66VquvW2Bc57zvZRA",
  "key32": "3qgU5KNgRW3TtzhxF62fbdLTZUXQ1rGCNDPaESpJAkvCSQDXSzJpJwkVdDvaKg1UXEzPh6Us3JKJhzDpvteVvvcb",
  "key33": "5wEqFbehWUC31hSPr1iUWouLu3Xjym7FApMQzfufH8iGdZ8wmcPcPN2y259nCX2cPPhQc38L44ksguvzSrNjSyma"
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
