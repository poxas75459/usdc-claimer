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
    "28uHkfZx74Nj8LPCkLFXJN1AnusVM4v9Rr9yNxgEwVkeWS6Tom98Ss9Z3aQdZsUYnuKuAvGD1vwcEPGEBNBAy8JB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Kqk1yjw16hiN7zSCoWvimev27Y6Lg3kXAktNfzeTgiXKTLxAcC9z5mMVMiQc1gvMiTUuabmEyDxLZeYWaVvi37f",
  "key1": "3E6vD1iTKP5bTLoiqm43rTme1VjwBUHS9SEyxzMumVmNfXBGTiXamdME97zE8ReBkDuhy7U4Qx4v9pVeiTioUpNo",
  "key2": "8N658C86bFNFDUWiE6QT2bSAFJAf4XXo4XcmWKuSmkhi7gPNpYdvxDFqS3EHoTVYpMvnboQbMVAV21csEKggitM",
  "key3": "56DxFLpEaUk6qwRVTUSDub2G63dy2zdyvLfR54NuNgYRuRrNyb5Pe416up3N7SMSqXnFZUgJjM5Dbr721x5tV2YT",
  "key4": "w32AEcSXY7tFGN2h3V4E7ScNBugRN8iC62vfVeuoKttyNooZ1863VaozcTHZZQX2pNEDqwotirdDpmGcTTaHAmJ",
  "key5": "51iXVbJibnA3vhzXAsRpw3j2JCwexsRTozqWTFdNYzA8MQVJtct8DWRkdgZ2cDLxX8o5DqFcZgyTba4aRmKPe8Ho",
  "key6": "28rV8Zn1viYw4bGgq43rc3gKehKr8K42bFob8bxs9Yeu7fYcZUoRPJWS94KnFG8HwDb9orZfSVfxuZb74oBWii1S",
  "key7": "VP3Mudwt4cvB6TLrVrNp3UiZnmNf86BnGTSY5U5soKiZX6a5ZCLmFVHwySY5eAwpzaT7TjjtkU4Kj2gP9Hha9yh",
  "key8": "4UNzd3RDeaWk761sWH5Pzj8FDGtZNdjnfYTMkAAf8D8NUdJiQuhcnDgaPmHnizsKzeYdfsWpRPmw3dAdKgxFP8i",
  "key9": "4dSF5RcmxqjgqqGdLCvnnDBD76GiRcT3YwDibKoMqVEGRVX9wz3ExwmijPLrfH2D1KtwpgpteY28bVyZCogC4bmp",
  "key10": "4f7jtsNKxaMpkcopGUkZLYXFR4N9tHYuB7LMcu7aPanw1DZQYTPFUoFTKL1LKvMNhnivikWs3Z9zbBzh4ybGvXxk",
  "key11": "3uEVffHfeGBFHyakc1bKX4K3kCDKSuSwtdhsJ12FUi8kqQ3TMgx2tc4tvQR4p4DQetnpPAoRQGhmjuHvZm6bUM96",
  "key12": "2DK9FGY38e1KBzPhvuJ8Devj7gW7PFNx5RyvtFiQXRirS2TrcwzTFZpHAfxZXYApnaCuzsDViVzDXjx2PG6JDhLM",
  "key13": "3keNsVEmitvdq76s4MPk64EMFnVVqCfwZocorF3eT8bG55DMnGwDgqX6vLuh4hAp1CpFQkQyigstQf3VG6gRCZDW",
  "key14": "4Gyog9hvvuRCrQigE26LxsowfJah9x8eWKrLtpghiScVz1YwFF4A2HHYmDVjKkTnvkWp6yUBSQz4X9zd7tpQhmE1",
  "key15": "43beTu36VNGmRjxqEXuK1kCKmd4rsjUoLQ2QZPJZB1KNqLHfmqz6w5UmPXo74SN9youAMLoCdsE1YUFnr7bGnsqS",
  "key16": "23xCuAdg2WdLzAuYRofc4SnyWKQepS3WzhAfYxxQ7SLhymsw78jE7GBaaqAG5jPBFSa5x3cppz8DRf4CaLFjP33a",
  "key17": "3pjLedDVPE9j4qDvmfRu2cnGKPyBK6dZfZJLe9QFLJTjJjpwWFsmLwRr7j63CCiHnu3EVcmzyRn1bsyM53dnZHU8",
  "key18": "5uZUpS9n6Pqz7Pd6McQZVXUAiDahBaZv5BXVD8Rf58nj3Sj9zuSkAFrRgSj3SqZcWvCZ6BEPrBcEDFUwj96U9RV",
  "key19": "3za5hwc7jyFUN4DjhVzTqCMW9rD6u7dhrqKzsa2mxjeV9htBHAdyCRN3fncP8FqStWJfQxwHXjgehyNty1hMdiXQ",
  "key20": "4sUueEaUE5Zh6QzUPSnq548P7NsrBh1fDyQSK5Nonv6RcCawpPcrrS4Xr5jVsugVZGE5zQ4NKenjFj7A3ouZmKtd",
  "key21": "4A5PyZHFxP1igQdoWT2CKaMT52mpdygKavdfC6z7Xhxa9BZZdW48eh3vq4R1MmmbfHKGWTuSaUZZihvgZEd8Rdto",
  "key22": "QjvrXEw99o4et7kdbsJr5yYjHCaPNhc9ur85PFFWGiUwE2EeYn5KFCEey8VddfJHbxoAf3eF7wtnKRJ5yLhhPad",
  "key23": "5FDDbn5fw4bqTJmpxsczJ5PJaN33PJivLxZjxn8x6Xdirt5BpWvZr9C97yocycbFaZHMoa4Bw5ZRBta8xpvq24xp",
  "key24": "4VZsujyLhrVNBS1yNg9AVpFcYFuBqZgrJxrEpEKRfz8kG3tjvdRYbWjJZyRHKxU27ifoXa5nTucbU6gxffd2fZeg",
  "key25": "3ZUYSixK9EFPBji34guBhrqX2zfLDzaAYCg2bf37RYAuVHJpjsSBQmeTCkM9ryq9wn68GwpdDmxbjhFT6nrKDUUf",
  "key26": "CikTuJGy3MG1pApKNXv4kMqBE4J5ZK1fkYPnGGFyAcb299WmiY5tEdaDNWS4QwrbrXcwDkYzGYNvApeV3FPNXkE",
  "key27": "3XhqCwwCCpYQLZWBG3YziNgiZYhYMvUN3oErDaiPPDp3Lj2pHrmfRRe3fKZQ83Wk5RvQ6zmuZtLEETeWM4saggHa",
  "key28": "4LvCN1UqfKXR35kGPZ81BChH4jQ1NoGBWMnVJf9mQcqm3yFQNZSoGqLBWjkKUZp9SXAK5414fdbPYhwpBaxbA4Na",
  "key29": "3C1nLFxnHZ4myoAZjRry1zPfnJcuthkPnnCN66cF8TnWze5VV1kM8QXpzkBTFC9ikxWx1yExmctxxnqxWsjSQBgd",
  "key30": "4KXrg9Gbq2y62cWwAdvVGfdGsjw5MY8LimvgRGwu9c27N1tWyYXJiHm1Qr6NXXrTj6dp4TAGeUDSg41iAKiZf4wN",
  "key31": "3tvUwFkqa2L9zhbZcotsgPsxWZMWMmvg5BzjWGS7kT2K1XhXyT84TEzDKTEk7ZsiJWBDTQS5SxSDZJjQexXYnNwj",
  "key32": "2m3YsrSvQd4EceRFUFQysfgvQdteRoKaxC7udX1M4ALAQf9E4DYJVYzZTeUdHc8eUXtqp2BVM8LjEZvEesaK9XoV",
  "key33": "4KV9YnPoyKm3fEKwqM3kT9FG8pToPotHnHBWCDADCECPfcLQwNEgjpUTEoDdb38ics6ASvRLBSB4BGmti5Rr2mNo",
  "key34": "2NYytPbaSar8HtzLxTxUv83ZHR8aTc1ZXbJqKUT9494KsVKu1ZrhsTWnbCoZWJfUk1V8b41ZLYjUgTduRB81cCW7",
  "key35": "3KVpkjRtpSwpMajBVNRNT9PnAfm4MuhJMdwUpK8qyfdryKya6VNwcaWNN1Z4DhDGVpXY9oag9qZhtUuHzPYdMtM1"
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
