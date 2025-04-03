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
    "622Zo4J2DKCKkjskqtGg8VDGZ6dCnpRWgL69f4jtddydDERHjpDynoynSnZMuaLgE17jqzNQpWH3RKt8MNS7AdfN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67jiTyvohuQbxuLDkSHMvG4MGz2DeuCsxS9EtKJpQxEmW9qdaDJrLic9zjEqojQFbvMPzaMq52quLRAMVWqjn5uW",
  "key1": "2f64PBemkTRs5qoBhHydNKU9yW8hXZuX8P3oDmaubBm14u3k6S5dAZfxZwVdb3J9hAaq7JSNEecqsq9ZjsQuAkF3",
  "key2": "63ZcaHWZmzNS4jhqigqaMJe6CWQmM4U2VE3syPCuwqYYXzbWeunWg87pB1gjdLqtpB43S2KdXRibsqF924c47XCx",
  "key3": "483DPg8hUzVRotcTVC6i9qec2PqhXBnbwfX4xtHtftHdYjHDhbapjnhGuxsrfYdHCGWj4DX9jTZHpUhbUikCARZd",
  "key4": "519VqcyBLXNz3NGeSeHD3L8q5hnDGRJF6hFhWQpYzvLn8tPGtdTQKXp5Z69evXV6nBLppXxExDtwZR3rBHN8947h",
  "key5": "m38Q8PJUtYmsbyXPYDRMjG4mwGXSbDasvJcotLjySQH6W8ft8RwTPbfxudJRYBuSmWXncTfWKJTSuZLGcrMZUm4",
  "key6": "2jx1UJ7SZYW53Y2QMvAQk8oTwzi1cjKidY1C3nuYfHYyaALm523FrjnAJqW55624L6bX6tsgtHaY3gLYqHhmagV7",
  "key7": "27KRTpM5chTD43QDYxmBZa7T5MqfZ2pS2dWoLsVTiEZMTZLM2GAMfZCEEim2sM1Jo2E651xJbTFcs3vuAv121YqP",
  "key8": "3A82CpN7qRU8aZ311nQSpzny8ZNhBrkWeezMVHwz4EGBjcua9qei769sz8nvUADFeDoe2taiow6QqCgvBTgfpDkr",
  "key9": "CGvKMuGTZwq9oDr5oP8wbmVUZBVN92HJiwrMkZGoQJac15AbZZckgwy8kaRiCpgU4LppNggCSjRgsUbXzArxhau",
  "key10": "2C7WRAnHuXTTJncKASPqggHvgVncT5u8nENHzg4GRXwEjc6z9c4cGtUe1C6yxhG3eSRvVbvRSrJbLpWVrwfYpq4x",
  "key11": "2DbxojnaDG6kpDgqRYkcbHxz3SEFC7Xjh8jBXZdANXRjAB1WUosEDSKvDDLs2Av4xeZAwwYukmKKCG7jvEkrB79n",
  "key12": "45dXXzhfbGAUzSenprR5e5QQoM746PKykAezFJCugtu4axFigU9WzGdRsqTRxTce2REjsaiSUvxQffXqzJBNJPzA",
  "key13": "rTHuUE75SxFPBeyQaFaAo8zERqkALP1RmSVKKnMde9MDTVJoNjKUtijC621LCFTz8tvsEqqcpZXRX6hD3wez1yk",
  "key14": "2RKLkLZci7kzm2Uyo9tSaxMZmTQc6DJhEWVnHcMXdPuQNDqs7eu98Xs3AGXeSN61uzVcxvSSbGdvtTje7jrHk2au",
  "key15": "3sywYMSC6DUy9TjJBX3jkwkUPDpcW2tKYMCKjAGvvWC3rNaEZy58SfP6VgokLcQuFS7mD1kVPScupbfXe5cPQaWJ",
  "key16": "a7U1ZTK4RGswyck5pa6Wd19fbHUbLwD7aevCcyNqfzeM6oqbsZfSSu3kEgKwjQosBi7QkwL4EkH8bptK3G4ZjCb",
  "key17": "38e1TqDRfza3nyY9AqAEQEWBsnLAfPaQSSDQ4UyVeZE78PFSnEpP1ncJ7PbpYSfEZhc2PqdHxsF33hduWihjJr7w",
  "key18": "489hKtDgWTrhnc3vJybUrdpRgwjsDFPDw3UF3i6bNj9JbFHYo56oN4ESpBaHuo3L9tecGuNzFWo9rqqMEbF4B3YC",
  "key19": "2qb6SL1ZparZ8Ax1cRj3gEyhtBciHrn1XqynZ4YiwKiJ2jFucjbRJhjuovDk2mbzovEzw9vjU684f6Yg3B92pkE7",
  "key20": "3CFNK5g5ZG6zgLabbMC3MN8QbePCWFNpQ3KtVr3qjSqpTPTmx3qaV4yp2SKrPZg3ePagroXLa9vHjsoJcEm9PEyZ",
  "key21": "3JavRRaUzuTQbnNG5cAoegQoyYTVgBLcPYVKotAew255BNKZkvBGZVppQrVoPEPshfDzJ2v5sq2cuT486g5TjXZN",
  "key22": "9Ctq12Y2MGBux9dQDtkojPXvg5rdaohskSs4y3iU8rETU18rZjkEnjaefV3HtVzpKBnsZJcd26AjLs4XVoF4hmP",
  "key23": "479NxPgDhSYwB8ysbz6KAygDSSXeNX1p9x4HzJ5t4NVdoMEL6SbrvNu9qU4rvMQaAmNjDwXVGFSWFbGshWgESVCP",
  "key24": "5CLkLZocdx7MTiZ6m4X6eLFQLNkeD9bZ1skMkvmwtpVTgFSVsdMHw5LZshTbXoton8a4LDZPKSDcsKcGaksqjrPm",
  "key25": "4mtcVwDazx9xSi8iiB2m17sK17A2x2U4T54rK6y28QwjE5qdEJEf42jPKhAbqUXbRSsxkPDkaWgfkNDu9icpXqeR",
  "key26": "5DXJs3VupavPZxfysR4SZmLnmqFHCADsXW8x8Rh4grkZS8m9W5yhyTj5tpc858o9hZLSVLCa6oofPwyr4G5isiSS",
  "key27": "5s3G4ZdhahhVfJgdBbZJ34AumrUv122AwKCUxra5Krd7ZGJWDiYNUkd8HVTX4GtWbHNeYLqtaLWrt3Lzpz1H6vF9",
  "key28": "2Bxu7MrGRfSpQ2mihFcQ6wgyqyquNzNVn3MdsGYEUj9H2raokxt4S1gw81gZ6nuy6o4i5tMXSGBBKhfS7zakMZGi",
  "key29": "3nFjTy6tFcXQrKGz61iy6iPUYwdZSGNe4zbi1TtfQKkyJKxiuJDjmYL5nQBSijeAzK7omuYNTntZvAwKM9F7xb7M",
  "key30": "GK5XCBNKSz15knZvKXMj9pwgQvdFAzPFb9gsWD77haXgWKRFJrK1CbXsP4Dq71iuAdqQt2raHs6KYBEvdq1ajuA",
  "key31": "5wMRPAZTTz791NUePek1h93UcSAbPV7KdmRo8kPnkZAAAz6jnBLZ3NeaQr31TU9Lovb5yKHoLQcJ9TZjx2Tp9J1y",
  "key32": "3eWwt81ereV9XT3jBefpAmyxLgYverj1HivzYnfDGfR2wwsWdSa349mBVuTETU8YgFp99mVkzPp4irthPKaTro7a",
  "key33": "MKVFkbPkh498pJL32m1PTMsztfxKj4HRCATHh23mKDSe7WNtUWCHLxKGJZjCh4VX5yy3GRFw7THwKFCzaF4wQYs",
  "key34": "265duBHnGbHLKnZgXxpfVpg6jCznhXT4xYusAtyJKZBzX7hGAZGTuWXFnXAfzbb4rv4h1MTq7GuudgX3fHttpB6g",
  "key35": "2ek3PDmjQiy2htRcXnZ58FrJLTXCeMHGXjvt4chQxYLPDLJ16519TWCakEx2D7TzLrc4MD2mFxfn4Y8shEwRN9zV",
  "key36": "3SKH6QZ4tee7CXp56tq69SDopJNENifAHSfCWbnjiLbUQwM2J29qoCAYV7kq23UL4cyJsYDH9LDBE1exYjb3oD7g",
  "key37": "636eZzTQsLuEmK8hvRrwFgPkLXGbpDfgQfVfw1iP9wsHvQQd6acpkaEmNEwPHU6AejrbVuT6ZV1Pk9afA4y7i4b6",
  "key38": "3kD6F2KjohYs261dMhPZY3VCFchAa6eMjPKwcHNJimaw82sGWgepASBHhXKebi8AG9B7C9YF3JLtyGZ8T6mp1fPR",
  "key39": "325rECAZFme4wAziFESdKJZM8BAF7e8iKcEjrExdr1C3UASWxqRqb8JjmZWZoH7zjcwSMfhujBpa9BbXE2JsHP8U",
  "key40": "2j6UumDdMnSo7Ri91nf8QkR2hcGkiTTCK3vJt4AXECEERjjihYYdssoBiBzNqTPz5JSyF7fU7qzXBtXedoGC65d2",
  "key41": "4VzzKBDqoQjY71F38YmpNZ5SggcY2nXCoJLztDaT7YtoeMHYeRXoFXVjMxTBdrGKjGYejgh3A3SNZ4nE4qbxkrts",
  "key42": "ec8YHDG1CWJqnewXUwWc6h8NfjzdhjYLTufyL5F7K3Q55GbodXjFVRkiGrFeYGWcaRJRtJDBiyPZMgaNf29L9an",
  "key43": "ZVxSSAELgcQeuMUz7obxiYg844yn76EyqSbWbZ7jp8sXDyXAkA99fV84xdmefUGJxNRQF98G2FUnJiWh8C7ccUu",
  "key44": "heo8xy6uHKpeftJcGKBjCBpsE2JEfLzECVyhjDyouRNMprHA7CiQphDKeMLDedYygKJ4ufuHQRCekqt1DqpQmvW",
  "key45": "2gqvaer6NnYKscYSVcjPCp27n3Lc1HSTvHHkN1uqtTntDssz9Dto6ogSqop7hWGY1rje9jhQfBfAbnkH1juDid9b",
  "key46": "iLAPtbA7pPyn51uq6ppahaMXC87UqGH1sa2H2Fg1muKDPZUwkFzRpQcnt6QwNm1EVBUbJbKrTZYXBg4P7K43ddJ"
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
