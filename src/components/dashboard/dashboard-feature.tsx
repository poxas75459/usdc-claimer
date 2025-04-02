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
    "2ACFXUiEFL6GKCRtbrCptNX1X9tgfrVPBdtVCEkw9xvWDuAYaR6HgeDQcZDkF7HiA9o3ZEUFBMdCsBxzBnmgoCWv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qeEobGrWZ88bBAjsZaT2hmf6PBuSdeZSNqc3c3zuz5rTU7xk7KWahxRefACkZUkgnFaU983EoiYv6xBVnNgTEbN",
  "key1": "5Zooy85KL9H2MdAhoEBeb3bGudSuePQKUAAPV4ipv27U1z8gN8tvJC3eGm5usRoayUwVd82EFUz8CDZfDiVudGkL",
  "key2": "3cD8md7sQzyyvqRDUd37LFj81PHmqXQsxkR875Sq9De4d9mMQRKHEAx9iDLjr4N8kPyfcw4CPf45xofc3CCvhMF7",
  "key3": "3b8pLS8wtErMve89mHWwYacAf9wbf9ZBwgnMtFPumyvySB46fwLvsgRQCXVhxd2FxA7XsnKg7G57L7D8Nc9nEHus",
  "key4": "4oJHfSJHHxZZmjvF69AnpavV42TwQzE99Q4SMuCVLnhhgmjrd7Bz4D5q3ufuDBG6uEkSEfpnAzgoDGgFyxKpSJYf",
  "key5": "4gLRBgi9bW6BHkXMzguL6aQkLYCRT1GaUiWEJ6vdFsBdvYs9JcHk43R1SpnpxLo1XpN6DseAr5N1homBosJup972",
  "key6": "2brxN8Ndw67zjCg5YeA3myMpfEuz3qv75LpBgoM5Zxm1SWSzVoWRipTGhPnTSQZYvfUJXA5UHmWQgAbuSGfNkbEf",
  "key7": "2KzBtcnbZZSshbhAPgaabwKTfU7UuakgFgf3ZK81LG5mMrmVvodcvfnvPbBS4oSxBygz1cd8pEXwgnVVU93zMjeX",
  "key8": "4V1RfBpVeJKSjzFe51QxdaVFLjmdkfNM1uWWLhzCVYfxyWjosnXHsa2BHZuztyqXsNsqg3LjiSxLRiAKMvG1nFqK",
  "key9": "51j9sUdYg2tHzzUMkS8fVR6TFB7dsjFr3sZtsqKtUrcgkTvkDB3XfTw3oSmsSNCTPsjumuw61qfBx36MJdAhoW9A",
  "key10": "2oVTgQCkrN7BCze6xZnYdY8Dx5S7DWcN6gX7FAtMpGcYsMQkUtAsscwRisFB4aTWStzf1tbxaE56Mzkvkpe1C1Jh",
  "key11": "65kVFs5tV6YE3igEqxiejSRQwKsik5GLXQ6YZuJrrgCuzaJQFEZDcafBosBH2BLEdGEwWLqpyGYNqdmptSe8tgzB",
  "key12": "3ZCJ7FnmCAFjqqUsAcA4ehaBqHtpUNq8ePPagzmdt2j5jag7QseTJ1B3DrduxQDRHPFdkxQhBzgszzcABBxr5Wmy",
  "key13": "3aBuC8heoQcbZdytengvXNuPdkkhDFpaXfKGXUoFt8T8T6mM2qZt153oCMtea6iWHWZ4xfX8pcjFytFczqKp2kDD",
  "key14": "3bYexHtttrrTwKMWsnvV6GfTpQF5A2vcUPc5vS7DTSLk3zrquz7Hn8SyhpuxTKjRUzXFPhHpTPnr16C1oqLNYZbw",
  "key15": "4oWHDopXgZVmdHhXKnmE61v68eQyB97dSb8Tdi1fcFeAMYQ3CaEtHz377c8DfC6VupkH5fNNe37iJXDgsSCAZtKa",
  "key16": "4pUZhYkqzAmUPpkwWN17H7jDuiJCgdibKSo43iCya6d7tKagCUieAYSw2Ld9H1xQxJMUFmdvrM1U5Tpaf283DXFk",
  "key17": "gdgfAJz66PEKHjiskJhzuuaNS7Vj4GSozDoruAT8pb1ddHWsNZZuucgngm6CtfpDdgcX3RTpqHT5RAzosRSmWis",
  "key18": "2ugwTRTdKFsQKoYSS9ARuWrWGZSvuKJpHag9KPYzWFsKXRZoqPezpACMG334ZqbfCYDPFFUaLEvVSTMpaSyYDhYK",
  "key19": "3bayJamyhCWfcb41kRLykbxPep9NMM5BFUvJnpBvSGZ44TZgUqikwqA12nzJPpeQpFvNmKFKBL85gLS3AUJ62LDY",
  "key20": "2UkFp1KFZhuZ8dQLzBhJey2hNKMiAtKkSQmV5phbz9EFKoTztHJSmF51A4xJtwPqBXNRRsXkaViRLGpd4Zjx8FQD",
  "key21": "4EuFg5mQMG8cq6mPJnzQaVdeeDuWRgtyAJtr1RBUbvrRa1SVyqYEES7ME9EUD6hexf4M7T3GAZmkX6gHdmminYx5",
  "key22": "2SiLicfoVdUr975APpu2WEqkNMiFArkrFKPWyhaNfm4Si7c6Fqe4g1Q6x1tt588HJ3HWPJn2W5DA7GEw8wusZwkK",
  "key23": "4cXUxzgDVAjYCbeyxSQ8ZTy3yH8rx75b3qRT9nKNBq2Bz6VMnD18hNLtJFQZzqxizXeFhU7RXXiJwVWvKmGuKDdH",
  "key24": "48rHDiaMit4quMkKKvBoCU8YGuHavw2hQCQcjKxs7fULmHDQnKpXTsHkr4MENVU8XG9FXqx1Gr5kzWFUrFwdRPZq",
  "key25": "5o43htvDmWa5Ys2awzuvLFGm9qR47aty44A4AkEnnaR8LKZaUrDw3SNb1trmyvaUYjqbgQhHkRwvYD3zrVb9PKG2",
  "key26": "5VgvZMQensFPjuQgsUMJRuKRrhgGkj5MJUWgq45dKxhQR1AE3z8SCxYazXcNgQS3PXQ3pWmKfAXNepNWKijEF5N9",
  "key27": "3bErsinUrpsfjoyNWR7ysGjW9Jk4u5uUPERVXxuQSLUjd5ihvFGrn1hEeBG9VvTNtV3mrUPhCEiTaYqXue3fDeNp",
  "key28": "5n9qYKjWYDAbhzsNLCciFarfWjvDjWXVuni4jE8MpZeLMjYxQb5VikHFDfX8HuLAXf1DdktCDFTQjsALKhhUYxnx",
  "key29": "5oUFZPqbdFDJ2kfSd8ipsfuLRavFe75nMatdUs1bRRMMa6JVCYGK1Y14iWNadTM7PtuQ98McPM6UFCq835Br2E5Z",
  "key30": "2fiv4MuGFNePzRmiaeh1AuK4PFtSsUJDUmnSp6mpuWwMKnaKzMJnYpiZciMqhzsJgPoZXrH7pEBU1KbNfNYZ7ivJ",
  "key31": "2ZjWwf2jWZgYKkp9Rkrza5KSMRcNrvDH1r4UwBSRDZVRuxKC2NWCJ45gZ5V1EB1Nxp2oSCERqErkRfPpkWpJPto6",
  "key32": "wRmhfPZHnpsD6VnNmbcMA5koMwSi88bsZmWW2cJVnG4sfwAzhbTSjRQWTvY3niAa6p3C7mrjiom3CU1ZDJUyXU8",
  "key33": "3hqzinDC4s4EjjrfcgfuYTyciYoW6QESSZqJJDGBCJGFoJbMz6MFyYQK6SYU1bzZ8iLsDhPcqSHvsoJSXA3kBvZy"
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
