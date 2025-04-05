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
    "29PS2Em9TM1wAcLuppRq469grkKFB1u8kRX1LYZChKCQt5DRVRjgg2fMYGYwyyEHCcycVrhPAz2H9CFupM8xpYmL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gUf4Ep8tgXGGRe9fqDPxnEFjVkxvSTThTHLXS6puM5rz4HgCFFXm4EVfHxeSyKRyQredRrNfz8rMTpwLaZXkgYt",
  "key1": "4cXzuVhx6SKhQdNZQrPU8JfDWNVRGtrRnVPXJvzUJbqjMR1sGufF4z3sv2wyLBZ3afvY2fkPLM1ReEMkabG1tQRg",
  "key2": "zpnDpJ6Drmf2HgnAvXxNPXTKriytLuceV57HMgTa5XBaPNJa5JDSxBPSjoKNNG85onR4ru3zKLztsvudCdHGNWs",
  "key3": "2FumJg4w8yYoiy5bfvqkoLYVQRsPsvbvtSNXKU6bUtqmmACdYZzqZFszNA1JB47rmzrgGgnAKTCC87hFdBVHxzGs",
  "key4": "3SVtT8zGsZDCBLw2uSJbHdg78pmkyux2be9sKPwxj26vMkk8xgjSWDYEpTeib5KtDbRDwf3nSmRu7n6zGKn6ZB34",
  "key5": "4vSJJUYL2QfyU6cBnqN8TaGifz4MVRcjHTcyfVgGNH2wzv713msv2KCYyCQx2v2YKmEt2ASb1CDohquLnRg5tq7n",
  "key6": "2pGPX6M1Lgv5CGow3rsmKBzrvK59eKscBMdHNrdocfJwmvwUTurDJcYCTpcy4nUHohn1MqRocdCeW7JCG5DpbMy9",
  "key7": "4RjZD3431LFNNzp2qdcguo1hxyYRMWWQMfJf1JLGNktgej3WG8xuNgp5hRRwryUKuhtsZt1LQZQPyvok6YPYKZcq",
  "key8": "5wSpDS8CkTyrzbANY8RzSCvpzaSizY9F8NnZNBftyA7d5QChr4b7tD9RfiXYg3j7RqPu98cCdjYis3mgwSTi3GJK",
  "key9": "3wUJ8hSvRsmGy8DzyGgvakWPkQPkewxLLPoe5FPKz2xsY8DpZpYtRJDJyvUCjVG4Fe14TtA1zhdwutVzvFTeT9Sm",
  "key10": "2eJRGJEkBqyYqrTZaH43PkqHvRhhH1mbjEytA8QMcsuBT51kE7Tf7bk7rQcgxaNZrJ8bMuZ616YnFsbDRBeCUSxH",
  "key11": "2ZahVNe5GTT54kb1tFj1iZ4uUMvQuyDfX7qhcamNhAAmKyWR5xiE2hXK3sUD291S6Ur3aZsZXzkD2HfwvxLWu5Ax",
  "key12": "B5bQUXYtqnoAQYedFwcjxzx3cwqcjzhHNsw31oax2Hy6dJsM6JBwsNRhsvsEzmnS5kg6xvnUKF3arzd9jiZhQEk",
  "key13": "guFxsByZXydUe2tGEZLrWz5qhr3Qc3z171PfTBVPoqvnHZnGdyLZKRfsocqeurdSV8KTn99GeuHGe8sH2RGJe28",
  "key14": "56esmBizb5MFMyQj771ByuhGhh71e2P4cvkZQ22Yp3hFUh5Vw5Z8j5TjGXXFwZLut9SBhT7wWJ8nWMGojFN3vSEU",
  "key15": "4iRFh3Lnp3Ujhqzcjw7MKSjQAT3X9oH5nyJv4wVzUcvwkkQEwkMMpsCgTFRPVSE3kudMGfhzSgFi7wK8V8SzKZa3",
  "key16": "3Fwbf78QAWWbR3ygmNe2eaqoMsMa282TsGPr4ARa4GtfyzYGD6YdUpezQtVHLKkh86CjCpercd6E2MLEoBv4nZNv",
  "key17": "2y6aG2Wj2VETW4edvGL1jegDJ1KXBYwfqkuHMzsFEyZZeW66Aa6u98GNVfYFHMnPYNDRgaFoZGBVW4d1qoiFBH4R",
  "key18": "5EHXYxWpMJbqttR8PcYfLQpzUfKiJY9B7qB8FcxhvFPj5sBpshdFCnjuNx4cCENd19Fni11m4B1SyH3FxJ9zcKp5",
  "key19": "4atELHdcXZZ7srQmCsR8f1AikqgwDT1T8EeWGeeSwmWaVQw8akTYNmaZfNxNSQocRCsNV8JmdVvmUBWqDhMjNimE",
  "key20": "2KkGomGT1hzLvkVZ9AYvnRMUAmb6ARTQ3ACgt2a6c4YUj68Ly37bS8kLGUqtmrj4nvr9nw5o36t8fXsGYa4pDoLG",
  "key21": "5Amz7XeJxH321ewZ7DZ8UkZHBCP4dFxWWfSXjuewd83MgZ4QH4qSprf8iM9uVvwKwxdaLxxmD9WMhbwX2ig4BScW",
  "key22": "5taLTJKhn2sBUvMioAHjMe9LMXgph2jwdyAwaCCzu76JBae1A1AG9TKY6kQCUxXXrd1Kr2ma6T7eTbj5gXmN2Y6V",
  "key23": "529vcEhJx1NXqhuiWmWYZJHF6rYA7D3NFR3fda1Udh2KQ76praAk2ULrS8j69sQMFeQHaf7ev7SPw6XRa7eBXg9j",
  "key24": "57aUpZfFHBEpZG6gdKZrTrkfGYhJZGeRb5nR9h5dBbdtDwT8TWjgoDhsQS29Q78bPRgpsCCbDjMu4XKoctdGREDw",
  "key25": "2jaE2uF5AmNzQP6jj5FMdo1DkJPC5SRxJv72UUAJsHHvnP54Rc24REcRzC3iEyDhdpor8DEwV7prHKuXWT3XDRnP",
  "key26": "5exoKMck7TURhdFeeFM19CaC7d3JzNr8TRY95Sq44FeriMUyLWzQfRyKxm9uoExGWukJQVo2XpeBkqNVyo9bHb4d",
  "key27": "28Tyy5SB5vVvS5dj7YToyxociy4DHXWTvJzbrz7DzETNwAZtMetEZ1es5W2piKLCccpteb7yDV9PMYJqRFGDarVC",
  "key28": "ekNWoSPvVTueXDEgq9MsD7F8UjqipHzWWAr7dgRFBAyma12EtT4vdrmybbLJQXbCNWNCNAdGHK8DCJKBGUirJKh",
  "key29": "2xSBiKn8hwiWKX2mnSRqMDMxR8USTZh26rpPZFXecFuaegXwUaXzoVocosaeK6v896cvbEpAJ3Uf2kcyYiggbzX9",
  "key30": "4bWvNb2X8iu5vfQYNs47cCLxyPaue5QDXJYxyb84VSExaXDFBTX6bucxZ9Q9pmMt3Ld1KfzMxEwuAQNL8z9y8ZRo",
  "key31": "5cH7wMfrnbPGHddthJwiyr8xeyyzitHEeCv2yB91nE2ckjdBF1CvU1J5GiHryQRZwhHkM4e2XnLDiwY8rQpwDvLb",
  "key32": "5Qfu8nH7kQhvAssNbxnEkwR9ydeGUenb2SDrbH1Cy5Hq6cEF5Jt7EzCPeeP6BSooQ5ubjNWvk1KpYHUBcNnEKJX4",
  "key33": "2ZryBMfVtcnvEnjYhh96pKBz3erCv8HUNAcNcQLWSBMRjB1JPGRzsEymyTTEFBgjmELg9vMrhmJZcXudCfLXjgnk",
  "key34": "2DZPqsEcSn2jiNicHYsopCP7DzhoiMyjjMYcgKhs9MMUotonKHruuSSu99wsCA8mBfAfChNDdUDHkZkJgLb7sCDT",
  "key35": "4pHgpUZEwYSZN7huJyTLeL3y7QVFZy6ifk8LZc1yTKV2y9xVNd478b2UHxMrq5YHerg4HHRLNAmtuUAqejgMghFU",
  "key36": "Jo4hgS78U2N95rQbkAVbeuZc9PkQLYkwEfTgTnNo2JnL2fF2URzgUqE1nHx9NaAzjfoqReLUFYAeR9adh2NZb3m",
  "key37": "3N3XSfcLEqmYGm8yKZXx2FzAaM4em2RJuP3KU5KngWe9JLLsYxxPEb2aX53igZ2Go1h3AKnhVfrgVZLaMk531JQG",
  "key38": "FdVWGRXcYESR7VpqmsNSLWjgEfyAJpqEAWqke83C7C3trP3XvmW1ifdCi7kR5hbDEq68L1ry3fZqytgScCntBT4",
  "key39": "2C6caDSER7KxUXhGseU9ZXn4povQqdJNASuaeE9RnWNuNnzJHYuLMs8Q6EC1ph1HG8ndRVJowNPMWSTSz1Ayc7Af",
  "key40": "2p4RaTBS5nfukmR53EHkkwrwxcyS1moCRwehgiyFHL2DwKM5G6GbWGXDrZNCzGeWb6FrstjBiTJY1m1Md3HF5ktV",
  "key41": "4pdbUELM9EML9TVov9JULzhPFaNdBoF86TPRHPcvQ7Hz1awLJHwDtzmMBdXF3YpJyPhMk4DdaKgHf8Ez5RytPGE3",
  "key42": "4mbmS9i63xHHWUUCNpNmg2VAcyj23MuriJYQMEwJGCTVQ33XQk2MR2Td9YEajGErk78X2eKc9cCbgd8DKzuMaQk8",
  "key43": "5JjehckC3xYNDvSeLq43b3DHA2Cztb2AgomAobPzatpQZFqgDSJSvYgoApCbTCzWjo2a5jn5uMx4kppWavr79w9W",
  "key44": "5FP1bmFxzGgEnawegr4AuaMCXgGqKhL7em9GqyfydXx18rXCgeKEAEyGAdaWrvUfTLCg87N4JzyjYxgSJXCGtnnb",
  "key45": "5hyFXctGJSBFB9WdVF5H4VV9YrHBNx9gBABR1qMTNxjbia9YXv7eyS3jv59LSeGbACnsSqcSHwxKYTYr2cNRYV27",
  "key46": "4DC5MPQoh1S9QMyGmzCbS9hR54vSQ5psDrw4x9ZsB72Nq6LwrGKPk8xjFKKbXxVvgGNCq7StKxMdDM7TVVic9DDe",
  "key47": "5HK7JW3edrf3sG4915L5hB8KH4gHRrbqDxwgfb2XPexwBqvj6rwXPTwV2aNxPSKqgsYZExciFFxzcqJbj6URtJE6"
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
