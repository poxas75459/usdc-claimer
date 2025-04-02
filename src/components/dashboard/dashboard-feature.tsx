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
    "5Kdcd3TDgLrhZYob977Vfb9oW7g13H9MMZXmyUg6RkDeA8PrbpEDZGKGbN96hwYSiuWpc1MFQK8Aa385QbPXiAPM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cMcetx2j2mMaRh2wyxevy7Ei8i6G2Cbb9dowYATKPPWr5jAn5wAJ24KA3FJ6TP1g1YQjnFLqndoZwjXAnQustbD",
  "key1": "4y7YMwBTK4QMk7ESCsyFh2KP6F5F3dfoxKFmfLmujhrnvvG8pxcfCHJ2ioow9fYjBZarkV2CcRAWySt5SgorfH4T",
  "key2": "2sdXA3rxY7gGgjzM9i2MerNSQU3ce7yj95wjNR8HcRcvTA1QzhfmtDTKcQDZPNSwmDLXaV6pZXZvGsbyvmMDWqQN",
  "key3": "4wQEYZKrHDq5FpygNn7NfsXZzwEjsFYJbWY9NBgNqRCNspfVcneYTYyYkWxtZbb6wqpNow1NgnFUFPMyvEp4NpRB",
  "key4": "4KsLZn7dZHcT6fRuaMUA1yKkZSywLrNJEy7X1wmsE5nJ7rNY6p3BQWURP7YDZXEN5VATgx4RxfG39tX2VD2Z5AJ1",
  "key5": "5J3rMM84ZVYmG96NM48tVdKsbaJwQTvo6muQSc11KEV9PJu2smTsuMnwtsNsG2ioCRnYXdJZFpQuxtcECfWUK4SE",
  "key6": "L6Sw6qyno8zqDL73QqpWSiLK4JFZXEQrqF9sALp82W3cHSTsfK2ZrMUYFDdsmmf3dWQ7wXi6ya4Razo3oBdjjh9",
  "key7": "3so41BmKRhZBHBB9UnTLHZi5uUyAsun4Hz1TkVJPjHH1wVcUfYySQFouJtAQBaJcGNhssWgQkHtAfbHqUMUrBTyQ",
  "key8": "3WMrnRTT2M8KecZ9F9sKLUP3vUhDxk6ih8KaXSzgy6FdBt5fddSYSYPhtgRkAverjqPmhDgjSWkV3vB75SC75b2A",
  "key9": "4Renb5h9Q8Lifgi8VdwpQoFTfo4BNvJr1VqqK7mKmYEAUJJ5NkWSJ69ZcEdXSQZXAZQsDKzhWYSpVwehoD2rXmg4",
  "key10": "4AZ3k4ntszXGmpDhCeHLoK6Eya633VFkjj8i8AUtuFHhmBB7EFPvw6S2ZMph1NMbTUgipRhMbehf6Vnrr5KqpqpL",
  "key11": "3NZ8iTMwF2EVKeeN4KqqMwwzX8cLg9HMw7ab2nxdbZPaWW16BUYoXDPekUFr47MWzJnJ5mmE5Uo1TMgTxxirYSYC",
  "key12": "4UWyHxh5HPq556xdFgTTrt2EGtPNarc9ebFzMg1AobS1D7EYuFhjVkwp4qgDU9RUehUNWSHUboe2sdKE48weDAfS",
  "key13": "5iB6ko8x9AQtkFauvGFYSivcSfAj45T1TAXoW8v6CVdw4EaHfZGob7SnhdPbaZFSCtVXkidjqivfNa7XSkyNQz4t",
  "key14": "dedtxERCDK8cuFz9zUnFf1neh7K8jRaTFgia3VPg4wGeRf9fX3wG99SkP4XRsvvYEe3an4eMDPzDriKwEtHuq94",
  "key15": "3FjFR9hEd6hS3d4wEGyigty3TAAK5twQJaizdwqzVgTBemhTtwMce3jJ3ctDoxn9iEJn8CHEFyAVX3xUXfwv6UpX",
  "key16": "5YBtaUBUnthTAcPMnPZ8RUqzwMU7ebzZzJQFcLhZa8ZE1eSjiiJdkjHFUPedvdiEu4Ns72ezBLHLWUsXV1EmAMJW",
  "key17": "63FjcMTPr5nQg4C9oK9uTnxUhQdyoL8DZGWVubfGn35s63qf7DTs5qsdCvKthFbax4tepXabFvkmMtd7wgbmx3cT",
  "key18": "2ED7VavmNtnvy9RQA8s1SFSvqjaSpc8TSzBLxteU87RzrwKdhbsvNxRGkqn19nvn3KyKMtcRmK15HASHDAbWUbta",
  "key19": "2fXMjTnn6xWHwYP4FTAUJeD5jZtozTyoPrFvvrEVeb2ibsn7CwQKDPgbSJGn1wuPxPbRaWH2k7nTtUtTG3aaVzXL",
  "key20": "2r1js8Wof6gZ4YeUBVnk96r5EzTGR1fFPTQafd7x9u9ZHfYbdh1jbnumkQLiNNJ1W7SjpBExkzPnvHTFHknUVKqn",
  "key21": "5aA3LsHbpEqWJE9aN8TvaCKN15Fi2t8Q95bB38nqgcbNEdBFqixWG4n2jYFpNC72bZ2ocWypT6z4ha9QkruUhrKr",
  "key22": "45tkEWR75tEArbu6PgPSfLfG25sQdfuuYy6HwZ9ymZX3d1apobS1iULPm1Lq3F12zpv3c5Fh78xhjdwYNNPwhv6Z",
  "key23": "4fwTZWz4hqGcJG7g7cvUjx5MKtvBhwmwfi9P8ZdtMPnnUs8aHJ8WrxgZujJx432381uCk3cB2Kayn8389Gr1AYBm",
  "key24": "4M9DKCjNip5edQmisf3opiRJuf7BaAV9NagNGJNXNGFTR1DULvA6HafdnNjopyEQqK1HRDtchCKah1YyQzxN88V8",
  "key25": "3R5cRLJ1XM2MjHagany5rP1F6hsiiSCYqiMNd4aQTR6vStmJRuh4Nbd3H55tXTGAoXKuCDy9VofgUi1Hbj7YhGgm",
  "key26": "mKDzgJQH7vJzbbFWqgfoi9zCLptzL6rtMiH9sRvP7budD5CrnBZKncRcKUqF6THHJVUFCE9wngqQQoF4xBGZXH1",
  "key27": "28mMC2r7NvPzoTaJWwQuvCHfyZXKFm7iNCUSBQTVcTLJaxj93QNEqVcwrZwieRWwcpbykZfYaf66vwvYdVm3y6Xu",
  "key28": "zrLBL3vZ9CVVXdrxWp54DtaahpSqiBHVtyZj8gdwcyL6EqjxagAmBcj4xDeGWr3iRJW64rU1skuDAh1oKzKHbjt",
  "key29": "yMXUajLd6C4bvEiqryDYJ2fT4LksAM899LYnRFKtgzDye5jL78QqzboLSoQ3Ux3ScYptCWfCNuV2vW2XJVzSw8Z",
  "key30": "31VibMvYeRoVbKy7fjtkmDtHC9w4w9CEbQTP3yafr9bCQX6PPSbd2esxyEDDYdmk1pAdvwDdURKnrjsARAT4YjRv",
  "key31": "3RuE9KSLd5vrb1s4NLZuS6piNzeWgFaP8sTd1nK2gpu9itGQXsi2WSAtpAbnUfbKGN6C8mK5WMSWDzwaGxmodvPM"
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
