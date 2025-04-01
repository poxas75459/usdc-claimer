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
    "4QsdD744iZX2pvVvBAmngXACSMsqaRwkCWVRJQFyvixsd59igMjQtQT9KBv9tKcoxDbTw3fJF1J4EgF3gb6hRwq3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HrNU4rmCYz7GaypEQVUVqKW9uGcDmUcfgMDYvY5UD3vXxBK9zC8ne6CMhMKcah8RWteYf9V4RN7ap4F3xPFNV84",
  "key1": "EAZ3bJzihZ7y4YuYtBh72YtagdiRCkKabs7Lz35RBadu5su3StnpnVsrY3XCxjdQtBoZy6epGKjUTt3ATBStvSD",
  "key2": "3LkD1xXKt6HtwkyPZCAt5JAfZDPcrW76CiC1HipimdPyK6iFS1amxuZmGMPL1SgEeWCAz8KfbKm2YuPVEiqdA1Qt",
  "key3": "3CgizcMZtx8JZfcHTbsxRJoJydC9n6Cf4NbHi4F1V95zEpiLSvxi3Wj62QLoeZxUvgvXVSpwovvtJyVYHJy4gVrs",
  "key4": "26hxQK71pkARXmuh7FpbezHUW8t6H4npVLxEKoBfkW5ZXKuqmdDndR2RrKaxetgX2eyXkJfzKXbv2GMjsf7NbdGV",
  "key5": "5yM89YsW1sHfruqVbDQu2iHRrzoXLvgKrJt1TYryMJGr3pEapzLUZpL4BGNoyUQEUoT6yU1SrqwgZWMNCRA4UnjE",
  "key6": "4zNB92C2owYRgxP3fX2xxQTpJTf3PNF5Vzf4MLtFWJP7BVmHTrgdWP8uPLeRCZTzKwDEZgR13iEKfARis2c9XWh3",
  "key7": "4LPZT6yjNpKf15a5FnrnjqytXRdB2F4qSTTWJTAY9ZUVF1eMMA8mtT8yByUSfY3t3hB7So37MmyGobPrE1M65fiT",
  "key8": "4g4UJkkeaBmGc8eqaEtmniruSMTp74bpLmrdTLigcSfkqnKczx9BWyUk4rZceqz1HBm1qjpPn8ucqimzVFpcJz2J",
  "key9": "M3uwp1rqyuYbS2gJaY1GwmUsLWDdLDdWjbzShG6L4c38zRbbs3fZCHd95okz26D6FJJttcjk23bPyFDejNb1Vg4",
  "key10": "26mDonacJ3W1jd6JYa4GCdT5kshw2hMq1BEMgT4JzywUpw4c4dAMGrdWTuYv2JQw1vsdeRHJ51sBCMkpPsBSaeAD",
  "key11": "3MQFqZu86nMb6qUuPqSiJ7ZyokumVQoNdsX8Kp7vMdrhxPR7pkntCVmKiDgTMKsZDwThSRECuvHtQq8nXyJsoo7B",
  "key12": "538JnpdCFPBp1JhyCJYFgVgTpvQ3scmE46ZiMKTXVkyUjYSwUnbGuRNr2yhA2Zp1m7BHowbzizMUcUw4sW9M99Gh",
  "key13": "4Vbu2rzcihXcDSGkc96anEyXFkd3nYMHVnTeUToVTLm9Q9zma4ickSxGdcaKEQQ6FCYo16qmYF8fyRYCdR4PGGND",
  "key14": "3RhnSwHPpnWsp3CpaEYEg542kS4iQ7gaCL4kmGUz24tRS7hztGVgKRPhpvfmTMqxaNCtc4AwNspQNo5m7iqou8rp",
  "key15": "jw9XkEJvN4qWHHn9fYueiLgRbLPkjkCRgovyJqLzo2HBrnJfMjAqJYB1cCaCuGSK5g5jc28Aet1sKa3pdfF1DFi",
  "key16": "MpPDFD9GYqU8ybkXXER6e8fJ34DPFaeYgdDCBaBrHJFdFN4NN77ffxfBE1PdPfVTqbsvXTRAjKQeSKL2KyJ2haH",
  "key17": "5oBA1hVZjyJcTxwhczVnLm5uBXktKVDz8VrLccwGM4bWpAk6Phm9uVNcSWbm57mkodv99y8XtgXahSpbHUabammF",
  "key18": "u37Sxr8mKD8SJcJKqm771og6dVAuDmjJKWWozfugNTUuueASPuoDGfkrVXeX9intqjWjv5xMWkhZVU9jcQvhgrv",
  "key19": "52XVBGnEdWLDziLu7E7n8fqqz1o3sK88ZvCHshSfnGwiipYNsXmS3tdhyW4ZTdkjCL6X61GZ3w5RKznYqPPvgeKG",
  "key20": "Y7U425h7pQZ4LocxvEHWattdXNtKvUsybEd8zmJHf7DFAega2riQAEgFTqRgxTLAyjwLPnXV1E29GQf4WPjnwdq",
  "key21": "5MuMCvydK3z77X8uoT6HPEC1AVXWYYn4qaokYRzfcg3RkuWRqtP12J6RrczpMao8QDS1qYtJ29rfd46xLPG17mEA",
  "key22": "52ppos3JeGt9beA3K1RYNGRTtGkByZ5VQxxXGRMYHJpRDcWaC41QAvEpVMnZzpWysqe3o1aJLAwTyP9vy7sdtKuM",
  "key23": "2dqpd5AU2KGkoyNtArY6DaGmHKvS5r1R11H5PfUyVYx6QCMfZFWkb8hnyTpVJY6y5kv33Xdh1tSvjHYA5Cq886vy",
  "key24": "4zf2iTwTuLkBGhGB7Pxu5vV5mQodBqm7sViZTMjYJzUmxdVqRE37Hq4YG8kvAfYFgaxmRyPsramEDhurLpcB9wB5",
  "key25": "3tqJJqkkDbbjAFfcVofEDa61HcurqsxPocgmdP3KctWNwf9CM3tASq1VsMLW6u32JU4y2iLuQEitkz7a4gT9vKDJ",
  "key26": "2i4zn5daXHBENuqwFyp8uGQPk3sLFrEq7gPxPMUtEek6ks1CuYXzYz7xj7qAtcBfx6iJar2j7yqQ8SLdLSDqZ2Wv",
  "key27": "ucjYcSchyDBPwVZYtwdwDiHZAiYXBAJj9Nek3D232yE6Vhe289MEHp4drvM5dSayWJo9XtcjVit7487U4ZiJVY1",
  "key28": "4Zk96fVSpnyqem5bUtEKxABjibywTup6AA4oPNP3Nof3hnT6wTvp9GNLQ3wM7whCMowxM28R8XnH1FEPh5jyVEXo",
  "key29": "45rCQ57pTkAea969emwB1dqqT183GZcTu8dZeUNB6Vbt6WnUeEfpGBUan22PUSv7ey37PjK1vnbogF2F2gJKnfmK",
  "key30": "c4njSBdFJui73mFME2PGWqYBjU8nvKfPfEJzqhjDqCikN6HZuU7LubpmJBD1cX4ftmLuuLVrY4pNdgVzpxVB6fF",
  "key31": "3TAYEStfoCa1yFRvufmjAyZdFLqnENZz9QvPd3MpMGbDj2f9MhYADwvwFeB4Zf8aSo58hV6FrSLADBfiM8mL2Nj8",
  "key32": "3eZpTzuyMYqBjvdxUeqEbqRZ6GnWSKp2Bp9hipwpkZdPbaGza5MfDWGpssEuGnUE12eCVacSetkPcrnezgFrmEoP",
  "key33": "5CGb1jyoXpjRVjSi4zMYDtLPUVqW96XxiChGjbCd9GGxsg94PBKXqKDM5UW8P91ke8pMeeXW9tBCZtmd7GHZpqWP",
  "key34": "44QvYTuptpBRzgf5Np8CVhBm1vA1ruktH3vypaQFZrP63m7dKWH1R65eGB3DvMeJdCw4RRXbgw47gMeh8n6igF6u",
  "key35": "59PF1SQm1Z2WiEnR5WytnF6mBWFXAyHCnCFvtc1kzFSeTnFM1TfdUJCyy5paz4QYqUP3jQhqzNEeXofdQhqzPTE2",
  "key36": "MqfX4MR2ck4nhoxUioQKjWsZhegLTbmT9BEMgSFijwSPYwYjSjdPfBhCyLb3esDkBKnHvEWjPRknMEhVgvoJk1s",
  "key37": "4mN9R8r3irRnKW71yQ2N2EBcyg5W7m3nvtrR46ovFrVrBBx1jqoJTWa5d8fJ2pTXxpLzTEgsz5P5VDPEQS4GKKaR",
  "key38": "4xS2F8GecM3GgUiUq9FxyvFLnESSSX4qaxLHyVuBzoRU1iYb3V8hYTb1CJn6AL3iNpA6EDqpNbAuJbocqtrCwUWi",
  "key39": "2TwoaQPN51WAxh8xLjcZU1enXS5pJu9cC9Ef6HnrVF7m8SLxvuEDr6cDSVF9pXV7QNkCXvSPT6vEhCfbGizY3BsD",
  "key40": "3ae7TgkTnkT5bUgRPLJabkjrTCZR5pePb1SEqUJZQbazapcUCRT1GKzh6kEEnWMNiVjwy62HzzorVhhkJwxvTtxA",
  "key41": "45iX6VR7uhuBEqdD4ejxG8pkB2e4xWcH5KhiQGy4hPTfrHvFnUDwBXNX7aCJFu52VaczYfGLuXGQGVtfFmhUN3Ev",
  "key42": "5kGcUDLW1DBN1YSYqtYSMqct2vXJ3KDYyhZaLJ5zc7ELCmKjfMyGYQh3qY6kxQNqZ1Mw2xMwRy1xiqi7Aj7L5een",
  "key43": "43e7bCxL4bTxDCDpJf5fSMRWPSnWsZP3fL8SFjHrNjkSdoeBeEsairZ9eNfga8JpgGDaqCRkghEvVtGzDm7ixhTE",
  "key44": "54Dhyna7mF6HP4KUcvi56xkpEe6DmjVgF9H2CkWBPbhKaK5cfBUKVubhYZvQynJhQ7ZLouKTEH9rTwUK144T2xUK",
  "key45": "7KpJs7vvKBPYKBbAHQZuiAXB5PP5YjZZ6XTYQ9SMSgmUnNxEyQCAVH1buU44Di7kGc7tSowsdMxbTeB64EXRzMB",
  "key46": "5NDSY5vCTwrMxsHs49Uo9rrggcKFGR3wU8UAiX1sDz5esURLppP2EVvTh3AFRVWJbDF3NDcntGEuk1fXUxEYRSxF"
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
