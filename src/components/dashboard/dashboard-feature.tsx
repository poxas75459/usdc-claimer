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
    "ByHiEV1jWTsnLk2PAEKMZbG2verCh2iCGE4zxcwqsYJ9rSDa7r1u51XUhHis53AAtoRyH6VpjSCkoKsnGgvd7rc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LU7Gqmot3CW7ygrbRUeoxvhY3AgNNa9DYghj7nvoxWnALgPHsjNPh6FPiKvYqgZUAhX8eYbbNctxerAbuGGBm2P",
  "key1": "27TrrwSQ6uk72Lq8jDxN42PFNSUrSfZBFCBpQ8zQxP7fdsEwrfUhhKPNPoYXmnjUQo87YtvvWY7CuouUK1ZYG8u4",
  "key2": "jse78HuVVvLm2Tn9NmjZqrvHByc3ju6pxV4i9nFqai5qhR3GFncuGvDLqVnfWRQ9nRogxVqbCgZA3HdBvThYK3M",
  "key3": "SnkEqrqEAHPc9Yswz9NMREctH11V6wjtLtsBB49eBFg4dcCNwajLcP9nBJgiLWqTgGHaEQ2R8rvhCtTuqSfJQLE",
  "key4": "4Sp9PFcNZ9zsw3NRQXQvBJfgr9S2ycTC73GDmSreb41kJhzHZu7Mpt4tpSxrn6xS6gt7eLg8SahC4i5xVE6NABQg",
  "key5": "3sjvCaPSnuywsB3NckVhCFbnoDNqNEa65vw3nqn4kX45Chdm6iKJ9BfC5bih7be6ZwaxDKmHrac49xeh1VHzMtcz",
  "key6": "5XAfYa7y1AMs9T73mPfGyBa2AoPh8QGHs7GTYx4Erzsy1fcfS3H1SRtXPp5Hkwx6AV9n3rLva7uSn6GuzijfSmpf",
  "key7": "4nXF2zUhM2D7B37HZYXu7AU7rHvngtZFCSa9QKLw1mfkU3Y8KyFE5DAFShFAdTGQirkFG3dygaJ88j6qFyF4pETS",
  "key8": "4maLwY7yWnPfbXLJCWs3e8mD5iSHYTVBqVzGvNWMpoREPvZzJsAxKoZG2LBSS5BtQMQE77JvpjgFem745LXGU1vB",
  "key9": "2HnfaLbCzGdtHgeyjx3MaUvsRsnDW1NP8CTsULscHaksgQ4PLugGTREfVLCCHKQnRekjdKYcCUNuW5ERqs5AyxrC",
  "key10": "5jQnoT3EvwmPbLLajyPUouv3CKGi62TThoiRRhZ7k8dcSo8difvWRYhrZN3BABHVyDDvzAYDsD8neyyyqr4Lv1Su",
  "key11": "3Yb49CJnX8xPukeKURftCMu3tfqmZfiSEvHuvNVgQtas77nkVP6zzuMTQkyCpBi7aBGDxggX2xxcrt6n9dCWDSgS",
  "key12": "3jZ9fXZSYYdzfjBGa48SPtiMyNA6y7MLNrzXmSzT7CPFQvNLiWsw4htMHQWRzvdGBEviZwRMt8sVKAGugguQQroX",
  "key13": "4EqbzeFW6L8y7dmT64a6twFFjVeW4bANtGQbMvcoJBnojGHQZbFXVc8H1y2GtQG1hkUgRSrrYJn7C6dZFFF3rgC9",
  "key14": "23dxJyEkaUfkxPtpWzZWWmULwyX72mKBPcmaBLvHn7YENUZGViitnype6BTXNcNgUf63ZRF4YMoUCqRuRKPej6dy",
  "key15": "52WGskjRsbCAsRkN1oBx7wwWPk7EUQjWoFo4p5HUfX63CexN4tBhbaCZHmAQBexDE9JGTfoXqYSmWnktAMUmbz18",
  "key16": "4c4ZDmXt5kM3T98jfnGXFN6RYSJxVBy8Hak1ruS4yYu6diSbs6bA4HeWDg5aipWtJ7uBfU5G9eqvbkJg7zxDqTSN",
  "key17": "4iXG53raBjEkuTqTyEVMrxqpzYb3p4m4fQYk3L9GGEuTGomw98N2TXb7fkXmx7Yb9MuikhtyByt1MThKA4LPykjU",
  "key18": "4gucLRRToZCMwmXWT5B7cJqvypDsn82PpfQrvsZhWxVCAC2hjstjygSBT4TLwZMWLBt7AAN3LkerTyVKfiZpSFdc",
  "key19": "4n8xc4LUHP1ZNo26QJus1uMukjSobeMQrxu7bgJ5HTaGrEC5jiLHdparH1qGTV5S6nozWteoM48DNQmNsSeGtJu3",
  "key20": "2xoH4SZBMrx56YLjE49Rn1f3p9dKFgo8PND15EGLeC7fRrPXuUmfVJNKEAefV6UgzKqHqk9FLeAkp6HQezHmaUrF",
  "key21": "3RpHxWoyfNWcjbQPNNyVXLTpcUVznxYd1uDV4rE99ZnkGuq7M4iSYtzSD3ufvSdxbnYhjtjbX2Scn9U4MntWieL4",
  "key22": "c2cnfiUWwbkDXb6BVzuDTpaVibRU2fn1h2VnFBEBZ1wpTpch28H6mndPCR1mNYYf3UmuRZuxJVEe9bYAFwWEaw8",
  "key23": "3K13jioJz4mD6H2uyrkErVHssU8W3rkf51CmMEWvKG2GWMtb7AejrgAzFCxW2uvepm5TU3rgj5bj38nQzm4Lmxho",
  "key24": "2bSUwWV4fbP26TWnwkQNecwQ9amxf5oUiB65VwFeZ3JU6wbeU2AFqTvnCWQLy1GksVy9oVj15wA5wVEr9dhz1RGo",
  "key25": "3g5mxu2EZvw2RvZe9bFWJPQxKaPLyAwkWhC5LJYWscQ24wRyWsiy5LEM3J9SS5mNveNWX6du3Pm6TmNwZLmU4b8a",
  "key26": "3hXe65YKvURKgjQuf2JFnEeXCudydpqCiKnbmip4igzmHhDNdSRw1sZp5E4jjAPY6NM7BWiEPAAjs4eUJRqYdayx",
  "key27": "5i2CkwMZpT7wTxVAcAfBy4dJYygZEMz2UQH5wFBNM3mmkHP5hFvCSkqsviZSXDfd5GwxAvE5UP8G7EXqJmEApqmb",
  "key28": "2Eui7qkMiTJfD5urc1t3Da3qy3QmEVSEZCcaKKxpRR7JzShfeCy9GmyoUREwKkxbhqpihUncQMVhBFh3on85MAAz",
  "key29": "Y7zbS2qk38RzjkycGRUBcc86Mz1bYvgtDuu1KGMnWw61R8HCfgohLxp5oxvz9RTLvsSqih11woKMd9GsdnXA3jg",
  "key30": "sdgQZdk3yvHcy6gJwgFWRN6JqMzvS6AEBNQcYUXB9K4Xf5KWERvuiRvqQkXZwS4AYgpUB2Ya6cigaros9VuGtyA",
  "key31": "3QWy9z7bpGyCSfPyJR7qifbzv4CRVsBA5cHYpz49ByVy6Z6Ei3EbyPJgSdUY22WjUz4LhHZUkuJzoBBtKfGPyj9P",
  "key32": "5SW1xMNjwTp1pLun6FCMERgSGtN45x1Fo27QnmmAXxGxmVboWYgsYhZDTXFbHFdorjXBPqRVa1JE99K4CAeoi9bj",
  "key33": "3Ph71oqBPCdi7qSUiR3R2Q6tGxBAk3CAVabhrBCEiKZtSJEp6ZqLjfTYKtsJ7xYtd2dnfnwA6boxUqc7yfAvxWTo",
  "key34": "4YxSSwP1L6cvDoA2C4zu2QgfGUgzF7RxgYsP12NtNbRthvfooTWMcy6ALkGprBh7JdvrBH5ZMdHp9f9Npjxm6U3A",
  "key35": "2hTM1hBqhS48WCnYhWzYHoJETJaxgFfnb9xyVmf8PB5dUFvummGNAYUhTSKVaA28geBBKQcfHXRm4AkgXDifNUpR",
  "key36": "QhEfgR5FpYWd7rQzgWNjsrjWosaQ412BaeDWwmQFrxiHyUf3C7RjwpQ5tG2W5qYyk4ci5vJcPCyPo4DH5ivRW8b",
  "key37": "4f4LoCAkv6ipwuLgZCxamq9djCUgbr4FtjS5KBrrxeAD7t3eezhyNseAERa4H7B7SN6NyT8xvVUKFsSJ6mLZwbVp",
  "key38": "4NfdyLDdmnFMEv4nPsXrv4ipZbreQe5njFBQz6K9KoXibNJDtCtPrSWJZBUdXuDmZmeF4KcwVh9yeTjAMsup6chg"
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
