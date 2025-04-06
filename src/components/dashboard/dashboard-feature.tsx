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
    "2zHs7VT586W3aBBATAmg4oeAyaETjJMcMEZjazVLpXLRReiFqJHEgcboRj3eCk2aXhWegZnkwZTDy1pDWAjQoUhv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1MqRK9TRDYKdtkuPRESLs7su49DYeEDacmW7gFjzehtmGuNPxMu7vnp7qw8YQdUsy2ZXVt11PcraR5TPA7rFowx",
  "key1": "3YMeguGw66uUUWp3Ewt1D6NeBvLVZTRwt14ETBrmxfM9YRjpwVnKpeTWfkMYEFGzunDPJK5SxbDNQHYwrXtnK8G1",
  "key2": "2FX1FgwDLNxdatGSgLuqDWFJtUg5Qf9mUAJBs1VNxcBZ9S9GEsaTZ9WRDLndpPaWxhefg1JiEutw4dxSAwfwxPWb",
  "key3": "2dDHfiV2DVHJXNMNVPpvPx5wKef4QjZV7oY3yydQUMju62isrTYBussjMAjgFGTJjo2KmiRSwzDJGERduaoFAMXk",
  "key4": "2YvAWinizEvjYQFK1y28BZ6F2zqV85G8mWP1RHYAHZNr45nc2uMh2Uq3q9KNTsgQSdsxdG7CxtTDdtypLSm5BkCe",
  "key5": "7iBLEgTZYFufFrB2CwPBeNz2fWxdzkRTiNCvRTxV9cS5gxXvpZsMP7oDtJBKWBNn1L2vUxoZaK4UNTNBmGmCeGT",
  "key6": "57VbqxE6E7LkbQeBw29ruHw4BKAsPmCFePVWxrFGUCyore4gvqkRfPLfcgikoJi4zLuAua2ZKe97uvK9rug2tE8M",
  "key7": "4wkHB4ZVP3Vgj2x8FJBA5wD7JLBCxtNHSYAfNRnpryHRhRiwdPq1HKiiK7uCbq76p2kQGqXaBtc35AcXFRo4ixAm",
  "key8": "3VDzqWRdzKzuSSY3hnt1xbjJi2TjdSsFLCVnNPg6gkY1AMtx5hNKDDpwjNrkDfhpyvekUc9A8yogHFpEMkgqquSr",
  "key9": "3GDTCQqPrHzDZ78UppmVqWAJ8bHPitReVNwtzxHaYRz47VmwmofKep9x4sv9FeQDG6fbi5XWABQ2H4TJsk2zcPhD",
  "key10": "4nGZRpTUwPHdY3oASpz3bhjSyZQoJsQZveaV9o6uCyjAQaUAm7HX9EHPAZ3n4Db7Ks14mcNCDfkrGxSQD64NAkRa",
  "key11": "4gYZS9NcmpGfp386Qiof3ioUdo4NnnmcmUuszRzrR1Pt5zXUPWtRWugFrDGtRcafHC7yrgt9vWjXDxKfrZfMC4Fn",
  "key12": "YncCwmLbEJuZGuiN8wEZsahM8cFZvySvArMcWNSkBUVkDPkAdWSgqHfyge3BFzxVPGJrbY9Efpd7MjfiGmCmKW9",
  "key13": "4h99U3MK7dJSJF5cotr8xHSJMrckfKZr8ewoJs8b7hnqWFP6vwJ5vucGpbpuJo1NDMjJBpFQo4D1bdoNy7KzjZ6R",
  "key14": "M2TteMVzCn3dBD8giqF71YUYQkBB4yLdaZrAK8SnFzA8PLrj4zLMgeGjsxBy5hRNhKCecNUXem9xuR96pwhHhGA",
  "key15": "31RKcYwUBCsFGongUHQgPLiyAnd1LzT5G8oZ7NMBat6p1a932PZkgsAM6jEizCJTCiK2LB7cn7Qi1RvN4yoMJ2uA",
  "key16": "5aomqt8FABtvNpSdVQf1Uz7of2M6WeQTrV8b1DBVsriQQVKwew2nb9b9WwswzT8BLdgBBxBwr3VTyXktzX5zm363",
  "key17": "LyiAiBhqRveipKzVePYDuJp4tdgaNo9uenPoaU6rJ7RwzELJJrxm4FgsEoHzGmui7y2QaJZF23cUzBbWz3hgJ9M",
  "key18": "5U5qCR2DPjQoR8WizhUpSrx8vpFpVTi2fye8Nv3EvzRJDEeppL8DSCx5jPorNjoD2NBoeaU1AdQmHTw5mHvLBhXf",
  "key19": "Jc9GEbAWzXMSC2ECmvzbn8sngnefEMspagarrbTqbvvXwQH4ntDTveuT7zx1Y7pmXJmoN5G7jA2UfjJP996Y4VR",
  "key20": "4ZGFEz7QvHnzCVjrbzA3PnijeKzgTYVULzMVnJvcpK7BEGgt8FZjRktErC7aGEHgaBnu9VQQA65qg9camacj4Wvs",
  "key21": "4Q2KuoCWvhyEfXfuC9JcnbGXjsFbibJ8yiE4p9gLzYT44NvR11LHfTiFBwYedMNrugdK9PRUciEYe8YStXVu7wPA",
  "key22": "5q8oNhNEzRPQeG1vTc8Vo9f9nwoECUM2EQnH6aLSrqVxVuvq9nkieedehh5q5ZXfyRKXcU1ftDiyPzqy23SfZbmo",
  "key23": "2pWqX4dnDoSP3WhqqPEHApFeCXWa9EMgeBt3yVxyyhzYj4tohDJuWSHffDXVfkBfT2bdnPr8PGopB47C1BNybhX9",
  "key24": "3NvXkyBJRNqL4Bn3WvVAomS1PB3LnydaHiZA26f6kxkdoHb3zxPErtWPrGMVAZ7FVfwDfdpNvuHuZ6fcCRhJxLbm",
  "key25": "5Y7RKVnqumKu4eWYNrKGQpdBmWDB7vnc9YHxruT7dxsQgtVMN8MkmPRSv53uCQqYdd5QLyDrNs1YWN7i4yt8BkNt",
  "key26": "5c3qwBNwNPGfMYi17FY9opYWyb6RioQG3d7ApsLGi9LLJgduBFjMtDcjykUW88ZocJNGaDj66ASbu3yQFXjyNuLt",
  "key27": "AA4xNXhKicC6wkpVBtkgSBBNioE6unzeu6Nrnek4APiFet4AVHNdjuKV3zhx6ArTucYRjuuY4sW4myEkUVuWGRc",
  "key28": "3NPtuz7HJgLcAxWiH5LuNGNpejPZpXPSpZ5xVLEerF7kLriXM5VMaM3tmKwBcnJYt5sfD6HG3YDsaoa2aWMRLFw2",
  "key29": "5V8Fdvsqm6ZeuT9SsRdj3xh1BhwsAskn6sL4A4wHot9tWeJYXRyFUp8VfJPa6N58w4ULQe4BxAicZufprzUMG15X",
  "key30": "3gkJJbADdojmBiNyRWCvQrPfr4Zg3xFvoVeNNuFEb1LxatBWoss9YbZPS3mKX5wjF2SHaunLWWwYFKbVJ1waut2u",
  "key31": "5VcG2DZezMrt79Ynwhp5F5bxywjJQDcTuq1r25boTF5MxgiGq2qWSKnuA8eJ5NZKzm1h2D1PrLfjMFW8HXtKjuEr",
  "key32": "dj6uRMjHHeckyjgSYogpeMCxXSwF1gGxKvBK7J5w9cHax9nQcsY4UHvVdS2iWzYqeF5B2DFMdnzUaSnEyGnTGbH",
  "key33": "1m7sJtyPZ5b69vvPuQhf9BQ2GimuTh11XBYjUyvjE8AUr7hWkd9hrpyfv9LtPzYtL9arnH8xZinqHr61JWXx8az",
  "key34": "2R52cAyuVXQYhPmXDiMvyTVw77gZeHNiu5TDyUotJRijHZauWfRBgQB2WhYjERehWRZ1jjZzvHFhgvfcqs6eWpM2",
  "key35": "5sDJm3obhKxQb6HeHdxCfcZgDwKZ8bpM9Xej5gpPLDTXTpjcqDgzQWGKjNSZsHE16nXXjfkyLo9Bb7yKK1G7KiMu",
  "key36": "5XGS81vqW462r34EJXuTKuyW3WM8fERqSyRZ5DrFWbCaA9oAEghz7juKp2x9nJdnYWGT4PzkhAjJfvfFfGuv8ht3",
  "key37": "PkDauJN5TWa8JN9YocN2V92zWHTTNJ1NG4tG7cUN4fsGL9ybkgsVf8nUrG9v5NgUwkgeKwUtV1JUoEK8CbwVxmW",
  "key38": "2LSY3FmoveZuSSFJ7uBhAPee2aRnBFduzfEVfnirM8VTbhRKXc9EoSAgB5WJWNPMYKXnBaLSGQVjYRAbmtX4sKt6",
  "key39": "66zfvTiPU3LN5nUVYRqB2E6B4gGep7PTbCVueWtuhoGecqPLhWMLoSBRSiWFDFBkNu6Uh3UjqsJWK1fCzuvjyZvf",
  "key40": "9hpiEL7H7jPE6AMzLGK1JYPLupgF4EzknrzGB5H6EpUFki3N2DaQSv5SbcsT6wj7bZhg5rYHg5azqfd94KqQe4j",
  "key41": "2WqAbhgDkWafRW9eDfAzdgAsAKbwt8RFLKYVEmPwVmCpM6SfojpogdVt3ZJmm7ZSHeEB8QX7evS1bEFhyUT2AqQ3",
  "key42": "jM3qw4mgTAw1detvdsZsu2LvERQHg83Lx5qmPrFzA8GHMHysQdoyQvpXuUuLC74bhesYaXDixgvNWAY4cEVtEgY",
  "key43": "2BfEPzXwx68NeMoGixASrmD9e2EoXTjBLkkwm9zmFF1GsvXYCGVfNvoctcj4vmm4eTTvE2c5QhiGdfCUQQwmybcG",
  "key44": "2ZucRG2MFJSik93jSwjeACoHj7tZJYRh4DBmkLKHarhxvK138GV2dasuHZpastDa4M3qm9MacC5GFTEc9HQZn8AT",
  "key45": "3tC3xMUCfK5tjFw5DBWToDPXkkp4rwvYsA4f3tRBsddNLdwk74HUuhGxbrJo6zYysSfAN1dmp6mwXtZJZb15cXRk",
  "key46": "4pRu7RFLSCKSrq3w7x5stYKKGFaEQFrjGxMEHbzJ9f8WFs2gescEd9KnoZMayVAh4GCzd3M7RLAv24BjyC7ig8BE",
  "key47": "2FA97nTacsNr6xgVu54EtxFBu5MGGSp4sucreBEN4cNxcCFCT9yigSd4jL7gCVZJsTdmyvMj4DeFTaQJyeVeF3m1",
  "key48": "5ExQSqdBeV842f2Q6oTx2pewnpSqaENw5se2LSn7FC1rv9r7wHJjiJA1rDmLP6yDg7YSBNYEXVmQ4jEytBQGzHvK"
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
