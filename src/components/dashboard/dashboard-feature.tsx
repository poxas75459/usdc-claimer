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
    "4u7XdfjtMmVsoJo5g6wpYsaamrRkHefemLkBxE5qZ5veXrSE5mYYNFXHj8kgZAWgmLmpx1VSwkwGHah48SBC4g21"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AyW7fBH7byQBex6Y4BM5NFyo9TkHogFBm2TvEGUufWkKmQLJysXsCGeXZhQuwm5fbV7bkBToXpiyn9cNdDgEjFC",
  "key1": "EVZBEgMuiXhRUppReMmWyHYpqnr9zDeprNnDaq4zxW6K6jQ2dsX4cW24HEjyf9PgtfosrGnixEZtrcTEwe5AqkH",
  "key2": "249P2G5mnG9QCrEMfWEWLi5uuts2G2dugAwYdXyu9TZ6M1TAGgw9oqvWkjz9vgJUEBEGJz7JY7fqCEeFtou3vzLA",
  "key3": "2hLdaSP3UiNdESCmBZTXaZZZ1UBq4apnoJuDhcRm9zTsAyUWxg6GZKfFNbYdi2YAwxKQGJ19atf5Hi9ZjEtU6s3c",
  "key4": "2G1vHhMohp6V7ogAzzXoYZTxZ8d5Qafp1wUCztMrT8koh9VVsJNyn7RXcS28edJnzsGvrxNV7veCzuuF5DEqjZj7",
  "key5": "5WquB1ZQEEgfipADQnbQ4oEXJMizbcSKpPcwCh9CMKUKtJ2kxL2vvJA6koSFzZTZmTnnAZ1aSaNQ1u5UN5N3zTFo",
  "key6": "6xnG5w12oquabtpk9VqzKQPhtJ2r3s7GmjW9VeCyZasJJENBiM9BtMcjVy7stP5MmTjjHWFhGg8q1nPQ7tVxtd8",
  "key7": "YSutEhEenxQbTDmY1B3knERXdfKZvnfVbhXcxYeLkqDVosnLnMFHxhvyuLZ1UbvF8JLjQhh79Acd8fAFuHsP9Xk",
  "key8": "57gAvaeTtJkw7YDPRQJhWQSNYUHn8quxjEoX5zkUJEQL1S6VUvfmSxLfMgrXUyHjpoF2Zd55w1MDnrW9LSP5CPmf",
  "key9": "31dks9SThjPkqgp3JwK9Ghf8ACdk1XzhqWU58wHyAehLPRGGecJfpREwQLyYpJEL7Qu3LpXmC1xw2YKk3WNnNLBf",
  "key10": "5qaxGNNLVAUkMoz3AqK8x7XnUEdq3PXHNyvfWb3Ktka3EBJkt6FKohBV6ofPjAsemsqnfE3o2qL5di1AUVrLNA11",
  "key11": "RMmsmNgKoNSqsNKLmN1zXf2T5XU1NGDfvMZrkQNUUCH94uwpEQAPFyB2J1sYBMhyioj3jkEZQVfq2FtmWvT3LeK",
  "key12": "4YVBTZ4d7RAqq8V8mt2u9fLEe6BqGGF4E2SBNpDTjjoZsmdoEnCRP7LagLMSLyvbEb6aQBRB3QunaFFAmanr4JNy",
  "key13": "3eun48U93sWMb6a3ELF9CPqys7gUdikjwmMnrqBSE6wcmcRLT9VVb4exDTKAAeufoGnQ1jYMVTkRxgFPNrQr95dM",
  "key14": "5JP3JTnQKtnKYVf9jLkh1Rd6Nsc6VBk6rSL2TmRshN1McGsF7cKRkk5AdBzt7P4a4fiGmRVwJRXi6KVb56b8JQUf",
  "key15": "5tLACtiEvT2EMdyk8YnhmKmgW7iqmo3SXdRQQX8SSys8vqYqUbjaTcbnNk3zDxSVYn9oWzeEofAutSz1kcsyS4dU",
  "key16": "4X9pn1Sz5BSyNaxs26Gb2NPB5sgjdeLpSFTswtWWzsAfsfE1G8sEApCuiha54wWQCKq5bxxYcFc5Fa2parTTP2pc",
  "key17": "232K9SMinKrEr19a69CfA8wfZudDrrwUotxXSSem2w6KZJhnaG15ZiTs38Yis8mpYbAwvGLb6qYjxqd4SyQ8ZWtp",
  "key18": "4FBJkmrFHA9w2EBJFYrUBemzpD3aYjLGHaeAhTTj4A5rZUmg5tgoh2LBHyNPH5TvnEq6YvzU64UpqAUR4QnW8fk1",
  "key19": "5immwDGV8mLBDmtnVhq44vWPuSmYvYgySrhnoQjVtjrBsmwYpcCURAtkEabidGGyTfwcCm2Gm2BmdtJ3bAcpcjeL",
  "key20": "uAwX5fGsms7Bagrbts9N2UdKC3cqWSgTxHhEwu9m7MpuDmz225d7SVzvqaEgQH1kQtajw28sJWm4nP1PKdMugBp",
  "key21": "3MaqtHNe3XfqwXCchSUp8f35nw3dnqDsQfTMg9b8rVWQBpst3MeejzqFjcQTTbrqYD1iaBZ5N2bdn8AhZDEgnmEX",
  "key22": "oMGxe6RWPq8kqtJkmL86bY1VLqL8FeRdMp6a7GPrWSeWbtLeBBTip3XobKmmHFCVDBdHYJ3c6uhiahsQbC4iHP5",
  "key23": "m18w7C7rQfbxQmfN7x4qJWMNSWeyd8nNWhrstTsch59muCyHbHCWhqNvy8d3W6aU7AyNYHnaXN2pBVtfpA8PSCc",
  "key24": "a3iE5cYbQr18wvAuo7DMAKzbXSREJUCWumitnAQDRRiRsfda39JKSrGwi665DgmNzqo1reU4YwBGG8U1wt8netC",
  "key25": "2sJbKPhP78AYGfHL3qwDofE3zQCTvc98cG92u3sJ3pjU4PkwjzmtnXsKFtzCSyLQFxzF6XkpmYALu985PwmjCjgw",
  "key26": "3TuY3HZfrydjzFEXsRe1aBgfaHELw5u3oBh6NytXY3QgDtDnE3JbMGGQyAY1U8p9xjQnR53fkfUW2ERqYASFDrtK",
  "key27": "43rGveabNy7btygWEHisBuTiRcWDK498zdqoWV3e7jCD3utvBFriFoMxtAaaUNHK83HRqTL2CWzTKfkKrrGQ18H5",
  "key28": "hN9zsMXgNxHtFnUSP8awFP4Ypt1bXHWVQU9pNmPRYrcG5WFCQgdsVKgGA2n5fc64xMmkuu1EW33T3evaazFU7fV",
  "key29": "LDMh2Dx4XuPR1nSFbACDDfn4urryQZQXoa2pAMMDR8KbX8SGap3cs8va42PQgJb75v8STGLeRN62dPHScjJetMt",
  "key30": "4Lcw4jYZmGEzpC6whPebauqXnjJYbkE3SMbLdDaMAgZTfGJKfpsCCJNFaGVmTJD6kqr9pT2iCXdCqsNVsn1NdsjN",
  "key31": "4VEe327FzSsH4isCdcPW3NzBrRe163YPnzVPN41MdmEVKhTFUcNKahmcuNdt86uikfa9doinLR6Sp5gQ3hT51hYU",
  "key32": "f79n8FpTbRP3t2QhduGZPVqZTjomEMruba16rAN6NytcBWMmWsS6rKEzUktTMbjvHkJGmCcP1mpf8zLPaU91GSJ",
  "key33": "62zZFTjNA9JstnEfWrCUbY6vMXrZ6wCXfg1kJDdKEJsVWEpXZARLA12THbRj49bmMU98S8vbo1JbhzoKDTFyYguG",
  "key34": "5ivf21MNRwXzMPUEJZ5YYJsbKEXshX2gy4E77V7K9MtfZ8jFzQv5bY9QeyAWxZ8p9c5FLMQAB6dRcc9bsu42S9x9",
  "key35": "5r62x9o1tK62fsm8GGJsNd3bNy3fEikRuQWHGicqtCDK3DGa1Re7sMBd9hJiKYdBpvqBCgwuHM9unhmymESo29ba",
  "key36": "4dvBK2xHqYWcUhYaThbiQCjUr8MqEP3YxLEvsa3pMThcCbiu1sxkFKk1hZao4gdYCfRXKffwqQwnsKBRLaRjZPWf",
  "key37": "7uoPjU9rwFG7tKsfz5EvZzSZVmX4GQMnw4LtRftJH1Rut8tiR3RktMmQufp6EKVb6vhc5NXABVgE63SYC6zB2iU"
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
