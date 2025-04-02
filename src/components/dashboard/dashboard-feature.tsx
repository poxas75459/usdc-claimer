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
    "3bF7xw9TnHf64aacTT2FE9syAvK9G13Q78NVmE1j3pHyTR66pKc7qNoe19YhVFUgfyECsHGSSWwFAX1USKLqNhHQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t7CsstCHv11FzLAdact8uUgh5WAuyzqwAaak2Dom5W5vzv6KANYKbbh2UbVHUPEckttPxfgJHmFirt4Nb3YyJgw",
  "key1": "3xMkKUdW6dL5A383ts4pX65hiCT5R571HuMxoiyQycDEjHYr92vp5hb9uEFtkhyVkYJBUwUrSX1Y2HYHEw3ePwva",
  "key2": "4mzozPY8LkzpMqXtMrdyxaDFHMvWgicnap5C1rzS17P2Yp5swJ9BY6GyDpm31oc3CQuagtFaFAiQaSEKkPzHwNwG",
  "key3": "5EpvUf6zzrpBW1dCZ8NVPtn4ist4SiivUS7dFdYUCm9s1R8oxQHoSqGcNLypFnETLNPxX1D13c5o37LeKtoubffj",
  "key4": "31JuFf2HY9T7RFZpinwCwb3zCaBfWsbS91NSvTwEUpqHe7hozbRad9dixSqcLKdqxgxACyRMpQWNYL1ZAySd6HCf",
  "key5": "31CSDZKeMvvF9S8R2EFYv6bXAodpv3dJGqhNfsAXLes5WfQP8bszgq8ycupKhuRbDKDeUXgWr5p4g4PBVdpd9Nr2",
  "key6": "2tGtCpEmRgT5zJEad1mhLJX77ytpvwfDMVeiT83AcNEaLNQc8wu4SqfQT1wk7WvFQ56nGzZgg27esZtouCwP8o9n",
  "key7": "5DeTzfB8iFUkHiqkyGkdMQewi6n32Py2htxUJKa4tnyWLd34pi23uNUra8fpDHvsvJzEyEBSE1PubPiTkrKbhT1b",
  "key8": "3jUZqMQDgA2cQtSAvoEEFTVbk83xQYhdvaZvkMseXtPU3KVG1whGsvGVR7gZvZ5Q1Uax1gSnWUBJFNB6LhfxSTS6",
  "key9": "qfC4s2Z5ygW5TUxVVCxp7e8WhKzjQ81NzASJMg3cHRxmhAgtsArCuaw4iQJmv8fnLbW2dNfXSCq6sZXVDXQKsGm",
  "key10": "styBcRYo8UuusSxGpVufHXPKoYZ29RXvAifaAH81he54b4FH9vs5RYmHZhVSUBFQqrRH6R2xqQBgsRffmjGEzuj",
  "key11": "3vaTSQjTMsK18dq6UnYEESYgDxt3yvRHEmcbrDuGWfMTZab9y2WBz3kRSSTdJNtPjtT7cAMg2Xk6mFQDmbonQ5N2",
  "key12": "h6kkp94gUS86mQdhhQy7HpWuF5MrqyiimHuspnGD64rvKhS4zwcGSdCye7RyKtF2goMYtkrHPYNsk6phghAwuFd",
  "key13": "8b26ifUkQN2Akjqw586uGsJLVYM3TRxnAmhU7MQ1gzeQaq4SHdeHFwx6me6vCWFGFSS3rAoicxtHLkhLgp6Fe6G",
  "key14": "3xpAe6WEaBuD3R6HFczZNa3tvzxoj6zXsrdhJggdNDVkxCtwe68H5S2MPVqMKTTvqTgKvbJRMHK8G95cmkPLBb37",
  "key15": "4LrmLRx5ZvNjtzX3aVgo7DPuUiAgDqdUFpzt1Cvj1Se2FjW3VcKdtGyMkTbDfAqdTL788FJ7UXMCycTjSxi5PUC5",
  "key16": "88Ti1to17zvqiF2ZNoLyuFpsG9GDDzc7TeXe2WNcpKQmvXkbS9UAJDVPNdVHQgbMyWcmkor87PpJ6dkg74VhCRw",
  "key17": "4kMvGisoRi8xghqdtzKGTvhsAKuqATUN4k2PoML4M36PGXw48NwTSCvee8SqAFp462c3Uyeqntocbzayykdn8BJs",
  "key18": "5okC6qPwTRznwpCd8hQkzL64MCKRK6jTpGQn3xJDrExdtESzYc79QHZR6NiiTHXNr6J57Fm7cLcfMYf9CraWEjwU",
  "key19": "35MSHU4He6tfCR53qFjk25tcBw1tZ7TwN2ABZ2Ln3yKMy6Cei5EdA2rFqWDwS7NFJ5tq4F9E9yRgj4WZZtrmsaTe",
  "key20": "3uVnPeS9VYVndzGyUwtCaytc8c6qxQ7YwBr3DoUU2yt3JVxpPu2ojPM3BwetRHBqEDPak25BBh9JBG7Hkbkvieup",
  "key21": "5FQ8p9WiS9vVwKLPACWKDTjct869gtuKA1VrByn8RjzEV2zHzaJm4DMBAQHwt7tYzzRbNZAY1TWpJosZAhhHavQw",
  "key22": "5z7En6wDXAttiUHNSFqjmErJ33weZtPbSmUkijGk7jRQUaHEjeWXAiHuXLVmUVE5E18ZoQX3wCT8rxHScVvrNHP3",
  "key23": "qUKQSKpiEohb7kpx2RYAvTqCJ4iaa1L88AcHZGDUoUEqHpMFKaBo1Xuyw7hBwjUTpNNkAqqrgcuNHZMqSRg21b9",
  "key24": "oe7okPpfwDv8xfcVHLFv3wXtvMq8SjywG6Ny1DULmf5fWEwNy4LMQsYQxwD3UHpDjXAdA9cGqA8zHhkGTFS94ga",
  "key25": "Cb4zJt93E6vh8FvNFsv28vehC5eG1dC6Fg315SM7yBKWNtAouB4zjG3KrAEjDsnsgYwaXPM8CaaR4iKpBjCgat5",
  "key26": "5JThGaXu7749tyf7w7U6EUhndZ7GizPBRBA2XK17eGW1YLKgmvwDGGmZ3mNezpqUKCBwVKmXMYqtBXYLZnsMBK8N",
  "key27": "unhJvfBpGpv3ZaQJ7715axNsBf8rseDuafzMy5HEDXNrH3eHbBPxFHB5FdDqdwYE2D1eXxJ8J84RQUjHar6DCXj",
  "key28": "ysFuSB6ZM8mtavRoPSKrRupjhHLczPuL21r3BcvimZ8a8EyoFgCcM1nXqGWZig6Tij1Vn3GCgg8ZpD1QwoicZY5",
  "key29": "5wKM8cLd8jiXeNtS4r5HcbS1DXh4Fyphmm3QCnFapshBtpKo7DAn7MeEimoBYckrMqqaCmLp7AeSVDybTdfKwGGb",
  "key30": "65PQHa3bc1EPL5Pw4hdriJfq2eGu5JxsSr1PLcxNopDLdGAW4PrsbpKhUPXWrWLSWzr8vN8MYEbYjkVbwBsyW6bn",
  "key31": "4V4FKGVPaGtXtBeJ1TaKgzBRX11WJsu4ppCxqAa99GfhRbJVqeyuyqj1ML98gCUSs6caPwzjQBA8rJ8vT8azFyPH",
  "key32": "4DieXRTojDi68NUo132SboU4KtdupbY9dAsnEP4rC6j5WTHqYaZ32kUg8GYFPEDsbaKiNj182ocK7BFY2pfSQjo8",
  "key33": "9Lyj7CdcdVWgg1dQuz6MxjgmnEjFdr84Qf1azySeRCVsnXpYhGpKc5eit4BbL8c8QN41D1njNWjvFwM9VS3SXbD",
  "key34": "3faFA9PHyPGrfbktGaZPr3YtBMviqUSLR2mTW7fPVvmzA44QS35tqjcWvoKTt18d6sKZamyDLTwKT11NnN9C8HHs",
  "key35": "59MqYLcxzq23hsNYM1cAbdWcb3R6by29E6wpPL7eoS8XLu1NsnLrVuH5pz8RjKyWLG3PaqYhxcbyZXmGhB2s3HQE",
  "key36": "G8JRSSHSV6qGZEG3a3MF8inkQbww9cwfvPxYwUfduU1CQnRfGphkLup1WQoZbfxwj5eKudXxCQNFJ1c4t1oamfn",
  "key37": "2T7RKzACG13Xd6na6Etj62eJE3dETQykYwPGQWJxEx4EhCY81icxmm3HthBXaxg88c4pY9MHgJRQsTZaAyMtH7ic",
  "key38": "5rwGFNSM4QaL59Fq3G1fygpeVpohvPPw5BempB72GhtV1RjMpxmvAnMFvxDncywE4zFfBeQjQidppPiMUVcJLUGk",
  "key39": "dekt87SygAgJ914ztgSoVtcR3JB5huUdwfMp8Ny4fiJnLikpWUTtMoaF9s4xegpEUXhRiT1VZnGpr1M2QiDg25E",
  "key40": "Bj2EhUvK1z36EmNBPtmYuWZ6qVZgzxRPE361DuMnRGuEhw4F46dG28KcReMgVN5XkMoJ9p3hhh6ixg5YmuivJqF",
  "key41": "bbS37V6hTWSqpzJjeA3PRxKDZP5ST7kK9YH8QWu4Qn8NKAgTuMYyvgQkxiZoCHqDMnpcqupS9qUyNWvLPpdxi1R",
  "key42": "3p46NJynLSu32ZM82fx26c9wWLCWbZnLFmPDdwjQUGqMs8e7DCbxinrpFYakSfDMLLhB9GoS1UwWmi6vjzMuXFSs"
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
