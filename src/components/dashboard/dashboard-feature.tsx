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
    "5WJfCswwibRAPsMkKuUngF4LBDfECvMLRWsZhoV1jYNjgFigZVghhJ8wY9XgXsJgSumBqgCBF7BANzqqohYaw2zV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sBdaqCJTbwwss5Wih6mRuy6wPywEx9tJUVFDkCaFNqb2bDYhvEXBJRS8fyV2cGxfc9DiREVVoqSu4KdbJ2hUKTR",
  "key1": "amu2LBquXph8JmgqrvTX26o9P1qCvDRh8bXRfPw2iNWAMgvyvsmAakk8Z7hCuETjcVLGqywXCU2W2TnvZ8XcpqW",
  "key2": "3tHPZbhz4y5g5UtdoPQNvEWuakVxWEr6GBie3Dcmh8NnGJqvZrn8WakucN4Rg9xE4SfqFDXZC8qm57fmZ1zZFJYn",
  "key3": "2v7EbsL32XErw659CqbPPQDA4FyBGgRazJkGSZCwRwUdTULfkEKspQaXUiw6k7RXtjWRwJPjLmgV9tFnjKmxQb8m",
  "key4": "4BXagex2eemZdkiazpWCNPnu3A551VBUTw9zCjdSFANVPaW9MsksAVazYVK1TFppneKY72quqxiVHBB31EAuoyQ5",
  "key5": "3YTcuj3jLJJz3B2etKgG581izxyey8EHQ9Ld7jrZLcnnrhWeYzh216B48AtwQJbVx4znWEKPFuxSZ18h1jrku5fb",
  "key6": "2Pzk8rpxCqqDdCnWBs2fi721Yh3oaovsiU37Eav8GJyvH7krJV5MD4Y43R1yx6ayaroYXW9dvUmzAfuw6J6uevv3",
  "key7": "3AsxnJKzM8kmnmQvApyoaDy1BAsGE4tDHm3DP4ymWTS62ks1G2pNtFCiFSKVtdhWgzWM7kxAfy4GqQKYsuj8aR8b",
  "key8": "3Fpms34tqEzRrAbh732y865qJuUFifnrdk2ibxGm69iEkwZHhNSMqKrNEfzCVsfXvTTdhQ24v7ZnxRwzB4xSDFqn",
  "key9": "4Jw35qdXrwakWGzzTYmeHThfkFYa71pCEoBrkvnbWcMk6T33LP35axgNPQ1qcQ475fbKm6oUKF6uGkEFdQ4FAgKr",
  "key10": "5cCabiuEBjDZf2GbX3mExiz8hMXa91CNmGp7yn5H9EvZZ3qVZebFA4xgu7QeyiumPPAqRvEDKGHX1LQzwi9kPxAK",
  "key11": "5MDBGxSQZKWpVp1F9Q6g697uRU2xkBAPFqsrQTZTEyTGfiXXMurZqbY7ZdfJu6tJ55es5Tz5nf9CTAuqehgyXhCE",
  "key12": "4ffm6K8BXX7ESL6DpyKZVCnDPLbXW7WZj22HZGN1vn8NFEE7Zy4WoG8XiUWfjLx4yWLeuNTR5881r7um8oQDrSMS",
  "key13": "4pH1wfnUb3QeZRUktgypTxccB6zetPfYXCV1NfoFANGc8oWYFfSL3rA46YfDRgo6wKX7199y5ZcYqXK82Adv6HiL",
  "key14": "5qzCHNdcRuXDYcnrJPJEaMtJiQY11eE85m466pp3TyC8tGWdn1Xr6ZeHhPW8jSTKhF9uiGbmhoj9nkuVkFrWpnrs",
  "key15": "3uiD2qWR4JNRB7r7GtiVbgd2hKUV9Gftqbw9qFhhBFpFNakfsnx4nNfMXG9RwHNCbjYYwDciwmDRcUp4qxNFc5RZ",
  "key16": "dnCXgKMqKVdBfs9oJWsQ8VG8NQqENXzniMKYYbtnQQrCPvbkFqq5bFPLxZ6GGJwjMmWFCt3E6T5tqNB6df4DhE7",
  "key17": "51Q3zLqerDt97JJYkaGJZ83QmbBqGThvj6gUJxAkj8YMKbaVSi2MUBqVEEzSdDW4qieFvvzqcPtXknFMZf8pNtnn",
  "key18": "3a5D7kdzGNXwMuhg3LVZrBhWpAwHHjQ6ZT3BnaPLnmQGGZaRYhTaE27D4Ci7QhBSL8N8BUfMHHAmbpLU8yEoSGji",
  "key19": "3za5RymSKhYxv7pNZ2pJgugX8SfX8L2zJRqENUmBYZnyQkd5jVfRjNnfzSMqEhYFosS3FbcxWA6Vg6HTVgLdno3S",
  "key20": "6TcH1NNCaRr9kj7SQ5qLP2VTjBJoyumV2LVEs9zzJSQbuuC64q5tdVibNtQ24tpDQe97Pou4rcHN2iVmuuhdr7F",
  "key21": "2LFdUxryxYC7Wn8wfUBNMoMM1hbjaiN8xC1yWaZHKUmduNdqCBTPUW6UGrRSVY85iEuXcrVYd3LxzBD8hoCC3Riu",
  "key22": "pFh55HS4zCSoKiSaoDvmoVZcvi9XuqyB2nQcWwTgkih23sGFFQ5eE8B3j3yPEuaDqkkKK5A9d8GwHzNHp7ph7vm",
  "key23": "3eb1DfjiUQL3eTBaSmSxdQCJSHAzoDP7KSQ5nMiXEaeW1ae7EWpGL9Nz8kYh8B4PYVV1XHBwNwGuDpJrfAGVcCd5",
  "key24": "2h3BV1iw9iWz1XCtbwsC8fqcQzZF7QiJNm5baWMy6ukuXM9vFJfjceAfNz8CDPruS8FkYxBmxJWdbkaPVTbgBDk1",
  "key25": "5SQDT3UigPzzP8BWptcHNC5AVHLqLC4XZhX6qXgMmjamxxRBV6VihUhdPaQJgSDB9apHfe6UYjSCHRewUG34PbjJ",
  "key26": "3hQihjRkDJgurwwUV5eaB9LiQ3n1Q6tPQ1UuF6yhse3irKrmr2HZDT3xGkCvCSQRSkSqQNHLjXcUVQ1xNRQ9sdJk",
  "key27": "2udEFzMKkuaCvPNhSzdKWT2oFNG2DrEEqajdKykuirG74KcrxacGtnzoMywfTgp4jhg17pCgWbnge7R2WqmnEMSh",
  "key28": "4mw68p8R4oJDtyySZaLdA3DM4XUJSNPVDbusFkxwdGSZhwzn5mF43NA5nua1CDiQnho1PQo76CzHJ6hdF644Uuq3",
  "key29": "hbJySCttvpHLS96GKqyQQc3RvUn6z5EjLwSUrcK6BCb8YeNNdFDiQNaxk2fXF8NAVWNyzq7jTS4hJsUpXWq6DGo",
  "key30": "S9JwqjyrUv5warzF8eRMAP2dKvXpUDM11daxjjHHYJF7P5kphbHKEberCxy9Zc1x5Nwpv3eYZD8D2raxWsvQTa3",
  "key31": "31VXut7DZpB5RwhMm6HJCYA5DD25SaQLkdfgS6CYf7HPv5wD15CNG15xSeydneVUrTX7din48Xczc5kfBncLdME7",
  "key32": "vziXGEXFJm1hQPMTKnTFGSS7pJe8caKyGAq6oNvXUGyeVainSJnQq4KrMTjtdv5M5o6LTeuSqcRoyqfWoqWvQ47",
  "key33": "378D131r6vrw42Ld9UdCsN8MKvb77qDfxwmgkeuGkn2snNzhE7zEoFFm5qQG3xLcsPSP9hmPoNofH9XEPCQd9SDT",
  "key34": "4fCjaB1RLmuJRe4k5btzKJE1cxNw1AVaz5oCuRPhyQ88hZ8KWWr3UscHJNpaWMFJbcBi8nhgWMjRRn5tuWKCUHSd",
  "key35": "2VLEgFzYGBSZtu3fq9fbVXnz8q4XEznpdyDW4DjbGz57SCKow8kBikyauY6ZK8qLnLyyjfyLDGg5585z7ao8obMs"
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
