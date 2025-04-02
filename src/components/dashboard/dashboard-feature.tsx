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
    "tCUYgPq7tByCSKG67sc123LkTC1JvTx1ieGuN2pHYerzgHftTFwvX9UnmGmfYM7urNrKEJxT1jcDT2SZCRuabR9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hU23e9C5WLkHmUU3S1zGaBs1ot2jVmEfbUBhgu3BRWkiznPBQ3sEGDXeyubW5KG8CedQy9QG2e7KN2Esdwbu2iN",
  "key1": "287zcufnnRjxwyGAh2TfGnio2ooSVpYpvzzCKsQVBKdVJtq2srx2rur2SWqebRm4ARoLnDBxfdci8oN7nCbLCDYD",
  "key2": "63MLHYsSKRbag58Lsm4Pd411eDMrLdMh6xTEMT3kpshM4EeGHVhUDkvE6MUjCmsGGdRunQVFM5eG14y1NWutixLc",
  "key3": "4ZttXm6QxuGi3bwU8Q9vBkEz9wTXg2PW4KuRhPi7F241Jd4V7BLN8i6BVgVuoea65tVGZ6nRBP5eCk6rHxvckajG",
  "key4": "4ms4vsAnETZKKfagk9wuUQieMRsyjVN1w3whLG9GqbC1jmB9uuYdqz4nYawYKSY1URKkLpSZ9aJS5eav1utwezRk",
  "key5": "4zGvoVeUw7nmk73ResyX2KdNPdXVa97nxj7MmdMBE9pSkERA1xYm6WYE9s7UrRacp6MphnXBDgs7CHsxuzfwFLsP",
  "key6": "2aoDidFKbNSwoJpLyfyugrdHhkkmUVtnRcCayzuooq9vFWEoa8RCzZVxzLuFbZXQYwU3vXv8N35uGh9wmjHnUx5W",
  "key7": "624edgCmuymfcEsuxzBR4XQX3vAJQStiB8ZbpKsZMZqD6U9swoKf1Y1ekLtmPMZYDVxy7RUQcFzvdcGPf6hvxF1T",
  "key8": "46nUKpqUroDg1vd1rtoPN66aHdSBTeAPXeW6Dgf1TDNAN7TVz5MqShPKKZBpNMfx66XbN618ZtJL3K7YsxpUpBJH",
  "key9": "9eJRexR7UxhKQy5oiQK7o7Faz1h3oZEhAarurZpXAttjZAR81EW8jzB71N8Mhgx8ePQ3yQpshCEVtauZP6v5kLn",
  "key10": "5Z312U8cuiQ3iLRcXBKBY9W1qDYFtcBQ3sV6RB8sNJcMH3SWyqQsvZ56BoW5AMmZQyJnyzu4HCtPwQkyhR9AAxvF",
  "key11": "4KSqEnNfRjF1kR4f9gaf2tX8LYfcywjayK4tYRBESicCDrJsEpHdpJuW3t6dPH34gaDqaAddRYCEE7iKEnx8UxuR",
  "key12": "4GYCfiWSc7z8EsggNPGmDHMMShJDc32jC6Tw92nyn3c2e2BpfExTftvAxoToqyS2SrBhC179CWU9qGneXioLsLyC",
  "key13": "4f16YLDsSb52CjAFAyH6fxKc5VWwrgvrTubxjm1aQN3wT9UkedCLUCMXBkCRyXPUeFAyW9z4XVDgmi9frxyqQBeJ",
  "key14": "4QCHNkH9yyNhfSXMR7UY7AdzDVHb2HCfip4TnsUV3ASszfkuPzV1WUsxcCxAkWST5sBTg5GnJ9jKkVFhHPcULzq4",
  "key15": "29JhKbkTbrAQsLqLuQmDf3ZBjJBwaUWD2h8GqhFZgJCLpxwcZYnm5CfjX3PBmdDjvHYDqrKtduyxNAV2gLc4ycm2",
  "key16": "52cnnbvVoqBQxJaTZoCYxZbLoofW22KiMwuVeusXMcbQjqmSFG4SFXNwg9tv49gRBDC4gRKee1VuLE8zFfNgeD8k",
  "key17": "4itu2WeFrySWZoUYDYwx9KZRrZwByxwWhNhiiz6ZGghvnouVLd5pPd4jKWgSxwSXuaqRAigVwkcoWPkjZ5KNwWqa",
  "key18": "2yqBNf7ckPQ8CwBjRevjeZcaUAFgDsCsnNFJX8bqhoXPcFKpuCrgcznAHoRaE8y2bJtnVUcpMoPNaM85uJoSxsPv",
  "key19": "51ttPMfazUE2AnAeCYWuY8TNochc7zXPm63WVjqjWimDUt7D77zoXZviSKJWKpndvwwLHwg3q9fKix8Eep9NcYqY",
  "key20": "mtojDnLCTvquLvkCJYQFKPuTuzcZgDv5Zbx7DiZSxkihVNj7evyRj9SZ1paHgYH8NtBAbSCxTNxwWqGrsFggUMA",
  "key21": "35262Hq264crgSbGUFxqFeTR4mXqNQVu4uBhdGHq7FZUR8U78521xZuiShPRyBWUL5dbYK9ZCeTQE7ZkWZvBRRad",
  "key22": "2NgpSKtzLr1cpNk5tdwm8UfVmEnpPa4HEMgkLT8L4DZgW37p1PpMM7CybyS1d1ztKRzre7ErYdn2BQ9UZsAFo73N",
  "key23": "55jEuyBsQFyFkYyY8LWX7jTjzEbieQH4HRh45gyQRhCtiv6MjzH6nAxvjVtCwEeEY4KTGjY7Cev4E1Z9uQrCxWwQ",
  "key24": "iitTbVHtttuCdaLnKqzh3Ey6D4sGQ5JQKH1rBpRpQ8FSmWKQQ4eDSnpyYcPmUCEVsohrbNc8ek7RJzMztTxBUuk",
  "key25": "XeQkbjVZzWqDXLZDgp4LDKoyW7XXNWhqn3nziDChcuX8NCPdGh7FnkB4cLpBiwx38VrpiTHB6nmY5gm3HbdCyMK",
  "key26": "42sNNZGYaQnpgmxYcU7AWyDSvLT7Ku8DavkURwUL9poYZjpJGQdxxFEBHGUFrQX4KkmsDvoVupzHi4hnbTwnV9DM",
  "key27": "5scYoWPeTRq25tm7uDkSAMV1PwNZiCssfSYCbPt9iqitm4hqf3K8dxcUorGomu8jvtCbdis6Jh4jKVR9ymueZ695",
  "key28": "46pUBcqeRgdNDiKdCsz3WfB28tU6gDDDCgJJyyKAXehhjEXSfKYyCMDvSwHMHbuciyimkLe7KsaXT9gDPeRNe1TM",
  "key29": "5SN8ESFs9mNwNdJ5uNYk35ewMRMTjuNs5WkRKhwJkD97pQK5W5UniYZrxMtGPPrvr1tC78xgrTB2wAJw7xjWFGpq",
  "key30": "4Xa4dcrv6QwjbnkJUSUMz9RLLyw7oFodvJ6aLRpUucawqW1YFj7kErKGHF2DzVcTXvsmFPNEcGpHHcHDcQ4n4CEf",
  "key31": "4aW69scioQvqm732HgNBCr25rBXEmEh9zGGjMCds33W3NmMmY5ksLYG4jomgbhmXfCwFdShix74stt34BD5D36tZ",
  "key32": "3sJZ8QeRGFAu7eQfwRNuQNTsZ3xRnNyHpT1QxwatXFWzwgKwGx8TFYU2CGo4h2CDY6PpQeAywQRfPWfvKw3pWPQT",
  "key33": "5SkdHHpLx8Yqjy6aaFwer11JeQGFV4fUMWFXz3s2DSAdjgNCtR3r2DN9Ae7ueyV2otD3Ef6nNBc14yvUu3zWEGDr",
  "key34": "2jy62ibGfD11ZG7TU6SMtqfu4NC1Kr6FHLwMrjHRC66kWAkuwWogKWeXZtWgcFzCPniFRsoerXgjhdumK9SVAenK",
  "key35": "2BYc7M5AzvJTBaXSuTNo4JxwN5sMYiUFY8koMJSJsLaXzF7g4Za37ePdojeq3qiitqupTKKLdroakozbtLALpACn",
  "key36": "q9BzJ7JiBAHWG3Kmdds3i9g84diM32GkVBDnPg6FmWgRb3MERyhEm9wFn67HwKjwbqkEYq9NB2jFf4vsEGJQyVj"
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
