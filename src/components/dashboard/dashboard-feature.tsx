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
    "3m2ArxX647s9nGCEVzegCZ5rSH99ivGkCSMPzNTRr5ho4vAcwhr6xbbgEyqFY8kpUhCiT2vm5W7DbwkABF43eynf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SiMpmGeUHH7uD57DnSGSp7PR2PAH2WGTWrpwHPtEeRvHsPhwjDy7UkpJc3FzuFD73iwwypcqJskP5adCvwxdL31",
  "key1": "2ZhE9imUqSLiQdT1chKVp4QCicLFAdG3uXPCG5AGgd13HyM6zm2PCe18ZwqYoWSdh93oomRhbPkNz43weziSXVYQ",
  "key2": "43jkcRpwdfRyoHGWLNd8BkLmdGnFKbjic7BkaDaPdMHBY3aMheQurkJ8Ek1BG67fkvoHWcLdgzonHqrjAwfzmTcw",
  "key3": "5a7VjBUUbXDfhBkz56hEtTgphSbs2YeTrzXH67LVAFgRvQhcbmhfdMBDCK2tFy4Cm4PRJc3vUFoarv8HV3RS4tLF",
  "key4": "55gf9HwY3aaHS2igGDEQb4QGz4vaHu4wGCqnTfBZJqRpms4CvZZydGxw9rWMwSWBKGUrwaL6N6mJUpvJvWUzmXBM",
  "key5": "XWGq1SmpG3bDrEDwsVtNMScHK1AgabRvSEkqkodFrKAuRSNkeoaaGodpC1D4xEHmfLtevAP9pKP4ML8VQq5tRQ4",
  "key6": "4Co2Yry35pozxoVH3Ur3dVWbgxoAdmYHg8i9gCUP4p7ChxDPUW5utMTXfoNHy347iPB9YAC5uJsYkPZoaESoQ4bF",
  "key7": "3igcV1vrLx4PuuxRF1ThvhkQJg4guvvHrZ5LhNREfVhXAPJxXv9VUf8p7xGxSgNEkiVFayszf7bZ37383cv5xEti",
  "key8": "9AehfkLvH1sSk5xYy9TxSaBSNu6GYdJZu5L1zrUi1KR6c22wFPgKbV3REc2ztAbAvEN2zpSs8NtMbg3ksd1cZkQ",
  "key9": "zt73xzSQN366VcxmFXvmxDfCtpppSD4B1Uq5WyMpRLkmd9bQYpJSvYYTCCMiJPG1GBZXCHoHwMipujxFtuUFRJZ",
  "key10": "4PuX8Crx4fW8pbcRRQSDdcgZpvW76FLGMnxWhNQPTQ9EdZgkA1Lqc1VKA5VPg7voHUV9Ji8LLjXtXAhw6fHuvwUM",
  "key11": "5jrpKGTKxmtjgAC49JcFkrKZu4PmnfzdVvJ22XDer4ZM2KnAePjYgg4JjttinxXp5NAsdA3LcWXS66AQPuvokG68",
  "key12": "4GnbJthQQfcjBcme617TmuiKc9QQ2EpaHQ6N5ePKTjbs1xebzttiGLL7LAkuYfxSy88DgSaVeKZjT4YaAqN3Ln4q",
  "key13": "2QpnMMPdAv2D2jhtjchJvEnGnhJMPe8WJ6jht2r2jnrBJ3DyTha8NMB9MiMfcZz8TrJrKntpjNkiVg4VFb7zhdu2",
  "key14": "5xw4HVqa73SfGSHpo9pV1sfBd1e9eyfPpxM8TqqRwAWoZ691C3aKkHu4WC5PoXYjqqVGTV5Vxhy45LeFxuzJsg41",
  "key15": "52E4d7q6qfjgujiTGii2QCQ9bLPtNdgg6azJKjqUZPZegz9wgrFsmWZ4WSJRae7UNWJZETGYCXdGroDfXqqnxypw",
  "key16": "4EnPshu9cZ6gpVtk2LfSxkpRRQKhNBytjoTs6WzUQwHE32zMjxTyZRSsdAyBry3tPiTNbsU6NWLPphLLk4y8uk5c",
  "key17": "3bcGpqEUMUxhajbbVnquLigjvoWQKxF165HSZAy8YBbwawkBTzbiKU6gcYuBVy75yQdKo27QFPcwuvWuP9XjaCZo",
  "key18": "44GCyXk2EWjMAPjhrPRtNJnMThNFGGUBAboQz9VkLQKgFqAWU7RJiWneMTd6oE11ybfwjQgFuajyaYNrgjZ3BMNz",
  "key19": "4LNDBhaKxfAbCnr23avr6RfUD4zRDP5HXdSifBQLfmn24g9uKuzVrGF1MnsFqWGQvEMNxGwj1ZfBv8jc94UAhSc4",
  "key20": "3fwcCUEqLgdmfh3s77Us1q1Azigo5CNJ8kyvzfCVdwAxSuYaJHrJb2rT2L6dPcQXif2C7451RhX8Gi8Tt35nQSPd",
  "key21": "5v5xAbwe6UUKwzYQvckHWKRzTTxyzq2doGeWcrkS9hpRL2oNz1rFrTUHxgrfJ8N9Nvs8QoS4uSQFeUqsQHG9Mnb",
  "key22": "4qH1fyUHLeEUWRY7U6PF2uVC67yus99kq2wS9cZVu9qCiw5PYX5KDwKUjyEmLJzvGybjF2gzb2szGdU173CEo5wF",
  "key23": "5cdgoUsEW69oJ82mz2hdLv28oZSbTMLg9NCL9Vn3SZrqQcwx4TtgcPrrhQ9Lr4DXsLSt7x13HkLLgacXibbhbpRG",
  "key24": "3xwSu1FSRzbYazmyvvuM6XWEEHFcogcKSGezyvve2eVJnt9H9Bhs2mNfWr5MVNgtsdT1ppa4WDUTPLPqDCkoJp45",
  "key25": "2rZs2ZjQs8jr6HH9BoAu8jexKLDnTb9q5DP957fD7s9wzQzWXV7b6Zw62KE9bobbpj61fmFViebYeF8Sbew2GdYh",
  "key26": "4zDbmy9ABr4AYWLhHAQj4yUoV2C3DmUy2vuF44PWouV39YkvHwn5gAM3v7XCxqySJoSvDMHy4QYttgBttw9pU5ob",
  "key27": "56q1KuV8FnTCzijqPcKkfPZd8R115FCUsR3djbvEhD6zDRDKZMuBQjuTMNF7y3r7QKZXjGVNBZgso4MB7LdigMrj",
  "key28": "5K5EZnL3zJd4bqfgDYosDEKP44DczUv7cjmUb4d99Ctt3DQMMj3EMQP3TnA9sSVDiKDGfpy9ki6pbbnRsKSuouod",
  "key29": "2YCC3LXhgWcRMkxEQBqtrrf3JzLwSoqUfECc7iXCgJjBVq9Bt3ohvNLYEnp9eUYnKUu3Us6qhrPUb1VN3BYUi2fz",
  "key30": "5YEW4Say9p2bivsb8xauZFZWEVvdSiL5yGzfA1CnEZ66TDqRBjde4Q4W9Xq9NgfCZCz2paDyDqDh2SSCkYn72Pyp",
  "key31": "3YpSSvJFn3BFFf9e4uuefUDw2euTxdAUy9YM8LoNC2uu2kcyiyQyQw7EZGo9HgKeN6H3XU4yVQjtXc1KdkmGMHvX",
  "key32": "4zhJJ4sjpD5sLu19dGJfTZcQLUrpbw3eAvSoJDo2nu1BhS46esUER1MWoXfPXY9fb9sP1VPgzp1ScJdmAkFtHJgz",
  "key33": "5m8aacSi79jbGpV29WXWVvJqvLmB4Yj2xeFcbY1DGrpAxiAVwZuJuToVgpGpSnL5ggfmFWXh9L5JB627VQVJiY3z",
  "key34": "2CGdJA2SPq4TVrUjxVd4LfjhepkAoFXpujAzh7gT5YruRJRnBitMmCtMQ75Sn5SeoXbV9wtPjtu5ZQyrhrCg7cZD",
  "key35": "5HQ4L6focdbKavL7NT6pBqZScpxwj29wCukHk6je4yhoRYkjWC4uKNGyoiC5f7GHPff9QD1oANDgG7iS1HdDJAZQ",
  "key36": "5RanGqPmHw1Vq7p3Tm5oDtRFQKePzQ1PGd41ABFTZ9xCeqiLgL1AWmouBSRqZcnpgfB7K8mkBGp5LtjhrwXQt3Mv",
  "key37": "5834Sj66PNHCfoCHnzBDqKoPNdbDHhqQxqUqkHc1SEJ3cSEFBQeTUDRrSirLaN89vWcwSZRfLe67pVD7V41X2hPn",
  "key38": "5a5ZbBcTf4m33wJhbsQ3sNHEjMg1mBpaaz62zPaqCcWgZmf238HfGTBGzVPEnzXXykuhqMwrvv5W1bqbSjbesckN",
  "key39": "3nXMFtaoPN4vWd7CYGZiNLp4E9SUyfD3Efdt2EK1MbeNikhMQrin7C85TBqbaa2Vm9ahzVCQwbUhAMSLUAYrNyjv",
  "key40": "5571D448woAaJEXtftNPc6u1nF6pYwJDffGXiE4DbSxpHqHLeXASv3tXkaRLWDuWcEHbMwd3zK2HZSNzYUAjYneW",
  "key41": "5jStaEPaLvBk6BVEzNWT34H217SMWMJg3Bk3z7gdgteHCVAJAYCZ6S8BxEhHeeFkVY9x9QtMNPR3yr44hzQcWAMd"
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
