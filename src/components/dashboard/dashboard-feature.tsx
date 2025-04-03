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
    "61Hnb6x5RGJHprV9RPRRemnMRCdgEnYB8CCDXtja91k7qT1GeF4X3u8tBMbAzdRHA1h9S5WQEkvWXg1taUGAHD2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JXWKQx4T9wZCSA1dCp1YotCyHnurDVAm9NMNoG574kGBgQg5KkQBzP1V386MD8k9ESUHorApS3Y72KpWUb4Wvo7",
  "key1": "rc3SZuP9UN4aYtamLx9CPR4KMjw7cC7a6CLZ8YQpwtdty7cL9YQ7Cpk9hk7NukiGoEu5akLzbYk9YpfFTLLMbyq",
  "key2": "31EXNrZc6C5p2ktQBMTQWoAAuNrN1ta3PHc7Nz6PUg7GfTmdGwHag9L327qAjLYc3pjtqNcRCz92PpKVacz1dCLQ",
  "key3": "4bC6RtzWNEugh6PLjtmoNUsNiHUoiPGHmeAzbTcjc1uU9K6VEJPJJqXswK9WsHLPbQhBiik1kAxRY4cUFhKYKLpw",
  "key4": "2EjVhjomk9TQy83dFxqfUuscR25DXcKbMaKsEWL1BBZVEfePosoMFn59z9jUUUBbBHorePwT4kuQACgnsHVhBD8L",
  "key5": "5cM3To6pZf6eztVkFfBxCQr4rpEA9TVeqYf95HnEDGhGJQ4FeYsgRfrqGGJvXEyL3oTvdPq2GMLS4w9Eu6agkN5w",
  "key6": "55s89iEhsi9p5XT5bYWffDy9vUpr51RHv7VZ9jzvHe28NaWBL8xbZ4iZdyWCeRfMdSV1b63tHMnpH8BmwY23tu6r",
  "key7": "62H7GKZLSGz5qJ4VTotihsZB6TCejer4ktN5PkkgHcoiMpom95ZCXS16mzitR2rxJftBwZregsWXEJnoWUsoHRDo",
  "key8": "3EgmMkTPjf5THepsAPQjwA61t6xviHtCe7uiLkoupUcLyTjKC7BwuTGaYVzDPMyLrHhc49auMApjiXJ3PNAmJZqj",
  "key9": "3Kh4Y9sVie8Zxqc5MAguyy45AZ4cAuUNBwwp5RJexkojPJxyQu2pmR2GBuELwLgMwocLqazWDJ1raZdS6nEePhfF",
  "key10": "4JLycKuTawcPqx6tHV35YNwUaz65mDqiitJrWtx7t5vpcRGQhQJW3mmBccoWXBAaaAzvLbkUGxubBVfqcvkoikKo",
  "key11": "4DHWNGzjHGXVRd7LvqRL7eb9oeFYCxMcacpaJ8rLTPQSRDyM4oaaJuaYEAM7gY8c9ZNYL5a5DPveRpsNkZRzW9iJ",
  "key12": "66hndaD1sBPH7J5rPEf7sE9xCWcjQFnX4ts8DjhbH4XNybvLU1opNM2m26mvqD64SoJZ9ZKK1Ub3CQ5Xayw6N7Ab",
  "key13": "33U749s9NAdDVEmscYDJrCdZpBGFFGmuxiRXs6icyhGvHyPminvd5Ki3wuJnjCCYw42gY97y9foZu4Brkf8TpgiH",
  "key14": "4LYwdrnktQjHh8mfxEVuihrhbtxfebqZ349JMxxigC8L9uxH3WW9E6DE7HNpjpS53vDzJufsu5YZHXRUSyfDorSA",
  "key15": "ygp16sFBMJZoesMpLbNq5drvNXa6ng7DHCd57qyghnybumJmBH9a8VRDDLtFp53SwP972MXq4XZNYMWHbBwduFi",
  "key16": "5n4Vq9z26fHFEuabwLcMkAzUhqFLMsR3Aow1eDv6dUmkgKTp1ifazvYczqKQsusPYVGmFMW7v5PpcfguQBMF1b57",
  "key17": "3QHtLFYk5RWVSnNdz7vtpzg2uXLMkSi1e5Shgi6HsmDRRFNgBivtxKbn3FXhcmHa3gqGXeDvyihnNY3KQkYA2AmM",
  "key18": "3R3c7Cifoo8qUxDtG9VmrLYex83ZVkiV52iawcrUMQXmekvKK6ZxcdJYfyhdFECFrbnrZyBsh7h1NNnaaCk2ESgw",
  "key19": "4ukf6cXh3n66YVsnAdJPFxekjuBwfjGG5yyGWKgUA2qoKPyoKEn67Crm9PmuF5zWuZvYXzDmYiCWwkZAG6aaXDWV",
  "key20": "5rtXuczQkyvrGQgBRXGrD8KCyvpLGti4udGfvmUZsjX6yeeDKMo8bruR2KSEHBmhVUkiZHfdUgw9yMyFCi6qceHs",
  "key21": "3GxSrpRF27xU2oqZuAx9r7Fi6ZX8XNiMpackqZTjynmfYGiYo2DJe1THmT9AqGgZaJgmjBAEsNUd2iryA4QQRupg",
  "key22": "4roxMa3zJSs2CCJ9a8SsTBEsFb14oMHviRG8GwFkGjqFBVtBwNNtPZSjqhFhQ3Cpp5pHdLR6hA9tuoyL1aUzgzuZ",
  "key23": "5ruStH87WLFeqLntAzyrLXGz4iEdr2mRkW9tazZZTdmv7igw8XvYxwxGm4EgtQxjXMz4vs5oaKFyLiFkXfvULJyR",
  "key24": "66rmLCVpMF2Qt5LCPxpQVaTYQxgi9Fa31kXJtjz8usZfXFppZMe5wuqd77pCGHxDaYmGwAmZsKAC9VqxCcHRsaA9",
  "key25": "3hDJEGDaqTmvLchUF72jcpeT4KeLdmCVwZF3nK4trhHWzgGmVcR7RbL2JvpbLzXU85S2RUongPPFRfwUjo95sjrR",
  "key26": "5BNNGYCfpWDpzdEj8RcFA4pxdGASypD98ph5oSGNmDjbq9LnRfjJ3C5UJdisScP2DAbRpKgyJ2id1ctsNkVYERLx",
  "key27": "s8B2ajKmPoRh4o6GdRYHRPR836BNgksJpcWsydMTgEEmy5ooaHkesSE5L5tteYroq7FPCDkzRWBXuZgCPHGq5cm",
  "key28": "3vLksGc5DJTEnHbSpWBd5HJqpkgfq3g9KFfpqX1py9vxatmCMSxXtZAETwmTcZ3TuGVXFQCHr7B5bp4NXPnnscav",
  "key29": "63EwhFp7VVBs7c6YGe5jkPshdQ3Vm95Kn6cRKJoyPYFCC8pm3Ua8Yz5QMm3ZQ6Ndqq6sSMYZizNYyNoBnVQovdE2",
  "key30": "62fLvbBiVDqfivqScwbvE63dbDtny7HiVaEk62WtTm5qBLYxPBvi6WLwzTJpGtUwjnDAbVxkvRoej1boJTZ27UbJ"
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
