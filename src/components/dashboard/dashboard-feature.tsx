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
    "25ddysYxEhW43k2UY6zsRcqWGK26AuxnhF6oUtLRexT48tGQQsiwaYEtW9R3XNLn1n1MVjp5Lz3omwRx7h6sbq2m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pX3ChLRRenga79QKHmSnyjz3ZbcvS8uoAUqWybbRKYgLzqMy7QsvdPanksm7EZAtv9fpT8XB8tEwQZ5za8fndRV",
  "key1": "EWzyKLZ4HoMC9vzpDYTMcf7qwiCF8N56q7TsJuJKQhTSLBxLgbpHCEhGgzYwH33RVEjStzd2s5BREE5z2guq7Hz",
  "key2": "5QrBzw47CuQWNCqZ5Bh4jMW9r3sAEGraDL1pqPmX3WfuPnuT7gtSVQK41gMNaqQFdjVPTT6v8VCNtWJG4UmuaDbv",
  "key3": "Y5RhxSC3kTBmdiJQa516zZsg2Faw5HUJmMUNaoX6xPpRPv69KWktfBVUdULadVdMKFgxqZPpF6g3yqneLXQ7UTg",
  "key4": "41rRH4HRkQaN6od4oz3wXs8nGZdqKFPrwLeUrW4SYC3Qreeo4putBe4nr5rS2E2WeV9PefwvKwFGRYR5oZfDGzhi",
  "key5": "41yPAJFZ7mVGsJBctUKXSd9zAEwnjBy5FU7Ckfr66Sqo21FqTtdtRyo4MH4VZJwkSeCwJwqBvaeSuofobHbbPQk2",
  "key6": "UGxfUhoWKeNdyskQJkULGohKv1dVW9jNXhEQ6rKMVG2EsLJr3acRXq2GqTLZ5GVYp9EWVzPBMi38udkxwtZr7Y3",
  "key7": "3w65k8ZVYqAg86uZv1hWGkB1DNv3tepE6JuXq5nQL9RuVSAeBY7w1F4tsRWJvd4VgjvYucV6nbJsN8FTNqxoWRfL",
  "key8": "4Q863rPR5Uo5kDGTsF98Ed6auZ3ob5tZJkaCfJJDs4AHezxRbshDAYXJ8zWfJkgurn9zj6zG7VQm2v4uPWb4gieP",
  "key9": "3jwowZJJuH2ndioKozoAnBr6o7E8hVTwzoymFXsuVkco5pu5NMvXrTevXkWtQSW5eUhkKYapgmdXtrWMLzpAehgo",
  "key10": "2LyYrZAhh6BnVpkXpeXWyfXM3eMzTg7ouffxP3rv9yGnGXfq8GJfDeMBsQMjVx7LQKtTco9Yhag6HoDRgmjKyYsn",
  "key11": "3tKXGND7Fo3AMVuzxDAW1aWtV1mcou9TaazpcBhjRm8N4pWJMzczXjQBe4XPLKuEGfuHnyJGvPx3pozpsBBr7SCr",
  "key12": "4cHcFHT1479KaQvVLVjHNXRnxUF6rGa1TEyM3j2MQrzPtQs54jv3pt3aYS54Z6qMgyhNHX3MFjvS2qCMUAMHoe3D",
  "key13": "XGCcTgbycxkWNikdxb6bGK4R8dA5qgdJg8Nm5RRZpbDhgMg3AMcX17ZSeqw6E9Ab655GqZgpo87Vz6xtSLpsKaB",
  "key14": "5pmYn9tjADTDMRFRLfBjgavGmuxd3ubS2vyyssngZdYeF76oS3XqN37QS6eJqVNX9rRdznCRPgZpYGK3HEFqw7zW",
  "key15": "4u1ZTirfk4dv7y4fWGxpsivKKHqwQ3RYbtuc1nQTtDLiJUijCYYG4mWwGWmFzt8zRz6rvbHhG9DJBhvYtBmS9fD4",
  "key16": "2HZqMjjKCkHF2WdcgaZrpBvZ16WNZeAB89kM1u5rzYusiaRp2g86Re6PVpjzL5TgBvsQzHMytuK8AwCViuRjFtxK",
  "key17": "4Cfzh1LbESnCMsjZQWxJJQu9Q8qyFycjK9vcz7iKgq8Ze6971WXm2gSRsBumKhgoNNeH9xpH4xaNxActP2GMq3bd",
  "key18": "3Wew1WXyVavV25vUppzGeVYSMc5kxsjcUmT21VSrARoBKRCECMjtCVMPEqavokRUzsGhhv2rm66k1ULRPxDxCfiT",
  "key19": "37FoRdmzJLfEf7ojsvqqVcjYhSUPRYFKXegYuz27oYT2tra3QH9uXjjjPcsfTswBQHExTdzsjBDE6JoPudmFAcE6",
  "key20": "2MDtb4DjH14aJEz7uXvHVgR2GahRXd9jG7115NwXpnhcZZPGDycAr51RES12WPTXVCcnxqrQ61cH9Neq36qst1Zw",
  "key21": "55F38HqXt9kvXrXy3KJMtsKfEuwPrRptheoNB4dbn2FqoBUTCVbR2uGCxoUtkvbmCAe9r1fr2A58wNAc4s9hG5eX",
  "key22": "48CLFBNspCwhkaYwz4mdWCS1YA7qvMK55X7mTV4J9xz4dgU2YideJw4xvscUZq34q7HtvJt7C6JYjyo6YZSj9mXP",
  "key23": "3juiSMknn1ExZGpt2QhAi5g88fzWEL8qrzG1JXxKaFew9QKo2rGgjTneETGKaYNHsWiFQ6ycTPhQmtECh2m3ycWA",
  "key24": "4NETBFhie9izoK9w2ZLntBR2VM63y8BYtjBE3rEjqvmTCZvUZMU8WC7SZ6FcaW2mPaA82znsz9m26N4vBwbpgCH7",
  "key25": "4giKL9iSAmiQzTUTbV2wxTeoWpMitsrhVhqwJmQbvwiWTJq8uYWmqQVUM7TEWBASYDJvEZU3N3aGMKPEDYcFCswh",
  "key26": "ohRrdzCDRtQiPCwxj65ZUrLxiBRbkw7gYVFaGVgqcAGWSWLSFzwmoemhJYuFj9erois1KtaaKAsHzobxN3CCCSm",
  "key27": "4NspGYfrDxBqc92Mjh89npdLTBkytJUNVy5wWc2J9vxh8f2h6eKjRg759AgZpyj1hQvLLaJreW129yJEYRmnwiVS",
  "key28": "2nUGTzBqvWPTKuvDqoKWfyA9aJZFhpfvU3Ja13fGS4japiAtYQCMt2nebgXwZAX6U7NLG16ep4swgkpfX4dLyGwh",
  "key29": "e2gqTTbZsGBepCqetiemGpNxbr8n2HAMWobv7WA2pyXR71J6Jb26LaDxTdQANwbxyXtJFRepuCFeMwHawAeqQgw",
  "key30": "2N5WquzyyxQwzTBUtfBXXj81mG2h18FGGViSRAeEhFxuxUvPFZxL7nTfd7ySjmGb64iyyKjRUUngKSa92eDQ9svm",
  "key31": "5AcbNaqxe7L7PwVecd7yiHkuYxt1h1yudZc34HX7rQMhSHPz1j3RJ6UHKSn6yrQYyBiQ5einkL9fHj26uC2vmHEC",
  "key32": "DUnaB7j2eQ6FQEmhaPto17Gy1KBzrkpmHYNVPMDd3n5CoTRV1k1QabVbcDicfHEtM9Co6UAreRdZxh3F4ru8R35",
  "key33": "4pH2ZhzVRUsPLhGzbqRN6uWhmCGewykqFu9JUnzcoTEHZfiCTATWA1iTit3rFhwMLRBFfkAo7qgRhTrz6yjNempi",
  "key34": "2MsChzKJgNyHaGykTDLYdLx1i79RDcnEA8W5brLjuJ3kkMcbtSgjk2weCSQJpSHYs5Kn5iRNFyLBApqvh62KxDLS",
  "key35": "4NVP35vXtQNoTQwU4v5afHwVXoerMf4ytSvNvNpirQHMFE4ovaxzgssPbxj2dq7E9KNx7NBqC36PMpLPbuqbydH1",
  "key36": "GnthbRfmaWTJrJsR4o9JLsqUnf34ipzxXWarAbUq6kYfUzxuGm8MvdkTu2VqkxzHMcs9D6Bv7QeCmz1DdjiDQ5Q",
  "key37": "H84x1hrqKFs4wiuCpKJgmWxL2iAtpJDiHaFGWMqCzFYcwuvyJTrUN8JkDjzkHT6YRm2BYVPyvLpjnm1JLAQUjEd",
  "key38": "3TCHhe3xebyZg27QMJdDGU8nzYzDpkEYjsUenXZuu4axK1dK8PQhi9kaGh8rtjvTzxMLzyw6bUeFMHwDPN5jfyJ7"
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
