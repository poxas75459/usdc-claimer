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
    "5bMzXU7Ya8CtD5G5beckKW9sgU55miY8zssowoR9Ku1bjwXt5JRXJamCfSVk1XZU9PmMGnbP3iihajJ22S2zPCBZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LwcTrHMwwPmjTMUDeCe2451RCkU1jxv6eHoMHYEHqqLz26ddSLxo7ic1GU5ymf5URvBV7fy3kZtagevN7iA98Qf",
  "key1": "5E4S3YqAuSrsBL2dYiKL7bbu8xJU5LSRFu1Nbq9AHBgSB9CktzVzXXUMXkdaSwa8iKL6Ktf9DGkB5tkKMyoizHAh",
  "key2": "N9nBBUnEp5EDMgU2oPCcgsUE8Y9mMFzUStRuf8sryCU4Wywd3iC9ZYvcSQaEsNiiLmn9o8gzeAxpuBALH93ozpS",
  "key3": "3KN7xJHwF22kNwvReR3SBYHUZZwwuFR3hntCxbNfYH5ahD1bbjioKXiHA2KhKoqg1P5vVrrhrFaaQzHww8E3LdZf",
  "key4": "4nsGuphCeNbu6CBvHYVexk7oLs4JwhxdeueiB3ScfyVHNPBtyV9Nw8V1cbVVHTT37rjdfQd67PGzGYx3evmMD1UL",
  "key5": "2dSdLGq3LsmiAiNbhLP5gzuLQkff7nHXfowrjcS5K28NNebkKSUZNwPUcWTZV6BwBVikK2JLi46shPDPy5hVSz2g",
  "key6": "3kWaztvyR71KW4QeMQXyrj5vNEguaknqzdE71eursq4ZxQodThWHUfyFFG99fwh9ESYL3wPnGnkN1XmhKzG5gLsw",
  "key7": "5J5gsd6Pm34WhnqEiE3sxc1kNQGMWUCxgBQkRXFEkMJtyjJsomA5zUmXNyUhUWa9Sj6L37mG3fuWPht7XTUAf8wf",
  "key8": "25h62KeY8CPqyUYF4vLhE6RqCCruFXZrt956erMynn55rRTQgpmdWBJTWkfGLaRkjj57vm9MRsTDtbafhYDzZAqe",
  "key9": "hWXS4fSZo6jt4Lun2RM1bdSzX26SwGaKqxH9mFh3WvFaSCjUhGFkgnESkxkcMFV6kT2ZnTFeNJLYKuYS7zbVJyK",
  "key10": "3uU7JgXh2t8NDMVMiEG2hWKo6Kzcz4DUNn7nns4cmXMHTL2VgBPoPfdEVGjgFzKwpzCjcyu6Gcgw6inUhUN9LA1Z",
  "key11": "bnJDvfcGLJKAsNnSJznVFRTZBGKVg4pW8UAKWTPrcpq2LA6RoXCJpTYX6X9frUCp96MrZEtGWFZboxYKdeRNBCQ",
  "key12": "2FZ198vyrt9HyrByxfeZ2YjkQCdZWpzGigTem4ychvRC1AFzK3g4t2RutF5fgBCgZ3HtMTmKwvM6nLKrQSspkq7m",
  "key13": "3qfJXiffCPXQ2QmzzpFVRQUqWnggHWBoSfWUEgmrgWh2tZdV8dvHtwjBnq1q5WDiDBTEJph7DoknzdWjZ3eCVQxV",
  "key14": "3xhk7kiYnqntb56U2CqsWv7JV9hYMjP9qz4yz3bCrk9GMFJXNE8XzxSuGh6jTYyAvvPhTRqrdNsbQEUQQffvHFDg",
  "key15": "5tBLx4RRwR9DvhzffAWxkQJ1cohsPtMgArkma38nfAcLokA4zx8VXqzr7gAWjQy2oZ78LC8aQZrYHU9R3QSHy2dU",
  "key16": "3eg2hSvMWo8B4ysYx8n1tA9sKRpKasnD6GYXM18Q3oB32vS8ziM1pVYnEkKYVgjvBGaLqNtTmYexMNSzpXwZigb2",
  "key17": "3XvXhdtAwFZyS5wMsuyc4Kg4XQBQgQshgj7GJ3oDu7w8KGhcGiQKA8QqyVQAndSsPYfi6XTDQFdG458DF6iNHa5p",
  "key18": "2JJ37NNoSZe5xPSgA3xM7ni2CYwo6nxdNf6cpqxG4WacxXpyqRPvRsHJUpGyGN9bCrhDe1Qtq3hbR8pT94A9XkCG",
  "key19": "2LLTw4JurPvsw5iHtnQ2nbTfF3Z1bG1J2v8YRUdYE4bMjetq1F2VhqNx1AsPq8jjSNUf2f4RW1mfXTcbRzECWzBT",
  "key20": "24X38vSEwbUACoQ8BthenL7ZDgw4UYPtQmwmssPYxBMUegh7cPT2fCoe5oWCQY37Z7AokXWq2CmycN7bEJXbcbvu",
  "key21": "2pkgPws9enL8Y5h6wjiLcYDtaYughVCGuVbLrcumKCo58nHyoPS3FmP4zpShNsdCvyeGxR2HRwnBD14Nuzney9RC",
  "key22": "4kyUYWwhmEm1iYegxXPgfPsVhNJrMmsjAVkSRgxv63cvBwyHjMBBCG7FhLwgdhCKUcn4jacApqGY2iKiCVwPwub6",
  "key23": "56tYpAycwmrcSV6H1WuPKxtXggxQMqGE7kgvpfUyKQH4aQRTvCtLNofdHRxmoLmw3mb4hDeeeXDVFr1QcMUT8NLU",
  "key24": "1Lixc6bqFZa15dAkVzZrsLcs5iCk6rHoHd32ZnNePUZPUtakdLaE62xd51CeBnDk727uApDfD8E5KV2qDfH18L8",
  "key25": "3pVMJPMoiSXxZxGecZzip3XDKPQKkbTgbtwCrhxPevdqtYmK8eX24ADNgP8CGkkyC32gJAnpcHANQVXyvNSoGLx4",
  "key26": "4z5ecHY2EWM4bqTCX7U18RJpkkhUih2dgL4A1vopgnSntRpCMUyKPz4kzJmNZskpQhrBxcsPakt3z1X5CbrqfXfR",
  "key27": "3H62KfJ8tUXBazhE1n9VUyeD85Dgkiogh2E3t7yRYufkcb5P2pi5kP7pe7UTQq6RuBx88A2YgewreawKAoasFjpY",
  "key28": "5T7PUqzYVVAgpJ9se14T9siLqQCeV3AEqjb68HHrmWhX2r5RuZqW9MTgbL8K2UtPZmE7ZvUL9yLPtutAfbgrfMw",
  "key29": "dN9PYzvcSa4z42w4RepptbWVvAYZnFBUuRLV9QWF43RYeFcEdzGLS21HzLsihw136z3vg2Yv4JhXh4FTepC6gSm",
  "key30": "23bmzGc6Xxt1NyhU42py4bPJdhQGbVKUGwEZyETJ2bYxC7DUMUXZYvQhLqkSVNgVWtHVf17cVhD6FRC9rukKqE2F",
  "key31": "4GCRBtp7beV1puyZpeiLznnSfhkc4CtseYPNTGYn4dzfPJW277AV4xVHBLFXvfFRtf8XfoMFk7mbP47yhLGKzid",
  "key32": "41KuMA2z1vp7F4Wa8eCS6LX6RLwPQyky5N251TqUeZC4EYmDYzYbft7HjkWT6LbNTvBrD2bpVjvgBigr3bGe1E8M",
  "key33": "49WXnACoK6Pwz8iDGC9pSPrsKs5rMfRsynoMTjo6UxY7FA7Rr6so7jSywa98fUbYEKjFQnodAK8oV6nGYPpn56TM",
  "key34": "38NNrHbEbw9rsNWRQwDVqZxQYJwYcqBZ4G7jQ4o4LfXjqotw9vzacxUSkFnJ9JtjWWKhRRnCND4iUatfTbKp5LwF",
  "key35": "3PkudTKPqRpfUowYMzGiBagC21zqhJYe1heA5U2saDXz15XfbbPi824zEE6aNzxjCKLpjog8xuFeQM9CDsQVxiai",
  "key36": "4qv3dvEz3sXJV3DyrxB4zUPyvBwXNHyrqKjH9ruegahMZXaKprbdvvT3rsjhsW6LU3oAo9eeZR9Lapy1goMDQPU5",
  "key37": "2GDeJjMQ5uPiJ5CcdEByfejv9AipaeM4seWbGWqGhhyAvygFzxGZUAD6aUpjzs38xTS9Vj77JvY6S99NQCRfjsbo",
  "key38": "3dhqs8NCaE11joBiXF5N2d1ZCVUYBv33pvSmyLEX9JXRJFrvC5LqHECL2zTzd57Mr7VEtq6CFQZAAtiF7e2o7k5j",
  "key39": "2BhG2SwUorgLkmpN1fTayFZmLSuawoZW822JseUGBSz51mwhg1Qtbaj4jhcFihFPW193xKfScbZmRLiyhsCmw7Ew",
  "key40": "5feefZFjUkA28hpKxdLhmqoTHqbiKyJiDsYGTp9SC2AGoxMWqsBgbg7m7ktveQD5UVQoQqkqkiVS7uQL37gYpZBx",
  "key41": "3SK4B5LD2GofPxC6Ei4oW8UhzZbYyE2BsSw7jghXRXmpPo2FgU931WBcyCdzia6MKAgNsKF7Trg65PP6NRqZ4cCB",
  "key42": "hvBAn4ZaHPTh1d7ewAPC5sxkJx8rQLTsNobZSSvSPzrYmDBXVCkDm4WKxKkCqb2aNgMfPXPhzp9MLBobbSz45yE",
  "key43": "5srGenhPXLyFpLgBEho5Pe3RcbdKKXNC3osWS1pUKs8BTZjaFAFcb4o8Ta5E1ojcHDpMMnQPDsuGniyeqKzVc1uc",
  "key44": "3doxSPJYdcPPNAFocDuvVzG1wP5c6kmZYwQiJXeAYVYAmZYxqF4cyibTGrXDZ6hEmDbYXwgb1YmUgfxLgCCcMrUG",
  "key45": "36d6EehtmoL4DkDZRaH9vzVmShXB8t4hhPQSnawvBg5f8agoudiAcMWwXgTLU76WD3GaVL3ivyAgkxAvfNid2xKq",
  "key46": "5upNg6LeZ53TPotQ57qx3ocTZdb81jDUTXoD9KGideBc7NVsniXfZYxcGFUQ8ZaxYFDKQgfSC2xBBzPYdQd74bKd",
  "key47": "afbeqzCB419hfnafKe3fjb1tW3Z52gDqxTodkWP34vxR5XoDjesXsVDjbxH2fr3n54TnztrNrWvmbwpXBeYfPbD",
  "key48": "5HUX4UESjT7MD9EBfQzcF9VvTt4K8FjqyNMFnfeWk8cGKP4oPeqkVyq2FZeuZR6JCKCZMc1v26AQSzEEgFWb3cpx"
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
