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
    "2gRPP6k1mS7mp3ER53VY3UC2tvyHJjH3p2B98z8N3xHdj555v965v5Lq5jV6R5ffFBTLRbeHVUWW7gRp7MjEB5o2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ERoByE9NoBjfaRoaXnyN7Rp5g4HVBoGxaweGZx3WXc5vw4yfZGPhotemwAWgpo9fPXnj5RaWA33e869RSu8hERv",
  "key1": "WR5181Da9jK3aMkcLYjGuiqeeshwRi5k7MjTqPLvMGkvFetZ6NAfYZw1gtSsYUS6oBDRftbvSCXDraxtwD7RoZw",
  "key2": "28s5PsoJahEkX7FW4kVcjs9f8pRrxi2HB1mp3V9Tr5UbWGVh3F2CSUrhhvfy3qovb8cb8anTN37q8yhXQaWV1jFw",
  "key3": "3bxZ4o86WZ6ugdw7qu6FMV4HowpQmCevgE5DjudnnUX9z8RSexCzEiW1xncqZ4RugHGAfFX6eQ8tXaM9Zf5p8B1z",
  "key4": "2Sy5TU2ijhTn71S4Nxv9RueWoRkaat9zms7p7ocbwg33DE6N8PAqQdiQUAzvZr9EGcwxZgpmuJKpSZTqXBeH6TG1",
  "key5": "KwcNik3irpEUneFDUrjoumjXSG18G7dYGFxAueLMsAoDKgkt4TKp4yZHZfZENkRBc5nNX24YJ5aaidb4FMLisLj",
  "key6": "28cxa5LxwX2mRdqnCgzeV3cnRZTPbDYPeX1v59LssZFa48131m4hURuMRH1roGdVH3KWJtYPATTt8b8ZnqreStns",
  "key7": "4WWPntyySwtRxq3TKunWBo4F31XcDAm2h6ZrAGTM7yyE9JkLNFbzNJG7xfiHCpGCKXa39wQas7Ub6s3QoX9JcMaN",
  "key8": "343zFb9JUuyUvvfk69A72BZ8hvEaVnDt2ZbsRqiJML6mCDGnLTePXQU3SmCXdXipEigsvLH9uSwkShHXV92heXeA",
  "key9": "JtPCZ89PAEE2tPsJfiMC4R9ckeb3GkC1FLrUsrw9VZbwC3fuoJtbQnA9EYjVGQ3jSceh588oCg2tLxkcYJNRZTY",
  "key10": "5S6SkTD3CyqckWbDiNbJjWCjaAFagADhFw5M1k6o541EQoQfLnZ6cprPNysHAQR7a3ia5U3VG8EbGKjdJfnqPna4",
  "key11": "8ndxtDS7cCkpZZsA69QKm6MdHH7SjPp2Dyn1oND4eWv52bRr2W54zVMTixsdQScofCuhSbLwdJgLUiELRAV3ZAV",
  "key12": "58jbFnaF7WQNN5bpE4ndeSKZH9KrzYoPHnLhi7MHNPKBjVYEGtNrSEW2L6aScYfrVNmBXpSmz9qQH7z17xr55n74",
  "key13": "5oW9GdCJMVCM1wk8yn6ds1xDzGHqyM46DvJ8DD7KntZv6Q1XYdxbf7cvXN1GHFKyJ3yegFQWfaVqXWSrTpqBochd",
  "key14": "4hZ6KgoBuoFbSbMmFXpcL3WDQXVyz2zMpGgXSbedYzrjx7r7JUssjVQvgeGDopHLV1NpsXmZF8UevDopqVge5zhq",
  "key15": "3TZTYoZKcAMH7MYTEZ3g9hbvYnF2G9ktYgvjTJ3JfA8Du8EDZUXfSoAmbLMpTnT2HEURCrJu1QKTcY9wp9hXXugj",
  "key16": "4TRXZ6qkdDLx7QBQBxft66ocTh5m5YA4Gxskg9T6kscnJ1Pw2PFbh2wYGKBt95ZFs45sDBVpfJ3kdxuZRv68ycCU",
  "key17": "2uiyC3K8vvbC31AWBHoskcWcztFwGsPfpAsVLbZ9ikD2k1qStzi7X9i1qWKsxth2VreX7vBL7ZViUdi6GH9pY213",
  "key18": "3fM3nx2yGuhhPxLGZwqktfG9WjDuV8wKz1wxuFFjz5i6UR6MwPmMcfTRxWtLgyhFWJpQVZiQMojPgd29ZLZ5Q5RS",
  "key19": "4o94CR4eeXYHwg5c4WKhjDsGWiKkhVurDhQ6fywXzMdY5VdHRtEyFa7PQNMLduzyQgBjEDJXTJ6vvd5ed8q3cPD9",
  "key20": "BJX15euN7wUNMzuG9YCbCBws9hnp2d1xC4vjhYyhhEBiXzUBFJBZF82VANuAFUPkrusoSExbSn4u4StCkg2zMp2",
  "key21": "24ajRTz7AhfT3pHVxaPfCuQg9QcdGcVcib7zDPtaTWeUsrVgBK1p75fqRWnUrpxZRYzriFzWcZJYbitL78iCrF2Z",
  "key22": "4K4qSZDjnzNveetHmVqCKRbVSUVKHg1ygnDA372Gyz6SrQecwPsfbxVrA8RtUR18zHUGUY9DsX5jzQK6Lro7Kvqf",
  "key23": "4emAAZ6dTcKrQREhCENNWXtpyDESsRS7EKxhAGocXWm8NfKcDQMac21NPh3VG3BBiYPp959XzggWQWtZ8akdkpzp",
  "key24": "3A8toWtvyAZjpLYNwb8X961fJK9QadjxpeLEwbhdkBjUXcuLpTjMvwvv9FbPTVrjcVh7MHmfDiKMwwgMxxtTc96A",
  "key25": "3rYjrLvyVdcT6yxtbvjDfmBJppeXTn8RJmENHiyCq4J5MXdhXh54SSAvJWQu4dCdZekB1NU2qj1zbJmE5xgDS5M",
  "key26": "44yP4YL6j7YVMjY5PRCiBcUuJqbpFS7yK2mj2VPZJJdf5sDDRPscJjY5jyd62Y86cxyxULRnUVvzovcPX8L5qs4c",
  "key27": "fco3Qy1zRkhqFguKp21yWjB5x68KvMm2K2ZAdraeQAc8sbEscUYUKdYyfNu8Ui7ELKx9tU3KXoCnnvzFpByqKhh",
  "key28": "653TS9QcRwMAR1rvWrN8k7ShgptsWP2xuNSePZBj6FMhkAyWbsKA3Qe5JZLHri5Nj3KkJoZqsy6B4uVriRajjnYf",
  "key29": "46QFtLmveTWFk2b2QbG2srSKosYUm9TqkrjRzp4zzzvysLa19mQQfEhwvTByZ2HihykBPp8viBaNrow7XhjeoGpT",
  "key30": "47vmXjx5gxkr6htcgUzhVhxFGHa1y11XCZiPvzXPfW8DCv2mbnnTnUoxYtmPUCouNRFpHim3Ro5CguvHh1LTyYzt",
  "key31": "4MAmdz5coiHLe2H63oase9fhWq7SzdS8UQotzhubmiSmKRHsnbLT7JibAMQNuTLvEZdHnTqZxXvDYM1KFu1VtqP2",
  "key32": "4McmP9rN7SYddXR4rrrKN8Pfxmx6dJtXLnfn7k2AvRNUDWDYmscHuffyKPVN5Y3SeNiKJo7vcoL6z9FyuEhFsJ43",
  "key33": "2MFEKUZ7rFNJ5GG7QnJG84sDHraWJuQNQ79q2Sa3mHgF9DnKcgK5QU1uFysDKkb55v56qzfb8q3ezF8RNMe74fDv",
  "key34": "5MUkfQ3vsCFpPb393JdqiDzk2HWUHQB9YWquzXnhidThTokz8EkspvHDt1FwYoQzt9ycaNRmcxKWh8E1CYycSkVV",
  "key35": "5zKunKKMTVYZqXukjJVzMpfG6os1jL71Ukkv1zTzWsraqBkLcoSmS2vuU63vnq4kGjjZTvrLtXiQn85s7WgJ79oq",
  "key36": "4soniPhj2TsjBstwP87xo3DQjAC83owEnRdUujMkjP7pAq9RDPzUY6Gx6Tiqr7AvzXQLzNT3AqjaZSurErSPDuu8",
  "key37": "4WjUSnZdkkneNzr1AvhDJmFBmLXkDYjcxroD9nY4DcDpSgaoUi2L2BmgP6WgQvUQYKfYkp7yKTjSHXZ1VQ6cF5vM",
  "key38": "MHB7aufeKnN2LtnFhb7JnYnH8K8PuP2Uot5qnMvw8YJMaMMNqqk7xNt9PNUU2YCY5w43GKWHeJUAcK531YK6vWH",
  "key39": "389gZoiaFvqHPQSAgs85ahF6vtHUDpycFE2ypqgadNRuxurHLkePRW8eBWimW8DGeotArmTeAy7nbWze3RYibzgP",
  "key40": "eoapZUZ9puGojPNzWu3y72GFevsmZ7vTPsyv9ic1arYCc5Bf7By4ZHRvCX9onadd7ZcSxZs7fHxJieUBM6r2GU6",
  "key41": "2pN1pQU6qm26ezht2Pu1QxRvZajDtJZFk536HoUjhEQkXraTNojeMzuHmYhFdatdd7buEGoqRQ6Wozkvbz2Kcdy3",
  "key42": "4qajWMMF61NFMJTrMCQ2CZYojPSPj1iMUAuhBf2JRXtDfFAmC4LXYFP41c9zYxbLfwXFpEjpar5cjLhEtumWTgX7",
  "key43": "36Dc2tYLjHj2H3ZSUzCdk6u1qzhS2Ltom6RRfp3WQhqy3nemTmzjzehGxM4pZ3qKgVMETQjCLKrNVQP4dPmzQYND"
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
