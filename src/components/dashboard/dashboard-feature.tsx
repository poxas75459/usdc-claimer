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
    "3v35DpvLTGy7MSWK8ASNw73CZhk6sMpm4qbXoBPysaiNH4WgHguaTwodbqXfshsRKJxZqcZp3oA2XU1LH4UTHiqc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24kF8oa5fZhxwFfRtYF7bqS67pcNfrhvqxi4dkcd5F6AbY2L4a6SAoVojfPU5j4F5Uu1H1ghnSZrWapgGFMPsb6v",
  "key1": "2vmMKjPurz4oH4yqWN4ehg9TNNoSEmGxyd1Y4gZoiigvwN5Z1rTNAyFWFjyrjDRr5apJ1KEGQ1q69u5GrpuEb1co",
  "key2": "NVpxyUUCotPyd2bj4LgC9aYtJyddW7hrJbhqxS1XgXK4o8SJvkLu9fFPk3QXUgdEpCVvA3MEZ4KmaFrRLgQi9U9",
  "key3": "38YVpCEsDP3secbQrd72ubpTQUciuHCQZYxD95sEvhXpNqTtxo2KAX2JkEAxPP14RjadVCXzQzgGGixshxWmmry2",
  "key4": "2YPSnbtSucYF4a5hjbmJGYRHDp9XFTUXvZcU3C62fGaoqBy9aUNuCHRForkmXPNYxa3zfxumij8AEYmQEjT8o6qa",
  "key5": "5yu8LJj5hJNjxd8MEZB9ecwU1pUoaQLcerV3HZpsbHjuofSCJe7ykRm9pgwBJwrpWgLYdw8kqJbxpoZGNaWAiVr9",
  "key6": "43xtdeaAZHPqsqxgKzdyXAh9wz6Zav785fnuZiXhsemvuvJ33GoHzFhZPyXMw4L5ZuVCzbkEaRwuycoCgfYmBpLe",
  "key7": "5z7WLzqxLuAKL6mx2BAHPYZyC957jEZH68TxrX3opMoSPDgZgEbsHWYza6P7dRbtRHsTpmkwqMgYMTnwriC9Gyf5",
  "key8": "4dAQeiH9FCtTWhN7rYK7Lf2ZpEdiJKwsgmPJcVvm358x4mMw7pD21S9zPoCvfJ4Vj8XcBYPxXgRxaDMzJjF4jT5z",
  "key9": "5WNHD1tGKbPV7XvMmrzBJwwsTu9sAxD2HaCWGmwjzPY9fcqD98QeVJEZYxaxGZiKRR8PVcwCow9dLykjHEYnLwHZ",
  "key10": "nKZpPKdNeTXzaFQBSHDRUdCtLipaMrGXqM5WAggAbEdAREBGoLB4LiQhUwe8FXgZjyGp2tsvLqKeTTYoUTDYVSv",
  "key11": "z2w3fpvgRtkEdSSfnvHoRwPAVXWCS3h28j6uhUTvqE1Ygjvvo2kUZu9AXFw2n9XVazrkWgQJeu5xyfrpedxW8XW",
  "key12": "42s83WcQWkjXZkWZqWubNyr2DgNUw7rcuQcMpRs1Pxz6gnA2Ahj7A7crVyY8Ks7ebAzzLkpxyGkAdTnd1JwFK9Ja",
  "key13": "MavjzxpCeDGMP1HDxeBtZt5tKZhRvSLQV9hkGzdBUzJam9fG4HK38TLxaKJME4CqFLNPC8QrE1dXsKUvDL5KqwM",
  "key14": "4PPmoKDQ3VF1ZSG29QtNUhaqta77rDm5Rq6VytULV85cr6Z6d2FyjdVUT2XYoZGYiwA4gnF2GPSt5ZfDMsksjuT6",
  "key15": "P8zrv67HXtAu9qYDys88CWo4D8EYTVNB8XhfnXz8WDkSAMr3pr7eqchTWCdh48Dth1TmaH4Hv1NTaYVzpXAy7N7",
  "key16": "2tAeFNyxGmFMsawxsiTBLELWWyLSePFiFucH3ky8yWKmFaoaWDj3nNzvGWoBWSFVZKNUfkwahfniLfyCdq2mw8WS",
  "key17": "3EaRx93WzfpXQf9QSUrC8j87XSZPxTzQQzrWT12uHrsMwZNLQTm5XaFuotGmJJ8czn8e1vcKgZPKuehQyY1G99Y4",
  "key18": "2J79PqA3xeHzAyjCnd3L59gCC1rsgmspQ4rajWHXpUYWRvLxXrBv98U3bBB94zQx4ZYhXop5oXQX2HWqMkQFysyR",
  "key19": "5ZfNEfjEogMJn8QgdKwdfm9ddNeYjDNqTp2rme6r1FwTcEwiywghxHDUrLFb6hVqLw5qDitNd1micLZim6RagY1Y",
  "key20": "4LJVKjdVPRRJ918AN1QHi2oVxrkDwN2bQMNeB85AoewKPigLBwNAo23Y1bkrNd2EmB1j4pdBfiWsDK2mcVcvBuRY",
  "key21": "5ZDrdGPuxCttcBKySeUQhQWFjMFqyVC9gDJ9JKDZwBR4PmDqxbW48JNjzasDTCFsywTBLy6s48CuEWfXznk85BbB",
  "key22": "4H5VoAyE8LEgMGyfB1ohPvg6WxxKQoWkvgxmdixTRiULv4znuGAeqLPmUtRA1zFcjFTnYwtGqxvPzcyNLY3vzD1N",
  "key23": "2Ggf2NSt9C5TL1HKHipqm9Zp5YmhuLQgPyL9UTrtEgtzY9SRS6TJpwMoQyNCwLpFkdh3oda3m9fZ5upii3wqw6gN",
  "key24": "GPVFvoBDXEEjqKboUeTXuerJG4mh7Lo4TZ8nz2E6MoJoKfmpqU9Y6Hhfvr13CPNYBpcoeMgEi3EacsjKKvfGod6",
  "key25": "5htQGxL3MCWFm5Pmwh3JfV7mgYdqSV6m7t8hnftPefCTNt8dbrRHHGMv2hoSPoHGnSTyvTnYHTx5hH9zyzZYkYHj",
  "key26": "2AFWUXZAcfMyezJpiHFrTHs5LDQTMi3EMHSWtMNrUTJZ6AkpJyfkwDNUUxT6HWT6vBFoDEPvvMGRKBnnptQLo6Rf",
  "key27": "3HXXadibqe2yBCPLLaq4JdGZMkWtDEbbWKoKCNpVeuZV9CXgEErqooPK3Di4sXXJDev5DoSAMNMWyEDuAgZEbEJq",
  "key28": "fzdiqQpRSTQ9KDujuhRBj8LXXx5yCCxqssTseCPNsTqirFwK23CobfNewAi1XPZoP6HcXaW6ACzaiwC2ZdKsVcT",
  "key29": "4WsYa9qvNyZQb8W6bKPzgUHQNAmqrwbT6ZvatMubvsDDRCc3qUX7Lyy6Xnf7okPEbkcXbdRabdh7fkJKGbwxZFDH",
  "key30": "2T6o5P25wHqKoSoqmUm3PkWNXVcv1eXqrmePvC3rCdpnrBt5kxwYKpen6C1uGfHRctU6cCL5tPeZXPvUmhSeM1LL",
  "key31": "MRB8qdepqvCZYY4djXpNMZXpFKXEigTwXCQokh33TQWj8eV4UV5MHAeMLHZJbKuzsa9rJDdNMtrPqxmf9nDig21",
  "key32": "5WvrdpQXdp9AhLbCbCjuaBGQjrpKdpQruecf1WReiRG7zbDvFghrNP51TRY58QwUQZQgZGCwDkucgYoeLMCNKxAZ",
  "key33": "gRKuqwD2k2UiuPaDuWdip8MJWNSQVDpRbceqsncs68vvAJyVB4dB6LLu7PBrXX6ai7j8EWxoxTvicepJsdzoYYA",
  "key34": "MoqvpdLx5CAbmpFPckEUBgDbHfTeL3P1hYHn9qYeoTx9bZFABZLaWVLDmcNyqS7RFpmyQFwUEphunrH9DAHMqZL"
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
