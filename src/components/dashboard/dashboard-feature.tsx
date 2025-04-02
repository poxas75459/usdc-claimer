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
    "5iszgPB2hpUYb7hZoVgieCyVPbA2jujs4aJAFTKWwX4tK2NqqwL9xHdfY1ubRFZ7fprHhMeCPXVHppsfvrpU6RtW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yCstqpF5KsBW3KuV57ALzoYHixA1XUKPJzPMBSazrjnCH4EUh7cy27fiSGAQD7nMuKVHgbarXQyGsjbZoNEnRtj",
  "key1": "Zji3EVmmVj5cJNsZjmX3qQvFoxc4vHYZNdyxZGJEY5U3B4HLAEDbDthNHzR4vR4vVfMW44eAnEpStnSYnHX5C1e",
  "key2": "5CxysXd6Csgmy5g9wPqtVQtwamnCd5LRrnKP7kgJqLfXUVdBLgAWzjibYh6xNioR5NxbDGW9L9fMwiCbXshf6AAJ",
  "key3": "2XVpjRNq6A6uSHbjXesaLRDXJi1zuVYvaoQXmnAjcehu9fvFzGc143D96TTQcMRSMv9YVAmcyzMMMCFEUqzZQ9sZ",
  "key4": "Mib7bK5jNAFaMtY8NbBfbfXHLgrofqJbyhZyLa4fH4Dxp8jmAWiqyZpw8487UUvcyHBBdFi8iFia6nsrTXRy1Gk",
  "key5": "67Z8VYuQQAVhrHyWQYGAqLrMZwFYp1aEk4fwN2nv8kV8rVC6Dk7azBcs8nG99qo8egrKVAf9Fmy9KUuMRMRHx5L3",
  "key6": "55UKX24ew5jLgCuWHG6cWyR5f2qeNc9TaG16oDp2rpTmK6MWBGsKBQ7zvhFA2nsYmTkyjagP54sQKrzDe8V7CsEe",
  "key7": "3LethHJLCadGpFbiyL7X7w8u4M9UpUgs9C8gKkr2Ux3wVPq8sJfxmAnPbu5NCCK4xaqpudwkM2gfdGoWjckBKqzZ",
  "key8": "4nYNorAMcQX3EbueJNfqf3dYq7juThhwuiPMLHBMs65dve94M8pJbGA6iDgSM1kjuZiCc6TuYTnQEWj4fGNkPjiB",
  "key9": "3uUg3KN8Z2Z96dSr3AHxoz4GWmZt1itFhtP2gssuLKWPoaMaWz47Y5MZnzLVPrLdkzacf4mJ2iwhcfU1SGg14fZ6",
  "key10": "3XuKhoqNkZPTen4nMkqGmUMs5UF3dd7DSbrNGrMMjs46pYbGc2YyudcXXVLJHVEXkagWZ6Yipys15wvgoNwJvo9N",
  "key11": "48ckaUyWPr3w9tqLY56sRKNdnjgDyQfXaS1qHZGTkYquU8RC2wtmv9ugX8ptKCTuM9TUXagrKntmeUmToHZoFNMy",
  "key12": "3guYhWtMHnS8zzvvPs47e2ZhRkH64mFyTUwahj9hgfyT738uPFWDj3aza2njci6gdKe4LwvHFiHYhRowUFvaRjvY",
  "key13": "2kuWKJaHoXUzSxWc8AXYvdwxQk1m1giUeqogRbUeyCVnnGHvYtA1RNe3NAVFDXkoThDZ1eshsCDVHivRGbsmtu6A",
  "key14": "5bDoaP7KBAyn53zvTaq45zZxB8mxt7c5eRqqEop1MBmQdk6rhrigFJvDbjdRvEX28vzAdMH9ifRmV4cfAuNhuwk2",
  "key15": "3eFmrQg2a8Bm9iJmQunjA94YBjWtkseiJN8Ze1vJqhbbB6BRMAgMnMoCCV3ii1SseqPxt9WJL46Mf2x57AvHKTVv",
  "key16": "672xUt4qkUNH8BU4BNiFjxLy1pyas4XNmxDEyC1XfUqvQaBAjNS313AVTxrCNseV8YGfqWF7wrDddEeRGwkFReyc",
  "key17": "317Uf6KL5qRn1NkGwuDcaEZPHFsDAgfF3L7aBm4NJT5aE178Go5C866F8ion7dAXokZcSKgfuNgqwbaUUhwKH283",
  "key18": "cNZwn3TUvoKcpcsuDjkuvFjfS6MKPkrJtrVhcCYpMRYoi87U5SzvEwUKkLMgFjoC5KYN9oPUjVU8q9jXEe3sZvH",
  "key19": "3kmBEMVkLARsGm6zg4myXbzzByFNBPFhCQqbWUU7RQiSvdVcwhcFYMhgkx5FEnyT8AzyqQkE4fUph3TrFRpFPWUN",
  "key20": "4rBD36Q7Lz2vZUbUmNApFyRbranhwdjh4DDZuSQeJ8ThKhdBTYDyXrhQMxWgHookAJj74vTuaU9vmuuhpy42BBuJ",
  "key21": "3vfCjGGEngXSS7EZCMR4jgUm2LZr5tTLrLtXoffLkBGGcM91NMdegU8AzYhpLJeJxuZskhLsgDUuwf9Vepe8SmLf",
  "key22": "36qZ5cCrL43ts7K8CGxZuPvnktT8BsM8gXN86kcCsQnHJ6u2iz829AkMahX7gs1LmoRdWhH48boCtajrRGhEyYiE",
  "key23": "5LdUZVVLJA1cC4SXQeHem8rLrPNtFGWzRoyzssFZrBJU3PZew1CBEwg67F7F1cCgw8P4juUcipVAF5HdDmzCEx74",
  "key24": "4JHkTknhaBW17fcqvMyH45JDR76Z1ntycEJAsqJ2oJLkRReQRAXp1BZLGLird1vtZDFfm7HpBpmX8ciquwYZhyrQ",
  "key25": "5NXPCkcF6AfjE7AxQDtBNF7CBCDSYqrdviBBM8pGSP6Vm5mRvSHTBHDXvBApEnsy5HdEGnJ2JqtpWm9jsHK7aYx9",
  "key26": "38jAz3y32Wt4x3JojdVKUveK6F3RPWxykt58hrTuTynGPEUeTM3MZuGsBreFEVNYkeyF4qkNkqfZtAoRuLQ5fNma",
  "key27": "5YZzEgo5VkXFRwUEjHL28K2eux5jerxmr7Gz36K7qC13AUg29VTfwPz3UC8NRBPLWu3Auw68orvWsW2jqNptGKjv",
  "key28": "671ZeAqTYPd2Y3ZiNogTxwX1pB1kVzPhyxxNomv5Fdd1n3PLziKxWy8rDKwwuZcYG8bSKcwU5iXEvzYRtUcY78xu",
  "key29": "jdLe2VpsDv5UAxFFwq86ioLyhzE3QBZM9Ke4hbGSQ5sXXA5wJboMDu2MPrxYc9bNH4L6U3RAyLVYjePEzfNK9Ls",
  "key30": "3zXEfzsFr4kEGtVQZrUV1sZj8EVLBf6P6CdE5RfFz3kjuN6ZQdpfre6UTGR2JoJs44Kaner6F2t9U1qxjvCYuUGu",
  "key31": "JV3r8KegzFaceFPEkB5UXopS9MzFBMdetcPxxXZwcWD7LtVpqrc1rH1r6JBmrptwwbAc2KatoX9Tsd7UefdeKWo",
  "key32": "4q3eqdUrhzCBT37gK2ZgZWXZETxeR9eA6ghk2FdAeRvTuA6JXJayRKP64GAu99kM6gQtpPPXbujZr79qHTRRA6N4",
  "key33": "41rxxJ2Mdmv41rc4FzQNW1f3gSVaMQzM9HVM4z7pGbjpob7wj3M5S7vZeMDUd8TtRz7hPmsfwJ3o6tu3PxgMAP3s",
  "key34": "TG6zgeU5vizLx8yrJdeSvNx8WvWSegpDrEeDJBW7sdzTdQTCvBn6s3ekLnGaWxkyQAVSd1nFQdjj5Hk6BMPSe26",
  "key35": "3NGCkM3pG4rg99Hf66AhsayPCgsJhNLz1cL6tDooYSXHTTrQ9Y5JyuE1CfSun1QnBa1Fy7As4mAb7bfm1MyyXMnx",
  "key36": "2iRigUdokqdekpUnEdtVLRtHebrdoNRuQvybMyu48ZCYscr3fLgD6cV8QUHMRr1nYTVhM9t5Ag7t1Ff1PzJghp1j",
  "key37": "4TpzoPPsMtGR8n4rssefxFSGZG5nKkLyjZyJ4y7kvnDGx6oUMXfAdeDJUEBj322R8DYshGPN72jdyKfVutEtP9q3",
  "key38": "5e5b3DcPgsN49YtoTohg1VYHdmcRGHytbQVzq4Ufaf5RpR4CJ9ahEyMnq1SWY4mYfP15UC7e3XoBag3mxcbc4dAL",
  "key39": "2qrQuhbKfReo9xMdcqHusp69DgF2igv16PpqVy22M7fVqHxwdcxXuioeWKRnEb6pcvxUa2neqDH9YrpVX7MTWdHg",
  "key40": "2n2eD7b5MR3hQRPSHaHpJZvp5WBvJZ8rjw89V6TDczpokhbGbGStEFrwvp3hVRtxesn261sHqSVgxmfiWSm8zZ6V"
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
