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
    "JBm52vjaXmnTtr117xj4dnwnMuDxswr5N7ydW2voz6hxkwj2ApkKjWDAPuoHr6H7WNy7od6TtVw7dP6qnrLEUQM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33LNRE8Kyrnzjj7Lv4RcUN7wKrhrpQKVNsjrzcd6wBE3pYuYbBx95cKqHJpz9gRvraXNeCwHmSWXNPfjx2bPpg7y",
  "key1": "53BrEcqV2wguLGvFNAjrWy1E3tWH3zX35ftzwRNS9MyBDBZH5th8wH3PezN67nyzpAscrRknCdhZUcKyoqaTex1p",
  "key2": "5ijVWZ8tRommNSgmN1Mv4PVMy7QMMYE2uBud7xWDBj413phiSsxNcjLhDJBH26FmWcBQ9wbT7fECapJe24WcXaQj",
  "key3": "sKEVGtovDfVF1RKiEf2Coph5b5pVQPwY9yvGFbr5mKspVXUfYYbBZwVmKn7kECqaxg4qEwn1CwjoSuoFfjAKbmP",
  "key4": "3NB5ipm7LiRRpkCYtNuYkGQF7i4kqfSCh8Ktc4rtCyRN8dJ64GVm6rRSqxHYX7DV7z2d19ZQmHgBCTFbrmvcvSJ6",
  "key5": "4q5DaCQ8oVsJSK1fGaccwJJoDhKR4CJwP7d9a8dWw2g5sH1QZnFEBJnxDxrT2WaPM6KatxGYFsqNxEUVXvc5orZq",
  "key6": "4H1n6XrvpuH7HuY6LcqRQ7peQH6P2iBKH9HSCMJGyPJ3wXXUq5sg7kimjxvBviciswi3QGbzBQxiY9EjxWPZ7xq9",
  "key7": "39B3Bzpfwy43TBJS1tU5ckC3a6op61WiWz6HRHKdDH5rxSXUqLYNH5xQ1hEFuqZufa1tj3mvD1DoEzJmQyasBxkB",
  "key8": "2WqKn1Br2itTmhSFp9ViBrTxp6JdvyAkyWERZsfypJabu3NtcqXFQyJ12gMf2npQuvpLYaEvLRnndCU1gqDFXFmq",
  "key9": "3nFuRT8PJXGK3SNr7b8DunoTNcLSkFUCeay7zvdJ3jPXusFrdSutymGWvVF1xW2fXiJZQf9phQYWsuJbA3driMQF",
  "key10": "3WutpRHbcRPZUjjUqEG73qd9cruxVSZFasyukLLqXD7xLB19UjMnqiCXDEqHSNUGdkGcxAfW4m3sTU6chUecM1Xo",
  "key11": "2zQT4HNYWqzjbKauRjf2MMS4LzRicDUC4PJ4KwvEFukwytsDxt4CPYB8476d4sxG1ziRzrsqriMnXxiY7zS6E6ia",
  "key12": "397zg7QbJKqsrC5kfVUWW4PkNwqVC9aitDnAJbsbeQeLdTCCWSSD1DfJAZB1wjAQKe6HVZFk7GKiGWazdwJH25Fo",
  "key13": "3r87beAoCVupBwDuVoi6c7g1BtvAU4MozrwAgrYKh1s7vzCkXVBCpotucbc7KNPZdYeUzXLM8J2nNzcZ2weJ1DVF",
  "key14": "5UHdMkmA8xbNU91TWpxqGLoGY6Yz4oFfKcbqbeBoaKak2Jqge8PhmHxaTYre2cc2SEw2xQBnnhK4t5s261ckegkx",
  "key15": "3EXQBqM2B41PrnJNVnyiSEGi1cBJn7o6HDGXYK11NpcGAiF8PrhKukzu4Fu9AMv6vJodBqpeMk36GkuRgDfdBXB2",
  "key16": "2jXRz4TkjyNMAYzxrfJkHAPojT4CN1uzc4hVyAw5XofHBgxPbmuo2kTKL2L2ddU8hRAQZYnPu1cEXEP2QGUYzdmv",
  "key17": "yL6YiwoNe7Q9NHCzz6TUJ2qmWYfPvXyes7YFysL84FybsbPAWX6bhK3FdJdnBxcw7aP8H41f5wNgcsGJbq7X93R",
  "key18": "3PeYKMoswSj3PiS9yzeLnqxbnMm5JT34r2wg5AxXHixgnUTfJZRQs1hiL7pp4U3Gx6sZmL5dxUQSDHeNripYCNe6",
  "key19": "F5yrmgZrH4DLoQ3us3XSPXapro81CbkR861rDZzcj8nC56HvtFR4T5xxtMptSbYeWAm7gB5f5RtwSenaN6grk1A",
  "key20": "3tq95rQDWXDH6MwL9ChNwpKK1DpLLntxVYRXTuq9GkvmUZ9YtefFZJSb5jt79CLK1jztBJ1D97EGvYobBmEDGfFP",
  "key21": "5RtbyKBsJcS8pWS3KzQTjS8p2qpohYiYnsCQfmEwDwmGT5VMNYDAQD2t66Kp22QJfmWsFx1CNU7EW2Lfmv81UmqK",
  "key22": "Mk5vMm8SrfStcopeThNsZjzKF84UuZotgp4rDihMwXnRPfzYHzmcuFkyid7moUcZKbvZnkfea7o5gwYnKSJ5N9R",
  "key23": "35QWmzecX3kpEkExie4AVuYKvcVWjqXos5HDSgyJJfLmNAC4GGAJTDZfhu5o33yfo7CuVZiPhpVbETzJyiPteW9U",
  "key24": "3nXaFmNMJ7Hx7oVR2yqEhbeULeMq8X7TGHCC2epzUDiNZchGewviY4yu66y9QJjZnMhcECenoniCYXqyVRnkUjvV",
  "key25": "46zbcLmuEPLWdJsTrsLsmzxfU3PBFkHKLwbUybgsoumBRaPX4iiUHfNSAf7k9zoxa19ksV1xpqNfUu1QyNeNESmk",
  "key26": "5xPzySBrafzk7QvCRgTtWbh4AL4qEK3tdkcBUVFvEqDcobkDwRJa2GZdo14B5pgvzkz5oqK6GGyn6eFifB8xe2gi",
  "key27": "qtRnKVhrzLCt5NnDK8czNK38g8nb92uy95TyMb57sqb5LmdUcskg5Cxqu8XtDFqRJqRikTyivV5hMARapT7W39B",
  "key28": "PMGJW8XcY6NVs2f85uFe68CGYbmVqUpsMbEN3Myx4VndQPV49cWV9xDE62vuXZPX12hBP87R42pLuStseUhvF3a",
  "key29": "3uy2o9AABUdrg4AbYA9Ev1WHkQZjFaag9gbu5hYKndfYQf9RBhYD8m8RnqCfhjVPesVBK6P6wMAeVArYCeUnnJPk",
  "key30": "KNG2hh9z2VViA8Rx7mXQGoCAgRUUtmDSBqaAfWpg9et9Prk2SqGmPWUfS3CHJMQe9AeCWpqmgdswygomS4bTBpA",
  "key31": "5HzM57rW3kQCLkCivEqvvgtLEhHV9mv6kP98Ri9aNs9rom9WTNW285JH4HzWwTn3HMDhXvodP1XRsG5NM7MeVLXd",
  "key32": "5TxfRGnoPWtRdaYipJnKwuYx2KoFJaEinHjRbxKLwCw1Fysq48j9f8cQ4LACAeVZY3EaDvaTjC7LQ9TP4TBaZtyh",
  "key33": "2NG6SnwpLe1vM9hLUBR2zM7J8L15vzW3DmPDgzoG7gju7XVsLUWvgnxzBWjogVoZpreQXNTRquiCQdLTgkaskrqg"
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
