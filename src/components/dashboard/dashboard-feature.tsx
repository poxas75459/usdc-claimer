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
    "3hvPQSgnR8mhUadKJLi7xxtsDoMti4NCCExYXMnbRLwycd5GL93YDzUmihsinPZqof1fPJt4JJUB71ULZFWRkusL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31F5HaBiKwk8CLFLRzrQ6piHKhbuxGqgnwBgBm3gPEqcikDAcs6GbJ24sMaZGJFNg8Tkc6qn9oqcLuYSyazLu2pS",
  "key1": "3jwV5YAGUpTXQEsPUAM8BwUNBVnMkcenDCyfKh9CmRTVymAd9KUMn3qzrza2PwCgmwPE1v5xv4QsurA6ndnzCxVc",
  "key2": "2W1fV5wJDbqHWTU7NdBFoB8R4jjcpVxQ5ySgNMxccaTHsTN19FVVs5BZGdaTqfk19A9F54qAj36fLYaczhFcv7N5",
  "key3": "qyk3oZc4o3s1VzgQch6C9x2a8C9Y4FaK4HQegGEgN74Mpi91gE6KwatrDsu7uzvMK1RP7HzXPb7VUPFb6Co21Yk",
  "key4": "3UmpAhq8y31Z2z44VrFWx27FrSGZqBsFzSpJfMTsUBFN5afimcxD2yG6Ud625xpeUP91R3FsJ8617Hzq9wp3Ay5r",
  "key5": "3Pci6E2sQ21jwXxzyFLKYhdTwwnofMft7HwCteBx5pree433juRsYnvDciS6AfbixK7aAUFhbF4f1HVwAmhUWJDf",
  "key6": "2MKVnHKRj72FtRPdgfgUY1nXYJkt3NbZKdjXH4TgBMoeYiP2VMNcswWrLDza1M9WpJEPbFggjAnmccAX5sZNPRsQ",
  "key7": "3zVyeFQemASoKeSav86JtFxGktnEzWTxLfocC91KD9F4J8NBybz971kmPu8pnkf9TmdXGShh2s4WLY4f8YvFJ8w8",
  "key8": "4NXNdFpA5nKnsHcK82WCb4d23m1g7sfgu6WLjbLM3Ta8amZ2CJHbogYhPoBWuN1sCyy77svCFqi8yc3Td9o44v2u",
  "key9": "AeCoXuEw2FtpDjkjFGmbf9qj7PLLPReJb7n6uJosM3vVJYNFLkBR4dtMaYvXKNMKepiPq47jnXpqKhvvznZpME9",
  "key10": "5AVidk6VBki4WFfJMP83Cu4oHDeTHR1Sab6AYq3StMqFVvLeavMvj9ybQHi9urMLv4qZwGVpWhdwVXqMk71AT3zw",
  "key11": "2goGtV167bARNqhyrgpQWQQ8Np8FKALvM3AR95eSKWW3c7KnxgWMdvxwYQXsPJ4w9K8jSf81vewKVfQZibYLAWAy",
  "key12": "qbcgvvU1ViincstYYzMJYGZAaHoxe7p2z8Gvip65UVy7taVraDxMmg1cdyc8uuJwhpjpP1izeueEj1TnVWKzXHz",
  "key13": "1rka44Uo5aEd4nVidcGP1yc1g9pxbDUJ8rDk4sxE9wmuPzN6QSHZtbyeeHscm1mCvPJAGLegMKcaKLSUhZPzUxj",
  "key14": "2CpUWXT5oqFPnvaiTdwuSyVKtbVEfEhChS8D5m4Tzz6avzdR78gMvgUhsrFxVnMBZuNZpWc1GjANg4KprMNgy7jB",
  "key15": "QkhGbk9uitTm1a1UQv5gf7stGTedcfxgwe44gawW6Fhgk5pGbyMUHtyXBAxjeeqbViXL1gj3cQDUpiqWokMvfyS",
  "key16": "KBhtb9c6v494E1opbZKT5fqtCrdHvk1dZcHhnySiDaidgWv5j9kaZwq9jgwnjH1sjiCUEtBduiYEmPNoygkGBri",
  "key17": "4wSntmgFjhjZE9dMXUfGgANYqTFvTQ4TPgDWjhSWPxBCm5sXZRWnViTkTH9t9L2qxwjpbD1hkpR7icJ8EyTNV7Xh",
  "key18": "3vd8uxLjmL9HRvyyNWT44b8Yr2kcmp3D1RacjEBkwLRWBGEQ1NZ6J8m5KotsiqQwBP6ZvgFjk4JDfi7goPzh3GQk",
  "key19": "3iuwwgFbx68kuubLBG1bH9bHCiCqNsBTPWN8ngvuYCzkrX4AjGuECPGazeapV9T1WZPnFgoBLZc8W4AMX7Wg4ZJV",
  "key20": "3fo1MAtPEh6Bosic3jCjpoD47XrkVVhPadPqjvpDxVFHJyTHRzjEqk4YagURdRkK4fpzjqTz7kajZ5Rj3GGCqizc",
  "key21": "2KDoRwWm7jxHVmUZ2NupFageVWJHJhzPJYxfSi3vAuH2tN2kAjorBfMEWAia8rp9LmC9sb1Zz7uGpNwLUXdbkTSP",
  "key22": "hfcCg8cxK5B5vaQCyWuhTCdewPPGx39ujQvk7Fw8BSM34fKKh3PsJ8rDL9ycraFkUPx2BXwEdSobd4NzVwqPycf",
  "key23": "3duXmagGPsczABgNpkzFVCmvJK34FgWu7281MLKtX69mpK9hDb2mJ8HCQF71AcaCiFzbzXHC58gcLoxy1ssR5Ux",
  "key24": "3xxbiZEANdYakpi8vGrj3UiLP4NwhvsYCdXH7HkRFuT5ZtJoSwTPn7AFRjYy7dYxtversM5yXV4PV4GWhVDhBagC",
  "key25": "xMCLzw8UM533tKWj7KLnZNibmZSCwfqjseTWmLbFnHgJ651h38ypWnSYwSV9KXLSpxAxCDxKPWErL7hN3BhDpPP",
  "key26": "4YQjU5Lgmu75pLxTsp31fjsLk5E5ViGRaVjxps1jxPNi1yUghVcsyBpKNEnGWjbLxXrMraYL2EzwqNfvkKP611Cx",
  "key27": "5Cde5Qhrv7cGyHqASECtTxVMAigtwpdUvpb3dveXYmDA3Ux65ZAFyRLFRVrM3FHkYwbsEbohFHEPT7iTQgJ8ZoSW",
  "key28": "63S6zyzqWUekiiBro7dvS3o5L6CxLPZrqS99gt6A88iqtWcktXQpPjhoCTZPiamtij8yMUcLgBdHL9pipVaKjRf4",
  "key29": "3vFQrvQ1dWdSuLAiC9rWQ8c13DhMwpjbH7ehNspxrGYT3bTHCjxSujsVYhQtLdKcv3WD56gHsQhBwjAWeG72D1JW",
  "key30": "5oMK5c42bp4oo5fXJ3xYmr9WzT4nS2GRH8vB8szRAZqFD7B2NRmFEukAvqLUUAcJpqdFxJ34gpRoCpKrtDqYU17A",
  "key31": "2dB9Z5z8oU9nk7WHYxcYCRPJhJ5uYoy8Ad4UgEGGW37fbFuYFhG9oUzS4MtiySWdu1rdRhtmdmpXpkSXsFYfvDUU",
  "key32": "4YHHaRiZs5P7xuHSdgXrAD8dYJyjNyn2KAiuyfR21vG6RzUm68zq73WqZGRXqnB6xVBGCV3CQ83TdW8xoRbQznhr",
  "key33": "5f1bGU9G6nhzsdhwfHH5y91sGb4AFHhTjuXaKbvdjfh1VZCbKDnMZAn4Sj45HoappJ4FnCH5aUJmMH5aus8ijB13",
  "key34": "3W3JUJ7UVwnDrjCLdfHBP8arNiBfN2Tm9Y66jbduvmZq5rP8Y5yNR2czLaC5USaD5WHjE81pGLvZ6yfRk5v3vQ98",
  "key35": "42zqNgY3f3eqSt5tk1nUh3XKFiXWjbLpRQyrFKJWvtvRhmGwS8JdfFpNeUfBiudtyW4xkKcfgHSY14vdw9e7J6s9",
  "key36": "qgM6fZwQMtEdUXWAJBT9tK5tdJRKJqUkCS6QJmmnsrrygwmhMRzVXe4GjkYCPJBfVwhaSeQtLQquXxrUiFqSNEz",
  "key37": "2B3xuUvb7wEytVqLBJtmJAvVir67oXzT8GEy61LnuouPzDxDwuDVJUrV6HoT5pLtTi8d7sfYVuKBLcYEAzLqUUZB",
  "key38": "vMcoat1LNfKoA5EmohMaK9RF8WbdN6iUbEq6AhMXQuA62pvbZ5drkSkLSCrgEm4xanhLwnaQA5hjiNEYreg9BhB"
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
