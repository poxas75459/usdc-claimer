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
    "n5KwTB66bcFHATD5fT9VMaEuEc1fNijTnPeu3fooxFrsMYzH7ZMdbQnRAHPi4ponBxxmthjbsv5ztLPZ1ywq3w6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kr18CubfR5YhasZTHuxF449Cen9Bg3mxssnxkmszsXGNPFeEtwRN8PkjANLAVmS8tqFktSTvu9Fb9PynwxhK5dX",
  "key1": "597LtVmAQ12QB3ziXtQ4Np5kMTBn7zwh14hhCyMQa5omTZfaGsex1YZVkAEEniKJpVeEET52X5DGH7Qt26KABMv6",
  "key2": "5v9UYx7MHNY9LpWhb3D9qCM3ZM1mN3DE8Vy9sgycrgM5WftbY1YAnLANori6nVahySmyMzjaZFUZCSCoah8r1ifN",
  "key3": "DaZ9yp692gsxmHvxpyKB7d1ZHwCvc3bVW4rVQrQhppMRbNXgxyDyHBabu692ooaSVcdCdUV6RBCu1eSFH7DnVkh",
  "key4": "2xxGiuPYgr5NQAEeZvM913bGSSEKY6frkDzpyUjqH4u5DtcyAaYesfAcbfuE8RYdYJ792WWbuFKwxEJa2wdP31Ch",
  "key5": "44txXQXGEHoTt6obP78b9NdAY4dsm1yZXn4cFvvzdorzbkZ6stwQCkhabiPm4oyBwEk9Q9gKXJP7FmQNdwaAxx29",
  "key6": "5XMu4L67vKs9mc5EwNRroNN6UWpJe6Ui6RLJeQwZVkt6idBpxisKbjdZg5YbcbbY7UbmdDi7tbuswWSW66EAoLhA",
  "key7": "67qyQbY15gK1aeYu8antCXxxXHSZumP5V6UCHwfzM6MbHjnBLpY8JrTJerYnMTsjNSLWKQUEZs2rAocSN3eepiqH",
  "key8": "3oWSopTkCBm28Wih8J82LybELPo1SBZnEUhnqBi3bSwZSV6dcY4w3Cd45w5ww7EH5YRDh9gTB35uqfon7kARW54K",
  "key9": "44f61tUVweWTs45gQutwHipsMGpEiWP7zpUzXf27dEooHRLZh7LChrCvpedNKt2pmTSgYST71jMxPbwoSoKGMerh",
  "key10": "4TZyBmPFJG5oYJ9zDFJskW9v1euXNbx9ptEbLS6rHTSUPCZDgTwiogu7pPFct9b3hEkE8MCZ5Em8TxpJWnAchLyV",
  "key11": "CUbNw9bMnY5LxFXHshGpK2EoNGC5PiW8fgLhcXtKgeuWnUo7TAuBxsfU4MhRZHvXTDkGu4qQJ2V81JRWzspCwks",
  "key12": "4pGM6gcrwu9pE3oL9WkVaT4ebWDNoADT2GQ6VNwjM7mW62kSjHk8M4hqLio9LFsQGQJymjzg61hLhQUKN1kdqu9a",
  "key13": "417SkJDfK5PzucBqBFATkYpBFqZ4CLXXVFKMRJCNsVuq2c6sGzL1KAc1L7bDL2ag7VNa4EZr1vzuTErX7h9nwTG8",
  "key14": "2MkkrXcAUGfT92LE5gK8ECuWPsc26mLanUumG5JzZjSF3oA6CbwdwKcvM1NK2uW9sEH2wL6jVKBgNbJXP6XezSQC",
  "key15": "36QLGtYWh53UUSDjvMSWGZztWzB7yjXh7Dm8rUFPnxhGTgnUiJfU2Sx5cTjnpzPWTE6LauXiaHLt3Ph8SByQLvLp",
  "key16": "5JGzWDos8raXAKWW6PDy8HjjDZLU6WEe8rtZuP4Him8ioTHjS2tnwUkV4otD8WCSgjE92J7MzBdpEqdvBZXLH54G",
  "key17": "sA3Y7rkSGZYL5yf8ibDowFsKBFJyXMzWqqMZ4U3cvrhT8ow8DtXovnniuqjsaXjNmNN8RbDG1dANR5NbySKhEh4",
  "key18": "5NgfniRVyRT1bYw8zBGka7JJGEEonmypoVkUcgh4YKYK7VwkDNnsX5bsZef7GQcEXAQ3xfTn7Xo7k2J8VFPBeTai",
  "key19": "5SvhijYcNNVcHWgRJtEuiCBbkWukgDxNrt57Bh7KZFVdDyG5PGTQ1Dtvy2t6barNs27bm9HnZr4PpDaiC6d1ipZ5",
  "key20": "Y4CM1TpPJSHv8xdpTYxpVPEUowAmepTCTcmuRiwYvDdtK9hrYQ8efZSGDfy1jBsdgnjDLYWKSvEX3hKQgGxHFGc",
  "key21": "2ojFjAEHDwwMKAVr6wezqfmfUpwDRv7f7WZHLy56RTsgZUy9qi5EJ8anQP7pU2MG5PX5VeLs8X8Cou16eKXhuyi3",
  "key22": "5E9wpbMzo8gadvemzgANSaxQ7qTqifig5Khuk4Rfex64JPcnN3D7XVaqTdbUAKvjTZtEmLz6ugRtnx7DxZRNfsgM",
  "key23": "3oBNe2Ro32P6EAH7qhYQ2PnmNVLZFiPCto3mqTQ5dMwmWHAL6h2PHsvfmpPMBvE1LUq3tBvL6DofMKXp4Pd6xHaA",
  "key24": "5S9excaT3wXTLG22dmG6vk3ZFcCn8KqsuUHZXTpVJyz2YreiBjjXidexp7kPNWxxxANCkFxqLvdzYEeHJHWkfWQA"
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
