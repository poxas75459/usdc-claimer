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
    "3BvwMVdNRGyHbGExXfQDFRHXTiCigxTGSkxxer2TXZfPnev55Js4iPhuggNwUQfR99KJPBdfL9juw838Rcm4e7EL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pbn4XfzrrrzD5zHrAdXezA8VJFzfjBG2JEjcPk2Dswo1SWEmTZ42kgY9wjZcEDLRpr6RhaMw6NSvU8kmtoy7mCL",
  "key1": "2yx4H3PgiKDgiFK6cxpz9EHMfUozz6Mrg56Utci4DFKouuc83mDiCgaPMoz78MXL9uptLvjMMyYFEBqDzX9kjZj5",
  "key2": "4RGD1ansNyHK3wJis72rPTWn7RvL4YPWhcB4hAbi1dLoeXF3vybDavvB3JJNk82vD1Gsw5LWNuLXmxmNtV7rZxTt",
  "key3": "4SpokDppkJRJuoLceBPDWBVcJe2vM7txhBGFo4D2qt7ZYhP3YdoaxS38JuCcR3XDL4c7NxY95XEs1CoiMNSLfEib",
  "key4": "2CrbcYMHApEVy6qbRM96Ekt3SQNWQfe6rXRwBjBr1McUdV77uXcmZE3D5kSLGbph9aEpV3kakNeDdSooqwsen4sF",
  "key5": "3F8guHM4VJGGTSznuLsq549JBYyCuNpya7ujA5JbEN4gQBZdnJBKNwfDUFg6FMRGEWy5BndRyTfRbgVGQRy75JLq",
  "key6": "3qPce6N7QRvSNN8434d2DdaVctAe9vNxefQsHnKiauJJpPdS2KzJGLkE8R46uG6WLzAGXTWLNAxfdJU3qZQVQB26",
  "key7": "38XiTZmGuDALwqEgm4TW3GDZszrDFK9bg6rqnRL8djtrvwemZbb8fB9tBmsLRWsMkLDBqsQwan89jYEauZjvbcMB",
  "key8": "5qHskqG9CczwCtNbNMjyrz72NWULBFYyzpz5joopsmTY1EuxfT1w5JS7gAwd8GtoUjp38gf1t1BgYwxsTpcpgoiZ",
  "key9": "3pCQ4VmTb2SHGwbGZijR4Y31umVN2Jg1nqwzEzYY4ZbpHQqpaREwcJs59Y3K1uos3RfM48bYpqTqLPApTeEKYAtU",
  "key10": "3mA4tVYbKYLBoaVrHsRqe8APD8iVtkam5DqCx1jYTogTJEW6cpkGR4pjgv5t1UTfm5vFMkQb119f2hpbxoNz4Nze",
  "key11": "cD4w7HUnHvByBa8nXsdB62StUWAGVkKjJam4WSwRmcECtmE8ghm5MXwHRcQtGEDD1or36uFX5kd5biAfLBQetLv",
  "key12": "22XdLFhdw5mznRdQt1yjyUZ5V2GW8dBMevw2atZtjYqiSZ5EhMYjN9DAdEsw7jtrUGsqkHGh4qrGbau19Vny3YSL",
  "key13": "2rMrGqUV3wae4YKBSDdiDLqxS3VfeupXK83QNecuCAqriy6fhRtxf2H1CuHy4UhwKosE7stMWwvTDAZUjwffTD9v",
  "key14": "2QDNPFhVDvDDkcxokPAweGZobp75DjJxVGzugfiXBtcgojci8T7fyyKoijBFPqE7buDWufFsuRm5VyWvZNniVCHB",
  "key15": "2eAjQSiu1NuSGymxFhgAh41EVtd14PEaysdKxktbJh8rru4ixjJpN72XtPP8KYBSvo3xMBwxkgfi6HSLjovw2ZXm",
  "key16": "5XsFDpzjHqNu31KjdT2rYgZGeiLec6jMzd7jW8VzndMv2kW78ZkkjTZWoJNUuxpHHvyGo7ao2RSRytM1YAuKaPXN",
  "key17": "5B1jdRoK8LTxc47QsWz49dDE1rWiNeoWxuoxXiopzyLSqR1jygWAAAAhZMgA1C7rYhTnRAisv2xGTF6ZgJ6hyiZv",
  "key18": "3PcnuBpoND9gWc5EHfQ5bksUryEwAtLHbsvjpFQpsxGB9ohmhiMdvJDrXaYZZt44WBDkwGk7udWaPCrajtdqNhF9",
  "key19": "5qU4PBVfQ8fBbPN5Q3CRSUhoXYs6fek41oXQsDpLYpk85jASU7LvwqLv25i8aL588j21qxHuYVp64g4Rhg1zsFQr",
  "key20": "31MFhopT59Jqsar7czgiZ3zbr5NEEpws2GVQdjwxmGwDeRJhZTZBpCB7VuCgrpS9aNScdrPAKn6w75NVvvtLtH6b",
  "key21": "4VudMq6qpZZPike98TSngbk2hZKuNU41vL3sU3Wz85iBss2PkN7N5HNYeUpEc37QLJo8EoHC2HbyWBnsvy3tiAuV",
  "key22": "3EoCYNs5jbaiPgXzdBrXEQgjH9ugfzk2MsXTgoVUsUPFLmQHcSZSeKCvu1Mr1E2XY4UWa3EGZBPCrr563cn2Ei6p",
  "key23": "2rhPpfmmbLqnQ4ZQwW5WT2TJaiubgbLHXtP3hDB1h3XfkGtrLjCtEDvWfWS3bMypMUKcckvcRK6meiL9qdudSmaj",
  "key24": "3jm8VRDcR4Xw9XtifxhsLQiWtvom2pCBqKueF7RMVKvjbPPUAnrNqLVPfQkvrMYk8QKaZWJUkZHnEYV3Vq9ip4HY",
  "key25": "5eZ1iECBP2YQ9AgbmYUHvyKHoY56mKTrr41XdKc7Xn9wpiLipvmkdzipzr6AnD3TS8WJsxJ95sG4CjWk1H9UHbwi",
  "key26": "3kKNuHha3acRMTKpteivMQzwZdC9UvW4D9YdMp8jh7kzdHyo9ocpZ1zmhAmPBXhg6jp3CmGWi4L8bh9b3ccjTAN6",
  "key27": "3naTTByyfVn3uowdTauBaf4CwtE3wSzGBDPGrzzaHQ86587tk8MFDTSqpAv1JsA8U7jywmfq4PYYKn3fpnJz19GN",
  "key28": "432RRJsjv1q69kpLaNihvd8agiTqCtT1Q3EMEhEdEz3nf3eHevYZii8gQcSY4BVNafaZbpoFLcALhKfs8Qu3kPoE",
  "key29": "3Dfbnuqp16xwkcWV92RT3VEyvuwcmMcDY3sKr2D8gXnzUyc4w7Gwdf5eAbZiU7b9JJHQJf3RSWN7EeCYZLpuBucn",
  "key30": "arhizUEULH2uty2oFov1TEyx4WcrrFXvkMKTMVAdUUWXQr8VmfitdkpB4168bJcMgd23ik5eL89ijuSgg6z2PJP",
  "key31": "5MrFLnqrLFiLMoNnAP6vizNW87vgQCq8ERuZCSFA9SLRmvYRigbjSNdfZhYrTM9jB6g1CqANUy1YTxQWnDkAQJhv",
  "key32": "3XbbHgPgBnM5Hxzwzf6p1JBGZkENHRqXutoxJdR7CiLtW4CNWNQ5ySSyoaDqPYhZc2kgbVwFCHCwzxKwhmcqeDBf",
  "key33": "23fLRDBCANxR2rWEoi3SYNwP8dQpfagC63j48gAqRSt68G3ut5D443Hqjofm94faRQt18CUbzGD2L6Wwd3XCmXjZ",
  "key34": "3esQFaJviJ1LURUDkGoZhVcLyup1VN2L3w2jWTyVBqawSMMWDjqGKGfvUSbjUbppwmiJZm1QrGXC5fpFz92b3MTz",
  "key35": "2qAMwvXEpSN6a3NjVodBqYqNoKXbzfrYxcuQxZWGaaDuBHQ4kT9jMYtbA7ariADwwhHFK2xxKKC2aGSvnXvQcmqF",
  "key36": "4RFn6PkJ86Ki6YBgHaxMc9uiKrVoh7uFm4cE3d9BaNmqkCDibfTszy1cuigXz2bHmUe4nndyRjRqTHGxLfPxawz6",
  "key37": "3dZVMK3aLQTBtUxoWbs86PCcaV4GwRQyMzm8paKehyiGvn7r8wou8C8rPfeCKyts16XsoqmJ7PXMDwH6CKmjaYNN",
  "key38": "3d6Xh1nspPWX2BVbLf54esYPwqzTKZfav5DUoHn7fMhBfWPaEg9qoJBk7DjbQwvDqvF3i4d4tw67DzJDhiqjWW3M",
  "key39": "4zGmePT1kwoB8vX9jp7E3LwvRfRxjGJWJP9GiGNTv2syFbschayxgNzAdbsgPGTee6cy9u57tyWsbXxDJFAR3YXS",
  "key40": "NQwkQpgWsQjKRDttWQ1PyRcDM5hjsRBbvKniAJTdpGpqNwcbvj4PFDdoxQv3obwvkffviRgbEj5TFB5iFWPAGs1",
  "key41": "4ZZpu8AJQiAp6ZtFzQGSq9PMgVdwp8wSnA4K6AuY7xCeSUreiPYvLd6ZtzowTVB781yjFY9XYN2LdTAvvN4h13sB"
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
