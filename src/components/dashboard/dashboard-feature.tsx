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
    "475kAa4ACvhLnwyaLQC2SjHCy8BZpjqNeLDhkuZi6Rjwgk9jiNtwNwNsdmiJ47N983kbS6CTWcqdaDGu9NM7BvKh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sLz5fAVVm3ectXs9YdxWvEZL6pTK8usow3TWZPQGRnUDYC1h4JE9FxKS3AGkCeQmu9qWuEq2dQpoPcerYMaoa3s",
  "key1": "H7gudwTrRxAsDxDU99HYByyv31yiVkpE8UQuJmEemrWrb8newheu8scoEMHDz9H8m7QamcduK4FPFr93yhuf3y8",
  "key2": "5KYvfbFCpVY5n5wcYtaX8gVNBLHKMMjZx4aaWC5JGiULHcsq26cEQsNJtrVXCbQRzdn6wSua1Ghv9xySiinP5WTq",
  "key3": "3dXaunUXb6Bwt9xktEE9rZ2bWGPjLMK9n95UgWauGmktkoBQeuuVCCAfExv8fBLUZcwSeSEDmHRH44ZxMs7DYLHc",
  "key4": "5bMAjucXkr2c83zAkNisVkouuMr6Wsf7HCKJnZkgtn55dS6LkT22E8Vh1jKptL5bjLssYC41uGVJcn98Y2pGbcYY",
  "key5": "5L72kcWQ1xcBKTYf4tm8fFHoTcTJPvAKKN5yySJUbz4sMeAPxZXE6J3LBDg7vLc8D6EBYrH1t4SCqquK6j8stJxF",
  "key6": "4uvtpmf9XHseEm6teXfvSmGYjo4boGg6xvGAJhQm8nb8V7bhYyzVH6tGsvM24S2zGgsMcDQhDekic3CKxN7jLxsk",
  "key7": "5CHjgCVbupCC42JioxmP193bXqbY4AtBwSgdMZvaMeDwUrAU3CeZKrejXFfpwkmMyc22NNh3LNHzqZk8fh11Ynoa",
  "key8": "56ERWMTkgjrasqHSwqnLkGry2ubcf2L59aToYnE63Nz4ondEo4jspGPZMo5mVRjcrVW953kudtd2dvsdQHsjT7Ge",
  "key9": "47FkBjfALt8MHSRMeNTim7chS6Wc17MVHzak21JVjbTC98ath6XA9RM3YehnFv6cjUBH35C8BkS9pi5gumsnnpHE",
  "key10": "3dAdMeXs5aGUH6wpWRi2SwaPNs2sPoTLU6mKDoFAGrD1sfzJASw4vdTv6WDE4Gime7ADFpskMa64rxanK3susZcp",
  "key11": "3tsW8UGGPZipyrNH8AxnRaV1YWhk2YaANFAgotWMkzRQQ5LZdgTyhkFTQRrV8ELDiQWGtJCvwoCggoAQyjCeKsyt",
  "key12": "3QqirzKLDE5Hf2qBQ2FMrKvGQ4CL2EFG4AroFRzNSUhjo1qWgYSEYjGrCAADwVPmQjuRqATfqW3ddNeF3fa2pxEL",
  "key13": "4YGfN1hqtFqMdGZeQg1KgaAeQPU5jdR4GUpYF1BU2SfAEknANU4TGFCwL6nWK2r8GZrc4LsAwKCesauWMC4sAFDa",
  "key14": "2BEYmyv7aGkaviZc6xPpswXEdZrChTMB4dpWYd6vSivEHRH1HpGKMdcnu4ETQW6F12R7QKvbT8oNsBdyDVZkLTaM",
  "key15": "2tMcERKpLuDAUGQpaQUMhkrY6VeEzDKfRth6EoMHBUJtFv7DS5Y4SQzCBExQXbmrR7QaeTBy2mUYjxN4ntRCSUD3",
  "key16": "3BnKZFsuETtZnHWaUtRXXK56mP1QrupiPk1bRBcW3YX6Ep5DBDg5KMk89ENHsyQnNtTnDtGjxaFtNvVWaYjevW3N",
  "key17": "66LM87SUCCGGB5N5AoBykkSeRmyGVRxeoeV4unn9iEncnRi5hjCdAyPSKXMopQ1ZkxyndwgFcPaWaxwfQGAGe1M7",
  "key18": "Uag1CgJKK3jTiUG8BuAAhD6fjRW5zkMNQ25M19EUoq81aK6629kWUxQK3c2joM46sUdu4fkLgQG6cwzwnSauCtc",
  "key19": "4fWdUNaaiGvPXiHdso8FRc9SVmQuS1iv9xM5f4MY4B9T9YjNXCHRess3YCriRwccCE2nDxvfXscfktLHzz7TjPao",
  "key20": "5C85k2D2c6tu3gBCs3W34PPMmLzTZKY5fAgGhpzEpH5xgCYwVBC9b6KWjKtVDdUCPniWsNT9WjJgPospeSrixAdZ",
  "key21": "58ymu8dYQP648cs2MdTm6zQ2636GBtwTwiyxRPri3tzzxMHdnAEAKCZ1WvJfDufKEn7UASnBZveLWvXWHRzVgrkZ",
  "key22": "4eXHZxgGE1xm4mbaweSVvyxcQiPsMq5HR4m6Nq7YeZs1hmCeHTM4X8pSpP3bZgbakMjCndqQkH5cw3EGpV2stMjS",
  "key23": "4RpVXAPAWRQSgE2CAMgmLjLr4WrgzsVJwMRaj4o6X2ZBeddhYM2b6M8vADsTFbnXGYSsgFwGwV9nbedv9uZ8sh7u",
  "key24": "3CUofyocpYYRyqnUPJqCBvgr2cNjtvdA8g6wDKVVS6mDzcFwHJQmyc9roh2P8THrMCHXfYmZynE3ApsEFpNWAcx5",
  "key25": "56AGV4azMd1Y54umbZnMYnzuwQKq9D6Tqe5J3LxjwVo6CBJXT8BGFLMTR1kwbsYUxff3Yeu1u1iFyuDVsJiLQ9SD",
  "key26": "KiNfScjvKGt77A69wdtFs1na2yBZzsvFLK3B9YPYPxRuCDajZS5PaQ7ZWEJE2RdoZ35fkWpmiUsvutHYfSkY8FA",
  "key27": "62j1yQdmVfUURW1rB12uwmDDiEfRS6z8obBnFnnucH6Rcuz8QkVSD2EAtkQKRTRaF8VcnRWgdhtG6CW7EYkVTndi",
  "key28": "5BJn6didn68maZMDq8uzcfT1wi9EgwayJxjNok85HJpm4zsAVc11XTpmTPHsCPUZ7uaozsR7253j1jVS9uZzBqQS"
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
