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
    "4B6UE4pzX2L3JanxDnUadkUjhqKPuJrC5P8NvqTZSpFtnVyDVmQf7B6MS4pjWgNhkABXJZNVBy8f5qFQoQHvevAn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pDEaXnWmWj9pLafNPsKAEoLyZ46nKDK4uXZqzwqkaqKKvuuHzhXM2ZWNLQ9FMsGqY1onxcu3GxRhEZNEV57qKUA",
  "key1": "3Zhrrkc7wMeMsDH7bTq41mewxZ5epRnd9Y9xqsstktWJxWZ3SXriA3CS82ncjwP9dBaoUqryJMXUL8zqSsgTEVZC",
  "key2": "5H1cUhEi8KTL4LUxooEi6JspnsKjXvg4kJkVBHuA4yBakWYqR3natxGE1wNXCYmJDV1JcPXhhuavcs9U6Jsfk9su",
  "key3": "22jRTacrab9bRvWf2TrdrirvdmTe4TGKEB1zTtvJE3k6U8xYmKQtDoQhh8pW6Up16bMHTXRuMJCGE7e9iy8nUNkW",
  "key4": "38PVyMvfqmg98XDj9BEjfRxor6G5MTJvE4xSkF4Y9zbFryVBhnuHgnBGTf85dBoKRRvw9ZALaUL6VL2WcRMrQDJG",
  "key5": "kyAieHxdVUTwMooYKaWcz86XMSkJHxiGh8WRvejKDq2UMdibJuq4hkewvrYqByDbYMcpUAzy3CKezjs62SWR3qx",
  "key6": "2xSZ2pwfY12x6fSN9GaDLrVe3goCt3LpfD6ck8T5JoA9qQt96F7NHoUfWHbyqsgQwgb68d3Gc4pBNR8YiCtAXLmx",
  "key7": "2nV1YuNx3sHGeGzdqjYL29Cg1dRyWDW3MCJsbhpsiJKeP1txiKYuHwwzTBxLTe2cCQmmhrsZTAmcSp3UREx25xE8",
  "key8": "2e2VmmvVCiHqLTz4hzHH5f9GGoa87nFnVCEsGuEqRUJw2Ry1PaojrhdEDbutNmoXLBQ1GojvC9kwiBdTg9cCBT8m",
  "key9": "5bYgXuKQbz6p7UViGXK2cm6NKxbJEcDJDErusdYQ2nbCzh4fSw9gFMahgL8zEmPjHGgpRnqcdT6n2zkZMuDH6etV",
  "key10": "5hADvjFFjF3ngrtsRfyCZgP9bpVcATNmtZfR6esis5XVBiQiSsfxsGFqHyoKFvck3RDfGTBsDvjS6jNKMvbrA8dL",
  "key11": "wo3xBPRfXLKnWr1WugFwUB4qo2qSbzrDN4cf5TfScFCDnmdkd5pPEy26deiCERYbLbBNzQu7fSCvn7CRTS7WuGg",
  "key12": "4fzQmR4EDBnW7s4FXiJA7tByAe76oKYk5dNmLYHpkbLqxATYjFwcUh7m4xdevECpMisaD7GMvCFfzwUArXm4wE3N",
  "key13": "3VptLAzF4P46Cvmwe4ei6FigWtywVJizzsXzFFeAFtDiQfqX1cod3dW6yysMyk1m8eXcv8CxKQBT6tPDeUa2cNeH",
  "key14": "Xvm6zGSQMZbEVdxmPiQkLRXVwEtqGCYpt5mkdb3dRVDUqt5miL6gFJUATZyrgH9FWLQDwBenNvTFCiyHHxkBc7H",
  "key15": "iG82eyCbgVytcUfSSoxJ2JEw6ZZfggn4eLSLNT43Y7LM4WJpexVKaM72tVveRK2erVrrQNdcnA1t2V2TBfh5XiP",
  "key16": "5ZLT8HYZY8H3fQExgKQJs9pLUP39niXhs7mUkZRCKrWAbfQi2mPuMTHHWoYsBoUJ4i9ccVfw4mvaE9nbhcb7DVb4",
  "key17": "RG7iF1kEYQzwQqVPNs7hLBLS2pQSXvGHQP4mwraVA7CruBuaG7ta6xXCkuE6fk1GvF1ZBEDP3p1Wkwk3N851xfi",
  "key18": "3LejhQR44JQz93AkUHhz8ACxBhPuSjMhK8KjsRXpqge33GR27Qz5tEhimgKmHS4wJzCaFoMN9HA8m51UUXKooHqw",
  "key19": "4grCpXo2kUx83r2GRExZLd3xrquN2BJbm8ijFgAywTZcLLcSxoxGHJk6yr4dErMSJc7Sdb5UUZq94fqK5MyyNYQz",
  "key20": "2Pik31MpF526H7zzrj5c1DofX3Co2H9DprxcDTcYSH5UR3gDCJvSbDWgCQmFFXitZzTpSExsyici1AjFwM2SKBhJ",
  "key21": "2Rs1SZcDYMudYt8kdk9gwp6NgEMgKbyojvyJzddnDRLk395QgZu15nqBvokrZPS3XcD9S217uRMYmnayowwKyYc9",
  "key22": "2EwMKjHDpk4sTJXoedVMVXoN4jhtKoc1fvNdSEgoggKUqKenRdRsYU8hhDLXwdpcXRpQSUg7bCCEhmFMXDWqXPfW",
  "key23": "vscZvraeouXtMB7Yy7tSbDzbQUMwCzhTHsdKFhPHSmBXCrrZvy2BpK6Ei7M576KzC1VCHEymPwFGftUJFCnsgkr",
  "key24": "G3HkPQvxoWx853YNwp6rcfMtBFxqz9rLwGDFsubXK8piar2hb2vESQdj48CcGpqQGpGJAqDEmztsJNUCAdq3b1E",
  "key25": "5r8RSeKePjqMqJrJPGaPz6JncXCjTAsyJhWnDbRoGMGoSTRLjsLokwLbdvLaFUiR4BgKNgpe27xj259EToFWuf4J",
  "key26": "5Eui6saW9FdECdusMxBGSS7MtWNrBBPddPYsNP6MpxcWT9gEN3mJGJ6LWyGUSzX72pDVpRa1R8ZbEfv4Npr3Vj21",
  "key27": "4S5Px3LUkEUg5Mow3sDeXb3CFQWaprrZX1kkKRqLVv9Fgj48R7uzcSDRJhr8w4HAwNdj5EE6iAQyTH8KGHYokJes",
  "key28": "4iAQSBBMWawXt1jWgrfdFeoaBGqfSctjKnzgSaiDp662xRnCBgcPh3m8F2jL7YpzP3oEgUoVsZiXF3oLMu6qZoN3",
  "key29": "2df9ckcUBW4CUC6zMowXnNAw7fnB7Q7pQWQAi7wTLBGLsEKECGtGTHJ6mBgAJdHscGTMhbu2PNLA361wVpeu7X2r"
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
