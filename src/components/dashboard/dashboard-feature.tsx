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
    "2KJ1wzDSsiBXVoo4KnakAGa1ZCt9gPBYHvVYgVJ1BFQ2KCSAagT7DY3JV9oYae4Kj6h7Yubn6Z2m2XgmvuBykzkC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C4BCCUVYKbVDfgf99Y142b6aRABkwM11CLyAecGmgYg3nzjf7jXcsbFQzSPqpU1JtD6JiE1od9YHgx8NQzMFiyL",
  "key1": "3kuDva9L5etoUrbqMzg5YYzSnxXTALNHW2VgCjiB8RjNkPeBRtNwZR51dE9Q3k8ztiakzRBRphGZUiYzspVvep1L",
  "key2": "4YMUsVGPRDUfotFJ51PuSnYnZbkNgsfRkLTg4Ch7CyRPApBDCjNKf7dfUWL1gEnNaqLtpBHJkD3JWDtnFeYQAu7W",
  "key3": "3fNS9aoSLAwtE5yum9GxRVc2wXqRKgvKwZtJ4azpT5uRtafCUBn8cVthP8epHYx1TfeCKum7NkiAmECHGxJvomnL",
  "key4": "3MY5MvXKWZzfBWYNKwqZWcXxvRLcVf9c3zGicz3QueQve22C3cEsaoNPPBg2TJHiq123VM9bpoCoPAc3AiGn6YGe",
  "key5": "3X6rPcpH6fb6dGBAiqhEhXM29e8tSJdHVLq861AQSbRswGjSFxMXum7UF5voLeNNt1NRD7nVKqAQzcmPBiNA1DU5",
  "key6": "37gufvvVigUAVJ3nMzV92RTT2YncrQhcBZAvDWrKDYU13qQd5wqQB7pVo4eHBu3C31TwFfdMwScgYZvdnPe4gboW",
  "key7": "5yp4EdvBWCW1pQpfWCdRzW2Y7ZYPCYfa8yo3omtEbX5C1VDbWN41bQRSUjBQnhSPcWrmtkF6EjPD13xqCCsWoHHD",
  "key8": "5QTkWusQ5QDN5G7RMRW2Jwws2VRn7nhijwcKhocXAohEDwzeGPQUEvXavzv6aXgwHxyAZFbwq9yH8UxX4kjaASHu",
  "key9": "5wFLAwnrDLiM9DaZ26ncaAKYtgxK5CZZiiU5dEmYMcBujw39HrjE7oCxdmFuRhkBxghvJawnBe6JCne5vc1R491r",
  "key10": "57rmt81uxXw4HQBF4qdFrupg5A8ajT1H776ciAAMWajy1No4ryaM2reXgMmFzY9mSskPcmrua8cD2mSpVYFVKBgu",
  "key11": "2irdcULgd7o2zgpWGyn42SfQCoMuy4rNW2x6ra4aMTBET96pMHSRhiUucy7QAkPQQ23FF3oxr1YTciy5M5JVH17b",
  "key12": "2HuV3ofFBPzQW5UecVEbTSviT5KixLDeTkYjaQawTR5By88xXSxVRieiQtoF57qpw3Cg5mZqPEJAn5AJceesFZtk",
  "key13": "3hKbK3thyNDY2FYR3gXVensNuboLmvtmyA6AY3gAUrP4kEHqutaHdWJhAUZ41kj9hGU8iMQJptXU5mvsNpDeBr3U",
  "key14": "2pG1W1Z5EPthFWZXPW5LGmV4c2HTesPi42th4Vb8PKATCeqtRYy3xt9rgEhdNQmU6cmqEk4ubsHyJ3fYkVE2mu54",
  "key15": "61c3VpWmSADsbsP2VpYqBYFmpbVhGdmXAgaUAphSXz8PR48m2dzJM681DGsLp5YwLNzBSXUX9PgyYzYNah3tau3h",
  "key16": "53kLQ4cHKjkVDDdhgjpxX6kdc1YcTLQf2nrMWdKAwxywYMrTEUgpXdiD3iyWe3cA7GazX6cJBDNzWsd6hbZmbM1B",
  "key17": "42MVdrm9joowvJbMTjmkF17PGtcHzXfswQk3cDsU7dbpcnCE7UFo4X8yb2h7gpFrUfcK7rniDX4Gax5Rv4W9fMkz",
  "key18": "2atBXRtRbXcW97V1TxsrxuRbjToRci7ej1Uh2Vx5St59JEp4zPpyGqvmKd2mbQFbLdAJqDUdo1ssNVA1q4iSjYdk",
  "key19": "ruWy82WhA4cTQVtENkRgZhSGTgFUAANiVpTzM39mGxHUwwoeDjDnaRmdNsqpxFVZfw6ZuGSCSrdqbJPHnahH16B",
  "key20": "2KhincAmk5pQfRCFxuwDiDTd7UHE5XUXxKzbPoEc9SoruSLDTe3sfLbcXFVF6KQEUXuBQhk98nQhdDZPTdv2GueD",
  "key21": "2iqZNgXRFe6aLZUc4w2qVsV8y1H1uhwdkD3jMSLASCLfTTfPdp894xQApwgbVZhtWw7VjBdoZNtcHZm76iADgUxs",
  "key22": "3wRW2Q7fenZzh2Sj2F9VB1WiZswZAhifNn5iK8DDXvbWR2Sj2quac3NThECGZK7eLAar6ghx7Gq3dKZhcj2AATz",
  "key23": "5GJbW9bmS1AuveWNEfegcBfVM62cxaJviCSSqEyshTBggpkujS1raNfEWE6HPFFTj9LQ2T1nywC5tvGmmBPMrWp4",
  "key24": "5qLyXoT6CZSKPmjPAbTX4mCxK2z4dugxahr8qMUZDT5qAbYjsUBgizb4BdDhfj2fYYw4852A3oAEFcV3sBZpJM4H",
  "key25": "5Pa6atAsJF59jZpX8UnGop1gm8izRnVAK9fWjrnfRZVZbmJmKBou37P7Wn5aTNF45WnHRoHFSvmKuM1xpk5JNVUi",
  "key26": "3raDFp2ytgmx8C5c8NDS4ZSG4bFSqbG8Jeqrcq7UT3gfeAZobaAth8gGVxVTUKSat1SQfY8xktuS9KWuQEYfxJ2e",
  "key27": "5iKyh8gStnvT9BiQifiGiHh6VEPDNLfESmo79fpMfLiuvS8X4sK12hzbvgLMT6BGQVbLUhEzFt7r4YpgBvLyNZAy",
  "key28": "2csxC8fWm9mGQksJkN96H6P878hL3ydxCoy2xWWgMZkMz5xRBMNwbZV5H3URHX3yW9uzjBzjAw1Z7sBiQeHzuf9y",
  "key29": "454B4moYPUv6PcE5VqXWYa9FuT4aTE3vStTmZQ8swotidgPSmtdv5cPcUr3vUNzhHMpGb9suXfeHZv3bQbRYod8t",
  "key30": "2C6ryrTubzjmxYgP8PonorpaFFzVbs3fAS6yuXdbJgknWMRJEdLhpwgtyvQpBmRPRCTRsQtYJ5CExeYLjLHmMmmm",
  "key31": "24igEH17YTtQc17oQghH9zj8QjXuRnWvREbodyJ4u9dj3wrnxbbFNDEBg2Prem92mtCmcbFDzhQHE13S5ttNfFfp",
  "key32": "5rYY69ehiCx11FJhWg8AfXwNpq69mNSrzX9Z3W1eBJeqc4rDaWAGGkqMoW3EHhR7Vc3fdxckaYSnjmSPCL7sBW4D",
  "key33": "hnoZotEmqaV7LT4PVXYCXPwzZMAV4aeHZDwvM9UgBg7m63YavBceEB61Rt1TKZ44f6JuZDKVeNDDLdzZtf2anTf"
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
