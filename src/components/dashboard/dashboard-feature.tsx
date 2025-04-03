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
    "3RnzmkgyMRZvVR2dKWDrp6grsV8Ae7PoPutmErZg3BVpo4GbSZVTovLtZfrGEWd6AAFd4RDF1qYBiycRb68CZVDN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V22FfA48yfe1jQueubZp5y19QdPwbgoNN4VwdEpeEY8ukKAeuiLVbyvYJyKk8aQ6B2TJvLNXCNVp1BSi3mZsxD3",
  "key1": "FvjzZVTypH26UyY6kVxRf5UiqB3cjAWZ1o6CVBxfd5tEyyyC5dV1bp56hQMaKY9pq9jGu2nySymaLVE7vUUh19y",
  "key2": "5NfWXTqhH9v9m4AtE7QBTevbHgmezWWBkYrUAHVHVQsuvm5o6tMtqJrfgWgz3y39qZV67TsFimNo1yWTcgVH2nvM",
  "key3": "2W32Uc9vxswses1Xu28m6oCDKPMP8Z9kBX4jS3ATRrer7A7ZhiwGqFEVXHJUFDCHW9XBgckv9YUFNRnC69opCyFZ",
  "key4": "3eEdgh7QYmGQAt68psxzEcLWcF4LeRpnkC6xRe49t8yHuxKjQTU99XTjhiLBCJo82F6WVsSzTSsgiaopYCPBrYE9",
  "key5": "PEeBnFY45CQJcMJ5BnMAoErwLZW6jFjpQo5DHsBfmAWt2PvLEmkzzqJfeD7TiP4Fifgz1ScNXT8XbvDVTV39udq",
  "key6": "3GvEqdohTjdNcjupoy96d1mfEw7ejXPwxJgB63EyYB7D4e3cAZauwrUvBBp9Ls43SkgrKtDFgZiU5qyb6X77rj3E",
  "key7": "5QZ3NP1eX3jaa11vtDtMczkxCAjo4s1NvZVuLvkYoQGimUyFCtVDjPa9qrCN3cu6FgZ2ctr7eEPz1exMBj4jHojv",
  "key8": "3KySVb7JvXyNdPoBfCMZCPDsvh2y5jRf34x8Ck1Yd1zP3VtrskY3gMGzzb44Yjsoh9WTv2z5XnbzGMfzK2GqUYVv",
  "key9": "3uX9kLWFqiG94atSq4aoaNrmyTXfyZ8dmt59PQCyFhZ4tJbBJHDY5jbgt84VoGPCy9mbamPt29iLoDDr426PcK6E",
  "key10": "tXJpywbNCfYPu53KyGY9U6fRkr1wffs9VrMJZMhzXtPjZbPmDNsJanzNCU9XKQiaZc88UwsCRebuHNrtPbddqyG",
  "key11": "5s838iQF4ZuZsFhWtpFASEsw63xAB1tDZByEnCKeAh7wKM4sKxGoynFoLexEfUDJRzH2MfbPEQatxcZewc9qX2x4",
  "key12": "tjcMzufKRmhhS5mdX4Uz55KoGUcZqEuZG4X6AEX2STiBWxTYasJpmDAqhReXBkXcddgVeo41PkhoBExmb27KX1J",
  "key13": "2HiK5t49vGqvfw7XkfFEHiYHmhezWpsUX1Z3Xd7ANkTuRS7ebjAJK64BwcSqbnVr5kLsdgfAjwQ5FsWicusjCb8j",
  "key14": "333EttfTsPmQatXREfdUpfeFEscUx1M32r1tgZVBVStzdEK4fbj5M3X9WZo2aotosJ6ZqSLpvJXidpeXPtH3mqKL",
  "key15": "4JqZnKXDCH9r2w2Z24MqyZr3ScMipEQ5CmaKTLkHuZmjDFQHBsS1iMEFLbwZNJdcyyq61qUAzabgkMqUcPuqQS7K",
  "key16": "3MzMytXi2w9wYTLBAN9ND7qZ4idmRMgU7NYURwL8VQ1tMhzp5SjQYUvYX22mwiCm1L45rcVuRBGKYhD3n4n18wtL",
  "key17": "2PRSSJCfvZceQZoXjbgmoXWDRoW5xJFLb4x77h3hvNHD3DvHbtmLySgBJKpmhGW1ZXQuCAv7uSh2G7UepjdifRTi",
  "key18": "hWwdkfSqzo8jKKHhsVZsi2kDxXcJoXWmpCPUZU2g2VM6xw9TBUbE5LNmje85rzDePfJ7NJe9U7iZirKduzRTtcv",
  "key19": "2hC1jHgZ3atmoAHZAMHPNXnf43oDvPdA3fcrmfzeigQwFYHrjqgLG6yvFAfvx6gHhSKuZGWC6e4frxpzkZap8CZV",
  "key20": "4Ps1f1opsZDmhvFXVftnyUhEG9FvbNxQxBFRYSfDsEcLCMwnRhDpk5T1ZVgUiXthEtxEx7LCRH13dBtFpq4LnF4t",
  "key21": "5nSuGNN9Fkbz3AmZhp3C387E9Es6BQiDDa69KZ9umz7AgkQoWzua2SM5pi1UKFbMj5Ftq8wQR85RbNRwt3fvgmFE",
  "key22": "5uXRFFXRW2fr7xxdHiGYEx5aNBEda1gAQzZ6EQxYcLByfBg1KSkCo8UfZmyfj16qt3CS6Z2JEizFm5zXGsLcwxxz",
  "key23": "3VKGsXXTzrnkCTjBZeU5188uFfkG99L5Q2PVaYg4VKFEy25kBo9FC7fHyEhhrogZqacF3sbqMTM8FrEVbeUzUv8S",
  "key24": "pW9E4HuPMqNm2NgusrHu7buzj9Px26B1x718vfnNDahDrLkefcwo2vEmxbkj8vzUqYnSAMUo41WdPVP3zXnj6eK",
  "key25": "3JNQLZuNjtUfLLHPwsRYWbhFPLKxiMDH4SX2KjtgPimzr35eLtsiGYdeyWkWv1ooZwk7z9LXbwZS22KGtbTSX4Ri",
  "key26": "x563QD45whwmumdeP7nxTygQffB6FeNvbarfCSeuv3dFateSoGEftHpdD1Qr9HcJbj5CAHKunb4hhrzAYnsN7Y1",
  "key27": "571M5qnkHkwZjS3vbT6NjHzagWwKMvTSjCNDpThXyT9TKMSg2Do8Q6mSJf1yabgimZUDNW81uhkupRiZM3Tu9AMa",
  "key28": "4bpAjeyKKkDU3YYPjxf9ArbJsbgZ3L91U6xZHLDuvfCzT8BLBXLTydLKxWU5iu5uk8FmzeZtG1ys67oQofC3pXsA",
  "key29": "3dGtgWn4Dr2qzZ7UqoCdrBsCWeGvjprq77erj1BvFkE5TXjxLQxkPrDXiWwKrnHyhHLbihqMjVNSgwQ6iLZ5KfNj",
  "key30": "4EqAojEKdQFxYD9zQCr4h8t256WvMBMKYn2YKhBBbjHQiswAEAA3k3hbPG8WtgZJWa36Y4Rvbx8iFaWhiJDSTqjA",
  "key31": "4TcQTij2rsMZV8JPZZiEYecNSxC6hiTSrn5G4SLDaSwC3cxLvCPoSncTmcfzUkzPkXqKXtvUXJJC3nX47DAxdBNC",
  "key32": "L16ERTRRqgnckQsnQd1Psxe6QHHZnzv43vb4D9gPvmdKRGLpqA13HaiXjkDpiY9a4zU2iVwKRaBKFaqcuPjcJbG",
  "key33": "57kZQoB7haf3mbS52tn8PnPnqyGEUb4ZgWzNXSohJXxMYdnih4VPaDXoaH1q8tP3fr7tojqU8V6QXjRwwQdndHxV",
  "key34": "2P2KjgNwxVFsRh13yyAwH4sJWmB1hbLLR17tYrXMbx2y9DFBWce9xbDYwNkrwssTTP7qDA8PJrzGg9ykJn8n5c1K",
  "key35": "3jAv1se287f5w732pPLAkqy6cmK3zsnqNGL4CWdk3qo32KxyWAX7PZfv5uTr7cb3Q7Nsn8NvwEJmJXjgJVNzeqZh",
  "key36": "3tnzWdQ9HmNx1VU7omLr8CLjrsBGM56nYtWn841VAmJYZi38XZvmXyWeAtShemj77rrbucijnV7KbKtC3Hamk8Wt",
  "key37": "3Ke2EdbUUkFgd6sVq41PYiG7WWCgu4Zkw7YCS8fQjPbQAjQVe9g6Kok2D15axLhVd8b7Xv9nhkthC6wmN4j3p6rY",
  "key38": "2AdKpFUwzUH7jQ1xHZM3pZYrFMufmZGPZFsvnfko8PPDHdB84aTPYmtBAugnYKGyWxf3x1pcgF1gM1EvGuALjBV4",
  "key39": "25w3JLJkFGDURF3JEeYK8ZPDaXbgMs5wcbv1kCFnQLd6FNgWtaNKcethTbbmTKz3NnRKg18um88Gz9GViQ4qm6Mv"
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
