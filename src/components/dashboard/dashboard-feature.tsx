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
    "63sKCqZkRuhEiLxk8UNjagkSk1Pm5FrPBNuL4yMXw8pFEVrUF4YNAQWBB7nTz1QGdkNPHdacsYozrLYy8Co14trA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CVcx8Dcw8HjS3Jg7YW7TGMNDSYdHQ3wHTHCezvk8tZGraRwACbamYwe7bQpzrNe5uvZotQWq1NVAxfb3aPndXTv",
  "key1": "4hb9bqgdKu7uHNKAAvdCdYzBJAa28fbWm6CLdLU2jAVtoXUVqdJEi6e66h1TDipJfsHN4TohK7WcscLGWbnQo61k",
  "key2": "4W1eYRvB9JTCgudGCVtABEYfxEnVKCDYcL2Ddkh5MNrWmArBanUtPLwVqzawuDHjRFv1kRCa5mdhEHzuwY4UaxdQ",
  "key3": "3jZVqkYa5XFfQxTr7jFcppigtyhjvnBgA6828PkPUWK35G7kZzrg7v33f6SHKNJx4WJAsLbS4s6ZLK1z6sfPf1gx",
  "key4": "4nn5XpUmufwvWAFAPoEPWyEtZSb56GEvGE513Lm2JSG7Ed2K9raSsDQiEUZ6k4mqy3SoBje9CnBhNiCBA3hw2CA",
  "key5": "2VsUJVdRaHmw48PpnxZLauac7XNHN5zStj5ivdoYEs57TitLkcRpVCzpWRfwqynRsXPBPwKn99KgKCNaSkU41anR",
  "key6": "3HWG3i2eUix7wSU3KhAjYjvWnJobGTNad8hWcyMEZVRNwoBVkwpXCgtpwYGntDAnnkikqQ49vqvsVmLyjQA7iCBN",
  "key7": "2nrNa3Rw6vJePddKHJtHBZnTEpLSnLFGUnWLq5gLRG4DYq253WUfgve1Kdr4ucgZcN811KwfWJwWAMHPj6RJYuhc",
  "key8": "2LC3QDMKjFCWzWUSDD857cYeK5rogwXvFq9etTvWGeTVgXtsz3TsEcfV8W92ZDNwLRepHAszcLuQY3wB3FNQnwZ9",
  "key9": "3XvSPBBWH8MbBy9osnwMneXdtRpoc4wMLMBDQB44w5i3uGKQtf8PexMYthXKyLJsnvHmHv3fKzyiYNjBMWqvKpg4",
  "key10": "5qaKnVizyvMCQXoxCEBmjveuUiXtDWeYvFPk1qgay8kvbw9LVq44BSFKCVT8Kh2ikQtY7vzGiPM9wqzUEYTz5CwY",
  "key11": "4wpgUoFYtU83o6U3MjGnpY4SjhfioYzfDN12MgnN1B6U4Rhqvss8eKtUKNP7wxf5kdWDj1LzzAgt81VqNB52y8na",
  "key12": "TZFDKWcwUNGKsr4V5xPXZghfBwcN7qq61TLq2ptZkkKk3iFcVsFMom9KKpKJWKMukZEdZp4wgzxhS5SLByWiNzi",
  "key13": "2fyNNx1DhSjkqttgr77R2HKQYqsyKxpvXPaYaxgsYXjq3GZ6qzXzxvHR2B1hvmidvwkH7mgEhUnm8T8gNiE3uY3E",
  "key14": "MW9uA4YGUnHPnb599g56R1LMLjczDzJx6Cx8L8kJixm5B6xMo3vFs9Zm39P4D2uLNan1o1GUCsbFGmbneemQX8J",
  "key15": "qsRp7JJ2rFTrpeFQoxsQAuHJSjv36WudsUa2kvohhdFLYKs9UsQ3ivnC7EsSPepoy3YnKxVfg4mW2CFTqfYWNdV",
  "key16": "39Q93geYtQkQ8Dfp3kApC8j4G1gpV6X3Nug28UC5qJcmjz2RNhSKJj5EQkDozodpKAA7WMzvabspUmj5tBNY8Sfn",
  "key17": "A22LesgDMJJ17L5HVHo1bQfD7JqeUFoBthd8kX4kzjq2AGN6v5hXHsi1tGVj6v1LNL72KDjewLciBACXot928XG",
  "key18": "4fjTynMktD2PZUYUePH86ZgfHuvB2Ua4oyj5eA6nkGJs6LwtgB1HSPJ54apTcR8Pq1fByHrExYEUj5X8k2n25nY8",
  "key19": "3gMSWx3FHeX45sJJLwTQN48D6t4kPtiudd5hqU553EkxbMmbApMDpCZT3uav7aKA28asunQEcTS3yf7asJBxdRgX",
  "key20": "3DxqtX9Q3yhLwW6roxQd2RMaG8yBBu8bpgGsRGnhFbmCWi2Rvn7EU12Wi56sjMUp9hcBh8PXnLUwaPQRDDqvvDUT",
  "key21": "242rWoRiP7UFs27CJ1DTkwj8FEwApY3nJz5aZvUzJkanwiGbaXu97Ny6ErWyQhUq62GAxHVMU8zzDLfTGtDrmbHg",
  "key22": "2MArnMVSUkKjMHfodtSsS9BzXw2tc4zzpSBYkf1LAntpuF24zXJrGY3YAL5aTiY7HLfho6728pexXyY87Q8RmjKo",
  "key23": "2KjYJ8og53SqCJurq9jqDdpV1mN3X6BjHP1eJXnCNhW85ZxeVscSf6tdzLKioJkZxaf6Xvs2hnZd9avfUfGoyiAZ",
  "key24": "2ogurYeWKFxGK1D4UEBeHVWyuR1vEAM3oggYb27ZQEvdMAx7zmWmg94P95nTGvZySEBPrDcrbda3Lz1Q8EqMW8kf",
  "key25": "5tRaZPpNmNczLXMnpBvuTxc986Pri3b4KFqaqvoWrhDC5mGhzceivWbm6TpWiJau7n1X5roBqGrukSHQLXML41G5",
  "key26": "axxz3P6VJz4R4SZXP5kABuXokWY8QjpjmCZg48LnyvwvagsAuzCh9y89wDuD2F59whc3sYGuSRtg2pR5MxPf3S5",
  "key27": "4x7q38c9zbCov217eR4zafcjwTu8RbNNPxigdMubqUB47xmEcVW1Bt5TcHarduWzhCfNv9z6FEqpiLL3hcUFTsea",
  "key28": "3D6rZ3By66MMWFmCX1wiGwyKczKrqG2u1FWA9PaLeDgYoTxv8oXckK2ojbiK2EZKyvGFPUhAurgJkCvtyRFV1yni",
  "key29": "31d8DUtFaGJtxAZfWjqEDzTYEfu6ViJ9h1NFN3axTHvjVJieeJLBwxwDd4GCVjX91JKy6cjQHcikhVRAcNdkdKYE",
  "key30": "5mVyZvmfUBBmCHdR3B1WFn5Jo46WazkD5HN81k6LiASjfFfpZZwbAx4TxTCyTA4C7diH9WSAGMzqCQo5hiAmXjvP"
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
