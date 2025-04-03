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
    "4mK6FUUGqsZitgWTr3sd8wzBpwds6FdP41HU9s7Y6noCgYjF7R9n78Pj5r68okFRfL52edwDpv9RXNDb3rmFhZEv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29U9WSFZcPvAVC9ua9BMpE5ra2zUTKp1bAaYcM83NDgwfXQLHW4ZHQHPEC3fsoY4esgsrMSD85PLT2iWHJWAHi3M",
  "key1": "5W3oLQDQQhZU67xweoRY6kxTBSqNCfnDEDgyKYBKZTZjAJPhAiMKrs2KMueaby1ZbxAmU3Jjfr7dwTBA3X8zHaua",
  "key2": "3yx4KyZyVUSFcj1D4pbsHcDsaUsvkGtB1WHt3SPosjXSw3Xj1HBoW364128Fw7H4WULfg6XP3rhD24Rs1Pvkcgmr",
  "key3": "3cGrN6yZfQngWMentm1ATJw1V4BHfBtUF5pwTj6ueeJLXg6VcTMMHRhFoFdVTzQgv2vqht7GJvy2M72WpcGgUhtR",
  "key4": "Q1UJNEPxNzVsAboEXE46MG11puvSqrjgWoBXBbAiCNBakL4xj26kUkePgZomLijmbd3RBhuPedARtJKgJgJTuN1",
  "key5": "5scY6knmYG5xXw6dxe2DHxg1EbAoHMNKZTPLGBqR1i263RAvqKK5Eg9m35Da54EN3PBQm3Bb3wuBshFkx15KYHnq",
  "key6": "4Fduwr8BCJpySS9qBtPmyShL9X9mo5PUkTZHbN9VMJvvnP3QAHrzjWz7K4eLRBpL2m5cxVdUMKec4ourrPAav7CV",
  "key7": "u8im6yEtxizBMSrUbvyW7q5ZYuQWTXm4cDnNNCiC2HNJPBT29xKWwLug6xVydKXwbje8MqnG6TcSEXm2iDi5LXe",
  "key8": "owKbyFBLVbbVPBfycpDoHUtd16mw2ofqTvi8AMEEcMaTFrpNV6ykm13qj7M7uAZfrehgR7qwnmVW8MTpf9Zbr5a",
  "key9": "UXMewV1fiNui8FjJUQPv94KJm9hNzxmoV6jDaX4SZPLwVYiNNnjMTb5sTPY6bWcmyUjhzCWkRcxBLYjG8m93gKH",
  "key10": "2BP2kWAhrQrtUsY5bF5H7z7ArjKpiRqrwSBnkyrYXmLrnJmDp3dXCPvDbt8XP5ZD1Dt4HRPEnsRoydh1z6z7tmDk",
  "key11": "4f9DFDvuGq6Ns6hzPSCnTf5bVGUtNP7EPLtzt5fcRkwxTWePhXeXZ4Tfipu4gaDkRMQVJHob63z7zLyMRS7MYp24",
  "key12": "4f9GypxL7wJMCccnFzs8BosKSkVLDFEST4CDDqKizebXdSqz4vKQbbPDvFCa2FtpQ72uBPGQ5MY1CGeKhe4fsHdf",
  "key13": "5RT3Fkut1x3hM8K1oWTepBBSbP8MxB3fWhJSKPre498PJEUFFLug7fGfXNCJVknszmsTtEYvZi7E2eDQ1F5w8K2B",
  "key14": "PiYhRgwKohGDN9CpfHKfX1fSGmyqAHpRpiDvEDx9A2Smx2FnqkPqEMRpXc5SZSd9Cbj63zcQZrZzUy8L5KedvCc",
  "key15": "mzc19LoStFonEc7vtJcKNWHUuxBJnanmtNzgTMPEMCW2Sg27Fp4sbjkJVaNDUuH8hTJDVyWcveotbj1k9cwVwTX",
  "key16": "2DBsjsCTWGdMbEudgkxhQPgVmzN2eJprL2bei1RcvpCBcixbmYJc9RWu7J5uTnmTKzdRgnE2jP7vh9SaMibGDfPS",
  "key17": "5YUeKBU65z7D8pNHTnLwBMVDG2fjuMn2DTgrbG9LNjwebz6v7coYE3LiTjBXm8LQobA6TwoDVMhKCKeC3FHxLCJP",
  "key18": "3gR4iMh1SxbKzA64sKMCubcH89e5PswfY7Py5CU7VbRfUxWDdHWVjy33eCD55VB82SGZQtaNSMnpK5Q7TH2hj19E",
  "key19": "SDuqZXgKSiim6Bkg2zVfuJ3SYoMTU3aZhZaRrLhHtvqFEMQaLFeh9NcJhL2egkkTuB5BPhxFKNsnnESBo7qT62h",
  "key20": "5qKDUN2EZBnuVucBsr2TfYbo7VdcFuAQ4oHCohL6NWrtH21u7jR5jicPqqZXG3ha331XnvdKT9GzSMwkXKtvfsf2",
  "key21": "2LfWdcx8XkLbp22whqNj7gCrdVRS8cvgA831uzLFgsPpV52wD7AH6v4SepfuKhUWjCa9ewGh98c31kASvVCP5iRH",
  "key22": "5PAwpdboL3SDxWDgSTwkwznotRpHCKWXa4NzyLrLFm8EDXoyKeDS7Kv8CRCTbeitGWiAdcn4Sb3VLbrhhQzYtzxP",
  "key23": "2KoVtCmgA7iQ3vX2iQ56mWF7K2WLgUWh5XsmUhuVyV8n4Yw881u2bmzptUAtHGYh2uB2gpkYysVTQki3Fxr7bnoH",
  "key24": "1xAVDcVEMeeuXncUq5CaPPxApx7Q8Jiqj5E7kGrek5igfUKfFkRFpjMs6D8Fd79aetshaVGfdiFZrZxp1cQvjSW",
  "key25": "5uD3XTgPJArLgxJfKdtm2ChZHmrFuY8LWo3MKHXUtKMD4yrDAjZvxoPB65o45dLHj8keqQNR5ZhAM998ikUtqxJB",
  "key26": "2iDGDjjiiCBQPuqHSS32TW6GBJSn8JgraJg62moU6KqWLpvPiaVQDgBeEbfxgsTK87G7FaLLGhwN99v135Z6X9Yb",
  "key27": "JJkgCuZddXvKPxeEVvXAazd6vmbX4qcnqujFrjnD4x4C1Y8iwErt67XFvP2LcQBqxWE6FLcyvrkuMVcYd4WbDGc",
  "key28": "2uDFotPgYbAZqryjJRarWz6XkT6Ybjoovk4scrEBicuEcSvQ4xsj6oCDLMpkkA681257JcTdJYdRQcnc7Wmpc6Cv",
  "key29": "46fJsw2T1fBsBkj8WYwLxBcr4ExUu1kRrzAetjxAjrSNzy6V7CRDjb5o6TAG1uJ1CMZfk6XvEG1QnkFYQgskWeDx",
  "key30": "4fJ19Bje5NNKCzdCPZh8zvhiPrM8NDRNNoj6muNhWXShzoSTAdyLsjtAChq6bKHGT2dWcmR967WGiYZNVtJ2eASw",
  "key31": "LD4mkK4hUyCmexhiw8Ddj7rVuq3abuvq7FmmFPRCfsBdh9DZJHnEMtyxdDa9gzKzLf63Tm4EFvCWmx1kiXYvYP6",
  "key32": "46JxDHeHc5WsH3XHTQYTXCHFcuwdR7FPDhHWkedVEJpo3cc3zE9xGwkFaj5XTwk31KtgfDYWAVxwfJdprsKWxNPE",
  "key33": "4eRwGDNmqGYnXcc7fKyq8sjkpf61EFw3EJLjyjB9JsjvAbXjfRx4r2thqsAkqvnCwn2K2TGAj9QsKLC2JkncQFCY",
  "key34": "m9YdywVBMdeK7Rozj1ZwxDL2X9kwuGHnyubqRUti45ZoTdTFzZJvkTVNGny6aGGgir5VQWXn6KnbzDrKz37cHbh"
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
