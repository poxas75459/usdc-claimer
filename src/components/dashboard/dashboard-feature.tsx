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
    "296tA6HQBR8aFWuxdLtaEi4yEJE76imeWHMrSB3GMmigWT5RXXC26YL6uSeB78gQC4XzRzus6QSEYgsC8no3vmRf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29AZn8D95ygfiWgHMZtADBQFSxpqSPpWEbswCArEPYVtXxU6bABYzNp9PzuLzvt28RDbTR9sAzpFUqdX6ho1pFb8",
  "key1": "5KuAdRBThuaAyCCjpZ3p3QYhRDFu1LqaeiaaQgEYu5i8cnytXtG3VkL7TuoTgAtWetrTtVXnHdZq1G2acCixcuUe",
  "key2": "4qqB92KqzrxxUaiE73EQZMHaS1nbcgiHTmhntxCLxSR7qa85B7TW7jqsKTfTudrykv4qctE7yW6cjbCujKJeyrr1",
  "key3": "B4g9AJa2TuKuoZPnCSBHGu7K3xvqH76bGDbcWAg9cGkyA2Yh3wAmvPZ9wAgqck9iaTGNNNzxXU262atddWDoGhT",
  "key4": "4oyktF4AxhwZF4uvUnMZ7r79SKgvFAmLDp1X1h6YutjuBsZNTKAPgpyS53ZX8oBeB3tZBrb4u83vGhXLY88zv1j4",
  "key5": "3XBvjc9yaJU4b95VS4zTqRDVSUWEs2qNZGVCzr4hWmAKkiWgSso9G29hTBHGXfyHdPqv8WBWkseLhtXHQjsJSyVe",
  "key6": "37kiqrfsqzdKNaYU4riL3WrezaqRFtTAPBvUPijaeFXwKdRFxkMjAhgF2HddWPavdzyXY47UJAWKK52rwWnHGY6w",
  "key7": "EA8efpbmxn9fecjHZ7aejK9bP8KaY6JkBKAs958aTKpBARGrxiGnZZWye9dixTXGuVEMEqn2cxZpppmuz8mwbF2",
  "key8": "2uuinnXA2SynWd7MGd38DocbVS37JWTY78hs5RfjPHZshZAn8YuMYK9pe6GLpu9jEXuUTXVng7t9iCQuz4EKn9zz",
  "key9": "5L1U3Wi1HMCL53uETBdLRcCGYs5kXNHQuadwAKgte62qeczoScHNtPjAf1PQUt5sCSs4k42idvqVpBGcxUe21AiE",
  "key10": "zsQ5ucTkS9ZefR1yLnxNgu5nhBMWmWp8chYJCfP3x4WfyNtJiGftAxp7zvja8Up3ZX36MjrWpTQkSTCQbmMughx",
  "key11": "2sREArLzs9CN71dmdZsiprKFchUi65tFD6hHUpVEroZZFKsqa1zKK1MRCQXGKRHRVTSpPZwAFExEGse3pQsQ5mt",
  "key12": "2DAJ8Hhg6mnqtdQNzxGxNYPSwCCmso5Vb7nBhGttJVpTUusWTygReoeoXku3NKdvFNsn7FdcEH4D2BqTo3S7FnmA",
  "key13": "5iWsCTjYpcQc5gzJZpiuJW6CXXufpbwaN7j95AmxgdsyUhvNoNDua21RSWPon96FGTJP6XPLyFL3ccoTHwtxfQYN",
  "key14": "3MSuEeer71iimEFciikj6xbQ98SJYULnq17ooTqf3b8XMKgoZmHraoPKsmorZC8B8xiuG6qfPA5GdnagjZSG4ywN",
  "key15": "5JH82kbiEC9ycbKbGSZtDvXo5mT98cHhdEkRTpTPuq5oc1jjupmcC3L1fWuKx5aBNnN5kjJNed6R7oMAsxh7JuHn",
  "key16": "2kUYuUN8eYYksRpfj825MntQFZimRNurP69GW9mttNHBMNEQDyY1zjiEUfrbxEsWDoaLGhzn2bFSSpRCZKzatisy",
  "key17": "3fn8zaFKZjk8aiwGeHbKp7G9q2wUNpsCkddcJfBQw817wBqkvJ2RLV89zHwobmpoJhgezx1jQG9nsJSYDkaP5KdX",
  "key18": "YHR1MPF65T6dsGGmxwTBzXRvM5g7WV4MM5rmmasVYDkY72D34yfVmUAwQsK5edXrUR7s4iASUGxvMGZ6r4zPF98",
  "key19": "56mNDLNEdPzg2CH3p6jJeLyYzrvpkpUpw5Rr5FDNzYUw1mdLF1XZXRaqnQJw71y3LfQhaK4ifXK5CuCfh91faYjT",
  "key20": "7gz5ywT5mAr6CJPmPsc7E2yAvFEJNvQXBkyL7cLVQMpmJC3PaudZimyJzJ3LEnUwfTd1ECKWNk4bUWo3Q9FaQ8Q",
  "key21": "5C9hjHCre66mxCWtJaKgWrrjUxrunbh8Uo89BvUwoAbeGXp5jt7BWGu61ZKqkUzphmggM7zSnSr82ACP4NSMNhbB",
  "key22": "3LkUn3JGiL7a66FF8TXGXWidBuPUuc2gimY1gjJ5uBSeiRPLRSGWPFn1tFQ75JrB9zRRzAMYiSCh2Jv4rmLGuggR",
  "key23": "5XudVEAWuH8h9zgcqhWEFLDsoPnWeund2xt5tFom75V3Cfc8XpRAMicQvLPZGAGnVhFwrrbZoYqGc9ppbmMVQGLB",
  "key24": "4nouF8WeQFChgEi3aiVV2k7qfPSCAH8Udp87GdnbNRgabSyfmr9zyHS4VAGZo9DodR3pZVR8jmy1AKA2Qndcpurb",
  "key25": "5Z2xzTJgMKSUUVuETNKBkMrKPjXNj8bv1AYatx6jNEDDk6P5n1d2BMady7jfwj5yDoVamhACt2YvHitqceTsfpDK",
  "key26": "4Xs3jxDReePAUd1GjAQMCWLBi9nCciz7vXZJvQjpaRt7bGWxu4EsjA4qcPXBPSe19DxKDiZHUNSaFyYnvxfDZbGQ",
  "key27": "49BameZKzGAL4BPLQLYUS2AjJHyxYe4oTh7LxwQLPML6xjjxvmnDxgp2u7Axf7nmYu3CVqhPuGhQDMSr9uXNGrs6",
  "key28": "2vMUgR2A2yzcnG1M8e38pcXNGByW8i5FvV77mA5ZppWM1jaZf6685eGwUnnyCHLBYqRQjBafkD79GukYyUnPTaUr",
  "key29": "4xEn2xvqsUiqEZFAb4vDNRDvvPvomF6rkYRE2xEFy5xasvd3VGQUjff1122Ezfp9Qp65NQ2J3Sehi6ds2DG8hqew",
  "key30": "5St33wHsc33CQE5dZam9HjrXvBf8u4Y89va5BegYaSWyC27qXWebrPh3NVjft3hjH5HvKpwEVESU4ZrecrrDqKHD",
  "key31": "5odfo3uvdTVf8M7ewSsFBRZVBjHbBLJFwz5nnr17vERkNzrc8VLdMExmeRz1x3gebQ4Ad1N9uh1h2vp1kVhnMJL9",
  "key32": "4sQJsDeHKbZr1XZmK8KaFSbW8hMeMEMfUFENAtdWRJb6DyngpS7TNg5g5QgpYrtovfBxWw7uVrA2bJAdCLHdxFFF",
  "key33": "fJJ7FyQBLKg7UrGTdyWE6fKxGBXRQqBakE59u22MT22JCCfiikWLgWtWVGbartcopBtg9jrcm22R7EK3yaeXhQs",
  "key34": "3rBBT8uVcZJ3kRQpFBpNcvTFtFEGjiP1U5RovRNGAfDkDcNxjEFxEEPSi6cbMPm1YtcwnkqrHcnQhbmF1zZvxGNG",
  "key35": "4qU7xxrYawqf9YsfVi6sDPNBCEtJvrgZo2jXAvDCiEj99DmVnLdFr2ZBt2qrdN7TnLWosfnLLPrHRb6LixFzCfv7",
  "key36": "3xV3onzte7ViNcurCGLSV5fhG2MvRF68SnH7um6dV5jQiVxGWd88fsC7XwMT1drGjoqbfzJHoeosTe78c68YKkV5",
  "key37": "3GmWHkdiXAMhhr3NkkWCnPkVDQ147iQeT6DmymDPwqQbe6NLudPGZcYjn2YMb7szf7bGYkQzsWwu7F91fhEw2cC5"
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
