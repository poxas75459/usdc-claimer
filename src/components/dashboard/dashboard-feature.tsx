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
    "3hGa7UgqNvknqnXkE6jdqmJoBRaMYhQswXjHPtE6Fxf3y11cqGD4adPGogFE8GRYgCfM7ib46sXwEaMDNKy9TNG8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NguEnapZjtftbqcVAUxhCesSpbDRmSwnDbUAYRggHf6UNwbVoPS3FVbhHFVAMtwxmfSCdZcUBYyD9phFDwpitRo",
  "key1": "482cqjF4QDCqTGfMT82p4Pw51wb2NSXkTNTMhv72FS5eeqoQtYe5hD3vuyjytqPsdi8Sa4gQdDdhu16tJ2XdbjtW",
  "key2": "5kpaTyVydpnPMA7zoBtRrPC23owfHe8wo7DaxXRNSzGHLrgVUMbPGnqviWhZPQuvNaK8bdxFmfKZqQUcfEsNg5VB",
  "key3": "gF6y8dFhNvem6jiA84DCw1taPiJU266KtUnALakjCUREnPQpFVvK9qsh9H6DgyrnCgEEoy8f2QcXC6zPUdoj89U",
  "key4": "384625wTrx7QPHtZvDy7EdCkvkc29GyCkPrgkRNRHD5SsvR5dvoeD9ijzaiMSWNkqGYbpEUu9J6HuSKB5QEoxC4A",
  "key5": "2EpvFvMwcxTBYJ4Vt9Wt2m9RAHZmxqD2Hd7QTeN2AgrjiokKmiUdzEeUmuZuAi7KVvGKMV4A4qpfRy25nDomDFhR",
  "key6": "44nwiwYeuc3VVJfxyDMpRqASgyLRYUPKY7YTC2aDYsQT6CHDauyhUwfwr1wcz6uowxKv9P7kbomJoj8Rv2zHvgtN",
  "key7": "AF7P5h7Jf7wGNn4YEZx2SMY1VVpvYdiE1R6CWnbqseghyCLktQc7hAGuybHpeLN4WhaRoWvKR2b76gZU3bPqYHa",
  "key8": "4KjVBi6jrBnNNEehYDGbprGi2jwzEEXumbz8aNy1Co5EhgsUva3jF7zuY9z4Yh3rBjGWwXBW3r2UANsuCEB4kr5A",
  "key9": "XnKoK3dm9KBnHQJwKNPDwWKW9zeHvTnxjk7WtYRyQ1gxX9iBwEojd9sHDBwPN2GyCEzzkgRknec62rFSQC7izg4",
  "key10": "3XFDpVW5S7f7ubpUdc1nosTdZc4HC1xYevewC4DX2beuLjWX6sA2JdWeauyLCH9YiKYbbKzGCADtsjLs18ttPh4",
  "key11": "2xeLKRR4J6veaugy8UxdUWwMvb2Jy7fhWaj6siyz8SXmXEHfqm6dpcfcoV5nMgXoUvdpc6DvnAvSVbrssWKZ6XjZ",
  "key12": "2UitgZ8z3szGS8gNV6MtyeW3N5Nr8FJjVDZe8H69VJ5D19YdWQMQcJc4jMBgr6hMczNRm7CuVgMTVap6j64uVoqD",
  "key13": "4se2SXdW8m24E7GP3wxrdifdmahf1KNFkfccxJUyq4yR8BFdpTrXfsnuTFFgqmRK319fTm8iwzXXU3sCMbSCieXq",
  "key14": "4UEYUhfW81SMLSxYjQraVKzfJNpwpfVaURo9nQyLp8LhncmpQeimfLpNsPCVMAYJDr7arGkWsZYE1xk2i8BYeEy7",
  "key15": "5zb5RkjkGuAKvWAeKynvX38Fn9hCeNBZoXfiWj5Kxc2FffucT9SLDN1jEY5MoKrshTREkQPsR7n69Rh7mfRNmaEb",
  "key16": "3yweyrW6YMN4jH1YzeGow9heKxnE3CaR3ywPWX8RWzetCsDwakNZxU7sDbtAbZHuc8MPNPgerBufqQuJbNgE9KwL",
  "key17": "2BkakgkkYFZz3DepW556xdxgnRCD9gxcj6iafV6LTjyxXc6ZotjqQNrgdJyKzQRYvzSWAeA94EQCKFx2VETRTkpb",
  "key18": "3iKN4dFZAmXzjYk5tnwXHp1Gmrzsy78EdBh9Z8QDrsA7BhUVJroHr2aBWFyugHAEQ9aN2FrSj4SWGuDybEBFx295",
  "key19": "SdkQon6wepQFo7EfexjUMfPnMyVckpGo35rF2fyfKh3HkTCU46HTZS6P1znHWtUg6kDto9JQnZfXQgsqDGEU4g5",
  "key20": "67TeZ5t2WdVj5yFZ7TH142yZ5cCp7pcKEJXWr41gsNGz34qMPbQ3Z1XTfJD6oEcfRooe4REjiV8qhAeNyx94T2dz",
  "key21": "48ADkNVtJ1DS3cNu3iKDEbu5j9z91Sj8NGW7UdfphsQLm8MPQfQRWX7NA5xLTc3yrcZ9ZMMrt3GqyZd871YugVXd",
  "key22": "5AAZ8RsW4W5bJPgzD2PnyypJps5iK1cNfBQpfLdaVJBwUrf89sCzHNgNFYTa9kmBePBmBwj5xngHpV3Nd3s4N1CQ",
  "key23": "3nkrE8duC4hRxTyrJDnsLR1Cc3ZbWiE2oEuP4vsE4fxJ3j26Futydsr4uPYzgNbAgkymGtVmxsB6vBT1wWMsuiTv",
  "key24": "5GmLNXkzVEikmekgsk1j76qcCAyGQYSjYTGTJWLvQqYMC4uXBCUNX4f1f4ewMWpk3YAQRgdX714mnekwxLuMAcsX"
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
