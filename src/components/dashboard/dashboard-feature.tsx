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
    "7oWg4LZ8r5WQN3TCj8c312U3s6uC1ePDZZUzAjguAgmLTptgTmDyG8CUCfzNSkuq4ckzHywzrMwrMHa7K6krLDz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NWvdLnz1Yj2S8vJMkcPKVUrdYmiW7w3GLTziXHDFKcrcztnLHRxGiw7R1swRCcPXnDLgonw699MrRgSVtwre6CP",
  "key1": "2DiYDoWcuVTWdrafMgEbT5Vg9Xo9aCM6gzwKhJSv2iJMtjQ9Df4s3oF84n4CVeG77zejThSPEhVfjjf1tuDZzb21",
  "key2": "yaiYjLsFDdnhsszjeHQ4WgpeJKkeGkJtTj9j2A4ZQGkew7mDecrUY7VtaunUTWA4MV7psNUftCYGi4VKsNZiENV",
  "key3": "5eksq9cubSHtPwHucmCxHDUnazWiKS35MhKv1totHUVFn5KkCFB1UwBU4cE1p3dFw5PYrr17jztBWVTTbBJXiFFy",
  "key4": "37aoWhJhJKPH4kisKsDCmN723SuSnLw9mWypDvMDs6YKu1pCkSshYNn9dFGdNAPbxEPnu7wpriRVHt72gMREcQzR",
  "key5": "3StyeZWwzAmrFvvzCtEuksdq6ZPMd8SoQHcVRvMGbRKhj2u6xfdo74xdtNX5TStcWFaXe9NBLQRx1sEH1Lw6gvc6",
  "key6": "5sid2AsGRk9hRWo9Le5wEA7VWubSMEB4MZ5D3n6YsqYvxadyeFBVgXfukycayicvB2y2SnyF5XACBzP4T2KM8huL",
  "key7": "56Uy3MzpvTUULSSkZJPvMZ9rJqQpG3wpJ47fr6EiccAg55jtzosZxFF5t8Ydyf8dWuinqXLPKHNixGmc54iW6C3p",
  "key8": "4kQ2co4jVriUVotepa9hqouwzAa7ZXTzueHEtDN7NJ8cUJbRkMSgdPF9k1KXMcovfQiwbAEDRD3ysTVPtNqp2tRP",
  "key9": "5zdwEcxJXRBtoJ5BQ4uVMw2VMSuzoMbFQjj6SSRN12dBA7wF23AcXUCEAVX2HJmzQzg7wSvygioAx57kHYfHxgrW",
  "key10": "44Cxrwf6dcja1i4H88Jw3pAb5QAV7hLSqTstSm5CuZJodgRwFX2LJHDDeoZqqhc2EB9RzLTVF3zVrXsB7Vi3nZ94",
  "key11": "3pZ7HLyAsfSCinop1Vqq5mc6LRi7fAwj2nASZn9ZQohrHdSwbojbUcqGaxMpBsfhcRNpw8wdgaC1HGBF94rDMA5u",
  "key12": "5oFJtfSNn9SbVCPKDgyzB5Thcy1LrC72EcC8L1cUWVDDoaSA7S96wfT4RWnLT1KrYPHA1LhWdaGUbZSWE2U8718R",
  "key13": "5fkcCw4oLiU99Ycjhb2ufVVr2P5PCFnMUne4WRMNET8MCri7xbAvWHA9UktfaN9VqEM3KnkuAmTJsQuHQavMCkWu",
  "key14": "4ML34aasssmpgFnPQ1bnV1fqM9Gm43NmsK1M61gYQfeDzAeicuZuBwgRDwrertZS9YzSSiVmtoAD1539i2VK8Ppp",
  "key15": "66gN43QCj5X6tKSsyfy5xksTKDsUY6KsQ4Yzm95ABNviveuCicZxJsjF3RYrzBgCXvXVSobL9FTehVTnTJLPmNoV",
  "key16": "2GDKgLryMCgpwE2PUph7vofsRqqTQNA8bAJGkUMsJv22YM7rhiup2xvESuUZb7CuvyPb3Xr8ZhJFZXKSJ8fYPyFW",
  "key17": "4Z9XzaiQw59e2vquHGifh57bEsi6rS8eFf5p3Gn39xXzWuU5zg3RQkt3TTKCLvMHcpcpvVLe3pMK9ZYiG2mFkJud",
  "key18": "31DdANg6wUTzQ8ctj6kahGaByp9Lz1ShutoeVVkZeJTL3bXRG2EFDMsXDY5DpETDEpd3bKRpT3vAB8KmJcDdk2Nz",
  "key19": "34VnJp6L2jRKMMKMWXfmgE7Npd1c3nJKE41Z1CrvYqw7DxiUeVnvCUHmRr7C9hi1HrVpPESaAtVAkepdxS6ba6Lc",
  "key20": "2kjvPrwoMXTvaRREnxUwiBEfb7TR8Qtfd1psJqY8toJPrfRcSge9yyE2buBLEGqAJR8qNBhHbVeyZpDgV5BLw4Ye",
  "key21": "5Z8RkBoRM1foL98V8YS9RsN9T8aJ52zArnUGfywuQzduhbrrpRWpjsxfsnz2ASfQkL29o9APZN3dmJVx4iAoGdUN",
  "key22": "2ET9co87HuSfpYhKp6VYiNtMmfCWrwSTamq3h2BUNYerz7aWmPJmn9UF21QJozgpDcoxk1douwvZVCneTcbfB6jg",
  "key23": "5WHw9FKq7KATpywSNE2s3SiQMwsAzCVhLy6BEqXgW4JqLuxG6fmznGLxxHf3haHKjCEFoLidbschHKQRX7XMxoY8",
  "key24": "aGUHnb1hXXfPvFeHMW2Fvx7eaaEdmKLjwx6r8AaBNeRgbUoFbQQKCfcCfiLbiSsUPRvAscjvLjDVFQFuojpJi5W",
  "key25": "5RzeHdbbfVHynFhydcUtSQz3WTBezw9ajtydQJSp4gCrYkeG23oNKr5YfAB5bVNw1GPGPpSaLikP9hX45gMghr2w",
  "key26": "ARy7NtMt6W7dfXunKFcTYdaPwkqrX97v9f8xk3h2b8BWSaq1zonqbPdpChea4cxo3CpyfxCDDexnJ71DWuUyqv7",
  "key27": "zrLJt9E5eaenrKBqR8juP1AkXNhxoz7nEkMoZnfzDQFm2xNVhUofWbS9vRxS7ZTgjTDCyKKFLJ1AurkXNdZZQut",
  "key28": "4cm3jezypGTJHvr6UDhNzZWzq6UZYcMpZZwD8aukcxEg52297fq5LfL66roPVwELQnG6oQPG7nYisMQa4MhGN7iz",
  "key29": "mPGa3gDQwGczNAQEWHU9BVzEcM3pxgJrcbANj9ZhkG93etfqAaevNZd9x6RL6hXm7fKgLVxX7xwjDJdRvosoNkP"
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
