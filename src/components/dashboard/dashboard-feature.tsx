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
    "4c5aJ2TgciY4sitNXgoTCFuJTzAFsVHiZuytjcp31JSbXAoXYc9bWH2s2uy4k3th7ZF5o8RHGrWdqLXAqtXewohP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nSwB691vcGwaGbqwiKi61M42TopbGSkbro4En1NBWtQ65Pgo92D5cSSpLwbQqPyauNVjYq1Q7KtpSDVe57NX62P",
  "key1": "4YPvhMq967Ld1pdh5wzanWdrGNupAJcS2xzLQdLh85Pgye7pAvEE6ttaXXPzjD2zkLtRexJzEEC1iQozF52GXKNj",
  "key2": "4Qq4AdJ48hQzGP1TYmgDW98Pc6fu4Uw1GW3mVBjASFdn9pyUapwd9FXC6PzMQ8GSaHyCD1tpmyAgam9scSrfUuJY",
  "key3": "4AdCpdkDE2WjgjdYUpxi4juzrD9AgvfABwR24DisrNaM7M8FoTQY44TSfx46c8XxcknacfZHaJpKkBVAd4L5vVtn",
  "key4": "4f1t7TZerNYHL6bwBRNRvqaAwq7wSotp7GzF9n4L4EbYu1HkzscwiHRvD3FP72KuUGsXKS5VoePDQWJEV2uw4DFa",
  "key5": "3ffw4knbXuTcRwwr172pv7sBjiZsvWoZLM4PDpHXfukQj4xZQ2pHBom2VTneMi7erZbPLj2rvsGsLFNXk6f1CY2z",
  "key6": "32wwT2E9QKXg7rFkPyHG7fDBQWQipAXCDHFzTvZd1wJCENfCd5jkSSQS3Y2CCMc7wh1rMfBvxJ4EYFR35ySRfx9f",
  "key7": "3pNk8xcbXZubzGiZFrbus6H5mJNikyoTzeHuDjZkz2Pjg89Pt6dA8tj81M4fYPYSE2ZNEHiQ5HAH9PZhXwnUpCVD",
  "key8": "4GoYaEc1GRPtGnRJjNox4onxEkFaXDGnoSpuRdzcFLdKFyXmBuhH75jCcEEjfc6G25K6rB4ncTtZGxQvGKJWJcah",
  "key9": "4PSLMnsV46acQ6g8MaD5njgvN4ByajRsAcYkwRgXHLB1fNnpAGuQ6dTHNmnfuggxGDdfnEpYt2RF7LJkWQStnb7N",
  "key10": "5mm4UPjouF7UhrP4ngaKJXQtMgNgM9MEQbgQscDeHXRq5SmPrAoFyQdcbP6h2z5ggVBvcNcZATzv2PgTtFPsqmvP",
  "key11": "3v5VruGqKaPqnKeqjD5TgFnTVNPeamgVcuF3t8LgAb3AA55VrwuoRYSdLtkjPVe1Ra2VqssixZQEoE8pKYtXcB3Y",
  "key12": "3247FVbhZU18hhL66o15J1gMZzzzytFVWHNf78HU4Hv1CjKUofUhB78A8wt8CbU7JLTZfNb2VuenPuUoQa4qzdZz",
  "key13": "2QwrJhCeUFX5zA4BpAujRu8SmroqwEETU3MMXMpPzYb75wLXheLXQRtTcw7U6uefc9SPGNPsJqMzjcpuAgBm61DL",
  "key14": "28UspoX9Aa5oTHsyxmgXSbR6peBuitZCFo5FgHjfa8ag43kTMJMCF4XAfHnVmya3Ay8N88wVjmnp4JLVSBQXeNxT",
  "key15": "37ZGLyR1iYWH48TJXcryq3XeSi4qM4pBAzX8rMurXwMMkNkYwh9kBxaXBuugsgUTuS2MvNy2qwqNVANHoNMmyvz8",
  "key16": "4zQv8a1uzGzkvgse3ZbL8sq6pacfbv5yfPzh4qoShkuCX84TcybzFJKeWExjh7zSiVaud36jGCFHtL5SuVnWbtBo",
  "key17": "dzSKRMa4HaTZYKSgQ6Zuotrk815G7TCfWGeR7Awbt5Ei6D5goXiceyPjgRvNfSu1DTQVvXR1CNMmydThZwchhYS",
  "key18": "27mRaqBHFrw2v2usUTd5zL1GLHKwsssdGEFHEPWapuywTzW9ry34YrY4A25CQE7Sp5U2rZDfewWvomhdEJsoyNyH",
  "key19": "3L7ujwts1X3pA3aqXGdfP9KxR2jdzH8UE2NXaGZ33pN1DQzzccrQrBDb2TbCarisQQvf7uKjSSJYynuoXzbA1TAQ",
  "key20": "LZUne3m5bmyDDacoMV8CviE22JjZCzaBB1jF3BcnrHp7LZ4NvSjEcVLvUvDrLnEDK3b9SjXaHrmDucqVaACEDF1",
  "key21": "3vtrBnRVtGiVgHo84ouoMizN3hSoXK4kX1w5sScACg7rz31AvLF1S5sPqRBK3mfY4NN1pfmmbWHVPp1vwfKcHuo",
  "key22": "34cyLoQ18UbEcoSBZiy2AHWk1FCgQsayBvX1cftzhhN1u3XoUidYiYe3Km8ZSDVfjDaGqUng5g1szzr1diUZb99c",
  "key23": "5GExfeDuWBMxAa48fMC4ipxNBpvGsjspZM68Cq6W78a3HnoRWVHHU5zedw2t1g5tmXqMzLQvXiiPJ2b7ceRT1pL6",
  "key24": "51cEJ1EDozjKQT85WZ6rKzpjJHbMzFCS8BcYvbDmgbzJQtURhpo9vwVra2y7zTdCvSVq9y78bEh3sx16Z6Dmcdma",
  "key25": "3XT1Anm7qSzGH3rjT2chkeJBzxFUxajBWk9duA18QZXsAV9MJsx8WBsNuhKLu51cby8xzmQkqUAKR1ScS9j2AifV",
  "key26": "5m9RDBvVcZ558utuXuViNUk27TyRfnkrRJ4nksky986uCnJk5x8ZGrJRBeRovAMNrDA5X2dgwwXcWoyifgNdDVYt",
  "key27": "bvx3CoSrzRd8Fnx5hWVkFyzWqDMfCsSj3Z9o2kNEY1FCYc4PYMqzMQs7FmGVAUzWwwdSit7UvrpRpXQDuSbEuW2",
  "key28": "xuZLNVHqDEetPCbuBA6hvw71DgRuV4RJZLwdvZnkTQkopWZYZ58g45a8UvrGrz1muQt195Gt7yxTZossdczKQ8Q",
  "key29": "3EffyedCcihnnqyy1D4rmRansTgpzUbH7nWEX3njLJ96UiDR5D4Uz1b3W78tT4YzpPXVBgZ761jiGVuqPYhqQaVG",
  "key30": "2NkLdb1S6XEUUTXEoN5rPF1gTeuiP3Z8GteMPfrGP3CqCwCpkArS9m7ymkE9UhPRZK1n2sP2TwYtzZd6ewa2JozQ",
  "key31": "4idsRAhaTQKsSHRNzNBwAodjjrCQNocHaLTwrDVh3fsantvVJpKxN8CRV6nWd1j1sVPPfTbhDkARfZzZPQdYoENC",
  "key32": "3bK2DjrNTj62wWY3RLrUW4g4Sr2BzcDZep3vnJXXwxrDAxTKEpDCmeuuhueREWc6vPXEw7vKKPxfgKeCtGYcFUYc",
  "key33": "2MmmgCvow9XpbJfzmf62fkcTUwMW9eciqkkguj5A95LuiaKSq24WV22F92A7kmHuYbxhpPvf6jkXYSfqkRfVU5b9"
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
