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
    "z5SkYUUvvfkEctKKQYT3vj7DZEt21aDxqT8Bdx4E2cGi3RXko4iAr61KXii6J3LpH9GWYrzZScLHo7fi7n6TiRF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X7XTenzxAAoEVeipDiQn8GNZ87mcYk2fhJhNerWnqaEH81SG24ttgzt1wNgtECSkCAguFT8fHJ3PQFAH62qHfJL",
  "key1": "2dbbw627XP5bD387heb4TFbXK3dGYqkuU5Jc9k4cEGoXdR2RAZDYNvPjN61HK452AL21Xyhwo71Wj5wFJG3SuxZ7",
  "key2": "3QnoaJv56nVdGENfoH9QRNXpJbJEx9fpvSstd5cXUuX1VCRpTZXg6p4UYBdcXWXJTAYCUsAyMuRp3UFHBFsim4Qz",
  "key3": "3CRLyiDvSCG89R9fb7EpDtXdPaYcMMm1desMovEY2aF1tkrD7mGXExhppy8GYxFDeLP2rSUzYfPWi88VawsqDXgf",
  "key4": "EyxenWWe9fSwogAkZXbsan2pDtjp6KX1kxbogv24qqmoskMbFuKYufhSUXceC7kyZzBvtFQVTdfmScMz1EAU88o",
  "key5": "3qxgofDftGXWt5eBW4B3hjiU2DLAmPyYiFs5Rv9WR2fk3eHmEF6WMWWxoTJo4vUqsJWrP39hqe6LPkFHJUGx96Ba",
  "key6": "3pmc95ay5qAyVh2yrBX6dAr82zvftNGGWUhKnfQZ69cMWaBaYu7Ekn3eBp3y8ysND1diScaSbMTeRDddoY7KB7zA",
  "key7": "3A2Nn1fWLpTLGuVx7S4TJQPQDundxEYeKqwj3ZnD2JWramDgJrb9E9pjk94HMfpEnwiRFTmi6Pw7ZEy4LEZMHjKG",
  "key8": "4cUX7XAce2deE7rcTH3wJ5M6ddE97tMTtVnaJMFgKU2XFA37n57Y4MQvzzeAr3TsDMm6viZAg6GHucJW4izGBNhD",
  "key9": "3fQ7VTmGsuDKW2kw3maR29LXrT5MJQDz6n42LrEpKteH2HmCd3Ma4MtYdGqvgsGKem2uLis5U7E7noUEAE8rdWHy",
  "key10": "5w3f9nEGKGFL7Xv7RV1CSVZoYyYqv8U8yBX54ayPnP1WxPMUaKC1T6fvq22dMumMJeuQXGCq4KrHEE2mfgo9rcgX",
  "key11": "LpggA7arir7K1qdbMUox386u871LULejbLfAdkN7XzkHUEvNVWujFpxjBjAkU4ogpc2FVuBqzHpUnSmVxEQENHv",
  "key12": "PQKqakgxTSAA35ZLv8xMCoGKGXnJ4pMFmDq1xPTX65x9hXsERaismeXMbw7UMu3eK77garRb1vAvbmGXzNXrj5p",
  "key13": "45YcTrVSzX9Y1G1MEV7KBeUXiz1dwA5HVNKaP66D2fsFbnu6qVDzRoEZGc23DD6TJsLLKm5ggJrVeNJ6wngiCKtd",
  "key14": "3b9p2gG2MvhKih3vp7TEZUwxVDa8zrLWMkHJzuT5kfMFi4YXLB7ioT1fWfxPvoFddii7qbWNpHJz5qw4eQq7GZRm",
  "key15": "3mHBKbF6VPShMQPjNSHkmLgNFbHVpPn5JS2MeAG6KwFJyKhJU2QVeLxE8wQnmd517Bzng51mRNDUf2s6kcuqXoD4",
  "key16": "2uJVSyGgEZ6WyWQxmgE646eeYQkzdYLUX433sCUUb2Auqz1nRrb5KZKsn1Cm3xQV2NaurvXuVMmoguHmqhKEgZes",
  "key17": "DhhKGRGrXd45RhyBk3YbX6jcJgaj521Sxo94MkNGiEPQbLP4bVwJutdvEToLDw8KJNKfCPXEmX4gpJr52pBSMfr",
  "key18": "4Chdh877BvUMAPADdAJsx451Sqmysq1iXTihYu7XWkurnFAZXEqDsk16C1eq6pSEzXyUdT8vUTHGhd8JwgBoGn3j",
  "key19": "4hPUsBZyGx4jwCXytjob5FpBAFQbNc5iwf14Cn9i6bo2rtEM8L5PZT2bGmcU28uuNQmG7SQkMDCS8K6VXBqTazXy",
  "key20": "2KYgw9nCRVL2K5FRB3JDfUu9xZvMXx2GULvR33bvQn5qxhpZbKFSMyuoRhdeQBnyJj5XjG1g5i5Fo25dGnRT2H6t",
  "key21": "nZFKVvrcJh8i3UvStf6z5cuB4gzhyGiPdbgvr3MxyX9KXcac7DWBndHoU4RikDQnrshnaUopoaZ5TKpgV27bEuW",
  "key22": "2wttb4uoJKPogw5QG6T6qwBpr1imVrsq4AT83gXyniN6o3vVvR7VBzrJx9qtBnb4dsXg32DMBxsQqEUkWpUc8tt8",
  "key23": "5vZs8uBDgqWFSk8FDezpctMiz95cQNEX8HbJ5Jed181PHY9sa4WRv4xQTY3hLTxbF9xtB4iVX1NmzRnyFRHwjPiy",
  "key24": "48gtRoVduWjyd2WASYzJ3tp9hGYCZP6UBEcTccTgZe4uVD76fVY7u453LXT2LiGmgWgWiRwxukwNQU1kCUm4vjLZ",
  "key25": "5kjiDF5Cr7VpuAqfTcMPj2pmguCc8c7ynQf9BjRZGH8VSfdpYCEfYs1HyQhEj29569jXmpwzotgnZzQsFCG3Gqaz",
  "key26": "53BqMXRS5WFwYNTDjHegniGj64s5FLs1eVEwwC86ttAKgB2gaCEmmfm5DNGDMTYvXr9Ejdp7qeiFiDHVXftCrJfq",
  "key27": "3xq5s6FZ9v4v1wHCdUCXBbcP7kXVWefhmqkA8DWmjkmNMbiHdNVAqCWKinC298tiUEae1f9YAeyPeEgoT1eLpnZd",
  "key28": "5BbSSoHG1D3432EW9mE2RqvLLqEBNkCebcrexVHcUAHnCDBMiTYNZTzR2c4FxfLwFFUcD5pBmFMGChiqpvwaTx2M",
  "key29": "4hZZ3dVay2WJ6z2Fp4rJw5iUsGdHaMxSdHsTbDVkVFKY1TiKYd7hCMgAdowQw4QEDTBKBbFXwTsPH9JoHpjaosi8",
  "key30": "2aY7PyCWtEx1ojNt8tUBuhh5V72vdrAPj2XjL58DMo5Y5bdUyEnjY3BC2dxyg5oYdjyEMQwLDUeavGwAkVFT6iom",
  "key31": "3h1X8wnYouEk2hkRTVF4Kb7F8qosvx8YyWPvT2sEHNyWvP6wkgEL25TnuaA1JQ7TzKLkzo5NVM5AW6HExGftCnAR",
  "key32": "vmJeom9hgXzBeeFQKrenwPrkkqMquVpBE2TunSfL9hHPQknJx4DbZaD5JCQ5CBMSGYRicv57AiS6h1jQHpXFVS5",
  "key33": "5FEvFmEwMPr9Z8azyuwndemdu71x8fhv2n255TSx1uJ5Jm1wKqCKzkB6bUnqXGVW9B3WRLhyJzc4uWwpg96yHyMu"
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
