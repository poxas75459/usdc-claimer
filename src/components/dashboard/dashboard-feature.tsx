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
    "4YWn1rTkN8WZjuZPaeJuJrPpCYmuyPHAdXEmPYsCsgiveE3JQPtsRGc5CpM52KVN9o377BY17xKdKoYwwoa5zmVW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cPegg3nmegufRm39gZzmFYegfKe5SptFGgSBQXZktnF9hYgPMAETdDrSv1JmkzKd12GuHiHGNE2jtTUEbbZj8s8",
  "key1": "i84MAwydgkd1sUR6tNmaq1yVzL3ZKhZVtDofCcZMkSMPhymazssBAMmemK5ab8SeBDkEmTYm3ZYjrdNZnpSjKZN",
  "key2": "7am1AT8jb5ZHQV4CdQU62QBRWduBCuqPfVKn7nohbYSvifo4fd2Un2t3LZHyx8esiPZVKDZSGyoPozAH6YsoDEe",
  "key3": "4TuXPFmxXrdqoxmM1FaCWJXaWWWW2rrthtw1ggcvW1qSGQEqf2yUdXyYqPBCQWt7s3ugyAfJPQVmZmnMLopLV9K",
  "key4": "2Zp7dGPL2FU95sBjFt71Vo6FSSnqEE4o8s63BE55HQQik9PNUmCtkCNx4ueU1y9QVuS3zzKhKjg8gqVNwuU4AeGT",
  "key5": "4UB9bKimkf9eH394L3zWvoyi8jqH42WpSox9a5WucWuh3DswxtYcXy7t1w9kU6bJZwdSri8pGRofx3aKiZDxXTHK",
  "key6": "3bxaBPRNzWy873aNpYmHxsQ42cRvMrCVpcbEhdAFsP53C3AVPa8vaEZ6aaGd2gief6ZwN2qB9XCqBJLRRuBhSmfL",
  "key7": "49wiUzU9NNDbBonUJX8DmnW3AaUEKUZDRhDrjzvR6iAjdiYVScDeqohm9yNc8TLHdT1ujSzHK6JWmJzVE4sLaM4v",
  "key8": "ZdBJxeRc4jxL6hNWog2yavpsvCxtU2iocwHsEnnKbadt62i6Uoa4neibP2qoy4KZ1ceRiSh8txjn9PH2FTirHPU",
  "key9": "4aE1Dz1C8aP8rgckymCGdopSx8ZDP25Ya5XPGTw8xd3DQusreHCxMxYMvNEF2Ez6FpdGnWKFRRAV7Vs9FdtL47eF",
  "key10": "nzrHAVEP1vPMej286wwPbrHS1F35zyWd7rJdrMEhLirZahmDK73XYagMfmxxSmKcMBA4hxFTXjmnac6wq4AgDa3",
  "key11": "52qmrFWVYrpy8CU1hkFwBiByP5aPmXRC561X2PHzMraXkAYfpFnp15p79EnMV248QpLevH4FL97uMhR5mm9TEMp",
  "key12": "AY6h3dPpPTCc6YkccXnvk3US8jrQwVoA4wEi1Mi7iGRMuoBf9dXFoR37Q9dXnotD6UEEUdVtcXunqadvavW7yqZ",
  "key13": "2PAGT43kFdr7GEneZTvyxzBZnED3SmiYWrRNZ2hYSuE4f8Rf71eC23E9L2h41tCi4zg1ETGNvBdMqxu8zstiwxTz",
  "key14": "2ANLzhVHSWwXE46doYKAHRxfHgFXXHLUA2nwTUWS5V459Ut2wW1pwiAwMRWpsyBsHKzToSqbrDaKvQ2ehpQoSusC",
  "key15": "YHmzUaS1NaufpppppXv6AvAV3awNr7vfrtFjPST528qrm4W58S7KjNcLH3bowQo2xAiyK8hFCmFmKx9eUU91D68",
  "key16": "2bXAwkJ2cWPiHHccJ5AkK6Qe4JV7bfSXt2swx2whRSAfZ9x2vLt4B1UZ9WmYfS5UVGRzYRa1bDNpC3erX6KseVXU",
  "key17": "3bddP737oNSamNTFaLzjtDz7PW9i8hzco1R8kQXVxdiRmRWz6H1dZMMfhvRkMc7Cgfx8J35kzVKqLADPhQ1bXwef",
  "key18": "4t2zykWB3kSDFWB22W1mtxVTcaSnyA85McqprbeqgaREBYSkSaUxnJ94P7jN6s81KhqDz31ccQV6QzoTGvxbBG9C",
  "key19": "4BJs1KxQHFYrbVxsB5vKUt6aFusYj8LFHoZNW3aYyTTdLco21xvnFAu82MQKEgwxaUiRU1pVAsAsPnZXu8jFbvf6",
  "key20": "54igXY3PA4XxiuU4xWjogrjChJ5A4pF8EJAwqUfsUQitJaST6tYUk2wy3W7X3aBiLXCNFFu749PtDGwvVyVYdjms",
  "key21": "3MSvshcfejg1NffdkghpxCyFTF5qnYsBCiwEHgKktoCkWXZPTvhxARyGmd13CVB4dZ8A9fGJLKgLAdZBDCGHCKm5",
  "key22": "5yeahACHYA5GckfbjNmnHbL1RnQzqmjg3uA2VWTe9YVMmuTE9sE9ExGNFoZeHbpE7uCfsyT5S33CWVwFqUpwC95n",
  "key23": "2As4j5N1SN2f8P2sAcfbri18M7Bdtpv6dfH9ysNHuerbtrXisvduny2WXYtber1FDT77aVtrisALg3s8bJ7zyhUA",
  "key24": "2XwAeCJwP7fMqUCiWJRsoqh3exPrapQ73Q7KjypUjQnN29AF8FzK4hpe7qrZ62hg7sgzBJ2mdZEK9Q5yRGbt3Ta5",
  "key25": "2qthfNY28pret4khYCMeTHJwjVT2UaFqsDPLHs3xUxBHZc2Gyh2DibZ8AFEitraZiJEzj3f4mHb5Mr5uzc7LLeSW",
  "key26": "23Kerfq4AKp7WzUJJtnGphSA1pxDEjbXhWXLjv3HXTDb3n3T2ibm7JP3nSCQ5hFNxwZYrbbFUJeFUWB3Do464944",
  "key27": "5aQbyDBbCst7ihaSRNzFwrdWW9KxcbZ1xGUHdYPqJMozdP4nuzoN3Zb5MLjHQa3QogXgo2Uk2jA1rqpm183A6YJD",
  "key28": "5A4oMau5S5efPoEKDnZiesx2LpKewafzaRasw9npXrSUbb7kJsTp6Vi5ub8gvgfjUPQxgzPmV6ps7Jn18D6JScW3",
  "key29": "539kHfpWPRCSvux2B1fyMXP7fZjs3YErU2u8BXziHc4R4CBxvojeWQTgwQXqWyNFB6LWK5oRmb1Gvg5hC8bmpt9F",
  "key30": "2jfjrsG7yjhaUk6WbF3o6Lzrop6xCPELnBCo8FbYhrr67VzqA8jNRt2nRXcyWCbnXGwtpqfA7MDMaMSZCBwsg1st",
  "key31": "3UkgQXu3wYLnVscoMJBao6J6dhATxY8DCzQaU7Kk56J8spB2HTyrgMvwHxnJ7ywUjsNtWbHZ8nK8YLgTwFqNkAVt",
  "key32": "2ihb2mLQKVhATmhnoc6cGJXNieM32Qr74wrQuG93GapFiPET63z22DswcgwAtYTrN7GY7U3ZVQNEbe5vSVSBzatw",
  "key33": "5pQhYoYYNn9MxENH2rpnDambsXavNphwjrsjFeyuddpcqJKKyTFoFgECniZiCQuSUc8dFG1DRjTciE2bXD6BnLcj"
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
