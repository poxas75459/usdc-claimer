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
    "3otMZMJHcZMHXyyK2pYADqaHrWVLf8CmqshtTh2oW16HnkzEzrpNco6RAB7B7orTcCyWqrAZzE21BM84gmA3E4Ht"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5foi3HWx9imhrzQTUuEdqDA4VGqDfZYXiPPsUQHd2U7zps4tfwpJTi91FfAWTzgnHaU5qFia6fs7fodc8FZS8zB9",
  "key1": "P5ijCLHkgGv8E2ZuERNZfesBA2cMP7KZ1RMMxoo8ju513wwHazcpzEFEKV1Y3mT43XUo2TsmmNc99JsasaxffLK",
  "key2": "49DVvHMcjXnVyw8uKvWWT2WEEY82HDH9TENRyQosQKKT5wAHFrn9QoUvsRUvK4trcWsNPdU3cSGrNWadBrGSJ58D",
  "key3": "5RZuXppt427TYd9bjfvuNYfUDjNQdWzFe2yCMRCYTJf486WN3jLSZd2PnnJk7UXR4YSgtThw4LBmx6r2h1ATXwK6",
  "key4": "4b4Q375FmAeNkaCQi5gPaNVz8sHbm85FVkdbASLY9zVCL2ghBMTP3v1Wuxe7ErF9MpWL2udpui2X9grebeLRzEuS",
  "key5": "2vHWsEP8eGs5kysreDeRLpVwhTzSeRMRitAtNMpsG9n43ZwuxpYndV9rwFtkDZa2UWxM9Cjijjhr5bkUiv3PyH9H",
  "key6": "3MbjYxo1wfsZv9RkYFmVazZoGNVa1MyyzyFNYxPZ194ffYkuc96g1qVvuPfcDX4KctdRSiiZui8HtBPYt2FFHszA",
  "key7": "5iM2XoFA29PNe2ajR4RygGdcyriTFHdyURmbZgoGjgExiyBmQevXq67DUVmiVtBJs4Gukf5tPXchg4gZ7i5jfji7",
  "key8": "4F6cxgLuP3B34p1mnkmS75amSS7rYqFXMZM34X6V5KRFEVTGq1qARLssRPwpEUPqyGrUbnbSsRHV5J358sPQEtQg",
  "key9": "4DmakcnX17pMp8XphzcmUJGprQu2cC2KZV19pSqiPqTkbNi2DyQrW7oSJysLPaGF8hPAUGP8VPT3E2wnnoCZwvG2",
  "key10": "28EYdNNrKADT9q3SLdAqHT3gJjPKmVM2wTLm7UznvxQAyANu4jbJ7jtWFB6NSUMsJV32Ee4VJu5nzw1HvkC1qNj7",
  "key11": "3KnQnJQxGbEfkx6qE1XJ2XLGajWyfYHbi4ancpfYYNAdQQoxfoA4NHGryz7MNxGhzx7j4tGwjjZKYmfsKvATwojM",
  "key12": "4TQ5758chAy5NejRrhxC9dvU6SsRz3iJ7E6sExYyc3XB3qS4coCrYSWhBWV2FFxwqWzV6fbFxuGAmDFjncfugA6y",
  "key13": "JDfoZdVgGJbiJq73H8vh33hfnzs1tfWRxr86yzUWHLVpACUZFoVE5Cnd8uYdoX5Sgrx1WsLQkwfmxMTBK1DDGE8",
  "key14": "5B4yfU6ZDu4aaq7sTf5BHFzM64yCPbU2Pfu6fGb6zv6xF3DS5pByU5EXFhZbuoifcAPtMRYi4PuAwh1jVkzw3Mze",
  "key15": "ToiXQVQPXJryQUthb1PutPaVxuGLQkxAWDqAXH3jmeUhdGLPMtSxS1h1S7uoFxcPZLMNZD8PEngng64y27oiNxj",
  "key16": "2A6zhFoZwuLPW88XR9NVXzK4GxgLcopM4jxcaE3Ad5sdow2BjmmTR14Gt5N6ttsm8Jtk2ejsYsq4UMExbYYDLoSM",
  "key17": "4hr8Cz5qywQ1Y3diLMfjv5zR5yNr92Xvqvhm7d9ZSyqggUHWFFaunTpXDf6AGQFZppgWVuEmABybfzgLSHwCdzjC",
  "key18": "3LjN3Xa1oLm6LVt3rR7bNiQfD3EdLKgcYFpsruRwBAvswDyFd3dGnCx7bD23WQzhMKJyEyv8GPxz9Z2YiGwS1uQG",
  "key19": "2oHKeguK4hrfw3a62XE3enwywFbdifLKFg1UPZcMzcKyeyXYcvnKB9LabyG6o18bKMGxi8A8iYFSbGt6YfGTdXG2",
  "key20": "5b8jLWmcPqE4DvkKWrfxEBfNASwvaNEpjfoaEyEPk4AaJzHQJ9znDgsWzvoCuxaRGpQUJy8F2DRstcJdQz56qXfH",
  "key21": "5PWvi34J5sJwBPmktZ24LvgBrsjfqDVCwaZBcoqXnBa5KodXY9fFS8vWDG62vXRGHVDyBK6J2Vit32dQfsXUc7Xh",
  "key22": "49X8RGBEBuF5kQw1gjkoK4ayYzGPew7u3rZpicyks16aXkpboBNVFWYD9546V3aht3Mtqw1viFhvjUfQhKUP8X97",
  "key23": "5mvbwbuL1o5yF8DFLDfbk8EjhSJSzz6XUb1kq6BPVE6MiUyPc83DkAqnb5RybaTxaxN3FKQ41h6z9UH8MCPpCLdn",
  "key24": "27DVTo5FJzH4h18g19DqJ6muxK5RCU6ayu8NJU5h7DVC7EyKQHoNupXcoAKMbfmq941dVxcWnujbVGNt4y2kcLdN",
  "key25": "4JNJBqZuHwBkrmDtfmz5htigSToJjRPbHiXAST2kFY3ktUoyn6fdqQuQAnpuDCmZQjwSWce5fbgTgT3kUcrHTQxD",
  "key26": "LUSpZTSHdZjUXVD7EXyKgi3yr1FYKVRjJzdETZBGjBU6XgDUChpVUgH93t2mouqEd42PLoX95VKvcyLRUiH5enD",
  "key27": "3HFSC6pZNsNPnUc5PVjPF12TmPRzjLtVZ22jYH5PFdpRAd9HayFPCby1At1XvnpNqUURHQAJywAXzk4DEvwSyoVM",
  "key28": "4geo8A1fsnEGwSLqAfrSvy6ikddedb6g2BENCMNVxZAJN8FtNouSRagqscLgJ7JNqMwoH1fLi2SyYuTUKLzsoQ4n",
  "key29": "5h4rLaJd4WJXpP9TWNtiEB16oyLEsX2byE7yFrgL4HaLr4WqW2vrXcmfCvaLpucYwatZAichAWqu19PN1ugByTV9",
  "key30": "4Yz1xt5A18trJUrYLFd9tadKjRW8Z3esrW5L9zc46khTUihXiratYsd4PFrMQ7uivxuAPzaUmueWvk8vr8wwhKqH",
  "key31": "2sRJkra9VqXrtjYR1uVzjSTHwWqxgs521gGMMH6MGr99JCUFpZK7Xxu2JZWhc5DJFiPfKovRgpEd33cTQTLszzst",
  "key32": "2JQJDPSUGpw4eTVSbgKP6q4Tkku4fR6TrQ2HNaVNuue2hBHMNSfmkduwmYu8BwmPVYa7zrZzZ2F7r3QCTKtdRof8",
  "key33": "asJaz7N8RgqmAQzqwcxj44G4MuotEc7PacK8WdhYMdBhzkLycdsoGsgrzsxt8LQ91zkmBd6PyEiainpu6Mm3bcK",
  "key34": "2NkgsVMZ8ZNdAs4KwspKo9ydGgHCLDcrGGS8ugztc6vvuZx6ESxriBppo71N4iNTkkp1qd3UoW2HN2XXqK9hn4EM",
  "key35": "3hB8dFNYADWXtqifJkrMSV7n66g4TFVUs9P1uZMYi3aWyjA2pWGnzqQxo3mkjNWLQjcWjpzxv2qcp1qFL4Kyik3q",
  "key36": "2FAHkV1UZfWvsbhpnmhfHZ2LWW67v2Zuzv6mfJfUEz34qStK8jtyKWQrju74RxEHtu9MN6xcZvfVrAj81BAKFEz3",
  "key37": "4zALe2xfC2Xm57fpYcBBZ4H73gGyw2kBzzujnPmh62vmvkX5ZaJgVoEYQME2yNmjPMDGXDVDojih7cvUqLC7Lo71",
  "key38": "3RBPVckaZrhS3Pu1qzyDTs664bRQcorZWt2W4vRoo7CXCBkLmLDvwfEXu9Vng6PpFwrJ66udooot7JJsX4WBvsdj",
  "key39": "3XwhBzHdf8adCT2Z9e4RjVMG9Zk9ffuDsxy8n19DF8JFAHpcpCFvjN6Gyo9RitiwisuSLtdrDEiL3nKPVseqcoQH",
  "key40": "317M7kXQQFdtct8EVPjG9B6dAgVCtCJoJRwWFo6H7a72Bir1TjF6rbkk16Q2y9bFHeoM3muPmZfqcoX1o3nowUhj",
  "key41": "52FstDKyQeJWn2xsd9F2uuZS6ux19uFmohhueptVFxf9TdU6jCCXcMBfGoq9VLT7PzZhukYKerfhBaEvcqPpeK4",
  "key42": "2uytSnpPBtoYivqi7bSFZPqLFdKxsB7TXi9QbpScsLkV1oPLxiaMttKp4rAjemhiFkd6Q562DJ1E1GMPmBK51FkD"
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
