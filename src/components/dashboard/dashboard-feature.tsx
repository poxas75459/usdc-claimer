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
    "HHSMawrMa3WvFptpKXdwMk17qRjoGnYrJaihhKuiN3HXQNUvgyvpU2ajPkZ2DgJHiRBGkmMrwsNhBZn9sw5S3bc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nZqHwMsqUJrMGirq17CXNk3ioBYDoycG7JA1bQRCGJWmSsboNbM25xcArs5k8uNcVLwBUobqZ8nmyNJoJ8wJu43",
  "key1": "2EzPNPeaPgwdSjsP83hsJPJpG3Rmog6jztVavSCqR2ZhSGDJCTVBFiUn9j8nXbdBjJ6Lq6e1qz3VRhRMfuFdcZxJ",
  "key2": "2f2GCrsEp8bdpKULapWqhfgTYyvF9F1UZsRHgqMTjtRbacGvAz1P8i8ZmkQEJ6pB4HMWS43kYqm3D9vuKP56BErx",
  "key3": "wiE9Z3ECpsDBiZ5wiaPZxZiwYfLDwPZNZ7pqFk5QWZXhjEXYbwUPGAvsutdxpzzFKZ4bPNJoV3ND48pbJwQ12NB",
  "key4": "221qAHe28zUx2879m5rDGQG3nt9aNggLzDPv7ErQRf5WULpcneSp3idvemSXZoCUR8UkEDbufnRzzmzeoew5pKST",
  "key5": "2D8sgcpiHGuBFk4rmY4PxtD3LxNZNGnk98ueCcb8ZEVRGb9pekxHDixRCQ9nBHgm3kqXVzZ2ZrR2kfaNsqK4BMyP",
  "key6": "PifSEBf89JxSbtE5UaRf5pnp7nu2TDWfjcp32Vfu8kpKf7k5W98bqRgVQ3swt1N2PEXtV6RzCmByKNc1vGtxDo7",
  "key7": "4zLDnhQ15iUVm2vMbjHrgHURPeBGwzwU5RtcsvwSiJEZYnJEMAtCZXgZapGZ6vmpv2qjvgdwDsmSg93mewjido5V",
  "key8": "2jh2Yd3HDYtKYzapRPFcDjxGkWRmfp5LjeNdRbR8eTFDsVxeVoE23jRkTedcxA3qtpgxvy2F6PeomVq8n54qr6aY",
  "key9": "2tz6dUC5PQqmFEeaANGDpwjqK1Exs1HRHma4kGi85CgeksWusQH7UMDxL6AdbqZFou3jEJ85JHKrhRgAhGffygn1",
  "key10": "2HXMq6NBa2oj6FB3CPdNYV8E1xJkdMGc7fGaUDT4U7U1dxKFu5FiRWRH35tm1UVqN3FFzgvA8jF2S2HTwBJt3T9o",
  "key11": "4AcvBtyTz5s9HnJ4iuo5NiPLErbBRsjo8ggK4AmDUehqJJaUf9n4Zd6UdKPPUMLujamP7y2PCbtLuCbq8JCw3Kts",
  "key12": "3fEdqc2MtvA7rwq33jYXjeTdsCtEDacpAJECbrHgSkT7nkSU12bpKrtZnr1mC4GHZwwVVMCBFUv4JbXc8mo2YmDp",
  "key13": "EicujE4E2R1yDmoD5LpxtVgCw65kLQ1vCr7v54n8RKM6JXL8vR6QixP45fK1eaeatMTGeFwMmJfowpAK57fARZr",
  "key14": "3xJSwfmEsMb64sKBxW4f45YfZGueDrHNbAbyT3n14uZupyNd5t7qTPzTuibGbbhZoTeVELRTbiebc2GoAUtKdkUv",
  "key15": "5cdKMPKY2LATq4SFEfE3FgpdkaoRTsyiQ7mA9GzvKhHDjgn2XVDZWxe6BZzp76ijdttvekyqnY1n2jTRq4Y1ryr1",
  "key16": "4pjQqJJR8fRByaJYPSNbJdwRPPncLmydPkDFP1JZ1jqSVjxpikxUTdJcFhqCv2fcHenfnRp8m2gtxeAw6zeL9FdS",
  "key17": "41CcqnYv966XiTFyAqv2ncgbJQk3EpbwJ5aPbi3VtSnWvKyeMoq4psF4wuYRc1WAXUGcNTvwowvKhXk9Q9BWrTw5",
  "key18": "59DvnkzjePuE6sveSQjUNu1CYqAHqhH6415yY4uwpx2A6GmdPx5jwNtNTA5SWPYQPYMo6ev7TRVbRuwLRDVmJaVG",
  "key19": "4jVmYSWqkVfDAwzeh4UvDbX7tWGuFus87mWMhaEBQA3eeNkFmy2LgADZfnMnmk7AgJcrqMrZaGLbmHeSerfL46xM",
  "key20": "ZT2iPQbrJowvgFEfxT5a2VBzUwTKghkXRNzAzo5kADTEPH3fqkRfGJSwzW5fCaCpYCMKbRSXzLKhJCVoQF53U5V",
  "key21": "4Fck6Qh4kqtzBVJxPCRNrwQUsAXkU8AnxYQMQ5rCvg2YhDzLbANjQbevxhdrZJ2j1bhMgWuLNC9Sr9y9st8JGzpp",
  "key22": "bLLpGnLE4Ku96F7fQqHroW1Bkhow4Taq7cnjK57KErFQmzE8XjSgPzxaavwxQckGZoUD7b1d2kTbzFAUn6kpbxg",
  "key23": "5f7ktvKCTP3pmFqns64Rwd1C1CFNJVJN9u9KhsvStBwQ8nUQHwWFEwqURLEaPvCMJwJnd4y9TpmoBV7v58uMytqg",
  "key24": "2gX1CLo5TQN8XfRQMBun58W3fnDsqSDzHfjX9gyK8VUY2ww1Nw4MShC4SKFPWJHHT5NvRRq49Xaz576TeSNvuKrh",
  "key25": "2z1CmZjVKkd7W4VRLHWf7K1bHCJbXjJTBv7gdzgtQ2hY2zxB2CtAazpMEhWSoUpMaGQV32NDbsYGNkFugMoAgZ9D",
  "key26": "dpZT3coEBJbCXnaeY4kRoKTfCZoVvUgVNefpXShCctxfpF13e6r4BoyGDk1wgXykRjWNs8akHmEG4ukUqZEmj52",
  "key27": "2wtS7t5hyksAsrgDYqdV1a2NJzuBBAmz4kQtH6wpQuUaNT2KVGEePWmmFZdAZFTxESg751YDo6eKQW9cRK4enT1S",
  "key28": "5oHEuExUfG8j648GTPb9K7Lbv6jcqxTMLysZcGg7vAhhReH4iVNLAN3AKKu9SaLjvL8Abw3EZ76Gu5tUtSUj9Twv",
  "key29": "3RegNSyWkN5GbRysjEc3Ugo5YgK8n871RYXbjQXnjwMKdpWeWr4zFohfyuprv5c5f2ZPvWZj5WmV5PEF3kZ1DCSP",
  "key30": "2UBZoSABYFVCvunxmo8xFGxpsaHuPzkbDNdDsZjYan5LCVaVyYneb4ny3nBHVdhdXTgz7txyyyNARcg8g7ofx1s7",
  "key31": "5kXdmkXS6hCbLM99vhVwyp1n6AeS1fZb5qijRDbGeQnWbDPuAnEDz4w53xAL9ivoegfYQn1WC6HG49CanssGapFM",
  "key32": "3fPqk3tTmJf3Y79GUdc6sRWJQ85ahvaCT6Ui8uqYQavSUPKr3o2DZnEJEsVadbPui6yU86VH926Z1BHoPQppiT5R",
  "key33": "21raZnW3ZZ6RLujgp7AdMUjg5aRQCum4wzbLANaSpgKJHGfj5rRb7K7gvZ1ZRzJNzG3NUrLHuWUrNKwywTBzy9Yu",
  "key34": "2aLELzYSZWPosHUd9wzfK6ZwRNnF3u8Dwtn1UbBi9JaWeLgH8fu6NPZZLhpkAZxCbmRC36cropu734ttPS3QxUHs",
  "key35": "2fZ5CewsonGsLgYwyzpmLfWjefdRqFy5KUTCdXTaJv1SgnGEisT62rYY5tcUwiPC13E2bfmMALHbA9qkegrZwTB6",
  "key36": "5ktn13P3BfvPDJH3TJ6gEqMd4YQxn2dLNJ5zXFQtgVqf9LAQVUUWb4uHPr149sGkPmh8EZHr1SCbP5uS5cAJtpfT",
  "key37": "4iJ5aMV4egR5M2XoQMNQX2eKSVirNGCYZkKxUmYphRi68nt4iqLmH5rxKtguRK9ApToUQoFfoA5SqVTsQjhbgw33"
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
