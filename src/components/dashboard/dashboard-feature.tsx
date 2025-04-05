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
    "3rFUh19GC4ARJ6waGQwwTB4ncVEaaqxrhAkyWhfFo7FLPFkTgj3C8HD7SjX3CBjp5cemfnRAy8CYMhZHyFES34gJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59esJEsbjfeBFZUUitGbr7i6Lt7uqfKvrMvuTTxCGzSMtgxXpjefToPD4XWXk5NwJ7edXW1CHYD2T7cdE6pML7HW",
  "key1": "5q9Jq4gVPjxpPyhW3vD3sZAsQeKpZ8pVyG2KLUUeGobWt4WS5sc5ukbu1DUapvAggnfG9gtNYMq7arNGub3X4EvK",
  "key2": "53H4acQFPad5Kez9Q8EpJd1mhFcE1NmZHHTCNDmVcRtYU3kzc5xMh8Q9iZR22NoSs5N7z9AvRoH81mW7bqpUrRKJ",
  "key3": "25aSbwTYV8UskKvAkBPvZcoJr3TTkdnuwTRtFCVYYvZFQYNxVfjF7Wrf35SETTVnwcHVcdJjouBPTTKTKBeWK49j",
  "key4": "3XohBhFd5yK55s36DfGovCk1wDin79daiTMWKe8LwkdWQ5rXugpfmzZRayXu41axLpSwQHzoZVk2MzAG4EtEUNDb",
  "key5": "4DVLKU4sYXHifs1bkg8GYttHHMfnVyehEkFHhB22b7auLRx56g9dM9XcgdqsU2QbP7abhfhm1L8yx4f7d4t1xVqX",
  "key6": "4xyktyk8Y4sr5r6E6MbchD1k1M1cDsBPXQmdm1qsMXkBSP2r5DgGcqpYs1ZdMp6FAzb9BfxScsHj92HMPAKBgUL9",
  "key7": "29JeyUTXfKYa5qKopfhsYmfrCGvxZUFsjoWR7aR1YxS1B7f1Q112XyycCRTCry8pq9sXwTJjZQfFrXDJy3W1unkq",
  "key8": "5d2zMu8YwQYqr8UwUXU58Ahmqrqj31dP28MYdRT4PRwKrZdWwqjM2QyKbntMkTMnUypzAMRyPDgcJAB9kmN66Wq8",
  "key9": "VMhURPN7pVLBmQy36zKHEjvZKxY3FyVwubGRfjUmAxHPEn7AwTkLDNZ6HJuAFUa2GinmzdWNJL87kqbQ83Bm1zL",
  "key10": "4zKiuteK9unTSQtbMobT5BTDjSd9XTbS9UaXYVLcZYUavrTxH4h8vkDrRqkHcSwm4ciF8ZsqEUMv7x98sbkT8oj5",
  "key11": "57u8XWLYNknX73Kmjkwp5MQeBmkCrusS1YfnYbRw79kUyfmVjGV1dDNFqVvDaphcvANFwSLNR2eGgHhzMrjGrDbv",
  "key12": "3pcFhH9PMdP3TjMxE2sAZexVJWDvuK3gAR1B7ppfnE43JJ92acbdUsCofK2qHVCt2nJe75dWgEpo1kip27Cro5dt",
  "key13": "3dchmZBTxGy3Cv7oa1xxiDHNUAeA6bpzBCuzzVs8qtBJGe6Ry15nXy5aeV8babjj5AGeWa3ChRAhoDBpkHYFoNVi",
  "key14": "3E5ZS9wMQgvFSeBXwiud8cMi4SuLyZiHncf436jpSvgK2MXUno8htDbLCHmThdV7nTorLT4VLUxaHXq3D2aPiRQ1",
  "key15": "5YPnsvaw2KjjC6zXHLuNgTyF8Mnpy3vVk1Ras9Mcdi3MYKgE8hQaLDGkNgY8df3wvgnAnm9SPAEa1WM6xeNtAsBa",
  "key16": "zgH25iAQGZ4S9p9D4hbgmFf3HbMJno5KWN7rGiUEvyBnt1svfffgEadz9NYJ13KY3CF3TXU8C9J6EKHZq7o45J7",
  "key17": "5RuWZp3xFZTGr26DHu1yLN71k3LQ5VUTwzqiNMGktuDpWp6zVKSd61ShX8PYvQYXwSkmY1SjDiRNnPzpKupsHzUU",
  "key18": "kqDtbhz8EgpqWdzMCc6nXqC1RurfngjnJv78rZk9ks3uDZXuZjmcwU8tkLgyQqdaAm1tAcKMstrCQefAe7k3C5H",
  "key19": "2qGDTthNbBXbX2Webcai9o97dDdqqq8Lg57XXZHNkJz1Qg55cQ3GMVwfPMAWyLnQDVuM2mRSQdsSveHEVmSRm9MD",
  "key20": "5WMDUrJETUthvtG7WWPz3pjD4cR19FbaRHMLYCZkFwa5rFKNmNtMnR3WKK5YypwoDH12KdUT1YGccjafiFabmzE2",
  "key21": "5bbQCTXPiGc5cWTCAXHvbgZyqwevBuMcSqTrFk2XUCogm8gN6kiD4dK7V4RbyQRfndyV7nTvEfmcsGRdRduikWkY",
  "key22": "34wPg2RaVzU1KLYsWCRgZbcjxbCTw8qJCG8kCq8hLn7cMnUut7abyZCzEH3QdSWasZyoMdsyskboYiEdiPrcfJ23",
  "key23": "aD1Cikfrt9gtYPiUnvtSpz2ERgH1otT3Epo7JyoZ6vZjSUrFPcDkr2TGWk2kEg9uThvMQCoeMEwJkru4ZobyMdM",
  "key24": "369HEGFd8P8UcsVct1y4Y58WFjNLZBPd8Y5N2yHqu4QeU4BVmRDALJNVk4NYeWZhe7T1UZDsPZ7goDFRqDAg3tPs"
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
