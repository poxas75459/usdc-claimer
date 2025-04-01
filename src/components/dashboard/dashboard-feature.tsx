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
    "cK1raiFZjPCJ2Gn83xdxAqnpZh49ji3fyXARYqZ6nK1cZYwW2RvuzDwJUqnUisH3qtNifeVQHUe6yeHywhp3Xc5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AMoxHM7oGhK1BaYjSMB3ASLRMEbpiokmB9mUZqGmE5GYMNir3X87D3PjPovDJrs5A4V1PJerDqmem7bB1fh47um",
  "key1": "4LpbcwL8eVCqVBzZFutwLwnNk4691zH4NA2ruh9fh4mEX5VXJbF9Ew4F4R5LK7MTCjKc2hUYEkz3mB4F5TgPiydF",
  "key2": "2ai366eZUqc4ZGVLBwkTFUhsheDD6SvHBSez1j6HadiwW8AaRjL2PP2rCAjdCpZLAp2KtrntDAVYvDg7wQBues4K",
  "key3": "218dMqrq9AR8GJtwKo1aPh4xJQPv8KzaJpVxrpgZUXTaZxz4s9BoXXqYrGXdKaeQCbGQ73Qer32WDzKoSmRn4LXS",
  "key4": "5GSYBRBpNuouGjw6U6iWKfhdkDtHWmzzRBdUs7aBQaPEnsd1fujrZSdjUvDyYsTiyGYoCWbkAvn99aPCdjNHJaef",
  "key5": "4F3MPow3FsdTMkvBx9kgaiu8RJvymwFJ9vJYRzxNyCLjhzKooGc7j45csJ8cM9szso7fuMDAGmvaU67W3sD4eurE",
  "key6": "4pukZa5ZjVJJR6FdntFE6Cw3XuhVAsas1puFJw3p9uVYjLVqjaV2PntwPQ2YdB6nChzGkUWdPKb694jbvZqcjCGe",
  "key7": "47yhmrcgirJ3bZ5UagNUjGyMWBy1Y3cCCSsao1q4YhLLjGu3X4WC7cqPKZTeTTT5rcSCD2e7wfX6x5G5Fs5m8vNm",
  "key8": "61ij3CJdTwuCNSfa6waMGyVgbdvpnXKMxbu3hNMqpWqz1pJ8F39tjBuxi2Ahq2CcsLiJahx7Ywyd3qYdG1J416o1",
  "key9": "2m8wYjnMjJmEY5pxkvNctUboeqQmPGxW7zXWCtQ2w3CTZ7beXwtE33gJG7JWHAi2grDqRULAE3pG84yA9hXad5Yk",
  "key10": "45dibKvHYWsnQREwZeXonX3FxbnYmGs4Dxg9E7D4cKLktm7hSKJNyaLvRBppg9Ynk33NUTqVnhqYHgoEwcAVT933",
  "key11": "3vHqb2P9Nwy7SZWvhxALwEWRDqHYMEG6Dy6K3vjCXkNrAa9vP3vmbCtkyYH9TzxnGzWfPjPpt9Czuv95LxNR6MZa",
  "key12": "PAtToCRBp38xHrkAHBLuZrJGHHB3Ntau8L6jmWH6e3tVQhWvVJRV8XJ3h2vjrJSoFo574iaSviS7PfRDxHhDjbZ",
  "key13": "3QRrS8g5TiPas7yMbCB4PxTCZApjGJsQZp6xWeu5dCKxWLPf4aSvSXUCdB63NkNiiWD9ZGWLFuzRsYrwcPGVoLPp",
  "key14": "5RTghLFcmd1kB4EXYfGA8Nwp2X42NNL45T3jSYPsWhApwEB1oTVC8yDVF8oWyn1BjbqGgnuygN4aXkwnDBNg48dm",
  "key15": "3qXc5m8ugYqva2Vp4b6RUD3JbucujVSB39jptMDjfHsPsCRw7Frcaoyjv3LHNYtuUt2ogvQgLJC9woa36rJ1qLRA",
  "key16": "2PZSvfdhCfEHuQGEdFLmZyAsFFoA7JeK2JSxVyAVPB4jSFmw83tXLcEKNmTLH3ZTaFwJeRUGH7bxbqPpnxruC9R4",
  "key17": "69ivkDoRtWygZ6tPm62kd2UVhWLbHsFsHSmVZSbkm5yLsUyTxUpox6QptqWMGz8jWJJfL4ym1qsNP1PcNGXrNoh",
  "key18": "3jTgXPqZv4VcoRbqhzgeEaFo42F7GjAcsK3p8zoED8VnpfvC7auRpWn3562MytSQJ1skkqEFqSMgVigsJNKa2w8v",
  "key19": "5GWuajVLazHyETQx6kn5AukgWJPp99jMCp5mtM179xETb9dR7grwxstkkDdbTCZegWqwWxtMWBZit8F387YRTTbK",
  "key20": "4LqVjuVok5JoaW4scp47W88sG7ZKoUuLvGreXBRNajkE7GVTWAkSFWQWjeE6X82Z4dVdzYebeoDb2djY4q68CKWo",
  "key21": "3WRVdJCHKARqJx6KPYdpgciyMk2pLjt1HR3SvbYafNCd5a2w8bcSy2Zjgffm3K9Yz4fb9PQgmaDFHwYj4tEFTZ47",
  "key22": "2bnDNA8g793NWgaPbbWHvmCCL98zkt2S5rSrdWPNAUFNywCxfSRubkh3rue1cvGdzZH8XfgqCKnFjWWHhs4tKdRX",
  "key23": "3F3teP5Ycb8tQjwvRDdi6AJSPtdZnS9mGAAqNdiDyvhznJ8xN6DbPT779bMZRb6JyJipDTpPeu2oKTJeCAvs1HnN",
  "key24": "5z5Ut3eJJeAGGbDPSzGh1PJJ8He6XAiTM4M42xkH6D5nSuanDoiexUbidJcme1tmQDQ3AYfsbLAQXspAfnpEUi8s"
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
