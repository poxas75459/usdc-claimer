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
    "5kmhd1Sh49AFhn2j6zZRnvwS1GBQVUJnj2pWdtcqet6U9geuYiFgTDRZ7KN3TDhx1XR1Xb6wEV9oM4vPzw722bP5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xH8BFLFKadUaftjGNH94x4i1vnznrWqQTGjcGGUy2R54LRsUwb7jUKMZ4Q9DZQi8BuTZsQrARtLhBheYwiaaMxd",
  "key1": "2RYM4H65KiEkrTSKvhMHMZ5AfyJ14d8pbFJLn59BH1T1LP8rZ4y6borsE2SNHxocicSn4FquDfbQCC9cgSkucetd",
  "key2": "XhurDYKNEib9d4EmUsTmD1641VmtYtFjFwBGjHru8LVny16XkANh3boemc8EHkaLHyXAjbddwPPd1ze5uoeaCCC",
  "key3": "2wvFZ6mmgjnJ6Hp17BnusJkT2vqhotyqXMuu4siBrXsKdV8je937rKhjSasJhMGBMpR3hnKmng8PYm1713w8WctV",
  "key4": "5MPoALDmHLCfoZBAhT6YNZ5y68uE5MEWgitRkHEjhnWhc4e2qDsetWEoyhU5MeNifL1ryv8CaeG8jpd4kbyfj62Y",
  "key5": "3s5qYGdbbdNMuKBk1s8FqjCxANTWeSz4eg28ovzKz9z6DD8gsidvBcrYjVVqAQqujQuDktzh5nekuq1DsCUBLv2q",
  "key6": "2srU4rLCTuRz8wrXRrH5ExVGx9HGrpbgYbjxQFap3MUFpVbrMmCTa71T6Z1VANHvGyhsng7fnWqVuRjK9Wo5983k",
  "key7": "2J5QCFK8AnXXkVaJP8jAwnZpyoyxr5b3nBGLEwyFb63sPGTV7Q8EYvnJmwJFg1U4Mqu3W7HpcLBUyfRJ4JnEQtuK",
  "key8": "3fL5q9ttfUecVJvrfLPGwPygfNFqbVhKKqaetbuv7jSh8jfvBvjm57cH2HXXv2fHDAgffx4BuUSyzffMwN3ytFSP",
  "key9": "4KKACytykEZBVdZSwG2hfGPGkn1Gzwzr2TkjZiAQR9MKq2AZu9YvUwkVhgVQRiCWd4Hm36pMRTVLqLR5DLt6Ekyu",
  "key10": "4WQwXNwW1gPodTH5T35KJED3CiMdCgd2jayuZgcoHQGCzSmzcMwrzpf4ZWD3MKqR1pUZq1gJGb2PNRSU4H7Rc7qC",
  "key11": "3NVxPz1Jy2qfCrK8mQXp5p9WqeoLX52xkfHwFjZbntR2LQB1PgnUa9p4KXpPeWdQsPvD5fWLP3ZdqVfu1MjEKgpG",
  "key12": "1SvNJzyL3JtPfU47CMaDbb4BV7kmh4nSWHZ12YDyayRpbW2sJ17KWk7DicxuxtPAeEBT5t4Sc2uaAy7H7Y8PAEC",
  "key13": "GuhdkcFP3Q5i2W1dybSV5vBWeDiYJcUMaXPLS3Sb73qyuZEZzh4SSWRfz5YXiW1Wg3mUQKqGvfMGg1Zto7Ptnbf",
  "key14": "MFKouhdg83r6EED3RvWuKLiS4owzhLmNhYtbqquTurodQNcyMFky1s6PkR5wgQNCGKggpKzcJMKQXfLKXnFu2pr",
  "key15": "4uNLaXqvNyRcrrsGXorc4XCxuiA3JYWPpoSpgiWJmwDyzNPciTGr9vwz1AK1NRjpcBig4YAJneL2xj5jdVhrSxyU",
  "key16": "3wo2RCdywCDPTt1BsLrzRPVBMA1uANFSVV6k3E2aduARtFcf7fXAieiKF9m1CaCFRDcc8ygXzsYk3ptjpt6qZSBE",
  "key17": "3hC2atdobSzcBAp767dZBDdzyMXQcm8EvQw56c6SMaJqXHvSMLR8GvcToqZ3SNiWv5HP3BvqP56WXB7amKq6E2pQ",
  "key18": "2gDphUS43oATRmXJsFaim4h9WNMobecbrYoZidnG6TdGQb8QG36kerQWHF22hz8b1ywiHuEd5cNhRErPDJMV9L3z",
  "key19": "5XAX9k3p1eDYbsEhdsxrBuQZkKbTdzLq5nXDQQA8A5hPUAN5EF9xpDevAWAopEvezaUFxNSDxt77wjHeXebrXHkQ",
  "key20": "56QM36qmVF2kGX67jJxhsgVcyUGdmwSBkz7A5NPDaGNrChbemHjqf25Hs1i2jeBEzzyFToNM8sWnCAD9gBaEs2wv",
  "key21": "34UXxnScwgnJydrfedVQBXwwCMRW6ntRQTBGvi4znGANASUG1XnXUsRGjZntvYRsMucix8k2DgWcEhwkW4pZMgm5",
  "key22": "4ifmbSYrcEC6ra1aR4AWroT4ThHEAzdRUZ9QNNeUMW41GtNbLJCiuY7e7SvRAHKvnSXRv9BcYQ3a3Mknc1Kk44i3",
  "key23": "2EQz5ohFG2zkZQrPq9Jeuwrv4whubvkyDpfYp1dJ1seQZ9huZ4MdGsCfcY2M29x7sqWMxEi77Ngmw9ZziC2dU65D",
  "key24": "57fmyvzNZkeqpf5YmmLZaKXp5Cmoh6fs1tDyZcw4uN2arDQnk26A8eamHXjJu6YACmqsrWnyLJGBvdSqLeKjcBQU",
  "key25": "3wCb9mRoJH5ZbsTGnnHxATypBHK7fGQrFca9uyBb5PRCB6kSWdvzjPnwFzjH4JDxM9us24h3fjGqi4LKWmfipp2U",
  "key26": "4WWgmCTAf4SCw1Hognei4EfYGfHzVLyrd33sMvzxrfgAXyVFjwG7gmhZZ5mFjzCDFKRpKrVrHFBZ93kbPxkPDqPL",
  "key27": "4jfPVDSoBHFwQsBVrpjHEVsqdab3A8WSRT7hqdq2Jgs8N5Mw7RcFVC8DX1BK62TZwGbnDdHWn52tAqEKb62RzHCP",
  "key28": "2ejhMZYcgr4DcdHnduK43usE58WPjANcyJAbP3ARhsX4NiLq3HMJ84Rghr562MhYEjdTziB3mt3wpwToSiX8BUSq",
  "key29": "3ZsZehH51waWN4zVzeNwEHEWyBQbbsbbNuRcUzupZjyweaNFQb74kHbk2vbsJPM3iHjBXMtRLxD7PE4FL8WtDVjL",
  "key30": "34kPzVpVDBs7vqSuqLxqvRqiCavb5VhXBdifEoXgpa3p6a3xPp4Tjbk8oJD3qcMPDdyGpEzRXGtUXHA8FDKXd9P3",
  "key31": "5BW8eJ4rWtBbxh3TGKLRtbC5fnSAvC8jwhh2P9bMq1eafBnWXF571hbirjVGC5xXNmW5hzkA5G4Ypn5VVbwx6uFm",
  "key32": "45C8RkLc7afda4Td3ssgpMhbzUvxS4EbWGeBufnMxoHY7ZtEBHE68qzXRxtkg4FXKeooJyGfyvBSum9LxccVyS1B"
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
