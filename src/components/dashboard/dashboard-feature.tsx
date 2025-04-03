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
    "5P9FP8EQFfec62Q1ZUbsnQ2Vwu3ZKzkZsFTbtfvwkuUseHApdSMJ2hApJNw6fjj2Py9GMbXAh2ddsoN9wQF3KwQR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rSBh6wPH3vsDYHMpZdSsNm5JgbYxwZAU8q7GHgD8Ypxvm9yjLXt8fhPe1dFbHshF7dDEY8fmh95AKZSii5H2Rb1",
  "key1": "5hmxsMSraHWnB9ygB48tP85DuxWQH16T1U27Hacqp4YTG7ShkX7SjvHSev3xNQpeUNsveeE1QLTAFpn2sgUQM438",
  "key2": "3MLrhMoD32MRSe9Gx3f1gAEG3v4kmbrSacgtyD1NmpymkxGBvCSyryVDhkratQywfsPANXrRRyePh7BiaBYgLvjd",
  "key3": "5qMEaN9ezP5NnYvprJK7obHscRW7hDxTCmdPmg9ugd5gN8Aj2adosQRs6ZofkBa88EWycoh6RswqkCPVa6BFkdNd",
  "key4": "38NfPEhWHKgSY1cFu9MunF9MYD9GthP5e9rgfMbqNrumA6icGLBz2x9HS8YAvDGXFSAbEMhBKfeNvTm4DoBxcCLp",
  "key5": "2jL1a1dK72VwaUnmopB4bdgKZL2H28FAr3QKK8FHZQNgxBxaHSLeDUaKbdD4GZKHc3YNKMxtaTDTKuKwfvevBxFv",
  "key6": "2ePNbSuLj7zpxEnTGfrthQmJgMXdcuxy2ncD1fPa6iPWgTrMFAzhmR4YtCSt6UpfVwzHkFwvZFBwLKXN4rY3iz5H",
  "key7": "5MGqLsDBpr6Gp22JC1V4Z5Zd1Ep5aG4pYsWJb4i5tm6K88BxakSJnzvYsBG45cgwpCyX5S4kgrGyCWBqAbxoT4MU",
  "key8": "dHkxtc8pShmHh8rWEVWLcnHrHC4YYS78eb3qqoTZDNMSHzbSp3vtyjMLoKAH9zgAtykZG9skLgFL7Xpq2NNn2ru",
  "key9": "2fnYYMEJm9r2j5NYSpWSNX8y1f2owLHGWowmBLp4j7Muq2v1ZtrfZehzB8DiFwekXV7FuWkkULHjM2fbfip9827f",
  "key10": "2btB7fUYsGY3Wce22Bi8DJnsMa5e4eDq4FtL6Lx7PSerQfgtdEBAjofceEtXrVYpzBHTroQ8MQ19YQztswnvFHqS",
  "key11": "3gziXmuoixuuPrVsU8REeR4VZXoM9692u9BkYzgzVsgJmp5juuY7Xz2nRo5ejWWmrNZA9Gu83Wn5EkFqiqVx1HL3",
  "key12": "theJVDpfEryRNJmswnM4q2XZBSmua3VwiAwQjyxDeLhU5AyKZeFbAUBxs2wvD2TJXFG2dwxxrRvSN3CwaUf4S8R",
  "key13": "2fT9pXuG547SAVNSYTwt9dEayadPZWF924khQ8zSJQR51VhTbSs9VuZfpChAFY4sti7dm4zmgi1jKXw9xv5Lmhg8",
  "key14": "43yH2PiFkTuAenbXL98FHo827VF8vVbqDD4Tqq31qVoJDh8kmytxsmVPZfDfS5qN1Todtojt8oRCeLsZ7SkFhSym",
  "key15": "31BTCPBWWsrxxaPMBUH3mAqbXtjczFEw5x5LivcPWAujTZy4LtYUVSvBLiXACGwYqPdi5XeAg2wqC2n2L871eGoE",
  "key16": "5rTr2KwHykV68CBLtNCM5K1RZJc4jycT2v4cTC1JQDmrkjFm9RKtnaVjEjN2ibQdyUk4Hw9R57gR5QptEQt57xEk",
  "key17": "3bynFNYQyvSqjXujYU7JK87Gkg7wQ2Kh8XFR2PAAXMWs5ufNDskvJKs14v9MXL1QyWwyVhKMnsPKKrEvMrRUzZny",
  "key18": "2DppWjiP9MjtJHBva56N2Lu5uNRxvXkVXvtNbC2B8b3wZk1bUvwKFQUqG65QGUQeUgxZZTDrJ9B878XKBNbm1heS",
  "key19": "3uizVyZdiup5M2MywbHZknSh2e5G8EUkc17PGAbrn7gzRrbE7aCDEABffg4biHu9unRkKHeKFHDNqm18P7YPbpPG",
  "key20": "4LGGMjczpjtYBmcfshKo4xjPW4aHgwycEBFJpCPCSufChHkJF5Kyp9uTYHr5dDwEx4smkp3qMaS8HzxKnXaQonNs",
  "key21": "4jFHQM4NBA8vZRCmot3LKQH1zuqBrDBG8zSPZq9NGHpMbXPXJe7BzGXRrLYy7WACBJFiWExVEhQfjYrTkGHdUHyH",
  "key22": "3nvnf2vcJtfkBdFkPaso7PCSvP6WrjLpiPG5Wj995kxDQn1vGG4XrHBaTRXTpdUS2Lw2ELP8RWLgzDjNjS5Bt2cs",
  "key23": "3NGws3FbsVUMVVaqJ13gC9LZUmHmQ1qiPuHy7gbnU2MEiNVU6tjRgMh44Q4r5JHmkAh5DLTBqrHRBF2UmpqchTTB",
  "key24": "2we9cnGmgSwDKoD16pYhJvM4suhL92goQk1GgFVHxEBgxuYTJ6Seu5nmf8ggfiVr6KsWTD1fVuDuD6EaYQtGAaWm",
  "key25": "2oxGYeDLTDpCo42MTjEAxNBpP1BjGJWJfKsNszxgTyzL1Lamv6WBmTcZs4HnJWZyNorW3C24RSZps9w57FuTazJS",
  "key26": "4jB8GcBV6okKpdiqQqZuPwuuzyEAYe9gPD3M8N4adXdhME66b9j5ABFdCiooxBbtNTf7mUucBzNddfeUAKS2FFoF"
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
