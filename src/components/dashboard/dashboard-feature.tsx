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
    "4h1gBxUNaWA9ms4Ptzkncw6dtnsmdtKMYfNRfDdgUZJTTAVXdDdGdkMZqESXV2LggnbdfKThj6aRCVVoNMQoK7pU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nFd17gNAzRdTuQoJqW8tCuaH6YFmh2fjpUVF2n1FaETpNtK4VhtEsJpg14RsggwFACU66FhT3yhcpPNs9aHuivv",
  "key1": "5HqpjYm86JmNCeDTJ15oqvg4WBtTNCzt9XWHjTXQszHUunLvEdUJgfwn8X5oaLgdwRfq3rKPBQjgYRZG1u3ekkzR",
  "key2": "2jEcg3fU9cpvnEjpHBtC1xaXtFDB6D1do6yaCWeYPcqFb6LgS4P9HnyYQLXL3RYw3139Eogzt6bEWBbHiojXGwer",
  "key3": "3JMPSfmUBwcDuzH8SSEg8ENPtGLn5U29xyzQ6ph3BaDjLHgZAwTxwUu1CavyubWZRrSTkuBDYcb9MHYQfDkuvp7d",
  "key4": "iGwPBu6aKZRf6X2SiwHvP664UojipRZvdRSJPGvrG8sGgrY7YM67HNmoBgPQVTVXdX6GELUpFoVaUkeMQyLtDuN",
  "key5": "2jRbjroxzsbRjeJyzHPH1sp5UQakBQgYVjkpPRirLBtSsdDFrWdZsfYY1z3mixmyX84XDPx2jkcTRhGds5BKHQE8",
  "key6": "3ryPhrFn3pJFTYs5P8MFG32biQKcvGoeVnwWM4fFV3m4rHEjBbfJfSK5TioDc2T5rufD9rF9UvCifXwQ6R6mUBrS",
  "key7": "4Y5ZptPGoQJnhjLR2vz3kDjQwHaEE4TveAUt77bHsneBCAV2Ui41WeykX8tN6iWYqcroc6WZuhrGWv1yQETdJwZP",
  "key8": "3nDbj6Tu3y2JWNErMwaLwpvexcrPx3iudQRG6mn4KEoDczRcRyiYU4y8e4u7A3n81bYsfync1tBVcN27SnDn9ANN",
  "key9": "3E7UJ1nm1dvGiPzAxfQ8pf6YT2rfue5sQW2ckdxKh3nccoFPrfAWZbDsPBvG5kv73Lujbetr9srLJCSsrinLLSaX",
  "key10": "5uc4h62Zb8nzMnEZpPsJbz5wqB1CKQVmqP6Lx3YXVqZPp1Ux7uh9oSjjmcNQZt9mjxR9uxGEa9LRSM68yVs5dbdG",
  "key11": "5kGzc39fUGwdYifEZwQjHZoNXVdXhYQ38Q9y94LWaJaisJt5AKtKhmPr1hAYXEtcMghDfoVQod5Za6zQHxdquPRB",
  "key12": "3sFkd53cGRvYS5KFqVJTNF1i4RRy5o5DokhqPXe4a34HHNLbRNP6oa42F2eEu7fd7Rj13Cgm5fmQpZHTeqwm7DXN",
  "key13": "pbwcjaCu2CcQxP24aZH28zrfq3tL8qFZDxrceyLDu7pL5dwnxbhk5cX1p9eo1dcBvbVzBQ2dfEN84kAK8j6pUHf",
  "key14": "2BWTp8BtBTb6e268suHwuPUn4VRHWPFAjR1XGyTLRsKQ6n7USgqcUd5QEdUr9Tb54wCzLheP9BRkKRtPRtdU3dyE",
  "key15": "4gWMRmZkzJd61RuR3UHiDvskaKTL85qHm3yAiZb45DeD9funHwWgb5eeDjgPyPFe2L92ce3veu1g2dG7ydFaLZXW",
  "key16": "3Dk4nEj5ptDvfei7twM4n2BqXFRTcqvQyzfvU99pqssg5ytbeSFiJ2iMm971qXUEeD7gD3Lq7nuNToohHgrjqByx",
  "key17": "5pBb3dVQvmMct7kU8LSjKKiNimYp6SUtNZzQJUwzjxAzJDsCYRomvesa2QkG7Az7bYG4JAYXkq5ok32C1EiwqLwd",
  "key18": "5H3stM3cNwyn3DKfL1snUoSRyWbmZneqX5o22YNgXGdUQD79M4oxpJaS4nzFaFmYX9shWJbBkKTzAUi4mBCXcE8Z",
  "key19": "3kTqRQQNiXNSu3G1PKShP5VtdE65QXJ5VrLscuvFQd4JrxzuwjYS4EdyoZauWu6Zzt9GWhDmxZ7g1b9qbgqAjg4Q",
  "key20": "3YVecespwchiBP2EB3rhqmwS4zsurGniGJCvGqJWjb1oDx5nnakZaoJ85u1pZVg5nFsdyLVgMbgw5cEMbdgy23pR",
  "key21": "3SpsTuV3NAKdnpsc2X12xjSspxi1U8p7pqnsze5i7pHfmZETqyQd4yZ6XAqik6afRo4SYmf8Fuxp2eDvx4Sa6pHm",
  "key22": "5MQLS7CU4HmUJSWzUcri8GFwvjXQkonajrQjLz9wEGjP2q9XAQJWcU4XpquN6drymvksYfqUdDiciozenTxdqGwD",
  "key23": "5QBwgWGrfNfDifGZwECXDcoLk332VSQMTqjADy4ybFq7J4W6HP5HCXRueQpxGWafucQB3dUm5ZiF2jM3peoiF9hW",
  "key24": "55Hk372iZmhP7qKvHEAAQPJSM64V9HvmmUyHZtFmKLZRtQWBsgrCohg9cJsKRJdtscwors82TbhjAvisdzW1XDuS",
  "key25": "63LrdJLM2C7HgLjxysY7Rm3ZUZfviyZhwgZx8BZhVzXbRoj4HiMXYjRrDNwvqL3fUowhCPB6DF5zX6oGSuFTFQit"
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
