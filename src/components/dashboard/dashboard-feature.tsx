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
    "43QgfqGq7eNpHXYkx3LfXZEeCEdQwBPLVf2FJDaPscNRoYPKYcZGa7dSArDJRvJs3A2rhfRFdZk6rQ8xV9pqG3ei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hZYkq52GHvazYtewbJb14jgZdw1mnn8rYoNP41iZNi9rKcnywYuZGT4ou7BNpRh9nZxBimfCyVH4jNXYmpoJaeE",
  "key1": "2RQLPtyrr7QGbDNwoniULeibs6GAocM6q9upfjtVwNv25Tt6gBajP3xwzmk9VVX2ACcdxHYrbsbYbZ8XTkigvgiu",
  "key2": "47fVbyPPZ3PgA6N7CazJeP1t1W2BU9rLs1uWLnVPJQ1X1EErVeyEqKTSvtT92zuvbKAmH3T6aSLrXHhNSQGSX73s",
  "key3": "43rsbDJQSJBRScJtnWDmwjy6RTbEY74cgmyH7VYnxUDYo4pGa9o1vtDubZUTg4jsysbWTdUe6PAG6ZxEhDFcJ6d",
  "key4": "5wKNZHdNkX7LRnrDKg7Zd9p7ABzkXXUuwsgz3RsPmg9MdHev7TuBdpZTKAwoHcGwi22CiAFtg8HAu7p68WzV4HfG",
  "key5": "4JaGhv8MQXr6SvjqU21fc7hSwMvR8Vb97MvwWW1HzhoN9vrtfH5hZYPEZMdrNGU6KLTSYg1DBNpBDMSEUiTC6o9E",
  "key6": "2mGBKPneG3r6njMwg8cEPB29NWczoe4EWsLAp1Pj2bmMJaST1QwGxBviJjn4nvwgn4Lgg2GwTSHFjkBjYtFcG5Ft",
  "key7": "2mKPUSPd8TBBmFovFLfQV2QZPKoxkVohq2hhrtSJRxV2VMirGZP1gvQpbssckeUsPMe55SUKUNcsTuRDHLSPtASE",
  "key8": "3ZYytbuyT3gar36GA5WVerJtGmYk1Gau7Rz1PNax3mghxdjn8FSXRf3gBdYXqVbgMnjqWCC2Y4aA8PBrgibs9tzg",
  "key9": "4KNyvEecMYgHHS9B7pL7rDFPJiS6Ar2epM9o2zEMzNWrhBSB1eLjQpZ56U45JpwSr118kUoWHCgrwtra2k3tCRDJ",
  "key10": "47xYTmTbUfKttBdTSP65P5zUiBG6nrHcDshmZdfG1TsKiKUDW7XkTTgXWyyjWCSZaR4e16KC55tDeZCVgeZ4XVHh",
  "key11": "4dnqcDRX3e1jP4r5nucRBMQ1gP858gauv7dUP7XKHJmGFmBN1iBeW3pudaQpuPZA21PETbBujvi21Z75n3ve5c1m",
  "key12": "UgCw1WKFz5PbvNtRn1SmnXGNF1K6C3yf9Z5RNbDt25ovXFJ96domB9c1pcmrFM9v5f1LLeag9NDW6mMmtQa5S3s",
  "key13": "2nGdpDD7R6jeqg6fbBHt22ziz58imBBW5CbJ4ju291PwPgAf1k3aQkTpqpAXReFKi2whP1LBA7Nmj62nS48KNFwV",
  "key14": "4Y59We1uxxLQ62jnxjJSEmr3hNUUkchyVTV81p3BzvNQ7tQVx8imTN7uU7BgFLziixm5T5bBjSopdvupuiMKkoZb",
  "key15": "55YcTxYJMmEjqh8VTHUWcEQYkbabJEoaY5hP9T5g52w2WNxAYhT2ofxVh1JRrJwdnhKGdvhVxy5K29eE2zXHj7R8",
  "key16": "56XruYbZhwdX41YRYN5WsnpqLWUd8KgMLz2kqYJ6CwfDuBoTeD1mnmBmvjXK36wmq3jEPo7ahpkPYdXH9g7m2WFo",
  "key17": "7rM64HdKku5P7Mq17Vm8eQCrf1d3gXnxycHYngsFfMywLWz1onUYrLC9dX7VgyCGB5G2ggyrwrxgcknk6Lvv9eo",
  "key18": "5xQv1gqpvVGbiuyyUa2HsWqcHz7tYPQKFNVjKxennnqdzw3yXTrZRjbrSiaTtz9zKd55YPPUYiXdzek7dDWdF8HR",
  "key19": "3b72ibDHT7vPsdiid5uciPcFpn1eSHMKh4G5kkTQabgqaysSKdArB6Zgrms5wf3ZDm7ZVyNetAPUT3WWz7beymYR",
  "key20": "2hrvHRaavF86F5zcq4LZaopFpeaJTQYHAxYnVyGtedYgjvewegQmu7zYDgBYx2JscceSm5eLpFRXXGLn2zdYyg1u",
  "key21": "3CT6brynWDdFgcrcruj1y3Khnb5CwCHTyPpBeaG1WjXGVBDDPZF1y5uxzpyBhDPkjQNEC9xNZ1oAsyMkVDyrugEs",
  "key22": "2HvhDa1WpK8Ez2B7LSgBSveBt2Mu3dbq7Y1wCMfyANmW1j13TZ8Th2jaQ24mLFzsFK8aBvQ6buzdtr3NeLs3PUkT",
  "key23": "43QCm3biH5GZQBxEjm2rwEeJ6F1ss5ATnV7SDVcTP9Pw12PCqzHGukcQ6ak8qfNDVMFHjrryHvGJFD7GZqCNWUEw",
  "key24": "4rB782WTJeuwVvz2JjPpTRFs6Nw3efdUGWFjCgb187qh2mjhq2ADgXFoLPMLUwgBrTkJCtvX7SAsEg7NrjthSHsq",
  "key25": "n7xBdUsVVqFqxetcs3mkqqsjPXqBpE1uVsrkuLmswDpo2AXqoY53JmDk2wLWEGDKT5AiNgw4NKEt6kE3EU76jXc",
  "key26": "3Ywjp1CKofXC6Dj2gr2Hev1S5xDnSZdrtpwHAsDG7uGMHQ4ms74QsyzSnG2FXKxxUVywoRuotc1aUVJ4coMiJmJZ",
  "key27": "2o3q1Jzh9iVqv78QBoeEbMX9xL4275NE6B6DtEh51Py4HYAN9nKVX7nu3GckUfu8npVFHUxvKDi9MUJusYh6ynfX",
  "key28": "5bxEd9Fo3tvwyZ2Rvw8d7WjzWZcVdEkfLdUgsqXBoSykK1SEk1Ngjk2kQwfbYFuGVXZZ2ZZkiRUS8eTxs6XPYZEQ",
  "key29": "21uoARi7QtiEGf5Kofnj2cjr2t3xcZCyDvdJg6GNRrvDuEw2W6WXTG23bxYxbehX9XLgPY91GUQfxaoDpAKP6rVT",
  "key30": "3qcy6FomzeiYtfkibm3ssxXhuJkqEmnLVvgw8CBTcYz8HDAEf2HMASSAsmg3SwdnebGgAFkZ9tXhzC2vbmmfpwKY",
  "key31": "2pUtXP6nUPr8MNL8bHz4Mtn1nqzK9cMMvAgqBxdrqSY7AcoUrvUV1mLakLEEKHvnWaXAHVbEHsp7H5aL9bfwZPF4",
  "key32": "2B5D6MJmGAnRjqKks5Y5Q8E7bHXhvUZRqvvt1Wgj3LyTMFL4Fjrg1DrTYAENRhwFhVTFuBTh6j8J6UQW2nn3suSV",
  "key33": "VjnMsc2QVSwREAciosG3CNWSENexmjVafdFyVPmL3NghUqTLpz84TKFzFBSdNrWgyNxArP7nmsGwT24GovYLMLu",
  "key34": "4mQwkGAWV1PEAvQUcPR3BqLd2dziNvya3wU3S8x34uFuGykkTx3DKPc3HnEyDHsT99UNSzs78J9JTUckJEczjw19",
  "key35": "5nBznd9kJRXnGgxoYUroNkpETnwyhYuhT5245Do8Mtfe7Bt9rh1pSUwNG3yY1GdzYQ331jonZwvKdtMePBv78eHp",
  "key36": "3RYJSwKhVPLZ1MkiRi4wPTBNGCf7se6uSgpvPFGG7RFEPDPfzVfpTxrMJ1MFMyYvHwM9tHV93ccYUhPRnmwE7mP4",
  "key37": "5nDn8EX2QBmmjWQ8quP3fiFL9Rc66vVDoJ7zHepdLScHjHuc79g4kF7kk1WbCGcGLgSF4iTGghafoW75ZdcEhuFj",
  "key38": "7oVV83SsDR4DHHM77y4YwvqBT48aWPVCawP5HSrsvyDBLUHKyXVC8W2WJfcs41T2SRh1drXWwXHLFD8UT583mph",
  "key39": "3HtebeKvyt69cAXSqa1bygTCuHxbZ6Y9eLHia8CTVTocyW76qi8efuMAC9hozUqPxs6vXMPEqGo9a4ZjQEhBb2D4",
  "key40": "2BFSn3brPE94f1ZhDDqCYqCwSP2uMSiikfnyy9Bpg1BXWMojVFJFhZYHShPz4rkajfLSmbg2EKGWbmGbAqtetpWv",
  "key41": "b4dmzLbRVYL5xKV97kwS5oHXbTed4aUhWt7nZr8KCEQm5UBCMjzdAPKvuM2AB73eMM24wKR2UAx4q7TZa4PsYeu"
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
