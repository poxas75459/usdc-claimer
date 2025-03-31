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
    "3EPPT9eXBeUsZG9NJrnXDJJuivgdWtidqqAJb9koJab5aCidX5DokQWrjx4Tjuibdw45xMWLubMXdV513ivog5ch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZwcbjUKixKATsYKYFBnv922s5UDQCLKhEvGVAYufDEDCfKsaa5Geiy75fVk92gkmVT6c5cLDoq3afd6K8VZ2BRW",
  "key1": "2JMc9NP6r5tfDYK6Pcant3P69ZgnAGBD51YpDTpktnwviYWqKEf2KDsFogksf3c5oaH1NUyifRmdSJLwAu5Psvuu",
  "key2": "3JfhLy8crFNUCacSuWBcbaPMMSdLrbHgefcriHi2RRQ51AvUNaRsT2HB8jCNkmPRVCwYauiVe7XE3v852Ni2PtnJ",
  "key3": "gJGqWCZuUcRjJQL7wbnSCiWbBSnT73H1pJhXuHxzbvHfvp1raGxF8Lb9vNtVuVYNFkLpeZ81WNhzU7tDGPbypu6",
  "key4": "4yZa91rTMehQMDikH1gGEJFteCxpGRmppjBYuskxyDJ1Zbtu7euJJzasjZ1sBLKt9G6KjgzcE8eF8GAzufsyoDxS",
  "key5": "2hS74pebYtJZh867sCoqSCMngePecbZFqj7Ga2mnyUNRnVNsdJ1679so1rU5G8UzH68aM4LcLxLc8ztiGqE4Mhtn",
  "key6": "2KVXYiBNG9tPLN4mUfdff5qaSk3iM3TT3rsYKJCckVTg1j221pH9BVFNjhu3DWVJ6ntDTnsmJwiHXNN6Yc1wWTXf",
  "key7": "4v5bZbyqWrvCVGDCvkms97nJfoNBR8Nc6zQt9hFSYd4rN6ZB3uGh727x67G5QYPQYC6Ueq1PPrN2yPAtiFS371dR",
  "key8": "4oBoHSHF3RFemqezYvAm81nwnzYcCG97gd8PJDGfo2wForL5VGaQnrYPBCFtb3HVwV6LB3wt2Zo5191cjfDEVu4Y",
  "key9": "4RDGC2iog1WMHKbthLbwJM5c9nFedZybiXQGLEtVeMs8SS28Kjts6XMFmmmdgTqCjdegRipv6JtiNovfXNzwByNY",
  "key10": "5xcF6oP8hdigFv6zrK15fbRqS7NWCtkh588X9tEdLgXPo591dR24jjPgmnUMC6XkgQJwikgbbWA66Ratgtk1zgmu",
  "key11": "41tGrfxbUANZyviNPSmDyty2BP3Bv8uJuK5Xa1k5cyA79xT8NWqFJeamxsQsnRRQh9BUboSgcb2SS3PZtLqeKUd",
  "key12": "5RJBywTu3kBwbnpCivzmcX8ki8YDbrHWtG48b7cF88At7TUkyy36X2fZsqX7VDxTQm71LoDG66AvASRT4w3U9Ck",
  "key13": "a13oKAmzYcTkDJjujXhEb8d1PyCbBWKbLuRYWhZYsR3JzFfBcK8H3gLVSBXkMHjCgQu7v2wfCvzCVG9owH1Ee5L",
  "key14": "2dwdbZPb9AZPGS4b7EvNWW5RzyKSozqkLcFmxZ9WcPCQ7susMTxf1M1xYhLEfjp9vur4u59p8aEgzQL8o2yGaVfV",
  "key15": "5W3AzbMt1sK7wbV7ygLG259DkPujCSMa7cZ3wbq2Gotmdmc9B3eh9NZdhfbJESr5VqzWiivfRkio73JhUST4xFkx",
  "key16": "5k4DFWJLbeCzWNGtkBrX9RZqWpDbMJ7yxrDYUP7gispxS62Gii1LnpZ3gwrYo2PEhng2tWuarzMaL17jfZ1HLC2z",
  "key17": "43jWZY94nNQK1Mk6Pq7KGzhQQEN45twpZpG1ks1goXBYkxr9fvU9Fj2JTaRDfifuynqXx27KfymXw27A4qmwa9Hm",
  "key18": "49rjd8RptzPWAFKCtzMw98LhbGfaYWCXCQSq99GZwjbCNweGHTnErD1VEoqz2YmpWe8Rdhtz9rJuhk6ZFB6EAArz",
  "key19": "oikjdwZ98NxJdmkY6wCmkzYi7Q1Eyk4PgTSxe57sN8w7MBmnMYcjt7EGtMgiSVaPnza8BY3HC4asnc8z4b4qB2c",
  "key20": "464JNVHNvJkrpVTd47CAnA975gxvg2n3k8LvaptwejU1Phe8kBRaZDHvQyPrGWUknybHnkaq4dzL9rT8Xgn3BBFh",
  "key21": "3rB1yv8hJ7nbbAbpAxwrUjE4edgZVSAayRESV8RUrDeEnGoSWK2A4PuBZmkHLhxWCVg5AkvBdMHJuYPFyNZqtrpe",
  "key22": "487BZ34u1up63cuHvzHiupw3Te7v1awA4KL13dUTe7WyADfqSwukWvxbaJjbJ42QdfUVs7eW1hZoDzoAwVZDGcM6",
  "key23": "27rTv1UnTTBnonVMiSv3UVZ82ieoEYHwShhGvadEDfYh2sE7FjEH3XwRfeHKxNt4gGwbVzXDNwVLrjYvyciNXggj",
  "key24": "3tAynwAvVukLmE4EBb5LtVLFrVJYiuCDZW3vTTsrDAbtj68XvXFHAsxL7ADHSGWWLSgPf5Ucg3mdSyhdmKqddJU2",
  "key25": "21JdCHW5wZ3tbNjS2gbsjyzojBo8JAgs4sqmp92ooPRTG3sHdV9k8moRwMe36hPTndPuYabKNFapE1STKsXsoUJL",
  "key26": "pemztSffPgMZVViT1oiAmXMiPHayXWXxdMkgXoRrchH8SXvbRi3E23ecPDcP56iYpK6MrSk69KMhbvWMSaGsgCn",
  "key27": "4TuLcjNyUcqeRGq9zKyGxfMTYkEh3us19vJKcDQ8c8LZfa9afoqeUdKCeRKxkPhWc7qPodaURWkFYeisbqBbxccc",
  "key28": "3rLYfMWibYxakyzpy8owNMu9AZoeSgvshnDUZKFWHwEG7AZmTrWc9JbwnovLYrhQeCaA66ayWt1JPybxXJCBqHjF",
  "key29": "vcHa82sMGVbDJAAfxrDV6YgXVFb1qv9GCMrBLdt5LPNeWh1cTgQUfg1qUSbfzrWH9tgfs1eSipC2mkq4yn2Bep1",
  "key30": "5oAo2ff1AxppWZuPVqHy1NQYcasvZxnPRwAw3Vb8BUy2g3F5UWyqLAaWrea3qekCJDjCtEejRQu7HYSYAyrMupy4",
  "key31": "2v8UWtuJgTTVjpruGu2oBjFFiDGwLBaYhwbA4kyE6BE7YenaqUrHj1rAoFsM6ZiaEvpcu51iGR2KkVJBVT47YhU",
  "key32": "BbjuVe9Cs1WkyWJKi2SCCXLLPxWjcpAcyarXunnLwzLqZfJnDMvsyN1Hk5vo7V48eVPVpHyqi2r5WjMiwZbDcrF",
  "key33": "3zf3dFu6rAMMQ9MUPFjqVYQvZNVHBzhwvWtFwaqRT85UAa3W1tiCnutxLnuQ4KEZZsQbgtoTDHXbfksfJyP6v9eN",
  "key34": "4tyeYft5Gs29mRQyprpc1qyh1U14KUYmTKFkdkKo9HrArNSUSPw3Baxy7f3sQLBpU8oWSZhJNE6wgtXpubArgCgz",
  "key35": "Gh1CFLRAJZnWdSgALtBcShMTtv1yeVSbW8Zic4nZkjSmFNcBNzo9epYKRGcHSRk3Ht2SQaYwSfN1W8YUhCc1Lbf",
  "key36": "5qQw9s2QfY3LpmL8qxz1QMSFYEvMRR7914pNcmL9yQYhLF9nBtk6HS7oKVtkymEGRNVeg82ZY46wUhMVWJR3isqi",
  "key37": "5erEeXEZwADKFXdvKp3eUzD1jjo4bKNCgd8U8NDBCiZKM45nC8Zvs6HS4a9bj2rQ7JcEJ3zyTeTPpaMm9zunr34D",
  "key38": "2wR9Z9ND4YUgVhofjnV3fQ1Cj5hPr85Hou6D5GRFe7hLqWMwdQJnphPvsJ55Zxxt7SWjfxnpQd7rz4An8RG1Hmcq",
  "key39": "47HsRvfxnUKc1PTEVju9eSeM6TszXXyF6WFDK5fEgctHptXApFeAE2HF98fhXfC8UDGLM18fNiGStLd2Kz3CxTau",
  "key40": "2Cm6y3SWjAuYertN3kEdPFjsFkKh9o24j5J8Q664LWgC6vE3S1FhZUo7aKgRxUcDk1XsyHxKyXpZJCVwPZ63By2E",
  "key41": "2cbnbTGVzJARt52qeRV3aJZ14GKYeKR77ATwUVoZT6DfBbKJgavCKQrRrysnkU4pyCPqYdwrNomWJpd7VAkUMiic",
  "key42": "5B9ebs1cbu6CdTpa7c9o5sKLoHQRuvBB8BsnRGLY7uH7hpD7ZQSKv9FaqmFsehWKZaK5RvbhnVzYwmYxk5ko2tE8",
  "key43": "5xBZADdLECNZJ2jn46K5X5GekaLCZpfyZKKp2jwUhRe54gv1wZbcQZkSdkR5ijvc1NGCMggyp7tCaTqSVF4fQRW",
  "key44": "3jKZbvHmDmuHfCf7GddwRgiPfzN95sLDKiLj8AykoJuyiutaaynooEPRUG8FzaBWzAk6Nw1T4y9eGR1C1zM4k4vc",
  "key45": "ipxTwmRETx6Xnx8peDQdnoXDVNRiFn1tDs65GpfnFmHNiciKiM1ciHtg4T2P9pdFLwpHfJkUjYwKGhxHu84hMRm",
  "key46": "3CRwPEEYW38tK3NbA4bKjhugRYaiDSRnwMpGDsjDjDJdM7Xkcduevum2qSiUCxEAZW3ftEFE4crGDx5uXtvK5PFE",
  "key47": "4r9Ks5GT9c1BdCKyzmEn2mhBWMhDvV6WuFGRZDCwSQCwXyTneFmFbsqFdFfRwotPNsyziukmmAWVxP3He24j1gKs",
  "key48": "47znvHDhjcGBNbyvxbdBrGW3EfmzypVdtPzqz6LoeXjCrHyy8yswkQA7SxzxMBX93upLxPx4jK3CN4PgiqLPyP7A",
  "key49": "98Yc5im2inLVeRaxVLBmpCPSHNWqvyhwsU597FGXSSQxdcqcFY7ZydndyMe1gScinhbA51Xb8nk9P9GcoBSUJ2B"
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
