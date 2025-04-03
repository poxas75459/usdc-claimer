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
    "3zuyZZL1cuHbZWDXQi43xG5ALb3UWe58yUTBvQHpwBCvW13VFiaMbQzTDNJgesYcoDa57jupG44rNZBEbcj8K1hJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MEkvwBNnKm9adQ1QiBKrEQhUygQ5AoJ7ZNiaLyLrJRgoW415SibdpZvWYRAyXu8msfZ4oU9fAiC6oMggNiGUMdo",
  "key1": "BgjMygV9UYhHAVbtHELCfjp6vQ1uxrpPVhpum5Wqn6Yi2SQZBTfPy5FLzQV9v5inrJDBA6gZwL3ALvtSzFhGWo6",
  "key2": "32xoKHisgTxPrFqQ53R9unqNucnk8LEUqf66fHXjwhW82nuaNJ3MSQZLkR54u5XLhkEoi8NSh7JcDDcZd1E27wyw",
  "key3": "4hQwYhpfpC3NkhdfgyiXuUvn5kURjbSQRSFsWUoJpeSBmnVbtEMxkeCVEtt9sL5Pfx3jVaFvnaeoUYKdS9fJRfKL",
  "key4": "gcr81iMhBgwKNTKeCsfGnUq1RSLx5wvhFS2MLwWEbBT21e4vnBatkPsCtaB6nwgRLYJ5R8qf8p28ZvY9GzQ1V71",
  "key5": "4KJPDq5iAvGiyYcArN6SebKvyEfc6uZ9E4BuWYNoLXLZ8PzPeV5YYnvZxp2NoaH5q7bKSfvQLAP4yRtm9icTywF1",
  "key6": "4q4w8sh5SygNzraQRaLQFhGxRBscEYeS6jv3Sr16c6S4GhoBefVCqndssWMd8T2RG4ZGhzohdz2FYmJpW5ZpS5Bd",
  "key7": "L4TucYUbwZu3XMSeaQFV5CXKVpnukngmQSpGiwHyvZJtcSLfw7FVKDN5agLhPTaMoYTi8suNqMDALucCA22ZjGQ",
  "key8": "2q78KX6o8KzFHbh4FT2mJoAyWW5zj7jdA3GQRMrrB3L2uyNBowNo1CbUKvrqaeFSFBrPKXRuyERMgKDrvATGQqeJ",
  "key9": "3iBiE9JnLHiev9oaDoUjmrpgTY4gL7frbH8GQmnMA9Ja8Fd2e7xCH6WstNCpZ2YzHBLGtZgTiitAzpyNVzuTXWdQ",
  "key10": "4Rfsg51j7PVJc2tunKgyfcscUdtB5yLuSSx5Yu7iS7nDKVT82notusR2sYgwmbXcTXNMdTHnfGgSmoe7Baoi1XYq",
  "key11": "3T7dnRNa7J2vkDUJXKpEPJCRKzovqvf3CNu3B99r6347EzTgpn5C6qe5UPQjcB5V58a9BxgkLg6mneAiYuSRaKoc",
  "key12": "55diJuiuTpL9AixLpLqL2wpiq45EsaYhjUw7fMovWyFEDE9dWf1BMBgp3r5W2Qs9eRiea7nbW6AnS9Art2zGr49y",
  "key13": "4vwQDmENoSy7pY7DWz8sBnmknCb49r3SMucDwkRGmd4LMGVW2jibVbArwVvDuQ5AvqMFKnRHAutZp5283ZmQZ5JQ",
  "key14": "4TYxg7tHwW8yGMQYt71jMDMPatT7x8s4RWP8cgbEoBG6Sm49Vij3ZEZWys8qQPfVUTa5ojYgbgQPureZoFwt8Ht6",
  "key15": "3MU7WudjoKqH3bCV4rXhd2EjmdQtQMdSiAbaFmRvRe6RDCUp1QR9aRXgggESj7YRgP7ZTZCHXdDFCpUPx19e448m",
  "key16": "2kXqj9iFXKVQx4LqTVPp9ky8sB1iTPf9iEVpx3UC1A2px8BW64P77YfAAfWDFkS3XQYJE7Z3zvUa1GLLidbuMp96",
  "key17": "5RJqbc8jKqTZwQreo2y5tdTbzfvmUFQ5Tiq96bW6Fw58wxkxbTYQVnrb8ihyC91HqFcMoxbGtBFE4p17rxMJ3b3w",
  "key18": "5bkxQbbVZvuM1FwunDKknhrS6QJZC7TS2J6DjQ88Bc4Rm34NWWf9XQQ29sVgXRchdWbjV8Q5V6fiExfqTsEFR3cB",
  "key19": "c5da6rQZ747wETquHv1HiPLnsWWdWdy2CovAk1tspsrVfx8vRkkGfY3e5DeBQ4ebhE25sbgH1qLsncWb9byCbVF",
  "key20": "RK4HXcc8SH9nRVyRc6cDen7FvGyfRkhWzMsXnr3F55YyKiHUJzkBUKvma3kcEQ3iamH4Sb7d3nPuMTNSHJ4Tm98",
  "key21": "5hLyuyYuf2gstVoSFoFy33a6RTJJdbgJ25kbzkFjxpmvQH7xN9Fpu5wTE3ZNaHA3obSC9ZaMVzePNrYCRATiXeZ7",
  "key22": "67pGJJ5AMiRWb3XmTBuNwi8ZKtKsnJyio6AGCgetuovhBGKRA1R3B5rsGDuotQS5ayczuDwMfR3bwoea22fCGtzr",
  "key23": "332hn7gRB7wZmUL5M7TwSDiWewL6haDv8XsLXQYtrE93y8NKBindVDumtHnZ9wgGDbjuwU6zRFdoDTuCjx1CUzzS",
  "key24": "j5fjT1BpLT85LV4YRCWXHtJJGDxfz17MZULKcy4DmQXzmb8pBNwQvTHkpEcAucX7RhSwsY7YMF2DwfqBuEE6hxr",
  "key25": "4UVpGE7peYr7tdCsczM4Qr3xBdnMwhzY6kcvECVb1qhJdPpuFJ7wbiDm5NwRiUoSEm3Wfidi4CVJm9XdyWS4itWu",
  "key26": "5iDZp84CSPVFZjn894g8VLDNzuc3HSq8ZZcEXiG8hF3d7PjVHumBYoG7jZXQZKZ4KsTJVptNJ8tip1RqUbWAwC2z",
  "key27": "599M3XnVYWsUuXxmBMidDKy9889jLovQaiGZFHRJ1jt9J1ZkC6nKHEAeUfb128Qpj7rfdZdTUDrEySeXJpJNtik5",
  "key28": "4t7VAnvWzFuwAbrxxugbcqqPiv3Qum6oLNvEZ3DZ8iSjeyBK9X4zaimNXqFwSMJFFZvuWfWs39A5WC2y5pUYNChn",
  "key29": "5g2n62CnhCqV6ZyBXvjkAZLt5PAeqWdwD8BHq7sNPMCdydTUeMsw4G1u7CDer3ZN5sPjxr3DyrZNxABwLFHUKiGN",
  "key30": "2x6KGWKSQUin5c4nxz5Kcguo4rPA7pZMyw8nWBzUU9hxWdg6TvHsVuc9XLnbuJWeySvCfEgJNRR8ie4VZLydaTy1",
  "key31": "jHKxr8h7bowvHBDLgZW7sm5z8bKKf7UNGnKrPpy6K8W9BMQT53avED5TM3VDTux6g5zcgKaWJxcE7CqM3Nid3xe",
  "key32": "3HkDGaQZnZWk4kocHFEjfR24pud7NFZWyr4Y3Qs6PDBpg6hanSVsHq6jAKjagU1E6wWbkiLkKEs1vxnWhAmf7jf4",
  "key33": "5bwQuR28y6bELeQvjfvdHzhNtEnSTXDMUuDBaeFLietTt5aqef4gARRYvdrn8CDXgjRtWcemwFerkByQwdmGXL8a",
  "key34": "3Uivh5NknUDf21w89iaPrvaa2TAkETQRqFWXc2AMZcoUhraPFEnwmiCwjdeVzGMzhogTt7j1dwCDk4H1DLS9TGbE",
  "key35": "5EQbWKgAow6jCzjyECJx1CA52F3LxpmYX3tjfjmYcAxTofsHADNzTPWz53o1sPszNFz6sv9D5TpbQ4pmmxwjkd4R",
  "key36": "NDW2aFmNXTYh9wJ8f8XN2easC3DAGhw6mpv5zJGGWo7pCBDauvU3QT6qZL1gPVFJMGdQnHnhWx8XthcJayQnn2M",
  "key37": "5Fm5MNu4TWio2H4DfkbqUCdhYaFZEiMqg8kc3WaqEXGHp1Q3N4T4tdiSVGWNBnXHDGhysnKoFovCzdm17gqa1Pdt",
  "key38": "g3WqZ1em4yCTtpcVJj21FaVr37fauHje8qYLJFGhQzcEAS6n3ZX1FnQEF467vfsw51sivNix14Tc1T9iDb7tq36",
  "key39": "63rzAav7m3FaQBzQVpAz26iNidZgiYAk1uREQpa2R8CNokLMHGszwqsQpvDyKiFwBSWDeA3L8fNQBUNpVucVEjkh",
  "key40": "3P2zffHcffzP1vo2jb4CN3MZRChVmTDixYQT6uwtCUtAZhxg94Jf1QK8xKAMGfyKVLotHBXfEx7WMhCozGkQ3RbC",
  "key41": "DWXMWHfJRSefqSmYnS5kHTDz4RYdhtVQoghKztRUzwNYaGVFtasxN7ouyuhDVNBabjX6VcR9S5HmHe1kUBwn7EH",
  "key42": "tCFmD3pa1kpoX76xD8ECDtkVcn237R7VExmPYTeDyQk2zFW76wASCNhg3eWSXdHic96TAqHTkP53sMiHHbMUp3u",
  "key43": "3K9tVVwB49MF9SbkwiGtfdu8Apr8yUggxxawwqNQgY1QeTEfCK3DqLknNbyfGL3hfKv8j5aSUSTr9nR4wv5wjGAp",
  "key44": "2pH3oLureL6Qi7ExaiS5j8zhS4iccBJbfkZHYp9SUhmRkxh524tzaxSCrmSGuMfycnT9ccrY9pBPBKgtYSMKaUVn"
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
