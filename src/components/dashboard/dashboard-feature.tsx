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
    "3kxaQ2nWMpDwYAhvWHixZ11yooCxdLAJvE9J2musbLmhVHEfbxuZijNUgMZfTf97b7x9RcKtYZv4oSJAwVeLxhU3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rnNue3DDc4rBBMV6BpeL3zADdWkdiWcQpvc8N9oiVSRJppHYDjiYJz7sb5o3E5JLGczhrxwQQc3XqoT1zcqEo9P",
  "key1": "2UFcjx64b4jUm87otmKJokab3B3g3LsMKhbxxhhJ38A8y1Xa2yYnc4vyPHNqayup98ekrtq2sqqCBdKsjpVi3jVa",
  "key2": "5K4NWNMkBSfTqsRD8otZeP97qbZDYjpfuUMzuFuPHXZYMoQbzafWy63qvrLeSkfv2v7gV4RR9HA1cKMUDoeZhns1",
  "key3": "4m4mY2fZZUyuzQhnuAh6RnosC758SiFELXRGBJV17gXAW62CicpytoKJcBVSPG5rgmj2Cc6GaLemZigY1erCPX9Y",
  "key4": "4TaqbtZsJJmJSBrc4fTqzJdGtyaDBS42z5cBSuVKs5zpWbxSqJK5BcJu8HURBzoEgT5CjuRABidpYVvCEqyC45tM",
  "key5": "5JDDBpDEJQQe7MZBHe5jr6pMwrLVJ9o8xvrbDgmEL6FbvxCkYkRQTs1TXVpAW11FhXxqG7nKcx77Z9mDKj6RWxA6",
  "key6": "432zPfATsq8vTVp675jbJhBPKRYaHK8qc1gZq4YudkpdHoSYHXhbmybt1EC64iQ6ZRKom9rh9ogZyWcuxny7tfsY",
  "key7": "4B1ErdfGtGrvns6kHFBEUEpX6YwkxwXDeBVYEnKN4MJn49XWfBSP7a2Vsuzd3w4GyiDMUnKAkr19s8nBXRyoNHNS",
  "key8": "kTAcTBKvFGroYqGu9HMkDB6hrYg6dZCTf7x2L6ab5miAxwZXQLEM8WuANhm2YvsbCmuqmoLgu3xjNKaUpmEak7Y",
  "key9": "2LtkXoCdcgWK38mopvhXNLwYV9Pim5K9Rgj7CLRKrKD4jRKZQW7vosFTzfFyfCZDLzXmdEx8AReDfNjLWoHLn5wd",
  "key10": "yd48zBNjdCgJZrQVg8uz4fA6soJ7PKNME4KXR1j7YVxYddfcq7yRHAQA3fLJsR6QmxosoWEC6nXbyi7DGPMfpx2",
  "key11": "2Ye7JErc1WR4xWqzN66pQxMaBo6ZKXbencB6cKjFtrbcEigssq3oRNvda1Hzj438Z6o9LaxJM1AaecXvFA5Yqiy4",
  "key12": "3Nys5nFmSVijFL34mLoJs1fh4HqxHGtTECP912dEaX4LC4tyQtApCaLzfDzGbocnPLkWN6G6JSA4qWFETCg9zmUa",
  "key13": "LU3EvfiLkmJMkE5xQR17B7aeT3nRXcFNY8zCfddiwSQY5jkrdqv1YUbYMKfBJN6UZ7UKnHMfMptjSqqW71u2PSC",
  "key14": "4nTqWhUT4NfnonVEd3ciY9soAbEGuJN3ebYB2NtzBq7x3rVpPD2CD9RdRPMWutyUmjPH8FPhBumbXxbswcov4X7B",
  "key15": "J8MrqfVtacR8qWk196SGKs8Lt3qtgcvMzPHoJd4nSU8boweLdtYtbx52KPkTDDJJhK63ic4qVLBmZSd8QGLp8Zf",
  "key16": "3Siz6kANihKHKXd8WUKtMWhdNFNkvjVGp4cEAjjaMAfx2jvEXmg64CzMU7Y7Ykb8qxkN8wxc7HtWgUmFm3LpiNFy",
  "key17": "5uf6rmpVLQSqv2dZ3TN6VC1FvW2HAoWzWwAZyiWhS5w1Aj1BSBbHLUicCP6zYDwdU3JqafyqHrqLKKA5Lui4J4gZ",
  "key18": "URQh5GRu5NfCGWE525gKJpTrCuSLC1DB1CE5oTo5Q4Gt4FoGuCQeqcyBfhA459NfqprPkbWwd9A7AgrWLTnjnbr",
  "key19": "5BeKiDfk3MVpAUKPUzKmaaprz3wKsXxN6w8ScjGvaFJb8CLuK1vKZ8RnVM5YN6hYapMnpQXhUbNcBuJeJPzm3YAy",
  "key20": "5edWVL8K3poi1GsqQYU9SqtWEms4SNa1GwHnNuAeQdZmrmVxe9nbJdDiX4QHJMTR817UrxNPzNfeNxhpa51uLa1o",
  "key21": "tk3Vpu2jhao4pYDUsE1QNT1eTpxXMBr9NQCixzdukUrdbVcMgmaiPhREoDrtYzeCrcwAvSTFHzFBFzsAm8RGw8D",
  "key22": "3gZoa53GcDi9d4QDpHtgiydi2sYeJMyGBZHa1ToHBeXBS9xLjwEyfTa83j6HrXsZqNDTVcopRax5sGpmPn9g6SJw",
  "key23": "3d6otzq7rRYZy7Hu8eVtgp8D4KzVk3QKy8tDekYMjcyEUDBHfMc5LJYwVHvqAbk1vyvF4skpJPgfmyiNVSEuHKu2",
  "key24": "CECyzqoXqFt1wLAMdAz4MYp3N6U3QhFd3bHAWGZDPM7TeYFX7Ao68pQS9D1UKmyH3dKYsBswdtcAEqQjaWmhA43",
  "key25": "muaK8ktfC6FWY7Nq6EqKSL13Gzpy4N2VASauj7zTrENYWQ98UfC9MPaijY9RU9qDZCKSRWYMGFSayiMxV6fAsZ4",
  "key26": "g8ocVYgBQrNn6vK4MgP8zWf5btdURjhvojj4uXyoQVRrTtnSCPXeKrizh8QwZMMw22R4yC5ftcauaRcVCZU3q6q",
  "key27": "32dEmQysd6eTwAxVbPSGP6xz7kdbv7uDNb7ccwMcdVTZ4ra4UfWsASyoTxomjc8yUSQ3VDkvABpbAK9bkQmansQg",
  "key28": "4TjyineX87bWQUXUYGurys2ZZEUFzYE98xq2WSLdwkfXwwkghAC3dZnHCgX9yQUFCtMpqAUnypdUjahQojNQr1mR",
  "key29": "RXP7KuYsHreAiCu9TCFDd48ZiTF2RENjt2QpQuxmWdfEp5UNQLMzwv5mZhYmsKx8T1GtLPUHWcjhk8bHoMKxxMa",
  "key30": "4Y6HozE8bKRxWridujvVZQzhCkXgTMzHrmVymFXFR2YuygrvjhqYR25CXq7r489HvE1kFEUdKQ5W4cE8b9v3iD4A",
  "key31": "3Y8udyFanc6eHdetRHsiixcbzTz7yizPRUnjG7gUuxaURjzaJ7TwuUA3QjJmbAtpiF52sE74fyhLENryf5vSs5S6",
  "key32": "rPKeD5ec4tLEmms46J2gNEKJ9V9MeTuKuSfM3FbARaSXEGw852q4WLkZRWCwLXLAkGMg777eHoQrH3DaSvWkg95",
  "key33": "3DNiH6epZnGzCU4npTbNLHzJn9Gj3EYp5V6fVUfY3VyJZ2s2bisR6mJ1zsrDL7s7rLJzi4aqCHhHUgy2xkzAym8W",
  "key34": "3cbtFosbE8Ru81JVCC3zAGRVycDv1TibuGPCeeJci3g8s78mcwSzBKiqqMRWMyhw6JG2rLiUAKAq89eihbJwq8Qu",
  "key35": "2FyEnRxrBSxz3RUobjxC2ReaaKtcqPBhP6MHSRcYwJxkqsCPonbroHV5vC4TNxKt2UeJEwroa8uHNac3HhoS1fme",
  "key36": "4TuuL5VXjPe7JRMxY5H5FF4UoctXDajg9gT6JLuFRqHqa2Rz5VPMbqKahTdaoQYCVmduHSx6Soqhv8v5Zf83xwXM",
  "key37": "2QoXnfYRiccaRBe2K6EZpqWYbPQUV3PgExEXm6DLL9xHAD4Vp17H8hLaDvPAk5FeUhGE6foVsubJBL8wBUwnqpWR",
  "key38": "21zNxLdB7Hrav1RtXaXLtSG3tQGijnY8kbPr3ga6XMisuAF1KmUK4tVQ8qbHukfXFTkgzkAzgipMKhgVKFt8UrWf",
  "key39": "UBX4padHaLJ2MFPecCSVxFFi8j4juor25v9XLBy6KyN8egHVbA3odF8yAUugrRPH8FoEzLuwDdGHpBHs3w5Em9C",
  "key40": "3RtHzzi4C7oCRveHge4prp2KHoJbgLpKrR3B8b37GsooPhdgEr97VRtmNGY8zknQTstY4U3vyHWfFBMNu8Px5xHp",
  "key41": "3eoTjz5YjiC8n8AngJy64iTk3aTjYbFpu8TvtsAibbbZPRyYrXwxqsDoxenLBipG4WygfQ6LDy2K6obGkxhc7v66",
  "key42": "hF7L1QhC6YrMwKprqh26yicKbmKK1jqZzkUQcZgRoMrorDaaeYiedw4j8SfzsBCozz6cEEfP9hqrFukeYgTzK6Z",
  "key43": "5Lv7ZSgje4EvqsTd4Fmcy7arUcwhzKDcuXRYwFu3enmcsMmTv3VZdQotX6woLL7nMezgEUeBp3H728efmgjNonV2"
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
