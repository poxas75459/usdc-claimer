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
    "3F93ihqZaFM1k5THmqYdw4ghJ7XAApJo4PMF3Jh8pxoM7v7gnnoChdTbnHmM3QftDQbjBrzwtEwdPXpvxSSCLevt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w4fsV74wJc485aVuRxn3uZYxVyqowhua1xy4LsZZpUi1heQREr9sLz5hPeio3mudPS9hfm72ZmM8zcJdr6H2PKD",
  "key1": "2KvC7BmG5Nok6LiKe5N6wnXZ5KJEZXqjWVnBPmKUkaHR7afjwsarYCtA5BMZ9oqvbBqyuwLvrYAMYkhNmmSyYeB9",
  "key2": "5EJyBgj92RdhLAsWswL3gvBi1mbE4VDo44twkdTMFApWwW9HTwptwD8uf6qiU5J58gMaJSpiDncd9FR19HcqLyLT",
  "key3": "3QZHz4YRJQi8ydS692go75mLDbVw3zmjqe6A5vFPFyAUUYSA1DDsC5dPQtnD5A9Zj4DHgLHW7YLKZ4N4Eo15uUCF",
  "key4": "aoQwXgzuRt1XHXF5w8L1aLdyRhHj6Pbb6AWBqq1BmLoLHTbVC2hnGsY6vXHHBq1A6FAUx5wsq5YuMDLVjXvpd73",
  "key5": "4kvwsLnS2DwRrPuWKNVc55jY6LwNoRHZcJXwkGDHxa9WRFDLQChaC3Mk4Ck3GJfQS5Sc1jeKGVQMb7BjiedyGDhw",
  "key6": "3yFsNMfawdu5vMJMpjXGgMPF1zLy7Zgh8GsL2V6EmBQtkfAcsakffDjZ2Qn3uHdia1F9Ky5D353EnhmPXTRyhtQ5",
  "key7": "44gemf1eEsYqm74GQkC1oXzsXGruBZsdunP1bLLG8uSqviiRnA1WyzfzSoQ8g4YvTeiSQsi5ofuCpeyrXgpjBVaW",
  "key8": "5yqc1hdjV3gL7BzD2SLk1g1tNUzEsAiCv3sBdTPam2otNNn9kBTRxHih59jrk3j3GX3DKXDosVqCMk6CoBugCgu8",
  "key9": "3dTTHdyF2sM65NqKMtMcqS9iAphtUchVxmDVhNoovvwUA3gCK8DhuTC1tvTrW8F7ywWaeDPRjvNiGtiP33hAkN2e",
  "key10": "4sS28ysnDjheBfbJWZ4bJFWqkVXNq6zz6Q6RoWnCNnz8mRP6CRyiTdVnP1NuYsrnzgN3EDc4SvhcRefkv7ki9EL3",
  "key11": "XkNK9dr6s9F3A2ckmkjEqgpYFh7BdSvyAJay3SKUZtzbnw445vxxRPi6dTVdRaieRrtV7Vdb8kY5bDutqJDkpK2",
  "key12": "2TVqno6mS8oL2LthuTUq3sLCoKoZhc8Tp4DPzhiEwAoyNddjw5YJ5xf7AwieCurc2UZxbQ5iaG6ovULVNM4iHyxh",
  "key13": "3Tb4KbWKFSjejRriQZLTji9oor84SBqSiiu4izqdS6EL6DUFcAYDLM75uu2Zf66M7yYYVso9hz5X6fBvbkB7GWY3",
  "key14": "3HiC5AQVUTcfUKrptguAiFcEKmRzLZdeyyu6BAGsHkVtPjBQ66MJMjy3D6RjyS8ZRKNUBe15nvYYQQf5FpunxesV",
  "key15": "2nLV8gnSb9w1XXcJjFMTctzxNL4TRm8qMJ9thPSfQFhLAyb95JjCVNQBvECsRSfe34BjDiJDSM8QssJS9whXomWh",
  "key16": "2VJvVtiQhZzesvuSL8gunPNrVVppSxqGxpY3ekSHMSeuo7gc87Dz3ifmMHjLEZh8hD183hMXjkapdcWfNQ3UQkbR",
  "key17": "PyyxsMFkT5o91hEGHdLP5CgfYoVwaUaC6mpiJgwgEZv4Us3MvwA9m2qW274zcKC8SpzWP2VhXXics6EyHAK4yVr",
  "key18": "4JQa2M9v83afka9xbQ7RrSfC5H2ze88vFpcvz6maNH3ApkRLBWoNApAnTxgQnMccmXKkhPeoE2q5q5gigAqrqUJx",
  "key19": "3Q8hKUTqMSQ2p148RkRBTxmkjTUX4YdVCaF3fZaysW8a68hN5EHK8XK8CKwwmNU9dstDmLyznSNvg6wUvzpYfjRN",
  "key20": "52nTYxT9yMdT4kFKL2jBcCK7vRp9EvRMRmnizZXQD2wBTnL5ZR4KquQSwbgbdqGuBE5PbXXWGWWQxcRG34LZJuVj",
  "key21": "4SzJTHoojyg1fVEiccPaQLzmZBDKMEbuntFRMKrwR2eYXMu2nEhnphdwbiWbNE4QT5fXF8RLnq1YhfUjZ57cZfCA",
  "key22": "3k9y3QFaoCdfRRRK3AdGARwy4j1oeUxA9bLdXegzAZ4mKEzdatNA41vuNZFF99ndGEFvEFLLFU6zapCJ2yEzfJaU",
  "key23": "2a8dfFjF6uyx14kYdne2oecgzLGSDwgo5SE5A6PpG4gpNCi4jkis6QWVsRZ1jfAr6HFir9KyTYdCQtB944N4h8cR",
  "key24": "4Dy9fmNBk1WT1mnNQdomiLyRjdJmU8QcrGmFngWeR39UvzLHr8ey2w3UEFG9hvA1tS2sPmLAuzJHfmz34j6fWiDW",
  "key25": "3U4bNivQ2qZtah63ckVX86SUb6hNPmeNDauF1yk2UncpAuX9YNFJrXwfSsv8f7eRkeWdDLAm7hpyp3NJA1VikCHd",
  "key26": "3mN5rb9mCR1yELD6dueLpkqyVMfqvozVx5cAKN8AbLJkb8im9JMTfWB4m8cr1zz4UnRCVjzzgBVC7rqX286fwiVv",
  "key27": "3anVEaHvPD2qNLY6n4HgRGoH7UXg2Zx61Ea5WmRzvqztBydkYB4NVd6oyUtHxoKMHyn3Vo7rXKVxEshwz3dtaUA1",
  "key28": "LfFh5MWMAecFxfBVm9X61SrnAunVrMZgiHNNbh9LZD3hfK9xShYGWfRsY4hx4ucUrL2oUxpxbBFKSEfERPcRhPe",
  "key29": "4EHjnyg7aparXymFnRK4E3MVL3T8qQ5ZGBqD463iXMs6AebNcXkrvLWvrqHKDBEFx1hUn9pBbPFyUkRFvUHwQCSv",
  "key30": "57GZ5zRfHSKa5NamwGjJy1Wyi8Hi9m7fF3CbRST4TdJAA9TiNGQGp5PkCcLRzpdpXwW8fTXZxjDgM1kzP6eHChCE",
  "key31": "q48iVofcuXco4rYV1eP34yvwdpjwQYmXffVhrLvHU5t6BofdBPsPKbT1WEpy9gCaz7L6RhYoBfvusFczbgCM5ML",
  "key32": "HobyPPFjQDyeeoTdNuDDLQsg5CLXx3vSYgrWxpDj6jZddEXfFq3CEKqrh8TegAtXuV4t8N3gxVHyfm15mGV1zXk",
  "key33": "5GHZsPSqN4Q4aPT1RfCzPVkRFLWPMg4eosZgg9bUju8SABMCP7nhjzURAjoUgk6u69E3dpMHYLUXUZoAnD5ouvf3",
  "key34": "3HNGUhFedpzhxyXTo9xmMhGRNNv8yCPVo3DYdxshbaJWJGk7CxkY5UzPJqDRKLJAVvYXLpQsf7zBYQo2CYV3pL9d",
  "key35": "4zHrKQzzKfG9mpy81k1YAwMwqBcWQHUFh8dYNvnDW48wDUFmZY4vV2A9jdTCfRSqJh8n8DTK1A7pt9gEdxmhq9HM",
  "key36": "mg287eWYwSvUCyLwayzqbDApFgLKsrdxYPwPoRKK27y7HnCEZkCq2N1ZPPrid3v3StPowxgKSTM7Agz3RM7fDpJ",
  "key37": "4jZLfBeGXgg7c5TZow89atvkZgLf9UXHjFFjaqFyvPXJsQeAqcTTJgr8ZymgCiezyJ1eHK1bynp9uPswJzxfrH6q",
  "key38": "2AsGRiKqbDtjDPxVJaexdDv4ZzDQMa2reSJSG2R61Mnc1WgkLKvM1DfcujN6cyXrRiaDffpuqGgV2nhF8pKurmnq",
  "key39": "3aDP4QgZJ18SEVju6aabxHbuDwRzun4NKmAjeh2dwjsU3MEXs6o6dgWAVPVNUnL79JVNjHJ8Lefd8t7VYWL8bGyD",
  "key40": "5HCMi1bjkfaTg8Ncd7rPCZx8AWqqpRTuYMmAiF5rizLecHHLHTQyX2gXre3ifY4EbKaYdTdPjfPetPvsHMJBFh7a",
  "key41": "5VbsHRtHDpyW7gkUNMx5ZeP5sCho1z5s44i7t1GeqJbmbYA1FGmKjx51Yqot4VqZibqN2C8Y7NxeYWPEd1M1iTxk",
  "key42": "3isp3tfz52Rt5MbZGRX4ByDr2GjMzKGDa5JGwJ7U53Z6Q8QFhPDVYjeTg4e4QNEkrptpeCLWfmHw4WREBXCLneUj",
  "key43": "5AAeuYCX4t4jV6fa8Acgy85TCGCwaEs8Vfm93s2NkEe99d8ocf6HQfdzG5e13yLEdRBVviBPjKFqhdxJo8mVPJrc",
  "key44": "4bCH6Fba5JkfyyxNAPsmv54anV3mkZdAptwCFVnyyyN3XKtd8epFPBm5555zPtg3SKW3gEzUJ97pUwLSDJphwyPd"
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
