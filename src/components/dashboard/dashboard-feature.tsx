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
    "2WVnuKoqnY1eSHxTjy3KinwgMEJ4HfvVCaiKFzc1yrm1GF8sHKnyNXAu1fV9kZcuZZ6SkneETVykkSA2LStHGxtV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UDp3is2SyC5xrrv1CwGVDWRh6LGX9jSTZdsUGX4Gexor1w7wv5z7UVZoSME6dS4CAgFackni4WGmvhPRmMSAKEX",
  "key1": "3dv8EW9Q8ZBD79yLUtW7C6Kybx4gNhvZhjuXWwMKEfqYSYZLUTTV1qXGEo3jK86GsEeRP1hNmANo691hpVUGkb2k",
  "key2": "569XskrntmMNAUHMnYCUvwjg2geAZ9ftMNa44rhTTeXMwyjHHkj9z4iJbeiHECgfLDiVHV5jP9FPoVZKc2fBFGBY",
  "key3": "5A6RrFZMkWF878vuwb3wZkfWbATb5jmraH4SQ6Frri7SMd8NbUnrRUwTTMvec7UPGFB4sxCgaiRB5k99veGSGYLN",
  "key4": "4FH5hxJubFaEuPikXybjwvAVMZUWhCRkPxEHerTDeUKCKcCfTVH6oN5mDMqoGiuuN9AiLkS6DDSPkBHDXi8LYdu2",
  "key5": "2T5wzwd3SNM85DVTC3GmbioMXjB8Ys6u8Um1iJ8vwSWDa8pqnmV9Gmra7CPaZjzaFHmMBS9TJWZf6F9oX5e7A8AP",
  "key6": "45YyoogJde8ByQP5AJRfbqs3mt2khxCtNo7gC7okrJsnUEKNx6cz1AURQ7vyxnzSQvMBp9aYh5osWDkU7pmH8tQf",
  "key7": "SuveoMH4o4rVfyDu9gq8yVCQ3dcTCeuvDpLn6i35GFbnNXqDV97Vbj1VzdVjQqDxoP7XtmxHzbUHFNqmTH1JKmN",
  "key8": "3PJAgHcPq79arHEWCPv8ybMCQVDJZxpFzqGd4Er9q8fqk7mDsd2tbvd5dBb467e5L8rxDikCsArt19SerM2XtW9X",
  "key9": "4tLGDsMLmTBjxTiHTexw8EPFaaRhA3mfzFcFn46Mk3AikvHTgPqBEzrmJYjW7YQpSPX4RbNYnAbXRs1YtEc4VYdM",
  "key10": "5xW6yEESgThP1RunNgK3ni37cpWtCJ5MVRDaza4fzo54uNEzaVvAreLkstQPFDPfwX7S5ga1J79Qk2zdqxJG5FDY",
  "key11": "8AjHbuk4EqzucZUAfTFo8XCiXogNb9YE9q14V7RPjN4gxyKQdcAkY5sjrnVUtztsfcJrf6xxwKeG8RoeWTz5LHm",
  "key12": "583bimJ1tGgqzjTtVKf2nmgmAWF1cZVNHnaYmTiU8AKiEXezpQSaFggKC5Pqro1kmf3NvhtUZ64N5Fw8PM9DSQxx",
  "key13": "5oq9w9CAUcz9xuey6dZVMYEv5MnLzaWYPyTe21cMjxmc656xVTzbm8ViwZh6mWcQcFZQarjRQJeDhf6aFqKsG2TV",
  "key14": "82XTcCDtnoAXXMh2FdxmMMuM6JhRicGReu6n4x5wMAWeD1pfRBrtfarBprXDyEDcKsR34VRkt1cvNVa8ZkaHxbw",
  "key15": "dyWuLmvm1MNjnyrAX11cWKBVtu7EPmjdEVoZT3635e3gXdgi9uactTbXJV819LfZKSRovyrCgZjuKqRF8rRdgju",
  "key16": "5ZTmezzEnnecYPbakQ4st9uoNy8Ee5zGQv64RsF1m2j6gx5HteJSu1bR9omtKfGin1d9727YrMiG9vpViHaDBwzc",
  "key17": "3S6TBBQ4pZyTwwdM8hFMsDWsWBoxa9apnrFVGvvct3Nrvcey4xZaPX1hub6nn1AHJUqu6cosbZEpysvsaEcFDGzE",
  "key18": "f7tKSAJ5m51Hq8yEQfA1xgecAa4sCdMhmwGT9qPGzNmoWbRHdyWqCTStBXBrhiUzZkGGFpkY8UGA1H1ehYYgSMB",
  "key19": "4SKBfNvJzW1dGjnfirxZge23BSQeknUr7XgBF5QNkc3thADEw6i4WF14H4fuBwZL1qcYeZRoRGY9ceXLVVVNcMhi",
  "key20": "4GRi96ZPuqScMxDn8DLUoUG38PW1JwHqSyRs1PYykWd7mPoeji6vuTBzjVTvg3rD1YzCrYJaZYefCrhsKANzygPt",
  "key21": "3ESXS9nETeKqzNcnbWE5e14Wh9ABGym6NHa1ym4WV3JcHZ19rAZRi5iPDR6RvX4tTnrmBRB67TXBmXq7bgujHVG7",
  "key22": "2RKDzMnHHY7FgfhxYk6ffPeXGed1njzQsUBqJSfQkWYLMaNcHgwx8cUC3BsGXx7jQzdNPL1TsiS63GEzGw5V6Bxg",
  "key23": "2sdnHeyBks8BTiY1SaoNHD7JK7cjq8wsqqAk3VEXBXpNJBQH79rfXaHoGj4PKVYwm6b8BrfhYxM7n5HJqiAvTuT7",
  "key24": "4pGv4XPzDEusNbGZwrqps3Zfdt6wwRSorDgB4gzceshqucNQ5JJ2BGn4HqbEkq5Z1TSRnbZWPEgK6uUkeeyc3mvf",
  "key25": "3dJjESvWVB733gu6GsxnqNRP5pqiVXBQ2BkT6meitC6Jf5u5i41aRZ4amKj6zeHbpgrwnduTfaLAx31t69wqyd1g",
  "key26": "8E8ZeiJNdRx6DE8Q6gGagdAYG6Zb8xfRRtEme2AeYeEizqABijXzmqGtLkjUEK4zC4hQZg2CbeoyJXbAFpYn9vP",
  "key27": "dy2ekvuBMRcTqdUnkpR1oNju8yp2JoZfFiWrbjqRmHwtSHgPActE3LtxwrioHSZ5aK5VTeyDoHZ6HN5SvaafaZA",
  "key28": "3UcfGx9vc4roxgANnUpGkRKLyiXwDdqCYmgqsDFUaqbjZvkuqESLrETUbGfgsjbNjEDqrzwrGhE9698oHEu8bU1Z",
  "key29": "5d2uhbZhhmoxbqrEvpHHHhfPv1xvCpXTLUyzfcPnxK6X1Xz8u6o3oRa9neMTKHdvrjMUFaUW3Ltn17neczSgRNr8",
  "key30": "3pZCQFEux2dmt5EnQbqXfSx1vsYRkufJjP3xEFxJnJMH4bggYDRLc2E5DQYY19ZARhFmUuJqo9FmmaUSdtdShdTT",
  "key31": "5gLBnaCeEoiNj1Ed8BH8qQ8yAyZBK2ydZCo1Et3mggEgm9qpbuyMvUWBcf7Hw8wcZGmfFo9TCMCa4S7mYZywaVDU",
  "key32": "5nPRo9zn4NN3pNEmzpzqKhPpzzrf1TSFNhpg7bR2LJoZLMd2icvdBDeoKhkV4ZkRkLK6mcKgnHhkwhB4ynNZvhn9",
  "key33": "3Kh5axA6MDDRvAGj24bLnYz2Q7BuX8GrzR8Z2S8D13hiVBCiwS4HqBUdSGJ9syh3CGGdGo634o4YysG79EYHzMB4",
  "key34": "5G48Td2iGUgFTSBBV33dXarpF3BRRycuigj54YS9rqUL9r4dPp1By8A4KPRtNSnjkBrExYg3Dq8ABbsrQbpVMiuF",
  "key35": "2mpyErQmntXJ4qfcgELEuZ1WUwcAiuxwh4ye5WP8g2ensmunbM8oZkHRXyvsB3MFjRCg2aCifQS5eYtsMqMAFA8G",
  "key36": "5uY4UYXH3FTgkW8Zn5824eYbdSfFjJXAjj8T1tmuTVADTYnTedzAfNcwmegg72iCvMe9cQGoYNF4Y1iRuzhDN6LQ",
  "key37": "5CEgntWY6fmj26vFU1F82K92nb9FZu8C8DLUfZz2aQgNedoJD6vfuKfgYs327GaKoG2o3FmCe9Lo6G84Wxz9zG6Q",
  "key38": "58AJDH8yDadDgqAgC2ejjLFY68Fkg6LxUpZox2zMY6gVZDBodS7kgQuKECYZkB9qU7WWRaZyzxCbzxsfPsAgm6w5",
  "key39": "59gbYkkEagcSLGZbiseLebmJdPx5HTU8WTH1fCXMN1sKSRn6fG137b5Hs5VKQw3xPQL7gMAqbgsRkcKZjPm9MCPr",
  "key40": "3wSoJM4CWA8nuh8RNbSFMH5UxpTsPZ3o6A7mNaq8s2RqwwLsYJPFApdCXLFV8eNquPBTN21VuiAURHM6vTYHNUCD",
  "key41": "5RHoHDVsLMzP9TbYKxFjXJDJ1CyMmLTsdwNgmoCM9uG7rjZYWg36v74RN4Wn7wxQbDivesf44EtPyEUKsCr34cxJ",
  "key42": "2fii4XPXY4RedAhL9P12mwM5ct8CxHs7YR9eituscG95MfJzUK15dYkKNco72uL9jzgswFQoNq2QZQDW2ANQ2EuJ",
  "key43": "29Wtj8gdJq17gsRBcWb5NgwSc7XsRFfgPQiE9w5WZT7CQY4rrtR3cs5UxPhbueJF954bPJs5bnnXBfP6vB1jS8Vx",
  "key44": "jLbuPk12jExZt1rV2Q9TtT1jhW7wysidCjCSLRaffWNhJzJD9r4NSJCZLKBsTit9XBCjc33JZmsPatUpX6gqtHr",
  "key45": "3EUZhZWFjKbV5hgnA1y2rSCxm846krCJMsia37enBBKa4B9dgy8p4E3UCnjrSWpzuH8N1akJUsANTjstbNyYmYnS",
  "key46": "5nAHwM4tvnryTxtu9WHSoMk2jQ5iXoDGMQWrX5Cvcrgyd7cJdKa4i6CKhQQhjhgnzp3Z4dgPpnGdrfnTMPZ473Bi",
  "key47": "27hbE533WYvLquxiXjW57p8416rbexwqETbaXYpa8C3dDsAZ2EJFh9EwqkX6fPemd3HavNU7cBnHj6JaCDREAhXN",
  "key48": "4SWL2tUyWNACtNZZrV4474PMmAqnpkhNy4fpSxP4BhD6GWcsX5DZWJ4wkDgdrMAxeUSPQcwgYZdjcWmXj3uSadd7",
  "key49": "2fRK9h1xZkBXkqmi4RPooL2bkqpwjV25ZjXzAbV3MusRFGJndPmXca1FTJpYWztDkhqxTRtvtVUVaHACadbXLGWY"
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
