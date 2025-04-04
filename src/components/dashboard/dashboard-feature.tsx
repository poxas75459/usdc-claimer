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
    "58GPigLyVFbBNFDwS8Hggm2XBXD5fCw6A3s4mbQ2kevDZ6W2ggjePDW6W29kReG6HLScj1pm872DoqBXuKrAc6UA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m3RiD12ka9DobY4SnoQqaCs4iB84EFzMDYfJSPa67Fw3KCd8HJziF8UxSaqYSFJ8SFkNDE5NJ68PqFfEhsWMMpP",
  "key1": "1vDNMa7e7W9pmpSRGaWd288W7fkdpjYvXdxfJqvCzbvRx4cgeU5jnPH4eJEAG1Uks6n2EiRGa9t9VLnHLjoMucj",
  "key2": "26AcbAUAHsYg4mYSTxk7U6DZ14m8rRsggThPMxapTPGCECVgeFmWvGdDTDYyuv2nGrUeUhXXD5GJh7VNoDPChWNY",
  "key3": "66hqv91qYJVkibG8kBCfn3h6M15FjuV4LDGFJhWPRMBmaPyDSJGLZtrDEY6ADsuQnGZhxFxGcVJZwAJdYXLsSUJ6",
  "key4": "2gRRhgwAwifxp9NDUoyqR7ZU5A7v5pMf5bPsvqMrkCTAj3PaS8c1K5oZJ6oV34vwyCHqm1GxxCSZPaseVqxcYPu3",
  "key5": "4VfjaZ3zM8e7muP7ZB1gpdZYbGqXh3zCD7uUfMwe47jvi4huLF6vfNzpJoFMaBs2s3YWpHFHNUCqSKzyMnin7hq4",
  "key6": "5uxFyVXX4KZeiLSvbXdNGE9QHhWK1xnLWyeWLYixTdg1L6TfjuKKmnvEFodp7jPSa5C3KdfKHcPSheh9eBrNMnLm",
  "key7": "46LRAFTPBU3XrC39KaGyFqfSw8986SEwyyTEX89Jyt2HxLJKU5gi2UvAnDSdkt9Xp75uciJooPMW3t9yWZiUkthN",
  "key8": "5ptdTRjzddtfY34d2nNfJS3pXPK5ADzYxMF9PGYH4fw9Ht9smnEaTJeWViuZsH5fKG8shSSyXLxqTiZoDX8CA6Si",
  "key9": "JNK5HcMU3mXUDfVTyC5kdiJpgkELHKKYH39kwe4FFzyGNhfhBaDToiRVJJXdbdrNn8Wa4KhiXqhGzfwRLHPNTii",
  "key10": "nmcHUN1ZPiqQEn5JtKYxEKcoAvPoaeH5U2Dg5xDg9RyGNU8Sg6HHJBdG8VW4SmvXxEb5aA92VXvd64j8HCcSceT",
  "key11": "9MWmZNAFt6GMDb1fvEgFrpu2UQQkcaTgNUi4px7fEUbPqooA8FXHQPLGXj7qXzs1NnLh9qNtUiSh8s8Wtk52dQQ",
  "key12": "uffyckf2aV5RJyQWKpdZNgYe4nm69mvL44t6KHGGNKTamMDDJSGK85rgKxAKMoek1E7beWcXhaBJo58fPPSnPpi",
  "key13": "2LAca2fGF8pCes1Rkva3284YFp4mBJ5hmZvww3f57HB2vqWdKtaHjZcq7xeG5ncogvcFcLWE6PWM4qa5UREPfxbm",
  "key14": "5ZaW3F4tQJcpTyjPcENwsNbFZuiagybzpo8xRKb3rvxqhAjfj7g2dNjnWAjQWdzW2Sojf5Y7xpXdpj6hN5HuZhKS",
  "key15": "3nysbnzV6HxehCG6FfSGSjVaq75xbu8FRsXHUpwHKXzzRccHCZuNk7GYow3YC8Z7HH5aQtPgmUtBw5F4AhMhUsa7",
  "key16": "3LgvcxbYfNLPhqw6WuAhS6E5w4pnPzW2eyyEZ1GbbwzV5APGtmkUBJkwvmCZgJo6SrP74UwucLMfVCpgVuaS7d2g",
  "key17": "5ZfTakLZ136rmy2ZMjyLWNwmmUBmLyTrQidKW5mjafypApx8rLYKvWB8pDY9nAtZ4ih97EfDiKTZpK6bFnPS82b",
  "key18": "2eBnnpiauME8XteVjFQ33ZnYkKhFMHiPWFm1gW89xg4oK2pqN6KG9Z2YuC6overfcKmT1LqhNVJGXhVH9EnToJGs",
  "key19": "3osK1r4bpDwKi32kZ2wFKrSsdwTXyTqs7aw1g7RdonUXks8d1qo36jJX4JfgHBU1po4MqxrQsUyXrJTnc9qfybCK",
  "key20": "51rjyxR3ZpDePzaq2tNa1FaaApRpXNSbUNVzNpf2u2zupH2khtszrcwqe9Cy74xTMQYKru6FJLb1x1VZ7b3yTbWk",
  "key21": "feocMSb9MqzWEszPDjviwhQJADSfJ5mXShjw3YNcovnyXkAQwDNL5o2ejUPChaxoFMuGr4AbQ3CdWnzXzWiFgox",
  "key22": "53NzyQfRMXnLXptGK2DNtbqupGGfZJg3zndazY7kWJHXpcsS9F96PN62HdCNe21miDGGkrcmrmSJKjcpXnix3C2b",
  "key23": "UJraRfGA2thKqzMBeffa5Z7i7CzuPUByNhcg6LKojtqqDQrf6ZwVU1peTg2RA7m4Hnm8W49uTMmmeHfmZRKjpYs",
  "key24": "3DyuKBmi4Dh1HM5xpVzUmWnowSarEbDXWAtgJdDdsaUtuLgC1CEjBe9zWCnwyiSdFjcyx1C6D4XUepJkg1FwNd6v",
  "key25": "2m9kNKY8aZ3gGYdMCXRMLqk9QSKn7QfFKgce7GdoH1U2EU62BGjd43wjwMA2KdTqaLeRoDhxDn33QtrKodTzU4Xb",
  "key26": "5B1LmDvBeeXkKgJ1gEcg6XAVG5epVLBKRGPFHfpmscRfQt7p1HYZu7pMwuEz1oTiouxejwHcUoamtQ7Qrg4dM5Ks",
  "key27": "5TRfrSAgSiCSvKuModeR6V7daEMu37epFSPYHhtMnV44oRByh1HhUdZdBLpJqkUBHgCSMWhTEcJ9awWB4EMP5BNL",
  "key28": "vf5qMBAAMpSswcK4vNKyZNgoyuwgfRn2JLj83jeHERF4QRS9vpQJ67fPQbrhf2bgVPsZs9X51eT3Lpb3Dz9oCYv",
  "key29": "4yQ53nzcjpnBBYPEFYwXPGamh2tmoeQj78r2TM2UmJrRcHvMQHcAtReDEg7GnQkiiD9H1QaiePFzixNdgWfwpNU3",
  "key30": "xmWApdeo7eACFrwA3ic8R2wBCSogTKAAUCQpqkvyLTF3Nrj9y4RM7DXVLGfdRbqEGHm2BSuBKkCborJw9JFx8xh",
  "key31": "3tmRk3yMEAJju6NHgAs19FjScVtYxSrAfRRtNWhuMjFHoVaVuYXakpUMvURGTizf2KbzYZeVwf35TrovuLJBEtBf",
  "key32": "2M941siCEmYiXRgjPN8dzUUBu5RKXuQMjZWCDbiHMj3kbh9Ufckn3pNGQvxAvuGra8Ls2HQwQES5YyAb17ZesEi8",
  "key33": "4F626hxFagfKthfBzRXHxmBKwrDqRHgncNhBRYGg9N48zg5aMGpVyqZT9SSR5xUeZ9Mr9U6ecbcTSA2qv3sy4zph",
  "key34": "3AZyfrXkVnjmKrJCJCAcXJHjSVM2MAhEdgRZyWEZoTdws5KezZM6tMnnxsmR1np6gMgCBHkErpED8Vfz7MtE6fsP",
  "key35": "3uCT1ifPV6XpyRuCj8k93c5EoMsz4S5iF8y4NC3ftzgQMg9qi9rNawvhzny6fD6FpNAjdDaWchBMCHv7MrViyEhk",
  "key36": "5DvhbpGd3BCAB9msfDMYaxbjm2QYJUZKcXaddQdmdo8bPc6nv4WaqYEtrjRQca6W6rCcKZbJxnbMsgsTTiEfXpiS",
  "key37": "vnkzLyaXDyXQrFjtmiG2geYVRevskTNE5vcg643vDzeBNWLDQSxwS1NHTDYryMEmGMGStzAfATLhbkrfrfWMMy3",
  "key38": "5awotKZTtFYgbxgSNFLh4NuJdHsdtgFVRBsumqzhbcQYLWpK3SwXrJ32gfgx3dtmiEYkgPLjmc6Mkd6yVMZx1547",
  "key39": "34dqruYQv1aavYs9RLyfq38bdz4XhAvSCG1ScAbRUXyoTe5Nk7UPUqQ7JpprQFKrsoYvTToQZAnmXBnrhz7z55Xh"
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
