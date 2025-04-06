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
    "4Mv7515oohiNmZn7bqsvjK3x2ybRVyKpTFV2bJzmwaMhrBAYD7DeLx5fg7aetDJ2JPFfLLJPjxtiA96AVD82squb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52dpqrAddUsnEnj9u5693wb8ijDTSjfEozRikMUdCKEHq8CjLQbehWoHhfF3JbhRGpwHAiTk3sa6Pg7sgo2PHexd",
  "key1": "5fqA21mwdTEjs7AwsRkpsGUVaza6dBsqTA15awUYhoXRJbin7JYiBPjXWTKPH9rjT9J7ee9WWLGevXzHbu3tpFwX",
  "key2": "yCAptr192jhoqwuRVCvCyPxdALCtpxPe2WaB8NntuAJxQhX6TgpquRF2wCVEp4F5WmTJFje3175GnyWU7sVtT9Z",
  "key3": "4xCBbsPs92kGm7s3gaQpoHRoXAqecfA7GGNccR6vfBSTCCWT3cwyQHxR3kXXJs5DD7dJ3vUk5kbvcH26Ao3T6Ybx",
  "key4": "MfKU6BaK49UKnYv6s4ALNy3cVPKdwZtKphs8Fju9jLy6SXW5xT7ejTi9FRNiiYwXGpyoYH3pCf5UNDCpN6BqrRW",
  "key5": "D39XHydGAkVoRT3NgZdoTAH8fvh97tzQSGLxKnnNiKA6By8zA4crXN3PyH6C8DFssFu9tMKFkQd5AhwhKNPQtyR",
  "key6": "5kaqRnZeTY5q3tBvEDfzdnsPrh1BFYyLhU86banAH1GEwfMZTHp2itqv7KXjsqzGeCLx8gFzLXQZo4WheNfdfXqE",
  "key7": "S4e3hRv6HbqQhKF9xLgwP7tompRVMZEpgTrdhK9oEVSmCftVeWMYkP2j7YsqKUsJyaZSJSvNd7WsGG4NTkc6Kgf",
  "key8": "4xiPFphcVmiX6PztJbHvbpBjTMWPYCcaDAxxZSBFXHQhBSoH3K7sFtcmMkz8gtef8kxezkn65Ek86AkRdRiqZBAH",
  "key9": "5dT9n8VdkTAq8Rkb96ZPDihVXoKHPaXDsXmFXC2z2zYf1eTMQds6Bnw7dNpc8zgvKZzjekrHL5Cdoh5CANUSmT75",
  "key10": "4uB24uqosPmDfau1qZTSWtjL2pbEqA7LFrJjFXuE5jEkXr7DSQvN6Bm9v5Cse2ZMvokW6v35WjrSg1GMT5f7sAE",
  "key11": "2jMUFVgrjM1NYgSBiaVfX2XT6bTRceXuKkBJEBAPaeeiwrqsDi7Y1F1uHaPNJSuQt8GXuo4w6irjzzNnessTpegY",
  "key12": "4Qq88Mk3sMwWi8CAonFFDWcRn91dH4BAMAmd6UT4RRxcsQU8pHNM6drqnTewzijDVPnwtcHNTRcRVDthreRrrdK8",
  "key13": "2MPHUZX4fegfKT8Q7yrTGB9nTSKoFtLLQqECycfFH3btLpzcMiBPMzXv518d15sNB8dnprYwdiPP9uaHU9YPvz6D",
  "key14": "jgM9ANJjPjdZvSUixtaTx6EBEcv4RceKQajoijFMj6VkSmV1quYdx9YiS9kXpLkdt4bQ1XZ64AuroebeFJp4oYq",
  "key15": "5nUuj6eDAXSDKoAVSixFcP5fxSS18N77DadGSLXAHvjXHBhEKQBkz9TnyQ6dEHc3UEqYNfx49CoDZS4G5qrCq1hy",
  "key16": "3AJk6cJzgdnKaiegjcRg57xhhFzXUfW26PGS7oCe5XrSuDXTwpC2BxD8ejhErqtrESrU5vgbLG9yv1zURgTU6BuS",
  "key17": "3piFihxWa51K1diCdfDdZNEUAn2gFForubhFZ7D6nb691Wt4YpUDzPVsPpfdG3oykjHPHsMmopXoAAju6ieeuE47",
  "key18": "2NQBBxGLtjQ8GestaRYQdrDUyuKMYMTFZtcRqSQCLsuahRN4ZxGkTEPibsYE9HaDcivxdZqLnpu7dsncaqHXxHUz",
  "key19": "3N1DMEqHDLvUJe2jAE5sVYWqKsben67SzEBNvwvtv5AEknj1HAPgwMfCNU85hLT5DHeoUHTyxgfbGWA2nkF3FunC",
  "key20": "5CxZfMsvsmm1FKSSE9hNwe3F2E59KpDMcXXRXUkMGkf3dAREubpBGHLSuMMFujArcfPYU9DtFDUH5MLaf3jaEXvZ",
  "key21": "4RD1Be35XHAFoYnAjAUrimV39XBYkZkRMNzfDbKCmndfvLaVxRWAmma5j4nGxVouTJytwMiomunT86KxebazbwDe",
  "key22": "3iaCcJtjNauhSwKdiSFHpwypngRS2KoRPoXkMrvbqyneEHLg9EEhcnidXDgc9G8dBugSZqVN47eq8sD7LippTsQM",
  "key23": "31wKDKi11pvadvUxFLEnRgkUJuHcUUFT2ioiHNH7KoRWzfG55B8TTSkWwGH6F5eirY7H8AYR46C4vCxrszSHWY5j",
  "key24": "cxnCXRK3u3XgJqqiG631oBiJtXBJku5LN5gd5CAkRgo3JTzTBFHBGbhH5Qxor8KAMrsT5d47y8HJogB9u8n4V47",
  "key25": "4UTWtjzkr6bZRV1XpQkB5XZn9RKepk5eaXwsy1uaXyz9XksnhZZbfxZmwfoXmQnsFUMvGB7aDyBd1yM5ghdDg8Ps",
  "key26": "8VA19PXCa7TREz92vdzPoXEpf5DkQpgzLwzgGGpg9fjWRo6GfBLrWDZNPYw7nA7fa7VUVeq3KsEC5Sq1cZSCzra",
  "key27": "5vQUJjS2nJa17CNZXiKKoiEPC2j173m9pUaNtfF8SzWenc3Wm5dAcCPfvUDAc8cT3ZQAjCntGAhDAgo3mxTposW7",
  "key28": "2dWE2Tsdt8HiWNiZAxU9F46jW3gpQAhuyupiQ2WfM4Nywu7XCmvA2guZHgsXxtCuWC4E7DBVNxdrF2Q45CmvtyJA",
  "key29": "2V6ccjkTcfoU7TPrQYdFEQxw3tXM4Sx5yNDmFxLWf4dYSj6oVqt1ZLQKUPas3DmKZ7EfUQikPsn623TJWTCsEBWU",
  "key30": "3GsoJ4bvtCRkyiTJuD5F6Z3wUYxjnskwqpKFkosUk1pYhEDGwjypeDRWA1BA5J1F9KBi6wwcYkf6csxSpY8P7WE2",
  "key31": "577k2sAq4iLp4jjtDd862n6LJPCjzBVyZQZsj8unN4H8Yh5HWffM94MV4XgayJvME1DqRKqW1eVQZ7F29Sk76W2d",
  "key32": "5DpkiNvSCHEe4JVgAYP94H2C87C9H7bb7DcDmyrCEaUPmaeohbZQnjNhfUywMoe77vECVSmqJkdQMch4FZFfvsxS",
  "key33": "49Ke8DHQDK1nFuG2t8LUCRfR4bzT5atpJeCKe5AGk9JRJeDHLSaakSdHmAxKsbUwPkYNjjkXXfjJojThHJPcTTw6",
  "key34": "5shq2DMpz7oHGaxtjApv8CL8Bdz7FKtP2ouBBz8KrQYhBeY8zXnXTFa4RCx7eGDYVw7yDqbFZuEM6wVi3EeHFRd1",
  "key35": "2722DN9SxinsZ1kp1bpDSxZiXWWMhBgXm8qmLs2vJQnRJ8uRzVcVe5cMpkqjCdj1nVMCcfb4Hywn6kmqbw2e98Cn",
  "key36": "4YVy5kT3WhEPFkKaFfRdKiMCMjn2BxARWWz5pcJUK4weskcpcdfQwmXA53f6HJx9Pff43zVrYr4mDnLab8XRFzaQ",
  "key37": "4eCHL3HqQoR4SoyDcUjCEuiqHcCNySkKSUdryJ5qotxLS2C3qRAwh8ycZUfuKSdGYngLzWbHMQNeYoKfxxDAMy9Q",
  "key38": "4PiAZp3eXWohmzZfaTXE2u9mmtiAwdcKWoN8PDDBLHRqjCfGJu4dwsNgLpJj8JYsYuu1HviBDMyfx94LUZUT8RQW",
  "key39": "4qSUBxZ1UXGgwiEzRPVtBdBuP7FyXCB1BQcS8hvLNUW2fe9DfJ8tkhNs8yfvSj3jd3FYFXRxHgysbVVqM8p3v12n",
  "key40": "428YH6nEyTvawAmLANee6C1tZft6o4rhXs6ZUwMNhCJ9xQz3HhCDeBYHm6dUN1GHeTJCnq2GWa1mCCzGWU4Qx5KD",
  "key41": "P6fg47wCfJ7Q9fMfxEm74fSt83FVKqPXDt8KGvPyPARnVkPPXebndmvJS8BVgAUWpbNDoSyj61Xz5Z6MGzoz7B2",
  "key42": "61K6rrrq8CCAxjdMCqWa3NoPaE2MxGBA2nymoeLf5y5eUGCCYHchFZUrbufF6pMiU9Q9BZioQh3vAzxG1dfmnkf",
  "key43": "3ucs7tAyGUW4chgo1HEBy5rmNmdV3fC2sPtMLSQJpzizcccueXTgviAHaaDT3yoz2oSaFoeEeNYZ1iupaMzJU6cf",
  "key44": "58vFXgWJKgFNfNgKcA3sxwr4JXh6HqWsEu8GQAir6GZWFAguDdBfcvV5vzcvnrfyRfaWkXrzsZPwjNn5VVCriyF2"
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
