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
    "23GcVTHp1BSug6FBDcxtQGDkWbmm46aUmjYSVwgjUKFyBcFFRwUqyBN3DmdUbF5jUTEwyR9zkUxKTk69vR2yGZBf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5coTzeMsiYQ5DsJNGzcgGpU9feXiUoLfN8AGThSeND36tp9EcuxpQy3EH3keLJ9rdhdDexM4tpc8ft2U9XXD9XQQ",
  "key1": "2GJ4PE1KAMyYrfyUk5FTbDar8nNFDJpfrB77wJMYYtSTb8TZT1WH2dYyRmfMdwG7kWzUUn7Xka1ZdfnVbZUKvWxw",
  "key2": "4XcBNDGFs3YPvidBCHg8HtyLnugmFvnfCwAvLYViK53vm9QZckZ3uLtA6UZb25HobQiSuqxP6w8dW73cykL4BmFn",
  "key3": "epZyw6TNAVncpmu1sou7cttDR8FpT4nXVaTYy6bPqjyr9QsTThZZwYYmCDJEtuxjrb6nArScdjxAVrrTvGyyJHQ",
  "key4": "W7icMYKukLfSkRy5MVBRr2aQJ8dp7VkCaHfvyYTmmoQeB9fNkrQ4LVrAu6NaTg8G6DzWhLhAC2S7R5KyJ74T5GU",
  "key5": "3deqcdgKBhe5nHkGubkJy6ucJacufpkzsMePvuAwFGkHwHS3AVtrC4oLu44UWBQFyGEYZNx8SCpVLRe4RV5gqdKm",
  "key6": "34gvGfHCzC3DWhWbavhoYfDbWgJrJsPJmMBLbHt4Nc4CXoi46A8TfmJVpo3oTg3BrvJ9Evun3XuqLemg6kBiBuiN",
  "key7": "29rzkKfgA3Sw7m6zr8UUHDUm8uk9ezDa3Jy4k5ZCVHoPMFk8zW2GzmMaTdCgPW242f21yG8qUgMpamRDfVSPNw1x",
  "key8": "3QULP2gAuwE3qD7sWFuLqEHSQ4WwRr6PTf7wAeWvCT8etbdtc14c9uhMo9qr1TVfCqtgYv3fmmK6dUAApa66Wqmc",
  "key9": "4Vv6qVKfryuLbbSNxc68Pf7s1oTvtFTemDQQ2cBwTzGpyyJhJXdyqr3sPjF2AmFZ5ZzibEfVuMXWd1H8dYuQSomj",
  "key10": "2xciAeG2eYwrRhxdyvNQS6DLdVuZzLE7pzR8oGAseAVjDXksDSVjAzzJmQRWufZoF8rb4URrNRQHJkUSghEmPx6u",
  "key11": "4S5LNnMQw8c24w74o4Sbj8uhtTKY69Y1eyMY8jwbWzXz5aJLD9U5Aajx9xMhjfjiLreMZ19cv5b3fbQfFSEN5iFC",
  "key12": "zwxwK9qmhzPWgUuNZzANkW5vXgBCB5NxViLp1bjfJ41kuYx78Y8GYgTggPkcrSQ45EhJVbMco7m1aXU6hqq8c5w",
  "key13": "4pMPoUfastqRvbz1Hf6rLgkgRERHm7o5JuCErd5emYGqHCsd8cM5pGqdtsMgB8DVdGt2CM4rv26gZt2CdgbWcpYC",
  "key14": "2ZFoDcgVqCSuJQsRXqzrt8E6PyFFMhjpcXG1ck3YhwQnS987FjcAuYoh9Xfh6QtUeseVvtDuC5Tyw6GC9vog1mik",
  "key15": "3MvBrvvXkeGTLaDzCHH2yCagPETnN4EYkhmLdAMnjkfvBi9SVgxLorYsWQfzaTJq1Ch5VGr18ahXQpa96M3vUEkg",
  "key16": "41DFzAFrj6MTnxncMhSTgPCcK1E9FnL8eDbDaoaWcgc2jq3d8cTiRkdLdcSqgdsN3E8xZNmZtL5z9erd5oSFrofu",
  "key17": "BwMhuZ8EQU2jkt8EcWUUaW7CDyQrjKm6toQuccHyhza89cZEqZydoBB5TJzNhsUgjgiyvzN9PJYVLggG7VFaSK4",
  "key18": "2uYHtzEGH5kPqxP5bd1xp51MfqYtv9ZMpEHBiZwUM8LcL8BN8o2hKpHWSru3mnLdFaJxGi7SUeQrYhK5AD8GqoVX",
  "key19": "5hc4BXX7ujhpMi8ycJ79MsjqpN9e1RTCd74chzP28EHW3PyYJ3ML8nfhDBLT2vPDPZ2ntCyW8daYC5yhaayCAtX6",
  "key20": "4saSBGAADUzwBnwCw4P8LtKNe7Cmu11rDgtde8WKCJuY2XkbwUSuNvbSgskZnRKaLKF6fqeCBGfGRCnREVqf2ShJ",
  "key21": "2LfGExJgWzuqvaErr3wGw33cfNFJdhsY2Nztp7uuqGyvvndZVT1fgjsDM9neULqFWymUdLVXtNuPxCYrfyXuVAqw",
  "key22": "3hj8u4B4tJdE1A4TtgZJR8Bp5WQYaBiUxkRFrrRkuXgEiNEQJvv3rTTb6RtTUEXNYoirRDFYH8AkXqshhWBCuN69",
  "key23": "3Puh2oKZXi8jNTCsb9Qx9dib5sSTM4UPSj6zzwnLwxJkqoXbDkWmWy32zjSRBhgSDbvdjVinMbT17BQ6gmGwCgMK",
  "key24": "2jt9MAL8889YQ5kTwrWKDs7abtia9FwUYdzBvKGwPPrV88UbJtHR4sJHaPEPTiS1vj14kiu3mfXMWdAVmjHArRDA",
  "key25": "3a8hTPxniLKgtdoaoFRJLQ74uRGpFdJsnwsPbUXedX3pSQPSbUYCVH2kymDQDbyZZCD7uKhSV898pEQG9QtbFVrm",
  "key26": "3jLPvxtzzuGHxFgiJnbahhv9odAACamL9Zrqcj7rJVD1ZUQgvCxAFdi1eTPZNDZjANWiBmuqKQvjwvK3ZvzPn7HS",
  "key27": "3Jm4zLFcsJnkCeTwHC9pubgW54kQBjDVRMtbMYDgX9EB5u6wx3g4Yi6zaCXAnE8vzNQJJfa3iNdLddnukhAFMawP",
  "key28": "4U8cWr2JpB2jQNDXxt9ARU61gTCb6t7kFErBP9mMiJxmeLpQvJAwjqHbaAP4vab2s5pnziTDEDGUeRTy6yTkksH2",
  "key29": "3rGasGAg6JqzSiDbxE18aT8qyGQfszzVnGK1Asu8NPSgtDCvCT3mwYA4AUuU4Z1tXyAZbi8yBBeBhY195caEVCGj",
  "key30": "2evMQ4o7P6EuKHkhYPEEo6Zm1gVhbGj4DKhXPZe1VbgQQ9djt6nV41UsdKzGbiPG4kqnf7mRq3Cw7AePg6VVAexp",
  "key31": "4UdfADxF8pFsasHRNx6M7AyjLsecUYoj999neMZZavLnVwXRsSF7fVUQXxe8wED3Umao2ZJDNWwpNjz3Sx9YeBCy",
  "key32": "38U8aiN2qYLL6X7wKTK33syJEPqT3bF1wRRdh85aKf2UiuMLMDGYmPsjspfBr8LrNcoQzkZNNz88BnQeuqFYctuQ",
  "key33": "3q4gCqDbkZ6dfcsMaA73T9HbF5XX8EVpYa4yd7G61HRnCszsfjqDn9dDRRyjZvXVGjxzVy8MkYroQG2swwTj6VfR",
  "key34": "EZctPjgtBPqpKvybpgxcmJC7GHQZuTBnqEg9kNDiHp5eetioxtnDCgaNAREPAgKHs5wrMp3EHqqXp4SvnpZxaVW",
  "key35": "2Ypjkh73MkK7vKqjNAv7CWXMvs4L8x6DYpGEguBf5PZdmMPDKimKKo3ivCTWWrSDnzjRPTfbhtRDGa728MP5duZS",
  "key36": "3S5j1yqZJAr5YmXPmuWvFBAdJFqYzYdsNNLoDRSmJrpfVcMSkDfNeCR6dvkhnuiJvcCY84pXTyi666mmrLfedg7v",
  "key37": "Y5LZiXBtaMKYRcvSWWHZqkbRpeXAcni8rGPSn6uQTPzAMHKYGnb2Fvx3xF1KEXMG9CGEFssx4LuovN3rNsbaQPR",
  "key38": "4sDzHzGsJSqBw6y5zFA9yrCuvGj6FMgiHwvZsVNHeK8QWxfho3oNmvgZZQ7pYmQR9mSEp68mEpHCrELjHe4RNSB8",
  "key39": "vN44VGaDsiYD5w7K5JTNGqnL66gcsYLHneoxFUZPfigLEEeM5Qi6Xi8Gy4yUD3Rn717gJCjhSDBfiQWT6thEeti",
  "key40": "5zT56KUsXpPMhthoCbqBfrbG6xHjMRwCt9HhWg6m6qN4BTuGDpiftCqUmwW4Zij5viXjsZPCZVH5bfqyoEisS6ET",
  "key41": "5Ss2BZJboEASnhkLaULosRZjbWqCGMsUwBAkDREBx6pZLMeobtaogkTUHEBXEdvWokehVjZLBoytzb7xWk5FvVbH",
  "key42": "3A3zYYchVJfs1a2B1mGyLtWBkXAu8VR5j5544TKbQRuacmAkoNKWohp5GY8XfeyePQopN5d3N2pL7PycNgA8bkyr",
  "key43": "4uziEdUoednCFACZUvt3UvS9rvSCfdCjTvZpRLz4RNGZGDqFzhizus6joLbPjt39RA8UHAg5Yhp6k6TZBpKWkDNP",
  "key44": "FVcACzJqQML8fTdwBHjV3r2msrN29btm9fQqDDaR3GeMd5vdRDzRhqFiFUAJAVFbChWa7Y12WkvpGG88pDdp2Wv"
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
