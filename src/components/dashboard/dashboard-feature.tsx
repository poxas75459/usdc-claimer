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
    "51CfAWG3NU2aK5dYkpRw5n4VQ58PdgUmu8snrHPMYDnpk4DC7KczZ3kTjdTWbimrN1avwNXUNGJroBGo2QS3ex7D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GPZuTtC3B6iTiYkco3aDVwtQ6nbQJ2XqbPrR7o8ejB4WcqqJHnq3w3qYXGNY6tFVorAsZzJKWfB1qpLVEELHZid",
  "key1": "4vx7FXAqbZVpnUdv9tv6r4GKsiqKDXGYeEckwdsYXivnj91U5GpJuW9JCHXmQ3TSrqb8Q474VsykUEgRaFX7fQ5m",
  "key2": "2rHSYfkKsuiSWJob1GTWgBr61NGoVe2yUeHsRvs8fD6owY6yYi27Vd98ZdErQQhXcthZY6PmvUyn5VPNq1yMvPQ1",
  "key3": "b4pGXasmjDVSQixyTXr998sKvW2mq46sFZXmu51aBPu2X24e8jS3NR6fe2GfRpp6y1DSsETqxJpAwpPa9sDFEM6",
  "key4": "2Xa16HcCt9FywRyyyg2YZHjSPc4KSv2mDBBPNhkhQdQNdx3t39rikQfpec3X6qKgHbaZWdhhkRNuEWnaRWKTBZTa",
  "key5": "644mkWSDuu8UzXb9rKG4JgUBZqxGdXcHM7VfY4CEzyXpcSq3vMbe7eqX4wUiehbCgajLowrLx2YzApvJeLFmvozp",
  "key6": "3SmFFtA1W5EdYRrHRwXayiJQiS7eauVUgJBa1t7F6BCouLBnt91kMuXDF43bWxXyjA6H1k5gshNbRYwpW4V9WFog",
  "key7": "3NkYPzjCeGAjvsSnnrR1y1FLVSD26hybMtnqKELuvSoe4eT4arb4RoCo2HmPrGwDfNKrkLyhjzRxF2s1Luo3QyGt",
  "key8": "hdABR6EvkzCySQMZ1t6Ad1KTcYN37sKtXYsohyWiu51YuNsT2jjpkH4rfVu1vvrnWpocCuJ6wmfEzpiicmYbuXR",
  "key9": "4QGPqTD6HaSGY9UZWhRJTqFcwqrT5oCJkkRoKV5YYdXiDG6Zh54HyhR1nRgzpbWzYWg5JyVLhHLH4bPG2H7XcRug",
  "key10": "4Wdqk7LdUyqNb8cu4LG9MWPVCE3yutiLXKMwe8YFGevPTdYjYNupa5xrqFPyvJLzxuKXZaTBLXqXvo1GTj1S2w5J",
  "key11": "2mo4qiD9unAKw8jEaXDCaZ4BmJbggKxJw7pruXKfiNZ5ArDvpiWVDU1oYv1aS9LhHgruksyKpTaCFETJbmcpZq3S",
  "key12": "4nLVwC17utdCsbB1RSiFLai4fDm5Kr9zf78hXiJzXeraXX3gMDeBSsZWqzrvCu4nGCtG8CqQapNPDvLKnZ5yQNsa",
  "key13": "3GiWLVcfytgRPXd75fwiweWdyvvt9WBgNJFeNVbVgYhJK4yCCVJRkBLwfZvqYVoQsndHAuSdhuiKCZH7DWSmikY9",
  "key14": "5FpShfNRfvnisBAttsJdWUnjy6RAgAeLtNvVv6jnvMXth9uCwUWe2qp6b3qacbbJzZCF4AJ8SEUbtC7ZzgdE35TR",
  "key15": "2zNnYZpN67BHNk5sNfCTdmvAzvJ549QWtwHooh1KfoeJhQ7od4VyKWZFTCjbN6VMbPt6UvQkA5o2ruVPZM7eWUSR",
  "key16": "4mscWrM31BcJ8CUvGbvq481gPHT4vZDWF7tvCs1YbuUmcViVsD2hckypDwR8txQRTtkPb683NLHRKduhApnD3FU8",
  "key17": "3xavP1bQ7DYYsUVrqLPDpb5zhX7CsFmuuh1hunx1ouf19RnNWbTFKbD6TAmpbB7Dm5Nh1A8md378fzfWKaWzNQgm",
  "key18": "WtWB2BMsrwG3XEauR5f9dhBRUPLFHUrfjwqe2XH3RJT1XG8HbSgGuJSmcABUBSXaujbGAiCLF9r2eYLAX47qujg",
  "key19": "5np5vHaxYs985XmjYSjvQRHfg58zdeRHG7eAtTkFmid6L7Q13atgC1x5q5jyLnLrYgP2ccUBYLZW7XvTR4Xohnbe",
  "key20": "5MKZNcZBFs2vquDLvB1ng8xAWBBDwjdFpWA7JCLBLj7Pv5uwVHYvjpgRJRVnD6TTFR9SP7qqzwxBRWJ1W5xUXaKR",
  "key21": "545kZESED4Q7w3MgJqXQMxEjLL1TeAuUVips39dUKbqQ84nCbcDR87JwFKBEhzUDgrR8M9VMJHrcNQKrnJviaA1b",
  "key22": "64goaYV4Nx4fgyBzjRLFDCqdwEtKurQ6aBRexcKydqgzDAHFeQSBJKn5GDaYEnPY6jZBVPp3Nb3epSQhpHWb4c1L",
  "key23": "2WPqAkvujeySS1FzF82rmeNx4esQp8btB1deH9L6zMXxv7PSDHFPYSomVVNKPT2tN68bkUXG7Ukog2YBfenaetXh",
  "key24": "4LvArc5exkMcnna5pD2Gq8RB41RKu7SUStggYCreTirbb87TkMBnxLEz7XT5Qw1EpYAFsZUV5yTNfrKD5sxpXJZH",
  "key25": "eeZqYUtpKP2SPhqNnP4tQcDnURoccSijxTBPjSpb9XoQhvpQusAQMUmzpG6AtYBcuVAZoj19P8hDxGKjqTfLjJU",
  "key26": "3wR9G3JraB8ZDBFW7fXhzzNQSdEavFKY8D3XjsBgVn8QbhWr7CaAdJuPabxEwEkPXAat8j8o7GXfBmxyMuWHgd18",
  "key27": "2gLQqc1DTDaceJydUowjDXogqCwNvJXiYkNn6S5SgXiafUZMQ3rW9Yjewuj1g5xgfPmNaHcWALKxeGtjTMfz56Gx",
  "key28": "SzKx2gWkucLc4iJQEsDDo1WpPW9F17vaLBcD6Qqa14xT1m9CDvjZi31GNhMcCUv3MWvyPnRzsieXbn6qsyBtR7a",
  "key29": "KP6wsmpobtgQnWoNUaNQxy6yr6soAv4A3hbfpyqKrty758gpJqdnJdWcEnUEy8gJnq1JShYhhVJCjvZ3G3Tc5xi",
  "key30": "5wypNe8EUejdada7F5uFYo4Uwcsczg1dEBKUcVcjD5wfdEXHoi4grPJ7fAf85GJHC1DtxmPh9f178D63wjisL2wa",
  "key31": "4hFEoyVEazGRRygeKTbHec24PKdpKCPC7jUT15Bttn8F2YoNEGpVW83dVTrYEAzCkcWUy4ZPWAvNWLuLmHkjmjbe",
  "key32": "2YfgYjHGYF6WqFNtjqgbzhTfQAjJ3coDSDeDvoJg2uYdKdnfAQALgfdoJtzdhRtc9LQw4pRjQLA38UUN6oDM9nhH",
  "key33": "44q3UbnKu8rHbcpEcgtZXrCLUydEtfQ18ti7dyiY8EHLvBvDAt5Z853FSPKdDSvtctmbnBWZTfdDjNqpMZfZ3Ldd",
  "key34": "5ZAXHawFwZU69rJwwJWXiDN2uqjm1N9e5AjfPkgSu4Y4yPruz1EXVTKgE3ubjU8GCJqzcsvqeja3fjkppusZJz2Q"
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
