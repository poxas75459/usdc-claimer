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
    "3hdHgwbJ3UBhTwhGj2qzMqSwc8p2UYXicSWaA4v5W69vZHhSW76E17MA9cyTrBbtbaJN4ifEcr7My7DkovMhHefa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49whH1cnvL3B1qGoNQhryW8ywZdNLkGAVKby23LcNpc1Pp6HgVpnTm7CjmSYuagSiPXCqZAvT48pmthSP86MZNvd",
  "key1": "DHjP3jt5szRAwoTb936nJ2qCieNbtRpyFtZE83kWRxusTBJVAREto9SoUa9Wo3UkJECLwoXQSH3EK5E72NibHTw",
  "key2": "9wdwU775vd8YXpXKD5HpgN8jxHyS27E5iGtiHSNRcbApSsJqrD8czrt2X64xXkSAWey7EgseQHLyQdf6vKBKmfn",
  "key3": "4Pr5tLyyNVSaaNUZMy7mMiDmuEc75CZnbYAH2nTmiBnBCejD2tgpQiPex3va4YoPsACbH9Jp5kCjqM9pFuCA7nKy",
  "key4": "4fu4sdMG6nqm1UHg5xXLuvm7NLVvpppMfXo4tRFCx4wazfW2Ao4ND5EXMiYeHhfxJ97BjdhgAX4wJEKRTQMvFNkB",
  "key5": "53SUc1yZ7xtpAe7PBvGkZ8R26WMRxTBAoq4JZR2kGrPnbTesuAC37QX4S577W5UXaA6hiMe7VA1CpRYujcE9o5cX",
  "key6": "3FcxNQTse2MuXiDoBkANaW9PiASR7qdzj45RhNVj8zq4rWfvUPhRXNeHPe8VxZrGYP7ce8gNFdqifMQk4pqXLuHr",
  "key7": "55RYXRV1MMwJMDT3w2n31afHi1YgHS8SvuAdkWXJVPpNTDQJLqeEvs7qVH325isnR6Q4N9CumWsBtCKXqPsFj3wa",
  "key8": "4uUyCUXsVWhdNk3Ryon2MRkuK2gUefjxyZyXHZpHiDpSAQwfPkBrVArDtfFyJxhgE6E6cL6rZP5ZopgrtyYRECx2",
  "key9": "3cztYAjCAVZX7gbyw99AS43XYXs3kt2xsCXHMbvD9CXUZX1rF9AzhC2QoJbXyWUPpQkZFp5t8CW2vqBRyEnuxaPc",
  "key10": "iFbbvVDq6BL9w8gDpA4fonEEQxi3NaTmedHbPojxYettQUt3unPXTjCGvCi2gKoyLawS2kNtgRDzMY5xzPi7kUF",
  "key11": "4gE1KQeCcy5ctLKDHQ6ME3vNus5dBx6EpWST4zjSU23YghYt3HP1G4xg5EBUDSyrPCVCyFSQSBxpfWSx6ANGqFHd",
  "key12": "5vTp6ZFFawTMdaybtnGAeGvzbhyzHpVeQM7cszzHjn2ZurTzUHoZxizVjpSJ7yLopar8CKV2UF3y27uQMtw94Ffx",
  "key13": "3RaJBgNsCgXJh1xmTjVpJx56bx71SFT3MJVANkSP7Uc6WTyKcuJGdyKARQrm74iUpo542YKQtHwkWpydU7CFmGN9",
  "key14": "61LPYmBcvs1Gzko6Ft5CezNPQHgjWmS2zhDCDFMAcpTkpVPLjdapA1gjtnacjkH1gmc6UsEgwGp6cEroDSUAMmyA",
  "key15": "21qFZneF2ZaPTUhaqn9XptELUQnNPixS8mvD2vGiunAvJ29aEXiheoRYJtPvPL3yf5P5DTYhaPj61wsE2ZAGW1xW",
  "key16": "CHttqTxbJ3v2nWQf1YXNd3issrfqvkNPDkhgBgbLceBDi1esKQozHdK8kdRBJZq2Bxvid7EuBDZzV7D8TscGQWz",
  "key17": "rB2zLHL13KKgpRLTzRsn293K92DoEBGnSXgj2TBnywPaki9oMNyuoyUZYfb7gBPsnujvztK2azhHADYYMwErrhK",
  "key18": "3AWouD1NLzB5kKUaNfV6bRyX72it27cM2F2yXXrdGB9fw4UBsiWUSsAiJtk3DGMfj8zVXAVfmFcXfYMM7ynPRv2x",
  "key19": "5KcbPpmwMCB5Sd6jbJharMyUrM1TVW8NRwsiGtKsRWp1e1wStybdyqctKyCG4pL3ZsA8c8HD6f5PTtYs6T4b23bm",
  "key20": "Mt6wAY99T22insUpxVJBb18TeChiEwJCrUKr1nNgXwvoY6CPbS6T1t8JhbATpXxPTbd5CThbUU3afrx3Jse49u5",
  "key21": "rTAGYA4QsVPo5ayiyfpEYydafnZzTTSRPaHaZvK7zJXTd1qgTMg6K1FnQ6W8mdy6AxkmQcgFzofRde1KDjPUffd",
  "key22": "48TwSF81xGmjsSe7uHotD6prNBzruRa3vJypSXK46E79D93zFW1cwdmBnrbxAExbrKuVMru3z4LUEWQAT3U3p2pY",
  "key23": "2Fb8qtpVkbpGj9P3AF6ZvCbFuPvvw1mVdonJyvDdYtkDfqzvrPKRHGnoRaiybJruWyxuF32E4mVGzE9S5ioLCwyA",
  "key24": "2k7Tamkw3Bq4RkKMB9S4iXhjivor3doQ3FdHCSJ2zcVZgYMbZ4GPCNLu2y9XNEVrfUZCHNnCxtiDTk8HqyCJKzGC",
  "key25": "4LfHRtKLijwH9a7zdyuiAMDWeH7NPWVEuDN46NSyxTNUgVk9pi48M7WsoLbaWrxGF5X6Z4yb4KhWnA6drf3Vv8pT",
  "key26": "qzEUJFNQV9GWPFz9XURdbMkKvwxyY6LqHJnPvwqj9uhYKtR5mgGx132R7L34mBUHc99n1fXNDAaWocQyXW4vRNk",
  "key27": "4bTsAWsoRHctcoAAJmQaB8BLT5iy6e9MdnmtdRiV2WxhTx25gNzBuoNbqw1oVRCrLm6KkAQ8ptCjFBSTh1o7WC6Q",
  "key28": "4kWyDyPWXPyTNiSjaiUC5daCj4hvnA5Ybu9px7P4CYeVurYT3yE1MCSVQebVpip1ePxzrx7ixEyjBzCuR17iPbAA",
  "key29": "SVxx45d92DrxJKZPUm1yvs8M7ibLvLmXJ7NdNqJjTYaCvSNdXhCybps1SzdWsTeupx6NC73K1JobisjmtxXSbhS",
  "key30": "29FpcpNtZvkFhgaTrcHe9AKW6sYPyZPHaWwd9oDfMQuSq2yBcHR3WTv1XNXYJQL6JY3F3WrsfqchWTH33XdCadbm",
  "key31": "5DRKzANUo2V14BBqQ5HSbqUd2L7mcCFy3pphMrMzv8Vd4oyGPUJ2uEvEU6wM1EJtSWgnJgbSB6QsWTCYZAZPhyFx",
  "key32": "3KC25EgjV1GeT5abpCcQNPfcXLmjqy8yuh7NgfYigp7XmQw43P24pe5FC1n5oVESrRPQXcUhnJ1mvBWfKmGM8SLd",
  "key33": "BmJHmAA4gPJBuPYFD3gxVus9Ga8A8nv2rK92mhs3PQY7uWBjjWd7uz948FZHrBm8sXBtNQQAUesVzB8pQnJUJfC",
  "key34": "3Ah7TnZeAEhDJgMoUwkVaSF6HsaT68XpVHtcoZ7CYSvWSpjzuFDB1zrPdjhosmihKEGSTVs7rGogZKGiRcE7JQHg",
  "key35": "2qXBZsWzvuBqwtRtdujjVg6qLob9QBLfuxKg4qBX8kzdidfEMimAJ1JAhxTjxzXXtfyC2wM6XsqX68YeookDQ77Z",
  "key36": "3kzWoDF4JQdnEZv7xDY24YoGGdwh6YEsPt5JjqyNssMbAVgZSyWDrXNCv1SV5UzUPT2A98skoag5HRPQpvFzXaPL"
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
