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
    "2arNYYq8x5DEXjsUtUbqBCkVhDqRfXbm6HMfg9ajdfFUDGPhnDGJLFwfdCBUYwVTsmjuu9sLmuee2feXiwaYkxgr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PFanTALoooxnuyZBYidpecTmgJvQBKe8wmZoHsj6mfA1RRoe5TWz13GRijrEipD2ZDCvYvzmKAigBErDYnHoFns",
  "key1": "56wn2coLSGbczSjhXsWHM3qDs8kc5NWZXSPK35hSo1JWELcPAcumJPwL6R2RY6mzzg2vUv1BbwXZs5o3S3Ne4uY1",
  "key2": "66CskDt3UjyeoqgwxjqVW6P6WyCvd77rHNFMfvD7fAvPV6KSgdajWHWsupZN1CN7v74xikrqTwSZ9yukMydVTanS",
  "key3": "2wqccKxhfeunrCZBdJ3441Qadm7Ha8EZrETMSAUoRnDvGdWWV9Rdhf3vaj1Y1ETBginP6c2vmnc86fgGKdEU3EU3",
  "key4": "4q64mjHTs4VFFqitP96KgJDVjTTcHhF59oGS6n3xXmdPDy5q7ivmqKsLiJjDJeHDPEGh5vCYy6AQ41ZLGEQEDsa6",
  "key5": "58UfmAmZxyxxa2Luxa13vRWtfpeJ7Kds6nJ6MBAP2SSqwXGhJY2vYwJHoZREEXTkZgANoCfGGQk5Dnay48TnUdvU",
  "key6": "4A5unktmGTP4ZD9i1KAeRtmXFyEEueNWVSUkn6YGZwr6FeETE3gQ1g9DwgNkvj8zK47CAv4br4ToecoMip11ifuA",
  "key7": "5hU9JqpjvaqVgXVZDAMP2MEBnAQMK1Pcc8oxrNioGJSJ6oJuLZDiRN6VMd5qhRymyFpuWCbTcLjKohkF9DhcTTg5",
  "key8": "2wGGjfiyCgq5Sr2ZpHKhSXTsvqW8hkJSPxyENacGcCmeEBktDcY2zjwTTKb5aFcRpvsHs9hbhPLFES4zJGtXdVec",
  "key9": "29GS5SMRjw9YcHg5g5Z3pF7BfDcNnxJzr5goSoWXjz9PWS6h6j7fVQZR11WCsjgPJBLwMFafCHKvSmMTk1NBD1o1",
  "key10": "5WrwRmp66RHkabk5JnhPrHf28TcihFTQvGmmfjwx8ecqJrxjkBYSd2EDRNPJT1L5pGWXhoFNXJnLDskMKw39zmdT",
  "key11": "Z1wEMAaveAQG9237V6BZ7pWRbujCyqmtHkshVSEyMWncshAC5Mf6sADC2977e2jpuP9ZUFvEf5c9VCj3VU4obTn",
  "key12": "CW9gbSQt3GX4kSF7N5JPnFhnue8Mvhf8rtvy443dNXnKCS34ZPiPchNBba2cX6tFw7PHsh7rsPRfSMcErNtrmvR",
  "key13": "56sxgFrYsCxMYb1zFsYAD1jyXc5wpaELF5eABf8YXkcYDeqWENEeHRy9LVCgQkSG5SwGeJd3KYcMXSNR4hQZ5Xxa",
  "key14": "5HTrxbuqUzAVqUjMX7ibp48spQ982Nu4v5d7WSAogW1hNQQuRrn44KrqGSeMb8yuf2r4VEBBWSKBMJ4cfTq9fRCU",
  "key15": "3wua2mFFw9QeVQEUQ1y4zc5ZG1zLcPcpLUaKPhv1NzGLJ3ZeoEaKGrGyJfHw7igCxVi97qSiAGBNAuYzcL3n9Zco",
  "key16": "53Pt2Lhqi13mxvRRyhHYk6UQqEzbg2DEQw9ZT5K213gPNocnT2t39tQVjPFohJAARvcpMJqj7tnXz5Fngb2poJmA",
  "key17": "4diCb4xdo8bzX5nVzUnDp38XQqbA369NDLburAota1kDs9KdTUpekUmkeSZP9MFyBhPntmeeNp63tZWJ92gESyEp",
  "key18": "57E7gxdHFikS7HFLbULfMvJKAVq2LZdjfhsaRdBmyrFuJiFGzgrNPSrJaotJ8NNqcfNRwmbh3QY1eTnGCJnAv5LY",
  "key19": "28YHZ62cNzX9zEWyrTDkU4mh1cnN5FBk4oBHcB6Dxhx4fL1CrCxmv8r7ewR6QxbRvUP7s5F6dKkaCLKtkriwxnLz",
  "key20": "hJ8Q37Y7uVAJ4uCaeTsvoU4yXSvRF7g8nfhQxhr6yeQSJjCJMWUAVJxPZQbqenvRst1YmzkopN82SxE8JvohhFF",
  "key21": "2hb47zXh7URRV3WYrALf7VdXLQBVWi8TomLaju2i3NdLKq9AaZLZnUcjxxS3kwqsBwAVQkY51rotw6bsCwqXiTYV",
  "key22": "3XfNbiqeLsfMugdxqJUPh7zU6vckQL4UZsqee7PMGufs9ijqQJKHB2VzFDMJQKkVSSCjJAfFKFHitp6EoXue8Aw7",
  "key23": "4SujF46n2JitFLdN46m26k7pwW4ybJcuP3hZ2JxYnBNdWqZHDcR2ve85p8oHHzeq5u11kr45AseWe2k7mTvxzgyi",
  "key24": "5QiyxwcR8FpMVRJPNAMzDuR4t9DeUcCNHY75gEEwRETXvDTdJRjjNgL2DUqL5yYLVKbAACSqPLAdvmEvmWvEGEPk",
  "key25": "55KZC6pmVNVCEXWTtv4zz6aXwc9h4xK6HiU6HFv7kkKE1RkoZMY5SQY5Sy4V4dkDZQLopUqPxSSL49SRf8veJ5oR",
  "key26": "sWppzvot5EajP1iNCp1V1qoRuVfdDujeFXqCj8zumLUhf2e4HFai7YozkGV47W3wPon7AfWHrtcPbmWyv7R53Bh",
  "key27": "59T8Y94yusBMSVvaswknTBrWWsWaA3JcKCWT8EM6uSeN86MgURNZ9cWsnVWntaSvqpNstKBb8HpbAxQztQces8tf",
  "key28": "121Xb7H3DeDwKGTvGd8o63s2fdgQT9J8u94mpaCbnWj1qYuay5B91TCne3nz9eFs5Q5LBhhkpc8DEkLnTP5X78ff",
  "key29": "3tVb9FC7mutNzVotiUEuGHZx2ePdSUbjTiwC1uaMZesEE3JiJ35Gq5c5D8upYVHYBpYpcTJbykvWu17dxCVAK3Gp",
  "key30": "3AJYfckVA6DJbA6ehAnonTnExKCxoMAiEmdh6rN8DsdT2A2RjjqnMU1hvyUpTH7R83bCRAt3gH2hRiiximeeTQib",
  "key31": "4dfg9sVMCvbFgB2CCsuevAyUJiJ1rrJxnpV1ratnyQZ4dH86okYrZ28bDrFJyX8kWh6mAJyLFy8cT49dGyNfHJij",
  "key32": "3Mh8QfsycZb7bAUeP5tR9hrQCNqPySSqtzJdXkKNtY8wUZyvv7Rn72KLsYfNXuSAe1VX7T6vQ7wXZahj4g7zEPtV",
  "key33": "3C1y4vHHr8gvFuuoNbJeSVEYbVRLLzMy1CkAGRTPiKfDpZ2Vm272qicw7qFUWgAjmWME6Sc2FwfUdaFhJmMn9jnW",
  "key34": "5mPHxEFPT28AaF71kzqLpqAWzmR3bddoFvc5ASYP3Ts8vRKpJnNrGJGzUP4TJBhALu9mQixzzmyfbpjDvUfA5413",
  "key35": "WDTKsp9PwTbWvkkrdYyWvrvQqZK9BAA5Rmq6HjXBMYpGF5adJEFxDLZG8YjMHn7F9XQZoYYP4MMr9Q9pXFMJ7ji",
  "key36": "3JEUJYM4r55Cm4CXSLnatyDJpEkopdNK7QPnCrQ148Rjh3vkjpXV14idyW6mzgfBqPcLpbK9SmgsDfTeeYkJ5DMw",
  "key37": "3ZFEqegcszKbrRybdVdT4XdnqHu2aWDBYkNyifXx5Tqj5Zq2i5TL5oQ1iVwFRu7Va1yweMQRPcE6PyjXp7LsE7ek",
  "key38": "eFLqVCsf3KUZ3vHXUzK8NC6FjUQSyoN1rYfVLeCR5a2uDJffdsTKajvKgXnUSPT986Jv75j3ZUmMKRb2C8dUPiW",
  "key39": "vcABxUPTWghgzMMyzAfYTsV3KLehqbwGts7xF4QY1swonbZ7XBvyBzJ88pdHPCZCzg7f3bH46KcKmHaKGyfLiD6",
  "key40": "xzFpYTRqhC4XMRozr2rHtuBeKkoPDs1dM2ku4GEjG9XvpSLjgVBRiWckQL576u1MWfN789LJGoUaavm4ZtJbyD7",
  "key41": "R43uGu4mV8jVGpYnFYyWzFaoyRiCbDhhKyKu7Z8EzwKAsCmvcybG9veREqHNxF7cGu2nRCrRURdT5F2sroPPqib"
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
