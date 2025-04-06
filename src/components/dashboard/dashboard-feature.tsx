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
    "2NCVhSvoRwW8TVtQJBrZ8m9R9kiXPSmhjEBsh1bNNq9mLoybY9YCjDj2NhxKDyPjtwac5BeT683tCadw5vYHpPa1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uof8DK4rGCB5QGiwSUP44XDbFUY4YM1dS7A61r6E8bLXy2GN934s8nn66FjcuDJmr47VmGGAirwZ6ZDDqz8qMMH",
  "key1": "45dJB4X93ANwUmAiJ7j5mU2eFnLPKmCUUM7pCqYC86Zm4P7NjygSRHdDoncbsaLRZrGQuQ57o4MLGJxasqJspeKs",
  "key2": "2pa4gyPsRqhkx69GwNUWjoJinP81aJVptzM4zSrWCw1mJFKpnfXyy63Ju2d7EPuJyXqzEV2pb8ZwhajnjTRd91To",
  "key3": "3Ndhy6GuPB4hp99mZuoYftdHLoJKWgAt8HgnUinw8QVCFbLmER6Wru52RwFVKXViN5FQovM8rD15oyBobqCWXjB3",
  "key4": "3JfAr3BPrZpLWipQLtaGmFj98WcgnMUhWK8gqaZyLv25USQeEpQEErh7r2b8bC7THwfAEze3KFeVXkM7MGxuSSYs",
  "key5": "3bGmphaxxwzFVrzRW2ndNz8GYwvRZVkfVr9Eh1YfQHGygRZha4vgZU1fwfWs5JEopd5ydww4nQUG4kbvS1BXJ772",
  "key6": "2vPFezyEFMueapTwpGGsppNLb1dJptoddugXTD41B8Gn5axjaEhFFBXa5HdzadBqjr4GZhpf78xtFXmM7Xckc3dh",
  "key7": "2Wy5mGpdyRWM4f7zsVSPmPtX9QdteGdV3ZWqXB3H9uEcz2zEth2FWPq11XC7FpHm4KaZ3uTQiNPtiDGWVaxswPC2",
  "key8": "3uCfLaUarBaynhsYpFy8yLNoAVBFC5WXk3aQVXdZ6oQCfU8T2vPCibGuScCifHTL4YBS5zwxvAdCRbjGyu4Daaz",
  "key9": "2JXBMjDjVWz2G1kAkfLwQAj7Vwar6vc6zM2LnZtAEXTyFXJLbPRGN7YckeYYgC7unVj1PPxuFikXH3oKXXAJYDzP",
  "key10": "5jN6H5DqCcepyikhpqx5dVdh4ZfboTbf7Mk9gH8G2o3XQ9qotWk14o5kMrgWfyyRR79RMj7izoRz2bPswEj24KtC",
  "key11": "3QdeQCAn7998Qaj2d35jN2MFKjveWoMneTdZNYgC6CGs9HGfoyY9xwQRjBwQg8Sk3iWNiZ15N8F3BgHgUu4ffiVS",
  "key12": "3zudVpM7uepPWpsHrvkwfPmtCvTbE7W7Dsz2x6aQa8z8ikQyjxTUqGFDZJMr5RYrtSm9RW3LDP2KemG6uMdFR7GY",
  "key13": "4CL8Rgu6ihCRuVUVxQKJRj3Pj3qkggNYu1AisBbWRRP3M8z6yX2LvuD9QUTP6L8ubnHLCQkFfZNVPHbx6WtuLuD9",
  "key14": "3gSLJwhG7Crb6o3dbfwfEqyYKJym58QQh6bvhNHUk3d53RHVw44NaUg8AMQb27x9dhMVB2Nj174a6qTKTkWDxTzf",
  "key15": "4vHQR5t1Wq52iY8aNVZ5xc96zYzKji4XmxMitj4ZiGupDNGRyxg8fqYgi4Rmnd4rZKvZgdEmvKiDtJEqjAqi1LtU",
  "key16": "2zopfQAV5TwoXNN7ueasmj7BJhR2jVwkmMWwAEDgFcjCym3ifWBcgi9U669rNaJqo7S7YM7QctPipa5nXvWnGUBz",
  "key17": "5Xwd2ZFJBMaQDB9S3PaZNB9wnL3N3UcaeEJRiuen6RBzaQyZsBEjJcpdZ3NR5iyXCiV49NFWoPRhcuC19Hh89qFE",
  "key18": "4ksFHj7oNZAC5vegCHtv1y2yiZzrPP6VLy1ASHUMCeTWck1PJYmSRj5A7KUVqDM5tVCTeq9XGGfUhNAT5Rg1XD8Y",
  "key19": "RJRsSUunSmMe57hWRhz9xpUQU3T4HDWDT5R8RkBTrJS15jYhJ5fYTvJcoYdZmmLqP2senwLnduArWZnWA8SkBWD",
  "key20": "3jsZkvxnqhx3BiH8EDGDmGy8TVDiQChsXF541rb6L7NyHvwhqRt9S5TutLBX3Tmu54CmwSnUcV63nJEKkL92udb",
  "key21": "36aLfq7RoGGQY1MWFh6TUoGhPDSWaPC8UgYqAt8kb929WpcBiqG9eVCk34YkAW8rmiDb25piu2WP7qLykiijn1BD",
  "key22": "BZa3zqRy71jwRNcYH1dVFQ6DxYLsPRbG8SWLJvJxjEpWradwPZbCA8bqc2U493UovQatioho8sKuU1DDQTgksB1",
  "key23": "2HUtrtYD2uqEgcZoUeCyKbsfJoQHdNTsqfMbouvveVrigKzeM4JVPBuw8nKfmW1h3jrEzeDMSi5nPgLRja3vFpHz",
  "key24": "3ZjDCgwm236eUZEtjYTsHeVt8fJbyS4N5DcNtxefSkdon14CnRvnUzgpmgeSmYfeNUPdGH9yKADEs8PVgQCtAyZm",
  "key25": "5EHJVxBFyyXE27VaETR4vXBmtNu8MUWAWwNWoeLFCS5vkQj7BVEh2ttwDQoaLHc4hDhHw3ZoRUWNGjFagDK2YL9r",
  "key26": "9JyPpgMtzH8xua7sTQ2jxJxXMnKfTfDziZDXgvPmgpGAPtAeEgJf9x2Jxy5xETZ93k7TTm5WHiAitBBhXG2HZbs",
  "key27": "4SaQ5bEi2JPU5v3eqGhxLzNLHBScP2TcpM3xaTdcKMMe8s4j1k9vZKC6Jw9f3vsxa64hQrhGKY4HrmU3vyEhdfDA",
  "key28": "2GTqUPA3hAr2hgWKcEan9AQDeZt8QvTtMnX9r1Ws35CZ3RfEJA3RffA913Ao4etLXgjRZtcoksAH2wMZUrkvwn5v",
  "key29": "ToptinSikjYN1ZNLtvKrEs7NsLYNCxiBhARYjKX9Mgcbb2EnJo4m8Was4KawdJ8T3LtvHiGUB8ABurugx3Hio8M",
  "key30": "46CF1XvDg4MTNG2LCZML4cSFDUeXw77aGZgc6hpX2SKt7k5BcrbZwyXWkaWuTXjmsbhERVPubjiH3KHqQbZtYko3",
  "key31": "39CdYXpkks3s1mXd8Mzy9adehRzwi9dRWDkXHxRZTNcj4kjDmGWJv13mhigUpEMfpWgZDWG8LpqgDZYKhN2o5fQD"
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
