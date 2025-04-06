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
    "3PqvyYHKbsd3i4agQ9HtwBSq2ztoMTNdbUXSHXSpsGN5vVFGaQBeDx4KP8ct2mvXV74A1wBKcEwU5yPxcqhFEzrP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33YWt4qJCxNGH25iNNdsCbuJpkK7HLxRtsQD5iBCMjDZcJYusNAATuZ22cbWguKws68kCrRQexEMA25y8Qv9aJBr",
  "key1": "3cK9yc1a9XbWMiWtSNZGJrQ4zYkgKF5rZr4N2HCc7GbGzGGGB2kHUQtjCmaix5S6fN33biAfjdi8y1fPfLpYnBo8",
  "key2": "3Pe2ynDMLB12qhNEAeQZyFjpiEjkUgPkkLge2a6GUoNZnCLA42tTc3gWBhbckLa3Uc6W7eA1PriAwPqqpmXn11rh",
  "key3": "2i89GDTMKogVTSp7vVVMsX8jynvWS7DthaMyxvzmXjAc7ZRN8f6gnBhJJaASnqNS98qz6rYhJ3BomNM6xdGHhUPE",
  "key4": "4sZ78fPZzoFyp9nAeqJ5n6uZqDvy68G2DRev7wtjKwmfFqvfbJMv1Lnf6M4tSMdkHWMoeyQxNX1vZDii1v7VkaMA",
  "key5": "U37rt9JmWchMWozvyGCT2ogsHMfzTaXBaYhxPBY9jpVinQNqM1YJKNK8HJ2pyUzrthoGGK87XNfAW4aJJ8mvG7h",
  "key6": "4eLVdiQGGXS6KizE2NPGkzgX3KLT2HrCjoj1vW4ANoaz8CA2sjgJQcBkX2G8JPK9zQzdgX4SZn5xU1bq13gbhecw",
  "key7": "2gW2GCBMQrzvHiqiQetypFcDx8WRXAggSrH2m3FnER7Awo4YTGg5U69QFQWtNJsjp1FZNXXbZuWSxhiRu9eayUXS",
  "key8": "Ce44vtPF2C5NBRXgy5TcoH83tXF7mvSEnoContPMS1Cg8btS2xDstBw16C1tgeM1MHdQV3xBUpsepbQnTSV6JU2",
  "key9": "2uRVyCpYbzTggM8T2CAzfb8zRUPPuVRwYZAeMPL8w9rAUQLweqq9VfjNZDahcrk3AoSN99Rmvg3JVjdyUxoAs97",
  "key10": "5N81xDHXmcS8ksYrMadm4QKovNk1ikntMsetQt8ndvRFwXG4waETFxUF75nU8m2NeDFJ3sQR7nqbv3DCdA4mMsC4",
  "key11": "2zxgFnicmyEadZDGoTHGrpy58Zzf64nEePXG4r1WQPABsMoAMSH7d7WtFHJZngTGir4ZdiTkUYC4mZKMresuXgET",
  "key12": "2nfk2eJSwGa522y6VdWtB5aswHRkfm2pgjbxcsbhZUMDhQmrUoDJoRAmf21rq6dDfzkiVp4uzSV1E8W7JCkrgSWg",
  "key13": "2sMV1yFUf4DE28Aa1LYm2rRVow3DwJKXmmZKfHPXmdy7kethDtbXBsxaCVagGbjPT3FTwnALQA4eMZHSkpockQSQ",
  "key14": "oqVpMwMfjcp17HAfEv3SrWchbwBtq1aHFk2qdNwAEywu1MLmtFbvBCd3ZvooFBWjqwNRtEts6QWT9v3HAEfx19a",
  "key15": "2SY3ux4djWF7DdRHo9dYxunRoiPfK8FYk6EA9Z8egPzZUC9REuzz4y7uok5EF2WWbGuUG4XnC6exnTHDBNjXbqrq",
  "key16": "4rGGoxCRJLq2QWHttSuTrG9kofAZ8zewPi2ik9jwwxV2PhsXuvF65zyZKaNKc5g3GByt4hry8ZqfLmeuyLzqATpZ",
  "key17": "27MuNMxchCxvZ66mQsM1jSDktK4m33y6AA9ifzpjyP3A8sBy6qvY6urkjiU6rLQg4cJGKAchQXUvGESBoChN6sPY",
  "key18": "eZNtMvuawDQkqeiK6RfnzeEY83Q6UHMuDsaLkoCBX8WdF6TeP5opSEEnB271gycBFhCDPuNymPyvkDeUp6U9dvh",
  "key19": "2jDgvF72weJWXuP826LuHYj2foWhMEYyw2Zo911oTQ4QqxDGv4a6HwVqi1Au3ssT3eUkGRKcEFnvfcEq9tnFXVcY",
  "key20": "5WJ5uw3mZMYrKgw3kcpsCreQNHceQkvshho455qYhw4tEAV4XGXRU6EDyXdZwYZvJBSmsY5a6L6fpagdpofnBamj",
  "key21": "4hLbs2JrdE4eKLWCzXX8RMPgLSuFwdJYxTeQiWqKM89q2jb9tcbJnK3p46S1f9MaG5tc5bFxhTkp76fqrN5NojJV",
  "key22": "5nmZLkfff6ZcjuAFj2G5GiKPDD8YNRiGRoGtdDEz8ubjTPnQk4eCaFiq9nvGsKYtAxhVkPMcwYsG1wVGCYQ7rmVy",
  "key23": "4mjbVLGBnYVpW6TxgFF75ME2rJJ9g2JT7vbLWJRJojGvacBoZ2H3pASetN7PGBngitnP1SxoZwb5HojzssUY97dv",
  "key24": "2jWkqfQxi5BrEzUDceuLkLPHwNvvJZqeFKwEz3D8B47EEYqxnnnnWJMiRFirZKGv7F3da4S9SE95oZyywE5jtz9m",
  "key25": "57zaFtrVzkTToQ9srkk5uRErAFzjKVMbNohYR1tP4jwbPkVYQa1sfpz8Vu8DG8oGoLATULpLLXXsiwjAUBJdTz6g",
  "key26": "3HE6aZEenXv9rEL1Nv7dgzaK2dBKhrwU78n5digjKZoaTP31cEVfpSu9nHiJcwnpYCoGa5aiB5GAqKawY16n8F1W",
  "key27": "4MNXeDZyZNV7gSdrAFtu3WwFBCARf46bBnG7CDykcJ21FBg98LaTTBtaJaCHCbJbY1LYyUPcEr9LMb41Ug2Vob8q",
  "key28": "3PbJ5WsQtakefzQDHstrhNWRzrefSyQR3jBZX24MyL3pJCk6HjNLCQdBUbz9QenXfrCsbRmmh5UV41ZAJFcuiPFk",
  "key29": "49CAF98vPFNqizsnyvkBgfBBdxsTRFuBaWvhBnbsySwhzcnNamjHBiAetH6J28TCF5rrqCR4yhUNCg6BYbaLM7yc",
  "key30": "2NMPzVge8akfCZpXb2kGYtCT7tLsnm9wWiMXT1tniCgY6pqpdhKJTyJe2ZMsTnaLsYbAMX1tKHqSDZXm3LuEsS1R",
  "key31": "4UYrJ2nFubvfmtPdjHfYa2cSWwE6gLWGhrGCyLsGm5pfrhen9tWwRZrrU3MHeZkSkX8qtvQV45hC9CraqvLCpMY6",
  "key32": "3HnEGJmLnpACYXaxCr3ZRBuHutvfk42GiRC2hyufaV8XWkFeXpW2WnTS3nRtSPPHiRPcjf67M877UKUbf54dGLX5",
  "key33": "2UKB2x3zhACT2fWdPfyCLZZt6ubSkV11Qfy4QecpD5QMX6uH28hAnc3RJfqLTaj79qTWWQYuGS2mEGPAwnFGLj4a",
  "key34": "hvJ3wnHTocJDTLuMex11QbzhX3E1mJ2uQUT5CFnExh5TT5qhawaixPESPqXvbx51iCVPuPqyCUVMeev1w5jsZRQ",
  "key35": "2FcdsNh76kE6HNsaoNngKytaU93SnprPLSdj9YxPBhRsR1QY8B9QCp7Ar7yAKmmXwi4pwE8UzyH6FvrQRduCdzFs",
  "key36": "2HFDuXZBhBhiewbNGTCF4xujNSLPpZJfPL5iYJwgWAyKpY296RV6M1LD5TPK6uTRafWj9su9qPf9DKdXt7WuuA2n",
  "key37": "4cqKyRaxaEq4wGoHdRKzzn1DXxqmjpS7yAec2d1nfsUSgaEz5dd2vxrfUvFpRYf441uP3XnVqNT1uKFRrqJ4E798",
  "key38": "6uWTgfhfgHRbU6kYD2ZGvV3AsEv81eHqReyRuAsL7HzPuoxQAuBRSo77EZWYxo7nTPn7A6PsXxrPBnKpTTWySAT"
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
