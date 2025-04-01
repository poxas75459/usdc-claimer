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
    "TBN1qDFJtikWX9F6zXNCdBj66yY3vmj3PZYwiruJTcSfrGZm3LhPfo2kTH9WZG6YtrgMosEC3p7QVmNwou973it"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EYbYdB1NgnUJ7CpAYjY33C5sxCRH8fhhspVaZrbAcckgPk5ERYv63YFCq8x6z9mkwQvjhze64eCqRrwJMreUCrv",
  "key1": "22tSsWhPkDFFK5bNrocBdooTLvQunshtGxCYBuEtjpQhK7AazsTcGdmPFdMFGKDsx6GjcG8MuswKmwFi9ZRMzvkW",
  "key2": "5KRxomcYBRrNQuLUL4TpHbn1KHaq2eQcvci6XwupvQXkvrPNWSaEC7sSK1A8iceX3sU2Vt8wE57XBFvvMGAUu4E9",
  "key3": "NYD7ftFUXEstvbYbSy1TfX9VguJ2698Y68M8iadPXWBjoVUDNdUQPPeDfunpiJUiRy4TYCeTguq6eQ69mhydUC8",
  "key4": "5aE1nydrGENDtL65Tby12VVVtJPAtiFSHc3TTNBALCh8yiUSdbaZakqv88N2ewzg4axPxeHK21UhrteeD6GdubjC",
  "key5": "5MF6pnu941qMwY9fAdYuweegSDwRUmV37TmgLUs1WDc4cPbR5DXt8VntrZvdEN48CggjFFmaJN5dHx4iw3guM4V1",
  "key6": "4VYEoeU4noUUuXKHKS9URm3pCQncKsdVYt5eJFbX97hJM5C77Npps3zyJun8knZPtrWeHyC2Zz6cZNYwZRYzzUdo",
  "key7": "2mvyPLTaPi5jCiEpoVAznpi5UfVFC1akKr8MhyT83chPrFXYCAL3PNF5eKZTMBgvfvu2Q1FhX3Lg6q2L5WJM7KT7",
  "key8": "Wc4Jzh7XYcLE6VB76cxymPUEeE3B1gaHV5pX4edQRmkTnMti3pc9xun2LBVrEgeBPzLNZP93w19WNyemweQ6rWC",
  "key9": "1F5e3au6koaiTpvgeUu49C5pggEwnWfD7sr89qBJaddRmCsuHoE5ovAPzwzc6yeSwBhgUudBVZV36NH3ZBxA1Ld",
  "key10": "2GpAdTQSeuL2viPgbN3anDjchpABmRAwd7F2fp2Lu9jLoheqyqEZZbcqBtJUgPuydt4qe3qk1rHLBf7VAV8oDFWy",
  "key11": "34wgtQcXfQivkgzHMHZRz2c2JK4Vuo8hQzbVQZAmz9GoQyUUGapZgKFuoPN4xh9uV1aMVTBENo8ha5dHDdo6yGJW",
  "key12": "RTqLR1zF4nXGnATf9XboH75xn9d42ZPxGEMmWTnZjuzr9SYATS6prFxWy5syJF1PWV1LpVP5JfCjEwfo3C5FKF1",
  "key13": "NsiYhVnK8uxLRckJHkUDW53ui3rWEkvotUmkWvMwpbfNpxtiZrtJdqj7QRjg8yhvBTJEWN5yXsC3orqhHV7UwDA",
  "key14": "gL2V8HDsUqKz2XFYt2BU9RqEMNWR7x8vAzqAKF7K23EAt1UsU2mdVkVGF6nrehCQfwPpoueVs9Yc4tNdnto9n3V",
  "key15": "EJ7iAurBfgsc3XuZBRwJffodFxUYTJbQr6iP74dVf8q7BwhzuM45YTTFt13zxHnUePKyCoSChfkBmeJiTLKrFZL",
  "key16": "2qaw2PsBAKWmSuPBRHqPFkkWRPBf5bd4jYHs1N7tinR3HCjJ8PecUXwSjYfYWvbNrhnW8FUW2QyFsifHAttcs4FR",
  "key17": "VXwfnKYg8uqfS98Sy8kRktAChAvvnVFMEQbtyaVBK9ZivH1qJfqE1dAqVbHziWxPf4uvknC3MVtPaH1xETKqH2i",
  "key18": "66q1J4GZ8htgwEg8XyNrueZvcioeqZEeRuSWG7KQx3igELmwYo2E7WP6CA122MPrewBhho3BG3rpXYVQtPTmdcUT",
  "key19": "4MwvEAfZzc2amW3e5gbwifcKnTQDXnMRopZmoHC9SFLT46wyVBQCM5uFZwR77tiUYzpMRnrzAgpU8hNX8WTBt9aB",
  "key20": "5kSR6k1PfLnycLdhhNvtRbYUEXMWHTejMhkydFyQ2fAKKQqDqh9vJp8y1fqsQnCMVmM7N3LYGwW2HqYYE23xEQYS",
  "key21": "2Ft5LpWTscYcPuUN6N3XEGKeC6XDuzmGTb1y3LBnaxxE8xx5zuXGQDNX1GnyBQb374cRK1WLqSKLx371ycQkA37r",
  "key22": "5R1ZjH6VhK6eDGeb3fwNENSsRoaZFSeXNf2PvrnNftEwSoLNTFfLuYZbMYyX1DyxzxLmFEGeXM3Eo44cTHS2qjRr",
  "key23": "3yWK7cr1Gapf2uqZBFyY1VhXonDp3pKCG6Mq4k4Gg59DsZb97dR1a5nQYrJTy3K929kxHSYCw7jU1v8ZzhAW5Lcc",
  "key24": "5HVoYyAPxiz3KzcVTuVBjb5KGhzuH83aB3XGrotVuXy5Xhaj8qK1euDGPQPdvNjQQL6Xba6wgBSJh4cfWVEdwJpv",
  "key25": "ez6MzHgMxAkCtnUMzKsgjaLkVQi1DYoMgTsBrXqUV3oo7YE2deSK98fzg7nHAgCfXBJEPkR6VvMwVvW6LFY7nFc"
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
