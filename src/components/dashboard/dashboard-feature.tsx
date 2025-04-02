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
    "31ysw5wp3v4bTBENjgpd3sc96CN8cRdubuJjJEwRERcjSjU5etiLinHL3e2HxMPFf5tCqDg7fBgdjgfSqVS489cr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tdDES98hgDt9rSWkE5d34wjuN3277J1eoJdeeuWaKFibGBL89FUZMmTTGhNPMLmbJYpzzHuXX71jc3duiPiiXix",
  "key1": "3ddmqGXBE3vxP14MbeSC1ev2WubikP6YjjkcJ8SG4mPV35pFDdnznMH12B7svcmz7jWoRBgxSCLJa3rcADzzRXuX",
  "key2": "4BigVuRGrVAVhEHHEpzmKk1TjQUngBjf8Jj7v4mbqrqsPzQXadHcvHZYkGWbCvQpo8cZZqzbtrHQ87N8dNaBNFex",
  "key3": "VJHevPP5LLYyNf1VEQQp1XnY3otsWfpVQjKRogAjh2HbZas8odpmUVtSVA47BD9haqPZR4XjtY3JwA8yfvByTaq",
  "key4": "67jWgBKaKZySBUVE5b2mNqqwhgVSXmdiFKo7r5mdzPm3tiboMwSBtPJhhKRBbHeoFheuF5431bE7nXnQvGcC7rRT",
  "key5": "4V5FsUS8xZTsQg9xBVA8H5kjaqXqBKnvrxCibom4kRBTX1JURnJAKbEvPEXSZwaW4VDENcqBTJsdb3ouQYcSi9Rj",
  "key6": "5s4QkU8qYeUESmhT7kiUXRz3oEHksq1tb6Vs3qsgD2QkndvRKAWi7CbErF7dbYgNcS5vipqBviYCnPW9cJbSJJaX",
  "key7": "2npWfE6afKr6PQWxiZuQeDYq4U4MUkKciepE2s1isJgHuGiz9QZ43mm8dqjoFG65mju12oQWtwEsrL7HkF4Vd8dN",
  "key8": "DWiASQxY3T9QKpRpbpaVR8esYaRWr7mZGouQ8kWASes5akrcJdRYbVCFUVeiLhMfZSpYHzyiHSzVysB6PsLzqhF",
  "key9": "3TSsHeqmRCN3TU8EvtmPKqKZgCwFZ6YtvEjvtTzt9VM5wiXV2EGYGXKHNZEN7jfFYcBbhfM9rYyxiELn3o4wQza1",
  "key10": "4Z9JymcYRfRpUPRx8vgb7E9x5J3FTUnLgLPw7YNxAt97GWzwtWw6EFvtjxh3y3E3URhaxeGayeSDEBBU5RWN1H8",
  "key11": "2vJLjok29uqfnceKG6qJybAwMSoUceDtqs1TYqcfDpu9TpE72a9sgwcVHbK8Wcw7aSe8GDV2TYYFsnrvpCoASGh4",
  "key12": "5eeu6zVHL262oCYqpwCWXfz6aaRDCsF88LztPS17bvMpC9xjDEiwGqGzd73xRfdKRgDhwBWG29BEGn6ygfUANCgB",
  "key13": "4yyysTS2PLV9aFZwiuZN23mtfxSzuV6qpww234d6tFubpnTR3cT8e4PCs1AX5v7fEyUMYEp1DmrdNFyzeg297To2",
  "key14": "4jEnT4rvfCbA3FWLYB4bJJrpFLTtPQuwJ5sGfzQj8MaP2Nv6pu7g5efhbYCC5MsnZwtuGp6NAhEJ4ks1H69XLam",
  "key15": "5qq9LtiZmrXdLG2uz9h8H8DfuW5i41Q1PS4Gf4FVm31QfryHMGV2T6Stb3uxLqqLVfyyKMYvjyo7Qq1dPvRTmU1B",
  "key16": "4yPJqcB34GPp1omPJ33x2i4vAhqz2nbAExnm5GfV1DFaCHTrEuJDCuHzF77t8qbimwnkZ28zfnQDpr47Q3Rk2oG4",
  "key17": "5eQzSAmjV7DiFmt5uctVNyqBVbb7U8ew9eDptyd4QKkhrof2hQRYwbQp3rW5E9W5vbomijARefv5yQNAuWGnxE8W",
  "key18": "5P8svhu2wzkRSxHfogGbCvZmFrmCnCacMa9e2AS5MHGbpTR4uvzHVMdKgfaae3G3BpPPBBKJCwUMFdjKJdvQ53zm",
  "key19": "3x92quRAPvBzfs93DkCP7UZHQo2kRB14k4Cfx2WDXcnawX7ZB9vtjNiERbDj9ZhVKgswTHD49zbdP4Eyeg8vkHAE",
  "key20": "CBd7ZF2e2aLqFbzs2KMmHh8ZGFQ3xtnV6doSbV6vjm8AabJFP2hcrtuSMa9aUzx3oyKuCq6RDnerDwpScfdGTTQ",
  "key21": "3fJCbKJBS58xLawPzqBysrNEp8DhyS6GWWwiYW5CaUcECzVwcwToAjrJoDVqxj7vG7u5TavD14tQk9g3V4MBfNyR",
  "key22": "2avNkuK4Wtxg7PTmncJKroER5HKHa5osKeEXUzGr7h9BFB2c5ZAPBjsBXvXUExePd7Nxj7gCwLcApq2hL67z9dMf",
  "key23": "3josaunB7Ac2qdLKQCt12Tz6i7Xwxw84PdkUoVrFGQmN6AA7SBGcbyxvi1fccmBHQAdiYe4iWz4pcdrnpS9epRpp",
  "key24": "4NqpgV8gQTPCGFdCo56GQzYXiwhCkMop2wqezEjjopKsudBdB252DKfpt7YG7vDcT4nxQ5CbE1Nuwhr2Cf8ifiQF",
  "key25": "5gRYGo6B5pfMicnzhDJAosUFBU6U28QjBQFcR4BX9cbieBdzqJuofDdchgcGmPv2jEhh9d4z81o9ffwzpP1VMmtm",
  "key26": "3cG4LfRT61kb5qMQjmnipNmHA747Aa5MM5Pj2jLFuLQrwZyiRiRuf7gFb3eo5PxvMztsLe7NmWLk6w4KR7JSkAKK",
  "key27": "3R1qXrXWTEUoaGVYG3fnem7412KQqxG6W7hhL56xbsyYWtJTeDin8Cp72K4qsSXZUiyyRGitCSWd6bARFWNoHPuU",
  "key28": "44aqGEZyshCX3jQqNib2ryoJbPoo352ZACHowsyHuMs6dmdJauWVJRx2aZQ4nvDvFgtSB4enMvNxvjKe5pPxzp1H",
  "key29": "2Bj92in9QsTueVptHuUj8PBL7AbuYNF8a55sV2GtYPv7dmzWUyGvaLSe1GXbgUE3RJ83sWV9VkcgfZCkACLpS5RN",
  "key30": "ozWYQqXqJSsEYCJND3yyyJ9Y9ddej96oWPK8HNPoTsgX6SkRMmQoBgxSAbCQiaVMDf1HhC2RnfdtqdgRHhVNWVG",
  "key31": "2jZk8WTSAZjBVBXFjHZxGBU93Sf2kWmoRqE2yNv5VGHJACWvwjFAGc8KcoiwUPMyYucdKwdL66hV6bNLpDq6uBwt",
  "key32": "27uJetttHH3h6CfHfTvS6RTUVuWQvRZyJNpvCRs181Cvr9aDdXirgVJ9xjLoE49RptwB7N76VtDiDzVor6WDHi52",
  "key33": "2yEvpCreiMu2bX5va6tj7KGEXv8XifdjRezjK49or8tL2BvvdZPZVeU4e82uFPqF5yqM7sJrBJDUqEX5ZXjNrtw1",
  "key34": "3ed8ATR1k7hkgqPYsBoy7VEVSG8Kwp6x59LonZDwtSPxbVTswxdv6iwukhvHky8mdyoAEQkbgJ8rXxMCvJGiVSv6",
  "key35": "52QBC5LBzdjspyKJE2Q2SDQMUmN8CZsTFLUoQroaG5PExdGUkSN3ijuQ5MquB81FN6zAXF6L7mHz5XnpA8doTMrr",
  "key36": "hRpaNYpUPfwLn39HEsdbAbgEHqEMm7XUozjzv2G6HPvHNdwFU5cU8wEQRDCH1tD6Buw9PsLVfRa79jbGHYUEyvx",
  "key37": "4siV3eruQoaL7tKbwpacc5w8oGMxQgbTqcPyKSHLbaHMkW6iZ3oHTP84vPUS3mobSsi7tCFgX4Hoe5JrVgAXWV12",
  "key38": "5cCTJTt44dDfx8zdipiUxfrpXsYYTCGTuKZegTqgX5ETtcK1XWz9Q3jxLsk4QgStG8ou71ihgeVag3Ct5MKjq7a5",
  "key39": "Szu28qySdBkFjyZ2j3ucxsVwdsEXiEhi4FDeTYJ4s9a2cgXLwQ7QP16isCprNe5do1zdZ1sv8LCeY3Hdc33ZF8M",
  "key40": "5aWUhyiUaCrRnuZmmLamRWmyQExpoNzEMw4SFYjK1K6PtXZAVkEmesPofnRa9xyUzPH7uqJh9HDcyhUqUP61JvQ9",
  "key41": "2Ukj3Hfph4UqnyPvdtP38fbBMgXkL8mpjfZubwXSRkJDJAg3s5avcgnakRzaheiCCHayuZQFDyAiH3hsDpouxmwH",
  "key42": "4Bmsc9xPVn6FNHQBErKtxNF7coFetr2RnWy8xVJZb6nRiW532igB8uKqkakJrcsRqfV2wq3i3hsuS7t6DfZFLqJN",
  "key43": "2KMy4sCPzKRXAg7rZBNY1k9wmRW8PzuWuxPEMh9nFNPQBJWM95SNtD5jeqfXFtQymEzRZqEKQwbW4ppwg3ikogef",
  "key44": "4ZTryUZduZtq5WLXWV9h7RDuBBAUHSYagvDpYSWKxsJwHL4cutDsp7GssEfw4eSn3vWqBvPBBQYUin5JXUgfn6eN",
  "key45": "3LzVjjqbMUpxiMTgF8s23GeojjgZL1SapHHRGXTwSmXA1PxrfsBfL2RfU3ueeXu9GasN49c38RVD6aRynW6D16FP",
  "key46": "2ugJwJebKK9qh8z6jZ55EZbGkSPsgoGknc3xdut7ZstKT7PZKVSfC1oZGTiwmPUjGsNn9LCaoRVZ5SYwDKJYkzst",
  "key47": "4de4SjCFYb8uxMyJxhuxZXTbgCCdsEHCyPnLLnBzevkTZkWo7GYSUoXr9JvDzd7yW7YPTxts3y7VktRUUpDrUNg5",
  "key48": "62sZkdQ2vNaD19ftTY8CpHHHqDonEQvQXCYvqriMCWLx1wD37NWcn5mZ4gjSGjxG8JHNpkHsPqF6YAN2heJ3DBWR",
  "key49": "35pktaJG4gkH57eVDAFZkg9A8ooek8hvppcAL4Ku19Axdj5eMVtqspSfAUpXNMtgYYMZC6fSbVdP1EMiJRcPuiP3"
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
