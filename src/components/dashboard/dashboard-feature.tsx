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
    "3YQTiu6Q9DxSAgiyWYEBqpcJofAgHLx1DwAfwBDVQchmPWxK21nGPWbgtihwUG7vPJwUW42NdTUPXvneuirWmW3p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wcg4j6UDp3KQmX4hHbZMtNfbbsK5RN7hHNWmG4J6hTPiDjfrgKyoiyPcMLn1jBiK74inp753ZU1fhsUy2yKEq6u",
  "key1": "2QibUZm3VuywHV89w5Fnxzp9FRTpmZ5AYQcYRjdKwExJGKnNSUbVu1ghqBRtQeepgAhWJdzffP1ttBDkXs3pkYdq",
  "key2": "2CcN2C19KXApu3CgsbzvmXrEcV2J8HUJUncvNHPRS4HHJMTcgCWxX6cH3pWEJGWkTLUKgJPh9eMJ3HhBdXCiKUUD",
  "key3": "5VGjwZBbToRj7YqtaZ6ECRmXKitYW687NP7xN1KHNLsUomm72wcvLZB791nG2CpAorLHRWSTxxq4qi3Rc625zjGz",
  "key4": "62fMiJr9DddepFtKK97vthuTfRgSPBJ9FXVYq3wg1L3cBA5KDJSGJezuwfcLno38W2aiampe4KB9qtwpfp3KLcqG",
  "key5": "4VtMJNWFamAPQ6kpoe7rGnKAmHhXokA4LG1XdUJDXYoSaUs6DaG9eLVUJRaXY2hvSYziUVB2kXxJopRPXd95k8B6",
  "key6": "44FwbF3trR8kdL8GfAEomsupzK95Spj1FjRwo4gBHWG35kxpVgFodAyakr8eDqVpf8HD6s4Bx41vSoTYscfT4MK6",
  "key7": "Spm6UyKydm3TZzwTKayoazQndJb1Bf6KpmhvWCCj7iUV64xAYjnfsb195BLsonmbYnLSpQrT2QQ2ZxW7DvoPpsM",
  "key8": "5AotJ2wXssdwzw7qp1APDKWoA6hP6YFreQs49ArBYKonYLgy9t9wWCDihqF5fDZe8nZ85WYjyu4ND85gMDH5PuP2",
  "key9": "4qq8QdCm3MEUrHwXXesZA1qSRMC3s7p7nQ4M5Yi9MMFvWwGFknyceNxGA2wqkJLrEt8rgnu2UmSKh551yCy1wuXv",
  "key10": "5XtgQHKJLv7nfdJdVDSMKaRgymAbpPyuaTggxdEiBKuMr2ixxgGVvSVtZAHYByqF3CKf775reV49tVbBbzGZZWGu",
  "key11": "2ujVJ4xqGNsfwUVuBBRV3Spx4E91peMSidYexzPB8QUZoqv9WK8jGFbxXBQYWByjgQEW5kszMsvk7C1f2QXw5tqj",
  "key12": "29pu8K2FbYnYAfsZ1aZ343ta8Q4t6So5oSBPgiRXCU1n2eWUcJcjFDrkRvoVTaZWFSsvkHvrH163RY3ohYerr1VF",
  "key13": "hD543N62cTAPNKZCnA4hhDELVsVr1jQvUv4jJ5HKdBAqXAkVYE3czwnRfpwQaSWLPUefaC9fFKroQssHvnu8mNv",
  "key14": "5E5gEGUeE7iFkkUukiryu3GhajocLsMVGsfSYi7rrf4De4vhPzVmrPP9Z7xFcViBQS4hL5nGjKTi9B41UTtnquSy",
  "key15": "29SVKpzK8LMuCPVWAWpjxhLJcZMP32kWza3bvcFC33omfgr9fxcbMxzVrrARWRECnFG96JuFxjbnTcPcueDqZsCH",
  "key16": "5vR6ggvLXUJ9ASq8gDVGTDy3q9zDMqLK1z9HNMzxSGJ3LPxQZHnUDyLhdFpnQ9yGhCg9KRRSqJa9V7cvABnnfzqp",
  "key17": "WxHb9ZuSAhY98szZByggxPDXVQtVvxrXeAqi7MnMMZjFFKNRrMjMZMPnTgDuRrRSR5QTeLtoh6deEqiWDzrvWiy",
  "key18": "55o6thAEk1dh7J8sotR8TXVQvXmFBGzBXbMcPbLh4NCZJiXuhnstcxd7usbTBZ6YHmfn7JaFncKeGSmSR5f5BiBb",
  "key19": "5LfjpBnixPnNrs596vvUbZjHDAigxbxCNJsmVxtzHEsz6t9a1ddYHLc6H8EUNtE1PrAArH7tdQf2hnBVJcrckQJG",
  "key20": "4AaWG4v1xhroXo4nVub7n7PqQYky61a9o2QDzubLZs6zRW1tqq2a1NfeDV7oJMLS3G2yoNya6NZpy3GdrFBHuCTR",
  "key21": "4WJi2kdzEdcPpBzqNQJE2coDnb1nPcdxmjeLQtspERuKrgmxMoQYpgLQVXGDL9Ntcntj6Y4z3yPdFrM7W762Wg6Y",
  "key22": "2puESzjkTJ2dVJQa6H1qQLqA9TpGigxuRA55csczubJNt3TXij61i8vtLc1WzzXNEbQ8Tj8RfpkZGudojhS7Bofj",
  "key23": "4bLAuTepHVyHFdpvtoJdzHtM9B4M6eEHTUdBzyYg1Su6NjKZSyqh3SL9a6jZkWfjXFUKXxQWQeNfggiw89mgf7iP",
  "key24": "2T5TY8TcoEqfbvT6Kkhf625fy3EPqEqiBa7zWS6WxD3kBcDhKHNwDQA5H412fr6m72cVaVkbBRfKWqJN11dqy9Lq",
  "key25": "4Ukwp64vced9WV8J1ZQ7u7ZjTCMc5hnH9mqdrWeZJaMdWswBwWonzg2tTkQkRs87r7jy2ZRNFHL4ym1UMVA8CPfy",
  "key26": "3MBLAFvQvSf2Fti6xN8yZPwaQU2Lb8yJpYFwq59QhUe38FneWVTzHoCgdNzQDAAjBDnYYspFJHRrtxjENpJbCJQ1",
  "key27": "ANSA4SmXd7V1oJFe4QkZQbatitZVk3Xn7sckPpY875AoykFmo2NfRG8Yq5ke6HRUDyZEjYA1Qnj6aqwvrHup4KD",
  "key28": "2MPDCHEMSC3xynkKxFAWihFKP4znVCmiAX7PRmXpucXZjyhg22oKxEtsB4KaWJTMC3SBJQXpgQg7yCDJbvMbnk2j",
  "key29": "CWG98iNxkqQPwRbA7d4qYrqA3V6KAXFQ6Q1grkUCE35BgEcWgt7se8wYwpruFfvQoBD91vf7HTigDkk3s5z8kgY",
  "key30": "63FDAMF8vkXedgua31XVCoMs666j1KJ8Eetpvvs22DTstkwjvNh8WsJsoXL4thXKvvibUFWo5MSXSxxZk6aeqJmk",
  "key31": "2AdwSGYFSNDoRHWVsL5Qc5ukviuUZ3ZW1E2YF9D9iHqwz9PvLEuhkTxpy1eRJ1Aqcy8R76y3qookTkvKg69RcYNq",
  "key32": "34XxjAyAX97K4XKHkmdwyyziF7gT5LEHRYyG4wnSAdsaVVXFXyMeBrGzFuh3NnL3cEKJUQ1FtoPJaJqu9SfG7VDC",
  "key33": "3PzMNcQQD7wpmgLxpTJvvNAgXBUg4ktEBh1SNKhxKmtSS1yywWpjvfC2gkRd6qGDuSwXoMt2GX1pHkPXej4fHjQq",
  "key34": "3WK1GvxTKBsL6ubuD3r4bjkYef3eAMnhRLWcRsBforPYMLK2b3pXgY2vwQdaBG93iJBkQCfcHsTMKJNF9rVuKYqT",
  "key35": "4iQkPAFAML9Ye2wfuLaYLT2TUECydANtPwSBBje5yQZw5Gq2xDaA2ZPrHXE4qNAtFZoCJALNTRqkZwLwCMKVg3rq",
  "key36": "5Ttejpsz5pdPFQZAp3UakamUL4d7uiRwZbLfJzArMh4ZLqvarKk2wfAQ3oYkeP2ViPvnBxCppc5UhEZ6ctCWNZfK",
  "key37": "4pd49bRnGN9E9LixtTuDN2CLtk75rAk7f8c1xHFcfjdqv4aZpEMaFWt27z1qLv2ZR2xQS9KfYSvM7XeYpq96zf7F",
  "key38": "5KNAQca2ZgFiVqQ7UxxcKZSp4YkrScoqy8eNusuhStXLxtMGQVtmLL7GUUSPzVXYk1hze38mcy9UxAEwkZzPPBKW",
  "key39": "4KJoZuHmvt9m4gmMDrtHVWycfPWzjiyyd5xyopRatri5QA5NfEqu2WvM68PLujgpcjMy5gY2psSaF1BtLTB7GVGu",
  "key40": "2qwJMpkUwLa67e9S4JQkZCjCBpcFFi6aUwgcAF4VCaU6yx7SGwRMErMYPrv5HQiTx1Jb9Ai7M8Ea2PevirnLeVDB",
  "key41": "3zodiDxRcr6xUDt8oF2kwPvKGmmiv2WceEnnzgYbHzymzTfDkFg36C4aM7coKDRYgJy7LrF6HPSLoNT2W25oS6Qb",
  "key42": "2yb17nh69zzK49ZuZ8f8KxgTFH3nWpn6dYoLF7jK1Z9kWNQ8ErJY37B95feLL9ZduowkapismSFpkRQPgaxb9k9y",
  "key43": "3BK2rGrjPNn5qfYTsAQ4yNdWn8qQPnPmUgfpXcqd5r4Pn38VxekrvXdZh6YKECzC33nmf68V7dCnYqg11a6hvgr5",
  "key44": "3f5yQRbnc7QSEy4SrdWMaiyFxqErXmJHEk6xXPb6qx7BSwjqq4GCQZLNDgLSgRNBvnqeWvHwaHDLH6tSotGWwCt7",
  "key45": "5FfeHK7AfcvXuWeot8N2n3UZjTPNqYBd5GcpiGEsL3YN9AutchjY6BmPVh2BiMvqFaMXvd32LpeU1ZTnoiwoYe5L"
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
