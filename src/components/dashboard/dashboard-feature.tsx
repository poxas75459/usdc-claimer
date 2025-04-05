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
    "2oxgSqUmg8UhNJCQah6rRhVSZWz3kx2xofzuWUMVPmRQkBcWh4jZ2ZTpWE9HcvJzcNsrDcSG5xeU248oRb8vTxCi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wsaWsGGpGMKzkNVL2KqBEhk81cR74sYropDcAhASjvoJC55bwvvPzdiUS2VAMk1bYbDvEeTTwdvj9n1cT5Rva78",
  "key1": "sDwNVgx6rsSjAmdhUsMLUt2PdSRcLqVZsKFQwNeaoHC7q7SNDGEBHfRETEYQP8xVMatzH8WgYCskSmA6BnRGDFL",
  "key2": "2acAhTChRd3FZSr1UpCxC8ntG7VGCGVMZxCFc5hAP1y5ViAyiW7Jhz8bdDDgQcszLA9ohVpEHZjr6YASE6afY33p",
  "key3": "5C46ibQUEzqXcXJF8ZimeDDmVRCAckKXLoEE7Yh3RF2tqf25sS36FB1z3QnAqN2jziMLxyiYSgTvy6TWo7TiGhGf",
  "key4": "5PfSJ8eerMB5kHpz4ekP38rDuTDdcUeQpMayiyY3WzshaGyoqsscCSTDL9X6EtWZUZHQSHDM5vm4gbAuPJkHxshA",
  "key5": "4wG5QauzMAj8Sgq5ZKEtmdj948RRn2AuDZCMP26WXMHH7awdnAejLcJdL2anFPb2yW24hvSYqXSZfpVdrsw6mtyp",
  "key6": "HoiNyg9v5qWgCy84CMYQGSCHEmCeCLLfz4kLw1aWELWherL4PisjQwYZJ99Lz3vjEB6YXiqJxQisTyaMy5FFPMe",
  "key7": "2yARfo4bNUcerEz93UK7Tuxg1S5PdMAi1Ug7SsFDTGEwVaVp8pkPZzPzXbf5rf6ygq7p9yExF5zXLFATyTV3pW4w",
  "key8": "5fiCma5fkT8dQjW6CHrZ5EKC5Azwy5EwSxatzKV7KcHASVXAPgHCRvZmSGpHBoNTqtsqZFFoSDi1eeZEs4SZ6wPS",
  "key9": "3tSkG2FS77xdwmRZDALncSUsPEmykAAE7sT1DNy34wi8YWWc9YKX6SW6jFmUKydztHU4DLYrWMjh5JMLTpb8Sj2H",
  "key10": "3Bvv3LQmRFLGkGKwJbLVfZnznrp59sqrVg2rvowVyfLULfJkVehSMUabArq1sEfASo1q8959zQj4D7rB9VNB8jvR",
  "key11": "51LCQG6uGrAYwxDpMkzeesZMZiybicZxvjoBAM6bWVAzawUJpee7k6UTDZ4KQSDNNzBcsxUA7o7LMzxiWNvfozA4",
  "key12": "3p9PCLcC3zQBLPe5aeT9LPscubhDXDXoEEm7aEa3WUJevLagcSDESYrMRBRLaKzpUj6EFsDGXg2QkjJDUaZjJJ5T",
  "key13": "48QmRXLWVfx2fSSyBCt7WNVgQLbPBsCXYWkxFD6w86tZqtF3HyAeFn14cVN8dLhnbahnKbMQbq5HUooBcTo36xS6",
  "key14": "28voPepxUiWjcKpP1pC3iztV4q6n4zW6S5igC3AWzhpcZRmPPwzzicPXtJDiBWL5jDnWZchWeZ8NW7NcpCuP7U4V",
  "key15": "xYT5j3k34aDsMrr95Z5AaHkmnRniDZWMf5NngAjK72n2W7fTSTYc6A812NTaxLdYdthmbne6DwnQD1BNSMWgESD",
  "key16": "4jR5Vnf6JPyNZJ3guWSChx2sRqtchgkqixaNJuPE1xLXDX5vJyY22p8LFF8e5g4eQUdxcZ4RCHPeEd7h5Bz5BRBH",
  "key17": "3Efia7PT3x5DS5CR4Dex2jR7wDB92u2Zr8m4V49JBccpJDn9u9eEMUivsQhH2QE1FroT2dmu73i4mCAf9uzRGiYp",
  "key18": "4oVoqmnAoK4uo9QxxfuPnhjppGfhHLSBHFe79VSiGZAkkkq3bE6XSoyENLDrVePhTb2thGS1yR2X2Z2Q8wGjCPZk",
  "key19": "2E6AzgNXJafu9WnsS3iRxjZ2DRQYs9EtBwFbHhP8SZcU562wwyvM37A2SH7VZaTzYGZMyWpk1cLHGieqjuFwCivf",
  "key20": "5wdYShQD9xMLZBQwNGVskKsW2xFzSAA53nVtipWAsbGWQzXULPBqxbmj8hqajyGgTxKi9D6g3AT4avvC1sEvXvpy",
  "key21": "5obZC8LvnmmWPcx8V9aqtWVgAWS1UdDcicGMfXZiQNqk5HWLNZzJ4AfAS24VPyf7B9SMX7SahBFKhxSMuMirz3k6",
  "key22": "4EHWJtoaDTUrAe7gChFk5W5jC9f5cwXMg27eAb6vifoeeoy66SCwSNm79ys98JgKuT9FBMsHH7V7QBQyLso5xRqw",
  "key23": "LGbpA7DC2phVPMVRiSL6Te9BiZuHRLidXPxpwZSxjYxhXSPsyMCjs8CY6MZPnDGxE1uWWq78A3iVeGgnL6LurSE",
  "key24": "5Gf2NDGUEgdb5MVHQLaECa4NkJprtR4uXwxgsXhoc2PJQbhUeJHyCErzXwSGkPp5KKxWALzuF2qAk6yjZJKCHern",
  "key25": "cmfBqwSc3zeJk7gpgtd6efAaSGh1aXC21EkrS1REWn5wQ9kZhqzt6eoBrD8YKDBpe1hKjGVpunMRjqjK6iqpv58",
  "key26": "2nP4G893WPruhutDPjT4BNbP2yUzQu5dgYzZdw61RS1FPexCDMyhYMuhZea37HEWABkMqpmHdwEvLi2AsaAyFaA1",
  "key27": "XQttA5T9oyyjvZSHZSQEQL8PhenMvZGqbvB46WrCXJBdk8o3KLMDhMEyfYx4F9ysjopUwatUgQMjCq6NYSAuxWr",
  "key28": "3JHgtHyNggPEVcZB6HMwTrsSnybcSjM2JZSaoo7ySD9nfLgZuzU8tUrM3aAgAeenhJZoUrnHyHykfDjNi1gk8M2N",
  "key29": "4zD4invVfabaUgQvPdnM7uJGkRHWt6WJDDTyEwD3R2Ahop5Z5rgNF6M4yVoh5MgCNuSzXaajqamcuzWe8BeQwzLj",
  "key30": "66Sc4aBH9SRm7yv6zoXCwfyLCDVRwLw1K8iRLwUeemo7kKiuNncYi5vYfhvSCvUL6uHoSYWj182FE7dxFKH2Svnb",
  "key31": "2ctovRwyvP7q31bWnTAFGaaiXgFH4AjbhqofcGduRn5C64jB3xuxxvR1UjdDSYgAjHt3Z4CqvBRkuWTCYJKmttry",
  "key32": "5FywQPEafVL925oieJSLGxuXEWjPWcTC8dT38mrPHgcu314SPu7Dks7bxAvLU6D94WHDujGx1C97EwbJZk3kjgw5",
  "key33": "tPnSGoM8cMUfWic9oa5kgJwmNEf5kSeQehL6KZDNKPjbt39wW1QkkBoQarMxU8cDD9V5s563DcdrWj2BbDMegGm",
  "key34": "28LidUJ7F4kWfqFLorah8Z4vqfFj2vwHThytfUs4oet6PCyrAANbBjjVBNyjm7DXgxihrW5FsgKELVxffxuR5Rt4",
  "key35": "4q13UB3BrDiXqnYpvAq1fEe7BxatN7pyvTYPGFZhn3LEwEhKdsSsQx7XQf71ftJTqScgd7zvAdNxXXTafiHL8UoT",
  "key36": "2uWbRgxpL5ehpsEs2dYnWfGhRzfESXQQY9Sm5NAZ76oUGFZteYuUVhs6d68uDCoroufydZcufTRiuW9n4cTw1L1o",
  "key37": "3vMPEwBcSuswHZqF6Z7FcpMvusRuhdkpCQmWE4yYWxZnAhGRJ9rqSxqDhMMykkdBejsp6Xv2vte6aYCUgqpBKPYT",
  "key38": "2HG5sG3KESfBFXNBPD8BHi4USd8sE81aYSVQaiCyk4uWq7ui9y8vL8k2Z5rY9GBGLzWtsYt3YMXEuoGn6W6LXXsf",
  "key39": "2N2duezsxUX3WSgcChfKpCNJvtW2nQkGWRZyrsqpnFMUaotJBGMBpUQW71bGGzAdnZzKijZMDm1mG1sTBeQsHDm3",
  "key40": "5d94MzDqC2V9fpS4Q41GNHNvaQuQCY9o7Qku5WBGcqysnQe9kAX6NHttBQUN4JSWu26pfd2fBz1QiK65MBZbEd66"
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
