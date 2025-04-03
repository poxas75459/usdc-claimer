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
    "4FiEUKF3kY9Ez5vYqfETSupbJ7bGDdDjVTQPrhZgvawbw59RnVy5GjwePawz5VTkk9TBQj6Dhu8YQz4hutYoHTnW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "565aaqVnyLreSnnmhLuC4e9yYhqwUfvErNf1sTYhnqrfzV9HxXArctM5UvFk3jTK9VpDrEZqA2w9RkubzE8SasUi",
  "key1": "4hzriJdiLS4iH88iRXz5FFFwmjPXq6dzTy3zCCfCHoLu64Fv598WKfqdNGsN9mbHawgoNucDmvdcVKRrfSRS9pFZ",
  "key2": "46YwA3RAAnZqx65AopuQs5pfTuXLcYE2YCNPt8vxGMNKzt2rcFN3Lr9W8NqqakCxrfnoCd7gmSebWQkSgbo1UXF9",
  "key3": "cqw85QisHE45ToVs6LbMqk3iBoPai6QgKy32KreADSN57Apt6uhWkZmZynnNgzj2kXmyTdxujFzwXNWqXWRk41D",
  "key4": "zKY2yzx2YgJtU4fBCHjVaNjg1XPPNgy9bCNP3YKAfcW6jgdZ6nEE5ZoEmAGDPQ4J3DjE8NNt67bvpE944NSVZ4R",
  "key5": "5GrKDWDhpzVmG54LoxGbnHEn3ZAqSsXyonHhq2zLfoMqxZgJXVSMXQKK32HyvzTteDxrDyfp6aVeyoaBCJE5Tybu",
  "key6": "45DMuBpno9BYxq8t3tiCHp4jSwrE1k13tLF6FL4zMGP57gYyf2rrB2UmyLngkwMc7JabUMTQCJnWUwFo57BKuKUe",
  "key7": "31z2ZGn63v6Cq82TJG4qakcqPTWtpjsaeGvGdjBLyNULHxYPbSTLk6UK4RbxCcRXsXg1BQnR62KNGiAKu6jXfQYu",
  "key8": "4WqBxhg1HdgwZtgDSsgkwzVFfpNQyca4hjx8HMRy5Hcbv6B9eTEehP9sQXoJGtdB9FbXmz6rhKmkioY5ugDjgWmQ",
  "key9": "5hbjGwNKcpb5awg5m1nR8a7ritmdNi2iTmjVaHpPnTP34rpBwdeSBRDvdBG1BkY3MJRFiqCnkKHpXxzvBmX7KUX3",
  "key10": "27GjFQDzzmut2XRA2eFGXpYBG5cEoeo1yXy2GNoRgsJTSmvrX3KdgwBLMyAXAMEbXp4CESzo1GKNzjcTcYyULuuX",
  "key11": "4bBMwfvsaEnhaBFMLrRuUM28r7DjYB316t92qxNJZ8Kt2Gz1eNWsCTyUChNp1GMYr3VwHrNJGzvVZ8z1r9S5GV1q",
  "key12": "2ovKBPF8eSinyhTpVeMC9Gtf8NpjWrdsEZtQZLsvexVneFh99tqM1DD5XLUBPKYvPjrsRfDX2yYPvC6h6rWDnsXY",
  "key13": "3wXccjrTUfUGJtYnnvEDpAajdHsuhzBvmCu4QsyUavWdjDpruf84pgztd6jZtm1Jh4Xm6tco7CTDFZxffLhQDGQV",
  "key14": "4qg2KJHMqp7m5az5Ljyac97jw4BbLi2fThFtbGABVt5zHVS3o1VKXvyyXg4ZYkDkrhicnqAxeQPjkyiRC6XDrY59",
  "key15": "39X5VCzvMZ8qKQ1KxTzqjFVBwM1PiZTw9GRBrWiLPyEuNGtrWrksiTPJJDwtKJDFnrVG6pUGxjqzCvu2JGxURqfH",
  "key16": "5rFhvcLFaB9n7kPSvW17ibSoHR5qQz2BYCbugUc9EthrJaArpiqF9XyYHGN1YbC52XzgtnRtB2WzLqnCd2RPzixn",
  "key17": "3Cjt815wYVBQj4fcjcymK97Q5igejydyHiakhzaPKQFNgr4ee7PB7L6gXfBcwqeobReVFPa173uubAqLw4yEjWkE",
  "key18": "CBgWEXu8YYar1kdExBYX7zjDaPGLeTD44obRHbN7LRu4Feedbq8JFgMovGV3utNMfKh8RyQ8dQo3ocLsVXwaGdf",
  "key19": "2pRVkosNtjNUqo98AEXTEENu1EajG5yiTRS8Dd4bYzCiA5PW5NoEnX8YkyVUdkPyUEip1un8wjvyp2G4QDAZxQGh",
  "key20": "3MFMmzvfR3ka6Yrcf5NtRkEnXkg2pQcVjxHKXqy8YUhsGFSX5QQ5RW2mfkM2aJJAb4ekG2mh7AgCGwUASkyFm5eQ",
  "key21": "nqokqfsdN4gWf6GpuTG8zhpCiXHEosKetDbYEoyoDiWVRdZVxzGa8Aq73CEoDdmdTjb4wsMfS5Zr7GNjX4yw8xb",
  "key22": "4u3pxghS65UQfFbvWSzKhXhkyceCXLmPT6FM5mVNiHuJ7DSCtuWQrSu6vRFnp82tJTosi1u7bRpoJW83nMnXMZ3E",
  "key23": "2DEZ9xmuUArjcL1ZhqVAtyaeLNqKDPj6AqhCkkaGSjHvDyhcN83fqLLyJSzNx5Hter3uirgWGLyGXKDyGL3To5Yk",
  "key24": "3xcGaT5hCBtsjgPmkWDCbABBbvngySLeoHKbPjVQ5WDnSe7sfsTxeEtcpJvpJfZcPqvQYM6BeAyp3diieAweYjHj",
  "key25": "3MWCSPN5yYoEommeJPxaeQDybYkR474D1JaNCiCjFT9c9ScG5NE4Sjor6jvubj2T5QD6gR38vhvXHBdDCdDxxAgS",
  "key26": "GVgEEVzJ7pmUEuH4mgBCPeQPstQ5zMD5QdNEM2eXz7R2S1kXgtJGrXvRu4Y1vxWv26andpNQdyqVRjz6aKZmZA1",
  "key27": "5i3DLHv1n94KMNCNdscgELQFE7i9nJXdeMWSLpSdswLkUaQhSAgZKfMeLysDDRnpureRXPKGePqqFrow2KuQdj3B",
  "key28": "RvZMqP6q4MgbeofqN8eeUYQojztyXLfsixexhDgk919jjF26VWLJrn2bbrC5y4ocGqHAgc8GTvrR2aAzTfXH5jx"
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
