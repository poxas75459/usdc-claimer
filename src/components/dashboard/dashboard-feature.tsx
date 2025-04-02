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
    "25tSpFU7UqfJuWCrTfYEtJHJLvMbNhP2MqobRc7HvYuCkYKTYbej1Dw9o8FxQ8h82kZvKjVA6tsFnwKDpXACf6Cz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LxBgaZn2fTNcWX85X8ST1c57zMrVFchyUNsiAj7uNj2Pr2nqpK26GgLhfSQtkHwfD8ESMxLZDA7fR1VZTv5cSmx",
  "key1": "22tEZpnaMuSxVs1vm8TyFHzXWaoNMtnR6SyEqkotunQJEh3HBxWKU7H73qQNFsibg26pp8ctL8XzKdsQsavSGyZ9",
  "key2": "5oTkKmdg6udCxpaFbyjDFKJnwyc4SddyKVMELVFWMRqQDoeyxwtKgf6Vp2veQYLQwj78aMR273rEzCjdkhnG2yG4",
  "key3": "3cEHgJLKfhsdmP1PWDzC3Fn251YtCi5gHXk9wczFuWTu4rRCejBJrnGAuWY6NyADYpqpEeGeR1nWfVELEM2qyfFv",
  "key4": "4x6cB63EqZVqEJ4x5PViXT6d2MT54j6nJcrQU5Y7SaB34d2UKBySMh9oXWAXisrdAxP6tJHgMBeh8gpbJYudRrkM",
  "key5": "3Ffm5LcFu1PfszuNXqjWinWzxakTc5gioHPwwdbeRPXnd1QPkcZXjjUBxACedMJRrx7x7KBMsTq1N5Mb6mXaYquN",
  "key6": "29S16ABSPzjy5AAdVWYsDjCWD5a61iUwoT88FHAtbWd5M74B1UppYpBq2Go7bFCARURzQ6Y21Nhm4mQm612vUVXi",
  "key7": "5RAuvwpBM1iCQKBaE3pcspvki3rLaEJH92NBfHbzpsfMJ1fvyH3E5tqW2grSdr2UTWhnY5BY8MPanM49m6PVaWTf",
  "key8": "dZa4VV5eLesertUeonSLMpnTuMeFxEmYafaHGwRXkVUW3aDi9wPi3RyjmswbenpL2i31jzPnUGKuGJJ4F29wMNU",
  "key9": "3hgzTKNCAeiU5opnExNDxHCQcmccJJyJiPJBSXWh5DWYJPA7T6ugBPXMtiG44YeCdqZiVTcNQxeqh685dTunSAmG",
  "key10": "eFZb6VxWGJh3wsdQ58W4eepUELDUQhjp7krmvLVp2pc41cc3n9GskowVzM5xSYnhcfwsFPqsYuuorKq4w1g246b",
  "key11": "2SWNAG4AZg3LVhFfyKwFzfPusHkWqupJZewMsoCVsFAmHVX3Jf49PMXJXbTVcvszyfF2SC4r3sjeeNeQs2JFrwZE",
  "key12": "48M4x3HQEvZahCGe4dRn7Wbo1KqSwNSLTUqLUDXGDQjFtVSGeNRUuzhiaVx3jJ4UwnWtZNyS2T5u1oRLra4zv6PB",
  "key13": "EbJe998DhWXShYgnZCMC249p43emKn5W61A2DBwCRjCpEuiCBSsaGkSo9iSA2Xk2vfsi67ieFBrBuXruaFUiS41",
  "key14": "2ti2xrQHmzFLhBcnthmVz2KovFp79wthbbQL1vF3fkJZrhUEjAqx5GgnzigTWUVjLSwqPDhH4dJvdrRTDvk3HddY",
  "key15": "1VUw3XsfnVp3yC7A4M1nPKiuJyYZ71sHe9hUDaA7Ega2Z367mcEFm4wZgs7wcP9DbRbPsXUxwL6TjJSYFwKnkZy",
  "key16": "4QgsY7JqaEazPxep7jC8y88iSrDrPeFWyekfhpMVQfBgDsJBPybGsUhHLSgKATBQZJ34CG9ZzDWvUKzTq2h49UWb",
  "key17": "4SnLHgycHz8q9fEzSMYrZHCGFwDivRvA2TKc66UekJKxo5kBzcsnAXNmQ8EMGhca19cH8gFSb3W1v5XRqwoDeJaY",
  "key18": "5pDp1cXAakw3LvHH8NCHyQioQNaqLF42DDuCJCnZ4bkfhPP43SJHzM15kXWQ4gqMucnfiSFDagivvxrhuDgmyMVB",
  "key19": "3G5zehAcG1z25LFkic9V49g6wunxkGewJSqqXbvgDEFDW4ZgSEkjMVkqR85XVrgEXdTNXy3qLvwaa93HBGmWAgAS",
  "key20": "3PpGLMRfn2TeBkHfneQ3Yti9NyCrvVNexJN5XhejzCNzRH2y8hgqCcqghXZBMnBKGoPPxgQ946PWejK4wsHyaqZB",
  "key21": "9yfwQP3LWUVfSRRNoucrCSahfAZoFQnaydtcUAdH9U2ecn9JrYr239hZC59qXtMNCYRhzrAWJX6s2db48iesrqb",
  "key22": "3AijqsaxA2vaGNJnHBWE4d2XgsPwLcQPKoLSz96sGBctZphCNaDapLb3i5VVzVaQwDSzy1QpmHsKwohkYN2LyRUK",
  "key23": "4q2B7YwtxxEP9Wa5WYTVTC2SCU7LxSWA3A663JMeomACcEHJBaQP82kdfNmYSMNFha3LsTDg8sfThLjG1U3kzsUM",
  "key24": "TBLHD7FnQTbMZBfydsY63pUtg2ZkqSS1NupyQEpcMHVSAB7Bz6CFN9mchndLxBgj71nNPfpxBw5hfeeavmx5LMb"
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
