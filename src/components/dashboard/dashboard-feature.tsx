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
    "4UQMVcyGhntQZ84yz8uajpsTDUBoyBd3FahkvvetgMGqxb1BLirSEcNTPNHYdj9m56q9g52pUBwJTmoBPiHRfmRn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tPkpv6MeKQwFLd62VooRzWkEVgDGDiF3jma6PpSZ79FXTVwzpZEeezzYTchxRgcsUngPnv6AxBsZj4jL7vMbsgc",
  "key1": "2BbNwbxSjT3PRWemavSb1f8MTysu4tU3ptYQxsxVL6BdBTmfCshAKrFWxr3maDNEqEiUkiNHS5978wmMCgRUZFQ5",
  "key2": "3SS5b431QnWKmTu2hSQtdV6rYkDr8pcDbJjU53h4FN1e4TS8uKAsWiw2rCyDbm4xt3BBGzJPcDff38G2MASKpcNB",
  "key3": "4mevP4X7VXygYjcnb532u7FSb7u2DCkFxfKw11gnHHY4s2vfKMy4BHoKGoN8uYC5k2TctYpp4Vi5kgYG1fYXoSpg",
  "key4": "gqEt14NnUxoaKcxcHP199L2ic8b4m15TR2PosNVwMeXyPntVXksLiDaRqZ77H1kyBkHhBiWuH3jHEHyKrs3m2MP",
  "key5": "2FfoM4PHCGmc6Y4HuPfUYFtZvGBM2yKEpwkUF4mArCix2F63X1t8jfbuDzZEkTvv25acoTEnV8uMWaiR3EwJZwEc",
  "key6": "a6eEVc6Ewd3Jvti6Z62fEdadswEJLsNGWGg5aCvrJ2PCb9cQe3a7JCeQjx9trT9vFBQFF7jKMWyjn1Xpy7vPZsw",
  "key7": "4ncMFS5W7i2tTNXZouzEe948E9rQjkB1TWAA7qqfqwv8LaQWwmdHkHdyso9zLDq4ioRDR2xUHVjUnQ27TLCXNREj",
  "key8": "378iTj82SkWm4J9asLdT5iD3AK1MWZ6sxsqmhp64jUknYvVFvc3GD5ZG4Agm747wkcjmP1F6Y65ACtnK2vmPdDdj",
  "key9": "5NZrjvim7N8QLvKqoduAGkosqidQKuZasSMxcJms19bx4cKtYLCMrzaKpURkHq93f94r77Yz9bBuj9qmhFyeyEbV",
  "key10": "5Vi4y6sPM1Xz287RG63VGiqedZ2LZ2AXizMXghWzM98tJsDebxrEcnHn5N1WXuZASTkPbMR7SfkKrUTzjGCfXTuM",
  "key11": "2Wj8ErUMditbhCVKJEEr7L9R2aNNrwaaVyWEbP46WQ4CZu2Mq2JgVRMjH1ir5RVhWXvBUreurxDDxWNTRiJKcVbU",
  "key12": "5bVDZwS1TnMUv7eLqCkSSEkTXDBKUkhzkb3ucvYjRKfBNsQbAe2Kn839P4bDuESqkE2uifRk8RsmqpC5vArH2CXq",
  "key13": "sYxiNZc9V6gaxHyLbGHRbvjY62wMzet2qz4LvewNrfk9jUZd5BfRAtkWMD1G1fJ7e7JDTEiZifuxTdACQzkLmhy",
  "key14": "3EBhXgTC3eKzbg7dwWWfJct3qvj86e7qESAjQRVkQGy5UHJggxRSgxW8tu9d7woY3zrCYgAaq7kYiSUyTgS7Ppbu",
  "key15": "4f4TCUi1Bh2yV27a7ieR19pZW93ZvJ7Eo7jfb6XXcReFNwF8SX49AbV7S5aMeqjQi8QP5hkjWPntCxuNLhaLDrm3",
  "key16": "5NSpxKyGVb45vJFsMvshM978Y8BDPSyDFt4nGgFxCiXYuSZabQdU1FQtVE92t1DGovWHSy7DeZFPzbmbXj2yM2vC",
  "key17": "2w4Nznv8MStSsuv1VpNWHqjpFGMHsy4jaXta1hWdTkJhk4MmUh5vZUJvXvLGar5v6WAFBPi6jqGT883d95kKbuYK",
  "key18": "3NLMUvAuWTLTnBfEBKxd1kk3nonfDsu7XJ6MdCQjWAKefbXadBqVwanqnPJvUMqLy35tVWdKTWMqe9zgnVkQa1ii",
  "key19": "snSbcS5sUgrTFzq2Ukmw2RNS6NzuSF3WqLJnuzBxmKgdRqJSfsnq6aKuxWH5rHd3bDK2D8ZkAzm2VJ9L37C4LvW",
  "key20": "5sWzt5EEZqU4nNrVUCJNJH6MB27rWCg2FedHAN5SjYc8tMjYqZJt44eGeadEg8vh1ePTnXWhxZuQHMMDfjD2zMn6",
  "key21": "5Sq8huZkowZKDfFBF9cp5zbM5AuN51RJWbpwTjzirRmMsSiZ9uPLYuPYFibf6azMbCKMauf5UQ9BheCrsRJLGk54",
  "key22": "KXGLbwoBJZ38XwSJ8KqfnDrGJD3YpmLDGv1Bnf7XtCS8PGX2i7owcwD5PsXAqRtDypkH2Cwev4DdmFiYQ6ha1My",
  "key23": "3bTZZn2cDpkufRjWXGfHTcTd6Q3zqMosDRe8BzC6KeUYrGtEh84rHLTGm5ts78UoLodSDmbjiBiQw36bRF1obX3d",
  "key24": "ntxxW4vgcdeZRV7dtbenqMJJDzpzux7k9imvpmHkFgoC8Sim3F3couUrDqaz4V6JGdeNW5qybNiDDZmChQEhKA7",
  "key25": "5Bj7yx2beRYwfpV8qpuuDtKhix9Y9MoakN5NQefnnzmTAymTQrJ7Az38tMdXFffUEamsTfB1PhAfRxNjboiCfAjk"
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
