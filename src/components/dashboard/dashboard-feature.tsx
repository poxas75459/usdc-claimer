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
    "EYiGSHDaSp2wSJLYkNgKmxrPRZvs1Z22s2JjKg9cBeaP3T9DJhJR4vtmMuhMmwYZsRqfYTeB8KJMNCrzcsG5nrq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cZafT6DobSVYY1y4zzbCy7vHBNGwKYdEEAbiANVXz75PPHzbinPbAcuGfr3Rcbou9G77YJKgdtjExCuUoo3aPiH",
  "key1": "3KGAtDQM4pru5bVPs7Es8kERU9ehjtRqj9EcCwLsAYWqCfoU8tJQLUNAqfSm7dVPJPafvqMEqh8oCKKLydhAi2L9",
  "key2": "5StHDAxNDQuzdkmPBHrYxVQYeGh7FYyXbACFJF4h791xmuvBb6jVqhJPs5YYPCMM8j4oATET97CUh4R8QFueqyPd",
  "key3": "3fa7WF1y2Hs1v29wGfjnydvd2ez2xik7MYhEa9TnccszgFTYhk69kBBFjxvjSsAvYPBNFoWRgTxREJURPT1oQ2fm",
  "key4": "3arTYimGKkvMZznGBs3FVf7ENh7AJLJferWQ9Q9QDDkfKmx9gXbyZgf3aVQt1U8RshLeHt2PSd26bpNRnz4f4HHn",
  "key5": "2ST55dm745pBvj7XXnhxg4UkjHgAsjEs4HUbrmmAUfs74cjvaf6JTKR2CX3fCqKmPwcNgpgwZaZnS1aFWcThSFpN",
  "key6": "3cX5uMrjfeGXRSCtFzfkBEZdxPYzoYn9mXEZ46t6Nk6mvf5fW7QN4REa1wkwuRrAJRzoWgh2iVxx26z6ZPaoo3ey",
  "key7": "TYuD89WAaB4VXaUFyfZoj3VZKJ8kXDqHkRhtnBFbnwooW8qos3Sgnp8qBwtrdAHZRRoeALyDhQ5gPYh1CW5oxM7",
  "key8": "5sT35gGFCsNcdUB8EUzXXUTgkAHmJHfiWLto8W58weF5dcVnhw2wtYT6dwjCpuhWunGi8DFvznBkhG64dXPXftqb",
  "key9": "qyRvEq6h2gEzCFpMHVFXqLpAVd6qUrYNRtrpPLFFXUobVCT72DFGSv4BTVk8P2JiA1QmtkMASLSYauqdagniDWf",
  "key10": "2WGLEaAe7fMmZpNfdRSpJxYui2YqM2uZ6b9Lhys1ccoRL42gY4v6DGKboFSr8qMb54iNb3zWyr6vezWckLtMPaDM",
  "key11": "3Wq7UCU2Y296gAJvfBag9iyhpHDU7NjFmW8KmAF7PTL3F5wxndTw8SBq7t4pYx22J5N7pSkBGhK4iSkeP3DoVeVY",
  "key12": "48Aak4w5GA9ADybhxpkxyBVWXMTkqyEV8BQ21YL1qKNzFK1DxntdRUoxK93c7HEz9Kp3JEWVdJg2n3ErtvFNHY7u",
  "key13": "pZNp4NwmCS9eSHmDNZcHqUQGFfyjmZ1qkYp9SBYD8ieZAKPVukehSmp6hanqiRcu9NLuzEQvLXGh9vf3tQ7BU9c",
  "key14": "DvhsZ4wbrkxsSXT548aywoCnKY4X5vuixpcqNDtZLW82YDdzGSWWjnGGP8uU5TZQyS9nfuKunWMiL8mjRGTp2HL",
  "key15": "2Gomg8RrvYvsK14bW4YeW1YDKEfHxuQLZprGZARMVn9VBCKkrudLXvSaP44LqUKGTzTxuX7rKejtq59GRm2veUm6",
  "key16": "3ia9C9wCrrnjMbXaYkHHRtrsPcyYKbJd3u6B7XLLdtikQRWcecSENxdMf1dspUgfsUD7TfpGvcRRWysdo1f3mkoK",
  "key17": "AQW2iQsCRAu55BNPWUZgyVKqqU7twWsX4L5jrsRpKWLGPRnjysaCcZyXdhxQYD9NeqCLx7Lg8Pn9DU6oLhfLC1e",
  "key18": "2hFxbGVT9SeYUvj2La67zYjcKzU7bJozSAFbSZF25Qu2Jrx2HZZQMhKHBxAgRXLmDDqDr4xUXQByHecYLNpLGWEh",
  "key19": "3ZvV6qiTUDdDAuQhS9n5xDbYj3uf1biyDWuQuRMASqi472brb9zzXHPzHG5CJpMcbFkAkRuAwUmGy1AcKRpQBGhG",
  "key20": "3C6Xr1i4czfWnMC9vEQbm4aGE6TR5fwC6zLeEQXpQmDg47ayTKnx8zWQmoQkLGGq9HPb414A2JSyVVGN6UKqMUMB",
  "key21": "2D5d8mFRSfGVeTM1TvcrWQmEnJ9BfDFV4CNxfQB5m6R4TgHQJZZHx2GEZaAaJLEhpXwFuHvT32hYydGcFkRVGMng",
  "key22": "5aj3zVkicMZRKqtXYJave9W5FU6qDqHgeUTbWwJntgpz9gi5JffNYdHAcBzKu3XhrJJ8VToPkMTz6wdHAyJVYb8t",
  "key23": "2sZd8FMuYYxWFKMo74CMUtjgs7UFE3w9JByuK46zSnzHEnAPQL2QhbU7ksvRdQXHQ6iVZaSC6861YNco5KD4ixbp",
  "key24": "asrnMZVcp8K6gx2LmMQoUYow1FQTy6jrep3jXLNZJsHUVFFq2zxbA1Ezopi2bribrjpufwNHMgM9GMpna5XCTto",
  "key25": "3KKP8iqc88dzDE9QhVqk5hoDqro3gJtFavJmjnWoyMroLoM18GaKzAbux438sDX9QtQYDx8x4QJjUoq39MPZpoAB",
  "key26": "3aJAk1CWyr2gjFdPjB7yqB7BKFJhM2AAtL3UTwSn9QMhkUD9y3HEKhTxGkhiwK3YaXqKLzhiDv7WCdgRM383ASZZ"
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
