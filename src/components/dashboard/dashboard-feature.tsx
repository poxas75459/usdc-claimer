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
    "h4Eiyd2qghXp7QJQAhaHjNTtVECHeih8mw81w5rUDEhaLb3bS3oW8EbeXr1xdHVSRhRFsScUNy3ezRYR1PjHcro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "442FwRe5ysLJdLbfDXRCNxyS1xX5XUwqwpHc8hCW85R5nBPdUexgqS6jZhDHi9NgvMZn3VFbz4edbDo5aJqWffpQ",
  "key1": "5XGJ2B4hQXTDjNckpTSggDiuyHYpuwPvZp2wg8FiGBrG35pCtRRVpiZ1HFGBw7U83PYMdp9aZL6JTijsuHG5LpeA",
  "key2": "4hh5gspT3xLDUUqv4EuADLW8TY4Lkhfvh5n2aD9nc8pcZfQoCj2Ma7fzJCGHrvqXaUNxNaVdmxvpFvrG4JhsAnRY",
  "key3": "3VxDzyF2ifo1n761BX6JQdoEu6UaG8k27xZwH5uuKstm1Yqpp64F7jZ3Cja294rCkLqJX2woDgasoQngTxa2Lbdo",
  "key4": "5ZVqPMzRMzrscPieUgNHVxkxoDWaJ5y3E4neHqZUbBpBhCPXgiQuXMsA3dhpj2BrKnyZ9aiG7M6x2p2bGRK7Gdoe",
  "key5": "3rzgXMxP9mHENw79MdiS8837RoeSUjPnkH3BH7CbeFArR6J4HCBDH8Tyhh35rjmtgibHymFZZsm7bqQRLbrRHCbM",
  "key6": "5XzdYAiCAvG2rj4VvedpPBRYcusdJ4k83WDj4voQkPKCMSowCiEgrWdJMSwbg76DxGs2PcoanUEtt6rfMBKDV9cD",
  "key7": "28jqe4LxdE6kEqTvNek6uzTrZgy2dvDqSxR5deAQYXfHG5BPsieTdj899b59Zzgu7NhkYbZt5idxFezu3A3vX1PE",
  "key8": "5LJsyPUK2KgboXzwWQmX6SJb13MqX1oxVxKLbEcyTmZQNB83vEy62iuewPuSXuK7FLjPLhKRd5A7XGAG5XPMcq9E",
  "key9": "2km1hKmxdY9XQubb5sBdEvU4ZFDr1UgHfequ6bWeRUsitzN1rBXZ9jfYCDcBU5T4VvBPHjWCgv2Nji2HDNpaxdEU",
  "key10": "2LyW6QJwRaHrewQ9aLoKdiRsZusrNC6QAzdzco91Gx75yyXZqSw5fSh1U9aPw5rs573peUXmBJWFScGEqJPSwi8x",
  "key11": "5AiiXsPrYxzrZfYC19vfRi4hDoLsKXD6XVQAYxN3nMyAqjMbVcda8Tri7ZvPnpaN5NCHgwyf6dhCoxX2ef8LYPuZ",
  "key12": "5LEdhWcCCGLjc92yck7kPyxe31HcHkaxc7qgTgSCVrzB9e9zPoyjiHc36VvaNVY8tYabjAu3w92dAWDwDxGu7rn4",
  "key13": "t7AsexYXrAD2hZYZ3tUZrh96AogBFVB9Xri7pRbLm96wLoCEPxohaA1L8GxAJY1HiLd253t22L2gS1aUULmbhWA",
  "key14": "5emBL39ib9baPdaoad22zWAkG2VPUT4dy4odmQ9D6zhEAzbCsqnm5nhj1PSFwoZSDV3Uk4pRtm7FGoG7iMXRkcuc",
  "key15": "44hRt75FELVC5CLQ23nYaxHzXPVsPrWGfpxoy2m6ZLeB5FEpWTz6s5kuj5G6Mtvn55ytNwC4Mmf4EbEUzHGLSYHc",
  "key16": "4tqt1QY6kjcQ1fpwrzxcywe9mUZHP7FhL6zHNMCok77T8YwX31JFC6Sec2hGvKbPCpUP9TzvzF42oQytst6vu6RL",
  "key17": "3NVSzvAHUCU9eo4TFdi11AUHEe1Rmh5sD9RT9pQUmXiqPhCrZrjCwv9XAvU8c9twgeER5dmiKuCNhqBpF7nR8AFQ",
  "key18": "2HmgaJUxvcebPP4hYJqHF1Mk21RHeRW2HwzNtcuxLYq888b8P61tUQPpVgtYzVnBfvtKUQD5NygudZuiJuLGKeoo",
  "key19": "5AV3f6NRspEdtMaJSapJjn9DBjK28GxduYMdoVQf5DsezuBQ9y74YdLE9TY2yoAuPimyM1uYb1hXpRSssb3jwrEj",
  "key20": "2bjDqBTYtpnk6dNR5yG7oWcoQZr3rd2Fa1Sqa5U8PYZWY2Pk1Z51ehbLQnMEAwEtMUggbCWVBbvYF3Dv1PNyFjg9",
  "key21": "395xTUe3SNzt3w83AWnctWry7o1nd58Ck44USACk86TjDVDewd7QeKz4xuoWx2aHFG7z7PoHkCswbd9Kj37drKji",
  "key22": "nJwfFuBj4FA25ZQQfpfjUyyenDiaZVHPD6dTSFB5nWbA7wVrHpV4LfxZ45kwKbUS5ArCQxmnLCVsG2v2PQBi2eV",
  "key23": "4rABeufUkyCrbAPpHKsG3dDADXMzh8naqShMqSu3zuqB13tgnyPrpz122XJnUgyc6vjfVR76xXwgepFTiMFze8KS",
  "key24": "XaA6vp918xqTsXfVP2gYDq2wwioKuLgny8g4RdZ1xW5Lw7xBqwGBn5MLqUk2FL2yD91meTfs9JK7QP7UjEqbjyS",
  "key25": "222Z6KkhKHVDQLFnytk2JHmksu8UtHzJHyLp3KThqhMo9XDJRnZbL6UfMNfHb4YYRFzT1TQtzs5HYBCMTTov9cuL",
  "key26": "5Qc1d3SenNhJsLXxXRxUzCBetaRBXoyozCK5atETduQq5hz9qnpSecG5xubPVsCMBBPyeTxCbcqx8m19UWVu16ys",
  "key27": "2EJuaxHBwbkGPJrM2U8UcXmjuewwVHdrTrrJ1w71yAQa7jXbew8nCGv4JTAVTdprv9UrvBLZRBAaQdSTW3UgU6dk",
  "key28": "21uEAMTZo9FdSjWM3nGFMoAgmFAuBWRjFW9djzVWHV65P6UFbLMMtbsPsrDHD7NDt7SyrFyyPzWNasHWVsyk72vN",
  "key29": "3sdAGdYx8PeHKy3gB91Ef421uyJMcnYtiPU5cdQGgGdVDcoEThR2Bj9jWdPHsXVrXUS4CPDZb97dMqvp7qJogC49",
  "key30": "21nLGUEswAGiyQn5jD3uwCjrqDoMm1nc1jRodYsjKK3tx8A4c9epusC95ZqV2R3tCKRxvLYeo49M2RLTrggyJLJf",
  "key31": "3KXicZ8D1riGJ1m6NDJUmvdasmwMxFbzeYerX8VN9g7mdo42vewrVubEQhyXm6r5gUY5mJFyCnHkkn7Fb8GLbzh8"
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
