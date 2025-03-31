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
    "4cgp82hYSuzPoNdcvgHGM2sVda8SPEgpmDd6BcvHZXxJfdcodMFKtM93scCKw8tQreUz3CP7dX4G2rurjgqVe2h6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DcoD9HjPkwXMschj64juoQUHJUFRB6c9N29DmnVn2HL2naDX6K2tjqqycyujZQ8CJ5d7B1W7HnNdca5bF5htcuY",
  "key1": "34GKQ61DqTJGnV178QnEVHGJvudvsdXjHv8nNebZibse7y6Xyz3NpjGjfxPZB1WmZXgjtHWfmeMXQ1Cy7XgKomVk",
  "key2": "35BNSr11z1MSyTESFU7szSVZW3U1iChWPZ9fMeD5bPCgxZsWXSouX531qwkP6gz8KNXyTr31C79M9aGkfVYBbpAS",
  "key3": "2zUw4VBpGTz3Z1Frp6TKySTsN2CbJaZZV7dEowknhFDisqDZcpkCVKfnzczNMyt3L2yaWzajQ1KeFLf1G6NwiwkR",
  "key4": "2EBaBLMr19iU3SrmJ1gQQSKBiqDFEu8SnUGvUXCnUxcrbDoGyDLooMmumEfN1zRcDX4jvFc1JaoEwpMXMEJozTXG",
  "key5": "4VqiaDjBNvLhKyFmfNGWrXy28qzXuoK3emNEGpze3rAJFVbZTtajmSa8iAkEAk5FuAwmxJQqpQnLcwhB718StvYW",
  "key6": "4T1r7rCVbDVxBbhbaQTAVjNphjFeWidMfQwnqd63boVobZdN8McDPv3BKsPsV5fh9KakmbPTikKDvd5DSk8yoo1W",
  "key7": "NGBdibZMzFadcHgpbfpVmP8ReL6EX2wvMgBv67owKv3rhQna8HsfnWQMJ3JVFxANX8dNWknkpqQo6kGw75FGozU",
  "key8": "aEfv3sUKsN5AkA4U18PNLGteVmy2kWCTuZE5f2deP8okcWLLJo8qHvzebd9RLdxyNrwyWZSGZWT1h8j8yTifnYV",
  "key9": "3SgPrZzuDNAy2aFyNdBvZGzb9n4LUE37zbjKKiJ7LRjcpRb9X9co5NgaoRAnc4xcF2YzhoS4ApeotxanuddHdho4",
  "key10": "4MVnR1UnEAT6ZVeuxZ3VssbQFvtJPfsJYZwYt96vR3b5f2K9FsY4urWZoWiDd57JPH2YG8yNmCDdufFMDyUKRDDT",
  "key11": "2cZS8ttxpvjZmswstaEYQiPbP7AcXHX9wHCwhx68vdqjje3DcF7vr2sQ7U1GQzrugrMsKud6yRw1Zt6FTXHLHaHS",
  "key12": "2eh6JunjhtnPp9jC13pzCXJCLJKJwK769opMGytuFDBSCaLysAWz1zo4KiZ4mWxEQysjsYCPUTJgzugXtq4vZqqc",
  "key13": "9mH3D24Q5DxxZYeKgjqsmp93GoqC5FYuH3jaUntSHsevWAGB9tXXgdRbgGLQdhtCDcWG6uBLw7rRk2Bxj6BFW7K",
  "key14": "4KPBvoZuiEWL47bcD4Ts1nwYZGWDg7zhVeXw2eDPTL1CrMUtkTcgDMfKDm2aaooFLP2YkuhCD7oUBAbkah5LzCUS",
  "key15": "3SkoeLiqekdHVqo755CvaNfm4LfbFNxdiLY3PyMW4ug7StaYvsMe4Yc3VCZstaDZ9GZzVSp2Z8mJXt8BymWqN82v",
  "key16": "3JPjJnoEhJxQd89Yuts3edHz7aBKzsnqq7mPugdfMQVo1NKXPkLzFdWDTtYmn89sk4cTCWpq8XMFgEpPEZ8euBki",
  "key17": "oxALHD3n71dg8L7rMK2zCrVH2pjLg4dKachZPpZ2FR23Tbae6MYHMrJQ7cK2L6Z1ou21r3sttEefx4vYA4Ckxvf",
  "key18": "4rbZj2fBHVoNTiLYmTunPFWt9KT5Ce27ZQepL1MgEpaZ1L99qj8A6LbDkEqcsSXhkDTQo8n8hhij3VwhnzSQoePp",
  "key19": "2wwU83uhbQxuWsivdrXPYvAKxKaHNvpGRBcXkVURQjs9DsLYA6pJrB2syhfdStsdkxGTUjX9eNuoxxwie7d26Ajm",
  "key20": "gfKLrd3YeZHVcadT2wj3KfV1RV3ki1jvJTZDSzXzCHeiUoeRqm7cA7niqZLB7Hjwm9fT7tgrb6gMAZro62jveZf",
  "key21": "2zo6tn8pBCJQ2BE2KfscxrMWTe3e6g5CKVhBqnCtL5SpDWxLgb6U4j9L27w3e2DHQjb52NJTBM2uijS9jDwpN5Mv",
  "key22": "3AsbH1qhwnCn8yw9xyy3cB4v8oGFU1JBo7Xtx2RcbRpzA37iNjV8d5usfdVizncLUnoJMeKGBj7fwcva1kJJhbBs",
  "key23": "5drmf33oV4QT5X7o2S5wQib6ugusaoC1rhELPccnLgXboVnvaTJ7Lm46Ss6qWgt28y62yNQXvWGB7Lk1EAFJEoDA",
  "key24": "47mh5ivvspofPGRc6yuVca3d7uF9WYprS59bwc3N5a6cTPjvaN1VAistpMLJYrtFye3dDPHmw9aBFguh7pMeTENb",
  "key25": "5E73Z5HyvXgXVYHVD3kUppoj8VYkwFQdP7eYMxoGET93TWn8DYhR8cTBZLM5fDv4x92FpjqT9ZbJnMSm5jVrFXMT",
  "key26": "2sMExDm9JGnoACWSYPJRJD3mcuaMZdxcNfDPM75FuR1Uc7JzCtoB3V4XfoiAAZ7Cw4p7ZdEpHWRixPUXUjzYeBJn",
  "key27": "5rvcaPAatSCpEX7K7Gogwdt7ztL5yhXiduWJyf1A2RPkiBKpD4BWP8pdncPZof74sZJ78oFtksBfeD7GrHr8jgsP",
  "key28": "2mKQLk1eKgW3GX6GeeTGutrMtGPV6FjqtJSwTTduiQdBvWYseutcSSu76cfYCKKEk98qVoGfnjepTP6TGfodrME5",
  "key29": "5FiTPVocekeTkTFPAAVBVgCDUK7kebS3X5BJ9PPhubCszbRbYcwtN3muWM9L64bV5oda5T9Mqct3PPEKyiu5gavH",
  "key30": "2pvxe4evQQsZ9EH1x6nUFmFrVodysdm5GLFEiQPAbt3uaZsXWoRN4WVDqdRDw79YXmTP2D5SJ5StSnTPFMU7pUY1",
  "key31": "5fd3gos4ygBYoTcNz6C97f7KaABp9Y11sqwPV3Hz9fkuEp4w4TnR4fSFhsKud6qvrXH6AJazZ1H4kZQQrjnjkYZW",
  "key32": "4b9bxBwRQ3yiAPiDW8o4LeLoRhKSJUHmRBHnReeqeCs8Vmkz18vZkKWpBdg4WrSf4rM6xshubY2fVZsVbVt7R2h9",
  "key33": "3Y5SUcHXAWi3Gx9jWMrw7XCteroadBdMEvJvfYjcwedyXE63yYBFgw9z2neYhW1gYQpedR2VA4JMaLhyWP9LXMAB",
  "key34": "3CmNdrh6dz6adoTAW7eeU7JLhV1vLM4MQkxDCY12SNaGDvP918MrHByoKpGbZ54wpPKqqRPPs3i3dobHGEn2zksV",
  "key35": "573mEifBAstpqrac5BLL4j81DSnAwn6cshYEFsFp9dGBQN2jBmY8AmJsZg1NmHieaPrRgSnarwfW6vfGZLbsiaHo",
  "key36": "4fmWQQgZvxRJt11pb3NCgoqZjQ6QzXPFz8Ykvg344c6ta1EDDU6V2iwjDDZ7hTBzm6jJnSC93t4XQc3gJP6LC5KJ",
  "key37": "91ULBn2stfrDXB3nNsQLVHVRZjtFYLwjLRR3KViZ77LnigjVLbBhEcjRxKE54KqfVrp1rdGUaYwSvZwjMq7AGu4",
  "key38": "4MPvNpTJypDwRzvh4jFcx6ahCbX4uCKr8tudLRg7AAuerHG1Ay4vsvPkxaYUbVLWnayZoYdRZE7qR1MT8YctRkia",
  "key39": "5axqqsC2aG3ucM53VrYqgZzv2T4YnLgWBqyZvLyDKcuU3j44PNFnsX3iL4trRsGW2F5bmzJ9CTvrKV1EzV156jpE",
  "key40": "4zY445WC4H1RmqqRE6QSoTwTZuA5pU9CTU8FazdKH6yCcaMPNVxxQhTTKTdPnTeY2MexHVwDr3bxa4oqRZuh9cYX",
  "key41": "5VLR5RCHk8F5AJhYDpcXVtptd5ZeahaRyfSXnyCq36Dumrm7SA2KAtZLQgNRj33cjxRqgBTat8vupaHuYBherCSV",
  "key42": "5GFkBUsfi2t8nMk2Ka7UFEYBDC5U3yyNrDCj1sdg7Xp66b8LXDT1uF6UBp8wKWhZ9zRC5gHkVexHiPZahUC3VnRx",
  "key43": "2ind8dBGKbX3NRBPNfoq9tuesWq6jZ2sFS3wzhF3WsBaS1WBxJVQRjFYicw4CdfFFxvUMmAt1a6MTm72TQ7awhDs",
  "key44": "RCc2QPtTRQZjJyzhbxcFqB7fqZP2tW5dbdLMwqG36BDGxKHohpdZBuu4uDPKgrpfu1VFrKoRDTcs4mZckPkVmJf"
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
