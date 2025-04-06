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
    "3Hd3Bu6UmmCV1NqPbyQX3qP3PvHtkSVo42XPNjug8RKS8bzsEquamhf3tNubX4LibrNYohBskmRuga5sEoBJkYB2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V6kBQ5jzb9K96eckFpGC4pK7YA2oFYzjhhV3cwJuoHoYnjvxFyk2xZJRBKGjeXYATUNWzu9157ogxPTNVQEt9De",
  "key1": "23MSGHzGCjg7fSNn5JkgzJXiAAfAKZ1ScpF5sjqgkhzPafBUMjyFA7ceVCU1VM6oKbvbpSW2VQUVnihqhup8yVdZ",
  "key2": "4XrS7KFP2swHn3RyQUs98z7563VPcUyP67zEgJjLPQDDmr65idh15SzD2JXYj4PxXYGvaiyGbgmg4KAsqYq6TzjT",
  "key3": "NhBcNsrDyzJKLBtJD7q6yobLZ7JfBcuBhkxTEyuuQsxqAgpzsha7HaN1xu99FK4kRHqFvwe9YFbdBCJ5n4tyfhe",
  "key4": "3RF4B8ZnViRAnARYuPUf7TnGXNiDoFPUPizMjEsNdsE5KKB1ECcBEoDN9NeYJtE9VG1C2z3hVmFuec7D9h9RVVBR",
  "key5": "39NXcCbU5eiS5Z6PoWaRzb3PL2QihiZFeUJr34Tbb6mh56PY9CLs1gLd7JSuUqcN4uCe91u7wCoybbVR8UEG6J86",
  "key6": "2Uidz9UR2nT56LV7HEpEcNFMv2DuQcZNictJo878mf7SHKHzonAfzzU1pQsDBr6m8UugoXAVC6caRJ283FUXk8KL",
  "key7": "35xSR7RGTXepFxkYeBrKbThwWeZqbMXJaCnU1nLxq4ov96f52qb5pkPUDetdmPnigCKx9CEkYyrxuuCwx2WgtcUK",
  "key8": "2pZxq4sXzPt89ytpdJwjgmSTb1Add2B3cQqqRzQAi7vQXkJCoyvUAzxL2npBTMvNEyrkd4yyHinJ4EVLrHht97c2",
  "key9": "BnjDPcGSFLmVRfUGm2vfVWebyd2xsqh9TSahUmpKptswr1kgWfV8YiPq1ymTSHGYBzkLGXDQQ3ShBELZ17VwpiB",
  "key10": "5wxCisqTQTB26Na3WZhMYL2cnCcd6xCnaTg3G53yfqZGCScnxmHzrFpnuEcXS1wCg9mTnSrw7Sh6picf2Qg4U4qU",
  "key11": "5wWjVpUXb6iXmwZckheJLwdg9HAcNZpXzvZRPUHtqTWC5yVeVMgR66i8j4v5Pw59cSejAxd83xZDxYgtG2w9aNgK",
  "key12": "XndofkyRxBdMpasLAqohDWAh4nSMvqAZHot33g4vaVEPYXRgghtuohMqNYgLyhP9XYzPHwfyUvPE6qUHJufc9sJ",
  "key13": "5fctTyo818AdedgPEsEq3hF25ErWhDfdR7k63T3EnxQS756VqudWjg83uHjSLmvBjYu9g6AQdqnoZjDaN8p693Dk",
  "key14": "34FfKogVMN4zvr1neUK18BGUMK67qz3TG8DxHJd5d4hmXUvXqHmNFqDwASCpdXTppnE2yYqeQH9aVUB9WGtmFDFn",
  "key15": "5SR4ak74MENasKDnfVZmLcNNrfhd3pPWr8uFfLkowVhWLJMnaPiJwzqpunSoJeFaim4Vzgye6iArYfNDHBiNQZJG",
  "key16": "nDKFHQGtBxP9MAHCuMkkRZtEe4eb9W5N9nysMzs17JSgVUGPDmyM8nHd1JLZ263BmP4kFzk3A3QkBR4iGF98Qnq",
  "key17": "5bxpMHc2vJUSGxkYa5tKgqykU2ppJnhTob65XbmUXvJEacbs7G67AN6fK7gfuqCBUoWWSh6sLjRyEpGexeUvaNm5",
  "key18": "455h13cT7s3o9kCSCZ9YZJiKDej4T6iX2k6EeQr7eL2VNQ1Btwqu1VNW8q7eX5Wi6NgPw1du6yteRU9h78FhUYDU",
  "key19": "3VPcGaRNfXxDQfgvN7TWHfpjsAyrtF6VY1YdTzKYw7FFBroBiJtXDQRtAwWUMELmL2xhW9bvaFviScAArPmy4Y3F",
  "key20": "3bTZC4k8VakGswLMVT7obKjUUEbC95ui6UV2gw6Wn7NbMR5F17ZMGLbFYHxKicaZrnfpTrHw7nBrKVUfaQaM2gMY",
  "key21": "4PvCy7dche3PfVPoWmfdeWmBMApKmoG7XDy5pWue73HJdis9xdVWn8TLRWUg2jrhkwAUsmvYdV3KZeH7U99fH7Cg",
  "key22": "343v91fTjvFHi8yAcvjN4fNSbgDTaU56qBgQCvX61B3oaWGT9FsnYTY3pVNQuxGUpGoxnVoWWU6ACGfc2fP4eyrY",
  "key23": "5UxpsDYbS9EQcf3zstpwtadQuaYfiTbWc7C4q4YUhMBPBJpQQ1YGkbRdQNh6Kcfq1CKE38bWC5SKkEsxhDkbwwA2",
  "key24": "662bXnVXKYYFVLjszUvroqXZqmNSkNHNuqKVefrH1RCFKuuWam2HFngzRxGnWYHQCVvzC7wEf3dXQL1ikqcKx2c7",
  "key25": "4zfsvBgVdAM9BvAFJWvftmMdH36R51xLZ2d1jXE6W3Tbppo6UV5odAHzTwUssBCAJCJtNP5Re7qS1nwZdArK9c8A",
  "key26": "3qEVuoehJUJgT6wWhsKFdowPmoNvUCm8Ppk64yp2VjSMT3tjJgcLSsUcXP27r1gGcKAqj8CjfUAGBJ3bBUWrdFXp",
  "key27": "3Bk4TEWus9uE886CSbdP1vwr18zXyJAxvwxnNBx3W9AG76GTE1gFHJcDznxXFi2ytEJGZN8azNh1SLckWKaG3T3X",
  "key28": "4CtTTMQLXWR1NBM6gtj51qqKSE13x4fhuJX2gezLwVRYXjjJvoBqeFzv4N2p6ZFeWtzE9S82SdDsYa2NvmmRR7gj",
  "key29": "4gpZhHWoBZtKWABKHxdw4Ftjyq2AKaduq6UJcz6JR4oMUxjPgUJGqx8onnegLc6gwrqZLEvSwRd9p85k2dVf5xcU",
  "key30": "9XDjTTrQRrSGD6F15j1hTEM4ax4ypHmww1Skkjhy86zwtTZM7jhsggiT7AY2myNPqrbvWADvUDz3Dnud6i99DVC",
  "key31": "3gpdtf2CfzNd9Djad1gC2UjQBJnrPK2MpH12ag3iY312cRbpfm3z16DfYTxUxD7Jjjc8jepXR3Q25phPmESUWeHj",
  "key32": "5TVzkkAfmVfu4tjmaDyLxBu6cFP4rRfXuu83ruKTWrjwMczQZaAbZ4WvXVf943pH2dTPQcJUg6Jdo7vBVLxfMTH3",
  "key33": "3yzv8BbEh94jGhKvtKrUvJvu3KmEhWUhLWKBSJpUq55FXR8tas5CLvQKDFKhaKykKgFfvTucYsbDiYTGXGNBxSyW",
  "key34": "4TDihJAmwJ21sbsmzUDfa8bWpGurt1SzpbryFgkMhUeDFoxSFTmCx7RhYkg8otaEsz7RV8HFrcU7CT7wP5gPXujv",
  "key35": "4S7FnxefbHWQbKS7hGnPjosspaP9HXWFjTLVboABvkrGq4x6hUMHAKmoihfDLLRWLN94N3dhR8JDBzLFku36D3XC",
  "key36": "4swASwDa2LsaREJTd7ogXdP3vR3P7Luv9ZS6xNrG3poo5ENgQwPhPvGjxCGbxf6sKmRgYMkmsF2SQaL74zuafTtd",
  "key37": "4MHFW57xE3PgWZNBvNDtCygSDczfd3mXSPY9mPKtxcNyB9Bwdj6nxa5keujUKhjzvxw6x2Hg6fxVDxiwy44H77f3",
  "key38": "2sRnQw9duSymU1CoktdoYSFAaLYdHjQ4MjiTbjiYSartVKMdtRezaSfLkrd3Q9vEAbWTe5nNfy8Fm853EoQP36vM",
  "key39": "i2CNQKygtvWA97CDcrFyayTtoxjtL3oE8cgSN3xWSmsKwtYKQYM2XhwtqtUpY8PKeAtB1kNaZVhaadZoNo4vV6e",
  "key40": "2nLsRiC7MnShcjFri8oXcT9UF4FWoLzBe2REneyXMcXVVTKzRUYs3qZ2j844j1ty4P8uPaQSzz1qfUxt2QKkb2BZ"
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
