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
    "ocDodpLJJUNTreto9c7QEJggwVYx6xoJ53CG53xBxMYxK1KHHnpLA326HbzrJVQT1ndx9iXrQ9CHkG5Ngcfkve1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DAGTdU8VVMZHBLtMkoP4WZBYZjgenUZYURNvECjroH8DugbzESs4HJK4FzdZn4EWnQiXSDPcR88oyEE3LisMDJB",
  "key1": "4P7LYh8Z34HzKiurf9syPVTe8JYuUM8uH4KxgyHLwMcjfA8JUoLcA3M2amZr69GRaUan8j3oUGsMM1a2EZAjgK8K",
  "key2": "4J4Ec5DcdvVPJsyqpCQNuCrUJZfzh7S2SLdTxFY184ygZysNoLPPhcjxPoAZqg9XL8JJVA5ijYDeWbKB3WmwSr4S",
  "key3": "49PyR3tP7j5g69ijmT5M2JQ65GHadN161n6j1ch9Ga5mUPw63VD5naguy6WJKt7nXY9KaiUjwEkjbchdbtWZ8WUn",
  "key4": "FdX22xucepy2n3HXsdGQ35CTCq2wnrC2pCaZD4xdQo2XVfGMLUkoaTGU6Ukv3vGfJZYSvHPhhBs31zVxNeFJZFg",
  "key5": "42iFEzwwTe6EvAZWpEspuFCMGguRXmS8ZZBYnaQ86n7Etzb9ppuDErLxmsLhGqwjcDvnhKeE8gHxrdQEFmf7KnoQ",
  "key6": "2BqSNQMVYEwgCQnFyXtGN1BRMh2jRnCcsRHH6FGbAaeYVo52MSX8zHBYzxMtRAqYYChLavUn59YtWAMQcgkFKUVq",
  "key7": "3DirmKtSLdV8JgsVm2he9Y5JtJtGd89TATD3124JPHcfciKRhmzUcSXivMLmSQ8FPBHL69Jh9oLLMKsnVid3w1nx",
  "key8": "2bSbUKBb9fgGPMSp6acgoKKjowUZNuCkS8nxm8YZkeZ2dvNHVMZuyHv9x6GvCgoMgwwMtaDPgJ4MpVdK8xbzFm4w",
  "key9": "4yh82MhjiQc7RGWeJyuF2TinoKLS17NwZNCL7uo6eQyuD5y2H28NFaYRFSqfMg1ExPjDBC7RYVUrkDqutr3eeubU",
  "key10": "2goB2VBVyRf2wE6Ti5kmpr59oD4xMnkP78RvzD6gLxiYn2X2jUy7WYzAUqfYd5MTisKUFgarMVKrGmQcseGLLiEC",
  "key11": "3CPW1K2NbaiAFq9Smg2ET8fscYVmzanxrxyrNELjDU75qpoyzH5EBRp94LRxikFtyQRZ1h69zQGXyGxsk95fDbGm",
  "key12": "3JXoq4w7YrGq1g59NiXshf54RuzACUHNhgzhwpSVGigo5f6JFZUfLbwftw8pVHB39zh5PTQozuWSPbfxHtmybrng",
  "key13": "2RF7tyQg9nh3v9rF7p1WsA2weAvaS19Zs7YKeMw3uQBBqJ1gfmaJXgBQ8T4nDDjsgTDETFcQytA3AQZXq6WVKgW8",
  "key14": "3QPgKbHS7VqugwoMMhpucNDN3ErEChZDC7niYaP1fBjDJ1aj6dE6EdzPKBjPMaSPyCzNcZMbBuUhEDAssic1oPuv",
  "key15": "PT56m6ajFR8et471MWSeazyqpRbPJJxfGdKgzRKGrZo9uXSbGjVG2TSECz7htZg7bQoJLsU42uXVrF6y67Bv6uE",
  "key16": "4Vr2JEkdoRbB5kuH4c46iDVksu3Njbyb2axPcBJNehv1BDCkYdvrruGMrLo7t2rhYUvQH9BRJUczj9oQ3CSQnKon",
  "key17": "2gjwCL6CjDfi9TCbECbEPC1FBz8Kz4mfSVZKhZqKPJmZ91WwULwvpyW1SPztL59RFmWzxeEE1Verf2X84BnUKM5K",
  "key18": "2sTeDkt8wTfHwSqijsFDFa1L4YFoc2cZpvuDiDpt3AXTr6UZmHcje65ozmQDvipHeD1mPhBKn7FzQHVwydnwHbYq",
  "key19": "hiGqekdKCJ8pQZNgtjJFE6CYbUTE4W3ndemJtBmwRSt4a4wLfWVVhCbCSNVaQE22RexvjUenHyPGPLtBZtGVWcs",
  "key20": "PXAjjtKiPXFKuD2Zej4jGAmV1M8MxhcBQKErLnc12hoEWGaZ3wj5WGHS6M3n4Qsaj2K3ALbWxN5rLjijViFAvWZ",
  "key21": "5jsTDz12qR2jPmuLtb2mP42onp7tC445hjR5DRoZWEHorBFu7KGRG9VTQQEJ8qAXC3ShXRgWWEqEp28HsYE7DcyA",
  "key22": "PMybLEVayZvrDVkGCFy2KX6SGJMkLpEAG4E9VVFUoigJA4ZxcXnw5oYNV6kquSvWrAiLNEZxanspgGoPDZMD3U2",
  "key23": "33LuEY9HnTh7VMCmdDfvVAj5XKMVDBK5LHY4tmQB9Amy9rdgSamof4CLDFAhCd2ntz44wTPL66wm1ZWJKgri3F7W",
  "key24": "CrVsRYTGcWzY33aJHcJRaesNs65gZLtuibjw8PVYVCQke3UG4f8rqTGjEb6VnPwMYQHRLStthF6LvZphSQeLNM5",
  "key25": "d7NNABqUqBjjhoAFqN5kb8qQyxktAEC4JvPmwyeN2TxLh2Sv7k1rULiKVQgvym1ToUpouqqQRuznGz45CnQDiG1",
  "key26": "3v8rvM2DsqUq2NSmk1cpJ9YBqsrXMNxTTrh4kLMg7kHhNdVW9MU4UxaCs9LuPUdWw3DL1V9hR76vJiV15aRdQFMM",
  "key27": "2ns4Jh4f9yJteT4stF8A4SEJ4fsY176dfsbPPeeKZ5yDEWtjpuo7WTM8WZ6o1gFjiukUuJny5WbBGEfPfV877E5A",
  "key28": "5ZyvGy3v4AaDk18m2FxD6A6zhCsb7ToHk8Xypvuzjqxn6y5ZvFLbNks18P7QRmpLpZxMxoLsZ4as7mLABMNXvq5w",
  "key29": "41MDCeSkVQdSrgm7ttiiX457XQbGctF2CoAJJpL8KctFSj2C5RYPcM6JDEWb6ggbR1toymTp9qqupVeMVbHUvokq",
  "key30": "3pv7gMkk2AQAP5qGuAs34ftdkFAoJLWpCts8MdYrgMftA18UiFiRLq6okS8J5uKdxARrdWDTZYfz2Vo8A6KSMdPK",
  "key31": "3qyBX7po1ekjG1Vzk5RT3pxt2NBgMVcKuW9ZqYuJJmbJuXmDz5H8ZyzuAUNyuA6mo7rT5Wf1foyBFC2uTSsVwTaR",
  "key32": "359pZPkDED7aDXQZpPt6jYva8vo1dtffSNAA6ha1ZUX66Sp7wPfyFxkrB5LpHzGMVZWdjiFT7haPyPhmBcbvTvrj",
  "key33": "4mJ5EDXg4uGi5KC9Z1SzXJBJ427KpBJYMej498eXDBWD49dXcxDZM1ueskkNUWZdkkPruoC8KdSe275rcDp9supU",
  "key34": "2rUps6P4rTcGi55b31WtkYbCEDi1mhV9JbPn1ikXHSDmH4uoYUVu2muvjfdABTd1hXmidimwFvetPQq6pSUGTKSF"
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
