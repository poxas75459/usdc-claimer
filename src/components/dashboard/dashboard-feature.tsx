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
    "5KSLuTSoJxFMJroyJsX5D1URpj8CcnpFiqkYmSbCgd8N3WsoKj98VhBJdJknH2MBtzp22HkpWYyb2ADL4HMcpxMq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FKZvcZmQxxQjFawFTd5o2rv8YdVzf3FENiSyP19yP1i3C8YSTdmtRSkxSNNkLKzz6uqUS6RiSuWUBUHmFuqtGMg",
  "key1": "59iszKsz7pCCnfgjX1ccj86WFjQn7UBsrh9hCFiYRpohYWmcupDshsDXYzGT9cxLdYxfWdqhidLQDRP7VGJigZ2i",
  "key2": "3VDtG3RXwkacnmJkXfVprGYrnQYPvttz2Esv1jKz4z4dTDsUiedeqpMYFnboKaDrwmCd2T9iCgoW3kfuP3sHi4pj",
  "key3": "4nWS6U78VUfGPPLr26MXGYvTSsw3iR8WosMCyZ5zXEJKis9Y2P8dyYX9tjzhnpcEU4GKbAE4Fpx3YNZpURs1uiYv",
  "key4": "2SGx9UFKGFGRdXjhRUyJXYaudhKYs9E4bm1YDES2iXgmDQUKLkBjCNVAMJc8ftk85218xxFQ3SCnfwU4sCHuKajj",
  "key5": "3KGQFeeNVq3xDc9Tjuwc1g1WZhJrhveeHBhFMRtX345P6Zrz29mpEs6LPBJs2tV59jxPivwUhvwD5qzJW2GSrjX7",
  "key6": "5nN8ysdPAfGt44RWpyhdMjg65VxD4PFrMJBTkd1HpoNYfnLnRxsWesC8xmo5zjDVB1YJEEKysWBnQsj7Ja8o76pv",
  "key7": "bzhuQ2jBmyjreTB3AwiEb289tUwXVeM4kALqMsEb2esjyrwHW2MeHK5HvKSJyMPNBDYgSL2Arj6dts8Si6qVNhR",
  "key8": "2H8VaPvMFynUtWTwR56dLryrkhDUtFYoA4pdYQa5dF6aNgmr6DWocxTtKRccVFYTySUc6jRg13GoECDg49Sazzy3",
  "key9": "4q6ur1JR2ZBdd6Pg4DiDnbZbZ4ufuvJXwtK7UgtX8znsccXmG8BTx2Ca7AYHwaQsyLqqcvhRXGEgTEwvAEJsj3s7",
  "key10": "4Fye5k3QB2cCUw6SngoEb42ga5gCqUkvvYuSC6Qxz83aePDLojbv6T2ijJ4Dj4YujaXeBZeZ6zCEAx65prmYxRn4",
  "key11": "3bzBJwGgTmyRRYtkuZ6mSEPP4aciHmES8w7om69rMK8V7QiNAxzYrGnKxxAvSaDEz2u7VZxm8DUoY3kV3FK3tBqC",
  "key12": "443wHkxYqcy4VF7CS7boZBJTK4yqJs4rmTbA7EHgexXWsDoAWJbiSeABoAyiWqxpca6RXRELSgSeGvZ7QM2c7yN3",
  "key13": "3Y7TuH6CjPyJUpmfvdQfhwbTwtmpuXBMSTg1nUYeoPXZRZcqfJ97RHD3RaSiKNjGCrLeLbtrdy4p5FpXUyPkHUf7",
  "key14": "4uPp5YNcpr4qku75DnVh9GQJnYPhGLuP4wfTPKQADTmUSpQ55LBDMDoiTsYzPASNzPd1eVMYETYYxCf8udkRWdhF",
  "key15": "pGdr6BaqzLr7E4Fu2hgcutDMpK9mABg6VuuEU9uu1tzC7Ajq45QsCgGxCFUzJVT8QPsehJ6qnK4JFK5Bk5qWaS4",
  "key16": "3btko4yd3Z3DoPZScuWosdwEgQpSvA6sePhgJAfZrUVaRMLS5qZNn4Q5wHMu2uJwshJKzUsbRNFySkMv8SFqRv2Q",
  "key17": "3LHaBLiMWsReZ6W5oJQbnoF2xXJbGauhPUSL1Sy7r9hFBqgho3a1UuwuoLG8EcekrqVKQXiuckMT8YzExChMkufK",
  "key18": "5AJri75u6gzSn1uLqa3CCnE8BaAj41PpYzrTXncph6uk1Wo4fLxZdFowjWFrzjUUwfQNSi7yxXHUiSrntzXaX8Z8",
  "key19": "27dVDuV7pcD89KoCo41PiPV9fcxmg9aNvHJRC11ycnFuVhKsSHHPeyzvzNNFkcJDZGvTMMLupt8CW4VqNR2udsaP",
  "key20": "5q5BxyrSunLMhVEHFJCzV3FKuKQz9kjyxLzipXoqPWcHTMUbjEPKY3pMSnZHQCcZ4ybR7c2q5TFbM7b44gFKhh9L",
  "key21": "6V8QPraxwdsWKhLSdMxbkr27n2C4t8gNqcHDCp31XUYRi1doBjiE2bsJBFpCm2ynKUvayvBVzL6T5zTgR9aVQie",
  "key22": "3M5eqeFyoPfaGg4hbBMxa3Ez7RjRPZpR3gDL7jE8KSWY34KrCqyVttaR6ci8T1PSnJahbYfTASWky8qqynWEgU5s",
  "key23": "4w2YmHF4XvbvfF9oNPyDRdUPePzQdxGZUoa5eyjR7fC8Azn3iAHFnJFfMdM2riGME7NtUFRUSc9fS53vP4LiChMb",
  "key24": "4hBvztHFJTRrBTHR6quAoNGme71yC3BXHVp6xkm77Jgwc1aCpzra4JDqPixiA3JvSrmtdD5Zz51VZpL9qcEkNV9F",
  "key25": "xSPSem7WTi2SPK3Pjkw9pagPegedtDQyXcjwXGafZGVt2WUqVEEoVhTDBetAU9U7XUEiUPmYrN2FuFrBNmF6axn",
  "key26": "3nz1AF1tyAo7tX2qZfp9C5CVURDwhs3Y9HucYoPurvZNrduz6AQpqqjijfE4Ym5PHFnb6DB2cLYN5BSQGVV2YFyB",
  "key27": "2h9sQvft3xRZMPmRmB93bkfjwzbG8dh6Tk12RBBSyonS39enECB5gsaT18nx3RvVZ2sgTNmXcyFdFqNV6BNz3GVe",
  "key28": "31wUJzLMJQrBuDBZ8kTc8PSGDPu1K3sDtuojHP5i83vt9RBcX1uVcBxXPfuU4c6CKkhSUU4QKDdT3kdesbA6Zdc9",
  "key29": "315v4RtxY7BmZPawVvsC7kMyDpJDXQ8fLay2zjcsKFZvj55oB1Ls7HnAxhpWQMaLsR9khVUDVsvZvTfNA9yTKnEC",
  "key30": "2Yb3Usp4iGhGkpbbQ4KgskoFgVo2FExtFjbZdyakpDv1DUYZ89mtwSeZvBdNAREDxPfp4BJKzrxTzNBuEFaxUhBe",
  "key31": "5KtaseWPqdfhEoZbyezQRni9XHsCxPh8xxPNUHz1Rw25hNDcuHrAFiuXoZ1w82V6YdHBpPphrcpaamRbnaUfKbmB",
  "key32": "5hHpzAttnzZx7NUDr1vigvotCXeuYwFjKJ16wZqBccS4ErsbFA7fYvfQzmHyL6gekxvanwBUciVarmuK6MdHP7Hx",
  "key33": "5ouh9HooqhRyxpWoxAnYMVy8y1NoYqyLgkKJ6WBbZQzNb4CppP9BRhmTiuKmL1gXqRNWwmncpBatECU8t3kHK7M9",
  "key34": "6QJS94SFkJATrZ5QcpGfdKM7fA346WQ4zPb2MZuU4WKAvyKaVAg3MLvN5V2UJobUhLVLNu5KreqrpC3ux4ZsKmt",
  "key35": "JDg7BD4VCTpwSmYVr4qYEqFrXtS5Ahc7aigyTBBwY9apArPsrNPaoAE7QBMzZMnTTzAg7TsM5L3tN1V7JiDtgjY",
  "key36": "z3Hunpe8AgLNA5wcuBSzDmMS41vzBydUJoTUKm66EV1KQUQFZU7x4LERQwX7aMzaGzQEyKcAp6nnhdaa3iBgncW",
  "key37": "5137uiRxwazBSKkPaQFUEkgg7P7vWp5bKSm4wQ2ehPfoiEvXhQQKwTWBn38oQBcVCQnabyu9aAUx3JTy2KPjzps4",
  "key38": "3qbeDwibxdZ24ivdxiR34qfxthQxRMazVa4wiJsokLu83GVoew25o4cTjs6YBmeH1pY11Rv1eBzKny3Wv84aZH3Y",
  "key39": "2JdMwW1k9cXAVAkApeZDXchGFyQRrbBExSW2MoeHaCCZP9Z7R5ofeakF7zJvChhhT3SUSQYZAHg8KpahV9UsqUcS",
  "key40": "3VREFmfqH5RUppZEJzyEVHRx5xPow82oFceA4FGBex2Bztv5i8ArtfytDRYpsyp8LWJMfYsYUn6eNGTym7Zk7nkz",
  "key41": "5PFi48T47Nx7pFRydyp67X7oy6aMBJ5LBTtfQWEEfXbmLuAEiV2Geh7Fnk1EuU3rajR7R1erv1ejsFfZEyHf2QND",
  "key42": "5DkySE3BzLD6QpcVPLBMhrShFso8dzX1E8E3oiqLNeRQ2KzFpNcAGkR264ubXqg5LE3Cpx7jaGsxmvtm9xmp1etF",
  "key43": "q1pmwTXtxt8rXiW7RVZiMGk9dKMbsArj449jc8h3cSgVfjLPabpq6dKwNmDkd7tZofNExMJKxzBGoGX2iQfAL4K",
  "key44": "4aZVxPRUuZdK6dqHzCNuuSHxDoqxW93hcr3h4PH9ei7uoZ1cXcFeYLPEVyBjokrno1aJ1Ku32SbxmwG6Qz97nyXV",
  "key45": "4ecei4xMwM5kVx1gCbVgBFfwnqEQ1ZEy1rbZorfUjLEtYn4A1qP8qai8WbChkKYbMAgssSbmVhaSxXynkUMAAQoa",
  "key46": "2P5JYEhD9qpm47oCPFrTujrKVobuUjHG6mp8r5DMv6t37VmC2sekwEENU9B9LBv7B8nYznUBmRStzKkwVZqKyKX2"
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
