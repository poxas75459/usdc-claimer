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
    "5CWfPDokpqKMEz1i9U7r4saVCSs9hohdUVrRjTvEL9JvnWsKn99q4uULAqTuczf6dSzRv5ALz2eE1iK6RjfhwpCX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2npCsTYUENxmHzB79L7rh7zAzj7WCQ87Zu3ib5nwdTJstSD1vkyCPhR2HTzS2nNmMqCmduHZPTPfAmknyt4bmRLV",
  "key1": "5qdPr86H46N8pFFQYqUVJDVK5FJ7Axx21UvKAT2aQCAvaYt1otgfd2LBmTs9hVAQ5ZL9wSvE6YqspnPNV4SvztJn",
  "key2": "5vbeEDiFfwY9mGicFuuV5zBxqH8LNijx7NJ3NCga74vnZbWgR4zTRNi9uJYvaLnTzPHiffERbxrFyb2ogr9JLf6y",
  "key3": "Pxi93LNh9uunMjyyFi93b4mvwgaeavxhTTFzMAHf66w8GTepux8D3hzF7EceLJo1mXW7MY6nnFboy8t4nqQgFRg",
  "key4": "rthf2VTLHJtmuJRaTejSaiQpb1CFPc32zq8XoW45qAD9Pzcq1C22z1WeCa2WYacxmfFW5AgyZ53vcrNs98MNZ2V",
  "key5": "51S3Uyd6RHm7xWoyrxK2PVBzDVfpqGU6YoMFdnq9mWyaAzXbUDCvM126cfkxNkm9qaqhCrjBujCJv1dYCvQ3fqBa",
  "key6": "AKfr7qsjthemgZJZ1kiBDoT1PfrjTbM8MR9wyEcZtxomx8QxXE7fmHdv91LMgJSyuuYE7yS4ieVY3KiJLHyeyC2",
  "key7": "HzTXvhgWh8PvTwtaVkSmeXR3vPnS1hsaqJ5kBKGvmJDbqXYis7fXUqucW1GraAMx62mWiYmcwQ23zXt2tmAFVeq",
  "key8": "42m8KK7x5a9TfPYFCWH8ajjaJ74PRYJTsyUXBUDjYvURa3eb1kqQiFmxyRAYTva2YFAe3D1Z86JG67Hkewj5F9Qj",
  "key9": "22kgcXeYHUvBUQPbyXW83FR2opSNaAYCodF1LdgScnhKnShiktonaHKhTbTeMsxPC9ju4jrV1KByLUhEVUmDSr4A",
  "key10": "5f2KKM8fgnqg4nKR9sRPu2XXhvyTrE9vQmMyY1ZLszVXim6TdMeYLTfuAGAJSSDHtjQ61Re5rdMbhpWzN4ccw6s3",
  "key11": "4BMUoCP9GVqRaAJivyFRJKduZLySddckBRr5Jsr8Qqf6QdVhU5ciRVsUMkZAcC6qVZADRCk8WbFnzJwbEUWzhtJ5",
  "key12": "66qj8MbB3jTdc4Ct1sNZKg7rXRjaXWLK89QoAcMDTi32cAiaQkT7YQKG3RBu6JGQzHNtTSwE6nhfwsvhoXfW1a3G",
  "key13": "52vBDeikFbmDjnHPn6KwyBf4mDiqeJC6bP65kMvxpJTRcB9SzjC7JqoCCneCuiUETKV1rCdxUBDVux3u4SPH3iSR",
  "key14": "4QaudxHmKWVjuqFUPz5zQqZuSZJCHhX3atp2teipTxd3m4rrs7YubkYsDteEg8oVyBdcYhRSpuodANnRswZxgnRQ",
  "key15": "65xcn3jwDTgvTjv1ryWapyvBbPsDBzDftYDFC6iXcrFbPykUpsaYQteQbugCL3eGba1M7ED82mTRo9ARkSZb5vHC",
  "key16": "Fy6aaVmLibzDBeeMMxCFyePA7iUrCSihv6fqCAq1Q3srinBnLUyA5axu99hGoZdSAgXgvJhmYZ11e6VMqKEwsjq",
  "key17": "3A9vKfyM4hyR5zfgBwkLrHxrJRnz7eLcakPmnZvBMNRekcQaKvj5B82qVPyX2SewxPzEi5zMLhvv8PSyhiUKNZxA",
  "key18": "4o1eQsKDNpipeUjirERVyY4SwtiL2HFcYRqSm3qiXbNWg97mMD4t99ovuySrcaLmE8VBAjfxNAn7yBEUURq89CNK",
  "key19": "35VCNo1CWh6dJHY8dH8uCySpsQaqT8AQnLxqDnQwuda5f3Xd5wKTtGstEniVb7wBAMZ3E2TjXkowyjGPHsiPeqF4",
  "key20": "49MsrAZb2zTmBgqajiMwmsj99WBxutn4kxVgh4XdCwuAWutuMujr6gDbT2hmHZGrCBAZvdtNkk8KT7ARj6ubvmrN",
  "key21": "4fxGcaJgk1avEVNqR8inGFLj7kLUso8Rw4rbvns7Xb3S9VRTq7yVXNkk7sZkoKPY7iZbx4JxbucCjbxEXpfd5RJv",
  "key22": "4buBYP3UsX9kcDXxmgUnstAh4rAfXwsB2XYikUE7AdtXauzsn5pJUt3oqy533XEzjySruNie5HjZfh92AkHuoZ9a",
  "key23": "5zHJQsTqRTDrFp9gV71NYcBWugPGFwMfJSzv3EGv2mfzgbzYftYNB7GHw5CaBsAUqn9aFkRjr6LFLg1Rj1izy1Rw",
  "key24": "2R34mBxv5cUhvpgAtpajobbRW5CR2vEb6GHiYHjm4fCXT3EfKi3QLM8V1WCqRhh9r12tQtRda12RifS6FGJ7PZm6",
  "key25": "3dkc52KomRG3bx8bNi4rpbtkNVrT66V68iLWG868gUKtcXtq2dbWjTkmD5mvQMpvzRiarspUr8NoaghjhMeiRJvo",
  "key26": "QoXmafKdhgTt6QuBHaLkjtiGaLPEce2GkUWbFY6amYcng5CZKmyNYbKbT2c71EoUmhkE6Jron1FkRnEducMjeRS",
  "key27": "4yJ3p7jqagA34S3pxWG9hUn1reHZZ8oJe92ZsP3fNJURJerjiEoJ4jrHRjvoHk7taAavoPvBRSmsUvVehW9bTbpv",
  "key28": "5jCG4NNYJy2KytSsZW7yKR8F5a64DF5TS3NPTXXi873tWg6vH3pymuTafocFUGU4WuWsHkqfFphNBpYDx5hiTUzj",
  "key29": "3hpz1qx1bzxU6qKroxRES6jPvVe1qrrBGfMrFYRQHzhZN3a93CHVVtB6XNFZrAwSnD5ymNB9VjbuabWYtVDPWjkL",
  "key30": "3H8TuyPV71VwnURKo5ybD223PNvJ5JbGNnaLCukWqCXSB6HDnLnF3TeyMM1yMfxcLiUGFEFacgfkUeJAXJmivQo7",
  "key31": "2haetHbCgx7RAaGdzTW5kmBwNhoHp8BbufrZ18ZLFhYeBRspeD5Lyo8B1gim2H83enu5PdL6u2bfcE4UQF3vFqrD",
  "key32": "idDMDcoxmxT9nKKbQrugndffc9SoY4hTMbYLjtuyXbUzipqm5zfAkRJBeXDsPCDBiw8MQkJRZNFGD1HHJS63Szh",
  "key33": "5aUPSQci1vPPcdKce2P98q8ZsPLGj7stwGLz24NvD7wFXP5EyGBpgtC7Kg5oFNrgXD3uBM6piP6KGnZXkARvPAFW",
  "key34": "4FzozkGbzgBDhY1kH5EdNpPXKkqyVUnuXGGpdJzvxCj49peftfq7Q35V83sskSZXgPteMmWErffu5vpGQknQ8Z7g",
  "key35": "2qMhmueJ8CKXn38p1EDJjrFDnJzGTHcSSSdziSdDodRip14ENxyPjF8wXUtUNpRZXF6F5ufmhWSLYrrqCQukUtdL",
  "key36": "2tGEsUqydmHJntqU77zhhKdokbJc5nDUgsnM1WbtbDTQcmPWopj4eSr8ZRnGShUMdDD6NeTnsVWngywM87QhreG1",
  "key37": "4fEh9ho5qXoPtftgVCePPzqnwnQimiLaFZrPJncivGe7FCHDuP2YGWNfWNNp86kxhrqSjnG5Y3LttoWNL1RRPSLW",
  "key38": "24aUYANZhWNSUyxNNQhZi2qXonS7rQVFUgnHAkboTbrMRf8EanErBu411QWJboqLd3KB23uAVoTUHodkvKaUkAhs",
  "key39": "1doKo73as9cPUrMiyLjzaoJz4tMAESzhdNwzsCeU76k4fdMSrPPGim7yhmxNhh1QUZqmDemqGeKsdRj9CSEvpuS",
  "key40": "4jziijkXAiFokgdXuzwUtpnG93vBLKWiLeRk5NUAuzhzf1UKfmVy2t7AypDNv8aHjsKNy1xzEKvDLnVsfoYWLjBv",
  "key41": "5aMTwmaoAN37YUy8YShLFQKWQSRqRb5XzLqKFqRXqshXQ1WK1RPKLPSVeN8wsTzfXfhDAWmRgtqYXMWdnvsdDwLu",
  "key42": "3RWeqcmSFgvwEE5TAWCVE5BT6LBRjFXEmud7MvXc6hHLXTHPti22pruvC4fxhjnEy4RJm6Ks5qNscAbUshKR1AiB"
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
