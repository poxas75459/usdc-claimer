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
    "26ys1nZ2Yh7fVa4V9522rNSwtRwRR2HwH7aKiALtUTR3MSYm5wQSHBwbKPyHuvfsy7oRakWHXe5WfKMF2xDeu7WP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eBDU6oAEqBQpAp8Mo1aj5ecuCS2biTakB7UuAwVbmy475uKLKjsmL4Z4db2tYHUudhi6orWUuW9BduvDg31YCCS",
  "key1": "jeNNXA47pSBdjaBGtTnhr58KJswDSCEeSuYSy1ovEYtaJYdvtQGLcwLHtMZGERVmxe9h4Rc8NhjqW45FnxpA2Ww",
  "key2": "uDzypjapXdyKJ9NfsoXMJkdhka2nsAzTopuC78ymaeLmWUBtBogm6MHcmCcKm3GnZxW7ajVMejXqXe6yb4VhyhP",
  "key3": "3At6GYfH8PkjCvhVaW9vVBPrKSgZXbVQRvnavgKCApy7xtq2udaxdBxw7L6X9wwry33JnYMQYubjGAkvdFwkimA7",
  "key4": "4QfJmtA3CjZMwMpVoJDN4Wveo5WgwfbAQF2YvQT1reQFMnumeTZ7RXzVovVrC4Uky4nxXpCZGQJ8XTt2CDWsKWcP",
  "key5": "2x6KriZN8YW8w1iBmmS7QfXBdBpK4gSnvD2Fwvn4EozLwweTUgpbJZwiHe6sZFiFswF1ovFstMHz96QNx89Jersa",
  "key6": "4N6xFysE4C2DpY1MDFPnUh64BDhuyPGbY8ifzaT3vWoQdRRC3PWXBkKPVmsNC3FQCbxEvU652CprKL75Ph2AkmCU",
  "key7": "3sPY5pKqrihwoeXzzH6PLrH1d3p6ZWYMXBg4enW7jB4p7ricY9ospxxGV7pu4ioycGCHkMFHKDwS6TuVidDrsyee",
  "key8": "2zMzU4e84yu1s9Wkis9PieaguDRwokWqsjNHaREvVS7dPhCTFz3QoJBQQYz6x2fhEfrFQcNs7mF1WeFNy98gP1iL",
  "key9": "2k99yCpNtSwFg4N6jArCumMFfmTa9yRhU9iHTBQGwht17PjTpaFQaJ8fEPwaoVWxifEfZNanQdzBGChQC9FPgyhz",
  "key10": "jrLJtHBBVVcznni7S9honaaoCWN4GfTGCRtiTPM4HZqbqsYFrkfpWjbLHDZY4NKcCn1YxkDmJYAApqS8PTSsKQf",
  "key11": "2fkti71jT8bLLCJ3w5GFAZq7X9L4MzT32YS5BDtTBiCPKZxGfwepFzpM7PPHYEP5MGJCSbr5pWTeu8wqu8QXQVkJ",
  "key12": "5wU1xgauth7oZLLjw9CgcFXrWEnj4wAVxAxizGj46ezaqukV4xroNcmGDaUTMSUTZs1VfJQULo9WKWtiyT4FgcLK",
  "key13": "2ZarsrTxYwq5pTt1QND8B7apkfckPgNwxY47P14YP3TqcfAbyjqLdBC3qQQ6A8WHiqZtgWbZLwfEAV8UVixSKKuh",
  "key14": "3KQSdtphQ4SJU2EAyYmTo2uQGHsmCrT7DEsZbsokbiimrj8Lp9L5WJixkaTFbYK3GYMmR3dy2iomJFKf3pfS6jXh",
  "key15": "5cMp1wJiW4yHgX2ptARoK8dryPtepMWLpvVwNiZme7zRwV43ekRkKCne9jEFbg5FWT5iaYukoBwxrYJo3G3okWeQ",
  "key16": "3wqh6J5aX57MTJsXuhdZYoDvz3R8G69adhJAmSzFPTeG643z9oiYQkb4FEwyAv1hascrsCYCd6yaQMaeWUQNEQe8",
  "key17": "Famm9T6RNSwd4KtUMnawNbdTsGhVtoJALpaK2mdy63FQ8c59Yx1tBgeqFTGYDB6Xc9q661LDAVZvNqJxwZfShpu",
  "key18": "2TwFeGxFLiwbo6QYeVpdtfh9vjUVHWCz6et8UfJHdo7noDYgBLKha1Nk73dPJiNGt2ccnvw4KJhYw511VY6bVo97",
  "key19": "4eA3S5e1krZv7ajjyyzUjGzjHeY4qXXUNLjcEu1KQEYpHup2ne3X6g9Q68eBSRjevMQHieZJjvH84MnhHJJHnL3Q",
  "key20": "5gBaMeWJbTGjyqyhVGGpDJ1y7GAVUiBEQVHe2o2R9XQr3HEAwJfTV3Yvkf13C4Qana74MWYfXTwYV6zByuxpFk7j",
  "key21": "2w7THtTKMobsnxHDCkyXWJ7FVyf8FWw3ufHZrdZ667kEyzrkDHnRf9sPNqUS4DuBtAToDk9qXvaT6JatDQSJMgsP",
  "key22": "KqVduartEKnETK1wu2wyJ9TMWhqAGnzi78DWhjVC4AxFCLh316oxZx3kEgd99FQAxtUWbR24sseNBTp4ZoF8M57",
  "key23": "UYf2gmJZ61bNXGG97Ua5rWdbxioKwAQzEiXe7jRJ393k5Ldu5oL1dvsyW19rFfTDPjxMiJsdR768oToppVURxiJ",
  "key24": "vrr8sKhEpNesPRF5B9e6E45gS8a6Po28dB62TrqjvNCjjMmKirgbaQP3MFA2BAADW5A9W2Zdd2U3EQaDxp8DfA3",
  "key25": "2kyenr7FgfYFvTHXBmYDL2MYetX9VdH3cep2jv7rG64ihJeUcDPKjsmMFbfDhgbeif9XtTqK5jemwxNqfjvMZwnv",
  "key26": "aR6AnNrepRyH2RWFFwBxTi9jD9pg6oWU92aorwjAkCG7VN619pgAayFWb8HXFTbzZtvguvedWKY3Uvmg6motqKL",
  "key27": "5CH5295UXEzCiiPYwvRbKHZKYcynragaBP5sduzBk75dvPjEqdg38hA4sXxVCYccrf9QVk46TYgNGC38Q8EmJr7E",
  "key28": "2BbKVMXZtoABRDz9twXxGHBLYs29yASTK2cQ8k84LGAuWgYpvYDGh5B14FFc3knR4sKkxgNP4mcxme63yZc8eQoa",
  "key29": "3QY7AUqafcstPR7vumDQRHT8akVJEhc6bmVxBYT7sm8orADSHc3iFFBCpB8f8g7XGUuyd6Lbi6HKuMTryQ5YQGHs",
  "key30": "3p4qkR1mT3gLiPUdtGZQPXFjX5xPj9EP7mb1r8gXT8yGnZTvdMTkDhbLJD3T9xenixTAnB8C6HEBGGYmnTFjUd9t",
  "key31": "5wFAaUQgjuruX2XMGNV2QWX4812KVc44moUVQJDTU5Ykx6iRWbQyStXonRrTKqkfUDZpK6ZydPpcSVzifVEjcHpG",
  "key32": "4wG7ATioDg64hL9KWuH1ECWuKw2rKNdyzUBqUhpGa69RiY3tKQs7m1j5depUHYTxCdzfyYyLokuzksnts3478bUx",
  "key33": "61SwPvURj8WFmDjXvd8VZQKAfNRWvV6oQxGsHCSMqYWzNPoUVmFHrCa4Bpn9wiwDuR41PvnRwpqZWLvcnftj7qgy",
  "key34": "4KMfLvTteDqV8SFTbGjrEGgD2KHxbbt6aGsiGmouqLNsSL47AwCX3zs5uP5cqoqSjQxG6M7ZU8Fx1iMXp7VoSfty",
  "key35": "4gvTujYf7HBJ6vDQjNri4pXR6dYXH5yU3PKnj49vJSzqVBagDJcTA8evVy3kJ3FzZNqHVT9EZYojGhg2JGj5vyci",
  "key36": "3QiCfpdWTCUky5vd1ab6DeViu8bi2NLk1nxegpSCumMmDpnZd8t1U5rkMnM7o6NmnbV88iejT2bcoGfg8PGqJjQq",
  "key37": "51rDWTnViKYuDP8dXBGv5kQ7r658UzMAhMj2JX2y2AZaK15tPukWjf2WP492vgkDS74QdEabyBNdnx1dVsRUFjD1",
  "key38": "sia9wJEnVJmaUKvbkFiCMu47h3tHQqXx7Y8MAgH1qMKHcbMuWJt8fvAhqCGJaA1x1ABaRdGYfVGLiBZHJwGdNok",
  "key39": "JRUS9wpaxkvS2pKf3dXWuzcxCEPDk6NNUVKKBVBgNkFFxkZCqJkgB7J6zKHuXpN8Joou43DxtPoUkQ2KguyN9VK",
  "key40": "4t9x4ZgNQ5G8h5w52ZBH3B9CGoSP3upHEAENG9UFiDz2g8FVKDMdFKgm6Qe8WAyPRyQJ13Uh2zjXveaJPy5JkFdW",
  "key41": "fcLobfGkP2XGTXicbsMJ4Ajoa6TKR2fDYi53TbZKUZs4EDQFQRoF5cxyHW9KXoDZGqu87LWnv26PnBfp2uyGj87",
  "key42": "3nxR2xMzPkLgMWjFeGEdq6SRyWstXpgD6bGJMrdcFTqfNvf29GeEtUGb8W3rvnB4vjTggHKkhzn6dGxQtM8SLQzc"
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
