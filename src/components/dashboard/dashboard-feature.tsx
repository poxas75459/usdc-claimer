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
    "2C4SiPF3T7giDZkfpq3Ma5Uue7jLT9p6EJQ9tCqzmHYWgTADPh4bfhUTHkjWb1wvJz8nFGJMwTiC1NXvKj3kE5VT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TumnENGLAZz7NHSiKdkji7C6QjD9wxh7wu9RvCuHPH6XoHK6QAayjgmtqBRQv3dp2CcVawp2VJZhdrmU3caEKPT",
  "key1": "5XNbZXoBTjDxxbJwtfzGXY86ZW1W7Vvt4N2yWnwRc86PyyWVGLy4EHJSm52QFZgzmeKSZQu4Jono5dX66Gzr3WPm",
  "key2": "2p3E3cakB4DarYEGcjj5x26fg6WvXoX7m1y9UmdC7P2Pbjv1PDyqfUfXiyD1Zkg5Gum3HkeZDpEfEDCmqB6n7FA8",
  "key3": "4e5JPE4XhmsLrj7iqZhtN9b2FEdzanQRM8Dg62dUTQACivQmVawKQhAd2ePqd419WUq56LNBMSayz4FtvztJ6EY5",
  "key4": "5nDNCzUNsXKFKPzLYgq1uAgCSo7Sg9hMHCmCiJdz5KsrVhZUhGLRv4BhAnGWpRvCZsxrg6KoHUqK3oPECBFBnWQD",
  "key5": "3TDs8eh5ffzG75dgk1Dj3EdMKDo2dTodRmV2NpZypQ5eYAYf4p88XT2JibAwNUEXe2oaQqczg9FqiZ1tcVZ7mb6H",
  "key6": "4g5jZc1k7DWzD9RiwHLxzJ7CWLLHZgMuQBotQUqSYY2L618kRhEy3C7edY1KzpAsuT1NGSui1aWQSwUYHBpUzaTB",
  "key7": "2VQPYCmANayvkDYzCs24HDB1XZX7uXRcsJBqGHhWJsdNtm75MoVTvN3zaQyKxtBoUx37EFk4a1sjiJ3Ez8Sax9rH",
  "key8": "58ui7aB9HvrEJSFgw5BAg5nKhDRS3sAP3tzq4WheGoapvRpwFQ7QUtjHRHgYoFuWcsQojWNjDZH5gqE4JE7r4Vub",
  "key9": "31whQu2zUTmx8QSe7VvoLsDobk82X3dYnMpBdtURnS9PL4QDG2QATvxgY289CiMtDmota9EQJmo9r2iReFTQ3BsZ",
  "key10": "55SDWLnzR7t45DWTyyXZjxQKKNYYDR8q4NYb7aPsBikajznLgF7NKtg78wLf1SSViwRFo1ezc9NaDiefgNyRksbS",
  "key11": "2cqGsPh68jZLFenZf29Hoqqp4dRABSQQUw7ZUMn5MgEW6ko3mLatZhBojJvCpNydssjsjsYnRVs19cWs4pzb62pu",
  "key12": "5hRwYC8PFKfXnZaCiFTeTov611aA3AWBpLWjo8jDN2gnneviC1rUoopzydyKcg5STLhQuwPeKYmY9D99UvGoF4ZY",
  "key13": "HzCmRioENXYohKLUKvhKokLpEKscZia7xhYppNv2djJ6CETW5Bhw8UPT25Jh19M6uxZe37zWFGpQUeGp3hr8tDT",
  "key14": "xhoUKVj8ygMfo8ybk5wq5uuCv9RppaxXmBgpb6eKn396r1NCwoehx29vCooxmVd5uwREMd5ypMT8tRXnV4CJFqj",
  "key15": "2iegtLTh92La63s9LLVbvqMWPfNYqZRnZ6S7FSMNRp7uaC9U4EfdiyLLEseRVQLWJcKpR1s6yKz5Ka6HWieScktq",
  "key16": "3KoXodukPL5FqPihYhxPTsBkcjiZwAxRNeTvhvtBU2pKFSCM9hF5HcPbZj8z4M7ntQqkAeLWzXzA8g7RMedaLsQ3",
  "key17": "2f8f8UZbGmrSmMqbsdw2mznJnjywB9A1xVD4TquFyUEUscBqwtG1aa9CAD515mchymdNkXfEgVBETmGd3zePaQfu",
  "key18": "4a7qoJc8puQKDWvVNXwk9HKWJJXoQb3Tzezx3VkTimBNUqbtqnqqj5F1VHudeEDfqhpa7btNXbLJ2HofB5TMFdrf",
  "key19": "5qPtfjJNuadVyancMSAscsyqM8Qjmot4RQPjXjDAcXoX2RkTgEosbSMtrEKxjKjr64RxAtu9hQezCvJtQPzKTSuD",
  "key20": "s1xpPAPA4wnSpKf4uUuaRUUTtLUbknb8STdHW58Z9q4B7ajk69kkHFG8x5iyWi5jU3UnMze1LRGwxLQKwPpLH75",
  "key21": "4bDtPL38aiNvFjdDVcC9V1yd9LoNmwmUMVXsmtMFX53Ei5Ya1nX95qtadmz79NjcuH9Cyrfj5C8zaUWsGpes6wVq",
  "key22": "3z5SCHKDPfexLgGf6nwYGVRLSHr2Rrfvu8kxTEbmaPJ3y7yubSJ5n1hCcMh6gymvU8K9gh5B9fVeqGvEMx3gjmx8",
  "key23": "TmUPFYEfVGekQVNmJfPc1cCWvmCDqoVWL2hWmCQ3PNnPxnzaYH5HbohNrstf624u3qVzKRggbu14Cg3bgzW5Qnb",
  "key24": "4Bagz6s9pGtEiBDW58i4Pd4k7B7u32xhnXh6x3fA99WCHqBP9DF5nKUBm42Uik4LVLPXGNtQzMvqFc3VENnjh3Lq",
  "key25": "RtAbCCrEyX73Vc8cNMKRBVSJJon1UTye3NrfcD3wU2AvoYMCjiLncwt1tbcpFQt9p72Z3E7r96TdJHSeuuZREeV"
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
