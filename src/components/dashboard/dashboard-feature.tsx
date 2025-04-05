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
    "4wYGWfMvvjMpBWJ8VyrZjCZaDduxtyiMRG3uWnmNUh85n7aQ5rooWKiizKER5gJeKNoDoVkBG4s2hsPxYjCW6TGP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pCgy8UN623RFXgjZCtZ313FmZeenvVSwReCaWhHoqy47spfNzGfRvHr913L6LPZV2vpCDdVaF4W2u7tUu9pQMwA",
  "key1": "Lh6w11Fufw4x6ynUWSmuEQzb3A1QKM6knVBGzn8U3fEcWWoXjReKtx1rfrS354JRyryB6CQ7oNFyqTkqK1GAWK9",
  "key2": "5xmypMLpv2B7bzccwzXVE3aeSqZXBhMABFod57Nvmgrvqwwp6Lx6eGZFsTLyKYAz4RcVFxkDrwTMnWtHkDo45njL",
  "key3": "29z9vNkpBzm6qRoKy2ReXKMP15Not4aiJhw4EzHBuPkXzU9jAWvTBzV9h2UnQYNeeAVBLSACa7kMHV4NqpPdmbR1",
  "key4": "k31jd426vkbTV7AVsQXoLG8g2qs6hUpCe85c3FRwkEjtvws8tpyDhgHawae6b1WVJC2hUkA9Tm8dninj9W8mggv",
  "key5": "29HGeNXyRYwHJNntpdgBj1eX6c5deA7N82yDTLdpY4KrWG85s67mUSTTrM58ixUmYz2XsYMDX92vELe1iUGAa5Ev",
  "key6": "4Tu4TZaDHhg1qXXfmxytpYBawDR7X5DPGsyeg9AjMRb31NWgiYPk8eXnW5m84xjsMPSys5Jcz1JiVGxF9wGvR64x",
  "key7": "3Rt5jn3EG3ZwxKW2ofBHTMp1CqY8VHZZpNKEtmVZx6HQBf6CL3iu8GMwaN5gaXR1gWSzFrHKjTRL9rwCMH1BriGN",
  "key8": "2M2VDNMGynTTLwiqGwXe2Qiqi7362P2aMRcqr1LkJiWnHDhAvFS1KYcFc7vEy9zTqoYv3YzYVnLevuqBPGmn3oDn",
  "key9": "3tLQJxPcJfbavekvaRUatuNfHa17ZRrnyATLpA8VN3ZuD5AP6JbvxJd3gKqgadtYZ7pCqjhUBCro96rBc5idAAaZ",
  "key10": "2hMDzcFAHGL8EZtu93EMEGMwb6C7JUSb541Mk5Z6an4kLN5SwPJd4QUoZy4GYJrxKcNWyYrbFqmy3x6T5eMfarbH",
  "key11": "2L9T4JxtnRjsxcCTVV9y4Q3qvePDMJQtoe5BLa2KABTQxLgDhxUufR8n3qzsZZFENxZkBy2HQgRehoG2Hh98pAqz",
  "key12": "5A8CzoeedMuWAKZoQkAd6JbZQkHEmwF7XRhLPdHfrMtTWtQDHzZLQQQHoZ8VyLU2LH1aLvXi5jpagHqZSGZ5hWwh",
  "key13": "5LqxLE8DPcGyZ2iYSk3uRuMyk7fzXNxq86vK5opYtVS4q63jADvKC4CxwWFQsSCmxmSAtjpfQ8BpyKwNZm6YRwL6",
  "key14": "2jKU9FJ6HGhujgdxDcHvB8BXF4j4gWSDKPKxEW9XaNXKkTHWzQ15oUToJCPYvywAruH4DLAogHwv1oooxFhyNa3H",
  "key15": "5N8VRUjtgySLQmJP3pEvbZC1NimYca37DTN3YzEP2XpQnuXwfas71ecu5Q4R4Wf5Q5MHnAsdK34N5PUvJUfy48DV",
  "key16": "3yZRXpRHidL5xkoi3Gsq6C6cN7qbGWgYRYF74YXoQQcsy2dpvHgnGHjrpUUuByMAnr2JJuPKS6oDepK9hevyhFNA",
  "key17": "29kogpsHGbwJRheCo8hZTq9W52JDd2YeeaLmmCibMka78yFCMrRUb3oYPvEyDa2zB6pBnj6NCPoFpY93RykeN2mz",
  "key18": "45JhXdYZuwoJhtQ6sD83wda1MuXek8pjTyqACK3bp2f1da7RaoBr2iG1oSFQffMeK1rv9FScHxJiFyzQLPqvfk4v",
  "key19": "qALk9yz4d6mQbJw4VBbB2N4EWcTXBpWLbRFwBBMWWQHDyhidxdm1k9Qs9A4aevxf2q5pTsZoxHyYgxtnhs2DLVD",
  "key20": "2odZ884Ebr7uoUecGZDw1VwPZRWg4TUCX5T4MfyR2tdCbTQFvjVM6XT8Peyu9V8nfeECiM91pnSC7wDhaBR4cCXQ",
  "key21": "61yjnX9zCWk7yrJoCJRMzpuAtD8DcudgXBEahkKcHaDSyU3QKUGuLhVgiJvCtM6SPdBcmDrwd9s479fjszPkEqG3",
  "key22": "Z1gcGUt65xpFQgJP5ZGjDx9niKQEUa13E8sAgEXZvoxiEcUDrtCd6pkQXbPmsZri8ZkHsGBoh7ePU9DJBGxaNnM",
  "key23": "37dqtGmNy3xbcoPYJ1nG4gJitH1uG5p6mucJCW4EEfhPgqSfQxfayVn5odR9dYFZEbmJid1etgdxeRvPcHpEz5sd",
  "key24": "4ZEPJacHzBUBJm7st4o6LzaKgR2TT6M7NZMeBUbinzJucySXeVHwFrdJ8e57nrZjKVxM6kT9SX2kSpecjyyT6422",
  "key25": "3V9JXxWGPTv8eXHQ4SkaBuFzTYpGNtLDHomhTpQ8fwWFEMEHcPhPyvhxU3suXRuXKksFgPfMFcqRKYXBssny48CX",
  "key26": "2wUriszzxBdPzEGq3fT7WJTkskJnHgK7jL9WYQKBDfyUwBkLNaEbr2UYLND2QWbVfUShTFJVoPFk89fKKiUmPWdm",
  "key27": "5TLB5WmDd2A1eLupDxobPtBg7zsk6r4uNJRnH3sznvaRh1DjK7SQWX9kcjLo4rmTrgHUHYYCuBY3ehEpKKXGmyV3",
  "key28": "T3AHpcpdsf4WqJdUM29LejWQKMMNayUmc3zHpZx4PnMptpRZydyz6Vjd1whiqvyFAYSoVwN8DQJaovqqzztu5Mz",
  "key29": "5CXdCjLuDGG8KPffR9ewACny8rMgDXjTwdDjpParHpgShNh1w7sFkZ7oxyb225eTVyZvEAv8kEjdpyXDZJ9EPkdE",
  "key30": "3H3ypmgR7eW2maSzVAiq3HoQUi3KmPSLgaQC2myMixnmDe5PmdVUE84LUf37W6Axn7ey9xFroN3V1HDeKnGA69uG"
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
