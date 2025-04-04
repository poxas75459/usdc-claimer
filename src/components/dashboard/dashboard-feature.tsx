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
    "4seZ3AQ8bRVVwpDzvstPybWTEbSu1nRY635z39UWQcJ7ezqpXj49tczgKpDDZ2EZeyAwGyy9DXwWWyQHAxgoL5Aa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "347UTUSGPepuGZnLKocbjjAfUuCJB5fWcN2ZCmT9JkNZKpe8JziohrnxLJt8ewkYxwsJELrFjqmuK6ZNmxPGeNzb",
  "key1": "5UkFRwQXiHyDPuiv2KN1f2RbSmKJokXXL1tfDxX5hrrJd1CjdTQsFf6UuK36AWQLFjcPRCePtPYo3BfK1eMSuMnH",
  "key2": "583gkjF9mjnYatYxu38TjBPCaMziejtJHJ37ADbwU4EseJ3FVNgeidr2wTCKUhuAUoYyBnUi7kBvmSSKeApmNP5E",
  "key3": "5z6bphHoa4E8KrRzDuT5yZ9CeMgLwT8jCaPTmrEKmU6r6CwW1ckvFQ2QQXFK8p8qp756mHTvFa8yRwj5XwDtEcH5",
  "key4": "3KFXWq1MqRdwEUrGpANod7mecejDwWuRUG3g6Qea2FCxr8nuhaSWceu9kg5NZadZt2GKBaE3T5e7GUghdKmgv1jJ",
  "key5": "64otbe6ZuJcJoKnvKswua9V2G39JhavhdYFcaJZc8vPS5RJB9hpiDRKinna4oBYyAM5JH4YX9vni6bNZwk8Ny358",
  "key6": "KLpKqx3NDphkT7FTuu27aQ8HrzEArogMSh3ns27QANV1BzJnGa1tsL9GCPNDEaxcw8ojKMYGGVZPs8BmZAEJqra",
  "key7": "5ByWR9MsTKXEYY3CjUFb6Z5xCA4Gheu3JNcn6GygED2ocSPoC1Dsme1jZ6CiumiFZ1gn7nBjQhMHSq7ggeWjs8PY",
  "key8": "igK4u4tkFRzH9fn55DvBj38GmnunWbQvKo1AsnGzp4r54UTrhk7KBqD3zZTD7Jah8G6zZK4i2gt3xSpnVG6Vnsj",
  "key9": "5q1on2XVEH5r8WWixhCnEA6EdxhDjET7sGJ5jeM2N4nr4aW9AQEqAZ71spDkc6rTAwZWvrPVVHo6J93WhJzP9pP7",
  "key10": "4CAAcb2AcjwkZCMvzdTFZSkTkYYttnyCXaZGf7XQNwbJwDk49W9zaXwTqLGHk5dPPgLB7cNxAw9jAeBinLj8g5aP",
  "key11": "A3FutDPhbtNBjRss8FYomZFGMXojz7ZkrbqgKP359iFH7m1F1qbC9piwTn1oQoDB8nGYCYyuRyp1wZZDwjW23GY",
  "key12": "4MK5Lnszhz4Hdy6ZW5viBFcEmkprHqUJ2JCmBZE7JmcwMUQA9ihapjJ2qmonLN2cVxBmeiX4BuvN8NzeSRSnMnog",
  "key13": "KviJAmi7BaEZMD1GQAJoGHS7o77XYL9W4u1FNr4opqz7z85UAyYv8sSJfWMuh3XFLrqjN2KcU5Q3pWZ583QNi9n",
  "key14": "5GG1tAPhsaoEvjfDcsGYKfsUfKiCmXPfSdbzs4jptVPufFXgBLpqddZjm6LfSa6fev3qYJD8iiAj3PQ5dyoc6CV9",
  "key15": "ZhSNuXTevSkvDWV3uQQxyaYiE7Gpvf6NdgMN75wvs79CiWMfWN6uxu4mLu9BYM87ckeXoqCLbC1ucWifV1UtajD",
  "key16": "5mu3TK5CfhgVuQzgovDqU7VjXRjKPvREwhXZ1xaAZZQSkTbhTUmdqPpUGKE64BvQapQj7gpfU1s3EKo9Bomr2sBp",
  "key17": "414eQT1YxNE8ybMeBeU7pDPavQWew9BAMxQQX3obZWqc3p4WFukFwyx6c5FakE7VHuKvj9gBbe2a8UebZbVZtFfg",
  "key18": "49bF4Y5wA859sT1DnABnWSFw6GrtkSoop23eF7E5JYnyjhGKCkgwihMPgMR15qx9zCwGh4bC5smiFA5q7cKm44jj",
  "key19": "22smywwR1mAzs8oPnnntB3Zw5KZza4tXFmVR3MnXtjJMqma3KDkmCScdSHdT9cqVGrVP8re78NL6u3n5cmFFue8R",
  "key20": "21yBj2LEdhi2mn7DPangBXWa8ZHeVK1Y4rWwXZqiuSMno1M4BYRS5jnUrYNP6ad1oxmYKAMQgcZgEMfugNkNwkMx",
  "key21": "5inRstAcTVfsPzHNfwMyLNAbWKM964pz8CR7Es5pKoaQnd9WMaj88cmzE2kWWd9ESf1tve4WysPcA2ij9dHFJ4oT",
  "key22": "oq5mYaYzsPba29sDtH2nKX13oXefLCwpngznhsSSB5j8To1Mm2vbBrCchJ4gR5gNUmkmm8GvKEamZHpP8QvS2GT",
  "key23": "4Y59tidsP4VR5wdywRHdGPrBZ2Msm4utADhigVWDwXthFM5WkgTnaGMdLJxeDk8Ret9oj2cZBFwYF21XzYk3itZ6",
  "key24": "oj27aHh4AWGzjoySNMFmGF32fwPSB7SDYoFHYM49hD6fpigGqs2CSp66w2Gt73oz6YEWo8Jvu2MvxsjFiugxHpw",
  "key25": "5ZxwPBHvuPacrGEeSYYCAU5SYicZ6qnDk2YfMyLiFe3vAyC8jZYBmPkdfMQmR67uE7a4uN4mJZYF9jVwPwsnBcyD",
  "key26": "fCgENoirFpZ2CgdqVSZR5TRTzGgmJpSGkWkQTkJkjar9AEg4KK1gYWxw6bw1XPJCXV8E9jCrnR8YUvdWJrjua2s",
  "key27": "5PccRNf3tpwjong2T2C1AkHXfM8kMYpdpaJqqYKmQMguuv1U1Vn8hdT9Ve7CzwyAzwKv3kt9NkLXRcpRmtsDzUec",
  "key28": "2vdKSJNVKAfeHVLuRwjb4xX8kUzUyC4CK5ZcpGJ6nEUeg84xcMReFqz9iDH18q7BCrfmJQ6tegnHHXduBP96rK2K",
  "key29": "3CuXoNyhSJmkoxdspNWfoqBzFZu1G9YyzJ8dDTgNBgPAMyxNMHz1PD7KH4ZsEwktrdYz2uxF1rN6P1Xh4ZCoyzXG",
  "key30": "35bNrtKBFRFvxyNjY51paBVzMmr1uHYF2JoaHZqUwBoZ62rcHKUrC1feJvUGyZb8iLUUjrJAKrEdWPSbJY8fgPJS",
  "key31": "2Hh4GribCn2MNpSHvRs3CF78uPfhJWHJFy9FBsyKEWnHXEGQzP9etwbRYfZHymFzsrp2stMrFVZXsb6L1Y2aYLqU",
  "key32": "2a8vsokbRZ2adjNc8xa6W13ua22cuFBSYuK9V4RB9jfvfquEi7Nv69CpMtEg6ExwZ92LNRkhQjh8pWQo21SxHqVT",
  "key33": "4ZQS3Qb8bJqpTyTWdzVxGo8HjSnNUYg3ijmTbbZfmYi38yhPoJR7xCeHcWPjHggP2a5m4cfZ7MpjPyUxXr3ijU4h",
  "key34": "44e3SSDJxHrzcCxvNBjiqLVnPHGsxo6iGHh51sVH3eRnMcKfQXL2tdqP1ifC8vgdmGg9tAAenAxd84rouov8rToo",
  "key35": "4wBBtpVkKd761SMDDqZz5X3fnZXSFB5npjdrr9PD46CDY15RX3dUNEKCYV7HGX1QGjNo322AMQYsuWrLcaAjC1aA",
  "key36": "3fiqvW1cQbLEghGAG2jivFKuct8AZaZzKHNGWR8E141ccjyozbfnkWW4qPykC7qY4hMSpTVJNtKBTofrWfPwzigk"
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
