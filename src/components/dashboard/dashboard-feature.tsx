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
    "2kUZNDAdYS263vGEViNmh372YzuZUuGyx3XN5tris9yTa6BwAA2fWUpgMzJedyRriq1vcYwKatjCTfuYDS5aVvz8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UXa6GvF9GWnWajUya93n2t4nXAC2sQkMBpmpA7yXjb7htAPLtNyGgXXG1DCrmVC2Ctwr34o4ZXanjztsDNGqYiz",
  "key1": "25LVXC52S5d7XH2AySusazd6B6q9wVtAsuN8wgJGFndLBSQATrtkMkZuQ8DGjrtw4AGr3hiQ28yX1vpW1pD74M9t",
  "key2": "xMKr5rQ8VHYfa7JjuMvJeBgtx5yqmAoUsdEE4nkuj9BnWPdBfhp9HTwsEEqXgoTAh6emtvqg5idmzbdKUE14ALz",
  "key3": "5fpYpN8Y8uKGneSNMm5CSTdKUFMG3w7WaCwT8kMGa4f3PuDEyZPZ6G4HF4pesgPfL5PYVPxiobStZxESsSynoFBQ",
  "key4": "66ETfTUyhk52XmiWA1PpkgCYLU6VHLK8f7pzyBxQ92xK5c7rv6FqyJwvNDKST6WPoUpoabWKsFssHdgHLfxTtTsc",
  "key5": "4c9AADDc8uwd6hiMCbREwpxM8nHbnmFyTfwTd3A2rVBu1zSrWeteb2e3zN6dACXaR52DH1NDsinMLmWnyo75nbeM",
  "key6": "7LB92KxkNfsmUP21iqXRCcrCsNJCjVThWN8wEVkYB5x1w8VfYeeo1B73Uwo24gSu4JcnvDYH24tA3oDsfi5YqK1",
  "key7": "CqVFxBFNauRB8ihYFj3VrWktYyGugvY5VHU27ZdjRg8xbpPWkFEp6yUYhrWrsumjTV7vStJFN724HisMnSfukL4",
  "key8": "2hjiCY99i1tjU5QmkWXWyVjNC65YWv2of9sdJWqLB4EmjY7PLzkGTdkyjGpkJQUei6577ztjgBEdM1HQ8eo5Bkv1",
  "key9": "5Gt3SWXdGM1dvkL5xtYQErr9SuVTJ8mSHZ6PtKswQxAwYdtab34roZkVBtkNQhnkWg5tPex6wmdXtsg5ovfnPHYV",
  "key10": "5EpxpmqB2vvrewF913nbDCQnRnZngohYXJDqjQ6vhLgx7vsBcnzouhcozV675kxJP2xTYQzRxiszKcJJPtKrH5m8",
  "key11": "ysJSwnoD6gdRFzLnLRuga6dxMmydLyhWGjKBQMQbkTbnm5Q6DiitUs39J1j12UNTfaxrWVkc7x6CUeWFzs9GjD3",
  "key12": "4pWh6FbbLiJtgsYdAc98FzgeaBkK3YjQvfMFi4RLjQUEA4Vj8a5AcNVEyzYvR3Evxq4wweGCHPCJmCwrDyhCjaCt",
  "key13": "4vXAbufXNEX9EsxVscYQ3BJvx6Z4GMFsXPgmk66oRnMEpRgNbvB5mKDXFqnZ1yKRF6DVsqZn8MULJESniAqmbDBr",
  "key14": "4dwU8iMzc75WhzUW4JUekmAJdvmJegYRCyxifq6QTALu8xtVPNPFEzhppBx64mjWjP27aUNNmWmUoxVp4D8fTVFe",
  "key15": "doj87g1dgcqFmXwy19tHkktRJT8L7GS1vxGJBZiVe8dPnNMiEbpG91HH6M7mhEi58gqCAS4d887Xm6ob7goDgcK",
  "key16": "3rGzon7nhAojAEP4epDtnVbSSiF8Gsna9UsYR82vRH5akFNQfwrsPodVasaqaN36fXvG1bNQCefBn9EgjLhkA3w5",
  "key17": "457omgvUhKZB7ZPKVzX2xvZ6jfupe2YSV5UmoJ4QvtXKv3yVQ43Gs6KrMRQvJqpULVnVbLUsXEmqogTpubhtdNQT",
  "key18": "4b6V35S55SFT5BWRFcgCDvrXpCkczetaqa7TL6MpYitAgBqccPdua8RPQk3U7abuwcCBAQTX7JUFyX345pbA88rA",
  "key19": "3M7mv5K3qFKE7suuzouGdEMjbbWBtmc2GvZoTwyXwxtapYFcUtKLJiezKKDZTiCNTii7qKaw9dGUrS4rw6dUZdMm",
  "key20": "c2hXtWFLRxK5BdfJW3UjDtQBxiYgGRaC1VSRNM4daxF6NWUSGdUFLuecwTUqxaMKxPBiNhsXQHRs3Xzxd8LAKzC",
  "key21": "5zZnoRg76KZY6ddrNsfnc4EDpPLQEpTTcmmYeKybc4oWUC1sUEgPucpDhzuVfexYVMUgQYukeSThjFhcN3GHpoKu",
  "key22": "4CDaD3HJLX3gEfeKi1S2AMnTsDVtSDpys2mfewhbXA9q4rrBZgDG5kzdDUAuCr1Tu4CmBFoqkaKbQQNGMb3eztjC",
  "key23": "5eY3DB8ecX9WmQRTjPJktXFy8yxc5jewLpuMNY31L9grpQDXUuW2aaCwaEu7575MN2j7fsnVtbZr8fuBKZfaK2S5",
  "key24": "5TT6H3cTJa6HooCkmoadzDMK5wo2kcqjPAMdsKx6AdbgzUPxuVDnp5yHA29Qj5e1DvGWic6K1tvco75RDKAc5yG1",
  "key25": "2Ye1eKrRjobLeGwvrAagfwh8V62EZRbMJfp46drF7o8kyCRcSeJvzFRLfMYH3tbA43U7bHkoTEJ1jauyakpuFgBm",
  "key26": "5rTwCSnH1GJLT6vZbDdd9QsRBEFcLVzLLFFjJtzhK6uoj7Ptqv6wCutXkPheQZMWKJ5c3nRpKQd56xg4jRLiXY2Z",
  "key27": "YnjLS3gqLSn1kCrLaMGtiUw7F3CWJHcmC9HLEwa6gwZLxXdLPTrtbNRZ8bDYKzMZcNqwwe9kb8EsvZWUqFwhwcP",
  "key28": "3ig6D4vMQfWMoWV76LdxoitRMPGPd1NWN7hquC7xcCp3tkLCFoNjxWANPscYZev5Jv3qD6iXXauESy22Gxm53P1Z",
  "key29": "wcRfdNhW13fGg7WYukHwJ45e1KJB71FS7Edp8ZCEC44ep49wpQ7tskMfzDoC6rN7rYZZYZxsNC8DBU9PxHyWS2m",
  "key30": "4QWirmBxzCXr57EXPoAsy2wrWcVTWKW4LxkE8pxz3hib5wKhLw5d8XRUdVAD6t3cbpUW6n6xmzdzppTUwb6NFvPu",
  "key31": "4q2REL4WnTfUPfcUtpHTYnVukc8BmAsZiSgVumcRkMuWcp6YPuweb4p8nWKg5xvfjKSx4z7chz8hMx9Vg3uNBuAZ",
  "key32": "3BEX2vSuD8bMZMasnm68VxwvSyctjzutzMHWrLCZBQ34kcKZ1nutzbvf9XmKTxssyqK9jUtL9pazruZ4rL69bCCJ",
  "key33": "32jHZ6zvoXUA4L168eHr5M77Q3K47DReN53BpSEjoDHXJpostWTRnKUyBkga2NY3hARnaQAbycxSoQ7aqoRb8b4w",
  "key34": "3gM9xRLUFnHFiE3FuiVN5QVLp1U7DD7q1cbnWj6jKd4Qf2CCNAJ9aQdGpZJUuwVm5LSqLikuBvj8mJYp38GaAmWc",
  "key35": "36iJfLbTcUwYG5YuHAPZPxqAwnYcE63541Q2K7fzUhpvhSHo3Ue7PS8JqwjAqVMmrWkjhQJ8HkvMgucZRoscj2sS",
  "key36": "3k81sJ5nhfBjpMULov3A47gV5QLDbFYzN1nhNirtEH6dHLQA9vh3pLKQZsazyQUG4fgPBusRAiSr74zZPKVHyzHT",
  "key37": "52Y9eNNSu5yzMm4KzDk1hLyRQefVwG84b6thmMJByg8Uk4VFNb6vV3J2FHo1E3XHxE3swvkkZdNoDUEPfrWYcRir",
  "key38": "NhPPHRFxuitofY4dVMMCwyTpqAtno7pvzpAMvegrpVVqYvsA6h72XCiSN5qDT83xsBxCB6qF3VDVKppZ7PAq2br",
  "key39": "2KhzU3LQq82BU7mn2yY2fUgNAAwASRZX6dPnHMLyHKULMsFgVkJhNCA5L3wZXTUcwBUhm9GXVpQYtkM3Gqg18Hcj",
  "key40": "WGjtmnfHST3TG86rnHEjKasadqAc5bMBz5MteAKc5wEztwvqKnh5Wms1MX94yyYwccHN7jmirrsdHRD6o1jS5xU",
  "key41": "57bLnSWp1KsHej8phGfbv8p6CYGXrqKhJg9n7wfBQEbhTtGB25yeanrARrSWMtGDLfnynChkzZHNxtEv72Rixmsd",
  "key42": "GM8n9YRTgcVwPpw7aFi7B5BeTXHPMB5XN4TAkdq8Hk4LwBXDNKZmSXQ2qzD6Fc4A7QNwfGtK5Jo2sqbty4fq2Xe"
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
