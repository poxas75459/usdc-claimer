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
    "JAy8BULWS2RxtZahZpMRJwB6Tj9WGYtBrsMHJAFxUQe9yqzrHr9yBQJMwERqHjURVJumFaKpq8r6CJzDaqE25nj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x65D8tW6n79gyob5AxtpR1unjJevkusv43kubrp1B9YhgqLhs5cw24tQVWHYfZht7s5NmAQpdJyYE18F28MizcK",
  "key1": "5yusyJn124aYuaSTcXjzdt8jGiX3bZFftd1eQtvJpWMuG248rrFV8w6CJZjVAS5ow8YpzD3eSxD1JHMbtJYBQz6r",
  "key2": "3eyXmoFczYRo456Tzz68ATzNvmLf7cCzYgsGHounsCAqhyKysZy3At1dyd1vDDssynwBqQhmNXwY4W8pB1Gdhxef",
  "key3": "2312uy2nHH8fmeeArb3hpu3Kycd8FidDguGFSAZrWmqJ4uUq5U13HcVTRw3RHe1K4aibyWyiUpZ1BMC7p14KDV1X",
  "key4": "3JyD1Nu1mRmnQAuhVxqZYgEFWNg2WhzcvT2Ua2rbiAx9ErqHXaDGcrrxYPndSx6HyNdyP3RJzjPKaddNjqQp77do",
  "key5": "2ikDKAnTV2R39KCtbApYcoMDzYx2ny8cYaFEysLbjhACGccodjTUc6ZZ9XrRcFWFCDY9D9LdHRLkvugWuPhmntxv",
  "key6": "4bwNHVvA6RGuboMEubexjTRzDSSSs1zrdwQxXtFKysUfkc4z4acdyk5Hgb8fQEfGG2xXNTzJ9jXXQW4FtofcmyF1",
  "key7": "5H8jDYwaDUo1KB7tBfAiGnFQtu92iRChmkmbuMWUJz2CPdskD3LFi13AMxMmJpT1mnBAVRqv4e6TeRmF5Hg3M1ik",
  "key8": "44mXGtvYJk8endQ4QN1v8igRK1hN5dirLTxdbwaEFbLjxrYrCEmYBwqDXwsDt5ExYhX1eicdi6k1TXjYccvgQuCa",
  "key9": "2jd2CmHdg2sWNP7ZLtpQAbA8NFvdTNqJwjusTzHwY7xyNQY2LsLh5u4H28L3wFaVCXeq4xnHf2CNcf7uTuCzxVv3",
  "key10": "34B3B82YM8HiT8KG1AwxgXE9mYbJ6sEqCMqRqyNbkjJmcQERojW4XeQVHkbm3e2euMcvRsSy2yB4qcKUytFkNWCR",
  "key11": "46YFRpK1EHcHkCkdAFo35qkBLxxZmccgbdCkZmwLes3XicLxC7s5oGswRwtTKVoYMu1Bwxxw4obWCsrdrsebzn5t",
  "key12": "5qL8jFo8YJyj5urDGsM5PgkkdSb1MNYDgS5nNnArz3VY9jzkDPHKZXzcpZvdNaBzhwk9JfFJ22rmARiZypFGYmEQ",
  "key13": "3pSezsgChWpUJDkKyieLQbNugv2SjjZ1JnYxTLkyCER9jANiNLSr1rWK3qVMrFYFTGvePxN1xh848GoonWqQLv9n",
  "key14": "2GHwgwu69fVnqqLu5JKqTKoh1C2NDU7zmJZTF9e5nG9h62cUVfyCrkQmZEjS7Yea3XpXHmktf9S1peZaFy2WCVhS",
  "key15": "pLwqyAUj2jjxcSETcZfpKeYd8qNoJmfueQQAdfJxYW26WNDVTwKPQjvMWNRkW78jNK9B9Mb39avzUPsmVp5j9uw",
  "key16": "5yBSEBmrpXi9fdRZ25sHD5FZaFHry62QxfJS9ZJ2VCVZacxczGCgPwwaTeXuWD4uYjtCPidv4UShSMakNtMQLwQj",
  "key17": "5hakgMgp7CsKpUMmwCsxvEdcT7iQQMwi4XDWWQSTgbAwoLMmnc2XxXRg5Ln2wxsgiHCs5LnyEjknky9FG8zMdpGY",
  "key18": "QfTZ2yKEk8UsLahGEqU3X3228zzpUmJMEbN9QWLrAbL6fGFM15tRXyBaA1jwsntc6NTdZjU9aecVfLAuYSnnAFU",
  "key19": "2d1zDfNmT579JkjHfuVpxWgHo3M2JKzw8MnmPmPr6epQCdcwsPCPK8u5PBZgemdrq7m9nD4bx55Yhgazy7LXfwaS",
  "key20": "3S3rev9s3Hq7xnhG59gN6Kgonb35kKtc9p6qX3PdcNnqY1dy2KrMQLQD7eZXdTkaDXpBTqtNtfcvnf4VLN4xUh7R",
  "key21": "5iWcwXBXFvCqUcnYkXaFampQSoD7X9VCczQ3RkoWUwod7psLNb7Zptp89ysDeV9VVHrUcCZxeJSNb46ZozPKstfe",
  "key22": "4yX8jXGozAbnGjx5SAZP8wtiZtaMRg1HSU2UEcAcsEYZxBg4hjWndQnmqhpXRwZAAXDEWY8WYtTwKAnxx2vxSy6j",
  "key23": "2PGqshNd8UCjnkLA9YKU7qz9bAiPV1ezeMgayKMExdzSMirkCSkcbPGQN9ACyS8paFvNktpkP5Pga6Rt54WiAC41",
  "key24": "4QuHkBeSFV47ndu3T3z26ZL9UhbhzamiDoAaJxrRTMewFbW62pHArRjpwCS3Cv637rHWqH3Zm2u6WHRHfJev4dXD",
  "key25": "4ywys1JAnSSgroYf99igdnddEyFmec5tZQ3iLSG2YQRaPHF7U1stxis8VAne7Vm94LhkvwFXaBJqH5gjXTHNXvg7",
  "key26": "5dns1L8cCwpaCQ8yZwb83tsM2RAyfAeQiQpdbS7jMgoT2zEzwDcRUCzWP4fPMyVv9q4VW3VxyWtcVPkWWfP28nmv",
  "key27": "5pNU8X7r1YK1yiSNSHbq1ZmKzbAKVrf5qbofJMD2MRnKyaQz3FFLeYkULbLCxUQYHbUMrCj2uweGCVAd5LWRQ5Re",
  "key28": "top3zD5uf5jMbtsJaRVKvjHbqTTrpKFTH3yGTkauvmygdfrebG9eRvYmpMMWSQGSDRQf5HLXAERYtaMxG3Yq3dv",
  "key29": "QfQ11bunDshMTC5bwSexXHKxEHXyFyCTG95nF6fnLBgx1NW4UsgJiKSyNy3oicNqNtnrcTWEiFew8Z1CTzo2hke"
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
