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
    "5WqrRCHHRBaCQ7HaMKnTKLfXpKN6RzwCVr5MZhXd7U3eY6gP8Hn68cophLatiKDQGhDve51H1PpTvRTwiQQSoee2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aoBPTUjeTieuhWoajMCA63zvrS4QHypJg2cQpngyyeTgDu9RxhTp6Fuoh4zs6uDxYXfjhSczf2d3J996AFcGXRy",
  "key1": "4EAqNVYMsjpr3emQtF3yyqWtt833e9eTYLSWWBY2YX7HptwmvZE9Hk1R2XVpAJGomAQmAi55Qmbm8yjxXVi8wNBA",
  "key2": "4ADwY5G8FEjTpzGmq8EtcZwXmWvVCBdu912PRijZZkyhAQEJfeoRGykL8Jxp8z2RtCQEyDXwMjFJeTr8RK1bksJ4",
  "key3": "5TGQogoh2PSf9qREhJ98c2iBBJ5A3fRb52EeLPwhEy7jRDRjn8MEfisWM2QieqAUGBanhujEmojiZRV7FBL36txz",
  "key4": "4hxv5x8Rd8rJ61P21TWF947bvGBVrCeSQPpHBHx2JDzCLVDHQffvaQb9SgVNXbZkQmbk1hidJFQFGjpvJ4wtUN5T",
  "key5": "4zxSXpXetPuyJGfEXLbNWCSAbQArX1aN7j4nVJYhtFMRV3rVmBKHF7ZMTvZsu34A1xHbdyaqMrB94xqEwsxS1e7H",
  "key6": "3ZLmrHKeiqVMmeXyDCEkwXp3jqy28WRWNnhTKhp1cJ7qyf7YhHfSWx2dC1DZBdconF29utYDq1y7GGXDAnmweZCj",
  "key7": "24z5aXncc15faoQnakYjckdSkULJq7dX4SY7R8q4mSENtd7GqzdkHiVLvLqw1pEtmNXWyowbmq3Ayj28iQ4EfGCc",
  "key8": "Rwkjyga72Qy82bRUFpKsfQcavCAcatUG9zFkRzHM8zkNdoxda9BSK1rFQ2qcAdbgpkr5wQUEzmCE9Z2M22pBNvN",
  "key9": "zp8o2RJ22VcfHUkWM5nsmf3KhykJpkzyPF1A2DejDccQgtSqn6qVGNCm3Kh2JqiGKhiB98eFFEXqft1EdM7oa4Z",
  "key10": "Z6cdXZdGGUhfAoG43Euxxjke5QUCbr6tXLTGd7uUt9jr2iXp5UQvA17kZBu2R6cwZXDVCpHBqaMxYZ5ek7tQ8jB",
  "key11": "3pHWvkDUY61h2HnY1WwaQxZQL5gXgUdGe4dEyRhmirVdw6fFRYMcgv4WubFutpavKkE4Hc4J39bwsSCGGEMbN8vh",
  "key12": "491Qe79yGLEsRaZUy87AB6fSiUJajhvnfEgKBKeipS8ZAhsk2TGRnjtcRX5TaqJbnYfQjkmnu4NVGjs2wf3C63b3",
  "key13": "25Sid2RSCcp3Kf58xRt2hunqu8CTpVBLtU2cvJQR3FdjdH6iqNj177bxwHMi3L6GJqXYHTJrhA3dZQHav2XXw4eh",
  "key14": "4UhhD9zgDNGeQGGLPw3U9YqhMcDjPPhbQmFR41xJzWchkP5a2sWZqHEhdo5tGBHBmw9vw721Dj2YNbLbVaynhHay",
  "key15": "5N6bx1mELRxpYdsu6P922a63qUh3vPV6FZnJVm27vqXpXLqtNMd3uYq6LsFbwPgjfBmk4ey7LKTn1CafQgmGGDYM",
  "key16": "275eepY23hKSUNSVHfnJ5g2UWt37NfA1fEzBUtkpBkx29Goa5BAvkN9b63CaKVsvKKAtewKKbe5yaFEmZwWi2tGo",
  "key17": "3hPcVuKaz1T4z8ceLM7A1c1PgRaYCAmabhyMYncay4cjKjFgMhsxouaf9T9p9gHYeLQuiW3KGt7FyHZGPJTVidc7",
  "key18": "4neA77AigGdf3BxodbwWzk4uqmDaBNkekKeC7Pc18RBbqtSoiWHnQHoyP8kP68XL7QCJBVoKRRMvkosyCJzkoMZ2",
  "key19": "3uBCAxDPmTMJ33hMzWjikqtTqSBi6gCHuqfCzp1yYtczyY3KWVqX83YNTomAcdnYQpL4FzXmX6Fs2T7ryZiyiXVD",
  "key20": "4VhJSUr1eRmCnnFvsd1RuzKQaQPM1eRoUDJrPCjGGJotTiD3T1q4QcJmno8wd7CrcunqXmvPmT5FJQYSLYUrueBV",
  "key21": "3PYmRPpsJyGZW14ymB8WwNQghWhDdM1jWRSCzJhtfSEoySbaJvR4akDQZpM3v4wk5ofxdFHd8x2gkbPu9RvScMqo",
  "key22": "5sRbD2mmESuGsGuRpWDvVTZGBJtSEDhuvEKzSMXN6RiRgdebAszasx3y9NUrPa24pdK5mwnWxrJBMHn7boWEMvJ4",
  "key23": "5kpbDaic8a8TMCRiz84bHt1z5RovVeysWtNXS88vTnry41JGY7RzZCCAg8fxBAY9m9qe6XtLqWFQMscxeJVt9Z8X",
  "key24": "2FixPqmByFnzrwSxKBANskbCyiYE5vMWsMYrPkn1qBKpQo2aKVCr3XVU2P5J5bdEWQmuWRUM8SDqAYuhqcgYa1Nw",
  "key25": "y2tZbLNDwd47hVjnoMUYmbBi3mdiXyv5vKris2ZwEM3fg9kzBa8co7QeyiC9WyeizGRMNBTmxLMqp1jDrN8GhYQ",
  "key26": "5vj6twc21N6pCVoiY4dyUTzvZDuHudqHoyVUYhab8MZgnkPZPn4eh7RFQEjcsnR4LsdNrGEk5XWGMPNxwfyJtyPZ",
  "key27": "4woJFMcPHZDX3Tc9pJazuXL6dSrjvqMnWxsV8Ff9Nz1eNSA7K124sNuEzTTeBAJsnW1vAkiQhR3LpNdbXaCpRq4m",
  "key28": "2bmTywPCoBQUjpyYVBHpgFTxdFJkuknC9GhxtqG2YjeNvWTjU4dbFBtGo12Vg5j5131nT5tAVhMpfSxFA6yXafxQ",
  "key29": "8HQ8Co1SBDmEMTNtS8yk6xdNUVCk6rheMj6VWmwQU3fk1NW6Q1jw2JmdyjZUvprmUGKtMQZA1BETnr2Ew9U2MaK",
  "key30": "2T7xjPvWRmQtSLBeyTn1zjEvmWHxge3pgud22C3JYqhtVoxcjbUYs4xYbmLjJH7MM9yAtyyowjHTyHn5RdT8xSQ",
  "key31": "2cBzCweofNW1d35gQ88SX1QH1UbEWgTUgK1hJQpztg3rCaDCWsydFDSJcv9datkxYMzDwrSAZGzfepX1wPpiMSfZ",
  "key32": "5y3KPuJAptvx4Jszc25aTS87yej9GeW3MYsZcC1kdXpPVL3ygwMQfvrhroadCjypGHp77gyGKETzBG135Tw5ZmF2",
  "key33": "653RUE99GzNyn7icmSmHeVNRYG6rVX6C8amPgvTT6weXUNzwP8QhMUi76Em5mvQCQb7e3x8TxXC4eQ2W4PbdVPc1",
  "key34": "4T6H8HFftrCWgVGPs5e7zr9JHvB7NkTj6JXySycWxAZACBix1UoJyqSEHLmckwntgwcQ9zwqYNBFuwcfNEsMPinj",
  "key35": "3Qvou3Tbm4KUEU5v4TqwL46ovLGCQKGUev7aYj4KY16Sq7RMoxnSprhBoVkkB2nyLaoS61BsKYJf13a7nQJ3jtF",
  "key36": "h1HzydsA718xnDCNXmQQgm22wosoXS16mzxSGxVGDw3fk5Q9hrgQXxjjKVzY1cft6dyC9bXiJYW1PZGrwjnEjYF",
  "key37": "2i7ikE7U1YZxLEHUKqZRw2zBaCH63RsmQbLcWiSDBHpFUgq1jCVW3z4aE75RQ6EKqCt4ANXo64imYfmJpGonDW6H",
  "key38": "4xBtFNgYMSWe2XhXUf3nCLK99m26szaFVHdARquJRCLwB5RGjWrjJer7iVzdEzeyPRsyighpfjabcWVkV7zn9gLw",
  "key39": "4Fp1QN6Mo62G2AKak61W8Seno2NzCxLFXJNPvxnusFEzts87mgASU9zPDw8tAeY3j6G8Y6QkFHCZuCq9paeFwsGQ",
  "key40": "2Zed6VxLLgVpWTc7uwGdp2HSBSvHFVDBrxDwoAidyqr7SjKAemka4xSq2RLhP5rUhDYJZQnY65F7p2dbjpDzeMh4",
  "key41": "jQM3DvphePCFf5gZXudim4LCoEuaR4ywBieEWJPMbJ6qAXWYiHET4s1R6Ni8oTi8g93zDNyAW8isaPnXKMtJeXY",
  "key42": "2g7kC8LyHP46xYyqxeH11RXdQwq83LQg8v9psGnJiVfN6zLFYESdwgbqPi11PUGLieCBUkjjQLrY4x3GartRfUhk",
  "key43": "5Az82sp8GWBa8RaEkiYKgbdGVRdyz8tLD1n4WpMK9HQ9djR8G3itoxeRCE3wa2nCvpy5DGB34dvLbV9oh6rX7dJL",
  "key44": "QzuBNctnGdMSDLrGxTNQqrYscaZNyaHfD2JWiusNFt4Vmirby76XLwfQPQia48DkuRaLZi2um2Y7gMyjJ4KuiT4",
  "key45": "uqtTZf6yK6qnstaoz5eWSs7FSn6MrQqFuiFigHQkGA4Ca85v3ytienhJYanpWEHHWodVbZednYno7tcn6XpKVzp",
  "key46": "4qkF9p91S6fPSyw5VHwCTN6eGS7PjZXGwgWWk4NoDbRr2LUVoFwLA7P2Pvb9ZNaEpK4bka1turGaU51Rb8r9Hzwi"
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
