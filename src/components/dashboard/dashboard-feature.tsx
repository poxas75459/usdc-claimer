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
    "3VSadaYPRoFEbhtcVbXgSiUKwKDqRR4bBBDNoPTNBydmJdZ5fCYsHN2Cs4NBA6Xy5PAKgmPPmjJauEemBpmXfFTD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fnrSJHYR3ApnnxtcByUnj62Bz7FCe3JFGGrvvQGVYtx9uRRiawE32YNbucRuswLQ87HfVaeJxZ953bJf72yes9A",
  "key1": "5j6U675j6nECkx3yCD3SDdrpoBPcDpbHDZh5jHbGP9bSDHCUikAzMQSLyrucMumJudMNorYvdp8wjaLZGC65bHYK",
  "key2": "scgDhaUgW6aHiBr215amgtoZfdc9BCkdu1PF26EKUwSZY1WJdcsQNa5Wds1J65T1GCx8LwiEuyTd9UWGSKja2mw",
  "key3": "2agb2aEddrTwWeqhtBnPMVcKuEmeYhykkduo4uWFs47h8Ne4xHcb3MPFhomTxMe5DrY9J2L4gLDyC4rHJFGTaYkz",
  "key4": "3w51syNj98Z1Zke8Gzh58gVKU7uRNVFvfdA1FD4q9Cv35fMrPHxKNH2BH4VtX7g9gxmmPsTMS11mnwKb44Cqkuy2",
  "key5": "4ALQC6nUUoNFV54BncxArqwVt4T1g77svAbEqoWEVcm8wk1K2G4TyAma2Laphf7vrkz8yLnFmVw6gNGRiKWyzNFU",
  "key6": "2XiZJBnkgsB6cVpzCbdQMjirQrTdhrmfjXG1XXabdqgmrzNicSDbqHmPAhZMCQXfjRNtEvCtfEf7BUWnfykSvkW6",
  "key7": "42pkxDig1phx9hBhHhciL7M4KdXVgLkMH5Nsscdey7QwGCxem4LJGy5A7rK2du7RZ5vTeowb9dY952hW5hXadQfP",
  "key8": "u1b3dpYAoPKbwaWCqDPksoswmzJpLYGhojfab1xEEVSMz93JbABvKTniGy27HvJiBJLM4CNwRpimycx99Kkoaoh",
  "key9": "23AgVdF7xNS9JAV1xN6D3TR4LxCeVQojgRU4gCZwX1U2MMAKrPPYzpaGVekqeSHR2qttegkt9wW11f8Xc75y1LXx",
  "key10": "4jnmWHs7XbwCKiPuYvK5Qx3mKyhEFsQMW5e1WDTe8PYkB75z6rvM6fYjWDF4UYA49mimXh8KGekLkZ4eeXq788JC",
  "key11": "4kZso2iwvaBMbMHJLFPGvu1zXKRocogDa2kMEremENYFwyMfqQyujFGZjLQrRQsnCaannyJQHbjmLpXcWhxUuroQ",
  "key12": "5g3ASiMYX35PLVDbMNpXEykCqznMEkauTW8xDWFQTSbk4hyQCY1NVpdv3jmvbpfmMX1rQaXGT59CfLBLY4WNfqP9",
  "key13": "UHx1n7cjXJq9ndQojQcE1w9PjBzJaABjW4BV2nJFkKG5kyXK4pFErUfeWKQukDmrrsA69mUzq2bskxE1MALEfNY",
  "key14": "5Dojf7XCTC51ky6q5etfgSsMqU77DP22tHYLpeEJ5YinrWUvkGtDzeXt1bUE4HuT9rkh7mTKVdxGCWqr6baUjznQ",
  "key15": "5U2NzktGwBocEH8ZRky3jAixVYZdn3qfNqYSZTRayf3FRBHiDcaMv3VQ1EiJ4nb26FCoHB5M7PYZ5phLsVukAYMF",
  "key16": "5bi8DPhdb7bL7Vjy9vqo7BazSjSBcDyqDV7cRYJr2aFjpgurBN24CP4MFtYyF68TdYPmbiyyxuQMfRVSHmoq3Gu2",
  "key17": "5beSTT9kuzQZmx4gSo8LK5J5xX47ghyqUBdyTmhX3TzqHGVcZaTYXB4PuiEwp3ADaciyBR9awgzuXYii8xNkissi",
  "key18": "wFp6TDr411Rg7Buo4wMAu8mxAandbBRAAuyVxA8Hv5fr1Sdi6hdG6Cge7bEDa2yAhNnrd7tBbPYWs3garBypFGj",
  "key19": "6uKQF3duoM5LtuqZMm2tpF8Fc42NkCYTL7zXaryh6cRrwJAdcM7BJbx3tFgJNHcC4bs8fGdvZAJ4zvfe4Y827mm",
  "key20": "gHorcp5SrWyLmkxcejBBS5c19G6b8HSGxJYLQorDkXwkfBKXkXjXw23Rp3AL1zv3r9H9UfRCZhYDB6uMQbmhmaD",
  "key21": "2PvCsaRg9m5GbwZYfQQgGW7GR7vY5FCx52jaKeyfHbVhNBoood52vqXhe2drLtf5Wsr7KUqdjzoFvyeLWaetcoNj",
  "key22": "3Hf4gZpxT9ab59f4dTuN4jRekyMfkyFDHoaZQr5P3qgukhSxPJ5YUGYTgkZRjhMy4FtPudn1FQFwuAdYtLLUWhqj",
  "key23": "2pAQFrJyQS8wca1DE9Rvi1z5QPabfqraNCV3p6hEh46KgaL3XPMwdmygW1QuZHFtXLXgJjA6Ee3YT5C1LkxNWUon",
  "key24": "4JoXRDR5jya76BSY2TBfUryRm166jnoQKFqBgudn2dKETTdor9LajyasoP9FXi2i5v1v4GnJixKi4LQH6hLgnvJB",
  "key25": "2rJKBcB7zAt6FktQ1bcBNnr7JoL3M5D1ufWbFWCg9fSAAujybABq5HWD53WWDpL3ayScNQz3u7gpBVK3EnJQaQAt"
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
