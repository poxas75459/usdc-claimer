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
    "2a5Bei9nwuXyaLmWBQMH2DRz2sFEnv8EmJNg7ZrRKn8f4hrJQC9MvA3TUf3HZKoR4gSPwjJ2D2X5MuUorTTgyc5X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HRE7BuYBnbpkS2jzqUTDwtgM3reKWMv1fHudLFf22rbLKYfD4Xx45oFXbqzuJGCg5FK4zdNpiv5AzpbVzGBbHos",
  "key1": "2HgRjeKNorpgot79yJFJ6czTuv5ojuVoLecq1cZ8R5S1mYoBr7Dtv7tRfFUgtoYgyt1kV3D1bZsBX27554TE9ZT8",
  "key2": "4djLksWNBjYSgfRMQLCNazh7crx63Vk4DpBRdo6QwBMZc87v7kwtfXXizsXZd3Fc3NqVogUrHkUXnZNQ7vMncRwa",
  "key3": "5NQ9FfawwdAARTjJKpgDhrLzNrzQgV3HNqynKpy9Y8b4Trk9GZyPLADRAPewho6XqHp2sMxisG2hCejDzewuPZyR",
  "key4": "q21ApWSNWU4HPRCdrg4MMMPXtRW3Yi8xjaQN57bFzEH3nRhqWYKTSdhhmz91GMtwH5N75iGNENy8FN5beybpLLf",
  "key5": "2G4fx8ebeNcvhyTeN2NnnCZp5RcUHrzBsLcLZMeJoRnQZw3yxkMbobHeieXHsUatHrrQYpnDZEH7p1THWnEPQ9rP",
  "key6": "3mN3DtvKja4g8YqcwAbw4DqeK2KhduQHindnADcmrMV8DA5f8EJKCzFfRzksFnPsYBnHM9hXpx2Xo6jQo2er38Pn",
  "key7": "2q5vjta4DmeiSXjMcZMbRPynSDYnaAjfbPUkPtEeQUgxa4TyPyvBMrpeecTkQtqePxhS4WKfKQTZbxMDRoMyW7BJ",
  "key8": "cxKDUisWQHd3jDVesvYcnWcRFPNY2CqAmvVMm8MXXK24px3VLoX1dE9jeBcZhhcBQDamqc7jh92a9jLq84Kavrs",
  "key9": "2PiwhPvf91jt8ckuBFkrrEg1A23R239vaYdkUUok2m5Ug7i1g33gzwH6YGDGEPG5fpeaDKrvFg2hPcbNTo2Sui1b",
  "key10": "3tZXkhy6qMnxa3okJ6NYRrGkj2DmBb5ksAJ1LBYCybLoLNVqQq3TWdz7daMEBNHn8Z5XEZfPdy44iKhDxykwEdEJ",
  "key11": "5myCCvmKH73hbQkaPPHawaMufU9WU4DsGF952hS3RuVszUoC3FKWrYPw2sunX9MZV7nPUDHyhu9uEDxBz21SKc5J",
  "key12": "4vK71LsRKSjwUwJ3ctgpHYNmmRDHShRe4goqQtnNGM1kfgn3nHtADGr4KPRAvvSuaLoDpmehxdBhWfDb8u7w4ESR",
  "key13": "2f3Dc4wXvK3KivxfMEknkTYXYmF7DAzNXzKGEjyE4Tn4aSf9XFXECWi5HED279qC26gddJcKy2x1c6ryqM9Pbfps",
  "key14": "R8jjiqvF8WaHXqxk1GFQqb9uAtT4RqJ4d5PCVBCGYbfpDonfp4Hi6QfRwHf61XWTeB1QyHezZh1A9ffrf3R8zdV",
  "key15": "491hpCKg3PNXsywyvxZRQnJr2LwiWJsikvMcM2ChpJ9pkTEE7BJYccujtYMeEumpACa4r8ZzL2cgDCqZ9Gn849A",
  "key16": "5CwN6HqivS3zZHCBXjg72oZZdt3iVMQYYXScc3NikrDhaRMDbViKEDxPczifAbus8pRzaQr432kqG6anzXUty75X",
  "key17": "3koHVzTktyfK6GbwwmwNeUiD3xpTG7mmhzVx65FNeM1Dm5MWjmLSiFoAJ11GCgHRAFgUKwYY9Doqr1p2aSGU7aDD",
  "key18": "4ohLVDbCBAHc5iGLqjwvCQ6FwGjkJ4WmDLiBmnYArRvoxMZy3pZf14kC1Copbz5NdDNT8UK4wrmSf5JUFEM4KVqX",
  "key19": "4SRBHFGjxXt7HrvLfmediwYjR2d78vqKTeHJvQjqgeLTLzSMa5tBRgFWaLHuiFN1JLu3Rwq3zngi1RDv46ikj7FK",
  "key20": "437UkXZHq7vpotVtM5utts54H4pj4yd42shrkamPXGftZ7P3pX9Sc7188rwGEwsQfGJt2ytKGWfX22ztm3bioaib",
  "key21": "37g31Jm9fUqcEkUETieCHgwutr43n8GDUyJohhPfBWurXPGT7gN2vEYG8krnCRzvmpqUPtdDEP1tuvoxJQqSDtCT",
  "key22": "3veP3QeoqiNK7gKsbYYnar4wt8ouSJaEyN6WHRiEVAfnwvbV9ti9zZuX7SNenTc67Mtva5zNMMERh3so6FJjVxKW",
  "key23": "2QjqQq18SiFrhj3UvaQ9GLqmABXHgHmaG21xp7FPawZ6o93NpnHhwSWYXXrnmd28gCiR8oWQWUbBJGJ3TB2xo4zN",
  "key24": "5kmXovN2ECmBwi6xJkEZFiqmdEJKsxHrvq2BoyumosxXWeLi5vwrMPYJaicVSxpjCF851sRtYb24WgbUjuDHuEMN",
  "key25": "3K9BN4hjQYe1BG1PaRcfMJzeVRiFSpcPwSbyoWaKUmYfqMUgZqBKCVr9wevskUtUBU2yQ2rmHyje5kR7V9Akky3N",
  "key26": "xJv9kDxZ3fhJEg78cGTScEr3Busty4K2P6assQp5rEaqjXf7ei31Ad6WqweHPcFkxMN2FsVK6hNmAqNbCwmA5X7",
  "key27": "2JjF8N6CeGLCHVSSsQweaJtgwv6fFayWuY6WGNbkg6QzhZcDZBt5GFtS2R5qhYej1y7uHpJihHiKDPZaHHvrWe5i",
  "key28": "46TmGx9K89vBqkKL26MFe2R8EG22TAByVdN8mcDLv7eLcZ5sxifT5XW7FW6mV7sCcGMd61vPcrWxjCioy9ecSH4e",
  "key29": "4qSWx8XHYBbLb8mJAnds38v7LBb75DFUdw8FQr2xr2yJz1sWDB5zDYPrH9WRkmRb7D4FPcTjV1kemLXdb9oGyy2z",
  "key30": "2W73sLA8RzqnXaT6We5NvdT2gW7NrTqdxButknLZeKphSgHw7oNDGdfPFGTugzzuiwnm9qGhFTrzqXNnigpuAfuu",
  "key31": "2wqiHkFYBtQD3sdcCZthTkCmqFGRTnR6G2yXCRdjPuVmm4kvZxBPmBdKFL4uLUyqxdatMsiEJNuCBe5m8cucyYMt",
  "key32": "5poBDwveWcDqhMZtjjhaeVjwpu98CshhXiAUGoqHKk6QjDu9vv4cjRe4rDGt6NGv4wba1p7dqkwtqCCvQ5rWHpsR",
  "key33": "3wwHMMbNtDbxxXW5o6xis83Z8m2WfmAseh8ZEdjSJjZJYbkzFZTNTjacsnU39ry3Q5dWSXZ8aQfP2XfWJinHh25F",
  "key34": "318Arqb4RZfri2qcuJtwwjzbqt7YoWRfvuZDXkvEDEF3uhx1QKSCv7VX4i8PB4QQdBFUuPBr4GYpwwLUZiNLgkS",
  "key35": "5RYEAJUordBmVfsHTMoipJtxtZ4azPh6JsSHEb5gtG8QEgnZjvaqtLRE5f8DqSmHacCoJJ61vpYAss77VL9gSHbD",
  "key36": "5iSRrD9ZZ21ryyctxrdByGmKKh2YJJwALcU9BC1jdr9U7DLdXiXaK39RS7dfLdansRs6xLDB9puKQtyB7z4yQUaA",
  "key37": "jLnTyqgCHn3hUNU1LaiQFowEdLwrxAMfW7vp547Tb8sATYDvvRe9rZ4zfcwjWVFk2Y9XQsSZnatonQH5TpptKtM",
  "key38": "2nGAvNUro6oV3vut8CBdwmARm5q4EGyVHXaeDQtcgNPuhzdpZzeZLD4hC38akC4VQqXDLZwABM4pwMKJWZLFigSe"
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
