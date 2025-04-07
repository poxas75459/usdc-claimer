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
    "4pWuNekjjJSxXCnt7hvUYj96KGZvQgvE2AWfFbjRMFcacaxeLMCtVBJ4XmYtM6N8KpdVopMp2ytvfNubb1sYrrNX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oHNjQqfCHnwCSoXQpiy9YfSHGYdJ7b2nc5ZWNgdGMTHMAB7WpRWXWobyP1Cdm8gmA3YKfV82WPiPtqoZGvFfXcT",
  "key1": "ioLPYhnUamE3gTLxmCNohnWZB9jtuG2RcELn6zRcYz6gaAn3ckoowta4NaYFRksRAv2y5uLHY42i7FWWDXfuLx8",
  "key2": "3fxU8GXq4H4USmC6v4Skj5JpNbVEXJ7V89jcMxSPm6rmbeQbqEG1fQgy8VivbAt6f5XYhfH2dkq3WCaPrqrNuUzv",
  "key3": "2sJMoSQvLL1r9zmmrsESznty2eHqzg6VapC6ALVb5iwc44yH4DBCdVeSJGNZhVLPUn9CVWaSzSZ3ysxwyiQnbxcT",
  "key4": "4EEjbqgsa26V9PcfgvJWz6uDZzqYxNH4Qo5dNDvKHrdRrKXusHumpzCgukBdeaKKpqKsXi112wm4gjSZ1REkZtMY",
  "key5": "3UPHeopmXt557LcV8T8ryewYci6aoxX66qCMYRKQiJoL3RBc5kdWgdP9o439oeQn4YEZJ5HMTjHALpcMrywJNm1Y",
  "key6": "2iwrwZygwebiWBoYKMGW5dJb6o2xysne8VQf7GtWme6X3tER1jqRRkzwq6v7H8K3F522j8T4yQWPPQPDgtC5v5ey",
  "key7": "uEFWfoiBX7ojKqcLYBuhiPBrsXWMhgcjnVaDcvHwaoKdi5UcDM9sTg1VhusTqKWntqrknemo3WHJTp6uFYq83gf",
  "key8": "2ATaXRYmYLRLcvdLKXi4FGBppMcPZaGzPRhinhDWgwxGvzgt86kbPMe6PJUZVPJYFozWBoPQp2KqQEEuUCUvgZH8",
  "key9": "53KqPANaQU5dakcQ6hcif2umLeSxwEYUN2YcEEsQQyRGcUqrhAPMMZgJChnGBq72NLp6rwpzLiqjqHKZp9UdHsec",
  "key10": "UxfWG6bVk1UA3s4YFdwQpXV37fXvSGebY3Sk7P4DquEcfDNhaSFMHyVf9khAHv8JW1bggYC5Usw5zCzzMWxznMp",
  "key11": "5EeEUMYu1oVEficgEqkGLNV81Ye4PMmmJmjELRrAhK74eBzCxtrc3riSBRnKAvi3V9gmN5wH4PLd7QCQzoqKCDnN",
  "key12": "51LKSedPKekY9zyW5kPwKLh1sDbeinuJWVK4Gj47qo4BxPzGEPuFaTbucwnPXaMxfevKQNNG2LbaKu3Wn2gtgHZq",
  "key13": "P1iC8AKh7ZBFKDHRvtb2FQpyeSQVoKZACpQodGCijftAKpJ4FejDSgzpBeBBhHyRLuRn94LFR7Qsg8GSMu7kvq4",
  "key14": "4cpZcELpXPxn7nVLoMPbbyg9cYrXHXMk9gvMWERHWBBY11JgUguT77ai1CzL9m6rvgKEemNna4n8CTxYVNpQzkJF",
  "key15": "2xeyKuhXoU79XmdGMwVE6X7Fmq5qUA5Q5yiaRMZbzaraK6RJCXLkxGifD2HZdC12pSNmuDXVJXDP4q8sjruymLio",
  "key16": "3Q5WTX7SVDia8TyoYecckMACCakmR8xSSobnvMA14YNxXpeyzWhHJnUsbya9hH6tBBVufFE4cdFDecBxWyGoJE5T",
  "key17": "Z2y7s57ZzynHj8evZDj6Gr7EyyhjQJRpUUuE4WYzzJ7i8Q5dwhH8UkRTiryui4PYQzd8cQ2g3ftzhvq2AtmnRJu",
  "key18": "5wtjsmmLdxwHg3U4hutcVjULfmAPfaZN5BWefAub9aWg8RhzX9jWrnTXzcAvyhAtib5Gx87kYy5kdZbC7bsjih9h",
  "key19": "zS7dECtj8PqvNmfEntn8HpvgAX2kg5oPs6HnPTGiCqRdNwx5e7qcJL246HMeaX2huWe66isKvzv9d73QqDUXXYV",
  "key20": "2pdVSvJaV1PRKH5vZD6XAKwpZoUbK4tWL8CRkzZvgTeQJ4tdZRwtNLR7vCLTRJHQAXc1mekqLwEZicAqG4hKjwfU",
  "key21": "4Z7zrHKvyjNKVGkcX8395Uraw1ENSsaD6p27F1Rf66HVVQNbRCqYtCupjce8KZCodnzLyZdQH8G9xrPhqcHNULmL",
  "key22": "2PPpdZ4bacPSeSBqMQ7nrtPBwqsB25nBFyNyxb9tBVCYCUxsfvhhmmg5GAxYxMiPYWWevThdWy7WDnWASGGDLUa2",
  "key23": "5pM3VSuAigZzF4QTqxC3YoPaDtvceuzNTuCAszKC9GZvYirLbNnuxZHa1sS4PoxC5PP3a8JEnUJsmjTWWitjwtjD",
  "key24": "YcQzDgy7KoC77f88GMYq4AtUTHVaY9aEUAbhf8cXpahAsZCGGMqFUjXuPdMReNPijiPhL7xh3s43koq7uQcNSLy",
  "key25": "45GC8bpMwDGyUhJcGUuJz3G328Jj4HC52dvHGKUvpSK9B2db3QtPohVZQ5WnLSGan6wcbkJtqaJN1jrYVq94ymNR",
  "key26": "3pz7ZwkqEnvPst2C4WYXZrYgWWcZ73c3Q3979HxDDyinZ1U8yTQ7DMeYq8rogJ3eFtjtdQGPkJA8oVukQDGi8Gax",
  "key27": "2dfNYdqzYWepvjDDLwsrfNuXGHzKJW2Bx1mncja7dEijfFMPrao5uusnRjzXUJncx3JeutnWc6LLAiRFdRyh1Edz",
  "key28": "3t8nTGkB8i5cEM3H4WKHASXhZ1YYgf3EjKefehAcynJpQHRszdFck4c2yaavYh8BRT14ujsLvMQukbsrMp7gMfEH",
  "key29": "2Nr6iLDZXnK6oBXhqHon8tXMWH1bjq5xfhv12cRLjSsKjZnsnSX3FyAeMsKkrBwBYsKUjJMC7B3ekczx36KQHxZQ",
  "key30": "36LSq83mtqZtwxZMtsxQJVFZxn7J88tGAnhdwRVHLMwQxks87MkXBDGAp9PaR1ppXosSJKesuioAfmd4TevyRPsU",
  "key31": "5HarmZ92QcfjehJqwdptubd4nag35vdaMCUCJrQuk5xmjbiSJN1M9C1eybaFnpB5nzzMyHHnDhC3h4tPYPEGV26k",
  "key32": "5cqDp2cFB1Dy215nQE4tNhjvymm34mHDuPBFnqgTDs5EAuMawizAkcWoYTmt6zSm1f6LsURYPeTPffhii18Xesxs",
  "key33": "58MDj2HUfzJwBbirgiknPJJRnYkTca7G7uVAVqTuPkm5VUHZm8xkRgrznm4tae5AuXK8GX8MVQ672soYPyucc6PJ",
  "key34": "k43jPfws4XE4Nj74PiwJqVYGX2wkvSeTtEhfP1gULR2awqjkKNg8qjLobK9TaEuTX1kGWH2pzA3rxNEjZwK4Bzn",
  "key35": "4nXL6SNKV5C1DeXDsuiYHUSeEMXTyYroiKKiR7mgRxx2QMCHr6tYV6jt9dV1LTyaQDSnqPKbEMdMqhNxcBpNz3iq"
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
