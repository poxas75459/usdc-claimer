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
    "3UzHFVpo5RFQ3HZ9Bz4Deq48J1J4JGFPEk6zrtMXtzbTAdQHWT94ucXV8xyDfaEsJf4j6iFNEGonPnxqMqu7WLVB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fsq97jkuTHCBXANLFFF7gFajPmNCuW5etD6GboADXhV5XqTFcGhE8BJsMgJZNC29dDLeaAioUWtEA3HypFZTFbX",
  "key1": "4p5uhwiPXCYWy9oHGjUaSqpF6oZpGaS73dSnq9xLmdyv6AgTFgU58fmK8QQPjpCmFUv8gLd5Ue49rH57wsDv5aLY",
  "key2": "2uHd3ik7tuwuk7snAHMaqRENhT8uWdWtSuwieznN2AFQJQocYqJGEhasfaHWKp4MxKoNu7GzKgszHCYEZNWu4V5n",
  "key3": "AmhngzBAdScznExKMWoW1JdBdwgJzGd3yd5vL84f9FC6LBqsJDh5iL5T1FStvejfho653YKb21XV1Zj8rAnXJTD",
  "key4": "2Y5ygANtmMWQZyHt8DZVkVMnZ1k5Mdzt76Ax9zP2gr5572mYHkCW1eQpgZSg67atPd1wdbNL82DstNAj4SG1No1N",
  "key5": "4MwzANgNVA1q6X5L3kaiks5ps45TXYMdoxJd9WkfU8WWe2gFyTpw8yWffXo3hbBpp15kYcLZffVBB64ZtjAyz6e8",
  "key6": "9tHmBE4BBHyLpmAW38rXPHYwkw5qTyjpJSrjCxthsYzGSzbDtWrg4Tbe3icQFqJwCKRkpQWWWiw8esXpw2TseGi",
  "key7": "4GE86tvAMDN5GKySHitVfVgbRohCAkDkQViAXgqrSjdo1k1RjNMq9rf9JisL7Ew2xzf2kQfSggERi5dDLgyoz8BE",
  "key8": "4mFiNMVuAUGVmPQe2boZDoB9uBa6MTFmjJA4mtg8LoCgm1UGg8FcZdNSdCSCdnAxNybPwk3FjYWHujS9kuQSpUz7",
  "key9": "3S5pJKkEE9E1fJVR88hP6fACgK7UiHdVXbhFbXBFXgDah4cpwMU99EKt1Xt5BWUdjoy8ivWB7awVBRSCLxhnq9Ba",
  "key10": "47V8sjDxoYmeVbznS7NYHeiy8s57xm4k2FiPtX6sFxQJL1bgvAucPpu55yBjZFgxkiKV9VCJ5nq4sWoSUfK68Tsf",
  "key11": "zFgHCdnN9uAy6XbkHFWHcf8fUa2CQRsubpPUNYFHm3zVoR8wurhxUFVjEcuysXft9qm5skfftEwcnRFUNN4LVcv",
  "key12": "kyqaCTTANm5nLRLLAJCnkXoHZT6zLmdgmZUKXv1g5Qa5PAKX3CVkiiyt2KLtp5W6etFyvKvGi74rwYMhxnNgHRF",
  "key13": "3nGxM7sdh7wcQJGwCmPHkRjcY8TtEokJagatju8sBDyBM3L66cAYFMv1SK17SsJje3iQAu2EntGYHT36HQHi1JUe",
  "key14": "2NuEEtDb5WUCdQbmmtDiQbt3v1ZxiGeTGPmzYupU5bcsjUC7ngGjiBy97P9fWZ1hCg6RxyGpgWqTyBtUYmnKuiFR",
  "key15": "4Y8xRsyfXCGgWXxktimcMNe8Ggr9UEkdzUQ4QMqM9upcHaSQtkYbjr9ikvx9rRzEYwYRLMSptgdzMoi1CnofVfNL",
  "key16": "2akcD4SpxvCig4AP1w9Hv3YA5Hg4ue6TXskR4upUWnfPGyJp8HrK4Cy5mZU7q1qoPgVc8yd5a5SgWJY2ZA6t3UuE",
  "key17": "49Hrs1oGqwoGmz7yUyjLUDHS9giJYWTc4ijte1wiWZ182Lpyd6stQXqJPXVTf4gGWZbSjS9CVnHp3MpRgLQxMM54",
  "key18": "5xeK3PJWYVSp5DaZ44PPAYsDskkaJxm8vFiQec6kb4iqZki65qvAsEyk9gQg6NvuZD6H7cAKXKDxepeVj3r8t1xd",
  "key19": "gdW6t4GUnzusxMvrhtg21yNGCaoRMV7VERu3xZQuBCRA5jnWKrFvxJ6Dm4E1Rh8H7jKtsz7yPppSStDJy4prXdW",
  "key20": "xj29XVD73UcRtuGvTn8fRyGc1BBdvbvAjYAPnZQT4gJ797h3mfLp6ABQdkzxhrDu8eKJftUD5Z9k8pPTyPdZEA7",
  "key21": "5mCDVnBeGySW3hxd7NpXt5xpn9kfwyut4BEQeZGCrDJq36mGBgHDJ5r3m2rZsuiguzRMhh4E6PQv6xXC6q2bsTSr",
  "key22": "2maSthCRmuKLJTozVgWYSPjje3kQue87Ae428g5ukeMJ9XyPydmdV3Vg6c3x4qHK6jrwj59vLyeFhgJMx9LuSDAX",
  "key23": "1EXnvTmrmQ1KRsRPb9dMD14HFaPzKtpgZ8V73NWbgNFbVshDdVt7iovoSM4kGbT53BMZCamMroa1CJtx7t9ECG5",
  "key24": "5k5RQGCsh9L75gJ3Tw7SY3nMbfnvRrisNVqLESUFJekgY2NGTpydTo2CQfd3ULk14jDYNu5ttm55YFRsemqa5StD",
  "key25": "LotMzswxMEkXJVJqUQksSPJPGbsrSkWqqoHMuVuGosSfwQqFwnw8LS63TRfbFiXCeMGRCEnb1aT1AEAQ3DAPhni",
  "key26": "3EeVXWfyxjggcGMJshVd72vqKytat56hqmnc8Tc8aVq4bkNMMCwSBjHxMjm1maBvqPjfpgQziS8rVhJQ41rAbNMN",
  "key27": "5Q73yvV1N6ZNGYQd1YHLmbmvPkbNYmS7T23N3nDJYTZALg6Jmpm1XzR2nX6oicKjtJ3427XoCoWPEbLGWv9W48e"
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
