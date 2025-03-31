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
    "2GG9mcdVj1imAHXFBnhzNDRxCKsoEo5DwitHYSG1sLZJYiXhGpjUUcQSsbqueeMpm3qr6BSN2ZHrXiTWfbh1uuFy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mpxTfvExENeGzYEhQ65m6sMwfWFf1ne27v5iYLRuEr6YZQQ6X2PbWtNoEPddf8TKFMf1ZrX2juT6vMN3uoyBSX7",
  "key1": "2GQFKdzxTfzZM2mcP2rEFZREE1SqdXUHXmmtnM3g3thnXN9uQZ65PRuAM2EvgRF7KTPWhqAHmtXQsbeWhu2s4jdw",
  "key2": "3nMnZ8n7LKtBmGcdXcsxUHBTYt2C2Y8TZrnw1AorhU41rbVYJwrhrPa5E9myvz2YBCxz7EqmZ7bNLTt7BNozL9od",
  "key3": "2JumcXvy6nEKZvK8jQUXdf5GaMyTWNSKY3nUicn1tLMGKsCJMFpSZc41h5AyL1EuYQ44EnVpHwxn5sRWpKTFpCdX",
  "key4": "4QKGdXmuuek7tSX3brUkLvLDzAp4wTA653Sx1iv93c52sA5GUx4AZi7t3P2X384K6bv3Vjqot2z2xquvnAsDdPPu",
  "key5": "5odphJ1gzjpJ5KCN676mgat1fGtRExzCXGQv1j9MLQL3s8BB7vpoz2zvKvo63ktLty1yzGawELF8Bgbcvfi1vRs1",
  "key6": "WxqfMCjYzaY8REcPRjhinAnL4pe8LFgZ6DgJP1uBnwpdaF3WZMBUaiqpvAfW6fW1jDSTt5WCSB3E9uxmCawfDQa",
  "key7": "2rGKY7GJt42LBxV23cYBC2iQkZVQphUBtpQF8FJyvm6S9La8TyTZpTvnWjEsYUd2Nqw4Mrhg53DrvsKktKSjax3E",
  "key8": "5Si2NUAmPM95mTTwKnXsWt3mi49jhbyU5FpGBh6szi3L2VkXfyc6wwUR2vYHCPTJ33rXpSuCWpSLdSsxJLAR6DX6",
  "key9": "238V3VGYEuZ9CpQCx5PG8UikyeCYYh6t8QWLUR6wyT4T1a8THfYg4yFQgSQfxexvwPjvGGVwcG2fUkEXeTd5JX3U",
  "key10": "4gYMUvGiYQYsPqWkpfsjCJTtFKSssjPa3TwFSKcoXhJyfCok3Jrb4dHVodigkMD665EwDo2GFtHGkqXNMC8ukhSf",
  "key11": "3sZmT7ogt6x2BkJo6GxyQiNEKfYEdDApDx48Vze6TGcnrty97gzguxeEEJZKyAiYxyMtNKLWq3YQsEKiCNs2dTRL",
  "key12": "2GbDuUBJY97m1MzgLgZ5HaxD4fPzNApSP7yVAhey6w78rG9js4Pt8X32vcZmVeyCAWzor6ac4c9q6rLD5jdUR3W5",
  "key13": "C3jmruyePbm2mY7eHJe5jSpXBvsS4MuGy3omZcFbb3z5vnUK7bU2B1Gpb4hMRhmTM9V5jjab4p6LyaHoZv9JXiy",
  "key14": "5K5KAw9AmaN6Cc1s2FEDcwoickgSkB6Cp7cBBbsB52riEFy8w1B8HUWEodE3UFu1GH3z5D5caQkebSiqaLKhbPqE",
  "key15": "BHGJ7QnDBYxhXeCHuG8nr1wMtDwiyWmky7UCYpL7A6923uAfwD1NFaWgyJXwdarPvJBKspcVB2qv8JBKxdgRC54",
  "key16": "5ogwWBecc6DQzGEVsiRgnUFR9WjQAZcxGXvMjBSLbvTUANTsjAoRRQ1rGMDjaQuHrbkYARphgD4YB4krvgrJfcJh",
  "key17": "5Kbd1KGBARZ1AWTQ9faRfGCRjHp7rxmtWrDcbjQ9xfquWyTiTQ547XJCD1VFW3aqauXLRPfJNcHXGMqYRUsmTBxT",
  "key18": "5MiFaSP9YJGWYY7HUmnzauyBhdoiPYPq18No31KMWhesfi8p7igpZ8mrdQJ7mVkgSbmDd9zsm3SVK7RpdCQx71hU",
  "key19": "3pQRKDHGAPhPfzFys4DSSZE3sMcfKqCvmCqFg79T2L2m1jYLcM7GPEVEcWiDPFdHWSxg8dvF956FSTxyoBzH8iJX",
  "key20": "bhfDuezzvhwst1ZrEV2wpBK6HrfYBv7qqSEw7MTAM7vGbsYxDsjjT1cWW8YD23uquXf5UbPhu5wUBy63kYQnPPm",
  "key21": "YLNRm9WrtTexHz5pKPm5dgArxi9H1aq32XhFv8UV6aujRABemcmFxgPmfzvb1FwXj4insjgCg4SdqNQD4ZMrqn7",
  "key22": "51hMsNTMPTYCvWUQQxuqZxfjmCmysEz7CkCD6Jja49NivSdbiaCqEt4q8acjvL6s43FzaNaQ5o6WfrdQZdPYGjWW",
  "key23": "2suXqFL5gYbd4pph6umDozATEDcjk9WH9199spodtVCmevNy9Z73bGf29QjFj9gqFwmgWHsbqiq4MVYKemE6A9Ny",
  "key24": "5ZNzSbxGnUUYRoztWj2st55YwgZeLDWZDsC7TDpmPzNnC9r9JgtFE6kQbNdFtB5Pip5gvhsBHZTcsTNZtBP1cPPk",
  "key25": "xZYqTkVcurkL78jwMPtgNFyk8UY194EwegxRUkLDfNueiDHoGYdUrSUU1FzQ9ZvAA3KotEH49NqNoCvoCHrgebm",
  "key26": "G4y9jGJ86gsXJ899Bw8rQCxFP5iK4yssqw9T1Nr7mBSaSShzH1Mdk78BHpE25Uyo129Bm3RW9WLwdzDuMRyiJjw",
  "key27": "2dvMC158bDUfSdWh9gMKq1AUD1hK9mv9EtKyFVAJa8te8kW6reKWkKLrQvdPtey1xC1mEuyz474K5s27knw3bNZH",
  "key28": "4xeShAgNGzAzLsJRhexj3qGUU4nferd7M3dhkkEK8yJq5HSK6H6nKQUrZSsShErpkzrEPLA5FBYKFDoq1Ddb3Kur",
  "key29": "2JuECRy4S2xqF9qGiPHPYfMVw6pqxFB4A494b4sEXfMj5zUiHwcuugMEeHCCk3SpCiaZrGCQw8LF4ivUUkSL75ZF",
  "key30": "45ATVd39W1JoxTQdzH6Avpag4exCAjHTLnFwWRX3oXeggB6UW41gGb6fKcTDAeuwDixcxEuSP9uLQX2u61wy3Uhb",
  "key31": "62oNFBR8mkqZK336wEJz1w4T17QJznpSoYBSXYKbzg3tiCkwWFs8exX7ay5DtDrG5cZqLKGdTfJHyZThfHFJz1QA",
  "key32": "M598zfqA2L4S3XUY3FLurYSGtCKZzizrb1WBusvtWTgvj6924WSErVSKPWPin1ZFtdo5U3adF6pUuT1E8Jo7kXH",
  "key33": "4yQUUj45pEDkzXmHBLVqEDAiMbhHufpZKmCTCe4E9aKBhZyexME7VFXtnAWZZVxqResUMmipcXrvNK4tgN1TtA5g",
  "key34": "298xWeUvTEDAqbnAu4mbws51yYqzAGX6CKJnF5MeAd41H9PCak85LMrYXZz8xmmdLXrQCnDhPd7Hc4aActhjCMow"
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
