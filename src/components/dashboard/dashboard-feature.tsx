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
    "3VeTCH6q6bbUCTpcF5ZYnPedo8w2dwPHNbQF8LC63nY4JVsdMCQavfWuLdYMki2s4hQbZmeTFGK1z5akjwP7UAhh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62DfBiVWFj7JEAhxq9hrPSMeCY9SwtWQeaiq2dqhzSk9624jAYRNZVkdwnEvzTkdUQyXCRGSAhPT3aHK87bS815Y",
  "key1": "5YMbVUBkHn9ttgcs3tTXuJtQAJxVHovNQCY94DwB1HUcofJbJiDCkPsQeCsSr4bNPTwNwen36Pf61hUEpynwEBtv",
  "key2": "dovVYrmyTNK4AeYG2FRTFNbwJwmst1qpSoTryNyjhuo9G7TDktodUTDMCpnBQ1uxNH4mbZhVvY2wwtpHn72xejN",
  "key3": "an9MbDK5CHXQ213EL7AigwLPhQHUgmtcNape6oYfY2j6xMzSLA8GmgVP8CoKhgLVSkYJhexBfxHwcoSzmNzKSiq",
  "key4": "31j5cLKMzj2XHjmz78Cn7n4Yx1DuoeV2sdgLmTKVDu7eTQQjYhPdw5UU9NW42XZhZqqdBaGfxW37dS97Vj32Xxi7",
  "key5": "6vbQd3mrBqiE1eWnDKeuwqbHkcdnYiMAnALWhUS7XbVLWDHhNdYkCxiByvbZge5SJojGcgvVaMiXKDucoSnUrey",
  "key6": "2SpmovAd2q23FdeCfqywoQvMsZB8fKFTKJiRK1jA9Wc3Zf3wKSZJsz5fMwGrtE3ZkCJX4bZ5TnkjGjgu5y47MDys",
  "key7": "nUXQ2vPNvm5dFD2nwBPT4PipKyVZT8TcpvZWL9revuCwAr6hk4DTygPdccwjdv8T4u7SGcL6YegaxCKdLzKqB4G",
  "key8": "2wcuT4zvw4v19S1cdgEyY3DhjAthUXUFQa2kvnknwh3HeBUe2uzehqxHA2tThMhQcjJq8gf29PAtc3nQELEk6274",
  "key9": "S1PYTfTSLQ9BQh7B47Jm62uL8m21Un4oF6GvmHXgRMRSDxz378i6XLSDm3xRjjtg9aJvu2wpmFShATTiAme9Qyp",
  "key10": "3pdSawpzAy3BCVw8E2eHQUB7BP6xCpw1z1q6dTawMDgkk1ASwjpswcLbFKkcfuUMZMMi9qCHiaLMJoXxuJcVxCSE",
  "key11": "4SoebcNWM9jMCYC82fTvqeg7MyFx63ZxnBZqWUU2Vy7q5Dtzb75MtqqH2R8p1bAQ5x5bAPR2NsW1FTDtEfdge91M",
  "key12": "4Qqcuf7mXo17FUAnAraoK88rV4jxnf8Rpqr7oEiashDvcRQ9MnC7rdcwbS2bpphAcBdeSxcSu3aQwq2xwf57pYqk",
  "key13": "3L4aMQfuwbLzpCqeTf5PYjS66ekVYno6Crky8sS8syY5bb6Xse54ZkcAsCXbA7R7bdhMExv3G2R5QZ2PKeET3oFR",
  "key14": "2sS3DeMWTmxNQWLtDc9BW4k8FqaacGaicjNQTqNSYwCVDkfjHCurBUHodEjUp4nZbs1LeS1PhYgFHQQSkkp1EYrs",
  "key15": "5ECuSxcUdhXhspi9tokT7uibGHrTKLSznvkFzkMSbUKtyQV372BjTrdbQ3AN4wgUKym5AKqXnCGmhPTJE6xuGxf2",
  "key16": "LsUxJcmN5XDDerQ1hCZv7ZWmen38E1Ka9wspKNTHV9SjyAXnhWeg15Tx1QhWuNEYHuaiMGwpuhqUkEQ3U3GfjY6",
  "key17": "5bocDYvxFKeYoZy4PfH5EnotkYphe4VeVmhcwsg7TCSzjdgLFZhk1qyGmjakpoUN1AWxUYHi7gDfYALWmKorNapP",
  "key18": "2HoZWbzTytYoR11JaGffACm4KJqgeHYSyUgz7Tqaiq3rBUt46PKx98dXiYnc9GKLGDCJEzPhc8jtoApwmgyKuuL6",
  "key19": "29ajqwFooHebA8hdoxbdMR5dePz9V7Wxr77Nvru8BAdGcHrJFqtKjUWMx2BHRvVqhLUMmD1bpNCCPVnzDNveGDuz",
  "key20": "5qmpPAsjMsyXxvukTMonbZFd72rUZ2dytbySePyP2N8imoeZtS7bSg69nmQ37iU5jWNU2ymVNP3k4rMPn7is6HvA",
  "key21": "2qjmsLeQJyjGvbVuSmRBsAP7KDCfhkX2pyVHXeJfprxrZXVkzKigvXRinxmssKW1LRU6k8mCL7aZZig6hPmi7QY2",
  "key22": "5TJtUuV7atKouHNpoyvpzB7y2sKwDtbxc98SUKiN64p1XofPmCq4mELSxLfPR9QPts2BNxG58eKc5N5u2gjKq9KN",
  "key23": "3drCtKig6pjGcFemAeD6rGNQjz4LVNKTZfyxFfvzMMFwKqiZmZqZZxbXfRyEmX4SUB5BwcxSGhyV8Zt9VD8ewskA",
  "key24": "65k7WEsdCBPsyNKMZfD2MnoXSAFTfWDicSbMnMHS9XnLqs5fhprmR2kR5eiDF1FKGP9MrsdJdemWawz4TVNbPvZd",
  "key25": "3GzCGV2gUEsdxxKyb6vFfN18sg3h8o5Hc2bJwLLfbu4QemreysZnWeCwLjRZEjz8zGLZQEpwkb13Mv8NdfVMGnfh",
  "key26": "zfEvqMdAsmeUiq9YR3MZAQzfxv99R442EYYdyJuoE98Q6SvzMYd7BveqeemfuqFP1pD2jfDwv54XNR7sZ9BbhK5",
  "key27": "3bfSM2RzSryfAhEcXfJYRzv74bcUCGxJeCWkvaPz5GbGgnDVwsiju5QpZUSNPGNorzbVp4BY6KziFWh2ijprZWri",
  "key28": "61EwvyVVAmqJyZEcTrWr5trJyH3YV61TyBK2ppg6YZEQCFPMvYTbhJiQtqi59ZYkigRkUNJ1BDfGkbSkRaqQaPyP",
  "key29": "7aJXAyGMaP4fk9USHVuc4P68PrEfh1NBF5NrcMkGJJuqxroUjrsGjuDoNLbR2z16UtZRv4UWHrKLrkB6GqwkMNp",
  "key30": "PLgikgxph1jhrDDxKVJtGT2EU4ePfVrRuEUF948aoPQKTirpGqeLQ2GSGi8Ds4xDYejenEKTe8f434UbypY6o8m",
  "key31": "cKU9vkhqokwiJry8yLygXDoWrDy3eRhQYto8YFGEdbCfWCVsVJjgzwR8XdyJJTsDtodJ2vtuAsNshiLo2X2KbTM",
  "key32": "4NofAd5PHuZ6J2FUTGV7s9HEoqBA8T6U1Mwump6S3Z2MuNBavpXqak3MajovcKaVksxpYyRrNHSKrAHhkpwKd3bG",
  "key33": "614as1iYUAqXpVmwAwYcknwnytQG7r9Vp9KAiknKZoD1Tg5hHJwLUPRLo9gbKJdWYxThqRQYFNV6yXxE6ZY8nf58",
  "key34": "qBwXx9kQgARUkjzKPC8FhLK3ZxrLQLmoSRwDa4bk42PiSSrK7iZrFtmXLTzz1wsUKnrVtaT1jY31MrJN81tBsPX",
  "key35": "4iMQM9xpZ17z7CixZosrGdG8Ls9RTQuYR9SmS4cgAnVmQzCCRfexq6ppeWaG5jvwz2q5M4pqZqv8WNqPZgzMRY6t",
  "key36": "NbbEXLcv5VNdrGSCvUzrKMoKRThHuR3zoh4Let3iXjDgkWQMT97uWk5EhrYCULGNb6oCQMZKQAoYpqKG64E4Rep",
  "key37": "2SsYQ9a4Zr3RoMpxEEpoashAyHKW6iw9acb8wEG1v4j3dTHcdWWYRCMNj5GtMeUTFLzQprcBUWy7aY8YXddxzBpp",
  "key38": "4GVFeRfoVjaGsGN2YVANQf85eRC4iw7q99iYS63Go6zGLYSVBL1QFgyjgJP7s7ZrTPH8Th8gTYWGPNoPV6Zmbofc",
  "key39": "H2Dv3x1J22eckr3oqoPkv7MLFwntFbZudrD3MY1RhAsEsjhDut7vYttVMRy9o8u3pH4B1MsmTFZJ6XrsQJqtHGe",
  "key40": "HhaS846nKTW3tRMAjjv8XjCXpjs3jQzF43vTJ1sQRNKVJvRkaRb52qnSSu4sjkHNoFPopWpz52jeXduDp8zesEq",
  "key41": "3uRDACMCrHvxvMHD3fzD8MZ9nAEpK1eGQM1zgKz2ecFjPHtez96YeuNGnSGJ5BMSh5ao2V5RAH4bkYNJLFSFHYFi"
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
