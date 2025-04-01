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
    "34ttai4zWpgJJK79iihWp5XGKvqDQ7KXvAiHrQfzQgan8FMLT5rKU8eAXD7BVLY1vd4YhfsveY6k76rjk2FpSguT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cZ4G8nF637KnkeZ73BtMo2Xfd3yNah6orv38nMvQFAddTQgFCkv62CmEJZKWBgcWoheKYKrpq4Jby3RxKUW3DEG",
  "key1": "U7SmanjdfrUrpMFAM889anE1akHavQz9s2Um7PkUFwG3KbcAG9fsnihNUh332RxarjeVPL8YXfNWKQpzQeGsHjh",
  "key2": "4rd8jTjJxSN57pV5tMa5op4opiADXoJ87f1Ukj5oWeheosMiy1csE26mSUgquKK3pydjBuy7c3J7VyZcgJaS1TYg",
  "key3": "4mdQpED2gZgskTRuXY9FSx74D5Mx2bEYQEdFcraHXoBFKCqSRAcPRfBektGMYB3vqNBsGWdWJCRUuEk4hPV1DoaY",
  "key4": "2iNTzk6Kg5agDPyWTWgbw5F8d3Uo7EAMBFaZiZzmbQxCMqc7UG9iKWWiESyQ92GGz83ELx92PvSeR1GGMEtug442",
  "key5": "2mu4yUHCEgytKR5xP7cK8gtrPzUusTBj7EegGsQ2znAQm6R9BYpKKG9HGqC6bGqbjVcBQZrRnbyqjGSZtBVz2Dt5",
  "key6": "2HDmDSo9uEiiuZ3221mtWrhjhdYF6RxrBrxcG8SWYd2C5UA9B1QiV3ufhmdGd6LSZL5A9yrcWbS4F92ygSaoqJMt",
  "key7": "4TM2z8W4NnBfDjNxzZML2meherzBATdnbCh6ZK81GKE7S7kpLPNYtKRYsKfUB4w2SZ3VnbUVKBBcWYXXRFG2F9GG",
  "key8": "SGjyvbRcjXu254tbmMsrdwLixeKoXe5WTQsMVH9DUzdeXmFXGqVM1kdQiDPDgeM9Jasgi1ZG3QM5fFA4Lri9VKf",
  "key9": "27bxhsGr1TFkQKXxLDKqXj4eikxjCP8RxUJ4f2hKpPsj9ZKnM3SH7rSdZQWUNep5RhCeBtio9DxUAPG17QZ9eVTn",
  "key10": "5o59ZpeAB2XjC2QLGs2mBEGU4xhp85i2UscABJPkJYS4HeB9r62jvLSXtk7ZDrV6UxMvNjxbFx3ypuWEhZFS3WMs",
  "key11": "376XCS97wS358uaTxbL7HGuLrtggf6SNA86ZjcdsYfskczNNsUjuvuD9mpEvvynCzD4G1G5zXavtQfkivdjEsMrZ",
  "key12": "2bmYqx8EdkJn6jR4s1EAYdFwbiuZYUcCJK5ZcHNauvGJVRvxYJpfBz7bTXeo9g2MXu632ki96o1Wri1tvRNaQKDo",
  "key13": "2P1Hw9GwuoKJ8NPLaxgD6X7oL9hbTiBk2TZAtKuwxkDbitp7PoADqKLaX118p4Zs16mE15ZGgXGusrGL2naKt9a2",
  "key14": "4oUHDy74CZj8i8CxMzKggp8uK7UCdWPzL3G6MHqvP9ymLyNvFaditRhLtQWDt4gNgwbXv19zFpaTmKN7xsa3gKyd",
  "key15": "5gJ271smRzB6ciYh3MhaSfBnqQKDCEHjX1juzFusQRyEk4yoHiue6Q8p4groJjE5pypHHoxocSRKDJs4FF5LP98J",
  "key16": "4ynDuAxuA76zboDYyab4bCxJbd5y6fRvjeP3ZXFynSTD79HPVR4in2NYTuFstpzop36jBDLNuGzy3AVgRw54Jn4i",
  "key17": "E2EMZR9mwJtEY4ffdkFouBNSXdKwn2LUEit4GvenU2Vv5FrWuLNe2qkTbz6kR3MuA3cw8dyQmGitGksBGZBwaND",
  "key18": "bfNZwwqfPSw2P5LZsHuvq3WWkpeLNeJmYVocU5GSgozuxm44wDtcoqSFYHURwbsgFTumnZPphFYQS9hbriwrgjF",
  "key19": "t4eMJTWxcRDpVT6JB4mvFBaEBZrT4Boq8wBnyQ6DiPE23imcJRAH8H5kcWFNTwRukuFpbbTAproRwKQj9LQ3XtY",
  "key20": "4komvrbBXitbNLdCajqDKfGQTwL6u9aFBhvKfLzNPSneB5iCbxXwnrMzVCB25MzENe3twh1btFitSNgzapgqCy2z",
  "key21": "53E5pNzxFmrFxEJZRJP1nfAMgqocaZPGJExYujvM22AqegJrkAwnjnMeaiPWWJDovf1wDWp2GipL8osLFvdrYLnL",
  "key22": "4EEYfWScjoC3oX48QkiiQZpeFPv7gNJQKGP6UANWTuk9ZXCgSCViJaLVoSU8KtFh8yp2R13DqyX2N16eJhmUPYRg",
  "key23": "5o8egHe6JfzN5ZEhYmuUDD8PAQ1xAuhkvYaTfgaK3LxkxDTECNFwLUhetv6Dspr4wVY3Ssvmd2VTQRqWru9ZmBZE",
  "key24": "2hMytQCD2qsfgnHbz8JW8WeByFLCvUmMGPpYCmvtCZBePmayoeT7zSDm1yXjEJu9Y378wCPYKh8trqbpYDuSwRHK",
  "key25": "4oyfSfHYBwb33WJpVJxAwGHnuymTr2q6RtnSRzfLZ9sfdaGrGYZ3v6cQAVioGExzYiG5d3k9fvpKxmyyF99bBc9a",
  "key26": "4FoAiibDFu42Y5GUsRfa85mWNVbjT1axvG14niK3DT6DxqWCSr9fzefMpA29wWkNwNRrXP57Ga4MaUA4su2zmoKz",
  "key27": "qmiB5aJTuQpVZVkgz2rgWBwoq9Ck4ziecZay6nxsLkgicRqSvQ6Ys1RqbC2itp8s9UhXLpa7CPK6ii14tr7GPY8",
  "key28": "5bB21SGyULr6tkPfWUBAu9WGH6ymLAtPNwctURcSCTYKR4Kea6q3zvXZ8JKYz8gRqaDxCixPTqRtmnEieh7UHvMm",
  "key29": "vrQcMXqAhjTe1r3uUPwM8fT56aTza7XCg2BATdhhWJijzHixQG33gBSupjgyXWtYf7jzrBdajh7jwyn2BYEbpXh",
  "key30": "2x5E5xMrmSbVJnLVam93aHHseBNbHnusbHVcQ1hCbritHLKF8DM99v9FfX7NNWuMEUjuuL1BgJtfrnpp3YchLc7f",
  "key31": "35DatrnFTJuQSRhtB9q4ZL9PQmYnVL7XmY866gQnMLsEhE5i4BoXE74jjZJjpzNSDav6kKimgoPEHZ3bx2vpSPNt",
  "key32": "3qvzGVMSarfNwzGBwztxGs9V9MsVzyMd2daJtx1HCYKipGAbm3wrYJfCSbWd8BYEeaThBtzzZPRPuvBHjAVXvXbe",
  "key33": "ibS8MJFqSzrY2jQxKqGFPwpMWoyFkVYTZMep3EFJkcxfayQmVkLRnjCVG3tvjCDHgMAmpJm3HEb3UP3ef21hfcC",
  "key34": "H7hUMt2V3vxVxeGSDwfvtworioNuwYfkWsPgANBLJB3sCyewk1Sw8H85AeptHv5wyTqu85HY2gsN4nZri5pKA2u",
  "key35": "2p7ucXgeU4dewo7mjxxRLN7o2axSDXPofggJjkn8KZ6h9A5ZweDtYoHteCDWakBQsFoMGEZTnomRFSnJDBiNVUBh",
  "key36": "5Sa5fGAH8cDRLE6msCcxhvvVPKnHQmHeHzch6hvZq2XQftrhZWThxhkFY7vvbrRk9K3gwpBMuiQv6N5meDY33ELy",
  "key37": "4G2NEsnYt4xNnCbZQrGfG8TGNExUq7tQYZkA1wmWTUtH5vAPLxAPnJovYbFVQReG8otycHKfhzXJof3a1nYBqtiq",
  "key38": "33vwqLzhpdfy4oDWzdhSKgYGgbxtC2QQHo8ap6wg2RYKNCQU8mKddYN3CuwTnwekeRzhpCVro58aZq9xAXJAfu6c",
  "key39": "P238vW9W8q7YakABwX2Q4wiSEYvcBCM2Fv68k4QzQ1fLaf9BJLMKdeVTSWYd6SFkapodEkgb6YhthFAjb8ungos",
  "key40": "5sV6GCivBkq8LT7XcV4DJUnCxP3AiX8JCCgP3qdcKvAwFPRB7xoZXDUyNo4P5YbCoHAR3Bw4fjbjuncjnZsvwjSi",
  "key41": "26AZHm7L3vrCo4goFdYh4fvGRgiQ7ui2bo4i5hMq6UVMvDbc8HS63tMGysv87vXLMkg9X36bZqMHHBvRuz2gic4T",
  "key42": "4LW8fE1LrJv8vsY6fRXuR1icPZm4byNnmxCZoDVMbNzoLT5H1tp4GzBpp2doCQqY2jE61z496WxaeQ8TVE7Jkrm1",
  "key43": "AixrzBgKWvcm9DsPkKZ1XjCueGdDghps3prhgudutobeGFfXnJU4MJ6fXwQcsDfZXAnyLBJcC2skGrBtvK15UZq",
  "key44": "Pxo86Lq3RzY6xzYetGgeJ4bVTvBLYdyoue7V5Eg2QtUVRCKTHdDvjNDbNTPzjxmoqmP6hZrCWY821dgCJFwMb3Y",
  "key45": "i3fFfaiKbWNeMuiiijhfbbtcwJ7H7ccLWzW99tNKZcrYXWNvca51hPpiHvdPMzsjetpGDM8aenZbTUoEC4Z2fr9"
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
