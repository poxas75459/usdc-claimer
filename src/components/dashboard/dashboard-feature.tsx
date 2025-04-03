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
    "4GVCtDEnBK4nG2U8fSj1x7EETKqM7keSRE3fbYRqKgEn67pgnYR3ujTZqRELkkwNG4bQTBZzbq3TYs5mk7NGwSzJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ApGPHb9AuvgV7oaKpKdUELwaM8HqjcV7kgwSEEZZ18aWaBeD8msUh5r44zb5zi5ijYFA7pPVPJ1LQYc5GdZGxtK",
  "key1": "3QFxPhr2skCQBurqXK2tjm3u6BccacGi9E46FdeeigByjq7AgBLmwDp8LKhyzebTHYHG8w6UeSFVtzwjmcLHA2qb",
  "key2": "4it2uPttWwTQ8dzYJhfD1sNDP93p1RtAMAEGrgSBbjtRvfzVnb5GHTD3GKdNPJiN9WXjqvxYr38rEV9XX7MLzGqj",
  "key3": "4F9u2bNgozdzZQysYhiceo3x92Tt8DYYS2TATuSQWjf9hp2R86FwFaj6bq5jaNnmC6XnmENsdxxqzRyVq1cdFRtB",
  "key4": "2gQmGi5vDEmp6pPowPnPqpZYYjacWtxLzGiEQyVzoGUPWhjHPn1ypw2ezZnZDTXo4behoQE8VHrCEbkpL8MZY2Uv",
  "key5": "3Kw9z9s1oAYsUbSgfnL4uhuqCsCEVVsxxDQCWqwssHoNa2VjmDgrCA1UbjpMa6Nk7AePo89Q3QhPVEpX5K9aYfRW",
  "key6": "4MDs38jBnRxC71UtQY9HQvPgm3hLakaDMcSQZdKDoFQrk8Pj6oBVRzaGska6142D9x9Qm4exaU8Ua9nUwCUKw6MM",
  "key7": "2ra1FiCTAFfhbkos7B43xZPtLVprcuThhPLnuZF7oTBJEx74an1CQuGbpJFBLiTgbdYaPkvdb3VaBFuNjgWSgMJU",
  "key8": "63qywk7LpoC7tmRWnMr7nZ4sJ543Pz4HjZuHcV8kvLQhphkeFeq6AiNheFFDGgTekU8pwiQ8sSAgc7hNdVChi1Wh",
  "key9": "5cyaPq7AxhfWdE2DNkgmrGZ9Y8Rqe7iAZdYFqS9oLHqxpGpT47HeBa2LHaHdJXcCwjRUkX8c1piN4KzWsRm414rT",
  "key10": "35Ay6sn9jH2M46NaAgTpcqdXjBWSSBnTj5xzv7EFrZXfH8Fhityaj7VoMz3Q9M8CNM5VZ2cnQavzAtWQaDMpczHM",
  "key11": "5KQwEAbSpqDFAxE69aARgLUDtm3sBcvB4keg779TPR3gKAmDn4xeimCgwXnyDzQVjm8aphrtmRUXDAzyk15csWbJ",
  "key12": "3be4s5pxth8PiX2HFQx5pFirJkPXFFEU11pevuQyy9LKxz98jmg3UBTjnDbuz8W5EdjT2PBRWxNgs5zhtos5kHhv",
  "key13": "4P6s4VznLcyU91CSnET6ceizWf2Z73QtvQbmQbyPKKPsMu2MqGHzn5H7dWCCXdnGE6V5Z1Kc2qHqstp4gHhfpQX9",
  "key14": "3rstHENz7ER9GfJSnmkPyQsME4eG6oUw64LPFFeVbg7vgWEAFCyMH2bDKmTQHPZgCfC8C3aqaN3eG4ZnGyhezUqe",
  "key15": "3UgLZScSPsFQQaGEowT35YiPSVqjbXRo2D3kBfsWVARjcwtNqvgLiTfUZPJqigjih1Sz8CqNvB59DhUoVp6dx5eu",
  "key16": "ifnk18yx4fGgnsAUwjKiVNxoAY1mDFE59QNoB7tWgKLfVzi1J1BYD1j66GsxmMKufn69baJeKhh4ka7xtggquji",
  "key17": "6HLB57yYUPxBcDSJsC3HsuCCKpDTCrQgbYhfSbEyZaSqb6GiJHzjWjxJsGvSYj67zVVhqu1uYu8aLmGpQFvuSv7",
  "key18": "2xmcevHF48ZwZtbWp59W6sYWR2WzSyTtPFESHAe4Xudkd1QafA8TbFEm4PQtoojCKcgLY9gAM8t7piQ6SghKNZre",
  "key19": "vMjHrqupVLNUaEinCinWZtMQhnwJ158vnUiPC7QE8Lvh6kp2yrudcjt1YYoK472is9qsqHQX5dALEiZw2H2LWSt",
  "key20": "43s4AaRfY2dRWykmQgxL1p4153uM9jDJbjizoZZSwoeDGS9cemJCHugKGAKFBLcEgRWKboUJ141esfJFJfg2ctTv",
  "key21": "2wmUv4oJ4xhZD8wTmq131GBJvw5sGD4zsurYf95EEs6s1XKJRN8ZmPspDnKpE5BbXbVCdjtBt8UcydnDva7xUCmR",
  "key22": "tkGy9ALWYff3cuM51TsL6oRuHHXnh7GHEyuvstGT7XyhpbnrkhyjYJUv1cDwHdFJf4UL13s3BhgFB5Y5ruPV7Mg",
  "key23": "3VAdK8Pu9FZbP4EDThfTE14EDD1uRTHw6ADMjpzCQQ7ZzVPq926FLbSWgv6hFW7KfsZLxJgee3v3i4PRax6xfN8F",
  "key24": "2nqtL5YniaV5aKYcqqAQgxKUnSXZPx2mAM7C1MVrPy5LGMCsRuc8gsZ4UFUs3PHijEMCrR9iiofQXnWD86iCCeWG",
  "key25": "33z5Rom361Yyei4e3GFVaZeFqXfHW2sy2JUtYAG9zfKKKFpAexJebppLCymeVLYfhEX29ShYPaE9aaDxAynG62nP",
  "key26": "4UJEcqMuDfoFS4vNPYAR3qZLSznSKqiSXFknBhE5G9PY2edTXHdWX3MSQyRq1Nv7n6wRaxWChVq5MTm7RHpUNVCh"
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
