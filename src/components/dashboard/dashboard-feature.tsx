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
    "4NdRNLURahSAF5K8u4wiTq5NJe1xftCmuv8f59ygTrnSJgmUSLJDHocjPZep8zewUHN9YQ7dV5bjAuAdMaSC91fp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CVM2UoTj1TbAsDdehQ3wckni4XzwGNT8TWF8NengPg6faDZHQAeqFFpMpd9rSGh9TmGn6KWptztgnBeTMAwPb3N",
  "key1": "5seRG8Dpp6yn6XNS8tq2RzdUqzcaAKxXeyyB5XUzHXsGjZFDbvrdvMQPSjAEu79mzHqqerBLrw9GY2mjzmLnd1fs",
  "key2": "4uupv9oj79QNCehqsTp44j2sBi3myqjv3UaifPKVDCLBC7B2fyAwqrovydqTox2KBwEbGHA4TZD1TCJNEivZNp99",
  "key3": "3o8husobc5LvhHf3wDc3QMrC6KpF9Gwf57rPdWQpEvfks6QRK16Bnexpg6a6rUA6qsn28M6KBKepAwUPtMHFeuvh",
  "key4": "4sdpkbwC8RDyD924Y4JGsQiU83oTgfPP4FVeDMPMoG3RWA3F2p6C57HtonXT7vhtkwAFbx1wJZ5JdSGYBbwmsL1V",
  "key5": "2epbAHzKnZGw5AoZ2zmmGcAPCzxyM4zgmCi6xYBzZA9C73Jvgqt4LxzrPcACB3ZNUen1oDfQvdhfcNSEkPAsouSn",
  "key6": "3AH8KsGX7GWW5DnZCYrKbvJ6wwUMkJ6oUnzrdn8oPmWvL4P4vAPMFg7c47NMGLgQJUzp3uQFXnwWVZLKgtorDUfo",
  "key7": "4XPBC2HJF5PT8xpHgFna4YV5sV83cPYGCz7hPgY1djBX46uz8bUZuRVLVC6Ypy3DTPTY72zndg7rGE473QtaHi7P",
  "key8": "2xbNmjkNk3FawtL2hfUEBdTvfXbNYhCZ5KMA27LJoTZbfX2c3tWPnxyUo3g7cZfUQjRrsefEvKFzZhBcaz5jEJY7",
  "key9": "4WedF6TPg1WWS8FzgyDQ3FZwmn3Z7HCnPMQumrnFVGRY8F6U8vZQmXKf6ER4Y82s1k9A6YRYHxeTcqpcAaTc72F8",
  "key10": "5VcvMA3tHNSbXnQy1n5irk6NXt1sHJzND3ch9LVWJGXXktgU33NeYnKpn9KKxtG7qNrSpiP8ZKPYsxkiJMHyba71",
  "key11": "5mjZMabFguoXFUpVvfstEhYCVqVeFs31SFkanM47gU9S5nqVY1SQ7FUVnq4YBwgzVYHtkQif62ivewCoHdPyFERh",
  "key12": "2EGi7zUrShm1mLXW74485n56AL3hjjq6JSBVpjyFjjJBxNG6N3FzgadkzieftKw7H7vtxi9svdApqbZ9NqeoEHGd",
  "key13": "5mtdfZgGTLJUYPN2AbKC5RyFgGkAxfTqtQL9pQ2JN6v9KYfoNxFjq6WUXLD1QYMVJeGXZihBLE3FuAiLy2mgFcRN",
  "key14": "5TsDDUuQq2JL4YRSjmUX5167HP64Z8jm96AZ6f3Qe9Y4sSgXZ5uYVPRvSEb8RDLv1UtJs2H9VW5bBxawpfwypqE8",
  "key15": "2HbKMn5pNp9TATpDoZQhEGweMV41258RWzg1FVSVuoX2BoxKQwCEmLvMMx6Xrmi6FSheeVYvanWjrMtw9Lq4k1Uw",
  "key16": "2Ge7akPpH2Tyj8KM2sbaZYTQGwP6op7dZciC6QFjVShEQ5AkEos3sFyAkyBvVTuJrM1uCg2miQ9tz6YL8cFc7URA",
  "key17": "3Pc59bSVPiKkPX8Sm6at2Da9RhggXc1X51E3TRV8Y3HoXpBd1Tszb5qTa1Wbstiesjzk91N25Ee8VvpkTfMz7Dq3",
  "key18": "3ewSESGuU6HkfK2aLS37uWtXYNeC4PkendqXSADj5TqcajABn54avbJY5ZxHH3NKWoViVQbusZ4mZurfecKwCpNc",
  "key19": "3sYqpJFhGnwztpoZm1JJGabL4WzcTCkvogBGx5XXmCH8KgP9CD75soM2HCgaSqqcuSoqW8EuM3D7PWfQZ1N9fTDB",
  "key20": "5mVwz5PUThRBtuCpSmpX1MhWX8mcwgCeKmtcadRi6MRQLPEZDU8Rj7HSqhgedTUGu3Tp3uQ9BTTiEhgj78dG7e2b",
  "key21": "5sBL451biTjFSB3X8HDTcXyJ5bUUbmXNpxYLAT4S7c83MNeTxVvLRyqW61NAvpLm4CHHqg1q7SHKGPRCuj9NkDKD",
  "key22": "5TtTuYoEuYztyYVrecAdG9uhqeHbaGph7VFBq2DMngoBqYjrucV7y2B1vFXbL9q3cjEHPJTZqXApfGceecGXGyFt",
  "key23": "2iQsgvRfz4MGNmTN5Ss1yjoa9yUUE5wY5GHWMrqGTKwRr7hiwJ6dt6YsZwdVygFBGe5Ym9sjKD3Ek3jcfzUubxSz",
  "key24": "2MDBmz4Xgtc6kQXQaaPBAh3JEziJQjFU9c6Fy5AEdizPjVEcUkgXdQCsNTXU9HdE9oQiTqzUfbqTwCSHra72vXFq",
  "key25": "5ftgYxDyRoN9AEkXau4zLKo4vx8JwPXrJAEfn9Q6ghMnM7mAZ2ZMLdWq5qsf442TnTRetrGXBqEUzohS4LmWYgMD",
  "key26": "2SY8jKyy1LtViS85espeScJB87mjfSFoazi1WFTN1FLQDHPYFmfWCy5peQKDDmbLbewGoMBJqtGKbQbXP3eUZeXS",
  "key27": "JeRr8bnZhsrbesGUGrJ5m9nBLAcuDWrLd3X5SbZPSEjf1KP5Z1vh5QPNuNnry64Sf1QQyjq7kmCmLHdfaB4PR8o",
  "key28": "3fZ7CywwiBrfBYt9HDpfGqU4WK5K5cj8j2SfMPSnsCmZBLHGRMS2TeTvbELCiahbKiCaUjkdkrDSwxZ2t8wqijMw",
  "key29": "2nWdABAFeSnWsdhhoiHUnY3PsVodjmWrjbs3fbdXkVyBkinJJzoH5isXCPMjebHzybnde1fpc8MBS9cp3U3cirVm"
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
