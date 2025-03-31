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
    "HCUBwBi16UG4Kk9p4jVL1eKmJXCngAhVUVRhZHYvvJ2hbUmtXjLieaSQHVRacgsxk8rCBc2PfECj9GBKbnDzEUd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UsTKVbvitzcBVRVRgwhHdcWiTzD3g9XR5xbidsPbd9GbReMbMxmv5wpuCvkcoYM3ARtCUbJ3Abk1H3vYG7a33v4",
  "key1": "2Qvtfaodo7goEyUb3i2Z2m8VG9ctQWobFPLkAyvm89Faq6uAaFD49eJCZSC7TNQBS4Fn9AAcBH83UFdW9Kqjho21",
  "key2": "3GCHUJxQapxLeNRnkJUfizyRAnND5Lp3ZXbLcjmcsferJVg4rfZfU4NtMb9sX6NJfkCBgd9CaAk4yGo6oZrw8msr",
  "key3": "5AuAbfGdA1zWhKW6sus87L2cMoN2K3zsrhfUbRcQGZS1fBNZVPkXP3VV9GqBzWsUYzSUfiGMP4etXyV4Wyev3RVM",
  "key4": "5bQBN8dsAKdk8YapzkzPGqJUV7MqnnvYtBEyiU3KB1G4VV26vU2V7S2XKCm4fs7cPZQF42kdX7J1FfwpDWCoNkNP",
  "key5": "4SGRnq5mxy9zQkuVUsd2fPSMv3wZFGiPENHcSWXkH2jKFgESqpLNfg3QNxEV1v2UcB7Bk7iFhG3F5cH6U5pP7bxp",
  "key6": "2faocZ3uBKB5bz3mMvztLfwdaeySyn8CSkzSXXis4AbHmseXnbGMzAvbWSZMMZYmCMbD9VMqtrP3GA5Hq64v4EDQ",
  "key7": "5nWD8wG3pYrTzsNPA3vQhmqBYXRgDkSYC2kCt3cFaJTZzTi1XxfpmCbKw4HZZfKZgFQtjsqcbkyuZYnuuxSR9y6E",
  "key8": "4fnQR3nPiVLwzKrJTUDmcdP5FqWPLpAsTuKFk2ybdduBSZws1oTyZDoc4jwe2heQcrGxmPFnGAuvKxbvW7ENAYbX",
  "key9": "VwWD82L44qzNPYc274bj9pC8pWDo8PMYLghFhbgGvqgJQgNFubnCgwetv5BgrtnR3Rxtz2iPECcEfVGFi64wm7d",
  "key10": "2w4vvQieC5DJc2vHRPG2DyFLDxbghLGfT5hgQ6ZQM4cfYc4PdPtPM95TN5QocFoq2knY8AFam5Nn7darNH7dBh8m",
  "key11": "3csxVEEUeiefHbGQmRyq6EUFfNfY27ruymaxNEg6NaGV4VGPSuAFQiisdd35rrErZgz2DE2DUNgKK2f7G9Ra26E3",
  "key12": "2ZrikmerKpMGhDBXiFLfwnLF9kYemKqvHCNk6a8G7qR8htXkksqdVvbzFPDK6jU41h2HqD479RzbVrjJtCvLFjBQ",
  "key13": "5hRGpfmHnHjFH13DfXudd8SZwTYhgLbRDafavPGB7xK2iSGPgs6pswDnrcSoieZQVQBYNqtFwbCctRUN69dsT4R6",
  "key14": "33jt3wjBUJ21H31Qr4WydyLhnQjbr3tY3TirtQ8HCD7uqNFjypXiKJ3d9S1GEW37LSmFhy4bo9Ye5feUrBAwxLhg",
  "key15": "59FBed7J5KC8Qjjh8GWEBk9SYtnE8v2CuXkFfjVnTQ7TsFWmiVKkutYYztkq7Dp4sbxhhYXiG8cpGL77HxpUsPaS",
  "key16": "4z3QKEZdkjdG6UAKcfz5BvX1ifnArEkVPiex1byBxyZkmKbsih2qqxpVFFcT8kKtPAieZzthNRtkjirfApcxG47G",
  "key17": "441mH2S5C55MBKw9nJ5Arojh3sGr2ZRr9mNxAnZjJ2g9KQqJiF1S1y53bGAhBwhquaeURvwMzyDQU2AaMxqEk4Xs",
  "key18": "5xFAvbMjQ3jfVTBEoWBhCxXhz4YKoHkVKrc6NejerCPxgc7LYgZGrxRUcNZYgFDEj47r7erdt3zDR7YbiJWM2iNa",
  "key19": "vvo3JTGo1Af7buEBTqTvCtjBtporqUcK41iweje5f4SnRHrfwKxBKyA7goXwcDzvLk1Jw7qaPVj8AuK8JS2h9V3",
  "key20": "5eKA5jE8iwK2t3MqEJy5dbna84rpCZoczeCxxA3aXqUTqrTGyW2tNfft9zgLRpkYi1MU8K9mZyQtxuXivBp3j26M",
  "key21": "2WRszAACbCLm8SNWiuYLo1haH271QAxFb2aV4FCXkBDk7YND1NU2JbSUSKhn5utMKrmj9tuBNtEbj3FBqWcEs8h9",
  "key22": "3iJRGWKxmAXFsjvjPuSkJGXGDuQMvUcHwSToYh6FAoWh5j9LNKS7h94vZ7iVnLed84fdE5R9ck9mNGyLgJDRsVGr",
  "key23": "3MAUATd9rJx27gQ9UbxpV51W3YrvkpTTEdeJsUeCGs1GSavPjaNzmRys5Qx6oW35Fp48HC8nVhx1TA3B7gsd2mUy",
  "key24": "4NWi45gdJxzMNsjcLqd9VWVJgLYSgmqAqbXriKwbkFnDE8YLnk1gpUdbDe5nhJbqafpMgHkgwzEJb3WX1RWvxifV",
  "key25": "5Arn74Vxcc5P1VMPiaSUYsMWzZFJsqV3gxvJjjSu9nRUiMb6nfCPoqnyVmpCZ5Vc3EyowYdCAqYqDsKL8Yww5zcB",
  "key26": "3Ub2pwz4rsicqkA94r6B3jGRQrahJdEQq2KavjrGiyffnhLtxcPChHRDXkFbbMZX4w1KDeaXFZWtqM19deXg5W3A",
  "key27": "4pWwXPQHPpia9qNzw1Y7zxWse3XAmfSMbHkhp7SvbuiKYMWgShrbYSQprYtqcZxX1hu1xqLKf1UaEd8bytiowXTt",
  "key28": "RUKsMp6iGj2GsuwbGPMDRdaS3sWZ55R8tKbTFKUuzCokjVvhu6ueyZJjGw3Ji5AUXCcBs7FhknJwSpVCS5QyzHj",
  "key29": "3XTPT4G3w9Qfp7RNV7F9kF24FWFUmBtNFPzPJyGQ6QpFZKyfBV3Xceo1CsEwK4F1yNTZiiVKqYYXc6UdUrJ2Rfn2",
  "key30": "4va2xH9UdUXWEe3jwnDdpGMmcK4K41Y1jG35dkLY3RLfRW882d9H5t8PdoDNE5xushct4kAEqgireqvdMwbktnzM",
  "key31": "3PGsotQWrEiaySLqdp1m7DEBUjMkKoMjsuyCpLdMACDmsWuGKjHu2B9ExmZrXh7voSbeDXvrT5Z87q6LdH5YBeci",
  "key32": "2GUFXiqzv6tN2ocnpMeKnecQwX997AHFVq9G1aEaTi7u1cS3iiuett3NrWQz2m2mju54MTWzkbziSbycVpX7VHYp",
  "key33": "3rypEW1aw14CW6B1SvUswjWdVY5K8wJeLRw9LBh7w8WvQ9CXc262674DeSPXKYTh3hrnez3dsaX3RJdJQfG4ooQ5",
  "key34": "2fvyi5r3h2dK8hYu44Td9LtN1QyTTtvUuqAhENnCdMqDCJC7iTycjZVRpxEwQboM5PNDMitWLTprjUdXnzy1wzaA",
  "key35": "5g8wZNmC2oevqpVTNsB72TMsDErpnNrGrtadenPpvptMXACK5Gx5qVSj7VFK7gGjRnaE3G7Wamk447dGzfn2PJmV",
  "key36": "WPHNjoQQ4vyDEL7TeYAfJZag6oigAGZttgF7AWQPSbh9TRCENC8FPvmZLGP7Nq2Nk9oMH4GheSa7jWGvn2WYK9H",
  "key37": "4rFCVcTnF8XCvMn9JP1tEkzTxzv6Rrwxn5M2EZV2UcvfJPASvYNZiRhHpZ3zZiSGUjSo3wkwa7ojXoeEY31ssQWo",
  "key38": "X3fL7LaFrJjVEv6KbuZe3fekNX9hXTY88vysEMMBhyPRyvC4U9YJXR77Cf6ky7pBTEULqt2Ung3HpT7ZVk187gu",
  "key39": "5Zsw3VTR9essch7jPFfvqqjJihSXpZ7LeeXYRfWDqNGTxhKBEXTGcgbV4DqLkVHcSL4SiA3fE1eXWGyo4wzoFocb",
  "key40": "3Nyaa5QzU4abDdscbf9Ckcm3j6ZC7HyHq5AxzW59qk7YdC9U3boru4dyA59UmQ837B7JFfzKbq5CzUmAeJaQSjtm",
  "key41": "5VBB6aNpUDmdpes4oUeDzgwA6zsPQ4NYjboexcZtaheJgL7wEtQZ8owVmn9V9QfSadpoFsttHG6D3NdE8wzxfJDM",
  "key42": "5LLxGCbbyBUUwAr97GADNTEkYMseEiTEQBhhV2ehryJSddzSFjAL2vFgvwpYWL4wBMbZb4kNvaa9iAfv4EXzyFps"
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
