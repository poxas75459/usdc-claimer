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
    "2gTa32w5rDGZWjg2gJpoNnoZxxSHWUzJbFYEAh9qauZE3tr7fzw75jU7DsMXoyz51Ekp7EzF2GRuCFBu8ZTkkzLh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qCFY9zuyTTwYiYovhur4jvjfWYd92qEEuHCjdVoskshST1hq1jjtnuejiHc6YTJRPbdXk3jdZrTm9rD7qyaMBrB",
  "key1": "XrvEAQxL8DagzsEYJVVX4SqgCFbJNmvaD7fFVr94XdaBNR5tjeZML6cK8qwM9xaZh8p71n9EhQUAHvzXbbhQmsz",
  "key2": "57843HPg4LfamjTYLo2Eutm8pFyE3NeFE5x7j7794Q1VMe51WfoZ5vKa4XRB5STeBNiXLTmfKXi9Ywuo1X2mYtsU",
  "key3": "2RPtL5hhVupGwrFgUe7ZvFrLQpCbDHpaddMr2iWcLqD9Nf5A2cwbPowYanBoEsuHtPMZJkQWg8zwkki6vNXU5apt",
  "key4": "3DT2QgdPsaxVudaTsYfaAaqR2Piym5kZHYCqrHsyRAXVSgetUBbJ4mRufWMvKRpQ2kbB3PtG57AjmtedwxpPYukc",
  "key5": "31MTWU2JYstK3rJugqdR7NRgk5uzSFsvMVtwPDjiUNjWmc8E2YhB2j5NKQcJiubrHUcYXGR3hSKuiraXYXhKk5d5",
  "key6": "4dqnrGkwYy7VMr3cL9GUxY9gMbBp437onJXwPQaQFoVBC4XWqdwNUeVaJBRLi5UHzMqmK9zjnLT6WkH2JyF2bAW6",
  "key7": "c5bSB3wk8WhBR4xCjrBVQgAGk1Jo1k1MhxGP8rBSTb4X3ZeiaNnumKi7fveojGtmoYD3KHKc1boriB4aGPV6dBF",
  "key8": "37D35uPaPy96VSSBWhnmtK8FaGsj1KTuaiH4eTXKpbk6UmGJyDYAcFtZjiDwnG7rMGZykEXMWtcM4T3Rm8GPUyMM",
  "key9": "5XstMKdwJNHbtki2Td3UexJhehApiiqWQe6Bdf8SSBtaLprgV8Ch2wmv2pAFYKFhPUstzrVjHSQfy3i8kh7ECNsC",
  "key10": "3QoYKEcRRtnzw9NuVoSJw9ZrBQT3pVTELHv1FQVu9MZkg3pzqRFckK9JMpMbnsFVLPy2jTUcQJEJqhqBayp9bhKf",
  "key11": "3mLEaKV9fCBvpHNY8Q6d4oaawoCwWj7oubTJHQRhYB4tTTCxKCG4fc3dke1xP5ApLiupaq1BGsmxh7rdXXZz3oBE",
  "key12": "2RfHSgj838UzZjng8RE3VzcympSChivrM8ust1SN8qETtiBCkHYX9e5B3WKWAK7HcoycHBzgdAQ65CxDp53fEcwX",
  "key13": "2gqAoGT2YTxtoi3DEoNvthjps3yXumCyTEcwAz914LtDBeUpS3xTkwkTjrtXsZf52LnMeUiSNQndGqR9wjMaVPR4",
  "key14": "2CBrm3CRifKJ69sVkfjqwDQeHw1pGKCeUYbm7NwrT2eBJTYYQsjS1eJSGAki1GLVhqq4s32Nf7n9dZD3SZoK5MDD",
  "key15": "3nbHMNcNgL8dM8rjbRmxXb1tbRKeqwuWVkNDzY7oNTnYh86Niq2C5iEB99qQnJufVUXxQhS6Bn6an6QEQXvzvvzK",
  "key16": "5h6fMX9FJ3H5HLKMaWbecyD81fEk81w6mrtxP2VRjJY67adQuN5N13zkngG3wH66E8BRCEwrZVdxiYxkbWWg6W9K",
  "key17": "WBMAyfn5rQdw4qZvYKXvhgmbJNSWAHyfF3FUu7h5Yh7LxeBUmawuWe8Hxy6LYBC9JADmuEPtMXkdpCbRUeW7UJZ",
  "key18": "3NUbKyaoSm4oG8nVj8jVUfdw4oGLBrcZFnqyoE97U1MBZAG7S6VuHpHrBu1jGdQEnWPxWxkWhexicvgmEfGCjs7E",
  "key19": "uFyN2atidartnenVSEjQnuY6eaQPRxP7ZTuLBDukiYa8mX7GaeVv9dn2VodnaR989at86XNRy4hg7wFoL857nFj",
  "key20": "5xDpe9yWRFnGL6Qeu6wg5brJJGVEG83TmYHoqrwTWZWDLtUJF8GziEX5oVQ3FkyeshhKFw3Qgq8FNwBKe3ZrPgy5",
  "key21": "2k41KxS8EXx4Kv7umzjWRy9WkaEgYFJpQx7EgdsPW8mLBk8cjyzXx6rB4W59qnvwLakq6pDqieM3CGZBPvQwryGu",
  "key22": "2rbifkdBindMou8z3iLbAC6TXDzGRc5q2KnPNxiHcwQDiMkJ45apgH8MxZiVFvPcwgxN1VDLmkCu2AbyLbRcjjQ9",
  "key23": "2rLEdxtFzd9c9jrqMkmX6xx7rRvinpSpnN95phhsgGRJiEwLBQ3wBGc6GkNHPQtcgxLMwEG1WWN978vUvY8WpdS3",
  "key24": "SSgsZFhdXrbVBwrJWc2SBpi4a4FCk3ogDyXbdf57ndtuagPM7dyWBr41DrHwrabjQRLhqT41M7jUfqPRX2RXSXz",
  "key25": "5JVGWrQL4v9eZrJafS9df8qFRqqVfYdtvvZZtrvdGL9xcKyb7bf47ouWjXDf1hDL13x9thrn7E3o7T7PxdiQffeX",
  "key26": "uY1GpFkDCa4Cm63EF4okhyTrhD9V7sSRZadd1ZtQkJV8MDjuuJkY9eB2JqNcCpNGR7dBAaoTWnLWS12nH7jhLa8",
  "key27": "3KV8uj9KN4oXDmMQp55VPJsoGkgKds6GidvWKkjUJe9GBAE5BjY5rztXvWrMhR2iduh68kyz2Bcv2TerPCxwFCeC",
  "key28": "3UFikrHUZWAMQrLyMJP5BDYKyku63GAtTipbhgcTjHsJGWYczqhChZJ28rEqAJXmYJLfMXGmRYe9fQMBbytjxNKR",
  "key29": "1HLZ1fQNt3SqcFXL8rDAuUegxJ5fkLs64cDNwd1dJEoP8uESkW6pxzdKBXfCUM8Cm7aBXUwAvouFX5bxqm5je2E",
  "key30": "2jrBHn6XTiaSjg9FyUPn7SSjGbs1uk2K3gUkXvmp7fbgh9CSKQraRkS8rNrYihraQnfKoJxSBV2Ceyo9Dbxkq5Pv",
  "key31": "62FGmDszdU4i3g7s5ox1nviEmRU1bd8qxjUmnNu3xPBsrTMqeshsTsz3ubdZYjZKX6yyKWtWcdVHCW4iabUe54Mu",
  "key32": "set49Ut8xyHfjsBdvpVSFE5VfFxH2SPzBFQdoR4vdxoAQ3Yhxc4R3LywQSkTEgA1BYBkq2ZXZk6erY1bu2bUPVK",
  "key33": "2hhkZP1wo8uRvkGDWihcHw1nHSdAZCMBowuTLUnnn5ddXCWV2XXuevUAAU6pidC8eo34CAhFHB79EnkGGiRgJEnQ",
  "key34": "2NgNDk6Z6s7n7xN95yHRziU6jRe7Zk9rqCQMBSJEtrLST8TXbkapNe8dxDVuCH69afdowfYsxeA77Ww7Uf3S7Tz7",
  "key35": "54A37iaB8wJWrmXXKtxTt4LsNwkXQJZvSZBY2X2DzqEGS5iRhU1wwj63DMfp9zFtXSxaJG5cLzMJrYNGFcj9RMmJ",
  "key36": "4d14w15YL1PeyWdLeBXuzHog34rTRa9fzpKtZf2Nx4rQBPGocyEUKZ9feo8Mv6iJFoZShjKGhxQ1gnNVnW7fAHfz",
  "key37": "2z6dSMY52nsPobgKnNkazTEWjRgnWbYQb94g7Nct6QKMfLLL4uiMiyJEvEos2YuPYxNWhbUCoBYp4q8cRwa6ytWj",
  "key38": "57Uq2djPjj3eoDm7uabF5WYhJumXLENqTcnkdyrfAkXcakdmHfFUi1TN6NSBZmYVmnGgJe7RCAuCvtLhrRhbgF58",
  "key39": "2bSEi51k7RFH4PniWxK6QHkrocHL26z8f2cvjcwuwoyt5FwGHdmTEWeJPYfEpzhKTnBULbDRv6bVDrgFMLPiZa7m",
  "key40": "4v219zuD3xXdz6eB88p24R1grDxHSzC6H4w8FVjeJYMFeywsoNUhacPn5LeV8QYyQ1v7cSrnFFLXZqmujorBwBVV",
  "key41": "65QUMz2koqtQZd5VdzyzfrcT8MRbgACCaFrfBsfvWtY4ffZuJXPmbTCv5iFUcLATkLG2NbPEfw4eGFWWQ8Jgg7bY",
  "key42": "2z8YaH5tGCXvNJ6m4EotYHhj3aiWyiuookKTKwAHu3MpiHqoNX4vfvchg5ozWTtSvsa1w9ci459TmovUN7HfbUDb",
  "key43": "5EjVX8nQt7vhWwX6HH9EfvonrGdkAHxt5tX4TjZ1YyFXMqtjsfcMB1bSH6pCNeZbRdayrVMrjkPJeyPRG3nXVzdv"
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
