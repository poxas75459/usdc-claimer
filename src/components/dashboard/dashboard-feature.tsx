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
    "4Fo24xqhFAH3f93fi53SviDCJtVR4XkKdBkiubYa18xKqiLVngjZqFm8eKWY6cpXjVodya5H1EtYdVkLidAMZnoW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eB1KKRmnwvnKT8nr7jR12gC1idxMAVkF1yBvGAjekRzhP2r3mf2pT5fdY9315xPRdAyQ3r65m8Ni8VPCrfqXzCz",
  "key1": "21Fa5TrD146icAHV36jejrzRyQCFs6hjZKProbBrjeyqf6wYs5b3Xx91M19fmtJn1sqFmdh175unCn8kPQ8EwXiQ",
  "key2": "3YKAU9hzHAH5SsgB1F4Y73UbQpgsu2p8MFUgZKmYPfKjAwoVJq9UmkfG2WePJvZ1gfLKH7VytGLXCmTb1AXWf5Y4",
  "key3": "271dasbBJXCw7wVFodAYMw5VxcYBv4intuSAHPDxxU6cwPWARWzG6rWP4njRGZmgxuypekyVbrdEU4HNFggVVVyz",
  "key4": "55eZFgJaeucUpagqFk2rphUhBi7pZyT74aDu3Zcz3odq3RF4UR9sYn32X9FPKLaJoJFWeDbz2jjxX6AADKSn6UUT",
  "key5": "4L8nAmiQ3Hx835dn8oncTPRmjtwMNZSF7xrxLW8gdrN2UrPSPizPJhgYxdbVzAXsDbdNopkTmdKpe99JsCbEwxsU",
  "key6": "dBcAWUKMM1i3CLi8bCo8GxTQzpyNiJbinL8eG96ECT7hj45YZXxf7YH83FAJrZ5QKf3yJUs9QxNLo66ie3pbyRe",
  "key7": "6BDVkHAPkt9QWzTkhSn1e5KZeWGB8Spi5JK5MUCHBA2b3FohGzt5UTJDApah3r4KmN8MLTG7QEakrLZq5sHYWHq",
  "key8": "64VEvbQUJrzEaH6CCZfvTwDgy9zdXd74fUvxk129iYEjyPBW9qUoBJbvjhiL6z4DLPqceFpUBoA6eUZYjD7BxA8z",
  "key9": "4wLQmHU6Zr1nJffFn8TukVBUajkyhtqEeAMA7DAtfEz5a1JR2Y8Cm62yAu8p8W2GCEjHfpmCBQr5neKxQNwEfYwG",
  "key10": "4nLD6N9r9roqeiQfA6vSYHwLji34wj8SY92pDvkJrD26epKAwsWGopnwS9utdXweVbDEZEtNGerP5bTcJEpnxGzW",
  "key11": "3vG8Q3RiDqyTxVyhvcqCCYY9Qd4HMmXynEFuUUNEkeSs9jQpN1cRafnM6tBoCqNwKwjuvK7HXKK7v8hywnSpJRs",
  "key12": "3PUVa8eg5tNj8Y72aKMRc4qcTq5job9aJGZUJu9RTqr5R3rUd7kPRCqwTEpT2cAvpaYAgbvQEbamuMGbbM8LjSuy",
  "key13": "5bctWwMKX7UtpxjvZWKa1akHqSebqk7u5EGSUqmbRsLag35DsL5g5o8jeTrRVnKVzvVPrceqno7vEfiuoy6Y4a2X",
  "key14": "39nBV3m5sHjMDoMycDzY2eWptTH4mZziXVYtjyyNqkv1RoW6J6whGYGiPa1mwf452SdXryMWK9ZQuCYG81ouaruN",
  "key15": "4iTtPR1shAUWLUuEhNbWChqq44NDSF8JeFs4QPxt3VJDqMJ4GNJX9fZyx54UWS5ytbYJxJYp8MUnxQ4BJpDGUBBt",
  "key16": "2kq3HRLxDBez84a96ZnndBMBzZCjVatT8wB537N5FQmZm2Zcc6oqsVmBXzxYCHHCiCTPrNVHr5YDX3HRh7eRqFY4",
  "key17": "5XPW6hkpRV1AHjnZxiS69Hy2YK4U7cezhd3ifdrEpz79SBDM5bM57zp4c4Wac2LnDBEphvcEAVeoBh52dj9kk5A5",
  "key18": "5Gea81cM3a77VE3AgKR6FpWTZvhWXGYw47HnyxXnMnzuwPZfWS91EwojZySDMiSx4Hckc85PTRcLZsPGH4QdHqjC",
  "key19": "4oDq3T7Vbke6HbnYatrasEtREzCt2YTGSMHwnAsyi6vYqjgkUV8TpESSjS5C625AnwskJae3T2uZqpMrWHawXaJ3",
  "key20": "4vPzRwHjEWbCR7Z74xtWQTecgNSmB3XroK7R72PhDCbEQU4L2XobVSCCJzdQpDWvhBSXBb42keoNoDTVxuQ9ncE1",
  "key21": "qTejZ6tfFoCPuxZfpSmVS9Umfi8TSG5LYfXV2EHx3L1dXQmS3r71hjv7Ubz8biHWawFhWpJhHtMZa6ziyfCPKvD",
  "key22": "2UcrQEeRPzJiTm8pgmGpY5VtV4GZkkbRjZQgqVy8h7HUxBuaenwEVL7oBUnrK4GipaRMXNXNJokx29dxuG7zn3eB",
  "key23": "3u4yNQJCvuunFr9pjFNP3CtCyNxrSFt8UuDUDU5iCyvakUiTeV2VLLvZjKy7uJSvruncgEX9WhHkMH6iusdCVVdE",
  "key24": "3uP6tHAFJVNXtsyeXU7a9wqzfV5JL2bMhRrVt8svRdmTZHcyrWXXMDYgKTDykzRFUfn3tf4j1uq3xStKBEcTd79h",
  "key25": "3S7gZWjxr61Z68qGUT2ArtASTtZQ6eWqMrHt6DB6dSQrpNnne5VctDq2u1HEfsTje6N4CfMvyRsBcjjFkPNWAHks",
  "key26": "4b35Rau73ymwr5yfacMA9XVTbuYAGBzp9yBUdB7TqASLbBUbWpAPUSu6f8HpPjxJkktbuDwGaZQbnQrK6So7LSLB",
  "key27": "7VEkNLADyH6jbcJx6BNpk4hPHXpus7adzwnDsE7F3HNDvZFjgyWtqBwUdZDg9LSQQqA9XAKZmSsQsTdREZo68JD",
  "key28": "4VDVKTnGp2awmZXbepRcZ6sUkC7Hyrk659M7i6hDwMAZSM5tntPVvCvBJTe5HnDtE3JPJwqPsHekfmPUV5JiX6dZ",
  "key29": "5qmCKGBxSTBYLstuZtEWgL1rqWt2W99TNgHKy3spsH3NWsjTuoKmet2uidhVzAuEdaLRYwXHpk37vh1fqvMYsZEb",
  "key30": "4TuJjk6VMtvURqPYMo5YDgh5obneZmu8z9iR4mdwdyUv9bk1SQVUaijNPE24Z2csAei6WP7XNVtucppr1dJWkSk8",
  "key31": "2ATHLdk71Foe2kj1C3uyBhrqxzjLugrq3PLRj2uLfHQa3LPZ6WYmMAKY3PFMBEg3fqyMdGXhCYrfA1CCrt2L14BS",
  "key32": "5R2CepwqJ4UXG1tqDzQdyYsArJpfAmbTPK4qC58wXxL8Xt8uMX6deza9uq1scnygDVUbgY6yvgbByLr1rnVnGSsr",
  "key33": "3EnEKgdJKdVhyLm5hxhJBqGtarjKvJNWdeEKZjsttYrpJ6y8im552y2PHKkUFDwgsBtwVmJLUgzZb3zpemMAqTC2",
  "key34": "2g6yMf8qACxTeZ29k2bWPKq3pBP7GDpAsHMLVJfZHTezKNmHcbqFjoYzr7MRos5itNuSDy7NBKrMuirybFfbnVQo"
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
