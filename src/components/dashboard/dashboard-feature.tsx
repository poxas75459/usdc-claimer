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
    "3VWH47wbnYNwZJ7MrrCYXdnHAVbWJNTL3XWjQaxRoEjQfjfAU7u8KJ7UjjCMrZvZVD26RmQcpn4SvYzhM1phVt8V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oR5RauLHzccAoRQZuNnNxiWb54avCCh7fcsvsvKqg2T7FPvGuwP2tVoajuw8gaDDxmNgUiQhirekPr7Biqx6aHX",
  "key1": "3cXHVkfVweEysCEHcznzgud6LiZDPcL66K1JBoRY9odVLNww7EtoGXsgwR79TncW95ZQ82XFrs48BbcVxgkprsca",
  "key2": "2MboP4s7C6qdhE23n8crKNPZbHn6gCtWwgVotboiNNwvqNJYy9FXJ7KYehzeC2yM9HNgMQ7wtT3QU6TiQVm8WQk7",
  "key3": "xV7YHSsTGfbJrnRajQVn3RiAQ4VgNqX8oxTos2KhsA6RWDNejNNs1vdW5v9bGq68EyU8JCKmvDVUrfcrFqhkao8",
  "key4": "3pxK643zaHzRktk5kiuogC8CdFo9Vba93Q8NpwLtAHBP2Apzs4EXpnJPLeeCDq6kBxmxtctcQcvDXQgjHLKDj5Xh",
  "key5": "4cevKMim3M9PVZ3K6jxjMUwaSBHfRc2dUfBw4TxSPjKJa9gtWnFB9wtz4fPhozTMhpiJ69W4yii6RMHg5DBQE7UN",
  "key6": "2jks2y9Mbv8pU7DeswRng9dBRpKADxbxRN7nQg2EUFA5y7oKLz7SH2VhAxnbhCKqs6SD6Nw6ze7J1P3EGgWww1ig",
  "key7": "65Lt7qBBre6d2AoaN4vvBcJYmbwv4UU1DRX3vMHh8moRfn6BFZmNhcZcHzkFUqqDzAFTMsszhZXaFneiVvTiP97",
  "key8": "DC3HfVkJ4FvirxavMtxwPhTTrXMdq5Zo9H4sQUxY9FshmTSnHmJTezMCPHo4LFbAixTBRsCneqQLiHjQmCpjsWM",
  "key9": "4XaqfezvwBnLgfGPh1dFawSz3465KnsNdMV6SPBdvNcUYQ7wpuU6C2S2ZRBsrV95yEHRZfGUBTqpttXx28h8bRw4",
  "key10": "3Vwfb9EFswYNV6mXGwVRfPpwNeYDRE9ozU4MuyaxXoaeuAvumbWd7bhRdMLX5Nyi5sWPGifs76YZYmUFU9xijM2D",
  "key11": "9k8N2JoDk68oFvdHB1whWg5M1weMPjAu3gaHHUnVf6Zy2pLgRr3wA5yqYyna2WZe9bSZqWuQA61etDe6ZGHeSCL",
  "key12": "3cxqwe8Fy8Arekf8ADMjSRABUVYLV83JduTpTZoUpn52xRhShnGsV5jQThj5fcnkw2RMNUNsNEKL1KoDSKmamy28",
  "key13": "43C4crg4ZqgqD1n9QdNhHAF4qNaXhHpKDgcNgbK8WpxoGX2boAsFjiD97zRJDvDgnrRVaTTojqsLVGCBHHYSR2Tm",
  "key14": "3Nbuo7YXpX3pdJ9mdwzwXG6aaobnunHfXGYj1hLHKy1kcSJ84ZjFndub6uYADonTbL5ozXPc49YP3BkpvhdTiCHG",
  "key15": "sjbzUELsCc6fWLF5fZqn5HgwaXYAgSEjW4rWUf64EJT7rZRbvUiATWXTSA5X5ao7rC4ndtpPqUe4n2m5CYfeNxC",
  "key16": "5KNvzYT7S2Luk2QWu1ur2xHoHUmiwdQ4Cq8k3ySRK5Gr4W159zx6zPFvijvW1f5ubNLTXsqXLZzb9knRkG4Wuh8h",
  "key17": "5ZuVSSMzMBxSbci3Xog7LRRddjQqci4ob3KjLWSSAVdhPPhEVcU2MwZQw8LVBW4frEK9XwTUBDXLYuXN8dE3wBMx",
  "key18": "hr1sgyZicTTsJWX4pUDMNA7SCCJZKWyCfGsMMXUYPSUAz8uW5zWt151sLaG5YNKiHQVo3FLWj5nGjztjpYPoMTr",
  "key19": "333tkiW2nBvPP138fmLUvb2kwMty5aJSiufT9aRpxxmPCSFiNFUWnwmukkM59e8XFuHVH7w3XVTjPzUtLWnuz5US",
  "key20": "5xqqKpkpgNHbJ4prYhGHsWdbTdVAv4BoP3ftGAoe5x4ysrFh6Um1yTQmx9ixq9WmPfFGXhXprEXGC44sRekZSduW",
  "key21": "3bSoH12xsvraQbrpFHFpvTCWkS4cj393bDjkHVZDvg5Wer3L4JcVGFXwdEAXSApZhGSuZHkVMtLgJioWJBkLNyLy",
  "key22": "xHor8naiekULWGm4CtZwhWc7ZP8U8xPhwx74RFjws6zKdtM6J4vVijeTQMLJTXaYe9ppxkUMwtGfyZu4T7jnFuA",
  "key23": "QwGJCE5BZ7d5bRjYvBz5zueK1eatVz91phzJEpxTLzo4vUoc2Nj2BjtK7C82wXMJpxyeqHjtngCYKEbB8Netio7",
  "key24": "2NEqM5FpXwii5UhhcL4CM29WCdNLgVVTeBJeRVd5MFCNKqoSokLU9e8HxfwVM3N8wy5pEFzkywB5V2mteyKpg7dh",
  "key25": "4iUBKcuErtUdCp4xV1PWs2zZeA2kLKwq4UzSsxoSU5o79Y2XkHizDZAi9uEan6TC7m7FUZM7ZVWJt6M7fAbr8gMg",
  "key26": "XioQfxeGEhgY5wHZiWSQAYtMaiTvKEJKNadjm9FrvouJfPatTvmtc3sEzuWpkGztSJXtUCDNGB3xUzVWhWQ2UoX",
  "key27": "D2Gowg6Do5oMN13mThLUtyuZaSYbgwKpR4HEHQGohP3Gc2JNhEywo5FUamo1n1rDnB9QB6hNiAJrJNBqMiJbBQP",
  "key28": "45JYGhLoYKneEnmeAQbW6uBUorBaXznn3wd1mgXifzqQ6m5xcXcq27TK11U3H4fdLNGTRx3uPzPSfmwmAgHGKgoe"
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
