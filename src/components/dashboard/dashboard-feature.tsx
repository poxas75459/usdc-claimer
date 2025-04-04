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
    "2U87WxYkAdYTDzzoHYQnxdg3rKSofz8rHbnzfRyqoR9njYvbhC2rfm325UM5a991WXbR6kpVP317udo3CsFTdH26"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "abHzpLvHrAwBCcCM2fNYc45XWzmPrikq1MDSQMfZHbfspZWa2TNULaKkZXV9Pog696Ba6yH7hAxKUxfcnHiLMao",
  "key1": "t3RAQ4pfGrB817npLMxcZC7J1pu61GJsnMU9er72LyZoZjCj2EqcU3GdhaQ8KT4tD1NHoRCpkWyRtGphFbC7CNr",
  "key2": "2GMBAjA6NrTyFNR5yrtPTbhHVTeJLvXHwv4okupm1kKfC8LtHY4k7zVZRdVgNKL5oXZWJ7TXs2tPnZHnmguLRijD",
  "key3": "5NPjsuZsMGgkKQUtvPdGVL7x81e3H1noCK3Z4R4tXqaZtxFopALpy3wESon1VVYP51WxQ2XNo8FBeho1UL58Kggv",
  "key4": "3JugKfmQyjN9fvpK4HQpR1NrEvSvDGeytV6RjvLkRwXTwSA43kWTFk5ASdkirjvpBQiijLAQKBPwdXfE4MFvfhVk",
  "key5": "2V67k5XqPFgrjz9XbfvqynaWjrJcTwjtxZV8nPCRRkeqswFK41du4LTaMXdj3Q8zsYe2fDksgZEtbLNVKKgk3CLJ",
  "key6": "4Mt5DxrkZR5fBYgesJTTM87nX7JUtr1oEywLHKr2teQtiTU7LC4WTQ6siuPxmiGgwACny6gF31UqnyWUYRTUbBuP",
  "key7": "3p8i3cgxpidimZq2cjYh6tw3Fk3bBjzR8EDSzUAX4XWXvG3nsCyqxUWNZoTB4xb3WMksgLgeQHvMPfanNwaA6v2d",
  "key8": "2DkMn1hwDvZMcHLk9No3gvLhHrVrbW3HTJamsFU7xVZkJmiPFYkGy62ZW1Nsw9VesbqLe6PzAoxFNPv3s7nJ7M9Y",
  "key9": "4WzhioVPcYxPPieVzqRKEWzXhV9zrWp9hE2fvpsjSVdANBe1hZJtmyKcCj8RNRPotSttyYkfL6CNYqtZc88QFJzh",
  "key10": "2WSYJuhktjhYTcW7Z7LuNzLhwyNPa4iNaRbCBLniFkgEV71FpARRWYCyHzeie8cU1WVHcLndcyLvqDAF91Dvkja7",
  "key11": "3Aqx7jYpuAZsBK5EocDyRYYPxKffGvCL4nimrPpDc3xJk6Veory9BWvm5sRTLBRNSxiErBHPNE4tMqCvBBQoaA6W",
  "key12": "8jFeiUxzAUye64x3Thex2X69sdA1redBgG1QfMHojbbp8wD3oNqYGbA9KHvPwFf6Cfd6iCh9iSjcJwLv6bF2e2i",
  "key13": "qkoDTrV553bQxqdD77s6ALwTBitdSeGMD3PKsNw3FQjpVBCFkGaokqFEVHaM9DKrd5yGFZZ729QvzG4GPJjJY3Y",
  "key14": "2j7QvWNLvS5XDoSPsmqr94JrdLjviE7gTTvnABaGyHV5bmqakJuxvde7hqhr6BZ3VF69ZQVRFyGPQmrrcuiRKrKM",
  "key15": "DgAFKnUSMuVNogTdnd5Qbk1ajhkYhS2sSZ1yhGUGmiC2QAzAKzYrv4HTduZuAdN5rX1f42Nw4NrDPgc27wREZfe",
  "key16": "CK178LFeHzcHf5MPvP52GMRJBwmfXxseZ9UyoTkb9jj5L4pUQQsNLPQSb7vyub61cxQQLEF4Dz2i9G6dUk9pvX6",
  "key17": "2QA1Wz67DfcwGC1sAmRmFVXm6qZHKEeaaH8stDsLQPqkx97cQ2G6VgG9KrHVLYmtrWiPPx7RecjrwwqF9EAH3RMm",
  "key18": "hSzfsXVioTUeoFqV9KTiuVyAHdRPa7FdWAjn9bRqn6tiPjYGmpeFoTH7a7WnHS8NboFAg3uR3jtNLNWQJaVjVfY",
  "key19": "29gkfacbkPa2KfKNNTStcwUbwnTP3FFWvDUsbXxTCxv72QGtp8Xt4bFJj64fSKAX2KrivtFT1QtMifvpcsXY4pbf",
  "key20": "2ApcyBks7zYxCq6F8QdGyBCXhQpci27k3MGxuw8FFPnC9QkKUY8jndPhH9jGCkioUcoJYn5AoAopR2qE4e7CB731",
  "key21": "51x44njoQPa3mTdCPH8NvVkAB5pgtrra7ZqCHZmD7onMZwDPbCUEuZEoDN7fVw6gErhyqQebBoamV1k2oSr4edcD",
  "key22": "5vCm1WTD4sRWtUxE1mauc7ZmdNYZyZW3NrTqARWvEW9fez734wS37nCiTovcv5swHhJG8yhTMMzhBSx3xwPrADEn",
  "key23": "5jG5nXXJrdgvN7DMKobYfvruJX48D75o9UubGr4JLanuxTkXasyRzbWoJq5HQob59uogCKi1z2RCgWw85VDyWdqN",
  "key24": "2ssqUVtUzUyD89ce1gercwW6wyaUyGFdZfSpmsiK5snwytgGTPGVDNToumG4iV3WbgS6AiKbZDCeafmpgRzHoXMS",
  "key25": "R29z4Q3C7NdecBz4iiB488yKKubhRGQ6vKYKz4ZXYGuc8BWB8pubJseNt2oxD8w6Cdp1C4iHTtFXJ1XauZqA8Pt",
  "key26": "2iTdY7sUdBinjguoCoHEMzdHeQEdocQWKZfGBKkkMHgs9YgBoA6WRrsvP2AbUF4MxkpkG19B86yAGhAzepDtuTD5",
  "key27": "64jfoo5SDnuRRiL8mdbH6fYyN3gWUyDk5FTW4dabFWBNj3PVnM61TKN384DoNTXsgxNiq3xdyzogpRUg8x5yhGeU",
  "key28": "3YkuFSvHEoU9qKoooR5aFGudKY6oAARhBgRrW7hKdjTVSPECA6TES6BKj6EuPk3yZqKkUHsbfSfeNYqvb1iv8pXt",
  "key29": "2bvKHsMMdsJQVxb3hmDKf2xynZGWzqqxPzQYrWBoAxW4rXQzZTk9cAMvBVhPodjhA329hhUkrRVtac5qtuv57nhP",
  "key30": "3WoBz8kqsnYKvQmZsyRgfVoxUW4GmWRABK32FgiWLYBLRNhx4TkgLt2nxUUqPT4oDSPpbVnM4PJVu7tsWtziZwz",
  "key31": "4i79yTMde8WETFpt6QMRBhWc8bYMqWHs3WQmNVL5J2uMNjjL2cMCoGNmLnxEvdQ2XnYiMiPgvdtTQ6FAciUWAika",
  "key32": "VDQkvhUGDjiYsznh6FjQeqrwZ2Ri4aPfguZ1MNrxp5gJuDwDE7pbKaxFXrhh1cNUXGzt1mPQGFtMrbNdJ9uo2jk",
  "key33": "GYsivtmCHzgZoaJBUGwHKAEr2VRtovfprXFMLohNQtGaH9c8UWTxnR37mUJE7sVXa3Kr19whW6Tp6VaGJnQvgdj",
  "key34": "67Qd4YPW2A74kQ2tafLqxhLc8Uf3SqE5wn1sZfE8ZRAuYHWvHMdvbGGryeKwhg42YjcBUmbHj2xm3RSbkDXxZDrw",
  "key35": "5xAXtTTaiynWBtL5QHHwMVmWJAjf54i5ntxC1xLFEeqh5kud7uAAYHYxATjSWjuzXdk78fkSG2thdQLYsJYwjWWu",
  "key36": "3WkoaA6MC5X3EDJWCDC1vATuQmbJovktnuz13WJNugxCTr3iPc7k7fYXBevLnc5C6f2DVfgjeADmY3iZwKdd88ua",
  "key37": "4PMo9Mzx76JR1H15oKqZ1cbDsMZgEynxYac7Z9FHAtQ4XDx3KR99uMYG78kwbNMhyVsGfu1gFjTT7FT4C45azCCZ",
  "key38": "43th9hiuNcpA7LH1acnj37ZyVPwSJemgtJwK2dZTAZLoyUJniEVFpNZmPPBZstmmitBuhWC5Rs7iPonEdSwM2h6R",
  "key39": "a9NnLYrKAngsnXHZHLHXkko7wzLJnWXMdzaSyh2AP4UrEP3KWVmQ1xWU4hc4h1i3ciTTCLqQpSdAkKd5Cfnbbnw",
  "key40": "2KgFVt5VER4xPriFS8GBet1jBVTQNgXMsF2BEivAcAJkrKnDe6ApkU43NuhYgSnZkaC4Y3APZb5hbGhFBPNzuXbx",
  "key41": "PYmgv1UDbETPZGnutR9ov3CH7NR15T71MzHiPgfANSehfaYQTBvmrzZZqSZ1Mof1N1wifScinxzNoCL5E2SW2cW",
  "key42": "iR294UhmZYgRJPAeVrR3ScHb8hTQ1VTtsZf9FDequ8hpgcBua91kUgWwarsVmYfYE7jGXw763v1zUuTGGkcg6Uw",
  "key43": "5TdziwSmFGs9MXcpHwiBH9WKsRxryMgLLBPGceuwnKdYpL9WZEFqZMCXFa3mSebn2Uao3Ao5XTU83xAv54r5YDph"
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
