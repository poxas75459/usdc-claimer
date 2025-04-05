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
    "VdaBG9pZSxURcN13MdXvCZ5vvi5XSLNYLnchF7zwnFKrQL8RFdgEU5igucw4u9Nx3ysjxmzX69SPcNoYxHa9DKs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gDH3L6JEJGVxQopVXWLT1vW8VHBWSB9MN2iAaPfndjertm7oxEebReWvEvgvEDf8tEhMeSTDNFDV7L67d3gpA22",
  "key1": "3faSkmkJbvm5L134uJTvg7T5nGuRpdGrqvzZVSFDqr518REqvqTH1m1eL5iznqXjuNnHnbuTomwG5Pimad6kXPfa",
  "key2": "5QaqYxsS6PgJj3AQj4hHeNT8X8d2v8rghNiV96ig6uzvokiyJ7RJpmP1HkxyUwrW3P1dzj6FQWqdqFdAojqrUEZ6",
  "key3": "5jDPudxgiytUkbPBanayxXaFgWDD28zyQzPh9Bh3r4KjuhAe8uFSqeXwCHoasdvrKSmkPDHG3ahHRWPiNMZmuaiE",
  "key4": "2fFpVEDb39PuQo4Sd21nusV7SpmokZsGHX81VpjthjbAqoXjmRyZXrMXPD2an52KMyck29iQcyJecYT7HpPKUqfn",
  "key5": "3qg9JiRgR6KZDcEeTQDXwgnkABzTGhVSsSikzG8Py6YaXWr59gusW6izxA3Bpvgy39jwdZJaWRuxrF7P3JGZUK2h",
  "key6": "5kbWeTKU62iKW8YEK5XAgGk4QqiwCfAUYcQbxm7NH3FJwJv4CB7LyLgRTTvNm7fvNcnzf1SJJD21Jwm9q8jmypSy",
  "key7": "55AZQ9RN6GNeWxEknHj9h1TPoZVFwihJ9EjnZzX8gTDCq8WrvKGqKy8oMot7BhXQHdKcRBx3GAT1hYgcoC8tAGyA",
  "key8": "Hk2WNDa3YwSVoVMwW8UsPFgNTfzkwRAgN4ARc9oBQDc7ZD3vPruubM3u4XPUS1dQ9YdK5w2tDcaUgKudZ7BG3Gr",
  "key9": "5HBT6nqCE1vCtQA2WxZp4vfpNDnq5WppDuR1cRXLodtzs6jBEdA7sXsSdbT8xYknaWGp5cr1ejyAZtmiZthD5LJq",
  "key10": "64s4Hn84HN3PsR4QrTcKnrBG6AwrER79USQozfA9Th5hT1hn7RaBgqWvzU1TrjZCgAhSc5VF7F1ESof66Bt5SJh6",
  "key11": "4BLbzEVKgtiFZEzaJ3sCxscJg4jfwZV3kCBhUUUudXbfqSnK9iLYix6kK3k1YYWySpWULyCsnKcAYZjPbDnpznG7",
  "key12": "44vHLmsyWuf66jir6obLwEitVRS8Cg8DdKSpq3Gajdjka1jR5XXGW6AmgFxRUAM14N5rj6SJooeVJZT4FCtSK1PS",
  "key13": "4KzrkbJEovx3FiwYkuHXmnAEPQVBDg4Q9o6HqmEaHGbaGsz9L3Wb2UTqkSRT8fNPp3XSQaaWe2ffiZx4hSeKyn6M",
  "key14": "5kMNEcfqp3SDiHCLTeu1CbUheXDzrayK49FXhA7q8Z6FGpX9tdKGMq8VJAqbDTXkoG4PoZsk4mGYzxXCDo7SYAKQ",
  "key15": "3r2vfJerBemK6DerFG8MUWCsjejTU72zNC2xafWzBEP4PsP4z7WjocenPoqxMQjfQHG8rZC9N5Re92FbnekeyLom",
  "key16": "2ebHku3874TodBBUusCKeBd7R12feC2wQwx3YxYxoZgsjzSBugxuqGqCwz9pCmppazJ7b1gyc3vTjB2AiYQgtCEW",
  "key17": "43znQxnqmjwJPL48szwNewmdaUEcmA2w2WG3kc7a2TYGDKmNpHgUbrStzGCvM6cohV1eK3mSujWs7qjtzgn151bv",
  "key18": "2BCVSh51PM1TKayuLjBiKYkHoFtuZFmsGXtR7mbcSa6hLEquoSJw8q79otM1R4zJSSTqhdyNQw1m6aySSZYGsLrz",
  "key19": "2HMY8grs3KQ8PZde26NUdZFkpdq6cynRivyt2zj69AKYwD1yMk7dJ5MvBtMEHJ1R3YXfNFMR11mb1pAj29XceZGy",
  "key20": "2aynP66STjPvn6QijrGeUTpHYWWSAHCdiqhDYbpr9bAoeiNucvuqoEVoH1Gkbc1MvJPVXaaakJqCMh3bEHxvusJP",
  "key21": "4ns63qfPK9qZcWsRdj2fqFmAaJXkY9mbMFqcpgGuXkmuhCd235dfjGVQvxrZCBVxWMjFwo4ky6xekgjRKTtYHWVA",
  "key22": "evhHcE2adp8ShaSRc9Ucy2YCWJRhrRrJuB8WsPu1nNEmL8L1dMG7k8bkYU1Sy5Tq2ni7c1W22fbN2xRcuStdbtn",
  "key23": "3ZRQMHLbDvhD2XtcGJwxPVvhAF4HEMcEisYFG93Sty7qbgDkJKV9RooARXN7YcWbFdDFRPjEYwNRcpknbWGdQY5p",
  "key24": "43jetxCsLpAeoCRz5mu9P61z6aL8P3dxmAig6zbdHb2wq2m1jb3mYBcEYBE8RecvMr8ys8zEQ1VGSq7X2sBW3Ku9",
  "key25": "eLoHWnsVufGwBN8vyy2B7qKqgMj3g8jriRVTCGtAUN2x9bLzgCHuhfhLqaWhR6zd5rDrxVNA7M3Mp49RaLSYxMf",
  "key26": "5pgoZPX31gWegPbrDk8Ex3YksyD23d2EQy93r4S73Ak5WxGG1FXbxp1Ufjq3kFHoBpaN4eSj89LS7hwKjAgUdo2B",
  "key27": "4bQbvoU5y55GY6UW1UXg95WdpjiAx1v3xEwWQTq3iJSo1PEwxemKxgnga1hXU5iYyffsVb4FEhR2u59UB3PBi8MT",
  "key28": "4NBvv5KHYAGWK33wnspuWag2J5zRzSPbRKTXhB9AYDpH9JnuX45jYXHhZHirCCCoic1wRAFhZ7ZS3m6aZpx832eq",
  "key29": "5vkSqQ3NhP7YUp2CCftRfZvhCXm5cHn6mbakdRYFphs2zN4TxHMKwQUzTkP3KQU93TYVrnQzFrz1uTviqWCuJGjG",
  "key30": "2UWWg1ZDt8RKKWZUBE37r4rvEVM6KquBJDQGi7pXWWq6kj51oCFNjkwUaXHgNofgKUnyaRFp2YWMk5DstHHVxeQa",
  "key31": "5vXVM1CmdsDdzYW9PpwsveiMdLcR5o9MAVcm1z1nwbbgfFwVeHnuQKWxus3tw1ytMX3CS45KkS7zF9WDiYWQTbVF",
  "key32": "8kCvwiyALwGaBH1qMg6ku6nCjZ665AjVt6QCuq6mr1BZM24jaebV5Px1Tn7x1DHUNQAZdF5QnJDGGSWyvVYGdke",
  "key33": "44mGSyb7zcBHGCKJjN3qK22azZdW6tgyJHjq599Rezw29wCdQuker4GXABZW7ZhyRZoJLt8coDKyTacy8KzzaKRE",
  "key34": "xbNhg967RDK2d4nizTkHLFMh92tyPNKdLZhWnF7PUeEusMDYMi2PTJ5aU5qYKbb8d7Qm3h2ZVp5JYHTXc1SmYu3",
  "key35": "35VTSxiSwaV2ph4frGzwSzQL7aSMvuJfpWTvb9xTsArah1RpygaGdNhVfkpsf5vetJScSS5erv4jPEdfhMA3v4Lp"
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
