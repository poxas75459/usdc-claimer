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
    "5gpF326dPgjwf7muUDzywjXEFAJJoD7RWevmhXXGpG4psMGnwHA9Cqx5M57fkfjVkw5UhZNWZSg79oyuXmrpibts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iYifxY3rZ5Cwb4duaK7x6niqCYH4wQDnJ1sik51XLZtsEPez2GKeoMcJfj4ZLSxgrtDuTjxqNu1peSkcqYRxqkc",
  "key1": "5tDRPtubyU1EeSwPqMmNXZbzDDGhMxonHBUW9pbzquHTgNRSEv3yFMJNRvpnkB6CyjhFXpP3NVyWkgJVxUJFoyN8",
  "key2": "3VbFNCLKQvpPQBtK4LuVsE1Er9MFJBkWPEMHyUuhEqVfNqeCea8pEvQ3BXFeM55Y2S3tWnpbDvhYGbDpiEq6Lt9v",
  "key3": "4bYuRut22Kbqk9KcXVoMPH8xXNnKVCwT6JiLBq57C97ymoENz9zgnLryL1D6FBXd3GR8x9jK4nnXyVEvFUM1aBJQ",
  "key4": "5cFGBPaTwaD1MGhg7hxy5cD2jMrUY9bDeJsj52juwtX95q6KShzd8NetuQmtVfLn8S5Fg4oKQmz98PAT1gs5rHGb",
  "key5": "3FwmeJaGiyLLR3jjBERNxi8DDAihtG3gU7AWDCbcwtMAzPrGYHLdqFVjwqagq9M9m3a3DkpJRQ8N48iDM5SKeKQp",
  "key6": "5YoKCjywaPmKMtnfGq7nP539E3svioLE9FA4mPze2uUMh7vjZZcDn6y45puMU8g8QqyP71jbky1xdS6ttWwMq5kY",
  "key7": "pnV8NKrHTmLFfUvEGpdFmAkXzkDW37LoZ9cTDoDD3hJajSH3dsBd16tpL8PtKwtgRiuoKemmAHWMHeCK6KzPKYH",
  "key8": "2jJsbULw1MTamsA5wH5bA2VjFsz768qsbbbZ9v7sLZ3G8gaWygehitAzsinfxAdZUkTH78S3Y8j35GgaMbVPT8E8",
  "key9": "5A8WXRGvsd5W5uH2FKmh93AfjdtVNSMBqqCb483MpdaKCtF7pP6Eot7Gc7rdRL1nrHZQ9Y6Pjisf69pLqz1q6GyZ",
  "key10": "5SJcmgD34BvngSEfPgK2qbEJHXhXGdbHfbQxfqcsnKBCE4c1crhAqofcz97pVmtZ9e2E4CLN8ViFfVrcmSF9CvJb",
  "key11": "5JbvE7f5hNnji5GDStLNuCXJhdEqfKoq8Sio9PheMnVh2EuLG4DFermGzcgbyjYxFse4GBXECNMeQ593Poqr9zjp",
  "key12": "aHoxgfkX5nFxZ5ZzsGbeRGgBy72Ce1whDPRGLANCrd15z7aeyyFMZQmQvN1P3rGtDAzmSyM4vxjxnXSYfA84kBc",
  "key13": "2jbE9QCmTTeCCC8aszLtJ7jo5KwyFCjoxyuRKf1B7CRFjm7xM5iX7JyMvKiSqxkGxehWZJdRQKCG1UAwsz17BtCm",
  "key14": "55HU56Rzt8hAdy7iUP1gEbvu26gk7i7JAA3x5W345EHQNwvbHTN7SmKthWsXbjmrvkEfxZHeRpQNySdrv6qFnt2S",
  "key15": "33jhgU2k2Y6kWfTb2jxYongfyxsa9FGhS1iiSGqqJdRvKde2u2PBznRUreZA3xL9ypZi1a6RMo71PCQ3D1vQFMKj",
  "key16": "5Y6TYhXhFQDRiD5TRbsJQL83QbFffNRNWEEKx1bLaq5o4gnrx4h2FZN4M91NmQieiz84myD5prBsmCJ8g1JN3yh7",
  "key17": "5zzmXWcEKnAy8PC51srNYnm5942yJKgyAGR9PgaodoD2sKMvhfTptQcxvkNPdHWJm7hdK9zbm99GB2pB1SjndfCP",
  "key18": "HE3sz37vKjY7VJ63QP1RQdggMLE58K8daKoFCjGAQThDBWBpr2BLueD2bZqfLmtrbKAShnrUACSKMPqPeCT4oNo",
  "key19": "3TimPpweeBxLjYCcK1dj31GowzWeRabS54p9Mogu7na4xAQXYFyAfWB4gqsYpuoubg9EVP6ErHNJnEtZKkdNmAv1",
  "key20": "5ShRHSuoN2vtf4xCrk6tWzQiF7WnuFf7q6fB4zQ3oyRPoYe7XmYPKvArmhrVBJmNdfx8ZDCN8oU2kEd5YBPazgpp",
  "key21": "5jjpdVyY1HW6mrMxgro4GjNhnDDJpYmUf8ZkBTbiET3pFdEMJxjVPCaUhDPhBaAH5XFecccv6DKVfF7Tds7gVumi",
  "key22": "4YH1BS3dr7Gp4PkWUCqGKoALqTT9VZTmCGDLaMS7Qu8rtcAKQF9XDxdR8gVkTS5Lf9ck7eJmdpNvwXv2TNGHkKcg",
  "key23": "64Xs8VtL24EfMLaZU4fPkWji7YcTdZCjvhRDZvNsSCsAxFktyTXKYah1YY6qZ7XpG2x1URw5tS9bmyhr2wnNQder",
  "key24": "39DND4E32XnUVVbQ2ALzgZdjG7ABRvaYCcKZmgWetGQnwRmUh2cHc5ddRsTRnQYq2DyGmfPx3rJe8JGxfMbhkpGr",
  "key25": "3zSBSueA4QfPgnKoC6y9tq8sc6AibvRUNXDnBPcr523cSYaam76z6F5cZagHJ3oZet7FRKgcVEYx4gzH4cToZMNQ",
  "key26": "4Q9ahCire4i8vgZ6Lxd8JEkNT5DwZasd2CUspw9WJPPnmr4dFuV4DxBjsX83gn2hGpSF2MwvwzeSq7G9jGrAhuos",
  "key27": "4hGyBqEgjvDV5LC2oB6SfZtG1YwhKGLHD2D5hp9snCLCfUmeEnzuZNtboUVZJrq7FtLg9P7GStUYGgR3JNVQEvRf",
  "key28": "2j8JJzVjkxnjWN1oUeDU9tZ2pGKYtpXcCWUdbtzajiHRGvgZZsEsWQkZArT86V5socRPmzD3GnvNsxpPxVaYU3WY",
  "key29": "46hCssHnSLYTa5BbECFkoa7TWpZ1ikV8pkSTj8o1pgBuqYyV5NucsdgypvB9onpxFCQHRe8kNQxXoyNcAfuE99Wx"
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
