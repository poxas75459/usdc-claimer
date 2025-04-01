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
    "2VFDKACRDazm4vNaHBetK9Ttbc9gXQDyZ3mRZ12cWcmXCqRfYvZsyPMzRnDxA3mcQeX7v8ChcB2Buj5yPK8C1oS7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fGtzt1EvJLbCUmHEJ1JLQAs6pMsEznCD7XpDycS5815QmzyhRfr3eUi7EtzbK6RBd8yXaqZPChbYeMdr3qKTWui",
  "key1": "GYrZGcdjLxTrQ15rLqLrqeQ3ivahgNgJv8rVdp7NkspnTGNbrLucxe426KL7NFRiK6Br8jua6Vhx9miWKoyGvb3",
  "key2": "2MatH8KhVqt6CT6nu52dATXPnwQQyHxVAnURCx8pMZ9DnJt9r72qMfKGSmaTC4sCYmXz3P2Qo2Ko2Rrt1R5fyxeX",
  "key3": "4FK1p4JKXxHj9hdWWpdZLyZKvLMWnSQMYqG2PC1qaT86hbYdqG7x9ooucfaYsR4UTYHcFiHpULRhhDTnFJezp7Nk",
  "key4": "4Zxj8qfZLxz3qUVtzbxWWCV7zNevZhpTbzGR2FQFSLDoYR9ALyDyzjsA3U1EFiNfrw3fbRk4tjv7Wp6uqn2nZNW6",
  "key5": "S1TArisgAsvkQG2LQZaMM5CSmaF3GuT9hZyvuLzcngjZZjDYQKo7r467SL532eyzseEz4ZsJczjA6ngdpCrsMV8",
  "key6": "MEBvR9KThhSSpBGX213MtsbE2pNMvBsmZWkhwRg6M8vK9b4CHZzvTdaoar2PerXPnbpzL4yHrD3J7jFdQfdFHAh",
  "key7": "4ghJvbpa93New6XHbuJWGByHMixp9tNepF5mZQHneDDvJeP4dsr2ZRCubAkkovupfdaRv7NfCRVjVagVnwkjfZ47",
  "key8": "62ZCEd9mTTpBVXec7R8oQrPmtxMZTZcwStXaFXU9te98kn8oN3NUj88FcT3prwbwM1bu38k5sgVsma9EbtmCvzb9",
  "key9": "MXpf68RTsqMGX4jqf2NjSihcxwaJbeFxf3AMb7tCFk2EknC6HNNbNdEazhvhj1X4j4HuBVD3e8V5p6TgHAvZ4gL",
  "key10": "5Ag4e5Sbm9caVM2bPP1nz29dhHZnhsLDUwk3y69WUYi9LghrqvNFcpMWaFTKnyofUkTXGwe9mkxAbR1JkoSXqeLc",
  "key11": "4nTMpJEh5xsJPPPEPfbHQzZyKTnomNmCtKKS3HUiEBWSWFCoAJoKM2nJEefSdc7Sy9zG2A72RBx82MuRexsRP13v",
  "key12": "5uXd8iaYLYgvxQbiVJsvokroqpzTcDDwSj1XYj7LTs9UjBbLxmnTmh4dsznW3zXN32n8kr7mknigPCEnS7zes9n4",
  "key13": "5yiRvTZMETW9MNjag4TPBDYH1HJ1pNUdyibJrjEsY3NeMi6Jath98WPPcniJBj5GxeP9uLSgk4EmbY4Y29UutrQY",
  "key14": "5AkUH172UckXGUzPBDQjW9ghMu2KEKoCPode7C6Mu6jDPCwF6xVS2K9ezj7a3U39pnmyPaLgedgvRDPUCfXftaAR",
  "key15": "2ZQKshsMDHa4yQLazdjZkik21mRx2rog5bFwjdCm2ChMDtNQn9WW935F7EPTE3nnJ94jFaRMo97jU2bVBMKXmCog",
  "key16": "2w6LsFKjLjxhYQ5TR5xHSTTxxUxkCzSoZ57PNhfh3CrrTB71FWNpaRS5WLDVzNVngUTZ4SDnVAEhtRkp1KxhZuRX",
  "key17": "3asN9wtsyq2mPSdHfei3HDYBNmFzFPozVc8bAcmLJA4hJbvFq3FFo74vsxDZ5p8W2BWsrDcpkiP3QVdmfcEc7voq",
  "key18": "2o5NAcsSUSPfFf67WK4PcBLdrgiVZbxaiGzRgK5oLq7CDc7UDgPg2jmhSLqMk83ddPDhF83yyLdoMdehnxvb79TH",
  "key19": "5vhCdnDt8ykfjSMzMSVrs7BgdVSVuQ2aRQteEqBNYXfrfkETuHUfAnfZaZVeWD68to4ANuJGefcD5C5FYDRS9vvb",
  "key20": "65HCnyCsB8Sd4pNTtNVjRUweZwtr8i7KoMPns7m7uFdw8dUxDiR8R8CeFuYMjdSR4i7wpT4tUrkKXkPFA3vmzs9S",
  "key21": "i3u4qb4ubBn4oVxEkMGemMV8FZ1AZE9VZ1QMcAoJBA2f8TKt8A3RKPMPNCm8vPNdKWw5ba4XqYNzWPTp5L1ZL5Q",
  "key22": "2GeANdq3WHbtBZvwHG81KhH3UaDfWdYPnz3sirC3U4TXrJ2bPApw88yj7KqTP2mSuWry18Fz24a8WzksJAQHNxYW",
  "key23": "285FZvVgZj63w3p6oCtE1472sTm2GLGNtgXh3yLkgdviANUY5thUB2JeBpefuD9asjH5uerGF6hugca3389f1QU6",
  "key24": "EcBq76dbxsuJy8nR9vXHrvDej8rZ1GFP4HowLiReRPAyVr5uRkoKrzMgeSy3VViiJ2Wy6UfQ9ZBZjB95vnaiZcb",
  "key25": "4jYgxJetL695U9v6QMjBjPrNdgvebjzbspdWLa6riUKcCk8Qe7S7QqQjcqVDHxs7e3T58eqswcCtpb6ftTZPPCmp",
  "key26": "3EAUEC16JVgX8HXL59cvL4fhuy2HskT9nhMdHKYZLPaMB8CudnfGdQntkrKNUNmJyLrjJoQhzxVSiPjRZhtdrycQ",
  "key27": "58vHdxrJ6ajxpsphqj52eG4Swy5uooQ6yxQ4c5DG22nYEFxBeJzHuiNfywC6qY1Lg5G6pmJDTjJFUtVg4LAtchzi",
  "key28": "3ME9ypLVsv2pQcHJM3etq6FEvRV6rhq8gXYyGxyHxMnp2xZ81mnY8Jw3nQHE6AWGTDVkNBwJQ2RQwz5HGa6jvFjN",
  "key29": "3i8qbNURpYJCnZtBkjfdf4TkEmCEFZ4877JAfaVWCnPz6AfmKWjriq3Df87dDKx8iHAeJd7AeQhq4jqBLAuTfEVQ",
  "key30": "3NeTiyfUHvg9Uv7m91v89mN46dgnsoSc3EpQYcADGTkr5Gg5HQrjGczgGzTEnT4EjKmftHRhNmLLKRDTtP9pgbb1",
  "key31": "4Sj5tjcZJNEGGnmw3yjCWnFzA2KjuYPiz8BdnJ8jU5BQVt2HqnhmaTJYRaNrfPPRJGwU7x4wWNvrv24V7bJRAUHF",
  "key32": "5PdvcVD3T1jyFy8N9r5noBoqbD3YHUUGULz9u7d43ScQVa9fxT2A14XJ2xffHGnDA83pFDoL11SKNGQU8pM64cMR",
  "key33": "4uRYS7zFbmee67gtwAAockN9bZr7ddKvWVsCQwY4Q2rzfZQXa6x7uEEoyr3j1z52Ww2jp8oMPBDVDj8yX5rp69Up",
  "key34": "5daxqJX9mYHWn9uJ6y7aXx9WNnGNZ4dMsczYJ4XRK8fdop7ifhE9pvc9cvMTYgs9AaytxMHqxV31eLY98aEEKL77",
  "key35": "25KhKfjSy456CmubdvafjpzCUxLHJRbxd5CLCULTodfsqAxnyVnaLmLfqDjQxGHABZDEvjDr7T414nrFiGo8YZTP",
  "key36": "56dx8W1NK658dp93KTRnGCFbMwynhT2GAwVeFJzvssacXJYvTwF73xVDeWYxzZmV4uLG8PBThqZxKys5GhkPVtc7",
  "key37": "WGNP2tRYYmwTLrUyexVRWFMQRMG7gERfiw7PL6KKYN3LVZoU7NTHUVdx3wAcfYS8YGmjRAUcR4FUzGwHnEaULiP",
  "key38": "5YTsztb3pkaQ5rLh527VNsVd4hNc4Rn7aA9nCyQ9oqpitgGE97c5uWTEyXqQWpKXmb4P3DbidcpeBPcHGRtDtR4q",
  "key39": "3JFqi67Bxrx8ZDHPYuhrTb3znYAgE9Zcps4UZkWqyJJ3Rk7exuQEJyQAaKsTyykHqVDRjEBCkwuvdyAnSd2EzZ2y"
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
