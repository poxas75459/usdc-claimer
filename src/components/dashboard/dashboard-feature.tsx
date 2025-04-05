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
    "3iVmVGKU6fZCdGqzJ5QXqHBmbgRtq1EwHHGjD1tbMBUE6oPoDqypcr3M4yJhSrHjxoVhCLHgp41jTmPeZZ5CY2Gs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fGAhKe5U6eDuCrwkLywYDHZrt5XtvYYR6mTPx9sZYEppknQ6cobcwRSfYUrjZmheCNpKfi7QzGqDGj14J8ETKC7",
  "key1": "3fZd5dh6pZHDRcvVMhF6zGzymxLvKMnd64nrBtcVPmBodV4zV8VP35zw3CntumzVUo6Vh8ojRDX9VjkCprLow5vt",
  "key2": "EkFs99C6QKwszD1CZtxe9cjLRjSDbo9rM9ahJpM4HQzgyzERPepqEHXdtesAopTK9WvaYMzRjJEbgeRgsDLqQdr",
  "key3": "5rPbBqM7emBaiwjx3dhm9KQDBZQ6ymDhkzTRzkU46uhPF4fbkkECgkK7wnUdmL5FmVvkHMVPkomftYDvrAatUZAu",
  "key4": "5k2AhBXYRdB8DNHPe69Ni4ayi773aX3jRbjVFe3RAgcLPbMP6PNVT6CwnS9QSNze34KTvDjCWsafVeB9z1nkYJY8",
  "key5": "gyC7eJRfnPDgYXLHVVR71H8HuzETgMy1UafvaYTFr8uihkAaKkKGsmfXUdZXrULDxYArB7kdSNvdvMSavcJnqj4",
  "key6": "5pF2ENMEy1zEcSdZU6Ycj3GVC3ySv192bjTNN3hYDxuJGgSnUhqxTrAarf3tWPWsL5HwMRpCiJihKxE3eUDqEarg",
  "key7": "hvQUSHhBYgxhQ5eEZmugguoCPbe8o5mLd727Hg2JGp95cWQzrtM1ZnJGp4RLa1mTAemoCMPg86igfnZZNhPJ9mP",
  "key8": "3FJPHgj4WVxaoXicvyttNtxN8fYMASyaNuUAKBk57PPXZq7AK3x82VvMxS7mUan7QP68tii5PELW9HVMogpnbwLW",
  "key9": "MMmtfV2KDALKgahuhTowaLUj6HBsjm2yuceSBh9GahaJb6CupoY7EUemxbuoZrC8uuaG44Z2EVUhsWaPZjSDrmN",
  "key10": "zu1pESB1kC5agjXJNPmvtkvCEkagfYaRFSfqDLMudp3dZYSeKen12FqqKEe1RBJ3RSk82urad2Ch5ba1avQfjtS",
  "key11": "61a8EVjjQ6ifd22shHLriwE4pDWn76J3h14bcCccSPQoB95UQGGjcSiMnKQ1RdNHbKFpbjf8DefZgEY7XWGY5SGn",
  "key12": "4nreAHTh8PuHBJrfVCTwmL6ndQ2jcMcPnfu6hVVRMdmCom5ZwHbZSHa589tFQumAKEUNVDXzytRwpKwF4FxfZ7PC",
  "key13": "5QVSLPT2zJfrHWE4bHziWGSjJoiyjbAEYonRUPwzyFb1SQEUPu7Nb7V9kv5D6ARfp6vr3gCDpafQwQEG73mPJvMr",
  "key14": "4v8jW2E1xf2gnTi84qBWd4AwsgpcMAJMS9H8MJv1yyzryPpgcxS3aEPx24piH9GCAbnTG52TZvfvvqNqW7XhKFkH",
  "key15": "5iLCxUYMkW9nrcHCWigwomnhCZUfDApLyfaa6BFr2NSsEuKLnACTSZdx9BLh77cjXemuvv3vCJeGncSXqraV3mMz",
  "key16": "guo14xXZiJHK8v4QW3fAD4uAGLJoYjSs1ZW7aGcVmPhLSvCee1pkPLNJfLuAiEz1mnaH3aTmyMwAn12QYY5NDT5",
  "key17": "5BFPfZWJxqnmd21eUgbE8WaJ1rg3Hm8mA64d5XxaM6Ghimerqz6M9YJGcysAELg83sVybqJnTnSToda2ytvCCW4Q",
  "key18": "NBzmb4QYb6TDPPVns3auxqPhAukxuLV8BNuZzju3NWNx1okUAAXnLeRXxpkZjysvHHZKqKQS55i2iPtWxGTPpw5",
  "key19": "2qaHubqJFR3EWQiWqiJTLJFkiv2n244yGsBcWzf3mV8P9jPaDa1TKmvL4GapU9hyDfEGoNpirpAzjmyPsq2brYtk",
  "key20": "5TFSiNN75bFmZeEUb6RyQRcksu1KMThVv2G5Wy4J6aUXtNmr9YBT8aiXTsRYGFZkSiMmXQ7k5wHbkk78tunb8k7w",
  "key21": "3YNqAYMK16opJcFpzYNPVRuzGCe1kvYLJ2FsZvn57VL8qzuC8uF41wV7AQDGGsLw4GFK3SPcYGgFpgz3mi1fX1ZY",
  "key22": "2MPjnuP4hvnJTJkdKDb7B18CKu23RZEFBPGe6q4XewMb2ocjiaPV824dq1NvXqqvxGfcBnKekiyWK5AiT95tGUWf",
  "key23": "2JWDtFhmoQRC5Vvs5poycixWykUSMSczU8EPQiBAFRiTrtYb6451fA3Tyxa6YgVmGAhKxmSxcPSNBCvTkVb7L22Z",
  "key24": "2EEsqofJashxnFjndSwPCdWGqmEXMaFpM9Kx7UWfgyFz8eyomLzURjiJEujnRC7f5Fzkcj2qoV3EBegazTSSaigF",
  "key25": "31b2QqBC9U3ZYopgDmecbZdLv7YNx1BAxddqXdsdZK3Pr8Rzefpa2Usj1w8uGKchTReyCpAxiWvqbY4Dvd74g8Qp",
  "key26": "2wKZWwPq4vitHGapL7Z4wZLG8MtKp2HseCuS75sfkPGsjED3uLvmdEFi3jtp6125MmsgRkuboGxKDsGf2bwV366T",
  "key27": "Z8RDczd7nffzGUTN2LaR8XYKXDp2EdfrYtmq1pwPjxjuMgFXAH49eLZyrfXcWFkR2xuPQ47rcdLtpiGtz3LPWYT",
  "key28": "RGxtvPVvTHcJy1CCVrpWpWeg6oboMr74EhCrsUog5xqneiVc5UgdHLd7NtsiPHLvDez45jZHoGmcFw7hQDEDE3m",
  "key29": "48vKGwRdv3rfZmSJHrRqJHjDMKkFo3mFNzPtcYXLpLYedjs6bfbYUWDEGEQ192tgAzgiXEdy6QTgSM4S1pzdj9LL",
  "key30": "5mPXVdQdEf5ZQnBqPkXM6RjkJKJdikeDuJPBzDgN5He2zdHYgbycDWK4HUGF91ba49DU8FZLaNJ9YgsTyM1yUBrN",
  "key31": "4wyuyEapFTfV3kkvdXJ6r9AMhKzRnGkNkFXqGWQiyWCnVhX8wAe3L6me7REqErmcKkVVv6zNp6xTHTiR53mvCfgT",
  "key32": "vURFaXQnGxUkJR2d4vnF1mwjS4rz5egiEgh6NyFbJmeYEqMoDwMt9MovvY3NfZARy2HWHHCAYxKHS6Q9xY1q3ZK",
  "key33": "6KZWy9cek2sqzoKuyT3PJhJvW7KfP6o3uJcMp57vDhU4pa5VQwnE76wvgoRZQX2SKNZuCNednRZLX8mUX4uq39k",
  "key34": "4ohvjWPZQsyZWtQXG5wHUBH4TsytbPBpm5dGLNrZMbjzr7kTC2JLsxP1CoX8XdKD5cZLJhuzxzja5yPhEuoKYAP2",
  "key35": "2ME32NhEK1YBNDXToiJ93f2WXinm56zcQ4KX5uvUPvaCGuwU1yixrfSyYmFLhraXRx7QPZCHPY6zauh3GsarreVM",
  "key36": "2zbBPYvHfq1TTtcWiLmRRHiLHDxyALZXEjgJ3GWJNAgM3XdQDDJnby1tpLXcQkdUeHrGSk7iWdwohcjWNzmgUkJD",
  "key37": "3PTGwKeYLzFHAm1x8mHjZyEErQB4usVsF1LLREyVbQsXKFmQV5gZ5rDK13u2KoEbRuFTy7uJ7YBQg4AnXjTwd5AN",
  "key38": "5w86LFNEt7HmRh49VoZmZqHWjBh6qNrHKo45zrjgRZceAN6xG9hFG4nmSNtkPt8Wr2JDRvt7F92NoWCuxwcZSUMU",
  "key39": "3yZWjdx5769iH3KX63FuDD2ThLvSsje4GeCC9yx9DeLDZPr6DdnaNV8ZaVi8UsEMHwS36Hx8TvSvFTPogZYkDK28"
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
