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
    "5GPeHMgCfUmUB6geWgotjiRCiWwjvboZEHjLdEdy5ut82nsEp6YnES7jFBNrZG4m9Qnxq6vFVSuAcB7wMJiWw6vs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xodqa7KAC8gsiKxd1SUaGyfwwEK4HEQiFd8zYwAvXZWhYMkYv3VrQh12hzdxxZai8GzAN3mGA35Nof79FYTmTJm",
  "key1": "HTKmnbqUiW9v65TPn8rZRkL3jrzMokMm9DYLPEdVJhVfwxnVSd1YAJzyZThGRE2aCDEXKjb122imuaXMvCusL2G",
  "key2": "VNckioqw91NrLSZ88cuM8Y4TkFGmsjWYtP3H4bXchd5v1zTkPiK2JZ9P9bTXeQ8YfzHgWA8zdKRBy67pyDo5wZG",
  "key3": "55CjKuGb4xNv3s9ZmYrM748gk2AsztqnwMtUZEg54fKU4XGjeraMy8wWKgCYisDk5Ly9LTU35AWc8nyJVydqpJgV",
  "key4": "cpNXCdWntfNCzEcKhxXGj9DYzSW5CHawEexKki6YfaL6nyYHneri4KmPSj8mQoydw4AoNdXW1mubQavBgGgTPAM",
  "key5": "2AUmR6nYoTqu6HQ3dqw1MvpG7Yag1qNwTwLxv66ZtUrv3RzkF3bK9suwYsntJjtyzZ7bpVXsx1X5j8voJjeaATt",
  "key6": "qqEV5fyPEWjbd9s1PPvWv5dSnyMjSVXoA5TJEQEdhQWabGQfxLdEwkCMTMbL6Z2bRf6XrQACgaGXQeojoJHPnbp",
  "key7": "kuiZ2Udqv5yFUY7o7EWh5jgUhpWc97GyPQWouPhfPzJyMWzg9t6D1wuAJY3BcUXHVJBQ3n9TFK6dJcCUdYnrykZ",
  "key8": "3AwofPsZWdjMDDNQ6A4mee55CNJ8ttZ6bvy83T77ox2fSVTX6uC2gvpcS6kqUpyQjGagECbukFDfDJfTxMg7zS79",
  "key9": "ADiFURuYNrb9qSkeGXCTeLiWvemdVK6KMjAe6CbcxsnaAFJCkbTttQcCKMEmF68eQxbiXXP7wHvGJ2MFpVaB3n3",
  "key10": "35cVKDcHGPL9JyqppjqsUg112bRnF6rZHWFLPepu78MMxeV1QGBQ3tEgmBADNtb7nxkEWSuZMTTc6uat27b3UaF2",
  "key11": "2pYPVbQAZnUj1NeYSLsrPgdb8qmkN3hD4d8LXnexRY8dTpci7uXbC24YxSdRtjhBKzBjhN5dpMNbKJ1xdkPYFXFP",
  "key12": "WeTisDQLUe2xGQV3iN4GS3G1anPcdsj2JZLSn7mXZ39MB3yQ22uduorKmFXVGS6YMKCkQQiHcqX2pDs6DxknMMi",
  "key13": "xn9azpf65CK3rpMn8fDraBsQMCXAGrinfAnuw3asVPmoF3rBvoSHG2Nj63AkWEwXvAr8EdzEM1fRy16VqekFkHG",
  "key14": "4CvEwSSdhnUJTYt345GJwbtrz3X2DKL9ema2KnB8742U2XCyDfZiktNECPyL839uNbEY2CNrXY3yNCYpwqoCkzB6",
  "key15": "dAdtXyKR3YtHVH5J1MGgGcAuZDR8cHARCiDjcjy6J8rGWEAYm3sJTjwWBRXX5tvFBx9Nq4jWuLqdQNgzYZo1otC",
  "key16": "4ZsryS4sr89Zf2ANMxc6mVuYEUeTEJWwyt7HFAbTX1ipRZVdHXBHBbwBNPuMDYLkLDiY6QtLV2o6f2jntoUqh2xH",
  "key17": "6doKKKqJKMu2zNGqqjjGnkvphPwrjc8Ca6E1pCqv1doBaBPJqFfAp2pBkWchEZLM51csrcMEqL7DDmkn3PpLSey",
  "key18": "3ZW2KZz7pqMQgD1jK5qDgHbruZJpNJaHADKupMz2ccrW66MC9wUojKejEvqLTQSNfMeoqxfkznhuJYHr6fniZZQz",
  "key19": "5Ke8CbASLyzoJP2ouwquk7sAzxUrab9kQeNuGEpE98BZoCjfRGAum3YK7CGhac8uDfG2ewuk5ZgaHCSgJyyB8udB",
  "key20": "2mNXd7xPBxL8myvi3UTNHCE7QaTuetJUGFoyDGgGPFKiYtzKrvpX2fY8HAbo75ot5U6cCCn1mfze92bpqHPPWBHs",
  "key21": "5ZtJWjZvXNyvChvt7h7ErgjUWvWuLRXDbVwxP1y8AocJUcEAtpPJ1fAjCJEvSCDz4ocsik1X1XSY2R9VWaj9TVyY",
  "key22": "57pnZZt67yQ31trKYdkxhX4vJ3K26HofH37nanmpQFXbvGoaXVcqUVF3pxbZTevQPwF43597acoVBUQ2JUYHiqHc",
  "key23": "5s2MYtEfxxYD9KMgqz3CVkaCpo75dDb15u1KMqrWs9KniQFyGJfTij9ycQjryYRAn1fraPzLU2MG5YKozEZnh4bU",
  "key24": "4gT4VFjQSHbr8TJFvnjK4eSFh44M1fRMyov983CZX3hVRGoNyqyNKS5ejGvHLLDqnZLKcPpue5CQXemar8PiaWYD",
  "key25": "3yNANYyg32XCABUjTPUtnUKbVUFksFgHXnTUcq1bnsWVDDFoka6XGhXj246XFssEyDXXkiGe7e9wY2Ei1KMJsXvr",
  "key26": "24KrUycxiwYDkBpAVU4oQGpNnuvbshnHCPyNyHVznkq9unEXK8ANaKW355GRX72tfesnPgtGRXrRULfGMXuBPgZD",
  "key27": "4veh74vTW8eYEpQ31c1mYZruBbDW6Q4EUwtpbGGPnYXL3f34yBU6cMyUJVJbx24hYobVE5zWm2s6qvV7EpR2UadG",
  "key28": "3a1Ykwx1XYrLW9L5sv1ByuZzWVURjoPjkvpidTKHXSpSRQdDeVmE6cLyfRSnFSmEDvm1PPtswMmigZQCaYssZ5Tb",
  "key29": "2J4gBH6wqGqs42TWB2w6GXtKSadBGZb4RduV5yBq3CRdF6ZEqBW2qk2txHeyXiqkVrJnJMrxyeBohHDKodC5rW46",
  "key30": "4514cSoycVRcvrRTfTwqUxp8qqAaryBgvXjiDBikE8r9zfCS65s5FYwSHnhJhw6qmXxoPyVV7gyzcGccDSCNzT4u",
  "key31": "4cCZkBu8Y2hmw9eu7zazezhaEgZv2fwA46CNV5fq1E6AhuEmBfcimsqUHqSVDZhFSPpVE5cHu19Nw2SJwmEqthwx",
  "key32": "4ntaVNKnHj4uYx2Ho8erY8796PoLugNR9MNAjrAXxnsSKFA6tRKBfv9mjBu1Jw6A2zaTR36TvZnkcUXc2MjVRziZ",
  "key33": "5mwQWF4QWoxiXv3ndJ62K1RFSDXssbt2ZJMDf2EKxH6BwQQ4RcgsPDbPdxm2hQ1EJnuL77nvvJMiBUUJEeqQRupL",
  "key34": "2mAbR7zmMXktLMCbDUc22v4JApbqk1x86MDsMoFQcaUBmjBUb86r7vrxtsFJna6KBkqw1EiEKWdRP65H4k8n31J4",
  "key35": "2pf1R2uWfLE8Bai82pMF753SqUNWSm9DWx3XspZ7GmMNT1BW2WypphkBgcJJST1FGTjh9tn2psbJ91GhS5S6QQNG",
  "key36": "4bajXQ6vScDnyRXAAt4VNvJSbDzdiyrXzwydVoZgFPL5dZHt5Fyi1Xu6JBo4yDfH96vwQu5qxmrFgvUCuMcn6qft",
  "key37": "2wjEmbG4WV7zq4eMF84B4b5137m3Grnrp2dJZ3GMN7PHJFqkBgaHdMpnmuh9uV1dhfBY8XoNmawLZxSRfZuGQdtH",
  "key38": "61XCKwu99vGjkuY3kdD9NbEhCr7y1sxovA88eFYCnJvA1MmWmiYrJKKBPjQCp18mjQuhVhpCUepnamnVPQPufawR",
  "key39": "3o9mZrNMPSdXbe2UupiQUt4bJeKqWy1qs2Ns7cbxSK5HJDMkqAhSFkHHVGmv6upofEY4Rh4Bvq99xiRkZZWiKFBm"
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
