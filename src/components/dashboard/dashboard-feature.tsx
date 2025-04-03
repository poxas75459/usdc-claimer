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
    "3TE5VJAL5JVPj7EcVZb9mbQMJEofbmRK4x4oVS2GnNq2qqnY2HLz5cXjHVaRi8GRoKC28qSuA3dkP2mjDRgc5jiE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sVJryQnj7JDfTJgPpH2YLqqv1dqKoiskEkWv1UT9ZkKGu7WaWBaSAuQeWwRJp5gVTCnujzsgsGr5LGTnfqZsx1q",
  "key1": "Z6Wtk1dB3UgEhfUZmY5a9YVDQGKNBwCSbaxVzDH4c76VENLVec65Vs6Nk8DZGbfXjRT3GMVPY7iaKwm4VJLSmWX",
  "key2": "36XY1pp9WaP4vTq5DbsoHMAZrT1BMCqHKe3vVjx4XxWdvKUmruW4eHJEYp3RMfAgcyqk3RUTb9Ko4mG8285TAuDU",
  "key3": "dxAr779BJvVA2akQ6oPonS3Rt2yxdfWrBb2VyGuEywCKXLvVDSUUKG2ryovRzgMCs7r7CF2YM52XzvoDvGihRVa",
  "key4": "3LYD9XbarF4aVJnuCrstM6E4kyJjSHKnyxbVNbNwfCgh1wit1wNnrkaKZ6sxX5ygwPDryoUmWxJNFYtSq7NW3EcK",
  "key5": "2D2EwWmE3QGuoYagN4SDXPgGFtxNz8jecsqD2zMj5DwifRjVxfNc8opJxYAZyPT8aFYvxGCWmH2Xbe8C15tBnVgM",
  "key6": "o2ExSVGq3DkJC7QEftMPmxYxe8JYtpuCJarzWqghBTnj53X6kMv9KeHML9YKSaBGBFm9tmEbay1AfUPjA3fDddR",
  "key7": "3LU2oUuZLdaEbxdKFvqyLd9KdCyNFonPH1R8ZLzoSc1EwFxbaHcpH7sESM2HwzMQnxeyQyBJ285SkFC5KHf4HFJc",
  "key8": "3cd5nEBYfDEtrTVixaqFAvDvXz1c2K8DAAR8LZnxDTThaKZtji5b24JS4ix4uJ2WpvyYdvNU1fkyicZrkRPUs4xu",
  "key9": "2pVFR7HaLHvg7BdZw7FojDHScUAsypyW6kgpixFcA8EHCZsiVd9Y9WasE32pAGSyXP3AVvWDsWt6BJBq18McnQau",
  "key10": "LZhg17wBNAPXjnL653KkP5FxZZGWRDfAiyPjDJRX6iis2wiXCYFc1TdvprDyTCTDMNW7Z49GZjh3uba5X3WXevY",
  "key11": "YntmEgQ3ZcdSqvWdXv5zbDLa4VNPmMnABtCbsCEoAyJ1txzgNDuh8strJNQ7T4jfHoYD11WqULQCfVUhUvub1EE",
  "key12": "UEY6wZpmcQYcMEHs5KnaTVnqMZTU5kfEexbHHbSu1Zdt9w6tYmbmc8K4tw3WESinpuztX83U8RnxnJzqVPNuMGk",
  "key13": "4f57BTaRJ5s3SF9jDG5tterXdpGVCrd8B9zb3MhdSWUcp7Vs1FCwwcWPfK9ENkQ1hnv78gwuq2i8Zup6p9GK8Vr2",
  "key14": "4P7s8TN3WhKswn6Pj7cdhgSxLUX9qoShymAsjVEZG9gtb4uEwbujbZmaMZ4eTQN9UWiixVV8ES4LF6pmfELX42gr",
  "key15": "2Cyfhe8Gya1TUyggVV85iL2oHAiUF39jaaXQw4rBESwUNLH6qGbcr92TVbKyPRdrd3KqoWWPRxyYoxXmLqLAUnpe",
  "key16": "Fcp9RgXeVHxC1UnpypyTdXQzdT49QrCW6tJYB9cYGEqhorVoZKjRGLbsWv3mwW8jmsvmb6PTvKdVN5GSuXfKbm9",
  "key17": "4JvxgwzfE78MidP1wW2XUsfwZVhw66twp3znzdwkhfXLA8dT6YxicHDYLnZU1QEnDZggAschuSyGfKMURbnJ2Dte",
  "key18": "FvB2bDEXJYLndV99Ff3dxzVqu7womq6aZgUw7EcMbeJDQQMnnavxsH6zrJADFmTKpTfHhnPaXsYiq2PxoKUMz2k",
  "key19": "ZDwiYKXvbEvaHUEgfxpGvkauJh7HPRb8erZcDf2sAKmXzsSDJNoXZvDwQ6qHKyuvU69thW4FVtYU1jnMZGU8bor",
  "key20": "2jW1oH8KATWnRvpJVEjeBHCa942jbXiix5tW8ghgu9nSi886Cr5MurrTJRT8FMMNpMZsbQ7ks37fP6NvkM39L3Ew",
  "key21": "4U9aqsK1kNh9yvNkdYrpTMjw6gkVGabzuyj6ocHKAm1Czcx3kKjFscTUf7GA3BGpoqcB8DSE5W6TTAC2vADFUJFS",
  "key22": "5Ls7u5vQGSRQGpsKkoXoPXrwWHjk7WvqvmBqpqPgmatn2VothPrxQCskzRKj5fqXWJ4NFLStcUELD21K7SUnNb7u",
  "key23": "he5HYGD2Hpt7ZuTiBkHBUv7NX94TLgxLQoEByxvMnHgFLAyMs1jCwv9W6k1nmbdsj5wuHYtGeZWxwCqSMhNcLtG",
  "key24": "3F4nqSg2ZX2g2UVR1EFMqM4dcsYUkNxm2HrEKvefwCxQ2YWSChhGchwU4Dt729pD6qkkX6CfZ6dwNojq2mu1b7gv",
  "key25": "FR8XKnHEf3WSxJhfGtubF78qSFveB2WzparsrTbjL6QaNkKyfHg5mbzjyjPx5Hou4NW6PxHjLQGWcg75wSuz2Mx",
  "key26": "gXqXc9KHrwAA5NujrcD3C4wBeLCrzx5wW1iUsAmbgQerXbrjCK2kHZYRagyFvj9wRNPX9ybmyzE3pV98JwgsxwN",
  "key27": "t7GT81UAR6ghH4uEXPTquj4pxMX3c7pUigsSiNH4wvLgT2iVAyyHFBNoJx7YD6aDNgR53LUYmb5ZnPn519Fpiwx",
  "key28": "2ne1CF7ZAGbUVUzjnzXtW4kKqMh9dDWL6yaVkATzDdwH5DroJcTpmEd2QvYQCThwg412qj8BvDQqJmmqGeoHT8Mo",
  "key29": "3dRN9NGv96n316X4cBFVnHa5umbWSXXqBE2rU6dHLhbkMVrfeSQ52CRhiev1gUKW7kT7T1qXNmWcrwBijp9Ti7Gy",
  "key30": "u9LRZXt3zPAkQsTYzFPyXfsEYrEBAf4tQJ3vjjjTpbTTET1zoHyYourUB9eKDb2xD25fbzrfAbZ4inrwjc9cpfK",
  "key31": "36dcBmmkfPrAQHC8ZYhKrzZLHcAVCVX26eBuuQdbEBPn4jopM5LywnSztK4r28R6UFpVE5RynLfv5UE6hXuPUP44",
  "key32": "2GKAeBXHAMxRJFotbiUhxbKs3sH4du4LmfeSXpHPMJbvcbr4ZzSTL7RDjHuyFW77ywtGEhMgzn9GEZAqRTwUM3Xg",
  "key33": "4ENYvvyrTMztECAxmQ5KHVLqXVJo6LRDPH53qhe4GzcXwugP5KgtteQLktTGP6eupC3CXDVsxD2qg1cgrkznoLhB",
  "key34": "5bho5h2Y7oQvAU1twBUihUmi6XCLXaWmfQaXn9g745zNV5SpA9T7fiTYkigdR2mKMstH5eVq7Xdt2tWpcR9B7xKv",
  "key35": "xHRwXsNPPSxLB7rFnAsnxuzf4j2vDnFVDGtrpq5mUoukULZSwzt4Bqr84cZdK3nSCgGrncyny6KpzX2uSjWBzGS"
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
