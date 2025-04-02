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
    "jAFStErxojpVxk22pxMd9oE5NesnNwBAE3b4haJ3BLywwJ5KiTVQQ3nG5SSH8P7XGPpquyrpJPVCF5CiP8MkZiy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pg76nxiaDVg6KaxBrUA46wsFNYsXc8ACMREvjhEQnsz9hdjvazEzPY52EHpDW563SViHrTtnNFumwqRzDp7qvPV",
  "key1": "GcHZ3EwJQBQzPWNZhxtRNuUR9kcPtDWVqJD5HQAUGnQPse1fqiSwSQQYEh9sbGkktqCXwK3KcT9iWFoEKEw943u",
  "key2": "3DTNqvHhZEZF2ddkZqnv9VK1iJqAeFtWHqU6ruEkqKFRwxq4pzzGXSYyAoSK7qD9KKeafs78BRkvAoEKMWGY2iuQ",
  "key3": "kLaphnhwwG3494EX5XqeMqFjeFMDrSNJBMCaxojhACD3Y48umMC8pk23EmFBcVn4DH3ZuFuEvsfko9BKp979hww",
  "key4": "3RTkgBUaaddWgCGrn3CWBFJ9HTZdghhDzgC3Nh2sFHdtJcWoNtXKY7sRPGn7Gu1LDiaTC3o2WsejMiCuRyQ1AFmp",
  "key5": "4WKf4FNzBJ73muN67gQHsRqXkUQWPva1QVk69Vm8NrRtxZxiwCuyfoGpN96wZeFBorUVtofgqMV6tZEbYumhLvwF",
  "key6": "21baoq8LBGvEHWrKJQgF5fjJwDZM82rzMPeUny2F9YshMDRpfxCDepAXG8eWA4SYZmL5FRC6mp4k9ma818P4gUBz",
  "key7": "2ciF4Wty75nYt3vtAc2CnyprVbzYHyjWm5bSFzSN8g7J91dznTGwLYxFAMKnwbFL8WP27Nyv7YGfyrpi4G6SgXhF",
  "key8": "sjPgUdhzd43H1YdBQSRnwWnERuVLQPwQY9mJZFqrhKo57yCz6rhY1SqQdhahhaGk8NH3RNhmfLwhf7kALk5z6qX",
  "key9": "7N4dtUTA6G5MCejocX2v18ShHDcaBrMDXhUVsmHZ44PBYum6KCL9ptLFyXFsk5xT4ZQi2yfm1k4u4Q4mCDiWAjN",
  "key10": "2iihkwZSFxbQXuPxvd6mF7kZLVa1RAem4ciCYnWAMVG7GS2HJewffhq4nBMtVmLW88QdF1iPhW3sdybkjtTC7XG2",
  "key11": "59U8qkmnxK1k1HeT73oRxZCTtmQuLxGApLbuMhBDE841RcdHG2MMzf7N7untsntLkcBRuidEL5SFKkNVPgR7Rsjy",
  "key12": "4dor7wbfMFeG3vq4e5fGKrps9aG431nVPbkyeA3xcsfmbxrdXk5Jn7yuJ1k2ocyJAeHw5UW2KNjpb4R5PQMmVZmD",
  "key13": "2wAzmMFkvk64wMk3RWj3WYirdYXBKGM3SCCd6cF47jYRvFBJcA968C4hwLAhzjsp2WJJ699ZAJwiio5U5MG77d1r",
  "key14": "jQRgBSBhaGrBqeL9mv4hCr2geNkjSWcCiMopWVAqNiQa4nBVNVJuiqcFNvdff9zRNcTqXEtCrHkPhRK156CeFx5",
  "key15": "3ncPd9PQdvoP58WPzk5iW7CRVCk8xDnUtYo1bJ8UgWLA69HfhKuUbdAVBicNg77pAdeN6QkYYBb73ToGCwjs9cKq",
  "key16": "CHhFpWWBgn7fynVKUsRupCzZFdaqnpSLGSxHpTC4hWSSHyyYPzG6pMyJH893HXFw5NWE2SgLsyG4Ji5myDsoXRX",
  "key17": "41pppG1bfUy7gU8SsxHXN5MZLBW2RAkWHRnNooBNgvawMMewTKGeRtj7R3CXpmwHdKgzQXnvVjD5Qr1U6RkDVhRY",
  "key18": "5NXJw5RxZBdq2iCAp9gTQPx2QA4W22w6pdCzWD9UwCtwZ7wg9afpDxF7R8K73q9kedgy7hfWwxzLCP5Bu1TfMJKA",
  "key19": "o9d6kzchfhAvKojjvqFN2MP4CVZuWx9jQcEm7MCSG7ZXx5S3hkp98csvMNPEFHR6hCFJArNEVuKFkGLVtQ2S8p6",
  "key20": "hVyMymTdpMKiw3VbEEujRNgFe98C6rQ6d3UX9zrkqucUF46kqcoydwVF29T2MgR3UTkuZrJBA4k6VJ1qDtRmXLt",
  "key21": "5q6P3xM8N7ahtR5meKn8mZ9BVFYSxFPXQJLFRSCEeknBnxtWSVScdcGMQbJwGBwPfgjfvhWBUeZP88iESx5E2PYw",
  "key22": "44YpVNjR6S94TbTA46S7Fi5P9a4WZkK4GNBELE7Bujgd5XT2FqBL37Ce7rcXoy5etKEdnxomfc4XdRdvw4nLjQaz",
  "key23": "5gAQYxLs2ExwNyYY27DE442y5dyEh2RBgEqPDDwFo6fXaHRSCipSHbzczRtzRLGDSrnuEYgKdjHWFeTWVFtgkojw",
  "key24": "5uYLCamLryFx9kYKC6tJYiMcj9CEZa2jwFR4eFjJvVFpoSgY4THTxrZpsjngDBcmyky4xNivtdjstTu63iGjEju",
  "key25": "3MWxqZmfv2TanQYAuAtturZRPCmU5exoxgYwxqUJE8naT9jszSjV4EJvdNCBS7jCEqWtK6kpsT8Cy39QUTQugdgk",
  "key26": "o5yb5avqNWftW27Zom77TM9LDYb4mBMPeV7Vc6pEQmto9awroBvAN9FXF1JpYE5WBUq5RKXEhadr1Cv5BsU6TVr",
  "key27": "57HH2nZaRKBiPAddNADPgaTM4q2g6Lat8A6dExZrrPPu6suPiwVcEjpdBUT4KC4GcjKvVHAgmGj2euBNH5coVNbV",
  "key28": "5xCf41JXEQS3JN9mRtvP2nj4SKKK5NZyK22xwaJmCmnSKWqSC5sCbUMJytNmhtP6a2W1aMawjJ99XWXPHjKZXjwY",
  "key29": "3qxs4zLu8BcgBXkbD3rBZJgUUQQnBd5ZvTW2rGhAVLtFZxvCWPRdwrBtA5ootGc8Nn2VSRu5PVr3drqi94qAvDZN",
  "key30": "67VytV1ppYiTsTzCatJoEwUELSDJ1Bt2zofZjXh619PW1Sf9oTYQHTVJbJ8Az9aUcHqcNSJbmmAHpxougczCF9WN",
  "key31": "2ZPLEQdczdBuMKPHt5ZDT1BAUvzTfn2bNaMmFkaJdgAFNpUhLSUd6iBB6VEpDh6kUU163FrgE2AixkWRDDmknJi3",
  "key32": "2WryDaiHf4Kc6vaWqiP3bdnqnAxjhjCv4qrBd1aTdUrZNBqePFMiGpvRcNUxQDpwM8BXZK5RBfNDh3PH8e88FbnP",
  "key33": "8qTjw258hjmgVoZqT8ZhAi6vKujvJ9EAZb6xbJDz4pPhyZxCWcve83hGehfV66Gq4g8RoDw6xCgBKKeb46aMxW3",
  "key34": "4mF47E78Pir5aLi22F9Sto9J8z27tPR8fz9auTrLNsp2kiBiN81ZYaxwEyDpxaTsLLREiEP7CjCbskWtnVFLBx1u",
  "key35": "4kAgcAna1MTWMsaYYmr81D2spmVeovvKS8emKxhAYAdqZgV4jLDnibSVckcgjpeZUCF84g7ZSFq1sc85j4hapxkd",
  "key36": "4xUKDiyNx8wtNR8ssHH36nWXj2oqs3YKnmnJxYHRxPJ5J754cAsqs17vf1S9EeFzLqihjv2Md3sXHDxyAKDZxARR",
  "key37": "4XUUJrobSudteTuQw9LY6Sk3rYE4RcCbb8bfVR8UnWXBMPKf6ECKWZzxCXxLJ3u7b4qKcNY8cpgXis5ZxPYHJckY",
  "key38": "2PfsN5wqn7ySbJj4JwMoZ6Bup8MigERaJZiPvgmDzUgbc16TJRiC2iYYQyEafTRu5FhVwVrkXC71yDwFar2c5gd6",
  "key39": "5iBfkYkkwuuGHJDiMThMfM8w4rYJ5bto824QD7EexHydPCwC7FmZhYcbzgNaWNTyWqWhhwC1SjkmPa3VjHdukjWT",
  "key40": "44uLKx7tBahE9QyQ4nRxkrUKg5UWj4GvtpyJNiMHi4h5GSa2DunEvVNqjesiTp89gFimmTFD7GqchhQt4usmMb3H",
  "key41": "2ujSANyN3uQbqW5LyyJYcXbjTJ2BAj82qEPjxsEEyTp9PQo1MRyCiNBAaECUf2KqGx15iK37qAwMZo1aeGxkibnn",
  "key42": "4Ykb92nSLiuYS8pEnttoSzWqoUvi42vEpJjThaTsPVPRBqTw794agK3CWKc1sbZ4s2RJwxbKd5TzMJDEXhvLaa3c",
  "key43": "5Ktve141fNzsxmhcT9cYM9Ggw3jQYxFUt6F2tGeCrCQtkU7qHD2nsi6pKsUkmf6NHFtNgoaHJzcK8ANbT47FANGm",
  "key44": "uRegLB7FbZFnHVd9vARSPDFCqD1xiNqXuh6yR5CX6GaeGVszwQrSTDscgo5wksKdfqKE1FfdNy48PNQRNBJtNx7",
  "key45": "f6QJP1tHFe45mn1oPSmY5oxXVUg9WYfEMuG6xy2JYkJQ3u1VUKbs4xmeezFbUmqdAVp14ubBr6NkHo4gMHGncWF",
  "key46": "3AGX3v8K1NjGq7KfjRbRr4htCdpT5FjnrM4PTNm5LpDucUvQrjjYoMUTRAda1Toz7P69mjtfs1UXtVPxY5njTPLx",
  "key47": "2dmxPkh371V3znTKwoB5R6RSHcBipEfxCQ6bMWenNLy5DHAhPgAozgJCjTzAgdSY91F1M1UPiqwGJU8cCZ2yc2rH",
  "key48": "3nb66EuY2rr1UkN8UyRfJvD9kwM1zhgNDMRRTb67jyL9mh1N7AvWdSFS9qQQsqi1YwUkJgiFtH54ut7FPh4erTKq"
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
