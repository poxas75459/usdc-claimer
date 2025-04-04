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
    "2BXHUiNS2dqDhRpxXXTov7gmFavEvhsFQejLq2otbWUEigZ3hoa2sbeNBB9UKFuNeiinQRnKxwk4B41NHJXwNMLy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yejFvSShYwAJFXxpaRcpzxFnpCrcKkpxh9hWh1xcWZs57KsJDmaf5iKf7tLh3nqEz6fQAKpiZiMM8kLAdG85Nc",
  "key1": "4K9PdbQWvw92eBPhDfynhxcXT5kBWk7szLKFE2fA6gT5qtg7eubPmh76uWBtKt79kcVv5yeko4UDMboBKG2d3Xwq",
  "key2": "4t8cc2ezq4YESDykHjq5LZRsC5qKsJGskuQcJXcd7kxCtE7EUZnxLrBRfCEkdMcVGWAcrGPakUWUNT6HramXfZVi",
  "key3": "YMEGJsYh6yfVL6jGHTydbVxCHRBnXzkSa2Fv7kDwFKyhW1MtYdtbijW7vzyNmkpvgYYnang2tuXq7ayrmzFtPfa",
  "key4": "4fk13gJ9g5p48BXTdL4JNdWi2kU1gn5crNzbq5VMer1KZiCqKKnahek3umMPoSUqGgo8DccKYm5SVw3tz4z3vLVw",
  "key5": "8yc3xgU3WAMbxjuo94wtJ7ojNuEQzPyUtC8Lcz56jrJ8nAAMHeU3js8JBc34GDg5qEs1oUAZQd23BQPtB8EeYUt",
  "key6": "5kMYqA64XCRVgNW9WhC2B9LhAYN2GJjqExMaCqWV3RdbEWGzJ5dtzzBtBr6GToyWKRaEMkxffccAc2PDYJ9AniY2",
  "key7": "G6t3kg2kZCNVBCkarT1H5XUGpztHhVvyFcC4Fe5fTgxjCFqvHvas4vZGLkrLrDC3VkgkQK8dD798o6D8Z98m8Ub",
  "key8": "4Dp6spUCuEQCb8WWDH3mQ4Xv79QJkggnCjxENzv67XgJ32onr3xTFviNJHjtVi6j2n4zenuSJCk6fT1Xqps9gAWq",
  "key9": "tUBZu4nBM3iAVrST5RhzuYNULvgG1cpEY9sbpuzAYHHCi8ASFNpAMCfBhi9qp48sgnHQs6yZtSwRKvtoDN45TD5",
  "key10": "2SUJHfMfMRWWy6PAH1AFCvb1XE3NGGbyFouSxYRvkCgPYRqLm2As4AEocTi5zAd7yFbezCCze9sAo8PTVrqoJnxo",
  "key11": "5ts5JqQShq3Ug141b6D7noPBZePGiUKofGNhDnBSXVqdKxRdJnMZgrTga2ubKZDb3MsMbfWcQm9pKJLMdkkmB6tS",
  "key12": "4fmE9AaGoJWoCAMCEHGi4fDeDDjqo4WucmMcLqUM6x3UaCqbfkptP9kr8xExX1KSovnbxTasMgh7hrgwD4SkFXfj",
  "key13": "3LLWDtJrw8goSVd8Wo116TBAo9nSzkw7QZfaH5fRFAtLZeAb8SUBZQDgwrmUB83WMUcUYmQkXmoR1xxfYi9fqTWh",
  "key14": "6untANFVxtDP5CCB7njYiUkV6T9QgRjxNtKTFUNmhqaiZhtu4W6nFiBatbsGGFhbmYEZGtX9PMx713gwhy5mXyb",
  "key15": "2bY9UUx6wVnfcLTQd9TJ7Ftcfq88xNDioz4MaRNmPcHCcYadrb1JbGNrD6NEq7rfCihHQoMr8hKiKG7X7mVcjuTN",
  "key16": "RprU2MwLceUqbnXP1aQsPhdcJa6HZ8GsPxARRLGMs9CViV4ZLSKtDA46oxYs3Pqb2TPZhwvT2m8bKmzZyASzWtn",
  "key17": "4Knb6NP8FBp39Y8u242HvAEZo22V3UoJg5Q99sAVxqzL8szTKPYoRaiumZjXCXnk5SpoqkmPaJFjGWc5nRFLJfZx",
  "key18": "XzpSYiNLz6r8YjRQo7dB3XSYTRp222PKTMxkHuqKvJEanuar6KGv9te9MVpVRxKpDo12r48BszCM26bWvhGkiPM",
  "key19": "dN6eusEbH2ShqvF8eWcmuPLz6sqqAsRr82qthWZgzCfyd8PaAapKCMctpEECactEEgn4F7SmzV1uSfQ4xadmrhB",
  "key20": "4dRJy5pS18buDQYHg9EjrnWYaG4Uhaan8i3AMbL6QAoqSS1t1RhkDUN5LELW432bq5Zj1tPtdmSYNcVKgbUyxWs7",
  "key21": "4MmUeLtvhWff5d8suwrEijRSFz7xg3wazuqjTspYckFEHcq3PrQEXr7NozKaaMTjxNDaqZXeQhf1tRmXPqoYEgzn",
  "key22": "2bbynEqrtmZ2BEPeV3f8fHFgrEF8s887owh38T8F5cGfkx4Yg8NVUS7m1w5pqoXXEZGWk8St8oM5MeR4k7HMqBj5",
  "key23": "3mTwwDEUhjdn4hFqZEgrz9H2tKE1cMhw6ErxNRirUFmxqQFB6rLsej349gpYAgbyLv1EqUJAXdEjmtJYVovKDfqJ",
  "key24": "3FKweix5bFkxPRvopFv9XNQDFMnFYD3oE5aBT3hBLohcM3doCYNkNEezpmVfVaDsbtQ2q3WqFaBSF2G9oib1ijEo",
  "key25": "5sXZSG6hYP8NegPvsnyrJoU4JcPgFm1vWTscV9JFM5Uuw91Xyz66uXZ8sd1gGqmQtcAhci89p5BFuj3DdmzyTvpN",
  "key26": "3r12HPShpvQASX5Nc9cj5PtHPt1Dz4SNqX7FozLpxMVvrGmj5drtjXGDugEmcavcNaN1ZnqPQ9MLV26mckRbcqvn",
  "key27": "2rWHLP3a7P8QbFosCHkvPYERWd5rVFiWrmGVoohBmj2HcR3bCu8RrU8zDhCsoLVcmD2cN4SJYagAHYriP23fXpTc",
  "key28": "VCGZX1E9BAk8eKEk7aiG1RosA6gz7yaJLS3DAm25uoAC98czAw4FsqWBgLxUcZ2wGB1kRHQYbESx8P8QEFc7yNg",
  "key29": "2XiwEGYSv9oKT9YPDcWXYi1ZBPmfR4jEpi4rQifZgyrMx3evrbMi4QPJ26ufVxrVx2riyqiNxKqiUz7jXpmcaoTD",
  "key30": "4c7tGqaqGjeYNDAFwVP7u1WBUrsczSUCtwuE1BDhCHSsafBzBA3goFeTmkYWrFXnXb7r3of82mvhDWpv8cVhdASU",
  "key31": "PCRqf8cftUnUFhsqE3YNsDpRyjjWajRpTJMBbwT97hQ6nqLCrV2HLHVMz7wv714xtyLNwpAgMjo6dUQF4agiKPq",
  "key32": "3ZmQu6dVUS4XHTeYfgEtrzppGxny6TkTbJFYKeiBU48R9PZva8pt7a46uLzgxw7J5yLMzNoqGE4jyNV9zo6khvu",
  "key33": "4ney2F9Fw5d3cMUP68jeTJw7pa5qg4CYRezwAD3Ue3BktNYDmGJKESs1YCenFrwL5NJtoNDKRcLrruywQ67YMoht",
  "key34": "zEn2Fz4EEnaUyTZx4PhuArBmpntdtzxAxpceZ3yqK8xC8J3hcWkpSCHe6MGkcBJ7BnGdpbXp9iioCgYZQrZznX9",
  "key35": "3H3afi1dMDwy6Kt6cEQfi4891G5j5DfmzMKqiiQvFSaDtVWaoLQ1XyFNfM5SXGQRbH2RWjLS5BPsa4RLLJnemNNy",
  "key36": "2xp5Lf1tVsJebobnkaqCq97GHe4N9sKWrr7wAnHGd3rZbCLrvJye9Xqh6PmBoL89Xm9W3ijBf25ngkjBTwGfjZPd",
  "key37": "2qfKkMhw6REYXLunpeKWh7ESXdruktwUpVMnXKNG4Q1mzAwxQGrkYt8SHyADpYAy7kU9enui3neRh6dLEYvSja1h",
  "key38": "4shGww4VBg8mdsqX7tTyFMGTsC6iWypfTeDB2413EygcwsTB5K2qVmcp433Yn5tn9hPwHhMMXme98GkpgZt96Uf4",
  "key39": "4rsgfoCTSGR8fnBh1SCYkwp27HhDW3yf6jhi5RsSPzfFLCJU1UeStRqnUMYr7MmfyNqtLjtDULUvbaHSSZxJqj23",
  "key40": "2GhRSEiWNM6qysZkHQQ9dg35b3pqh4KEwQGEyJkBUPbcgF7VdTWyRNA4Cg3dJuA4iRoZ6WDoxrj9FRuRERx82ok5"
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
