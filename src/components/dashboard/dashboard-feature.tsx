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
    "34vRwo4ooHhiaEvpfikA6iTd8TjuszmLcKKsjZDkSKyAdVAvLw5uHATRoyxxcrfmVrKDukyA9cR7xPjhqoaij2N3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VGEUrFD2ppgNHRDNcA9jSrBZAZjyx6ww1ezv46xGoCzMsRkTNfM4LsBJZ2bZE8KNzxdDL95ojLsAHveDNEughmS",
  "key1": "4CdtRyH1DK9pg1kpzvHY7KApdL9s2Hvy3KGEnMUT29aG15wTubkWDSvCaT7TEXMGEf473taARcwqKYAXEk6GMzAJ",
  "key2": "5x2mTxc5FTWEy73H87D8yH2JdsEuciF3hnnwLNVgYQ1kt7Z8q3iinbRgKDisr9oCPWVjw5joYgsNDSmzrxNLF8aS",
  "key3": "2yyqPJcEAb4KT8YonHxtPEP3bTg9QynXfvzcE1b4Ri5Sd4E4J5UGPA3E9gBJHYhKiLTNCPwEpj5HrdQ6VJwSrRKG",
  "key4": "iJFLQVHyyFUnKq3tDX9eqZPDbvaL9UADtp1mF4ou1L9iyRjXimwXNP9zPFbDiCY7PQ7pjng1tK2eyRYJnibxHYz",
  "key5": "4FfLvMiN6HMVbimgjzpQukDmkfFvaPUmJJ6JdKsB4ZekY4p1Kv24mUpJQ1QdUrwDk6Zs7GZXvtzF78RoZcvBYQuN",
  "key6": "3XiDHxZ3pjRH8rtSJp6CRFg859UQTvJEWFzCZfWDysJiut8UNddupMifZDLsoEAsKaxkoccEdABaoT164sAzHtHm",
  "key7": "3ZiX3h6YPWaXsfCDKSVZHMR4pNAKpTLUR1MBPA8iHbMZUunQdbnN5oKcDZBCLWbfoRiMHsLbnmRYaTmy3dsJ1ZDg",
  "key8": "3fxD1mN4G44qibuq128abDmdvUyRTbP3E8qh2tJLNgubWxDBSYaFHtuwD4fNsCwKscoKnSURC9sJz9QsAantocrY",
  "key9": "enenD75bW21RzeKJTZKpSvT3PBDhKKyTHnuampPwL4ULqHx5QXqK6VZ6pioEuRnNx6jZjcUnbvKPYd7QhzbZJeJ",
  "key10": "3xkm23JosMWcgatJ3cPCzwiVcsoGr1hDJV1Zrf6D2w5Cg5qYTQjsGdALRHhki73b9cFDkGrzN78ucuuA4hvFyD41",
  "key11": "3LtgmN9X3Ge7GzLr9i6A6HjeQkL5j1Q9jG7hKVh3bqMn9SQ9rTh3WnYMr94UbytzSBuqhzY1fBndnav7ETMZ6aLV",
  "key12": "A7hQE2X1qsRVvYz9YZF1ctEyFSiDNrj8QToEaQZ7bcT1SqcztFR7pXJaacdX1Q5vqrgKY5ZTXRtcdwAQAcwGJ72",
  "key13": "22J5o1UfHWjkNGmiodjGBvMPCbYtEUo7H9VjdYQX3w881ActjzhHBBBSYoxC7KEVanpkky6BMtfDpFfvMvRqRByx",
  "key14": "3QyBEtMHCT84dnZrRLz7DmVyyXQ93Pq9JLTUuZpCeUXBThE3FK1tGcnbEv1Xa9gp5eEQHUZi8xB8MUT8SjmNQb4G",
  "key15": "2XZAfVp3qdPYPhBXjYAcsWvoTzzAFqjxZVkG31c34XJAQVHs3E63iZK88oSk3QKFRmBj4KssDZYnoanKMyZcvedp",
  "key16": "4XLCMvRkRnXGiR7b5h2RiWUHv7sZ2wMLdFakxS5eBtj57k9qBgm3F7j5a23fJzAHMiu7XMKQBPaPxUuc4VfMbmvH",
  "key17": "3bfJK7v8QU53HiY7r63eZxmLEfXKwKJMh9PpN1xqGHM68dWkCNRTYewaiQQsfutraM2wYoXn22jespjg8UCrSbrC",
  "key18": "524ZXJTG1NprZsimHNGQoQZPsTWyzTNwweVqjAHeKmwx2q8SnabGo7QcGGk5jbTzXPqdjgQu1fUBByrxx7ZRcRXL",
  "key19": "5dwDS6LeaqzevoXE64WyFKQwecjd2YN8QVaGYXatmXuMoytXfLPAb7ZcFRBkzp7aZvKiqEjdoEffHoLatVb3AeCM",
  "key20": "2XyvQ7krzRGuduDeBTFQ9rf92dcxpvu755XgePHJaU6VWibVnqF5P8HASb48ZVYRpHGUgJznLXoFcwS8NPyhekb3",
  "key21": "4z2bDTs9Y5JEomc9wwTTAeG2KdhWcmJr6AoReqrvaDSYx5Gj3TXLE9sg5ekSV129DGy35XEeFLqr8Rsfi9KfdFU3",
  "key22": "4HivyZj3gjPAxfDpDLnN2JFF4bGAdWiyPvT1wY8veApGWRJS3BQBdTBbut2EacodP5mwLxvjSWNh4SJVPYASQUfw",
  "key23": "2d81aK5mmQDjcULnPoxr8faLUx8y9scZozAePU9trqNtjFSSHnunC1mAgdkhiLHjboY9drdJvHmauVVuEsrTK1YQ",
  "key24": "TAAqD4Stex7hwsgZwSstqGypKWvNN3AYfVZZBubBNP8rc9ntDcuYnbAhcUnW4HVmf7Ch4jf8k8rbihpgkifJbTR",
  "key25": "Z7c713kxzWpPgzYWfjCBKZ8RjTc765eQrSVb9Cbdnq69GpcZFJKuBeo1n7EJ1SqTxLk8jfL1Rn2CscQaF8nexpn",
  "key26": "631H3dPfophHFku4vVod7fSNa2Kga9Mv4yVKnmcEi6BxKAkP6kBzpRWNKjDw3tekbVz6BxePBN92v47cRv3upwx7",
  "key27": "2A1rRFX53oWaL5SixkUgshYADs5PZD9pFY9zzuEz8kwBf4ug1L9Vyd7wGdjWnPDFQKqifh2HHsGTwS9P2tkEFhnR",
  "key28": "3b3RF99DAs9gsdRSc8ncMtzE7pckEbR5MwA9wisANynm83KP14VB3hHBUjute7dghSvWejXvpYEVxuzLfnjT8Jar",
  "key29": "5hRNwF2tm6kS9BwfXjqz8VR5cStFjwYCM3Hp8ftNP5DxpQUAexx5u3ZzBadGNsMBJrWwa1Mih8922eDVcZMU2uCB",
  "key30": "2yXBgFxtcWkHtnGoUrg6vTGzLkBMa8z3oF24BVnk8a9AE8dpPADa2xzeQe6ucqb27u3KwJ2Ceg8WhxwpqGjEdeyB",
  "key31": "4rhaGjXS9WhnxFMvSByYDEW3QWKg7iVXPmpPnPKjLUb323goZnNFAGz5LopRyVykj1gKMUdneA6ghYC7gjDcKUsr",
  "key32": "3coUNXtPgRhpjPWWxoBKEiRDmVm5fFfhw2dPJRhb3X2tYiVHw4wkfA5wFXcVdE26TnUSnpYsw7pstDUaBUWfs7CP",
  "key33": "2wswseZGqMy7JUJxVNk4BK9hepBwE4EJ5KAaWmniHJDS6RD51CKX8CtsmK4FxfXeJup6A2AeBJTtQWcvEDbQ7Ytp",
  "key34": "EhDQ8iK4zEzokswhSHuxndkiGdHPF99JkQET9ydkmT9cKeK9nxSJEccVL3Ur3swDhT4R5aFQSN8h9Czne2weqwA",
  "key35": "2dTWyrkvwEA3yDNsBXp8uzgJEuknaBEFYg2ppDRfnRRSgYq3kh7QhZjWK2Qmmm12hKgxMQ99mWe32BPX4BiF8e2s",
  "key36": "4isE6c73py8CNg3oE1RfevYcHwZtX9BfLzE4ghYTcbYPLryza6x5HHNmpA8YqBHWHPsmG4oRoyFiLpjGnqCKSxZq",
  "key37": "T6aAH5gvX6WaEKuxWpZa66MCZYTrhTYUcaZzKPcdbL2WGHXppNs3VxvFEhk1MKwSZHpizqEe8nMwj1mS9BuLHnF",
  "key38": "21E2kBrEAh9h4vTCLePkW7mZFXoR8XoT5gcoUHwidV1pgguDp13Tfz8B7iUYYPKza9xCY1UQr86FMH5Jti1wgcnq",
  "key39": "4xFWdzkuJrsYFMAD9tuPMmtKgawp6Dm8cbyCVPU48w68bDx5KNXUqCgPyBK6fWHvTrbWfxaWLCkLUUV7mK8utrpz",
  "key40": "3hqkPjMZ3QQYhXghdF5NNGPXpUdwt64mo5vJvS4UjWv51j7GyFa5aCL5RvNPr8c4eV3VCtFoJHfPhboRTkPs7vzv",
  "key41": "2x8a8ZFMzYNXE5F2gMT7Acf6hZoewDYd1o8MDz9a2Jy2oCwJ1zLfrN1u8ysAvx41iB31JXGxBBt7u8U7CSj5NwM8",
  "key42": "4E98Xt7aYzE4Cjq7skk3XE5r8sJUyjFxq5ZEhZQy662hZtVBogofibfamyqetYc6yDFr9AGSTaj9b9E73ZXXpaB5",
  "key43": "5uDJwU1peSaMNrtX1cDxJ86tj2KvFidrdnjkHz4i8jX9BBC86AMLxigpMpYZCzLTrn7mRcNYH9DN9ZSwhrjm8enc"
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
