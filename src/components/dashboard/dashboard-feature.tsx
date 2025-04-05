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
    "3tzQMfYnzWjyAjNf6xFB9BTTCDNL6WwgTsc1umVzekjDgrEJkCGfQcZSDDrRMpvyU5B1A9Mdgc9yCz9XvhQgRbBx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iXSsi8fcgwX8xomJ26yZAGnUrmsATStyE7K5BnU63KXpw3iEKTboMEBFnWcg6Jo5N5jYVdfBMJyCGRxkaVWZU7f",
  "key1": "3cWQ6fx1bKMxyuuny9uZgE2aFbZ3fVMV6kj4m8ByHZrtwvvvhqWupHBZuBuTbPvA5KEEiHnPF8oj9ki1Spu3sv8K",
  "key2": "26HCns7XUhcxW9CQDiTHPCsnfYWTGpxRDS8Yn8yLwUK1nEtjyQrpu4VPdemRqKosunqmZqM3kBiQdfbsY1n1cQet",
  "key3": "2G69mKPCbSaqe9mPi3djyagzKeqhhD9HmEW2pguRVdJJxPxPPcfzqdMG5NfYc3RTVfSQfrkwxWYcLey52jPZ1SxE",
  "key4": "qFudFJcrG8AiAxB9mYfpU2TTGoJfL4ybx6QeuAAqVSLF4te6HsSJFXQjKtYAQmFX99TPuzwP4EksnfttPv52jM8",
  "key5": "2ZP4UiNbr6C2x6wSAdb3fZy7LfTVceVJj1XoTHs8P27EoawUk7xUsSbwQqRqchQrfxfL7k4GvPLzVM8uc9FJB7AV",
  "key6": "4NQ6rjPUNx3HgxaMEtmQQMNBrjYMLDBpR7ZZCiHkjPPztgMiDDSAiWoPWVj2noDnS7sqeQGJ9mjBdzBBW4JFQPb7",
  "key7": "2WNN4JcAaiLwtv5hRBvRGiXJwCLdkbvZoUWvrdYdcBvvwanhccGgvSYU3555gunyy2MSfaPuyBHZGNtXMMMP44An",
  "key8": "5Aw5UUJ1vuX9WEgxcRhP3NMvQJk316DN5NirWs17S73ryL7sFKLTCxQnauK2mdnZd8ETCmCc7QdHRjeWQLtbKGQv",
  "key9": "4ZUWFCY1jFMEPaBACi9URcVDcaQSYcGgJSVSzpRUrRorTefjSwwGXmgWWNPdSfr12SeMcsLJ4131P7oqd7o82n7X",
  "key10": "4c9uVptXE7ZtehrU4JWjHAKLjANV6Fdn1sAxPinR21LWxyRnX5MEBVZKy5R2ntJEYLM8jFoP48q9f2SunWZH34ev",
  "key11": "41kPSciwijVLqdj3hV6nJtVyKCFNbvcQjmLUFgjMN1A5NQpNFGi44P38fSYWrJMyrS9EGxo4NwC1nMx1rEh1WAz2",
  "key12": "XQweLAE461mLX2ah6cQLdUadvYkQKquHUQa68aEvg17sbUYMG2hfnecpwm2y6ggdLp27L8kPahBEAEsZiYTTWbJ",
  "key13": "5YD3k68tw1LkG7p1bksMPDVSpNEoUnci4QTvpcHmwQMpS5w23EZgzfNjuQ8NDthUgasdXxKuq9RnKpbq9a7BySHZ",
  "key14": "r6rsJ3J6P92Lw8p9cizk6qzGByuyjWpbWTW7djKhQijvCaTsUHXzGYH7VsKfhZfxA6crtHuPHQcUHsAoigLSVHG",
  "key15": "3NZuopoCPkg2UFCHvb86e7CPTt3wyCFa5rL8v42kT9FzMsNuU3o8VmNxcAusYTjBxGtqtRuMpNJGyvqvpxB1seka",
  "key16": "2QRXKypS1mdTPaHY3eo14fWUgfpugRftuqHkwXYuzTtyXUEB2dAX3FXWtNTyiuoaCmXPjevjSuPSiZmd7dua2eMJ",
  "key17": "3VYTKFMbQJoNseDRTbTKvqwtdpWmoZTsY5spNFfBYDfBi9eTDQZLBhiR6mL8ct7gewvCk17sut9f8HYbooSQAgW1",
  "key18": "5JN4TNBTeUCEVwKUs9NDNidbrnQFokNYYWRpHHy8oSx8ULp7Q4ugY2uQ3hWunk5BpAeXxsnSJ79yMFaGAAtwRfwB",
  "key19": "oYfDnTvsWextbsiM2VYLf1tu8WAskKXtVubQoekU8WnUSjweqwLPiNEyJTz4Syb7Tvpnhnr25hk9gWMvLwQ2H3m",
  "key20": "66B2Nx7AfueG9dy8SifTg6s8DHehL9bDkPAxVzHzaqdJTwAXxzQQfdDj6VUm4zKNJVTUKQpKUGVJxCZZ5iezcdEq",
  "key21": "4DDxLhUiMk5TVhZTLRwx2cg4cE16Dd8vewyzCEDW6hyeQ3kznoZyrrU78raZSr2JrXYy9qGby11g2Mv7yDBBHWLK",
  "key22": "4jViLsPoT2rpDRZsUvv1Y7fgbMa23ck82tWtWQwqD2VoFxFLz8swYqea3iXScq5Agc8TviMBq2hF774ScDKeMXL2",
  "key23": "3y2cTWwb2AbwrbVpzBvLELeXATv13KKGWroox73bsac4Hz4w249fpD2AHN8TrrhNBhoCsZNH4ErptwEwyQ6fFMsQ",
  "key24": "5vgDqhkRpwA1ydw5223TuTzLSJvfMVUQ6ByrQw5hTZytVbPZGDB8mTZfgQ5ARvQX7bKC3jQYRZMhX2bgd2HLruQs",
  "key25": "2sBBjvhYRwh1tpToDX1GfS67STW76Y6n7wDszkSWZvCPnt8YBXHMdU6nawyvkUr9oWxxmHshXorL3uGSfCDeQHiw",
  "key26": "mGssjhPGtp71DNCAJpBxDBojb8bbjhKnTBWURMmvNPPbQYn9z2wHkSjgvZsvfNPhK3wU1WV6ejLeURxSGH9zR3t",
  "key27": "3a3NRKoag4uzeL5FUeJX5gNxcEZcSHnqofXzTAqSRCKFjN3Fkxfua6rna2pQZWuKwKozQPGCPQwZsvnLkYTBmcuy",
  "key28": "5Ve73TnTKbaz4HVLmTti7wytUXhLtKkagko6ZmvFyBG23279jyRFgHmHp9FCq2sJ4Wxzn9uYLXCwq6Bn2mLcJo8W",
  "key29": "24B2G2GEjuAHdHMySmfGqGM4nZbnwk6exMN4BAp3RefYoZGRYmnuxXDf9Wae9Rs8mtDDk7z1b2Wm3LKwbzKJvLYz",
  "key30": "5LtKri2BiEeCxGaiSwsYM7JkCR5hV5MGtrkcRRa7tEMu5H54xpXPV6z6UU3R5L5XMD6jofUXH3tDSswGroqhQb3Q",
  "key31": "2Tx7CP7Ycw7MDM5ubrMSGu9mf22edi7UkbDhwbVGKZircVNEJXTYY1HSF9XCdXc7vWfZzXecJ2vTLMCUKK5zXQAa",
  "key32": "2egyvPyHSBiJNi6HneXJRWijpTzKiEoQqU6Znum4kbTH69HaBVQcs5nMJTVpZqN3Ya2t6L7mkoAKmY1n6bB1qt9x"
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
