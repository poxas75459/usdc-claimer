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
    "234w64S4N8gTL8Ctp7c8UPptecDQK8X2SsZuzVexkaewCbKEQ3bGk5JQx8ygFK268yTiiveMyTmZztyRjeqPToUY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61sMGuRGAW34XS4VGbbstTwFWUCKeZQNwMD8t1vhaR28kJHZj2wUS9AN4T55UGA1ZqqBKkcyQiTAa4A2zp5x2fiS",
  "key1": "3CBdzf4D1pyyd3YkzBSFain7hNk7USPDcGVfSGhpHbakT9csXswsgpBf4sgYk4hd1ef8VGB8M1uQLYCADneYGAjW",
  "key2": "5SBTn7yjw879ps7jAPdXswm3Y6MsA3oV1EtivvXiXKCSfG2gvoFa9ZmtBbAQS758CZ4fYwESx59AaUiLVRdUDz74",
  "key3": "5Hh1YTwD54CZE7hUWTk33KCNrojywnGpgPhT9F23DPSRT3krFUk1nkDCEH55oQNd1nYryKPamvaap1XhGuAw8QR8",
  "key4": "4iUoPD7K9TJPMfDZpvGatfuztEE2E2Qn3AbbLCSddg6gaKUybzAVTeEAbNuvdCT9anG4kLm9J1js8UcYkrwjaaw5",
  "key5": "LADrpFXi2Wh57BxDgQV11ek6fNdZjXWB8G7CpceYs5j8Y4rrxsTFWJWDBnLnLwtQS5mD3cAdSnQQ6eXL8tKtSDz",
  "key6": "65aQnbR8G8N3xkTP2WaczGFw5qGa17XhK4tUcT51JXAdAo9HoDb9TNb4o5m3MxrFLpZy54Lo1KGvevv1FA4AxSLn",
  "key7": "5LvxHc7FsKFvMoLtfxbq6XFfXUTEXJY2RoN2E9RUqLwbsYhJbdkM6eYp5cvMSMecP938uirDNfvmZ1MBwSSAQDZy",
  "key8": "4HeHz7d8G1AJjERu6gLAJRHWVzqWR3cj1vLknHARXRW3RRJEUPoTNH8rfzaBTD5rEXk6QxTDAoj56ZKpAgCiMJ7h",
  "key9": "4XU1WGqF2LE8rB5D9ciR6F4jphzJigbVLSbkjp8ftr44spztoikzXnLucWaKuUiZtMvM4vLPmsaY7KA8gqjpTTFn",
  "key10": "bi2M3fAz9UPgcrbKM5FbwWwYGgPYgWV5kv5mYNKjesgZLRzWpmcxDsVM4D2jaDvEqvf4v1z31Gh3HaBEx2CTmLT",
  "key11": "4H9QWkYHGtX881UTyUsMYVNyUM1oHV9ae73jzcU2gFXqbwS8Mtppai7X4EE1mBPckcHtmVyMtueCGoWPqciWWyJC",
  "key12": "3JCcDYs5hY5hbohqV7HQ4TqDHrVnSbAUMTaTMGEpCEbaDF5VscPq2zWRLbMJkz4MRBmaoyGUv1N95i2am3fr5Bf7",
  "key13": "5wzD3hDe1toyd9FdfGSfbN4caGexH9rUVCA9zD21TkTFgwHUBRZcNHXcRi8F7VkzSN1wjStyUPKYwnVLg3aSSArn",
  "key14": "3SHwSLPRp614oKmr1MKsY1pkAMfJmmFuMHuW4aj8DdbYCdAKmjNPbawnDPMStYA5s7zC7qNfhXhNg94g9ka2cueU",
  "key15": "5ybo2Vj6Qtqi9NT5JyGt8gXu2HfCAv6ZVqrWqB8qy8Bj1DLkBb7ux7AMGRgmzBa7YZsbqkHEZBjqwVh5dJGqKCc8",
  "key16": "3oUof8ao8CHLPzzPaJAVsvFsYjrcMgHvuf6MVZGVkmA9Ghi8Ly4Df7WozH3Qsh1cCzhJXvtJGQb8zSWmnMJMroWH",
  "key17": "Sm9vFhWVxjQ6rN3GgrUZtTDXg4bUfRCFy1RWvvXJ5uWfVXo47bB7cU4k3vrQ1fj293ex6sa4yaEWtyycdjnDrwj",
  "key18": "3RgYqpTmZU4yBZsfxywrNCtArLAwzR6q1KEFqmwFJuUv255nLZcc47myKoYGJQ5utBYckr1Ma5hcgTzXbTxEi9fi",
  "key19": "zFw2sdEgmmNY5Y8xXaVE4mzeH85YyjYUFruJYHBa9RUi79fDp4VD946UP67sg7XBDzy7BpTomVCGpfFQNg1rewk",
  "key20": "1jGxDoomqQeg22jqh76JoD8Kx8UsrW561YZZ6fuQ3KqmYHqD6mKJ2SCDHpfNJScbsb4utVZkp2igSrSrsyoVpu8",
  "key21": "5JzNFYwXskAXc3UaAGt1JtzoYQcAovrrdXX6C3iMQyqK25krALZF1FCx1Ugs7swUYnicyicS7Fpe21hDaSjX88sm",
  "key22": "8t1kDF6zHuikDqzJyjJsdxQh9y6b3xe9dBJfhErfyXYEan95XFH6FwY13hMKuav8RZBXsP85ZPgjxs1pHzvUpAb",
  "key23": "5nvqxhbu2gaAEewaeqzBYEzJJRd9hzDbidEttWV8Fr1DXyrHa5Y7FKMNiimFunJVE5nGE7gcojMP47tj9fmowCpZ",
  "key24": "387gbWWeMzLpH8HtGGtTFXZmEgaW6h5GMeEacKPc8dMXm4J1SvayczSfrVhVT3BDDd5MBpc44uFAKwfGsqe1zwV6",
  "key25": "2DHR1b8f5fAkxLT7crUt6TKKNyxbQCJVuJHByA9rjYAEsy7RN7QQE2hojtvkFzqZdJL7YLd2ACUd7ZeVDYPmWCSr",
  "key26": "2MWZNsERgewH7aeWUbqkrXmphmK2UcdtiahLbeyBaPCaj56Akjrab5PaYFixbYi3qLXraaGykygKQDfBsUFygEQh",
  "key27": "4Kvvog8q2bhGvJ1JZmVaWmioVwFr7Rt6ASyMaRSpPwg9UHNiZ5amiSrs1uzg9W8f3eWca8t7SfgRgLiE7KUQKGL5",
  "key28": "4rCV6jYNZ5F2FMwCQQTstYBPFbyrqdPjJXxxEP7RQ81yJcdeQsDTYBA5LyRz4UFrjWYbGhTEfVKgXYeN5fMaaud1",
  "key29": "h5FZNbtrvAKdQKzdqeVyaKXukjpNYEWaSCLLTotpBEUJAAQVxDR11npRxqxq8z8CeGHaBZmuzp6GLd11CE4bva7",
  "key30": "UMcZGbF1TfxE768PEqFwXsFBDUwm6uSbPyPspkL2MNQxLLdY7tptaAPge5sz6FjyqSLdcnrynXgzueDojfLZMVt",
  "key31": "3x497kVAKzQHQKds3CC32QuMk5tY8sK1AKfCCUd8iFdAZeceQsfqj7JFtShnfEERP2qfSebDAkWMUtqYSARapyKz",
  "key32": "26UHGewify2gQbVRbvB5bwA3qUfDpft6h1QS1JYAVtZQHXSpZYcnJMGXNrbqDt7MvbX5rTtqpgRwM2wLj5ahKKWD",
  "key33": "5LFRyp38Jm4UvFspGVxpDGg45gr66U3WGjYsTAtxZh7oGpVqzXLa3DzJr7Eg7nK7ogwVNwQRhzwYYA6e6EZm6AfP",
  "key34": "49vw352UmgBehBebnPr7vz1cJiZrc5m88k1chPokqR4GbveXAkfNbzDyjf5fhJ3NCYS3BtokMTkTvkWJoqubha4S",
  "key35": "3qeQuZes72HEWPuui5CWg2ENfKBdyaQ2S1a82fdrpYrC6G7RLcrZ1SBQM6dVVjMnwvZwDYSucbjDBBAbm5e2D2FW",
  "key36": "5cSqCrCPRY3RTDwcwLnDHxrd6m2vzmQc74NZX1tR1Jf3q2hkgu9LSeKjQfDHtwjEWVfv4sS8X9SQuyrkFWgEBCcN",
  "key37": "3p7BFdiTrPRPxcfcNp9u4b9KPGKjr5jMujCeP1XXX1ezQzySe6ozVYnoute9pFwdY9TVk2S41JfakaCapfJi7HJ1",
  "key38": "LEW2cfUMauBQF8eQZdKuXJV8gSzk3QrWoiUJkw6KxdXxQaEXC1NaCUGa2S8a3BLELEjYEoAdhrBCtwE8RCt4nPZ",
  "key39": "5y47TAr6RGzfmFmB421PKk1Q5aCjKGk6y6SSe3LLa9ekaLCZ2ZbFW9bFbrYzefRAGnbwKU3ZSyXqjyUMgPMUVMVs"
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
