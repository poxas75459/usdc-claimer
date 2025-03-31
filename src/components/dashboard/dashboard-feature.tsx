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
    "3NKoUsNx96FqXngxvc9REWXUrMovgUsofUtZYAVu19uwyeRR3XheFyAuTTmfqrTVyJ5wxewh4UHYPmVvBBMt8mPA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JvH64tJjmALDWeTWQJTtx5YD1rWw2NjSLN3t4NWegyvAp8wu7VzNJ3H3A7a1dfmVd4R3xcGLQHNhUWfYcFLoSAa",
  "key1": "5CNFWQDFV7fru6aru2sMuTjXNBUAvbTo7cVvVR4xKqASCBSDDLmqvezQki1fizjac5668upo9aTy8nrceuUevect",
  "key2": "wWoCQoGcHu1egTjL9vW6beWimzNB2SBkTmMifgvdVbo5EQhaNPCs52EMYjiTH9PccC4ugETRATuXrFnhDsaWmm8",
  "key3": "4gciCLhL6PmNi1j9mbPigCgUCx1cXCBMNDz9pmyT1NEiMCBSdjeYX6pe5YS5hFMaKBXYBEypiTEbQq3U12Zj1iHk",
  "key4": "5Vrkc5qzV5DXngn8tfDe8o6HW3pBsUxVHLtuLd14VyKsaHzhWg4VCjRhmTmcfEBWX4L5SoavaQT2RRz5av6Ch5FT",
  "key5": "63MoSj7p41nKHgzyB77rJQYX1wdP1xrgKvbfXJ2AvNQQnRkgWPFedxm9M4Qo2ozCyUUgrqN9ayV2hytWS1KHG1q4",
  "key6": "XfukxtygsohaDLjAKvjagqjVabgqVQ5vriXXM3ho1fEZcd7g9DmqMqryn81Kdt43DiEQP51tZvBEgUuwXWRka2V",
  "key7": "3svnhsHqmZm7Sfhkkt36TtWWtcZKi5j954zQoYSZXCD5P5zKUjtNsHjyoXDfJcaioknn2Aq4bsBC5sKQPAyByMfu",
  "key8": "mjheing9gNFSGZaPYExLwCcFxswnTFxSd9KN5BpNu6tuSYHg2PjWUsJnzyfncAiSk5crzATUJgVVDXoFoZMdJ1w",
  "key9": "3itUJ8kykE9MS5w9RNfnS3kMDheWvng8sBbwosUL6312drvxcZvuaF7jpW5wA7JB5eiE3dmE6mHo9Ta6D17etat3",
  "key10": "8dMVFgWQhvQkj5Y1uhVuYWyL8Mthmc3ZFgapediphVTVwRFJRh9mJjBhL37u7cxeZEPfa4bJ2JaKMSGpFWr2Cgy",
  "key11": "3UdqV2Pvz2GfMgNP7tb4qSFL3B34eN1C3CCcxKsXzukupGT4YoBE35XDEEFCGfGrvd6A9LefcQQVTXNVrFiDsfFf",
  "key12": "2y89W1f4cxjuLkJTQ53nZnwPbiKZv1gx4j7ZyZdYkFaCHPi7pkoEckBDdybu8cgDErS6gGT2PhhW3nTdnJpP1u5f",
  "key13": "3Qq7FPZxT2Uk4zpfFheeogod4Yga76uTzcFQjVo8B1ZTTu1UqszxHGQ8uDs4ShB9KeXnwLXzQmjz114KPMBosid",
  "key14": "2JodEXZ44P1jFWCL675zorB9hE5NVrqRSDo7c3p2cAiL5w1bLoDaDjKTUxptmz6HQYFd5x4uZqWnT5xYpxTkdWtD",
  "key15": "4SvnvybJx4eTBkMQ2pyih4UEBhunU5garP6B1S2HG72D9XpmM2LpBfzEfS3wZurcwccqMWhNqtky9RVCzqn6sRoQ",
  "key16": "3Pa66JmTit5ajLSfj67v2ZKrMHHhVv83re84SzknPhs46tSXyoHfqrj4stc2sczot7zY62apGP4Dga5MFCif4F1n",
  "key17": "2zV4awKmc9QQ5aCojx9esC4q7K3XtJs9on7K3xDhT8rB6WMYy6kXfcQFXYq88pCbxpCiQMKdTev4ejCk6MFGNEst",
  "key18": "4Xa7DGvrpxEmdD6erXMDN12gS29FGjAHvjC7VD36h9zgsAKdLyVAFbHkFfDSuMudGCL5hJrocMCKLp51mcqfeaCb",
  "key19": "2gvpn4ECa3DDDNMUNGpbE3xLaeiRPbqaYkCH8saUuBXhPqUNz3siZgcp19Lb5iJqFxjec4Um8HgaWbhKTXhBzZ6B",
  "key20": "2ANr1EC9pbjNn8J7TDTDMNKGvck3zoNnMhDtf2enheNiY2Q3Ef9boc34eLyjMeRY1k5Nmd3kFC4T8yYYLX2GFVeh",
  "key21": "3Wn8A3S3dWjugbtnfm6QB9HgRuHYsD3z2rPaxQcqpMwdJq6h2wfV4kNQJQEuANB8YrUBQ9Rj63WcbDcX1g3i7Hs",
  "key22": "21bD6Gqr1JK6LWSntW4f8cf5668XjPRXR242n6WfGj9FcMqeH5GvsME83vmqPJXv2919P3zq2yqXfUk8CyxoR6ku",
  "key23": "3c917TR3DECn1oG7joRJ5UgWURtdu9npW3H9PoNisDskPWFScdbMxMvTzzuEwNyH8agzLYwtcwZ23NyhWjZYhHVH",
  "key24": "3DJnCdJenzs96Fxz3o2NLwNvKyF1fdifTkY4LNSdFP5sWGjgG3K1M1MFQbNKZS8Zi4NSkLPhUD48UPT9KeB45dRT",
  "key25": "2H5PRo99hYbi4fmGzhRbSfUwi5LUz2hQw1vs1HzFUoHVAkGaGFrJsdfzvmK7sPQmbbSrfFWoQw3mfXBQEd3WzyFB",
  "key26": "556F9aUf1peB3qqnjNcaxqssdZST1NKaV6juusuJ5LerDH9tVWjcGngR79yayJ39Z5Eo38YjtuM7xF2rauw5MCBf",
  "key27": "2ivU5uJZp1xkNK2xHmy5qpZLvTe6YmGxSyoGoSSWrHpp6pAY7wSdZgtdgmKoedHaFnX22zMFar4Ybh3RX7Vah3ic",
  "key28": "4hRvy2B4gg3NePY1wyQn14qCPWovxiEptPXJsThgiiPWGoXuHQENiuinNUxTef7GJ1jyanJ3wz3JJuaaaDTeaixY",
  "key29": "4S5NvjzCaAxQpcztc2X7y7ssKNBYZw43RSyRSWehrWbYUhoNG65BJ278FRWGqtKBBBoQm97uZGmN2GPFxSXjZBN5",
  "key30": "3QkuAaDhqgEv2kNgC78RdP3qi5fo2CFZxjYzsbrbob37MWGA7ksdmDMfDCJBYpLYFs1u3NnkNGLkrAAGBEtSvUAp",
  "key31": "2xzKozekiKCc5KwUM8UjkZU2vww82csGr9LJyAhAZeMwAmyUiYbbb3D2WF5vxqduWakqHybYkp9DGbfReFx77VAU",
  "key32": "3XGmzbdKn8jL2EmDgfBQFpN8AtDm5c94c93VxYk4bpX7bqQajJsXrUoFTqQbqXPuQwm9Md9HKACvFeqicR3Z8CGH",
  "key33": "E6T91b7MiqCgm2zuVYCRGFAa5RwzjPiLmYQGVzcNkSGUfhXLrhpvsJEN6gw1HTCv2GEmt5NhJFGXact2umFrk4o",
  "key34": "3fA2YuyoQAMfia1KQqTeCGRKvcSV1RpFMRCfC64eD3P7iWqRAyVBKHPpRSQs13rB4yLrRBfKb8xCtdnXn8MihT8K",
  "key35": "4qbGMDhHzrMGVWca68tmRUNdJtWwbr9yLaSfSoNqNKFLays6ayDhh567s5BEmMg1qkCKQBy8vJbsRzCzC4pKp4wE",
  "key36": "4QM9wJvvECiKYkjF3Wc1j3Q6U1WVc12DENjandd2wQf799gj6thF9tbRLcUb61tnYMag1vnL6U1eV28EZmwTTkSZ",
  "key37": "oDpJHns7e2XgNWfE3Ps6TABpoXKNMGBc5vTGwYnRZyYeKoKNAoSXwRdpUjR4TYvntEtcUfmYFMvHB2QKpw8ixWM",
  "key38": "sfxneWTQrvj3SjCDF4EkSjk47b1EDTJKLHvsYNJuWxc2W3hVUvyGSUf2AT5UyFHmRiD25DDSMaeg2AKYiFJszCv",
  "key39": "587bxqw3bHMMvbuTY9KesxMTxfktGZfiQdrJvxHhyKNhurDVCQNeLeE3QUgr8o9mpzx224FwczBELJyu1nbQCfsm",
  "key40": "3x6Gd9ewUEWfcaYrWoejq7jxWKhD2UEfUUSx2VQmA8C9w7ynN1PdeibJGeFZjCk5HFdPpahfgpUerYqentLX1wrT",
  "key41": "5rBDDZ1GeExSoDcPLvSYo5HdFL7Kv9Ug5hPTBopSZXtNp3jrvbUsByxRi4pgQkwiaHvSAb7f9Fw1bBEWmwEXg67G"
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
