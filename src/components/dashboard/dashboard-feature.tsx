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
    "4SnEUsWcnmEhpPzUYF8rpTsPsjKpZMaAM5vhSZyPE1wpDLd8zniZvZJsQjobNQ6ehVzDNbWh6r36Vwk4CTasjGfz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23avigfLExG1GVPUgFcgAaxwGzrB2dU2UsCZYJbgENt9hfozs2RCoRPtFJ8ic4ydPrm2Kkuv8zitLwef9b3Xp3cH",
  "key1": "32z6Km2AgTcqoMRzCzSnixLWEEgbwBV9UDFfer2gi75972BpSKWecKbL7knMTs79ban8Fvtw5e6dzQJNsSJoZFq8",
  "key2": "4ywk4WUZ3t7LDLowpQeNf42DMqfG5gCxTeyekioAJenW7A74kEQHLdopUf1WTfeRUNmN7nhsRpddEBbd6K5thTuc",
  "key3": "hf8kMRWbjAiaGR3TTj5fox8JsiQoKHSq3fydUt8TzV7VAL68ZTMCuyLmewTxkMGRB6ZM4SnJL53vVZmkSjvNXYk",
  "key4": "3Zrc74UD5XdaLWtgKT5zjFUQXRGKR5hmFB7HpWg3diEjhmc3Gp7rgH9aht4dw78M8kivL3UigbWyDPZmxEkxae4Q",
  "key5": "5zTNoSALs5VGfLV3C8UWeP8rtcegwtXaFqddR1m4iuAwJjGdk6h2FBrxDhpWb3HxGiXsfojRXTCrhEyBLvBgpTdn",
  "key6": "2cTDpv66XwQbJtv6ohXxF9V8Px5nVYttxCJF89vNWALR5i6LFkvqSSYsZPerXn6bJKuCwPfdBeZWEY7b3zRR6WWB",
  "key7": "561Pyq4UgGCk9mrmDj7fxsboq3qJzzbuhQFSAhixMP5UcCUSEGvfsubp4xfWFUc4f5qMhshVW4ur1eHVok9Aai99",
  "key8": "4jucZDHYRJ3kC8drY4RCpwLZaFdeehwxv4zBbZebRX2zpPJB3bmPNLo7fSzB2gijCg2QK5DSzmvJL7DQzZy2NVEb",
  "key9": "2gpEzSJhqphbktJcRqTk3q68JrvYo7dAq97Q4zjP8yTS8driz3JmftJGCyvBYuucQWi16tM1hhTJ4zYoHTEzc1eH",
  "key10": "3B8B577HhPdoTkD7anBsLx7o3AXEJnzn37VTMJD4ZeSK91gVPf23vXYMQqqyD94AYKB1y2Y8SjueUzNkhe4mWAgr",
  "key11": "xPshwfSjouapWY34R2aQTDKXpi25a72YXg8p8wtj4BTMBHZ3cGE3kEahpu6WS6DUMD9Nh9i4WvwZHJvEKaGhhrx",
  "key12": "4fystgSUymRLoYaF7UFmHmDgggiFFLorfA24rjPGfwH6eRTB2u8KGrBG4167xPGPcxTha3xgTFr31ZYgyDSowsf4",
  "key13": "MByoNvc3wGSYt274oT9W2CuUYhz48wSYva89WH7EmHfY74zPuzf3MF1YppfvE6FeikfPhVM63yj9Fw7sD5Xm1Kp",
  "key14": "nReUEjf7R53qreVMQFRtGN6NaKRtwFS3pwwnsXWry2M2kotgW1jzzuokTZqQwhs26co6g7pg3hc6i1974jBhhpM",
  "key15": "5TbfUuCuBnKgQUbMjPJqfFs3JgvKxm8ZCzkzEt6W6FxJMJFSsocSWy8tyxD71SLu4N6rJSSgctkjnyCb2q2tU3Cz",
  "key16": "2VEYRuFnZSheZjJk1rMELS8VRTXZ43pNkLwF44NBL8RseeaYUTEjbrR6rgG2roTY55uWDstn6oBDdSPbXFz156Wx",
  "key17": "61Fovor1kpdeRjaL3PTJ4rn7SdscGmLbzcqwnJbZ97Yg6fvDvpXsQjWE4nKtXFp6W9UASMHXLmSb39NEVu1WWbq3",
  "key18": "5Ct5foobzj2yfqPDZsAnrSeuP7PSykEzgxSyPdKefwsKYYhBNhAj6VfQnpWCAfoGZC3AAy6rsqBKKW9Gus7roqYj",
  "key19": "4vPQQT9N83M1z4atvxEJTxSWLHd25bXRVWjW14tPD7iWt1TufKPAepbTc8UajBSLt4Y4nxGjAx8p5LvE7m9wZcTb",
  "key20": "3RGm1M2VPUvXNmDepLmJtiiBsVFempJnu1MTJKgPhNgPtReSGrpB5kS1xXjsCGDqoWefZ75MbsDL3qeTezr632XB",
  "key21": "4gtMACDewKhLMnh8ykmyYvadHwqfqiDQTGnNPQH1W8ivBSyMvHQuNFyXLKxEc7Ks3AJZ5yyqkDWann7Gn7sCS5rL",
  "key22": "3ipATT7aqJJgSDHJesAS8ss6SXUVCJDFkAmYLLZPE88UaMqe1rqC1VioK51sVzmCphcBebQHRC9imaXwBb9HJZva",
  "key23": "5WUo7okRWUsNiVuCiL3UzXr42TCHk7eVda1FFfUbnMTAypdJwcxbZECAPpPymYmuiKo1CL7Hsx1MNwcymDsg1uwV",
  "key24": "Hgo37ai24DcH5WK8jBTL4A4pySsXZ6z4mx6Souki1Wa3mwKRQAYkYcqmQsekTo5uDAR8mALHaJhLVkenzz6D1sA",
  "key25": "2wHBd3NptbL1m2p4DURw5ieke8ykCJxM8myjHrUTbZy53PC2SB4ubHGb4ekHoVtgfKxzrDP6oCYTZsHvLsihZiso",
  "key26": "n9TWRm2NmT6CzLvEatmddeXpjggDMPtGEBvMemqymPZALtayxo3cVETqehkh5szdh56WvZiBhqsxYhQMoieQEfx",
  "key27": "4cHuphGkhoMs2L8udbSzVuo9Skik9HU5EG881W4Au2R3rZMq5AWZy5KF862TqLABVa12vY5uKYCERHxmXQ5SnvQk",
  "key28": "42dCPgkz4ifLDZtaTZWTSeQkvdPqY3zfH3TspEEvZLTt37kTBQaTvhwH2YwA28VZf3xeSNK5FdXubrb9T431EKVm",
  "key29": "3cu6WeJSYJk8v93gMK3XKNaqHR5xLixVuCXJsmM7HKJc5nHNFfcc1v76g4f784TzbR37UX5w7aEf3KCSxDpE4D7B",
  "key30": "51t1i2gUGshy8Fw3w3Y92dLHzPjCoefwPrniFL9Ac5knwwEikNSNfnZhS3eekUnDeb5Z4Xm4u4VURyy5rYFPXzdp",
  "key31": "3WfgJtEWiDpHXFy4QctKy33fw9fmHLaKygJeBku2C6uUECJPU32fPzihDyUpqAR6fs2L3F9ccjzy767RuWd8fC81",
  "key32": "3uyCbSorRmQ162JeMuDxAcUi4CznNG3wXKdm79BYnfcLYB4kdzSuSccjrPQPCXHqenm4v1xjPNFiytfogFtVzRPi",
  "key33": "2tiX4FT16Dp2MXHxjCk5PM7WJDaB1ZjPQhyvSsxbNybGeRxvQGzXBzbVRDFsQsM44oyBaoeUvECf9ATnLrZVYExK",
  "key34": "3128xpZjAM5Fc8YPQjBaRF3HUPkLxGiFdHMC7bmuU7Fr67FWGqjvk9SYhaDxhwsa7M7RC3gjhEeT7s1yYoCkC5Jy",
  "key35": "3b7sZPYUZ31btP9bzcyM1AzfRRWg9DVcCMZjm1XpyMPqRVqWitsEkvx8jESeCiRinDF2GXJnfzgY7kTNuRjZTQRm"
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
