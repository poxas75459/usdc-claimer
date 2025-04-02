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
    "4vovCa7qhkyAvbpyvS74eDedCjL9AQ38uZRMGgXi6rShWdSWndhNPmMpN1zSgPTgSXqQmDARzVoDbT6ULyYKHA79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VKnZzH2nkQCPSYE2pQG89969kXQ2E6otKzCzwGG1bkfhNRG7GDTgYMVA7XQywQQ82hHqVCSjfHbJ9RzAW5ouio2",
  "key1": "4vdAtzQh4eDa2BZ6SUKq8aRVvRecKcVanumahbhQR41f3dnSQqJqqajwMJy15poy4qT8qzZfUVHftWwTyRAVu3n6",
  "key2": "eHjEYHdMt2zMug29BXR2eYQ4BqrTkHqT2MgKwuNcL7SQ9zshR1SoXtQkQswHRTBcNsHhjqqGjAc2j4wwNe7wvMw",
  "key3": "5gRR86RCCiLXtPbNGkYW2a9Lt77QdQgUjGwqkKgxmMukUScKwAHs2haqXHBFguKLdBeva7Q3q1yhp1NYTZ7ZC46o",
  "key4": "5CGYzaFRSgRWokerpH8Qkhkm5LpzF6AFRQZh4cN3oVwcwFvuK36dDMQm5ufbFje26UtJrBahbZW5Nx2zRWfUmtN",
  "key5": "2htgUYDqzfXut2REcf3LUBS9F3pFDAZnMXt5Vn6hrXLaHazR6E2KFkbk6XPPRKRJexEq7wzvVeJMt6uNFgguXru4",
  "key6": "4LD4vwU8Erq4QcJVJ7dPgHDUjsAPWGi6W5a2pRBU5prwR3R3aA2AGbFg2HSUBqdVM4se7kuLebxriDvU14AjFHqz",
  "key7": "3tVBPC8SHzKk737YakcNahQQcj1UyirMLoiK2hbw6qqyno8QHgcs9tus82Ua8CKooJUGUkTVX4eEhriPSnRurLhN",
  "key8": "2i1w9LcoL4WL5KwETwLYP7VbzUhXUU6nSHz9ENhsnmXdB9obfVXmfA1gCTVKeqKtBU7y3CTmxTVz55xjiQCD8RqP",
  "key9": "5cCM9RGoC5Pz7YiF3kxbnp5XwyWm8gK8yDKwHrsHdDLPFSrpioQt7BEvidcPQsr6suTAXLvmauGKinBrnKCnewHX",
  "key10": "3o6XUqueQqyNK8hfbbQ5h9LDpsmTMjcnsWUqP8gXyTVwKz4NHu5FR9yPt7VwQsJv1499gGtsXvDALAp3wYCCWRh7",
  "key11": "3VEbuxhPD878hvT78nGG8TsUxaJxreqzawLfBnMXNQ2hY5UeaG4pTcH5LbHyGhzryrT81uiv8DzCfjjGHkMerc37",
  "key12": "3t7ArY8xTw9bBJCJSfTKCYSxc5GTv8sEawvsSkqDXsGk1svWGiMJfx7f6oeLgNg39M9SmcbZYpApED8uC4xdgj95",
  "key13": "vW9wEr1GrFVrz8FGB75cuuRhraUQ6ucWzPJ7AyBvgqwesob33zuPciURgsq2ueNJEdZBEivKqzRRcdjRrBYoWvZ",
  "key14": "545s2WbfB5oUyKdUZmUdwSSUvC2AVcBPpXXuHJa6qLoAwmp2DJkbJ72d31zgk8Nn8WGnmXL1g3y3w6ZCsMQ28QKt",
  "key15": "2DWQCjZgFXT6vyei9VohkVkYwvuG4ZL6TgcZ7HPkGgMnsYprpotjYc1pmUfbQfkN5UqsoUqR1mSr6mCNG7CUKJ9H",
  "key16": "4TzHiRzUdB4iH7v3bsdG2VpK1UEAPGs9FXhUCx3S25z86F8rLaR6Ui4sBtnodcGUqkemXSfZgFkZmWWAWYiAr9Mv",
  "key17": "3t3LB2tzEVjNoSPPS6VsRxhgPErkMtWoZB3vAFYv1YMFaPaioG8D7Bz4sV1iNPTVHX6YFBYxxitFyyKLh98P3iGf",
  "key18": "4QEkBTEwwJE8dzPjm4JYCKGM2j4nwMqU77XfmWWPEFTC81661BeUFF9hg27tgewz8SUrduqgsTo4dPJD2jGY2BM",
  "key19": "4Td4VMUzBx8n3B45SisUAAyn45iFKQbe9kreQCWsUXs1d8EN2LzXUv493dCeY3evydE39djbvLKyfjmpX7yFPYwc",
  "key20": "546pKo8PLdQetVc2xrebqCqQX89tmyv6C7MSTshdwtSCCN6WbGHKfAR1UK9EE41ZfVP15hRhPxc52LSSNtGy6SXV",
  "key21": "2CXWkRztZobiZ8FYbQHNdJiJrakKoRPZu92fFGCY9vfXN8FSFyXgDE2YfhGh9aed5pfd3XN3Cvc3fjrQ9ySxS7LJ",
  "key22": "2qymEb3SuCiPayecMr5ygMgMYMcrr1WsYujjiwdxRT5ghaAQMVqipzXUrv2jB3VnC1doBuNYrstdwH2D3ReuGyUQ",
  "key23": "5MEFpSaY8KTtkD3sXkTmwPpUZ1iRdBd6MnLtaGUJ7WZam56T9Xq4NfT4oGycF91sVjyxSA9FZbH3SNLT9ZJqeQmt",
  "key24": "4HUzgiyzZue4BXUbT6v2dKeKjjz5X3LEgQdgzrQdrP5NLLEHSbFWTeV4T1BZEywYAKYnwJ3HZLQePedavPEGUdig",
  "key25": "5W9JNmpqkFwjZ3zjLjdByTJpLTqyrit8RCeZWQxiBSujEupzBiwCm1Bd9kADsLH9QPibbnpy7BrP4nTnsbp8Eo3C",
  "key26": "5mnYyVVoZC3x5Xz12uPiCrdWvTroYmCarqG3zhC4yKA9frDKrGrpgZXBnFCcM4cfwrxSYVoNBj7upSgouZWtWH4L",
  "key27": "61Tmx5Xf1TZduADbwZTcXLcxF15o5ohr3USDVJ6a4XisRiVqsLhLY3W5Nt66tErf9EntsWWMkts4AiecUiBbhiXn",
  "key28": "4BahWpaEdD6xnrH3unbgRcJKKHRP6QNuiqvzHoQRHRNfKM6Ao7qqZcyjz4kYnaoV5rNsW3UNWBAajktT8wHwbauD",
  "key29": "4o8VK1g48Y69zpuECP3FHuLfQjQCwB98SaxKTmhtSYNYHHot7pXFAjgnNhUJrKBHddAjNx21s4VUag2z7vJKK2Ca",
  "key30": "Ccxw1p4WT8JTUnpGMcEZN9wHVnjQB63sM8xHjT8bXTDcuNf721ybNujzT8ESjEFZT2WPCEWZNK1z5NaSjPfjvjr",
  "key31": "2VACF3f7m6qH8RPjSfL9oPsWmfe3SXipSnfqccUh8S1u1sVUtE9mRHfu28QsoAAxYdKxsKGpUCahjMQAQBgxBTfT",
  "key32": "3LnVeb5eoPuRkVc1W9g5pZi7ZFCNghpTTp2g8CZbL5uwU3L4pgfFzdwtmDbZ76gVQRBz3RZf5J4bx1b4D762hYWu",
  "key33": "2Uv2Ruw1kKV3M2aDi67ir6zXFXtzquHTnGq7rXjRoMdtmE3fpgndk4PJPJ6AzGghWBFy1ApE4TbPJxfxa5B6Mo4t",
  "key34": "3MabQQwaXJ8udvc5KKYmga7tVfurYmkAhZmwYdxoid34uBgNjTZMEEmXHzz5pJpw53JXGKkMa9RMb93wTSFRp6EG",
  "key35": "53WqoTkkbV4kW9RiGsrzMUudNMZ1ihMM9r3JuBQjDv4twT14DDEScvqfaXNxTiCJvX4bUt1uNsjPfP2rmZo3CaEC",
  "key36": "3Ye4TqkmYVQxkbnmH5yonumZEc5m12B6AsgSEyMUEjAhHoemVDqf3UvFgLrjWCHNJAvfXefjPMXvLFXsCjctiaco",
  "key37": "5vVhtLDYizBiuxaD4nrK3s3HjTm6cVfY4s4RZohbt9zkWziNAYCCrsmELjmr1xDG8sWevsxBQJvZE4o31CkX4eko",
  "key38": "66GYetTwMn73oyxrKhF3chyopHGvSPLbDt2S8mG4XDkgy2nR9LUTbGgpbz7WhHhVQvdnDj2vQyFrN62TJtAgZRC3",
  "key39": "4j9BnwehYsDHhEsQFjdWb1tZNqhaD2BpjGeSobHmR8jhnxi1DRMHB8pT8LxFzMhMkxQvGe3bvLGkmafTghcNs9vt",
  "key40": "3TMunUzMtPFgRSoHUCn5rseKvMLLubvYgojoPPJkbgNmxAUejxsAATHuJvj11Sfq9Tsm8xUJhs6Gyvo6W6AZaCxp",
  "key41": "34hSwqxPZZi5EieJ6SXiUMi3Y71Ny7JUdCu8DPmgoMUpdzWavVUJLi1JmtKnzZrcX7pvPZ525ERowbr68dYKXzK3",
  "key42": "2dU9xJM6U11VWTzFbu1oTdNPENb75yfjeRDvgQNgPaqGadk2x4gN7mPbER8w2wc7bYyFW2R595hTLZnkfmhbFkJF",
  "key43": "btibqJvu1ZYPT6zryLehaQKdtBmWYXCwdtbAvGa5yrAgtjXHgC8KhLDyg9JUwxMfVapGcRs4WkXTrY51Tpghm9L",
  "key44": "3PxE7UTSpfsvus93qDsH2KdyCqtGgAGJNkhi6tkGx9GVkmKt7WSUEugRhRG2hvSvw42kVE9zSCzPz93zQvrDjdeC",
  "key45": "5gv2jgCH6UzMVN3GvEQu723QhyjapXSM4ixHDJifqtWPUuVcpxV2gM9Pny1RFNFKdJTBQxYT3MkyfAAeGbfvRwmv",
  "key46": "3Gy5FvLFEkwQ4EvpsbtzR14DZ3jS1orkQguCUgGCcJn4ZTKxeYCMSAf4httaBeFyScZYNb1dK53JLPn8g51fZgyS",
  "key47": "4GGA7oVQua7vsiCDLjopC6KgwWHgi5K9xtxJDvjn3SjaKdjj3VTjkM2RqA6YAyMw3A9xosqYS18Nsny8t3NxWeEM"
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
