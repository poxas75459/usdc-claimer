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
    "5Bk9kzsFG5qwtapFAGNWSz4ViPnoTbLhmdoFFHAZCeinxtEGFzQXMR2hfb9ZARrN6p4RrHWi92LvLaTj8KVsfKGg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UfriQimA6T2x9WBt8RTako2jgpe7pddpDKTz8iCb4FPxvrsrAEywgauLhfn9VimnaseuopWGKdSjUvcHMX7c9rr",
  "key1": "3wtatBb3aEYASvDBKu8Byg49X8istEji5wuRGn966L1RMnZHDnAfTaHicgEPXUDYZo5QpK51HvNz2D4YxckRCyz4",
  "key2": "52PJYicfZ4SKTjF4JXcgP9FkMXhq76CCAtzrcDaFTCEHLJdXgdY2qbSL59XDusrE55spyKjm2nDwAbao91DcC24y",
  "key3": "iWGjGtQTNASLBh6rVdBEibfQkfku1ZvWVP16zPXLiTCNQXGHs29herKxc5K2kZXPimANUJ8ryWexzaQc4bkRdzS",
  "key4": "4bPJxJ2sJdm4vypKE4BdAtgiKSpJWQ7iSFBVnauy8BfvTGrvgg53KGqXHPTF5QDudMzLKb9SWj5badcVSzX1ztaH",
  "key5": "52monwDocYqEYLDxqke31i4KAryDun6ug4UAf72PUZhRXU17SrS429J8EChZGa4wbjsKgEPiyUmUnjW73zcN6wRJ",
  "key6": "3xs6EeRSveHtJ7NhMp7Ti2XnmqLnpiDGo6Ynftb59aFXigAyqEAyo5EPdfxK3sMdgnXGq41a8DadTmED2xLtyCjz",
  "key7": "2UpWVTLSYQrum1rrWv7zg3akXBJvbxc5eCXNqVNErMvGGJEWnzTtKmvvVXJBrxwBF79SqwRzjMupjv5uek9VU4Ru",
  "key8": "AnjAJZYVebebBEkr1RTq7gf72BJ9QCYC1mdg93J8hRbTXpbCPBH3QDDsGPByTV2mcgPgGwgsKx5zeG4Z82JDH6a",
  "key9": "3NbgtXdC6pxAznyPz6hVcXmUmGt223vHTHN4ji9bTjKk9Q7PFXhDGpGNFT6hnCReUVH3QLCQF1ar1qsjpCDXx5Wx",
  "key10": "3VKU8i9BUGWQwL6T2RLRtfriEAAAsMCEyQJg5d2xN6hvVUf3Nfc2rcvbhCXSjJCkS51Z3HPT5Kkz1fECfe7txknZ",
  "key11": "3fXjen5t8AaS2YG4fXNNuv7yDYWnRT5CVfBQ6nrssVgtqUrzE8mJgMfhBsJedijFaWKMN26Wk5Rd22q9k7C44Lkp",
  "key12": "4F5DNyoZdDW3v49R9uZBZEm6nJzUT6D87mQqT1aSTqxhkdh7jXSjBAzhrpjFin7VjQTAPTDGFp42HhSmTH7xsbj4",
  "key13": "3eUQfRncZyvTgPr8sYVjDKMNxUDKSj2HZrRj2DjxstnhsCQaai5DE3upFPU2QMj9zoCcnAZT5Ftao7KA6wY16U5R",
  "key14": "2NJZRgqDyjQsPq9eC8tSBvtXq3L7TGMR4KHEdrg2oRbLcFaCWnvDnR2HQzT7Je7uosMPYK6u1VFLv6KHqjxDwhig",
  "key15": "EzJB2aGLefV4t24EoQHUvqtRmiRNUTKSXDdUcWunQXy9PUX7otPVWtpvMQRGzMzLRg1CtTyWkz1RtmwxLyYX3zV",
  "key16": "4uz3XkeSrmCSs2QAYYDWJ2maC36uAFrVjTa7psgFEQemBVLjRXVnXv9qK1DNee4sg7B4EZ69kp19hYaWmx58DCCk",
  "key17": "4h9JVBzvpjEcFJR9LYENNaiwoMUfoVd4qWaqr2j9tZHuX3vnPCM1FUMUiViaDQrz6hfQagbUivT6ZE7bAHDz2a2X",
  "key18": "5TL5pXQczEMK944oZQvEp5j34LXADwaL6kHuz26ogihrocUhm54FZ9jrkieXfVMmnRkzJVJBoSE53KHU6kCLofBx",
  "key19": "2KcWi1Did8W8LP1Za3jKEgdMdADBzocFP9TsWyzKyqoo2xR8LwrSnEwEqjJa9vSppuzTVJGVinTZ5CUQ2Wj1u5Rf",
  "key20": "4G8LtRSTFrjZKdUu1Qrag8cr718FHMejyqHeXq1fBqJ2y7UPExc7TvLa9LF1qjdHuURCo5Q7xQQTEP9TRkG6QQud",
  "key21": "3JmXcBYAHwRTZirHmSshd3b2gPd13tnRjB4HmtmV6LSM4VfNekcj2EsmYQMvsd7ui6HogdNrRdUrZRv3WEnHFEMZ",
  "key22": "3hEr4eUYEWxquocYg3kHeiSPoVemgezfDpWWcKg1WTAHb39xNhWjsJDT4MbdekzYA1ZWvWjs5sxqHi7qoBdwjbCQ",
  "key23": "5zvj5uSGvmx7wP5X9wXhJj7DQLjmnrR9EXbJs8ipmtPjfXT7T7jwY1v3i1Sv9MnVvwiNEfsw3kv6W4L6EyCqZ3id",
  "key24": "4n7h8G51xfiEPZE1nqahGNQS5RuojjLgG6tdshEnnpB12qbHC3uP3FLCDCZ1rY3TaG5rV8bQcs434raaY4SrNMMV",
  "key25": "32ZsPDjdTYMFdsChQ2g5BYUFgGb2j4GUipGDeTHcnqfxmNgd1F4oZRzrDvofJNjK7Fx5PPtYCQf7QpwsCo75ck61",
  "key26": "4drJebJwjk8hW6LqP6SLQw8ZroVRYbHqWqScxxAc2P3RQdzx2hqj9FjQZJ9avvcNitXcERfhcfm1EqZDmcokupRi",
  "key27": "4pJfyR5ok5Grzg31b89qfUM4qvaNffsPG3PJfy8XfSWcNbPuHCzuLBvqpr9Ed8tYMkMZN9qHrspUaWP8okuXaJuV",
  "key28": "1vkJ4Spyb8EMEwq7c2DNTFiY9yAVkx2R2W9kC2Mt1Wt4CgyJtsW9TV7WFL4nR6UKXZjPs8m8SQCQiBzd96TsG7f",
  "key29": "DBxVgcD6T75WLTXsGtW4GTZ6M1kJtPojKrcfrAr8WC4DLzUG5XC8PpWpSQwsLFcVu6niDSH3i6oDGKSYQYoSwWH",
  "key30": "4jxFFoVE2De4vXV927mQYFDb2tpMuGSMuuJEcuc4hav8Qk8cMg75GSoDPf3gK1rqQ8q5a17Tuzz6B7zSTqLCgU8h",
  "key31": "5VG5L8u1MFYWqVrmqmKvux6RVXMewSAabYXUKxKM48EToPELHqicTdzfbaCpEy3vtU4o54mQ91sCJvwxBVF9UaHW"
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
