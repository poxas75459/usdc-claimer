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
    "4j8DDJ2w6GWHWBE3vBkF8imaXt2cqn2oUnLuMzVCopsDujbLGzidk9yPCPBFcZBg5WjGBLbm1MVRUV3BFCgzEFXS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gdVv5euumVqTbMrsNMsvGMxLNWwhLeugRx3LnyB2rNP3ZxsiATwidoVvDJFangrKpMska9sAakiugucnySrBb1o",
  "key1": "45aKLc8SiF7kCZXqncVb3FTu6bmGMbsQgSdYdZWnJuo5A6B4Tk93jhx5jJZ6Lz3gKmcrC44fLCpW766qkuZk98mu",
  "key2": "u1f8CvbvmuWqDwY3phjqkBRU7LWbC71uQUwbD1y8aNMFJpdMKuMkoyjcpDWxzRoXiLrLW267Ltp3RDvnKY4Q5i9",
  "key3": "aJNqieNXMqJqFQzWrhFkDfC9dqUNU4ZA7iSAw1LojYE5p4DSDJ9Bc4DA8KugHb2MibxSHtJPoG4Br6uRnHPHZ6U",
  "key4": "3nh2CTQQ8jiXkQzwkvz1Y9BQL5ZH31HnFtFpKXPnB2Jk9cVJPFYuuVRPuPQ1ztkispC3D8wN9aR9yRS1n61xpAEo",
  "key5": "4vc3KDaMnkYvGYmAchj4CqgrZqNaTiVHAJnqnfTHDa4oL27tcFDZQWRsnNKDc5iSLmVjra9kxpUsdV6jZNSMVZJr",
  "key6": "5x6Gxme4nKx4MnZD86nez5na2RCy3yZeztzLLq2j5pDXCf49FqLKfGto5UvENJurkhQev7frVmMANFM6vckoGYDP",
  "key7": "4Vz47bAGxD9kdvhp42dSn3UnqPoHywWrNex88WT8mrE13ynKPiF1jFxjxzqXX8beSvwe99jTuG3G8VKyYppW2DLS",
  "key8": "41rR9c8ChyhsZN4H6KWwnCWQtidUorjPhvLCgXMT456ywABJcEaayZwKUzhPgbZGrdUKqFCsTiXNGN7EkyhRbXSu",
  "key9": "3CVz3wcTJMKCbRq1KaEZDu3M3G1YgunVCwaYagk82xr7a4h2ciQP25mTHVpWUHNvPsjA9rZa29fesPfJzPWANuRS",
  "key10": "4Jo7gc9TZdAjj4fuFQGovfR7YJfjH7e4Mt64XJpob8hLdQBCXBez1wfKgxDcN2QG1StUiBULjLsPTwKWjddSdcK3",
  "key11": "2h4fPCJmMtPreFNayJnApBrFQekm4H9HYoshBVPjuoC89Zakz6Uw124cfoWdsXBouhJ69sd7VoTv8AorYaNs2QWJ",
  "key12": "aHtqiRbLhWvxR7FpExFkde41ynGrKeqwqEgnnL1fPvUYqsmYKcPYkiP7TggQWLW2C3DL68i7YAvcEJLRfPQxFkG",
  "key13": "tzs8iattx54g2o3iL3BRLAd5shQoYETqvhAez9yfN2gixSDmruTbdkwMdcFdKLkXVrepjpy5BgDrqbwY62aCKJx",
  "key14": "2bXFpswgDfSPB5gVoV8HdrnAHscwy5hK7boPTDxazFfJkweTwxkmFaxiuLuXaP883QsZvukjUKpAdQ4sWfKLUPpp",
  "key15": "56ev6y8HvRanXcoryJdcwQvS4DpqAC8sE79GUYhtLy6xbfp5XdfodiBVdgamFxfTdZA1GhDPU1AcY9ghDFMktR4m",
  "key16": "3G8gA5n3iGAUpenMHpqPNZtjK5i9B36pSqycvdb2uW7GVfQfk1rRLFDYHWJYpvfNnvp7hdNyWnPZMbGH6QLKKLFP",
  "key17": "38TKCkDm3Fm5YwJTdQiQThyfzs7CebqDEwczP7TPsLoKa9Yp96FH1MAQWgGjAUUBJNTGkZUnhePvXDRSaMEDB5UC",
  "key18": "2gPBcWz8uBVKnnRkA6UxXF3qJufZKFuPtxPdcD57dSD3iHvjDWJeJhjqweknrxUTHzbZLBAVx6MrPZfsjnFqh4np",
  "key19": "5msNJLufVPpQ7ygDTRSuDG93Rrn9W4mDB588xSeKgHUXjG3spgCBMSray8tHB2SWcSLhy2i5HLg9y7ZoyKY1UTbN",
  "key20": "XUFhpyZ1CNE2yXFCyBMSVPNgEdtPYyyqUwKSNhUKdhiiHEUg8Qs9MG2ivAiBx23ReQdk5Bkc39Qu95dWccmN1tq",
  "key21": "2iQT35DXi1DerGuzuJFwDWZbqRoNWuA5xwqXsYbfbnoFjKFXEdFahbLh37DNpLGUuHLyqihMANiMSWqPNYh5jE3A",
  "key22": "65DiL9w1rsW4NA97Z5ZFrvLzau4kSVFnMs8DEKX2xeWx8s9ZemgYNM3v6oQePrhLPAWPz1smVdFPzQ1LTBE6j2TB",
  "key23": "2ybyFQkKa6rGcPXS9kTnvoAXSAdkaqUdQr2x4oM5q6FMpDV6yxivA5FPksQGQCLC1aJNeFSUE1EKNhArkugHe9Po",
  "key24": "5Hv9jprpdmBAnWDj2RLR66qR9fFcqbqj13hGWjSVRoELUVveLJ3PCaGoDhLnEiYa26p743ZDQCen2bk65A4xkard",
  "key25": "35YqPEemDgKhWy8brzTMhoeu6m758eRqaHgugaqQur5g54yvj4E87WHJpXXSEj8dLooJbko8AeaE45msjWWCmJMy",
  "key26": "2Enk2i1mM71D3BYHmtZV5hB6xchvMVd6sHjcXiRQip2SaaSYxkvfouFbxRU6Z1bQAkUZKFH5J8KeX2bb3JQCV4GH",
  "key27": "wf6W3Soe7qkedd9JqoKJr3Jh3iV7tv1Toa5pRtEMHreVqwzS4ncxbpRDV6QAkhGQwJbtHRNgzNSAsbgH4Jw37n7",
  "key28": "4Eypw1BmAUoewWSwxP72QZhpptG63yVGxVjjEESz3rLVbFCStzo7HE6VuDmQnuoYvqU9QHEsi2Tgp3Ezupz2PE3c",
  "key29": "5HMJhKHPLmsTMJPvrhv2DNRBP7ZPbhZZMg6tjzPqWNU8fhqs87HvTxhn9BkP4Fnc8KdHduVZGGGm1pfbyjLjL2T5",
  "key30": "44tgHDY1X79coG4jcovcogphvYZFHBwmqaSw3STm5QuCfHxUdGGCQW5s5Lmy423ZUyaGJ33ZRc6kSRCMbV6jptR1",
  "key31": "5TRJA7mLfMSgbiWSYXNytpn4RUuafdQdwTfNkLSWaapjWSuCAicisjjib63q2H13PtaNRqMohGDW8CuimphDCSZ8",
  "key32": "4fpMkbg362X7WW1t1aYskSkL1Z4WFXhF1MarQV5AnBL4NLUWdYQr3imUoSoKTCpXZRmwsFTmQRdJGXsVuRktZhwY",
  "key33": "5m4dAHVQdqRPqriV1EG8SMkF3K2GGQ7wG9fv2sz1CGpMtysRYq38ts7tK3GwsJV8zZAbZuaKc5W8LfC9V12WzYvZ",
  "key34": "2VaouQSnundBf4WQkeauH5F6joV3FDTrvfWTZZpbaFmVBz5uujGWHFh7KHrB6Wzm8LZAAiqgPaiT6awDhMd6jt1W",
  "key35": "2bvhxCercd2Qj91Zbz5WkiyUUtoqcbpH3W52uHUwcGGopZwpmnw5aR9UdkMrdkPc8TENqyTjj1KCapVYmy2c5MoX",
  "key36": "5YBthjMKHBfw4Ug9LXD5qwumWfpqXJrrhEr6GeqWuuPpkUNA56Tm3s6Tg5TTDNHqZKAGoQMCdnm3qvumrty469YV",
  "key37": "4PqjdhZSfERxAmtvjzya4FzhoSRD53t1uzA9yL2QGeTJgUKt3DwXkNx6Hd62VRkDK4eMmJCkscLajTAYBhMv9wpF",
  "key38": "45KLnm4qBginproCrxRd9hZNeUewYK4ECVvVfmwzQkFCfUXmL6RyBXQ87yhtrxaxHhSVMib3Bk2quVw5DkTNGFzU",
  "key39": "VSrhVoQk2N3RAQa6L77GtBTWicirjStT5TtC3cBajRzhDbvWFxyTi8yMd8v4i694uMGLzartfJHyiU7Bix4n5Le",
  "key40": "3sXeWFuXLp65cpgjfASP1pCFNmUQfqoyT67UPMjN3Kx9e1xViMycF9tT8fouxHqNydKq3szb5ron1ksmJfHSZFbB",
  "key41": "ioqe83KN9NKEvsVyZPt9pZtNBLtGKHAGbiK3yrRGCtEJNkcUTSCkT8xTACQ5fiEHjtzmT2PYp22rthi9F3TTMXB",
  "key42": "3Xrj8KbcrraU23UaxuvxE8uPutTspACd6DR2eZsANQx81DtXyFhRHt3kJ2o2XPPng1q7oEt4J41Pabsu2HMPjFDW",
  "key43": "4UuUAxgAkbR8ipFWy5sFcad38sFnqasx4exB3bswHhY5BZUvnvbFt8N46y9eGWYqoxK6ZcA7pTdZe6sX1wEqtctt"
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
