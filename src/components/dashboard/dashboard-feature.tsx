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
    "5fcJHVjJfHsxt9hoXXS8wkGKzJfVHH3FkbbPYdTp2gNuyFNZ1JUwBgGbBTHr54yrKzsy7nSw8RNe2JgX3pL26hpE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xDcYzgeVZQnCyS6UwL8gxMTRhUNgqkshWFq9YZ1ACecHVs4MMFEnwKHZFHegdsubT3DFFe8J9m5AmbU4KKzwumN",
  "key1": "5fT3Vy6ALEh9zrNw1d5HW1i5PatdLgpeAqmTxCcvCru6hFgwWLrCGJge4DtKRcPGvRYk2G4FpsTMngT5KYtXYdPQ",
  "key2": "1mDYz1LhTziKZ16j1V833siqsXZnqbArDUMMRbp6PmV4WSQn8L4pNqhu4CVT8b3xPmrtCTZTNHvTnwtNYv8FVQo",
  "key3": "3RWA1rdvWQW6wSgeE6X4JC8BTMajfNCA7ea5PuaUrtjdZVLqsf3pyVNNigfFtEJVDnx7yRRLmUTcW3DEeutqaEkb",
  "key4": "5cMjfFfuN8EFJTEmbhrEJodthqmu1umyfgsUqTZRofiR2n5fg4WvdwcE1he4xJ4rCdNMX1B3CGr8UJ4aN15y5nvY",
  "key5": "46NCXsXbQ1gz8UCTBAiBKe5puZg61vRTTi8houMyCXfgt4PJfQvsccPsJAZFCQT6TRt4XQNWbq67irhQgqS4jYtx",
  "key6": "3CrF2SCvH8yXE2QESBmt59AkVMQor1RiR6VreGYe88HjCdtuDypkXrpj7FiBpv3R8TBYVLKxz7AKDsNUeC4rWMvm",
  "key7": "5MJX78ZRg1MTv8aZJYkKMrcG8DNGi22LyY7vYyArWJRVRe33HBH58r6dkeZVY6yQRifutAt58aovRUoWHycMVEQu",
  "key8": "4rmwnXMUeAWfBng7CwXFm7VpGuwe8jN2iBYdtvLsdsGQHG8ae7AXnfH3JtqNAeHYvQzYfuDMMP9dQfpFYVKz4Rzy",
  "key9": "PdHJ1nNgQgEJMi8yDpphaq7BRR3JhCZ3BUihG2qn7xWz9R6puwL2xkn4puPmgqU3eQcd4EmZGGmce7mESFfvy5x",
  "key10": "5pCkVeQdzeiJ9xXseGEgvqU8WdFmuvyuKC3FFrXATkjLY6S1fWtZKWzzMx3Lx9K5H9DAYWGuWqiwqZjLpvHrhqYB",
  "key11": "uyMTUxhtWCk4uUnCqDs3wWGQE6rAKrAppQRegGRouKGEbtptoCXhD5PM6e34EtjJtuGWDgHbCDJ3BmXDYH91VXC",
  "key12": "5iwaXWLPq17K5AovbTuEZzTSQ2nneiS8W6NHJCoALaVjjvLqKuTnDCh8oRUM2JME4XN2DJDUZXHRV7pDAP9ssMrZ",
  "key13": "3LzgWdfvhiw8h2wzhjyczQcux4c5424BktBmS1BQVfVBJvtAJMy5ZWjnPKA49HUVF4jKQtYnWQMpyneELhfEBebm",
  "key14": "EbsmpP3K9fXztwwpNzwJyjHXQo2SWHoPyQGW6ibsigFQn84mG65QXcERzmXc9dseJUpBRpF1f9AiJGUZTKJ2Tup",
  "key15": "5x1FHZQncKA79pqmyDj7vfkiBBeJLK3GPhenD7PKLocfYmV5RM6xdy3RwX1JrntZyVqdwMWKFKhThEzP7HvCMXuE",
  "key16": "3shf6uZFV8e7Gbx5169Cj5Gh86cn2pxbFgSe3hjYWKXoiZXfSxTHpRt3wbYQnoeroujUsVVfxnpfeFWDjvWHVpPH",
  "key17": "3nk8y3HxikEAdZo5cY8VrDMBUHEhMUBWvm4Lzoz66wL1MDTn6J1Jo2UQpXrvL2iYTrSCX5fiXLNVfgtf4LiKLh9z",
  "key18": "4YvjXGAszLw5v96xss1w9Xejx11YVt5VoAsS3KC9FL871922EddaVcTs2bUgeDmqmakoM4Q7yLKLYG7PCK5TbzMz",
  "key19": "4CaGA9ziqgLQtLtJkS5Lyj1PGTr95Wk58uLPUB5nBxPJ3GBc297RWgvrRct7nnNaqAFFXnXYieY22zRKu6WrFZkc",
  "key20": "28WqMAVVErYjEgKC8dHmzkcBiTdL14vhbjXBtHsuwGTcBD6yB3JFMKTSwzzx8Yuu7KajSbztFHqqdnyqqCw5UCod",
  "key21": "58VmiHDqWmuSQrXQvj5i9HgGoS6D1boxB3VQeoaYA5zJ6qEvaEzJCRtk7waQaUZxwT4AtX75hNJAxb8hfCgWEr4n",
  "key22": "5uusyuApKMxfcxdHNUqXrHsYimYpksuJR4kJG19Mw2ivqdUM5sbTi6PrrtdmoL4Tg1EP1FosvGMNTdadxZfFk9Jk",
  "key23": "2y7KtcSqwyK9E3nbpgi3aWxPAjs3SuVPGzF96qsTqxJ5jfBrEhXat5ww3T1aX7BbfsyuEcgq8nEm3veYCWuVC5Cp",
  "key24": "4ujQChKsXzhQUGfFodwbspw6jUPUvBoWf1MCq1BcPMnkyxNp4SpmhV6EfKGFtNtVr2M3gZov1gECXgffxcaNFWwG",
  "key25": "uJMMtiJeCXBkRSjjvF8JvEr5BsTA8HBFv6wGbKbphgcJeB7LJKnZFba9wSZgozDJBXjtbHxSZ9PPkmErCXqFLp4",
  "key26": "39dk6U67YdciKxe6RsS5eATHPUZoLA5H18F3hpvtCPSpScqJNoFN9wobbQgieauCfwryyFdeBkD8N83iHJoFqsyt",
  "key27": "3rB6Lgj8skeXoyuFErdEUf7sUEDcrkVoSBgQqfPC13B7aZrNvpJSBkyzm1QG6G2nEUfWjgvX9t1sfYggPTm7mhTt",
  "key28": "2sRYJpaqJ4Yyw1zxWMedR8dFb1dPiMgW4pc8CpQfhnad8p5CNNLM48B6iwKhQ8H4pC1kVNhaikZq2BZgjT6jMHAB",
  "key29": "rkufu8o3fcqkzbPrpEdyqqLkgYHCmHLdimL2QU19Ngfdzd3K3kKFLkVe4pocdC3TF75wZU7RY7mkdkgAgnCkvSv",
  "key30": "2tBByh4PUEaHMNJCPsUychCLmTzcpnh1jWndq6sRkPQrCFvGmXh5QBh5JfEV6Ceo23zqNMJdH8EWMMwJy6FCE9BX",
  "key31": "3wcdT9T4ebtK6mq1BqJBxmmBpR4BX6hbmxku3fPFEghzqP57SLA3kd6ftadbsT6y9YwkHXHP3yLt98n7kT4uaVtW"
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
