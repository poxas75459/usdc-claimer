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
    "bYHfLMmwCzG4BBrhJApS61JVwt1JFGMC3ccbHq5vyvA4MUMYvfYRg4DYRbiqwnubavjECu5wSAAS9yyQmoRSxpD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yTsVPGQG7W5TQD9bCuDGVKbBQXaoVWBFu1DEzvtATRRJrC7YKfHVmAuPnGgGSwBgPDCa5tapuXNbZdZzu5rvfQM",
  "key1": "3Ho1SHKndM9ZfCu4MN942B29uBJHVfdNSi85dEHyNMLUBTkX64vETXme68bkgj1iNrYmvFt2uiByKVzmwY39VhzC",
  "key2": "4ZnqkxzPaQ9hFaBwiLwZBoTMXnevmRJsmHy9CMdLdkzxggNY3Mze8fNKbZp2HSK6bByZL6uvu2J5AjeS2eCG8GDo",
  "key3": "5oqJQaTY3yK9PFRg5TsuynD6kegynERgLuASZoesbpcwiiU42Da915vRrjHmB4bQmcuLbTe1Qm8Zyf2hf6rg76NP",
  "key4": "5PQcnomb2odstjjgNK4rSFGhwtjtgdSBQRj8DNYKAXhegdgwaD7UNrQLb4599VNBUGiofxAM1Sw4dWZT9kszknB6",
  "key5": "5osANa4CthTceSTuViqtJs5rmdyScAGuYiY37ibChhu3Pv3guYzV5NRaDDs82dYAh5BVrZBPm3K1CnNHQcuWZxYF",
  "key6": "3FJfUaXVwBKhVnS4dikzwnPrgFqBjFhJPxM1NRDw7kHWTJrmmT4qN28C84yu8LBteGMPkGZcC6AeHBA5JSGexvcD",
  "key7": "82aDGsUoepbtQ97V4FA27rZZ2NQvzUQTZQ8ubaC9h3xym8XEGiVAJDdE3qoojK4ngjUoBJLeTePqzfgMKdov4wx",
  "key8": "5z7SUt4qHyjmCbdJuXYWCeUpH65M32k9maY5Ndb1d6kHXfU9dmWfyseBEiTMjmKEqmfJhQBcnH7DTzatSgj1Ysxt",
  "key9": "469tSvbTWjCTJL3a2vcyW4YsFtxYtJEVkwDchac1TH5aVfwTG9N35T38jrFejKYVxMm84yYA2TV5K7LZzW6MiB2y",
  "key10": "aqtsfnvrUtv9LMwBfsSoEVCBPXajBoKxV8jKmWeJbqmq3zY4cnqC7QDzUWeFQb1ZmofrJ9EYx58Qkxv4v2rRmin",
  "key11": "38x3SMs6t5hM3ik3oMhjkwTVZrqvD2QfoPzruJ6AvBu3vdXH3Cqefy75CjYebkEr1j1opKuYX3RxPhdJQdtAK1eh",
  "key12": "QJvZc9wovgRdWnWH8BENjxwJEgiKFXUu8rdV3mGCC53fqPP1hB6d2zyUr2YaJFdCyCaz8rBNmHkrHnjdT98HdsV",
  "key13": "2nmLtm9UNN4uJd7uSdS6nUXut7THHPfLw9atBFgu1FCEfVvLE86bu5TQaohBM241R5x48st269M8V8msGT3kfxY6",
  "key14": "29KgUKcre2zAy2z2424PiDU5HkbB1oRmn8Xvvqytm1AuaXoA3z7GadrFqPPodKcD9BaTR3aRbxDydGLDSgZ9TtKS",
  "key15": "4jSVkje63Dpm91nQDqN3E3Q4QyUNgPzSQmER1PXfVjiKnzf4SkC92QoXorTQuz15NAG5GZkmq96Qb6F3TKsfz2wi",
  "key16": "3FVBXXU8CKP8rHxbEdsZv6cz5zW3oAmyimiyRkmkDnvP8c2ggnv94x3gubVNVBqUu4txyj48kSTvZddh7NHkriKU",
  "key17": "5efuPChXhgNx1Pm2dY2FWEJgbNWqdgbdQVnfDGindaK1dkuBqxb2j2BRfJxvXw5MFr4RuBPQSdds1CN7JTP5NzwQ",
  "key18": "w92uh5k9bS4QW2DTUYarYvYZMQ98kN3GappvMakct4FVGV3KqTBm9A1Tnrt4xQnmch7QTgURyrZ24Uwz2q5koms",
  "key19": "7nADQ1wTUctLaLoBryMDnr343ArLeo11jeAcJ97TY47zZ2v6tLng2bgAieqC6FMf5JA2oRDigcYHy4EroAdRLuq",
  "key20": "4mSBbJq8ckbzkTSdpcgXDcN7uFMDxn6S4jt15TVDFxZD1QdvPdjgxTFHAesGEU8aFYzuc4cCB5pUdt5iP3JJWWt",
  "key21": "24qK7dpEX3XQ6s98rbSHZiBRYHPMNV6198s6FAThs1415wMVYmsSgQmBG9HUT5UbQkynxjA5qSLv4JfmEdc454Fr",
  "key22": "5UQ243cDYUVe9mCHjQqCE7kzgQ36NU3hc6ieB8sU52GEiNQoGqTgQDugdD7ZMi3kYUpjcJ6NsfEGwQwJrh5zCze5",
  "key23": "5xjsw3nB6Wx2NJVhtdzrxTMrsfaN6DwUERsgzvf9iYBHW9Ui5LCMtU6nHHvHggSzjJcmqMQUNSiTR1jn4YY7M7PJ",
  "key24": "2EEgMh9GGChhGb6LZMP9XUHG6vTYP7brfX5qg2z7grAuAsyGhc1abicS4CLUzdX8p1i3Zdwx89VHf7E5FSwxt59t",
  "key25": "5BbSiV5psvGxXkRtMr6faigiHoThV6XGyBSVwHKZNNWzYDb2nsbgbzZJwMuDS8cLyoViamLn6B1KVFgpTUZSQrrE",
  "key26": "uZXMM77Emc9KBJMmadKNxMEoxzVVEL7hMuYYRrCf7GcjRqDAAsam4iHFNgtC4Em8chhnvKY3d6dtTn147dxiz7d",
  "key27": "3XmUrxRQmU63HPJdGia5oGmyqstubL23Uok6rkswK3yn2Rwk7JRutAjFE5fGawP1jsDcZCRnTCNaKTUd2tmcMzmg",
  "key28": "5yroJNVft1WcHBNL3j5RUgefyKE3FHWD5R2UPKoNduwQt9DibVNqpCQyt8rkViUyccg3v6Uv2Lr8e5gNNR51C1ke",
  "key29": "4WK4jKqmLBwRo3yGK7SGKpDNzb5zWb17RRsn5EmiRxBxHtDBUXbLe5oXFCkFgSsHvc75qVr5gqiGMARvWUa3Atb3",
  "key30": "5TX843a2M8XE4rTYzeVvPyX3hMWjwrzdPyxEnWzP9QW7vKQ3dXkAY9RR8hyyBqx4zLGK2DEmuYdAZngbAqarSaX2",
  "key31": "5BbWhAS5pDBdQe2ADPa7fLbV1xJsFvyQv2tyu6Z8kLtW46fatv8WuSETfswrPgBM99zXYCv34jkm62LSZTMnuvEy",
  "key32": "3Wu6bV5mmqFUxzaDCVjMR645Z19WMzkAwTnVAHJpUBHg8fvDpp2fpeRosvXFirTW1PJ3S4iqbmYEtANMmDveEq9w",
  "key33": "35PNPFx786VTqucLLDGp9tC2sJYtUfpxQiAQYuymY9GDPxkrJcHBa7gymFprVNSnJwDCrGkReyQtQoDBzB355H16",
  "key34": "3UgWssxLLseioUWAZ3rAgd6TAEFKfF9NcJbYNuj3bn8RKjWH3fCFdhi477rUGq5EmTWSVBN39bYSjnDPPZ7YkMAk",
  "key35": "3JMdAZjH8zJVMouAmiVGB1E3ZvSNSsazRA3TQUTmXY3uve9cKEKEztYSoyNYwHDu3nieYAWnsF3JJNk3XxZar46k",
  "key36": "3pkGM5Mzunt3qfNbLsYJM26KRL17VmuTewcwauKG9VPdj278HGyuWVQ9V7vo4Fgqt33CUffpnv9YjJumMe39U8EY",
  "key37": "35cZKzQQCq56qyXV3eN96kpnAzcw1f4Am5FzW2Rv8rd9jSVWeYhvyRZXx5uLvnVSAksKDdgXCEBYtKRckgYWk49e",
  "key38": "2hjPw8C1zC6xcpUniy6cq7gz7M2G7itZdLR9Y58xJsF3v8oYWAW4QV9SATRQJVaMvipBrDwAWdGGA1HvUeHmenck",
  "key39": "3azLZkHyjbCEqcBrr3n8176Ynw6dS5eaZBVoNrXMWeKhNqrcMbB6pznX2BVqjqM4jNm1zEvjcxLEGF9WuSF5z4f2",
  "key40": "22w1qHCFyfJk1qK93R42BBtkCzW98amnxy1G5Tn6CSVsS5pTZPFBBv3V3dZV9SzwcUUue2N3QQ1HBk95WT63x4yf",
  "key41": "4nBUdGTfMvPJrxmkpLRMATpQxn9wjCH4rxnWbdBp2U4cHsoYp8nvGAbr3YeagAHFzFQEpuaFL8BA6E5t1HCRwj6a",
  "key42": "W57dSzKmH48qvmmfYcRNfZno1onmHxJzdcGZPhu4PuTUQyxgEBnJ99sGTeyFNQrrmBZwWxVH7MZ9QgukfhiYJpV",
  "key43": "XqzpSdwhJBo2M59o1sCZe5wKPBqzZrN7CwPrNQU5x9Un4Ln22baJWg9oiC7nzwdrx3ER3VN92XWVdRphzZhhsiL"
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
