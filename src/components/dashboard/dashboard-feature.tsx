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
    "5n75mC9gW5jrX4bShTKrxvAGVAs785kp7D86z2E7Np3onvtHrVGq4kaudGJ7PVo1AnAGaPapSvH4mGiJZviZ5F37"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5njhoRU6ZRuchAF2PAtDL8zAyhdnzaaqJe3BBQ1ZsBgaKJ96Ljuhm1vts2e2LDmw5f6HzHV63nSunEionobRX4gm",
  "key1": "48WXLddwRm6tcEG6gnGj3URiASvLhwWDrhcUb95Bu2JTNRdrv23NM4v1VvjB9B22UR23UVpawvKhY4nDKVgFo2ne",
  "key2": "5aPEVAGEyyrT7uvWeTYhTimURQfdM8YKD9QKM1PWsyaApcHm7548XRt4eb8eiGgr8fdys7H8R1WQtUahWbDUhJYj",
  "key3": "3sgmJPsHwMZm6k4VvXwMsc69AgKEMBE7ri7dnYvMeviJy4N3BLZyHnXVtvECfaBfRPSKsyL81oiycQbmv4JogSit",
  "key4": "3qFCt9foSfju4cBHCAgcCDZDosTEh3KPvs1F9WAtEApPNybWBathUH3ka7WDG5VuiZmM7RuCGWv96VCZG1gHSiwP",
  "key5": "25fmvjyPGV6bqV5LVwyVwDnHFU9SLE8LgYVDEvePp1XKNE4423fTmqFUC3r1dXfF9vmxD1uJRTMvs3yXDtRitcCE",
  "key6": "3BVoVcAqwN4J6fnyisdRuBcVBsxoaT3HNCeN3DLxr2qAppwhsUkYjBCAYUaetofy429z2qRMF5KkjjA8hB88wqBJ",
  "key7": "5dgyR8AYB5GhuNRybvnBST9MHBfDxYhHa21FjisQm8cLYk2JeLvuD3xMoUL5Q8Q2zgw8cruUqrPZM6EEQ5J85KPN",
  "key8": "2gMiEioEPUPoJaaxrQ6KtQAFBj6FCabr2RA3ohyweBg3GUHd9LRPzXLW7tvAapGE4mGCseuxHwbCFgsoRztDsNNT",
  "key9": "5KUWLBMen268zjtsvCbhkXUz5EMN4Tx6bfJw9hYRRV3BDcSr5PN3cFC1RmvzMhRue28wrssXbVcYJWTuXPodSaT",
  "key10": "BVpDumz8RzGBmrwE5htaHqC4PGj1XTEhLTYuGmWuEEq5magPeUuJWiYnC7mrJxGoNpbMZbyLfDhLvdRpLSC6BTP",
  "key11": "5XZyX4CzaNcjnsvUhvDuebNiPJm67KzjuuCcuFMgHUuTpwsGwNzHBnxauZ5AzuubUyp6bAyHcm9AUrouiUAA3V3P",
  "key12": "5pGYwtqkHmmKGpBrMEoT7BASDL5936c28c4Qw2L5HgDJXNL4jvtfbqbzxFBmggYbmaxdq1Kj6B3zyLzb9nicCf25",
  "key13": "26vUynhfcrS9ih6qD4zftgp9NTKZq7Xfj6XLLQ1dtC5HffLyegyesFK3aJRoSzmMFdpx8vRTFg58aiUDWPvf6Q71",
  "key14": "CqAQCtFYAQkAvv5XUfSvYhADYKk8JThvZPkg6i3g1pDM36PrkUnw7EHCngHEQrxBo35wrhNezoC6tKrRYqXM5hL",
  "key15": "3mr9z9R9GMLgfXvh27uozhtFWg3n29U9HWPhnWTxPHmDsXNwgfndsVUo5wKhCUvXu9mjc14jCAXKQs1YeSasEc6Z",
  "key16": "3zH3GWzQfheUZDfa6H5TQVLzZYmxXZWZX6oyqeiH3AFkDLQyHB5qUi7pYPjsaA8D8KibQepuDXv8Qa1svELBTvCy",
  "key17": "2kuEmCNDJQKnfesArxSBoBYvupoW2GoFkjbjLMoyMt4qiq5WA2sQxKgMBkAVSTiADrCKKkZqmr9CbU52psHcHgrp",
  "key18": "2jo4dVaMuxtbxEFRsyixKt7BnhB65LmPjiTNfaVNK84tcmtWuhXahyQnVYXd6zPg6FfMxntaH8kdAPQ6DnLUS4YB",
  "key19": "4knzkSswDDMZj1JeMgJLAvMiiYeYMwsf4iQjwsxxnw7vrst9eeqVRnPCyWYyC5wXhmygxqpWixLvYy7ihmNSLFbz",
  "key20": "bFXgJSBYiBox8Dpe6BTEPRXG53MyhECqqaNWohuGtUjHhoxXbf9iFPAVA5wuiPUPeFrGiqK3VbJmC1kDkbJMSmk",
  "key21": "4iAKKN934H8BmFm4YS4pfjdocD6RdEhNd7N9NnoeoEq2Fa6gY311aTU7M2ekmWEX9SVTyEe2gRzLzAWAwosC7M16",
  "key22": "3nBEEoWXZNG1iTM7Pir9WQkv6KYqF91KLHQPUgVx9Zw62vxrvCXNMFDYNNbKuYj9Gz5sNiVrL4rMsNLWwGdeTmfc",
  "key23": "5br8Bu6KwAejkxcafDUBttbon7j3jnDwySuESLeD8sJRyuqJ8YVx48A4iuVe8z6otzv1kWpcRWwLEN1ejDdgfYUM",
  "key24": "5xMtRm1n9Ctuhk3cuVwLwck7enCxCKk1XKrcTJrgzFTkTyJ3MTN37Kcv2LWwpSac5qEMNmsrwHF8CmRfjzAM1R41",
  "key25": "3LW7bGZMbkKbbNakh9pve9r1kVzb6FgGiBcKh1LhYzQyovtKFLPzempnR8HoxiEwsXRdcB3F1xLhhtsxhRMZNc5t",
  "key26": "5s6gei6Ntz2NTQTqSJz1CoXczEtuaWVEeeYZz4hzGMVj7DvVNgPgMXhwBvkubiRRA3bBnvRPYe4RwxsB4fGLxup7",
  "key27": "z2t22eNe2sMxfpuicLG8WqzNEVRFYG11b3mM68M9oh2BZWeweiEx6QzpXBqZWDLbmhAkELMxNnMCdFRLnJC3SXP",
  "key28": "3sKEbCPJNnUDi51DhaVVV2inGTYrxCNFi4BqRfSoizCY5Vf1ryEjsNfqtqsswCSPrCWom8RDxyb9nLYNwD6HupXK"
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
