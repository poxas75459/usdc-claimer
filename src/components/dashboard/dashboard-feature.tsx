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
    "SGj2urFssFYEXoTHAipMahRE7vTbEPhyLkjAbNLhHfKijE97VrWCcb1MtBkQiRDqG3VysNWaNZeqvLEm3LEunCR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mYWkxPwoLtFQUoqBm17YU3bSe76CnCtuNnjL4CZNG71cK12abFG6cHMMuhoha8watg6UJc11KQJx1B91L1cpu73",
  "key1": "4XYyZYBeNG7YBXFWevzkPjRnKvSCz4ZzCeya9GbQRNVLobuW5kvNSum5hFXBzgzJFNCrrLo16vVzpZha251Wc6gR",
  "key2": "2hTvdChPDeYd1MWo2ZDUDbJUgasNEzcD5uhkxRYw1XcXZh7bYmRNnYtK7DAjdzVUYcu3JVsrG6N4WkYiMHVngfLf",
  "key3": "RgaMz2XTF6tkh7F2vzDsW4PyKQReQezHL5nPE4z2ayNPhNUvsRNWNVCCLRyb6XvnfQQftmA4NdDkYJb5ecs1ERB",
  "key4": "5GoNg38JHty8oruzUnWEPmxdsT6PnGNiYmTxJYTGiGT6hMN6RZYZq7j56t8Z87ARRpnTfLz7QJKRcwuKizQoJr6p",
  "key5": "Fs3Bx8qkchg6USM2zG6tsP51yzkWfywFAyv6yv4VXgKTAKNq8zNCdb8NEGtF5bT6PCaurchYQTNXc4pwErAVdP6",
  "key6": "439JypAQ8tSeQNgQEXmdtg73hXhWPA2jvjfZURHCdWCrTgaau3S2WusixCpS4T6AFaxdYXSwNL2gP6SUmS2YzjQL",
  "key7": "AgbfPja441drCRn8xXg9aPXpmtbsvi7tffZ12a14cxKPVrL5gWk7FevFfUxwAw5TxBtoMyNcwPQTi2UMNTC5MKo",
  "key8": "4DGzwaskvfKE1vYFFZaAGcK3dch5LhDXr5ytv6HiajUC8qYB8KeaTr8f9hALNEVU5LgyPwp5dFJcAo4ab46RP4mf",
  "key9": "4VWcKd91MYRocLiRfGtgM8DS3nzqNWo8veVM7VCVptfTXaQMfLZvFj34DHweKULLT4YGVG5mwhTz8za4sH3ieQNM",
  "key10": "KcH9oo1CpBzGDqCop1GLZKYqhqKPgPotZDmCKjD9xfABN2GyaTVoWv1MrUtTEieGVgp27BsX5scupzDMfySkL5k",
  "key11": "4RGgwpmjf2ABhcam4xhJYQsMpPrRoxW2oHFrQXj4freppt1fcPM2fDUzkPaV62YqCqsypLH8cpVbtV6si54BJ65E",
  "key12": "3MmhoRYToBsTVgXcLVWk3PYW99iKaeF86pePZiCiaeiTFeV3QtA8YLXn5HhA86FvTLe1844BiYe6iQ547oYKM7jo",
  "key13": "2iW5mfJvHBFoKSeu3iVaK874WmrYcPiLBAxMZSSPHjG5b7KvZddnvkQQuqfm45ib2dHXhhPmZcKRk8jGKPmKeRw3",
  "key14": "LicUqNHZ1LkyoUk9dzJM1e7iHxjNiNkvvkT9K9Coh1NqPbZMy1Z4U9ChLq6QXJXDmsSxCHEygqiTpEwUUotRRET",
  "key15": "HcPPR4i2Y6d5Lmuxk8LcbQB7LLvuMnTYZsSnzG3Fppr9JTMfw6XF9rx3fQfkENWHyK7z4qLWhn6cvJ7zAGzqYoJ",
  "key16": "2EsztwSveRHAQLTh6sFQuYV46ojehv6y6T4fTsm3JSKLNg46A31DWSpJKRa4U2Be2W4eZjN7swCJ84xkgrxgYypf",
  "key17": "En6yZr7TssYgCuqU3yn4saUpbWJ7ptJM4gbedxxAgNMNboueJ4j2EsZJRkhXVKBYQpdZW4zb9aXUY5XDZ5JQU5D",
  "key18": "21RK3An541DLwoXTzQT91J8QjtJfxZSKHUc6iPJE62WeyNGpT1TbLcTQjbVficaLFu91EbXdvFoNcbiMi2ZE9NiC",
  "key19": "SnJpReqicF7MeHs11WeU3j2zoSH7ZSAK7EaBp8eahrNrf98ts14F7UmVju1aRk53QNsKzx6b3z9b6FRaL4ir7mD",
  "key20": "4oUcaDELrUB63co9AP4nH2x3TFoEsMspGkMr2cL4xDxW37TmcPiXrvqVCeo1heyxzjvD1USjvWb986dExiduEgbZ",
  "key21": "3KWwMiXSHpdLVn9QSwLhukSo7HqeX8XohKgNd4VXc4oY7oHHcgAuJZF3PVUETsoBEnGzWcFirpGZsCP7npSAJGtB",
  "key22": "21DPs7WYuoJynkpNsgN4ivyCKn8D5P2Abme8QXywNa9UFjM6CXrc1oumwADw2pMfjAsVRjV3G2XX4qQ1mxfzztBf",
  "key23": "2TZGzTRp2TxLpnxJ2GZtTVZqVdYdQMFabykzvCc2rqphEi7Rv1fXE8aJQ6ep38duSnecj69hcp5FLyZyk4NwxuV",
  "key24": "3XKKNav446TRpUZmZtdrSDYXyCroFLrwmJayKVQiGcjAxWUFXbYmX35T9C3Y7GtZtHtSkgbvdqW3LJ6ESN2jAQ6s",
  "key25": "4mefVWKiSFEfD8mSLAoPjbrr7epZ4DHVJb11gz4rjLpqcofnFwQTe37aFFKsjdJoMeuFHwHyoJThG7hQmA5d2HTr",
  "key26": "uvRKx25mLYWzaveeAPQ8ZA1Uqp8pQmF8n1WHiKAzw7qwFifV1cx4G4Hcm4KCHTPkf8FMxDnmEz8jZWm6AgMznEW",
  "key27": "2RQnNtQcNADKAhfmkGtNcZ4Nnj1NyEv5R6UY1g7sEsns2xyQ2qfzPb7dNVqmoeQXxjrakfE4486dgrXwCkaBdC2",
  "key28": "3gFeQrDb2Gkup5AKXAEGEgssV8mMF33QhYVTZXhYqCUqDHz9ErHmCmNcYKVFX3meVWfLcdWzrad4Cb8FPJzLkYG1",
  "key29": "2QizdNESaKKHdzThhQxyTCEW6rax7R5PBgzUn1Kaheh3mZL9gvCMbXKPvsVD5ic8YjCEhiHWBGTR1qSCmTM3FGQo",
  "key30": "5PBNpovmdspnCzSGxi2jQnX978BSS63cFFv9UKCRMCFHEZB2XoMcrQWTCQrEGt7t8ekbuqZJNzsuhY8EPZtr1nVa",
  "key31": "4mqnZUdLLYciZ3hET6214U2xP84bxAMRwAZaYkVNjcuu6TonyApb8U9XnXaqgXHSvueFnXThCPoF2eyQdYU9gv2h",
  "key32": "53ooMkLABBVWN3Utjhwg5FoZa1vD6VbGeMK7fVNjUWFqvTCFGLHjni2CaExq74GJtcgBqeFhw3XsbYZBpSYWjCcw",
  "key33": "2YfJc2f9dheQM71QHbmLWwAFE1i1A5WsxQ4GfUhz3rg6T1sx3XYemLfZ8DZpcGCNWgD7XvCA7zY5MhG2ghDRT4eg",
  "key34": "4iQRqCGGPrzzgRxJV9MeKq6ND93wbqFjDyRUGwJQj1YFqEZ6jNMNNitQ1x9oEinthzBLgFo9QKZ6KgonhemGnwDi",
  "key35": "4XPaGPoJAA8ncdanN8AojM1cEkbVAGhMQ6XE6TQxzsHcWQ4BkcFvc7Ju6NiggMYeM3wVVbx5F8PfTKd9tLxnwfHE",
  "key36": "3BGUZPrJqjXPYVQ2E6MMTo26xMZgKWR4KRxqEfEoidD2df5D9DLJGGNQQVNDYi63vNidrUAmRGaUcaBBAcpvw4ki",
  "key37": "4X37bBojzC7LQLnRQD8oyBveoCGppyEYYkSPpzkazKuCsM2MRYj7EcbDPEjeZyQJit7UriNz6uhugeFhGTBopnMr",
  "key38": "3oQigyCUjBTTdJgwKAwNyBcFCRnQp2uuPRXkFdZmo4crD69wY86fFDcbKB4NsTCNZmXM7neMUceEL6W7rp1JQ1eu",
  "key39": "3Nu5qi2LzXBNShNjQ9UQpxiG6kfiFCajy3awYurw9nXw9MVz9ihNRgEqSsF1FyohCtXxn5HWKou9qBN3rBAoKzfR",
  "key40": "575KhpXZ78bzV6bgh8GzJy9pDwQ4Lk6Vy1t461TvHbKis14XpkdSfkFAM741MLtbUSgC4atwdL8m3qeAoEXXLc2q",
  "key41": "YcHsw2okVy4dJYeEWkNVqz33D2SuQpgnombvMcgNvEcbzwtPrpb3rYmHx9r17mafpzshDPzBcuvFN5CYjG4St1q",
  "key42": "5DSDQ5ApPAnUHy24Nu4gYDdHkujzdxW1gxsqWcYMF3nCfNewZvvUFeP7reJPuM5NEuEmmGG435HidtXNxVUcYHfM"
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
