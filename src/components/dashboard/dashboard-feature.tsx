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
    "2CGVfEUH9kfAo5k3KZ6KKVCVg5y7DD5jjxsv5FM98ymK4rrZUk8YhW8hV329UqBH5qYDLoAr67o92HJ1RSD3ok4d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mXZfunMrWwaYK1mKgQpCGxCLNWopm9vtgTxsERwfM9GyjzJZ7QLoBHLmW3cyejbmoEAfE2sncAEP1itKzTBYxzM",
  "key1": "389c5CbsVH3i2uofeQAsN4vNZMGXC9aRyuhsRVVXnDCgKWcXJFpLL238fxe6WXm1RTxSw8M9ooSQWyhDpWX9hYym",
  "key2": "3pkYC484D7m5oCxTnFE5aKG5cGuwEQHpKSQY6Qj3jJuDnKNRKtGSmNCu4z3wLy4q3pPoi2KuBkPdBC4YJU7eKCKB",
  "key3": "4vXVijfDn6F7886z7o224dyFDCW96gj4Q7DEEBW8zcdgmw8qTRiyG93ucVcCejwx9cTU9bm7yPnACm4DHUeM34eh",
  "key4": "s5nDGYT1SoBEJ4zfuEBEeHKoxqDSbtcGifpuCcLVLd8U8GLEGu4Dv5rzHQrAgxAVnJALHW8Vmab1y6KbYhgfzYf",
  "key5": "1LKz3Z4LTkgiD8Pp7aa8466k57Fpvk9z38DG7dn7BqvNwmStnRUxyymC7XwiswytCJkcEdwfhp7r4nC3GvXCKHX",
  "key6": "4FQdjsAgQKuBxc8YGnsP5C1qfSKiQ1Sa84xhvLbrqZsvFAmK7XJUVDcZakvRxYPf4dHuX9TKgtNfJvzKY9EQsCTi",
  "key7": "252H3VnAcCZhHXX34MY4DGyi7dpUemfWxa4vcrRb6YUZAuxXRR4vzx57Q9XZKfC9wzG9p4CPBrSmiysFVqaXkAtV",
  "key8": "DhRL4ycJiaWWdi5GizTnGnynSe6YdPnQK3Z9cfT935b3yWGGHCkj5ncmTm4x3Pjq2NdnxuwM21sKnyro7GG8kyS",
  "key9": "4RCCcaTQ1hyjXeATFd2jBoftrzrXrxizddUMD4wqRJAsLVruK5M3GmvNMtKKnWyWZef6i9tomfRjP97DtkwEssTf",
  "key10": "65fgkLYyTpaZQ3mqNKFhUvE3iDN7Sqihjmy7NAsoHHNChekbVX5QwmeLG3LLwsZer2A8XR9kCE8aWcmPkcss6MuQ",
  "key11": "2KwKjTrFCRSauj4Ben7xreadfafVCgQjJ7sRsBmUdWtYBdatHBBpiwYaxREJ6iDPLXj2Xyfia2m7yqxg8w1DXAt8",
  "key12": "2s2ucSgseHju9PMBXuJHLeNiUQsnBh53fdUTVY9mKkfKtWSYZy3sfqg95UnQob4SJt9K7XAvCKshze1NBNaCzUYh",
  "key13": "5adfs5yAaiudtqGqv7W5xMKjGYdyWZn2eeyoQvXVAxfU1WVJxauwKyc9oUgxDpxS3seqQY5nPbk2na4hpFqHue2A",
  "key14": "2BPLVByAGKGigvhPhUFiGoDPrd3p5L3FNPeX1Yx8pagHCQEEXTrmZWwiUv4X8GJthCC9fnLw64xERHhgdaHv2QfK",
  "key15": "3wPSooeaG8xRdDMm9KTQy8MtLZDZ8UWsRvWJuJckXBx2Po7f3JVaWLVdJEK2Fo6PkEXxqNYvHq4odC47zF1KEQPu",
  "key16": "4v5n6gvwVjj8U43jgrikMukhhVqwuTYdjWQbQVsj1h3jYfzzV9u8r2LCz5E17ubK9sEaDfJABYprkPPSUv73tcFC",
  "key17": "2PFfEZsa8RxMzDL8KT2VZ3bCeEZUgNpS2SDPHEawNjk7sVBrc5apocW6nygytFaS1xGmu9k2bGtXZrJPHsEZBqCB",
  "key18": "5h4wzFtnzGzNLp4yzwh9Cm1RAL2LVsRVCSKtjTFhAeD5LJ7bERqRGUP1m8h1wpNcNpoNzmEymQpGFa6rtVie4zmx",
  "key19": "PSWxn18xWPSfs6uYfCkAAr3XdteBj5AGXRccAyJntCUTbaiGwwJvkM1ZCNxxg7ZhgMEMsFsTX2bgvp48SPcE6kD",
  "key20": "2Vo1gyEohH17gJP2CkaFokaV2vPVdW7jbS4wZErTcdPQ4fbgsjsnVWMHrQSXp1nhXzad3c1BUmsuwN7Kms7o4VUX",
  "key21": "444CyY1QGe2Cbu5ZG2jjHkcnwgiUjtE7xwQjzoxfmdm4MekJ8ifpp2vhBCPb1mPHMVEkppTz52QaxQxYXfr68J1A",
  "key22": "3VD7Ea7iKRnhXE8EpHHQsDf99b9wYCSLBqYwvf6HmZCRMvFDU7ryHRujT9srSBqt2vxeFuvbyHkqFZvmpD9kSJiS",
  "key23": "2HYWSEvpJ6R8WyHZriBcMhFJAcQW191G6tCngGHQk6tw4d3eUNGocMtUvesfAJSCRtjMrzEKmCsajHtGFHuSAAHF",
  "key24": "3mRFVWVd4kCVeCYSiaLJprJBJBA5B5PC1se35nsn4HfmoyGNS3kDFhdNa4dcRphurwvzHH9BcHhUQG69h3yNkReR",
  "key25": "5PUCbAc1x3igq3a9gyFTkE2NLrt6PgJmKhoY2aqMkPZDShmYdRa32AcshwgrFCiJ49mCgD8rMZojF4UXtu6qwLxP"
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
