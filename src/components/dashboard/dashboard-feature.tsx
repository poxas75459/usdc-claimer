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
    "kBRf58AW4fxfLn9SkSd2X7BWnhQxEvjNAdxDwVETY6VVc9igjzmhLhniN6i7gwkC6acZe44T8ZA8NhtGfmYGsi7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yE6xLWga8dyykCbjjTKmXM778EGq2v9FCRu4ZizqUCYcPLZ5WwyjVyABmk4nZ844B2TGomAMRnfHgc32cBD5rWh",
  "key1": "3zKm8gAYBHZtwCvAYudQ2KcERzsohZDv5y68vVLHsYv48cFWSCE9cHEpopQuzgP6MBijBUcHMRsNWXbxeiwRDN5P",
  "key2": "4LMk1gpMbw34cMgN85JRsAsjs8kPaf9qSa63CFQTEgHqbDdxaZZb6wiL8c5va1gpSEAqdjG7a8iBhkbL3VYZ6Xkr",
  "key3": "3Bh7UMyZ53KeQFHKnwSBipa2gHE7uEEVQsNgr9LvefDp5gT3JVQ96ckBsnjo5BiXtvxPhQ7tizBi4dxhudckkMiW",
  "key4": "2r581zaZzn3tbKUabBHN4jCC2MRYVJurKpFAm9XjsyujRdKZUJaQeTPAck9f7pBT1FijS2op8PPUscSH7UCYN8yn",
  "key5": "4PBrQFBQDQ5jGDrncTV5hVnHp67jzvxq3wKBM6HFYaa1KnbPCrbsBv1gKQQV4T9pK6bLCNznDTqcMpxS7MFtxa3F",
  "key6": "36tHJJSZ5Gc5WJkMtQ5TFbHueA25GPgvxZJGpuuT5o4fv6yP5sfuXiJkGys5RuQ4WSg5JqqXDj9tdwxQ956QMiW4",
  "key7": "3Q6oaN9jNSjBTyR1R3Adu8AoSvXo8NiX2gnCdkJf4Q3PzRSj2x31wTvdkAAk7z7SdLFKgRFit3PXCRube8LmZiZK",
  "key8": "2Ad4BMZH3xHCm4g97w5NSY59amxEKuSFYGGcSYDeexaeGs9UcYwQ3pM4Kv3newuDxH7rKZ99u6czBnULiXQimCM5",
  "key9": "Vbqhga7TCPHFApyCR5MipRUmXK1ySo5Vwm7LcdnKkKB5TEks76CM7Q4wVm2svy7ZJx1ccruzzkRro8uMW6PgZa6",
  "key10": "127ws6iSiWz7djKUAPF8gecvzHzu4kb2Df6zPt2JKTsaEH1ZLDKMLya6NS9ANEZX3khwz5VFTZ8FKK1apVReBTV5",
  "key11": "GVKSBp8ej6C1FGY8Y11TAH1RihvAVwKVNQ1rv4L3xC7NgVo7F4oCQKjWwxvaycRmmcX6gcQfT15mmMjuz96GfCY",
  "key12": "4qsSmPTnYcXnCsnBednd7mxC1CH2C3gxVcvahZUkJr1XpJzKnfk964dhjf5WTdvwwxD1MSBxcgwtKjS7Eb3SnMW8",
  "key13": "32HUB3xj7khGhjZn2A1PEWwUrEAZXJ3fz41m3z3LARhWZ8nH5uaG7Gohn6RCBafNK2yeM4zRDDTPmzVK9Q7KSsxH",
  "key14": "4eWRUW1WsvuXazu1e119xDKJjcG4yxiYaUQaEJku1KbVgs3BA8DRfPHMPGDUbi48c3Y5wU2uGEnL3V4S4nXwMzbK",
  "key15": "5eDJgop2aMeadLkU6qTqvD7oAaAKe7ygwkhMeDHS3iuxUyK1qujJ86EA4X3DBThv8t8k2LgcHYJqERYEnZCWbvGb",
  "key16": "5AVKft9tfx5tUJ41mLmQLqaeFyga2V3xHnWjTxfyz5Fk2bDtJ9JtP5nhiRH8XhHLqGTBKY5SrvaRAmwAfDXjcygN",
  "key17": "5Qo55edaUBCSwyYopob7Sds65Yys8ukg9HMg3j4CtvfTo3MYra2eDtXhwSuNSc69xFNxEbSn5Kctj5BD9AnSTByN",
  "key18": "5uY6wibGxYoWXj8G3V3E9aFPRNxmY6xZwEvnX3SfV8KVwLDqsnnV7oCujKCGzzwDP8oVdpQuuXAhk4WvKBmUN57T",
  "key19": "46KVoLZnx4VpaYu2NCfums2gWhi2bEH4mFPnBDJZFBGCnSuoMiPJB6znJRPu6DVHjL3wqPYmtW4cAamk5srVGt3S",
  "key20": "huS6vmdJivs18WCXK9G1gz4YA3efF281gFCoDMD9eGoB3zBCicL2oVHih1riENSvJ5wVg8fpckXBqA4P5fw6kAr",
  "key21": "3iNmT32i3K81FDPrLsN2vrXbiVqkAemE1G9K263igPxE6kQfMDrgqZMM4KCxTZt4P5miAtNY2p32g8oe9JxNfeUM",
  "key22": "4fLHqPENnVg4jv8xrUXFj3EKK9L6tMdCjUkVkBGo747ytHN57yt6TjY3VMKjMc3x7UhX2AFypqVLxC1fw3covqwf",
  "key23": "27Jvdjs7BGgpFNU9Wbv4Pbxrv7oLwnGs9N3bDq6Rk8HZTHydsJ46npHiaBmWxxwc5ntwMsZU7mDgjePgEFRVTh4b",
  "key24": "TGCvvuvgYdxpBAdfmZLuWma9ygHZduj8yn1o81c2QhAKiHeq6utuRrAW1ZQzqz4qJCXzPNPBCLYM6hMYDhNkf51",
  "key25": "2WvyUo4X4NDKxAPhc1RoKo9djLQ4SnjRUD71wE15Ay6Szj9g7MThmDCSND3uMxv2etV9FqftxMsigm4LUMxSmaPG",
  "key26": "ckivY1sSqnkFSiVepwdGkpmeY69xSijVC2zahP1Q4ShXc3c8Nf1PEsSQ1shYNMukAjW7EZq2EMfXfv7p5vzCZ2T"
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
