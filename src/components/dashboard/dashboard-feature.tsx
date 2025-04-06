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
    "44hSbNX2jca6d5LoarDJXXe31TVSaEwY7opbc99UeT8Bwy3rop3QCQbaCpcgFUDS2Z8XWDxsdvHjXYRYc9pjQtuA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SQPQLekyPoGukmiwuBhuM5FhqhDkkNbisrFemkS6Rz1kVNz51wYM4ZhnuuHZBjsMaQiLjhhtP9qfCtso25HFxA5",
  "key1": "5SHQvP9rz3Pej5E5fo5b6krCHssVKPaiybrehRYfwuovVbzsfV6623DGUDxDxmt6WZ7KTY6sbgVnatxnF61zgwik",
  "key2": "4wLPucGUR76znLQJRBPcKvHApo3GXq7F6cGXcExikMJHyMhw82iP97Z6wDuq1pR4FM4k7n2ffEL1YUpQ8NyQMsVg",
  "key3": "8qEQrQV3avuVhaX8LoBoqrFNT38GRvuYL9JfxKCYm3XhAq6Qd9UAVxg72m4PbgMdkerqSifcTVwwvtrkQmsYCiW",
  "key4": "3RJ7A3DaR3VcTWXcJ9Epz2weCCknyQQFE9xQJCxgUMBD5eq32KAi6N2sGm1arukjmMXgrRXidbiniBa7cdZ3kBJi",
  "key5": "4tyfWv2o2pbacGi5A5BLSRrLBDWE47BtFdgwev4vPqNPkcrwMTkhb74MVGpn9i7T6pEjFbVxRNNVW2KxJHfmw8W5",
  "key6": "4rWGXznHjx96x7anuzxbL6bvdiHNx6X26HmEX8TUVysfVAm7diAgQAx7A4ycRTEZxjTCQ7DtJb413ux4qxX4PxYN",
  "key7": "4kHMAyDAPffnn9pfAKLtJ3qRZF5nZ4gfdDDchGCrB9usXf7i8wbY9Sek1YkqjjuQTDh5rvjyhcAm6RhNHaLi7hEu",
  "key8": "5oYn4RmYvSmwsgAx6frQ544CtJgPnrbg2t2LQXaRXP5grkQsr9aYSjayPpWdjvSc5jnMo3o4R6QyXf8opk79iVwo",
  "key9": "54S2Yh3adi7Q9WGtk73dWdcxQ8YpN63TUW251bs1f2Rd4wLB1uJxt6NBPvTVB4LbhnzUfiHbszcphQ8ptPK2u87R",
  "key10": "26uHFXhANzv6ogu7yyP3QpRS8THLZWQUeauwYnJuWqLpCF2w4Xv9eGPmx1T7V3DEcQWUi1mvbi7K2H8T2fpdKLu6",
  "key11": "4VDhkiGjTDWaddxHC3oRZHqB7dTze64DamWX81V1LbVJHvK6APhAPMx2GcEWTamkoEBBSCC1SHXB5bWgJDvhp7aE",
  "key12": "4n3SeponsJdjxASv9EMYY2yy78rap39sT7PMrfez7WriL1xrtCxrBNypeVqHUJLFy27Wdgm2dJaALNrHhG4HjrSw",
  "key13": "3fNuAVFPw1oy48HXKkDgmEseNGG364EN4NVqJDoBbWVpDv8qAFsZFVLaGDuGcK8HN12Z4epCv45XokdzQAQbWce7",
  "key14": "5tuohYFp2YwoHEzRybbdFf7btgpE1jWbq5f5iME9tF8rCdp6878bxF7fqxZh9ysmcKn4ZcLbyhX5EJckD9TDqcXY",
  "key15": "XR6gkfLSjiF1xLPZDKeFyRmsnwuWGZ1pkhMr1veMbaXtBMdb2wTgqZaytBEzXUWXX1sKCRFbpWk4c1cA8BaA27P",
  "key16": "3jEZ1Z4VqXojN49MryhvAj5abMVKUkRPHq5UEcMmF9bG7ggn2TTbLcNHZciYDWy3GF6RB8Gm3uhHHFgFEV6pvaJx",
  "key17": "4wf4yMy7uhV3vXc1ez7Ky8kLJamAR1p6Czf4EpeSQQJESHpzeAFcPXtWJAjDdaxWzQNKoAP6MZTq24gsu9nNnwuH",
  "key18": "587DXun7FNuNtTvDCkUABX6wEMSSRCfHWR9ZAaY36eA2JiQXjVu3mxspUsTRXLQsg5curvxLPF4LpMDjksNqdybL",
  "key19": "2KWn4vNdTG5vC5MPLq7X2DKVqT9n7E7cH7GDYLDc9wMCeUBFEw5XdbDj343yALG3UdnA3kDjHuFxtPUxRiG3xGoX",
  "key20": "4PF8TmYj6CF6JK1HYjWMjke9xqde8Ydfw7waoQGaWLNvfoVgjYzZeLg61xw7XEYPXXNEBZGt1zYvHVqXNYjjaQtw",
  "key21": "6YCvKjnE5WXZb7gTrWkSFNTnRuGL8JGU7f27sUW4Aa3iWb9fWfSdjMGFS4QKZmgeoXbbeZRaXPRiUoDLfFcBaTQ",
  "key22": "622eVmJUAfQok26X8BE8P3Xp7qqv8FHUJKscv5Cmob66HyZY79rTJAFVrAoot5CjcPRpTbiveQMpikP1hkaEirtG",
  "key23": "5kEWmwMDpmGpi6ydXT1C2XdadPSCmWBjiCesLwPTdnacpCFaZXxpR4AgPfndsKiK8zsurW7ZARZdsbbsjL9NKKz9",
  "key24": "5rfXmhojdFnpgPWpgitnJzgHrJwNaf8JbkmkybzjaGdCRbJS95JHE3ehUT4iEygzF2w1G3aweA96heJPiwjgKj33",
  "key25": "3TgK6pypXehw8LTipm4yW73LxBaa41zu5kFpAskwgUBayHK3R8NbspwgXHNRsJEcKdUAe6sAMmnhFMFpKaaL4iPN",
  "key26": "sAtZBQesfVN6XsNuEtXABemtjcgttoqEsihDZcyY1SLEGqQ9usfCQRv1v5tBbXoucfz9rT9hUnT8r6yAinYNNh1",
  "key27": "MDMyMRXCWfw4Jv1L6da9NdMT9XATP84qGcNuv2A59heb7niHrzqPLdzMVwdomcFfsjUJy6mVoFFxAfLHgDfvzeQ",
  "key28": "52VA1yeBWKeAvYguAnWaUyofbNSw2wKVuSvpxiCb5axmxFQbVpLyRcC6AsfYk65HB8W4sVBJ7RuKqqsF86kHDaAH",
  "key29": "5adpeqEjfp8gnPNKRsUJg9ytcYt9kz1U1mmYxbd8NYUvuQqP1mX8A4CnXmszYfzuKjjhvndUmmiMvVuWcz1xc7Av",
  "key30": "36DQr98qBbjciCy7Ywu1Z6ZGeMbGzF7KfgDC1Tv6ZJ4mtn3deLhi8S5aZ6VU3WHGBk9fmdkKNTKLWbKYoXjWmXaM",
  "key31": "3SWFctm2VUGgEyC1r68JpRi1TS59fdURjF4hX1fNRg82mUgRQ37WnYCbG47b1FFTKt8uJPfRV29mhrTVKd3GLXzt",
  "key32": "3j1h7ifwpuTGc8YWp8qgC3jFX1hPePWPWhqJRYgmj1rCtFJsGDCCH56qXYuUqYJom1ysyWFFDKQx2r41cUoZsVru",
  "key33": "21Z1h9ofpsWgfrYzDJGYRMtQbirs6tTyrRxw9wA1NA5kNof1Tm9Gu3CQLJoQYBebEcGJVwvxHDVxGffWAzNGJwQs",
  "key34": "3Mq5bWX2p5qL2t1czPsSxYCdTrsNxRjP4V6iVwcW84CMs2enY2zy11zeTQr3QsiWhAU7AAacCDW2WCy27prHKBDD",
  "key35": "3zKaJWDB4D7KAY4FMeB2Sb4WSisSiR95qMYKa92T6fSCuRaPgjGeApbVWaRD3rd9H69vSy2iCjKQ7xkX7W2e5CyT",
  "key36": "4p6PmJwLfdkfKgeLX8emCQTUeEHsENPNPs4v68xmi3Bk9C6fEZSn3hwwZsa4QVKZ6u4gRgJL2YdzhhuneoDAvyqz",
  "key37": "3noH2FPoGHebSRDLWhdcUMYJ6YrVfFruyzk1U8RcP33LpTqw4PkkGeFgxjNMwExpMedieRghXLs7kpq9P9gUUEZZ"
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
