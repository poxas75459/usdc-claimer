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
    "5dcc8Mxgq7HUD6rijhoPcog8yAix6aAQMAGaekN1UFfjKo9FBnBen5rv3nZxiXuuYSKrJN56cqbPNVetVzCSkDAP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sWTswJ3arLusUC36eeHp5Lmap5dvgW4kZNh27DE2FFE7GV2Gv4yTd26n2v6SzNQTYreANB5vMaKWkMAvsfCrP9t",
  "key1": "3wrCT6T1Dw8BnPkrvBdowz1MAzmwRqr18UnwswNe6owvk2zZnFwNwmgCDEsbsMpUNBwk84kJ6w6ogn23CPbLxbEX",
  "key2": "3eKG6ZNJNLq7xGDHfgE6o188yWQbCZPNMdyF6njxRH1yNtGePUhfH7qhaqjoR42fCBsfMFb8TY4Mz24pPMHcLRL4",
  "key3": "FdMkchTqMLYGv5uVWf5CFJCRdGaQtP8x1R6HhFMHKPDtcPzHgZfMkuzQgmAi9bM5kzTopx6K3Eq48R56VvxPArp",
  "key4": "3bCsBrNAVMWFNPXPnwtJELBCL5Me44QXTnVd8QMmv85dvLU26p1wmamg25rnZxJz4ebEp1y5FqjNPqqqKuTCjiiH",
  "key5": "2Wyb4f5H446FoieNSkTyugZgp1GxCZJRHxU4YU3W4fvYfxmvrswFQLKKv2oso9DXCJqAHi9tBGjo99p1NKjNHdNi",
  "key6": "dU1i9RC3BsZTYAaEGd2SLAYyPDQ7gFLdV5qGPUMpgszR9bRuuWsvwg5L5g8AiAR2Ctip9wJm7neZiQKocqHUfB8",
  "key7": "3BHQHVD7heNJhRDr7AujsApX76Vpn534WkobLKBxwD3oXvUPGWjYX4upzUeTB4mvxvx5U9zTy2ZvPtTHZtPwB3dL",
  "key8": "5sWqEVtGJGu1s3qX5Yz1RK67b4vc36ganZ7yYd5Uj2N4hnEYYD1DCWFCGZmFiPTAqfgSbpzuvSufaCbjp5NWvWWp",
  "key9": "3c4RuejAhKKbST4ULbCBjs3xNaD39a5LfXKJNwr3maoeoAmiY2y71x2Wh3fJHLH3FVtZ3Xn26YNH87TdysPjEgW7",
  "key10": "51QzHUrzfQYCUJcWEN9fsFz7WCEVaufBErcfhig36jQW9VeWrMFD75Mm3FRYEuf5kfD8iUR75U6W3oqhfKj4N9YG",
  "key11": "iwXfQJX1QBJBVwsM9sVYnYHAbG5TsNP4oea89Hoch5XQjdwcFCHGd8SU9N6dmxCVUuxCcB96HtmG3jQXyQDYnWz",
  "key12": "3iCV2tGL6iZpb98NrVJAvRHC7HhS2w4nZcq9ZeLJupYvRst6bZ9tYZgsDEpSBs8dveUMhRZTznS76owsWQWoPqiX",
  "key13": "93DgzeEcxzhgP96F7RXqRawsp9CRXpuWyajvhjrdSi3hQDD4f7HzLusbmDkoTYWJRpMRYxb5chLAqfqXhsMdpaJ",
  "key14": "3iBULRj1Xs9NbFTaG5pG6UVr62UMJm4TktrD5n813qsrUExxpZVzypfvBySuZiGucoV7Z9XJhjpzkNBL4uxn4JVP",
  "key15": "ZEsVMVxiefDJX6xDe3zoMaA6AiQqjj1YnbhGHQSJdDdAfHN9Zy9oVqYmh46KMQxmtwD1qrTFthvjN1etUmYUtzR",
  "key16": "2XdAnEuKsN8ADpCqkAiwHiFXr7snF17dHLEwJ5iNcNt6ga4W4mFzz83hLHzbSsiRC1HgeFrc7gMSHpoxFigTttWB",
  "key17": "3Erfp7HNTFFdVFuMBronXt7SVbvicNxDw9mQHkLWsfYA5XB7gL1sP5PNng1WCrkWGFYgKrCKSCkw2u2YMLEaG7L1",
  "key18": "2yp7KjkcWaNFcGybAvfXtWFgGj8ZSL1sKsctpHBVn55pgTPCYiHrJ3fqCJPgHd88RVE79nuGqwWRW6k9e7NMYZ3d",
  "key19": "43Vy8zP6ZLkFhWoHVAxp2BDJMKRgrAUVbChCEnkc7hKHLQWzzXtTucHgz3oDxfv8KYCTr7xx4TLAxprXTiAZc6kz",
  "key20": "f4eWVv1RxkvZKTqQrHAGG9iqwojiABKA9GmG1Eoeb4yYop24626ZPCnDxtgzSwySXhZDdwMiopz7uASCmtMZm1J",
  "key21": "3K5HGe8GSN1kW1cyFijogwXR3GdJHkNQ1YTxiHYLKBRNuvCPXP3smzZuyqc9ygDhxFooQfHvJNGqB65UT1BzCBTa",
  "key22": "2Kp4e72VqYqTnzLnS3edq8hB86qb6vUhqV8PHXYQnr6vVhXNFXVXMARLjrvV4P45fZm4sqzCgs9EcrCCAFba76wP",
  "key23": "5juu7vq1GAXP5zg5ocUXFG8rkYEDEA1RkpTUzGqDpoDaetzEPQ2qRBKuiyYpjKq3x3L81m6EENweRDZvaarjd5pa",
  "key24": "TjyUrPUzUHcGw84VZoRH41obovCpjF2FZ3S86on7RW9SXwzZmiuHFa6D7VkFjGcuUfRGaM1NATQYgTD62UNsCJp",
  "key25": "49fim79Yg2WrMh7scThsWAqNKTnYssupZcUcBgE8eUmVgokwoXDw9guSYE4PyJmCmV67Nr6aJJyRxsZHBeVfhK4g",
  "key26": "53ymwCBngRf5hp61tfW3YR6CYrJFSEJF33L29RDyB5kZav2qRrbAe7FsKFS9yZB2Rrdj8XxeX8hehrRPxkEc8JSF",
  "key27": "GmDZ1KjAqCanC84t7k97ut6RGcqnsD8pKAp5LaTTqB7v8uyCdL5EbWzsG7Ewm5r4nW6iPQpxt4W7S4WCo139BFt",
  "key28": "3YubviNMaNBstJY5roHjcFbkZm7wi5tPpAG3Kaw3wocUrs3BFDMFodo8C5MQ1UEeAVKbUZmCwVen9XHPWeKff3sG",
  "key29": "27vjsGnMk4JrnpbPyqDVqbWviv49V8sV4w6CaUA9woeJDSZdSuEQnGat2NbTpxu3iAHTvLoF1otpMuM3nhbex4Yo",
  "key30": "oKqTrm8ck2Njvog4da9LdVtB3UGLj1WHob3zjXeiiimo6Raomko9cUE4jTCvg7ctdPZ4dD5DMgX7CEY9fccZHBM",
  "key31": "4HyGLEwTBYnPPKsxcPFckxyaFEiCCQHfrWfrftmvcqnzc4K1AX8suRstNJz589w4gnHaSXZxs369U4hvVUz1qJx9",
  "key32": "3MJ8BPGTAbAuzoJTWVzfqtQ5EigxZwsAienuKYJjMGD9rvZwghkYTFKzsELdNiEgVGTcvXRhKFeXuUPLtP94i9m4",
  "key33": "Q8ni266BCnjQ3df4ewHh7LCPRNAKdvRnjiC7Sv62RtooZYaB7uNyitSowKy2qGkdL8gnwaFnHjTfG4nzRdr3Upb",
  "key34": "64cqBkXGHtwefupsBJKUG7juAShc7hyRAENY1C1uQLUX2acfo4LH4Qv8mmKsVvzHLTNgefxzhXgBENwTi5PuFEBi",
  "key35": "5g9vBp7tSz5hfFan9uag4g8SmgZrPX4sA3cYG7n6xD8Xips3offbGLWZMsx9QmGnHMvKiprNkX62r3nowRsiAcJ5",
  "key36": "4h7KMig9PYUsHfSEhg7Nbq4QeaUSEqzVXKwhh8vWJALznHyChpWVZC8wonHttaCLbbZ3UDt2GkAG8w5ZjztbUpgh"
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
