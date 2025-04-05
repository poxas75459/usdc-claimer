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
    "2tbkLuwk15nQEjeTN5FJMRYe4Q6ijGJ1okDXsobtfCXR8YLT9qjANpF5gPNHXFKdUtfRurJSqcnU9AHQUdhyhodp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "481S3D6gasEtVgWyz56UtahAETEgUUd98cTKYLQXDX1AVabEpV67oTY4RYSDp6idbFwAJ5Dhk2CyUpqUtjajEMBL",
  "key1": "U7dFeM1227gauBjgnc1x7Q7WARs5XoYgHSdQFBd38MyrVxyjVy4sU6p7TRg4uf4HCGjRqCjYMxju5hR6HHSECsS",
  "key2": "37UXz5Wft8saQh7ew9J2Rpkcat8WiJzspcjB4LsZboan2FRYUCJe5GJCNWUHa3exMfB86cnibgV4rbfz9V3Vho8Z",
  "key3": "3jw14bdK3TgBGGrALgfX73iYrR9Lj6JYE5d5i3zHK6CSsUEBuce6F7pbD8AnoGMRkdVBwHBCuor4wcmEwu4zFJ67",
  "key4": "C1LVDSZLmfgbx2Hx7FcX3xa3xmyX8j6pHJ5wHRgZTTLCGSWCCSEHvaeatUDRuemFZ3MXD1nPBqGeHaTPMWqy8fv",
  "key5": "3nbUF3bVTjjRiZc9eDZ8zks3wjzVQ9GF5wYQBVeNKvJNGERWyGv856ECsNHNm5tPo12rGZrBzY2d8pXqhk5MXtQ6",
  "key6": "4JVUPRe5CpuAbVS2jmGYQP5HRg6uN1DCwe4rLDSDRAJeZisMsW7mGucMZt34j2eFFNLpUpw66GL4Tzv8bWaxHLGK",
  "key7": "5Jyb7frgY5orQqFHXRtyySgqoW1ThYJ7uZwAeQJrUkuWCQDVNF2wNqv9SWBkrSvcCZsFm5T7YYZKa4fdadrjR5qT",
  "key8": "4g8SLnTtm5HdMyTrrNiZR7WDYhihGGhyvoTvhoDus9us1dC43bRu4CKfRrrER6aa6etjtUSqPmmDMs9ChMkxJioh",
  "key9": "ba46VTP4UzfqNoxHNXFAnkfrDi3w4VEJo6Gdxy1vAGm78xHd4cUkhme6CXYNqSLa3h9k9wSL5q2aJPRP3my6aC3",
  "key10": "468rcG3pz1MXjYQeGU8nt4bNNbVpjZDPjzT7euDYqwHyiWCuZNhUC8ttLSCzrmN39Kd8TYA77m2PzK8as8eYx4MF",
  "key11": "2Pzf48Chrju2Mr9tGGeboE6wRjrJ1oCQg3k63fMT9udkNgHXiorL2B7iPQzPjomNiSmhVnMmaHVtc7nEzV4KHGeQ",
  "key12": "4q7eCWP59xKuLmZQgPpJAhE91DNBTx1P8Eb8pdLiWmrDVrUDv6qjNNS7cU2iFJgCJtqwfpNdWCGDNeJtpMEuqzN2",
  "key13": "2VW9Kdk6qwkJrtus8SHJQFto9MNAKJb9BgrdyQXQmapgDf7SVR214nbXZ3bTGR5gS2xPYntrNTQjMcW6xP4ajkjW",
  "key14": "i5oFiKm19tKHwXK5wkDL4ZnEnm59aTsBP1fQLh2E5CpU2VZFj1qkaXaZ14aaT7DPPVc9uLNHUr1D769sETSsyoB",
  "key15": "5ESdcjXsGW3gw6Zoy6cwcn6CJbKRhbGzC8U9wTn6smf9Cjauat5cyDnSseSv13K5i3HLQSXuiinxUBsYgJwfPGM",
  "key16": "XQxLm5J4TMerfgmXTfbGedNyd5E6VbuRhrFvyfxVwVDP7kLKT748gGaRV9PN1hWMHFYDg4ezQfo2uiPawaJUtha",
  "key17": "3dQcEH4tvs2SUSp7MbuzUtQyP6wqmrnKj6KBhH7gDGJ4EZz2Y9MXqF1Hip5ZkHhPVUTsEXY8FUa6TSQBQTuu4c9P",
  "key18": "2ubmZ5DcNgad5NNVdMQNJRFq9omRF47BZWMCqeXswSV6dK9fUvZkL859skRRk7A7Zza3PdwYtrp1VkdDU89Wh2Nr",
  "key19": "3hZLUUz8jxJQhiCBfcFTX4p9ur8KzzgeNiRBXFNqNEZgp7eWmCo2dmhHKM5LmDbZazPcTgxhjjtooP2qkF6Rc3Q",
  "key20": "4YvjJEGcV7DmL9ZGufTCaybCjWgxaPkhqqtUv9aYC2PNWHfhX5L1dcGdzybEcEGACt8hgcNZuxMSZEhzY16d7Cpg",
  "key21": "5ubsRETPex64A8wbwmd9CeNtC6mm4pTzhD56ANHhM5auDfoGuxbDK6baK3gHng2qi9nczSc2oRimJLe37JqAzyNU",
  "key22": "2fdBk6xR8YZ3X16hAY5FH8EGmjt8MzCCUpvGHPo7BabhXddh4Z3yShecmKg8mTqoyWYM29Uqbhg6b1A6sZcpApAD",
  "key23": "sjujv2JW7vPxLKJfY51oyzRkynpK4LX7RuqAWfrHuhGqoZmbU2DoVR33fv8SeLiBTZ1JkwVvhgShT6Q7rXbTkHh",
  "key24": "5cvype8EiWj2gywMpP7Kvsdu2MHL7b68e7sHhM7XEQRxbNmFxkzHKRR9x5D2PzuzW7QvRQNZWKNCRa3pxAMWUe4V",
  "key25": "2cEDfd7x6m8hH4chjP9ZLmNA6GgbEi2j4nbweN3LZBEqSQphYJBLzJD5FjwfhGbNrGRCGJjoZJz2khzYV5V9zRV",
  "key26": "4dHPmW3pq4L7JDY97VgRRxnosq7sQaEzbVFht2DXZRp3srzatjAS6j5vGc7PYJPdAsCTBT6hAEp26Aeyv2EMy3kr",
  "key27": "4KaLRRDqrf692jLwJdwCuJtmCib1kWKYzBBq3q8i5gcZjN1ZX9ZEARjJ4hv9jFF2pgdBW3GKmZoqP8gCBz15iwPZ",
  "key28": "53KspgQRMuyYdb1LWEsCxVhPEA4i69y525AaebUx6ubht1pgwhs4E2FKHp328zweEDtv6qrzDJQtQGcWzTmkvfCA",
  "key29": "3fWKD4hiNcP3EGq1novvbMQuQh1C8aRNGztJcMmoJJdGJMuTbWgwWu9Zpgh9odXLEDyZRJfhMyueeQJLCUX6VaRQ"
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
