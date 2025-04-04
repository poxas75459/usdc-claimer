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
    "25EC2p2DHynEgd7MHnwDhGbA4Zuhzb4z6d8AkNwHYvnmvBbajVwptM7jiVjHtECCU3BGdwjmKSVP1pwudSazDGkF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cH5VGYAWMP1uMBirCCfwLB6VuLkJF1T3keMcETapKBcoq59z7G14qF8xR64Cxs8LvA3VYbdinWBy7fqPwh3mbHD",
  "key1": "43CK9zAnYWGNM2CxngZ9yZEB8KVekxJbCgxi2CRddQtarupF1YwwWeLZuVTMGSGLKenYMGzCuUx91zhY3Wm7Y3G6",
  "key2": "3oni2zJLx2ZR8ePSijtyWJkgUCaXmJJvk2nK6wGWYzmqCwdAzusX6Tg6ceLCmQkui8go2NrEpGLmkkSbJuywHTcu",
  "key3": "3VNWXZ4VHCpXgkuJakwEA1BgLJmJaoLz4SDRt2Pxzm1uJ4DL9oVBgZY4K6eeTRwKsSJx536Du75QMZNZsFFe5kL5",
  "key4": "NJXM2syLRdvFduKXQariFb13azbqmXcujovg1WLT4XpPhFEdsu9ntwLNGtcFFjfCGerLfkk2BUYD7DL2evQrgUA",
  "key5": "4vKRaFveSgCaaJP2bA5wXKm6DWD6ZKNuADGSZ1SnZ4QofaQ7dTtDP38zpc7qb3rAw2FqCrFsizpmmztpSipGgJ5Q",
  "key6": "4EDE1jq3btjSMrHEpsfgrgAoV317kjFYdNPqSJEcw6FRa7YJgQgadFrSAzDfuVvdgjWRFSyNdKKgUzCT4hzqxFpF",
  "key7": "4tjkg8xAD9yYhUkrLmarcXVEHAwB8mdfbSufAM3QFDYK5sAce4v64pL7chW58YHNnikWvto6qVwJRdD2gN5Cpj9R",
  "key8": "57dFoxsS7E7PJu3yB4HMt1GsNboWk289xvp8ETHTCyq1vaa63THabUCiWQzcHpK7CqFXvTheGQUrnKWy6Xp6fFCE",
  "key9": "u9RA6T2eBMrSLJXorqgtPYVWzgcjm7ccRPHHfivsxXDqJ7esXAdxjRyAJG7HF83nuGsRbsg6fPoNW3P6qpGH3ds",
  "key10": "3z7PotV7mAMDs5M8ARxCMzQNyJNNWjSfWHibcyuU8LJAgKZnXUWQrtyLiekSUFGaM7k9wmUyVEf4rZueERoX1ZP7",
  "key11": "a64t1hYq9PXmsNmt9EekMYg4TAnvHW1PA6obF4Xxg7byoTRfqE5PX8E41cpYD2VifgH132bWAK2CVEVNG6pszMc",
  "key12": "5JKQJ5sJypbuxKrWqenhpCNmNVEqNzfMQRXsfpwSyMYfRgUsPdJPckVjtWCjZzzkUHHNrfbaoeMp46wuY6Mi6q4u",
  "key13": "4ScC5yusrsVjWYZTN7QwMgeTtSBpWrnkKQipAAYqVR7ztFYsCYynjzT6K1miqQfehHn6AMErMqo4W461xsADr17x",
  "key14": "2oHuR2kVgGYcZESDcSnN8JCobS5kdY3vVT7arSz24av5LT9bwCVjpUAYjH1gLDoCoNFGPCQJcdNjmqGUeTpFcspm",
  "key15": "5S7m9WmBTRAG83AANuiLKHd1K8DGLAYWEEeBKhPDrut3mBA4YddPr7MtuobAV3KtNszaAh5o1m5DEHCFsw9DBjfA",
  "key16": "yZbxNGsaxZfAdQtBuyaZJZRzV6H74M44WCcSaigPWGMTpbQwysK5unFxcTUqrNPM4c1HQz1RkALubPtULhtj1pi",
  "key17": "3oUWH2yxAbZVrAYwm6EZsbnKz4pnpDQJySqVJp3DNRCW25sQePrd6ku1EsdXYZMgUQAAobrQTswpxUhttTVL7taE",
  "key18": "daYysYH4tc7UgZVfDYH94keRDV71guQJJmtRZDmQj9P8VqG56M7wX8jovLN5b2ED5j3piYZZUSUXbhomALT1K2D",
  "key19": "2fCxvjG2sVgJrWWyUWCbQVRAqWhWLB5JJr5gD7pnTUW1J8er3D5FD37iXrXkm42oCbWnDjFhEb55AvMkN9mLGKMa",
  "key20": "BC8umf8CB1D67bcR7QRVoGo7jNXEu2RbUd2Z73RvLCiSKmCkGjCLyrBfkS1LGG1R8gyf866asuDydcdHMeAQitW",
  "key21": "5hMemKp6eUnEjmsuqtYs8UjZNZaUMYG88VVrPCVQcHMgR2VRyafxAAip35eQpaM3NHvz8KLzqeAVizGVEsF1XwGk",
  "key22": "MpXGdrtLopcUn9hNHxcAj8Unc35s2rzsYabvPjeDpAUqBscacESvqZASTSy6832NJFsemV9XcEhXX7giFfhgcpc",
  "key23": "2rXCPnLZ6CrvZ2v6E6iv8GAySS8SE5g3Q3abL4W5qHox7QLwyqZfSagEsfPErfoqzTijy2rsaT5KCBVkGRMG7LnV",
  "key24": "4XJudQCyXKv7Jmwf6mcoWWbGWNJGJCLi8Ga1vrk3UPv1ucnTcMaFNGtjuMLwa3ZDj3oXNeS9PSJgtrVt3thjRiHY",
  "key25": "3RMDMh9W1CG4a2jfSrNrHS1xjjpTyP8ueYrQwbDhrtD1T9cEhvqWteno5bZ2sCDyzbxA4zNM87Rgf773gmYaJZPL",
  "key26": "5Cp8rwJaNcMYkcdPTjaEUNDeRHR1xHEbaH6wtR9pnW8QNmfRSRWLn4HfvWfxLyde75PstTg3doXEJs8uzmaFSrwW",
  "key27": "4wxojWsSkA5Ar5kdAfj5FjYxKJ2weQf1dTA2ZX4otSpzwDhuwDmNiVHRwH6d8E2MxnXN487NRgXgdL6h7jxL8t3L"
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
