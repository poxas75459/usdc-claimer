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
    "3PcvFR2Be5dvu2YgD7jsWQkF4dia5YkXUTw7GFccr8epFJGm22bn8kLHE1aCYiarRT7QAQzwCkHqx55t6tAJqezp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EBohGD7cACc2bWrNQjRXmfB6Az7MKYYvsaN5x77Fd2QCEThYcaQwjtYouDUs3EErEVZFYtXAhU8S4ZvkDCeUmsk",
  "key1": "41WSjsTsGe6eMRzX1nDLG7rZnFGNzwctuoSQ1XFWpDbKFdQVUkAwzFSaYB29WborG1YVUgw8XQLifamqDRNa2pyX",
  "key2": "3nB3JynDSwBaP7kPXcVKfe6Ht4NiRdaSQymy4Bg4i2XnkBXBCTALDv96Pm2b996PJxDnhCpTmPsQTeba1v7VYZB7",
  "key3": "2MiXSe3zqnbDYhdHC2v9NECoKRRqkwfhc354TdHrWtHyqevNWh3Y9zSZg2Djb7FTHssJvK3QYDuo9X9S8ZJAXYXw",
  "key4": "m3nR23AbPsATBCQPmXq4FAHkTsVTxRdxLHfjEUgRc2sc7Me8qod5ccRKiH6i3vZxWtyEm9Keo17FzSjcbf6VfVi",
  "key5": "4w2Uwx33v8tEDF7oFnvZYkXPAZitUPZ9Hnr35FY1mSr4Djpjn2Dzdo6yhUB6Tv5smyckw2wj898eTbVMS9JwyN4Q",
  "key6": "5UbjRpoFbupwvDmndKo1d4Fr6N1mBEbhwDCkgpka6FxPiBjtXVsHp3zkrkPkWzCBgME72vnYj94iPsXGtjBKtbPb",
  "key7": "81VPA6potqfWWXn3iNmf8Lospo7T1Vp4BNUj96SqBXa89XMkD69RodTH9d4miLnwFbHAC6SfqisVcGEvSE92hXG",
  "key8": "pNXUe34h2xHDo2kpNg9JSaqs6DaaSQTeHLHax5GGqzRmbersnJ4BX7928DMz7S8Gy6sm3iBrahyKz2hDvTAnDCd",
  "key9": "4GFsqvvkuy8oUgeHNmfNtuHTatTt1mPQmkpG5FQ17jPpyCPeQQkixDyuWHze2G7g8QrhPMaigtp9LBTZQJbjrbfd",
  "key10": "3tv2iMNNuLLfyjgD7wt6p3WF1SRLk4XyRyefRn3xyXgkfSvRbatzumpy3Z4omBXqTa2mpZgKKGteut9D7kVM1m89",
  "key11": "5W6xqYmiVZ8LtLjLTTHVT2MVJnAwTL6ffk5xtEcvND9wpsamRiYWxTmjSFeizTqegZnkH7KmUZgVoQrMbp8XTxkq",
  "key12": "CUNX9q3pCQjtJ2hFwCJZPYL3Kgg1qac6j4aE7UeF3okzzJxvEcALmhQ8BHqy2f3qo3mWEu3aMoQwr6wgqh39Ayz",
  "key13": "2KsU9xiDh5WqYKWAuoYRkzyXRW6PNB2j54wqZfYXkjPCnHX9HfdtUKRPX3ZwsoMqFdGtg7qK8C9Zv987jHyjrEp",
  "key14": "2xDtsLwcL8aSQndx5N5HhsY3QyMK9CcuBqSMRyj3DWCwpjTmkZriYiaPHvF71jeXNzYwvPG55UFvNQbdHwTCdb1F",
  "key15": "4VtQwzf5UeCZjFbACcF5q3KRCbBzRKeaVKVDRJ2vK5hXrVP7UyDgjbAvFgUFMmuv9cse2Pmi5Ez2GRWziQfhk8kS",
  "key16": "cwgie13sMpHjBHrfcBm8KvxwBXeS5THvJUStXHrU95ukDWVkCmUxTbGfAkx7cDE1of2Q3juBqcPPNVAyMe6AikY",
  "key17": "4yVqhJMpTwQxCzosvhnyYQ32JizhUv5g6cXGypgyLb1Su1TKDhRNZe8K6b5EJPakascTD2QqFbFS8ivXSsujTurQ",
  "key18": "4YGqQyMLT9dkJoVtyzSekadGpu4Q7oYH74f1em2ESULFRGnxVT59kBiKC5dJrUMRpkPAUhjg6Dd7XRMz9gQV5XiS",
  "key19": "5Q9xApMiEd7RDg15q4hzs4CN9ReydtabxwsLtG5jELgTYer7cA8qsT2DJ78rMARSUpBFDGUu4CH1FPE6he1XANwx",
  "key20": "25NbFyU9xgQA2K1Nwr8TxKfkTLtzMPF2m3tLSitaTyHs3xp1ASfU2oW3gzNVoXcYqoyuo5NbaoyFn63pSPDW7Mup",
  "key21": "46U7qQZhsD3R6bKKmaZCk5UNswnqQDUJUBzNR7ELM9nKeunoAByUBu1nzdgaJf2ia8g4NjmNjcbtLk1b5y4AyyZQ",
  "key22": "56Sgk9TfPiQRruFuVmYr5k2a16jRXmFfyr3xfo2ACHjturaY6Ac3CjxbPqTDTV3pwyEqQcXfDUNNYaKs8vPPDmPd",
  "key23": "3unLfQtY3g9BsSPFzgh6fHxe4FMubNJ8x9gSqFGtNgVp2J4cQCLHMbf7gzC7g69Gabs9UWSfw6s5JLBCJL1eF8j",
  "key24": "3FQatuQcWqCPTNp7EQjHsTWEZdnxFnNETaqWqnTpVKrZoX8VXTmkMkyCv2N89tqvwqYtuKQpMia7dK9Bmu85RC5Z",
  "key25": "3aN8vuDo9vNVdod7LdrECk63Lzhuby7BFhToULEh7YhzZUZb6p3Z91EJWX9vjwMj8T95HyKUp6ZXNa4okAArdgYL",
  "key26": "ukXbDWthQsRuvASJ1cLWMEBakRWwgmWTBiGm9TKSm7CgsFPSdQk24HFzj66dkeUfEHiAUXcXt7PwBs1d75fRk2V",
  "key27": "2NTxcuiUykAeub2kT4Xs46YDdQRGjuyk1LTj1RNtXuvBnKqhrMdDLY4DcvJFKkBQDTJHQX9xvxniQYdBL8sT34Av",
  "key28": "ruYe595oJbkjemAyhehzfUvpCFHU8Pz9Svg8YFUYEXWGfKKkAEqeqeerd6TtUd8DrDB18TnUV6PJmrhkk62jtRr",
  "key29": "4b9iGfGFB71F28MHWzeJqU6aJauLJ5f6LTA6RRdMe6s8QmbYPYyPpq9tQd1isKKGLZtKFhP5kWnVvCAMfDs8tuF1"
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
