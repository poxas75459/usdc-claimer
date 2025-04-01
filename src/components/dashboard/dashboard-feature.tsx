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
    "31zRm4ywkBcV6aVsZiYzhwjSyfE2g73anbB8swBTZHP8WJYy8JwfJqEshNfpfmu75247F23nQ6D6Hr8XpCGUE3wq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DnsRzJFdLptQ4nfHZBQ1iAuqsr3mP8myKw2d3Ec1pG4a8kPpX7QxjgEsY1ueomUnerARYY4Tc4tdLhEEehGF7tp",
  "key1": "io3nXeW3ijKewHcKtq92FUZvrizCKZymyst2q5R64g3dZwspYVux2ThhX71qA5RDzovEhhFXP7JG3tRtJDo8rhw",
  "key2": "5mhmCCv6DS8JoHwBvidNPDvzF1nQJhvsnxQAsY1whXQg3zuLK7YhYRPadbZNV9pRhrqr2TKySgmYj4FESL6DkcSP",
  "key3": "3HwgV1QDeAschmMGdVjysfVym4jJiMCe3Dd7gGUsKpjMTxjNLr5aGDVT3taCMqArYynUkkEczCS2GyBP7zCpgnhF",
  "key4": "2mthSgVZrm1csM8DcJxuqbaS8B1MCwPdGKRh4GqfA6JKZ7K4WE5TsKdRfL5tpBExCzUXaK7ZvUwsp14csAnPtzPU",
  "key5": "2PUC3YJo4f7aNvVfkWgk4c5655JxhbcNwSvfNx8VDYg97oZ2z3Jf7AtpmFaYPgx8bHDpJJxHwa7dx1dSGCT5ZrG8",
  "key6": "3pemwKm2XPGw7CVC8Neyv6sSCwkrHB8AcQmDuUWsi92enaRRCEbj4qSGSiJLALuQQ9xZvQRPXcPs8kT5FQViwWe9",
  "key7": "4UeWVzDBGCYQ9QLLhuouJA6VzhtjzPf562WJCmxANQzS9F7sLrXotAqBjEjbp8fYSpHRmiofVNvBPjCMoj5X5FA9",
  "key8": "2SPx4YuAtffWeb1GaAJieMeLVwhr34zNjknQmC5Gtnb16wiebjHQyy9yUo4GeSrET9vZVXoqQe5akZB8pfb1DxGN",
  "key9": "2HjhEh1F6oyK73DR3Sb3eLLbs9ydPMVRKow6HPBggENyncyq1hUzYqPH9V1Z1tScMCe874Ktv5cikKuXumghgjwj",
  "key10": "4zicLYNzj9rd4dqCkRiqmDwygRsWxJPqphDLjPTvZTFBRDxDaAh3EoNWtjtp25B22YmL11qFJeLKTPxsDkP4K2Uc",
  "key11": "5zWS6DihRTTD7bCYWHDNBweoM5zsyj57JX38nNsMLbAkCAkgaHs22fyrPuNGt7zNuhDEnQx6tXN5UyffwG32v2ZQ",
  "key12": "2gZUWmDmePpa2DLbs4Wcpjcoc3N8dutbWHrojRgxvvdqx4nCnbkg3K41qA7TsuMxyti24AZyYE9brmH7CbHpZe4K",
  "key13": "3zDS4ktD3YQ1g5u52YRusYyjmWKqkdyU4RSpTfcsmQXLbaDekXVz6ftaox6ouEPKeWQXdPR4LzmEnjiFmRbG1J1t",
  "key14": "2wxCq3zmExKHqLkPxQum1uo7wxudBBMssSwZsiNt9jh8R6FTQmUVGCYhtXu6GpzPkSFvFDfhyYUPSYHvYsBeucCc",
  "key15": "4N7UZeR4pTd3rwVJjBqELJ1gceDtAXRMPezwo6doAEXBWfpZqHD7eGEAzhT6gNuK26fnQXUjVAsZTkcCSxjMXa6P",
  "key16": "NWb6EjrkZ5PvxQ2fMQewwYdWzvTYoyxje5yVasavwU6cPpQfuvKSGRsD34S5URd69cRjFivsB5WsTAqxSLRqEr5",
  "key17": "24e1tUxsxEkJ3jsiq3aSFyhqwLNRVxNFareNGwh9ufPkRJU5S4tvTtwPZY43JYQNJhHGnsiJvjuESUzoSbZazZp8",
  "key18": "2JB1h91WhomuDCdxSdQsgyZwD1idjtq3Ci1sSuLjLCY74NQvUhrZUr4GtRYc3yGEy97bVFE9XmrW73qKxE5EKVyr",
  "key19": "3q7kUhXRZLVqunMmXq64UqvkSdvmMc2kZg72XJKcioheTPYa5AEDEcRRGvYDntiwLvD4vQgnQxXz9vUgZJuTvckA",
  "key20": "4VXHnGJd4iSENCocN6CQhGQjTX7gSR2WvRgtuNQnKxPexv3Q7rjZ8oyNVJzFMmTJfyjKk6W663oZZSiyUjUeMVnP",
  "key21": "2ZM4Dudd9nksHTX5n5A29DFLsKeGFAWQcM2sBM4nAKDJhMJP8abpWmNCVzLCCefiXW4DZkB2gMbbpSsYSzuhWVwT",
  "key22": "4DoeD18uLsWSaM7mttKCKD41WQ33x9sB1m1GR8NupEPbHmTZJbrA7Dsh85ngUeRSm7QQ9LptBjh7SCDaKjr3wBTH",
  "key23": "51dzgGBoH3WXfbCiLa6zDeLWdPFgxCXhTb2iFFh6EW1KMJ5mrjAU7r5k1EL1LUucoe7BDJvvpAnPcHRGQWJhjdJW",
  "key24": "5hTGHw6QfzJi6R36BXuQ9YJQYSzX2ydfz5isJVw1JQ95mS6ofyeGWkNb6wSDKkZmecJaUCLEf4EZmEJ99B7hE8ao",
  "key25": "4wzGGT9tXSp1WUm8Brooq431GW4cobvMBzUDqGcK8KEttAf7RRhNCuWgvqbhdHYs37mJ75ib8odMxahYh3tofmvM",
  "key26": "cKqo5VQpkd9oyocXuZ1ppSHRhwCoGUkXt6vVfytyZW1kJwLaNvx9wXUmi2kh9SZN65A9CiDGjt2XPskk9faeQEz",
  "key27": "4FnPuxan7kUcQkL1fHaQwkxNoqwjHrwpu3ULocWgPKD74KCpHXq5tyXu6QmqmWqwaSxjoPxfvMcfpYJEgNwrc2BJ",
  "key28": "2U8gh2mp1thVxDg2BWFM2B2duT9WgEteJ7TtZ3suRvRQY4odegoYsDvFmVFqMeR548SnMsW2A9kwS7cu8y4wtsdr",
  "key29": "4dna6E8iDRpSB4e7f28Kip4Sqs1h5ByRZYrnYz499spBVhwdPortQWGRSk92UDmytY1YbfaQr2q3Z745veKv6Z4S",
  "key30": "5qRc3ACXQDy1odLAXuTyA5jVcgymG8iv1LCLNFTA8JEwQQPWAaHBGARfjDBSVsEi87oswVwYpWhW2oR8yCfHHwLR",
  "key31": "26Gz2nyjhXsfWysgLKTjcmvsorFev3BmN1CCY2x8av7fwhUXZQuPh5jBNMkk9WGw37cJmXUVEyZAQV6yCVbQRUpa",
  "key32": "5xbHeGLtSj79qNuwBRpPfrNNXjqqgFZaaGMT5LjTqL7bGBwtED85Y6N9UwXLxNxjJyPg6ZHs6Btg86U9wbwCxr25",
  "key33": "5wvYVD4YWPsdFKfAKSuCmZLkL6bszgHvLre77aAmf4zN92SuUdKzcb4VjJE7di7QFfj3jzAGUiyjrtiTBSfg4bRT",
  "key34": "4182SgfBAMbhcZTN4P5ojwRBL66C3ZXMXzrLfLB2UHQF38LMLqEU76qFymrK4ce8jQjLMUavoZihZmW9H6QGpXBW",
  "key35": "623WQfh8UeVTyqg7fWtoPh8e963RdGUbKeqvmvd3EpJQuXuvk3WKwu3oCd5XAxTRq3UvjTVKshf6vo6X476QioFK",
  "key36": "3BazfJyemhuYLeP12QwmBcS47HiZhNJHnzvDVCiXi157Pnc2Zp33rWbeP7BffjpsgfPXUNnj6RF4uAmaxaoZckh2",
  "key37": "3ZVX1mdrsv3j6c8LVetQeh3duNj79NF9GhnR9jxKpDS7f5veXhARkG8puE8EVa1h1yb9xuPiJ41r5h5V2BCxbi8y",
  "key38": "51TnqdgCte57pbjHA6hnDTMkCE6sc4kPeWCAKuAEnra6VfmrdxyEtRv5i6ScNhf9HbkDGyh2eGHqfyQpkQcaNJaF",
  "key39": "4QiJdugMPBn5bPThVRJS3k6Q47tmob27gM7sBK9Wn8HvKVRAqaCWTGFZgWXVmzucd1cAEUbZ3NcAEEvB7CLpYYFm",
  "key40": "NRp69KM4uT33cvs3zBJd6ZkJSkwLx4k7ZzGo6W7pmzabfiQagLy1BedbikbFLpQe9GAuw7K2cj263w9jfcNcWKg",
  "key41": "ARy7LnDyfpjMUP5shPzbqQAhUEvazJf6dkhQdDTHJfxrhmx8BRXDxTCvqBx5sgavuEqbhKge9ioQYw8thx8fS6u",
  "key42": "5uTUwJCqEZCCgSDPMcuGmRHvbztfUsxsFzUiXfCGnoEFbN82266neiNrqSdMjaMLJEpriJ9Fv6kNhjVCQKq3XrLW",
  "key43": "3fZrHDv1U4Fn4whFH235Lc86YNZ9xYPGrv23X94tTu2jgRiJ6DgwibpC5p1s7DgTzjYBxyG2E73cte42gaMsTUBw",
  "key44": "3XGqDhzVCm9BYCcf7eY1bBf7pmgFmcvaodzxbHGZ8Yq3TC3NaxBa3raTb86XM6FPwzPLzCLCMBo8W7oYnMiF6EVw",
  "key45": "3PsnLFje5MZfAsuQegTZwZXA1uw7PE5aNmwgPHX8TFsN9MNg6wXGQymnBvfW4ZTQ74m26ud43PjmpMcq5freiPMn"
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
