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
    "4C6oZAKG2LXJaLW8BKY1miDBBp2HLXp6zwXo5xdJFtbcC4fM6kc77jBFaDXxuhS8hAtL5k32dEJaXRux9ZawPFdA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62h8ZSPzyDDSQFAizk9x7bwrzscQm4vbDSLcXvDGFZUbnC1BgEG62LVAqHd62gTMjjs4dcztgWyQuvEDVxBXcZTY",
  "key1": "52eT2izjXCuHAaDTFkg8EDNGuFXE66SUP2QPaz9PeuMvCuMFo5H81VjMemY5vanZCsAuwsB55Yk8q8NW2AzvicYP",
  "key2": "4yYJuzoG1tBuC4GSdpACQKHHJA9qP9xRbmWdUidSnv93dv1oXBvXijZWZNuhazgDigvBfzvw23TixcQEqaLf9xEs",
  "key3": "3exzV2wzgykcdfzqPnFRdT2wCgfHHyeQCgpbTQxc5ZPaHX2Bvx4mZus8yFR3BQFgT9uk8q7ZBUVeZSThuKdWW7o2",
  "key4": "2wgWvEF1gTkaNyJbzV8GKFcKdAo4BdXWa3kbR2TXx28c2CHkChm5SjdbtzYbRg9ST2nvbbAhgj2AuqumK7P1ytFF",
  "key5": "2osgXoGHcZFLKKmHkX4944yMoqKNXSXnQK9cTRuZaKfkziAV7AD5uLVSJaVeV7sRXBHbkypn11veZKc5qyzawF9R",
  "key6": "ovrEMESkStJY783L8xXQxnyD2T6fDFyeKp5qGeUKF5nLe7fkovggLrCUaHfX2HW7ioymwdZLr89dQvYU6Vvj7PC",
  "key7": "2THGqt5tADaHR9KdSKJaSTDbYnPQUW8g2rf7SoSqXLdE1aJEwLpBvqiCeaLAqvrmUTgccQbSd3AkvMeZ7jAntzyS",
  "key8": "2denpKPBWtqVBQD81oYuPPW3YUXM2KLbwUivJicurFpL52d2nADjePRpxBaVF7Zrf61XBNFGkLvzr2oUsCFVt4uG",
  "key9": "62qQFzrMquqn3Y764Sac325PKzPTNB8mfqwPXZmtmeg2u1QRmEUwtorPhsbYtHAaskyZxztFjMJ145r4ADdo3TYA",
  "key10": "TvAFS3kNXUkzdPczQDBdn9zXyCfUsyRhCfUmQGjFPPUhQidXD6hFzQPnfX66JBQyNnAHQ37fDEM4iZ5kvNJQGKz",
  "key11": "CXXGYg9xpT9uEU9ojQrbXZqYEM6cfjwxmiAEN4R9Gy8UzgGzXjf41cFqHi3XHa2Fp3RJuSmhKLUz87n36kXsTkD",
  "key12": "4HDe6JrawFPw1WTveWWNkS3VR1Wm65DFBsKKpUD7Uphn2HCfTBwW78bLebW6zhUzX4pJjBEUHaiB5J7dFmzoM9Xu",
  "key13": "413VxZM6cf4F1aL4vYGkZizvoULs87REnnWwjBDC6xZvxM4LkNEDp3AxEhoaEE3nvrpcaCLRxUtdMiodRcMd2qoz",
  "key14": "2xkM1KTaH4hGETWUodXpsq6YyZX9qnmHYqTcw3jYUhAwBd9HdrwzYkf239d7yVfGyweXgSyyKBtkeVUSZWxFVpTz",
  "key15": "vwAhDMZ9jYi72JzT5wiueoJXnQMwpEraQbGvorVosf7H2R9CMfRcYuE5xjvMx9Ct9jxzRP23u72A7NQTHHaqmJw",
  "key16": "41RZJkggnDr7RyLNkYjkPj5Tg2zuBncKcnycMW95vx4zM11yLHkLCHE6L5rL8adRXdM4PZqR3xaJfSu5teNZQo3f",
  "key17": "zC4QNMSYm3CWv1UN4LogVFgbJMvmzKni3WDuBnpm8HFjvuN9Hp6Lb7egqMrNVDn6hDhwRzT2rwTHCxNDr9moLuk",
  "key18": "2Q7DQ7u4gmGDXXCDrbVo59ZFTamF6GtgAZdg8gKE974XcmAQ2fuf73K4oDw8fJt3TW6JEDFzvtPSme47X6LC5hFE",
  "key19": "5jF3uKXzUY8XuAyB36Ufr9Ae7AhxhgZahDALw9MXqFADTzLzMXRBhaCrsTk6td9TtwbhkT5AKSeqfvYTuytNzyLr",
  "key20": "29SyK5tgnb2XfocJVUfBPH7PSMG8TBTnwMy3UygCzqQXkMUGyyYa9jJ4Bxd96HFRPJxSVy4wav7nUMpyiLKC4ACJ",
  "key21": "4vzGLjuzedSHDtSMzkZmmWUvVkM975C1nK8TBj72JYz11WDdAyepJoEdFKHAWHsbWjzyuGmTcBCcCR1T5UkFRgBu",
  "key22": "fZF4Eq72jUrQsD834zhDTvLR2dTmaTC7b14p2eq1N9bpkoewf8vaKqAzMMLfE4aksgagRXMBvxd2yJtPPLjobJw",
  "key23": "5wnuTMMRWuPi6h7P9iJr2tVUJ3N4F1QwreS2zJ9V9dGsx8oQjv7ivT5ijnAj4BRHApap5c4duzqokf2YfXm8btQg",
  "key24": "iY2hxKHZWoXxAe8yDHbpcdfsPRqFigjk3F1ydNJUqddvo2UR4V8zxMrKUgrVx5eD7L6kFQ6xhu8dQKZNXCFgqqn",
  "key25": "2UoZKC2pNAS8wW8FwwugXnbk8WXvqY7obnjxZGEy9Ui4G9fVaRUGk4JbsXESfc8AyzEPsfTFKuPoiyCLRRornQ8m",
  "key26": "3MPqh53XEQo1uTzcwmJhbatzz466RjCe9QPUEWHfJgWSYX5fMvaQwpjhZ1CRTQ3LWSFQWw5CHFoKSsqWxZvMu3qY",
  "key27": "45mcaTrRE1dZj4LQ6BG1t4o5rothPkRtxNy7o5unrmBS6zNMAaDQ7R1NvspKzg6knQkN8yVuY1899neJuq5jMNHy",
  "key28": "42q7oqWVB51EHcGTP1no6fzNk2NA9tmrhZB6eGqC88cPZwRUSbiZsQ4Mh3EgDtGyRP1BNSv3R5zjpQkUbNhoG1G"
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
