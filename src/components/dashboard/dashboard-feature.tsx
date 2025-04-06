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
    "3YvoAD297XSQvSZh2Adbd9ChEnCbP6zCanKBuw8wARtz3N4kmtWaDXa9HBaykb3kejdy6iWG1nucufz7XAg4L2ct"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RAWbTt6xVCVaqHGCttRA18stiWCBkajPqH9qfTXTStbf2YzytpbWzYVn7MkFs4c2vfTTbexMYPmyxgAmpMvMAGT",
  "key1": "3fJZPNWszEHs9ePiQUdWBj6oenVmwzoKkVdxKBHNKBrXZDi3Ze4Ur55yWj57gwFAZysEMVs3j9afTtJVQ5uFB4p9",
  "key2": "3TB97mxWr4qWHWDuqnFDHWA8aKqj7nnsAeKhuhFAWjc1kBqrJRE6YV6qWW1JcLYVymb24aEHXqj9Q9jQZMvkrA9z",
  "key3": "4h9dx3K8Nw6XN2sTdVhJeBM6zikr3rmohWeQ6XGbmnjbLjcrvkMNvfT4CdgNLHLjHNANxqWzQhBCWrVbEmczKaGq",
  "key4": "4YX1BhLRxgpR96gBf1VGuxtuEYvvzcdtnjFiky1hjqXui8Xf6dMH7pbfXef8UtbbwJ9fnwm9dwNdhtFRixVhS3pi",
  "key5": "5wuiXCPRUBxY8jvjWpCrKku7ZTue58QiGd6jWjB2fubmjSvyFyrZiTLmpyoThAmSX3ZW5jW1fJHyMgw1YyT6tek8",
  "key6": "3GHm4JseaoqxxsNNN4hqTKNRLDZoT3Et7DEKKum9yD6BDjXBnDdDCtFHBiST3MTUGzBNSNJyMnu9CsXR31qWu8Xn",
  "key7": "5D8iDP1MBHwYjoPVDJJ6eFE1UR4S3qP28odXKWjGPvYAzs6rkrLQ85BCN5DSheVyxMARm2TdHmxhm31YCaZhdGLS",
  "key8": "3vNEm6WY9Nw6wauLEpce5GyKHQivQj97NPN7YwRCr7CUeqehhmh69rJuH8gyDyLn6cKm9P7CGs4frniGbWD8yA4d",
  "key9": "3KHDMLwaeK2sYHuWjZfbhwTwz6o1pLyJnxB9oyJZoLaLv17k3CYYbGwvzHMSxMtZvney2Ct7LkrtSPZs8e6cb8Q2",
  "key10": "4Y2scDxHcVfxxoKgZSeVSZ1f9WDCPURnyn6Fnt29t4VLgMZp89LVJYwebfgpqByQeuH7PyHbSA6yAmH8s5CtaPtu",
  "key11": "LUEGoriDtXm5BQfuvqVLk8mjY9ZDw2HRoeJoGynMRcCgEszYPZdqQqPHBnadSPYxf6aCPhfEiapVerqvEgkSpmh",
  "key12": "5k9ViKkS4SMSAPTWMdcETD3s8TDcuB36PjRvmWfWVqbmuS5t3EUwZoLd1qZ8khz5sofvvAeby8hdAbmSdqVenmj3",
  "key13": "36oecrddpD5bcbgk2ooNStHf2y75BoctXFXSMTyhaLPBZurRW7wWXk5mffpu4biYux7P8EbNoL4Hvk28QwDrpQZf",
  "key14": "28T9Csixiw2oJuw4VxHoX171XSVz5gTyhHDRK8J3JBfwGETrfGvcYdAqCzqQ9upyNtoXpiCX9wQJnmhTcom5Y4RR",
  "key15": "v9Z7qftfNAxGpEvcxYhVxMcPt878FaVRFToG5vHzUbxAFPAgcABWZKi7G54zrzsL5fNvB5HtZSienZ7PDgb7Ygv",
  "key16": "3Zr9XXFN7izokaeCeQnUWvhysj8FRs4zSgTCc9VjgZcXr8WCYsWr8BSRD6GqsLHGBTaUm3M1LFR6eaqmHNYCGJhx",
  "key17": "MqTFTYXRAtSS6Ng9Xbew25uUc2gXWt5MfQLZQqx6TUBfW3W4cnuZ3zEmXCZUFNRrScgDLGDPfic3JHv4V5A5tsm",
  "key18": "5CGmAh5SqRBqNAR57nBMYXH2zpHP6Bxydsbndm2gRQDr64Qe2KkJ565h52B64io3hbEpuVycXnjh1yskY4Mbjfh1",
  "key19": "5DGiAa6Jhd8npv2oadfSG6Jb9w8eZtPe7P3vrjxSKGBpqxsJpfmg5gmszgEKNPfykfjjFXTc2x5kETUShmLYEUg",
  "key20": "3rtoP1v3SBkR19LkmPJ2Rrnnoe47pCiKymNbiWN3Qzi72MAWurPtQ7z1oQosUvV4PjbYJraqpznUp2B8bRVyfVWC",
  "key21": "3SY15o7pjg2YuxfWugyUdJS3nG2b3DyvcFgynHEqWJ4AwGc1D5RiU7EeVp69Y349xxdycFPrM28gAv3tPEzsGoHA",
  "key22": "4HWFnbf6uFZ8X69wF63paR1f3PXpooBte7xRtL7UsgLfFv5iFGKvniyEM92C1VNBDxefQEsCoDxJLEpCWHbZV8tk",
  "key23": "37tGMzEjhjsmkbHLwDv4UkhkhqdLzBffLfdJX13ujDxi1Wu9TWw3ZtRe3wBechA3AV3ov8Ki3HMEeWDhZ51Sgqk5",
  "key24": "8ym2x567gLKgcsZ75cLTEfhaa47yH6Pkm25ZJMT7mBHXBkJtPPjeYT3H1GHx2VsgSVqe6AYw1kE2Kxw7cNSGWGB",
  "key25": "i87qPLs6EH3Ve7RPABq94tfyNcBtnb9fisaVypHS98VfXMw6ZfLgwx8An6darZKkRGfKVMCkbPJ4PwGH8CLkhoX",
  "key26": "3rsNtiArsopfpAb8mw7shjXfi5fKy7S3E6V9uwEpFr5jNM6DTSz2pzd5PMyhEbWEyFjAgUptc7iUHcwMttgqtnaj",
  "key27": "3nGfgUGcckFhmQdu6P4jdoiP2cYx4xLTzf4pswLL1YGXU3y3KjrrLHJ4jSrBdsgbiNu4C7tQEA1rNHHf9HKFhY1V",
  "key28": "4HYo3NU8fTwingYg5miWLvbcfNj6GDJCSHA6Kbi1GS6u7EXbDM4jxVAdy3P34gmcPZuhejF2WCYiEGe4fypc51ar",
  "key29": "VH6ZFApdsaWut2biicnAnzaHLnnwSuL8zvKCXSLtfdXR1RbitwUq6t3sByTWHWEttJQBHMA84peo39SRkBFp94p",
  "key30": "3pKqcvww7b36j94RNt5kcj5F5A6r9yoWuGQ277BCm1BMJbaXuenoDbPVn9RrbyviD3WFjTLGtKSyusToNfJ2sXns",
  "key31": "2yLrUx57heYukLkmHLPCWUeCp1odrTEXbPcUnn9htWuvZKiMikJArMoxcLmmFvY8pPTwfe8XCTRBtpNHVmDLJjAa",
  "key32": "3tvBTsvmKtwomvJW66zSpQ69RwziudAmLLHGBaEBY9mdLW2B36AuhLZdSyvawWpPVvhwWSLSLNHmEsMavN89f5LD",
  "key33": "2LCvoDPd3hnX7XgtdmuA4L51Dxj41FYfCcpEFSJtjp6zWeMJZavM88QuyW4aSCs32gizUmdWda9rydGhztCh5CLj",
  "key34": "tAczPrEu6oZpC2FKQdkKkgwWoPYBRXgaZZPzYjDZf37a9qcxSEehpDnHKfCyby9cEj6L4bC5gpkKDNXW1Kbm7fY",
  "key35": "4fPx92WMG7VuuKCUZLq8MPS1Rvw74nFH8W6L7TqY55UUayP3EYiLFWyTRLdKUsdXm5wDkUto7Mpu4tcRfNHRjT5g"
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
