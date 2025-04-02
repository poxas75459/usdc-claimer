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
    "2u4NCyJAo2ca2nQxCiRPRLfpPqXQRYpWF9cWxot9zcFzArKWESipb67x9j6W8srENV6qWGcD7uyXvG8x1JLa13PE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZZPQiv7mFyiiWgUeJWAUpyHqvykzjUsnW7nzA9TexEpNTEspnLnwKjG9ffJUZE6HcvCE5aPTQnjmdFbtpJbBMYp",
  "key1": "62ZkwuVQFzU3nC3HnLqDUB2qB2RUt8eangusVLYN3udEdzz6iTpaRVxxJ1vzdFohK8K2eyrWxE1cB1KbGAg6CEb9",
  "key2": "616wn6gKuqaUqF2rYKhddq4qTqrUde4uybhDqmnzvVSRFUGt263BGFtCU87rXGRAgEXkfWbpqeaJKEUFzPM6YiY8",
  "key3": "29yUJ3Cq5otnuNYeBeKnsCe6Gfihqr8nFdc85Bm1YjntSY1ShVzMeRpYWJqPZmykUmLXnRAjGYYpp4MVnrAVcaZt",
  "key4": "2gSPWBkYmknVGfRsQM97twQxvga6cDCBRHfCq5oYFS3YbKwmSzkumuxbuYj8vXmzL2TFsUVQ7PTgWwojScHLhp2N",
  "key5": "3h2ARtXefgqc1gxNEBihocnZBqLPyBKNPgLtr6MbVUVian3DdMgNMnXuRRSpdpr8u1PToi3xH79XU3M6JiV11hku",
  "key6": "4BgPYGJuc7eLULBE7gvphgCctWXaqeEM2aQ6SkdYaJFy1iXpMPyJVciXBLPjcmgCRy6dvaJyndbXocPBm9BQRDmR",
  "key7": "BYCRdGV4T1xwuenscPZkxWNPVfMpeerNsfwQaG5YjMeBgJddQmNBsYXGReSVgdbSUspi8RhBD8qWvckzXsFTS4u",
  "key8": "2dHLF5T2ziSbVPVKR7ZMJQNggyanauRoWcJWVnqAuEm2ZJBicEJLY2XU9YvbbQzkS4ADz4KegyNrFpNsUo3qL2jL",
  "key9": "21d7KUH39LEfUq6sShP4aYQqn1D2T5HyhqGdtLnkCPTwZbzsxA3HdKe28QE8avs32ctvqidUoNeCMkaWCNfPaDWj",
  "key10": "jp74VN28gKrHvca6rpmbWUfrPiP6HZVL875pWvxjESh8UcUoEeoPCjs6bFUjQEbHNSjMZykPXrNSX41MbpdYHJ5",
  "key11": "5SbYWiqCmfuHPnv21BHCXqm9RHfFK2L4szWaLRsHWTSefPL7GNLvYa7UA1UBcXkm1SXotAznHpsFmGhd7krZmNZC",
  "key12": "5dFQiKpnnyb7RtE8zN6pXWcLKn8GqTbyUkwqjgoTAydnHNcw8a4wfNy8FNNfqHGJZjFeVw3ZoNuFweF9qHUHb431",
  "key13": "3GDpgo1QA2yHktXN9PLxwWxkYn7qZEpeF68U5LZX6rzUbTeN98mxVXeRLpx8eWXUtDHARBbAqetrwDdS5TAeA4Xg",
  "key14": "4NT1DiiFzQodgLrZTUjXQzoc7QP9Hb3xwHfJApDzRneQvZNUYGycmrHgMyxhcx3hDdMUZemiATCKFJnW1os8DkL7",
  "key15": "2KiCHuJY5ZbCWqf5uuuGcJ3rdyFSoyRDvdTGBDrp9dhdvcpjPfoeA2rPGJdtJMiCwYabGNxAAtwp6c2ezyKfYE6B",
  "key16": "4nHD9TmpsgFfqEPCrv2cN7SKosnH2cNZvi6N2TNcoDaBbBxgPqmFK1dVhh4bnd2tokKyMeUWn8yRn38uEVnSv169",
  "key17": "43YYtcfjYsTiMstr2RNGbDBLd4FWBrq4nvobyqQ6oXExE3hnKcDyEDuJv2rAUYUGifhoGpbb8AnvR3FwZmPGTgRj",
  "key18": "4X8bhkrqCBscXahMidu3DwGP9iLh3fpwRZxU1RUs8WuZQ7wr9vSktJ7PDgNiMedPow5W7cSp9o7Zr4BmXa4AjPTZ",
  "key19": "45RhP5SvPiCKLjXsya2M1qfximf9BN88aCkNtgwUuW45gCCf9R4FDuuXNsEwEdfAtTXX6Fjau5URdYQ9CH3n8oQJ",
  "key20": "5jySGE1Picfv3Qj7tiPwFAtNqowTDg6rAqnrV8p5TEPjnG7FR8ugXAd3RV9VbrfG9WduiRZ29LMjgbHiJWPWD3La",
  "key21": "5Sq33sbBcWGKLP7tGDKGYivJoQQd49wJsk3bRyMaZodK7W4VWqt4ZCMpqVaj28YHhTq8p5wtu3mCTo67582brK33",
  "key22": "3pGQTRQKR8RBWdBjEAwFiNsqH5ssWPVigmJ8k3RUyo9LK9JTL7ZqvWFZgAmPwrBcuvgRqddF9HHTG2WQ8p51Wzxn",
  "key23": "4oujbQdfwcGwYKDhcYs8Gj8XmPbPdtR6vTWT5J6762iDcKJ9ptvcwCqdHgdoo1vnozGYzVpXsDGSTLfV2u6w2xaM",
  "key24": "2gEYRB15NsDwH31srP8x8EC5nsToDnMXqkey2QXuKirzhSuSVLPoDhqBvo8GxE8sXxyip6smjmZR4LmXDALaSu5A",
  "key25": "2THAT3vdKyukU2naDba7zeo8qbXhQzxzUabc8qTDwqxk3mmshDt9JwVa19RCjKLRAbFWcDaMDTv7ERPsxviiKzfY",
  "key26": "32iwuUfTEiKiyzqYufuGxFrK1VXx6w22BhbRJrVzX5kJFRmP3e5aAE4BQTL5LCpcpCrXccAjgukcyQr9vjN6UH1M",
  "key27": "38JisNsfnxzXcU9NK5uCaf4mERjqrpbJQ2UzpospWEvEh36F9BwoBGhXDwUXtPQYAwzzBeNaw4oPFb2vwPUyhDhj",
  "key28": "4MGDYYQb2GUzz7LWt1wkDhYE7KRMs1GiL6ZTmrhxppDtcuM6WVH5VYLKJX3X9mEyXtJxJyrMSJoJ9B58yizeqxnZ",
  "key29": "CSzR5ZzeeCAwSXyVSg3gboNnCDafPmMAqkxQ7keh2dLAmXb2TtkNHpKGqn9P5CyVvo7jfVM9xnAbmqKD5ZJCX7H",
  "key30": "4soVYzaCopSWm7cG54VxVRLToHb3GfxsGfzA4XTTy3G46wBdkEeDxAV91QNUsUCKp44oeUxYWmXTtTdbg2cQtKxh",
  "key31": "2KtgFvLTsQV7d1Ucu5p5puFukbU5NTxDr6Fdq3DvBGGonp5o9hUdZcg2PAZdZ9QshqfSWyAmmRURgjNqFjobJegf",
  "key32": "4np5R6RygTbg3CW8cPyvxmvJDm3hpwCRw9Nodkr18kLw1gDjZtmqDvSiuecMcKENXjswvFLyiba2nsFytqTVZCCL",
  "key33": "3PgXXhRJo7DgatTiSBGkwBPBF7abgdo3vKX5jhDRpxNFqZ7AiPYkPZkKojWhsQKygjNezpveYypTimLZhijRPjL8"
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
