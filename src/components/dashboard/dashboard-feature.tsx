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
    "2FfmkB83ScqeoV4vPdp1hBkqkji1MHRnRPugNBBfN1VF8sTy8cs7LTKKo5nsxBjAzWxyaxbrV13VdxUGujw8Nx5L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LGRv35TosfVj5QnRVNcZZjBPXbXLRqB1ndmZ4A9tk5zaC11z5m5X7MJzqL4yPxV6tn1sgdNsgMapJ7ZUUgEqpT1",
  "key1": "NdjjeTeLomtFv7xWjuwfo6VJN5558UL5G6ddVesitGKS1QJjJdUwfku4gEw8L4QVZkGy6UG656FRUv8xDPvsAkS",
  "key2": "32AMk9GRkeuqwfRxY7428AkDP1UBmQsR1iqZJEAmq3jQo7Domm1qUkdtLv7WXsFApDD1V6DnCc651EyEJgLDXkq9",
  "key3": "3qQnkCN2Fh6z5BYTteic2NdRAtaLh7vJaTwagr3U6rdXuRF3fp1bi8kCgtDqyJebbhrNQQKzNUYqnc7dixbq173H",
  "key4": "4AULVNY4TdC6VkjfPHJxGS7J34LHMnaskd7A6VSHRgZcXUvWDuWAFnbDdyn74qrEpgUU7py3CnCUw7jTarJsfzYT",
  "key5": "2NEh5pFVMMaADrGbzijp8sHf3T79w1kc9He3F1zABJSSx1LZR64vYk4dt2jhdAqh2fCruoZmjamoS6XQgpPfzAss",
  "key6": "2TYhEEieCvFWvwNh8hAiZ8UKd4DJav7mLq4JwCAKwsFy38biDfnuapaxFXupVcxe6Kn1Hwam1crmuuyaEfm7C1Aa",
  "key7": "PwYpBY3jdMbTUhhmGhAQMe6PVh5BZMRnqULdF5Lhh4yN1SFhZGZ2LvQzqU3Sdm73mh4HtXyfnvxUNPDD7afWxbL",
  "key8": "2xjHNCeyRtJjMsYd6jwDB99Dewt4mKcXi4FMoSyXBNJGjsamx8ke1n7SoUnw4buH5dmYzsBbGtjySBPfXZJuFVKM",
  "key9": "2jTRjxKVAk6jKxjstbbyvFvYsRovm3FQwz5EihjpLqBY96WFmS37dJ7mNznKrnfgrAt3aN8QAiCLQwPNkVQFgTsV",
  "key10": "NTHErZPrKWzU3nBMz7fvxhS1ymng6aAkYYBkpVY9MWReC63GghNF7E1PJDYEtHNt13htF1vy5aFGqAzfrhS8PZR",
  "key11": "tKYq1BJfyaZrFStrNXinWat7m8xDThNstdbbRstdia1VfWJhvWzt3iKM2i3NZSkkopzfcR1Gg7SsvCdwnfj3j86",
  "key12": "2ZT6LYhc9E6R2RTK5UuTHrFrEzMRkLE1j7JaiA4yua6q6h6m9xhuLvXtS2Y97mJpKb49JN3Yj2xNCJgWrSq9KXKX",
  "key13": "2jnGXSMZ9DXhJmkPdf98SBA9VQ2eeVD3DSpj39o4mzVU72z2fYT8rkWiyyYGCyo4manStDbTFv7xKqVjLqbAySGo",
  "key14": "4FYQKLHmJrG9Zmy56udScrDZy8ui24YXeLR5z4iHZJiznQEXjxyJWbDp9stpcDAWpPvPmaBrtvriWWs32RCehmEJ",
  "key15": "2QdcDVPHscKLVTd6hR9fs76ot1d5uxLAaiDPvuPsAqiZnCFeW9eXaCaKK77VwAGJ4rSqDKyftoPMqGMS1PcyGnwC",
  "key16": "5xgxRef3r4Dh79u8tdQPLBBca74BMucg7LToHwRM42Br6qu17QmtwgYfEajxutC9nHATHHFHBBSX5qZYqDNonPgK",
  "key17": "3MqJWXe8jxeLqSRfniYwBuFUGsV4pfnerJCBjQLPSBPNWRM2si7bGQkyayj5A1gK5Tyjkmx72A17nCybBQVX6pZw",
  "key18": "NEx8BCQ1LVbpD5dhoipPAKBUNRwPGnGxPHA1AYLNNGQ8GMZGwg82fmsqmC9V4bhmHNAnACLa1m2N6ysAXpTWg9v",
  "key19": "2E88ybUzgWxd4NAX5ZjP6bia1tBhxZqGBLnizJE2meGacUsmxvSJWeiQnGrkzHZhZ1CrL6k8NrgyhKmz7aiCzPya",
  "key20": "5Lu13hAzo7av1HpD4Vu3d8qsAkN7aEem3LnKtD1DuGoLYYrWkRFy1SdJyAJ44R4MynmjGHpohgGV1QGe9LBDXdQF",
  "key21": "3p42MvsPtSRGZN6971ooWeXJDenutL7FFEpDpdyGvkg21xTqChte4etGMaSbivyW9myD7QM3NW9bezftP2qT9fcB",
  "key22": "3wVX6TgUPeqmTYVmrPyMuy4XAkBaUfGE3aqUjhakc9gGmiV6YxZkXV7Bvfzp5NLuLeidF6qWdzuNrzCyP8aYCK55",
  "key23": "3eDvxCnzQdCMq9PBNscJ9HrssSS437uLeNGT4S7UGGNMZwKC2AJEAzu8z73WnqZ9Kdp3LzauNQV63Ed2W5GTFgAu",
  "key24": "52T43Dh8EBgA1qGVm2iuiGyPizQBRcv9fYiqDRsxF6N5Bw6He6yxhCuk9MGLcck9Ne4XnvnQxt2WX3QUCMenvH5L",
  "key25": "2xoHcWEn8DABdV4BG1Je47pLMPpQKKJiwmrd7qpwwk5Cwx6LfUHzRZMaH6WUF2xh7ceEekv64y5KJv8MaaPCinkf",
  "key26": "52ZB6hHTTEqnYqcKG5EmNUo4Dh3PFQxkmq8mRB2cUEfP4gwH6BmED5dwsqwaeRVzaY5N35PCMCuimgrTNpE3JLqq",
  "key27": "3Pm8Lh9EyDwoL2416HKU9yg2YSu4JkTL5uReECL4CKPgKWoGweuKbbCcnKmZWrKiXdo1rAX6QnBj7Uno21jKoryt",
  "key28": "n4jMv87JjhtnwXzYabvBSw6mZS5Cr2qrEj9EPbdsH7zJPDsFAJutvLmCA4Wf4KXoeWMrRTbBzG7txdNzfQrnnu8",
  "key29": "25AuP42FdEPuo1AZH55Hwi9vq2sEQvjivVCwGC3aCgX5mHwTzPnNpv12GbzYs69ow2SjC9JYtmNuZ8MeSox33QqY"
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
