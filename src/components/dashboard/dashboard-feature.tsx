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
    "4jyebwvUariimWf8ViJpmcg4Yp5CShecNjekEH35fyKyb63FxoNSGxsYHqWnjf78tMUfqpKHZru81EN15TaLEhfo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eyjRrz2XXqZjLjNkFUuTkFsgQN4H5PaSJ7oV8bDaauJVPMn1Ro9PHkyN5MoQ6VgnzwPKg2jSNi8Vf1X6mTwV6pp",
  "key1": "4xu5qJYnRZQQYNovNxSDZNhVCyj8hrT5J2s4f517b5FiaRzC1eD1toW3pe46GGzVz6aaJWRzz7hy65PEk3YzmPxi",
  "key2": "3YB9ZevpdFJVUiYYcfS5oD6SxMVtBYDDpcfuQxKLqAUbUfTN1LSEFXXeQywQCi7ha9pV2SCDsPSqWPyd1i84GM6c",
  "key3": "5h5yYyjsmRvyLESXiwuHHCBAAYQw814scULpDCAv5yxUVhmg3CRrVzQiS8hVGRQ8e5LQJR1puzGhvfgEeSpKtYQz",
  "key4": "3M1wUy4cPNUFJagoCo79n91PZNHtXfSC5K6gB7b9nT1JCeJCbXYGQ5pFJ63QFSZ7PZ3qRVdjxVbgzKkLhJcT1KZv",
  "key5": "3WbRrzs8ACQGTUoydjqBKZ8WEkfX2ZRBDt2QzcqiasC8tC77ECLprHsXCB7uBzwWCM7reCnif4qdiNn1fi7sszv",
  "key6": "5YfPEAFHSfWLRh4MLWaTQqSbu8pnaSnSEp8GuDJriXtx5f2qE8aWu46UVRnwMCcQQycF125W5sbmH1euug7LciQc",
  "key7": "5obsy6eaFEab3gmwNuiAbigNgL79TQn7GmZuUqadf6HPvrTVKMTMZiNgxSFxQQNf48UqwK4CPZW2DnrUdJ4qB1WZ",
  "key8": "4RrwgJXBRMjS8nUQNp7FHcwZ5hAfCHLLs7Tkf4p1Tse8znhHaKJKDEQkUhQ3sGziKxr6CoR31838x1u4jGpXoyLj",
  "key9": "5nKKHaFKniTQ3Sujrqt4mAe1BikKD1DQmagVjK5hWZ213w12APGokmXD4zMmdC393XfM1EZHavJKW12GRkMYiJtS",
  "key10": "5KcMZpq8gm9cJPYrWGEcXf1nhKXDzmLhhVV7PN5VrgwSBLYCFTVTV4YgtpEV96FYy2sknWMKvzuDiYGCP5A9LriE",
  "key11": "5pBNF3Du3QtXcdMvciKNwXpqTJVGQYdnJSz22WcQosPrNUuFULkrhYWQSV3YyTWHLT3WVu8BN8Fg5TtYhitH7Mvt",
  "key12": "5mFvpoDFZbm3gnYQ1R4j9XhzE4U2PaP79fnMn1tF3xXHipELwEEgCVBpYvaQPqiLqKAX9MJ7VGWBB8GNNDP3s7Ui",
  "key13": "57s12nwisuWAxXjqvjK2URzFSVrWyzscup3FHByHVP9TWRXPZrPpAtyJXkFJWhc9QgdSWx8nqfwLeoj6tLsV2zu1",
  "key14": "f517JAmpBAdjy9r4B3MAx2vZFRHjuMYTA2kHxcoUST86iVwuy7mY4FD9pVkYZXjQp53dJpm7yoLQG8QWurK5ync",
  "key15": "3iUdKngE51DVx5tPqcHZSrgGG7Qj2Porke5e2UshqBV2bJ4ubhXEbAMRcCa1opUdXhNcQnTgs9WvAuFhKGQN3KMT",
  "key16": "SJq1UhdqKgQATwb8AECaB9fPb8yPGDaN6HmLnPHLThWUHCgY9vTLLG5uTQGSSKfpsM4ftRzQijzuGQW3gqx8pBx",
  "key17": "3v4GcZcwLG8ud8ZxzYUj4zrJxF5Fiibm86DYfd8KNvCUALJBvwWB1YArSf5SkcBMW7pcoymC3e9ZtSjf5HPyQevf",
  "key18": "51FB1joBQcgc5zSq5f2hf7WSGKX26RLbuR5C8HbHUkTuhpZJt53EdZcFztp6sjoKgqKsRxkkXFPAdubMWuaDmRsf",
  "key19": "Hrwx9DGMGNSvPrrZJBeX17vvVEcAq95LfatpZZTe41WkjfVWdPKAUbGwgm3DNTbFqMU12Nq7iYTeWrCHTmvENjq",
  "key20": "53hnMrU4MTuMpCvaaV9kqWgrkgiSKENtQXCuvPWkVpeEF38Hu1ZTMEWRD3De9a75NyrbZvwg5ReDnETeuhpKDCkd",
  "key21": "4CHVT7MRZk6vGr8JKhqh3RcGpXLg4jbktrycmXW7V1aP3q76Hzt7Uae8KaHUKeTcKAxoTsUhSvtAJrhh1WaoPuUV",
  "key22": "3rx6dPBuJ23vwHpyxv9UXNRocHg56S6JvchKeACsAeKJxJH8Mwp3E8Tb779pSXfJvzybBgsPJ5APpU1TkZKY8Jq7",
  "key23": "5bYocoZRrBTLNF8WXHcNWwJJ8damnGFkUErwPiQA5WGeZzFWqorKhbpW16ZHFMr4jJYYNpjoJPYdExqeEuBKcHrc",
  "key24": "3nTSrMiTRWXoE8BgbGMKBGpMZkuqKSbEkYoEjV3xnUrv7UJhuZ7edwNLjFQczMMt1CjdWun2XZoVdqaBwf8ujfzw",
  "key25": "2GQMF9CCPoAqw1MY3vBqcDNLqpS5yWCRCooRLyqYxivRKEaULAEKyyWtuMzeGFS3WyyLg6XGoQyyp13qw8D8RMCC",
  "key26": "2jkmJSkYp5LJHwT3KuCCRP3jcawAizdUfPwLG2GmdPUiSmGNKwCmsBCdGsQVpNNsxHsi6jWqcFqA7p3rpQ7sHcmM",
  "key27": "3vFGshRivKBrvdQThRx874MAS7bCZEJimC5TYYwdT5bP9TD1QYnWk6ufGQaNKQ67VkZjRfVUqCxmYo1v5n6JBib2",
  "key28": "42GXe7SUeW7XbZaZek34Kft95wjhBiiRqfrQ4BrynYQvaSpsoajNXnyKoFcBd73jfQPpUDoAQvs1DMpZVyy9rCfC",
  "key29": "558io7xmkPkQiDdmWhNwfnxUm1RETAd3zpg62NR8xsRsniwkh9r4phk8bgGQwwWdM1E1c6pU4wfZDnfqkwrUPBhh",
  "key30": "4pGXKd39N1Lnybxw7CjvzX481H4Y9UkwVpDfKwyhSbetzi5bAaJgMi7gJNyfSoQtY1JHWjxUbK8tETza8HjF5ujL",
  "key31": "4LyAZFsB3Wo7P1f8DAaPGd412uCccQCK7RxEwWGTKi4erwkcFhLjgLFxzZooKWtZvHZZS1maPCKPY7jxE1dy7qG5",
  "key32": "3BZy18XZMKaFZrzuFrYLgPPs9gP5aCYR4HZMrjXbFDRBcJmDZKUqYEDSgWysBmWTdr9AZQS9am6oHBepFpu71fWR",
  "key33": "58oJn4MDKzoKibATmMUaXDmpwT1FhduExDge9xKpeTz4JG4wX2uXVQrxSdcW8kWBT34RsmmE5DoCDNzqL9PGFGTa",
  "key34": "3wVKeDX7bp7ZsB14eN6oj5VtYfcGDvUYGNwnq6TNejRAQNs4UzyYUJn3nBK8bHjk8oSd13LbuBDZ5MkU9n2FobVY",
  "key35": "UXgxop6xYsnoN2tskvBCzTKUQjs9drfwnxGTM3btzgrDU9uCNq7sZ9u9mh8EYguxpmVE3TpqdKSqMVMa9XFvg7A",
  "key36": "5xvyZMpaF4szQaDJzi2dQBoXJugWYynXURuGc2d3STmXieb2GG45kWKmVHFUTKqCg2Rzi4emwS2vidj3UsY3cZAT",
  "key37": "4mRonsGpGrXCMmpDLYZM2L65vhERL6PzwzMZVsnYE4nio59jDV44ov4DqSNBJa7Jjcgm6rgFWJrEmxvHb89bAsLy",
  "key38": "4bs5MB321CmE5YNTYqVZpZSuQFqucRtbsX9UY1kZkqJrwr4Xpnnmwg6bBc9Jz5wgv77eHRfmEcqWFfcVex4B3fNN",
  "key39": "5V7sDxTiiAx5AJEeCQrjPAs8BDpuC7hDStb8WwuZbtcQ5G4pj1hyqKPgSHxhivwh4KQQjxMz97vbfdJriuTj19K6"
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
