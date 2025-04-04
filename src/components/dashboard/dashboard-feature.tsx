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
    "zHNS35abwwaEiSam8eGgU7DRgewEEaEDyu5CtFpHCD5UZhwKjw3KaMKZotpCQiihT6DLgo2s9sfua3WDUBihE5F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ccEJT4oQHCAuYHEehwTAEwnPFYvNheWEnXpetArBZu8eWtpCZnM1BqWpF9hEW1rnQquMrYtNWTtHZe1oMiPeY1C",
  "key1": "5LrGuDt4b7YY8mf4n1Kg7ReuznELf4PvhhvqJTaEau3RhKZhbLYtzQHjwfF7gCBZxUPXJNPecQwLiBCcLAEF96NA",
  "key2": "3qjXwyncSZ4FLhgUDPRoNYe8LdrsaMY6CSbqebZoNa7dXPNJrS31pwjXjKSjSpUXss6Ujk4njUTa81zb8hjWLxJ9",
  "key3": "4i2pJ6sgGZ3dUumL6dzsQiZW8B1rAin6DDwLmnGMAVH1KM3AaqFcEKN4nh6N6LDsxTFyEQNB5RVj1ZN6fBoUJPdx",
  "key4": "6549H7YdpEgcY4yhRKquQNff5ztuqvtdJJ5P3h3S4Y1k23EApjVYDXQrYMCwRQcupZq4a4KaBvEADGQ3NvChgzPk",
  "key5": "Z25uAEgMSR24X6M3aLfTpfujjsNTtwCiq8fX8AKXhyrukfGhkijRR7sB7MECWukEFgedx66Ff8fGgzzDxZg4eWp",
  "key6": "2BdepVqC5LNbDuBUQ9wDb7L7XrYvuwxU6YdzYHggAsyWD258C4RtJYc9Ak5u8PHSv5vEfUPtYExMgiDAbuBTcmer",
  "key7": "4DSY3oMd5CRmwjk9Zh6XGCZWbKyuKtoGcxGGquShhHNwTU9MHWDcwGMrFo3aYpieAARMBYW7K6bnHmSV8ms5gAHs",
  "key8": "24SDJRGzRGm21wjaupSCf9HVEcmXJPRLWXEsLJURWUdHS2puLJc8unRgbjfcNSum25uTNzNsib3JNbABouUUqQVt",
  "key9": "4g1EwuWCrM8DFRB8fTh5aBZSMKMhBRvDXW11Vjcr8NF42USZP17oZUJq7AmihyQpwg7nfQrAqaLVG3oGcau8caV8",
  "key10": "4sBJ3x9SmQbtGZHx7gGoP51d589VWgWgyxSy8hfgR1AcfXqrnrd3ekshrZCKgjq4h9ZoLiS7UYrv527K4DfyQgpH",
  "key11": "28W7AkiGaY4Quxux8Us2SfoB52v1dLkEWitHmedwWDm397Fp83fpVuoRvFko2QrCzrUeysuisXCyKyy3pjkR6te9",
  "key12": "3muSZ2czy9LibW9Ggc1TLscLocBRt2Atva2JqUjJWm7T7RTtGpjjxPYhHJAd5Mu3U6FLeRP9GgGBdQWw6qZGrVMR",
  "key13": "RYwf6F1LgbbNMRx81RLAHxRzLYBYhetGJYXQ8g4AGkCkrtyEdzRw9AanzTQ4jyYzWmrM5btnV19j7F1WqQ1qyav",
  "key14": "2irqdL6Lgf1e2js8cVGYyAKFTA9HmZ19MdBN6UM8xTayqnWRyKsv4zNnPKmmrh5upjFBiZa4JcDMstWUEVoXFLcm",
  "key15": "KZnVtaCj3rwqzFwdFMG648atf6GL963vPTPecNdGn1Cnwt4gDqVF7ohEdDkMQJoQ7Ve3nN3tVSGy21j33fXWKdr",
  "key16": "4fjsqcnidYjfaqyJ54dyTbbXpwETY8whFbLR35LvR22w2xGnGngnABbkSufVjrYtcSd2W8TLFAe6iHTd8gNHJcR3",
  "key17": "4NgTXATAr48xUPtd1TYTHoLJ9HZAeJyw6r5nxf7bPbx7ZZxPJRH76jmTN3HomUw2U1xTToUZSSt6HguLQsmx3ohV",
  "key18": "98HTHZyaQVXa9WkXwkXQT9ouLPkM3rWqCgU5gDBrdSsRGSxahKg7zddMQ8LoNBEyzQ9ybEJKYsfJQ79wuZz2nsA",
  "key19": "5cEt7epdcsuVEPmxa5p8HcddPAvJPJkewxYiRZ4KYbHXUYW1EERaLj51XjGJuQLAG2JW98a9TDK4SGTU8xTffsyn",
  "key20": "GaPRSBvQV9ShU5xmNzrcaGaf28MB2j7AB4we5V8pLL9ZV9yGjXR6cEyhoPoG1axb6h1cdx8qLUh6QifaqcGJ2Yw",
  "key21": "aTrJPJ8ucYEScafj9Y5N7rVU1EzoVsJ59VuaFt6dHwYcQmzSTRHCM7YAXDbdmM8tbAeB8UtkoiuHbtnz6BMd1NY",
  "key22": "5eB5KBQYS5WiGTg2wtq2seRVQ4aRgR9U93XzW8mfytRJGycrW3JPiwFMCHCd4FoCd7NDi2uoCpW4rksw9F6uYUwn",
  "key23": "3bjTjoGWcbNCRq9Rg8uyjQayg2bwDu9tiE2W1BxNCB8B4iPu4YuyhDNP81jRak8VQJSCLdwW9XHiPgU2kpws62Lp",
  "key24": "4y9HTLQ1VfwSiWihzn3GLeTbeGbBXSD6xxQeXWi28wwv46hjW3iUgHMBjWt9p7mia9kyUS1NzM3ihXKVyYUKUvMH",
  "key25": "5oXTNUsvK3bWG5ZyXzHRu9ojxS9DpgxRisrpCzC7QdY87fJukVVn1AzR15btVsykwea6XKxS73bESRJwUAimWuFv",
  "key26": "2ApSbc4Gq46kdUyTmKmyxz8nUZqyiiv1utZnp3N4mx7MT6b8u7x3EXdyQw15BUVA9fttjZJdnUr9SYV5VeYCgNSR",
  "key27": "LCSBnftrUahUGRjLTb1kQHZDk61ADhLsPdaPgbyp7VuzmPuwpUj7ERYSmfvvMaVjKonHX1SDTAnRDSMEPD5nt4Z",
  "key28": "5HJXauPpY7ht1VZAoGU8K8SdSTKR1AELyRcuhsqj3sNRyeZFf5c2uiPnG9FEWF7k3tfTH7VGHuqaSobK3ub7pQk1",
  "key29": "5VUv5oJ7G63XSQ2NSgtLzyb9k6KrjtmR3J6DVg1q7sF5jPSYZ5JBEpnLAMyRtduNRGTKSGDNDmAATSaa9eZpmYR6",
  "key30": "RqioLwfU3kf1kXCp1XGcGXJL58uddftQ9yi5s7GsMY4dL5tybsoHVDGANBSmqu7B5T5aBgat4at2AiNGAQYmZuT",
  "key31": "5C2fWR94xaKmyq4rnYsfd5fUVqkvqApGvpCRkvRuVc9MyHugDj14qsPqzdQDf13UxKBd831AJTXwHbHpLcVDZPLs",
  "key32": "SLV6EwqXg5Zk6zKhSmpPQiLr5hgaAfaNTcAdqbfS4CkkBG4ZBqRizgaCf6zoFuoVniSGgCE8s14RGewJ4mHDnTH"
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
