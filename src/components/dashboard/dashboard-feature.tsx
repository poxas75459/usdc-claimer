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
    "2z6erVWJbA2oSEXU7L3phwyQTt5uGr9gBvuC1er2Co7onfYZcGNZi6tEgtr5oEnwPv1JTE31SjvCWqMumm1w2iod"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Nd2FHnjArr6yB1J3wGQ8nKtgEcwZrepsHLtmoLnMQcSVmKYxJ4AESmWNveLQZNWm9JyRisz2RXkbtpJzyCAKreD",
  "key1": "21gfHaVYEWpyzBUStXLJCKjkH931FnJKpLLGrv6BZ7zphysygB5wSLCUVanaQ96xpTfLBD3YrS2B5Bs7CFEGbiqE",
  "key2": "5sXtjsniMcXuAuEnzLj8LH2bBdfuuDdrxBcRcFFhoYAjLpGuQ5sokvRYMjbednVC2sWB1oUCk9nmJZFMcRv9iiVB",
  "key3": "39Akf1Wuus8e3GAK5td3m9pKZJp9gJdnXgxx597jarK1m3oG1s8KUnMXnKQ7X4zvD9SBHqcyyvJTzJjWDEb92yCG",
  "key4": "EyofmMhEafP9swNs34CpMksBBERCwqcoBn9osL1yEtRUp8SxK6CGCgagxNnX5pM7zHAQ2E3PcENbpb9Y6AM5T29",
  "key5": "4KTxsftgxPsQ28zv9uUkfb9B3DXvYnytaLZmj2QK7rP4QTjW3knM3CHLnHxQ56SWugZzygQtkHoernA6x14nPsuB",
  "key6": "5BTS6iEPH28KNem7uwsdod3FsvXeoXuNrYEaQ7He4MTKWZNXmyJXtNfwVKMcG8vnanz5d3idLxMq7PQ8Xp7wEhEr",
  "key7": "2ComDm6kWe1FimwxuJFEKtM6XkL7XH4CkPjhXaTrpxoqYdY2rryVqqXjrCXCK5v6dkUMz1sH8nkH4gkpiNhGoknG",
  "key8": "MaxvA6SFft3N3u26gntTbtfNPnCXAZ7v1ry6FTyJuoUVeGgjQKKx9y6riqm1whrrBr6XxPygdKHtcfL3a7NJyuo",
  "key9": "4MSLaZTGCWEW1eq6u8ssfCUai6G1Jjdw36KDZsC9VSP8qDxCCWJYYRt3A4kkegqqAvdKwsRSXntNctGtMaEsuUe3",
  "key10": "2FuPD8dEvMaUpqgd9GEK6wNYemks8mWRYuN9grEdmHsyjvVBz9LyYyBD2jL4whBLzAXep953XnL5XnspisxLbpZf",
  "key11": "3mebvgnfAknDAY47KeGvVNcmfKanJ6MK8vV2pm4TrnPVGU9QTEF5LPrnx5AYxn9eXzk7FQqd5Xdgie3UuTmxZaVG",
  "key12": "4CYk3kwSLuXB9PXienbQ93TyipgV3n6RNcCEbV3JcJ7MshtNtHzgZ9dgYEG1VyxwR5BHE6XrXnx42ZSD8nviaERc",
  "key13": "33XkZQjPRHEzEQmqftoo4NmH93khuU2ypdEyf6kw8jrb2dWemg2z8SNHs3RsLVHQuqU94fmf2trXdTPKF7bty9gZ",
  "key14": "3AHM6uFvBJzzamAgowPEa3kj1i3PQDQPVGNyB3PfPwwfMVKDebFqkxQy9NnGYuYZQAKkdBGGYbT82XhnTD5f3Xjt",
  "key15": "4NvkkvHrWJ9GWAvRMthUFn5m25r96CoJL4fa6SrkNb7V68Dw8Ri9LG5fLkZVep2uVN4ujfUV7p6uvKTcFrFgaRDV",
  "key16": "5fGRopfDupUN35dQjA7JGfoxjjyvfexowG3kGxe2zq4ZwKacrVmnqzfBuHsqB1PMZ4yMUR1yPZpGASZqboT744V3",
  "key17": "37kG6jw1NsFH95JcTbj7tcD8dnxzDRD7g1XcTuDSUBrFBh82jhriWK2kX7et4qchXX2EfHob7cSewWpgLhUNms53",
  "key18": "RFpf3uZrpFsumi9dSYVDGBZro6R5Vux1VH4U6ijWuZiMCvBmNpXECXu6rydZUXeJEw72SxCjzDSxUHYK5Ms6HLR",
  "key19": "fGz3Xh3JKBPdSYo4SgB4bEDSHmns86JicQEUSDEbKAQ5QBw9MwfDbBbjZ2iSbZs3WA1SB3HYRQjo4gXEepQVrBM",
  "key20": "2J7KapFh3SY2JvZ9uRJ4pxBtcWSRUtbPXxPvUuEL1vDU1RduY4s6uF8CRUJfZSVG9XuaEJFDt8QbgoG4zb5Pcg7Z",
  "key21": "TB2cQBZxr7KWMgNfGG6HrabAFz6wR4pn1TZt9BFzRmFdTGPsUWwd3BzDoTMsbwpYTnF6K4Ff9zVS28phhHwNJBg",
  "key22": "4b1X6Y4Xf4fDNE5ooy94kg3zcQ2qLKTLMvaTCNZHpgxiYFc34NvUfVcGPQ8Pwyen7Xb5nYAtk4qYfyExG36V5Ncx",
  "key23": "3zRfKy56MmAhZsVPmfCLp15f4zUYJvKfHjq5kiBeJwzzEdXMYZLwxXrwnuurbYAoGFr9d3NLZxnJnWrpmE7AwKLw",
  "key24": "2QGVj6KTte1MDecRe4g3bt8AYTfsQw7YuD9z2QksgSEgV2mpZp2oLyeCpFQtsog7nKQ3u9R7kuEkcKgr1vn9YfFq",
  "key25": "4YjHTvhkXoqWiqkbtA56WrLQwQVtAnbf6LmmFfX1ensoaCBjYNucep8siRD5KUxeCEr3VWEwEBdhMJEwhjroNrKc",
  "key26": "4w14SPDntH6H1CGzH9ABuLHA57bkPwgq5TUuuZN8wtkLMeZiAJPAQUnxa7BpeW8YqzhfqpbUYQ9wNtf9p8g2tuLZ",
  "key27": "4h19kYxsqXpAzkHnjuj4eyzLMYP1Y3MdY2Bv89rKzfxGUh7nQvBi2AFS1fCToSzZnRYa52oVqdpHzm8bjpGyt8gh",
  "key28": "4sr2rUympixj1kjtLHduXebxJ6b6URq8pP4y3AEx43mtXrHLHAPidxprzn6kBuZWuZfyMbzTdJmd74dLWt83u5w4",
  "key29": "3fGjSUJdBFRMMGSKS2LMM98pnMcQaDFcpTxSxraPkATjuAxD7wpNjqVjd7aoF1jzHuvE5MadK7dLfVxrDLFpaHkA",
  "key30": "E9q7tDiMjsBSFocevwLKdjPDdiSZbVG1mgYkNv7Yi9DWmcAfBENckhVF8Jw2pEMP8KeowQ6WnEgKTWy9EPP69pS",
  "key31": "2pvBfrELRbnM3bcwZYeea2QSrPBJfaw55KYQtqyoMx7YPa42k4pk3rMnszuf1JaqzTr7Jhcx1nFkREbgYDXgiMMn",
  "key32": "5m2fJ3AU291HXVjrLrxyRpHNYervWWhtfvKrWjFTijnXm3YPBcLVStDoR5CPoxPKhGAFzEorqCMb52h1Ymg5tccr",
  "key33": "BzWUmp5NNbgQTpgtkkep3i5CUXqMEAp723ojYkiCSG7jexALNrG6cySed2LTTnVXanvSWZWDWxm2SdfciZDZ12w",
  "key34": "5ohN1oEtXodCeeNSZFdDMQJzWc7THqqinMHfZjYAVJhxPrVnS2kas6Qr48NqFXcXJTxMpbmXvH3FCtjCezmMToT6",
  "key35": "5jiRkjaJJGtrK7NhDNyx6wL4CHXKfjuXsvpzjPnUqweUJyQjfMjEokA1yqHFyi9qZGpwAUFUNgyTZn4D1fZfc4ET",
  "key36": "3PawrzN4eDMtw75xuU3DPqin6wGMSGunuRHAh7jLMWrfvDx8YDfKjJnEKsVjK7g59nRVsKAk1ARePnK8NuTxCrMb",
  "key37": "5zahzdBDbJjqkyMR4Pe3T1pRUKKPqcuAQjJptWbzto8GjVwiTu2z2SVSsJQ2Y9RkdZMpHVbw7qTBeDCah63LtpZZ",
  "key38": "4HMHcSwrxzqdRkRRcNpzGWD6MDy2KzfyM6vR9ng8vVrYz8hSEiyM98XfsLE14vZhhi7SmaG2fWvr7nBjfcXrzKQE",
  "key39": "UPkuX2YguaXGfjhyYmaRXjYdYZzYeXAwqQdv2s7p95gVeLuv2MnevUttobXqT1DkM3Rrj4EiJgVCRKRriubYmsr",
  "key40": "4wohsA2f9S5ruPT5cYFEejcEYGYaq7m7HMjmYJaBWQPKjKhSPdZoWd1msJcfAeG8tpwnozgTrhPVwS99wLAB5rC1",
  "key41": "2CwziqKMjxz8FGTkkmbGXgdML75yupyYeF8ymKRqm27ovRKgwvBhez7J9h1KwFsULMJw1Cz7UM5uaNfUuFEAtHMS",
  "key42": "3pMCfexvW2jmMdAprraajZXLfWm1ceY7WoRRumLZAqsDeALwxW4hHBSZGNc1xUMqyDs33B3P5CyfExtAo9EiSjft",
  "key43": "3a5yyYzzXbYD4CU5n1pKnfnvnLud8j2dJ15Jj3XiZ9QaEPxCGUebyHUEukQKhwcAnaGuX6RgxhGm7zdeFzzsnHHd",
  "key44": "44Ab2iAd7yHhzohMDMNc5gTkRoLK5Lwhf4VHhUncwPcqeX3v3C1EMK9D6wSDeGFE9UULsZ9LBNwbaqjKgGLRkg27",
  "key45": "63H8czoGpQVVw72Q9W1pjSuSwzygPaDTjE3NChrWyNfDhwWqohRfaaxza8xwUULY9FGYkijqkaXvKvkAovpWqnDA"
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
