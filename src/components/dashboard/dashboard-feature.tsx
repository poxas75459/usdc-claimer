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
    "3AidwagLo9urFPbAAuN283JkezLAb13kxwwuk3mCkBK5oostPa8rrsbFZWq7LKE65PLJXjDNmDWzgBMfDCQr34m5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nEJydWkpZjKhepyoiaZQvZPs7HAxuVot21rfHp3vdKLjk3Huh66qer3wVM1CzRSVmAm8a4zuHjQ2geDkok5H1Q9",
  "key1": "6xBzXraCByxFSXTnKhkRQ5YkJfwYhvePzDMjGW5amzppNRp8bzh8Wb25kzMiinPGyxAAXMCjrKtxJDbuR6HPCwp",
  "key2": "5pSpSPQiB8T1ewAq4CV26Gg6KBD8M4joKcLs8eNhe7ELemtcfE1yru6Y3K2qZdu1x4b63bsBxe1YpEzC5Q32QY6T",
  "key3": "BHH4b2cCTDExjnnpe3Y7kgMLA1CJQWH1ZcnmYSnxfea37ojPoh4oY2KzjbWYAjY9Zzz7KLsG7tPyGSHmdE1MHkC",
  "key4": "rYirsrPP96xBJrjoYsUV3XAF1vhWTWe7ZcXc1SDPtzcYurDQ6tKUf3EGYQ4ef887aDVvayXeumRKyzcU49M4b7Q",
  "key5": "2Znw1PLi5AbSDaimZjYED1maXQGz7WYAmqMERHWq1a9SiYcZpRnKmxK9Jc18XBbr9Ta59dZVgzD4uPFmHZsaabum",
  "key6": "kjrz8GQsU6GgFp5PGyLQhn11HngZq2ZHzwsneUS7h8wWKgiU6R4UwDJbhLS8rpa3H1dxTrCmca5qMVKW6ogRuim",
  "key7": "3oBhkfBkuxewbpYMkxdE7B7Q4VG1Gax5St6SW1jtXaHu4Cqvs6ukLZfgyP3P4yRXYWdJKuLu21XKEEi7riK8VzVT",
  "key8": "4JgqQk3bEFCzMSTysaA173pTdxoLMTGXR8gLoLWYYsaqDzfk89cs4wjFV4AR33v2Ve6jgxu5sAaqDdT6h1rVWL5J",
  "key9": "4PhZZcYi2sMYYa3rmTTmWD5vE8ro6j931m9CQZPV2JZy4AC5KexUGb1uDG13WarNpTGbfhSQxU2L8ipJKc3WEs53",
  "key10": "5bzKAwQ3ierMXgraAPDo1UaggAsnAunKtNWbmvHj3i8zEvHKmjeaUmphpQHK1XeJ7WfK9M4uGBjd83rwypgNH7D",
  "key11": "DHD4esv2ajBaiJHznWWgYenB5dLy5irqvRijfUNhzWWD6AfU9UNofPuYNk25YmFsxUypR41FN5rRubFvrjgq6g5",
  "key12": "2XQJkxKhbdwSQBpJyE8JA7YUZeCuEbrP6r3nYTAt8p7oZvWLugicDpKqBtsGm7VzNPVDXbV1reqpKHnUdNQ6Zgh1",
  "key13": "3VnRFWPZ7u2NjUQjk8ko1CwX29e1HuacySB1MtP1JH23zzogzMFmdoqTCHn3mSzqvDL216RU8cJisgEetJVUG6Ah",
  "key14": "3YfwubruSdY73JL9Ac7K8jUbEU1Qye21qR8e4ENSiBX4FdzpiyJMNhTGcTr3ujw9TnXj5GmdzWkcAUW2Up4KLqnU",
  "key15": "4gPckrkwZRyPfBioi4XXuvngmTUpn4yFFoU4tcFnuWpQBCcLC8aMWU5PJZGsHGZn1PnkLAYUbMDp91D1yh9GR3ge",
  "key16": "2sshRxH5rZqCidAhFqPdXfzK1HfRZNPq3WmX2mhU4k1P1p73wEHFn3WuhUky8oACEm1SX97vQSvc8T5aVZXErb2S",
  "key17": "4BhLPSbvahK9wawizCmEUmE5irWCp7NDC4MVKyS5BwPD3YK9eeySrbSUmgty5YJszbjyMfCLeQR54Nha9h9TqrsU",
  "key18": "5n4nAQyqSEoGrGoB2QhaUtCu137c6McJGMmmjXg88dmopn64bLmoZHX3gYeHxErfUJmjFijNYzNWaLXJb6iLZJAm",
  "key19": "3Z7mGhPECn5reAsSw6dvXmbyCzdS7pMbAkyG6raFb1qCg8td3xxPg6fABN6VYeYFuSyhuv48b81ZFFpEVKWpqLxq",
  "key20": "4iYS9GRn6RhWdp9Ahvy4sv6VyvrpWGwfxBTQBPRzQBJSGUBYo73wB8bbQs7PDyWMC7xphFRLFqEYEqmh5SQ9DcmG",
  "key21": "4fkZ4ELiUeRASQ6TGvXvPiYMrYUWMETXRvQ1Qvepzkyzs92nkXcZBopEvWFUkhhUoudBPFN5P9Q93aDXugYSTV2d",
  "key22": "332o49FfUPaPdymbcher1iE2BvFT8Zav1Tu7vVK9Z1zJCok585NpGqGfxmaDkkxgetcYDJGuas6bFzgZnWHEgSJa",
  "key23": "64BQhMYBQLPyfgDMDbUhdRAXQZsvpZMDCXZTp6eY1MuJixczracK6PAJRSdrjnVpdAMAabsxcjDbdVEiobS8Z1Kx",
  "key24": "5Sb5BDATpSSmo4jN3BYL2rZUF44kYcMtdhK5wB6bFpRNXt3xdDm8f45CjDckdGio2iwSFzWcA32Hfx3jNG116MN8",
  "key25": "RF8tGjoeYA19aJYfFn43uaD8ysMRrhjVM6f8dUzZf2n5AVyvkTdmUe1Tgjeab6sT5rfBERQ5TMc5GgaJpxQ8LwJ",
  "key26": "3ZDpKxyhXfQpBUp8NW9fDahwd1i32gXNcMrEc9Ff2XP682V373y12C39vuop8h7tAtAjazn3C2NBBtXpLDipgKXx"
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
