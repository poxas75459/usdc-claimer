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
    "2BgHcrC5tp3GGCx2Jxzuyir1cJm26PvvCRpfs4URvnB7gEkDbFZL6wvPmn8sqhLXzj2n57NGUbvgDmkSdz7yFHSq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "URanHGppZmh4fKhxBe2sXW2t4ZBq9UDsqmtZQFYMD1FK7JUKKd1UVqG2LSreCn3DWxCPq3r4CYvhkoPEpkS7vLT",
  "key1": "1VAzrt9JW94XgqxFx95ECK7pZo1S2FBdBSxDHixcJoPrwjxfuWyuyhW39W9qJD1ocjHttTJCedqhzbFFPTjLDp9",
  "key2": "XR18knv3Y5ZxEhv2RfsVPCM9WCP3gasDxGyi9NMwdpukAp9SznrdZsAuuV5jAZfFM2Z599KDv7nMNgoLLpX3MVu",
  "key3": "3ArWjQbVSZs38SEqrpgXQ2XdksNRBViqJqeCA8cUWFy3Xxbosou6JQEU32CLRDZEauX7VjytaoUnKdByxQF8QM6E",
  "key4": "7nePsqvQx2Z4RaEWwRrVgwtS4kPUeCC19yrpRMbK3HMcgG6LuaWDEwrvg751S2doJ2TzQXAuW77mqKT9uradvWo",
  "key5": "2LJ6mTXKQpXFH2Rpgv6sAF7csGdMHFc17BCCZQ8znjjeGo29JQi9L2FDpheAVHYj9PsPiWnamUQ4yEvkaVZKFuDy",
  "key6": "FaaSp2iQNHrNnkUUHH65FRKFwf7JCWA4WRNim4v2jECnGcjBATTqPKcaNstzArMXhxKbhpnnpMvgcCaqkANvrbg",
  "key7": "3X2TLcQMujgTi6oXB7pRSWD8xe4BwBay5Quw5sJVz3C7wZyrnk8Mvj3tWjj3c7WgjMM8gfzQppDJKTkdKSoMBFQS",
  "key8": "5cgJGgWAV1Cj55msV3eTuPT4Aa3QkYVvnrxU7gWUtnvcCUJPtYtbJgp3VtVpUZvbiRp6GXQTZ4sAsEucQKV61iqi",
  "key9": "527wUjef4GgfwZKHF88mhQRQDtE5mjNgYoSmtvGZeLk6W9QXRVZmemk9b7VWEbczSdK8dgLmAoRmMRz7AANsKZp8",
  "key10": "4Lppvdi12qp2hoKY4LQxFn6Vos6xjRSjsFo2r1SpfBNtqaXLRZQpCUJAjJE7yd2jadaPraR8sentxg3gHoTrtYiM",
  "key11": "C3vt1VRkQrhvgT1HCogESKQfzUF7sF34B2BPqLAXPWh3Cp2PgLoScVTqAiseqyJNSySKHKbjgB8AvmZpxrTSxdH",
  "key12": "2STzh9zcgHATMMgBWYZUginoHz8efJCDQKW6gpme4YYuN4KMXUJZTW6HPKxU6x2i3QRfUk4WvX4M4iyPKES1Yf5S",
  "key13": "drbhW9dMCEegXXhyuzLXLAvS7WahPymYxmMJ6G4rCTsnTYpDYQeiJ9yP7XfQPgKM6CW5T2MbnN4vpKTHLDtw916",
  "key14": "5ZTm11DNeyd4aSGcQmGVT6QrtytEzRVG6hCGVTi7hmKdTvCMpzf3rvmcRUe64dCw5hidziZ92RkWso5tXwkXHTxM",
  "key15": "3Ya4B28pVMogrnXVdbRNDPkJE5Ny63cmjGJFmaHJUEwthrag5U4dYnLLs4782YchitS6R7H9n2RggwcwTLc7Pja",
  "key16": "2XUDbnRw2adza7FPv3EbqexHPCx4SniKF3rjuuNzrx7d5UynEbzXU6xkW51nyBZGzg9bNHXSAbPfZNG5Hja1413q",
  "key17": "5DnKAk8tcchWaxu8JvA6pmA8hRWNaCN1LYJbSHMhJx13RohLcbiRYmJQdU7u5FFPntciB15M9vFtV8jZw2GaXrXL",
  "key18": "tU3HcD9baCNnomVEvyCesZHcgJthsrtpfY4WFYT3B9QGnw5DaFhrf7JMRDomLRxnMwyDRqU4CFVb9EqqFFi2cd9",
  "key19": "5AcH6SceLZ5QmaSuHnHBp2vVxcSEgi7jmG4bvjqaEr4zVwkgYEpPSYbj1yg29rK6e5oDfHiuRbtvS6RvUJu585Ng",
  "key20": "4CJy9WFh5GpgEkDtDaxoVMP3zVS6YNbY7HQHF7kSj673csY7zugCuoXyc9XdG1kWW6oZiZeLZMB266tLnnvK6PFv",
  "key21": "4YwvDUXD97vxLdMrxf2Y6HsNrEkijL4hicSwMAoXYN2neKbZ92P1jYMCuW9wPvPan7fziHbaws5EuKfEfv9hz1pA",
  "key22": "516W7YKuYSBL2taW6rCFcjSVSqhwMB7y8YjYxA3Tf5Cq2Zb7a5aZcgbLDgmJHKDvV6oBSxzxBFhpsxY7TAZ1MPMu",
  "key23": "63uLwTags8rW7rpQZP15btuteojNzq9CGoHc3nW3hveMjhEQhJsn6RVQJowKiNWQL3QPWdXbLkWEeqY7WVUJQCmE",
  "key24": "2d61YqZ1RZ22KidRYvQS7PKgaPMozeRPmpJ47XVYHRTp5kSnn571B2sbBJfUYDTdJQQN2cycfnY59s31DMBVEJVw",
  "key25": "5SjfEhuwRFkWKXJuVUVC84FWeqbYXoxXhp31EUKnANM4WcVMy25obLBYuFujUNpYWJtJVxVUoCyEC8ocd7uKP4wU",
  "key26": "NUTSVPzeiAbRhAGhXwwit1m2bhAD5MvF9vncDkMJas5ps9pbULkCfV1bnciWj61bmkEhNKkatKJcFpuv6xiom7C",
  "key27": "4vQRfdQWCW6BbMpA44gsUfxvFMdqBYN6QuuCcw2Y9CkNZfWr6k4jgb4sDuoyT1qv1WPhYp9XCgSv5fgTGFJ8uPs4",
  "key28": "5N3DNw7qM2xWRTPceeDNQoCDs6fsjyGPVV7hjPGZsMMbvXaoHmQdNfeYVuAe2FnPt7aLpmRykLLfC5HXoKMceYJd",
  "key29": "5VCv4kh9S6r3ZXUokVpAsm5hEYud5HCqr5hXkoZmNc7V1ieCoG7TPHqpyyFQBqyh5tsRLjfKxxukiCMhmVUp6FgS",
  "key30": "4bxFQuC989ykx9VX8zNGWFWZ9adDX9euAouLn9vQiPjUcUPBr4ASeuirhZTDLjumnvvHx18SJ5pkvGHH7iaqGMz4",
  "key31": "5T4U773zwmpt1gZsqmmyKXt767rbSCSJYvSHSJ6zWeqpeansuLT7HcYS8Hwmvhrjiscd3xMwhxdsisSxi2iBwYmD",
  "key32": "C6SPPsGsJM7n3w3puj6Gpiu7Ee8pwR22aiCxf9Pn36fFsnDGyPd27Htv8V7UzNpqPSaP4mDkgo4sQ7xEutFCsD5",
  "key33": "3bChfG6dkvS7gDMCzaEV32TZiQucm2TE465DkKzyVEJdZs2dAyJiawpcv39E61wGY41p5E7AdJDCHm5hk3bbdry2",
  "key34": "5JVp1ydCRZ8XTShYWqxYX8um7a5C8FafjJcBVTnYSLJYcuEup5gwiZLP9aGp3gBvURgZTpQoGSmWRZBzi97mjdPN",
  "key35": "3qtyv7QfszPxCa8Lgu6A2nkne6H7DWjbpRKMHEaQG7wcnCh7yphaUBCCFwzKgfKuvE1cR1zXEgnYGMKJJE8MDEa9",
  "key36": "2KcpjHGQ3NfhShqLoz75SmtEooE4FRaFRVNyreQpK49yG2Y31piKog5oo6PGYEHVRvk5qHzcTzG7rzpcrETQiiio"
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
