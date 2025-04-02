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
    "26BW5LRWj6hgQstfuSA7wT9zgUqBACJRMHmhfPUCeKs8PvGpi8HMyc6S7a4nDY7pRe94LcAFKCUSDLaynK1KmPwV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41qB7TvEiTsyJcKda9sTv9QGk9bRrRRsThJkJt8TPqVCdsEQk6cmXLVsB11GjgtYJv1YGf5QmC2vJqFWKdanrvh7",
  "key1": "2BRapUGVueXMtE7PSyoZrbuHYkk6XnFTCAwbpAUSiuj8qYnycEYrEE3T5K9q1ua9RusiMNUEBcG1Cv9FTcSiEALK",
  "key2": "2j962eDXajZEzS49ZwRjCs5YquyaDo2xBNE56tUKXZSs5VHbMo6i3Vs1296okyamu4bNXdhebVJWHZ1qti7WxoQd",
  "key3": "5bQALXiJHKDyuYfu3p3Xn8MCRHmh4BVejwsnruBMpBxWA5SXdui1CA5sXRCbDUHB6NMqG8SoUWonUd9t5pMPPVDi",
  "key4": "3jWs2WJyGijn6TnVepBFY8bnvjmJrsUTE57rx96FJvcRCvgKHBXn2WtxLuJvyweE7TPtymnQFwcXeYQnXTBkip7T",
  "key5": "5eo9Yw49CJRXRwt4iWLRWKH2NdHv54bLjEBKNfYYYBVv5dvbHRKBBAQwoP9hugdtEHdw9xc4RhFCGSzvCq77LBmK",
  "key6": "4Ft7HAuQtjj93QUEiRL6SYsW698KxAaCmfVTLiTBKMtzsfXCSmJtwnpB4M4x8cgyDVyqKXotcyqjvDRD8PYi7XRQ",
  "key7": "s8caxwYAFzkYohXL4Y9m32LdwcxbpfHHGRkE7G7G8dyfBqozJYFAte5Z59vFQTAcC6hLnosxy6TV3T9fJ7N1mUu",
  "key8": "3mrBQi9SbnRyWK4FY8sEeU87c5m2FH7BDER6ZQ861jZdcDDSj77u1yMPbHVoZ1ZbomTGomFfR1Tq9qNFPiBfL4jo",
  "key9": "5whzZze3Drzx9czyyALQ4uT3uTPysLChuuxBqqsTaRHtc1A4QhQQeKG6B42n1vZyA5BUG4b27CSkByWAwHZN1Ck2",
  "key10": "4HEfHCxtvpSnu2ossy8XgspNkBuMBxp18HKu7vQD1ZsaXaN8fVVPn4jBp8vRRCdHLVbhZzo48Y1RUPzcWSEjENTw",
  "key11": "3BPynJ1axrH7spH8qm4YV9anfrzjXSEzvgEj6cVYou28qY52kStGuKPfm8ftamnMazujPHEd8XY95EYtBjeBx2od",
  "key12": "5mpUEAa6yeBzAMcY4s1M3opJtPfztWZfr9Rt4PmTvS7iLCkv7qv7dkdNhhxEL2ffGTBTFs4vSrW5tKwZ1gP66Mqo",
  "key13": "2zdiQmb7L7ZcEpYH73zGh6CGspnbUePBARg6rTCvyxdZ4Mf7EVxvF6jvn66QP42acDmjdeMJXFSfy25mAWhGKbs",
  "key14": "PFf9oZs5n73AoP9Ab5nvWxLMmSPjQxEES7NeCsjaUsANtcn3y7yZkQFZPZLKoFmG57f5BoxXyRPFMUyDzmLn8u7",
  "key15": "4fmA7CL2Y2Mgqz5Q1tvbscoB4ppVYERvrV4XvuN2g8ZmVASB9YGjV5rTwJd5xg7KuXTQ3SnBARhEp2GpBWDMrJft",
  "key16": "4QQi2GPE1E1aGqNXYptER3jAGMPpuTqtkroDwMUxe1iZyjGSiBx2ob6tpwgGosJLBPBspXz4iDUrg93SC9REyHYx",
  "key17": "4VS8eWiLVkyybkUHJGUp4ENehJ3kPbth7DyrUaDqBoVJLo3W3rRuV9ev8JAxxK7KiSsTdxhZQhLCwqkhkC6zoZiQ",
  "key18": "54vCPEujctuMoPX1dPKKmUf1iRE1Nj1XUYjveS8vhdRnccFexgjoADVaRjtBGanTBHfkX7bt1992U1E5WMBkRpiJ",
  "key19": "2Q5q4waBdb7c6rvGNAq7gBVB5H9AQ51GJpf9erYvy8uMaQkWMYKoMHDyTaMYoQeJKriKSQfNJZYbcoAdY8ZjVoTz",
  "key20": "h5jQ2gJCZsX5YygDNQp3TqarZAKN9sLVUFKTcYHv3aP9mRYSWrKv6G8UGprY3QTWcMoTUFf6quYdgfTia93gSm1",
  "key21": "4qJGCGdUjFTp399V8jsHzEMkh9sd3gaHpRYG6gdPPfdDytV8yECaLZNDYtKrVHiyq8UUskmZJ7NgMjkcDu4ufEw4",
  "key22": "2SYobo7JPgCTPVM8Bcpz4rJV6VjH2DPjwvRJHuoJutsRMAyZd5zQ7kfiFc66nyqjJHoUVABSacEyQT7fnsp61tdN",
  "key23": "5cyDaZqifa71yU9tbqmZXacAs7tdw7PvKmyjSNScDPTAjfXpbVrjyJy5zyfrzLx17rcm5zZ97AtUvKZx8PXqR8fa",
  "key24": "4FntJtKhrp5iqZ1MyC5sJT9TjsfKHkmnd5Lco4B76EjPqdh3PxXi8pLs26sTUjoc8WdNPRfLmrkx3U8VYWJutzjQ",
  "key25": "5rxzRViVqYXSyaDkNXb8HGQ55c73yz2Ss24WpR274mimWC91V7fdqjQTi1SQV1PqcJmfoKxckVkVUnH9WVUTGHjZ",
  "key26": "5RJ4Kkyb1ykW1fXK7qRHe7vxNW1m85HRniUi13vtjTLxD6HApVEUdcRoXLjuueArTbjrKTMBWbwnAjcqFbCQVGbz",
  "key27": "5o1kys6RDi3SH5J66JZr9yx6M6DPpX9LiG4rrYgSdp6TnsLmyqpXiynDqnXd1jk8wxG3Z8phAdW2L65PWdp7VYd6",
  "key28": "s1rFaFNaYrHoRbSyMGE2dRXHfL2sCUvj3VB7VYWZfmuz4b1gkTSWXCBAgNmwRgBRV7pjQXcBKgBA1NG4Lf8iGcm",
  "key29": "66ajea6hanpajRES8t25dBzV8WwHNpKoMTYHL4NG2iWBKB5DukKNaCHApx1r8zRBZuzpSHZate489DkqMsg3uCW6",
  "key30": "2Hbexwji9aiZBu2ZgJq7oPtPeV9Xmh2SMoTrpAAkCPdGRK9sUsP3s94SVpwgBskBjgCcq25YtXCMA1Ndm1sXQSLz",
  "key31": "5RG63rUFLqi3yj6shoAiebefyKzXzepg49y71FsD9tCws9V78JJgq272AwRvW5m4x844wmVmfBvdQGvJFNEmaVxB",
  "key32": "5btw1ZHWV5F8UeJinTNw9QsLFwsvvqn3UR8fiQALTW9QP1HdpMznfWXaFyHPQmZMqY36gLxGr6jwi3kmJip14Kk4",
  "key33": "4otDnHzhbD2rom9EvSfJVP81yPx92yAuest3V1VaTzbiHfLgBHGQQdktg9tKb84sfqsMp15E8q5PDAoQ5wtG9fD7"
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
