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
    "VSW75G9HkVfvBmXQD2Ss3jV6iowh9UmoP9HQxMwzZ7Qu81qfemqysMeaHooSkGudnP7Nc2TbPMFoHMqjn8jemco"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CMgpjgof71Cxf86onDT7QUzRNz6F5kUj2P9TtayjEHan8JXk4PFLtXmt2LLjjmv7ncPiAnjeuaFsu6WMfSavTSd",
  "key1": "2WxEEihZmc8MrmpVL96NaAmPk9iVmSy14KstH2akTrPbDeb7UaXnMPoRaruB6D1ebSoNe1uKvR2cYZncywaUHWEY",
  "key2": "34jsUv5cUa2HDomxWvfbvSSj6yQyfK2HzUxo9mHMUgaDXxprrBiHNZBQkH7AtrKeWe9aiTX7gTMtuEqns7PnTXgL",
  "key3": "4GJtYR7aposW8UtGuiDMuhMYHdSTagfnwm4zpzDu2okPbLvsCXNuZGvPBFtZqMuzCxaLegfGQiLEzzFbFSXW9fKY",
  "key4": "3zM5PUF4LyRhsVWUQP4JLJbGVs8iYMzd8LnfmivHhnZvJbQ6BGXhX6h1bNTa6NjCtzJRCugpp4xVPLtXNyd66tLv",
  "key5": "5p6muE8SXVu6QDnZdKkQZiq669DhTJ8zhXUMDiP8xYbo1Dixtv2kkwh633KhQV7zpzHUuRu4cLqdbTg8p3VW9axg",
  "key6": "2fW7Ew1QgihXATyCC5pYGnczWN7TV7TcrLkEoycaPr3Uv86xCUrdhRLbi1g4HTgmrs4dFtWp8H2QdtphKJbr4HYu",
  "key7": "2VdHwDVazWrHdSH7pxbtrzaJ59AcXpsaYXRj9rTb5GHYH6Mw5p8VymBSVwqafAZEmvNN3XqBj512zoFJyXUi6BWm",
  "key8": "65BwesUzEJDRERG7nKcZTkf118NUpbXuKz7oq8fDN1rz2tcH4Lopd9QbTpezenjp5JZPkGrkVpBmnUPmoNZWyCT6",
  "key9": "5uUTDGx1HKJDkUpTM3Bx5c1aaKPxxfUs3KbZH7CCqQ9KUDZLe5vGgMoBLRGDUdXEoNTLPgg6fys8PyMcNQf5t2eH",
  "key10": "3wDCQtR2mAk7bBiGvG5xwq6cAG7mLCpXcXvXChaQ3fiEyd7rkTUMv15mnik2RK545ZmMPW6nhDwgnHi95uWcxedF",
  "key11": "4hiZbTxHo98qSPFse1NEAt7JLsFczDysVk1QgJ9Z6xmdFamQwVUAyUnnT1eFYpn1XytBpeJ5uU1WvcfAsNBp1Tn4",
  "key12": "3GyDCTskCp1JKSrQVUNzbiNPNV2KRHF8bov8Bw1TzFouT93G4LzEfG5zh1PudTfNo9KGrCtB7B1d3iLJT2NxKci",
  "key13": "3iXjWxyq64Sn9pZVUxSTWTaqX1EoR1a5ccvGJyq1Tdfw8yfAaoYSEpR8Ucutfievz3MXNCS3BaDBhNyg9N2NM8Yi",
  "key14": "L6ZAXj1wL7SK1Z5zMHY2PUZppZagisD8WejxvEoKPtDE7omiPfppAiyE5ZFoBA53pVHgLqavrAHpr5sVpArZCUk",
  "key15": "1wBZoSZ8fKuC7YsdL9eJmPXJza8dzzdaP7XFaoEGcLPW6bG68QsyScwSKy7Y9nN7SzDzgqKwM7snGhv3WAy88eE",
  "key16": "hX88tmK3qdHLWSFFtpmANJEyfLRhbBYfgDEdPZ1Gjz4XacCEG4bfS4Y1KRqRGBmP6yLFQYZHKmrQ5zkMbynEWPw",
  "key17": "3W1itfYwwLNonCo87vzViPcpwkgGPUc33PgL3ThC8TTtJHdhF1ayup8B6We7orpBJympbGYu9GeyWcpCga62B9qB",
  "key18": "5qaRKDbMNk5eyjCRYHE98LAJ7YoEVAqasoCtDM1o3CpG2pLKbsVJ1wneVeQakh8H2YWP2BfBmWPR7Tc5xYx3SK3i",
  "key19": "54NFpXFyyBP8YrkeMytqCGphqgtcG8ije94HYJQ6uyZage5mvVMH9L8jJH9nXffbHwBdR7bfLawAmD4Mj6hnhknr",
  "key20": "3y1Abs8xKRZtRQAKL9VfRf2CZK23XJCzf8Rmd4JR8zqKis8NkCJEsGD3a16pJEytp9dHCB4oZ6vxpRFodk7qFzTD",
  "key21": "3epvPBwDVDD7F3SbFX9fHtaVHEXX5b4E7aL1xSbnLkyynk1Mvq9hfSrTpxgt9FYEq7Yq4CUjABHkwMdwrkebxmpH",
  "key22": "4Uc9gP3Lc1GkxYHgwi7FtLJTAZM5qD6JoYjH3KGWrAtQJmsWDojE4JUP13d62A64r7dh3SyeBzh8tpHomuXqCYWm",
  "key23": "3KPfWAkM6VbjrhnyxoWHjAcxWXBaaoDty6NTw4n5DEsPipXHshUaibLVpDn6MXpFyoFPfSEhZpXDh8VDaH7vfjri",
  "key24": "66keyXmFEV6qvq47h65gCiPGyPpLShvQMHnuaaxEEC7t5HtZ8UaB9mbAqyMnXkXxvJAmbHfmsMpNxFMy7tThafys",
  "key25": "2vwPy7qEat2ztzVdy931iwjBvX82QSqQV8J7dfg3niujCfqFCMZJCAcLfjeSRu7P3MWovSBbAnnkTRnaRsNEGSj8",
  "key26": "5N3tz1NCg19xS4y4erB5dCPGZsmTUvSZ9awc9hUKma783CHqq3ToC2ewSrmYT1nmuFbgPWvWiSo7fNDCUGd6kw8N",
  "key27": "QznjBPTaBKJ8ckDZqGyHcsrfjFe7oddW8a5jdWd1zKvKyGbLzN3hYwX6Y8rs5dPka43hpXUkqUQDyW3oxuvFfrS",
  "key28": "4QiZAz9WfrLF66zX7mpgbVtK8qYkeizZN5sJj818azNUDHhJk1yxcaQjUHz5Fof7X32Khw5MaPSr1BHyNFuR6JMa",
  "key29": "3vdSggdW3YMH7NLS7p7nDrgAef6k3kF6wUwPiFsKzkUcfWtpXEW4rBoR22AoQWPSbT3rrxNsUb1uSovyLSxNr34k",
  "key30": "4S18GsTCkQca1DjdEcL2eA9cPNsfSF8sds3AThpvXyztXs1pC79P3ye3T7Dr2WrQy3YhtTA2d4GrchdT6pi3TWCM",
  "key31": "3ohuFuLxYncC4uk9qhaWPXqNZQReKqh4AcDDToXwgCAKeWfHrZHa1xfawhbkJBhWcUj99y2xGDoj8PmkHZK8Q3J8",
  "key32": "54DS2BPRbpz4ysYBGtVWCKV6ceTQ22c4TV9uzuYRKHexgVcQEcaprSoviCrHsiRS8MEgiLgFLqCfW13wK3LWTthE",
  "key33": "G7ACYh9HMN9LyKsB2svJxNHomSj44LcA4NKfcirMafHBjhaCr2avby1k87pB6tcweJA4s5972HeazJEuSqJvoqC",
  "key34": "2SpnczPavxjNqywTzehWpmeCDM3iS5CL48AQCrKjruDnMMYeptcetaDJmZAVAunbKtYZtKK95SpUYXkFzzUAVyqD",
  "key35": "4gs6k3GqULhf9E8sPbc3H7MvYRuWPXWWwiBh6mP7uFPQQNzLYwYKhppVKG8YbBLpD95bjw9WRgxiccZUD5gsAFsT",
  "key36": "3Px1pWWPUABWZ7dFhQkVBAVqDLfSHoqU2JMw78XvdPeQB2c3eLMVHXLajteFf7fPNA4ye4yHqnTKct8d6GuNxS7t",
  "key37": "4aZ4VWV7VFHAKGFivKit6m3HCB9673xUap7T5ZFg4mLCnz8SodPEsDrUHyZNPEX9N1osZTBSSVEpdPBxvXwhmgGG",
  "key38": "2yrFPYnBWtpswGVyFupMxkzbNb2gnoRnwGXRanJg6372wUnmiAqJG145W6qXAxqNFGawN4uNgxKXCvpLtLZReBmT",
  "key39": "4hZMUjgfeZAVYWtVutYLhvrJjkC9yMEq6d7kVSRFVgne1Y3KWKkcHgA7zFZdHGp4Fk6P8kqow2tux4ac2a8fVUEi",
  "key40": "5czcbAmieMTZXJbQ4BSz2EmWfe5nMSdncxAMMXjrVpMMcnngXGhGMkwuv5SjTV9fDVSzMYtda8Z4azrzyHKNLumi",
  "key41": "4cLNjoDjzUzXRgbbe1VcNS99MAYo64a5Gpsi1pwznQ46Cpm6Xw9LGE5XAXP8UFwoKHjdrcW9aoyMVPvjAei4mSSp",
  "key42": "3dXJxvLenMfinr8c9aeeWAqADpfM51Vv8AvwTxRCqJrVD7jXdR5WH33N3Ay86k5FcQUDuyWezRSYBQyMeDh3AAd4",
  "key43": "4sQUtLajYnS873arf1dxNwVGNzNg5z282NhAbKnpgd3kjoDuT6sRo3SsqBdCCVnb9ULuf8RGVkVkQeh4EBAM9w16",
  "key44": "3eSmxxagFaVFb6ak6SxfFLaUD3TVGh2SuBDcXisDjVsJLL1pmPA8qsrtRcweveXjHWfde2dAi6XcLAWSGzsjfWzN",
  "key45": "2RLfauChDWp8XxvSCtv6d4P56Tj41E5vDfUkGq3Ken5vA2vdsV73UchqZcn2fKSEfEpQMZW68xYrSnYd7mer4jWo",
  "key46": "5cpoRZxQEkwsrzvc85d1xhsSMBeFvyqL6eFoKfW3LUai9FdLiqyMyXQ3EaazUYxacgB1E9sdSshz7viRFveUqwwr",
  "key47": "t4mwyEXxbWXTwvriCBXrMtrDcyoc1KRUhJpKCumcgvcSUMXR8PHkjLtWXmFdK3EXUkRc4e8pNbTvJXojEWe75DJ",
  "key48": "3cKcjf7LStrnAockMco7B3onwHGv7o4XnEFbw9o4uwP7iveWwU1HQDyqq8y4LXh4vf6ZkiAsZ2YuXX1KyYKRb8Wx",
  "key49": "mRrcWzgNMd8yPArWmmgqNX3yFvJbesWdb51bBVm9g3wBwZQmhPt1eyuNXKM7roqQsrfpuueq65A6mZiKhjbCMPt"
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
