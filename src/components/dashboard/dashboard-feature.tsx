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
    "2kdyvywA7xYpMEwAQCiTdrnYA6z5sto6pzAeYs2dYxicaH7yjSBogJHirNuxCJmosdh8dtPXwiZj5CEpCwLAig1F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FYbBo5Av1Kwuj9tEfz7bf73SrocjpuWgMy1rx6cmEkaYb7RksseNNueLAeAtpD54nV3nXncjudUczWXR7EjjRND",
  "key1": "5B4XUNRHZGfmPqSmYDhZNjN7ivUcFKgPP5n65StiwV5QURLs5zJMAdZQVnQTnERjZcgm8vMnc8N8SzMugjN4bgqm",
  "key2": "46keeE9nayvV3UhmCPxVLPjsd2C6bhrULuAfqgwPKteqUrkF4eStm3PCCEyRtwzAktPVJWP49fBBaWTPCZxNrR8a",
  "key3": "4AyVRvSE1Tv7M9cMLBxRBVpZMnJCyBkEtSYgLpB3tweB8tTBfymGWQsFxHU26DDFuTY6TMVGrLp4TwjtAtDXRC3c",
  "key4": "5jW8iHa2FD4YXxmvZ53VCY7okcxxPFzs6bwCwcKWmDauepwuwbvVFuH3hqdatbTuKufNssdEpj2XecvkpSC8U5pB",
  "key5": "4nZhHNb5LGX9PJm1Fz4EYUp6wf8aNandT95r7iHDDYeCSumZaP72kTRLgbx6gJyfSNh2CsTsUYF5amv3pW6aaQ3D",
  "key6": "hSo51pB13oRJHc9EpAcsu8JaauHfqidMVF5ELBbA6C8m6hukZnJ6gfiKVE4pxktWk8ZND7Mwtj4NsQpvPzSUMbP",
  "key7": "XrkPhmbyiYvY1FWKZPpaRxbEGGXsucVsdaiBfQcxoSETsf7xwhpvvDnh6zohFbvsxYyA9ZqzEdRo1WLaEA6nBud",
  "key8": "3KSgtT2MAGSZfEXystgEQqtYzG7KDzo961uspzXPBR1U1EianNiSVMqSFPDHxEmkoikqzo5gWTSyb2aPeH77RraG",
  "key9": "3YqBmCjC9KLoMGQCoZAQK1tjW1Dzy4hCs6tHj8rvqgS5fXE1bcHAYPJCsKDsbcM4q8tKArkoQJNgVEY6uNDLxdRz",
  "key10": "2SHp6nHSs1oQrqz64pK7gtb9xSfmG1UtzZFCGPNbL2AJ2hM36xwXStiquA1DJnSBuTT3tRCFkzXbqoRSDp7SKvqu",
  "key11": "5DCAQ2P9KQxe6WrmnQZdwGShnzZHpFbWfckDHHw1hmW5u4xC33XGEjCLaa6SjwEzUbrjcvbk1bcKUzReap2N4bfY",
  "key12": "52c2EahePdkgjExAZSjWWrSVJgpqrpx2m62KMBXm3dAQnduCrw1iadfdHtGYCxQbwLRxVWHzBaV5CeUP6W7qp7ng",
  "key13": "5vuRLYDNf9H91x7DpGF6VpLLjFhzfTuKM67uz7sh4G1DjXAmeqwdj7XL3uh5iYsoizR6MPDQg8XFCjVTGMFGSPiU",
  "key14": "5JFQxUDmQAVx74VoG77FMFkp3pFZg74ikxE2LGpq8Qq1sAhCCnxVccJnC4aW48UEE8Z4s2ZaPJREsWbyWjUVTm6r",
  "key15": "4gb6YwfK3t3JNnqoVTRjTjFdM52NaqsYcjc7YRBoh5fuiyCvigXijHJBN75JVn4N8jrtVRUy6uTMtJzFTfiKvEzP",
  "key16": "2nUEGayiKfh49CJc4ev73G4Ud9ERzPcgYjDa5y7h49xCoiqGxu45obSmsrz39JYAymPjGHxvH34vCwwfghBt8hR8",
  "key17": "PhA97fhRaoj848Rr9v4eqcb3TCq8eLDwqUGA24zhXiB3tryK39TKbf4byKdxy6fw1DMPgpsLF6fNDTFsctX83Vp",
  "key18": "4wWdWbwYGGVEGCUiT2TnLeed4W5fXB2sAkQzVednMSkcBpsgQnQchLGL13UHMbe8KmqvDgnbi7kejULfQtwTca1L",
  "key19": "4pTWAtkGu4cXR6dPNs6wVTWdwfcbBSpwsstw48RE41DWq2fudgncoxswutvLtorYzY2GxBYFMYasgVJKxa3d9sSj",
  "key20": "2K2UCMSTfpET4FpSyUxgSF1gTi5Mrx8cgdtADWDsKqcX5WnV4tBBQMCWnNviA3XdHYHaPiQm1iFWZEz78RqVqEjN",
  "key21": "4BV9N71Wpw6X69P9j38ieDCCdjxjHyw5sp7dqVM3b4gvYwBESxXuBRmKdGUUc47o3DCdgZ8amQKxrgGvXLzFwJgW",
  "key22": "2vJH52MbdiK4XPDbetmJMrp7x3EmswVVhZNM1pVGaueMYxkjqNJkt6DJY4XCUwc8skvD1GDkGAv84UnPk2bbjuLZ",
  "key23": "k82nQFQdarfj1R4GJkf4j4SgegpuxEptcmGW64LXpakxCFcRKh73eJTNkCYfo74Vhoodzvq3x2oihL9ErHzu1nk",
  "key24": "4WLAfiyoNa6LJcv8quW32VJsmAq1VmwfUVB7PH4q7jTzwWJA1VhTD7kMT6m4v6ryKJ99yPNfpmF5LAneK4M2pLCo",
  "key25": "2VvaqmqFspcfezE5iVyomMj5EvQ8JQvvVis2RNZgcSLKwo3ojecmLNxChrp7eNN9gswxajkfbGhX2wqqExjgnnAH",
  "key26": "24BFtTXugVcwn5PcBCpKDbZsDakMBP8a8btR2bj3Vq26YqQAzCkQskLgtuVENDCrN8wTu5Y5rfDXkPJPajvCLkbC",
  "key27": "5fR9zKR2QkeGxZ1mLTSakou1ZncD2vg9di8E5mQRsQ7F3f3p5XEK7sYZ1K5NL42aBWnDqrBauSZP212ftEVBsCwh",
  "key28": "4A1NEfJExx5h94tLFWE4d7iieuP6P24mt7DdR8NwqFNwnZBoNG2UkCFfhtKcQ7xvkvqoERATuVhvFQ92HdHuHUPT",
  "key29": "32CsaVtxMiqorrZxE8mZEFGcyQ3LExarEM6c1g9y1Y7wjenKQYJERyUKfFPBJjqSPWCCYvC7EoiFVW5akQqE7vsd",
  "key30": "3AZZC7c1jGSPwZRG9mkom4DfH8DUhsLqJHM91XmVPMUoyBbZDfnb8J26ktixYAF1ia7oBJSU9fRRbP2egJTqketc",
  "key31": "2t9d8RYA1gCspXTbsbqFbiRxPPVs94Pi1U7mMFMqDaQXJud9Dn18m7wLCsosAvJnjr8eGRnWnpHP9Nb3nqwK5ZTE",
  "key32": "2d9WA7tP5hpaiMdGUrsMrZyzGhZ95uzMVeRwWhGzynpbfcBbCxLUHvAGFgpWUzYgKCoDKYqRuxS7kTV7WxCCvfMJ"
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
