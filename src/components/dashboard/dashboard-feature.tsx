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
    "4d1ZSzouBeqgZhq1ZVP1gip8mGGywtutnJYQGhZaQMPA1YU1fuLJDuCU7izz7KSUBZHwJEm1bkbJrcsm7rmS1tXZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GJ37goVVEFLtNByMqWmYpW4ZSGcN9eDBB9oeUQJxsYKwRAbjgzsxVT7PXATwhqbtbrnx7BW1sw8QVrhDXm2KBmJ",
  "key1": "4VwZB698Mh18jESYD5Jfy8yFJj7wh9ut2ZthW8h11YJbY3fqQU9TUaAovYdmrcR9YkXYyHvjNrr65J3QgaGDwfc6",
  "key2": "2Sy3jn8N7uCWocRMgYYokLBRLBMKxa1BokjXU3rc5Bc7qWw3JmuWjeTbJBvEHRqPMbvSci8bPGi2VhsabnDmaq3z",
  "key3": "59qC832cTgMRiw1tiAE8Lah6QwUzT5vvCphViEYACG4MM4bLmZXg4KeEuJgQvGGjzb1g14JMid8UdWH8MYpzNRPS",
  "key4": "4PurBYUv1FtBXLQAoKqTQhLBnN2MnNerT1WxnwDrz5aTrg6pb9asonQT8nZc6ahWSz8vpkRHs9YLEkiP12ozagp6",
  "key5": "2dDW4UzKy6SDSE2tq6TRJMLpSdAhGjLt9LxeXoWq58EkvHDGF5jxo7HavJtFXBeVnrPaxoBAeZduxh3AxjPaxFAV",
  "key6": "2rtcKaJ3KjsyhSc4fu3mwHyNJShogs1Kb4wc35h6mxohUNpL2yVT2MqWefxrs7BSgUAqEH9hxk7zVsqN7jLzUzmu",
  "key7": "5Ndw9kZ289duvrHZhLu1fmfHPnB8h11M64cmNSrqMvMar3wgDvBkby7Khu4298uhoWgjCFAD2k8qd7hSFHaJbzP6",
  "key8": "4dEs3XijGwUnk2g8vnCuC6kyccWzoW3rZcBGav7FFQjxZr4eDZ3mjgr7yxqGSPKzVFicFj7ijozNMBDcEzRraPUp",
  "key9": "3qJogV284u1QUec7C1vSkkucSBoBYqx9J9gFARxkwqchruMe4zb69rpGzVN5wY6RwubEok958o4XFwTF1SqvVkED",
  "key10": "2nh91oLDNbjvz6ajqifhcQkNqN1tdebqtz1Kh1xTHhGcBmZV4zk4rnfjJhxfEseus9eSGHFqX3QTUUAt8Etjc6as",
  "key11": "47UXeDU5t5CFApj3tJmHyhKpYkUhLfbRJjujKfs3MEqFyTDo3TDjmrVhUPq3x79wyBBkZ5v7kLZNz3d73SJ7Tye4",
  "key12": "3yrYw6MrUe5itd6JtMNCz8VzKwUPDYkuM7WJhvD67MCCg9nuN3VpGstTZ4URyRrMPrqAfCtWQ5h6BLc3c4RFc3hz",
  "key13": "4gAM1z4PXMiEHanVL1Dzk1bQDRShLKjDMKK9WUjNtxvt6kBQxVNR39KhkMPKeSAJQfbkgpZ6QM8GNwm1D7vH44JT",
  "key14": "2MEa2Qh2BrEX9sANRMJE7QcES9JaX1BFGFLhLBxkZSSVFMDDVZUrXqahjuDqwx9nEvcXzznJuTrNXX2JsvJv5av4",
  "key15": "4tenc2TcqQGq9Aq5FgrRSrowvfjogegDVkAuTcUETPaBQE6NHTP15JqZjKorBF7BsoP5wWcicErsMn5fr9B1jBad",
  "key16": "41nUN1gfbopnS81CCzQoA8JWcne6KTYAFvGuAvjo9Ny3bD1Y8grMgCj2VN9t4WJgRn6FVdDeGJdnx7rbwUtpWmiE",
  "key17": "jJrKeQi49hL7E9WHnBPidYS8B1GGBkUw6qvMnFDMo6Tof9sPgmGwwhMD3GHXdECMkJTNPcuaNegD6KNQpZfMWDx",
  "key18": "4FRTRjXb1yfsehC9JBrftvuKWjRNWjqLKdFof75p5guUjgZVerxtSc2tNm7PSBsaTaUaNEP3FQVZAbJhQCKkheQv",
  "key19": "4tEaNiC5x2sNwc4KTyN89kAFrEN2k6zYHbXvbpbUq7NgdqSX9UnDQcUKvDjKCYbTYdbnizXQSVyfvSS9AUVzwSPg",
  "key20": "3mMoA54UFkDhrHkPibMKXKfJX5Bta5sqsDtEV5KzCHwinHmeojCrnVp7rjxTKrhx8jQcLrAyjYUMV6W465Th8RZM",
  "key21": "4ewyVvp4NQVrqyQeKFcBTcmq1TEWHeQRDmFWpxopNz1EzgcCjxkb4cVnuHMB5fyzdkpP6SgpnFdQftj7sLdrEW3f",
  "key22": "4yFLy6z4cstexoXKz8JUoGDMa5Xp5dPJ6sfwPEZewr5BJmnZo48Cf7vUvvMRQr9mCzs4irkzLSiGkc8G4n2E5FMA",
  "key23": "b6XwKWSJ9MToEGmUB4AGNaxtdg7D3orqku31Bsk8gysqeJDh2w22QYa9nw4peVqipVrzmwavygkAMRJMZjFugKK",
  "key24": "QfYKvdXRGMcCSfe2wFGmc4AZjzzVQBuPwVeT9N6xmy5DXztYCMnodEVAALPVsYMW79j2S2RH1GYfF6hi6G7zoao",
  "key25": "2kz2wACznRcQqkWFyPa5o5NpVDHaHiNqxopsC1t2Ev44DQ1zy8AUTB83d5TvWX2mXzba1iqBJ9d3ojPyLW89P3eM",
  "key26": "5Z3pBNcXNTRQHL5eRvBh7XDREywsxEySJRu3pGQQqm2RaggUpaocyHBBYsfK6ZyFwBKhQmFZxMzxpWfUEFZCiYNE",
  "key27": "5JXKZukQerk4ZqkWHqfdZ7PKTeZfnbBnVWxYHAxbRoFShTEo1s1PwExr9s8xBPXtJZVAT2C2XhsJxHrRUTKUGFWy",
  "key28": "5waPaSpkQmk6U95oVgsk3WZGKFKshkAFqsimjTV69SQfnXeGk3dKPWa4HJS3p7Dof1Huipyb4PyqfXN7Daq5QJ6w",
  "key29": "dJupc8C56BHcbxYuPFasXnDqbYxrA2MC3FBdzzU7ujsHg8yR29xJK16CY6672Giy9EEZgP3xA19t2iMWenwJK8i",
  "key30": "cp6K4oXQrdfwMk4QzEnDXkWR9e5SXqZPnizptxE8roCjxhLaHFayQKdCS9D1F8FA4FTb71jWcrB6ed7TBu7Fawx",
  "key31": "3fpedy48K48hDfD2XMFkLN9wrkbmG9GRwrBHFpSB5nGVdxzGCKEt1eQRx3KMZcsoajk8H15Hi1bEQgkkKwLz1WVR",
  "key32": "5iivpC7DuXtC2z7zM69UVzWDhe3UQZjM7JqfuwA119aRLCpUstfCCnk513syAj5t1M9k5dd6HZs1cXnrjD6avHHE",
  "key33": "5Lk54X21DY5sTK8kgd1KN3R78xJDKXaspQ8rGuhZrZPw1bUT3aTXzfNP57gapZkyoeuRtqi7zE3FWpGHhoMka69D",
  "key34": "3w2L3GPsdi5Bm1Y9KY9upPzk6wdzd3p7s48yGwWGmYZ8HfJVKmioW79aPdWjFNoeUrdUc42GwdJnDKDK3Lxni3XT",
  "key35": "2YQrZwAD9uNbkqk6VCEZVE53baZE8eAug18amY5ji2PMZyEispMfF6wCPQVE1YDNQ2N5KcLivfhesu4W3VveFVkz",
  "key36": "2E9YprA3D39XX8VHNF69k6nyTctPTaKy2qX9i9Py4LZovUCuuETFJ5eHzWe53Yo322rnVrkhKi5A1rM9FTWa7Woy",
  "key37": "2sL9zCgna7cCLznHXB3nHQwd3hA7PTJ3PsfksBFK7te3DEQDCGNjS2PKfZsnoDzA8dKBQZRuEAKou1xaBWYYX9w3"
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
