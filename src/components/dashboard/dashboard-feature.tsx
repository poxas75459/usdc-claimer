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
    "5oraBs7USD1ooSJop6iPZRsiGkGzkqqLUyQvgizatM55xvJCZ6EsNw9sRi1vSdJ5LN3yNo4TNemZ1ahyBpgjVHdK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JUwhFHmjZRuwvfDMiKXELB5DXTwRKwaRZoC1rVqG3XEEpUSETfmUVWXw74cQLLeKFBHr52qHGPgYHAVgsSNwscK",
  "key1": "5TiwrEZL6ihp4QK1gTPyifJa3X2eW3rWJSWWxL2crACJvmosbfzBeviWz5TM1CYo3rF1SNeatebt7FcTAAePBeci",
  "key2": "ZWmfaPb3yfzDym6kxjGeK3Lxayy9a98c76wnJxMkeMNDGLWk18wi3Rej3L9hA37L9aLRSpPuhd7FfPrF4QSNfUv",
  "key3": "2nnnjRAZqpbK9XK5vZEpMiNtzGnQygJgfgF4p4Kxpf9ANzEjSEgUfEt14PCKULeBsG26v1vENiPHrusUpTmizXb6",
  "key4": "bf8Re7C9kwTDmExYjJWJDdchgJT37VNgKAiD9tJZkx4cqymRq2eg3fkniEd6g9UPZp2S95EBGHwgi1cBvrX9UW2",
  "key5": "3rtmQB9NcWMChpPWNdK5uNvxGirAHZT7Y4SXTpabbzveQy8EKJtgpENiDEs4NSCKy6eC7JwoSyP1nTtRapQU29ph",
  "key6": "2yuRqLdFZMqGoXyY4Ek4ScgEU8u6zjisEq4zoJFX9H811xXN7fvNQqti1nFqtrS3EvukLbayviXEBEWCnZSvG2rP",
  "key7": "57NVfQkoqBP3gAZVRzEr6fAJpCRmu6DWmv6XyFo9NtZHAXm5wMgPjJYs3nCoq2yHXog83JdNTrwMu5UZyD7ibknj",
  "key8": "379WDcAUgiVpV4CU7T2dsrKXzrUk4iAtPx4n2JmeRhw8e9huHfm93e3M5nqEjoFazT6hbtop4nXXEUkQBh7RRSwk",
  "key9": "2B91HgJdP1LRoWkEuEb7ijKyLmPiD65qiGk2cXVZD3xrPBzU3CPrkXEaqGj5kNtQYuPwFFwvMm58f4mZYwXPG2ks",
  "key10": "5EwKcGT38hARcDQ828pFZrA6iCSbLM6whQUsk5kjKLK6mPqse4AsNrJmPs8Ni3ffXEgzXYMHe4sMtTUaud2weeJX",
  "key11": "2ZhUAQDkh49h6QNiEQKoFBzG18D5caSiPttv9rqUKHznmiGtBsMA83G9CKKQqeVPe7RxurtEgmtXLVt5Echiwzgv",
  "key12": "4hoyc83fDYp9rSG2jwqyRSmNGPrH136nX6J3Mp5YzbtY86efaNZXnfyefg8mk346AArwuz153MWfz6U1ZZ7hRMbT",
  "key13": "44VXT839ACceg96j6dUDhiKhemm9ztZQfQdXWhka8ms4PYG3vTNrrkJvJCRGu3NkdXGKfP6vegQVNB91Tm5RFMuh",
  "key14": "5EeoRGESeiDDVkitnt2ejCmDVv61Vo5FBoKjRsaKzGcMh2KR34PhVxTvaPHFecgrQpfsVkZsoXYWjfuAUiYJsdeD",
  "key15": "4RSLDWkizpjJkN9Fi9y7Xc6mmpQ69q3VvHuD2RsAxa7keSCwNzVAGZsAzxavpWVYaosB9oigKia9cLqF2hmk8d4w",
  "key16": "3UmnY58dKztbDPWxAYeQSCmtdPaSyMNtxZyoY7ocHSVW3Hj637JN4KjkXU1AqJZygs6UD7K2CcZGqX3UPKa7GvfC",
  "key17": "36jqRamzHooRzxq74ZmovKbnTZXCbBR6x7RXFLuzsgkfVA3NkoDz6r8VPNjwkKVJtgjhbPoaQgNLGFuQMbw6gtKp",
  "key18": "51iGnHWcUKx57ruRD1ySe4EWEA96UT1NSJH3FLeGcyckarWCUsvnqLCzn8jYaX4pX1bR8cGHD3q5qkjxyaBuiTVC",
  "key19": "2YteJG9bo1MLb2NGF8yF9UXHN2cyr9CzE8QW9zBmFbk9mp32ZZ4svdszzdBAj7oGXYQi1joLQ72xs8uhVyE9Gqnb",
  "key20": "5srrm2PFx38CRqQ69Y9QP5wDSZey2m7TvRmA5m11hqbRvDc8ue43z4JqNf57p16VdDiKr6wjUcx3zF4kJjdYgKYg",
  "key21": "4fEpxoeHp2kCVYqAUVf4JB4gg5T7mXNqi1cD4dYEmeCdDKjtJGubMBwntpFoQixD8vAAqnJdvrJKQTVoySMLZEYx",
  "key22": "4ZksXeJfkzN8GAX85Wkzs8fSxvcTChBdgCU2YBnpB9VLthUoWA8AhZHViUJXvoxVCDiG1y5LqifLwwqF4eKinV7e",
  "key23": "2oDs3s4nib9eqSbxFDtq9zSGhZQBPqtxYiUMS5U8PHScR2LHG7ez3sx8AxKgdmsaZLFMh94ZpNmte9AkWScjUBdy",
  "key24": "4tBTA6Ztvyn28Ybmsf5iQqLPriwKjG321AxeioXr6SAdZD2zvLVt8ARLWncgVAuW3KLbQ732mbPSqzmccrE4yc5d",
  "key25": "31niHrRHQCLtZa4taVT5RLCCpRpH58uaLf7Xhh7cVYCPNNzJwcwSNLrmhtV6ModhTmo5oLQkAL69xm9rS2muE4VL",
  "key26": "4U7P29J3bnkgToZo2312X8GTemonMPVANqBLFqw1x2txuJoTRpWUhMHx8qvspGhtELN7Yrx7a67JG2eKadiwJsJ9",
  "key27": "3SYJaAAGxptsnEe1Bb8Ts9AoKcmKP7rabPqwPE4GH2xWrd9J7gwuGq17aGUoPcSBXruEMGnzC8v16MSRAF616n1Q",
  "key28": "2oVYD6czmvthqc571c72riU1KXDACfgSSXyHq78mqPSPri4Pi77aGxnzy6XiPxjdJtz8ZBciD23LgdsCKGXWPNLJ",
  "key29": "5eT4C56EwKoNVcUrvXwUaKEkDs4JwHNCXNwyocqX1Tt61GQHbhR7jwUKC6vGeKGoAU9RgG6CWmUMSjmhmW2jxUCF",
  "key30": "55cGoHiVAv3q4NrwMG3FD5xyZvwvXi3QZzXfBiwc4rTWsHjU6QmApmPkBeDuBKcuzVregiQykL6UFRTYqSuvhqVL"
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
