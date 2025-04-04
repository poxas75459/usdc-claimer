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
    "3Dw7Ba3cNttcaMTguizyKgm71pG6TRhmSWSiyzB3bWmguTYiHWxdQsj5qrj37owexysmoPRRwteEnYP5QhpADGSM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5azHrUqpNCPprcGsbcosaNEaSt91Sz25xTuLGeLKhMycQRP5UKu16EGov8eFE3qS4wMDEyBX6p6LKnStUXFCoVuo",
  "key1": "MyVWbVuXbpK14wbDC1whVgjpzZx4yiwPTeJk35Ked6rHuN6B3e1cEvnku5rnZ2fS49HeM3fhWkYg1xN1duuY4Ms",
  "key2": "2Ne3SWR8JSRxVG561SrC5y9Hk3q5KBRtDqs2MFrqZH8KzHEVpcqWn9eaw9A6uPh8bYwjXwpmhicN484CfUe3aBFR",
  "key3": "FZZrfR5fQDCT2AYyLJ2DPexmuevDKF9pUEvMoRgXFM6aXBp1BtRXBa5wypZKM5SGCbsorcNMc9ejNkb9noFWmSG",
  "key4": "3GoAdN7kaLpWnkXNZuNW6BdiTUEGNtRWSaynpoYmq9HxVGtEpfTpRcVc9uEguWHLZFcBV22MFQPCFA825LL9vXKQ",
  "key5": "2XRah57iVu5Fufgs5mMuDCQxCJWsmeekxK5B4kt96HrHjwUpLR7zxE8Nn2aZUu3HEwgJ7CoFErqqmASpL2nc56qc",
  "key6": "4Et7BPE9b5MaQrNo5eDKSscueXsGQg4VjuKqSnJNDhzoLJsvYEvWu2ZZ9fJi9XuwxxqbwFAhS6aZKcFm91kKX7hT",
  "key7": "mTBCTtNLiGacmXyqDne87u1DQzfvHp8nUkxvCGTo3x6LYJQ8R7DHpMjHXcLehE9WdH3TaXqPYQ153zaickA3QBy",
  "key8": "3fahhXQegZ5KEBXvC8Y1XkrLm4yhoFaj785jTpWtM2ELFbs67qoh9ESM3vLoNmcF2zB9CggjNxELFefaG8jsEmLP",
  "key9": "2r9BLKmQoQ1JyHDSBju15BraLKbGRWTBuWeaPejxGs1hrcLQPDLHW6wCJwwKEHrHDNUv3cXRJLnB7pt4A8HhfE4N",
  "key10": "bRJnbwsyS8nbtF8ircg6xWvLzT83syYDNUamnKq5LRRJaumFsx653ho72HVbGaigcQEtrdvWfrGgsJnjk7RZ854",
  "key11": "3u9UYsv3LDb4ERdgy3jufL55c7U4RUkaQyNBC54QQXpsAaN55mg5ZPAUjqHeJH1qDDthmQExaAP49Xf5Mc9PTaYs",
  "key12": "2hhnntGJEYLShm2YhC4mtCgFGTY2kWJrMzs6bBgTZZncW1PfwzxiMFYSWvWULPgb5ToUsQN5WcaW5HzHdWt4uEX3",
  "key13": "54L6r62RoFWi9TbehwzSGzcqsTfMpD5jPYkYWvxGfiMF92Xjd2xGqfxwvG1XX1rXQYUFjWhXSyHUZGWbvL8guZes",
  "key14": "53JMEoAvTBqjtEGVy9io1Jr5c94RsgYCZoKtZVMxQYeo47jZSb6RtYF6rRfsFEoviDSHPjc4uEiC8yRffYGPgnmV",
  "key15": "3yQNsAoo82bxa6jjArWBccKygfjXqJPKvaomYgYkxZKZ3STqK3x1vx7oU4B4pigrtaGNpDWXFme3BbMFB1PkjpG2",
  "key16": "21d439u8iUiVov7qQ5FRy5nCUk2LaqRXFTnwtAm4ze26zNbxxSRaT6y4MBJ4o3FMs1ZxMzNR1cRRSqBbsvPMdsSR",
  "key17": "aeaySxohFwG2eQbYig1Qr1NUevsPJy73yPaUiSbrK9Rbq6dAMo4QWciSKfNzw7Bk8XDsrCX6vC2kr4yFqDk2vyx",
  "key18": "32sv2m4qzh4S7XTipNJwku2prpHiCU6F1SGSFgg2RQv894SY4c8ERVdTxmnvy5XGhkcpWLZowigGAiAgt3fDCJYe",
  "key19": "3fJoxdf75mr4vNrwmDvGKGJ7XohtPa3UmYr6swvd1qzG9pgFdXyXHdkxagCay9UfVrEuAhwCkUWthwLSGc9z2Qje",
  "key20": "5fwy6YikeUbexrdfXdjC3mrZBHiFU9nVLYBFRPCqNon5DJgmj65HMAm4phfT7nMhQE9NG7iEt7ngqgfYEe9Q5V2G",
  "key21": "4jVGLDt8RdGScZame6NpC1GLRKpogxgR62kZnQcN83po1FMnvELRwnwjZhKgxyA97jrPXBQDVwqy174PMrMhV3xF",
  "key22": "vtGU2bBNCFfYYGmEXeEEn5nEnCwLJYWGMHbjvzJ3naTFyeg8bcj729NDCaQxe1ZzBWniVWhtTzMJ7QSsigJSdCk",
  "key23": "NCTZYiwS9m9KiSg8f4HruTViHkANGaNAjwz7p729ApXGdLg4x2831DbP7nWEoC5Qdf6G5bh1c3VGxk5KZG1fcV7",
  "key24": "47YmJgUtU8hcnWY1ezT7v3cuP1NTj4sJQbm799onH9iphin66X6JMUrEVhwac4Ctuat7tJ31B17ERRVL1oLyB7J5",
  "key25": "4Zc12zXUw3oBB6UquUj5Q9CHffPATVr3kfjuXbiCnLB3si2UpT5CtpiJdnLKq1UL5kqQqmbR152UrM6zhUAwdxap",
  "key26": "4RmJ97sofa1HQN5Jkr4RDHNrHWucdAgNyuxfDUVMxSySj3qh1aqteSqzUJRYHPEjLB4WtgT15MN5fQoe4fJSPt8X",
  "key27": "3c5Czk7ijtA2xHkBkAFTpC5DwoDxJceKsE8EYabU43pD9TbpQTYcbfE9Gnr2EKgWHi4FN7GtxzurmS7Ph9JcyDuU",
  "key28": "4x4cZzW8AXfpeFrPd8JADK8NprqsTRnSCERhVLiatHbGtkfZqAFHdzaBpfnei4YhfH9nf8x9br69vtFFFup6XmEd",
  "key29": "oYbJjUe3ty2wP16tWjRMGasr5cZUciHoLk1UXJZbZF71EXd1uUVFD8qfTtXJWB7vKe1DbZcue9z1vHtwwzBNb7x",
  "key30": "36mUCVpQBaqoxKvFhwD4DL2PyQUMartNdMEe69WD5Kab58idXmWVWPgVD8fgEMWiz5wYZMvh5JTqCDXjSq5WReM7",
  "key31": "5W2hWQ1SHbAg7zTd1X7ppPRjbJJGZg1Gcpa47PtiaK3LAEW48m4fs4EJcnRNcstmK5VUUVazpK72V3We51ixB8dD",
  "key32": "1UyoQLrP3E6z2JmJDBPvdNB23XkcoC4HWJu4Ykp3S18QQKwwpb4giRHPabxYmy7tbDWhUrnTMnk1ELwyx4kXchu",
  "key33": "5kC6GE9nAVkTRGEmQeBmYXKaAUeBPPn1UpzjcmNF7GFswiQGvE9aTv8ttxvb7pmyBZHNFg1UnoeoFPmiTrexBzq4",
  "key34": "3W6YDxBj3oPTEg4JdWcM3cgEgykqVUTC1ZErjwJoCYtLgWXaYtAMWYEXnvPBpBVLCCSGNWQi9aCDMffhcbNMAd8f",
  "key35": "XdVDF4XPxz3akEs1YzrE82qNnT6Sx2rhXwg27AGQpnsE9UuKeXP7n8nygQ41otFDfJhxYxAqyghq6bKjyJ7rYyr",
  "key36": "3TWTyfnrKrkzFgQp4oi6UQgXvzw8w8QkkTAdps758z3uhVLE7G7nBVEBFUqvcWZVRhWyXt3DrEAG9QcPaU3GmaJQ"
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
