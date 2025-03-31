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
    "4upn9BssxwwUrEcZs9nQjCyJxaSutv7MDJgFM2Us1G7aYoH5JjPaquac9Emm4pJkStVSmNZ3trsr2hVW2dMzFbo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gxA5BvihuJ1A61FCik1iu88cb8sxZNHEEeKgeFjBf7SGkv3VaDRWYxqfw45Zbi6xtvvdMrRSf1ZLLrZxYEN3beV",
  "key1": "3TMt7NUiWCtfYswkeMFzpp6oY4fc9bGZfWiHhiHKa4W2sXbG2EEXaTg4ae7PThUkSfHKoBESuwJrpAn32DYqS5H6",
  "key2": "ywj5gthFDB3LsBTjUd5RHykEoHwUPqH6uLh4d4TufT8ykJ9zb3h89e92e7mBqeCnQdBTqoWEW3s8LLM1iGXyi5X",
  "key3": "4rYJPerBRnLAq91ThFLbUYfRojmtsguwG9LQ3FZL762tu97FJwcSn36RQkMcm59n3bLDYcBspqJpJkEJ5EuCQndt",
  "key4": "35RtkeTpJ69WhFSBUC2QDjqQ5tq7A7WuEjToXJ1s2GaC8jUoaoZZSxHbTrZCaPXrxZNV9oWkZJVY1aXGMZBoYd7N",
  "key5": "4AJfB8pMwDv16Der1yk3aavcj8YxU66Vj4RfboAqBAEvKyyg59CT2A5hcUeKJjRpk4Rof1FLgxdNrTzajkTJF2i",
  "key6": "4EQ8fGRDytYmRTADcRBT1mvKCTFeaitnG5WoU43Z37nBPhcJLCAfdhKiVa8PkBtFw3hgEceRZZG9YCRc6eYSMefT",
  "key7": "3zYR6RskqftvCk9LJgUXmSi8pzEpHamKZUhmQTxGiyGiu8Hpofiv6JZ8Xoo88Yip4hjebWhELdUVHof658NFG1Pu",
  "key8": "3pAozmERuoNecLJ5AMoKNpsJFQFmh6bCV5UfXjSiEXgzfSV2S1H1kEtscao2y3XM1FAyppaHWrx3PPs2wz9VjgZD",
  "key9": "2ZKBfpVA7AXg8myw7ng96AuzmrQwqFEeiN5g1zVuyGwsQRxWxBYoABUhTTK9x5PbMP2Qgf84dzoQygToto3FV52A",
  "key10": "4BEFwmAUL6NmFfAtsUuzNXmpfwQjWkQCFKkpLMAALbDWmrzJdG8V3KJMTHPFQP3TzsUDWFkUhaSiyHvG9S2pB3os",
  "key11": "22syKUQC2XJwKvHcTzYoTas7h6ZZk2nKQPrR5yGomyR6etLUax3hXMbWamwTdvFpmAnogQKTW9e6fmsa9ih3Skuv",
  "key12": "DPQsZ7Xtu9VJmTDsWChsBJXt3t6Qm4xEsxz5DNEtyvXogHU3pZgwCZN7Z8gm47mkmUCQyiSZDQX8PTtwLGECqDK",
  "key13": "5Mkd49WykG9UbkFBmV6DoX31XTsfYsoXsvar7zFvVSbPC4g27eG3ZybnKoqkJDnP6EPSpvZQVaKnmHZero65SLiy",
  "key14": "5LFV6CnDckziGJUMDPWwWgkCqyZg8hb2wXVZT9Ddp6BfqTWc5QtWzuo9zyi9cz5ek7UmVBxqbm39NERb9TLQzT9u",
  "key15": "48esyk1tFsm5uLiYVHWY2mRXPqwUW2VREnHmBoaxwSvcCx6u7fexFQF2WCHpZj2FnVm8Tsmw399soPPRD1ymRePd",
  "key16": "4bDDc7AWirQ6waopwMnpXLrdAyDyNDmnifqpTwCUd6mGXqNSNCqWbzJZtSm3KdnbixZVjRBHfG6yj7S9khLT5UU7",
  "key17": "4yf6Ys8UnUhmjtyXAwJjdX8FidJ5i7h7UmrcUa4nrGKhWiv4ywRYxYgR2oJJWxaYzRrMxRNxXvJPnH4YMAgkfbFq",
  "key18": "Rk3gTJjFn3MkUkhrriYMDEacc2eqwpX8dLhfQsR9X1CufVx48Rr9JvsbMBfQs4BVMyrTLT3SREVQJpGyYVvRK4k",
  "key19": "5tZkbqyR3fV2T3tZ1LEUgXYErDeFNwxB6Xu12oKtKrqBEwNUBDbN5DAxgZ6pEBve93Gr3DakkoW8VJ1sUDrzMay",
  "key20": "5H2Zjrv3ZZLzUDtwQtcawheKa2pSbdeiNavjYpiDZo5qnDtrrRfDXDQkuUFviy2F7qpm3vJRKoSFJvrbQ4Wp4ta9",
  "key21": "2m3Xe8tVamdJVenR8SPmpZNmhpvaXccL1CRe64GxR7ca5w5h3Qjj1rczRyFkRsx1iDEs5G8Bgta57Dr8eKu3kB5F",
  "key22": "38kzgFHhE2iKT31BzxxcAH1UK8nU3tkmZLHFoqV373s4nFv2Sp9umBH4RKKhzRuzCoTRwDh6diJw2U3avcQ8NTk5",
  "key23": "25MhXCTh6ETbrJ3BV4mVXHo66fRdAKuzKVJoDcnzGnS7iG9GJtD1hsosAd6GJHmieJSMjv2SExgNZpyMVTgNoeH6",
  "key24": "38JqaJjHjP4N3kwRprv8aRYnLyQPTgEQXAKGcMkzWVryYrhgwQyt373TSLQgyqWuT6bRNG9Loj3AALgCSN137GbF",
  "key25": "2LBDe3ZVFYuMmjpi2xnQKdii4SvxojtSUtUupxY4DQzufazxEGtZrS1eZLaoX5BRraqRmRmsryQJtW3JyaArHNhn",
  "key26": "2FXQEeeQgjjZitzjjVVxtsooc2kWD2w7ND4N7LvLaUeyfvr8yPZQ2dFUFZEdtbJJGTfiNNQRZDHbMPrNm1DXKkYF",
  "key27": "j86dT7UUeK6XbXnqAuBzFA7NFYQLAJ8MJhmuyBEd1Gwj63EMHRmbwx5qvMmdfiijPAAcG6EuG8nGn56RvHYyKpr",
  "key28": "3XXQSsduEWX76hFyzkXidzEKXeLDckQDKixomXss7FjVM9fH1eTHnUwVSeBAT6Yt6fkLu2mX2Tb1GSaLQPtPQ83V"
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
