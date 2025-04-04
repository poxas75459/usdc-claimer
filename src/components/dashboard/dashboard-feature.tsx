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
    "3z9yafju5nH7saPh3KZ9XQnaDQoUT2XzSomLxcFMVYA5imHdVS5hSSLVoi5QNncjK5eNsEcRVSQJPjcPfpGHh8Xb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33bjwATs8BUH6Qxi83kkDj5481voZ5EKh9K6ybvFzvSMG6dkjTRFMTXAbng2ZvFv6X8B1bvJaV8ezqQURz1mwApv",
  "key1": "HDYStfZ8Z8A1gSRQ74jDoeRYVbGnoCdHSBuDsma5Ui5k18gCAnS6DoS5FxDV1xtPYw4YMA1kZRjpYNFSuBMxGxs",
  "key2": "2wqXR61FQf9tX9ga7kZ1oFUVTapoj3U5CH6D4w2fWXttsBGLiCur9A4YbXv8ft1a1EZUnpmygMcP976CJi2vTCAv",
  "key3": "46aGntQX3zBQ3GLgarD4x25KCYc8XMBay5t2nNLRjH5XfiPuHLNhgAwqYKRmU5M98DfJEi6ejqszEqDQRAgEkm81",
  "key4": "GV31ZrPKjQ13VhyqW26fXr7Kqwv83NXU1ZrLcXmXtvATKQ7bFctNa7pPrip5KzN5nhpNyC18s1BH4smD53Qah9r",
  "key5": "QRVkqb9R2RNq1x4i9rcjb7DfEa4tqfN8Kvf5b9UTE5CR3JLFYiqm59Upza7Wu1c61MSZ66G4aSLGm2GKEghz6Ef",
  "key6": "2DfMsrkCrWU33aw53DJWFYpEHK3PvXifWEq21RAVP7LBzLF6ZsHp43Db8Yp74roAkyj4Tovs4fsaxYAzHLhjASRV",
  "key7": "5FtT74FeksAHPQu8rcJ3eYKavdh6L7V3vsyPDQSSxfgV7XsT99axonYnuRY1cLkamPVz3yDPvPBwZAcn1s6K6z2a",
  "key8": "4VzAttXTXu8UDmZPZTUh7nvtSzCp3bM2MD2HGAioyikr33pdJHCzkLVhwwgKrkrYy8TGhcAzCzgDeQ86FfkejGas",
  "key9": "48MdweJ3Gc5c5nRT7ZrsNx394JHng94n1Gj8LdiabULmeZGSpUkcDqj7BvHW6XRaE2bzRKBQ2QxHd6N9fo2QEBxL",
  "key10": "4TCH9z1EjpLMxi18ZDkLTshAGrFwjTNhWnwxxjRiixxSb3YdSJ593pvee9ZGu1Qc4pk7WEiFWJm5LCddD3QuyeFj",
  "key11": "59tgXsKDzXc67XV8sSt7QKnqhkFLWCMSwrZ6JFWguD5RQEW72RvjNr5Z5nuT9Gj3h4wjvc6UBzf4Vc2M57GNsHrr",
  "key12": "5eWUpkoS9rWRXqvBnYmU4rS2tvWszTqndGubVfTBfnYEpBbcQ9z533NTxd1hpjGXKhB8voTRaGfdnZgMJCqNWdKm",
  "key13": "4wg1tr6LDkzJyEw1wNDu76LpgF3wEzTodTRtN2mbdBZKu5rBg6TuF933eYCFXE1pjwg4EtWbD7fDfeQ6UB5yQ5qR",
  "key14": "5z6EALdxZusutYcX2xy9YcwV9yptLYSZ7j4TpCRJiupnhktJtKrdMLrX41YAXRCM38on83gK8TGkTm3uu7qFR4wK",
  "key15": "JHfSFKBmdtydReodWvX1xithnh4G1VLVXQSSKjoG35GEY8aJ9gcwiQcGoKAiqCD3Cqpw1fZRjhkWnABEUqZ3ggR",
  "key16": "5YmQNFDgsAaqJyzapKxS7UsHU5bFZc5Lf3dbRnmfE2NqLJ5Aw8x8Qoa5XdU7Qhdh1uwMMSGidp33ZiBCWLVzjaHK",
  "key17": "53y1c4scKAsYMMQXmJY7zmqp6ywS5vH8MANCs8kFZcJFc2qe5LstTW89dzAQ1bV33FfiGcAYEufframYh3VR56hS",
  "key18": "5EfbX1Epwfa5gi3BF69BN1G5H9Ga2qAH8rEpxv97anVMmPUqmLbC3L2a4s1kU6aBZZcW8Hc1i2SJSJTpZ62JVQ56",
  "key19": "248gGj21JswrPJhxTLR15Xqzqd6HPtE9FCe6KrAtLhBttc9GAtiCVMFAdiJj9FSFyxLisJmH1nMfMzVKTK3aHhgK",
  "key20": "3ZEbdHJQwdCcSTXTjVCXFxAhGkJi5gwSiZdZ8ziPo9iKMvxQfMLzLrwpsxCQMC6hMXbEEmXfqBHVAV5LnCXFeH1N",
  "key21": "vWMpfWZZvu6wS3cwNyygKGqUG2bpg4aPpCiUpDqaCpAFXSKLquq7QCW19eBEFke9vav2uxu9nmCAQVY2mYSfnVy",
  "key22": "2i9o64K88Fd7L93nCPMFawLkcom1nzEENwGtqyTZVDJuXm1EfsBFAwWrmWz4L4M6ZAVniRZvk8hcmdd2QULPbxHZ",
  "key23": "HmRWeBtD1uDsyGQDYWW3d71RjTVjZd1ukSKARaw8R5AsUhmC2rgAMbGEHPnsKfxpT3nWVKjLade2dRigrc14zpo",
  "key24": "3PkngDt8cn9vr9oEVWW26W5ZaBUXZjYQFFPc2CNH51LwwbAdGgaHxh9zpYxNpV63hUvy6eetJqYFvabA5HTcTaqv",
  "key25": "4VAGD9KQJ4kWJEMAsuDkmT6a82mYnjDNSvHDpNhBfTFJe4PzHrVmcQT4UYNCQRuxfgFGnThz7pd13tms75jXt3sS",
  "key26": "4NqGjNAGcCYtPTjH1XQ5VJnWDQv7U4h8vdumsAiuDxJQh7y4CkJoYdtmeMc1s41m1sf37gqWjn9vegUR5sXZGDGr",
  "key27": "4VcGQYc7Dw6UbGxVH2op9iBAjWvgCWSD3P1evkZ7BVdD5EEsSuRrrsANbPqNTdyK4P3JdSgS8otMRHbTY3VVkp2v",
  "key28": "3xT4ZjBX4oPd7tVdKwDXaXGt1VdX9MG7PjC8cC3f6aQzJoh71rC8yNZUUjfjsi4cJfDBvPruFbfGYxVC6rHu7mKS",
  "key29": "X7WVaWmAHkmv8oZ6yc9w4nh3Ss5ry2473rkhGUp2i557nZJwfcSffbVyGMuzX1rVxQLCw4fYdGy11fHwtvbaXBw",
  "key30": "3ovYVVk8BViRr2BHpHyhdZqsk4yjcmh6KkM2WmUFVcEfg9yQVTbh3NtJQ5Q2G1RNZXojkndQojPj3y6ZC7ZKmmQf",
  "key31": "2P8mvgnyR9VGfVco44nYVJyTPnuZ4TCnKFhbKkwRh2RBWrU3JRpuYRZAvu37eWMA5QyCARpNtcwpvRY23xE9G8eM",
  "key32": "5W36LXKoi1WWYosFSvYu7URU85VwQcmm7edWXKAAoY6UPPuUuYnvGK8xqELzGBvSmvwpSU4jySBn6unsjxPVQJJ8",
  "key33": "U1wVZkaL5cMbvaUFiypK5m7doiGgLmA416b28KZnKbw1tSPJxYysrnjeQDK8WERLRVXZ88gHHzs84pSnz9WV41n",
  "key34": "58ai7E88HrKRbWADMvEVv2Dn7co9szaAEEHBT9bvcjfffY7gjnmnmRwDN12RzqooVSgnni6vmyv1m6XLmiZUJd6S",
  "key35": "3nLisDXoX19T28NUMbSXRJZrz3TAr1HEE58ZDFwjSj79QNiYeedm8tSFceZSwfqX9z1WNgMR7G9E5Ukqfv4GfMhX",
  "key36": "4TfsZsWUAHiWhF9c2yfjvQ97fBkw8oAhjxBGpWA1vXPvdAZ3MnNfd4NmqxTtb2953XSLcLEFfDSUWwYQHTgy2khm",
  "key37": "4ptszWYD3JdKCNwWJgKMYCdBj6CvyiZw9bqBPhBhjhk7aLdBDVo9hSLuemuN9LfWoYE6G43sPz4u3oJQT5Fy5VDy",
  "key38": "4gC9QGrGWJi9YuWbETVzRreT5sWbFt8WUnJu54KHgfkf7XpyHV1hE3hqCPJWXv4mF9PTvZknpYu8bnig27AJsrWf",
  "key39": "Yy3Whedb1vgM4UHsDhG6XibZtULu7e8Kgu17Z3BdzpKsRLZFJnzGiBNUp2LiSW9MZapuNHvefpLNtBFTc2zjnXZ",
  "key40": "4SDKvEGSVvfZE8ysx9AuUrALRBdbTDXhbxaV5nPanUqo955Lj8TM4EJQFV9YKzxxwJd6pmkQc82ujYSBijzTaQyB"
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
