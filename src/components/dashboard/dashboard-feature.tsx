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
    "2GsGYXprEk7YoTday38yvsKnojgiS1iQBw7jF6s7S3cPRQWYEdXpd3FFMj3fZrdWgyr2TGquyBXjyfujeqoY8MpN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fM4NMWHm1qisM7AMXgGiex2rZ8ufi9MyawJFzhU5zjH5Z7QZXJxnYD1ftET23KsZvUVW1KRTinPZGkcKBu6a5ix",
  "key1": "3L6frpk8WSr3eyXTLoGe6WQewR5oXZD8mEYnJqLBPzfneSpGEr4EFtnvZiyVm91FHDdWtYrnU2oC55FZiwNXTkeH",
  "key2": "Go8vW94VonGjrk7bTQe4pEfqnJWkfuWkYvKR4QCULNkWdMzruksmRdc7x584Fm5mjRQuGaUEvmQKGLaHqGRsewx",
  "key3": "67RcpRLXeL6oFQ2Gp42wbPi8bqeyA3spdUFiKd1uSroRJFU37xJ1pfBpRxxCipYZXPj6K5m5WQV6ow55zuz7WB5T",
  "key4": "3KdNzXCmvtR7fdBYRT3V9PKo3REbDo94kV7598PTxprSXqb7RZuQrrFia9fUYX5fU2Ljyao3Uk47h486GBNE1ULe",
  "key5": "2fggJpRifRpYpg2aNcr9vD84zaS2gFmfaGu4fdtRSVNWbzqQCELYg3AWsHpyeM4Gdwxyb367Vf21RHuSrTQdDqZ8",
  "key6": "2dz9ynXbmt9MdvG3Qmwn6RjeFkhTXioAPn3YxbnPRLaFF9cdXVg6tJJkQMbrU89cnAEJ3CkUVa5Rcpe415TNNUsF",
  "key7": "4BrzkYZpuiqPiW9RjYs8YBBw4G2LHhyj4KQotB7h78M3KhbMnbWCakfwuXLbrbPkfCrGvfA4K6zHmDWKM6dMqpcz",
  "key8": "65PnDXd3WXFd1puwnd87CF4VXgxnDX1jssrAmnTFFiRJvj57WntvtEHSkeweGq3TyFLAaXcV9dV8EgmmBDo4TAaS",
  "key9": "37r3yuHijsNos3zM5cwBvecFmyWnQQpMiFcq5PQyb25FvCgByLgK3pWrWywZnxdgYENRuSeym9AEUKY2gPK1Nn7H",
  "key10": "4Vb43e9GhSF3AqxzxcmUHwhX58LW2GjryE1YJ9mHRJgkFRBiP9vj54HhCbahQQge67TissfHFuvhV1c672jCPdBh",
  "key11": "52xBZg9i66G7VGfot9oxmFsamyEDJELXDJJHLJJmdhuBepRftMzRHXmwKAjfENFLJR6BEfowbJ5otyEj6qVLmbbV",
  "key12": "2piVJ8ns5QJ8pxQTGBDK8ucaEr3pB54jpC8d37enPhW5sqkEoK2HHpGaHy7PL3oWxvag4PjLKhr4qFYfekv1VPEX",
  "key13": "FK8AXvr9RqFySu3REtqRMEmSafDLB7uDWumoVjPWR54jS9vusk9PGzAKfq5jtoouSXLxVEqsmYGjTNTQqXvUDWG",
  "key14": "4UKAWYh4Kx1ezL8E14DJpFKYZU4BPnR9nQqg1rx7dkWU4tPv6QUwUdr48RqTn6gksN4bRi2faniv28Hz7giF6zoH",
  "key15": "3vCGFUoRoSJbJPU9dn18fAk3mqtAV32q5sKCuSmyiLHZDmrXM7iNqJbU1PYsC662dwFZgiRinX3LtgArNG7S1i8R",
  "key16": "55EZMoXKmTdKdue6fCUmXdxdxS7Xs7edrXaLSGfxK6PQwpxVG1G8JmjQf259fGJxjo46rjE1QrvpsotqFFDCSpYK",
  "key17": "3uLgDCuaL7QqU8hTMLqmqs5D7df8SGzsxwVszn6AheNJGD8394BZMqbdRscN5WqS6G81r5imSiB4u6fh6b8Sihxm",
  "key18": "4RRTnoi548ZQEnj972QS9JUp5zKtk1mxF2foqtHaLaUdiKiU3rsyhxUDrSxH5gSF72DCGezDesMHAcuiuKJiaMk4",
  "key19": "3dDTAzdyGHaTg1WuKLRvBcvvGHpUe7mWK9irDnrL5jDW3kzfh68ML1tBFwXMBmgVVdcSBEVfW63wJYEEgwV3DoCU",
  "key20": "1bJzs5kiTNpaUwAW9iYQbiXUuynmhN62r37J45X9sbhiXmk3JG8Y9TtT85gPUanNV9RZU8F4XaC7eDDu1ysh7Tr",
  "key21": "4khhUcVY2YEtcyMBdguLcsTLTZaRYRZX8HX7eYrfK1NtbsiseQyHEZxyNMbXirwQfUrovnPexvdWmQVqVDmd96ib",
  "key22": "26EmwmLahF4PrhnbypWjPNhGkErdks4pPYq6HbndRSLwAVt8jkoUytoRTryQd6Yz37ci78jSQWZJUmCvCiVuhQom",
  "key23": "3QxVtCrztPmbW1rXPSpNiHd6mca1y8uZDDnvqtTg2aSbm63r7nz3gmByJJhQ4rCVWRdZso4cSen8ttFrHgYMQAjP",
  "key24": "3UM5LbvN2HBUX5SxCQ4UimM8qTACh3HqA2ahsxX7qCrFLSM1GEwuRtXqc4dFeeqe5wFQRc9NJ9xkYePaFkoYxk5a",
  "key25": "5TUEYUyASrMJYqYUjhkVjfG8mEhgexzqmHTbVDskhyRC3G6XD9T7uNkkQFNjctyzaaFKmLyRFE7phXAGru4XC41p",
  "key26": "5BHHBP3658M1uVyEbaLgmgU49uszzF7gpqMWPoQkAE6n9Zm7a8ojYUGvC86cSUWxAssT1dqvNbLpL9n2iTW9Q3VY",
  "key27": "324zDsxf6Dn2WegfTQatPdvzt1CAHEZecN36YCzaJLK8n1MQ8m7PFHi8xKoiTuGC2ByU1re8QKDhLUdQWfiJbSAV",
  "key28": "5HPEdvJ7oG7yq53we9nG5Xm7eyaCsR2TNzoxNZ6VmEWyE9CQMRp1gDd11FFXvcaEDkRtD4aPVtjNVWgdT16MAX5b",
  "key29": "2325vRZUpZz5H9ZgXdxpQnd9tPm5TdMCDK7ZCZdFyGKwX3ZF6jsLwNhoEZYxDFmzzArWr8fWSp8LPJVnRuZyKB9m",
  "key30": "4UjeMPsxL7Qm9Ujkf9WaF9yMpmtdiaGAEVjFNxZQmsweAaoKiq5xn3Kktr86YGSX4byLtjCCXeWn2N2am3mWF62h",
  "key31": "29czKtX43GiLnC6Yj47pbQEHZAdvEYCFgQ4ZHkc7mC6s5htQeDR2G6bjjm4vwbp3GerwvNtFtoJ23TfACMDfobhN",
  "key32": "4sgqqcKDNUp12QXrGcjQZKjiDy1VJjG1Z9VT1zvcX1tGcJQGsfAPxWP3HXXdsr9dkba61dExXUSJ3yoYXWZRjQN7",
  "key33": "3tuPms5D8W3e7LyXWJu3NY1SmheMjuDsvK515W6stzLRnrxuzdisdVUmeGgHYLeyCL2FMWYtwHZApGcCoKk3YeeK",
  "key34": "3aMStiRctFz6uLg66LR4aiSNMfsVoko2VACNiKuPiSc7Zh8hG3HS4364t8pnTeiNUAttF83onE6xq9Q5nA1YPnyD",
  "key35": "2AJaci2drFLKuFtfgWw4f5SNDNVxxyyXLqRDSQP4a9Rdf77qhcs7RBSfiMxa58voMp1S1gZrNfZgTvLCkied8aEn",
  "key36": "4gBpaEWPXgmVLMBTrG3KCUNHZaBVngRVDrnm1Dv3fQZte2Pzq5MneNCxf3f4apf8UfLFofeM1yZnFgcxaNGUBmPu",
  "key37": "3tvU4bj6T6JsDEJaeZASKoyZrZyV1xhN3GjX9JfNuQ917XwzSVSwXUQDCgafThDSKkynvH93NtxAHXRw7K5zYS6U",
  "key38": "2wVCj31pZZJpTFwwLQr4qFcX7rNL4yMgojThTkYaFRtyWVQfDfT4adSwuVqAWfPBCwsDVSm7Bm2AY2kTHZ7CqeVi",
  "key39": "4FHdMFa77ADJsmS9m6xNrhX9AyiVFruejUNBYLDaojrN6oPXR3Np8uq9xjUhaAY2ujyy3cMi4HR47GQsUxjWSin8"
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
