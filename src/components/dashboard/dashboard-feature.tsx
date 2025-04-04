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
    "2ifRhP7VjQJhxfKNNH3FnBHB5Z9EKev9MoZd9apz2Kc61x4jESqCpPRf7e9fqaNmJa7hn9BGB4xgA1bto574dFmN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S1YrWBkKRb97SArtzrCcWPeRRa9R3sQDZJieKgLb8XEqAAJHEqXTkgPMdnicQYKGzteYG9pf1JxtYbNnzZF23az",
  "key1": "2Fn9aim3r9Jgicx5ajB69dUzEP1F26pqEpnpeZgGMNA5uA8kLRtCcaYYCSTy63MUZnnr7xn6xtXDaY42UcYFDuF9",
  "key2": "4NAz9MN6PWb2N8PCzo75vwGtQvAcqr43HS5wbfX5EquUExqo9nbxad5M5azuAXfx3f3nmunmC5aoegk2xo9rq869",
  "key3": "2g2zDq2fEt6sqbFK71NLqvw69Etgz6jLppri8JWWhwjbhsJQM3hBGHexzw6Nq9XzZpFNeXWr9v1aSm84Z4fMsN6V",
  "key4": "ah5gQdbozevd2DZ31iDRJz3pF1ziWzuMLji5JhP6L4dNLytJuQGdBqxYdRiGAnbekh2ZyPk2VMd4rUvJskVTbUh",
  "key5": "tS9nCco9VKTf5sL992dHUSKJH2Vst62rzjznjnEJ5wTHi1o8EXsn1RGFA3xTFxidKWUUZXAkohfZz8E1QBKvaT4",
  "key6": "3XMKoNXSaij7QyoTJeqcsCjUtkQXgnnvx6Ze8uoaXWReckJZtJoDSYPCu7FqWNbhHaJppLeE9nVBzJxCNoJ8inyR",
  "key7": "4QoKEu78pTBP9GfDHrVHjumwUryHsB9DxbGsRoaAnbpgh6QnMAQdXNB3FS2BjmeN8jUjP1bbjjimNYJe8BnKxUn5",
  "key8": "3uR8KLQ4C4xorkwtgBN1rbswyFLQJzhQnW2zzzctGJsHr8AzGPHUCnM9cq5sasba3WgR3UZoVrPyj38TsVkyVgxR",
  "key9": "5RD6T7BaEVe4By8yut1Ss3VmmfTdUp8LjddmiMjyUNZnCmSEktqm7x1zC5TmAMX83DTmJggvfurrobGmSqjN15Co",
  "key10": "3MBF4i2AdaHEj8R6ud4wbCspjJjPsnhTUhxzqtbSA1D32dPGkA87BDxGME8RXgLcmTLtYNRLToPSmGKTxffb9ctd",
  "key11": "3SLdcoqdnsqZNe3TGcqSAprr4XZsUTbqorusjQNwTL86K8brb3xFp2fLyvriobMebGAozLEhuzLUFYmzW6hj4dzF",
  "key12": "5yrAv2Up8tytmcWezFGxwymDv4z538HPyuam7DX4c6TzW9KptjPJpb8puWHiyNT195ChvNC8pjzomdKYA5oRh6eP",
  "key13": "5hM26nSwrxwuSNiz83CXsvcXKAb63wfGbh7QzsTSM8ooJqgSzVcv4y1TSCGbrDjpfhnB72B2dQ3itjW7tKp6PWBL",
  "key14": "4PyQgJEBnoEgwPVsiHd7bwrxm4zj6bToqCuFbX8buh8QGxkxo97Wnst37S1dM4oHbQ89u8zWrrJCbTWpuXwqTgvq",
  "key15": "66UC8edzqnAz2myyJi1fkrtHERkfd23hWydeVQ17kZAXRMGNNGKQYZJbHtvE5uENNSx5p87FzZ16TVY6JxGCo1y3",
  "key16": "5abCy7DknbFgHAjicAEBALWWeTyRHdHUEN9bdcCqGjiEvgUvERifqV9VhXzsLaU7i5HkZamhPpZ24ogoHxtcADfv",
  "key17": "5nVUEbdJsGiQFcP1LLnXHDd8zKGe78nrNaDL6vved51Mdnx576RFoQguZ7k27DbYXRzhyNxFUSZz4dTiWsycTP8d",
  "key18": "7zgiuZvc7Ty1nix1tycMo4APXvk3RpmyxKCTMKKxcRP2AbYqiTPwHbVeHnfw58fWUQpmc5H553v4HbGfN9ANERb",
  "key19": "5LsPxRCVyYWpQnJntX9shDmSraTWyyQXodh6fomjbK9ceu4at7xBLGALqmbR1ta66fM6EDsuB66KFdjpyMXWZmK5",
  "key20": "2gGBAeSRPUbqtdx9yoRC5jHGbyfS7YHLTwQyXKBXsFDK4pPXNaF8sdh3UeFs9gqi5B8Qn45YKvN5syhGm5xgbXfp",
  "key21": "4pBK9ux75T35cnkcgwbPraM8v4MDuQNJMTPFeBXqN7NJMTayaMYUjN4n1R5hSo6KgkFbupH3fuaCDVa94LUrDuC9",
  "key22": "28uereiqdmyjzk6hGfkV1LpRuJ1SGcNPhSQPss4xqBqau2snnRHvhWWmtVFBijseJwSnpP8KsCjNEwvny2uqDHBt",
  "key23": "QUkYF61oQt7XBHzdiyQjbUcShBXYACuVidDU617wFcCfkC3E5RBuboD95skpcuMdueibUNHXHPEqCZAR2KvWE8g",
  "key24": "62gw88RDCs36wGpAGSTGAqtdpXW8SVPPTFdb7Pmdf8gEyK4R1S8wj4ezRNiZnDWpa6Z9pNUZYq5vDaqojg9qAd7r",
  "key25": "5GSPjGgYt4Kj4ABW3Fhayz3nhYBHH82JQK2dw8v2DXsfg4ZJ2HxQwKUGUg3HcD3hM7ACABo2qKgKdH22bjZpiXxM",
  "key26": "5nCkfDfDd4X2C7Fb6jtT7UKNWR9XbDePMVYA7UNNFAWeSPa5ZRXDd8c9msrUpqihKMsB9f5zCrq256JMLyePqtno",
  "key27": "3hgFoM9Ku2WSMxdKswLMKEWvSrsjkNcHG6BYWj9DhjxAn2R7Q5DKQX1bC1Z77crZeati5QaPW5bFR5Px9R7aSo1T",
  "key28": "2AcsEpAi5URkDHaSirQXPw3DjbwpEydGyaq7uh5tvS33rQRf5SkhQ7ZN17dx2HmAbLPqypqUvhHk5uUx85iQQZTi",
  "key29": "2rZe8v6MF8ycne442rLBEjthieUrK2d6KfnUkikfLVLpqrH6SMSWDvMBs1CtKFvvu28FjAPALsZ65ikNcC25EHhR",
  "key30": "52spRraiXq8NCmK7xWtCdW4VLjKJcuKpzuSg9CVdyPAiyN2Ciy62TSDv8zpxJgu2mWBDUzJzsejZd7YuRAanbYuW"
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
