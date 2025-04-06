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
    "2swfy2rwXE2e2gbm5T8QXxwntb1RAY1MM1n7AuuL9rz7UoQiMxP2Byi3pBGiSyU3zSG5tD2Ac9w6woymiUGgFXBA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TPxJR5ZAsJ1YuT8RntxaA2R8ApACvEmRLXy82RE6Seka9VAo4EvDxZNVUJQcubs7c9my1HAjXRiKE3ZwSJvu2QL",
  "key1": "LirKFXp7T8iiaSz6GqeAUhxvHzxMCLqFksRwKTYKdoHrS6gMeikP2kWFSSRQMMBtK2XRSZcT2x8wWQyxS3pHEs8",
  "key2": "41h464RisXT9EnR1rzegaFH4vrGn8AdMTw31kUeD3pqCNEki8Z7QUXP9dbMoj7FbhKrxiYTdUWoaa9v5MaxoMTjt",
  "key3": "28i3XVUBW1LCkFPS7jEignRM4orNQ8j8G2KuLdxbNHwrTdmNPfDK1hMiBBL5ajqkscJkmZwg3TiNLxvKW3mAaVHi",
  "key4": "VQcF9h3dhhk8PWXDJmUaCpHkbsAx2C6cHxM4yXzjejnabQsQ6qdYzbE8pCguHMx3yXGTrESR1fk738ztADgrqpU",
  "key5": "3SjnsAF2ySihYKaPBVAZuDJbZX1SWUxk4VgavhuqxaShkzXpX6Cnbo9edZFx3xcTqAXYKGVri1SjmKksbSSBdY2G",
  "key6": "4NRFxgT9hPNq8NX88kWhtjLN6egdwmtbFWLfiNFcoHnrT3CdrESTrBMCLwZQXxQDE2jqaCPrV6nb6GsbDMAGaYsj",
  "key7": "236Bmi3aHJMshRvZHC3J4oRtK2g9WqZicbP6eKY9R5hK9pwSTyneA9ng9HdpEnVbmXGaMWaDnAaSx6u6Tv3JoXfB",
  "key8": "4g4AXSjxFds7mpdb9n9jyAiQkP1x4ptB6uGnwYBg5frdRwrVNYHNnwnEUQWqkqXm7RLTa4UUS78YrKqysN9wVhMn",
  "key9": "3Va9YUiSD9tcTKqzJK1v3eSHefUtXbyJZjpKU6semxLbJSEPgeJyDxgKHew9uWrVBs7acVsc149MH1XHdvA2bkg4",
  "key10": "2EqoLwAeN3rM1yCxoDSP5yFi7kT6cLsM2PCoZqTKQG1oazxMoKVqd814gKrB4cjy8XWLzGDscLTrFbvyYNPubxLg",
  "key11": "LKyhP5AUy7X2y7ZTScTKGtWwPRERABo4Gs3ovQSNyPZw1HHJGsssTiaACkcHuNi8uYHgjMSCx4EiuG1QwnzbEms",
  "key12": "2XSkeX6sKp9miyvXoVrJxpKYpWZHs5eCAp8aLP4X1FFAYiPQDUJfVRSJvLitUwURfWPgV1BJU8iP9cNBsKKbgwHf",
  "key13": "McF2LXNEMQg6bznxhQvrLFu1m9k4181PZRUq7TWMJQB9CisMzUQjQKfJb5BMsUQwSS9yyUrKsA6Fbw2EowgTz16",
  "key14": "2y6KeFdDdTeL2qx3gSePhCTVY1V8qWvkjaLGHJpFoeuWm8D29MmgWS5bSPWS7PNJHkN1LXeWPKXtsVqZW1cewtUd",
  "key15": "3qGzCpQc5tTdwpwuFXbgNe6zzF9aj7Z4U1wAkCBrLu7u5oZN87dyumXcegFyNb4wbhyu4fa1EwmEgSiinV31tLKi",
  "key16": "3jHiE57FAqvRPATJgQqrPyFVMvBKBRk3jZFSKe21ukzsaBiZ4C6P2SomBdqreQNbDjGuWhDuVEPeRJaE2fdo1HVm",
  "key17": "5vdjMc4gmHppjx5tTB1Ed8wswjJAedygKG5eqorx1ZwRmcyKYTX9Nk5GTi5yXSc6JSMbm1YzvA1eihVQ47ZyrUNm",
  "key18": "5EGUrKLccyXztYb4h7sxN5B8RkuJtbYFixUM5cebsSMpYwPGHwFYQQHj4CK1YPmS8eTeRC31dxfZX7VuiE7Sw86a",
  "key19": "qZgSV47RTpm9JmNfXjWMcFxYo8YFuBS7DbL2pKs22rgC7ajKGfuwjiiVtMRBgkK98zdTUF8h7dCpJw9JnSq5H3A",
  "key20": "MmVnfMFBTuVeggnQycaw4j2UtYfyYnTcS9uemFV9tA3o1FBtsDLTyRWP9uZUyZz7kvwEYXskHHYpfurEyKyxATa",
  "key21": "MvHiUiTyyshtkze71LcPjhQAu43YkYBvaFw1SATjLvdr9r4HmAaUgzqo6RnoYZpR3yZnMno3Dch5rNeKp8BjVm9",
  "key22": "4uqvZsmR91P85oFMcRBFi4SUSwUvYhNZxH3arYPYLUTcAdMijKxEuz6fdP4kJGXQ1QX7FLJireTX1RtZeeEkYy8x",
  "key23": "2UXxPJMDvhWmrhd1JqQaKZ2dPmvHSDwZ9Ep1L2U7xgTshocnJiLNe5MDobX7MmquAfePHTUFFHVJ8wbtBDeMSBvu",
  "key24": "5GUb4HHQqefrCRjx7LBsuEHcuqw2JWSxvot6sQRPgZr32Q4SaqCkQXR1xmVa8SV78Er2yC1P286VLewJurhVifqB"
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
