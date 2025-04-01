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
    "2bi6bntnk9BCBVNCrQk7ky16T8QgHAQzoy717UDEaFMEdJ2Ty43bGMs5s3a7AedFcrss85MbWFCx8yHv1XrUyxPk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33st8uYF9zvjtKW1MC5ZeahkxNvBNUUVUruKqfcLsSLAK6zAWg7wBEnkvgGrFi2irEra4qxrLZvVG9Wh1ACidJFd",
  "key1": "355trkTiBpRCUneKtX2zMRDJJUsW5GX5K53zsnCJRLDbsv6hkeqX9nXjC3qF5YytB2SEGSfUWM242fXNfF337sMy",
  "key2": "2kByb9vBMbibzNBtWjXuLoEMExqb8NqvppYS6HowJptF2ek6rR1KDGXZ2zmCDHck5rLR28RVaG5Zvau4wzEoJMoC",
  "key3": "4SKShDnFWaAvHqfNc773sxbLzPBQbi1ojy6EMGKg4v9uTY7zgsREkbTXmXGjpvGjJFQwPDnnt6M7oaKPFhwDqohH",
  "key4": "618ri9EVJKmxUmMRPmCAmvQXbYDgVZHQvqUxMYEoRXuH8FnXy2cdhL26RbPbsbj8iX2oNyBJGnbuqSZbXEaXGXj6",
  "key5": "5jQrQZje7wT46kvYRAjSxMvpHMzFeBMwFyRSDKA2Zvyvobtedk9ihESUmkHAsYT9GWj3AtVvCF3MN2votvdPBJCa",
  "key6": "5uUX22Nx7b9725in7rKWRiNFo8bYBEjjWvEyhYTkJEfHGEjijTEZqSJ475d1DX46o6fSiioyQCxgfk2mxStEPmXX",
  "key7": "2CxhdCDDmvWXiWzRsa11XqFTQskfZfMqaowWXcB1J2dpasg4NH6GfmPZLTUzK8QwqKbNenBJVeqDQ49NRTDWmykw",
  "key8": "46QFJRjAFYZkA4ZL34cFMLSnZAXUpe6EB361uLe1uEwB6qd1aTDpMgddXSgCsFcgkymAL4KKMcxcnmCxqne5KXif",
  "key9": "2L447ZzXZJ8k6rSmsQTftca3xBfcyHxhJoyYA3KCTFCaymnZcySJmew9sFGVCuwWp3Ex7k5KJPXBwxC1pY3BkDqR",
  "key10": "5pRGNopJMG81bCfZqHgRkEN9L4fkRQW9bxGyPayz4WssNDikzTELDrk8ZhUYVusTv9pjmDAuzrRGAyfThebeqqh1",
  "key11": "37kmFAuztf6R3booSrKXCKhdmbZ6wTJEAXQ2DyQ3Ddbz1T4QTUHo5bVZ6wnmERAvTyreC8Lxsti1nztWfU1AA8eo",
  "key12": "3G3hJx3txAkXtvUZ5rBjJ8eJvNozHzKoTjfdpzm915DX8DbqotRCFupV3cNbW6jNxZyvHMFgjArkSXpe4NTer25V",
  "key13": "2qPHFDDCM2Vbt4APLEzhqEFj81sFpQrzKt4TrAsacQQAUga4fk4HuGYXqxTjA4YFSUkGQQTDErESCMueiGeiydkc",
  "key14": "3iBPArmbpoR87e9SZp2Nkrv5KMC2y3m45HsVZcWdLf2x1Lfhr3CgX7c7b3dVxLGaahGzJPRyEq6jUf4gHktx6ZwN",
  "key15": "2Fp6UidRJbUTecVXQBn9GGPPVej99GnaULwXLVFeFC1XN8gFF9Kuwyx7XHSXPwAHkWAA3jsMTQ94ZALmULLHmAXm",
  "key16": "2B8hm6xaHVopmCUpk6F5CybUNNUZdrNHRJGLuPjDKY4hpWwyeJ2RsqJaFgk7CaUrKQENt5qHXYLnWi5cSoxfxSCq",
  "key17": "4cLSZKKJULHz9v3KBZnmzRv71U4pQoy633AcJUbdQMzePHVuuNDy6V2KGJnvVzbfHDzX74urfgkh2gneMrdARD7t",
  "key18": "2yM2iMJHJn2LuyPD5HHgoDSYitwJUQR4ske33Rfp7foH2fJVEYoYR89n3gB9R7UdiPuKkmXCcwy4JKWhhp7fFaqD",
  "key19": "4WM17BTaP4KuqsfneCfzRmHQgdM6M3Xf2RwcCjN9f5bAx6btJpGA4ddwmYJchBNRrZpj8uVMDjWMY47on3oSPSrF",
  "key20": "29haWhmTUYC7ceQ4YBpotpjB2TFQiWCLJfGABu8Mv7WgsuC6PowWTXYgxkxuPuwZ2qx9x3CMJyjwWFSSRZjuaNXK",
  "key21": "4bkSMPw2G36VyfAT7oLEi5p2BQZ5fhzfanXM8mBZi4cA88FtCGZPhfNU4GEwhnzKH7TuUAa859t7RTK4zw6zaWAh",
  "key22": "3kmuP4TAEJ5gPfDozeLh4REBBNihdv7mkjfYD7DSzXBrzTE5k9VM4onSNFRuaVQyxSBHdyMb1XqVBfQWewFhupmW",
  "key23": "2AVim34xHXEotz6cJs651gJYt8z7CcUxYFo7fTzsTAPwnfMGjawUbchyiPGVS3LmysLfi8dD1zM9p7CVssXQTuxo",
  "key24": "48WQskiSg45hsosSuPnFN1yjn4q8MWzsSrZ3hPJjysaEfrrbfCdNXPxvoWSFP8w4Dothrt9zHwF7jLNQVWGDWpiT",
  "key25": "5KTqQBadvjbuA7ib4ENo7gGSop48ULyX1WpKVLsouFMmK251VyjgWFDPm8wPHqcAW5GGXrtrkaMJoJgWgbsLd2VA",
  "key26": "2fqu6U41T6H9BLNqMvtPxgCDma7JVc3AxKJZ6AoNuBXWSXMkeVroQGD9Pqp7L6DbyFerA9n2UTRW9mzHQERuUAPQ",
  "key27": "5vMfaffpFJGRH6v9wyY4JeEPuzwcBi4nzYbgvt75eMpcivJ7BCRDvMKcnxnnLAiqHQPTKY3owXkxHDE7NC2HyPUS",
  "key28": "3pRuPYJ9XM2PCg7fZhtAhkhEqpTRX3NNYkbXf8aothN31KHPHQveZrxXNY9gPtrSgwJi2cZWm2C6RxALGixtjWQ5",
  "key29": "3ADYXNdRb6weS4pbf27dkTMNy11UxTuGNZvLXxDu2ehujazyKydo7ZutMte79miPU2dm1ZeYVtxzTW2EH9oEfA7w",
  "key30": "22mPtLQfTrifjWzfHa57R7NVVNhe8VLcfxpDfEUd6fP1eFWYAd4BiPzMmd5SNA3XSwh45pVNhDb6mXZhmL4fnh5R",
  "key31": "3aBvDZiwRftRmSYXruVictVigpj434m4a163tEsvUT47unAJ6TzKs7QKJ6NuBFbgwgcLMs9aAisEgAjD5Pse6WQD",
  "key32": "4TuU4QU9SmFESMxpVFxCFUGyygn8wzxMwUhG1PYuuDGKyn9CaVNRfEWH7WKprREzgEYZMA3YUjduZypA3V7fLFXS",
  "key33": "45kj6MtbdYUhebw771r1wR7T9FxgLKRTWaiiXsXuHNZUhZXosDAtYTk6Le7Y5dJEVcCs6FPLmxx9ayie2nu7m6JF",
  "key34": "3FZbompnbGTw6cRDxx6z9PDwcAmN6PtPDFB46QUffA1cYQ15mcofTXjTRXvCUiMojB2DkUxFwQGBAbSnQkf3PkE1",
  "key35": "4LQt7rDdA7EbM5rGXpE7BGVQxKJghpADaLHQZz6ZZS3DAtvd99E75R3Yjjrr3moBxZCvrAMUdxoubvkCWapDASRj",
  "key36": "69FnvNtRhmGNHqmtb44hj83ph47wN9MtPMX3zLekGd7y6puivZ7DGfsbrU4pJqsNCjvtdW2yweX2ZpoEvbzJi5r"
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
