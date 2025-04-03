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
    "28P9dm3EyGUtRuPSdg3tYzNeTSk6qJbvoorV5kUv7ugNsTURYzPHMLwACi52jqMhBdGYXZZaPdm9TJaqmBmqmRCs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vdU7mfrmvQV8XkrfxDWU6asytFg9CNRpxFf8apphRDaVXJMeZNuMF6su85wJef7UMPDmULgh9XcB99iKW5qNCW1",
  "key1": "hWAc4RLcyhJjjgqARwUFfZdpHEN6hVaPX69LibfRXcH35BfQKkgKpnxBcVRH9R5nRsFQgLCJnZcftZFmEZwUYwf",
  "key2": "SVD3hecbaMiDz9G37DG1wF12yfk1sJmWK5UtBLRgnhj9f1t7P4XLySD4PXM4xLUeGt2DTAhbidQkoTmbx4Ypmwd",
  "key3": "43cDAX5MomBS1fumu8WLxuirMvEPYyosfLmMFwbseRjzrY7YnSyT5ffHG8FuTUK1Lxdk7Zbxf5ESqDsDqkJJwJbm",
  "key4": "2VrpCRYGz8jWhFJVjtrBAU5syod7vuHpYrftizhxNzJWnzXrA2Z36r1TjqPrQGUWZzB2rebxFt6qaBgJyQjJmk8J",
  "key5": "2VjZL558fvG79hiVaQhbEk4gfP853mf78rmk25YPA4Mn3hTe5tZgdJaFYxG9oQ4Xg47suQn4TaFrpWDH56saUWzo",
  "key6": "2Esv8AUMwD91nB18HiPBqPdeS2WPywViwT88TtjD6vkJrr3geo179DhyefKWusQ2GErmxYPf2ZcYuU8DzTGd3apA",
  "key7": "5YySLaL6AoxHKnxQh6sCBLjbZt7t2oaM8KmhnSWazENFCNtLnNGND7aepqEcf5BzH3nvg931DewZk5frs4KJwYQo",
  "key8": "22RWLjaGR8HJdENfxeedCjvEjn727Hk9iiJP2zjT1EeokbpvhWckCv9pLrSiBYAe8hpKUtsxmtBdWYpXXUoox8ps",
  "key9": "2FLs8gyEMMbygjQbJnBma3KU6LV8XvuEagSF8VRYYsdTDWLcGtM5q27uBXS9LZ7yFzFcgyz4JcxSbcdUyUToYtFr",
  "key10": "hPeZEno8sNZkML3WSCrpbppcDZ5FT6hWLfiWj6wscwJsKAT3YdLvwFkopkgZf5kjohPwY1p88TrnhRzBuTtCmRU",
  "key11": "37qEFQKx27rrEVKqUBqdD9SLMYQEBR79M7YxBw3LswXGqz5qD5gE9gkgw3XfSowfDDzcQ5NKoz4PZKkB2XvvsKWR",
  "key12": "2YR2yM6maLKURFNUCGmvAF24RKpqTfwA2vRULp3ByhHco5mx8468CgZtoQZLzm4CvVLTvz3u6F5RVKArg4zNSYuK",
  "key13": "656TjNeU5zb7sd6x7QNGdJM7BDKzH24t67af3BEdnCZinsybUdZb7Fs2spVDxSG5NFjp2QAcEJRbrRrtV6W8Bpr9",
  "key14": "4kiaVWXEVWzxzM34zEsCvvYjE6om5vF3cUT2xyW8rF2gAoanM3hR1oyDGEse9SmpaScb41JUUMecdfg1tDDpyYh8",
  "key15": "5rjxXMu1DKCnCjS2MBSD6mqihXMXzhLShuC3HTsS7sy6YS3P2bWyvaB8xLTD5fksYbKfWsxbtbUNsRQr44wsWVaJ",
  "key16": "2wqu9Z42CnHNbRokQhwUwocYNEYijkEy1pb33523Pqkdr1u2ig5NejBGiyXyRAnTxoMkBMpbjcGw3AtFfqESxZSq",
  "key17": "42bnhouENbkTaXmC5VGP9istxQRen4obYASZjJBxiadpRQE83k6s8QRTRQ6AAerosLgZjzz8AMby19vzHyT7Ahs8",
  "key18": "JMgQrEYNzvT7GAycuhaUP5SCJCRH3r8UXdbwjZsjSyicNRWPcABkAtWAEUPGUGZGtK486qoYEBDp6n7b3D9CBmS",
  "key19": "Kx4V8iEXng2G9HfnYEr4jDmwPGhiEAMAuTvRD6vBW1JVw5dMkmZjHJsXsrusbnyPLXypcrB6MS7RdLX6mvxjDjb",
  "key20": "4NC8DfJ689gmmdyGWpqrzMXE5j46rkNM78kAy6qgdrTonBB5yV6mARo5QeDeD7ECbJvMsthGapm3TZa6NtxNmtnV",
  "key21": "2W92RhtLqWdePYpTDiPrWgPLZgXatBgo3uivSh8t55qA7E1N1vg9dyq677tfCXPxtQpRhZGWZreRwCaDmTkfki8W",
  "key22": "3JFFBdaz5LT5aubRe9A5qWEXRXNs3HjBzAiV9Rz6Ee9dDYx4rHNqgqXov2YVx9LPZXAYznMZYvzEuKpMcvgxhkzi",
  "key23": "2HocPoSqhu7bNthH85TndVTfZDTAPYz8bL6BUp3QdF7op9DKKsaoFvGBgiWrNuhkFu6T49cfzpZEbaYAjVLjrN1H",
  "key24": "42rhZoo32AuQcquCbN7A9nUTQDs4jTbCEgeFnyZuuc7jAEam1mR9dFWLvWk8uJ4tr7A95A4BFBpHaK6EWNY6th92",
  "key25": "2p4ndJDRrDYRcoT4WT6A9SE31TPPPeV3CLWk6yEPFr2orHMDaEXzTUXzuDvUeZMCyyBsYhgVSSy95MERNadHR7Dn",
  "key26": "22PAcbFeHwwXDg6ckwcmNBKXKNoAdWteJwB3PQ3ajuUz6tLiqRchMGs4zkqSbEr5hTZEzci81zha2nkotBFReP36",
  "key27": "4QNLnsWj2xM2LU2usNKU9zaoEdD6F6o3sRszgsNQ7dotBLEwjedUu5x6eA5eWu4kFiSxmBHm9zcVq5q6HWvASQST",
  "key28": "67YE4yp66j3QZgX4oSk5Qxi4mb7uGmq2thGH2QvDaaYf2jtJxUYxDVTswa9MBefUvGqG4QLrsTgnArKuMkqgC79A",
  "key29": "3zvAi8dJX3gtBxdh6BXfoq6SgQM6YUza46h9pUe6GcYHSVepZr3PuFTcyHZ75Cm53Ba1HGza7wcrsPvVuN6j3euZ",
  "key30": "4uPrUc7xvbY9SmLhe4ZvskswfxzzAZLTkvq6S5XRsXbSFvY1gThGooDkM9VNxFL9mJ1k6gzX4v8FyEtuGHQiDhpY",
  "key31": "NgvHXdckpvaZfwUyS6EtGis1z2PpBDh3g1btH6UuvyL5H4LFAWaYWPTW7BBofvqjNf6iuPNziehrBaJkTDDvnbr",
  "key32": "UgMhrWQVWtzWW4mJdFqytQZpe412cr4bCdrnYyKj2MeXm9JuGBvnronifX7iqwfj1sMJMDwJ3PgueNsfxP4wn1V",
  "key33": "3jkiSfMb3oUYwvWhxK7nqtB2YRu1AdcBzU9Bu6jizWEaGVxeS3wf1WNgHxveXkM77aFxkLiCUxWDXTRshWU6t9J2",
  "key34": "5CSv6bFygNA9qZm5e1GCVe4CjK8C58nj86xbLB6FHjQfrSHdLBjnibLtEAsgMdJ1BJefkgXfU2U3NVyAVj4vUTX1",
  "key35": "5C7dMW7qRgm6xcLqSUyeZLUPFaQ9nEMV1PMbHDXX9o4z8rzWLmtopn78vz5J4xrfave1VVSorcMMgaBnC1X4v7j1",
  "key36": "5mpqkFCzU3SJF3PgRAzCwGeFmU1XFBLhDWiW3kXeBDzNZzDcCJBRH9yC1LFaRbbBemWgbw6VWeRa62jQJhdvWUKb",
  "key37": "YgVNLxL1cQroG26WYrMNs2LU2Pdf36Nk51Z17QEoEt5zd7zLhrBs955qfsjPeASUMSopWzyT7hfkqi4rf3XUimQ",
  "key38": "2bWjSufKtmtTC6DjMcLGYTUZNiG53F2mMJEAUGb6cv4MaZtAW4yA4kWwVXSvTf724w6EPopBa5JoZJ4TKrymnWuW",
  "key39": "61pBGUp83hPtkNtFPmR814mkKoAbwKr25rKyeWdsazqbBwH85AYe5U5Ss6gth7x7de1MaAe3MAWcHrQar3nYcA1b",
  "key40": "aB7uwdLVUt6QrwZKwuPzb1rtjJESUZj1siK74XhiyVLRm6AmGd1nqzzkbhmcwBfjWkXpqS7oBF5hiAxxKe3JE5o",
  "key41": "5GggBabd1Ta2qDT1rMHeNfh9oyng63QyzigEtLXNhJp6H4kWsh9FZYPVyqtWvv3Y1aBjv1qneCiqeHEddSKjx5zZ"
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
