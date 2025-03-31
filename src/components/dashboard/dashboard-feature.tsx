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
    "3RGcf27zAj8jXMxriiXi4kCGUbmp8NVot3n6LYLGbPNF9GzZQM34N7nNm2pPPcojEaC85cYmEDRxM6ZBt3pzTHQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fKbFm6BKiGfZ7iXBE4UhfrbW2k3nvvA1RCefWAscMZSFfZ1cz6mJFTJJ9VQ8ETB1xP6BtLu69pN4CwmghyxJLkd",
  "key1": "21XKkXZmSfPgrWNy8iFygRfy6kWKxpurwLEUH5CJQaFA3m8wNWRSWXMFcnVeXviijF2ezPbFFjCRSaoNaMiPKt4t",
  "key2": "qyZa2Zw454sP5peCZS33BpvWveDVCbk6bz84AKhiQKFFA5kkeBMH44XgkiJZ9gyFu9kjtXFGnovV3Fd9e8zXwGg",
  "key3": "43GPpABiv76tZCWSyMrunia1dqnmM2dm1rE6RAKGSTvCs2mjAPF3SYjHzLyx6nxShcGmgEiHMBg4pqQsYUK6ATVF",
  "key4": "5fmVcpDy73Mfg65oNNy7g7ogSVU32TwnRDZGWrkUjgEoFj79j6jk3hoRmacfdgZxt6vBe7YXiHfiCNjpkDcdnwjE",
  "key5": "LXrJPwWQhUK8vvCYLfwHDpK9eNR8vXvYReXawVxLjcjTavfXPgMgaxuXnd6KnTyhVhSyoCFRY7sxzy4ydxLxb4i",
  "key6": "44qbemZrQ6JJuoiFbr47HMkdCvVXq8vMT7PPeacbCp33orK9mh5NJ8A2iiyCojyFG17tcERZHKEXLPEcZ5mCEJyf",
  "key7": "2TomseihKsRHMogQMuYVaJXHtyaiz1wqidnrxbYtuCAfjJnCHskjn4AZcgqzGuVo4pUAyPXBHz4fh2XxFZwQhGZ1",
  "key8": "44MZmKZ31o4QnUSRX92pmqMMbJybmRgkkdqb9uJvY2utQaSRTSuAmv3gvyuptui8FkTsccjBgH7vT3ZmHdCydeu2",
  "key9": "3wBmWn1TrJLHo7iGo5GHw3oiA9rwxVANzriNDevjrF3sXfyvc1b8YvcUC4vUUiqVqTujbgMofv6nMXEAQA3nDBDa",
  "key10": "276vper1uptU3QBQsBNxUetxBPSDQc1ve2dkj7syQ5C4SStX2iaAyV8jXdAcD6Ad4qpmyjEZ7joj1CmCzUAmDpEx",
  "key11": "5uLWTfQbX6XcS4WR4gTRFJ51GEbeoBBQDy6D2ztFWtb1AEtZvSUVi3KmmHdFUdNGPZ6UXbrHoqFB5DGsJcwHXoaE",
  "key12": "3YVB7UAJTcTnRJy12u9pXreS2wp8y3AdwH3vGyNvaQUGszt1dMcSizKvVMsxmj8t2mLDD87t7Pm5dxSEe8EfcN29",
  "key13": "2DfSDS5xdgg9aMS92rETSdxhKWCQH4CwGnaeBF2xU8Fng2SfB9A6a12GobnFyXrd9J5XvW7M9U84faGvzisCsfzu",
  "key14": "2kTWPqkJZvTu1xrcvvPaZ69MRPMmphhvukwXKe5Cg2QDmAQ5r8mvRewMTq5Jm1GzfZHwpj7MgTV9tqozZqKXtiEC",
  "key15": "2KQpMytRqFbEDWxB8N4SL2ujDEJogih9Dq7TYTWu7FaKFi8j5QKsRmvnou2MpATfETK7kdQ1Aj2CXtqQ8tkftWZt",
  "key16": "2kUFkH99zzvay7YuLanAmDtGBdAynG5KiorJJVrYPouDepn66mjtPqk3nTLTnSqA7mwCqD4oDC9rgGzYqZaF9qYG",
  "key17": "2xSaLm62SWFL2dsMcQp9MXHqF6DzJ9GVQ5ft2dmb2BFw8Nn6sZtQeuaqbFUg1XjuYss9PZebAS8MvGqxMHmWFtCR",
  "key18": "NJ21ez65GvctxcXM7vU9s3UuuxybRqnYHrnuEUQCnnir3r6hypmVjPcL64k1bhf8bVDJcZ1mho2r1Bz6LSB8bV8",
  "key19": "4QMKffgwcyuREKruhBTX3yBZmWECNNeAG54MzAs7hQVkMafNLCvBpN1XWAuqeGgE2zMy48D8jE84ATYoh84BjyNU",
  "key20": "5HUVgFCyvUopsa5G8bSLexxUA5cQ1VCMfCiqPvKAsuHEv9WCQN6bGurqunLhrxXP2PvChh27sr8sw7p38nBCehYJ",
  "key21": "2RyM7grZTuABraiEXZrMLWVxSHPC2UdPUYhmmyHrmCw27CLmWi2sECFxz4pQuZBZGNwJwqi24hMRhP6XYSseypS",
  "key22": "4ZDnkUb8HFSDnvNvzYcdKHJXSR2UgLohgrJLM3sKLA4cEAfk3GmXuER1e8VNMxVfohGv73PbBuozgwS3E91WZeW7",
  "key23": "3vBmf7PAEq44TiX5v6MsHNY3GHDQ2LSSXMfBkkRyBQn77kun3iE943D6i1aTv2PRchtzrUUXq6ABj2fhoS3H7qqB",
  "key24": "FA7bwV9SNVAACRc2cMAYPBcvvUnopaDFenzcQwnNY5jPBweAhkNdmJHMKbUhg8zNjLkf33cp4AhAsYtMBGA8Cf6",
  "key25": "4BKPD9cSshTGeYY6cyfnq9t4AZjtGAqDUUcASuohk9YHfautJH9iSkJA4MebSG77n4wPXv1F9HhPSNVig9sLW2dG",
  "key26": "3rVzdvgE91RuJASFQuZJkgScpWbSVncXo8dxJkccszH9YDentEU3MnuJMVcDqPoctUAooLcfXQXdZGCru5aARRm",
  "key27": "4Z6YynX4if1YFpFKcLJKy1KQnmkGiGGF5HpBdfvvzYQweoqnj3e7cLnShUnPomWd58vXL1E9eSKfzxHfJgQgSWx4",
  "key28": "69gcSmjohiCB18RKnbiLBHwCrNyP81ComB1Uh5NqTT258iyGdcBG7dqphERPXDMpPUJZQwWhhG81UanqcSQ1W9C",
  "key29": "5GEGG6ki29g9SKmtMxTYgYvAJyFLwgTcCA5NES4s8ipGn86kAi4FVZ46maYW5Bxn3reP9ue9PNKf1xca7MUEgHNr",
  "key30": "2DvtDYGTWGCoyrYDuYUKU3FC8Bd9DWvsXiHCTVijBQixs5hkUuK13EWqUrBepnevYf1DbEbcpthT7fPXWbFm5Hsj",
  "key31": "XuqNvtpyFgQ7zeqpZVtBVdnqeEuSig5EEhRiAoAaAiAtMdaL8TG2Q3crkwzCBbYhEqbJ7BNPGqBNukht5d52E5u",
  "key32": "mu2SPcofiYs4EF3urEsfMv8UDp45RydRp9V1gEYP21nRJb7KJwA4CtkFUw2TgKmHQFqhGwk9QjQj5LGjXReN4WC",
  "key33": "CQUdygAeZV6wa9pCaFci1xLC4sky4YWUteGv5juYxqxRbjX47jjxaKBRieRv3UKnZvLF6QPpjm3P3jFdMJbHM73",
  "key34": "3cQH4JXWG7xbMP3R1tqoNqtP6fJWY5QX2YgZzue2Dr14KgsnqW6zJgAVNhXCUmhRDoQZbuMW1DWgto9WfAkoxQXW",
  "key35": "4yxhX6X7fctY6tyA1MbfqVJ9KH3EmoqACaYwBRD9VYotvPax8isdxYyocMdvheWiSMjwbBPktSmpugL2fvxnC9Xn",
  "key36": "5SmTPe7E7zk65pHasaBU4vdDx3mH2TwAthdXastMSpbs8guGVjMAYryQptvwBxhiZNeNJfNYhWW23dnEsmJgF6YH",
  "key37": "4yg5WZ2m4YQDA1TD48em3cfmRsgKwiEhC3i79hMZkstN1dYfod9E3F27Yd5cCtfxcihTVwLscort5XDLPbP6yttL",
  "key38": "5QArTy7P9mGmFRXhrsDGMRsC8gCuhFDT6VkNuBRjGMujnrDNNxH4YLpaGKFpBiaAtEJFBE1A3jq5tZeZdpWVgGmW",
  "key39": "22HQHJBrpwDKCQP7QznhqMua3x1mjydvSzDvjMKh6hwtVQPKuyLYDwGdz179Esk7gVb9QTEk5SDotCMmJXBfqUcZ",
  "key40": "2q6344ys4pbomqiW9Rbry9H6iUMmwEsFCkL86stDprcpZHCutuhZCjbhNocdELkDRhCpurFaR4Ar37os9FLQf6Ht",
  "key41": "L1gm2YyZtZHaePPD5WbGk6kNuFnzgo7uJHzaiDBdGsdnxEsbYf6Zyje91zRnaXwcLavKC31DsgUWsuk4x7Ltg18",
  "key42": "37gJs3oxg2zubSxU63YReQj1CTE1CAU3mCiGYuwJ3FF1WJCMxh5JLnHtRbBHc8d9B2icmALEkqPkuFDCStANZnuN",
  "key43": "yx7Z3yvAMxATxqWudDCpWPVfzXR2Q3h2An6S9ozrHtvvpzpWcPj4No4ckPcctMiPWMcjXBd5Wucjfg5iqzrmNPD",
  "key44": "3ip8dwHFK5r7bE4jdLCbEsUoPHHBY7bwnNBoCjQqkY9ynVdBfAXirwPqX7aDnun9c2WKHJhEkQGMeFcLnajRTe55",
  "key45": "3Lsnh6EfAWjfhHuFy2GoHycoGCvgFpJ7ijJhYnry7nid1qArLeiSSyvdwwdH83UW8XKsppTUop9dFsrrWuKo2VtT",
  "key46": "4fxSsM4se6ANT7dM6mJgm2qsaagjun5GXciumWi8NMKYuVoktAbcbzNb92SFryxnpq57mUsE2v9L838Bmnmah8aA",
  "key47": "3Nk6WhfCgX4YMMAzrNVXwD8Bg3NM6khhLpEdNTZbswpuwCspFfvu4fBdgvf4i4HEkV5to26MgKB5aYpSZa5UxTT9"
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
