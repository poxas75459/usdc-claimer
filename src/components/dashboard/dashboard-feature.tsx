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
    "2xoM7Ea3javEE7rmmjP7LjZ2BzSwF7YtdQncvfNebNY5tSefKzgEmk6SX4rufHCY2VxJ952xB3VY2Dei3cbJ9y7U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C2CRZpSBwiQgoo5BCjLNzT9xfPagkjTfW1njpJvv6DUXaZaN5qCj2hwWScxBLJ6Xf5UsGHLhvXP3h9BCi2cEJaK",
  "key1": "3jwqc9yncJzvkwS8t2gvssRngM2hLDCdd7xBruHYc7jQnbyVmi7QWxuR3vp1hDvLrKN5GbvHz89RUajCkieHLN8T",
  "key2": "nSkN3m1kmi5mJMjBvVor6Z8P353HDbxcf8Rdn3FAMQ1koqt7HipmxhT2iLtvbAviwDhD6gnUYv9py68PHSsYH4t",
  "key3": "3fTrQfXtn2kLA1BBBb8Lsy2KgqjapaLucAp6JFNvFKPVa4dcmfLY2v5eVCXe7z8D61TUwGnDnj4Yvm7a5ZaXLzCY",
  "key4": "5QHmbHrzpgdqEcBNnt86db54yxHLujDdm9uQKseUC1dcfkowdwtxz3rQDJT9AbMNuGV1WBMEoBYVrTvLkk4hc1z8",
  "key5": "34qAbhfquCYUpP7Kstb9ty9p4uoPPY4gV74RLE34A5Ndk3HcAFdB7v711YA5Kggsy5a7wBK9yW6rQTFfU2JQGunb",
  "key6": "4xJfHF9xdoU28cLxQn1xoPf6fqum89USFvgKdq4fJGYB2uuNNeZPVHQYAjYHibU4B9DgHo7bjKv3SxaHHM1uisR",
  "key7": "TzX3vVxPsJESNv2WawbJmmT7ih1dreoxVoVmtD2ByPfPThZWinm9EVhi6N4A93zMJL2K7oeC6iuVt8rEpNXL9sg",
  "key8": "DAXstbByKkHYwypSBGStVwqgKDY1oBSDfFSP64r6Rx9LGoMve72iGby8MDdpZYYBLuYcVCFrANBsQKwPJvnB1ah",
  "key9": "5xsYJ69sS19dCexJZKnk16jC1wCCdt8SJzmoumZZF4o9qb3aSRsR6rAvEKkvv67wxZc5Sj6TwtSxfQa6uBdz15rh",
  "key10": "28M9irz87ZNjgunFRDzC4fAwgmub5qyXSuZ1TgwDZQpR9WmJ6wcoF1cTFUWopdrFm1MvVixFYvHEfLFFmAkoQXKm",
  "key11": "amhyjKZ3seFvQ1a2oA5DzjpBMXyHxwbwUeBwjAHMFG6yKFRMbbh9wiws9h9rHDQ5oVE2dhSPpeMFFvZpRDnacS9",
  "key12": "sqBKvQLa31nFxXBE5b9Zcxfq53FRWfePPgdChcF7CUS9xrRq9QeqYpSbZTki8MJ2SArGY9gyUidBQAR6aydkgHr",
  "key13": "4UD8nD4AbPKQLr12wEDeZf8sg5dgXuCNJ2Dvf2yXoAfNGVoqdmGqS8YEVno2uNE7ydQHFaHTRadRNsiczZ6gXdYz",
  "key14": "3cc7w2EWbGUGp3qWuBPM4m8R8U94N6wM6JCWhBMEL4MBi1nQtDeH2x3rAp6jps1qMeeiajdRehPQ79LXUqoNV3YC",
  "key15": "4ed14EvVfW7D1eioVD3UsdfTz1q5PtVqkxMnQtvpYGmuBb2Yf2KiYFe1TSRpQBknjYPHN6YJUPaXMtGcNWUFpdYC",
  "key16": "3kVY7mDmsLdvdeL4Qhu32pAZFMDV5STYn1iCC6A6PCYn4E66NDgvUEu3259FRT1dvEa6VUUUtWYMZeYLrqVttdGe",
  "key17": "2TSGtVcdhtd4G3tsH12G9CJv5XykmhBMLGCRZQiL4VrDZ8RH1fL3a8qze4sDeMPvvTLr2ia64QzsN4CSFQg5mnuL",
  "key18": "xChXXwkqsAz7gz2PHhPzS81zNak7UUqngLGYJRLkSeeABVKMiFcr95o2di5b6gzLgNChRFaPjHGKaSJ2pcnkfxo",
  "key19": "4otEZhnLMMfBNeYVX7FQRNfiFW5BFouhVN7rdv6YCfqQA17pSVvU3TLAkTDWYpfPYEPC4LVSirZ6AcbHfBHC1YDA",
  "key20": "mg3DxDjyDBkSeJfRX5dFCw2tsECAm42ETdQX3x1NsoV16xA1ogy78osq1edY6cUjfztcaKsE4ZybZCiSLXjCKNR",
  "key21": "51bgHK7ZnqBq1ZFMcsa1tyJQrw2FdrLkSUCjxZgsNr4Kyhaub6d25npSqtaUTk3ZRysqpgnaVYqkZxHYTsWAocff",
  "key22": "5eJoNspMbZTrj2dE7mT1cfDKFEVzFaSmh8eiAb8CqBn7eFEJan5YHDMoNiqBmN7Co7GXzt8sKFCDX52k1Rd4t4dH",
  "key23": "JUL1K92JSPEXXfhDbhKh8eYkmBA1GaPBepUudKXdZ8DuPnL5cAXHRc96mPmhPTzdW1JBYUXaLujcjFJT8vD9JS6",
  "key24": "48Q12oc3JThfZTVCifd3TPg5KvJDC7BtoaSdkP7QFoqvr8fvPEtebJR5ijxrqfdsMeFAnbmoBu8xDaoCjvwLH2NU",
  "key25": "564To9nv6QtxofoS929irSXCf55epYou1JQthcGb7TDunCiUKepdZifR1vyxFsGeHvQ36Yk1k2jzRuEELFdvxS7E",
  "key26": "7RJQ5dPw2U9VmZKj4evTVBFBEfTsBL258ZL1PWrkYVUZLDiAeTjAjuQtXVvaro4m4WUu6CKA4CU46ENjwmQLCzh",
  "key27": "2aJY2cZCu2X2YW44gXtjw5fevjg63PyPD5VyTyfwtbMe7FcGCSsPRTPj2ZQ6SVCpB2Jvh3jV7ZYyqfvPYXVHJusg",
  "key28": "3Kg9Vx8phAtNY8BeBYLmMei4rHbJjPogsBkfy3xXNEnWFNEKHwwUBXjUHMPiDHm3Qd9HvjsVYzMxqXiP3AJWn9k2",
  "key29": "49s2dujauMuVaEHUdkvK3ihSHeByybuY6ef3fGYgoQNnh2db9kMXcnUSFshB9pvaziPgqmYgUpvPuzaKrkanbQgC",
  "key30": "46vYKT5MymSCMRpD9jr8FwUtzirmSfTecjtLo1wrkG9JwB58sMNhipkjD8dKZf5dG5R7MFTAy4Jw3qfSEh1JJsFE",
  "key31": "46hEA2P9A28ETMXgMG2ba4phePXm5qVVaEZeYNAB1nCwNhuDcMUFxYeHtnS55pM6aNPW6PVHCLmHMZUqZZNjPifs",
  "key32": "3nHjho5DZJtVoBnnp8Hqwv1yApoq8tneByobv1wvJw22CA5wUfmmkC4yc9PftZUWeg6NBGHvNq6tsfnxUWyKBoK3",
  "key33": "5vZ95ZevdbCeu97UoaZ9xpWZMHVB9Mukq9sBNDf27V7WHGmZGDDHArVjdJ1NShSVys9pKgADiNAJZjN4UnH6jwkA",
  "key34": "2Xo2wrENgSABia6SpETfDBBbVgr8aDmzQDMVsgYq5PiqTp6Ga945yrk3Q3vRQgvyL2q5MSNWBZ8kfqmr9sQ4856a",
  "key35": "2EoiRZGzwRU2iv3xNbLGrCNKTBuKdC4jWGgZUeGUXYQP2vyS4f9JAQoeJvcWacnL8zzaMkhNVqVSiYS2ZemNXgqF",
  "key36": "4QdA336bNP6PVsczDbSZ9Yu1EDd4ZMBs7m7GzS7dk6b5JuGyHEWHiqETFUrUtxk2jwB5HYwphTFeJiTtvg6yX1Ne",
  "key37": "4CzmyZcFzWMjRB8hw3QL4LSLsYZdMihx9k5sGiSK3iNPiN6cQfiG52c6o4azoVHY6rUtdacG2EVz6Yu9wX2EoFe6",
  "key38": "5s3GrMkZurrKjuDcWejnqv7JjHrriw1sjU6ThywkE7MZ9y5oEBvZBHaDN7N9s1mH6Rxcw2MhUUXzWLuWq3Mx2nAL"
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
