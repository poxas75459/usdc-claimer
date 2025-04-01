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
    "MWV5gEYq2SFaqq2od7CWTfnN8yPkDow2cVVDUh6pgJFDYV4AhA9pZKmK1nFN7nQEqoNoRV4LYGdFyySiZPk65Qn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pXJfCymYUCMEspgLKrasxJw1AUDEp37mxsSLogauJ94FHbHQcGfq5NTdxEReLUmsGx5Vmbj3y2G568dDDcgAuof",
  "key1": "23RGY3k8g89YQZ6FQsMChseAQFxC4tDtxy5fSNuy1f2wUmaNJRRVNsH9wb2RSfrLJBSfHJWL3aQVnDBtW3KHhcxR",
  "key2": "2zfffSugmrR2gkTmsFVQKirhRTZBiuup27k31k6bqusdoXyW2Zqtm9ed6tBmha9WMXR4WgQacnoFQdHjhqeC345s",
  "key3": "5NYXREvSj3yE2FVUXU8mqYiBgrnaBZHEx9yU994foJ8qgMfJT44KBHCHRNPJsxP1BdeYVNRqAVc2Lfw8KpREbEMR",
  "key4": "5vkv2DZVrPPAg67scEwgTG4jXK95WCU2B9iyNTmqavxbwvqcdUSg7eHQtH9KTCFibpTbBYVYLxzVhyLHBCnzVikx",
  "key5": "5sf9P2pcptLnHAXAPuUr6cC5fi79S6GFfzdCxtMzQ4X3CavUY8xDd4JE2eFr75aHgDiamTKoiZtrjXJXBk6rEyXm",
  "key6": "564UEC73Qg2QgkMszagxWhiq2wHe3AQd2LJqGJFibYKt7ShkaP1Avgx85dXwK13ktEYj5GWBVeNjeQwoQH8xLBS6",
  "key7": "2gAKVnaH6hh5PGmax8SHMSQT76ksoqHxbTmd3RGvLVC8Znu7y3hrL8SJPUEpL7DyPEMZbfcMGkYcQ53GxfTbdVuW",
  "key8": "5Y28N7V3MKyRnGprEZ1w6ozan2xwSH2Et61DstkntLq54BFdTGUqjhtAr7zHhFarXWQPccNEeJeFk4oHaH6LquQr",
  "key9": "2TXreyNHsQ6CXogmF7KQZ9uHGnkxetb7rYtU8MLo3f1wB3m6fDoGrMzW5ar83f9cu4Bi9JhEdZCgHm9CPPwpkSRu",
  "key10": "2jyMzxVTsK7xGTuXJZ94rJ6Sgkn88HGurSaay9LNvGFNxqHqcqsfkpgWZhkJrrHBJXRg4TCKEhNwnRf3YFKetBms",
  "key11": "4tMbYSi6REGPgXGYEeUBqvQHHN5jLEdEraGJPx6iG26ggoBZ8Tuwg75BhygSGM7xWLboubZ5TRRbTz8XECMtUBCo",
  "key12": "3XX7MEu15TExBCzgnD52u53fiwpKd4JnRC42Y4TjweCc3qsDy5BmLJXmVEoJY2w5VBbtLJ53NsF2TTKeJxRVL6iz",
  "key13": "4cHJPVai2Jt28UNioHbEcrHXk6njf3GvF5zxEVmd7vieEgmmSvuqgUdWpTGt7DCdoFUcLYdGqueWY6XF4UfyHemy",
  "key14": "4A5V6sb23ykgjq868oriMW5ZW2x1m4Xq7ZarSP3dc7AsjjERRxicBEEVn2b2j7P77Gbc8Vy9Y9bfcFoCHiChrPuA",
  "key15": "3bvWx6wK8QYaWQA1XsBrvii75YBmfbpmqoegNhby9ZK4wjnSRMaZLxAVQJ8o8FnTcjHzkfFNfFqQDBnpYEgCKLFm",
  "key16": "3Rmv5P68FwFfKtWeenJU6pKgjjzafxQVVUgLdHtyJCTUf1e3CtRwr8jeznHs7e8xdjv5sgehpePYKw5C9tQtYQ9Y",
  "key17": "pJiWD7UKsBag6XnLxpb6JtxQH9FbUKRHcQ53qGJwZzasat1FSXtnwmyepmNNqVqHkUZ3oKYNLGthLhvkE1JJiNu",
  "key18": "5aJbquZjWfo5caMQ2io5XqXXLWUPDCB99uXLSEamo13oM7XDA24hUxb6kCFerg7x66CUp49bbdvkmHB6PKLStPBB",
  "key19": "4b1JnVHqEnHzEMz8YbGn51EgSQtM9Gna13Qpg98u3aasytG6btZtkvu5sWJDQeEGBVgJJcrxTNM1JLTv7nc8A7JT",
  "key20": "4KUd8nmfNHLTnA9GVec6xKtpyYQ6A3RTxBBnXFANGReduuEFJM1QXc3HJcptsH6YXGDCLTgHgUmCxehnWXoPdJLi",
  "key21": "2Gij99xc1DgRNGopXH7UXGK8Bf7RQXZ4F1GnoCs3XiPgQ7QbqKow4zZxQLmAeLhqR9Y3mn5nAHux3CXbccV5czz2",
  "key22": "BcEGxdWrBpmapWh7LGSN6t1XJ1W9EyAYGsrGep1v5APRDibyuSQMYn8ZJjViaY36ZZzyXdMEpZfnpcCw6FqF5Sp",
  "key23": "51by3hzKQCX4ng84jbgnUEqtbZKaDVqpuDtYqaRn3MmbYxjqWb2VoECQVFbW8CZJ79XjDo4tgEf1U4LKuHpPE3PK",
  "key24": "5gsJgwZPZtBhE9CATHMySobAh9qWsBnZdu1rWDT6GcZBHezvhEL3HMjAFD1LEgrNzy1fzN8b5Zyc6obrQ1dX1RFu",
  "key25": "3D97dU3Lz6skfR3QcBcM5DtkQgWNxBtzwvxRjiAavqNxx8GbE61SnzTvEXzjoPCzGFj6cy89TfpQughjgoph5i2N",
  "key26": "3eHLnFk5dDkyoWFifbrZP1WLUyjomJby2AY56X7wVCGRQfcNT9HuLKiLy9bWnk9MqEAUoodrxRE7nYk1RH7VGLhp",
  "key27": "2NpKzNXAbcYjRbW7UXQhyM3nxWTSXoPYNWZaKjPKeahwC3DMmnwX9UbWaJjbbEHJxzz7TUevbMcR66aTSd5oyYEC",
  "key28": "37LKQH9tuYuJdcZV7BdmfV7BPiV4DSmoZicUR2MYP4aZSvjUAxVLzyZZxebGSmRUkhhdxYQJ18T8p5W4R2gciuCz",
  "key29": "2vGDMiuYJyrXB9Zs4ABccTnPuDUoxj1PXjzmjQtnBVZatqdzvoGmSvL39YAJgTb4Q81VVUzzS1iCn6kHCaasEdKf",
  "key30": "F4zp6D2i2jDWBGg6cAzQyTmyTU5wUtcpd8t6gaHhSVTThzACvqCA3cSJafrGgN4DwqJf9RGWLCWFt8pRUMLJNMe"
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
