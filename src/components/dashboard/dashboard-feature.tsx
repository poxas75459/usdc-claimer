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
    "yVgYAkn6H6mshueuqWECPy5eW4wwMgmeRagaXG4sC7GaatNg2cKPnLfocNWfo1mujkmts52PJnDvEAN2zAoXZY5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BfPkJ2uE5UBKGki1pyQCbez84J58R13NqRKNFfo6acDfxSM89xnTDjRU7AdGtoTNYvooxdMyyrb9LywkhXytp1W",
  "key1": "3QEb5bwmYaTQ8cQ5FDRMM6LJd5Y1r5TdFqwW4J8sSoeMohrzgUU6LVTJZ6JNugJz5Zrrj4mpTys9X1qJdWSkL6CV",
  "key2": "4z34i6yyNtU87EwjTZktsqCH1GRjUitvT1dHWbmHVZAH327BV4whdNUvmzXeVHvQQwnh6wcpL9z8ESqwuQaL5P8e",
  "key3": "4SynM22wtPHSLj5BQXmWHKYDvs2jQ8zJTwmVHiyCAt5dK2CBWK5cMWNwPNqMRB8WBoUELDXPX5LX255hKnoE5wc5",
  "key4": "vGnXfrBNJ3hjrrEE5jWUiaCtGgPdaGWMKQo46yqbxSg4BfxNwAQumdDqijh2cCxAj9p6eT6qYUmZBBbq9fXzydR",
  "key5": "5j7yafByt2UrpRKgCzLCLR5x6BiKKcQAzWPnrZ9QHts7xv3i2uaYbxrkkG4ks8mATsnnR9QfFVP9EQaD5LbjBto2",
  "key6": "5JfoMfHNZS8bRfRpBA3CGhYyo8CDiWAGPwUgpr29Lm15FuJekEy8GPAKuNLp38qXvVZoNnmVa5H8RtMj37vyTd8f",
  "key7": "3EkYABe3MRfqLsdRH4nhvZ8xAeuRaNd3mtfR6YsgDTeWJgyv7LMUzgGUAwPHxZfqRy9QBu7w7J2mRP9exWPtFVPu",
  "key8": "zd8UpxwjpAvbf4NZ1DpzBshBqz5rJvzh92ben3G959J1FqthWufEa3GCpMWN1pnADbXs1eMGzX6zZVaS5J1pGBW",
  "key9": "XT99owypDrbT8fLqxVUD2vH1s4zTt1UR3Gewhf8hVQ56n3a4DVzz5MfyenHC6haBNV5mG856AgY4cTEFoy1YMWw",
  "key10": "5EnjLAyZQqEVg8J8fLSJcxMcVb6dcKWhheqXDteGfkPWLMRDWLUXpTZJXNwhsjRHJX6gJwLxr4S9YbzDtPccbXGm",
  "key11": "51fMKGE7VLnRgC4RrtfC5znXBsFF5ug2Zh4GRYQRuyRDEHPegsdhx83nMdasPbJ8o9FhfJQqPsK2DRsprGKnMVen",
  "key12": "47MGfqhKhJjDpfDF41prunYwzjMfvG6VCnBFQUVEkDZ67gxEmqp8pp83AVp8TFs2XNskZ9iYvPwXpvh1uXpV56pm",
  "key13": "2vB87G3fkz7ovjxYuYDBHgaVUGZoTf3VpFbnnyFHjXkrbvZkPbA39EENWDh3ckFNsVdcjvdPrcf8riGLetZtZq1r",
  "key14": "JP7DwnaDP1QYur1RBubccSkhhzLyFPk8wRAVMs6Hcoe9L9Fo82858KSbJWjaLJRXhay5M1UJsja5WeZQ7hxU2v5",
  "key15": "5oDMWp2fhAVD9L6Qpqk9c13i8p5AvbS9ZsAvWdAAKpzwvFdzEpaGyQU7GNUapdA6NXMhA3BSxsa9avJgYW65utzo",
  "key16": "2QEMbNP8MDUAhuuKHvJj7sKJMkcD4WSB3vbjH6BhcAwyDnSG1TNQYUUsK5Cqv5smQgeAprLvHyNmQzGQmK33eWCh",
  "key17": "2Nbgkg6MmP3fZ36oTUwqkw15wrV2scCMH2FP3uF3LJnAZm4cBtEFvH5SSAb4nfG9LkE8AxdmcfRCKc9E4pGVVBS1",
  "key18": "GumsWRZGEsUcjnqxgEChu3aivB4639W72uyXgpvC7zo2TFddL52f7rmiAJ6UpTc5Cq6JUfEJJL3E4n6cS8ogRS8",
  "key19": "3ZbgWDP3WvVR3GGbRbCXDUQiqWeypMhdtz9mp99bbpVKRMn2zGqLjWjzc8FvNpFHKR7TGaqWwpJN3FWZyfnieVK9",
  "key20": "2gq6KSCXSNV88V4X6RoKjAiXWt7b3vNgBEGvWiarubK8t7aDVJe39CfCJg5dPKUycfSA7aXk28k8g1DnbfUfytXY",
  "key21": "24w4xdyqBLqPok6LB5vQGyNYZ8Cyj1v3kaYerqxbhZEHY26DbvKHrZmGz7HiTedVEoxGT7uTxUwthpP3Le7pFtYc",
  "key22": "SghZn4WU9ehwcLogVzttFNvTUKZAxwNzFhhgizriYtzLBWg4PXPNrqTaz2ZDgJfiHnQRTJmjMW7mrRvVS2yqYGG",
  "key23": "iKAGtg5o1X8NqKz55gaNUMPpXjKEK17tuuMXWmnp92JY9JYv6hjpeEPjCYDsCoj3V2FzZS5xsCBx6swkcEkc91Y",
  "key24": "2XJejZ5qyfVtLvjLKk4TYo8LFSrKuhNkzzWkhWo5mbjWzsgubV7LBjLbR8CozqvMD3rxWix5oi91mdAYSbeFcX73",
  "key25": "3DmpqJPA2E4YikLUqNcYvBeGd9AkahuLusKNMqjdjbjaRQpXSv4asbnWLP8QAdoKxe9GnvHukt9hHSJNpy9AeU5N",
  "key26": "4rsp9eSqmQvCvrC4jqDDzUGG9KFkFYJhFqgYJRp2EvGZ2WiFYWg9jde5C9sQSncEJoKgKigryFweNMCZ7Fedb1ej",
  "key27": "4HDckWgPcXUkajsJcuZK8gY23pR8knbw7aeQyDz6B3Db8KqXfqg36mk89bf3LC8QN2mNs5BkpPywWwRQx59EthVZ",
  "key28": "56SJhVZMo7NsvSJePGW1YoryNJxcYUGswJ8VRkPZ4obTtuXHfaciRcTXr7V6NjNfzZN3nbqUoS2HFGDVdkcqSoZh",
  "key29": "5SX6tRVYqDzAwF1eLDS8KdCiKLhKhaR6hUbe5eJiFjJro3oaPwmGCwbnzCUYkZXXUVXrohyx7kt5WaxpGi4Utqgf",
  "key30": "3rEQfmhaBDw38KiN4tTuiuiaauyq3KjbkKfcThZefkLevB4zSivRByPak4vuJtAua5CUATQkfhqvEBcLdMnioKY3",
  "key31": "675vZo6ua3dSeMAmNKCHkcaft8iq64UHpKpsfuvaC6Jyce8vdvFrZXGRVnQvU9gHC5WWRBV6zT2NjEtfybJKPUgc",
  "key32": "nHHGoXyPGS6EtMmqp4aVhmVm2JKh69EuUSd9ycgdrbn1q38Zo2FBitt3SaREMfCZ2bxaKXdxKaFD59qMuCWi1yi",
  "key33": "2MffHgTj8WeJ2GxyKp2opp68BgWsFX33xPksSiv76fbkSZS7Z4EGvjtuK4xMUV7izdQA9LqgRBQjAhXrnabFxafn",
  "key34": "3gz8ZGzFSycH33w88E9tz4gsGuVsnRLQG2Hjm4u4RRVmW1nSdAmwGsvB5mkJURMZatLr2Gx3qanSJB7jamLk31ZZ",
  "key35": "37ryKHF5NyQ5f1yR4wQtEGVcwngLWzxRsxC9vnoGvswcpAyp2eqcjZ5KCbTh1Ua7GUBGMUzEymBZXcMvsMvf3jCp",
  "key36": "2q6G5eQvb7ZD57ti9xz6FXSFJzXiN4mxphSk73Yz9w9ZWhnrQjPzRYGPZcv8q515Y3e81hJDKhgHgR6UXTjaQaWz",
  "key37": "2HTiXNwbhqzyvFq2yGKutwVXujHV5bnJiJEC3DabnhGoJ5bDRfoEsyerP6mUPBboCD1jemaYkE1fuZ9YC9bHzoFJ",
  "key38": "4GkxJLiaVojbXJemdCHRSQNuZW4ozwGtX7PhPgGLmAKfF7BB1z5Kpf4MZRNQkqCh9mLAfF3fS3NykuAQhrZ9nroY",
  "key39": "4WSmay42og6YHc43BWu7gDGyZSKuPNGqaPKPkjR83nLG6fB2Hh9u2EMnmfez6hfKaeHBun533ixxA7ra9jeGeAQk",
  "key40": "31i3TfNJ8Fj8D7FzqvdtKAGiHDEJwqU3kmhmk7V3Lj6Lo2CvhnzTJw1n4M6mDjAzRVUwvoRQq85F5Y4cdmzidL1Y",
  "key41": "3AbWFkaaRfqWq4zrxeZe8GEgn8duC4EHgXadoiw6aikRXyu81bBxnUgZEj6p6AXYwCejRD83SWNYwhAdbAjMYZjp",
  "key42": "66srQAJ1SuSAwDX1JVHPz4rKcKEsVcwEbi4vc1q2sowtgvBL4JfgDaCbwwkyZP9fgYd2fMJHfK9rzRbX6x6WRBvz",
  "key43": "51m8sfTFeDYZS9KGzwmYmVMYRzLmxRWRNam9zhSmGAaGoouBp1DoUYtrUS9ouA1o61kaAtWmx2mn3HrVEB2Z5YLs",
  "key44": "3sPShT9n2v2qzsKVJivPqqws41FEnZkVidPueaAqYxJdtz1dfXQjdigaUkmPQRsnULPyLpupqiTuVhr8rut2ccNy",
  "key45": "4xCTPsgLHp1jSyqFaGPXPWzXyPDewzESdBEZZAxCeTMwei3MFVJ5ukqGEWT2bHCLC9kXvutMHTcdc3aaVPZEaxTR",
  "key46": "4TH5qjs1ukYMKLxN4tHdfF41MRNHXGwe3njc1EqbSM6dASeN6Hv35YutYMUTdb7TkG2h61W64TzH2bjgBjWjfPoX",
  "key47": "4qiDjc8tYFsgt4JFhwYgNSdeHtVwYuiNH4mCWwRERFBts6axb7EwB4fcZR2r9KKxQc6SuJ7bmfrtiwSTzJJuy1sG",
  "key48": "5zCAuSDnUQLDT4RthaTUa3e7AYGyFUXiJP1pRziCi55kQ2EvPDcopWBucQud2wetmvkd4gwUumr9i7vgDfMhLyvp",
  "key49": "2WBDm5HZ3EpTJ5BufDyyQoXJP1ScLhxakwtCC5MnYtRRjxrcDFhHaRVQvdyxZ86wqcE1LH9Db9QgC9Bh7dmg3xiH"
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
