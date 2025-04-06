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
    "2XbYHxdQMqYnqyfT1wk4AKujNSnUuH4sqWqcdJBZkqghNAx9xri1L7SShXAHyvupxivgt3ADbThV1cE15kQNvteF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xxCVBPLdKeWs7zvtx1cGNeEJBTQjqi4q4gPGz56HwwbKeBfvfAsYfHufuYmRbvF8osswWa6VAURh9oabgasmnTw",
  "key1": "59zP1g3tqaDet9cNWekkRBXV5WKZJbfUtnAYgZTeW3FEmqUofegfHfitYNNZSob2v3yWsTbgZuUNFyjoJssmvNLH",
  "key2": "3xzN4FpWpnyFHx5xYndm8GBAwTtq3kN292tdQHHR7egEgY4ecjN4HsQe51BMGSHN4kxwUX7m93J8jhesi6efULnT",
  "key3": "3ZuKjd3dcKgoVTPQL9WAZ4Lq8eByv1hDX7NJLvuyu78AmQ4UXq3eJhuDRremA2p433PrijdUAuLKnLtjdvqi5cky",
  "key4": "29ZoWp9wLWHPoi4wr6qHYKNGGPdwKSfkbFuyGzdCfv3Ds8xYDCDQiULupLXdY5NwkZB2THVzbR1yNHGbD3epjKQb",
  "key5": "32TwianRUGmJTS8TgvDTV1hb4dctJVFDyKirTPnbsUVAem6L7bgMLtVAQXpMWLXSL8EuETsRbDKV3Z1o3Em6UCWp",
  "key6": "5BLkGG4jgVwcxb44vPNNSLdkAgiL84N7hKEeprZDknt22koyV2pC2avqeXeCedBoFq6kqEvpMkZQiWa8paxoM9Vm",
  "key7": "2hmCmgeZSyoPChM8zamveLdCsC3ryCsWQt93GZca3cfKDa3fdqQA3SHAyNjCVCRVxdbaYypNxSGKE2KwLTn8ytWJ",
  "key8": "3DNrmi6viTsKYbTrNtKLUUereuognyxxTWNmHqcSNtTm7Bq4y8M9mU9LnwPvvij4cNQXoc67RBhTD1AcGAQ6Kfp8",
  "key9": "4fjN7Xqq1Zc39QUGdpQAMTpsifzzubY3nvpV5Jvu1gjMNzABGEHvNbMTfEAPTkEZ7K1p1AmHaTp9QG4KVAXU8Ktc",
  "key10": "2g8wTkz1VVjzvA6mDMz6HyPFy3AnGnTTbdWrZkdatX9bQemmVEKpGvAfH6frbKZ8gSnErk83mDbbxo6Tyn2aBwSG",
  "key11": "28kFMBuB7SbdKxRfJJSaJ7pezFddK3ptkRvTk2z2Lby1mNKnQrEf7gjEbkGcwx94YRw8o3XpyapF9hpRmELieGEF",
  "key12": "5FrYRwCqFuFMjKjoWAezsmcXcfU6iMaWoFzDFmM9Nv7bUrhHbMgfKggUKx2MX8m8fzwzSFDDBhQp53D5LBFRy16K",
  "key13": "4DEgkKs8u2YcPPFwvU3zUrX2Fy1EufpepCjuQQRsXK8wQEaLEsuj9h6tr5xrQbgwSjkRp7up68PTimtsL2efp6S5",
  "key14": "4bMo5qBvDQ6jdqpva8JUS4GvPzJPHoXq1z8pcqxZwhJn1jKydNofeR3nR3G2G3x6ME4gXu97658QfhnAmPJ7tNVs",
  "key15": "b4dXGWYa7EpFpLi7aZdnCf51vVK3TryR3zoMYRLsQfY8cwkswGCafgJWCASH5ukCD41yoPPJXuPsomQBMyHHmov",
  "key16": "4TfZhLg699ntddThSxJ8sWezjEAFpQ8kAYhoSESo6dbKZGLfBqTpfB991bNupGLgraeqrXpz1WTeDJYbBDt6x4D1",
  "key17": "3iXiifHAyuRpvwdKd8XkDwcrraKM7jj95BfmFT9rA97zZPq3aijDBwKdcAQtAUVnMjVXhyJAQCPeMYTRhp819wBu",
  "key18": "ymk9PwCCQ8gGU5bs1Sgk4YWizZh7c27MAyhqufdWPRAQeafmzmAc63jGNRNrcp16KMgWwebZNY3N52n95VoeGoe",
  "key19": "2Zf2ekhRi1pV1waLqDXcR1HCqUspp5g221jcr3wndT1ACeAjJZEmcVDCXma5yedLFXobkLPsCXFG34Gk7rqSDgnj",
  "key20": "8FMZ8HXpKi4nRQ1LvX1ydZZ6hVVNs9RYsxuvvTGogzsPavPhsvk5zXZE133sZmsrXr5zFJMyWFDECw5b3Gb5Twh",
  "key21": "2frMeee9gufxXaQzh4XQZW7GLU66YVz3WqBwrxQuBJ44WQQXppGFn9KRfhM1xrXoexByeepZgkQeKznCMkxnj5QL",
  "key22": "42UAagUTAq9FTK6Ae5sNMh1nmRApMHVinG5AFRAX7uVTXSVQiPHdFSBoT2vDzspTvdSsvRE4K3pwMiJ9Vz2trh6f",
  "key23": "4hZyeSByKykGVeiDRkgeMszfCzj2E5tT2onQGepvBqGknR9c5fDUhCeCuNtB3MJ53fi8iPd3bhraaLyuedHLuivQ",
  "key24": "5nhoTNT6ZFL5gMTpGufXJY7oqy9V9Cr5V7tubVz7tb3RDUbBLkdqDon4QCuafSRTC3jRjzU42hbrX4mBC7fu3t8C",
  "key25": "5AYzPLR1ZZ1hoEp3rnVQJDpmBqx3feHtXpvUp5t4wAZ3PRBhoXNASqoHYqrCZDimGgwdcCoHAS1oBMxBT7K4QxFs",
  "key26": "4TN6LMdbaK45F6skb1VFHhU8xoqbTjXzgtaUjkyJBHvjVFDXobWYHqVNyhbqqcEYSxD2K1Y5LVVfPeUDvrf1u2FF",
  "key27": "5sNbsvJRwqtJExMfd2nouCkZcNgXRRQsQ9kQ7a7eoGc9EyJtfhnKpnJ6nfCefTD1btABjC7QUxAkL75VGemDD4cw",
  "key28": "3va9wD19nDjMq992LY7r3tztGEBQZUyUUvcQz68D99Pe3FjVw1a79mE5j7URkCYo9K18jfxSTBj8qC6woWhuwP6t",
  "key29": "iEwwrAqRf8WYj9fiFtTZRJZrL92DePicuioWABpC5dENt6nqL1rg611YuBWLrrtdkAmyY1hNbMEKRKHJjXtgPoe",
  "key30": "3Kpvi8rYibmMis2CiofntMRcRarg3UdGtqbeaHCuncB3bCHDWLSKi5t26v5wFhUSgxmvW1zuMktvjC5gci3szJUe",
  "key31": "5MfPFGkVHG12WB1LeKBmqE1sk7jsJKa7RcxF8i3SGCXJkxTnF6G1d8ZjqcpwGr2de2EnAxvEv8Q5KZyLtQJ3JPCw",
  "key32": "4mAkW9RpycoZCfXkDZe4Nhp4F4ZZoxAr77voZZQvkJnCugK4nNwZ917wvYKB2M4Uu1WKE8pDBeWM5uezthFW1fyU",
  "key33": "2vwoMFVrydr4j1QmLuc2mbtm7jVPTHdESQRSrVhLwPwsxA5unLuHkBLhcwUN1eStDwwYCbAMjPGK8Dc1yjxWs9QJ",
  "key34": "2nZRGeZ6cJLc6cSPNKRt29gcY7Tzpgfm2oEgswiy6so1dUMfdcGSvewxNAozLTiMpi6LaAHdDu4J2V6LTY8WJ3RV",
  "key35": "QTWbn8vyveoHa33grhrYEjVEaXFNaQVutnkZZPymXiA4aRiMH46TVMgRd1Eh5Pr2ka4fDownNpWqM67wGnBDGno",
  "key36": "3jrdeHwZ7N7JzZgPqb9tK7ZiPayPk5X3UtDtTihpcrKrQavui19h5tAkaTNx6hSXtpiKNym6sakNLntvFMBcVnb4",
  "key37": "4VbuwDR7H5KqaMAYMz5NmoghT67EBGsXGoUHTBbaj8TRppY63sUKRzswQjWc9G3bFbyhN4UPzSB5viEeRkq7Kkzo",
  "key38": "gqPAeJvR8d84FEg7fQsWkiRdubzuu329SCcSkQjPUg8FzXP9ng5UN2qbMhTcwdRgwHgzyXeiKYwGZtPn1p4wTDq",
  "key39": "2rNYsHTe87F8EBpobybSUVCbcEfP1RoaLDPF7E1uvJCKJFgWQBfUNDFoXeyKBvW3DLjZzd4DdcDmcCa6ay52FwpP",
  "key40": "4nhqDxnvLGjq72m2tuZf48n6KJyjiqFcCoqnjWGNyYYbXkxaQNwvczn8GX3hEeh2t4ZKBbXgCHL5eaUhSUCa3tqa"
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
