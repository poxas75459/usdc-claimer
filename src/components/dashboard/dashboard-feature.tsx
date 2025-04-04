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
    "3csXcQRcZfneNnBSyycSbbEU2S2NXPQ7pRNufA1d8FBbySPgsoFszsXRMC9684nARMkahGicwxy7nnZ7rf9w6fFX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S5fcWD2FYzGEcam9RgkLG4DVb1S269sAQwG67dWLfDaS8kJanvee7bzDMmNaZfVFwmb4tzz4vuaMTE3sVJ8w9js",
  "key1": "38V1w8Ao1yK4dtoEZ7VkGdyjdcpHhLK9tTev6SouWkpcJuJfJMUeGtPjpst5fwuZQNBK1p2aAPWYTuhWALPgEgGq",
  "key2": "bZPjyJQCiwzf59ipa62Gj2Ck8pu3Z2gDfD9TBtfFe1CXR1gWvfquUBJGjTttG7KcML3hmxUBGMpUegGhFb8BH2A",
  "key3": "4pVL2sFKwbRBPB5tMEkRGDxAFGPS5kQaATkuzAm3XJ6tVMXGC3GqjukVczBhiHwnBnzniJNGGTn6rZAy2kpRqUSB",
  "key4": "4yGURYbA3WwHjhmG9WyFeCkXnq85tmLNydrFRwyQuxoEvPU7dwwYQnWoxQywpPWQ6VhdrNTVWVn5EviU2UJmFGDp",
  "key5": "3ww8HAkSdEZaa7oVPtVNzqK6g5QqPcm15a3ezVA9o3tn4bP64NLXmYPnL8Mmw21cwAr2mUzhYFzoRFZN4kw4uowN",
  "key6": "2SSoc5nBE1JeewGQoVPKNWwgtXfhoVL2MPJ1WmW8nCHWVjVAvBbRCpuqn1x4nhRpfS3mNonWfvgZMj4QjhdgMetr",
  "key7": "4xBieXLUZu6BdayjBTrFE1WMLNF5Rr7768T17pdhcLZiSt5UGogD2CdYWt4N5FEtX4QKsiEasUQma2zzzYWHRMew",
  "key8": "4QsVdpxm7KxkXhYMvSKqYzsuXCAVe8bTLyBbVVBQYWFVCcQ9jWtHRVgeKY3CUBQj1W5F4EPYeBnwh72N2KRirsEC",
  "key9": "MxGwGKbLeU5VD8tSZ3KteMo1Tj6iAkjS5dRqc8k9t1HXMpAB6tUSNtcav6dpqFoBP4W79vj3CL5ofpC9x5raXQf",
  "key10": "5rxBqreb492EP8WLkgPz38xyPjDSrGJrnqYRsEoxSm21iYe79j7uduZJUuNTPXqWWDvRTRQCva1VYgqEiRVD5itV",
  "key11": "67N1DwZT6ptgmJ5AtYqZD5YqtdYFhzuA8Q9yXawHfCDJ2mMZWUjpUgajY4nU4ioPd1xBvLBFrPHPWW7wCVBN1Nxa",
  "key12": "2qLWjPMkwzqhksXEtZmxbW7TCygo2rTvHUcX4N3YNCrt6ktRYKG2mrgWnxuvnUtANKTXHvFRMqD84tPy4mQpsqQj",
  "key13": "xbfpAs57z6kyG7DPKXE8xU9KfAaLn7pCSpASZXwEJ5rsSQ8Wkx78UspbM5zJEt5qrBGK9REdUQT7GwXNRmd8gGP",
  "key14": "UZ9FtDvTT7hohCWdWNhKE9wZgvcbdBeGBYL7KmNEZsitzwLfvBNmpTRLUwaJqE1SXYXe4Y2hXW5qZY7SHjvP2VB",
  "key15": "2GC1XrRuuc5V6uDbdaQ6pJ64qTvpdqzZqRXJR22qh8SgumAtZ4Ty2FmrYVQrexRbPvwXLbDHMbcjuLBkumoprmFD",
  "key16": "dYUfKz7XjoRugZcj7QtkfEcAu9ou3aV9dka2n3zKfwdfxgBs27Z8Rhag3cuZqjX482YwTFCe6hbiJg1DjybJwT6",
  "key17": "2q3Fd93NQW69m2Qg6dFHSz6yBUozn9fYThfVeYmDcCpAgQrGri4DShRR5wNd8NZk93amuH1XkYYy2fS85gUKdH9f",
  "key18": "4chSc7LDXGmWhCzsTaawicgqMcjxP7PxWiau2ag3R2J8DAgJqXg2guYNWe8vc3ya69rgUHxbXXRrtPQZAfS3GxbH",
  "key19": "4Z9u1AMTHsqzL3wzzMnd6Pco47F2DLZ9qUGNshB6yA3DZG4KsaLbUQH2DqiyYKcsT5gnPB4Y8gqRFZ2emGV6nRK1",
  "key20": "2TGB5TRSZ2iSeu6rYZwTWCVXrnzjbcT2zdXT6Q2m114Rvs3zmc1baKkePQHwm76tZd589xBaKtWsLvvpbSoxMMB",
  "key21": "2rviMkbB7MpA4QeesN5aEBzzuy7cveghh6ieCiu8AUrVibdvXsddL7S3a2pBTkxoPUQhoxdoMx75tHsAd72GuTwP",
  "key22": "3n9FxBwtdW7ZdrQsx18Pxu8fUzkRrg314rpeBpAZKqDFYTGJ2W9aPaRXyBLF7HAkh2tnGLNoWpAtPY9fJd2zSteW",
  "key23": "3sai5TEbMvfyVKAnYDryAWuaqsMXVHyxA6fUn72uy1BxmqoGyYawwHL7TQYVpFykvt1XpWX2bXYJhRf1fmwc5RJC",
  "key24": "5UQKp4U65pynWcxEWhPZ1kWQhBbdSHEN69f2d4Mge33Sm1C2zaWTgZTWQPe8Q1vuAJFs2aHpKG8AYK3mxHyf7Ki",
  "key25": "tzTVGpU68jXyWfTN4G6YpK2u4cwFqxLCswGvqiUsX8uFevf4DWzhusrUKwq3S7XLMVn8NdBMbWMHEixRrd5X48X",
  "key26": "4LvhxdsnZwjZTuTjSQEeKBgUymQvBNn9GxKFzVtUEwpLAieT8rL1c5gmWeYde5GzeDtequBL5L8znNehaRyK2M5J"
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
