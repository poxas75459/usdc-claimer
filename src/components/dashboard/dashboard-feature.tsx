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
    "3QaG6o7mMK3EqBjJLYs5sea2F5sTh9UX2Pm9qehdyQsDHvLPotXJQNECynXVXWanZXNwVoKVDNQwfAWiwVm9hgG8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AdnfKxzLCk2uqeAbkgQbBKX3EtCxLeNreZEUkHunt184D8Hxq59YxbJpPoyJJnMbwUUFMXoPQwkZpeHMtgsRPL2",
  "key1": "33kc83GpVRNhMhW2AqgTQgQak62MPAEei7cEPxg1T7pRKgKX2uQE13L7b1ehpF1mQdVYPqpSgzKihNjZvUES46wT",
  "key2": "5uidBbkgkkQ7ASDr2NR1XmBgDSUNdewPTjDbtG39BGpaPJbAC4iK1Mgwy1MEZYQSR2xhHuAkbbMwQGaJE2DaFK3m",
  "key3": "4DwFUL9souqM66J13xLXvo5uTYxLBpeWC8w3WB9SCkkZZop6QcGXoKNJWfGhzrkrcioqYE5urjSMQHhk5TKwxnrm",
  "key4": "3dwT1ctUFVn3MKXiYHkRxbteP3o74yM2Njqbs8RRR4T116nFgLiLFuDKyasxhkqTDvSN2rtCMgt6PFkEx2QdUaed",
  "key5": "1w7XJSfVPRX8QxpTCmUESTpaVv2g9tXgPePzdK1yTUDaeJGfRDSJLYU8Ra6Hk5uqf8TzbhN2bxEqQheCCkXnp6r",
  "key6": "4bs42RUcx6Ucqpmyf6VNJPXJLLz9ne71CG66WSCPZi28VLKnV75CNuXwu62yY5H6S6m68HdyBD4fHjy12QU8RwPu",
  "key7": "ZLgPqryzVuXNmqHsDS1YshHYSNEkg8H14haKZJEgxc56i7mo69M5ByzJQwGth4mRMPnwBgpSCXo4r81U63h6KUi",
  "key8": "4AZ3tnMikx7gr1JDGq5x5oZ6niabgfTdpk1cJfpWERKvZxfeqN8a6dxkVZJmsLQUT8U77hSAS4pnoTe7b39AVqcy",
  "key9": "2WHxTXfoAFFwoXhRHxDfKNfgZGv6HmETyvX1P2Zve2RSBr36UqjoHc4729aELUWiwh2fGtgw4mdcn66Z1RSnFhn5",
  "key10": "4GntYautx5ibpP4hjva93DysGkj8FwD9kEwXURa7cAu1wgfAejnmxayN1dLbCc3d5hW8X5bjbrFJCkSt91hyp9fd",
  "key11": "2hztAa1v4WNSQrC22H2F8wvKBJ6BHVSyhA1WAp3LpZyCSasPTAVAarN6yTZiCzG52nP5z8rNihEseZqxYeTiJ6ss",
  "key12": "28CZcd2iSGmyNic4V2Yfb9BimJDUuWWQqPTpHKPv1gFjfX4cM8w4uYEN7NTLH9ykYMGzcPUhxLmszkg2XtoveyL7",
  "key13": "29CrFj6UNgN2MQkabDvwfbc6saMowegVwaTQgGo4SgoJzhyw2VmLr7qFt2jahfvZRdWGLTDbdTMxN51cXY9a5sw9",
  "key14": "4UZRUqRv199yBekBGAXDt2LXm8ApcRDjBAwvZPvS12Exb4AJsbqu817gX8EAXcpGMKhg5SSQioKLzfud9sG3AZ1p",
  "key15": "38g4FiaE1XBvybeyFbSGTuPtGnhUHbtUEioX2vtmEfFzewjFEvF6MWwSNEAiv8Q4SS5JGpnaw2meEvwms4wswX6x",
  "key16": "5hXvEENnbLq8KczDziFizTQAQathtyoVnxUjj7m248zPWz7ULyFoph86csftXJAYkGBakTojM6mTdhqeQDBxMU3m",
  "key17": "4u4PwLsMKM4PEoChN17EPs2fcgdV6jD3PwMG9gh1pymzaYuU5nJbRtuHXmHbQooS7nNDcguHrDPdnPb4ti3MRa54",
  "key18": "5jUc52nVMtATuTML62vGbxGhLpWWkFvTUcK7ow5VNvJXrRT2boWeGNoCGGAszR7pv45VwP3FhFtjtYfFG5FVEaNT",
  "key19": "5cLUUVf1FX3mSZbUFYkdivoSf28f7ZtXhezEDEaXG57x7im7uuDUSiEZYQPNy98Cms3eCVq86fHRvPQMzMwva2bD",
  "key20": "2v6tQppczUdLNYKazN47yrrR2Uh2XTyvgDhJd64GTtxzQ1PinHMDE2Wu1p91TvvsQGWGMkRE4MzXrkJ1MSXcTBBW",
  "key21": "nZpQrrtvBzEq6v5tYyMbRKduDsDEECcYaGb2d7CR3iPZS57wGofKcBM4GVn4KhiK35iwanCZsNDsk2Ksase19mQ",
  "key22": "5WvhyBfGaahvT9YpGW9v1jKRA6ZAxKCCRR5oyAkYt11kByoKAA7PH1Yk4gySua6EfuoBHxmryvgKqKTiMJzJfhPf",
  "key23": "3CBQWVsDBxBdp9Rhqhb7TAm2bXHpyutJZzqhFb8hnMEd22DLmiA6FoSSGzHad4igcsTvwaArxiFcAJfYqfkW94S",
  "key24": "2JRTexeRWAJ6CqWwNwgxVbg2jvK2AUnjZwr4oNdjGtMMzU99eQfFgAg2JNkZGgMfoTUd3Pe226gjHTYHaX8K4Rc2",
  "key25": "4BWyPAaDDQ21ZYUfmb6jLLMAx7y9ptitfib3mwRcmHzdenDkbysaeVGEo524aMoLGKRd27m3gHopwaAYcphHfRR"
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
