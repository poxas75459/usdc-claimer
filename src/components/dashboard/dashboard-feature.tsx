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
    "3BkWaRxZmvKjWme2tJMdsnNvbxVBAHKjBcHQa55z31ecb7DhDbyDkpnrFsg7jtCpPStZe2KCHs8vrFBewMHjjday"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VLDP5iSprMsAYuwaoaCpec6ZSAUstRYCP9YhrxCEAepYy5s1Kdqs3rTaPbr21E9CrzSUNVTJyP52ZBx7pZaeJwU",
  "key1": "2xTT7YGSwxbQ7BEmekyALtNFR1YDmZ5EFt16vjWYJCGYJaJhUowGAwsh1XtSVBuLj9eGYpKUJGy7VN6hfkxAtvRJ",
  "key2": "59badFBbZzoKNb9yKTkLHaHXTqYk2EvHXP8UBnmZDzd3qv4hmo5aGT4oMx2x2kKoY9W77zrywjW4C31zhdeQLMRg",
  "key3": "fHHPSkVvdCt8KBwHwHchZXcGbFEmYmcsGU1k4ARt46H6eBCPDJ9GNCJnY3m3YMXAb1hCZdkYFHaHUQSQ3TnUbgN",
  "key4": "KTkS5BwiWrM7aFQT2AHYVXFhfkp44FPCDi37rZF5QE7YVZEYcmDW65T9fc2BYKUQfqmGw9ZKaY8Yj8bD12GqFWs",
  "key5": "4x6Xegzz1MfCENEJjQKUgJuvynmvbvq39ojWH1PWZgXsWKALMFiT48NSUrz9wwWMG854JkDfhSBGdDmSunLhmebo",
  "key6": "3wxheCZduuLwfi6YmBJ1UaFYxz7DzB1Gv5q7Jx75p9L1ATS2c9ZhCwvW7ZbZLiryVeNPSqaSSrKZ7w9rNtxuLtCu",
  "key7": "3oxzKSh7siChjmFnfegt3Rv5JWpyRvMjRPw8FkE7AH1PKzoWdXLLnnHHW7vCPsHRfkCGdDPNPQf2rCNWjN2mFSp2",
  "key8": "3avtZdRyybZHk1DgDpFPWgdjfL3GoTh1cCjB9ZHJusVNC1gMYVHJsKEefHrawzGuV5Am4Tx7h8N6BHQtLJs5MQa5",
  "key9": "5hG1vGWLPkhiBoYBQCR36bZnKyCjKfxotCCdyC3zUmhRPDXbMW6Rh2zwxxcxqV2bejNWMdFrobVSQ5Xgaj5Jj3uC",
  "key10": "D2N5yy6HWjyMdsEjUA5Nn94nkAWyVE87HeXoRE2Z8wwR7eQDG7wN8KrsyDLSkh3tkFhn4roNjGFBSdSK1z4UG2j",
  "key11": "5DhVr3r34pCggXXsmEjmjVcPxdqr5dL9KT4e7fjy96c2AqZgJ1rj4fDKy61sBGo6Qbd76L2qvUp55UmYboEF4T8A",
  "key12": "4J2kGFHCt5Ms3f4gLcd1FEKoBoeEHwHifvf5qh7XBrvYM2zLVcHhcHgVkSFPzUMyXQ5hZBWgG7mYBSj4mxgCRD3u",
  "key13": "61JTswk7ThPQu99osEQuE2xD6rAeRYNpHYr5rP5e3dkY4xhEhMy87RXN468AC3JwhbUpxC1gni4mULBL2kDpBmGE",
  "key14": "5PYMCfupefSJBsrDFnhhwEm1hG9koHV8u2zU7bFdFQ6bLad5wrf37YJ2PBEUNqPxtr3Msd9XeB7SMtE9zkaNik8W",
  "key15": "3KEPwrueN3HFj4SRxsjxMT8zoQYEHhHkWjwANZXVVkXYBQXZgpuhk7x8FFzuaiSim25x3sosp9cjj1TUQWgyCNMs",
  "key16": "4sWcJQ5QqghWcjJTWoST7tq9uNa6x7rRcdyreNaPZpjkZQXtAyTpZz5669dePHMQhL8pzXzxK2RNBm9x1D9ZQbn1",
  "key17": "4UdcmU36ZCLzo7pz9BT27sJtKx4Vip7zKb689MGckPW9Nhz2RkJhdxZCMuMV67FrmbiWuwmB5ABfTz8dzwHSsZ66",
  "key18": "2F6SFP2hN3nev5Yqm4WMxgQfLTXFJ87wfYysaZCiQ9ons5LQtH8V5PmJsci6JPRCCk6J7iFucxqNUkNguzGyLom5",
  "key19": "AN2XQJzmqJ9wbBv3E6JhT3DnDxHE7ja6rExXBMFepYj3YbEhmrouvvEMbHUY8zPFzyh5Cb5gsSY5q2tM9jJaWwW",
  "key20": "2rPZ1CTaRpAYRvkucwxKd7X6UeC8qW4mtqJtZwPMemfzcX22QVmc7XgLXRaz8XnDxCuQ5fVy8F652rRFXuZPzyJY",
  "key21": "4gMM19SBGD7TMg8BfGc7kmJdVcA7GwZaoPdAvCJhN3T323YK47ujn45iHRNqPwm6WTr9YwmB2uwMy7nrF9AhzfBp",
  "key22": "Adg4RRAKy348doY1ak3iaKiARfuf4Skbb8yHJwT1zsrRQq8Me2oQVDGhExD3RjSoSdr3mMNeL5nD1vLa7AffQ4q",
  "key23": "39nhJku61RdiXBYfcfc2u3sZNsGtMYRQB9HwBeeeEUGgdUwGak5B5HnqyEvvZqKeD26gpK5YiGQpWLwCybrSVHVH",
  "key24": "3FtkMoSryG9vynicWB9ypafCgKUQksFCksu6qHJ6dSmG6b2yryXUj9Uei8yq2SYok7J6yuPaRrb6sBFqi6sAW8Uy",
  "key25": "3vxfyvSskenXrn4uamYqweBhqraR4oNQmPmoHiYKfV9JEXZ4R8FjKGswBqb1UcTB6cruUNn6zZPVZka7cAYF3LiV",
  "key26": "59Lhs83y69nBj7LYoLCX2XPyYFuFsDUiL1dVpxdvi7pYBwvwf6GcmcMst61szAcHEMo5ysgSsDwq3pFhtpZ75kLX",
  "key27": "5Z7fxd93HSzNPzLRmgm9WiJvCKVu4stT13atTED5myZtDftQe9DNq4zqjESmhUx6afBL8kSnLz1LvS4eqzuBS8JU",
  "key28": "3VvoHWCCqe86yNNFz66CkufNwMMq1vrTnREBZ14RcSdYNkdnS1joHqZ3q1RqPntUqzvAHrPmhzLxo1Y5xDvhEbsL",
  "key29": "ufd6cDbvsQE27k3nTeEqPpuVVbQ6YFK7S6EqJCG9nGNVcnZ1JiMGMsy9oSz2AUhGGUqZz4ZDsCRZQP3eq4k4CFB",
  "key30": "49dn4tcmSwASXpmBTqiM4vVQKNs6JXE8M48NWnXJEPY7NsYFJmL8rnbTTDa4UTkvXGKf2Xey5DxSp5wEScccCZ9m",
  "key31": "5cBKvwsNTrjJbzRJspnVftQJ6zy99YyP58yxpMro7EXPnDACZF7XV6rG4ekjYkTYnfD2MqQaNBvw8vtW9L8j2zSr",
  "key32": "4yBW6oTgwjwAp2EaP6kmpYYK2hj9qF6JtJpEgLej1q8UVn1B7mNNL8P6T4XikBbYQ1UdXewQJ2GydzZw9zJCho3Y",
  "key33": "2YaSria72VBt8wyAtp8GwDQe4jmwQ9NuseH1ZavnQ7GG756gLEKEq328tE86a9nymMc8sDc3eV6tovRM81cLKj3A",
  "key34": "3frD36xf3YYUGw4poM3QhdCEFCEZLTxgdRcDYTcfQoRkTx1iXxfzDd9ycLB91KaEwmmPpiBdvLhWTPCdEe6mTE5D",
  "key35": "3whKTMCdDMSo96i7waVgE18ADqaM5bQRZbsAwDL2grnCTkHwJHd6fQDtSY9c3PNRSisgGfKZD8xKG1aDQQorLF9Q",
  "key36": "AshSQ8iHtqQb96Bem6CCEbZU8hwmWyp9e78UZGjYCGzuHX5nMsTqgstSJ6yeCUELD3Z5x8YnsUsCmk3TWkh8HjE",
  "key37": "2XqmdPv9Z5K8mAuw4o4stWKGC8jSsAfrfCwisYTUtvn2av9KN782J1iwcjRtj6fKRvH59zZY2H2XUJCeNFckct9Z",
  "key38": "5uYDWtfJHVBfmXU7KD3Nbegk4puGEoZXcoHdsdJGy9BJ9j7ZQV4CTmE22QQzQTARGZ9LniKDw7jDecbRBK4LKytC",
  "key39": "3BSCJf17AJjzxAfT5anHCNxFSCEGDt5gdcv6sccT3WDxLp35iCvTvwmmCPTwuNeZeHpMauKmV8vxw6ffUFHHbx8J",
  "key40": "5Bz1a6VpcK6GTY6xoGBsAqg4b8c6x9fKdzkG1xpQcZU8KFK5QryJreVDHykET4zpB1K71eAkcL9ZP9ieocVPYjfW",
  "key41": "4rvVgWLo5FfWqkwR5W3W96RMyQsww7o8tMgo6ka27P7mdoxdJf7a5k6EoMfmWB1CL7AeCCsAeXjzB3H7Vb2YBWfn",
  "key42": "2KhmtUmeAMDL99ysATJcxsEJ6ibNZHEAw3QAhKytKRZHTU9iU57K3TrJXWMrpobNrJBbGP4NKDuAGARhvb8C6ZMD",
  "key43": "49x2tV5WWa9MT1FhugeCLQQtx7YbTVLeGenz6noumMKpFX7u2JGfr8Grkqk3KscpvdnjZyqzvdtgeKSpMynsXdUZ",
  "key44": "2gXPo7zQ9uovfb8y5NaxHPUmJ2UX9z44s2YLAgkYbSJP1HPdB8riaHzmK6VEhNeDjcrcFEkbntjcycqMpsnSihyu",
  "key45": "QzD9msm7ui4YY7eHv6X5BjNjVJRcoqSuFY3eGxVorSSPGoZri67dDHs77CkpNJHUPHrfYqkxw4vGcETL7NtUgoC",
  "key46": "49G1W7C5UKZqzw9JjSxs7ocW4KMDGazdhgw6Hr9hx1WDRjbXAhUkPCHK6JEXiyrDq7xn3yLjteZpZn9XbLkLSmNB",
  "key47": "3jSAFupccCWggbcodugNQniyKPXFztEAafcMyrFpDPivNXYxC7Q7hK99L9hFe45Rg8raDWoyNPdjkpHLmKYT2nrH",
  "key48": "2VUv4tyVxmaSogQ1kbpHnv4P1Gv846RRXttv7d4Z47rKs8smPFvQ7zDPwuqvfSycz5SYvK7Q5K8UMGYPne8RLLj8",
  "key49": "56NnL5u4yTx3J4UqkKoW7SuUnd8VQnUi3nWoGekFAhPqGTa9UG93zaTV6wPm9nkEUPgSu8bsFdwnkieLzzvrGWkg"
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
