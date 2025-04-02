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
    "3s3JbMa88rcuiEBuvRVowEdkAX7GYqFGSSLiJBYEwPuXec296AA8rViL3yGmDaqnJpWYvXjzhcqDoxSbUEgEiumm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wEo4B1PLMPTsjvk1u9nGFB2y4VPW4U9utf6QFdYTMsdND1TF3Z3HnTd5PQJckydhy2zyqN5i7aoiXfQifWrTsYQ",
  "key1": "3NG2NuDEswA7Bd7hppWkH1vBiehkMfi9k2G475zXg8zkBsa4HtPDTsi3Ffs5V7joo9jNou5idW5aSk5sG8p1rRVD",
  "key2": "HTrncGTkAL56qxGStxQ6LvL6kQGc3y6FsCP1cKCSBALmocZ1fCY9uMBLAHWWEoMMdpFDz7pXfMgGyxJLZy1WDqq",
  "key3": "3Zn5iEhKAdVjZZPSuBFps9bsd3aLDNwS8YXWCxypxzCqvCw8o8xfXntttSz3dbvwLUqoNE3eCrPxWzrBMvQS1cmG",
  "key4": "vmZ1w3KkQshukA273JFA4knp7a2241EeMgZ9kB2y9q7WDJZohSuSLg8kSS2AZgHaUq9qK6i8KW13dLGMF6fgPrU",
  "key5": "44J49tJAM9qQCmrRhxEJonD6q4x34EvusPLYeGwiGMNWATHVR6CfB9sm9yPz3ApNagT8NfTihNZ7NP6UQiopPQSe",
  "key6": "65RY2SFyYz19SRhtz4eanTwPXHpsVvuZpdnhiKtiXDyzkFc63t6Dtc7tW1mWYXxhZJbJoxDD3iLLNr6JbPKdnPwt",
  "key7": "65iCbBPTYWX6AWqL1fdKtABg8YuPY7LKB54XuHZuhDrdjZ1SbGzcuC5Y2p1WEnboJ5ayJVWYjRnaXwoGcDi1mYGE",
  "key8": "3w1s4NmMr8gyEMgjbvDPPDwuyizcL8pVuvCfcZP1KWXnYwMPXWLowSSRYKXgfkbjcM4i76WbFv3y5EPrcMS6SXrL",
  "key9": "45zRnsMQPsKWNs2tZem12KSTmwd99wz6fqFTJiJCh4aHEqEUa4VibxZtFKNmK9hD9Z31sCdUvcphGYzHuBzEuuHD",
  "key10": "j3zTaSD6aR4yZ8gCYC2qFrs1WARP3ffqETKQNgBRVcDSyoESjR6iP1vqkXngtBo937rcH38fFxigVDF6ndbBvEc",
  "key11": "4Bbrn5ZrizLBr8RgHzfKNEBBgpaAcMTZymuesUcg7GSW5NawQAnhD4LtbztPJ5pwGuyfwjMom4ziDzSobZKiiRb4",
  "key12": "214QRy1RSc4BqbxVVwy5CHvmSVGPFqjRSjXTBJR8FDamoLHwyFZaA5C3ATjVZvxM4Ww2CPK52wwAyn53AgYtpyqY",
  "key13": "4B8yZEr1cUk6aN7NtKxvxoavQGCSENKNgmEkmWL1oXoYM6e6MiZX1F5nmbPZHnhTR6KeXaqiV6paXVqTN6JioMG6",
  "key14": "3176gntt8vcNWckiYN2qiWM11Ju7vun9v2ZJ6qTEAwaupn5FmNGrUbvWV2Zt2yBBKEr6RQTCMGHQz3EVfWZ1k99h",
  "key15": "4srXanSoMTayUQqegQwkpmdxhwDZpiCtjYHKHeh89svCCMpX3GQ1edK92khsnPpJDJkJ9H5UThNYRHqQszuBDAFG",
  "key16": "4pJbYRDZi3pJz2RRyGWsgoTVYpP6ietQagbm3GJ1qLHLhNtu9LDPaeE1gFZQvfXrsFqR9ACwexJaoxXdpo4wNzP6",
  "key17": "3uGQFwjRwzAsVaBdNf4g4UPZpxL1ytbvcuHuZMvgFG2yse8Q24sTqMNzLDgCGddvaL8A8PCMzQcykdatDgqFK2Zj",
  "key18": "5sqYoBSEnoudmFgeo7LGLx75xm9YRHaPTWSGZbaRWuUfoX4cWnHvdtEVLzVbsTBVGeTWwFTLRjPCjL7m1yj8eLh8",
  "key19": "5eteoASc6foH57i6QrrafnkFye6kjMPzASbN37qUbvLDwCvvdQFahBZ8ZUj9sRMCtK8ZcpaS5ndREuvBcDUmT9Hp",
  "key20": "2iMSRr3a8PvXAYBMaCjtb4Xq49iMcshQnSv4g6rp55rLW8eqEHHDviBqkjobxy7cB8yRo72N4iwfAJydrmxt41Nk",
  "key21": "KH7mPswGUhRDvj1fsMxf8YFbVQJti2Upm8B7DxHeUR7bsjJrBKDNKa41yCk9LMKLE8i9VxDPYoihuoGdKSAfWNJ",
  "key22": "2UPiCx4oz6kKjdgBBfJJ7ihFfF9bSV4312CKmXqhodRQEZuBk2Qui2no3MX9Yi62pGkyisAtavtU2yyE8TSQj7HM",
  "key23": "3KDnT5EfqssouwXW9QiTX4th6Euwi5YCiJ4hVMwTvdrxrjtS7dBmPRekG6uNDXGZQ4GtyRvbsKStWKju7VY5SSwE",
  "key24": "5f1A6pZcJuVqxzYsjH6UuHw9ZsuYsNqgQK5oxcpfkKsQKTStKigvbHhKqTNQMVMyDsqEhp69KmcoAdgPE5fz7vm3",
  "key25": "4upkEioqAJqiWFVwYtur7iqtyQ1piVYkHjECnyg7274WGDUKBwoEwiffZaWK4kjn7aQYCcWs5JviNsvoBrk7CrzB",
  "key26": "3nL7APxiM1yrpzLRjfFQhqJtEgc5qMmeNSK1XcWX2P21jyTSeKTBnXmGo5di9481uspT1ZCzKmwgWPuJXUPjfGGe",
  "key27": "5eCs6YufgTf4ego1wg9YeBhLihAuF1Do6iANv5RrLpV4LumzsvxPpgnZjDLQTn42LwLpyPvNmTuEfgArwbpj73m3",
  "key28": "4yMbpJ73WfxySwMrdDfvZzSGFJhUQ99HuKutMdja4Ri5REayQZ7zbCRgzPcQQzdh8qE3S5ue7Ha832ybVwchDLk4",
  "key29": "4Am3Q3hhtJUbmVxzXCGJexVXxpQHMxVEEzAKAyEoBhFaki3UAfEcTCs7kscYZeZpjA5sMBNGFQN8rs8jwLo2wfsz",
  "key30": "4tCfbME8T94L56Gu8AvuxWwVKQj7H3VxTAqRtapMQHqNiuyUQV4f5tYVYVPuL7xD7Lc82GjN7XkKE7FFqPKdWMtt",
  "key31": "4SxkqVDCr6jUmgx5At1rApiecBjc5ArSCVyCFJ57JX5U8hYsNGus5AaAY9bYqiZJQhbra4gDW2hB8FbYh6oXvkV2",
  "key32": "52rozHcRWjoUu5tkSrYLwm7ojj5Ze5VSo3ghrNoEfmeP32Q4JtsEUL5eEaCMqRdX6rf8LcWMLNcYn8JgkWLCXS5N",
  "key33": "5KWGNXtdwwFT8fCH62KZLbnQHSxpc2quU7UQBkfHMad19k5jsqaN2d1XXvrUJeBkS4XPSxWDB8zZdb7tYgVdSfNf",
  "key34": "5LScJEpuGCKcYxDX5nTo1KSPSZYRxYZrhvq5S1VBMcYy2YEKoHAukaof2mXDJ7x6JAf27MxCECjaX8jr9pfBieQL",
  "key35": "2QQyzYbe9SiP9w1KegcBPLEYv9z4NNqVEAQ6kA7gxpYjAVxpxabs4WDrpuFajanuTDeZatfvrupG6mCK614dbwnb"
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
