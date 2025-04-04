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
    "5yBwKux9LNA23TjW6TXtaQvHXwo7pnzQdV3D5FcY2xkxX7xRdBfJv4t6pHdXnh1UCQ9o9aokythZeTdHdk4naHxG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GzUfcK6xiRk9omcDqUrMUXp3wH5B6Ae1BjSokjyGq1Yk3HhvBaC81e7bvKzJPULuvQep9ZBBeo2wzbtEpLHHMpA",
  "key1": "5CJXgmbhH9VTJLfaCS67tF57NqfYSahnXHMTNr6VCA6dEfEopByqxqNfEDCNsQ7DviRH3SXyUiPv2tB58TCZnV9s",
  "key2": "5nqAbs7F67steUMJB4rY6MZ1HBULoVopaYUha526ZyTX3kArpHtd547nrtFWyimM7btg9hrjA44dQPXQnqAKWkU6",
  "key3": "4pdfURaiA9T6H9KY2tCn4kus9Go7a2VY8iXf4oHVh4mRWQhkC4FKNKkbTPy1fx64QpVCn9ygHVRttqR4XcmsXcEm",
  "key4": "42rgFjKJSSffJAREbbJF6Gck3ostYpzkAuKraeeWjkwNbzSERhjCKfE5nn13FLKy5sKmjFLse3XaJfkDhrZptHnP",
  "key5": "3mBouEcBqg1152Nq6pPJJLS7reGGvR7S2d9Cqk7hC3AxPcRvAfP6W5xakwqnXSGRQqRU8h7YbdX62otSZupUnFe2",
  "key6": "5pVkiJz8bE4yGoLMS61z7mp6mTqSw9gDGNjxBUJmrkB2rZxuQ1cxKtEPuzA3SwXMzraJkTWAn1Be2SZLEi2DxYrt",
  "key7": "3sMg2ks74hcVdxumLQ7ZXCooKaH5Nc64qhpx5xcv3TPrHhnyNVghdufXPiahsMrykqdgJpbaNznvNpTTB4e1bwwz",
  "key8": "56zLDVtHm3kCknZYW9dkbFfENqp1A264QodX5uVck8CZSLTLWQxsicscu7mbigit1Q9xTpZr9rgcmvD8icaFdV56",
  "key9": "3WvM1dCXPDeKJTTGRiEYaFor6QvuFQQzeQzS1obWRgJLRBQ1vZtdWLmQmGduQ25GjqB9FDK8EAt87bpnf3c17sts",
  "key10": "4xvgqa3Uscq3ZLq84tKteqGqXjZ1x7ZmQRmwN6VyFvCbUEcbqnJaT7GjZhAvA9bWHEjJ1mVHPxh9jR6WbFuqZdXN",
  "key11": "3fYjTPC2Z8hRo7TwnNPWjA8xLjqiwmDZju74egQTTLTbHcEcofMo6mmRsHweEe1YgRCcaCim4GMxaY4aVgHzJJkx",
  "key12": "5bGE6LMFmgcbnGFjWB8Aeycg54sQdcULSpLh7YwK1Btp2kS6gDNpF5xo9aPhXHyDGjvZFTvNrUAbWXN14YRgaCEs",
  "key13": "3iQ4MgFQs9xG3CKkfLNqVygZx7s3e4e5KGo6UFc8UWPF6J7opH4KFKCRux6nSwW3xHxNnR999AcEzVSFsU1TVPw8",
  "key14": "YDjRNEnmcjn7EjS379DYbtjGbeMShF2R4qriQUqRpPeAffYwUKTogMAs5QDFhqCeUvxJVQ226WrkNdruYJHXzNA",
  "key15": "3KHjcVRgMkd1jJc5nBHeGyvPrS7XEd43xvdt3XfJHKKbmuctwVL5DDXx986HWvrV1v5ZeJkYfDMNMQJBogFQgsBw",
  "key16": "5rLPVbNDxcsEzsngLjVo1mNLHCThkvbPbpKHM7oBbf1dgc7QoHA6zoQXbzfURQsYGET1BgpokE6hAKroZfQ5dni9",
  "key17": "KkgkfPxv3FjUu6gTgNxcYMDUVGaT9cbzCHPrm4SypzpRPGNgbaYPWHkKBMEPAczpBMjixvTRMtu9iEja15reHan",
  "key18": "4d96cYAiPSf4fQUqN1LNjMNqFwKkaXf6Hc7i1f3uYokBF816qXK9SWq6GkBQfQLEprndsSeDMeNe9vHsy2pZVJdy",
  "key19": "2bzS1PXMb5DeML5krV4ztfmKaw9sbKqVLVzBMSXMFCwVqJ44HoDTACTWYZfTUWmbMdWLixy7wagPaemMyGHWjTMd",
  "key20": "4UciQkDzzt387bH8NcUXpMhJRHLsc2KNfRChBbebGHQiZysiCETAgSQdAHk8pKFYHSiwX72nazA9yzNurKM8mhfs",
  "key21": "3ksrRuBQabmaSvd85H9GJZvYVRVw3Gs52b9D9reMF33tNbC6c9ZXMURk7eS6kHRSfct8vzey3J2UEQeo6RWo4mUP",
  "key22": "3qMbfYttNTdkBefU3kRpa2mGeGb4EzpXuRio7bV9MhTCEPdLJDuWWkCA6p6N8XrWfPJSSZP6noev6H2hfYWWsqWJ",
  "key23": "BtYpBbnzKqReLHD13HAntnRZhBSXPUN4HqpV7HzYF4oYY2w7dSH4DkkKKA4E3oRvrYzo9BdFvB6AdMnayYddhdn",
  "key24": "2Yiv7xYhQZX92zNUdEgSq24wN6hGdEXgMyXGBHBUmGSfKk85iCyujyNS4Hzcj76dXBuqXSLDPV4dPkC7DWb6ZEA2",
  "key25": "3QDWfxBymZVJTJTxJ8e4aejeEpNdSY8eNodskLrPsjLHSbrYNHXrtfPBetQzL7iNarjFB8rRbNzVBvrdcEPtCtUp",
  "key26": "Jppc5j6Rn42BR3AyZewwcSMRgb5fqENUNXXt12j27q5hXsfTASvad8QMPNniKvbwf85QtKwXpCh93c7CKmvKuXS",
  "key27": "2WsnRPE7u2qJ3tV5W6PpiteKYMN8cacSaiVzswfLvBGBRa9MfBpm8waPGVC2YH15sviFyETBREpXhBrxdRPeKJne",
  "key28": "5GikQh8Geigu59n6Ed2rGRQjAF4zTmW26QbDJoKPrQYALKjvTfkfv5qw8CcAbifJtwRySunzT69WAeFZreqCpYsn",
  "key29": "NrgizdLRyyZcA3q5T4Sv4Axby175ViAzPt4Ri4py3pdZTzLVVddDQbQ9xssd37W998EgTtskLzuEqyhqZ8QcTdw",
  "key30": "3sTPuQJxPU7yo33qDE4ATeQWMTMZRgdYVNrfhnQmGBXtHC1BSV78YXbtxS98JrEZd6BSQcrEjEYZ1zzzKiEzenZy",
  "key31": "2nWEnjyEuWznsc7RUy5r13jd4GQDxLmVVcZvR6ukStpFqFWnbg8Q5Q7qvGk8wgHpydAUFgwrEUtJTcLiENMoXazX",
  "key32": "2EdJM7i3C77C7GAVH9d9KNRuuEVvXmGGoMQDkdcrb2hiF28rK53zbGa4b5mzVK4p31M8zdeQPEJGw32LRmiwVpeA",
  "key33": "2QDMhR8BM8NUX44KaHFtpKb6vqfJY8fvhpxqcsJ3zDJ8jg2dZFzL12i9GZUfZjPuRyZZB4Lve7XWNsEGQKhKgWwU",
  "key34": "4bQQBa86bg2twSH58GQxT14qjJFxV1fMwmRwmVqfbEY3UQvsHp61KSENwbM8FHmR3P66WsqNJyLpTBgcH5JBuanb",
  "key35": "37WTEYgtgUqtFpvTVhUZPwzryiZPerRYCdzpP547xokp7gsjSGhkDkYkanZFMCSVPXHSDfQa3D5wsbp2AAtpDwv3",
  "key36": "3eN7JqiQ8XqYxgMwXPvpv1KqFuRZvdJR99SR28muczJpepnFPWS8NS1Qa1V2DLdVFLCRSvx4b5LzRGbagiu6Hs7F",
  "key37": "Y9nKbqmzqArBJk6WABkiBqpbySJdc4F5t498Yv7jScgJ62h2GziFV8chKT1FuG6GB4gR5pbNXStuNrc9UDXTbz4",
  "key38": "3VgpGsvhQbD5Hev94E4zq3HK7tQ1MSyUmp1rHqCDfVfe9jpGiBHaRKGw2u4E17FAFRXGHe3BZaq1v4RANPKSBbRE",
  "key39": "61KjHk1A78fyzQZZfXsXyCUzQiWft3us5DuASeFMmitPik4BgMXj13T9fgP2Uxst8ULTX651Z5k8MBtJT19pHRp3",
  "key40": "24McM9Xpv6ZhXgktYXtjjTBzgW3CrNcQ1kL7hLTq6gS6MYAbKXTJef1L8gm162ETNYnkMZH38UpfG8oATwjQinLZ",
  "key41": "VrxANk3v2yQSNSVG1X6LeJaqbjuyoBxEnmsCBCFNDeYN9VSxBEZgZKx99SsRa59n2pFXedKPxkV3sjcsaQMASw1",
  "key42": "2cT4opRrxDdzrWSAcsUSEWs6LzLmtCMDa7kgVuhLuZGSFXMUmPZn36ivtQiitC47oosCgZXr8Q9ky3gLsDEpF3GD",
  "key43": "2E6PAf3ThzXzGAWNs12M44guPQV7YvRXSsfY2sg1LAeeoifkUxupr39G2kNkj8HJVQsZCvSi9SQqD7GGKy13VgQk",
  "key44": "2EmwJN55MEWhttj3fnk6uuzbrrfE8n6NRC9YhHDhL5Qee7hXPSAXDZRx46gnT6D7nDNho7a7xYcd8Z5Gx9gUQCSN"
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
