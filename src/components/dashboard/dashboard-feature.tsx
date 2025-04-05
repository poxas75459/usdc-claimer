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
    "WdQjqTfsgsK9gigbnGAPvRAepPpexCjW1XNFkGzMqTJ34ctD4MNGihsMYKZ7hxK5BfnLUogDLpZe9hKkvadDG5q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eo7ZWPAEod62pgxueuQhi9ttcjMsY4tGpea6BY7DenCyzcE2L6UsgRbhskyrf19FoeoE2iAqbGkfG44BCz6epeM",
  "key1": "4sTTgXktLiTnaCteEi7MfHJvFWRwx6FJRieemFAfm8WNVtymTBaef35Yx7eLVSr3qFGAdRhspQ6UjZK3G95dyebP",
  "key2": "5GUFENec43uLeygbyiP6L9c2ojohf9fPpuYBRYHu3MhLT4C2QL3NgqAinHJy6rbebncCbpqgWp6Mphk2MGrSQ6A4",
  "key3": "2JnTSRBt987aTDiaFmiiKnMiWWgHTwNhMi8SLkvdMCHGYDghC2Esan2aitJ4cBmqvU19EvxouVTy3kbdgeq1jNSF",
  "key4": "3VBgfmdq7M4qFzFZRjUyLouYtG48V3Y6vNVzLMmsaUsxfJ2fikNMKjCehGbKqxpmyRSXPa5ThxNUYHRGxpwezkMW",
  "key5": "3fSHanVp2RDM33gatmyAQSrKSuHfDUNoMmpHXS9XVWUwfjzR65Q3CusrBERidtAdzuAJGpfKb1nqSzaTXFYXfAdB",
  "key6": "2DviLsimTtTpiMevT9z7insLdnLuEVxQPiypuqJ6M4sbeGjmTRZ3gcLBJtjqxALWddzVWmgnGXpSpECwRFyYhMkz",
  "key7": "2Bo5qgFKJM6YQVz7Y48w2cLvkRcm9RTtBPPuAYqGHfgHRB4VpD9z31R24EbE3xeUDn8VtevCfNbucQPt5RkrGMvF",
  "key8": "4CFAKeaUy7wntATkCw2qRc5MvGTukMRzcs9Xki2viZLAZyYmo9VQaEC1azm8T5bhS3uRkFrSWLwcBaCi2sqqEsmx",
  "key9": "3wAAWpeEiTpLdCGQ83HZqNDHAwZoZSheAr49jce2ZpbwhpCfJXhNZudN4xrQ9mhUy4vVdVfkLge6zHu2STxBaxDK",
  "key10": "24Qw58oM4USZfaKa1EXMhqu6ZJKwLvqemfW87qtAzHr3Kh3689qFErEwBpjABVUy2YhDkTz3ubW3TtQ4oZbTh1Yy",
  "key11": "4SLtyYfwkKXDqZm3h5b4Sq9X9AT1TDxoUAoNssocRjKZt1eySWUmdCmgxu4LiPsXo1uUxK2MWXPaz35u9iszMm6M",
  "key12": "5oBUkM2ubraNWQXJEv3EN79t6BDKxDvxitHhZifqJig2A1sCYD5kpi4Syntn3ineZf5EPRuvAjM26LRDzQ3hRjgz",
  "key13": "41rbzNFVuRE5HgdDY6D8XEUXnv9Qou4oqpR8otYLVMJo8R7E67WGG2G8yJS8Zcd4jthVSKLQmitLPpquwmMajBaF",
  "key14": "4Sv6CfPLmFWotA2Dv6GSPkPBUF3b9WHFGLr6sfzK4F4M9Lz9ujzuMcURgvUJa3rmjDyEV9WyNBN35C1xXpZHCp4b",
  "key15": "5cbtHd1dBHEaCUo3Wzx3CsTkSe3KHio1VnhmpyAu7DDVgLzzeQmAbBAvU9NfZNRBLc6GBmUa9XeCykmJ35N3EVk8",
  "key16": "2sCr1wZ8WQh1zfoXNSshXwfFbLTtjdDobdwWW6e6CsFYFzZFySARm6ixnQWMKwWV3ZNmPCi6gSFDkhH8o1MgYBJk",
  "key17": "2ZA8gMsphx9gVoNYXNCEBemfUo9bYJ8JyUz7ty6RR9BtXdYYqiETCxWdC2SWp9YNaJSaYuXHPnyYRCXu7vk46RLb",
  "key18": "5dWYU42cxz7dJXt7vCsR4nAwUguaTTh9fXeCkNGLyAuZU7oCsfACvrcA4H7P11SpdL5nNZ8f3KM1wfxC4PhU4zEY",
  "key19": "2AdEDDtWEDw51ALcvxx7xPzUrPAMp2NMYcgmL4LUSLzV2h8DSidX5AK4bv45MMTQVYLKvpTYTZsGLaBx36y2foTK",
  "key20": "2d7bMenh9bvPb3G7i3wAazziQWpRDqYXT59QRS2GAEHdfDZwksGsiZ2HnyZyTYTBgEQ1F9hvjd8jZryNCWxAQnpC",
  "key21": "5pgo7DwbjEEpbA8Gu83ma1RAhSDqtcZzqeAU1x5JVmoPkgUbgW5sb77U1HcDR7hSjkUEtMyHw3xfoGViUmHGjYWo",
  "key22": "4qAnUhnm5kkWueEViZzeV9oGRy2abq5g8YbNXDG8eF3GHhQiQVju2rtGJS3VStXfb1UXYGk7qbQrgV1VB4avUVxp",
  "key23": "2J8mCK28qWHgWtZB4cAhmCroWkZt3jMdWgdRGXHEuMPgpQscTQTDTsA6DCawcTuwtASDTKGkQzPMgWe8pqFQL2f1",
  "key24": "2pWUXMZf3UeeN6bSvZLLQ4EniiwKo4YbF1z1Pu2mtLBZwRXWF5S3YXrAfMSS2waGr58Gzh8jtvp3mn9ZQKgrdg9U",
  "key25": "5azHd9q1mLMz6SnbABSZ7oKJv6P7ffMutbpYahGHiZYA2smX1NuLhVsX3vxXzRsTZ3YphBndLwN8AjNyLyTDGTGQ"
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
