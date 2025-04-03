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
    "5GVyjVRB8La8rNdjgsY1V1qacLuewmiKQqGjJLquB4tKAG9qWRT9uLu8Booh7jcBvPCtRSPyngt5RK3LfvdBcEES"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qvLfpqizuF3heq4dxK9mkQyfqjwbFdjeyTGjozohojw4berimz5wzDcZgZAWAuKmCeoGXVaHqq5iiZ4URjjh5AP",
  "key1": "D4q4knXoF4rXt6R7y3n3JzycAbMMgCFzkdxvGo6hUrpWwHr4VYTZHcsWhBT84RgMSha3dwSwQCeMJmWEVVHdu25",
  "key2": "2EFDKMRwNZ29aLDgPNCojqJRVx1GA981zm6L77BTxbt1iUdVbXsQL99gQ9dPKQwSFWGEYJQFjEmuVp6gzvECSqtd",
  "key3": "UZwFt7Pbqwa9AretnpQegxqvaHoEJb91wwcPwzkBVYV47QpvNTnXQW76pQswABJUvcn4grETS4MK9A1SCdtSLLk",
  "key4": "4pWvPuG8SJhdhTf5WCoF7grfUwCpDDUf3xN2xHsugHzCVo8ENCpgKBiymjbEXTpDUt92iPDqJYPebkZt4rZHky9m",
  "key5": "56PQsDko9vBCGf4RGy7LdHMXHzM5TBiBqxQ6GyNsaLDgonLnBoatDQWJ8VNzqbdwam11ZRMEiuM1bbsuXHcadWXR",
  "key6": "3ABMtf7CiBtbNk3sYSL3ssLRt7W5FqkXLZ5C9Rsjoww4o2yq1ivPngLwhcRYZJ4J6Xkttcys3QpYoedKpZm2s3Av",
  "key7": "5g9HAib1duNhJkGpzJuhGoJ3VVFeBr3v2HnbhV39zF33HHCuM4p8F4CpqKwxqTXbUYhtzjXsDAEQ1y1xj8deDD18",
  "key8": "2ZxdTP4jAy6wwprKPubfVmpz2Bpi9V9FkVTJH1uVKGEj4KVZmWAekwSG6stymJCC6244aay5wqCzxDMj9i3zVXry",
  "key9": "2BKQqtoP5RBqpjNySP3z4qyhXXX9ZXkc9irKfMfESrGdDtdyJabjZaTZPZJt7LvBuepZcNwKwgsCJyLg731TLjnf",
  "key10": "2Sf53pGaWGP11Y5kg9imAANgXBAcyAZZpVmipZxjjxW45MMhppuNLMH81Zc84tTmwmt622xLmVn2YeqbjEerofT",
  "key11": "2s5JYJ2Ka9fbpvKYFapCFKTi4ghgDNCbJSJv4u9P8jrNm8uoiFvfmAXa78o2ab4BRJLJFmM8R3azeoGRFivzyTjC",
  "key12": "5D3882gTfkUBTE6UZA6bBkCMdcmF7TuKFcZKQKLaPW77Gbz5NWtEe4bFiUZgL8M24Tcw4gYoEiMLEC15ccgvAN6R",
  "key13": "4nXx6ijjRoMoaVfGKQvXGwxWFjzHb1fsRzZ7Wkgm8HJf4dehAfH9franZrFucaKSvJLs6s3xapbF2j8MkTXvjatg",
  "key14": "2mtLLwghbiCV3gG6NXGyDynuEn3ZPvdeXc2NTszHr8xAB7nHvhgT2AbUwoNE6cZS73vbg2jio2K6Uj1ffCSiLEr9",
  "key15": "RvcyX2HcmKVA7yVsPsyGWJB7GmLmwJFw5R9DtAmwaxQBD5Q66gN54vNXxK5MwcJvXhPGxTQtvMwGBWBPKqBvVuQ",
  "key16": "53uSLVX4uYqe7jepBKn9tjyVR2VgBBjmZjittHG2dpLB5WEDVJGqdZnqXAfqee8hygQD418gMbznvaV5X77N7v37",
  "key17": "2zhjz2b36Hdr6PgTKp6Vg4GNW1Mq5JWEwjjkYzfPNkHChbFpjesXL5eLZGircEAQWiPjGYZGuq7vnWDzbJXPELDa",
  "key18": "4m2TvHCj7g8Evif12jPFFuT8DF2HLDdM96f5q8ZThGeQ3mDLtbTJTQ4BgqoJHyMV9WrNY8aRBbix8bymmUCaUF8o",
  "key19": "3pZHEzVg24dcfYaWqLuACBDxXsAPJqCYTgi6PKyk2rvWx8t2UN5MfCDsuktU2A9pPCR8ftMo3yD8HHFvQ7iwkwGf",
  "key20": "thSCerEpCzdKSsFEqVeUVEFzNhch1bVNveg8KFNfc1WQoT4Hp6jmsEfyAmbg7A6HyNp9gzyf5zoBnad2c6yJ9vp",
  "key21": "3ccELYnUcszCJB6ggwEcQKVYhc7rA5dopPojLiwMFyo98MWTiUmG91wT6Bx1FJhW9uKaEZoiHCXiMuHptwgcczXL",
  "key22": "4ZNd4HNFV3PBmcPQ3R5ZkVZjewHrAvgRHhi364NqSArmT1LrPvGRoYZEHcYad2Zed2Gm3C4tWYo4R7LA7x6XjsBX",
  "key23": "2ZCMFhQb1KQ2z2JVA58SqCZs9QxQtr6qBEmD3UtZK3XyGSQEQp7b4KhH2DHGtqkJycEJc4rqmU8JFPftAq4fgt4",
  "key24": "2UmJ298AWs6L25ezZnnqUA9QrMJmGWFwywvCEpQMrM5vAymLsTErXm8SVSncyFP9s1pZkJAAR8xEanEcfP5E9ra2",
  "key25": "vSXGYxcnHvQbxvSRgijZnzHVkgukE3RM7yXRhmfgsJjU1bkpoPyHZwirZXmsLWae4Wvxza9qqEBDymr7icg4RDW",
  "key26": "44YvDq7gwDcP2q7PuU1rgqyhPce7mHapZ4GLzpHGZ3w6fhkhAY7YYwsnJxSUqafHwxAPRqazNZU69J6KGzznYmXr",
  "key27": "65KXKhXe1EiJA9Ddwpqk3PmdTZ9B1zwDAgxuvK4b5RfrJuY8kJnVXsU3zSgnLqf3JM3N3jfcEbcFEdCmLvA4wZZQ"
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
