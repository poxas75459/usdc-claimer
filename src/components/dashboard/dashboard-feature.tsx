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
    "3gVwBXKjaukDogJqVAyy8Q4Kb8c1QkQomhihu3VoZSifkRsuQKgaRHtJ2bsw5TfALco2huJH4AaMMSobjk3mwgTZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ySRuvmpwZupfD1FCSqHRNrzC7p3Q8bz2Jvc5XB6M4xsF1Q4Ajdnu8zmEAewvHsssGveczZD6v6mvjDC2MRuRtdn",
  "key1": "3pfWam9aPNYw1pY7GdSpP4qwCarHt7xotSbXWpyE8EsYWmFfL2E1YUYYoVbv8WgV3nZp31suUNHhgbuBDiCE3APu",
  "key2": "5CvDqE5S7g7RhtWXLRtXZNqweGG6W9YGjUykEtmbyFujFUfhmKxJ3rMENcAMVJPqDLHP59E5NGxzxivvgFTn6xbw",
  "key3": "48LeYXwiZVB5R7TfnRKnrszhPyNoxfAwE5iR76A3xpKewFnEqGksaS4ke9Nqei645hoAS6y8uaRZM8wabU73pf3t",
  "key4": "3SVFp15yyDRMxxnVskzzwrw8PdR4mUZKJUMDvdj7kXiViTwKCCizqcERbFAEVVuXHgwpQqXxfqcZGyAmNjxFh37b",
  "key5": "4zLuNCYYMEoW4Zz8T7AnHusABDUWTdhJVkDdPkhsxjBSgmxR3Z1anQzZ99nB99c2fqii6QrPaV7p8mWkBp4E6CrL",
  "key6": "25zyGB4QZUfKs4Ey1FiF6UtrhSDXnLef76nB1XpNjPaNZLmTz7FuK5L7737PZKbzzroKVabmffc6K6eJnLprCJHR",
  "key7": "3tYRjAJk3wTtpn9YJRfrSiWMcA7Gaks8sdogCoSjc6RzH6dqUvazqyiSDsDnzYSj3kxmFkRYym7sLcgeXxjPAAYf",
  "key8": "3B1xztdYtNcprgUJuMJYVzKTdaUikFuBb1EV7tihKMxQTSq4jtRpi1gUd8wP9xHXzyJZBHcQLHbjy8RxRSmvwfgz",
  "key9": "5z8rBbqykDA7E5huPSU3ypx5aRib5LLTbvzTmbLGZcruwwaTNdwEcxMpY1pw6ExkefKrUCsifJrwkzY6ufYno1VD",
  "key10": "4m3cDC6FnvwmWkbHMHNNY4j9GDpRUnvrn6veqQEyoEvfhWcC6h5SfpSBrgkATcBXV7aDu56sx1A3xBQRchu7k4ox",
  "key11": "5XmVLd8aK81dytaSXsRmQbKk1m5RqjuKGJbcKve9KTUS2k1XVGPSUjy3i2HmhfV5FZvtrKiHiU428JC4Ay57x6NX",
  "key12": "2hpUCnNSqLuZCYd3LirnLEur1Peexh7zEaTcM7xfBmQ4bhdQHEbEfqCKiL1n7ruWqsrfG65Q73QUquvS2o1zXYss",
  "key13": "36LXnMReTS1TUuWrHn2HM9dAH4noNv3Lgh6BSbT9AQGwvAFhDX9G9Aj35mpYj9VxvN1ZfdcTVWxDbB8Fgjr9daYH",
  "key14": "5vGAUDyskBEztSpw2PU1DYfT9kYijYZY1a7YxeHRDmcr5ghhZcABQ9AsKLcXZLBMDz3L5ekS2RiVo68eerrdfNTz",
  "key15": "2hNPss8PUUb63BbiL2AsJWyF7n2oMRAf3ZeHLQAU9eMpGKX1tCGknUcd62NYUkgWJhofgzWEbGecY19gDhZz11Sj",
  "key16": "4RBKUNMsfnRpT6K54wLpVaRAKsoDGvk9VfpThH53fqjF3962X1C8VNUrfRe2YcDf6HrC4sPsEFpWsTRD9D9FtPW1",
  "key17": "3PJ2TxBS1pyCZbozEi3fy7zruoSMyyimMNiHfs5ees6GyqyF1DjnE1CucFVSR3KrYHeZkL4U9KcYCzoqSTeiMvPK",
  "key18": "V5hFs5i42wNSE5m5xj7KxfFz7Qex4sBcsAsc1FeQiCq9BuagAkv36KqNw3d6upZGyqqbEj1QsqhYBohioxnzkYa",
  "key19": "2nKW9sC9hi1c6QjSWEmek7Soa63gnNcbGrZaYfcB3AeQF28KsaRMzFGr7sqPDJWg8gA21J5voLjZTffvoQ88VHpM",
  "key20": "2WChPe8oDCr3ygjqahkNtMPhrQ7SbqwPKx7cG1KYZW7Lxy6wVH7WhmT5KoVU23iBDwfzz7pgvhe1DiXwwiQLnW3v",
  "key21": "3NTCfvX879ZP2bqn2LsyteKgy6V9Xr25V4PoeTX6HJo8Td2NQ3ST8PybHtrzN69KY4X26sTCESMUi3V3sXyavokK",
  "key22": "6pLH5BTkcdmNfLkPgX6HpCCvLZKp1hVTkJniecA2RgzT5CgnQ1NGv3YJYGt16RSPYBBEyACsqcMSGcGGfatVebS",
  "key23": "2jhvQMYUqxDigj6aUqp9F3dLGvNnTQyRpss9nGJQhFULVMPNX91kkoKhGpTVzQpjiwjYeNJp8pVuZwgUzkxJELN3",
  "key24": "5YubmgeqNrarVPiWux83MJ1MvEyTwZM8aNP31EcKrTs7m9Ry85FWEQTAhvfmCCcg7GXb5FapCna7jDkiuS82QFhE",
  "key25": "5aqVjv5L21KMu6rtC27VrMY3q8LGkZu8YZKgWWA9VFMoPfS7G9tLBnz3zV2HgP5ZuULc3E1ck2X686PmrzrL8mC2",
  "key26": "4yb41fMYLK9ZsKuvB2pzs7KbZuLJG5iYEWpUPH91dWWNa7YKrsWRod1CTvc3WsKuAJvsPVGu67cEkhhaNnQrErWQ",
  "key27": "3n72MWfxdRXRe3ftaoGiyakrWfWMYkV8o57PXPx3qgRpoh5BZAYkVu3Hc1Vc6ozfEJYTpuJ2zNBoSSmnvKZbKTt7",
  "key28": "5Q1AWjWCvSTn9g3m86tuPPX4uvDSpEVA2iBruUehaVViiNuZtjuf4sRgJpGG1E9USjNYoSQ7hqTFgDJRbKbTbwQM",
  "key29": "3qSV8d6WD7u5rr6Kny8T8QY29ubKKfSdmub7ZbKrbpwnZZCfdHP5SUvpRuWBCywNLaB7a3J2KosCbQorR7rh9mcC",
  "key30": "5YaSd3bemUm5b3UNexqJqx9gqyWVxEtbBnKRhDQzEKso6679J3NJE6MAoTETH2uK5C8k4dsif6QxshVFgFADVNv2",
  "key31": "2ikydf1kjxBkdvaFJDVrmAU3nMMT5Pto1K4aFsuYdPv346HBWypL5CkCkqSg5JdHXprnVVC8Hn9AWfzqqV4nZtKu",
  "key32": "2dhaYW4DaZ546y3ANfqjiY988hgiTXtnTCg13cBWWVMmqWaRa255a6fYqsYPjjAWo4FFhQwjQbsRwgSitu37uF8H"
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
