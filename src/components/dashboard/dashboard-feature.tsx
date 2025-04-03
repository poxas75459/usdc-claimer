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
    "3FtP7ZhdaxyM99GxdmomzmSS8uZuH2CR7d1vLHKrA3NRKmYnM8ggKo9NubGhZowjCjW5BZrWpBqoiM7dg62xU9Ao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yQVAsGkynxmdmWG2zbLB5NowKu6ggj91uc5gzJmSLR1cCaDxHM2ygqs6zQdL8412yXD7P56KCrZiHc2Tj4v1bDL",
  "key1": "4cimctyeHc2HsivZpdLeKwvJXkMDiNQsmbvyCth72gBVscydZj4mkPooodd3FY5eAzafWbDxFGPvxzCWrPtiVkPM",
  "key2": "jUYpvW6Cf63m4bUXVHAaVi516kjcFRXANfatcJVai59ZwWQ9q1uVhFPxwiFbBHG9ScBWSNeoJbKue65Hk4TBqew",
  "key3": "4kdQVTsbEgsni5JMZQ4m7FFWWkM2CkzmWenBDNzQD9tv1Q8tMTZxbCRiyULDJufXxZh2Abf87c5eRJLKEnEuNZ6o",
  "key4": "C4gZWBmJTk1tThg91R6LKqznno7VovehiUQinGLukaCzpwff3mjCaC5rHZd85MeCSZboMRVycxLdkiEo6GCYZRU",
  "key5": "4y5MnhNSMJLtHesmqgJk7rhXnowsj8CZNLbDqehaKkuvnNA4jjCEmqisZkbMxiWbDsCeDD4Ninb6gBsT3hiJy6EJ",
  "key6": "vCg8JFv6Z95qzUhJ7rEenppJSx5RxNFHKYtS5nsCCqmjQ8VZ38U3hmiANbjcf31PiguwkFijapRnrYvzKMuESUH",
  "key7": "abmtaiNPJSpcwRa3gvmpUCCYpywf7CrqdpgyuGxsNbmRZ7VqtD6RezsEUTWtad9p8DdGS8BRm5RJmXmVV93Vm8r",
  "key8": "2mZrRc8xWewJrDdRkgQ5a8Xsvm7MB2CYoBtnhAQ8qN614gfadW3zB25zJJ4hQp1gdzXCmWiMBqWiQA3CR2rPbXPJ",
  "key9": "2D7YV7kCQiBhkCECcWXkhdxSfjEdsQPxG5CVJyHUsTuuWBeuvvxM4aGc8gsfrzkzjMzrd5XWHvbPiaY8vNXS7GNi",
  "key10": "2d8GxfEHa1jRkY6LNRzYSopa7MX9RviU37UmubShjdCYocGGvUX3t8mjKPY7rdkXHdJLAQAkMG9XyxVTkR52FKjL",
  "key11": "3pkRKTqj1LG4PXiiTJgi6hr8hMtLBM1uHgDAkES64vhc1n8K5CaeonWH8BNwPVkyF9MyD3XgrnMgsc39mtkBwodE",
  "key12": "3wSw6b2x1Xf8ujbpoKQ9TpVZyVQnUPrf2qYxFarFNzaB3rnLyp4pxqARxRN1txZKRLuSdUiyLrZEbVPcq5RA9Dne",
  "key13": "2bZtaKjNnUFgTqPNg2ngbzCtMzR3BjasBb4omEfwyNGYiQwavt4NYUBJ86k83byP7JnkqJLSjfYqTy67TW9aRbGo",
  "key14": "3yp74yGQEgce2CneKKiNuzxVARf5yCzAMtTj73otspXAeHEzhHNxCYC3gK9Ydkyn8BUsdhD84mTxj9TxuZrFWVW9",
  "key15": "3McZNjwPw6P7amXN1Frjuci45ou1enR2SwVJBT9MupgHndiqxzTxD8A8bcufm1LvdrfjRRWDW7qUaC2yt3GYwd7u",
  "key16": "5wpXkYZoJCZJQ6AxKmTRNE2fbqcLUpxMCmAxkorJ6JZXfGtQ19F8fmeqqKNoB3FrNUBWVA3CYTcEBthKe6YsEZmq",
  "key17": "sLGF23M1TMuYkHeiFzfQfeoJUweS9PL2WnyMHNbctJmmsAZBdkE6nybRjK3Twkp1AR8g4nHSQgzwp83xePhaY5R",
  "key18": "2Lr1m2ZyKCiXzszzmZM9fSuAeMzM3r6tj5iNWDDv7CsWUDTHt2G2ePTk7nZy3oEWRQ5PjUZyxkhHoLJW1bPevHaP",
  "key19": "5EzHf6ujdtRkT5g7usTyznR9qUB4CPyAWkpK7WTdY3iwpUfMXDMcdXjzrGfWvJ5fSSQdzsmREjcGGHvcsFagJtF1",
  "key20": "arFU3bxzQC8wBr92tytMMLtTEAFU4mkTKaFv1C2KXP7TRAqV3yHVrXtXDa6SB5oN5JGxc3KmqukZchabHjCi6kX",
  "key21": "5UooGKPNkF2qZ4NrVybtKopHGML1coJCuo1Mj74jua99gUtUrteLTgjddcTKHeWHbZga58gPLE2qHZCUiGdK6d5T",
  "key22": "46vKSkbnuaD22qhMatAndhHD6gjxDzzKGUcvwUMgcy6az1eVrUUQrqyzEwCkbiKvfNFFXPF4J527sdrdWvNZAD9d",
  "key23": "5H19pUUQ2ghhTZBJys7PaV7qSQs7TG36dUUR342K25mEvFHNXB5cxtVJDXBZCAExYzFaRNot2qHzzkyQHTAgnvcB",
  "key24": "3VTdEzHsqF4vB4DAeZxnjuXtmWeAvjQv4LFe9DQ8S31g4Tyc9ewx4e9VWLLUrCf2dkA2uTQEbmMkKXy4y5DnTiTC",
  "key25": "3WPJGHaJwPK8N6auoTW5R45YeuS6GCpMCYGCGPHF49MXTNf31WdS9J2qkSSMxYYDyaGEY938WwxdHUm3rUjP4B5C",
  "key26": "2rpEfaLL2EQrQJkPfMYvztoomzdx1eyWtaJmWPtWzLXxWaMZpwkfpuWbtS2XB19xnaDva94yc5NJJGcoPEUGUCBB",
  "key27": "2BrzyvDw4s1AgeZ8MkGH1HGG4y9SyTnBXL25iqkuDqcm3gnmSrEfUeD1XH3aqoFUtTzdmibfBn7qyfM3dgzYttqm",
  "key28": "4mNtvu1QRK1KB66iPmPr5RM8taoRXXCBU3dKtgytsGsHtW2ZizEVjkWpt6Zv1uXdFYue3FPPQ2JLoxhY21496mgv",
  "key29": "xayNi4nHV3SxNPxSqWpgo2y8vSeHNY5D6mMejgC1DNighrxsa3RMgj9RpJszz4jGzH1ZmoCFRMVaNeHa5HkQVg1",
  "key30": "53pGgSgUUzyrJdG9vLkP2AFH1aoAZUP9kvbeXeEREbPiXG2F2mgUhYBTb8C48Nf1YtDpqfQHaupzwwVHmTZN5qUa",
  "key31": "4VEnjFDhMjWLKboW1gQmmxg4A9f5fu575iT4XFS36F9a9Gqyv4zdQFDeQfBzVnqqP93rip1zx4NtRqLozBEHS1sK",
  "key32": "2XGepCbWJYazzDEaeKYHA4jK7nJgq7KptdQ6hJN9Z62hS5ymvwm7AVD7rdBuLbSW9PXEFLc8fnHPriW7vHvfoYDJ",
  "key33": "4V4oJLWzYjquEakFk2gkvjkwdVfUKkpSWmuUPykAAsEb7fzbCxHXDP58Lqh6Y2JkSmcmxfB2kRVNtrjNKw1EsT5L",
  "key34": "3Yi3tV7CXhFakEGzACwmY9StkGgdyyrjhgy8T6CVic7pnqqnkfqUgiqYvFMnbZ1UwPJLSzyVWBTTVuWKdSjmEP1U",
  "key35": "63eVFQMgm84VirhQtuzbZ89Sc7tU6WvZ9xJY1LBtbZRbJ5ZqP43wtYDbtj1aWg72kCAqhqBteorhYnk8n6ws7dk4",
  "key36": "3NshAC5Sm6A3o4coZ3qGA6VVgMHhec3hDFBisKCr1RTvLgKGLrN3nteDDpoVeLDdSyUj72Df699mcuE2UCFXqCFr"
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
