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
    "3xtdHfKBU5p9QxT44Afr3Q1QAh34u7LFR3D4Hf1xWgJARAQojWF93V2PC2JKxBSB68epum6hYMsXvprFdDfJ1x5A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ogC8yKVKbRoVhGympiky1pompp6ktzt2gWjd7f2VQMH9DuHR4Y7uUsoFNXkvEFcYV2VH5snriCAjDCkBJF2tPDt",
  "key1": "3XAdpKC7eXn5Np2bMEuUZQTCykphjQjcYyv2947uBSzuu6wqeRXaZzWXTqSnJKLMU725KeqmY6naLmsTxPj4QpMQ",
  "key2": "4wwFGmupCurZrmhNdXGADrudBNmcvB5ZA5hGqevTcKFTfebEMXPwM4WtMhPQFBoRbchMu6F6qdM8GbZderB5ZgRJ",
  "key3": "3DGmAoApxRA1YsMnX8H2AjuuNgNeiBKHc43vsPYJUHDLpd8tZePz7YN81ErZKuzaSS46mDPLwFar2majz9nMjsJg",
  "key4": "BgxsjWGZoch2wVkKYySZekodtfyZCkPZn4TmXPge5vMKRZVikpwYax2bDsNagsCYezLgLEmnxn7YFvKqsKFuFmZ",
  "key5": "5ZSCeU3xySHkjSJDTDF46AYUi2ojcZuskX3iG6wwxsZTFFx3R6g8dApGujsbjTuKMXPRR4qR57dyRL1crZ7BPMJT",
  "key6": "59DMU1SQvKWX6WrHdJKYgjB8UcrGHTnsBHaNpKGyH26P9F2JiidKp4fVvZg6sGyWAKbkVMFzHE5jQoRE2AJxNPpb",
  "key7": "2xqPgcJEmgaZKnRVf3MFLSqWVaVxgGZ3gYWJCxCoGKTFHJPpnPYbxZPpigm5QtukDpXMETkuEnQSMfA7dKphPCEh",
  "key8": "3arFb2Gz6uHE2Y1GwtgUvjr1ceVD5cjX9A7KjdwcUk5Wo4q1frp6KH9Nu31gwey13TXzYDmF54ajCW9SaSdJVNwS",
  "key9": "55coFN3RWLB2g4F5fQKm1goqJ3wUaWL7ywAax3y6jZjDwWUsKLmpyHkSfxtxGoABA577iJY3TVJREEUH2DSjEwtv",
  "key10": "hYH1oxX5RgeUyh7Bj9XWCbX5EfpxArwVts29ADuyysWxJenbkbJXDhpuRDzYAgRDRN6XfRUkSMDbNAUCDUCig67",
  "key11": "gCKUimSPYXt7Z1rQ2qgYcZYn7fHVBsdnLfQBfk7itPFQHBvLDVxCXtPgQXdq8yZAZuqqi8M2PEhGhF8nY6yeHgc",
  "key12": "RyQM1Qh2BqvJkJf6tSct53ZQA1x2h46qHEbY6xMbNtbCW5iGyC8FA32Lu1xNm4L7Gsu5znHc49TXEaCU9NXugsB",
  "key13": "2SkA28TLqAcD1m4xRW74qQpHMmwgra8xvGSDAHCXo8isMNrzoT7GcuigRHzsiQGv6gpPu62iHMj2oJM82AcRu8mC",
  "key14": "4a9NaNF5bjioC7ePWnWZVTsR6Wdn3bnnVW7qaFUFeu4vihtijTr89seHQW5t5aa3s7XqMbrcbt3irEKio3cZqoNm",
  "key15": "m8ZzpcT3xGBzeCjosUvteeUDjBuwgrADUbVH65KFjb5qE6ehF78HbPSG1JkoQqSrSWkNAxD7CEu8xMaWXYDv5dN",
  "key16": "Ua2wJ4kA7brQXcdAiv6ZfNqbkPBUNCkThfuNCfZWY5w4URUow4cNpX3MMmALK1RNZP4rxg3FQCv5SSnGhLvxLwk",
  "key17": "2gCVHM5K5cFxzPCVcwrfTZb7mdBTZ2hF21uL49J3ifAtzcp3zETUXFrrV4a4DQnhJGNbhkDhoLdodcMkharE9UEW",
  "key18": "3Gz2jJCJeyfnmWwrQNEMKeC9thE2YJZGK3A8JUZ9iDsq66yYxh5jPGkwnu4qmZnfF21meVDjBt1D7kLEnLbfo72n",
  "key19": "AkQnCCnsBQkENd82EQAayA7UyCV7rxeCft7HsVs9gi3Sr3YLnpEmy7tVHvJC4ztKNuCMU6vNcdsQArHsjYUoy4b",
  "key20": "48vDsM2ZYALDhS2KG11TqjpLkCiE4RLxeYzxQSvvmYZg5gmQq3H1PYP2yHz3WeFTJo4PLYhKnKTsZTiKArZxEpZR",
  "key21": "4gK1MpeAoLduR8s47HN3M3Vd4vsRzV6p99kxeJboYj8toS8yZDjWXVaqX6nRSuP7YvWfcTnufTRDq97Kb5M5k7UR",
  "key22": "3xxSsCM15uDzbmM6kDD6Tn7aaS7Kt4ZQNxUbXjy5tM2M28wAgCxu6TVTboCkYasvzvUJ6vxMkKVctpqyFwdY9Y5W",
  "key23": "mxqF4wBkE8EbqeRok66xKWt1PGEER3gyQqricPjYgoiPCpfJtARESWBUTA33KZSjY3jk6Tv264HEr8wSC7GjDB8",
  "key24": "3uBDXwgM9K7P19CtU14tbJY444EdiRqG3zcKi6rCNP1xkKPmicfZ8976PbJi7TmGTtxq5CbidwxDcrL9BkBcAfni",
  "key25": "Jp92FKDKE5r86oQP787qQFtntUGC9LJeV9ntfAL2tkaR9PkPR1Eb19XKYjaBq6nB8rZqhxSVhXi65u1pP9DFrog",
  "key26": "21omaG7c1NAA6y3gxU8adSQuuCVbzAg2NPePY2rXxVrYNxNVCYPUZvMRP6RpSWbeEVkdakEY9MS1QydW8Af9q1Yt",
  "key27": "5zUWVncXcSPDEnLZB6BghAZ1A6N8hu9eZ43RRtyxsr3RYN5iPoTj38jhSh3twVULVcHz6d52uaFcbhTZwxCeo93z",
  "key28": "RQk3guuAgwFty77XViZVc72NgNxf1rELnnRzBShx5JFQNF9ophg6RFk786FAW1zsgZ8BvRsoD1sKfHSrmdfVAFE",
  "key29": "byCYWGsfidGPoEkghogEjxX5Vpam5HyTNtwvYeBd4qZNrChrF6mrKDksYNRAJE4xusMNp5q2hcot2LjHC9KTgTj",
  "key30": "589iMM2w5An5fc9Po6Tnu8wTft4xN4LBieTPFsiZMNz7Y53cRB5NMg9UEG42BUub1zHJdEs8pVN8sxtJArJ9qXik",
  "key31": "3h3BwNhtn94nrz5tcE8fXW3zfgv4xm1TqH3ZSWRhwJsHRUqACkbZtxQRWpxKc2cUoaTyTfe1jFBip5CPdJnVL7La",
  "key32": "NjH5y8UvZkJUoGDfnVzHRyMJtFQsHRBkZcWkhb7e4e44TeXaknauo1d1pNEMsHXdWspgonRN1xuJJF25oPtKJCZ",
  "key33": "312NHUrPaTgFG4rYJuGv7XuxeTSEeFLR2XG974bv94QHYHpoF2oEEAr5VZ4tADbEF811UyqPm4WQmJa9ZKn9e3Ht",
  "key34": "2AXcqCFtsA6VKReriJ9RsGTsYoBdqrteGw5EhMb5CvvV81jyGkhZA5bahZq38A42qED3TDYThKssYMnLyFS1tDb5",
  "key35": "2P2vY7hoeHXw1dZv2pQR4W7oqntg74izKoaFnSMdE7Y9d1585HxgmgtDJLTocABFELonT6HiCiFZmW9mM2smXBRs",
  "key36": "5roiMnVkAKSbh51qFwPsQxHnwfWKdMC5CB4sStTcy21jywDZrJaJfc4vAZKsUPYUS2mU7PdEWHbL7YbxHs9EpRJy",
  "key37": "2qMHNo2zupxme3gGmpNycDJkFMD916SBFSMeduoF6142tCddeXHp12JtDiuZQpGkxP9qipJggudHfAXyiDbAah9r",
  "key38": "3BwZeG2Epke9N2nwfEgTtrreK76JTjYMjQbqBxQNaKhcuk79PFGhbYeY8LAgRYzgxJjJZh2wDwcW4LcujYEQMgxJ",
  "key39": "UgGUjeK5dMmprDcwqjV1BtKT5GFipfhdTFMxdpu8wJ2FwDMSvMb8XZn5botVdkAaJFWcGPNtNUv6rqXBnNaNSMY",
  "key40": "QmMbcJy1JUucuZjPGihicVUP5pwoXxbfjqo2DQACujVDtwWye8J8G6y8U4HhuhHrTKGgm5nrNYQUExBmxkbNwLt",
  "key41": "bhbedw9xLSWhFyNXFWpMszFAogQxDVLiLsXHETPyWTG3sRg5He87r85NcYFXGc72Ug8qpES9VCcppmQTXLtGSKT",
  "key42": "2o643AfLNKQEkj1SkxMHsxw67uBJJ6NdFaTqmwcEbp1xtbAoXNGq6TfEJYX99oqjbRPcdBNwYdiPidMfnaJ4r4KE"
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
