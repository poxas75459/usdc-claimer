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
    "zPAaRbYi6mxvbxvZr7VDxhw96NWJhBEuS8zitpFrrgBvd7AAov521VTNDQYt4YBgaZmoRq68C1sxBJkFkJJkM4S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EaLim9r1cKvhrqMWxj3guWB2GDt81XLndfq473q8ovnmbL8FZqAPoMPbj8MutwQ53z2ZUYJxvz7tKWYEabt2op3",
  "key1": "4spehoB38phjdaqSRhEAvkn1Xof2me4LPAxD4eNsLREa6XhU9NZYYwcBe4dp1SckPqLxM7ZRMQc5jHf25xTBFGpK",
  "key2": "3pVYJxxRau2aP6kasdrht18Fn7J8SwM9DuDkDWb5Vj6dt7ZqwJd2h6MAHtLESNGGTvZvNYa6Q38yeLmv8MbyLBQr",
  "key3": "3ZeAn8edMAdVnFFcoowXDCFndnepjCPksJqkypvohdcomLS19gfE7nhmPipM6NKzqubKaJ1kSWm484pLmeHd7eQt",
  "key4": "2pD1ZjCjE4sepHviEYKsFKvCft1ZQ7XDVJd53LqCGxEgtPg21tnxMYQrMtixMeX3sfa1vDYQSjaUafvQ4whJzZmV",
  "key5": "i5mL11k2B3yhAeaAkXvzqQ7Lz3rZFwdncXVJyFdrNVsbbPeu4v7XENZV4SU59aagBdhFq3Ehiz1AhxSLDvCtJ7h",
  "key6": "fJowbWhfKUMrY4qUoXwgPqQFtLs5E5cbqvcvLzBV4RBUmDSfe8rVtCRqLwjEj29mf6AaytoijJJszSFXqceJ4gx",
  "key7": "3z1ZF6uBLZSuz1whMXFL7s4WzgjUKtiiWgJHuydhUMFxraHZCPbReNYg3EsJapQF8wB219DETtQFMB5BhmYga8WW",
  "key8": "5dJKFCwXx2AM9ubrDh76hF535Q9eArVqeq3aFUjCjz25Xgfd2k8awaqUtWgDgZMHxkDYXPkyGcQfFgnjcThdoze1",
  "key9": "3yBc1Juxk8s1pKXEEEiCpRzTFnjUMYUFWrSm8jmXqrfPVjKxBnKKiSg71yTGr5Hs9UyN63RvYdq3PpqLAjhzCx51",
  "key10": "2KDKr25bFgn3RUHceyQ93sTrG5hLY4U73SxVWUWQHe9ZJ28ZBff8KEVpbNc5hTKcuvCDN9CUZFXbJ2oqnyKaCo1X",
  "key11": "sqAXoDet98pn4jwLEWKEpaRYh8jRPZa7TdyTtpu2tonaGRtf5L6B5x7ZQLEmnZr7vUfpA7jgxEaXhbAZxDxC8dv",
  "key12": "4dGWnp85ZQxRLT3bVJ49cwWVtjAqkzd7aKgGFBscZEq7PbEQnfwgBeJ4iDrEGGLkacei6rCDZ1YywCXBn6kr3U2C",
  "key13": "4qtfASND2Rvv9p6P9H3qQTbJfZm19VSub59raomCs8uo7oX6UvvKuRTuyY5MnmQv2NeHKBdgMVj626oSYhz5A2UK",
  "key14": "a9y3uHwe2Zrj2sG7Da6vrLH438VZSgTWsbJsLCZ3R1GoxkztmDe9GNvXgQQr5Je3Km2aex77yKg9QZCNuZ67Ys8",
  "key15": "tWguhym6vQVFP6uuyQTbS4JcCgKWMKSJh5mv2L7b4DyZF9tD3kaTjuZPwCk4FS47BmV73UHakf3cSGy2s44UjGA",
  "key16": "4dXnn9ZmCRQA387PNkSdWNRC6AvZtXb4rzP2KXvtgNnNkrn5bWL3MV4rwvrProZdbyxqGHsdMoArqPVxNe7Tz7HH",
  "key17": "27tphvws8ncquxTtU4F3uszN4ZiL2ASmUSz2AazcPm6goRVA2RjzCWyMXFXSaDv8ZPqsap73R1fqgsBgN9ZougGa",
  "key18": "2p3UNBXoVpmDigat32iaTiXB9ZZA9Cv29isKztSUTvNuMzU88QwNoSGhXf7cy9tq8sXgKGHnfyWURG3m3hdi6rGm",
  "key19": "2Zrhwfmx1UdhF7u9vbK7Qz9GZNm4R2vGamvRTKz4aF83WzYnXFW33YEXjUuysoY2zQ98aeXkbbA5KiBpf9kFt2uE",
  "key20": "34hVqyGwxhTxiprtLxLX17TRT3ebmcpRnDr2cai5ySfRikbYnG1jspFqK7DLspGDyhnjcgi9fCdTYkJdm6Aimqq6",
  "key21": "ZLG8HiLfB62vnmbV8XVLWEpB3pKsRYERkHk9UEcwebNdnRbtiSJmzU2MSkXhtfTJAR1uHWJ4zZX8DuWtVjbAjcH",
  "key22": "4ikvrh9jqvZeo2LX2zKAZSKHa5HxZ88iFtjKDn59N1sHZaKZVC8yct3uxpt2mmfZugoYm3F4VuLkBWch7XTSLDxX",
  "key23": "jUveDanfwQ7TmwrHLyQDTZ66ZijWM8Q2CxFrTkrNxHet54U5iaGSEJMDKpnxVDzRaSZUWubivEZNKnVWLLQrKaS",
  "key24": "TAGLSorcmwbZXJjYf3KLMumJbLwaaj8vYiV92zTorkbQdoePAmXxEf37FmPYTWc36ofzQ5jCXswBcSQVkwQTdis",
  "key25": "4dc2kbebcWP7icHmzbv12WWEBfNMcQeUicmvwTssPEdjcwupMLMN32eLaeS7j8fJriFRseDqmPwVsVm9n8ruLBkQ",
  "key26": "3KUYSh2fSTGMc6vyyRdTSJrSX8XXYyYN2vASoWJcUEbG1qCp2KqZtNkn13VfFbwzxTvoVGzBhbHkSZVFGNffcQWX",
  "key27": "5ftJQSBXWwsKZN7SCf2hnhCLj3KvxK8C8XNK1Ft3hzTu8X9eRrKFFziWNtsiGryKvSrdBnE4GRZnNcFB2HjJDKxW",
  "key28": "3dY1swuQfqXYqyRaovkQQSRtoAThqmBrydMTRqykpVnfBcgGEDyDNxQaifUqeXZCxvUPCBNmUGaW5Gz6tt5GtXK",
  "key29": "4d9oXjWVdu8q6qeVyKYKQ9oLCnNyekZT7DQ5J4Gpgq5uYfkSVhXjMarrxsFoyehiysSP5ThMp7BNkFLkydTj7eVi",
  "key30": "373u9uSM6Xm3eSj4fnxVYosC8yiRiy2WFTnBZcs3ebDWpJdkZmUi4qEpzyTAfyAY5i3ckEJ9jDpkFLwY1VeZH83U",
  "key31": "3pNi8ovH4ia8P22FADMMkHKtqHf5YALSfifdXxm9X2sLWHbVx8ijeaVrRjAqb5pquRXfTsGiPgMk363Yh5kjB6Vx",
  "key32": "5o6UsNdT9cjmxkzptsvMF4mEgPiPFsP4wF28BUWQDVpTvgVBApgJgE7d3AeoGs1QMbYU9HRKsE7EMK3eKSzXeRaZ",
  "key33": "4UcLramHU9X4g1LUj15TLZmGNNKpDusqvaSPBM3VRgM5jXdP7uwCg9d6JYxReKAMdcyqgfPVHGT5hdFyTDEVVshw",
  "key34": "bYs6GQe53wt6e5cdfmadreoHLx3Vr3XfZ3PsWQCf6MRFfzYQNxuYk5XcHShXSmYus7kaZm7SCZbNzWStt7Kn29K",
  "key35": "5WE1nw7hdDmFNbSE8rKKPeA1SY5Aq1xkWHqyVRUku3LXYvcCmTPbaJxmtx9Uosq13WDSBHtwVYcUcEuxJq7YpRAD",
  "key36": "5L3LBw5n8He9LakKW68m1XSN2MBvPqcfEpiGr2sBiB68TTbzBoDaDjx17NsJLRW15oPwh2azMuG6pdfNAekJa8mX",
  "key37": "4PmzJPs5BH2iwq2JUv8K8FoV6PBdfCcrMMwmWbu2KqvMVkoPCHPR3tzYmPXZY8Aa6Ci4r1LiiefXKGWc3MYi8n9X",
  "key38": "585eE8UaqL89ZrxW1bir4WcrBDejPFhQnoMJFRUQbTMsauenjAmgBsQMxdhWmpmZwGcyPCvJYRjJCsDJCho5c2x8",
  "key39": "5iCPnkq35PD2zB21MPnfQeF2Sh6s6dPwEUFembbQfq8f3D5M4RkXJNJHndfFXWkTMiRS7GsB4LcB2txBohwRQmuo",
  "key40": "VmDFb22pxQNGWPKc39HkWVNNGk5S5a4nzxmkEJa5Y6gbnzZfwsLSuELNiKfH1BYzoBbETSfVRwnPmy2iMpPkVe8",
  "key41": "hiwTyBUBnfCD2i8uttq66fiZUCzDinKvNjEfiG2bhUuZhaaQXkwyp6otbCoFhdDKEQuFHMsnkvepnawh5713zKH"
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
