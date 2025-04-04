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
    "2s4sn9UHAV6eHTp9quUhFE7BF1KMKsh6p3TWvS1sWQdH2aTpXLX4c9yMBXn1q7B2hwY1tkcJY6qbhQ8rDKtSi2VB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GGGLCFG71UvaDRmrx8LDexqau2NZPWZihArn5kNmnnsHoUmWDdyozGoJujqP6Qsz9q8Lvs6qiBgu518oQ5NLY9r",
  "key1": "4uJYgFmhmC4c7EFCxdgtbbSQXXH2b85Uy6qhso68dhAToGpbN5VxSfCCm9kDRCD55mk6b9tRVqfwJ6Rkrtd8Khss",
  "key2": "2ciB8wzbEjtuN4DgiGHT6rCUCWarB2gGPXKVVZWcdetrcG15XAaHzy2pZWrMn5VHP5PWqJhsV55AXUep3HaWZ2id",
  "key3": "67RuzFB8BVAHtYXYkippnmmD1K3LxHj71qJvcsMa9yqHMTHMshg2njWiEk6s6EBbFiKpVFfQcVi3MCsE5NvugMgp",
  "key4": "2F1vPEdHbA5EihkDk8hmPTYoG557MK1DjrGDuXaqi5rpHwf8CX5eN7fSxw9CmrNCDypMb5VwVm3gJdMi8hknXEfq",
  "key5": "5QEF3N9AKo7yGYVVAHuNxpfKjRAAyfRDuHZpnLJTz125b3B5ea1FyaafYaCWWXy6713stDg45SSo5g93MWafuH4n",
  "key6": "35WTp2fknHAsK1sLZfPQZpQHJAqYuGvXPkTEqDNSrkkMc3K72h9Lz1bv2HLDVkKfANY2u35fFAsYkAYvaw5uZiko",
  "key7": "4H5bo9jmviakcgWb5fCqDcH3bJTCMDqMLAd1RLHPV2Q3bz65kXkPHQctshKqmsdVqxsz2TG6P4FyCSyPpHHEcAoR",
  "key8": "z9rCov19CacpNDRQzKTshM9ShGLfCK5vBxSGuNVecDnWnExQGehdRKV1iuvD5ny7qX1ci4wCCYb2ego3xPCZVp3",
  "key9": "29GGong9kGucnhkw1wu5UCkVGD6YvfTjJ5i8w7QNGWxEeTL8VSobAbDRzMdNgAfTfEjaGn9ZL6mbLwsCCEhRPvWa",
  "key10": "4UMcp7bGMqaLBNP5ahV4sK7BJu3vhTuKadSt3M5uN9RWNKxRpn1fdNizCDM36ZsJp9oVGVVijHqoL9rxVay1qqmH",
  "key11": "5ryzPMT7QeKiYRersA9XUGC84o7oqsTaEzKxev6xhfpDpLe8tCT3WPdMvskYAanc36CdxrHTXxjBNbdWfCVYn13b",
  "key12": "4EFcBzvYcHdKKDNpyow9m6epdvRw3QmCQyc993gjmr7EmcVBooXfjxeggcUaPcx7RAwtL6e3BnQR8HsGRB5HyyAe",
  "key13": "49GSYa4dbXNAFGWAnG7wFX3jjiPSCXLAyPZUwcRLL2zS8pizaBY6a4SkM1Fxd8oychwxjrvuWXdcEdP8hTB6YK7U",
  "key14": "4aEQYcktYErqSnDu7EpQok6iaTD2mj8XcTEA9144erKMPmMPrsF4HYqcd9Wt9ksCBKZWuiy9zASz33cf4Smb4tjp",
  "key15": "63gbzH9M3zGJmSMMmjGDa3YzG3Bi8kZgVeYWa9pHHUYnTsbD27jCfwsWh3hjEayzfn88SwYdM6aNQiZeJ78ACCzQ",
  "key16": "RJwUTZGiAsquZFJ6eeNnmNYbiPohmrVDWiWRRriTA97JxMh4ZgkQrvQPbkk2qLyVNHsFi7T4kXdJRUjoKMVM9Ut",
  "key17": "24pTzvAbr7G4TEfdfYb1pt7zDCBp2S3w2krN89DxTwDaUWEmwGiDmSeEuSzbf8H7tvtoGrvKoPt4oeLC99E2orHa",
  "key18": "51c8Zfq7x2FpHkSyen1jfWJ6UL7YQeZA3qL6sjrix6FfqPyDC5aUgQfGgf3ansSzuBodQfvmBYDDgC5pBcybGfNb",
  "key19": "5j7FsADLv1FeU2ZRzBFEmY6Vuim9TyUEZmkmAFdnYcY5ZL8wD8keamH96Qj1eVGMnu14NZydD6GYTAwhtgyCCnqa",
  "key20": "4duCcwMb8EFMo1sGG13BKi64mJKhbyYbPMUCiN284KpSr8aPUu2ry9UzgFoJFi1xRgaPPkdaCqU78sZ6G8x2A3Fg",
  "key21": "CQa3Gn8fMmAmi3PVtVGZMbqDnPzUMkCJzx4GgCTzwitX7jtdaqNFgXPbnNrrHen2oQfFYJdMAFmFXQ7NvdxdRJt",
  "key22": "5Heq5C6esySoREQbcoy1rkcqkTaFRgm3NpY1cvurx2EJ2H2UreijsotfxdcPiex8aWFAha2URiYUj2WccPFGWQ1a",
  "key23": "3TdVCc7PZZcGKK3b9EVwwUWyqGKDMX8JGrjdLDuUbGMLYiG13e7qVXPoZG36s7foXP8ZZ6Kw8SnW19ysuAT6o12W",
  "key24": "2wirUfrmFKZWKn5syYSEmZVsKxxSGHKfrQeK91tvqLHmxpshUkgFQP3fvgdTtkobyMne5V7i4X3DDeVTrZuHEqF5",
  "key25": "5gU6Ejnhxr8MYZaH3r3mAZkQXMCmKFPqb21Fnfm7AoHLxJPiaWQsNkzbRaTeuKpStsHyQmQfCwhFiEjedFVZqMYD",
  "key26": "3jdQKP4eKrRFsCaFD6cfuMZu1vi59SPnVT7Kad41bCQdo2S29xMT2jGdR7dWq4Cc5VQA3dXkqyF28psdo5TP6KEu",
  "key27": "4x5jtc56HjMSkFSKMRwSA1QCTkL75yRZycRt9LgyHHK75kQkHX3xRpcuGp7uUqM58RWgi94ZcNuvXpkN3CV5XNuW",
  "key28": "5MzfGJqADcc4ySVqGff6V7KWSpfeCz97dUbLHDGZ9bx5kyYcB4UogFFdGYGcg934uaowwPoq8ZB41qLK8GFvaW23",
  "key29": "3bssiznc2XnsVgPCH8g5QoLRGhs5u5USbzyASF95KBoQNb9EeiyjzESQp1VtkdkBSbXPTA5y3LLAF51mLqBgebzn",
  "key30": "smFEjuiML1QuDE6aRnJndAFDT7U7jJzB4NrmiG8o4zoMwcKdRe3zWTNAJFFifiu9ev7DParUJFw5CtfvTAY4Kyk",
  "key31": "2DgbGksXV9X1hDSorfHTBn6dRMHz4aaLemKChsJnwJUNuGjrsezdbPb1Xf3BugtGzhAjnWuG9SDvxzcowgNZZ2Bu",
  "key32": "Mx1sxDzrBu5d46YMViiFfiK2Ao98ShWLh1xPUaYjR1q5Ab9eugHSeLyiq5CZmAgh4YECTo4jVMpXberNB1Cx9pQ",
  "key33": "5ffPRKUQXA47ijdCAg9iDRWqH5NahE9eRMQBSydFfUimq3or9gYr19uZhYUzzdrmdti8tRSgZez88wAmnxGLs5bB",
  "key34": "5qDx9L1FpjSWFFeB74HW2puqtLNYU1gJLRUJYVnfVqk6sWqLWTpAV8bcbJWiTExhnzmeVPtq7HCpCZovRUbDkFXi",
  "key35": "33NxE86gg4s5dfFWPJVoR6UmKWbxSPcrJKChdosVDnFsK2ujCKZ6dK4iC8EWBAFnLXpjP4Y7jRywrYshBm2zDjK5"
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
