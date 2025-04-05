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
    "4eruZxxJzpzUx6RsXyj1kvZGH39gbUa49mRMLN17omfZJTLZ26r9ZXN6kj4f9aouKnBosgvLaDBEgMoVjYZV7iYL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57q32vFfpRtiWE9HfokCbMPyJbgYDLfmm135zGKBPQG2hqeViHZvTDTnnZfiY5xXxXNcfVUcyqSteA9L59zSCoGK",
  "key1": "34HC3xk8Rnt86vk8ts5XtrNmMLAWJ7P6c4K9zjLyAxqdxRCiyrUhU2SxbMqVxwWhTeZEnhmhssD5YCijVNkhvNPQ",
  "key2": "5U2ZGaqrYdMAMJsTj17kSDsXTgvHEXdGTCeBpA2ALmEcETPhd3sWDQVQxmPVuQp31Hyk1s4ptufZ46uPUD6vpQoK",
  "key3": "5P57caR9TJ4T2BmoVwXDemq5Z4rjCzuKoTr5RCajeuyfctvjYnsxxEQTWG3ZHbGjwMEqm4iqg2KUMvfZtad4DbbV",
  "key4": "3bcb3YvFBN5nkYY1ihva3AGns33ain5eKrDytiRLPWERp1Ti3Bk81MKoFNHiLCmEi2puKqDFgMz1j6AyCkBKVhh7",
  "key5": "5aqdJ1mY14kEkziR8sa8fRVkW4BqGsAt6THKpLtYZXRLQ3jUsoAaXNgmjofFQELnJ2xKXou6KhMjM6Y8o1cEpYTT",
  "key6": "j9GLp7au7NEX2guTqX8N55fHiyrwc6rPLbyz3wM4S3pRuyY732cs7kFectgKjRtLtFw26dq7ZxAZ11UeAUUAFYU",
  "key7": "3VtQsbZLreebtmAonBRM5RvHB3BrgKFwnR6Sj78gqNcy18t89wajswzLDLLAuEG1tgL1XvqarFHxrwfwmQtSGK3C",
  "key8": "581Nj99D6bpv7vg5JhW9ZUZUnfAmNhMcPBfavP7pr36P2Vrx6CvoWDnCFTUqrTSFUW3aXQZUR1WnMaPfDe3hjHGd",
  "key9": "3PHbBKoHVNtrbCxC2XZH7LfWpjvawFqR3BztzR9KEaPg2VsdudC1PjNxYa34QGkRbjYuoiBETZSa5Y6ApkyxjHtK",
  "key10": "4whAhy5ywmrCzxCqtGgCdnKi7CaJK8FDVC4jMUof4ktdJzsD6S8ULaP8TQpf9sveLUtiykQoFxC3ymCmLoXJijCd",
  "key11": "4NC3wBJ8guN9o9dmR42M6WF8M9yRkLk12DvJJ7QL5EmxaPmaxCH1vREgzoDonERzgNZGPc4WkyTizqCRzWZuthYc",
  "key12": "MsZcMrNKgS6GLsWtmC6jMZVcsLcQsXWfKtpyhK6mZFmNDD7oYA1PgmyuXKmmfQSCV2Gc9jp11iySv5p1DdTJFkr",
  "key13": "YDMh35qzGA7oaDvm3qtmX2ZRygyQhJJDVMVbc4gmpcvz1PuVWam7LkWKJHbWr9kdC46b6JSXUTX4h3vvZWDFTGL",
  "key14": "2fksFLomX8CB9AETdmtsHyTa3UtWdsjLGMeKiY2rUoDXwFsUw5NoKKHLftaRwtH4LRwuTk2qeFDLTLHH1AG7aEj2",
  "key15": "4SMM8KtCRESVMhVJTZutcN3hFQNwwbB1sD8x6Y1z6WfKPQp71wuQrRmu72VYrwF3vjK4fG1JfPqtqpxzuCWdCN4b",
  "key16": "5Z2gzFg6Tc93XojEuBQZ52jW9mXHbSuMS1YsfLo29vDxi8XdRDn68aQP6KWsRFxS2CBBzy5G4M6cJk5BuQcRrTBo",
  "key17": "4piK3Sb2DovU5ntc9nTXvPib5UTaL7HQzeJfM5xHcs4MprBM1nEt8wGx4uUDAgxBG39M6KXrvwJxwEmRWiYVSDVC",
  "key18": "4tuXK1FaABdk8cxoeFEnA5DJrs8NUy9GU53kFygGcPbiKHK6DdiS2XKdDa35hnhBWeBKbvpUw8SatSPRmduZtFiJ",
  "key19": "oQqbuv5wz2qYuJVa7UnFyJuf18JpRdnSaxF4GzWXCJ56TpoQzEr4SHo6GNPVf1XupCQu8eK4roq2yqcHZ5y8HXN",
  "key20": "4cwxTNHYd1fnSZdu5T4eKkRH2vV3hMfr8k3o12nb5hWDo5qY2XDawkeM21VZp3VXQuWbTY9TfH8ukSSZkemGYrWP",
  "key21": "3SNMCQfGQRUAWkSudS4aTf2YWuXW8ecozz5SzN5rxFJ9LBhXpuX9VNvPafXidki2oCvyvY2N23moMJvLkW49SNGh",
  "key22": "VSBVqeAGzpwLk4x1KXeMiZoDnSX3Luewwovh6FxY8yiG5ah9neu1ECGdb3PXTbc1BX3rkijjvsP8M9qxaWZAKfo",
  "key23": "VH6vns67aEqypVbAXvnn5ouHRfo5uEGwRzKYcHZfRuHo43KbKxUveJuVFEd8ZC5gdUHxuKJJhGHeoDTfNuRXiCq",
  "key24": "GaF7uJS9Pq6Xyki8Pngibk1YgH6okjfKCubDvhXT65kzAZqzvnAiDqyvgGinTzmNCXpiuctkUXEmurzFk26eiVF",
  "key25": "5HjJaPU81xHLXoAaoj2mqQdamVKXUeZeahepr3PyZRK8pdYYEm8vDGvNgF5esAQAWyffyXxAwLY9hqK8Eaq3FLRr",
  "key26": "npjNYw7hNAApHCGQaVucNoWrDMVEcJskEtBSjmYYP89BHk3EjwgcaeoPbxXQT2RPMj4JLTkvm4Hass4mYyced8r",
  "key27": "fNGbpwkxy8a5WG8t2Mb2eagd7jgNb1An6vqhrjRM9mtqtzWtpmG8DaHbeBNeFdoTmUcxNzK3FZxxVg13K5E2JfY",
  "key28": "3THYrJGgtD7dzomVFSsJuyHBsv1Gabawx2rW3MfM7VEdKtogjy6gAnwoRkKKNVW8PANvBU9gzmaLvZGF5vV4i4vs",
  "key29": "5CTwM939JBfqMMACV2nzT4w7hqN4kidrHLPu15N81vvQHSMmv981EnAUbcgyeU5H1rmg5wAMrSZygcm3gPkSeRem",
  "key30": "2MYDy6UxuNa7pQtRrpgeaVaDEgHPUS9sFvV2sQvWFy5B6xgqnUxN1zUnZWwq5Q9VQxPhpdmJsVRFHGYGMZy92gkQ",
  "key31": "ZmEuVHQHjyaLsokEJskdYoPGM95271DXPMifNfEXphRax7uoAexB8x5JQL8VppnJggPiAmUdKbwCwt4WVZRk7W8",
  "key32": "XZEe5pfcedqEquxxRpqJPozunKA59Dw159euvv1oRKPRKKUmAoWGx3GQiwcMdMZ5evdPH2nAacWRpizEhWJsRpm"
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
