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
    "3va96wzJgvYcT3nGrVmZMci55ATazHvUGF1S4TCWT85LKDaJ6JRmcKKy4VqnhVhXHsc11Nj3ZfJYxC7iAHsjKc14"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qw3G6Q3FfAbywcpsYh52pwLUbRXMtivKddJBGrVrFrRw8Lx9zWVRg1wzDMPu1UFRasZL7xJYc7oMFTtTTw2NpiF",
  "key1": "5bxN6THNkY2svRnttw4Sq2eWHYVqJXU42oXRkjky2cMFfBPxHym6RYTp3fni1gYfitBgJn4pvK8DKs7P77qQ7U71",
  "key2": "5i4zRoKmkhZ1wqDnPqDP1NfLzia3KWhuSzcRMQJSxiq5oESeHCtmgL36PWLB9fhXCnLmkJNbXWfTApLT3Yc1VQgn",
  "key3": "33kYEQuMBDpuWw76r7qPFDnNWj98jiLhfDqMPnbnSb2AKHxAKBceFKgWyG1G3uE5K89ATnJDLxPZMPX4JuJbvqLd",
  "key4": "58c7jzRf6fGf6Qe6JegakBREn5bG2YGHo1Aot83CH3jmUDxVBwf12fQgdpB5CzhH216ntsnkePPZ93qP8g3xro77",
  "key5": "2r7uo22qJwEZtV3pDWz1yeUzMYPrATUZAnd4pg7jE8MXVshfc7cLES18DQNfbKp81DkwcGsBXHnP41epXkS8XUiK",
  "key6": "4KXxMVS937d3oKfDND3vp46dgrdvLubXrx2BnJg2Lx6Dndox1HuXSWoebQECxpYQY2V1ucdhL4dU4ZcnXybJx3GG",
  "key7": "23BoSBBGxTsWhcEFmB7P5YBiLamPL9MHz8L931wN66hZhhpevunjjVtHbJu3BQ5yBb8A8DfaNBopTVkcL4pc7Dv2",
  "key8": "4tua6mNFX7x5iCFuUPzLb6U9X8CGXX5LzwoEF4hPL2WzeR2F32z4NiXvnerbAHHBPAZWW1DtkpJcNPXc1Lu7JkZS",
  "key9": "5iFCjcWRyVbkjvThMGSKuHY3c4PukmcBbabJ9xS5BcB4b3j7gbefDG4eDKMp6zNVTqev6dgcK2CqXZQkUfDqyrFX",
  "key10": "1kyLM3thHZxwjgaFR5TYSGSzZPbmFBUsKNGxjTwPw4M6wsBNqjggtjn8uHxcq6PxhPm13rF2ssiuS5iL6txpem",
  "key11": "4HitmuHfT119rTWWD2ENbsBGEFmbohbyQAuacpLzmbthR8ahMjoASNPR8jfwbWbxquyU5bFpJ1P6YZGRKAuLEG2U",
  "key12": "4v9dJAuULtAPXJp4NetmA7Tq5pRWCQqVhAxaQoLuFokSGG9s1KTwyGDJDY4zrgar9pwMwoYvD81DmFUJdwpJwLth",
  "key13": "22NJYcY9ojxmuSFGbYktdvWa2u5kXRWHUxwVpqrNY8UuPxayaDMBmBUi5UHD24im5NSL7STBijUACjLLPZBmqnyK",
  "key14": "3mmUa9xmiuKzHYH8jwtHXLu9nRtLVmBop4gnBbKu2HnbgtUyT7EZZEsyWFJingA3hfcQCxmKHJQMDqVzpQCeQXt3",
  "key15": "3okwxKsR328uJFZYuUUeFyNmQayhTSSeWck7u66ddZVQADGaPHrdDV6G1LAy5zht6cNCePKtxG19EDa238tH22z7",
  "key16": "3Xk32ku8W9s2vd74kxPZGoFJi3zcWycEHWCEXEtuwjqjv1sYaDKxtuFut24MfyuoYj3SqjhRwhsTQ9BND4f88tt4",
  "key17": "5JwFHxcGfnnTsMZUki2v7BV6Hz4SZEg9Zo41mUb55psuzQekakjS2dbmacx5oZt4PBnNYkc7psHd3EK6ejbo49ww",
  "key18": "2ecLoss5rEbTQqBWdMCR9uKfg7TbyA8uy78KVXpQdu1ScADyErHqPyKp9eyaftfyTuxw2ReYcCpSRpbYGHSaHYP",
  "key19": "2nRQL3yVXLWaoa78V9nECde4BeL8oKzbgat9yLcjm35jjxCQeJCXfGr2ZKFGssUs255HeYfRZR9bZTCDfZzWX3bD",
  "key20": "daXtR7s2ofCo72tyVZ1otUzqQ3B2LVnmoRKovKcHkodpAUAQg82VGxrVFHHMhfLX9v6vNEFc9jiGGjEtgkznqut",
  "key21": "5Kb9F9a9GxHT2xMQp9KWA3TJLKfxPqAq4vnqKmgcQpzjr4raJjAqVN6r6W93e2Bv6HLTtrWQWteTPjSVg9xArcQs",
  "key22": "2VbrQYN3TnLz7AqYzLmhW5NiKFtVBAxxKuNTKfmQ5jpncHNFBvfrMuXipPkFCgTMv3swK7SVgkefFMmKCv2Guxgr",
  "key23": "5Di6Yhto6iCA8uSZN9mPijZKUeZYnDuW1Aa59J7KFD886QndzeMjaKTFmFkqsuUzvdWtpeDbAY8rQqCfXzJh8bUL",
  "key24": "BrgHZLFKSQaS9NPDZCGgSJM3op4hLB5vqkGF5EARqM1aBjnBhiRiGCnVfAcmyKvXGv5cznkRCqiGdt4ZLsEjyvS",
  "key25": "3NW7Lq9cXdvapfcggopsfCDuUCmYZrW6SWw9myBScnthsJ371rKCAvavTA4sVTx9HmRTzxZkoVdMFuZQBJXHCJX3",
  "key26": "5dadLxmejVNfoCVuuRG5Pa8wyb4haW8Qh9DtUtpwZLpgTKCpiRGcBb87whpKpinBuC5cN8PHWYB5Zd3vJtTecWhb",
  "key27": "59Dg4ZM6dpSqdSi8RAXD6Ba198zuQgSWP3F3HCbpajSbqzo2jR4Pu5oLZE7SWGAiVbynvMBhrnLrgh2tUQ6buNBa",
  "key28": "4pREF2nKihzqgPoy5rtYesNSUXEcfE1QMaCNxmaSkMKBHsHisRuvoB7xHZS9KUoXVRus9bbQBPJdmLw1wK4QCLjy",
  "key29": "4yZSzpkv9ZmjmMWLNfZ22UaL2hmUumkvywmCjwZeReg7fRVyCoqnEEXuuvMxrN9CviPaN3331aczfQPE7ZURdv8W",
  "key30": "4Kfhn5663eEG5SffRk52MLdAXNtTisvrS8q78G44vcqKBJKLmgKGjcbpx1AjqhcBzFzadTkGddwzHix9rb9P2u8d",
  "key31": "2sg3vgAAivLpupJAyuAKNVWbWPbvVVhfBu5jhWmfen9FGiVn9j6CYNqy5ZH9fUZS2KYnvL8Nk743WTs5oMjDcvqa",
  "key32": "3PZQPdrSbXHQyRiKSzHydYs2XftPpY5mbmVDeX8grLwJUSqqWQ6RbhfjUdckREb9hdjcsx6ZRXhs7fPJ22B7bmp8",
  "key33": "4Y7qk64uPPrsE2c8Fuxi4zv41QwRcZDkkeEneF8XsNSzrcpaXsXCV4csLhyh2yYj5EPyZzTeixacMpx6hZshhM66",
  "key34": "FwymXRZcfRx6UiDcC7gDrf8pzGQx29MkwTvL3jz6YCEmWhuJQGETv4Xo5XRrWLbuFMaurXfSW5HWQVnoeSV2Lmb",
  "key35": "5SQya7RK6yBoZCZ28WUEXLetuv9tTJ7XAHnF2ucBcDXbjjCYTsyDNnBd18fM9tMGfyytJy6Z4kVsrswUJJM1AcgK",
  "key36": "3Q5KBCUdsPRJV5usziRR1Sa3xM6Vx6nD5Bj4HHWtsWtVbsp43sFRPjJ4W4SHCeYHNC9hPPPTC8pvapp1hgW6QB4x",
  "key37": "4AN9FN7rq62d8TUyt6AnHXXJeEKyVc6btWxpbotybXz5nNoG4QZ5C1hAXUPUwmaS4iaBF1kUg6NoDm5cJEFDfyHy",
  "key38": "3fECEQY6Q7dMXasCwRQgiZMXYscVioweNBP6frivLLHtsfJYVvubcBRinWnkoMJ9KkWjBVtbypvKT9giCKMEs1Ze",
  "key39": "34WKp5wcp39CDqnJy91M7wHxUNvkM2vuwJ1RbaGCdPwcs9mNBNg88J1ThGRiDLeKUfqbNCZooGybECvCt7MkQMsS",
  "key40": "T1T8xHnzuXcWrk7rN611TWGwQFLsr5MxbkMwssFRpcZn4dKBzkMwcCpckJufEYvYTm3ufKwqv8uE8YA4x7srd4Q",
  "key41": "5uzuME4LdEvpYYxAmZDoitXvcf9F6zw9Lq6BCsZEk5ys1qfdvy5DXwNi2EVU2HVFXrm8Xy3Ccfnv2MfgUaFdD8yj",
  "key42": "5P6UtQ4gj4bGEFnYMZcetZHccGxpR9v7gdBcBnaB96Mr9aELBxUHVcPj61S28RXSJoXgNAgDebhtT4cqwtUGvcms",
  "key43": "4cYW22vEqo1zntk3GWCeo4XkE97i6dmQZwK4WSaYPWDNC8ATeFgETJ9JNCdKJHWTHeRaGtqYQkmL13jMeBzQoN8q",
  "key44": "wKNYuvZJZLF973zqXvHx6nonEPb87iMoSfYqKpF9LZctD7GcM561rGpwHYYyEsCixYaMoCqPyDzERgZzXUp4QHW",
  "key45": "3LtyMDVkoG7RPqghyJrjWo2bWJCVuX6H8yhVDFnNopZY5fsSqpcQNRyuBrDauvLWQXPMT2TSaHZ9an6BH7P8HHHu",
  "key46": "ReWDDmGXadjuguVfLHQ6Pxztp9G7KHjsukJpNdee7QzHExVvn1P8VySDXiTmuMCc5PPt5FrkXHJibSWyLpHLknc",
  "key47": "JNFC3yy7xNRPY3bRcBqs2n8xaZZLNhnTPNHyzfJ9SJdrmkB9i4bogvqr4kHMDtYCUHwPq8oJqMhTPowtcvKPiEf",
  "key48": "4NzcNNpdfDJeK2RUuaxebUc9HzFA65idTZ7gSrCcmzRwsPRfyszjfTEdsu632pmLrrNLxbZXsZt67YQ75SDuJYH8"
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
