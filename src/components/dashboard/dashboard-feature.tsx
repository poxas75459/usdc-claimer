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
    "3sn7SwHuqZMaxhJvaDvdY2QWrNewV7vLZZu8qiM8KTYqyXkBFAntmZKPoyLHCJMtBj5KKrHTFK6Y5BtLM79Jeoyf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rYxsE7SeUqHexBPousEmLnzGkgyB7D8XN86YVeRtxXFvtMeoHFLnpV5PwkvsQXHYDcmGWKB98UxwMP4e3nfUkDw",
  "key1": "4G1ydz27SNoay4Mgd1ijYEXqJuP3GxDrtoE9WHxSL1U8Pb8WPdduofJuj6BD6wrXsUaTBrSzkA8ntz39FpDA5xj",
  "key2": "38VjqbmfKpuJP1Hxw1iJrwYBUHusfHFmAwEihFZkeWZuhYSxxFJVrfFJieUzdgbcSp3Yd5HM4P9j4PFmvirdeo1x",
  "key3": "5HkR7rtd2hcqNVSDh49huucJJUtKddkqxTdV6Nbfpbvvg2vqQra4MYsuBgzZ5iR1gRWEwYEPg6HtWL4idyz9icZd",
  "key4": "4ThouD6ox8TaPfbQ4MGhVMwvP6vAWQKKUD7JJc6LjJxHsr85ojbJtWaMrBpfW4r3DiqXjWvJDuKLEPY5UctJyz51",
  "key5": "2pzZwav3oxjhhoHXj1Kto2tHmpKB8Rcz3UmbWd71fnjQRKpq4k5eGEXzr64VfReG6r7bUkgwgy6tjUkVjja4fXYn",
  "key6": "3oCYYZBSWsme23KhMa5T4hMNeNS6RFtzSnFyLy87wfSQWs5opKEozWQ85HcTWCDJuhjVYGchyVqeaYofJ84cukuT",
  "key7": "4AmZ161UWn9jmJYktGRbBqHW5qjkAXK9SjhyLEDeTn1WEB9QYAcRb9xHnJ7GDAguxpuYCeUbdkq4FxVmfX6SwHQQ",
  "key8": "2pMdCH8HHCnPPwjXovNXuETMeZZVoko8q2hhv47mYBfugcA297kbpM5Wu4LDcLwy14n51fN66jHb9RZWpbGeutmp",
  "key9": "2y3F7FK5fGK8SDeF5sGw5ezA3ucmag32XBJyYmUA8km7h4jp261RsvzFMdiWjtBeHVUQPj5v8bZdjaquReDZ1kmR",
  "key10": "NkqYJ2sZckremA3qHvobWKhhQGToW1MBEao2V1pwXQZ6K61LFGK9pqDcftvsyEck6j3U84QpX6ZB6t44YDSqw6A",
  "key11": "3XmirY4F4y2GNFkhjenBD7cwbMHGtNFM4WkajDuCh5rMcWCx1bpy4Fu5tgXtrzspwGpywAGmSVN4NMZztJG96xqp",
  "key12": "2y8h9vaNxvn3aHUUzhdbqZgDozYoAF82GqzX5maWnZwsp4KW3LBcGGEJVNPRtfq9RLDE8ufUrvzjLop4gQJp3KeV",
  "key13": "3qrQJC8mbvZyzVsrXupEz4vjVZxv3jpJTMobB734eQApgqhCAnEY9orvGoBZnpKw6YPSPDdC6p1ez2gpzAXWEHcf",
  "key14": "5LLMSZiomfSJDd5UkeM8Zga6Uhaid7gYreaUTWz5or2HurzF13DwscMcg9J6u7Fpb6i8jW1BHNVchAgNZS9jTx65",
  "key15": "3vcK6p65a1kwd6YBoB9YJeoVDFZc3L8rnAzoEfyMMHAvAqXamuqZPfUu2T3JhiwH1udpSp6gcxDhWThkBr2CHNk9",
  "key16": "2oqPrTk6aSxC8ZwMNavaUz1x4rcpMZrvafT1c8YaXRt41xrga233AgerCrDuauU9z7qWLCYqwxxEcH88UqWLzPKQ",
  "key17": "4B1bnL7p8BNrpHPheKebFma8bRg16z5EjZjDG49RQxfSf9tzw1hyYvaMhkMvhVpLa1bBj15VTc2wCceictXUzTiv",
  "key18": "3s1ekc9xAaM1hQEozRa2vgaZPPP5bRbempbnfJGgRJiT9DsBpdAw3rXNcaw1f27TcxcJa5MbqCq2eP63NMoEXTsH",
  "key19": "E8YCxUjx1FtFHFD9HoH22rb4dakxbt2b3YMMhUjrjY2MHjaidUE4rmKK1FxMo61C5sMPUBQpLATXbUp1uBGRCpK",
  "key20": "3NHeRokZHtAeXuhtc5VFUzsK7QzZfJBVU7RWAg5VapKThZfgSKx2rDvmFZcKwL15MuSS2MeY7QgP6BhbfVbs1eYC",
  "key21": "vunFvb8VYLhi74vKp63na9c9SHtAonoA1yNoPJKfBXXoNqS9z348HGG33W4dYvvefQFYEbFoWquWqMCCnGsSQFZ",
  "key22": "5Em9sf69bkm5DfBigfrVMudo6DvdRJEtcFGCgUzFMjqUZw46ZL7XzUK7MeNYWZBmLwkfkoitm3DbmANbjbmBbxvF",
  "key23": "4CtBG8DXuNQL1cCE1GRUcqL4892Zcg3YRJm7zpaiyuDqaqtrKKw8td1VYe5WoJTGrny4tgPHdViLTVk6Mvdye46e",
  "key24": "4k8j9nE2tpm6Rdf9YW1qGAU8KDupnD7LTDyLw86yGadDE3U2xRPTDKQvdLy6uDLWEdMvEbBBtLcoZHuESew3TrRE",
  "key25": "2QqjWoj2i3YbdsB6XnGJERu5gqDxD4negzYo6HsFEEmrTVcBBQYojBZvFqLM8ruiCeLiMQsFSYALSwerKg4VDYZW",
  "key26": "3Tt2cV3ZX3YhQbJwsa7p2RPqV3doR2AUoZsKNAG6MyvuEKhTNcprZbunUvWiiM82ugeBSV3Hto4hxKsGVDDwsb6b",
  "key27": "2nEKmM4wcU1C3xD9b9d73SWr7cM8PST6CbiCqN8pxCYkxHm4f69Kga9GeqREozH1X4b6cQaorcTR5GVUEdSjnSeR",
  "key28": "3jzZqngF3TZrsCBEMKQn3ShnrVV2p8yMFVQGMv5vHyZ6qTxGnjtxwCB2Eg3RgLkwLYMYLPtErtEctsBEDwm1PJ3b",
  "key29": "2hzvnKKCjc5zkoYmL6xzGoo85H7AGgqK37FzMBfHC387xvbyNKW9A6jvAus42q7ZGSDBz4xN9vtdJyiXjH7qEzid",
  "key30": "4YKnLAKzqbb8F24EKAQm99sF3ntKB579eKXcrHLmPyEGJfijDV8463e7YRdBFXtmQkLcHPzcytPKhqan4DY9HwCm",
  "key31": "33sEaX9x193zmjPbQAg3CM6nemXNtAXxPESTLVDTFU7iYYDf2ozfcjHsUQ742qbYdVPtV3oUnXN4LrMzPrA5WVZ5",
  "key32": "3vAzckuHvk1dqqZCQtSuh4PvXVFu7RoA5qsuPFtkCYpRgcMSJtoEUrTudfGjLPmeDZ5uaAymB6HWLpHL1stZtEPo",
  "key33": "5f6PA8VnF6TT12KroCFgatz7GMXJRrZBMqNadUBuRsmmB7SNqxAH3ZaDeZpAuGSDf8FJkBqgqBPmwyqikdCVD2J3",
  "key34": "4Gd8wJhoBty4uLciox37U6i6DDvGYaugC5CVLq5jd9KSFSaqfJQrKuykFer5XLNdKJ2NJGy67uxeVKhHvMR4o7Eb",
  "key35": "gcaLixinA1mEBVMXMR7EpcT8ktSNPkL7BH5AsP7tGWTNkn5gFbEeFhMCzgApvb3bYe36PDy3eEuCpZdgrY7wu2A",
  "key36": "3gR7r9N33QYcoG4UYsWfKQVNEJBn45WVMWHYmpZKBKcoCjChewbPXBrL5wja8rW4vy4MWmbLRbgsy8vTktZA9b5p",
  "key37": "3iZr31akF5xRaeYR2XRZYQJrghXiodhb1TmjMQmXnZJGBWQVdp5HsuThAwBAK6wb7LHgcJBeUdD3zszaq2DfhvR7",
  "key38": "5vmHbRyZstzHe2HZTop4QmYw93rV6LhQHK6xfSv3rRjXhGzyFSSXi6GdAbMNcLiRgFmFheFTuKUeYG2LMz6aUPGi"
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
