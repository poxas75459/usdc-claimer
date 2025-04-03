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
    "2JBnDoESQ2E36NqZte4J4R9rKKx4L9BQPrZED9kNYqvJP61fPnVCPq12ysdd3DjA5FuwkWvGvnsfAsDP4g8NwGgE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UfH7sE6eb9QgfacDxSkH489zsL1tK7Zs5v69kTE1xdMW6SfBcvmq6t4N56V2G6sYTPYU7FRVqavutqiYAEhjXhY",
  "key1": "62oE63RnQ36EQ82Q9ubXagqFzGm61BzSeDh7Kb2n9P9zCKwBSbTjeF1yZxUezJcFwxCvwos9aK75TdABEwYxK2FE",
  "key2": "2gtB1p8rKb8yWEdmnXS1ZDtiyQE1jYxcQfrKsc2jgMdzr2RFfZkPea2jRGtBFH8GTs8LHxMveqXFDauY5ob5ayup",
  "key3": "25u8Po8bfsdtQJRPjKzmQfZwdS2t3CNZ4q8TZKsCgJyyx9dHUf4ZAynkjj31Wfh92PLn5mFm48gXSqoDQjztfymk",
  "key4": "3bqxQgwfjBefJBEBD656xk5iTqhvCGGuTVrnmdWbX6BAQWtTAyTFUn3Vz7F14L4ZBtQ5YYMjN6WwsWhLEpagLjc1",
  "key5": "4ELBLv9EjDh6yVZ8yXyJVi83tfpvanyJGPMa4Z5qRYXC43ELwMhcLoD3LoKUHWhteSx9f2WWCJuhSHQkhjdJvj3F",
  "key6": "9EhZWSZrjEEj9jj9K3vKRTo1wFGA2ChsZBcWzVfdpGHAuR5kfwgKqD6KfymRoKcjJitghiFacgPqkL6WAaGH9Qf",
  "key7": "3txh9Dr5BBsudPsDndYy5fT78jCQBETHQCD7XHWN22grPrNTaHCDaAeMbGvrv4TZqtN8rrcpZHszXu95q1pzbKhS",
  "key8": "c6WgynoMJ7L2bMxzWMCjvfedwdpK6YUbwdeSMWCAt9DV4AiSFnqfq1eYwDvhtPZMWZcBSGLn4WjbSKmeV89BbkA",
  "key9": "2tCEvV4JDBXpBBHG2p9HXihmwobiqfsdPyCZdEGnjSHkBVnfPU6SZKAVcwi6Av36FP3DNNvmonML3nH4aUYE4qbd",
  "key10": "2xDLR2MdJeFDmotrQLNTTgMrKRcNokXdCXaCJHjqAHQdmyH7CHjkTB1PRT2hPytPApE9RkR8S7aN3Pacrb3UuxL9",
  "key11": "5MaHqi73tGzTxG22E1fkBQodayi5CHzQfXGunPpjHvNpvcrHhQ5kB2ngoCgwkf25mD9ukUg5sihMeXetTMyhcjF7",
  "key12": "4TzjiX8pvEtYGnfK7TTiiBVtUY1c32w2RGejoqHXQcbWuvnEy2G2DnkErzSsuyHkvAtTcjP7EP3jum5ywWpUaj4Y",
  "key13": "4fAJM6Q5ESFHMajYUU54gS92G9tfa7BUXvd2BMmZXRn3VGMrzzaQtiQcKv9nkGbqRpjaE6qGnV8qji6UQL8XL1sa",
  "key14": "5d8kKLeJkzrNojjrYv7UUyUjryEnkP38ndcDfoyMccX6ekDREFEr8cP49A4udEkqPEjvm6YXAfvTG4Lq6pETutEu",
  "key15": "2FLFEudvjgFVyrUqrQujeEKAL7oMTzfKV3P1WJDKL2gt2d2vgEaaXzoGFk3Wu8SXzQASrK2PLoT7CQyXHDJYBYAc",
  "key16": "2hMyV3oGsThHkCEoVdrf3G1p1z1B3kgU1vwdfzJ6zyNVd7aKPLSJprV3GNq4TrY64Es8qnX5xypZ1vh94FJFjE4j",
  "key17": "3ynifxjsaY1BTXUmFP9x3SnCKeimApU1FjqG4QorMcFL4a5NkhZTrzfL1Fci2kDfWLto4J5ewagJWNJbVmUwC6me",
  "key18": "xXxyZhMuWDt8DUiaM5T28QtAN4deNXebPBRGce7K1sKdrbZMDbxzrE4a4oZJKnTsmjpJddmfvvkVLZomAATrCFe",
  "key19": "5awPGHnSKdFks4vo72sQnR8WskQWcXQhEUgxrwLxoU4UkppTP6hZMgsdpwLLQrN9oiAQpnsqaCnrsBNFQivVSjsQ",
  "key20": "2mtBrENsuCNRCd2iueY9hNh8CyZGfdPZzXMpTSP1UAdw3pey6Mjke1wz3FbjKs46L4kcGJfVH7KgBjT3YpsE7ti5",
  "key21": "FSDNwrmZy1UdLqmbg1o7fZ9BUURJGWvD8A3b68SYVnnNFNWGYkYvTHcSZqWNfze97vDicD6TxUZTuwdwMfLFDiJ",
  "key22": "6GirZXmLWonqid9zmGHHCHoCQGAj8EWBb4MwheHDH1WH2MZzdbs5yNUaK66wmacCNUCetX2gJ6gwkvmsaHN1wJC",
  "key23": "4QVzpEC6YauCJeJEysWdCxCUExaS3wh9dC58dWnrgp35Su1W1f86mCW1HMN5nNDaBbXhYYejKAqBePjErBVxUF5M",
  "key24": "26xzuPSnN7fnUg3BwrYE72MMWzC2nyn6xMW7Q8JFUuVaYhV6Mb6qAgeG1tKgGHo3ZSH1PQnKmoAspWRGCa2SasSt",
  "key25": "jVqBxR3quEvcgocf3MzxjfNCXumcPHFZcE8qq1nCJKxSuf5FVGVaGsJ3s1AV5BGD6U5o4MRMmsBtCd519Fa36Mr",
  "key26": "3PK8FaUL9bKfmfyBBwxBXt2yd9N9ZUX6pWRbRgFALbkZdgiPGwCH7nnqWrBY4Bzf8mjjuv5vTqTtAF3bSA9mgEhc",
  "key27": "Ubr5jBuJPsVfKYYnP1cckCbC6eC2XKEsfJUeVTB3886PuVM4W4G9ASE5yz7HMVkP21dWBHtZzMeyAXb3fJVMzUX",
  "key28": "5jmUUhwhknsGPvZFbYeVwTEdNnXqv1GovUEghyfzzba9gLDEucWyG2HVr4dmdouxrY8anxoHFRENUcytdAVjrBNw",
  "key29": "4GTRa3GnTHfs16u1HXy5JksrJDsQTu7QRsCvUexPSyBdEC2iLyXBe3xkH8vY3yNLV1ZZvasrRQwWhxFcCWLAM5kq",
  "key30": "3c2UoL9ffE6m6sajT7AG592SiayzUwm7qMwryzT6CysAjiqnvqMVhaqW8krcgdk27XkQ4cdV5nP38svhrtv9XdUv",
  "key31": "23HgSrE3Q1XgzdVEttkWRgxHuzNzLJK7awqaV3V2EUmQYLEF3exVSmLYs891iDvq8JGNRmnftxgnAqTr6LgU6xL4",
  "key32": "Z97k6cWJawXB3PCHPVeVXuFjRQFXmAE9NgmXq1HD4eSGa4pymrtLuJybzhiz8vd8zqZYneQbaWoYxUYKGKeWzwB",
  "key33": "2fGnevBjHo1PtU6K3nbR9xQcFjHR9AwvxsPwXrnEkD3s4b4NWSew5EgRnam2VgjanNczh6s9GSfGC48MhXs8ZCoM",
  "key34": "UCKweoJPU9dMqhUSE1FmTsjMkg4Htqah5J9arH639cRbxaf2ddLueB1Rha9UxfKQyWYkVkj2G6kB8S2DmuLPJmX",
  "key35": "3fx3GZ1ieur95Z7VGB9EshZGNpdFWAgAokgXmoe58Q1a2gSExsS1H8wsJiVF7zNvUr6RJAwLz2H1DxL7ebD46qZa",
  "key36": "3QZb3cba1yfR6ud3n6TL6peQeF4HnAFE7gvKAJSLsTt85qQJomQLK9weJ8zeSTaPo54B8uKwq4TnbnvRAMzbWWUW",
  "key37": "2JwXK2dL7iVMWKKVGaC5wPdC69weaSfoayynsTpeNk8robx7RMmwDdie8i11KzJAVGSLrPjyUEu68QF54c2ugUiF"
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
