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
    "5FwqFXzA7BsTbamJGpZqDmNYeKYKXZNF1eKUYhokMfGptBaohGwxBK1Asans87Av8V6bnRUeQry9QYUphxeHwhAD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ti9vsXzUXL4npDD3TdYAi53qFHDtaQhJqS4PDG2MdPpwB4t2QsFEAhDdKEBz2NKAwhDtZfshvCgNce73VxyBgpd",
  "key1": "4d6ATQLRkbuNe1bTbemkbYQGmAPsokRdNi9iS641UEroKrY4qyFhvyEEWgNfubAdmGfC7CpQhTptVTwFAJAuahaX",
  "key2": "38K6sz6tgoTsacvrtbtu3cLckURnHwa7SHG6taHKm7GnrtQeNEh1jvQC5m5hazWiRbdpnNGcwWPSPHiFYLEaANLj",
  "key3": "4EgWZxRijCXn4sgbGhwBChSqqyJ23WkdaGV8BtDwvpg5eziN4EZTeRAuF7yUrUmnE4ZK9Ah2ivHw9GQnTBi6DiLK",
  "key4": "23JUXgjhhPjh9q7ZjGs7BmRQazR53SJK9kmmzo4LuKAxCA3kmriFhwWmL1bep7Wg8Nv889WUGWE6J7sf51pyLrGu",
  "key5": "4miXte8WqJYVX4sKixeCmgnL1u26vKrou1FA7viWoMgxp31U3GZTGQpNTwakZFfG69VheC712i4hGaB6aF3aoSsx",
  "key6": "3QWPdJ4wLXqVHC2Qp8LGcjRzwANRTtL5VmRfVXBvm31VucuZrRvEE2ggPfasgsjPm7hwN1Zo6mEKr4r8LyfUdwSP",
  "key7": "37KAYoMAd6QsTdFDTqRXJDJMw2WKMTpYNxxHga1La2wvCyty6b4YBfjqZQ93g3GsneoRS9DwAQMgEmVoSn45mzmZ",
  "key8": "486cxXuzxiJRKK8FcBLtbrFVztGHPU59FJmxegRFsjzpVsaTKYLw1NZBGvJGA4CtRjnUYz92prNzeB9dBUvdc4kW",
  "key9": "36vzhbRma6DA8VUPfLF7esGkSbs7YRGWXn5A9knVJwxRFkbGyQPYWefMTf7nywJWYVj8xAii8qQhNnSmGrqNLqi4",
  "key10": "4Pqo1ebSRZKgetDgHckD7VJU62gnPLSjS2EVtZKCuh7jMXFFcL47AjS1aGeeMNrZJ2Vjs6Pni5aynSeTXnuPjc7i",
  "key11": "2JqTXbY2prjSid11YE9tny99yQp48BnwjDk4h38KM3S5sLBiFFeJKjcBGk738oRURhmZsiB4jEuGC1osK1AHDSj2",
  "key12": "4YjNFLwX3Jur62biMDeGxvq2b2iX3ypF2iWCwHYiaY6ZuHQSeJ48YE7iQcrjwDCpegEaEhBuKoJXgRSaCBHuc3fL",
  "key13": "5k6uDBqE2hbCYymuWe6neXhoRaQEAy7gaVa4Eqr7JkmZDqbEf5S1ko1ivDuBq4yZvQBZv5Roq5xGmBjiw2rWgMTz",
  "key14": "3DiqQouiTVLuATxzHTwVjHvc8iXXq7Bdw8JujJ1hQZpEQQMYDm5ddYZYkW3PxLLD2LzqGzUYxpPsiNfmULKacKQF",
  "key15": "3VvHMMaZpgbe7GDoPh8H9BGaSHYR3kkncG2PJgzzQbcxJgEi871itNphdq88Uufmua4CMQrk8KYchQw9oFC84hQV",
  "key16": "27JF5K6CWMqggtZxt5cUAFF8P388smrvGeqrTcmp9AJ1QzPiBwnNGhovdCoFEwT1mK2oF9Xgmo99nZG1noPnFDWK",
  "key17": "4ZQnFuFeUehN9zjs95UfX3BcBE2fGLykdPM4ss2HP9enGfN6R5N8TFvHWfzUbrGpyLfGeZCTco8nyUYWG4jpJX4N",
  "key18": "4ix5zcydDUbdAUBdqS8ZtnjFdseAzZRb3QSnrErQMcQSXcozztFMpfczYRexMSou9q1Yr6Vt3WSkLWpyQBEkLWFB",
  "key19": "gephts4EsMQG9ePtb2vt8Yy1sd2EwNL1tHwqQnMtfDHaqRjbzqJKmUCBVxohMu1owgXwzmet3hfaFBseaSKhDp3",
  "key20": "3BpXzEHrm12ddP7uHgRnFT7nt66gYshjdPbVm8UhUhrsy1zE4n6MtYa2kbpHxAnGywUmyZdVSyrLagkLRPQzfxNU",
  "key21": "25LsvuCBW27nrXm15nBpYYGw715YPAQdE4Xy2jmMzR9qBhiBVtCuyqdhS6zpHMAyke3ip8BW782ECwHKLpnWR2A3",
  "key22": "5E9RXNDxRXUEkNoJEmpUZN41ngmJg4WJrbHqdxry6yKTbFVa4aD7X9w8ZMMSXh3QJmDBiHAbXkNPB6u9zbuz7ohT",
  "key23": "2VbtuVUWb8wNSTtqx1gXyLYyeQbFbyo3UJYHiNV9DCDtKfDeHY7CFmRzSN7DCoNL1qbxR7cikuXHgx5uzahbKGgL",
  "key24": "5fuKPdeZcZJ7v2VjqrGNNPbqmayY2rtZeSUYrBEXg8SymaR7uHXcjLXpXm6dkKpSA9nUXZ2bYtUuCgtgXACWLRSE",
  "key25": "128QU696ok37iEh4an1hf8xVG9uq4aZgeat9vNzfHiNeA4yo68h7bC4NMVWYN8PofiQUKnBaBkoroR3qhUpzKgyR",
  "key26": "336TYXbDYaWz2kDXTAJ3qUHrfw4Q1soxa4PoudLKjysWgbqAo3t2pi8eD1BPGzT4YFunknvGEatkcRS6vcBczoZS",
  "key27": "2gocCNvPc7DX9hxDrcsm5DzoZTKdBcy2yAmH4H9Ptam7VkheGbY11HKMN7j5yczc12rVsTDw3L5qshgxG15oukoY",
  "key28": "5Dqki8QHibgcefKm1EFt8WgsPGHwCnsMPsDakEaD1a3auP7mAQrMJDWMrgUEjSYM3fCBAy3PwRvdUti5ACDWBy4g",
  "key29": "4ZY83oNf38zyh4ExGdE8jxmz6Py66sZpb7oLkw9ZGEpb4CCqVSNWghBRAyoHxgq7GSrTXECuqwrkB4hr2mAbbiBz",
  "key30": "xkFikrznC7RyS7UWikZE6Y6Jb9hFLYbdCoLR1augnnU5GZLUadM16xv6zKQwDo9v9W9Rx2q37yUeWRbZRFah9XZ",
  "key31": "4Va1yAkf9LUgiegMcVJ6y6ojnEzwAtFXmzae7BDLfsXNfSDAhnYhP622ob68YQgvJnjsNPxspGyrin582ep93N1i",
  "key32": "2Gm82miH6AKtTEx4PR6rMayqS1ZrHqGMj3Dbwo6yxXXLUsBEU9QepUXurTG2ogWpxoxk3tzvKmWYM5T62mEu8xbo",
  "key33": "5qX9PnudCNUefm5XQFizED5fPhok8iGdg88EaCd9DCdGbuhpujaLr1pxMAeLvTRKqCG9s22pNE4VY9z9zGdZ2qN3",
  "key34": "5Js5s7N8CDiyzbKW1zFUY6pJE7sZwYGPXPaWQAVRSahSs8NbvnZumMhW5CbiSSddj7wVdwEDxJTnZfZSZPJPd2jV",
  "key35": "3YXSBW1niZDLAmmFNdLgCsXpqze6HD4fRJGPR1eWATPSjAkQZaqDetJ7Dc87sVZPiDZSwn8V2UrYsAThtNRE9641",
  "key36": "62Z746Xvd1LVoHsedhxfAeb4s5zT8BL3SQ4Cnd1AFYiVUENBEsrbtH2ATwm2rcVYu2tn858sPwpjUuKAfNLZSxv8",
  "key37": "2kfaNbctXpeCkTRmkfd2K1hMVarjCNVHw5x8A9RksQ26VaPgJddM8EY9BsPyeKW1Kk562yGAwnEfvN2KvBKbkXSh",
  "key38": "3StfdAkc5RVDLXCx5oDgB3GWRhqPqrid4hgFsnyAZHpKu3YdWRdDWKCXU5dcs5zGq68NQoyrUWb4J3uG5G6xHxma",
  "key39": "2jCDvaBg471d9pTVQGNrkBZG3Wm42wH8nMhnarRCKbaEzrSbWjga1frXwvrgs9BFDWBcZivW4Wem9vqTZHfV1AV5",
  "key40": "M51K9uwhnuKR8b4SiaanvYukZKdqagi935LATAyuBoGBG37W4ZPjFaLjSZBMBcNnTqV6d3qD3yqr4Zf2Ynr3bx8"
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
