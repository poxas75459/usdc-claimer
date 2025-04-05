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
    "fbdrHgJfZw81JDyHmBBrXQ36cwmYCHdRP36zPRimoinHbR3iPMnxejf5Waa5Ljug8Zuoh2QC9PeHL2GtFTFYDqb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qEG9y5WMBKCDuV89v2t9MD567ebJYFDqQVR9RVuJRKeSLoQvZGRgu8PeTfWgyc2ckax1m4jgHw6hKcvRkSWq9wm",
  "key1": "29hagT5DJhTe5FjmoxuvgDDToH1JnSEVFNx3M4LPcgy9aLaZK8X7GHJVeqjLk9e55jR4ALs2DDUpHZiAWQGbqGS2",
  "key2": "2F6PvJisfnR6DVsVMjQktQP178R9uJC7MscmXPqNm2mJ3a2MNRruVSg3RXdpJt7dXK42oaXAL9ab3Mw4apMLuxJR",
  "key3": "2DjYTFrwgt83amHErphfspHciAexK8dfPaqdgjhptSPyseBXpVxDPAVVKY6gQ2cpNbxA1otrCj8UVTVurMXJ4Xrz",
  "key4": "3MkdfgTbH3uQHmNcoFreQyG7xnEDsZFM9ZjxgSSxnKA8vpj6H9SgDzzjwL9fCYwjQ4tD22nChc2StqPJbE2hwLgW",
  "key5": "48tHUBspqJDrmbdT3cb4Y8WReZw4FuAPSA7QevMGQvrQ9GcB5oNP6DwgqMnvJeV2bJYPPRdWQZppj9ckXTFW46Xt",
  "key6": "4QV6MMmK9NWihMSJHcovQxjnSbMiQdqFNJoikbP8EtNALiMfFJJNGpDMWVb2HmiAFNZPTvZhq9tBtcC36nPUmRaw",
  "key7": "2TVmHgEQe84PvgxyJZi1mtEPmQZnhqg4YBYzHjEiHQiMsXas6fWShFGdspLWtorQtmNwRSrebhad474agCEhSr2y",
  "key8": "4L1BEsxuYWK8g7XwMK5SGDANwPyhGCQFehq85HNgLBpXMqAKC9Nd2QHtX4qUzUmSE2WREM1EAUWoULomSQ9ZkUT2",
  "key9": "3xv7uaWhZFq7gFU7zf1C7xtVzitd4RF3nqEL4c8cRZ9qcirNoz5JCDrPiPzVAtWowJpq21fXzMhvUmQe3Rf8VeG9",
  "key10": "5vYGwFUeuqj9hNpSEgztQm1BiYaP4vYjjp9sCtVi99e9mmLuZ1v2ETgAKbtZ4x21MoQydF7HTaEEKkaHdT8je7oc",
  "key11": "31ACQaTyMRdy8FvdVmpG4kfvh4Aca8TPpQGDsuJZtCWYAVSyTv2hRMgSFhEWJgqaPJh6rQLGzncD2h6rcCoVTbW7",
  "key12": "2yackQfcxmEvnhNncqHsE83naWx32F5tkdzzymxwjpdffYUepwtrAKgi8EfNpYQotQvjo3aNzJXW1oomtZYcBGd7",
  "key13": "5CCBZ8NbmsPt3dVXzEDjqwumkkbFrJdxBD7j7BRhqiA8iVzF8cg6ZuAtgsJZK2gkWNNKy5ysYZUy4mT35zMpuXiW",
  "key14": "3S2zzsQqpWoh55PU2GRqY6dxxRviS5RJHAVsnH3tph4JnrBQgKPy6UwpiG9mdWoyhCTHA8SGVBXdp1DH6UMB5VXc",
  "key15": "R8MjXYfZpipSHYaREHpVfpZJHPDcP8LxXBuCK6dQUpKDcXY7REvWDC9k9FcBnhaC2j6NCUKwX3wdZgDDagYP55p",
  "key16": "4qdKM4gkwGyncZynELuf4hmrwXYMdu71hgvKr9UCxSi7njy6Ns2SsDZQthGvgsYnSsbjZMBWcYKLFFY66B5rvwDk",
  "key17": "2ecTBrY3FWRJp1UnrhmEJJ5vnou5rjRtdTqqBov41rP5niHp9h3VW6g2pKGtWb86RaaJgxuzcH5za3J2cfTZCyFB",
  "key18": "5H5Lxeq9kPJaHRtumjvcLctxcrwVCayYeen1Hu373QbJ2ReRajL8hm5s1krTGQKLH5KdmePzAaQ281riuXrQRATs",
  "key19": "4MzV1BUBtC6x2x2jH1fQy18L9sZuJpS88DecbQMXrABrkpr9Es2L2Z8Xn4XrFEMc8yag8Wi4UGJszkUK1Hmsvosp",
  "key20": "26hNamnpPUyUTNz9f813YMD544Zrqf5hoiqoUzejBqGCdKVdCTT4CjASDmEgEjnt1MYf94r9VVxT3duipPcXjEzo",
  "key21": "4SV2xNmUxwScKfUC214XJNFi3pf5tCN6eUKce5rrsQ8RrMjJ3om1e7FWdb4uLqtNyNRvR7GVWSoNsodE8YUnSe16",
  "key22": "4mEBuFeq8gHsXPSUmx6xBhJtssCvVNY2VrcAwwKXFi4hYr5XcihK6HYdUuSTSEbNgV4WqCUgAAcXiQECrTVFYeY9",
  "key23": "5NmKkKvuz5PyYLqmn1GS3B1vQzhGyYCLbuPnu8wuPf3hxairkG2ePCcrX5W53D3fGvuWyRcovvb3NqinDmEArzrE",
  "key24": "55mP8942E57ufqm9vFHQGUATQwpjpgFdsdMwN7mzdEKTtaVwqKcXRtBMMhjC12Nbaa5mXdF52phE7EcyPGzJWUzK",
  "key25": "BpyfPSK766vYT5bTg6m1Acg5NFEH7PoroUgCC4sYv9PqR7Dx5H3ZBiD5ZufFE91cwEP941UTDVfmUBbtmqLwCfu",
  "key26": "44EVCGMhxWzEFSb7dkPeYJWyv2PCWCtQvvRFKcYAPxtnTQsY3MnEdoFaDZZ7kFtPtSkMwuSS7pEo9Jjfr73Jvh9F",
  "key27": "2zkSSMMc1mm77RvQ45T3M7viCoiVGxkoyANZsVmpcE77vv8NSYenz4jXYQBpU2yr1gkb8bougV8i1SjT3FJbNBm8",
  "key28": "5TRRMyXQV6bMwcwymqWYxoQc1EeF8opGSsdhLMHciuRE5U1mLftqaZZK1s6Fg7Vb2hRFjDkpWegN8Ltbv3Nq9eY2",
  "key29": "2ho4zd4ed4hSeYBjrMHQJD8G4RKwUmvPST1rhBBwSu8es4iN6asUbbzWeheciB5Uvrv6fdHfxKMWJFy7ZWM495XA",
  "key30": "L6PJiQFfRkokNXeNYmEb7ee77x6sPoUaheHgjYmTcmoMHX8Q35evMHt1VRSmRmT2Rf7HDtziunCL3vu7damUp9e",
  "key31": "3S953K4bHrW3HejM1YWhci1sQMk22dgKTFHnRXGyrdpSpcJ4cxrAo8ygwU2PrQWT6qmjgUy3WXBBCKzstsMw3dW8",
  "key32": "iSVuk1ZRv3wm94gLKacx95vzxDfaTi1a1rULgE9JdVfLzQ4Fx9Q4cAGsdDNnoYgLzMoEiv2Mh3C6VifF3aWRBkH",
  "key33": "gucJYw6qKcyAXoGiqkzCgULMCny4oDVSn1FJMzCVxd9gWARTrvtdrWvSsRmF6AocPwaC6QuRnimcR3DHTH8Gdp1",
  "key34": "gHFaYCCe9zey6aaLpwBmbFFJnUCQcpT1cdhAysmH6FS1EZ4iE4CFZDSeWCmTWE1149NmdaqmfcK5L6H9UAB1ths",
  "key35": "rZJwjntGJTpskpRSnFCXpkXos6QJfgjVmExAh4CoFzFaPpR615BKGqV4UvPqFtNkeLqfNfrKNvaChGv7PwAjBPe",
  "key36": "MUEHLAxDYrkM6N1MTbuBmfgeWpWjtkgsUYroqZfdJRdjJYxqB3vtMmBYjc3yWpqoQgZRUvsMqe5tEGpdJKK6CDo",
  "key37": "4E6xfHzyqSq5G1NXFw98288DrsP5p9JNQpqXX4vZiarCX47JcxvrP1KhUcNs2gxSPV54Znui2xPZhJJknzWcTied",
  "key38": "3QrEWy268T2Da63JbPnwb36QFiqCWmDpyaZS1iNRExvVKYVxfcGUS5srZJWGfxh2p95yNFVNmfPwRgPc81LUpkGR",
  "key39": "4rws2egoUqdFMJc1aVRDFFvtaTPgsCP6BtXEd6C3J8x97b7mpzp1osSrcd8RRVsVTRaKTBbtQKBFZGiJZRkH179e",
  "key40": "5QkAwViWmqRQJhEc5NiwhKdbHgjvr13wDX37yArWDCRmwdHtbrvvUhME3cwyJLuLAVGZ8wD3NyVwCMrwTkTsgGAh",
  "key41": "52qyTLnRKjf9yVdTvzcr6j7kK7v5MDtpf2UC2DRA3rBsHmB1bXXn1oLzVEZcZ5Loyg7T9tCQnLyLCK8afh4XgFry",
  "key42": "4j3mnjcAjpGwtq5iz5SQNYgJxyu7kwLsZg1DUvp35UVHVzVqyXReN8qP5FBWn7HxJ8tf8Pm6skpTLZSkLJHzFjN3",
  "key43": "54q1ijKvo3QtqSdCrb1ZxWVTYbkV5svSQWBtYrNyqp1aDFrVafZynAti3dmgRXLmnxri8kNUcPAVu8ddXoXPhQak",
  "key44": "jfeH5YxSYN7DuH5MSWvUiVd9cgE9JzsDsg9k6K4qPpfaQjo9Gh9gj8Jcf2chXz36vUKwFooKC8EhVLNGxKXMZfw",
  "key45": "3iFZzFiTN2n2V9QnjkZLpCG4BQQvBPwM3HWctmNJ2Jhg4sZGoMrD6thaomCehWPWr3xNfAjiFiqufZQgH7YHNidd",
  "key46": "3A6q5efpH3D2UGnhXFVmg6Faywse6xX9gynSarbPptT8s1jhBn3ezNpsVF1C4A9NQVT1o9mYSNPW1NnBNBTjtedT",
  "key47": "47enmdbgiD8HaGU6pkoeTJvmFyLgGzhwMd7Z8vuxg82RNfXXPJJA3ErtEnqnNqxjJQy8SAXU6RCSGrJFXaJw3pdF"
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
