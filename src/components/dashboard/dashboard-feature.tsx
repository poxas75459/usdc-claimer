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
    "HvanzeFrocC78anxn1fgHPN5WNjjMgtz5z5sXqAFg8EyhUeoMkDPG7L6P8UgYqTcyEQKEmwGYhjNWcBdeYNxYkG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DANdMktpFDVtFdouJ4hQyJFN4nrYeQNBkUAWi1aZL8cFA13Hh7LoaLAaeuVfJojxgTpNqBdr18JN5cLfhL6xXrj",
  "key1": "dYL7gkiq9MqH2P8FB6hFWYSXaeUbnSyhzwBwbCJgRhUJr7wSW7iznTUs5zWBPUaSWt1kX3rtXpo1tpa2pZDewX3",
  "key2": "386w3cnhpuZypNG73t6wFqhrteWgPwq6ATLd5vB8D7cWTWhEJa6QLorkdJsms8D3F9M3PXFhoJ7rWPT3TRKKGsDW",
  "key3": "2qQvncQ77SYjJ6ygC3BTd5oPG6S1SZJdEnFJd1oveHX6SKQjtqGQAVpCpedPgJKVzFQdDj4gsZjwjxUhdAqfdD2q",
  "key4": "3NbdSkjW5LebC7X2gyGmjZ7QC7USuejrmjxDd2AwB1GGuqSBQYNbAQy6pQtRji5thZSk6XzUfxvSrgnZ5XqYoef3",
  "key5": "2f6ejKSqVftEWUi3ADKJqE3PPuaY4UqnmhcRDQboEBeAWqH6QuZK9v5f3JsrMJhowNDBm4SdWA417muuWstZvVdW",
  "key6": "5BSNtKXyZt5AnjCbCZVpX9cpk8PYVwS4CkTSHbdq883XjjYdAb4X3opivUiCV76PsfeEM1P7FyGh6K9saVZLAPFd",
  "key7": "3cvjntJWUpbJ7gqsevjsvUsfaKdFRPYUkid3C3navyvTYPPJ1TG3ujjqUsaQAENBYkk2pokCnT94iyuaJxuYopCS",
  "key8": "32kgYvNRJGfBzvCSZqaYidA3UxYjB1eppSVjw6Vua14g4xUXToVXqjcb8uWVRXpHRj4icEzZMtjueoApVyP5D5eP",
  "key9": "5sUrVMnqaq5bEEVKWUNJKVL2JX1ef5BozgEMJA87Nby9UFRUe6MKwvDQdTByd5kmSDWS98xWWoh4eM14Cf2GjkVk",
  "key10": "XGqE9SjRyKVdmFJSvR8YTSyF8mrG1zXJoUwLawUCrNEUWGUCjHN3tYPSKUvMYqKEzq9YYimDTQNF4DdBQV8hT77",
  "key11": "5HhRrjmSXjjdu2rYdxuMRfxE4QoDyHMQ3CYkqfTp5GR2xKkrPgsABtRoM45iejhvi5u5oRdCuDJyd7r85gpnQZ7p",
  "key12": "5YYRiZZYkn9nCNtvATgzmAz7SYokqHunUASv3RNzL7Arma8zhba4H5eJfLpCM7g7a9W2PiTMXH7FGo3aRcRSb5A7",
  "key13": "4zgWcAiRPTTaaE67XPBLtHoeKCdWjEGcaUkXzezNQBBnsDcFy8XDc2httoFuJ6Tf32NaNtbpjpeF77pBHjLntFCD",
  "key14": "2LrL6N7qRbANWnsX1o4dDscWLh5Yu7x7MzHZ1M6184stmPgqqv2fJKpTWYPeBJumB8yxUqN6QYbHDPkN31tHa2R9",
  "key15": "2kS5NUzAocayNyPZ3u7zSdzo1GDAbvy58hmJfXKidgTMFFqi8esZvKG9hN8Eom42QssFvzP9x4XiAopcJGWBmEgg",
  "key16": "368MPSpgP77hYMdtC34zTJxwK8HtzsGbXLGKppTMMpHYN99BdCBVQKfRdwMzRTJFvEeQsZ42gKBR2d4QC6RMPDwB",
  "key17": "3spP7xFRMTSZRbZVjxKAAMcQXbxT8VRTuriGGGibbK7z2sVoWhwPfvAVBiNPnvvCZVLmoKr84AMC6f1mBgxGq2ww",
  "key18": "4RwFQvrcr7Qm6vc5NoJFFwNUe1TG4722inHTuzhAwgBo9vk1LicMhtoNh3BLMvvqSb2YQ9XZEL1jaJdk2tYRtui9",
  "key19": "4NdVALWgw7VVgP2qyS7rc5gzufKumyp4wAPhrfLp1RkVaC3HDaKdo9ufZ9nV3qDCC2seqZzjKPNhnCcTiXr6awrM",
  "key20": "2j8uAppMiQfPPvXYXs3jiJL5hAb7pvhdgfoEXzyCWu2pCpMk29h8UBGX1RosPxrExjCJiivGK12o3zVfHS9tApRS",
  "key21": "4XmnYbgH7Z8DwGki77WQ8SWd6wgzy5RQeWWgsBqDc6Fo4LmwPbnnhCPCoUM4e29AT2qAs3maSa15PF25EUKRj6eR",
  "key22": "3UFqW9dgMzjFjHDVYbWfnsumbo4Pbfu36ESu2U8sQezXQtabvrzSEVh7PYz729SWuSKCNLLHdVwXRHxerKs86Xws",
  "key23": "9A18wo5bzRqCRjRs8gmUQSc5YADity4yLzkmvSQJjj6zZkkGY26ZrmH7NUiNE9fB5QCpTgxh2d1ye22KPG7VTb6",
  "key24": "4C41v5oo2UmGboDNBpjr8Qdv3Q1v7L6HQssrc9UY9iRAG9mW3mr3Y1XCro3eqLGmBUuVL9PnmSM29fdChMXzwstG",
  "key25": "4mWRojWJ771uRJ2ZCRJ1mgsdxfN2qYmYrsMLqFrLnr2n8BPKTYKxvQgteXMvGiqaP5mo3t52VLhAWhKmcmtXbEfX",
  "key26": "2YpM278GkuopBL2dnfXVmGsw7Y8qVoikKiCe6KHcXNL2HyAyBgZ3LBigygrS1UiLEpsoirR6UfgXe5sd7nhA7qfd",
  "key27": "3fxDzwBsXH6J1KvvE98Fuca5Jh4jgpMfPrfHWBfbRGSu7rXuvLz56LSjvUWUrHs2ehNDsihmYbexkBvY6q9XNvyc",
  "key28": "2R5qZ9vt5qcqwuSX6M1v5ufdq9Ce86w6J8rmT2hQS3Q4zJNbixq5qwF8U1EHuWoU5gXg1A23wyhdnM7LwAYP3AHp",
  "key29": "TozUb6kwTEaoEyPvsFyViuLGLymaCWAFhKwoUYKypi6F6xEgRb34rUsknQs5essX98BuZCbZfpp9Kpz3Q1kEuXK",
  "key30": "3YNGiHdx1TiNmutpKyvFo1fEi6K4rPLkB6Rmd25xtaKn6QwFoJNwzJ5gDEb4R44xbCvxiwGTTuRAhytBdgqP9NCU",
  "key31": "2RuDZe2BMv2Se5XfjfjHpD4c2NkQFSuMjW7UFXpsLa58PaWyPX9wbHdZTxEiTWksT7UxWdK8mj6f6Cbr9Zus8DTX",
  "key32": "4hydm1KLpuhdYsqqbRYH2e36MRURApEkoeYQ7SCZTHYVMsnxvRKyR2wb6gqKG7DYVypTvzVPJnFqGV3oQXNHoxjm",
  "key33": "4CsJqho5BUKyLfjX3Vdomf5V4qDDuaHfsp7DTKxH8NxbYqeTgx3kJZ7cptPqT2ebb2L1NpZeDoMwHHbBz62YAYrH",
  "key34": "5qhFqXHVc5W5ocTxpHAp6buWrQd7QtzQ1GTjUV2DMprJ6LUzXYAVXYxqPih2QYeoFsAjk3Jb6xRdeNUEiv486Yqq",
  "key35": "67kGsE6qK1F6BUhscYhWvCGFvw4Shcsbxy928q9ijq6zTJ1odbJ4swPCktaRWg98UXKEQ9xfTQg2oZ4jXKeGE5Nk",
  "key36": "1yvLGvAQisPQcMCnsu2bbhvpQXnnjxkTWXoP726Bqn8UJwy3Eopsc53YByW2GwjkCwPeFQvfaj6U1eqgfKQNuKV",
  "key37": "5ePpjNbgF6NMJMN4rt8x8PWfFJnfsnHeVhThVD7SbSweni4LdWfVtQw8K1Hfx1VyM4E6o7Lww1o48CKs2WqRynXt",
  "key38": "2d3dmqEr2QQUst67Ft6eGp5kvEDqCutAKKDb4HNXatFvQJbK9QTdYnpUKoJ81NSPWMGrpTiLuvTMMMv1aATRNw1Y",
  "key39": "aXKtRbp8pk3WcPMRZGKt1oYximTZTpXKz3YG5AkFezmaW24p3Mb9cJSobsnd1R1oKTr1r4PncJoAAkr42Ysefja",
  "key40": "2jw4vEyj4x4d2KkKfLTXSWaLxenzQERocyfUVKaTjKgHWYxymxr9UPSEay3Cf7smvM74gWnrG6zfMBSKyaNEYDB2",
  "key41": "2wvpihAC3xHPZy8w6ciKfEfABar2FLGRqwheciDbN3A9ovdPHpthcuJYTrziHRf6KbvhGSuVV6GEZAGc7AW5Nbys",
  "key42": "DsqXMB6TFvmbuAwRHqkUkfp9T2YRYyRBQ4fh4nFrcHmfqLjrWxq4Wy7TTbb4NDDZeTQZUhGcsExFk59nqvVdz7u",
  "key43": "2tCHKYXPUVeysEmXBKWqRv5UmtHTkvZFmcBCqFTaZKiTcW73rftpHiaye9rNKoBwsUoobCmCT5FgTtuV9VT9Zs4W",
  "key44": "2zJ893n7NiYmtbQEURmWUhSxu67PDkpDqUcnBhRKNARh5QEsge9XdW5RehB2LnLj3FhckvRJszCu8LMLFzDEjcAB",
  "key45": "3WEjjsFidXEuLpMG16Hm2ppGhHKNJFaHfbJzzsyvPnd6ggPb8RFfav9scZ3NxodsCECkMZ4ajRStMzrNz4BhAhFM",
  "key46": "29niSCySG7KQHa2EGSUnjJrV3d7WKQjEMZXWXPC9z4xSKRUxHGNaD1oK9D2JumwWTxWqfiaLbMvamUPFw3KRXv27",
  "key47": "2sb6WT5tRCRcvzKT8CdK9bi46EGzwxeg94tMkAL6HAiBmCYwb9DK9yVNftgN5yTtdzLuMaxm11C7Gi6j4EQRn2G9",
  "key48": "2VuFpi3JRsmvwcUw5bjy4LqZcU5Q9KfHpE4Xec9w2pkuwbc8FPQFeDwMUqvhFP36dqQUik6i7dQLMeRiLNHnU6nr"
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
