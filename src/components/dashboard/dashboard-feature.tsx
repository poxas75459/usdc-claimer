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
    "4GWf8UiAi1hZ63UwNzX1JofDCAnb3PA7GcV8bsxmoQQD5JBAXa6EcsKwDPvXJ4vmCwaQPaFtd4RZwH17c958GNii"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ERmXjbuH7u2g7bEtHWkYw4jKJs1iyT7o6ahsypxBCY9RMP5FKfEeHBrND1EbSg9yEfjnzoT3v2gWTY49TWtesEU",
  "key1": "w8CW7W4nYYa2x7mG8HA34sGAMNjFmdZvgrNutkGyWJ3WggjDaxj9g3X3GUFC3RE4ssJtiobvvfhpFCQUFC9aWQY",
  "key2": "35DBYtR7iF1NQGQrnWruXxMD3e18KbBo6Qnhk5n6oJ8q7KPoU1sfws681z1VesiHngu8KooUfVZjfZ7Nr6GtJHXz",
  "key3": "4cCtCASXEcRDj9tjKKxzUL7wTYoTqaLqvff6wMAsWAtrvSqA9Rd7sDysyXeBwWfFPZNcLa9dhtHydxXHGtGet7Mr",
  "key4": "NkmeKjhZW9PSQYsMVDrzDigZLpUBRWVE2fET8HSfKgsR8ZkHaWge7dYYGSGrnWDxdMeZBby14z88bseVkU341ve",
  "key5": "ofsGS5HPz1em89bwnLDr5w2EtxEtDbiCEbnxoMt3UvQGYoTu6ieZg1kdKvUSkDRVv6jgweAEF3nepvnXEUSq1FZ",
  "key6": "2jxLW7mibbvj4nU5A4KLdSPkQKmoKNTCCLGDuoVoCST7rcBC4yvMZbATSAeSpewj7s3tfG4LGBbPTGwrR2R7Y55A",
  "key7": "UT8NaQJBGyuYMQ5C5nQJWWc1xBF5o7B8Nzm2XG7N7tXUjkhjDGU8NYQqv5ciVZwNa4wF9ge1x9GR5e9NqJ9piT6",
  "key8": "TRChANa5ZE6MZW75mf68o2pRAWiVWmkACFmLRVzMEJiyWa8nm2NnmTxF6pYL27ETvZDKRDw5zvB57DbW84kSQT9",
  "key9": "UBwYCYKoZ3fN8UZTpcDiCq2HiTuyPdo1m3VsUDRUT3RCYVuzGa1gXMByaEkoKoZdR8BoxYxb1yhqoDso2QeJ8yF",
  "key10": "263WRL2SCDkVWrvUChUFQi2xNtBQBJzV88f1mpZv5ZMATSFDRqqfLFny2mCwNpnzUFuF9fTCTbHZZsm8sQ5UnZ5c",
  "key11": "2KVX98tWmaFsaz2v6Bjhp6v9aXGidrEeuEdSJU9PfWgYBsKsanQzWTtvX922cmYppzQjXFgAsghFubBDFkgXMYBS",
  "key12": "5dRUSKu2ABmNqWvNWAaqirDuRC7puuy1yxFvWPJDsc6KLUerD1RRhDPR9xgjkC1B5mvV1YSkZiJ4KXEwaiGTTn9u",
  "key13": "KFwMbiXWRcU7RSBQZJxC7XQPYhcqLn3zkYLQPNJvboWaLJj8Nnx9ZEzFi2QmxZ9uTkLponTc2qYK6rXw8ZHjRD1",
  "key14": "64FJpQ2aqD4dTJC2Va6PpQe35PXmPXJS7XtVYKKySKoXBJEUQtFVa6Vf92w3ShRTKYBn3k3URazDjrL4oR7CBDC7",
  "key15": "2gvkiRd5MHhjTMCL3mngqrz29mr4uAcHG1dxT4mPyGje4GQm2xYSR2LupzxcTsSPc6vi7DWkjaJ9aXHHQbqcPJyz",
  "key16": "3BRifqKmFZyTMNym2sXbwj5ASyywJ9uvDxqVzNzrBXFs5TpAHTff3wThw9voXCzhPYJXmjHNuVCXp45zXEGrQQFK",
  "key17": "66swh5ViycB9iamejsiDAH57oxENjFGupA2barjJequhtyoEcgeXciXExBB5FxfnPZ21Hcpni4sHiuuzjYphUf2j",
  "key18": "3fPiXnu63mczZ9VqJmmd9B9AW4oaMpcmRadmNWzZnP11Z4bKQevahthtuHhM6amH1tyw6aSJehDRGxURiRcW6cMN",
  "key19": "4qwmLJMfnPw839Vx56wv4yCMqrDdMYQEUp9kpzvjPg7ubDB4wcmXKb8456dj5bcrp5bjuU6EMhnwx2atKe3UoJUD",
  "key20": "3x1FqkD6idH3JAgnunCxgvJ7F8FHJfLNPMs9unboGVGf8kTC3RDkWYR7ya5koxrLj1XipQcnideS8fohMY7xu3m3",
  "key21": "3aJihFsMkLGqfrNtLBf8soDTTi35pAYGoResWk71EYpzAEWawA7ufmp5K36uZS9AbhqMstqvD97qVDhfMB524p6b",
  "key22": "4LP7coa3hf8MHWNw238SmXApxvTFoiBwMPwLQd8TVu3HJ4q6d9dFsLBoVo7GHyBKmtdkMm9RTNBv4h2AAYdhKBjs",
  "key23": "3oyq4Rj2bspbMLaEMMSGdvhfJDXqdhVPjN4H5FYv6kFwbmpMG8USMGGVAqC9HAFAvsbjA6ugwnAWU1FuXZXUgVyK",
  "key24": "4qEEaTHJdhLAPb7nHSFXshiDa15mfKkVgUpwrYq7fCjLQs1LmPRXQm97aYSFVdnvoCReUkduQkiPmmRmWQFMnzBM",
  "key25": "mtQhcsCALJhzVF7etWQ6xNwo3bK6m7en96yPPQ3EpTA8PTtm8ozsfsd3GcwZJFUntvtV7kBHar5bL1cd4ATsZrz",
  "key26": "JXMYi4Z1QD6FQbgAvsKu4nBSfSysan2oa7utf2BkfbeZVMhjT6NvDia1KAgbcipep8mZnr5RDLwxA69XAmEWVga",
  "key27": "bGXpBwNHkUCCMkUpGKAmpXpXyZeYGqyBY5AWQ5GrUnXjKnNm7ip8ubK14mdqVDm1vidnRrEASLxgZ7VFJw9qMR7",
  "key28": "29VSfuTHk2c83gFAkgZvX6x1UVcAxiHRXD8xxxExqeRRpBP144cbmDRSJSGS7Q5ZGbNq4T43ReBXu1P1k8DoDkg3",
  "key29": "5UJBgkSricQjTk7mRd4UmzsPBDqM39pMGKC6vL7fFE5H3XAosqQApnEzwpv3DNbKDJwroGpJz8fuKj1pPpmHJCRk",
  "key30": "5Ur7BJRP5AaM1QbBi3fGYKsp45fkgk64ACzVr4YGZm48oJbceKW1QpcGnL3CrX4VBXpXha8Dcgxytr6npqZGSrHi",
  "key31": "3gjsa4jHMQwfapRFJugQRzMGtckyroCyZeoZpNqvppy5VJQVVtKDimRnmmHUkfXaebgd1U7xFur6RFF5b6K2Jss",
  "key32": "QMhgBLi8XMUeFrPncRDUxeyAnKVYEShWZN6BmKZrteXzzr5izmXtyhPDSocjMpEMLHC3CyxYAUbPeJYDsy21wZj",
  "key33": "2c3AkxuBQN51zZDN3rKB56E1ZEFcERtRoBiPiHhLGvqFVDGEgZ2FsYDPpBQjBdHUBboPdC5bDxKSBXH7zzz6vYD3",
  "key34": "62SPsNzAVUk6o17UBPyt8ZFJr9XJythFXjMAhNt5Hrmw1FFGqQUw37vmVFJbsrzmodLZMu7zeoGG8nitPxav7cAR",
  "key35": "2MnZ4MGynpN8SRWMFXhTJpRFVhP8yX94BRKvJCkpvn4t4y8Y4zCh8mTMNBdVpVx9yQx9wW4hfzRyhzPAW5ZYJkUA",
  "key36": "3j67USYb7KodwomFVXXidVTgzwz95P3VqK3uRFZzCFPW7xChvUBjNXX4oRMrpfhZdVtUjucMkvtnYciZoN3pyEC",
  "key37": "52CF52dU2g2nb1Wwz532x25Z2PyXgkRhJ5LrtQhAQfhsNscRbEmnk7Jik5jTVBHPh6hx5rWh5SvtvwfS28vBQoka",
  "key38": "iVehtEG42bJJfvuYanW4oeAGxJgN7t2bnrMSEmtSqUH6331s1a7donTyeZQdC9RR1hno7TqVConMEYXDpuenksh",
  "key39": "2TYvCgidq9tvUxLuqWDfC778Dw6JBk2JxtRH2AUdqQtHSfXm3JwNMKD9sJXy9WESsqjTXAkv99fc3scVtNHdg3kt",
  "key40": "5Rv2Y7ccGCY4agwUjTMLnLqGiuhsg1jx4CopdqPuApdEEG8MJoyGKjuQUypKSMUBix7oCZ8ibK4FC4KP3xHQnBzG",
  "key41": "5WE8iDsnNg6JaJSjcC4ADMjpbSzNVLBARrLjw3isMoVDqJzqdAhX8j5ZFWtj8yC1XoNSKF2jYS3Z8pcTJPqK49Vu",
  "key42": "Uc1bYZ8KnuAQPeat83zY1eEz1vE2M9hNBBd3Jshb3kqGjN3GeYUwWm4RDwCpmeU6tWoDe1Azq5twpitgfVLgu4E",
  "key43": "61qVxQwaTBF5FFk3boUtjj6FbWtdNd4BJhHZdPcbnimJUu6V3ndh2TtmFfodj3V2L1ULC4zK2bpTM8xnNoBqbMDd",
  "key44": "5PMQTJdGM4w7yPKqACjBfwCGaoANAB8N1qqvJwXph7wMUpCXxPj97r8nDKHH3fe5QCMmjzEQLVAKEfxjbqtbv1h3",
  "key45": "38fweF33g8oGiPHnaXeuciG6ubSkoaKdn8P1jiKwByN9HbnAxifBWmGmwj7fyBTMpMuwcNMxCK6g3u5NXDVEAJN4"
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
