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
    "2DY2m5SutTvyd9wC9eDWpZqUZ3BCRY7XDSLb7icFyR8C7ifFKJzaifmcvJ5XtV1y4kA5B8xEtA6gSQgpD7gR2auS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gct9doa9KTxa52vy34eUwysbNMqGqn85eewHTJePQ4KvK8wGrp3EPfoUkCtzmZpVki4Jw9nfh3AwxQ56zv9fecW",
  "key1": "76CvQxtsMNmGayvcfT3RjqjiU8us522EGSaiAH1t9QLCX6JCv5476JnP7xsTTVyPx29Xor6f4Cc4ZkFu5Pa6xpd",
  "key2": "5zEDC9Av8UUkHMan4BXR6ahLxxwSUP72JJLoTKbB8o5ziD8woFHkF7pKMNMwkiwgcPKaj7ZwZAfVCPVFcD4hvxdK",
  "key3": "2DApzkx7718nF5xhnN3yjxcLmmLU6nHXKgtebeMjzLW3WGCVCNTgpH6ocGhYACPJbqnL7qjQFXZhcoCumJyh6Hpp",
  "key4": "4xuPv8Va1xsiF5jWihMKirxiGJ2A2iapNN8T1a7jPuE6dh9MHiDVxLiqNKP28rMoHYk6pELzKdVEYyF5dPq7cLHs",
  "key5": "5jH6vm6DZ196ALmEy5c4pWrECvSpi1jc7SwR1uia8he49NWAXNn575dooWZSBVJXogjVVBMSE26Uym5cd6sLha78",
  "key6": "3fQMLSKL7xL8N2Sz6sJtaswPyUn5Nj5bmNfdxyoPTjeeTduzV3eyLtr62Cr3vhKK99bwocxvo2GvPZGm1HmDoSew",
  "key7": "64cMT2MjbYpHUefjqWmPBUSVV5hmrwRCbPwUNZ7ASeHdgHFx8YCtLC64gCAF89RboAUizmC1cYxDf651azJuYmhZ",
  "key8": "HQCUe6YHe6n5SUALDYxieM3W9hVGrGsBtDJyfjCvkqMoYdMLs1uF64cqjAjPtwx54CHendaTN8DMoVXqnAz9xXE",
  "key9": "4z3xk6tTA6tPPF638S7KBCtRz3ZW2S6e43idZrp5jFxbAARc56BqEnQAajYx6jzisEAad7eBZ7KHxhTDS8Vmy6ou",
  "key10": "zZqjrqpomo1Q7sFKpVBjLYpRw9a7R27pMZVRyDpCc4X4fnhrRxr4PYznE5m8A34ijadoL3aPVxmR96a156gg9eZ",
  "key11": "26CLezkmJHWmgCsvmVbRP3EzEbcReMLjZEi5vvs2xHZ9R52H4w9znuaGpDiTtyhe4s2PA5qdZm2GixfJVM9nWh6V",
  "key12": "41HTFZpzFtPy61f5WzLby8bzFHu3pVYqoWvoeAesokxRtoV9xXRzHK3qB5xo96GLdsvZB5DYXieTCX17pEUXKgtT",
  "key13": "5uby8WAM76kX5kwubHiGnk2g4s3CdsFQn4gdiSrZcwUpJXren8oNZcFzhjErbX3ypNAtiwcg4bLyHKAVpzPynkHk",
  "key14": "22bjXFeuRgHWSh7bWaiSBuomRadZfXpQ3VaERikA5CtqxYvfkMpJ5f943pxEepteRMCpaMPg4XAR83MLC4RKarxG",
  "key15": "5FA7KuVhbQvRratM7JY7ytQR6qBATuC8f5Y24WD5yUDEPahtJCzkRFpT3GQrRZzDzwBmMTbyz9deYdpc5cDYK6kS",
  "key16": "4xHpfg1i5Ema4Wid2Wr2QxV2Hx17NCi8HLLHrn1WaX5Jjb3jSwgSp2RyEE6Y58HeG8T6Mjk4jn6pCjHNhWjdB7gZ",
  "key17": "2GFfztJdw9jS7hPPeKs3iisVxKb4uHSKYVjbDiL7BMqmAPqqNXBmPYEEvwytyiUzRpGQ2pFrVQ4oqWcdfLo4sgJU",
  "key18": "KDzkaY3cAM5TUM45pi6h18tmEUwYvn9ivFS8WL9VzpXeSXBpSaWzdA7RrJWbCcjLTK1LJCyNaYx24gX7P4copS8",
  "key19": "2Cox5txJe5piFF4mVxwuWKgYKRrByHm4kgaeRa5WL4318FeQkTB3RGyNL9x5fRSgS4T32egyac3N41omipkYtEen",
  "key20": "2X4Qh43vqnzBop7qE5aLyFy6GSfqZPY7j498FCfwXPNYs3s7YWH8cphM9UMggaVoeiCAbFcZAM2WEiPLeuTDcHW2",
  "key21": "4sc1pnu6wUv5Fd7FrZeTGqNLPQJghHW5A9Lz4jcMDPBgQADmtSCQMuGge2pZZnXFgkUkA4LHKX7beDhp8WAViLny",
  "key22": "2B1GFB4bu5WtFF3BBa1GuiTr7UtPYwyGpRpyLckFLBhiHW1YcvVXA3QoDknd2NqeTET9W4B33CdprAWwt6boy1JU",
  "key23": "uwxeZt3C3yF12YxRPVKi4N7bD8x3pdVGeEBFiYkMjpupJhRXAHrp7xmwJ1EqjoZrEUYjqPBpBnQvFgLCyhBmXWN",
  "key24": "5g6nhoAxZLDy4ePdmQSu4LULgXo8RN3vPXvEXH8Ba6Xe97nKevgdmR4wvmVCC85kQLjApybKLRLhG4PqGvEB1B2K",
  "key25": "ebrNx6t1KgqCQEeceCj4QrappqLgj7VwkX5urhLjauweHsdpQdaYNBk9FXfgazDtn3nqmFH5WHzWg16DDixbDCW",
  "key26": "gVHos1CQHqERgGhKVdY9PFNhJP17ngRdj435uz811iAJg8rB2Abi4bbk4yHkej4r8byWZN1ign4CF78ik6HPuoP",
  "key27": "66FwPVHRe2ahaSmYNy7Nw33wCXgbsakiSvngJx8LjqqQNvaLdSs1iEJ3sHGyqKMAbtkQDqWnHhKciLCe7eiAvpQY",
  "key28": "2YipUDFW3Riufv8RL6KW86TjkEb6picGb7x5Gyn1NqZvoeRGzzo3vXKWVWJf1RARDijbKgDSqV3tg7Zz3U2dCDCg",
  "key29": "2F66Pd4ce3bWXewcB8HHTsbXXPas6S38dGhgrqmQDtLME6GaHTxte8o4nVd4yDqmyNQQkCtxEzFzqfSChsE6EufT",
  "key30": "3zWosbjM38YUoNqSLxSnfDTo35u9dsMRPBhiUMPai2BtEjinnGNaQiBiLFJoAhAJgWFrs2gBb6z5HrGHocaWMmzD",
  "key31": "4cbfy4BiXVgz2K3Kx93BHsbFMbLqxBcfF8UyU7oUmBFWGtN7mBX81QUu39WUtmcmXqh4riYBhpMNvPXAnqmEZt5r",
  "key32": "5F5gFsr4LsLUWrquoWZzHgEwP8sNfpd1HLUEA9fmrwSvXuwXuiqAXGmSfVMy1vmEgjUqqaJXWpjTFipfy6J9MXJ5",
  "key33": "3zhtqbpMrN28bQjhSEb68J6F6tq7G6HZAp1xa6uPfPYwsCKjqRJb5sShNQBeuQNkr76eJdd7fxsUXKRbnpMWr3xE",
  "key34": "m7aeqykgXey5fh5cfMND2SiC2uvcUGKLCY7SzB7EBhyD3taUjfg18yptFx5HZSdUFvqNTu1coPuPeGmwnAjzV1a",
  "key35": "5YPDZ5mRu9RXfSmMgcy5YjrrDw62DjhnCYLZv4Q13ohEzTSzZEEZ7PhncekVMNeTerL4hj8vkXmQuquyfxFtfpbu",
  "key36": "3m1sjwsVC9Ht9ZG6GZzzuvDUPmjf7NvDQ4RcKfDRi3GqaGVWkPuL9k8djE17qiGFEXW5pXYAtkaQeftjd6yWpVPj",
  "key37": "5q4gCMDWdBrDnkciiW7vqTLLU9wt6CNDBvj5tVYi5SPdHyuDuK88QjcNQ7qUYJSxvb6byGJo42xXAGSzxiJ5pRrs",
  "key38": "26noq1WwvhG2K1jkktX2bHWKRZzySNeXRHvRAzw2Mvkmp4GG6pVUppY5Yq9fnsMdoHYHq3oqVA9oYeXnorr7KERs",
  "key39": "3ZmuZm6TynYZatAL3FEKYhtAHvJeWagsq8DJhSZwCBuJSZ4Y9fVTjy1L8WsEQbfdRym7tFEcz9XF6miU8LRWRUaf",
  "key40": "67ebQ5X3FiJnFrKECSHx6eLrjL6inyN1GG7WCyahDLgYnbgeDcKqE7tejGXtmPfJny4Hu37g1XEPiBobSmbwpQJi",
  "key41": "5KntcxiRjs2L8WASzM3wZJSii7c8Dz44sL8KyaBkLpGwdpZPrs8qxYpBjryS689x3SVAmjti8XqUwxtfXhmjJtDx",
  "key42": "2G1ZLScH4PddDnnV8TgnvDV3PLqMqMFE2mkv3AqBQ33ygpfNDtDVijStUDEAy2i8Q1b5oPp9kZgP6ih2JXgGTEgj",
  "key43": "3N4dUXhEmAtR4mK5izw9GTb6ttCrjs94W6xpC9bK3dj2wQuu6aYx99j5Jg8kzzR4bBaoJBzRWHYBpk84muYDQDNy",
  "key44": "57ryHCtMG9KsSvPibBfKDpxFWYmq4RUSBPYvdqRwWbWAGrXssn5hMKEpAsXPYUZNRFnMBDQw2juyzyAXk5iY23J5",
  "key45": "4p3pQ46QK9AFRmGMC2y4EF7QXLiGXYidbGN5fjFG7KcAy4MdJLMMcJheHn8GfhEXwfgMJNh3cjoCjRYMVYpeftMQ",
  "key46": "3fZqLnvLYcEpsEWg7FmX4R7CnTXDJaUCpSmwSbRMc6PiJjHR99ssVbhhBtU5DthCqPXiu2AwSbJZQam3P35PNVn2"
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
