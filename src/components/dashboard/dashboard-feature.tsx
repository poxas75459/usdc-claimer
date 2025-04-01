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
    "2YXJbWR1uEJigA1fxMLtodrvKNe722Dgf3pY2gh6LtXan6HMpgjkoUx6UVgubZqnWsLfZCLRGpw4AH73AcFNReie"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X5rVt1Zvnvf132y9n59MbVdPVn1Kq1yNwPiuH1yBr9qDTDnEpPmf5SVh3oNNcBULstY5hb5DXFE1UwRsu771EZg",
  "key1": "2Pmh72Xa2AdUNBv1U5CKchQbkFQkuP19qPRcNqNbkMyRa9D4BMcsfpYHxKPJxk2Vf3ByLJ2Lc64kVtAFmPa7qZ3D",
  "key2": "66SCw9HVNXW8dgzhtcmXZTFHhCR3TxCbXWxrXwyY9SMiBZMUvEC9P4TxenF8sQMq6uh5QLTXu7jYEKy18ZzhUFKa",
  "key3": "1c1phWJtaAUBaWqdHRDnmRPuigiJHcMLrXRGjK9VuorxDM9Tv8WZaKg71W3KKML23yZTvvNzLzedi8Hd1LfyYXU",
  "key4": "SjmG721JGZejE3CamCuqwSXjv8gzLFX3yoMU48CumXq7vBEmqjMvPognjGCGSoA3mco12y6PFYRYfa8sx79ovo2",
  "key5": "39XC3rhK2bc97ATF8uBenYdQyMaPXyfMeMM9YTPgXNN2qBQwRQgYC1rPspgU5dHwLXqx2EEdymWctrftDME7Me6u",
  "key6": "5zdvWJZ2EF836ppNXadGGeL8EJNss4ErDRHn6tyuzivhUKrsVGjxcPgHJcXJo51s1JzvEtM83XKEGuFuxF6qLTv3",
  "key7": "63QRJnsrFtE9pA7i2b6HHdRjvgvupyNMQwUfrUB1R83Qaghi4nyQXVrMoGcj62E4HC4cmHEYrJWz5h2ea3tE3Tiw",
  "key8": "4o4EBNT9yr43TkS2ujtNxPrs13ngTd8NTTpSoaZVbe6AiUmJXeRmPgXC3Q2bQ81GrVW6uzF6Da829uXMYfjNSK9i",
  "key9": "4opb3tWXemYdQ65bTpEdXFM9XNaq4yZCWF9rZBLNJLbmaAcgBCqc3NiuS2R8PME6o6sgNEyzhiBUuSJHvDmniKE9",
  "key10": "4yobJo3My4ccNxPC5LxDUwpK7Cyn8E3q2Nr8rczVRCa27tmkwqf2nnTR3MABT8birVcKPUgEAZX7DKRi8HaUhXfJ",
  "key11": "3cVu7QYCgNwKeQpoRyWdieKTTmXfrjV3T3qXqQWrzWW3GNFEUsMTZ8LeyKQK72EZhW3FxL8X1jtq2YFeY1iWzUxE",
  "key12": "3YHRHDbbyk71Qy1Bmn2Bi51LdtEpBd2RagPqaAwL5yNx4dKCufFU73Mr1nf9x1pf3Q9nrEUS3ZUD9kSNyB7LBZvi",
  "key13": "5ec3SUBoPDXqPdDS8gEBY7NHAhKqMjKSn19XEYATdxzk5V3TRq1uiXVrPvrEAiDapWfjoBZ9x5Gjq84yzNqLmxrM",
  "key14": "5iLEDsLDPA2QHYjzpWpyWXQUn5FaxxuMXaLP9JjtedNH3j5kNYmmeuz17jX3XpC6opg41Xvcx6Z9rrKXvWayEKRT",
  "key15": "4PvJZFNjZdsd3kRqeZXVJE14yFeWpgD79cKCAzd94KejCPxJcYo52XZ4AuvdC7DLvYxMnz4Xbs94dn9r2U6womdj",
  "key16": "2vjEbQuAXDcFJJjr7BbdTj1xPL87Ld27JGiEGjoa3V3QSdptozn41zvzMNbCrxVWPAxndzpNuQwYLzQN3wbDa3gS",
  "key17": "4KJ52KNHjL6Zo1pUkbh6vW5wqehPiFz1EgutJdWSt9bp4GgBsYoBJhyEbQbz5foM2QaAcWYnwBaVP9hv7CFzTEJa",
  "key18": "VRZBbX2GrjACtWzKRsSkEFNV5uhfkKkpQB49mMNKw2ee8kYXzKtmhNKUAWydZxCfM7MdrrGcny98Djezf94p25z",
  "key19": "2VfjuJbR9JizjLmW7Qvrn3bKMkwgySCziKQCzuzX9s4SdN8ZBqHR1RW8MQ2eCB4Vof7XckQwgge3GMGaEBP43TSa",
  "key20": "4kpvQqBfFxLtN4vs31nJ3dQuVbpGuj7z7x7Ew3sc36JwVosRDB9u9CVt9HovdhwPsxjcrDyT57SMMLhKBUNUXynV",
  "key21": "5gUV3oz3nXt5tCVXkGbZRbK7HJ9TVLoq9EreXagefZ63ePq2WrfPspvh4XZ8T6SWD2j5QctKYAa1u3xrByEWy87e",
  "key22": "5KxYpN7ivWKMzPXKcgLAPfwdte82zHWFQt4DWCTiWDw4hVgrRWgziyQxcXd5tvvPDfmbePASZLDHdtAgmUrWhWJw",
  "key23": "2W8rR7vPTyuQAGXFSZAb6QDyZmo1nXfrwZZhNay1RCzBXSW4KtAJeppoXSB3vm67uyWfzdQ4nCeeQXmVo4id15bH",
  "key24": "4LxTzoSs9pKhpXRRvbvtneHRn1dWV4DDdCvBBWyveEny8CDsb8c7Cj5b458mcoaD5nTgJfL14dgsc8GskRjickED",
  "key25": "3xvJ5mWigEvgatFStX76VqMt6dd58WeNtWkomW7ejEvoxKvsetskgf8N7r4RRcanCSMh8n2GXFjdgxkCCXEBrpxJ",
  "key26": "4kLRGun5bnR3o1aNhr8eurzJteMKSy8P4J7EnEg1VhMqsQftSF8PK9HF21Gx3d3NaaBaEuVhwehL22ZEmsUQtpC9",
  "key27": "5BhG2utBQW5q2PCN8mc9yVLDMq5LsyqJk91PcjCxszo7A9CTF3DqiU9s72JdZhizDUGVXzaT3dCkKdLe2NYyan5x",
  "key28": "4fgyJ5Scj71Lm8yqKvYhHGyHFeXCGMvnTc2MF6bLdFknkDeQVXMk1hiM7eU5Lv7MpyXXQrVP8fHdmu2NnMKSU9Cm",
  "key29": "jHg3CSFzCrTtdWJ1QBV2xntSnCFwAAWbfx4xE8XGoc7EX3HkRcQsk4FwDXHdFWz61qRJVqfj8r8awPgGoxBMc4N",
  "key30": "3y4TS2X9239G4RJHbtyaTY1Wmon35fyxTBMfktSqCUM95TB2DdQKTEfnuw2hQYDVNsEU94ZyCWrxyPUa8abY5vVt",
  "key31": "5WsesFVfK8iDesaX4t6D8dt9PAXskT68sE2vCUM4C9MhfosoAYUeMWjcStpHd2bGdCn35mAyeW9bLSvF5zRLQWEY",
  "key32": "2CEJ2naRYnmDXYdkdpvakzZECZMZmPAoN5JAEymcV4ex9riMr3oDrmXkNkhGutkBh89tcWSgj4UE3263CHcJEndF",
  "key33": "9i6T6zWKEAA3Y9E7dLb3uq92AJiiv4oq9B7DA6NyUS9LQ87euWc6y1KH9mfwUZctiJ66yicbQf2ZCQ5ncEZiGEm",
  "key34": "3CtsdhshsHw6zz8xiV4K4mFbYEF8zw3tGPcB98hSyxiSVQ3QdgAEzkE3KxY2wKJbc8m4tpHn7sHXnWHJQc4rofyS",
  "key35": "4vvfmugYmcWJHoSfkf6i94jBH5ZtodQ4dtQJ9csmaAjXCsWT8BSAHCybCXLJb1tYDP1cSFcfAaP6RiDqXXWk4SHX",
  "key36": "3STrFRrNvbVuXuVpT9KS6Hv7ea9YGyBFtC3sDQbCPDKSBsWed3nLkjd73ufsXqCf8YnVhZyyR3M6SFN3kbvcFVyP",
  "key37": "5g8Bpc5LHwfa6UepP19eyhaNDYpkaYPrUuLV6yDBeA46NkwvCqH9WMXAhotWJgj5iMPmFJmqgJRBpfaNYEdTcpLQ",
  "key38": "4xFazkppuRrCdjv4Z7YCo7vwiCWDcF33wTBeKkQqm9mMEd2pftfSrqdxDfZqgRwVFWECj1a5KaHi5N5VEv3uZqCB",
  "key39": "5xmPufdHdwSzcNxsdrjdYvNMefCnjfDVpwEJVxUwdghzwnjnn5apsiEamEA7oBJSCRVy3rMY8U599NGzTp8H1u9R",
  "key40": "LJuMcqFQyHcrbi9rMZygJWjZ68cpNp6xkHmyTic7fsgqZsvp3u3ErnfJBsqbGBqsiy5aVXqDrkoJrnbPKXtYbZJ",
  "key41": "2q2ZGQ9TUcfHL8wDKGfxZY1RkoRpnwbqtCK6t7bkcPuckLA7Ne1ZzVZc3HwxdgSxY8ftZw1aigR8JUYRSFnqeXr2",
  "key42": "3bwziBL2fVYJT7nUmSs2KJsqj9yJyhnkSZRPRVARukAQakrTrxoGWgPFDJGNB57hdbH4xKT5KUR6YWc7omhvFU8A",
  "key43": "5aVt9upwsmhJTT6svjJ2hvXWpuSAj9AcJu7qC43QQUmNQzzED9bjT8TeYGzsRoJUGx1dp64vq3KHizhaSRRZ52GJ",
  "key44": "2FcNV1aiApqU4Q1YTg1DkabzMxJg7VrdDfZKJkzLseT7FKKYkLFQQuWfQbjLKDHC7NxZxmrnv75gyLufNouqNtMa",
  "key45": "2iNMwT5GAEtwrBRNirSVfaoMvrCV4Ez3KzN6zbs7EtXK9UE8v3KvGSwVV3phQhnLmoMwzoArLBsdtm95UjAKjLqF",
  "key46": "5m1kXAwERnc1p1bF8aMCqT17UxJNd7SPBJCG1fN7Rpj6UyyrmrATFCFKTR1PTGQnYgvWrAUhQvgBD9PtBBjnNYqZ",
  "key47": "3vnUwG3GvY9YehQhqFcRPvzYvT3RThuTm8FhmE7Kh1PNEN6wZxSuhaNYQBXMkVmBgEKL57KLtrWeaNSTDtEqB2Kh"
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
