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
    "3ZdpwKJUZtRAaVfUfvMZTf9hMkaQSqxPCMyPEzV5a8EHjLTkyVDU6ENxhuR9aS27sT5U9CSm2N26Q4saPJc3A8KQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sYzPT3nbCQAGQ1ru5vmWoQbZQrCQTrWKuqetfyjrpEkTU4CDdtg1nvgc5L9kA9Ak3NseTp5DLWPu2GHTCqqzCYG",
  "key1": "4fveuFfL45YCXirvtr5brzUMnTfVJkC5CEMkvcKUcNt6soUw2g7dXE9cT3NwgyE7ZEHZaYWAfdy7812vRzRMUSjr",
  "key2": "5qDYk8qvgodD29AiY1DXA2s792mzXnzJvVna955T3oqoonQR7ChyuxrHiw2jfBKnZvPeuLHiLt4mQDbhF4h1SguE",
  "key3": "zZcZcDVq3SZRMuboTTv39EvHg7dWz5dgSE1nUks7hXWPyNGQHLFXnLtFjJMDn3bjBWsrkjcxy13NPNhpDFVnzEU",
  "key4": "2YedwH6zMUP8oFajFaF11tQNBXRc4JeQnqFJRwug96wuoBcxGNVB4jZy4rkqCDptnrmH9rpwdXnvwDnxXcp1JuLX",
  "key5": "4JqsX6JZrL29kM7j48d8jCHu3tt7ZRt84r5XaueAk2DHwoB4ap41tnPnSDh2uECEo78uz7dC4x7LetxtJDgSkpch",
  "key6": "jNz8pzaXZs8EPDjrG1RCbiXpwv3MftMULWYMhBTZuArz4C2oDUejDwgWTBva2qKwR9i3L8BxoMr5WyfkVk34tUq",
  "key7": "6734a3dBi1eTdr92w6KxWUiNfN8aekjAKUVzv1wHsk53DFzy2TevMTzUyS7tGwfmqKG4SjzR3uNcuna7AZ4zuPv9",
  "key8": "3698Mk8EstTm3wW1QdCBhBopfBJBonNvu4EHyo8jPvVfcaPtbBoDVmd6n1kawE9gtvoq4eWbQ9u5iX9ex3KRZLEm",
  "key9": "3MMTPQhNMN4D16o3HT9y8CPuoatkzdbSd8Rxxo4n3yJgQcSHQRkuK9BeR8kqKyeoLx8YsRqP6ZFMdZrkhn5TJxLh",
  "key10": "5bbajkV8ShyLCgjpp7S7gCMpgS5Ch8aFZHccUkCzr4H75MdDNzv4JV3kJa4fkFBgnV7JSvcb4QYLmosjx63S4m57",
  "key11": "4uRoCuPkkj6iRt9kgX54PMFXw6UkmtrEPDFBsSfsTAyQUcTrBkE27H2ShRLwAcapE81bxEsuoLVrSXdKx86V2RAf",
  "key12": "4BK9ouwj5VChA29u2LpN1hWv3nSG22Lnm3nzHFHBGjX7FgeNG9e5w1DTg9uTaByWBWTpkQibqCE1s2SbiFwLyKmz",
  "key13": "5TZY7goUK5rGxzKkDXNCsGndoyVevWxbx3DDGppCLnCSrxqXbWpGNSqLNRNBNbTkNhpM7LBiFApztBvdX2PBHJBL",
  "key14": "3FGYjysEeagyJyvMbk5YnXSNvs2XcWcu2W7wJbcy9s4xeCMPSTC3yx18cYyU3uisgfdM7BxFySishJJANF3v1MmN",
  "key15": "4BupaFSM3uyoJ61hfCgxKtrk7nTYEzixchTz7fuS5YHGuBBtwSF1SLPgZaRXi7MsMDm5psLbmxxMY12M3XnSRUMW",
  "key16": "334cNuwN4Gs1xmQRK4STexX58KrW2KybY6QZM9W1NmbVfWafnDqVEF3fenCt9KmMobZ6oXL7GaheHqkN36g3Wk6",
  "key17": "41LzRiWy2K7peAorRBDV9yuQEnekxLYUPPj4RsqXCLwRbWJEvy2MUFu3Yy4to1EP5jdBvQWYURUzVxT7P8EofW7J",
  "key18": "47pcoUeELbCdBN9b9yBEx89rT3ZGaNifmvzuJFoz4D47uA9nFnUdJ7nJJDKvK7K5AbfXdbvr5ZUqZXF6JqmUCbJG",
  "key19": "5r7BE9M98zMDX495Ybg3CAm4jcYBdbz1fgM8fJnjPpNuoYuGmufHRbVYBPtzq3RYA61xGJKtrhb8XQNnemP6gXhA",
  "key20": "2TKhmXpMNaAdmu1VmKtrMo6Jfa4vV5suQqK8eyiK45uStyADkyVEkMhme1oUbuyUKwwnfwHJtKMhRZgrRxKHz7Fg",
  "key21": "2dqrg55eWa8NVCQFyyczktqHEfsD1PsPUdLPRDAwy5YDra9ZqwQ8Gyiiy1C5tSTPCSqoBA5xZ9VGLTTyNpSio8S9",
  "key22": "4EVegvGK8a4Zw9TapB1WRG2ap5Qo69HTDkReCszjMWwjiEVZkexQh9evGY8jUYPMxmmxkMJRSctnq4kvSkzLCxcg",
  "key23": "5WakWfo4CaxcLMzGBfCqu3KdjvfX7vvEEJaz4qVpsiL5Fh2fRfrvaNqpDhhGKCnBcNBfHKQmNx7Ly27zRmMG4xj1",
  "key24": "2cZ8KXfAdVzGsmC8xzR9tzrSr2Dwxwja3okVz4kDVhc3FGmpTmQkxduE71SgGC1JtSUknd6Yb1wTyEmjq72FqnAs",
  "key25": "4t1mN6eBA1MWiXVMEfjJa7L4sSVFxeXSSsqwx349Na4pDYZtNuapTVhNYYP4nCQQ8oHruz7eEYAqCB4ymFiGisuC",
  "key26": "5DX7iyfg7ZgB9GZvxHu6ia5BkbZ2yFRctuoCpFxjmNvcdw7gwAGaViGpUqZ5mHqcbEmBd4dYbDTvceqhW6qDShqd",
  "key27": "3zkJSunNjUXMg9tRBf8UhBh22L1zawAcUxex3wCY2GaYG9DCXt591VCLpfL2GrKTjzZYYACgW5SVTksNs4jqwzGA",
  "key28": "ozWa9VhCYndDieZ4xyRkSuJAqykYYAphmS5dwCm5ZNtSMoDNoGuot4GDZeFPgJj8XX8gWL8gdUMeqPQoJL5sGyB",
  "key29": "63H9KvYft5D9i1Gz9wVLNkJnXmWJzC5jowRBSvV7fFNukW1qmee5sB9PzCwxLFUKL8xobenQMav2u57yGPJUAkXf",
  "key30": "3KYMYwG2zY4f6i8tkk4rbgKLRf2SGWNtS1UmvhnS8E5jjeF2noXfUrfrUT2NJYpNA69HfBLLMpbYSfYaXr9YZwUF",
  "key31": "4vgcQxKtw3n5YDuvoHDYyTxecse9sVbdJSSwsdGkFKXf8WP2BKHCpdzHjNuKLmcVLUtsLt82sfbdyckYdxY22Tev",
  "key32": "3aXkb9FRnLK3a9fdihA9h1hQbi6m63q2FT4sLiUzmrqZ7aHec42qUNnjHh3sjePZFh5LZ48E6MA54fGF8QYxG1Z9",
  "key33": "41kG6Zd3cm7FotwErKabhgouLJt2URRvgKuRWkzRzDMwuKj8r5ssLc7VWhVmMh7LAjUHNX6R6ua7TFsLy3xTdhZw",
  "key34": "2ZbMnrCBGqe7kFjxQgvVAsrcXDFoDB9nsAJZH4srLJpUud1w4a6Hp423bDpTkr9JiCsjK3Bgt1GTmsjMDgx5qed7",
  "key35": "24j6gC41To6zsc7WnUpAxDmreZz4WxbmQdpU3Bw33DgsUVwXFFNfkvmQFyxw8u1GfLyPMNDgnwPnqVEC4KzELHGk",
  "key36": "4oJJnzLJYrGDUnjxPV3ccLKkBnFKyyK73LZsTHFSi2zro6XYzm73LosAUvJqbaiuM47TcoTy8B5phU2jPMKLhN2B",
  "key37": "SBZokR7s3TzCYrHC96uUB2RbUCngDmKit4q6NtNVSfe31QvwUx7A3eLpST2z2K8L2v7SF8jBmLzZ3BHX6VgYbpF",
  "key38": "3B3o1vf41ezNbPbJpFmQYoHC154hDEFS8H5rvXZeKvRLGfqbpktDy51XNdpCesgWkRuPsK6kVaemgCFsP31pM3E",
  "key39": "4TWyhFasanH6jPCet2gneNvGSKH5dhT9ycLcKe5KKwBsrgxragiLANbVEd2VQHe6LkxnwDeGuwr7TcZGpnjj3iLw",
  "key40": "61RTAeHii7RuDzcQGsMZyyaKLgPx9WQq95VUKXYSNJc5gxK4MSKeq1GnckQYWpFKdQKRRzhwMVeTVJ7Trj4QVVxA"
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
