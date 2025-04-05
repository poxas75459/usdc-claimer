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
    "WSomCe5HDPB6J3mtVJKFctfX16ps5feDvUtHbN2R3AK1siQLxhhyHM8LxHQpxmiGF4uM9P6S6sYdskDDwhDS7Nj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "516fsnxUQt8WbZX7zNU1EsjjJg295eyxpXSsp289AfzxoPWABRBaSEoUSTGRWPVdy5ssF2DgBxPUoPRCerf6B5yD",
  "key1": "5u85Lft4pz4PfaaRKZi5dNKz1ife5PyRYBVrb9zBFc7dyGTQaDTLmLcqprgd8WXHPUFrbKb6qyCTDcoTnz9fAksb",
  "key2": "44NQrh7kMeS99tFhLXEEr9vLGrkqhRaHBWq2JdMCM9THiBFoUdspo5GihKUJX43DFbcXQ76vAjdnxwYLY2qDqaco",
  "key3": "22M2gsMCMhwhGcH6b1LwSvoMgeCpZ1aXRR2sAiyWizrwrRWg3caPpxN1gGdYg1MK8DR6uZScQMJ4JpYPTrqak8c2",
  "key4": "4PPEmQazdYw4Ss7JEzkcy1v1TLQsxaRMUMa2E6yTaf4UGbsVJ7YtCLCyLTgXdwtNSP5LfCWnvm5rcPNAJqjxZgem",
  "key5": "SWgeJ6JTwgeq4b4t2owziLj6Au2ohQD6DDC4sHB4sGce5S6xBiYcpdCbEMJaN1LzL91ARFdjGDPJkteSkcHbBGF",
  "key6": "29sdSmtKjqHAMRhhbaKw9Tsf5KucFvTTgBMxdXs3H9c29SURboXZHmyiBB1N21wjuPynxvhnTCzzLAn687FDkBaU",
  "key7": "3e8gttb7C67ynhiuVBXnAGwMuyQnXrdpDidgXj5ssv9h8fKxZKmvBfodKGwTcfLLwL9QsHEFnuSjZaVSGJXyhjgZ",
  "key8": "PuYiUCrgGSJApuodZt22mXAKEqLSMR9hzw8LHBscsurHbc3faD45e2LTnRMBeb19mhrZKhaUXWyBrKaYeKL5kfW",
  "key9": "L2WUyt3Qp9FZFqZhzeecQaxDCVM5wFvC6fbjW6hs7s6AmEtJ5CewfytNjuNdu4gA19SMDWusc5nugTEvycxtRwa",
  "key10": "5p5BTPVTFyxazNY3uWWMbRQjF7a9HML3iG561xfBp6anaYgsWHUxYdnzB3YZJcpWaVQKEbXzPut29mBrvTkrKsMu",
  "key11": "Qc6FMyVXcgftgiD2y1AEUZzpqnkks9ttYJDiw5vpQ5NCxNYEjopPHKvMLaoTa6SJcqEEbPgdLuTqDh76eXuzLDB",
  "key12": "3hNjk8YMtYttQPnfEskwYwdB1CtHDeDmew8ceUgPiuFk23wNc7sM65SDQGmZv1YhdEymfFbDPaJ9zWxtpXLPvHqj",
  "key13": "TgPRH7vgSVDQtzxHAFfhoMZZzRSFf9prVEYWs6DFPxFShcMxMVCrAfinAaxjeVVc4QhkLshMPg3bsy1kXkGvkfc",
  "key14": "3LUvpKSqBwnww6WyaGagJFUstLYVZuVsx1M4QvRdwGyCN4EUVRuMxiye3R7UQ8uyvjDSboHnebVZhnqoUwjTfPh7",
  "key15": "671fBzhXPFGWwnxfgShhC24o4du1qz5x81oFbdxRNHZLFDDbfKVexNfekuan43BW3y2t5FnHTmunZUmJVPKNPYJe",
  "key16": "4DS4qtM2Jncg5F548ZMkR2JF6jEZQesVvT1rWmsDhbCEy57DXdSfrdzsiobVmBrrHVWWeMTBKJLnCiZfcHkFDgg9",
  "key17": "3Rmh41EJjm4kBps7T5DaL8PA3QqjQh3d2CJPFMu6BNemqj52tJY4GjASUSyRMH7BY2shSqSGGGeaDoXhacmTFjzX",
  "key18": "2efjEdUjJQanf78EMg9VLw5CAVUiZcuzyuVgXcQ2vrFwUnKs4tXo92dxiVqn5DQKG8YWMUVFaThsQKiXgkdSwWAK",
  "key19": "52k46NyPLKkoEanLVSt61atur1SZZaaYAZ6coppj98L3Bc7voVRm99hMXzR2mZa9QSskcnPcJgaLgPAh529qjNbn",
  "key20": "53JVpKad3Ue9CEA8N496vRC3QsXL8fCZdSoGJExrJ1jnvbYxJfLB8KtUjcWbdMJZqy5XpraPixNRQyH9rAmp2KzW",
  "key21": "55Vp9gaMxbrotZfT84HxEZUoiAAzGGJyFHFAKkSDLraeYafLznA7psVmjKg7Y9VDYHj9QtShTvjocHSnXzM7Zj5g",
  "key22": "33NbmdxKjTnt7WFYkCmSLHZVR6qZqmsJpzrN5qAeNWMEmhHW7a9Y63ytYVEGG4dAbrq3VaRxrcVfZ5yJMD3rYNwJ",
  "key23": "2iU6rmEwiqCY64tbcjsKf62XNtszH915HkAxHGWDtzfaK2wCQjA4KDZ9suERUFSKPJ881ksRYBkJefbQh1tHSBFi",
  "key24": "PTt1BuY5gnmP7FghAduioKHfnViLM4FiHAdu95GPjJ2jGVgT1Qhp1pxS3chgCbA6EK4iJieiJ4e93tmAv2Ny6da",
  "key25": "3vLcGMWF4nBgUAyT1HMpSLMQ1k7XxKY6wkKFcTDdNqxGwKQawwQdNSrWAoXSfYNzPm6C5nS6jHSrxa77JG6g1KXy",
  "key26": "5et66U2h2xhaRYFbqfQ3iYXgvgG4n2wHYZzdbnCt78P4X22W47xBaNFdiM4L5LMHfjyL2gdYhXTQbEk6oFPZEgfB",
  "key27": "3QK8nyFAJ3AjNW441qQMxBNpPykf4sEDHKqj7AP69uP4sZqTc6zVuDuLvvL7LdkZZT3djAgEZdoH88i55aYYioeb",
  "key28": "yeJdX1UdpQrmTiMyDPEsECHd86m2y3BizubjdUc3EqjwicfnpGXeepPVXQhuJE66eYerv4ctvNLZ3GKEAkfudY6",
  "key29": "5etER6dCXcQZVoGibWVxaxBdqYXHjj2q9urDwYcaXgzUu9LfZY7ev8iviGFpGog2XBSBwQiP1Z1nvkYpBbrv5vNq",
  "key30": "57EaWip5poYAxnp7xPAjuRnKv7ait7jzpPf9G3XiMJ1fFmcoJ359kKZAhVbCT3eaxqcDAc6vL4q7PZ8u8B5sv2ko",
  "key31": "2yqUqwGqfZ3vrW5U6EaNKdqc5tZC2SPWPPorQewiWo5BdKB6pt3QyM7W6mYX37VtoJKk18Adw1kCxwX6rhV4Jutz",
  "key32": "3B6PNQvPus2YcFy7xRM4B178LxJ41ntRnGozoDhaHAseDQQ2MDSjXxFwX399Mttb33y7jv9JTdh2gqyBLuA9DvE6",
  "key33": "5sGzqeKQ7X6vsTMKf5gKBuSgn13CK4RxVNHZue5wCvnYudEPC4Yt19aBH8uTeANnsKVBkWNsFXBMvMuCjNFvBocD",
  "key34": "3yuxtFRKs1mhzoGzaxCoK8pJ7ZG6AaYt9wkvEtrM7AP8ny7we1jW6dRiDAZGcDD1khHnFcwcxQUGmH1kMLN5mLt1",
  "key35": "LAmyESF7Wfzh5TZDMjdHzEtSFnfZtRamCMZf47NUGXn7Za3VH8MgWJUexPBY7B7Du1AnXMySap6R843KPcrYtDj",
  "key36": "4xix157ByBZCWpKLjLMCVWMWXtVU2tjGkFVSYUKgcL7qxtuhvevRqipJTwCumCynzbWbiTH8z7BQAKTzSKEDbub6",
  "key37": "4G3AdDe8JxrGNEGCy2kRWV7sbN6wWgYtf8it6fJQmE6AoSbonBp9TTvj4rE4JysqwfLU4c6zPQdC5kosQNTiVoS6",
  "key38": "3sLFdH34Y8Qdmx4ECYH9msjSaVi2MXiHv17aSw9hGTge8EiUmRcR4MBZJxVokXg9d4PfQ4tqHdBwVduiVXP6RPUa",
  "key39": "5QTtHDp5vXNHHwsm9hAgwyt4tZ7cDY1fr8uDcNAqpV1gw3a5bvX5VZTr4WE5nxftrqTYtu284V4nmSpRqhBQ1NWt",
  "key40": "46pMfmcgwZJNAHtjQhFqTSft3ig3cnhKHPN3VBj4Cri8FCczLibpKYCscrDKNaF9jeaifm7cdmmaEKCyKh2JZThF",
  "key41": "5ijBTaqbCJSTEXTbQeAUd53TmKEmcginAoGm8X64GJJRGJojAanfw8J6A9R3USkFFHLY8vf7ChSD3rSTcqQBFBx6",
  "key42": "5FZZUezSeZPWeiLc19rJDjJ3mY7WuY9YdDQkLRN5NDroRguu5SxUWHFXdV6953WFd7LqaafRGjoG9AX8cFo67NKq",
  "key43": "2SUdPuoJK6Y4kytQ9QzQJSuJpkFnMkbRypF1UtSbu4usiMXNLpYLyvBg3kXmiCLSkEuGaJRkhmnQ7viwTeL2a6fU",
  "key44": "3tT1dpR23mqVkfdmAMFaQqV8XNTKLJZ6CZwrqDhT8WMLE6mxqXmrUccSTemgmAJV61RgPDoqTVCpDqjWDPF2GDFJ",
  "key45": "3yjB4jpFoQFaop1kkqkSXm5A5zJ6qv1BUUyfCXvN8vsPyHksi82riYYhUGQB5yMgD7Ucpdqe3UQ3bkHuP47Jx1R9"
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
