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
    "4mBKtxiqBHWCHcZtGJCN6dCijrgpV9dsHzaMotecum4RjTuuhd4fdELqiqwGpx4svuMBKuchV4XpZFDxp2GXsCLn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yKn51GJwJWxJqP9GKPMg2PJ6DRnA8opJkfdGKg5Cy1nzbzh7iimV1NdvX54MfJTu9WB8kQDxExJwcbo4LtyERy1",
  "key1": "48hu8jVfo32NCSrCNE8waUg93vtY1ypodYx2ivsKqgZeerXL89PfpkQE7LubvrmFZn7YjUCUHxHi1JL7utex6XKv",
  "key2": "3UURrNwdBr87ceF9SSbSm29qSKhNKNmGmFVkfjNZUqufWgRfTGsSK12JV2gj7yyjAXcbWgkc6UYeLn6hN43kdvWJ",
  "key3": "HTgbGtQWjCLSW1yTshJmsr448yygeCg8Nv3x6zVnR8We4c3aEYjaGHfhhA2eeE2iT58mwVTVJLGKzyoRNnPQ4RP",
  "key4": "2JVA7s67bjta6TVnbZcZX3dNT51PnUPQ8zcLV4gEjHR2o1YT4CAfW254iGg2GC9BxCyWDNGC9qUMQab6uRXfpgMt",
  "key5": "RaJwDNRRLPWfNRJh4JWLxv15wC8syu7L6ovzKiw7qJjd7XtW1ETPckugDbkDv5HSXJBpixAGr6YVt756iykFLG2",
  "key6": "2goBKPXDbzXUXixSpzJCnbgeRLVzGzhCkz9K5rmNYdSQgUUdMpUz4nAK613AuaHCCwyoGZyXgnmr2NwZbebeTu3a",
  "key7": "5J73L1YWwHXGDaJubgSmDw5GtHWhFtMhmYwrD6oCg1m7Pdui7sjbyN1BnmZYFcQqk66ajCtAkLCdhy136G4m1Dq2",
  "key8": "2aTjt6H4ZPASA4T2vaWirxK2RkhWRybxhaHPkHW7hF7bcK5hYVzi83TtqCnPAiuqKFfEMWPtvMQ5vz6MbwiLh8jt",
  "key9": "3GVg1KEkcQXEfhoQVf5vf7A5MKAkJTfjj3m9vHJFq9ap8eDcKqR8yjGaojMj9cpuVp9WbFun5bo79dzYjXiEUF9M",
  "key10": "5zcmPdVmC2pw4H6xKHvPvki1sJAELorXQ1GojUoDUuTptX9bjw5744jaHDMs1DLs31F7rWgnQByA8zhStPxhvTke",
  "key11": "3gBWQNg6YgFU5CLBnqui7KkX14VMArHqPbib3UM2xbcB2PHfGqswmipW6CP6JLqkJ3QXnNC9BpZm5e1dsnfZZNUS",
  "key12": "32EUnwdsi3bgiStycTwftNTpgsxZShaieu7FnZeMecT2rNRgnhTPw2k7MHbQD5cCyJstZiCq4iVu7TZseHcjJsBY",
  "key13": "39q4HaFpgBvyfMP6r4BCShVJJzQCrDUo4rueHgB9qugxuamMMPwRLUsNJ4DXFoRTyZR3By8MwTPBtb88ASjPzT4t",
  "key14": "MrMYnMjXdSxxGUpaEsdEQaZF7ppdjySborMhD1DvN27T2xiBVxyYjUJekSjKYN7TUdz1b8QVvCuyahmyfS7q28D",
  "key15": "4fPu8AM9RpgvRRYPB2cmZdGgSGsaWpV2Bq4nUTBC3HsJafzW38j4GeugXmYA1xixpa8d8eod2tjEjbuRAzzKkhXG",
  "key16": "3VtHL6HCQqtL1J2yoqcXyCHVhpSkR83V4bNCFcb5i84EFu7AzsuN1EVdkxFfmFEbRAaJpqFoJcnrqpkFJ2dkpNis",
  "key17": "3VqVpvZxQF691hrL5wKTCgUhQmSnSmScShG1UPWxeuGLdHnVo9PGVyYVLCyuabUEhs6B3WsmStJha3CNSHJo8RZB",
  "key18": "3ayMNeqCxRDQJyVsCj775fUWD9HzjVuJU8VVnepRgKyDmZXCRMumtXGcn5mPZ1jVmyUHTDd6h8gsLUptTRpLcTqC",
  "key19": "2pNvRV5DUcKEeg9GwReB4Xbutp22JKzGXfLkerN9NoavDhaG7nicouDwxT6tJuXZQgHsm6iw7SKXn4C6embLQ32K",
  "key20": "3qPuzwyxofpGmq6jS1H5fscTStRnbGAFdRs98bZeCnFQDvG1BmpDfb96q733oYL7gpXDSg7e2KGLWEqfiDaQJ3vj",
  "key21": "rVmFdNK7bYmxvxyfYseXdM1jTJr9ULKWJReJdczUT8YJNzy5Jeh6YvEWGEvhUY4K8juMVft4EKK78aFjg3DSF3j",
  "key22": "67829QgWAZFwe5w57rpGAeQ22iATJDJHVU4XVNv4KhCV8P5bjttEVLynyrjcp3XUAgPUx5L2Z76XdG4UTtTi8PxC",
  "key23": "25PeA5xfHgXZSLKexHkZduiXerzixudRuMz1U7cYz74C7hC4n7ftboKPSJcwveiK8W3YSpQosbFziyCiG6g5GbiV",
  "key24": "38yaaMApdutSx1VEtjjgaaS5gfV6RsZS77YRcgwKesYXgUQQQJ36p1hswv4JJS7NHB3PyFJ4N5uqWNQuMK1E4M3t",
  "key25": "57az8Ype2KGH41uySvuQjXG7a1hK6xfhkcj5YWdBFuQ3q71cgkbCmhLa8FzJeSAE85ah5soWycit4n6DviYsbzsz",
  "key26": "4872kPMYVxofzYndwAc8tohHuUUxc7xiW3bJ9kEZRh28uHJ1kTGYL5rBvs5dQECG5Lan1RHiiY1jKVmB1FEfvxdr",
  "key27": "4vBXWHf7BMoowHHdVJc6gyvk9XgxoEYktRFSAcnHAk4cbqqgytRRX6jcRwRj38AEp8bHoUtXkeDKCEUYNsHMWqZi",
  "key28": "36fivCLnqs1HuvHrg9Eo9m2nak6jB6ZukrakPKTGdwGnb4MteyCw1sXGxtYFkZXRq8wBjrChuwF6DBVTDg2Mpo55",
  "key29": "39sN3JrbVa973dExdnaC6o1rUKT8CG2jAHftcDsqomd9FYBMPsgGcx6c6n2L5iv19tCBZnKNZY4GZnrz5a5wDFQu",
  "key30": "uAjqsTP2dsW89VYhq3L3KrgYFbDrXvr2pVTaxviLK4MygHC61Gzo2125FtFtRGyG6zvn3yhQpKbySs4eGw2WgBU",
  "key31": "2VWww5diA5uGb3zkisjc9zaDAtAqVRPbzej4KWB6vws9hFEeBRdu4dQEPMRVYAQGWTPKgPrkDUCssd26G7WoNm2T",
  "key32": "4HzavufaVTtPmfF2GRNPps25kMKgSMLBpVSrBaexvrFQtfaNgRouWrAoP2SRLLuvrsB9etTSEa89oXHoWBo4jnJc",
  "key33": "36gYsHik7AYgWrpNesZ6FE4BLDJ5YXMERuoe1MVuKcXcfEsTxBYvEz5Eq8FgED8smCZaHs3bahiXakq3pyTeSnNF",
  "key34": "5SqmUjcJr88fbDPwKzRpdxAM2vLvmvV26Tn8Gv9ctAEJJgzGfEDGGCQ1FH2w91W1aiKAR9fCMQTURsVFt6c6N1gV",
  "key35": "3nXbSSGniSE5bJ2k1sq9R7TuePYbiRVdZTL6eUSWKYA6zSnxhk2jV8Y75T3heMqJaBXneJYUkzxvoSRLdkZq1Efd",
  "key36": "3wB9WZqhb2R1mFfHPxNXaBGtjCaBzgsFsSDqQJkpx9DLKmLcVrhVo1CijqwLNotvCXF1nGPhm3ss4Vj5RvusCCXF",
  "key37": "5RqUXjfC5kHemSaVAEjvnfP2Tra7aKCciZH9wNn7s8Zic5rmNWpLcQEZ5aNm1dv9LJtuqd2CSxDjeh3eNmGRvZcd",
  "key38": "XsnGP8jz9mAwTviQTqWwbriPqwzAyo9GjZK94i4edjiQ1FXHk4MU6wC4kL4UEuR5AHWChnSGSh6u7gaoKF7yAXL",
  "key39": "EdKTgDeN8MQHVjD1mvJBJYq2MmyUN5Rp8VJzU5YbN4cVaLLmyhJT3Gp2BX2GuWVw9dCuu1tGMh5EXPuN4x4aSSH",
  "key40": "2XD2hMgBfzbQqgRiUQ5gTd6irFc252PzYx9KAvn4K7wx6K6Sa4zPPPf366ToRuKoouf1uGLhfMdw18zKD1a9paoy",
  "key41": "428g46PyokUicGTr71RKuPzMGLX3Johswr4a6QTRBcoYbovWj1XVxJAjgXnyPRUwSJpnXicef3MxKysHurWQpeEu",
  "key42": "4HMr2nazd4VtenNDTgRX96fC3qXaR42GXZG2dLtUENHxxvk9bFafehYyL5vBSj8D7mixmUm8vHHfQiuXKEFTQxrZ",
  "key43": "59KJ3jNcqtu4UWFSC1rVM98eQKNSMrkgivpGMYXUavPjD5aF6MymQQYSwsGv8w5vnpgYAhRCFy8dwzYCDQrEPvKU",
  "key44": "2bFTY3iCZpqWutMtTzrki68PUVbtNp7RwUVY2D7dkaDWwSquCGBHBPLZ4vhaZq5zFN1LXuH91AL7iB5deV6BCei7",
  "key45": "zcg4BwRSx5LDo4WgC4KsgrrAMtmHJYL19EPxpFGN6mWC4au6HMhdE6BM27qUxMR5UGvRrE6sfy1zu3v66iKjktD",
  "key46": "5GrFYk1drxBG7jTjN8soV2acEjHJQbnmQwhFahFNtRSyTWFCATQrywZoaLuEJyPzXo7TdptXqZ4XHi5Mmci9nXAj",
  "key47": "3RPfwN2N7tpKL9ZgRmSFSrPJgUvP22iDvMHTsvZgn8GPMZoYHChD1AxKPGgwgBsNs7EzJD3X3QcwhFANxzZFkuNi",
  "key48": "3psN3RjdYnSoeohWVMgXpvryyvLhy4Qxit7py44UM6nc9FwAhqegcZWksVpJZaZjHRvRmRb8Qm94kVPaoNDUiweb",
  "key49": "UGdH8FCLMrKt4tKW5AbJTXi55zUNn8Uur6bxxdbW8GiNKR2aZKZVG4unNeubaTa3HaZY9Q3iP28yVhWSdADuF7T"
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
