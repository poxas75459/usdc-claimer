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
    "5d3Cdnw1Z62mu97i33oRS26pdaGJbDhvuDy97oX75DzYnTksfJvjUbR8HPZo22ZSkbmd8uGeZmqyCbT4Q9EcA5TD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dFVSW3dXfnKxP3SCUDuUPTNnb4v5atL79ULvZHor9Gyf7a9A76W5QWGNYwM4Ze96FPPBPChGbfv2ZwE1jWqf3Sc",
  "key1": "4Ha6LJ9eUFv76FU5akFBm5YJGymVMTqazpBeQyiM1s6i7Pug72uNjHgJRxio18EMEk2LHFkZghgJytmhoJkvUraf",
  "key2": "63Enhr7zCnCCf9qVyEsomLtdCaNFnrhEdxS9wUY9E6cgKriwbvcVhjv1yp1GdhWY9waaeaJ3A9rP1XgFYsge9T2L",
  "key3": "29pYiqqNVfVf9YZTfkoBPsHMvjEZMByodkhmzj5JpajyWG3fjUEx3Nt4kcP694pGauGdzBKdohfjMe3NRHNVPeht",
  "key4": "AZRUgttSAYhfiQkzG1iZ5CnKcdMuui1HmAyCconbdQAsGhDQddjjtR5XX3iFBGHWAqc6rGbanigafcGW8MZUwfr",
  "key5": "3GmXfyaKp9AP8FVqEJjRqkgCixS1Em5AM4jPFBWHtrDNg7FJ3KMtsYTC4dNbGLSceHh5tLns8Q7niFMuJjd5LUb4",
  "key6": "2xPSGhcrEW5YMXByjgwE9aummSUNGfJmmstEsfVoyWy7CmaDncUCEgWWGxC2BdQrtFKax8FuX6AJ6je6BM2BmFN7",
  "key7": "5gseMx3mMD7xCfbUAbL7odZfczkzDkrkywhu83vgfve8pD5PX9awz5Fc3seEiQaLyT8gFCuEramM8PCAiotHWhMD",
  "key8": "5qfjoKRVeK5xwGBYk5tQaGhV9EkUFDQXgmX5sZXaUXmXtCNGDHGPtQzuMmemM2zjbdFPCz9pPPYXKEMho7wXCNqE",
  "key9": "5y2K62jk9prQMRzrA4U4oN4eGuJEEcyPRyciAhTyJaVwF49W7EWv9kpvtRjHUK3J6RW1SYAaCU1kqNU25atnh7gS",
  "key10": "2VvjLFpN9Xoarv96B6Rq6mJFmkZZTPJBq7AGghPFrNbFUMb3rfDJXwsAWcgL6qbLuZZraaGumaFcsimiA8Styjtd",
  "key11": "3P92sRGHRrWeiaY8NNTQ1N32GXDBZ5rLZeZWQZuscvTyQ7YRouuT8pbCUGS4VC62U3yNEU8ujyoB3eAo7M95rk6j",
  "key12": "2wMyBXr9jcjs7hZaww5hCbxfxhgsvvHLjmxa3Ekta5KUrPtg8wcG1JUcXPyt9s7wR3fMVa3CNMaertu5ry9KTS9P",
  "key13": "uQ1ZNAvxTPzTWeXYnuMD83D6Rh3bPQTwZ4k3NqwXiwbRFMKT73wwYmtqCWkWzLzsQcQAnwKrm6PGxj13ZNfHNYk",
  "key14": "481E8bqrAsFUJ81bAAcpTeuPDy3za7uQdtp9qU5RGkdViAuTaLGDsjzC9qBrThrRq21yyPhymQhqqwfnz9py5vdZ",
  "key15": "3LjQiGTrcMoAqkihLHgj7H4ppzt4coGaEjqjWtfn8w8xJ6SCBCuYiFsd7DWAmt25kQqVqJ3W1zTpv7QJR6oD7UCz",
  "key16": "2CJnNgVVJ3vaLczJhJkC285E4wKM1t86aDwMabMHsVx691AJT9x9DeG5EYAkJhWKxXaj9sC8Cq4zQrKbDTuZwxas",
  "key17": "TfkvMjYf8UMEQQEvA9HQD8VoRNwNXcpAK1WpJ548VfHrxdH479ehLuVsUpW8PvgPsZTgQhR88DAiansG2fqSiEf",
  "key18": "4NdyAbCrwAHQANB3c37GrYv63Vd9GKzZVyk4mKzZF6YwRKXXBGDGeUbvhvfGDi9RKcLJqNFR5iaYqcaXVKX9QsAr",
  "key19": "4QjQnRFZJdLe7Vfvwmdb431pkj4gXphF7VcZL7N3pXgwbWY6N7GmrajLnZ6vXQZWHbsEFGe1pUyZh9tQxjQpfrfX",
  "key20": "5SmiJzhvCVEeCBmhMQtdV4iqmXtXB5uc6YEwEmnC7qkpNtGWt9XqWGSKfP2KChQBF9kPJkjrYurzspsqCDSfgyfJ",
  "key21": "FtAqjfDYFvF65qVLotBXUeCCLSPaeiLhqDWco7C7SfjpxmhgErr7AZdyyiqD3kj3deAXqmCvW7R5cTmZQ9pN3hS",
  "key22": "5e8y53QcAtJQzkJ71buc4BsSFXX3suAGBS6pFeGGiwhxyBn4sFbDwZoHPNsTvtDMgousuqjxfrN5SzMKxCak2hZB",
  "key23": "23iKZeThU3BqfWkW4WeEVWqExi1PmrgXEvXnjKujf57MH9mvJsQ42s2yoZkjYN6W9imq3w3Gx69ngGWx4HdQytZa",
  "key24": "2ESdchkiE8UKJzyeMKpxm6JmhTwyH1q9nZVTGwdWNXR3pxefcVrgeWYgC5tetnx59nQaCr2fByjNrByiBoVDUEh7",
  "key25": "4UGNwroHAFExWuYbzfWFnXMyvoVyXVVjz5TyDPNw7bGgdr8JckrxsQdipphHT7tp3sRbzR4MrDBKi43niNwCsQ4y",
  "key26": "2rcDoD1DSScsQUUZL48Z34uovpPsxfvtUaerc8wt2MtaqVhsxTcqwh3HFr8LSLWCRUWAKsqKbRhiauK4nakAa1c9",
  "key27": "3siE3GJwXpZVceHK67uC1RX56L2AZU3w5E8Pf7sFUY5t85oADdN6HcEmsrTJjCv3sZB4RuTVuXstd8ZeuG2inUme",
  "key28": "2baPjksZHgQt9wRGm3PZeLXxUWd9XoTrzekKU9xDKM9hRug2UqUJvMHuEvcphi2Rs8DMHvPeYFkDfpTRiqXDH1Tr",
  "key29": "3AQt3GYmSWdiKFe4oWx797yDxAqWV9ciG7FonBcjHk5Y8kBJLZr4h8zJ42wAYkXVHEuymd3diu4P5o54JbLftApw",
  "key30": "2iajayfC859SXYmu1uUdJpmg1113GetAKusPGY8R9qpUVAysLVT5TZoAn62pUf4yMofqQ2rcw2osPjfL5CFqDVKc",
  "key31": "5oo8Tf23UrNbFDTMCKe6G1K5PCDvf5yuxcE3r7xhct8zV9TpT93K6sakjwfrAiXyAmk4PZUHYm7tVn6FXBP92Fj",
  "key32": "Xv9jmtqVziL1yqrJg8d34MDhYjdeQwcQ3A4oBbtgK3VusFSrZozDuWdTP69rg9jqoYBiUumCRJYZb7iXB5Q3TM5",
  "key33": "5o6bdNB1LNmroXeksDWbLxGuKVcENhiU958wiLyJAuNxm7xYnEKTfikcCbneStSBeuLHp4SaFzr7CUtuxRonRCAH",
  "key34": "5PW6RxC7YEFW9VrdJDYfqrxEchN4pGs2EL8esT1u1CZ5kxQcP3jZzCrwEt1DpnuodPo5MPMrceg75XjHEJuS8uRk",
  "key35": "EZmojYd9E7Ad5nYuJKRz6nCsC3eHq1bLEYeXBpFNBswE6vkvRm495TVsju8xLjf7EWGoVhxM1cLHvdavvA4rGzZ",
  "key36": "2UybGVavvn1BhPgXsVLko9gGtYTKjwVBe98dJCJ5NCPK6Guv8J9eKgkFmanyR2gK1wyhRDWQgbyBnLQ68gggCGoY",
  "key37": "3MHmGgrGNCPD6JpkDmzg6ygcwUwCqgJWUjP2XL2Xoxz17LCAG5Tkwq9Q2MdhjLziUTbyBP4TYPWdeS6KH7FcyArS"
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
