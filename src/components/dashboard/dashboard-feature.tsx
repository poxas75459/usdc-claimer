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
    "3Hmk7qz6g1gDh97hvy3JwF67kmwoVh3WqziicE3LUxyToKk96p3xtke5H9RWuQ6PjD23Arnr8eMsJUEH9JhEZFbj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q6DHRpcumjEHgvonfvMfeRiJutbAqzqQi7Dbq1KymQS7rXZxz3EPgw2urm52eyAVPn1K78r7yseZSrtoTxEMKXY",
  "key1": "m3XJ6ZDCtgx1dMqvJLeKiWtNCWA13iuSRrgpz2fZw3q2xYo6QUBUgBqh7pfEMNAMpz5XrdSejiWccG9cuj5Ry1A",
  "key2": "5VEYuauZeqvgEYbbKvGKgCMrVzYfFfFvL59FWW34byoNAeK9aTogdD3x9zQznftxyxrdcWF45k4TAXjs51SB4MAq",
  "key3": "vfaxvNfMwRrBv3CHyqs3c9ezCUxcDxeVH9AbC2uccDUTSjxNwae8vzUfnkgsLox99NfriT1CK2w3sUC25dTwLKZ",
  "key4": "5YHJnHd7VhXCrZMqudfzogKdC5NGDJAgszxJHGqcgaAEtGRB1yyeG2GawmfaxammoMDdRC5J8vu2WFxwx2eZgv8y",
  "key5": "5okLJEMxD89Lnz52hmDDJU5UmJTcqf6VFieaorgHaaBgyT4TdMTr4cxrFTVn5NdbamyRvPeG9M5dBxUn4A45eEnf",
  "key6": "4Ki2jKpsTBNGpAhu6vkqc9Bidg77VQzWBDUkes7BBtg9m7bbCTt34dBZHiLc8TXhnSAHKNaq69BpXzPWzwyTDVvG",
  "key7": "sdBoQk5yQ6YYRjc616G7vNTpH2BsXmJhah14ZMDesbnjtPMxikwsrac3CPe3CP2U58jgExMR6qF7vLc91KZBLp8",
  "key8": "37foVEzfUVt39ze1MUpWWzw3bmf8iDijF6DfxYCNjGKuBJPq2kPNaMh4PZzysRtooU21zz2KCwdUeZ6uHxFohxtM",
  "key9": "pEqTuJFx9nKZM1r3ivQo6qrTUsG9PzEPMV4GQ2BpvehENQwopduZxb9XiwUotA4TnFxhFVQ6fn3jZbpMDTeCDrm",
  "key10": "53dFsWb13KGfrEnRjFQCGpsNLR18oPJSaFmRhBgC7x2TEYgZjKG6uAAJd2js8cYQpUmWJy7DvqY9Efw1QKCg9TXg",
  "key11": "3AFxK5ABGs7E7cSCHCRLHFGkxKWTKQjPPChUU4SxNeb6ffEV8Vg8HJDZ5S155WKeqbX4tLgXYU7uPuMVAygUNQdr",
  "key12": "4qQWt5DSpZFMG3qiWUMPLjq8WKEgdFNQKwsDbsCxQ2DTkCzTztGwkdd3dg3UNthbQsZNUB4MNQS1zYbgTxQZQNqF",
  "key13": "5xdgxxCvRFjug7L1RvdrJDxa8VWJfS8crk4Yworg8MzXTszJKqp3SQfB4wDhFJ8JUGLvZFo3V5jGtgAHdG3Pd9Lt",
  "key14": "23yhPQ11UHP343pDv2gRh6hQEznRb59BdeBgqgdYd8tWKXicddLsGJoDMfUYAPEqEHB2j3iUAgHDb3z6Z9RwGGuY",
  "key15": "C8qeVTxDgJQ1YZ2NdYtPuBibAwEz1xgqrpj2tf87CoJ9gzYSnkkxy3E7s7mrE1deqsNG4XdUCB2ramCRd6A9sNk",
  "key16": "4XbcYD3rhr4RbixXyuXEKwBT4MvyEccSYiqsaZpct3Ee9pRAhY8haxJrobvHNbGNxxxRBEqGYH2fwCbZcKZbNHby",
  "key17": "4AhZSct3vJkZc3ZDUgxRW9avPvLJZ1YcawQX39rzViEYz7tWRt3iw2QvmAtoNZo3E3E8Jzc5faSipvsS7FgdSxjU",
  "key18": "2bZZVejqwPXUykYi73BK5exopwJsW2KM94c9ebcZYeSycSnrirmo5PRK9v2RmmAdJ9FvMzrcfTH6WyPGYuXsKBCa",
  "key19": "2zbaVqePzMgEXjsaHYzB2sKszEp35UXTWT6GWAVw4GZYQLQHCFPjVRZ2y8b4c8t2D6e9cE8AnLtAURCxVbGTY5BT",
  "key20": "2y6DHzViS94DVYg4BVVA3LkPxo7MCmhTSJBtH5R931dyi2e6kcWehK2Yon7nABkpLgdZ99HvieKPbgEAsn8TjVas",
  "key21": "2wCAxPcum6PcaActsDWmRcxSP1NHBEq6PPbSM5qfumuHcJFcTkFRH9mVgAZYAEAnCDWis99wDo1GCG5kPf3ANSmj",
  "key22": "4brwKz7UpUKxVymes8c6gsYvYbauSrtJb6xkzjAzfNRHJj41VfyZAMgoZaEQUYZGTQMU19GHxactGSE8PWDCPWNR",
  "key23": "2kmjznMPknih8XsiF1YUVULd9PZwA2bSZsDK1cbGCbAg7yG66ts89vun4vU17oRHLjq2KBXLjJRm2poUPotE4115",
  "key24": "y7NAjFNbrk1QJWfAnqiXKxZt3UiGRjiap4PhQwERdJx7CAtNshU4HCZ3YvXGGmZgAswKqsaCRF9FEeUeZxVEbcP",
  "key25": "4a35VK2JVhjNxswPsBSAETiUH2Bww4pLSiUh1Xr7EwA6BnF6ngt2UYwLyecCbxZpSwzzPpKHVAk4Wj6PLM94gvNF",
  "key26": "59dBW79dnXyGVK7fSVdbfy9aLBbL1snB6MoAt8DBsgt4P8UWMGhqv7Do1ieVhYqrgAxrY4RYXH73wgmSDikux8HQ",
  "key27": "5vcCNdxMBvNXBr73xzCXopyGnSvUXRQxuNU45WwML7MAkEtric2TtYgo8K2U3bV4d1GXnhKuhhTNJ7JdcpFkujLV",
  "key28": "4hFMjcywJxNpfYBuRFEmmhgANvSBkYjzRtkeKh9oTJQ5Vag9YvA6DhV7SwLJaChgEFC5kPQUYXa539ruQiJQT76K",
  "key29": "3EmT86SPZXuReE4cXBG55NWsDM1DrBGTdMPmFTzhiqThFy6t9TgWfvriUnCEKarzAaCwvjTEc9KjNWQfXSCbZRaV",
  "key30": "2ycFsU1fiRq1WJ4zUXPHGHQTZa5PCcGPuDTAbXuqqFDi84L9K9SJ9oKbdVzcYdL6ViNz1ero5y7ogduJUmJNdjWJ",
  "key31": "3tAk5CG31Nus2x1TpNxXz6Sx45be8g8Bogz7DP8bwZFvpjTQsMdrKJ4urNAr3gPLSX4cRq4wMUda9ifRGF4w6aqB",
  "key32": "y7TwaofF3DMs13L9xQrrgCBcGYdc1pempJbqvdkbkrUvmgMvuppEx2Fq43bpUdVqz9jZa81J6eQUegcEcnL79So",
  "key33": "2tN3ZwLSLr8c4dWZkFM61YTM6YThTFW6Sb4LfYy9fKv6AShj6NW2Jsr7TMWb88urf4yC1WH2RRxJnKpbyrnHWa7T",
  "key34": "v5NLAAVDsDhwJ19DuEfxXM88UCYnKgR71woV2bD4ttoC8DGDV27RLSqnKDE2cfsdNsF1sdqCPgH2wBZyNQCeXCy",
  "key35": "22R2eFfze2WrBVoQXodhDx4ysyeFbfNDbAYVd7MDrpR2b9Xw3cSxrcfziSPBJHphkKeCWUaQvyJkT9WG5Q5mZkWc",
  "key36": "5kZ3Juijzk77KPenxmZ1CExyF5p7ctfRrNqWs6VHEFZC831HsoQyPXcJoKCnqYtQJLnBd7ba62zwJ6EFeEgJLhRU",
  "key37": "3NexN1KhsDCWz6iN2Eq7VKhGm83Udk1yoRfz97gDR6koYeJQmv413tkDzrqpp1BXfMpqk3JeSxjNvmgj4f9fgopB",
  "key38": "3qYg316ceCnLCUbXwHVqAAeCkconCYz16ydktAbejzm7eJH7Si4sH4WxAQyAuJA6SUhuQYK6bcQyxAMkkdo3x8P8",
  "key39": "4yBQH5jz3rB5YCVbq1KSqrBG11G1V99q2KRWTxX7UxdstGSqZikXPvn9GErwwGwUpTnXwUzDTggHgwTrXCPHPTrz",
  "key40": "5Bdcghace12GNkGBpvvwUjxWGUKmr8aes6xrcd16kkCvahx6wrtm5HYy7isXhnFfwHTu3WPaHKwvTZpymwFWq7vV"
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
