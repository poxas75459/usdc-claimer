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
    "3d6Uq218Ugv8VJMZ66bCC8A18rZ5iMv6rpQyyoCbfP81SfLQ4UELgCQboSBLNPSvUY2h2MxUSwAf93knG9XwLYVm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QLvgeC6uUgnUn51FUccLmaLDePtci1eSVS4rTA7d8zUigsHbne5JQ9muJtkWKvZT5fqhU3k1v6DQu13MVcGcbSs",
  "key1": "2xm8Ri4BoR16j4oKt1TXxKk2SFKhPZSRGGiaXDBn3DGvqTk5FuufRZePF5hByMAc53dLYxxuJ2giU2Wb1BZ3FKQu",
  "key2": "2wtvYpt1ZVWZhwLQBoxr9waaH6PP58XxnC2J2JQGVtZuBDoy5WvfNdyAvq2u2FTBKSMRXjPMaRAQ33Gscj9Cw5ZX",
  "key3": "2m4twqm2nVzWYYr7C93fhJ5hxi2fmErzy4Ty9MuXYwUoPNRCY1dPW2MVppeVF7yoqRUZ4EUxLMaxFnJ2UYMGQX76",
  "key4": "66knBHpguLL7k8S8Eo9T17fEK9JcGVLJv5gndSA6xtpBYm1UPmMoFX5XkhXBZxDFGjhbceK8pW9fWyEvXwRGtg2o",
  "key5": "6M1fMHqSVDqtdxtGzayLAnrEgyR3wZvsfLBMKurCHFnxEiekHUYGYTZtxeLwgGZiapSzcypJDJSyvYtPcFwHrG5",
  "key6": "tYsuxpE3rdX4FDGBcQyWfmQeKj9LANNR57HhGK24Fv4KeNj9XUsGrCF5HRLr7bym614Hu8bTGsskUqSGqx99SYf",
  "key7": "2DTYtX2aGa82tG7uNc9za2w89xzbu2xiVr2vngZu1g3k5ACboSn9dp26W7oRHqPEBzaEV5EtDp5Lg5goQtCghXSr",
  "key8": "iA5vCZUjPS9WPCrma213tiDHYRxvXEBtqCH7yut8BfJRkrnzxPBgSPtvTBDJ6khsCcVzWmEEhHPHimbSmTeW8rk",
  "key9": "3bvGN5J3pHMk3aWkufq3sA3KKNZ5Fz8oygWhnA8BPiWk6T66TYFCWTnHbmEtJDSeNTPg5GJrVk8x5bA9vjXuEsFE",
  "key10": "3AsMujd6Fc211PiGe7hjUnBP2YhsdUqAtfZG5gTasstoMQFnUZnB1ZCtex5txM4HWVSQvNPXkwzmYKxer3ZHdyMN",
  "key11": "35K5GpVRsfCB4HME3RaFDySLbUrY76iUeVT2RLGVUKF6yjoL5K7MRwKjMbvnp5ywKn5uibViUWuuYwVd3tcUEAAx",
  "key12": "3uHFZgUS6jPGaggU3G7tLR9kFe5URfwKoDV8GErbtt5k6Pkq6SRDtDqWAAZZqhJ6Gv7FDFPD7rjcZjoQKrrXrUqo",
  "key13": "2x58s4TKrasGJyQuVLJAUnTYJvkL6nuKsZeC3it82CmvEGd7cnXLHewF1vT6RYqJVXBnYvzuMv4SnxvrRt7tfwrc",
  "key14": "Qk3Lh5Z3znnejCpLqpoa1opZyYVPkM6scQw49bYwgYBnfZLto9fTD18JPB5khEpfb426NrfxPx7jP6cntDTLqiu",
  "key15": "YkWxzwyAXkdTEk6bc3wJ8HbdZix7WDUzUdnyzpKfCSJfJ5t2jM9bwkW3SgEJhuDqw54wi2w3mb3g7BpyidFCvKQ",
  "key16": "5ybU1fd5iTnXmtdroZpYbmvBMFWMqWQ7EqYWufNtEK2BKNu66VjwrcT837gLAgW42cGJmQP9AeeQ4z6aGHXJavTc",
  "key17": "7e87qyebYMmEVWEFjqnwtk8Cht3Yr5H1TCEuvBiuCQyyr3h7vWi2CrKtFX7XR3ZXPBexwXt9NoXkuj1SAENAjT3",
  "key18": "vB5dwriohxyPbBUTANmS1FgNnZQbKx6FK9JzvHafwmhsBZb1CW8D8LfaeVu9Xx3F9p7HqK6RGC7ea7aoP5RU2cw",
  "key19": "3LvWfMgEnv7uRubevPMGEwsJbrdr8tcrNG2Kpm7VPunmRg1nBruSKyGmhEBLKcT4kzQ4GPtXDMYPW5bXrEeG58qo",
  "key20": "3eu5fVVBdBsibJDaqVeUxgvzM3kWKmRTN8gk31MTchW4hPfhZJcsXiACngeSpgC4XCNLiksk9XFeKyS5CpLifgvq",
  "key21": "39WV25gpG2zTTbVjfGnVY2rQ4m18sfdALsb4EEggZYKdEqq5qg5QaMiCFXf4ctmSwRwfcPKdW7orubZfWeQEFSBN",
  "key22": "3dnFnQqa4ueQWjHY4HLVJFw4yDndZZWEC9eLtqWvCZfoLyPu37yvzesKWkz4k7L6Xbianvmreob2wnBXz3yvh9cb",
  "key23": "5aJxpYaLJ1Dv2PDvSdDyuuwGZHUFL1d17vMowb8ThBTX6k75x9hKejKe4n6qAUNxceXuhTA6jBXepxBgYVXhYy1m",
  "key24": "5qJjEBJxvqfQ1CFjFKA5PcB6cQAcVauHBsaekDB7WVx3KuCu4wFXwDVTgTaneA5UatB7xdLv4wu8o6vcQoCbG28c",
  "key25": "NrV1x3YhdNp2YpyFoynQE3R1CpXoFkspXNwGekPuc1277M585oHtB6Duq762ekSkAGGFeZAWvNAj67b7Zo6Stoc",
  "key26": "3VcvWnbMVAexjamP1KWdRHv4QmDaT366k3TG8V3EiCQq32SEhGBZbp7FmmDVWD1QYThJcNL4Xk8riPUffMqxorTj",
  "key27": "584tnx9jkamMNvKEpTp6fs5RtZYbUWKLkwcpegh6723P3V2Hm4Wt8usqSaJPYopZ7GbjzcGzvUA6rTUcwdjbXYZu",
  "key28": "3ZKbJAbUP5mchqGEog52iqPFzkhQkjZWLTyzqp8JKM8TpP6D3UgBXDUStJMvfNV4eNkZFV6emmCXXNEZDmoPymnF",
  "key29": "4bYYN3XPDSWCg8davkmdmCKYh1PZrqWbsTnSyrJWFrHuPCsACiUQYDYYxc4pYPxeyZLXtPcmCgfTF78SRYPSuMLY",
  "key30": "2Uke9khFGz7cq6myiXrJz1N6Ub6eHFpxfxyfKTm8TtTjicZWN9kk8qWA8ufvszBztkJ1ZQ6qUJcU7XHyNj8bU5Le"
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
