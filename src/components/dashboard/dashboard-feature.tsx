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
    "4tX4arGkQ9GhXRJrP1LBE3urrAo4y1SB1geVT88Tggd9iBcSUtBviAUNFv1pREtd1Ar7rqG1zUSxCEDMvSLyi2xk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DEvEdjZYWSnSKpNsNJpxrFcBuUiQDogbM7EG4GuFRNfxKVKQZzLcoCJLku3wM7avNQYtuRy1BBobyZ6CoM9r6dW",
  "key1": "2McUMsbWD6tSBmFkVzV98QPdDzk2Zjtwz5Hg9K6ernL1EPvs2dcUwmGXRNoRR8mayg7PHrFmyTcF8qtTsco6P4Ey",
  "key2": "4pRWwLdM5i2TuCPiN3S2v7oyzULjh3M2jzzDe1Bfh91mcnSSaXBy3DoewoKrtdpS6E2wLebqFCrDxTdRv31QbvFL",
  "key3": "5jXf87en6npJ3UNQhHoD7avD1HtamUgV4UWw8oXPgpqXXnVtQJGxQhN11VnjyEB5Wv1i7epbsRGRVwcKMmb9wLqi",
  "key4": "bVL7kdRWxSjJmdybteEqxYCJMYtWE1sSdNVe7dP5RC643TT4XXmmz9qoVcEwk58wyPyperCkf2zgnxGNbcm3mGu",
  "key5": "3WKnK87EYuWa9cxDa3ZGNxVw3jWL6ou36JhiMX1VcmhZdmASstug4ABTiA3KYRDJ5f1kLqEUGeZ3axnGEk48iGUT",
  "key6": "2FfShFcznCxLDUUvWa9SrGHRpmd2xhHMakC5AFna149S9sqLsJGeZXGK3NyGonok8goeWapvfzA4w1NzBGQkmJv4",
  "key7": "48vHBiBYVWWTCF4GHoobp1WhS8qN9SVneN9rDQKaF5icFCaF9TyVvHwfdnr7vxbvXQbnyiKZPmz2qgqtUBUU7Wp1",
  "key8": "a9gcty7FquT8XixLHj5a1B8sy13ywpfkMoHXjUGcFYqf3zySCYCfEYbwvGPkxaX71TTkWj6easnTWzGEc52p47G",
  "key9": "3zDP7wDLiw8SaN1NPvZAL3zNnCdE2YCtMzpYuFMXGnULsxsKcD4a9YRchVAcpJ2MidWQtitwacafYnjfBNwVZdGa",
  "key10": "2KNSy2n8QYu2VDnXnShfRi5meEnexk1Bht5vHXLDJw572m6jaRkjN1HGkEPj9J76gi5JL5d6fiaonMtvbRxFY5M7",
  "key11": "27fHGayhaJvxZGbxiqYc7YFSASEREkq9z57bpxdKWEuw5St1riPXWxPQ8LtFb1R1tYcaNkvGJFqfM7D9VgHNsCX7",
  "key12": "5AGKLbnskZ3tDZMtJCMrBtFnoz4CvN4n8jC3mX4LVC7rT77eFsXEvhkyRqWPmnstfW8n3EaresKdNK2HkpDabbyT",
  "key13": "5URZabJrTa9D3iyVxGJ4jeyBo9yzVZnuAmPN9XBE5LU6BtphX5RTSuKSNkVCZBkr5KsSfhRcaaXnzfcgjK485Nwn",
  "key14": "5dbiCyKLycsLwwCiQhqUCer87Ad22HZKFhTADUPRkUK5y4aS5Nz3wSC2Wbn9pRjFdNTctdhNgcyw4m48Lnyibo71",
  "key15": "33jNTbDMKjRKX8x3eyt6DQmwrDLUofDM7h2tRJRpJCicJVsBwYKSuuHHVRp5nS2r7yhjbtMzEsmmHT414U1xFA1D",
  "key16": "5AD7aWeBTrDtQzHWtnLb9vKaC449wgwRGzhvzvVhGyKnqQrfgcmrFFrkYawJd55Zs1jPSW8dJhRjM256xdckcv22",
  "key17": "4YeFPYisYFJ7hGiJquCPRbwXitUazF5sez9V5q1VoMraqzmxXaGDEhXQZD5Uh9Bup3CiqvhGHGps8kF6obTBE55V",
  "key18": "24RbDpp752artWdTWdJpFE38cZuJZxRSorX5Zj6SxwU15FZTx5mAiiZwTY1Wf4HQ4GqzNN7LBskUEbaDUn7evki8",
  "key19": "2b8T2WXB631SpdLV5Q1Qfee9YE3MeZBhZkGg4wjjUfDfZktAVoKVg4gMiBTvSP28S2SpQEdms6pufGcj26fKn2T3",
  "key20": "34Te8twCMuLbPSqjrfvFiYjDQfEuGVAG4Q2M7eSGVULJoofvb8PzZH93TzDyGpeocVvtJygFCme9bTyXhwQxiQLU",
  "key21": "5F5HK7QeQHkJFRcKBZdkChBry71rT5d4PEqndZrBro4maFaaVMFpnDTeCSXszJjHotbZ99wLpqYExzNUKA7wYh4c",
  "key22": "nKyjY4BdatNqq5wp5feNdT1WoXnu671AH1SicpRHCGTC43WkKHEhXFUj9gDcAwbmJXmvYjyzv8P1yM2P1NaxfVv",
  "key23": "4YyZV1XsB5bfK1qNQXHjBUQgkYzaGVU27K44ocq13Nmr65ukK5RD2TPuokt5GGrobczxZRenVXfAcB6gTCn2y4C3",
  "key24": "3JtZXthkRdz43K7fgrHNjbLyDhn2uRErV8g8xe5eqmBya5c5H9bnudT4WVqKRFzTU1YXt5NTx1QWz4UzeNM8C6t1",
  "key25": "29pzgA6rTmWHWmgXja4DnkpFjX1Uc9x6rfCNGtT686keeCuxW5E7xTA183KCcYroDvZNPkFHkNvnLvZE2LQgUjG7",
  "key26": "2qpEttQL7rTd7iGjfbuu4WvpsH5JWCveJ4T23k6K1cB1xa86X8fju8FRCP6q7r1gWhGScbpfpE268SRvipAVwwP6",
  "key27": "3pq25qupzkH6H6cKcuygHsUztviyZvV7z7YHbxfr2tYfkSkF8yrngcsV23xXg38m89NtLjkTfeHAUjdKD9o8AmCa",
  "key28": "3phMmBANAWMqqzwMZ9yFjf7hjii6kMA4qF76RMHWkyETprkhiFHddM93Ys6DUsW88GTxR3CYedNU7yR95BTTC1KB",
  "key29": "FVC2k28Et6mVWJhKNJoVxdx4ZqWowjp1xGrvbgDfSvBt6WuiLCQ8VfH5Bho5BF4QK7g1WeGUCaw1h7rJynghbC1",
  "key30": "3DUmVtpZCUyrgjsd6cUjZ3ayr2FZL73qDK8tFBr41aZEbpWhfsFsh6dmfdisgJJbuTFdYN15aS7YNvKfWyrVLqE4",
  "key31": "25TZB1zVHoCP16qdBwufGeytGDsPbVZvnMVcqm6VSm275FiciBK7aY2qEKuVBbSHwp6XJsxWz7yahnqKyXSMV4sU"
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
