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
    "2cyfT74dyVyyDMFL4ome9SKofovEWLQncm3D4ZSK26wLWXRiDWKcUpozHTQCWWSrZ7bCp31R3yDXCuc6BXvtbUz8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qWamwGpPJqqH8nRBjqvgDAKosv4Qg9P4RgV28fdd5kthRFkUL1BuEgsnBgpK5uC3zzoCehe1CEXcWuihK7mpiWC",
  "key1": "SPoSwDG47EoA9GjpCa8gUPaQe968w6rVHSSEM3RgmYvmUgty9PgCTGJZs8f31yL78inBFX5ZUNz3fb5AZjr8D54",
  "key2": "48nGU2MpC9f479mJ86q9K8Xa2bsqgm42AuWHhyEVN5KdA7vm51h4KQKC58JySVRxxfKArG8XsQMqLMCruF7taCaM",
  "key3": "2b8aVmvJGH9Mb4nRXgmHRze8N5JzxDMB23ZExmD5xzfgxQwvNAsDjeVHAF6zrSNs36KaDaTFamos9sXnkvcgLdVE",
  "key4": "52VNsb5bCxfLRdiWXgbmaaL8rSwRbA6KjXqFhDcSYVtgjHgfK58ETvi5ZCdd2uUKK1hQCycjEF4qjUuvBenDhRcT",
  "key5": "2hUod1EtQF4T3GLrZCYADFGT7E2oGEtGWncEFdhXFvS8VumTcNw1vqicBhjSeFknEkB1Dom4ZZ5tBUHvYXdfsDJ3",
  "key6": "6gy8T73LaNdPBZefEJPHzrr3ERkLq5ThsJPHuU9R1FeTfgZ4785otcEoBRxW8at16i9q6oytpfWN7Y1maBRGnep",
  "key7": "3ba6uaLodpQznxSdpFbHeP6aQYFuf9jDuzQTznZPbxHZiujGx4iZnPgzcqRvHxNqbbmVsYkX4rG6XS7NDt2eY8Em",
  "key8": "41as5EFNqgsGnN1Eon2U3YwBfhrtecJYCoZE2wiePoUhTakymqiYysJ193ADBwPytxcHhnGU6eBVnfqUgg4zkbC1",
  "key9": "65z6MP7MqQBG7pDjh2m49vHsLDgKC1Gb7kENANEHLmBvWd7S5RxXedEyFGwqpwWvxrdfc3UuriQigaoaZJYKGCxa",
  "key10": "2DbrkktBh5TT9zKANCzQNV9dwcfz1UfoeDaUZgFceYKAHRPccBZkSBWmcjvhA1X7U91URjLMtmWTNJi4vvnt1QaJ",
  "key11": "21zYV9ito8uWcyChjMu85VQstMgrrVbbBH26XfMnMmb9t5KLvRu3djZSxDwwnGkgeNepKddgJNpYHeB649kya1L9",
  "key12": "5dZjtPjvka64srSC9gezWYCsPz99WGKYr77XA4m1nNArSf7pZXRwByUfmSqwXaoEqfTkudkHVPKroTJiAcwhKVhF",
  "key13": "4NVEsvqC6ZU3yxUm37rrwfH55Jgg5iftHLta4osXcVhsux8G9hUSUWGTaGxSFiV8XLX4YnDpfhyXPzCDYrC93q1M",
  "key14": "34BujYnm1KQXAVP5yFexC6x91NDFwLM6DD6cmEP6NGyxoczZfyYmFgPKP6MLeqacrCHuJQjfKDdSzWXy6z9WEeYc",
  "key15": "4v7uGLB9ZCfm8AnBapDvTCriYWCcetRZFdwYrcaiXo3zosxxjLaJWkRShb6jbQsfQv5owqUu4bH3wUtDpZaFyp6m",
  "key16": "TZX2zPvH71TiE9asvqHpDKZ6mxQ5u49r8iq4eLiN4dZznCAw4RBVyVp91MRsLpSPRVfZtLEF19hLp9T8oz75Z4L",
  "key17": "5pSr15fXNWyYdFPzX4AaPNB7gYPzjHe42QVsAJYp6GXB62vECfyBWsPwVpAX4xuPyqYy44spZNRDGT713F8njrA9",
  "key18": "629JdgYiQs2NnU795Yg9f7eU4jJLj8ridNqpcBPM4n6S5GxcLAbxyBp55cRuurv3kopsbhRzZKMGi9VPHbXP38mG",
  "key19": "AR1aBmz7hQfeByHUB7H84FCBkdNzGoBJC6R6XmpC8KRLZNxQLHKbgYVyZDU8HtGrTWzKCPXcwbXrhQ2xi2CevLh",
  "key20": "9ysVkBcWuW9We1ycLYNdG4kfLSti8ivPwveWcDb6W3dinrHRTZ2XVoxA53VjQPJgeXTqy4baMeQdmAAchRbvjna",
  "key21": "4YCYGPJNnHMP6VqvHCU2xPTivF4hF7QUNSqW4DumbopNQRu6bQdh73zsSiNXdNrarrPe3DWVXEmrpgTzCPDtyoxS",
  "key22": "2YPfQSkJLHtNDBRSyGmjQ8jGEyGnYx8WgNandqDyz25ct7bvwq2LYcKwToC9ySGMSQNgHiHAA6D61FmB2z9YPgvC",
  "key23": "BSkvyitymBqat3pt34jg7b6AJfYJ1rKzPKckikD9PktsyUcPmu9ZTAEo5Dnq5EsVcEUtgGGD9xXy3f4GRz5J8eC",
  "key24": "4T1rfQYhvtKBFgwK8fkN4oPPSGfqTmnbHqUXKnU165gvPprH2GmyxqXAeeM74MUzmgsRytGt7V76HybgVm5VHG35",
  "key25": "2FV8oZFFuKcUvcAJbnytchysGMojbZ7kEfPzDDnE5HQqJKWrbXgr4XCsywBAY2uKptDTRZDv66tPzpHonFcHAS18",
  "key26": "3Xcsh54jkrSH8xTNToHyTP6SU1Ps89c8avJLv1U8MQRsfpAc9C7a1RA6WDpCS1nv3V8CNd3iFQZx6U8TitEMnCrS",
  "key27": "PrYwYTiB2qz3imz8ezLjzPQfeRADGdumit8FnmkNwRmDuCSpVCt87uKUhJqPNzTxXmSzeTafeHk9mkubAnSQwws",
  "key28": "2zKaBTRZfbLLchDp2FvUF1Xu91oz94hS84Xu8N313E6RR9NkQ6zpZ8y7ExMuihH71zkzeRaEGfhnV7s3ww7ESvkY"
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
