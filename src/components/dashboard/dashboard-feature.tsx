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
    "5ncG1ChkV7xj8LPApr32dFvp9L8uJRjEt9dGKUkyUh3R6ABx1X1Nh6DhX73KZcm7TXrgVYPzjktog4zhdzVUM7k4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NFFYKCjKKVaH83auKdThZyests91cGPjYETAnG6Jffiajkdaqu18VFkMCUtUQuVwkyawNPA4JWTpi4hTuE97ciC",
  "key1": "2k2aLApEDHhkKyvVfBUZxnawuVRvuuyMrBKUU7dzwm1S4PcyZ9NFhrwMATzBWqjG8r3nXKUaE34Wk2VfVafSw4wf",
  "key2": "K6snAjCvHqkXv78xLrysGPfJPssYyVaF2MeTfesS1CMZNPhAFsr7XtZGXJMqUMciQdZjShhagPn26CRre6UTp7o",
  "key3": "2nqrpPFx64Mz2BuqTvupuEnNSxnsYZx9REUDw9TVsEEA8CnSVbFTedrRMYHSbyPU7fSrzszJhUcQJ1ks3qrZ4r9r",
  "key4": "5EpwUssgzwhdMJFjNdftCxUm7Zj22bZKTG92vJSehiAZ4DUV5UfBx32QK3qHF4PsreJV7U1ajmvt4gmqDHRaQayP",
  "key5": "4d8keGzdfCpjutH9ysMmDrj82NQhXcfpTLfxYZid4r4ptT3AAJn5fxkmc5vc3mH6H5v6EPt6D3prXG5P9cPUYpHM",
  "key6": "4BspXc6qhG7WaAWEuuAa2w3QXCQraXhzVVkTHD6Hmef5YFE9n6ZpZtgekdw2HDETGecW1hG58XbDQcS4nY3WQBKy",
  "key7": "2QQji2d4EjM7kzWB4YQi27CQ2jh7BgJrMzA9AcMxNTox6bYF2oki9azCNHZa1jhWo2PZd8ocsUbn1d8xKvGr6psb",
  "key8": "2XnZawiFKjEBJGUGa68PRrJ8YVNygr9J5EHa3neRRmDp7rnEBjDWeRakzx8N6DgiMjjEEvU7sRZhcKpvDfKgRyZ2",
  "key9": "3ipbwE3MTAmdRhxWGsrPLceusLuSPzTEihpmHFAEKQbaMxjfMAkegwCkGnD7QSnP8DQSDCznX5CePg3NbTPfT3nm",
  "key10": "2SwquvAxhiLiRQqkvNHfCg8YQe1PVTmkd5ohky6KiWWYvk64bA2WPHnzqyEyD3ApZ68jyWCGbCAH9rmbnMEVUita",
  "key11": "2ufNdTyVP6Ruf2suGRGPP9uQFSKmD4LanhqwGch5CQVtH3Fdu6SQLaRn8w7Mt61uYw7Xmhx5qHTndwqSDWNCAN4g",
  "key12": "5qMdj5XHSwnQ7jHzcdpcqBUepwuedapCMixRTTbsTWwqqmsWp2EETDEbT67wq9ZHJuSwcxL9QcjT98nuEneBD3V5",
  "key13": "3GWt2gz2PGZZzovK9n38ugrHNynBkW4bX1pVaJWWhVMVqUMXLCstr3VQCY3251qUXe5mKVt7dcmFcauYEYvk2eXD",
  "key14": "2JLLjFomeY4Uy8pis6aVyoRSE6ppE6phTTyDnyze5YR7u4JbjuNymZuTCnk2Jz1ZSmP2JtFj1x5W3C5irR3kytq4",
  "key15": "4hwxQrivrQsyzJViMgsGqrh63Yw9VM3we5XZDY1VdRJPQ7UtDWbjPzHjNVgWSydt1WiSUMnrFmGo4tph3bohSnLN",
  "key16": "3dwMw4GuGKVzSTKLKpNrXqHgtTmyc2ThfFx9W2aAg5kbFC5joYyJvNZDgPM1LWMzy35Py6RFvyw9BU8rsXEHhZEj",
  "key17": "5UzesYiZtwVLLM2bTggw8uqw8T7MpJZf9T6PXA7VizWz6dTywASg4T14ahuwQKCPqUJrqVD3bigCZmtw2mz7WWG9",
  "key18": "hMBv2FzrYbW3WtFSXULFWbKNgeqkbsPXFVW1Fx5pS5HK8gGsJwnw2fQVGKoqCbj14RbPRLt5V5CGfvkARPYAECF",
  "key19": "2J2RfR8HLFovWJnq2c3uM4uejyzBXQVSCy7vJTaz4XqVd76D1cerH7eomRjXkeLDZA5wpFtxT7q84Z1ws3uHtjCN",
  "key20": "3K6CW9W6z7tQFoTKLtx5C4NTqjkSpGrqNWW43ghQq6xp2gywcT39XL88VhX953agbz9FjAJ1gvLG9MoKHJqrCNVM",
  "key21": "47KnQSguw6CE6LKJPc6aoCQAzE4SecxfwynHnfDcsncUWd29EyJGjeSdi9rtJxdDbjJCZYycMZNX9ViccozKCox6",
  "key22": "4bfvym8aDar8sPQpayEJ8mdPVv1s7V6o1dG2BzThkNfRwNWYGXdRvYkqEWsjZTkbHaB9WyqWBjwMKP6XwbkZZ7pT",
  "key23": "pNakZoqj4n7eJGZxbXDp69UU6cEvp6GRpjsGHVMXEgSCeSKgrP1TnkgrkkyF1kuZPitz8P6zN8tR8QDL6ZBpESU",
  "key24": "4H8HzoRHa2ws8racd8vSH9GARTY974txmqMJNhhNHDXsEXCYbyHk2BKaw3ptfbJGt8oL6Cx342qatCJjg37X8ey4",
  "key25": "2mRVMNcnR16bLpG7RomALZDKgThYdHDayX9Ap1FziivtsFpZ1FXYi3UCnGRw43pS93pRei1osFUSVYSDFvXfiNx1",
  "key26": "3o86L4FW9ms5NprL7NvHvBWtRiXAkmtyjr5Aq1dG4VQZq617vJpXg9KDXqp2wbUAQKduEG79gUdjvNjoYNXpGqBB",
  "key27": "3UbrGBiH93dRqUex3Jjdz4tjTyD6DdtbAdc3B7LGTWjZ8BdKZdXjMFW2Cv7zo27RoZTBWy9EQm3n8LQYqZM9XMdU",
  "key28": "BKrEq3VktwLWoFNqpTL6AM2rSoShpqsMUXMuCAZ1U7dK3ScCoZoStuLykiPvA8AfKJEaKU3Pn9NfUKVEyZMB5AE",
  "key29": "KRYQpu7dGhCCZe6Ps24UtCCP3TwGjE1tk3s1hvrRYwN9h2NPAugv8p8fdeK1WLd27QejAv9wxmJSxp7tmpLS9S9",
  "key30": "61unycJn3aGJqpJneGK6kbXmGh9CDAJKbkZcVpFq3LE9dYiDekBkfGvuWWhAJ3ZexJkNCSVxYjcfBbvfnYhzyFhF",
  "key31": "47ZuCrji4hMFStbZxqcUCTqrvLwjtC7kjtBvfqfbW3Yftpd6sDJw356FfUGen6J27n8pT2TDRVy8JUoEiaQFhP6B",
  "key32": "3Po56RPviUjfdUWdvavMBwneRJfXoATkmwAjTMgE8CpBUWReArmkYLkYMRevxnFjdWBFF8PSUz7e1YgvV9uu5gUr",
  "key33": "5HQA153tMesAJCBuyNGa4JSy3yitJmJyLqFo2yxcfz4thnexxyiMUyNwMVnjpmXKLBW3MfwLDuET5W6Wh3CWARsA",
  "key34": "48mK9j1wMbeRnZ7gyS3uyJp1UGvRg55Huw5pGyBLLdJ8o6ga26ZoSt19HCiLSF5gyGxDEp1GaNnFQNJAtRW5f8K2",
  "key35": "c3zWxp5A1uzh3kcHY9v6N8BkRySvJGmeuUTnnZwXdprXrzGwWNXZVo56tqvNudF2ES5kEgpVHsLxHLS9dsRSvNg",
  "key36": "CaejjPbaWWauNhPBM8H2nqZYaPFQfwrmuTR7xSCxpo5GzRqdvbgfNFFx8ooNoQ7azCNgTcHJFppBjHPZXPTbmSg",
  "key37": "4QZyBZaWDEVrnKdtZiuKBxgur4RiWWcKPcDSkvgcRPzEVYYH5Fw19K8F73KMi1Lh5WVZaVq2nafdgDYxzQR3TJ6i"
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
