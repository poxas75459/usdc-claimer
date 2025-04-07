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
    "4YwMtSYLQqn1q1E1MrAaYUunX4R2StuqrA4N9uwSvzLNTKcBv51Fsqurgr8npuBTAM7cHbtVFNPDiryGzFVUrUy4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Em7ux2EVHwqtwtEXtdQbqp9tFZsxLBgFRJ46ytf6BWFszLdBABi3aTCic6rACTuk32vUEaztALDgfrqZVeKyDYM",
  "key1": "4xSaoV7Zg2AqhdSSmpG4bYqASCvLA8VGqidZy9ge9VTVN8P2mnK9vn7Ki2B6upGdtVMrLmrMbBMQod7YvLR4X1rz",
  "key2": "31vJT7C2sMo5nWgYoVndMy37GCAQvqhrJaJSinmzTNWqJm2QU7aeEWzVkxJbcmgXNXD3CTPNnBXco9mfTNgqzWVB",
  "key3": "GjJBAQeBJc87wDtBzxsKUuFWyt9joamAFzLbMHyDpY2XpQWLm2HSiG7c2id7PjCHo6m2SF8F6etJbPEfZCwdmqE",
  "key4": "25kRMGY6xs9swPkRKbSVtKYK9Hr1rUb6KSK9fTSDfR4yPuvKKJmnUz8zL7Ny4beHamHQ5yPoasPqCLtAGL4nN96e",
  "key5": "3xGx6u3E9aeLoZWegQg5Ke4QZskoySvPyt6KASSPVh8zK413yXbLi2W5EFqUK2f5wJQiP2mr2CPRyKoxWN4wtAd6",
  "key6": "3tRvbQ2u6PiadVhdCMCSsKd6c2D4e9wFBDb9x5zsh6FyCwPE9Na6ZNSA7JywSxW78n2TSguRQDzxSzdbKnrnsUHW",
  "key7": "3v2t1k1Jz6S6u656P17rPrCMqWvywiWD2cLViZYiuTY6xKGi4VEs47XoenLTpnDnjdTqqzrTFcJsWA8pJqcDgxP1",
  "key8": "5LYErn1cAYP4Ri57QPJdUFt4rdHuXCZub28P93xq4t7S9wt2rwyJPLYZdNWpJWCtH5qxbQnhhWtu1dtMbeZtNGje",
  "key9": "5ZzgmH2pUTx35ciSTbS6txtBRhZQkaE3Jr9CkwDwpGUtPhQyXvzLb4PA3J1MiWUbFqDgTy5BPF1rFe7qRQwDBsmM",
  "key10": "4HKF1TbeWNUA9yzt58WGVcNEhxedVpBr2F3kDYVAx2Q7WB6C5cAbXUdrEjL8c7zdFqDw6uLzDVcGRRYKai269AGb",
  "key11": "3WM4nmQ4kQet1rip55rLFJeM1V1VhoWEwo8ewe7oyqgCXCGkisK5Br6TAFe8dMahEFGcmXiq5utNaaD8WbKCTx3T",
  "key12": "4DDhVJF2yjiDt7fDRkqb4YM3kvjFypCS32884Bbzfo7wRMQZkAhKZzmceawsSSogmmsVebCUYPYGmZr9HsYD3UFk",
  "key13": "5svjsYqJ1Dt5pVzG8LnHfnMHcz7EPZccPjnDbcSMtwJrdbr3kgcizKanzNx1pkX635NTKjgciKrJjWtyztejxPGs",
  "key14": "2nwKzdXUNMsLgrbQDGcmHmTsJ8JSsWrRmHo5UoYfQY2JDReZgdzKzSpU8Gu2rQPtwfnyquHfHmmSEm6gEdvBHJvs",
  "key15": "4fbxmNgDtacGXSg9xmUGGsSWmPMtrqKhvzBLyZvUp7dsNPMFtPPGM1h9qDaqiBTKA7Pns2s3nB45wgqyqppuao1o",
  "key16": "4dPBEo54LjPthMJ9s7RyKJhSq3HnbZPMiGbCnG9EcnjsQaw7PEr9vV6UMHzyjpR6UVY4mXwcT3TKKJ1NDEjQypKB",
  "key17": "5ZVTKLzEm5yiUB5SBG53ksjcCfpJw1Ew3evtYmRWpzgX8LiPrqta5gy6wgJ74pES8iwiDzTMTbsVagdqXh1S8EmB",
  "key18": "3PVeg62oX2GoZgBm7PD6Q86Bt4bnz9qrHkywjadx1XpDe5eG8jq3SC1KcJMeWf8MGNZFi6Fb291d6hbZy8b1SjgY",
  "key19": "5YGZMybABqBKJ5Vn9cf3hEJy5CAtUcZMerC3rRGBKgSC18aq2Sd2BCU4c61x5jMu1Jz3vywL2NrVZaYSf5FidzWB",
  "key20": "NYSmUqbZfv4Di21rfVfgiEdscq4dZQZbexFiYxsPemMTUb4TDQwZhM8PwyQw9BFBNfEQ3sFsZyep4RCXxQ1NmrZ",
  "key21": "2nbMRLLcjARRJoVu94hQUWCiJiNWG9wMTsei7HbNkb436p5JEU21CMUKXCEpyDoxFAwpg6wxiHJ8frUXo69zNTy",
  "key22": "TYDYCiV8x15rdia3QQCUbY7Dcmtpq6uXb1zUsGqaRzfjLmMahqqH4zUJ2qTRHTwB131gSTjDnsam6q7jFTjooDR",
  "key23": "5aexGnLjXYXFi72znA5mfyZHpzwozBEQhRy4yzzvwMAbcS7QmSaGzyPNCeWt1EFiDu2TDPwcCtanTMUvJYnqWrq1",
  "key24": "4v8ZMhWjJfoFKiJ2ueu1jzBcEvyje1Psz31LmGLHfVP7T3iq6QGpEYYXQqqeWev8cDDhH6PdSinqQeCDfh2cT555",
  "key25": "3rXAJJaA8mNVrgzJxqkVnR81WyrYFXSBsCfVc8aZahFFwbMj7ioYJjAm6ti9i5p7o4fqB88rUXzunfy8kZZjNkah",
  "key26": "KXrMDVN6Q4RcJw2s4X2DaJ3nAapRuxYBQeR6seLuQySBJq6W6vFj2fXkVY41JoEuHsEHBoA8MYnbnZBR2gtGnQH",
  "key27": "TRdT88j9f8XZkSwf3KPAjvxeZXqZyRrhGKFujw7rzJywE99PpfYVtYxfrSUSaWrrCHR6CTZNndXXgnaeqWYmHZJ",
  "key28": "2g1FPUSb5r6udfJtiBjBeCcYygnBMm8d59ogdqHuMcakaybSKjUwRTNmY9Yhgg5xQeAb7r84Q9rXfNMZGjibs8xy",
  "key29": "5Kgvq1bNWTmhcibzryHxDtQEGmzg8o4nZo5iJMRZeBCYHBbumfks5QYMCGCkKgLKdduKDFcFZUzhodtFjNWvmg7H",
  "key30": "3tnoqncX1cRUdgkHk7MXcc8YLj33PUKB2DumSSWWaxgXR74omeGUbQ83aYzvqAwCjZkVCKwFQU3Fb57R73yFzaYB",
  "key31": "5YHXeWGuRhzTStfYd7TvsKb9EnNPNsdphiZkB5MWusQLvdjjmVp5B3P8LJsgtsmqJVMCRFB5E4Cdsk4mn9Ysuddy",
  "key32": "2u12QdA3epxL9XweRn3tUTTqF7smpfPFoNeGpHgkHycp9ez9EHZXwcVywBFcvZwzkpdFGBgtDonrA9X6jKNyHE3q",
  "key33": "2NSwjRVgp6YAPfRNGJPAGkKSJh4JRkRgCrNTsSW2sqpKN5GHQdfCCY2YtbpuYtguxhHURgwvPGJMDdYV7zYKDxHK",
  "key34": "3YjhNnaH4JGJUJiMpdCLwHmxMvzeuPh8LnJcW9dLvXveKiN3NpiqNK9A1x85XgBjyfGYLn8LzTyk4WKyFfVs2q24",
  "key35": "5NHkQ8MtrekUJhSaLtQaV129ZSaAUuXfYShwTrASghagQ6FyXWLoypVXDZXfQ2bdRkh7vTjMfMtvo1wfkwBxfoX",
  "key36": "K4wmFz6qxc2qp38kDqALzU7JyCFsb7DZBa3HMFvJgbavNJqgZYz5Ed1ik6FicxCWUTEi7ySkKLMA6KFV4pBuGeG",
  "key37": "5akE13nzMj7xu7k2FT7zEZS444K6pK2rpvgdTXpQKMoA6A9FVUTp3Bc7sxRYzBYm8JswriuhcniqPix5XQEr7HYM",
  "key38": "5AfyreJys6usfwaWXCuwmBSHu1QDNmXcDyEehLQkZWp7BapJ6zNCQYpjv7QinebzHLDLDxE8TDdNoRKVfgbbvyEw",
  "key39": "UHY3wM9WpSrZZx154DSLHwkqWznD3qpiUijX7JUZLbYRtf84UwC7T7do1pqkLmNevUCjd4N3wh4qSquQQaGsZJT",
  "key40": "38fNe1ERkyDwQKroJesx3swEW8SXFkPwSGq4mx2nQo1DBHA6LxtsZBdc6D7x8uHmWFDDctfuGw61woz1teddJ2iT",
  "key41": "3X2mKCXD3rM8Qcz4oTeWr8QSrEfJFhcRpdmMEdFTtWvNyHQJsTVr62QNrsPUZZ71QdbhBVanX4iHwpv5jrjYyjYG",
  "key42": "1Eay1zum5z4RjZ161m6hH1BPS2C9Q9fm1paawXijYg8ZbCHpbgiEgVxYCh8FWuzr3KoVpooy84UixvjpmRSJGn1",
  "key43": "4XYE5dxViWHrsFSiL26Sz2zUTAjJC1MdDSMy6YoC1N3C1EX7wJbqsHRoEsJriTeQHWyNLcMM3YjcSU4p1hpWhRKL",
  "key44": "ZDjZRf5on3ntADpCnPSVw1kf8ct6ZgDCtZWfZumSjrDbVMCXgUK153XN3tpYqcSzME5YGSdjP5BxKkFCWnXnPtb",
  "key45": "42tVcg8P3kHfWwQWHGjVL8HqB4FP1oPorYJ6YoxMaBTgkQsJnouHXW57AAFzehGMoyb2Av97x1ciM6xEWa9SWLRL",
  "key46": "2u9aDBbHQzcXjJK7johs1sJPnRivVUcZPXPaPDWNYfb1phzhThWEfZG8RSYqWUwAaf7RSPwSAJxSJPJrWTMQj3n9"
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
