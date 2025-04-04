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
    "5vtF65jSXTU7iDzbvdHDpmv7qXaWW2aA7gSnPYw3tQ9pMcjzRjwEaf2HBjvHrGgqgPihu6oRAR748HU34NNQ5aYw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mxUvZAAkrJWiRmoC2kWLzfMMXqZTzncYLNfS8RW7hN1T3eiUVARugNoPynRenPZtX8T9F32v5DEqkN6MAYkm871",
  "key1": "3GyT5VN2VvStQEojEsia8qjDycv819ZdnsHUwqkoCMZo2SLLwLE7BfDVHdmVmjXRq1CNYYgPEPFDUmhVVPcCaHGF",
  "key2": "5MNUc4niNBbKNHDB3FmfSz2A3sVKBV5S67vrPLsCDHLYMfcg7p7Szwvbd4WDUJ75YWNiJ7oS7NjFaKsqdm2ntgbo",
  "key3": "3YJUayYnCNAmMchaYhfGsfGyHiCexWYm4FtjffTA2yvVtiisECpBkm3K4pexbJYxptJg8YYd8uLfHskEojt2xLSe",
  "key4": "59cwa9oG16UQ6d5CGhpoyo4pkDkw9dkAp86K98o1wcLdKAhSmE8cbGS5vABd5hmnohy7TJM8AkYwQuwTKMbjtVtd",
  "key5": "4bkJ716kWY2MKZD2dj26BvgkyAqwVo14LwEe3cX5pDrsHUMf2ySJbKiJcnWPUQryjG2cQQEUnovahXS53BV1niVU",
  "key6": "3UzLMLNCFxQVgaUZ2svfYuE1XMns2fb3VdTdGAANHiZUSKv9n3kkC8oEHtZTahS4PwTKHksx6fyEm77zyA7b7wa5",
  "key7": "4MFwDL4uNg3eGBgJvQtMbLohV6MoYRStu1dHgWLYKeBzVXX1GtTTvnjNPdAAA1VXwMNrPiy5WfXXzifTsQVvtabJ",
  "key8": "4buKPVYmkYfB3de727qVaRTWcmymSUpr7mDYRWshC7TzqedJCoaCXiW4PvbjbpFrdqXRfYrm6vBZ2fET5kNQu8P2",
  "key9": "2YZ15PLyH1WZUC4UStRmn6So2vG9hcNtfoGUwraVUA8VjzdPeXih6bmaCQdvismibt88GfT4ywPH6YATW6sRESsn",
  "key10": "KnDc7hvSn3bP2e3nZhyHXF6KXJvo3QPdrDh215qrXEWXkfnfQ1oVYa7tNU6C1jsd59YZry16nRhYPWsext9n7Ud",
  "key11": "23REpEuRFsR9tp2tVMYHA9HXppb1ZDeT3y8yc3aDQeDnWrd9qZ2PXD7seNVooJowoYk5bfU6pNjT5Jkx65snpwBh",
  "key12": "5pBFJNVxr6vVfi979jA17DG9YbynaFATiWPvYuqoPU65nqTdhhs1eEsoBWpt7XwZXPkyNgaegBt5a7eKhJHFefSR",
  "key13": "oNQmdWVJF99tbBHWjsGdS33kxR6ZrL4KTkYxCEnPrj7NtpPY8wM7HLj59nZAP5rCk2zW13GTHN1Kk1zwUjJXyjC",
  "key14": "21JxyMo6FMooYxLjS1KBDQVSmqphrsxREuY1Ft5tBkcUtKV47r2Nwg1U28bWkMYeQ7n56aMkZNaQydUEMaT4os49",
  "key15": "5HAnXVKPd8wotwdL2UwarJ51cVy4WoKKueTX89Gj2im2jnGfUzfrvPqzw5s3ASUPGh5jr5PQf3Uxbpx6huGxRkzE",
  "key16": "5YSVyZNcxDVJcAuWfHAVnGvvnXenJfRbrFb3JYMUKtbW8foq9Cw17hfMu8msoPQQUScMxJapbtzTmnkw8ntBtpG3",
  "key17": "4Xa5VapTwwKtwXj37M8zokRYLexpxhVMYWQV3YvRG8iDioWLTT7i9FUsWCDpDTwYTDuRsqA9vKYrtj1QtgvvAMj1",
  "key18": "5ECYKR71Vg68NbkCS5ZFbAgyWm5rUwTuKnoTWSrSAwxj9B9uLJbj46ZNLn3xSkzb4Ejy5PoTWNRm55UFNYhLGWBs",
  "key19": "Yyrf6fonKYLDYcmAm2S3aw9uJet2qUtuvjbDSkxAfvZQ65fpjmTq3NG9mYejsMfxdzVALRS6F9NvaMS8mVde6j6",
  "key20": "23nx2eVvN2x9rHxvMb7i4Ni755xwRFd4yTtTQMfSbHmehXKoVm4YrBeMdZh2dApD12fG9uKNpLs91po9oYxjkh2t",
  "key21": "QpVbdFZexvtjzY8k6VFUp3Gf2pbJtNsiNURhnJyCxCRa9SWU1N85DDj7FVqr4t9uQWymHongzJgYCnBqmte3PMc",
  "key22": "5BcVhGbHdNoGLFCbSdV59hAuYdPmttfPPR8q5CZkw6syG17Tfp4WwqSrzvo1Nw7pHooAwJyfi8NxZRwxwBzPZFeS",
  "key23": "2rrBkWFbzEbygCRwjgk8B6GqvhVF1WnduFM9aT9a3ZZzAHfMbS5tmHaMLuHC8HvgHQUbjDLkF1R1v3sZfFygCCo8",
  "key24": "X6EVeXFwybYh29pxrK74VfkxsUzmJafZnpbiB2LFYuMzSx3SVpSLJWYtJLVCwG3rFyowH8PV5Q8ZiLwFiLbhvir",
  "key25": "34USMyrBMrwLZfkLyQbHw46Cx3Zo5yeoaeo6CQkM332dUYYMVj7pMFE1PEmc5sY2x27wYqmBtNsfuWCtayES4bvQ",
  "key26": "48vjjJ1sSqEpwf3NFFcafXxxmVsqiqLkEip3RFRjL5HnapDKEZHc3kT1auWQVj3BW4pW5XhQezxhNnN8feEnRiCp",
  "key27": "odtj6rzDXybRnD4WG68YEzoMBdPoqPZgfA3H1JxtEiwh3r1NRXtB3us6GsgVqvRpb3Em46EiD1UoUJo34jH3AHX",
  "key28": "4Kf4hbTWDpahYvCQh8avLsD2WzCydGRHLY3eGh2YYUNh4iXw7SNMfHUeMqgp6goAWh7JKDz8Y9J27L8yar7QAhEz",
  "key29": "2NiSLBCC5czUDwJoxJSpZT3VGAKPAxg6J2T9QomgsgP9SvuSQggdRcDvio23PpzXf7YWRkeKWaPmz4dCvPtZ2JzA",
  "key30": "pCbpwK2mscYkhM6oQDnwZ3DtiuH7q8yKtXgvcjhnqxT7QjTB5doEP4tAou2LQcmgatBeodeGvtMJNQdgGx5eUZe",
  "key31": "UEkg1NwhiToyoy3pRASrY2H2jq8udWnZYVbftvZXgpRShrjjjC1qowmSTsHujHSx5UkZhYxA1UQtLJWPFQpd67f",
  "key32": "3cvJkSDu4NA6EVMQKWpwYzzWWk2SiDLzmrg6fvZyY6pTAzX3wTHQjQiUk76DAo5HQDoTpbEeGpmUnGrerCCXpci7"
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
