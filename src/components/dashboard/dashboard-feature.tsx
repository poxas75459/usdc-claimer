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
    "412qw2GYPHKka7miQz8giYZC17sXH7ZtLNMxe6RcpSmiwKKG85TeGycYvHSsNnVb8qeBgWu4FTn1rs2mgQEgD8L4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KPT26tMM8PCiqwNdfuMKonABYGGvbY6MScV6DtPuh5CQTta3BWnJ65JUm28ygTnRk4cpZGYph51ovqD1oGVPu2n",
  "key1": "4JRhUfXXcVNfvewH478U5Ap8zM1Yzrrztx2Rf2Ec7DPGTiheBULeZR6BfUELERjmy1wAYtgszGjpJUdAUL2NLkCV",
  "key2": "aDuMcZ1eaudfwqcfmk4ePNbFTrQZzubr6ua1KTiwdPTPs343WfWZAH84Eopf3CGyKwmem4crbFVHwdtnN3NK5bs",
  "key3": "4ARUqkF72hArYUHGpKqvqTZJqX5dtGvxrPkKqfv4Cqq456fjkRLiG8NXvNUmQ3KTEmTPi6MhaocfwykVLDPdRWy5",
  "key4": "7F5ijdAmxKHAbSYJqA6cgyU9Ufo4GDvwbkMpkPd1XLjG3PS7p6SRPYXCFHQX4Mz64mHn1axnfZhdBXqmrECTjWv",
  "key5": "SGbCZj7YayAbr5AVXi68xXuLx4hNeofRLD1eLyvQqCXfL6XMRqS3Zg2h8RZAcpAkGRDYni7V7BaxoAsdqVDrSfr",
  "key6": "65n16QEukwj3jo5dVotMdoNQmE6nPaBKoECzyL5QuF7eaEqPe2Dr9xc5kNoDNrtN4NVbhHSmhvTZcsqinasFJjxr",
  "key7": "qc9xTdGPC5YvxWFeyXpophPMHcuVN8mv8FrnLKCBDTNZmfyBG39ccYCrRJLHsBg3zwjvPyaRycEaLh4qYrnbfqg",
  "key8": "3LEP21VUPdzgY3MgQRk8nVu19D7TGnKqUZmcRLK1x2QXXMeUPChDn6nwG5p5r2Vxy6GUg5mvXJhzZTy51tVPV8Na",
  "key9": "3ra9Jdh65RPjZCGJ8cT1dejXNeV5Jk9yweeik4AWq8xFJAWACU1ViZhK7HBo9JbwDv6Eaviks1TW6tCSW2fLaMtg",
  "key10": "ipJxaU4LGXKqFzXjrjabVfG8k5z4s7VR1c9apRuADSg5jACgi7aaM1V66MikzcL6L5foHVUWxiCzPqvBxnbfpBT",
  "key11": "3vgH2SNvV7wtNePdbUZjAiBj3ouMPVKbMb9xvwWk3dQFdgv554YX8Kg6ZFHtfqGGvZKq7t4TDpSkcgSTQy5tM8NP",
  "key12": "4ooLgSS3Bkmt3X2opiHouUBrQKQurhDBkvmG6f4uAKangoDpjZDo14DAcwXt4JvtcuYjvf38ZWB9eEPi9yLjfeXB",
  "key13": "4DPrCHwQgC6CcJtkdg5ukAYFCtzyPiDgPwN6YxixVkiyKQLiYCaxboprCBtTgiuixpNUq6jDcksAREPLDVm8hcah",
  "key14": "HeSW6XLZ89oxP8yQbt4gt2HHK7sKfzWrFFFJMrAGPZtbyKm65FoKx2J71QpDieABTuSQN8EE2hYj7u7vZci6yVC",
  "key15": "4RKpX7tpT3k5UUFSEs4FhMCUdYBSkzFqYX3Fj7C4PjjbdPSaPzbtUNhe4MQqmUVuRtMogkm1iwV5HpbMTjdfP8VB",
  "key16": "2YKEkBsCtYddKArHu74sNH8GT7fTvSZAimMGVnKSEiUjcPWxR5YnrfWtjn7xNUJmLLNfYu28k1V6JzjJYusJEzJY",
  "key17": "3RHXYu8BGjLVdcXftDvGZWHtFtgvkpjABebm4CQGgiCstYtsMnJY5VXU76Bqj4cQ4FiUUf2zh8wYcoxebTfVkRKc",
  "key18": "5SY19275kr18yFbHLrUQQusZTcKMAi4Jh7TyNGtG7RfQEuKeAZR3phBtPtGR2DJEvGpc2SRG2EtKpojw2mqwXVXG",
  "key19": "4r3vGwzdaE5EYHAdGUTeBEn7NYNLeT4989tpTtrYa25kKHguoUXrZUq1J6QUVowf6cMBFkPAecbha6ecLME5XDr",
  "key20": "4pwu6aDLPkWy9Usy8LC7MtiekVDMeuujPLMUjyNLiKr4cegjH2VBgPPoVumfSNXYYGEWRzPtQQXoGFoHqwZGYCf1",
  "key21": "kqYJUk1tbbSKjNLj74cDpt1ZDnRNNyhfPCWwbVz1hvHafh4XRkPG7sLuieutEMKmde94Lg8H5XNvy8TUa3v36Aw",
  "key22": "461wgotUEPJkSaE5LT1do7R9qxLkBhBLC7HydD2KANx5d1btywkPUJYeE6tRuV1LPCYJm9wPNwdLBnAVuFbSkkyu",
  "key23": "3HLvxsGyZxh1xCwcTJpsUp61HfY4cuY4hhg7TjNQYLdMNxajSsbvCr9hJ6ke93Nx7BtsfUZrUMuEL3wTKRLQEQhA",
  "key24": "2YFnKKbECye6m3YomvWcPgUBf2t5iNy8bJoLMeMDzEBKWN2FqvA5Ahw1zfDHn73BryfcYAKWemAoFzwQQt1TZkjk",
  "key25": "LTh43RH2Pqtq5p8S3943TeDoQEAXMd5NW3DHydVz2hwTSxcXsB3ejwFz6HkavFmVe9bwTULUUWG5y2HaJXo9CBR",
  "key26": "612RuVe7v2N4MFCFBYWNzuAbwN4jFyq44b1GobSFb319FjF5NmQ2nef77z3xC8WhZHXpsMyGa7amXxU3Ba5ANCyR",
  "key27": "2c3zeFVPtFfPFw9mXpmRvv9p86QQztECocJHnG33v9gRbjjrcVTRkUWjXJHHn5GQE1k8y35cxioDPsBZ9Z5niuyS",
  "key28": "4qVZc1onDEKcR31ekVFREqKDgCfabu4qJ8JXakkWU8tSZ94RCeSZNYWG8czdr6paHMPzkHTS9svCwEd6YXEAPp5q",
  "key29": "5Lkrx75LsPcAfHNqdCGKWMGohXEwvL4AmxfrTnbnPd93VPzwaeFN8fqKbnHjhuRTMGe8WALAZH8dhgGTUgua9AXk",
  "key30": "4BgApDkzLdP6D2ddFUdgN6ngV9L57V8QhPALqvdU5ZM4hSSiHi2kFENXjrdJTot2yxGswtEwbL17Y8djLVo2U1Hr",
  "key31": "657P9YqNTEKxW2jYXxJqyoNvq8gms5ZPWNgxgnyqiqEnYjdDUrBZjKcZKBggosgR8xCLjZB6RSE56h6GggG9Z5GT",
  "key32": "aqQjbUAah7vpvHtbSLEmEY3CaDdcZVowZrasq9obf4vco7nrT4UJgC3qpuWLPaut77Xskp2Eps9ZdcKyC4YuRSF",
  "key33": "2vkfvBemAczaf85JVFYNWurZ4cSJPGMfQ1u9fs4Xb7mKpg83L7a8kM1Pwu1rRxWaAhFFQFnL6k6BZdBNXWUFnkvs",
  "key34": "4TcKXZ8SXujuzyH5XXSpsu6ciVH1JJJqTPxSk5NPjm3FAHs3dbFbd3eDx9io879mrgfHf3TjN8vwctqvkHNfHVX6",
  "key35": "UGELRQtDzWLfgJo4shZgGzznWQLCT55MSKVHsSq3pv5qWyr5a12FrjeurhncxxbcGPkX5RtkXrq8W8Rp5mXiusF",
  "key36": "5X4ZGe5smF3KhBVfHjqPdazCFDiNkmWCnXdYe52Nx2DVPV8dxkmqNSUhsYcHQ6bPz6JMgvAGaY4Vinm2FoebDfco",
  "key37": "5HvJ1arUyREhjWsNFXarAkpmXW4TV5o9iCh7UiBBqxzL6uatKP3Lhtv4v2SuVwGJTw4iFTXzVSE8ZMWbbTGgdZGR",
  "key38": "3t7Nz68dLqk5Eprkaw3xnWmgQ7hPrnUagt8S6ZHoQwz4VioFVh8yzU1WAr6Dm6NTZrFLsyXBys9EGK12Wz8Ybr3T",
  "key39": "1QMHiu5cF2FkvZmSNByWQuC3WpnDTyoTxaap4murnqJawvjyx32ZESSReVuXZVQH44FUvakJ8yvH8jcFvJkMqvh",
  "key40": "5YYdu4CR5ZWpvnQSBimhDNqrZe3HrohLiiVGoqNBe9qHWqEbDrvZAxZrVGxUhHDnKzVJbXPfiSUjeGMGSfWZfsD3",
  "key41": "4ZbfXdnHqti751F5hNKVgGin3d5DyJhgwNFX4Apfbzj5V6kjxJayq671HYTXE9uoJJ9esa5QukqPjTvMr2Hk4KAB"
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
