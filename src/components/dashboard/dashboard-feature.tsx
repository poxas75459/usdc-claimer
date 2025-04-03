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
    "5mWVAVkS7ivMvMtVr8TGb57q8P9BsM3p5cgZngWxYVFP3H2uV9vrLAg6Y6P6UsM7s5C1jLicaVnpqFEWcuziTLNC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WBf2gWuRxQ86uPxZpSTSfNgvtgmjBVdSuWbkQNpzbnW5SkY5nGo2a1uxcfdMmxfm5iBECR8Hw7f5Dd97hLJVnXp",
  "key1": "44vRXV8KzcmwVeUpT4WuepymRuzhVNSJb2iopAHLELY9WMEFyD5wTYtGvizo4vLTL1Ty5ZdYExp5ZPeeBEzkS1kQ",
  "key2": "5HeCQTDW4GzAcfV8WxucR8UX2Cukf8ZsgTgnTBabtyvtDMJZp1thBzbrTYNZj9ntd5QdY1emLTZV1iUXXABxHtzc",
  "key3": "3Ah8rhXe4Pmz75AHkBwzknzxZBwsjpNaJKR2ERUJzu2DvBU1mTYyzR4bWkyZa6agpsq2MgKqDM7kLsTZXA3sqrmS",
  "key4": "3Y4uFKEKw6dZkmMszzqr7ex6wLdpHCRrfZ9zCsXDUUpVxMxaKGKrmvwVCvXKmxSP1x5xHQiYhLyu3voj9tHE54N5",
  "key5": "dLSVUEjKxKJ8p5KciD2RiTvmrukD2Jny73kXrZVzk2HcXxgcx8CUPwv56jWVeB22wegDmssS1ZWsBKX4perwDBD",
  "key6": "678MKUR2H7vovFryFRzySK9K8oP1VnKnRjhxAbiuDVc8ScDic91Z89GDWse3oDSycbnN8ANsaGXgjE1AMhBfLRwP",
  "key7": "3MrBVZhAcwSVdadtYErYBddqti9UdKuk795PZ4kcYVau4fLKo73BkKdsZkPNMHQv28nD5yPBttJtiKKYkUSbVNxf",
  "key8": "36rJXFALhAuj8NfG5gnZcDeN9DmJNymzrBjSNDspFWm1pSdHsakRuPaq2uBcTXNzN2f6LWWeQ2XRD8ttx1qVgb3j",
  "key9": "2d7oaQYX9ZGS2zYvyntA9GewoQmZvTqijgPNB67hKc6BYR1xeM6Dud8UX5dWv7v3FgpXp1xzVpRqh4k78HyiqiDp",
  "key10": "2bUtchDbXxJpHc842PjwJhtx9zBFDBzrkdiyypVbM4BpWc3QRioSf9RzuyXAYm3qt3Wmiv2mytftK6pakQwgG9nN",
  "key11": "5eaLEEcbQ1VRBpQP4JVnZPWpuANTqZtiH3VGZiBSkvW7a9TCQTuaPbKxUpNYTFcGgAMMSEsFBuTzGZpX28CwfE8d",
  "key12": "vPqTmVCRGzz1zzefrsSqYRMAjT7bhrwXiVnxfhHmPawSGpt6e1uzdN59e4ptKWZr28su3Xo4uAzF82cjiqyLBCR",
  "key13": "5Nzydbe9r4n9VvQB7vtFvBXktuB4nQAitCrwUXeATxe7nojzwmFzMujLyGjzBNqNfxKaBAShwx7RskDy5yanLs5j",
  "key14": "6664KC6LSiRtJEaJs8MH1MWFKWQwuVBU27thdSAkuARHL9wcFAcDdxJPiWHascVSyD4wjiG3ggzp4dy7zvpXQpZQ",
  "key15": "5KJtNpHXVxuDvae84tJaFp6wMZcHxKeRJ6PL6zTsKCiwRfJsgffiMyeZDW3GwL2S5VUdhMqrXyqY3Bkohofygn2v",
  "key16": "65BdkjgDBJityoL9gcoJ66c4R2vX9Yz3K6Xa2dFZFHBJyaP3s7nNTMRwvkZ269SkTe4pHWF5ihHBVURpNDL1A9q5",
  "key17": "3Cm4EGEy2GnRfyCQpEA97WP4YcQbXKVK3Ab1j9amEdAwKqZwVULmyQQ6hzDEHhfDGFbzUf59z1JocH9jycZXF9QA",
  "key18": "fDZRSJubU6bEj7sBM8gFnFHCCaKM5XZBTMUtNAyvfcX7HdZNv9wnnW2LiwqHR4R8HoxUew5JVZ6hX6aDigafGfj",
  "key19": "2x4Ug1zzRf6m84d3JTWMpRwehHgvhcGw8vmQT6ghqEmGBBtFkQS8YBAQ97RBEbZFSWzhBrMcXr1njAop3cuCUWpj",
  "key20": "5sNJVFkdoHaTnW3rYoW7Hz18LPDZ6WUriDcX6g9fcxZZ5K2rvjbJho1dx7zXrH6AChW1BYc9FnBFWynjhQ6j9exp",
  "key21": "48zWpbS6kMuH42GX28d7ZRmsiQLSszm8k9r1VjgABGTUb9sPCQ42VJ2qvjJd4PWjnG27maQdBCjF4NzUka7ReSgV",
  "key22": "42dbQQZdjXBRtpmEdHLQxbEQVAHAPfyyqeFXk6RDfVLeBfhozDmDyzgFKY2QM7Rf3WseUabJuukRdoWjoq7sp7hH",
  "key23": "4LXy2UEf6QECF6UGAcMWBxLX1ckiwBXNPzdzLujKhg5wj4Kpi8SYaByVCwFXNyrmdk2GaLLDwysuX6ZsvNF5ZXiU",
  "key24": "3fqRFBT7FMkgP5NAsFxPLkLA5E3YBourXuyuoeXRoXS4JroYrMS1SM6SpxLthHnJzdGJouZzoyzd4Kd2vc53pCnc",
  "key25": "215QNw9CPeNMmPWv1m6J54h5Fb5fVKu11w5cToB2Po1QS4HTP9SFiJiiBV379fA2wuuryLrDrNL7u5D7hFiFFnYP",
  "key26": "5My4pDrF3rhN7Z9CuDzbHrGjv9FYpo75Gw9RCmZhVZMmdFJ3RpmvMgob9QsKgrPdRA8mzky5LwP7WTY4rSuFpnGD",
  "key27": "pk81tfRgGoadX7kKoio4UfJVZ4MKn6ELv1LqFms2D4R6Jogb1qtfjRWogmbNUdnmX9ABpB4TUKRFqQymW56n2bA",
  "key28": "3hc6zuLmQUJcSja3eAX7p1bDNags8j8jYnst65W6uiarouVjrbuXeeoE86xidmKC6yQoQfb1GLXvprbjfPMHt9Fn",
  "key29": "3bLqdUcnLxnTZQ3sE5Qvh26Y7aRpgikcDoFJbqFzvUhV1ZEHAtTvb8mpi3u5vhusAfXQLxNwbexrbTmHW8i1P26u",
  "key30": "49rR8w394mbURxJcjYaf8HzjHN8eHihRmTUPuVSVtyps3fM6JCxyeNbqVFGLfxs1KKP1QxsttV5FzmA5BRy2M2C5",
  "key31": "5dxwjA8xwLnT2fdKPL6ywPsSYGr6Djwdug1gUY4xah1t9QLDQ1MtsKPAiBMiUcKRr7f2c3Y19AXsPdCy6mPLv5Gu",
  "key32": "2zj1b8R6tFf93XcAq6P1afJ7SJurjCNiq7YAxviX392ogNUJCrF1ryTC8DGpidwcVoy3rPbxfQGCt7zScEoKzzyN",
  "key33": "5Zv3xfpDmLeRdxvYSF3WSX6dAfDYgysHTu64LKTxrCHK6xU85Q1F2UbyYGWLzRVk88FgKFavF5UfyG9z7jvfB67k",
  "key34": "2t9t1NZvEsk6DpkGhpfUo8f2XT1msXEmkYuQZnW69mdWpWo3nVoMJcaZUV7gb5FzbPzvwbF4JucNx6P3jCWqE1n7",
  "key35": "64F676kouaQcpsXkTxxxg1VFQ2ExNRnAsp2v4x2bgJAuBQfG7XbytBPGdqDh7TxNxjgzU8mcE9X86igaHTUMcd5o",
  "key36": "4JwP6GZsnmN9XKz1X9wJ4h37VUNZrB1RhSanWNpxYt6EqVFeRbL7YPAfmaaJFhCTFC4bgMyWxudvRvmsPEcoH2u7"
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
