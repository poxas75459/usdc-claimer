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
    "66CzeGyZAapkunFFbutpmCYH17516kJHuBF3jYpwoj9kHkgWvvsLZ9PZ5aJUarrpaG3v8Jd4rMJXcVReCLJwsQY8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DHnx51LdVh72fJMSHvoXjEUajD8oA49SxxYgcA6PmbhboPR9Jy9L2SojkTnxoBh9cVwjXYh5shafxh6b5miXsch",
  "key1": "3eVeVTT4aH3udQ6Wg1twxiB5vFx38CtP8hy7cghbcye9xV48nBad7JPKsTX8SynMwCDQzVDkfFoaQZdPm3qkDfzq",
  "key2": "FV7YSPeZPQHNUTiijZ3k8yKRWgGDXhmYe8vSV61GuKZ5tWnng2savEZK2nqamFbvvYSggY97Gudd3tdSqaEK4dv",
  "key3": "4GziRbewxF5i8NxJmmsShxWzU1htA8yAk8qsMCSJ5qWB46dN5xFBdXjbZbDYJ91dPEFiUcTJB4asZgbihxvxR1Xr",
  "key4": "5fkT925NU8znv7p1Dfa97KKZpaMfbjrpoACDEiBeRyPHfVdmb4y9RnXSZBUXmMqoWatjUGs5cF6dnvaCebjTDAKD",
  "key5": "5r1EdA45vFLwCx1t3gvySr9ipBoiAu74FL7MmFCzh1aNR3qg4SJGAacMTAKfgYBbxZKeFPCFaBWvCmivgtm3NYxk",
  "key6": "3uGWJGK7ipvEFAJHQK21fzW5GrEtJwBJTqW8qUFfL9XQMLdYLQ8FUD3qfhxheVRFwJnYUD2e3cXTnE3GQrGN3M7Y",
  "key7": "3S8V8Dk6oe5ZVGSLWgp4mFG8oPQWW28ri8pazy6VmtPXWfvvBDhPQnZrw9GQ9FekAnBRe69kmd7XWZW1fbDpW7fv",
  "key8": "5CkSkmTRoK6sD2SCMYHhyhHjcNsi7jTftbLQatYSsN8xiH6RM2XTtLxRz1WYbnztoh4caGQDvk3F2SSh5eQrcdu6",
  "key9": "2fLm1N6F9LbeXe6gtoTf4ZyLYwSxPorFEpsLwr8gDm9oQpFZUPahHeJiNyBjqYTSPBeH9qWRSDD3K9thNYy7arYa",
  "key10": "5GjMJrcxbdRbqqU3KZYDihJehmRNrmNUkH19HNatQFHm4GD7hEZzYEd94L4U23JndjuiCjBpwDPv4F4LVbX17fbz",
  "key11": "eYhz86yQ4aP5J2q3dPRhaQZuzUXRjEfR16wssAKcSEExm5Z9n8FGsCMPqF4VaFWQDYshYkLvPgkKAg9pAWTrR3r",
  "key12": "4qyu4qoJhLcWskM2CC5ZSHHNSagPtf6orWUtt16xhiwPzoNQe3h6Mv1ymrbFN8b5xZMtPDntK34Fo1aKGfaCAANr",
  "key13": "3szZ3LbAFEx7ACa8oQJv1k2beJtz5g2mUBdjuaPmvWhF8KAdwW6bxow4LUEoEXLXyqPp8MoQgwdtZsApef2GoiDb",
  "key14": "GJkYqAcr3qZ2d17MVToTKDRsC8294aK3TwZcogLHRwoZPis2Y7s6aY5pbFg7pLmmB3xhz5NAgkzDZePsbFDE6P2",
  "key15": "2SVYJ2EfoQap3W3ooaCZZfoL8VPtbgHHVo8QNnWDhQEAKyeDGN7nYK5NkGVrRgYWSwYEmr1h1fS1pvEYmboZDB81",
  "key16": "2nAuEkzvgu7f36UBAvPMMwC5ci4N7PShnN4UGs7aZuuLoGHLiogZTx9H79VjsFH1kxNVeCE5BFyTqcEqdbUgnFCm",
  "key17": "52YVwmH3jzxbKhrPpKykq1MsYDdqQQRziiT1WzLBVQ59xguHXVDiKAcxk6uezLc33dFuEzGEX6vYU1Eot8ffTFb9",
  "key18": "EAiDaT3bLxbegLza5A761fYTKvXw75HmXXFtvE3QcLMmrYk8wNdEBgCFF1QC4PJ8p4xT53aVViTyijsT6edsT15",
  "key19": "4xqkkkL3xJHvmS8tSp6hWwHukttgg7xGY7uRqCVYG9Z2CDT5cSjmecRo7n6wvTQChQwGd8cJ3Txe2R3E99eD3kKF",
  "key20": "3jTTpAT5KXX2cotoQTSQMwe4X3S7RNqyKZZv2XjH9BJa7C4Aw7YCsajAf9ZX3uYdFKEz3d7QH7mgvYGkukc3QUpS",
  "key21": "4inMAg5zMUCg4PDkeQjwjzmS5b8xf4ZxvtnoxuPELfKddzFhPHCxP3kQN3zSc8MZ8P9FgYj2BDqDUv4b5P5kd1zA",
  "key22": "49pFRL39qb6PfNhrgY9FkYB15SvbXKvsUai372NsWWUF2o18YwAhBRgfTUtUKAYmzsY42bHRKupqU6GGVYehxbR5",
  "key23": "4bXot7Hnho52udZ5dAW4nyeXnGmYxscT7eE9ieUC1jytwGpG5m7Q7mtSCB6fYXFrnwEDmkFAvBvHtzBBefnBrvyo",
  "key24": "2FJCj6J8xDTDxkEMkafya2FiTdM21ezkLhFt4mm4DmxDTjEQqEUzePAPMD5ntUXFBHgEcLjxvrHjk16mULjBTLnp",
  "key25": "3J9QKringXQ2ezAAyi5bfyZEduwnLtNLBizWWHr1HpgbC3MoUyGhuP1s8fp3r1bN3nsQ28drZKNWEu2BYin8JbiS",
  "key26": "2cAprpLcUkJmanzRkXrvdKmvDfz2SxUCBCrWp7bs2YVbHBqkYZ5L4vLwkM6a1tvVr2ZCSAgbTvcKRtp6xxdK6Syd",
  "key27": "4sHryWHf7uTbEr8hSi56XBCzDLmwFcdGquwpDSKen1gUoAgRYkRLCutnMuTZQrsrGQ9b5eEEmEimLrDLXJHV66Yh",
  "key28": "2DNrTmYUYx6B6M38JqwuyQBk4Q46FwxnV78w1PSnJqs63Z4AUKk4wgQQF5BxKnZEMzteHJsahWUVtSpoK99cRguQ",
  "key29": "5PvBawPLRh2juY1tsSTnu2rheNLSAYjsDDP6Bt2JUN9KNqPBuyzJLZYgVo6uWXgLkXj2vkxMJvw37aYjRDuPXnLv",
  "key30": "45ks6q6nxSGwK4m3aumD78ZS3xzHf6yRN9CGupX2j156bT9JKtton12dmHHUj3FnSNtUMstcm88YFKfsTEExuThY",
  "key31": "2eG8UXP31Mrm2trNMqS7ibR7AysbLdNr33rhfocLfzJZiFqpbN2QniVLnmyFb6JxYo7HhFjsEEPiL2ESquRLCxft",
  "key32": "3nHeBaPt9mtgAfVmgYA5Q1zCDyipBg3PoLFSFYdmfkWQWE3jKMqxeAnzzrpkGSe5pZkRw18VvGg1ipKRpWErsMS8",
  "key33": "2ja7Zi8ZXVQD1X6ZSoXwpyQnrBnE6DqkiZLkKVzizys1u7STMzjYiThZj3NEH51BzbzAGczQzywezPN7DvksFLLg",
  "key34": "4RnTsm2zBzrJB1N1SrnDzF472Swh8ywx5ivwuvzyvKg5rmYGXxDqBpMDMbv2KQRiyRh1VCUFWaRX2uZgbQnDypHp",
  "key35": "RJtPVwD7GLBzzRSuW3gMmu8TYF1dj7cg29Znp9EwP68DB6g8oPHb8JEAdMLVcehPVxEMmGLj4f8hJkfPDkM717Q",
  "key36": "4pcmnWUXExudf3Bj6P1hApTHyber8Cvrt8UNPf2QCYTCrrDq1PEM8wPKKQa8HeKokgwMbK3kXqjfdzz9pBGoAR8o",
  "key37": "KQMirQyc54pySF6xN4ZArvsPtwWatv72XGUrxeu6L7rDdG85R5efYANT8FYR3fy3LsYJ8hrNyfwHuEmumSuGYhd",
  "key38": "4afBnn8fNcf49JvpRrAN8TjfdMCJGGwyzQDFZiHLWvcNY9vieMzBHm8qANZk6XtER86aKjL4Cvwi5QMTQdPjcvAQ",
  "key39": "5VZBQ1YFygRw8T7zs6xHfGAUiFS672omhsaCHLPw8gPzv72X6hVrNoGRuAD4kPvNQknNSh4PoEzNN111mWnt4n2k",
  "key40": "3Zvc9WBHvqQfKfqZbimrWLWFh5Qf6J7qMkjLimuEBMt4YrVwfSdkcQxDtrrfyjw5LnMupAmN7HqECgqumg6hiyyr",
  "key41": "NPDgoHKn9UpkqcQEWZZMrdoP9s3HnxPyct1ehUvuc94j4oK9ZHMsnTVgNRR4ma9CfDTyyCkKtqdA3rZUUuCmTAM",
  "key42": "4E23G2Cq5LTM7iWyyekyKNoZFiJa4zaeg9cN9NghCrR2cca3hTsnhKPgDCMbVULictpmwrERaoeQtD2uASXvAPVZ",
  "key43": "49dwCefNrNEVe8QSAFYfKBZTwRUrn5YqeVyJ2LJHGJgJderonzVkXs4xszwYs4t5mtPfZctv9pXdCSfzJ423Ykzj",
  "key44": "3mCxxaWkNdSyu7TEch5pEDmKXpzEYooiXpH3jw9X5hVjVfgToQtr8a9DQXDUL4WXPn85bAJDeEWiTyabk1nehrDc",
  "key45": "5mHu1wA8A9faczNpFi9mUH5CP4ZGn7CL3sCQh2Xi4V1H7L2ZtbUPTXu3DgkrAF2LRvkbtQUPm7Vqi116TdiPsgus",
  "key46": "63j9f3VB1CPvWbCQHWUmbjfCx8oB8eEVy1rfM54BRDL64UBQDVG8vg9MUHhokQMNQ2GbDadXYGdoa57ZTpDmSss",
  "key47": "3x6tXETbbMmrBQsYFeYMMuVm8mZnAvbWWqhLMWtw1nhKQt7fETLT5o6WunzUHPyZDFruiiEEFaZny2ZpzAgzvZHn",
  "key48": "3B1RCBXyx9DNPq2JgRoafvbYtz7jARwrfoVrEcr31ypiMSissU36rdScmgGqa4ygU9xWn8XLkhBSexWLk7UM4M53"
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
