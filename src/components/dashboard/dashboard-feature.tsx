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
    "vXufUjAKCiDvUDmnCoKFe3dDJXp9U1RgQCf9W1DpBJfRUe9WGzxQDiqjcQVU5eQUw31YfV328QKS4gNz4bu9tmH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vm7tqxbsymYjsBhE1yrhzM3yHX8DWWZE2NYjj7zvBZ5DirDqLAVK66nL7EsXq4JkX7eapedeEJGT9vXxvXwBXZk",
  "key1": "2n2BP6rK2eKL2owPDk1dofQsNtpBpv8VAq1LsXgFsuuGEo3W4iMyqQm15XfaoG5RedA2bJJZrV9qWf6ZH1FPA7dz",
  "key2": "37oQZr97Mg5eeYKSuxYUJXxy8N7zHbtm5baDA8CG7qE69pvmr7RKbcMznD6oyt8SU419hV3dPkKEVU2KP27bohyu",
  "key3": "35RTyvYLw3LvfFxeBDXqSom4dMJUsTEvkAg7gakE3SRXmpyP9iJBRavyZMLLtaweqpjTE3kx72r27z7ZTt36o3iQ",
  "key4": "4o86ZZuxCfgBu2uukYPSrei3j7zyoZbvtJZAZTfKS6fqRXHgu1pnb972J8YS4HGqGiqPUweTekvkXifDiC51nouF",
  "key5": "37LKfqSHQ4gUZQpnNh3QMaHxt6mE1pdV5W3MHy2SCPotToUeew9KepAt8azxKAqMTeyjSaAfp899E5VkAZwMVAir",
  "key6": "TqfZaY1SGu22k8axrxGPmHchtwU85dJ1Atff3SnVTLybExSENtK5owrXFR5iERe5yXxQc3SSGhweyyuZUKq7BHT",
  "key7": "5gK6AQeDebnpsyKQbgt7HvV6diVVwiGRDWwVSWQ48rPt1kBNfCzThhEF5RQqWma6EFBdfHAbo7Mr2dbhPoNAJRF5",
  "key8": "5cbuMmjxaE1NyRXcSgmufiVSUGazxKzm3MKbeAheQxhP7vhrXMre9obwGnw5LF7nPeoPEZTFkkSCvvgcznd8Limz",
  "key9": "3t5JgrnMiC33LkYdC6HviMdJdfX3WCDNt7fwxWsKtYKTzrvsGnodeC1r15bc9reDDhUZbxzPtKfqnHwVg71e1CQZ",
  "key10": "3Q1mjeJZq7efUTmJMcmfVh2DyzVGevUU8gPU8wpzyHrdGtHByEFnzpXTeYdrUjJBMSH7R2dzMht5XkwhWjPEKsgL",
  "key11": "4TqvkmC2SWKtWnrwckfwrjqwLzSeDYrwUcgF3bthZqQreW6MRC5qeJAJSekJGr3hX8p86wq2jqhoja1CMzzFsGCh",
  "key12": "5MVZULWE2WRWcDGmBRMP6n6H7sfgSy6NHdyGfFjuBMJPRFqeb1cj6oTDQWu7eNFVXfkiNZ1DFPhxRZcUAU8wKFK1",
  "key13": "LiJxkFDv8jAo7A74WxXA9waNYwN6Sp9WGs87LdbiukVktBYWUJPU1gSjNkChUNnw5x83A7KSEMqXEkCd4Krs72s",
  "key14": "4s2WJn2q8DcPuqxE8W5C2tnRgTvZb3EEz8x8Rxyc9sjkzHrV13mKG9CMe8YZ57QjSNUbcz72hc4znuQRoYXFPEF",
  "key15": "2BLzqF2Dv94VcnALNQcGNzp4LTVMiGyQndzgegc3jkyA29kvJsa9VMsPzixczJmVkLGRCJySTnsMC7GMjkpm2E5g",
  "key16": "57RB9nXpG9cQMZjLqgriQtjn5RJ2MPu8CKRfdWopDT5n7YBBzLkgTjQPLdVJQ3mmWRSkv6mqhxHZ1JUEbvCwaXHE",
  "key17": "8D7LD22XNx7Jw1wxjE1ue9C4NBDCQHUgAJbiNytL3wdF7kE1h85Ds9JYZfTHma7iLtgrdr9iANR2ZAZvRb2SdvS",
  "key18": "44jPLiKJfzT29gRdCTfCkyE5rTgbfAqsehuyfywTVyYivgvr9qjRwfx4ytLeAJczXDALwhujNhLFSktBtwVeqUUT",
  "key19": "4hoyPHkz93DUGYArmV9GYCcmLE2CAKy1wSptCDyBjmmkZ478pz2JDh9uz6TEtsvqR278bxzsDQ8NFMzaENQbVoDY",
  "key20": "353Z6wJHoZ5jQWMGjzNQDQoeFFtMZGyrZHhsuvxGrpxF6BHnCKXUVTXzQPHswnzyknRjeU1AtrcqmV1z6giLzVdM",
  "key21": "5F2H3Nx5u7WBkv2V91oAgVR4ux3CeJ9Vf5r2NVz69m1Dqup7TAEp6K8HyWDSgS1eNJRE3bcazL1ChZcJe8vmaCXg",
  "key22": "kEbtXftwuAJ9iZpmb34yuHZz2HWE9Xyebeb1p6K6DQ6jLfi31SVjkF2CM1sR4913UXTtgDTvp3dVugjRbRJZpip",
  "key23": "3ShYtkSBk9tnjLaH1bqowXAZyBNZTzFdQLRoSKNWer2dkxMmEXiM6zQvNdz5PdjJzwJWwQmbPBHT6tp23DbpgTyj",
  "key24": "b7RvAcqMJXfp47FDZ8PEjafPUNNofw4EhLtxbAdG6VFJLYdJYKQQKcwEEfAoXjuMyZF5nGpX9zYfFFGm2ov6YZ2",
  "key25": "twWadLxtEgyz4phoFP5Koc89M2g3daADSSJGFkVmxySBsprTWtWHH99m4Rof6xF3mxiwmMLDKkDxCMRCf8MmSfS",
  "key26": "3AEgNeGieLzgUPP8mSc5cdAiBXa7ThmuLMtbb7FxXmkFaY2Y8sFe856VQXsq7L6XnXDYzM3SEFkeUANeTrhDLDSV"
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
