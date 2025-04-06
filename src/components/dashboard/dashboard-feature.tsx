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
    "3XfJFkVrG6diraFUtkubC74RaqCsZugdYGjX9jcNkwTQptCwuqBBCkdN1YkfoQSA6rEDdmRbf5eY7FouUV7CmHpH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31j9xCsXsXBMAiQDfSPNRGrdmxtLGhzYThrVyfcF2q7Ffs6td2QPM34cu8vEzbXtmcTxavC7qLhRPHTPcdw68Ay8",
  "key1": "4b15e3XUQK47aP15PZWGMTYbt1ia3MqfQc7jVQnhuZsjWCBqXb8ZUZPPxD1aG7bay6zighJzQLPT1ghRZNPTP1fH",
  "key2": "67PHrPfK8ZYgE9Z6hm35KxXghU7NKwpoczmbDT9npVxe38idA6umFDjDJKFKiYcM8NKiPB57dF5BNnhE4da5Goh8",
  "key3": "4SMY2rnQrt3Ug6qwXDe6STu2eCByHqWLrathkNNMg9TX58XHY5jHbhtYLdyb7mVtzBW1Vb7yWmnLmTWhp1vaamjN",
  "key4": "rL7nXrgt35rAijZTHJTo1C8naeRAGyUtZioBPhu8YbCXvxT8nd5L3281E9HkiJtBKRYf59JhEgTRWMizG6whi22",
  "key5": "24m9tAjg7mnxqqmx4T56BRyBBiWK6gCsJkgQyBMkShweiX6yMR1sDV3yjTv3oL73nvxRg6V96NU89s6pLveHWEis",
  "key6": "3fgZ5syWYtqhXEXpiSYwwFKub9tnfCV43QtAWWd2w2Fw7cFzT1bmBmSjbCycBERNS4SCfswtjh34FVMrPbKbQFHU",
  "key7": "4D3UEgaCHWPYG7yLhkdkpWQBxQMnfV9MCybfm6G9wqsUV1HxQQhFpoBior1sbxNj7GqU5ERLX3nbDZyRE646PogC",
  "key8": "4KdTEegiBeLKTtXpcHB7wbFCFw2kfjiWryu7y9UGFUPCRdcUUQi5YHVnkbfnCoaj5hjzUWi3svVp5BaqB7w7e6mv",
  "key9": "2t3vaHCSUaCcCVKnNd5dK7Hfu7kXUWjW9KeUEEHAW7WdL3PEaqTzUSmPiDXxqM3nRdcuaJwBC1P76jf6A2RYnTg5",
  "key10": "5qf3mhFPQr9pLKkjpsWn2DhuGxXibNo5ecA8cxXdd2qPRWwynPGs9E2W6fxCPbFT1F7tJSUwxm9wcJpRc5aQQCZx",
  "key11": "3m2EJLuCjE21VS23muRcnSojFpEqSyGLUEvE9qRMRFg6s9RYNubejrfEvq72SeJg7HzqJZ3SmJbu4EhqUMr7hRkt",
  "key12": "4ZhEuho1ztv1R5a7vc6zF3z1y5z2rDSt6UpfANJqbBfv2ZVeE68LRdLNjuCUJJo9r9WmwFn3Sk5GMpA9t9h4LL4a",
  "key13": "eUm6xyimN5TQJBLV4pzHNit2xVAt5BS38C3mFVeZhHorzw4CCcQCWzDkpoiqoGf9zC9Y4Ngi2KWk226ppgRDTef",
  "key14": "5ez924A2axgMstFmmvX7e2PTKBv9fXpppVZdtjd6nHJ9KMELLFFj8jMj5AyynvoSQaaWscCS5Hnn537edsZxiBwZ",
  "key15": "3qFGs4LdddRkx8BKJr3fHDwQPJCKjEGReaqsd5FRGcPsWdrmieRdPckK1Hk84jHBpUrDNttLUJQDZe6Qjfmo1Z1a",
  "key16": "4Pfv21o5Y3oAGqG2QM3fTFud5HPnkxvSU8x8iAei4jA2ZAcnaf5WT67zxrEJuWU9wHYnamtcofeUWEcKAWwJSWxs",
  "key17": "5WfkzLa5rY7pDi4W5soBYX5fYjPwCCmi5XZAvqWht3H5XktpcbDiBc7YLoYsuzRCqpsYFaEsTCU2MA6B55rUu6ee",
  "key18": "xmweXBFQVrJnsL7geG5JshhnfUf852n1fVNtPWZN6A62bFnXfYKLQgf14sMgCAaREVxi6WqQgXtd1MpfHtU5jzC",
  "key19": "46W4GAs3cXscRbLchSCgUXyC1Q4ABvhk5sZx8HgywbMQJgP6MNw5HCYf5jYcgTzmde8CkgRNemCPtDS5FM7LrYsz",
  "key20": "4TqVATrHZ5TEdwWseVFskZnKFowJH8ZDS9rdL52pBjFHCmz91fiz87WJQzayNbEwJBHyEUBVnzzqZj4h6B9QiGi6",
  "key21": "mYZc5YEQ31Hxd1nr4hwNaxo77Ekj4gKQCaZ6q9snfBkc4kDY441f52FxGGV7bxNyVPPMRHU5b7bGKBCbHQkZbAR",
  "key22": "2Lg9KFjefBnjfdaFg28JWvtdagG5uFTTe5SJwgEokfpzvnSTHn7dxPLHVeNXMHALJBqH818kZEfsPUhT54zqPiRP",
  "key23": "nUYH1Y2K38Zbm1fcNc8p8ZLdbKCTJUfepCPbFzuEHF6ANEzEE16US7RWBuzcit8cWZgaTzWaZ5uBfcjJDCzjq4m",
  "key24": "2q86todzCKAMiKZfAaUWKZ1qKJL3Vr8Yk2RKb8gXfFALK2L4JM3m4PPbc9Df1Ctfby8zH25RMrkJC8L41EoyZGQi",
  "key25": "4WfA5rWUCDmjUK6bQqZNNm2uP7UuwoiuLXPkuLHXJkjBwLjHb3SA8V1fgzTbPmjP68xYkTNfBmwjcDAUhyUgtjkz",
  "key26": "4uzicBT2ENhp8C83M2PGaQSNxt2xRi7Weax7ekctRTFxey2WbYGK28HCosYoEuC3VVTmDEs3dMLtnx1zeJyPg4ge",
  "key27": "3PKmqM5gTKVkWxDwE28v3XCjx2X2XmJAHvtNumXSYkdCQaahBnWFHXxoka2qwvBGG4pB7yh9cF58sURfQicnB9Fy"
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
