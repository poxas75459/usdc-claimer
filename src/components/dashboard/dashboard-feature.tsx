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
    "285bNWpp67RypKF1KB4jGo7XCWDuTpDHBT9J9DgjcMJYJcRwrrBw3k6Lf2Ta5wLNLyjxjtFLBVEeKRcSJZLjVau7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iBeMmtu3NPobdvSkWVdtJMaubXyHyBRrgnWvUMCt6JCJWatdUuYKwGqC287zcZBFJodmPt6ajPHxBACiMm4d2rh",
  "key1": "3ZUbLfXiNjp2BRsoEAwYSbLx7aKtiC19XrB8iA5hprCSJDW43KoVk78oGtUFeGKB3WDuZqSdGVpRu2hK3fRhDxSB",
  "key2": "3EDkMLENjLHaKWerWGH7XFky3bzaWwSEgx1d1DtSgwsQ6GtFmCKHmomSwVUTzmQfdvFKsukKqNeurohV9RCmZBYW",
  "key3": "2s2x2pnyGCwovgxmzW1i6UWn1FBYPoBBnG4yAxMJvxBDZpYkPyBmysvC92FyoJTEczW5efFUenPrRcWvGguKMLCU",
  "key4": "RucwcCxQXwWQvERXLMbwJAZjgoh4j9RsXAUpdUMC43KtM37bgMJwHmdPLzkfVspabUqfqb2kWigF6zZ6H2pMj41",
  "key5": "4UoCAvL3aEwHxJM3ghhtUSkeZRj8UE2ELEAQSNwuEucjVZs21MjKy6JrpgJMPaRpKTukUJUXWRtU1AXR17oCdw1S",
  "key6": "2qUtDGMN13LuUTxDFDLxfiS3gzmHWsG7sq5kfkpYUC9K1emCAwQSBkg8S9YXZMJ9GDY3DTyKTNh8CZULi9KiwthZ",
  "key7": "3G8ZoScweZUfxz1h8fnULom2Mrm4zVWEnbKbzHXPr495GTomkrYN7EDgdHmYwvbvUanHp6Eew6HQ85RoDize4S9Y",
  "key8": "3HXVuzW7mCP3MaHZUR4kfDRYiXDNKNYZoK44bo42wgjaujeLzLvjbXKEEdZEmAeNQNoXoUQ9jaVRepXBf9o48WyJ",
  "key9": "3ChGF9Zz3ZbFpvMEaio1VyPggHKsEf3gHdW6dh3WRRW4yWfnCymEYWP1gysoL7YuTWaHU3sWnh4RANxJaxP3GGBu",
  "key10": "2YHEoXmMQjgritTLkhtbSeVuFfp7YGGo3g16iCeDoxVLjU65C5y44wXsbYGMzcYhb6mogunpYhbwiPH9e95cARy8",
  "key11": "ACZ7CbPTdTvnHph3UDMWXh6JmwtA67phzXPUgPZ3LovgE9ydXmEvFexTJGNQ7r3Pg47c52KcapYzscioBNpL1qD",
  "key12": "4rxQFCFdcsrXwvSPmCVdozkGNdVRkfP9QNaicekonugoAX1sp1HoNWkN2ZL5R8BvzZrhJyYdiAjYG8fu8CpLCRU3",
  "key13": "4UU3krwsfX1dZmUsR68xpu8czGAgRBdav2EyKNDX6wECbKgUbPCn11sxYHS1qgZRjT8FJfo4nCApkmM74ywJgMTa",
  "key14": "cNVchbaBcXLEiExG6JeP97FfKKcVQ78i7T2G7wm4iYg7W4VLxnNGhPpSG9ahzxYjjc2Cvku5md8V1JNvsUgRwKE",
  "key15": "61k5JiFAN7Y2UFqFXBtGWeZMbwXZ16UyNfWjB97Yae3BMyCSeHcqbtbBmNs5mmogaX1HJ9k8To1sBMmjHFgR7Vgf",
  "key16": "yTsxPvHgrx26mbYoPwocGd7YQPiMwo5gX7iLqe9aer5x9gEwrdanYpnbbP34EmQAirZUh9WmesPKwP4MXwkDYeP",
  "key17": "3btwWwa1VcVfVL9Urvz8JkjphggrwYjm6JqJnq2Lg9ime4C2vgtA3xQ1xzzbksU4fgt6PDj9EAqFsM5hjKths9GB",
  "key18": "4ZPJXCS1teg4zH4hvi1cUURNfgwmnSWmLUj94Ahr5mKygmPMwMs5ttY3onbEqChGGNffXLRciWKzSmrAM6UU2cN3",
  "key19": "4vdccdGRtY2FEy9zoPGos65KSau2FumLBXyfd3wDET1NnkgiWk7AaUCbyug7GvxGEGHEkMgfomu3dNuYqe5mLHAr",
  "key20": "5uYCZdc4AQY4sWbg1s4hr4gGoDieydq77pDRZecQZS1dpsiga7vrL7TJArKjDPGLBiCToyGxZP72DYWytyheE2Vv",
  "key21": "32NQkaEAQkFZYTn1tXtUSesLHQ6ac5Cio8nN7qGBjeifsPEKbndANj3YEiijsn7SuHATSsnnVZ6LRV5BSpUxbZjx",
  "key22": "29ia7VV8SatXQcdoXY8LywFc7WUBBWvn1mAMdfUsFVPdtLmqkiCyhwCUUtRkSqjGkrBiMxFYALDeU4EacVesGWcx",
  "key23": "4EkU7UbdN7pyA6Cq2j7nyYXbamX82e46iF8BcaBwdsN92cmDvJybLmBaWTWyb9VDF9Ss9DwjQgrpUo7Mxsis5M8B",
  "key24": "aW59B3NPkxovfPG6qkFRVr6tMxfhCDTXs3Ts4ywYrqBGE7Fw3t4Nx8yVE6bpQvb8he2XtveDmtw3JVHHJbGeH8i",
  "key25": "4vsN2WNHmPRdefLNLgmLREeU3Apnm4KYQ9g4p2UM867tQR5uZ7kXDXw682bTPncDtjrDVC1bcF2xPPwUSzUKHpJX",
  "key26": "5e1e1BjcfheEurcqZAg3BcuJZKij2HMeUZU6ccSAPRghkAr71ufLVUJ8JygeprX25BkcsB19weZC4Raby2DmRHwY",
  "key27": "27xfWYJVZfj2tH1jXDkzdXuiqWAD6Bun8xWEFkyjp96x8Peu9RvXfLRoqCoCb24h1o9WLuutCQ8GEr2xu1Z8JEtk",
  "key28": "5Ee7odHmibMttMbUFAYJZ9oZaY5fi1g4F3K5rC3LjXuta6dbJwjNefqszqJTMYA1Z2eVg5qDCSaeDDoBTxV2VEN3",
  "key29": "3UvEgbU6vznrB7bvo6L2oPGrpWWQrmAitGa2vptDiS8ccfNSbEwAhk1ni1Qk95gSEgNjJfmfGFoE7kjs258FmmL",
  "key30": "4yvuxc5F92EsYgpWDBhSMyR2S37bvHAdXKwVszzAVZBAQTSAuR3jPMtuoguLps7aR566neGi2c1nKggApBCaGUZ5",
  "key31": "3YZVbeFbCGv9SGFfhXUwPc4NSwqNuvfHeBm2zgVoi77zc7K4N34Eo8NzXjwHPEPmAKJ5wDYWYhoNJ7Wseb2wKCf5",
  "key32": "KdwFy8RkGBD1to9NSbAbH2u8zzjC29skZwJK6smvkQtdC3p49imtwwQyUsZ8Lz8kceG6EnDrW3EY1CvpKtZSAcr",
  "key33": "45Uojp29u7PunRqwcVZ23ugz7QRtVm5rB9V8DWRNr56ZsRqXmoAY2up3isMTvQrJXBNiaT1UytTY9u5hzUEzH3Kq",
  "key34": "2rUgJ6bKceLaEzq2m57CxVaZg76MSzJrdqnkJdsZEvdGg8EVHrcD9FqUVt4oDp2HibRRaToPmFu6CGMkiZDodYSb",
  "key35": "41DDsQ6Qb9HKPnuqrRJp6wMVdz2s37VK2sfrJ9Lbp8TUEoQPduDmif3HcCJ5ysnNqiJpYAU9dAfYeY5BXywhqJd6",
  "key36": "2aKM2o2YUfUxHVQkFE3RMbAQ2WTnz5VjnK47o91SPc8StG1sSXvXK1DF1ugkq2hFA8WiUyJiBeg7tvKhsuMjX7Wz",
  "key37": "WPdYcQNFtafVTvavjemXQpRq7iHjLEGgjL6Fv2RZsVvVbfnHkEcsXMYNeHBVrZSeQWy6XXN9JgGzn7v5EwiUD6n",
  "key38": "1uXZoTNXfC2ZWs75hwRwq9mmFfg4ZzUA8LeoNXBDkxNPNcZMavqAyGRqkZX8Mmoco21KjTjLEyJRLb7gisK72Qt",
  "key39": "32T9f2qNggyWxXGYZK1X67tJqxf6SaQTFgXATGg7J6BGLmfWum55cPF6qQoUgw6jo3Worognz141vobgryFoaCAy",
  "key40": "3qnuB1a9aqmKKB5X1QYUgQBe8mGqCTb3gBYFH3uPpPLa4QX1Yix73rprd8tYBjJC3NcAy9M1M9gmWMFsjHHVgph4",
  "key41": "4XmHLuNuMmVUVpprh26fcv999n4BJG1RcEHeBH79Tg8MurEVsmxCGWdDtD4caYLgp5h3A3CZcpE9AXd9v6po45eb",
  "key42": "4CJhUVB86JvxqwQ1uz1cx8GrfkkbnpMFbyFkddS7yeVw3snzZyD7BukkvBFWLJMStZYnfcAHvupVbDQKhGrHuLXu"
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
