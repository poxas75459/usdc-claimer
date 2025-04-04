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
    "2MBvYjSKSY4vqEZJXizirDaVPgbWtkneHLbgQvZeuHKJLE4X8kAwzviPmYNbkzkExqjwoiWSf8HRLGHXiwg2W2gM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29TeWA7jbdFnvCahmDcSjEPH4SgFboi1UNUbyLMJRjMbkAsoof7C2uTsyGLvjM6x1V3bxfeKKhVCLr25GiNaMyXA",
  "key1": "4BACdip3uUH8E8CdEwwCZokZJYQFYpBj8vVuCUWz9YcB321xq4Y9pK9vTx7fWKwQPUJjjvNVU7GgAr3SvFm2XQoT",
  "key2": "5ZZEgiR7ZkLJXd6XLPf1pQTj49NrKuDWLaRTFMnLwwjRGz6f5a3NfTtVvXPaniRqsk4pT8USMBd1ye5srFG7nqDj",
  "key3": "5HNennWXfd4jdansak9AUQSxcAqxgBUjJCEosrfYKfawNww2ePoJZSVRj5oiAtZ1Y39TrBvEX6C3GLe3rpnGd5T1",
  "key4": "4rsZwHoWD87tG3v51Q8h2zRQk1unBsVnaJwGDB3tUh6HuubdDKbY7RMBZ4BYBdjKMV6mEDo8gD25PJY3C6p6oh4D",
  "key5": "51tQg5uguthx8WyfcR8YNg8mEwws9gqpv5e2bWjczk3PLyDUoK6uq2B4zPvSnTyVgq4Rcjh7PCtNwpbsqRc7Kqc4",
  "key6": "5zqTmZxPNgJN4sxRTkmbAwwpxTwEmRny4Nh945NJW36Qg4L2xWhkKBAYe2X2FpXgMzoqFC4gAuXq1R5UdoB2iqq1",
  "key7": "28WfrzBX2B9Awue9F5qwt3MuoNJPseagLJFaTLkZtviEyyY3yfmqCXHaE2yyhkvyuEEEJZBSxMgkabBi8c7NqbqW",
  "key8": "5nwAznVYEsAseRaRwseW49GKp68qx7hFUSZRjkHd5do6gANrbmJ4hXKA2mTnc1xYuemea6ruTVantpRXKTZbUpqT",
  "key9": "5t3F4RFSX9bJUKtfHNnwVpCbfg7u3fBSry261i34y5rgYwoXv5gzvMLqNDGDn2Pysvz9oEcKPm2BJby2Gx9RotPj",
  "key10": "3heUB98xfqzDmbUpajM1A4JLHfXE2EansUbqoC84tJngJQUrQpaSbruU97ecih8q5jDk8NzDWzjqApXdDqRZuwx1",
  "key11": "4y6Yax4x4v5eDiHLBjRMaJ1Tshq3Qbqcrtc4twKANbiKyWNMFzBiYTzrS4qqTuTf1RSfogbDbKAgchaYJ6Qo9zwH",
  "key12": "4Fo3agT9ZyEPhMQUoUVA1az9AVgNQP2ep5RWpdo4TPZZSZqBHJfQ9hM9hPjRNgGc4B1uqsJYzzeasv9torEvHMue",
  "key13": "VTwT8Et5UsnfR5CsbpGXp4zzKkB1wfnZZyKdtMHE7HARmvqAGPrK4gWsExuM6xmcW1yD817TAiggJLAQTzsu1Z2",
  "key14": "5N1d7UgFQAd8WYsWg7kt4vE6x2sEhwia38aVJ5U1JFwQdtBMrTukYjLEq4cFpVvZ7XgYXFfpgAHmVABREctPrAYL",
  "key15": "3wPjgNGFX5GPLgCVn1mTDt1nDiKjEfSukBkvx1U5vq7mquyQNTxaLCtRUfX8szx5mBq7SyxidAUncL1twCjER5mM",
  "key16": "5ZBejHGRjCN9c2BvkHTSvW9T2Z7EDcXkEf487g1gcuXWWLzb4QQFLTejLUmPiNyhTdVaTdo7yrP3LPPTLZPgHsjp",
  "key17": "YWsYwifrTUKkGG35HsNZvrEps2vPfesGArAoq3Wq6eTyC6xhJJ6zidWohbnf9krNkqsPzQyK14oSFAeZn5cbjt3",
  "key18": "3csgDixrkghDuu2bFLtuxMgrkGF9jrVXPRdpseGPTKbecrM8SMCUho9TWc1NXhUjR3H2MU7GzcYARv2uDfq23fcw",
  "key19": "KeNoghFV6M5s7x8ueiMhkXoeBTFEB1Raec7iipbWR4GDKKqa8F2o31GwCV7PgTD8VxxJVxjTyjSGiTbnA5RgJ3R",
  "key20": "4arrYgCDkdix7mmKt5UYRgV5zAjTfgk8BCZhCoUfpRgK37wF5ucz3YDbj5PF8ao9VLTyGtaVBPnmgJcAjfZSyzyi",
  "key21": "HmmDeqVCze5oQMAMcyjsN7F8WUiiyjC6BMR4KJnAXEJSq9sqoyJYxqkRzadoAu1HJa2rARdTQikVnZKzzYRqb6j",
  "key22": "2NZhppewpWn3RXTycCtJ92EM1ZDpo7NAwqbg2dXeYfQKbTwv59xvxNGpFKWKNDvDTrmUcxE5b7YtiY1K8xxsjijS",
  "key23": "4YhcTZtTvFAJUPgh2xCiX8gsQPoC34gA5K7oE5uHr6hsKRvhcynjQt3UG7w6EfmiUXbhFtKkY2WbmEADU7r3QT4B",
  "key24": "5EnjvVToYa5VWqmgiFvKrQbVxYU6UocE9a52vMe7cvFgdTnPFkYPabfLj6Q7KmY1xN4Fjh4JF5CS3nwzGZV42799",
  "key25": "2ECsdUS4gWkwqycro6Drjt4Txrw5ZkKciphT9NhqmdbCttLHJ8dXRVHKcPJkRgwf7nnTS5YDyvqpq5iRdYrG9mFF",
  "key26": "2dsGxSDVDc6AeXeNUXGLZd2J3jpWSyHPVYLtRrSRpXLo7wXBspEGmmZXpV3KL6hBBr4s8sbsWdNQpFhp9YUV4rYM",
  "key27": "3j3XKN63xGXwYvrrL6bZM7B6QAynBLAeuc93MoESwbsDbDLViU4MV78iHRtCbXNFyuWsmBqySywRbXgrdAvkh1DS",
  "key28": "3bdbBnUQcoa2LVoQwVRmcn85h6BEaHbACRNKmzvYYPZzas4p9xGXSHtCZ1EVbstnzwvrkYVzQ9sQ5WKt54BDY2Ls",
  "key29": "2CJXuFqN1ehyWPwrewRdqmFTqnWZeyteqQK415ocZsHFyydC2PCNGEzZVQq48WhNTQStQTukSpssmsAQtzuCfQJ9",
  "key30": "2NfeKAErQftZb7XjVGvCqBsEV82tbResosguH9uPuTvDbmwPxsYZ8QXKJDsJaMoLZmpGPgQ24YzbYQC91SGa3EnW",
  "key31": "3oESW3e5qMounsUnaZ61GXZkYcunacYY8UEn1hSvoLBfCjnLru8vymc5892fNvuCjkHdmGVXCgnJn5L3rWbyVGfb",
  "key32": "vEeiXVvPeJY4PPFc1S4KCUFq4BZVJU7x8bnTKBEtJDuWHd4xgGQoQX7sWywzPsF8r2W8pfj6akjieCfLFm9CBfo",
  "key33": "2T5xgHefdghCRCHsx574Na7uxurzFxvd61hDGajrzywFXxKm7oQeSKTjJ4zvtHSnptcfMQxzeMKyEP1b1yFZURzn",
  "key34": "3HicHEa7ganUXsYRshzLD9TMt8xdbCRsesNBq6h14dchShv8rnq664JMxBzttpNvGMn5HwZAL8DNaMM3oRBpj6eD",
  "key35": "5ES9dZHcCNcWK7qthAfVr5bHsKEJ7PhFr6eHXQTsjTFpZNFJNFVqMLhXpkabtqnndTMMTyUkJmELggbgcR8xy3Kp",
  "key36": "3PBvd6DpHShRPsSxgo9vKKfYPMr9TeaVLuELoe48rJH4hrS5pXbZgzsnZwwLoW4hdKiJ3oJhd29HSSh4uqP15sKh",
  "key37": "2oUcPcUbD5vbVqLfUYtMvTFLt4rsizyBD43WySKBdDxm6iiphz2YrarPeB9HhWDnaUn7XgaVv16xyinNnYycBEPN",
  "key38": "5STecwDG1nUcLFPDDpSHbQbEuz4nwmrtAWbrVKbnGBwKc4joa2xARKCWyPrd8ync4GhWgLVdRQbNYwV5hKQjZynn",
  "key39": "3X9EbBayrFqkbuzAdzRcktRRj9pwRb5TgTSX8SRNtF51Sox8PU2Jcrp7PwEvRQPU6PM36nghtZM6TX7C5bShXCNh",
  "key40": "c3x95sSgt11VnYvTQGCBhYi6wr9DUDkxwjaKJpViYLH397RTinHiJ9AFuuzcebUT2sTF8F4xixc1fEVcWET4CdC"
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
