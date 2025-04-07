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
    "4P9EFMfMFx5fVTV7CNftP8febetXJiVji4faphtrch6XuVZdCqnMC83dxZ4em6MaGpkDXpxLQ8K91YSXgZq24Vu1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i7uBdDDGsb8MXevreJnPtohzFWEoy23aN67YzQ8T8PQdw4SehdbyjBqg6oHb8kwifJTRzraHW1DYdoG4zgaLpFr",
  "key1": "31ryAv3ixbZ7MEktv1ptyMhLqJuF4Qafiotzf8EHiCR4BZqyZymaRznMNWiqBaPpdQ1RpNVDS62hus2p9JCYgnGC",
  "key2": "5u8WaRCSB9Mmeq3PkBUwwRDf239EqasqQN4Eiu24kPQB9DBsmJQv43v4oGu92pd6WSttJYWbaQfGskXjnMr3di1P",
  "key3": "4XzeE2NkyEeWcXor32LtFiZzT5xyJjBU8b5cqsAUEMxtYAg94Z3AhvuNqVBrWfX8ptUiQ9H8g6npHEHHcbVcyCJV",
  "key4": "4dWBToD4a3SNzM6nzvNi3y8LU9F6SoA4M1md7LHADTBBBWwSvKP5RjFHUqgwo7U2riVmzm67XenT25EzHcRM1kRJ",
  "key5": "3eKDsYD7vKpfmR3ggMY3kupouNjqJex4PkryCMY43V6HhaUjP3PJnuSimR9TxHkKtguqbTCVLXAfoHUBcM4ZHmDr",
  "key6": "2raofF2xfc1woQRt9breJ77caQSCy8BtRyShJwQ9pyT6nTF9tdCKZyzmPazBPcuviKm81DkUwmKmfemLCEH4Lhdj",
  "key7": "3duvqP8HevbWHTk46HVCHLYNB8ozvkU9YuynpDU35xRbNMyDdVjzwktBj5tq8ph6T9mZB5qKurotT1wUZdBhQxhm",
  "key8": "5s6uJh4P386i95GdRHYmx1uce2yyTekwsvoEWnwZ1Urb754LNHiWjscn5wAjCdHYyciehGkEinYkarwsoKqqQxH",
  "key9": "34PvNLK9eELBUAVNhuAFVeUnTqoHTwSDESiG674pHu833kZBG62uVgXb8rJtWJxqREF26p3FYNEVJ5SiayGqphxX",
  "key10": "3CM9cXS4UMH1BewAUyjF5w9LoZEsxHwdAgArJh44YTHB7E31zuqPP3eCkxXbac9H1Jy1rJrhtR3Z9dkStKb3oWNE",
  "key11": "5URDqkepXhbwD2cogcGe9hkRUsBMB56aKqjSJcxY4GHC7Aa4nnjWpg87WCwM8HsgCjzBBTYQ3XCMR1ztty1wJbKc",
  "key12": "29ziUgwdpYE4mGYLYQwU7tL55vCZFEXcLLbck6c8Z6zuDGmvcRYw1bPnAnp8ykHQLemzFQ1poD6AGrDkLUMpR5Bs",
  "key13": "5z1TGjWiEjpoA7zNdUeMA4SsGXVAufCs8SxKrPvf7rkrHgH1uMs4hdm8WWHXKY9p4Gb69FyuxzmCBrnpfP83q14D",
  "key14": "2bHZ1UXUFvdDWspHpK43h5MqkjYSaGhuusu5hXMhJX9E7NE23DtrWLUc4SBsxzjkvUBfcT2ZGZtsfoRwVeoF2qjG",
  "key15": "38mAjGwLV4KPCRRYQaLjetnbuHStg5qMcEzY2QyZAaJJ3djhV449zkR6bpbJvZJhzDHEvf3RLW9ADWpC1LV4HcfB",
  "key16": "JmEaETANdou7SRSLKz7x8mGHryyWxmSn1ECykgho7Z8QP3nzhYn9hNz6QchM9dDTgbxgK9Z5GqDaQeDMdZzgq4p",
  "key17": "4vnc1XqgHKKAZjFUkpYV1QEYNMNjQbeuxHM1feG1FbvFWHuGHAJSz3wnDkCG3T3g6gVn1sw7PAH4vxCpzDSW7YUC",
  "key18": "2ockYwbdxSyvBSgfRMJGdNjfGKs8pPYrhN3wUuRQkaEm73Ruh4HHQZpR4PvwRef4vGd5Th1pYefk5nLuN4azGDut",
  "key19": "3S4kchFYDYHiQmCi2kzCtR6RSjsfj6tKAzeQkLagcupY24G5caUj2RbsZJBeR4tkxTR1YQWXvHpbgFMKr4XWi1jp",
  "key20": "2TJJcungiC3enbqpcfL9DejehJpqB3Fk2n7VQ2iaxCnGxgtmS2DxCv5v2xGrBkKb26MoSQyotFSB5RwvDZ5MuTtf",
  "key21": "4UYCKuHEHQhpBg6ALgvYQkLEdhRdUEcWT34B2gYB6r3qrS1iQGDjtx5qJcduZkJYRxTSNCwPLnx1voiYZ9YjFqng",
  "key22": "47Rj44ytWzKs6quueTkmYFhEzrgBpfbQbes2Pt3zU9Bat6DFiCNVNKnRP1FkQQyo3CHiBH4A4gVJPNScv8mga7mF",
  "key23": "4zARyonYe7M1D2Teh5TUeWzFDmFPdAzNF66d81Lu1wKMgQc7XYETEx6XsbQnYDHAmD741xhJetN7Hcp5Ya9dHyMa",
  "key24": "4mBruMt4RYY2gYDt6xsuuCEVCtM5GqLhVjPmvAt3T7bufZsQrUHPDrqQXdA2cKeLkaemjeF2AHJVcmVLf6gq9y7g",
  "key25": "4rscJC3p7j2ERLou7Dye5KfdUHwFXgiEnDQmiRTJFawLXy8D5mTecxyAdzSjgGdPe9iszGrLRkiZHs1Z2jVAde8L",
  "key26": "3H4SXWqjGpf3fhrGoEsE5brNznEUFBsGBXa5j3v97V3s3P2FwW4Q8gKNajoB3hXDHNTJJYs6SUDu1S4dTm2yj2q",
  "key27": "iDBTsjrH7M3jXCcihEvTrRxA8Ho1ttVSN8EF2HDukQoer7Pb6BDcmPfwRU5c37xQqgBYFhbRPDX15R5jm1W3fys",
  "key28": "5zj7KB1hn4hDfjAeUvj1WqDVFWsmsGLhRLz3nLQp49JqN9ixfTrB7RtNVbdMQk81T8Xrqyc3ivHMud8VLikhRKZU",
  "key29": "2awjo1kHdibKsF2CmEPeHjaPDrLEY3UiNvhjFcYgFV4GDKKv8EEnNH5EvPTaEUV9aknfHzfFLxjqkJi1MCvSFRBN",
  "key30": "3LoM7PsBerjpZ4Z7SH32o1TbEN26jnpcU8AaH6GEHdij71NLVKpTD6jk9dJ8ueWRDuJHBE4BcB7qiKpCAv1qwmVh",
  "key31": "2YpZzoaFBKbT9PAWJ74PLyYXXQnTJ8TSGyA2f6CKfr3D21eQ4nmYKfckkb2TstMYVLGu7k5UsvRTzGJDYKesC8x7",
  "key32": "22njsgJ1VTMCXiFUEbcr7dMVbFqrXMydJjbQuF1md7LPfXpiyps1MiKbJXMgdMy8fi1xECGPpN6t6hPdTvKVJtNC",
  "key33": "v6vLYB9g88rTmZXjZTaRjz5WWM5XtrBiaLDt2pW9t3GJEVG2vBeDnDH5HnVmtXqvJvjeymcpefVyMrk7bkVxH7T",
  "key34": "4uKzMU5dikQq39i62bpTCEYm22u91v6zkyW2QiuQAxZJ2RuH3cFhZLYBgidgHQc5KG2dZw6aq6jKMVXzYdZQ8bQ2",
  "key35": "65YH8VSCsnMNJdd6KJVmGJmPpqUTqeqd8WYuC189jntomeDHw2hdFpikbj2veSJJMM8T8ijozgS52d282iBf8dU5",
  "key36": "5oGaXbCCLe66jpttKE59hL855n8xB37tXAyBdMgato3yQm5xLsRqi3kKHDFLwHq7ii4bvaXtrS9XBGHg6FEN1bck",
  "key37": "4SHpcWcMzsTD4zzJnTMhyeMLDGNpsFPUYHi7qjeLG7bnT8nJFxWLkwA2wqTkAGBRtr4P3xFB2Uhtsc7qbN8CgGvp"
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
