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
    "31sv4FYnbjqkMzpYYbWdU9C8pf1BJMxDkKoQvzty2e5gHWJUbz1P5hQccoVLFWHqss8V6aGpL4xtUQBmtmTmFhv4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a9dvVGHU5i6g57Ao1Ud9P2mTjBv18e5BsSACGGjvadDGLYNGXgojmkJZnxXZhJdv738ssfykUTwFw8NiEXiZPkb",
  "key1": "KxJ5J1pJAdNYwjPdos57kuvaYBcLmyDMSAU9BX8cDX8Ljj8LyWUJkjQjK4f95zWZMSTGuXcLzuQzaRCnK81p9nr",
  "key2": "3cz6AUvERKLAJqwz4nB7eGTdDUr5hgNZsCPRq8TWe7rNXn3ZtCs1uWHs1CE8r3sz9jkkx4McmAnSk8ZCALiiT7KE",
  "key3": "5uRJNwigR3HbTUiE6dJjdpSwUi5N1dbfHx4aSyR2gcCvTpW7xxfVCAVyGQUkSr2AX411zvVUtaHZCFeQopVfqcXk",
  "key4": "Csa97Co6wybDEhfkYyWo1mrNTZFbgaVaiJCddQQeauTiHto25cajDv5qW7GC3bmWmkUDuZaoayKK9KzGY4hKitC",
  "key5": "41e7sg4LeSpW98v5bHBzQwZKjgE8UH397DE1v71wJ73y1tEeGEKqvAYpeAq9kj7HPj6A1YX8eZvtwQoWQCD7cY6Y",
  "key6": "4XrknUT43sgSfdq4bYLZqZZ9G5bFqdf2HmoWmHMX4ogjUCMb4TAsPT63jvA4UCx6LPpNg8iyVZ2EDFi2xR7TL12K",
  "key7": "4a21JDFohPey9zLp81n1DNjqvMWGmrkChy83zqNWNyHoK4bavapX3wtab95Fx62e4Ae2DVk8afkL7MHYAz5pSAYc",
  "key8": "2cTUTrxHteZN4sWU6gcZ39wmX8EGNDzUGTzGm5bpbXNkw3YHs7PnAisB9xoxDESLsPpJjuBSqWENVjPTJJcjoScY",
  "key9": "hmYoSwQSRtRAYJf3NtN2qNV8YMA29F7sxT9Znwi3VjsFWDVWBMC2bEkwLf21WiCPjv3Ewc6ZZU7wnnBw1H6N7Rr",
  "key10": "34GQx6nbUyc7B7eGPT5aRhLGvhWELJoTY2Qv4wLybJBa8voCRyEBKzQiq8sdT4mjq1yvPH5tgp8yULVoqcPybrEo",
  "key11": "29WKeM4wv9gnCziVU69cm5qhh27pwaMYLwQUMk8UySnUu9P2SwzYkPDXQ6qEFVjY8GCZudMGKBxFCPbcGoE9NCKU",
  "key12": "1jWADQVUDDyxgwt16Y97JMLLr1Pi8sVegDnbGbcgPxeH1YGsr4odCyxdnPxQxbcTrXrqwyFGq3Pve1FoauvPYfz",
  "key13": "3JpJCYuJEUrSQYUAZoNK9JR1tEpMQXfFkCNhP5WeopiKfaiPPnJ9tDxhqiaMtbsNLoUz2EzZ368F3TrurGghEg7s",
  "key14": "5uoucKhNyZxBery9r4UeMH7jVNLGfVghfzmaxXLCCPSQadQ7jBTrFze7KesUaTsiTH72eCaJcyBhaFestS5Mcqex",
  "key15": "5diJqKG7M5DHo3BVigwvePhv4mbutVTNsjKynfofiPXXyESwFv23NaFqXfyh4VVCgru1jBXRtVYzySwGCZZCGYgG",
  "key16": "4RCoo2LfCSbhEK5kQXNQrYByqhptZvdzmQvraLkfFVw1kFUhQc54oyqi8hqWyxeze331e9HnjqJh7TjQED14KTX8",
  "key17": "4aXH6hcS1q1aTe5a8pYzPV8EYrQrkKU3uoBaec9pgMZC5P9QDmh9B6aDdmFUoU5UUGq2huNnrFMdFVVaB3oDdbNg",
  "key18": "3VA7MHxuu9eKenuATqU1jNuufWppiM9pDwzuwUjBVE7uwfQygodKLAuSWeeCXgzJuBCHXaEkL27DUrDHjcpHhqNw",
  "key19": "47adF5fh6xR14e4q1PFwcWPwwNDnqJn9LMxGesYXkZnq1GbtjsJMfWUMjc2h2eF7LXxdZv5ZbzRfWtfZRBEwve1n",
  "key20": "3zfESqWbSDaZpiQiWJniSC15Hfmuz4TKXEjwyB76z9A9agknchjUDAd6GNcKMjSraFPBPe2CUqXNbaTVPhRJnZro",
  "key21": "3auZTLdEr5gtsnrqjaSbFEMg92Jqqc7xeS9dGkij57pzhnkEgXykNHw1bundmnXKEEN4qaAJTivELkKdsSH3E8vL",
  "key22": "4J6LbBvFwR9qEtxopSGuKDUV5iZ7eGt7pMmq234rSqeENqaTALfLCtEJhkmWsmnBgnYjsrAtoVmyioTqukmPrkow",
  "key23": "3TMMmjPwihscse6VBnfB1pQ66md6BMJR3aL2hcHaAEc8DyJz41mpgWvicMt6eZ13cNSvyDeRJL8vxEzf4KNLoUVr",
  "key24": "v4pGg16Y9dAn6L2KbjVq28Tg1sTcrg4RZThoCeMUbaHSyqFxsX4EQ86spVFDTv88nwKxCU3yxQzDoQf2P8cFdg1",
  "key25": "5GKvo8BrsSc7rd6SMVk4RAig1xZtcbxBWhq49qkntDhP6PsKEq8rLRvRCSja33MC88xsCRJmkhX79QociioGm4sR",
  "key26": "5JqTJbQFcr2Z5wp4tLZxKNTT6QVanrqsRwVsNKEvtw7stmiTMSRfz58S9AUK8LJ3jpDpUHSpYYE7yRVFPLqefhTC",
  "key27": "2VYb3cA5QxpQPSD6wUfmHWhrfCEubW9LuZyV4SkoPTKGiPXGFewBGkbKCmAEygMY5zfeTRxsJL26cLKADsYgkP2V",
  "key28": "n9JXWs7YqoBtNK89wTnKX9Cqmb8WiarArkkpyxDVVxrAufJzxcDkM6nvVPoHWHVeMGTE7CY4Eqho95xirqdn5Ly",
  "key29": "s2eU2sGjYiZsuBdbj4bEnWydGpaztm62quyWoiSbHNTxpPd3e38k1PycFoNi39EaxmvdNgDhwHGzSy8MzaVwsZw",
  "key30": "5q1jUYYnLUAFFHsu9rwueGb8CGozjWoXmtzYa9boZ3WWXtsqo9YwChtBah6RjHZPBS5MLXSa942foxznjaW1zSCJ",
  "key31": "57cKKtbLQf1EzXGPHAcNhtKtdtr8g3dxpeKyCXrAXJRnRQ6W7WQf4zaf8FEC7tgkF2rJzy9VoJCqYtyLHgXc7bER",
  "key32": "3Ux2qM8qEXk5pE7gqfwVSNK1B6nQ1yyCFJhccMA6DDCta2Fh3qyT8BN66Z4qrrwmfSmtx3SEpW4jc47hUG3hRWMQ",
  "key33": "4eNbUSLb2EpwwViSqxPZqpKGbx4pDtsWc2Pfv6enrYf8LLgcNsY1bexBtu8nbw13b6tdsA9HJF1FUMtahgQEo4DT",
  "key34": "4SzQTQDbHs7nnNDtYaWxBXrn948uGtH5PhBNVSsMHMBJnWe1Db6Qrmo7Q25qLK8f7aNrtKXfwieuedxVYRjPH75M",
  "key35": "4LTY1WbvXvRL37kBLCaroR81TS1XYnZL2v8e3zvDw49NQSWN4AAqsyGT5t2EQYdzuTbE9iRV7SaBftWnhmrnFEsm",
  "key36": "Qe9T4bkCmJZJrWpkjvM81fkrxoB4YquyCTt1bPmqH9aD8UXz5jWXJs2fxU2LSg3sh7ANBPHdrR9rKErUpT9gGz7",
  "key37": "4yrEpwRbsr3TcwTjQy3tjdznYu5M1Z9nwyKUXnC8GNvSjNm7i99y4aVT3GhvE9Fay6m7gG81svhagt869N1r4icS",
  "key38": "5sfwegU9SaUpJFjGwoJHiEaTDs6D6hyBqa9xhBJx3TMkqD2sZNtPBTFbdkr3hXkDXxH5LHujif2K18ZNsHXYzVb7",
  "key39": "ZK1gHT82JBsp6mnHrgM7a84anc5NKG7XoceNjTVQ9sRXgCCM7mdkZahUqWfmH3nbPfx9MPNpuSVoMVATfLsGDV7",
  "key40": "4PEjdWctmBLpbHa5zLgQJd6Gt41fuJ6A6qAdHehgz57tpxZDsrs935QLVmiP1zvPXGE9TqTxj9mrenuSCMa5dCt3",
  "key41": "5Q9bEG7TEd1WqTFcTYJCm6Xtt1z11ptHHLnuqaMcExsWMUFeD7KQXwgZ6PbxLptAJJ7EM85FL1vrS3KXaY8Pbfpm",
  "key42": "DRjbV3KNpPvZjbxa2J9MVF5VY7oRPUPMLZsdajpxuJ9GhfcsQ8XYcBNynLmsBJ8fuobMzyKdTXh3jmgv3pAd5qU",
  "key43": "4DUKZj2oAz8ChXN7yrjA9hBGtapmPB3kZzWqX6WMmfJtYnQtob7bP2uS41mwkt2drxznWHdnhATb2JeDcA3eEqKC",
  "key44": "4XkzSLxmDdMowPyfFga1W4VRf3kUU84dybjoV9bNnRTep6CVdAmhaNpbiDSoRGCQLKj5cipjH4tbrbDeTdq8RArA",
  "key45": "4rZ4yVEtKXP1CeSyqPiE9M6ceHJYRDLv5VexQAkndC96YRedkPbfrEwWMndQkk7xath634tkLJMkahrWD9kxFCVS",
  "key46": "5LzVTt41XX2QKMMXvkuC3i7ZrLAYe4hiuWS4eMNneMYVpJZPXPbeKAd3sZbhYPCfvwYqLfry4WPajLGwa8GZXDX3",
  "key47": "4HgLUV9yLpXnhFYJWndRdwpBvR16WqPxk4UcVaC98u7gGocxXZEYmh1T2RbhbZGqyik1wcp1qEX5nZH8GqyWrfiJ",
  "key48": "p9FxQDo7U2fABkwPvg8yRWUJN7ZM3idyT5YWBKzKxCZ7U3DqbredyRHACPBFWpp67ht3uATqP4GMRHSAqVjGGU1",
  "key49": "2RrMGYQFFJMnXNhKbYpSSyhzfaHwesg3gUNptD17ByrwkF3KFUeTqajefNYEtJSfFtMR6WACV6BuiwmPQQMEvNSu"
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
