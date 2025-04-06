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
    "5XTP2peCZySdhe3b2oVw9MDBxTdg1QEgk3s2aAsvr41d6SJhgtifWxTH6MX4f6et2ffd6FLBCfgn912bZFLjbApb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "in3UfrCJqBBiXuHzSf7wq4bi9jXddsvfkhmZgV8avCyhUwXWaw2qg5azDEHNCijc3UA6R6fvNE8o7sD6xCD9TBf",
  "key1": "gM5G19GgqRF1Gr87Fv3xeoe5ZPVBmyrn41YvSkZvqWJ69et1djtihxFvBEB78Dqz1EWCfehB8QHdLPfCYntzGaU",
  "key2": "4FHc7e5mivwnaPLtnzMLcJoV1WjAHyN7AtL8KYvHXG3wi5VU52h6Zzcg48bES59Vctn1Nqhp4yufQut5MXkwaW9p",
  "key3": "2mRL9astYp9FL7fDCyywHS7phvjKuB27Km1xnKgYuiRCHARiJ11orsyqh3fNpHDdhq2doy4opVF6oE55Soz3k76A",
  "key4": "2JAECyQRBuXmYZJNTWzG8vgtTvpRFLrVroCFhp6HncqfT8yi25onprSiAszekUHsaTTnxQTK112wiUNDfihNmZp",
  "key5": "2rdeuKcfhujN2qhgdu1EejYYSEjfAi1SaHxGCyuv1ouXNTG4fCNW6tUSEfDLrUtbyA7xiVxJRd5cLMna4KAZodE6",
  "key6": "4sh4FR4orKq9pUKW61D5qi8EUj1h5EMvTSUWh2HXafsEwNcGMazYj4qzNEouy3UC9BaiQxM5BLKrMnKaJPJsAnUq",
  "key7": "57H3Wzg7dL45mAgVYS5At2D5f6bGSiGuXttaoice1S5TTf5xJvSaMJzfdjvsQuUvfqRZrYhRUeB992eMPvr8SVZk",
  "key8": "4SCUHy7M65f8LYWwQRBB4Vsgywq1Qj2zDg8QieQxqNjb8BDYDd6uMj8GgCgPCokvRBy8tQkXBfJAFxuczJLsYTeU",
  "key9": "3sXpQ9wadoTv75To7SXbrpThT1JYnfxEWQ6R4VqZkrixN5VCXwMnUC2K2MbWLFgAvPQAryd54hw9M9KAcNJdHmYG",
  "key10": "5J85EHxJ1nQZ721YNhoRXmgphnoy7xirhce41Nty7adhEmfeA73U4XXn7UVdyoXt5fx4E8ubt92sEpe7uRgp92SQ",
  "key11": "2M6CxABQgmsgMXTo8WCP3ng77Ra3bAWzeSUDB2sAq6XeNmLhMiD3HCvGoJmBppUZSL4bqtyXi8UA4dGvqQmouaEj",
  "key12": "64vYMPHaRnhxzqq3KzHPXJyAnfX5vmNAJ62tAyq2cs5qH86dv8hdz8ydcxH2qBtmBnN8PwY4xbwaujC7WAvcbVfm",
  "key13": "96qTc2oGhRgGWCoNatQ1XdYtJSndDQzFCMVxft8FZvHgqizvfCBVnWCapoRLFqMhaAygNN6TYLpY3VPrKMD5W4A",
  "key14": "48S2ogBn6sfCBTpymPoHKJfjKWzWKA1Xu2U67D1gEekoqj1XRj1QWRRUHdv99SUwmFuM8z6u2hehRTkAAjgSUjr5",
  "key15": "5QtFp9ac52nop5rv89RjshMQxL8HV96KS7bXEZLQE2v3NQutuvazofepx2r8cyFNUvnLChNWw7mCvRqFWQMdtYd7",
  "key16": "5qRRuBytcRUHg4EkGZPq6joCzpTKy4NGzV4ctBGQckz8EkePhSgh7mqioY1mTTJ2boTjVnbEV1xua8wGYChYSghh",
  "key17": "2heTKZmnFL2DY5EXHQ9WanU1kfZoknKmKBFnJAVcFFaTbN6Q2NFCPYrsuFA5yPQgqJox6G7G4zgPS1aASxh1XEjF",
  "key18": "3FUeRSGMufnmMjZNxgmYFqCpDKY9gt6PU8v2EKta28EWh2zK8161zSjnDXLkqP5poiewcAYWCqNAJZ5VRYdMgWy",
  "key19": "5VZv6jmVCV3u2XbAnc45gzicdtaJ4vwo35WyNCGfVBmrS9zhRaH2CHczGp1QsifZJtQReZGb3iEiXwZdbZ6MF69",
  "key20": "3ciaFqxdKowPZNr4jVbXoZrWaDHtYrZ2pPX8mQZP111TfwU7TBDXSmvS3CLxK4LYEfyhRYEyFW77jyt773jpuC1U",
  "key21": "4Wx454XCoUxSZy7YKgs7iByYfNEdgyxUEnJJZK5b6mqEWUjb4v4zPfKSaa3jH1KQYYifWHqYah4AEy1e5P6Qdo4k",
  "key22": "2bwqGQFD2W974m6ftjnSypgjsNHT3wf3htY8GXWbiPU8KZaFwLZYrcih2cxHHgHxUodDRQ1oL5i1HR89Fk5EhA9A",
  "key23": "2mXmR8s6MPHmQcZ5vkgbnv3jPDKt3zaLQBgUWwXiTmUHhFnDNrLxb8G3pC3de17Tzsgq8Ynx8bDdWMEYDcNVPbus",
  "key24": "4EgndjCuZvSFKj3jpvjV6LQAyShmFbt5SAsGJ2NNQFcgx8KRLukb1KaQJ1CMToGfMMRP9jmgxpyHQdsP14uv6U5u"
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
