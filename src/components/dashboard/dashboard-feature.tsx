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
    "4xYKSkVnP7ct1K21hRGeHgr7e2zjkvPkMt4hRH4hrYJxaWkt15dd22DxWgwi32jW74SuxfZn6sPsY8vcAMyDiT2N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UTEy9mNWmN1Vj9mTJkQvJvieu4unLDLNdWnLxcf3Jx2b4z4tbgycnk1y1zMDPJt4cwi95beqhJd9ua2EzdhtWTd",
  "key1": "5JVRDrKuGowQHesbHRMLYyKJwcH5VHUgcj42BhRWCUCbp7e3ToK1QYPjcmkKUyYctVPKcowEBCWyehgnLSgMBKvW",
  "key2": "3tAZcBviZHyy8mfagBFwWjVUYYxqP91vJA1WD6StKY946HXwAYpuqsKGyMi9yFRuwCsUQE6r2277pxTzmjtdVuMQ",
  "key3": "3QqTPyNSmXzJxcYKAgwB9rXZRpw5jsHz9MzTwAmKzQ9Kceox8aX2MtWtnGGBKAQWXjFv8hCyhQ1JLEkyWPaQJPCk",
  "key4": "m7uU1ZzXm6q8TWUZZyS83MtuqY4Bg69yBK7DuYh6XnQTwQk2yZjZMFX9KTqaLzj6ddzhod59E8u1YbFCCWBJ9Pa",
  "key5": "5vSW5rqsmcrfY3BXatAvGuzakjXUKAfnQHtf9NXFjir3oey25i718iRFKHrViraBsXH3tLv1KGBE7pHiLc2nJT66",
  "key6": "3ZB2dyi8oiwvwCqUNw4RuxFuKcgK3tmHd2oppHAJ2oSXSU3w7mi2FZhrfN5MY4gDKKiwd6Pc5fkKLz9BvrDQV3r3",
  "key7": "VMc4odJuiScU5WjD4D1HykjFFEXLxqauWNEuTMN9MBLGJ7SdWe7aK3zeNUcyZNfPr6n9dLg3yJXZdn2eg6uNcjp",
  "key8": "XU6RmRDtD5MSrAqdnbLtHxpq49Amq3fTycKrKES3Kn1LaS2jHdNAWWudQL9nTLmkwH87tT8seq6Ct88Bc4W1WPs",
  "key9": "2KhciupqNq1wyk1BKWSCVLhjVwy2iLeqGinrhroFfKa4nodAecuR7hKy1MF36Yymh4apkkyPjFVZbP84anvS4bJm",
  "key10": "4Bxda52wLUVuaE69aai15joCcQU9wYTGsvWvTKKYSTHsZfs7Zqpbpyo4QKxJpVN2VKzJ8DmyANLojP5xvL57Ccum",
  "key11": "3a8qLE35AFAgz8MVoLZUZ89whrXRKPMA833ngznz4hGMmvzWBDLXR5UHtxs2s4Mu9AQTU3GnM4nZd2P2Memspg2X",
  "key12": "4wZ9pdCTmGnR8uTKPnLGiAFAXsSwEj6gN4Kqz3hRUwKSaRFxMFqh2vSmS8vSpvDaPzzEiuYj7PyEqPHe4eauY3Mc",
  "key13": "2uGQViv9dZDX9s8nub7f7nwxuhb4R3dBzZUi12BTN8aLyrevvSwAYe3o4zrGpf4zgcz6Tm61LojvqAM2x4FhF2aR",
  "key14": "2WP3snwVwoPUzNw67mMZq32ntHPX55hgauPcqGiyptoasg1DLa8G86pTLxGMfqgfyeMULfS5xNbTqbDSufp3Yr3E",
  "key15": "3g9PnQSTAwKEtXCX5wjFjmrMjipdqpF9xDMRDXFe7ntEyFj6q8EHFj5tqv5h4HhkwDdhkGQH35cuKNzh26AmEpG6",
  "key16": "4eKwUqetPNtdxie1nsCErs64CyHv5PvY4ojjaijqp8hpU9oxpwLeGdNs55uNqCvwp8wWgwKgTpfvNTCiT5gCnHF8",
  "key17": "5BhbHvoXLMkw7EhXRTUf91SzG1rLLPdW75ryDmyB1LKNmq4cTF3AhBnULtgnQUpV9hGUmbzhsrQfgxCnwKcKbrE9",
  "key18": "m93VhGE42aQitZ7XbGVZUG29JQFSPi4Gsg2nPLU8jrNF9FCHMgvyetaRJtdhSpyvRYYcfCJdNPD4RZdo4e7UJp7",
  "key19": "4R3QyzrZaT2xgDjfuAfUt9fWDxLycLBK92gpQG5JSQLPgoQnfpHFAi2Q92KW4BFtKEAPWE8GJAdxkMmWDFc1VjpM",
  "key20": "4kMDd3N3NEnsmeCAhWRaeqVEqChLaoL7jzwCRjuKLw5FAuYvtTWJ7R8KL2DNp9fu4obDFYEiSABn7rhpVyUqk1hP",
  "key21": "4StdLNFi8w4SiWSJTdsn5uq9yjHbpdTVQDsN2tPwum7V13mfq4zDk1snFiT5GwmekSHWYNRKM8wLE7yjznP1ekRb",
  "key22": "5k4JH8bwaKGtTtYk2n41cAHsdQAJ81QYRQkZhQa1EPjNjG7jqr9XNJFyXGDq7SypuscsJGhkV4N4QFRv1UpRLBTC",
  "key23": "5diQPWxxer4x5NQCpXDDwt7u8RJ7XrC5y9hGDex19Ax3hS8QLFYi7vwMjpuvP77ieui88kEt2nNFfV4nvXtb5AWF",
  "key24": "4GUbPwApVbvnnU4h1qQMUZvzwGY1g8xoX1AqpgdG8YyvPXomQvN4psY9n4SA3DiFsNFu2tTYfJRPiSxA79YLtow3",
  "key25": "VSWxpvrxXkvCxE7Wb6qZ4AQeY1urZLe387ZfQGo88RDwbEpRNzE7XozfQ5o1j3yAfj29ueYpbyZ8epewapxaxS7",
  "key26": "2dQB6HFKT77fZjhpkB4cHK53N9QkGuBQbH9yHV4g4EsdZZhmEzywsMaB19D88KbkMcZS2fKy9WwRnd6BDiotQx1c",
  "key27": "AUoCMDSF7cDHuEQfGvpWkvSqmJFFZuteF7FkzMELjXgcTj3j8bo8Tzsf2K87oyiA1Nh6tPDA6DABfrgyHMSUM5T",
  "key28": "5G3JU4mtYADfd3oZdEWFhpud4xSgQmS7AwzykndLkytL3VJgsKTTFWgjLdvc2e3ZM3k5qPfKbpUGwMEdaYPRzY8R",
  "key29": "3Dcb5apct9yDFWdzMEoY2tuQsdRBBuFX2126EVDZxFBcfAfkszaaKmprmBnvk5fVeESYjUjH3RbngpBswpEpAHx9",
  "key30": "3X58yXh1mfcLL7acf5FNemrro8JUQKFkDZXW9FNTpiwUpCvrSbLnciwqnr2gW1dEUXtUjXQaNwnyFRKF6yeMfeqH",
  "key31": "2PUd667wzU3wk5d98tSAjB7BwrRuKv5iWuXJJHDQczL1RhiSj9jvQcFNhvm8agkZdgEBotQiA9Qcase9H7qmEqzg",
  "key32": "3izB9At5uXfJQ6nfsAdRnqHuQwiHmCFwTbcBywtj5fVMoHX7YW4dd9usbmv13eLYEBpasxApjf1KFVuJBwGLKT6v",
  "key33": "5ZTauQHtAw8eTmvks3Jo7sEqRa3yNy7TGqNVCaGz1PDHqHrLL5ivc9s2XAPS3WhJfRNYA3PDbXL2vMdLpZfqy7vv",
  "key34": "5pgsevm39a3zNVUctyXotuzgCXkZd33jj3riarDrux1Xi2fhygQ9UmYqM7v75Am5nsmj7Jpg25TGjXgCYDfVogkK",
  "key35": "4QY5GBVhBsyLZftXW6FJf99S5Pi5Bfu1Fy2fykrFGYLQCByTvZvMB66PBbUa7snbbLJjf4q4d2SW19H3NwmvCBtr",
  "key36": "5BUbjNDoUn3JfZNfFQtTnHH6E4XmVsFwQADuCK5pZqPjsc3vcrxUJFGnf6YXMfAdCU7gabNDygHv5dLkB696CBeP",
  "key37": "5vxehJZjWmw73BHj5ahZzdiBchPoELr4HCdwCWG1oZcjA9r1dedTxU4oTobr1D8RKhhfp53Cm76hNewtziCyB7tH",
  "key38": "5bP3QX1tbEEJV5fkL1rRGekoQcHDoFGbqQXrEU3a3qGtz9PpTZf9uRFfF2ZS2XYbK5GRbXfLCmaN6UXQWPJYU6aw",
  "key39": "vsUdxprJd6ZTKdf4vL9Nmon13xNGQ98F9oBvL9bmFwu7m7ovt9Ywxy4Hb6BHW2NbUwNvjsC7imHRiYgxBV5qZk5"
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
