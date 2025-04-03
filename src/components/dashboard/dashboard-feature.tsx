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
    "46nNjesNCHFuZPriA1qxnpQRb3x8eWYXhvJv7V5KvSRyAs23DhXLpy3UjciuFLT27FrVyMx4Yg4EmJ3knta31u1A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yxw8qTZY4jYK44eZkDKVQgq6GSHq6VTnnW1rX14cLXiPubSAveeL9hr6ZDFrWMiatGMqUbKEfoyLpKLv5pM4CYk",
  "key1": "5MVWPueaJknvT5mzzr9JiFvVAUTv32ArxFj4CS49rHmftfZSg6mGXvpvEofhFEkvGKK9ZBBExDPCRwVFAEMfbmD2",
  "key2": "41NFeGzFJcvs2BAX5AGfXc4gm9L4eMUN1iKRyJciPFBHEpWyGNwi9HfndQZ1hxHoS89XVcy6pYiD2dKoUcXQZpRt",
  "key3": "67geZtFpDnAuQp3Jj22aETV4jWkBPYwWKCTBW3WRd9jyQ1zNE1gfZh6wAAV7XtFfkAns8N6HgdQVT4VtVfN7ovDn",
  "key4": "wcFrkCRRwu3zitg5wUStJ99ndqMwHF4PnrHVxBfcwzrMhXL8VsPTcPFQMVcYCc9WkHX7YTFgbnrJTuaiCc9bGuP",
  "key5": "2c1qP19yzeY2r8A6j59zKMTvF77AYP83hVeMpBjQQtSqrRkdajzRuPDRHDWaTaxYn8qy3rqgcSEynwYU9brc6YcY",
  "key6": "3sjtJatCeJzqGmYgDrXqaGjzUdRdqSzs3Di9fBkTAvhVnB8PuqUzmpNsvXafaZn4WAuPBCUWLDvtgXEGS4Pzs1Zw",
  "key7": "3Dk5wXoCPqRKgvg6YhJmsVZ2GinL57hd2Rac6fsrrL3KUgKk2FdmeVXaeFXTRut5bumoqJQK9Ap9GKgWSdcBnt9D",
  "key8": "51aJCXresdMETnFX3tjZ3Q4VqAXhAbU3NjUiuuv1fNiHPPuuyA7ieHNPka9NZ32NLVyPPNg9FqdnndSkT57sF2c8",
  "key9": "sCeGx2wtzruzTuGyDUJw9vdfV1W13vPkiXN6JWpc9WK8g4rRdPrKVY2TjczkYVZQPeM5kJ8ZGwbLdPNZsB8WmcX",
  "key10": "3K46NXSuDiZVyd6342xFwPvASwi3vGfdGTPM3pfkSi44inTif4edPSUuhzAKoUcQzhCQqVAhn5Fgom1qnpgBn3hm",
  "key11": "25vqsbRYFoSDHVishQUwtmSgxXJtAaCHDKv54N2yjtcLNtwKvnQuwCFQWZpg2pszUNw9Xd8kDM21M7mRicKQsdLi",
  "key12": "4zRXkJTDDVZ8TzKDyARLK4vyGzyjtB3kCtqK5Hg222kRke5nso63zCXeqRdKVbaeBuuTtpnaAPTpP5JDvnjRNivu",
  "key13": "2SZpAJmiy1eFFzSQGuWxfPbqrjWNxxRvZzrtV9s7LhVGgeg9xuW9QGAbtqhJ695dmi8ayXZ25KSoLrE7rGKHJRs5",
  "key14": "3uakX6iQ248snq438jBGrawjk2PdDygi2JZxfM8ikh8Mm5toNgLUN7H3xpcebhWdJR87ic88xjhNCdM3MfhehMwC",
  "key15": "5y9FHJXT6pVUNhTaK6h96CeuPVA9J2PPCPePzzL4uuU3fKhhPhjD26QV59S58NfhsoGJ7RX5VQ2c3f5W2YXqUiYC",
  "key16": "TiUh8GjAmsjkTkNgXRhHB2vnzb5xu8muJZTV88s5ohx7e9TQap2w28evzcQp7koQQdqapwvZhiMr3V6FnBeAi1H",
  "key17": "2R7bB2qzcF6KaNiN4CZqRCm1e2yisifnudfXHEQAJFgx6cGB5acwErYSrCu8DuNhQWBJvsYK4BCe86ArnPMoHGU9",
  "key18": "HezFG5yvrnNaDrdYTzJZ3ocPFKeDmUisGFhSu7kuwMVvbUmzqsmFDzmXJHXY7wrqmFW8hyGCoUpAj3ECvX8WMzq",
  "key19": "wE3snpt848sDHWfikbk4Y7rxZTJuBfsVkbqRmyMxAUAUCBDACs5Hfv4qM3VgZaEVdTPb4MomtV4pWanbG5B1wXY",
  "key20": "2x4MtJodjZVMHnkpV5DAs8eMh3cxappykp8R3Y5U71Vi16kdNpQNCR89xaMRWZsutccRaNcvvgyqHYoEJALG7ont",
  "key21": "3uKr49SWt8iR6Myqz6QEXr2hNUHNmCuCA3UG4F7f4bejRkSPth65YXaS8sUqpWCu6fq9UrYjdqt1N9sfuJGDUJxx",
  "key22": "2zcHTPxkTjLPcJDHXTZoqjJAuT2gf4vXDVCNyAXLqFzX994ktPU4RFyJowN3Zw6c315FuUG7dxuSPD2jYeUmKY1X",
  "key23": "2bAzFBKBCbztWWwScU4HtbGyDqEeus1DvJLHiUgm4dUwEfbAAy6pkj51CRisu5nDHQ2HtJnWxp5R4UjKK8NP6uAC",
  "key24": "CVSp82UTf9g4swRwraxRkrihmJnJWNhXVWw88ehyFjaYAQUK2Qdi8PCY5BfkFSi76fibadhrwDTwti7jWyNpowx",
  "key25": "56fGnosddE7sSopDM7v3sPWimijrP46yFvqNYUgXu4D2TC4ewHXZE5qNwHNb37JAmpzfiHbk3DLzbqy1MXfztA1V",
  "key26": "5tRGAEkFr86KmWcDMdEacgcw9mzMZWBB6oaQM6SfvVu1eP6JsgaAmBMVCp4iFserCC2nRsuZvqpNqNxexy6U57QN",
  "key27": "5cCznEVMdBjbyyDsjzwb1ub9prdPZoBtJGB6EhKoVqPvyVa2ZwYZMGdgHFPiJMzuPTXKEXgkUckuKwknoFjsbG7c",
  "key28": "3KeY685Uq7DXRjoW6xA1XQc6k7kySrtgrvZcn86uuJ4mLQp9qWCCFGodBxiR6UEmQxMBXTXDiuFWiEaqXuAwbYqA",
  "key29": "5JsP34iN44ALcoJ6LwcQvX69QSpYNcv7GwXvjnvkB5QJupZPRMWCDE2Da28FDip9GxsEjtWjsCkw2yZGVx88SwsJ",
  "key30": "2kYCc36cahjWApybP1tqb4rxHYjkQFruoVzEESfE2GGgBscQWosRMcbUjbDvvtTdgMutDY2W2rHYhwk8Umuxh4FG",
  "key31": "29d3BWQpojT1CtXizdEoPZJpCrnboBkFNZsixbJDkpuxd8zMHcst6BXcYmJu9KBat5XeaMtLpa1FqUB86jdQHSCf",
  "key32": "4HPghuvvdxxH7S4MGSJqLDDyPgEYfQVNsokeaEKqiFGcXqstVBRBg87j4fTJMXA213wgZqyJewZVmAAmz9MW38Qn",
  "key33": "24LjxqbvHwZ87ENMgXiSrERDQBFNeG1hAEbcNKYjw9SCgixDBRhj37LjRJRzsj4vDP3z9Rq5qEtseJzLNwQ2fo94",
  "key34": "Ma3piYaNdXbBapmcWfCDksZpEN1GjVagWRVKSt4JE5aKrjGUi13YZp5pGuNpadZuPWr49Xuwi2wAANiy4Rst3YV",
  "key35": "qvyBQR3CrA23YbGuDhXi5fYEBZzT7qE1VMMFJSTSnC1ZMzm86po8mNMet6Ah5WC6uNfHzNPc6z1JgghiBwzX5pC",
  "key36": "3MDiZx1e8Nv7dbpSyt9DFmWM6hdSCDX8VbpC65feDtdXsp8cMsxAuewRwv38Vq8bHGt8ztpYV9B88hXHEFnE2y4e"
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
