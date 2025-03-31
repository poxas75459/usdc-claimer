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
    "2MnQXurTY6JEkWgBKskMW25jPqC1cXzdWYahpfEVMPX46wLhn4P8LDPv9WRHnpG8vs2WChGg12UmjWrbpA31AWGi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dM7rCgzVJKYnHDRr5LdYhj1iGzYBUtsUpTvmWixFnhH1Hk5tgZkUDoVaomyscZax88WknvHAentjvhGSLi3HqKb",
  "key1": "24JcpT2eWFCg1UC2d4zERsEVV3BYmHK5kM4v1Nunhq5QEbM6V8cPWcDe8qCUYvjX5SJAZ5WJjpvK32eTGu1q15ea",
  "key2": "43bpjh7kao53TJai9F1gygdodKzChAiSqCnRQRt2V2CqyicRyvccp62vzfDdLQuQH94ayXFHj5kBrTc8nozVCcqR",
  "key3": "4ZDJGYKfTL7U5ZwEeehYqhtuSGPoK4S8qmncBNqwA62y9BVWgYXBVLLhkLi1XEWJZP15YHXiz8FWpc4WkVaMXqJo",
  "key4": "35AkMq1kVC9MyuuzBKvyjwyWBe4ZrhUtb68uUWX8bJERsTHSBqTkLuAGPYzxybpdZgF7eDYapZCbx3UN9p4LAQxJ",
  "key5": "4EsWMfKU7qQ39pqKp1y66Teu4ydrhwy1XUguV6HUxViy2SFoLmWJZeuc3guAm3NhyAUZKNxN5NHvwJSnuAJqozJQ",
  "key6": "TzBUcAxnKXiyeqiUPer4ME3KuBodce8xLBAvxpA71fFBbE5jqKQPxu3kDcfseYxTgDkpLXFnjmKqxpVxzyR89y4",
  "key7": "3i2dq2bpoFe8QD7PbZ2GTdSw93MAQ6jsB72TFjkowStE8UUwVDt7f476mMU9izsbEVp9XGJK1qrr4aYoRHxKCfMc",
  "key8": "5TkGLWuPRevvPPpBkCuZRjmfd6tJDQGdD2JbyuwHTCbJyuEMxhKawPBohuMFhoqTFHCw62QwCWzaARq9dcJ4vvNX",
  "key9": "5KKqFVJWH8DcdeZQU7YbNaXvZrbJENxAMP9EQv6eDW7hwKYAjnV1J5z3vVLFLrfK93KQ3EtQjvNdCjwBsM5Rxf4p",
  "key10": "22w1HEYyRodf96UnX1W3FtPZpAjqEfc4sR2TJtpffXBQMXbqNQkwSeGJ56KrvnUnotxnncz7B5Fju2teNdnaQvPq",
  "key11": "3deNj12te9CrrgZ2qhvRgUN7qMpGt2Ly4UFudjLvdcU8xFw8akkhH1STuqvucv8saK7W6uUYPyVhSHtoRkMGnuj5",
  "key12": "3n1zaU9cjXaKcTDx61khmk6hLCzDgzpTjvH9bHCkB283tnZv7WkX6VNYB82RiZFWujZ3ZBjpDaFpxWwKktPtD7Lb",
  "key13": "ogwkRgUoaGA5EKNHs2Zjn2ewxt83f9rw7X9z37VpAyx4grq12LZRF2PnxEJZhXqbdBzDdia7Z1ahpcVrruxCvV8",
  "key14": "4vM9tftU3W9g35ukYPeZAfBDY8baRQ8wZEXvYeEnwUpbMkx7zp8hDjjRQPaDS9qYUe49Hk77UjCn4edN61eXQFoS",
  "key15": "3TtVj8fvLUff6kzAhpCg4VHt68DmsxvPdEW1QNqumjh9TQmvXKr5GqhQQzcqVngyWY2oqKZBjot8zwUAD6hZoJvv",
  "key16": "3JEHzRkQ6xprWFwnzrVnXeLT2RaDwVy1G6aKSr12jisTE4ZepKzjyywivaovHayFBrh7u1pK8XqxkVFVBjziRbzH",
  "key17": "3fYE5c3p86W4NdwEkHZkizuUSvWDVnCJYxNtoureaxx61JdbFqPJM2kGk8tTuGBefBiraBLSMexjyuAoz7gvkz66",
  "key18": "65yhUbP6XdJGWvWfmYGw9VtgAiQWGghpSVTTfvt25zArGBKRbXhzar96sNUa8Tpkwf4Qxuktdbfr6Ws4vypvDMB5",
  "key19": "22EqpLY6Uc9jgnfh99yXXfswksLdKYt6inaTLsCZhXrboxcFqbnkexVLRAS6aQAnJJBAwx8t3Q1EwVVCa3ZKugGw",
  "key20": "5Je2TXDtXQJg2rxrDsjzUZiZ3NzcR2fsGfdMS7hjqtCKJDfzR66SDCazsWp8hf6mhwDvEvPBGPfDJjFbgJHr624X",
  "key21": "4R7CUMbvrw2YVAJbPbyy2k54hn8AuEqQcdPXB2C7GsNXTGhGZsvRYzfmtzkyroxLeMhLUazeo6pyBJiye3pLHUaZ",
  "key22": "4crDnXDHuSVMsDQwLFF1jL8vRy1ARNnPaFfh82eugKgf5tLJQAibPMBz4YdpS85XN1LxWVBomwbNFEUq3XWGzRUg",
  "key23": "ymYm6R95CBLRjupk4cD5aZdJdodzQP9mRSBRCs2qUKyowN3ipDUVDCm93WVi6eR1xqEodSSNE7mELarx7uTXHf9",
  "key24": "X6hyZtEUbcX3wybrF6iuyEEmVxKoTaeGMWR1XYpVWhFwqkCkxCjQAoNfFhLufc5LFQCPcJB9mphzxRVY4yndhYz",
  "key25": "4fEdznQMQkn5YP23pnMukvNnYhhdxEe8ubU1i5R8pg2CcEoxiAzKy25QKWw4N4jdLa2sFtEhic9hYLpiQdGjx9hd",
  "key26": "382kVqxWAXxvDDZAzCVzBr9h9dwRux6YtedGNBmNZyZJTqJmEMbusPaF3mCu8K4tzen2b99xAeGcAFVsjMyqjQdX",
  "key27": "5jdzX2nHvhz2KcdWvh8unrJ2t49S4xDm4Ntvo18UJta9MwtZ4pw5gA3JxhhoCbQVRCSntSmHSQHCx4JVb546zuQ6",
  "key28": "4cBBa1KmY5PGDdiBkpXSBttXSxpds7Ax1w3aBHTA3x2iajXvLR3Uhw2NmtYPxaXuP57sZK8UP9X8LLg71sZ95GU6",
  "key29": "M21xVfozcV77kpJ9kWAMPMguTrYnaWUT2TjwEVU2Aa1F4HsabUJvAZJNstmervue7gDq9xz6MobXVkofJgBMVLZ",
  "key30": "5oUg3kZoPJAv9hfFBKt43ZGwC6nnk7q1biurphnRENvn9zNxz72CYh2GKzHfBKCWaRnhHiBB3Lppa8UgR2Qh2ZTD",
  "key31": "2gu8we1utAc4T5bQwA1fPTs9N2di1arMQ54H4dGYNh6AhBjD8MgYPqZ6ngksxzuKwh6cPgxmKL9rTfopM3Lz1Cwo",
  "key32": "ETsShdxMR7pfLm3XDiyGJA15cyn2r9w15f8p9uJuRdWHG8n418pgEsCVq9d3hotSwowJMD6UHpEnQA3Q87Hib8B",
  "key33": "66CmAjZkGYQYByNWdkyMHFFufpwubgiZ2aVDwT2UvizzFPJpYVv7HG58hrwVS7RZvwP41RKpvYpzyF1HK6sYqbga",
  "key34": "4L13FvgLv59nheeaZygGGnJmTaWYG4GmpYkbMchxW2P8qWSLcqrLixcxiAHvfXiWVF5G12BZ4um9JZ7NH2RrkbN",
  "key35": "42DdbW4RWcM2YNhp1ZNzmPXiRthvpsxgCsp48idqq8NakS5RsCD4mc69LCCRauqZ2VsfUPRjrYiyEerAgG1fTjSY",
  "key36": "bD5uLcXX2Ho5s7MjGpEsg3DmKRWDYfwT98jfxYyb7SvzJDmGBApCgEMX4q4TTH2ADnYwyNMSi2jBh3BsgWqZ2Zm",
  "key37": "2MStpypb9MauZ9qVxg6xAwYDP8K4NbJfzgVBvvizsho7JgfbxnmGBcKYspwVpmdeeVKzE8T48UbzFjtmAmSqA5mY",
  "key38": "21ia94UszbLM1zjH2gaWP6n1T8o1eQubKjy1ufGCm6KodFyGJeb3z6ytTG9fT995WpkLF9BowXHKwE9tTAkZgFCL",
  "key39": "5MiFYkc6Y3zDAUprZm1P7PhLSkDJKhJcc8basLoZy9mVkftjxnhXeYFsKQ9eicYdWcAEfv5qvKGe3Lc9t3jpCHhU",
  "key40": "2rtAWWfXeTti3LH7pikxueXiRZYGbmd1Y5QaasFQukY2536Nt93DhrnuCoBPSfktq99tdA5QoEetSDCe34nqM8dt",
  "key41": "TY3mwct6MFFSefDPfGuGLA3vC6Gir1gMCwffjMttRoas92HbM8u57WqQpZtJzJKXSNtN5qZGujSh4CPcKx4wjDx",
  "key42": "27kqqHws2vuF8gRqzu8UkA9h2XSXkgiJpD6dFMrtBZW14AHfvc3DzRBKtBKDpUXsLcP4GDY53L1GyRdffRcmSnmm",
  "key43": "5KAxyH7iLBPMpb54rebYQseM2hfixkqW4CEcRdr2wWMVomfTipFLWoyLyJs4zt182JkLEuFCYdMcoC1YVWacoRuh",
  "key44": "46nXZsBb8VYG5hkLeiUDEtsFVrtDqoivBxMc2NxzXMpQd5pBwFZX5jDsHCVVzd27GoJoNhJTEBCkU6dhnvWDxzBR",
  "key45": "2k9SVTZmS5Ez9JcQcKazwHiGBRwu6fvgw3XCcQMbvnHQPm54qcheFUtAXdoS4UDc6WQfQ2KwkrVb5KvjwKNexM5D",
  "key46": "36fSjhzKobJDd1EtmdA59zUJewQjcgkgCGwbprHPbsYzMfLPwddYJQpryZE4bAKSeXEUGGycuHbSozvRmEyBft4r",
  "key47": "395WrjZd4aHVMvKHVPn1YfopvTwCDFWFqFYfQEGMxKkb3Rn7rEhTjuFG8TJAwbqpVdLLz994zkqCmkpm5M4MB9wc"
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
