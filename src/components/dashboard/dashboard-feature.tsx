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
    "24od6ibSvAo2YtttHizshM2pviM2RS8hQ9WB7GTCAhvFUXHNnpeEeZFavgfgHVNPhg6H8eRtYV4xBuVqmd6ef3kh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bydYXREcBw1NyuvQmRLd3CoLPPJhnWxzspYEw8o2e5UnKf67bbMT4qUcHmc4WhdA72DdYNweYjD2TjBJPQh3X2y",
  "key1": "2ggeqD1Ri9UwJdG4WZJntB1EEY8tPSd38mF4Aj18ictnDWNZULpkxuWHG3VmARYnHH5yNFy3YieLMXwRjgpjLooL",
  "key2": "3rQ8mVH6w1Apq7YaBvAQhwifpQmFUFWzEktN63x8b18fTuBJ7hRHsNbduY8CF6ykVTXX3NwDnAWvKd8pCyB7bDFU",
  "key3": "4N1rA17j5W4EAs7r5GUcNGvTFZyQQdrdYJEF7WDD1rJC7xDMarinfdhPNn3bj7D9WMfFSPtoZPDYSpXHqfjUopW7",
  "key4": "5crVpB4Fd9QVepUBNbaWGNSiT5QpzDvz9HHPFdyds2GriD48vn7A6eH1winsLdvQPFErxUr8ZvHnDzMZP4HK1vvW",
  "key5": "51pP4cet3eA1WwSxtpFUy7KkjMJAbXG5KPh2sRfA3fsYXiZ4TfTPpYV5YFndsc5XzcdJNxo6BUTfM2FKwmkvpBfe",
  "key6": "5KoM1JCvZb4ffpT9ii3i8mztxSZ19qr1YxqDu74QuKUdGdYoWnDfWaeLW6siPwpphZKuf92xc9sdHfTpNayq6x5i",
  "key7": "5tJQGfvYzm1ioxttfhPcnFz9ZBjcQfgQTMNPcw2DUzs7WHhA9pQ35VECkvGdfuANyUN93a3bmdyDAGJwGSqiFFrA",
  "key8": "MeCLdThzsA1gNJgsHcfF4RjQ2D1CY18aMUWjae4o818KUGWTtMwyks5k9BMtuEBt2apau8CQjUtkZPYiDNJk6cY",
  "key9": "2H19q1vUndKVetaAfkW327LwbT85mGLJtNzJEqWfF4wUQbPJsVnmuz1dqgnhN7547SvnoFGoU3XvsHDQ7bCZZZJK",
  "key10": "F4a9bdZg4nrsWAJYjdCNC6kXreY7PDWWAFZx5DPJXBHqe5fYowWMYyywvwKk5fFUpjiF2UJnkFC8b97UpSQuoTn",
  "key11": "yXCVnZDexbfNiBnWrnNun3TbuVcXhDnxHV7BXyPpebXaewsDGTNMhr5hn1vSMcGGxDqFMExUtQTymPBqTsvQ9o1",
  "key12": "2gm4nA5KBxkkvjWAU3Ni3XC8sZJdJQFsMeCefxkduGgEtLtDsKBUiXgX93drtpsHfSHqvFbEevDxuvDmvSeXZ5ME",
  "key13": "3GCNy9pFwxhdKbFhUKvSw2KGsXGjeTkfcfqUaC7H16EQuPM46n7vNxHTFmrjG8dKPYirXoJzAv11suJ4wk1S13Wz",
  "key14": "4bkiD13mWUtak8KenqUdBCuGMw52q9s7uYaRuxuS7PY1bCkaSp3WeWA6MY8anCJfiV56hDpjop88bmjwYaUsjaX4",
  "key15": "3hH38xz1YcE7yBoHwXY3jhxsmE2rLxptGsMmUAm4s3JJTKcu6MMZvEKhmgasDVxnjkxyKmM6h4kdWs74ehFhHJUN",
  "key16": "36eQf1bryxHKoDmq19Wi62fDHskEEZ9fxvVtPtWBPKUgpEinePGUPyTwTqJEoSTaivcd2SzHqFrjCxTppTJqB7Qx",
  "key17": "54B5fpcMHz2D7voECPZ2RNbhtG4EJ95GtLkG2YJEWndrXhn6H5NTQwPkdb26PyScdJYbRtexRu7XUpHUtWan69zu",
  "key18": "22WSwZV2sRgqB6vg3RsJgtQCVsVDcUaJ9gxZeVVKRP5wjKYTMzh87p9xtgt36v2bM1s1Sd3Gse23Pv78qQ9neyZo",
  "key19": "2Q6h3aCywVY2cSXGaZKMEXX84aryRVzDKDkaczh1q7DzryEAEArz222UHhtEUqw8MHs48AcYGsANRw99MufJt45e",
  "key20": "i2n7kf7nwYo8C1fJbVvteNCghZDdFiKEXU1hmNdTCUn4hCrzjhtTaMP5zKiZJ3PKekEKPqwxbEihrG57VvUNNMD",
  "key21": "21U523KWrNQi8a1JfKZnshrZ3UH8yibeZ1Wg4Hbw4EpjveuL7a8Fa1hmwC8A2jbhXovz5EodqDESUmsm7rfm76nC",
  "key22": "46nk834DxrJEUnP4BQWMm1uMuuXgUgx8kQMvdCco9Hd77DRT9CY3SjQHskAmGx4tu2vpap7W6VBSybhDM9cWxM9U",
  "key23": "4HPvJvTskBSmhZJwA4sWUq8LVqAbySXgifrMRMZecgMuNHQAAk1Wgw9hXbuhu3tKjPFL1FCfRWdEJ5VMMSVLhg2D",
  "key24": "2H9Hbi9Syo6kCH3yAZircbTX66kfABbGicQEPYv77ZRiTPQxo78dLNaH7GEKTufz88vr7kFcumpPtbNAdzFY1pLj",
  "key25": "46CR4jHzMj6tu4UnKNxr1aCZEDUUR7p2D6HWBZYaBfiQkovvSnVr5S96etSLDjm8zr2q3e2RYy43LXs7JoVz6uEB",
  "key26": "42CV1V2ibhM812s8BoTjgiceUmvLEV8ak3UPbbixvU5pX9gm5qQCDWgmJXj6nEcpia97Hr7YmHfv9RkA7yJSK4hQ",
  "key27": "5hsUoNQSdD2qvt5kDxyn7XLi3PL3dk58sSnnGJs8a7mKWSEEj69Wq8wSMRhpK9oYfPiXECFk9KQKTo2b4zcTpaNG",
  "key28": "5qSgs32aAAmFZsjtFocLXwuS2Ei1u8ECUf5SRcsxqjY7QQXYB2oh39JDANkqPjqhxHU3W41xBr39sTcq7johAyVv",
  "key29": "4ZdNiKTKUQ4Dp5vy1UT7JoFDo5YjtbHEMGvVDenANbTC4Co3QCBjTeZvT5G1BtX54QZb5oS7N9p3Bhjp8ZPp2Z3L",
  "key30": "3WjeP7tnUgiBYSWc6v2fBjw3VLoc8KoTs8qnUKyxkv2Dg2QYQFS6ZGiYoiqAaEJWc9LdRbk6iMPqQ1EYUwJ8JuEF",
  "key31": "4jMubETt7N5ZZVz42CMUSRe4FWAh7BEoLYhuREoqfjuRqQdJnQUk2DEwTdryVADBzy7oYhVyz3EDcEaKeY8ZHwFb",
  "key32": "5rdvdXWmZz9Nd61FNtVr1tb2yCqq7WuKJaHGEWNFHiFBBVY1xspSyYLGoFtZQS8MJGJPaA62UqwSbPeUQVBT2py2",
  "key33": "2ryxeN2LckAjRMH2LR6WjUar3biRMSAwHwcNGWWC1BaGKzggG5vYrVZUdhkv3EG57SwgeCVm3c7gUPkfaeg5razn",
  "key34": "4t2j4XrYZ3fVyCPMyx2GY5YjiVMtpB6n9a2yEkzrSgL9MGTZh3NkeDJXodHDLBQyadgQbB5FFQZhrvzzDrtiLHJk",
  "key35": "bdruoviXoAsfPpVxTxgvE1i6xJkHd6KbE3HTcxQV8bN7FTBCU1K68EYUD5W9eBXnUU4GagRVXeT33zF5owTueFs",
  "key36": "4ypWnmxVxS9gqwRu4W4rukSk9AVCGN9AoNA9DKgMDMwFwsmf63v9mjZxc6UYF6nNjDas1NrDxPN2ZHGGHKYkybrU",
  "key37": "4dgGnxfvP4fJQTcd784yp8NCXSuoSqbFA2MEarjpFRxVJUhTE1EAucPBKEEAqLGGw8Wd8neV6E3CJyATdu9VenYy",
  "key38": "2skgwhjWAVLkp7v9sT6uEpjqAxja9n7DdVescuEjZhqagsQNJS2Yhmm5sgzuSAmTQZCdzxc38zfphBY9FHtA67ri",
  "key39": "47z184GQ1rRBegADpG7kqr6kRuZ1uBQDfxn9VK9pxox66YUHL4V4Y1C7mNyptDW7WxH58cjx1C4FAA1rNUFvj6fV",
  "key40": "2rmhJM2rm8gJymyVVLFxdnFDoXucafPLDom7CQDmrJVmbPohteaC59y3eSxx8V8uDwRFuJte2dzqtQYthTtBHmhZ"
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
