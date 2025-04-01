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
    "4oj6LRsyB6aBJjzn76rTNv834eGDXfFc6bZ6ot3UGSUe3wqmnUkYj1HobBFp1qNrHCohdKgViVtVjcMMWAkeGUUw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xxB4bU8U1y1ZvMRQi97JB8ExuG6dFvsom1vPjXjA9WWT8iV4B8WEJweKDQFqu9ABUhG4g7qa6LU514ARLyNo1eq",
  "key1": "5Tiy6DNrKpeyPuHftZSaNDViQkNaiNfSf7n1nVHBQXSZMVvzPstie8jTiADrtS4diD2JEzpCVLevfEW2Vgv2z9BE",
  "key2": "4wnVcwBDMYBEDGyk9Si9Cbge3bmZkCvZ3YyXdBumgG6YbtW7Erk3jwvg92YyiaZHCags7xyCn8euF5kPJ97ZQHcq",
  "key3": "znNFVeyFj24eB2arNTTMuk8H7ZxVQdWNnMdqgD5VtWaUfZ1z1SMGzYdVT1EnVW4993zidFJZ4gzgLEdP2Z4K1Pa",
  "key4": "gsFyLWJFT75Nt7goSG7BGmKr5sBYvEqCEhrg8T6N7HnBdZJNDLEGAQeFrLBwEynbT6iDBJ4weSgKWzZhNEdwHcA",
  "key5": "NpjywuRPsGNrPjHyA9fkiFjUPu1wA44EL1Y2A6S4gyRosU5qvf8KBeuDSycoDksSRLUfJyCkrqu7AcKXgMsDcBv",
  "key6": "ctRSC6bSKDoFrHrHhDBxHBeihVe85jVD3K3o7Jvkz63hzsXvUNdkY4kXBh7HhxghFHok8t32adpcxDNv5Lw1AKw",
  "key7": "22dA9uxtsH5pLDwLdVBgtNBwVEQ6GkGvDgDY87hZUDuZXRJhZHt3eLhzAx37MGWwBhfpYz6oU95VXiVjeBhMqESU",
  "key8": "3iyTxRmENo1btbWNM8DfhcVjtCiaec6m7jruYKcpxDXZydHX6XjR2LWZBpTQsYi6gg5x3X49nhNzD9eePcBuYX1E",
  "key9": "4JWHNrcq9c9HPKu5ebRU63kzoCotpcWVyewCaxo4TCmG2u82tDt4A2v16U7ZaPTQXeQ7L4fchGcKbBMyX2BHfDUr",
  "key10": "3JQmWLxKuxB5jHEYz5gFaLvL7KqmoK8NMh7ETuhQ3SA5nqETim3q5rPVSuoo8p9r7Me1ifyZb27mMVEdFxvzALr8",
  "key11": "3QuqCP6Eq6pupKNXJrRfjVAMdi5QZ47XcLNbEqgQz7rsv18bK8L6hHqJMDh3Z1KVLPFQWKs9cZZKtjtHmxT4ccV3",
  "key12": "4Y8NJBJgKZy9U37KKs5JduQhgb7EUmCvzDYcbecEYpjXecsWQBWNrE9nn2jrSh3xzbvgfr6oBLgsaw8jKABZDB22",
  "key13": "2YKbP8tQVUUxqiwSEcGzfDDBuHwVy29QKgtywNqHMc3SdQtaUP1p1UEbuYgGxR4NGDyT7hpj6MzJNMFvepYzTAb5",
  "key14": "X3nCXZBGNqikkmnivvfDNG9D6eiAR7XST6uzEQKbEZ4giQ3QMcVfFQg8wh7XY1ZVkXJUYFvh5hnkhHWw9AfKQ74",
  "key15": "4F1dCQ2QNRfcdmxYj3qEnXYsKUWgCpw3J3gGHNsAKYrZFu3MnKUKj3daDroWFG5KnHvdBPGQNvtVmwdAoWqyXRb3",
  "key16": "2FEk2mN8GBm3QB2FYHh6Mrzyphg81by3WaAo3AU4HzCxLYNNZmP9Ue3fh8sZ39aZ1U85oAhPSWeS9cKKZuxisK3u",
  "key17": "4A7ZytdynyqH7cfc7LLLqDB3eg7KG7LBsEfcgdPRLDrHSMSUkDGaJ7JKiqVcTLgcawRoaLSLsogSSmE6WmTnkKsc",
  "key18": "64ZdZBfb2KzVPaFUqtZUnh9pzaXWJm3gyZxdNYipUewPJfpPXb5dfYmKYumFS37gMJJBMiFzNVvTAcVYndqth7iL",
  "key19": "3XJgwnc6CBhAwqU7EyLS4AGZUz7Wjv8CGnECASpWR18cjGu6JUryjmQAG9yXpTz8XEu6zpXhuMQinhZDU8fpM86R",
  "key20": "3D4ta2AxjPPGyLgPZjTV2ApMQoBnxfkvqLthbAFWDnH3SwVYtxv2wahu72SdfnNbVNUaXs6aCtgqrej83RorfQFj",
  "key21": "t7j8Z82To6X2Zz2mjjyQfihF1mjEUdwvTNmXvmvGYE9S2xChEFRR9UtY6gAUHLjz4eDM5e6S8iJXrw6Qoixc7Gb",
  "key22": "3B7493EtprVbwMmZgHMLYFRR7dmEh4zZZxo7U4QwVJxhCoNVFbXJHsh5bmXhioqpsy8zfc3nbLFLS7UQDgXVkBn1",
  "key23": "4eUMGBAAiNFDGoL57xHtXhVTaTA3M5MnEWdryhJYtMjAzV3rXzzN6VqXsC4Sj8TnJyReVotFH4VCCseQFqDWBSFL",
  "key24": "4KRho4YpM5UPPoijMqPZsWf35usyVEduQj1syLTxLWHtdQSs34ZkKMDBYka7Cb3Yte7ndTgZUa8mZcoyufkrmaFZ",
  "key25": "5QiHtwztF2ZqtTTouPMdgXTYnEH6RsG7hQt5DcVUWeDsZJSPZqHDZVQpCyhApc1VTiXA6sckavnzQw4xGgTN79hv",
  "key26": "WnUuNpVk6TQMbiJdXyxapft1pjPv4fSUzpVaSPZxRyG1KXtT9mvtvVzfYkvswoRM5owd6kuBDWMV8mjbFK7gfJH",
  "key27": "3D6kgYiBbVC9Tcmpk2CwRAGW9SUtCoXsMnn8kQJjsKU8Wka4EavD6DEJTJdTrMN7KrS3zLi99MFBEM3BHPcusvME",
  "key28": "22yifZXcNCGPKKwj5HyCFP5hM1d81rH7qoM4kiGVbd7VpVV2gLExfbXACfsCSpZwFinwbbp1hJLm8CPyTdifchYv",
  "key29": "4sds5FvcXw3zfgwQhaArC98UeC3Q2WeV64vXaDk5LL3hhE7Hs1xWgtszEh5J4WMJ9w3v5sZBD37EyZoJPYKhW7tn",
  "key30": "2rfjxAApezYi8mmwZdkUmxKWuitcTZm9oY7DRoH6q1TF4V9H23F19uGq7e44UaiTfhbeq8PbMhT5rXiL2gTAfbm5",
  "key31": "62ACHqLveh1JTQJJhLrpVmq4jhmY5T4GRRPo7vptAJdcTvQ9pLcgt7x2rZyDKh5nocEeV9kPC5obLx9PkFbkyQhQ",
  "key32": "41tDbEi1qvXW6d48y6kQ8esURkqCzvKobQvPP16uUnxsLSH99m19ftbKSPiGyo2a2z3RFzXgNXEesFygJCGHqEXL",
  "key33": "2f91UxEBiSyUUt5rW7a87sDnfHeTobiFwvsB45mYYHTjx5TuQCKPzAQbunPpyh8dLpDbREodXgkvoysceP2FUSaE",
  "key34": "61HBMHf78rbmCTjfK4bY79GSbhdYM7V8nSQPkDTtTJfE3twM2VJxuFn67pz2TbitHm2BP54t1YL8Jk8dnudRLit9"
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
