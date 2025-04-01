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
    "4GZ7JjyKzAzgZFQiRM9jmoiT3f1ZLjtJ7j1zm2PijVpm7BF3V3fTgLHDPABPEbzDJ58ojoxyL23CVYh8CTG9YpAv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cHYLH1xjrZiMfKAyE9EMqUHTKVrdUTKX4ah1S2Tto1xJnup4ZUD5SxSBtXskyMEGerdths1mZUF14wuANC53ESy",
  "key1": "5aivpRpbHuK8nQp8pMCiuBhUg7kES8bo1vD2GUYYuvXGsHnAZCiHUeQ5NmhMXH6xUHbYJtWn9DtJ2Nf89XrrdTc4",
  "key2": "45tZgZwsJrYLkc3Do9RtpUaxNHGRp8AyMqMx6C78cQuusBiLrLUzeqFmkfuFZ8GMqCUs45j47DzUJ12EnQymcHFm",
  "key3": "5ycbF8BiUQnzNuo256uEJ8nPnojNLeUyr159dQYFUC4SB5Uy6Ntms9AM1jz4mVAWMnXEJS9ZBJmmqxRWon1fQhkZ",
  "key4": "5oh4kqEcQwSUzwTZuHuNLd7JvSaS7vk77e9gVyUw5fWyzDoqvJLDWhk9jMDNA9RSbTSUkxBzTkjntgU6fJHJqMzY",
  "key5": "3EEgDWVq3S66FnpubvePoFFSPMBiPVcTvgGWxWpg6wvEe7J6eWHe1cxeWWDMRcS29obRHhQs1WaTJqhpw7EUFz1c",
  "key6": "3BkPH4FTjGey2eTCJEJj4ZTzHsBRF4goSYwq21pHmuYkQ4k1jSZmmQU9aHyc8cMWsx7Gkwpy2JZ5GKDPUiLZDhCF",
  "key7": "Pt1FPVsHEZUVJfRuaKJyQHjoAdEdjR3HoG1qAymDdYywhjC5JaNhJVWRsJAowKLaRtxfe8zwqthyPdHkJ7cBJDy",
  "key8": "5Ba2E8DTBW1pVGnpLa3f6n2diLCe1VFnvsPhCxdgQAYxsna3ggYwsb8z3CD2guTJmvK8VYWrwpg2yGg9HJmtQTUJ",
  "key9": "4VRkd48EACPWHNSrLF9KfzyAPfLezX7e8Q1Zs17H8NS3xNaT3h1HZ6EUeNsmUrUKxtCe6S76vHwutvMpZp7x9tcC",
  "key10": "2aHyGdGs6qBLUk3qfWqohisW9656GbXHqT6VM1DS9vRsxUas2s5auW5a1MCnbPZNCRqFdrgxsAiH1EDfYKAn29pZ",
  "key11": "2A7wQPUhR6cxUnYZoRTZCtaY4aMifMUnXoRPUNGB2T5dR3hXvNVt6XM56REwy7zZpC1ufrpRD8nra6a6rzEPuRVx",
  "key12": "5T6aSeW2s4H4Mk5wDoW8r1r7NgdkmfrvV3FQbN657y7t3eu36MWDLdKM36woaPe59pS9GWfPsJmFFmMW5dNEezrx",
  "key13": "VHvgpjZhzRyZn2EG61f6KvSqm4awhFRmzvRogA8PGYirTH9S2CSQ2dqTe53Dm5cf9dC8ECtdKdvbRHHQTBbLYFi",
  "key14": "ppWvXJFczLbWfZMJJZiYhiPAf3cW42sz4RedamP8s6xMJdcqU8671U8saEMr5nU3uq2ZJVBjhJbXE7UBFJJhnUi",
  "key15": "5CbYcbtFm2gJV85JmU2P7QFos6j4PHFtJRcQDzy9naoL9nbLL5HzH19j98ovAbpNfPQ2JMKYb1Z2yRbq9saNEnFf",
  "key16": "59k89CX8HMAagGAV5viDDkM8ZiL177a6w9xLqbmjuQ7opmjFRtqQtrKquC2QSRtCAvUvZ2EGYoqVmAX187DEizpy",
  "key17": "Ba6JAZ6dbo2DJSG2UTnzL8xvVZXjf9iMM7GsXLkZYb6aaEspPyEgKWZ31Q1v4E2AphV1YmJHhAy6FExpZHtsrLs",
  "key18": "WLFWryTbdLtAPteiiqyssekv4zNYr9yfvLbs7rviT1JJDK821LUvhdvefaj3icNKj8SmhabLT9LnaM2JYRiQeef",
  "key19": "3jXF6MvNBuui1KV4LN7JqxnD3L3xk4a8BEQFSuqFSB9MxRqeLwion4eenaTxfymwkroMvD4krmDJVzRTdMHJk1KX",
  "key20": "4CXfBVQmXcmZHuheuJQdutBCvK2NYtgtVWiC9pUr6q7FV7LkqEF6gchWxL62NBKC29RVCwgqVh31bZB4fKMigBZY",
  "key21": "2BYHJzozzTH22NHDN4iY8wKXcZxfNugqujPod6gjSa5ynH4fhgLX5KvHfghu43r3vvqyxuv9T6Ka68MwvTWVtnsU",
  "key22": "EMR3A2ux1mvNTzNwnU8RqZ1Ggm29yYqBYGG5XDART1n8cQDCTPSc69BPiDq6myraXAi77Hd6AT3Dc5hkvUzw5Bw",
  "key23": "9i6pM5dzdd7pfaBV3rGRBHbU7J9uzLMd5DPCQ3k53qos4eW39qr3hsP6Fg1uxygS8f5vhez99fuffFdaeh6in3D",
  "key24": "23M1rh4EZ6mi6n64ohHsfVmxJj57RuZPYxmaFVZBx7RK6ue8FHCUrYE3cGPRjYoGsvxv2MPoe2CHZd5e9Ca1qVpQ",
  "key25": "5gPZXp8SQTZT8Hz5oc9eQWzKY559vJaaYF1qxfMhRFFmQJYqQiDzZdLL7QczB4NYLVfAs5nzGbRqPPk4PykZL84V",
  "key26": "3BK3oFTxQkGq3xp7bcty8f1KyZdbDUqJu3a8Hz9W7qsB32M9xpTMQ9PFhpK4ScSRrvwT1CwgDsTMYdwwbxuKjTmW",
  "key27": "5VAFWpMzwhe345xmxp3w1iAGxfgBboPPjLx4mWrqMxTVj1b24LUfwe2BMJbFsoRdA67VNghzSPyDVYwQqfdkVN9N",
  "key28": "5d9G8FusBgA8F319zBUvJ6EfoYV5kL81SxciMPXAet9KXL7xvAMsL1soZbyR2PMKyf2Q2oK1d9G8hKPrCMfuABuf",
  "key29": "n2AfNw3DHv6PrMadg7onTBppJXTsPH9ZgY1u4C5Qqt29Fa39ZY2NLsamkzdNbHcCyJRBmATQpM7tpwbqS1xTF62",
  "key30": "2begB8WYhieJR3VsgJCaUYTc3qJHrVWmXiXTFvwxX59TFumJD4YFnWrfqVZepRGmpvyeAwYp7xxSKJanzu2RfrNK",
  "key31": "3q8zuckpQ9uW4ZRohCtyeLHFMca917dhx285MU4VziBiaECzzspK16himytL8v8tiYSGMBmQyNi5yHeJy9bhNaKi",
  "key32": "64Cv5iSSQRbJnCFNFPi1xRfxhc2yCcQnVzgRaGavkheiywfiT6dyFi6aizKojvAAQoQiEczZJEPMKgp2njD5SgwE",
  "key33": "W7YsuUfdZbrpjKJJaTDzAdsW83UftLTyDvRhPVy9FAoi8JowpqTaNZa92CLLt4UufZys2z2ph8R8bsVA39JLWct",
  "key34": "5WfXWeT2ywudLQPsUdDdmXwycWrVg1ZzWwSie5uRdR4hWuL3yPBdZNDsM9x2ZnhwnS1VUXxJdcAmaYYYcapeg1za",
  "key35": "52Z8QeuQYWwx8YjYQrkMsjtCn9mCNYRMgx7RwT8qyknGr9NdKJ5EkwFEhcQCvfSM1PuY3pzgHEJQ72uReJtpE2Wf",
  "key36": "4gqjLWpn6iJuVaXXS45ZSCMmfvPckhABYeKHuJpewdxtRjaJ1TmkbZudeLDju5ZSQQaCWiQa8whSPeTcrA9WVoNk"
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
