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
    "4JTURVe6S7MXtBuVbtNn5NfiE2d43ue1Rzp4xnxVpHpMBXPL89VwnUjSd45QcTLQY8nC1z93NxD6EhM6EXJmuRq7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21RaqB5UC2tLNStdwAwC7iBfDhET9UQxMuXsYpcEH3nnZLCDdHg15T3e36dGdZ8vd2tZYJx2su7yB4m592nFxHt2",
  "key1": "4edUHhJ95k87S4YBjugbRrZWPJdqzHw9NB9BPUcyVxjP4aNoXmWYSpmMXdCyfJaz5mgBoP2JD957mEeGyQDRsPv",
  "key2": "41XfKFNh6MCV8amNE9KY9DJMwd8hQvZfo5EtjohL2L4VCnxjwWPLieC9uHah19UWw2oJto9JjzsR1VzuzCsZbsZs",
  "key3": "4YgaANhv7X1vzqp19rXGwVUdnkHrdc9ncVw9MxSVFZ7W9EJZ6CFgcmTxh7NdMQvHiA9RenoYtn7bWAYRiBHT6Ebk",
  "key4": "45W6T6fyWuPL2MvUsMwdJ8Mr61q4uyCva8ceQEr2A7GRgxdQDP91B5cfCbbyg1nD6ChkKwPYJ4nZqaUfHiQ7pfHP",
  "key5": "3dkBpJnF9ED9G6GWbY5jXb7CmVd16a8X4QnpT945VMPCDxXFKb6qMe3N9QpHHU9pyyxsaW5479a3QJAbw8cWnoJv",
  "key6": "51P8ssSJ8Srh4huQqyLarwRvecuAo18ndxtEusyFDc3qZ4rs1JjppGFfqn8kKVSpdZyTunH3Wd6vGPJkozsK9BWR",
  "key7": "3QXraZTiwscEnAGYVCscthqfyQH2KLxJLdwAYHwksbMk83u94H4SF7yfjvLrm13LmU1ceh6y3RUiqYE3dWKhq1xg",
  "key8": "3xNchmjd2BcEtvwd88rA8X5yDFUFUjrkj5tboQ6K32683Rxt42Kuycz6FNiNnDg3ADixDfXc6uTNwe3q8QFkWGC5",
  "key9": "3TyAg4dE96ed2jDmiEGv9s9J6urmWb2M6cGQTAzaBJHCA7DL1u1C4KAzV6wEJYoyUDVCAX62zF1rEw6KUmvxn36s",
  "key10": "36Tbkrp8ChjhByUp8Yv4WCKDB84teu2ca8sjHPWGmp2vnTcgyCjQLokLJ2xa3musaGo6Kz9JCZ2qUGhJT98q1UC2",
  "key11": "2bfsxGUjFqPsEwiUJY7GSKcA6yr29cvevWTFaJToDrabxc6h2L2dFUaQeqzCXYn87nfbGvcMEbCxxKHueYQudQpu",
  "key12": "3n62L8TXqUTN8M6NPpEXjYLxeJifaWQnrne3DjQnpDRVqz4VqoHHSo2C3MzuFfVdfWPmiFLmeo8EPqbfBCsS8e3T",
  "key13": "Kr2wJG1bf1QhbrBJcbBTc8LaXPurSSWMPhvzeX2mtnTSKrTF3PoxHkX3NJEHzNPBQhtLj7cNS5tMxt3nvochTQN",
  "key14": "3sZ9ytWKpNQbkRuSA87DLJgBBY38x5rVcoEdRgcrvvVRt5qdY4kLxkKP3tyGE552WFY4yjE4SHdxDCS4DnMMFxz",
  "key15": "5XKYwyEH4uZgSyvRLCdk68sWp3i4KLSNWK5TvC2MRZ5FNcEmuv165NSRHZcbHM6QgAG6PFGtKi3KL9xmSmUhBxeu",
  "key16": "4VbkQmVXYP2EDTjPJCAm6gYcWovVtv7CyyF1qsWTkJLodtaXbsJ8vz8N41NSqm5mhurXQ9XoQxKuttPXTNrqrtix",
  "key17": "373SWvNF6fHKGt1ySuo91waRuDJ3nX93pBBS8zyTwEubZBXa7tNFfp185o85uoCSjrHQANGVMNGWpNFiVuEveGT8",
  "key18": "5NH3feAarJRRdi3QH3KcgGn6Vj2ji7xtMUdYBaABNN5h2Mqii4xf1gdpSK8eY4gmPGqAyHbdqHaewDjvMuRJ3KAE",
  "key19": "5KhV5uvznaCsZTq22TEPR4pzdE6P8PmqbMZr7vMzFUh4KZn624wapSVYPojiKgzcTbdXZSa1opaDFSZ1iyEouYXW",
  "key20": "4cpJJysGY4GQU9qWRCTXyNJfYsjTiPsYFgKjpAKkmxnfZ3u1b7t5EgHGARth5iFEimnTALkLEqzV5p1HepgBxsZB",
  "key21": "5RssL65Cw2pnaeFdUYAr8jK9FuLoPcQeqmhnSojtGDfj4GLE15Pt3zRj17yAnP9dShSXuSTiasV2Jk7LrU4SYmyY",
  "key22": "PVwFrR6kf2tGKLbZUa9qRrbs538zYa8Ytvt97kYRGWhTxY1j9rYqpVEaAR2rtXByx9EWbJQEPMfkFirNJspYyjX",
  "key23": "3BA6c7tf4DgsZgUoZP6Si8pHhsn4wjjTdzB8a6vgriGjENT6Ba9jpyDv5HnSGcTomekGCng3c4XDGNLofPrUef7e",
  "key24": "44ZdNsNNCcCmEXqh7ifvQvm5EKTAu2pNdgf4VvhCs4uDUbUq1Dpen3LKak6tptCMS8uMDsvxrGePAo1W8YRjDUU8",
  "key25": "5cKXc5CyjFtZHR3QguPvq7JCMCAJS1oGrrPQQooVVKZ5sMVh6ixqCUUKBsNs5uvmSAYRo6oP8fPTXZRkNSwBJSEK"
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
