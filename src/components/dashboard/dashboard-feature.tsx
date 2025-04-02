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
    "2oaN2ent7EMsoFRvXZXpvW9FLppU33Euthjy6ptErPtpqx64Rs2x3UES4TPQb2RDLhgmQ3uSvzk7ewvHtiu4bRWr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ywz7dgyGhnZaYAJWqfn2Yu6srJYzx6XUnGXYH9Mou3crPJagr4nKd76TyoEyPS6oJCfmnjT9foHDYMfZV1nLCEU",
  "key1": "4ZTyAfV8PbApgiXEyTKZpGsfHLE6hV4hUuJBp1zpk3Fm1yxCzEt6PdidqyiniCnXyagYzyzyHm4FUbsEwR7Qurdf",
  "key2": "2htGs4puCfwPsAp8wsnQjaLBq1aKs37jHvmCbixiqpKkkjN52qiTbjgwso2PHZDpZib1qMLX9TxJ53kTyQAKCWgN",
  "key3": "51kLJoTsJEb5Lpoftyou6iRxAoSoNaDk6b6e4ae9ouzwDeeUbhCQvnARXS6SDKYbARkk6ve3yjLReGyspmRfbCP3",
  "key4": "mFBo8LDea9UpCwEtjuc8p4FLmbBeBCqnrTe59vz9Ff8GJNWnNFzpxX4vY9thWbfv8eBvnHnTkXJPfqQ6LXay2Uc",
  "key5": "5ocpNz5q2ZXW1mrRR2ge9WME4TWRaPVd76TR7xEmY2JZx9ryXWhWek3HjqNnixgegWSi7uK1GreuT4BznJL2B4ZE",
  "key6": "2Zo9rUqhqTTf53TC3Mreh9mrRPVjk1mrE3YK9KnWpEa9dW9E4Ft2tKtA1kWZd2vctG9akMHry3GF4DziJjHdhAiP",
  "key7": "4Gm4QDvwRWscuntkqjtV1VKDiUz8futof2Kjac9kyq2jNLgoXw6hkLvH6UoWPUGB9G4G2iWjMiwgqgEHBXHiohyN",
  "key8": "GG4nyMcW34uUDKRF1xm8hRgTniv1EjKgoaZJ8fRGZgki1fR6u9LF2ooX12w5JDHGSzKMc2J4Rff8pu5erfVT9rP",
  "key9": "5SRmQqikXNYkYAWtNhqEQRfGfAL1BUSujZhCZ18ZD2tTmvZecADfi8EAQZsnwZfMD7ZMXw8mcRqSK63kKG4Bts37",
  "key10": "5MuHHYNT2ZHk4s9pLb53coefru75Ugo8NGU9AW5dwSxm4PkEJQQWwchMUo27HeAc4CRYZkEnMyzNhk7vB5M5wPN",
  "key11": "5R59hTNLJWKSRvraNAFxfF3caq5r4j9aRYqJ1cPxQDpzvPa8r5gWoP7ganYaASJ8JYwS4VAGcQ6TwAcPSZzAQyN7",
  "key12": "4oGBm19eaaxWSuCgn2WhXAEBbVLrqEoEC1nzQpJgoVUXftqNBbePjbW1WLYmhpTN971VYPmmFdsz4EUfNRY4Ybxf",
  "key13": "4hZ5uVmV1UdZNY3zKMpiMn7m9F4cCB4HRCff8uoZFQYUaWGRiyGjFW4mJXxkMwdeRu3ivQ6WoboDuq2jH5SkYrrg",
  "key14": "5JgkEmASyRgZtPFcFEb1mJizPGD6UiC66h1uYatoXCphsB71TUqjEgULgizryHDXAQE5pT3U9qr7rwWaGrJQrdFJ",
  "key15": "4yqNdyS9B29FwVaqNB9MovCCFgm4ZTYoBANPg85ZNvdkSvwx3ehCwtmXATYWgLEaXC8bV2SXa6mrhWULVhq3dHMU",
  "key16": "2YpBP5T252P2csJLPJhtc234YhUsZqHMHjngqYBWjCTg31fVRK8DoAU9Wx43iPq5e2V46YHgXRseGZWMaQ6JBPkA",
  "key17": "5g275M8UyW2wqtCHPUvtXdM5uZMysu1gpz32Duz1CgchkNM9ZeZ66vPkC462C5SyXHLLe57yLoNkiAQMpZ4TEPmg",
  "key18": "T6oGGTgNHfNG5z9YJpJBVSctRhzCzf6yQ2xrxBFC21fBDtASdzQi3GuJAgCYWtnPyLY5vHDUM9ErGywoKAhtiPA",
  "key19": "5GnbPrGm83uc7ZrghnYiinPPr7HSR8QqFdb5wwRiUBMo2YT5XDBBiMmonL9nqNTHoGPTwmoPLjoUDpqf8pAbRCNi",
  "key20": "dJbiZgdVBTEDseQ8TrBnyux6L3N7gZkEdsQnzksykWPhr1qJ2Jy1WM2Vjf3rDYC5AXAziAy5oYzxAiXAPRYNHdU",
  "key21": "2M2efY5pMwEnf1PBJoQH9fanewvs1xMFLhTVEm5Kzs4nVK2axfi1py3YqMrYEYmDDSZmwjst3C4kKhrvCTL4nB6C",
  "key22": "4VHQgvgSoYBmhkhQQUmjLcBXHgKNo4tvXGy9Ydrf41YKYYzZBtYQrgA9uXxFZZHMa393mk1t4thKRaeUm41vvtHE",
  "key23": "4EqjFnbUohTsbwnLxi8RJhTrwpXmWGPpy4UU6SH7fHU3TaDw5RTwLZM8N3KW9f76bZJiaZzskRsL8QHaJ7LNhfSF",
  "key24": "5eezxa6k83x6tKgvjcwXgmi7jrDg2UhCNBkghH1uLNmUp9kg8X48sXRm8SSq6D8q136mb7Eo6vGpfhhELBBhvuVs",
  "key25": "4ptf8MeWZaE9DsKJewF2AUQB2PXUVKHrEBo1mSPzn7b4rbaXS8jnTzpKtpMVMZtNDACWM8Zjyx9mtbWDXwgPDbC9",
  "key26": "4pSf3qKzsXLm6CcryfLPz3Q2kV2XWjq7fZyRF3Jw9BqfMJEuQFod2Mkrbnn7pqmnDThYsP7YdmJCS889y56pRvBQ",
  "key27": "27vgs3CVa3L7YDhj8h4jbD6rL7YC2rHZPMJvGJEV4YkdcmLw2w5vCWMfq9n7M3kQ5WKwG7ckqiVu6zmdhqvoRgSF",
  "key28": "2pbqC6SCFdUEwusrm7vaJA77BY9MGYNEEguiiPb2gikHFrEjcBBEXkjuTD5pbaHQHwKceJzc5FFLxMf7MKEZ2Nfc",
  "key29": "iQyUjbeYt5xcXLk8YVDowMo7jVXZFyQSgz4SbnJnkZeaJSzEckMLPijSiAAqegdqwmNfze44qgNWMw7FhdQveaP",
  "key30": "35izjAhZUPqUjx3QuocTjMhNn5d8EQ8w6nHKYP86ZiNrTXE5so4Vsx932SrUJg3wX6wznnYcqor1eQ5N4uy8GAYa",
  "key31": "65rXRDC4qTST757NYFS9TnNWaKnGqL9JK7N9fjZAZkLcqy1jkfxchq1L2mAp3qTSPEAV3748CekMnJBnszGSFtMq",
  "key32": "4WSebGpNrb9yoY6iNxFnuKpxmWd5Q7NDMXBPweb1qD3HXHHjbPBM8vgbZfuHruB4mYC5hZFSw8Bezt7eZfKnMDpN",
  "key33": "2XSsRsL5Eukekp5YPNnFujZugJ3azJ9nEz8HQY2kqEbAArk8qBbf5YNVVbyj7e9GQCFHBKBJuAphKGnUkLitQB1U",
  "key34": "436HWA2pvzgd5Xc7BY9gZYjKpkaJ6ZPLPyDABtSeUuBCagtgyjysbGDoHfnNvwbPWCpD2R3r7UesrMCVfBsyA1NC",
  "key35": "2D7qStmtJbsxdRCuo83x24n8XaMsacdpQk83cWiFxfDB2TSmNPSbg4PrDsDZyH2JPAddWMDiM6GzMYyh9UWbRwty",
  "key36": "2PpVqKZackwbHzJTtVChfQztz49enyPfbvGF8wLe4RQZgHPa4hYmwuEVgfkHTgEG63GJ8JDVSZjqbk1MZmdeEngC",
  "key37": "c8co23dneVBhCVrvqw6fb9G5aDvNjUK1ih73FmKPMdHHaAfJRbxu7BR5njR9cvf6EsDYsnP5PKp7B6dnEtmRub3",
  "key38": "3Mav65DtovGgGWDmix6VCturCRnYqmzdenDfwh34bfjJE7WnHa7Rno7afkCoaPzfdrSUhEq4Sk2oph9tXzntr1LJ",
  "key39": "2Ton7oDJWwVaeidD8XCXsiLhQpwfrPF8iYZYpvbm42hBjgenChV44QeuNHsSFXBwCfG1y8Fe21cirv4XwFjmEC4M"
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
