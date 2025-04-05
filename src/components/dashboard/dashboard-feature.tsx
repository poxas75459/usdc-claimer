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
    "238muLvDQDR4XuF8TkmHaFef8YT2qh4ZEjA9uG5wZDwPXtnK3i5RFqvkcsxznddq4wyeQn34agrt5VUxfzZyHqKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jFuSJCTp5PL9YxB9LhNJMGZ465L3AdYuTRhMBwMBRXQtwVxhTEkC5JiMLWws2ps8SrotnuH4rJambRELaHcniHX",
  "key1": "trcUmUa5U5tKJdevWJgHDhKDmq97ZpM7CZmJewJ4KL47Kh9ox1WoWvGJ9fZcn3L5s1wLZM6rXSHksvgJALLFWVg",
  "key2": "5N2onZ1npBWSuV9embyBKMkbe2NjXHffpw6EZ2wijnQyfqLWY8ro4W5zP6PNJNsvsma1ptciHhdUkA72bgDQp9C9",
  "key3": "2Vu9naP6rmLje1LBWxZyoiYrDzXzSjpxxheNkRHF9RR26r2CY2VRT3j6gWEFdSMwkAte6VrkXrdRi9BKcDcHKsHT",
  "key4": "4NV9zUxCu7YsQRNiiMWtZYEW7y2jgdfw77PwvUMs4nfMTyGuFYZbjRgYzUK2Fay4pMHVdg9LY994VvFAN5SruwHK",
  "key5": "vkViep4WNAZ77RJs8JVHd53rmSHQVKDEiwt5WDKckBemTCtEdM3vY11ikLSWBaRXfThCqb8nA5GVkBejoD7uBaR",
  "key6": "2cykMRovknFEGTJPL9hqUZ2BySvEp5z6jxh82Rj8BmUzPcdKmQu7TkpM35xiFWFTKLDLEztGFwGHYXvVwGsEWXKq",
  "key7": "TD48oMwbE313Y69yPiqxa8ukapB2W8cbmNZahnqW6jV7iNZpavmKQyJNCx6U5ktgYgKuLPqDRSaagr3DJSzH6BJ",
  "key8": "5KfjcJUegZ4xifVNo2133yjS83iKkGVVUc3XeqZrfbbJxNhQeC4XEcGuYETDMeV7Pwm3EnMYRYt4ZX7fRc5tfXmK",
  "key9": "2La2WhuTFWd9ZFiXoRG4ouEXHQSzPNJPK9BzhNVkNRJrFQdGsXB99SBoAW1bCHL1Mvz2Xx1ShWeUEWHtQms5dn69",
  "key10": "54T1LV6sFJ2KJDcQAtqxHPpsbXypvxZAWBtNPimCbGvvNhd2pc69CUJbJL4DjB3ay9XWNhpPs5gcYdipyYSLNsaV",
  "key11": "3sFLsyxKJrLT35RP5b6qr4jKbSr31Wb3GamP42ywj3uENN25LycGzGAZmmRVCYaFFhvRcYemNgqpC2GMKE9PpSTj",
  "key12": "2Ci345YyL1J3wAfmDAYM1nQX1dgGBzRvS3jqbguUZnGCrbhhvrdcTKgtxRCWZfazjsfC57WDL77zekKRo8xT984e",
  "key13": "4w5QZiUeUoEBXsBX36ofX3p4ExQow2D8gshJ1kLXmkdsZtmCd2SZeKvU21uRcCXzttx9urQ2CKb6vSrY3vjD9Pu9",
  "key14": "z7RVy29wmQ1G4ZsHmoKGE3VYsi7LgWt329tPuWN1Y4rj3tVUmvGz71NtNTgSyUPtdepDBiZZvCnGND6VHQrvh9r",
  "key15": "2ZQ1ecb2zJCGm63yTLxpENJV8psdc99t1c51k6aszgnvWSxPVj4gkuF1m3FekHBaguCo4SyxgqJ5czsDM2bkZ2AD",
  "key16": "4MW4yG2E5NiypGYXBKS7hF59kQBuRQnkwqAuRajTU4W6Zx5t1wmNotuTvLVSgUaMAnJXNvRBcfmpAiZLC2qrkf4r",
  "key17": "a6eok611gMB5pYPej7hDabgLbuAArrf6KQYnRR4QcUUJCuB24EpEfVnVDnRZyUwG2D6875ej1REkcFSPu2DP3ku",
  "key18": "4VHKNNX2qrHHSbMyC19ZUdv83kaU7H3hYjYvaC4Q53YD9Yeq9iReUFiU2JvYtJxhPsiVQtK5tx1NZL62VFmRsDi1",
  "key19": "654KuJo881fXASu5X5bVKS9pmZ47MXqhTCEupKy8wipZs3XiDKUrsECDRhVsqGTkgGydGroEoitV2ua6YDoZHVLC",
  "key20": "56xGA95Ls2nd4kfqF8XdrHjN74ymKcr4rVp6xHpqGnFxe4ge5TMhoeJ1F9MKXJPvxd1Xg2eMjhy16cm1ebzyCQCG",
  "key21": "275cuxqrZdETiGrXJ6KUWu5hmtgvVtCoZjwSC68wUSvBuRJcFpWarBkDzTT3aR4YUahNgaSLKBW1hQvX8ChWPGep",
  "key22": "5EfwvtyutPBKryjAgkMn8AhQdACEFQNVhveboJWc7d11UXoLu2Vrb2pfmWxgHLQ56PQWqvj2jha7MPdQ8ivgSwHu",
  "key23": "5enPRu78FPSMcTficrTqg7wAonjvdvVU3ii9VRYAX9b3stBNjsn4ZmuHGLz5kVnquKVu69nWfyNyr8bR9yaRAMc7",
  "key24": "4uNBBPNYuoWmokzKVojcgUwH4dQRbqWWMUxNNfgDViwsypJuu44Xx6mGjNsPnWNh6t69twbcDUNzsx3z76tZL1Vc",
  "key25": "4WRST4Ts7PuHyFMRzvkwYQ7QYhbtiYg7CzPkYbTE7fzc8P7Dpcuu7pC1zSjCbHBCehTSS92MvAtGqiKqrBc5fQuX",
  "key26": "khASmZomdAbkxu7JoSB6Cf257AjGZJq19LwTFsBhc6JEemEuomMbKRjbDN5t4uCmCYzzBLsx9ayP67wQ4enSj4K",
  "key27": "516rHTv5x3sZSe8uyn1W9DdqYdB58UGpicNF1Nsi1rWR7ZGcEE1DnHJgCE1U7owZvzqRRDfEw5LQQSgBnNw21cQm",
  "key28": "p3P7rHJ1LH8kWkenycXZveK5QMWkpq5vMbms5rNAK3pJBpnvowRXFpomybuBwZRwobH2aSqecmdwipVZMQLyKcV",
  "key29": "4yHc4mWjY6Dz4WbuHjZr6Jp3LhPP5oXXNNzwiCcoXxdX2eREbw4FHjm1LxPVAndghsTPt6GX434PRdKc1xsdpxjR",
  "key30": "6CMVJSPeifGtESvNdELvPPFszuoQoHHQdp5BcfaEKZVaNSdm79FKkXgZvrtcd1dfJ73z6R4BAqxNEiCx7WPdC4M",
  "key31": "4NzZQ5ygvALV5aYMQzTXszRdujtMrJ7NkqbSYLaBfgdRX5Ym1gykhiFtUi7d8eBoAdNSKUXmxUJL2yC6p8fYnKew",
  "key32": "3uRdnEdBAutVkN2HPozu1Tv89mSzJqRib2Zxy73S76B7kxzBy9xfk9kZ9FanWz3BwVbX5y15LdMywY3kXUKPxXyu",
  "key33": "ur5EoNFAwEDietkgA2uM6tb5U8grf6FC6j4kjgJ3J83xwz6rr6qodQKH3rDksJWEcaqGxhuLzRETm2kmEhqF2N2",
  "key34": "4g55LP9KMKkaGJNMWG3AFjpieGyhXmtHjHwV3CeiRdUht2B6QXKvJg8dnEKTwRQ2vS6923UaVWUcrm42McmtUadg",
  "key35": "4qPi3437aJ1pUS7ygyA6XvcK8ZrCoLJ98DK1ypPk5ngBnEiZ4giYjeLxtyKGCy8SaCCW5EV863CmKwav6MMdhRtc",
  "key36": "TdSFjofCgMKrruLcdcZagw2zW8mfQ63WapFKbRxEiJwKPimvxpSEV7d9YKBY948JqnhqVugqqENLyhkVB8UvDCh",
  "key37": "YvpiGMqRasdm1Ckm8vgFry4kPQpUu8DESmusezuX4TodULJbpEMp44QttkdEnPRiqzLivDcp6LguLg3c1YjDqo1"
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
