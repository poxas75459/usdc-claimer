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
    "86QvoPuCKKgkGZnEbCLkA2wEgpaw3kCf1iiGGToAFDaQUTYmEjmTKUTW3fL3P5XdfGK6JfpwjXKmjtDpKN4bu9V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FKToLzBGCrrQnzPqysH34HLqsrmH9RBfVQWAT3FPHd5gjjoPtJmXqGoMo6fSTdGrSaGjcMLrqTqWHmytZBs8DKQ",
  "key1": "33SjUS1CyWmQob53oCjxjAFrJ6p6fVFSF38BfZ7P2RLSDzCdW86Tf7CpjrByvcT3NxNvnNDWbErgSULWxFmgTrYN",
  "key2": "3UF5hUgGHapctSYEYTHsGRhLB4cKT9CCLV3xrmP5nXFJvezd18LrE8u1SmxFz5q2vvNwkfCFbEvenRheHbDxWE4v",
  "key3": "5hKeAnFDjUQmxz2ScwFaS6Bxxb4WAT6AXJKNJHoTgP22abCCF9jhEv2TBFCmBfCkQTquDmaF3aURjVRXRKzgxKhf",
  "key4": "3tLSLWFNbZDdt55aff46EsFHXNKheKhxCQX2MspgUHmN4VHJCrmkGYyV2dsdKZkKoLaam5aEx1x9eWk2r8ncf1b6",
  "key5": "3YduSjBpzVBteD2T1eRmvWwrcRwFxkpsZr9KuivJPjXsTrseFWSHgJGHVJcRsQdaR9E52dyUbzXVGt97srK6LQEs",
  "key6": "1dfPCKN6BMAtzfKbPtvTBY7iVr3gwrnUL5GSqmQb36meexRodyuNuQ6kNAeCHtfQV9fmmobCnMffGotCsNwRqjq",
  "key7": "cf59KZmg7pSqJWYdSMr2GbsW7QjFai88NPcJLWensWJa84kksGPzNGzV3rv7UL6QB799EHdNvXxPfWaxP7mw9NH",
  "key8": "3dbJ5xoefUs4MkvwnsbbDX5BEKuF2iUnDSxiY1XSz9sADfpbBRrRwC9WDL2KVF2GJbBSbTExCrtDfLVnFHCrM8JS",
  "key9": "5WdyvKXxpYteUSbu6Fgnh2rtc4k49HSLSrFjqC1hwLSSUYWHFG3LRfViU8tkRw4CSiMDbVxXgAbYxUDDyzTW3YfA",
  "key10": "xL95k5jYjoCf13GqBCP5m9yZ3ceeEfMQVmdGfM9zSn6jZqMHGCGM4X2jfAbxo3u7nxoc22MieTZeTLsjWj17stq",
  "key11": "2GmAYJexytp3FetAgiPrUAVryipgqB5p6emioC6XMUTB3UHzDMkz3Z5c8X8hVUqEpTQMdbjBpCmKJeECgKXbN4f9",
  "key12": "5Y5DGcWDR14WebMi55PrGqSMmnfocoSEhFrab1YqRpvRwPWv1bQKAnCYH2wRQceca5zHBhJd2hEqSyiHbn1LUKJ4",
  "key13": "3Yip9dKRpyoUGh2BjMEQhKaiB7XBDZzTXbAfCotvk7ehY478hqD1CXehTCV28dxR9KY7EULy6KYhLzfKKBTQBwrh",
  "key14": "5h9Bgi8NEvBxUFYAfzs3ThzoaGW1b8poeDinBREY92ZnosMcCtKecSJ7C5C8U1t8nf4JY5vTkYMMXKYtafF5wQ3",
  "key15": "4AyHvTE4vaWyhdvBEC3Mri8zCLp1hAW8u9sHwdjWXLkohtENiqBy9TaL9knamb79oYnatkum8hStUcLxt2HKxf1B",
  "key16": "2XVRoAAHnUYRUusP8vv2bwrwzLqKi8Yb7mXUUgrbzeziTSQJSCnx9hh9zzZgobT54FUfBjXYNR52v8rPqD4m7gbQ",
  "key17": "64hmRBzsJBu82xDoQGe9f9rwgkuBNJcSLYKDG6GtYtnbDZUQxP1KJZ2q2KJFbjAFVzLzwKhMw4koa17ToQu7GX3h",
  "key18": "5K6JEb3qeDvDEL9Wr5J5mvJ3o3oCDZ94t6CfXprqohqT5LJzd7ebMju7LKLSfZjfpmUxhSTUJ8tYVjFQQkcrntDT",
  "key19": "2JFithWPf2qAvFQGWSbWACKXo3JwyGv97TNmkJcZCNxKUkUeLZQR1mNyjPFCM2xd5vJmpsb3tDLZ2egpwcuBNGyf",
  "key20": "4Qqbs9fMZgKTzVtAMYqK1vZunfifi1YhPBPXG7BddNFp2cyTWtw9JnrHqc6RJrS1B6y8hU5NxmfrpJFKtpk32dnd",
  "key21": "ZAGqDWwjKdSdsbadiKWPgk6EsRAxChMPgTJK4kYESPsuBULJ4Mbg3KkfBcrV1iq5EKMFzvovrr3SzJapP9EyL51",
  "key22": "5inzxXx664yXmvZ5AcrxN8Zf4Yx4bnk9rSL26FB69wd3EaXP4C5CmXFvvWagNoewFbtthkjVe3pZxRadmJNL1N1r",
  "key23": "3pxPd8Zrv6QHFFNacA6xBmevoCrcHKA8LHjACcEkgEUwhpkd49bozVEfrzH7AkZ7ciZQAJednQBcBcSkkWTtdq6d",
  "key24": "3H8wXJnvNCgByUVf7LKtui8kWYiwUbYv9uRKt24V2u9y5A6eGFeWhp95ADFrxricaTdQgNJoxhP9XZLPUXWFC9U9",
  "key25": "4TS6h9dJMxrw3MoXAcTpNVbyVGyCpGJb2NqBqaEZyf5ZcXUFTetSiyShh3smjBph83QGmD2Bh6iCpZgn7NxidJp5",
  "key26": "2imqJhzDUGksw7DPtStPpY9wf5JACHESC5mBCnY9pUNqZyq9nc4CmLH2GNq42yX75AHBfuQ1Uyn97swq8UjTcrGa",
  "key27": "5r5T5UcC9Hj6eS9zrc65Nv6r8s6SBtC3gtAEthqieKnR7aCCvGzw3TvSq1dhKWisbfKsqtfyrCcCMy22jgG7iJ8b",
  "key28": "4iPCxnmAidxComMx6cNKJTz5f7XZS5FJwxBuH2gnzBThazNie5A2zZ1PoT5UfK9khhWEbuNsBxsmqMssWqV2XaX2",
  "key29": "1zi7MGvUEVHf1XD8XUfXSxkkVWh6aN3AaWzq3wYe5Zm2m8hdskUtaj5nsDp9SbXdhAy2uTeZZgkVhs8DSV9eNSA",
  "key30": "5X6VWFRCqnWnz3tLdaJFZVY4sMN5T595qydjnDq9rPsi1URJDqVoNQbCaWxDC9HmGnQbu4NMY2NWpz3yY2JL8dR3",
  "key31": "2yjoe6r2bxummguW3fDofXmWWhVPAZcvpJ3tusiQ1BfB6SbUqxKq9CzbjN4eD3uoMQaZsQPybzE7nE44UVw2wVNn",
  "key32": "2Jzbeo3PJbXPMBZyCczv5g3WsQai8oRxdRi4CEGEtZtd589LNdbiSkrLMukAWsfw7PkzbbNRf2seGaPN2JamjZub",
  "key33": "5TRTYXL7HW7cbA8qkSnR2XRCpQWj2e2u3QLqSBwtg8DCGoSbKsGv1YeZUsHEv9jZXRdQMHvrT95fEEQPZuETGgLo",
  "key34": "4HhabddLcZn9g7yNtJtJdHEysc4rkKKRhCBoXHTjze9wzH79iHP2Ca3UsVgbsfufYY35yTkWHZYAVNM8wrh4tdPx",
  "key35": "2LK9He2YLAz9oUor7rDwUsQE3oZ2HyLSTdrz9hJddfH9X8GcdBZhq5J1Efog4rMQbc1gZR5y9TcsQgEUw1VGzG7C",
  "key36": "5TQRx5dUA3wUfPZ5krE3JPHHejZLrex3p58Q6DMivVbwWKUnPfLgWNQJ2crsMgaszxbNkMzthPVgM2ExkV6q25Xy",
  "key37": "KxCmH6qy8vFxvxi5xVCda12EAmDphPrH1PC8WPe1hstxrhvsrfs5zrpNgNeVPGsKj4YNrKuJzkVYMah8chB9JBy"
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
