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
    "3jw9H9RLomGHDtPNDpUjgoXP2bSkYwWWgBdZ2a2Btz9WZwPYp7svdjCDytRz18DvQRSSY5nyrjMQwU6SwfStRYE8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YXyFhy9MCDL4t7hRt3oNd6fsXvzGoQfmKSowA1wiGXANshdk4rWe7QfsfmhnXpPhP46XnGAiftHUWof2fAkNmY3",
  "key1": "3qAD4SCmsGc55FL2d2r5mufNVKmYh1no6aDDurw9Lo4uTHYH3CW89ZYNsGNfj4oLk2eAmoM6fcPLh12hgpCPUbKt",
  "key2": "5XevgTKQWBGtJroMC56cSFEi26pbEeNeHGgbDhUbFg8DwHFbr7PHKLztJcPZtsLQHaz8K5uF6h72Wm7fgwYqgz1k",
  "key3": "2hm4xgtADJXmrUzxAumHU4jbyQnBePX5bHB5ownNnUpjiMYaoQcvisWGQyTWN67ksBvMHgR6b2XgiWjpA7T8YDhN",
  "key4": "2uG6yvWip1Dg3jwzG7mr7hLS6MCfKAwgieY6N57jGXm84EwmiyWzP3dsT12DCpZjBC89ytePtjdKwRQQ8pJ42G47",
  "key5": "ZUaxRfYVf71UevfTddPENvVB2XNiqjMtpSxVcSfJDb4fNy8QYSgVJ3ULCHUGEVjpnkXUFwk9i72SxgyYcy4tcbh",
  "key6": "3pcMpBRvuMoA7SoHdB5KAEFpQB8fu28WaQdPGgECUKod93cJgS8ffQqsrWHESMJT3n11j2XHqtx4iqv6pc5CTrcR",
  "key7": "4qELnYvTir1nqHd4fwYwazMVugovhR864gthbK2wJMZCvB9GvQvFy5vjp48KYTFzacg7RfxypirwDUMF5Gy2zAnP",
  "key8": "29WYzDSezSHB2MmJNbnUXK6FxEqgh6844B9HrdZWL2et2GKtfV12m4XvJGbpJZT4afMJ9Kz9VMAmk83dgWTC4W4V",
  "key9": "37mVMQejQ6gcHa3zUBAG1aS3jZ7PqPr8qQ2zCMqMbxZ4CsKHKswVC4mgiv3v53tMgiaoZk8eXucq2wE9z7bBwwQt",
  "key10": "47smfw9hG5o1gPyY3UwwpXPq5ZwYBWvYDP6SRExZYVxDDEagVM51xZwvEfU1bxUqKCvWgvH8rRTZ4Vj5HTZbrEps",
  "key11": "45JqqJZA1mc9SY4yCVtG2Gkzk8PCvRyA7F46UaY3fTrpKpEsaA24DvxnoAk5vCJpwn8MVT7N7JFwvhA8F6BKJKwP",
  "key12": "3jj5SZffWWPZSJ5sGqqeTdMRWkiXuEKWQbEUEqQwQa9ohJQU22egviNXQjTdnaYM2SaT5cbVGQErUCSVtWnvMcqV",
  "key13": "2c2Hjxao67UzhtbRsp9RFssagXrexR9xRKrqHTRyYB9YkskjV6q1ePDgARzTiAYTm2SLTrF5tPAJ6fzWWS8mW5f7",
  "key14": "Txhgr7ZDqAvm9QTuUdhUMjsYxSqhKwL4LUzt1EYtYKDbDwkjRoaqpbQxGEbHP2W3k49PtSe6Q4KJH52mErR8E1R",
  "key15": "4tvj8yBsnrZbn2QM67ozxzN5zqswuttbojKNakTNZSPvsM8ffaHU5Xi3B9j7YtXnPc8XvMuxC7hZ6AwcZR9KoZwm",
  "key16": "3kcBBpo4QVVVPSgYfKdJbj9kGDKAei3fSzNwjSeSz33EB13qN4zcS7fyVRymoenfJ7u6Dbsd8TNskTR7st1ZYBxu",
  "key17": "4sCDAG3Z8BTpZbePEcmf2ejhQB9KcaMByBHWft5ypdarSWE389ivZtEEZwo5S5qeFqRtCi1mU4amRtJt5gU4cqp6",
  "key18": "2b5VgXY9KjWP4PrW7eAUnFdToGFA8N4ci4sZb6w2gygaXHk5f9NMsn8A17JjYQgiVBMWpxHKdPTMKvaRh3jis4kb",
  "key19": "5iPMtgxy2HZ3wxmdtJSKwBW8SXCn8VuM5usjdN8CTMC5GgztFytHPiTzrmZvDKXruqWtEgcGdtZUnk866y7sFRH6",
  "key20": "2CzpPcQcs9jk1BrsSEAUrnoU9MoCLu5y2q85b3weN5aQKNEshfbp7fXhryTpD4PDqZ1wBTtTnjzcWZu5Tgzj3GFu",
  "key21": "4dGSXRS1K4ziR8wuWCcgJn4P7cmURiSCEMqxBGdE9cAtaefV96BHCRMHKuYya7e7P8hExqc1AuXHHsGhCrvUdqmK",
  "key22": "3X26HxAUU96LA5MJg59X1ypjwEz1ckuWjcpNFP26tdV23urcwxcanvrNnDnuxBbA8kFRRXQtHvdBegUupF6nBin8",
  "key23": "3fkJS675NoFaMCUJYC98D3ttv7AGhByxzhWGVWrtEUnmWBDXNMFjC6f23zL9eGtXfeXvFTzLSsefmPnJVHCA9X3k",
  "key24": "2uSLNmhHm8PavYBj8XJcheSZaZXgcbBQ4v3fbCvvpKmBzi2Zad4bQpLB1qaUo46meV4AeXzxxGNKx6BSTxo2772T",
  "key25": "5QT4Vx8fLDqx8VrXaJsPdWTXU9fWX1F8J1rLAGucjDcUuFQns6XAizZ9iCHNnTbQHrKaCuX6BdpHDnruUypdPrUN",
  "key26": "2TqUGJAHth76t74vHAuMdBaVXvhV4V7jBkXgKP8uR44UEJWr4tpLwgmm2qeywTEBJLoqa4oFUvxaa7WiyrmMuDQY",
  "key27": "5tHjoqgEFZLTLtinukJkzf91u5nGrf4YXWfHNG48KUz5haqeQ77taQkqeSmiSc5ibR8YZJihtfHDE5dZLhaXnMeN",
  "key28": "2JXdGm3JvdRA9xYDGzyqyHxQHHxxVHg2cTH5YwEFfGRNZoijdSho9tkhAk38cfK4GiYmFboV8uHmAJagr6rZ8Me",
  "key29": "4yrowDkVJtvutHmSArzCrHbFgu9yhkeg8AfXaocoGfP7cV84P7Jrzm6YabV6hS5sapWN8xUpi31uSh3WAxNqsdqd",
  "key30": "2MDii5HvDZb7pdcxGc8NH7voa2fZmQNKcFsVFiZt3FJJgpRYW884HdvQnzvwW3MWuzTLiiSBqNqM8zqdfw9UmVTv",
  "key31": "2MtmcjHtVqpEmuyaUizuY8LQowDGZWXx3XUD2KpniTCufJ2B12JtroHAVcPF9qc4S1rK4cpanqiecAQEMw3mQPkh",
  "key32": "63cCCvdtMj2Fgw5fKcsTVJbKh1gopmadK6U6F8GWwwUWr3L3kq4XmzSaVm2xwgFWAM1PbULh6TYjatYgLgA7s2ZG",
  "key33": "3K2Q2Qy3XRdpaPvw8efzpgEsRT5PKc1mA72sfJNkE99S3rpvuTVb53J2m2XQNmn1azUga4bjxfhxuZz1h5D3q5zf",
  "key34": "5gTpH4tVqK9uchg8z7vABeBCLSNxgHUw3xKuLKSwQXsjZdpW9o5CPX9qR6fBBKwWFUUFufABwGmYNYzPu8vWrgaw",
  "key35": "3mjNNMaVojYfEQSHiMWCNGqKczHqPtAYJQB3fKVTZDZKkHHJRaNsiKdsAKxqX2cpV3TxtaKsTz5nbfprGMWXyRFb",
  "key36": "MWEcJ65o5intSrm2Goo6UzRu1mPAti49JUR8NoHQAGhtjHhwPaN7fY6t7wjgJQegvhciG6D1DB4VgH8LkYhMsfm",
  "key37": "5dmP4xJbaGi5qjNHKM675UbqAyRhnMGizruZ2Y6wxYAcW49VGKjaVx9yBUPFH9SPWfVgZrX3pTpopXtmLZStCLda",
  "key38": "26mRV7H7cBZoqk6k7iLm29Vg5rTxv7H2cTGNkD2EBubFiTU6hMv3vQosnuE4NLsegDkV7kA2ArchCHFBT52zuGed",
  "key39": "29F4nAQaGt6tnwKVq22KV6wTdjRUsbC13x6fny1SMFpGE2TszTdK5qNEZ9gjEnQaYsZjp7guY37honHE4d7TxZuZ",
  "key40": "2vZ7W2GkECt5e7bTGYdcQTHBmHMfgm7EBai73CfgwBuJ4ve1zFQYwgefAFnuo9cgHPf6EYo2nHuodEYs6rLjwbBE",
  "key41": "2iMJmLoGxWK2zk6Fp278uNUFXaYj6XFvrccst6WvXvdcGcWri2E5mvWnehWYAF4T11hwqh2wUCQxEiRRBxFtFpov",
  "key42": "5UZhEoJs5KQG3jvvCXcnNd94U9XCVkenWcb2PUYc2KTn2nmgSvsnJYEoY8VoSynm8fLpyf6prJZXEVxKvwGzjM9w"
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
