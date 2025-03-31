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
    "4iXiB3LWPAyZAvk8VUcajFhSpPTr4Xteu9XBMmGAUh3xqvY2hWzCe5nCG6FEb95d7knjj3aGFVDrmMvi1F8NpNkm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jErWZbuZk8bM2TixjrcbJ4ZU4Xjd51PNw3H7oCWJ7kiQRakg9t3Q6U7xx6oWsUYbZ3dSTLGnGusJXjhuhYKQsnC",
  "key1": "5ixJDZa8jyzTJpWm558ho3XFuu8Qh8NiPSUAdTWYX77B3r9t4wiAm9HCeMA8eDCxko1YZqciQy1XSYPz1GRftaW6",
  "key2": "5SRk2FM1VTPqJHQSTK9V7RVnDXCyHauzByVWr2hRQ55E3WKx54cq4B5dhHZGmFRXmk8zxMcibasei853piDceEeo",
  "key3": "ZL4awqG9o43rVShkiFk4CLixMeKA3mm5bDRVM7SdeVBwK7kVBHu56iDwEabRMnnkVgHS6R5ykGCUpSP3k55Vb1m",
  "key4": "hXVR2WJf6RKxmgFkfRQfvxb8aZPJVbhnt62u23cVM4PTP2Ph9pSQxPqnzUauMCj5hrFVUjvRn8SL9zJn9M7LPbc",
  "key5": "65ZGn8zVzTndTaz95GUoW8eFC48zeF86kvvCPitQe9VAUcHRfiqtyV9JvtPAXCVkjmb4Pntmg6t3zN4xkSpkZhJ",
  "key6": "kMEumqdBzxPWf2mzgXZmv9XVxKgFu1w1DpoNyR8o2hJqZk11FDjgGFeKqheMgszaLXQG2oDU1vx7iY95iEyqXSA",
  "key7": "2pZ7dhVseKtS66MzzysN4FLsDLpAE7cR5DUeXgZetP1N5AhsZLWAPLHYKjKqGRWLGmKrzLgyv7gcRKYQpq14xWDc",
  "key8": "5gbhDs2gek2vtiWgDkQsccCJT245uCG5nwnDokQF2W4RAXr1S2VYwnF1ULxMMk81m4EeqHVuVyQ2WGYNZUTKoQ28",
  "key9": "4c9ZWJo7RjrUvEpsE3iXUAbYw5BGFNpMxfaie4iEy6XfNuWnrA8N8Vm7xid1WuTPBQFUTUeeXJzGKjAZgjbK9bQ2",
  "key10": "37HGN9ZUSC7V3oGGhwBewf2eWnEirdavVn7ZfdjRG126Gg3H2vBWV68GHfyfBiCDsabJitczGGwbDAUQz6NQe8jJ",
  "key11": "35JEte2UeG6Td94xTu9xLddF7JwvXkw1t4qV6pXS1VBttFTH67QjVyn8s2kF7CPQdPtV7uXiKh2xNPURGdP9VDN2",
  "key12": "3NHomzFM71TVkRoZNKmHag2HuW125Ww6TcJmk1uNNrygKejmJq6z98kNskjRKyzxdnDwnATC2QLNjqTTHkScqCb2",
  "key13": "FpscR1LiTb8QTybyW84ZZr6wS54XZ7S6BPZeJafND1rKQmrBCym4gKFM7K6pDk8xUn8K1ykSaDF78agdM3oAV2X",
  "key14": "RFHLyxxWoE4Yfx6Cck5hPeEomgovLNgDZfyEMjS2Rg1Zat9DYeCk93VUC5v9bZVZbZKJC2TLMsnz9rYy4svq99j",
  "key15": "5Utu3cSBn9M9sLUXoyivHeevBbsuwaY8GQmPMUiXEGDcBofLtzZgvZvqpidAjBQ4tzbntn4kA3ieCRFYt5XTzV1k",
  "key16": "4UFC1NFLUmhqbT2yDoor2UsKEuRnTucQurZvMLNajPczmHynSHWPB4bBQFNmKNuEu8FuppE9gwJz5kV6k2UBCtB8",
  "key17": "2gBhPS7BaEJJsPhZgrt35FRi6yj8PsQu9fLpPz5zz6XdXqiz58f7zwXGFJgfbTUWjDL45RL7rUQjsq1PNgqymqYD",
  "key18": "h5infqXRavqF1ABXHZ5c2ng6FmuRenwJyA1EGJjctwuN78zVYgc1QZTFLyqDpKRnSpCnN1CDs4J4jh9UkiS5uQA",
  "key19": "2mmv23QXcoZ8DnYQqX1xkLZUNUDw9Qd5qywyyntiyziUBowejuRu1kV6Ve2KxXZQhGSkt95aauqoZrToUF5kKeVt",
  "key20": "pT2wtu936p6qzX9vBykuQY1Jo96dbeBZEwqUPoC96fDFtwmK7yZBYYYKw1gHx9PPptysMcQqyAwEwTR4fPy8zng",
  "key21": "3dNS6djKZqxNdHszxmP23xSd9SbMNt24PAqtV7iMdGEBFAoTDzd3pqqXZfyZDdkF3kVDKinJDJT1BUBtjRAkiF7V",
  "key22": "4Q3a2MuE2pnw5jCAgxJPfsnJu9Fp31iwttc5K5uAwdZQpwDhQoi7NVG1cEf95PNCPTvu7fTx6gGH4mdarsqNHqVU",
  "key23": "4YkddGxmSGVwBbpHCq1Q2sQft3GkThPG4Rv1Qhczxp67o3Z19h44X2V6A1NPrKQth3Qkr1ccxNYWDMQ5cVBdrV3x",
  "key24": "2Go6ca9HgMZEnpTgnJy1HCqKnv4Dr5ESmSPj8km3aFxrtk6LMgTsAuVVXmYRJvgeQnaYiHQynttQHpHyb9P4rLU1",
  "key25": "tLQCjLtYr7iuzZN1kXNaA853aEVmcfiAaVM5QnTzByw14w23U86AeH7g5br9nD8RivLnvsNXGX9sWuCht8iEhEC",
  "key26": "pgdxBjrVhAHL8JJUEDuzNg6uEarmTozFyeJF6dk7zcoustRqrg8SwxepZs7Pb8fmYFSZiKoJ1if6phNtqu5U5M8",
  "key27": "4d6CjDjMU7MKTWCsokGHqiddcnZfjauiuU9Nyrb4h3oKFt7uutNFsfykKA8NGxr8frXAsFJam2coPonxxiz5A3hd",
  "key28": "2eRVwsWkG48TTnZVancY7j61A13M7R13m9JMpdzAxEyMi5a8MrkkXpT16Wo5iBJRZbw7CqQYwDUeFnmxuYT7PU6z",
  "key29": "5qU4k6ypL2tadTHA9kkjA2U6YV8wUs93VHEUaWCc7w63tA6gNbcWjihRrkqfK8Vg3YXQ3NMTecHcE9Pp1zgvJcn3",
  "key30": "2g7f5b4cdd9QyK6X3tsDRtMszivYjAtGRJDiBHuricT7oH5Qh3pySvCr38kGbPhJyeLxeD7Jh1stpU6LSV7BCCgU",
  "key31": "Fyaa2bwjWEdnMz3UGUae7KSgPSZFGJQ1KGAuDGpMb61RT9Z2CngZqcSVQNwuPdbDrzd65DM5dpkUdx43haec9WA",
  "key32": "2sSVxQh7ZCu2avnRCUndKQeVZms8Sg7X3NBL1j8wgpYaYRQ3iYzoeZvPk9N9QdGBS1W9wVkzttaowEbFEU264q5e",
  "key33": "45fwpWt556zEyA3hihHPxascCcafRV6xWUbNxHR5uc4TaHxxoHFj4HqnPmPfZSoTozQgF1AFssVLSbsHic8dEF2a",
  "key34": "Km8vi8meeogfiWZ6BXDwkamsZiBATqjt7en9qHsBkfrAcjECg8ByhsVPaDbinA4ffHe6jxVVWr3Z8Tw9wJbqYxa",
  "key35": "5EAgooajh5THJPMtMs5fDwtSCPXRB3mU2YG5h9onCofGyNhRiyjzzVysyYwg7QdCkt1XF8C4KaEamM5rT1HFNSbF"
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
