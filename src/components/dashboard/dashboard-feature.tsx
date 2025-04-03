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
    "372BizjE769TP1LGcTvmqs4SqbX854SLLqsj63VjGpSMzPvEsATw5Xy9S4WbydeDXNFRuBXUtio8oLfpw8SvsvWX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4obvFSo4MqvqXiD21v5kwZk3KSQt31vkG2WchaEvVNcomtsM6KxitcUehFDE1hU423XDrNygVsPyy7bdNF7pAbVh",
  "key1": "3YgzTMfiMyjCxLuitwpyKB1VmfoPEVDbKDEohGTBpyQurVs2heTEaS6zb6viHBurtw2pcmEQj1gmZXSdRMnKqU2T",
  "key2": "3AgK9YUHxVr9WXWkThELjjnVHzGv43tRJZExPEGBuyw9T2gNrpHbGw43SyaMxbBDVDo9joYawHzhgrXkDdTtHSeN",
  "key3": "5i77Seow46RoBsrqfwrhL3ouFV1bMyF4HpAte5e7zpBH2Ku1tanzVsnczTyhHnA8uPWnSsqSQtFYMFk1rTNp1xNV",
  "key4": "5rw62mkYJnde9TALLVYXKXcMxpzJAAtxYZ5LSKYmvAoWi2mcCquQuFq4QmG7DQsTJdDn5UvRTfwtCcrh44gKP134",
  "key5": "3MdffoqGV56kf7xSFUHqR2QBNoNReSpmWFBrtLAbK88NLRwE9tonF97yaFSrpyHVJ1yzYTdcieBPJrShMC3FQYKp",
  "key6": "yFw1Uo4gNSVtPiUMwZnLc4LWPBojHjg7YXTgeVsoZvcUJcgLU8m1z122VW3Nb3RyBUooh61us9f9wwsK9VDzLCP",
  "key7": "3gYtZKBScsJvDQAnUcPd89xEZY8EX9MMwnAwCzD5DvjNDQNoyPbBU4cEbwJtGSnNmcPNgnBpEJZpVK39RaFydSHR",
  "key8": "669KDDDi3nBPhTBBrKcX5Sasy5k8NUSm8PtrpuiicvoYAqvmKtaSixt2owyVvbZrpW6gp5ox5PfrVui6dqJyjGnt",
  "key9": "4J2jhZkRWjomJTvqk6twjXXsPVvkTCminpfJhMjFsPSBfiuC3cEJxKumdV5vPNAhJ9En8rPSFDeEsbtBWk6AGDr7",
  "key10": "4wJwL6ocru2e41JbNAt8Mebix26eiV8noiiuXzbPmQKyDFC5BeU3Jr7JsueUHNEdUuN3zorGXWbBeqEbEtbqsFnH",
  "key11": "2EsWuEWCkTr9oKngAQiS1dprK2cGYV46k6NrxdookSgrSJBrSu8mJpWD4ejM33TsNoHesNGrafUAqXi6rk9D3Evp",
  "key12": "4kuk9vTTFkQVarkRotr9WMX45ttAv71f51wat3gdm6QGUcK5Fa6dn4Xi4DyFwKKfitLzM5w8Cy9pHtrfYsa8pJJe",
  "key13": "7p4dH2hF7beQ9DmovKNBS1BuJCvTzF1snX9ktYbrA5wdkPPGMGncZ8v9LFvbZ4YTDb2zYsQ7da26gJoc47g5zNL",
  "key14": "jXfM934oF5fPp9FVYdBDgC5cv9KV3fxgbsx9ZyaeC4dm7mUUDnEtHjJcBZnvqLN9MQQibX65zxwgTaXXn3GM3oG",
  "key15": "4YzbPeJ7SpnsuKHzY5JDQkbyfQLmSpbzgSLevbn9va3HwmyZe2KDKWcVD9iod1Ptmih9d2Ucm2Yyg5gFbEMeY2wj",
  "key16": "2C9uXvMLCW4stEH4pzLm6u3xWtbuSftbyw9CtepdDNZMfuDCfKHuHms71v5j5znKFAFaxx7o9v5JTyoun6bDN2V8",
  "key17": "4yxXZgFLYbq7KAVpwvMrrtqsH4cgev4G7Ywudag9zDWsmiKWEmEX4gRdGcHrM39czJCLgiYaDaWm33UgrDhkX4SS",
  "key18": "2SZV465MiAXnQU1bhJ4pRqzcc7tLwA6FEUJ4pZVTLYquMj9bzPJ3Sf5cdQNKYQqnbPGAb1b5kerPoxJtuUQv7ZaX",
  "key19": "XuHDDqeAJihCapXb8Sri26mzfjmQmpSq2D75q3bvx6npeWRBHhPUueczHV1c8At8V1oiMfEo3mLNB4vAZsvHgz5",
  "key20": "Kazbmu9Wj6UjVheyQ1QEcBHgk2e77sJqXNqbMusTdXLtyC6RknYoobKwfMULHDrfhsjVRC96Yc8XfK6vPiCvWGh",
  "key21": "3SxQrso3pnXPMvTjrUeHN7Pney6iMM422YZ4wmWwFKQDaTZ8bLP1mRtEwTpoGKdgktdmXDc811qXcxwTRdPtjqK9",
  "key22": "66SPvXXuNTmjGdJfZDShP73Y5b2ss2YrpQGkugUGGJZADmRSnxnadmRmqFFjWJVVdNA6iCQ4cXoK9YJ8b4QF547r",
  "key23": "5TytNyvNYpjoZMzjoxLHdQazCtAsBjTSWjPfUbZoQQfpARuuzSCtRCXpwWvpQk9WfQ2uDaNG2jMV1UgBVfYHxnsu",
  "key24": "4GcG8M2zA5JUgEosz68TGJZ6Z4TRVFE6XD39XaykjFtwgVRWxFnejXsEgRJZ7JEQSL5z4Pb94NYbVEcp7eoLxJpM",
  "key25": "4DKcDD1Y3aiyZ3diKX8KvpG8kys8zrfG2hpdC1hyyYr1GGutfWyvYEP4Lp9xJ7oyDGX2v11KVbt8AmZbgKspj9Qs",
  "key26": "4Tc7dDLJLpXUDvZMys86svhtEugw9PwrU18ntxZVULkbHXBKe6RWArX9o8uiiTnBjhQHtjyGHNkizxE84yWxDwxe",
  "key27": "3qm87Uy7VY7AGwtZbraSi4ANEF8pKA8CBioUevJrD12ppMeS3uuoTGV7PvDVYgfXsRFXEZTeKHfhTCQCoYQE7r3M",
  "key28": "FpXofVkCU3gSWoHack2RrP2Zymk38yAJSigqRY3bwQV1om6abxm1XvwpT4R1Y2wFugW1V2iueH9Mzr3D3UEZhpf",
  "key29": "4bt4jF8Z3HsiqZf2FVjc4TYPh2H1mEELohqK7F6sGqYSSEVRUAoeD7rWmC3tKpv7HSRqTaywa34pqMBhyEbrhUdd"
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
