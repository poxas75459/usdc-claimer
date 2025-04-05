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
    "53AfCSKbVVqZThcdCnE9Cv1j5VkPWfmyhtHdPFW4B46YvWe57SRiogrLkZFyLFgN2seH5USk5GSKVYnB12hd2yeE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Mt6zWhJH12naSF1V3QELm6a5Ke8BnLYRKrssCX1Uc1pET2pLuWfAMdoKdYpdZ6ynJS3fe7psnEtrwWxfMPcfRRe",
  "key1": "4apCWuTp9WqFw3pcTaYmMXB4fkEyLcrfbN5FxvBQMiiJ72M73XRL5zAUketqZyP1pZNNtePpDZRYrnbKcFQB6kCi",
  "key2": "3WAEBL17aYsrnXzRQnukydUMWjxxWvZkZthCcebh97NGjoTFzy4DCPMSFNDLShcXUNMCF3J4q447au3y14JV8zBh",
  "key3": "4BqJ5HCRDejHna7ecHVpbvLHnvN1wchG3DFVYkCok7RVsMypaB7cYuMVe12ByiKhvctAvRorRmKbX6JvVMPkZAp8",
  "key4": "SR1em2rfLucUEcHixa9TGZLAW626QJ3gv9opxh93Na6w9JjwJn58Kmkg3XBZoojK4ULSBh1A63zf5XxvFD78g6c",
  "key5": "4bJNqLcYXi9tkwUfvRDT4WEWn4sB3vWeD7st9KXvdQxGH23dYYEeEbnyj8w36HS3zeP6HknujSfBbVT758tDHXhX",
  "key6": "5B8K5pnfEjr4eyXCh2qk9WoJaPewqezwXzksSDSAvM1vWxQnEZhEcVQnfRiche7WWXCKY1VGpHUTrzXr6Way7rjy",
  "key7": "2yXQx8oKEZCxDwHvfhYdWUyreKZxQZDq4ufU8tKLAtZRjLryoLpuqyaW5tsZSF4s4bcbCiDhZASZM1aFKgmcLoNu",
  "key8": "ngk5FZGwEwpQ2M7QD6E1UQArkrmgZppJC7ASaWktsaKFEeGsJjSuseLem31mRVmExNy4n5Sn5qzb2z5kq3vVuSz",
  "key9": "TAsYoktZGheVgfUqMfp5ZGpHwBZugKCXQQuWeuJsDzmbLWTDNS6DqbRGL6kkQUkSvHkXcX6wvTDYhJEpQhNCsvG",
  "key10": "4qT6CaH6FvPdwGgGYMQRUCZFf4D3NDicSYDY5zfVTiooBQrVHZb5XiSefrSdtv3aiwn5Qky6RtqshWvNK7eFV3KV",
  "key11": "RRwkbRNNppmi1nZWkms3QEqeYC4GjJEQWtzyyE7MKx4vZUpTa5M1kEwYi9QZu7DkGU4yTS2UMr8P1h5FB3u8TPD",
  "key12": "4MuKMgeY2X77rib47yXF2a5MZQ3FS3W6frSEL27wbox8Mc9wt5MagEoU3QEKw7RvsQorQTPsFfXQ6d5e4jyBk24G",
  "key13": "hq7vMG1sU3CxpqfexgEa657kcqdnWqRq3v6DRt2frtZGQ1WF4gRz4a1C82SycKo7SBFAzncwWnh4NyKvS6MKdv6",
  "key14": "3ZCd6MSQMr9oyUuzBYwYA8GoyYLrd4Jx2hU1cRYjcnxKs9vq21kM54yNVUHjdi7hv5oY9Jj11aEmF12jzNM8YuZ4",
  "key15": "3ctt6uxhDA4ZgxXWFDuoWPy8ryYYu2oS69VoN3La55DhfSVX2wqpQsxYM7Da8DRzGNaECLkPBiNH2sCid76tiWCo",
  "key16": "XkMRymw8KpaGtyCFcoKhXBCKJNePQspoTt5pX7obDEXEeC7CtUnCM9xHdKSiKeZsP12GpiKZ9FmPWCmVbZb6bzi",
  "key17": "2Yk8A7SQLchxf2yn5YQjY3rmEy1a2UqYnJEocStQ9boNrrKLX9fvmRABGyuXeVA2VmrJ8ywtaZaQENEKMLV2YQE5",
  "key18": "54ckT4abMKcqWTPqREiw8joFQzpmawfqnEWxyoXXsrJU2PHb773C3taNu2h2a6xioHtszoE6EeKp7zJDZrxyp7fV",
  "key19": "eFW5aY549FdNBU5qrg3kRFEwgJNxGgkpdg8krSixyiWv7tbBGj1JFs9EKhtfYtUfJba48FkAY3Ni3oke2AtDUCm",
  "key20": "5Knw8Vr9TM3R9Bzjpt3bZpMQ4HUe9TYfhxgaLS8VYt52Ec4dZ4E1E328uV6KUTa8d5eMgqf4jfCxpRtsVnCueHSF",
  "key21": "2AJ38xt4ZZmZKRNj93BiYsm5hAuDP8PzESwXPxmh9PfjdqmH5rv7eakJV33efBTstPiB2JoiJCL9uL9bYTY2tg2u",
  "key22": "2LgemPKbMPZoALyL8n18r9vgYmRufG996nxNCuLrZ5sxXTe3Pq9MJYrVbHHUKkGxCHYD99Dbae967JJbgyqE1CV",
  "key23": "CrhpqdtraxcVEGsFFwXgbd7VtHBoBZC6RuRLCsP4QdzCzvaHdEFWkh5uK7JxVjChBKHXZK3SKfRgkP4jv1DuEav",
  "key24": "3sgce8mMkUp9QpXt7KfBkXbvY8HzF9z4qg5f5BpfjK5jfCLa38N7DGTXkcgk3vgWSnBsuwJ4owEmHmYcu4Tr3ar7",
  "key25": "5T5uvrin9YG344RccqgXHaUFTCLngT8JWMgF1eJTeZGcwgW9eva6X5yowqRwjBE6VC7Lp98hvY5B4vmGtA2bm4G7",
  "key26": "5fR2g2qdHx8zn1upZyv4eer2qrWipoagpxg3LMfSSgD7EbBFo7Q3U6nUhMVRUxs6SReiT1MHrqjanfZVcYx38Bxt",
  "key27": "4K1STpcFcMvur2LuX9fDYJjzrNh5W5TgF2eMutwHDdziPJwXVQ1xG6DWpyReu2iwLNMkkhcm3w9UUQDVkyctge6d",
  "key28": "DRs6P6cDSDgKbKvR1eUzkWajJxvZPsRKJGVy8wGy34gUwdopqjzrSd14sVFjrTwukdQLvexwtWThgAYpUvT8zUt",
  "key29": "27sDLwdAFt3rB6YXTZNdpGN5T6rkDF1WfSBYgCCnx68E9vM3NMhaXR6gKbdLWTDrgGAnfPsz2TvwpCCovRzfG9gG",
  "key30": "2zASyJaUP7XopshJrFiKpCFfvJQRe4cPgMNh2Y8XxPcLzv2KcAzYSCyFhamuQeWLWPdwNsTAofyQS26sQMb3rMFr",
  "key31": "3Tn45UXKY8hb4Lnw6GoHvey5mKjXNi4P8njNxZUBJsTWpPrwLw4MizzgUu8wPgTY3kS6rnQNkApujrte15q32Cqx",
  "key32": "4yxZronj7uX8ywtrkwLCnHq716SdMvhu3bwD8LPdHNXXALSvEfPAYY8rotUF78teRed83U26k49B7p3sUrz1M6CL",
  "key33": "2sRvBzskWWnRxvLDNyy87mcRfPbpd1fPBcmH82nCTi5evRbwrw3iybG7f7usXtLr9CzaVuzdauGALFYBGyPFv8bg",
  "key34": "4NqhBJigTSXZhYYYe1ba9WBPqcwMdzNxobGzmktLuZw5JXGbzCaRMABiWH1DeB9ANsq6UyiErX3nVuW4RhMFtveS",
  "key35": "62CCktvw9SS4CukGVHJeRg8tNnCVXSC2qAJXXL6Dhqesq7Z1c12KEENEf3YAXD8GWK4kvRsL3A5ncy7NHubSwBVy",
  "key36": "5hssV6h2vL8bx2ZWFNqXqw45Pm7w65afnAB8grSzmthUHUFEKjKHoSXRPsLsUUgiye1o3rpdfj7wnPDvpuMe98A6",
  "key37": "42v1Jgt2CbTRD8E7zkLV6itEESnAUJCpPN4VDbrfG46gPWmtczSBQCudt5WTT5m2ufNqi8Z6cEtEMjLmjmb1CPdw",
  "key38": "26GgsqxHgqQW1b6yzQZNRrHpC5yUgdrie5xTETgW1WinTHHHYrtiVqTuGWGvRosoVpzpnnm3PiLkqXGi8TYSZd8d"
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
