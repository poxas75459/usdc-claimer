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
    "5cFnUaKUwSTk7SFc73rG7umydAnQJqYHJd56yqTUKDiyUk2PgRypuf5DczVM5b5xhSe1jSEUjtkdseoxyYCscg8a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z77cVP3NkGeH4b7QeW3SQUjUUzmNXEzi2us2Rs5AoCdaFHECxB2PYEQ3mca28EXP9SEET8oE2EnS2dWr3BYmdpr",
  "key1": "65HyqybCCjhvuYroTJmGxjGWFb5g6QwZYE5aVSnWSgYoThVw7nre9ccESgrq8TZGky6VrVpK7RbLs8udFkyAVS9C",
  "key2": "ZTXTLyCJB7SQKfE2ikajwsVg5zWu2kJQF6MzwLinN59EPGMcTzyajm4DaSJK7Kbr3PrxhH84k5AoYUcZgXq5x56",
  "key3": "4dFpaaF3cXZgZRkafy3Koav7yw3niMF5rcfbWpKToiR3Qu3HAxThzBPDQ8jtHvcpia68RJ3LrUt7fi5jwreAeoeA",
  "key4": "5cdGtq94XkoSYQWgf9BbVkXrW9JSf5SDtK3LRtJKYfC6W3RLqjzMUniVQcQZTuZyRfK3TGoQjDMKGuBDH79XJb3D",
  "key5": "22auhpqdR5sKFaTjrC2xgGJu1dRTmcoXBHwzShsDmXsnUz8pHgrmgtNSwGNSDPkocAHAzBUtStgatJvvbRjihbNi",
  "key6": "DEkvC6YZqYBZ7ZLiQJ1onDQeG5iVHgd3vYJSRGz3o4UEwQa8zZ4cHfN83cLap4sXapPAYCG81de45j1VRQVoYme",
  "key7": "3o8Np4n1qQYJGUh6zurjKoBps5GvyEeCikX194RrDNYW6xS6bfwYpwvw4i2FQ9SKf1oKAP8j2QM9FT5kufRDaziA",
  "key8": "LqvpwLAdZ4aUdaey9FqVMfhkUKVDzdiosbBe92Em9qQjKeTDuvCEMmbmjjiqLt5ZfWFptXULBxQwPHWrzjQDyFG",
  "key9": "2bBrztVQ56phTZVg6bUEC6DCW6CoFdfnb7x5warANUB83xk9agGiJXnP1DJCnEZmMQZEHcPw5tPcMLUFUWbNp72H",
  "key10": "LLhGxG5wMa5KhNJbXu6JH9JVLNG2u8ZjtXSRxi7f6WVsXfdaANVxcYxgPS66mzHMFAf5sCnoQ9SCJcgTyMK3aZz",
  "key11": "5e6mY4sHrhHX1F4t6rP2rUai98jAiKrSZfdwygjCXPErtdw3P1jTAd3DokM2gjFGKf9HufW6e4vtAQDoZpQGqPM2",
  "key12": "3t8Wrpxg6TA617hHbYZQhGMYF8moMNfgUX6A9E2mgr84qYK2APai1TCpReKAu79JfdBuUtM6bWyhErgwmCxd3dv5",
  "key13": "5NsEtMY7FbMUXPMo21AfxVsNsBk18vCEYQ5ATY4JdH9ds7Xjukb6nc3b4FtgNvdrxU43E7S2RSqFMnUAH4mXYRK5",
  "key14": "4pVPop8XfXi5wp4mbBR6weQ3uzZ3HdPtjyUvYoxBvcQ9LgzDMuatpLpmK6myDWYqSaWwFWCNgdjaKGvbGxhasFjb",
  "key15": "4vCLtmXKxRdyRC6EXpgBW7vzHx4fFhBsbtXzbNXx6Lk7iVjndKXjFknUY4E2ycdpUyAHbTYRaVKX8gazydZAhqxA",
  "key16": "3bPTwzok6KjActJCEPsUikKdQMiHXLm8dJRhrXsMB4Ae3FQykoS44brbidJA9Fo9n1PTYo78MgKdKFYKpTDWFQt5",
  "key17": "Xq49uRTnyJfhCHa2qVRGFvFgj4rrh3EmTzZiBQV9TLd14Evo2XHjuT3uLnpasbpbRvrPGFAfrpKqWeXdVozpjp5",
  "key18": "3C1AJoXfrFZaqVG1YMx6PMZEphtAtfmfLvQtr6t4WjEimEroBvLFB7wYWx8AwUVQ2pMxdNRa3arg4MoDSBfr6yvf",
  "key19": "2BTmZg7S1fksF5yXo9vbvLUQiP6xK5NEHQf9T16Wg4CbdHdfLJ9kcqfusCDbhH3hZsPLYrexAAh6gd13K3EjSYjf",
  "key20": "5Ge5LYzYexmV6NVwaC4dyY5v8nmLrtxz7uCqH1MKYXaXxKTJdPqYNoUpNKc6nGw2LVzPicpNSRT8MKRb2RkmQQzN",
  "key21": "4B7F5uRsPJvhJWaETiLtYkp64L2WNsbD2jDveZivEJuPAeD9WPsw9nsNrT53RwHcPQnFDo8wxkEXFWkSPwuc7LFm",
  "key22": "42f26W71s2GugpoyKPS1Ls2wEwPAxzi9mcTRXreoJqtUgeWwoQLBUEXP2sjjSn9PULhcU9iVDwAg95CEQQ54J7Kk",
  "key23": "KWJXkrCEU9VunTLHfm7vjuC8PfdCVT5a5EMRMnWBfPoeX7ib4mQ6dweoHdRdNKi1zq4GnJHDRC5Q9PG3apYfewd",
  "key24": "cAEdbULKwHD8Eaw9chJmjobpdSb18WbSWu38r8roQoQRecEgwzVV8EF7dv4UMWs1iT2RZz95ejwQtRYSjQn6ykB",
  "key25": "63xDGtSU24tKS7Cb5AhvLR2gpvmD5XQvx6K9PZDYgBCHgsFarR4axkH3BxVDq7X7B3jTCKsn3Jtf65kF37XWaA6k",
  "key26": "2DiF1PVWTe6SGHD3QxGLw38UoPeBL5bGQqW34cSG5yNFVD7aB4YTbMfMcvvQnBMY5Y8Rtr5cEUppidixyEiuoH9D",
  "key27": "3CQ1xeiiRSjJuevQJsGcg3SMc2jLW6c58EnE4tL8ZHTn8gwFsfDj8raX8Hb5AVARhQp4GkWJdGpUv3v2zp8EZGD2",
  "key28": "ShpGJjcmCfkXJm328aNVMJwtJD3tBTubHtcPpthsPaeeEsWqYTBYgjtTdHP2iYBXfFLvpPoKJiYTeXFcJy2AgEp",
  "key29": "3VkctqHc1jf9BUZ66tg8sfbbsVywzXcN2vfRSYThPEfiL8y9sCVSYdoMW9A4cbqJ9Xw6SzrMgnrvkVA92CLFgB5C",
  "key30": "26STuaWdwKteMjdqGUN171Uuq4n4VLkap2yW67WmjEDQTjKdZ8czfHRafd4jmgPiYey7vEyRnAq3e1157h4KQ7qM",
  "key31": "5q1Kd2TbL7zaPwVf9MxXbTpN8xcpUCx6kiRZLVtEX1RDCGAVoxufmR783T95CQnQvzTAqBv6DemCKhVBcxhwzgNd",
  "key32": "4DUY5r3PDe4sL443ky3Ux7Xc9KmKEMDDSJdVFPxkwYQym69N6KozfTccS2A87CBVYfeJX9aKX5Qw4WJJjf818pZp",
  "key33": "Ufiv1DiJN34nHtCdxXeNigFdAm3QMs15W2C9aEQeTZY13DNLdgHuHmRCU1oyK7qCDrj7VfWR2NrUBNC6WFC6hqg",
  "key34": "4PUogzgFKG8eciqkB42c16WGrqrUsH1SeqQRgx2hKUe1G7qxjCFZJoewrgzCU6uLFaKmxydBo4ny8JckFUxvfMtP",
  "key35": "pE6QJxjf6R1Ui6DYG5qjypDrBiZRCVgJuaAYTbkUJqQmbpzJWof2E1HnSsYLJKdFVv29wgTfbpwTcfHYftequmu",
  "key36": "4asvwYZfMu7HZgqneqKFPvvztz6ZSXNeoxbnJ5dmCve1Cw2hVauBnrewUGd8gwBxbet8sud9R4nVswJK6639qiCM",
  "key37": "5bAHRhrTdYQAT9KbcGSgj2gMD4ziTwaJNhhAkRvBdPpnEmWoEYuSV6mmGKZeBF7RLtUYPRhtRcR6RzEvRn1MtFWn",
  "key38": "2UGCn21yRrxY9tsMrRmHfJPSf1SRpSwUgzqdoqUGc6F4SEiumQ8avTML6yoB7Ungt3sHcP5CqjgqY9bxYbkB38o6",
  "key39": "591ESyxuwyccwKeFMTbGVFtjGmhQH38Fxya9hjWLEDzpzVZYzLmq45HhG5Bj5hWk2bWEUvP2oRMogsrrGGAdFo8F",
  "key40": "5gCpkFdvA5Zu3VzKsNy9Y8k5oXTX4QUs3UgDvb4BivbyWj74ETyBDNy7AnxXwUoMna4dHoQA2snhzCQjt7to3Xrb",
  "key41": "3vZxxVjj1R3ByzLLoQXRiH6RNPjp7rFUcCenG1r3MUQDgjrtvdWg997uaS4uvrTuu8Cf8QMs9fzucPyE8mp22CfU",
  "key42": "2K31XH3U4NdPKgokBpEduyuzmbbgYvfwDeMaQ1mim13aLEbBRaLJMMe1NncsqsisReq13aBowotDDcvs7GKyBLJM",
  "key43": "2dh7BUVpusDwrs8jUc39h6GA15496Scn2buJ3Qd6MwXKsdV6H1k4JkomoMsFtvYeHdEXtwmzzNL2nfwewgVrzNmm",
  "key44": "4eFCBSmEhoK5ZqsJfeNP2xmddNGhktB6dHtwH722d5X3ksfAL1GTL333GonaEMjUMPcrcTKX7Np4Jnn1FpGck85i"
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
