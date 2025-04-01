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
    "4C2at6U1USnUwKD6cEWC4KgFr5NZcxgER7GkzLSk252BVBqBj2voFqREfH7qHSnTUSPPQmc2mLJAsCjn3jearF46"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ewDhWwtdTPRFVDyW1ZB1D8Yobg2w25Hpm9k6X3pUyTtDWjP5acnw9FCPfw2GAjAeHfgErihiCtBUQntDuutPnyF",
  "key1": "3TgXqvUDAkrteJwaru944DqeKM4y9g9tmELUL9a7rsVeGQkXt5K3xG8hGmpZ9kNdTTZbMcY7ckfhZfrxRpccZGf7",
  "key2": "5zrYRECjg2towuhWxpkuuuDZtA4qEXLDs9AXZ5ehUK99zXegfXy4yZv1uroxCP3gZjjYW6n8ivoaAhhi1hKdfywJ",
  "key3": "5CnfjuDhDAVHM4s4T9aS2i8ZhsjTXgphkAC5AS79wyKQajYB4uuAhQncFwxdW8UV2sawaqSKNMK9V1k8qSJwGwyQ",
  "key4": "5JfcZ5AAXUk3epF7ct7jrFgHX2cYX89vj26HqXnwetyVwk6JAMFubm95CQufKDdPwwv92cmL1poyggY2JS5jKhS1",
  "key5": "3p3XjRFJmTu4Q6K3XcoVWZ3ZBqG3tuKLoMKjzyBZdcWtADRk49Z1g9zaEfpzdsDkVu6Ee26ZaHWVCvVHi6wyULYW",
  "key6": "2gbzaesbNWqZfTRDoWZ6RL5YFutc6Riwjy3x1ikLpAqJGpPFTTf7p3B66SPH9WXZBPTzhoi3PbicYetSGbPRWHAb",
  "key7": "3qBc1eMeBARSjCj81Z9JEVNwnHhHmgoMjPCgwAqhDeKbzXZ6tUK2Q7TW9nMgxCh6EoZYvZqBhk6yZKeaWwoAYicJ",
  "key8": "66wVHqgBwTbovQj4wxN9nALRzN11cB4STCg1U7kpqoJFLDdVD7fqYtyQozWQd11dTaU1uKnrWMkK5BJ3DEzgJVZB",
  "key9": "75FGimzyx38xvFG9KyfT2briBJKH92XRVZ6PDzML7KjqQmVnLLxgHMb5M5VLso47fDraBkwWSTXiboTy9gTRdER",
  "key10": "wVDJz13rtvsTWV1d4BLVW6MegpvNisyogDPMBhs4dcxNeFWxqsmBfoQhKrWNutPWRmKePBxRKJgih8fFHPCzkFu",
  "key11": "HVW4ibThK2uunFV29tJxb1wC7RPYDjk94LjJgEcZLYRPFAhNZ5R3VVeJeWiw1upBVupTHkxnaGns1JMPFPhjFVn",
  "key12": "5WJ7iQc3MA4sBWqd4pfoXcZjChCawPMMDHob16GMViXyT9KvBFFm6ptsMCC7WgjsAKwbpSTnPNKQ8phYh8xbcamX",
  "key13": "4E78VpR7VTPSmNhf7MWvdbSJsMrzdGX67Yn5T4corKnGdvpD5sDLHqcdGEjEAw5G8KAwYprzB6KRzo5XYj2xgxEy",
  "key14": "21rVkL5zQ5QENq1fGCnSKYh2qrg8kUgANKhpknbDywoHFeqo3UYcPUvD9ZUn6mzWTdUHDfSkgnQNiDYQuNfvLTCL",
  "key15": "56UFq7DgzND8mrf7xj3gAb7MrNCjQJB5MNNjwVwdxeWgYkA3XGmCiwfN62F7DtjqTTSsiWjsqCweYWqHqVhnRMeL",
  "key16": "qW6Fh3S4x4L6x4PodmQVYHRrGyFJA4Sruz1GpgEUfA65uKjUXGTU4Dj9EusTsvJygDzA7e3RBkysEor37h1JU8Q",
  "key17": "5FY8s5SFdssYfjsFQAYgyEH9jgM7ZpeMCWLrZWJMUCCo7t2PsKZUSiR2H1Yxn2vubFutE8pkkKRXntev5gin6cbn",
  "key18": "5k6Gu8P9R4Q1By4EDhnKptmXUPPCkZjqqhRQg92Hs4et1qLZuAqxJ56SPfcxLTYgUyRBjbueF6q5QcWyBdAoBrBm",
  "key19": "2BktMoai8s4n1tCyMQ16QsSPCDoTnAAshNVjGNXGK8sMC4uZPTf1ZhGr4KUbXeSj3bH8d2TEuQMpzLmH7QAMmpe1",
  "key20": "5tazaq8FRqLCQVdrVWJKfhGv2xFELTnQJj7CeqwB6kPGQf7pRQsMs4iHhd3Ru2WPRUm6ErrjHuzL7Z16vcGVjiWw",
  "key21": "CiHhhqHZiDfCTe48kHgZa6BhtwoP3AfQ4AGjenMfjCSXnMmDdXWCJNiu4bEZLThgjow9SmCdgpAnMJrXhxkhNNR",
  "key22": "2DYaxfQXVaEkckh28c3HSBfECcoKKEGTL9X3Tn49qph1cQgSpmhK4oYYZMQLd9hvcwSpZ2mJY6T49CcknTyZWkpS",
  "key23": "JGKb1ihTqk9YRKF6yHMswya6pgZ5gybS3GAQUzGXYJXCDawrrjdbKNxErbbWMcXj46Yd3wgySQ6iGZs2QK11ZBx",
  "key24": "2RJSDbkuutg1hdhakDMMnpb5XhAB94Bxby2Sw2GJFoThGENdy8far349WYAwNMEamydn9RhG4DsGf4CfT2cXhQy4",
  "key25": "3bV1FNgLwi61uHLwhdDXsvEsrKCgryAjFhEN1c3kFwikxLxjR8hVpRxZh1fGVJJJ73zvDPww1oqm59iR61tXRf1d",
  "key26": "3DAqP3ytKPjENwNB8QicPBzyccCkr9YGbCRLUnzK9nyfvQR1RXacMUcUKtnFfjJeSPo31bwX3ZcKUVKvpZq7Q2tP",
  "key27": "61sNDgGzWbhhwHVVXTwtpuYMWPAfUfbLP6N6URT9KNAZTS4dp7fyHqBPUrEn2pEwsgc9DsdE5ee8DuxdiGhqhVzc",
  "key28": "5zmXzx7XiXNophXgujXToqcSVU1GRqU36h5XjfwHEeHeswYCBajAT8JpSBJTe7wdfP9tbPWZerbn8NrnVnjwkrf4",
  "key29": "5pt8hkpxW1xoLeg8TVGLRAho3W37JfBoj2JKR7kZdCPEtHnkcK5drkwtTBBLhgDcLWmKFx7aNJ5WkPSDH9ZXz3vs",
  "key30": "38nj3Fw7DHbznXKpb56FXwqdn2du6wwDzYg3ZN6pxNv8j6nmyL3xxbrBe61smSncuCh2fU5RSMQSdqgudBUqaVvZ",
  "key31": "615Hkn3A1gbycwew2vJGcFPUw5EBXj5QVDrbaviVnvvk3LevuJ96gzBcwDV8RcpddYxo7DmvMUerVP2WiY74wEnv",
  "key32": "4HBmtHUW9gZiPzPNTMVKWmWPAcHsu7uwK55VPnTnPsw2o4JcduoYSZp9mUzwR75sVTepDGthNPXkvZnsvRbgrQaP",
  "key33": "2woo4QAX53LexitQYEYDUMSU2Are5GtLNTJJcrVgkqp4sBZmBSbzgXXiegBKgat5Tqyo33QjcykqiowqC63f9XSs",
  "key34": "2rHGURkKYMDpssRYfEtoL1hsNqYbbQ6YAQGMPHDmfiaKG2M8vz61gf7oEVrsJn9tNA9B9XLsK2B6c5upGWAPrhkc",
  "key35": "2iL4DupcbsBRHswBtUFfAdrhLKeWPbbi5ztu5pcvJNvV1dccgkg4GyNGuvdtA4UGXR8za7KwzvqAiSLrMNAdJYaY",
  "key36": "3ULxLh8mxjo67HjCsFh7EmG7DvKKrPdV33cJc9b1AQwuRU5A6WCDp3Fj3HHnmEHnzamLa9WHurMCbHDMeZgCqjZ4",
  "key37": "4EdvT3NbJjxEFnyb7LhCiAgwiX7JPFtYL6XvU8otSPsu47nyDZaBUWqPdF9xhkp9yz7Ew7awA8ceGdCsCaSVhwcN",
  "key38": "fEJ7DXSgcYDwJj3AJsSfnNSEFLS3cZZixiVCeoGuEtAHr4tTrZMJZZqHtSEizthnX7Hbfkbf6s7obDGWtToTEdS",
  "key39": "4ira6kEREWzjBJMHXEGQ8pqNair64cuN2mcz9X8AD45sp2V9fHJEz9RpyXhkFA9QDLQint7zKQDSuzRAkR1gd6Vk",
  "key40": "2yxzgPhAzcUvGNcLMacgbCzdGWmjM5xs5Q84TCfQho4NbkV12D8cviKKFhckP6ufncPSS2qc3nQCKE4YzgC2xbqb",
  "key41": "33h1J99st3jvfcCJyo3v3gRYHGdBUDRxVUBFGZhF2F2pGHuY1CaZgWssaWHwt6WVQyHa9D39DBsYRLdjbo1g9wEb",
  "key42": "3C2r3t7tR8Tpc4Sft2fW7SfoimKafYXHqfomnuV4eZsRUgAhtjuNC6XR1aEKpvDFqjwAnQmiPFqhLQzUJfcSw1iQ"
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
