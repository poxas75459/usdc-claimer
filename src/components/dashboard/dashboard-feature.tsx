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
    "39HefdSqr1L3ysYn5oXNeqsWKGJodbVmAMEwsn5Y31154yqbBrg77znc2Usm45VnnXteYXpUUhrWzVWw1r7XLnYh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39BLRvgeFftunznkCbKpcoMQjdXtqAEndtVpJJDHKUSmzA6EpVyYHGX18E1NNLLodTjobnyHBkyiEH7Lu73QTNNJ",
  "key1": "4PdMFzzNyKC6oC2E7wD828TzM1qVWQ3JGsPL4AMk9A6oacZ9mcHhEL1g1LcobPMBuPqtQWDMcpvj7PCPKJ4HJyKz",
  "key2": "4DxotnMQDL6eamtmxjrxPnd4QvzGkqTAqQrXEYgrjDGaz9PHeYgQsf8J8zNKXk6px8eNr7YjSCGm74ceLV728Kpm",
  "key3": "3ED1MGkqSMFJ64bD7oEaaB4uViCx513DVeJCxeARz3KQWpqqqNW9QjscZ1y5kCGFKDmQmH3Py9YZ1a84f14c7gqz",
  "key4": "2jaSioxYJ6kL5rAMT85i86PPtPt47vfRLp2Ch36KKq8AD1eWdad4BrRw8oRvdDwiZQLUnCY37xPYjoGkMgseDu74",
  "key5": "5y2XoLN4aU94jc1m71eTe85ZoToKZ9v58sj1F5oRcgehKS3uq1ky1qhkn42bu9AhjJHp6bY45gWjZDXFRm4Yun6F",
  "key6": "5WVUerQEwSbF1eyMzh8QNxpxUWrmUsUwwb47jxnHWhTSuZHrKL8jKZ9WprrC9Vqpshj9qDUTTFP5z2R47NQRXH2m",
  "key7": "FN3d8zBuTS4Gg4uqMoYDG7xnFsSeK9PFiz998HbC8TZf34RLEXsAcW391KEYFFsxGLV1jiUBkdN2ZmXyhActCm5",
  "key8": "5u8jdcwhtNRFmG6ZN3uKvKFhwbYtyVG1AiLhiD2eESh5oA2p8bJetc7x1VPTKFXpne8pCCho23xbV7HDD1LpaxMo",
  "key9": "4eNam3eV79YXCCcSgPk2uZAC7qXAkSNt8eb4ym2NCDVwHpEWav7qydzJ6y9WyXUMFnRSqoEr2nrTZh3emXAmiKki",
  "key10": "3VdFUQBDuBAT4hfs5sLMkTU8kF9SBJfKqYYRgUGY75TdrqgyfuB1rmNs4woSpqneQpTGSvsDc5FFj5ofCfYbr25T",
  "key11": "3myUzpDhahLnQKkaEkJ7vtPAsNGNUuqmK2e8pzivkahj8yMxH2wi31fWT53HJXEzndaua45XhLnAzgec7WWjNyoY",
  "key12": "2fh3XA1hXBG3zW1vdi2XdyVQKurYrW3dkkNKtRqpR2wug9rjjTpcXv86VRE7tALLWGMvWLyGdeHvHCG127c448oj",
  "key13": "2XVDeE7gLV4e38853AeezC7tDC7xchwxukknqKfjMxRD34bRipKSczxD87CLZdGySnBfPQno3QfEDFqBeC4VmrM4",
  "key14": "67GbdRNzw7xbVnDUyUimK37rYZjuqHj8WJbYiC8uYbhVCcCd9cbcGUucdd2PiYJgEEYPsK3B8MEo4NvCVpe53vBz",
  "key15": "3g1HysUQ4AjJ5pKcgSokremet5QbTw1vHHn9tems6rt81ma8BeEAJsY9649uuwJA2s79poYNybeFQVVPBQKskQ6w",
  "key16": "5TRJA764h1XF8J95hcM5ivytu23wrNfRjdsRZFk2vDVViRoN37jC9xijrs8C7UD93YAMLPBpMwMkaMqEm1ksdSoJ",
  "key17": "4dPQx5mFPtDC9m3We2y1QBKuGt2eXxcayDUmsfSP3HrTznpRqrGBAksNCirTZATD5qKiVBpEqUzKCYNFRe2QZ3j9",
  "key18": "55naSEp8Z1AAsFrJsteb12Rkyp68SC2em6rfkFdCyR15rFbY7FFv1LLspABxNF1iPr2X9M4pd347esFXSMskq8Ep",
  "key19": "4oz1iKvvL8AJ9GS3MpBWVZfVhtBgg4Q2vFDh4jhNprSTWGpNpWT4gWqF6UGLKcK3ur4K9NBjCUg6iSfrxDDQ37vH",
  "key20": "2gWrdqGZHuDS6vquspZhucqfeUcsZfyiFpcsSwyQmYvGWiFdiD5EEpUfy4ZxN9dFhGo9Dvu9jRBYAe18DqGHKi55",
  "key21": "5dDyZgeEJp4qTxNjdQTzirc4a8yj7qjycc2Wd8vgrjERazDjg7wgF5S3TSGyVkqep3TK3kxvxAoJnxRCzHMC68Th",
  "key22": "49zV6bVxBLxwR9CDNPBVtKscYTxzXhhW258MX7tyjyqEpCyrJUsyVs7FUqW9DdxKqhbZPx99uLi2Zh4Aw597X6fv",
  "key23": "VutHK8b4Z2qawwRKijpF24M4U17keWfj38DqcHhpCWiYwAeKyAK7XHiqfqKNHL18QQDgaLC6NMnGpGPWvCobT81",
  "key24": "29q6A8w2xAW2TDDKfMkdx1sbxsocqzDVmH5sntMYpawu9JfTkpvhyhZMKcqVnVZ4VQL9uX6516bqjbBN8y6Dkn3E",
  "key25": "23ygR3Vfmy6Pru8VLbJrKMcZQu6mg1oke4DWRhg5uuQ2SvVoT7Ub4eGJXsuMn9Mh37nAhoSVawuAjm1bAdLjvFvi",
  "key26": "stSdZ9R2Wrz3Px6kmcAJXyVquyNaFT1gDf5xDLLydBaPF9x4mnjWxUVqb6YNsonqpvMYECjPZfixRiJXT8VW38X",
  "key27": "4yFEDsfWN75ofGG1ELZ6CQvCRj1Jga76rV5882YBXkzmDoBUtt2ocwTFtZg6VsTbCJveCqiNdyL5q1rNPcVUgY7q",
  "key28": "2f9bSKaPnmUPoyPxe6e9j4zAGfxQGCrpigwmM4zc9zT9AYrHjt2JpTNJRmBfh3LB8j7L4dEdqdabU2kcxx86hPsn",
  "key29": "4SuYc84QYk45FU1MyRcSCfbRhgVP5CQVVXsVdBhs26jA4YgzqaC5X48V7AXBfzHnE6TFBbEFVvfU8eszX91b6KKz",
  "key30": "2jUeAxef9HjGP9qxzPVquXC86wFDUVyfL44dafZ3cPNxo4NSz1kwEv3jLBSbY6xKUQnbHmNVu8G4aJoqwx9rvuxs",
  "key31": "226u4acSVpcLiK6a1GV64vUbCw6ZfepveTVMy2DRRBseG2Uoyw91HAxtEbvr42Df3ac5dPCcft3fmPRaBjJ3yUBT",
  "key32": "4YQiiZ5nEWQJCY4ytqB8cH8Nao4qzxc9Ys2hn1zNjxn5deq9bVy2arH23atw6tRZp3cupBSWx3Z86mvsxsBvTBEp",
  "key33": "4117fq3TqaBFxynXN2NXgW1N9NNbbTGGvAQ4ikwtnmprxAcJMR6jAZHdU6AyaoqjkYorxs6gFqbVGhUbAGVBMx9B",
  "key34": "59kbJ7YfwnGjck9avcR7SDZ6tT3xKfaLMCkoj8oMjH7xejFDWxptSpNPqfB2u8ko21N174WRPXnRP1pnXWTQAA7W",
  "key35": "4zbdHH3pvGAfv3AxFfxCogpfTAWMWn2SxnFUJJ5JTAgWCHnvrU2fB7afBrVnHYkEDpwkZQgRXqHi1CgLdZKtxNhP",
  "key36": "543NbNmMWkDZ7aw81SyjXY8J3AJpNohKjke3GrUPbqy5jUVbJf7JtqhLJTyeiZfgXibCzBXAvExFoEwJhPPgeNuF",
  "key37": "3qphc7GVcYKAuRNXJiUFxVKuUxYtDp23r24FpKgnJ1HG9qJaeQYmCrL5t9EDUzfDp3GpyMN4q6eUPXgij1RrFjDL",
  "key38": "315MTxShFzfLakv5qHviRaKa3fsJktSQYerEDAW5njcVSBRH222QbPKRuiyHwNUkbrF4kqAzMS5Hh27C28AqeAR1",
  "key39": "66gkKJHvSLZE93PSUcAzow8HnmHYNSjGCjQEqMA1DcsWEbBcFtjK3srREfdXc9VHK3CmGH9WUB4HD1m4oLYeVDgT",
  "key40": "5fYcvBxH8nvL7dwXiSiTYzW4N2QKajyFJrVWVqdbGSAAu7RMsthSYnzCGPxC4No7naY6fVzsvUWEQqFy7Cm8QbJo",
  "key41": "3XYCSEyRorucyocFCrnNw35iNWhAfRE7fEooKBmhT38S9FApsxNxu43kq3urcL61bEWWTcGFN2wpCni2nSbdS3Y5",
  "key42": "4r9HKTX5f4ch8PDSZXkgF4djvEKLmgUtwyfFQy4nspRGG4PLaPBqy2FjgJAAbRa2y3MvoxCjYAh2eLDppAS2WrC8",
  "key43": "84qYz5hAWXj4RisGj11cvmBVm4GxYH6mBx17sttnjYnJyJ4N5qrpp3YgqZzcw7nVvX5wuqgGu7hvqN7R83jMXtQ"
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
