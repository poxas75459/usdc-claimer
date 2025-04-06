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
    "2BsyjoG32NQ3Zem1jTZPpxqvgmcJJ99Yz2dfFELopfrM9uZE4jocH6p8qCXUjAjMPVgLVpiEUGoEtb8hFtBJXERU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PE6L8DcNrrMsBQzR5DaQzEzT1NTMVB5PfpTdfbvhsQcC2UdA8k1BPy8e8MedHdWQjgYKEkoSBQpi5KCM9x6vcuG",
  "key1": "8iZfMeWQbboSaWeHv2X4wkYarY2ybbT57CnTDduGegWJf4cV2TwekLZR5G47j56yFZagmwGwNLTKK4wy5iwukqq",
  "key2": "54y9LwEV45TB89vX6uuzFiV3k64QGr47Qgtw5qXXzQhT98yjyxFV1Cd7zyZ8szqTEktbo3QFeK9QuDByuJ22Z3YJ",
  "key3": "4DrpvPWhRL2Rkr4EjUsAuJqXJrxax7tUcmohzeArMjHg2ndoYc9psPWjX3pEJV4n5UU3ik4YysqsXPWfp3MvNUqd",
  "key4": "3Fvxdw7Tg17FY2FdzxPejcFLYfR45ri11UNLLdVKBhBJDR3UCPjztxW9G8rU1R8M6UkmZMYp5To6sp3EbR4Caawc",
  "key5": "5hnuZJ9MJUHeQp5CwtRTC9dAnvvMDzWuZbmTWUNZhu9Xpp7eFbdJSLnMdpfxfJeLT6Bn6UCJ6vcYQ8XfXB4UZGgf",
  "key6": "5hh4d7b4dkr6DhhMPsa5n321UwGfDpV29rVZJSLMSZ21XC7nFHDrGHL4TEi96S4RSC7wk5GD49UcLb51htVUDok3",
  "key7": "3fjgVmejwbsuqVhRTmwtMBh4UHbHGYraWhPQ9kSzaeVMwywgenStNehWrt1vTwNjCqttxZDRPfDQgFA1Lg5YPBHB",
  "key8": "HsB3spax96Co3sBKaJYFrQsX538ZCyfntVfuWGj2SETMbkztgghGByA88VfFYPtEpiq7D8iuJnGnaq5DjxDHMbd",
  "key9": "5aRRyVrshyZSUMBemjQHRzVeGpeggEHnupiZeakNmmFekzsR3GxCwDW7hNXUJNTnGFME7H3mF721o4JYeLwqujXV",
  "key10": "5eCjkA8jMjCan3gPZVVH3FxqEHqXYUzwkuYiqQFXZYLfTv6nkRHiienXZHrTtBnH9aQPGhB1GNvhPT55KqvQW3bJ",
  "key11": "4gMy9VPGk3YCqdhY7CbGDNNs4pqj1jUtTC2cBiHgy2byT2NXFAHGFbRBUVsSWMLLRtVuH2n4PYwiRoc7AUx6Njsu",
  "key12": "3rbpk8ZM4yW6jzYbRj9TUkHhzz71eUetts2D9GAAdqEaoeWVj1cBybvdcYP3DP5addfJcw9yobmt5cjmmqzT5Vqn",
  "key13": "tMSxNvFpGwKCwGgjAGCjpTZsGfSHSpjD3pwD1cv9pQVeLcBLWJxpYB1bgahWaTAf6ZhZPSLbyEHTnVsT9WWZAbC",
  "key14": "2222WGdcqbaWFEsXmYwueTdcz7hSKd2U1WUGd8BipjBNG92NL6siQVhKUQJcprgbcriom8ZadZaEdhzahH8kEDJc",
  "key15": "3H25pk8Tah4vmMHzpXFFrXyXuGsz2RpYyGBvCs9j9XMhgGGTzgSwnkG4BhDs4TSou3DNC5ZsqTZC213UaK8rH3XT",
  "key16": "niDqEfvdGBHRsBKfrGSM7ZpnUwfm85S7RSaqGpJqTeoTm7VfdM5xeQBn3mcwg2TPKK1JSBXgJ8yG5ahQ1PmsaLv",
  "key17": "23Vhkx5dTAjUtdcozZQMa1SciCMdEzosMTg959Ay9SEGiL6NP8a5SGnU6wiL3RzdEFD76BYrZ2yJLMvxy26Vv4G3",
  "key18": "4fsPmb6XDiL466zbbSLWkp2EP3g6paufyGbKNC8mXTDYBuGyqtYr3xDvvKuP1ZfkVY7G7yP8cKVbaGbug97wXPe3",
  "key19": "5ZYYxekbznfLsXYKTg1kWthKCxS8MeEYxcCVsJghCAwtEizRsyJBAucYLetAVdxQPvXEncL8Ert7RwzXjJphbEPp",
  "key20": "Z9T2bWaP1AXn2yAy9GtWStYPVfyfxiityCCwjP1ptDaPtD93cJMbUNPnKHw8JuUbCg1sxJau7KkNUmBA3w6vyKV",
  "key21": "2SYest4yBxjoUreZdAFDWRsaJGPr1TAPkPqzxVn7xwY5Z17k9G2Nv3bBUY9c6CgkULbjip3KYvKnB7PRgRL2FZPj",
  "key22": "2BDiK8ZWJdwdsCkuEhVpzVHuPErUXRnANiKWFmkbgWt4hLpdbshaXqG45CnQeenZ8xx2yHsp7ACpT487UGFXtp6M",
  "key23": "427rLCu3L88n26DU51trMkXmSYBpyMxPyhY4VhAeUtyr85ZiwXnFHkHEPLQtVwijgNvMdjxdtgQ6JsSLQyLAX5b2",
  "key24": "5MEP7xUCRjmEPWrezZEPXcXPX5CW4h7hFxd2f6xTjbdAmzWEhCvycrEpzPDoTCnaR4iVBgHjBkzGiDiTbZTwaNTH",
  "key25": "2cerKh1sehMtfCCRjYFTBGFeqvdnPAzpwsviLhiraJSh94GCdBQSLHzeEcKq8toLwUtVMBiaA4Did5ENEeWG3hVz",
  "key26": "22Jw1W4xQAhi8FHNuvL3T1SBTFhkxJnNyqc6kAgsBrS1VMPuzzW1WvMVvjkVKYiY7QYsfrVmc3Khpm9HvSczJCJx",
  "key27": "HLBzmzMuGr3WYg64zLHPju4Ej6Cico9Qm5D4WA1LDjbaTBkFRTM7DCy8YMtsxTLxJ4mapPdP4DwamAwiiYrUC14",
  "key28": "4XQnMEjF6xNEt3d7HKGq2BSS5pKEEwT9UYq2AGFBhFNR2NgWBpnL7Zsqx5HXEAUNBhLc4uUgS41i5cq9GMeMVSYq",
  "key29": "43gKub4NMBS1711Ru8LQGi14HUFHN1psBePYjysRsMNBpycxUqMvXYXdPRBb2rXdDm3LLqtsH8hhV9xYdoaj4F3S",
  "key30": "4a15WHpBAYmvUfpf1GZkePnUjRELTMXjhZqJCqfPhftXrtfuWionm3B3eVkoSEYDZoDEw5eUzh55Nu6jBvvT3uU9",
  "key31": "3W1vdzxKy9XCJ7KrRopSDiHhypP9HG7cPL9TUKQL7f1EK9BqH4LoyF6XgvokHwc6Tx1gchUaSr6QWgSCRLK48Gnh",
  "key32": "TnDpqPggiH3taUgVoRJPtLjYkeAhM14PC5G2rikaWvnHhjUfWWLrGGekRQznJRzJbU16LhFLm8vivXeLeaQeMxY",
  "key33": "2HXNK5LmxHA9t2PA9idmc8dgoguzcc9GdC6V7Dpf7HqoJk2bASC5G7KcPZPz44eGSABYjYnKw5Gw9vepyAo5D1ic",
  "key34": "3Hf8wcPSquuTHQR7qZZ1nQoTqYj68r1QNaWCJqLJQtU2U5TiUrutJJtFQoorzgpgjfVWvRvX1eVHAfJvxMegxoQB",
  "key35": "4aFHDVFPVui8zxsGk6JbfADuvWo2sAr1JeMQweeYaVCQqhsxjC7b2pWNhivf53DQvHHkt9MLfyzhBWbZyYYuGRgz",
  "key36": "uv7rtmvWxf9dRMoqrdJiBY9BiMbCiUtigGFmojMbBxZFPNR7h4L5PkjHdtnPA4NAcufhSgXcaJUyHbjVW4J8Lr4",
  "key37": "3WZG4cDKrX1TGnCuWXufeif1xshuoEUR5e9GYNEQH6RL6MwiADpzosepFJ7Kgeby2NeCwPViJmrs19aswJqfGZvD",
  "key38": "4pzKjLshUayfE786kGjRSxFUcJq3AXDcQjJNUK2W4enDf3XpT95gmtz6CX72RH8APvZ1B5CeDhdbuMrNaLUyWig2"
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
