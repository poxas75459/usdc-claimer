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
    "3xv2LjwQk4W1x33bstTRXFJBWR6tofoho1qeKyo7s8mfcG4oWUuZkCvExb5nYdzFzYY4XP79bvD6GkCK13JQYgg5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "12649YG3dZF5y6Eca4uzu1rUeHMaXELJU1QQ8rzbNYcX7ALmnBLuefHsnaX5bufBHmudSvu8vLd2arNtFur7dDNC",
  "key1": "4zWXEqF2Zbh9HwPtEcd8rfwTzH1ZLK7oX5ny2Yr36wgD2yEXWz5wtABN4nSyvK6u5mp7ycRYdGFTnKcrZY3dYLss",
  "key2": "51TM5HhrYA5W4VGnnN7Jc9wBGUTKfpffnvtGE2TvCWpT3F96w3TTc3Ztgtz3yppr2gpT5jaJDfEbw7fR5hFzU6cq",
  "key3": "4MtnPA3CfcgFQUFDCbQMH6RbNwnNpXkBhQ3hemWivQk71Cf2CkVcS7pAyJEUtbxuFtQUSWX2ZPucijBdn66Qh2sq",
  "key4": "4wwFksCoz449jpXKdJPSMn9u228KSDNU1ALCvZcvqDXxnLdRgyhga4uqQNizZSFkkvjhgQri2cEgXWDw96VZBYcp",
  "key5": "44wEsSC4tjwuUnxJUeuoDbVYH8yJ2WHL5biJJHNaMko8pXUik6fgMUfE5nTDEL7a1Y22F8cKzKCEYuxt7J8YSvVz",
  "key6": "31pzYBxFqLWduhpfkfbDr3ubZVQ1DmeV7k1zALJwH2BxtUFD23yJuiU3veNDos2Q9ZEryUZfvacWqijbAVFub5qR",
  "key7": "4PEos6nq4aer75tqnXHvrcmbnUqJPgW5wqk2jZcGH4qKPxqdq341Z71EdTD4qJXmXEGctvu5ukKJfdWcEhvDPBhf",
  "key8": "3sKov3v5az89NWvBbEobSm72P3wd2TS5P9i3t7HSZN5KZ7ETV2keNp85r5DHf5NaAjDWCjarsLm6tX2skbPr4Jv1",
  "key9": "27HTvUBDYmkTPbfoAEvnL4pnhwbq5PirWhJ9kN2V3yuaqW4ZdPedsEAbK9e5riiiVzZRVheTX6txqac4hHXNxLT6",
  "key10": "24G5iWfoDXxhwkpy2aN5aQPAf5EH8YRfzfLGq3pFvx99geuvxVmroP4RkjHankG6xQ2mmsKSWJ3YfRyPrCx44SR5",
  "key11": "iRYLWfrPrz6HrrT6TVfFeXAekVWD855p2HTNhxqDuRiqbD2R2bK9QPHQht7EvZnMuDUrGfLn6vT66bfaHcSX2kx",
  "key12": "2LTcpJAJLjDMPpKxjM5asr2frNBubNTf9n7z8sURf2iVMPDjrxeveLdjLQFHh3vBmBCNpkKqnNBWKh8bS6quPfKp",
  "key13": "5VA8KoEk7oiSNJUr7ruywnmiefGjZmoBbnfkYTro8ocbAs8QigwqKKYH3wd6e2Zki14WLKPktp2tSLPupZqcmXgv",
  "key14": "5ErPsjtv3shq3oWzA9bVrD4HXQw11xHZ2LuaJFNhn3rgyRJZjHARSS8wLEJU7PRynDfiPhRcWwQChg8NoVLJuMHN",
  "key15": "5GbYpKNUpVUwiX5nbqYd8xgVivqA47Nqx55FZnEgLZvt8x3tGiMhHdr34GjktwZ6w3gfcoSMgE2CStwWpYKX9TsF",
  "key16": "66GAw9EJNBR4bJZRKE1QyNAX5ViJ7MC5VVbjuh5W98DiPfk3y3QQuyCLY8YbiGYVLBKeyn6rqGzj3enXRSfNWMXq",
  "key17": "3trWvYYYLAfLvrdFZ3K2y8C9soEaALZVbVEPh4RVJ8eaPMLvyKpmgAjLtKMBytnLfLBMQ5m8Nhzchsj2Hnk42Dtm",
  "key18": "5KdECmYzojA1B7wfBdP7RsSQYvry9rJ5p5oe9Lp57WkrUExoUMXJaRKtWZu3Bn1Rjp6gTv4tdfCuSNw31V6j5n2S",
  "key19": "HTmDcqaQ9Fwpcq2DH2HCVxMzqrfgAxGMAx7w8rqZmfDAVV8xiyykd7MJUfctRb27JbbEYHyDH6hCf6XA4HeJR16",
  "key20": "4gwSmMqadMz9p3kjxGupZ45sV5g5v5hs7nSBU1NMDHL91hgL6iuS6j3pCfgqAuoUkPsBuAi9YhZMi3L2FukjPwkr",
  "key21": "k1KgeaB1k5q8KJzDXezou55PbaLTCFdMgJuxatzqBeBMJ4zUXj3myTpaUz9gChsrXqoBXuB8ZDmGoWv2YJkbZDJ",
  "key22": "2VgCMAZ9d6SZqmSnStZycDL3TWQ1atzThHdXorBWSuWnULP7FNztSVax42F2gGPZFBH2sKwrL663FLysDfBro6y",
  "key23": "4gAYTreyyddQn1sHY4fL7JaDtigVG8d142hyhVYCQSinrcMa8p97kjdfDg3mbMtQST3Aa1S9DN8QPdRVFWq6AJRe",
  "key24": "5dWv1bJF29Wo6S4vQedMDFb4HSVqJLfcdLM2ArBa75fvudUGMzdkC51wcFzCzjGdhCXjxxSshwjjSRFXAk9hjiT4",
  "key25": "bL8JHQZ4VaPN44nHT2QxqUCLm3oLqPmegn7EHxRvQ8LQ1kusaX2cyzQyP6MVn2wC5BfJy1rQX7zMmhJNiR1hYXE",
  "key26": "59vtocq1otR46we3LzZpE2daVjBacssw8ic7wdBntyUWnE9MGmfQVkgeRoA6chUTNpchDt83FVQV2w9VBc6MbCdk",
  "key27": "2EjurxcsgAq4J7sWMsqkNEzmcTvHn2w2Bb1jCr3QcwneQj13TqXVYYtqQ2vp6Qx3dWdJB4uxbiZa9PdPxs5dDS1b",
  "key28": "2SUjXu4m2vcwtDotp8zJPJDNJwLAvzrhajoSLaG84h5BzN13S5PHoRUZQAeeycHDKP3Z9W77o3PYs7WdRvxMeJVz",
  "key29": "syKKieD7jtG7JHXdGG4gF7ozT1VSdqQ4D8spgCTepKXC2X7FnR5dXjjfFUrgH8JST4Wkfw8CtAqZmTadiKkc7jV",
  "key30": "2Tbi9U1LaqXEUeahVYL1o2LAuALYFqPNAMwPZECy1V5FtX3QBYWCZWPYQe4v4LmkwmETaAKoTHv1d6uiT2m1Qf3B",
  "key31": "39eoWQnUpqpfhXLB5dWgTHChjzZmugV5v1NQ7b7D47SAbynGRKKzUL3eGvDbt634Rynzo9KvK49B9ETVasHf9Dpy",
  "key32": "2zmXhyM1KpveRXDuVfpkX772GGLkK6PXgGxejMF7baYgMP7RX96SqmoPtk3NWwQCGUZs8iy5hH1v8RFdXwMcGVYD",
  "key33": "5ctBjMDU3ArrLW4TydvLiWha278LYovGusKuZFxn1uEBB7FJ8XGahrz5PLQFjxd6dAdRtdJoom2HSiPKMRHTSYQH",
  "key34": "539FdsgJ2VNKzqsiMHmHaxKRMpGm1pTvEPkUh2WbX5ERzjNU5xygpU48k86u9buMuHgstG2Zv3JDk2PirVwjytY8",
  "key35": "4Mp1MLkkzceFpGNkH1YcmvqBNG37BiiN3Sw1Krqjznw6CWJu6jfuL1qh2nfBjVUgksKk7N76e5SXnrvSig6FwV8J",
  "key36": "4JCxwDYwt9MXe1heJXwNVea123zaoXiQ1F5uMJtgTjecJywcd52g2QtqVFWYWjvd6m7oz9J5N45Zq3c6pBWCrF8u",
  "key37": "4Se948uK1yWbn2PBXAwFckSbS8cC8ZFDHELm75Z8AQv1bk8rQQMfKhc6iWgX41ndTkmsuqHRTTJsLErEAo36uTSn",
  "key38": "66eL21Kmwk4WuWjNN2U9bpWRRY4PQ94Rd4Pp5EXGb7Bovpy3GvYqZAjkAVC8GrHbfKu2tHz2JvDFVu8Z2twkEqVr",
  "key39": "2BxzkFaqvuvk7iUpRtmXf5mGgVRbhDWh4DP2gsx5EqCqAM7wLNmvxwUoQ3CHJ28AD5W3kTf28M2ZKWx8pcA26ub4",
  "key40": "49GVTP2u6BZtTC2DrXPuoyYL8mcUP9K9EWeeMY1s8XDmP1NePZQMdXnqwSvuPXqR96P76j5UzHypEwHUMSUzCVgA",
  "key41": "8dRKqcPGw4yrmJ33XcGRgYD1iqE77a8ogMPXTcTFPjeZBMH7XeViQedvrYr2bA2MUYm6acDsy94KGTJBJhjAdFB",
  "key42": "51HETqK3qztpAC8qG3uQZZo6xTgZwYxjVBSzLz2AREo8mhrSEPQEMHnVCkHnTa5Mw2CK7rpj2NYqknbxfoT5ahDy"
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
