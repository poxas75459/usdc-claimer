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
    "4pA3LodFG7u7xiVeYaAjYSyoRj1aNmiMQdppFhU8BJ22mQfxMniYyvX3SNupxWbkAEF54DzRqFFHqs2a6aG6maq2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QB5PBJJhvS7WGquL9hY1RnWFgAtFFbBk1ArgZE3283GjVbzLtUtKY1VASmA7i1RYUKtQCTUov4aneeGs7v8TuLD",
  "key1": "3yZRn8usN3cqYfYwcam7vThP2DsLixYjB8NcYpFoxqGaTLyhPNJ6gEtZLmwgUsz9HvK7t6Ux2AumufVvbriH9QLj",
  "key2": "3FE6LYnectM2nCCJHge24UMDtPz9uLYmbdgu2EKELrnbCyCdqm72vqcRHdFFcErhMHrKRi2sThhJmX9tPLWqH9Ch",
  "key3": "LTnLZwuUjXitMSVw1mF5X2qDp8csWtVm9a4dxVT4JGap9arrWRwtzcwwhMwaUX94yJubFKSV4S1Xjn2XgAqt2d9",
  "key4": "5dLVsy3YdjGgB3hDYawvyN8nu97SJD2RpS7vHy1wZEbpN9UD44sFhdjmdXkzUNXgxRr9pHHkGJhmtyLbFGCA9jtW",
  "key5": "4sscrQANX9wQZFnp8EyvGFRq4XSGFHfNMxTAXo9gSFpQzRuSL3bbBqQDjpSayTJZ9YoBgkwucwmJtn78TYP2HUur",
  "key6": "GXH7zCpK97cp5owWSSPvWVhnqKYDKpFbfACXCk7LaTdoKLELyHTLSX2zv6jjtNqBE26QqihFU8qXUqMxCCLafRM",
  "key7": "37uBvPXzenLvS4F3qC2TUHB1m4sYLtEHyprqDwuwNJXKLPtcKCPefrS6QDKfFWqsdeR3k9FeXxrPtvyAeKVQbUxT",
  "key8": "NeJLZKKtAtaMJJd4orVA565j2ZrdQRb5yc2nr6mWCbemw8cUu99VmGirZMjxQeGu8NtnjnHAX5djC4xBagna3YP",
  "key9": "B9rgqKXfRKEE6VKQXTENDqvHR4X5CRJEzy9qJ7k3K2gC1ddz3pmaj1DsJjuZfAaB95PyE65HTTJ7GpD6d9s7gft",
  "key10": "2rrtJtbnYbKnPycxSfAi74JaFUAJ4hVHykzbgsiTLoygUvc5ryXsiAdgP8RxccfEXgwxsKBBmWD2spgfDJLhHbX9",
  "key11": "5j41F7PYQeStX5f5Y3nWBKMuPmY7fZbS7MSiiviPv2s41Vd4wECvunVAmwRQfCQz6q7S8etc5kpQ6Lq5rsda7yVn",
  "key12": "5dcMgEhBPUgGd6g3yxtDdaiKwbwWLu3bozqyDZse2h1v1xpxQTi6LJ8iVTGHJP3CBihbGjgQ6B58Gotn5rrx4KfR",
  "key13": "4L4iNT9envLAAUsPmucVTPS5FXdhc7PqidDp5Ti4BqWJqmPqXGeQ7v6ghWcCoW7Vye1adXHe7s2rTAmLL1RqnRpz",
  "key14": "22G4naodgWG733pADj3ZPC6y7JCNoqQx9AXS4uEPrkJN13MMgKymJdXJVzYEZnjDy3QZTn2y2T7rJ2UQM1skXk5Z",
  "key15": "2iZKaqfq8zypdBR36rMCDNeciVZzBJMv2Ta5kZdRBmbQ6a7W5TbKBR5VRF74iMEAGwirAXXU53LQnxzzbvHoyYJ6",
  "key16": "2FV1H72zKcCQ82mMZqrnS5LgpRqADGueXuQ5oswBwgpYcger7yw3Ptf7ToqYTry3qhtkCBRnnJaXr3DZu8nWSfP5",
  "key17": "5ncBTY91MLfTxYpAACayCEYoX1tMpneuw4Xmf3zVahjxujfNcYwsvGEqK7BuVpEQ6GWRTCHAGFR5X49fe1gnNH4L",
  "key18": "5o5aNN1EDzVczhfZ2d8rWMxoF43bmpQjh8ngXxijmvdeWqArYPjQwR6GzZqApjt1wJg7UDBp7S86xmATPqc3K7FK",
  "key19": "ZpcjDrmGtH6HBk5arnNvDZ2nu2Na9RgsDESKyWAY2qFKpb5PV5Tb5kU7WKYxAPRXKZGiRXWoryXyXc1duf657LP",
  "key20": "3KVg31oF4Tw971R1RqePrF4qbu8brTFZz18YxX45o5VNVMxnUjcH2morPhCzLhXohmshwSVQHW1tyNZEudcttGaN",
  "key21": "4VwqkCJjJEBnFa7861NFN72wH9DU3gDAVx3haktL1VLMnAKRu8b9fmyTLAnRWyWVspNwFqqo7irkrBaxbYonkM5P",
  "key22": "3rQ2ESDCXWHB9SKT3vc5uwBScpoDcrVzvxzLYAN8QGTd1c3Ut3xSWxPTLvQhNZknqrWME9duK6DnSWtrBhWCbUNy",
  "key23": "4toARJFzYBc9g64HAMJhbxg985zjLvLCK68tJsaqW7Dr4wXvgoxsbv4DdRQt12RkJJ6FHLG5CKBcN3n5smDzz2Qc",
  "key24": "RY8b46pkqBDEsrx3CxUP532V1J8hFsbePC51eVYERY18k1Xdj6SMuDZqNAnegQdnSQBLWNFF6pCkkBmdc5wvWDt",
  "key25": "J15UGqia4iaTFDcpicR9KEZm1C24rSPGfbdfDLfPMZDmRM4J8pXmJwvFGHKqqFUVynYeod9mVZqyY5NAGmSS9a5",
  "key26": "28Qo3x2fBV7yVXS8wRnkqBWeFgJp8F8hezFajsjhFj9UCXq4Ak9nTovNh3zkm7yNvB2RygiBNYk9BrSypsJTWVF5",
  "key27": "G4cxka7aAnmKCm2dZhvd9kDrd7PghdtsQFoTjjMHMTXk9JsdhMAh8trCLpxBPzC449pXTyra8wcnTNBZ5C2qiXE",
  "key28": "4f5SQTJusKgM6t1X9Dw72Fo7tB3pT7uhUzQYyZw9xYzCXykLT1JYcSPaaWFjiAhUhvzGD3Ymvd9NRX4jpRzCsKXy",
  "key29": "5jsLyqUtF97y9De5dFGhCFZi4QpxEyTCzLHexZzLDNM1gehQ5KPsr9EteD8zmTe4o6VfNCyEtr1HWEndpT7gm5P7",
  "key30": "2QHw5hoMqqgvpbK7GbMzdjsuT1MDejmHwiLTr2noCUpvmCwe4macevcqHj6q3WG3oz1TrmxAe1HJJnaDfT1dNXEV",
  "key31": "2Gwgv7rKTDPcBKAx7MFL75oTak7kBAE2y4xrngB7UT7ftj2MW7j5VREBjvKWPHL3z2aKfut8vpPQBPNTJwo25LAC",
  "key32": "4Sqvmr3YUVDj8KenjKmimSLTQKLfhPYJJqVkr5ufdMW8wDVT5hENRxri2h3HSs4RFxUVzMgsdNBuXdhEu6zLWxGC",
  "key33": "uv6zng9fKGDRDjhtNnRrWe8qJWHzsEFHCqRPTPwWdjrB1G6mcDBemfaAv67PokxSDq8bdXhJ569Con3nfSLKHMK",
  "key34": "3CcWK9X8WbwTvFMQxZTcx7CUixf5UJMhJu4XYigGmpxmMMKxaEqyb2AmUpEeUWG5yG1H7ZWKej88wL8mv3U8QYSu",
  "key35": "2LFoYdc3zM3u9qaSrM2tEC7BLWJJuefaf3pASwLRGSLVDwnGPEvz3kMthB5DcK6dxL8LXHB1aSMqX4GGB6u7xXGk",
  "key36": "ojvYYMw9z7FrJcXo97Jr4FYsjoiXXEK8Bbs8R3KanbQHr5xeVDbDymJyWr94D5HNdx1tXxaVGkJfWdPdb6sNXGF",
  "key37": "4JA7iYYQE2thyuXrzKqdAdmzfsEWHzrpTtFnHCa4xyDiVEBzDFAoypVBNcYbMpH3uwowS9euGPxP1XYY9zCJZUvA",
  "key38": "2QBeTGEiHTJLukCHEzkX2mfWsycdEYLg2L1qxFfkDMw6mgv7kNzggUZWdHXNMbZRmr7uFBAoJ8ewj1gBfLxVdtg4",
  "key39": "4cQ3Hd5ReeRtZNSmsu6dzHriaZLyHBJrJTQGtbMBBCuvXyUXhuW9yPLAMtEeY4E5LS1wDjJvChAdBSS1kDveVQgX",
  "key40": "23gH1XHbsM1Wb6HtQ1LNebgyeVWbn3NVy3Qx44CGb5D3H36YRFUURV3dibvwCQyMUDYBTLriA9cYSCVDJ5YKEehp",
  "key41": "Vb2g5dRwMW9cHUp9AVHtj5vSeyyv4xdhGqt9iMmh4jZwMkJYaDxSqwCgi4t9gXEH4qq56s1cZh6fbR3SSLL6xot",
  "key42": "4TDNVcHuMyae6CCzDPhXSeFNrJEBi4b1F86WaLP68FWyNrrE2JnukrBCkzc7ZMUBkM8nfnKUDTpTsyeQqrL3W8bD",
  "key43": "34ra1kawmTS557me4gbmi9njrypQNKiXnF3F5VhkR2x9zcn7ruNeE2X15tyw8NZNfVJKaNgCa27GB5jQntyieW7H",
  "key44": "5ADeR26PcnDNhqq5LuqJXEKcxUUL9qYRBTkbg7auDQir7U6aG7qstAvuj6mNDef9XyFVtrPU5bFjXWz7eg32aiNW",
  "key45": "5T9zSYbdNxkxNn7p6o7kzoU3vmcoqzp1ByXfq75BW7fR16oUMymMTS1LUTqb9P9Z1shQHMzGe6DGFSXEm76VQWxW",
  "key46": "3Jg16CQYVL2Masb242tN7R7UfzcqaRHDjKSK8nFnrkQ4P9XJsDvU3i17R9TTR2nC2jcB2j1oXDy6KGgE6X25Mkxr",
  "key47": "5ipAzUMxFjBNsvzzCUggmSk2LU2obMVcPXYZgbj1zgiJnChmHombfKCq6s2CoKQJLpLznritDCqDxXEAvvogW9D8",
  "key48": "5Jq2wC9RexsmykfXQ8KPuQwuf7zeTqA7NttZU2HMEDebeC9MiHt5FZGPvrZuPj4AysfECh9vcVtZgdSXx5UF2yob",
  "key49": "4XMBCKEVhDz3qs6if76U5D969p5MqndQm5TwtrAEt2DR8asHrVfCd27pB2v4VpvFAcj6uXcncZDxjAy9WTsgP2wY"
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
