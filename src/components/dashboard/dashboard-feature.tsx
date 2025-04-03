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
    "2qMnDv3kVPbfLhXqqAWn9R4zioqFVLYbyx3FX7Zkp34YCnuY2U7byoJ9Ddu239droUyFREugggTwUhKgcwtjnvAE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tfN7UbHk8LMxjJJ63LqVNUhJShquchY15msJSE3GEPQ4tEs3Mdbmz3F3vgx1cuZKTdKKBmYsHxNQUANSAxGxL1t",
  "key1": "FYJ7GW1A21yZqn32dpB41ksF6CeMk63qMBQDQzanvTz9ewRFMGXwudewz27q9ziVE1HUPbstaqcbgGLzSxjKMLZ",
  "key2": "3KL7s1SxMbwV5Qs7vnnd9p2RuYzCPaEgz3Ns3ZqKmNm46kokeXNGstmJ89zr25oMJiW4dVPq1j6Zb34qosGr2W6w",
  "key3": "4NS7fTM8butHW96u5QkDz1i5terVTrh3AJ267tCD5kgkUQcCBrXV6FR3Jd63AB3k69sEhdP1cjEusLrphFtmdiTi",
  "key4": "5QsuXkXhX8vVY43zywWJrFboXcT15x8PogicskZW5WqMYe7igwgVF1mcGNPEfmpf8k8XEn5gXE42APgzhQKQxErw",
  "key5": "3EsJv4ttACjLYZneNgMdAE1Q3FSR3yyZaKH2DYh8F4FcoE9kuVgm4YqvJ9BCx42j7oia4ppcNmCgx5Wd8zg36asS",
  "key6": "2x4zdexemkg1jcokUscVQQuWKBLphRKMWcS2aQGjv2JfUphn1t1iQdnN9YBgVdpfgmc4A2Vjq66WSktz4rCs3YCG",
  "key7": "5HTt2ScHBGqffqoC9wWmHM67a2pT43XdUWcH1iCjhD5QiBTayBRwg2DHSssxVCqT97FouwrsB6jxLED47bUPG58",
  "key8": "51Dzwc2WF6Uk1F84VUvBnyLbSFJyBwyAJRwFkkGwuQsMjL34hvz7JTgvBLiK6G9vK6xzbJYLnNsLA4ffuPgnx6hS",
  "key9": "NXdmtK2UYt9tCA5U2q6PpEds1dFDg9VnCmzxdJY9qsLyaXEVzKqmGq3VnCq3WkXMQP1Z5HKYWMRDCzHGvJuNCka",
  "key10": "3x8SQRdnxiB2zRByU2GkNpApXBcSCXX3ka3nGsWNKqr9RLstQtYjQeQw4wE5PG85WL6yxTHaJ8MUcdAF7P2yBbff",
  "key11": "2Aiyx6wGjqakqh5A1g2FKtmA3h9H4eSskm7wYh5eWmNgJtJo2hMfGXc6tETCiqHvKn9gasULDNyP8o2FnvhgY6kz",
  "key12": "5uv9GqMGPU7ARrtUSyMKAopenGqvmrSo8f4hd5RxPU1KJsQmTPW72KeNzS1ZpW7DkrNBb9eLeXnrW93oQXwAXrYP",
  "key13": "mYEyiozvoLVhhNN45V8XoaBR27vSjuAgQvLSdnFR5w4DuR5QmZyVDbu3fFvRpZp1LGx4PoBZr8bBkK5LNxRASP5",
  "key14": "5jJXUzNJZ9dE45QreXE2FoapN5HpVLWQMvVMFqxWQLA9RX4hZMUA35RwSqDDw2omGVJjWQLZh5iJmv59KAQoo5EA",
  "key15": "BKdqC2pfR8JHe5qyvVSG9nR8usCiNxFRdQ6zioc5st8ugBGCR5XHDoMfSjx22DbyghF7aMWBqf26E5a2f5wgbX5",
  "key16": "3DyAyjS2Y6DeSK1pJwmjqiwo3keuJ94heeCCwpuTFMyTxLbgaPhpJKNkr5eBFCYmrMurjT3hfSiBJQKaYFbyaQFJ",
  "key17": "5txJN462vD4Vdm2SeLo2tqbF3XU22EUdfGYq27or3yPDMKhFZKpKuV7zUpnwnRUNx1xJbSCRkHAZDsnyknP74gwi",
  "key18": "22Kn9iCPsqTe95TFeNX5oAjqmbSLCs374vb7PdocgrKFrJwvn7wsc5ZYuxsAqWWcd7BuMA2SX2EqT6nwkVKsvnu6",
  "key19": "5Vrc9D962HGUJwfyLRiSSiwtgepjWpGVqKtArovrhAQcEo8hJTGKAvLiYCE2mefWnJSLtTejxVXb3LQuDP1incwJ",
  "key20": "3nmg1MBeii6F3pZ459sPA6KjG1E6rjwgW9upYboa5h25TmYVgVG1aKGSNbPtyaC1ougrranJcWz6uhUUAzfSBN9b",
  "key21": "3b5PgKMkvLfyYTGXNdssCYnZUxm7cYzow6XBvJBgNPEfcAhCcLg5ZvNYeCYBSC8idy1N94LXFEoDSsBRRRSCMUHy",
  "key22": "2GcCUu3EyrEp1GzLrvPbhSESFjKxAWrfSTtQfrT1rJSFG92oaXAXQXX8tnUtEEh8G2RDw4DykUdCbLcFh78zz9hr",
  "key23": "4a8qfe67bRUY1xhhhUEQuCY4sv8mpRYFyR9gmdMXyGJcTJrfoze1XTbSd71efFcHueMPHE117Q4VMyhA7CAVZyqE",
  "key24": "4tcs4wKoWkdLPppUm1t9gjUd3LqDzDah4QxDCMt1mYgTW6LVRPpJbCoLE5pjs8Bpzde8DyhRq3EkC5yGdZJeujix",
  "key25": "oZsAXpUv8dYi5SaUZmFcgZuq63CNbvAC8NTrvW1k3JxDgf1pi6vgq1Gwh954sVsrPZ4iVueD5K5VqKDdXZtGg2D",
  "key26": "4excpSndFapkK3B3u4ukzg85TnfxuM7dxE565J4BHcFp7oDxfiNehUkpHfsYjFRNBEhYSo2hArdRqw6W69Wgdneb",
  "key27": "3LbU94kXwDqersAq8ZdssW6NyouqoAEXs7ASqy3DHMvS8BZPt7W3JMyFUg3fNKm2nMvi4NNaSDy2oBtgUqN26t8G",
  "key28": "3YwKDwLB34hfDUmx3EmVyynCrZEBhzroxzkJ5GNRohe777GVm65QKouNArTyMkvPP3PM6RUdU5GGEfG6vHTfFYKG",
  "key29": "21MH5wUKWHfab4wrL1HPYdri1gpv4eCRYtwFHyd1LGvDjF1U9rnhqQqoF8PDFKMgpZyn4cDhGaTs6M9WQF2efBBp"
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
