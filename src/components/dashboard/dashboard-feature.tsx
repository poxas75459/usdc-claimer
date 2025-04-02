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
    "2cDchEvW5upyaL3cmXBAUHSS5jzXZDvwF7MtK5bPzEzL5rfyo49C1qEhg2Lsbe7dKNyaLiNaUgLc9rqLox4ePxgw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NyaEUTiEqR8RWDeycwSmNd1QD8BN72hEsjRHaYPwjdQ3927zkc8TdRoxCph3fHjWbuQd2xPndTkyEYMhSKN1vGh",
  "key1": "5oTeoSBRvAvbr4z468bKZPJq3opjMou6agS6vedix8yhWF35aZGneS8zJXsj2YX75A19nquNhXeBqCNssiMNqvLQ",
  "key2": "2RZHfJvuHDbB7UP3RrFrBfSKcPmChnmmdQ2KKfK7GzufFy7gnuTCvkVnDcpwYtsd6M1SzdPRqRMD5NcnL4Vsgo8M",
  "key3": "5Phm8FCADHo7d7HBnoPeLoxoZG9U4ZUBgZyhRRs57mZRKfqX2RiqAo85i3XrX8Pihb526pY2WoufrAFLBeiUwSPg",
  "key4": "5MznnH8aheuQsBXmVKGWh8Fp6EgoEmKsbPnehca71BspKugNSX2w7x8eVGbeaEig6q9fPwp52NuqLEpw46CERZQL",
  "key5": "2bKAee72cdMj5ySBVFm1nbzbj1MoB632MGxkZvyUd2tQb4e1VdAhjsbNHeevoqUKhgY2XD9L2ZtNchAppphJcMZ2",
  "key6": "2gdKgFtz5dc63H9os9DmMcxyohzP46Wbrxx77i8D2DPT627fFXBhVZ6qK9LSarRg2HeFC3cauV8gKFPAKKTWUywA",
  "key7": "5fVqr8wGyWHjCyBQHuPQB2S6bYehKLUqRNSnJc8Ay3iL6YwMdGCDbvT261J6tLPsZEaXfn6RykZbyq1NGhtQdBb2",
  "key8": "Yi7ksNLiXwB8ziyH1h8HCjFC9zU3nVkqJAWgqgzLvsR4Poz42PyNi56Pm5eTZ1gtjun6rDnCttGtRhd5ZMvW3wD",
  "key9": "4tQ6e8zManv2Rb3Xo35T3oHbwUpkne6DaMVZzm6Nsjp6Y4KeyibuznCR5ayhVmSQjgZedFqwPQsJtrpVXn6BmWZN",
  "key10": "3UxbCkCEPVZ2PAxcHCZ9XSDuQCGv4yHxnSHk6RbbjCtVLTLGzxeXVWzA3uho7jjBxnSunzN1KKB1RNNoQhNnST3J",
  "key11": "2EdQTnyH6LQ1e9G4raBXFKoSfMvsRtHuAh5y9BtjXheMxVZeFVUYdu92kLNNuKhz3y1FRQ6Ga7qnX7MqbwTB9QeQ",
  "key12": "4Y16ZX1XG6kgAcjF3E3ve2GCGURxoX3SSnksH3csKxt1ZYBhrdrm6cWA4yrNGejVLcn2qVCQA5cpZuj62bqqnd2",
  "key13": "TPyJneSePMFjXCmDgkBLyvApxBUbUyUxCXkYPyrDbCndE6oLt4pc63LbPBuYo4CoJf2E6LNgc6c2AdSjN85iBQu",
  "key14": "3GQeVCpf7bjLboRCzpj8JQ4uZ8pBoTemQcfFtQnsTN171d9MYZcSme5swtcXduf6NJ9ac8hjGCUb3j5hKpdUGZL",
  "key15": "52V3Gjuifrn9L5xrZxukCoYKAGjKCEd5M5V22JcNBXnPtRpwFf2T6gnNTuwuMECvt2oNW9PWjfJo7fx33yszVfQa",
  "key16": "49Z76C4TaoKLHrctHry7NWpv9PohbanwFfXBGm6A2agSvvsssMgyEV9vmc1X8yWKqbTVNesGwvsH6ZEhkLEUzEWH",
  "key17": "a3RE7vM6VbrmX1REUoBeLPVTbB7kxC6PS1nzbMv27n4X1PoPejnH93pRjsYSTfb9eFMRLfD5ZVjhKRFZv51ZKmy",
  "key18": "3zPRAsxqDiRKiV1BTtUgJyDW8p2imQntwHiFXpcVSa8nXVEbhVUJJnsnTcYvgoSBHepRDjKMWDmGFB9fc5iDyGKH",
  "key19": "4shURonEGPRiFVDXqjYKdmW6um3ZtgBAjgD5Rd2HSdBMzSdhmDW7h3ZCxuujDikW4J9XHnrAdtnieUnkMTNq8hxY",
  "key20": "3q9WBuJrcjzpWP6oJw76oYZigAuMCwouYD1iaf4uZqzT14bHdZTNgLQy1uT4JJ6PWnJzam8AjP5o3n6E7hMHpVxo",
  "key21": "4WzQrPZexE1Qt8CdLdETqffZqpuUepmMRQwCWBxXWKAM7wrWjCo6nccLy2t9vnzur59mfj9nh42bE2maHK5kLZat",
  "key22": "5QGWAurE5BZ67EUpxTwJBDL41kjDzMTVHVZq8Bw3GvbhMnwhnmDb1J7coVztCank98m9ZRYB3fG5NfJU6Ritn2Db",
  "key23": "9z64T7iGU3A4rZYkgazkvxRLHZG7hyjVXijRModqVQdD18PrUQpXZxh4b1USzgLnPavxeLoUcDdjfT1STiu3vs5",
  "key24": "L52PEJfdckqkz4qPM48sh4BQ9ftJMu9TMk4Rm3pJvq2vHytmSUSQB3Wk8sdgvucKPfWLNg4bBwpWNDAjQ2yX3zr",
  "key25": "3eqXLBQjRHPGgWHBHeu35GSt2nzDzMSgGsgF2uLnzq8QsyoVuQTomgDJkV14xRYdwxeurLCCaZ19MM5BWbX2g9Cf",
  "key26": "3iFvmHJm7rux2hFgKtvzPHJqxRvBYYqWygn28qnhx7QETjbjtRoNntjzqbNoP3JUCepXXmQSxBYppVhYMeqLpZzF",
  "key27": "Cz87w8PowXsMGoo9N7f4gaHUNfL6gYYufDB9UJ3gqUCphndXmBPdAvjtDwvbSLQHwjcAW9vmF2bfHFfDC5EVFic",
  "key28": "5foe3QkY9emUNzDx9xy5NSdh665pTyob8Twfmaho7o6zdJc8PQeXKpvSLQcCsQ2hM3AHH5C1EudRR4r3sRgwF6jK",
  "key29": "51Lb5jfcNszM5wdEHXCBY3hn9SfRT6e8HNVWw8meJ9Meuqi9BaauPZsZw8kPdehoFt5JfBnPrn9dydY9QnhEv5c8",
  "key30": "3X74AGT33meq5LMi2mdXua5qJtUCvKHJiaNfWVidkzpdFrNTXfNNuNkj2zZ442cN7r93GHxjcwznps5BihTtBhTK",
  "key31": "43UdK3HgLmyvRsfA5tUdv1YoTVPo8KmEds2q3iLwbqNRrR5gi4HcpA28wUa2HwpEbR6JQ9umY2DUcDjhJS2vEUkU",
  "key32": "48fQqK5N2mfnsFkgTnPGRE33HMtbb3GQHDprvumCCi41EB8YjmxkM5oicBSGT1ZJqAVnQamidiW7S3Jx55tEAWup",
  "key33": "26kn3pmFD1kdyS4Pp6E5H9c7zvW9vXg1xAgDsw1fmfukm6x83n48B1XiKfKKx5eVnS6m7DiBZVusPiR4bfUL4Sob",
  "key34": "3NYefDdD5GzSt2Kqu82QCEBVMGXcJeeuqZESCiJFQmNdMUDffUaGcCsA3Q1iASx7N5HbMKah8y1uxubmZXDv9p4j",
  "key35": "2Tpfp7Nqn99oRuwwqrnmvGYMHw7WwwiHug5ZDhdgJ2B3Jva5YaNzMGzhvshnZE3GgAMJa2GDtKNDtPmafUGswD2E",
  "key36": "3Gw8SbkCbH1RWKq2QEvqn3Asu6rmFn56CEQ6u7wekusjrPdBy667jzsJdM27jG3QcNMEW6j4fRNsmsjYM9K3UoxA",
  "key37": "5NaqbpDfNq9JTLkmbagLMzkPxtDYEskeTTR6MBGQAQv66hnXSLGGipWiCcmb2c6hSgxgWDUoLf8ZV4uKD7pty2VZ",
  "key38": "2dssxgoWfADmJynuvjzoKxVRAMEG5DYzYqe5SYHejKHPXWh6L2XviRDs6PDDS5d1BBJ2ab8Vc88F7GQKyg7PsyXQ",
  "key39": "y39hzxBp2YUPS71xzWho7pPu4zVjd23sGLX4c69aA3jShiyVhTiugbN8Cn7Ywm1qwfpRHULtqqiNLXF7zJfGjNj",
  "key40": "Yk9q8ormdGtCZeDhyGJZDsZARhXVwPHu2vsrVkBw9PifPyzubq2AHAEguGKaCUVK4htxYXVDq13Zw7jHa6cB8zj",
  "key41": "612bobpbxrrvApF14x8pRXAuWLfzAE637Wcaz8b2vUCcTbJAF4jc4vDzoyoDaLL5xAgF2g6Hob1qm4JMBFMSdwzc",
  "key42": "2M51Fz4DpFtiYXmhg43ZP3M4AjKei7ormCDpbL8GwAZkfGD1sH8EQmgn4nvsstv1cuMyiQLZzWZBrwFdCZpCeqbZ",
  "key43": "oyeWuqpHa4f1Zhx8Qy5tEZ9QKmdGSGEFmbgj6Z81XtxQK51s52RhbvK4eXXxpfaLAv1G4mbbroWgZZ3niVFupCN",
  "key44": "5y9XGTTmUYNjkac4oG7Yh3dMNV2ytXxgrhZGekzpRpfzstTtXYZY9qDW4yKj6bDQw96UWrRXkWJGmE2HkgTNbqCq"
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
