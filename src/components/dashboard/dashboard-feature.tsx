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
    "2XuQrjR7UzL9YLaTawm7CiAmuBHxbZSVsASfddjsQkJzhLRVCvpNvkpZBywoF7C7xXB8ydWJYAcUsabb6zs5iq8F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U5fXWKaDE43oSd83aPwoY41ef8Pt3SmXTWnDKAWXMyYuUg4WFVHUht57Ez96dWqeaCgEdhjubcToVCTtnNDZ7u9",
  "key1": "3qTBLqLPAcKFVC8uX7encriFbRdHtf6antjoaQbRS5ZpWgKXuExMJ9W1C3WE8Upzdzy2mCTspJYWXpmKmEZ3YxHi",
  "key2": "4od1d8Kmo5NBoepMyY4AhssVS9wR1bFsBhFXUr8Rzh4F7Ns7YndcnUeKBx8VGhXXtBjqPDcdx7x2XsyRXZt3nQJa",
  "key3": "2hLiPqD92e38X1eRFEtL6ATqcXRRH7G5EtuFuVjWDJqmxD5muERS5C1frkfBrqAip4rJa5dVZGLeBDGV3zZB1QKi",
  "key4": "5ZfXhhoEWAk5X88p3AtrWpkAaf8MHkkN4qrLNqm12Fis9ZqjYnMGo5vGQ8G1dj3eCshQtgwLaigHEC2fsFLFHKcU",
  "key5": "3Ha9gAnetQG7VA7kHMgKwdJaT47mgVKUFJ4oSvrHy6L4556aiki1p5bir5Ls5W7aLNeM441ArNYknNbqqYrmE93Y",
  "key6": "36d2wMPWdV4ipCMY3FnVb6gtZ8eWSte7C32dH69jNUKNrunTiYo8q197STwTU56EQckeWxDLQzcyHirfzmvjXhba",
  "key7": "oHVmvP8Yhyc8tEe1c1RyyxB9fDTdFMMZnP1eTGAjujtAnyCrdPQNyoKtPSGQhNWgsS7pXbEK5BxVq3JiXqtFBC1",
  "key8": "3bL1EKwGA4DryGcbs6qRLQLo83FWCsEE6r61ysRBDvgifyW8MD89bv6cSWC85vJcGeZKZUtedvT5amrcdM2mR1eu",
  "key9": "o5Px7kCnnK1b87kbuxPnihbVijqo2b1dYFZJUXbFbzGNai7gJBVArBrXEq3FmvYkzPc7hcyJH5ZRm3J8fh1AqX9",
  "key10": "2PZy2TPVHuPsLptEojg5ohFEoQgeTKq1ixDSe8ek5pYypJ5kEKTX98nxNmvBzWtH4fiW7d8XNWGrPDpSvudXHD1d",
  "key11": "5jDBz4tBhY5mzhfccTS3gHRSJDJ8XfTvm3NrXMajcjqCitC1hEu2UpqHW5ek6izZQ1R4Ae2WZCsnMpB3yhjdJBnJ",
  "key12": "5dqHf4Zm6zgAgQp99jQzRiyVXGBwefrDUnkUUjgCrVu4zcPWQS7o18iGEvhe5ZLRozqWQtvryVNCTSyh2U1iAdHu",
  "key13": "5CMeJaYo5sgtqintTHogqzKFDR1tVwWcT1dXYpGx5S8fDAysjycCoPbUNcnd3Gnyv1qcaZeroUq1Sz61DwyATMcf",
  "key14": "5Akm9JpyZjn8wyGQFqwhdB1T8YTJTT8raLRsaRkCMp6ePBokM5dapbuxT5tzXEc49QBHXMXec1SVUC9PYaK68Hpr",
  "key15": "3taeFpo9xfFs7MsG8b5kboRc3oeTyZMjyL1mMfZFss5xaqQNyWHXd6MA6Tzcbz6J1hfWQ5CCY7ZMJEYrvMZfhY9N",
  "key16": "yBvUpW8aKifExYCjFxv67Uj5DBLbPcxjgbBMf2qCoQkXpRessrYsbv4vdNpdtHsEdeVBEbs1h3FM6FjjzGB99ER",
  "key17": "3pKG5m754C7c1HBq2gsDueVvcAZe51Lm3VbNiMZLGW4USPqqBH7wV4v2KnTMdB6WKC1WDugMVifu4B49E8WRYH4k",
  "key18": "2NCvnvttFcGdzC5FrpiBxSQSDRxjVmhDazjwaoeA3a94VCGE3Nzu8asg2HZhLrf7pVwu8b2RKEbHUWYk1BqmQ8qx",
  "key19": "4RwaE6a2DYV6eNZoBGR8grhR5fVbjSgMVG8NTzwWfcnkXPm1yxLdyKrGm9ZQqdN3uXE8n42aT6YPcoYEUU4XGxoS",
  "key20": "3ccxqgyqa3L7XdzP6Gh4gaLYEsMb6A9KCUssytnm2caTfc2jFo7bXJsTqmSHiHfqA6Xsne2hQromaQxLD74DhZzQ",
  "key21": "2ZqEHa841WKxG76Dcfc9jstnWQzJeEFGnxNxXAJ18WwSwVq59CUjsbmHMfjVCb5D4CDuHBDtG1WS7piVVe4mNNMP",
  "key22": "64eJyXDBM6LFNYgKQe32S2w1kcnvPFiijM3ak52gkx3K36P3x7rFCAZTyVbGiUho7hhpnbsvnyZ6w33QQJ9ifCtT",
  "key23": "5YKynwGMnHgEXnMSMEz7YiHUBoqqGw19etJ2dDqG5DLqs5AFD8nyBbJfyMZsHt9WLVuXiND2oShi52J98oFgC8rv",
  "key24": "2qCF7V5Fu3UtweYwvKMKwaWp9PV1meymtctUtoeyVmrmGF4iUCTzKL7U4FCwMKMqAL61B4xPRzBM6NgFkf77sMGb",
  "key25": "4Hd8LXGX4f68Xw1bFpTcorhX47Q58CiFzFMM8fkD442NP6JD1GA8vYHocxUgTWjSNWAhkRHrCaC8fGJz7QuXD1xs",
  "key26": "hnW5WkcQC6gYBX6n1RGKBhfJMzc7bbthHoAzNny3Ki9FxnfKA1Lcd1wrnqKv2wUQpCWCnUFxWEft9hXbzactuz2",
  "key27": "37zAKDiVHu6AqySmzk12rCx2VSu6cZRVGxsvqQQ7MqqxpWMh6vFMDx4g46UDMW7jZCEcfzbP7tgFCrnN1t4TGgLg",
  "key28": "3VXnPx7TsuKk12h6p3zxR11kB3Qme8N2u77Z1szvNYCqEZzMb77Yra4CBwfbk7v2uxctRnTB83AvyriGFMLGx4Hu",
  "key29": "2r6jTbuRi65eBK2eroryLVro3eMFvUXxPUhMQBbp6DgyPmyhsLsqjKFSHMcfdcWvmGUbVeRfg3JycjhnQ7fmJbvd",
  "key30": "9CD4ZuEuA9Hk48oqAzj5rbtCaHPRxpVGtkASrqENUJacVAzUjmKkPnQxGXdqiN63LUYNAwhS7wuaitiRqeNULur",
  "key31": "5vCyw2BZdNutJxAemwJhwMSEW6BnWkDDQqT1DiPVccRGGuEAmA2Xbt1uKyByunc362RgQQ35Fg4gC2KVsfDBg8Tr",
  "key32": "G55999NNmxj9Pgf35yo6hfXPEVHb3mByqemVS3NpnCFVqA6VZAaAvtPqhPwDRGj2wqgCU9Se7bnedNTx8Q9EE4X",
  "key33": "4kpNWTY8ELTRwrXPnBdM753B5oM2rGZ6hwJcBmSZYe7295oTuLVvedz1AZxMyn6yn2ti5GnTKzi41X2cBsxBBkGu",
  "key34": "fmt8ic1i7ZJGjEdnpW6wnW6d7bEuw6sLaB5BcU78SH5kWXcNTvuQd6WdTQhCLyhM35BVAx1p4QJg1sBpEefZFqE",
  "key35": "4KEER622JSgZ1bJ95qF9GeAbDwxLVgW6yvXmoRhFkqS4k5d95uEEXmMJyTmy8UwGT3xQWVUJajnrbmjarjJwyJPt",
  "key36": "3B1TetD7jRdugLdHaGXhTgGkEEyHVn9kxqiHUhbB6shR6VV6YanFV1iLEiNB7FauRRhqzPMNtY7sw3A5QHvZ5fwY",
  "key37": "3GYd91u4BJ5KJJN8nAxPYEym6yn11QCBEy6EqTizNmbudHvBHG3ArFc2w5pwaNWrfz2V12PzVj1Kj5iHLRcAGxTJ",
  "key38": "5GUCNxYSfQ4W3V3qzno6q573Q2x4A5Lwc7rhCLCVJE5KdDyFMdTEhEKWQEcg8FRC8iJMStJnempnKV49ACQbsQGL",
  "key39": "hDGw8UHCLbkFAhwwtGjX83PK3FtRB85yArg8gFC2dJ3jKHF2q2UKb9sFkiQWxKU5fJsXxaApPdg44bDxJRjBcnG",
  "key40": "3Nqc7h3ZWiFsnr29kfaXaZmTg8F5tsXSi1g9998poSsWYtcCsvPqmBM6jjbxbMZjH1FvQphGFqZSyRYoh72MgDq4",
  "key41": "3LR2uusPSXqjAkbtP5gftpQGnzbL2qaD4CvhmUzskBnEL7ZPMfquxFiGKR1dfx5zZ9W1r5gKokTN9K21KtRAYRFq",
  "key42": "3CwrXrcCeeMDvxPb9mqxkhQXwcMrWgPY1FCM8Eq8bMfgygFKAr9Bj9TTjvrQ2CQR1UijZbySVLkX9Scemx7Z2hMo"
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
