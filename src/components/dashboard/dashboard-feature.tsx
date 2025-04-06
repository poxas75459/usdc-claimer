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
    "3bskJKJ7HUerBakSxpx8tH3wmsF5xLHy8vuCru7bf34DcF4tcuJVTjQ2t9gDAZjwhx4wccv1iWxxEbfmTJ591wCh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Dnty3C81MDYumds4vdMrZXGd22SMaaFKvL5sYgTKMmjKSqHFmkUSyYGReioDCo77N4Qm1sCCRcmbHT6Vxvd1s9s",
  "key1": "3WCDXW5rGvxyRhAyh5AjY4kLry7c8nqZpXHzB8Zku3TsTMbXT2KCmi5HczmkCHgzyNdZ39ptCyjTN6NGiSq2S92a",
  "key2": "JGCvNhBDpK5bpJoGqnu2gk9sJcCRcFK1KipXba3hP6vaQzaPprj4ZpR8n2d8kQKWunwoo5hcp6Czm4VJVxU8MAG",
  "key3": "25j4r2VH6CmZerAUo6JxakcL6uLwfxmoyev1cVwhTZ8X54b2m9B1n3T2TmMFnVLaJgjD1HzaUqizJrwRKPsTTYuk",
  "key4": "66g48esz9jf994azBM4AzoVALyqjwFZ862L1oJ4bgwFxn6BuEHSHCr4E25m2E7pHabA8h8LLWp7a8nMcDFndUiGM",
  "key5": "5byw9icSEwPf3rP3ceSTzn2dXoXoEF8vs3WB4NEsTTrfSFF4KxPgVBffpPu2ZcBjb9481xekLwfGQqgSB3JfWPRS",
  "key6": "nrQsg64iT2R7jZXWkrffXJEFt4mLJcijYymuhHZVtGp5aWRLH2KnPRfhzyT5MCSfrhC4wuatv2A4kLykECq9H3V",
  "key7": "2yrHWeL1iJTBa4g1sCxFvAVvE6nP5wT1DxCVzhGfuZCg2nRywP6gdi3xYwL2xsYwSCDuDH26JqR7HMR6cCpRNmwv",
  "key8": "2yg6rDvKpSCro94wEb3CR8od5K2J8sCyad4E8M6wN9S1CXKsEM9BRSK2qPsrybYbosSk8eXRZrb3Yv1knhANkmc4",
  "key9": "4xKzGcghJ7FhHdk7zcKbuqtz34XRdLiRv2mr9cPQdoBNLZikUAX39TCuxB5ph6TGCFXNq7w8t6fiQQNjSh9Yfqqy",
  "key10": "2FHvY7naknCdL9hULr7DT5QcuSGHcCJsV74Jjy9oZKx7PM7D8EqN3mgb8NJnj5GnQDE4NyWVqGGwth9wghyw3W5i",
  "key11": "2XvtXEcQhHt1Hscf2gP8qYzFguzHmGdCpRtP1bbVMcAz2fgYdz3dSfpPRoNejBLvJoBYSNgyAVV2od312RQhmDwp",
  "key12": "e34MDowbgf7jKAYUKiVsMbWYuwfT5Xz3Kfz5ipdXeSCX1dbwiZSUVGZRVRP1nHH2rS9op4hcWeKraHFED9o9Dcs",
  "key13": "4HgPhvsBeXoCyqnyFnKwMDg2kPqg8wMSxF7ffapxqn4ySScvov9tBrwkdvKdkNYTD2gGTzn69Qw9NYEzxGpfQtoW",
  "key14": "3ckonbVLznH4voLTQSBrBTv8yWMpaPf38XVXAricRL5fvyj7yFgKRuRpG9etw6RVTi4hCWLoANpfrEUYueGTawG4",
  "key15": "4MUFiR4nqJ7dmzvTA9LZuQMLbui9zXLKTghzS8LQieTBqvFLFGSrAoHMi3j8yrDEhAVZP5pK2tv6oP77BNTaEPNB",
  "key16": "39HbGCd2zsLipQ1py4L4mCC1wqz2asXMedh3bjfnY78qGoAhrh2xVnrtkaFKJ8WZyiKdq6QXZ4Rn1jCSUjbsW5BD",
  "key17": "2DApBr8YhcibV7Vg8MMstBsXsHX9xUbMnYdxixYMgWZBjGkNReEuP9RLmhNtmicN3j3jDoWDr5aZ4RkvhwXve8e8",
  "key18": "2JtjPcPgZW8CsPqEpNcZvo993RQkChgVPYTwoLdsbiBX9rQ3baKhRZBxsB9pKQBpU9mg1SyuvkuZ1HV6FQGmK74E",
  "key19": "3k5FXbkYYY16vspcHZMk6i4gdhW9mk42zf7BJsux76FRMs3qRyGemTGTDg6gBrAaNfTTd5hCVMnenoMEKtoWqVpU",
  "key20": "5pzWNUBkx2wmpi8rkNBSeSFqCk7ecfikv7K9bt1h84DdET7LGBSwzvRe3rFYyY29n8oFUpHDP9ygT5zS9EzHdYeh",
  "key21": "jDF6yXAww3NVCEpQaaB1EK6Z4vjN9YKbyW64LdhfnRUsZGyCgunFYDoJXwrG5HA6FT5eGn1rKULCczwrLJVfU7b",
  "key22": "43bE8DKqGWjsNKjXMuFVbPUgm3jZkGhLMpFgauLfna6JXaK7iJNjFydSkKssQYgrfJQdKhdJYjhcj2bPuASJVn9Q",
  "key23": "41WK4jBCQFv4gyn8cuubMk885VPkXTUykGGX8gA2Cij1Tvin5AZ4prEf6M3vgMvynrxQNQWD8zGUkXeAGdugyJ2P",
  "key24": "3Wg9xcWauTu3ij44DWvEA9nYFr4QfaJuZJG8qCSy6Rwc1i2L92Gv6qAVif8QdEmGKj9Q1w6AJh5xjDncRLaStJ25",
  "key25": "WNPNX3rbS4w4sreEbjLrvpiwWWVJLh4mbUSwjsYbkLhRWdpP7JrY7XVBLuvRDFu8C7s2w3rLt6A27ejF12J7J1Y",
  "key26": "jKWioWNyDR5EbgmGuL4A2LZxjvYbisRWXPGwT6J3X5pNEmWxdAtbnEKYNSNZTYZw9GSKtf47gYsZULVJrVUWrXT",
  "key27": "3fxkFjUw2edF9skeM4LJVXDGq71efpb55BAuyJsF4sb2rNeui5RE7BETy5j6eGZ8kNfM3Li4CF5R4diqo7iidqec",
  "key28": "2NeW1eiNtSiopEktPQ2vrrZKu8k242zg4F5uE8CTn3nRgLmsa13veMa7QicxFNSSbzgxYBsB4f8kMdy7YSYr686k",
  "key29": "3q4gtooYYMGzargWDLv8wkQFLAYnERWm2KXVsAEKHm1z9v5m1W9QqkkQDZPLCmkjkzLBLg7msTafxAxkYpPgh8mu",
  "key30": "3Rw9ZXzQUpdNxgqmNYWMWZHcin5U69FSasZ836M3C8bsU4AJswvmSPybSPFQnynvuzpxVC2gyAPv78HV2PC5bGjv",
  "key31": "2fdP7gyqvVvpkpvd2UnqSqRTNn3hWgbeWGmgMC4Kq9daDoBSrpmC3WsQVzbEFXmxvGHNxZEkrRhzfQ2kSAXEF4fM",
  "key32": "3YYUPZJNrhEGA6VRi6869YziMt3QoEzUbBTgfC4wAwPLzeV6K4zZrMhnfEJRFhBKDZrYzb6cRehdWqVVrdrGavcB",
  "key33": "2hcxsdejn9VgfRtM2Fr1K81Uc3sdBHrddSbxVDoDHCyYtZM4qaF1EtszDbD2uZ4G3gzaiGuvS995kjBP8xPzJMkL",
  "key34": "5U5y8kssHGUjDjvwUcuD2mYmD31PwM556bxUT2acpXtbtR7zhFQhkmqEMp2kAjnjnupGDVLPAfkJmFaftm1X7DVi",
  "key35": "4tqDgyeCcNXggNHwXBCTvQNvhG69B9wEyTD4Po72PeK3hY4YHqA5u2Nv3yNr1eru4duvT6PJt4UmsTXZwZzPoUqy",
  "key36": "qgQWQcaXN8jtFy7CcchgH73BSazTUR2fGCSgFvfuHJY5WNqZxRsBiKHjNzrzgFCwFDAW7Dj9XzxAmNfr9gF11P5",
  "key37": "4cbkHExk9PCiemQcVf2AsTogtLWiVHrDxwXxG3fGt3dHvD693EBTYCWWzMCearg3oPoNAWeTEZ54XbVYwXBu8AWp",
  "key38": "2mnc1eTrLfXDu3MedxkwMuSz8SMM6zWUeC4PNJ9ifxKxo3psvpX1koGDgZ24UVH8ZKqhrgAvJC2dfjGut7DXa6cD",
  "key39": "h5wRZuu6xZMNqdagA4FjYQpT853LvtTzUfcbgWUv6cZTxW4FU8UtdHTLE18uj94zHmszXABnhFbkHi3CCdKebaA",
  "key40": "3MuNu9RDkk4wi3Yk5tx36RpnpKgGGUe56TiZmWz1oQQs6UJu8YY4PDXfzXFt6FXJC4rmzDwHVNPQczEUiV21FSUe",
  "key41": "5VJMttazficFx7AqjJJvnPyj2etja8N1NcVt1TphpewvZoKM4JgxfRhRwHXyJwWZosKsm3hXMEMFtzADnTDLziZS",
  "key42": "5eYuRS2SHUyuxdUvU574cEYQhd199mx7vKQitbNkyjwXvhe7kDunwhJVEbEvT9EbpaDgVVdRTi6Mjy414wzTraaq",
  "key43": "VCpnU5ahTzwwpDLedsgUK4EivVB8Cnsj72aLVmWijHNNtiuEJdJNVw6e1u2eUSpnQHuvLHHdSXZVRMHnHzcgh29"
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
