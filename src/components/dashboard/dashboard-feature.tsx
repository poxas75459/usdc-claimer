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
    "3T5cmno1CfY5J8LzZLx1qXaseEzgMveNwkaka16RGR81ZMmDcqTZijRS4LkS7g863NVFsos85RShpy5a4PaReAsh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NMqpzoNyjpUo9dyst5pr21RJA7qKpFzCLoAa19bRxVaqgFdC9ujgrdHCyrCzxA92wCyoyBdj1PwqAikfSLTATHv",
  "key1": "3gNoMJmBifWJoFupx1VJbvBcgYFPfjZ3HaPcAXy24TbZB6Pf9L5fEtC4cPxgYKhG4t7VZDRXHNVkqVKBVhbqKEiG",
  "key2": "3rwijo2vmKyC1D3vfaHgjHFq6h6PL32NvZcUjB7j1pTqfvgXYdwG2UKuFHr43baQ4GD9GYjMddTFshvLHLD4Pjdq",
  "key3": "3uJtFCAHKLDxZ4tqMxVXTThVwHsoiijLDKh9KUcZRmE82hrU1FRJGQAUudG96EJFJKpn6X54oZXg1m6YAyj8LwQX",
  "key4": "2t2w9Yd4aVb5wTts9mNJHbakqra6jYMwQXGTJuJgp41Ne6JcMCpepeERvTv9aaZxCwRciakKwmjCSEGsfLdC7Kky",
  "key5": "55MrR54VwRzHTuA6whbft3E4pPM8gYAevsvpi4nddyfaEacqgNVda5Tp3x9ahsJmkHhUDF21rGZoBkSj8cM42Ysx",
  "key6": "3dBxu8at9Z96uLuucPahmDh2zf6raG5VrjzJMfBmNRdBQmcpaVxxoDJNVY6rQekFo8dfDqfmHTqLrbVeKR3Pvemx",
  "key7": "2cH2tAJm6jDNSjmjxGetvmWyoUD3w9e1hsP6caaApdsX4sPEqBT5J4knRJJum2mn4N8W3cyqFj5WDScZw2dUERtZ",
  "key8": "3qF8PR3Zt9YLGgfyABowYDjSKWLY29xsajzfbu6AmwqHKT4741QfL2XhJfP73puPPmggfmR3fowXxiaSZDuaZd9U",
  "key9": "tT6tt4jGyazkCnCqZA5KcMrkpzoH38LySEyonFfn9Bw1XyjPMfB6SDANviSgQoU2BwJfs1PHc9QsnbRT2AxV3wA",
  "key10": "5vHYEGC3PERNkXza2uGVyc9DuKkaBbmcox8uYx8j6YVgZHkprm9xBAGX84dD7QXr64jcRq5AqdYckCm78VPDb2dc",
  "key11": "EhqLjT3qkXJ5C59r9b24beVVd7CFn11z9TAQojkz2GN2dUnyLHBXqkTiux5XrsqteXKLzwDrcormauPRWAkCkfV",
  "key12": "A9CZ6puzTip5mRGRus1sM28uTXhc3tGn6CmxY4UwUJCUWnTAvssryjsLQtupur95jS3dLaXMNgU5RAo83EXFKLT",
  "key13": "4irefcCKVsqNCMvA22Bhq1eBBqD755Jc1oJLxqGAJkNRXgzoKi5TUFaka4qcnEsENkB4XvnjVhP9BPdiQ6aERiLB",
  "key14": "2x3trDjgED75aALnUw134NVjoMy4kmR9TzuftWutxioha3SFvEji7bACDpfrWEgSQ1vmw86RL3Pn8KikVcKMKMAC",
  "key15": "61BuB1aBPTzUrDaSkLBpoW7AoznsdjpjjxfUAWegXFRZ9PNTETrEmftmkBvfEj9MgxqRWCah3tvzWsqfe33nQkW8",
  "key16": "5gZGQainVY541CKw2Egsr2az6eJf8xScfzKyhzZqPmCmeRoXXoshaFCWC3Yn7a4bT7aMSPYR6RnqJLeyb5KtKvKV",
  "key17": "4nSGXSLbuZENfT78mgUTsLTVk7ZyMCaJ4rBmqot6zFUQoJyFzKRS1HyZ3nTonZMTYcrayBq2AjGdNqepz97Gv37a",
  "key18": "5yzidqVyC8qDCJ3hskWWEeJAy3CegF1qr6E8t9ebazgDcyNzjavgYEKdtnUTMouEKmw3r75uU6GzgDAqv6pTTg4Q",
  "key19": "3Kr74CXxy2J1rTGs9ML7ka41GLXftjnhqEjk9TwjDPQcf9f2hkejVgimwYGZAckuKbXbg1LvNxT3vjt4HJA74Yug",
  "key20": "gTUfuVQts5BxThwoVhTB1yUfrqUVALuZpzGUPnse1pGZh6ELzPV7STa78N4kcaiVzvkveP893xHtg8CGFGT1RXr",
  "key21": "2AtPBp2rotBKDbPfxKHsoSvnfiMJYaFVRiKi8ejjfe83aVB9RGfy7Z8JbXaZ7qMG8DQSe5J11SFfsXSngdLgFAVY",
  "key22": "3wySnj73bzVAPZF9FfyS7q4oPSqg4N7sMYuSxcCjGdnRJkNg7BLAdTosED6wJrzDZMU5N2qzTpQmkNc3n6qRwMd5",
  "key23": "5wA6sp8zsWQwyJm9Pk2vTWwJizYJhWJSvuEfS6DpPNeMsaeSCoioozxcDSFzppy1paSsYE7FmPEda1ha9K4jyesu",
  "key24": "4KgUi7Rf5ALtc6TU7f3D5vaH7tH9zyDrqfHZNoEaq42Z83EYsLLxNAF2CiG4KFPeQjn3jPuyLxG3f6oScS99BZ4V",
  "key25": "5tydyhrHYsEbsNfxLoxmuLdawkXfH5KETL6zo6gFPDq2z3eXMxNRsekccU72b9BoU9hKBEVuKCDEHcaNs15LTp4U",
  "key26": "3LiCDVQRFBLbJo8icVgcdE3rMnsXiDbdMsANALvRsgoafwonPbsApRXPNhiRRBDYumZ4fRbAi3kJVQYHGpqJAsha",
  "key27": "5KTxHEf2MK4CHjNdR9qnR1CnwApY2GdYhRmb7S8spXCLXRHzbWeA8fYAYvcnUtLSFu7pUfV8kEG5QSEh2NgxwBeL",
  "key28": "2Q9Md5WkAjWmALdy6GonJXGyrrMBZ7aBTK3TJssRQQckn2BqTnSHo5NAb9PRnnC2JT4WULbnkJnrBwXynwUALHck",
  "key29": "3zw8Pne5b73a5EWNN21hfpowA33hTSEhp3cEoF7MDvNTBz71b6VYPTqynMbhbXPNTfiDpS7NkyoqJQbQ84BAqGRx",
  "key30": "3ai6RZ6m5MF758xGHjzyEf4MkF8Mcu89U9F6VbM3pTUmosr68QWVeqTmWnpQNSorkdJpE1xZFMvTEQWx5Jp8YE23",
  "key31": "xx66nrU6czAvjwPVv6qKMji2qv1BiFRe2sEUzLQkxZnFEV4HNJ62NXC3wixB2GaH5Kj5DRExLZEjatrHpxEnpd8",
  "key32": "2MvMGFC1qUpLw9wVhGbe6z1FW5gR4vnzQh3UiyVxbRXQed3aKdu6qpmTsmmF1Vm99JJ1iLChy5fh325G1z4vCurw",
  "key33": "sqJGjzs6xEvSgutdTax4GLdHMkxfEYMKkyhMLdNZZsBDbYbEuqwm8RRxteLT9FWiqnmz2oBNesoHU95eHCTFBgu",
  "key34": "5yVeRBU8aYNKAKgUYpjFtGNTi77LjCWAh1UK5UR14qK7SdSNCQoAiiCnBAZungHx4qFNk6T9fk2whgmKLi3fT7SA",
  "key35": "2mgkUjkE3CdKSNBYioRjRopForEU2yGu8awqmNoaTj4KGz8LafsxKtasVErBNwqLAJEBNY89ycTiF3DVi2bjozH8",
  "key36": "4UgxPXs8LT9ZUsnJ7yzMyEFUMr9fsYJdavTpSrcgaF4QiAefK3Zn339eYFpmAaDHkt22paiMgEwewWZP7o7cKGwk",
  "key37": "3ucdnQSNLi3pvx5stQUaECoPvisuarBWGY8xsC1DXqndmBGS8hcx6nxxA4VoNKyiDhijpocBGJ9Zw1a9QUBH9EwF",
  "key38": "5nXpgGqqNeavADZMtAfkaWa1FviMiDma8MGfx7PSGgutdxC7fQKGm89MH4eEqxF7JS93haUMCM18zSHevjRf5xXR",
  "key39": "38E2VRbP3XjN86EHBsRojHiaQx6Wm7V2GL4JzseHEwakNLkyHmtdAzugt16TU6ekaFHMaTpcsKpvzaz6Fvfk7UeQ",
  "key40": "iydwKzV7PsxXjSbepCe8BxkxdDv5ZrBHRsCUNX33shKq2jV83YxaiqCucS2Ss9MrtTo2iLNsaTF1tL3hsyAK3pm",
  "key41": "53UJ7RpjYED5dAzA5gadTVWFRhvDYh38XfF5R1hyfQ5eWVC1NHoAvK4X6kpFxgngwUXYePH1XtHXdfPmVXgPw8QH"
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
