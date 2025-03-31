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
    "2L1wpWetmpzMttAkT3USpp5Y5fy4a6SSeTTLzCdU3VhWmjDK6Z4ffwSFntXo1QGR8rxdotij7aE5goPbiF5bgeCQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "357435kU2Kd5iJPrJyBZRK634kwwAhkvRegJ13c7TZ5wDBv1qdMJmcJBzShV96thR7y5s2zkxL8tpL4r6XFDhRz3",
  "key1": "prShCWswnCA1yELVMiyVhJAJQQrJYwzMLfWAyz9BijNGkSYZ1Tsy6VeQzRiPN9bQWMkJiLNrTZnnkj1FmqKpkFo",
  "key2": "2kbSYBDfLc3opZc1AW9oRJeGdh5Te9C2rWdnR6vijDzbvpYCMEH2eXEnN3VdNST8CghQVJsJjR2QJLRB78aNwaq",
  "key3": "2E3XygLWU8yYVXrqoyuewLGUSEuFdtHHtXP41zAfSdB4TFnTxfXFY8rpG2PS63MmTjD2S2n6rHJnS3oAQgHymw2L",
  "key4": "WpSsF3dcH8KJLccDzXeTKvPnNubhDstR1AhQmVDXJk9VrHJBqT9zUb6P1oTvpNCYoTnqkVx48ANu7gq58a1JBVG",
  "key5": "39WYN6xEreGW75MNospjmk74pDnBMxkpSMbYKxR3z2twSvpSdeqBukNbusH6hENPrvc7XjQrmwJFtUL3fVKspxza",
  "key6": "2VMLEpDbrPVcp6LAmjEN6HcL1p6XfbY4RiZYfATvpGmz2ycayEgDUp6neJ2HHsiPQJmLCPcC2KwYLmvqfpaBLMiW",
  "key7": "3tD3EP9pxor6dQxScHngQfuf99Gp3ugd2bxYiAaJu9w6GYiLq4CaXP5nEHPZMvdnvuCdpVcLWJh4FmWPVWAf1BF",
  "key8": "2vBs5WxWpeuwo7VEqweEe7DBdUHLaFeHhx6EEyCBVL3oWScwycYTXtbkRAKmY2Bx712y7KobYenQmFwp4yz1c2FH",
  "key9": "2cH8fLDvM5115aTGjr1vVNt4xGW575AadsuESJJK6EzLGpx7nRU9QDgPJpfi1kY2dTxJttduTZmdTULn1UP82Y5p",
  "key10": "48uMN8x9wnkVfX4yi9rgDHudShhi7QkJFsRq2CAivJDpUY3gij4qXz96eRZQsUnGG3hBiBFeaDb5CLoSwKNugPe3",
  "key11": "2fPZfeW8e9ekN3DG1suTzC9mcheF3UN2Y3vzBBrvVbNu2HDyaGaNHgqBSYbmg9nC11oEPtViHruxZv6FWf33Scd",
  "key12": "2s5qetXduJpdC5y7QUHvqUkdKMEgFWDDMFKWrHCdAaXU5ztKQ4ZZwrekgvoSEcLFodB8Cs3BUV2jmjqV6oc3Pz5y",
  "key13": "5cfY4cfauqFfx4sNVJxtaBRF8TbEsGGw4SyFBcuYebNCWYzRxDa1npBjsi3Mn4bCSdfrkBmbVo83vvno4XQaLAC7",
  "key14": "4DrHCEQVZvLCWowmqrGmVRz6VW7LyzetV6j1vaxvsaqfBUNzXrJrEgP3CAzyZk8EdMaWqeVViv88JajWH9qf7DCW",
  "key15": "5vfnUQ1pHQTjQ8gQemCHQkWTqctQhwgT2g5tNG3fSLzpTUM11pnw2pDZUxJo4dy3jn7AZWdqiNRxBQX8Yz3SBDmX",
  "key16": "2dEMr32RQdTNeYum3e5TEcMeyBREzD34ULabyKHayMAiaWspnE6EycsSMNPcJdmpbHNtE74MwMmcYMBsk9kTdfWH",
  "key17": "5tPrUJjRGdcwjavg5uX6PpMB5DHvBR8M1eSUZpY4s3vs99BbyTWY8PRu2udjMAYSYvTGuqbGtoKHZiNDuYgjjupY",
  "key18": "2qu79qPwmNuwEgyQe8wuwN5JJcjRV1s3WYUdFscZ9s57pW8mLtVp9fWqjRuMf9fizbvh1nPfz9Xv7wJJ6uZci5De",
  "key19": "3zmpxjsXLMN6GW4A9Vt1v5Vqu9QenrQEvnQBz1F3kmaBFHMZozKZV1LtKXGkfKZ4EbtPiPuASy28AE7BDXCWYKgh",
  "key20": "3AMbVX61VCiHLKA53Y3p6vg3eu1APpKJbsww2whehRvKPNcyxBdtwboyaoGmMh1VzYmepLdoxT6Tg3SLuuaVbFhe",
  "key21": "3RVerHodn9y51YCY6HvkfZnLq2RDkNzJdkbykuCL7T164L7Xd6gDfARzinvizmwN4Eh3JrwRxyz88YmWrqsANPTQ",
  "key22": "5JoURavZPw15NuUhA7BfMENSRKXw2ovSDcgJwyvwtk2tB9wrPkVZFtg4efvJsiuEg9tDmmsQUafhYTX8gHYB1LDd",
  "key23": "62xzJVmBCXCtRuUmvrgZUQuARUkMHERXeDzr5t55u846j7ZuGd5qWeG22cJWaHDTTCYzG6YJZ3i7CaC9GG6CKshu",
  "key24": "4NpH3mMpxwv1FFSZM1tTiqknTPMLj1k5BUTLRDHATpcd9DW49xJ5zi4tjUS6hL5kzHTabNBQgtQRd3guvjX9ZHhk",
  "key25": "4H7L6jZAGCXmvCoafj6eKruF5WtgCwE36muiE8dTrSXHQQJGHbKLLRujibzjLYZGcmTuJ4VVTXzBvEHy5Qs9gh93",
  "key26": "5MjZHX3R1nktoJ8yKJwoEbNwCokK6RLBuLCjXFeVsgNStbhsjUS2ZBR6EvcUpiY2T1MFyXE31Amk9jHJoRFPJoAy",
  "key27": "3PdccgGhncMFDW8Dj6c4L5X5vU4r8PNL4kZRS3d53Zahp7qgriE5zEgCjFKiNAZsKQuWD9izGiRrWkwY6YMrnSkw",
  "key28": "5drXU7pjbQ44WeVFA4K8HS5oTg1sQiRbD1cFDB7A9xoT4ZVpVZgkfP8uay7KkTkZu6qcB4Rk1nj8GDPi5wGPmLWB",
  "key29": "3q6XJnW5GtzHjQEbuZhqYxbXvh2qpVR3qZupHmd6hYhmA5FWCKdqs3SC3EQue8EggFzkgpmBVRRRtkCXrdgnHkdc",
  "key30": "5Qj2n5x6WG61YYx5y4MzB4MAW1ae5uB7zagALcWhrpeoDsvFFurSKPKEM9XrA1fcBUzSuY45LFPKfGgYmUJdehRS",
  "key31": "wDPN7WofNXQ2PC97phrynmfEk5Y9nyXQremHp1QTX3UJzpuqnYdcD93sJwVHFm9ueLRv5rxNx7oNRD5c1HovagK",
  "key32": "5Z9ekHJ2ro8TwacAnXR6ZJUxQmRG4bsXLcveA5jSxwNsG1Q7UcDc7YA2aWCgFmwWkS5GjwuqexYUFTxnpYUeE7j1",
  "key33": "31s42RedRSRRCBbATpEdu7pXsxZWeCmf2MeiCVgCnoT2Mu1youdjJ9dsFaytMiUJgPCcuDYDqma8M9vBUbEJMtA2"
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
