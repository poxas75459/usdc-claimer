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
    "43PsM5cjmmChLMNvEdQGnxPPXE4k6cGcoyr7Wumt4vkeDSwa3QdDBEWqTv8bSYj9sH2fcwyyvNzxzeM4Gn6a8WNZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zsUuoMGEn59P8GAJ2pJqTaszqWV3aeqeiPZuS2aW7iNcjcsX8qZnqbpyY5q5ZagNRgT6rLDGC4DYwhDxHspietr",
  "key1": "4uFd3KS6YzfXCnpEiPK24zeBE1YJXKYsXiZKinJxNUbkbfQhoxGuPoQafRT1855UYPRZisikEmpTcMf5cmJppamV",
  "key2": "5MXh3B6XQdoNHTCzMQ3J1hMFk1FygkUMoednrZSo88kFzYtpXYyNbuayLPQCBhZo63CSHsDBFHcHZi6rQzbFydEP",
  "key3": "4tXXMQQNFD9sHQ1iaaZvhPyxdQuq4PN5P9moSjPtJ7t1pfMgaebUq5TvSSvFkGEeUrBtjVYUVbetEW7T8FZuhedc",
  "key4": "2Ty1KVqxAfvwLr1Uxso6PJ48G1fdwCpQX6PhUxBUvCE1ixkmCmevX8gb6rxrzSd7MKroUNgFLMovQy13DFgi43Gu",
  "key5": "GuKo3aSkvM482ZLUNWttUs3Z3jXdvYEfTsges5mvp1VzSUXRHZjx7pCjRhoguuTFz8Ptmj7zvCh5F2X6na1Ticj",
  "key6": "4thE9FALyrnwtcb99ghv8XJtRGC3KcBVdfRgVyYjNk1gEng5TCsnG4UkHf6NxM9ad9g1ADsfKdeFszAPdJ7hv2CD",
  "key7": "rTDZJzN9tzht39UNKpKqjRuXEkWXHwVKkiEkF649ojriFDEvcuk2rGhR11yfKj8vgnTTDBX1JGjPEtAHJEofXqx",
  "key8": "4Fw6V9vL1LWNfi5VvDfpvF4fiDTDhPSZhUQS9LvspVii3ihavyRXP9aqBefAkF3SH9q8wpSfKkc77t87wGf4k2GK",
  "key9": "52CMiJdCx9SxQouun16u3dt9DFGi28jw7YHCiMhdfo6pWYM5HCYnEv5opaCcWLKQ7T6dJmD6uS9TspZbEF2uuaJE",
  "key10": "3wpZBJKozzTPWUQEXR52Mx6MP8ycxHxgf1YhFQz7EcMrM9zn2BeXMmfHKYaJpfYCQ32osg6gMtKQQVbMY7mUASPj",
  "key11": "3KckAm72grfS4VgShm6rPrY6vFEJmarnufgAFBGzeoB1r3peSpkrJaZdQMT5xCnryft84z6wfZ9ELwCtohfWiEPS",
  "key12": "xccwdDmVppyDWRcN1r58U1CaJSn2RKDqQitSdw8eBjybaU7j8nMjM58SaTU1Hkni1fasMFFELY7ttp92QV3v9Rp",
  "key13": "435VGMLskNmzkSuRhc1qDWdX8gfJ3B3ne4FXGNfMFY4CfHqtWqWfariMeY5HNx63hhQoKtgmf1VUsTTR1bc77P9K",
  "key14": "88sBGLWrdVUD34Cgp5YvpN31AHfZH8vX74Q2rQvxzpnmkqnA7HDJkrcxMGXC4wEfgE1AfxsKHki4zqzWiDzBtWb",
  "key15": "2LdndyhYjdwX8Wna6sEAtaTC8k3tmbvQqLxyM4XxPwnTHbite4wFiNoTYRmefQFpk751GEjmw5AWKr8uVWfyP5Do",
  "key16": "5Ku8izxLBGYtfk9Sfjm7zn3g87tApp5y13trjQXdN6N5yW97LaVCzbheymQnh4rcje1Uauh37dUpuDsZ9Mep9SjV",
  "key17": "2M6zx6x2TqHiV6nyVsxRBrVak6ECcHx13E2na2a8Us6ucwCz72wdwhAwvc7z97ZbFzinDsL7VttS4UAVbV9b8qcD",
  "key18": "3nZnkLuH6YyX9ypiM9wnbh2FNnEFe3ggmcdzGfYF77jphHUg8RNNfLeC89b2KnV8ZUAL9BDKgwKLUSWbL6tW8MLj",
  "key19": "5ztoRTkSARfEh2pJR3iQVkAru6UyDEFh8jcZ5RdbPhdaLrEYSAB58gpnXC6HAvg5oGbHYjsxRxSNxuTLEfQPRYgN",
  "key20": "3jtt1kWVNkByu8EzbT3nePBpHNVTfbomJeyzUWGX48QcHEnUpctQWdYYFCt3P6Nmh9uRzy4uW3yNMmunYxFDymyd",
  "key21": "2W8CPZhTJVQo9Dy93LxDPpmVJddFTCw1wC1J6iv6BZjBJn9Pb4a5tHtSv2kEXVyJVZQvu1vYgKJwXXMYhmQmmvdg",
  "key22": "4ZEfau3thdTv7A7dRDxczYA8wMkEgVXJhYEbYBWL5QKezPVkN4KHuy7DiQ7J4pSt7a3GG7UNNuyJGrT9yiwUdM4h",
  "key23": "7192jVqedyyc4hQ8uUGuH9WtF53BAcLKVzQCgwnq39g1D57D3UbYStpE1fFrEdtacx4KMCsDDuYQaEtiy76pRMa",
  "key24": "2aY9AgNKJDiGaQyZmJp6VRh8arhAthujCEuRuezYiqt1tCnFTrXxmgHrybBHU82aRPmGKYdwmDx37aZfRRqpBb1W",
  "key25": "3zcTWZy5rgJLeHW6NnE8HhhW5Av4fZcoScoh6XdHDhT1JVQVdwc9zFAafGvXjiWniNnEMcnd7Sb6xTa2Qdy1zpwX",
  "key26": "4JspcUzQLaM9EjNJ8iDoSoUucBSWdR2AfpBMCJigXXweLggqEbJPjt1LE7RRDJkmALw9PEVobAa5UoB4YMzzToj",
  "key27": "PFPd6os9CGpt8tX3KZij7c2wKZG6sCad4cVeJff2Yp5BhcrkgcUj1k8xNdenYiqkFEEA82WR69QjZc8pGDDzZ7K",
  "key28": "wVdTh6yCG2T5B82K3MLm5GPkmpkmWCR5kXH33QVksFmzdgEYAhkomLCZKrj8RW1LHfWbAy9xBMyT8gVFn1xCuDy",
  "key29": "5gKvMfHYXNb2qpUWdizzWbANSMYUyXJhhGs5XBHENa2mcJ56ZAXTNCZiZ3xFtytKJ6M2LKcfTXLHT5n19d64FgCz",
  "key30": "u9dpLJTwwr9hFPdDSMMRn3Y9Kzz6h48un6fjFTQzZM3Y2w6stWmowoAXh8CzEY3mZCDgBnUJPu9Xv63JjJfRSMJ",
  "key31": "4fKCVe2kYHBcprEdQhXTb2RteAbxsBEb4jiWCk1w7gifP16JebFvR35gm7vhxWHX4C3BmjxEnKD7RQzpA9eApaAi",
  "key32": "44VJBnYNBfsrWkKdzjfaAGLhKeWrzMUyRB9k4WxStrJrYCRmyABGrDMdybcSVjbRyyL29RLLdGT9CamaeZbX7iVN"
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
