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
    "3ubZosNjb83665PwJEhdHr73apgapdX56QbGgmJcJDyQvpx3R689iYZoVKKTKQANB6wFVButQMaUVVVRtLiyi9wB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZNEbehuPrMQ5J2wyQ7UfBKzzwBo17Ukx7iYyZDfUZA5v3bg9bNKXCL2SJcdNgd6t3As9HnGKV9gqDjm19HxctXm",
  "key1": "2utc18eaeaEGaEH5oBN2YiDKUUEiS9RE4VZUhUqML9B7sDp2nayCh1vk7RRUUE68QNdBRtjCsTGmpxXfR6SKfdxc",
  "key2": "46q77MmW1zSqRNN7c3Wtp2pmnrE3DhmBa9c8jvE6y3hpeWNgvdPDuRJUZAqpnPPEfoc3tahD3M7v5izQs9wRY4WY",
  "key3": "4fBLFA18QAh3PTJ2eBkBBverZQywN9jriZJ5bVyUcdjX9ZYPqMQEUfMpHHfTuNpAVZvZXBVrt5wowCY4m2G6dzcF",
  "key4": "5kcDyAjJSqQ29RgzERjNj3YuJ1UGtuAmxYD9p4ouzhbcZHiJxHtxW7w6Eng5kfbASGttBzNpMf6eSVEgwozkGKkG",
  "key5": "3GQKg8pRJwQp2dYu1Q5rYV3U5x1Z2kBGjRPzycLTxyb8fEnpCwfnJkrHL99kBo5QLngPd9WzU7YUg3vpybGrR2ga",
  "key6": "2jDW37U2UNa1iPXecxksKxLSiKKNFsTpCns9rNHcnscYyZLT4WeypkywQtL9YgLeshEAmX4ZfCqTTXCkm21ZZaF7",
  "key7": "3uSgZ2gRNYXzz81qypZwaupf23Gog13TkicDRvzEV7APHtkPspZAFvRfcvaY4AtS3nBfbW3EAFRUVtvxUjBsKuNc",
  "key8": "5RHSrywSwaFuCQqPPu52tDB6GMb1XwdASNp5PgvVZhdpafLMiR6WDG3uxTvGcikYx3fxWu5G5pfhFPwpuwYoqgs5",
  "key9": "5kWJLQFynW4QVtgsxw3AvWDjUPEad41qkvuZgnBfCxjNZDHmRqujQ9f7SjKjuoS6CXqv1EHPNJxA5KpvauCsvJLb",
  "key10": "51tTBqN3QCwBbQ1TmdQpQDN9CKwHhbGCPWtQqNVQgKrtWccWZveffFRZeGXzchnZrEUFxKapSqzc2wWybtF39D7k",
  "key11": "2h1DHYE2drGxNwBnUzZnXzHad4cwkCSqnmakn7muirha1iLK6u5uenG3GkWXUbK8pwpagGy7QVuPLSieGJaeC6Jm",
  "key12": "5jDiRZyXKULJQebr5B1RneHYbfq8NBBCaYg7ReCAuVXegfiLM2hBsvrNfJbLiPF2EMmNrXPy8BqbZ6ExkZepQSqx",
  "key13": "4VBBpAxgmnSmofobagrj3LWBNuSzYYq8b8n839J777uWqFKXdh325b25noXGhCDgdMKrEBtnnJ9Qa2apyQvpCkm9",
  "key14": "gv85WuxGSJbt294FoRtGdMuBbRbm1tcqVuy1MpFGU2oFvjgasfQgA4y8nMQyT1hL2TS3E8sezbedV1ncsrjdyKK",
  "key15": "36ddbfFXT5WNuqcQYoFC8t1mLe7VTo3cyvCtF6Zjz2W8SGmMDuxx6n2QzTTXW7y9fa1tuS7yghVMePgVzPQeTiQK",
  "key16": "32BUUW6YoD3z7iQwwq1wPzQTGKR4y3adTJKxaqyprnAv8C8iyH4en5Xh89fMRdwZriYXm17mBmCgT5o1ExKLa2BN",
  "key17": "2nQkD7ExTzJ16By1sqCisAffUGMSNjUESFNRDJFWhxAhJa7X5j7QYLaUkNssM5dj9T4RteFNatGqzkzS4fCDEgaw",
  "key18": "5JjTHiC78koG3g1w3NFhPiPnR6mzDDcAKQS6ruYafCdLTQbknJoxFwu1C5JEfWGudmRLNdH65jCjJh4CLvMQeeHw",
  "key19": "2qN3Bxdqu64N9Ht7fRv8gxrySjtMzzPgAvVd4jdfPc5tVaMPixRfUX7ZWydDCWokH1o9997X71zWH46bodfsZrev",
  "key20": "nGnFjcSktavJxkVhjinpH1aB1uQJ14j2U8VPxchngP3sDhmwFpkhNfeQHt9kYLy56m2egz6igZj7g9ckU8ijRmG",
  "key21": "4xfnLo8uMPwiM35SzDNAdUKMmSKSkLLeNNE1qhPxnyfu5RGeoXFXoP47tXBkUKLhXsDGm36HAyWnMu7zSF3KTn9p",
  "key22": "ma8RBcFUakjXiNYhpVeHH2zzxfkGtbM6z3og6iVmMYJhqjeGczYcqvtuRGh9yQDDw8UACnz2EftiSCXeGPK43He",
  "key23": "5R1gq7w2FW65bTDgydfLVUtm5TdqQRN2u4ZpeQruWcQ4WBLQEqxu54PRUrGwk1sja1RumpDzS1nHkRxz97ADD2dB",
  "key24": "5nBPqehN2hqi74un4P5Nmd4qt1D46NMWo1QBYtsQ8fSZdpdcmApb83t2NZ4c5oZjwtHQTAEYmCpGHhBdzbu6FybJ",
  "key25": "3faseDGEKiYjYdJF7bvKHfhJ8Hw5nRzbkNjKSquMT2ZVKG3DeojevvAfmQ5AX1qronhUbDNGqU3iV1Q8F5HSvHQv",
  "key26": "V6guCL19Em1CZhqxakQj7EwKhcMeokvP6vkGZdUY87FE4zC1pK18ms7VYErg1acFWfXeF4ajVrQfKyTc7zsWGrP",
  "key27": "mN1qvpWTVJYCq9NKfnU51o2a6mjeXzg4FCHjC3BydeniK3PYEJxVb2uUrkPd8nyuZgkpUef2reAsZdhHcT4dFdW",
  "key28": "25H9aLatRkHXH8mcZEDJDTJe3RVuhkpnSmsoAg1bZo1ci1HeXDTgcJPpMM1Jj3aFVieWtxbvpR3huCpVPke6arEF",
  "key29": "45MPLcyXpq6nFmkyAaoEHvMs4DZzXWRUbKtm3E77NoEBoHLcJJUNo6KnGPpveKsWXgFdTJWbwFcGaPUuRrg8ohy6",
  "key30": "3e6vci9QhTFVfMyi9AfkUFxpFH9bprH1USfyzUns1vuCDLWzs2ZNQwoUL9kzQv77yaXvZwotzHWimHcxB2aBbkr8",
  "key31": "65n2qyi5VSYBg7wo7LPzk5FpQ4KBRkHCFJ1zb4PBxTNPAWoKQ3R3rcBR5MvvXxZgNYSnrZCGEQFHNJZ6JgnwBosE",
  "key32": "NxKdHV4ArdKtzzJFiCCJCwvTAcWRbD5AUCSorW4f48HhjHNvqrtoHasX7Lj6x5X2CVJoq3jMij9ZGXpqaGUxCnh",
  "key33": "2MMVsEGejdvxyx5CGD2XAAV5Vcz8V1qcHAGTxmuRxPvyW3f7iuMqbN7qvfhdLvMY2m2wFT14PeAFVoq7bDH3bYpV",
  "key34": "4VUcs11oKpk22ZFBXXAAEXuG2EdS9BWoBuiMvHSfwsturyrSC7kY67wenXAfJSddU3GUvwCbKXZNzZosuJG3aSYq",
  "key35": "3iXGMCpTb1aZfspekByUL8oxSxV1PnLiNpGtzfXdEF3NHkjgQ9qazSRvwfVgddK27z6p557bLAujH5ggiwYAVoan",
  "key36": "7Uh6ynXBCXNRGia193C4JSxoLHSt8vZMMrk13yoQJZmhqdrgxSqPAoyeYoR4SM563W8D5ZUc6MdsWqm6WxbmSVF",
  "key37": "3WyLMBmYAz1YB3c9q6QWorKy1EHH5MbU3FqDpodoquinRJy8KoU2dHWWv9kY4wtKAVdy1NP3WMjjmhKo9XJRqjzt",
  "key38": "4oiZNFEk5zDafe8pUHSVJG9vMpTiFr1cGKguv1sYpcjvANnxedjex78Suqd3TavYPRembFJ2xSA3Vp5EqvkAKbaE",
  "key39": "3nG64FwTARfEGCx3r7eD7RgfFANBS1CzKumXCyUNzA1md4Y3BugviAYv2buE3mkBse5fBJdU4FhHBYFdeZXZjqfF",
  "key40": "456Ar2XsXU826uCbfQibpVAzs9AjtBsCWgcEZGDDoRz3Zm3BNeQc2W8vJXpKgFgYiftrfjUtY4D9vjzi7F9ZXPNk",
  "key41": "yJjEqGrntVGWDBauLbd7EgsGtXP49wgHkXLyebhj4LGuWtBZgJohWyD3NeBbsv5vRG2Nu4yeLDCFQkeqdhob8V4",
  "key42": "trTFq13fARHpYxC7BdKtj1pT4oQoswRcyvXjF9yBuvwtLMU96EF2L4PXj1HmtBixMQYx3axhSYCEsbMc61SnMfN",
  "key43": "4JpnCGvaiNxPYds3sj1YqCW57EUYn9KzyG5m5wv77oKWjnJE9bMSGwBsp9hVG1PFbo68Wzp7C57a94KJNSZdxQpW",
  "key44": "3WmmTeVqZxDpU9eazNeHBqLoiDYkzn4ShZHVW1mAaYpN3ifQbvCYSfZLxeP1Fr3ABYXz4KF45rgpt4xtVcPE9c2o"
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
