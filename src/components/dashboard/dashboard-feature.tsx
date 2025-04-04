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
    "39wTVs6guTyfSko38t2eHRxKD2zNCo6neoupvATV2eHMkmSGZypjVuVVpW7FLxeQWb1uiM16jScg38soAxZW9uC4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47fu7TPyd5RnBNw4JdhNr75JB8nqtbWijnhgbfRjYECU2UKLPJhVzVo5GPtrXU5i9RnNp8rU8KCQNcJicCrMvNCD",
  "key1": "3ss3v1FpB3Q7KD2hCCpW8mDkJF5XXv9bGjhEu1AGn8dYv7YL5jyEig2dELy15hsrLTwawhv88Y4bvuwx1ABnW4GR",
  "key2": "3pLTurjFE6wuwH8aC6CLDpzwYWTFviMYQ9XpsuVCaCt1mEi2FNaejvUGKnWNCwEqCPRnWZ8f6n28MX8jd1AJtydM",
  "key3": "3SeY17WitxSLAkTzJAkJNmPiZWttN8BMfDr7Nsc9etVdN6QbVHT8YbH2in56d5nPZ5MZSvChhGowheT21rmtWMg4",
  "key4": "4zqmaWw8yB8A5qjiiSvb1TvXCrsCPNdZvvZAmxsdmkPkWiUaGpKTRRYSUxpvC11X7Mkuhuz1H8T3qoQRbWmvYmqn",
  "key5": "3yTvUMjuQBPcM1JQxE5yzm8UGvyHSadawtQhmrFjURCiQ9DoePEuTfw6XFZvLUZJLForXek33A8g8LcoptvZ2uA4",
  "key6": "5jbJVyawYjY4KBy67xnJoS2rDoQ1AH3xnqRrfR9Y67Y8GuuG1tT5PHatLeQwhvGTZR3Ru5D5QThuLdajkpMi18d7",
  "key7": "5SMCKB4mNfWFTRptLSVpkJ9bW1aPbri57tc9rgAyDhRtjLD4PKd4wbiWMoEXLNqEaT11txTEnRHyejn6SyeBNKDi",
  "key8": "4z9ifztao67bDLnmuVJokhWPtZ8vJtzEd1vvNMYiV9VcVLiGXF4YzTpy41hTkh4LWAcp3P81UMmMDENvuo39pFgF",
  "key9": "dTgbrH7MEsV4NQadQiAjpQKSUaXtr7ELsM5LyokghJF1t3NXeAg7njR5PvhNYewPHsHdr1yRbcvQgwE7MPSSFxD",
  "key10": "532XHB7tnUJzkUBqKvEyzPULGpXTCho844dGFWcq6wqQZH1g8ZFkgmXoVmLMdGMsiMxYrXkAD79Xu5vhEXaX1mjk",
  "key11": "5jPfTeLYwWRrKA94zHAxT95ZJjpYGLe2zcd8vYEUeFGkjZaHFo97VfzdwbcPYUpe5GF9Vbg5zFpQcXZQ5o8Nbamf",
  "key12": "2d9nuR9WCe54fQ5wMKHnXtBbc7BPv71uoo4yAg9XabppmMUFFgoxjLcU5cVpkgEJhn9uHKK3DjsTvxHeFoW1EFNm",
  "key13": "41p8Vcw89fB7ooYWsmRYUEkgMEsZpidLwcpRbzcCF337iM9hWZjeF8MQrHdR4xSpVoQzf4A5b34chgFHHFDyK8kV",
  "key14": "4pqJSinaQMMKD9AfL9PYsKfpuysoP1jgNzC2dn78S5KrM1MpBt5EskEmWWMTctuyP83AdSfAmtq65cZa9PqfXB23",
  "key15": "3K4n6qYkqqBnHkpmv15o5x6J41ccx1AktdFhZbyhS8rdfywudh5t24UKzM4hAEiBPEZwbKXu3mQzKjEb56z8oWwq",
  "key16": "26TNUvyRnsioLGkaztWJWRMZK7cfMXZjAcRwkDwE6gbMKurHXFpG43NoMN2ABBNxVYFw7i5d1HBnP88oni3x6as5",
  "key17": "2v4yef1VJY9CPu4Njsg51WTnP9fn49s5KZU4Yki7fYa9hvPBMPnugebyn5GHgZLpBxVu465G2c6femVBdc3rE4Er",
  "key18": "5hb1DPSVgu4R6LYojDTdjDinmh4RXjywjxei2JSaw7tb1pMeiqhFx1nJmUoWEn7epGViptzrGQPzc4Ch15jsuFAt",
  "key19": "3GWFFRz8S9V7K6xNV6nYDZZPYaxYe2sqqWfmqCkrYDxqVFZVr4rJXW57aLzc7e1NTK5uGssV26Cm6H6Bs6ZfY58Y",
  "key20": "9SiqWg4o3t3G69cMCTjvtYSiJbr6G44q5jYC5qPtvfESVBLqX84zgPFmmGEgKDQSexmNgbCVdAyvnp3WunQHuYb",
  "key21": "2kVwHnvnB8Mr8rjZeeookeieurGyX69p9Dzdu4VQgaEAEKBi6j6xRpY3FkbV5YKdRXJ6MDYEvZ2tji4LcFG4Hhiv",
  "key22": "4VB65LwWo5iHzDy3Jy3CQFBZAScFwS8Yp34DRvsXm6M8EnhLbK6YidTw5YSXPciWuRuAQPq7vPocQLtUfnrWVApA",
  "key23": "5JmWCvmKK2PP7tkm1WdkXvwf2vp8RVRsqJKkMTnRXvkRLYBNcQhuoctreC78s4ZQ4ECNnjmxcrFK1jt4Nifvbymy",
  "key24": "3RMb7WkLXfQNZTBh6D2HSnMyC9NZPpVadq1dGc8horJecyygf7nTHLG4uWxQn22MwevTdQMPQAZuYexqCDoZyBhm",
  "key25": "3VaMoBj5LX8fV95xJd44EmfXhc1SFumuQ8a9hqkUEoUfA3bfuvKfERw2XKHVp9VGr7PA9h8cGSrmtowXMH9PEjve",
  "key26": "3mthx64AaMkbaqJw6JCqz1HYFhbMSiUET4SHZnE2JKjvNfRjwSTQ8QzE1KcwEpyqF22WMRwFFMXdERRdv9MynDz",
  "key27": "2hJVj9dYdpaoJUjJudTMKY7pJ8mFG2HYaokanKMZ1SEJaRsnnbYtmjh5dndAcyVVPu1a8z77CjJbMgkMcPpMb457",
  "key28": "3NYehWmbUozWjtmAx74ZvY1UYdxr64jVqdsac795rpRDXtj46wPF7MeMo5C3tGbK7FnAWxK98P2gvTK4CHm7xi3w",
  "key29": "G1hqUCtVdpgUt66vg9CPfEsf4k3JTsoZPx5CQNWstNmZj6tdNJvr91R6BmkfZsjUFtFzJQr7FbVgpUh5nBtcdag",
  "key30": "xMNg7SyLePwqQcRx4FdH9TwavndxRRfutReFBR73s46fTu3adavQz8Sb9Z5dJJKRrJC7ovQ5NKG41PfJQ7BXXAw",
  "key31": "4MwRagoPhoV1JCBAFjjwNKmgC956W2bAfMssifqkWh9CePin8193BZsNtmB8S2XLedqkiMpiXAXVoSoF2th44kYm",
  "key32": "iyXo5oh1eHEXpejEWvz6p8HqPawpiabiEvk7pELZGa7ajmhQMG8mMQxYAwTft7Wcv5En3ncCYwvZ4fG4VTmBr8M",
  "key33": "3oPrYHQe4qRTNJhQa2qm3DCUKZNjR2ULdeX87z8Du8LQvCRtZQRTQUkNZSsmAT6iVsJHv1W418NqUiSFfz922Svn",
  "key34": "9PvE3ux8iSW4zeNzpiXrhnkChNokmWTRFZE7EikMWJDUV79QFkpGvCNBXAnVvavNB33hnQmLarkkDDfcLPe8ovU",
  "key35": "4mxX6WY8efxnnXDL5SEdrEApGUSDyETVsS1sxW4za6xeSUHd6f3zzdynrkDcd8uHwynwQoM6y4MgDt2wicC91Ypg",
  "key36": "5METcEPzaxgEsuhMczYozfNKEJipQC9iMj65AWxj939SZEksSSH44qSA521t2NXgs4HWdTgv1Apfn3jHBhfNx8zp",
  "key37": "671NmNGM4fGfC2aer9Xpfh1Z8KzbDuhRP2qt84CBGkJGurH3DQVSTcceCtsCFkajBG9Dy6Cde5HJiPj8weFAqpu4",
  "key38": "2nFy7rcpGRo8q8MiXU22bR4FBzHGCx92omkiuxg3kkms1LB4QQDcdZW91h3z8aogx2DeSTYag9A9yUqCdVb43wtz",
  "key39": "6T1CjXkzhjBk1mFbjabZa7p2vhHC5cKzvnp6yBCB5oUSPXbdtdqrosTftTJULGAGUY85EMAueNLpdVzGTWUdDR7"
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
