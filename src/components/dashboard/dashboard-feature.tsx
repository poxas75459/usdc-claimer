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
    "2Skpfi9r53FSznbF55o2a3C1sQ46pntXM3tMsG7axJJjCa9SPPzzwUHVh1bFbLGk5zm8ETrjWZr4m65c6HMXMGzZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49ajc5bLpoQGNofV8uceoNHNBEJMaMXbFxNW6PaERFHVz4eCnceADLQrDZ8GLXynbfbDctpU22jnbHJ7CFphK9yc",
  "key1": "3hscbRJE2VCd5jjkNykFZ1nRvHr88AXaovfHJTAWmMFYTFbPHQd3qtV2ynhH8bk3ar8bUb51K25B4MgvxKQo4t3U",
  "key2": "536qhFu4G6QEaxoHL1AWneDa9M99TexWmCRKMYiWZZ6vpnsBaHciTFzsekbXyzEsmNLym3CS1TEx9zZC6m1GU4dY",
  "key3": "4oFYzhVFLxuaJwZPi4q7QdFA1jhwWQ3LMZA35xG2uMFAwbVho8gEKVDoTbfqE3dPgfyM4VtkCQoX7kJQww5hPASf",
  "key4": "4rYWszbgQxzjemW6vJ6pHJhEn4Ba9p9JHzwygW5jCJgZk6Q4QJfo47C1khvLDynUntcqeUykoGpZhnc3oZyyFsuo",
  "key5": "4eAWUU8LpQ348PCSvii1gZgA1JTKsPyrcMME6bydfGDQeRZRxZf3cRVF7C7NfiSUCE6pS9iqoML8cPNDBJ4JuF6J",
  "key6": "378VMUFQmsiMV4igUHXuhxfwPGGajdu7dbtL3NZLXq87ekzXKX32DJUQdfbbU4hgiA6ZeRZPNCbKMLKe6Me6TBqi",
  "key7": "3xv648PEbNeTBLwTKV4iLpzc17tM1rDu76XKabFkjxeJpKm56txx3Vc8yGFn2p6NMGHaoB9TZyk92M4EFhsEBv8t",
  "key8": "3N27WUPkpa74FdfdMbFxbjN1pL94DxFa53PxcBwbfWYjeqSMwwc3qXvskX8nxNop45VDGUp1smvvEB2FkDZDBB4m",
  "key9": "32TkQEJXZ2zZSixFoFKomAuiieDLekBtHc1uN15sjkoNgVTNNpBvxsJmxkrKHbP8GnuKk3si7RrgxDuxNDVQg77J",
  "key10": "4GFoovbkLRzok3Mz8F2gN23L7nkA6p3pAeS9dyhanDym5aASak3mCrnvwPxr66CfcwKdTtQqN6AhYvWoaE1qTFA9",
  "key11": "P7pv6zSiFkExxMHhuphZYqscD5xFNXUcYgafezAeXnWgUWegY6xnmLRhXvqw32SGhxb4eUCm5PQUnH8bh7wNTGU",
  "key12": "QEGT5h3cbTqBifC22ZcgH26JpZ1TVoAfZwYwpqd68Y9Zr42z2d25EmGfkpboGqJRkHrkZNHUfVJ7fu2K4P4d78S",
  "key13": "4oD2kvZprNC5sy69HxCjf6hizGqy5ccUtsqqxTaMvTCXXM73Voa3QZvoqoZ8miPwUkjT53FD5HABvPeMELb8CKxo",
  "key14": "2XRvKWTJU8CYa8gLqJCNeKwVxh64cxnX3mtLKytD8paFXBV5NjktktM8Sx4NZLjSWZxnLPoCEjwHkz23yXBgdp8Q",
  "key15": "2KCNMf9nbS9pKKZwFYtXY71nmvfWSVf56j8Jj8MRD2aVUG4DpFM2SGW8QHTbe4hze62wHJbEVaGEC7wpFDZDQFfN",
  "key16": "5Rm1fh3z7Q5LkYG4cRs3EsMEa1BPdNWshbbonXgPGTaG71Aq5sDD4diSZmwrkQyc3GC7KzMGEqD5n7hgpyQNhSJD",
  "key17": "3s5jBwRmoNR9ByANoBRMLHBTQbZyKU7GT1TgPFQhWTyKnvYZVmd9qrydqKeApAUq3ucJ3N73ZWZZFJGJYt7f99Uk",
  "key18": "3okyNHyH7ReKCeLo1NuFEX6bk8eQ3PXKQr2AJEjG3KokJaDzLtBTvUntDNGhuZr6nMyP5y4f3htyqBUC4mxbfQt2",
  "key19": "JA5wfMbyVpu1JnYrYbcTgYDLii1gsUDspbQZmPxcow3JdNFLKVFEjLSMhofxJPbN5Wch1W7aovuxGvxZyoYRFJ9",
  "key20": "4xmFkUipXNfW1MSXNiA13z89CgrbNvMBi2wRh42FtofunRrqiz6UcSmwcQtUjCeknZjDhuDpfQTLfjUj14Aqxuj5",
  "key21": "tqcsBfJmCvDuhuKcvtxNHGo3XARToLVYU2JZcxdyZ7pXf5qps9PEkegXhiYYq9vgYpW4AR2y5FQDUj96DevkrAt",
  "key22": "SemCh6Jn8wMpgLHASicZGh6eJkcGmQ112RXyDabR5hivWpbM7R9moFz5QZjBZ1NrLZSUnYwVptpUnzEUzmRK582",
  "key23": "2qSojBpiNndzJXjX8NC8AbCfo8dAKEqJJWqpmbqgNUzPE5LvzU8wV1w68Wkd6RhA2VPKYVquborCQHywsdSoRbD1",
  "key24": "2jS2BVkfCn2n6iUtrb48bV8sLu52b43SPWgJDyg9jeY26WGqmLWjTS1k3GHzwUfXQfNucEGogbCemcs7BCRjhdaw",
  "key25": "2Hr7Q8F9i5MnXkGpoSroeN6pFfjH2emgZusndzyPSVyUAfQsrvJNpPvFqfDwUq4dZUk5egwhkMK7HR29J43HTuMD",
  "key26": "55gD2ibV4PiQffCNjzS192ktiWwfTYeNwYHVM9nG4W1njWg5xFLVMhBjjoUkBatb2Qwk8ZuegGYyBtJeEhoY9oWJ",
  "key27": "45Ftc8dneUbvBgoheUQg729Lh4iTZh1j5yHsqDVvLExiuLPzhceRUwtZks3BpSBPK2sJW99hQB3ny7fB6hdoKvVP",
  "key28": "vdjjazJxM8ggShss6RmStStfQMChSVWb1j8jE9qfXe9uRdqcpQ1kMDbk7X9QLWAY2XHtEs95ZrzSHzx2Yk6QkLx",
  "key29": "3WAmRgtfdNpguN3Eht9fJT66hDA7cawzRcj3nAy9jorJVZUfyAJap15AxYnEiMPrgn8bCTdwMTvF2KNTjSTFeYEX",
  "key30": "NyaUZUmTbrBN3rPxVy9qm1cjGc12mgWAfdXY7s3M74NBBVjwjjMWduXipZ6j8rF9UVwgLoTkZH5nCzZWNrFcEfM",
  "key31": "3LriLyZAoyF4H8em5R28Srj2LN3KSBrMNtAPhyHi42V5RDNKfcFvaGA4DRzR1CLzAZdfHqazcpeEuk4yWV5qfiYK",
  "key32": "5kypCA5oAK8QmN9pui5PjxHjc9ABTgVqYi3krHoBbg7hzX7dXVL84KZG6VBgd3hcPbCawbhCYwhZDtcD16rR7ZAp",
  "key33": "3URhQgAb6cy1tdvZHK9JvJ1aPhPdE7BqB2xrU8ebXHAVuq5YowQ23TFUU9qpTqS8guRjQszWzMTVgg8pwHiUauSQ",
  "key34": "4WePZhcTsG7tqhdqA1LfqXjL6k8Gra1mL48nPNKRQZmSrZjbbztGBA7JAjXQfKdUTNLVw7WY4PeNrkX3ySJNSMkZ",
  "key35": "2HNFW6Pc5K1ULUjuTsYmoywG5RMkAvJ8wnGbsQEZ3fmMipDkkiEe6trHB1VEjCRc4ayGjNMxWTxsfYzha18Wa6FL",
  "key36": "3HzzsJN4jcyyknMT8pf6ATpRXojxQ1a1VxQAyj39kiLLNkbYv9sjAFnkGnHSUoC9C8v7mhjMxUVKHM5hfu3ekths",
  "key37": "e4rDZhtotLuze1YKL3w185Gp3bx7zuApBHceoRKhRqh5oZ5RsNNj27j4KQJKTAWUzFeMNLHqmJMGbMMs9RVQQ9P",
  "key38": "4bsLbtNjHTwaRfh9aJZYHjM5eyuPRuCMvExAmTJrAnNSncn5Qh4nXmRSKTWXRvMCnkuWbERNmJ1TKMmNWytgv8Zr",
  "key39": "3vDUpYgJr9fauPQY1tnr9WwUJ626BbE9vfcKmma7ah4nR7pRnEZhkNqFcihGre5EdrRSFbhRiMAfCzxru5FhHPxU",
  "key40": "56vJCpByQDULUS8EmjNfZyFApVqA7Jt4q35oPNwovKoUdtXwHbCH9Qer47c7Y6tyJB9iKkq9th4yN4Aw3Xg2wUSo",
  "key41": "2FkD3Nb6dRTBz34GSrDV1zLZNB37tqf6NKp888QYo49ejSUjqATHAucF9ytGrBzJ8aEsBbJUjt3HkHqyvxYi11vp"
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
