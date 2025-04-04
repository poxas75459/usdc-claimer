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
    "54jdR6VYbGtFJuF1As5vAtfjgUXfsF1VmoVpZvh8Wx8zzf7zcAKKKSm8v1WPNPUkgABCvuBL9WbnE6AyekCfKAML"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nZ24M1AzTXTbkguM7ETCwgK2YKXoeuq3PHjqRm2LkWumCiUcvDzrEJt98V8jvwnMeX4Q16UTWQD6XbnLrVGPjJr",
  "key1": "5PTmFU9pwE1PePM1JokFckixgbaqc9pUM2rWRvJLK3JBt48ypL3EKfJBF3nDFebiDCdhKYKN9gE2DM9s5kMgqKtg",
  "key2": "3GLdJWzgBRNC8EXcB7DJpRJWRa7jfwQHGngnWFtbVf8JVpxpB6JdNWbLcoVXYunGCRwK8FCGbady7SFBLYL8MYkD",
  "key3": "RTHbABK6kgD4BC8BJJ4ss7QFzgVDBvgyU5eDx64Kq6wt93NiJT1bitW4QLTfwf1UEoztrBqemFrWZ6RGGrrHyk6",
  "key4": "67E8KLH2bvvtT1iU2mfnLTiBpdtVjs4EjasH2Xbu9Py4VHrEG8CEk9oNaL89HLxoMQ1ViHkqSoMrDrmPjCvRskr5",
  "key5": "2SjGiyxos3PKakxj1uu6W48pDfkUvudbVh5sNxLyAPkTJbqERmb6rcjPhh5bKoCkPRWGrjbEJWDYS3CaWjDe2Sk6",
  "key6": "3eHk3r5h1JPWCydDJFZtaKw9UPJKHq6ZjeDky6p7DhVHo1WeMuayH3hPCy9zRVjg3PqxnyPMwaUYwJdoj6AAbSjD",
  "key7": "4jcw9mRDqNK7nQWN4ei7bPTTJMFKVmd7awGARobgaXAFxNthwQkmRAfsPD6BhG4KEWwrNMS6CoADqjjdVxNdj2hD",
  "key8": "4qFt4CixsR2nPJ2YMPJVaPpCTC2PfgNjh2oNsWuLnSBfErLtc28uYitXYRbvn1TKvih4F6UkSEpU7WFjsQcbE1CV",
  "key9": "5eUnjU7hWQ4Nxv9PFXiyLtkprn3Dc6ECobve8XoZDbZccesK4xwesRMZhf7D1ChMk3FiuEjn3oJVG2uK3UPeVsB8",
  "key10": "2r5dabhsvpzQWZYeMNNveJkCwvRS8cUAvM8MUKGmGL6z7yj6XWFdnMKD35oFoJ52jMi8KXmAECy3yC8zSLxQsdeM",
  "key11": "djjSJBE5GHDCXeFwuXtFcauFAZUyR34WAYFB2yyJs3PnfBRxx8YjLcTciFjpnxzpHuUGQA9gwgDwfhe2isH22P3",
  "key12": "S5jz1EgPSeLy77tybu81Pzkg1cgJYF2uHXjJFQcb4KUevu9FjTy2KbY1tjUZhavHuPuJLUfBYS373iHmkMWoHBh",
  "key13": "21rVvsFbzoRLaE7QHq8HQqUV7qpfFHs6vcVRf2PLHouonsiVweJeRB4jQRPFm1wAi7p3A3XLahhn7BjPKn4JprMG",
  "key14": "4JvCp9dNma8hvufSw2bKAg3qncZesYzoVVFQVGwuJTuUGLQsa9m3711KoSE7LKDXTunbDE5ZW8wUZm33sjNFqLDk",
  "key15": "4YDkKj8J45Y23xfxPuAYvPVwCtWRD6r9H2wJMAXDiiyupi6KYtnWLwhXGEJVQmQoehgs7R1MRM8qzs3B2TnxjUvL",
  "key16": "5oa1faKZmT6jBrfXdJhvsKkGDGxcWcv4tKiBLPQnwvD5A7zF5FATAE8iGCqRbdm2ya7NHfhLHYwNRVv8FmnGgWkz",
  "key17": "25zu99qEtU1Ssg7Ubk2WuTZYFkEUjoy3h7UxANzsTp4ixy63g5bgVv314nYvwbM8DLgsMyvJrASMT4mA6z7d4i1h",
  "key18": "2W9gDHZQFs8RTJRMEArsc1GRowf7cMebV6wScQvPS1LYgprcegY2omes8KdiZtDURPeA25cckSgKm8Ra2K2QgvDY",
  "key19": "25Xt1teh6T186oQ8Cm9yJpkmRpnc5ykmkDrBEpvCnwyeivu8g6pZbYpR9w4iafPA8QhCutAWrppK6DNce4FkMDcu",
  "key20": "YAt5EobNT21fk2CPkSHjV4V4tv7ynV5cHTXZVrrpvumuksJp8trtp89wG2P2C5n3uGKsV2EAKvvsoJwLpMoxDiB",
  "key21": "4PhrMZKDe4djrtvBFhCcdjYTUsXScVQ87PDAmDvtLtcGEanPLf3w4LD7qcAXUKKrtcrz4qUAPxKZpiiLDjF5xBHE",
  "key22": "avzM6GTP5iANKZaCqgkmmFknPXmCP4cVbjZgxDktdGGbYHKfnC4AzXCiSZ5hcmjT5Apce1qxEk9uvda3nQcPktd",
  "key23": "vKTYxporBUAMwaQVyzJ6LU4BMPPnPZi7KYDLzjukymeW2XFoo3o16SR8vsqt7Ugz3MTDM4qquzFokgi43ope7TC",
  "key24": "3c8LKA8xkESx2dzDZjv4QTwXtefQutuJAPmHDd2LMsymHXRMwXAwhFkKDSonCtECeRPQYx8GKsHGXrRi6L51JDox",
  "key25": "uj42geeGr9ET6B26ST1y45hCbLwLhT2sVyYN76cdhKhXzmhmvMsecdLvM5UKjwZajCzYv2rMz6BUKwJa6j8t9kZ",
  "key26": "3Dg3osptZcGg8jWdnDPdHYR1b1knBkkL6HfxTJ5NsXx7MamgMks6mpbD8c6xazwkZ1e8R2n9QAuWQtkSWLD4zDvW",
  "key27": "26zFmaonRmyKUE9H78s28PxrYwNcRb4irbxKjHQa4n5ZDow52UyYCDWUrqKGfdzaozZY9D71DxKq4pyR7XDkVytw",
  "key28": "5XDwGedR9z4zvEdWzrxjAoLg9Wjfqyb9TBRHzz6uP1FWbvXZhtxZF4x85SmvLJ4aWXs38wcwSkkkenL7df7MPU5X",
  "key29": "4vXcvGdZceSuht55DfTxuktYtLCEG8bptnDh4fkgyePLfWQKh11QsLPhwaefcJoiXvWCrLhNuu9t5RLckhJScrn5",
  "key30": "XxtcjzFk7nruBFioLMrLuK8JbZmTV7nv5iVBMV43hpbxNVNfnuJAXvhtpr1v9eKYJXGejN77Z66UM1Up6uzDpzS",
  "key31": "wpU9o3ed8DPm5c6mn1LiPzeHgc3V1foBzkrzhq9W3Eq5RMqw8XhyMz78rAJM9D2iNGUFbmdKcjffojJJnKwXKGW"
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
