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
    "2EoAPkR4d2mcxB8rM3be2VeA7N1fWDRZT981K7nnn9UVS4JYcoLUx7QZyWBAQ553NqmZYoxD7SJK9MkyCeerawYF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gMT1JbuHHtDjvA1pzq15pwQ2Gg9AGPevC74d39mbFAq7htyzbbMouvQ79EV4Ye2AfhigUgnpiy7vWLzWYaKsjFg",
  "key1": "xJgbWW88EpVCx4FhNZD3CpQwotqeHKJUgLgrLYJB4ovRewfTE4RwufjuGZyCKg7ozgLC1nE5sNJm7CCfK4kaLwi",
  "key2": "3Vy6Ftw5rEKHNKJcJhJ9WjUH3WEvtJHRn6xrdrT4grwFa4PXp7tHfJG4UBpWnf2TDm17BYxfw4oTfuP6zMADKPWD",
  "key3": "2vYorVCncLzVfbs53jwUCy6z6BMk6Z8kPS3aYnxv7gGL1jZYDVHye2pw3PbL5fXK7M5ah5txNJHnchoqjACSs7Nd",
  "key4": "5q6PsV44MBSCPgR8iwyd8WyXk2QNQ7FxV8T7nmrBgneUqu1bC7X5dVgo1U1KHdF2p8iWmBbwcfERYVFwcQ3YsByF",
  "key5": "3JDxSvyw8yJWKgRkZfpEB51i6KLYQERK6sZzHZsD1U9VPj49Xb9wthfhvzxqEECFE9EFNetvt155txRe2aKzXXyW",
  "key6": "Yxp98fBExWhTAjMjp3zHMHjzQUAZiDJ1YYyTaYrNXytHteYg9sTs7SanzRR915YmEpRro5CBx2agsuGiyZjswG6",
  "key7": "4BcFDdRoNnaYFZVFUa5HuCjq9xXeZSzHu6wtf4UJQKNfk6EcUgEckm8ihxqre9tYFzrepwMN47YhLfSegL2AYB4v",
  "key8": "235pNwXcqXcfRLSGRaNTYsiyfM8xwGitJKyy83bgkov1mdyKN4sENmWtum1oh65dRC272iX3yuZMoqFJVAy9TZb6",
  "key9": "3HyCbxUxvgLaRFarBGjwpfdhEP9grNwBMPrgu2iU3hUYerjx6otqZe72ii8KKTsbBLbijkHPpPqCX8z935WtY4Cf",
  "key10": "2fxsFK8EdrEwAjtZtnUSrbFhQiTjQW2h2bCFFgce2rWmLDttKsQQVfqK29AdQeVmiu439GVpC7kCT7i8Vv6zf4He",
  "key11": "5yDsZTRZSnGgVhUJehtBh5863zA81oH9RuqqKuTGfZMZdyNxBqGbHxa4catkANryMc1MvHKdGm7TouAgmGiE1DgM",
  "key12": "2Q7oeb4Gr6rCvEgidmhvYTT9FxKWB3wGCDZMHhhWkjmvCvMCUSqp4UasGfC4u3v2miw9Q719wbMLAw7yRyS6vkm3",
  "key13": "5LGfq8cTaKfHisihvMQJVbQMjKi2W67tqNmffk72gYHaV2uh2QYKm5Wk7cs6vTnipGVBi7oEJYxQK5u5egmT3KgN",
  "key14": "WCczmNthdigmY92ESDdfXs8GeRZ3aM6mTDRmpZchmvhtrmvg4BiEdtxLjwT41YYhiBoLyKqSc9hjV8JYNUg56cy",
  "key15": "2wFiQAaBus2X5Wr3oYyBs9yL8SxQjX35e9fXtCwUdhtoji5oa2LA8vMUNrip1P17nBof355ABc2Mmt74hDfa6MMU",
  "key16": "2zCLL9fr6enz6q2Zf3vhizHNzjBrKMYGrGx7ypupWbhXkPmNaHmYENib45qzeuxStDjrmXrYtLx19QJLCfPKqWSj",
  "key17": "ijZ6z7Kao4w5RRWY3Av3eU6rSQwN4xhcux5V43pYw4wnXYtvrFD6yKnRhyzkDq5uTPUNWwAPa3AcptUXXRAxyV9",
  "key18": "2qFB7RLHE6x9GvQE2YaPyMdFRuscMYux2HmvzsDHhpXxXuzXM6meoy3v4Uqm89JhTGpmt1EpTaHZ966ZRHf8NW7W",
  "key19": "n77tyyVDTeiZ4J754Lk3RATeRKKR2MzRxWkWwkGrBbw9PC8iUCknZWxjoUSRnoFfYxdJ6KtxApRTgruadvBVFPy",
  "key20": "3HtSfV8yNZeKYpVGns4MfmRpfaf2ZzdEYoYjAhzavPuArTx9aNLHtk7ydF82WQQ18TqASGDr56AVYy5GyLeTLh6A",
  "key21": "gWdJRuETfaTPaK2ujZ28pp8RDN6vzNYoGDtyaBdX3w6yJ6JMqpgkB8YMp9hvhXBy7dNgwB79viWWTqyKWqFEsSB",
  "key22": "3KtsQBqAwtKvWde66dgSe85qk1oxuTJSPSqVBBniDrC4u4ueB8ZnE3qmEd9qzSYwroYsRFKvhryTa6RQtCRNSP1d",
  "key23": "JXXUBE8CDaFVsFZQ617TCcTB5gywWyBWmRou1p6ghBkuvunj68CcuVG7WmqAtLDx9XT3MLMm67PGB7wjxcYzBaG",
  "key24": "2WTUaYZDSrU8aq7vBGh8tL7ess3HZxGgphDdtGTEkGJjzBman7VS5kJgVvSitAtAdZZfZaeaeP2sM9b7NouNsh7o",
  "key25": "2fS6G8FLKot7zzuQ3KMCFDprXC6CHpA2AS1Gd7TG6U7Sg7dYkmDdcYQ3Ucays7hbWdtX5Xg3b23CnkWtuUAW7mn6",
  "key26": "3prmK285ysovwF3XFKmn3iJ3YpSQb2E79ctC41pYSvZFR4WZNKJFrSnh7nQVH9TCM18aJvdgGUzedC3FSR1v6etN",
  "key27": "4g2Px6TfptMLX13vc8pEfgX34DbtnXbgLqXbXoSn7nz6Bmc3kD5hQgeJLbeqUZfK5bc45tzuNUPbVWb3eXqg5w2v",
  "key28": "63CHvRDhAAxZzghdU2teWfP5JZhsZPGWCuQy3v31surUvhpr2XziFKjEYU8Mgmarfunu5aWP831Kx1Hm6SsCckQu",
  "key29": "2V6RP78WSjScMAS1jQ8A4Qrz5CqgNkBN2bnWwCe9uHhkQYrmG4Ym59Qy9stoqBm3ydZzZ9yoesKRJuH55eXWELHw",
  "key30": "65kNKfuYq2LwN9Dy8Dfd81WW5auscBcfNAWdgVfCHA4khWRo7AnDxa4RyuGWAXdj57fa4mvynTCQbr2iAgxcohPj",
  "key31": "64wKvmb8JLJNjYJ9AEjFZ1mZf5hocCubC47BZyjpDkAAeKZFTo9RQyq8UWrDDaFbMMyacS7oAPDBFjB8JsFofYU7",
  "key32": "5j4xPqgu2EcTGNLmsuHu47uTeV3BVgVptpXtbFVLCpBDqiv51E3gUPXvEjiNFTDUgeitjfksGVrf5moWFEbugzP",
  "key33": "vHpGdNL1mu9Y8r4YawPCk1gAVk4FDDeJrzQTXjuSZB9W53uGFB7xnK82RumyjZAifw4ha4BwYnKSPj2NXRorYGv",
  "key34": "Yb7ooL9UhEW2zZGtDoZVsJNLJ6dqKMqkMQdCV7ySqfEppqTcXYvgGZZfs1tQvork3ajGKWTWBMRTA6ZJTu8ZaoQ",
  "key35": "5mc6f3scf53VSrTsrVeewLh6RkiaALtzEjzjXLbhwqNnDy746QVSCd9LWfuGvX87GfmbggxkRGqKEdzAR6B5ngda",
  "key36": "2N9tLgVAA7veK8AENmqjmUvPf27aL5sZ1CmFVzi7ekiu8QRa5uDVHyiyMedvDs2KcT2x81zcUGAEzowcbhHRV3GT",
  "key37": "22xm5cfYtxC6vWZg2gH2RgbGehG4AA4yJGiU77jrZ86hqSDn9uFU6SEywTyguQtbXs2GqgS4PPGPUqNDwyaqP6ji",
  "key38": "5VmEcGX1qz4susXDN63nughkg8DxRwZHx466KYPaeiLkkuJrxb3rAAr8ojyoBD1XiDKFd2cSNbLemre7X5GPrmZ2",
  "key39": "3kGeTxwvssCrPNApMyNoDsMsNQtbxqFeHZD6W7cYuSBqPjmq6PZQEPzbcyZvYMW7iRZrS8vFAr8YgVQb2NcDvL9y",
  "key40": "2rWn5vPRh9zWn63tDBfJ2ee8fh5t72C5USd69NHR6Evt69uykWrRSG6Em3qQr3DcLuaQYp8yEueHLeLBDvaZ7zU1",
  "key41": "XbRVSM8sUejjR4WAbSU6PPFMTCThY8Xqhb24gtzkM5kJYDNvS17p9DCEag5J8SJgnJw3xojQANuoPhqz7UWfkC2",
  "key42": "5dErn29rzwy2QGTYjHKQYpU2U773Jfeogcf2V9xGWE9Wkmpzp59qfCK9Mo8PDG9DQrSUBXnRBWHzoy8evVxsxwXT",
  "key43": "2vM6rhEhe2FF7wrfQU7PnLkKooLA5VyzQZzuTm6ZoWuy5EsJMYsNCiRTDwo7TLdZWVLpFMLGGkvaRfxK53DQW6Ry",
  "key44": "2JiCAfFGr7iRoTAu799GzcHvK6HyQEh34J1fJEdTpLAvUNeutQWQQkaT13Xgd43FUNChgC5oZFSz9WcZBbKBtL8m",
  "key45": "42hxwSJHVLof1YFopGnkFQ583CfS1YAzxxBejJYmjHcSkqX98fGFrWWDPpdiFhjp19u5jqxJNQ6YmsJMPSoywEKq",
  "key46": "4TiDEAmSZnF7hyqfc6Y79NQRcKcmN1wZJRS43XGXUugsgmYPFi7vNBEWRH72f2SV5tBrcKhZVDmVwSE8hGsZHzSa",
  "key47": "5pt7trcUUc285PvzPtJaFjJmNLczwXTTbgmtA8mdnKoGS1ba1B4ok4STf861W8nPUJMNZNXZi7MVRNFBtEnpJJvj",
  "key48": "5NUKAAcLcDQxkJz7xMrdTY3ufz7kZmsdRjWNsJ1o7r5HauiudyXtAVbKoKk6ZGLd2jB3Q8PQsLwUp6eCFkNrpJoM"
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
