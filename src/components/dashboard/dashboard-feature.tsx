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
    "5PFR7hyrkuh2v5oLoednUaXzkYWrkBvYxQqDG5wnKJ5rtHwd4ua3apRwVBMESnRbAnKsDNU85CqMCa45cpSvpZ3v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a9cr93XB9vGM5uCdjZ99Qqj9Ur8grU8njGHye3sDFTyLzTqSjuYJRb9dFpSamwtfTFmv55oMoRSdEm2idSp7oAu",
  "key1": "27iL1bNhnSrH27vM5mS4mrCiPrKbgQSnEqBc68JeCEb6GhpR8UfFYcgvdZQdXe2KrzZd9k2smWggtBe2fhfxEsh9",
  "key2": "5r9N9JH87tX6zxwYPqnJDjmW58828pUHCadYnDYuJA3qpM8tmixCKpn6nHQgxHmJBR67hHwRTXN5Hdj1KHnehYC8",
  "key3": "5qzaky8T8V8LkWuwijEsJt2dgUR9LfL6m7qbPHLWHxvNxNKwh4odLZKFfvDaMCRNZ7HcWuoAKfs4pa5FyszWfdLA",
  "key4": "2n4fBjxsU8STHshyQfrKFv5YxCvnpF72nYUTeHZWcm3nozD8Ai7cQ3TqV8EeXq8rDhQLtvWVwy3adwZbJFBVeb5F",
  "key5": "3yEv2cD9Be1CYyX3ALLmdKrN5JgHhZaScKRzNY4dDteFcg3BSSxdJ5dk261kWsTgTMo2BzAVoVsfyDemUxH5LYr5",
  "key6": "3YSuSc8TN8xNqdFZ6BJqVvHbMFXSaqNWLhwoiXY3qzLRwEGT8MAUTJaBQeZAEouGr66f3VMGJUkCWtGNvjNJM4nG",
  "key7": "3YxJURhn5Tz3cpsrwadcbUa1K4T7uADLmn9aECzHFSZxkPABD5hBCRNgkk51Ho52JvTcXh9hZGt6TEj3sdSuoauP",
  "key8": "B4ehHZHcJtj87son3gudoXSmKoxNmMsffsWUYVR3avuMXDWr9TPTSbp3iZBFSAXK8gbMRQuqj9xL5PZ1cBvRoZ7",
  "key9": "5DgKdQE4tfiaxBFSPoXs5HJCMaXj2Mpyg6xhYZCh5kbjr4XXrD23tuLy4P6a4y6i8svTGeFpfL888EpN9heFTPYd",
  "key10": "2C1wfhdrweAm7QYoQFGHhfbFj2Zw5GPkqQt7C3o2LZfLCFUcdYbfhzC4XmT48tXVt9yk5mhi8mgmgUthdpxEmcpD",
  "key11": "4KWkywtdzrEXe1NiAgjxjLsAJGDWixQzz5peajpi94ZQ9hcJ4PdYoti3qprx9ZMXd4ZXK7EAojDMehGikhb5jT9E",
  "key12": "43nGXaehVRAGGgqiHq2eXPP5Bc8NMsH56EFucgsp88unnWSSuUD3YSYQysG23GjWktytEdVRySPGiH78sGvhNiXk",
  "key13": "4kFartDL1d8XtSp9TdqeCTfNQ8afRhabENXLAZhmKuNh22Wz4Nq9bJ3YofqzE9sM1PYDxt9H9yiSBqcmN8SNgvip",
  "key14": "4SKVW9o3HHkj5TGoMQbbmkshXjD53r87PH7XWXjxB4uZgrBNAGh5bwsqJSr5dNzDszEWWFd5gk4v8HgLSjFFEnf1",
  "key15": "3LM1MuK2ZKTkVaBM9iCw7GMTS4tvdwj2GX4m28fPzAmvZNSUeHapSDu2dU7FT5ZFe6srKsPbKPmZM6jiQiBGfSR1",
  "key16": "4dN5yjgFMw5wrB23C8fh8SKRUb1nLVpkXUpFCoaNMARMLaXChoPCq53jozhBmknRXb4EEqo8KWMj3hJHadmtnu7a",
  "key17": "56aRhqEdK7UTjjU3etJKb8b8F5Cbpzv5FDZrwzHHPHrFsXor85Sd6MLFyMWiRxfZHWQaCweWci9joJd79eJwXEV7",
  "key18": "4bBgkqthZXqkWVQ7e6igShdtLYB3mKfwhBsby7r4G8Cmvec9Ua3gutGYHEnn79aJWKgR37Pz8KN7BGenSqmYBFGK",
  "key19": "HjFWLRY1i9ZTf8XLBa58EMqd9v4Uujp9aLB1NJpMvCgSvxvWQMxiVFRFimbHjScGy6VSk2fDekUY9KQzmHhEgnW",
  "key20": "EzCRwkf3PgwnV694NYCWSSyc6wf8QZChqr2yG2idtAHezR5arvyySQmF8uBiG61nkgUHRFUZUcM56zTQVQnEKz1",
  "key21": "3FLrLhv5wTiajxcZ5NqFuXdNYxonrBt1rJwgjAkRY8wJkyRwTsxCuWWMAJRMCcJVXNyF9apG6fw2VAZ5Fq1HUFQf",
  "key22": "3ujcjPTNd4xo7AqE7W5GzXNaqwyQmAVkAFAYt4Qnaz5zwiqcitDWHLkZ7b5Wvvfgy1j7QSbXsXkuCpU3SyZFr2iR",
  "key23": "3ZL3rHqiqjxzXP8UBZuDbR1oVVjdGRkw3RVosrffXKqaQkt8tVAEHg2bV9ffBpnngdJWp338nnmszZPU73hjtHtU",
  "key24": "4wZRB4yCWoMGAmoNSsBaNukU12CidrxcHS5dacyaB9t6MDYDbfMFySgsDcmv9oXCWWVmMZhA7GEmQSWuzThbupf9",
  "key25": "4GG8dNgKVdSAQ3H46XYRtkrLwZMFtA6goUh8dnC9UfKGAjncm4AXREKHZBminGkGq78tCrPhjM8Nx168AeRLeQRV",
  "key26": "3rgHUce23pbpCikWJFuwW8BNZLRVixyhhjETHY6ubJskm9vLux5wx3A87zU178mySphtRGZfdWUP5h4rDKqJWwUk",
  "key27": "4M6uDrDhpUZQjRvKhCcEJbbQ3tBJR2DhGkMzXrXtgdeE5n2rxP6vk3cq1q8hbHY4UTqTwzJJvgZXCboBRv5Xpz6q",
  "key28": "frfWj3M3Ki1wXtRavvJqLK9dxMt7eeZ3NFTKyuUAxkdvHfygZaJcZxfDfpHkwh783Vv2KLSSEKi2uSUHQSJ8WQ9",
  "key29": "2yNX8Kb7LsztWBqUHPAGMUMR94xbX8nTpnNus1grcKCBXWyLtQBaCP1gg3eMYRUDLkqLBktV95UUXQCkm9xwR79H",
  "key30": "5GCPU9JKx9QS9PWiCiAvXUkyQ7JqHjQQVL1Wz9ycidBK11XgGHPPdvBNSL7YvCcBsZYryBCqewAoaKrZdHa5AFDy",
  "key31": "4JJbkrPJRrWWCJPdRafr5PDvp7cZcjnam4gjSYEtMSfKJ1Pg1ZufaBHmKccHBEYYrQrv1f4GwefbEuwECHqLzJcK"
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
