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
    "4KcEjnETGz9sqfGgPvGACw2PSFc2ViqxGB1WXyBuHbkJmHAxw6s7EW9zTRdCdLLCTw6eUsWoQwEH7c2tnEH7rnH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61TUtANaaW3K7QyTbkKVeKTDvoFL4fULPaftGYnenFvmGmckKx2KYbhM3uhEmajHfhg8NH1J2s158Le3Nni89cWM",
  "key1": "5rUSocdx7D3u5QsGY1KprezHynFktRJifGwX63fzmpupTFCbz3rAd9ebc4rGdbSnDyLgKHKVR2SWSzLkr45dR9rz",
  "key2": "ceW4ahCwTG1VT8SKmGWPSfYPStoLgYitsxS5FJ66D5H6gq2p9wUAGs8eDrDghMjCE4PmRHNYYoMJ7ZNZWn42BFL",
  "key3": "3i61Y8t7keK7LdRJFVowVao4oKHuSW8HsYbBYvTW6cWEEe5ZQCQ8E2KBry1Kx58PxneLsNQ2CLjv6AqEL8wBH27b",
  "key4": "5yN8UFVK9H1R1ZpFLAsBTKLgjkx3DfaCmnjNXDBp7ctZ3hiBcwM6LfWdWuttTXpYhZ6wMyT6PZjkbTMj6nMDKHYa",
  "key5": "2xBS5KTqaxpDHjCRY7nULGMLJbsTBgCfnSyFQ2eV4RoN6RpceR37CsLhUxFct4tWpYn75mr4WXHX1jfwJFiins4x",
  "key6": "4jgTcx4CnFHz3mtQSWATvGDcpRF3XfDhjNqhgd2zRicAZirD9UuvTv7uqsz45giT9Kujq6ihnPF7GmP4TJWvQBc9",
  "key7": "5EeX9qKtZf9ScCSe96g2XQRoDUfBaHgDRdDd8adRzF46pKU6p9JQXwTJgh9r48vh8TYb2UWdnPtigzmS5HhypoiK",
  "key8": "493PrfU5YPw8tuuoYxNpsTqMH5HBQQipzedKWRvZnWRtuShhktC5g5heE9VFrjpehbKMk6oHRpid8fXpFM4Ezn2R",
  "key9": "2XQJvGe8Q2RnPD2XR9gnE3ZH1rWWP7G9SJqDATcLrptRze5tQMZySE1Lu51vZgPQ1uCBnhiYJfUCsJNM3NaiWt6L",
  "key10": "2ngrWqx616vCj9uoFQnHTKhzj8SFWynBmoT2pCCk2w1VmntUw9qturYWhKsZPd99zvjLLj4x76cME7hRqGxThikh",
  "key11": "2SB6EPV266iQGQr9eFAXHRiAsqbsXsdNKHe1SsDR6XXVf3KbkFtoiABf6BrRp9ZrydCUmep79r9q43jMjGnmiZbh",
  "key12": "58dAudTwxVbLqVLpMn61xuHex7SY3XmaRFbFZHw6vfSe9kSEaMrvQaGNFcgtY3hfnik7gQErqwhrApnvfFYdiGM9",
  "key13": "2HzXFqzYDZvtGmthSQ9mfCHnPnoMZiUvxDSYQLhCoKBZ8KpsMVssLc5NqL5TapkczLAtxJzNorEDRsMDbvFx6svJ",
  "key14": "udXZ7ufsuCXk1Ty1cTMsxQWncDnTxNrP3uzaTkYz9yj1KLrQRWjcASKXMfx7d8hqB5znydcLv42vDmU4uXBJzh8",
  "key15": "4h7uJvtEUS19YWqxQCoiyGSrXJqk3fXdW3YuGQ92WpFFoFzCa8hHFCvoSupgR5HW6LCvX8t1n1PRQ6rLDqo7b4eA",
  "key16": "HCxaCqPEEux7zcgc8Ht3VfkMzzMg8fpTBmdb6gs1dU47EhRxr49dS7DhjZzFEXwKQHhiuQyBGkdsFDtvND15ahK",
  "key17": "4wbgbU23t9GdjWRjTaXXnBhWG1nfprruUWAFCMnGyabVP5XvmobP7GHx6tk79M1wepAjToLjgZD3VwmiR8xhLDHU",
  "key18": "3HYymwSs2KEKYVyeEUUhYhCm3HpaPxrrB13QDdj5N7MK6cEfpPoneUD6SRHq8UjEwT7xaVSRaJKLoTNTULeCQzbL",
  "key19": "46n53nGAinMA7yDgZzCVA352DeQCgezKQy3dpdRKdWjaVKAZUx7Zg7d9dHKBXyNxgqW4RjxnmqQ6XQXhb38u4AzN",
  "key20": "24XMgdEcgHicGRsmXNgadn4DcpTiaUSscEvxz1TtQWd6PAsnFa2T1rSqxYswq8UuCpynNiBy7Wx7wxcuWUYL37KQ",
  "key21": "4bTukGKDhBp2uc5XvXXVTfausiN3xZERP9x8xZGbi3EvCCGcLQCnocjaUt9kDLZas3Hg9aCNbTzRvkSNYgzXNCbw",
  "key22": "3BGz3yciH9kaBdLRWmE7qi4BdJSsyCbS7k9bHmEUCEb9K4wQABuxA7YPYi6KM9vEkfP5REJedzLoan2t61MLAqVL",
  "key23": "5YHepXC8fwDhLFnTrRL92RQaAGtkQe3UpTLvr1ds5dWih8YghvdJVrqNhtcipS4SVmSq7QaHD5T7mpHeAfn37ZRY",
  "key24": "5dDmZLx65GV4gGgBUfTiAoqEBFVKzDCKVgRtdCQpyNiTsVZchkXdKrySjuxQEoTrS8w5j7VWXBaTxzep4jVMydS3",
  "key25": "2DJN9BfjwoAYqC3zEfxGmgtskuPoQAxt54j5vXxTQAngyXHrqzLrCk4vy2AqLRLTcgQzc1on89QZQQTtRrys6Xf4",
  "key26": "4rDLFLfhev58BCkpQXcZ45tPJigkuCeTRFGCPK8j3uofPM2qzgD65vdPw8mzbrUvL3grSZqdGz6EpUAfRM6ND5oB",
  "key27": "2RnktMtG9ZbdsNKVS6WaRN4NS6cicvvSxoqrazWyzXjsUwPDWPuscaJohYeCfRAVUZobFcALEwVXfH36CVAPfwAo",
  "key28": "2FsWbAxa6ZwZUAKm2iK5Z77CGThQUJYShWJ3EZ1qaSLerYcxashSqFVHVvK4FvHFpRmtCy91fESD12hP7bG9eXPv",
  "key29": "56ws47vjmQ2wPEcAbzqHUHTMVjwiZbWEhgBx5K28ergMUvPXx9b7B7mrL2PiAWESBwRQngakWQ9od5NkTyN3F6Ho",
  "key30": "pDHRPK7UNGTxQUKeXtYtPqyhcykherx95gESiPwpMBzxtEopYY2q8H9M42WHrnWNT1nztJjgRRq6BMZBkXs17JP",
  "key31": "4hQrDv87VzN9vy3Ru1ymnjwHTyYvEYaKPdt5KBK3kFoyU5VWa2yaQoyPo8hYAdn24yGWCCftqScvSqtW6ridNMCC",
  "key32": "gFnM3oth3ScE1nm7bFxcR8JJsTUWomBMYCSgggc3y4AFXV64ZcoUYjkvoeYecyUQZxw6MD3ZX4wdhJLPPmKvZty",
  "key33": "MByABLqv88awYyWoWxxC2PQL3gJX5j1Ba9JcrXrFc7qFsNHH6T6JkLyMNfshrgHCpJUmDVbDcTYqePTuvJR9Dvk",
  "key34": "3XFpZFzMDN2u5ahWHn9w6SL8C38C6m76zxa3MtGwcQwS9wet2JCrtgomf3tvxntR6quJL8hkSZbBgYhL5FJxRJxg",
  "key35": "65pByXtYBf3oqpULsStDLMDLt5qXQympYe4XspRSucZKXTP5UXeKWE5qxx6TYjSg5FawRjJ5nNowbiBQ58uG2AV2",
  "key36": "55Gx55VftjLM7gMG22QYvG4BCqm7yaMswjUvGk69MTGtFj2p6hKw8mEigCjbwBG3odB3LTd7WegfJ74htTw31ZQL",
  "key37": "66ZHffs5z7oHZJanEtMYGNYpnYKzuUZfWvyLFzBNMh6XP8E6K4mLm7sCH8hjB4TUBMNriizzysBiGALJMqwu5d37",
  "key38": "32KBCHH5M2SZgDywrNoCmRS6QpZydTDn9ce1ahYikRFBX5UMKgqTXuciW9woXxUidagNFJa5tv9uuSrLMRQUfcAw",
  "key39": "3Rm5zDciJkzvXFBJyUETm2stoqFUekDPaZE46csZ3yfV1u97e53cJTU7BVa59tRv1FpwGGX34rLQoE4Kj8jP6CSS",
  "key40": "9xsSPEnTCPkCj4QXMnqXbwPNfteDFbTro93agGsrqsBKDcTQnsC66LvUSCSCcyo3kKeBbAHYN5R7qHZe1M8SjJD",
  "key41": "5UnVPT7YeE94fTVvJK3Gns26JGFBnf66wGJnqLSuFMHrVR3ZZcDijpTpbJtRwAbGYdYVmRHGjfxQXdYLTBjiXc49",
  "key42": "3jBty9XhA1LfF8KFYmbNs4a9CgVnWV6Z4EgUeACg2RtJ4NpR4dc48gwRgJmxLQUFHMjw8X9mtvxubFwvQXYyudiG",
  "key43": "VKff8JL1pjAkW6ogQpnNqCVCZFjBzhW8CNzBoNCor48KBg9BhBush5dDPrVeQioze1QRNLas18ahokuZf7BoCzN",
  "key44": "4WinPgVdqw8ckGa13bBKo8sjjNx5QEQmxQCGtg9F3Qy2vBLB7ymgfuG8oAPV6XtvQALbRPy5KSXZAJsEtsJGkQKj",
  "key45": "2SmsTZg23KRQpqPkyLoPYYgyzeAZ3aFHu6JnvHxsQFMwpijy2LoAr6WtiZLUN3wgCLhyWqjDqRoD1kMMVr4Th66t",
  "key46": "5pnVZuEBMD2oXaUj5tJjksh4mfPnkcw7mTeCZNqTqkyuM8BP3FrbEDUcip67HKfAmCMvqS7MCtB5GLzf4i253bMW",
  "key47": "3cESsg563ZaZfhX28gVZRrQp8vR68JHoXAC63SDRbWWhuFaE5pCyroQYSRrSHV8zvHCrBdpRsab9dZy5sMp1UVcG",
  "key48": "2SQLm2F65YV9xgH6VE9LgvBx8ck5NkrrXTVsKiXWmMekfhXZw6YXDTQDCANSiRJjQ1HNXTLD4YKAH6viSXmwSsAR",
  "key49": "4rQLegFGMErXgRXUEk2RqG2mBEAL5JLWtk6BcRzmFKxgfapNTHUecJgdN2RzttgEUTMQSJReU6PGCairr8Wpbysn"
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
