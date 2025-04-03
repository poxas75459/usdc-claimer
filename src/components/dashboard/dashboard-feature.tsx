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
    "4obakwtVHLJLfAAstqSoPBc5dUUtXKVwM6H2JG9skKBiKPE4j8YmEhA7ToQHgtyyX4hqsUR1SBm1EnWzTbowoYWp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ty3D3RhRaDzqaEjV6VHgGEVz9AR4iiN7fcShtQdoagsY5yuXd4iV2Hiv2Uo52Svc497pw9sBT6jUQNmhNPfWwwL",
  "key1": "5w9TZJ1nNSqvux8i6HhyxYANT4n6kPpcwpoU6KeCmuP51CBFtv5q7nNYKS9HjPnWZrj1EMmNsS1dVa1MGZQ1rcTj",
  "key2": "64NEupk9bWifGwQRTwWTfSiFPxb8e76SeNE4euTEQuWPnjR8yJKL4o2LhACbtYs3tEfQAZzHNCfdA6eRxzDJtUi7",
  "key3": "28iPFkAbjerJj4r1Vu1VYVEeRT1i9UbXoJGGxQZs12PVTo6D5N9StAwDkpZxKQftEpR2vT8AdrjzaqMNBA6urQcJ",
  "key4": "59nBHzH581NZWfibh4754Mcy9HNodiHPjKXzuG9fRzyjPS5fHabwXotX7GihXwJp7d2kieHEScwxyAcGnM7HKohw",
  "key5": "DaDG6Rs6rQPp3QXkGhEhGtjtSzfBCKesnNpY63ifGZTVS64WjoLj9RrM5i7oQB8q3uSxMSktsocDS4r2EQntB5A",
  "key6": "DbcANaLasd5pxQJpPSVjEbPi6c3ooYBVUqM4sZZAFTQsQthZTvaJjirY62WsVtowDch9ikkUuYgnqd7C7YCQmJh",
  "key7": "4xexQkmvXXmpgwAWUsozThGp3TTxQPVmt6Cpp7KdU9scY6Kj6pWLGNHiGkhVEjZZQwvcMvbUSEJaTMULykrFDnM8",
  "key8": "25uhGwgFRUYuAG9uHop3gYemLpdFoPtZi3H9LekRWqmQ7Lh8doK9qBtNS8M2S58Qt7sDXgp5mvpGJEJm6AUyv9fT",
  "key9": "3gWGHjMsMqfJbwkM9mbUd4bHmvVqf4VG1Rcqd7vVAsNETtSSvPUpD9xDkGBtqGnwpZovRtfVBTEQvV6iC99fh1pU",
  "key10": "42PJzBihd7vh2WtAYJqdoKMJQFaiWvmHwXjEiugLjSM2XNhc3CCXqavP7kS8z57UwGRknBw4cSh32Wbri8sDik69",
  "key11": "5pDL6QajPVdyK3gbUk3FduWqMuEsKQsNdwEE7mBLzJn67KGFbtNkMbBR2gLNGn6mdSwbGgLDNCMdKMtGd7wBq4JG",
  "key12": "4oSXuCxCmiWwqNqS9WM5X65kmfGaRxZwkv1UAzP4uEYagMjf64PLuxSCV2pj95bQTEaJVsh9HpMcxkxfQuMUCPMF",
  "key13": "4uJaTk1ZNUGh2iQLAQNRhEDN6nQjyjaNVoBJ3WzCcaYrBRnpL32P62km7JVBuBhKvwDypdgN9U4LkRyzWKpsQbrW",
  "key14": "knZ52yVZTSNS87BsxA5hPQbT1g2CGJAgYYwjBXz1XyXiFjU7aZkt9naVK5T1wUjxPNJJNXSjA5ShZgWJztYF4Gv",
  "key15": "9HU21u8YV4ym8B7G1ZupY3e1xzt5VPrMFJfrNMjnNJD7q5ZKi1G4AnsDEaKTxcJ3CjN3CcBUnEBrMTFgDYhyTDx",
  "key16": "4ucHYXvRxLLrVNTQRd5vZGYCPs1opXF172k64xf7MMzF9SMMMXYvYbibBivjbN4optvuFaRNUeQDgPMGVZiAdHzw",
  "key17": "2miTt13dk6fpVmHUP4ZPd66tR1e1rbhEGxxdJiYYhWYk7EC9NLAZRqRpXrViPqpdrCqBHuERWsP9oTgc3jxsPv4H",
  "key18": "4qxDEuN4EtRZf7S9RswmQnWcpXVspFo8GXYxcPadAvi6LxsCg5owzb9Q8HoVjBgaVqxL6eCNDVPLrWqnXpgk2VLe",
  "key19": "25qRdS7sUq2ki3WbekVkJq35XhukVrhnwxfATe96EXnqjiS8xcydjTjaZHLMSH2TMzxuco8ehmxvF5ZX574BMAiB",
  "key20": "4KVCFqys465Chqwk5uLxPhtL1EcvGgG1VfKWc3JNbM79mZgSUDxQdP17wbGpXiDVLzdCT4ZGHpSGYgPuVdgSWKpJ",
  "key21": "51ogpzdGYiD3Lu7WEAXZVG369TY3PgpLZD3unQmpLnmJq8hswT7zto2ohttJFCSPqCd8Tr83aMkfN38J8yTc5Vbx",
  "key22": "58h2zkQJDwqvyRZpHdZkqEPCYXi3vxL8xKY4tHaRzWoqRviEGQYSmU34FQbiZf7JvhtG8LjN5y5Uf9RoPMsjHgiF",
  "key23": "4fpWX3jkMY2dMYQQHdz6Vzu148vmCDWT95EHUCqB4R8g9NEuKrJrtidi8bzRocNL8UyodfYuMepZut6UUYSCDDJX",
  "key24": "4iSrvP7vRQzQGs1kEKEQShH9cmSLrnuWLdhC6kcwYz8PYhggxHDu3wYBm8RRqg1JxBmQVap4XkLoqX6JugWhWPUz",
  "key25": "3F56aT3DNEoe5Lz6epMAQTRixbcvNb7KEEPh8LWUNH9N7WKT7MGRuM9ejxsrT4jaXTVQ9mRcNu6cv8KQ7QvieWmJ",
  "key26": "3mCUjkh1kXDVXf5fPkYdjYvcN4aEwUPrRZwyrt4q2s3sTnTjeCPyCMZkWfQ5VT4Kxqq3zPFxbHmnaXc5JvQFdoac",
  "key27": "2y32JFdUjZhL3XknU8YopCMcrvhxnJCJut5V7q3rLvvAutWG2mhUK5tJF9945DLzVy4gMa3rWsjbcHxguqsNCoxs",
  "key28": "2K1gDZszXCuy3cJfF6P5TibuWit88oanxvJJLW9ynFi33VrbQUdkW6FJP4pfF5XVTvUXTmjYezkYrrYcuSkQToPb",
  "key29": "4DvFLGFGWdQp5sEyXbzmAodCfAi45Lb4DL9h1kfZqFovycuDstF8xGu4QNEWh2Hj8FKYTJRRYaUMiHbZ3VbNixsP",
  "key30": "8SVTRRuy7quJ8b54XS94hoYdoBtXaKn9WLGovfm1eS12Yr7zjZym1jJHSBDbjbdp9TYnwRrDeJs8SMf1ZtVume1",
  "key31": "3onnzwaiwYCqB2G5hY2yTiDJokWjLWarRuvppjK453fDTwS67pXEfXooZZMUBS1CFBryULY4xWJZ24X6k51NqtBJ"
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
