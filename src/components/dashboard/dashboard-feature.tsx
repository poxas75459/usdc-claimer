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
    "2jeAx2fxexmL5aVYU8ckUD3WU5Hm7cksJfm3fLrRyYj5cxFahrihUGpSx4EDFUhKWPHU6iqFiCnoUYqLU63b3YFa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DCqp5sB6YVUVipMFm2jb4FadPUjcMKJkjhm93zgV7owqtRRF7MMnaqpTTCvRTETozKwUEqgkJVtwzyJqHAGTpMa",
  "key1": "61mjyDoPS58Kv2vQmJtuPEovGtnhTuBhybrn7Nsn1pc8rwJuwf7afqXFXY6exRKz32sxy2cQH93dYT1Sn2Hjpzbi",
  "key2": "3gi5UMXQW3J7Z3cKRCt5iW9KfmQ2mGrnSco4mRtU1MCseUzGMWGZGbTx2ne2aJJdjQEuQHjsmFmSbcWCvGVJCu2N",
  "key3": "5RBmhJpCwgKFn5j1wwDWFfsPpVeejyMSoGTLDajoEJ4Kwrve1jeEtHVZ8naG6jC4ZVpLiivbUmV8zzSc77Zcjt6p",
  "key4": "5Z1uVkLLWDY6Ds4SbtUQ9ExRk2MrsMwTCYKPRvM6AA593HgMMF3xsvTtKJh5hTmJH1Txu6JYpnVmMJUkgjKthNAe",
  "key5": "4jAnne8yKSbCCPkhzG2yQgwJAz4XcMY36PDWywv8HnSLwpEXasasAioQ7B6YHHDqrPRbHRrcppHE45zvUAEHy79L",
  "key6": "4XgNEw9DAL7kmgDUnXVjbJ3McNAcRVrVTmqAG5Rx8rVs33FS2tDW3Wur44T2V5z47zwzmHXhcZtLvzT7DDzcQXrv",
  "key7": "4KZF5Ga3D33Vpykc8KZUpVSRsRRWxgL7iEVYUBc4bjZ9AXsys3tXdG7VGvfpYDD8HrD9mHBgoCzA7SdTsAqkNb5H",
  "key8": "qWgrDnnwiG144xjDSDLMC5WoPDJqtZCB7zvUFKXi1Ez4avdykVgg3HAgR7wtXmSMqBEf7atApGoHEYDEghcVdhB",
  "key9": "4Ru7LaPT9jy1bsHemo4tuURU2mSZugWrajN3rBUiXABaxGhLX8F4ApPA7t2t3zTMMwC5uLht5rPqmfwSJXW8Jb46",
  "key10": "4jQLgi1XcTp21z66GYvEvMzGwCJuCx4n6QL54pwxqnZEpneteb9d94ZXXBdQWC7Y7cPfhhBuANUxV2zoH4AJaQqL",
  "key11": "3qY926LpKnkK1y42kfKKzzzFzQJw5d61ap9UC8L5zycQxwGFnucMYsQTa7jP3zWj1tEJijR7J6kDpZL24JTceaYG",
  "key12": "3eaoG49qydJHfxg7DNCDMPYRmmWdepgt52GDUZgf2wNSM3irzyLKsREsVL24qPRdDbzsrv6PnYhhGrL6jmr6svT7",
  "key13": "2z6icXvSHLNb1nv4t4QupHRyseZN42VLRiCLEFMeCA5ifJmABAHs6ExUA9KSqos3kVgsC147zLH9ZiZsH62E8Tcu",
  "key14": "4k7KEEMiENhifQdbXZE1JFxjsvKR1PVxWCnab7imG2C9gbbUiej8pfQn4gCGTskGq6XVVcLPqbdCacyaBPd9M4vN",
  "key15": "4KKDt9GqYBp7GAuYEwNqYFLt2JHXKyr3cyomxyKFZYc5PQ1PnTadnaHpy96z5hKk5nBBve4Ch9i26jRBai7ANiPJ",
  "key16": "fBPaXDm6ruAra53AtUSYU49cAcbn4tMKar46pMVGQv3Jztu8v7cbDNzEjxrBaBKSY3vHCvRWARFRM8wkEMFeneb",
  "key17": "32WLH5X5qHKY9QUqdbQQkymZiG9mG7BvdLjfPCRuj9Q6bZyHZsoLTdUdUKFLwphPM73Yb2ymCkD9owYP17bzrS8t",
  "key18": "53fRdnqskgD6TdpR8ARzq8DFF2TDGMtsxAVtZ3fwZzuQCGqXmVSe3Yc3aCgnBWbqFipk2om5N54mrRzWFGwaUdyS",
  "key19": "5heBNZwmMCiSaK7tSaHCARjpwToVcSbQU454GSXVzg7hznL2BxnHid41xumLoiRLG9vqmJxFVNTgg3N8viB1R9Uq",
  "key20": "2xgZ2Ggo79pvc2s8bLzT7bJ4HoTn8mxMKnYpcQupidmXin3KJTNmaVKBtAKwYmD98xHGDnmrPrM5m6f1QM4LSZPj",
  "key21": "5uUGHVY6rbYqHGKS6j4G67y3nPVJ1cX7kLoHrj3dan9qVg7BtgsVXn1b94nfC18UoBt5Sx3WKrqtZUmitNNLvp6Q",
  "key22": "2213vu4UsVjf2ZHoAhymp9NmC9HpD3dqTp9XzGC6xxLiXJJBZx3VyzfyynjiJ5KMQSsjqxVY58LTFEJxVLERC3e8",
  "key23": "3xqSxgUxDhT9A2C3VGTwRsS8Q1e4G2mGtzc5dHLTew4dzPZM2THZWesuH9yxygGz57PhRiuK6pVyi5g39nvQSrkM",
  "key24": "5BnCdyk9GyyooMPWiRakcJKWJfTpqUTF3LJkt8vHL884vbLzoEjqyyTW9hERBBpHsya4rVWmKG7HvVn8eTrL6hQk",
  "key25": "2TeqqQhrVhUEEBRQVD7oAMwHmL6KWns6KWU9h5uVjs5scX99FcLzbFbopUr8Cs8zmNsK1XYMPdbvWb68RcCjdssP",
  "key26": "37VpZiz6N8PwNMXsbfYUs9fADbyN98dQFCV3EaeEfu6G7vfXavP2UND3nEMsAQ7bkTC3CLEVJVmcFs4iMgP2vxNt",
  "key27": "3LVHD3MbgguiqjntQQfHj47R6BTrq9TKGXKJVJSLKog5R9scsEi67spS5DfSWyoWu1Q1aSsA6hiCQ1boMEjQ2B1V",
  "key28": "2PMwL5bgSvGsz8gpU1z69QwmWssWa5wsGfbSuerVJYV923SEBp4F1fZbwH7JewMkKnTmdFvRpU88vtwKMegbcwmu",
  "key29": "5MgkutnbHjoH9vBNvfbWoV62J44bJUgvaDUkL2xzaNTJdsoMNdehLys6miwxTkppx3vLAvXhRnjiRLNmWUPXtizd",
  "key30": "2dJn4fKXFmPbzbF3C6jALHz1yqXBVcndX3ZD4pPFUHGhQaFNBsHh86qvbms3iiXj7YtiiJ4tnF7JHEDEDaHre2SH"
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
