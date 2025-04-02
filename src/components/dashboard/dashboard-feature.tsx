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
    "39o9dJsFpzLjTMhXNDVCpVHRy32JnRC9dUMeK2SEug2hKNYnzfqB9Hmi3kE6xVfnZ8C86ceqSHKw2mBq8tHTMoy8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gtmNFKSsKf5tSdtPAAEerauJuEma4ynMTc8qQPaY9nx5eXCHdbmxfd1ibYgwm4vv8syuhEtbSaN5YQd6ic9qUDH",
  "key1": "5LN7e9mZ8FZbwcVKFGt6b9xsxFjmHfUPmvBjhwkp6koNCXCuMAd3BuwGH3WQjAvu2G4hYzoCBFHLUFnSKowbs2T",
  "key2": "4buTzpSUVmpDR6azkMorZxTbH33MerfxRfQwqY8DFx5L4bKzzSyXiPr5gY6GRE45b1XqEXrAK5H2bnrRvka8X5J3",
  "key3": "6JQ9RfYEMn7rXf9n5C8nu7sKzjf2P7nCq5QXdFoGuGagzAgkkaWGLjespF4UCBxsEURzgoKhe23hSz3ZHgKHN3C",
  "key4": "5QafGA5RpogHhb6enrBASoSoxy1jLa2fwveXuP7EXnBxZSZbtUk4xuCw8Pc75p6MzpciViHdM3TjZRx8rWVaakoi",
  "key5": "4uLmyxZ3irKa4jGoXvBnmS6Ae2yYY9pEpdxaNi8My7XgURjFgTrnxsmBKExgoCNTiMf2pKwPFDysSbBxTN8EAtF1",
  "key6": "2u8TvV63Bash4Gu4HRaGH2LuYc2d4fGfFhLrYF4R6sPz5ukdaDj2UNLshywBimGgxY2hdEX6aqp8v5x6gSKTiHWc",
  "key7": "2PWAKaK9jPP1C7nDAKofRdpThr4VTrt9di2miRLvjaw92hQkZwPKuZo7WimWkQBdcr95cvVAJaaMmawTNDpZznd5",
  "key8": "58s6rQDXJQQJfKRhKv7AAnyR34m1AgGAqMB5LxQ1WAZoj25kJxvFcScKj92x6h2eG2388GCQXd6JBmzA61QvWhR4",
  "key9": "2sPZYC1Nu8eMbNQqsxDaE8uyKYs21RrAY5XoMY628kfB6XTSoepWGNxxPPtShmWwjUTdjUWmFA81iWwR6mGFzsdV",
  "key10": "5SAfhqqkXtMnqSWwa4rK7VoHZR2x7jezgfxwBNRSQ9DXspdYDEim2VSvuwhKvvoZp7md4kCRfcPWh8op7dKT4ZrL",
  "key11": "4XPU6j8sUj5CvKPC7Qn7mKEvnmThjVuyio5th4oFGGcxipYCTzivWsa9GBNPjkyeyqdvJmTCc7LAwEyJSWAgi4qd",
  "key12": "3V3J4RuNCMMerNAYNUeXnGAS2E1qpfGLzdaQGLyksy8auTKtptWpuZwDz6J9zoznP91EE5qeu13j5iNkNhwdoj6n",
  "key13": "43zmy3FyqoRhfRr3wZriHwmEM6e6AwCAjsup5on8PYm9cDZQb2DkjJ3fGdDBcznxqtt3DafYU4EyqLdQZWMw7bRy",
  "key14": "2hF94m8Bk6jFScV6AoQkZukhbqg7QGq7UjdVpTJjJTFwtfjFcpKoRTpZdLWo25hLVRfZ4XUXN7ZzdwmaiGuXxh8U",
  "key15": "4aEsYrNfXUVkwzndw47hVzDUNfxMrqGb7vhkLWJV2Whdid7gCHvpnbu7q51hQqsKTJdLTgZPpdrkhTWMb4obYJgD",
  "key16": "4tTbkbq416h763ZWAjMj7s92fXmzUAfwZpKHETwoxBFpykjGP23ofrRuYPqkeM2EEumYumc7xetFcsGBnVpbSgwP",
  "key17": "3EhfhMXKCWv8BLijt2nT5PiQkpqiUqtxb4K4bwb7zhhZ3fi6NdBmAYyG4M9ZfGQAv5nebEivCoYxzZmTADti38yp",
  "key18": "67HNXvgpES3Rhg11jT6Z7eqQpYKByxGJyuNMLVFzG44LNQ6hZGo4LYge1YKd94U3fY3pMpAueqWT2dWUeCy79a5J",
  "key19": "xoxRnvcYfqQUyoPnap3TpciPF3sUVYVgBL3ij3SMaAqTgQt3k4jZgtjZPG49vL9f9mfrw3t4Tp55rpPoqNgWRdD",
  "key20": "xBv1KaBEmUy6TQRGK3N6vCk2fFR376e9pU5VdZDWha3XZdLkkScXW5kJjgfKTGLbb5K7M6tRgVkoAUxP2p3gEQH",
  "key21": "4Q3wbUL5gpHqTEtVkxtAPyttbZjeJeccMpc7XTsbjv6VpfsJx8wwU7zg6i2XdgimndPyH7R1NKbCK76YUQQu6sT8",
  "key22": "5ZCDEsd7DsEnHGq4gAT7DsGKimwLYPCXZBZuWxKf4F2yUyeTBbGx2C8nxFeQw19tfCrQy79sm9fDATKRhZPYAUzQ",
  "key23": "2dQYFaphY1qyzWfWRQEqiDY4WJUSmCwYjZrpNFJR5cihkDRvZqxLg4Jzv2ur5A9ou5kYzuzvcJ1M529gM1XfTyQP",
  "key24": "2pSckipW5HSQ8yzMmVjjpDRFLFtWgfEVtCjeYgEDZGBU4v8ev8wfSysF7HhfHoJEL95dfnxWvUFTfMbbPqQqnpC8",
  "key25": "cizBXy9A1BQaBc5Vhvk4d9uEnCfNBQJNBwUGbSEn72xQPXPQAHwT5V5adbNwPLFBqrBdmpmgWP1TcWNU419qJAV",
  "key26": "SzrUyPDMixqxuE2JhAns4tk25W1WFHFja9u6dEiNxiBQbDHFYky9Y8J88RLzSPhXPoAL9fcWTpzeYWASnN9UgLv",
  "key27": "kbaQNRUrktpNQg2Dv3zFARzWdAriHdAF3uETGxTNixfRHZor2Rjgv8fMj1XUHyE1Cop8TqewbodvhnHtWKwzUBV",
  "key28": "3bwNCA6sFBHTRHH8qZaZatJH13zubZCndZabDuzuHVX8oCVvXBZo5qfcDLFootcYcMXcH6Q5XtasiMTKMhoEzpfz",
  "key29": "23Demi44pxWMX4mvptBncAaHtPKH5CBMs8oKgNWjpp9jmh9FBSoXqVz3jAvu8DydpV1p2X5dq3DvUW1USF55c16K",
  "key30": "FUXbEAuXUwQjPkYgyyUc8Gc1T7pY5q3XsFfDxbrSNs7qiDDygzRKp4qQ248AUFdTD7DfTxkPjvGiuiGDUhGocpZ",
  "key31": "4D3ZD2KUgpAbJ3nQZAwAamknktuiwbSFGfLkVxGqp39UpeXYCu8qiaV8qwGt6bWAmGLweXcySeyN7wStapzBxYvh",
  "key32": "2XzcL3su5SruLWXi4jsvaQUNPkHBv7TeEFUMXABhV7HkZAQygyHE8rh2CT4d9U7cUZCjigoETonewjLVBBbhV17d",
  "key33": "5p4bVzX46EQ58htRevu8JLU9tZDB4WeDSQA1HwJcTKYxMpHPRoiNQP6g2RnYdBZEnPYTSa5yZsQ8wbHL1qVP4rFT",
  "key34": "4DyVkpv2jcq8Mf1w4Q8ArjFTNoPTPqk6f3ZdpEDcfzoz7VGaUx4TJQcPrrioZXKYgWWyeoEgW9iXDd9HZBNATN43",
  "key35": "5nUoLWtcHatUYpJfAmD2TAZiyn4SFpBsFTV5h33UVYyFohAE5s1qqPFXagri8YPpgFyXG3cwNkmMbghHnLQrt7m4",
  "key36": "yFvLBqXGwUUsy5DRCUkmLVMAgv5wT16vY8Evr3tDHU3Rmi3adtytJCMPkodHdp66Z8N7bsk7mcQhgDxiQcVhasu"
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
