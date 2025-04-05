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
    "wxFxcq6XNAe1h6i2a935U6rSJ2A5deE8HmeXczM8hfAvzuhSAbZx69RERAAEkNtpP1TFEUyZnLJbMx17eSC79S1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ySpuQL2fBLbcBqWR3PY2ykaW33nK2SawBLKcgjyJnh2FYacS5Yr8Dj7fdY4J2LVBijvXXh6nXBhNx4roaP96CR",
  "key1": "CDE2Bx3Qtj2iU4Za7xEG5D2yfHAcWF5riuFwnRcHx1V9asqHwRcHuJGMkZANffuNQgTer2gXVw7aCfvcGzSt6EL",
  "key2": "4KhUtC2KQmGw9SaS8csxKswgLLkGwufMEvsVKfBkvc8cNZBnyMTV1GM9rpTSei81FxwKeRSyFXdpU4HyH6vMdpg5",
  "key3": "44guaPxCV5EVS91usBZzWBS6EYxaMCHaD92fiyQRg1gn9j2NVb66FcShTGrpjSniXrNyF3rQJMSXtG2JchFW47qB",
  "key4": "5KyZh5u3EQ6WnUaf7xzxGdWfbcyr8zaQNtDuaPJm7ToCYg1oeKSDGJU6fRgtoVg5shLskBGrSTKJdhq6faD5oiZ6",
  "key5": "4NHNSqgNNcanytUwJwYkQ8S7hYxDiFN53UNrdR5Snw7tQ8DQvgGgYb39HNYA8FDvz9RfUJKLth6bWuwScuRCS7Jt",
  "key6": "3cYSzN5as1L936tzaBLkRXZvMEjCyCNqUq21GvB4SqpoVKpGz62SWz6NSvdoDHw72ZZn11NRDmS5RLmZsQLJSUoo",
  "key7": "yoorDb3wBg4Dbp2CDBfhBfJ8Q3ugPerMmX4HLJX81QyrgbxEFriLWiDi4BrxPtTXWQ65oa86aTSSUo8ofNvv9gd",
  "key8": "LXPRz5YbvYJxvTp7y2p5WcPY4f2mKGCvKL6MNYG47tYGYzRxmangAyUAJ5MLAFqrpJ8B7qeFcLF5yaape1YfDY1",
  "key9": "2DATNtZevESqWoSz5rz4SbwgSotu1LuULYULWRoMXbmhAB5tDGFEMYJC5BHkAQAuVejL7J1qZ3E2jB2TTZtYY1RH",
  "key10": "qk8K2YiMvT35tGFyYJi7VVFFdVT8nfUMHsheC5MMvyiw3nPdMM1NrbyNCnWXmXMVoNzun8JzGiJddtTpUvNL7hp",
  "key11": "2FT6La5tLCMU56Vex2GqkJ1gV9VeuGUXLYSKgxFa5GZqtyd2r8HXg32Mm2av4Gw2XzVKVUP15d4F5hT9SiDFy7As",
  "key12": "3arxYVAw4ATPVsnBkdJgpk4RXjaeb7ZaqJddsb71TzT3Ft2Z5QqjGiWKW3ZougrGJgJHJECt6hJ7m1Y67E9F9xFd",
  "key13": "2JrdzXyEkKq3WTLjyvtHyPpQSaeXiJGeDGDLHzcs5HDkS5Gs16L6A3arKqSdWHUPBDD7CPGeEZkVjduxNqe7h3BG",
  "key14": "gqmaJ5DTW83nRHuDFJ4hpdwisxKKaj9K3p1XQKEiDamzwnjkJyPRgeLFSatFbkogi29BwR3HC4hwcbrPKPLMgfP",
  "key15": "5WbQKKC6gXaqttTfgt7aRyf4G3dqeDHVxLv1V2YGVs8aP4whbJmT3TgR67bqKcFDXprfcytJ2pxDS1oBQHAKEdFj",
  "key16": "VWJurfUa82hfrtU7otbAT3tj3k9e8f4BjW3sKoxjcsrqzWoqk3n1NjubCKz77ymXieWbhEdSbC33vNF2mHqnas8",
  "key17": "47LmA7RyTKvDk1oKyFpgPaBCkqJJZbXjFFGcJHdkpMxazTGnbmoRqd3fDRZCSP3GsCE9L3yZF34WiHNpqaMLvzdw",
  "key18": "QCvtNqxHXxvs4MJAJJs1cYXVmtUqZf1pzf2Kjk97K4TQuMDagNeDUbEMfkk2u9o5DzWBeh3zvDcpEuYJstbBtZR",
  "key19": "Bg8FHzac66D4bR6kUK1Qy88B2GA231Yd1xBLgpEoBqqZGmeUg5A6nhw4PKMFm1MNB73rY9Jm4UNF9Q4A2Q7ip4A",
  "key20": "YS6SxXLXEcxbyveKoee7xiBinVXSbHLtMu1ULXd1bvjnRsk5DW3AX2z2hD5MYmrnZ6J64bF2tdku4cxPCJmDDhk",
  "key21": "2jXCnWvQnZ5qkSVSsX767CQrmRjuspYaKw2ai4Yf2grmenCwf7jaJ7bQrVbBMw7ztBBRYsoWU1sCycpG6MABD2uo",
  "key22": "LUtJ7jTANdeBpmkeWsGq5u2YT6mbYpQnw3d9Kv7YYGGmRp7ByUjyB2xeEp7ZzeLKyh6yAvcvwUfp4vg5dCcVn2g",
  "key23": "44CYsQFW3SafJnshCtmP9ynYUh2K97kXM5UAzDguiWFe5mgYJWnjyDsFxM9pyJvF3CaA6iyckTxg5eKi4BEVjVXx",
  "key24": "2jQgjCa9Vgmaeyx5CkHQDrd9b4f7tcrBUez6qc4N8PSTJLTXT67gt2fXQasDAq7kFB9qCe5pDuvdhmJjdxhjRirw",
  "key25": "Fy1YszamswicSwXuDzmXetfkJJuzpdHVzrxQT7mLMgc8sUmFhvnUAtDkyAWK4nXvpNjhYqEApop9y5xct58yvaK"
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
