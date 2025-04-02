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
    "4zfR1By3XBnrMAa2sRGpYwJruihsbsupoyjBfAvjGy3MFaJi1w2eoRhp7i836D4t9EgUWq5M19EQ9mihSdeh2iZW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65XjKS4iC1yBhkLUaeyNV9GpkdZdUK9RWaP6fYKuGTfBjH8AiygfPnK6yubwmHNwnZXBqjNCQnrSed2XCFK5Gsgo",
  "key1": "24jb59dnuPoqsjExvC4rX3LfyTGFVJXacMaLDia6zA4e2EieUwF8PXfCpd9QHSMYwkfXa7YbmdVEp1i8xGEHmKz6",
  "key2": "5zkn9gmEhqU1ziZ9XNC471kUDGA5B76sXiti4i8ksRiaLCpYf2Q7NqEgtUizUj8CreRHoTGnsTEBWr9wBcNcabdj",
  "key3": "58rCcch7K2U19nGrh7d1TdXhQ3YAU5wtYAbYqEpv7YiSsaiD82jx49KCLtRUKfxZEqSfRkr3NH6gmGNmpZPzGzLY",
  "key4": "68CXGLteBMfZnXBKXF74qwSQvm7HDrvaHwjht18F1wdmW8rgyx267Q8zzjF1s7Z2YnxZBGMEMXCbuze2nJkobD3",
  "key5": "31fAqt1wVhmU96V5u1BVSsBbcrDdMomajuoUAjhgefSKU524Crnib5zoFHZbA2Zsy2hyYmDm8TQkmKwKWoGM1oY9",
  "key6": "4qKTEdwo2RvxXdXLR6m5boig14RJB4827mPLF7untD9AS6gXYaEi2trd4ezGxLexQzneTpqqVpYPCAwz4oDQ3nmS",
  "key7": "5PEp5a6RVVnnvbBL2oCf5sNLRYnpkqmJWnTqcsFEoThPuvBTPiFitvjbruL847HfuoFsh1gAkyJjeJpcYxLGmDD2",
  "key8": "2zYZr3MrNWGcebTnHaiMwmFQsitxG58ffMpf8KfMuE2Kf1pTz6s7bdqqEDXnmtBGpCTQftZD9VSENoEHGuckqZ3z",
  "key9": "5o77J9PezkiG8D6rTbHrab5Rwipi3PRfGJZu7FYR1EYBi5BkPYMjaSm1jyRDvAS38Evmc7JVo8J7JPwLMdfbtGU",
  "key10": "4K3g5ESTHZ1nL24amtKr55ZGHVLqWDBX9MfqAtvGKtofzqHKLLnPCfszJ3PqtyjP8NyGvZis7HNomV7ELFNEEzgQ",
  "key11": "3zjNL468gMrca1hKhcKd2krwJyvz9iPtXrtk1jBMUwo4ReMRv8kHSgvpbYL969VTA78Fb11d2zWXHkD8kAcy2E5f",
  "key12": "62E1PuvH1Nvte8EYmf3eeSyESfctayKgpcztVemRGtzhP1Kv4zLsqiMi7VA4dYAuaEYNkXsN5mBjkijj22vGeWHJ",
  "key13": "ATMTAGc7zBL6ysRUXbxdtA9arPpkbkwbhC8L32MYbbj3DUQNHbi4frLLozJEnC1xyNn9v6Y7fL9SVTj2Y53HYcK",
  "key14": "DTbyqXAhnSHVE9ezujsbjtL2zYwLBgzFxKqn48Ek2i2pQV2m2tHDoRZdGjvufN3zbeWYHK8niKTTEFmojK3W6yC",
  "key15": "pRc1JA6LHNBxUSrawvKU5yCMfNUUwQ4v7ax7yhbZbbowNRGuXpncX3hi87Szv7dh2c7VCSNKQxSAYApJ9W6N9P7",
  "key16": "4DY2JQ7LrPb1xYRPfRwASpQ4gpNzyFN3KZGu97b5QqFeMV31mzaTFXiXytYDte8fwvXcXH9PDiEyvSYTS5SUVHsC",
  "key17": "32HX3Ppq91FEqoAb2SDztNsbtpcP8HuFSanqsmRpyRQUnC3oPFXVy8Vf2kBi2dTWkfdqhZAwa7tHEZ6WgvNFMMUE",
  "key18": "44Eas5GEnvWYBHtc4Pwuzfuegvwb1SZC45AZxeJaqj5iLG3XU16eSwHgvjbumeEMmzWyeA5PXQHGKKgzE2FtJnuj",
  "key19": "HxUYXYVNgd5sREfffyUyQDBDdmuDCWaiAY4cUbBBNEMjwieau2os6b6YGghYTtPzY22xcGtqeSz1oD6srDS1gKC",
  "key20": "2MeV7EE2HVarzcvn1bbhdsnajYc7pqhYQZHcGKAJMdk7rXy4gxaCa4FJ81gbPbSPgjUCP94VXZ2iCeYQdct6FpJR",
  "key21": "2qBDQz1BU9dTCEWC7xBF9DqDzh9XX7a7zySrxqXYe39RjnX6MAFXYuJ46GWTuvtJTFcjqMwy9NQLeMkfBoh2F4Eh",
  "key22": "2qP59BMMqa6EX9WNiUMus4fuQ8ss14P1SZSu3zrzCr71HwVh98H2ahvNEXFiaeqTuQ6ybHmUkFN2AvAiCLX241CU",
  "key23": "3xHhbkK9Vbuym5AyoFHVDm97mGtAvSqtrpi8PQwjrGnwCgS1q3HBPNg6g2JWLJAngm8jE4qTzLkXgLBGa7bVzsvJ",
  "key24": "4rmpdWw8bLiQqWAZEmDoHpyXuSqMvD5vL59kfTkSP6DzrDNdWJXQbuWTbjVBZaBhEUPr6xZjwGiMEvsdGfW1r1Nf",
  "key25": "2BRYCBjx3rRTGUvVAumUtrK8NH6rcN14Y9gGpQdYBF6JxJL1FUPFDgsJXiZGyA9sDHX3Q964BYecSDrZDZc5ES7b",
  "key26": "5s5PJ4DqQFN5biChptK6LR2wkXabwDYc48df2w7Zhmfb8QWcuxduT3tF3hBtoLfdUXpB1DcropWqvpGTxFYpq1oY",
  "key27": "2vQpN5VsHymGp1aFovhp1NNoiGq3WWjSymYDrWYmWLVgUVMNwjn9UnUWwGG6qCQ3yQwcXCDMhj6cPhmBLi4QhAfT",
  "key28": "3gjoPw12nqdj9bV9etxeFKLThS68xfp5nQv3fwBuFxFgYWe6TJjdVUXY1EvnGRirKPyXFAoc8Qg8y8pAgtbukijV",
  "key29": "3gJkWf3fMPUMw5yVtbx1oKrhMmCQQmJsg8pxvGhn3uyviGeP885bLbCPS6T7SBnviewk337W1dosSCC7sGeR9uS2",
  "key30": "55fm9HwW1PV5WbcHumJSqwU3WWeF3EbkhGjhgSBqjruEGBTy2brtxjnHPdkKi5oscb8MT4mvsV8LGDTEAAE4qWLJ",
  "key31": "2cTrCoM5hLUH5eqvM8i3yA2YA5j6qpUxmZ7EUJj6e82v6oDGHJX5PTSKci5WQjK1eVAqNR3hC44BfwDi5euMVfQf",
  "key32": "5ANPfDBs2dnzmaA1kDEuXM3TsZa7g83DnnQ9Xfv7P3uQTWBZJYgboQiRYQNVQafgxtVShFtxAoFWn9LBf3EemEJ6",
  "key33": "4yGPp2qvtQ5UeJX34X9j5cnLppjGXy1AJPmMrC2hxWiepC366JzsYKsAQ73L8ZHEDM5hFZf3pzroyYX2xH7buQJ7",
  "key34": "vXWF5av8eAUK29ehMeM2zSBc84kahMBB9NRNGZzdzaE2Dk6Lz9sDzQ2EwZCEssFoKUju68mvU29ZMfK3gs2sxny",
  "key35": "2jHqUTH6EL9f28AN1MyLk6UcCGt53ygbUeWxnpQzcSG3WbadhxNePomsEuEaEppxJWzA4FCFZdcHvmLrYxaMisTt",
  "key36": "4jxCs58v8FXiLbZ9D6TrPP4tyAsWxs7c3srYySDf5mYk9JduL5r4Xmp8d39z7iR7kmJQPufgCDyWYJvD1xNrErvw",
  "key37": "2CZuMADouoGUwXuybE5rh2gCt5Qj5H8eB2r8t8g9N3FeoZpW5oe6kV83kr3ng3AmcgtdK6ikCRcuhPtdgRjhwM4",
  "key38": "3LWHxQX2qeFAnhMzAqmLspW6dkhsufhYz14nYy22jE5rYKEDA1T5GZG5HQFwxV8stEwgekdZCuMwdU4AAWBF2yMZ",
  "key39": "5GEg6mJB3sJTTf7gJxsYAT4NBqpEnnNb4fj6CDBq2sTdrMoqXimstCauzLuw95GXwJQTmushBLbDNYDRqh2Fn1k",
  "key40": "2JBaKEfPvm8z4aLL5ihjZsRb3jBXTc8Sq2kuAWCbJpAktwXP1EWwEK76QaY6dq1U2SFhHwPHjoGaKCL2Rd6Qappj",
  "key41": "5AxPpxiNPiKxwLvQe1eT325PKEQsyEj5xfYZW3w9WP8oK7u3DKuagzBi9ghs75xdUfFsQqqdgHsJzvjFc144rKyq",
  "key42": "556nvPkcz2ZVB9Mdrg4vhgqkaCzvL6kVVMarwqdUBMsNhP2HJ7pmuo2ZQaWxMxZjqoY2fR1f12w7sa1BZkF6Lae4",
  "key43": "RukxgZYNADL9ez5qrNwJWfqRj6qDx5pv5zTAJ7MwwVmWjTgYprrCYeRRP6RQWYjZuTtsW58jbR9y8r4dE8VS8G3"
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
