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
    "3myDAMQRihE8sfrVBMgQPvbCuaRo1k5Z659AxVW5KaZ1Euw8vUc2p5Ak6u6wGJqQF66f5ZTZ8HzasrYQoHbP2G7A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38Bpk3BdqubkGNGjJ4psWybi56PfKqiYVW429nxnjV1VJ2yQ4shuuDKn5i8W7sALGV3PvfS1yHWqAbm4dJFeJr5u",
  "key1": "3yWZJ96P7RD5ks7NDxnCsuVjFF3VUXFkmhmHAby1LD3fseaqot4FGmQjq2msda9D5HJVG1hDKsfCeWg8ZfyfzAt4",
  "key2": "Sv3eE7e9DwTka8upSsQBSy4MiGHc1bJFoEy9LNQiqEbSCevdnnWAJSZ6fBnr9TMLdSsm4SNhiqXwYYbkZQSNJdm",
  "key3": "3XC51KToGYQaXE75JMuy47Ne9eoUCFy4oaPrmLag8njAQc72JMwTkpX3TNo44Ck2TAisrJDzct8FyhEnwnm2ZkVP",
  "key4": "iczmmaSYtjpWn6KXFWKJowomR1GaWYmhgNEdJe3C4jiaMz1mvZJgu3VQU46N7VHKhz1nohSXB7dWcCWnH5KA4XN",
  "key5": "2AboVfBxpm51JMzzn1XDJPduVUZKM9wP9ycM4JcNDxePz7q37KNaV1D4Fn8QrEn5GfVdQk4W1M6oqLKmtTvVPgb8",
  "key6": "3SZCQTZJts6g25EdN221VLTT78Qs9LiDwDTwaQvuoDaRakXtEj5orin33BMe8whPAknBpRWSUCQQVoM7tse33zMm",
  "key7": "4oraMSutrjwM1UVsnYh2CLUKugrdy1Epuf9vDPNjFyhpWAnxnczrWEQXfMi4s4R2gtb2t8aMxLBy4JK41Yus37md",
  "key8": "5222ZYxpyj7y6dJNhgreKJHdQYcBj6VETtf475vgFqQXZNUJ8aFeShMc2Am9rg7QcM7bfeGmawQjNhWSmcPz75VA",
  "key9": "2QUke5eMKq1w6ZbssxjRqbWgs4vru4SzqrxpePSatA9mbysEzxFzDvKsLrEt9DWQ5nVbXe6XNDPcgt95ozVyoWu",
  "key10": "2stkfUsLPHDqwkiseBU11EDGoGpXQ6emmQe3rQJECEqFVnoHdqYi7SUUCpwvhL9oUTUPqXUCUKK81VE9sazLnYdR",
  "key11": "5HE7FWZtfejPE8wBxcUXAgkypCVxium3KvEse4exXioihvH8FkDaQ4baAsZ4AsBPvLTAgmWxf7RPk6mtL9GngZSa",
  "key12": "33HzBAS4YrHdxG8BK7ajQdNYnXv7V9pnKY22sys5R174LyNRx7XMQ9XKzD3Wdspu7D3TqvgZgmUiqUNa8ECdFgr5",
  "key13": "42HJyDYsmbujynJuD6VW7JX6BKML8HaSeqKQLRsv8kvBaCdvYpbG4rpNRn84Yo1rt3ExMpPNZA4XymSHRZWDhoSL",
  "key14": "3urrTnuPxADh7bncc1kwnNUs9xXGfLv5AgEXYBWGueHusa7vV3XUDfdbodeUW3De7CAAxE2hE3i3AWqedRapCCE1",
  "key15": "DrVGGKvxVPfiZ2zq3tMPsufWL1bBzGFaBypRiX3rPD6xafb8kbREgW4jErxbgMMtxZYqeTJ7zmnHa5h5KsJ7x56",
  "key16": "2xxY9hsbKbPz8LnQXTywAfJ11TJLyWDspUAxZREBJLYWT2DQFpLaPL8Ep6NAgkrWirTc99JHQKQyAcHUVZL3rjkR",
  "key17": "4BPM8NPd8j2WJnFdMu8ip7RH3jA8gnszhWkyw6v9aVqNcK8cLR34FWnUf3yRfJ3qw71khjv2JwyCS3D4WoWJ4g1d",
  "key18": "62bpyNU5e5bruXbsd9B5toMSGbMF6cdiTThhzDnRaqcorUwqwcEJjJnrzof19BJnbYVhCgde8F75deci71P434dX",
  "key19": "3wkPEQAHztmmjwEmW56KXCiDwtecgTRUwFiTYxaPkw6p8ntkfEpiE5bGzKcZDAKu6qXaL5fMpkDRgdG4BvWAbSo",
  "key20": "99m7VpzRAnyJzGEuaGtgwcrJknPxULwybAnf5L6pweUabDxFj7yLC6nMQEmKzE6CPAGso7rjKxpKuu153sHZwDB",
  "key21": "43vCmoL7HYxW1P2BEh3XFyBa2kKhNxFMUyNKL24szmDLcYpdsEmDk9QAvNcmwHtsHcaa7dso3NeZ6W8zzg59cFyx",
  "key22": "3naB6miEXSjTDDLDYMu6scz1MjtkAxnDjiCv6icBB1xgkp8fCwBo63m4pwY11SHxKXevMP2Vz3hvQNJ8frjeznrg",
  "key23": "4UitJyHmjSJPGMAMBwoyFHZLYZxjm7hU5pgLrMjmv3ymVneRsdqiWMXQ31Yidvuvh8ZDLfeFaXTvMpFzi8zZFP9Q",
  "key24": "RLqm43xEqdCUR6JCtmjL2xHpwzTcs18Nkw36E18kbC8PwV1FbgJmDTs5egRtHzWw9FeTh1o7Kr3JTAUaBhsZeyw",
  "key25": "3oh8sjLSLKKAJe5W5ZR52hqXDnXRQSwMvzzvgcji7hYrtWq9XXyYguQMvFRqWUmjRhDeqDpKHoL1EawGXHfamWRv",
  "key26": "5WqEQ2Anz6uWjJByA6HqDHrQYzPtGs4RVacH7NEDPXdRCL1DdzeR4rfpRYNxUVcrTY6ArkcsTJCSLX3XLwRVPCXv",
  "key27": "3sMJMxMdzZjFqwskazzrKZ4FsbLW3DyDDBkUAmJznZuFAw5rDffVsWUqBgwXZ3NUYmo4cGjTRuMFPjBqSAj67VVk",
  "key28": "5LBMjLwfSEejFk6i35vS3BHjJrWrXxiXudDLWzYDGYifJnTQVZu5xHraCSYmnDV6MELuvxS5ETMKkasTe3CcPXdD",
  "key29": "41vK74DYfrwvUpbftcoirLfdhKrLYycR9Xx51pW8ZHDaU9j3JijfWxaa4aWimeThpB2yjzETRnttDKbTZ5YtLDjJ",
  "key30": "CnovXHTdM8TtWG23mBu8rKcCeEUWAZsYkU9Z9yjYKmTZRDfCVjeAGCdgtpKct5dYHUDWmaRT7xyijctzzkzg7hu"
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
