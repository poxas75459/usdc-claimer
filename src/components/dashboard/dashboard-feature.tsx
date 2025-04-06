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
    "5y7xnR72J48iyTabFVsH3WcBwpLKvaCJJP3cce644PDhYuTUiNwFj5DAGwfN2xEoR3pyrHKMjMStau34vmWoGBvE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gjz97RchHugGTG7e3Ro2QD9eG6yonovNexWbHnMtxhFvtG4xxVNg6iaZGRHFyb8ZgnRw4sTeZVpZxdJ4VDJVAGb",
  "key1": "FiJKie4x2U5mTm1WoDNzmNuM8PuVbZmfimULJKcAkhkm8sF6338bQ3VoJHyB5bHA7qQaKyXSg69NL97TNnG5zH6",
  "key2": "45DNeiwV4Qw5Fsgi7RRqRmTp741oy2Av88JnQVsWjU1953cL7iYQEPpWfaT1G8wZpHrCN4p7PAhQjnwkM9EgRtpX",
  "key3": "5DKPkb3PWv74LT5Ps6mjESY9BR3zLmzGTsyZU56xFPFQKSbb2Y9fKuqPTL5Jw4sP9SuQn8czfN8Ckf1UimFD35CC",
  "key4": "3ngr11zp4H7erJwH19EV9hvuRakFbi9huC1Z7ZRwdxtJGDgTWUJooHfUxzdQQk9Y8BwGR5donmgXAGg5DAAcbz3w",
  "key5": "2cmHASLFF7Y9aF1apBqBo6GwBeRimVYwAP5sx8rz9vBvkTuc3tQ4MfTwyCCLf7yCT6mQ4u51fWfn8RpN8SvcG4pb",
  "key6": "5b2WcDBbDUfeSN2Jf18sMNRCzeUJ8WQSnzETLYvq5j5CkKbRuSYdmi86k19BDZF11BZ48JNpLZEJp9bRCyTsVUJF",
  "key7": "2LQtYmwNrioZAbeE1kzUd2KUp8LJBDBKXpCvN2PvFELN8jodSnRZFzbjEEtVsHJZpZHKKAXWZUobDVALb5xk7w8Y",
  "key8": "9QLoYCSbcmanCGEjiV7pcbmzmMcpPpg647VK5zY9QKMSEeHtvF7YiWor2hBQ4ABdRt3JggNDsJLRDgEeekG8rtB",
  "key9": "1PgWbY7i42Hcfy4rSecMKKp8ueu2qAqbTfSTaKVGMhgwodpWEob6uW2HRy69L2NBUnUVkyrW2h5WUiXutEMDkDz",
  "key10": "5ii4oEwGBWAKCz2hStX4ZhQLpnzJ3mJ14jY8H6ytiBCvdbkLLAfg96diGYwfBLvKceAHN2QVKHVYcNbybDE8mtdu",
  "key11": "2Vdwpi8piyqCSjDQ2bo2eFKw7hKSup1fGxm1gGcWXqj1FbnSSfcswhThjg6oDCZaEHfKYT22XmfU8avvw78V1ipx",
  "key12": "3KFFB6itpsUMjQ1f6W5ZLpqmK2w2oFFmk2Q2yyegh5vtLY3ELsFHRJz9qCpJQ2Vdyomzxd7D2Jf1dZHimXQbhW7w",
  "key13": "qLPoq3L2RPe1uqLVexxCTzhmdSaki7mgR6urJFHViG7ZJqvzaqzXSrQEfHEdpoLsmS28Yf2yyfDdAiBET32CR45",
  "key14": "A2wdmygJnHzRwn35U7bwLEukjBSavrqfXhZy9x3hbvhFNCbS9Be2eX8VvHtz88QH55XZpfrKU9hCAwn3rZHrvVb",
  "key15": "ALEY1Vab9wbfbfE1SB96SKfYbk9mVb77e6eMcS2LrUckWkXsrWZgLXaYdeyx8nQy4pficVRifKciq5tNmcjihzi",
  "key16": "4WopySWHq5a1ZvH1Kr5M2HdHm7LGEtpieYotq2dZk8hVwVqkPxkGhiGXovXCQFFzy3eXp7x97edvcuTvy21tuxn5",
  "key17": "Uwb6eTSykEGE68ASAmUHrsvHPX8Qb9HqeLZB4drGZJBFVqydWdiZw7e2gJs1CTsPJ3krYhbCqEdEBGJFMc9sPEo",
  "key18": "3t7yo7GpeLvnJm2WyaeJcpRWge3SPfNfQPD9vVpfLmp2PKzvfn7hGqpJcwhPfQyTTb45VmouLh3Yqq24xuUtcH9e",
  "key19": "5gSXs5EFS6CEn5MiCLqGA74BszwKDRrPWN1N3nZDnaJAPcvVF2E1fewZ2ZfdhxjEvuQ3zvpxqosTG5BUTkJzGDix",
  "key20": "5y7ptUJQx1bjy172GqoBrLZSV9W3ATn1TzdnwqM5kpGzBbrc5XFYzqRWR4WpPA5pUexmnw7JoKxKZSqFwa4wmD8V",
  "key21": "4X9pTBnJtjmGCpQBzvyt7KBJLUa3ixBgXRXcWVcAVodjFo17v5TfHGkKFx4DZsfULoVK9LiXwSPrjMJxAMqSSYt7",
  "key22": "3bayo7nLqC4iTKw3M7T6WDCwSuGyDTLXSWoZHFPT98p47JBUsWLiX8fYptNyJjJPDoXqdJuQyGiMjKpaP5GLYYmg",
  "key23": "5uoP9d3vPRqMKyZT75piFoCsMEyPx4hWDcXMixRA6HB2C5DFKJhVU66omQRjCiK3GcGJYRRzuJ1YE84xULHRYATg",
  "key24": "5hdQ5y1dPCJjJiHqEx7Fx1GvVxmM3kWE5xQKWK91uC2HeJAVzwDSu9Uw4UNG2x1hp18tJC86XUUhJtjJrjxehZ4m",
  "key25": "5cdR5UoUnUTeMUpA8Med9RDTeLE3CcziR1e8bru4Kw9j11HqPFcFNrnMDC1z5a4AQ7aGFzkJYwLqHhJUEgwzRn1u",
  "key26": "2fYTQhwAFNkm5XfdTmydZBd7CBcKbb94u71FLCXKVgEjK4HEJMtxXsETircZSvkzVStwjAytbDvhu1Y7eXncssC4",
  "key27": "5EF48bFkvU5JZdjWnNpyFoDFFpVuGwx5rQVbbx7MXRoBbiRRYaPARufKE4dvYq85KkeL8EZDYgjWbZj3Ndc4iLAN",
  "key28": "2FJicmdCz5AEsPgcciKbC52vffPCrhQo1coNy4pbj3LY3vMycdGGWbGv3RGoEmLE6BsJnePhDrDQDmxj4LTGgsxZ",
  "key29": "41wHEecEshrhVFZvK6GG9KCobXa788t76HeWZccdBXfCjtUSbz9SN5KiA4MHzpfUYVgG9XkLQK7RyD2AAUUg8NLR",
  "key30": "5ExEq1AczkGhwBEEVziQgtyMCuiLidNFcG64dPNoY4owt3GosMG13dVJq5VF9SQcLLhvsHSrBWUPVxyyB9EiiKdE",
  "key31": "ZFYih7WrsmCh1qpoXdd9LkiP9DZ2h5iJq9Jvs4BTsP112MTktPJUMCCubCur9jUtw8qnucv8SPbffScdPLTxnxz",
  "key32": "39PzF3c1csJ8UFqDm8VzM2rD7gMojKxM77m8AnRZZpLNkuVuMBQUhrcxf5xUr2sLfN28dKsMHG8Lh91bvERZDrcn",
  "key33": "5oB1Xa5i1C9MQSpEDNasy8pGY6WBf6vHbW1hGRv2nuiTdth5eSgfKNweK2nSm6jkSngc3jgLBZWyBHj9Kkt3F4Dm",
  "key34": "2nuPTwh6Rt9YJKaTYEPrC9LeMwEZjZgjBaFD8EgdQqNEEiDX5LqSH6QZevGpBQRw1V3EAs3dvCtBhKzgQHP2MLy4",
  "key35": "4drTY1QC5EzN7cg6Txa2KjJ4YQnsueoYXWoMKg8vpmnHa9esdzVZcfCj9dNkq3pTBgY8ZMyG9L9DPAb9xn3SGBBM",
  "key36": "XULBrm4bR9FrccpJR8BNUDjAgdnM2jviKKJdkiA7EE37n6PA8yt3PZV8aLfkR2o2c7gBWR1wsPb4jVMJ1uV9mEd"
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
