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
    "45Y1Q1RteHTaRZKdYEiJeqeeiAZ1cp3GgaqzUt35ja81HoJU57eSHSx9R7h9Fymh1NG12DqexdrgbE45WUqH3fQN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CTQZreZg13ZEt3KSP9TtzV2hpAhYcZv5phB18nYxN3qBgcfTXXHoHwa4FjKfo7gYS1ZaGZz8RAGKSaUWtAreHu9",
  "key1": "N6tiA2btmuLFMNcJJd5doYJ2KJRTDnqeJS9oWyfoqd5EHhoVEr1ttxr2ZjbMKzY1pJVKpzdzQEsz2AbEkVZFBoh",
  "key2": "3RMV6A3bkh8wAoQSiawhKsLAqT9d7EFDSvca6RLgp212VYLekbXcac71WipMZLnN9Brq137LtYAYvRFh7iUWZK75",
  "key3": "3BSpcuoUxK7duseroatsVzjd1zFvfUP4UTCu3odV9BMCy3JBtVVnBn9xs9icpGHs5CkcvFhQijM6iLa7kkcsHnee",
  "key4": "5duCppg9wHW4N9akzfn6D3ZyKEJZhwXthwgMwtZGoXCjfuvLuAzmBvb4S6MJFNfbiw71xHhUSGZVNBFPXzQgDfJA",
  "key5": "2zTwAUJamx2it8MPLg9Fc1A2VcLLtB38G3QhQwEVkGk5nJhNBCDBDPdw3LaXx8c5onneWSJrcMN1w7W3W7DQYZKB",
  "key6": "8Abv8mPyPCp8ydvAMVX62Z72w1aTEzpqxMyDxL5rpvsZZ9UXrtR1vusBijWztCX9TdZgc3yaZ2SRZN75tRnnLYq",
  "key7": "wS9pAbksbaWyhfZBgzgXL6qGFEzc6947RX1bD6m3RYwddFENnYVvj8Ds1i5N5HAqKZpPiLfdUo6847gJHmZu7CJ",
  "key8": "2dV3xtTPRyJd1msgo1Y4sSLdHrD2jcgyKiqr4cZYoGirxgDEnk97PDVWjd8jcWjtNRv43rXk2UWGxvZx8Cp1SR5d",
  "key9": "2Tfh1QA2xdkJm6WYJFe6Lb54XdRsWXB4i5UHC6pauire7Ypx3jUVFmuNTafCim7N6BiUU6TEDBhAmJg398uXu5Z7",
  "key10": "5GFqUHpaBdGWKNgvtxvdsEKJjenr1oyAhcbbAwVdU4gKJgNhjDPzBrMKu1hJpT6aG9gfiae3B64VmHgCnNGe5RSb",
  "key11": "3kn8K71vjmUonChgheP4wjCknVZXfCbfBx9LnTPFCHr78ucU6gi5pjUPNok6WV5a5aAC7YTjvUiNstTYVBSBoMHx",
  "key12": "8fbH1Cn32Xpu6CD9KdLSVTikGVAf4r8jFAVd3cePeC5YcKWapM9bJT6Lgn6R5kkbzr3HuMJgnjSa8xrzsRin6Xo",
  "key13": "Z1VB6XaFwHpYTmvDj5QDgcVhBqhCoDhtbM5PWqF2W1Pe5TFrRETpoX5tqA5GoEdZXBCtkd3BZwEMWij174wv3YW",
  "key14": "5hXiL3tPptCb1vbmgCG2bvmGWPzWx9syjDpq1dMxni8F6aWsyWqZmHXmLeLJ9iTKKwXqZRXK2zVNJPJzUxjPrmJj",
  "key15": "5TqvaKzjhsUDiqerKtjK2zXR8cgRtQDtYLX4NiDsPBBZ7zpEEPivj2tfZjNFHqBa5rbeA3zAyLCFQWZc4BTBQnnK",
  "key16": "3np5uwuMLKBPCuEZ8YHhd4HicVGkQDuG3n8Y9K3z95gNJN36VesR6R1d84r3RSdPLnDWx7uVpgGz2ck86AZgq7Ay",
  "key17": "61aTK8EDqP8WGn2ZbFDzHCwEiRLyZyTYXfVEXp2LaJvMSWMAfwBk17SmfQVv2vcybnETFNQspLmCkHWmhs1f9oZK",
  "key18": "257jnsXwLkWVWbW6a4YrohPWXpr3r8R7AJ5XYFm3nTNz2mhURgLGGxNb9N1pBpXNpJn68VNaQz6j49K7niUffbHF",
  "key19": "21icbsEBg2vRZRmsKXJwFHmLg6i6N4ZmZTHBvL4e6owXg9H9dfXWw2USHdy5dou5Lb7m9uac5uXkHE6Kx6y3jPRf",
  "key20": "UNPuszZn84y5nBdRVAGADHhRe67LYdpV8abH3ysWCnxKdp3Lok8gVDGFpZGCkLjsdRn4vvhzUWVU9Mctt3gGXsL",
  "key21": "33Bk8uCcCZCDhFMBp8GcCkjZv3ZJXKmRDHArKMZZyoN4TZik9jS8uLByyZqowpNbMpoQmQ8qHU7wJoELzoptd9cd",
  "key22": "3j2MxUBHWrDDywWHxJzucStPfeLxoKWD9rrWyqtjbBud2y37CJ6F1Uq1tqn71CrFGf6NZDsek24rShVZ6sTnAgJj",
  "key23": "3JyiKifXrNmncxifewnDMmK2JGuiJMct6R5MiD5u5tHaLN86c5w6Ry4PbB538aM4tEyL8Dy8jf525LqX3y8RwmXp",
  "key24": "3P3SHx5JK5dxuHRiHVDnCsY8sMkGsNxJTV7Sj7ecqNQr6cRFsmQ7xeZEuUetfBEUmoqX1BiT8QJcmvkFWnNnVg8v",
  "key25": "2KByqLEy81GsxT7H6Z7ve1m1rrcvgVx6HxutXoMvbsw4CGQszDoKPeUCW9VQj1dBRxgYd5LkmQD2XREYVG3YePUJ",
  "key26": "3fZ2LpgFyh9v4TksQx1mWAseZHyRUSi7qoSHqmShdGgGpAFDdj3evUyvymNgedsAy19KywMm7cKP9fggFqis5LCg",
  "key27": "2qvK1Jhe2K7x1PTNoCRAECZvdEzKzq3w6EciGWvfvvprbVjehNmk5WrXKRU8NxCsY5HxkY5MoBRwYyqccvE9wRHs"
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
