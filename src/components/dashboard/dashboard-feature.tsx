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
    "2iXHtJ3jB6uFVcGEjCb8oaVA7UuHQaodeoLdECXo3JQZ5mMxFd2RtmSep81muK2P81o6ztZU6V3v3C3DGQyjFrCr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d56nNhFzTMYUSsNuPa8fVddKUTbPNcgANPnhU5u2tTvzAbiS3FbcBwWBUfXjbsrSv3EVCXAa2GxHEDPNdtuw3d4",
  "key1": "fGHzNhp158twZTpWBEkF5bdHSi5F4ebfD1N8JLftHP5iwF5vevL3ePcJak7tnLg9Y2BMVpnjou7T8bfEUn1FVoC",
  "key2": "3iLHyqs8pnBNi1ruGwbxAcXFC1FQPAbF1kG5jW1tXPXdMcK6sqgQHkbcfXRwPoxVCwdmaMdBpfFkeStZuMTwGHeo",
  "key3": "JMbu1dv616RRmZh2VWrLnXgwUpTuMAe8DSJkeBnhy8YCo1f9Pb6qZg7ip1x7kRDZebtGbfye6ctyRfqxUEJr6sj",
  "key4": "4WJg3R7hW5AkcNUwumCnh8tentsqzbLdh96vbXrHw923Ez8DzeJGDw3fQdEQHGHMwAu847ThUDdWwem7Jf9pDdXa",
  "key5": "xcZaXWmdUVfm6qR1uK22JGWfH1J1BK5WqxkNBsB2Rj9xxyVZwD972YJWXgqs1Y3b6GXnT2gkXfiouqQRHqWSu5S",
  "key6": "29vVTF1VcEA4Ry6UmjkZRpCg9TyCVU4EWfY9Dn8EPAA36k92FF7bSwxjDvavahmfX9tz8nKYL14r3DsGHgukh9od",
  "key7": "mrNvurZhL24tE9kouZfBb3MXkZku6rABQYciCSCYeoz5aoEayrLEAUJZe7ZZPCMrJn4vZGZQG6srmWHVdwJRP2h",
  "key8": "eaiAmB7gt1pRhAeesVads2xaHVxecGHqLFfnq8esaiJUGMQBFVZJsYWWsyASo4cYxi3GDUm9fzD1HbkfLDgY9cr",
  "key9": "Jtg2XD4QXXvQR7m4eLjx4wj1a1P2vKXUHtbDJqBJ8sz8hXAPDswqHWFidVjEoXkDFewzKPpXHBjPrqn7GHU5fPn",
  "key10": "2pHYoPYMg3fgDzRkdHzmFNJGToC8ZQtNQtxcJFPHqETGuRK4FarvfanAe5KG6MeiRRgUuducuRoWPsAqUgwRemwk",
  "key11": "3TgeJvfmQbqELVZgLNf7cfjdj5WYRdk49MykVc4t5vhecJzo5QE1E15X4kboRCucrEi7Zi5pFaWRM2r35bYixuVp",
  "key12": "4heBZfpharrWpKc2eRGioeKqiFy7bN84Ax4BYYhGhLteFP7LpcLuwPo3eZDCvS8cvQaHt1yhJfeDSNKFPzV8pFDs",
  "key13": "34SrynvBKUM1y15jxVFd1eRffsbRA7mXtLetmqDyLeGVubcywpz8S8w1Hv7Uiwu572SDh8Az6QiJvpiTWyXwPunY",
  "key14": "q2Fdjbm3Rke73oxGn9RHDLRmS8thkX62FZt7nFr92CCnhc8maEqiUj8n6csDc5zfJonwfXzSiJAwY1MKMj2BopJ",
  "key15": "61RR7ZqsELZLSKuLqNohUwysaob5mD6gxXbdcUeSRBMeAHuYgDe3aQhMwoBgmZBwLwQW292jr4XMzL7LQLArBvMQ",
  "key16": "ZpijuECcQS7sXsM1BoFpNa33WiTWQQtzDGz1moJgYtWoEwmSmQvFUP88RfxFA84dNDacJZ1hXbdHfyWoSnngFnM",
  "key17": "4MZNuWYtjahsTGuf5esz4xA6NG2Jjn1CiXrox2PVYa5MxvJKZmpKJh1vyGR5pc1LMCd3hv7HEHsZeJCgwKuHkqkx",
  "key18": "2fUA5mVr9XADGiRBuUTDorH638yWEd9RrjrudXaoWbhy6sEUcP53wrDqeWS9FpWZf3MVpyuTus2pVKubiRsdtUFU",
  "key19": "33LUNLzJ6dZ861XQYmBgxjUSzP8cRZZwJWrAp9BfyEqJUfJF5eLX7U9BHp9GrETTzCt2fkHmCTLupdKgwFC8HVoC",
  "key20": "31uyRXjzd91cY5cc84rudndfet5xRKQW9zsnSvhvNWcwTmAa2kMW2WLUwyU7uzAqPzHb71iVrtAuh3hWYEPJ1cEM",
  "key21": "47uAtg7ybCRCmK6G8CpC3AJTqXgxeRakfFTWDjxqqYenAmVjNZtDDWRWQgVubE3zBWaeSwNsJWbr2dj4Jvyv5fzM",
  "key22": "3Cbwua4UYfYihXZLuoARnPfKi2y181RGgucpNAqNh1krDEXaus4xN8qZavtSdPN4MS1qehGGviA9jxtyigBjfcZ3",
  "key23": "55frP3VkPXvbVYyhpevfXjcjTAvWGxZhCHr2B8frJkQn8vLVeQRbdbK2NoESrJYyxk9jXs2UFsHykutRRrCCKHWW",
  "key24": "4o1wh1ywYJW8K86EWbGEPskpi1kMkxzTo9tBGyEq2QTS78ctyEHDj5NBcUS9MyoH9Rp9zrqc9jKERYDo2dw5dQY4",
  "key25": "42R5pa8pSXyxwY8SnPCSXYoRBrCqb2XFbQdK1kpk2vUKx6vrDb5z8KFRQwGtnwbpRjGLzBW3ZvLMGPT2LTHzvBCm",
  "key26": "erHhQLdEvMyytNq9CUzWMTC8TnGPYe3NuX4TQkEcknzQrjKxMKZrLz1UuwfqQ1JWmwD2Vics6iXLEUJ4rFVBqxo",
  "key27": "2kZ7sX5uEvBBoDYW4bWAwMTdjEU1yZddyHts9D6DYWBnnapeXKjkmKp2JGweK9FTDFvjx9jeQW9j43A2aAyAVZmn",
  "key28": "2NPKBZj1u8bFNgbEk2TZmGqt51UiT7U6Aqq55PHvoiZpKmrj5bARjiHST1yTvLAgbhpisFm6fyK2KBPDq1oTCLzZ",
  "key29": "3JCA9uNNhuq7PPVq3qVVdceCL134C6fYqfUFnUiGPcfAE5MT8L5myFFXZs16LieG6a2DBZ1eSa2RUMo4897AMrRJ",
  "key30": "2cvUV6kQPBHB2Q2GqWNdwSzf3HkQFaG2AjrWiKqffsh7AoMuyvkY6DcjFHhjoCtTiz3cxNw6LtN7rRXxeqSrqiDn",
  "key31": "2rJ96ia1s7W4NNpbt9VmUb8EFUKPPj7wmvvVPxZbpjfTLRNugcCFMc6NbAjqEw5oXkUV76m3UiEX4DP5p7QEmaaE",
  "key32": "24QN3gBMwXN3d5fwsuFSQjXaiaAfx4TgUrLmdYuny5YdygHcknXu3e9bHuznKKUuobceLfPB2obrfKWYVEnJRDiN",
  "key33": "81LbKsKVtRNVpPaVJgsCYTELM2KEfs7pdYjBQwajXPG3GnWkLYt1Ch8hKr6E4LesgnWffssPGvg8CF7sbgNsMcz",
  "key34": "2J1fAPM6dVNubxeqqskWHyszuqihywJRvJ7kjbVUXThREpfHs11GRJ1YZZ3vVEnWHY1uwTfCMS7eDC2XHETrucoD",
  "key35": "4xNyNxAastTwDoizhxLkvMrQn8Vr9qnsmZPx8poikKSuRYNj5pJKgX3jvQu21RXHf9pYoZyAsf8pai3bqm3dUo4u",
  "key36": "5yctJPLA1FXtoUW96b471f9yECJMqKLFkAY32pWugo95i1DxTfiLCBxVpLVwYGJ6JV8A1E41265AKfZqGojPUT2V",
  "key37": "4ncQ8HrEcsaw7rXoFJXYCwkrfZzEkX7xQVWG1zbd4QBoji9ZeW68iCdAqJLTohD258BvNvyyVqghyLdHpyWAtpmw",
  "key38": "2vJsWQBTJZA4XaViUVJjrZNyt3yDeZWwpisg3Nn7m3veKctRqnLF5CrYaRbmynvXhNNWMbTiyVkA2e4b66859dv8",
  "key39": "54GaT2u571hKCU81utBNBQQjRUNgGygChExbR9UntDMrWZJ5H1ssxPgxSdcZADJVvqehuC1xPy3Z8Cm3XHz8KsvE",
  "key40": "3AkUVx7jLKsTiTaCr15h2ybhGadF2GMijpZpcQVFryEVkUsYHbK8WVN8LH8HrZJSPktBQLwMr2NhuwjYmiMHRzWJ",
  "key41": "2ff279TNNbXAKj6i6m2nBPW5Y9bH9gHv6Pk6y3Vnjo6D8D6WDcqPnqpHankwE4MnPGCq4253S1Y7qRGx4fCap8Uq",
  "key42": "2ytQMPVWVEG5vsomF3Csq6LzYMNcjH6sxts962fDehJpBWocB4rcCN9KBDxXvefzzoacJPmipkHFQm5RHp999HbA",
  "key43": "641YgqKbLufyPD9wNeRJhcNAjT1HYudndZgcveTMPgTX1aiRMoFTwJ3j1sQH2cxt3YAx5sxvDpNNc4dCSYAtHRBJ",
  "key44": "2rcgCinFFAgD2tXCU3QV5YBhjH9GDPvktFnPMtfmrxGXoqco3WKL3WRiWvg39EnPNxmQ12kZJd1FVpMhXKUV1Jo2",
  "key45": "5DdmeZKCMD1GvyprbV12v7kKhs2JkoLHyAhGppLg47CC5n1AaipwpfBNyPRSsNGmN4f9pqQqfngJeRvprRSjhDzW"
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
