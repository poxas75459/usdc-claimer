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
    "51vJoxgnAxTfAHeNPhBsGiVyJxy17PFzdfwZGPTHqAiB2U79Tmg8w7JNu2b3MS7JBnu6KH8FCKoAB7MttccYsNyE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bMUJbc5PDYzEyvyrv6EjzVCgQVfdYqJkJUHMRrJJhohPoVxgrBquT8Wbcgkyf9NTr55CvbApdkehFFkQctFmjm5",
  "key1": "4Km7EyBXiq36v3CsF8D5s3GY4Z5tPgNuME7tsKJHoHyWqhZvsdfQL834vFbAWwVnK3nrh9KRPZoEmZBK7xHrBmZ8",
  "key2": "5JBZnK5zmswMazFUcmTQbsxfGRfoqU6S1kwWwbUCv7UEDSpnJUDBwuUTGpphycn7FyW8TUwV1gWpB3GFDM6MGeea",
  "key3": "4YuTTz1rFWSMpmwZfZhYbMZWXgR8yrabJwi8Rptqym2RbyN6eaRiXk64s5KTgYx7YrZbokTsK8iUbgLJMr7DV2d3",
  "key4": "Z1xKCL2QWCoLNgv7tnS9nyNjbVEArk4dMCLtRDoWJbAbXGjqD5AjcKNRzzYVvsaFLCwvm1dhmXLSgFyGThXbVXw",
  "key5": "5X2tE8xodnYVSGXymYLoytjrszxUjYcmYbPLryMaR8KUF1YTxTodUj53AkP58tF8wyZqm9m5L18dTNrxxcbDVj5r",
  "key6": "53DBUZGz2PKWLdaFJ5XyN7LF3Z5dZVhvXeBT1jcKd8HAWvrdFUrbERCFgcEsMXyaLh89iqDcvztqU8ZQeTx8NRXu",
  "key7": "1Jq7mx6FabkeogLXieTc9JzxhK2g8pnfHzcT385TnhHcg4n4T3ahcWxw5TSwfQNyrgr5n4CnqpUbw2312j6wkWN",
  "key8": "2yytUNbuLdPq2V5e6EdfNcrYv62iAFmsgvAVtQJuQxTkgm1tBkCWgUUDEn3qhxfoSGxbsRzqP87tZ6gv8dgSmxrL",
  "key9": "Jg3SRt9Ft7DPyHcHCez3d6kf6Qo2ZcFJ4XjgWLAjJU2sdZeukdtrmCRyiq5EJR6TWRTgfGS3LNney2m8PrbcjJG",
  "key10": "3rnKSUQ2jezSurBrooThabWcauCDx5tSDZFJLGXhg8UVMPBRgSR5HqqwsFzepBv7jAuLBT2ibbUEzsYBHq37wZcZ",
  "key11": "3A77do3HQ8NySmD4pceierXG5zDKAEYG3popc2WFvEisqFBXRZbF9arBNqBwKJi5c9xRKmYvjYFDfTMnzip2hJTy",
  "key12": "yJH84RcvMwkn2HJA6czeS5jAZcrTZZ3iWxFLLcuL2hJype5CqbNQj9kSjeAzFJkaYQXz2qV28i5x5heJNDG599V",
  "key13": "2bTj3BkQu6eAVqXMYwSNJsbF3s11X5hELkk1aLjVPJYYaSMdNMiJpKrEKifDVMcUjvnG6c7CFHrq4HgUaRxCZPgY",
  "key14": "3fjp5r3AR9vuJgjLN3E6YzhG6MNxJXvZYMwsvvpSPkeLfMRs2iQqJUL3UtuvitJGs9n7tu2VQyj2GoNRyTqJyYU3",
  "key15": "3pJbZkVaPZEsgYKd3h6Kvk4dXGiznordYWZ47A5a8gxCbKErg6fEk6by2LhPL8suaW4nZeUufEHEtUbXTXHqyCbQ",
  "key16": "5BHZU1dfQDB1ZSsijxeJQmQAQ7yh7r2mkJvMbKeMz4nt8h9Sg2MszULb5MTGxBDgXobNcoUmrSZKityswAMDo9P4",
  "key17": "5uG6TTfVWXU3rXgWJQbuEBkJ9pPmD2q3odV8XUzedr1sthai1icakrwKSxrHxApuCWfZRAKhKCpQU3CKmPZih2rU",
  "key18": "4nuvetbbnKRa6hfzvEYWxHgSvqSXzviQgdY1mu8ob3pbxGx3KX8x2gHivubDwZTA2uHRU4ChXC1x3ZaBt2MkXrya",
  "key19": "47KRSwAu6mnsmcaHN3eggUoPfHr3Pp1aBoDiiu74NF85nrigxR3cfrjE7kdukaMX12vBTiYxJryNGvTE4gDR5aeh",
  "key20": "5rSH1MEptziYeCtX6JCqrv3TnQH2epyCLaind8jLMaTu8gQYAoo1UANXZRCSKA9noAAfEMacixqMHEq8CM8xRmX4",
  "key21": "vJh2yFsenPd8M4kJaY1xpuV5KSgUtuPK8cFdstGpymq4gpVGaovC2yec9wm35pWTVBg7rv3axcSGwG8u5jcrvfA",
  "key22": "spoqqWGM5vGtLLrLEW7nceEeJm5DAWxteAKMhdcKSLG9EZd9SNeT1FUK4UuuvHqB9QGSusfAsnXGgUv95UTCA4V",
  "key23": "45TKvkyy4btv2qE24bkoqTtj48GcMHE1YuSSLkdH51Tn8VwXZvtuFHrqpVTR1tNGKdx3gsKFs7jtQZoZuDjS5XsZ",
  "key24": "fvgwEjKhAoRoxqq7LHnCNH7xKNgKde27e57bEW6tv25SKC2CNrqHABG7t9ezETrjATRKnvYr6pFBpEs1BFRfcPv",
  "key25": "3dV1TGTZgobVVb1S5hiHCCfAtUVG84tkK2dqfBBj5vT1G8nAh8mNP9LHFQFkCvpFEmddeWd8X7eHMmUucMPH2TD6",
  "key26": "5WgSAF8VYivnoY2e34PYonq6cU3s9kbV616CcTWTW5RkKguvyAeMbGNnCcfBJ6JFJj9mvxehfje67M6NyvKHijx4",
  "key27": "SuRySzgz5Tn9njJgpQkPsHMJFTeTCmvDZQeXogYXMEfiLCP6MURXF287mwCs8xyjMZX6fgoxH2wyaA1W8q54ufW",
  "key28": "45fUAZ3f2Pjq44zqA2wEqWChaBQyNmWBKrMj8kwcHbnYZqxWShsC5fvb8mkCE1whV7LWWv5552CUfE39HN7Xxikj",
  "key29": "5PGRkxvXakq52MhDKYyyJPNqAVS7uRDHqrQNiKhYEPCEnoTPgNaoLdfQ4arMZ5gi6vbyoSLQ5S8h4BCJxDTg4obr",
  "key30": "4oCCpHiVXHaLMCYU2YQSC7wn2bvBxGDotGNqBseWWAKUaZaQfay69x7K3Gzqu8ef4TXo7VXoBdtZjb2qoktohpqZ"
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
