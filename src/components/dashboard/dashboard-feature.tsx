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
    "5VuVxmavkamVqb5rzHZrjaKW5re5JZh62jETUK9Sfd3sSAkn2c9TbyuJ8SNX8dgJthVWgh5xdqkhF2PH1RCfVkH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56ZcLkS5cBfTCgmsxEWg8xG6SXKD3w6BsyvMroLZ5ESUbactBqKzWdxvBHEK9mNyaRZCFTR5eM6egVvxhm9fXdw",
  "key1": "GfEguk6pqakYv7YCELkJiFoqbo7HWZNYYmc8tB7oAgGGpyJ383P7PCQqifYJREUHwivRWN5pDX54EuWNuLzZw9Y",
  "key2": "5XFhfgHQTtWnJqUfaBabJGbQ1AbBMhjwRrXoYoQXHyBqz9cMnZWJSpqz1fKULi6JbCBZyoHnTZKvtFbCb9pjAn4y",
  "key3": "67Ppro2PxdDCXbsPgZ1GgwmUAf5u31N1QRioxoAdWuqqy3s3NwWQyXzTJ3hiBgzUwHr823H2kjHLj6kJn21xnqAA",
  "key4": "467X6V9eHAaT5CYea6zCfrm2KFXfjE5LY1futHXN27Z7EpHNTJ4U7qDoiWkjX1H4QmveCuU18GHRZzBWsZBGcj57",
  "key5": "4qnf3Vcj5Pj86dgjvaZmaMPmY8gpF6QBU7kZkWX7YWX7QNHivcN57WvBV6ahBsEkVf6WYtzHLEbxA75kKzpYpsdy",
  "key6": "5cQMdhUBxDqsh5FFZPnCEnZVjJ8rcaQtmggrk6vCzygTi1mkhU3gbgGAu33TvfiZPeyBv4WPbchaVZ1sGou9NEgG",
  "key7": "2VmZbrV4AufMTCG9JaWMHnYkJhywgTUHJvTX24K5tvsnBCENMivU9HhXN35fmY2vxp8jh9UXQUw2KFS6rGbYS9qc",
  "key8": "21Ch4m7CNicbaaBt81jFZAQ1L1dT3fuYqASebsX4dSqWVZDvyENbD1EA36c6UGNuuLgK8PfGmUcb99f2cZqx7Tvc",
  "key9": "HSXHnUQHfCmnLYc8yyseneS223oUEYcvD2wJjHv1E482eDDEqKNUoHpipFS3ZemLw6NnmUdfSHypiFAMgQmHded",
  "key10": "34NyUzDcUf6gUtSzxYPgwh1x7Xoiv95ThUD3A6RZgVrbrmLbANJ1pvKR4cHth4YLu3Wz64UGPpTxKXiXSquyCLvV",
  "key11": "4ck5uKrLmY4ZQwEpRjHbGSLma6WJH5a7fGhubQnUArdJxfGcu3oAawW7KU4dj4hgDiSuPkmnD9b4PDmPe5NpT4FD",
  "key12": "goqi5E3daHnLna2Sbc29uJJAVsSwAoBQK5ZAieW6NBBvM9SdtbJX8jp6uodkhJJw2c7rwWhg5Hzfzyt9arobNyP",
  "key13": "3NgHkYGDqkSdD3GyjSrBnbEEFkAdcCKTSJiemeChp7Ejp2zAxRqEidetKvU7KtE54nZ5Pat9kGpQhs8PeXM2sP5X",
  "key14": "5Nz4VwFqrSXuQdaYFFzYca6ywVGYNTgv8DRto2tVKUMj3PW9TQZAhjxAxbbPCiha5pUyt8aSg8EGU3sAEtxG4BTb",
  "key15": "bnCdGZq36tbVHKQXjtML7xe7QKS2D9YLv6jZLreVjW4b54ZDuP7Q2rctCzxx3VpQXdFY6tgaAE1VPFFBVhsJpCB",
  "key16": "42YLjMVmJUKS3riRhMYeDZSmVP1f2zM1NPvqrDKeeareb8Nmbt5g9goabp9h5G9ZvmG9mrsAsxXpXTgKqvcrE3Jy",
  "key17": "LfsV4SDGrjomSkEAnf2JEcWebWYL158sh6kVWFHos4hktXXNffLW83okD1K2DW2GYAVFvaKS1XC3dq68cAc6WC9",
  "key18": "5DXM1KmMEWVT3v4TNbFXnTNB3uVjAnNmiEkqPFZiAtGGDFaEXe1xwjtXAi7gLuUqauhHfH5S6Ki5ZUzwNZ71UPDs",
  "key19": "489JRM6zAQu2k6knCvL1NSH5LdwZPTak19s9WTmcBPiBFaQ5aLtCNnVn4zLUuUgy5L3BJ2ZCEvnprjtbBst6BAji",
  "key20": "62RrMWJuDuKLBrTJErHbFcn1kmu4bHk5mBSeb3mcvsiTsyaHoCAfy6yuqSQ7gu7EnEkkHnDy9HNqtaPRiPi7Fuot",
  "key21": "4SQLX2Z6Cwd6rsZUC9fJ9tSA9UiQuazfUL7DdAGWyoubFPi8xKXRmiz7b44UZPGo8VEXJU3fb9QPx63tgnoJZSCC",
  "key22": "2oZZjcF8D1eWENGdQmR4XDA5AifmWg78CtTmWGRoFvMHaKnZKJ53nUaXUNcchwX1hRDmMWwGRfSBqN6tdxopgAHh",
  "key23": "3cwtA9ZDmA3bK3ccGFQpeMyvgggewsEgnkYL4gToYeo12PMzRhGHAfJueT4eECH4GP5hsT27Du648ciTVZEaKne7",
  "key24": "4mpxV12ab86AtviTLPQbfsrF67eiS8txC7eBqdrDY9QR3SfmxR9CZJqBnz9rZiMmVscCEds7LYbGT3UQZ4evTNoZ",
  "key25": "3bp8seA7S4BwXYT2LsPnEFREoGBUdrVBcGHt8iYXft8kufQRfCridydbiTSkF21Gvz6sA2miuT8DUvkz71nag8FU",
  "key26": "4sH6X517GZmj7uiefUx7orKwnyiPEH8T1SLj66LBDfgwBLNQYpq2rdgBFTzBffYqDqHoEGbp9NZqWuMEGxvsGvWw",
  "key27": "4g3x2SZdzZ84wnyfotS1XLTwmv9XKLuvxo5kvNLf2Wke8u3zce2xWVqjHmhrJXZ1bBM14kX7cujVAQHizq3Z5ZGg",
  "key28": "5KqvDM4nQ4zNERNf59N8KZpnkRfDnbNnKXTKnXuBDApHsK2vY6g2cnrrZM3y41LJRX7QyLMXSLV3Av34nPfJHzgz",
  "key29": "3JzGUZ2FbHuopccnnfJwjHTUpRD4DdRT6rLLHSqMRd5eqGc5QhaJMMs1rsgDPJi4QhsgT1qFWYRgdSS6VzkgXzq7",
  "key30": "pefocp4mYpmSZEWTabore66BwF6X1jyyckT6AKwZ45jKg5PNQXfg18xPaQfoquajoppDPtqcwk82BeLnoRDNkh1",
  "key31": "5yox81j8Pj5yXpd1Z9U1ZzZJwboNJLFbg3reUJ8ptznwLzwJEAH2RefsxzxyeRU2Z8TEtKKjhRnUm8DbCfoQNRJK",
  "key32": "3tkW9oQj5Fkvk4y828osbETR4a2p1kWEQnWbi2W4hH4WmqdVE6aHcEjNUn5dNeeG9nxuqZAVmYxafCuQp8b7pK4",
  "key33": "5bmqi4j2eKg4Vc8GJvBSjST4HCdZrcPYNJnMukJYvzUPzuwnRdk53kf86ZKmK6jrRApUv85QazASiFV13nGvnXKr",
  "key34": "5cbzGVCKAJrK1YrLPYNCAqQwUjgJd8t7V4cX5iLQsjqPQqawMoFJRQ582WVx2d271tycwJXaQNbmH4pRfvQgStUs",
  "key35": "wGtTJaJWxsz9uENU455qsBEDzsGLYxbkunLgSeX8Z2ob7MKCYepK9tzrNKaojbUBf9GKjWF9ZBrjBSyRkYZfgU2",
  "key36": "Gau5ij5hBWceZbQTMN8hwY31gWyuxm1eQJcpYhiNdkURDhBR2pVZ7HtADCM7XeFebYBEsZxooejW3mGR9W8xjgH",
  "key37": "5rPtGFWZZgymp8UHjvwHMxzDN5cEv4ydms7gsh9ULnz2ZGTVTJRQQejxUTM7dcWh5NYB5LxfAxKCKGfD31hoWBsc",
  "key38": "ZE9wgMKFTptfb5ZGNg8u5pKb4AJThE3AanLV5jorWoUNqyo6tndDb8pmHy4HJt83DXdFKLsHzeiTisfMdDkzH3Y",
  "key39": "5Qz15QXhsLz2zbv3nWTeMA7163GSGpdzDeJhzcK4cMmFrWUzcWXMYRAi5N4SQ5ctaXuRBuGM1cstzh2YE9UktpzP",
  "key40": "24kN3kcoRDeSnF4NAYsZxECswLmvUjVcxmqRqMntjaEinQLYFHSFPS7rxRDfkDLbJb4XHoAUhSFd3T2pmipdCZGi",
  "key41": "3RaEJBDBeK3TCkio4fit6rLswwk4hFWoRiS7tTKoqAAEnPEw39Aeu39aE6rWUgNp4GPtHvtWXytSjbSzhX3MffEW",
  "key42": "eyRkBcBZxhfbA8Ytm3wR1YiQrggtvrY2w4N6c7akREiiZoPZnjK7Hckxhah8B3oeM8EDR2LECUzTXzBH7xp6XUx",
  "key43": "3s3nFqFuSSUoU2RA7xUZbEtbwLrg5VkV4JbBUbe8TD7B8Yu2GyDRUBcAG3qm2ZTZYRuryEYoLaukG2Y5Zv9dKZWA",
  "key44": "4PcibCPsVp5P1oAKRxmzvcV9Uq5YHciHdM2xpjJssSZrRHzA9Ncvyr9YALSRCS39shdBHttMgB6RgF9AyTRQYjV9",
  "key45": "3vJDkZgQYxnq4vviqMFUsDZFNLS79ZK8bKzL2PJMTrUC2bo8nXhfm8ouD7dkxrrckt2sKf8LcD7uHEAnSPY7TvmC",
  "key46": "3Ta9U3NbtouZeg3EfNfd77iu2WWDEzan2WKq2yqmWnqWJvCyrFxmM7qryJdLDFFGGRq5gim7RhizD9EVXGPYX3FQ"
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
