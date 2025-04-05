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
    "5FLL2Jt83bLZsPXCopuWE6zahGALDmR6nQgYkkAivmBEFaxg6KPw3AMf6YAPgRAYN4hv6nToL7xJHUPEsUKiNTEb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32SGRegQSfPfmm6bCMRuZpxdALYeW8z4GuuG78neFPNmAG3YxQi47f9D6sGS5YagvuDKQDjWDbCQADjyAJK8K7oR",
  "key1": "YN8r3af4NdkfCnDLtrPzydNwzW2tYkPNFD5Vg4vL5jAmcg4hgx7XgJHefNeV7C8pcvmFQde6Nx53RgHDtitpEZ7",
  "key2": "393pyxrRr64KGKopfPbMyEmaomnyCLrWbe1wuaSkHvh5jo2mKEZRqs7cnJgUxHQ1519NHT9NQgkUFPuKw2XF3dcq",
  "key3": "5UzXa5dxfE55FwvLfALoYWAgsFDuQf5LDCB6fDVrBX7MEWFCRgm9pduBUg3jwNFx27Qf8L3M3Axx9e1dUQgrxx8s",
  "key4": "2jxcaDzWDyv5XXMkbr8hftiLw5i4eRRCA37BcvNBp7UGs94JwthBT65uX1mwpR2YVvo84Q52EacMNR7FMn9P9a6S",
  "key5": "5z8zu3mB1zQ7fCTibEi3o9jVvGz2rcCegxYQis3df68Z66S16iwmGLhPPoj4Kwv5CTPtj6ShgqbmXiGF3cSZT5nN",
  "key6": "39Qom6M9XMFjbdtjYJbVZyVLL3kzAKafZbsgyUp1j1rF7iy1xJj7zUoX8bJjwqTNWYwBS2PQ9CeHmqxT1FEa5RRo",
  "key7": "5bhEccuYFvjn2WKuknR9sJ1zTAZE2jmswNP4eKzpWbtv6bF8vwBP8acRWRQrttxZQFn4su6iYAWruzZdAANgNEPq",
  "key8": "58abr4VXupmn8YkN6sggg8jcputf5vbjEBJcKfxLjSVzBxWau1DyaADsMtSM2Pvpmy1hEmnsjqZEEwv4ZU7LbUff",
  "key9": "4qTMXFQE9mgMZm57jzg3kP8uXHCHCJWaTzgjLVp3XWGKUbMQVdLvFK1PktkLB31cLbJoVTvy7F22gPGPsZuzpFUC",
  "key10": "4U1k8qL95FQxr7t7ZbMYzYvMvp23EaChrBtn65f3Jh3sWcboahwrTbKbkoRDkQ44nPd8CsCkkURv8PXaSUHZPy73",
  "key11": "4AicSadPzLLKATsp2naMTQjawpSjQkuEnVwLBWWH2RqRs4C4FssecRN7kLceHPXoCjkjayVrwm2Z8KxR5LxcAD1D",
  "key12": "3qUQKdij5EJmzgVewGUBWJhmyPeAXwjqaJJVedhcEaXiEJGqLFxu4crKHD6D7wbYZ4mh4uj32qwSn4jJSUkMnLTj",
  "key13": "62KYSEz7psDcJVLXJwuqDkYtUH8apVo2xZsps8Fq3LrkEjJAHS1GcAgomf92Av8CA5gwTaAP3NAprbJcfKQobEZt",
  "key14": "5NTXscShgPSZuStQcJqSrMxki1yR2cL1JjzBCVgZzzCoXqYc9R88g15sEyj4zaFcEXqnjbEbN7mMWfnF21XAohR5",
  "key15": "532UyiLxyYyzdFiKGvUtPExi9JbxGn4ycBbzfkfkSJNuSAXVngBjDL1GRaBY6tCRa5HLdNeW3MuHe7ZMde9RH7bi",
  "key16": "4nxTaTjvcRxHAmwFXwcrv6Dw3iFrPBgofyX311jeT4cbQwJHi2yx38M8m32S5vvgiohbwPy98tGxWXm8fZo2bGEJ",
  "key17": "g2XapmAUEgbujbFLbNeVq1zjSqKK9rEvr9nTFtBVGeoqENfPs68aYAMpELbCqDmVvaT3ksXq6z9sCYTpM3ZxMdW",
  "key18": "24aVia2g5AXNWo6vik6PLSZ7CPzpokvi41V1yAAigz5dyUR3mQCtkfp9GvJ977RcpSS3xRoHVfdBRPMfdWFJGbmQ",
  "key19": "4D7CcUd1hwAAt6wEU5GX2xfg2KyVmWad5DJ6q8kAz5TwVLG6Eb6Hg36WcDCY2EvDgRJufVTu18zpqTSGwWnkkWvy",
  "key20": "44wUEZ1hCM6skSyGVD1zAkHaCvYoiMaR5PfoaEvBzwo9f8acLu2rfGyaqAL9vhTZLvLrsA7CdmHXiD9pwXDDb31T",
  "key21": "3ihxmk71ChUSGU5VdF9gKjhoFx2F87eRq4Gb2capk36rAXR9Jb54SCB72jS3awBmm7Svcie42TXD5KQUjH4nyAFX",
  "key22": "4WGEf5bBYRCx1yW8UnDtX3scGAh42GswYYTehedu45JBM65Weo1fUCpVguqfB3ce6KnPtxs2xEpjpwTaUKFnQoVX",
  "key23": "2YWwKe2sAbhjDYqPLTEXsike6y3juzUqc6grvie6vw8cFyxGm8c8bikzTKbQm4NeeD255CKaJCWG5qk3RuJ53T1G",
  "key24": "21ychSqj8Tm2BDhJeBPjTuW7mS8LUj1r2ntQv7t4yqn43swZrqDC7vJ1iEurUhQXJP7Ya316WEghQUVN1xR3AtzP",
  "key25": "4J1EQEqbx3PZzMKYMM8N9daD51hx8vW7Jhfwb54GVfcTckUbVYotcsnDcrLVKjdUGwRX1LzDbBufAxRbn9RrKr4E",
  "key26": "4pHmYoiZPRZrvTcJHrGjTRoVnUFj7gKTpkhQ123jgFwdMbLwHmVuoY2c7Jvbse2UeY8nkdUy9YURjLCc8Boafbq8",
  "key27": "4h13nX7txkPsy77ocx4rfLJXsSyBjdYoY2TTtukS6v7qCwBmpsdaqCFCTQDEb2X9dcdW15JvPMLsTLzNR3RM49ri",
  "key28": "518TQoADSYkxqeqnVh2215SJ6w8wGsTqQzrhL3nD9ZJok6r8rSzVm1ZWbBt6U14hPsueHHqcWKJ8TjTDQfKihXSt",
  "key29": "4QQuJpfnB3HyHquxEakZc6FMwsSBqg1LG7PsL64RuR29tBkmjCVMoCbuH3dgtMVoGYveSozVXrPsJyV66ZcdWwvr",
  "key30": "qVin1fs5V1tNckSSFeyTJP144J8PD8wNrQ51pouBm3YobRfFdfDaPVrGnycTdJFcfMxy5oTDtoDtxA6UR5Afmo8",
  "key31": "h4R1rniW5c8KeFy3zZXihQT21yBnxtcfDLjoNizBbV6JnL2sU6pogQaSYw23oh3mWuGhuReHGoQcfFnPFK9nwCU",
  "key32": "4LFUYLCZETizRP3eSYadZcpoTg88KQepNTpkw9WFbGMJEf8QRjm1FUVo9ZHLX9ohamTiLXUuAD2wdKiLGGtRvuxc",
  "key33": "32P1AXcwWjA5U5oQ3pM4KHSiAPv9FMjj4uDH11GrmNhQj1bRRQuij2rx8RcFPK9vVjsubKPjKNE1vqMhdw46CrgJ",
  "key34": "2xu7QLHEHE6EU1P7KKPtmdsQd59U2dSjjjVVqRy572yFzRQ1UU5rKtFhnqaCPFguyr51mYn1HiLt4L42yy3rfctu",
  "key35": "53TMCXioPet1WvsJYr2atjMFquXTjZ5DDqP3kgkT8CncosXBTtvhSpe9NvrqsxrqzaYbPtztRmFBjK4m8PK2HXAs",
  "key36": "4Pj8vP5yjqkWkHyi4rxirzztATq3g6XfiMNP1EH9Xr1g6F8yytqnT2WwBNujyrsAPW2yyf9V9riuq6KxbMmafYUn",
  "key37": "7BmXgQxPeX5CsFnLgYxwLcvdkb7uRTcymNrzkn67WeLNftRthUgePSU1HXS5i72tNyWFUi88EEFSywTUKm1ybjS",
  "key38": "2ZCAR5KaZwyEAM27wDmJBq9zV2ssXHFUbVo85yoC4gSJPAyiwsKdsDXqbzWXkaLG5m6dpbbaDHpUUYWUrQa6wN5s",
  "key39": "479HpP9TStriqLxsQ6zQ7XrCGkPEcc4AgmrXvFpq7iA6DeTy4vHwwnupnpVChvsWJrWmoX5UGWKw7RJE2GXQxGyF",
  "key40": "B3YreismsDFnsEwUeMrAn7mDH37aHaMppwjQNtqdF6CFsZV8NmXzLu9HN4ynsr4x6cd1hVhYSy1KrAuVWMgu3pr"
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
