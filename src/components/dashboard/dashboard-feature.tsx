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
    "T9Pn7TcC6Xtfbx7Kr9S1tKh6GxuPVtWcYiqCgWE7y1JBsGgVfA18bJC8NPRaiFeoZgraHLnvSzqT1hGc3Hrwaza"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CEZE1PGKX1XmadFFnsaN6VW8NCJudzbrnPt7gGCzqiDgF3JHvT1wYYFYqwJErYCik2L6HGWyu4ueUA5DhRouEXo",
  "key1": "2QT7tBG4EUfJkn9QmzNcpv7nKoVHR6qAG5bZnG8YaWgmcJLxBvSGpgpNZx1rzJ4KdKC7w76bKrXhhPPojH8k6Lkj",
  "key2": "3JkAgst2ZMhsWhdroahjTHS3qAzPaWokeen8fbe3xNtpxv2XrpJQd6nRTV5XNUNjrR3iUp2X7KiSsKiNvw56cKHz",
  "key3": "63tfGWgWZvWAZVWxrQ8LvDpmycDWj8if3GDYFHi25WhmH9qMxx9deSVxZpE2Y4v8HEko4wJEgTgZWzWcxorwuzhN",
  "key4": "2db5BmsuKThK6r5PVSgF8eCePUwHUBqP7hUfoJ2Krqm3aoazEPGys7yrFJ2ESXf6tLoSYjy5f2MjzmmNCjFbAPeg",
  "key5": "5SSFzgHRs99UgCM1WQ5iP1Qw7YWgvrx6zuPLxmEBNpD3kCTgyfmC7DX4UyZS7JRMMgvLAPbFaRDsvby91brQbaK3",
  "key6": "un5bYpRRtKRW2xcWJPGQYUxU38r6F9TH77CqtXYhGuSDyvxVvQqeAsqewg95yqCedb2cnbPetGNvrT5UxSsvWih",
  "key7": "4WwHpqX2dWLDqdWiwMqQC6fcciqPzaUnQB59EYQfaLSeCDSq3ZeKXhe3zM5eAT2MK4vmPUokshVa4nfdCDguo8JP",
  "key8": "58YxLvwfYxVka7cZvHx5o1cHeSNPFhLXbbxkrNNNFaP97kCsSv5k7G2bcXnbNENdNsKEkcZQgzCn8fYu5aKf7qcz",
  "key9": "234fLCM3XMw35w1FqEmE1ZQv2ZAJgghau5G6E4kMuufj2bJWAQq9bLy8ygxZSvX67y4DgBxKLP27Ci8c2URMRyWd",
  "key10": "5h34K2ezvVS4UbFcEJK15WTz1MY3ks5XuS2wt7FAvo9uvKdWxu1jcszg75LDuf8zRWJcba9iUWHWwYrdtYikwjTX",
  "key11": "Ab3hv2KZ94ov6xZvc9xzBceakq5SnMLMfoNK8G6wQg6Nk1pN4ZNvB7d3ZEzkqag5VAPHrvGMoFzWBah99Shia7w",
  "key12": "JNtBrT5X9cNYkvXFyN21Z3N4h3h8HTu4C9uDdcZPWTEZw1N8Z83921KsZcuGf4gkKsmky9KetcoE9VTZbTcCjEL",
  "key13": "2ZGeQ8hAfKKu8WrJjthAsp2JTKhwHy8rnVeKLqSS5uzDFLWL3bAgmqxaVVz7zX2xoB36hh7h9Ch1PHuAJhRJtczL",
  "key14": "3fqtEcmugfArrEeyiMPJbxm31nPDDjUpQwe1UKf9nru4jFFxQ9T1dPfQ78ReM6QG2jX6j8WesRkxGSBYLwSF1rKT",
  "key15": "2e944FphLA7mTMQVVsm3J68bJXvtPFbqE81rbZAuKTekfaBeFPW6i89VkmP7ndeQwf6XnUyf7oCYHkN6WijyDseB",
  "key16": "5sv36GXeVn7uvLLDTK4w2bCnK1ACVcFTxGrPBbpNZNa7hWQ7MBQSTpoSPQ795pQH8Y9EMfp4iy2XPXTKTCHq2rt8",
  "key17": "RgnbKhexanuQtKpL8z5wEr1zo9WMggE3EYNqYoH2C7YqiXVNBoASzgeE6udamDNCuXypi2sjzWEx9kCG7thN9ug",
  "key18": "aqEGo912qM2cnjYBHn63hE9tnijkayCNkLZbdWNWFj1qGNaG5BqmEfhni9ti2Z5FFfcVBkhngWkVQ4yieTYSZ6u",
  "key19": "3qFJ4cjtF1TsYD9qXDhAymYFtxVvcbjpND54HgH7tKrV2zRuqNhmZvQS1r9EiASPP5cC8D1zcRLuiiXWMcryegbd",
  "key20": "PYsXGBW5ecWrbrWtrVWPDp7sXgzogXRSaRYuKDzk4BjM9m92JdP1xRfLPEBzboiWuM4PoAGEkqiQuAyEB46HXZF",
  "key21": "4uVPqDhxvHKgrnW2zVJJrsgCUifsqp4UCEvDPXv8395jK3sqVURpZi3fc7UCdf2dLXdd2MSziQ5wEH2EbGafwEaJ",
  "key22": "63QbYrNJJYNduf32tp7tbTkfhzNkh3aQf8twiVQSLXKBSckEYThT41ozGMdCpCcqzNV25uJ6eLdmqEUFuENX1k6X",
  "key23": "2Pq1vCgbUumGXgE2kYpua9to6hCYLqjppX85iAcCfjZ4QnDfTRnMYWWG4XwJcCzQmo5YYADCw1nsWp4HknRa87rr",
  "key24": "3E3jyMcMQ5onkHeyjuQXnxmiVtBaWUUnde23UsnL6sr49QnX5u4Dw4Lt58XAowLPLQRZcV5aTZAmNGYyC2YGzpbF",
  "key25": "sP73x7fhahnRunXzegpy3mPB2i6hv84fv4vhHzq7wj6pkzuKWAZQdbGG1q44nAjBr7sr8poGfkJGf47Q4e67sGS",
  "key26": "2BFVXxZYwNWV3h2hY2jGfRAL8vK2AKeJebARDFrznzyuLcpNG9f4NSXQejVNewpmUWNVSTR4XJEuu7CXG4YtMm32"
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
