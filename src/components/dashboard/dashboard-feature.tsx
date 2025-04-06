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
    "2GEX3FhhSogMymBSMbMUEg2ievPsVNfP3o8D6igG7WJv6htX2idt967FWtord5YqjA5jVeWzcU3uZqt7CUTnBcxR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XnTxw2E9RhHY7uKCJJ7pqBFwiZa978EXuVgSAG8uWn8jPspJ4VwfkS3p5fsqhJsk245H6XvF3cqZ7mCTRQ7ZY5x",
  "key1": "2VTK4S9RX1cwFbyH8H6XLKJgw4oR5kjCX1fP3x4kcPS9YXo18D4Ysw1XmYdBgdEutwMmqkng6NN7PLc9Vp78sf54",
  "key2": "2WLsFDwpVrDKaAVMrjvYRhTQgkMr3uQQnV1We6WcWh53wirtBUFn6PcX5k3K4VCPXTUEDj2k79Gwmdf17YXr3PBB",
  "key3": "5j4WfAYAEGSEASANnFb4RGN7Ut5q2NMY11BaKm4EnEPzEPdJ2FHVNtLLZnmVthMMQ4MfsoMZYWyxTJyuKU9LbNdd",
  "key4": "4MfUthvwq78RYQg5FX33zHZiTf9sCYRYHQPcQC13wDnAJP56Woi883pBRAmQsZkkz8CQR9DwFzhNGBw6cxysW7YG",
  "key5": "5Zoyf2dC2HqieajEvMgyUxHtwLJmhv8acnPn7jDtoJS2codUA99D6H9nnsu1hmZfgjmHAwRdEab5LVqPkckjS7gP",
  "key6": "2vQ1VVZUwxBtJNBFYyAjvosGBDX4B4zZfZui18hrkvR8yvwEU8jFPUFCCkh1uaPugjBZ817QVFgSgYxa8K4iX5BZ",
  "key7": "gSmo6mLkavaKgDibkinfoY54YXhAPBLqdamnHhvbJUze1A8Vb5XY4BcfHdN74EH7DiUYtFX3guNSmD9KXZBSnFU",
  "key8": "4MuJppJuorzW88y3Ac6Z5ox5FcyLSVt7SquwqZ1d7D4NwA6WuXwKmVEL2BCaWDED8LWbatbFibCJSZS9cLKR9MFc",
  "key9": "rvfTYymKcWVsmkaLkYetbD6gifPYMaQF5xamRus2C86LmHY35UEV8ySmezG9NyAH91vMUKWzRn3hgdZ2BTfpcoR",
  "key10": "tCG9JHdQCpbQTb2hFZGo1JUnN4zA54icKQnUYX4N4PP6dB817gZBfWdbupLL9qBg1xsnjzUDc5uw3rcUQa8gdcX",
  "key11": "WMvJgQXiyNYzEzutEJ6tXdHudyzKLCWSyjdpxFCjpDjs8vEpECcfoRy2JiznYvAq7dS5JJTVd98LFvYR6gvUb1c",
  "key12": "47kMXzGX69PMRBY1jYzdhZDygp75wimDWcpd7cpa8m83w874BMgVhBS2H35QFmcXP4GJjkZAeXuDybRMrikFfXXv",
  "key13": "3Nuspp7rrG6kKvWQMaE6d7aktrvhk755A9kJ9YxgQGSQg2kAqdtQdxvCq2397YpHjWQ6wWRNMjMbeE3DQWT1VrAW",
  "key14": "3V7mFUPGt9kdz7PocyDz9KXBwwFR6WDhfBHRJwnhQXcnfhse9fmTHNSHKJfsb2ZbXqdCECXHfRkkTNHYHwnaqBJc",
  "key15": "G1iB9n5tfn7R3J4Ld582j3WWHi8aDGR5V8ES8ob7VPDu8G5iyhn4m1g9VyFgrh5wHtBQcqxMFivcY8oBwPP6KBn",
  "key16": "TJd9UuRtVbQVmmDv4w8cvobpeLKHGbeEaWA8XrG6s9A5nbhtTjQUDtnrTfCqcmzAW7LQJ5zedP5twNysWopbTqM",
  "key17": "4Qf14XUkvzbegnPjEUb4zExu19YceoeDcV9sxi1hs9N3afbaS7ZhcrdU7j4b7ex2qdqmjuhsaCiv2LpyayXkmuFr",
  "key18": "29vcnyvHCrDryfn8ESKRwwMMWB6TtDqNYbWLNmBEGJR8XN2ib53Bsju5DGtJZvV5KJrcdfuFAVGUumeuGzVDyeyS",
  "key19": "27Nw83rrUrR5JkuUG2hQnHfAxLNZEfkg2qYteVbSREBgtYVqQfoYLwdNFqPuBU7DzVFHUFUJuX2gV5uvf8uzfGUT",
  "key20": "4efkj8n9guRKw5E9m29XX3CbVFmtTtToit9zoKRfTecp493zCrfzCZC8Zs4JhvahsrX9AKd5DzxGmk3v46FE45aw",
  "key21": "2caD98S8sidKBPBoJEutayXAcyNoVZJchernamgqMHwWztdH4FHo8myuGsiAKdtxnfu57XJ6dX2GzYBju1V3qrM4",
  "key22": "5dwM3beXZveH8fwdAE7PK5WmTkDS6HLWLCjZVb4sfP9JRHoizXcTjxPbGRuPGZbRp6NYNBkk61PtybNavnZvutDE",
  "key23": "5iTBsyo63YYHBFn1AQ9cTJP74NYLSNWcEe2aFhyUYtX7ZWfEjMrucML4Q6rTrhaPmToUm5XeZv6pByvWE7F5VnRq",
  "key24": "54gPsXbmJTk28ULmDBVqKvJCMcXNF9MnG968USqY5AC9PUUe7zUxNMthTjCCgQsbG6WpSdTwKDqJ6NgfQccsPZAV",
  "key25": "DLns1UNbXzs4ku62x7MpwUDbEQmqXgxxSLagZYzcjjuTeNt4EqVWLNQRMAs7mwz9AHjtFrFCkRNBhA18J6ixQcR",
  "key26": "3zttEB7Y2FtqMFq17ojhv3VHXUes7Vg4uTUhSRZetpS7514EFbzTuwAWirNd5xwcGCpQBvstjC3D8PoTMLS9nQDc",
  "key27": "moe7qGs8UBAJKHC9ugX7EjiqQNBk6qLj4wvjxDbFmNc8PFnS48bt4qF7X6HiJ47rRxeYRhGjHzihZQChd2YC6dy",
  "key28": "3xD4Saq2VuqfeWfyfcdi8Tg7x8ivQRBZRY3aatfNhnejyBEC3rxC3dLqyx2sAfVgQWKojF1LDe53NXMPhFnTZpMJ",
  "key29": "2VXwyaVNxPX5ZqV6RofenwNGf9n4MrdTWxMQLjXKfxYXHhbxtjpoZRoFkrEoab61iHbrp5jaJBJY5sET4eZEcL8m",
  "key30": "y74Efg1rm1jmwNE9Xt7FeEDtaDjxzqBa9Hy9nmzBmudpoGMhgZawp8xx4DbiLESLkUsMMBMSTLECndE6n6qaR3J",
  "key31": "2WmK5joDGFVwSRHNdRm72WdK21jPpEhFdJcVRSJe4hFCzr9dW6AKoPL3GYMsBnfagyjPxUu6g94JBHGC9WFuZWhk",
  "key32": "4zAwGSq3Pnz1BvgRHE11MkvSaMMX2JVHxjiZpfghPsj1NvoBcnkW9xdwcvwqPfP2qPnAxqVxR7kUYkd5ohnmN99V"
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
