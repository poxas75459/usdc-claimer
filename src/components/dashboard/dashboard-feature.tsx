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
    "3qRuBwfiB3XVL3LFXERR33rozUKbe63ddzdqGQtZe41Q3aVXCAS6zNcwadzGqpMggCTRYhApgJPjzaXyf4CENji4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YJtmLDWLHM8aFfeWZ35GTvwzFVbobdb2ZJBKzxPYk5mhYkkSPP3Z9fBaY1Lb3biciTtnFwcaP8Vp6GxpVDJxEQr",
  "key1": "3XyN2ZiBfpaopiAqZzX47LFJT792TnewsmuyXF7tofyehvNs1yPrS8jtZf3wp6cxx7RfTX4vhN33jYkvrNMwzPHn",
  "key2": "3YaXAKkCii63K6fBjbWr7Hy41GGt5XJMjuvTRoN1QuLEQJTTBceA7U6nqM5s5HVMcBhHcmAnMWwqoXdeRPAsWDxL",
  "key3": "GzQi6rGCbKkcCUCAD5Yf5yz49Mww6ygARE8nxcdsnLmuNsFo5sgfNZ44s2Cx8vWDSKfJqqzVL6esHjFXqPSrPe9",
  "key4": "51Ur6sDpiNoWJmQKKe9cveAfuaFZE7go4Wxdp3YHqvE13iaDCLfSfffjQqCTqLX5nxktUe7UXzAPUTracjpBYhRj",
  "key5": "4dJYxZ2Nhx5kXM9uRpEGMfw1Ua8fT71brUtAd1kgGeys72117b3QUxRXdEgm6R4JTn3Qe9B32k89FtbmW8ufGD2o",
  "key6": "2LFJ6HLuRbKCibjJzBhedN9pDAacTztYuFpGUiJ6StCmuHnjMXjxA317gf31RQbKBe5cinJNTsVfRjhuBMdBaqrJ",
  "key7": "3YjsJoWREwoD9rr5ekiaC4rvsfSaDTCFoPJVoHaEJyaEQY5XG8rVCP5o2DubXNWxsSfbirwTq9KzmxXqBRYqtpkd",
  "key8": "PfZFuVc88JfJjBhhGXNSfADAPivJRatA54qdo1Vd2cGKfU3ZMxtNfMhxyFboao9t1nVYPmc1a9P4H9UH9Yv2Ei4",
  "key9": "47cNyFudgg58p69c8Kx6cfSMtqwKrxaveMbb98XCSjRtZYkS32z921jFCpfbYtMuBML5hZ6hzhPucCSrBxYUBb2t",
  "key10": "3oL57PKddZjt2r6hT39w1pqgyTEU4zufVAGE4FqFMHs5cmsoG8MpkEmVJWESboL4gtLn4sgRgMvfrCoQkbMqEH9o",
  "key11": "2u5cqUjumP48Z9tpKtz3LEypKHXLdvzHYVA14wJzhwbAAk8Wp1qeN7bWU92PRhuNmVfGNRbQzgwdUX2qSvYgisKx",
  "key12": "36nvZJo9jmFXvDS2fwpWR9rmZUt6NohDwZkA2FhxgA2T5iuiWsqkZiBMphoqB4r2NFnNM84Kka3TtLvNzwbFCSGm",
  "key13": "44wpKwCNS7E542K3qcee9cod5WyzNGRSAqRv6TGNoSRGpxpmCrjdUBJQKnQCs3PnTbitXwavXw5FJo3TVbPGMUKy",
  "key14": "3Psm9SmdAHjA9FNPrwQQA4CiG7ok1qV5a1MF6xh3mwA7uo2CQTQMnkk2EWt3D9nu9p9vDbvDk1X9g8T3FT11TPfb",
  "key15": "5ckkyfSFDvSHuR8xVVTspcHe91dhu8AWnd1MWM1kDFQrUHVQSa9Um9YeEeSdnq85sR8d2jQQB6bPHAxQZLNkgLfh",
  "key16": "2iE5fy57y5636UX6fDN3BLsMaNRp983uYNNSgpG1Tt8HX7mbGL3nxyxURSNk9FEStQJ5wT5G6Jse3gPZmNqnCcWv",
  "key17": "5KgTqGqt2PmwLzL7whWWNpX17pDScHv6kdBRdpCEfH7D91jnxuopbNtUy8QbWXuTg9ENB8QL13P8iZUFbEeTNkBz",
  "key18": "67nnyiPtAexEbY17LU6Gsf3Z8gq6BscmNukNE9g5X4gV1wLPzbDcAp3iSxM36sCf5sLCLUo8Earkj4fA7aYEWVzS",
  "key19": "3T2Tzo4f1hyKey64UVZHKrv8Cxwu5YG9ShGCgzcF5ZPGXhMFwr9kHP2HXGHEsxjFm9FmMGuwjPzMKcp5pGM4x9DY",
  "key20": "2UgtRzr4F1LzAGAtNXUsigyX4pX89YtgnLYnJoPGiMtHJ396CAY72Ba8Bwmv4nBRYuDgcQZ4mLfQsQAsr91GUMZY",
  "key21": "21zra61ecA5CuwU74418tJAVSXZZU2JV4L54es5QJhqnQf9wxLqXM7TRvTCenua9hCKJutKB4gjsUDHfVuJSfLD6",
  "key22": "57vubyD31X7bFJYRQiPy7GgBKKGBmSf1p6akNKkrVsuEQj4mZUto6R9DgLghH9V5hj4SAtwYPfK3tygkkoZesyYp",
  "key23": "5P8saE9Rgg91j2AqJVFt28Z962RPPFDMtWYPVyQ2nTGyCAEiTp1RyT3WZwhJyx2cXSm8vasFVtEvv2ay61fXUUNQ",
  "key24": "3Vx8dC8mFzvRVwFANHtav5MCXvYWeKggvxGrTp9D7cpM7nJitniWmoA359o9Z187JwvzShJWwNXe4Wh6WiKRtjdt",
  "key25": "wXAGZ9VzdSLonFynoAibhBKxNjK1599QR2fGzM71t5jtgZTEXYTFUFzdvVh83362bJbBm4pGpySrHrkesFiuVbk",
  "key26": "3X5unZ7MuVfKRXEzpw2sf2wyYai977K6WukweVynJRR7DPrKDP5c9KrdXKCcArhY5Rg6WbfEbWN1oVBeZJ7JHgrk",
  "key27": "2u7ky3sYUrqNbKC7n2tSNvvhFLefxxEDvGDEvntTAwC3HgWsKDDDXQTidt3gNN2YzfWMUL7Cmbp9PWpB8ehdh7dH",
  "key28": "4h5BNSDdRNvMyVW1mrrdw2KFLenmMCULLfNJnb9BV4GtqyjYv3UPo8MbGBHU49J6Gqkvut3QTFmnwY8TB1VpQL1j",
  "key29": "4ivrvZUXVyKbhn4znpAW4hXEpNYm6qJUrKLjfPdAtecqaE2R25Na2JcpQkuntJmXV3KsSerSJfZguQWU3ZDVzMmY",
  "key30": "AgyczYyDGt9F8h2p2tzREezrMxJ8e6mNT2NjN1KegWkdeYK6Wg2DgdNfPBpfeF1JmFisT8qLqLUshQPN5CQziEk",
  "key31": "5SqWczEDX5q41TpghT9M7KCNm3JTiVzWHxn1Q9FEjnnXdaTnaPsDQ69asobbPWznQpkuEvqcEPAxN95he8T1DPrn",
  "key32": "5sN7s6FJRHuAR6HMDgLtJZmoqgxbpgQD1UrAq2892AKK3KJQVxjGfaM3BuLHXi9pzdUFQ6eiu5rboVxtc474PAKj",
  "key33": "2QtPaf5UtMZVG4oBR65xU6udQp23pWzsw9xxVaJTdXzgCwxTF7TUqRQVKd38DCquJ8aMpwzAERz191bkuVntvaKn",
  "key34": "3NEpW4jrMGJB8gChUMz8jDPNRQcayCdMvQGP695D3AoVFNjZrCjQPMhYp5PiJeGX7q8FhAWmSDTzaics8eFNTEzz",
  "key35": "3Kv8hoW5snt29WfFqABRCJLvMHJ7y38DFsg5w6tBEUEEXoLVXY32d45XgetccnCYGPCVh8TjZ2JNTuPJfQLszkL8",
  "key36": "4z53AA1ph1idFFVnPvHDZqCaBuJmKZRFeGV1mJfLh5YfiEiUGPTfiCpRy928t288jmkEkHeuAxV39FQpooELFYHY",
  "key37": "FCvN2E5n6cVUqZS4fmUgUDXBiS5WynMLRihUjPLrKcfGeo9teW3ejeVWpCqV9G4StDAHs3GLa9ND4YggAeu9Lqp",
  "key38": "2fXU1cjYZFLEWCqeDb6QGVqBzyYhjM9KPowF2abeqr69AS1Y2eGH22KMi5V4xGStSBGJj7Ck9xsFEWB6SeCh9w9e",
  "key39": "NubpBYBTRnFRsnUwagWbPqYnkxLtwV8YFM3WRtp7gTc63HcCr6qSKfXikdtXtvwmVKe7NpfnFctdwbZ2zvirkVh",
  "key40": "2PuUxWjHgXNKU4bTyGmbUQbmAKHP4qc2Lwg3W3XVaHjUXqkhnQ7xM6QwvkDLtaRwW21MkvWz8M18fcF4k5EzU2jJ",
  "key41": "2HYpUB9tqjAXsG72g2dFcsTkcAjSZvCGakYKcyXxkoa1r1engGjBzbRygpfKLPAuQcai9kGT3SXZwGHMjYgnBFfN"
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
