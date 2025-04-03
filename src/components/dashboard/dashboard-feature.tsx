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
    "5rJn8iSd5YBgGhiswiHCDJbfppW4siEvAsC6BwsMc8yWpFjX1y6dMqgLGAVHEndbYeb2qXWb6wSFWdwSoacN2NaQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47MVbwciDvuKDJtUT1YHgZzf4YjxsAmMcL1KkudYmMpXwJNjMhT1w7wC1PdzP72yHFY2fH9PAYPJBxKPKD9BGi3g",
  "key1": "4UU2Ju33FMVmieGJDThvm8zJZ68gN15cgErQi1E1zBA6zh8SNAToEFyT49EvH4TqusNtUuGBLNAqcoVNzBpM4T6n",
  "key2": "5xBAT1NVHgcXmq1xuif9Hua11znMpQQKuGTnsDe6FDcdDSjtaL28erAuJbaL4GCtBVRyXiQHzSgSXFk17TEykVWg",
  "key3": "C82Y6N1Uue6sQynzGQSmh2PWzS2U3SrykTLjWuh6b3jEQV2eDCdjhZ6ZBSi7DUuRsVCuEcoWBHW76nC2bSg9eJR",
  "key4": "a5LTCeeY34G5nQvRF9KgzeyeEyD3gJo2sxRmCAo9YZaKaDukQd1ZwfUKCKpdN8f225YU3ZE3WcGskK8RmJ6ahnY",
  "key5": "2Bx6LjDAkeq1FtX4iKEL2xnWGxYKDZgA66iPnaArHehx4cCirjr8V4Xir2sE9xZpHUnRCQAWoftZLuyUwFtEvxWK",
  "key6": "46TYwm9vEFSdRgjYi2er57ENMZXioKyAADArdL4H9JYywyPz871ERL11Js933JpnnG9LV4LwV9vZpKLDFs9qAYA8",
  "key7": "S1xPbwM13uigUEDSDNjo5TyaN8tQMwRXBbvhPEP3LHAJbEtuEoAY3NiS5xqRqeKo74hR4LQunP7eWH66Yh6HNfS",
  "key8": "65exYgq9CibdDcBoAWs4N7r1LmaXx7e67JzoZuECz4gtPub7uVjdH3Rz3fU4hb8bVJW6dXLJhvKpu7n76DTgQggZ",
  "key9": "4rY1Y5oxrCgYxatq9CNvFXCKjmByEkYFoAH7TcFoW1Ez2FD7tuPPLSbm4KViSamLaKr27AS2UeuUBDU4z2ui5som",
  "key10": "2kJzvxLtFWR6rmw6UWwcoFYNkxX8b4emx5bNSxG9R7MsPU3vyvuLV24ya5DKwXNEV6g9Rn3pxoybS85KKhioNVRN",
  "key11": "wQZaP2Xd8FfH8dq2QjnnrgCLX3URA2SRYrQk8rk5uCjSbEcwzKSLKKG5dqg6P71khkbdNDM3YgxdpH6cH8TEZKM",
  "key12": "59Zd4SuDprj7iCvtgWBTrbnfD6qgZtPj5nHWpXzjUwFNQNqyEtr3SzVBkdKfdABr9QcZrozTxQwchBBC8TpULNak",
  "key13": "5sK6KGhYnvgPCa8tZJaybaDaLpVZUdUx9TzgfreM65ikBKHVzEyiDGRE22ANqUZcWcLv6nbTLGDxMfArokmLtzCc",
  "key14": "4q9MLCHkJ9rnaoyxUBmr4T1PS7rWcMZtVaphmk7g8ERmvK48rmyaHvtQWePparPrKkfXhDKQokopAE67fW9NTLhA",
  "key15": "5X12Vtv3h3t5GyRNkNByXjdr1RvgDMWYx6HnZH2q4Pdkemi85acYRvz46eDKnEr26amqJTcDY6TWecdKPqJiJbQj",
  "key16": "3eSN7bXzmz6LJitwBKWmqqMzXLASj9u8JJ8n2HA9BX4H728D94aqRetvfgRtvr8yzHpo4fqFm5YF9chNgwyGw4h2",
  "key17": "36jtspD79Y5StBEC8bjYGJcsWdovWMh42VXM78tMe1AUTLSaRWWhZL6gDPyBb6qZZHJ8hvVYYo7oQjN3defVT7AY",
  "key18": "EVt96jjwzLSwXwp3mCVEXRDJBuXtXLfgXKC4y78jTb99fHsjK4A4ueU6Vr5jZvJYzJsjV4L9iqrHGAkbhx14GbU",
  "key19": "4drjEoPXKgLxB9FbSkbYipW9CFL9x89Gw4MpxNE7RwLWvGgQFuFmBX9hn98NXGfF1BYBAyPmS332pH14VbStEFay",
  "key20": "UcftMBekZccPRRkNx71FQipWsNzkHWRBYWPZYbmpGwmjrTXex8ZAPAcp84U95bQCWNs6BvdsrpvSccUVTq2mTMm",
  "key21": "2CrBct9epSTHMFGAqpmMoM3cgQsSqQW1RC7LFCZZLFYQvxio6TjtFwMhLEs1zXAuSGS2jqTokEibhwqhyj8d3ySh",
  "key22": "5tq4yMcr4zf3FaXDHacY2YvHK8ju6vB6QgPZ9ww1oM1xaaogDEpVX9KW89LkPswcXjitb26MwGph4g1N8Mg669YF",
  "key23": "5U5yTBM1L7q6R2kqJVsWkLrMZXBCwdmHyqacWfwfmdYt7xauNCDTo3JmDr26kVATJbV7mn6qQ96nP5gKmJMv4bbj",
  "key24": "3xFpqw1mUe8t1DJee8n6VmdUqLKPAjxuaoMSwsaGXQuWnbq2aGBwgb3C1gmzd5g73irHpekkMAKJydFrt21cqaKd",
  "key25": "2LEGHnK29WjyY7fs9JHeXU7LvaWETjGxN6aYtPrRsZpq7HyGnSdhqrLjnxc3rL2CC3RMVvwnpPRtBU45BCKomAhy",
  "key26": "2efxjYbVVfrcRLqtHNZLSzZ5F1ARZUzHPRSo6eYbuzvNSrPtV2b2neWYp3ZhQmeih7YBPshtYRvCoQdQ37ywxHXJ",
  "key27": "26UjG68NzUUEurmSZp5r3wBQwcWPmwmvoWfDNqtuP7GszoqCF5PdxwaBuuzKT1Q8wiCAvv81Agi4M9pUhbGKbj1Z",
  "key28": "3f1LwndbZppprgMW6SN5gUzVTbDV59osJtMgAL8biq4gCYYpPxokyCux5TMLYN9JY2y6mnrGYLGWEr3uAaNpRas2",
  "key29": "3tsvxStetATi7K27Z7B9mfmjWcU1HoLMeEnbxDZjjuVMBjHYjku1HGeRRmWpaWvpuNL9EC2b3r7ANCXLz9opWDbW"
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
