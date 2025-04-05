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
    "3SB7PfHyfiKTr3EQdNNa32xxKrLeHZUsfwGV23CzygfkZs3KgSXhxUQLenv77tFc8nceoNN9WrqaYkD3FGEQABWA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "541zafhDZxea5YF13N75MLoqJ8zXZMc7oQJvfo7M5xVB8u4u4LcH5X2zkYi8H4NbU7RL8bN9HT4hRiC7TeMhXJeQ",
  "key1": "4VDVKKDkf3oKPKD2ezP8KG3XHaJmbwmEvnWkEbBSUAkmLodJ8cUa4iCZLrUaZpMtgFn5PiqpToT9gGrtqRnwtDRz",
  "key2": "4XsqFKtQri3DRREjSPQhUqwBYZVqmnBENUMKQRG2NYETY29Nf23W3srEkL8s95Feh7dF51qP4XKo6D4aoGy5B2S3",
  "key3": "5yL4gQvNEK2wnqTHfqhM8GVWucFzMTVSJajoFAtRnqkBVfQnNhQmHUNLxngJofuKh98pGbrS9wo5dJT6t5H1NCHV",
  "key4": "vtLTyWuhJPLnGhN4LRc5ksJaLeyMkoNaWbX98hZUr2jKkHFxnF2UfzYZGE8N88gKcP5Se37zafjHaRz7hTY8t6d",
  "key5": "5m1q9mQYH9eyg3UQFacFKwvziiAPRYmgdthSAtcQ6thCoMy8TPVvRAfT89NyWRu1tinS4isZ195hA5FvFpGN64zi",
  "key6": "ozZqY5C9bbEbhjtc8WAyeks7XJFAr9cXdgoBijqAyqHwkyx6oeJSMYmLFyXiyEdwfAPi3Wq992MLVQAtMNwan4K",
  "key7": "3eRM8SLyxrxGcg5FFaH1KrBEtSKtZnH3mfF5181zFMget9cgwJwh2cm6yEhaKinaxZBD5vxFz1KkFeveaskrquZP",
  "key8": "27MXAQUsBYtrZTucNVytGFebhw2atb9EjsvFdbs2PkbxNeTx6JHeC9a6T4A4aMT48dAKQwMjPk4r3jRFoZAYfLEo",
  "key9": "35yuKP3GxQLSphSQcM4ToQXeo7M6tQmoM8ttVXQozo8S3uZryeTf2Qtw4wsLuvkn4BWkdznEUhTsX23eVh7RsWz8",
  "key10": "BS72c9pAao4oPELH593hixhagGNUsDpNKYP77s17DkV7gEUVQq1Mg4JVzneztZ5HwagAPsZFjCVBRzvRaynJ3ih",
  "key11": "3R4kvCVCvQkGWqjPBErpPYCsdN84sRjJuCMo6LgH235uzq5bJBGfQeYCHF3WBsGveqWxv93ASCxEfTGvJZehDRe6",
  "key12": "5YC6tkgT6DUywaKxLp2quJrKyEo6QgjonypQRM6S5R3utJkKTz9yzxH3SEJWwQdbdzpgc7vxp3r6VKUBnpqc2B8c",
  "key13": "2pqrtyjVyRovYajaebjn8akXGxQ5cHHkk4Sh6X6h1oSt63nBYRpmhYhywzXvooruorxUPWFrv29y1atrrfro4QY6",
  "key14": "5sqMaN6aUwL8HzD8eDg6NpMi7KYkczCZGhGaZM47xxg9Y66ApRRUpTw8syg5ABTno6KMvRMm9AGebXVkmMZY5cn6",
  "key15": "HP8AdiFacsv1HcNVebtcbzQcycc5U3GMhkR7zSCakAKXzWce3Ej4F1pMz4Hi2VZq7RZsox5w7idW55sEe31buyU",
  "key16": "3uKAHC9tKWgwiXGFMovKKzcmHQcsNsYF1LBFTBKNFHjxJ6daDuNkdEDGQiwny6wuVe6ZGy9hNcMU2wyhRu1DPUG8",
  "key17": "2QbvfBnQcbdvMBMHFRio9VVbBUWAWRXgHrN8QWDpVEdJX5CyuSFtw8CPHWPDM2ovbp9iQBiMVPHim6E3Jx9kYDmx",
  "key18": "3JnodvvnUnfrsAiHSiPaG8uQp1uURcCUw93bzq9KKZbrxSpxPmCDXFMKZhmxrWovnzYTx6SSzVRdTCtGxhYQEgNs",
  "key19": "3ukWwb4j5AqJUbah5uo91ZCZcrn1GhyGBexNvpMswPEWBr1FHMGBzQkwCv99hUZfQcvRxcTmRVo6XHdrTaXqTyuf",
  "key20": "3RtMF2dLADUbxmEMbcXcPA37gM7fbHcbwzk24gZLMfrB26bJ6CgGbYEAV57Qo6Y7zh3L97mRVeNKbQvyGi4v7coK",
  "key21": "3qzs4BM26N3phGS1AhuQZ4ByEBeTMTKAgfj6u9BCsnpXDA1Z8zgLEuRgTo9kxHPi1XuCi93Que6nLA5jmKcCocmL",
  "key22": "2NP5GnkAiqTwSNM5wMPVc4Eh25WnSQsA4Jm1FqB1RvfqWbqgNZSg9aVg5HMrfGctUSvs82Vk4iVYD35mudg6g2eh",
  "key23": "2X6eFdkqFATSAJXSfssqnMHKGonXY5stGFbtbDNe1iPorMTAUsRB1M8ZPGgxmTTVzsSr3tWFepAkpZw7DkCZgnjH",
  "key24": "2s4xLk5MBLjdrTAyhaqreaMxexSEA4o8bh1nVoRL3ZHvsJYJq5SC11vGZFGptLgjQ3wLvT84VpeAe5etRKSmftH3",
  "key25": "oCXZswHQDC1sEbar2aMcUhqZm9kTbWvjcJiQBmkMMJwvMAZAFsgF9udzLtWfMoNuWJ22QfkC17aFymiJKbGUzce",
  "key26": "5d3CQEP9EAVpJGefRL1Eg5hSBWdJ3RNdgkPftKxL15KcjD55sqmfDGDcaBpzLiAPA8SBsC66r5fiA98EXDtzQdvN",
  "key27": "21i6JcgvFYV228PNw8SJMW8aFBBnCYbvENQxSFv75FAXQs4Y4y8sG7JHnYrCxSL8DxGGJ8R9A6JZ1gB2RJN23ZpQ",
  "key28": "5RnrRmwZHVVXXPubwskRNxPWeNvETXc2DPtqEyaLMqGUUaEFLHkKPM64SZukBdPhb6MHDgh7vepouc6X7x6Fg5CU",
  "key29": "3f1fg8dk8vKE6tjadP4ogxVmULKrS79WyxmvbuQw4yv4PfnJCJnXVCqW3VAdKSpV93xHCBeWCUbeLrj9RP4hcRR1",
  "key30": "3yS9mMnHW3kqmPrcAXbPtV3N3mKDNHyNzXWFgeuaFaBB9aF2U5QKQe1WTuXMdFf4rUayRAfUktLBD2NyR9MgJray",
  "key31": "5HBtcELJzZf3961AHykNwbcvv6x8oHvu5gMPC1uKTQR4XUv17U992jngkEhCXtvNxQ9gVKwcQ4n6TV1K4ZxjRer9",
  "key32": "CdECEjrNgnqgUndt9FznVMV2MvJ6X3dvj6tRjRCG7kMPXvHxM48bFRQLoHg3DqEYVMX7nrX6cPyhF69aGRv4q7E",
  "key33": "251t1EFsPTYffuKJr3JUushhvkZBrwJduBLGMprSeF6G4k65JTcSB29arDcekdjtF3HbPsxTpH1JVxEBBxik3PpX",
  "key34": "42ar4qkuxqmej8g7h58dDapCEkyVkqpVnKEwxUr3mbZUEfKfU2omxZwY1qozVVB4GMqqqtfazoPPMPXSwD8AYHos"
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
