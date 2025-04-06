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
    "5nrx4aX45aomWitLQR1aLTNN73N6V5XDmGRZShosGLbnfcg2crN5abfg6JsRfnmQokJdQZdQn3Zftkxo7sir3VX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VDnW3ryAuitbTLVtSeNMVctycFDcjfkqPWG3GKTcLzL9LP14SHWJej9jjwisih1coLSKCM3TTaTw7JcPLndsPtZ",
  "key1": "2JPRAgXVMePCGodXkibm3RFzLa6e1McgT4Lqf96eyzUaAj7u4egUr4HY8PjLJ7x7bsst1nCh1ALim8Gb9ZWT3ENF",
  "key2": "i9VENvARcgdtVtReAFU8UnqbV7cC4KdH1BtM8xs4JAGQvGRhvWdQxmTQZw4EQmMVAJJnjUYhWRsFts2gti1u31b",
  "key3": "3HxUnCk4Wbq5ECfgF4Mw5fYttPGyQ7FEG3DUns9tjZwnXkziXxQDVquPi8URTCnFjFij9NaJgXZdRup7mJJhhQrK",
  "key4": "386toeg1AC5xgty9Amh4DeXioV9No32Qk1rc6KpTGqvYM9cviw8HYrENENffFa5LaomWyz7DTCtjLTcJ1oL2YXf5",
  "key5": "5nwkeuesTDXPofscFfP7cMpDcSXfvJEo2VXBNx7F8eQV4WXwybsKJE27wrRnWoWarFRTn1DuUixA7pTkUzXQWHtE",
  "key6": "2ncT9qfaaEJmMnHG6RxGx8ywdaxKnrfsx16bA1PcWmxk8GFpFdG6vAv7M1bpRdHDx9CPo2nvSPkph2dB5nevXjv9",
  "key7": "3AjqeRDYwcjw6gbDxto2JWpakLxcjC7E1PxpGUJ48RAPEbUVQU5Lf8R9y6RmW1TJz46ykVDFeLsygJKzcXkASJX2",
  "key8": "2tXUWMeNFDxSG5AAdcWifsnEo59Dyo97ScMMuQKqM9stP27Wq3199WFQFNfwGD7TgyNgeegs8BmCeR3g6Udso45o",
  "key9": "o2QpAMmBDiDaCHE6MnT6Qikwbmt5NT3oufXQQAFd8WUaj8V8rztqMcR87yrnbxTGHLQx78yYnSHCaRRhsP6zbc8",
  "key10": "3Eimg7YRvba75CfKozCmAYAdmYHATVL8vtz1ZzVvnquTnfJEsoq6HfkjGzh9vjeFvhgay1tCUwiFxz22KeZTG9ns",
  "key11": "55DZbvgAmcRjJAS9A2gBx39Tb3gFkMwnmzkb9jPCnpDRznyvto7RSpNcqodrKbew3u7sNndiPoB24nVhY25MkbZV",
  "key12": "2qD5taj8CibaUnf2ScFDrezr6Ap7QHAVig3XqkNM9VCAtgiBawtRjSHzC9cbzVT68RKW8FyKLXmcXA1okGWvivFg",
  "key13": "5XMBC6pbptKBTqFpSENjjBz24AekWJjPScpBapdHBamoA9msGmZDurcpMDM1F9p4qqLpfML2HS8J6R9NiExz158p",
  "key14": "5ANqJxNMzYqRgnj7Z1xwjXNZiYj7WugphB1EqRYfpt8xj3qECYK1TYVoFj8VQwcC1FUFmAAnc6FCTf2raNGhuhA9",
  "key15": "4FsRkTaLirgBjsnfmHRPA85MJBenyShneuK4bKAjyG1yNizCswHkXpg3Y4KFex1ZR1f7wg1ibgvYqLV6RM68Qz5g",
  "key16": "2iYfx1zXH9hsmBiZRc5bYy6vJ8SwqPT4zhUzz3fetmDuxoetgehEvVhqpQnKACTUGkRgzXVCp6v8Wnmmrhnaf2KC",
  "key17": "24MF18gf2oqwQAeXaBuo8duZmrxQk9TrxadLHxpDBnJfrXtBDM5JWRpLuWWLNfkp9BgeNqwiu58xKsmbjEwxeyE9",
  "key18": "317WCm35W98W3rcEVvxo7u3AGPZEUpUS4JqSeXJarTEnaraGJm1wTyAv529xt6tqAhAHPDag5WvqzRhw3ALwDqBY",
  "key19": "XC1pNcXmq1KEumXi1NaddmZsqnLLJ6mQjznCRtwwP4Z8B97Dq2JcRkY81its2wgFhrc87XGHuUG43yzxg37uJte",
  "key20": "23SjmApke8Uurf7AYCTUddP4JVM15sg5FF97vTGzpTHotTff5xWCKQ7nqAFdkGqbhQa6h8fEEoTrMwqyM3Hm8jy6",
  "key21": "5T2DYEYAm99fHt8VsYf6QQSbsGNRD4RCGpKJty4B2kaQPrixTPBPDGnJyeR8eBZXp1KEeHjmtwg8AK3ZJGikHQ3h",
  "key22": "6qSm4jHkb4V1EzV48QT5fDPE2Xx2eNvJ4hJnveBm57j357Ay6FdgFAmNiDQmaUe4KCmH85hKCNgoFTijGkiD9Eg",
  "key23": "3vcLnuPausWzLr4nNRrLpNqqJkKr1FqF75281J2KhV8raxHMnp9jXzs5RnbjfHqCw9FFVYeKrbBxtSCAiwqMQJjv",
  "key24": "64myGMisqhoE6Hv255prDT3vXKY5yRkzqne2wZGxZQYBKS552oMFuRm1W5tfkk29EDzih2EAJHVT6MT1FXLsDf88",
  "key25": "421GXWx2NHjcjhj7RKKXgbpSp3D8JNzMt328xH4LWoL6r2iM6nqd1jb1K7fe2hLF8QHibTMx8Stpxh27DGYu2EGn",
  "key26": "2nJ9aKeRV6kZxuiE3Y4eA3UvGcENquhqnP3n59W63mDkMShgVLvANnxpEFnP9ShBed1d1asDqZ9ACBuFhE9TLw5c",
  "key27": "2fY5qPSYkqQjWuSq96yPpFSd4wnUe9MQeRxX43s3pwd67DfSH8jwz13uu9XbH8EAwXqCdcsk3zKMcvYPatn7a3bJ",
  "key28": "3d8tB6CY15QTyYgZXn8rUgZuDddJpZsAUTSpN9wxLUE4Z9GQWXhNQdtRkkgzTuBeXiFNy7TS67NVaeVzSmErmiFn",
  "key29": "4osHpd9drCZxkDKWFz3x4ohQJ8rNEAZfLF3zkM8w1pQGcLvE8edRaC93uXgRsB62MvFVuFApzxfDKwZyDWtwa87n",
  "key30": "3MW9yhgNFEzwmg55J7w83dNNNVcMi883jcMjsJ5qZJc5YUAUKjgGTcDMrHyMimN83djhG6KXnKMzUuPvCBK2pdEn",
  "key31": "61wz7hABGD3hHdYysVBs46bma4yBo4ntmCLQqjLNRVz4b1yHngxQc5zHm4g51n7McBttD8BozajrKDSd3HCmVu9J",
  "key32": "5RG4E76HxH339NXApF6mBRCPTy3QTwYcRt998nzZTKzLo8rNBT53uzGUem9NscJCgFg8WygQTad2DynQk28ues7o",
  "key33": "5t6tJ2gtHRBFds6zEAwBS9fJ5NsfYNGwTwy4BtAfA2mC9CsD3uc8Dw6WbT49Z9Fv9ggLy1VSY9RgZtMxqZjUfkev",
  "key34": "YwVbFP5GHaCvBJXApkm4UB3gGdfe3P1hf9844BtxYcWPUStyPKwMLkfyFdnyGVvHpXdBHR8KcGhmjcyUi4mmEZG",
  "key35": "5Ux9hbCf2qAWB2g5paB4ULK5DQykH9BBKLkDW7pxRFgbRoz6Z56tc8Eh7YdNBnnFTcyZrL7z6MKp4DJA4v7WBcuS",
  "key36": "V8WwGnavUAqje9yYqn9G72Nga4wPx5yMAXB5fvrZgW6DKi4U2hoR2JfPbaQwwjLXkz5FDkCTDT3oeN1gUcfRxaH",
  "key37": "2ApTG6XJ7CVJd84ja8iZDWJ7fdT1iaPHrazcKApPUek3LFF4qfCFfQoXpQtwvdJnzGAbGyHmwXuUFf3i7DpMqQzt",
  "key38": "2mNaTu3PzKvgic4AhiBpEDDqJyjYYXo7ESTuZg3zNc79LHxjrrwiFZvXn2ozKsECx2wS74xajHfATjbcqS7WNEkS",
  "key39": "3ksEGpBftS71gJE6VMHjEQV9gDsUtnkT8MYgr9wByq9yS5bsRVpqRPLwBbagHJ3cJvgZ1ezgVnRCDQJsxjGL8qWj",
  "key40": "5USv8w1uWia5wSPQb1kfWEsQ81d53EBz2nfqhRF4U3dWfC1y1QLuXttFqJjMQqQJcL1t7x1AZWNbCsJxS5cXzXD8",
  "key41": "3M5u5NYT6s5acyQ3eLkdoga2mxNgeVdptgRYdLZN52vFGPZqgppqfH472MhkiFsUziKkPnS9RaqVVqqHcK9AeZ6X",
  "key42": "3wQ6XhsvY8btoZ4pVpF9iXPsTqisoieHomAcaWWY1mdVWVge52CafbkVuKmWQ2Et6dPzu6eLVRX7mAfABNhHEoJZ",
  "key43": "5HUujetZ14Xpc4PAz5BzZaNqSd45TrADEA8w6ykmKB2jxCFRPVUHBQWWj6tDXFBAEkRtvvJVF8djDGowPoYojwCa"
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
