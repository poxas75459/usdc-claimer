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
    "NJirKqhWbBoHqFHm3urVCVGRCK4vhm99FZq33gjmKd3JcvN4ZCbANyGnJquRgSzCqRo6c3oPxxy6fV9n9iDWP87"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GFP8fRpjtq8AtPAtQfJJT6FXnXtkguG4b6pt8dCEUT9vKU8dTqTDhm2PoEmwb6RnN7M3atKRFMYMCcDMHEWk5Hz",
  "key1": "2ymTmnUfEeCaLMZ2xY1x98L2fKMn5NMN6vHjpwqdRZWDXkKbVUC1mE8XjSe1ssLxhbuyDWTfyqvGQW1nNJyMmKD3",
  "key2": "4ti8pM5iSKguWwk2YqRxyvi66zRztXS86op1TvfXfsXvNkeJr6dPhtw7aAHa9UxTCUVbntiH3e67eNtNTTaMwALy",
  "key3": "2SvSFrWhoHnyvrFNB4Z9n2o15RCKL1HxyBaukNRaeBGwLMNyYMNhZKKethNus7CpPZjxa6QZsk8eGE6Z33zpXM9n",
  "key4": "89BeXkgKH61vbH8fSeiSRjX6P8eWayR5Zx7kFia649RDsLG1obMfJUedtGBtPEB2fnWJEvXRWMtn1iEpRVvQ67q",
  "key5": "4CXBii3bf5mJkTyNbfzHg9sqVCzkg4iFxzqM1UXksyLUzVNx7p9TKG8i9oLE1gkkZ4xvZsicY2yBB3Quge3bQSs8",
  "key6": "FPHs1bzNXat5rhBS9WZ8nfPhHdG4rjaiRmhxhmLvY8FPgTWGoghZHYwSJ147km5YYv3sS9kehiiNUVypM5bn68g",
  "key7": "JNUwQ7Y6Hug9Hv6UyLnhsGNaoUigSz194h24FQzKNDaGBb7Px4YMMXAm2nebSbdXqsLkMGR8HLJCoCiqhRzEG3K",
  "key8": "xFBekhcZ5NDE69eZJwbP4ybXGpwWaGgSVZzHrYfyuSkyjpppVMWETNpqHV5STdJeoEpKqCPcRL6vpvopa8aooGg",
  "key9": "4AojVEYpvCqvcCxqGJ49FJKi9PcQ5C8nDopVdBvZWbTsFcdvNDT4wsqeB3BnwqKTBpPXfYAUKQ8eBPkjsffSCZ2w",
  "key10": "5y5ZvSNesyQ6VzjEvuSwjSAAcazLAAo5DAuAsc2hdgmsb9WDEsu7r8HxtuDDHUXUYbuvdFRMizjHYYbm5X64rcYB",
  "key11": "3rsq1ktbbEW7Zicwt9RiCrgvRiGFTQej8U3aoZV6qY8zn4VaYWgRvHCGMLv14GThRGuwsLwcvU2nKVtZCiLA5DQc",
  "key12": "4ac9b1CZmi7aTUfGhvw5iBHtfNi4egmWTiB9QaMsysPWkF7hULCYkAx5LH1RAwAgmwbRzvUZss5q7duQLY3t3Mdz",
  "key13": "PaFoTdzPGNicBbfUu8vCPm5dnrsKAJ9C7TsyXWhZMAW9Xw1sC7RGHGM4bVNuDBhmgcd9DehC6vB7nLXmw8HtWuU",
  "key14": "2Va65zA92ZWdmCrS4tD1rkXQohVnFMEcda128rRaQ6g9r4SNCC5x284y8KYrH7oQjA6EnBts6rBNdFUE5VAqGvvw",
  "key15": "5FHg4eFzxzWnGcNRZL79NVSAMNdygzVxMYr36JWNNhRY3JwB491CkpHwkVRGuyyyUhBL6NAeTbY3mamufYUXAMLb",
  "key16": "4M9ej88fx729mrduYDq1Keq2bkY67hHvZj4gdVMFAjk4HqZsPDfQdk5tniEbFcWZ4HJcX3Ls167aoUwy5R4w4ZEo",
  "key17": "4MykxC8PXQXtZUbeWh3qiYXu51Wsp1bTbgYzFPTjFnva3fB92Cts7fFjXMrPFQmpVpNo6qhn5ZN1dA8CfZG96XXf",
  "key18": "4n9mJeEUfwrRGiArcJQJM8PdcYYBJjEjXyejCc1ausRs9u97Ah3XAtUoERaGvYkhq84Sm5yDHo3o4zEUk6t1WzDk",
  "key19": "3tuFbpwqWXaMYyNNyrxP6USWheU7rqsRVNiBBkmZrG1mMtn9TujktJEMb8tLmv8mTmqoTWir4iAMtGhARtpFbjvW",
  "key20": "25SG3GqvkaKAPnCyMWaSFrkuPUqb5GfGVqzovDt1vd1LHMtxCiizxB3Z5EAJkFPM8taiLbVUN2MDuDkc2CQX7bcV",
  "key21": "5R4hQQiWWc6YHvqz1pYh9n3AkLnrqnePbf9oq2Qj5U3zaTcBD6YBN9uL1LgGp5weLqCKosaN1Lxuj1couci5VYG1",
  "key22": "bL6zdUkvaPmwWEnXmgjZEz3QmdQWvCExoV59CaLdbgfLJFqjsGjVfq1JtoaBGhGbKAoD35fRx8DzuXaFtDD8XXH",
  "key23": "4n7Y6npHGm4R9XTeZxScGsuNrik1yaxtXm8NmMYAMMzVZNgjXQThh8LgYuGQHuJMmpLKJPhKyYvs3KEWELjpjAM7",
  "key24": "2aqRc4fN6ZFDMhQRN5d9dH1rNgERzR6e6PC1LF6tqmYrMFgXsu7jKRGMdoSZPL41Jpzczi5ax4xWGXUepsqmvTfi",
  "key25": "4HeXrLEJdiLV7T2jQQwr5C5Etfd8TqJFieMdUu35CT9BAPC25jSNBD6conMgQqdHA31AVSrRMz35Y7BTqx6nA1cH",
  "key26": "41gPcxykPdpaTVtk2fp5gqT2BF4yLFrv7nyzTxMGp6xLSvQzSEDb4NmYBgA1iQHu6yxsXE8pskSezCitzYVkqMB5",
  "key27": "5DsHbu5fuXdh7ostTUJQaoNB4eXTAzhE4PWNzkzUa9V6ZnzgWn5ZaZYPzqXixnauWiXgimX4vV6681vCNHgjHnAX",
  "key28": "45msiaPkJ8LUypAsH3BWVXsAdw4tDMoUT1j8hVDyoZ9oBUZVzfc9UfnN3anwFMdGwLFgG2u22vJWdFAuNde9ckc9",
  "key29": "43tErKnsDDR6Y2V1fgr3LJS2qYSdJD79GigvejoFFnxyDLb2XdjaRMZftSf4gkVyayHUMs3fAuHBUBQX4MehNnnG",
  "key30": "3vimH2rika8aG6RSBqEzSTSBVY2JuCEnQ38XPC7GrwzLDrUL2UhDLhNJ1FyYDuR2LA9REz12dthqt3Vzmwk5QXrY",
  "key31": "4dp5GGAZhpsEsv5mcaj1bfDi6fXQRqCsCfjTUiV8N67FkNzejgx7Hp8pVHaTEa3dDu647YBjE8gobbyyNQKqMEu4",
  "key32": "vZbbFbBiz672NxJRrrCELsJty3D2YdBrDe34QDkenCjfpov9XRrGpivQ46L2f6jkrvvarLjgEU4p4curTpQeKxR",
  "key33": "FozxroP9s4VYWY4rnbgZgZswKGsrujhau41G7XhEGKrwGHaYPNzKUSeLR6TN4AktBzu3zpJp6JJUmgGW5XyxrqP",
  "key34": "5wx2aH6kSLkkXLKmf6VD482KUUpAcetPuPQNyfwMZ5drXB8w6VEAhocso59jA1HX7qDimFtg97qSxyoZUwdyCY1k",
  "key35": "dytJDU6rnPo38mkk97B9N6BRELxDPfw82Sbaf22Q6UJGeaZEJDUr4TdKiJBtmm9D58gjcQnDU61hksofpPq6fEQ",
  "key36": "5Rmt4VftHH6Raid1d9KPNAmbPSKQAC6qWA83tRuLfUuSWKrW4F5mZ529HVqkmqp1GDPKbwniU5JgxrfHASTXzwVr",
  "key37": "61DSmdiRpxsKdMZ68NBgXth7qoGvKZwLgqEZELVtEvvGqBiR2M8PDjQxFGGN6vLjUaZs8hjJWfaQsucRk7U2VWC7",
  "key38": "5wx49zjoyQnqoKRg8i56ucGSCyD7Ebfg7a72EADgahrQbk1iRGyCoJswrp1S4cAk1Srrsq9iYeEajCLQ6QEmB96j",
  "key39": "55bmGKHGLjR6xx3rbFmM4c7bEG7ugbFyV7SXVUqzTkf5oeMm9fo1BifG9tsPsCL7dzmGx1K2iUDYAT1p1cNTJGEd",
  "key40": "4Gc34aoBAtbpmJpmuAF8HhFKpfJFBPmHP1g56tycqXiHZfRd7cDXkt69QyaVABbu4KoESaDJuztF83j2NEddPmpU",
  "key41": "65pQbpDkMeSX2e1wioubeKny9hrqsmBqSQ1BZJS15HfXJSMTH9WDsJM4it1LpfEGTgXZNWLuGJtbjTDcmuLc1i6h"
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
