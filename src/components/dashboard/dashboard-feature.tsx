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
    "3a678URZo6CguxYqizRhQ9pDZLWoc5S9z3DCMsSYA2F88p2uueee5Xzj6xwwuiwZRetVroJiqKGCSDGhJNmyo2SQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CMiuPK6KzoESNxSx69s84Tm6z5mRb5xARS1W6JDJBh4Sz2nFHBrZ9QZWJxyH54N3YtetSRbyibHmdxs9nTRyge5",
  "key1": "35SCEXzZvRexWaazXSDbcBBRSJCu8VgzC71rTSv3rYzJT1XfNY8utCLt6Fw3zQXNcD7rPxyyVfSfSS1UpKpXXQxi",
  "key2": "5JPPrx9eBARHBy6bDGdwei2KhNTsVARtKVhWAPyTYJpXtH5BsagxCFNVgRZVGJph2gRuZgQafz659ncmS4R3eDAT",
  "key3": "7urqDsjfcLp5hRMfpcbM4YHuK7XLWHGo8qDyggeJCNJ4iL4W2HvzmG5uPmWhkS5Yb115vS7yve22bWu6sPcvgB3",
  "key4": "n7mimrHUfvRh4rQaj8SPk3w4CBmup2pjZG5e6uGiNuxhe2xEVEdvaDxLKUUYdd61DrdYzVAkY1RDm3qNPjaXo3w",
  "key5": "2eXowhYpbjqrH6TPxdSJw2TH4LETLMtdmyShxSPYvhbGfzXvcxSPLEAraFdKaHiaYqB3iCEvs3BvHkMSWuMSQfGR",
  "key6": "3wE3VdCbUWU2BTtyPvaGbmMu25BARALBkbRM58tpofZBVJbnsEa3mwHoBt7SqiWgstgXLonHbSL3v2CarrbFkCjJ",
  "key7": "5RMeKCTVvzteQfMSLq7wTkGUnipGqvYWV87HHnQ8gDRYb3rS9GC8PpAnfBcGffDQDSd1Tf9m9XRA5i4BvXCAMHmu",
  "key8": "5zmuPpxa3cacxgpcSVbb5egv9cFTSTpZPwaiKQxN9R415LwFveBaJNvUQeJrG72y7ChmKX7qjcpqFR4VE5NpE1dN",
  "key9": "3PhSRiuMzJq2PWjrpHJ694JBtFLGf37YGKJQkNvxTDPVV6gtoPGYXHJiu72imSnXBhsw346HhzUZbsXFNq8SPYf2",
  "key10": "51SXks6zuXLWBvHXz2W6eq5rrbREJ1BJba4PwdqddR1rrT6UtHpnhsmdVDL7XpbgGE5jBFt2MhgB8Hki8wZE6u1C",
  "key11": "5EXvasAxonZA6YafV1jiWRWQJLbXWk6MuCbC4XB7wNMrvKAj3MSLMBg5oaeew3rfeSrKfvPYSKBLJTW3Kj3Mo7uD",
  "key12": "5FAWLoT9WWFCXD6Z8PMHPVqm5fdTdBR9XQ3MDgQPUavRBAoPstkY2ffFFXJQqFiFgNBKiYhyo2rxsNqM9KPtGYft",
  "key13": "oaRz31EpCn7dei9MKD6rg7DoJG6MbNxYf6YWvJMrJy3rJ8eFspHqUEpJG5wBfppYfNwYRnLjdBmDs3Rr13z8YBt",
  "key14": "3rSBAs4ewDLwTj2L5HBSovico5U4ZaJfkyEG4gkEmWv5uV3EsZVBzCQmg1KxiiTaQeDAQt8fUaNLwnvCvbFW9Wpq",
  "key15": "3HnZka5bRQuhEkvNv3C4QEsUtW8zR1AZ7FRjELKcXgxhzXPQbEgcbW5XMVgKdKMLQAiFK1HrxgA9mFhXmbDpW23g",
  "key16": "3e9hVepmUghayfKAHjXudBp8GoHaZUYbv2CQbXaHYuFUJ9qu1uEDmTCBh4kHUPk2hix2aHqhnn3zbDTxgTAwY4Ys",
  "key17": "4kHDvW9hq2jp1736anz5xiK4ZawWrF6419FSq5izYGa1v9VX1NcpGQKXXPwvsqdwTdnndQ8mt9zxd95GQyioCH9B",
  "key18": "VVPAndQfGW3351ea3YpnDLhW3gqxnmBhNKwrysRsH7MPP4oE2B97X39ichunuVMC25jRMUP5m9n6hEqhepbyWDU",
  "key19": "5pS5V6RgiEbt5Zz7Qz2Tfqow91uwVF9W898kbbpXLhq97n1Fr1BoXpCuCEVpJgfmrxaGL6PMNuPsVD196LVoFka",
  "key20": "343cASQqqCDkyRfxQKQxissueHpegVB7Hre7ng7orhBoAqFMXEdk18xJ9DV7CM7kafps634GS35L3Bb5aDBFjV3C",
  "key21": "22MjTTRBA1uhyTrLr2VQWFCafBNzfWsRDiB1wpiHhmhveRrsQoNhr7hdB1ZAtGCSgfuC3QjN8cdT6RWpWdbTvKJk",
  "key22": "3oon5NseUBNHCvEdDNEan6w2FchzVKQEQpqVb3iC5RYswe2ZN7HiZrpK23THW3xdTGJ9aUDfZzSUCNp5K5VBe6CR",
  "key23": "4L7K6fo6YfHEpxH37mXViDAEkQp55uDeb134eGQ1sfRACoRRgZpduAe9NVWeFqmogZ1hLnKV7kMc6X2uVM5esWDH",
  "key24": "554yottuzjCNpaHzgdnbQ2CtFjC3YHyUa4tgfxFRhkh6RA1vnh8jd2cxB57XzqsK7u83h8zf4ATjrsJ2ZJaWg7D2",
  "key25": "5FBw1yTMSAYQFdKXgm9EJJWCu3ToQbLfMsCzvSCj7YL91r2dLamiQs4mCLXVAb3VYcrRabdcW2wYcMDkyNGTQcdM",
  "key26": "4RGLwzvvUqqWqhL4i566fn3RfKJtiwzsD9Bgq5doBD7UzX4tsXVe9cnyjzouodUu86QvBwxNFE8kQp2gLz4g9Trs",
  "key27": "2wxfThzvPoaQoqiZ96biJT9cYXPwgBPMiSpEZxhYrBpMZ8EZQ6upbh3nDtue75Lw5cQhFHhR78rpRbzH4CGfZH9",
  "key28": "3yedip6YDxZFTpRfdu1jHVgE4YpMAs3a3E1eZYQPEx8mSR4N9aCh4xKiuacBg7XvnzEQzWQG5Lz1Em9XkeySwgP5",
  "key29": "22NwrKVLdnXREdQ1cLthbCKC9iU63anEMAETsT12YBDoq9A5HeQzkNXRxqRJ7FcLygZpcV3rmyJkyLsRunEK8X9J",
  "key30": "3EYaTJrrMnKXYHXBAHDGu2mTq81DjCrqH3h6H6xEfnDQAeWaVF1kitGcpxXN9bbVvAzSprjb766626938WSjohW8",
  "key31": "5STHDD7GrnbrcjBUcsZNTBGgbtgvKRucd1E4Q3GY5TgYYojrHyP1nHhDJJvjSpLYwP2LuRh5RKdR4pWLg3zGpxAG",
  "key32": "5nggVujza8GG8Qk9SbvYK68cw7uV6DV6QdMmT4BjkC68Myx1DFrNudT4HM173PNmrXJbRuVLU9tC3WGxndXggS4a",
  "key33": "5FCQCZYSyhLH79AhoSuKGc7Via8tdLiaBQabRhZqxkseMH3nLrpm87j4d72ePWy7Lwhht4GuEotPZLmHDXZbYW8f",
  "key34": "AbKJ1ndndYDsQn3tEmQ4DouArjehp8rDDPBgR261GwsSSSnao9avp3exK8AommKf9xpBXbPABZrX9d46M687tg2"
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
