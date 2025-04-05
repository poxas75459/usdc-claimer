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
    "54MC9mDnfJCPG1RXc4EUoTNy9hH9cDz6CCHkCvxoxxghkW483JdK99tAANGekqK75UxYvRR8xY7n6giPa6Bnz7ua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q4G7fKJLGnBAXHBvRpsJDbirvpq9ug95fHwSZZNjvJUKnUMK784dd8Ua9PwNqCH8QZAnZM6gbvtNFBwASjSVox8",
  "key1": "2DLhQSwKwYdetG4HXTjwfMbbnR8o59dJmpezxTrtpkTWmiFqgr8Cru1qDSgyPTgvN6doqj2EcF3JCJCmqyS1EDsi",
  "key2": "edrft1oG8PhHXzUaxW9Z6XX5PBty3RfKCKXh3dDXPBDgHA7BHqRAhBi81CVxtVdwxNzW84HSGjuVs2p4Z3i8fnk",
  "key3": "5ERrP4y123nD47bnSUY3oUgemLpm4iQiX4oPiGKtXhYEoGitHTCaH3n7BK3FrgUSCW4s1KKSZxGcY5grS6RcbRPU",
  "key4": "3wJRsFSkcZdJQyzWKBRdnEbDViejjmxEMMVAZEiLS6CEHqpUA83A8kae9wJrsZyztKHqFkwrUvfzsqarYSKRp1Lq",
  "key5": "rtDiiPQM3RjEvZXg9qPEMNsXS4pVeJCFXqXFrZkBVG3ixqs9N92CEe4Bi11npuDDjbY4dAXBCL4vMb94jeH8y9A",
  "key6": "2un6N1SwcAkxrTjEPnobsDXvUfqJJRXtfNVipJZJzxJnSVg5senSQWBro2i1mdTLV1uYrWww6d1iAdhiHborAvfY",
  "key7": "5W9PRnub1uMN7qQWD44Cjh9tpEb3DezNc4X7uuKpmbH1Bqji1SsttGnmkvLcxPngn6THpybTT47vXdVFgPLVm44X",
  "key8": "3y1xV3SgxWA394ALzEXVsSRNuXj18CzTsn8CTGJsqyLFkbuSCEYxrBRa1p3wTH5YiiXuWtD8dKApdqGa9Av8kW3v",
  "key9": "3VgFMsYAj8mnobgCYCUWUcPMQCoxFQqkPp5F8mQDRHf1AWfEBV3nEV88u6hdsHQ8LULqSPPKQiGzqmZDbBY7dRKF",
  "key10": "2bHHHSbQuA7K234XHdWS3PMmNi36dXqHuYchR5Rnb2KK7YUAvY6X7HyEVYebu8ppkNqkdoo2USCjXCKuWtZggJwp",
  "key11": "5usHZohYbEmSqFHNfEUjp3nRtGvXdPnCeQVgdpgrRPs8KLXNib19hV8Ak1nnmUWj71H4XFLPqx8d1Z64YuENaijm",
  "key12": "PSb21oh7KiiH28gp3YH3dunHe3mFFoJugfKdj7sAvscCnVnCGKAnTSzDJ7XRc3sSGdA7iQWh82uhbpbNc4WiRPJ",
  "key13": "2yZo4ouMqnS5RkXBdewim8Jty1TwjNbReHtGoGGWmwEUfbVqeaG3KK3wYdvqfZp5uNJeW6poqs8ANnSoQn9WBGY9",
  "key14": "3sNY6wgpzXryLJJcofkuLcAAbtrRyyBCpC2boUK8fP7mm6CMTE2izzp9Am86VSoUvscnsSpkBLqjfLJpcfkaAnMW",
  "key15": "2oMQuANkmoTgUREygvjbrAb1x42cB6gBsCQzmRfwCE4AwHHWBZR1JcxtuUDbHSmeWiTYsVMqsv9EN8uZRBXSGbgo",
  "key16": "3cUmee99ia3wy9RNBGvivxufLPwRqQGCpULydX3q26w5y2jAx4KMxwqc9L8jUQ6ZCnKeSY5NbTdXuyjoAB2isERb",
  "key17": "5nJwe62WC7sddf8So5HkvXCosCbJpKFNomGF2qcbnucZ1yKNEDhfdm5yFKpGPAuByQWSjtKmrpULyYBrmughksg7",
  "key18": "63vamF4irmqh8JFHMcd446UmCgGckViApai7h12iMEyWPrzKcTKhXqcUKae3xJsgNgoMZ2Ah4uHFtmdU9pc321ey",
  "key19": "2GxEXqXEggQprQjYRJkUdRV3GopepZuRLELE3qRdPmT9xrcz6BSnY19EughUay7ZHH8QUz3HB81jV33sTKkFabJS",
  "key20": "WeXjxaie1rt37aEU4pMn3SjbNteRRwPAzZndf8v1SUdqSuYzxMn2AHFGWiJALU6qhVQYPhvuKt7ShWF5VxeQcMm",
  "key21": "3pxDpq745QsJBfgtsADu7iDxD2qeJRg5xzgsgj7xMWFKuJcMQm3wiUY5XVP7xiwXjYf87FnvX758vQPtYzrpSNx3",
  "key22": "5htapMmQTi6B2Z2SuEL2gyeV47R3sdX6cr8sC9ABXp7ja7xGksgkBTdrR2atpSHvW9xzBi9ESewZiaKJm5uQaA3v",
  "key23": "2TAXJCYjMdAmhdhWk18neDt3jJGi14nSbjd7M2XdhZDdNaz35eNzEqG6QSGENEu3qHTBEjkJNzTiZWWnzfssiBiQ",
  "key24": "4k9M911wq1wuwtrbPvRH4SnBtAG7XdnTo2t7pSQJmL5q79xHbJbTphMvXoBbhXuTgg3GjcGSjEAXmkBWTbsnJRLC",
  "key25": "4bZLCbkZkNZJxVQD6pEcQmvhtJEFy5zXPQPDD73GairvEoqZmbXpAb8tyGiefybXjyBn1LcuChdHkwrmYVWqjjC4",
  "key26": "5i7j2XiWz1FCAHfB5KFGZHpUpSWcj9TnNHJ94kxQdcCZ6fXgpGLnypcD35pzzaZ3Sijgd4A4jjGwfrSKwpWhugtd",
  "key27": "2VGV2wPMtSgidMfrCpd1YgRzPsgSWb56Gv9kESMKajqKqtwF3z44GZceGeMvMwX9oazZUi9igvMqUcQhD5i4oKYp",
  "key28": "5mh4NjyXXU2byL5iEafrgKmJyxPVV2pnbBsdkKJ14fQ6tWeHckx6GyvBWDWfLBGnGNsTN6NifwL7bsKXzJxd1bh",
  "key29": "4ntNasW96rKpaVZufqnGpHgVULtbEUwB4EqDHh2wLV1iy5sw6NMsPk1VV83d96D6aLbnzweCUJ6evXc9bm6pjvWc",
  "key30": "3h4idAKW4RgnjHEEdanGf5XfmWWLM2KQi81qpwyaoeJt5FUexW9LcrbJZb9Uu4YMsnB6M8BLdLmz3ghZ8EsT8Tzy",
  "key31": "3NmidggycBEeWuAviZ8yHhXsgsL9KuVH3Wa64rFL7QnJq6KEiGdPK2fPDpuFHTWU77FrwXAJUJZJ73JzMxGbfx7u",
  "key32": "4GgfQsrVXTiiBZP6L8KeckpiKYg4RxLB6Ug2RRu4zMxrNJKh234Tivh48CBpkQQpX8ezRumsKc8AK28PxV42sPH8",
  "key33": "3hFNb3jDA4mu5RqNNY7KbkSq4qs64sAfZqYzgvUopZPcSQFCAerrLcBZTKM2AQmPgJ2RB369dJmrfVTYPmQ8Z5ob",
  "key34": "2FTiW7KAvtHeWQSiUvaXNT8RGHFCmjW5qvGwebd3PebvzkbeCYspHJKiHcYeRA1xQsKr1nz1CdmEaCaLpdNM6o4i",
  "key35": "5KJUhKymNfqTNwCDVatMf9rzUKwBwtbW5koH8cdTroGR1Pzg5c4SNKbSGoPaLyoW1knQRjMs4wH2ByjacGx29A3M",
  "key36": "3othb6n6gnAXQNic5yHN7Yc6tiiKvAt3MBqMnbSfx8gjXxSYC5qGkMR9tTZE6332kFoqRVw3ycjpgcf74ydsbQPD",
  "key37": "2uUU4gxZn176x1d3Em2qUVfmvFimAT4acmkshSkvzUhC4KnagkivriuUuRUzkhfXhNHBzaGvd9iTjujwLQ3JvH2m",
  "key38": "ZYrktVA1AbhoXhvgUnv8Z4unqkbJvZwnB9i7KiH4oAZkC1LmsyRAfbu1FFnF5abKNYKEKYnLNKgzmGEqkeCh2bL",
  "key39": "2Ev8ZS3Bdb3WGAu3gFBcxa9bqYRgeoXEVGqyk5nRdHcy7vvALiXfyZKy8MzqVm2DMyShcvyzjh2VDJQ2Ek8RgLCV",
  "key40": "63TtzsLmYtpST9emrGDoLDMumvYj2hSBbJbpBTtrzsA6MrP91U3zXbssX6zwodQbidyeG1eooDcKKHz3bPitbJYX",
  "key41": "493sCbNfVGu4ZJK2fr9DPD7eLmMakEzLuARjvzus1P4nAa9KEi8Rd4DWkbhryTyiGEZ9S7pRJNo2oRy8vHssXAjG",
  "key42": "5PNbk5R8xCQs9LmKiP4Dv2Wu3PcJ1UbmY9aqvWJccQnivfVGkHh2anAxYSaSNgLJVMZRgnw4ny4373yPRuE9B45X"
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
