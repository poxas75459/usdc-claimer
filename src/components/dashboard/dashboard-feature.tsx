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
    "2eK2KPfQ1KiUnQCzd7fZUn1M9MUiiyTEy5teKu4WKP2iPBihQKHJMsvsnmYpfnwQkgtt51weK5rzkSULveb51ny8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bLJfEUqQu2xhb1LseVD3Ja8cPxPBohDuFK4XUBwA36fANQEtVK9bx9B1SoCsdhPU3J3d9RHyfkEXbpRf1VRHx5E",
  "key1": "2xFXKBqZjivoUjP9ZYpAWps8trAyWc585jowdoBJweXa8zaSTpNEk4L1rz51c6Dv9kq129LuFQ9Q4JvZrYZ65XX7",
  "key2": "KVVqSrkUuvogaCN5LpAa5tS5LHEinpmfaJcsumRQNjDXjfkFcXgo34n2w44GPKk5CT2YqVdc4eaF2tGtqXEYPat",
  "key3": "2vFwCmhz6dbt6fR1NuTCcJegbdb8Td2vpMnxB4be7AXZmhPVnaAcfS3gJriBiSeWMMf8buWjPpR5zSS3xPuP85k8",
  "key4": "kTyuihYkh6Toa3jF8shEiWPaD7DJyrgrCMTzg3o2xeDWYRhdL5X5wedu5wgJ9s1NxABKJPYtbi2xY75aMHwK13q",
  "key5": "3NKzKYyJKaXgCL3FhjFZfN8YH1aYibUPwp25o5SkKL5LQKqPs1x5sNnSbtkGzJb5w9LRdmmo5wjqBa5DBqqD78oL",
  "key6": "2sxF9qSGiDnjcJc3Gf53Kk1xtWJkQjVunjirsbYvHmxeqadvq5AYjHLzcHBbGqUERyksCgsYiFaco3mFfi1LJovc",
  "key7": "cXTXyZ2K61DAk2m3Qk9dxSAvWf3SnooMDHQHoZw4kQL3ZsF4F7vNHjFM6So22mYGH3K1FZFEPfJMzAtvAutkEFf",
  "key8": "4ABC1fYK3hv9x2EnidF8CFFRZmDQMm3GMNV4DN4iBaNp2kM9VLhBcBQLvy5NmUb4j5QSQYtvYJZamLQjEPJRAr75",
  "key9": "4XoxzZ64Pfq164nsASYkfmkdM92UTuikY6ytT7F5eecbFWd5rvk2c1pXNErjet5LNa9PqDf3QcQkJLJG6Vn1q8tm",
  "key10": "3PmkzexicRjUBk6yTRoPNNqcv594P6jMhDFtCJExLiF6ChjvSuiVTzMhCvQqjMRrJnfZc2m8TscCLMEDTZ5vnVQF",
  "key11": "5qwyQR7BMtXRbsNpohRhjaapaw9664Rz7CKyTaGqEfVYeWjQYsRjT2U16oiFYpan1CwtqS4bJC2zRPMBMKS4xBqU",
  "key12": "5UCNcqr4A6mgCBQGjf2SDD2AizvMJN88QdkAh2ujPMGZYdM6Q5tND9Y5WvsYnwM6viEhF5ndDXXqU6UU5zzc7tug",
  "key13": "5QFEXWNhVTEfkpZHVge2AtVTEVmJGY7Cify6djPHFBf168to7BVnwqpNAsktXjcUzmBgFVKJAgjYGCNWSiN5jYta",
  "key14": "5LA4txZCXQbAg98n514n7FRcKfaMKMbCEeoufJN4eQBQDsGYvbc9d8dS6eFSYpaN9QY4sYU6pjeFCtB2q81htjru",
  "key15": "49ksvAjo7DVT92FhnkFx1NXVKUBincsWFiYH3UVzco4r3PfvEsuXoh6ekbzzYccPGLt9hWL1R5ebyhEb8ntp9Zd6",
  "key16": "66ABFV6trQQVNqUF2R5dsBb155PatwTQQyiEryKbEiRzJkgccDbZNW74FX9dwKCEfAVqBYQtTMM4L7q2kPa2EAdk",
  "key17": "5KaEr5wzV6C9ZSiS87nNCN3vJFLYsGkvjr6Bo84H4RgGK1CcGFPRsJVQKNnGNL347wt6rPg7oH2ro4sgJKnyFs8w",
  "key18": "wrUE3qxu3Nmp1kbQmdQzaf8yugieQJPVkcZxTaY5LwUXfqnohQk52EJbx2S3XS9monbeVqehiuXqkdJKfkyE4nH",
  "key19": "52uZ4FzxwC2RYK3q4gsK433eVEqTEcK5vDg4ndB7845skzUf98wG6F3hJcLC3rGhMc96wKKNkHhVPLE6ZVAiotvv",
  "key20": "228625oVMjakaJvxogL2PS1WCaMvkp7Kp2qdeFoKYEMKaUUt8tnjUg2o5nv7cAFzkvMuLjeiSjUEpCL3qPfLtap1",
  "key21": "27ihkd9JjR2fhrJbAomP9kipsZnBD1EFy7zwNKiGv9YSMFysVvNnDzvx2G6TntwBy4p5TPViNuibns8wLW6eNKxR",
  "key22": "2fWgy8k9gh2bRXdh2vGmEWZ3HomnGjTSx5ETrmrkqZ5ffnVaebCdiYF6gexemu2zVLPNa9zw2rTkfhASmYTqoKmm",
  "key23": "5XmstqD7PY8v9kJ9XXNGv8XnjuiM5ntxUCy6CTLdX31dBC8fMxzQWi8MiemavMTBKE652Lx6LdNrBHy3zjMnLPgi",
  "key24": "4qQZYqMNkf4C2wQhrkVvh61Wj843BqajeNoHPMMTM2zAReGkPv4GGLkuzxJsXZnGqeVZvkA3jnDzg5DGkoWDYs67",
  "key25": "ECUL6goqM7CEtfrr62wpVGD6LzcBQdhpTW1MwqEbN2EU9eegkGieBNFUgdGaE9z1AYzCbu5aYyQtUC1MJgubtST",
  "key26": "4jWv8ehsAQhMDwdQqQw2hKzBjZWGVPBhStqNFWmMK8WgUciY5DkHMNRfRUXPsNeF4kXzDoLbtXbk3ZJZonVy78qd",
  "key27": "3Q3QvNXPpq8dHAGhXzbrMLEW3wCLDNbUh2ZXXfrjS8oFLU1pAuv9pq2HHjou2CgmQvNGyyivr47WuGexY4KTrd45",
  "key28": "23Tzv9LnKAmBweq1pXXLmBNZBLVfB9wMY9UwNXUSunKsJ7mpSSVTn16xTdjWF6YfYcMJB8BZJZF46H9gvG2rgt56",
  "key29": "2A22WTb3oXgvh41QdXkhPzCN8UCmeBT8oG1Rxnxc6CBzP9CN7CwDCDL1tyoyBU9ZDxezLfsAjn2yKjoC9GvyaqK9",
  "key30": "oDgKKX6KHfTTWLMoKNksaoZ7DMBjQHjhgwGhUATDznLBY2dLf6M3nJ5LzycG4THNHztLUz4djCZqccAwDrRBoDH"
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
