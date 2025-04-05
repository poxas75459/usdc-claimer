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
    "4UL8WcimA1vZadq54DxQh7A9cKa3ZYy2fz6wFuRUsUM6oc3dXbxRJ78GPZKB1rRNE2CuPCvPV7svdnYVocAGNqjo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XQGDV8xQm47tiUZPLAKf2WMoXHbBoWQRNbgKSGbwN547S67DFYx8yhi6XVNeTTW4972i9d9KqBkrKEhgWxyvz9p",
  "key1": "5RWr9Xe4jWD7q8HAvNVPD4HWXVwzEamczkN69jPuQtanZLio1pvxdeRQPghhTLYsVxLGEFBMyfcdqoWMSzNrH47Z",
  "key2": "5ho4p7WmxHZykk8xDZzdJVfr8kfdXopjaTzJaZNh4GrciAN81GUVdzjrAVGWHmfGjY3dLsDLudaobUVwGhCfnER",
  "key3": "5nb46tQEtWyhpbFei5MqP8UK1S9K9iJumAgVE3UWzDKsbvWgBeT1s6ic4uuDzKYxdUd4XBikRaR5Lgxgz1gCRdTw",
  "key4": "29bCdiiMuS2UToQWJhF1V8ixo5dMHGHWW6HmuLo6WMANFHy3WkRtYJ4CqsCJYzVmihVKviTLN8xEadWKfbFhCt48",
  "key5": "2yr6aWSJY7VgucUH82hRcCDR4VBzY2CEFSGPSPAQNCwhYTE4e5Pb52Quzmg1whkvEPs3R7DbsgvceuerbPbQqgcM",
  "key6": "26HUWAEQy5Fjt9GdVniB2VgSNJenaG84aQ5MowWVKArVGew3MycWJqJLbZ2dhtJdLzmZ3yMqJ82y7BgRKaGM7qNh",
  "key7": "2ciyMnYaQYPLmoaLkviAtCfEYeFDyakMbxrKRyhhACbh2USqNL1KjTmx9PCFbQcaNNfkqqhWKZJm879rexqiA8oz",
  "key8": "yCk2DqKpCEQ8Jptoo3hxGpKt4hFNuUHHpWwnHiQspEupKRj9aBaeUtjMLiUoo5bqSJpeYdfZNUHrBe3kyRiVjQm",
  "key9": "3fB4NsRHaJjUehvJKNZBkK4EEJ7xwBqdZ9bDMDcgioPw8DDLXteHc5mXbxcuAgneF6Da1cNvpYcpuoA1KZKm5oS3",
  "key10": "4zmjecv4mhZCBA6Zz2YZFu146DpqpfJTXv7aTdD52wVRjk6wuRC5gstgWG8nvtv7a6xDJ6mQyY95oLGAajCrgMor",
  "key11": "4ENN282FDV8KYu3vxLgq6RkzHsDipUvFeqkyDLTSK2MRZ7RDT2eZkAjk3MkgCwazYveDqazEnsXupVk1ZqqTsPKc",
  "key12": "JfbRr6i4yyr5Jv88QGBbV6nUz4pTHJve7J2VXjam515uzgbomcRvbzWHLAhZc83eAqqaU3AxrMv3SwdaPeU3FtY",
  "key13": "5drCqV5PC1yj6uoNpNqtvc5SFoftPicyznYyyARKpp1kWygwmYNYRrVDpKF1NCGyci8dRseriMPCjncdr4DBUFgN",
  "key14": "51FMR8vD5aabJq3iMQnJRC7Ruqv9FEvNGQTMKojiNY1TvkbLgsK1BpfpiH82sZo4AH5dFVw6tmtqfKkmpqKDpM86",
  "key15": "3BQd42eZH5BdPitab8AT2wE3Rt1Q3c1ed4wCYJLy8Wqq1RwPXKC2g8vYt6Tp2bxzWrQ2wcM1tPgLCafPKJ6hKoBp",
  "key16": "64nERPDRsy6vtKm6eUQVvgV3rUT7ULLWaL57nQ2k6gc7nKRXu82NnMLuhWYuZ9zWVfquUA4NyoQ4SFhEz4HWZcEe",
  "key17": "3Am1h1W665tuRb6YjD9Y3Q1NELJQtUxj3wAmMR4xBra1QpxgXb441pWZsgipRxHVrnHHpLU9NbEH8GqRbQFimnV2",
  "key18": "3iHExxPKKSVQduJkhzwKsBf8hB9mYvEnwgAktuSorZCKdbdTRNZBtCKfC9VxRzjStwGoz2XwWRASqyhdqKJyjfSV",
  "key19": "635W3nGqE5Fo8D5fLVPmhA2dUUWKafur7DqgQxsLiZNtCefmyv3j8HepwRK3QqLAcTVdPXh1Svh82PDJaGgXn2vU",
  "key20": "5bFUC1L4fDRJ9jNN2qUeCx76oSUAaY1taxaMXUUs8JUEBxwe2rTha6fKG7QJT3yftJF6tVEx9d8i1frAJhhdapQe",
  "key21": "rGZJ8kx1yX4EY6j1S6xGFko3nVAgYLuHaCd73Bq8kZw1P76hdbMYK8T31HStDAeAabF5os1WzZJJumkgzFmUvEL",
  "key22": "3aDRDWrYtvR1gEVwYS6HgpocN89nGsLmC6E6R1BEhAAn7uV9gayLeCUVy1ccvJvAYgFNQfdH4FtjYBApvHKT6wzN",
  "key23": "2bpbmQqBRPKMpXHsNXZeebTxE27eFTmuiPH1uFhBub4fjQ3FJd2SHQWHEXjdyRGCnGLYgDMtvn4946hj1Bdbt15",
  "key24": "64dQtNq2B5Mqe1VBLPKRxQdjQdbGpGGAfUghKreBfJtczzruZJaJjJHQfbXGhUPes9Hx5vbGyQRVYwyuqi6EMzJz",
  "key25": "vKcVCT1gp6eUvDg4zHDMyquw6PCZ2d7t1673ooQMNvKSWCY3JRbQuTGUk2ftaLx9MkXf2XxxZKhfob37jykEKwh",
  "key26": "3A6pBTrj6Le4mZqueoHmvaoW91ZCz3yAqsznXgZnypxuBuQKHoXTfkZijpgt6Zuqw8pRog3g512vFR7eMVmAKMAb",
  "key27": "3e7D9pqEafUuFMnwCiBDq7kgn1mLu2PgeozMy3YMe4cNAvNqstSmRePyNW1j9e3xKKc5exnfefLb2a1KEoorj1kh",
  "key28": "3GCRAaKsdpgaRmChWawvuBMoEB4YWPeuA3mokuipfjHSETKgaW9irXuUqh7CpB2LmHhHgXhCf8L228c1YexBzsdt",
  "key29": "4rDFgyBnPGXjMnYCo9HRvxPF9GhnvbuvdKSrZ4M7PGFPTiPahRHezx3VaFW3FGmeG8MEmzEgmH2wzRG1RW78TgNh",
  "key30": "Lo39vhdR9txNNc3JMvD4KyuLgn4E4GfKP6pt17D2CtB5uR8kZRz5X6egHMJYCRaW2n9sqzgShL3WEBg5rkXtyPC",
  "key31": "45LdkVZrxuc62JsGjyppLjUoxhZWZ7HJJt2ozVPHnQ61ppWy2kF4m75KdN6F1cscjTfcpEktLguSViUxNBg2VwXB",
  "key32": "5bXBfYMCjtSpDek5hLRLEVSQ6SyXkpnFub8rzQhLkGVMkCJKZqb9JfXWtxfZNXkBaLArEwy7r9dZMrH35RkZJxbj"
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
