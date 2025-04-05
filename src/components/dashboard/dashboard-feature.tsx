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
    "3CPnLm5Zi5PiQakndm7WoRMP9rReXjggHzheAc7j9EVMPDyH7ibZaXsryH48MC3vNg7cwLkoWHcqVZo4bNHaaT7f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kFaXwaKeRhi3fbLN3No3NAo2jALdHNwKD8fiykojX2E9daPHrgYEKVK13de2zGu5PNGG1edCwnNbwU5FSQFTb8d",
  "key1": "392zt3pef8oxCmiCxNa3njP9TbteCFzdsMHashdk16cAWbZh6W1Xz5cwUpAGTMZMyx7qFJvcoQqmeduqU2uYyrUP",
  "key2": "3PKZ5GgGu51Gy4CSyhL6b8dhqxpcA1koLjFYfCP47BCQSUgCXT27cSf2g3H1WvvSotgxwcbkZVj2KCi9hoDr9jjR",
  "key3": "337yu24yTRokiV51hkBUbNMga5e8cJqzsu9NQe8J2ZzoD9cEvY5QPZkKvVM8KAmcw98WSFdeDGoTssNe3jiJKktp",
  "key4": "4WYH48NDrf5kDrFK9tfZsnh9vbm61pLUyChtztpWTFuMJoC811ueGRYNbHqna1BeW8ZvUZa3JoNVsw3jMDXFxccu",
  "key5": "4bj5FpCbYYZfPgSFMNiPM32ipPsJZ6zu9eWKPP3kjaJbxJWQaZtTvmz26RVuiVgFbosDaxekjVNGegBwbW3KJDDE",
  "key6": "3RVJKn7NZhBUHyQ9GHqWA96oPnYMaJbDG2Pws6k7PHYBQwiZgCbZjRNBo6WUXJy6GXas9QsLhwXoVQvEzXdw6G1T",
  "key7": "2GmDd8vfvFQPk1B6o8edFE7FNBYv5wPmvWKg5UPRtJndfGjpa6myPCM8TCi2um1opzGedcMArb9tfzcpLZFNTSZp",
  "key8": "2ctCGGQLZRVsTQNYZyaVJWzRLZBGZYxNLN8cTTZyhgcVZaePAFavjQPDbNFa3hZx9CEBNk9833tRfGpCXWtkbGNN",
  "key9": "671gJ3SBKYSmf4DZqkX9MuW2HQy5k29kR4pDhNvPLKAEs1zEaVjDFCitNMeVs5R3RBLUwoCVppi1FRkuBb2AoKnR",
  "key10": "3QXtFxMQ9vrxBx2x8gntDY1SKz5eonZEqvZGJBSS15tCi22AuTsFbQaDMvGTdyr5YtEQPfRSSBjo5H7SEq3fp5jJ",
  "key11": "3CkLzBnJ7QPBq2GJ9GRyNDznQ7DvMkrPvqP8tm23yUTMkrX5cjF6z43EVnohN8yjGquuKpP52ttVEomhAg2XEhia",
  "key12": "5AtjFibuagMTMEDUW4RYPEpEtWuTtF1gkadeJW6H6PFQNtCBV1BFGLJLASroVTcxCJMbJFyhbuS5zTiBHLYpD1gP",
  "key13": "toJpkmehvbH9CW8byDKJs2g4hYPb8Z7vuRKE5EBMfoJhtrfM5u71hnjjgSzpL4c3PxiV6ugXeqkr5DjJb9QVyFZ",
  "key14": "39PhGPZaB2isBj6UuimpA8qAdMaUWjALSDZRayZq1oRHo2ZN5mred44iYf7Y3NrWtordedM2Pet4xDKN44uhzT2S",
  "key15": "3ChQogZibgkknqJiLCSwnBrfBY3hrtNAiSQvLGxUthquk3FGmFfmWQ6k4U5FFpvvi6xpS8x4BPuaZGzzxE2q9YVu",
  "key16": "3NPwtwKotKKXk1AHf9bqdG5usfHihz6eHdhoez6YvGAhZasTk4FaZ25W9SngC1WoSQ1EJ77r3R3HgnTzCgnH6W88",
  "key17": "5YEjJhamzzDj5nguoYjGgwqqRhnZFVMR8QmFTUc1v8ZnApZXkPKgHi9EFWmSCdx3MNCBWrK4bozZvE6Wu95MhXPR",
  "key18": "23zPNTk1q3HUAwvrpMrgMgLNBgbAXY67eHuCtstHaAspy3oR9cdthNa9c82moZJ4avYVxTy5EBuKqSEm9zGdnEVT",
  "key19": "4nsN1yxGF71zKxNM3Rbr6bJREpZbabJHRndg4M8M7JL3Rghb6UBM5X7zcFAo1aDJApKePHRpx7oFA7i3UmMszaeW",
  "key20": "2JdfUWj3Y9WkcTYCqGb7H4iscu7YNpBFMgTtkC9XSDKZEcXTQbuwy1nRzmQ1Xke2BTwAkLTCwB8wuRJfHRfPSmPK",
  "key21": "uhyXcUme47S1iCoaePHQs9GM11PBgdqjqDeSbz2MxP3EkMGWdxavMQKubD72pyrrDr8K9P3GTFg5ZeYkZKkJfMK",
  "key22": "2aSvAERmC2ZugCySVEAv1dV8Y62kvryHEDpJU4Hag52SqP8m2H3kK9XYKTiEE9hsfaGAHR4RH2cPX9bkkYapd1Ed",
  "key23": "3VDGBK3J9SEAhkUf2knvJ5Rjj1LiNQieCLE6sCYpECy6M1SEwu3ZXYNKpXEXNV5rabm8YYLwn3jbB8EeDDazfyjr",
  "key24": "4dXKuoRshfhc8Pj1qnqgGSjC9fCQEh9xDCvY81BmkekAtSTBYsnmtdy3ghucGNW7mUbzRwkvCNAmSWbSCTBMeiSy",
  "key25": "4ggL1ksFmsVzHj3dLXxATPwkYS1Qx9EtFj487f5n3yZ4XMAysPB7zF9DoQaaoymMZLDYDMx6Ag4qMjb6isBgcVRj",
  "key26": "jz8FH6Rf1YTB315Qo7dwfmRN3oJRwVc3fhomf4jbwhVVugpCjuHUXDXdNDTxvkkY3RR3xKgnwzZBgzydsDhpZsb",
  "key27": "5N2PM2bkZkBuHJaUTC2qCdMk1WFCvTMvhi5mntzfXGgFJsPCYsGi2PhTTVnM3wcwuy252rTJMDoUHqscSpfuXxdK",
  "key28": "2x9B5BazETAQ7g9aD85YnTtLmSL947QZVU5BEp4Zibhxk7MrJopam4x2LhETyc9YVdPc4xXMsYeWoPnsJT4wXckh",
  "key29": "4w9P8pz2iMyVHLsPJUdyrcxfieearC6CeSLM8TiqEKRojB1Yi3941piBkpY4UPutKApzY2Mq8SHfmkfq2n2yM5nQ",
  "key30": "2fsciWU89VNLgboWs2EPPRmpFnPEo9Lz6Ldy4JwxcNhiAP5AtMtXYp5RAvdpqFDujdtj4VwwvHMb914j1yiZwUnu",
  "key31": "5Lg3jGdKDLEZXc9XJKAGdSEUmXiDtXaWNWR7PkGo7Tb8reJEFTDyEPpPQJNcdAEUo4FG9YdyvrnRHUNVDoY1PtHr",
  "key32": "2ANT41B4jhhU6mfwyUrHEiuJWbYth8EqGR29mnCmfVrpFiM75F3xmrnoMrcopKJjbwqBV1Qw4ZLWJeeTJgBZyhLy",
  "key33": "3DbSV64pvqNr6B96VTRMYBTUXzkWnhXeRH8X6zAZw6BCMeMkyfZfM2DWtE3fCd5EpB3yx419xMmc6CvArS3GwkAv",
  "key34": "2P8sXv24h1275SmYjVhkCZAkZk4pLnw4e73J8mkc26NXR28kw9hTMy5GhR5jprKDEuwz2PgzXBEPtmdMqZUKqEni",
  "key35": "2ouf4ZYYcpTvztj6tuVks3sgowntk6Pdgv6mRmUBXiDPUH4G7YyTvw2MmqW5D5bQAtc1JvyA2TvEfTJe9namw2Wh",
  "key36": "3Tk3RPU7YzKRUiPGuhBTFJVzMQrhmnM8AX5ExPji4HvYhCR4SXUWq2xdpjigGEragjaWN4JRrJYvQziXEnMCfCAC",
  "key37": "2SPFpKVAHqEkPXS2DNXDgkxqqeYbBDPnxH9KnKgsFKzB6qvXHEqNPQSW2U7ZG8d8iBhHcvRXRLcGkGkQex3a9U7b",
  "key38": "gK8vN1M6kSZkSSCv47ZsjVc2Sz9pnXdJcMGunddQu7iiJQZVKCHdhVR4nxkxjL9bxoN8arBRt6wDnpxwRbhUEwm"
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
