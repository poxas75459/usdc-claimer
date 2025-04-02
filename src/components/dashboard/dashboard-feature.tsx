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
    "3yFSXFtkHUgvkuBmZwmnvYzWegGkTm5CaiqMogzyqbgpuGiZeEBaBHpQF837bAEVvE119TFMLvhGRy41DrNHEJs6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a3popzMJppbDHZFDghZ3xXqDGUDhCMtdmFDQevWMWs33QJxp4wzULLCToyjFw6Cc92wRYDAznB9R4LKtfb4VfGi",
  "key1": "2eX6EQBwpzvS99tSTMYsn9phg3CGYVa82zs3vXtMa3Pmtbivg2JXFhA5M9iaMqVaK4LsNCfMwHRR2veysvgY4QmJ",
  "key2": "525eCd2odLJfLcfTw1dc8DjTxDf7pDWoi1LaC6KSXQHA8cXzYtNmBw5kA5GNj3u1Rqf7MRE8v4vfhe6xeLfcXa1J",
  "key3": "5J1jW6d2oj64G1qBvjtHmhmTvPvLBjY5o38dUrpp21CPrACxYtDEW83op6QF5K6YAq8rfL8kSNxsW6qDeMjtuEPc",
  "key4": "UUuohsGrvAVKS8eNUQgp7X11SdbT4CAh1xgrQbWgoERZrRqLStWu3FsHxBThHy56HxFP5NGw8wqG6zM3dWtwP6v",
  "key5": "3Jd1bC61FsbRgbP7R7u8knwmhxz7Ka9tqi3n7UzfJ2fH9bKaAJCPctbnYETcZh5SLsqwjY2KxLcsd2BuPzj9fHLJ",
  "key6": "5fTCb9GKCCvRAS8L312JAVonzzPrdwqmSz1ZEEv2UQd9Ywzh1XfiDF7yWxFEFVSnTxn1amrGttqpyBJitYDbp6tz",
  "key7": "vsm3FuRx9fgSNJh4b4uhJhjjxB2WkEi6ap577BpJDJEz6CFksRt9JRZ7mbjXTHz5tre2n8EFJfBGQJUirmunoya",
  "key8": "3rcprew4RFHrYBA6xhAER7SZNUzUeor1GeD9y2TT2PjiELj1DW1oLRutjry4XhUwishoL994qRbyfgtKkPbwEUmQ",
  "key9": "WNduQ8VDGhL7Y46tpBztt3YFEJtuvEfymp7f8anKLAoiCcqJRXSk5XRYgFDzR5WeCw6cQKgDHSprpv3PkBowuM7",
  "key10": "5Pea3T8HqWXuwAwgvzNHxYUkMtdC3gF76wiD9b3WDg7ZZhU8ZzdiehWXoqVxBwTArF2ZPm4xLqGrKrxo32NUgWKU",
  "key11": "34UfzttNrypcTLGVmP4mzGXxtgz9SyBnkrdaKA4zcuWLicfzuMiLho4oFpRbDULJNErnpva9p1QLSFgaLDUnyhFh",
  "key12": "3MyeMBF5sV7S9uwWF97oJVtpKVszC3tDWR1MJ41MrvTvkejzEB7bt4dzyF2z55kJExFLmSHS3RPDD94QryhhifZt",
  "key13": "2is13wgLBZXyahcWqrspdfVNEwPVRQQcUHqdXhSo9kmsrLR4Nf5NdyPfpGzFioPvHHBipKJ2227b7RgcwnJVk4R6",
  "key14": "eRt8SK9oTLxtngQHSMA2ruvobVXFYVzm968TJPUXfxkCxR7cw18RLHGFHSS4S7KsWVq4ukMswJaDtPaffpiseEN",
  "key15": "4wewWCzDF85x4tJsgfnjY6g4mWpimtmRbfE3kEbKxLhLcSRGrvJS4U5sJPJYjcWv43SNZe6nsNige6LY364kZoWw",
  "key16": "29gwjTsT9XbJkBZdSapAX3FQNK6Z7x9JZrXeHxNr1BSjLifGydF3G2E2NzS51NyXpmK7wEfAdLPG6zr3JS39RFy6",
  "key17": "4X3Fi7D714jug9SeNrLQoRjjb1uswZ2cFGUeVgHGa3YqEx8Yw3unQWiNtUiMZU3BZJBfvfYXKE4Ys2zE4MkidN9e",
  "key18": "3Roo95ZYH9UY2jQTNCRo5ZDjDA573zKrcf3tCh6ppwP89PdYhLBac1m6H5QCSaQsif4Gtkqh4TBM535MyXdtu1jR",
  "key19": "4dmgx8tnDrcmxPb6end2Q4sYmkPxMvYp1oP1ryM1adxxz7QMmSEQfwKp5D8E3eqAF7bK9A49mW7prxbntLGjm6T4",
  "key20": "eCvu2pBfMAH9rVb2HEoC1FGJe8h7vTFRabNu872FbewpiqcYneZbkk2NzjWyG2Zmu8zNWWfjqm3PhFNURaHpU9R",
  "key21": "5XzpnNUUYzuLE8x6tcpZQEvUXetvwfzXtmbZ3561stftV7wi6va8EnoiLNPZmRFAdunEcsC7RKe8KY7qSqGeAiWD",
  "key22": "5A7KqLejCo5tTUYB6KZ96Wmpr12kK2DJ4oWvtvrVwHJJjvhDUgQCDV1tmb6ZvpCEQHk4eLTvGpQxcN6ksNn4vsvj",
  "key23": "mve8WhHLonTLt2sjbZKkLe62aaHQSwXmDabrd5p6NAwUkiqwAZDmFrJRsRinLLkSftKjiVyEiRs7baPmNXxv4UL",
  "key24": "6H5mGasK1G854e96jxVJAbJoVHf6fePyyRJtugYAF2HzY9gpNdnqcLX98s3GyzAyV9i4qMGFtVWk95ZmXcBruic",
  "key25": "4pMveBwKhEk7uZWZ74h9kD6v3foRMhF9wbbkaKJMi8cJkyHekwJMNDFn34L2Sfbq1tLfjvEb7y3i2QeS87VPzV9q",
  "key26": "sjgrGTX3q8F4YBvfctCYLSW86b2TBySjocCZnspmqryybBPqAxMBM5TFka679CLXrpPEAe3YMFBLcE5JpHE643Q",
  "key27": "4Kb6Thg22idAFvVSUQydPxakyzjSbybq2sJvSZbA36JyYy2K8QRtSgTb4y2nbwcPDCSfiYgfu5JQ4N8cwuS1MWRZ"
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
