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
    "4r4CTRrsdoB8x19AnmdN4soDSMykzXNg9ZJ1KkLGfJHMYfeYfXq7PWcZm8qxTC3tiqGRv4dcYNTrS5aSDf9z6CYo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EPtpNo8kKjvHAV2wVojXqmPGUfbEw1YRwRKs3HvVMDequEbwsyqCjrJbtKCQYK5yESfBDBayGjbuexTew2mNS4i",
  "key1": "5Dcfv4HH8hdfsr82G225oSSETnyLJHJZRA8rdDKnhDCTVJnFNaTnQdD5ARCxcAqvbx5tirWZirhnaDKiiWiEKemP",
  "key2": "2xvtmwwfJhuNPzJBkhfXiQv9VGsXiBacRK6pbqAQVBKA74cP7jhJFKkqQUQimoc7odpd3ZY8zrXFSbEijEg9gmbr",
  "key3": "5S5sMFpvoFUwCaN23EPKLsSRBzxUCmjN2pS2dHKVmapugMKXuJcrnLsnNxf6cmrAvsLsX28RufGj85bSrqTn1pKx",
  "key4": "Xmnjx1uAGoc5r14LgfDf1UjVaaZNfU19s4XVRaYEkh31qbkUGRqwoE3z1vUniBon3t3xw2pxEyHHSnZM1PKErEM",
  "key5": "qmfZav2PdgXpTFxs8dxd2WEuissF14SBeUZYdxcTFkHg7xcy1Sn8ENoNad7SCSwReUyYh9YxzAxjWi1rmuMDimo",
  "key6": "k4dkHSZPji6GBgk24n6qY8VdoF7dr2HTfvoTJTLphdwpSf1oY1WnQQLSjQQEsPSMcRuekFwJ1yMRoHoVdoQA5Rr",
  "key7": "2NsJftJ23Ub1otjSZh2AutUp6WZaKaDhEBEhQ8Cbo3wV5Nyamf7QDVECUNS4wkb5v8UizTokUVLZWRUaAVYJGLtc",
  "key8": "62QdVia7cXeme3qw84EBthDPoTRg25tU5UKPJzxHhR6jDd4cx6Axytsi3uSwoi2N67yUBJumBdRXES81hTvbZnxi",
  "key9": "5tkNv9jZW221Ggb9U8Lq4bCmrTat7S6suprworQAM5HTs5ZDDQad2vV49BBv4uNQefJP3xhpRd11uiCkbatupykJ",
  "key10": "4yML9XThuuePRNqUiz8EekS9kaJp1iiUGPX4V7gr248CrBneZ3JkFosxotVFHM3WtNGzAUfyEad2vNDMfFtVgH9s",
  "key11": "4eYaLJvhnJeQP7mWufAoBrQY8v43voK9CYM4TeWkPAsJYF2Sp38du36BaCAFyBxEMGaLkYf1KEqGiC53qpD82y5Z",
  "key12": "88JJNumzVq9LKzNiXcxGm1guqtPNudoYCETvnusqVze4ucRLrkiztBfrBqSJ7oUENa6ayyVuH9Ay3Wx12kkEizv",
  "key13": "u2a8KxCNKtWtoQFAkkxvngVmj2Xun5gy8sybvAd1fmpYJowrDXGgQpZKaFq7vJNs1KznKSa2fibwSvmRo96miyx",
  "key14": "3e3zM2oE567m6iPHAfajcZ1pYphHRELHjh2u8Tdrc7SDF2xMfRtV3fkaBGvDsv6i9xDpCo6oMMEBijPqg7u5DkGv",
  "key15": "4HzWpLGKqcsEfi3Mv755eLNYsC62ho8PnSviXXH5kiXEX7EVCAVdobHh4AGbDpKR2NxDmnLm1xnC8kgXBeA4voeR",
  "key16": "9SQKx9rsuFbE7HnwyVwF2eKsGWLF819EAGyqKuG3T6WMXsHWVnPh93ypxJwWZPV83rS3cgVvfPkhrfBrVHbyFvm",
  "key17": "51XkHjDwoxC71zV7s1jbwsrrP6RpsgJoREn3xw6eZQiS9bfNMyYNLCQeMKsX89sXu9ZtGekgaAvcQTkpUu7PhtKK",
  "key18": "DWwGCsKNPbxwNLz1aQu26nGW5KHRBiBYiM71uzc7GjLkbRmwyAZWseCvtXhxGpuiXha2DvkY4vDas5gqH4ftRCd",
  "key19": "51PtV9Qg4Lykzp1iJ1VzkmqXXpwioZTPGrX4MZJenZHDb1TtQUf6UAWyHjMLJmzytHbmvWE6xJAogdC1JjThJMKB",
  "key20": "29mJxYeysJaDqyomVBM77JrvMJ8E2vfw98SGXh1siLuRWWuNSBFDUjkMizKwPyrsD5BxZrBSFokKRWPyYMWW79Qi",
  "key21": "38nnFXL79QNA65yagQmHY39XKAuZLwFFN6f6bNJoGVynhLvD9e8LphE78wXKHtFgACd2CvgVreGHACQ9WGfcEv65",
  "key22": "4DxdnWAYtKA5mLEkHre1iPdbotGmWE6gqP3LE9t1GBqqsF118yGnV5AZEj1bm5uNU7YngDzgdEGDgirxWvWPpHqz",
  "key23": "55ZVTdyYLBPLiUBiwe5vHYGeRJLr8tPsF2YzcxW8wMpdHp6YmRmYeKUNyEdLu8TQ8N1iwcm25QVakhRCCV7jvsNX",
  "key24": "2jLD92UK3Uyhpb4s9EbNA6o4ExesPGat3yB7XSA2bpBZsEnMECTLBgirM1cbBEZPRMQxArXBktcw79YBFFJbY9MB",
  "key25": "5drKMBFKc4wd7yh9grtNVp5gxVVAveeyZinkxbBdvhVEh3w5NdsXfBHzT9SHiortrsKhmmcfb2mgV7kF7LLCvi6B",
  "key26": "128jjUDMKq3VZFm9X79fCDPz9PpaKNZxkq1saBQPjckuy6Eo5EBqsbzT2dW71BYS2ZZjMVqWYA1SHerWL94ShPEd",
  "key27": "2Pdg7dHrMPaDsf4USMBXqh9MekEZPhdgFWWqwLA9Shf6iRs7qtpx8DqSUy1mkDAf1dLPVHFefyEXHFr5ZSWyfgmj",
  "key28": "43U6kPQkhDc8Ni2sgP7oqBRoFhYLsBeqC2beSJBmZz7ohPgWXFpfvDMBD7axHs2y5UPRWjmKKptutAkQ55pK4zpQ",
  "key29": "3wprEeKppGzxRag7uAsHLfZCwCE8rP3M8kCRNqtviijCtbDAZXQwGxU29QVmC85ZpSc2ES94SRJ3Ejhdaw5vXkpf",
  "key30": "2MQyqw7ESS3BMziQ3YhezmC4f1hnVH96g2rHj1YDVyXfNzv94QMyXAUCb3VY3xo7VtBhfJ1HGM6FBTGbw19CK3z3",
  "key31": "4QuX4XzVbgZPEpxNDZ2zA2Q8vGZFUDcAsAWmZDE6V8wmHFGERQrW7KVFYMDjJcRgVkzF9bKtUnhN6fTCSGahMyGp",
  "key32": "4xehutY2cRV7rDSsbYAPTaGj6AnCHW3nvZak5JWbRHvhGevK198iqt4N4FVn8fM3f6jra2HehbE6XpXxwoQ6XBEc",
  "key33": "21hByzEEK6HEdS66SwTi18BbRxWE7oKS1GjKewQgyqtyFSQHexppy5YEJ7jXEbnNQ7mFy41JRwincehJEJ7vygc6"
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
