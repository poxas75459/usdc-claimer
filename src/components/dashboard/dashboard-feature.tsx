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
    "5aDC8odPKDep8dJpTbxXwCrLPGTo48p1MouiywTbuYnTu2o8rvb3n5kBLqtGev1F4nmS54AumA9LXjLdj37SFsTQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GTNpdHQ2yRpXNprtpCz4a9Bjn25ukpPA4NnwbEFofWkkZAHqc7ZnX2e8MAYqfLREAd5tE2rTWYJ9uLT5Bn9UPFT",
  "key1": "5YuhUU4GMkxcsM4sWHRqKFfnBX4NPAV1HhDCe96iYyCLPcmhrSMJRC7cbJe7YzcbFFY9jM3SSxAxi2fRaJCE9Asy",
  "key2": "4HoQM1ye6zjYrY2cbMFuATh3ip1uZ3fdcqagwtKSvUw9sAzmAm5PVuLUv1NqZezW1ymUaF42DxgCNhvkRJJSALzh",
  "key3": "3pNZ3rjnm8re2Ds5QiJnLcY74PjbsiKYVHaan5AXmMzmzzuuUaPSu7La3YKXUafCd3Xr9VBdDEyGCGDr9YuJKUKH",
  "key4": "5foEKcSu7FpjLJDVYYv7LvyVKxmdFy2fBjQR2dVjL2cFaBXrA68CjsMRMmGNdMRRUG7QBGSsbYZfm3ne3KY2aCoW",
  "key5": "DYSL9sy3coMLYdTyFHr85vc2bQZny7vKK8GLsHftegRyMBgWZLyj3hyhGp4V8RaLu6q9FqkdPL54PR52YuvCaAc",
  "key6": "2PKYoJs3D35e8tS7Us1MR9RxREmFVjdXkJrumxk1LoXVGgwhD2S2cp18adWNPv6RhHKhesjS9UhwSakKpx8NhGLp",
  "key7": "3kQLbBfwrRiicNvHiBkLie2v4SVdsTd6Xejh1XdWzb1gUeqz4WYgCBjZ5mLNUNTpV7oZrEVsCx59NM6mBUWsUodm",
  "key8": "2MHNy7hL4PFymMobiKxpY7K3fct3FXoT2dYxbUWdrvrc5CqSFbxfmdtxPurseB1Lkk6Y9heqpKB9TSNtujYuXvnE",
  "key9": "RJhNaGbZnLuQBbuB6PVVCQRSaJDpJHZGua8XPNNY8mh14Mcnom14KYPQ9D43b9jafyavY5VhwBaajk8nKvGZUv2",
  "key10": "2BwnRe4RLsMETcH79kubgSxMUptzVYrQ2mc2Q9pWuYmXmXTPR8KsPWAVPBbDTMPJeY1n8LE8LL885E8iNDPKpBvd",
  "key11": "4wuji3fCrchx1PGKLRoDDAK3jXnkWjUGRVKyuRwhSw3X1tjeyv9hMJWLG1f13DZMeHg6eVnfNfYHohErfn6vEFug",
  "key12": "26PVYTyViDTqntk3wQiK4eYYQywkw5oaUEncmq87GZ26B5KsvFq18hwC2wYwUJpFEPYC4fEnHGKNPTNuHGYQpnXi",
  "key13": "2N4ASRVwwo9dXeBNZES1rdiz3L2x3RF6xN5ut5bz9kFga4JCdR6Pk8wxwuD7qXQUBaF3JdPJk9UQsDQ96ovUgUJq",
  "key14": "VhxSeW59o5134m43XtgB9vaM8AJBvtUAgyiwv22XA5FpAW96XGPRWj5KQM2zDG2j81UPdDCH8dtQ175AWjVd4Es",
  "key15": "54rTb4wp7DnDF15V38jXzXJHt9NiVKXMk52pTJeawY44bvYBPSiZ8QQBNBp7ogsuHCrzLdsN4vtqY3v8F8JFdDLF",
  "key16": "3Y7kqsgyQoTbgdpNthGqCBQk1urFzZZHUNhkHcyD9MPnmAhAWWhuQzYWJvRtoxMUR32f48T65Gnz5GT8jR1ndPYH",
  "key17": "5FxzkUySLaqz9icQqMrPSoi36Y4xKCBv8DNX9EoHgMiqz46qAdyGrq3jB2vVYXNGzCEfD2ekDoBVSp9sJZTLcdg5",
  "key18": "3vt7gRuYzFCtdJHWN1z4vBZpX19WdwDX9U4PsYGmepdVAAyzeVY2CjFGrzWeSMwC6Wypf8dokU1THy1ko38XMPPx",
  "key19": "5bpoqygksvLiiUghVCUqiZ1K6B1qG1AbQvXw4MtkwcKywZcPL6RTagAGgNYeDPsgYmRS6eMWWZZkcWfpK3sBh5um",
  "key20": "hB6WjF2xe7P7kLzd6MqidGigFz1tkZxCunCZALMu8hwVcbXRMqEXyz2VXiFfHSZQPFebbPYzLHYnqjyft1kLyLK",
  "key21": "2sa88jUqYErHXNgZi2wVfupbEv8Qo9EhkpnUCv5jnkshYGig5E3K5S65V5RjD55p5qMeN8TZEPExxrvY4bxX9TsM",
  "key22": "22Aaga5cb6XHbCwUGmwgjUfsjmh98k8y6VSxf8gL8449iK27twwxdvTH47DD1XDKzUrpsSsFKVNk1tJyUb1tbBC7",
  "key23": "4nVMw45xisuc5rxf12BcZniCzzCtbTJ6sW8UiSDMHYwuf8cHAZAFupm7QLb3BuNKKJD3qSfV2CGz24myRanvrRTk",
  "key24": "3BwfWqRTrX6vZVJqrnPthntc91NMyBEsUzHQLN75P5akDdofZyYLJuJrvrPh4LXtb7PGpiAv3VCd23xbdX13ipEJ",
  "key25": "5t9Y9x4CW7njkQ2LbSxpJekEqQDP5sdSJGUfFoBkZhk5VHfJgk7yYJZLBK8DGwvbyfG6NiTJVNKUumCkBM8ELUYH",
  "key26": "2YtnfVLVf67h2vB1z47imJi3Wk5DMT319xokV3ih5B5k3aTQriHs6sZxjuMdHGVFwuJsg1JSrVqY5MsTcjuZANGa",
  "key27": "EVoQ3GcbtWyTeuDrxPZsVhureRAqikvC6xXeQJTPjELoY9a9wcLh18hW9fw4uCrENGi2i7o59Xfjnz8GDGQvgNT"
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
