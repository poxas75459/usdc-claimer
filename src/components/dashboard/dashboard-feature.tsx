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
    "2hmfKVQY3RJDSNg6BB8w1sMkfy4Gs4hiVNxNUmRjKsxZ2KreBFa8r4BSHBUtcqoQtAaWKYvaV6b6KzjDh2BgcEUA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X9dmt1d5j5SCTZhivdhqzsc7TKiUk1Fz3e575har7Szwo7Sd89gaze4LRdoEDUp8hbuRfP5mW8USegmC5ZGWjKK",
  "key1": "5uBjD4dGcCiCE8hryhi6RS2C85yuNWb6U9Sp7VsSxsFt2Z2WqLd8XiDAvgSCicqP8ZwgW4L8LJCyYqpXrRhk6rvf",
  "key2": "3uuU49psBjq8FNUZQNZSSRkcNS3XZnMLwRDo9SjKAFVYGPg6HRnDTAM7YNoQ2rkDS5Sq4iBERfo8Fgawaxbg75ek",
  "key3": "rPkbiBjjJPNgqXzhEPaLk2fj73nRQXugLKHcy13mzNefbnQEFQs4z3MWy9HggLgE51ArQB1qeaPma6zo8BZJXVT",
  "key4": "2xbCLwZVSRpbb8XMY927w8PY7pkX1AtK3iybVP5HGtj68yjxchf77DV7bgwXCKJjwsYXhUtdLMTEcdZZtWUnaNQ1",
  "key5": "4tC48ZZrrveMu9MSqtq1dpAVjtrjSMP6HgL1a5YPy8m9QJP1DtAM2mekb6XkThspz6wUseUkzdkFGMPBXxjBFsxV",
  "key6": "5WD4nQrVD1mMZHxTVc7Qha3mXH7htTotHJEprcNW9yMFoCvcJvzwc2GZG3LrFZS6FdYmWxeKHTqdiM6dxHrpPt8s",
  "key7": "4VRfi7zArHwXngkoLvWxDF77qDBBNs3EGJm4CX9gtqqHxqJFREk3bC11dsexr4WjqoW2GLYLZ2RkT7gd5xpvXvun",
  "key8": "2qH57CD4BzahgqkEriPD5ZDfHGk7kzdAaSWSsLokTB5h3rfG74FPES45QsKYLA5robQ2AmR9BLLxe6WWJtSzWy6a",
  "key9": "4PrXWUvykukeGBqw3wqpLqbprQZYBAYevZq4PTbfg3ovJYbEG3htBiMgZLoZ7hkmfbKLeQQBczmjTVcYb2qE9JZe",
  "key10": "27iQn6DZfkC8LxSsH3F8P1N7zFWzsZD2zXHgtz98eXK5ZZzDECuaWvnYQu27RcWH9652zpL6mcQyZZrxeePMu4PK",
  "key11": "2p1Mm9C4fGXEBPJoqxwtyk38cTkziQb81Wjcyc7fcoPcFiesPuAJfwco4BubzLs5Wd9EFc2c1VwUBtkTWKY94EN6",
  "key12": "3V4uStYDJ4kcSBXoZpvDdguhgWbMi9A6TpEatX2C869KSTRHm5x9EGsULNUsrYQ6iLXQb44kzTQUPxsHL3Gnwd5a",
  "key13": "2Na5fskPUHvvmbu8qbMHUXeBPfnhwq32BMSvoJbLg6FzoXnx9q3R5QkUcVTw55rLo9me7fkefu6gmZgG2E1k9HSc",
  "key14": "3exrTqQDLox36mguCDvaovqnmD3Ro3ZFfnSAKuhP3BSXK2yr5zhZ3ydqZSLXCy43XEr3sAqiUE1HioRyLyG2ScP2",
  "key15": "64YyGn5FjUceszxQWHCyT6onDAQAVdVvD2z5UrxrNrHM7mvov96EYsUGLSRZxy8FzNLmFrHXsuS7P6vDg3J4Xs27",
  "key16": "5ynSSG5CVEx7NrTS5kMe1kCjEx5txJhuwaNL7bSTtyvnapfbU6iehCkvQVe7h3Bx1D1K4gt7FNQ4yBDaQ2i3ip35",
  "key17": "2s4V9seRrSDCAPJpXZHfMgEdJXo6f54XmtVVX18vtQ47oApLfk4DL3W8KJtMxyp5z9pyp2yWtFiFeGsKy5EPMtUa",
  "key18": "2gpRts5ZKQhafjLduB5UJxWCjCUsv1osHRT8PcKk2iQ81Ny4KEBkreErg6Uv8VSG14RmtajoABxcyebamvL18bTL",
  "key19": "y5hSXExb8RRJLueDweqqifb36tNeU3DC99uUZpzh4bVoWBrb5CyYH1uQUh8SqPtwxSBmM2AdPWvuHaLjvvtbc7Y",
  "key20": "2tVBbw6PhrKJEtBK5uTgb4iQatCpLcfWjALBBf4wM6CukjfZMLCm2moSC3ChJR2UuPEejH8kpUe7yFnn5txEwG66",
  "key21": "2FUoFxQTjEnh5s7M7opCAVypB1M3Bbw9FdxhW6kfn1F99KDfXyYXea3b1THWYMR7AQrKBMtDCcyPgSZhyBQSqxqx",
  "key22": "3o76CZrNvSdPHPRz4FB5aFL3YQgbp1hHBExjgaKFzLY11LZycUMmvSufdVwjh7V5Uv5njZFjSpyDuvizuJAwFG1s",
  "key23": "4MSfaAA7xNi2htdCckYKPtcvARD9uq6Gdogc2tacwWeXBd62Cvzc7PBWeLKc9qZkoq6MXXyTvWq6yJSTtwb4r8G3",
  "key24": "5jDocSTQKJmqqToFy7VVUG7DCTMiePyLXeZhTd94fdbW8vyaehu1GkkatuhdeAvyynNwSxMw54EyYq1o3NKf2H4M",
  "key25": "4GwMRoynabcjmKVTJjUW4wWPBwhEkQ9uEUjbBBTqeVdkqPGRMa3xKLVUXwE4oXLtdGq6Kuk3cnaKjjLZ4L3JJgzg",
  "key26": "HoQNS6k4L6byKhz9mTNhdmpbrgtuDfhW8VtdrjSrNpEr7YjxCNntD7ism1MH69cF3k8NCdPHGMJZ83vJQJrNgoC",
  "key27": "2iT5WmnKDPPZFNazdzGyUNMUMzoPUoUNHgFbjV4MawnvU8LJg4Ee5pBamVSEEoRag1RseVGxWo8uM5MtWdhtJ7Jx",
  "key28": "57WWnRcTkGLxVpRfRKcaJmhC1owfAsJJNFEGBf3rGpng1J7g2jV6rPobesZD1j2HojnmMShroZhquruHUS5HpsVr",
  "key29": "5FnssMX2tnSqCvwXv4raV55aMjE9Nj9HNtEK8kjh3YAWd66EL42z83YMvYgfEWuJNeatdhNcVw9qDiNns5gQNkzr",
  "key30": "35kPnioN1NtLxXmLrFVxLHWPCEf88oPKiZvbEjicqo9uRzXnQtTEzDakK5GQ76P1ZWWkoJuseYkN2fADKjqN2BsC",
  "key31": "5wEdeVYeVstNHy7YsrpSxd28cKSSGVSKnUZagNwZaG9rD1CMgWxJYZ1zd4SU6diqRbC18WYAoJNzMP5DQUMfUKMx",
  "key32": "hhcYif4kAVUobRQpFGzz1NaMWXHBKSksweQNJz1G1ck9kJD3eXbJMUBJadXv2VUHkhvynFXyzatchx275LyaMkK",
  "key33": "3kV2UjXNdSBUUqijfWXAQ5oeHFy48GaAuwYCgc3Prx8entDJBH8b48XkN6b5BwcqhgSjRtaS4iR3x1bHcCKQTgHf",
  "key34": "29UcSrZQV5reGvjhi1cKPXTgjTck9DW2JMojvSyWddDpt25FW1BYrnA1wgMBgBYtwCr5csQ3BHDzVfT1wcq31U5e",
  "key35": "44otwVhUuUoHHVHHNx4aPTHFUhpKy8b9kT8QvGSyr7bsTw3hGykkQeFJS89zdbaRVqmWei8Fwbh1unFMEfEdsXZ2",
  "key36": "5k3kMaQ5fpZGCe5M3mirRcsxJp3pF1r2h3DKKrZsV8ZHjcQ7CnVgV86w6oTtcjNCXPyFtjyqYrj8FDytzdDzBYTj",
  "key37": "4gx8EySLHCMYqiZpJMseHeZzmqkMVcPRxGc5StAZ7WjneQ6iUXPQioXWg2YYiq2bKyWJaDr8Hv3cmkmZPAzP3RST"
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
