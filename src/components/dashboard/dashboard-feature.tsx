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
    "jh48wU2jaPnrqr4H49uHgE98LwEy7Px3KeMDbFm3GqPa9Q7JUMSjGEBiDAD1uk3VjD7QuyQjpxgsUiSfsCjkEAt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1dqz2Bzihugan6a7pLpXyVnC4G34REXBF7eZps2i7bvE39ha3X8La4Xiqn3TwCWFSikEcEm7Vov1r4RgHoCUMf8",
  "key1": "46Hq8FXP4W2eWzM5AJrCWoBmKoYyE3fDVCJzA1Anh8BsDVf2dPPNLu4AWBFmC8eLJbevCn54ApHF3Bt85Qkghfq9",
  "key2": "2n7p1eKMjVh3oGE6wsHGD1Kh1tGp66xdFXhbbWDekXt8JzjYd8ScH2qCQtYXitzCUvxmjEMsZ6KAJ4bnbaxKwfKc",
  "key3": "3TixQFPWB9fsc2WxgYqAu8uosFHCn4ZdwsB5HsJZ4Anhfddu2RKqT21V1TXnkLN1omUnMUhm9YKeG31277r5cwRL",
  "key4": "3HddM7Zx2omh8ALkJF5Mepqkkzn1VX9vU8JCYLqgG7FUHtGaynefnmeWggqsuzmeBRu2wFCig2paf5xCJNPY1URn",
  "key5": "BthTQfGrxSFeBsU5JQ9cnPxW9jCuuc6ZWxVUXKibMhMwGwtSHao54Fhr8ciibAcJDX5sKtgi3A6Ge1n41qpSs6d",
  "key6": "53QRHXA4iFRc7fRMnAMjTFFcDnoKRY6CmSL1xhntuq587cvDA7RLBfNT5peoELB5gKL1DySLg4KsJCWbdkKU9qeZ",
  "key7": "3EhU4K7VbvS3NBAQ5PNPv7hKNtXh13FdaRV5dr95Y3p4EyNwJs1p6iqCjUZghveoBFh9v9QukBxVjaAQXmwLyiQH",
  "key8": "3Ax4QTpgCYBScpTS4sRFPSi9tXnn9Pa9HfikoE1joVMPaBJgJMYrBjt4R7cDt6tzKaHB1LdWnkg4w5s4DchqQGgL",
  "key9": "M5Z7Z6VLXjRxZYMfjTAof9EPC8M6jfr1peGUmFfs7REEsCZg5a8ANmwwADvFeXFqRCanRtQQNJBAAFDVDSoz8Sz",
  "key10": "5ryCmDrqgXpxEPbnnZisMkdoQGJwfQFRbphrrjkxFJj724BTziB6fEBYUSb4AXceDHqqF2Kscu47CMXLLLjEMGbC",
  "key11": "3SP2GZnAH11CWP4H9EYZDmjWTq9DH1F6EtjxLPwhWB2uK8kXSJuC4mcirLseGtmM5bHVaugiHmyEq6m2dqnpHUUg",
  "key12": "zfq2qz1Scdot8CstweKZD8CePWmUAw6aVDeibLWdj6hwRN9TKmfyATZSxXQ7YA7qhKULsNieCdaHSvAxbmVrwAp",
  "key13": "35CbL6Kkvs9fANTMUWZv6NgfaDpWhSrMnYekkAwcY2ftiwmRehUqAi8HnTKRa5VGw7qYNfvq3upojVytxgy3vPyo",
  "key14": "35qReS3NYu2b75LV7ytzcRn4T33uurKNg4r1SdgWKU7VRy4Nqg5VcCsPD6VtqKDQ9LMe1WQ4i9C7rG1PBoFVxQzp",
  "key15": "3hBRe3kxZnY4uYiCvNF3jYYQxmwxHXnUvMPqrscmNZ4Boe39DhRwfsvJzocUka4HLD9VWoQXzCAyjZpmD16xmx6n",
  "key16": "3qNeMk687Vmu6EgrMvgsU4QXuBRiN8CzFKekPTcFKVktoh6MMfgSypQtQEB7x1haKeTzfznjuAgPG5sS5FZBua1e",
  "key17": "55qr6MmPVpKCir5DZwyF8Yg6p3n3UJMw2pBydc25gArtPsmc6u6PEZZAThwckqHZJ5tQFLY29fLMsnBqWeDioMwS",
  "key18": "LddvWUcSJpA2WjScmVQd6NbRbLbn2GGhEypwJMgeRRGD9Xojq6vER6tmBGaTr4YGUjwE7tgxHgz7uVYCsxKfoXA",
  "key19": "4MJY1J6f767PrcoXh87y3BFJW4LXzSZ8sNvyaUTpvDWaYn7im8vhoByYnmMyr4TsBDRsVM7sxGAFuCUxy71wbDRi",
  "key20": "57d4skcFRqsBvmaicjcfvEdqFwXxTcKMcfVsiuFdgLdZPZyQgK3h1w6dPXmZoVCqkDVh6N41xpyojZVSou99nquA",
  "key21": "2Z94B7tudGpU4XPvd83FUuQdLCN5KeJvp2VAp1EWeefTjuuGACU981nvPGnET915TjeCM6tCCWDYmamhUsybW1jH",
  "key22": "66guW1y3UZrFUXxhjsP99ecAP785qjDcBjcafxXRnsJCQw5VVoEJw8gnKmLPgLXMK2K23SWznfYW5nfzRAFDNMQD",
  "key23": "5pkQBR9HNJDh86N4U6fSa46s6xxX5oRvbupLgAJRUvV1izLWA8or5EwKAVX3QnAE15ugazizHvUvR1yvSCivJfwb",
  "key24": "3MzJvG8mR3AYcDMjvzuStPoCEPWMqigErfopV8HLd7mHG6U9AQNYw2RV3ztj9KcDsfxZrLX6cAtiHT8SN3WZGyV9",
  "key25": "35mJMSbESmjaXJ7PRH8dhyjmb5bmsJDB7Wt4xCLgmqjao1MpMVwqB2mNWezuZaM9uXpdzEpbL6VcAEFCHGz6yJNt",
  "key26": "2YSYtNpDofJ6np5BdBbN147Sw3iPpEtvPi417vkQNs4e995f3FgJY1zD1kciAHkgTXoHHMbFRaEMebXZDS8pLMDt",
  "key27": "3rwCNVQoXcvoJ1CaGr4QfJ4Ljnrf7hAY1C6SLBR5ktYnjpw6vKD1M7NqXZN34qKdUd8ZWPNGgXRHd12RUyKyWj3p",
  "key28": "34yYK2Qx8jzQeJFakaXfk6cRP3BYnNV1JWEtpCZnaMT9W18t63DC9R8mMVaGYQLVAZSoWC3GhQ6AJMqeuqygdtXU",
  "key29": "28g3AG8HKFNMJx4r2a57c4uDddHaALr41i4UWJV15e9wrs3X5BkxoBHUDumL3BnoA4SPhGhTr79VM6iib9uxLj1J",
  "key30": "3UuLXuXxY3Heow2164ag1eUGpF3D1k4aXX8M35MAKSNZKhA7auJEP8RS3gh7tq4ymADYBPibqGhkKGcjkntkfmVy",
  "key31": "5CAY8pHdffFwkBe7cRwvaoohL6GCjoTQ4nje8k1AE5uv3gX69JNFRhKrLvPYhoFxjnxLKNSywMYuRTgtCQyLTHjz",
  "key32": "2EJfvsqPS1V7BnNAathRB7zrW1sEkXZLuBszpJVmH9D5TzksphqCjEDdHsK8PJtcfx1sDSzE8L7RvqVrapbZ55kf",
  "key33": "2x3qZUUSubw7AmTrurSAFz5mwGgJcBCNjnNXQPG8cVsLpi9my6WEHF29QzhXRvnvdACj7MJVMP7UX4nMWyWeLwHy",
  "key34": "493cQivJ27i5oa1CknsdApfMLxqAaxV3yxrnAryjJY5UUSGbNy2eMGeGNKpjHx1NuYrNrPr3zuKgNibthuiVzLo6",
  "key35": "49HL6wV7ZaPgPRLHUWndy931LDUeGSEgpYzkE3PYFqN1mVtxd6Esmx6cNyRZYds5jfKhjnqwcx9qQk7vQA7JTY8S",
  "key36": "4gFcpKfDXeMF86m57kPTJwFkQn9v6UFsvp4S9pCY213VsYGxvdRPkozFCnMemnCjLJdiusAR1uFZDcZwKVBBSA3B",
  "key37": "4sB2D6gftaM9PBUR6APB5UtYYqwjJMaEGK43FJZgoroCAjqQ8a4FHRS4oucCsGg5ETg9VdPC1ujnCzrVyKyYjnUv",
  "key38": "24YfSsKDb5jKr2K954bgzwxnMZFuKvJtv9RD24yiaaRvmBeTewQY9ZsaYeqxkwA3uV3j9n4tekb2nw4jNFjJFRcr",
  "key39": "2wTC4iXzJejPy141bNW3qQ8PMGURNdfYPiPJyUvJHHkLofk6ctcDGhuYizExDwoDD9U3bMPJkeiXJb5QAy1d2uGx",
  "key40": "3sawpmy4asRRBLjiBCuJNFD3T2HrgkWAgUdbRDL8mfqRjxJJfnshJciEkJWBSoKJg6AHubXsQdFBFerHuvt9g5GM",
  "key41": "5BgJHgKykXEvGboWnRv3CSpx2aBb5UnWMV8Z2TCPxhWGVEN5Zyo8qvRSRsgGgYYQKi5vdHBrqwE9vamgUQXc8ryr",
  "key42": "2feJp6LwaTq3LjPQ5xDZEhf2Eu1aV1aqgXDkP8uBPz8Uf6EgnfPuRFx9rXduRtZCFFqfaSv8joJkrwCzLpxGuGYW",
  "key43": "5V5ZJuFbYZBLM5d8TDQ84mJp21KWKwpFeb8jMr8dKACMBj6TTSf3u1RTgs83xpw8NmdKGE817VgW3kfujirm5G9t",
  "key44": "2oXM3xbDWbqVPRYL4FGPjAzGmzkWhrymbvZCmgH9HVwbGFR5229eovebkfWD9WtZMzX1wi1XY7G7pNfi1XvaXpue",
  "key45": "42VFGU1bgxiH8KsBvxHTSMVBKjpKiyGvDhbKyx2WR7FDL48jzG77knacK8hkxYVZ6hHgLm6DjRhfBPpbFXh4mUei",
  "key46": "5sztw4PgxvguFUfNfz5jrz1mry4x5J3d7pRdLFMGRxYdygjgMNNUEKCkYNFAdwBGRYqz7t5jt4NqYYPyUvT57c5V",
  "key47": "5XAvuJS41RJDyxf1D4veqkR4bV18dkGhhSzhV3qUxnHrxx5KDsQTQtG7x6iWdH89qCZw46Kxn8hJCvpVW56S4n1Y",
  "key48": "3sv64WD2AJUooXbfmUoNLAPzm4H4GYboubbN3VgQqUfXadpU6B2BdEHTchAh7zoNsZWfKwiyfy5S8qP62D1Z5i3j"
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
