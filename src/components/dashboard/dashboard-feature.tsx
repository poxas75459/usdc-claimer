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
    "41bUbXb3wvA2wqTbbmCDVqRdsu6DMWxCBJsjADR7hWttGVjHNZZWWiRZo5vheGkx5cgmyrt2RtxMsr6Xjc1cyGRk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uUk81rLUWkxrpxKRtcYr1eCrQbD5FwCA7NnGPdSpUPCi9CnwN3nz56qmZ5J9cQFD1FnheoLLoQVeZb5oYj4edAK",
  "key1": "2end2yywBFeqJpu9hFx2q6NhMMuqEDFXgxVxJVEHAruSDZaPhibTPvNue8iRZMENeKfEiKAwX18YSZwzwMygx126",
  "key2": "3cxiYYBxGyC8mUsPcGkwRRmaSHp7HjiY5gWs6jAdXDt1wwGuwygWjXq9Tisi7mrR1aquiCv9Y7HaSY5HXQV67sSj",
  "key3": "2mVfvrd8YpUY6bZneAg7GEfQR32Bh11AnbB86oa21FKeaYkXFAUHZWGkhikBx6Ubic23nCN4tE4eyy94oZx83s7J",
  "key4": "5B6KiBpFbZpu3UjfcCNM9BCxSQF4dzCCKB72F3t4CXTqwvaDHCc1SoLTVrooMCKFPZeYH9yDCEezq6sGySYaexit",
  "key5": "3oPrTfEA7KxgGuobZJ76MCLRh7Fg9BiPuvLeVEzcBxdLErfjCZXSouQRKwA2CDBtb7R4iTxPNS8eW9EiQgWQEy5j",
  "key6": "tNodmQxXrLVk4sunBrsw8fpa6mXMoqK22JaaNvjX6V2f24u3QzFAtUtZ2oMy5dJn5YLSpmQuHa3sdqcJeaUCosg",
  "key7": "6A5r6wdiD53pxgyA3mwkuwcVAkUvCqVw8sxM9TnbLR8zevZ6sktCmGZZFj54KgXBdoJdy8kJAWYQ6upFU3So7rS",
  "key8": "mPtBWqivgfYayvQQyeU4BbftHtBds9eq4A8DkAcKs12WpLzhg2mqUdZ2X577QYBzxkWuFQPrYBhAky6iTj5MGtG",
  "key9": "3av7z2JrSCXXsk6WUHeRwM22AUP228NBikr58e6fV5p3d6hM6i4wJZXmESkTUPUtmA6cTBUpwk8ZaBjXeqRoxc2a",
  "key10": "4TBVXuKCq8qhq6xrkg7gmCKqixXGYALkbKq3XrdzbnwqDYLdyYBv4cWDV1VmpsMAZvFfLiUhaXVG3EcRp5y8yJEG",
  "key11": "2Uyr2bGhLsKsDedsS1njTPhoBk1fC4Gn8ekSwSZptgNSsLWAQoNbe6KAPsc6E5q8rvYwyVoVMLTXdQfC7A3H5uX3",
  "key12": "2XLabgpSd9Y1pZ1fFoBKhDzcoAfLgqTm1GpdvAaTqhNN72CcqQNtVmKoENGYYAyAdTVHvJ9NRiW76SaMsKGzZVmP",
  "key13": "5ec2zFinJPLKb4gxzqMHRNx6jxq1dV5gKyj5L6cF2HNwGiYojXcTiUjWkamhKtmJMzqyecPAfeCKsnyN7sufzX7u",
  "key14": "3ZuAiAx4HPm6XcUVLVh35Q3nMZ2UZp4HCFBxLdJXh1xZs1n4ziYeQv2o7qbjutEyJ3nr6BPG7H6YVps7byzH5o7m",
  "key15": "3njnffH6H4xeoFUCF94xbdMPzvDTQ8Zoe8QzdauGJ3FnrePbPiRoMDyRjxAVcLnvRKHR8V1CKKvyVQdi9meQfBEa",
  "key16": "4bkSEDQNRccnam2yhbACv1vi7fzurBsE3AFWnbFXuS64kYu66FwVbetbqczy27XQSepGf3ZEnJCvBnRpghJvj37y",
  "key17": "59nbZejMRV1fmVeqeH9oW24cV34YRN6mBZTaLQ3HP6NddHecfeeFdaB19k1o4uLmbUr45kD6mcdcBC8MC5mR8egv",
  "key18": "31P5bVVYq8dvQX3PNkWSuh9waHraHzmVfTjmXfUJmo8UnU67LxfXQp5RQwnjF87aNzd2QMjw8VHg7YCKg9bPumbw",
  "key19": "27kMybHEfyWNKcZTx49hMadijiwPBEdAHa9nFE3x9ZR4DVUQ7ekKy3itngQX7mR9otaPumanFjsJMhYEFPB4DzBV",
  "key20": "4r9dm6kY5ZYuLfcveT6vjri2Wc4a9Z8Y9AwqFJ88f36iTFHB9oLC6HsxPJ1XJbXoYyAoS4Ndcs8h4fobyiV85wPx",
  "key21": "BX9ZVZsnip66MiYnAeKfcbgcPSKdktxHnxzywr4fpe7X2Qo6222pbp7vmJT4RYdzzSyijjB9yMWgndYEmMpekTm",
  "key22": "5SQGvwnA1k2saGG5NFVMN986h5F9iHrGUZar7tqs3Nkswyt8qYsmVhRJKwUPUJFEHoEY9dZAreKq9mybHmU8Jsp5",
  "key23": "3w3pxLgu76Apx9ynvQ98MzQWHJHky27FZwar5zoX3noQZXmKypFq6eTRvjqw1CZHic9EFm9G4YyPsNADw75EZ1sb",
  "key24": "3mMVGftDNp3E9cx7gpdXpSLgxhXkMuwdQkx4rjBHewCD9SE3H37FbzMTCe9ehZwbY5LGDYRAasmsEEygkH1io17N",
  "key25": "48m23obDe7NuJRQBguWES4Bpj7HRjNmXyqk2PwyeaaWLHvT3xPvNwTz2WGkuKK3bWjamXqZf2K2QfNg13HQRcT9r",
  "key26": "3PALb34B9hPNZnY78e7SdBwCeKFku9Ag4SBXLzZZ6Y2dKwTeDbdH2GtKmauLawCXwWiXdGTohi3gdVWNzDRrbHMS",
  "key27": "4VZZQ14v4ESvCqfJVnZR6dEpF6aaKiTKqtMJVRA2uRUijHmbDWJ5XVf6sZSZVPUMp3xMQv9C7uEr1h9pUXGHiVW8",
  "key28": "4uQsXDqtckS84myu7KBSs97393P5W7UinTMkfwbazzTYiibAuzTpacQJpB4XghGiozBbjsKoZirPvAnK7ma2j7Sh",
  "key29": "2FTjJX5xrtzqT6k6t4NKbTMuhXwanRvkGei2ZXAq87K97xUsAXsTPgiiMCniYZtm18kwiH9FpFSSVejFjwjNYNbM",
  "key30": "64fV4KabXQbiywzP94PQaPxKi8TvQEneFJMzuAskGYMganQ9pr3a3fhgHbHBhW7WqXvW12VGshMvexPkikN2ZBKb",
  "key31": "4eFCHeVwtMJXmA69NyRNdKtmb9hLjzsz5D1G1KWketVxWmGcZ32UuUh8fodvDyEVw8xiceVLSfcpeqsgVrbgftWD",
  "key32": "5S6awWyze53Ct9wRSEuYXXy1STbyxyJb4ia7DEa1HTWGzFYgmtpsYKQCcn2mPUj5yf3oQJo9p5QzpN6ffHXi9xTt",
  "key33": "V3gQQp3pG3DoNetYidV1KNDP21hUSZcPXitnThs6CKWcN9eosXmX2rBxCj8Hshj96biR9nepM15pWNZiPduVMCk",
  "key34": "5vNkxHsDYN4Qfce5yh4UabezMcJppbWA7wUPp72HZTeWoUdbonPubnYoKRY8Xn4KdWh62rpYY8iRKLaHHgCkN9LG",
  "key35": "2MGLHuwTdSWoB43SEtF4r6TQyeRhtiruK533xDHyxVkhp5xRiEGNwPwgVe54c56mEPE2S7WQdeXTFznBJRG7qew9",
  "key36": "4oaBTdw89FizsJPw3LNQ7gC6nCaUh5ebBURUYPSf5JXadA1fDqEJ59nKzR7G3zPJWJpJHXgiRf2U4CeNXeoVX1xE",
  "key37": "2bbCdmuRroCrRXvrYe7VqoJfZimv63oUZ8WP4WqqamjTPKrnCf9tYttWnr1LnArUquSmAnkG7Uv8ziWi7vgyMyQf",
  "key38": "3exY8TWCYRWHY3jadbzd4VZfojPAJsbwdQ2o6fuUBacHnRVmXDmXgkghyNfVGPYHa2CDK6CQKCQZT6qQ1t4AUPyW"
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
