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
    "5m8FX3BkyiGJTwgx3wjJCZY4gDWaw3HwoCUXNewpetSgbrHpZnvvphyDS5E5XZw5ENuv4WhUJ6tpHN41L6SDVPoT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wjmvjcy8fEmjcwbgWzhP25EkNQ6xzmHNnJRyfE9GJLaJ1YP5NALk3D7tMphKYDbRBEveHbw2rrFoqVhUJGXDbze",
  "key1": "3jG7ybEnVJEr3afTcb6CBy1mvaa7Dcq4EYvfafsEMiMtCTa9z2LzA6rVWDPUzGK6Bk47M54UW5WsLhCUTEPTzf2S",
  "key2": "4tzo2AGx1dnHadHXLVhu7DhXkypTjy2tC6Z4Uddnw1vKgWRGi3wA4q3azNLNnHGwwrSTughVbfgte2MVw7ALPEfF",
  "key3": "4np7CWmECAju2iqMaqpxPL4RQw33AhK1neXvLXo8Z4D1YShrYqDEouzKM6tSKhKyqsHVCf2Qade86GNskHuqYJm",
  "key4": "515jNoySWALXZnzhDG3ARVLRJS7z8XsBdCEwwZ6U7XAN4gArYc5J3nfyi89Eq3ZTUwBP1BSwQwYVjh6PAkhozLWj",
  "key5": "T28hfkYGUYqEJL9XBfVSQ6o2Jmzj4KTHgAMQnphMmwmKHW7Kz7DGH2dR2FdThX9AWdaRajAWpVuFwzsm8sPQ8b8",
  "key6": "5P7d2UYid7cW6paCQzHFc9ZqBvCrsX1WUWck7qS3xsbZUP4LAtm4ppgrZrkoPudqPMGUgZAc826CuaDH2aKTcxRC",
  "key7": "2YpFL7YntZ6eqq9hjUqw7T8vMXhgYccCHUPiJCgsV4YpH3d1pPFSHqFJ3Tex9BGzoUrzmACMuMT25QkRmMFPJYXX",
  "key8": "2K529BEEHZitoodchpvjLZcUykns28PKCPAbC7CUCMdNGR2ciFZGx8fzyi6CBmfm3GpQPwbPNu57LundBPoyKcuq",
  "key9": "3kF4kuf7ydesmv4Zts8vzXcP93LcYxT3EkyTTfhLSNC4Yp1Z8qtysXhDe96pvj8JHAQguWBEZMY6JNRnTqFVUt14",
  "key10": "2nYmQRfc5Qcx8AN8R4cfkhT2zVJgcbQWyMg3nMER3w4VjxMfbA61S88mv7feDmXFR76f7Uwo8mt6QhjyVgXsoFvS",
  "key11": "G7uxKpLKiZhRyFc84r4M2zy19xrQk6dDvnVekc1gFryv5HTyDgV7P5KCUA1BrGLhWWy9VcUWkcmm4uiad48YcX8",
  "key12": "2LQU8jebenQmGyQWcRB47irPJ4BJtqK3sHjgQDhS7X82w2Tf258UFjpPMCZA8ws2N9DpXXhJ1ZL7wfgHgKKeWini",
  "key13": "6mffwuRcbnEgERhrPnhFNKHppxyY4C1GSiVGQpfdWUjLBgBfZQuerXW2U6Mdu9XcMhhtWcBLvJkGGCayVQDep8C",
  "key14": "NWgS9RtKdUwbNCKmasgLc3ENgpR22zb5uMz9ej53d5L5AcgZs843itTWZYMVAvvtkrYMLMdDyGMvEtm9fWW3jag",
  "key15": "3uWCpTb6yDxfAHhyikZrivfTk6H2FV2sFYEQ3ZBuXp1G3yj4jNad9LaA5cZRGnYkqHB1RNQ2ozfCHAeRhrFCwSTg",
  "key16": "u27rM6ktYGBLpLucGwFagsbcPyuwqhtXNQDvQayfHSPwBUFx8UPsduVcxyJS9GHWB8xRrB6KxPxwciRXaiFB5LB",
  "key17": "2jYGf6W6snNKTixYUrv5zhs6bFpfhUaXNpQYBXj1yKhW4aqfGpu5gfuza3kfLQaWtfe1Yd6YgaFU4eZgXvxRuwrd",
  "key18": "2qNWFh31VgDg33MV8f1eUukVkivC5oG4iZoRzWeR7Vnu5Ndf1yFfJUUjVFJWH7bZvNXTnHn1qSfvtzRLweP54vrh",
  "key19": "NQkfyfPxL99VmLa8dYv9UWrg9trFPrCvuYEcWdH3xV7UW6tjYSCXq5J1NgQDib5QPiRYkagf8yKWTxvsaDyEVEW",
  "key20": "aW3T8Cr4qBD87MNbqe6sxqfSHFMQNWnLNN3Mtu8oRDjWPsWoLTbSf5wZvyzSjngnP2ksqW99v5gffXaxnxTgKWa",
  "key21": "48agvprb9eNUDWuifW6aFR2bRUPKiQQ4okQ5ZVYrWDHftnQTZVEzSyGFRmB7HHbjeS7AdTT7Ve3H2veNbixwxYGc",
  "key22": "5BTpXALWTTN6ehzE9M4mntnZTpqqeVJxi1BgJvGzX8uk7uYF9CkkX3QNiLVJL9cE8DhcdBNR48HgcksvhbtoDWbk",
  "key23": "4DjSLeGsXL1SssTzvFCevhba92NnqP3yJiKLPV3ng6P3WmFxa9ai5MmGbGk4HoDQ5zG2xrxjsBkDBnTqjFpKJAfi",
  "key24": "bGfne6fAjeCXQrFAuC6nRaLCrR5CSTdGCDFn8EobqjAypbK6hiTJwD38x9ahfDzShCoZnpEv6q1MuEGaZwCDrdX",
  "key25": "3Hayja7vBhFFfPTWxKQ7G2TtrtACSCYC7QaKbrxJFFweSwEj6iZ7Fm7QtmPDikdVQXtpc7mf1iUBBopzZgsRL8Ey",
  "key26": "2Am762w7N7mRc4itqrtA4tEmu4Pkpzdepxs3EcG9z7ar9pyePNWpnsKtZLHs796gSahm9ZGJMf2KRiesrWvsUUnV",
  "key27": "2QF4RN9onCVchUKvRKPSG1sAPXjrwPwREY47tsA68DmKbp27cHiU24tabeU4a2JZS11ifPc9ZvE4Hsc97rSuwn7D",
  "key28": "5C7YiViCxSLrHSGCeHwWpYaFbASHyVxqcBq7mWfuGmK7iSuromwnRpddBxwPm6jRBm3ojkbuS5sroXE395FCyXtr",
  "key29": "5mRHmijHT4mejJw8AkuWYctjb6Ck23ksKY61WhjGtNFfp4CAyF4qPeQstxvSJ9U7y2m1Bz6n9ue4MWYwFY18F2fz",
  "key30": "3iaiNjLWKNjYow8qXrW6WdadGTgU9iTtd1JjbWDgRE54Gz2324wQbvnhx5gppAruhwPp34DbhSfditqayzTwM4dq",
  "key31": "4ry7zV6bcPHSb4dYyoypqThk54QuJLVk5JeZ12iR9qe32j37LAPfQCNZgc4V8qzLfHMj3BzWrYjLU19CfkokkSso",
  "key32": "49ieQGhN2CKvoBnUb9AizgVfipwNSKVENib57ZiZmymtS9k1zqbhQTChtQY3ggkKUkZmLcnBRCvvZB1nYi8VJRc8",
  "key33": "B7ZpkXN3pg5V8C5f3kYwDt9vRcRnKfVy1EWUFz4EYviPLwv9TjU4Zm3e5DFUp3Php3pHSrcSXDX5zvHrrL7AWRG",
  "key34": "3tjoVALubu44XmcdrfCyq4iGnVMWauWh1AUNsVHHkZ8vfBuKSiFiag44fyrGJiodtfV52JtHdKvw1fUjYrRHdAbY",
  "key35": "DddGKXoyrG2sS4Pqd7UZpKXZUY17CJspSLkBaXzb8KhTjhCFtLmxSnjrRbTMiXv7AKGCavbpuszPQVmETK8pBzv",
  "key36": "5wrTVsF6QmtDMxKMnhPmbGDfRs7kY7BkQdEZ8MeoVgnGtNYCim7rCeW7fXgat9XkfV4aa8ERdsQUkdHoTaypWzU2",
  "key37": "62cQLybRa1cep1UD33xXPP2uzLoqf46vxHYZkTH61fy7g4suNisTHR1j4h8xcCNS45kD5sZbipMBx5jf5etekgLJ",
  "key38": "5oFG9wbYs9xz4aEKmsrbKuUWBLKEHmtVhR3cexQLC1E1vNAnXAW3cEn7KaJxCQfNxU2wrHaVbU14nUZD6LDN8ieQ",
  "key39": "3AFUJ9oaEgAA9UdBe2soQXyNgsMz394jbjaqCTftsDk35gira2WVZjB3SWddzpnhBLqCcY7ktrZRNRfdiTT5qswS",
  "key40": "3bu3sFyNFcELzLAsujayjg3Tz7txXPyTQy9pSgaviKD8cf6TwucPg2Qw8pUCDN3wxbm6mPVNZYkH9YPp3K7zUbac",
  "key41": "5ZhqEWYxjhexUhh6Tz5SXwiw8EnX1AKpkZXw4hQenXkAY9Lc9DbmQRwHyBP4x4cTXWuriraruLEdez2psYz9wnre",
  "key42": "3CXFyhJWms7eXHUdGNMwDx9U2rrVBXYzKYnoLekMS9zfsDLy7oNFDbrvX2tWPC4udApYuRYi7mVqcwA5RZiR5EjV",
  "key43": "67GJcVRLr8EVaTR5KnS9XGhpVNVvjnGHNm9ocYFdvHZY9dJtjk2tjK3YDFDArjqCuCVvZdZERa64ZeNUJ4uB83jQ",
  "key44": "4ZZjPpvD4dcPsvCYCzVhbxh2mTd5nSdeQ76wWxCoccit3tNMLCbkM6AgS4RNP9Kih5BrsoYC9tWxLLz762ks7BdC",
  "key45": "38HVMZAR99YzyJbbCEksVUA2fgsk1w1fPeYZsDSaKysoGt7Z8DJHpn7UssbsT5a5j3BJDWKzzHrsHsrd9Q62H3me"
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
