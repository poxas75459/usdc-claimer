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
    "bRVvCtPmkoUxBynmjztvv3bx86p2GgN1FxUMXByXw1Zoy4EzyKu6ZjMDoEVnbj5HFSs16LQyPEmrAfdERrnDv3S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25epd67ApDK2Kgeh5sPBZPS7ryyoQ4MTBDjJp5e86oe5mWdzzVartukrnRXZmGTLT2qSSgpH6KV9kBDs1kcP7Gu7",
  "key1": "41iG9iW3rRtRQckpzgajqPApHUpLMPUqYrTCea4XbKU5WXJkpM9gu3kTNoMGZWtcz3hpxxASA13CDrjLozcHhKpj",
  "key2": "2czDSmnxyvV8NVJBLgeBt7PMueDrnGqiM9LzvFpbp6hmkvx81gBpC8fV7krMQs6EmuEa9AoVkb9BrdmVLHQzbNhL",
  "key3": "3ors82B2g5rRY9SCSNyjHL9ypmfiNaDij8MJiV1UzXwttKRtyzJKrqys5bqom3v1SD3MDcKrJc8naZHoVJurcFGq",
  "key4": "3a5JfjnhMguzUQ2VtnTGFe6RhefujLYjyw7Y3htryAHNAuGjCoL35nXXmBdA5D5bfMPgKqFMUbDGd5scsjHnCvuX",
  "key5": "5JUwBUS8BVPY5r68P1rjakQ6KwVjXvGyKnf5jyNhEV9bTvTCCE8NZg8PtRZqSbgpatmqHNtPCDMwmdpyaWXNq8kM",
  "key6": "66u1NUeLnUdvwZ7dnHQ6rJcDzrwP7twZuJJfsHUyfCKMY3GmaDdpsL3RcxnFF6Rx8p7fyj4hks48B5sE8Sc4VYCt",
  "key7": "2cA5w3jJiex9KKFJr6FE353yGaUbKZQ4DEn5YxqZGaRGJL6zQG8cZmPfmjjY5xwmA2DskoTrFQF8Des4ggn6PxFr",
  "key8": "2HpRQthYFGHG4HqZhAZa8toP4Gh6E9F13Cwc2MJpoCyhm1eiS565c5UWTjx4G6SecVHaviCDrLokMvaFzQK2GD9G",
  "key9": "3so5mrFt8ruDUZGUefsHVyK99oZSZRF1A449LR4xyLEVXCDBUkCCDDr1EiZVfCDV9YtiqWC6u3as4zgMkSDqqxY1",
  "key10": "4Hv3J83vzrw1pnvLgWKmRctPY1Liz3NjYUotumEZQs1zosiiZ9TMq3E1WnkqYaiomrGo29uDaXZCKGTVuXKyoHXM",
  "key11": "8HWeowhLAsiFMyieNH8Ls95kkW4qtoJHg7hSGZKH6fHbRoMEjfDStbEXW6dJRnrKqC5xueDmDuAfURvwA5kXjfo",
  "key12": "4SYzh9U1FHhZaLe7MjGGS5brzmhYynMRHBxYNV1ot4iHQyPLVmPw6dVnveVMq9ZwgvvzwKDcaLzU7K96wNVoioSD",
  "key13": "sDJCXDdE7Kw5GD7vZzBA3baVkgim8nEyTQaNACXpmnBXoFqJjW55zj3TeH88o9g3FFSyjhAwVV4w6iT1uexJ9yR",
  "key14": "36GtPti7P8Q7NAbJNDToeZTkEUEv8ccKLNNF1xFWnNEZBqTjrAn3xaR7KPJewN3ZuyMj84dAcK77Ywtz7jLaYRGe",
  "key15": "29th53Es9CLKB7HgmztqhJLgXHaK9GxreWzVPMTFee8WNu58GLEWmZrDDn6oz9qS2N2hrMKZMubKQKKjQXGvLcPg",
  "key16": "3XFuGYLVsKokojx4WPhajUeAkxWQBX5ooJ4SQP2ZEdg4qX1FsdPoVdzwfBWKkjQcgKjeNAvYL9e9SS65TkXq3BpZ",
  "key17": "4LacFWHb7dFZvq29tP2WADfXP8qMTo8usC5Z4zbELNVmEjS3mqQrVreaWi2fYWEejw4bLD7UsNrebofe5yqB9WZ8",
  "key18": "4jgoecpn3GcEH5tdnaEaqUiBhz1QjhPvU5dhGKoCNv4vPMqHu9rFzSmiELoXJZqFEiQKedx3U6B4mCnvqEvfFAhb",
  "key19": "3tfRjUU9DMaJoXhj4omrMQoAZxHJ4GRmjnBbecaFGC4i58XAcQ6eCwHE7kPJbAURZhYypXiJVWWd582vbNMGUotx",
  "key20": "31BMP5By61tn1taUy7Gd2146H4kKXH5hiEni5kSP8KQAijuzFTPiyMxB7KL3d6LVAze1TcYm3KBtrTGpDVruNA2F",
  "key21": "2kkYrBvHQvWcAac7dKp2SM5kEisdXDfSaSBJkAGo3sswPhDUwuijDbHg7RZ2KggPMRcbTDcofXPmoXo9EFV2xTkT",
  "key22": "4dKBV13wpFtDXwspMT33RQ81nRxShe1kbwxKfVkjniGD6ykftcCFW7mThwaSAGtUb3YdZboorN4iXoYdsTzrH9vk",
  "key23": "5Ae7NdQ9ZRcCS2j8ojH4cNxVihKptoBGQUX8inJbjoNZoXpekeR3HSt5Zp6NPVwQiUFkoGSd8tz57MC91XBVHu8B",
  "key24": "4Gr36F37oYAkXUDURfqRpA5KAJoEBVrpAtdMUHoEhmVUzSPR7oSRb5AHZmQdgVF25Yizq8jitb6BuppP2P8aibyD",
  "key25": "9fRHDZpTaThDdS9e66VBv3YxUeLTd3fy97WqaAEMDg8yYTQiW5xbvqFiQ5RyBkmU2QgWUyVytJhb8amjM43JkG2",
  "key26": "58sPUL9JtSsEy5gyCpMVT8prSkuZS9FM4DP3UVVMqmStUZcmwijTGTaBXKZymJQt1gV1kPDuyVczxKcPbJVMVuVB",
  "key27": "4dDVs54EeT4pRioacpB2qmG7zN75jMMZRYiV16wz1pWCtuB6jaHrgN8P7QjSCXXjszj9KguJ9qjv8Hor1MfzgSFU",
  "key28": "5GZSmnC3rni39haxcnSEkjYYqQL7hPigRRvQkXBvhhYoGkMcHRy6REa8vQGFfik7LWeDk3eTZqmpkZuPwNan1NnA",
  "key29": "48vouGacf8dfE777XMLyBxB82GVF1fJN56sFAyvsTTuYKn4t7oCVfsHwKTim44ssJQVVCgbDcSr7MPxYsCgkTmwQ",
  "key30": "5inVbcJvnvtpG5ucyuizLZfPTTuHYrFQZkfQU9oM6SmXFvb2tvGYNhTJWN4SAyQvPP2r1bAi2ny5WfAt1MZB4RWm",
  "key31": "7cHzFQcrKe9MFZiy5YhsDfRATmXzDkBLAYiTk72jwnPruQW4yd2Rb65ycx17pynszZZLnCSXpr4AJxKEz24ZUsn",
  "key32": "KaaUvLAvvt8RZHuhZKATgzMm7yXJHagxFYjcdQpmBVuooUfWzXB14azLS6R1ct2TLxQM6khf7xkbzXxu684U3dp",
  "key33": "4xW89kSjPziZKqNS4efp1LzFeMtNobs3zg27gniZcTMB5mhSZgVjke2GkkhHUSZmVQ9ZzqdZvkW2UK4CQVomQBfF",
  "key34": "3H5WCagKMTxVSXkezxKGPjMEcGFjiPu4HXS4CkyQMWz7nYdgVEc3fx2M5ovCqQ91ZcUGwtEz6xEu4EvstMBUE3ee"
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
