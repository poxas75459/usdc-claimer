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
    "4W1LfFW8ddxLsBmN8ofyxU7gYnj7YvWVsgkCkMuhn2MWZ3tV97nrpqBqEhmUgFi1HtSeN6JV5EhrSUM5iUkZjAtV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pNnPGPfrVKUE8Uz8N2jyFdJ7im878RGEmdQzkjMZ23JhQhyCFPRxf51vBL2P3R3jgQFUkm34E3iw1DThAFtcYmG",
  "key1": "4j1stiiDZzf5n4bZGeHfCgTTknzrMwiRk3niSEUX3uB31X8txbEarHNou9ywobdUYK9hD7zgeMcGs6k8ieQDN2eX",
  "key2": "3W8sUiNAW2nR9NBsyLaqScCPKAXnoWkrEdxiuP2xpadRqtnqFhfqkjQ97uahPwafj9ciep4iS4pcBR28HguSJeZz",
  "key3": "2bSVWWd6k5BqNEgtwxZKBanW5dkvz6coDv3cLVWzEAPdkcrpGihenE4PM9bducQUxP8KHgpMi7k48U9ktayi7Ppf",
  "key4": "pQ4XgQKAatpuJQYRVqSrFFanAJuc1UAr23snFWjNhdtmyAqE3wPQZAY36qGdY5WcgoRaWpvWNtWjhTsNpqjPfhX",
  "key5": "4aBdErYgsbnUtRU3RJHdqjrw3HKeKhQ8fxjYCyAvbqH4u6q7qq3AUn5TP8PZA93QNijo9y141pKb4suUrDYamXyQ",
  "key6": "2EM9VmnxqeRrxKerL43B55vTRR7gVQyj4SBFeqUqZTqefiieYd9HHpYhCnfTtwJ9SrfAcC6R78we9ccg3Ngv9vkQ",
  "key7": "26692ucTxcQ6CkvfVtbieHz2YgPaC3GJrG7yzD8vNTq18V6ZeY7YJJtXcSXjH46uwmva1Mpkjz1tdcw4ySZPs3WA",
  "key8": "59B9Bn9EfigvRwtwcCRvG5N9eRtMX2WWPyKYaY5DJ1gQsEBcBBuJnjeB76Mph7Koc2eJLooAKZCxj2EVfBb6W1He",
  "key9": "2UogxM29BSxsM1Hdv2Vw7YaKNs7x7hkBVbEJrrre8AcDLfeJFm9s8k3fSCbG4B8FxcS8a3jk3Cp3K7dPkd2gNSVo",
  "key10": "2qKh9FzHQrV8ErTrsfwPaEXLsXXwDwvaNarUCirU2ydaHrnZf85GDS9M2rQpQZiJ8VPJfeUjzpKty6n8q69rGod9",
  "key11": "3TVLUeqPqHFiJyoxvjFzoJF6FPnoPYSBhD7bLhKsE8Ymtat8QfoqPZcjxS3rimXHtEYAJgfiEq1YkzrHUAAFUGQc",
  "key12": "2BHcfCXtNJRHAUL5gJYYwbahQVT9dX3U7FGSqXXyBa25xpNig2yaKKUUB5YtRiR5yRTVDiPpi3BuhibneVeBpDCm",
  "key13": "61JWDkgCZ7ykS46NneZwYCDWA6Vo8UBHWs6DXpDvuThYJUu7nLuJMxakFgvE3mpQym9xMRPLAh2eEFSJmHdrUaH6",
  "key14": "2TH1XU1WCxy7PoHUqhTMRAGSsivUxutaemVn4ckjrSfbGdnnPRL9wSgvEQJXhkTrRQN5qh828kz9faC96CGPHPwd",
  "key15": "5Upt8NjZ3P56otTdVoN7uQuKgyeHBnoNLCx8KCz7TM5QRqud93T31RXw3QGmLgPcLGQhyTyTjpLLK2u1667odhCu",
  "key16": "5mfBexoDV31gTEHtE3NV1PQY7kJdxkAzqwjNT6CxAByVitbSg458pUrRYTMNdgJCDwQzmk6s4479MwFz6tkpX4az",
  "key17": "5jgBLKZpJFRNAWDEdgHnmNUW3bwrNqT5bAzveBjqTd6PA2PyNDSkmZhtU8VUwhdFueXB5tpLYfhEEut2yYmZv6YC",
  "key18": "43MEBiHfQsNcxeCTw8ywogM98d1RB5EimTtB5JA9T3oigfSZtQN5uYLjeP3PWLKPPqBWLufrUymexcAjFo3nJEHk",
  "key19": "2bCuR9yzLJvrkUWWCh7XQ61VcUAwLpvhQP42VkJHFhaiBHEonSc59c8coRpGRx7WvUjxCoQ3h9djQuHCUGfR9g7f",
  "key20": "2YMT8pn1YgnxaYc93vmUyL4yRbdbAZqf4Xv9Y6Lm6jjSG9CTFmtVRU8J2Yym4znZsukMZQQUAXVJ2fN7NURnsehq",
  "key21": "4VVvGRiiZVjYP37T4egoZ34YS2qLsKMwKK9pa5sMBq6nEtbSuPVcrBD7oT2J2LyhdKvChd4gcRLbhJW3PprodCTg",
  "key22": "5NN4msE9TofhfHVgDuJvR3w3fjuotXNfjBNHQcrQwXYN3LQd3ZsAF2qtUwF6rcVLVEPS9rzD8FsqgFLUBN3jyZJB",
  "key23": "5fj7rBkNKAKWG62gxtPRsD2vKttX1JUAxfyjD8GgAJZaeHgaRNDcnGZRL1W5emG5Sqs896XoZ4geifD2vh2Lw5Qx",
  "key24": "2MMkWvgKxRFwYsWjobWP2Lzqdp21nn9mdbpinLP2QGpvAP5mnAGbi5JcgPBvdKnqRvT1hFvncYx3dJRTys97Ucmw",
  "key25": "5AJAbJzPy2K3XZrofw7XhkmN5NB7RoysEV9MhfZiDRaSPpATZm6FhMzsBjLD5ZajRWfD8DnkpaMgGgnHogP4igg1",
  "key26": "imBxxSnwXna39zLybipTizjwMKRXH18734WAovfEQZ1d4RCWDB8vKgZrqSjVXNXLabk1g8gCHCYPp9pf4h4XT4y",
  "key27": "5a3HA6ZjN35Wbbvzk2LR38hURuNsVCBbcp9sN2pynZ2Sq6kQpFXUv7V3BPo9gukcEYetiUifXqzk8Eg8EsGkSfHS",
  "key28": "2LPd8voeAwhM9XoCANg79MskRCUGDgvsDMZSkgTPxE4mrvZXiuJutvEDKAjhEXqFaWdTi42VnKk5HvKuzwWMgxUp",
  "key29": "2uC3cpC5TCFnGP5sCPLmHuwr5hBaf5SETQjAWycexmbaVwZivBnnLUzZN3qJd9tNWCG5YKcbzoFCooTDiPX6FZmv",
  "key30": "y5LdsSTLbKNW78XDJjnUqbTGRHSEdgqBkjuPqhoc7KvR6oicqp75KGvu8xzfXt4jVxtrKSJ1P3oypddE9XvPYfy"
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
