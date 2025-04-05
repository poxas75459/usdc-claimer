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
    "5Y7nPNbDvtmw2aRVBn3WSWEMZMD7NScVqv8xyh1U1EQZoj4vye9ihuzQWe24CJWdLgpfrXF66zhDionNhmQFQybS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EiSPQV1Pvrb9fV7wmSUYj2Zvs8VzhVPsyRJACbucopLPGJP9ukJ4m44Uo7ggiLLWFNj4G2EwvtLqhM4LgktdBKD",
  "key1": "chobvVTYaexkxqm7sWmq4rjuT56Vtu5o6L9W23AP4eHbMJUbDfTRVdnXqc1jdy55A9tro9tMgzSMm9HQwqNo4YN",
  "key2": "4njDpRpyo6Qb7vjKFb4KNTmvDCH6jdTvLN9zMuo2PZvjec6dutDFLsaVqQZa2wbxp8KBh96HoT7NwXNKZEEjidt",
  "key3": "237ss94nLuC2tDu6vNszwxfcULg9v8zbDHyjQmxkBoEtx85zSRp6PHskYjpWxo9nyyK6XSoV6VpvLGGavDBo8Acb",
  "key4": "4hDRR3DxeojaqiejNYJ2HtHz489zRgDZuV5w67kRs2pAgGnHhe8bYYACkruFMXxCMrLPixh1WJyPXQQ73aQ7r8ua",
  "key5": "5cEfPdf77j3nLgY7pp3thnMcR8PkQZBe1PWwng5JXYGe4A7237rXAM917MJ75Bw13C7JCGjwbdcAfjDPfLDLB9fK",
  "key6": "5ZkW69EhJWZ8BQ8iyyeVS1eoKBGQSdJxfWrH6Hm6HmSZVqcmH7nPcNNRbMyamGr5DdeZhfPwbWngEwMDXUCyJFm8",
  "key7": "4jnPxi5gwnpi9yQAovKbWqGaqksj5BKhBwtp6VrV46N6nYoK2aZAr4sc6nCXGN8S3gsHabP9u1vsDm8tVii5Fufr",
  "key8": "3wKKkeqyeL6bwXH9HhxFYTLkg94hrEk1nD1bQubTuUATLajFGVmmwPnLkVJBkdnPDfrXKgFVueVW3coswWbBhdq9",
  "key9": "5PSb8eFK6MoCKEpWRq6gtfrPyYX3KkmDU474T6ncJJdDXUYBbLD5LiZnvrtodSL2f5nYoA1YsnPW1sbCVw9N7XBZ",
  "key10": "cW1Zcr8FphCCaQzR3y9J29T8s5uVZ9nJTwR9v4q7DduwamUB7QAxPhitgJs8DPU3Znkd4kYgHqbhVFrmNDMiqHc",
  "key11": "c4dn8yV5kUxTeQNvjGwf6NNg9rSsjy3pBPBYefX5Rz82hbpExTLcaXj7PZr3o9mAZLAQKrPCQKCY83VQg6VgRbG",
  "key12": "7qirUZz5dzAKxCzR7PGg4repsf9oZr8FuHiiVfRa4NEHwexuka1LiRtyoHvg73gESzRASCU8qyS9oV3fqjTa2d8",
  "key13": "5vKDyC3CGuhMZpExkumrL8SZL1K7WddhAxkMhgBVQV9bGyc9J3YwwRdy75f4jRFD7t9kQKGGpicj2qZn82iVeXM1",
  "key14": "489K7A1Ugf5NGKfxvThw6rnXPdWMvP81Wpk5cAD54F5MEmiFn9UsekHGa54JcZ6itk1Quud82Q53rW34pHnhvTwX",
  "key15": "3vMwNpudop7SFmysffM8ZiDRms2zdP1g2Y87ct646gvFzMfCZ6t3VcvYfwhekKm5qQubAXt5w2FLKCy726SV55J8",
  "key16": "3ULTtNh3BKaKSeS3U32HRHPrVL7KXXWuAXB1QRNNpiVMUtdTxnMq3GiVJcJ15xQYPnjGAv23Atuw7yTqu8V4nESr",
  "key17": "32GuDiYPo4Tcj4GmgQSwUCfpJpCpPDL9iZjZP3SjnjuQjzy9HFViFZ4iHEg8HqtWxDBodXGjqPg588FQHiUY6E7U",
  "key18": "4hbkMJfAa1RgEvnMVYnTzNkheLmP4Xam4Rdo7cu96UhS5AzTkpuJKiBrvhx9YTJacwG7ku7UJLEiCHvugn27A4Tt",
  "key19": "37Pp9BcmzuJPtv8G7F6nSWA7QhTWoHPmfxB1FbdAYX7Ruo6tXzeq9UHHnvHRpRikR43ETmq9QEnjZrsArNiuz7iJ",
  "key20": "554eHNM7xGjVCSB6Y1CNNkufatqaAFhFqGfjjAogXfMnfCxmnHmGh88WNdDxdmSbKQtGKZCZ8NiWGM24ANUwGKhE",
  "key21": "2ZvgyuNoJsDc3WAgfLnM7MPNAdrFhHG599p9QUBpgkpzNp2zUxHPcQJ86xTeq8m8NtKwM2imWkgTW4fRk8qJqC3L",
  "key22": "v5nXoMKYGHUyhoCSZCCTrr46WapTVkREUrBUPBe5HVgKQdcin7jx46BS1WvXc8YMpQez1sq9iwP7rhNvsfxNNoP",
  "key23": "2i7n7kXKDjXYzYoSLddCXSaqUS7KK1NpmpyvhJBftWQ85ExwcLiug4DcPecZ8TWYZsJpz1SzNr3DXH3ePnJv1Tdm",
  "key24": "4txrAASVe4doYdeikvcEuFeddSBrEcmR33wLxawR7mQfDdUm8M58TvaLYnKWe1GjoQEWd78j529pLb7yX7mdmNrv",
  "key25": "vQvtCmNpvqGP3JzbqjgbmJurffN7XpshWRNJGP7UA726VtwP4fqWDz8gGi7UqhZW7FDF5aupbpUyjCBGES79pYw",
  "key26": "3DWjJ6JE5ch87LGiXhS2W4He3o6NbppZ74NSSQthMdF6faizk9J9ZNt4N4iEdJLT1LYANkHpNkbLeZrLQ2GXjhhn",
  "key27": "2gKtSUsX1xBrkkGWeubextqeJsCUdJEe8KNz1gHmZHM8hSqL7G6vHmgTzdB1Kx5SLPmP59ByuMqH1KfCCu3pXGKn",
  "key28": "2Xx1W3kggov6Ao5NxZKUkiakuARaHWs8zY2f92nECWBi6zseFx96BXhPtERk5bNMVqi9Q6TBoxYCZA4MnTCR1FxC",
  "key29": "2bstTZVghsbrtDUGWqvZY3WfFDZWfGzR5DzLLzrUsMRuTCPAdosmoVZ39nJuCHaU187VVkTnrCtGV9Wj5CxxEzpa",
  "key30": "5ekZ4gMt7HcLAu8Zg2iNqhGcypCo7p3UruopSNq43DPGkRv7i4iN7Swg8jDmP8ZvMgZBFwPud5Kgcc3zS4LYEe4G",
  "key31": "5RPiNaGsmCNnrZcVA2xK9eQr3pqTRNUDZmcCZozx2HDyj9Vz9BNECGBry5bhF2J3bQEgyLchhEXgT6UCBbKdJFrm",
  "key32": "5HTg8Tk2rCWjjA5u3yxsf79p81abBVEYBCJvDi94chmpN1Ukfgz74f65HreupTYwoUjHvf2yQkkeGVuAMW324XSD",
  "key33": "4ed3aX1sLVwZkXfh3kULCUexUaingiFDp54hxBQNTC57DSVgPsPGP4DiJGbAEUAVQ1rX1B6TzHcEHhy7dKGGoU6P",
  "key34": "5QsyAzhk1Kcm6wQ4v4hab3Fo6DM1WxeeAR6EZbCAuY9rNsn3KtHcGJmVHUTJ34hxyqETFfUemBmkJZZZqbPtycV3",
  "key35": "vH6yKACNXsFcb9wLx9fHknfLsUWnCrh2oEoUmEn1bqBc6xtkmBBuEjicW66yPmCDCMNeNFkUK8bdEnUyz4QrEex",
  "key36": "2NjXcxxvUH7eUYoXtF3e69T4hHGVbtCGgAPTn144oEzwbquPMTBVo1Dftu7QQLwsM3LhW4WoziLmB5L4nVB8Xyy1",
  "key37": "4AW4k3DnBH8x67C8huMpDg55T3ATThEpZqYDZoeg1SmDsAmc6sk6DLXBmEoWdjctJdngJndudUqjH1GHHhxY4DAd",
  "key38": "57CgF2DAWgKxeQUJHKsJVTRkLmzgWZLoZa64jkLr4VQ6mYcFTZG3HHSUyCT4fNerzG4tecSNsy18PfNqo4MigBEq",
  "key39": "45qL6JzdAxvfyDkAZTRJXTxkzHSWFrvx3FF9kHxcUg6GgedRjfWTKBdLeKSdXYPm7PfPTQVwBxsjiZxtF7AZDYd4"
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
