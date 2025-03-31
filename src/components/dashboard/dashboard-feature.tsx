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
    "2JvzFtP9wc4AL19MY8k9XLCruJwbwrGxiU2CdMkXXDcNyRYZRog9xY7cJVoTG4Eb9o7WfthyGP3qraB3HtQmKTuP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "375uuVrB2VsuZpG13izAGyZUFzFmJdZVU8MaCy1tQeKJrKCGLoM9SDJ4quFzCssrgDDAGgxqaDGBEioA5C2FLhLg",
  "key1": "4YjKnDf5QAheJ6nToGWJasSGKqmiGXCKVaquczPoeTbHye7iWHCg5zQSdsQCKEt66FGMgymBTqqy5psB5fvk6ppM",
  "key2": "E7dChZos2HbvAz4QrZturvep4HG4yjDyY2ceWFbtTfoU27qsJ9zKn3wwAzGZ8JfUyYspr1btCcepZWhnpmiBWAk",
  "key3": "3dS39YbS8EZeE6hqvnifrUM96iYFx8YDxpRche4BJibzoRQ4wzyu3zfcxP5fzxRP4xwziWKtS2jqDSBnyaXiaCgg",
  "key4": "2prjQJRHyJWHvPkmCLQmXFqhKyPW5yBRDNix9nJcVEf3rMni8qxW9hER3Twac6CBNvUwTg5V8HSEh1ywr1vVFF3x",
  "key5": "2d2exoHo4Ujn3rnNXVRDdRxobWBhsJbJYRLKa1VQA6aneiv5i1CSV2Se35kvx5VazbsumyKJ8sntxC51z1ZywxKk",
  "key6": "3RQ35a65QV1qVkF5g2wnuKLQU8nCU1chaiJypLpGbram236UgxWPMMg5HqtamakBcWyWcNxfZmDNqUbA4kRbSxra",
  "key7": "3Ma1xDcSqzZ3C336oTFtTw25XRpMYCASeTuqR2YbkHzizWCAZkXaWmYDBR8vH2Lzxi4T7RqQyTkzmUChJRFKvE4t",
  "key8": "KnkwsMpsRpm9u6idSE16cZWvaxX3Bb9gN52EGbQuTDMe5i89ffcST9D2QTuqouqCbvTrP78GKk3hUuam6a4pmo6",
  "key9": "3UXkVJmrcFu8qDdRGo4r4mkYaeyGUxyozTC4pWPiMGaB7mHQ2rAVBLsaqphoX3GS4oQ9rDgBgrgrZHCnzA6EmK4G",
  "key10": "3nBMSaj2BK6yaekaL7WSTVhMcDwd8tDx8bHAZQ1GpmdV1WVUXyz4Ty7UuHAjXrLzpvUFdaSTiSxDxLAECjKZYozc",
  "key11": "36bfVjm7yiAYF6DVScAnRLVA4B6cdPJ34amwiNaGsZFwJVZ5HMjqbJvTuFMeXWgsFbwf6Rvr6VChfTVbRys1RcvY",
  "key12": "3GvP9thBpXkKLWnPcnAEQvbtb1CERpZodaujf67nSZFRTE9CvNfWFVR6dBSyAaEA59pgy2XPPAFnc57iPrS8HVj6",
  "key13": "5x9oVysRYERRbXCohU26cTR9PwhraUWxsffPicok9cwE3c8YjBYMnnkzYkG57ngJP8kuMH88EwbZx21dyNH9DQJK",
  "key14": "34WNWp5hh1nNF3r4TnSgpFqVfRHXew94rDGAyPTEhuqgoVsRf78ffxh1kKCL8kGJFzsygPnK6ftxQbjVPduKAyw3",
  "key15": "41ouW5WW8hWzBx1bEEgsJbhKxykxgiZtZeg8i62GQwgR1DBA8zY8cn1hw4pURhz6bx23xcL6HdXhAdf91xNm6dRg",
  "key16": "2F5iQ2iHGTDaG6fbJYnqSR9Muz5v48x3GDHbPXF7SfysJj5bsy4AzP56HZHUjwPdwVew2cMVrpetRh5WJJFt1nVE",
  "key17": "4bYsmJ27ZZhPPJTBTTECcz7rQL1PsbSB7Cgg2BynZngm6S7VBkdimmPJ1BzZrJNHcQP2JEzXfDnyVWvTwcfWozJP",
  "key18": "Rq7r56EdYRBtrbo2qAjsUHY7srXhBY65oavkDLPDbG9XsPgEgiYUEDkY77bqghNsKkJw4EFzhudTf5fTBgP91is",
  "key19": "4HfNdyctBCeR1i9x83JvK8c4wMcUfhVNuTf3X9NWMBMcXABUDFvCmnqs9bG63FZeE6TJCKPhoANLbqDgC928PnSn",
  "key20": "5ARC7tvDxYpQBvFLLkfo1ArHhUTAb31Muq9eaqtDqP1RBxJjaGSYoB4A3xyK9LXk3peBKMUnjDwTCr9kjCtvHnPU",
  "key21": "4seY4zCYhG4eMqgCVkTbQkfXRCzWbZRW4Rw1WgEb8xyAFMzyh866rt5bAsa3YsNRuqY1onaiot2faidPw8174hro",
  "key22": "2We8Ho1PwaUaZrkcRhQjrgGKutWawibdLsd6YbP3675hic7cHiFYGBHRXGWemebVxZRe3G2grw2dfC65MrgbyXmW",
  "key23": "GegJ4duCs51UWpu1uuTsbTg7Uno6nq67u9xAmvfbSiv6y4zfT5HKk4gKrAZrhY4JxuktmEcGTLaEk4iFwSHLYVR",
  "key24": "2VuatuLm1GpW7q6R2577nXmvQDepD3mWFZjL1taidQEZPnCygR7Yo7VFWxt7114DjYZUQCHL6dt9BPoJS36Cdj56",
  "key25": "3Kzu2QPE2Cs8LWxjYBy174uEB3HRtwtHsD5wvcMA9AVbwVXN8f1rArpGxjPpd8Mmbzfw2pJggZBuHEWAGZGP3UrT",
  "key26": "5qAgnYQdDQsLKXd1ZcYocAVKZbEhQyhANyPNuhpaw4tvhk8Jk9pA4hfAzMq8Uc7iKp1NbY5BXoDj8tzMJzBhJjEe",
  "key27": "2sTXQiTAhAoLjGmBNURoe4YS93dtTWr3dN33jKt9AK85ehdtN7QdYSwQmKQvaZ3wsoKhFmBvkK5LBcjwfrMM2DQM",
  "key28": "5y5uYcKb9FZKtEjR9pBdb9n65K8MKei7rgbLUJPU4kEQMq5yrxicgTNC4qJX1t2pH1vFH9Bz4pCGSvJTBDDU8UYV",
  "key29": "3N78fNqNMEXHGDxRAdaD4CdAAEYBDKTJRvz5HWKDTQJN9N5QuR1QwLxhpHYXbunsKykLfUVXsx5mcipdy6PW5Koe",
  "key30": "4KC7hDji3Qf8HUNhbasMX9PHwQAgkT7KJD6dUB1pV2hGH2isfs3kuW4Sf1RSMSznDZ5kFfRzuq4LQVTn6heEkje6",
  "key31": "392MXWSBrDc9zNmKnFEdZb7TSsEz5oR9NQ6hcRTGySwMrHiPT3PVKHNDvrwuKWJVRRZppTA3hZZg92GREoLw4nxs",
  "key32": "3K98zPEkNAQDxhsKduogqLteW8wmsKygCx2DP9mKQQCDjYNNtF2QKvp72UnL64AGwXcSiH6K7THgUCAD78AWQJhh"
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
