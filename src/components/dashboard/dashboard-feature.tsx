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
    "5UncjkL7W5pjnVtGvnsxHXmo4Z8XCFZpq6iT8MA7p1AeBqWu4VmnNudmvgADJQUQZB2RoVRfLYNZM9R31rEPkLRo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iosybTSrLxvzdBN3i3UkkTczeHq5LAjSM1dfmmnju3TFcqJtcfFjC3B6oQUTwWgoYWG9JcsZYxEySiwJySNsEzd",
  "key1": "5tZ1Bwg5ikHQfRSo7TvN88jvEyHJBHdeGWGVSSduFCjfZ7nDhLb8MDdaBFWs4xau9dvHvRbGjDWf5Lhx5fCs8dkW",
  "key2": "5uvWVVtusFjHjjcj2bUh2btBdo1STSfFKXCt81fPrZPVU8u4iexnXQjEUzos52e2aq2Qq2A9k14Q8iGSUCEBsTUL",
  "key3": "2dwLUZe8TtG2LrY48ujbPVSQZJyvL2tgbPPbrFGGuUbxATbLKG6mZGrfeNDL1mVfE1fmmXTBpsMYAcrDwjmyFFgi",
  "key4": "4MQ3aNw6N2z1gHcja2ewXQh9SSDg7qheRxGwdcJ5Ji5x5NDN6rYr4NsjdMC5zbj45hfX25cq7qxrDYvvoNuDCfmo",
  "key5": "2BiRuApE9D3t25tyPWjGWYFZuzYpYgiPrpFEWPNVnKy1oWub2QNji4otDHHk15ntbS9V5iDxKUkXKPnXk68QhyCD",
  "key6": "3W6Bj3ZPCHfxodUzfKWeLRX68Y7DQpzCaef728i1Rydej4ULBnTET7WqUfsRxXgfocSHoFfNtnq8pJysvNEoYVgk",
  "key7": "G7nBGEMhJFG7pzB4ySLwg1dpyfFHnzrFCtE5MVr6vioEHFNAKC4UnVoEjBtTEqFVJRbVWKZg3NjuSTcTX23WcTk",
  "key8": "5tCCjkEDW9e1PuNmWGDgisdq8cq1RF7xvKwsWGngg1mAqvNqd1euQWzuRUczC2hvdaJZZf8hJQ7mx9d13yRMpCsr",
  "key9": "4RhYuJoAkDE1DomJmQzJbQ8D7QtSXXi3vg23wNUNyfVdSc8XcT9MjaCJUVveLrzjcEEpQfqdYRPFHfis3jBPKjdt",
  "key10": "4PPxJqMqpPBLLJNarXy5BTtA22hx3DwVcBUo399DTvvUcX1vi8bj37XxkWrgpNU7NB5di9kNpaRz3uGqdUbYeLxG",
  "key11": "5vwwtWL4vVf6GMGm7Yno9yhgoSgBPTVcKGc8ScnP8p74gytm2uQtUMPFTLzq5wVLuD4QyTATN8v75dnqJpA79LzS",
  "key12": "3CEsR7cuZ6Eo7x6i5Ts19XtnMHdHLxPWHbdgJ1VWHcpR9bPhkfqArGAZAFGLaNzSTYaq6Shh5CDxuRX1N6miEDNB",
  "key13": "3wEUEjjFYN1pyNUSc5xKLJNUvdFzGdzPWXoQ4UVG63Y53NwQioBqbosucFGdxbiFhdSe6nDfsS9qvNt5sd7cN3RY",
  "key14": "4wCXB1uuVV8ERHqgY3Fi18tqFyRqxDmW2WFjbWfj43ck7e3B1NkpGmCAAyJz8hNTU8QFrgfF3MBVEvqg1pfhJ8Jb",
  "key15": "2WGugVoc6GQNhQPN86v7odSBzqxyd3bMaqzZcKDabHb3ZBa9qqyPmSujgj6bxJmBhMc2Uj32QczkGedtuAHN4QcJ",
  "key16": "4MQMKdxJTx724AuB9pQbDLi7XhZTp4Y67BVX38HZUeNrZUQvNFqPW31gkoxb18QGS7Ey3fYowqe3LcD2VZVBgcZ2",
  "key17": "5F1ScrQUgLBvVDmg1psNKY8UrwmRsa2kHmjq78sbLvXQ9wyt19riRgmUvGn2vyaGX2LwrvLwaHvNSdmvnL7zfXN7",
  "key18": "2tq6bAWpaqwvo3MHrsQX7RUAFQZw2Z9iGjsaKzHpkGhn1zDBZZZ3eQpv9dumZAUsMarjF6xHz9i9xa72CngpUMAd",
  "key19": "3WUZ5hspnzafwKRchEwkXoUc77tRgTL4zasNSL8ABuPkLn659zMHiEMypnjhxr5jW4VA9r3N5skrrysbtmXk26j4",
  "key20": "4o4vv5LTmEr4R4y8bxLeACtEFhNooQv4SVXEdGS9s6zSqpaGkg47SpdkKMEWUVSaT9kvzcwnrbn6o5VDbjBbTkkN",
  "key21": "2jznNcMyhNTmCR2jDyeBkVWHYpaQEqCsZeVoAWjgRJ4oCcajcE2T8WMXr2886NCGYGZvuAX92f9KoZ8WeXZUhxfY",
  "key22": "3kKsk8F8aG33j85DZFqGG51qfpYKoThzcSWVoeahVBjcfkx6yZvWrXg1nUsVyNec6zJAhDC9cf4fxi4FvN4a4aY8",
  "key23": "xJLsm1vNDH8DaEMJSHDwdVisMJ9pKRHB1Z45asZ5rdn2BGu8a6amknEm1BADsUA8TAxoSJNzvmvktutHKh1Mfg7",
  "key24": "49ajt6eBXQji87woXjTBKL34k16zN8pkSPfpm7qLusPFRyh3tMHykidqtJtG1JRANTGmpVBc2Kx4g7TK2B4s4JTk",
  "key25": "5KJzbWabDzVtMQ5NRMTt6haUrkdQ7VmAGfAZbQaXAENaaf1qcV9J44C3wsNHzEHsDgmDBrWpc8PnHS1T8RQFWizd",
  "key26": "RSuZ2Pnmw97UTe9uujKaQuaw6zVENMdc93hMr78yn6BaQcvq5yrbqaJbHi6MAsda7bzA5WVR4b2Bsg7NVzFbXqg",
  "key27": "2Td6nKE4bQqnUMmyw22rmB5qqfqgUA6EBfB23Luy5vQw6AtTVxMG6R6ssinV4HaV6orWVxHLYJBgNwY4EdGcjkHp",
  "key28": "3WibQvaKhxehgVMfCLFoBBn8VDH2ZtiYeUwDwtMzMxtBVuD7cnTuiVf9ga3QcmC7abtRNoeLMygFXAgzj8emZFuz",
  "key29": "AVaUyKY1BVEyuLzWD5fYPcBhoPPt428zpFXkj4xw41RL4NfuuKxP6pXLcJ4Ltsa6hVDw6wH8Svocp9fGQy5xchX",
  "key30": "5ZrzXznwjxkuJiX1LTjwwZ7TyqUhq65FA1AVScGuzzH9EsezxheKZX62Lc9e8iNscsjzDDaowZyXcKpz3n6PMGJH",
  "key31": "4JatS1Cvf4cikadbkjnF6UiPLCCPR3H1nWVAV2eAYhRJU7cQb5DNAyE78Vkr7vCQvA1oFWeRVq27y7HuAMi55hBk",
  "key32": "2wubafnLgj6vqzgxuXD4zT48KgPvBTSLRaVRziY2WVXheKus6MtGJ7HCES9aVMGa3KZbq2W2gcrgDAXhzrGpZo47",
  "key33": "3KEHFvxFBHWP7QFFVCajtWC8TUcTzRRHfhJd865awZdsQVwfWrsKd6YnaAuQ5vpgKeti9RgsFdMJEf8pTDnsXPML",
  "key34": "2srLPsQEifWaAWzz89t74whEY2eG8TGuQA4QewCVtTKkFVyK7X63F8h2DBzzev6jwYoXnSPdWjvbtuhfVSVw8f7V",
  "key35": "3imoJr2Uos66voad85HoGVTCZHUFbbfJLFD3Vy68vJahK8zLYjV1Eo46FXEMmjDrcyuPAvXgzMhCZQj6ACwMEsfh",
  "key36": "3LxVd9mssY8oGc5TnRGqYUaLrYSsf3GreHqYCKdmEDDBvvPHjBuy1YAFKmBEwxxZZEYp9edxWnMrWn2NiSTyvFW8",
  "key37": "Po33UY1DkbjYd2jDyavDyEm8DAzDWJezL98PFUaFM4hiku8m8NMZm7oeeGeq8BZXs4X8LSzECjfRaLs4qLBPrq4",
  "key38": "55gyGneZXC3TQayWhBimyc2vxQxutGD35nsVvdnCM2DJN6SDJVuqk1BjiuNeeU5JgaRUDLWNm5BKmep1GVmEXvce",
  "key39": "5mGLrqgbTVzKFMMu4zWELjz8eWUdWCmQ8srPbDE2enumwgVXT8worGyWRrMhpLgkAod3yJR2gH97q3aQ6JMN3SZY",
  "key40": "2weytaJE46BkWAjskksMoh8mS2RVED6GkSj1sEf3dxPJTL15pRWFMPvkfLZSX7cNUYP7uf7h3HCctVg5P2FQUa52",
  "key41": "5jcBG2eYGhKen1S9uuffQsc2yhmSsMiWWNLkn1oQaENE4YfAxKc1MQ3VXDPhVdpc7LhZSYD88TutGiyr4FUeiRHK",
  "key42": "4DmDSHEPbbkKvKh3z3XMBx9dYrUHs4GkiK3LdVvxGPUAFQ6CRmr86Gk6QsefSv1CS5AsxpFtPPT1Q5chtZec1BMP",
  "key43": "4pDfpxshXtZ7pPw3iHksRjEofFjiDzgEFQLyJNqF8xmvY264n1yftFPzbCS9xGFqZt5pmk5WQ4MTUZcBTtgdRo74",
  "key44": "3w5ooxnUGsFw3nF6iWS7jtRtwrL8NbK4g4pXcETkmqKaqMcFWkBF5UANnAtR4hmmJHiqGHjEPj7JcZt1ND6XGu63",
  "key45": "576qx8JeUuXb5BxJPoTeripsXNe8gd8Q66h7m6QHWxRo8srNUTwUafMkLPx6pBp2bwmzUGDhx8hKUjvKwqnMK9NG",
  "key46": "5UR3GSKwABpMTDUYzDmukwNM7c8Q2Hp8M1KUtpeThwyEKGLAgxdQAkLdEb8WUhq9VZXwXNGVr76GMLWBnVt8PCHy",
  "key47": "PvpFxDFibQwD5AHdS7qshHoTE4XZjzjoav411UFThms6HV7ahhX4f4YCPyHivoFcm7LhwypL59BgUFtxHjPjjiF",
  "key48": "2uoZmrPfp3F8Ah3jAFziyVrPRqJbHbdi8MuW34hsP3FMsYmWFqZnpqMu6dGnV9qTXPoUpGCgAnSTmTymLBqXwtYZ"
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
