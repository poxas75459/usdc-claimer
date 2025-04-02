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
    "3dCqGbSitxh9C1FdAdhdMbqCjmJFsmG61DxyommLHSCcEtHZwhLfyKr2McLCGkqpFP24P7bZRiVRwXqUEo53Nery"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aMFVLGs16dZmzsPLs3VpCjfY4Kc7k75Xmt3YTBdjUu8ZRyZis6o7krYB6ifeCwNZfMZ6G77XxFohbmSokkbTXEE",
  "key1": "2BFKLE9bV5DtCyteYvqNeW4VpM5VqiQWJUm8UJ4mvw2Ww4KyVA2qccdLdQXpBUMarqwT8T2PXYAEjFfPRQCE1qRz",
  "key2": "4VYGpFmgXhQkucYqMcA8NeLx6YnCuV83M3Ad3w3rbe26P2mw74LoEafQnBJsbjvF2mZ5vaSsm8r8w2hCF89vLwoQ",
  "key3": "2jqeE69YYQzuMNPiqCKusH4fgMtkzHj14v7WBC9kokbyvwrSz1N6DCL3EwZtXrogjYEvpbPWejKLaKCobnaX25dk",
  "key4": "4EK5JdQUMV67ti4R71NirpmHLT1FZPwrCtQuZDpLL3TWiyvAkAm3hx5DE7W6evW4Py7tpDfSYaVbR7rdSigbZQDU",
  "key5": "2LwtgvXJC6ywBK51ZTe6FYQ4JvgS6DhPuiHCzsrwo29Squi8P4CyPCgZkWWpsycgJdDm4cimiiZpmnC6vocWDAmw",
  "key6": "4EdwXP5VZS4ETGwh4MUKeNDv5Kt6QBf2JtjWJston5iEAuZ7pqhfbEDsf3KdJJ6VGHPZsf6q5o9oEeM6qtT8g9Em",
  "key7": "mnuukjdMzSNGcAVewHgE8LepuUqr3WgnJAQzqsx23jqWCm5HAh3mhFUoHFaZi4RcCL8o5oqhjBJcgq7qq8EoMiK",
  "key8": "5pWFvihF8j2fvwi2VoUNNiWy9AMzLRHoW3kd5iaeU67JLFdpPixH6TUk8usdAb1kg6HWuqdzg143MPpp7RpGtF3o",
  "key9": "5mmC4CN7nfNrjk2QJpvHdAmCbVjFJSrE7hBv9FUDL96WCzNsHw9gW3MaoQEhHHmmRKbySPckVtvSpB5bVnzDsbBp",
  "key10": "5MxKhYfQAKAxWLkDkZv5SK1V8uC1MHjeYGLXZGnYyDtPGhMuNVfPeMSTUXPcJ8K9AqFwVGgwx3R5kYMtzh7un3c",
  "key11": "4sWjgsQHiAmc1XjXQuYykqoh1pryfhzZ3ESjHZaguT64PvTfvSqAwNAusZRTrJr5CQMiRgDnEtocVr3Jeta1sbkg",
  "key12": "3c2t7zYx7mei8uyexcm9kv1FKX4pPjzQ6BXAgeNzBD7PBk85MnNfZ5GSTCdPy67RJJ2852d4Jy5BQ9oBLBsZcxz3",
  "key13": "VSjAgMcQL27or7fNoTFXchECvi5RFqrbmEFwCYnvdY5WtufcY8BBXFqKBv93tsaJ3HjfdX1HnfT4x6svKfXYZD2",
  "key14": "3EVUcdvbspJeJF7xHR8QqhWa5JFpyGekqsLNFTzgymk98Vs3qFokUsX3jaFgGV7z2BcfqNe24JDSdR589VUBF8tv",
  "key15": "3U2osbrfbvQNM8Kftu1vUydvPDQMVupRvsZ9E5MQ1V3p8FEbV63xDXrkkk2PLffozzAbKaEypqYcACTp7gfrr2rT",
  "key16": "2xin2tjtqHPmuaorBg6ihuDruDe4EgCznGceEgq6Cc9au6FpGcxPGw2E1cn25bBQqFg6J8DfBSGnf1uhiHbVRebk",
  "key17": "4UvuDME9mGxwSEFxALUzBQsarJ7mEsxVbavLhLpR1Fm3Wd5LiLZc4ydLZ7QzZVQskzLdaPWg9BLsLX9JQuN5Y7Gf",
  "key18": "5e7vdrDoojXtvjSGeTRpdH2V27WQ3oEqZv3ERn1dAud8HvKZYUYEKkri4LaMKV2SfScvvaVCNnT2UbogUZb6xiwx",
  "key19": "5D3cFdnE8imRUcNFFJNiiA1Co2kUEv4jbwHFKY9taJnnznvifBmAJNwN2qsvCYptEP7Z2Q7SDPW2YHyUp2kRd3ib",
  "key20": "2RK4vbfo2GXdi4jA2UHJfhQnbFqomf5Pmc5yb6NMxpfM5zxDmH3yNVLQDNYhXtcb4icGsvbVwVAQU5P1ZDrqyZfT",
  "key21": "4gxs4cxgeHdJRAguzJaSVHJQudzQPf9KST8Dm1TWRFou8wgjYY6SEreou6LsTRQxCgEJDX84x1cHMdie6sqFiowy",
  "key22": "26KSDEn5sSo1Gr9oLbJpLaaFNTsUcENQTpAZXCNubmSrKkFy9hzres7q91fTJG97kRrLurB3oJjFatFdZdXHZYju",
  "key23": "5i8N9x4p8YaQcq8WQw5KmEkz37yZXiNv5eqh8AyeeLkb1ZBCuJZCQu6zVSZ53n5NLKo1yRrKaGWLjxp3yweLmvEi",
  "key24": "F4cNvVWtnCeg1EXthagH9av3J55T1CJTXNEbmu9EbpJ5ATMtiTadqdXid2ekdRAF3UdaHtseP1sEUwfEMXBhHEi",
  "key25": "3FQ93vQ6ABiQQ76EgeaKh76T3ACnopoHAyiGSjeDZVDVWSvd9kBMFbU4GCbf5MifKXeuqf8LFKRtqLrAkXvAnRMU",
  "key26": "2ZniadA88yQNTJnpnSWAGciUFcpV1mL1q335rmStZP5fFCay1zQ7QnmdXCSvZLpJgqUwHEpYqujSbddCT9VHWoh6",
  "key27": "5qAzCTFoWdjP8kYB3zypnJPEKGVw8cwrGAVgg7hwWfuUmTXrzCHrpT9cE5QZNvmt5JosHMZRhcjHfBHLSUtSUL2G",
  "key28": "GV845PUhdNLbCMMnzVXSL54JSeXBwRAmCBiRQqqjib6SoJWcGGse4PYSRPtPge3c9EUXCGbZZLDxw5Fqk35ezrw",
  "key29": "4wJfhS2pWGKFdsfEqST5GSLgqGwG2QD43Xy65xHvTMkbRaW1bvyWYcKFjNQw9nFGtdXv3vsUmpPRfYN381v35YTs",
  "key30": "632qXzkW8MHdZxYgf153mf8nJPZCUJ1TNfLGcZLEuLEmc7xsdTfkyjUgvhuyZ5n1H23iSrbkVH1R2VVZc3F1NCCC",
  "key31": "Uy7dsi8hjMUDLoUcEfeorocbDkbYS6Wm5wsomgtCKkSauwTUSQRd5qi7TPBhsWMrVg3DD6t6JHSBVxgkCSGR2zE",
  "key32": "4wzxbZrEsnFEv1e2TK6ZTXBdaacCe9its5quq8hSqWCZq5Q68S4jwbPA1sDBT8hf5a8MZoFUk8ddtotG2Gch3gnM",
  "key33": "2UA6dTF62T6Kfp85kzK4289GoB2jKpYjnyX4ezPbDXZec6NQZwvBiigCCofeQWgQ4dQ27LnbK6rnYckGYw7diLnj",
  "key34": "5LkCGRPtbNAyq41vo5vmKmypu9o3aFXY1kcYr6hyJMAdZvzC7GbunNK2M9o4zX6zddsXvGiZ8SfgGTJ4qBibCofB",
  "key35": "2ZYp12kmD1zMgy4AMdvpDbsqoq9ivcmPzH6jJUqKLF8CAJdkR1MVDfKHxaModZXQUwVkkEnVUhU8VBo8GpoLS42o",
  "key36": "2ZU6mcZ8hs28GFeNCLwKC1JEZAa6LsAwNVNWmfevUAsMin8tRK9w1t7Uekqvg5Tc2WZuZfNygsZd6NCYaaqUWTov",
  "key37": "3frVjFKkMZgSqRGokjPNJZAt5Jgd7Dczv47AA6fMYxaxDNv6fghYiNQsENfetreaoyZPvUskrN9jQ8dMp1hvqzaQ",
  "key38": "127mDxk3qhrj3f6DJ2n8QwDWeGGsnmEyp35mzE1Ypx9NvJm2kwKqozk4S8mJnsgJLYqXATYs7CEbfAqk6jkvWUtE",
  "key39": "4RkTeXSbvd5d1tGNcAjMEGdpjeBpUt1Zc1mMcMf99nKSrXP3zwk19isqgeQnQWcFRemAmGEqh5wiN4eXptqCFRZg"
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
