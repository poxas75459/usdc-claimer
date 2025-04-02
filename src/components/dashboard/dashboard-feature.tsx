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
    "2A5s13CVzL8h5j5jPZsDTxAEac8BKboTLjWmY8uQ2mp4rqVzcsGbvx7dRxszyxtzuTE532Uj7KNvxfdYnvXvfP9s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Kh2UTLW4qrvjuMPVfapebD1eCVsUU8Frq95wpw9TLXJxPn9A3XRqBRovxuMQNhLsVyE5BJ4fF578AjfqURncJVz",
  "key1": "4kzuYqToHm1dMs5jzfZ3DqN29crhqRTXykw1PVfnCfekCrHrKTxAWdoTVTUrE5A2MegXTM55os7f2KjKgh2AmAGV",
  "key2": "X9bVDavWTh9K828Qq45gdcYAszF2VeuEKn1Sa5n3kC92F86fXTyiLJRjzZnh9NQASAL4BctL2rhCCvvfGfdhjsQ",
  "key3": "4nCKmpS9jYRjKCKQy7DStPTXktkQ266tSxxFBMBMvG8z8EcULy2TJXsT4g4hQSBhLkvhHnfZa1hFnLeGEqdjQcWa",
  "key4": "4nwy34auJgumH4MDnKLEWXawjoRsvvhm4NmqDBg9hqtMvqAtmVvzaZtyAmLXj2M4GRQ5y1jrfB76Fif1TEN8AgGN",
  "key5": "3Ht9a6R3vfo1vNUp1VHPDGXqBNJMrSWqDo1TKbQ7dyWeLZKHEhkvbqHTgcjMYLUgf9cnAtEKKNDBtpNy45EYgh26",
  "key6": "8Wu7yBWMS88bFEYpGprbLZFbh16MTzuUBKBbjhKRJJYgyEDbKJX3Eo9WvUtdKvMQYFAvgTLgHpf7DB2cYuCwWAe",
  "key7": "3rEszVpvNirpwqeoANnbtV4oNMy2HzgpSf67tebJgaP9413ja9P3Q5VK3yTV9wubdCRC9zE9gpPy9rhJ1x3ijgQi",
  "key8": "2SmPA3FqYswmE6LtayriGqGTU9cyHhjN3oa8i66FG6iGu4fbRjBkZe6srSLt8SRbpr8yfXcDoQmXjSRrawTrBf3E",
  "key9": "3CcX8tJBE8pYvkARdWp5EjTymTRcnLF82GxGjAKmxc2dg6Mwy2ysZP1NNasibRgs8RtMo9raGNntcmLgFd6KPZYK",
  "key10": "5PGKHMGuiYe4ApiEi4hZWS6WVPtunnupUw7ZHcpHx3sqiEtMjfcw4GqZE4EHmj9yGBRN8fFvjjbxcDTQjfwvJsM",
  "key11": "3nPKfiJfTcVpSSjoXvpUE2CvUYTjc6LZi8rVL8F2BSJcZAPsNsKza5Ni1zQXJWAcyeboqmM9Ad7iFkXd69HjyTn2",
  "key12": "3Z5hpynWipdAFL2n6u6FQkMvHYGqapNVL3JLAoSyvnAUJnAf9sN9GfRToLTWmfTvG5KtqGaK8jA6bUMdreZ22HXs",
  "key13": "1gKPVGdptMhruEMpSEXXwV8wAjAu7QpVGg3Sfncm6YF9yKZCLU4cVxuh268jPyQFP9zzFtqfKYTTVS9MHUZk9a9",
  "key14": "4fvUCYHVGguToXyuB6S32PpYm5pPiVci927JFpF2urzdeibUBKU82wseUNSQZ7PbLf88brA5gENHa8vXAYzmrEty",
  "key15": "4PaUifE1xgSYWS2k2fRseBepE6eMP3NmJUMNubQBgjKQcX1ZXbrSTzoQULDRD7vadkxfcMwkQV6a82orGrqfMAFB",
  "key16": "5iQyUFhdAB6AAJCV2PU5JmnD7LedCAiDKATY5zor3BUwdY4ZRPZiYkAQJZihYwCj2paLywtGKfT82XpyoftxUt6U",
  "key17": "5VxnkzuMwRJEg14iPdWWwKpVEiFdMSa5QUfsqnCuK4a12XAwQ2Xw1SQueERTLpysS9bGeHcgRNo1agia7X5QMSG7",
  "key18": "67NVME4USzyRFuZRW7KLyCFZ3Evv47bqqFkMejrgk4sNhzEVge9SydX9BE4nZ9tYb6gDrWWZAShXQbvqo7esxYkh",
  "key19": "4vU5RhULs9nSHM6Yb9F3kSQKbX3V9SAH3GRm5QPvwxAhzKQDrg4HuzXtygg2gVnXcGzFSbrLaF5CvCpprsKXSZmB",
  "key20": "5XLVkzmqPYppsGCnKujgw9JT98zddMVUoyTX5enxRcwFSiJ2uTZuKz46pCgU81o4QvXAR31h2kzq4DckLcb7qrRj",
  "key21": "Y76wenJMj9Wh4kyn6wvV7MYjLr5TATWtu1uJ5Hb3Harz9sTBcnvh3iyi7Dq9Pe79SN8Yb7nN1tuxY7vGDQskfEY",
  "key22": "3tAaLhJkCMSk7cyHK3iLNu6JihPn7hJHPTzGgNWYh3BPRURP8fFmB7hXMYaEimo1XRpAMTvSvajW8A7p9c8xgmb6",
  "key23": "3hVaL4LpbAkZJrWrtQtDUTyMZHmNN3F9Gs9UgGvigPP21ojfBkc812NHujaB6bxvWZBzyC86RRjVT2bgV9tSmHrA",
  "key24": "5U5yQuNiWpsc9fAQTG92PAhYf5XaCoG8UVFDDTTjykUFqUmrDYzD9GDp4cgecVuAb1dJq1gwth2wkG2BHxUU6SDV",
  "key25": "5jdQuyXZaKjMtCPETgKKp3C6StbTZ9na3z1GRbMo35wj8jWRh2fU7Qu4hLKVkGib32B5YqDWyDNgYafjj1iFmC1T",
  "key26": "5rvxLdxdRTBzUCuu3V6sd7dwKqGdPD1LiRF8QdBExgL3344TZ9XpXU3goMH6LaFETxDg2P9k26pZNgB7cwpUjMs3",
  "key27": "394g5ucSs12WGDUvdTH8ogsE5xGCNjdXeYf6LMwFkCxUGdNaTGLjCkFLXdjdw6LyodwmNHRJ5FKXT8iTQZgYZjE9",
  "key28": "2WwGjFrw8Gv6CM8hpdjRAFrLvdkz2cQ19TTcc6BQyNKgts3NfZ5Lpu6zpciFe7GnSmLCoCxEA8ic2d1JJAYVNbNY",
  "key29": "PdApBLnwfZkDzxFxZiuviTZiZC8XDZBN7HbuPCMWQMmU194swCYZbPLXTtmqwXQtUEoTjQcyausYG9JPGGwcyR5",
  "key30": "5Uv59c9vxXSX1mXMwiQSNR4q3WDbojQqmLVP6Smdqqw5UMYje3kUnwYATtkeoYXHbuJ6oLiVQErmteTVjrKjRm1u",
  "key31": "M8gHFXajtD6KwbDZmQ2VwCQn88JMBQHXUbdva2hw59K2WeNiwjTcDDLEcBpfWNxtgwY4rgP7gL7Au45pD6esPkt",
  "key32": "35wvJuCrjTPtYQiVv79nv3nMv5kvANjM1N7CQbFAkd5R9HZotEaJckebMNfZatKttiPWfVhKfdzw33e8jS9RBad1",
  "key33": "r69Cq2ZS8qLdpLhHWoA52a3upQgCNNVW8WnosprARUmkLN2JSQnLvbduXdLGMcYXqsq7NMqWWtg6gX5VYdJD8Fp",
  "key34": "3A4Jr1PQSKB5ZsMHR9xZaJrurg3nnn8bnLcKS23SVFLrAoj7Cc5yZ5czQfwCHdxEep9C4jxhKKQMKbP7PDRuPggL",
  "key35": "23pBxAaHw4SNdJZsE6VHVFKtU4rCG2kANks9jkJFT1r8S8nH2yRqoD249E1mE6f8xTg4BQMGk6fyfUzKeoE3VvWq",
  "key36": "2jk4q8VMrqYom5KBja4nsiSNA8b9asxm3426SvtTFJ948qK4ebGcYwFXXmCHPipJKYoGpnzk9twSweSGfzjDBC53",
  "key37": "3SCnaNtfQTtEtNU2e6MBk43zFC4xmGYE19PHaFYCcViR8MBqNeuAhxwXAghU2wQoW2KnZMT3a1wRvExPJMMxPzaZ",
  "key38": "eMiFcmd8b7ENhi5MgutkK6LniaUiuP7PujnuAngmUz5hMt5pdpyVikLP711ZNDs8YxQ1MsgPynKMnmSVNztnW4h",
  "key39": "3pcJ2EvNvfhExQ1K3tVy3vSjmEBTFg51jXWjpihCVLtEuskKL4nB8GeMqAfYvvwQiDze9MRd49roMSmkmhYLXCmx",
  "key40": "2qxdQsDaaWeG5nXrb99EFchX7KpRSk9hYLVPSf2YWJ362s534qT2jD9xd46e1pUSpRVjuUv98vxC2oy9FfdLPXsk"
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
