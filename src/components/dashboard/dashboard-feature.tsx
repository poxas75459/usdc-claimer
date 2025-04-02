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
    "2psBUqGJqSf5Pugf87bg5RdU3CwG7z91uDvjunyjnRHXLd7cgDbXUyBbJxyWEaHYDs3JfFEy8wfCic1MfZCPXAdj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vqG4Ru6BqKCCTxg9EmvEFYvma4La3eSXbNsFuzA73mmJmRSU3DsEjgt9jBuXtghg1yV6swU3kigeSGiwAJXYWCr",
  "key1": "djyvboVM5ybWGvDQGS4hEwyZye9TJA8e1MTF1MdrkYv7zApYu1HS1oQ2CNCEUQyHhax4Zw9tPqAGxBneVum9MgN",
  "key2": "5U29imeAP7eHdBGkiAww4u8eGJ8RfEQQ59QW1AF7T1S6Y6cMfW42HqoaXCFcnCKmxoKDY83Ay66oDNLFxR8noSpZ",
  "key3": "4r5CuRfi3pEZdZUsS5x15RaToHFoFhuotaUphui341BaLoyaduVGarS8FCxPV1aVk37G4DCAzNpnCax4Rmz3Xnjg",
  "key4": "3newi7NAqv6x1Y2H8QxvgEGG15eL6XT6cobp3FsLMWZLppR8SrC5dSzqMWJUMcRXGuBc2MANck7rj4nT7ke4SnLF",
  "key5": "2vdDpeJdwMe5YiVepTjoWsjPY98FjEMW5e1c69Gy5QFrTWVEVT79WxK7tWfxXqtRnmtWbiTHS9g7CFBQxTH83vqp",
  "key6": "m88Cb8YdcT3HzZXrR4sonpw7cPqbZR6yuxMznNY9GmtbMLwwNawcJnShhsmrC8hnGEdP9KQfoMWng31yJZF8v82",
  "key7": "3746xHKMd335F5iWP7exChQQeJRVDnbofXgbkiUVzXpRJn7tpxg2hi27oeVNFJJRCnWoDHnDoyKhetDtqFf3nHuv",
  "key8": "38Ld9kUH645dzEnvAQXj9GpzAhsRDehDhQD6AroXhGumTGddbKHZtFVdvDcn481FUfSzQm2gvov9ty4zauUV4tqJ",
  "key9": "wchyzrrXwSuiU93qkR6hsQAjNDfCB2tThWVoKegtnC3h9ovPr2vKUwiqFLF94Yz2P47koyo9LSoHsFi5nnJoQ5w",
  "key10": "3wFD2KZ4iadP8HVjM12Vbsa1sN9PfRL6eimMzZtq967TLquxppweBnfDdR3Aavk6fGRYxonHcFpH5myKPZJZtAqX",
  "key11": "3geEjRdyq1nLyNami6mtVUvNS9D4AaHcCUYQz3HQUbBhSXMQZFyEaF7XoXc7YNJRefLRVayVbpTy33xwHobvcyzR",
  "key12": "2DJxYL85u2rdyQb792BABUkDbBC2KxLBDr3NixNmR3ZXHq2ePySQY3ZxxKmCWLD7TBfS6gm6pwNx7MKkQkxrNBLF",
  "key13": "2uxkynu7V5edEy2UXAnNzvNLQF94zB6N6GyZtNWnSXecwfvpfNe99ZPTA65pBEFiJe895mEzu8gmFX3JxQsx8oom",
  "key14": "3jwRAAUaHkeGHDagQyuCniLu1MsrgreECAx1n4o76NRVX9gPEb9mKRvmNgaoVnkKDMfifo4oruxGvMD7TZuqrkEA",
  "key15": "2VYYFwNimUFPnVowgjfNCBaXHcyRdpkNSy2dbyKFf9MihCU7d8bj9P8EXdinU2UtMmwPJYLjkPTtscokGz23ftgB",
  "key16": "5zDGj5aqCWv9oAGRDEqDH6L6dDeYc8Z45NaAawUGrS653EQyJj6YELR7cfkk9qxQJ7xGqMdH5yqtr6tvSwjLYjWR",
  "key17": "ZZ8YM2DmH3UkHcZb1u6qKqF2WJe3AfBkwLG3iEQxMZ45D4eegt6rP9jebBtGDTGvSYLgkBfJSyktez9fHLk7Vir",
  "key18": "4Eh8UcAdSiy5TxLMeAdppjqhv6BzNvfk8eXrjyh33eEt2ya53AkdHLqjzzJwu7pHPb3CaeFb3rwcmf5FUyJ12HNa",
  "key19": "5BhQvaKHpyDrAe9DsqgDCGGqUPM67xHqZaDj4XhtAHLob3aMjiYF1GGxkcnMvauwypgtNHYfXycVprN7ZErZuGm3",
  "key20": "5HRTx5L9C7ou7crocUyYwqYCCcmQgHbFmtgsnVNtNwjXxSdj3jKeKf3WRmMMWinKqvvKFinJ6kg1ZW5NdywixUu7",
  "key21": "gp3QJV7kKuzkmBJsk8s93mDMw8e5f21xTck3dq6VybU7A4zz58roSUmtGEH1CVJCeHRzQ2hSvGWneopuJ2YREdQ",
  "key22": "5XZdK5fcPuLynNFmWZUUbbyK87QN2Q9yrUVP97xXsEfCWUkDmMqQm9geVDu1GBqFCywFEspZjXeFe5MfaJTX8ppu",
  "key23": "61LEyKM6fa7eVCRqNaEveWNfvZ9vZtQXH5UTNSPszB33WFwx34Hp1K4akyjCoJhGRK8BqCDvuXuSXWWjvYSV6vQX",
  "key24": "32ZvDcxysghgJbZDKiYcNM3hj8EuxXBrLKvUErRxuU9nQiyCUbkBMXkXTGwtfGdxVcL4YNaBWUfcnaVoVEA14AJD",
  "key25": "f5KbtdUyM4deCL28rTfjvrUCpYwH48t7ZFEn8ZRWB3bF3FPB9och46uruxgmTooFfZ5uZYAhdSTwEbCcMF9tMJL",
  "key26": "5Kx6gDQo3UNEEnXkq7QGKX3Tm48qCaf2WkTtHBsq5QzLopAfd7nxwjeqTKUTwQvDpPweqwHJFHNJHatBHgTsUCyL",
  "key27": "5XPzD87sAH9iige5sTbpdw8VtmtXp4WRgUNqhQ66hWCmNBripZ1VhavDS9NWbReMBnBM3nRhEH2yUMHtJ9nZ6ew8",
  "key28": "2bYBwoAGQNF4QZGar9ZJUXif4ectZApm9v4w1xqZPaWFbKyp3DsVStPeTWHbkCHvcqARKMJkanLutph4Uzmuzwm8",
  "key29": "61UL3J4q1xGtbciTfzbu2CcHqAJQsbW6wpE4KVSFdKNfgjejEwHFBe3eZELPqeJCZNsMMPxtWrJ1iFNPAFy9gsaZ",
  "key30": "2jbxoWihtRTAtboVZNxTwGhDtBWdJvvGqQjn6h1EvgxFrKqhkubJwfYMB7ijuNCoKDepy5ByBei6kmUugd2U4dPb",
  "key31": "646xyM1FNTeyoiG4ucjfWLUWY4Qt42VxUnL9hJB6d7HcVPfpS4iogfPFS5Esz19nNX8bzGvL4TbTfED6s7nKV3KQ",
  "key32": "RTEKQHvgaAFptxN8koj6hdPC26VDXQbjfm6iCjkqcnbWy8tYteDhrDQQZzSMdzWjb2zcqA5Jjnp3RpzvT9fQgbi",
  "key33": "3VD4JwSWVr5CFAnoXMejpohaWDso8YvEZeLeC9h8BDXXJLX3xnCXMPP97EowYtHrZoJDwAtcX9b3JU3WHSEFy1tE",
  "key34": "2nWVp2v9dxKusNS8maBrRv5u4pqYkpYjgNKwd9FC3NdMuom2bD19uLGmgRUNsrubCTvm7aUQmTa6TyJG6mKt84TQ",
  "key35": "2nGN72pGffpDFed5i2yb7KBNdqrSFqM2J3sKgcd1Ba7FjbjwRYcuxwdJx77gvd9uMY1wELkzidJZQJbCesEysnjf",
  "key36": "4LCmp2LS7Lq5UF29dyugjSEsf85862gzzEcWtmhTwhSSFrAJwz7CzsdrerVuohqgtYT3u3X9h6vJEppvqBE4j5e9",
  "key37": "3gi4kD3ZTDydtRSt4xZnf44vubWXd3BS6FKgqMPt6PTagSsvuUcnWi2P9gbRodynZxGghm2JW4LfGWV71YoRWajU"
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
