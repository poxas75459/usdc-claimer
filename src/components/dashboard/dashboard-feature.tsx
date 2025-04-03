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
    "4KAQ9tFUELDkQEtiBjFqYkAwqsRwD5SgB5iw1kaQxrkDVpgPmmrAqr7xWibJU4SFXE1W4EmFgsV9dkNsDg8QscwQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wvQYZYpchkMadJxuRVUK9paAMSDnnQAhYTvVXFJd3FKiknNMsE55UWt77Y7f1vZJKe1XzLczmhkXLoVEJhvBkp1",
  "key1": "4zeXy5hixuauwyrioNchTjJNwRtiHiFwjTpfzDZNUtb1nPQgrjbBepWSMFacF7xtpFEscqfgfUU3hxxifpyfve3K",
  "key2": "5v97fmNvDkfqRYnoTzLwyBdtVZ5T2fyBPjE68M2oxvsxUuQn4yTCC9VtyPx3ueAVxQktxDqvqW94i1J4Z1ThTfpd",
  "key3": "21Qhgps56GrjufLGHeAe5sQCv6ouFuDEFuqBgUJp5sovmUiD3G8v1KCNfw2kN9Ho4emNu2cu1uXnKoKzS4tpdd1c",
  "key4": "5gsnsLeKVSoNfDgcL7F2NVSLk9ZXijnqxZBNKvWNRwp2JDDy8eAxeujx1QS9pyyZbp8tiJ8zczEyHyHiQgRvbw9q",
  "key5": "8Rju5BsFA9kdyLQ9y6MXQKEVxt8qV2qFAaYK4spvHGTSRtCLS6JysPabxLV8eYLLzYDF2S149duMmRGdvQhjEcu",
  "key6": "5H87u1UpWVVZkaHNDgzaRbKBTFpScjXoT9z2m8EtK8gqoSBaPKzLTesAYpmgqpupqR3DorxZ5NyZMkFoiTdHV679",
  "key7": "21QcD1bGKKEW3n2YHmHSLuxNG9eFPNs7f7ymmiQ6TZtSMcVR7b8BbPGWom1xES7ojmBgs37K139opHaGooNuX4Mu",
  "key8": "2zZr6Ejmh7FfP5s6qFjrfzBjnFfcS8gQs9w2fEY5uHgZarmJSREQ5J3dnyXEfk5moU5JbMMwZ5Ub5UsvWUPyKUps",
  "key9": "24Z6ZG9yqqYpHAsNf1dW8Ef8CEoCtq2ALpLQzzMPBjY4WJPXrCcEko3mqg2Fwh2ry974AiGYPKRN1LWuS8TKEcXe",
  "key10": "54FrjHksFSdRsX8CcJy8mfW36FGXF3aE3kwpYocL6ALqAwGEJRycnmLnr41u8YA6HLCHLNPyeXhd8hp7zq26U1vz",
  "key11": "3wctagfFjTMDhj9qnKPrsWFoLZLvZy2pDuZfudBeaTT4Ty9N2AJX5kAQ5TEyyUDFsgwPjzfDtyQJSQkasRaxgHdo",
  "key12": "3VvSpK7AJZ7F73rgZ2BumknadVd9mCZTSctDh8stNkf12AaNQJDfSY25XTqoDKvtKMZb6wWaS6VQC6Bp4mNEksov",
  "key13": "6dCsFxpMFqoRcChcN19zAULP5RcbvLdcMk4evLVeffSi2JcUhGnG6iHtgSMnwg5ymgZeETSun1JmpZiRZqjDMne",
  "key14": "5ktAwKuMiYugx6JeCUaFRqMqSJ7kLj6ETreezzv6i9joCpAm6HydocQ48M12h6HWZU1eTXBcWLzBkuLJdn12yi39",
  "key15": "3DreGoUnfr6rMQ67fohbngA3qGXpCwC68EVraxtdPVyuJvzmjT7n4xSfjBDS7L9E2jiYtHpctF26kCbQkzZDUFDe",
  "key16": "41Xo5LQnrtNd7EREo864eeGa6QBz1tU8cmTGpAfNSoPGW1vg79yAp8fyXNP4ASPNDV1V5Swz2mxGmm8VFFo6trjB",
  "key17": "2Eh46B7nE2LaacjWe5W6aBZjD7cT3xipKWe43qQehJuvTCcksPajx7wvd5MKFpGGd5ksQfpAKD7MuvqzcWiBbBEn",
  "key18": "5E3eH1ag1tHi8WJLfS8tqmcZ3ckGXy7f5R7sohW9AkLmCzSRNa7EaPLS83qXaUbSqjNraZr3LoFJCQfVCcAhfTF5",
  "key19": "2oKUG17yAQo8PUdDBvQox6CT8bAi5eCj6Q7k8HyHqbA8v9zEpNzHk5sVvwaib7gWREhpU68eVJEjgdHBr652xcg3",
  "key20": "2Fe2KJ6exDFKaa6QGbw6FhPn3teYV8R96CVVuBcM65zDbTvoAD422mnDMNxGoP2aci3Ukx3qTC5CGRzCt75Q1hTZ",
  "key21": "5CYBGFS4RTWndhcwGZg5gpqrhpt3ZXyDmdSzhdJGyhHjFRaxTHWi1GWfoM1vy9GB6pmC58q7Frj5wvv5gxtkNQRS",
  "key22": "EnGe1JzYohcS7tJizmpsseQ6cpsCcURXBjzVYDueEH8dqTiqCzawGpt1QAKhxchtM8W6dnzDxfKnCxcjksVxZBe",
  "key23": "5ucki9cxeAayaeUbp6vPwLP9eXGHD3vZt1qeGLTZ9fsBU5JwJEWuTLM8wGXoUrn7wyKC44jwVLWyRDMzCdZD7Ktc",
  "key24": "ZGB1XJ38LKQTwqZ4Vj94FfYZbcjzyyXtiHH5wAVFfwE2oeA7PahffxePa2LBquSrpsACmBiqTuun5tp914MaxCA",
  "key25": "Zwxo8RYbLaf5tyT4VNZDXNGRL7LQuXFeooxDuqQhriWGPu7sXgXnv7ZWtdSYaAeoMcS3cGpTao1Wy1ZciUWoooc",
  "key26": "24UYwTU9NMXSZU85exDi3kdM2GSQmUxwcMQk5YW9oXgqRkvS886bCRdQKwJn2iFqHFUPSfwWzGyLbvDxAVDLew1S",
  "key27": "2DGwjKBvzVZyrruBpXhwj3C5h4ivQWvoy6ScA8x3VPt1LK18dQFMKEZ3uuw12rUeppePZxDjeUQWkcVxCRTFuFSQ",
  "key28": "264xD8tfccH9avK8pSwmwvd38JAxNFKTdVk2YR3xUKCUH4KRE9jpcbrdHPNhRv7WHndv4seM5Fq5itXxU2xpi5kM"
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
