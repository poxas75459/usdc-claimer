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
    "4SyWEoKCNuUXCEeSyN4yJm2pgNXAczJXg4NjccDPjPugWxGXtQSsj892pEVfRrRJfBy5nRj7YsJfib1taGGbHx4h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ky6NgSSSLyycQ2qPnycHaUFbHePmN8nx6sR7rh41AbcmwGBhY9gNPTA3BQKntBbS3NSrSWqZdcnHxbb9WnhMvk9",
  "key1": "52ET1bBafEhaVuHmNcZW7nZtmWXfWSTbe6ZbhzbVg863HH9fHVSUfjRknFj27vTdAogY9a3Zn9mw1y7TUmo6Zg6b",
  "key2": "4bwQaEHbWdwSpdSWgXCSyULjGKkaY8bmkELLtXuDVVZGGnsFUvWSTD9Hnjxy16yEjTFbSrM6K99qc8WFpKRcvffe",
  "key3": "FQtFNuLJHCKeSDZEfYmqnwQ9KLkU4Y5ZbSfx2RKzRwNftzD9gbwkY4LatmD3GTK2UbSr13Qk21kkCkZEBuP1s3J",
  "key4": "4LTmFsxGJtNe27TzyCXZmYzXLShz4DFX9xCQ16uAYD655UCzb28Qeo5KJpTf1MARxNVt2c8RSjnHq3Rg4bmiHHcz",
  "key5": "3hJA9E7eEaNh214rbVAPfNe9UxDoE2eKiaBouNq9QG85LKZKYaAZ66hR18hX52p5WacffgNmsa5r8vrx3BRZUnbM",
  "key6": "2KttwJNbP34Y9sE1j3ySDMm869FHDkMGEzLe4EenRtB4xm3TE97KViooT8wquGjSj19nE1Stmi1FJ9pGPDP2sWXq",
  "key7": "NXAstX98ed4jtqkxh3GnFgbh5EjqgQrMtoyJDe6mGjjJB86LiNQDfi93LW3YuZFjcXf5GsXMyLEKxYoY1SjVDhE",
  "key8": "5aT9s2JEMfanpzAuTfgWL4jXo81fkh5W8bHsFUVoozrLDyrQdmAaGQhHTTYgnXP7ZiXQvGjFJcVS8z1F1MNGGbbn",
  "key9": "3kvkC3ejmwsgU9jBJq6zuNn6mGnB4MS8Q2JRzjxaPXXVU6YBWWHq24whQhfT5NToNvkbXyidLEiwbd1K9NtDHJsJ",
  "key10": "5ZPgH693z1erXg58iny1VTFsjKRzPZFcF7DWnz5YkPZHk6QtkUdB8TmwdwdWkRo3YFvGbkbEedF1k1kGwgrDw26n",
  "key11": "2cqvhuv2ahVfNMGjVMbvR11jGa85LBaKwcJAYKyYFEoPts4uf8ow4gZjZQ3qccqVAuRRJBKE1our4LGyoKynuuwp",
  "key12": "5fJ3meAfxaqTyD2WoutyMRaXrGE6o3MENUmXqUxJVkCpwTiR5T3sZdqFZP91BeLBYZ4iS8pW5Hw9rcMYNH1FD7NT",
  "key13": "4gzgvAnak6cp8zSbVmDbBgrjpx4WHDs8dAzmAncG2ioLJfEqgdcExK2bRxnD4dGHYbgYizVPGrJcPjUGSMcD2yiA",
  "key14": "65kyixMmnTceeyai59AWdf4cXvparCRAWMGAqTizYmPZv2oBwAEftFSTQdLpe5JijXAW4qubqJus4DqjABdAcXSF",
  "key15": "4m9vSYUixrLwXaXqYPUEcLzzFDzgZB96sXJ14oFYo1uQQnm3ToWjcYNVRMPYKZ41cRgH67JLqq3LHVfrgybWStYr",
  "key16": "4gn6saWhPNqJ4MA4XEXsf4EKxBDfvUUAp1RLtmXQt3v9ikNi3QvC73e1kUgL8WLdW1rPyUpftUAMuWpWxqz5WgRV",
  "key17": "nz7mxfjC25AzGJiwE2sZe4YSU59uguQpVJGWbMTW4hzQumDxCsQ66k7yafTYhHahpdksHjEHdA61SQLSHHbqkab",
  "key18": "Ts1LsDBgMWDv2P3Su7zcqWqtPhj1DW6muxauWuk2rzbot9eG9C74ZcC4hqmXaJTrBK1NuhFA6oYbngKSQQRwLG2",
  "key19": "2XWfRR26ZZKDEtfzdKVWYubSNxV5YAWg1DT5DDx5CojNfdrSKNM1LPEYagDADHZEMYWmxD1cFrEfDrfAHDm1dCYj",
  "key20": "2ucMLNcaDZmQGqkfS1pJi13eMopBjZCpBAson1Zz4cjkV9o1VTFv6vvRw9YP4xTBZrAtk1Etpw7EN92KUpki6ffo",
  "key21": "22gz9mwrcD37YKwXuGqmeBtLAAacgA8srX3M8kFeXSWTSqReJwCjxduS2SrNmcQH4vDhJ7LrbqgyngJQWmNC62CP",
  "key22": "3kXTvUriri5BJxfiNJLwpLUgyaKDcZfnWJkTiCnFsGarP2xvo2R6ZqThBJS7HGfGSek6Dk6d9zZS35jphXBXg4uf",
  "key23": "33v9gya4CL7LCgajF839nCs2F4RVFXpzh281e8qZudrJuaCxsa3TC986kh5jBLFT5Gs5SWYRZPvj2yaeEDoxFs2H",
  "key24": "5ap2qUWQCcs1PJP1a4HwZGW3wdwSV97gkUoBA1om4qqXa9W2hURAuChtT9oj14t7RKZUfygWMRg29wdC13MbFHqB",
  "key25": "2Y5rXB1ktfqxFAgAWp2oyhVSTcjcpF3cXC5inK9ryoohH2zXdJBZwG4AitgWgR69T7nL8ocBxEo2M39o2w3GKeKQ",
  "key26": "5hfpNzWeky7hZxrAzdz9acwvsN6q5ZHoTN7XgJRNAm9M7RQPaPSbRkdvejT5DDE2CPduWWXLDL4FX8N9cPW6RWjh",
  "key27": "2MiTtoUyhUz9nGKxWpk9En9sgdFyUZiGceMm1eBg2vTDsR9jJub64zZyM11iVGSfoLNkTP2fzsyeStHcnvT8nJXK",
  "key28": "2Sw7DHwTzW6r3VK3YUPoztPZ4inbrdzqXVeZCCeBjTfEkHaX1N4BeZgv9VNv8Xa1FrqZVLy8A8H3YYpH7YBdHkcj",
  "key29": "2bN92t7GD33sa3EKmR9cP1b8bqwnhBsUArnVm5EuUEmkttGZeXnKP2QRxUpkLsaisq151ba3qgcPRAxbyha97tyy",
  "key30": "4WTKUA9DDgG1cVTukQPAeY4wvVNJKjVhTix4HbNLhnVuTeNw2wdhj61JtjNA7CTrmrJrv5rspUbH9ghVzHwWBsUp",
  "key31": "2tCtG6RPDQ58CcoNnoFEtEiGMf141VoZQRFQ5yG7NUAcDEqBczEfZF98d6MbyRNCtpVyLbrYMwnhG2hhSX9oLnjL",
  "key32": "2QD3Jtjmvk5i9fHpVmmCQzaEYXzQ5bgH1bLYPD7WhfZcxpNkXE199rQcLkbb78vfDRGn7xAZ7PbHJYP2rpkwNgGR",
  "key33": "45hmKQe9VMtE6Mz2MC8s2Mz95hwdWj7FnJEjLW5rrTLr3Sr4rf3Z3MNg3X38YtGTuLibgcPUdnbZcuj6kqR7A3bp",
  "key34": "cNbUNheeb2RcxUZEtyjXCxC9XzJGHZTCXSjFtJyyvcxRYc26Qmo9WRd9A8Skub6k8kVtadUa74q1FYnq1N4AQ5y",
  "key35": "65kLEW6iWzSPNWj5umA3Py9GLPe2qUWbvYmTajqiTTSK9fGMrGmumcdgY6huMb4cQJrs5cLPt2BJPV9Rq6XDn1yo",
  "key36": "5kV4XdHe2hCbuV8gBwfnLQd7gmkYfJDtzggpXCQMsY9LsQesJWjVhmzKY47BB9WHxJiNSXVTda9xkHJ1Qva96Hg3",
  "key37": "2Pigfv88VZa7gxJC48g96Vf6D8bUJMf97f1f7Fhhby7E8WHjt8k1y948jLarx63ocQb443S1s1FwRaJSuHTFqE95",
  "key38": "5gqyLnqGgLWyVcqQutzWYq4Gwe6JhwNAZUyAZZZNvF2ZcLBxvBt1Y1FK1aDhKQDq7Wh3z8xV84hQs8JgW6FAWdaA",
  "key39": "57nzoFoXBzyaZL9EsfvCsfYm7QN32goA8iYVKB3qyxpWhLtm9oGAbHho4Qj3vj4gunyBzNYbjZ4m1VnWwZ7v8Qnm",
  "key40": "JBZ8JAcEyVWDLHPGtbhL3XBP4LyCfXpopfDGf6Gcd7WMKCsmxejByajVEsHptPumCANSaMLDA4i32xs1V6yfiG2",
  "key41": "21QyeNEvV6TeCopQUchWGH1R9ixp7S9TtvhXJLoLg71anNwAMhxfM1UeuziSsFXw9rjGQLbJ3Z1pEybbso5iwAEx",
  "key42": "53Wf3ptU6Wn8BR77oJt7cvjuJih3vtBC7PP1Hm7Z38RuKCtfSUj2iDbQSZfuDEHTga2F9js8VEieFavC8E4HFf2T",
  "key43": "4iJTwVViMvx8344kfoVtp5JmgAZfHQKitthM26vpWrDRMH7g82ZZxCyeBGxNgWnSjyrfTZzmfP18Fw11QgXaiz9Y",
  "key44": "p2Sz2XQjUt3ahF5R76eD5QiKGfaRF9osGeTDmJANhV1fuxiuJxVRYtUoXz4mWMZW4Szio8qNp17dRzv2kyaR1cg"
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
