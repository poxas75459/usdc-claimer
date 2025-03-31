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
    "5RBwkmKenoFzxkQh4b3R2Tu4DWjpZxfhSUKUi5f3GKdimAN168mDeBUgAYSGM5CNDAQVJVipND4tRUebgeHMadM2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XTo7ohmVhYueVKkumKzc7XZkpBUexJiXzaTFHdaZ9wG3eyxxnv2u5H2azAM9MTrhBErgwzbeW7FEGBs6dEbHLHX",
  "key1": "3ftUiLg4RNK6o8CjH4XEAEdPfgB6zaUBiwDMcbQJ8CAeVpHUzt6aQ6bTVD991ioQ46DvFwh35DpmrD5yojQvYAbL",
  "key2": "3pV37fh9CFyhZMne767QmBxhuXtkD6CueGtoXaY8wZxbrUNyNccGPnkPuTxVwxbngWYrej8zaoiU58UoGYLyS8qk",
  "key3": "3KoHxgV3aUMKpbSjyseVJepsfFBq4BhXi2okysS78zfKVEST6MQPqrz3DLrZPfXnGQBrGLbBPvXtSBJ6nqMePsbn",
  "key4": "Z7ebE2PBcnt2Fh1fEHN2Q5w8JqwJvBLgHsDZp2obRAwm56hBWm73aYapZZzbVwGHKdfDF3g18LdvvxQWYeuYJHi",
  "key5": "PrbqnvRbBdgWNS38T1rtFQ6YGcn9qUsPHkbJmUrUFopX6EBsLM5KNMb6ym15WdVJKbkr3zFrNvuhCEZjehG3esK",
  "key6": "NzcyPvR6RPb6KPGGBTwALAV9gA5jE5Cfd2Ad7ySRYpfJ2Mu2FAwmHyXgv6ujbcKDnXbBWttaKLv98fqxVoT68AP",
  "key7": "4VGbCQtBFEgktPrqriRPJomyCFAsvRW2E7QS61u2CzS6TUCyxKpnyx8RjfnprWMQfkKFPwT8aaXYvKu8F6cWDSbA",
  "key8": "2LhAk1YGvYba1tK948rtm4BBSBVWgCVkxZb9BjkxwPtz9EuZBqVUkQTCBxHfZwMTUfY4jSno4NSWQmcwtzETZMP5",
  "key9": "2tMZxAHgKr4NS6daeE3BEXVKVkamkeWhoU8p7VzcpkxSEgS7pmgjmeVuVEdEqQH4Jstfva5QFYoqc3yYzgCSkxvJ",
  "key10": "fJdq36oGF7G82DhpLhbvgTA7VBGHVW8DmHUZcTQni5CTQaqz13eESdd6LQkdkyUkJSZUR7XVnpmxvK2qn1oSGdv",
  "key11": "UCqoX626nEW1GK6Z6JhMwvbo5U1xZGLq8EfBrXxtptd2vhkLuoD9tcA1DP759neHgyCAd51Kv6Co7hLVyUUbfK5",
  "key12": "3S6ximFDSat9YuerMJjqTT8bS6JmVaZCspPs5pd5T1YjdE5URfiAJrBY93Hen2XFHegJFp558r7bCAFhUEWy9W8b",
  "key13": "39kzrjXSej9Rkf3Fh8YSGNGnY6XRp3wqcjWXuGK4LEpWajymYU1DFe2dcziBdzq8aD7G9uJo4ZtizzUhPfTQCyud",
  "key14": "5qWVv59cuansqVJvJYT9VtrZ5UEg758QvWWgVtEa4BNv53z27o5dzDgA3rzHtwMHnMzv9r9VVvtNTNiyeC3Cqzeu",
  "key15": "3zT7XM5quAEZpbL2jfmtPAL3G8hrHRkJgUvXXvYHEJnLJ9Fve8uy1nP6HMX9dkRTK6msYGtmcnYZ7a2uSb4MUaTG",
  "key16": "63b2WYTRSibwnKatfJH2EQUcxt3g1cQg86XV2yCftcWW2RRpWCZaYnTCp2FQv8tQnysSjSr9ABUJ8bv8R88HmEPS",
  "key17": "3a3E23wmRdt64BfoM39wQ2tnvStVEgEuPqpMkrckvbzzPGhvcsn3iU7Kqr1px8fzJ5iUky2qCckoU1QYUymfU6Z6",
  "key18": "2KXySjPnJvwCTAdUmJMnDnxVQFffhEuwq9mT4QM6bcBQscRRntesdFYo1njCtTWPFKSo62JTNXaJFbAfX9r6HFuh",
  "key19": "5LJQPeQ463w2omGdJJmRDd9zuQubJHW1iBA2ijdWrUT4G3Pr2x6xiWJKcAjKjp5pnZvhAGFUcXQoewfno2nVz1vJ",
  "key20": "vRkdxVkPYfDx3bPWKS8LtMTi7k9wcZhpaDicpuho1DG5NQ5YTa3XVCMQAdfkTxRnpGSSCw7ZhZN4r6Jaw3VyMcj",
  "key21": "287FwoaE7GVoZfcX2tkbw5PpEEnxEdQftGYxLkUqDsspzNYJNL4f7mbALJHhR3oktmVeRpNPaEQLheuX51Y1iA94",
  "key22": "5KRKmLrLSVbe8P7RUuUrx3dGToReQpc82MbBED7HspYxiiircqXWcK6P1FXpotFzCfSubNJRQNM1YLAFoXSquBAf",
  "key23": "3h4HAWK2jxh7feRauip8qXJjXDKrzKHXFVq5UP1FPuryXtypM9aVUx3bv4AwcW9qg6brzWT1udLpUTDBqH8FmTuu",
  "key24": "4D6joLQ2pWspDt2aLnYFF4ihArmgJnKcWMxyz7B6KRHzvPnwFaitNcFq9S7s2QpPoG3KZYNEXXANHafBa3TNceuA",
  "key25": "3pwy1cF8tJYPmFWwNWeVQXwMh8bW8719uHSDEx15nLscDfRr3su7NEynpq8vr85hz5J4tLj3T6qvTFfYhUapaxAa",
  "key26": "4rJqoFVMygkxWWW6nNhyCcfdZdCaQFikpqhKVJsZYsfvy3pRh8AE3aDHbt5s8CszexGnRc1kgXwiiUXFWpAaGEd9",
  "key27": "3XZkpRfLSVsGyuY54YsHszSS2ktHcct6EuLhMiXRBYShYVthzsqjUYPDTf5hWk3YXBUkXGohEqxVQHgCNYsLVhvv",
  "key28": "5hNA8nja74AHy2LKptDvUj1e7LJQAMEDULtkaQZGEXvbUk13mjtYXeW9wa1JVZWXRVrZ92a3WHcbGenUbjQt7PaF",
  "key29": "5F84Swim51awUGKJpLDuNFrPsv3s8Srp5wqtoQhiKLA8LyYhTynxuxJNda37R8aS2vrVXy7NZogwXPKMkyhbmi28",
  "key30": "5ga1Fh2Gnjq6vH4eQ39pGqPGtmwPQUp1kgpfphAmPPFPCbZ3vZXjeyRArL456a158kpmRvdr6bayiodNCw5BhgKp",
  "key31": "282RHsJzHjdbPxPRCscb1h3JWnYNf4Q54366E6KHZeqzMYYTVLP7hvS7MyP9jD3g7PbDfKFf1BJ6bQdCfPYJSHQj",
  "key32": "fiF8R8diyR572kQthTdhvsi9oHNJ3NewfqizoMSLyDFG7fD5oWSfyn6FRBwUgGgUsjmBtFSihQ5ErbcbMN4bfaR",
  "key33": "4Y1GcNUodkHqmYMp1Hbbpq8JVHZeSbchmWcTHiiXw6q3V8nCPkRqWCWPMiKhp73AVFUdi2aYB5zjxLLKyabv81Vp",
  "key34": "4b5EF3g4ywDCoWZQobKXnE3HbLvYH5pLEMvRqFpgan1xKosnnRbvAm5UH5TmSZqAtDPKVJuNPX8tYhTnNj6PgQNp",
  "key35": "3V9iFQbqi6J6tNseRozagCKvcMdF5BdwC59gQGda6AaT6tq2F39gGnQop2hcHSMVfCvdeHa9W649gDfZtSbKrM9E",
  "key36": "Xo3TZagGiZeL1XJC1WetTEKCVNS4wQVFg6N4DwHhtrrnGEx77XfAdg3fx9WqVv3sp8a58gTRYtEJW6EgrCSfvvt",
  "key37": "35RSwyewHX3KUWe3Ywso9Tz2nZWwkmV7p9EqgiP3S17fuUyTot51BrzB4MbybsijuvRzumUxEgj9bLPMMsrnHCrB",
  "key38": "4qVDCzN55GCeTw7Nnbwfq7DsaezNR2umD4cNitjMKNxfXtZSvE58P3BZ1kNNLx6ARffBqaTwtbVGe5jPuymbfnc9",
  "key39": "4H6Bmfb7RHncCJ1pU5mkSv9aD5QEpFL6qoaGFDBz2CwPrBLavw115hgvac6EhhiofymGKBimKgGFbhHW7YNm5DGB",
  "key40": "25uXHWujJAUVnKrWMK3zFRdc1nSgjfUDqoWT1TYb1zBxExXqAjJkWVucruPeqeV1ocAVBp25PEYSKDdosid4YYmF",
  "key41": "3Uk2GDoN6RQnosPPCKfjaPSsv26aQwZrEDk8fnDy1TfahdRS63KtA2f9U2XoT7iNdqLCHG1RommyPCctHMXHhX5B",
  "key42": "3WsQNfm6nVGjSnTPZGMpQoUYKg9K9iH4R5LcLRBpQDB4FQBbcyZoGT91rDDungVTafpWdKMaPyuUxDBkzgDj1xTc",
  "key43": "3KHjmnDLGQPw8tyY6CwZmy4mTS5XhuV579nk1q7WkEwYehWT91BybNKo179iZmkQ6ubnWtaJm8v35e1bz9Ectp5x",
  "key44": "5WBr7ypTMZzTrYXYvqnrG8fESd3oZL3RrFGGXpwUb4B3k9rSgGdXYm3x4oYzB25Y9VGh4mePYE8xGsJp2fkx3x7R",
  "key45": "5trpWx4M9p6rGusXYZo7zD8FEqvSyvkNE5N3fsT1CsvrSCbhQyJDBJcLugsx9xZuRcAKirnHJ74uANTWHjddcW7m",
  "key46": "3jWhzmhn8Wvg1v8xUcfzL7Xg2pcrTjYraEaMWbTnjKqKurE24EjD4JR8DMdTuWCfzKBvY65QyEAYEEf7g3mF1mb7",
  "key47": "3N6aKYBDPt2xhCzS6vbpy8XPeihDL3DwsXvR2VCi7is1zsmyV4ZHcnfWgDdTF82cPDszZXCnwirjV1CRHrwwFxN3"
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
