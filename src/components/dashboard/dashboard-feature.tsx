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
    "2ctecaRojctZdHfDSgfjPmTFtQY6cPQuJK3RV7vP9owYrDeSSkrwovkPdMta8ZEQLTTiB14nVG55wcC1QMCDbb1J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rHpxJ37W1RMNE4jX6BLouQ13KgrNdx74xGRwtVV47iMhKRjm1MoJGgBmpwASUWxk3qM76LPmBEKZ8UH9YNkc3P",
  "key1": "5krRcuzoadq2DtdfA2UbaCsrbHtjdsLaYHT5jBY1mhesHTbHP8szdjvRD5nKdaeyNpjEzCkSewwz1TwsFoCuK7hk",
  "key2": "4vBojHemEXaNPStSeoLrZeGyAmVh4PLbxAU3JPvEmtyX1Ppox2gW5Row6DuTiZudWHeyztPDwoHnBAB2eY3o7aN4",
  "key3": "4cchK8PzLtWUQb9Vjw5WDdzV5BaXxm7qHZR1zDTs4SGPtD3XwoYpWeq6nfgZwuhsnmAYmZyaJuyNPYch9rHdA74w",
  "key4": "3u2UiHQjqHjJ2MFnFJMe5Q1NrGHU8x1htNvFMEJuvmsfZWMgztzahFcU27iLjvPehLR6rvnauZzPRXi7U3Ci3fbz",
  "key5": "3d8j3VoLSYwaX7Uy7XVJaazLmujNGekGzjq6yYvA5Gz54wrCk5orZeCWnbnk2o1e5Kz6RBASvEoDod2s794G7V3d",
  "key6": "3ogSuGDE9QVZYkNHh9GRY8QvHGgej1SHShJ2DYt1WxGmRwKaGPKPQ6syJ2FQbF6D7wENMyzCNx6e19umDanVeLFa",
  "key7": "4QcFfyofzbfc3sTefKyjLK5XGUjy7GaSqzcxdCy7i3BQ4CMMkqQF6jstRUjgsU44uFTpLbVgt47hZbrJtXn8GFQG",
  "key8": "3dgo6V6jEW7mFUU8XsAz9BLCwbizwaqgvMD6SCqkt5uAWadCCB7fSFNcnrxRUL1Z6EwEW5evxA5b48cV9tZRtn5h",
  "key9": "3WcKJpafRcJH1Yxs9mv1w9LsiuNKSLdUa411HjeH6n1zuNqswLRCfkSHggoQPGj4tGFJgHd2nPYzSHZQNG6UVtmw",
  "key10": "3DC4bap49RgarWiF37D79tDDspPpzRMqSv5Fje2hjcjnYaM1uxbb9tS35rUvWmbQcURRRJsaUZEzAMsbj2Ct14yt",
  "key11": "SVZzDa22SCAevSGYgfqv63SpKSHzPNNF7ate91vHx8vCeWrnq364vtZhJTcnnjEwYbmyDCtbJWZ4DwX4LW6zTW5",
  "key12": "3ZKifQwQdp69gBNxeWiS3QZDceZEKPzHf5NMpR1tCuHoq8wNVjvvMU9pHA9keW5UpNRuHsrhmEyDdyPoHPWZzPqP",
  "key13": "62x1x2BQYsjCwmhArCtWkxBQntBZnov5dCdqzn8kKn7zUmDUDke8ZLCW1QzFJ782iBxzh8wkBg37rstxzYrjHayi",
  "key14": "4D88o1R7USQ6sBuKPghg2QbvDY7we4si94JTA7E67C3b93XkpRkS5cAaRSa2BTryHJaSsrQqMrqVbhVwvvZ8kVkP",
  "key15": "4nFANJNfkfKRjd3oAWCfDwwXpLy1JKmkNjkEDLj8rTLK7BR6MkYzHczpeWGe5GUoe7vp6KsGT42PncQEDxirjfMc",
  "key16": "3EQPQEqXKvSF1gTrfpCHkJZLRqUgL1VF79JWrn1Qm4DzQVyEvUqYkLDGTS2qioqxUqqvwX7QU24STRyPAeUzN6xU",
  "key17": "3vaz62oeYfSK7yCzZSzJaXTiFfUjzSViBj4XrJhgzmzPannkAzUrWwodFy4XFjM2knd2tVHB4wjhYuJymQSnq3BH",
  "key18": "4Qk6JuP1AACvSNNpKKyWLtsJM6ksAmKCpUJDR7buXXRtqncJQu9Aue6nSMdJSgtxaiySkKY9aXqQsUPQW3Hsmboj",
  "key19": "5RqmU4jZjeDsNyBRtqUB1h2hd2d7ne528BZJfSgKpwcGyRANfgLodXSCpfLTycctEST4QFPcFSyJD1kaizpRza6T",
  "key20": "4CmnNMYzCyydoyyGzP3L7qpT679QRniGHWQJBKu8nf3ZBZ4XvMHFKXmQSrptg1tYwCoq5Cta9wFQD7uCu1Rbgu2j",
  "key21": "1inVLuuLz7vUmbMMMGkhi4HoqyrtorCPwKMXSNkrfG6R9gaLdtCu2q7ZF68zHVvkNVAXcDUfCeXxvKW7mG3pNxM",
  "key22": "4GiBhdpzHMTHkjnb8xKZvsw8XyPS1egika2kfBoBiEhzk5XYtsuJsMe8xLyBsDjjHPZZZo7AAPExf4CXicG1Cqi5",
  "key23": "4c8Md324tWBrWTTejdmnUfDvnTT3EzfCySckSUFKKCG6Nqkj3T6LZxPUupzbvybq99Lpck2fPnqW7t85TXvnLg7z",
  "key24": "46nR46xbwayy23eATfEAGSRgkBhUzQkALhPyvZ6wRFyW66bQ2gPKZSU5QJoBxQgWXjonHAiS3UZcoS1MWxeiaHdq",
  "key25": "5zAuQuX3iNZEDp9k49gW1Q6jq7TWEXGcxzpQt6vowUMvpmuZ5H6fizUWXN3FA25isdgr1udMDYwwg8E3r96b2E5",
  "key26": "KnPQwFHDRn4VWh2FtY6MfXbJMjdgqurt1mn37K8HQYRBNVr48a7ypAH7rqHJ1jtuvdCDwNX7xfM1icWm6DvtvtC",
  "key27": "CYTBVHRffZJ44pxzEPWjg7cDb5YcEKq2fGfrwQGmjC5YQTVDv4hNPnVV5NBspjh8ekr5KC8U1orMMgewqFYm9Mr",
  "key28": "2eYKB5nFAdFMSLDbDFB5QoE1S8hM6dkQZW8erkCR5MDdzZdavLsQdJAi5RpEaHBH2QVqZaWVjuEmUfXP31hynx4H",
  "key29": "PrQ5kKJXLQbFRJxSivN5HETPNjNxg9gaU42gHAC4jpQjbhhzh3i8gfHBZ6WAEXYKRoErJYKL3e7VHefok2Z8ky4",
  "key30": "3oWh6KaDegViqZiNGZTHKC1cpqJrk2HpnFchiaPBbZTRXbFADtt6SqPt6uP6gaovRZLdiR55qao8iAcYhVFqKkdU",
  "key31": "3ymseUiAjkvQDH7WZZe5bhePxpfFuxnTkuoSPUPJRFGtGDDUNDLJAaXQ6Sv6m9eLRPGJBbeDAA1uX1ziqStdrPhm",
  "key32": "4L96veG35Z7k9o57CU4VEppa4ybCjQb3Lfc13ZoCK1Padcp4Lk2YywhiLB2sd2s9u3TgopeAcUzTLNkRY43AvVE4",
  "key33": "2m8UBHmMcVZ7tP2fw9ZcdFQckTBfHfcox4kDMN2ZWBB5VEr8H5xhoi3D6nb3cAJ2x84zrJFTfLes4wBNJrhVdocb",
  "key34": "22hmowUqJs44WSMywT96kmLVDFKWhiMtMBphWdXh9R6ikLMXhpzNA35PAuUqSqTatVM1MGmkMj2N3KhE2y6Jg8LW",
  "key35": "41xuTVXnVYZPnQpCRJGsz3jk1WoGYM8MxfPsd4yptaoK2qV5ZJEr2dMMzdqaeAaadiemcjBiiCb3wGnQ557TG8ss",
  "key36": "2HhHaWANXy7KCW26gYLr5NfpmSsxYzS6UUXYX6PAhvHkcXStVHV5Zw6NfsyYEsg42BXVxHJL2mgdsYpsiLTsd1NZ",
  "key37": "2CEtp5ze3Tr4svVGyZvWfyCaYGe1SNrSZ7NB4kPeGiZNrHGepN9x5GtDGHEssft8aQfoomL6oSSSjPpD8MofVWVn",
  "key38": "pLuwfWPzfvDsvVVnkHot1mfuDSp6PbiX3fN9NbHtpSRn383AxJPznJpmzATsXjuUsB9uS5jmhGMJbgdQPUHuNdd",
  "key39": "WumohUxGG74XB2JR1HkyjVz3go1fWUKTHXn3y5f8HYkkxdRfJo1T56cK4QNrNRxwJArEMrRhkmvqQgRonPAz6f1",
  "key40": "y43NRFUya5bFDdivsyzg4z3qeEkCMjSha4PkUbw8wno1RmM5NRpWCf3bdAyZoHWPfjGBonEFaY1eNXywGUyV34U",
  "key41": "31u6fwYGLMtumy6sJKMmHG9WkqEani31EHUvTq6NTttAwtrXzSBBvMjZRHfpMqhfUZnHXj4k68D46Aq2XFRJFRFF",
  "key42": "5TVNVYkatpPuQLBBRdHjyCTTbrX1hgVx9qwxQyDThxortMMVwbCSd1WUNMY2YeytY2UEYF6AuqHrQ1p2crLW1mzy",
  "key43": "3aRmKyn2uFH3Gam4JijN7DcoeMvhCSwErUjpgskGTG2wFBtGuzazHBANmjpxJG3jWDrXmp5zCGU93mwjhrhQTNSf"
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
