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
    "32HywLm72pNuj2KCfW66KALa45MwREqx1KbSpgFWySPsYRQHFfzGguMyvbAwcBfSoKvSjGrEBUh8bzpGkXBrsjJm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cL3yom14Ho9YqX63gBDbj8PgnvoUdV8ADtajsczbC2dpjibRBAVvxEGbEVSZwNA37d7yCiHnAfBhmAwhUWnYsZj",
  "key1": "2X46ZiZYtXBAgyCxcAGcf1iy4ZMQVa3mWYB7oD5xuyj2NfF7GEigK2Mkv31mfAswEbpoWP3ovqy6r7ewKXjvRWqT",
  "key2": "2HFutA3VpqPPy7QHLXBmLRWZKL1qdyinnNByeyhjpENkJz2LtvgbBJEG1YnLfWGw8rCDFaoUkayJuCndCjzjaWxJ",
  "key3": "2CGDJnYuWpa7yxiXepvJdAyk2KkpbTKSoToA9f1wKdJkwnGCcduBXXano1hEttyyKXueddqAzt5LmWNGpUHQWDxt",
  "key4": "3sq72q4NCyieWawwS8synA61P6Ve1vLHmD1tFQsEpD9RqyyTFSTxGmvNrvRKtkb7vpg69iCD54GZ7ZJQ1xe8mB5p",
  "key5": "65RZ2rgqwuiMJxriVnhaN4MTCz2KaNYfx4a8oqqbJ2MMSqgudcXCuWzVHF374hNfmEUxutaNHbEbQ3pQvGY3SKnJ",
  "key6": "4GY7ibvmpXPZBFAemtEvahHsQG9wnhXx5uwcx8ZmQFVsqkeZuDTMVihx3pgpEK9BdkUygY9gct1DgskQGHGkpwi2",
  "key7": "2kgNX4XXuRxNMNRXHdgjZQnbVhzP6Qit5fnLXLko8SymbEcDcrqAMyDoGSs4rsyqWTGvKdpsLU48qw4B5f8TU6No",
  "key8": "oix5veiq9dQEsyH3EfATiJfwa9gM2YoYJ7fYJ5q3N6d4Ze2p7BknfULBAyW1Zysg4xtDhcay2M43QYvwHqMWuU6",
  "key9": "twPwAcW4dqiagJsP9JfCbQWqKdZ5Cr5KDPP8VKN5eukWyDJGSBawgFovNqXojARqfrFt2pFkuvVXffT7Br9dQUu",
  "key10": "deVY96nC3iE9V6eZFebcsHrU76neseJyokpA6QDT6ETTEQNPTzsiNXqLz6TxhSJFgKGVfduFJTxJ4tA9Wmq1Vcn",
  "key11": "3WGEEAzvACBUPvJ6uNs4TQGZP8EJtH7DkVGNFpwZm2VnV9h2mdkin5UcYxsNdg4jaeXxcAenq8NwgLdyP8HPYv2T",
  "key12": "5AKEQGMpShZEsNmUQmpBZ6BoN6LbQoJMaUNURYGm765Z3n1MRSZpLLfPMMUwSYzEa2a5d1mFKYWMQJUggJfa6UdJ",
  "key13": "MSMSnqc6wZcA8bLjaqbLqpTZ1Sok3GCQnviCSNSqtchheq5tkLzYRV3actrs53oX2yKtAt6x4qdXcn8VCYzBSY5",
  "key14": "3XpBSk7VDsbaD4BrixGM9JwgZi38E9GjGRqFzy9XBgCx6ziCV8JY1hEXHo91xtmJQkRpmd4Eg4caXhg49YZi1bj5",
  "key15": "yLtb7whz3QLUnRzFDzZfiFUz6CRGrj4uxafK437PgFBTp4fgJ9j7NcaZfDzDLie6AR45QfuKHptA61nJb6zGFc3",
  "key16": "5jzF9LE7NRLTTE2CCboaUKHsb62LHKejqKBz4F72zSmfQvM8aBVjuVikfNPc7nAhTVBTyAKUxKQMvXK93FG89uYP",
  "key17": "24oXikv8WYqfypHagxDvpDtRonEoYAs3UU2dxJT1MWyp8jwm2H45JQZ7V342LCEgUymcgBekxZV8jshJ3NdNcDD3",
  "key18": "2RKocXqofpF4n58ZqNMhFPGype9RZLu6q1BJFsmy4oi2ErGHCFpfnQhkeDW5K4ugZy6z8JrRHSXWBL3dGtvNmivL",
  "key19": "3Q5xC4a4TVBEiPV1skmwAQMT7thfC5VMZEHJbnEe73HZjry6rGmaVQKTe8u8cDLp5YKf7k3F55UUAPQFhJNt3hUS",
  "key20": "3gM3BSkFVgM49uCZzUgWaqsBa5rU9jkMPxyzNT1a5R6fpjyfELwqZcsEv1SF1v7F3Ey7ZyXVqvNdhvMA7ojfNCjN",
  "key21": "2z38qwtZ4E8L59iotwrwdkFxuQp9iFhosZ2bDnCwLDdiBpsnqn1tTuXjuwTsKjoBZbwri8FuyK8WTRGs1CCYcoiJ",
  "key22": "pBBm75dRm6L3hWdu7Mqvqii64eUebdtTRNtF9EK7cN9EdozRq8ZJWczR9BQyZ781FhZKHg72wNpptMvzjmboGHF",
  "key23": "hdzXfbKj5ntys1FjqSuX1VybDbDZCSS1CFttYVwdrvnEVNoeos5eNDoeuh8Yfu94J7fGmvx1t1PA3RUQfnTAaqj",
  "key24": "4vPN5VYWNNwhGcANF3vuYSDnDXF4pB1riM3BzkgKHAvBBX9MAHECa5UcZktjyC4zmCzY4uK9FKjH5W55ML3ATaY3",
  "key25": "3VCRtPFLBZcHpa5bnVYxGRNr3y94dUEGR8iVAj7zHUZnh265bKtfKz5xcr1ySj4QLPdUU4GpJHfar7b2sqATiY4",
  "key26": "4RVxgvtGX9oJJjbcYnL6kkxmsdknWLGvExR5BTVm29LYscx3JiVVhF1AE4yYYQgjXdZbp4MHCYZvGkReSTr2Ruzf",
  "key27": "Ygdt8pMHNaZCxmTQyNRNvjHeDSQxEusEnAvBxDGzCji8mc6fkkiagkw5dmDy6Xg5AT2FXbYymrizg9LPf2ou6Xc",
  "key28": "4RT9uVKZTU4mzDFaC3TgxfVNsStG2FJ8PUL23vAiiWsv4wk2fFpk8iAhiJM53moqgUpBMa3zzkdVudezVVrw3V4Q",
  "key29": "2e3sthqN3zoqZtUqJ5yLMFpEceJzhRRa7EdnrkWrq8KN7wFDtg9v9QiJPhp4tYtC5A79KLS41oWfhjpM9pqStxMQ",
  "key30": "3T4mxjc8qb1E52Lk7F43jNrKMtVL6FTrorwj3ba37Ka3Zkusg6LUrXBHAA3PynhAfHQaZ1X5rFP3cAuj4vBHXNFv",
  "key31": "CcCBDu2FbDAEB6zC2GLFJqAAHvibkkRByoonHGkWmtVNKeTGGh64ajvmgEahK4DRAUvrHxRsmfLfo7M9XZzU3VM",
  "key32": "3UXvhPMbZrKvwtrMEuinN6W4fbVWtvqazx39QtNZqbrBAU82gMCytptkWSwSHSL8pAZQh9n8qCjndQ1i6AeufZG7",
  "key33": "63hyU7tBYuPkq9zuLAX6VLiAF7wBnVzpQX77d12Y1cYXiVF6tJigq5U6ovJzQbFkUY1Q9uneXRTLhesfndNCiojc",
  "key34": "xwLY4NJx6QXaaHWSqbAzRsiimtpgSmy4rfwKK7psTSbb8t6JwuN8BxfbTKyRLizDGB4HC1rnrwrLecznvG2URi7",
  "key35": "5CJwSGiKRsLmHwWgZu5UqQL2dcmT7FM8N1VNThjEXyQYAeVQVbqCbBFydTbmSdh5FfXEuUNfTYYtGh2qfUs2pmqd",
  "key36": "KtukbULpRCa3FCFVe4WGvsDgUnUjrZcpwiMjuzq3m3Z8bbH9a3QdfGwzLRqKCszPwq29i7nAZniio1Ayyizs45p",
  "key37": "5R1SgobudQQuUU1fLM4zoswbUUsRjbJ6ecPdK6TFFbw1dUrx2TcqQDvboGVvyKYE417njZYarGMBwHtff5pTiz7E",
  "key38": "4KXgaLgar1iCQ3g21tLinnmc3p6zL5gLR4RQ2syTWFeCPusBBkLuLmnvGWrbsTgqqAH1oFEV4TPNEggutvGVtsqV",
  "key39": "2f3WuPdK5nNby4ef3Z58jE3tPnzsh1CqUrfkz729AffhveVS2Z4m9KaV9e6PtBQ2NeoNFraiAoK9T1UQTMBT3eHW",
  "key40": "3XpPc9efeALSdi5HGetQSaBrKs8FsWA4F48daDzDpzsvT67QmJKmYQAvYL1ToXZZApyiH2ftmNWfRFjLyqThgPtL",
  "key41": "21qsFaz5CG5iyCNXukNcPWDVzoEvhy5rb3zimG45MRgQxqSWQ7XxYQ6b8ryWTz4qqghsyYttpmTDU221vzYxZiPv",
  "key42": "DLYcRtQBcAb6r7oUZAue4bE4WxGMQqussdkqqum8RX777qvJMHu99K9RayWn3asEDpAmCKxBAYyapBwfdELU4VK",
  "key43": "2TegWgzfFo9Dr22LboUZbTfrSi8PrtiiLGksCVYCcvxhK9ridPqLdEmpMptDdvULKWbt1gmQ7ZCBPcHkpvxoScz9",
  "key44": "3Zm7LhRU2GnfhXi7usLEYzcXPWX34ZvSk4h5b3pvYaFh9gfyHPix9acZrCakuCq66SmyK8wGrrxGbV3knmCY9ZCn"
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
