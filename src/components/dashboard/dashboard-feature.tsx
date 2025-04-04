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
    "a6jCdyoTh6rACVuFjPoTcmwbdAmpa5vW8ep9eAgDh8eqHEJXugjUYRvN1JSHUjwdnN2KBW5mfaATtuQb1Qi5U3J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kVR2s1JAujXKDbSzLXNTG4Zr9QMPKNoWG1gmqkC4tj38KZFobA6CziCUpDznSunGauyoipQ9V4jiuEhmcErDKnH",
  "key1": "32nfEv8qVuzM5zeKEMbLnDVCYcrPUDcHosqDgEJTd1P2w1DAjtpe7Z4pgjHdp1quhrn68qqb7cEuGHxXMqUS7V9s",
  "key2": "3YcFz7LrohptJsZyuw8FsmxpPkkx3F42VwPrGmDhQShRoeuHqBy3YXSqBSgmvWmcfVzqQfY5RoFsRw4VDniVeFGb",
  "key3": "4fBiDxRhUb58jH6kqetk1SCzXwaYiRAmRHuYfr1Bc4Dp76NxpdSdPXTPbNQJxaDMF3BEPYUdK39rc4nxjtpi3kAw",
  "key4": "2maixM2ZGMVcZcAidHd7qWy1eYQcAKfsBBjxs4WKY696C9eVVwJT4Lf1NDb9aBVqebzGpwFgF1Vb3yU6xmXQtqCq",
  "key5": "5u3DtXw7fL6L8T6spUts3qwDoFz41MYAWoWEJHD586RjPbYZAUWNuCc8t9d4mXPQs7WkYewY6LRpvjFagQZmG2bo",
  "key6": "3a3tMMWKgrKEVPZLKjMvKpHaVEaohzifvFFhL3XcAb8FfSC3jyPKtWHk5ANpC5SJ4DMT6yehLQDPZbVC5j6fokFE",
  "key7": "5EaC4RR4o9LktfNB4yLeeuCM72TmWYG8bhswvrorhimBxdNa841q9ycj4rLjgZW8Ns3kUhiVvBYtS8EZaPtkGS7m",
  "key8": "3aQdpBNXNrrRTNHYiToh1u7EvrERXfZQN5D3TiTBzDWqoy86fEmawcCocp4GYw8LZuwusq4m6edDRUv6vsqdG4w7",
  "key9": "Mw7rhL677qrQo2MLMK5eT8HjyjSBuV82bQiPbRQssVvDqFwVyUQp1Uo9jbubRaXzf2WqkRmehN6kDoD2qketN6S",
  "key10": "45oe6AADRuuNFpBEzikTLNmRUkLmUWruXnLcVpWdyFLosNmnrijdtUgxrDqCD2DMYNMg6VtR6uLwGLCaX5pneoJa",
  "key11": "4Ub81A6NVyrRowLmb8RXfDSbyhcMbMkGhQW9D5wpMTc2nThAoZnQ69Q9YudVySA9VmxKXvh1anWPtyUsydGDvLMm",
  "key12": "45SwCVGwHPygQnz3TXFqgBUt2MMRhGZjaVbnWtNFrNXy4GThG88bGLaSiBnbH7dKw1A8H2vMmV1YkH3uFq3HsGe1",
  "key13": "wxL7rCHHD3gkRFEzecap9boZE6z4G7oCPqTLo9kd2DPu2ezcgnpa82gbe8YyufwJeDt3rbpABYQhkhCiU9wsLWo",
  "key14": "5H1D3S8d4MP3Gyd928qu8BxXjqXNcWxkqFf93MJcfSFNaiHANoJLVBKe7WgTLVGFSV57kjqCR9PeX2xWTghoZmFf",
  "key15": "iV8y6GDXqmzpof7LxDDgTKaCLFWqinsngN5cUVq3UbJsvgtpa5opeXx37qgsbbmhErZUBNjsaqo9cQeVX2JuTg6",
  "key16": "3mCQM3g5wEWUJAGHcMTG4S2kjSwT5hPKM6eaM9Cu1iDWqrjZKJFciewoccPzWqmUZKqBbN8aGHAbhyxFdx3mfX1a",
  "key17": "q53DB5inbukgpoxPfmKLe9JqENckMj7wbsX5raXwJBY73wMGEHuanEDeX4RMrJJRQHtvvR7sUDkFfX6rf1DzVBR",
  "key18": "21SQARFohYC2axckGgW4GfYf3uPxSkguLpkihPkqu6hQRYv23GBBxywThBSECyNRu89SNWba4r7hy8RUNx7TxREf",
  "key19": "2MEhhzXy4KPytxqnbxyEBdDqoEFTdEHoHp8B6ddmWx2mrdZLqqLDdb4v7CWBpQmayoeWQN2RAJzYeubfbjgYd1gz",
  "key20": "46hPxBZdZmFYaE8ykw3pQFdqt7qnDr3hBf8GSfaV4kHusoPAYGDbNAFEjnK7LDJWJCr1bgcfW5oyhasohmdTT47R",
  "key21": "2xdZAZRwNy9XgLKwBayaNFFhLppwc3CSTpExnQYMkGkhrZ9yrhuHQggk4mcJ4sQiaAdkGjKZoNchLNEbPym8CsHK",
  "key22": "2UTKJUgPisCpXv5gtaE1HxoCFUgDrWXNWrTjYbmhMSq9n6CXwjThBgy6pS72u8werpawse6cMFBUyvrP18QXe2tN",
  "key23": "k5vFcroXyrQeLzxKbSQCaGFJDhLf7QZYYxzJNDucm67qgmJMETTJN77iiCwqBwBz7sm58PU83bGxWyeAots8dCC",
  "key24": "3Ccoo5F2eAW6xEuhKX2PUdqza2RfBnq2pWpMSjdNXNb5G9bNRPH2vbZXCi36EqE41FB79bAFXWwnbidnbNEBgi6w",
  "key25": "5zzmwTwKjCFshaBfcnhwhjfPPTPXyQTu5WTK2jffNnij6SYuLuQK5Qbd5mqW6mN9KSGSn4U7cCQ6KnXej4NSq3Ms",
  "key26": "Yt4jvnx7hgTQ7b8NGmhVtQJdSkdUJLsx96MVNS4Vmg7iQMSu31Hwtg8Sq4PXse77ADLo7MiiCXUKTie8icQsggY",
  "key27": "23saV4Z7gEnaeDc6Wm4gzmiCRnbMTmSM4cAbfWejNMu1pnJDuDDYVYPe3jKMtJrJqaR7y49JWKxDoAciP1ovcmCf",
  "key28": "2dC81CQ1LuZXTmZ73CyMZYFqgxDnSgPdFukuvaefZX3SYymgByFFguy4t5QFU6aWkFmZMHzYBuPm1PvEq1FVYB4D",
  "key29": "4P2UdZJPFfkJaqY9DNYrWa3YZvsgS4KMtm2QP5LwN5xtLkSshU9QY7wZZxKEooPRuEUPFHtVXuZoWrkuZSViDAN9",
  "key30": "4MdHjDtdZNwizHgB9SUEESb69UC2j55WQPd4biyVkaGUUvahd5G1S6tcQ69JxfeJ9j2bYVwFUqPQc9afa9yrCDv4",
  "key31": "2KFoDPqS9gg8Fqxwo8hj7ccY3w5Swk1cXqFY6D4pqL6Msibphd5PfznzwQQXSy9sKyUBvWbNXj2sDzpXL1pXutwZ",
  "key32": "5H6BcFpBgQSmcD8B6B3V8gz86VDy7HiHs34JZ8KRN1v9tX5hyBzxmYESR3Tx8541361jpoKzbNoFMpv1Lkg84SXE",
  "key33": "4Deka7H7sVBXwUGComKpu6S7AA2sKxJWV8RE8gjRHVJBS5S4z8AqQR32rEa6G4LGVAH7xCPKaDdtwjQx74hdQRqU",
  "key34": "3PQgD7RrVtFpXh1CLFQMMjB5AyPUQnfKQkpwcAX7iegycuJqhbyi1VdL31oDH5Q4dC37vR8uXXY6734HjXVzxzDG",
  "key35": "5k3f3wLsNLGHAME7rac3WXmTFrq5RWxDcGXasfonaWcAnZf3Xh5ByzNPUjdL3icfqfZCw1Q1Ef2Gs7HNzAma4xSL",
  "key36": "2FN8Hqb5PgyUHp1N2b1np4qPrMyxW88e455C6sFyE8YpxB5oAbZHnecxPG6VKzhoeAyohgXzLWsm8FJQDjPQCJxS",
  "key37": "mDmfn4c2seTDqysios3rshK5F1HME3mcjvvqA7rKay9KKpitLfs6mBRK7hZoX7i7Ys95oFbr4ZCD1i3r7e6rSJr"
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
