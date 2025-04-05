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
    "3zwWmrHByUQfu7Gvebyr1We1ahomoQ4y3xpWyjmzibw2MZo1df5aw8jFdqFZZYzJt978LVYDYM36CzQEedgq4tzt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F8rEnvtJzJnL5x7c7pwmWFF6jBdRffhD25JEG1Co4TywBQMBFKB3USeoskxUBDbXRDq5q5bTzbGkwxmzL8ZMAJJ",
  "key1": "uq4PQ7tU91PvGtkNa6fjrLiGUi5bGP8GRRUT6awJ6HuoBXLMGytvndWAYhoaQKWeoY7FdH58KrbmcaoAskRnP8z",
  "key2": "4HPLNpLqJiimB5YGAZYNA7Fu4JPSfXhTqwJGSqGBgKayDAWvPjNSjfVMVMrLZZw4mzXtpxJUotP5yUa2tPS4Lpdc",
  "key3": "4jmFzH2A2dCZhzLm3NXqGq8YiHhNW2wu3JGGCXiJUQzLwB1g94fmZCVqa5M3s5tKqibaWU7M5h1jHjB1NMTK1MHm",
  "key4": "2NgQePPKmC7iut7Jxr92339Da5Zcy9TQp9mKuZ3jVn33qifR8XkrRWahKqvFFmr9BHra5w5StBbkZwPfLg5LWhay",
  "key5": "3jrbEzd9LeusGdCkp9REVMHikrZv6YH5Wb2iuHYQCNwjvF7cGQyFb2rt3MTz2kKAFjb5kTmZxsjXRouD1rAQu4QE",
  "key6": "2LrttxT4DWsRq1PhhZ9119p2fVupmvmBmi3hoPPCcywusWoLnZejS5KRY3BYup9ETuRx9HGpeFJASZLocC7seMYd",
  "key7": "3HUzu5PhwdkDgxACVV1QshSKaLzkWgeH8t8Ne2cD1jjkt3xjenWFfq9bnzmLvQyD5AAvg3Ke3mqUdi5tkSJTJa8y",
  "key8": "3mjE3ofhNJJ6yyjuqsZphNxw63aW79izwRVChFhuFdzHjTtyT5bP1QyzELQ6btS8jCzL6P5ujXd9oZ8DSKXXEBKt",
  "key9": "3ugxydz6ARwFXtQDuJVNbQbZvDKDwhf8XHawCaVcXFehc9d83wQHQdpewgScnwqpvMfRRegWqnDZCSxyD1fryKxX",
  "key10": "zN82gUECQJbjsZXyKXEgVyy9KzY5SqCJSqxGhPbaBCqUdeh5HZR9oq2uEWdT4TBM197ze4jotv1rKhoXAFCY1L8",
  "key11": "qJMyFwfP2rRyGAGG31BTjDPsXJysF11dgrWRuQpjuKHuRjn6seRas3umw7gWtY2AKyMeh3VMCZKqNEQHwWVE8yu",
  "key12": "4QpdvtR3XckMADEX1Z4qtLidP4dcVRK2ekuASFAnytTW1PVYEr1WNM7UN4MnvRaZwZ1XvvWZR48biAMFRBcQ9sSb",
  "key13": "4qCnynPifKuRn2L5KwYaxwQ5ZA8vYbRMVyCfFg6W2cFVdtuoy98B35ydMdKhWB8vbcGCfCXrR4SbR4UpgEstqSF1",
  "key14": "3FvxF5bjc2J2Sr4AhUsHMsrp5rCRn5pc3AxGBoCAjeDtDqT6nSy9N48U2EZKe3duh7x5aaqUtptCqozaH839CVBz",
  "key15": "ESeYmD5GscXHqNVDXq2EH2pTN1Rv5kb5pGATTb63xfrC3vTbQjPaiqJ3gLGoK5cjz29kjam7ANR6i2fLVipPi25",
  "key16": "3GHTWsYTSsqjNA7M26zYRRRfPGxFAx3Fnb7VQR8VQZzYraScugiqUk8e41AjghDvs4MYRGGxstzqnX7w5qTmqjEp",
  "key17": "2apiyazkFUi4zyRKtdMv7WgC5PFN85G7Np976pb92yZBFmpGYxawUbEjTjbia4zkaEjsyfbRGwNqzJ87Wc1qazjk",
  "key18": "k6Zv8DU1SFNnGPg6Y1JDaqW2YGHJF7FSnCmETi9Xa3nDPRd98vMNaj5bnSiktGHftCFowVjyp8mbGJCuANcLPAy",
  "key19": "5H3yBqD4NbkxPRfDc4BCtuaekiTGetSXbPpvkynFUMF9ef6R4cV8mui6JNDhECXaVXGkVgzTjpb3xkjw45rafFPo",
  "key20": "2LTsw1y24zKMNkpxhFKu3vHupGxmtmXfPBpHZjJNPUQDjtjp6Q85g7Sv5TDchkm5vG9BvMagg4qDdo1rBTCw9YYG",
  "key21": "2ERnP1ZCHdocWxBYDyCFqM9imxy6ctgnD7FuEoDxXbN6uh6tobzJJGA6FxJgZLTYcuCd4Yt1m1wstbhKbJh1VNxD",
  "key22": "4eKXVf3FUtZWuUGWisqrdKbXphH8gBMt627WEpuyHJFNZWWopeygzdQ9RyJVAYf1EtV6WNuCb5D65gXA7WiHnWb6",
  "key23": "RVkfaPTrbM75TTG4dgEep1xzLr3AjiNBXppzhMUxAg3bZFLkCLcpvnz2Lns9hF9F1kfZCEnXMWcFkcfLXoqitRY",
  "key24": "61feBcAiyR4LzGZUQ5X6phrMcmJks4jFAKVrpqrbkB7YutLwyffbhtrMt33YWdMeLqX9UFPD3aBmahuEx1hCdMhC",
  "key25": "5N3WYgHyxXnGXbV1oFGTv9B654rynZUhu9LCeKDwtE6zvgRR5aowTBXYRQxx6fzAxMUUsqAocS8oAsJnHsKQ2Pgu",
  "key26": "3Nrf3mhsqXS7xnzii73vzrWc8WwKeWH7yzDS81J6gWM9awHNqtv4eaKLXNys9CVYdHUo7ueyvAsE8nNSkDYgqMgV",
  "key27": "5ZZexyCGBCvBCnQTXb9qzdCGhC7cjVcgDaL6qA697uzTNNFGyptAAHQ2UZ2LwpktoiNvY7jzXGm4FYKQDSW3PJij",
  "key28": "4XhyABHT6RL3cm6nbRYyahMcm8uaunJVahSUiEZUTrywnKwaHCbfMkHWsDiXSuo8paih7r8sRecDMerykNfDdPdz",
  "key29": "5kZUngAm43c5MGUsSjeitftwmDe1jqJse8ZLTjjyXzU5uS4rkg7FJpviR4P6Xgr1NdwpjkfDTKTjvWUcc4dkM6sK",
  "key30": "3WFz47frcih5oDpAzKMsgtX8cMf5BbeXrcFB8JP9VreV2AJrJLUTd61etZZC1eP9dq8ADNSFFJ2YxuHqbynY5p3n",
  "key31": "2QvtKR22bWFpwS2jpAx7qtidcwvrsgmF6kvEKJCPQcgMaHeGBnriXj53GJsgu7qfMhHqatgfaKPEzUY1PBZMxr2X",
  "key32": "4jy6mCuAzA2Vx9zLpgjc8UBD47ibkWf67WgbtjAp36X2BU2ocCkrSyehft8MJHfEp5gKL5vRjWDMJ3XNMZJbx1Ut",
  "key33": "2yyNQZxMJcEnvSrGVRkG6wF2V9AFceKfTmSr4tGMc7UhzJQcHP5cKLUFcjcjnX3TLUWhd4U9UECnT5Y5DEpLQq8",
  "key34": "5FvKHSXYpPESuBsCsSQjZiRevK4iVv7UHuJtT8aSmZhUfEpR7VfqHa7mC7hm6bFXGUPSqu4FrTXujxwJQ9BYCrx9",
  "key35": "5cRmBGuoxKQFp2RRBWzs4shN1Mdi1u9mdwSFNrDrtN9hqUszcu8vbJVaPmwpmafEGaHzduQXvfppQMZfeSBFnAYA",
  "key36": "3oktvPDNaSURmzJi4bvZaoPZKHhMqz1fNwRdu4dk9SWgJzACaYTKJJ8wWaj3pDKdTbQSTg6MFACg9WuTqcyt9PZb",
  "key37": "AV3DRgQNS4fCduYMF5CWHjMXhvNwVvy9j8o27cAcFdbFwubBA3s1EzBXR9nf3Xnvb7iMWjg551mbUMYhb7Dan28",
  "key38": "4dLvVaZBzfC6vNCNb42EJtFMMeEE8xUeSvqsreV1qJAcPTyPLDUXEgkRT7iRJQnwaSy72tK2gjK9sfif1gQv826f",
  "key39": "rnFDpF8sijE4nwESvsP4dPgp77JGL7db8csi2k8AzFnyhTmWg24Nqm4Aa65wg5bomgEGrWhCVWQ2KtxzcCNAKc4",
  "key40": "2tFqKFjFMKcnhgcUk7XpEgLv32q2uxfd8H2fK3XL4yYLr4ThY8ec5AFgVsj8zWfyqetcrpH8QisjZ1kxbyjSkpTt",
  "key41": "24kQJZV7m7sYpu4Gvu3yUgwW2JgYEWPvFG7Lpt6zfAGeEwajtcvquCrYvgTNp5tKB6d8zJZYv2uME8aaVMLS934i",
  "key42": "5ze5fvKho4affgGfB93SKZDVHxArEfBb2PRdvdqUpjZSMaPPUWLYsP8bpb2optDJxA7YEQ9XtdwywNYhXLRLYcmz",
  "key43": "X2z7XEaPJkUSPhCYGMJ5Q5uLFva5jrdJ4wZyk37btrtc7jQ5bTLXKivdRmBMJC7DJZGVszmFgmM6ZXjbtCSvEeL",
  "key44": "dw6HGc7ZdrjXR9hi3qXmAi55kgjZCWGS4nZezNCEimjng28zQQDxpqkjVQtjm8huYDuDdoTgQmV1CVu6ttoi726",
  "key45": "5Vd941iWyyu2pwX5MPQgK1Q8o8QiR7rVHFSu3LAhcxPtxVuXvot58Zbbi28X1RhFismh7WGaRRWJ49XGdXanc9VB",
  "key46": "32TUCfjvU4S2CehNHdG5hkwU934fV1HDXMJBtwcimMFFLR3uqA4grYNhVBRP4bcBDwSLVa4UVg3HsKdWAMWv5UEN",
  "key47": "4gXRMLcb6YCHA7USwWeTW5WD2bKmKZ3J3ENC66mKfVwDYZLB6jUiTJD3rSS5iawLwNtKcjHoVgw9zdNwEniLuQ9b",
  "key48": "5aQ4Th8bgkpp5Hz7pBYAWREETTZpPYA1SF4ntaEV2r6DyU48gPiMpRQKbsDKJ3HDEw3TkqbYyZ15iYJHFERjoeVP"
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
