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
    "2DxEhBdeuMNcHzZxEtwnGi7zPJv3yeubS1XREAFoFm7296hhk8pADGP9MEm1jDg76QvZCpywekQAQZSeVXoexaWo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MAXEZHXV2Nz4n4fvP6CPcQ153hWtrM9bJVLu3DsPTpMiHASyxFoiwPYL24iYUdcqvkAs56eeJRPGtCzjPNgjr7u",
  "key1": "26xbU9A8E9TzqiuvAs78ULA94SBZYnvVJLe3DFzWwEBq7R8YZMG9KkS6QxeGEfL58vMtZinB6KcPqyZx7KioGkV1",
  "key2": "3rviqe5a52FWSiWRehFEs2mW9eonQuc5ZZxPcdD3Qa8zwaBLHZaqeSsMiYXCfucnjkbpirWFn6DLvoJKE5VvKC5e",
  "key3": "27H1BfHm8jdM37pYDt6fKBJhQUh9cRhTrXmhvbdtkNf4rTCxqCCSExXBo7RGc8PaVXz41jvBmswpTKGQLw2fso7U",
  "key4": "5nX6eJ8fbhkH7jGaYjXvDQ1kYh3c9e9hDTWe5cML5MQA4vKpJAo8sKJLkXYop7NsmXTfLLzqMYJso9eVXR9BePwd",
  "key5": "cYnsKPWzmKXdhcuyK76TyxDXgjfbb2jq5f4RhiWXx5uGbn2gwHqakjADxEmDNo56vUbFWNGDbJ3iTHd7FWnX8QV",
  "key6": "4CHkYySjxxR3ZpuJcLjskP6vBJbmBrTgZzu8LsxdnkprVV3udQE25ahmLeFGPGJGjtmPHXeUH7DioKHHq8P1qnC7",
  "key7": "2FqNopHU3R7N8s3ApgeGJw1GPQ4CL5dhLPYNpFNX2f8iYAoaD23nnaxoQs5Zap2iXg9gEoUYHKX8QsZnLH5bYbD4",
  "key8": "4deThRQUsTprWVqPxM5z7yUWeXjbbzEFAQGWRBL2yBx6ghNLh74pQP27jDhfbkLVK228UqKtEj5Lho1zwNuoyAHG",
  "key9": "2wqQRJi68td6rrrFtfijkJvEwo5kAUN3Efybm4cUpcmEKFv4UZ3E9tEfAbULUuSd1hBpcJWpQhA9c5hYjceRhJ1w",
  "key10": "8iaLcqhMF9AoD2NhegWobR8HsgevFh2TsWb2B2FnXFYAfEBFszHzEhKuAKh48cALnskRsviqpX5kxSetbBc2ocC",
  "key11": "5zrDxN6A2Uyihaqyy8jp5BpP9L9GrQzokw87xsyUWwi5xPfMMvCWXf8ju9D72d74J1q2g5VttVM8Spb5C31nN7Qj",
  "key12": "2J7Lb3wYEqVcJPiTnRXWQtGdjGxiQtWdfNkzMicNved4YhCPo7yW7TTNv8PyEUXsicLG1o7aF8TDmzz1bvpKT4F4",
  "key13": "26mEeFJKicfgHNA8nUjWQiryGfnGnHcZFXH4KXvCEwDZebeRP92irT8LSGFC9WCRZupwKWg2FHZHHa84C3J8Mt9x",
  "key14": "2fU49ADjvbRgTSVczmsNecjdrMCDP5EWA5nsUki3YGZiW1zr7rT1omo7n6zz2FhNhnmtTJbTcVX1R2WH7kboBp4c",
  "key15": "4b7JkwjkPDFwRmRLntBc3FzScB24tmXHfpFaHkdrZAj4HKUGLa7Tx36CyUevfn5oQ9VdmpZZdF664aY92GQHtKGP",
  "key16": "2vCFptuWKgc3qPn8ieL2T3akxi8aocsSCxysRF5YA2hYe1GDHNDy3dx4zU1cmin9rm8XKsQ51Y4LJ1DTLfMkuJGL",
  "key17": "4TyyjV7bSufj9NNH9rG74osa9KuEB1gqaa9oBxL69WD4pWm7s9nJMPFAEeJzzDMcbnYujmeu6obrB7i6rmX3YuuJ",
  "key18": "5SkgQsmbfyPKAUWTL2zztQpCfqMTZZweDEfz2L9tQA8vSPq2HHxEEx2E8T5kxeEfQvSR2soUwH4v3THnboDWtvYq",
  "key19": "3PgLwrt9UYqCeLKgaKbmgez9g8ApxExHJkfB5X8p9gDfTEU91zh8qof2AiKtoE8nTSNLs2NrGiZ57PUusiEisYnv",
  "key20": "3ew4gR1jG6zq1mjgUBDgv55B8hSZ9RnTcQN2W47DAt5V7EuVyxSMknfRwxeG4wu5gDs6cf4VnWAh2ABnGYZ4apri",
  "key21": "4MrupnU5jJnqzdDvw26VrU11FiGkm4Ucf8effw18go82gAhQHRCtzcYobQmRnpSH2KUVwA1bENZWgmM1Cj12vK4Z",
  "key22": "2giatnrAgFE2vGTzZ16LQqvZuuMuZUmhGLYCJnY1EHLPTbMpRQcFpT35Z2nYobxzd7JxJa8Y5JRHETc6DeDarAud",
  "key23": "3ZR7P1J8MG486QpKUHWqHcdF2rLLQPjdt3FLeZjgfQf5aJw3b4UJNubXu959QQvYhLKqQenG6Pkuy1ikVyhJRoeM",
  "key24": "3SU2xxTbT4n53g9cTLFLnMmh53WLm1BbFtpmVhJ3p263CGVHfhRMgK8Brc8xvNdr6YexciP38mdQiRVvYUV9pcZJ",
  "key25": "2z4drPAjnJRiFLx5EyRAS4j4GCtr6hwDJrUGsvK6zCXAPqHdzq8sXha19Xyi5hCh5KF6w2zrgAbxNQeGN6FXY9Zd",
  "key26": "xEkvvcVHL7PykN398RteeABd2xSJhubYrowJjaiVn4ymifM8uKEEMf2UAFgtRr9JL3Ckh3XfKox7bXjs7eD2iox",
  "key27": "5DW9s7fPvMhbHzTGFNboUCLaCY2PeRL7VngPD7s4oMgXP7g1EgZeqadZuA1w5RiinMggXxbev1LAmRr2aQRku2gP",
  "key28": "662mwh7xUdcjGKmfQtmnQWj7CdhfFovNEyZbgpU3EqdsqFW6RN1ZuUvmqdjTXNVT21qzqVNrLioRNP3w6AmJ5ENv",
  "key29": "4RXfzYRCS2e85PBZekNN1RVzi59XjLepxz2h7vP5V9zx4k3AGH6K9gNGQG4Xp3DGJnS5Qw2r67yWXCBGj8n7icEL",
  "key30": "4kMw1giCeuSddsX62yH4mcLkdf3LKP6nngwY3iT8ooWpBNEyeBjr8sto5zGiEMPxcqPh86AGncaAgstuCahy2RYM",
  "key31": "48huj7QcskSMVkdqgPPUgpAEXJZdJ1X1wB7EYaxwGUsfJ8AAJ4j7Rp3xRnAmf9XWeBJhrZQht3ygRpbEvhPe7U45",
  "key32": "4owwtQLjYSG7xUZEvQ5c8iAK4sb6wWW3boorZhHEEV5Q6Y85fYpRX3jGZGWqjY6rNZg6V5k9R5YLWAhTB14J4WUL",
  "key33": "55oSa99TV2ghmeLSmGoYQNFYcD6EpTJ6ZrdMbbdUjESxVRekEjJcYGuRStDxmCvMGq8hdfYaGvJF6B4NEiYqDRgF",
  "key34": "2CpH43b46xgWSRSuaqzGDBrJpu5LF4yWraGdwfSiuCh7rRWQshBc9AMsYkqibm9YcdcwbUbq1bvH2yqW1Tc9egPP",
  "key35": "azJjGacuU4EVgayF2ZaUpJYN9HRbxG2fydDY2jdhW4v7VmsJ6rvptEbWbytAL1C1SJZvgnewQqpihmBDzt5fZQF",
  "key36": "26Gmhe76pZLwsk7XJ2cLQewcRojTCfqvJgS4zWBPS6MDbxmHmXRM6cqTkDCzpJT1K6MDLDvow3mAhN1t5oHtrLKb",
  "key37": "2go7fKZZTRgWH6Q8PE8fWsJpE5uUZQ3jaSWNgVDfhCrV4BzXYypGVJ6onXDfzT2eRK7DMCDAFfDqngqEiM5fAGqm",
  "key38": "4b9iXf5jfpVPkcNu6VwdgRhHptGa52w3MJ5KrSUFYW9gR7TznK8u3ZsMR2n2J3wYsAjK2uNoyYwv18rgnAJnQoAX",
  "key39": "5qddY4WP2isxuGrCUYjs4JWxbs2ogNdY93Y946nMxSWYXBA2fdRPPkiVLryN39WuSy6nxZ6WhxAE2bSdv7CFbqTk",
  "key40": "5FVL9wz9pd1pAp6LCQuKKyFJKWfDLu3bsKMEB1JSe7rDQwFZWmoGYm3sLmcx6qUSzoRCxhABaCRKEziuzJUgSWZD",
  "key41": "5EyoWUXUV4WvWw7mcvcuWNscEg4rih5FHP7qU3AnLktj4xuGdMaEeLSdu4aEfRu9Sf5LVBE9YRqFCmjbQTbcT5eT",
  "key42": "5d8htRRynqmwoWDBZXWiDrSYGVTsJsPZizKjuoPyU3EsgcSEe8Z87qjFwpPHimqC4oqSA4emvYf5UrjaNnitBUJh",
  "key43": "5mHD8AhzrgfXnGWNiHf8Sv4jkhHubusAdsvzkNRzCCSuCnc4T4twKp2q7WVbBuYhnxu6qwzziewRgAXiBHFiZs2H",
  "key44": "5RkvGDqLwU4ydNtK6xKaj75qABbVk8zfHLJKBwa4YeVWuyznuTf9WJFJSDqXjKzLin65agCaU9GFohP9fAJWyaJ9",
  "key45": "5JEMmC9a3Aj1DGzJFQCVixufzwve1MMLahuqAEYhst3DsZfpaeMqNUmYYiSZr24QagGqdB3Dq23NKwfSsH43UAiz",
  "key46": "4vxGLN1VcyA2j2TuMXF3CLw6DtwNMoyACyMzwqroJ3oYzquMP6Fd2CLY3Bbrfwbhm8xqqBimgdL2rg1JfBbzkuzo"
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
