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
    "3vDNKjMJjbdBCVqZqyqXoXP6PhetLP8nvDknwgfXfEEjumfE6tagsBSocrSiP9ZS8rj355nPvTrNBnXXWgZafkWt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nxyEx8TE7QuTSWGnnntvMiE5Uu4CcErrQatfsHsc6GJBcm2XbVDxzaeYXxGWimyYWva8tgmdrwwgzuxrrmUFUsM",
  "key1": "5XnLHDkefnxeNVpejsmucPso2R5NWmrqMtbSyeWbqXVAE6yWvgc2GASPjyZPgnn8JQ3srk5bUbMpw2Dm8v2sL12c",
  "key2": "3ik4ssuNNVynaXmSQJrTQrbao3jE13jeq9gDdBZ1isKqjzxJT8C3bYTG7cfgmmLfhgJ8aFdoHhgFtLkYuhQgjyk7",
  "key3": "4yYRGTJMELc5k8ARLXX7Nm2L3wWzoZrWSo7TzrN3G6gYHCUsbnm5D7VVwcDbZtnqURpADSCT18uccuv4UUd259Hm",
  "key4": "3UzE5s5niAkzvoDeJT8aa9uZvtdy1rKukf7MFhD2nFFmoXVrU2btpSrtqMomCyc5vdWHuzr1qigqDKcNVaQo28Gm",
  "key5": "56tgVDW3bqAXSx9v6Z4eMXyKmRuQdohvtupN9QJb6tp4NxUrn86FhhmhpaYdJrgA9YwDnVVe8K16rLANTAHEXeY4",
  "key6": "4GcU5DfFZCsFR1WNkG9Bz5o5RUYSiYvyZohtuemzCaT3QhPEfNNWsgSTQihEDqjTV8jimtaJANxjEF9W9F56MtVG",
  "key7": "KdnUgBJfnsmguxyiQPk9LhP97LgLYESkqQAK77jPqBBNZEMMz91oQUwCNc34T1pywi9UqsfLNmgptv3cLZ5JAGW",
  "key8": "623dpKukodb6EAca6Mk6jKXtYpn28qVYBaDcUNR9LMbPFyaqjLwoiBJ4PY8u72fErPKRGtSCcidAjAmxFNyQxrWh",
  "key9": "2htsTLo28BprcykW8nctah2gmqkAuCdvLiJVVD32vsBbEYC4QsLGJHa2BiUohzCzdDHqsnjsYTNkDjVPF6VQSPSD",
  "key10": "4dz5iwDDRNwXM24mafRUKKTYy2R1LetiJtRYKVaAweoTXsnCAzgiRiVVVoGNM4wgrdQB6REFS9D8bRbvA6FnxkEj",
  "key11": "4TbZzgxbocFUuCJMokihzLe25oP3mfJxtedbnDaAxh9r7zFRfSCNbt3aHh4TCtTKy4wp4ASaGmFhZfnq3nMGTuFS",
  "key12": "21T3MTDuoCDotA2nPRQjp4z3yMJWF2jMixD7eehMDpmrRwPwNeTEhAVW8EPv6DWoyVaDg1vkx4E5Y1CgJCqDLjGo",
  "key13": "2RYsjZQQXVAn2bWvbxhCfFpjXkfhD5EbKG7wVQfQiTf9TQGuxLqQfJTipCi4MkKzrM5QJD5EG36CQjeTBm7nijyK",
  "key14": "HeNZpJhPqds5qrizEZLUasxnAtDUYs4ptgc5XzmGp7AD72ubTD8yRYAm5FapjJGrbVM75o1U6sHUjwif2jsgXhr",
  "key15": "49yPTmZRqF2drAjqUoVNNMbkyzLyrtx4n4qVFqhLjKzDRfvmH2jWeHzbim1tjTo8S3DdLczJgg4mKu1pGKUig3kC",
  "key16": "316yMCVP1R3L4fUGFzMjmi6ScN2nkBKpo9XDuAXvBWKMujLsSfpqAysfPhomq5rf28aMK7XWUtLpfbhZiTpzY6Xn",
  "key17": "4wfbrNnWbAoMraKL9fJQbnqbFHcAMDDjCNmDdFNFH8RoAtC4HSud7qQgCPRjiWdnFz8VTNv4YEJTyGZgNKsWCQ5C",
  "key18": "4MEWoZtX2453yxkA2t3Dv7X5fz7u6ZftrS59dPxfYN2xNQHQJrZ4rtqbyum7vejaKvBRKdrGoGA1MnZm6Fvn85GF",
  "key19": "2abTZSyVtm8tK5EBqXLggiLZ2UmgvaHEU1FiAzZpkPfmDsV7pMwMb4XvjknxQ1afBYFzSACtY5BDAFvqim7fGdYM",
  "key20": "3z6cyT5k878s1vQdQdMkuJEqRznQnSpRUKwpiPfFuhrdWFS5eRuEBQSGz5X33WsgCszWnBqae3mqFJWiu2oyjpHs",
  "key21": "29YPSFq8G3T7h4F5Pm1gV93dt9F84c6M1vNAnYsB4jHiakhrMXh1ckQTb8i5yR2YDaLbjZjwYh9ZJQ9UkjMPE7Ks",
  "key22": "5v1X9qtGLBUFU8YPPHF9CpNmQANh7weEa14Tg8ZWkjacykmxDdXg1cWfo9hMjTSvYiYJX3yJBdvQ7iEMAmPWJarh",
  "key23": "4vdT21chzKzpYn7NswDj32E9QidMsom1HB7jEFxJ8i5Y9kkcmqQeDWUmgcPKww7tdMpB5BKYwnhLhnzJJfkN52s6",
  "key24": "py3rGeG3dWAHSM1g8JUu9uqKLjAdkMndoGGYJ7fpMffnzjy3Akj9Umgtfdqm8yHGGyfg6hSySHJVafohKb8o4UR",
  "key25": "4URMzBCNFfKn2Yw6V4qVxfDrGXDUGcEhdFbxsBMVjrd9J9dB41y3UdmLvaASvLMP8JT6MguFKFPydDWVw12eiZZk",
  "key26": "4E3GC2x4VzdNJXhhqi7HCj6tyhyGR7LP5Vsbu5MnLV58L7NipNULy3jk7NckcBGXkfH3NV8XrJ7xTGPEGduQsoYg",
  "key27": "34nPAyv29DbHUQjNGaGNaiWvjydeND2HR7cA6C3spbBjPtP2Cvn3LtVukmx6bhfWidBm5JETLDcqKeRCCocDS78G",
  "key28": "5FiCj44PdDCdkVxXrKasD4gyDKR4tbpYKLQQiLTsCuPUxuWXbLS6SYd1BChoD5iqS4AByUNFsLLaWfNtxt7hBvbK",
  "key29": "5mXZ26RwURkzEC89oXwHbBQS1XKQEbxPMa2uCThKxJ7VQP1HJGwZx7V1Jpk3LQpdehWNkAoZuUpGadcrbsAr7YRv",
  "key30": "5UvpiyVSmaTjHxbGrihExqcvJ26Ppf4v5mh55cRMCotGFPQS93qF6doX8Q4cPQrQ62NY3cWMy3ybGfuTmvrnX7pb",
  "key31": "5SuP5zF95KU4UWNKZYqwzsCB6bm3RfGfZ1tqKzGp5emVruQ1nR1Azm6JjMpptFawS9mS9Nsp55uPnmj7jg4prFLt",
  "key32": "jw8m55Vix3eyWbqQS1zkcWapyoQKdBcwdRjkM2Mhuwz2DkJKGfRuZcXRrDGGZQAWdL4vda23suT4iZup4k8xR96",
  "key33": "2tvW4L9dvooedBLk2KypW3oixPt2mmQvWVDbdYgeKSB51RCQ4DkBGJ86gqVxVWktmRdnkKEz5rgrRJocsc95G8Dy",
  "key34": "5WtzCi2AE3tRwikZAgpVHr6xjvXomLZ7Ps7AedXmopKKF7d6BN8cbjQCwF35ajT6acRqMgvXzR83JqsSFfT7oMKB",
  "key35": "4ceqG64TfAF5t7vXCc1Y8TXYbWDHf7p3ZcQP7dd6HnsSqjAwKmHHjrPPSrfj7p52YErGAu4cs4TE5TB3XUzy5wvQ",
  "key36": "643tPmkp22QVmpjNHK5itF39EhGmBk5AgZWoFJDdzhqc26jw2KyXQduUWrqxb5ZSe1vJ7JMUa8y4khtym95Aedaf"
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
