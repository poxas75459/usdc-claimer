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
    "e86ZKmY3zdY25UR2jwJHS3QHNHDPjAxSpz9QAPgHEupiKJsaaChsf5YhBA8EHCMBaeiimPaWgP5BDHch3kUaGH1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5irb7PoiCssku3CnhuUgbC3icfTq1QLdR7gzrkgs3GjxnJj7LEfAtLnM99f7XUrgYmcJWQx6mxeq3d4AyB8g1SJa",
  "key1": "5SSQAdcL2EeVSEDCHJZSwpNbyy46zJyjmzsrHgh9AxBYbQ4LYMAaqCjkpkyE4baLWTXrkqxeA1uqBnepiSTeEW4",
  "key2": "5aFZo1HUaYKnWXXZwLcSyNas85qaMxHg95DfMjLy6MnWiTzbUCbFdudpsHVrzyAyJB5Nfycgnsggy2F9jDoqo6jA",
  "key3": "3HNZB9R5DoQWEnPwV29vBWNjdouvKGJSi4cXRDmyYkabrfsJDQjVHsW5PUm91hYG92aR5hzjzGAEfB6LSG5QwpSk",
  "key4": "2b3w9gmLmma8r89SmiZTvaHfioQpwFyKu3Mstfaq47wSdTwTG3A2Zszdh9VpX75Ce5hkwZQj2eK5XgvHNcwebmHG",
  "key5": "3ZPgYj6YtNJgSCwuJkJByKdM7z1Xu1oyPbZX1Ap3oRWkubGLeLyGQrCJAm579zVX9jjanvy9tqHxNQvywNgkM4b",
  "key6": "3h4Zd2UWEwvqBeSYHcrGg4BhdPkuSzeKQdH6bHnmj2cETQkVvMnTmtHt7CgQk567nuXTd1DQLEwv6o8H6NUaYic3",
  "key7": "WxHRaBqDdBL6DBomvGuVjeZLZmJ7pgvEiExXokcKLmWGcgAx5MiDKzbRpqzWZTE4tuaxDE97XbsHph2tNVVm7uu",
  "key8": "bTPaRu9egKmPEFgJYT9BAcxBvDPR6pQbGcb97fCYcrDc4BkU5hHDPhFgKAWbwsmrKvwtXJKoqeHzg3G4xPzWiuW",
  "key9": "E1dYr8VhNiQhPiMyEWGjwuNSARTs1QaWDHy7h7Gic4rHpmJmxDygajbVdgNwPig5CDrE9R5gBdoqZCggZZroBcL",
  "key10": "BS3xbqesQ7s6tKkogpuwKkvZiUVzSbpHNf24goRYrM2e48WXxt29zFvAt3uoAURhiRbvbYqnWyEUj5bYQSKqNaa",
  "key11": "5ArP2MoxQH2iicCRbcJkF2qSC2aHwHajRpTbF7aKM6p7i7FXn62Vbc5jfq9S21NB281Bg43ZDxB4Z2Mtc6wpJnUe",
  "key12": "2wijjF8iesQ8ZX2WJmZFQzyEYGKPTMsXcjeM6mgr99LZ9yCYsVunLKY84XrZCZn9vhUccjmdHmxjxGF4U7nW44E",
  "key13": "5zC3HF57VkbMJuQGoVa2boJwPzcFuxexVqyjgoywK711q3gzo7nKQdC58ySXxVcLC8fMTi8MbYMorEKUStmU9G5W",
  "key14": "67Pf9B2vHCGYAMBRC8Qcg2HG7n1B5MoAoxqM1tZspWQWnkspRQ9ACg1vcqDrMoYXSjVsAmfufEnFyjguocQCjPKK",
  "key15": "2dCfiTY61JXvLhWZLMfMbBt4q7eHmq8pCnJzNTj9oHAkTV8EYiKNq9fpAxkFEPQ9Xy1bhGqHZmKTALEiEifjR6A6",
  "key16": "3WbAgiYgdYxVJkcfjKYB29rsWbCAg9E6mY2drn53tCtEPQqfzkehatVhEhX8cVcwDUnxa66iTjtB2iuQyNTEermC",
  "key17": "cDwjaQMqT5rLZWq94yS2KqD77RzqQ4VPGiDM2FgENujxsow42E6HmuYf5SQF7CG94E3ErFFbuMCxZMwu2khsYau",
  "key18": "5ES6AGB8MpaH1awXHbMZ1hBXrh6e4MNFLjhZEoTRBzk2aUMMYC71mYoyo1txP71f7uDXv9dTauacEoxpQcW2zSj",
  "key19": "FRJ3nJpQSDUjhrXthLhpyxLVpUq6uApNjP6keuiNoFxC4qNttroxt2DdnzRKSKYGhTZfbbh6YetHPKLcpxm4sEh",
  "key20": "3dq7eHB6dgRPFWWBuaUsEwwzbn5ySLU45YQeAt5R5w696YdoSfUUjsN5LNPERy61EuZsebACR6tkxn4npx2qX7u2",
  "key21": "5QjeGJzaHACRZKoVH7jDcLZpoCDeCD66NtZSFBP8dYm9wfDsA1fhy7ewb1Uz3P67NeenmrN2nZeLtwmyP5DZErhi",
  "key22": "3vRjhNFmJKApqgLtEUTLtZhZfugLjoXVCBQQaDSCB9cbiMu55DMkcS7Qn7ZbxEd2GySTva4vvsJuba8eQmUfoqVB",
  "key23": "4nrdiukd1pvxUZQADujFkFoPRjfUAjD6bW9M89gft7Rv7Jzdcyunc1wPK3kSyiySuVLNSicNkc9SHMEkMTyH5qqQ",
  "key24": "53dxjpRpjgxuuxNjZBTWS4NchS3VX4seTj99p1jTcksm7TTiTupSajE4F713d7TKzy1MfvdRqm1bFsqV6Gmi7PVT",
  "key25": "53WeeUZwhxgEkb3VqgdokvphhhMaGNW7TFZw6gQCL5NR9nhW4w67Q2WDKpDbv3un6ydUms7FwK9cSGpg5aB652ac",
  "key26": "44sQewC6wTDe2j5wQfMuUcJbWEbXXAGp58iM4erA4j52XEMJCPhNf19vsw5oEUvT9pcS8QprriDe4YHCNKBWkMVK",
  "key27": "3Q73fvAfED99GWL3pgDXkQ4vtZSu7dGWZeMdT1L3uKKv2ppNV95hP1F5bcrXVxfbh4RFwbtWjSmWWuvZgHme2VsR",
  "key28": "4mBGW7E2ixnLQK2WVvPCj7qFkpHNhqpPbtmJzWnip74PuTVXz8SMkp64coVhXPq9ZtVkgTD1NmdmbmheZpHULvt2",
  "key29": "5vPre6R8hrhCQoaxfSpQ1uAHrgEYpXBcbfeYXc4ZmhQejuugk5oyAaTq2HGejx1257xpHzBSBi1y2GhHkWCy4vAo",
  "key30": "BvUSQcRYAWVLJaHtDVBnmtYsZkfN1kB9k1uehnNpYfzQJaUCPMk3kmT51Amvwgo3xdFLfJd4hKwKKrDLUEBoy2T",
  "key31": "48WRoATWSg5mKDiU4F5e8jDwdYpjyNDyv9eHSvGswNui7uGuJG1TPBBeERA2KRYiMY5nrUbm5QciNfmR52ZpicgD",
  "key32": "4jHUVwsLcN76qbmSK7w2uNytzJZuZtbeE8D7er9w3LcuPabhhyFq7mAmyzhiyHAQgJAULS44cTBKFWhPRhFMqLHW",
  "key33": "2cW36Yam2DQej5nZeVbBbFyTGT3yEjc5goJc691JnNWyqTpoY1oa9G8VG9s978R4HEcKkHjofyZb43ogXPLJinpF",
  "key34": "UprjfwMdeGb295kCCgJjk5nZbot3yDHARmgEHcdhVB5udMP8EkCLkMWCny4b6Pr5hK7ih2gi4hSVoJTuDCpsAit",
  "key35": "3SUuxHXHnhEAnXWwa5f7TthF3pAcxCvGFUNZqXUgjeZ4gdMjUMUq6zQE3th6dUM8yARtSNCXB2ryLUicwg6jPk7o",
  "key36": "4e4V7Lefp7LbvMuZ36JrMUY2g8pF25qjPzBV6MqEBozztWisaP7VjUk5WELUhASZBgwy3wvffCsvJwoFbMLTtHeM",
  "key37": "VTHfB4eheR1pa5vb4pnGbDzQwB89Mx1SUAFb4qNrj4QMQ3au9DxjzcpweyrsFAqTTC8cdMFYuiYwr3ajyjN734b",
  "key38": "YKJLABrGQdSSKGG2zXTEEz8nBJdx8nXRq8vDZXaENf7r3Hbun7FXYGhHxb1hwyWuHdA1fE4Q7FeiK4hTscam3ug"
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
