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
    "41gqDCqKSeYY4LMjB4BmRHi13oMt6sidP4PZJPUz6YinxgXyKHCd5aMitYbQdT5izBNrrWdQqg5Kq55bkaCX8CNk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C6bo6Pkvwq6raui4KHVYzmurge9xneq6h2qszF1MUfiVqGbLRNqBCE72tvSbmzqnzYtBqPeg1F7jzZUTQBVN3sk",
  "key1": "XZMNCHWe22xvdkGJY993tcSbXwPJBAJVR2JPe2V8Hh4H5zoEf9DaXkHEZRD2k3JZyEsz53Shcr9bZqLnMWTojMg",
  "key2": "dQwghREobAuXtPvscrbF12Vgc5MBo4J6cjXSFXTSiGYgeH62Zu2fPee2xTUxTvqAP4DPzJQFNQyuYX8PyMdhnKR",
  "key3": "36avKwJFP4X7yQ6FyxG9Jgc5iQjZAUwxTDagttgdRSqTFA5dsEupe1HcP23G8YruS9oRj58MarxQPQP16t2uEHe8",
  "key4": "3E3HrseYivGSRcEBtjTQ9vX7auHvQsSt3dxc2sT2VNAJdcGXcvTnM7ukmrsq1YhnuXyyTEbM4RkPjF3XAk6iMhKS",
  "key5": "4z1RvdRcnH3MyRbLhRyUZcxdELa31aG3ULWtn4m3861AnGFFa71egLpMEpCKNaK8LBVbbPj7YcUrNcjx2xMvfRYH",
  "key6": "5VRcHnzmHxhQb8H5RgVzGHRyy65chochkR4R7rG3YwerD1c2M3i2thfoHqH38g83dfdRjDsqxu9F8jrq1EhJhxKb",
  "key7": "Dv1cFPQ7R2rsjW58rVgPMpoBxHDv49TLqNfHrsGNiSiNzp3uE4MWYx6ugJHWVFCysT8X7U3QGAn7JxWeDuKjRtJ",
  "key8": "2f6LjKs5VkiYJHQ4R4WBg5kmwz6yyDGzqNnvWiWHa7rHUfW4L2VVNC3d49UgRjPdcR9sYNX4nAyUQbCvzaCJ3DUo",
  "key9": "4R8Ltv4Ka2wCx7pUZrbTqsBMWrsaMpCBCvi4q3DDokupFSBj7QDtGnoGqH3PHC6NudxPpjUPVa6r6wEUswyAr1FP",
  "key10": "qXKnc2dRupvToj6hr5xGQAwvc4APJ6Tta7tdZWyFxwQHfdgbJin6JnvkiGKA4hMWB2Sgk7Qfi7H4bC7raaqdNrA",
  "key11": "2fFTaJQrrBrCXym4rJKDg9jhc6CjDWp5d14k7qN1km2M4cFYGUHvezPs6fbdcgNTtBRepUzST6HBAQhMSAP5LnzY",
  "key12": "LRpsNxSAw6cPtMVKsRS92E3S9GszMnLH2DSYR6FsJksLbLwiLcXXRfgiiMQvpuZvpzy7KPW7dxmDxuMMCDRhztS",
  "key13": "zVLtaWfzvmpsa5Hsietz8d2JBkPmsu3phJ7DemhLjtBRwJ5E2Sh5GCvMqvZSdAhimkQf1SoEXdSPBcQK5Jwwkya",
  "key14": "3nLWygtqG1Cf2GChfcU5m8L8sTnf9hQkcmhSKmnxV94MSMW4uNRBC5ntGNUrsn4Q3SqdgRuKTViVHgZGprTsv8ag",
  "key15": "4xuYdbY6hzDHBT1W2eczFRWEXnzyDLgTt8gG9drZZVAuK2Qb9oRHVcXA2Rzj8JnDQRCBCHzYQy43st86W2TbnqTW",
  "key16": "37xmrJdUFuYFYpEopvK8vM1VEy8Gb1Az4FJAC1V7UNu3j5QXFtNpJ8Cx77nityioKpVKEBtS1HRWtp8RAdZiwygR",
  "key17": "NTsYgjkGDVmWfhQee7NqR2icE3aJpAjmQ1kJZTpKpZEyxnsZ58K98ds13NQ1SmTmJDJnAXEPk7ffErJ3ukNwh27",
  "key18": "2xtdFEXwPY35y3iSUMTEHB1pm4bz8JKNXFQ74W9vDQi37px4wsqkx1XBcW3ZSQCpEi9ZPAvYzhYQZLsiJspWisLk",
  "key19": "42zoRzVttHNekurfB35UDsQKsmAVLFdUM4q6DyLahZx2s3eJK9JGE84RKmGZFdN59cvcNfYsQApG1SNpLNXqegf1",
  "key20": "k1ptXRNAdegXm6dDm5XeSiLKi28Lmub79bauaFVnfsr2skh9iSSd9U3eZSjxD5k53CqoCxhnnogACCfQ8WGQQVQ",
  "key21": "3Wzoud4C8487eAVTmDsmW2umv1yrokq6pJCgCNsKde5FzfQg3TPFMjewgAv1ZXU5vaXhJ3426vqpfzffB5WhtoGC",
  "key22": "aBzbc4QMoSgfmoSu1sLpQ7k5M8iVqdpZwxCyABk3ubuGB76LvJTCFdEb8TJ8KzQNMoZMHmJs7JzmiEMgvRhEEyH",
  "key23": "5Rpvm3njLNVwRwhoySR9cH6hc8mdyRJACrSMzMT1JHTSVALjpNW5BuQPnbDByyaMjobokFkvxEYrnhinkPqXgQyg",
  "key24": "pqBkaMp4L5EpUbmc1jJDXbxAoaLaegwPy98hmkqDp9yD8bw7HR4cES7T5exVtF7H5Mtx8KqNWqbHBgui4yKhSA6",
  "key25": "2hqa6zd74ML35caNAqKZFgVBAziUYrmV97k4F5PE8tJmA8YHLAp9AVXGfDZonpV5AAnLm8DoBbWnyEGNxLZ5nXLB",
  "key26": "286rMXRR1UCmHiz1K6wtu8RARcDMgqqH6Xfi7TpdUXTkqmaKCuCbzz6eFgfUNWYPP4ZNkgbNVM8jJk3zEy33RCJm",
  "key27": "3KsDDzmRLtVcc7NWHHk4HDW3ZAr8nKF3jeT3Vi7Q5w2LnUyUiXfKqf2e3YaZ27CnAqpDGwHiYWsaxqj4uhNMu3eL",
  "key28": "2nrFUMW4xSWr2M9P5JazoatRjxF1cBeiiVfwQ6EB4eXdNGhHiePiMFLFwZPdLmLJU18aL4nGWzXr6mAe61ZWUmPS",
  "key29": "G1SS4iKAGHk7FkjcFeRGq6eq9EF2XL2FSJdiDqjRDxCAZhGiSF9sTX4vxBwTbf8W1X3anksjGULtLfQgyunGb33",
  "key30": "1CvPJB9N9hPV6mcNDW1ZAZRvyr2Tz9TTcD6EDYCx5heHBtpqwJfh3WB19J2JTQwXi8kTb9xP6ukzni4TyynmfGh"
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
