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
    "zGXgedML41QB9QfswKw12WTiGK8UNJjvUwwskoKp9HjR25Jvwdq3uEyqdp7rw3prAR6Na2dYvhfqa1D6GFA6Rqh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5frzmmGrwjZgU2qvT5ybuDpWCwqQKDiqyoFcBF4CiBuVASVp3c9hPDdXRLNTTuFJc8AoTsmCNiv6kQKB972AbMNZ",
  "key1": "25VySDQhkTuie4GSB2VRi6B4niqwAzajVyP9xBCVp8WhrFQsUwQKE4w4vGnz62KzyvAxVSqPYr6PR4GL4kqQebvi",
  "key2": "2dAq7bbz32hkSa1KDNkrkquggrP8RNRG3TtudMAR3cgaNgWDJmwWvc3X3kvZUYmiKfRifYKq8GMtjZAe89XestKZ",
  "key3": "2SNy7AupQamKNEJ4oWJFNrG6VUcmtmLiWE9HbcyWAbJ5hnYfafo3x7YzwWyMfAGgQJAGRoXVAqe9ozKgYF66bJKE",
  "key4": "5D5p6sA54d48FqCggt7pzXpowDtGBzv3hEq6q6AAnyfwyjeTaHyLcv6s8GE45k4mFqk6QcMogCAE6j6L6g8Mfc4H",
  "key5": "33A6LPFeknmq4kRrjSsxBPWpJj52vvgEHXMfks2dwtbz5idyzAVRSiSWU1eADSvhTm347U2CoJN3exhwfF1JV6Hu",
  "key6": "2KNfo51pNfpnqRsZMhQJY86qttTg5Bo9CS2HKa4ZG13d2ZyAUKBJGVcqWfoS3coQCpTyhYGfxoHmobq9PrLhZwqB",
  "key7": "25mdVTeCv5CYn2ZB35yppZVKLt7DVbd8AE2hALnmiqsBMViMShojwwfviqscspN8j3mBNpAX36XT9kJaQSVY7Urr",
  "key8": "RgtpzG2akpe792ae4R5Und3eT8nrocSToujwJStKvC6LoznDV7EYmdGrXmYqfATRvzPYa3iP8KVca7uK5hBJeU1",
  "key9": "4RfbNZoMGyYbEVSxFCYfeczhEapRQPAvz7Wj4cXU52B9YVC5YaM7ujep6dhtmmhXkGcVgs2cpaLtEG5EPwugTFf5",
  "key10": "5e4WEcr8rYwnHHy92Xa3ASBtxsosFQLMNAeNyQxZm9e2MQVmj6ubTxvmoJeemdvkxbH5y4NMuF8154aDoqaSoXsx",
  "key11": "3CvWWZhGQZNd3HkHHtoiR2ejJCKCNqdFRkC84sGfB3mtKyJfjh3dAWfBbnfAymRDFEBMKfd7MBp6i4Bd54NgVYSv",
  "key12": "5tV8m6TaLK63C5DfGB3EVwRxHg32nMZUjbgQgQuYewHJrbSf1HTa3YWpTtkQYM1ymEUHmJicHkJ1hSgMfh5SjvLb",
  "key13": "34jPdHijZ9AjesjR5iWfFuHbq8b6Zi1D1yA1kbNJy1yg7wkakrznq7dK8wSwY7akJfqBHptnH6L7Q7bHpavjMzug",
  "key14": "2nw3oVMsT8nWP1oWka4MxYeUCcbXGr8jCZdVXECwsGdbYQ5vZ23au13T9qB8zVJ2S51LNut1BHoRxGGr8ZFxgmnp",
  "key15": "2dptncY3sedrP3MQKSZgzqfsgaGgJGsDnNSPazRLmJkAhQcFyvXAaK9rJuttLKpPo9BeD6qL4aWcixoJCi6P1JKx",
  "key16": "3aFvLC3n5GcUgkLo5Kxo1FGtkSVjioGQjvpAnj5QVAD59iVkYYeBZ6ciyRZhjmHmwU25o6mrKUKvvAa1TVQQz2Ja",
  "key17": "3XnynYGDtDbUsWVFSG2NiMZS84eAPfjN9FDX7xPac5wcwiUbwVzeJEKKb2rSAGJDsCAZ58oTJirFYr3w1dY4CWeK",
  "key18": "4fsT5XQX3yixbStV8b4VmoYqkmQng46oTXjGeLAL7ESs5WB6qhk9ozbzatsWt2ezcjWAMcBQg2pZN82jy2bzBqEu",
  "key19": "Zu16ba4Ed5TLF3MZtiCxD5WotwDRibnDqGhBoHicLKGmQLVwcjFoEda9PECVfErKce9kLccEeoCzEDUuj34bxLs",
  "key20": "2QHprmvQ5YdbthSRw5qUbcnHdYc6B4kmhpANp1Gk46rv83aw5JcsRiYtXcyDuPUF22MhqBDEAmVVrv4dBPiHfXDK",
  "key21": "iHoT5ZbCHSCvEgyNo2brS8ofY3deSf4TcNX3FpZNpbQ3iYud3eBcJknv8aApxiJe7aFWxDzkN2aopGhshPR7bhU",
  "key22": "5GfyacdejBuzU8cou3xTpdivkoGYR46EBi6M88WpRgt9zTQb3xqvFu56n7SBjkCckfsLJHNYPCzRb2UAVx2WA1QF",
  "key23": "2K7qrGNUp5kvyzDcS8XqR8QDCBHMXMKwtQphJVtK7Gn1M45utV2HqveW1ioDjksjwHfoTAvzy2x6A8rcDaxhX6JN",
  "key24": "sjvLEgqEdbMvdF2p9RjJMNYUSJfpmgvFKzo7xpWLr6HT3zSG574yTJnMC3ES1hX4YJpWn6kY2hdCv97UsDKxM9q",
  "key25": "4YAuf3oKmkdURadxxPFubpSpw3Ew23T6xJ9MJzAZXzePaSEeFYBC4DgimEPRhE5qTTS9D5vHqQiP5pLwyP4LuBcM",
  "key26": "3kznPVetvZdAfqWxh393FP9HuCT7qToL3XCfTsvhD5tS5LpeFmrpdBYuFwDR3f5yt1GbmVph4TiDa1R3pEWDJGbh"
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
