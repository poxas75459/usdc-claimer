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
    "3qaQ1gRzu4J2jvYhj1DNab4pet7Dh2f1SbAuvFgBcWtkqxTzyxwBJQU3L24DX9JwMmUXe4b2xZXAWMJtLgipN7yi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HRTd7Gqvm7HTbdYsrQSM8dLMGzk17A8SLG9A11Vpm1fsp9parFJvA7Ju1XgPrYLU7CychArajFDZaBbjYFh6g5k",
  "key1": "4NUAWay7FS5BrcyYnUhTwXCssam6H4Yv5YwTyYEv74vFsanjCVNwuRU4u43qrfDYf9yERrTSkKwRCEmYiH7nXta9",
  "key2": "4cMqiYQDrewK6gToALnvYCAZhq9udwnFo22FiWUK6nuYQNk1DvVBGwA6twLafrrefoso8sBVk2kTkzTcdnaec9Hd",
  "key3": "yuqoSJvd5H5LFrRDc82TYquWjkUiTCNYZnihGWxykUCUYuSyhgs4xRQ3xtbFaXa27y6bcAD4gvCE1BtYqp2eFfy",
  "key4": "3XK7dKjQ65EogmEtc4HMUGgNHEW3y97PWmXJ581AcyMF3AdcvTLvbinLG4SFbtGpNcpoqGu6WHq7wzBrkBkBnaSP",
  "key5": "2r9HsztETmNyfoyeFV2P3JgwqdjMEgds25tb9nfzjRccJGbzqEDxuWXVmNyHtdKFJ2C7rpbQaTS3ARCFYPSRCtw1",
  "key6": "34zCr9N7yFMMtgELG2UoWdwwMUvXBET2wMCywW1Uk5mRPTpqY8esLik7EuZ5e5qY1vJMhosvf1r4wfpdcDHtH3RU",
  "key7": "4YzspC36p39UudF4ypgfBLjTrGPR5GXshupS8VLEz1Yz79JKy6Yn1Be9nJb6RhNXLXAZcPopJ2N5EjU7QufzYcXm",
  "key8": "39MwjJYRp79xScZGQGgimay4kTEMBBTQq7U1cUAmE63ecnhBhaYGXzD11vF2VQmcMZedvQq1DK982Y2mDd1pASDx",
  "key9": "46StFuPDEWdm9Hv1ArDP4zuajjaiTjoFF5pbhJaxtaLL7SVD3z2zw6ADeTD5isQ7pE1a5Ym3P1fFvgkYydAZhVkF",
  "key10": "3mWwonqrfaqw56ZsGyGs7QEuoEDbst8QQ7Mxkzx4NSGmJq2MCf9txyoYke4jN5BoqZLnUfXL7Nbz1g9PoBZkHQf8",
  "key11": "5AGsRGodJ8jLWb21vrQGdhZnDJ86CU9b8Ltf1cWfcivZYW4eNS7WY2Mc9ZvtBgWVPRY71SFGdpnJzNmnMcbAdJ8b",
  "key12": "3PovudT6ymViqbc8AySFwzB6E8UHSXJxBpYEerHH458oKW9REM1RPsY52aiEUcKqhxV36JCZkXgswhbUAPWYFanE",
  "key13": "5153msnwWRLHJALNXBsrsY2KnFLoYguEAxeCGcKTaXNdAFsmxA6pKDxiFHng8wrHhwFEAxdzd35Su58mEm3V3Gw",
  "key14": "2BVRRxoyJ7bp89j3hNcADMihQEUDsCSBLDVUQtC5YAv6R6Q3W4vm4fxRr89PtikLsMav5LcbymEEDicFTCURXbTN",
  "key15": "1G66xSbaAszDknhzNdmnHMLo2RDGUQhAcGdBpKCrwMPUYz6J2VEHpuUpiXZ2jJ99v7s5oqtyJXWmD46P2Ga4ugX",
  "key16": "j99cNdoyQu5bHy8URzS4FFRxiPZLVaktB4eXMp3JsbKXZV2jy3HcXPFpesFoXa8em7pkDNRkdnxmMeNTsrKAUyK",
  "key17": "2DTPLMwyV4KutRRNcQGatyvZi1uLiBrhGwgXjaNfbL11yWymRYBmXYjeKRqi9aenF95sEtUPirBAHsDzWNKGifLA",
  "key18": "644wGxkRWL7Rc3L6vbRZSBURzQXw2XXmpdNTmhp5zy123hch44WLRasKuudhUs3ci127QJbckhfmQmN1ay7hxssN",
  "key19": "31gnFMQ7f288o6P6Zsp1LS7uiC5TUzL1S5ioHuxvdZz8ySsmzWCxLPffPjop7fbqiaQfYDNqFuZJ89gPxc713XjM",
  "key20": "4boj3cvQHo5VpN9GcorCP4hCvRyyonADaX2e1PF7RU4DRXPUAvJ47ZwvgthLq8YmP11Lgo59kg6E6gBNb6LpSx3W",
  "key21": "5h3vPFEs3yH6a6dtTSdTPnEgPJRbvT9JnVkwbRkFveyUKsppzkBHQ3UXp6oGquvCd5SZhiVjZjfN5HY9cN1KGgdp",
  "key22": "3KtXpzeZa7TmwHb5zhBR484oJEdxGiuyJZ16eo4bVN6i7Zd8gBs2KhJb7A5pkXbt6zXEK112MSnd3a5LBv9w3jr5",
  "key23": "NNyZRRKdtRSkKV2YrMYECEqbqCK3dSYB7AKQwSMuxSLUNokJ3Nq8uAde2G9C8Zr4cX4iaxKQbY59CZ8HjsUni4G",
  "key24": "5sWnw66HPuDiX9rADbkuE811nDLrB52u6BC8YaRePy7r9gSWC9UfNqiXy9EbtgkDpTRFxW7Myt7EKF9XeQHnoYw3",
  "key25": "3KiLsYVQ1sgcopS312yZxPCA7pjHzpMno4Mh3MsM4p2PxhvMf1mpGp22JnXeE8wvWtoVLpCekvyA9HoGdATRFnnR",
  "key26": "3p73AnpDs7g1Y753hwRNAZfmxbF3yx9z3BCrhRaTDyRbdRhmzFmZeTsyrCWS5k4vMJf925d4NBg8spcwg5v6aMJ9"
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
