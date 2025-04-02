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
    "2GaVhvkQk9MAKtusDJkT89mZDySxuMW7igHcoE8vtE3MNH8gXNkiSYdC3fDZTSa8ir8zJQxrmHsBcCnC7LvpGGWu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Muz94LoVV24SQjLHWxCoKXQniRtnvR2EBJ3XqkVDqx7EK8cBFqmytoTb9nwoU4GtcKq9uxyinkfAYJoywUUSmuK",
  "key1": "4h1TCohEBnZoSPW8UTREEKBNoDLXTvDgGmijbbvYMjK3USrCyTg9BNSXdnWRsGSJ9YLLH4jXax4obWrknHdSZEq4",
  "key2": "5FhBM2jByxcseNYJkziYkTAQzXmhD4AjoeKu8d9dNYU39iUEhHAWmvYLA3RyaGwbR2iotkgbkDsvQuAdnQY1RUdA",
  "key3": "2pEBYrG6vxjXqr6Bo7kyotfSWPT9Tg3oSRVfhDQk1oh2TsAYTiiBLe3AQhzib5ahuhXB9KBjC3TAvTG251tqS512",
  "key4": "5JVF9wohuPV3K7n8BD7mqxSi7tQqPgeE7L9ZjeHoAoAeJBWCkQWJLWsqM1CsQRZ5hQ5aLEyeABZMfPs4Tm4zRq4P",
  "key5": "YMDqQ7qXmuDESWAAE4d1r1jRKtmJXfGvEz7rErY4VD8f4AExphxsbjKXmFpJ4ezEsFz7kenAHxCvBXkdfoZ8mSX",
  "key6": "2C8TcF7DSAJvnhgRzAV3R3JuZaXQzJLZBvb8NHZYR9KdiwnSK2wQmLfVBuFHQbLi4vhKw3QyqB4asMpyihRZhPQW",
  "key7": "5jjFWLKQ4yocPfhzrCcGaJFauYiExqjmABiXN8MwANAuHJUiyMqPedege3WMXxqkAjDPq36AKhZGh1W9Pv5EusxU",
  "key8": "4NjjicBe6DBDvDjv215My7umY2KxCKb6WJsvt4tkUDTZeaK7GY9NYxU5wmLVMyGvNFbYRMb82aSMJcdf3n29QHnY",
  "key9": "5EK98iM9AYMJQnXkmUmAvHVg8J5CPXnuqZx3ojV4JjXoU5hMfq8ZHjxEcrhzZd3ogMcg6KGYm4MfLf9jCfQyEHAa",
  "key10": "23Wpn83dtFRtAcf19mS6YPNQSP3dkcitm5TNjDKffsboqLen52MFA26UNNxynxE9YfPwTPpzsAoUfRkRfKwpKTQN",
  "key11": "3ZXcWNQXrtDzfWrNR33UG5VcHPcSr5JoisAGsdxU9Mvn5YpRi6yaQPLKveqLuDoca7PaeXRXx6YvxgWv8YdHjG47",
  "key12": "5Kk7KkoEnKYbSw7PSWnyeBRuLZCkSAC21T6fJ6NCx5RR3LRtHLN6Ls6SWeEtLYmUryjddKLYXAakgJcaufL8nQnB",
  "key13": "5KswY5LrGdD3oF9acU16H3KCACxZ3iCNEQnU3K5obVGirTCsw4GKnWcHFZDYTqMymjncEGEFxZxtYPwDh2BVRtSC",
  "key14": "4y9YkoAF7ZbGqUE32CLQE7jqoNQsjvLGiKnLyVRdiykWXZ6w5QsroMx95GisSN3hgdR2sNbcE3iwPQGuKJipKRrW",
  "key15": "58mPnnf7XzGjYdDzU25L7gBLWeUiCnpakbPYwXCvBpcDEwoKiZDXaJQxDHGvBy3jjqAx4gbLB8em2gTbkgAno5vc",
  "key16": "3HRhQKvbL6NW9qMg5jND2ULM9roETn1GE5WXAMBXRvpg62PEyaHzodBWnxSJi5vdy2tWuZiE4b7bSAzXCqhHodZw",
  "key17": "3hC2hyqF5L7QLmJukTLHHAKfG5wzEq5uaGuuiQ5KHVMsT34p6CJyaChZ1vVp1RS4b5wKZgAdKTryhqQgLvCyUaUr",
  "key18": "59eroH2CgeDZctpsPwK9V1dW2etvCywRGFEKdrBkJJ7uYAXSkKfDt7wiMvBZ5pU7NxmntEx2rJFpZ3oiYdLNz1hB",
  "key19": "2JT4vcmQufsZZ6j8o9woNcuHFuXkx4Y5MpBfi6DMsZRwmujnNXoXoEyhm7fWFJVFgSc2dGWKV8PKwFp512SBpRtv",
  "key20": "3hxs7EiNGgxFPQy7WMBAF5o43Sz4eBk5A6A8HDVXux4feuLAz1PNAeek6mka4UQFHd5jdTN3LiCitfgXMnKyHaw1",
  "key21": "3xuU4W1gNcMFaQJkd2ek1A8t5oVVrUdRsdLmMstuFa3d96co9Q2SrScaJ1yaRbSidLgvHyEF3ChZ7VCQmU7vqRmw",
  "key22": "3zpcLFrWun2GMsq4ajuMS6jjJRwGJ7A61vAVNafodN3FxmLVZ1NSCt5eYjx4BsCfiCRXEoSM1T6rdkFC2hNs3dYw",
  "key23": "3oBtHdkEUamENDjWDn8HZk5VGDhoT7GJ47wcRPzcWCHDJ7FbKxuME6WnyjRT4fcqzkGgFssQATRqzMWYEJNw9NiN",
  "key24": "2nSp7kHaMsvTTXSbFtGX3FgLAyjUN27DUjM6zneMBSTgUiMccJcM5bYnyCj3m3St7wPBL7WzXkDxDacPJsrYHCRf",
  "key25": "4TQ1DYByCFNLMR5cpR9qiqb4iUgdvy2fdTwuobiPAuQgJXqiFxWcCF1CoHwugWNqAit9WUKDQrf9jooM1g42YQKM"
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
