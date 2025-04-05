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
    "3uCJmJphqtFx9DcUVsUoDzZVNyQCUyQkb6VN71mPPvYsw1QSb4GU6R8QVT1NqSCUgKacBvmKzzg9GcDxP9QtPWUx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fUKSJWwKx61Crm7meXjyUMopikFFqjhHFNUq9ZcSfWTEgayPouwKpo9AS1F7Bp9j64ynqcdFcy7EKeFkL6nTbZ1",
  "key1": "3L4aApDVmredeLJnQhrEoJrpmQtPgZZPCMUoXSgJLCPa5G8yCTCVY8WKsfLL5d4zL6rndtHnjoX6CnT5aBi3o3dt",
  "key2": "qNcohByW9NBUUSreupY3cDnHhrUhxRq6zEbaeJa5RawE8g9h9fZj3sJiiz9fh7qBHqjViDyrPeTZ1ZorVoaHsxD",
  "key3": "4mRNLNCNPCiC9FMkYgYSzihkhT39XyyZLF6sxUhnnM3Mpa7mQaUt37rQPqqdgao6QH9m8cauQSdrkE2CjX9tNYhf",
  "key4": "3nPwiPtTY4NXjAyJUXjQHBAnLxvJzcFEgj3qMBYtMqWPxCjUujS4ifD2TwPEkGsDfDNFFbXFvXmFpK9baHbXYryq",
  "key5": "35vW8yYR5csaT3pEJq26UHmiJHKL5gZnrgdvL7BuLWbwjHBPLXy5emhz2TZgVMf8etRcmGrsf95Tho2z4aVQeBrt",
  "key6": "5bHmpJxWb5w9DJpVj6ED79zRYZoGdZHvgxX7qh7ieqfC5mSF7QkFchUEqEirU778xd5HJni6ypuR7CFWQ6X4VNUH",
  "key7": "5mDf9BZvShGX2o8fcg8GVc69CjD31wtxPBT3xdjFP6efLEE8yKs8nq7hTRzJaQGMstCxV7zhbLdsDpsmpwBrT5r2",
  "key8": "ybpsnmnUgh2TAxX1beAd9QEvGSxyvUa8KtEWe5FGvZELqu4FZSxUxWchT93mTDBuHDFbzfCNzRd88pr2JsoM9gG",
  "key9": "e33n2KXJKAeX8rzkJ41tYrzDphpu1Ht4RXFpZkXqobwLAbzCQG5zkdeMWF2wi7aUEWM7VWeaUBWTN46JbFaBLwh",
  "key10": "iqMGeN4zfzGWV8b6gSCuCbZSYPqrT7T93egPGsTAJNFofzFkhs279hRX3F7e4orvCh4iY478EtacwBspigwUTey",
  "key11": "4eddqqHbNvqLnYyufrH1gfUB3SRh7LjCE5MWmv3bBSeCSoaCxDoAqi3q3KBhDgLQHbjbkdemu3faWyJWZwbY1xqF",
  "key12": "dAna27DBmisUxSRXm1JTwmKLYArf4aQm5zEcv7PYySCy15hNtmxLEjJBPgPCuHum5qpmX6nnre3gACm2RXphr6v",
  "key13": "4oQCg7K2HF654NR2Fr7VavCgLkJwb69Y923GdvZNzd25groMnMgAeATh3SHFubW58zHPtteQkhsLtvsPH8hmNjSx",
  "key14": "2m6vjp7iRYyuFKDrnBo3RZBxphnmj13fqCrzFtXDSPPDtyjtBdZQ2ZhWzkWQuQhPitfBXTtv1Sdqb2kRDvnXHbeZ",
  "key15": "i5kHmCGijCprMBjS8cXBDPqZ1Q42aXaSqwXWD5t7Az3mNYjy8gtw1rT1S4YHQpJgcX8CKKAz8McyPTxZzYWHzwx",
  "key16": "5f7JGHqzFSKqZHcyjcTZTd4kAAtmPFXj2VT218j8iB4cEWN3mB6ZPwFKeFKkacbmxspWJYp7K7eRrrrBsVcLjKFu",
  "key17": "28NtEsH8SfX5x6JahgedZE6HSrnsYcZz6H8qdx8T3BmatSqDoCPGvbBJe32GMPwZBE5YtWWzu3oshag6HA1GBZxt",
  "key18": "5FxFDWjunNGgipCZdj8HMm7KhzLFqSXnsXuLWURD4woJ33HSXNgh7PPLESv8HTPZwqzCbUZQr4fiFbLuF3sMf22m",
  "key19": "iyYeReP4cUvVWkaiWuqiDBq94aYw9Avx8zpSnJJdfYubNFY8QYy6rRRtgkNbwrnFgEJX6isjCwi1SghAeKFBaCa",
  "key20": "4mFP6L7eSqAfVg6AetANweqxFkBvqgo1P8NnpRwuhX12GiAkCgVwF73u9W58wqNNM1Dagex7Uq8Gx9PqHvK2kWQi",
  "key21": "4wcV2ggrGgbYxBpSWB67nAJwrHBcoYRytUyhHssbCoJPWCoQi83K9mwy5E5ghJk39FjMk8eUzmS4KbvphaJY91qB",
  "key22": "4FP9ZniB7vM8gX4owariwNJWuv4x7YyxHppZ5k9egQzdAsiK83Zu8QTxR4J65iw7jGeTs12z9od19SbE3sVCS8Bq",
  "key23": "5WwbbjYcSsA3C5frznFJH5LmJQUwM2DE6XCaH75BxYqAmSBjbZsCpHCSeqS8VTBLaG13ARWiM1VMpKpaEFrAaTnz",
  "key24": "3Sdx2i27eMfiQCWHjAciJYYBoAiEKzAq5U5gJhYikyJN1SHSBVdHjXyZsQNGbGBB4jEmcLc4DQeG4SgWzCs7RJnE",
  "key25": "5Gtz8qe8qnyEGug2ZRni21JUhW7nKXnFK51jzwhyXd6MtaMAfP6zBsJwSTKVyBX1nwMuruSGEKVqzMkfUrkB6cud",
  "key26": "4E3gN2pVzj1UCwXbpMJdmEN2t4VvMTRtwEZkpr4hKZyhUtfv4RkYFDH84d7faXkB1KwbXDTRqZyTccWnSGQrBex9",
  "key27": "37jkC3CsVApHp6e4gzkNt7kweZZt52jFnwHtaFXNJ2s16hYiyjNdJ1dYdU95GCn29MNGEfhuGCuXn47ZkLpcgnKY",
  "key28": "5WKu19BS6PMewFkeEfLaKaZVSR338WGpR5zTYHRRxdq4zUMNpwnSFDujNSzcQ3T6kLsjRrHxwDSJsP3Xxdd1pojw",
  "key29": "zpeN1p1Ca9abhHqXdUVW8KDeiJnwfvx9mUHJV2bKP3xPrJQhJ6uz3W2Db3Uo3hWsAUny4eQ9Zf1NnrCLnZn9NAV",
  "key30": "BMRYz4NFLYYKNs9JkMsd6UgJFFKDzHHgnYQjJtdoH6TwXxS3f2mcACMa9idyStwWCvXmBV7cn23C5SDbRcWEr8N",
  "key31": "4K3kmfYEmkuFNSEBEsJqFtPAJmTYSLBaqsdeXoXWfDnQFdY5Qdrjakeu15LxSeD1C1P595uS3gkyAPVxMSVTqhm3",
  "key32": "4cdYsw9nXUajmrndi5LeikSXkoQSgF4WwW3GxZfW7CruEXwcsXBff6BZaJogNrq4s2LrsHgsSmJKSYVMy18SdDYk",
  "key33": "4mL3ZPA1LiM5n9M6Pvsfx94WHnm5zZEa7fA5avcfr7hnRpgFB7GJi3Z8avCh74a67as5pMSF4HAPMecmLvRay26o",
  "key34": "3QhCDbx1U7AyhwBcxx3g7YSdsyVAsMHkTvu9GjgKuSrkTPSxM9FSRGGbBm7u7t9UM1UYxLbxVp6myqcVmBjg9kWf",
  "key35": "4hA1fCHsmfoBHiajzLanhDYB131WJCaL6nHQpcSayrdsYP9i4L2ED8WseEPZU4eW6bxxA369Tb93rt7HUhzWfAeX",
  "key36": "4YHvanSgbCUucCA6gLTaGQfC7B2ukJAyYYRQ4PPSSYDZyzpuCmoRNKV3nodZvMRU36tQGbBAMmijT3Ff2RWNCpxw",
  "key37": "4ZruQ7Uij3QRwvtKRHSrV4P2MxG1681eg2Jq7MABx57PvYitCor8M9SRPgMm4Ag5sM2BSgQ6aKZpn1Xtr9oZKige",
  "key38": "3F5xD2LPpfJepPK8CAzGYe9SkiZsdNr121QD3d1D27ENqjf8CSiPCrCT4UFPzzqJSSeYewGfyr2LhcyZLhkJ9fvo",
  "key39": "H5qbowmyYPEYPPGtnC4DR9jx916yAW9jwHhWSnrj6SVg9ZRP2ZeZJ21YBNVU2BTENoMtsDbzdab2KLdt9oAMvhM",
  "key40": "gvnVYnV9JFN4okuGUaHHP8oLkGfnrUYRbZZxbDMyBRve2BMU41dwhoNrcQgHxnrMjJXzqEictSzL6dkmaSREHQo"
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
