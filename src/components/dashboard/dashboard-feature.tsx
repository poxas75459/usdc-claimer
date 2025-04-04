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
    "4eBT46K2nFJuickQyUQDb1mwTQk8wHuKtVhfPuKiVfq2wpgF9fZ75im1HCGrP2xQcMB2eSBe8RSZwBDuWr9tSWGw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g3KZnW8Wy8E5EEcHnH7siWthVXK7iTthiWWAJ56JVUWefc7hcFdPWyMNi5v1iYWWU4kNBu79TG7wJRgkKwMCJ2L",
  "key1": "3ecxfoVVghuM2ZAt3REDjT47xPpG54DdbtAAXwuKYkBWSEymDHTsBRHqcStLAEFQVfBGG7asnnBry46FTDm3fHuX",
  "key2": "4vjTSBpFwkQnsSSFciWhwPVrp9iwL5JCcLYA3cLUxmDcEyetkhdkaNVDGNCCB6trmPaeiC6w7xq6fAENxAazNZgL",
  "key3": "3TknnYNRHqLuomcpEPRpKkgn4QVFQUE8ggm45gD7zUocSC7rquUhu8L6mZYo3L3H3fHZd25CUQqqHMxaChd4ccTV",
  "key4": "5fgpGUjDN67ZySZmiTqoE2zy4WKbeWAT1NnuokeAAVB1He4M7Fixzf2Ej9rP3koBtJFuJtnb4JaXAgQ2hrNT5Rsv",
  "key5": "5Mrht9FQCyMWG33hgKRr5ufukK6Xqvto3neckpQWEp4HWTVUxBV15JNHUoU4uDB27EVugixmbMz5aQtimsc346ZZ",
  "key6": "2Y8P2VhtawGDQ7MBzUvSiUNnADYCZdiVukp1mfVdjjqSGHipWqKYspeYtc7dNHKK71mNgB8sdEL3jwCMxDTP45gH",
  "key7": "39F8D5BXuxFXA1CKaxSrkpYmXJd1VQ18hw62MzAbXZ3KRMaA8JGvUxMh9aRmiAZgyx7JV2SSWqm5vBbjtFz6rF7z",
  "key8": "5dyesEEDK3KdNciV9eSZBq3RZpzF3kwR4F8b3aZeEXnXUPWeUbFX578T6KWXcAJ7ErwFshijRVQsZUar3PBvR541",
  "key9": "31Xt7sAn3EA6pKThf4u2GoUwQMzPsjLMjAsq4kasBr7vfpvLjGaYY7NayEh45qyFhb7jQpiWcJVCzmfz2d71ZWo9",
  "key10": "5sdX4iFF3QzSZV21wddb9E9WNu8xKkpmjeo111ytkGt97AJPD6t2Sb47HHoB6n6DPc7m3vmCGDB8Q8GQDaQdA8mu",
  "key11": "5kANieZy4MYDEVvmEVDoPsBfyGdtYnKZSm9rVqXDqUDzZ4XbE8YaV6e7cdaghKykHo2QWVMKhuG3jkuUoGdq4Ftf",
  "key12": "3KkcRR8RABSUMrRPUSQrgp48WxQxZyiwWoqQxrZveKaa2zG8teAshwUJ79J7FjiiB49TJ3DRpn6XewHBKHWzVDi9",
  "key13": "khvyCBs84sABU3gTbSsRRM9gTHttnPuAeNwkbshKsnKgNUc13A7iRM1Zi6urTmG1QrkU7JoAQjKgxB7phwaeMCu",
  "key14": "imymqfKRTx3UXpMQwPt2UMyMnd3KTtwWrJ7M4aRXfroMxuF7Zfh7A39EQodDKLjSbtr4wLmgtZ85zJjD521snPZ",
  "key15": "2oYmHoWZNsnZE73jVrLWRsNiWiEYvE9pktHKtMb3idToZP35GSbhXM2aFP2qRf87yz9FZh3E6fZzFn1Tq9w1jy7y",
  "key16": "8ye7uhx6Ti5yB2vgVHQKUjQ37S3mBvisTuzvBZ8sBerBwf1RDCxr2mxdymPDX2CJ7f25sTPVSM6Euf67UcnRRfj",
  "key17": "4p9BjAvrN8z8YKNrawEWoToBkC1zjjGM79ivjeeaNBwN2EjUdDZE6K7LtQMaMLFMxxTTqeMjgGFfPJXSy4jnq6c8",
  "key18": "3bTMnZRjLjUcHjaGLpmHjDaMnjZEGB2EfMv8KNyN4NsaKvKZggpYq1BLRCweTjqgLbPfDW3JKazFTzajTMpU9qHK",
  "key19": "4yseWduKcBhpSKpVC6X2XqubCnjjE45j25Uiw4tLKR2hsMowDx4HqFwRMfV1ucGKkuKPxEGrFh61RV6pc6Pnm1xh",
  "key20": "627MZb3jqcevETo6pbanUoPnW5gE3uyH8HiaBiJBDD2ee58GEsirrrngr2NdY88egsMoUW9LNPGzt1XqrLyvomN3",
  "key21": "PsTxiV6MEVCKzciN2ZXuaX2WoiWj2dtBjHgXCNC6mEpqZYH3HpkEW3hkCUyBESFHSBAi2ADGrrAdDmf1s9NccnY",
  "key22": "2scCSSq3tN49eGUqpXZqg8hXbU3339CiEwtH1coVinuxq4wnUjCZiHGou9LwjjAAH9dgdHpyy866W9XbEu2Q6iS3",
  "key23": "4occ1t7cr7rgCJc2otf8tNodECPb1UckScHAuH2LPrteKkY41fTDfwYYVfhPXaJB2pfVfJKU3qsoKDjA4MbYr57J",
  "key24": "3Y7rdY14vAiEzPJ6kKEgRanJFPhdhTvKzrpuiLAhAa8LBrBsEgN5xznWtE5h3Nbv5iD1oXcYmjbAZy9L8T4C2qk2",
  "key25": "djrviZF5hfQv2W5aCCMru2irKn5ZDAuk6zTq3aHpwJULDN8wzFgYw4MowBAVxYJ1Fy3im1qkuZC8W12dtaCVzns",
  "key26": "2NAmQTPFYkrnMumkz7BfXboWZDB96mdJak11qdi2zxujTNSGdFicjL5figZeMBXTKxCA8muUKDGGNRmXe7FvvwZQ",
  "key27": "5quwL5QNex8DLcgXHEiJBxguZ5dwWWRim77PaE6KE7r8ytkciDs9xv5VPsQQ2JWUVDBhmDauMys9k9BDmzDnMWnM",
  "key28": "4wHE1aAG5BfkaFYnUTZK1Q6q7NrkC5povZnPSk6Bbc5qbUjAyJ36BYYQzZUcPHNaMavwGqWEohzBdpL4oCCEvgMD",
  "key29": "36QMyyLBe2XYHN39C54jGaWZ1egHigbF92pHz9pDutqQRhM7hbznrM6TyV8dFJ1BTdEyov3iz1ZHyXssmPPUksYX",
  "key30": "5gaqsYacdMFi1e99f6CRxAZC1mowAhbdAFFmc6eZQkZj9CyCXoAcwRXS7u1vs2XB3WcCYge1KHv8aXDqyTPgYeJ3",
  "key31": "29jMD3QzEbmeve1G1UsTv6eK3WVQRdMAzW5PnDMtNtHkp3pcT17Hbnyg7xWGaBCVSszdKzp8N366Xy6iutJHQuvq",
  "key32": "5pg9qGEP373bhNVZPj7ba2FQ2CEYxtaL6caDAVzkSp5CgRJiqHncPbQSmkfansbBPaaFrCyunu61mrLAKgL16Rfh",
  "key33": "4w6ZevChZuREu9Mbr4pMk7MM7wN7pjhw1xDBRyfJE1NyvPVKCYrzGXvR6iTsUowoa4jGTLDvTo9HiBEe8eoTY5Nn",
  "key34": "462iaZpTSJzQU5PWbv3z9FvHZatJVKUfNbrQaUwXHXZ28yacNVGS8pH98JqSrFYZenn8ZyCUUMJuQFg3Xad1G9FX",
  "key35": "25jhnewM7x6pdQ44FTSjaJfELe1Voax3PWVq6nkDxtPLkP3gRst78oJ3mg9ymvkM1hzjXuxRahAcFHXip9CYJxkd",
  "key36": "5nFF4BMyrhy8d9Mp8yWLsRDKYwcuQK4cQ8AzfqCQDhPE9AMgsTHCX1tEMXpKmL2qKSGPetvQ83jyGPPMGNhb6Kqr",
  "key37": "4nXAknsf2D6nEa3PxWtzujhMK5QD9otHyCBNNsHGMcXgT8NS5gEPyQttVQhKSizomcW7RMzVRJvzQVWzFrLt27wW",
  "key38": "5bSyD5b19zP42LJwpKN6DkQTFtpcE1jeB1ZVEREv6ttPMy7Tb8YRhfpRgYnnmErX4QRRSJZzsLPrtPZoie6ZwUpc",
  "key39": "5iobbcWRKZgiXWoZdccCG3xBD7t6S14QC5ojnX6LpBK26poRwvgro5PpVfvQQ7QEcz4ZrLsgvfdvPTBXBNGyHKvp",
  "key40": "5gLUV2XRMJn2CRUg5quHVWUwWPqFPsttmx1wR8ABuywosAYe3guxWLby9LGrAT8v72aHcLwGgvXR56GmR4fwbyaF",
  "key41": "35UCg7oiNcUizUSTM2DvUKGitm64AMdavg6Z7663zCcDSX9dSqURVgf6PiWr5mmx3sYznmiZ2yXtrK3FEScVpFAs",
  "key42": "4iKdXWbjAfJtUbYKG3XXSrpf5ZLSwjgJi4TBj7ZNXFcHvqzxgi7j5w2U3j6ZmsM3eUZuDEcK6AMbuCjZwKUaDR1J"
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
